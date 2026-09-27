// 自动检查画面里的文字有没有互相遮挡。
// 用法：node tools/overlap.js [集的 id ...]        不写 id 就检查展厅里的全部剧集
//       环境变量 OUT=输出目录（默认 /tmp/overlap），SIZES=desktop,phone，TIMES=2.5,5,8,11，JOBS=并行数
// 每一幕在几个时刻各记录一帧：画布上每一段文字的位置，以及标注、气泡、胶囊的方框（引擎在 window.__LAYOUT 里记）。
// 报告三类问题：
//   字压字   两段不同的文字重叠
//   被挡住   标注/气泡/胶囊的方框盖住了先画出来的文字
//   出界     文字超出舞台边缘
// 有问题的帧会截图，结果写到 <OUT>/report.json 和 report.md。
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = process.env.OUT || "/tmp/overlap";
const TIMES = (process.env.TIMES || "2.5,5,8,11").split(",").map(Number);
const SIZES = { desktop: [1200, 900], phone: [390, 844] };
const sizes = (process.env.SIZES || "desktop,phone").split(",");
const JOBS = +(process.env.JOBS || 6);
const SPEED = +(process.env.SPEED || 3);
const MIN_A = 0.45; // 淡入淡出中的半透明文字不算

let ids = process.argv.slice(2);
if (!ids.length) {
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  ids = (html.match(/src="([a-z0-9-]+)\/scene\.js"/g) || []).map((m) => m.slice(5, -10));
}
fs.mkdirSync(OUT, { recursive: true });

// 在页面里挂钩 fillText / strokeText，记录每段文字变换后的外框（CSS 像素）
function hook() {
  window.__LAYOUT = [];
  const P = CanvasRenderingContext2D.prototype;
  const rec = (orig) => function (t, x, y) {
    try {
      if (window.__LAYOUT && !window.__inChara && this.canvas && this.canvas.id === "cv" && String(t).trim()) {
        const m = this.measureText(t), fs = parseFloat((this.font.match(/([\d.]+)px/) || [0, 12])[1]);
        const w = m.width, h = fs;
        const al = this.textAlign, bl = this.textBaseline;
        const x0 = x - (al === "center" ? w / 2 : al === "right" || al === "end" ? w : 0);
        const y0 = y - (bl === "middle" ? h / 2 : bl === "top" || bl === "hanging" ? 0 : bl === "bottom" || bl === "ideographic" ? h : h * 0.8);
        const T = this.getTransform(), dpr = this.canvas.width / this.canvas.clientWidth;
        const pts = [[x0, y0], [x0 + w, y0], [x0, y0 + h], [x0 + w, y0 + h]].map(([a, b]) => [(T.a * a + T.c * b + T.e) / dpr, (T.b * a + T.d * b + T.f) / dpr]);
        const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
        const bx = Math.min.apply(null, xs), by = Math.min.apply(null, ys);
        window.__LAYOUT.push({ k: "text", x: bx, y: by, w: Math.max.apply(null, xs) - bx, h: Math.max.apply(null, ys) - by, t: String(t), a: this.globalAlpha });
      }
    } catch (e) { /* 检查工具自己出错时不影响页面 */ }
    return orig.apply(this, arguments);
  };
  P.fillText = rec(P.fillText);
  P.strokeText = rec(P.strokeText);
}

const inter = (a, b) => Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) * Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));

function analyze(items, W, H) {
  const found = [];
  // 同一段文字描边 + 填充会记两次，去重
  const texts = [];
  items.forEach((it, i) => {
    if (it.k !== "text" || it.a < MIN_A || it.w < 2) return;
    if (/^(Na|Cl|Ca|K|Mg|Na⁺|Cl⁻|Ca²⁺|Mg²⁺|K⁺|P|Ac|M|GTP|GDP|cAMP|z|Z)$/.test(it.t.trim())) return; // 飘来飘去的离子、小记号
    if (texts.some((o) => o.t === it.t && Math.abs(o.x - it.x) < 3 && Math.abs(o.y - it.y) < 3)) return;
    texts.push(Object.assign({ i }, it));
  });
  for (let a = 0; a < texts.length; a++) for (let b = a + 1; b < texts.length; b++) {
    const A = texts[a], B = texts[b];
    const ov = inter(A, B), small = Math.min(A.w * A.h, B.w * B.h);
    if (small > 0 && ov / small > 0.2) found.push({ type: "字压字", a: A.t, b: B.t, rect: [A, B] });
  }
  items.forEach((bx, j) => {
    if (bx.k === "text" || bx.a < MIN_A) return;
    for (const T of texts) {
      if (T.i >= j) continue; // 方框之后画的文字（包括方框自己的字）在上面，看得见
      const ov = inter(T, bx);
      if (ov / (T.w * T.h) > 0.3) found.push({ type: "被挡住", a: T.t, b: `${bx.k}「${bx.t}」`, rect: [T, bx] });
    }
  });
  for (const T of texts) {
    if (T.x < -4 || T.y < -4 || T.x + T.w > W + 4 || T.y + T.h > H + 4) found.push({ type: "出界", a: T.t, b: "", rect: [T] });
  }
  return found;
}

