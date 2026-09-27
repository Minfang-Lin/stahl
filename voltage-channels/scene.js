Anima.register("voltage-channels", {
    "title": "感应电压的门：钠通道和钙通道",
    "tag": "基础篇",
    "headline": "不认钥匙、只认【电压】的门",
    "lede": "电压敏感钠通道和钙通道身上带着“电压表”：膜电位一变，门就自己开关。拆开看它们的零件，看钠通道怎样开放、被塞住、关上，动作电位怎样一扇门接一扇门地传下去，钙通道又怎样拴着囊泡、把电信号变成递质释放。",
    "summary": "钠通道和钙通道的结构、钠通道的三种状态、动作电位的接力传导、抗惊厥药的使用依赖阻断、α2δ 亚基，以及“电 → 钙 → 释放”的兴奋-分泌偶联。",
    "chapter": "对应 Stahl《精神药理学精要》第 3 章 · 电压敏感离子通道",
    "footer": "文中提到的药物都要在医生指导下使用，不要自行加量、减量或停药。",
    "canvasLabel": "神经元膜上的电压敏感钠通道和钙通道开门、被塞住、关门，药物访客钻进忙碌的门里的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["Glu", "drug", "neuron"],
    "color": "#8cc8f0"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const view = (k) => { const o = Object.assign({}, V0); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "拆开这扇门",
      pill: ["α 亚基", "4 个单元"], pill2: ["每个单元", "6 段跨膜"],
      text: "钠通道和钙通道都不认钥匙，它们认的是电压。拆开来看，门的主体叫 α 亚基，由四个小单元围成一圈，中间就是孔。每个小单元有六段穿过细胞膜，其中第 4 段带着电荷，像一只电压表；第 5、6 段之间的环搭在门外，像一个过滤网，只放对的离子进来。旁边还站着 β 亚基，帮忙调节。",
      fact: "第 4 段是电压感受器，第 5、6 段之间的环是离子过滤器" }, view("v0")),
    Object.assign({ title: "开放、塞住、关上",
      pill: ["钠通道", "关闭"], pill2: ["钠离子", "进不来"],
      text: "钠通道有三种样子。开放：门打开，钠离子顺着浓度差和电荷差冲进神经元。失活：门还没来得及关，第 III、IV 单元之间的一段环就像浴缸塞子，从里面把孔堵住，钠离子一下子就进不来了。关闭：整扇门变形合上。被塞住的门要歇上一小会儿，才能再次打开。",
      fact: "钠通道：开放 → 失活（被塞住）→ 关闭；失活让钠电流很快停下" }, view("v1")),
    Object.assign({ title: "一扇接一扇：动作电位",
      pill: ["传导", "一扇接一扇"], pill2: ["刚开过的门", "先歇一歇"],
      text: "动作电位就是靠这些钠通道传下去的，像点燃一根导火索。一扇门打开，钠离子涌进来，改变了旁边的电压；下一扇门的电压表测到变化，也跟着打开，就这样一扇接一扇跑向轴突末梢。身后刚开过的门被塞住，信号不会往回走；随后钾通道和钠泵出力，神经元慢慢恢复原样。",
      fact: "动作电位沿着轴突上排成一列的电压敏感钠通道接力传导" }, view("v2")),
    Object.assign({ title: "药物专挑忙碌的门",
      pill: ["结合位置", "α 亚基"], pill2: ["特点", "使用依赖"],
      text: "不少抗惊厥药作用在钠通道上。卡马西平、奥卡西平一般认为结合在 α 亚基的孔里，而且偏爱门开着的样子；拉莫三嗪也有类似的作用。门开得越勤，药越容易钻进去，所以放电过猛的神经元被拦得多，正常节奏的信号受影响小，这叫使用依赖。其中一些药也用作心境稳定剂或用来治疗疼痛。",
      fact: "使用依赖：通道越忙，被药物阻断得越多" }, view("v3")),
    Object.assign({ title: "钙通道：拴着囊泡的门",
      pill: ["α1 亚基", "没有塞子"], pill2: ["α2δ", "药物靶点"],
      text: "钙通道和钠通道长得很像，也是四个单元围成的孔，叫 α1 亚基，也有电压表和过滤网，只是没有塞子。它第 II、III 单元之间的环像一根绳，把装满递质的囊泡拴在门边。α1 旁边还有 β、γ 和 α2δ 亚基。末梢上的 N 型、P/Q 型钙通道专管释放递质，加巴喷丁和普瑞巴林抓住的就是 α2δ。",
      fact: "L 型钙通道也分布在血管上，二氢吡啶类降压药作用在那里" }, view("v4")),
    Object.assign({ title: "电 → 钙 → 释放",
      pill: ["兴奋-分泌", "偶联"], pill2: ["步骤", "1 / 7"],
      text: "最后把整场接力串起来。电信号沿轴突跑到末梢，末端的钠通道测到电压、打开，钠离子进来；这改变了旁边钙通道周围的电荷，钙通道的电压表测到了，钙门随之打开；钙离子在囊泡周围一下子变多，拴好的囊泡贴上细胞膜、融合，把谷氨酸放进突触间隙。电信号就这样变成了化学信号。",
      fact: "如果药物让钙门开得少，囊泡就留在原地，过度的释放被压下来" }, view("v5")),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { mem: "#f7c6d3", na: "#a9d8ee", ca: "#b9e6c9", out: "#eef7fb", cell: "#fff0f3", plug: "#ff9a8a", beta: "#ffe3a8", a2d: "#f5b3d6" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  // ---------- 共用零件 ----------
  // 背景：外面（蓝）和里面（粉）以膜为界；up=true 时神经元里面在上
  function bg(memY, up) {
    const g = ctx.createLinearGradient(0, 0, 0, H), k = memY / H;
    const a = up ? C.cell : C.out, b = up ? C.out : C.cell;
    g.addColorStop(0, mix(a, "#ffffff", 0.3)); g.addColorStop(Math.max(0, k - 0.02), a); g.addColorStop(Math.min(1, k + 0.02), b); g.addColorStop(1, mix(b, "#ffffff", 0.2));
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.7, 33);
    Anima.petals(6, 0.4, 44);
  }
  function membrane(x0, x1, y, t) {
    ctx.fillStyle = C.mem; ctx.fillRect(x0, y - t, x1 - x0, t * 2);
    outline(Math.max(1.5, H * 0.004));
    ctx.beginPath(); ctx.moveTo(x0, y - t); ctx.lineTo(x1, y - t); ctx.moveTo(x0, y + t); ctx.lineTo(x1, y + t); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    const r = Math.max(1.4, H * 0.006);
    for (let x = x0 + 6; x < x1; x += Math.max(9, H * 0.026)) {
      ctx.beginPath(); ctx.arc(x, y - t * 0.55, r, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(x, y + t * 0.55, r, 0, Math.PI * 2); ctx.fill();
    }
  }
  function sides(x, y, t, up, align) {
    const fs = fsz(0.026);
    text(up ? "细胞内" : "细胞外", x, y - t - fs * 1.1, fs, C.soft, align || "left");
    text(up ? "细胞外" : "细胞内", x, y + t + fs * 1.1, fs, C.soft, align || "left");
  }
  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "rgba(255,255,255,0.94)"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  // 电压敏感通道：α 亚基的四个单元（I～IV），中间是孔
  //   o.open 0～1 开门；o.plug 0～1 失活塞子堵上（只有钠通道有）；o.up 神经元里面在上；o.meter 电压表亮度；o.ca 钙通道
  function vch(x, y, s, o) {
    const f = o.up ? -1 : 1; // f=1：外面在上
    const pw = s * 0.42, ph = s * 1.5, gap = s * (0.07 + 0.2 * clamp(o.open || 0, 0, 1));
    const col = o.ca ? C.ca : C.na, top = y - ph / 2, R = {};
    if ((o.open || 0) > 0.3 && (o.plug || 0) < 0.5) glow(x, y, s * 1.2, C.gold, (o.open - 0.3) * 0.9);
    const xs = [x - gap - pw * 1.5, x - gap - pw * 0.5, x + gap + pw * 0.5, x + gap + pw * 1.5];
    const romans = ["I", "II", "III", "IV"];
    xs.forEach((cx, i) => {
      rrect(cx - pw / 2, top, pw, ph, pw * 0.4);
      ctx.fillStyle = i % 2 ? col : mix(col, "#ffffff", 0.25); ctx.fill(); outline(Math.max(1.3, s * 0.03)); ctx.stroke();
      // 电压表：带指针的小圆盘
      const my = y + f * ph * 0.1, mr = pw * 0.26, m = o.meter || 0;
      ctx.beginPath(); ctx.arc(cx, my, mr, 0, Math.PI * 2); ctx.fillStyle = mix("#ffffff", "#fff1a8", m); ctx.fill(); outline(1.2); ctx.stroke();
      const q = -Math.PI / 2 + (m - 0.5) * 1.8;
      ctx.beginPath(); ctx.moveTo(cx, my); ctx.lineTo(cx + Math.cos(q) * mr * 0.8, my + Math.sin(q) * mr * 0.8); ctx.strokeStyle = m > 0.5 ? "#e7a23a" : C.line; ctx.lineWidth = 1.6; ctx.stroke();
      if (s > H * 0.09) text(romans[i], cx, y - f * ph * 0.3, Math.max(9, s * 0.13), C.ink, "center", Anima.SANS);
    });
    R.meter = { x: xs[2], y: y + f * ph * 0.1 };
    R.xs = xs; R.pw = pw; R.ph = ph;
    // 过滤网：盖在孔的外口，一只带小孔的碗
    const fy = y - f * ph / 2, fw = gap + pw * 0.55;
    ctx.beginPath(); ctx.ellipse(x, fy, fw, s * 0.12, 0, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,0.75)"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.fillStyle = C.line;
    for (let k = -2; k <= 2; k++) { ctx.beginPath(); ctx.arc(x + k * fw * 0.35, fy, Math.max(1, s * 0.018), 0, Math.PI * 2); ctx.fill(); }
    R.filter = { x: x + fw * 0.7, y: fy };
    // 失活塞子：III 和 IV 之间的环挂着一个球，从里面堵住孔
    if (!o.ca) {
      const p = clamp(o.plug || 0, 0, 1), iy = y + f * ph / 2;
      const hx = xs[2] + pw * 0.5, hy = iy;
      const bx = lerp(xs[3] + pw * 0.2, x, p), by = lerp(iy + f * s * 0.62, iy + f * s * 0.05, p);
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(1.5, s * 0.03);
      ctx.beginPath(); ctx.moveTo(hx, hy); ctx.quadraticCurveTo(lerp(hx, bx, 0.5) + s * 0.25, lerp(hy, by, 0.5) + f * s * 0.15, bx, by); ctx.stroke();
      ctx.beginPath(); ctx.arc(bx, by, s * 0.16, 0, Math.PI * 2); ctx.fillStyle = C.plug; ctx.fill(); outline(1.4); ctx.stroke();
      face(bx, by + s * 0.02, s * 0.09, p > 0.5 ? 1 : 0);
      R.plug = { x: bx, y: by };
    }
    R.inY = y + f * ph / 2; R.outY = fy;
    return R;
  }
  function beta(x, y, s, up) {
    const f = up ? -1 : 1;
    rrect(x - s * 0.12, y - s * 0.7, s * 0.24, s * 1.4, s * 0.12); ctx.fillStyle = C.beta; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, y - f * s * 0.85, s * 0.2, s * 0.14, 0, 0, Math.PI * 2); ctx.fillStyle = C.beta; ctx.fill(); outline(1.3); ctx.stroke();
  }
  function ionsThrough(x, y0, y1, n, lab, col, on, spread, speed) {
    if (on <= 0.02) return;
    for (let k = 0; k < n; k++) {
      const t = (time * (speed || 0.9) + k / n) % 1;
      const xx = x + (t < 0.35 ? (rnd(k + 5) - 0.5) * spread * (1 - t / 0.35) : (t > 0.7 ? (rnd(k + 9) - 0.5) * spread * (t - 0.7) / 0.3 : 0));
      ctx.save(); ctx.globalAlpha *= on * Math.sin(t * Math.PI);
      Anima.ion(xx, lerp(y0, y1, t), H * 0.018, lab, col);
      ctx.restore();
    }
  }
  function floatIons(x0, x1, y0, y1, n, lab, col, seed) {
    for (let i = 0; i < n; i++) {
      const x = lerp(x0, x1, rnd(seed + i)) + Math.sin(time * 0.7 + i) * H * 0.01;
      const y = lerp(y0, y1, rnd(seed + i + 30)) + Math.cos(time * 0.8 + i) * H * 0.008;
      ctx.save(); ctx.globalAlpha *= 0.55; Anima.ion(x, y, H * 0.016, lab, col); ctx.restore();
    }
  }

  // ---------- 第 1 幕：结构 ----------
  function structView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = nar(), my = H * 0.56, t = H * 0.035;
    bg(my, false);
    membrane(0, W, my, t);
    floatIons(W * 0.03, W * 0.55, Anima.topSafe() + H * 0.08, my - H * 0.16, 7, "Na", C.na, 3);
    const cx = W * (n ? 0.35 : 0.3), s = H * (n ? 0.15 : 0.15);
    const R = vch(cx, my, s, { open: 0.15, plug: 0, meter: 0.5 + 0.5 * Math.sin(time * 2) * (lt > 4.5 && lt < 8 ? 1 : 0) });
    const bx = R.xs[3] + R.pw * 0.5 + s * 0.3;
    beta(bx, my, s * 0.7, false);
    sides(W * 0.02, my, t, false);
    // 右边的放大卡片：一个小单元的 6 段
    const kx = W * (n ? 0.62 : 0.6), kw = W * (n ? 0.36 : 0.36), ky = Anima.topSafe() + H * 0.1, kh = H * 0.8 - ky + H * 0.08;
    ctx.save(); ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 12;
    rrect(kx, ky, kw, kh, 18); ctx.fillStyle = "rgba(255,253,251,0.96)"; ctx.fill(); ctx.restore();
    outline(2); rrect(kx, ky, kw, kh, 18); ctx.stroke();
    plate("放大：一个小单元", kx + kw / 2, ky, fsz(0.028), "#e7f6ff");
    const sy = ky + kh * 0.58, sh = kh * 0.34, sw = kw * 0.09;
    ctx.fillStyle = alphaMem(); ctx.fillRect(kx + 6, sy - sh * 0.3, kw - 12, sh * 0.6);
    const segX = (i) => kx + kw * (0.14 + i * 0.145);
    for (let i = 0; i < 6; i++) {
      const hi = i === 3 && lt > 4.2, hf = (i === 4 || i === 5) && lt > 7;
      rrect(segX(i) - sw / 2, sy - sh / 2, sw, sh, sw * 0.45);
      ctx.fillStyle = hi ? "#ffe07a" : hf ? "#c9eefc" : C.na; ctx.fill(); outline(1.5); ctx.stroke();
      text(String(i + 1), segX(i), sy + sh / 2 + fsz(0.026) * 0.9, fsz(0.026), C.ink);
      if (hi) for (let k = 0; k < 3; k++) text("+", segX(i), sy - sh * 0.3 + k * sh * 0.3, fsz(0.03), "#c88600");
      if (i < 5) { // 连接环：单数在里面（下），双数在外面（上）
        const up = i % 2 === 1, yy = up ? sy - sh / 2 : sy + sh / 2, x0 = segX(i), x1 = segX(i + 1);
        ctx.strokeStyle = i === 4 && lt > 7 ? "#4fa8d8" : C.line; ctx.lineWidth = i === 4 && lt > 7 ? 3 : 1.6;
        ctx.beginPath(); ctx.moveTo(x0, yy); ctx.quadraticCurveTo((x0 + x1) / 2, yy + (up ? -1 : 1) * sh * (i === 4 ? 0.45 : 0.22), x1, yy); ctx.stroke();
      }
    }
    // 标注：窗口错开，不同时挤在一起
    callout("alpha", lt > 0.8 && lt < 4.4, cx, my - R.ph * 0.5, cx - W * 0.02, Anima.topSafe() + H * 0.06, "α 亚基：四个单元围成一个孔");
    callout("s4", lt > 4.5 && lt < 8, segX(3), sy - sh * 0.5, segX(3), ky + kh * 0.2, "第 4 段：电压表");
    callout("filt", lt > 7.8 && lt < 11.2, R.filter.x, R.filter.y, cx + W * 0.08, Anima.topSafe() + H * 0.06, "过滤网：只放钠离子进来");
    callout("plug", lt > 10.2, R.plug.x, R.plug.y, cx - W * 0.05, H * 0.9, "塞子：III、IV 之间的环");
    callout("beta", lt > 11.4, bx, my + s * 0.6, bx + W * 0.08, H * 0.8, "β 亚基：调节员");
    ctx.restore();
  }
  const alphaMem = () => "rgba(247,198,211,0.45)";

  // ---------- 第 2 幕：三种状态 ----------
  // 一个循环 7 秒：关闭 → 开放 → 失活（塞住）→ 关闭并失活 → 塞子离开，回到关闭
  function naState(tt) {
    const c = tt % 7;
    const open = c < 1.2 ? 0 : c < 3.2 ? ease((c - 1.2) / 0.4) : c < 4.6 ? 1 : 1 - ease((c - 4.6) / 0.6);
    const plug = c < 2.8 ? 0 : c < 6 ? ease((c - 2.8) / 0.4) : 1 - ease((c - 6) / 0.6);
    const st = open > 0.5 && plug < 0.5 ? 0 : plug >= 0.5 ? 1 : 2; // 0 开放 1 失活 2 关闭
    return { open, plug, st, c };
  }
  function statesView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = nar(), my = H * 0.5, t = H * 0.035, s = H * (n ? 0.15 : 0.14), cx = W * 0.5;
    bg(my, false);
    membrane(0, W, my, t);
    sides(W * 0.02, my, t, false);
    const z = naState(Math.max(0, lt - 0.3));
    const R = vch(cx, my, s, { open: z.open, plug: z.plug, meter: z.open });
    ionsThrough(cx, my - H * 0.2, my + H * 0.22, 6, "Na", C.na, z.st === 0 ? 1 : 0, H * 0.12, 1.1);
    // 门外排队的钠离子小人
    const nxs = [cx - W * 0.33, cx - W * 0.21, cx + W * 0.27];
    for (let i = 0; i < 3; i++) {
      const x = nxs[i], y = my - t - H * 0.02;
      chara(x, y, H * 0.032, { who: "neuron", hair: "#6fb9e0", eye: "#2f7fb0", cloth: "#dff1fb", hat: "cap", hatColor: "#a9d8ee", label: "Na", arms: z.st === 0 ? "up" : "down", eyes: z.st === 0 ? "sparkle" : z.st === 1 ? "x" : "open", mouth: z.st === 0 ? "grin" : "flat", tag: "Na⁺", seed: i });
    }
    if (z.st === 1 && z.c > 2.8 && z.c < 3.6) sfx("塞！", R.plug.x + s * 0.5, R.plug.y + s * 0.3, fsz(0.045), "#e8637a", -0.12, 1);
    // 底下的三格状态条
    const names = ["开放", "失活：塞住", "关闭"], cols = ["#fff1b8", "#ffd6d6", "#e2e8f0"];
    const bw = W * (n ? 0.28 : 0.2), gap = W * 0.03, by = H * 0.88, fs = fsz(0.03);
    names.forEach((nm, i) => {
      const x = W / 2 + (i - 1) * (bw + gap), on = z.st === i;
      rrect(x - bw / 2, by - H * 0.04, bw, H * 0.08, H * 0.04); ctx.fillStyle = on ? cols[i] : "rgba(255,255,255,0.8)"; ctx.fill(); outline(on ? 2.4 : 1.4); ctx.stroke();
      text(nm, x, by + 1, fs, on ? C.ink : C.soft);
      if (on) sparkle(x + bw / 2 - H * 0.02, by - H * 0.04, H * 0.02, 1);
    });
    callout("gate", z.st === 0 && lt > 1, cx - s * 0.3, my + s * 0.8, W * 0.27, my + H * 0.24, "门开了：钠离子冲进来");
    callout("plugc", z.st === 1, R.plug.x, R.plug.y, W * 0.76, H * 0.73, "塞子从里面堵住孔");
    say("rest", z.st === 1 && z.c > 4.8, cx + s, my - s * 0.8, W * 0.8, Anima.topSafe() + H * 0.1, "歇一会儿再开～", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：动作电位接力 ----------
  function apView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = nar(), my = H * 0.42, t = H * 0.03, s = H * 0.075;
    bg(my, false);
    membrane(0, W, my, t);
    sides(W * 0.02, my, t, false);
    const N = n ? 5 : 7, xs = [];
    for (let i = 0; i < N; i++) xs.push(W * ((n ? 0.24 : 0.16) + i * (n ? 0.68 : 0.76) / (N - 1)));
    const period = 9, tt = Math.max(0, lt - 0.5) % period, xw = lerp(-W * 0.05, W * 1.1, tt / 7.5), dd = W * 0.09;
    let inact = null;
    xs.forEach((x, i) => {
      const d = xw - x;
      const open = d > 0 && d < dd * 1.6 ? 1 : 0, plug = d > dd * 0.9 && d < dd * 3.2 ? 1 : 0;
      const R = vch(x, my, s, { open: open, plug: plug, meter: d > -dd * 0.5 && d < dd ? 1 : 0 });
      if (open && !plug) ionsThrough(x, my - H * 0.12, my + H * 0.12, 4, "Na", C.na, 1, H * 0.05, 1.4);
      if (plug && !inact && d > dd * 1.4) inact = R;
    });
    // 神经元里面的导火索：烧过的变灰，火苗在前沿
    const fy = my + H * 0.2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#d9cfc6"; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.moveTo(W * 0.12, fy); ctx.lineTo(clamp(xw, W * 0.12, W * 0.88), fy); ctx.stroke();
    ctx.strokeStyle = "#e3b36b"; ctx.beginPath(); ctx.moveTo(clamp(xw, W * 0.12, W * 0.88), fy); ctx.lineTo(W * 0.88, fy); ctx.stroke();
    if (xw > W * 0.12 && xw < W * 0.88) {
      glow(xw, fy, H * 0.07, C.gold, 1);
      Anima.bolt(xw, fy - H * 0.01, H * 0.03, 1);
      sparkles(xw, fy, H * 0.05, 3, 1, Math.floor(time * 4));
    }
    plate("细胞体", W * 0.07, fy, fsz(0.026));
    plate("末梢", W * 0.94, fy, fsz(0.026));
    // 跟着火苗跑的小居民
    const rx = clamp(xw - W * 0.05, W * 0.08, W * 0.88);
    chara(rx, H * 0.78, H * 0.04, { who: "neuron", arms: "up", walk: time * 11, eyes: "sparkle", mouth: "open", tag: "动作电位" });
    callout("fuse", xw > W * 0.15 && xw < W * 0.6, xw, fy, xw + W * 0.1, H * 0.95, "导火索烧到哪，门就开到哪");
    callout("ref", !!inact && xw > W * 0.5 && xw < W, inact ? inact.plug.x : 0, inact ? inact.plug.y : 0, inact ? inact.plug.x - W * 0.12 : 0, Anima.topSafe() + H * 0.07, "身后的门被塞住：不往回跑");
    ctx.restore();
  }

  // ---------- 第 4 幕：使用依赖 ----------
  function trace(x0, x1, y, h, spikes, now) {
    outline(1.4); ctx.beginPath(); ctx.moveTo(x0, y);
    const span = 4; // 显示最近 4 秒
    spikes.forEach((ts) => {
      const dt = now - ts;
      if (dt < 0 || dt > span) return;
      const x = lerp(x1, x0, dt / span);
      ctx.lineTo(x - 3, y); ctx.lineTo(x, y - h); ctx.lineTo(x + 3, y);
    });
    ctx.lineTo(x1, y); ctx.strokeStyle = "#e8637a"; ctx.lineWidth = 2; ctx.stroke();
  }
  function useView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f3f9ff", "#fff1f5");
    Anima.petals(8, 0.5, 61);
    const n = nar(), top = Anima.topSafe() + H * 0.07, gap = W * 0.03, cw = (W - gap * 3) / 2, ch = H * 0.93 - top;
    const titles = ["正常节奏：很少被拦", "放电过猛：药钻进去"];
    const ds = H * (n ? 0.036 : 0.038);
    for (let side = 0; side < 2; side++) {
      const x = gap + side * (cw + gap), cx = x + cw * 0.5 - (side ? 0 : cw * 0.08), my = top + ch * 0.45, s = H * (n ? 0.07 : 0.085);
      ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 12;
      rrect(x, top, cw, ch, 18); ctx.fillStyle = "#fffdfb"; ctx.fill(); ctx.restore();
      ctx.save(); rrect(x, top, cw, ch, 18); ctx.clip();
      ctx.fillStyle = "#eef7fb"; ctx.fillRect(x, top, cw, my - top); ctx.fillStyle = "#fff0f3"; ctx.fillRect(x, my, cw, ch);
      membrane(x, x + cw, my, H * 0.025);
      ctx.restore();
      outline(2); rrect(x, top, cw, ch, 18); ctx.stroke();
      // 放电时刻
      const spikes = [];
      const blocked = side === 1 ? prog(4.5, 1.5) : 0;
      if (side === 0) for (let k = -2; k < 8; k++) spikes.push(k * 2.2 + 0.6);
      else { let tk = -4; while (tk < 16) { spikes.push(tk); tk += tk < 4.5 ? 0.42 : 0.42 + 0.9 * blocked + 0.5; } }
      let open = 0;
      spikes.forEach((ts) => { const d = lt - ts; if (d >= 0 && d < 0.3) open = 1; });
      if (side === 1 && lt > 4.5) open *= 0.6;
      vch(cx, my, s, { open: open, plug: 0, meter: open });
      ionsThrough(cx, my - H * 0.09, my + H * 0.09, 3, "Na", C.na, open, H * 0.04, 1.6);
      trace(x + cw * 0.08, x + cw * 0.92, top + ch * 0.9, H * 0.06, spikes, lt);
      text("放电记录", x + cw * 0.14, top + ch * 0.76, fsz(0.024), C.soft, "left");
      // 药物访客
      if (side === 0) {
        chara(cx + cw * 0.38, my - H * 0.03, ds, { who: "drug", label: "药", hatColor: "#9fd3f0", eyes: "sleepy", arms: "down", tag: "卡马西平" });
        emote("zzz", cx + cw * 0.38 + ds, my - H * 0.03 - ds * 3.3, ds * 0.7);
      } else {
        const go = prog(3, 1.5);
        const dx = lerp(cx + cw * 0.34, cx, go), dy = lerp(my - H * 0.03, my - s * 0.6, go);
        if (go < 1) chara(dx, dy, ds * (1 - go * 0.5), { who: "drug", label: "药", hatColor: "#9fd3f0", eyes: "sparkle", arms: "point", dir: -1, walk: go > 0 ? time * 9 : null, tag: "卡马西平" });
        else { // 坐进孔里：一颗小胶囊
          ctx.save(); ctx.translate(cx, my); ctx.rotate(Math.PI / 2);
          rrect(-s * 0.3, -s * 0.12, s * 0.6, s * 0.24, s * 0.12); ctx.fillStyle = "#9fd3f0"; ctx.fill(); outline(1.4); ctx.stroke();
          ctx.restore();
          sparkles(cx, my, s * 0.6, 3, 1, 12);
        }
      }
      const fs = fsz(n ? 0.026 : 0.028);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(titles[side]).width + fs * 1.4;
      rrect(cx - tw / 2, top - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = side ? "#ffe0ea" : "#e7f6ff"; ctx.fill(); outline(1.8); ctx.stroke();
      text(titles[side], cx, top + 1, fs, C.ink);
    }
    const rx = gap * 2 + cw * 1.5;
    say("busy", lt > 1 && lt < 3.2, rx, top + ch * 0.5, rx, top + ch * 0.64, "门开得好勤！", "shout");
    say("in", lt > 6.5, rx, top + ch * 0.4, rx + cw * 0.2, top + ch * 0.2, "趁门开着，钻进去！", "say");
    say("wait", lt > 3.8 && lt < 9, gap + cw * 0.8, top + ch * 0.35, gap + cw * 0.45, top + ch * 0.16, "门很少开，我等等～", "think");
    ctx.restore();
  }

  // ---------- 第 5 幕：钙通道 ----------
  function caView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = nar(), my = H * 0.5, t = H * 0.035, s = H * (n ? 0.14 : 0.16), cx = W * (n ? 0.3 : 0.32);
    bg(my, true);
    floatIons(W * 0.45, W * 0.98, my + H * 0.06, my + H * 0.13, 5, "Ca", C.ca, 71);
    membrane(0, W, my, t);
    sides(W * 0.98, my, t, true, "right");
    const R = vch(cx, my, s, { open: 0.1, ca: true, up: true, meter: 0.3 });
    // SNARE 绳子 + 囊泡
    const vx = cx + s * 0.95, vy = my - s * 1.95, vr = s * 0.48;
    ctx.strokeStyle = "#c07aa0"; ctx.lineWidth = Math.max(2, s * 0.04);
    ctx.beginPath(); ctx.moveTo(R.xs[1] + R.pw * 0.5, R.inY);
    for (let k = 1; k <= 12; k++) { const q = k / 12; ctx.lineTo(lerp(R.xs[1] + R.pw * 0.5, vx - vr * 0.6, q) + Math.sin(q * 12 + time * 2) * s * 0.04, lerp(R.inY, vy + vr * 0.7, q)); }
    ctx.stroke();
    Anima.vesicle(vx, vy, vr, Anima.CAST.Glu.hair, 5, 3);
    // β（里面）、γ（膜里）、α2δ（外面的 α2 + 穿膜的 δ）
    const bx = R.xs[0] - s * 0.1;
    ctx.beginPath(); ctx.ellipse(bx, my - s * 0.95, s * 0.22, s * 0.15, 0, 0, Math.PI * 2); ctx.fillStyle = C.beta; ctx.fill(); outline(1.4); ctx.stroke();
    text("β", bx, my - s * 0.95, Math.max(10, s * 0.14), C.ink, "center", Anima.SANS);
    const gx = R.xs[3] + R.pw * 0.5 + s * 0.2;
    rrect(gx - s * 0.1, my - s * 0.6, s * 0.2, s * 1.2, s * 0.1); ctx.fillStyle = "#d8ecff"; ctx.fill(); outline(1.3); ctx.stroke();
    text("γ", gx, my - s * 0.4, Math.max(10, s * 0.13), C.ink, "center", Anima.SANS);
    const ax = R.xs[0] - s * 0.45;
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, s * 0.05);
    ctx.beginPath(); ctx.moveTo(ax, my - t); ctx.lineTo(ax, my + t + s * 0.3); ctx.stroke();
    const a2 = { x: ax - s * 0.12, y: my + t + s * 0.55 };
    const hug = prog(7.5, 1.6);
    if (hug > 0.3) glow(a2.x, a2.y, s * 0.6, "#ffb3d9", hug);
    ctx.beginPath(); ctx.ellipse(a2.x, a2.y, s * 0.34, s * 0.26, 0.3, 0, Math.PI * 2); ctx.fillStyle = C.a2d; ctx.fill(); outline(1.5); ctx.stroke();
    text("α2δ", a2.x, a2.y, Math.max(10, s * 0.14), C.ink, "center", Anima.SANS);
    // 通道类型小表
    const tx = W * (n ? 0.74 : 0.74), fs = fsz(n ? 0.024 : 0.028);
    const rows = [["N、P/Q 型", "末梢：管释放", "#b9e6c9"], ["L 型", "细胞体、血管", "#ffe3a8"], ["T 型", "起搏、连发", "#e4e0ff"]];
    rows.forEach((r, i) => {
      const y = my + H * (0.17 + i * 0.095);
      plate(r[0] + "｜" + r[1], tx, y, fs, r[2]);
    });
    // α2δ 配体：从间隙里走过来抱住 α2δ
    const ds = H * 0.04, walk = prog(6.5, 1.8);
    const px = lerp(W * 0.4, a2.x + s * 0.8, walk), py = lerp(H * 0.95, a2.y + H * 0.13, walk);
    chara(px, py, ds, { who: "drug", label: "α2δ", hatColor: "#f5b3d6", arms: walk >= 1 ? "hug" : "down", dir: -1, walk: walk > 0 && walk < 1 ? time * 9 : null, eyes: walk >= 1 ? "happy" : "open", tag: "普瑞巴林", alpha: walk > 0 ? 1 : 0 });
    const qx = lerp(W * 0.5, a2.x - s * 0.8, walk);
    chara(qx, py, ds, { who: "drug", label: "α2δ", hatColor: "#ffc9a8", arms: walk >= 1 ? "hug" : "down", walk: walk > 0 && walk < 1 ? time * 9 : null, dir: walk < 1 ? -1 : 1, eyes: walk >= 1 ? "happy" : "open", tag: "加巴喷丁", alpha: walk > 0 ? 1 : 0 });
    callout("a1", lt > 0.8 && lt < 4.6, cx, R.outY, n ? cx + W * 0.05 : cx + W * 0.1, n ? H * 0.72 : H * 0.66, n ? "α1：钙离子的孔" : "α1：钙离子的孔（没有塞子）");
    callout("snare", lt > 3.4 && lt < 7.6, lerp(R.xs[1], vx, 0.5), lerp(R.inY, vy, 0.5), cx + W * 0.24, Anima.topSafe() + H * 0.07, "II、III 之间的环：拴住囊泡");
    callout("a2d", lt > 8.2, a2.x, a2.y + s * 0.2, W * 0.3, H * 0.9, "α2δ：加巴喷丁、普瑞巴林的靶点");
    ctx.restore();
  }

  // ---------- 第 6 幕：兴奋-分泌偶联 ----------
  const STEPS = ["电信号跑到末梢", "钠门测到电压", "钠门打开，钠进来", "电荷传到钙门", "钙门打开", "钙离子变多", "囊泡融合、释放"];
  const stepNow = () => clamp(Math.floor((lt - 0.6) / 1.5), -1, 6);
  function coupleView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = nar(), my = H * 0.5, t = H * 0.03, s = H * 0.1;
    bg(my, true);
    membrane(0, W, my, t);
    const st = stepNow();
    const nx = W * 0.3, cx = W * 0.6;
    text("末梢里面", W * 0.98, my - t - fsz(0.026) * 1.1, fsz(0.026), C.soft, "right");
    text("突触间隙", W * 0.02, my + t + fsz(0.026) * 1.1, fsz(0.026), C.soft, "left");
    const Rn = vch(nx, my, s, { up: true, open: st >= 2 ? 1 - prog(7, 1) : 0, plug: prog(6.5, 1), meter: st >= 1 ? 1 : 0 });
    const Rc = vch(cx, my, s, { up: true, ca: true, open: st >= 4 ? 1 : 0, meter: st >= 3 ? 1 : 0 });
    // 电信号从左边沿着膜里面跑来
    if (st <= 1) {
      const p = clamp((lt - 0.2) / 2.2, 0, 1);
      Anima.spark([[-10, my - s * 1.1], [nx - s * 0.8, my - s * 1.1]], p, H * 0.03, C.gold);
    }
    if (st >= 2) ionsThrough(nx, my + H * 0.14, my - H * 0.14, 4, "Na", C.na, st <= 4 ? 1 : 0.4, H * 0.05, 1.2);
    if (st === 3) { // 正电荷往钙门那边扩散
      const p = clamp((lt - 5.1) / 1.4, 0, 1);
      for (let k = 0; k < 4; k++) { const x = lerp(nx + s * 0.6, cx - s * 0.6, clamp(p * 1.2 - k * 0.12, 0, 1)); Anima.ion(x, my - s * 0.9 - k % 2 * s * 0.25, H * 0.016, "+", "#ffe3a8"); }
    }
    if (st >= 4) ionsThrough(cx, my + H * 0.14, my - H * 0.14, 5, "Ca", C.ca, 1, H * 0.05, 1);
    // 囊泡：被拴着，第 7 步贴膜融合
    const vr = s * 0.55, fuse = prog(9.6, 1.2);
    const vx = cx + s * 1.1, vy = lerp(my - s * 1.9, my - t - vr * 0.9, fuse);
    ctx.strokeStyle = "#c07aa0"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(Rc.xs[1] + Rc.pw * 0.5, Rc.inY); ctx.quadraticCurveTo(cx + s * 0.4, vy + vr, vx - vr * 0.5, vy + vr * 0.6); ctx.stroke();
    if (st >= 5) for (let k = 0; k < 8; k++) { const q = k / 8 * Math.PI * 2 + time * 0.8; Anima.ion(vx + Math.cos(q) * vr * 1.5, vy + Math.sin(q) * vr * 1.2, H * 0.015, "Ca", C.ca); }
    if (fuse < 1) Anima.vesicle(vx, vy, vr * (1 - fuse * 0.3), Anima.CAST.Glu.hair, 5, 4);
    if (fuse > 0.6 && fuse < 1) sfx("啵！", vx + vr * 1.4, my + H * 0.06, fsz(0.045), "#ff9a52", -0.12, 1);
    // 谷氨酸快递员被放出来
    const out = prog(10.4, 2);
    if (out > 0) for (let k = 0; k < 3; k++) {
      const x = vx + (k - 1) * W * 0.06, y = lerp(my + H * 0.13, H * 0.76 - (k % 2) * H * 0.02, out);
      chara(x, y, H * 0.032, { who: "Glu", eyes: "sparkle", arms: "up", mouth: "grin", alpha: clamp(out * 3, 0, 1), seed: k });
    }
    // 步骤条
    const fs = fsz(n ? 0.024 : 0.026), sy = H * 0.84, span = W * (n ? 0.8 : 0.66);
    for (let i = 0; i < 7; i++) {
      const x = W / 2 - span / 2 + i * span / 6, on = i <= st;
      ctx.beginPath(); ctx.arc(x, sy, H * 0.024, 0, Math.PI * 2); ctx.fillStyle = i === st ? "#ffd27a" : on ? "#fff1b8" : "rgba(255,255,255,0.85)"; ctx.fill(); outline(i === st ? 2.2 : 1.3); ctx.stroke();
      text(String(i + 1), x, sy + 1, fs, on ? C.ink : C.soft, "center", Anima.SANS);
      if (i < 6) { outline(1.2); ctx.beginPath(); ctx.moveTo(x + H * 0.03, sy); ctx.lineTo(x + span / 6 - H * 0.03, sy); ctx.stroke(); }
    }
    if (st >= 0) plate((st + 1) + "．" + STEPS[st], W / 2, H * 0.93, fsz(0.03), "#fffbe8");
    callout("vssc", lt > 1 && lt < 5, nx - s * 0.5, my - s * 0.8, nx - W * 0.12, Anima.topSafe() + H * 0.06, "钠通道（VSSC）");
    callout("vscc", lt > 4.6 && lt < 9, cx - s * 0.5, my - s * 0.8, cx - W * 0.2, Anima.topSafe() + H * 0.06, "钙通道（VSCC）");
    say("glu", out > 0.6, vx - W * 0.06, H * 0.66, W * (n ? 0.3 : 0.36), my + H * 0.2, "谷氨酸出发！", "shout");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 1) { const z = naState(Math.max(0, lt - 0.3)); v1 = ["开放", "失活", "关闭"][z.st]; v2 = z.st === 0 ? "冲进来" : "进不来"; }
    if (cur === 5) v2 = Math.max(1, stepNow() + 1) + " / 7";
    pill(14, 12, c.pill[0], v1, "#3f93c9", false);
    pill(W - 14, 12, c.pill2[0], v2, "#c0668a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) structView(S.v0);
    if (S.v1 > 0.02) statesView(S.v1);
    if (S.v2 > 0.02) apView(S.v2);
    if (S.v3 > 0.02) useView(S.v3);
    if (S.v4 > 0.02) caView(S.v4);
    if (S.v5 > 0.02) coupleView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#3f93c9",
    titleCard: { lines: ["感应电压的门", "钠通道和钙通道"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
