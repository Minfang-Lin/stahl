// 打包小红书小工具时压缩 JS：node tools/minify.js <输入> <输出>
// 只做安全的压缩（去空白、缩短局部变量名），输出仍是 ES2017。
const fs = require("fs");
const { minify } = require("terser");
const [, , src, out] = process.argv;
minify(fs.readFileSync(src, "utf8"), { ecma: 2017, compress: { ecma: 2017, passes: 1 }, mangle: true, format: { comments: false } })
  .then((r) => fs.writeFileSync(out, r.code))
  .catch((e) => { console.error(src + "：" + e.message); process.exit(1); });