async function checkEpisode(browser, id) {
  const results = [];
  for (const sz of sizes) {
    const [vw, vh] = SIZES[sz];
    const page = await browser.newPage({ viewport: { width: vw, height: vh } });
    await page.addInitScript(hook);
    await page.addInitScript((sp) => { window.__SPEED = sp; }, SPEED);
    const errs = [];
    page.on("pageerror", (e) => errs.push(e.message));
    page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_CERT/.test(m.text())) errs.push(m.text()); });
    await page.goto("file://" + path.join(ROOT, id, "index.html"));
    await page.waitForTimeout(300);
    await page.click("#play");
    const n = await page.$$eval("#chapters button", (bs) => bs.length);
    await page.click("#ch" + (n - 1));
    await page.waitForTimeout(100);
    for (let i = 0; i < n; i++) {
      await page.click("#ch" + i);
      for (const t of TIMES) {
        try {
          await page.waitForFunction((t) => window.Anima.sceneTime >= t, t, { timeout: 30000, polling: 30 });
        } catch (e) { results.push({ id, size: sz, scene: i + 1, t, type: "报错", a: JSON.stringify(errs.slice(0, 3)), b: "" }); break; }
        const snap = await page.evaluate(() => ({ items: window.__LAYOUT.slice(), W: document.getElementById("cv").clientWidth, H: document.getElementById("cv").clientHeight }));
        const found = analyze(snap.items, snap.W, snap.H);
        if (found.length) {
          const shot = `${id}-${sz}-${i + 1}-${t}.png`;
          await (await page.$("#cv")).screenshot({ path: path.join(OUT, shot) });
          found.forEach((f) => results.push(Object.assign({ id, size: sz, scene: i + 1, t, shot }, f)));
        }
      }
    }
    await page.close();
  }
  return results;
}

(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const all = [];
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(JOBS, ids.length) }, async () => {
    while (next < ids.length) {
      const id = ids[next++];
      const r = await checkEpisode(browser, id);
      process.stdout.write(`${id}: ${r.length ? r.length + " 条记录" : "没问题"}\n`);
      all.push.apply(all, r);
    }
  }));
  await browser.close();
  // 同一幕、同一对文字在不同时刻重复出现，只保留一条（记下出现的时刻）
  const uniq = {};
  all.forEach((x) => {
    const k = [x.id, x.size, x.scene, x.type, x.a, x.b].join("|");
    if (uniq[k]) uniq[k].times.push(x.t); else uniq[k] = Object.assign({ times: [x.t] }, x);
  });
  all.length = 0;
  Object.keys(uniq).forEach((k) => all.push(uniq[k]));
  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(all, null, 1));
  const lines = ["# 文字遮挡检查", "", `共 ${all.length} 处（${ids.length} 集）`, ""];
  ids.forEach((id) => {
    const r = all.filter((x) => x.id === id);
    if (!r.length) return;
    lines.push(`## ${id}`);
    r.forEach((x) => lines.push(`- ${x.size} 第 ${x.scene} 幕 ${x.times.join("/")}s ${x.type}：「${x.a}」${x.b ? " × " + x.b : ""}（截图 ${x.shot || "无"}）`));
    lines.push("");
  });
  fs.writeFileSync(path.join(OUT, "report.md"), lines.join("\n"));
  console.log(`共 ${all.length} 处，报告：${path.join(OUT, "report.md")}`);
})();
