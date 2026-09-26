Anima.register("dementia", {
    "title": "消失的记忆邮差",
    "tag": "痴呆",
    "headline": "记性越来越差，只是【变老】了吗？",
    "lede": "痴呆不是正常变老。走进海马的“记忆邮局”看一看：神经元外的斑块、神经元里的缠结、越来越少的乙酰胆碱邮差，还有现在的药物能帮上什么忙。",
    "summary": "淀粉样斑块和 tau 缠结、胆碱能邮差变少、胆碱酯酶抑制剂和美金刚，以及抗体药和日常的守护。",
    "chapter": "对应 Stahl《精神药理学精要》第 12 章 · 痴呆",
    "footer": "如果家人的记性明显变差、已经影响日常生活，可以去记忆门诊、神经内科或精神科做评估。",
    "canvasLabel": "拟人化的乙酰胆碱邮差在海马记忆邮局送信、药物帮忙的动画",
    "regions": ["hippo", "pfc"],
    "parts": ["dementia"],
    "cast": ["ACh", "AChE", "Glu", "drug"],
    "color": "#c9b6f0"
  }, () => {
  const CH = [
    { title: "痴呆不是正常变老", home: 1, street: 0, route: 0, syn: 0, nmda: 0, hope: 0,
      pill: ["最常见的原因", "阿尔茨海默病"], pill2: ["约占痴呆的", "六到七成"],
      text: "上了年纪，偶尔想不起一个名字，别人提醒一下就想起来了，这是正常变老。痴呆不一样：记忆、判断、语言这些能力一点点持续下降，慢慢影响到做饭、出门、管钱这样的日常生活。引起痴呆的病有好几种，最常见的是阿尔茨海默病，大约占六到七成。",
      fact: "痴呆是一组影响日常生活的症状，不是正常衰老；阿尔茨海默病是最常见的原因" },
    { title: "两种“垃圾”", home: 0, street: 1, route: 0, syn: 0, nmda: 0, hope: 0,
      pill: ["神经元外", "淀粉样斑块"], pill2: ["神经元里", "tau 缠结"],
      text: "在阿尔茨海默病的大脑里，能看到两种堆积物。神经元外面，β-淀粉样蛋白粘成一团团灰色的斑块；神经元里面，本来帮忙撑起“小轨道”的 tau 蛋白缠成了一团乱麻。神经元之间的连接慢慢断开，神经元也会渐渐死去。海马是新记忆的收件箱，往往最早受累，所以刚发生的事最先记不住。",
      fact: "斑块在神经元外，缠结在神经元里：这是阿尔茨海默病的两个标志性改变" },
    { title: "记忆邮差变少了", home: 0, street: 0, route: 1, syn: 0, nmda: 0, hope: 0,
      pill: ["邮差", "乙酰胆碱神经元"], pill2: ["送信到", "海马和皮层"],
      text: "基底前脑住着一群乙酰胆碱神经元，它们像邮差，把乙酰胆碱这封“记忆信件”送到海马和大脑皮层，帮我们集中注意、记住新东西。在阿尔茨海默病里，这些邮差一个个减少，海马和皮层收到的信越来越少，学习和记忆也就越来越吃力。",
      fact: "乙酰胆碱神经元减少和记忆下降有关，这是“胆碱能假说”的核心" },
    { title: "让剪刀手慢一点", home: 0, street: 0, route: 0, syn: 1, nmda: 0, hope: 0,
      pill: ["作用", "少剪一点"], pill2: ["效果", "改善症状"],
      text: "突触间隙里有位剪刀手，叫乙酰胆碱酯酶，专门把送完信的乙酰胆碱剪断。胆碱酯酶抑制剂，比如多奈哌齐、卡巴拉汀、加兰他敏，会让剪刀手慢下来，乙酰胆碱就能多留一会儿，把信送到。它们能在一段时间里改善症状，但不能阻止疾病进展；可能有恶心、腹泻、心跳变慢等副作用，要遵医嘱使用。",
      fact: "胆碱酯酶抑制剂改善的是症状，不能让已经受损的神经元恢复" },
    { title: "谷氨酸太吵了", home: 0, street: 0, route: 0, syn: 0, nmda: 1, hope: 0,
      pill: ["受体", "NMDA"], pill2: ["美金刚", "挡杂音、放信号"],
      text: "谷氨酸通过 NMDA 受体帮我们学习新东西。可在阿尔茨海默病里，谷氨酸总在一点点漏出来，门口一直有“沙沙沙”的背景杂音，真正的学习信号反而听不清，持续的刺激还可能伤害神经元。美金刚像一个松松的塞子：平时挡住小杂音；真正的大信号一来，它就被推开，让信号通过。",
      fact: "美金刚是 NMDA 受体拮抗剂，常用于中到重度的阿尔茨海默病" },
    { title: "新的方向和日常守护", home: 0, street: 0, route: 0, syn: 0, nmda: 0, hope: 1,
      pill: ["抗体药", "早期患者"], pill2: ["守护", "从今天开始"],
      text: "近几年有了清除 β-淀粉样蛋白的抗体药，比如仑卡奈单抗、多奈单抗，用于确认有淀粉样蛋白的早期患者，可以让下降慢一些，但用药期间要定期做脑部磁共振，看看有没有脑水肿或小出血。日常里，控制血压血糖、多运动、保护听力、多和人来往，都有助于降低风险。照顾病人的家人很辛苦，他们也需要被照顾。",
      fact: "抗体药只适合早期、确认有淀粉样蛋白的患者；照护者的身心健康同样重要" },
  ];
  const DUR = 14; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    term: "#ffd6c4", post: "#efe6ff", soma: "#ffd3c4", dend: "#f7b9a8", axon: "#f3a996",
    plaque: "#bdb2c4", tau: "#9b7fc0", road: "#f4e6d4", roof: "#f5a9b8", wall: "#fff6ea",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0; // 本幕已经播了几秒

  const S = { home: 1, street: 0, route: 0, syn: 0, nmda: 0, hope: 0 };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrow = () => W / H < 1.4; // 手机竖屏：顶部两排数值胶囊，内容往下挪
  const Y = (f) => H * (narrow() ? 0.22 + 0.78 * f : f);
  const fsUI = () => Math.max(12, W / 58) * Anima.UI;

  // ---------- 小工具 ----------
  // 圆角名牌
  function plate(t, x, y, fs, color, a) {
    if (a != null && a < 0.02) return;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#ffffff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    ctx.restore();
    return { w, h };
  }
  // 平滑的闭合“团块”
  function blobPath(x, y, r, seed, wob) {
    const n = 10, pts = [];
    for (let i = 0; i < n; i++) {
      const q = i / n * Math.PI * 2, rr = r * (0.8 + rnd(seed + i) * 0.34) + Math.sin(time * 1.3 + i * 2 + seed) * r * (wob || 0.03);
      pts.push([x + Math.cos(q) * rr, y + Math.sin(q) * rr * 0.86]);
    }
    ctx.beginPath();
    const m0 = [(pts[0][0] + pts[n - 1][0]) / 2, (pts[0][1] + pts[n - 1][1]) / 2];
    ctx.moveTo(m0[0], m0[1]);
    for (let i = 0; i < n; i++) {
      const p = pts[i], q = pts[(i + 1) % n];
      ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
    }
    ctx.closePath();
  }
  // β-淀粉样蛋白斑块：灰扑扑、黏糊糊的一团，脸有点不高兴
  function plaque(x, y, r, seed, a) {
    if (a < 0.02 || r < 1) return;
    ctx.save(); ctx.globalAlpha *= a;
    blobPath(x, y, r, seed, 0.04);
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r * 1.1);
    g.addColorStop(0, "#d9d2de"); g.addColorStop(1, C.plaque);
    ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.2, r * 0.06)); ctx.stroke();
    ctx.fillStyle = "rgba(110,95,120,0.35)";
    for (let i = 0; i < 7; i++) {
      const q = rnd(seed + i + 30) * Math.PI * 2, rr = r * 0.65 * rnd(seed + i + 40);
      ctx.beginPath(); ctx.arc(x + Math.cos(q) * rr, y + Math.sin(q) * rr, r * 0.07, 0, Math.PI * 2); ctx.fill();
    }
    if (r > 8) face(x, y + r * 0.05, r * 0.5, -0.6, false);
    ctx.restore();
  }
  // tau 缠结：一团乱糟糟的毛线
  function tangle(x, y, r, p, seed) {
    if (p < 0.02) return;
    ctx.save();
    ctx.strokeStyle = C.tau; ctx.lineWidth = Math.max(1.2, r * 0.1); ctx.lineCap = "round"; ctx.lineJoin = "round";
    const n = Math.max(2, Math.round(26 * p));
    ctx.beginPath();
    let px = x, py = y;
    ctx.moveTo(px, py);
    for (let k = 0; k < n; k++) {
      const q = rnd(seed + k) * Math.PI * 2, rr = r * (0.25 + rnd(seed + k + 50) * 0.75);
      const nx = x + Math.cos(q) * rr, ny = y + Math.sin(q) * rr * 0.8;
      const cq = rnd(seed + k + 90) * Math.PI * 2;
      ctx.quadraticCurveTo(x + Math.cos(cq) * r * 1.1, y + Math.sin(cq) * r * 0.9, nx, ny);
      px = nx; py = ny;
    }
    ctx.stroke();
    ctx.restore();
  }
  function neuronShape(x, y, r, seed, mood, grayK) {
    ctx.save();
    if (grayK > 0.02 && ctx.filter !== undefined) ctx.filter = `grayscale(${grayK.toFixed(2)})`;
    ctx.lineCap = "round";
    for (let k = 0; k < 5; k++) {
      const q = Math.PI * 0.55 + k * 0.45 + rnd(seed + k) * 0.2;
      const x1 = x + Math.cos(q) * r * 2.1, y1 = y + Math.sin(q) * r * 2.1 * 0.9;
      for (const [w, col] of [[r * 0.34, C.line], [r * 0.22, C.dend]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + Math.cos(q + 0.3) * r * 1.2, y + Math.sin(q + 0.3) * r * 1.2, x1, y1);
        ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(q - 0.6) * r * 0.7, y1 + Math.sin(q - 0.6) * r * 0.7);
        ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(q + 0.6) * r * 0.7, y1 + Math.sin(q + 0.6) * r * 0.7);
        ctx.stroke();
      }
    }
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
    g.addColorStop(0, "#fff0ea"); g.addColorStop(1, C.soma);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.5, r * 0.05)); ctx.stroke();
    face(x, y + r * 0.25, r * 0.45, mood);
    ctx.restore();
  }
  // 小房子：(x, y) 是地面中心
  function house(x, y, w, h, roof, lit) {
    ctx.save();
    ctx.fillStyle = "rgba(90,70,80,0.1)"; ctx.beginPath(); ctx.ellipse(x, y + h * 0.03, w * 0.6, h * 0.07, 0, 0, Math.PI * 2); ctx.fill();
    rrect(x - w / 2, y - h * 0.68, w, h * 0.68, h * 0.06); ctx.fillStyle = C.wall; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - w * 0.62, y - h * 0.64); ctx.lineTo(x, y - h); ctx.lineTo(x + w * 0.62, y - h * 0.64); ctx.closePath();
    ctx.fillStyle = roof; ctx.fill(); outline(2); ctx.stroke();
    rrect(x - w * 0.12, y - h * 0.34, w * 0.24, h * 0.34, w * 0.1); ctx.fillStyle = "#e8c29a"; ctx.fill(); outline(1.6); ctx.stroke();
    for (const d of [-1, 1]) {
      const wx = x + d * w * 0.3, wy = y - h * 0.46;
      if (lit > 0.05) glow(wx, wy, h * 0.18, C.gold, lit);
      rrect(wx - w * 0.1, wy - h * 0.08, w * 0.2, h * 0.16, 3); ctx.fillStyle = mix("#dfe7f0", "#fff1a8", lit); ctx.fill(); outline(1.4); ctx.stroke();
    }
    ctx.restore();
  }
  // 邮筒：n 是里面有几封信
  function mailbox(x, y, s, n) {
    ctx.save();
    rrect(x - s * 0.08, y - s * 0.9, s * 0.16, s * 0.9, 2); ctx.fillStyle = "#c9a27a"; ctx.fill(); outline(1.4); ctx.stroke();
    rrect(x - s * 0.5, y - s * 1.55, s, s * 0.7, s * 0.25); ctx.fillStyle = "#f28ca5"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.fillStyle = C.line; ctx.fillRect(x - s * 0.3, y - s * 1.3, s * 0.6, s * 0.07);
    for (let i = 0; i < n; i++) {
      ctx.save(); ctx.translate(x - s * 0.2 + i * s * 0.16, y - s * 1.62 - i * s * 0.02); ctx.rotate(-0.2 + i * 0.15);
      rrect(-s * 0.22, -s * 0.15, s * 0.44, s * 0.3, 2); ctx.fillStyle = "#fffdf5"; ctx.fill(); outline(1.1); ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
  }
  function letterIcon(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a;
    rrect(x - s, y - s * 0.66, s * 2, s * 1.32, s * 0.2); ctx.fillStyle = "#fffdf5"; ctx.fill(); outline(Math.max(1, s * 0.12)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - s, y - s * 0.66); ctx.lineTo(x, y + s * 0.1); ctx.lineTo(x + s, y - s * 0.66); ctx.stroke();
    Anima.heart(x, y + s * 0.15, s * 0.3, C.rose);
    ctx.restore();
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 16; ctx.shadowOffsetY = 5;
    rrect(x, y, w, h, 20); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 20); ctx.stroke();
    const fs = Math.max(13, Math.min(W / 36, h * 0.075)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  const ELDER = { hair: "#e6e0ea", cloth: "#d9d0f5", eye: "#8a6a7a", style: "bun", hat: "none", glasses: true, ahoge: false };
  const FAMILY = { hair: "#a8765a", cloth: "#ffd3dc", eye: "#8a5a3e", style: "pony", hat: "none" };
  const FRIEND = { hair: "#6f8fb8", cloth: "#cfe8d8", eye: "#3e6a8a", style: "short", hat: "none" };

  // ---------- 第 1 幕：家里 ----------
  function lamp(x, y0, y, r, lit, label) {
    ctx.save();
    ctx.strokeStyle = C.line; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y - r); ctx.stroke();
    if (lit > 0.05) glow(x, y, r * 3.2, C.gold, lit);
    rrect(x - r * 0.4, y - r * 1.35, r * 0.8, r * 0.5, 3); ctx.fillStyle = "#cfc6d4"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#e6e2ea", "#fff1a8", lit); ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y + r * 0.1, r * 0.55, lit > 0.5 ? 1 : -0.5, lit > 0.5);
    if (lit > 0.6) sparkles(x, y, r * 1.8, 3, lit - 0.4, Math.round(x));
    ctx.restore();
    plate(label, x, y + r * 1.75, Math.max(11, H * 0.03) * Anima.UI, lit > 0.5 ? "#fff6d6" : "#f1eef3");
  }
  function homeView(a) {
    const here = cur === 0;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ef", "#fdeef3");
    Anima.bokeh(7, "#ffe2b8", 0.8, 12);
    Anima.petals(8, 0.5, 33);
    // 地板和小地毯
    ctx.fillStyle = "#f7e4d6"; ctx.fillRect(0, H * 0.8, W, H * 0.2);
    ctx.strokeStyle = alpha(C.line, 0.35); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(0, H * 0.8); ctx.lineTo(W, H * 0.8); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(W * 0.26, H * 0.86, W * 0.2, H * 0.05, 0, 0, Math.PI * 2); ctx.fillStyle = "#f9d3dc"; ctx.fill(); outline(1.5); ctx.stroke();
    // 四盏“能力小灯”：一盏接一盏地变暗
    const names = ["记忆", "判断", "语言", "生活自理"];
    const lx0 = W * 0.47, lx1 = W * 0.9, ly = Y(0.34), lr = Math.min(H * 0.045, W * 0.035);
    ctx.strokeStyle = alpha(C.line, 0.5); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(lx0 - lr * 2, Y(0.19)); ctx.lineTo(lx1 + lr * 2, Y(0.19)); ctx.stroke();
    const dimAt = [2.5, 4.5, 6.5, 8.5];
    names.forEach((n, i) => {
      const x = lerp(lx0, lx1, i / 3);
      const flick = lt > dimAt[i] - 0.6 && lt < dimAt[i] ? (Math.sin(lt * 40) > 0 ? 1 : 0.4) : 1;
      const lit = (1 - prog(dimAt[i], 1.2) * (i === 3 ? 0.55 : 0.8)) * flick;
      lamp(x, Y(0.19), ly + (i % 2) * H * 0.02, lr, lit, n);
    });
    // 饼图：痴呆的原因
    const px = W * (narrow() ? 0.8 : 0.74), py = narrow() ? H * 0.8 : H * 0.68, pr = Math.min(H * (narrow() ? 0.08 : 0.1), W * 0.08);
    const sweep = prog(0.8, 1.6);
    const parts = [[0.65, "#f28ca5"], [0.35, "#e4dbf2"]];
    let q0 = -Math.PI / 2;
    for (const [f, col] of parts) {
      const q1 = q0 + f * Math.PI * 2 * sweep;
      ctx.beginPath(); ctx.moveTo(px, py); ctx.arc(px, py, pr, q0, q1); ctx.closePath(); ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
      q0 = q1;
    }
    if (sweep > 0.9) {
      text("其他", px + pr * 0.38, py - pr * 0.62, Math.max(10, pr * 0.24) * Anima.UI, C.soft);
    }
    // 奶奶和家人
    const s = H * 0.068, ex = W * 0.32, fx = W * 0.15, fy = H * 0.86;
    const lost = lt > 2 && lt < 8;
    chara(fx, fy, s * 0.95, Object.assign({}, FAMILY, { arms: lt > 8 ? "hug" : "down", eyes: lt > 8 ? "happy" : "open", mouth: "smile", dir: 1 }));
    chara(ex, fy, s, Object.assign({}, ELDER, { arms: lt > 8 ? "hug" : "down", item: lt > 8 ? null : "key", eyes: lost ? "open" : "happy", mouth: lost ? "wavy" : "smile", brow: lost ? "worry" : null, dir: -1, look: lost ? Math.sin(time * 1.5) * 1.2 : 0 }));
    if (lost) emote("?", ex + s * 1.1, fy - s * 3.4, s * 0.6);
    if (lt > 8.5) emote("heart", (ex + fx) / 2, fy - s * 3.6, s * 0.7);
    callout("d-lamp", here && lt > 3, lerp(lx0, lx1, 0.5), ly + lr * 2.8, lerp(lx0, lx1, 0.4), ly + lr * 3.6, narrow() ? "能力持续下降" : "能力持续下降，影响日常生活");
    callout("d-pie", here && sweep > 0.9, px - pr * 0.6, py + pr * 0.3, px - W * 0.16, H * 0.93, "阿尔茨海默病：约六到七成");
    say("d-where", here && lt > 2.4 && lt < 8, ex, fy - s * 3.2, W * 0.22, narrow() ? H * 0.45 : H * 0.36, "咦，我刚才要做什么来着？", "think");
    say("d-fam", here && lt > 8.6, fx, fy - s * 3, fx + W * 0.02, narrow() ? H * 0.45 : H * 0.3, "没关系，我们一起慢慢来～", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：海马街区的“垃圾” ----------
  function streetView(a) {
    const here = cur === 1;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f4ff", "#fdeef3");
    Anima.bokeh(7, "#e3dbff", 0.8, 44);
    const r = Math.min(H * 0.065, W * 0.05);
    const N = [[0.12, 0.42], [0.37, 0.75], [0.6, 0.4], [0.86, 0.72]].map((p) => [p[0] * W, Y(p[1])]);
    const broken = prog(7, 2);
    const paths = [];
    for (let i = 0; i < 3; i++) {
      const A = N[i], B = N[i + 1];
      const sx = A[0] + r * 0.9, sy = A[1] + r * 0.3, ex = B[0] - r * 1.9, ey = B[1] - r * 0.3;
      const mx = (sx + ex) / 2, my = Math.min(sy, ey) - H * 0.1 + (A[1] > B[1] ? H * 0.2 : 0);
      paths.push({ sx, sy, ex, ey, mx, my, pt: (t) => ({ x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * mx + t * t * ex, y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * my + t * t * ey }) });
    }
    paths.forEach((p, i) => {
      const cut = i === 1 ? broken : 0;
      ctx.save();
      for (const [w, col] of [[r * 0.3, C.line], [r * 0.19, C.axon]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round";
        if (cut > 0.02) { ctx.globalAlpha *= 1 - cut * 0.6; ctx.setLineDash([r * 0.3, r * 0.5 * cut + 1]); }
        ctx.beginPath(); ctx.moveTo(p.sx, p.sy); ctx.quadraticCurveTo(p.mx, p.my, p.ex, p.ey); ctx.stroke();
      }
      ctx.restore();
      ctx.beginPath(); ctx.arc(p.ex, p.ey, r * 0.26, 0, Math.PI * 2); ctx.fillStyle = mix(C.term, "#dddddd", cut); ctx.fill(); outline(1.5); ctx.stroke();
    });
    // 神经元：第 3 户慢慢变灰
    const sick = prog(8, 3);
    N.forEach((n, i) => {
      const g = i === 2 ? sick * 0.9 : 0;
      const mood = i === 2 ? lerp(0.4, -1, prog(6, 2)) : i === 1 ? lerp(1, -0.4, prog(5, 2)) : 0.8;
      neuronShape(n[0], n[1], r, i * 10, mood, g);
    });
    // tau 缠结：在细胞体里面
    tangle(N[2][0], N[2][1] - r * 0.25, r * 0.55, prog(3.5, 3), 5);
    tangle(N[1][0], N[1][1] - r * 0.25, r * 0.5, prog(4.5, 3), 17);
    // 斑块：在神经元外面、路边上一点点长大
    const PL = [[paths[0].pt(0.55), 0], [paths[1].pt(0.45), 1.2], [paths[2].pt(0.5), 2], [{ x: W * 0.5, y: Y(0.86) }, 0.6], [{ x: W * 0.3, y: Y(0.3) }, 1.6]];
    PL.forEach((pl, k) => {
      const p = prog(0.8 + pl[1], 3);
      const off = k < 3 ? H * 0.07 : 0;
      plaque(pl[0].x + (k === 1 ? r * 0.8 : 0), pl[0].y + off, r * (0.45 + 0.4 * p) * (k > 2 ? 0.8 : 1), k * 13, p);
    });
    // 沿着路送的小信件：第 2 条路断了以后就送不过去
    for (let k = 0; k < 6; k++) {
      const i = k % 3, p = paths[i];
      let t = (time * 0.12 + k * 0.29) % 1;
      if (i === 1 && broken > 0.3) t = Math.min(t, 0.35);
      const q = p.pt(t);
      const stuck = i === 1 && broken > 0.3 && t >= 0.35;
      letterIcon(q.x, q.y - r * 0.4, r * 0.22, stuck ? 0.6 : 1);
      if (stuck && k === 1) emote("?", q.x + r * 0.4, q.y - r * 1.1, r * 0.4);
    }
    // 招牌：海马街区
    const sx = W * 0.5, sy = Y(0.15);
    ctx.strokeStyle = C.line; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(sx - W * 0.08, 0); ctx.lineTo(sx - W * 0.06, sy); ctx.moveTo(sx + W * 0.08, 0); ctx.lineTo(sx + W * 0.06, sy); ctx.stroke();
    plate("海马 · 新记忆收件箱", sx, sy, Math.max(12, H * 0.036) * Anima.UI, "#fff1b8");
    if (sick > 0.3) emote("gloom", N[2][0], N[2][1] - r * 1.5, r * 0.6, sick);
    const pl0 = PL[0][0];
    callout("d-plaque", here && lt > 1.6 && lt < 8, pl0.x, pl0.y + H * 0.07, pl0.x + W * 0.03, H * 0.93, "β-淀粉样蛋白斑块：堆在神经元外面");
    callout("d-tau", here && lt > 4.5 && lt < 9, N[2][0] + r * 0.3, N[2][1] - r * 0.2, N[2][0] + W * 0.13, H * 0.26, "tau 缠结：在神经元里面打结");
    const b = paths[1].pt(0.6);
    callout("d-cut", here && lt > 8, b.x, b.y, b.x + W * 0.1, H * 0.93, "连接断了，神经元慢慢死去");
    say("d-stuck", here && lt > 9, N[2][0], N[2][1] - r * 1.2, N[2][0] - W * 0.16, N[2][1] - r * 2.2, "信……送不过来了……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：基底前脑的邮差 ----------
  function routeView(a) {
    const here = cur === 2;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f3fbff", "#fff1f4");
    Anima.bokeh(7, "#d7efff", 0.8, 70);
    Anima.petals(8, 0.5, 75);
    const hs = Math.min(H * 0.24, W * 0.17);
    const st = { x: W * 0.16, y: Y(0.66) }, hA = { x: W * 0.82, y: Y(0.46) }, hB = { x: W * 0.82, y: Y(0.9) };
    // 两条路：去海马、去皮层
    const mk = (p0, p1, bend) => {
      const sx = p0.x + hs * 0.35, sy = p0.y - hs * 0.05, ex = p1.x - hs * 0.45, ey = p1.y - hs * 0.05;
      const mx = (sx + ex) / 2, my = (sy + ey) / 2 + bend;
      return { sx, sy, ex, ey, mx, my, pt: (t) => ({ x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * mx + t * t * ex, y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * my + t * t * ey }) };
    };
    const R = [mk(st, hA, -H * 0.12), mk(st, hB, H * 0.06)];
    R.forEach((p) => {
      for (const [w, col] of [[H * 0.07, C.line], [H * 0.06, C.road]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(p.sx, p.sy); ctx.quadraticCurveTo(p.mx, p.my, p.ex, p.ey); ctx.stroke();
      }
      ctx.save(); ctx.setLineDash([H * 0.02, H * 0.02]); ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(p.sx, p.sy); ctx.quadraticCurveTo(p.mx, p.my, p.ex, p.ey); ctx.stroke(); ctx.restore();
    });
    // 邮局和两户收信人
    const left = 6 - Math.floor(clamp((lt - 2.5) / 1.5, 0, 4)); // 还在上班的邮差
    house(st.x, st.y, hs * 0.95, hs * 1.05, "#f7b8d2", 1);
    plate("基底前脑邮局", st.x, st.y - hs * 1.16, Math.max(11, H * 0.032) * Anima.UI, "#ffe1ee");
    const fewer = prog(5, 3);
    house(hA.x, hA.y, hs * 0.75, hs * 0.8, "#bfe3f5", 1 - fewer * 0.8);
    house(hB.x, hB.y, hs * 0.75, hs * 0.8, "#bfe8d6", 1 - fewer * 0.8);
    plate("海马", hA.x, hA.y - hs * 0.9, Math.max(11, H * 0.032) * Anima.UI, "#e3f3fc");
    plate("大脑皮层", hB.x, hB.y - hs * 0.9, Math.max(11, H * 0.032) * Anima.UI, "#e1f5ec");
    mailbox(hA.x - hs * 0.55, hA.y, hs * 0.22, Math.round(lerp(3, 1, fewer)));
    mailbox(hB.x - hs * 0.55, hB.y, hs * 0.22, Math.round(lerp(3, 0, fewer)));
    // 邮差们：一个接一个变灰、离开
    const cs = H * 0.042;
    let shown = null;
    for (let k = 0; k < 6; k++) {
      const p = R[k % 2];
      const t = (time * 0.09 + k * 0.33 + (k % 2) * 0.1) % 1;
      const gone = k >= 2 ? prog(2.5 + (5 - k) * 1.5, 1.2) : 0; // 第 6、5、4、3 位依次离开
      if (gone >= 0.99) continue;
      const q = p.pt(gone > 0 ? t * (1 - gone * 0) : t);
      const fade = 1 - gone;
      chara(q.x, q.y + cs * 0.4, cs, { who: "ACh", walk: gone > 0 ? null : time * 9 + k, item: "letter", arms: "hold", eyes: gone > 0 ? "closed" : (k % 2 ? "happy" : "open"), mouth: gone > 0 ? "sad" : "smile", gray: gone > 0 ? 0.9 : false, alpha: fade, seed: k, dir: 1 });
      if (gone > 0 && gone < 0.9) sparkles(q.x, q.y - cs * 1.5, cs * 1.5, 3, 1 - gone, k * 7);
      if (k === 0) shown = q;
    }
    // 收信人：海马的居民
    const rx = hA.x + hs * 0.55, ry = hA.y;
    chara(rx, ry, cs * 1.05, { who: "neuron", arms: fewer > 0.5 ? "down" : "wave", eyes: fewer > 0.5 ? "teary" : "happy", mouth: fewer > 0.5 ? "sad" : "grin", dir: -1 });
    const mid = R[0].pt(0.5);
    callout("d-st", here && lt < 6.5, st.x + hs * 0.2, st.y - hs * 0.5, st.x + W * 0.04, H * 0.22, "乙酰胆碱神经元：送“记忆信件”的邮差");
    callout("d-few", here && lt > 6.5, mid.x, mid.y, mid.x - W * 0.02, H * 0.22, `还在送信的邮差：${left} 位`);
    say("d-few2", here && lt > 7.5, rx, ry - cs * 3.3, hA.x - W * 0.2, hA.y + hs * 0.25, "今天的信……怎么这么少？", "think");
    ctx.restore();
  }

  // ---------- 第 4、5 幕：突触特写 ----------
  function geo(cxK) {
    const cx = W * (cxK || 0.46), tw = Math.min(W * 0.6, H * 1.1), th = H * 0.36, post = H * 0.76;
    const bot = th;
    return { cx, tw, th, bot, post };
  }
  function synBg() {
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(7, "#cfeaf7", 0.9, 90);
    Anima.petals(8, 0.5, 20);
  }
  const achAct = [0, 0, 0];
  function synView(a) {
    const here = cur === 3;
    ctx.save(); ctx.globalAlpha *= a;
    synBg();
    const g = geo(0.42);
    const rs = H * 0.05, cs = H * 0.045;
    const recX = [g.cx - g.tw * 0.3, g.cx, g.cx + g.tw * 0.3];
    const siteY = g.post - rs * 1.62;
    // 两波乙酰胆碱：第一波被剪断，第二波在药物帮助下多留一会儿
    const wave = (i, t0) => {
      const t = lt - t0 - i * 0.45;
      return t;
    };
    const ex0 = g.cx + g.tw * 0.52; // 剪刀手的家
    let aX = ex0, aMood = "open";
    const cutT = [2.6, 3.5, 4.4];
    if (lt < 5.2) {
      // 剪刀手去追第 i 位
      for (let i = 0; i < 3; i++) {
        const t = lt - (cutT[i] - 0.7);
        if (t > 0) aX = lerp(aX, recX[i] + cs * 1.4, ease(t / 0.6));
      }
      if (lt > 4.6) aX = lerp(aX, ex0, ease((lt - 4.6) / 0.6));
    }
    const sleepy = prog(6.4, 0.8);
    const post = g.post;
    let actSum = 0;
    for (let i = 0; i < 3; i++) {
      let target = 0;
      const t1 = wave(i, 0.4), t2 = wave(i, 7.6);
      if (t1 > 1.3 && lt < cutT[i]) target = 1;
      if (t2 > 1.3) target = 1;
      achAct[i] = lerp(achAct[i], target, 0.12);
      actSum += achAct[i];
    }
    Anima.postMembrane(post, C.post, { face: true, faceX: W * 0.86, mood: actSum > 1.5 ? 1 : 0 });
    if (actSum > 1.5) Anima.spark([[recX[0], post + H * 0.1], [recX[2], post + H * 0.12], [W + 20, post + H * 0.15]], (time * 0.6) % 1, H * 0.025, C.gold);
    recX.forEach((x, i) => Anima.receptor(x, post, rs, "#f7b8d2", achAct[i], { label: i === 0 ? "胆碱受体" : null }));
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    // 末梢里的囊泡
    for (let k = 0; k < 3; k++) Anima.vesicle(g.cx + (k - 1) * g.tw * 0.2, g.bot - H * 0.08 - (k % 2) * H * 0.05, H * 0.035, Anima.CAST.ACh.hair, 4, k * 5);
    // 乙酰胆碱邮差
    let talk = null;
    for (let i = 0; i < 3; i++) {
      const from = { x: g.cx + (i - 1) * g.tw * 0.2, y: g.bot + cs * 3.2 };
      const to = { x: recX[i], y: siteY };
      for (const w of [1, 2]) {
        const t = w === 1 ? wave(i, 0.4) : wave(i, 7.6);
        if (t < 0) continue;
        const p = ease(t / 1.3);
        let x = lerp(from.x, to.x, p), y = lerp(from.y, to.y, p) - Math.sin(p * Math.PI) * H * 0.05;
        let al = clamp(t * 3, 0, 1), eyes = "sparkle", arms = "hold", item = "letter", mouth = "open", jump = 0;
        if (w === 1) {
          if (lt > cutT[i] + 0.9) continue;
          if (lt > cutT[i]) { eyes = "dizzy"; mouth = "o"; al = 1 - (lt - cutT[i]) / 0.9; y += (lt - cutT[i]) * cs * 0.8; item = null; arms = "down"; }
          else if (p >= 1) { eyes = "happy"; arms = "up"; item = null; mouth = "grin"; }
        } else if (p >= 1) { eyes = "happy"; arms = "up"; item = null; mouth = "grin"; jump = Math.abs(Math.sin(time * 4 + i)) * 0.25; }
        chara(x, y, cs, { who: "ACh", eyes, arms, item, mouth, walk: p < 1 ? time * 10 : null, jump, alpha: al, seed: i });
        if (w === 1 && lt > cutT[i] && lt < cutT[i] + 0.5) sfx("咔嚓！", x + cs * 0.4, y - cs * 3.6, H * 0.045, "#e8637a", -0.15, 1 - (lt - cutT[i]) * 2);
        if (w === 2 && p >= 1) sparkles(x, y - cs * 1.5, cs * 2, 3, 0.8, i * 13);
        if (w === 2 && i === 1 && p >= 1) talk = { x, y };
      }
    }
    // 剪刀手：乙酰胆碱酯酶
    const ay = post - H * 0.015;
    chara(aX, ay, cs * 1.05, { who: "AChE", item: "scissors", arms: sleepy > 0.5 ? "down" : "point", eyes: sleepy > 0.5 ? "sleepy" : (lt < 5 ? "angry" : "open"), mouth: sleepy > 0.5 ? "o" : "grin", dir: -1 });
    if (sleepy > 0.5) emote("zzz", aX + cs * 0.8, ay - cs * 3.4, cs * 0.8);
    // 药物访客
    const dIn = prog(5, 1.6);
    const dx = lerp(W + cs * 3, ex0 + cs * 2.2, dIn);
    if (dIn > 0) {
      chara(dx, ay, cs, { who: "drug", label: "药", hatColor: "#c9b6f0", hatColor2: "#ffffff", arms: lt > 6.4 && lt < 7.6 ? "shh" : "wave", eyes: "happy", mouth: "cat", walk: dIn < 1 ? time * 9 : null, dir: -1 });
      if (lt > 6.2 && lt < 7.8) sfx("嘘～", dx - cs * 0.5, ay - cs * 4, H * 0.04, "#8f84e0", -0.1, 1);
    }
    callout("d-ache", here && lt < 5.2, aX, ay - cs * 3.2, aX + W * 0.02, H * 0.47, "乙酰胆碱酯酶：剪断乙酰胆碱");
    callout("d-chei", here && lt > 6, dx, ay - cs * 1.4, W * 0.8, H * 0.48, "胆碱酯酶抑制剂：让剪刀手慢一点");
    say("d-stay", here && lt > 9.2 && lt < 12, talk ? talk.x : 0, talk ? talk.y - cs * 3.3 : 0, g.cx - g.tw * 0.25, g.bot + H * 0.06, "能多待一会儿，把信送到啦！", "say");
    say("d-side", here && lt > 11.3, W * 0.3, H, W * 0.3, H * 0.9, "也可能恶心、腹泻、心跳变慢，要遵医嘱", "box");
    ctx.restore();
  }

  function nmdaView(a) {
    const here = cur === 4;
    ctx.save(); ctx.globalAlpha *= a;
    synBg();
    const g = geo(0.36);
    const rs = H * 0.075, cs = H * 0.045;
    const rx = W * 0.5, post = g.post;
    const plugIn = prog(5.2, 1.6); // 美金刚到位
    // 大信号：第 3 秒一次（被杂音淹没），8.5 和 11.5 秒各一次（清清楚楚）
    const sigT = [2.4, 8.3, 11.3];
    let sig = -1, sp = 0;
    sigT.forEach((t0, k) => { if (lt > t0 && lt < t0 + 2.6) { sig = k; sp = lt - t0; } });
    const arrived = sig >= 0 && sp > 1 && sp < 2.3;
    const clear = arrived && sig > 0;
    const noise = 1 - plugIn * 0.85;
    const act = clear ? 1 : 0.28 + (Math.sin(time * 23) * 0.5 + 0.5) * 0.25 * noise + (arrived ? 0.15 : 0);
    const resident = { x: W * 0.84, y: H * 0.985 };
    Anima.postMembrane(post, C.post, {});
    const R = Anima.receptor(rx, post, rs, "#ffd27a", act, { shape: "square", label: "NMDA 受体" });
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    // 背景杂音：一群小小的谷氨酸在门口挤来挤去
    const site = R.site;
    for (let k = 0; k < 7; k++) {
      const q = rnd(k + 3) * Math.PI * 2 + time * (0.6 + rnd(k) * 0.8) * (k % 2 ? 1 : -1);
      const push = plugIn * H * 0.08;
      const rr = H * 0.07 + rnd(k + 9) * H * 0.07 + push;
      const x = site.x + Math.cos(q) * rr * 1.5, y = site.y - H * 0.04 + Math.sin(q) * rr * 0.55;
      chara(x, y + Math.sin(time * 9 + k) * 2, cs * 0.45, { who: "Glu", eyes: "x", mouth: "wavy", shadow: false, alpha: 1 - plugIn * 0.35, walk: time * 12 + k });
    }
    if (noise > 0.2) {
      for (let k = 0; k < 3; k++) {
        const x = site.x + (k - 1) * rs * 2.2, y = site.y - H * 0.19 - (k % 2) * H * 0.03;
        sfx("沙沙", x, y + Math.sin(time * 12 + k) * 2, H * 0.036, "#a08a93", (k - 1) * 0.2, noise * (0.6 + 0.4 * Math.sin(time * 7 + k)));
      }
      // 锯齿状的杂音线
      ctx.save(); ctx.globalAlpha *= noise * 0.6; ctx.strokeStyle = "#b8a8c0"; ctx.lineWidth = 1.6;
      for (const d of [-1, 1]) {
        ctx.beginPath();
        for (let k = 0; k <= 10; k++) { const x = site.x + d * (rs * 1.5 + k * H * 0.012), y = site.y - H * 0.02 + ((k + Math.floor(time * 12)) % 2 ? -1 : 1) * H * 0.012; if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
        ctx.stroke();
      }
      ctx.restore();
    }
    // 美金刚：松松地塞在门口，大信号来时被推到一边
    let mx = W + cs * 2, my = site.y + cs * 0.9;
    if (plugIn > 0) {
      const from = { x: W + cs * 2, y: post - H * 0.02 };
      const pushAside = clear ? ease(Math.min(sp - 0.8, 2.3 - sp) / 0.3) : 0;
      mx = lerp(from.x, site.x, plugIn) + pushAside * rs * 2.2;
      my = lerp(from.y, site.y + cs * 0.9, plugIn) + pushAside * H * 0.02;
      chara(mx, my, cs * 0.85, { who: "drug", label: "美金刚", hatColor: "#9fdcc0", hatColor2: "#ffffff", arms: pushAside > 0.5 ? "wave" : "hug", eyes: pushAside > 0.5 ? "happy" : "closed", mouth: "cat", walk: plugIn < 1 ? time * 9 : null, dir: -1 });
      if (pushAside > 0.2 && pushAside < 0.9) sfx("啵！", mx + cs, my - cs * 3, H * 0.045, "#4fb893", -0.15, 1);
    }
    // 大信号：谷氨酸带着“学习信件”跳下来
    let big = null;
    if (sig >= 0) {
      const from = { x: g.cx + g.tw * 0.1, y: g.bot + cs * 3.2 };
      const p = ease(sp / 1);
      const leave = clamp((sp - 2.2) / 0.4, 0, 1);
      const x = lerp(from.x, site.x - (sig === 0 ? rs * 1.6 : 0), p), y = lerp(from.y, site.y, p) - Math.sin(p * Math.PI) * H * 0.05;
      big = { x, y };
      chara(x, y, cs * 1.1, { who: "Glu", item: p < 1 ? "letter" : null, arms: p < 1 ? "hold" : (clear ? "up" : "down"), eyes: clear && p >= 1 ? "sparkle" : (sig === 0 && p >= 1 ? "teary" : "open"), mouth: clear ? "grin" : "wavy", alpha: 1 - leave, walk: p < 1 ? time * 10 : null });
      if (clear && p >= 1) { sparkles(x, y - cs * 1.5, cs * 2.4, 4, 1 - leave, 3); Anima.speedLines(site.x, site.y, H * 0.3, 26, 0.35 * (1 - leave)); }
      if (sig === 0 && p >= 1) emote("?", x + cs * 1.1, y - cs * 3.6, cs * 0.7, 1 - leave);
    }
    // 突触后的小居民：吵的时候捂着耳朵
    const calm = plugIn > 0.8;
    chara(resident.x, resident.y, cs * 0.95, { who: "neuron", arms: calm ? (clear ? "up" : "down") : "hug", eyes: calm ? (clear ? "sparkle" : "happy") : "x", mouth: calm ? "smile" : "wavy", brow: calm ? null : "worry", dir: -1 });
    if (!calm) emote("sweat", resident.x + cs * 1, resident.y - cs * 3, cs * 0.6);
    callout("d-nmda", here && lt < 5.2, rx + rs * 0.7, post - rs * 0.4, W * 0.2, post + H * 0.1, "NMDA 受体：学习记忆的门");
    callout("d-noise", here && lt > 0.8 && lt < 5.2, site.x - rs * 2.6, site.y - H * 0.08, W * 0.8, H * 0.28, "持续的背景杂音");
    callout("d-mem", here && lt > 6.3, mx - cs * 0.6, my - cs * 1.4, W * 0.18, post + H * 0.1, "美金刚：松松的塞子");
    say("d-loud", here && lt > 1.5 && lt < 5.2, resident.x, resident.y - cs * 3.1, resident.x - W * 0.08, post - H * 0.12, "好吵，听不清信号……", "think");
    say("d-clear", here && lt > 9.4, resident.x, resident.y - cs * 3.1, resident.x - W * 0.06, post - H * 0.12, "这下听清楚啦！", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：新的方向和日常守护 ----------
  function chip(t, x, y, fs, color, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.7 + 0.3 * ease(a);
    ctx.translate(x, y); ctx.scale(pop, pop);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.6, h = fs * 1.7;
    ctx.shadowColor = "rgba(120,80,100,0.16)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2;
    rrect(-w / 2, -h / 2, w, h, h / 2); ctx.fillStyle = color; ctx.fill();
    ctx.shadowColor = "transparent"; outline(1.6); ctx.stroke();
    Anima.heart(-w / 2 + fs * 0.62, 0, fs * 0.28, C.rose);
    text(t, fs * 0.25, 1, fs, C.ink);
    ctx.restore();
  }
  function mri(x, y, r) {
    ctx.save();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#e8f2fa"; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r * 0.52, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(x - r * 1.5, y + r * 0.2, r * 2.2, r * 0.24, r * 0.1); ctx.fillStyle = "#cfe0f5"; ctx.fill(); outline(1.4); ctx.stroke();
    for (let k = 0; k < 3; k++) { const t = (time * 0.8 + k / 3) % 1; ctx.save(); ctx.globalAlpha *= 1 - t; ctx.strokeStyle = C.skyDeep; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, r * (1 + t * 0.5), -0.6, 0.6); ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }
  function hopeView(a) {
    const here = cur === 5;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f3f9ee");
    Anima.petals(14, 0.7, 50);
    Anima.bokeh(6, "#fff0b0", 0.7, 5);
    const top = narrow() ? H * 0.36 : H * 0.21, ch = H * 0.95 - top, gap = W * 0.025, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "新的方向：抗体药", "#e3f3fc");
    card(R.x, R.y, R.w, R.h, "日常守护", "#e1f5ec");
    const cs = Math.min(H * 0.045, cw * 0.07);
    // 左：抗体访客清扫斑块
    const clean = prog(1.5, 7);
    const PL = [[0.24, 0.4, 3], [0.74, 0.36, 9], [0.5, 0.5, 21]];
    PL.forEach((p, k) => {
      const k0 = clamp(clean * 1.3 - k * 0.15, 0, 1);
      plaque(L.x + L.w * p[0], L.y + L.h * p[1], Math.min(H * 0.085, cw * 0.12) * (1 - k0 * 0.65), p[2], 1 - k0 * 0.5);
      if (k0 > 0.2) sparkles(L.x + L.w * p[0], L.y + L.h * p[1], H * 0.06, 3, k0, k * 5);
    });
    const floor = L.y + L.h * 0.8;
    const ab = [{ x: L.x + L.w * 0.25 + Math.sin(time * 0.9) * L.w * 0.08, seed: 0 }, { x: L.x + L.w * 0.72 + Math.sin(time * 0.9 + 2) * L.w * 0.06, seed: 1 }];
    ab.forEach((c, i) => chara(c.x, floor, cs, { who: "drug", label: "抗体", hatColor: "#a8d8f0", hatColor2: "#ffffff", item: "broom", arms: "hold", eyes: "happy", mouth: "grin", walk: time * 6 + i * 2, dir: i ? -1 : 1, seed: i }));
    const mr = Math.min(H * 0.05, cw * 0.07);
    const mX = L.x + L.w * 0.1 + mr, mY = L.y + L.h * 0.9;
    mri(mX + mr * 0.2, mY, mr);
    text(narrow() ? "定期磁共振" : "用药期间定期做磁共振", mX + mr * 1.5, mY, Math.max(11, H * 0.028) * Anima.UI, C.ink, "left");
    // 右：奶奶和家人，周围一圈守护小贴士
    const fy = R.y + R.h * 0.9, cx = R.x + R.w * 0.42;
    chara(cx - cs * 1.3, fy, cs * 1.15, Object.assign({}, ELDER, { arms: "hug", eyes: "happy", mouth: "grin", dir: 1 }));
    chara(cx + cs * 1.3, fy, cs * 1.1, Object.assign({}, FAMILY, { arms: "hug", eyes: lt > 9 ? "happy" : "sleepy", mouth: "smile", dir: -1 }));
    if (lt < 8.8) emote("sweat", cx + cs * 2.4, fy - cs * 3.6, cs * 0.6);
    const fIn = prog(8.5, 1.6);
    const frX = lerp(R.x + R.w + cs * 2, cx + cs * 3.9, fIn);
    if (fIn > 0) chara(frX, fy, cs * 1.05, Object.assign({}, FRIEND, { arms: "hold", item: "star", eyes: "happy", mouth: "grin", walk: fIn < 1 ? time * 9 : null, dir: -1 }));
    if (fIn >= 1) emote("heart", cx + cs * 2.6, fy - cs * 4.2, cs * 0.8);
    const tips = ["控制血压血糖", "多运动", "保护听力", "多和人来往"];
    const tfs = Math.min(fsUI() * 1.1, R.w / (narrow() ? 8 : 11));
    tips.forEach((t, k) => {
      const col = k % 2, row = Math.floor(k / 2), nw = narrow();
      const x = nw ? R.x + R.w * 0.5 : R.x + R.w * (col ? 0.72 : 0.28), y = nw ? R.y + R.h * (0.13 + k * 0.12) : R.y + R.h * (0.14 + row * 0.15);
      chip(t, x, y, tfs, ["#fff1b8", "#e1f5ec", "#e3f3fc", "#ffe1ee"][k], prog(1.5 + k * 1.2, 0.8) * (nw ? 1 - prog(9.3, 0.6) : 1));
    });
    const drug0 = ab[0];
    callout("d-ab", here && lt > 1.5, drug0.x, floor - cs * 3.3, L.x + L.w * 0.5, L.y + L.h * 0.2, "仑卡奈单抗、多奈单抗");
    say("d-care", here && lt > 9.8, frX, fy - cs * 3.4, R.x + R.w * 0.62, narrow() ? R.y + R.h * 0.3 : R.y + R.h * 0.5, "你也要好好照顾自己哦", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#8f84e0", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.home > 0.02) homeView(S.home);
    if (S.street > 0.02) streetView(S.street);
    if (S.route > 0.02) routeView(S.route);
    if (S.syn > 0.02) synView(S.syn);
    if (S.nmda > 0.02) nmdaView(S.nmda);
    if (S.hope > 0.02) hopeView(S.hope);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#8f84e0",
    titleCard: { lines: ["消失的", "记忆邮差"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
