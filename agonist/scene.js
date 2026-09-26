Anima.register("agonist", {
    "title": "受体的调光开关",
    "tag": "基础篇",
    "headline": "药物怎样把受体【调亮】或【调暗】？",
    "lede": "受体不只是“开”和“关”两种状态，它更像一盏带调光旋钮的灯。不同的钥匙插进同一把锁，有的把灯开到最亮，有的只开一半，有的原地不动，有的还把灯调得更暗。这就是 Stahl 讲的“激动剂谱”。",
    "summary": "完全激动剂、部分激动剂、拮抗剂和反向激动剂：同一个受体、不同的钥匙，亮度从暗到亮。",
    "chapter": "对应 Stahl《精神药理学精要》第 2 章 · 受体与激动剂谱",
    "footer": "",
    "canvasLabel": "拟人化的递质和药物访客把钥匙插进受体，调节一盏灯的亮度的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["DA", "drug", "neuron"],
    "color": "#ffc94d"
  }, () => {
  const CH = [
    { title: "一盏会自己微亮的灯", main: 1, spec: 0,
      pill: ["钥匙", "还没来"],
      text: "把受体想成一扇门，门后连着一盏带调光旋钮的灯。钥匙插进锁孔、转动旋钮，灯就变亮，信号就传进细胞里。有意思的是，有些受体就算没有任何钥匙，也会自己微微亮着，这叫基础活性，也叫组成性活性。接下来，我们看看不同的钥匙会把这盏灯调成什么样。",
      fact: "受体的活性像调光灯一样有很多档，不只是“开”和“关”",
      labels: ["rec", "base", "knob"] },
    { title: "完全激动剂：开到最亮", main: 1, spec: 0,
      pill: ["钥匙", "完全激动剂"],
      text: "多巴胺快递员来了。它把钥匙插进锁孔，一下子把旋钮拧到底，灯开到最亮，信号又强又清楚。能把受体开到最大程度的，叫完全激动剂。大脑里的天然递质，对自己的受体来说通常就是完全激动剂。",
      fact: "天然神经递质通常就是自己受体的完全激动剂",
      labels: ["full", "knob"] },
    { title: "拮抗剂：占着锁孔不转", main: 1, spec: 0,
      pill: ["钥匙", "拮抗剂"],
      text: "这位药物访客也能插进锁孔，但它只是占着位子，完全不转旋钮，所以灯停在原来的基础亮度。它真正的作用是把激动剂挡在门外：多巴胺来了也插不进去。这就是拮抗剂，像给受体按了“静音”。很多抗精神病药，就是这样占住多巴胺 D2 受体的。",
      fact: "拮抗剂本身不改变基础亮度，而是挡住激动剂；很多抗精神病药是 D2 受体拮抗剂",
      labels: ["anta", "eg"] },
    { title: "部分激动剂：稳定器", main: 1, spec: 0,
      pill: ["钥匙", "部分激动剂"],
      text: "部分激动剂也会转旋钮，但最多只能把灯开到一部分。递质太多、灯太亮时，它和递质抢位子，占到位子的地方就只开一部分，灯反而变暗，像拮抗剂；递质太少时，它补上一点亮，像激动剂。所以它常被叫作“稳定器”。阿立哌唑（D2 受体）、丁螺环酮（5-HT1A 受体）都属于部分激动剂。",
      fact: "阿立哌唑是 D2 受体部分激动剂，丁螺环酮是 5-HT1A 受体部分激动剂",
      labels: ["part", "stab"] },
    { title: "反向激动剂：比平时还暗", main: 1, spec: 0,
      pill: ["钥匙", "反向激动剂"],
      text: "还有一种钥匙，插进去以后把旋钮往反方向拧，连受体原本的基础活性也关掉，灯比没人来的时候还要暗。这叫反向激动剂。它只在本来就有基础活性的受体上才看得出和拮抗剂的区别。有些习惯上被叫作拮抗剂的药，其实带有反向激动的作用。",
      fact: "反向激动剂把受体调到基础活性以下；和拮抗剂的区别只在有基础活性的受体上显现",
      labels: ["inv", "knob"] },
    { title: "一条从暗到亮的光谱", main: 0, spec: 1,
      pill: ["同一受体", "不同钥匙"],
      text: "把它们排成一排，就是激动剂谱：反向激动剂把灯调到比平时还暗，拮抗剂让灯停在基础亮度，部分激动剂开一部分，完全激动剂开到最亮。同一个受体、不同的钥匙，效果从暗到亮连续变化。以后看到一种新药，先问问它在这条光谱上站在哪里。",
      fact: "激动剂谱：反向激动剂 — 拮抗剂 — 部分激动剂 — 完全激动剂",
      labels: ["base"] },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    cleftTop: "#fff8ee", cleftBot: "#f3f8fd", mem: "#ffe0ea", room: "#fff3e6", roomDark: "#3c3358",
    rec: "#f7a8c0", wire: "#c9a37a", bulbOff: "#ece6dc", bulbOn: "#fff39a",
    anta: "#9fb4d8", part: "#ffd27a", inv: "#8f84e0",
  });
  const { clamp, lerp, ease, outline, rrect, text, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const BASE = 0.25; // 基础活性（示意）
  const START = [BASE, BASE, BASE, 1, BASE, BASE];
  let B = BASE; // 灯的亮度 0～1
  const S = { main: 1, spec: 0 };

  function targetB() {
    if (cur === 0) return BASE + Math.sin(time * 1.7) * 0.012;
    if (cur === 1) return lt < 2.9 ? BASE : 1;
    if (cur === 2) return BASE;
    if (cur === 3) return lt < 3.7 ? 1 : 0.5;
    if (cur === 4) return lt < 3.2 ? BASE : 0.03;
    return BASE;
  }
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; B = START[cur]; }
    lt += dt;
    B = lerp(B, targetB(), 1 - Math.exp(-dt * 2.6));
  }
  const prog = (t0, d) => ease((lt - t0) / d);

  // ---------- 几何 ----------
  function geo() {
    const narrow = W < H * 1.45;
    const post = H * 0.56, rx = W * (narrow ? 0.5 : 0.44), rs = H * 0.075, cs = H * 0.046;
    const siteY = post - rs * 1.62;
    const kx = W * (narrow ? 0.82 : 0.8), kr = H * 0.068, ky = post + H * 0.2;
    const lampY = post + H * 0.17, br = H * 0.05;
    // 气泡和标注的落点：宽屏放在受体两侧上方，手机上往两边挪
    const bubR = narrow ? { x: W * 0.78, y: H * 0.28 } : { x: rx + W * 0.2, y: H * 0.2 };
    const bubL = narrow ? { x: W * 0.22, y: H * 0.28 } : { x: rx - W * 0.22, y: H * 0.2 };
    const labR = narrow ? { x: W * 0.27, y: H * 0.3 } : { x: rx + W * 0.25, y: H * 0.38 };
    const bubRoom = narrow ? { x: W * 0.24, y: post + H * 0.1 } : { x: W * 0.24 + W * 0.1, y: post + H * 0.1 };
    return { narrow, post, rx, rs, cs, siteY, kx, ky, kr, lampY, br, bubR, bubL, labR, bubRoom };
  }
  // 访客的走位：从 x0 走到锁孔旁边，再跳上锁孔
  function approach(g, x0, t0, dw, side) {
    const xs = g.rx + side * g.cs * 2.6;
    const pw = clamp((lt - t0) / dw, 0, 1);
    if (lt < t0) return { x: x0, y: g.post, walk: null, on: false, alpha: 0 };
    if (pw < 1) return { x: lerp(x0, xs, pw), y: g.post, walk: time * 9, on: false, alpha: 1 };
    const ph = ease((lt - t0 - dw) / 0.6);
    return { x: lerp(xs, g.rx, ph), y: lerp(g.post, g.siteY, ph) - Math.sin(ph * Math.PI) * H * 0.05, walk: null, on: ph >= 1, alpha: 1 };
  }
  function walkX(x0, x1, t0, d) {
    const p = clamp((lt - t0) / d, 0, 1);
    return { x: lerp(x0, x1, p), walk: p > 0 && p < 1 ? time * 9 : null, p };
  }

  // ---------- 小零件：灯、旋钮、房间 ----------
  function lamp(x, topY, y, r, b) {
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(1.2, r * 0.07);
    ctx.beginPath(); ctx.moveTo(x, topY); ctx.lineTo(x, y - r * 1.1); ctx.stroke();
    // 灯罩
    ctx.beginPath();
    ctx.moveTo(x - r * 0.35, y - r * 1.15); ctx.lineTo(x + r * 0.35, y - r * 1.15);
    ctx.lineTo(x + r * 1.05, y - r * 0.35); ctx.lineTo(x - r * 1.05, y - r * 0.35); ctx.closePath();
    ctx.fillStyle = "#ffb3c6"; ctx.fill(); outline(Math.max(1.2, r * 0.07)); ctx.stroke();
    // 灯泡
    glow(x, y + r * 0.1, r * (1.5 + b * 4.2), C.gold, clamp(b * 1.3, 0, 1));
    ctx.beginPath(); ctx.arc(x, y + r * 0.1, r * 0.62, 0, Math.PI * 2);
    ctx.fillStyle = Anima.mix(C.bulbOff, C.bulbOn, clamp(b * 1.6, 0, 1)); ctx.fill(); ctx.stroke();
    if (b > 0.15) {
      ctx.strokeStyle = Anima.alpha("#e7a23a", clamp(b, 0, 1)); ctx.lineWidth = Math.max(1, r * 0.06);
      ctx.beginPath(); ctx.moveTo(x - r * 0.22, y + r * 0.2); ctx.lineTo(x - r * 0.08, y - r * 0.05); ctx.lineTo(x + r * 0.08, y + r * 0.2); ctx.lineTo(x + r * 0.22, y - r * 0.05); ctx.stroke();
    }
    if (b > 0.8) sparkles(x, y, r * 2.2, 5, (b - 0.8) * 5, 3);
  }
  // 调光旋钮：刻度从左下（暗）到右下（亮），指针随亮度转动
  function knob(x, y, r, b, opt) {
    const o = opt || {};
    const A0 = -Math.PI * 0.75, A1 = Math.PI * 0.75;
    const ang = (v) => lerp(A0, A1, v);
    const pt = (a, rr) => [x + Math.sin(a) * rr, y - Math.cos(a) * rr];
    ctx.save();
    ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    ctx.beginPath(); ctx.arc(x, y, r * 1.35, 0, Math.PI * 2); ctx.fillStyle = "#fffdf8"; ctx.fill();
    ctx.restore();
    outline(2); ctx.beginPath(); ctx.arc(x, y, r * 1.35, 0, Math.PI * 2); ctx.stroke();
    // 彩色刻度弧
    const n = 24;
    for (let i = 0; i < n; i++) {
      const v0 = i / n, v1 = (i + 1) / n;
      ctx.strokeStyle = Anima.mix("#5b5378", "#ffc94d", v0);
      ctx.lineWidth = r * 0.16; ctx.lineCap = "butt";
      ctx.beginPath(); ctx.arc(x, y, r * 1.12, ang(v0) - Math.PI / 2, ang(v1) - Math.PI / 2 + 0.01); ctx.stroke();
    }
    // 基础活性的小刻度
    const pb = pt(ang(BASE), r * 1.12), pb2 = pt(ang(BASE), r * 1.42);
    ctx.strokeStyle = C.lavDeep; ctx.lineWidth = Math.max(2, r * 0.07); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(pb[0], pb[1]); ctx.lineTo(pb2[0], pb2[1]); ctx.stroke();
    const fs = Math.max(10, r * 0.34) * Anima.UI;
    const pd = pt(-Math.PI * 0.62, r * 1.62), pl = pt(Math.PI * 0.62, r * 1.62);
    text("暗", pd[0], pd[1] + fs * 0.2, fs, "#5b5378");
    text("亮", pl[0], pl[1] + fs * 0.2, fs, "#c88600");
    // 旋钮本体
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r * 0.85);
    g.addColorStop(0, "#fff4e8"); g.addColorStop(1, "#ffcfb5");
    ctx.beginPath(); ctx.arc(x, y, r * 0.82, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    for (let i = 0; i < 12; i++) { // 防滑纹
      const a = i / 12 * Math.PI * 2, p1 = pt(a, r * 0.7), p2 = pt(a, r * 0.8);
      ctx.strokeStyle = "rgba(109,87,96,0.35)"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(p1[0], p1[1]); ctx.lineTo(p2[0], p2[1]); ctx.stroke();
    }
    const pp = pt(ang(clamp(b, 0, 1)), r * 0.62);
    ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(3, r * 0.12); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(pp[0], pp[1]); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r * 0.12, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    // 虚线“影子指针”：没有这位访客时会停在哪
    if (o.ghost != null && o.ghostA > 0.02) {
      ctx.save(); ctx.globalAlpha *= o.ghostA; ctx.setLineDash([4, 4]);
      const pg = pt(ang(o.ghost), r * 0.62);
      ctx.strokeStyle = C.lavDeep; ctx.lineWidth = Math.max(3, r * 0.1);
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(pg[0], pg[1]); ctx.stroke();
      ctx.restore();
    }
    if (o.noLabel) return { baseTick: pb2, top: y - r * 1.35 };
    // 读数
    const fs2 = Math.max(12, r * 0.36) * Anima.UI;
    const label = "亮度 " + Math.round(clamp(b, 0, 1) * 100) + "%";
    ctx.font = `${fs2}px ${Anima.ROUND}`;
    const tw = ctx.measureText(label).width + fs2 * 1.2;
    const ly = y + r * 1.35 + fs2 * 0.1;
    rrect(x - tw / 2, ly - fs2 * 0.7, tw, fs2 * 1.4, fs2 * 0.7); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(label, x, ly + 1, fs2, b > 0.6 ? "#c88600" : b < 0.12 ? C.lavDeep : C.ink);
    return { baseTick: pb2, top: y - r * 1.35 };
  }
  // 细胞里面：一间小屋子，天花板就是细胞膜
  function room(g) {
    ctx.fillStyle = C.room; ctx.fillRect(0, g.post + H * 0.03, W, H);
    ctx.fillStyle = "rgba(242,140,165,0.10)";
    for (let y = g.post + H * 0.07; y < H; y += H * 0.05) for (let x = ((y / (H * 0.05)) % 2) * H * 0.025; x < W; x += H * 0.05) {
      ctx.beginPath(); ctx.arc(x, y, H * 0.004, 0, Math.PI * 2); ctx.fill();
    }
    // 地板
    const fy = H * 0.955;
    ctx.fillStyle = "#f6dcc4"; ctx.fillRect(0, fy, W, H - fy);
    outline(1.5); ctx.beginPath(); ctx.moveTo(0, fy); ctx.lineTo(W, fy); ctx.stroke();
    // 小书架
    const bx = W * 0.04, bw = H * 0.12, bh = H * 0.2, by = fy - bh;
    rrect(bx, by, bw, bh, 4); ctx.fillStyle = "#f3c9a6"; ctx.fill(); outline(1.5); ctx.stroke();
    const cols = ["#f28ca5", "#8fdcc4", "#bfe3f5", "#ffd27a", "#ddd5fa"];
    for (let r = 0; r < 2; r++) {
      const sy = by + bh * (0.08 + r * 0.48);
      for (let i = 0; i < 5; i++) { rrect(bx + bw * 0.1 + i * bw * 0.16, sy, bw * 0.13, bh * 0.36, 2); ctx.fillStyle = cols[(i + r * 2) % 5]; ctx.fill(); outline(1); ctx.stroke(); }
    }
    // 电线：从受体沿着天花板通到旋钮和灯
    const wy = g.post + H * 0.045;
    ctx.strokeStyle = C.wire; ctx.lineWidth = Math.max(2, H * 0.005); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(g.rx, g.post + H * 0.02); ctx.lineTo(g.rx, wy); ctx.lineTo(g.kx, wy); ctx.lineTo(g.kx, g.ky - g.kr * 1.35); ctx.stroke();
    return { fy, wy };
  }

  // ---------- 第 1～5 幕：受体和灯 ----------
  function mainView(a) {
    const g = geo();
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, g.post);
    bg.addColorStop(0, C.cleftTop); bg.addColorStop(1, C.cleftBot);
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, g.post + 4);
    Anima.bokeh(7, "#ffe3a8", 0.8, 12);
    Anima.petals(9, 0.5, 33);
    Anima.postMembrane(g.post, C.mem, {});
    const R = room(g);

    // 屋子里的居民：亮度合适时开心，太亮、太暗都不舒服
    const resX = W * 0.24, resY = R.fy;
    let rEyes = "open", rMouth = "smile", rArms = "hold", rJump = 0, rEmo = null;
    if (B > 0.85) { rEyes = "x"; rMouth = "wavy"; rArms = "shh"; rEmo = "sweat"; }
    else if (B > 0.4) { rEyes = "happy"; rMouth = "grin"; rArms = "hold"; }
    else if (B < 0.1) { rEyes = "sleepy"; rMouth = "o"; rEmo = "zzz"; }
    if (cur === 1 && lt > 3.5) { rEyes = "sparkle"; rMouth = "open"; rArms = "up"; rJump = Math.abs(Math.sin(time * 5)) * 0.35; rEmo = null; }
    if (cur === 3 && lt > 7.5) { rEyes = "happy"; rMouth = "smile"; rArms = "hold"; rEmo = "note"; }
    chara(resX, resY, H * 0.048, { who: "neuron", label: "居民", eyes: rEyes, mouth: rMouth, arms: rArms, item: rArms === "hold" ? "book" : null, jump: rJump, dir: 1 });
    if (rEmo) emote(rEmo, resX + H * 0.05, resY - H * 0.17, H * 0.03);

    // 屋子的明暗
    ctx.fillStyle = Anima.alpha(C.roomDark, clamp((0.55 - B) * 0.6, 0, 0.3));
    ctx.fillRect(0, g.post + H * 0.03, W, H);
    lamp(g.rx, R.wy, g.lampY, g.br, B);
    knob(g.kx, g.ky, g.kr, B, { ghost: BASE, ghostA: cur === 3 ? prog(9, 1) : 0, noLabel: g.narrow });

    // 受体
    Anima.receptor(g.rx, g.post, g.rs, C.rec, clamp(B, 0, 1), {});
    // 电信号：钥匙转动时沿着电线跑向旋钮
    const turnAt = [-1, 2.9, -1, 3.7, 3.2, -1][cur];
    if (turnAt > 0 && lt > turnAt && lt < turnAt + 1.6) {
      const t = (lt - turnAt) / 1.6;
      Anima.spark([[g.rx, g.post + H * 0.02], [g.rx, R.wy], [g.kx, R.wy], [g.kx, g.ky - g.kr * 1.35]], t, H * 0.022, cur === 4 ? C.lavDeep : C.gold);
    }

    // ---- 访客们 ----
    const cs = g.cs;
    const drugO = (label, c1) => ({ who: "drug", label, hatColor: c1, hatColor2: "#ffffff" });
    let onSite = null;
    if (cur === 0) {
      const dx = g.rx - W * (g.narrow ? 0.3 : 0.25);
      chara(dx, g.post, cs, { who: "DA", eyes: lt > 6 ? "wide" : "open", mouth: "o", arms: lt > 6 ? "point" : "hold", item: lt > 6 ? null : "key", dir: 1 });
      emote("?", dx + cs * 0.9, g.post - cs * 3.4, cs * 0.7);
      say("wonder", lt > 1 && lt < 7.5, dx, g.post - cs * 3.2, g.bubL.x, g.bubL.y, "咦？还没人插钥匙，灯怎么已经微微亮着？", "think");
      say("baseSay", lt > 7.5, resX + H * 0.02, resY - H * 0.16, g.bubRoom.x, g.bubRoom.y, "这叫基础活性～", "say");
    }
    if (cur === 1) {
      const p = approach(g, -cs * 2, 0.3, 2, -1);
      const on = p.on;
      chara(p.x, p.y, cs * 1.05, { who: "DA", eyes: on ? "sparkle" : "open", mouth: on ? "grin" : "smile", arms: on ? "up" : "hold", item: on ? null : "key", walk: p.walk, dir: 1, jump: on ? Math.abs(Math.sin(time * 4)) * 0.2 : 0 });
      onSite = p;
      if (lt > 2.9 && lt < 3.8) sfx("咔哒！", g.rx + g.rs * 1.9, g.siteY - H * 0.02, H * 0.05, "#ff9a52", -0.15, Math.sin(prog(2.9, 0.9) * Math.PI));
      if (on) Anima.speedLines(g.rx, g.siteY - cs * 1.5, H * 0.2, 36, clamp((lt - 2.9) * 2, 0, 1) * clamp(5.5 - lt, 0, 1) * 0.6);
      say("full", lt > 3 && lt < 9, g.rx, g.siteY - cs * 3.3, g.narrow ? g.bubR.x : g.bubL.x, g.bubL.y, "开到最亮～！", "shout");
      say("bright", lt > 5, resX + H * 0.02, resY - H * 0.16, g.bubRoom.x, g.bubRoom.y, "哇，屋里好亮！", "say");
    }
    if (cur === 2) {
      const p = approach(g, W + cs * 2, 0.3, 2.2, 1);
      chara(p.x, p.y, cs * 1.05, Object.assign(drugO("拮抗剂", C.anta), { eyes: p.on ? "closed" : "open", mouth: p.on ? "cat" : "smile", arms: p.on ? "shh" : "hold", item: p.on ? null : "shield", walk: p.walk, dir: -1 }));
      onSite = p;
      // 多巴胺赶来，却插不进去
      const w = walkX(-cs * 2, g.rx - cs * 3.4, 4, 2);
      const bump = lt > 6 && lt < 6.5 ? Math.sin((lt - 6) / 0.5 * Math.PI) * cs * 0.6 : 0;
      if (lt > 4) {
        chara(w.x - bump, g.post, cs, { who: "DA", eyes: lt > 6 ? "teary" : "open", mouth: lt > 6 ? "wavy" : "smile", arms: "hold", item: "key", walk: w.walk, dir: 1, brow: lt > 6 ? "worry" : null });
        if (lt > 6) emote("sweat", w.x + cs * 0.9, g.post - cs * 3.1, cs * 0.6);
      }
      if (lt > 6 && lt < 6.8) sfx("咚！", g.rx - cs * 2, g.post - cs * 2.6, H * 0.045, C.skyDeep, 0.15, Math.sin(prog(6, 0.8) * Math.PI));
      say("antaSay", lt > 2.8 && lt < 7.5, g.rx, g.siteY - cs * 3.3, g.bubR.x, g.bubR.y, "我只占位子，不转旋钮～", "say");
      say("blocked", lt > 7, w.x, g.post - cs * 3.2, g.bubL.x, g.bubL.y, "锁孔被占了……我插不进去！", "think");
    }
    if (cur === 3) {
      // 太多的多巴胺：一个在锁孔上，两个在旁边排队；后来都走了
      const leave = walkX(0, -W * 0.5, 7, 3);
      for (let k = 0; k < 3; k++) {
        let x = g.rx - cs * (3.6 + k * 2.3) + leave.x, y = g.post, jump = 0, eyes = "happy", arms = "hold", item = "key", walk = leave.walk;
        if (k === 0) {
          const off = prog(2.9, 0.7);
          const onX = g.rx, offX = g.rx - cs * 3.6;
          if (lt < 2.9) { x = onX; y = g.siteY; eyes = "sparkle"; arms = "up"; item = null; jump = Math.abs(Math.sin(time * 4)) * 0.2; }
          else if (off < 1) { x = lerp(onX, offX, off); y = lerp(g.siteY, g.post, off) - Math.sin(off * Math.PI) * H * 0.05; eyes = "wide"; }
          else { eyes = "open"; }
        } else if (lt < 7) walk = Math.sin(time * 3 + k) > 0.3 ? time * 6 : null;
        if (x < -cs * 2) continue;
        chara(x, y, cs * 0.95, { who: "DA", eyes, mouth: eyes === "wide" ? "o" : "smile", arms, item, walk, jump, dir: lt > 7 ? -1 : 1, seed: k });
      }
      const p = approach(g, W + cs * 2, 0.6, 2.3, 1);
      chara(p.x, p.y, cs * 1.05, Object.assign(drugO("部分激动剂", C.part), { eyes: p.on ? "happy" : "open", mouth: p.on ? "smile" : "smile", arms: p.on ? (lt > 8.5 ? "wave" : "hold") : "hold", item: p.on ? null : "key", walk: p.walk, dir: -1 }));
      onSite = p;
      if (lt > 3.7 && lt < 4.5) sfx("咔…", g.rx + g.rs * 1.9, g.siteY - H * 0.02, H * 0.045, "#e7a23a", -0.15, Math.sin(prog(3.7, 0.8) * Math.PI));
      const capX = g.narrow ? W * 0.25 : W * 0.5, capY = g.narrow ? g.post + H * 0.12 : H * 0.12;
      say("tooMuch", lt > 0.3 && lt < 6.8, 0, 0, capX, capY, "递质太多：太亮", "box");
      say("tooLittle", lt > 7.3, 0, 0, capX, capY, "递质太少：太暗", "box");
      say("partA", lt > 4 && lt < 7, g.rx, g.siteY - cs * 3.3, g.bubR.x, g.bubR.y, "让一让～我只开一部分", "say");
      say("partB", lt > 9.5, g.rx, g.siteY - cs * 3.3, g.bubR.x, g.bubR.y, "人少了？我帮你留点亮～", "say");
    }
    if (cur === 4) {
      const p = approach(g, W + cs * 2, 0.3, 2.2, 1);
      chara(p.x, p.y, cs * 1.05, Object.assign(drugO("反向激动剂", C.inv), { hatColor2: "#e4e0ff", eyes: p.on ? "closed" : "open", mouth: p.on ? "cat" : "smile", arms: p.on ? "point" : "hold", item: p.on ? null : "key", walk: p.walk, dir: -1 }));
      onSite = p;
      if (lt > 3.2 && lt < 4) sfx("咔嗒…", g.rx + g.rs * 1.9, g.siteY - H * 0.02, H * 0.045, C.lavDeep, -0.15, Math.sin(prog(3.2, 0.8) * Math.PI));
      say("invSay", lt > 3.4 && lt < 9, g.rx, g.siteY - cs * 3.3, g.bubR.x, g.bubR.y, "往回拧～连微光也关掉", "say");
      say("dark", lt > 7.5, resX + H * 0.02, resY - H * 0.16, g.bubRoom.x, g.bubRoom.y, "比平时还暗了……", "think");
    }

    // ---- 标注 ----
    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    callout("rec", on("rec") && lt > 0.6, g.rx + g.rs * 0.7, g.post - g.rs * 1.2, g.labR.x, H * 0.3, "受体：一扇带锁孔的门");
    callout("base", on("base") && lt > 2.5 && cur === 0, g.rx + g.br * 0.3, g.lampY + g.br * 0.7, g.narrow ? W * 0.66 : g.rx + W * 0.05, H * 0.88, "基础活性：没钥匙也微微亮");
    callout("knob", on("knob") && (cur === 0 ? lt > 4.5 : lt > 3.5), g.kx - g.kr * 1.3, g.ky - g.kr * 0.4, g.kx - W * 0.13, g.post + H * 0.1,
      cur === 0 ? "调光旋钮：受体有多“亮”" : cur === 1 ? "旋钮拧到底：100%" : "拧到基础亮度以下");
    const sx = onSite ? onSite.x : g.rx;
    callout("full", on("full") && lt > 3.5, sx + cs * 0.8, g.siteY - cs * 1.2, g.labR.x, g.labR.y, g.narrow ? "完全激动剂：开到最亮" : "完全激动剂：把灯开到最亮");
    callout("anta", on("anta") && lt > 2.8 && !(g.narrow && lt > 6.8), sx + cs * 0.8, g.siteY - cs * 1.2, g.labR.x, g.labR.y, g.narrow ? "拮抗剂：占位挡人" : "拮抗剂：占住锁孔，挡住别人");
    callout("eg", on("eg") && lt > 8, g.rx + g.rs * 0.9, g.post - g.rs * 0.5, g.narrow ? W * 0.62 : W * 0.62, g.narrow ? H * 0.9 : g.post + H * 0.08, "例：很多抗精神病药（D2 受体）");
    callout("part", on("part") && lt > 4.2, sx + cs * 0.8, g.siteY - cs * 1.2, g.labR.x, g.labR.y, g.narrow ? "部分激动剂：开一部分" : "部分激动剂：最多开一部分");
    callout("stab", on("stab") && lt > 9, g.kx - g.kr * 1.3, g.ky - g.kr * 0.2, g.kx - W * 0.16, g.post + H * 0.09, "虚线：没有它时只剩基础亮度");
    callout("inv", on("inv") && lt > 4, sx + cs * 0.8, g.siteY - cs * 1.2, g.labR.x, g.labR.y, g.narrow ? "反向激动剂：更暗" : "反向激动剂：比基础还暗");
    ctx.restore();
  }

  // ---------- 第 6 幕：激动剂谱 ----------
  function specView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ef", "#f6effd");
    Anima.petals(12, 0.6, 61);
    const items = [
      { name: "反向激动剂", b: 0.03, tag: "比基础还暗", drug: C.inv, c2: "#e4e0ff" },
      { name: "拮抗剂", b: BASE, tag: "停在基础", drug: C.anta, c2: "#ffffff" },
      { name: "部分激动剂", b: 0.55, tag: "开一部分", drug: C.part, c2: "#ffffff" },
      { name: "完全激动剂", b: 1, tag: "开到最亮", drug: null },
    ];
    const narrow = W < H * 1.45;
    const railY = H * 0.19, bulbY = H * (narrow ? 0.29 : 0.33), footY = H * (narrow ? 0.7 : 0.68), cs = Math.min(H * 0.058, W * 0.045), br = Math.min(H * 0.045, W * 0.035);
    // 天花板横梁
    rrect(W * 0.04, railY - H * 0.012, W * 0.92, H * 0.024, H * 0.012); ctx.fillStyle = "#f3c9a6"; ctx.fill(); outline(1.5); ctx.stroke();
    // 底部的光谱条
    const barY = H * 0.9, bx0 = W * 0.06, bx1 = W * 0.94, bh = H * 0.035;
    const gr = ctx.createLinearGradient(bx0, 0, bx1, 0);
    gr.addColorStop(0, "#4a4270"); gr.addColorStop(0.3, "#b9aed8"); gr.addColorStop(0.65, "#ffe7a0"); gr.addColorStop(1, "#ffc94d");
    rrect(bx0, barY - bh / 2, bx1 - bx0, bh, bh / 2); ctx.fillStyle = gr; ctx.fill(); outline(1.6); ctx.stroke();
    const fs = Math.max(11, H * 0.03) * Anima.UI;
    text("暗", bx0 - fs * 0.1 + fs * 0.9, barY + 1, fs, "#ffffff");
    text("亮", bx1 - fs * 0.9, barY + 1, fs, C.ink);
    const xs = [0.15, 0.38, 0.62, 0.85].map((f) => W * f);
    // 基础活性线（虚线）
    const baseX = lerp(bx0, bx1, 0.29);
    ctx.save(); ctx.setLineDash([5, 5]); ctx.strokeStyle = C.lavDeep; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(baseX, barY - bh * 0.9); ctx.lineTo(baseX, barY + bh * 0.9); ctx.stroke(); ctx.restore();
    items.forEach((it, i) => {
      const x = xs[i], t0 = 0.5 + i * 1.4;
      const pin = prog(t0, 0.9);
      const lit = it.b * prog(t0 + 0.8, 1) + BASE * (1 - prog(t0 + 0.8, 1)) * (i === 3 ? 1 : 1);
      // 小灯
      lamp(x, railY + H * 0.012, bulbY, br, lit);
      // 角色
      if (pin > 0) {
        const y = footY - Math.sin(pin * Math.PI) * H * 0.06;
        const o = it.drug ? { who: "drug", label: it.name, hatColor: it.drug, hatColor2: it.c2 } : { who: "DA", label: "DA" };
        const eyes = i === 0 ? "sleepy" : i === 1 ? "closed" : i === 2 ? "happy" : "sparkle";
        const arms = i === 0 ? "down" : i === 1 ? "shh" : i === 2 ? "wave" : "up";
        chara(x, y, cs, Object.assign(o, { eyes, arms, mouth: i === 3 ? "grin" : i === 0 ? "o" : "smile", alpha: clamp(pin * 2, 0, 1), jump: i === 3 && pin >= 1 ? Math.abs(Math.sin(time * 4)) * 0.2 : 0 }));
        if (i === 0 && pin >= 1) emote("zzz", x + cs, footY - cs * 3.4, cs * 0.6);
        // 名字 + 位置
        const fs2 = narrow ? Math.max(10, W * 0.03) : Math.max(11, Math.min(H * 0.032, W * 0.028)) * Anima.UI;
        ctx.save(); ctx.globalAlpha *= clamp(pin * 2, 0, 1);
        ctx.font = `${fs2}px ${Anima.ROUND}`;
        const tw = ctx.measureText(it.name).width + fs2 * 1.2;
        rrect(x - tw / 2, footY + H * 0.02, tw, fs2 * 1.5, fs2 * 0.75); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
        text(it.name, x, footY + H * 0.02 + fs2 * 0.78, fs2, C.ink);
        text(it.tag, x, footY + H * 0.02 + fs2 * 2.3, fs2 * 0.85, C.soft);
        // 光谱条上的小标记
        const mx = lerp(bx0, bx1, [0.06, 0.29, 0.6, 0.95][i]);
        ctx.beginPath(); ctx.moveTo(mx, barY - bh * 0.6); ctx.lineTo(mx - fs2 * 0.4, barY - bh * 0.6 - fs2 * 0.6); ctx.lineTo(mx + fs2 * 0.4, barY - bh * 0.6 - fs2 * 0.6); ctx.closePath();
        ctx.fillStyle = C.rose; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.restore();
      }
    });
    if (narrow) text("基础活性", baseX, barY + bh * 1.3, Math.max(10, W * 0.028), C.lavDeep);
    callout("specBase", lt > 8 && !narrow, baseX, barY + bh * 0.9, baseX + W * 0.2, H * 0.975, "虚线：基础活性");
    say("same", lt > 6.5, xs[3] - cs * 0.5, footY - cs * 3.3, narrow ? W * 0.56 : xs[3] - W * 0.12, narrow ? H * 0.46 : H * 0.4, "同一扇门，不同的钥匙～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#c88600", false);
    if (cur < 5) pill(W - 14, 12, "亮度", Math.round(clamp(B, 0, 1) * 100) + "%", B > 0.6 ? "#e7a23a" : B < 0.12 ? C.lavDeep : C.rose, true);
    else pill(W - 14, 12, "效果", "暗 → 亮", C.lavDeep, true);
  }

  function draw() {
    ctx.fillStyle = "#fff8f0"; ctx.fillRect(0, 0, W, H);
    if (S.main > 0.02) mainView(S.main);
    if (S.spec > 0.02) specView(S.spec);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e7a23a",
    titleCard: { lines: ["受体的", "调光开关"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
