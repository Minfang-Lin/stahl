// 逐幕截图，检查画面用。用法：node tools/shoot.js <页面路径> <输出前缀> <宽> <高> <每幕等待秒数> [只截第几幕...]
// 例如：node tools/shoot.js synapse/index.html /tmp/syn 1200 900 5
const { chromium } = require('playwright');
(async () => {
  const [,, url, out, w, h, wait, ...only] = process.argv;
  const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error' && !/fonts\.g/.test(m.text())) errs.push(m.text()); });
  await p.goto(url.indexOf('://') > 0 ? url : 'file://' + require('path').resolve(url)); await p.waitForTimeout(400);
  await p.click('#play'); // 暂停自动翻页（动画仍然在动）
  const n = await p.$$eval('#chapters button', (bs) => bs.length);
  for (let i = 0; i < n; i++) {
    if (only.length && !only.includes(String(i + 1))) continue;
    await p.click('#ch' + i);
    await p.waitForTimeout(+wait * 1000);
    const el = await p.$('.stage');
    await el.screenshot({ path: `${out}-${i + 1}.png` });
  }
  console.log('scenes', n, 'errors', JSON.stringify(errs.slice(0, 5)));
  await b.close();
})();
