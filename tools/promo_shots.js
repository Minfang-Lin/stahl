// 给宣传片截几张展厅的手机截图（按脑区 / 按章节 / 角色图鉴）：node tools/promo_shots.js
const path = require("path");
const { chromium } = require("playwright");
(async () => {
  const root = path.join(__dirname, "..");
  const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await p.goto("file://" + path.join(root, "index.html"));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(600);
  await p.screenshot({ path: path.join(root, "promo/shots/brain.png") });
  await p.click("#tabBook"); await p.waitForTimeout(300);
  await p.evaluate(() => { const d = document.querySelector("#bookList details, #bookList .book-chapter"); if (d && d.tagName === "DETAILS") d.open = true; });
  await p.evaluate(() => window.scrollTo(0, document.getElementById("tabBook").getBoundingClientRect().top + window.scrollY - 20));
  await p.waitForTimeout(300);
  await p.screenshot({ path: path.join(root, "promo/shots/book.png") });
  await p.click("#tabCast"); await p.waitForTimeout(900);
  await p.screenshot({ path: path.join(root, "promo/shots/cast.png") });
  await b.close();
  console.log("已截图：promo/shots/brain.png、book.png、cast.png");
})();
