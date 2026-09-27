Anima.register("serotonin-psychosis", {
    "title": "5-HT 与幻觉",
    "tag": "精神病",
    "headline": "皮层里的【兴奋按钮】：5-HT 与幻觉",
    "lede": "皮层锥体神经元身上有一个 5-HT 的“兴奋按钮”：5-HT2A 受体。致幻剂把它按得太猛，帕金森病和痴呆可能让它失衡，都会让人看到并不存在的东西。怎样只按住这个按钮、又不碰多巴胺的 D2 门？",
    "summary": "5-HT2A 受体是皮层的兴奋按钮：致幻剂、帕金森病精神病和痴呆相关精神病的视幻觉，为什么这类患者要慎用强 D2 阻断，以及匹莫范色林。",
    "chapter": "对应 Stahl《精神药理学精要》第 4 章 · 5-HT 与精神病",
    "footer": "如果家里的老人开始看到并不存在的人或动物，不要争辩或责备，温和陪伴，尽早带去看医生；用药请遵医嘱。",
    "canvasLabel": "5-HT 快递员按下皮层锥体神经元上 5-HT2A 兴奋按钮的动画，致幻剂按得太猛带来视幻觉",
    "regions": ["pfc", "brainstem"],
    "parts": ["psychosis"],
    "cast": ["5HT", "Glu", "DA", "drug"],
    "color": "#9ad9c6"
  }, () => {
  const CH = [
    { title: "皮层的兴奋按钮", v0: 1, hyp: 0, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["受体", "5-HT2A"], pill2: ["位置", "皮层"],
      text: "大脑皮层里住着许多锥体神经元，它们是皮层的“主力员工”，身上装着一种特别的门：5-HT 的 5-HT2A 受体。它像一个“兴奋按钮”：5-HT 快递员轻轻一按，锥体神经元就更兴奋一些，顺着自己的线路放出谷氨酸，把消息传给下游。按得有轻有重、恰到好处，我们看到的世界就清清楚楚。",
      fact: "5-HT2A 受体在皮层锥体神经元上很多，被激活时让神经元更兴奋、放出更多谷氨酸" },
    { title: "按得太猛：致幻剂", v0: 1, hyp: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["致幻剂", "猛按按钮"], pill2: ["带来", "视幻觉"],
      text: "致幻剂，比如 LSD 和迷幻蘑菇里的裸盖菇素，会冒充 5-HT，把 5-HT2A 按钮按得又猛又久。皮层过度兴奋，视觉信号被扭曲：颜色变得刺眼，墙上的花纹好像在流动，甚至看到并不存在的图案。这类幻觉以“看到的”为主。致幻剂还可能带来惊恐和危险的举动，风险难以预料。",
      fact: "LSD、裸盖菇素等致幻剂主要通过激动 5-HT2A 受体引起视幻觉" },
    { title: "老人眼前的“小猫”", v0: 0, hyp: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["常见于", "帕金森·痴呆"], pill2: ["幻觉", "多是看到的"],
      text: "有些帕金森病或痴呆的老人，会看到并不存在的东西：角落里的小猫、沙发上的陌生人，有时还会出现妄想。这叫帕金森病精神病或痴呆相关精神病，常常以视幻觉为主。一种看法是，大脑的退化打乱了原本的平衡，让 5-HT2A 按钮的信号变得过强。这是疾病的表现，不是老人故意乱说，家人温和陪伴、及时就医就好。",
      fact: "帕金森病精神病、痴呆相关精神病常以视幻觉为主，可能和 5-HT2A 信号失衡有关" },
    { title: "为什么不能重重挡 D2", v0: 0, hyp: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["线路", "黑质纹状体"], pill2: ["强 D2 阻断", "要慎用"],
      text: "那能不能直接用常见的抗精神病药，把 D2 门重重挡住？要小心。帕金森病本来就是黑质纹状体线上的多巴胺变少了，剩下的多巴胺还在努力让动作顺畅；再把 D2 挡住，僵硬、动作变慢可能明显加重。路易体痴呆的人对抗精神病药格外敏感，可能出现严重反应。老年痴呆患者用这类药，本身也要格外谨慎。",
      fact: "帕金森病、路易体痴呆的患者不宜用强 D2 阻断的药物，容易加重运动症状或出现严重反应" },
    { title: "匹莫范色林：只管按钮", v0: 0, hyp: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["匹莫范色林", "只挡 5-HT2A"], pill2: ["D2", "不碰"],
      text: "匹莫范色林走了另一条路：它只对 5-HT2A 下手，基本不碰 D2。它是 5-HT2A 的反向激动剂兼拮抗剂：坐上按钮，不但不按，还把按钮自己悄悄亮着的一点光也调暗。皮层的过度兴奋降下来，幻觉和妄想可能减轻，而多巴胺照常工作，动作不容易变差。它在美国被批准用于帕金森病精神病，同样需要在医生指导下使用。",
      fact: "匹莫范色林是选择性的 5-HT2A 反向激动剂/拮抗剂，不阻断 D2 受体" },
    { title: "回顾：同一个按钮", v0: 0, hyp: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["按钮", "5-HT2A"], pill2: ["记得", "告诉医生"],
      text: "上一集的第二代抗精神病药，除了挡 D2，也会挡住 5-HT2A，这让动作副作用更少，也可能帮忙减轻一部分幻觉。同一个 5-HT2A 按钮：致幻剂把它按得太猛，退行性疾病可能让它失衡，药物则可以把它按住。如果自己或家人看到了别人看不到的东西，不用害怕，告诉医生，就是得到帮助的开始。",
      fact: "致幻剂过度激活 5-HT2A；匹莫范色林和第二代抗精神病药则会挡住它" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    ht2a: "#8fdcc4", d2: "#9fd0ee", nigro: "#4fb893", term: "#d8f3ea", post: "#fff0e6", pyr: "#ffd9c8",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, hyp: 0, v1: 0, v2: 0, v3: 0, v4: 0 };
  let exc = 0.3; // 锥体神经元的兴奋程度（平滑）

  // 手机竖屏和 3:4 视频都按“窄”排版
  const nw = () => W / H < 1.45;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (Anima.narrow ? 1.08 : 1);
  const prog = (t0, d) => ease((lt - t0) / d);
  const tsafe = () => Anima.topSafe();

  // 药物访客的样子
  const HALLU = { who: "drug", label: "", hatColor: "#c7a6f2", hatColor2: "#ffd36e" };
  const PIMA = { who: "drug", label: "", hatColor: "#b9a7f0", hatColor2: "#ffffff" };
  const D2X = { who: "drug", label: "D2", hatColor: "#ff9aa9", hatColor2: "#ffffff" };
  const SGA = { who: "drug", label: "", hatColor: "#8fcbe8", hatColor2: "#ffffff" };
  const O = (base, o) => Object.assign({}, base, o || {});

  // 5-HT2A 按钮一次按下的节奏（第 1 幕）：三位 5-HT 轮流下来按
  function press5HT(k) {
    const p = ((lt + 6 - k * 2) % 6) / 6; // 0～1 的循环
    return p;
  }
  function excTarget() {
    if (cur === 0) {
      let a = 0; for (let k = 0; k < 3; k++) { const p = press5HT(k); a += p > 0.2 && p < 0.55 ? 1 : 0; }
      return 0.25 + a * 0.18;
    }
    if (cur === 1) return lt > 2.5 ? 1 : 0.4;
    return 0.3;
  }
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
    exc = lerp(exc, excTarget(), 1 - Math.exp(-dt * 3));
  }

  // ---------- 小工具 ----------
  function tagBox(t, x, y, fs, bg, fg, border) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 0.9, h = fs * 1.45;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.94)"; ctx.fill();
    outline(border || 1.3); ctx.stroke();
    text(t, x, y + 1, fs, fg || C.ink);
    return w;
  }
  function card(x, y, w, h, title, color, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, Math.min(18, w * 0.08)); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, Math.min(18, w * 0.08)); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.032, 11), w * 0.1);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.3;
      rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
    ctx.restore();
  }
  function banner(lines, y, a, bx) {
    if (a <= 0) return;
    const bf = fsz(0.03, 11);
    ctx.save(); ctx.globalAlpha *= a;
    ctx.font = `${bf}px ${Anima.ROUND}`;
    const bw = Math.min(W - 12, Math.max.apply(null, lines.map((l) => ctx.measureText(l).width)) + bf * 3.6), bh = bf * (1.1 + lines.length * 1.35);
    const X = clamp(bx == null ? W / 2 : bx, bw / 2 + 6, W - bw / 2 - 6);
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    rrect(X - bw / 2, y - bh / 2, bw, bh, bf * 0.8); ctx.fillStyle = "#fff4f7"; ctx.fill(); ctx.restore();
    outline(2); ctx.strokeStyle = C.rose; ctx.stroke();
    Anima.heart(X - bw / 2 + bf * 1.1, y, bf * 0.5, C.rose); Anima.heart(X + bw / 2 - bf * 1.1, y, bf * 0.5, C.rose);
    lines.forEach((l, j) => text(l, X, y + (j - (lines.length - 1) / 2) * bf * 1.35 + 1, bf, C.ink));
    ctx.restore();
  }
  // 锥体神经元：圆润的三角形细胞体 + 往上的顶树突
  function pyramid(x, base, h, e, dendTop) {
    const w = h * 0.95;
    glow(x, base - h * 0.4, h * (0.6 + e * 0.7), C.gold, e * 0.9);
    if (dendTop != null) {
      for (const [lw, col] of [[h * 0.16, C.line], [h * 0.11, C.pyr]]) {
        ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x, base - h * 0.8); ctx.quadraticCurveTo(x + h * 0.08, (base + dendTop) / 2, x, dendTop); ctx.stroke();
      }
    }
    ctx.beginPath();
    ctx.moveTo(x, base - h);
    ctx.quadraticCurveTo(x + w * 0.12, base - h * 0.5, x + w / 2, base - h * 0.06);
    ctx.quadraticCurveTo(x, base + h * 0.04, x - w / 2, base - h * 0.06);
    ctx.quadraticCurveTo(x - w * 0.12, base - h * 0.5, x, base - h);
    ctx.closePath();
    const g = ctx.createLinearGradient(0, base - h, 0, base);
    g.addColorStop(0, "#fff3ec"); g.addColorStop(1, mix(C.pyr, "#ffe89a", e * 0.6));
    ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.5, h * 0.025)); ctx.stroke();
    const fy = base - h * 0.3, fs = h * 0.2;
    if (e > 0.8) { // 过度兴奋：晕乎乎的
      ctx.strokeStyle = C.ink; ctx.lineWidth = Math.max(1.2, fs * 0.1);
      for (const d of [-1, 1]) { ctx.beginPath(); for (let k = 0; k <= 12; k++) { const q = k / 12 * Math.PI * 3.2, r = fs * 0.05 + k / 12 * fs * 0.16; const px = x + d * fs * 0.33 + Math.cos(q + time * 6) * r, py = fy - fs * 0.08 + Math.sin(q + time * 6) * r; if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); } ctx.stroke(); }
      Anima.blushAt(x, fy + fs * 0.18, fs * 0.55, fs * 0.14);
      outline(Math.max(1, fs * 0.08)); ctx.beginPath(); ctx.ellipse(x, fy + fs * 0.3, fs * 0.1, fs * 0.13, 0, 0, Math.PI * 2); ctx.stroke();
    } else face(x, fy, fs, e > 0.4 ? 1 : 0.5);
    if (e > 0.7) for (let k = 0; k < 3; k++) Anima.bolt(x + Math.cos(time * 3 + k * 2.1) * h * 0.55, base - h * 0.6 + Math.sin(time * 3 + k * 2.1) * h * 0.3, h * 0.09, (e - 0.7) * 3);
  }
  // 铁路（和第 4 集的铁路图同一种画法）
  function rail(x0, y, x1, color, k) {
    const w = Math.max(4, H * 0.016);
    ctx.save(); ctx.lineCap = "round";
    ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = Math.max(1.2, w * 0.28);
    ctx.setLineDash([w * 0.9, w * 1.1]); ctx.lineDashOffset = -time * w * (0.5 + k * 3); ctx.stroke(); ctx.setLineDash([]);
    ctx.restore();
  }
  function trainCar(x, y, s, color, rider, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    if (rider) chara(x, y - s * 0.25, s * 0.6, O(rider, { shadow: false, bob: 0 }));
    rrect(x - s, y - s * 0.5, s * 2, s, s * 0.35); ctx.fillStyle = mix(color, "#ffffff", 0.25); ctx.fill(); outline(Math.max(1, s * 0.12)); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    rrect(x - s * 0.7, y - s * 0.25, s * 0.5, s * 0.35, s * 0.1); ctx.fill(); rrect(x + s * 0.2, y - s * 0.25, s * 0.5, s * 0.35, s * 0.1); ctx.fill();
    ctx.restore();
  }
  // 虚线画出来的“幻影小猫”：半透明、忽隐忽现
  function phantomCat(x, y, s, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a * (0.55 + 0.25 * Math.sin(time * 2.3));
    ctx.fillStyle = alpha("#cbbcf5", 0.45); ctx.setLineDash([4, 4]); ctx.strokeStyle = "#9d8fd6"; ctx.lineWidth = 1.8;
    ctx.beginPath(); ctx.ellipse(x, y - s * 0.5, s * 0.9, s * 0.5, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    const hx = x + s * 0.8, hy = y - s * 1.15;
    ctx.beginPath(); ctx.arc(hx, hy, s * 0.45, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hx - s * 0.38, hy - s * 0.2); ctx.lineTo(hx - s * 0.3, hy - s * 0.7); ctx.lineTo(hx - s * 0.05, hy - s * 0.4);
    ctx.moveTo(hx + s * 0.05, hy - s * 0.4); ctx.lineTo(hx + s * 0.3, hy - s * 0.7); ctx.lineTo(hx + s * 0.38, hy - s * 0.2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - s * 0.85, y - s * 0.6); ctx.quadraticCurveTo(x - s * 1.5, y - s * 1.0 + Math.sin(time * 3) * s * 0.2, x - s * 1.3, y - s * 1.5); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#8b7fc9";
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(hx + d * s * 0.16, hy, s * 0.05, 0, Math.PI * 2); ctx.fill(); }
    ctx.restore();
    sparkles(x, y - s * 0.8, s * 1.6, 3, a * 0.8, 17);
  }

  // ---------- 第 1、2 幕：皮层的兴奋按钮 ----------
  function cortexGeo() {
    const n = nw();
    const post = H * (n ? 0.6 : 0.58);
    const tcx = W * (n ? 0.28 : 0.3), tw = W * (n ? 0.5 : 0.36), th = H * (n ? 0.27 : 0.25);
    const rx = (n ? [0.1, 0.28, 0.46] : [0.13, 0.3, 0.47]).map((k) => k * W);
    const rs = Math.min(H * 0.05, W * 0.045), cs = Math.min(H * 0.045, W * 0.042);
    return { n, post, tcx, tw, th, rx, rs, cs };
  }
  function picture(x, y, w, h, hy) {
    // 一幅普通的风景：天空、小山、树和花；致幻剂作用时颜色和线条开始流动
    ctx.save(); rrect(x, y, w, h, 10); ctx.clip();
    const g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, mix("#dff1ff", "#f7c8ff", hy * (0.5 + 0.5 * Math.sin(time * 1.3)))); g.addColorStop(1, mix("#f4fbff", "#fff0a8", hy));
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
    const wob = (k) => hy * Math.sin(time * 2.2 + k) * h * 0.05;
    ctx.beginPath(); ctx.arc(x + w * 0.8, y + h * 0.25 + wob(1), h * 0.1 * (1 + hy * 0.4), 0, Math.PI * 2); ctx.fillStyle = "#ffe07a"; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, y + h * 0.75);
    for (let k = 0; k <= 12; k++) ctx.lineTo(x + w * k / 12, y + h * 0.72 + Math.sin(k * 0.9) * h * 0.05 + wob(k * 0.7));
    ctx.lineTo(x + w, y + h); ctx.lineTo(x, y + h); ctx.closePath();
    ctx.fillStyle = mix("#bfe8c8", "#9be0ff", hy * (0.5 + 0.5 * Math.sin(time * 1.7))); ctx.fill(); outline(1.2); ctx.stroke();
    const tx = x + w * 0.3, ty = y + h * 0.74;
    ctx.fillStyle = "#c9a27e"; ctx.fillRect(tx - w * 0.02, ty - h * 0.2, w * 0.04, h * 0.2);
    ctx.beginPath(); ctx.arc(tx + wob(2) * 0.5, ty - h * 0.3, h * 0.15, 0, Math.PI * 2); ctx.fillStyle = mix("#8fd6a0", "#ff9ad0", hy * (0.5 + 0.5 * Math.sin(time * 2))); ctx.fill(); outline(1.2); ctx.stroke();
    for (let k = 0; k < 3; k++) {
      const fx = x + w * (0.52 + k * 0.12), fy = y + h * 0.84 + wob(k + 3);
      ctx.beginPath(); ctx.arc(fx, fy, h * 0.025 * (1 + hy * 0.8), 0, Math.PI * 2); ctx.fillStyle = ["#ffb3c7", "#fff1a8", "#d8c9ff"][k]; ctx.fill(); outline(1); ctx.stroke();
    }
    if (hy > 0.02) { // 流动的花纹
      ctx.save(); ctx.globalAlpha *= hy * 0.7;
      const cols = ["#ff9ac2", "#8fd0ff", "#ffe16b", "#b89cff", "#8fe3b5"];
      for (let r = 0; r < 5; r++) {
        ctx.strokeStyle = cols[r]; ctx.lineWidth = Math.max(2, h * 0.025);
        ctx.beginPath();
        for (let k = 0; k <= 40; k++) {
          const q = k / 40 * Math.PI * 2, rr = h * (0.12 + r * 0.08) * (1 + 0.12 * Math.sin(q * 5 + time * 3 + r));
          const px = x + w * 0.5 + Math.cos(q + time * 0.6) * rr * 1.2, py = y + h * 0.5 + Math.sin(q + time * 0.6) * rr;
          if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py);
        }
        ctx.stroke();
      }
      ctx.restore();
      sparkles(x + w / 2, y + h / 2, h * 0.4, 6, hy, 31);
    }
    ctx.restore();
    outline(2); rrect(x, y, w, h, 10); ctx.stroke();
  }
  function cortexView(a) {
    const g = cortexGeo(), n = g.n, hy = S.hyp;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash(mix("#f3fbf7", "#f7efff", hy), mix("#fff1ec", "#f3e6ff", hy));
    Anima.bokeh(7, hy > 0.5 ? "#e3c9ff" : "#cdeee0", 0.8, 14);
    Anima.petals(6, 0.4, 22);
    // 突触后：锥体神经元的树突膜
    Anima.postMembrane(g.post, C.post, {});
    const e = exc;
    // 膜下面：锥体神经元本体 + 通往下游的谷氨酸铁路
    const pH = (H - g.post) * 0.58, px = W * (n ? 0.13 : 0.1), pBase = H * 0.96;
    const ry = H * 0.85;
    rail(px + pH * 0.3, ry, W + 10, "#f6c02e", e);
    const nT = 1 + Math.round(e * 3), ts = Math.max(6, H * 0.03);
    for (let k = 0; k < nT; k++) {
      const t = (time * (0.08 + e * 0.3) + k / nT) % 1;
      const tx = lerp(px + pH * 0.5, W + ts, t);
      trainCar(tx, ry, ts, "#f6c02e", { who: "Glu", eyes: e > 0.8 ? "wide" : "happy", mouth: e > 0.8 ? "o" : "smile" }, Math.min(1, t * 8, (1 - t) * 8));
    }
    tagBox(n ? "谷氨酸 → 下游" : "谷氨酸线 → 下游", W * (n ? 0.8 : 0.86), ry + H * 0.065, fsz(0.024, 10), "#fff4c4", C.ink, 1.1);
    pyramid(px, pBase, pH, e, g.post + H * 0.01);
    // 5-HT 末梢（从脑干中缝核伸过来）
    const T = Anima.terminal(g.tcx, 0, g.tw, g.th, C.term);
    text(n ? "5-HT 末梢" : "5-HT 末梢（来自脑干中缝核）", g.tcx, T.bot - g.th * 0.28, fsz(0.024, 10), C.soft);
    // 三个 5-HT2A 按钮
    const drugIn = [0, 1, 2].map((i) => (cur === 1 ? prog(1.2 + i * 0.5, 0.9) : hy > 0.5 ? 1 : 0));
    const R = g.rx.map((x, i) => {
      let act;
      if (cur === 0 || hy < 0.5) { const p = press5HT(i); act = p > 0.2 && p < 0.55 ? 0.85 : 0.05; }
      else act = drugIn[i] > 0.9 ? 0.75 + 0.25 * Math.abs(Math.sin(time * 7 + i)) : 0.05;
      return Anima.receptor(x, g.post, g.rs, C.ht2a, act, { shape: "tri", label: i === 1 ? "5-HT2A" : null });
    });
    // 第 1 幕：5-HT 轮流下来，轻轻按一下
    let pressHead = null;
    if (cur === 0 || hy < 0.5) {
      for (let k = 0; k < 3; k++) {
        const p = press5HT(k), st = R[k].site;
        const from = { x: g.tcx + (k - 1) * g.tw * 0.18, y: T.bot + g.cs * 3.1 };
        let x, y, al = 1, o;
        if (p < 0.2) { const q = ease(p / 0.2); x = lerp(from.x, st.x, q); y = lerp(from.y, st.y, q) - Math.sin(q * Math.PI) * H * 0.04; al = Math.min(1, p * 20); o = { eyes: "happy", arms: "down", walk: time * 9 }; }
        else if (p < 0.55) { x = st.x; y = st.y; o = { eyes: "happy", arms: "fist", mouth: "grin", jump: Math.abs(Math.sin(time * 5)) * 0.12 }; if (!pressHead || k === 1) pressHead = { x, y: y - g.cs * 3.2 }; }
        else if (p < 0.75) { const q = ease((p - 0.55) / 0.2); x = lerp(st.x, from.x, q); y = lerp(st.y, from.y, q) - Math.sin(q * Math.PI) * H * 0.04; al = 1 - q; o = { eyes: "happy", arms: "wave", walk: time * 9 }; }
        else continue;
        chara(x, y, g.cs, O({ who: "5HT", mouth: "smile", shadow: false, alpha: al * (1 - hy), seed: k }, o));
        if (p > 0.22 && p < 0.3) sfx("嘀", st.x + g.rs * 1.3, st.y - g.rs * 0.6, fsz(0.03, 11), C.mintDeep, -0.1, 1 - hy);
      }
    }
    // 第 2 幕：致幻剂冒充 5-HT，跳上按钮猛按
    let dHead = null;
    if (hy > 0.02) {
      R.forEach((r, i) => {
        const p = drugIn[i];
        if (p <= 0.01) return;
        const st = r.site, y = lerp(-g.cs * 4, st.y, p);
        const jump = p >= 1 ? Math.abs(Math.sin(time * 7 + i)) * 0.35 : 0;
        chara(st.x, y, g.cs * 1.05, O(HALLU, { eyes: "wide", mouth: "open", arms: p >= 1 ? "fist" : "up", jump, shadow: false, alpha: hy, tag: i === 1 ? "致幻剂" : "" }));
        if (p >= 1 && Math.sin(time * 7 + i) > 0.8) sfx("按!", st.x + g.rs * 1.4, st.y - g.rs * 1.4, fsz(0.03, 11), C.bad, -0.15, hy);
        if (i === 1) dHead = { x: st.x, y: y - g.cs * 3.4 };
      });
      speedLines(W * 0.3, g.post, H * 0.5, 28, (hy - 0.5) * 0.5 * (cur === 1 ? prog(3, 1) : 1));
    }
    // 被挤开的 5-HT，站在旁边
    const sx = g.rx[2] + g.rs * (n ? 2.4 : 3.2), sy = g.post - H * 0.005;
    if (hy > 0.02) {
      chara(sx, sy, g.cs * 0.9, { who: "5HT", eyes: "wide", mouth: "wavy", arms: "down", dir: -1, alpha: hy, shadow: false });
      emote("sweat", sx + g.cs * 0.8, sy - g.cs * 3.1, g.cs * 0.45, hy);
    }
    // 右边：眼前的画面（视觉皮层看到的世界）
    const cw = W * (n ? 0.4 : 0.29), ch = n ? H * 0.28 : H * 0.34;
    const cx = W - cw - W * (n ? 0.03 : 0.04), cy = tsafe() + H * (n ? 0.05 : 0.06);
    const pImg = cur === 1 ? prog(2.5, 2) * hy : hy;
    picture(cx, cy, cw, ch, pImg);
    tagBox("眼前的画面", cx + cw / 2, cy - fsz(0.022, 10) * 0.1, fsz(0.022, 10), "#ffffff", C.ink, 1.2);
    const vx = cx + cw * (n ? 0.62 : 0.5), vy = g.post - H * 0.005, vs = g.cs * 1.05;
    chara(vx, vy, vs, { who: "neuron", eyes: pImg > 0.5 ? "wide" : "happy", mouth: pImg > 0.5 ? "o" : "smile", arms: pImg > 0.5 ? "hug" : "wave", dir: 1, look: pImg > 0.5 ? Math.sin(time * 2) * 1.5 : 0 });
    if (pImg > 0.5) emote("!", vx + vs, vy - vs * 3.4, vs * 0.55);
    else emote("note", vx + vs, vy - vs * 3.3, vs * 0.55);

    // 标注和气泡
    const on0 = cur === 0, on1 = cur === 1;
    const r1 = R[1].site, below = H * (n ? 0.71 : 0.7);
    callout("rec", on0 && lt > 1 && (!n || lt < 5), r1.x + g.rs * 0.4, g.post - g.rs * 0.8, W * (n ? 0.52 : 0.52), n ? below : H * 0.4, "5-HT2A：兴奋按钮");
    callout("pyr", on0 && lt > (n ? 5 : 4) && (!n || lt < 8), px + pH * 0.2, pBase - pH * 0.55, W * (n ? 0.52 : 0.36), below, n ? "皮层锥体神经元" : "皮层的锥体神经元：按钮装在它身上");
    callout("glu", on0 && lt > (n ? 9 : 8.5), W * 0.62, ry, W * (n ? 0.6 : 0.68), below, n ? "放出谷氨酸" : "越兴奋，放出的谷氨酸越多");
    say("tap", on0 && !!pressHead && lt > 1.5 && lt < 7, pressHead ? pressHead.x : 0, pressHead ? pressHead.y : 0, W * (n ? 0.3 : 0.5), T.bot + H * 0.04, "轻轻按一下～", "say");
    callout("hal", on1 && lt > 1.5 && lt < (n ? 4.5 : 7.5), dHead ? dHead.x + g.cs * 0.6 : 0, dHead ? dHead.y + g.cs * 1.4 : 0, W * (n ? 0.5 : 0.34), below, n ? "致幻剂：猛按" : "致幻剂：按得又猛又久");
    say("tooHard", on1 && lt > (n ? 4.5 : 3.5) && lt < 8.5, sx, sy - g.cs * 2.9, n ? W * 0.62 : sx + W * 0.03, n ? below + H * 0.03 : T.bot + H * 0.05, "按得太猛啦！", "say");
    callout("vis", on1 && lt > (n ? 8.5 : 5.5), cx, cy + ch * 0.7, W * (n ? 0.22 : 0.52), below, n ? "视幻觉" : "视觉被扭曲 → 视幻觉");
    say("flow", on1 && lt > 9, vx, vy - vs * 3.3, W * (n ? 0.7 : 0.82), below + H * 0.03, "墙上的花纹……在流动？", "think");
    ctx.restore();
  }
  const speedLines = (cx, cy, r, n, a) => { if (a > 0.02) Anima.speedLines(cx, cy, r, n, a, "rgba(160,120,220,0.3)"); };

  // ---------- 第 3 幕：老人眼前的“小猫” ----------
  function room(floor, n) {
    Anima.wash("#fff6ea", "#fbeaf0");
    // 墙纸的小圆点
    ctx.fillStyle = "rgba(242,140,165,0.12)";
    for (let y = H * 0.08; y < floor; y += H * 0.07) for (let x = (y / (H * 0.07)) % 2 ? H * 0.035 : 0; x < W; x += H * 0.07) { ctx.beginPath(); ctx.arc(x, y, H * 0.008, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = "#f2dfcf"; ctx.fillRect(0, floor, W, H - floor);
    outline(2); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    ctx.strokeStyle = "rgba(170,130,110,0.25)"; ctx.lineWidth = 1.5;
    for (let x = -H; x < W; x += H * 0.12) { ctx.beginPath(); ctx.moveTo(x, H); ctx.lineTo(x + H * 0.1, floor); ctx.stroke(); }
  }
  function windowAt(x, y, w, h) {
    rrect(x, y, w, h, 6); ctx.fillStyle = "#e3f3ff"; ctx.fill(); outline(2); ctx.stroke();
    outline(1.6); ctx.beginPath(); ctx.moveTo(x + w / 2, y); ctx.lineTo(x + w / 2, y + h); ctx.moveTo(x, y + h / 2); ctx.lineTo(x + w, y + h / 2); ctx.stroke();
    ctx.fillStyle = "#f7c5d2";
    for (const d of [0, 1]) { ctx.beginPath(); const cx0 = d ? x + w + w * 0.02 : x - w * 0.02; ctx.moveTo(cx0, y - h * 0.05); ctx.quadraticCurveTo(cx0 + (d ? -1 : 1) * w * 0.28, y + h * 0.5, cx0, y + h * 1.05); ctx.lineTo(cx0 + (d ? 1 : -1) * w * 0.06, y + h * 1.05); ctx.lineTo(cx0 + (d ? 1 : -1) * w * 0.06, y - h * 0.05); ctx.closePath(); ctx.fill(); outline(1.3); ctx.stroke(); }
  }
  function armchair(x, floor, s) {
    ctx.fillStyle = "#c8b4e8";
    rrect(x - s * 1.6, floor - s * 3.6, s * 3.2, s * 2.6, s * 0.7); ctx.fill(); outline(2); ctx.stroke();
    rrect(x - s * 2.1, floor - s * 1.9, s * 0.8, s * 1.6, s * 0.35); ctx.fill(); ctx.stroke();
    rrect(x + s * 1.3, floor - s * 1.9, s * 0.8, s * 1.6, s * 0.35); ctx.fill(); ctx.stroke();
    rrect(x - s * 1.4, floor - s * 1.1, s * 2.8, s * 0.9, s * 0.3); ctx.fillStyle = "#d8c8f0"; ctx.fill(); ctx.stroke();
  }
  function elderView(a) {
    const n = nw();
    ctx.save(); ctx.globalAlpha *= a;
    const floor = H * (n ? 0.86 : 0.84);
    room(floor, n);
    const s = H * (n ? 0.068 : 0.085);
    windowAt(W * (n ? 0.04 : 0.05), H * (n ? 0.3 : 0.24), W * (n ? 0.14 : 0.1), H * 0.22);
    const ex = W * (n ? 0.26 : 0.22), fx = W * (n ? 0.43 : 0.38), catX = W * (n ? 0.62 : 0.54);
    armchair(ex, floor, s);
    // 老人和家人
    const seen = prog(1.5, 1);
    chara(ex, floor, s, { who: "neuron", hair: "#e3dcd8", style: "bun", glasses: true, cloth: "#f7d9b8", eyes: seen > 0.5 ? "wide" : "happy", mouth: seen > 0.5 ? "o" : "smile", arms: seen > 0.5 ? "point" : "down", dir: 1, ahoge: false });
    if (seen > 0.5) emote("?", ex - s * 0.9, floor - s * 3.4, s * 0.5);
    const calm = prog(6.5, 1);
    chara(fx, floor, s * 0.95, { who: "neuron", hair: "#8f6a4e", style: "bob", cloth: "#cfe6f7", eyes: "happy", mouth: "smile", arms: calm > 0.5 ? "hug" : "down", dir: -1 });
    if (calm > 0.5) emote("heart", fx + s * 0.9, floor - s * 3.2, s * 0.5, calm);
    // 只有老人看得见的“小猫”
    phantomCat(catX, floor, s * 0.9, seen);
    // 放大镜：皮层里的按钮
    const ir = n ? H * 0.16 : H * 0.2, ix = W * (n ? 0.83 : 0.8), iy = n ? H * 0.46 : H * 0.5;
    const kin = prog(3, 1);
    if (kin > 0) {
      ctx.save(); ctx.globalAlpha *= kin;
      ctx.setLineDash([4, 5]); outline(1.4);
      ctx.beginPath(); ctx.moveTo(ex + s * 0.6, floor - s * 3); ctx.quadraticCurveTo((ex + ix) / 2, floor - s * 5.5, ix - ir * 0.9, iy + ir * 0.3); ctx.stroke(); ctx.setLineDash([]);
      ctx.save(); ctx.beginPath(); ctx.arc(ix, iy, ir, 0, Math.PI * 2); ctx.fillStyle = "#f3fbf7"; ctx.fill(); ctx.clip();
      const my = iy + ir * 0.35;
      ctx.fillStyle = C.post; ctx.fillRect(ix - ir, my, ir * 2, ir);
      outline(1.6); ctx.beginPath(); ctx.moveTo(ix - ir, my); ctx.lineTo(ix + ir, my); ctx.stroke();
      const rs = ir * 0.15;
      for (let k = 0; k < 4; k++) {
        const x = ix - ir * 0.6 + k * ir * 0.4;
        Anima.receptor(x, my, rs, C.ht2a, 0.6 + 0.4 * Math.abs(Math.sin(time * 5 + k * 1.3)), { shape: "tri" });
      }
      // 平衡被打乱：一架歪掉的小天平
      const bx = ix, by = iy - ir * 0.42, tilt = 0.28 + Math.sin(time * 2) * 0.04, bw = ir * 0.55;
      outline(1.6); ctx.beginPath(); ctx.moveTo(bx, by - ir * 0.05); ctx.lineTo(bx, by + ir * 0.25); ctx.stroke();
      ctx.save(); ctx.translate(bx, by); ctx.rotate(-tilt);
      ctx.beginPath(); ctx.moveTo(-bw, 0); ctx.lineTo(bw, 0); ctx.stroke();
      ctx.restore();
      const L = { x: bx - Math.cos(tilt) * bw, y: by + Math.sin(tilt) * bw }, Rr = { x: bx + Math.cos(tilt) * bw, y: by - Math.sin(tilt) * bw };
      ctx.beginPath(); ctx.arc(L.x, L.y + ir * 0.08, ir * 0.1, 0, Math.PI); ctx.fillStyle = C.ht2a; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(Rr.x, Rr.y + ir * 0.08, ir * 0.1, 0, Math.PI); ctx.fillStyle = "#e4e0ff"; ctx.fill(); ctx.stroke();
      ctx.restore();
      outline(2.5); ctx.beginPath(); ctx.arc(ix, iy, ir, 0, Math.PI * 2); ctx.stroke();
      tagBox("放大看：皮层", ix, iy - ir - fsz(0.024, 10) * 0.2, fsz(0.024, 10), "#ffffff", C.ink, 1.2);
      ctx.restore();
    }
    const on = cur === 2;
    say("cat", on && lt > 2 && lt < (n ? 6.5 : 9), ex, floor - s * 3.2, W * (n ? 0.28 : 0.3), H * (n ? 0.3 : 0.3), "角落里……好像有只小猫？", "think");
    callout("visual", on && lt > 3 && (!n || lt < 6.5), catX, floor - s * 1.2, W * (n ? 0.55 : 0.5), H * (n ? 0.94 : 0.94), n ? "以视幻觉为主" : "常以视幻觉为主：看到不存在的人或动物");
    callout("imb", on && lt > 5, ix, iy + ir * 0.2, ix, n ? H * 0.94 : iy + ir + H * 0.06, n ? "5-HT2A 信号失衡？" : "可能：5-HT2A 信号失衡");
    say("stay", on && lt > (n ? 7 : 9.5), fx, floor - s * 3.1, W * (n ? 0.35 : 0.42), H * (n ? 0.3 : 0.33), "我陪着你，我们去问问医生～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：纹状体的 D2 门 ----------
  function lineSign(name, color, cx, cy) {
    const fs = fsz(0.028, 11);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(name).width + fs * 2.6, h = fs * 1.7, x = cx - w / 2;
    rrect(x, cy, w, h, h / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + fs * 0.9, cy + h / 2, fs * 0.38, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); outline(1.2); ctx.stroke();
    text(name, cx + fs * 0.35, cy + h / 2 + 1, fs, C.ink);
  }
  function d2View(a) {
    const n = nw();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f2fbf6", "#e8f3ee");
    Anima.bokeh(6, "#cdeede", 0.7, 33);
    const post = H * 0.6;
    Anima.postMembrane(post, "#dff4ea", {});
    // 上方：黑质纹状体线，只有稀稀拉拉的一节车厢
    const ry = tsafe() + H * (n ? 0.12 : 0.1);
    rail(-10, ry, W + 10, mix(C.nigro, "#c9bfc6", 0.4), 0.2);
    const t = (time * 0.07) % 1;
    trainCar(lerp(-W * 0.05, W * 1.05, t), ry, Math.max(5, H * 0.024), mix(C.nigro, "#c9bfc6", 0.3), { who: "DA", eyes: "sleepy", mouth: "flat" }, 1);
    lineSign(n ? "黑质纹状体线" : "纹状体 · 黑质纹状体线", C.nigro, W * (n ? 0.8 : 0.8), ry + H * 0.04);
    // D2 门：多巴胺只剩两位；强 D2 阻断剂一来，全被挡住
    const x0 = W * (n ? 0.08 : 0.08), x1 = W * (n ? 0.6 : 0.56);
    const rs = Math.min(H * 0.05, W * 0.04), cs = Math.min(H * 0.043, W * 0.038);
    const block = (i) => (cur === 3 ? prog(3.5 + i * 0.35, 1) : 1);
    const heads = [];
    for (let i = 0; i < 5; i++) {
      const x = lerp(x0, x1, i / 4), hasDA = i === 1 || i === 3, b = block(i);
      const r = Anima.receptor(x, post, rs, C.d2, hasDA ? 0.85 * (1 - b) : 0.03, { label: "D2" });
      const st = r.site;
      if (hasDA) {
        const dy = lerp(st.y, post - H * 0.2, b), dx = x + b * cs * 1.6;
        chara(dx, dy, cs, { who: "DA", eyes: b > 0.5 ? "wide" : "happy", mouth: b > 0.5 ? "o" : "smile", arms: b > 0.5 ? "down" : "up", shadow: false, seed: i });
        if (b > 0.3 && b < 0.95) emote("?", dx + cs * 0.8, dy - cs * 3.3, cs * 0.5);
      }
      if (b > 0.01) chara(x, lerp(-cs * 4, st.y, b), cs * 1.05, O(D2X, { eyes: b < 1 ? "open" : "happy", arms: b < 1 ? "up" : "hug", mouth: "cat", shadow: false, bob: 0.4 }));
      heads.push({ x, y: st.y });
    }
    const warn = cur === 3 ? prog(8.5, 0.8) : 1;
    if (warn > 0) { // 大大的“✕”：这个办法不合适
      const wx = heads[2].x, wy = heads[2].y - cs * 1.5, wr = cs * 2.4;
      ctx.save(); ctx.globalAlpha *= warn;
      ctx.lineCap = "round"; ctx.strokeStyle = "#fff"; ctx.lineWidth = wr * 0.36;
      ctx.beginPath(); ctx.moveTo(wx - wr, wy - wr); ctx.lineTo(wx + wr, wy + wr); ctx.moveTo(wx + wr, wy - wr); ctx.lineTo(wx - wr, wy + wr); ctx.stroke();
      ctx.strokeStyle = C.bad; ctx.lineWidth = wr * 0.22; ctx.stroke();
      ctx.restore();
    }
    // 膜下面：帕金森病的老人，本来就走得慢；D2 被挡后更僵
    const stiff = cur === 3 ? prog(6, 1) : 1, s = H * (n ? 0.06 : 0.068), fy = H * 0.95;
    const ox = W * (n ? 0.3 : 0.26) + (stiff < 0.5 ? Math.sin(time * 0.6) * W * 0.03 : 0);
    chara(ox, fy, s, { who: "neuron", hair: "#e3dcd8", style: "short", cloth: "#d9ecd4", glasses: true, eyes: stiff > 0.5 ? "teary" : "open", mouth: stiff > 0.5 ? "wavy" : "smile", arms: "down", walk: stiff < 0.5 ? time * 4 : null, bob: stiff > 0.5 ? 0 : 1, gray: stiff * 0.45, ahoge: false });
    outline(2.2); ctx.beginPath(); ctx.moveTo(ox + s * 0.75, fy - s * 0.65); ctx.lineTo(ox + s * 0.95, fy); ctx.stroke(); // 拐杖
    if (stiff > 0.5) { emote("sweat", ox + s, fy - s * 3.2, s * 0.5); tagBox("更僵、更慢", ox, fy - s * 3.9, fsz(0.022, 10), "#ffe3e6", C.bad, 1.1); }
    const on = cur === 3;
    callout("few", on && lt > 1 && lt < 5, heads[0].x, heads[0].y - rs * 0.3, W * (n ? 0.4 : 0.4), H * (n ? 0.36 : 0.34), n ? "多巴胺本来就少" : "帕金森病：多巴胺本来就少");
    callout("worse", on && lt > 6.5 && (!n || lt < 9.5), ox + s * 0.8, fy - s * 2, W * (n ? 0.7 : 0.56), H * 0.8, n ? "动作症状加重" : "再挡 D2：动作症状加重");
    say("dlb", on && lt > 9, W * 0.8, H * 0.5, W * (n ? 0.75 : 0.8), H * (n ? 0.8 : 0.47), n ? "路易体痴呆：对这类药格外敏感" : "路易体痴呆：对抗精神病药格外敏感，要特别小心", "box");
    ctx.restore();
  }

  // ---------- 第 5 幕：匹莫范色林 ----------
  function pimaView(a) {
    const n = nw();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f3ff", "#eef8f4");
    Anima.bokeh(6, "#dcd2fb", 0.7, 51);
    Anima.petals(6, 0.4, 61);
    const top = tsafe() + H * 0.08, gap = W * 0.04, cw = (W - gap * 3) / 2, ch = H * (n ? 0.62 : 0.66);
    const cs = Math.min(H * 0.05, cw * 0.09), rs = Math.min(H * 0.055, cw * 0.1);
    const dim = cur === 4 ? prog(2, 1.5) : 1;
    let barPt = null, rightHead = null, dRec = null;
    [0, 1].forEach((i) => {
      const x = gap + i * (cw + gap);
      card(x, top, cw, ch, i ? "D2 门：不碰" : "5-HT2A 按钮", i ? "#dcefff" : "#d6f3e8");
      const my = top + ch * 0.78;
      ctx.save(); rrect(x, top, cw, ch, 16); ctx.clip();
      ctx.fillStyle = i ? "#eaf5fc" : "#eef9f4"; ctx.fillRect(x, my, cw, ch); ctx.restore();
      outline(1.6); ctx.beginPath(); ctx.moveTo(x, my); ctx.lineTo(x + cw, my); ctx.stroke();
      const xs = [x + cw * 0.22, x + cw * 0.5];
      if (i === 0) {
        xs.forEach((rx, k) => {
          const p = cur === 4 ? prog(1 + k * 0.5, 1) : 1;
          const act = lerp(0.95, 0, dim);
          const r = Anima.receptor(rx, my, rs, C.ht2a, act * (0.8 + 0.2 * Math.sin(time * 6 + k)), { shape: "tri" });
          if (p > 0.01) chara(rx, lerp(top + ch * 0.05, r.site.y, p), cs, O(PIMA, { eyes: "happy", mouth: "cat", arms: p < 1 ? "up" : "hug", shadow: false, bob: 0.4, tag: k === 0 ? "匹莫范色林" : "" }));
        });
        // 亮度条：基线虚线以下 = 连“自己亮着的一点光”也调暗
        const bx = x + cw * 0.8, bt = top + ch * 0.2, bb = my - H * 0.03, bw = Math.max(10, cw * 0.06);
        const v = lerp(0.95, 0.12, dim), base = 0.3, yOf = (q) => bb - q * (bb - bt);
        rrect(bx - bw / 2, bt, bw, bb - bt, bw / 2); ctx.fillStyle = "#fff"; ctx.fill();
        ctx.save(); rrect(bx - bw / 2, bt, bw, bb - bt, bw / 2); ctx.clip();
        ctx.fillStyle = mix("#ffd86e", "#bfe8d6", dim); ctx.fillRect(bx - bw / 2, yOf(v), bw, bb - yOf(v)); ctx.restore();
        outline(1.6); rrect(bx - bw / 2, bt, bw, bb - bt, bw / 2); ctx.stroke();
        ctx.setLineDash([3, 3]); outline(1.2); ctx.beginPath(); ctx.moveTo(bx - bw * 1.1, yOf(base)); ctx.lineTo(bx + bw * 1.1, yOf(base)); ctx.stroke(); ctx.setLineDash([]);
        text("亮度", bx, bt - fsz(0.02, 9) * 1.1, fsz(0.02, 9), C.soft);
        barPt = { x: bx, y: yOf(base) };
        // 上方：幻影小猫慢慢消失
        phantomCat(x + cw * 0.36, top + ch * 0.36, cs * 1.1, 1 - dim);
        if (dim > 0.6) { sparkles(x + cw * 0.36, top + ch * 0.3, cs * 2, 4, dim, 5); text("安心～", x + cw * 0.36, top + ch * 0.3, fsz(0.026, 10), C.mintDeep); }
      } else {
        xs.forEach((rx, k) => {
          const r = Anima.receptor(rx, my, rs, C.d2, 0.85, { label: "D2" });
          chara(rx, r.site.y, cs, { who: "DA", eyes: "happy", mouth: "grin", arms: "up", shadow: false, jump: Math.abs(Math.sin(time * 4 + k)) * 0.2, seed: k });
          if (!k) dRec = { x: rx, y: r.site.y };
        });
        const px = x + cw * 0.8, py = my - H * 0.005;
        chara(px, py, cs * 1.05, O(PIMA, { eyes: "happy", mouth: "smile", arms: "wave", dir: -1 }));
        rightHead = { x: px, y: py - cs * 3.2 };
        // 上方：老人走得顺顺的
        const wx = x + cw * 0.35 + Math.sin(time * 0.8) * cw * 0.12;
        chara(wx, top + ch * 0.34, cs * 1.05, { who: "neuron", hair: "#e3dcd8", glasses: true, cloth: "#d9ecd4", eyes: "happy", mouth: "grin", walk: time * 6, dir: Math.cos(time * 0.8) > 0 ? 1 : -1, ahoge: false });
        emote("note", wx + cs, top + ch * 0.34 - cs * 3.3, cs * 0.5);
      }
    });
    const on = cur === 4;
    callout("inv", on && lt > 3.5 && lt < 8.5 && !!barPt, barPt ? barPt.x : 0, barPt ? barPt.y : 0, W * (n ? 0.28 : 0.26), top + ch + H * (n ? 0.04 : 0.05), n ? "反向激动：调得更暗" : "反向激动：连按钮自己的光也调暗");
    callout("nod2", on && lt > 5.5 && lt < 8.5 && !!dRec, dRec ? dRec.x : 0, dRec ? dRec.y + rs * 0.3 : 0, W * (n ? 0.74 : 0.74), top + ch + H * (n ? 0.04 : 0.05), n ? "不挡 D2" : "不挡 D2 → 动作不变差");
    say("notin", on && lt > 8.5 && !!rightHead, rightHead ? rightHead.x : 0, rightHead ? rightHead.y : 0, W * (n ? 0.62 : 0.66), H * 0.92, "D2 这边，我不进去～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：回顾 ----------
  function recapView(a) {
    const n = nw();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f3effd");
    Anima.bokeh(6, "#ffd1dc", 0.7, 71);
    Anima.petals(10, 0.6, 81);
    const top = tsafe() + H * 0.07, gap = W * 0.03, cw = (W - gap * 4) / 3, ch = H * (n ? 0.42 : 0.42);
    const cs = Math.min(H * 0.043, cw * 0.1), rs = Math.min(H * 0.045, cw * 0.1);
    const items = [
      { t: "致幻剂", sub: "按得太猛", col: "#ecdcff", who: HALLU, act: 1, res: "视幻觉" },
      { t: "帕金森·痴呆", sub: "信号失衡", col: "#ffe3d6", who: null, act: 0.7, res: "视幻觉为主" },
      { t: "匹莫范色林", sub: "坐上按钮、调暗", col: "#dcf3e9", who: PIMA, act: 0, res: "不碰 D2" },
    ];
    items.forEach((it, i) => {
      const p = prog(0.4 + i * 1.2, 0.8);
      if (p <= 0) return;
      const x = gap + i * (cw + gap), cx = x + cw / 2;
      ctx.save(); ctx.translate(cx, top + ch / 2); ctx.scale(0.85 + 0.15 * p, 0.85 + 0.15 * p); ctx.translate(-cx, -(top + ch / 2));
      card(x, top, cw, ch, it.t, it.col, p);
      ctx.globalAlpha *= p;
      const sf = Math.min(fsz(0.026, 10), cw * 0.1);
      text(it.sub, cx, top + ch * 0.17, sf, C.soft);
      const my = top + ch * 0.77;
      outline(1.4); ctx.beginPath(); ctx.moveTo(x + cw * 0.15, my); ctx.lineTo(x + cw * 0.85, my); ctx.stroke();
      const act = it.act === 1 ? 0.75 + 0.25 * Math.abs(Math.sin(time * 7)) : it.act === 0.7 ? 0.5 + 0.4 * Math.abs(Math.sin(time * 3)) : 0;
      const r = Anima.receptor(cx, my, rs, C.ht2a, act, { shape: "tri" });
      if (it.who) chara(cx, r.site.y, cs, O(it.who, { eyes: it.act ? "wide" : "happy", mouth: it.act ? "open" : "cat", arms: it.act ? "fist" : "hug", shadow: false, jump: it.act ? Math.abs(Math.sin(time * 7)) * 0.3 : 0 }));
      else phantomCat(cx + cs * 0.3, r.site.y - rs * 0.2, cs * 0.9, 1);
      tagBox(it.res, cx, top + ch * 0.9, sf, "#ffffff", i === 2 ? C.mintDeep : C.bad, 1.1);
      ctx.restore();
    });
    // 下面：上一集的第二代药物，两把锁一起挡
    const k = prog(4.5, 1);
    const by = top + ch + (H - top - ch) * 0.52;
    if (k > 0) {
      ctx.save(); ctx.globalAlpha *= k;
      const s = H * (n ? 0.06 : 0.075), dx = W * (n ? 0.12 : 0.1), dy = H * (n ? 0.9 : 0.91);
      chara(dx, dy, s, O(SGA, { eyes: "happy", mouth: "cat", arms: "hold", item: "key", tag: "第二代", dir: 1 }));
      const rr = Math.min(H * 0.05, W * 0.04), ly = H * (n ? 0.88 : 0.9);
      [["D2", C.d2, "round"], ["5-HT2A", C.ht2a, "tri"]].forEach((L, j) => {
        const lx = dx + W * (n ? 0.17 + j * 0.15 : 0.1 + j * 0.09);
        Anima.receptor(lx, ly, rr, L[1], 0.05, { shape: L[2], label: L[0] });
        const cr = rr * 0.35, cy = ly - rr * 1.62;
        rrect(lx - cr * 1.5, cy - cr * 0.75, cr * 3, cr * 1.5, cr * 0.75); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.save(); rrect(lx - cr * 1.5, cy - cr * 0.75, cr * 3, cr * 1.5, cr * 0.75); ctx.clip(); ctx.fillStyle = "#8fcbe8"; ctx.fillRect(lx - cr * 1.5, cy - cr, cr * 1.5, cr * 2); ctx.restore();
      });
      ctx.restore();
      say("prev", cur === 5 && lt > 5 && (!n || lt < 8.5), dx + s * 0.4, dy - s * 3.2, W * (n ? 0.66 : 0.42), n ? by - H * 0.02 : H * 0.68, n ? "D2 和 5-HT2A 我都挡（见上一集）" : "我挡 D2，也挡 5-HT2A～（见上一集）", "say");
    }
    const kb = prog(8.5, 0.8);
    if (!n) banner(["看到别人看不到的东西？", "别害怕，告诉医生就好"], H * 0.86, kb, W * 0.72);
    else banner(["看到不存在的东西？", "告诉医生就好"], H * 0.82, kb, W * 0.68);
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.mintDeep, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.lavDeep, true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) cortexView(S.v0);
    if (S.v1 > 0.02) elderView(S.v1);
    if (S.v2 > 0.02) d2View(S.v2);
    if (S.v3 > 0.02) pimaView(S.v3);
    if (S.v4 > 0.02) recapView(S.v4);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#4fb893",
    titleCard: { lines: ["5-HT 的", "兴奋按钮"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
