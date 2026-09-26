Anima.register("fear-outputs", {
    "title": "杏仁核的五条广播线",
    "tag": "焦虑与创伤",
    "headline": "一次害怕，为什么身体【五处】一起响？",
    "lede": "杏仁核这座警报塔接到危险信号后，会沿着五条线路同时广播：通往 PAG、下丘脑、蓝斑、臂旁核，还有皮层和海马。每一条线对应一种恐惧反应。惊恐发作，就是好几条线一起猛响。",
    "summary": "杏仁核到 PAG、下丘脑、蓝斑、臂旁核、皮层和海马的五条输出，分别对应僵住逃跑、皮质醇、心跳血压、呼吸和担心；惊恐发作，以及不同治疗调的是哪条线。",
    "chapter": "对应 Stahl《精神药理学精要》第 8 章 · 恐惧回路的输出",
    "footer": "第一次出现心慌、胸闷、喘不过气，请先就医排除心脏等身体问题；药物请遵医嘱使用。",
    "canvasLabel": "杏仁核警报塔向五个脑区拉出五条广播线，分别让身体僵住逃跑、分泌皮质醇、心跳加快、呼吸加快和不停担心的动画",
    "regions": ["amygdala", "brainstem", "hypo"],
    "parts": ["anxiety"],
    "cast": ["NE", "drug"],
    "color": "#f5a3a3"
  }, () => {
  const CH = [
    { title: "警报塔的五条线",
      pill: ["杏仁核", "接到警报"], pill2: ["广播线", "五条"],
      text: "杏仁核这座警报塔一接到危险信号，不会只喊一声。它像广播站一样，沿着几条线路同时向不同的脑区发消息，每一条线对应一种反应：身体怎么动、激素、心跳、呼吸，还有脑子里的想法。Stahl 把它们画在同一张图里，我们一条一条听过去。",
      fact: "杏仁核是恐惧反应的枢纽：不同的输出线路，带来不同的恐惧症状" },
    { title: "PAG 和下丘脑",
      pill: ["PAG", "僵住/逃跑"], pill2: ["下丘脑", "皮质醇"],
      text: "第一条线通往中脑的导水管周围灰质（PAG），它决定身体怎么动：一动不动地僵住，或者拔腿就跑；平时，它表现为回避，远远躲开让人害怕的东西。第二条线通往下丘脑，启动 HPA 轴，让肾上腺放出皮质醇，全身进入备战状态。这条激素接力，在《压力的传话筒》里有完整版。",
      fact: "杏仁核 → PAG：僵住、逃跑、回避；杏仁核 → 下丘脑：HPA 轴和皮质醇" },
    { title: "蓝斑和臂旁核",
      pill: ["蓝斑", "心跳 ↑"], pill2: ["臂旁核", "呼吸 ↑"],
      text: "第三条线通往脑干的蓝斑，它是去甲肾上腺素的老家。蓝斑被叫醒，去甲肾上腺素四处广播，人一下子高度警觉；再加上交感神经，心跳加快、血压升高、手心出汗。第四条线通往脑干的臂旁核，它参与调节呼吸：呼吸变得又快又浅，害怕到极点时，会觉得喘不上气。",
      fact: "杏仁核 → 蓝斑：警觉、心跳和血压；杏仁核 → 臂旁核：呼吸加快" },
    { title: "皮层和海马",
      pill: ["皮层", "担心"], pill2: ["海马", "恐惧记忆"],
      text: "第五条线通往大脑皮层和海马，这一条管的是“想”。皮层反复琢磨“万一呢”，就成了停不下来的担心；海马把当时的场景存进档案，下次遇到相似的声音、地点，恐惧记忆会自己跳出来。所以焦虑不只是身体紧张，还有脑子里转个不停的念头。",
      fact: "杏仁核 → 皮层：担心；杏仁核 → 海马：恐惧记忆被唤起" },
    { title: "惊恐发作：全线猛响",
      pill: ["惊恐发作", "全线猛响"], pill2: ["高峰", "几分钟内"],
      text: "惊恐发作时，常常是好几条线一下子被拉到最大：心怦怦狂跳、喘不过气、手抖头晕，脑子里想着“我是不是要死了”，只想赶快逃开，可周围其实并没有真正的危险。它来得很突然，通常几分钟内到达顶点，再慢慢退去。第一次出现时，要请医生排除心脏等身体问题。",
      fact: "惊恐发作通常在几分钟内达到高峰；首次发作应就医，排除身体疾病" },
    { title: "把音量调小",
      pill: ["β阻滞剂", "心慌手抖"], pill2: ["SSRI", "整体调低"],
      text: "不同的治疗，调的是不同的线。β 受体阻滞剂挡住心脏等器官上的 β 受体，能减轻心慌、手抖这些身体症状，却管不到担心那一条线。SSRI 和 SNRI 则在几周里慢慢把整座警报塔的灵敏度调低，五条线都跟着小声；心理治疗帮大脑重新学会“其实没事”。用哪种办法，请听医生的。",
      fact: "SSRI/SNRI 调低整体敏感度；β 受体阻滞剂只减轻心慌、手抖等部分身体症状" },
  ];
  const DUR = 14;
  const C = Object.assign({}, Anima.C, { tower: "#ffd9bf", towerRed: "#ffb3b3" });
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = {};
  // 五条线：名字、效果、颜色、位置
  const ST = [
    { k: "pag", name: "PAG", eff: "僵住 / 逃跑", col: "#9fc3ea", p: [0.14, 0.8] },
    { k: "hyp", name: "下丘脑", eff: "皮质醇 ↑", col: "#f2b48c", p: [0.16, 0.44] },
    { k: "ctx", name: "皮层 · 海马", eff: "担心 · 恐惧记忆", col: "#b8b0f0", p: [0.5, 0.33] },
    { k: "lc", name: "蓝斑", eff: "心跳 ↑ 血压 ↑", col: "#ec6470", p: [0.84, 0.44] },
    { k: "pb", name: "臂旁核", eff: "呼吸加快", col: "#8fd3a8", p: [0.86, 0.8] },
  ];
  const act = [0, 0, 0, 0, 0];
  const lv = { ring: 0, dial: 0.5, beta: 0 };
  const FOCUS = [null, [0, 1], [3, 4], [2], [0, 1, 2, 3, 4], null];
  function targets() {
    const p = (a, b) => ease((lt - a) / b);
    const t = [0, 0, 0, 0, 0];
    let ring = 1, dial = 0.75;
    if (cur === 0) { ring = lt > 1.5 ? 1 : 0; for (let i = 0; i < 5; i++) t[i] = lt > 2.5 + i * 0.9 ? 0.8 : 0; }
    if (cur >= 1 && cur <= 3) for (let i = 0; i < 5; i++) t[i] = FOCUS[cur].indexOf(i) >= 0 ? 1 : 0.35;
    if (cur === 4) { dial = 0.97; for (let i = 0; i < 5; i++) t[i] = lt > 1 + i * 0.25 ? 1.3 : 0.4; }
    if (cur === 5) { const k = p(7, 6); dial = lerp(0.92, 0.3, k); ring = 1 - k * 0.7; for (let i = 0; i < 5; i++) t[i] = lerp(1, 0.2, k); }
    return { t, ring, dial, beta: cur === 5 ? p(1.5, 1.5) : 0 };
  }
  function update(dt) {
    lt = Anima.sceneTime;
    const g = targets(), k = 1 - Math.exp(-dt * 3);
    for (let i = 0; i < 5; i++) act[i] = lerp(act[i], g.t[i], k);
    lv.ring = lerp(lv.ring, g.ring, k); lv.dial = lerp(lv.dial, g.dial, 1 - Math.exp(-dt * 2)); lv.beta = lerp(lv.beta, g.beta, k);
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fs = (k) => Math.max(10, H * (k || 0.026)) * Anima.UI;
  const panic = () => (cur === 4 ? prog(1, 1.5) : 0);

  function geo() {
    const n = N(), tx = W * 0.5, base = H * 0.97, th = H * 0.42, tw = H * 0.24;
    const cw = Math.min(W * (n ? 0.26 : 0.22), H * 0.38), ch = H * (n ? 0.23 : 0.22);
    const st = ST.map((s, i) => ({ x: W * s.p[0], y: H * (i === 2 ? (n ? 0.36 : 0.33) : s.p[1]) }));
    return { n, tx, base, th, tw, platY: base - th * 0.72, cw, ch, st, lamp: { x: tx, y: base - th * 0.74, r: tw * 0.17 } };
  }
  // ---------- 警报塔（沿用《杏仁核的警报器》的造型） ----------
  function tower(g) {
    const { tx, base, tw, platY } = g, ring = lv.ring, red = ring * (0.5 + 0.5 * Math.sin(time * (cur === 4 ? 14 : 8)));
    const L = g.lamp;
    if (ring > 0.05) {
      ctx.save(); ctx.globalAlpha *= ring * 0.3;
      const q = time * 4;
      for (const k of [0, Math.PI]) {
        ctx.beginPath(); ctx.moveTo(L.x, L.y - L.r * 0.6); ctx.arc(L.x, L.y - L.r * 0.6, H * 0.3, q + k - 0.22, q + k + 0.22); ctx.closePath();
        ctx.fillStyle = "rgba(255,110,120,0.6)"; ctx.fill();
      }
      ctx.restore();
      glow(L.x, L.y - L.r * 0.6, L.r * 3.2, C.bad, ring * (0.6 + 0.4 * Math.sin(time * 10)));
    }
    ctx.beginPath(); ctx.moveTo(tx, platY - H * 0.02);
    ctx.bezierCurveTo(tx + tw * 0.62, platY + H * 0.02, tx + tw * 0.62, base, tx, base);
    ctx.bezierCurveTo(tx - tw * 0.62, base, tx - tw * 0.62, platY + H * 0.02, tx, platY - H * 0.02);
    ctx.fillStyle = mix(C.tower, C.towerRed, red); ctx.fill(); outline(Math.max(1.5, H * 0.005)); ctx.stroke();
    rrect(tx - tw * 0.48, platY - H * 0.012, tw * 0.96, H * 0.03, H * 0.012); ctx.fillStyle = "#fff2e6"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(L.x, L.y, L.r, Math.PI, 0); ctx.closePath(); ctx.fillStyle = mix("#f3e6ea", "#ff7a8a", ring); ctx.fill(); outline(1.8); ctx.stroke();
    // 灵敏度表盘
    const d = { x: tx, y: base - g.th * 0.38, r: tw * 0.25 };
    ctx.beginPath(); ctx.arc(d.x, d.y, d.r * 1.12, Math.PI, 0); ctx.lineTo(d.x + d.r * 1.12, d.y + d.r * 0.22); ctx.lineTo(d.x - d.r * 1.12, d.y + d.r * 0.22); ctx.closePath();
    ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.4); ctx.stroke();
    [C.good, C.gold, C.bad].forEach((c, i) => { ctx.beginPath(); ctx.arc(d.x, d.y, d.r * 0.86, Math.PI + i * Math.PI / 3, Math.PI + (i + 1) * Math.PI / 3); ctx.strokeStyle = c; ctx.lineWidth = d.r * 0.2; ctx.lineCap = "butt"; ctx.stroke(); });
    const q = Math.PI + clamp(lv.dial + (cur === 4 ? Math.sin(time * 20) * 0.02 : 0), 0, 1) * Math.PI;
    outline(Math.max(2, d.r * 0.08)); ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x + Math.cos(q) * d.r * 0.8, d.y + Math.sin(q) * d.r * 0.8); ctx.stroke();
    face(tx, base - g.th * 0.13, tw * 0.15, ring > 0.5 ? -1 : 1);
    if (ring > 0.5) Anima.sweat(tx + tw * 0.25, base - g.th * 0.2, tw * 0.09);
    const f = fs(0.026); ctx.font = `${f}px ${Anima.ROUND}`;
    const w = ctx.measureText("杏仁核").width + f * 1.1, ny = base - g.th * 0.02 - f;
    rrect(tx - w / 2, ny - f * 0.72, w, f * 1.44, f * 0.72); ctx.fillStyle = "rgba(255,255,255,0.94)"; ctx.fill(); outline(1.3); ctx.stroke(); text("杏仁核", tx, ny + 1, f, C.ink);
    return { dial: d };
  }
  // 从塔顶拉出去的广播线
  function cablePts(g, i) {
    const s = g.st[i], a = [g.lamp.x + (i - 2) * g.lamp.r * 0.5, g.lamp.y - g.lamp.r * 0.3];
    const b = [s.x + (s.x < g.tx - 5 ? g.cw * 0.5 : s.x > g.tx + 5 ? -g.cw * 0.5 : 0), s.y + (i === 2 ? g.ch * 0.5 : 0)];
    const m = [lerp(a[0], b[0], 0.5), Math.min(a[1], b[1]) - H * (i === 2 ? 0 : 0.06)];
    const pts = [];
    for (let k = 0; k <= 16; k++) { const t = k / 16; pts.push([(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * m[0] + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * m[1] + t * t * b[1]]); }
    return pts;
  }
  function cable(g, i) {
    const pts = cablePts(g, i), a = clamp(act[i], 0, 1.3), col = ST[i].col;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * (0.008 + 0.006 * a)); ctx.beginPath(); pts.forEach((p, k) => (k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    ctx.strokeStyle = mix("#eee6ea", col, clamp(a, 0, 1)); ctx.lineWidth = Math.max(1.6, H * (0.005 + 0.006 * a)); ctx.stroke();
    if (a > 0.3) { const nS = a > 1.1 ? 3 : a > 0.7 ? 2 : 1; for (let k = 0; k < nS; k++) Anima.spark(pts, (time * (0.4 + a * 0.4) + k / nS) % 1, H * (0.012 + 0.008 * a), col); }
    return pts[8];
  }
  // ---------- 五个站点 ----------
  function card(g, i, dim) {
    const s = g.st[i], w = g.cw, h = g.ch, x = s.x - w / 2, y = s.y - h / 2, a = clamp(act[i], 0, 1.3);
    ctx.save(); ctx.globalAlpha *= dim;
    if (a > 1.05) glow(s.x, s.y, w * 0.7, C.bad, (a - 1) * 2 * (0.6 + 0.4 * Math.sin(time * 12)));
    rrect(x, y, w, h, h * 0.14); ctx.fillStyle = mix("#fffdfb", ST[i].col, 0.12 + 0.12 * clamp(a, 0, 1)); ctx.fill(); outline(1.6); ctx.stroke();
    const f = fs(0.026), f2 = fs(0.022);
    ctx.font = `${f}px ${Anima.ROUND}`;
    const tw = ctx.measureText(ST[i].name).width + f * 1.2;
    rrect(s.x - tw / 2, y - f * 0.75, tw, f * 1.5, f * 0.75); ctx.fillStyle = ST[i].col; ctx.fill(); outline(1.4); ctx.stroke();
    text(ST[i].name, s.x, y + 1, f, C.ink);
    text(ST[i].eff, s.x, y + h - f2 * 0.9, f2, a > 0.6 ? C.bad : C.soft);
    const ix = s.x, iy = y + h * 0.4, sz = h * 0.2;
    ctx.save(); ctx.beginPath(); rrect(x, y + f * 0.6, w, h - f * 0.6 - f2 * 1.7, 0); ctx.clip();
    [pagArt, hypArt, ctxArt, lcArt, pbArt][i](ix, iy, sz, a, w);
    ctx.restore();
    ctx.restore();
    return { x: s.x, y: s.y, top: y, bot: y + h, l: x, r: x + w };
  }
  function pagArt(x, y, s, a, w) {
    const cyc = (time * 0.5) % 1, freeze = a > 0.5 && cyc < 0.5, run = a > 0.5 && !freeze;
    const px = run ? x - w * 0.25 + ((cyc - 0.5) / 0.5) * w * 0.5 : x;
    chara(px, y + s * 2.4, s * 0.85, { hair: "#7a5a48", eye: "#5a3a2a", cloth: freeze ? "#d6ecff" : "#cfe6ff", style: "short", hat: "none", shadow: false,
      eyes: a > 0.5 ? "wide" : "open", mouth: a > 0.5 ? "wavy" : "smile", arms: freeze ? "down" : run ? "up" : "down", walk: run ? time * 16 : null, dir: 1, bob: freeze ? 0 : 1 });
    if (freeze) sfx("僵…", x + s * 1.5, y - s * 0.5, s * 0.7, C.skyDeep, -0.1, 1);
    if (run) sfx("逃！", x - s * 1.6, y - s * 0.6, s * 0.7, C.bad, -0.1, 1);
  }
  function hypArt(x, y, s, a) {
    const hx = x - s * 1.2;
    ctx.beginPath(); ctx.moveTo(hx - s * 1.1, y - s * 0.2); ctx.lineTo(hx, y - s * 1.2); ctx.lineTo(hx + s * 1.1, y - s * 0.2); ctx.closePath(); ctx.fillStyle = "#e8a27c"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(hx - s * 0.85, y - s * 0.2, s * 1.7, s * 1.5, s * 0.15); ctx.fillStyle = "#ffe3c9"; ctx.fill(); outline(1.3); ctx.stroke();
    face(hx, y + s * 0.45, s * 0.4, a > 0.5 ? 0 : 1);
    for (let k = 0; k < 2; k++) {
      if (a < 0.4) break;
      const t = (time * 0.45 + k / 2) % 1;
      chara(lerp(hx + s, x + s * 2.4, t), y + s * 1.4, s * 0.6, { hair: "#f0a64a", eye: "#b8691a", cloth: "#fff0cf", hat: "cap", hatColor: "#ffc26b", style: "pony", walk: time * 10, shadow: false, alpha: Math.sin(t * Math.PI) });
    }
  }
  function ctxArt(x, y, s, a) {
    chara(x - s * 1.4, y + s * 2.2, s * 0.8, { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none", shadow: false, eyes: a > 0.5 ? "teary" : "open", mouth: a > 0.5 ? "wavy" : "smile", brow: a > 0.5 ? "worry" : null, arms: a > 0.5 ? "hug" : "down" });
    // 担心的念头云
    const n = a > 0.5 ? 3 : 1;
    for (let k = 0; k < n; k++) {
      const cx = x + s * (0.4 + k * 0.9), cy = y - s * (0.2 + (k % 2) * 0.6) + Math.sin(time * 2 + k) * s * 0.1, r = s * 0.42;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.1); ctx.stroke();
      text(k === 1 ? "!" : "?", cx, cy + 1, r * 1.1, C.lavDeep);
    }
    // 恐惧记忆卡片
    if (a > 0.5) {
      const mx = x + s * 1.9, my = y + s * 1.1, jig = Math.sin(time * 9) * 0.08;
      ctx.save(); ctx.translate(mx, my); ctx.rotate(-0.15 + jig);
      rrect(-s * 0.6, -s * 0.45, s * 1.2, s * 0.9, s * 0.12); ctx.fillStyle = "#fff4f6"; ctx.fill(); outline(1.1); ctx.stroke();
      Anima.bolt(0, 0, s * 0.35, 1, C.bad);
      ctx.restore();
    }
  }
  function lcArt(x, y, s, a) {
    chara(x - s * 1.5, y + s * 2.3, s * 0.85, { who: "NE", shadow: false, eyes: a > 0.5 ? "wide" : "open", mouth: a > 0.5 ? "open" : "smile", arms: a > 0.5 ? "up" : "down", dir: 1, jump: a > 0.5 ? Math.abs(Math.sin(time * 8)) * 0.2 : 0 });
    const calm = lv.beta, rate = lerp(2.5, lerp(10, 3, calm), clamp(a, 0, 1));
    const beat = 1 + Math.max(0, Math.sin(time * rate)) * 0.25 * clamp(a, 0.2, 1) * (1 - calm * 0.7);
    Anima.heart(x + s * 0.5, y + s * 0.4, s * 0.8 * beat, C.bad);
    if (a > 0.5 && calm < 0.5) sfx("咚咚", x + s * 0.5, y - s * 0.8, s * 0.6, C.bad, -0.1, 0.9);
    if (calm > 0.05) {
      ctx.save(); ctx.globalAlpha *= calm;
      chara(x + s * 2.1, y + s * 2.2, s * 0.75, { who: "drug", label: "β", hatColor: "#9fc3ea", hatColor2: "#fff1b8", arms: "hug", eyes: "happy", dir: -1, shadow: false });
      ctx.restore();
    }
  }
  function pbArt(x, y, s, a) {
    const rate = lerp(2, 9, clamp(a, 0, 1)), amp = lerp(1, 0.45, clamp(a, 0, 1)), br = Math.sin(time * rate) * amp;
    const k = 1 + br * 0.12, lx = x - s * 0.6, ly = y + s * 0.3;
    outline(Math.max(1.5, s * 0.08)); ctx.beginPath(); ctx.moveTo(lx, ly - s * 1.1); ctx.lineTo(lx, ly - s * 0.4); ctx.stroke();
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.ellipse(lx + d * s * 0.5 * k, ly + s * 0.15, s * 0.44 * k, s * 0.66 * k, d * 0.15, 0, Math.PI * 2); ctx.fillStyle = "#ffb3c1"; ctx.fill(); outline(1.3); ctx.stroke(); }
    face(lx, ly + s * 0.2, s * 0.4, a > 0.5 ? -1 : 1);
    const n = a > 0.5 ? 4 : 2;
    for (let j = 0; j < n; j++) {
      const t = (time * rate * 0.16 + j / n) % 1;
      ctx.save(); ctx.globalAlpha *= (1 - t) * 0.9;
      ctx.beginPath(); ctx.arc(lx + s * (1 + t * 1.6), ly - s * 0.9 - t * s * 0.4, s * (0.12 + t * 0.18), 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1); ctx.stroke();
      ctx.restore();
    }
  }
  function snake(x, y, s, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.lineCap = "round";
    const pts = [];
    for (let k = 0; k <= 16; k++) { const t = k / 16; pts.push([x - s * 1.2 + t * s * 2.2, y - s * 0.15 + Math.sin(t * 9 + time * 5) * s * 0.18 * (1 - t * 0.6) - t * t * s * 0.9]); }
    for (const [w, c] of [[s * 0.42, C.line], [s * 0.32, "#9bc47a"]]) { ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); }
    const h = pts[pts.length - 1];
    ctx.beginPath(); ctx.ellipse(h[0] + s * 0.1, h[1], s * 0.34, s * 0.26, 0.2, 0, Math.PI * 2); ctx.fillStyle = "#9bc47a"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(h[0] + s * 0.18, h[1] - s * 0.06, s * 0.06, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    const g = geo(), n = g.n, pa = panic();
    Anima.wash(mix("#fff4ec", "#ffe1e1", pa * 0.8 + (cur === 0 ? 0.2 : 0)), mix("#f5fbf2", "#ffeef0", pa));
    Anima.bokeh(7, pa > 0.5 ? "#ffc2c2" : "#f3dcd6", 0.7, 11);
    if (cur === 5) Anima.petals(10, prog(6, 3) * 0.7, 33);
    if (pa > 0.3) Anima.speedLines(g.tx, g.lamp.y, H * 0.2, 28, pa * 0.6, "rgba(232,99,122,0.25)");
    const mids = ST.map((s, i) => cable(g, i));
    const T = tower(g);
    const F = FOCUS[cur];
    const cards = ST.map((s, i) => card(g, i, F && cur !== 4 ? (F.indexOf(i) >= 0 ? 1 : 0.5) : (cur === 0 ? 0.45 + 0.55 * clamp(act[i] / 0.8, 0, 1) : 1)));
    if (cur === 0) snake(g.tx - g.tw * 0.95, g.base - H * 0.02, H * 0.09, prog(0.3, 0.8));
    // 第 6 幕：SSRI 访客拧表盘
    let ssri = null;
    if (cur === 5) {
      const cs = H * (n ? 0.045 : 0.04), a = prog(6, 1);
      const sx = g.tx + g.tw * 0.62, sy = g.base - H * 0.01;
      chara(sx, sy, cs, { who: "drug", label: "SSRI", hatColor: "#8fdcc4", hatColor2: "#fff1b8", arms: "point", eyes: "happy", dir: -1, alpha: a });
      ssri = { x: sx, y: sy - cs * 3.1 };
    }
    // ---------- 标注和气泡 ----------
    const c = cur, midX = W * 0.5, low = H * 0.6;
    if (c === 0) {
      callout("f0a", win(1, n ? 4.5 : 7), g.tx - g.tw * 0.3, g.base - g.th * 0.3, W * 0.3, H * 0.66, "杏仁核：警报塔");
      say("f0b", lt > (n ? 4.5 : 6.5), g.lamp.x, g.lamp.y - g.lamp.r, W * 0.68, H * 0.64, "五条线，一起广播！", "shout");
    }
    if (c === 1) {
      callout("f1a", win(1.5, n ? 6.5 : 99), cards[0].r, cards[0].y, W * 0.33, H * 0.64, "中脑的导水管周围灰质");
      callout("f1b", lt > (n ? 6.5 : 6), cards[1].r, cards[1].y, W * 0.26, H * 0.2, "HPA 轴 → 肾上腺皮质醇");
    }
    if (c === 2) {
      callout("f2a", win(1.5, n ? 6.5 : 99), cards[3].l, cards[3].y, W * 0.74, H * 0.2, "去甲肾上腺素的老家");
      callout("f2b", lt > (n ? 6.5 : 6), cards[4].l, cards[4].y, W * 0.67, H * 0.64, "呼吸又快又浅");
    }
    if (c === 3) {
      say("f3a", win(1.5, n ? 7 : 99), cards[2].x - g.cw * 0.2, cards[2].bot, W * 0.27, H * 0.66, "万一又发生怎么办…", "think");
      callout("f3b", lt > (n ? 7 : 6), cards[2].r, cards[2].y, W * 0.75, H * 0.64, "海马：恐惧记忆跳出来");
    }
    if (c === 4) {
      sfx("惊恐发作！", W * 0.26, H * 0.22, H * 0.055, C.bad, -0.06, pa * (0.75 + 0.25 * Math.sin(time * 10)));
      say("f4a", lt > (n ? 5 : 4), g.tx, g.base - g.th * 0.2, W * 0.3, H * 0.66, "喘不过气…心要跳出来了！", "shout");
      callout("f4b", lt > (n ? 9.5 : 8), g.tx + g.tw * 0.3, g.base - g.th * 0.3, W * 0.7, H * 0.66, "其实周围没有真正的危险");
    }
    if (c === 5) {
      callout("f5b", win(2, n ? 5 : 6.5), cards[3].r - g.cw * 0.12, cards[3].bot - g.ch * 0.35, W * (n ? 0.68 : 0.74), H * (n ? 0.66 : 0.2), "β 阻滞剂：挡住心脏的 β 受体");
      say("f5c", win(n ? 5 : 3.5, 7), cards[2].x - g.cw * 0.2, cards[2].bot, W * 0.29, H * 0.66, "担心这条线，它管不到哦", "say");
      callout("f5a", lt > 7.5 && !!ssri, T.dial.x + T.dial.r, T.dial.y, W * 0.72, H * 0.66, "SSRI/SNRI：整座塔调小声");
    }
    const cc = CH[cur];
    pill(14, 12, cc.pill[0], cc.pill[1], C.bad, false);
    pill(W - 14, 12, cc.pill2[0], cc.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f5a3a3",
    titleCard: { lines: ["杏仁核的", "五条广播线"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
