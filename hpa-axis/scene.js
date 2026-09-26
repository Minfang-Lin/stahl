Anima.register("hpa-axis", {
    "title": "压力的传话筒：HPA 轴",
    "tag": "心境障碍",
    "headline": "压力来了，身体里是谁在【传话】？",
    "lede": "压力来了，大脑和身体之间有一条专门的传话链：下丘脑、垂体、肾上腺，简称 HPA 轴。跟着 CRH、ACTH 和皮质醇三位传话员跑一趟，看看它怎样启动、怎样靠负反馈停下来，以及长期压力为什么会让刹车失灵。",
    "summary": "杏仁核报警、CRH → ACTH → 皮质醇的激素接力、海马和下丘脑的负反馈，以及慢性压力下刹车变弱的恶性循环。",
    "chapter": "对应 Stahl《精神药理学精要》第 6 章 · 压力与 HPA 轴",
    "footer": "如果长期压力大、情绪低落或焦虑，请找医生或心理专业人员聊一聊。",
    "canvasLabel": "拟人化的 CRH、ACTH、皮质醇传话员在下丘脑、垂体和肾上腺之间接力送信，再回到海马投递回执的动画",
    "regions": ["hypo", "hippo", "amygdala"],
    "parts": ["mood"],
    "cast": ["drug"],
    "color": "#f2b48c"
  }, () => {
  const CH = [
    { title: "压力来了：杏仁核报警", fbv: 0, loop: 0, heal: 0,
      pill: ["压力", "来了"], pill2: ["下丘脑", "放 CRH"],
      text: "考试、加班、吵架……压力一来，大脑深处的警报器杏仁核先拉响警报。消息很快传到下丘脑，它是大脑里管激素的小指挥部。下丘脑收到警报，马上派出第一位传话员：促肾上腺皮质激素释放激素，简称 CRH，让它顺着一小段血管，去楼下的垂体报信。",
      fact: "HPA 轴 = 下丘脑（H）→ 垂体（P）→ 肾上腺（A），是身体应对压力的激素系统" },
    { title: "垂体放出 ACTH", fbv: 0, loop: 0, heal: 0,
      pill: ["垂体", "放 ACTH"], pill2: ["走哪条路", "血液"],
      text: "垂体只有豌豆那么大，挂在下丘脑下面。CRH 一到，垂体就被叫醒，放出第二位传话员：促肾上腺皮质激素，简称 ACTH。这一趟路很远，ACTH 不走神经，而是跳进血液，顺着血流一路漂到肚子里，去找趴在两个肾脏顶上的小帽子：肾上腺。",
      fact: "CRH 经垂体门脉这段短血管到达垂体；ACTH 则进入全身血液循环" },
    { title: "肾上腺放出皮质醇", fbv: 0, loop: 0, heal: 0,
      pill: ["肾上腺", "皮质醇 ↑"], pill2: ["身体", "总动员"],
      text: "ACTH 敲开肾上腺外层（皮质）的门，肾上腺就开始分泌压力激素皮质醇。皮质醇随着血液跑遍全身：让血糖升高，把能量送给肌肉和大脑；它还和交感神经、肾上腺素一起，让心跳加快、人更警觉。短时间里，这套总动员帮我们打起精神应对挑战。",
      fact: "皮质醇来自肾上腺皮质；让心跳变快的“急先锋”主要是交感神经和肾上腺素" },
    { title: "负反馈：收到，可以停了", fbv: 1, loop: 0, heal: 0,
      pill: ["负反馈", "踩刹车"], pill2: ["皮质醇", "回落 ↓"],
      text: "好的系统都有刹车。皮质醇随血液回到大脑，停在海马和下丘脑的糖皮质激素受体上，像把回执投进信箱：“收到，可以停了！”于是下丘脑少放 CRH，垂体也少放 ACTH，皮质醇慢慢回落。压力过去以后，身体就这样回到平静。这叫负反馈。",
      fact: "皮质醇作用于海马、下丘脑和垂体的糖皮质激素受体，反过来抑制 HPA 轴" },
    { title: "慢性压力：刹车失灵", fbv: 1, loop: 1, heal: 0,
      pill: ["慢性压力", "一直高"], pill2: ["刹车", "变弱"],
      text: "如果压力一直不走，皮质醇就一直偏高。长期泡在高皮质醇里，海马可能受到影响：营养因子 BDNF 变少，树突变少，受体也跟着减少。海马的“信箱”少了，回执收不到，刹车就变弱；刹车越弱，皮质醇越高，恶性循环就转起来了。海马小树的故事，可以再看看《心情的天气预报》。",
      fact: "高皮质醇 → 海马受影响 → 负反馈变弱 → 皮质醇更高：一个恶性循环" },
    { title: "让环路慢慢恢复", fbv: 1, loop: 0, heal: 1,
      pill: ["环路", "在恢复"], pill2: ["帮手", "四位"],
      text: "研究发现，不少抑郁或焦虑的人 HPA 轴偏于过度活跃，这可能是压力和情绪问题之间的桥梁之一，但并不是每个人都这样。好消息是，这个环路有弹性：好好睡觉、规律运动、和信任的人在一起，以及抗抑郁药、心理治疗等专业治疗，都可能帮海马恢复，让刹车重新灵起来。",
      fact: "海马有可塑性：减轻压力和有效治疗，可能帮助 HPA 轴的负反馈恢复" },
  ];
  const DUR = 14;
  const C = Object.assign({}, Anima.C, { brain: "#f6efff", body: "#fff3ea", blood: "#f39aa6", fb: "#7fb6e6", hippo: "#b7d9f0", house: "#ffe3c9", roof: "#e8a27c", kid: "#e7a39a", adr: "#ffd36e" });
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { fbv: 0, loop: 0, heal: 0 };
  const CRH = { hair: "#a78bd8", eye: "#6b52a8", cloth: "#ece4ff", hat: "cap", hatColor: "#b9a3ee", label: "CRH", style: "short" };
  const ACTH = { hair: "#4fb3a2", eye: "#2f7f72", cloth: "#dcf5ef", hat: "cap", hatColor: "#7fd1c1", label: "ACTH", style: "bob" };
  const CORT = { hair: "#f0a64a", eye: "#b8691a", cloth: "#fff0cf", hat: "cap", hatColor: "#ffc26b", label: "皮质醇", style: "pony" };
  // 每幕里各条传话线的 [开始秒, 停止秒]
  const FL = [
    { crh: [4.5, 99] },
    { crh: [-30, 99], acth: [2, 99] },
    { crh: [-30, 99], acth: [-30, 99], cort: [1.5, 99] },
    { crh: [-30, 5.5], acth: [-30, 7], cort: [-30, 8.5], fb: [0.3, 11.5] },
    { crh: [-30, 99], acth: [-30, 99], cort: [-30, 99], fb: [-30, 99] },
    { crh: [-30, 3], acth: [-30, 4], cort: [-30, 5], fb: [0.5, 99] },
  ];
  const lv = { cort: 0.15, hh: 1, ring: 0, cloud: 0 };
  function targets() {
    const p = (a, b) => ease((lt - a) / b);
    let cort = 0.15, hh = 1, ring = 0, cloud = 0;
    if (cur === 0) { ring = lt > 1.5 ? 1 : 0; cloud = p(0.2, 1); }
    if (cur === 1) { ring = 1; cloud = 1; cort = 0.18; }
    if (cur === 2) { ring = 1; cloud = 1; cort = lerp(0.2, 0.85, p(2.5, 5)); }
    if (cur === 3) { ring = lt < 4 ? 1 : 0; cloud = 1 - p(3, 3); cort = lerp(0.85, 0.22, p(5, 6)); }
    if (cur === 4) { ring = 1; cloud = 1; cort = 0.97; hh = 1 - p(1.5, 7) * 0.75; }
    if (cur === 5) { ring = lt < 4 ? 1 : 0; cloud = 1 - p(2, 4); cort = lerp(0.95, 0.3, p(5, 7)); hh = lerp(0.25, 1, p(2, 8)); }
    return { cort, hh, ring, cloud };
  }
  function update(dt) {
    lt = Anima.sceneTime;
    const t = targets(), k = 1 - Math.exp(-dt * 3);
    for (const key in lv) lv[key] = lerp(lv[key], t[key], k);
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fs = (k) => Math.max(10, H * (k || 0.026)) * Anima.UI;

  // ---------- 几何 ----------
  function geo() {
    const n = N();
    const G = {
      amy: { x: W * 0.13, y: H * 0.93, h: H * 0.27 },
      hip: { x: W * (n ? 0.15 : 0.14), y: H * 0.38, s: H * 0.085 },
      hyp: { x: W * 0.36, y: H * 0.44, s: H * 0.072 },
      pit: { x: W * 0.36, y: H * 0.69, r: H * 0.042 },
      adr: { x: W * 0.64, y: H * 0.8, s: H * 0.07 },
      man: { x: W * 0.87, y: H * 0.94, s: H * (n ? 0.06 : 0.058) },
      top: H * (n ? 0.3 : 0.26),
    };
    G.cloud = { x: W * 0.07, y: H * 0.55 };
    G.vessel = [[G.pit.x, G.pit.y + G.pit.r], [G.pit.x, H * 0.95], [G.adr.x - G.adr.s * 1.6, H * 0.95], [G.adr.x - G.adr.s * 0.4, G.adr.y - G.adr.s * 0.2]];
    G.stalk = [[G.hyp.x, G.hyp.y + G.hyp.s * 0.1], [G.pit.x, G.pit.y - G.pit.r * 0.6]];
    G.toBody = [[G.adr.x + G.adr.s * 0.8, G.adr.y - G.adr.s * 0.4], [G.man.x - G.man.s * 1.8, G.man.y - G.man.s * 0.2]];
    const up = [[G.adr.x + G.adr.s * 0.9, G.adr.y - G.adr.s * 0.9], [G.adr.x + G.adr.s * 0.9, G.top], [G.hyp.x + G.hyp.s * 1.6, G.top]];
    G.fbHyp = up.concat([[G.hyp.x + G.hyp.s * 1.35, G.hyp.y - G.hyp.s * 1.05]]);
    G.fbHip = up.concat([[G.hip.x + G.hip.s * 1.35, G.top], [G.hip.x + G.hip.s * 1.35, G.hip.y - G.hip.s * 0.1]]);
    G.gauge = { x: W * 0.85, y: H * (n ? 0.4 : 0.36), w: W * (n ? 0.2 : 0.18) };
    return G;
  }
  function pp(pts, t) {
    const seg = []; let L = 0;
    for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; }
    let r = clamp(t, 0, 1) * L;
    for (let i = 0; i < seg.length; i++) {
      if (r <= seg[i] || i === seg.length - 1) { const k = seg[i] ? clamp(r / seg[i], 0, 1) : 0; return { x: lerp(pts[i][0], pts[i + 1][0], k), y: lerp(pts[i][1], pts[i + 1][1], k), dx: pts[i + 1][0] - pts[i][0] }; }
      r -= seg[i];
    }
    return { x: pts[0][0], y: pts[0][1], dx: 0 };
  }
  function path(pts) { ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); }
  // 一条传话线上的传话员：从起点陆续出发，走到终点消失
  function flow(key, pts, n, dur, who, s) {
    const f = FL[cur][key];
    if (!f) return [];
    const off = clamp((f[1] - lt) / 1.2, 0, 1), arr = [];
    for (let i = 0; i < n; i++) {
      const raw = (lt - f[0]) / dur - i / n;
      if (raw < 0) continue;
      const t = raw % 1, q = pp(pts, t);
      const a = off * Math.min(1, t * 8, (1 - t) * 6);
      if (f[0] + (Math.floor(raw) + i / n) * dur > f[1]) continue;
      if (a > 0.02) chara(q.x, q.y, s, Object.assign({}, who, { walk: time * 9 + i, alpha: a, shadow: false, dir: q.dx < 0 ? -1 : 1, arms: "hold", item: "letter", eyes: "open", }));
      arr.push({ x: q.x, y: q.y - s * 1.6, t: t });
    }
    return arr;
  }

  // ---------- 小零件 ----------
  function nameTag(t, x, y, col) {
    const f = fs(0.028);
    ctx.font = `${f}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + f * 1.1;
    rrect(x - w / 2, y - f * 0.72, w, f * 1.44, f * 0.72); ctx.fillStyle = "rgba(255,255,255,0.94)"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, f, col || C.ink);
  }
  function cloud(x, y, s, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath();
    for (const b of [[-0.55, 0.1, 0.42], [-0.15, -0.2, 0.55], [0.35, -0.05, 0.48], [0.7, 0.15, 0.35], [0.1, 0.2, 0.5]]) { ctx.moveTo(x + b[0] * s + b[2] * s, y + b[1] * s); ctx.arc(x + b[0] * s, y + b[1] * s, b[2] * s, 0, Math.PI * 2); }
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, s * 0.08); ctx.stroke(); ctx.fillStyle = "#b9b4c9"; ctx.fill();
    face(x + s * 0.05, y + s * 0.02, s * 0.34, -1, false);
    Anima.bolt(x + s * 0.1 + Math.sin(time * 7) * 2, y + s * 0.85, s * 0.35, 0.6 + 0.4 * Math.sin(time * 9), C.gold);
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= a; nameTag("压力", x, y + s * 0.62); ctx.restore();
  }
  function tower(g, ring) {
    const { x, y, h } = g.amy, w = h * 0.5, top = y - h;
    const col = mix("#ffd9bf", "#ffb3b3", ring * (0.5 + 0.5 * Math.sin(time * 8)));
    ctx.beginPath(); ctx.moveTo(x, top + h * 0.12);
    ctx.bezierCurveTo(x + w * 0.62, top + h * 0.18, x + w * 0.62, y, x, y);
    ctx.bezierCurveTo(x - w * 0.62, y, x - w * 0.62, top + h * 0.18, x, top + h * 0.12);
    ctx.fillStyle = col; ctx.fill(); outline(Math.max(1.5, H * 0.004)); ctx.stroke();
    face(x, y - h * 0.3, w * 0.2, ring > 0.5 ? -1 : 1);
    const lx = x, ly = top + h * 0.12, lr = w * 0.2;
    if (ring > 0.05) glow(lx, ly - lr * 0.5, lr * 3.5, C.bad, ring * (0.6 + 0.4 * Math.sin(time * 10)));
    ctx.beginPath(); ctx.arc(lx, ly, lr, Math.PI, 0); ctx.closePath(); ctx.fillStyle = mix("#f3e6ea", "#ff7a8a", ring); ctx.fill(); outline(1.6); ctx.stroke();
    if (ring > 0.5) sfx("呜——", lx - lr * 0.4, ly - lr * 2.6, H * 0.032, C.bad, -0.12, 0.6 + 0.4 * Math.sin(time * 6));
    nameTag("杏仁核", x, y - h * 0.5);
    return { lamp: { x: lx, y: ly - lr } };
  }
  function house(g, busy, calm) {
    const { x, y, s } = g.hyp, w = s * 2.3, h = s * 1.5;
    ctx.beginPath(); ctx.moveTo(x - w * 0.62, y - h); ctx.lineTo(x, y - h - s * 1.1); ctx.lineTo(x + w * 0.62, y - h); ctx.closePath();
    ctx.fillStyle = C.roof; ctx.fill(); outline(1.8); ctx.stroke();
    rrect(x - w / 2, y - h, w, h, s * 0.15); ctx.fillStyle = C.house; ctx.fill(); outline(1.8); ctx.stroke();
    rrect(x - s * 0.28, y - s * 0.7, s * 0.56, s * 0.7, s * 0.2); ctx.fillStyle = busy > 0.5 ? "#fff1b8" : "#f1d6c0"; ctx.fill(); ctx.stroke();
    face(x, y - h * 0.68, s * 0.42, calm ? 1 : (busy > 0.5 ? 0 : 1));
    if (busy > 0.5 && !calm) Anima.sweat(x + s * 0.6, y - h * 0.8, s * 0.22);
    nameTag("下丘脑", x, y - h - s * 0.45);
  }
  function pit(g, on) {
    const { x, y, r } = g.pit;
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, r * 0.35); ctx.lineCap = "round"; path(g.stalk); ctx.stroke();
    ctx.strokeStyle = "#f6c9ae"; ctx.lineWidth = Math.max(1.5, r * 0.22); ctx.stroke();
    if (on > 0.05) glow(x, y, r * 2.4, C.gold, on * 0.8);
    ctx.beginPath(); ctx.ellipse(x, y, r * 1.1, r, 0, 0, Math.PI * 2); ctx.fillStyle = mix("#ffe0c4", "#ffc98a", on); ctx.fill(); outline(1.6); ctx.stroke();
    face(x, y + r * 0.05, r * 0.6, 1);
    nameTag("垂体", x + r * 2.5, y);
  }
  // GR 信箱：皮质醇的“回执”投在这里
  function box(x, y, s, lit, gone) {
    ctx.save(); ctx.globalAlpha *= 1 - gone * 0.75;
    if (lit > 0.05) glow(x, y - s * 0.4, s * 1.6, C.mintDeep, lit);
    rrect(x - s * 0.5, y - s * 0.75, s, s * 0.75, s * 0.18); ctx.fillStyle = mix(C.mint, "#d6d0d4", gone); ctx.fill(); outline(1.4); ctx.stroke();
    ctx.fillStyle = C.line; ctx.fillRect(x - s * 0.28, y - s * 0.55, s * 0.56, Math.max(1.5, s * 0.08));
    ctx.restore();
    if (gone > 0.5) { ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - s * 0.4, y - s * 0.7); ctx.lineTo(x + s * 0.4, y); ctx.moveTo(x + s * 0.4, y - s * 0.7); ctx.lineTo(x - s * 0.4, y); ctx.stroke(); }
  }
  function hippo(g, hh, lit) {
    const { x, y, s } = g.hip, col = mix("#c9c3c9", C.hippo, hh);
    // 树突小枝：健康时枝叶多
    const n = 6;
    for (let i = 0; i < n; i++) {
      const vis = clamp(hh * n - i, 0, 1);
      if (vis < 0.05) continue;
      const q = -2.4 + i * 0.36, bx = x + Math.cos(q) * s * 0.95, by = y + Math.sin(q) * s * 0.75;
      const ex = bx + Math.cos(q) * s * 0.55 * vis, ey = by + Math.sin(q) * s * 0.55 * vis;
      ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(ex, ey); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(ex, ey, s * 0.13 * vis, s * 0.08 * vis, q, 0, Math.PI * 2); ctx.fillStyle = mix("#c4bcc0", "#8fd3a8", hh); ctx.fill(); outline(1); ctx.stroke();
    }
    // 卷起来的海马身体
    const pts = [];
    for (let k = 0; k <= 24; k++) { const t = k / 24, q = -2.6 + t * 4.6, r = s * (0.9 - t * 0.45); pts.push([x + Math.cos(q) * r, y + Math.sin(q) * r * 0.85]); }
    ctx.lineCap = "round";
    for (const [w, c] of [[s * 0.52, C.line], [s * 0.42, col]]) { ctx.strokeStyle = c; ctx.lineWidth = w; path(pts); ctx.stroke(); }
    const hx = pts[0][0], hy = pts[0][1];
    ctx.beginPath(); ctx.arc(hx, hy, s * 0.36, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(1.5); ctx.stroke();
    face(hx, hy, s * 0.3, hh > 0.6 ? 1 : -1);
    if (hh < 0.5) { ctx.fillStyle = Anima.alpha("#8a7f99", 0.5); for (let k = 0; k < 3; k++) ctx.fillRect(hx - s * 0.2 + k * s * 0.2, hy - s * 0.75, 1.5, s * 0.3); }
    nameTag("海马", x, y + s * 0.95);
    // 三个 GR 信箱，受体少了就一个个变灰
    for (let i = 0; i < 3; i++) box(x + s * (0.62 + i * 0.36), y - s * 0.45 + i * s * 0.34, s * 0.36, lit, clamp((0.85 - hh) * 3 - i * 0.6, 0, 1) * (i < 2 ? 1 : 0));
    return { head: { x: hx, y: hy - s * 0.4 }, box: { x: x + s * 1.34, y: y + s * 0.1 } };
  }
  function adrenal(g, on) {
    const { x, y, s } = g.adr;
    ctx.beginPath(); ctx.ellipse(x, y + s * 0.3, s * 0.8, s, 0.15, 0, Math.PI * 2); ctx.fillStyle = C.kid; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x - s * 0.62, y + s * 0.35, s * 0.18, s * 0.28, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff4f0"; ctx.fill(); ctx.stroke();
    if (on > 0.05) glow(x, y - s * 0.7, s * 1.8, C.gold, on);
    ctx.beginPath(); ctx.moveTo(x - s * 0.75, y - s * 0.45); ctx.quadraticCurveTo(x, y - s * 1.7, x + s * 0.75, y - s * 0.45); ctx.quadraticCurveTo(x, y - s * 0.75, x - s * 0.75, y - s * 0.45);
    ctx.fillStyle = mix("#ffe6a8", C.adr, on); ctx.fill(); outline(1.6); ctx.stroke();
    face(x, y - s * 0.85, s * 0.28, 1, false);
    face(x + s * 0.1, y + s * 0.45, s * 0.4, 1);
    nameTag("肾上腺", x, y - s * 1.95);
    text("肾", x + s * 0.1, y + s * 1.0, fs(0.022), C.soft);
  }
  function person(g, lvl) {
    const { x, y, s } = g.man, up = lvl > 0.5;
    chara(x, y, s, { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none", eyes: up ? "wide" : "open", mouth: up ? "grin" : "smile", arms: up ? "fist" : "down", brow: up ? "angry" : null, dir: -1 });
    const beat = 1 + Math.max(0, Math.sin(time * lerp(3, 9, lvl))) * 0.25 * (0.3 + lvl);
    Anima.heart(x - s * 1.5, y - s * 1.7, s * 0.42 * beat, C.bad);
    if (lvl > 0.5) sfx("咚咚", x - s * 1.5, y - s * 2.5, s * 0.45, C.bad, -0.1, 0.9);
    // 血糖：小方糖一块块叠起来
    const nCube = Math.round(1 + lvl * 3), cs = s * 0.34;
    for (let i = 0; i < nCube; i++) { const cx = x + s * 1.35, cy = y - cs * (i + 1) * 1.05; rrect(cx - cs / 2, cy, cs, cs, cs * 0.2); ctx.fillStyle = "#fffdf6"; ctx.fill(); outline(1.2); ctx.stroke(); }
    text("血糖", x + s * 1.35, y + s * 0.35, fs(0.022), C.soft);
    return { heart: { x: x - s * 1.5, y: y - s * 1.7 }, sugar: { x: x + s * 1.35, y: y - cs * nCube }, head: { x, y: y - s * 3.1 } };
  }
  function gauge(g, v) {
    const { x, y, w } = g.gauge, h = H * 0.03;
    text("血里的皮质醇", x, y - h * 1.1, fs(0.024), C.soft);
    rrect(x - w / 2, y, w, h, h / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(x - w / 2 + 2, y + 2, Math.max(h, (w - 4) * clamp(v, 0.05, 1)), h - 4, (h - 4) / 2); ctx.fillStyle = mix(C.good, C.bad, clamp(v * 1.2 - 0.1, 0, 1)); ctx.fill();
  }
  function loopRing(g, a) {
    if (a < 0.02) return;
    const cx = W * 0.56, cy = H * 0.58, r = H * 0.1;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.strokeStyle = Anima.alpha(C.bad, 0.55); ctx.lineWidth = Math.max(3, H * 0.008);
    for (let k = 0; k < 3; k++) {
      const q0 = time * 0.9 + k * Math.PI * 2 / 3, q1 = q0 + 1.6;
      ctx.beginPath(); ctx.arc(cx, cy, r, q0, q1); ctx.stroke();
      const ex = cx + Math.cos(q1) * r, ey = cy + Math.sin(q1) * r, t = q1 + Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(ex + Math.cos(t - 2.5) * 10, ey + Math.sin(t - 2.5) * 10); ctx.lineTo(ex, ey); ctx.lineTo(ex + Math.cos(t + 2.5) * 10, ey + Math.sin(t + 2.5) * 10); ctx.stroke();
    }
    text("恶性循环", cx, cy, fs(0.03), C.bad);
    ctx.restore();
  }
  function helpers(g, a) {
    if (a < 0.02) return [];
    const s = H * (N() ? 0.042 : 0.042), xs = [0.75, 0.81, 0.88, 0.94].map((k) => W * k), ys = [0.6, 0.87, 0.6, 0.87].map((k) => H * k), out = [];
    const list = [
      { tag: "睡好", o: { hair: "#8f86e2", cloth: "#e4e0ff", eyes: "sleepy", arms: "hug", style: "long" } },
      { tag: "运动", o: { hair: "#ff9a52", cloth: "#ffe6c4", eyes: "happy", arms: "fist", walk: time * 12 } },
      { tag: "陪伴", o: { hair: "#f29cc0", cloth: "#ffe1ee", eyes: "happy", arms: "wave", style: "bun" } },
      { tag: "治疗", o: { who: "drug", label: "药", hatColor: "#8fdcc4", hatColor2: "#fff1b8", eyes: "happy", arms: "point" } },
    ];
    list.forEach((L, i) => {
      const p = prog(1 + i * 0.7, 0.8);
      if (p <= 0) return;
      const y = ys[i];
      chara(xs[i], y, s, Object.assign({ alpha: a * p, dir: -1 }, L.o));
      ctx.save(); ctx.globalAlpha *= a * p; nameTag(L.tag, xs[i], y + H * 0.045); ctx.restore();
      out.push({ x: xs[i], y: y - s * 3.2 });
      // 送给海马的营养（BDNF 小光点）
      const t = ((lt - 2 - i * 0.5) * 0.35) % 1;
      if (lt > 2 + i * 0.5) {
        const hx = g.hip.x + g.hip.s * 0.2, hy = g.hip.y;
        const bx = lerp(xs[i], hx, t), by = lerp(y - s * 3.4, hy, t) - Math.sin(t * Math.PI) * H * 0.12;
        glow(bx, by, s * 1.4, "#8fe0ff", a * Math.sin(t * Math.PI));
        Anima.sparkle(bx, by, s * 0.6, a * Math.sin(t * Math.PI), "#bff0ff");
      }
    });
    return out;
  }

  function scene() {
    const g = geo(), n = N();
    Anima.wash("#fffaf3", "#fdf0ea");
    Anima.bokeh(7, "#ffd9c7", 0.7, 12);
    if (S.heal > 0.3) Anima.petals(10, S.heal * 0.7, 40);
    // 大脑 / 身体 两块底
    rrect(W * 0.015, H * 0.2, W * 0.47, H * 0.78, H * 0.08); ctx.fillStyle = Anima.alpha(C.brain, 0.9); ctx.fill();
    ctx.save(); ctx.setLineDash([6, 7]); outline(1.4); ctx.stroke(); ctx.restore();
    text("大脑", W * 0.035, H * 0.24, fs(0.026), C.soft, "left");
    text("身体", W * 0.975, H * 0.24, fs(0.026), C.soft, "right");
    // 血管：垂体 → 肾上腺
    for (const [w, c] of [[H * 0.03, C.line], [H * 0.022, C.blood]]) { ctx.strokeStyle = c; ctx.lineWidth = w; ctx.lineJoin = "round"; ctx.lineCap = "round"; path(g.vessel); ctx.stroke(); }
    for (let k = 0; k < 8; k++) { const q = pp(g.vessel, (time * 0.08 + k / 8) % 1); ctx.beginPath(); ctx.ellipse(q.x, q.y, H * 0.008, H * 0.006, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe3e6"; ctx.fill(); }
    // 回程（负反馈）的虚线路
    const fbA = S.fbv;
    if (fbA > 0.02) {
      ctx.save(); ctx.globalAlpha *= fbA; ctx.setLineDash([7, 7]); ctx.lineDashOffset = -time * 20;
      ctx.strokeStyle = C.fb; ctx.lineWidth = Math.max(2, H * 0.006); path(g.fbHyp); ctx.stroke(); path(g.fbHip.slice(2)); ctx.stroke(); ctx.restore();
    }
    // 箭头：皮质醇 → 身体
    ctx.save(); ctx.setLineDash([5, 6]); ctx.strokeStyle = Anima.alpha(C.gold, 0.8); ctx.lineWidth = 2; path(g.toBody); ctx.stroke(); ctx.restore();
    // 杏仁核 → 下丘脑 的神经信号
    const ring = lv.ring;
    const T = tower(g, ring);
    const nerve = [[T.lamp.x + H * 0.03, T.lamp.y + H * 0.02], [g.hyp.x - g.hyp.s * 1.6, g.hyp.y - g.hyp.s * 0.6]];
    ctx.save(); ctx.setLineDash([4, 6]); outline(1.4); path(nerve); ctx.stroke(); ctx.restore();
    if (ring > 0.5) Anima.spark(nerve, (time * 0.7) % 1, H * 0.02, C.bad);
    cloud(g.cloud.x, g.cloud.y + Math.sin(time * 1.2) * 4, H * (cur === 4 ? 0.07 + 0.015 * prog(1, 3) : 0.065), lv.cloud);

    const flowing = (k) => { const f = FL[cur][k]; return f && lt > f[0] && lt < f[1] ? 1 : 0; };
    const crhOn = flowing("crh"), acthOn = flowing("acth"), cortOn = flowing("cort");
    const calm = (cur === 3 && lt > 6) || (cur === 5 && lt > 5);
    house(g, crhOn || (cur === 0 && lt > 3) ? 1 : 0, calm);
    pit(g, acthOn);
    adrenal(g, cortOn);
    const Hp = hippo(g, lv.hh, 0);
    ctx.save(); ctx.globalAlpha *= 1 - S.heal;
    const P = person(g, cortOn ? lv.cort : Math.min(lv.cort, 0.3));
    ctx.restore();
    gauge(g, lv.cort);
    loopRing(g, S.loop * prog(4, 1.5));
    const hs = helpers(g, S.heal);

    // 传话员
    const ms = H * (n ? 0.03 : 0.026);
    const fC = flow("crh", g.stalk, cur === 4 ? 3 : 2, 2.4, CRH, ms * 0.85);
    const fA = flow("acth", g.vessel, cur === 4 ? 5 : 4, 5, ACTH, ms);
    const fK = flow("cort", g.toBody, 3, 3, CORT, ms);
    const a1 = flow("fb", g.fbHyp, 2, 5, CORT, ms * 0.9).filter((q) => q.t > 0.9);
    const a2 = flow("fb", g.fbHip, 2, 6.5, CORT, ms * 0.9).filter((q) => q.t > 0.9);
    const pick = (arr, lo, hi) => { for (const q of arr) if (q.t > lo && q.t < hi) return q; return null; };
    const bad = cur === 4 && lv.hh < 0.6;
    const dockHyp = a1.length > 0, dockHip = a2.length > 0;
    if (dockHyp) glow(g.hyp.x + g.hyp.s * 1.35, g.hyp.y - g.hyp.s * 1.05, g.hyp.s * 0.9, bad ? C.soft : C.mintDeep, 0.8);
    if (dockHip) {
      if (bad) emote("?", Hp.box.x + g.hip.s * 0.5, Hp.box.y - g.hip.s * 0.7, g.hip.s * 0.4);
      else { glow(Hp.box.x, Hp.box.y, g.hip.s * 0.8, C.mintDeep, 0.9); sparkles(Hp.box.x, Hp.box.y, g.hip.s * 0.6, 3, 0.9, 3); }
    }
    // 下丘脑门口也有 GR 信箱
    box(g.hyp.x + g.hyp.s * 1.35, g.hyp.y - g.hyp.s * 0.6, g.hyp.s * 0.42, dockHyp && !bad ? 1 : 0, 0);

    // ---------- 标注和气泡 ----------
    const top = Anima.topSafe() + H * 0.02, c = cur, hi = top + H * 0.03;
    if (c === 0) {
      say("h0a", win(1.6, n ? 4.5 : 6), T.lamp.x, T.lamp.y, T.lamp.x + W * 0.12, top + H * 0.06, "有压力！警报——！", "shout");
      say("h0b", lt > (n ? 4.5 : 5), g.hyp.x + g.hyp.s, g.hyp.y - g.hyp.s * 1.6, W * 0.62, H * 0.42, "收到！CRH，快去垂体！", "say");
      const q = pick(fC, 0.3, 0.8);
      callout("h0c", lt > (n ? 8.5 : 7.5) && !!q, q ? q.x : 0, q ? q.y : 0, W * 0.6, H * 0.62, "CRH：第一位传话员");
    }
    if (c === 1) {
      const q = pick(fA, 0.35, 0.75);
      say("h1b", win(1, n ? 3.5 : 6), g.pit.x + g.pit.r, g.pit.y, W * 0.6, H * 0.5, "ACTH，去肾上腺！", "say");
      callout("h1a", win(3.5, n ? 7.5 : 99) && !!q, q ? q.x : 0, q ? q.y : 0, W * 0.5, H * 0.76, "ACTH：第二位传话员");
      callout("h1c", lt > (n ? 7.5 : 6.5), g.vessel[1][0], H * 0.84, W * 0.56, H * 0.48, "血液：激素的高速路");
    }
    if (c === 2) {
      callout("h2a", win(1.5, n ? 5.5 : 99), g.adr.x - g.adr.s * 0.5, g.adr.y - g.adr.s * 0.9, W * 0.56, H * 0.5, "肾上腺皮质：分泌皮质醇");
      callout("h2b", lt > (n ? 5.5 : 5), P.sugar.x, P.sugar.y, W * 0.84, H * 0.58, "血糖升高，备好能量");
      say("h2c", lt > (n ? 9 : 8), P.head.x, P.head.y, W * 0.66, H * 0.24, "有力气应对啦！", "say");
    }
    if (c === 3) {
      callout("h3a", win(2, n ? 6 : 99), Hp.box.x, Hp.box.y - g.hip.s * 0.3, g.hip.x + W * 0.1, hi, "糖皮质激素受体：信箱");
      say("h3b", lt > (n ? 6 : 4.5), g.hyp.x + g.hyp.s, g.hyp.y - g.hyp.s * 1.6, W * 0.57, H * 0.45, "收到，可以停了～", "say");
      callout("h3c", lt > (n ? 9.5 : 8), g.gauge.x, g.gauge.y + H * 0.035, g.gauge.x - W * 0.04, H * 0.52, "负反馈：皮质醇回落");
    }
    if (c === 4) {
      callout("h4a", win(3, n ? 7 : 99), Hp.head.x, Hp.head.y, g.hip.x + W * 0.12, hi, "海马：BDNF↓，枝叶和信箱变少");
      say("h4b", n ? win(7, 10) : lt > 6, Hp.box.x, Hp.box.y, W * 0.27, H * 0.62, "收不到回执了…", "think");
      callout("h4c", lt > (n ? 10 : 9), g.hyp.x + g.hyp.s * 1.2, g.hyp.y - g.hyp.s * 0.4, W * 0.58, H * 0.44, "刹车弱 → 继续放 CRH");
    }
    if (c === 5) {
      callout("h5a", win(2.5, n ? 6.5 : 99) && hs.length > 2, hs[2] ? hs[2].x : 0, hs[2] ? hs[2].y : 0, W * 0.8, H * 0.47, "帮海马恢复的帮手们");
      say("h5b", lt > (n ? 6.5 : 7), Hp.head.x, Hp.head.y, W * 0.33, H * 0.62, "信箱回来了，又能收到啦！", "say");
    }
  }

  function draw() {
    ctx.fillStyle = "#fffaf3"; ctx.fillRect(0, 0, W, H);
    scene();
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0875a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f2b48c",
    titleCard: { lines: ["压力来了，", "谁在传话？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
