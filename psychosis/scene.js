Anima.register("psychosis", {
    "title": "多巴胺的四条铁路",
    "tag": "精神病",
    "headline": "大脑里的【四条】多巴胺铁路",
    "lede": "幻觉、妄想、没动力、注意力变差……精神分裂症的这些表现，和大脑里几条多巴胺“铁路”的运行有关：有的线路车太多，有的线路车太少。最后再去幕后看看谷氨酸和 5-HT。",
    "summary": "阳性、阴性、认知三组症状，四条多巴胺通路，以及谷氨酸和 5-HT2A 假说：读懂抗精神病药之前的地图。",
    "chapter": "对应 Stahl《精神药理学精要》第 4 章 · 精神病与精神分裂症",
    "footer": "如果自己或身边的人出现幻觉、妄想，或者性格和生活状态明显变了，请尽早找精神科医生：精神分裂症是可以治疗的。",
    "canvasLabel": "大脑里四条多巴胺铁路的动画：多巴胺坐着小火车送信，有的线路太挤，有的线路冷清",
    "regions": ["midbrain", "nac", "pfc", "striatum"],
    "parts": ["psychosis"],
    "cast": ["DA", "Glu", "GABA", "5HT"],
    "color": "#b9a7f0"
  }, () => {
  const CH = [
    { title: "三组表现", sym: 1, map: 0, nac: 0, pfc: 0, glu: 0,
      pill: ["表现", "三组"], pill2: ["本质", "大脑的疾病"],
      text: "精神分裂症的表现大致分三组。阳性症状是“多出来”的体验：听到别人听不到的声音，叫幻觉；坚信一些并不真实的事，叫妄想。阴性症状是“少掉”的东西：表情和情感变淡，没有动力，不想和人来往。认知症状是“变难”的事：注意力、记忆和做计划都变得吃力。它是一种大脑的疾病，不是性格问题，而且可以治疗。",
      fact: "精神分裂症有阳性、阴性、认知三组症状，是一种可以治疗的大脑疾病" },
    { title: "四条多巴胺铁路", sym: 0, map: 1, nac: 0, pfc: 0, glu: 0,
      pill: ["铁路", "4 条"], pill2: ["起点", "中脑、下丘脑"],
      text: "大脑里的多巴胺，像坐着小火车沿固定的铁路送信。三条线从中脑出发：中脑边缘线从腹侧被盖区开到伏隔核，管奖赏和“这件事很重要”的感觉；中脑皮层线开到前额叶，帮忙提供动力、帮助思考；黑质纹状体线从黑质开到纹状体，管动作。第四条是结节漏斗线，从下丘脑开到垂体，管着泌乳素。",
      fact: "四条多巴胺通路：中脑边缘、中脑皮层、黑质纹状体、结节漏斗" },
    { title: "边缘线：车太多", sym: 0, map: 0, nac: 1, pfc: 0, glu: 0,
      pill: ["边缘线", "车太多"], pill2: ["带来", "阳性症状"],
      text: "精神病发作时，中脑边缘线上的多巴胺往往太多，小火车一辆接一辆。伏隔核忙着给普通小事也盖上“特别重要”的章：路人随意看了一眼，好像是在针对自己；耳边好像听到了并不存在的声音。于是出现了妄想和幻觉。这是大脑的“警报”变得太灵敏，并不是人故意胡思乱想。",
      fact: "中脑边缘通路多巴胺过多，被认为和幻觉、妄想这些阳性症状有关" },
    { title: "皮层线：车太少", sym: 0, map: 0, nac: 0, pfc: 1, glu: 0,
      pill: ["皮层线", "车太少"], pill2: ["带来", "阴性和认知"],
      text: "另一边，开往前额叶的中脑皮层线却可能车太少，站台冷冷清清。前额叶是大脑的“总指挥”，多巴胺送不到，人就容易没动力、表情变淡、不想社交，这是阴性症状；注意力、记忆和做计划也跟着变差，这是认知症状。这两组症状往往更顽固，也更影响日常生活，需要长期、耐心的治疗和支持。",
      fact: "中脑皮层通路多巴胺不足，被认为和阴性症状、认知症状有关" },
    { title: "另外两条线", sym: 0, map: 1, nac: 0, pfc: 0, glu: 0,
      pill: ["两条线", "大致正常"], pill2: ["下集", "药物登场"],
      text: "黑质纹状体线和结节漏斗线呢？在还没用药的时候，它们大致运行正常：纹状体里的多巴胺让动作顺畅，垂体那边的多巴胺按住泌乳素，不让它分泌太多。可是抗精神病药在挡住边缘线的同时，往往也会挡到这两条线，带来动作方面的副作用和泌乳素升高。下一集，我们来看药物是怎么工作的。",
      fact: "未经治疗时黑质纹状体、结节漏斗通路大致正常，但抗精神病药会影响它们" },
    { title: "幕后推手", sym: 0, map: 0, nac: 0, pfc: 0, glu: 1,
      pill: ["幕后", "谷氨酸"], pill2: ["还有", "5-HT2A"],
      text: "多巴胺为什么会失衡？一个重要的假说和谷氨酸有关：负责“踩刹车”的 GABA 中间神经元上，谷氨酸的 NMDA 受体功能不足，刹车员就“掉线”了。下游的谷氨酸神经元没人管，过度兴奋，进而让中脑边缘的多巴胺更活跃。另外，5-HT2A 受体过度激活也可能带来幻觉，一些致幻剂就作用在这里。",
      fact: "NMDA 受体功能不足、5-HT2A 受体过度激活，都可能是多巴胺失衡背后的推手" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    brain: "#ffe3ea", brainIn: "#fff1f4", stem: "#ffd9cf", cereb: "#f9d0dc",
    meso: "#f28ca5", cort: "#8f84e0", nigro: "#4fb893", tubero: "#e7a23a", railGray: "#c9bfc6",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { sym: 1, map: 0, nac: 0, pfc: 0, glu: 0 };
  const hl = [1, 1, 1, 1]; // 四条线的高亮程度（平滑过渡）

  const narrow = () => W < 640;
  const topPad = () => Math.max(12, W / 60) * Anima.UI * 1.35 + 14 + 20;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (narrow() ? 1.08 : 1);
  const prog = (t0, d) => ease((lt - t0) / d);
  // mix() 返回 rgb(...) 字符串，不能再拿去混色；这里转回十六进制
  // 变灰（没精神）：直接把角色的颜色往灰色混，不用 ctx.filter（手机上很慢）
  function dull(who, k, o) {
    const c = Object.assign({ skin: C.skin, hatColor: "#ffffff" }, Anima.CAST[who], o || {});
    const g = "#c4c0c6";
    return Object.assign({}, o || {}, { who, hair: mixH(c.hair, g, k), cloth: mixH(c.cloth, "#e6e4e8", k), eye: mixH(c.eye, "#8a8590", k),
      hatColor: mixH(c.hatColor, g, k), skin: mixH(c.skin, "#f1eff1", k * 0.8), blush: k < 0.5 });
  }
  const mixH = (a, b, t) => "#" + mix(a, b, t).match(/\d+/g).map((v) => ("0" + (+v).toString(16)).slice(-2)).join("");

  function hlTarget(i) {
    if (cur === 1) {
      const t0 = 1 + i * 2.6;
      if (lt > 11.6) return 1;
      if (lt < t0) return 0.12;
      return lt < t0 + 2.6 ? 1 : 0.55;
    }
    if (cur === 4) return i >= 2 ? 1 : 0.12;
    return 1;
  }
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
    for (let i = 0; i < 4; i++) hl[i] = lerp(hl[i], hlTarget(i), 1 - Math.exp(-dt * 4));
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
    rrect(x, y, w, h, Math.min(20, w * 0.08)); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, Math.min(20, w * 0.08)); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.036, 12), w * 0.14);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.3;
      rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
    ctx.restore();
  }

  // ---------- 大脑铁路图（侧面看，额头朝左） ----------
  // side：站名牌放在站点的哪一边（L 左、R 右、B 下、T 上）
  const ST = {
    vta: { u: 0.565, v: 0.655, name: "腹侧被盖区", side: "B" },
    sn: { u: 0.625, v: 0.57, name: "黑质", side: "R" },
    nac: { u: 0.25, v: 0.53, name: "伏隔核", side: "L" },
    pfc: { u: 0.12, v: 0.30, name: "前额叶", side: "B" },
    str: { u: 0.40, v: 0.36, name: "纹状体", side: "L" },
    hyp: { u: 0.40, v: 0.70, name: "下丘脑", side: "L" },
    pit: { u: 0.39, v: 0.86, name: "垂体", side: "L" },
  };
  const LINES = [
    { name: "中脑边缘线", color: C.meso, from: "vta", to: "nac", c1: [0.48, 0.68], c2: [0.34, 0.62], tag: [0.39, 0.555] },
    { name: "中脑皮层线", color: C.cort, from: "vta", to: "pfc", c1: [0.56, 0.24], c2: [0.30, 0.04], tag: [0.33, 0.12] },
    { name: "黑质纹状体线", color: C.nigro, from: "sn", to: "str", c1: [0.62, 0.44], c2: [0.51, 0.35], tag: [0.75, 0.47] },
    { name: "结节漏斗线", color: C.tubero, from: "hyp", to: "pit", c1: [0.41, 0.76], c2: [0.40, 0.80], tag: [0.52, 0.87] },
  ];
  function mapGeo(bx, by, bh) {
    const bw = bh * 1.3;
    const P = (u, v) => ({ x: bx + u * bw, y: by + v * bh });
    const st = {};
    Object.keys(ST).forEach((k) => { st[k] = P(ST[k].u, ST[k].v); });
    return { bx, by, bw, bh, P, st };
  }
  const bez = (a, b, c, d, t) => { const u = 1 - t; return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d; };
  function linePt(g, L, t) {
    const a = g.st[L.from], d = g.st[L.to], b = g.P(L.c1[0], L.c1[1]), c = g.P(L.c2[0], L.c2[1]);
    return { x: bez(a.x, b.x, c.x, d.x, t), y: bez(a.y, b.y, c.y, d.y, t) };
  }
  function brainShape(g) {
    const P = g.P;
    const pts = [[0.10, 0.60], [0.00, 0.50, 0.00, 0.20, 0.16, 0.09], [0.30, -0.01, 0.62, -0.03, 0.80, 0.07], [0.97, 0.17, 1.01, 0.42, 0.93, 0.55],
      [0.88, 0.63, 0.78, 0.63, 0.70, 0.61], [0.64, 0.60, 0.60, 0.60, 0.57, 0.62], [0.53, 0.70, 0.46, 0.72, 0.38, 0.71], [0.28, 0.70, 0.17, 0.67, 0.10, 0.60]];
    ctx.beginPath();
    const s = P(pts[0][0], pts[0][1]); ctx.moveTo(s.x, s.y);
    for (let i = 1; i < pts.length; i++) {
      const q = pts[i], a = P(q[0], q[1]), b = P(q[2], q[3]), c = P(q[4], q[5]);
      ctx.bezierCurveTo(a.x, a.y, b.x, b.y, c.x, c.y);
    }
    ctx.closePath();
  }
  function drawBrain(g, a, opt) {
    const o = opt || {};
    const P = g.P, lw = Math.max(1.5, g.bh * 0.006);
    ctx.save(); ctx.globalAlpha *= a;
    // 小脑和脑干（在后面）
    const c0 = P(0.79, 0.71);
    ctx.beginPath(); ctx.ellipse(c0.x, c0.y, g.bw * 0.12, g.bh * 0.1, -0.15, 0, Math.PI * 2);
    ctx.fillStyle = C.cereb; ctx.fill(); outline(lw); ctx.stroke();
    ctx.save(); ctx.strokeStyle = alpha("#d98aa0", 0.5); ctx.lineWidth = lw * 0.8;
    for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.ellipse(c0.x, c0.y + g.bh * 0.02, g.bw * (0.03 + k * 0.03), g.bh * (0.025 + k * 0.022), -0.15, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke(); }
    ctx.restore();
    const s0 = P(0.54, 0.58), s1 = P(0.67, 0.58), s2 = P(0.68, 0.99), s3 = P(0.59, 0.99);
    ctx.beginPath(); ctx.moveTo(s0.x, s0.y); ctx.lineTo(s1.x, s1.y);
    ctx.quadraticCurveTo(P(0.66, 0.8).x, P(0.66, 0.8).y, s2.x, s2.y); ctx.lineTo(s3.x, s3.y);
    ctx.quadraticCurveTo(P(0.56, 0.8).x, P(0.56, 0.8).y, s0.x, s0.y); ctx.closePath();
    ctx.fillStyle = C.stem; ctx.fill(); outline(lw); ctx.stroke();
    // 垂体柄 + 垂体
    const h0 = g.st.hyp, pt = g.st.pit;
    ctx.strokeStyle = C.line; ctx.lineWidth = g.bh * 0.03; ctx.beginPath(); ctx.moveTo(h0.x, h0.y); ctx.lineTo(pt.x, pt.y); ctx.stroke();
    ctx.strokeStyle = "#ffd6c0"; ctx.lineWidth = g.bh * 0.03 - lw * 2; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(pt.x, pt.y, g.bh * 0.045, g.bh * 0.034, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd6c0"; ctx.fill(); outline(lw); ctx.stroke();
    // 大脑
    brainShape(g);
    const gr = ctx.createRadialGradient(P(0.4, 0.35).x, P(0.4, 0.35).y, g.bh * 0.05, P(0.45, 0.35).x, P(0.45, 0.35).y, g.bw * 0.55);
    gr.addColorStop(0, C.brainIn); gr.addColorStop(1, C.brain);
    ctx.fillStyle = gr; ctx.fill(); outline(lw * 1.2); ctx.stroke();
    // 脑回的弯弯线条（装饰）
    ctx.save(); brainShape(g); ctx.clip();
    ctx.strokeStyle = alpha("#e6a3b6", 0.45); ctx.lineWidth = lw; ctx.lineCap = "round";
    const gy = [[0.08, 0.2, 0.2, 0.14, 0.26, 0.24], [0.44, 0.08, 0.5, 0.18, 0.62, 0.12], [0.7, 0.2, 0.78, 0.3, 0.88, 0.26], [0.8, 0.42, 0.72, 0.48, 0.86, 0.52], [0.1, 0.46, 0.16, 0.52, 0.2, 0.44], [0.62, 0.3, 0.7, 0.36, 0.66, 0.44]];
    gy.forEach((q) => { const a1 = P(q[0], q[1]), b1 = P(q[2], q[3]), c1 = P(q[4], q[5]); ctx.beginPath(); ctx.moveTo(a1.x, a1.y); ctx.quadraticCurveTo(b1.x, b1.y, c1.x, c1.y); ctx.stroke(); });
    // 胼胝体：一道浅浅的弧
    ctx.strokeStyle = alpha("#f5c6d3", 0.9); ctx.lineWidth = g.bh * 0.035;
    const k0 = P(0.26, 0.4), k1 = P(0.45, 0.16), k2 = P(0.7, 0.42);
    ctx.beginPath(); ctx.moveTo(k0.x, k0.y); ctx.quadraticCurveTo(k1.x, k1.y, k2.x, k2.y); ctx.stroke();
    ctx.restore();
    if (o.face !== false) face(P(0.74, 0.3).x, P(0.74, 0.3).y, g.bh * 0.045, o.mood == null ? 1 : o.mood);
    ctx.restore();
  }
  function trackPath(g, L) {
    const a = g.st[L.from], d = g.st[L.to], b = g.P(L.c1[0], L.c1[1]), c = g.P(L.c2[0], L.c2[1]);
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.bezierCurveTo(b.x, b.y, c.x, c.y, d.x, d.y);
  }
  function drawTracks(g, a, h) {
    const w = Math.max(4, g.bh * 0.024);
    ctx.save(); ctx.globalAlpha *= a; ctx.lineCap = "round";
    LINES.forEach((L, i) => {
      const k = h[i], col = mix(C.railGray, L.color, 0.25 + 0.75 * k);
      ctx.save(); ctx.globalAlpha *= 0.35 + 0.65 * k;
      if (k > 0.5) { trackPath(g, L); ctx.strokeStyle = alpha(L.color, 0.25 * (k - 0.5) * 2); ctx.lineWidth = w * 3; ctx.stroke(); }
      trackPath(g, L); ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.stroke();
      trackPath(g, L); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke();
      trackPath(g, L); ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = Math.max(1.2, w * 0.28);
      ctx.setLineDash([w * 0.9, w * 1.1]); ctx.lineDashOffset = -time * w * (k > 0.5 ? 2 : 0.5); ctx.stroke(); ctx.setLineDash([]);
      ctx.restore();
    });
    ctx.restore();
  }
  // 一节小车厢，上面坐着一位多巴胺小快递员
  function trainCar(x, y, ang, s, color, rider, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    if (rider) chara(x, y - s * 0.25, s * 0.55, { who: "DA", shadow: false, eyes: rider.eyes || "happy", mouth: rider.mouth || "smile", arms: rider.arms || "down" });
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.abs(ang) > Math.PI / 2 ? ang + Math.PI : ang);
    rrect(-s, -s * 0.5, s * 2, s, s * 0.35); ctx.fillStyle = mix(color, "#ffffff", 0.25); ctx.fill(); outline(Math.max(1, s * 0.12)); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    rrect(-s * 0.7, -s * 0.25, s * 0.5, s * 0.35, s * 0.1); ctx.fill(); rrect(s * 0.2, -s * 0.25, s * 0.5, s * 0.35, s * 0.1); ctx.fill();
    ctx.restore();
    ctx.restore();
  }
  function drawTrains(g, i, n, speed, a, rider) {
    const L = LINES[i], s = Math.max(4, g.bh * 0.03);
    for (let k = 0; k < n; k++) {
      const t = (time * speed + k / n) % 1;
      const p = linePt(g, L, t), q = linePt(g, L, Math.min(1, t + 0.01));
      const ang = Math.atan2(q.y - p.y, q.x - p.x);
      const fade = Math.min(1, t * 8, (1 - t) * 8);
      trainCar(p.x, p.y, ang, s, L.color, rider ? {} : null, a * fade);
    }
  }
  function drawStations(g, a, h, fs) {
    ctx.save(); ctx.globalAlpha *= a;
    const lineOf = { vta: [0, 1], sn: [2], nac: [0], pfc: [1], str: [2], hyp: [3], pit: [3] };
    Object.keys(ST).forEach((k) => {
      const p = g.st[k], d = ST[k], on = Math.max.apply(null, lineOf[k].map((i) => h[i]));
      const col = LINES[lineOf[k][0]].color, r = Math.max(4, g.bh * 0.022);
      ctx.save(); ctx.globalAlpha *= 0.4 + 0.6 * on;
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();
      ctx.strokeStyle = C.line; ctx.lineWidth = r * 0.9; ctx.stroke();
      ctx.strokeStyle = mix(C.railGray, col, on); ctx.lineWidth = r * 0.55; ctx.stroke();
      if (fs) {
        ctx.font = `${fs}px ${Anima.ROUND}`;
        const tw = ctx.measureText(d.name).width + fs * 0.9, gap = r * 1.4;
        const lx = p.x + (d.side === "L" ? -(tw / 2 + gap) : d.side === "R" ? tw / 2 + gap : 0);
        const ly = p.y + (d.side === "B" ? fs * 0.75 + gap : d.side === "T" ? -(fs * 0.75 + gap) : 0);
        tagBox(d.name, lx, ly, fs, "rgba(255,255,255,0.92)", C.ink, 1.1);
      }
      ctx.restore();
    });
    ctx.restore();
  }
  function lineTags(g, a, h, fs) {
    LINES.forEach((L, i) => {
      if (h[i] < 0.5) return;
      const p = g.P(L.tag[0], L.tag[1]);
      ctx.save(); ctx.globalAlpha *= a * clamp((h[i] - 0.5) * 2, 0, 1);
      tagBox(L.name, p.x, p.y, fs, mix(L.color, "#ffffff", 0.55), C.ink, 1.3);
      ctx.restore();
    });
  }
  // 画面角落的小地图：告诉观众“现在在哪条线上”
  function miniMap(x, y, bh, line, a) {
    const g = mapGeo(x, y, bh);
    ctx.save(); ctx.globalAlpha *= a;
    rrect(x - bh * 0.08, y - bh * 0.1, g.bw + bh * 0.16, bh * 1.12, bh * 0.12); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1.4); ctx.stroke();
    drawBrain(g, 1, { face: false });
    drawTracks(g, 1, [0, 1, 2, 3].map((i) => (i === line ? 1 : 0.1)));
    const st = g.st[LINES[line].to];
    const pulse = 1 + Math.sin(time * 4) * 0.2;
    ctx.beginPath(); ctx.arc(st.x, st.y, bh * 0.07 * pulse, 0, Math.PI * 2); ctx.strokeStyle = LINES[line].color; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.restore();
  }

  // ---------- 第 1 幕：三组表现 ----------
  function symView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f5effd");
    Anima.bokeh(6, "#ffd1dc", 0.7, 12);
    Anima.petals(10, 0.6, 33);
    const nw = narrow(), top = topPad() + H * 0.06, gap = W * 0.03, cw = (W - gap * 4) / 3, chh = H * (nw ? 0.5 : 0.6);
    const cards = [
      { t: "阳性症状", sub: "多出来的体验", col: "#ffd0dc", kw: ["幻觉 · 妄想"] },
      { t: "阴性症状", sub: "少掉的东西", col: "#dcd6fb", kw: ["情感平淡、没动力", "不想社交"] },
      { t: "认知症状", sub: "变难的事", col: "#cdeee0", kw: ["注意 · 记忆 · 计划"] },
    ];
    const s = Math.min(H * 0.062, cw * 0.14);
    const heads = [];
    cards.forEach((c, i) => {
      const x = gap + i * (cw + gap), p = prog(0.4 + i * 1.3, 0.8);
      if (p <= 0) { heads.push(null); return; }
      ctx.save();
      const cx = x + cw / 2, cy = top + chh / 2;
      ctx.translate(cx, cy); ctx.scale(0.85 + 0.15 * p, 0.85 + 0.15 * p); ctx.translate(-cx, -cy);
      card(x, top, cw, chh, c.t, c.col, p);
      ctx.globalAlpha *= p;
      const sf = Math.min(fsz(0.03, 11), cw * 0.1);
      text(c.sub, cx, top + chh * 0.12, sf, C.soft);
      const fy = top + chh * (nw ? 0.7 : 0.72);
      if (i === 0) { // 听到并不存在的声音：身边飘着“……”的小气泡
        chara(cx, fy, s, { who: "neuron", eyes: "wide", mouth: "o", arms: "hug", look: Math.sin(time * 1.5) * 1.5 });
        for (let k = 0; k < 3; k++) {
          const q = time * 0.9 + k * 2.1, bx = cx + Math.cos(q) * s * 2.2, by = fy - s * 1.95 + Math.sin(q) * s * 0.55;
          ctx.save(); ctx.globalAlpha *= 0.55 + 0.3 * Math.sin(time * 2 + k);
          rrect(bx - s * 0.45, by - s * 0.28, s * 0.9, s * 0.56, s * 0.28); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
          text("…", bx, by - s * 0.05, s * 0.5, C.soft);
          ctx.restore();
        }
        emote("!", cx + s * 1.1, fy - s * 3.55, s * 0.55);
      } else if (i === 1) { // 没精神、表情变淡
        chara(cx, fy, s, dull("neuron", 0.7, { eyes: "sleepy", mouth: "flat", arms: "down", bob: 0.3 }));
        emote("gloom", cx, fy - s * 3.35, s * 0.8);
        // 远处有人招手，但没有力气回应
        chara(cx + cw * 0.34, fy - s * 0.3, s * 0.45, { who: "5HT", arms: "wave", eyes: "happy", alpha: 0.7, shadow: false });
      } else { // 注意、记忆、计划变难
        chara(cx, fy, s, { who: "neuron", eyes: "dizzy", mouth: "wavy", arms: "hold", item: "book" });
        for (let k = 0; k < 3; k++) {
          const q = time * 1.2 + k * 2.1;
          sfx("?", cx + Math.cos(q) * s * 1.7, fy - s * 2.4 + Math.sin(q) * s * 0.6, s * 0.7, C.skyDeep, 0.1, 0.8);
        }
      }
      c.kw.forEach((l, j) => text(l, cx, top + chh * (0.84 + j * 0.085), sf, C.ink));
      ctx.restore();
      heads.push({ x: cx, y: fy - s * 3 });
    });
    // 气泡：好像有人在叫我
    const h0 = heads[0];
    say("voice", cur === 0 && !nw && lt > 2 && lt < 9 && !!h0, h0 ? h0.x : 0, h0 ? h0.y : 0, h0 ? h0.x : 0, top + chh * 0.26, "好像有人在叫我？", "think");
    // 好消息：可以治疗
    const by = top + chh + (H - top - chh) / 2 + H * 0.01;
    const kb = prog(5, 0.8);
    if (kb > 0) { // 横幅：这是大脑的疾病，可以治疗
      const t = nw ? "大脑的疾病，可以治疗" : "这是一种大脑的疾病，可以治疗", bf = fsz(0.036, 13);
      ctx.save(); ctx.globalAlpha *= kb; ctx.translate(W / 2, by); ctx.scale(0.9 + 0.1 * kb, 0.9 + 0.1 * kb);
      ctx.font = `${bf}px ${Anima.ROUND}`;
      const bw = ctx.measureText(t).width + bf * 3.4, bh = bf * 2;
      ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
      rrect(-bw / 2, -bh / 2, bw, bh, bh / 2); ctx.fillStyle = "#fff4f7"; ctx.fill(); ctx.restore();
      outline(2); ctx.strokeStyle = C.rose; ctx.stroke();
      Anima.heart(-bw / 2 + bf * 1.1, 0, bf * 0.5, C.rose); Anima.heart(bw / 2 - bf * 1.1, 0, bf * 0.5, C.rose);
      text(t, 0, 1, bf, C.ink);
      ctx.restore();
      sparkles(W / 2, by, W * 0.24, 5, kb, 3);
    }
    ctx.restore();
  }

  // ---------- 第 2、5 幕：铁路总图 ----------
  function mapLayout() {
    if (narrow()) {
      const bh = Math.min(H * 0.8, W * 0.94 / 1.3);
      return mapGeo((W - bh * 1.3) / 2 - W * 0.03, H - bh - 4, bh);
    }
    const bh = Math.min(H * 0.8, W * 0.55 / 1.3);
    return mapGeo(W * 0.42 - bh * 0.65, H - bh - H * 0.06, bh);
  }
  function mapView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f8ff", "#fdeef3");
    Anima.bokeh(7, "#e3dcff", 0.8, 60);
    Anima.petals(8, 0.5, 80);
    const g = mapLayout();
    drawBrain(g, 1, { mood: 1 });
    drawTracks(g, 1, hl);
    // 火车：未治疗时大致正常的节奏
    const riders = !narrow();
    drawTrains(g, 0, 3, 0.16, hl[0] > 0.5 ? 1 : 0.4, riders);
    drawTrains(g, 1, 3, 0.1, hl[1] > 0.5 ? 1 : 0.4, riders);
    drawTrains(g, 2, 2, 0.2, hl[2] > 0.5 ? 1 : 0.4, riders);
    drawTrains(g, 3, 1, 0.35, hl[3] > 0.5 ? 1 : 0.4, false);
    const fs = fsz(0.026, 10);
    drawStations(g, 1, hl, fs);
    lineTags(g, 1, hl, fs);
    // 站长：多巴胺，站在脑干旁边
    const cs = H * (narrow() ? 0.045 : 0.05);
    const dx = narrow() ? W * 0.92 : g.bx + g.bw * 0.9, dy = narrow() ? H * 0.98 : g.by + g.bh * 0.99;
    chara(dx, dy, cs, { who: "DA", arms: cur === 1 ? "point" : "wave", dir: -1, eyes: "happy", mouth: "grin", item: null });
    // 标注：第 2 幕依次介绍每条线的用途
    const on2 = (i) => cur === 1 && lt > 1 + i * 2.6 && lt < 1 + (i + 1) * 2.6;
    const nw = narrow();
    const m0 = linePt(g, LINES[0], 0.45), m1 = linePt(g, LINES[1], 0.72), m2 = linePt(g, LINES[2], 0.5), m3 = linePt(g, LINES[3], 0.5);
    const L0 = nw ? { x: W * 0.52, y: H * 0.95 } : g.P(0.08, 0.95), L1 = nw ? { x: W * 0.62, y: H * 0.22 } : g.P(0.25, -0.05);
    const L2 = nw ? { x: W * 0.78, y: H * 0.3 } : g.P(1.14, 0.3), L3 = nw ? { x: W * 0.24, y: H * 0.93 } : g.P(0.08, 0.95);
    callout("l0", on2(0), m0.x, m0.y, L0.x, L0.y, nw ? "奖赏、“这很重要”" : "中脑边缘：奖赏、“这件事很重要”");
    callout("l1", on2(1), m1.x, m1.y, L1.x, L1.y, nw ? "动力和思考" : "中脑皮层：动力和思考");
    callout("l2", on2(2) || (cur === 4 && lt > 1 && (!nw || lt < 7)), m2.x, m2.y, L2.x, L2.y, nw ? "管动作" : "黑质纹状体：管动作");
    callout("l3", on2(3) || (cur === 4 && lt > 2.5 && (!nw || lt < 7)), m3.x, m3.y, L3.x, L3.y, nw ? "管泌乳素" : "结节漏斗：管泌乳素");
    say("from", cur === 1 && lt > 11.6, dx - cs, dy - cs * 3, nw ? W * 0.72 : dx + W * 0.1, nw ? H * 0.6 : dy - H * 0.32, "三条从中脑出发，一条从下丘脑出发～", "say");
    // 第 5 幕：两条线运行正常，药物访客在远处探头
    if (cur === 4) {
      const ok = (p, t0, label) => {
        const k = prog(t0, 0.6);
        if (k <= 0) return;
        ctx.save(); ctx.globalAlpha *= k;
        tagBox("✓ " + label, p.x, p.y, fs, "#e3f7ec", C.ink, 1.3);
        ctx.restore();
      };
      const sN = g.st.str;
      ok({ x: sN.x, y: sN.y - fs * 1.8 }, 1.5, "动作顺畅");
      const tP = g.P(LINES[3].tag[0], LINES[3].tag[1]); // 放在“结节漏斗线”站牌下面，别盖住它
      ok({ x: tP.x + fs * 1.2, y: tP.y + fs * 1.75 }, 3, "泌乳素稳定");
      const k = prog(6, 1.5);
      if (k > 0) {
        const px = lerp(W + cs * 2, nw ? W * 0.76 : W * 0.87, k), py = nw ? H * 0.98 : H * 0.9;
        chara(px, py, cs * 1.05, { who: "drug", label: "药", dir: -1, arms: "wave", eyes: "happy", mouth: "cat", walk: k < 1 ? time * 9 : null });
        say("next", lt > 7.2, px - cs, py - cs * 3.2, nw ? W * 0.62 : px - W * 0.04, nw ? H * 0.3 : py - H * 0.33, "下一集，我会路过这几条线哦～", "say");
      }
    }
    ctx.restore();
  }

  // ---------- 第 3、4 幕：车站特写 ----------
  // 桌面：顶上挂站牌；手机：站名写在站台边上，省出上方的空间
  function stationSign(name, lineName, color) {
    if (narrow()) return;
    const fs = fsz(0.042, 14), w = Math.max(fs * 7.5, W * 0.3), h = fs * 2.5;
    const x = W / 2 - w / 2, y = Math.max(topPad() - H * 0.02, H * 0.1);
    outline(1.5); ctx.beginPath(); ctx.moveTo(x + w * 0.2, 0); ctx.lineTo(x + w * 0.2, y); ctx.moveTo(x + w * 0.8, 0); ctx.lineTo(x + w * 0.8, y); ctx.stroke();
    rrect(x, y, w, h, fs * 0.4); ctx.fillStyle = "#fff"; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = color; ctx.fillRect(x + 2, y + h * 0.66, w - 4, h * 0.3);
    text(name, W / 2, y + h * 0.36, fs, C.ink);
    text(lineName, W / 2, y + h * 0.82, fs * 0.55, "#fff");
  }
  function platform(plat, gray, name, color) {
    const top = plat, face2 = H * 0.8;
    ctx.fillStyle = mix("#f3e3d6", "#dcd8de", gray); ctx.fillRect(0, top, W, face2 - top);
    ctx.fillStyle = mix("#ffe28a", "#e8e2c8", gray); ctx.fillRect(0, top + (face2 - top) * 0.1, W, (face2 - top) * 0.12);
    outline(2); ctx.beginPath(); ctx.moveTo(0, top); ctx.lineTo(W, top); ctx.moveTo(0, face2); ctx.lineTo(W, face2); ctx.stroke();
    if (narrow() && name) { // 手机：站名牌贴在站台边上
      const fs = fsz(0.03, 10), yy = top + (face2 - top) * 0.62;
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const w = ctx.measureText(name).width + fs * 1.6;
      rrect(W / 2 - w / 2, yy - fs * 0.75, w, fs * 1.5, fs * 0.3); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
      ctx.fillStyle = color; ctx.fillRect(W / 2 - w / 2 + 2, yy + fs * 0.45, w - 4, fs * 0.25);
      text(name, W / 2, yy - fs * 0.05, fs, C.ink);
    }
    // 铁轨
    ctx.fillStyle = mix("#efe6f0", "#e4e1e6", gray); ctx.fillRect(0, face2, W, H - face2);
    const ry = H * 0.955;
    ctx.fillStyle = mix("#c9a98a", "#bdb4ae", gray);
    for (let x = 6; x < W; x += H * 0.05) ctx.fillRect(x, ry - H * 0.012, H * 0.018, H * 0.035);
    outline(2.5); ctx.beginPath(); ctx.moveTo(0, ry); ctx.lineTo(W, ry); ctx.stroke();
  }
  function bigTrain(x, n, color, riders, gray, a) {
    const ch = H * 0.13, cw = ch * 1.9, y = H * 0.94 - ch;
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    for (let k = 0; k < n; k++) {
      const cx = x - k * (cw + ch * 0.12);
      if (cx + cw < -10 || cx > W + 10) continue;
      rrect(cx, y, cw, ch, ch * 0.3); ctx.fillStyle = mix(mixH(color, "#ffffff", 0.3), "#d9d5dc", gray); ctx.fill(); outline(2); ctx.stroke();
      for (let w = 0; w < 3; w++) {
        const wx0 = cx + cw * (0.08 + w * 0.3), wy0 = y + ch * 0.16, ww = cw * 0.24, wh = ch * 0.4;
        rrect(wx0, wy0, ww, wh, ch * 0.08); ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill(); outline(1.2); ctx.stroke();
        if (riders <= k * 3 + w) continue; // 窗户里坐着的多巴胺
        ctx.save(); rrect(wx0, wy0, ww, wh, ch * 0.08); ctx.clip();
        chara(wx0 + ww / 2, wy0 + wh * 1.25, ch * 0.13, dull("DA", gray > 0.5 ? 0.5 : 0, { eyes: gray > 0.5 ? "sleepy" : "sparkle", mouth: gray > 0.5 ? "flat" : "open", shadow: false, bob: 0 }));
        ctx.restore();
      }
      ctx.beginPath(); ctx.arc(cx + cw * 0.22, y + ch, ch * 0.1, 0, Math.PI * 2); ctx.arc(cx + cw * 0.78, y + ch, ch * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = "#8a7680"; ctx.fill();
    }
    ctx.restore();
    return { y, ch, cw };
  }
  function miniMapTR(line) {
    if (narrow()) return;
    const bh = H * 0.16;
    miniMap(W * 0.97 - bh * 1.3 - bh * 0.08, topPad() + H * 0.04, bh, line, 1);
  }
  // 盖章：红色的小印章
  function stampTool(x, y, s) {
    rrect(x - s * 0.18, y - s * 0.9, s * 0.36, s * 0.6, s * 0.12); ctx.fillStyle = "#c98a6a"; ctx.fill(); outline(1.2); ctx.stroke();
    rrect(x - s * 0.55, y - s * 0.35, s * 1.1, s * 0.4, s * 0.1); ctx.fillStyle = C.bad; ctx.fill(); ctx.stroke();
  }
  function nacView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff4f0", "#ffe6ee");
    Anima.bokeh(8, "#ffc2d1", 0.9, 21);
    const nw = narrow(), plat = H * 0.72, s = H * 0.05, cfs = Math.max(12, W / 58) * Anima.UI;
    stationSign("伏隔核站", "中脑边缘线", C.meso);
    miniMapTR(0);
    platform(plat, 0, "伏隔核站", C.meso);
    // 普通小事的卡片，飘过盖章的多巴胺，被盖上“特别重要”
    const stampX = W * (nw ? 0.47 : 0.42);
    const items = ["路人一瞥", "一片落叶", "远处说话声", "电视新闻"];
    const tf = fsz(0.028, 10), cy = H * (nw ? 0.42 : 0.43), cwid = Math.max(tf * 6.4, W * 0.11), chh2 = Math.max(tf * 2.2, cwid * 0.45);
    let stamped = null;
    items.forEach((t, k) => {
      const x0 = cwid / 2 + 4, x = ((lt * W * 0.075 + k * W * 0.2) % (W * 0.8)) + x0; // 卡片整张在画面里时才出现
      const fade = clamp(Math.min((x - x0) / (W * 0.06), (W * 0.7 - x) / (W * 0.06)), 0, 1);
      if (fade <= 0) return;
      ctx.save(); ctx.globalAlpha *= fade;
      const yy = cy + Math.sin(time * 2 + k) * H * 0.008;
      ctx.save(); ctx.shadowColor = "rgba(120,80,100,0.15)"; ctx.shadowBlur = 6;
      rrect(x - cwid / 2, yy - chh2 / 2, cwid, chh2, chh2 * 0.2); ctx.fillStyle = "#fffdf6"; ctx.fill(); ctx.restore();
      outline(1.4); ctx.stroke();
      text(t, x, yy + (x > stampX ? chh2 * 0.12 : 0), tf, C.ink);
      if (x > stampX) { // 盖了章
        const k2 = clamp((x - stampX) / (W * 0.03), 0, 1);
        ctx.save(); ctx.translate(x + cwid * 0.2, yy - chh2 * 0.5); ctx.rotate(-0.18); ctx.scale(1.6 - 0.6 * k2, 1.6 - 0.6 * k2);
        const fs2 = fsz(0.022, 9);
        rrect(-fs2 * 2.4, -fs2 * 0.7, fs2 * 4.8, fs2 * 1.4, fs2 * 0.3); ctx.fillStyle = "rgba(255,240,240,0.95)"; ctx.fill();
        ctx.strokeStyle = C.bad; ctx.lineWidth = 1.6; ctx.stroke();
        text("特别重要!", 0, 1, fs2, C.bad);
        ctx.restore();
        if (x - stampX < W * 0.04) sfx("咚！", stampX - cwid * 0.2, cy - chh2 * 1.2, fsz(0.04, 13), C.bad, -0.1, 1 - (x - stampX) / (W * 0.04));
        if (!stamped && x < W * 0.62) stamped = { x, y: yy };
      }
      ctx.restore();
    });
    // 站台上挤满兴奋的多巴胺，最右边那位负责盖章
    const nC = nw ? 5 : 6;
    let stamper = null;
    for (let i = 0; i < nC; i++) {
      const isStamp = i === nC - 1;
      const xx = isStamp ? stampX : W * (nw ? 0.06 + i * 0.09 : 0.06 + i * 0.07);
      const appear = prog(i * 0.5, 0.5);
      if (appear <= 0) continue;
      const jump = isStamp ? Math.abs(Math.sin(time * 5)) * 0.2 : Math.abs(Math.sin(time * 6 + i * 1.3)) * 0.4;
      chara(xx, plat, s, { who: "DA", eyes: i % 2 ? "sparkle" : "wide", mouth: i % 2 ? "grin" : "open", arms: isStamp ? "carry" : (i % 2 ? "up" : "fist"), jump, alpha: appear, dir: i % 2 ? 1 : -1, seed: i });
      if (!isStamp && i % 2 === 0) emote("!", xx + s * 0.9, plat - s * 3.6 - jump * s, s * 0.6, appear);
      if (isStamp) { stampTool(xx, plat - s * 3.3 - jump * s, s); stamper = { x: xx, y: plat - s * 4.2 - jump * s }; }
    }
    // 被多出来的“重要”信号吓到的居民
    const rx = W * (nw ? 0.86 : 0.8);
    chara(rx, plat, s * 1.05, { who: "neuron", eyes: "wide", mouth: "wavy", arms: "hug", dir: -1, look: -1.5 });
    emote("sweat", rx + s * 1.1, plat - s * 3.2, s * 0.55);
    // 小火车：一辆接一辆，挤得满满的
    const trainLen = H * 0.13 * 1.9 * 3 + H * 0.03;
    for (let k = 0; k < 3; k++) {
      const x = ((lt * W * 0.3 + k * (trainLen + W * 0.12)) % (trainLen * 3 + W * 0.36)) - trainLen * 0.2;
      bigTrain(x, 3, C.meso, 9, 0, 1);
    }
    // 标注和气泡（手机上错开出场时间，免得挤在一起）
    const on = cur === 2;
    if (nw) {
      callout("tooMany", on && lt > 1.5 && lt < 7.2, W * 0.55, H * 0.87, W * 0.72, H * 0.2, "车太多：多巴胺过量");
      if (stamper) say("stamp", on && lt > 2.5 && lt < 7.2, stamper.x, stamper.y, W * 0.26, H * 0.24, "这个也超重要！！", "shout");
      say("worry", on && lt > 7.5, rx, plat - s * 3.4, W * 0.7, H * 0.24, "路人……在说我吗？", "think");
      callout("stampNote", on && lt > 9.5, stampX + W * 0.1, cy, W * 0.25, H * 0.24, "小事被标成“重要”");
    } else {
      callout("tooMany", on && lt > 1.5, W * 0.5, H * 0.88, W * 0.62, H * 0.735 + cfs + 14, "多巴胺太多：车一辆接一辆");
      if (stamper) say("stamp", on && lt > 2.5 && lt < 9.5, stamper.x, stamper.y, W * 0.2, H * 0.25, "这个也超重要！！", "shout");
      say("worry", on && lt > 5.5, rx, plat - s * 3.3, W * 0.8, H * 0.4, "路人……在说我吗？", "think");
      callout("stampNote", on && lt > 9.5, stamped ? stamped.x : stampX + W * 0.1, cy - chh2 * 0.5, W * 0.3, H * 0.28, "普通小事被盖上“特别重要”");
    }
    ctx.restore();
  }

  function pfcView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f1f0f5", "#e9e6ef");
    Anima.bokeh(5, "#d8d4e6", 0.6, 44);
    const nw = narrow(), plat = H * 0.72, s = H * 0.05;
    const lineCol = mix(C.cort, "#bbb6c8", 0.4);
    stationSign("前额叶站", "中脑皮层线", lineCol);
    miniMapTR(1);
    platform(plat, 0.8, "前额叶站", lineCol);
    // 公告板：今天的计划，字都糊掉了
    const bx = W * (nw ? 0.03 : 0.05), bw = W * (nw ? 0.24 : 0.17), by = H * 0.37, bh = plat - by - H * 0.07;
    rrect(bx, by, bw, bh, 8); ctx.fillStyle = "#f7f1e4"; ctx.fill(); outline(2); ctx.stroke();
    outline(2); ctx.beginPath(); ctx.moveTo(bx + bw * 0.25, by + bh); ctx.lineTo(bx + bw * 0.25, plat); ctx.moveTo(bx + bw * 0.75, by + bh); ctx.lineTo(bx + bw * 0.75, plat); ctx.stroke();
    const fb = Math.min(fsz(0.026, 10), bw * 0.14);
    text("今天的计划", bx + bw / 2, by + fb * 1.1, fb, C.ink);
    for (let k = 0; k < 3; k++) {
      const ly = by + fb * 2.5 + k * (bh - fb * 2.8) / 3;
      ctx.strokeStyle = alpha("#8f84e0", 0.45); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(bx + bw * 0.12, ly);
      for (let q = 0; q <= 10; q++) ctx.lineTo(bx + bw * (0.12 + q * 0.06), ly + Math.sin(q * 2.3 + k + time * 1.2) * fb * 0.25);
      ctx.stroke();
      text("?", bx + bw * 0.86, ly, fb, C.skyDeep);
    }
    // 认知：看着计划发呆
    const r3 = { x: bx + bw + W * (nw ? 0.08 : 0.06), y: plat };
    chara(r3.x, r3.y, s, dull("neuron", 0.4, { eyes: "dizzy", mouth: "wavy", dir: -1, arms: "down" }));
    emote("?", r3.x - s * 0.6, plat - s * 3.6, s * 0.6);
    // 阴性：长椅上提不起劲的居民
    const benchX = W * (nw ? 0.6 : 0.5), benchW = W * (nw ? 0.28 : 0.2);
    ctx.fillStyle = "#c9b7a6";
    rrect(benchX - benchW / 2, plat - s * 1.3, benchW, s * 0.3, 4); ctx.fill(); outline(1.5); ctx.stroke();
    rrect(benchX - benchW / 2, plat - s * 2.3, benchW, s * 0.3, 4); ctx.fillStyle = "#c9b7a6"; ctx.fill(); ctx.stroke();
    outline(2); ctx.beginPath(); ctx.moveTo(benchX - benchW * 0.4, plat - s * 1); ctx.lineTo(benchX - benchW * 0.4, plat); ctx.moveTo(benchX + benchW * 0.4, plat - s * 1); ctx.lineTo(benchX + benchW * 0.4, plat); ctx.stroke();
    const r1 = { x: benchX - benchW * 0.22, y: plat }, r2 = { x: benchX + benchW * 0.24, y: plat };
    chara(r1.x, r1.y, s, dull("neuron", 0.75, { eyes: "sleepy", mouth: "flat", bob: 0.2, hair: "#c29a7a" }));
    emote("zzz", r1.x + s * 0.8, plat - s * 3.4, s * 0.7);
    chara(r2.x, r2.y, s, dull("neuron", 0.75, { eyes: "closed", mouth: "flat", bob: 0.2, dir: -1, hair: "#9c7b62", style: "bob" }));
    emote("gloom", r2.x, plat - s * 3.4, s * 0.7);
    // 很久才来一辆小火车，只下来一位多巴胺
    const arrive = prog(1.5, 4), trainX = lerp(-W * 0.5, W * (nw ? 0.64 : 0.62), arrive);
    const tr = bigTrain(trainX, 1, C.cort, lt > 6.3 ? 0 : 1, 0.7, 1);
    const off = prog(6, 1.5), dA = { x: lerp(trainX + tr.cw * 0.2, W * (nw ? 0.89 : 0.8), off), y: lerp(tr.y + tr.ch * 0.5, plat, Math.min(1, off * 3)) };
    if (off > 0) {
      chara(dA.x, dA.y, s, { who: "DA", eyes: "teary", mouth: "wavy", arms: "hold", item: "letter", walk: off < 1 ? time * 7 : null, alpha: Math.min(1, off * 3), dir: 1 });
      emote("sweat", dA.x + s * 1, dA.y - s * 3.3, s * 0.5, off);
    }
    // 标注和气泡
    const on = cur === 3;
    if (nw) {
      callout("cog", on && lt > 1 && lt < 4.8, bx + bw / 2, by + bh * 0.5, W * 0.3, H * 0.24, "认知：注意、计划变难");
      callout("neg", on && lt > 4.8 && lt < 8.5, r2.x, plat - s * 1.6, W * 0.6, H * 0.24, "阴性：没动力、不想社交");
      say("tired", on && lt > 1.5 && lt < 7, r1.x, plat - s * 3.3, W * 0.66, H * 0.42, "提不起劲……", "think");
      say("alone", on && lt > 7.5, dA.x, plat - s * 3.3, W * 0.72, H * 0.42, "只来了我一个……", "say");
      callout("few", on && lt > 8.5, trainX + tr.cw * 0.4, tr.y + tr.ch * 0.4, W * 0.36, H * 0.24, "车太少：多巴胺不足");
    } else {
      callout("cog", on && lt > 1, bx + bw / 2, by + bh * 0.5, bx + bw / 2 + W * 0.04, H * 0.28, "认知症状：注意、记忆、计划变差");
      callout("neg", on && lt > 3, r2.x, plat - s * 1.6, W * 0.62, H * 0.3, "阴性症状：没动力、表情淡、不想社交");
      say("tired", on && lt > 2 && lt < 7.5, r1.x, plat - s * 3.3, W * 0.4, H * 0.47, "提不起劲……", "think");
      say("alone", on && lt > 7.5, dA.x, plat - s * 3.3, W * 0.8, H * 0.45, "只来了我一个……", "say");
      callout("few", on && lt > 8.5, trainX + tr.cw * 0.4, tr.y + tr.ch * 0.4, W * 0.3, H * 0.97, "多巴胺太少：站台冷冷清清");
    }
    ctx.restore();
  }

  // ---------- 第 6 幕：幕后推手 ----------
  function stopSign(x, y, r, ang, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(ang);
    outline(Math.max(1.5, r * 0.12)); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -r * 2.2); ctx.stroke();
    ctx.translate(0, -r * 2.2);
    ctx.beginPath();
    for (let k = 0; k < 8; k++) { const q = Math.PI / 8 + k * Math.PI / 4; if (k) ctx.lineTo(Math.cos(q) * r, Math.sin(q) * r); else ctx.moveTo(Math.cos(q) * r, Math.sin(q) * r); }
    ctx.closePath(); ctx.fillStyle = "#ff8f9f"; ctx.fill(); ctx.stroke();
    ctx.rotate(-ang); text("停", 0, 1, r * 0.9, "#fff");
    ctx.restore();
  }
  function gluView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#f4effd");
    Anima.bokeh(6, "#ffe7a3", 0.7, 70);
    Anima.petals(6, 0.4, 90);
    const nw = narrow();
    const fy = H * 0.58, s = H * (nw ? 0.055 : 0.05);
    const X = nw ? [0.09, 0.4, 0.64, 0.87] : [0.1, 0.34, 0.58, 0.8];
    const x = X.map((k) => k * W);
    // 一条“信号铁路”把四位串起来
    const ry = fy + H * 0.03;
    ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.018 + 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(W * 0.03, ry); ctx.lineTo(W * 0.97, ry); ctx.stroke();
    ctx.strokeStyle = "#e9dcc9"; ctx.lineWidth = H * 0.018; ctx.stroke();
    ctx.strokeStyle = C.meso; ctx.globalAlpha *= 1; ctx.beginPath(); ctx.moveTo(x[3], ry); ctx.lineTo(W * 0.97, ry); ctx.lineWidth = H * 0.018; ctx.stroke();
    // 1 谷氨酸发信号
    chara(x[0], fy, s, { who: "Glu", arms: "point", item: null, eyes: "open", dir: 1 });
    // NMDA 受体（GABA 刹车员门口的“门铃”），功能不足：灰灰的，信号传不进去
    const nx = (x[0] + x[1]) / 2 + (nw ? W * 0.01 : W * 0.02), rs = H * 0.045;
    const weak = prog(1, 1.5);
    const nr = Anima.receptor(nx, ry, rs, mix("#ffd27a", "#d6d0d8", weak), 0.1 * (1 - weak), { shape: "square", label: "NMDA" });
    if (weak > 0.5) tagBox("掉线", nx + rs * 1.3, nr.site.y - rs * 0.4, fsz(0.022, 9), "#ffe3e6", C.bad, 1.1);
    // 信号走到 NMDA 就“噗”地没了
    const tS = (time * 0.5) % 1;
    if (tS < 0.8) Anima.spark([[x[0] + s * 0.9, fy - s * 1.2], [nx, nr.site.y]], tS / 0.8, H * 0.02, C.gold);
    else sfx("噗", nx, nr.site.y - rs * 0.8, fsz(0.035, 12), C.soft, -0.1, 1 - (tS - 0.8) / 0.2);
    // 2 GABA 刹车员：本来举着“停”牌按住下游，NMDA 掉线后睡着了
    const doze = prog(2.5, 1.5);
    chara(x[1], fy, s, dull("GABA", doze * 0.5, { eyes: doze > 0.5 ? "closed" : "open", mouth: doze > 0.5 ? "flat" : "smile", arms: doze > 0.5 ? "down" : "hold", bob: 1 - doze * 0.7 }));
    stopSign(x[1] + s * 1.3, fy - s * 0.2, s * 0.55, doze * 1.2, 1);
    if (doze > 0.5) emote("zzz", x[1] + s * 0.4, fy - s * 3.4, s * 0.7);
    // 3 下游的谷氨酸：没人管，过度兴奋
    const hyper = prog(4.5, 1);
    const jit = hyper * Math.sin(time * 40) * s * 0.06;
    chara(x[2] + jit, fy, s, { who: "Glu", eyes: hyper > 0.5 ? "sparkle" : "open", mouth: hyper > 0.5 ? "open" : "smile", arms: hyper > 0.5 ? "up" : "down", jump: hyper * Math.abs(Math.sin(time * 7)) * 0.4 });
    if (hyper > 0.3) {
      for (let k = 0; k < 3; k++) Anima.bolt(x[2] + Math.cos(time * 3 + k * 2.1) * s * 1.6, fy - s * 1.8 + Math.sin(time * 3 + k * 2.1) * s * 0.9, s * 0.35, hyper);
      const t2 = (time * 1.2) % 1;
      Anima.spark([[x[2] + s, fy - s * 1.4], [x[3] - s, fy - s * 1.4]], t2, H * 0.02, C.gold);
    }
    // 4 腹侧被盖区的多巴胺：被催着一趟趟发车
    const fast = prog(6, 1.5);
    chara(x[3], fy, s, { who: "DA", eyes: fast > 0.5 ? "wide" : "happy", mouth: fast > 0.5 ? "o" : "smile", arms: fast > 0.5 ? "up" : "wave", dir: -1 });
    tagBox("→ 伏隔核", W * 0.93, ry + H * 0.05, fsz(0.022, 9), mix(C.meso, "#ffffff", 0.6), C.ink, 1.1);
    const nT = 1 + Math.round(fast * 3), ts = Math.max(4, H * 0.018);
    for (let k = 0; k < nT; k++) {
      const t = (time * (0.25 + fast * 0.35) + k / nT) % 1;
      const tx = lerp(x[3] + s, W * 0.98, t);
      trainCar(tx, ry, 0, ts, C.meso, null, Math.min(1, (1 - t) * 6, t * 6));
    }
    if (fast > 0.5) emote("!", x[3] + s * 0.9, fy - s * 3.6, s * 0.6);
    // 下方：5-HT2A 小剧场
    const k5 = prog(8, 1);
    const cx0 = nw ? W * 0.03 : W * 0.06, cy0 = H * (nw ? 0.73 : 0.72), cw5 = nw ? W * 0.66 : W * 0.46, ch5 = H * 0.98 - cy0;
    if (k5 > 0) {
      card(cx0, cy0, cw5, ch5, null, null, k5);
      ctx.save(); ctx.globalAlpha *= k5;
      const my = cy0 + ch5 * 0.9, rx = cx0 + cw5 * 0.13, rs2 = Math.min(H * 0.04, ch5 * 0.2);
      ctx.save(); rrect(cx0, cy0, cw5, ch5, 12); ctx.clip();
      ctx.fillStyle = "#e9f7f1"; ctx.fillRect(cx0, my, cw5, ch5); ctx.restore();
      outline(1.5); ctx.beginPath(); ctx.moveTo(cx0, my); ctx.lineTo(cx0 + cw5, my); ctx.stroke();
      const rc = Anima.receptor(rx, my, rs2, "#8fdcc4", 0.8 + Math.sin(time * 6) * 0.2, { shape: "tri" });
      chara(rx, rc.site.y + rs2 * 0.1, rs2 * 0.85, { who: "5HT", eyes: "sparkle", mouth: "grin", arms: "up", jump: Math.abs(Math.sin(time * 5)) * 0.2, shadow: false });
      // 五颜六色的“幻象泡泡”
      const cols = ["#ffb3c7", "#b8e4ff", "#fff1a8", "#d8c9ff"];
      for (let k = 0; k < 5; k++) {
        const t = (time * 0.4 + k / 5) % 1;
        const bx2 = rx + rs2 * 1.3 + t * cw5 * 0.14, by2 = my - rs2 * 1.5 - t * ch5 * 0.55 + Math.sin(time * 3 + k) * rs2 * 0.3;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * 0.9;
        ctx.beginPath(); ctx.arc(bx2, by2, rs2 * (0.25 + t * 0.25), 0, Math.PI * 2); ctx.fillStyle = cols[k % 4]; ctx.fill(); outline(1); ctx.stroke();
        ctx.restore();
      }
      const ft = Math.min(fsz(0.03, 11), cw5 * 0.07), tx0 = cx0 + cw5 * 0.64;
      text("5-HT2A 受体过度激活", tx0, cy0 + ch5 * 0.24, ft, C.ink);
      text("也可能带来幻觉", tx0, cy0 + ch5 * 0.24 + ft * 1.45, ft, C.ink);
      text("（致幻剂就作用在这里）", tx0, cy0 + ch5 * 0.24 + ft * 2.9, ft * 0.85, C.soft);
      ctx.restore();
    }
    // 标注和气泡
    const on = cur === 5;
    callout("nmda", on && lt > 1.2 && (!nw || lt < 5), nx, nr.site.y, W * (nw ? 0.3 : 0.2), H * (nw ? 0.24 : 0.28), nw ? "NMDA 受体功能不足" : "NMDA 受体功能不足：刹车员掉线");
    say("hyper", on && lt > 5 && lt < (nw ? 8.5 : 12), x[2], fy - s * 3.4, W * (nw ? 0.66 : 0.6), H * (nw ? 0.25 : 0.28), nw ? "停不下来啦！" : "没人拦着，停不下来啦！", "shout");
    callout("more", on && lt > 7, x[3] + s, ry, W * 0.84, H * 0.8, nw ? "多巴胺↑" : "中脑边缘多巴胺↑");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#8f84e0", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.sym > 0.02) symView(S.sym);
    if (S.map > 0.02) mapView(S.map);
    if (S.nac > 0.02) nacView(S.nac);
    if (S.pfc > 0.02) pfcView(S.pfc);
    if (S.glu > 0.02) gluView(S.glu);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#8f84e0",
    titleCard: { lines: ["多巴胺的", "四条铁路"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
