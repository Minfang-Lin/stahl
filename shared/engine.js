// 脑内小剧场共用引擎：日系治愈漫画风画笔（拟人化角色、对话气泡、漫画效果）、突触场景零件、章节切换、网页播放和逐帧录制。
// 每一集在自己的 scene.js 里用 Anima.register(...) 登记章节数据、状态、update() 和 draw()。
// 结构沿用「身体小剧场」，画风换成柔和的水彩色、细线条、大眼睛的 Q 版角色。
(() => {
  // 老版本 iOS / 安卓 WebView 没有 roundRect，这里补一个简单版本
  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      r = Math.max(0, Math.min(typeof r === "number" ? r : 0, Math.abs(w) / 2, Math.abs(h) / 2));
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r); this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r); this.arcTo(x, y, x + w, y, r);
      this.closePath();
    };
  }

  // 这一帧已经画出来的文字和方框（设备像素）：标注和气泡放置时会避开它们
  const frameObs = [];
  let obsOn = false; // 只记主画布 draw() 期间画的
  let obsMute = false; // 正在淡出的标注/气泡：它马上就要消失，不该把新出现的标注挤开
  const hasT = typeof CanvasRenderingContext2D.prototype.getTransform === "function"; // Chrome 61 没有，就不做避让
  if (hasT) {
    ["fillText", "strokeText"].forEach((fn) => {
      const orig = CanvasRenderingContext2D.prototype[fn];
      CanvasRenderingContext2D.prototype[fn] = function (t, x, y) {
        if (obsOn && !obsMute && this === ctx && !window.__inChara && this.globalAlpha > 0.3) {
          const fs = parseFloat((this.font.match(/([\d.]+)px/) || [0, 12])[1]);
          const w = this.measureText(t).width, T = this.getTransform();
          const al = this.textAlign, bl = this.textBaseline;
          const x0 = x - (al === "center" ? w / 2 : al === "right" || al === "end" ? w : 0);
          const y0 = y - (bl === "middle" ? fs / 2 : bl === "top" || bl === "hanging" ? 0 : fs * 0.8);
          const sx = Math.abs(T.a) + Math.abs(T.c), sy = Math.abs(T.b) + Math.abs(T.d);
          // 太小的字（离子、帽子上的名牌）不算障碍
          if (fs * sy >= 9 * (ctx.canvas.width / (ctx.canvas.clientWidth || ctx.canvas.width))) {
            const cxp = T.a * (x0 + w / 2) + T.c * (y0 + fs / 2) + T.e, cyp = T.b * (x0 + w / 2) + T.d * (y0 + fs / 2) + T.f;
            frameObs.push({ x: cxp - w * sx / 2, y: cyp - fs * sy / 2, w: w * sx, h: fs * sy });
          }
        }
        return orig.apply(this, arguments);
      };
    });
  }

  // 半径算成负数时（机器卡顿、一帧跨度很大时偶尔会发生）按 0 画，不要抛错把整段动画停掉
  ["arc", "ellipse"].forEach((fn) => {
    const orig = CanvasRenderingContext2D.prototype[fn];
    CanvasRenderingContext2D.prototype[fn] = function (x, y, a, b) {
      const args = Array.prototype.slice.call(arguments);
      args[2] = Math.max(0, a || 0);
      if (fn === "ellipse") args[3] = Math.max(0, b || 0);
      return orig.apply(this, args);
    };
  });

  // 共用配色：奶油纸底 + 樱花、天空、薄荷、柠檬、薰衣草几种淡彩；线条用暖棕紫，不用纯黑
  const C = {
    ink: "#5a4650", line: "#6d5760", paper: "#ffffff", soft: "#a08a93", cream: "#fffaf3",
    sakura: "#f9c5d1", rose: "#f28ca5", sky: "#bfe3f5", skyDeep: "#6fb9e0", mint: "#bfe8d6", mintDeep: "#4fb893",
    lemon: "#fff1b8", gold: "#ffc94d", peach: "#ffd9c2", lav: "#ddd5fa", lavDeep: "#8f84e0", coral: "#ff8a8a",
    skin: "#fff1e8", blush: "#ff9fb3", cleft: "#eef8fc", good: "#4fb893", warn: "#e7a23a", bad: "#e8637a",
  };
  const ROUND = '"ZCOOL KuaiLe", "Yuanti SC", "YouYuan", "PingFang SC", sans-serif';
  const SANS = '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif';

  // 角色图鉴：每种神经递质、蛋白质都有自己的发色、制服和帽子上的名牌（像《工作细胞》里的制服编号）
  const CAST = {
    DA: { name: "多巴胺", label: "DA", hair: "#ff9a52", eye: "#e0662a", cloth: "#ffd27a", hat: "cap", hatColor: "#ff9a52", style: "twin", acc: "star" },
    "5HT": { name: "5-HT", label: "5-HT", hair: "#62c9ab", eye: "#2f9f86", cloth: "#cdf1e4", hat: "beret", hatColor: "#8fdcc4", style: "bob", acc: "leaf" },
    NE: { name: "去甲肾上腺素", label: "NE", hair: "#ec6470", eye: "#c23a4a", cloth: "#ffd3d6", hat: "cap", hatColor: "#ec6470", style: "pony", acc: "whistle" },
    GABA: { name: "GABA", label: "GABA", hair: "#8f86e2", eye: "#5c52c4", cloth: "#e4e0ff", hat: "none", style: "long", glasses: true },
    Glu: { name: "谷氨酸", label: "Glu", hair: "#f6c02e", eye: "#c88600", cloth: "#fff0b3", hat: "band", hatColor: "#ff8a5c", style: "spiky" },
    ACh: { name: "乙酰胆碱", label: "ACh", hair: "#f29cc0", eye: "#cc5b8b", cloth: "#ffe1ee", hat: "beret", hatColor: "#f7b8d2", style: "bun", acc: "bow" },
    His: { name: "组胺", label: "His", hair: "#b98ad8", eye: "#8a55b0", cloth: "#f0e0fb", hat: "cap", hatColor: "#b98ad8", style: "short" },
    Ox: { name: "食欲素", label: "Ox", hair: "#ffb347", eye: "#d97a00", cloth: "#ffe6c4", hat: "band", hatColor: "#ffcf6e", style: "short" },
    // 不是递质的“居民”
    neuron: { name: "神经元", label: "", hair: "#b08968", eye: "#7a5236", cloth: "#ffe7c7", hat: "none", style: "short" },
    pump: { name: "转运体（回收员）", label: "回收", hair: "#7a8ba6", eye: "#4d5f80", cloth: "#cfe0f5", hat: "helmet", hatColor: "#9fc3ea", style: "short" },
    MAO: { name: "单胺氧化酶（清扫员）", label: "MAO", hair: "#a38f7a", eye: "#6d5a45", cloth: "#eadfcd", hat: "kerchief", hatColor: "#c7b39a", style: "bun", item: "broom" },
    AChE: { name: "乙酰胆碱酯酶（剪刀手）", label: "AChE", hair: "#8fb7a0", eye: "#4d8066", cloth: "#dff0e4", hat: "kerchief", hatColor: "#a7d1b6", style: "short" },
    drug: { name: "药物", label: "药", hair: "#9aa5b1", eye: "#5d6975", cloth: "#f2f4f7", hat: "capsule", hatColor: "#ff9aa9", hatColor2: "#ffffff", style: "short" },
  };
  const BASE = {
    hair: "#b08968", eye: "#7a5236", cloth: "#ffe7c7", skin: C.skin, hat: "none", hatColor: "#ffffff", hatColor2: "#ffffff",
    style: "short", label: "", eyes: "open", mouth: "smile", arms: "down", dir: 1, walk: null, bob: 1, blush: true,
    acc: null, item: null, glasses: false, brow: null, look: 0, alpha: 1, gray: false, ahoge: true, shadow: true,
  };

  let cv = document.getElementById("cv");
  let ctx = cv ? cv.getContext("2d") : document.createElement("canvas").getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 录制模式（record.js 注入 window.__RECORD / __RATIO / __TIMELINE）：固定尺寸画布，逐帧手动推进
  const REC = window.__RECORD === true;
  const LAYOUTS = {
    "16:9": { VW: 1920, VH: 1080, SX: 240, SY: 36, SW: 1440, SH: 810, K: 1, UI: 1 },
    "3:4": { VW: 1080, VH: 1440, SX: 40, SY: 150, SW: 1000, SH: 820, K: 1.3, UI: 1.7 },
  };
  const LY = LAYOUTS[window.__RATIO] || LAYOUTS["16:9"];
  const { VW, VH, SX, SY } = LY;
  let UI = REC ? LY.UI : 1;

  let W = 0, H = 0, time = 0, cur = 0;
  let sceneT = 0;
  let frameDt = 1 / 60; // 这一帧的秒数：标注、气泡的淡入淡出按时间算，不受帧率影响 // 本幕已经演了几秒（暂停自动翻页时也照样走），截图工具靠它等到指定时刻
  const labelAlpha = {};

  // ---------- 小工具 ----------
  const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ease = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
  // 颜色可以是 #rrggbb，也可以是 mix() 返回的 rgb(r,g,b)，这样混出来的颜色还能再混
  const rgb = (h) => {
    if (h.charAt(0) !== "#") { const m = h.match(/\d+(\.\d+)?/g) || [0, 0, 0]; return [+m[0], +m[1], +m[2]]; }
    if (h.length === 4) h = "#" + h[1] + h[1] + h[2] + h[2] + h[3] + h[3]; // #fff 这种三位写法
    const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const mix = (h1, h2, t) => {
    const a = rgb(h1), b = rgb(h2), k = clamp(t, 0, 1);
    return `rgb(${Math.round(lerp(a[0], b[0], k))},${Math.round(lerp(a[1], b[1], k))},${Math.round(lerp(a[2], b[2], k))})`;
  };
  const alpha = (h, a) => { const c = rgb(h); return `rgba(${c[0]},${c[1]},${c[2]},${a})`; };

  // ---------- 基础画笔 ----------
  function outline(w = 2) { ctx.strokeStyle = C.line; ctx.lineWidth = w; ctx.lineJoin = "round"; ctx.lineCap = "round"; }
  function rrect(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }
  function text(t, x, y, fs, color, align, font) {
    ctx.fillStyle = color || C.ink; ctx.font = `${fs}px ${font || ROUND}`;
    ctx.textAlign = align || "center"; ctx.textBaseline = "middle";
    ctx.fillText(t, x, y); ctx.textAlign = "left";
  }
  // 给蛋白质、器官这些“物件”用的简单小脸。mood: 1 开心，0 平静，-1 难过
  function face(x, y, s, mood, blush = true) {
    const blink = (Math.sin(time * 1.3 + x * 0.05) > 0.985) ? 0.2 : 1;
    ctx.fillStyle = C.ink;
    for (const d of [-1, 1]) {
      ctx.beginPath(); ctx.ellipse(x + d * s * 0.32, y - s * 0.08, s * 0.11, s * 0.15 * blink, 0, 0, Math.PI * 2); ctx.fill();
    }
    if (blink === 1) {
      ctx.fillStyle = "#fff";
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x + d * s * 0.32 - s * 0.03, y - s * 0.13, s * 0.04, 0, Math.PI * 2); ctx.fill(); }
    }
    if (blush) blushAt(x, y + s * 0.18, s * 0.55, s * 0.14);
    outline(Math.max(1, s * 0.08));
    ctx.beginPath();
    ctx.moveTo(x - s * 0.16, y + s * 0.2);
    ctx.quadraticCurveTo(x, y + s * 0.2 + s * 0.24 * mood, x + s * 0.16, y + s * 0.2);
    ctx.stroke();
  }
  // 腮红：粉色椭圆 + 三道斜线（日系漫画的“害羞线”）
  function blushAt(x, y, dx, r) {
    for (const d of [-1, 1]) {
      const bx = x + d * dx;
      ctx.fillStyle = "rgba(255,150,172,0.5)";
      ctx.beginPath(); ctx.ellipse(bx, y, r * 1.1, r * 0.62, 0, 0, Math.PI * 2); ctx.fill();
      if (r > 2.5) {
        ctx.strokeStyle = "rgba(236,110,140,0.75)"; ctx.lineWidth = Math.max(0.8, r * 0.16); ctx.lineCap = "round";
        ctx.beginPath();
        for (let k = -1; k <= 1; k++) { ctx.moveTo(bx + k * r * 0.5 + r * 0.18, y - r * 0.32); ctx.lineTo(bx + k * r * 0.5 - r * 0.18, y + r * 0.32); }
        ctx.stroke();
      }
    }
  }
  function sweat(x, y, s) {
    ctx.fillStyle = "#b8e4ff";
    ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + s * 0.6, y + s * 0.9, x, y + s);
    ctx.quadraticCurveTo(x - s * 0.5, y + s * 0.7, x, y); ctx.fill(); outline(Math.max(1, s * 0.12)); ctx.stroke();
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x - s * 0.08, y + s * 0.62, s * 0.1, 0, Math.PI * 2); ctx.fill();
  }
  function heart(x, y, s, color) {
    ctx.beginPath();
    ctx.moveTo(x, y + s * 0.7);
    ctx.bezierCurveTo(x - s * 1.2, y - s * 0.1, x - s * 0.5, y - s * 0.9, x, y - s * 0.3);
    ctx.bezierCurveTo(x + s * 0.5, y - s * 0.9, x + s * 1.2, y - s * 0.1, x, y + s * 0.7);
    ctx.fillStyle = color || C.rose; ctx.fill(); outline(Math.max(1, s * 0.14)); ctx.stroke();
  }
  function bolt(x, y, s, a, color = C.gold) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(-s * 0.2, -s); ctx.lineTo(s * 0.45, -s * 0.15); ctx.lineTo(0, -s * 0.05);
    ctx.lineTo(s * 0.25, s); ctx.lineTo(-s * 0.45, s * 0.05); ctx.lineTo(0, -s * 0.02); ctx.closePath();
    ctx.fillStyle = color; ctx.fill(); outline(Math.max(1, s * 0.1)); ctx.stroke();
    ctx.restore();
  }
  // 四角闪光星（边是弯进去的），日系漫画最常见的“亮晶晶”
  function sparkle(x, y, s, a = 1, color = "#fff6c2") {
    if (a < 0.02 || s < 0.5) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y);
    ctx.beginPath(); ctx.moveTo(0, -s);
    ctx.quadraticCurveTo(s * 0.14, -s * 0.14, s, 0); ctx.quadraticCurveTo(s * 0.14, s * 0.14, 0, s);
    ctx.quadraticCurveTo(-s * 0.14, s * 0.14, -s, 0); ctx.quadraticCurveTo(-s * 0.14, -s * 0.14, 0, -s);
    ctx.fillStyle = color; ctx.fill();
    ctx.strokeStyle = alpha("#e0a800", 0.6); ctx.lineWidth = Math.max(0.8, s * 0.08); ctx.stroke();
    ctx.restore();
  }
  // 一圈忽闪忽闪的星星
  function sparkles(cx, cy, r, n, a = 1, seed = 0) {
    if (a < 0.02) return;
    for (let i = 0; i < n; i++) {
      const q = rnd(i + seed) * Math.PI * 2 + time * 0.3, rr = r * (0.75 + rnd(i + seed + 9) * 0.4);
      const tw = 0.5 + 0.5 * Math.sin(time * 4 + i * 1.7 + seed);
      sparkle(cx + Math.cos(q) * rr, cy + Math.sin(q) * rr, r * 0.12 * (0.6 + tw * 0.6), a * tw);
    }
  }
  // 柔光：径向渐变的小光晕
  function glow(x, y, r, color, a = 1) {
    if (a < 0.02 || r <= 0) return;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, alpha(color, 0.55 * a)); g.addColorStop(1, alpha(color, 0));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }

  // ---------- 背景 ----------
  // 水彩渐变 + 纸纹 + 边缘暗角
  function wash(top, bottom) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, top || "#fff6f2"); g.addColorStop(1, bottom || "#fdeef3");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "rgba(160,120,130,0.05)";
    for (let i = 0; i < 90; i++) ctx.fillRect(rnd(i + 500) * W, rnd(i + 700) * H, 1.5, 1.5);
    const v = ctx.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, W * 0.75);
    v.addColorStop(0, "rgba(255,255,255,0)"); v.addColorStop(1, "rgba(230,190,205,0.22)");
    ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
  }
  // 虚化的光斑
  function bokeh(n, color, a = 1, seed = 40) {
    for (let i = 0; i < n; i++) {
      const r = H * (0.03 + rnd(i + seed) * 0.07);
      const x = ((rnd(i + seed + 1) * W + time * 6 * (0.5 + rnd(i + seed + 2))) % (W + r * 2)) - r;
      const y = rnd(i + seed + 3) * H + Math.sin(time * 0.5 + i) * 6;
      glow(x, y, r, color, a * (0.5 + 0.5 * Math.sin(time * 0.8 + i * 2.1)));
    }
  }
  // 飘落的樱花瓣
  function petal(x, y, s, rot, color) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath(); ctx.moveTo(0, -s);
    ctx.bezierCurveTo(s * 0.9, -s * 0.6, s * 0.7, s * 0.7, 0, s);
    ctx.bezierCurveTo(-s * 0.7, s * 0.7, -s * 0.9, -s * 0.6, 0, -s);
    ctx.fillStyle = color || "#ffd1dc"; ctx.fill();
    ctx.strokeStyle = "rgba(236,140,165,0.55)"; ctx.lineWidth = Math.max(0.6, s * 0.1); ctx.stroke();
    ctx.restore();
  }
  function petals(n, a = 1, seed = 70, color) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    for (let i = 0; i < n; i++) {
      const sp = 0.3 + rnd(i + seed) * 0.5;
      const t = (time * 0.06 * sp + rnd(i + seed + 1)) % 1;
      const x = ((rnd(i + seed + 2) + t * 0.35) % 1) * W + Math.sin(time * 1.2 + i) * H * 0.03;
      const y = t * (H + 40) - 20;
      petal(x, y, H * (0.008 + rnd(i + seed + 3) * 0.008), time * sp * 2 + i, color);
    }
    ctx.restore();
  }
  // 网点纸（漫画阴影用的圆点）
  function tone(x, y, w, h, color, step = 7, r = 1.4) {
    ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    ctx.fillStyle = color;
    for (let yy = y; yy < y + h; yy += step) for (let xx = x + ((yy - y) / step % 2) * step / 2; xx < x + w; xx += step) {
      ctx.beginPath(); ctx.arc(xx, yy, r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }
  // 集中线：从画面边缘往 (cx, cy) 冲的细线，表示“震惊”“重点”
  function speedLines(cx, cy, rIn, n, a = 1, color = "rgba(90,70,80,0.35)", seed = 5) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = color;
    const R = Math.hypot(W, H);
    for (let i = 0; i < n; i++) {
      const q = (i / n) * Math.PI * 2 + rnd(i + seed) * 0.08, w = 0.006 + rnd(i + seed + 3) * 0.012;
      const r0 = rIn * (1 + rnd(i + seed + 7) * 0.5);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(q) * r0, cy + Math.sin(q) * r0);
      ctx.lineTo(cx + Math.cos(q - w) * R, cy + Math.sin(q - w) * R);
      ctx.lineTo(cx + Math.cos(q + w) * R, cy + Math.sin(q + w) * R);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }
  // 拟声词：白色描边的大字，比如“咻——”“啪嗒”
  function sfx(t, x, y, fs, color, rot = -0.12, a = 1) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(rot);
    ctx.font = `${fs}px ${ROUND}`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.lineJoin = "round"; ctx.strokeStyle = "#fff"; ctx.lineWidth = fs * 0.28; ctx.strokeText(t, 0, 0);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(1, fs * 0.07); ctx.strokeText(t, 0, 0);
    ctx.fillStyle = color || C.rose; ctx.fillText(t, 0, 0);
    ctx.restore();
  }
  // 头顶上的情绪符号
  function emote(kind, x, y, s, a = 1) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const bounce = Math.abs(Math.sin(time * 5)) * s * 0.15;
    if (kind === "!" || kind === "?") {
      sfx(kind, x, y - bounce, s * 1.6, kind === "!" ? C.bad : C.skyDeep, 0.1);
    } else if (kind === "sweat") {
      sweat(x, y - s * 0.5, s);
    } else if (kind === "anger") { // 生气的“井”字青筋
      ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(1.2, s * 0.2); ctx.lineCap = "round";
      ctx.beginPath();
      for (const [dx, dy, r] of [[-1, -1, 0], [1, -1, 1.57], [1, 1, 3.14], [-1, 1, 4.71]]) {
        const cx = x + dx * s * 0.28, cy = y + dy * s * 0.28;
        ctx.moveTo(cx + Math.cos(r) * s * 0.35, cy + Math.sin(r) * s * 0.35);
        ctx.quadraticCurveTo(cx, cy, cx + Math.cos(r + 1.57) * s * 0.35, cy + Math.sin(r + 1.57) * s * 0.35);
      }
      ctx.stroke();
    } else if (kind === "heart") {
      heart(x, y - bounce, s * 0.6, C.rose);
    } else if (kind === "note") {
      ctx.fillStyle = C.lavDeep; ctx.strokeStyle = C.lavDeep; ctx.lineWidth = Math.max(1, s * 0.12);
      ctx.beginPath(); ctx.ellipse(x - s * 0.2, y + s * 0.3 - bounce, s * 0.22, s * 0.16, -0.4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(x, y + s * 0.28 - bounce); ctx.lineTo(x, y - s * 0.5 - bounce); ctx.lineTo(x + s * 0.3, y - s * 0.3 - bounce); ctx.stroke();
    } else if (kind === "zzz") {
      for (let k = 0; k < 3; k++) {
        const t = (time * 0.35 + k / 3) % 1;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
        text("z", x + t * s * 1.2, y - t * s * 2, s * (0.6 + t * 0.6), C.soft);
        ctx.restore();
      }
    } else if (kind === "gloom") { // 头顶的阴沉竖线
      ctx.strokeStyle = "rgba(110,110,160,0.6)"; ctx.lineWidth = Math.max(1, s * 0.1);
      ctx.beginPath();
      for (let k = -2; k <= 2; k++) { ctx.moveTo(x + k * s * 0.25, y - s * 0.6); ctx.lineTo(x + k * s * 0.25, y + s * (0.1 + (k % 2 ? 0.2 : 0))); }
      ctx.stroke();
    } else if (kind === "sparkle") {
      sparkle(x - s * 0.3, y, s * 0.45); sparkle(x + s * 0.35, y - s * 0.35, s * 0.3);
    } else if (kind === "bulb") { // 灵光一闪
      glow(x, y, s * 1.1, C.gold, 1);
      ctx.beginPath(); ctx.arc(x, y - bounce, s * 0.42, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); outline(Math.max(1, s * 0.1)); ctx.stroke();
      rrect(x - s * 0.18, y + s * 0.36 - bounce, s * 0.36, s * 0.2, s * 0.05); ctx.fillStyle = "#cfc6d4"; ctx.fill(); ctx.stroke();
    } else if (kind === "music") {
      emote("note", x, y, s, 1);
    }
    ctx.restore();
  }
  function dots(n, color, seed = 30) {
    ctx.fillStyle = color;
    for (let i = 0; i < n; i++) { ctx.beginPath(); ctx.arc(rnd(i + seed) * W, rnd(i + seed + 30) * H, 2 + rnd(i) * 3, 0, Math.PI * 2); ctx.fill(); }
  }

  // ---------- Q 版角色 ----------
  // chara(x, y, s, opts)：(x, y) 是脚底中心，s 是头的半径（整个人大约 3.1s 高）
  // opts.who 可以直接用 CAST 里的角色（"DA"、"5HT"、"GABA"…），其余字段覆盖默认值：
  //   eyes: open | happy | closed | sleepy | wide | teary | sparkle | dizzy | x | angry
  //   mouth: smile | open | grin | flat | sad | o | cat | wavy
  //   arms: down | wave | up | hold | point | shh | carry | fist | hug
  //   item: letter | book | broom | star | net | lamp | scissors | shield | key（拿在手上）
  //   walk: 走路的相位（数字）；jump: 往上跳几个头高；dir: 1 朝右，-1 朝左；gray: 变成灰色（没精神、被抑制）
  function chara(x, y, s, opt) {
    const o = Object.assign({}, BASE, opt && opt.who ? CAST[opt.who] : null, opt);
    if (s < 1) return;
    window.__inChara = true; // 检查工具据此忽略帽子上的小字
    if (o.gray) { // 变灰：把每种颜色往灰色混（不用 ctx.filter，它在软件渲染和旧 WebView 上很慢或不支持）
      const g = typeof o.gray === "number" ? o.gray : 0.75;
      ["hair", "eye", "cloth", "skin", "hatColor", "hatColor2"].forEach((k) => { o[k] = mix(o[k], "#c4bcc0", g); });
    }
    ctx.save();
    ctx.globalAlpha *= o.alpha;
    const bob = o.walk != null ? Math.abs(Math.sin(o.walk)) * 0.9 : Math.sin(time * 2.4 + x * 0.013) * 0.35 * o.bob;
    // 影子
    if (o.shadow) {
      ctx.fillStyle = "rgba(90,70,80,0.13)";
      ctx.beginPath(); ctx.ellipse(x, y + s * 0.03, s * 0.75 * (1 - (o.jump || 0) * 0.2), s * 0.15, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.translate(x, y - (o.jump || 0) * s);
    const k = s / 10;
    ctx.scale(k, k);
    ctx.translate(0, -bob);
    const lw = Math.max(0.75, 1 / k);
    const line = (w) => { ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(w || 0.75, lw); ctx.lineJoin = "round"; ctx.lineCap = "round"; };

    if (s < 6) { miniChara(o, line); ctx.restore(); window.__inChara = false; return; }
    const hy = -21; // 头的中心
    const sway = Math.sin(time * 2.2 + x * 0.02) * 0.12;

    // --- 后面的头发 ---
    ctx.fillStyle = o.hair; line(0.8);
    if (o.style === "twin") {
      for (const d of [-1, 1]) {
        ctx.save(); ctx.translate(d * 8.8, hy - 4.5); ctx.rotate(d * (0.18 + sway));
        ctx.beginPath(); ctx.moveTo(0, 0);
        ctx.bezierCurveTo(d * 6.5, 2, d * 6, 12, d * 2.2, 17);
        ctx.bezierCurveTo(d * 1.2, 11, d * -1.5, 6, 0, 0); ctx.closePath();
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = o.hatColor === "#ffffff" ? C.rose : o.hatColor;
        ctx.beginPath(); ctx.arc(0, 0.2, 1.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = o.hair;
        ctx.restore();
      }
    } else if (o.style === "long") {
      rrect(-10.8, hy - 6, 21.6, 20, 7); ctx.fill(); ctx.stroke();
    } else if (o.style === "bob") {
      ctx.beginPath(); ctx.ellipse(0, hy + 0.5, 11.6, 10.4, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    } else if (o.style === "pony") {
      ctx.save(); ctx.translate(7.5, hy - 7); ctx.rotate(0.35 + sway);
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(7, -1, 9, 8, 6, 14); ctx.bezierCurveTo(4, 8, 1, 4, -1, 2); ctx.closePath();
      ctx.fill(); ctx.stroke(); ctx.restore();
    } else if (o.style === "bun") {
      ctx.beginPath(); ctx.arc(0, hy - 10.3, 4.2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }

    // --- 身体 ---
    const walkA = o.walk != null ? Math.sin(o.walk) * 1.6 : 0;
    for (const d of [-1, 1]) { // 腿和鞋
      const lx = d * 2.4 + d * walkA * (d > 0 ? 1 : -1) * 0.5;
      rrect(lx - 1.3, -5.5, 2.6, 5.2, 1.2); ctx.fillStyle = C.skin; ctx.fill(); line(0.7); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(lx + o.dir * 0.4, -0.4, 1.9, 1.1, 0, 0, Math.PI * 2); ctx.fillStyle = mix(o.hair, "#5a4650", 0.45); ctx.fill(); ctx.stroke();
    }
    ctx.beginPath(); // 上衣（小斗篷的形状）
    ctx.moveTo(-4.4, -12.4); ctx.lineTo(4.4, -12.4);
    ctx.quadraticCurveTo(6.4, -8, 6.3, -4.6); ctx.quadraticCurveTo(0, -3.4, -6.3, -4.6);
    ctx.quadraticCurveTo(-6.4, -8, -4.4, -12.4); ctx.closePath();
    ctx.fillStyle = o.cloth; ctx.fill(); line(0.8); ctx.stroke();
    ctx.fillStyle = "#ffffff"; // 白领子
    ctx.beginPath(); ctx.moveTo(-3.6, -12.3); ctx.lineTo(0, -9.6); ctx.lineTo(3.6, -12.3); ctx.closePath(); ctx.fill(); ctx.stroke();
    if (!(o.hat === "cap" || o.hat === "beret" || o.hat === "band" || o.hat === "helmet" || o.hat === "capsule" || o.hat === "kerchief") && o.label) {
      rrect(-3.6, -8.6, 7.2, 3, 1.2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      text(o.label, 0, -7.05, o.label.length > 3 ? 2 : 2.4, C.ink);
    }
    if (o.acc === "whistle") {
      ctx.strokeStyle = C.line; ctx.lineWidth = 0.4; ctx.beginPath(); ctx.moveTo(-2, -11.6); ctx.lineTo(0.6, -8); ctx.stroke();
      rrect(-0.2, -8.4, 2.6, 1.4, 0.6); ctx.fillStyle = C.gold; ctx.fill(); line(0.5); ctx.stroke();
    }

    // --- 手臂 ---
    const d = o.dir, wv = Math.sin(time * 8) * 1.4, pump = Math.abs(Math.sin(time * 6)) * 1.2;
    const P = {
      down: [[-6.4, -6.4], [6.4, -6.4]], wave: [[-6.4, -6.4], [8.2 + wv * 0.4, -17 + wv * 0.3]],
      up: [[-7.6, -18.5 - pump], [7.6, -18.5 - pump]], hold: [[-2.8, -8.2], [2.8, -8.2]],
      point: [[d > 0 ? -6.4 : -10.5, d > 0 ? -6.4 : -12], [d > 0 ? 10.5 : 6.4, d > 0 ? -12 : -6.4]],
      shh: [[-6.4, -6.4], [1.2, -15.2]], carry: [[-3.6, -32.5], [3.6, -32.5]],
      fist: [[-6.4, -6.4], [6.8, -16 - pump]], hug: [[-3, -9.5], [3, -9.5]],
    };
    const hands = P[o.arms] || P.down;
    for (let i = 0; i < 2; i++) {
      const sx = i ? 4.1 : -4.1, sy = -11.2, [hx, hh] = hands[i];
      ctx.strokeStyle = C.line; ctx.lineWidth = 3.1; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(hx, hh); ctx.stroke();
      ctx.strokeStyle = o.cloth; ctx.lineWidth = 1.9;
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(hx, hh); ctx.stroke();
      ctx.beginPath(); ctx.arc(hx, hh, 1.35, 0, Math.PI * 2); ctx.fillStyle = C.skin; ctx.fill(); line(0.6); ctx.stroke();
    }

    // --- 头 ---
    ctx.beginPath(); ctx.ellipse(0, hy, 10.4, 9.7, 0, 0, Math.PI * 2);
    ctx.fillStyle = o.skin; ctx.fill(); line(0.85); ctx.stroke();
    drawEyes(o, hy, line);
    if (o.blush) blushAt(0, hy + 4.6, 6.4, 1.55);
    drawMouth(o, hy, line);

    // --- 前面的头发（刘海） ---
    ctx.fillStyle = o.hair; line(0.8);
    ctx.beginPath();
    ctx.moveTo(-10.6, hy + 1.5);
    ctx.bezierCurveTo(-11.8, hy - 9, -6, hy - 12.2, 0, hy - 12.2);
    ctx.bezierCurveTo(6, hy - 12.2, 11.8, hy - 9, 10.6, hy + 1.5);
    const fr = [[8.6, hy - 3.2], [6.6, hy - 1.6], [4.4, hy - 4.4], [1.8, hy - 1.8], [-0.8, hy - 4.6], [-3.4, hy - 2], [-5.8, hy - 4.2], [-8.2, hy - 1.4]];
    let px = 10.6, py = hy + 1.5;
    for (const [fx, fy] of fr) { ctx.quadraticCurveTo((px + fx) / 2 + 0.3, Math.min(py, fy) - 0.8, fx, fy); px = fx; py = fy; }
    ctx.quadraticCurveTo(-9.6, hy - 1.5, -10.6, hy + 1.5);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    if (o.style === "spiky") {
      ctx.beginPath();
      for (const [sx, sy2, tx, ty] of [[-7, hy - 10, -9.5, hy - 15], [-2, hy - 12, -2.5, hy - 17], [3, hy - 12, 5, hy - 16.5], [7, hy - 9.5, 10.5, hy - 12.5]]) {
        ctx.moveTo(sx - 2.4, sy2 + 1); ctx.lineTo(tx, ty); ctx.lineTo(sx + 2.4, sy2 + 0.6);
      }
      ctx.fill(); ctx.stroke();
    }
    if (o.style === "bob" || o.style === "long" || o.style === "twin") { // 两侧垂下的鬓发
      for (const dd of [-1, 1]) {
        ctx.beginPath(); ctx.moveTo(dd * 10.5, hy - 1); ctx.quadraticCurveTo(dd * 11.4, hy + 5, dd * 9.6, hy + 9);
        ctx.quadraticCurveTo(dd * 9, hy + 4, dd * 8.4, hy - 1); ctx.closePath(); ctx.fill(); ctx.stroke();
      }
    }
    // 头发高光（天使环）
    ctx.strokeStyle = "rgba(255,255,255,0.6)"; ctx.lineWidth = 1.1;
    ctx.beginPath(); ctx.ellipse(0, hy - 6.5, 7.5, 3, 0, Math.PI * 1.12, Math.PI * 1.4); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(0, hy - 6.5, 7.5, 3, 0, Math.PI * 1.55, Math.PI * 1.75); ctx.stroke();
    if (o.ahoge && o.hat !== "helmet" && o.hat !== "capsule" && o.hat !== "cap") { // 呆毛
      line(0.8); ctx.strokeStyle = mix(o.hair, "#5a4650", 0.25); ctx.lineWidth = 0.9;
      ctx.beginPath(); ctx.moveTo(0.5, hy - 12); ctx.quadraticCurveTo(1 + sway * 8, hy - 17, 4, hy - 15.5); ctx.stroke();
    }
    if (o.brow) {
      line(0.7);
      const tilt = o.brow === "angry" ? 1 : -1;
      ctx.beginPath();
      ctx.moveTo(-5.6, hy - 3.2 + tilt * -0.8); ctx.lineTo(-2.2, hy - 3.2 + tilt * 0.8);
      ctx.moveTo(5.6, hy - 3.2 + tilt * -0.8); ctx.lineTo(2.2, hy - 3.2 + tilt * 0.8); ctx.stroke();
    }

    // --- 帽子 ---
    drawHat(o, hy, line);
    if (o.glasses) {
      line(0.6); ctx.strokeStyle = mix(o.hair, "#5a4650", 0.5);
      for (const dd of [-1, 1]) { ctx.beginPath(); ctx.ellipse(dd * 3.9, hy + 1.2, 3.1, 2.8, 0, 0, Math.PI * 2); ctx.stroke(); }
      ctx.beginPath(); ctx.moveTo(-0.9, hy + 0.8); ctx.lineTo(0.9, hy + 0.8); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      for (const dd of [-1, 1]) { ctx.beginPath(); ctx.ellipse(dd * 3.9 - 1, hy + 0.2, 0.9, 1.4, 0.5, 0, Math.PI * 2); ctx.fill(); }
    }
    if (o.acc === "star") sparkle(-7.2, hy - 7.6, 2.4, 1, "#fff08a");
    if (o.acc === "leaf") {
      ctx.save(); ctx.translate(-7.4, hy - 7.2); ctx.rotate(-0.7);
      ctx.beginPath(); ctx.ellipse(0, 0, 2.4, 1.2, 0, 0, Math.PI * 2); ctx.fillStyle = "#8ed99b"; ctx.fill(); line(0.5); ctx.stroke();
      ctx.restore();
    }
    if (o.acc === "bow") {
      ctx.fillStyle = C.rose; line(0.5);
      for (const dd of [-1, 1]) { ctx.beginPath(); ctx.moveTo(0, hy - 14.5); ctx.lineTo(dd * 3.4, hy - 16.2); ctx.lineTo(dd * 3.4, hy - 12.8); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    }

    // --- 脚下的名牌（胶囊帽上的字太小时，用它写药名）---
    window.__inChara = false; // 脚下的名牌要算进检查
    if (o.tag) { // 字至少 10 像素（手机上的小角色也看得清）
      const tf = Math.max(4.2, 10 * UI / k);
      ctx.font = `${tf}px ${ROUND}`;
      const tw = ctx.measureText(o.tag).width + tf * 0.9;
      rrect(-tw / 2, 1.2, tw, tf * 1.35, tf * 0.67); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); line(0.6); ctx.stroke();
      text(o.tag, 0, 1.2 + tf * 0.7, tf, C.ink);
    }
    // --- 手里的东西 ---
    if (o.item) {
      // 朝左指的时候举起来的是左手
      const ip = o.arms === "carry" ? [0, -35] : o.arms === "hold" || o.arms === "hug" ? [0, -8.4] : hands[o.arms === "point" && o.dir < 0 ? 0 : 1];
      drawItem(o.item, ip[0], ip[1], o, line);
    }
    ctx.restore();
    window.__inChara = false;
  }

  function miniChara(o, line) {
    // 远处的小角色：只画头发、脸和身子
    ctx.beginPath(); ctx.ellipse(0, -6, 5, 5, 0, 0, Math.PI * 2); ctx.fillStyle = o.cloth; ctx.fill(); line(1.2); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -16, 8, 0, Math.PI * 2); ctx.fillStyle = o.skin; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -16, 8.3, Math.PI * 1.05, Math.PI * 1.95); ctx.closePath(); ctx.fillStyle = o.hair; ctx.fill(); ctx.stroke();
    ctx.fillStyle = C.ink;
    if (o.eyes === "happy" || o.eyes === "closed") {
      line(1.2);
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(d * 3, -14 + (o.eyes === "happy" ? 1 : -1), 1.6, o.eyes === "happy" ? Math.PI : 0, o.eyes === "happy" ? 0 : Math.PI, o.eyes !== "happy"); ctx.stroke(); }
    } else for (const d of [-1, 1]) { ctx.beginPath(); ctx.ellipse(d * 3, -14, 1.5, 2.1, 0, 0, Math.PI * 2); ctx.fill(); }
  }

  function drawEyes(o, hy, line) {
    const ey = hy + 1.3;
    let kind = o.eyes;
    const blink = kind === "open" || kind === "sparkle" || kind === "angry";
    if (blink && Math.sin(time * 1.25 + o.hair.length + (o.seed || 0)) > 0.975) kind = "closed";
    for (const d of [-1, 1]) {
      const ex = d * 3.9 + o.look * 0.6;
      if (kind === "happy") { line(1); ctx.beginPath(); ctx.arc(ex, ey + 1.1, 2, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke(); continue; }
      if (kind === "closed") { line(1); ctx.beginPath(); ctx.arc(ex, ey - 0.4, 2, Math.PI * 0.12, Math.PI * 0.88); ctx.stroke(); continue; }
      if (kind === "x") { line(1); ctx.beginPath(); ctx.moveTo(ex - d * 1.6, ey - 1.6); ctx.lineTo(ex + d * 1.2, ey); ctx.lineTo(ex - d * 1.6, ey + 1.6); ctx.stroke(); continue; }
      if (kind === "dizzy") {
        line(0.6); ctx.beginPath();
        for (let q = 0; q < 12; q += 0.3) { const r = q * 0.18; const xx = ex + Math.cos(q + time * 6) * r, yy = ey + Math.sin(q + time * 6) * r; if (q === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy); }
        ctx.stroke(); continue;
      }
      if (kind === "wide") {
        ctx.beginPath(); ctx.ellipse(ex, ey, 2.2, 2.9, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); line(0.7); ctx.stroke();
        ctx.beginPath(); ctx.arc(ex, ey, 0.9, 0, Math.PI * 2); ctx.fillStyle = C.ink; ctx.fill(); continue;
      }
      // 大眼睛：虹膜渐变 + 瞳孔 + 两个高光 + 上睫毛
      const g = ctx.createLinearGradient(0, ey - 3, 0, ey + 3);
      g.addColorStop(0, mix(o.eye, "#2a1d25", 0.45)); g.addColorStop(0.55, o.eye); g.addColorStop(1, mix(o.eye, "#ffffff", 0.55));
      ctx.beginPath(); ctx.ellipse(ex, ey, 2.15, 2.95, 0, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
      ctx.beginPath(); ctx.ellipse(ex + o.look * 0.3, ey + 0.4, 1, 1.45, 0, 0, Math.PI * 2); ctx.fillStyle = mix(o.eye, "#2a1d25", 0.65); ctx.fill();
      if (kind === "sleepy") { // 半闭的眼皮
        ctx.fillStyle = o.skin; ctx.fillRect(ex - 2.6, ey - 3.3, 5.2, 3.1);
        line(0.9); ctx.beginPath(); ctx.moveTo(ex - 2.3, ey - 0.2); ctx.lineTo(ex + 2.3, ey - 0.2); ctx.stroke();
        continue;
      }
      if (kind === "sparkle") sparkle(ex - 0.6, ey - 1.1, 1.5, 1, "#ffffff");
      else { ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(ex - 0.7, ey - 1.2, 0.85, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.beginPath(); ctx.arc(ex + 0.8, ey + 1.3, 0.42, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = C.ink; ctx.lineWidth = 0.95; ctx.lineCap = "round";
      ctx.beginPath(); ctx.ellipse(ex, ey + 0.1, 2.35, 3.05, 0, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ex + d * 2.1, ey - 1.8); ctx.lineTo(ex + d * 2.9, ey - 2.4); ctx.stroke();
      if (kind === "teary") {
        ctx.fillStyle = "rgba(170,220,255,0.75)"; ctx.beginPath(); ctx.ellipse(ex, ey + 2.2, 2.2, 0.9, 0, 0, Math.PI * 2); ctx.fill();
        const tt = (time * 0.8 + d * 0.3) % 1;
        sweatDrop(ex + d * 1.8, ey + 2.5 + tt * 5, 1.5);
      }
      if (kind === "angry") { line(0.8); ctx.beginPath(); ctx.moveTo(ex - 2.4 * d, ey - 4.4); ctx.lineTo(ex + 1.8 * d, ey - 3.2); ctx.stroke(); }
    }
  }
  function sweatDrop(x, y, s) {
    ctx.fillStyle = "rgba(160,215,255,0.9)";
    ctx.beginPath(); ctx.moveTo(x, y - s); ctx.quadraticCurveTo(x + s * 0.8, y + s * 0.3, x, y + s * 0.6);
    ctx.quadraticCurveTo(x - s * 0.8, y + s * 0.3, x, y - s); ctx.fill();
  }
  function drawMouth(o, hy, line) {
    const my = hy + 5.4, m = o.mouth;
    line(0.8);
    if (m === "open" || m === "grin") {
      ctx.beginPath();
      if (m === "open") { ctx.moveTo(-1.6, my - 0.3); ctx.quadraticCurveTo(0, my - 0.9, 1.6, my - 0.3); ctx.quadraticCurveTo(1.4, my + 2.4, 0, my + 2.4); ctx.quadraticCurveTo(-1.4, my + 2.4, -1.6, my - 0.3); }
      else { ctx.moveTo(-2.4, my - 0.4); ctx.lineTo(2.4, my - 0.4); ctx.quadraticCurveTo(2, my + 2.6, 0, my + 2.6); ctx.quadraticCurveTo(-2, my + 2.6, -2.4, my - 0.4); }
      ctx.closePath(); ctx.fillStyle = "#e0707f"; ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#ffb3bd"; ctx.beginPath(); ctx.ellipse(0, my + 1.6, 1, 0.55, 0, 0, Math.PI * 2); ctx.fill();
    } else if (m === "o") {
      ctx.beginPath(); ctx.ellipse(0, my + 0.6, 0.9, 1.2, 0, 0, Math.PI * 2); ctx.fillStyle = "#e0707f"; ctx.fill(); ctx.stroke();
    } else if (m === "flat") {
      ctx.beginPath(); ctx.moveTo(-1.2, my + 0.4); ctx.lineTo(1.2, my + 0.4); ctx.stroke();
    } else if (m === "sad") {
      ctx.beginPath(); ctx.moveTo(-1.5, my + 1); ctx.quadraticCurveTo(0, my - 0.4, 1.5, my + 1); ctx.stroke();
    } else if (m === "cat") {
      ctx.beginPath(); ctx.moveTo(-2, my); ctx.quadraticCurveTo(-1, my + 1.3, 0, my); ctx.quadraticCurveTo(1, my + 1.3, 2, my); ctx.stroke();
    } else if (m === "wavy") {
      ctx.beginPath(); ctx.moveTo(-2, my + 0.5);
      for (let i = 1; i <= 4; i++) ctx.quadraticCurveTo(-2 + i - 0.5, my + (i % 2 ? -0.5 : 1.4), -2 + i, my + 0.5);
      ctx.stroke();
    } else {
      ctx.beginPath(); ctx.moveTo(-1.4, my); ctx.quadraticCurveTo(0, my + 1.4, 1.4, my); ctx.stroke();
    }
  }
  function drawHat(o, hy, line) {
    const hc = o.hatColor;
    line(0.8);
    if (o.hat === "cap") {
      ctx.beginPath(); ctx.ellipse(0, hy - 7.4, 9.8, 6.4, 0, Math.PI, 0); ctx.closePath(); ctx.fillStyle = hc; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(o.dir * 5, hy - 7.3, 8, 1.9, 0, 0, Math.PI * 2); ctx.fillStyle = mix(hc, "#5a4650", 0.2); ctx.fill(); ctx.stroke();
      if (o.label) { rrect(-4.2, hy - 12.6, 8.4, 4, 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke(); text(o.label, 0, hy - 10.5, o.label.length > 3 ? 2.3 : 2.9, C.ink); }
    } else if (o.hat === "beret") {
      ctx.save(); ctx.translate(-0.8, hy - 10.4); ctx.rotate(-0.14);
      ctx.beginPath(); ctx.ellipse(0, 0, 10.4, 4, 0, 0, Math.PI * 2); ctx.fillStyle = hc; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(0, -4, 1, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      if (o.label) text(o.label, 1, 0.2, o.label.length > 3 ? 2.6 : 3, C.ink);
      ctx.restore();
    } else if (o.hat === "band") {
      ctx.strokeStyle = C.line; ctx.lineWidth = 3.4; ctx.beginPath(); ctx.ellipse(0, hy - 2, 10.6, 8, 0, Math.PI * 1.08, Math.PI * 1.92); ctx.stroke();
      ctx.strokeStyle = hc; ctx.lineWidth = 2.4; ctx.stroke();
      ctx.fillStyle = hc; line(0.6);
      ctx.beginPath(); ctx.moveTo(-10, hy - 5.5); ctx.lineTo(-14, hy - 3 + Math.sin(time * 6) * 1); ctx.lineTo(-13.2, hy - 6.5); ctx.closePath(); ctx.fill(); ctx.stroke();
      if (o.label) { rrect(-3.6, hy - 11.6, 7.2, 3.4, 1.4); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke(); text(o.label, 0, hy - 9.85, 2.4, C.ink); }
    } else if (o.hat === "helmet") {
      ctx.beginPath(); ctx.ellipse(0, hy - 6.6, 10.6, 7, 0, Math.PI, 0); ctx.closePath(); ctx.fillStyle = hc; ctx.fill(); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.fillRect(-1, hy - 13.4, 2, 6.6);
      rrect(-11.4, hy - 7.6, 22.8, 2, 1); ctx.fillStyle = mix(hc, "#5a4650", 0.2); ctx.fill(); ctx.stroke();
      if (o.label) text(o.label, -5.5, hy - 9.8, 2.4, C.ink);
    } else if (o.hat === "capsule") { // 药丸胶囊帽，一半一个颜色
      ctx.save(); ctx.beginPath(); ctx.ellipse(0, hy - 7.6, 10.2, 6.8, 0, Math.PI, 0); ctx.closePath(); ctx.clip();
      ctx.fillStyle = hc; ctx.fillRect(-11, hy - 15, 11, 8); ctx.fillStyle = o.hatColor2; ctx.fillRect(0, hy - 15, 11, 8);
      ctx.restore();
      ctx.beginPath(); ctx.ellipse(0, hy - 7.6, 10.2, 6.8, 0, Math.PI, 0); ctx.closePath(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, hy - 14.4); ctx.lineTo(0, hy - 7.6); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.beginPath(); ctx.ellipse(-5, hy - 11.5, 2.2, 1, -0.4, 0, Math.PI * 2); ctx.fill();
      if (o.label) {
        ctx.font = `2.6px ${ROUND}`; const tw = ctx.measureText(o.label).width + 2.4;
        rrect(-tw / 2, hy - 7.2, tw, 3.4, 1.4); ctx.fillStyle = "#fff"; ctx.fill(); line(0.6); ctx.stroke();
        text(o.label, 0, hy - 5.45, 2.6, C.ink);
      }
    } else if (o.hat === "kerchief") {
      ctx.beginPath(); ctx.moveTo(-10.4, hy - 3.4); ctx.quadraticCurveTo(0, hy - 16, 10.4, hy - 3.4); ctx.quadraticCurveTo(0, hy - 6.4, -10.4, hy - 3.4);
      ctx.fillStyle = hc; ctx.fill(); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(-5 + i * 3.4, hy - 8 - (i % 2) * 1.4, 0.6, 0, Math.PI * 2); ctx.fill(); }
      if (o.label) text(o.label, 0, hy - 6.2, 2.2, C.ink);
    }
  }
  function drawItem(kind, x, y, o, line) {
    line(0.6);
    if (kind === "letter") {
      ctx.save(); ctx.translate(x, y); ctx.rotate(-0.1);
      rrect(-3.6, -2.4, 7.2, 4.8, 0.6); ctx.fillStyle = o.letter || "#fffdf5"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-3.6, -2.4); ctx.lineTo(0, 0.6); ctx.lineTo(3.6, -2.4); ctx.stroke();
      ctx.restore(); heart(x, y + 0.4, 0.9, o.hatColor !== "#ffffff" ? o.hatColor : C.rose);
    } else if (kind === "book") {
      rrect(x - 3, y - 3.2, 6, 5.6, 0.6); ctx.fillStyle = o.hatColor !== "#ffffff" ? o.hatColor : C.lav; ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#fff"; ctx.fillRect(x - 2.2, y - 2.4, 3.2, 1);
    } else if (kind === "broom") {
      ctx.strokeStyle = "#b07a4a"; ctx.lineWidth = 0.9; ctx.beginPath(); ctx.moveTo(x, y - 7); ctx.lineTo(x, y + 4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - 1, y + 3.5); ctx.lineTo(x - 3, y + 8); ctx.lineTo(x + 3, y + 8); ctx.lineTo(x + 1, y + 3.5); ctx.closePath();
      ctx.fillStyle = "#f3d58a"; ctx.fill(); line(0.5); ctx.stroke();
    } else if (kind === "star") {
      ctx.strokeStyle = "#caa46a"; ctx.lineWidth = 0.7; ctx.beginPath(); ctx.moveTo(x, y + 1); ctx.lineTo(x + 2, y - 6); ctx.stroke();
      sparkle(x + 2.2, y - 7.2, 2.8, 1, "#fff08a");
    } else if (kind === "net") {
      ctx.strokeStyle = "#b07a4a"; ctx.lineWidth = 0.7; ctx.beginPath(); ctx.moveTo(x, y + 2); ctx.lineTo(x + 3, y - 5); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x + 4, y - 8, 3, 2.4, -0.4, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.fill(); line(0.5); ctx.stroke();
    } else if (kind === "lamp") {
      glow(x, y - 2, 7, C.gold, 1);
      ctx.beginPath(); ctx.arc(x, y - 2, 2.3, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); ctx.stroke();
    } else if (kind === "scissors") {
      ctx.save(); ctx.translate(x, y); ctx.rotate(-0.6 + Math.sin(time * 8) * 0.2);
      ctx.strokeStyle = "#9aa5b1"; ctx.lineWidth = 0.9;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -6); ctx.moveTo(0, 0); ctx.lineTo(2, -5.6); ctx.stroke();
      ctx.beginPath(); ctx.arc(-0.8, 1.4, 1, 0, Math.PI * 2); ctx.arc(1.4, 1.4, 1, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill();
      ctx.restore();
    } else if (kind === "shield") {
      ctx.beginPath(); ctx.moveTo(x, y - 4); ctx.lineTo(x + 3.4, y - 2.8); ctx.quadraticCurveTo(x + 3.2, y + 2.5, x, y + 4); ctx.quadraticCurveTo(x - 3.2, y + 2.5, x - 3.4, y - 2.8); ctx.closePath();
      ctx.fillStyle = o.hatColor !== "#ffffff" ? o.hatColor : C.sky; ctx.fill(); ctx.stroke();
    } else if (kind === "key") {
      ctx.beginPath(); ctx.arc(x - 1.8, y, 1.6, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); ctx.stroke();
      ctx.fillRect(x - 0.4, y - 0.4, 4, 0.9); ctx.fillRect(x + 2.4, y, 0.8, 1.4);
    }
  }

  // ---------- 对话气泡、标注和数值胶囊 ----------
  // 按宽度换行：中文逐字断行，英文单词和数字（如 5-HT、D2）不拆开，标点不放在行首
  function wrapText(t, maxW) {
    const tokens = t.match(/[A-Za-z0-9.\-()/%+<>=≥≤μα]+|\n|./gu) || [];
    const lines = []; let ln = "";
    for (const tk of tokens) {
      if (tk === "\n") { lines.push(ln); ln = ""; continue; }
      if (ctx.measureText(ln + tk).width > maxW && ln.trim() && !"，。、；：！？）》”…—～".includes(tk)) {
        lines.push(ln); ln = tk.replace(/^\s+/, "");
      } else ln += tk;
    }
    if (ln) lines.push(ln);
    return lines;
  }
  // 手机网页上数值胶囊用小一点的字，两个胶囊尽量排在一行（录制视频时不变）
  const pillUI = () => (!REC && UI > 1.2 ? 1.05 : UI);
  // tools/overlap.js 用：把这一帧画出来的标注、气泡、胶囊方框记下来，检查文字有没有被挡住
  const logBox = (kind, x, y, w, h, t) => { if (window.__LAYOUT) window.__LAYOUT.push({ k: kind, x, y, w, h, t, a: ctx.globalAlpha }); };
  // 给方框 (x, y, w, h) 找一个不压住已画内容的位置；返回偏移 [dx, dy]（舞台坐标）
  // 同一个 key 上一帧的位置还能用就继续用，避免来回跳
  const placeMemo = {};
  function avoid(key, x, y, w, h, stepY) {
    if (!hasT || !frameObs.length) return [0, 0];
    const T = ctx.getTransform(), k = Math.abs(T.a) || 1;
    const minY = topSafe(), maxY = H - 6;
    const cost = (dx, dy) => {
      const bx = clamp(x + dx, 4, W - w - 4), by = clamp(y + dy, minY, maxY - h);
      const r = { x: T.a * bx + T.e, y: T.d * by + T.f, w: w * k, h: h * k };
      let c = 0;
      for (const o of frameObs) c += Math.max(0, Math.min(r.x + r.w, o.x + o.w) - Math.max(r.x, o.x)) * Math.max(0, Math.min(r.y + r.h, o.y + o.h) - Math.max(r.y, o.y));
      return c / (r.w * r.h) + (Math.abs(dx) / W + Math.abs(dy) / H) * 0.05; // 同样不挡时，离原位越近越好
    };
    const prev = placeMemo[key];
    if (prev && cost(prev[0], prev[1]) < 0.04) return prev;
    let best = [0, 0], bc = cost(0, 0);
    if (bc < 0.04) { placeMemo[key] = best; return best; }
    const sy = stepY || h + 6, sx = w * 0.55;
    const cand = [];
    for (let j = 1; j <= 4; j++) cand.push([0, sy * j], [0, -sy * j]);
    for (let i = 1; i <= 2; i++) [0, 1, -1, 2, -2].forEach((v) => cand.push([sx * i, sy * v], [-sx * i, sy * v]));
    for (const c of cand) {
      const v = cost(c[0], c[1]);
      if (v < bc - 0.01) { bc = v; best = c; if (v < 0.04) break; }
    }
    placeMemo[key] = best;
    return best;
  }
  const pushObs = (x, y, w, h) => {
    if (!hasT) return;
    const T = ctx.getTransform();
    frameObs.push({ x: T.a * x + T.e, y: T.d * y + T.f, w: w * Math.abs(T.a), h: h * Math.abs(T.d) });
  };
  const topSafe = () => (Math.max(11, W / 60) * pillUI() * 1.35 + 20) * pillRows + 10;

  // 漫画对话气泡：(tx, ty) 是说话的角色（气泡的尾巴朝向它），(bx, by) 是气泡中心
  //   kind: say 普通对话 | shout 喊出来（爆炸框） | think 心里想（云朵） | box 旁白方框（没有尾巴）
  function say(key, on, tx, ty, bx, by, t, kind = "say", color) {
    const a = labelAlpha[key] = lerp(labelAlpha[key] || 0, on ? 1 : 0, 1 - Math.exp(-frameDt * 6.3));
    if (a < 0.02) { delete placeMemo["say:" + key]; return; }
    obsMute = !on;
    ctx.save(); ctx.globalAlpha *= clamp(a * 1.4, 0, 1);
    const fs = Math.max(12, W / 58) * UI;
    ctx.font = `${fs}px ${ROUND}`;
    const lines = wrapText(t, Math.min(W * 0.36, fs * 11.5));
    const tw = Math.max.apply(null, lines.map((l) => ctx.measureText(l).width));
    const lh = fs * 1.32, pad = kind === "shout" ? fs * 1.3 : fs * 0.85;
    const w = tw + pad * 2, h = lines.length * lh + pad * (kind === "shout" ? 1.3 : 1.1);
    const ex = kind === "shout" ? 1.32 : 1; // 爆炸框的尖角会超出 w、h
    let cx = clamp(bx, w * ex / 2 + 6, W - w * ex / 2 - 6), cy = clamp(by, topSafe() + h * ex / 2, H - h * ex / 2 - 6);
    {
      const off = avoid("say:" + key, cx - w * ex / 2, cy - h * ex / 2, w * ex, h * ex, h * ex * 0.6 + 6);
      cx = clamp(cx + off[0], w * ex / 2 + 6, W - w * ex / 2 - 6); cy = clamp(cy + off[1], topSafe() + h * ex / 2, H - h * ex / 2 - 6);
    }
    const pop = 0.82 + 0.18 * ease(a);
    logBox("say", cx - w * pop / 2, cy - h * pop / 2, w * pop, h * pop, t);
    ctx.translate(cx, cy); ctx.scale(pop, pop);
    const dx = tx - cx, dy = ty - cy, dist = Math.hypot(dx, dy) || 1, ux = dx / dist, uy = dy / dist;
    const edge = Math.min(Math.abs(w / 2 / (ux || 1e-6)), Math.abs(h / 2 / (uy || 1e-6)));
    const tip = Math.min(dist / pop - 4, edge + fs * 1.6);
    const fill = color || "#ffffff";
    ctx.lineJoin = "round"; ctx.lineCap = "round";
    const shape = (part) => {
      ctx.beginPath();
      if (part === "tail") {
        if (kind === "say" || kind === "shout") {
          const bw = fs * 0.55, nx = -uy, ny = ux, b0 = edge * 0.6;
          ctx.moveTo(ux * b0 + nx * bw, uy * b0 + ny * bw);
          ctx.lineTo(ux * tip, uy * tip);
          ctx.lineTo(ux * b0 - nx * bw, uy * b0 - ny * bw);
          ctx.closePath();
        }
        return;
      }
      if (kind === "shout") {
        const n = 18;
        for (let i = 0; i <= n * 2; i++) {
          const q = (i / (n * 2)) * Math.PI * 2, r = i % 2 ? 1 : 1.18 + rnd(i + 3) * 0.12;
          const px = Math.cos(q) * (w / 2) * r, py = Math.sin(q) * (h / 2) * r;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
      } else if (kind === "think") {
        const n = Math.max(8, Math.round((w + h) / (fs * 1.1)));
        for (let i = 0; i < n; i++) {
          const q = (i / n) * Math.PI * 2, px = Math.cos(q) * w / 2, py = Math.sin(q) * h / 2;
          ctx.moveTo(px + fs * 0.62, py); ctx.arc(px, py, fs * 0.62, 0, Math.PI * 2);
        }
        ctx.moveTo(w / 2, 0); ctx.ellipse(0, 0, w / 2, h / 2, 0, 0, Math.PI * 2);
      } else if (kind === "box") {
        ctx.rect(-w / 2, -h / 2, w, h);
      } else {
        ctx.roundRect(-w / 2, -h / 2, w, h, Math.min(h / 2, fs * 1.1));
      }
    };
    // 先画带阴影的底，再描边（线宽加倍），最后把身体和尾巴分别填白，盖住内侧的半条线
    ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    ctx.fillStyle = fill;
    shape("body"); ctx.fill(); shape("tail"); ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = C.line; ctx.lineWidth = 3.4;
    shape("body"); ctx.stroke(); shape("tail"); ctx.stroke();
    shape("body"); ctx.fill(); shape("tail"); ctx.fill();
    if (kind === "think") {
      for (let i = 1; i <= 2; i++) {
        const r = fs * (0.34 - i * 0.09), d = edge + fs * 0.5 * i + fs * 0.2;
        if (d > dist / pop - 4) break;
        ctx.beginPath(); ctx.arc(ux * d, uy * d, r, 0, Math.PI * 2); ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 1.6; ctx.stroke();
      }
    }
    if (kind === "box") { ctx.fillStyle = alpha(C.lav, 0.5); ctx.fillRect(-w / 2 + 3, -h / 2 + 3, 5, h - 6); }
    ctx.fillStyle = C.ink; ctx.textBaseline = "middle"; ctx.textAlign = "center";
    lines.forEach((l, i) => ctx.fillText(l, 0, -h / 2 + pad * (kind === "shout" ? 0.65 : 0.55) + lh * (i + 0.5) + 1));
    ctx.textAlign = "left";
    ctx.restore();
    obsMute = false;
    if (on && a > 0.3) pushObs(cx - w * ex / 2, cy - h * ex / 2, w * ex, h * ex);
  }

  // 名词标注：(tx, ty) 指向的点，(lx, ly) 标签位置
  function callout(key, on, tx, ty, lx, ly, t) {
    const a = labelAlpha[key] = lerp(labelAlpha[key] || 0, on ? 1 : 0, 1 - Math.exp(-frameDt * 5));
    if (a < 0.02) { delete placeMemo["callout:" + key]; return; }
    obsMute = !on;
    ctx.save();
    ctx.globalAlpha *= a;
    const fs = Math.max(12, W / 58) * UI;
    ctx.font = `${fs}px ${ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.9, bh = fs + 14;
    let bx = clamp(lx - w / 2, 6, W - w - 6), by = clamp(ly < ty ? ly - bh : ly, topSafe(), H - bh - 6);
    {
      const off = avoid("callout:" + key, bx, by, w, bh, bh + 6);
      bx = clamp(bx + off[0], 6, W - w - 6); by = clamp(by + off[1], topSafe(), H - bh - 6);
    }
    logBox("callout", bx, by, w, bh, t);
    outline(1.6);
    ctx.setLineDash([3, 4]);
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(clamp(lx, bx + 12, bx + w - 12), ly < ty ? by + bh : by); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = C.paper;
    ctx.beginPath(); ctx.arc(tx, ty, 3.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.shadowColor = "rgba(120,80,100,0.16)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2;
    rrect(bx, by, w, bh, bh / 2); ctx.fill();
    ctx.shadowColor = "transparent"; outline(1.8); ctx.stroke();
    ctx.fillStyle = C.rose; ctx.beginPath(); ctx.arc(bx + fs * 0.7, by + bh / 2, fs * 0.22, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = C.ink; ctx.textBaseline = "middle";
    ctx.fillText(t, bx + fs * 1.15, by + bh / 2 + 1);
    ctx.restore();
    obsMute = false;
    if (on && a > 0.3) pushObs(bx, by, w, bh);
  }

  // 角落里的数值胶囊
  let leftPillEnd = 0;
  let pillRows = 1, pillRowsNow = 1;
  function pill(x, y, label, value, color, alignRight) {
    const fs = Math.max(11, W / 60) * pillUI();
    ctx.font = `${fs}px ${ROUND}`;
    const t1 = ctx.measureText(label).width;
    ctx.font = `${fs * 1.35}px ${ROUND}`;
    const t2 = ctx.measureText(value).width;
    const w = t1 + t2 + 34, h = fs * 1.35 + 14;
    let bx = alignRight ? x - w : x;
    if (alignRight && y < H / 2 && bx < leftPillEnd + 8) { bx = 14; y = y + h + 8; pillRowsNow = 2; }
    if (!alignRight && y < H / 2) leftPillEnd = Math.max(leftPillEnd, bx + w);
    logBox("pill", bx, y, w, h, label + value);
    ctx.save();
    ctx.shadowColor = "rgba(120,80,100,0.16)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2;
    rrect(bx, y, w, h, h / 2); ctx.fillStyle = "rgba(255,255,255,0.94)"; ctx.fill();
    ctx.restore();
    outline(1.8); ctx.stroke();
    ctx.textBaseline = "middle";
    ctx.font = `${fs}px ${ROUND}`; ctx.fillStyle = C.soft; ctx.fillText(label, bx + 14, y + h / 2 + 1);
    ctx.font = `${fs * 1.35}px ${ROUND}`; ctx.fillStyle = color; ctx.fillText(value, bx + 20 + t1, y + h / 2 + 1);
  }

  // ---------- 突触场景零件 ----------
  // 突触前末梢：从上方垂下来的圆鼓鼓的“发信屋”。(cx, y0) 是顶部中心，w、h 是宽高。返回底部膜的几何信息
  function terminal(cx, y0, w, h, color, opt) {
    const o = opt || {};
    const neck = w * 0.26, bot = y0 + h;
    ctx.save();
    const g = ctx.createLinearGradient(0, y0, 0, bot);
    g.addColorStop(0, mix(color, "#ffffff", 0.35)); g.addColorStop(1, color);
    ctx.beginPath();
    ctx.moveTo(cx - neck / 2, y0 - 4);
    ctx.bezierCurveTo(cx - neck / 2, y0 + h * 0.25, cx - w / 2, y0 + h * 0.25, cx - w / 2, y0 + h * 0.62);
    ctx.bezierCurveTo(cx - w / 2, bot + h * 0.02, cx - w * 0.3, bot, cx, bot);
    ctx.bezierCurveTo(cx + w * 0.3, bot, cx + w / 2, bot + h * 0.02, cx + w / 2, y0 + h * 0.62);
    ctx.bezierCurveTo(cx + w / 2, y0 + h * 0.25, cx + neck / 2, y0 + h * 0.25, cx + neck / 2, y0 - 4);
    ctx.closePath();
    ctx.fillStyle = g; ctx.fill();
    outline(Math.max(1.5, H * 0.005)); ctx.stroke();
    // 膜上的小磷脂头（一排小圆点），让它看起来是“膜”
    ctx.clip();
    ctx.fillStyle = alpha("#ffffff", 0.55);
    for (let i = 0; i < 26; i++) {
      const t = i / 25, px = cx - w * 0.45 + t * w * 0.9;
      const py = bot - H * 0.012 - Math.pow(Math.abs(t - 0.5) * 2, 3) * h * 0.2;
      ctx.beginPath(); ctx.arc(px, py, Math.max(1.5, H * 0.006), 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
    if (o.face) face(cx, y0 + h * 0.4, H * 0.05, o.mood == null ? 1 : o.mood);
    return { cx, bot, left: cx - w / 2, right: cx + w / 2, w, h, y0 };
  }
  // 突触后膜：画面下方的一整片“收信的岸”，y 是膜的上边
  function postMembrane(y, color, opt) {
    const o = opt || {};
    const g = ctx.createLinearGradient(0, y, 0, H);
    g.addColorStop(0, color); g.addColorStop(1, mix(color, "#ffffff", 0.3));
    ctx.beginPath(); ctx.moveTo(-10, H + 10); ctx.lineTo(-10, y);
    for (let x = 0; x <= W + 10; x += 20) ctx.lineTo(x, y + Math.sin(x / 40 + time * 0.8) * 2);
    ctx.lineTo(W + 10, H + 10); ctx.closePath();
    ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.5, H * 0.005)); ctx.stroke();
    ctx.fillStyle = alpha("#ffffff", 0.55);
    for (let x = 6; x < W; x += Math.max(8, H * 0.024)) { ctx.beginPath(); ctx.arc(x, y + H * 0.014 + Math.sin(x / 40 + time * 0.8) * 2, Math.max(1.5, H * 0.006), 0, Math.PI * 2); ctx.fill(); }
    if (o.face) face(o.faceX || W / 2, y + (H - y) * 0.55, H * 0.045, o.mood == null ? 1 : o.mood);
  }
  // 受体：嵌在膜上的一扇“门”，顶上是钥匙孔一样的结合位点。act 0～1 表示被激活的程度（门打开、发光）
  //   opt.shape: round | square | tri（结合位点的形状，对应不同递质）；opt.label 名牌；opt.dir: 1 向上开口（突触后），-1 向下（突触前）
  function receptor(x, y, s, color, act, opt) {
    const o = opt || {};
    const d = o.dir || 1; // 1：门从膜往上长
    act = clamp(act || 0, 0, 1);
    ctx.save();
    glow(x, y - d * s * 0.9, s * 1.8 * (0.4 + act), C.gold, act);
    const gap = s * (0.18 + act * 0.22);
    for (const side of [-1, 1]) {
      ctx.save(); ctx.translate(x + side * (gap + s * 0.3), y); ctx.rotate(side * act * 0.12 * d);
      rrect(-s * 0.3, d > 0 ? -s * 1.5 : 0, s * 0.6, s * 1.5 + s * 0.1, s * 0.28);
      ctx.fillStyle = color; ctx.fill(); outline(Math.max(1.2, s * 0.08)); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.45)"; rrect(-s * 0.18, d > 0 ? -s * 1.35 : s * 0.2, s * 0.12, s * 0.9, s * 0.06); ctx.fill();
      ctx.restore();
    }
    // 钥匙孔
    const sy = y - d * s * 1.62, sh = o.shape || "round";
    ctx.fillStyle = mix(color, "#ffffff", 0.55); outline(Math.max(1, s * 0.07));
    ctx.beginPath();
    if (sh === "square") ctx.rect(x - s * 0.26, sy - s * 0.26, s * 0.52, s * 0.52);
    else if (sh === "tri") { ctx.moveTo(x, sy - s * 0.3 * d); ctx.lineTo(x + s * 0.3, sy + s * 0.22 * d); ctx.lineTo(x - s * 0.3, sy + s * 0.22 * d); ctx.closePath(); }
    else ctx.arc(x, sy, s * 0.27, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    if (act > 0.3) sparkles(x, y - d * s * 0.9, s * 1.3, 4, (act - 0.3) * 1.4, Math.round(x));
    if (o.label) {
      const fs = Math.max(10, s * 0.42) * UI;
      ctx.font = `${fs}px ${ROUND}`;
      const tw = ctx.measureText(o.label).width + fs;
      const ly = y + d * s * 0.55;
      rrect(x - tw / 2, ly - fs * 0.7, tw, fs * 1.4, fs * 0.7); ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.fill(); outline(1.2); ctx.stroke();
      text(o.label, x, ly + 1, fs, C.ink);
    }
    ctx.restore();
    return { site: { x, y: sy }, top: y - d * s * 1.6 };
  }
  // 转运体：嵌在突触前膜上的“回收旋转门”。spin 旋转角度；blocked 时门被药物堵住，贴上“暂停回收”
  function transporter(x, y, s, color, spin, blocked) {
    ctx.save();
    ctx.beginPath(); ctx.ellipse(x, y, s * 0.72, s * 0.95, 0, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill(); outline(Math.max(1.2, s * 0.08)); ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, s * 0.55, s * 0.78, 0, 0, Math.PI * 2); ctx.clip();
    ctx.fillStyle = mix(color, "#ffffff", 0.5); ctx.fill();
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(1, s * 0.07);
    for (let i = 0; i < 3; i++) {
      const q = spin + i * Math.PI * 2 / 3;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(q) * s * 0.6, y + Math.sin(q) * s * 0.8); ctx.stroke();
    }
    ctx.restore();
    ctx.beginPath(); ctx.arc(x, y, s * 0.1, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    if (blocked) {
      ctx.save(); ctx.translate(x, y + s * 0.2); ctx.rotate(-0.08);
      rrect(-s * 0.95, -s * 0.28, s * 1.9, s * 0.56, s * 0.12); ctx.fillStyle = "#fff4c2"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.strokeStyle = "#e7a23a"; ctx.lineWidth = s * 0.08; ctx.setLineDash([s * 0.15, s * 0.1]);
      ctx.beginPath(); ctx.moveTo(-s * 0.85, -s * 0.2); ctx.lineTo(s * 0.85, -s * 0.2); ctx.moveTo(-s * 0.85, s * 0.2); ctx.lineTo(s * 0.85, s * 0.2); ctx.stroke();
      ctx.setLineDash([]);
      text("暂停回收", 0, 1, s * 0.3, C.ink);
      ctx.restore();
    }
    ctx.restore();
    return { mouth: { x, y: y + s * 0.95 } };
  }
  // 囊泡：装着递质的小泡泡。n 个小点是里面的递质（用递质的颜色）
  function vesicle(x, y, r, color, n, seed) {
    ctx.save();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.75)"; ctx.fill(); outline(Math.max(1, r * 0.1)); ctx.stroke();
    ctx.fillStyle = color;
    for (let i = 0; i < (n == null ? 5 : n); i++) {
      const q = rnd(i + (seed || 0)) * Math.PI * 2 + time * 0.6, rr = r * 0.5 * Math.sqrt(rnd(i + 11 + (seed || 0)));
      ctx.beginPath(); ctx.arc(x + Math.cos(q) * rr, y + Math.sin(q) * rr, r * 0.2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.beginPath(); ctx.ellipse(x - r * 0.4, y - r * 0.45, r * 0.22, r * 0.13, -0.6, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  // 离子：带电荷的小圆球（Cl⁻、Na⁺、Ca²⁺…）
  function ion(x, y, r, label, color) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = color || C.sky; ctx.fill(); outline(Math.max(1, r * 0.12)); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.beginPath(); ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.2, 0, Math.PI * 2); ctx.fill();
    if (label && r > 5) text(label, x, y + 1, r * 0.9, C.ink);
  }
  // 电信号：沿着一条折线跑的小闪电光点（动作电位）
  function spark(points, t, s, color) {
    let len = 0; const seg = [];
    for (let i = 1; i < points.length; i++) { const l = Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]); seg.push(l); len += l; }
    let d = clamp(t, 0, 1) * len, i = 0;
    while (i < seg.length - 1 && d > seg[i]) { d -= seg[i]; i++; }
    const p0 = points[i], p1 = points[i + 1] || p0, k = seg[i] ? d / seg[i] : 0;
    const x = lerp(p0[0], p1[0], k), y = lerp(p0[1], p1[1], k);
    glow(x, y, s * 3, color || C.gold, 1);
    bolt(x, y, s, 1, color || C.gold);
    return { x, y };
  }

  // ---------- 小剧场登记与播放 ----------
  const registry = {};
  let ep = null;
  let playing = !reduce;
  let rafId = 0, last = 0;
  const $ = (id) => document.getElementById(id);
  const clear = (el) => { while (el.firstChild) el.removeChild(el.firstChild); };

  function register(id, meta, factory) { registry[id] = { id, meta, factory }; }
  function sceneCount(r) {
    if (r.count == null) r.count = r.factory().chapters.length;
    return r.count;
  }
  function episodes() { return Object.keys(registry).map((k) => Object.assign({ id: k }, registry[k].meta, { scenes: sceneCount(registry[k]) })); }

  function sync() { if (ep) ep.cfg.sync({ W, H, time, cur }); }
  function resize() {
    if (!ep) return;
    if (REC) { W = LY.SW / LY.K; H = LY.SH / LY.K; cv.width = VW; cv.height = VH; }
    else {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const narrow = cv.clientWidth < 640;
      cv.style.aspectRatio = narrow ? "1000 / 820" : "16 / 9";
      UI = narrow ? 1.25 : 1;
      W = cv.clientWidth; H = W * (narrow ? 0.82 : 9 / 16);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    sync();
  }

  function update(dt) {
    sceneT += dt; frameDt = dt;
    const { CH, S } = ep;
    const tgt = CH[cur];
    const k = 1 - Math.exp(-dt * 1.4);
    for (const key of Object.keys(S)) if (key in tgt) S[key] = lerp(S[key], tgt[key], k);
    sync();
    ep.cfg.update(dt);
  }
  function draw() {
    ctx.globalAlpha = 1; leftPillEnd = 0; pillRowsNow = 1;
    if (window.__LAYOUT) window.__LAYOUT.length = 0;
    ctx.textAlign = "left"; ctx.setLineDash([]);
    frameObs.length = 0; obsOn = true; obsMute = false;
    try { sync(); ep.cfg.draw(); } finally { obsOn = false; }
    pillRows = pillRowsNow;
  }

  function go(i) {
    if (!ep) return;
    const CH = ep.CH;
    cur = (i + CH.length) % CH.length; ep.chT = 0; sceneT = 0;
    const c = CH[cur];
    $("nTitle").textContent = c.title;
    $("nText").textContent = c.text;
    $("nFact").textContent = c.fact;
    $("chapters").querySelectorAll("button").forEach((b, j) => { if (j === cur) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
    sync();
  }

  let uiBound = false;
  function bindUI() {
    if (uiBound) return;
    uiBound = true;
    addEventListener("resize", resize);
    $("prev").addEventListener("click", () => go(cur - 1));
    $("next").addEventListener("click", () => go(cur + 1));
    $("play").addEventListener("click", () => { playing = !playing; $("play").textContent = playing ? "暂停" : "播放"; });
    cv.addEventListener("click", () => go(cur + 1));
    addEventListener("keydown", (e) => {
      if (!ep) return;
      if (e.key === "ArrowRight") go(cur + 1);
      if (e.key === "ArrowLeft") go(cur - 1);
      if (e.key === " " && e.target === document.body) { e.preventDefault(); $("play").click(); }
    });
  }

  function renderHeader(meta, n) {
    const h = $("epHeader");
    if (h) {
      clear(h);
      const tag = document.createElement("span"); tag.className = "tag"; tag.textContent = `${meta.tag} · ${n} 幕`;
      const h1 = document.createElement("h1");
      meta.headline.split(/【|】/).forEach((part, k) => {
        if (!part) return;
        if (k % 2) { const em = document.createElement("em"); em.textContent = part; h1.appendChild(em); }
        else h1.appendChild(document.createTextNode(part));
      });
      const p = document.createElement("p"); p.className = "lede"; p.textContent = meta.lede;
      h.appendChild(tag); h.appendChild(h1);
      if (meta.chapter) { const ch = document.createElement("p"); ch.className = "book"; ch.textContent = "📖 " + meta.chapter; h.appendChild(ch); }
      h.appendChild(p);
    }
    const f = $("epFooter");
    if (f) f.textContent = "科普示意动画：角色是拟人化的，比例和机制都做了简化，不能替代医生的诊断和用药建议，请勿自行用药、停药或换药。" + (meta.footer || "");
    if (meta.canvasLabel) cv.setAttribute("aria-label", meta.canvasLabel);
  }

  function frame(now) {
    if (!ep) { rafId = 0; return; }
    // window.__SPEED：检查工具用来快进（平时是 1）
    const sp = window.__SPEED || 1;
    const dt = Math.min(0.05, (now - last) / 1000) * sp; last = now;
    time += dt;
    if (playing) { ep.chT += dt; if (ep.chT > ep.DUR) go(cur + 1); }
    $("prog").style.width = (ep.chT / ep.DUR * 100).toFixed(2) + "%";
    // 某一帧画错了也不要让整段动画停住：记下错误，下一帧照常继续
    try { update(dt); draw(); } catch (e) { if (window.console) console.error(e); }
    rafId = requestAnimationFrame(frame);
  }

  function play(id) {
    const r = registry[id];
    if (!r) throw new Error("没有登记这一集：" + id);
    const cfg = r.factory();
    ep = { id, meta: r.meta, cfg, CH: cfg.chapters, S: cfg.state, DUR: cfg.dur || 12, accent: cfg.accent || C.rose, chT: 0 };
    Object.keys(labelAlpha).forEach((k) => delete labelAlpha[k]);
    time = 0; cur = 0;
    bindUI();
    r.count = ep.CH.length;
    renderHeader(r.meta, ep.CH.length);
    const list = $("chapters");
    clear(list);
    ep.CH.forEach((c, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button"; b.id = "ch" + i;
      const num = document.createElement("span"); num.textContent = i + 1;
      const name = document.createElement("em"); name.textContent = c.title;
      b.appendChild(num); b.appendChild(name);
      b.addEventListener("click", () => go(i));
      li.appendChild(b); list.appendChild(li);
    });
    $("play").textContent = playing ? "暂停" : "播放";
    resize();
    go(0);
    if (REC) { setupRecording(); return; }
    last = performance.now();
    if (!rafId) rafId = requestAnimationFrame(frame);
  }

  function stop() {
    ep = null;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }

  // 在别的画布上画东西（展厅的角色图鉴用）：临时把画笔换到这块画布上
  function portrait(canvas, fn, t) {
    const saved = [ctx, W, H, time, UI];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth || canvas.width, h = canvas.clientHeight || canvas.height;
    if (canvas.width !== Math.round(w * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    ctx = canvas.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    W = w; H = h; UI = 1; if (t != null) time = t;
    ctx.clearRect(0, 0, W, H);
    try { fn(W, H); } finally { ctx = saved[0]; W = saved[1]; H = saved[2]; time = saved[3]; UI = saved[4]; }
  }

  // ---------- 录制：舞台 + 片头 + 字幕卡 ----------
  function renderVideo() {
    const { CH, cfg, accent } = ep;
    const SW = LY.SW, SH = LY.SH, portraitMode = VH > VW, c = CH[cur];
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const bg = ctx.createLinearGradient(0, 0, 0, VH);
    bg.addColorStop(0, "#fff7f1"); bg.addColorStop(1, "#fbeaf1");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, VW, VH);
    ctx.fillStyle = "rgba(242,140,165,0.13)";
    for (let y = 11; y < VH; y += 22) for (let x = 11 + (y % 44 ? 11 : 0); x < VW; x += 22) { ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill(); }
    const card = (x, y, w, h, r) => {
      ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.25)"; ctx.shadowBlur = 30; ctx.shadowOffsetY = 10;
      ctx.fillStyle = "#fff"; rrect(x, y, w, h, r); ctx.fill(); ctx.restore();
    };
    card(SX, SY, SW, SH, 36);
    ctx.save(); ctx.translate(SX, SY); rrect(0, 0, SW, SH, 36); ctx.clip(); ctx.scale(LY.K, LY.K);
    draw();
    const titleT = window.__TIMELINE ? window.__TIMELINE.intro : 2.5;
    const ta = time < titleT ? 1 : clamp(1 - (time - titleT), 0, 1);
    if (ta > 0) {
      ctx.globalAlpha = ta;
      ctx.fillStyle = "rgba(255,248,244,0.93)"; ctx.fillRect(0, 0, W, H);
      petals(26, 1, 300);
      ctx.fillStyle = C.ink; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      const lines = portraitMode ? cfg.titleCard.lines : [cfg.titleCard.lines.join("")];
      const fs = portraitMode ? 62 : 72;
      ctx.font = `${fs}px ${ROUND}`;
      lines.forEach((ln, i) => ctx.fillText(ln, W / 2, H / 2 - 30 - (lines.length - 1 - i) * fs * 1.25));
      ctx.font = `${fs * 0.47}px ${ROUND}`; ctx.fillStyle = C.soft; ctx.fillText(cfg.titleCard.sub || `${ep.meta.tag} · ${CH.length} 幕`, W / 2, H / 2 + 50);
      ctx.textAlign = "left"; ctx.globalAlpha = 1;
    }
    ctx.restore();
    outline(3); rrect(SX, SY, SW, SH, 36); ctx.stroke();

    ctx.textBaseline = "middle";
    const badgeAt = (x, y, fs) => {
      ctx.font = `${fs}px ${ROUND}`;
      const badge = `第 ${cur + 1} 幕`, bw = ctx.measureText(badge).width + fs * 1.1, bh = fs * 1.6;
      rrect(x, y - bh / 2, bw, bh, bh / 2); ctx.fillStyle = accent; ctx.fill(); outline(2.5); ctx.stroke();
      ctx.fillStyle = C.paper; ctx.fillText(badge, x + fs * 0.55, y + 1);
      return bw;
    };
    if (!portraitMode) {
      const cy0 = SY + SH + 26, ch = VH - cy0 - 22;
      card(SX, cy0, SW, ch, 28); outline(3); rrect(SX, cy0, SW, ch, 28); ctx.stroke();
      const bw = badgeAt(SX + 26, cy0 + 43, 28);
      ctx.fillStyle = C.ink; ctx.font = `36px ${ROUND}`; ctx.fillText(c.title, SX + 46 + bw, cy0 + 43);
      ctx.font = `24px ${SANS}`;
      wrapText(c.text, SW - 56).slice(0, 3).forEach((ln, i) => ctx.fillText(ln, SX + 28, cy0 + 90 + i * 34));
      return;
    }
    const bw = badgeAt(SX, 78, 34);
    ctx.fillStyle = C.ink; ctx.font = `50px ${ROUND}`;
    ctx.fillText(c.title, SX + bw + 20, 80);
    const cy0 = SY + SH + 34, ch = VH - cy0 - 40;
    card(SX, cy0, SW, ch, 32); outline(3); rrect(SX, cy0, SW, ch, 32); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.font = `35px ${SANS}`;
    wrapText(c.text, SW - 70).slice(0, 5).forEach((ln, i) => ctx.fillText(ln, SX + 35, cy0 + 52 + i * 52));
    let ffs = 26;
    ctx.font = `${ffs}px ${SANS}`;
    while (ffs > 18 && ctx.measureText(c.fact).width > SW - 90) { ffs -= 1; ctx.font = `${ffs}px ${SANS}`; }
    const fy = cy0 + ch - 58;
    rrect(SX + 28, fy - 26, SW - 56, 52, 18); ctx.fillStyle = "#fff4f7"; ctx.fill();
    ctx.strokeStyle = C.rose; ctx.lineWidth = 2; ctx.setLineDash([8, 6]); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = C.ink; ctx.fillText(wrapText(c.fact, SW - 90)[0], SX + 45, fy + 1);
  }

  function setupRecording() {
    const TL = window.__TIMELINE;
    const durs = TL ? TL.durs : ep.CH.map(() => ep.DUR);
    window.__rec = {
      total: durs.reduce((a, b) => a + b, 0),
      tick(dt) {
        time += dt; ep.chT += dt;
        if (ep.chT > durs[cur] && cur < ep.CH.length - 1) { const over = ep.chT - durs[cur]; go(cur + 1); ep.chT = over; }
        update(dt); renderVideo();
      },
    };
  }

  document.addEventListener("DOMContentLoaded", () => {
    const id = document.body.dataset.episode;
    if (id) play(id);
  });

  window.Anima = {
    get ctx() { return ctx; }, C, CAST, ROUND, SANS, rnd, lerp, clamp, ease, mix, alpha,
    outline, rrect, text, face, blushAt, sweat, heart, bolt, sparkle, sparkles, glow, dots,
    wash, bokeh, petal, petals, tone, speedLines, sfx, emote,
    chara, say, callout, pill, wrapText,
    terminal, postMembrane, receptor, transporter, vesicle, ion, spark,
    register, episodes, play, stop, portrait,
    get UI() { return UI; },
    get narrow() { return !REC && UI > 1.2; },
    get sceneTime() { return sceneT; },
    topSafe,
  };
})();
