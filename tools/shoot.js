// 逐幕截图，检查画面用。
// 用法：node tools/shoot.js <页面路径> <输出前缀> <宽> <高> <本幕第几秒[,第几秒…]> [只截第几幕...]
// 例如：node tools/shoot.js synapse/index.html /tmp/syn 1200 900 3,8,12
// 等的是“本幕已经演了几秒”（Anima.sceneTime），不是墙上时间，所以机器慢时截到的时刻也准。
// 输出文件名：<前缀>-<幕>.png（只给一个时刻时）或 <前缀>-<幕>-<秒>.png
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const [, , url, out, w, h, times, ...only] = process.argv;
  const ts = String(times || "6").split(",").map(Number);
  const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message));
  p.on("console", (m) => { if (m.type() === "error" && !/fonts\.g|ERR_CERT/.test(m.text())) errs.push(m.text()); });
  await p.goto(url.indexOf("://") > 0 ? url : "file://" + path.resolve(url));
  await p.waitForTimeout(400);
  await p.click("#play"); // 暂停自动翻页（动画仍然在动）
  const n = await p.$$eval("#chapters button", (bs) => bs.length);
  // 各集只在“换幕”时把本幕计时清零，先跳到最后一幕，这样截第 1 幕时也会重新开始
  await p.click("#ch" + (n - 1));
  await p.waitForTimeout(100);
  for (let i = 0; i < n; i++) {
    if (only.length && !only.includes(String(i + 1))) continue;
    await p.click("#ch" + i);
    for (const t of ts) {
      await p.waitForFunction((t) => window.Anima.sceneTime >= t, t, { timeout: 120000, polling: 50 });
      const file = ts.length > 1 ? `${out}-${i + 1}-${t}.png` : `${out}-${i + 1}.png`;
      await (await p.$(".stage")).screenshot({ path: file });
    }
  }
  console.log(`幕数 ${n}，页面报错 ${errs.length ? JSON.stringify(errs.slice(0, 5)) : "无"}`);
  await b.close();
})();
