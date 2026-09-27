// 导出 3:4 宣传片（promo/index.html → promo.mp4，1080×1440，30fps，带八音盒背景音乐）
// 用法：node tools/promo.js [输出文件名]        只截几帧看看：node tools/promo.js --frames 2,10,20
// 需要 ffmpeg（系统里的，或用环境变量 FFMPEG 指定）；背景音乐由 tools/promo_music.py 生成（需要 numpy、soundfile）
const path = require("path");
const fs = require("fs");
const { spawn, execFileSync } = require("child_process");
const http = require("http");
const { chromium } = require("playwright");

// 用本地小服务器打开页面：file:// 下贴过图片的画布不能导出
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".svg": "image/svg+xml", ".ttf": "font/ttf", ".jpg": "image/jpeg" };
function serve(root) {
  const srv = http.createServer((req, res) => {
    const f = path.join(root, decodeURIComponent(req.url.split("?")[0]));
    if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((r) => srv.listen(0, "127.0.0.1", () => r(srv)));
}

const ROOT = path.join(__dirname, "..");
const args = process.argv.slice(2);
const fi = args.indexOf("--frames");
const SHOTS = fi >= 0 ? args.splice(fi, 2)[1].split(",").map(Number) : null;
const OUT = args[0] || path.join(ROOT, "promo.mp4");
const FFMPEG = process.env.FFMPEG || "ffmpeg";

(async () => {
  const srv = await serve(ROOT);
  const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const p = await b.newPage({ viewport: { width: 1080, height: 1440 } });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message));
  await p.addInitScript(() => { window.__PROMO_REC = true; });
  await p.goto(`http://127.0.0.1:${srv.address().port}/promo/index.html`);
  await p.waitForFunction(() => window.__promo);
  await p.evaluate(() => window.__promo.ready);
  const { total, fps } = await p.evaluate(() => ({ total: window.__promo.total, fps: window.__promo.fps }));
  const grab = () => p.evaluate(() => document.getElementById("pv").toDataURL("image/jpeg", 0.93).split(",")[1]);

  if (SHOTS) {
    const dir = path.join(ROOT, "build", "promo-frames");
    fs.mkdirSync(dir, { recursive: true });
    for (const s of SHOTS) {
      await p.evaluate((s) => window.__promo.seek(s), s);
      fs.writeFileSync(path.join(dir, `f-${s}.jpg`), Buffer.from(await grab(), "base64"));
    }
    console.log(`已截 ${SHOTS.length} 帧到 build/promo-frames/，总长 ${total.toFixed(1)} 秒，页面报错：${errs.length ? errs.join(" | ") : "无"}`);
    await b.close(); srv.close();
    return;
  }

  const wav = path.join(ROOT, "build", "promo-music.wav");
  fs.mkdirSync(path.dirname(wav), { recursive: true });
  execFileSync("python3", [path.join(__dirname, "promo_music.py"), String(total), wav], { stdio: "inherit" });

  const frames = Math.round(total * fps);
  const ff = spawn(FFMPEG, [
    "-y", "-loglevel", "error",
    "-f", "image2pipe", "-framerate", String(fps), "-i", "-",
    "-i", wav, "-c:a", "aac", "-b:a", "192k", "-shortest",
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "19", "-preset", "medium",
    "-movflags", "+faststart", OUT,
  ], { stdio: ["pipe", "inherit", "inherit"] });
  for (let i = 0; i < frames; i++) {
    await p.evaluate(() => window.__promo.tick());
    const buf = Buffer.from(await grab(), "base64");
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (i % (fps * 5) === 0) process.stdout.write(`\r渲染中 ${Math.round((i / frames) * 100)}%`);
  }
  ff.stdin.end();
  await new Promise((r, j) => ff.on("close", (c) => (c ? j(new Error("ffmpeg 退出码 " + c)) : r())));
  await b.close(); srv.close();
  console.log(`\r完成：${OUT}（${frames} 帧，${total.toFixed(1)} 秒）${errs.length ? " 页面报错：" + errs.join(" | ") : ""}`);
})();
