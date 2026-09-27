// 把 assets/icon/icon.html 导出成几种尺寸的 PNG：node tools/icon.js
const path = require("path");
const { chromium } = require("playwright");
(async () => {
  const dir = path.join(__dirname, "..", "assets", "icon");
  const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  for (const s of [1024, 512, 192]) {
    const p = await b.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: s / 1024 });
    await p.goto("file://" + path.join(dir, "icon.html"));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(200);
    await (await p.$("svg")).screenshot({ path: path.join(dir, `icon-${s}.png`), omitBackground: true });
    await p.close();
  }
  await b.close();
  console.log("已导出 icon-1024.png / icon-512.png / icon-192.png");
})();
