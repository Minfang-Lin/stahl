Anima.register("anxiety", {
    "title": "杏仁核的警报器",
    "tag": "焦虑与创伤",
    "headline": "心里的警报器，为什么【关不掉】？",
    "lede": "杏仁核是大脑的警报器，遇到危险就拉响警报，让身体准备好战斗或逃跑。焦虑的时候，这个警报器太灵敏，没有危险也响个不停。看看 GABA 刹车、苯二氮䓬、SSRI 和心理治疗，各自是怎样帮它安静下来的。",
    "summary": "杏仁核警报、前额叶解除警报、GABA-A 氯离子门、苯二氮䓬的作用和风险，以及 SSRI/SNRI 与暴露疗法。",
    "chapter": "对应 Stahl《精神药理学精要》第 8 章 · 焦虑、创伤及其治疗",
    "footer": "抗焦虑药请在医生指导下使用，不要自行加量、停药，也不要和酒一起吃。",
    "canvasLabel": "拟人化的杏仁核警报塔、前额叶指挥官和 GABA 氯离子门的动画",
    "regions": ["amygdala", "pfc"],
    "parts": ["anxiety"],
    "cast": ["GABA", "Glu", "NE", "5HT", "drug"],
    "color": "#f5a3a3"
  }, () => {
  const CH = [
    { title: "大脑的警报器", alarm: 1, door: 0, warn: 0, hq: 0, red: 1,
      pill: ["杏仁核", "拉警报"], pill2: ["身体", "想逃"],
      text: "大脑深处左右各有一个杏仁大小的小塔，叫杏仁核，它是大脑的警报器。一看到危险，比如草丛里窜出一条蛇，它马上拉响警报：信号传到下游，心跳加快、呼吸变急、手心出汗、只想赶快逃开，身体还会放出应激激素。这套反应本来是在保护我们。",
      fact: "杏仁核是恐惧反应的中枢，它指挥下游脑区调动心跳、呼吸和应激激素" },
    { title: "太灵敏的警报器", alarm: 1, door: 0, warn: 0, hq: 1, red: 1,
      pill: ["警报器", "太灵敏"], pill2: ["前额叶", "刹不住"],
      text: "焦虑障碍里，警报器好像被调得太灵敏了：明明只是一只蝴蝶飞过，它也响个不停，身体一直绷得紧紧的。本来，前额叶皮层像一位冷静的指挥官，会判断“其实没事”，再按下按钮解除警报。可这时从前额叶传到杏仁核的刹车信号不够有力，警报怎么也关不掉。",
      fact: "一种常用的解释：杏仁核反应过强，前额叶“自上而下”的调控又不够" },
    { title: "GABA 的氯离子门", alarm: 0, door: 1, warn: 0, hq: 0, red: 0,
      pill: ["GABA-A", "氯离子门"], pill2: ["神经元", "安静"],
      text: "要让太兴奋的神经元安静下来，要靠大脑里安静的图书管理员 GABA。神经元膜上有一种门叫 GABA-A 受体，它本身就是一条氯离子通道。GABA 把钥匙插进去，门就打开，带负电的氯离子（Cl⁻）流进神经元，让它更不容易被激发，警报声也就跟着小了。",
      fact: "GABA 是大脑里最主要的抑制性递质，GABA-A 受体是一种氯离子通道" },
    { title: "苯二氮䓬：帮忙的访客", alarm: 0, door: 1, warn: 0, hq: 0, red: 0,
      pill: ["苯二氮䓬", "起效快"], pill2: ["开门", "更勤"],
      text: "苯二氮䓬类药物，比如地西泮、阿普唑仑、劳拉西泮，并不自己开门。它们坐在门上的另一个位置，叫变构位点，让 GABA 来的时候门开得更勤，更多氯离子流进来，神经元很快就安静了。所以它们起效快，常用来短期缓解很强的焦虑。",
      fact: "苯二氮䓬增加 GABA-A 通道开放的频率；没有 GABA，它自己开不了门" },
    { title: "要小心的地方", alarm: 0, door: 0, warn: 1, hq: 0, red: 0,
      pill: ["连用久了", "耐受"], pill2: ["停药", "慢慢减"],
      text: "不过，这位访客不适合天天长期请来。连续用久了，大脑会慢慢适应，药效变弱，这叫耐受，也会产生依赖。如果突然停药，焦虑和失眠可能反弹得更厉害，严重时甚至抽搐，所以要在医生指导下慢慢减量。它和酒精或阿片类药物一起用，还可能压住呼吸，非常危险。",
      fact: "苯二氮䓬不要自行突然停用，也不要和酒精、阿片类药物同用" },
    { title: "把灵敏度慢慢调回来", alarm: 1, door: 0, warn: 0, hq: 1, red: 0,
      pill: ["SSRI", "几周起效"], pill2: ["心理治疗", "新学习"],
      text: "长期来看，SSRI 或 SNRI 类药物常作为一线治疗。它们不会马上见效，而是在几周里慢慢把警报器的灵敏度调低。认知行为治疗和暴露疗法，陪着大脑一点点靠近害怕的东西，学到“这其实是安全的”。恐惧消退不是把害怕忘掉，而是学会了一件新的事。",
      fact: "SSRI/SNRI 通常要几周才起效；药物和心理治疗常常一起用" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    tower: "#ffd9bf", towerRed: "#ffb3b3", out: "#eef7fb", cell: "#ffe6dc", mem: "#f7c6d3", door: "#c9c0f5",
    chl: "#bfe8d6", cloud: "#ffffff", pfc: "#8fa4f0",
  });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { alarm: 1, door: 0, warn: 0, hq: 0, red: 1 };

  // 门的状态（第 3、4 幕）
  let openLv = 0, wasOpen = false, openCount = 0, calm = 0, needle = 0.3;
  const ions = [];
  for (let i = 0; i < 12; i++) ions.push({ p: rnd(i + 3) * 0.4, seed: i });

  function doorTarget() {
    if (cur === 2) { if (lt < 3) return 0; return ((lt - 3) % 2.6) < 0.9 ? 1 : 0; }
    if (cur === 3) {
      if (lt < 4.6) return (lt % 2.6) < 0.9 ? 1 : 0;
      return ((lt - 4.6) % 0.9) < 0.5 ? 1 : 0;
    }
    return 0;
  }
  function needleTarget() {
    if (cur === 0) return lt > 1.6 ? 0.78 : 0.3;
    if (cur === 1) return 0.94 + Math.sin(time * 9) * 0.03;
    if (cur === 5) return lerp(0.92, 0.3, ease((lt - 1.5) / 8));
    return 0.5;
  }
  function update(dt) {
    if (cur !== lastCur) {
      lastCur = cur; lt = 0; openCount = 0; wasOpen = false;
      calm = cur === 3 ? 0.35 : 0;
      ions.forEach((o, i) => { o.p = rnd(i + 3) * 0.4; });
    }
    lt += dt;
    const tg = doorTarget();
    openLv = lerp(openLv, tg, 1 - Math.exp(-dt * 9));
    if (tg > 0.5 && !wasOpen) openCount++;
    wasOpen = tg > 0.5;
    needle = lerp(needle, needleTarget(), 1 - Math.exp(-dt * 3));
    for (const o of ions) {
      const before = o.p;
      if (o.p < 0.42) o.p += dt * 0.16;
      else if (o.p < 0.45) { if (openLv > 0.5) o.p += dt * 0.5; }
      else if (o.p < 0.62) o.p += dt * 0.7;
      else o.p += dt * 0.22;
      if (before < 0.62 && o.p >= 0.62) calm = Math.min(1, calm + 0.07);
      if (o.p >= 1) o.p = rnd(o.seed + time) * 0.12;
    }
    calm = Math.max(0, calm - dt * 0.02);
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrow = () => W / H < 1.45; // 手机竖屏：舞台接近 1000:820，标注改成一个接一个出现
  const win = (a, b) => lt > a && lt < b;

  // ================= 警报塔小镇（第 1、2、6 幕） =================
  function geoA() {
    const tx = W * 0.3, base = H * 0.93, th = H * 0.6, tw = H * 0.3;
    const platY = base - th * 0.72;
    const lamp = { x: tx - tw * 0.2, y: platY - tw * 0.02, r: tw * 0.17 };
    const guard = { x: tx + tw * 0.22, y: platY, s: H * (narrow() ? 0.056 : 0.046) };
    const dial = { x: tx, y: base - th * 0.4, r: tw * 0.27 };
    const person = { x: W * 0.82, y: base, s: H * (narrow() ? 0.075 : 0.066) };
    const hq = { x: W * (narrow() ? 0.66 : 0.6), y: H * (narrow() ? 0.56 : 0.42) };
    return { tx, base, th, tw, platY, lamp, guard, dial, person, hq };
  }
  function tower(g, ring, red) {
    const { tx, base, tw, platY } = g;
    // 杏仁形的塔身
    const col = Anima.mix(C.tower, C.towerRed, red * (0.5 + 0.5 * Math.sin(time * 8)) * ring);
    ctx.beginPath();
    ctx.moveTo(tx, platY - H * 0.02);
    ctx.bezierCurveTo(tx + tw * 0.62, platY + H * 0.02, tx + tw * 0.62, base, tx, base);
    ctx.bezierCurveTo(tx - tw * 0.62, base, tx - tw * 0.62, platY + H * 0.02, tx, platY - H * 0.02);
    ctx.fillStyle = col; ctx.fill(); outline(Math.max(1.5, H * 0.005)); ctx.stroke();
    // 杏仁的纹路
    ctx.save(); ctx.globalAlpha *= 0.35; ctx.strokeStyle = "#c98f6a"; ctx.lineWidth = Math.max(1, H * 0.003);
    for (const k of [-1, 1]) { ctx.beginPath(); ctx.moveTo(tx + k * tw * 0.12, platY + H * 0.04); ctx.quadraticCurveTo(tx + k * tw * 0.36, (platY + base) / 2, tx + k * tw * 0.14, base - H * 0.03); ctx.stroke(); }
    ctx.restore();
    // 顶上的小平台
    rrect(tx - tw * 0.48, platY - H * 0.012, tw * 0.96, H * 0.03, H * 0.012); ctx.fillStyle = "#fff2e6"; ctx.fill(); outline(1.6); ctx.stroke();
    // 塔身上的小脸
    face(tx, base - g.th * 0.14, tw * 0.16, ring > 0.5 ? -1 : 1);
    if (ring > 0.5) { Anima.sweat(tx + tw * 0.25, base - g.th * 0.22, tw * 0.1); }
  }
  function lamp(g, ring) {
    const L = g.lamp;
    if (ring > 0.02) {
      // 旋转的警报光束
      ctx.save(); ctx.globalAlpha *= ring * 0.35;
      const q = time * 4;
      for (const k of [0, Math.PI]) {
        ctx.beginPath(); ctx.moveTo(L.x, L.y - L.r * 0.6);
        ctx.arc(L.x, L.y - L.r * 0.6, H * 0.34, q + k - 0.22, q + k + 0.22); ctx.closePath();
        const gr = ctx.createRadialGradient(L.x, L.y, 0, L.x, L.y, H * 0.34);
        gr.addColorStop(0, "rgba(255,110,120,0.9)"); gr.addColorStop(1, "rgba(255,110,120,0)");
        ctx.fillStyle = gr; ctx.fill();
      }
      ctx.restore();
      glow(L.x, L.y - L.r * 0.6, L.r * 3.2, C.bad, ring * (0.6 + 0.4 * Math.sin(time * 10)));
    }
    ctx.beginPath(); ctx.arc(L.x, L.y, L.r, Math.PI, 0); ctx.closePath();
    ctx.fillStyle = Anima.mix("#f3e6ea", "#ff7a8a", ring); ctx.fill(); outline(1.8); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.beginPath(); ctx.ellipse(L.x - L.r * 0.4, L.y - L.r * 0.55, L.r * 0.18, L.r * 0.1, -0.6, 0, Math.PI * 2); ctx.fill();
  }
  function dialDraw(g, v) {
    const d = g.dial, r = d.r;
    ctx.beginPath(); ctx.arc(d.x, d.y, r * 1.12, Math.PI, 0); ctx.lineTo(d.x + r * 1.12, d.y + r * 0.22); ctx.lineTo(d.x - r * 1.12, d.y + r * 0.22); ctx.closePath();
    ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.6); ctx.stroke();
    const cols = [C.good, C.gold, C.bad];
    for (let i = 0; i < 3; i++) {
      ctx.beginPath(); ctx.arc(d.x, d.y, r * 0.86, Math.PI + i * Math.PI / 3, Math.PI + (i + 1) * Math.PI / 3);
      ctx.strokeStyle = cols[i]; ctx.lineWidth = r * 0.2; ctx.lineCap = "butt"; ctx.stroke();
    }
    const q = Math.PI + clamp(v, 0, 1) * Math.PI;
    outline(Math.max(2, r * 0.08));
    ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x + Math.cos(q) * r * 0.8, d.y + Math.sin(q) * r * 0.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(d.x, d.y, r * 0.1, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    text("灵敏度", d.x, d.y + r * 0.1 + Math.max(7, r * 0.12), Math.max(9, r * 0.24) * Anima.UI * 0.9, C.ink);
  }
  function snake(x, y, s, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.lineCap = "round";
    const pts = [];
    for (let k = 0; k <= 16; k++) { const t = k / 16; pts.push([x - s * 1.2 + t * s * 2.2, y - s * 0.15 + Math.sin(t * 9 + time * 5) * s * 0.18 * (1 - t * 0.6) - t * t * s * 0.9]); }
    for (const [w, c] of [[s * 0.42, C.line], [s * 0.32, "#9bc47a"]]) {
      ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    }
    const h = pts[pts.length - 1];
    ctx.beginPath(); ctx.ellipse(h[0] + s * 0.1, h[1], s * 0.34, s * 0.26, 0.2, 0, Math.PI * 2); ctx.fillStyle = "#9bc47a"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(h[0] + s * 0.18, h[1] - s * 0.06, s * 0.06, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(1.2, s * 0.05);
    const fl = Math.sin(time * 14) > 0 ? 1 : 0.6;
    ctx.beginPath(); ctx.moveTo(h[0] + s * 0.42, h[1] + s * 0.04); ctx.lineTo(h[0] + s * 0.42 + s * 0.22 * fl, h[1] + s * 0.02); ctx.stroke();
    ctx.restore();
  }
  function butterfly(x, y, s, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y);
    const f = 0.35 + 0.65 * Math.abs(Math.sin(time * 9));
    for (const k of [-1, 1]) {
      ctx.save(); ctx.scale(k * f, 1);
      ctx.beginPath(); ctx.ellipse(s * 0.45, -s * 0.25, s * 0.5, s * 0.38, -0.4, 0, Math.PI * 2); ctx.fillStyle = "#ffd1e3"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(s * 0.35, s * 0.28, s * 0.32, s * 0.26, 0.4, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); ctx.stroke();
      ctx.restore();
    }
    ctx.beginPath(); ctx.ellipse(0, 0, s * 0.09, s * 0.42, 0, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    ctx.restore();
  }
  function roadPts(g) {
    const a = [g.tx + g.tw * 0.5, g.base - g.th * 0.12], b = [g.person.x - g.person.s * 1.2, g.base - g.person.s * 1.4];
    const m = [(a[0] + b[0]) / 2, Math.max(a[1], b[1]) + H * 0.03];
    const pts = [];
    for (let k = 0; k <= 12; k++) { const t = k / 12; pts.push([(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * m[0] + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * m[1] + t * t * b[1]]); }
    return pts;
  }
  function hqDraw(g, a, strong) {
    if (a < 0.02) return null;
    const h = g.hq, cw = H * 0.34, cs = H * (narrow() ? 0.052 : 0.042);
    ctx.save(); ctx.globalAlpha *= a;
    // 云朵平台
    ctx.fillStyle = C.cloud;
    ctx.beginPath();
    for (const [dx, dy, r] of [[-0.36, 0.02, 0.2], [-0.12, -0.06, 0.26], [0.16, -0.04, 0.24], [0.38, 0.03, 0.18]]) {
      ctx.moveTo(h.x + dx * cw + r * cw, h.y + dy * cw); ctx.arc(h.x + dx * cw, h.y + dy * cw, r * cw, 0, Math.PI * 2);
    }
    ctx.strokeStyle = C.line; ctx.lineWidth = 3.2; ctx.stroke(); ctx.fill();
    // 控制台和按钮
    const bx = h.x + cw * 0.22, by = h.y - cw * 0.06;
    rrect(bx - cw * 0.1, by - cw * 0.16, cw * 0.2, cw * 0.18, cw * 0.03); ctx.fillStyle = "#e4e0ff"; ctx.fill(); outline(1.5); ctx.stroke();
    const press = strong ? (Math.sin(time * 2) > 0.6 ? 1 : 0) : (Math.sin(time * 7) > 0 ? 1 : 0);
    ctx.beginPath(); ctx.ellipse(bx, by - cw * 0.16 + press * cw * 0.02, cw * 0.07, cw * 0.035, 0, 0, Math.PI * 2);
    ctx.fillStyle = strong ? C.good : "#8fd5ff"; ctx.fill(); outline(1.4); ctx.stroke();
    // 指挥官
    const cx = h.x - cw * 0.12, cy = h.y - cw * 0.08;
    chara(cx, cy, cs, { hair: "#6a7bd1", eye: "#4153a8", cloth: "#dfe6ff", hat: "cap", hatColor: C.pfc, label: "PFC", style: "short", glasses: true,
      arms: strong ? "point" : "point", dir: 1, eyes: strong ? "happy" : "x", mouth: strong ? "grin" : "wavy", brow: strong ? null : "worry", item: strong ? null : null });
    if (!strong) emote("sweat", cx + cs * 0.9, cy - cs * 3, cs * 0.6);
    ctx.restore();
    return { btn: { x: bx, y: by - cw * 0.16 }, head: { x: cx, y: cy - cs * 3.1 }, feet: { x: cx, y: cy }, cs };
  }
  function cable(g, hq, strong, a) {
    if (!hq || a < 0.02) return;
    const A = [hq.btn.x, hq.btn.y], B = [g.lamp.x + g.lamp.r * 0.8, g.lamp.y - g.lamp.r * 1.1];
    const M = [(A[0] + B[0]) / 2, Math.min(A[1], B[1]) - H * 0.14];
    const pts = [];
    for (let k = 0; k <= 16; k++) { const t = k / 16; pts.push([(1 - t) * (1 - t) * A[0] + 2 * (1 - t) * t * M[0] + t * t * B[0], (1 - t) * (1 - t) * A[1] + 2 * (1 - t) * t * M[1] + t * t * B[1]]); }
    ctx.save(); ctx.globalAlpha *= a;
    ctx.lineCap = "round";
    if (strong) {
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(4, H * 0.014); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
      ctx.strokeStyle = C.good; ctx.lineWidth = Math.max(2.5, H * 0.009); ctx.stroke();
      Anima.spark(pts, (time * 0.5) % 1, H * 0.022, C.good);
    } else {
      ctx.setLineDash([5, 7]); ctx.strokeStyle = "rgba(111,150,200,0.75)"; ctx.lineWidth = 2.4;
      ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.setLineDash([]);
      // 刹车信号走到一半就没力气了
      const t = (time * 0.45) % 1;
      if (t < 0.55) {
        ctx.save(); ctx.globalAlpha *= 1 - t / 0.55;
        const p = Anima.spark(pts, t, H * 0.018 * (1 - t), "#8fd5ff");
        ctx.restore();
        if (t > 0.35) sfx("…", p.x, p.y - H * 0.04, H * 0.035, C.soft, 0, 1 - t / 0.55);
      }
    }
    ctx.restore();
    return pts[8];
  }
  function personDraw(g, fear, relief) {
    const P = g.person, s = P.s;
    const scared = fear > 0.5;
    if (scared) { // 脚边的小动作线：想拔腿就跑
      ctx.strokeStyle = Anima.alpha(C.line, 0.5); ctx.lineWidth = 1.6; ctx.lineCap = "round";
      for (let k = 0; k < 3; k++) { const yy = P.y - s * (0.3 + k * 0.35); ctx.beginPath(); ctx.moveTo(P.x - s * 1.3 - k * s * 0.2, yy); ctx.lineTo(P.x - s * 2.1 - k * s * 0.2, yy); ctx.stroke(); }
    }
    chara(P.x, P.y, s, { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none",
      eyes: scared ? "wide" : (relief ? "happy" : "open"), mouth: scared ? "wavy" : (relief ? "grin" : "smile"), brow: scared ? "worry" : null,
      arms: scared ? "up" : (relief ? "wave" : "down"), walk: scared ? time * 16 : null, dir: 1 });
    if (scared) {
      const hs = s * (0.45 + 0.1 * Math.abs(Math.sin(time * 9)));
      Anima.heart(P.x - s * 1.7, P.y - s * 1.6, hs, C.bad);
      sfx("咚咚", P.x - s * 1.7, P.y - s * 2.5, s * 0.5, C.bad, -0.1, 0.9);
      emote("sweat", P.x + s * 1.1, P.y - s * 3.2, s * 0.6);
      // 急促的呼吸
      for (let k = 0; k < 3; k++) {
        const t = (time * 1.8 + k / 3) % 1;
        ctx.save(); ctx.globalAlpha *= (1 - t) * 0.8;
        ctx.beginPath(); ctx.arc(P.x + s * (1.2 + t * 1.1), P.y - s * 2.1 - t * s * 0.3, s * (0.12 + t * 0.15), 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.restore();
      }
      // 应激激素：小水滴一样的信使
      for (let k = 0; k < 3; k++) {
        const t = (time * 0.5 + k / 3) % 1;
        const x = P.x + s * 1.6 + Math.sin(t * 6 + k) * s * 0.2, y = P.y - s * 0.4 - t * s * 1.8;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
        ctx.beginPath(); ctx.moveTo(x, y - s * 0.22); ctx.quadraticCurveTo(x + s * 0.18, y, x, y + s * 0.1); ctx.quadraticCurveTo(x - s * 0.18, y, x, y - s * 0.22);
        ctx.fillStyle = C.gold; ctx.fill(); outline(1); ctx.stroke();
        ctx.restore();
      }
    }
    return { head: { x: P.x, y: P.y - s * 3.1 }, heart: { x: P.x - s * 1.7, y: P.y - s * 1.6 }, horm: { x: P.x + s * 1.6, y: P.y - s * 1.2 } };
  }
  function alarmView(a) {
    const g = geoA();
    ctx.save(); ctx.globalAlpha *= a;
    const calmSky = cur === 5 ? prog(2, 6) : 0;
    const redA = S.red * (cur === 0 ? prog(1.6, 0.6) : 1);
    Anima.wash(Anima.mix("#fff4ec", "#ffe3e3", redA * 0.8), Anima.mix("#f5fbf2", "#ffeef0", redA));
    Anima.bokeh(7, redA > 0.5 ? "#ffc2c2" : "#d9f0dc", 0.8, 11);
    if (calmSky > 0) Anima.petals(10, calmSky * 0.8, 33);
    // 草地
    ctx.fillStyle = "#e3f3d9"; ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(0, g.base - H * 0.02);
    ctx.quadraticCurveTo(W * 0.5, g.base - H * 0.07, W, g.base - H * 0.02); ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
    outline(1.4); ctx.beginPath(); ctx.moveTo(0, g.base - H * 0.02); ctx.quadraticCurveTo(W * 0.5, g.base - H * 0.07, W, g.base - H * 0.02); ctx.stroke();

    // 本幕的“刺激”和警报强度
    let ring = 0, fear = 0;
    if (cur === 0) { ring = prog(1.6, 0.4); fear = prog(2.6, 0.5); }
    if (cur === 1) { ring = 1; fear = 1; }
    if (cur === 5) { ring = 1 - prog(1, 2); fear = 0; }
    const snakeX = g.tx - g.tw * 0.95, snakeY = g.base - H * 0.03;
    if (cur === 0) snake(snakeX + (1 - prog(0.4, 1.2)) * -W * 0.1, snakeY, H * 0.11, prog(0.3, 0.8));
    const bf0 = { x: g.tx - g.tw * 0.85 + Math.sin(time * 0.9) * g.tw * 0.15, y: H * 0.56 + Math.sin(time * 1.7) * H * 0.04 };
    const bfX = cur === 5 ? lerp(bf0.x, g.person.x + g.person.s * 1.5, prog(4, 4)) : bf0.x;
    const bfY = cur === 5 ? lerp(bf0.y, g.base - g.person.s * 2.3, prog(4, 4)) + Math.sin(time * 3) * H * 0.01 : bf0.y;
    if (cur === 1 || cur === 5) butterfly(bfX, bfY, H * 0.045, 1);

    // 通往身体的神经“公路”
    const road = roadPts(g);
    ctx.save(); ctx.setLineDash([6, 8]); ctx.strokeStyle = alpha2(C.line, 0.4); ctx.lineWidth = 2;
    ctx.beginPath(); road.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
    if (ring > 0.5) for (let k = 0; k < 2; k++) Anima.spark(road, (time * 0.8 + k * 0.5) % 1, H * 0.02, C.bad);

    lamp(g, ring);
    tower(g, ring, redA);
    dialDraw(g, needle);
    // 哨兵
    const G = g.guard;
    const gOpt = ring > 0.5
      ? { who: "NE", arms: "up", eyes: cur === 1 ? "x" : "wide", mouth: "open", brow: "worry", dir: -1, jump: Math.abs(Math.sin(time * 8)) * 0.25 }
      : { who: "NE", arms: cur === 5 && lt > 5 ? "wave" : "down", eyes: cur === 5 && lt > 3 ? "happy" : "open", mouth: "smile", dir: -1 };
    chara(G.x, G.y, G.s, gOpt);
    if (ring > 0.5) sfx("呜——呜——", g.lamp.x - g.tw * 0.2, g.lamp.y - g.lamp.r * 2.6, H * 0.04, C.bad, -0.12, 0.6 + 0.4 * Math.sin(time * 6));
    if (cur === 0 && lt > 1.6) emote("!", G.x - G.s * 0.2, G.y - G.s * 3.8, G.s * 0.8);
    if (cur === 5 && lt > 6) emote("note", G.x + G.s * 1, G.y - G.s * 3.3, G.s * 0.7);

    // 前额叶指挥部
    const strong = cur === 5;
    const hq = hqDraw(g, S.hq, strong);
    const mid = cable(g, hq, strong, S.hq);

    // 第 6 幕：5-HT 和药物访客慢慢拧低灵敏度
    let turner = null;
    if (cur === 5) {
      const cs = H * (narrow() ? 0.05 : 0.042), tA = prog(0.2, 1);
      const x1 = g.tx + g.tw * 0.72, y1 = g.base - H * 0.03;
      ctx.save(); ctx.globalAlpha *= tA;
      chara(x1, y1, cs, { who: "drug", label: "SSRI", hatColor: "#8fdcc4", hatColor2: "#fff1b8", arms: "point", eyes: "happy", dir: -1 });
      chara(x1 + cs * 2.3, y1, cs * 0.9, { who: "5HT", arms: "wave", eyes: "happy", dir: -1 });
      ctx.restore();
      turner = { x: x1, y: y1 - cs * 3.1 };
      // 日历：第几周
      const wk = 1 + Math.min(3, Math.floor(clamp((lt - 1.5) / 8, 0, 0.999) * 4));
      const cx = x1 + cs * 1.1, cy = y1 - cs * 5;
      ctx.save(); ctx.globalAlpha *= tA;
      rrect(cx - cs * 1.3, cy - cs * 0.9, cs * 2.6, cs * 1.8, cs * 0.3); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.fillStyle = C.rose; rrect(cx - cs * 1.3, cy - cs * 0.9, cs * 2.6, cs * 0.5, cs * 0.3); ctx.fill();
      text("第 " + wk + " 周", cx, cy + cs * 0.3, Math.max(10, cs * 0.62) * Anima.UI, C.ink);
      ctx.restore();
    }
    const P = personDraw(g, fear, cur === 5 && lt > 8);

    // 标注和气泡（手机上一个接一个出现，都放在上方一排）
    const n = narrow(), topY = H * 0.27;
    callout("a-amy", cur === 0 && (n ? win(4.8, 7.6) : lt > 3), g.tx - g.tw * 0.3, g.base - g.th * 0.25, n ? W * 0.76 : W * 0.12, n ? H * 0.4 : H * 0.42, "杏仁核：警报器");
    callout("a-body", cur === 0 && (n ? win(7.6, 10.3) : lt > 4.5), P.heart.x, P.heart.y, n ? W * 0.8 : P.heart.x - W * 0.08, n ? topY : H * 0.48, "心跳加快、呼吸变急");
    callout("a-horm", cur === 0 && (n ? lt > 10.3 : lt > 6.5), P.horm.x, P.horm.y, n ? W * 0.6 : P.horm.x, n ? topY : H * 0.2, "应激激素出动");
    say("a-danger", cur === 0 && win(1.8, n ? 4.8 : 7), G.x, G.y - G.s * 3.2, g.tx + W * 0.12, H * 0.18, "有危险！快准备逃！", "shout");
    say("a-false", cur === 1 && win(0.8, n ? 3.8 : 6.5), G.x, G.y - G.s * 3.2, g.tx + W * 0.1, H * 0.17, "又有情况！警报——！", "shout");
    if (hq) {
      say("a-cmd", cur === 1 && lt > (n ? 10.6 : 6.8), hq.head.x, hq.head.y, n ? W * 0.72 : hq.head.x + W * 0.17, n ? H * 0.26 : H * 0.18, "只是蝴蝶啦…怎么关不掉！", "say");
      callout("a-pfc", cur === 1 && (n ? win(3.8, 6.6) : lt > 2.5), hq.feet.x, hq.feet.y + H * 0.01, n ? W * 0.55 : hq.feet.x + W * 0.02, n ? topY : H * 0.58, "前额叶：负责解除警报");
      // 手机上等“前额叶”标注淡出再出现，否则会被它挤到下面、压住警报员的脸
      callout("a-weak", cur === 1 && (n ? win(7.2, 10.3) : lt > 6.5) && !!mid, mid ? mid[0] : 0, mid ? mid[1] : 0, n ? W * 0.45 : mid ? mid[0] - W * 0.02 : 0, n ? topY : H * 0.2, "刹车信号太弱");
      callout("a-cbt", cur === 5 && (n ? win(5.5, 9) : win(5, 8.6)), hq.feet.x, hq.feet.y + H * 0.01, n ? W * 0.55 : hq.feet.x + W * 0.02, n ? topY : H * 0.58, "心理治疗：练习“其实没事”");
      // 手机上放到上方一排（这时标注都已淡出），不盖住“第几周”的日历
      say("a-safe", cur === 5 && lt > (n ? 9.3 : 8.5), P.head.x, P.head.y, n ? W * 0.62 : P.head.x - W * 0.14, n ? topY : P.head.y - H * 0.1, "原来它不可怕呀～", "say");
    }
    callout("a-ssri", cur === 5 && win(1.5, n ? 5.5 : 8.5) && !!turner, turner ? turner.x : 0, turner ? turner.y : 0, n ? W * 0.45 : turner ? turner.x - W * 0.05 : 0, n ? topY : H * 0.26, "SSRI：慢慢调低灵敏度");
    ctx.restore();
  }
  function alpha2(hex, a) { return Anima.alpha(hex, a); }

  // ================= GABA-A 氯离子门（第 3、4 幕） =================
  function geoD() {
    const mem = H * (narrow() ? 0.66 : 0.6), dx = W * 0.5, hw = H * (narrow() ? 0.085 : 0.075), top = mem - H * 0.14, bot = mem + H * 0.1;
    const gap = H * (0.012 + 0.04 * openLv);
    return { mem, dx, hw, top, bot, gap, entry: { x: dx, y: top - H * 0.04 } };
  }
  function ionPos(o, d) {
    const sx = d.dx + (rnd(o.seed + 20) - 0.5) * W * 0.6, sy = H * 0.2 + rnd(o.seed + 40) * H * 0.18;
    const hx = d.dx + (rnd(o.seed + 60) - 0.5) * H * 0.16, hy = d.entry.y - rnd(o.seed + 80) * H * 0.06;
    const ex = d.dx + (rnd(o.seed + 50) - 0.5) * W * 0.5, ey = d.bot + H * 0.08 + rnd(o.seed + 70) * H * 0.12;
    const p = o.p;
    if (p < 0.45) {
      const k = ease(p / 0.42);
      return { x: lerp(sx, hx, k) + Math.sin(time * 1.3 + o.seed) * H * 0.01, y: lerp(sy, hy, k) + Math.cos(time * 1.1 + o.seed) * H * 0.008, a: 1 };
    }
    if (p < 0.62) {
      const k = (p - 0.45) / 0.17;
      return { x: lerp(hx, d.dx, Math.min(1, k * 2.5)), y: lerp(hy, d.bot + H * 0.02, k), a: 1 };
    }
    const k = (p - 0.62) / 0.38;
    return { x: lerp(d.dx, ex, ease(k)), y: lerp(d.bot + H * 0.02, ey, ease(k)), a: 1 - k };
  }
  function gabaDoor(d) {
    const col = C.door;
    // 左右两半门（其实是五个亚基围成的一圈，这里画成两扇）
    for (const side of [-1, 1]) {
      const x0 = side < 0 ? d.dx - d.gap - d.hw : d.dx + d.gap;
      rrect(x0, d.top, d.hw, d.bot - d.top, d.hw * 0.42);
      ctx.fillStyle = col; ctx.fill(); outline(Math.max(1.5, H * 0.005)); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.45)"; rrect(x0 + d.hw * 0.2, d.top + H * 0.02, d.hw * 0.16, (d.bot - d.top) * 0.6, d.hw * 0.08); ctx.fill();
    }
    // GABA 的钥匙孔（圆形）在右半门顶上
    const kx = d.dx + d.gap + d.hw * 0.5, ky = d.top + H * 0.018;
    ctx.beginPath(); ctx.arc(kx, ky, d.hw * 0.2, 0, Math.PI * 2); ctx.fillStyle = "#f3f0ff"; ctx.fill(); outline(1.4); ctx.stroke();
    // 苯二氮䓬的座位（变构位点，方形）在左半门外侧
    const bx = d.dx - d.gap - d.hw, by = d.mem - H * 0.08;
    ctx.beginPath(); ctx.moveTo(bx, by - H * 0.02); ctx.lineTo(bx - d.hw * 0.62, by - H * 0.02); ctx.quadraticCurveTo(bx - d.hw * 0.7, by + H * 0.012, bx - d.hw * 0.5, by + H * 0.016); ctx.lineTo(bx, by + H * 0.016); ctx.closePath();
    ctx.fillStyle = Anima.mix(col, "#ffffff", 0.3); ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.rect(bx - d.hw * 0.4, by - H * 0.012, d.hw * 0.2, d.hw * 0.2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.2); ctx.stroke();
    if (openLv > 0.3) glow(d.dx, d.mem, H * 0.12, C.chl, openLv);
    return { key: { x: kx, y: d.top }, seat: { x: bx - d.hw * 0.32, y: by - H * 0.02 } };
  }
  function doorView(a) {
    const d = geoD();
    ctx.save(); ctx.globalAlpha *= a;
    // 上面是细胞外，下面是神经元里面
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#f4fbff"); bg.addColorStop(0.55, C.out); bg.addColorStop(0.6, C.cell); bg.addColorStop(1, "#ffeef0");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.8, 70);
    Anima.petals(8, 0.45, 21);
    // 神经元的膜
    const mt = H * 0.035;
    ctx.fillStyle = C.mem; ctx.fillRect(-5, d.mem - mt, W + 10, mt * 2);
    outline(Math.max(1.5, H * 0.005));
    ctx.beginPath(); ctx.moveTo(-5, d.mem - mt); ctx.lineTo(W + 5, d.mem - mt); ctx.moveTo(-5, d.mem + mt); ctx.lineTo(W + 5, d.mem + mt); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    for (let x = 6; x < W; x += Math.max(9, H * 0.026)) {
      ctx.beginPath(); ctx.arc(x, d.mem - mt * 0.55, Math.max(1.5, H * 0.006), 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(x, d.mem + mt * 0.55, Math.max(1.5, H * 0.006), 0, Math.PI * 2); ctx.fill();
    }
    text("细胞外", W * 0.94, d.mem - mt - H * 0.035, Math.max(10, H * 0.026) * Anima.UI, C.soft, "right");
    text("神经元里面", W * 0.94, d.mem + mt + H * 0.04, Math.max(10, H * 0.026) * Anima.UI, C.soft, "right");
    // 神经元的脸：越多 Cl⁻ 流进来越平静
    const nf = { x: W * 0.16, y: H * 0.82, s: H * 0.075 };
    const mood = lerp(-1, 1, calm);
    if (calm < 0.45) {
      for (let k = 0; k < 3; k++) Anima.bolt(nf.x + (k - 1) * nf.s * 1.3, nf.y - nf.s * 1.4 + Math.sin(time * 12 + k) * 3, nf.s * 0.3, (0.45 - calm) * 2, C.gold);
    }
    face(nf.x, nf.y, nf.s, mood);
    if (calm < 0.35) Anima.sweat(nf.x + nf.s * 0.9, nf.y - nf.s * 0.8, nf.s * 0.35);
    if (calm > 0.7) emote("sparkle", nf.x + nf.s * 1.1, nf.y - nf.s * 0.9, nf.s * 0.6);
    // 兴奋度小仪表
    const mw = W * 0.12, mx = nf.x - mw / 2, my = nf.y + nf.s * 0.75;
    rrect(mx, my, mw, H * 0.022, H * 0.011); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
    rrect(mx + 2, my + 2, Math.max(2, (mw - 4) * (1 - calm * 0.85)), H * 0.022 - 4, H * 0.009); ctx.fillStyle = Anima.mix(C.good, C.bad, 1 - calm); ctx.fill();
    text("兴奋度", mx + mw + H * 0.012, my + H * 0.012, Math.max(9, H * 0.022) * Anima.UI, C.soft, "left");

    const D = gabaDoor(d);
    // 氯离子
    const ir = H * 0.022;
    for (const o of ions) {
      const q = ionPos(o, d);
      if (q.a < 0.02) continue;
      ctx.save(); ctx.globalAlpha *= q.a; Anima.ion(q.x, q.y, ir, "Cl⁻", C.chl); ctx.restore();
    }
    // 再把门的上半部分盖一层，让离子像是从门缝里穿过去
    // （简单做法：门两侧的边线再描一次）
    outline(Math.max(1.5, H * 0.005));
    for (const side of [-1, 1]) {
      const x0 = side < 0 ? d.dx - d.gap - d.hw : d.dx + d.gap;
      rrect(x0, d.top, d.hw, d.bot - d.top, d.hw * 0.42); ctx.stroke();
    }
    if (openLv > 0.6) sfx("哗——", d.dx + d.hw * 1.8, d.bot + H * 0.06, H * 0.04, C.mintDeep, -0.1, openLv);

    // GABA：从右边走来，站到钥匙孔上
    const gs = H * (narrow() ? 0.056 : 0.046);
    let gx = D.key.x, gy = D.key.y;
    if (cur === 2) { const p = prog(0.3, 2.5); gx = lerp(W + gs * 2, D.key.x, p); gy = lerp(d.top - H * 0.02, D.key.y, p); }
    const gWalk = cur === 2 && lt < 2.8;
    chara(gx, gy, gs, { who: "GABA", arms: gWalk ? "down" : "shh", eyes: gWalk ? "open" : "closed", mouth: "cat", walk: gWalk ? time * 9 : null, dir: -1 });
    // 苯二氮䓬访客：从左边来，坐到侧面的座位上
    let drug = null;
    if (cur === 3) {
      const p = prog(1.5, 2.8);
      const dxp = lerp(-gs * 2, D.seat.x, p), dyp = lerp(d.top - H * 0.02, D.seat.y, p) - Math.sin(p * Math.PI) * H * 0.05;
      const sit = p >= 1;
      chara(dxp, dyp, gs, { who: "drug", label: "苯二氮䓬", hatColor: "#9ad8b0", hatColor2: "#fff1b8",
        arms: sit ? (Math.sin(time * 3) > 0 ? "up" : "fist") : "wave", eyes: sit ? "happy" : "open", mouth: "grin", walk: sit ? null : time * 9, dir: 1 });
      if (sit) sparkles(dxp, dyp - gs * 1.5, gs * 2, 3, 0.8, 5);
      drug = { x: dxp, y: dyp - gs * 3.1 };
    }
    // 开门次数
    if (cur >= 2 && (cur === 3 || lt > 3)) {
      const cx = d.dx + d.hw * 3.4, cy = d.top + H * 0.02, fs = Math.max(11, H * 0.03) * Anima.UI;
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const label = "开门 " + openCount + " 次";
      const tw = ctx.measureText(label).width + fs * 1.2;
      rrect(cx - tw / 2, cy - fs * 0.8, tw, fs * 1.6, fs * 0.8); ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.fill(); outline(1.4); ctx.stroke();
      text(label, cx, cy + 1, fs, cur === 3 && lt > 4.6 ? C.mintDeep : C.ink);
    }

    const on2 = cur === 2, on3 = cur === 3, n = narrow(), topY = H * 0.27;
    callout("d-door", on2 && (n ? win(0.8, 3.2) : win(1, 8)), d.dx - d.gap - d.hw, d.mem, n ? W * 0.3 : W * 0.2, topY, "GABA-A 受体：氯离子门");
    say("d-shh", on2 && win(3.2, n ? 6.5 : 8.5), gx, gy - gs * 3.2, gx + (n ? -W * 0.05 : W * 0.12), H * 0.2, "嘘——安静一点～", "say");
    callout("d-cl", on2 && lt > 5, d.dx, d.bot + H * 0.05, d.dx + W * 0.22, d.bot + H * 0.14, "Cl⁻ 流进神经元");
    callout("d-calm", on2 && lt > 8, W * 0.16, H * 0.76, W * 0.32, H * 0.71, "神经元安静下来");
    if (drug) say("d-help", on3 && win(3.5, n ? 7 : 8.5), drug.x, drug.y, drug.x + W * 0.02, H * 0.2, "只帮忙，不开门～", "say");
    callout("d-seat", on3 && lt > (n ? 7 : 4.5), D.seat.x, D.seat.y + H * 0.02, n ? W * 0.3 : W * 0.18, topY, "变构位点：另一个座位");
    callout("d-freq", on3 && lt > (n ? 9 : 7), d.dx + d.hw * 3.4, d.top + H * 0.05, d.dx + W * 0.22, d.bot + H * 0.14, "门开得更勤了");
    ctx.restore();
  }

  // ================= 小心：两张卡片（第 5 幕） =================
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
  function mug(x, y, s) {
    rrect(x - s * 0.5, y - s * 1.2, s, s * 1.2, s * 0.12); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + s * 0.5, y - s * 0.6, s * 0.28, -1.3, 1.3); ctx.stroke();
    ctx.fillStyle = "#fff"; ctx.beginPath();
    for (const dx of [-0.3, 0, 0.3]) { ctx.moveTo(x + dx * s + s * 0.26, y - s * 1.2); ctx.arc(x + dx * s, y - s * 1.2, s * 0.26, 0, Math.PI * 2); }
    ctx.fill(); ctx.stroke();
    text("酒", x, y - s * 0.55, s * 0.5, C.ink);
  }
  function lungs(x, y, s, breath, pale) {
    const k = 1 + breath * 0.12;
    const col = Anima.mix("#ffb3c1", "#e2dde6", pale);
    ctx.lineCap = "round"; outline(Math.max(2, s * 0.08));
    ctx.beginPath(); ctx.moveTo(x, y - s * 1.2); ctx.lineTo(x, y - s * 0.4); ctx.stroke();
    for (const d of [-1, 1]) {
      ctx.beginPath(); ctx.ellipse(x + d * s * 0.55 * k, y + s * 0.15, s * 0.48 * k, s * 0.72 * k, d * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = col; ctx.fill(); outline(Math.max(1.5, s * 0.06)); ctx.stroke();
    }
    face(x, y + s * 0.2, s * 0.45, pale > 0.5 ? -1 : 1);
  }
  function warnView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f7effd");
    Anima.petals(10, 0.6, 52);
    const top = H * 0.24, ch = H * 0.72, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "慢慢减，别骤停", "#d9f3e6");
    card(R.x, R.y, R.w, R.h, "别配酒和阿片类", "#ffe0e0");
    const s = Math.min(H * 0.04, cw * 0.07);
    const fsm = Math.max(11, Math.min(H * 0.032, cw * 0.06)) * Anima.UI;
    // 左：楼梯一步一步往下走
    // 手机上卡片窄：楼梯往右挪，“突然停”靠左排，下楼梯的访客不压住这几个字
    const nw = narrow();
    const n = 5, x0 = L.x + L.w * (nw ? 0.42 : 0.3), y0 = L.y + L.h * 0.3, sw = L.w * (nw ? 0.105 : 0.12), sh = L.h * 0.075;
    for (let i = 0; i < n; i++) {
      rrect(x0 + i * sw, y0 + i * sh, sw * 1.02, sh * 0.45, sh * 0.14); ctx.fillStyle = "#cfeedd"; ctx.fill(); outline(1.4); ctx.stroke();
    }
    const cyc = (lt * 0.55) % n, step = Math.floor(cyc), hop = ease((cyc - step - 0.6) / 0.4);
    const sx = x0 + (step + 0.5 + hop) * sw, sy = y0 + (step + hop) * sh - Math.sin(hop * Math.PI) * sh * 0.5;
    chara(sx, sy, s, { who: "drug", label: "苯二氮䓬", hatColor: "#9ad8b0", hatColor2: "#fff1b8", arms: "wave", eyes: "happy", dir: 1 });
    text("✓ 慢慢减量", x0 + sw * (nw ? 2.8 : 3.2), y0 + n * sh + fsm * 0.8, fsm, C.mintDeep);
    // 左：突然停——直接跳下去
    const ax = L.x + L.w * 0.14, ay0 = y0 - sh * 0.2, ay1 = L.y + L.h * 0.62;
    ctx.save(); ctx.setLineDash([5, 6]); ctx.strokeStyle = C.bad; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(ax, ay0); ctx.lineTo(ax, ay1 - s * 1.2); ctx.stroke(); ctx.restore();
    ctx.fillStyle = C.bad; ctx.beginPath(); ctx.moveTo(ax - s * 0.3, ay1 - s * 1.3); ctx.lineTo(ax + s * 0.3, ay1 - s * 1.3); ctx.lineTo(ax, ay1 - s * 0.8); ctx.closePath(); ctx.fill();
    if (nw) text("✗ 突然停", L.x + L.w * 0.05, ay0 - fsm * 0.9, fsm, C.bad, "left");
    else text("✗ 突然停", ax + fsm * 1.2, ay0 - fsm * 0.9, fsm, C.bad);
    // 反跳：小警报灯又响了
    const blink = 0.5 + 0.5 * Math.sin(time * 9);
    glow(ax, ay1, s * 2.2, C.bad, blink);
    ctx.beginPath(); ctx.arc(ax, ay1 + s * 0.3, s * 0.7, Math.PI, 0); ctx.closePath(); ctx.fillStyle = Anima.mix("#ffd0d6", "#ff7a8a", blink); ctx.fill(); outline(1.4); ctx.stroke();
    for (let k = 0; k < 2; k++) Anima.bolt(ax + (k ? 1 : -1) * s * 1.1, ay1 - s * 0.3, s * 0.35, blink, C.gold);
    text("突然停：焦虑、失眠反弹", L.x + L.w / 2, L.y + L.h * 0.82, fsm * 0.92, C.bad);
    text("严重时甚至抽搐", L.x + L.w / 2, L.y + L.h * 0.82 + fsm * 1.4, fsm * 0.92, C.bad);

    // 右：几位“镇静派”一起压上来，呼吸越来越慢
    const lx = R.x + R.w * 0.5, ly = R.y + R.h * 0.5, ls = Math.min(R.h * 0.13, R.w * 0.16);
    const n3 = (lt > 1 ? 1 : 0) + (lt > 2.8 ? 1 : 0) + (lt > 4.6 ? 1 : 0);
    const slow = ease(n3 / 3);
    const rate = lerp(2.4, 0.9, slow), amp = lerp(1, 0.25, slow);
    lungs(lx, ly, ls, Math.sin(time * rate) * amp, n3 >= 3 ? 0.8 : n3 * 0.2);
    const vis = [
      { x: lx - R.w * 0.3, t: 1, draw: (x, y) => chara(x, y, s, { who: "drug", label: "苯二氮䓬", hatColor: "#9ad8b0", hatColor2: "#fff1b8", arms: "carry", eyes: "closed", dir: 1 }) },
      { x: lx, t: 2.8, draw: (x, y) => mug(x, y, s * 1.2) },
      { x: lx + R.w * 0.3, t: 4.6, draw: (x, y) => chara(x, y, s, { who: "drug", label: "阿片类", hatColor: "#c3a6ec", hatColor2: "#ffffff", arms: "carry", eyes: "closed", dir: -1 }) },
    ];
    const vy = R.y + R.h * 0.26;
    vis.forEach((v) => {
      const p = prog(v.t, 0.8);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      v.draw(v.x, lerp(R.y + R.h * 0.1, vy, p));
      // 往下压的小箭头
      ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.lineCap = "round";
      const ex = lerp(v.x, lx, 0.55), ey = ly - ls * 1.1, bx0 = lerp(v.x, lx, 0.15), by0 = vy + s * 0.5;
      ctx.beginPath(); ctx.moveTo(bx0, by0); ctx.lineTo(ex, ey); ctx.stroke();
      const q = Math.atan2(ey - by0, ex - bx0);
      ctx.beginPath(); ctx.moveTo(ex, ey); ctx.lineTo(ex - Math.cos(q - 0.5) * s * 0.5, ey - Math.sin(q - 0.5) * s * 0.5);
      ctx.moveTo(ex, ey); ctx.lineTo(ex - Math.cos(q + 0.5) * s * 0.5, ey - Math.sin(q + 0.5) * s * 0.5); ctx.stroke();
      ctx.restore();
    });
    // 呼吸曲线
    const wy = R.y + R.h * 0.76, wx0 = R.x + R.w * 0.1, wx1 = R.x + R.w * 0.9;
    ctx.strokeStyle = n3 >= 3 ? C.bad : C.skyDeep; ctx.lineWidth = 2.2; ctx.beginPath();
    for (let k = 0; k <= 60; k++) {
      const t = k / 60, x = lerp(wx0, wx1, t);
      const y = wy - Math.sin(t * 18 * rate / 2.4 - time * rate) * R.h * 0.045 * amp;
      if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke();
    text(n3 >= 3 ? "呼吸被压得又慢又浅" : "呼吸", R.x + R.w / 2, R.y + R.h * 0.88, fsm * 0.92, n3 >= 3 ? C.bad : C.soft);
    if (n3 >= 3) sfx("危险！", R.x + R.w * 0.8, ly - ls * 0.2, Math.min(H * 0.05, R.w * 0.09), C.bad, 0.12, 0.7 + 0.3 * Math.sin(time * 6));
    say("w-step", !narrow() && win(1, 7), sx, sy - s * 3.2, L.x + L.w * 0.7, L.y + L.h * 0.13, "一步一步来～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.bad, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.alarm > 0.02) alarmView(S.alarm);
    if (S.door > 0.02) doorView(S.door);
    if (S.warn > 0.02) warnView(S.warn);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f5a3a3",
    titleCard: { lines: ["心里的警报器", "为什么关不掉？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
