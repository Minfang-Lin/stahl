Anima.register("adhd", {
    "title": "前额叶的收音机",
    "tag": "注意缺陷多动障碍",
    "headline": "注意力为什么【调不准台】？",
    "lede": "前额叶像大脑里的一台收音机：去甲肾上腺素把信号调大，多巴胺把杂音压小。ADHD 时，这台收音机常常信号弱、杂音大。看看兴奋剂、非兴奋剂和生活里的小办法，怎样帮它把台调清楚。",
    "summary": "信号与噪音、倒 U 形曲线、兴奋剂怎样作用于回收门，以及为什么缓释更稳、非兴奋剂和行为治疗也很重要。",
    "chapter": "对应 Stahl《精神药理学精要》第 11 章 · 注意缺陷多动障碍",
    "footer": "ADHD 的诊断和用药需要专业医生评估，请遵医嘱。",
    "canvasLabel": "前额叶里的一台拟人化收音机，去甲肾上腺素调大信号、多巴胺扫走杂音的动画",
    "regions": ["pfc"],
    "parts": ["adhd"],
    "cast": ["NE", "DA", "drug"],
    "color": "#ec6470"
  }, () => {
  const CH = [
    { title: "大脑的总指挥",
      pill: ["前额叶", "总指挥"], pill2: ["常见开始", "童年"],
      text: "前额叶在大脑最前面，是大脑的总指挥：订计划、集中注意力、在冲动的时候踩一脚刹车。注意缺陷多动障碍（ADHD）主要有三类表现：注意力不集中、多动、冲动。它通常从童年就开始，不少人长大以后仍然有一部分症状，只是样子可能变了。",
      fact: "ADHD 的三类核心表现：注意力不集中、多动、冲动；很多人到成年仍有症状",
      labels: ["pfc"] },
    { title: "信号和杂音",
      pill: ["信号", ""], pill2: ["杂音", ""],
      text: "Stahl 把前额叶比作一台收音机。去甲肾上腺素通过 α2A 受体，把想听的“信号”调大；多巴胺通过 D1 受体，把乱七八糟的“杂音”压小。ADHD 时，前额叶里的这两种递质可能都不够：信号弱、杂音大，注意力就很难锁定在一个台上。",
      fact: "去甲肾上腺素（α2A 受体）增强信号，多巴胺（D1 受体）减少噪音",
      labels: ["ne", "da"] },
    { title: "倒 U 形：刚刚好最好",
      pill: ["递质", ""], pill2: ["前额叶", ""],
      text: "前额叶对多巴胺和去甲肾上腺素的要求很挑剔：太少，人容易走神、没精神；太多，也会乱糟糟、静不下来。把它画出来，就是一座小山，也叫倒 U 形曲线，山顶才是刚刚好。压力很大的时候，这些递质会一下子涌出来，反而把人推下山的另一边。",
      fact: "前额叶功能和多巴胺、去甲肾上腺素水平呈倒 U 形关系：太少和太多都不好",
      labels: ["low", "top", "high"] },
    { title: "兴奋剂：让回收门歇一歇",
      pill: ["药物", "兴奋剂"], pill2: ["前额叶里的递质", ""],
      text: "兴奋剂是最常用的 ADHD 药物，比如哌甲酯和苯丙胺类。它们都会挡住多巴胺和去甲肾上腺素的回收门（DAT 和 NET），让递质在突触里多待一会儿；苯丙胺类还会让回收门“反着开”，把递质往外送。目标不是越多越好，而是让前额叶回到山顶附近。",
      fact: "哌甲酯阻断 DAT 和 NET；苯丙胺类还能让转运体反向转运、释放递质",
      labels: ["mph", "amp"] },
    { title: "慢慢升，比猛地冲好",
      pill: ["缓释", "平稳"], pill2: ["猛升", "要小心"],
      text: "同样的药，上升的速度很重要。缓释剂型让递质慢慢升、稳稳停住，主要帮助前额叶专注。如果递质在奖赏中心里猛地飙升，才更容易带来“快感”，也更容易被滥用。所以要按医嘱服用，不要自己掰开、碾碎或改变用法。",
      fact: "药物起效越快、越猛，越容易带来快感和滥用风险；缓释剂型更平稳",
      labels: ["slow", "fast"] },
    { title: "非兴奋剂和生活里的帮手",
      pill: ["非兴奋剂", "也有选择"], pill2: ["生活", "一起帮忙"],
      text: "不是兴奋剂的药也有选择。托莫西汀阻断去甲肾上腺素的回收门 NET；在前额叶里，NET 顺便也负责回收多巴胺，所以两种递质都会升高。胍法辛和可乐定直接激动 α2A 受体，帮信号变清楚。再加上行为治疗、规律作息和安静的学习环境，收音机就更容易调准台。",
      fact: "前额叶里多巴胺转运体（DAT）很少，多巴胺主要靠 NET 回收",
      labels: ["net", "a2a"] },
  ];
  const DUR = 14;
  // 每一幕只显示自己的画面：v0～v5 在幕与幕之间淡入淡出
  CH.forEach((c, i) => { for (let j = 0; j < CH.length; j++) c["v" + j] = i === j ? 1 : 0; });

  const C = Object.assign({}, Anima.C, {
    term: "#ffd6c4", post: "#ffe0ea", pumpC: "#9fc3ea", brain: "#ffd3dc", brainLine: "#e9a3b5",
    radio: "#ffcfb5", radio2: "#ffe7d6", screen: "#eefaf5", hill: "#bfe8d6", hill2: "#8fd4b5",
    mph: "#ff9aa9", amp: "#ffb347", atx: "#8fdcc4", gfc: "#b8b0f0",
  });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  let sig = 0.25, noise = 1; // 第 2 幕收音机的信号和杂音

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; sig = 0.25; noise = 1; }
    lt += dt;
    const ts = cur === 1 ? (lt > 4.2 ? 1 : 0.25) : 1;
    const tn = cur === 1 ? (lt > 8.4 ? 0.12 : 1) : 0.15;
    sig = lerp(sig, ts, 1 - Math.exp(-dt * 1.6));
    noise = lerp(noise, tn, 1 - Math.exp(-dt * 1.2));
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrowNow = () => W < H * 1.45;
  const UIfs = (k) => Math.max(11, H * k) * Anima.UI;

  // ---------- 共用小零件 ----------
  function card(x, y, w, h, title, color, inner) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 16; ctx.shadowOffsetY = 5;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    if (inner) { ctx.save(); rrect(x, y, w, h, 18); ctx.clip(); inner(); ctx.restore(); }
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    let fs = Math.max(12, Math.min(W / 40, h * 0.07)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(title).width;
    if (tw + fs * 1.4 > w * 0.96) { fs *= (w * 0.96) / (tw + fs * 1.4); ctx.font = `${fs}px ${Anima.ROUND}`; tw = ctx.measureText(title).width; }
    tw += fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function kid(x, y, s, o) { // 前额叶小镇的居民
    chara(x, y, s, Object.assign({ who: "neuron", hair: "#8a6b5a", cloth: "#cfe0f5" }, o));
  }
  function butterfly(x, y, s) {
    const f = Math.abs(Math.sin(time * 14)) * 0.8 + 0.2;
    ctx.save(); ctx.translate(x, y);
    for (const d of [-1, 1]) {
      ctx.beginPath(); ctx.ellipse(d * s * 0.5 * f, -s * 0.2, s * 0.55 * f, s * 0.45, d * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = d > 0 ? "#ffd27a" : "#f9c5d1"; ctx.fill(); outline(1); ctx.stroke();
    }
    ctx.fillStyle = C.line; ctx.fillRect(-s * 0.06, -s * 0.5, s * 0.12, s * 0.8);
    ctx.restore();
  }
  // 乱糟糟的杂音：一团团涂鸦线
  function scribble(x, y, r, a, seed) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.strokeStyle = "rgba(120,110,130,0.75)"; ctx.lineWidth = Math.max(1.2, r * 0.07); ctx.lineJoin = "round";
    ctx.beginPath();
    const n = 26, jit = Math.floor(time * 12);
    for (let i = 0; i <= n; i++) {
      const q = i / n * Math.PI * 4 + seed, rr = r * (0.35 + rnd(i + seed * 7 + jit) * 0.65);
      const px = x + Math.cos(q) * rr, py = y + Math.sin(q) * rr * 0.75;
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  }
  // 收音机：屏幕上粉色的是信号，灰色的是杂音；左边旋钮管信号，右边旋钮管杂音
  function radio(x, y, w, sg, nz, opt) {
    const o = opt || {};
    const h = w * 0.62, L = x - w / 2, T = y - h / 2;
    // 天线和提手
    outline(Math.max(2, w * 0.012));
    ctx.beginPath(); ctx.moveTo(x + w * 0.3, T + 2); ctx.lineTo(x + w * 0.42, T - h * 0.45); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + w * 0.42, T - h * 0.45, w * 0.022, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill(); ctx.stroke();
    sparkles(x + w * 0.42, T - h * 0.45, w * 0.06, 3, sg * (1 - nz), 5);
    ctx.lineWidth = Math.max(4, w * 0.03); ctx.strokeStyle = C.line;
    ctx.beginPath(); ctx.moveTo(x - w * 0.28, T + 2); ctx.quadraticCurveTo(x - w * 0.28, T - h * 0.2, x - w * 0.1, T - h * 0.2); ctx.lineTo(x + w * 0.05, T - h * 0.2); ctx.quadraticCurveTo(x + w * 0.2, T - h * 0.2, x + w * 0.2, T + 2); ctx.stroke();
    ctx.lineWidth = Math.max(2, w * 0.018); ctx.strokeStyle = "#ffb3c6"; ctx.stroke();
    // 机身
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 5;
    rrect(L, T, w, h, w * 0.08); ctx.fillStyle = C.radio; ctx.fill();
    ctx.restore();
    outline(Math.max(2, w * 0.01)); rrect(L, T, w, h, w * 0.08); ctx.stroke();
    rrect(L + w * 0.03, T + h * 0.05, w * 0.94, h * 0.9, w * 0.06); ctx.fillStyle = C.radio2; ctx.fill();
    // 屏幕
    const sx = L + w * 0.08, sy = T + h * 0.1, sw = w * 0.84, sh = h * 0.42;
    rrect(sx, sy, sw, sh, w * 0.03); ctx.fillStyle = C.screen; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.save(); rrect(sx, sy, sw, sh, w * 0.03); ctx.clip();
    ctx.strokeStyle = "rgba(143,212,181,0.35)"; ctx.lineWidth = 1;
    for (let i = 1; i < 6; i++) { ctx.beginPath(); ctx.moveTo(sx + sw * i / 6, sy); ctx.lineTo(sx + sw * i / 6, sy + sh); ctx.stroke(); }
    const mid = sy + sh / 2, N = 80, jit = Math.floor(time * 16);
    // 杂音
    ctx.strokeStyle = "rgba(130,120,140,0.8)"; ctx.lineWidth = Math.max(1.2, w * 0.005);
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const px = sx + sw * i / N, py = mid + (rnd(i * 3.1 + jit) - 0.5) * sh * 0.9 * nz;
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.stroke();
    // 信号
    ctx.strokeStyle = C.rose; ctx.lineWidth = Math.max(2.5, w * 0.014); ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const px = sx + sw * i / N, py = mid - Math.sin(i / N * Math.PI * 4 - time * 4) * sh * 0.38 * sg;
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
    // 台标
    const fs = Math.max(10, w * 0.042) * Anima.UI;
    text(o.name || "前额叶电台", x, sy + sh + h * 0.08, fs, C.ink);
    // 小脸和喇叭
    const clear = sg * (1 - nz);
    face(x, T + h * 0.8, w * 0.07, clear > 0.5 ? 1 : clear > 0.2 ? 0 : -1);
    if (clear < 0.2) Anima.sweat(x + w * 0.1, T + h * 0.66, w * 0.03);
    // 旋钮
    const k1 = { x: L + w * 0.18, y: T + h * 0.8 }, k2 = { x: L + w * 0.82, y: T + h * 0.8 }, kr = w * 0.075;
    const knob = (k, v, col, lab) => {
      ctx.beginPath(); ctx.arc(k.x, k.y, kr, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
      const a = lerp(-2.3, 2.3, v);
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, kr * 0.18); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(k.x, k.y); ctx.lineTo(k.x + Math.sin(a) * kr * 0.75, k.y - Math.cos(a) * kr * 0.75); ctx.stroke();
      if (lab) text(lab, k.x, k.y - kr * 1.45, Math.max(9, w * 0.034) * Anima.UI, C.soft);
    };
    knob(k1, sg, "#ffd3d6", o.noLabels ? null : "信号");
    knob(k2, 1 - nz, "#ffe7a3", o.noLabels ? null : "降噪");
    return { k1, k2, kr, L, T, w, h, bottom: y + h / 2 };
  }

  // ---------- 第 1 幕：总指挥 ----------
  function brainPath(bx, by, bw, bh) {
    const E = [[0, 0, 0.72, 0.62], [-0.45, -0.08, 0.5, 0.52], [0.42, -0.05, 0.45, 0.52], [-0.05, 0.3, 0.58, 0.36], [0.05, -0.35, 0.55, 0.38]];
    ctx.beginPath();
    for (const e of E) { ctx.moveTo(bx + (e[0] + e[2]) * bw / 2, by + e[1] * bh / 2); ctx.ellipse(bx + e[0] * bw / 2, by + e[1] * bh / 2, e[2] * bw / 2, e[3] * bh / 2, 0, 0, Math.PI * 2); }
  }
  function brain(bx, by, bw, bh, pfcA) {
    // 小脑和脑干
    rrect(bx + bw * 0.06, by + bh * 0.2, bw * 0.08, bh * 0.42, bw * 0.04); ctx.fillStyle = "#f9c5d1"; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(bx + bw * 0.27, by + bh * 0.32, bw * 0.14, bh * 0.12, 0, 0, Math.PI * 2); ctx.fillStyle = "#f9c5d1"; ctx.fill(); ctx.stroke();
    ctx.strokeStyle = C.brainLine; ctx.lineWidth = 1.5;
    for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.ellipse(bx + bw * 0.27, by + bh * 0.33, bw * (0.11 - k * 0.03), bh * (0.08 - k * 0.02), 0, 0.2, Math.PI - 0.2); ctx.stroke(); }
    brainPath(bx, by, bw, bh); outline(5); ctx.stroke();
    brainPath(bx, by, bw, bh); ctx.fillStyle = C.brain; ctx.fill();
    ctx.save(); brainPath(bx, by, bw, bh); ctx.clip();
    // 前额叶发光
    const px = bx - bw * 0.36, py = by - bh * 0.05;
    const g = ctx.createRadialGradient(px, py, 0, px, py, bw * 0.34);
    g.addColorStop(0, Anima.alpha("#ffe27a", 0.95 * pfcA)); g.addColorStop(0.7, Anima.alpha("#ffe27a", 0.7 * pfcA)); g.addColorStop(1, Anima.alpha("#ffe27a", 0));
    ctx.fillStyle = g; ctx.fillRect(bx - bw, by - bh, bw * 2, bh * 2);
    // 脑回
    ctx.strokeStyle = C.brainLine; ctx.lineWidth = Math.max(1.5, bw * 0.008); ctx.lineCap = "round";
    const lines = [[-0.3, -0.5, -0.1, -0.2, -0.25, 0.05], [0.0, -0.55, 0.12, -0.25, 0.02, 0.0], [0.3, -0.45, 0.2, -0.15, 0.4, 0.05], [-0.55, 0.0, -0.4, 0.15, -0.5, 0.3],
      [0.1, 0.2, 0.3, 0.25, 0.5, 0.15], [-0.35, 0.28, -0.1, 0.18, 0.15, 0.3], [-0.6, -0.35, -0.45, -0.2, -0.62, -0.05], [0.45, -0.3, 0.55, -0.1, 0.62, 0.1], [0.15, -0.1, 0.3, 0.0, 0.25, 0.12]];
    for (const l of lines) { ctx.beginPath(); ctx.moveTo(bx + l[0] * bw, by + l[1] * bh); ctx.quadraticCurveTo(bx + l[2] * bw, by + l[3] * bh, bx + l[4] * bw, by + l[5] * bh); ctx.stroke(); }
    ctx.restore();
    face(bx + bw * 0.08, by + bh * 0.02, bw * 0.07, 1);
    return { px, py };
  }
  function view0(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f0", "#fdeef3");
    Anima.bokeh(7, "#ffd1dc", 0.8, 21);
    Anima.petals(10, 0.6, 44);
    const nar = narrowNow();
    const bw = Math.min(W * 0.46, H * 0.9), bh = bw * 0.72;
    const bx = W * 0.27, by = H * (nar ? 0.52 : 0.55);
    const pin = prog(0.2, 1);
    const B = brain(bx, by, bw, bh, 0.4 + 0.6 * pin * (0.85 + 0.15 * Math.sin(time * 2.5)));
    // 总指挥：站在前额叶上
    const cs = H * 0.05;
    const cx0 = B.px + bw * 0.02, cy0 = by - bh * 0.32;
    const cj = prog(0.6, 0.8);
    chara(cx0, cy0 - Math.sin(cj * Math.PI) * H * 0.05, cs, { who: "neuron", label: "指挥", hair: "#b08968", cloth: "#fff1b8", arms: lt > 1.5 ? "point" : "wave", item: lt > 1.5 ? "star" : null, eyes: "happy", mouth: "grin", dir: 1, alpha: clamp(cj * 3, 0, 1) });
    // 右边三张小卡片：三类表现
    const cx = W * 0.54, cw = W * 0.43, top = H * (nar ? 0.2 : 0.18), chh = H * (nar ? 0.2 : 0.2), gap = H * 0.035;
    const titles = ["注意力不集中", "多动", "冲动"];
    const cols = ["#bfe3f5", "#bfe8d6", "#ffd3d6"];
    const ks = H * 0.042;
    for (let i = 0; i < 3; i++) {
      const t0 = 2.5 + i * 2, p = prog(t0, 0.7);
      if (p <= 0) continue;
      const y = top + i * (chh + gap);
      ctx.save(); ctx.globalAlpha *= p; ctx.translate((1 - p) * W * 0.05, 0);
      ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
      rrect(cx, y, cw, chh, 16); ctx.fillStyle = "#fffdfb"; ctx.fill(); ctx.restore();
      outline(1.8); rrect(cx, y, cw, chh, 16); ctx.stroke();
      rrect(cx, y, cw * 0.05, chh, 16); ctx.fillStyle = cols[i]; ctx.fill();
      const fs = Math.min(UIfs(0.034), cw * 0.075);
      text(titles[i], cx + cw * 0.08, y + chh / 2, fs, C.ink, "left");
      const kx = cx + cw * 0.78, ky = y + chh * 0.92;
      if (i === 0) {
        kid(kx, ky, ks, { eyes: "open", mouth: "o", arms: "hold", item: "book", look: 1, dir: 1 });
        const q = time * 1.6;
        butterfly(kx + Math.cos(q) * ks * 2.4, ky - ks * 2.4 + Math.sin(q * 2) * ks * 0.6, ks * 0.5);
        emote("?", kx - ks * 1.1, ky - ks * 3.2, ks * 0.6);
      } else if (i === 1) {
        const sw = Math.sin(time * 3.2);
        kid(kx + sw * ks * 1.6, ky, ks, { eyes: "sparkle", mouth: "grin", arms: "up", walk: time * 12, jump: Math.abs(Math.sin(time * 6)) * 0.3, dir: Math.cos(time * 3.2) > 0 ? 1 : -1 });
        emote("sweat", kx + sw * ks * 1.6 + ks, ky - ks * 3, ks * 0.5);
      } else {
        kid(kx, ky, ks, { eyes: "wide", mouth: "open", arms: "fist", dir: -1 });
        sfx("我先！", kx - cw * 0.2, y + chh * 0.3, Math.min(H * 0.04, cw * 0.08), C.bad, -0.12, 0.6 + 0.4 * Math.abs(Math.sin(time * 3)));
      }
      ctx.restore();
    }
    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    callout("pfc", on("pfc") && lt > 1.2, B.px - bw * 0.05, B.py + bh * 0.12, bx - bw * 0.1, H * (nar ? 0.88 : 0.9), "前额叶：大脑的总指挥");
    say("boss", lt > 1.5 && lt < 8.5, cx0, cy0 - cs * 3.2, bx + bw * 0.22, H * 0.2, "订计划、专心、踩刹车，都归我管～", "say");
    say("note", lt > 9, 0, 0, bx + bw * 0.16, H * 0.2, "常从童年开始，不少人到成年仍有症状", "box");
    ctx.restore();
  }

  // ---------- 第 2 幕：收音机 ----------
  function view1(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6f0", "#f3effd");
    Anima.bokeh(6, "#ffd1dc", 0.7, 31);
    const nar = narrowNow();
    const rw = Math.min(W * (nar ? 0.5 : 0.44), H * 0.8), rx = W * 0.5, ry = H * 0.52;
    // 桌面
    const tableY = ry + rw * 0.31;
    ctx.fillStyle = "#f6dcc4"; ctx.fillRect(0, tableY, W, H - tableY); outline(1.5); ctx.beginPath(); ctx.moveTo(0, tableY); ctx.lineTo(W, tableY); ctx.stroke();
    const R = radio(rx, ry, rw, sig, noise, {});
    // 喇叭里冒出来的杂音
    for (let k = 0; k < 4; k++) {
      const x = rx + rw * (0.58 + (k % 2) * 0.1) + Math.sin(time * 2 + k) * rw * 0.02, y = ry - rw * 0.3 + k * rw * 0.12;
      scribble(x, y, rw * 0.07, noise, k * 3.3);
    }
    for (let k = 0; k < 3; k++) scribble(rx - rw * 0.62 - (k % 2) * rw * 0.06, ry - rw * 0.25 + k * rw * 0.13, rw * 0.06, noise * 0.8, 20 + k);
    if (noise > 0.4) sfx("沙沙……", rx + rw * 0.52, ry - rw * 0.46, H * 0.04, "#8a8098", 0.1, noise);
    const cs = H * 0.048;
    // 去甲肾上腺素：从左边走来，拧“信号”旋钮
    const ne = { x: lerp(-cs * 2, R.L - cs * 1.4, prog(2, 2)), walk: lt > 2 && lt < 4 ? time * 9 : null };
    const turning = lt > 4 && lt < 7;
    chara(ne.x, tableY, cs, { who: "NE", arms: turning ? "point" : lt > 4 ? "up" : "down", eyes: lt > 6.5 ? "happy" : "open", mouth: lt > 4 ? "grin" : "smile", walk: ne.walk, dir: 1 });
    if (turning) {
      ctx.save(); ctx.strokeStyle = C.bad; ctx.lineWidth = 2.5; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.arc(R.k1.x, R.k1.y, R.kr * 1.5, -1.2 + time * 2, 0.8 + time * 2); ctx.stroke(); ctx.restore();
    }
    // 多巴胺：从右边来，扫走杂音
    const daX0 = W + cs * 2, daX1 = R.L + R.w + cs * 1.6;
    const da = lerp(daX0, daX1, prog(6.5, 2)) + (lt > 8.5 ? Math.sin(time * 5) * cs * 0.5 : 0);
    chara(da, tableY, cs, { who: "DA", arms: "hold", item: "broom", eyes: lt > 11 ? "happy" : "open", mouth: "grin", walk: lt > 6.5 ? time * 9 : null, dir: -1 });
    if (lt > 8.5 && lt < 12) sfx("唰唰！", da, tableY - cs * 3.8, H * 0.038, "#ff9a52", -0.1, Math.abs(Math.sin(time * 5)));
    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    callout("ne", on("ne") && lt > 4.5, R.k1.x, R.k1.y, W * (nar ? 0.26 : 0.2), H * 0.86, "NE → α2A 受体：调大信号");
    callout("da", on("da") && lt > 8.8, R.k2.x, R.k2.y, W * (nar ? 0.74 : 0.8), H * 0.95, "DA → D1 受体：压低杂音");
    say("weak", lt > 0.6 && lt < 3.8, rx, ry - rw * 0.3, rx, H * 0.18, "信号好弱，杂音好大……", "think");
    say("neSay", lt > 4.2 && lt < 9, ne.x, tableY - cs * 3.2, W * (nar ? 0.2 : 0.14), H * 0.26, "信号调大一点～", "say");
    say("daSay", lt > 9, da, tableY - cs * 3.2, W * (nar ? 0.8 : 0.86), H * 0.26, "杂音扫走啦～", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：倒 U 形小山 ----------
  function view2(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f2f9ff", "#fdf3ea");
    Anima.bokeh(6, "#cfeaf7", 0.8, 51);
    const nar = narrowNow();
    const x0 = W * 0.08, x1 = W * 0.92, base = H * 0.86, top = H * (nar ? 0.4 : 0.34);
    const f = (u) => Math.exp(-Math.pow((u - 0.5) / 0.22, 2));
    const P = (u) => ({ x: lerp(x0, x1, u), y: base - (base - top) * f(u) });
    // 小山
    const g = ctx.createLinearGradient(0, top, 0, base);
    g.addColorStop(0, C.hill); g.addColorStop(1, C.hill2);
    ctx.beginPath(); ctx.moveTo(x0 - W, base);
    for (let i = 0; i <= 60; i++) { const p = P(i / 60); ctx.lineTo(p.x, p.y); }
    ctx.lineTo(x1 + W, base); ctx.lineTo(x1 + W, H + 5); ctx.lineTo(x0 - W, H + 5); ctx.closePath();
    ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    // 小草和花
    for (let i = 1; i < 12; i++) {
      const p = P(i / 12);
      ctx.strokeStyle = "#4fb893"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(p.x - 4, p.y + 6); ctx.lineTo(p.x - 2, p.y + 1); ctx.moveTo(p.x + 2, p.y + 6); ctx.lineTo(p.x + 4, p.y + 1); ctx.stroke();
    }
    const pk = P(0.5);
    // 山顶的小旗
    ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(pk.x + H * 0.08, pk.y + 2); ctx.lineTo(pk.x + H * 0.08, pk.y - H * 0.09); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pk.x + H * 0.08, pk.y - H * 0.09); ctx.lineTo(pk.x + H * 0.13, pk.y - H * 0.07); ctx.lineTo(pk.x + H * 0.08, pk.y - H * 0.05); ctx.closePath(); ctx.fillStyle = C.rose; ctx.fill(); ctx.stroke();
    // 坐标轴说明
    const fs = UIfs(0.03);
    text("多巴胺 / 去甲肾上腺素 →", W * 0.5, H * 0.94, fs, C.ink);
    text("太少", x0 + W * 0.04, H * 0.94, fs, C.soft);
    text("太多", x1 - W * 0.04, H * 0.94, fs, C.soft);
    ctx.save(); ctx.translate(x0 - W * 0.035 + fs, (base + top) / 2); ctx.rotate(-Math.PI / 2); text("前额叶表现 →", 0, 0, fs, C.ink); ctx.restore();
    // 压力云：往下撒递质小不点
    const storm = prog(8, 0.8);
    if (storm > 0) {
      const sx = W * 0.72, sy = H * 0.24, sr = H * 0.06;
      ctx.save(); ctx.globalAlpha *= storm * clamp(13.5 - lt, 0, 1);
      ctx.beginPath();
      for (const [dx, dy, r] of [[-1, 0.2, 0.8], [0, -0.2, 1], [1, 0.2, 0.8], [0.5, 0.4, 0.7], [-0.5, 0.4, 0.7]]) { ctx.moveTo(sx + dx * sr + r * sr, sy + dy * sr); ctx.arc(sx + dx * sr, sy + dy * sr, r * sr, 0, Math.PI * 2); }
      ctx.fillStyle = "#c9c2d8"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(sx, sy + sr * 0.15, sr * 1.7, sr * 0.6, 0, 0, Math.PI * 2); ctx.fillStyle = "#c9c2d8"; ctx.fill();
      text("压力", sx, sy + sr * 0.1, UIfs(0.032), C.ink);
      Anima.bolt(sx - sr * 1.2, sy + sr * 1.3, sr * 0.45, 0.6 + 0.4 * Math.abs(Math.sin(time * 7)), C.gold);
      for (let k = 0; k < 6; k++) {
        const t = (time * 0.7 + k / 6) % 1;
        chara(sx + (k - 2.5) * sr * 0.55, sy + sr + t * H * 0.3, H * 0.012, { who: k % 2 ? "NE" : "DA", alpha: Math.sin(t * Math.PI), shadow: false });
      }
      ctx.restore();
    }
    // 小居民沿着山坡走
    let u = 0.1, eyes = "sleepy", mouth = "o", arms = "down", walk = null, emo = "zzz";
    if (lt > 2) { const p = prog(2, 3); u = lerp(0.1, 0.5, p); eyes = "open"; mouth = "smile"; walk = p < 1 ? time * 8 : null; emo = null; }
    if (lt > 5) { eyes = "sparkle"; mouth = "grin"; arms = "up"; emo = null; }
    if (lt > 8.6) { const p = prog(8.6, 2); u = lerp(0.5, 0.88, p); eyes = "dizzy"; mouth = "wavy"; arms = "up"; walk = null; emo = "sweat"; }
    const pos = P(u), ks = H * 0.05;
    kid(pos.x, pos.y + 2, ks, { eyes, mouth, arms, walk, item: lt > 5 && lt < 8.6 ? "star" : null, dir: 1, jump: lt > 5 && lt < 8.6 ? Math.abs(Math.sin(time * 4)) * 0.25 : 0 });
    if (emo) emote(emo, pos.x + ks, pos.y - ks * 3.3, ks * 0.6);
    if (lt > 5 && lt < 8.6) sparkles(pos.x, pos.y - ks * 1.6, ks * 2.2, 5, 1, 9);
    if (lt > 8.6 && lt < 10.6) Anima.speedLines(pos.x, pos.y - ks * 1.5, ks * 2.5, 30, 0.5);
    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    const lp = P(0.16), hp = P(0.84);
    callout("low", on("low") && lt > 0.8, lp.x, lp.y - 2, lp.x + W * 0.02, H * (nar ? 0.45 : 0.5), "太少：走神、没精神");
    callout("top", on("top") && lt > 5, pk.x, pk.y, pk.x - W * (nar ? 0.2 : 0.22), H * (nar ? 0.3 : 0.26), "刚刚好：专注、有条理");
    callout("high", on("high") && lt > 10, hp.x, hp.y - 2, hp.x - W * 0.02, H * (nar ? 0.55 : 0.52), "太多：紧张、乱糟糟");
    say("justRight", lt > 5.4 && lt < 8.4, pos.x, pos.y - ks * 3.2, pk.x + W * 0.2, H * (nar ? 0.3 : 0.28), "刚刚好～脑子好清楚！", "say");
    say("tooMuch", lt > 10.8, pos.x, pos.y - ks * 3.2, W * 0.5, H * 0.3, "太多也不行……晕乎乎", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：兴奋剂和回收门 ----------
  function geoSyn() {
    const cx = W * 0.5, tw = Math.min(W * 0.72, H * 1.2), th = H * 0.42, post = H * 0.8, bot = th;
    const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
    const termY = (x) => {
      const dx = Math.abs(x - cx);
      let best = bot, bd = 1e9;
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        const px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, bot + th * 0.02, bot, bot);
        if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; }
      }
      return best;
    };
    const T1 = { x: cx - tw * 0.3 }, T2 = { x: cx + tw * 0.3 };
    T1.y = termY(T1.x) - H * 0.012; T2.y = termY(T2.x) - H * 0.012;
    return { cx, tw, th, post, bot, termY, T1, T2, rs: H * 0.05, cs: H * 0.042 };
  }
  function view3(a) {
    const g = geoSyn();
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.9, 71);
    const blocked = lt > 5.4, rev = lt > 9.4;
    const level = lt < 5.4 ? 0.2 : lt < 9.4 ? 0.65 : 0.85;
    Anima.postMembrane(g.post, C.post, { face: true, faceX: W * 0.9, mood: level > 0.5 ? 1 : 0 });
    const recX = [g.cx - g.tw * 0.28, g.cx, g.cx + g.tw * 0.28];
    const lab = ["D1", "α2A", "D1"];
    recX.forEach((x, i) => Anima.receptor(x, g.post, g.rs, i === 1 ? "#ffb3bd" : "#ffd27a", level * (0.8 + 0.2 * Math.sin(time * 3 + i)), { label: lab[i], shape: i === 1 ? "tri" : "round" }));
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    Anima.transporter(g.T1.x, g.T1.y, g.rs, C.pumpC, blocked ? 0 : time * 3, blocked);
    Anima.transporter(g.T2.x, g.T2.y, g.rs, rev ? "#ffd9a8" : C.pumpC, rev ? -time * 3 : time * 3, false);
    const fsL = UIfs(0.026);
    text("回收门 DAT / NET", g.T1.x, g.T1.y - g.rs * 1.35, fsL, C.ink);
    text("回收门 DAT / NET", g.T2.x, g.T2.y - g.rs * 1.35, fsL, C.ink);
    if (rev) { // 反向箭头
      ctx.save(); ctx.strokeStyle = C.warn; ctx.lineWidth = 3; ctx.lineCap = "round";
      const ax = g.T2.x + g.rs * 1.3, ay = g.T2.y;
      ctx.beginPath(); ctx.moveTo(ax, ay - g.rs * 0.6); ctx.lineTo(ax, ay + g.rs * 0.9); ctx.lineTo(ax - g.rs * 0.3, ay + g.rs * 0.55); ctx.moveTo(ax, ay + g.rs * 0.9); ctx.lineTo(ax + g.rs * 0.3, ay + g.rs * 0.55); ctx.stroke();
      ctx.restore();
    }
    // 递质快递员
    const cs = g.cs, midY = (g.bot + g.post) / 2 + H * 0.06;
    const rel = { x: g.cx, y: g.bot + cs * 0.5 };
    for (let i = 0; i < 6; i++) {
      const who = i % 2 ? "NE" : "DA";
      let x, y, al = 1, eyes = "happy", walk = null, jump = 0;
      if (i < 2 && lt < 5.6) { // 一出来就被回收
        const t = ((lt * 0.45) + i * 0.5) % 1, T = i ? g.T2 : g.T1;
        x = lerp(rel.x, T.x, t); y = lerp(rel.y + cs * 2.4, T.y + g.rs * 1.1 + cs * 3.2, t) - Math.sin(t * Math.PI) * H * 0.05;
        al = Math.min(1, t * 5, (1 - t) * 5); eyes = "open"; walk = time * 9;
      } else if (i < 4) {
        const t0 = 5.6 + (i % 4) * 0.5, p = prog(t0, 1.4);
        if (p <= 0) continue;
        const tx = recX[i % 3] + (i === 3 ? g.tw * 0.14 : 0), ty = i === 3 ? midY : g.post - g.rs * 1.62;
        x = lerp(rel.x, tx, p); y = lerp(rel.y + cs * 2.4, ty, p) - Math.sin(p * Math.PI) * H * 0.04;
        jump = p >= 1 ? Math.abs(Math.sin(time * 4 + i)) * 0.2 : 0; eyes = "sparkle";
      } else {
        const t0 = 9.8 + (i - 4) * 0.9, p = prog(t0, 1.4);
        if (p <= 0) continue;
        const tx = i === 4 ? recX[2] - g.tw * 0.12 : recX[1] - g.tw * 0.14, ty = midY;
        x = lerp(g.T2.x, tx, p); y = lerp(g.T2.y + g.rs, ty, p);
        al = clamp(p * 3, 0, 1); eyes = "wide";
        if (p < 0.6) sfx("咻～", x + cs, y - cs * 3, H * 0.035, "#ff9a52", -0.1, Math.sin(p / 0.6 * Math.PI));
      }
      chara(x, y, cs, { who, eyes, mouth: "grin", arms: eyes === "open" ? "down" : "up", walk, jump, alpha: al, seed: i, dir: 1 });
    }
    // 药物访客
    const dX = lerp(-cs * 2, g.T1.x - g.rs * 0.2, prog(3.2, 2.2));
    const dY = g.T1.y + g.rs * 1.1 + cs * 3.2;
    chara(dX, dY, cs * 1.05, { who: "drug", label: "哌甲酯", hatColor: C.mph, arms: blocked ? "shh" : "hold", eyes: blocked ? "closed" : "open", mouth: "cat", walk: lt > 3.2 && lt < 5.4 ? time * 9 : null, dir: 1, alpha: clamp((lt - 3.2) * 3, 0, 1) });
    const aX = lerp(W + cs * 2, g.T2.x + g.rs * 0.2, prog(7, 2.2));
    chara(aX, dY, cs * 1.05, { who: "drug", label: "苯丙胺类", hatColor: C.amp, arms: rev ? "point" : "hold", eyes: rev ? "happy" : "open", mouth: "grin", walk: lt > 7 && lt < 9.2 ? time * 9 : null, dir: -1, alpha: clamp((lt - 7) * 3, 0, 1) });
    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    const nar = narrowNow();
    callout("pump0", lt > 0.6 && lt < 3.4, g.T1.x - g.rs * 0.7, g.T1.y, W * 0.25, H * 0.95, "递质一出来，就被回收门拉回去");
    callout("mph", on("mph") && lt > 5.6, dX, dY - cs * 1.4, W * (nar ? 0.27 : 0.22), H * 0.95, "哌甲酯：堵住回收门");
    callout("amp", on("amp") && lt > 9.6, aX, dY - cs * 1.4, W * (nar ? 0.7 : 0.76), H * (nar ? 0.88 : 0.95), "苯丙胺类：还让门反着开");
    say("mphSay", lt > 5.6 && lt < 9.4, dX, g.T1.y - g.rs, W * 0.3, H * 0.2, "回收门先歇一会儿～", "say");
    say("ampSay", lt > 9.6, aX, g.T2.y - g.rs, W * 0.7, H * 0.2, "门反过来开，往外送！", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：慢慢升 vs 猛地冲 ----------
  function plotCard(x, y, w, h, fast, a0) {
    const px = x + w * 0.12, py = y + h * 0.14, pw = w * 0.8, ph = h * 0.66;
    // 区域
    const band = (v0, v1, col, lab) => {
      const y0 = py + ph * (1 - v1), y1 = py + ph * (1 - v0);
      ctx.fillStyle = col; ctx.fillRect(px, y0, pw, y1 - y0);
      text(lab, px + pw - 4, (y0 + y1) / 2, Math.min(UIfs(0.024), w * 0.05), C.ink, "right");
    };
    band(0.42, 0.62, "rgba(191,232,214,0.55)", "专注区");
    if (fast) band(0.82, 1, "rgba(249,197,209,0.6)", "快感区");
    outline(1.8); ctx.beginPath(); ctx.moveTo(px, py - 4); ctx.lineTo(px, py + ph); ctx.lineTo(px + pw, py + ph); ctx.stroke();
    const fs = Math.min(UIfs(0.024), w * 0.05);
    text("时间 →", px + pw - 4, py + ph + fs * 1.1, fs, C.soft, "right");
    ctx.save(); ctx.translate(px - fs * 0.9, py + ph / 2); ctx.rotate(-Math.PI / 2); text("递质水平", 0, 0, fs, C.soft); ctx.restore();
    const curve = fast ? (t) => (t < 0.133 ? 0.97 * ease(t / 0.133) : 0.97 * Math.exp(-(t - 0.133) * 3.2))
      : (t) => 0.52 * (1 - Math.exp(-t * 3.2)) / (1 - Math.exp(-3.2));
    const T = clamp((lt - a0) / 6, 0, 1);
    ctx.strokeStyle = fast ? C.bad : C.mintDeep; ctx.lineWidth = Math.max(3, H * 0.007); ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath();
    const n = 60;
    for (let i = 0; i <= n * T; i++) { const t = i / n, xx = px + pw * t, yy = py + ph * (1 - curve(t)); if (i) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
    ctx.stroke();
    const tipX = px + pw * T, tipY = py + ph * (1 - curve(T));
    return { tipX, tipY, T, px, py, pw, ph, peak: { x: px + pw * 0.133, y: py + ph * (1 - 0.97) }, plat: { x: px + pw * 0.8, y: py + ph * (1 - curve(0.8)) } };
  }
  function view4(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f7effd");
    Anima.petals(10, 0.6, 81);
    const nar = narrowNow();
    const top = H * 0.2, ch = H * (nar ? 0.6 : 0.62), gap = W * 0.03, cw = (W - gap * 3) / 2;
    card(gap, top, cw, ch, "缓释：慢慢升", "#bfe8d6");
    card(gap * 2 + cw, top, cw, ch, "猛地冲：一下飙高", "#ffd3d6");
    const L = plotCard(gap, top, cw, ch, false, 0.8);
    const R = plotCard(gap * 2 + cw, top, cw, ch, true, 0.8);
    const cs = Math.min(H * 0.036, cw * 0.06);
    chara(L.tipX, L.tipY - 2, cs, { who: "DA", eyes: "happy", mouth: "smile", arms: L.T >= 1 ? "hold" : "down", item: L.T >= 1 ? "book" : null, walk: L.T < 1 ? time * 8 : null, dir: 1 });
    const atPeak = R.T > 0.1 && R.T < 0.3;
    chara(R.tipX, R.tipY - 2, cs, { who: "DA", eyes: R.T < 0.1 ? "wide" : atPeak ? "sparkle" : "dizzy", mouth: R.T < 0.3 ? "open" : "wavy", arms: atPeak ? "up" : "down", dir: 1 });
    if (R.T > 0.03 && R.T < 0.2) Anima.speedLines(R.tipX, R.tipY - cs, cs * 2.5, 24, 0.6);
    if (R.T > 0.3) emote("sweat", R.tipX + cs, R.tipY - cs * 3.2, cs * 0.6);
    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    callout("slow", on("slow") && lt > 5, L.plat.x, L.plat.y, gap + cw * 0.5, top + ch * 0.12 + H * 0.02, "平稳：主要帮专注");
    callout("fast", on("fast") && lt > 3.5, R.peak.x, R.peak.y, gap * 2 + cw * 1.5, top + ch * 0.95, "奖赏中心猛升：易被滥用");
    say("slowSay", lt > 7.5 && lt < 13.5, L.tipX, L.tipY - cs * 3.2, gap + cw * 0.45, top + ch * 0.62, "稳稳的，刚好能专心～", "say");
    say("fastSay", lt > 2.8 && lt < 7.5, R.tipX, R.tipY - cs * 3.2, gap * 2 + cw * 1.6, top + ch * 0.42, "冲太快啦……", "think");
    say("rule", lt > 8.5, 0, 0, W * 0.5, H * 0.92, "请按医嘱服用：别自己掰开、碾碎或改用法", "box");
    ctx.restore();
  }

  // ---------- 第 6 幕：非兴奋剂和生活帮手 ----------
  function view5(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f1", "#f1f8f5");
    Anima.petals(10, 0.6, 91);
    const nar = narrowNow();
    const top = H * 0.2, ch = H * 0.72, gap = W * 0.022, cw = (W - gap * 4) / 3;
    const X = [gap, gap * 2 + cw, gap * 3 + cw * 2];
    const cs = Math.min(H * 0.04, cw * 0.1);
    const pin = (i) => prog(0.3 + i * 3, 0.8);
    // 卡片 1：托莫西汀堵住 NET，NE 和 DA 都升高
    if (pin(0) > 0) {
      ctx.save(); ctx.globalAlpha *= pin(0);
      const x = X[0];
      const my = top + ch * 0.3;
      card(x, top, cw, ch, "托莫西汀", "#bfe8d6", () => {
        ctx.fillStyle = C.term; ctx.fillRect(x, top, cw, my - top);
        outline(1.8); ctx.beginPath(); ctx.moveTo(x, my); ctx.lineTo(x + cw, my); ctx.stroke();
      });
      const tx = x + cw * 0.5, ts = Math.min(H * 0.045, cw * 0.12), blk = lt > 1.8;
      Anima.transporter(tx, my, ts, C.pumpC, blk ? 0 : time * 3, blk);
      text("NET", tx, my - ts * 1.4, UIfs(0.026), C.ink);
      chara(tx + ts * 1.9, top + ch * 0.5, cs, { who: "drug", label: "托莫西汀", hatColor: C.atx, arms: "shh", eyes: "closed", mouth: "cat", dir: -1 });
      const rise = prog(2.2, 1.5);
      const by = top + ch * 0.93;
      chara(x + cw * 0.28, by - rise * ch * 0.08, cs, { who: "NE", eyes: "happy", mouth: "grin", arms: rise > 0.5 ? "up" : "down", jump: rise >= 1 ? Math.abs(Math.sin(time * 4)) * 0.3 : 0 });
      chara(x + cw * 0.72, by - rise * ch * 0.08, cs, { who: "DA", eyes: "happy", mouth: "grin", arms: rise > 0.5 ? "up" : "down", jump: rise >= 1 ? Math.abs(Math.sin(time * 4 + 1)) * 0.3 : 0 });
      if (rise > 0.3) { sfx("↑", x + cw * 0.12, by - cs * 2, H * 0.05, C.good, 0, rise); sfx("↑", x + cw * 0.9, by - cs * 2, H * 0.05, C.good, 0, rise); }
      ctx.restore();
    }
    // 卡片 2：胍法辛 / 可乐定直接拧信号旋钮
    if (pin(1) > 0) {
      ctx.save(); ctx.globalAlpha *= pin(1);
      const x = X[1];
      card(x, top, cw, ch, "胍法辛 · 可乐定", "#e4e0ff");
      const rw = cw * 0.8, rx = x + cw / 2, ry = top + ch * 0.36;
      const sg = lerp(0.3, 1, prog(4.8, 2));
      const R = radio(rx, ry, rw, sg, 0.35, { name: "α2A", noLabels: true });
      chara(R.k1.x + cs * 0.4, top + ch * 0.9, cs * 1.05, { who: "drug", label: "α2A 激动", hatColor: C.gfc, hatColor2: "#fff", arms: lt > 4.3 && lt < 7 ? "up" : "wave", eyes: "happy", mouth: "grin", dir: 1 });
      if (lt > 4.3 && lt < 7) {
        ctx.save(); ctx.strokeStyle = C.bad; ctx.lineWidth = 2.5; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.arc(R.k1.x, R.k1.y, R.kr * 1.6, -1.2 + time * 2, 0.8 + time * 2); ctx.stroke(); ctx.restore();
      }
      ctx.restore();
    }
    // 卡片 3：行为治疗、规律作息、学习环境
    if (pin(2) > 0) {
      ctx.save(); ctx.globalAlpha *= pin(2);
      const x = X[2];
      card(x, top, cw, ch, "生活里的帮手", "#fff1b8");
      const items = ["行为治疗", "规律作息", "安静的学习角"];
      const fs = Math.min(UIfs(0.03), cw * 0.1);
      items.forEach((t, i) => {
        const p = prog(7.2 + i * 0.9, 0.6), yy = top + ch * (0.16 + i * 0.12);
        rrect(x + cw * 0.1, yy - fs * 0.6, fs * 1.2, fs * 1.2, fs * 0.25); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
        if (p > 0) {
          ctx.save(); ctx.globalAlpha *= p; ctx.strokeStyle = C.good; ctx.lineWidth = Math.max(2.5, fs * 0.18);
          ctx.beginPath(); ctx.moveTo(x + cw * 0.1 + fs * 0.25, yy); ctx.lineTo(x + cw * 0.1 + fs * 0.5, yy + fs * 0.3); ctx.lineTo(x + cw * 0.1 + fs * 1.05, yy - fs * 0.45); ctx.stroke(); ctx.restore();
        }
        text(t, x + cw * 0.1 + fs * 1.6, yy + 1, fs, C.ink, "left");
      });
      // 书桌前专心的小居民
      const dx = x + cw * 0.5, dy = top + ch * 0.9;
      rrect(dx - cw * 0.34, dy - ch * 0.14, cw * 0.68, ch * 0.03, 3); ctx.fillStyle = "#f3c9a6"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.strokeStyle = C.line; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(dx - cw * 0.3, dy - ch * 0.11); ctx.lineTo(dx - cw * 0.3, dy); ctx.moveTo(dx + cw * 0.3, dy - ch * 0.11); ctx.lineTo(dx + cw * 0.3, dy); ctx.stroke();
      // 小闹钟
      const clx = dx + cw * 0.22, cly = dy - ch * 0.14 - cw * 0.07, clr = cw * 0.06;
      ctx.beginPath(); ctx.arc(clx, cly, clr, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(clx, cly); ctx.lineTo(clx, cly - clr * 0.7); ctx.moveTo(clx, cly); ctx.lineTo(clx + Math.cos(time) * clr * 0.6, cly + Math.sin(time) * clr * 0.6); ctx.stroke();
      kid(dx - cw * 0.08, dy, cs, { eyes: lt > 10 ? "happy" : "open", mouth: "smile", arms: "hold", item: "book", dir: 1 });
      if (lt > 10) emote("note", dx - cw * 0.08 + cs, dy - cs * 3.3, cs * 0.6);
      ctx.restore();
    }
    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    const mx = X[0] + cw * 0.5, my = top + ch * 0.3;
    callout("net", on("net") && lt > 2.4, mx - cw * 0.1, my + H * 0.02, X[0] + cw * 0.5, top + ch * 0.555, nar ? "NET 也回收多巴胺" : "前额叶里，NET 也回收多巴胺");
    callout("a2a", on("a2a") && lt > 5, X[1] + cw * 0.18, top + ch * 0.46, X[1] + cw * 0.5, top + ch * 0.585, nar ? "直接激动 α2A" : "直接激动 α2A 受体");
    say("calm", lt > 9.8, X[2] + cw * 0.42, top + ch * 0.9 - cs * 3.2, X[2] + cw * 0.5, top + ch * 0.6, "一件一件来～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1], c1 = C.rose, c2 = "#6b61c9";
    if (cur === 1) { v1 = sig > 0.6 ? "清楚" : "很弱"; v2 = noise > 0.5 ? "很大" : "变小"; c1 = sig > 0.6 ? C.good : C.bad; c2 = noise > 0.5 ? C.bad : C.good; }
    if (cur === 2) {
      v1 = lt < 2 ? "太少" : lt < 8.6 ? "刚刚好" : "太多"; v2 = lt < 2 ? "迷糊" : lt < 8.6 ? "专注" : "乱糟糟";
      c1 = c2 = lt >= 2 && lt < 8.6 ? C.good : C.warn;
    }
    if (cur === 3) { v2 = lt < 5.6 ? "偏少" : "回升"; c2 = lt < 5.6 ? C.warn : C.good; }
    pill(14, 12, c.pill[0], v1, c1, false);
    pill(W - 14, 12, c.pill2[0], v2, c2, true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    const views = [view0, view1, view2, view3, view4, view5];
    for (let i = 0; i < views.length; i++) {
      const a = S["v" + i];
      if (a > 0.02) views[i](a);
    }
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#ec6470",
    titleCard: { lines: ["前额叶的", "收音机"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
