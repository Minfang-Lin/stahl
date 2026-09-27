Anima.register("pain", {
    "title": "慢性疼痛：音量调太大的警报",
    "tag": "慢性疼痛",
    "headline": "伤早就好了，为什么还在【痛】？",
    "lede": "疼痛本来是一个有用的警报：伤害信号从手指出发，经过脊髓和丘脑，传到大脑皮层，我们才感到痛。可在慢性疼痛里，脊髓和大脑把警报的音量调得太大，伤好了还响个不停。看看脑干的“调小声”通路，以及药物、运动、睡眠和心理治疗怎样一起帮忙。",
    "summary": "疼痛通路、中枢敏化、神经病理性疼痛与纤维肌痛、下行抑制，以及 SNRI、加巴喷丁类，还有 NSAIDs 和阿片类的注意事项。",
    "chapter": "对应 Stahl《精神药理学精要》第 9 章 · 慢性疼痛",
    "footer": "长期疼痛请到疼痛科或相关专科就诊；止痛药，尤其是阿片类，请严格遵医嘱使用。",
    "canvasLabel": "拟人化的谷氨酸快递员沿着疼痛通路送信，脊髓后角的音量旋钮，以及 5-HT 和去甲肾上腺素从脑干下来把音量调小的动画",
    "regions": ["brainstem"],
    "parts": ["pain"],
    "cast": ["Glu", "NE", "5HT", "drug"],
    "color": "#f7b37a"
  }, () => {
  const CH = [
    { title: "有用的警报", map: 1, cards: 0, meds: 0, team: 0,
      pill: ["急性疼痛", "有用的警报"], pill2: ["路线", "三站接力"],
      text: "手指被仙人掌扎了一下，伤害信号就沿着外周神经出发，先到脊髓后角，再往上经过丘脑，最后到达大脑皮层，我们才“感到”痛，赶紧缩手。这种急性疼痛是一个很有用的警报：提醒我们身体受了伤，要好好保护它。等伤口好了，警报也就停了。",
      fact: "“痛”是大脑读出来的感觉：信号要一路传到大脑皮层，才被感觉为疼痛" },
    { title: "音量调太大了", map: 1, cards: 0, meds: 0, team: 0,
      pill: ["慢性疼痛", "超过3个月"], pill2: ["音量", "调太大"],
      text: "可是有时候，伤明明好了，警报还在响，甚至轻轻碰一下也会痛。这常常是“中枢敏化”：脊髓和大脑把疼痛的音量调得太大，谷氨酸的信号被放大了，一点点输入就变成很响的警报。疼痛持续或反复超过三个月，就叫慢性疼痛。它是真的痛，不是“想出来的”。",
      fact: "中枢敏化：神经系统变得过度敏感，平常不痛的触碰也可能引起疼痛" },
    { title: "慢性疼痛的几种样子", map: 0, cards: 1, meds: 0, team: 0,
      pill: ["神经痛", "神经受伤"], pill2: ["纤维肌痛", "全身痛"],
      text: "慢性疼痛有好几种。神经本身受了伤或出了问题，叫神经病理性疼痛，比如糖尿病神经痛，脚上常常又麻又刺又烧；还有带状疱疹后神经痛，疹子早就好了，那一片皮肤还是痛。纤维肌痛则是全身很多地方酸痛，还常伴着疲劳、睡不好，中枢敏化被认为在其中起了重要作用。",
      fact: "神经病理性疼痛来自神经系统本身的损伤或疾病，普通止痛药常常效果不好" },
    { title: "往下调小声的通路", map: 1, cards: 0, meds: 0, team: 0,
      pill: ["下行抑制", "5-HT + NE"], pill2: ["慢性疼痛", "变弱了"],
      text: "大脑自己也有调小声的办法。从脑干出发，有一条往下走的“下行抑制”通路，5-HT 和去甲肾上腺素沿着它来到脊髓后角，把疼痛的音量调小。在慢性疼痛里，这条通路常常变弱了：下来帮忙的快递员越来越少，音量又慢慢升了回去。",
      fact: "脑干发出的 5-HT、去甲肾上腺素下行通路，能在脊髓里抑制疼痛信号" },
    { title: "药物帮手", map: 0, cards: 0, meds: 1, team: 0,
      pill: ["SNRI", "加强下行路"], pill2: ["加巴喷丁类", "少放谷氨酸"],
      text: "有些药正是来帮这条路加把劲的。SNRI 类药物，比如度洛西汀，还有部分三环类抗抑郁药，挡住 5-HT 和去甲肾上腺素的回收门，让下行抑制更有力。加巴喷丁和普瑞巴林则坐到钙通道的 α2δ 亚基上，让过度兴奋的神经末梢少放一些谷氨酸。它们都要在医生指导下使用。",
      fact: "加巴喷丁类结合电压门控钙通道的 α2δ 亚基，减少过多的谷氨酸释放" },
    { title: "一起把音量调小", map: 0, cards: 0, meds: 0, team: 1,
      pill: ["一起来", "多管齐下"], pill2: ["阿片类", "要谨慎"],
      text: "治疗慢性疼痛，往往要几样办法一起来。规律运动、睡个好觉、心理治疗（比如认知行为治疗），都能帮大脑把音量慢慢调小。常见的消炎止痛药（NSAIDs）主要对炎症引起的疼痛有用；阿片类止痛药用于慢性非癌痛要非常谨慎，长期用可能带来依赖等风险，效果也未必更好。",
      fact: "慢性疼痛常需要多种方法配合；阿片类用于慢性非癌痛应非常谨慎" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    cord: "#ffe6dc", cordDeep: "#f5c6b3", asc: "#ff9a6b", desc: "#5cc49a", brain: "#ffd0dc", brainDeep: "#f4a9bd",
    skin2: "#ffe3d3", cactus: "#8fcf8f",
  });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { map: 1, cards: 0, meds: 0, team: 0 };
  let vol = 0.35; // 脊髓后角的音量（0～1）
  const PERSON = { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none" };

  function volTarget() {
    if (cur === 0) return 0.4;
    if (cur === 1) return lt < 3.4 ? 0.4 : 0.95;
    if (cur === 3) return lt < 2.2 ? 0.9 : (lt < 7.4 ? 0.3 : lerp(0.3, 0.85, ease((lt - 7.4) / 4)));
    return 0.5;
  }
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; if (cur === 3) vol = 0.9; if (cur === 1) vol = 0.4; }
    lt += dt;
    vol = lerp(vol, volTarget(), 1 - Math.exp(-dt * 2.5));
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrow = () => W / H < 1.45;
  const win = (a, b) => lt > a && lt < b;
  const topY = () => Anima.topSafe() + H * 0.02;
  const cfs = () => Math.max(12, W / 58) * Anima.UI;
  const stripY = () => H * 0.9 - (cfs() + 14) / 2;

  // ---------- 小工具 ----------
  function polyPt(pts, t) {
    let len = 0; const seg = [];
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(l); len += l; }
    let d = clamp(t, 0, 1) * len, i = 0;
    while (i < seg.length - 1 && d > seg[i]) { d -= seg[i]; i++; }
    const p0 = pts[i], p1 = pts[i + 1] || p0, k = seg[i] ? d / seg[i] : 0;
    return { x: lerp(p0[0], p1[0], k), y: lerp(p0[1], p1[1], k), dir: p1[0] >= p0[0] ? 1 : -1 };
  }
  function curve(A, B, M, n) {
    const pts = [];
    for (let k = 0; k <= n; k++) { const t = k / n; pts.push([(1 - t) * (1 - t) * A[0] + 2 * (1 - t) * t * M[0] + t * t * B[0], (1 - t) * (1 - t) * A[1] + 2 * (1 - t) * t * M[1] + t * t * B[1]]); }
    return pts;
  }
  function rail(pts, color, w, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.7)"; ctx.lineWidth = Math.max(1, w * 0.18); ctx.setLineDash([w * 0.8, w * 1.2]); ctx.stroke();
    ctx.restore();
  }
  function knob(x, y, r, v, label) {
    // 底座 + 从绿到红的刻度弧 + 指针
    ctx.beginPath(); ctx.arc(x, y, r * 1.35, 0, Math.PI * 2); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(Math.max(1.5, r * 0.06)); ctx.stroke();
    const a0 = Math.PI * 0.75, span = Math.PI * 1.5;
    for (let i = 0; i < 12; i++) {
      const q = a0 + span * (i + 0.5) / 12;
      ctx.strokeStyle = mix(C.good, C.bad, i / 11); ctx.lineWidth = r * 0.22; ctx.lineCap = "butt";
      ctx.beginPath(); ctx.arc(x, y, r * 1.12, q - span / 26, q + span / 26); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(x, y, r * 0.85, 0, Math.PI * 2); ctx.fillStyle = mix("#ffe6c4", "#ffc2c2", v); ctx.fill(); outline(Math.max(1.5, r * 0.06)); ctx.stroke();
    const q = a0 + span * clamp(v, 0, 1);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.14); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * r * 0.2, y + Math.sin(q) * r * 0.2); ctx.lineTo(x + Math.cos(q) * r * 0.75, y + Math.sin(q) * r * 0.75); ctx.stroke();
    if (label) text(label, x, y + r * 1.62, Math.max(10, r * 0.38) * Anima.UI, C.soft);
  }
  function station(x, y, w, h, label, color, gray) {
    const col = gray ? mix(color, "#d8d2d6", gray) : color;
    rrect(x - w / 2, y - h, w, h, h * 0.18); ctx.fillStyle = col; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - w * 0.6, y - h + 2); ctx.lineTo(x, y - h - h * 0.45); ctx.lineTo(x + w * 0.6, y - h + 2); ctx.closePath();
    ctx.fillStyle = mix(col, "#6d5760", 0.18); ctx.fill(); ctx.stroke();
    let fs = Math.max(10, Math.min(h * 0.32, w * 0.2)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(label).width + fs * 0.9;
    if (tw > w * 1.2) { fs *= w * 1.2 / tw; tw = w * 1.2; }
    rrect(x - tw / 2, y - h * 0.55 - fs * 0.7, tw, fs * 1.4, fs * 0.7); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.2); ctx.stroke();
    text(label, x, y - h * 0.55 + 1, fs, C.ink);
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    cardTitle(x, y, w, h, title, color);
  }
  function cardTitle(x, y, w, h, title, color) {
    let fs = Math.max(12, Math.min(W / 40, h * 0.09)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(title).width + fs * 1.4;
    if (tw > w * 0.96) { fs *= w * 0.96 / tw; tw = w * 0.96; }
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  const bannerA = {};
  function banner(key, on, x, y, t, color) {
    const a = bannerA[key] = lerp(bannerA[key] || 0, on ? 1 : 0, 0.1);
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    let fs = cfs();
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(t).width;
    if (tw > W - 40 - fs * 1.6) { fs *= (W - 40 - fs * 1.6) / tw; ctx.font = `${fs}px ${Anima.ROUND}`; tw = ctx.measureText(t).width; }
    const w = tw + fs * 1.6, h = fs * 1.9;
    const bx = clamp(x - w / 2, 8, W - w - 8);
    ctx.save(); ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2;
    rrect(bx, y - h / 2, w, h, h / 2); ctx.fillStyle = "#fffdf6"; ctx.fill(); ctx.restore();
    outline(1.8); rrect(bx, y - h / 2, w, h, h / 2); ctx.stroke();
    ctx.fillStyle = color || C.rose; ctx.beginPath(); ctx.arc(bx + fs * 0.75, y, fs * 0.22, 0, Math.PI * 2); ctx.fill();
    text(t, bx + w / 2 + fs * 0.2, y + 1, fs, C.ink);
    ctx.restore();
  }
  function cactus(x, y, s) {
    ctx.fillStyle = C.cactus; outline(Math.max(1.2, s * 0.06));
    rrect(x - s * 0.28, y - s * 1.4, s * 0.56, s * 1.4, s * 0.28); ctx.fill(); ctx.stroke();
    rrect(x - s * 0.72, y - s * 1.0, s * 0.3, s * 0.55, s * 0.15); ctx.fill(); ctx.stroke();
    rrect(x + s * 0.42, y - s * 1.15, s * 0.3, s * 0.6, s * 0.15); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = "#4f8f4f"; ctx.lineWidth = Math.max(1, s * 0.04);
    for (let k = 0; k < 6; k++) { const yy = y - s * (0.3 + k * 0.18), d = k % 2 ? 1 : -1; ctx.beginPath(); ctx.moveTo(x + d * s * 0.28, yy); ctx.lineTo(x + d * s * 0.42, yy - s * 0.06); ctx.stroke(); }
    rrect(x - s * 0.45, y - s * 0.1, s * 0.9, s * 0.35, s * 0.08); ctx.fillStyle = "#f3b38a"; ctx.fill(); outline(1.2); ctx.stroke();
    face(x, y - s * 0.95, s * 0.22, 1);
  }
  function feather(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(s * 0.5, -s * 0.35, s * 1.4, -s * 0.1); ctx.quadraticCurveTo(s * 0.6, s * 0.3, 0, 0);
    ctx.fillStyle = "#f3f0ff"; ctx.fill(); outline(Math.max(1, s * 0.05)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-s * 0.2, s * 0.05); ctx.lineTo(s * 1.3, -s * 0.08); ctx.stroke();
    ctx.restore();
  }
  function brainBlob(x, y, r, mood, hurt) {
    const col = mix(C.brain, "#ffb0b0", hurt * (0.5 + 0.5 * Math.sin(time * 9)));
    ctx.beginPath();
    for (const [dx, dy, rr] of [[-0.45, 0.05, 0.62], [0.1, -0.2, 0.7], [0.55, 0.08, 0.58], [0, 0.25, 0.65]]) { ctx.moveTo(x + dx * r + rr * r, y + dy * r); ctx.arc(x + dx * r, y + dy * r, rr * r, 0, Math.PI * 2); }
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.05); ctx.stroke(); ctx.fillStyle = col; ctx.fill();
    ctx.save(); ctx.strokeStyle = Anima.alpha(C.brainDeep, 0.8); ctx.lineWidth = Math.max(1.4, r * 0.035); ctx.lineCap = "round";
    for (const [dx, dy] of [[-0.6, -0.1], [0.5, -0.35], [0.7, 0.25], [-0.3, 0.55]]) { ctx.beginPath(); ctx.moveTo(x + dx * r - r * 0.18, y + dy * r); ctx.bezierCurveTo(x + dx * r - r * 0.05, y + dy * r - r * 0.15, x + dx * r + r * 0.05, y + dy * r + r * 0.15, x + dx * r + r * 0.18, y + dy * r); ctx.stroke(); }
    ctx.restore();
    face(x + r * 0.05, y + r * 0.12, r * 0.38, mood);
    if (hurt > 0.5) { Anima.sweat(x + r * 0.6, y - r * 0.4, r * 0.22); }
  }
  function soundWaves(x, y, s, amp, n, color) {
    if (amp < 0.02) return;
    ctx.save(); ctx.lineCap = "round";
    for (let k = 0; k < n; k++) {
      const t = (time * 0.9 + k / n) % 1;
      ctx.globalAlpha = (1 - t) * amp;
      ctx.strokeStyle = color; ctx.lineWidth = Math.max(2, s * 0.14 * amp);
      const r = s * (0.5 + t * 2.4);
      ctx.beginPath(); ctx.arc(x, y, r, -0.6, 0.6); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, r, Math.PI - 0.6, Math.PI + 0.6); ctx.stroke();
    }
    ctx.restore();
  }

  // ================= 疼痛通路地图（第 1、2、4 幕） =================
  function geoM() {
    const n = narrow();
    const cordX = W * (n ? 0.4 : 0.37);
    const horn = { x: cordX, y: H * 0.8 };
    const stem = { x: cordX, y: H * (n ? 0.46 : 0.44) };
    const thal = { x: W * (n ? 0.64 : 0.6), y: H * (n ? 0.4 : 0.36) };
    const cortex = { x: W * (n ? 0.85 : 0.84), y: H * (n ? 0.5 : 0.44), r: H * (n ? 0.1 : 0.11) };
    const hand = { x: W * (n ? 0.13 : 0.12), y: H * 0.82 };
    const cw = H * 0.075; // 脊髓半宽
    const knobP = { x: cordX + H * (n ? 0.16 : 0.17), y: horn.y - H * 0.02, r: H * (n ? 0.06 : 0.055) };
    const periph = curve([hand.x + H * 0.07, hand.y], [cordX - cw * 1.1, horn.y], [(hand.x + cordX) / 2, hand.y + H * 0.04], 12);
    const asc = [[cordX + cw * 0.45, horn.y - H * 0.08], [cordX + cw * 0.45, stem.y + H * 0.02]].concat(
      curve([cordX + cw * 0.45, stem.y], [thal.x - H * 0.06, thal.y - H * 0.02], [cordX + cw * 0.45, thal.y - H * 0.02], 10).slice(1),
      curve([thal.x + H * 0.06, thal.y - H * 0.02], [cortex.x - cortex.r * 0.95, cortex.y - cortex.r * 0.1], [(thal.x + cortex.x) / 2, thal.y - H * 0.06], 10));
    const desc = [[cordX - cw * 0.45, stem.y + H * 0.06], [cordX - cw * 0.45, horn.y - H * 0.08]];
    return { n, cordX, horn, stem, thal, cortex, hand, cw, knobP, periph, asc, desc, cs: H * (n ? 0.045 : 0.042) };
  }
  function arm(g, dx, healed, bandage) {
    const h = g.hand, y = h.y, x = h.x + dx, r = H * 0.045;
    ctx.fillStyle = C.skin2; outline(1.8);
    rrect(-20, y - r * 0.75, x + 20, r * 1.5, r * 0.6); ctx.fill(); ctx.stroke();
    rrect(-20, y - r * 0.85, W * 0.03 + 20, r * 1.7, r * 0.3); ctx.fillStyle = "#cfe6ff"; ctx.fill(); ctx.stroke(); // 袖子
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = C.skin2; ctx.fill(); ctx.stroke();
    rrect(x + r * 0.5, y - r * 0.28, r * 1.35, r * 0.5, r * 0.25); ctx.fill(); ctx.stroke(); // 食指
    if (bandage > 0.02) {
      ctx.save(); ctx.globalAlpha *= bandage;
      rrect(x + r * 1.15, y - r * 0.33, r * 0.45, r * 0.6, r * 0.12); ctx.fillStyle = "#ffe0c2"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    }
    if (healed > 0.02) sparkles(x + r * 1.6, y - r * 0.2, r * 1.2, 4, healed, 5);
    return { tip: { x: x + r * 1.85, y } };
  }
  function mapView(a) {
    const g = geoM(), n = g.n;
    ctx.save(); ctx.globalAlpha *= a;
    const c0 = cur === 0, c1 = cur === 1, c3 = cur === 3;
    const hot = c1 ? prog(3.4, 2) : 0;
    Anima.wash(mix("#fff6ee", "#ffeaea", hot * 0.6), mix("#f7f3fd", "#fff0f0", hot * 0.6));
    Anima.bokeh(6, hot > 0.5 ? "#ffc9c9" : "#ffe3c4", 0.7, 23);
    Anima.petals(6, 0.4, 88);
    // 脊髓柱
    const cordTop = g.stem.y - H * 0.02;
    rrect(g.cordX - g.cw, cordTop, g.cw * 2, H - cordTop + 20, g.cw * 0.6);
    ctx.fillStyle = C.cord; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.save(); ctx.strokeStyle = Anima.alpha(C.cordDeep, 0.9); ctx.lineWidth = 1.5;
    for (let y = cordTop + H * 0.08; y < H; y += H * 0.07) { ctx.beginPath(); ctx.moveTo(g.cordX - g.cw * 0.8, y); ctx.lineTo(g.cordX - g.cw * 0.55, y); ctx.moveTo(g.cordX + g.cw * 0.55, y); ctx.lineTo(g.cordX + g.cw * 0.8, y); ctx.stroke(); }
    ctx.restore();
    // 通路
    const descOn = c3 ? 1 - prog(7.4, 2.5) * 0.65 : 0.45;
    rail(g.periph, C.asc, Math.max(4, H * 0.014));
    rail(g.asc, C.asc, Math.max(4, H * 0.014));
    rail(g.desc, C.desc, Math.max(4, H * 0.014), c3 ? descOn : 0.45);
    // 站点
    const sw = H * (n ? 0.2 : 0.18), sh = H * 0.1;
    station(g.stem.x, g.stem.y, sw, sh, "脑干", "#e4e0ff", c3 ? prog(7.4, 2.5) * 0.7 : 0);
    station(g.thal.x, g.thal.y + sh * 0.5, sw * 0.85, sh * 0.9, "丘脑", "#ffe6c4");
    // 脊髓后角：放大器小站
    const hw = H * (n ? 0.22 : 0.2), hh = H * 0.12;
    rrect(g.horn.x - hw / 2, g.horn.y - hh / 2, hw, hh, hh * 0.25); ctx.fillStyle = mix("#fff4e6", "#ffd6d6", vol); ctx.fill(); outline(1.8); ctx.stroke();
    const hfs = Math.max(10, H * 0.03) * Anima.UI;
    text("脊髓后角", g.horn.x, g.horn.y, Math.min(hfs, hw / 5), C.ink);
    // 连着旋钮的小线
    outline(1.5); ctx.beginPath(); ctx.moveTo(g.horn.x + hw / 2, g.horn.y); ctx.lineTo(g.knobP.x - g.knobP.r * 1.35, g.knobP.y); ctx.stroke();
    knob(g.knobP.x, g.knobP.y, g.knobP.r, vol, "音量");
    if (vol > 0.7) glow(g.horn.x, g.horn.y, hw, C.bad, (vol - 0.7) * 3 * (0.6 + 0.4 * Math.sin(time * 7)));
    // 大脑皮层
    const C0 = g.cortex;
    // 本幕的剧情
    let armDx = 0, healed = 0, band = 0, touch = null, painLv = 0;
    const cs = g.cs;
    const couriers = []; // {path, t, s, gray, who, dir}
    if (c0) {
      const tipX = g.hand.x + H * 0.045 * 1.85;
      armDx = -prog(7.3, 0.6) * H * 0.08 + prog(10.5, 1.2) * H * 0.08;
      band = prog(9.2, 1);
      // 快递员：外周 → 后角 → 上行
      const p1 = prog(0.9, 2.2), p2 = prog(3.1, 4);
      if (lt > 0.9 && p1 < 1) couriers.push({ path: g.periph, t: p1, s: cs, who: "Glu" });
      if (p1 >= 1 && p2 < 1) couriers.push({ path: g.asc, t: p2, s: cs, who: "Glu" });
      painLv = win(7, 10) ? 1 : 0;
      void tipX;
    }
    if (c1) {
      healed = 1 - prog(2.6, 0.8);
      const fT = prog(2.4, 1.2);
      touch = { a: prog(2.2, 0.5), t: fT };
      const p1 = prog(3.2, 1.8);
      if (lt > 3.2 && p1 < 1) couriers.push({ path: g.periph, t: p1, s: cs * 0.8, who: "Glu" });
      if (p1 >= 1) {
        for (let k = 0; k < 3; k++) {
          const p = prog(5.1 + k * 0.35, 3);
          if (p < 1) couriers.push({ path: g.asc, t: p, s: cs * (1.1 - k * 0.05), who: "Glu", angry: true });
        }
      }
      painLv = lt > 8 ? 1 : 0;
    }
    if (c3) {
      // 上行信号随音量变多或变少
      const cnt = vol > 0.6 ? 3 : 1;
      for (let k = 0; k < cnt; k++) couriers.push({ path: g.asc, t: ((time * 0.12) + k * 0.12) % 1, s: cs * (vol > 0.6 ? 1 : 0.8), who: "Glu", fade: true, angry: vol > 0.6 });
      // 从脑干往下走的 5-HT 和去甲肾上腺素
      const weak = prog(7.4, 2.5);
      const m = 3;
      for (let k = 0; k < m; k++) {
        if (lt < 0.8 + k * 0.8) continue;
        if (weak > 0.3 && k >= 1) { // 变弱：后面的快递员渐渐消失
          const fadeA = 1 - clamp((weak - 0.3) * 2 - (k - 1) * 0.2, 0, 1);
          if (fadeA < 0.05) continue;
          couriers.push({ path: g.desc, t: ((time * 0.14) + k / m) % 1, s: cs * 0.72, who: k % 2 ? "NE" : "5HT", alpha: fadeA, gray: weak * 0.6, fade: true });
          continue;
        }
        couriers.push({ path: g.desc, t: ((time * (weak > 0.3 ? 0.07 : 0.14)) + k / m) % 1, s: cs * 0.72, who: k % 2 ? "NE" : "5HT", gray: weak * 0.6, fade: true });
      }
      painLv = vol > 0.7 ? 0.8 : 0;
    }
    brainBlob(C0.x, C0.y, C0.r, painLv > 0.5 ? -1 : 1, painLv);
    text("大脑皮层", C0.x, C0.y + C0.r * 1.05, Math.max(10, H * 0.028) * Anima.UI, C.soft);
    if (painLv > 0.5) {
      soundWaves(C0.x, C0.y, C0.r * 0.9, c1 ? 1 : 0.6, 3, C.bad);
      sfx(c1 ? "好痛！！" : "痛！", C0.x, C0.y - C0.r * 1.25, H * (c1 ? 0.06 : 0.05), C.bad, -0.1, 0.8 + 0.2 * Math.sin(time * 8));
      Anima.speedLines(C0.x, C0.y, C0.r * 1.5, 14, c1 ? 0.35 : 0.2);
    }
    // 手和刺激物
    const A = arm(g, armDx, healed, band);
    if (c0) {
      cactus(g.hand.x + H * 0.2, g.hand.y + H * 0.1, H * 0.1);
      if (win(0.4, 2)) { sfx("扎！", A.tip.x + H * 0.02, A.tip.y - H * 0.08, H * 0.05, C.bad, -0.15, 1); Anima.speedLines(A.tip.x, A.tip.y, H * 0.05, 10, 0.3); }
    }
    if (c1 && touch) {
      const fx = A.tip.x + H * 0.03 + Math.sin(time * 5) * H * 0.01, fy = A.tip.y - H * 0.05 - (1 - touch.t) * H * 0.08;
      ctx.save(); ctx.globalAlpha *= touch.a; feather(fx, fy, H * 0.07, -0.5 + Math.sin(time * 5) * 0.2); ctx.restore();
      if (win(2.8, 4.2)) sfx("轻轻…", fx + H * 0.06, fy - H * 0.05, H * 0.035, C.lavDeep, -0.1, 1);
    }
    if (c1 && healed > 0.3) sfx("伤好啦", A.tip.x + H * 0.04, A.tip.y - H * 0.1, H * 0.035, C.mintDeep, -0.1, healed);
    // 快递员
    const pos = {};
    couriers.forEach((c, i) => {
      const p = polyPt(c.path, c.t);
      const a2 = (c.fade ? Math.sin(c.t * Math.PI) * 1.5 : 1) * (c.alpha == null ? 1 : c.alpha);
      if (a2 < 0.03) return;
      const goingDown = c.path === g.desc;
      chara(p.x, p.y + c.s * 0.8, c.s, { who: c.who, walk: time * 10 + i, item: c.who === "Glu" ? "letter" : null, arms: c.who === "Glu" ? "hold" : "down",
        eyes: c.angry ? "angry" : (goingDown ? "happy" : "open"), mouth: c.angry ? "open" : "smile", dir: goingDown ? 1 : p.dir, alpha: clamp(a2, 0, 1), gray: c.gray || false, shadow: false, letter: "#ffe0d0" });
      if (!pos[c.who]) pos[c.who] = { x: p.x, y: p.y + c.s * 0.8, s: c.s };
    });
    if (c3 && lt > 2 && lt < 7.4) { // 在旋钮边上“嘘”
      const kx = g.knobP.x - g.knobP.r * 0.2, ky = g.knobP.y - g.knobP.r * 1.4;
      chara(g.cordX - g.cw * 0.45, g.horn.y - H * 0.08 + cs * 0.8, cs * 0.9, { who: "5HT", arms: "shh", eyes: "closed", mouth: "cat", dir: 1 });
      sfx("嘘～", kx, ky - H * 0.03, H * 0.035, C.mintDeep, -0.1, 1);
    }
    if (vol > 0.75) sfx("咔咔", g.knobP.x + g.knobP.r * 1.6, g.knobP.y - g.knobP.r * 1.2, H * 0.035, C.bad, 0.1, 0.7);

    // ---------- 标注和气泡 ----------
    const ty = topY(), per = polyPt(g.periph, 0.5), ascMid = polyPt(g.asc, 0.35);
    if (c0) {
      callout("m-per", n ? win(0.8, 3.6) : win(1, 13), per.x, per.y, n ? W * 0.3 : per.x - W * 0.02, n ? ty : H * 0.6, "外周神经：送出伤害信号");
      callout("m-horn", n ? win(4, 6.8) : win(3, 13), g.horn.x, g.horn.y - H * 0.06, n ? W * 0.45 : g.horn.x + W * 0.02, n ? ty : H * 0.18, "脊髓后角：第一站");
      callout("m-ctx", lt > (n ? 7.2 : 7), C0.x, C0.y - C0.r * 0.6, n ? W * 0.6 : C0.x - W * 0.06, n ? ty : H * 0.16, "丘脑 → 大脑皮层：感到“痛”");
      say("m-ouch", win(7.4, 10.5), A.tip.x - H * 0.1, g.hand.y - H * 0.08, n ? W * 0.2 : W * 0.15, H * (n ? 0.52 : 0.36), "哎哟！快缩手！", "shout");
    }
    if (c1) {
      callout("m-soft", n ? win(2.4, 4.8) : win(2.4, 13), A.tip.x, A.tip.y - H * 0.04, n ? W * 0.3 : W * 0.14, n ? ty : H * 0.56, "轻轻一碰也痛");
      callout("m-sens", n ? win(5.2, 7.8) : lt > 4.2, g.knobP.x, g.knobP.y - g.knobP.r * 1.35, n ? W * 0.55 : g.knobP.x + W * 0.1, n ? ty : H * 0.62, "中枢敏化：音量被调大");
      callout("m-glu", n ? lt > 8.2 : lt > 6, ascMid.x, ascMid.y, n ? W * 0.4 : ascMid.x + W * 0.08, n ? ty : H * 0.2, "谷氨酸信号被放大");
      say("m-hurt", lt > 9, C0.x, C0.y - C0.r, n ? W * 0.7 : W * 0.8, H * (n ? 0.78 : 0.8), n ? "伤好了还痛！" : "伤不是好了吗…还痛！", "think");
    }
    if (c3) {
      callout("m-stem", n ? win(0.8, 3.6) : win(0.8, 7.4), g.stem.x - H * 0.09, g.stem.y - H * 0.05, n ? W * 0.3 : W * 0.14, n ? ty : H * 0.2, "脑干：下行抑制通路");
      if (pos["5HT"]) callout("m-down", n ? win(4.2, 7.4) : win(2.6, 7.4), pos["5HT"].x - pos["5HT"].s * 0.6, pos["5HT"].y - pos["5HT"].s * 1.5, n ? W * 0.3 : W * 0.14, n ? ty : H * 0.6, "5-HT、去甲肾上腺素：调小音量");
      callout("m-weak", lt > 8.4, g.cordX - g.cw * 0.45, (g.stem.y + g.horn.y) / 2, n ? W * 0.35 : W * 0.15, n ? ty : H * 0.3, "慢性疼痛：这条路变弱了");
      say("m-shh", win(2.4, 7), g.cordX - g.cw * 0.45, g.horn.y - H * 0.2, g.cordX + W * (n ? 0.22 : 0.16), H * (n ? 0.62 : 0.58), "小声一点～", "say");
    }
    ctx.restore();
  }

  // ================= 几种慢性疼痛（第 3 幕） =================
  function foot(x, y, s, dir) {
    ctx.save(); ctx.translate(x, y); ctx.scale(dir, 1);
    ctx.beginPath(); ctx.moveTo(-s * 0.3, -s * 1.6); ctx.lineTo(-s * 0.3, -s * 0.4); ctx.quadraticCurveTo(-s * 0.4, 0, 0, 0); ctx.lineTo(s * 0.9, 0);
    ctx.quadraticCurveTo(s * 1.2, -s * 0.2, s * 0.9, -s * 0.45); ctx.lineTo(s * 0.3, -s * 0.6); ctx.lineTo(s * 0.3, -s * 1.6); ctx.closePath();
    ctx.fillStyle = C.skin2; ctx.fill(); outline(1.5); ctx.stroke();
    for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(s * (0.55 + k * 0.13), -s * 0.08 - k * s * 0.02, s * 0.08, 0, Math.PI * 2); ctx.stroke(); }
    ctx.restore();
  }
  function cardsView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff7ef", "#f4f0fb");
    Anima.bokeh(5, "#ffe0c4", 0.7, 31);
    const top = topY() + H * 0.06, gap = W * 0.02, cw = (W - gap * 4) / 3, chh = H * 0.8 - top;
    const titles = ["糖尿病神经痛", "带状疱疹后神经痛", "纤维肌痛"];
    const subs = ["脚上麻、刺、烧", "疹子好了，还在痛", "全身痛、累、睡不好"];
    const cols = ["#ffe6c4", "#ffd9e2", "#e4e0ff"];
    const out = [];
    for (let i = 0; i < 3; i++) {
      const x = gap + i * (cw + gap), y = top;
      const p = prog(0.4 + i * 2.2, 0.7);
      if (p < 0.02) { out.push(null); continue; }
      ctx.save(); ctx.globalAlpha *= p;
      card(x, y, cw, chh, titles[i], cols[i]);
      const cx = x + cw / 2, ground = y + chh * 0.78, s = Math.min(chh * 0.13, cw * 0.14);
      const o = {};
      if (i === 0) {
        const fs2 = Math.min(cw * 0.2, chh * 0.2);
        foot(cx - cw * 0.12, ground, fs2, -1); foot(cx + cw * 0.12, ground, fs2, 1);
        for (let k = 0; k < 4; k++) {
          const q = time * 3 + k * 1.7, bx = cx + (k - 1.5) * cw * 0.18, by = ground - fs2 * (0.3 + (k % 2) * 0.5) - Math.abs(Math.sin(q)) * fs2 * 0.15;
          Anima.bolt(bx, by, fs2 * 0.2, 0.6 + 0.4 * Math.sin(q), k % 2 ? C.bad : C.gold);
        }
        sfx("麻麻", cx - cw * 0.25, y + chh * 0.22, Math.min(H * 0.04, cw * 0.12), "#e7a23a", -0.1, 0.5 + 0.5 * Math.sin(time * 4));
        sfx("刺刺", cx + cw * 0.25, y + chh * 0.28, Math.min(H * 0.04, cw * 0.12), C.bad, 0.1, 0.5 + 0.5 * Math.sin(time * 4 + 2));
        o.pt = { x: cx, y: ground - fs2 * 1.2 };
      } else if (i === 1) {
        const px = cx;
        chara(px, ground, s, Object.assign({}, PERSON, { eyes: "open", mouth: "wavy", brow: "worry", arms: "down", dir: 1 }));
        // 身体一侧的一条带子：疹子已经好了（淡淡的点），疼还在（小闪电）
        ctx.save(); ctx.strokeStyle = "rgba(242,140,165,0.35)"; ctx.lineWidth = s * 0.45; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(px - s * 0.62, ground - s * 1.05); ctx.quadraticCurveTo(px, ground - s * 0.8, px + s * 0.62, ground - s * 0.95); ctx.stroke(); ctx.restore();
        for (let k = 0; k < 3; k++) Anima.bolt(px + s * (0.9 + k * 0.45), ground - s * (0.8 + k * 0.35), s * 0.22, 0.6 + 0.4 * Math.sin(time * 5 + k), C.bad);
        sparkle(px - s * 1.2, ground - s * 1.6, s * 0.25, 0.8);
        o.pt = { x: px + s * 0.5, y: ground - s * 0.95 };
      } else {
        const px = cx - cw * 0.05;
        chara(px, ground, s, Object.assign({}, PERSON, { eyes: "sleepy", mouth: "sad", brow: "worry", arms: "down", dir: 1 }));
        const spots = [[-0.9, 2.2], [0.9, 2.1], [-0.7, 1.1], [0.7, 1.0], [-0.4, 0.2], [0.4, 0.25]];
        spots.forEach(([dx, dy], k) => {
          const tw = 0.5 + 0.5 * Math.sin(time * 4 + k * 1.3);
          glow(px + dx * s, ground - dy * s, s * 0.45, C.bad, tw * 0.8);
          ctx.beginPath(); ctx.arc(px + dx * s, ground - dy * s, s * 0.12, 0, Math.PI * 2); ctx.fillStyle = C.bad; ctx.fill();
        });
        emote("zzz", px + s * 1.3, ground - s * 3.2, s * 0.6);
        Anima.sweat(px - s * 1.1, ground - s * 3.0, s * 0.35);
        o.head = { x: px, y: ground - s * 3.2 };
      }
      const sf = Math.max(10, H * 0.03) * Anima.UI;
      text(subs[i], cx, y + chh * 0.9, Math.min(sf, cw / (subs[i].length + 1)), C.ink);
      ctx.restore();
      out.push(o);
    }
    const sy = stripY();
    if (out[0] && out[0].pt) callout("c-neuro", n ? win(2.8, 6.2) : lt > 2.8, out[0].pt.x, out[0].pt.y, n ? W * 0.5 : W * 0.34, sy, n ? "神经本身受了伤" : "神经病理性疼痛：神经本身出了问题");
    if (out[2] && out[2].head) say("c-fibro", lt > 6.4, out[2].head.x, out[2].head.y, n ? W * 0.7 : out[2].head.x, n ? H * 0.9 : top + chh * 0.25, n ? "浑身酸痛…" : "浑身酸痛，还睡不好…", "think");
    ctx.restore();
  }

  // ================= 药物帮手（第 5 幕） =================
  function medsView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff7f0", "#f2f7f2");
    Anima.petals(8, 0.5, 45);
    const top = topY() + H * 0.06, gap = W * 0.03, cw = (W - gap * 3) / 2, ch = H * 0.8 - top;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "SNRI：帮下行路加把劲", "#d9f3e6");
    card(R.x, R.y, R.w, R.h, "加巴喷丁类：少放谷氨酸", "#ffe6c4");
    const s = Math.min(H * (n ? 0.05 : 0.046), cw * 0.08);
    // ---- 左：脑干 → 旋钮 ----
    const sx = L.x + L.w * 0.3, sy = L.y + L.h * 0.34;
    station(sx, sy, L.w * 0.3, L.h * 0.15, "脑干", "#e4e0ff");
    const kx = L.x + L.w * 0.3, ky = L.y + L.h * 0.76, kr = Math.min(L.h * 0.1, L.w * 0.09);
    const path = [[sx, sy + s * 2.2], [kx, ky - kr * 1.5]];
    rail(path, C.desc, Math.max(4, H * 0.013));
    const drugOn = prog(2, 1.5);
    const v = lerp(0.85, 0.35, prog(4, 5));
    knob(kx, ky, kr, v, null);
    text("音量", kx + kr * 1.7, ky + kr * 0.2, Math.max(10, kr * 0.4) * Anima.UI, C.soft, "left");
    // 回收门
    const tx = L.x + L.w * 0.62, tyy = L.y + L.h * 0.56, ts = Math.min(L.h * 0.09, L.w * 0.08);
    Anima.transporter(tx, tyy, ts, "#9fc3ea", time * (drugOn > 0.5 ? 0.3 : 2.5), drugOn > 0.6);
    text("回收门", tx, tyy - ts * 1.3, Math.max(9, ts * 0.38) * Anima.UI, C.soft);
    // 下来的快递员：用药前很快被回收，用药后留下来帮忙
    const nC = drugOn > 0.6 ? 4 : 2;
    const stay = [];
    for (let k = 0; k < nC; k++) {
      const t = (time * 0.18 + k / nC) % 1;
      const p = polyPt(path, Math.min(1, t * 1.25));
      let x = p.x, y = p.y, al = 1;
      if (t > 0.8) {
        const u = (t - 0.8) / 0.2;
        if (drugOn > 0.6) { x = kx + [-1.6, 1.6, -0.6, 0.6][k] * kr; y = ky + kr * ([0.3, 0.3, 1.5, 1.5][k]); stay.push(k); }
        else { x = lerp(p.x, tx, u); y = lerp(p.y, tyy, u); al = 1 - u; }
      }
      chara(x, y + s * 0.8, s * 0.7, { who: k % 2 ? "NE" : "5HT", walk: time * 10 + k, eyes: "happy", mouth: "smile", arms: t > 0.8 && drugOn > 0.6 ? "shh" : "down", alpha: al, shadow: false });
    }
    const dA = prog(1.4, 1.2);
    let dPos = null;
    if (dA > 0.02) {
      const dx = lerp(L.x + L.w * 1.05, tx + ts * 1.6, dA), dy = tyy + ts * 2.2;
      ctx.save(); ctx.globalAlpha *= dA;
      chara(dx, dy, s, { who: "drug", label: "SNRI", tag: n ? "SNRI" : "度洛西汀", hatColor: "#8fdcc4", hatColor2: "#ffcf9e", arms: dA >= 1 ? "point" : "wave", eyes: "happy", dir: -1, walk: dA < 1 ? time * 9 : null });
      ctx.restore();
      dPos = { x: dx, y: dy - s * 3.1 };
    }
    // ---- 右：突触特写 ----
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 18); ctx.clip();
    const tcx = R.x + R.w * 0.45, tw = R.w * 0.62, th = R.h * 0.42;
    const T = Anima.terminal(tcx, R.y + R.h * 0.06, tw, th * 0.9, "#ffd6c4");
    const post = R.y + R.h * 0.84;
    ctx.fillStyle = "#ffe0ea"; ctx.fillRect(R.x, post, R.w, R.h); outline(1.6); ctx.beginPath(); ctx.moveTo(R.x, post); ctx.lineTo(R.x + R.w, post); ctx.stroke();
    ctx.restore();
    const gOn = prog(2.4, 1.5);
    // 钙通道 + α2δ
    const chx = tcx - tw * 0.2, chy = T.bot - H * 0.005, crs = Math.min(R.h * 0.07, R.w * 0.07);
    const open = (time * 0.7) % 1 < (gOn > 0.6 ? 0.2 : 0.55) ? 1 : 0;
    Anima.receptor(chx, chy, crs, "#a9d8ee", open, { dir: -1, shape: "square" });
    const ax = chx - crs * 1.25, ay = chy + crs * 0.9;
    // 钙离子
    const nCa = gOn > 0.6 ? 1 : 3;
    for (let k = 0; k < nCa; k++) {
      const t = (time * 0.8 + k / nCa) % 1;
      if (!open) continue;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      Anima.ion(chx + (k - 1) * crs * 0.3, lerp(chy + crs * 2.2, chy - crs * 1.5, t), Math.max(5, crs * 0.3), "Ca", "#c8f0d8");
      ctx.restore();
    }
    // 谷氨酸快递员被放出来
    const nGlu = gOn > 0.6 ? 1 : 4;
    const recX = [R.x + R.w * 0.3, R.x + R.w * 0.5, R.x + R.w * 0.7];
    recX.forEach((x, i) => Anima.receptor(x, post, crs * 0.9, "#ffd27a", (gOn > 0.6 ? i === 1 : true) ? 0.5 + 0.5 * Math.sin(time * 4 + i) : 0, {}));
    for (let k = 0; k < nGlu; k++) {
      const t = (time * 0.35 + k / nGlu) % 1;
      const x0 = tcx + (k - 1.5) * tw * 0.12, x1 = recX[gOn > 0.6 ? 1 : k % 3];
      const x = lerp(x0, x1, t), y = lerp(T.bot + s * 3.2, post - crs * 1.4, t);
      ctx.save(); ctx.globalAlpha *= Math.min(1, Math.sin(t * Math.PI) * 2);
      chara(x, y, s * 0.72, { who: "Glu", eyes: gOn > 0.6 ? "happy" : "angry", mouth: gOn > 0.6 ? "smile" : "open", walk: time * 10 + k, shadow: false, arms: "down" });
      ctx.restore();
    }
    const gA = prog(1.2, 1.4);
    let gPos = null;
    if (gA > 0.02) {
      const gx = lerp(R.x - s * 2, ax, gA), gy = lerp(R.y + R.h * 0.7, ay + crs * 0.3 + s * 3.3, gA);
      ctx.save(); ctx.globalAlpha *= gA;
      chara(gx, gy, s, { who: "drug", label: "α2δ", tag: n ? "加巴喷丁类" : "加巴喷丁/普瑞巴林", hatColor: "#ffcf6e", hatColor2: "#ffffff", arms: gA >= 1 ? "carry" : "wave", eyes: "happy", mouth: "grin", dir: 1, walk: gA < 1 ? time * 9 : null });
      ctx.restore();
      gPos = { x: gx, y: gy - s * 3.1 };
    }
    // α2δ 小零件画在访客手上面
    ctx.beginPath(); ctx.ellipse(ax, ay, crs * 0.55, crs * 0.4, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe08a"; ctx.fill(); outline(1.3); ctx.stroke();
    text("α2δ", ax, ay + 1, Math.max(9, crs * 0.38) * Anima.UI, C.ink);
    cardTitle(R.x, R.y, R.w, R.h, "加巴喷丁类：少放谷氨酸", "#ffe6c4");
    const sy2 = stripY();
    if (dPos) callout("d-snri", n ? win(2.4, 6.2) : lt > 2.6, tx, tyy + ts * 0.8, n ? W * 0.3 : L.x + L.w * 0.5, sy2, n ? "挡住回收门" : "SNRI、部分三环类：挡住回收门");
    callout("d-a2d", n ? win(6.2, 10) : lt > 4.2, ax, ay + crs * 0.4, n ? W * 0.62 : R.x + R.w * 0.5, sy2, n ? "α2δ：钙通道的小零件" : "α2δ：钙通道上的小零件");
    if (gPos) say("d-glu", lt > (n ? 10 : 7), recX[1], post - crs * 3.2, R.x + R.w * 0.62, R.y + R.h * 0.55, "今天少出门几个～", "say");
    ctx.restore();
  }

  // ================= 一起把音量调小（第 6 幕） =================
  function teamView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff8ec", "#eef8f0");
    Anima.bokeh(6, "#d9f0dc", 0.8, 71);
    Anima.petals(10, 0.7, 12);
    const floor = H * 0.93;
    ctx.fillStyle = "#e3f3d9"; ctx.fillRect(0, floor, W, H - floor); outline(1.4); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    const kx = W * 0.5, ky = H * (n ? 0.5 : 0.44), kr = H * (n ? 0.085 : 0.095);
    const arrive = [0.6, 2.2, 3.8, 5.4];
    let done = 0; arrive.forEach((t) => { if (lt > t + 0.8) done++; });
    const v = lerp(0.9, 0.3, ease(done / 4));
    knob(kx, ky, kr, v, "疼痛音量");
    if (done >= 4) sparkles(kx, ky, kr * 1.8, 6, 1, 4);
    const cs = H * (n ? 0.052 : 0.05);
    const xs = n ? [0.12, 0.37, 0.63, 0.88] : [0.14, 0.38, 0.62, 0.86];
    const labels = ["运动", "睡眠", "心理治疗", "药物"];
    const heads = [];
    for (let i = 0; i < 4; i++) {
      const p = prog(arrive[i], 0.8);
      if (p < 0.02) { heads.push(null); continue; }
      const x = W * xs[i], y = floor;
      ctx.save(); ctx.globalAlpha *= p;
      if (i === 0) chara(x + Math.sin(time * 2) * cs * 0.3, y, cs, Object.assign({}, PERSON, { walk: time * 10, arms: "down", eyes: "happy", mouth: "grin", dir: 1, tag: "运动" }));
      else if (i === 1) {
        // 睡在小月亮上
        const mx = x, my = y - cs * 1.2;
        ctx.beginPath(); ctx.arc(mx, my, cs * 1.3, 0.2, Math.PI - 0.2); ctx.closePath(); ctx.fillStyle = "#fff4c4"; ctx.fill(); outline(1.4); ctx.stroke();
        chara(mx, my + cs * 0.5, cs * 0.9, Object.assign({}, PERSON, { eyes: "closed", mouth: "cat", arms: "hug", dir: 1, shadow: false }));
        emote("zzz", mx + cs * 0.8, my - cs * 2.6, cs * 0.6);
        rrect(mx - cs * 0.9, y - cs * 0.05, cs * 1.8, cs * 0.55, cs * 0.27); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); outline(1); ctx.stroke();
        text("睡眠", mx, y + cs * 0.23, cs * 0.42, C.ink);
      } else if (i === 2) {
        chara(x - cs * 0.9, y, cs * 0.9, { hair: "#c98fb0", eye: "#9a5580", cloth: "#fde6ef", style: "long", hat: "none", arms: "point", eyes: "happy", dir: 1, tag: "心理治疗" });
        chara(x + cs * 0.9, y, cs * 0.9, Object.assign({}, PERSON, { arms: "down", eyes: "open", mouth: "smile", dir: -1 }));
        emote("bulb", x + cs * 1.2, y - cs * 3.4, cs * 0.6);
      } else {
        chara(x, y, cs, { who: "drug", label: "药", tag: "药物（遵医嘱）", hatColor: "#8fdcc4", hatColor2: "#ffcf9e", arms: "wave", eyes: "happy", dir: -1 });
      }
      ctx.restore();
      heads.push({ x: W * xs[i], y: floor - cs * 3.4 });
      // 往旋钮送去的小箭头
      if (p >= 1) {
        const t = clamp((lt - arrive[i] - 0.8) / 1.2, 0, 1);
        const A = [W * xs[i], floor - cs * 3.6], B = [kx + (xs[i] - 0.5) * kr * 1.6, ky + kr * 1.2];
        ctx.save(); ctx.globalAlpha *= 0.8; ctx.setLineDash([5, 6]); ctx.strokeStyle = C.mintDeep; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(lerp(A[0], B[0], t), lerp(A[1], B[1], t)); ctx.stroke(); ctx.restore();
        if (t > 0 && t < 1) Anima.heart(lerp(A[0], B[0], t), lerp(A[1], B[1], t), cs * 0.3, C.good);
      }
    }
    const ty = topY();
    callout("t-knob", n ? win(6.2, 8.4) : win(6.2, 13), kx + kr, ky - kr, n ? W * 0.5 : kx + W * 0.2, n ? ty : H * 0.2, "一起把音量慢慢调小");
    if (heads[0]) say("t-walk", win(1.4, 5.4), heads[0].x, heads[0].y, heads[0].x + W * (n ? 0.1 : 0.06), H * (n ? 0.3 : 0.3), "每天走一走～", "say");
    if (n) {
      banner("t-nsaid", win(8.4, 10.8), W / 2, ty + H * 0.04, "消炎止痛药（NSAIDs）：主要对炎症痛", C.warn);
      banner("t-op", lt > 10.8, W / 2, ty + H * 0.04, "阿片类：慢性非癌痛要非常谨慎", C.bad);
    } else {
      say("t-nsaid", lt > 8.4, W * 0.2, H * 0.4, W * 0.2, H * 0.42, "消炎止痛药（NSAIDs）：主要对付炎症引起的疼痛", "box");
      say("t-op", lt > 9.6, W * 0.8, H * 0.4, W * 0.8, H * 0.42, "阿片类：用于慢性非癌痛要非常谨慎", "box");
    }
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e7803a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.map > 0.02) mapView(S.map);
    if (S.cards > 0.02) cardsView(S.cards);
    if (S.meds > 0.02) medsView(S.meds);
    if (S.team > 0.02) teamView(S.team);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f7b37a",
    titleCard: { lines: ["伤早就好了", "为什么还在痛？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
