Anima.register("glutamate-pathways", {
    "title": "NMDA 掉线以后",
    "tag": "精神病",
    "headline": "NMDA【掉线】以后，多巴胺为什么一多一少？",
    "lede": "皮层里有一位靠 NMDA 受体保持清醒的刹车员。它一掉线，谷氨酸就失控，顺着两条长线往下传：一条让边缘多巴胺太多，一条让皮层多巴胺太少。跟着信号一站一站走一遍谷氨酸假说。",
    "summary": "NMDA 受体功能不足 → GABA 刹车松开 → 谷氨酸过多 → 边缘多巴胺↑、皮层多巴胺↓；氯胺酮带来的线索，以及甘氨酸位点的研究方向。",
    "chapter": "对应 Stahl《精神药理学精要》第 4 章 · 谷氨酸假说",
    "footer": "如果自己或身边的人出现幻觉、妄想，或者生活状态明显变了，请尽早找精神科医生。",
    "canvasLabel": "拟人化的谷氨酸、GABA 和多巴胺神经元沿着两条通路传递信号的动画",
    "regions": ["pfc", "midbrain", "nac"],
    "parts": ["psychosis"],
    "cast": ["Glu", "GABA", "DA", "drug"],
    "color": "#ffc94d"
  }, () => {
  const CH = [
    { title: "皮层里的刹车员", v0: 1, v1: 0,
      pill: ["NMDA", "正常在线"], pill2: ["刹车", "踩得稳"],
      text: "前额叶皮层里，锥体神经元是放出谷氨酸的“主力员工”，它们的长线一路通到脑干。旁边的 GABA 中间神经元是刹车员，时刻按住锥体神经元，不让它太兴奋。刹车员靠什么保持清醒？靠谷氨酸敲它身上的 NMDA 受体。门一开，刹车员有精神，刹车踩得稳，下游的线路也安安稳稳。",
      fact: "GABA 中间神经元身上的 NMDA 受体，像刹车员的“电源”" },
    { title: "NMDA 掉线了", v0: 1, v1: 0,
      pill: ["NMDA", "功能不足"], pill2: ["刹车", "松开了"],
      text: "谷氨酸假说认为，精神分裂症里，刹车员身上的 NMDA 受体可能“掉线”了，也就是功能不足。钥匙插进来，门却打不开，刹车员收不到信号，慢慢打起瞌睡，手里的刹车松开了。没人按住的锥体神经元一下子兴奋过头，沿着长线往下游不停地放出谷氨酸。刹车松开带来的兴奋，叫做去抑制。",
      fact: "NMDA 功能不足 → GABA 刹车松开 → 锥体神经元去抑制，谷氨酸过多" },
    { title: "直达线：边缘多巴胺太多", v0: 1, v1: 0,
      pill: ["直达线", "谷氨酸↑"], pill2: ["伏隔核", "多巴胺↑"],
      text: "第一条长线直接通到中脑的腹侧被盖区，接在开往伏隔核的多巴胺神经元身上。谷氨酸不停地敲门，像一直踩着油门，多巴胺神经元被催着一趟趟发车，中脑边缘通路上的多巴胺越来越多。这就是“四条铁路”那一集里的“车太多”：幻觉、妄想这些阳性症状可能随之出现。",
      fact: "谷氨酸过度驱动中脑边缘多巴胺神经元，被认为与阳性症状有关" },
    { title: "绕一站：皮层多巴胺太少", v0: 1, v1: 0,
      pill: ["绕一站", "GABA↑"], pill2: ["前额叶", "多巴胺↓"],
      text: "第二条长线先停在腹侧被盖区里的另一位 GABA 刹车员身上，由它去管开往前额叶的多巴胺神经元。谷氨酸太多，这位刹车员被催得格外用力，把多巴胺神经元按得死死的，开往前额叶的车就少了。于是动力不足、表情变淡、注意力变差，也就是阴性和认知症状。同一个源头，下游一多一少。",
      fact: "中间多了一站 GABA，同样的谷氨酸过多，结果就变成了多巴胺太少" },
    { title: "氯胺酮留下的线索", v0: 1, v1: 0,
      pill: ["NMDA", "被堵住"], pill2: ["结果", "像精神病"],
      text: "这个假说有什么证据？氯胺酮和苯环己哌啶（PCP）都能堵住 NMDA 受体。健康人用了它们，会短暂出现类似精神病的表现：不只有幻觉、猜疑这类阳性症状，还有淡漠、思维迟钝这类阴性和认知症状。只让多巴胺变多的苯丙胺，主要引起的是阳性症状。人为让 NMDA 掉线，两条线就一起出了问题。",
      fact: "NMDA 阻断剂能在健康人身上引出类似精神病的阳性、阴性和认知症状" },
    { title: "给 NMDA 加把劲", v0: 0, v1: 1,
      pill: ["研究方向", "甘氨酸位点"], pill2: ["目标", "刹车员醒来"],
      text: "既然问题出在 NMDA 掉线，能不能帮它一把？“离子通道”那一集讲过，NMDA 这扇门要两把钥匙：谷氨酸，再加上甘氨酸或 D-丝氨酸。科学家就在第二把钥匙上想办法：补充 D-丝氨酸，或者堵住甘氨酸的回收门，让门边的甘氨酸多一些，门更容易打开。这些药还在研究中，结果有好有坏，还不是常规治疗。",
      fact: "增强 NMDA 功能（甘氨酸位点）是研究方向，目前还不是常规治疗" },
  ];

  const C = Object.assign({}, Anima.C, { ctx: "#f3effd", mid: "#fff1e6", glu: "#f6c02e", da: "#ff9a52", gaba: "#8f86e2", gly: "#9fd3f2" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0 };
  const F = { dir: 0.45, ind: 0.45 }; // 两条下行线的“聚光灯”亮度
  const KET = { who: "drug", hatColor: "#ffb36b", hatColor2: "#fff4e0", label: "" };
  const GLY = { who: "neuron", hair: "#6fb9e0", eye: "#3b88b8", cloth: "#dff1fb", hat: "beret", hatColor: C.gly, label: "Gly", style: "bob" };

  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update(dt) {
    lt = Anima.sceneTime;
    const k = 1 - Math.exp(-dt * 3);
    F.dir = lerp(F.dir, [0.4, 0.4, 1, 0.3, 1, 0][cur], k);
    F.ind = lerp(F.ind, [0.4, 0.4, 0.3, 1, 1, 0][cur], k);
  }

  // ---------- 小工具 ----------
  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function along(P, t) {
    let len = 0; const seg = [];
    for (let i = 1; i < P.length; i++) { const l = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]); seg.push(l); len += l; }
    let d = clamp(t, 0, 1) * len, i = 0;
    while (i < seg.length - 1 && d > seg[i]) { d -= seg[i]; i++; }
    const k = seg[i] ? d / seg[i] : 0;
    return [lerp(P[i][0], P[i + 1][0], k), lerp(P[i][1], P[i + 1][1], k)];
  }
  // 一条通路：粗线 + 沿线跑的小光点（多少和快慢代表活跃程度）
  function flow(P, rate, color, a, n) {
    ctx.save(); ctx.globalAlpha *= a;
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); P.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.016 + 3; ctx.stroke();
    ctx.strokeStyle = mix(color, "#ffffff", 0.45); ctx.lineWidth = H * 0.016; ctx.stroke();
    const m = n || Math.max(1, Math.round(1 + rate * 4));
    for (let k = 0; k < m; k++) {
      const t = (time * (0.12 + rate * 0.45) + k / m) % 1, q = along(P, t);
      glow(q[0], q[1], H * 0.02, color, 0.8);
      ctx.beginPath(); ctx.arc(q[0], q[1], H * 0.009, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); outline(1); ctx.stroke();
    }
    ctx.restore();
  }
  function badge(x, y, r, t, color, a) { // 通路末端的“＋ 油门 / － 刹车”小牌
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, r * 1.3, "#fff");
    ctx.restore();
  }
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
  function trainCar(x, y, s, color, a) {
    ctx.save(); ctx.globalAlpha *= a;
    rrect(x - s * 1.3, y - s * 0.75, s * 2.6, s * 1.4, s * 0.45); ctx.fillStyle = color; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.fillStyle = "#fff"; rrect(x - s * 0.9, y - s * 0.5, s * 0.7, s * 0.5, s * 0.15); ctx.fill(); rrect(x + s * 0.2, y - s * 0.5, s * 0.7, s * 0.5, s * 0.15); ctx.fill();
    ctx.restore();
  }
  function station(x, y, name, color, busy, a) {
    ctx.save(); ctx.globalAlpha *= a;
    const fs = fz(0.026);
    glow(x, y, H * 0.09, busy > 0.5 ? C.coral : C.sky, Math.abs(busy - 0.5) * 1.2);
    plate(name, x, y, mix(color, "#ffffff", 0.55), fs);
    ctx.restore();
  }

  // ---------- 第 1～5 幕：两条下行通路 ----------
  function geo() {
    const nw = Anima.narrow;
    const s = H * (nw ? 0.048 : 0.045);
    const top = H * 0.46, bot = H * 0.93;
    return {
      nw, s, top, bot,
      G1: [W * (nw ? 0.1 : 0.12), top], P1: [W * (nw ? 0.45 : 0.4), top], P2: [W * (nw ? 0.68 : 0.62), top],
      N: [W * (nw ? 0.27 : 0.25), top], // NMDA 受体（刹车员的门）
      D1: [W * 0.36, bot], G2: [W * 0.6, bot], D2: [W * 0.84, bot],
      NAC: [W * (nw ? 0.12 : 0.1), bot - H * 0.07], PFC: [W * (nw ? 0.84 : 0.86), H * 0.28],
    };
  }
  // 各幕的活跃程度：nm NMDA 功能；doze 刹车员打瞌睡；hy 锥体神经元过度兴奋；lim 边缘多巴胺过多；g2 中继刹车过猛
  function levels() {
    const L = { nm: 1, doze: 0, hy: 0, lim: 0, g2: 0, drug: 0 };
    if (cur === 1) { L.nm = 1 - prog(1, 1.5); L.doze = prog(2.8, 1.5); L.hy = prog(4.5, 1.5); }
    if (cur === 2 || cur === 3) { L.nm = 0; L.doze = 1; L.hy = 1; }
    if (cur === 2) L.lim = prog(1.5, 2.5);
    if (cur === 3) { L.lim = 1; L.g2 = prog(1.5, 2.5); }
    if (cur === 4) {
      L.drug = prog(0.8, 2.6);
      L.nm = 1 - prog(3.4, 0.8); L.doze = prog(4.3, 1.2); L.hy = prog(5.3, 1.2);
      L.lim = prog(6.6, 1.6); L.g2 = prog(6.6, 1.6);
    }
    return L;
  }
  function circuitView(a) {
    const g = geo(), L = levels(), s = g.s, nw = g.nw;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf2", "#fdf0f4");
    Anima.bokeh(6, "#ffe7a3", 0.6, 31);
    Anima.petals(6, 0.4, 12);
    // 两个街区：皮层 / 中脑
    const bandTop = Anima.topSafe() + 2, midTop = H * 0.56;
    rrect(W * 0.015, bandTop, W * 0.97, H * 0.5 - bandTop, 18); ctx.fillStyle = alpha(C.ctx, 0.85); ctx.fill(); outline(1.5); ctx.stroke();
    rrect(W * 0.015, midTop, W * 0.97, H * 0.985 - midTop, 18); ctx.fillStyle = alpha(C.mid, 0.9); ctx.fill(); outline(1.5); ctx.stroke();
    const fsB = fz(0.024);
    text(nw ? "前额叶皮层" : "前额叶皮层（大脑表层）", W * 0.03, bandTop + fsB * 1.1, fsB, C.lavDeep, "left");
    text(nw ? "中脑 · 腹侧被盖区" : "中脑 · 腹侧被盖区（多巴胺的老家）", W * 0.03, midTop + fsB * 1.1, fsB, "#d0762a", "left");

    // 直达线：锥体 A → 边缘多巴胺 → 伏隔核
    const pA = [[g.P1[0] + s * 0.4, g.top + s * 0.3], [g.P1[0] + s * 0.4, H * 0.58], [g.D1[0] + s * 1.2, g.bot - s * 2.4]];
    flow(pA, 0.2 + L.hy * 1.1, C.glu, 0.3 + F.dir * 0.7);
    badge(pA[2][0], pA[2][1], H * 0.02, "+", C.good, 0.3 + F.dir * 0.7);
    const trk1 = [[g.D1[0] - s * 1.1, g.bot - s * 0.6], [g.NAC[0] + W * 0.02, g.NAC[1] + H * 0.035]];
    ctx.save(); ctx.globalAlpha *= 0.3 + F.dir * 0.7;
    outline(H * 0.012); ctx.beginPath(); ctx.moveTo(trk1[0][0], trk1[0][1]); ctx.lineTo(trk1[1][0], trk1[1][1]); ctx.stroke();
    const n1 = 1 + Math.round(L.lim * 3);
    for (let k = 0; k < n1; k++) {
      const t = (time * (0.12 + L.lim * 0.35) + k / n1) % 1, q = along(trk1, t);
      trainCar(q[0], q[1] - H * 0.012, H * 0.016, C.rose, Math.min(1, t * 6, (1 - t) * 6));
    }
    ctx.restore();
    station(g.NAC[0], g.NAC[1], "伏隔核", C.rose, 0.5 + L.lim * 0.5, 0.3 + F.dir * 0.7);

    // 绕一站：锥体 B → GABA 中继 → 皮层多巴胺 → 前额叶
    const pB = [[g.P2[0] + s * 0.4, g.top + s * 0.3], [g.P2[0] + s * 0.4, H * 0.6], [g.G2[0] + s * 1.2, g.bot - s * 2.4]];
    flow(pB, 0.2 + L.hy * 1.1, C.glu, 0.3 + F.ind * 0.7);
    badge(pB[2][0], pB[2][1], H * 0.02, "+", C.good, 0.3 + F.ind * 0.7);
    const pC = [[g.G2[0] + s * 0.9, g.bot - s * 1.5], [g.D2[0] - s * 1.1, g.bot - s * 1.5]];
    flow(pC, 0.15 + L.g2 * 1.1, C.gaba, 0.3 + F.ind * 0.7, 2 + Math.round(L.g2 * 3));
    badge(pC[1][0], pC[1][1], H * 0.02, "−", C.bad, 0.3 + F.ind * 0.7);
    const trk2 = [[g.D2[0] + s * 0.9, g.bot - s * 1.2], [g.D2[0] + s * 0.9, H * 0.6], [g.PFC[0], g.PFC[1] + H * 0.05]];
    ctx.save(); ctx.globalAlpha *= 0.3 + F.ind * 0.7;
    outline(H * 0.012); ctx.beginPath(); trk2.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    const n2 = L.g2 > 0.6 ? 1 : 3;
    for (let k = 0; k < n2; k++) {
      const t = (time * (0.16 - L.g2 * 0.1) + k / n2) % 1, q = along(trk2, t);
      trainCar(q[0], q[1], H * 0.016, mix(C.lavDeep, "#c9c2cc", L.g2 * 0.7), Math.min(1, t * 6, (1 - t) * 6));
    }
    ctx.restore();
    station(g.PFC[0], g.PFC[1], "前额叶", C.lavDeep, 0.5 - L.g2 * 0.5, 0.3 + F.ind * 0.7);

    // NMDA 受体：刹车员的“门”，谷氨酸从锥体 A 那边来敲门
    const rs = H * (nw ? 0.042 : 0.048);
    ctx.save(); ctx.globalAlpha *= 1;
    outline(H * 0.008); ctx.beginPath(); ctx.moveTo(g.G1[0] + s * 0.6, g.top - s * 0.2); ctx.lineTo(g.N[0] - rs * 0.6, g.top); ctx.stroke();
    const beat = 0.5 + 0.5 * Math.sin(time * 4);
    const R = Anima.receptor(g.N[0], g.top, rs, mix("#ffd27a", "#d4ced6", 1 - L.nm), L.nm * (0.55 + beat * 0.45), { shape: "square", label: "NMDA" });
    ctx.restore();
    const tS = (time * 0.55) % 1;
    const src = [g.P1[0] - s * 0.9, g.top - s * 2.2];
    if (L.drug < 0.5) {
      if (tS < 0.75) Anima.spark([src, [R.site.x, R.site.y]], tS / 0.75, H * 0.016, C.gold);
      else if (L.nm < 0.5) sfx("噗", R.site.x + rs * 0.3, R.site.y - rs * (nw ? 1.6 : 0.9), fz(0.034), C.soft, -0.1, 1 - (tS - 0.75) / 0.25);
    }
    if (L.nm < 0.5 && L.drug < 0.5) plate("掉线", R.site.x + rs * (nw ? 1.7 : 1.4), R.site.y - rs * (nw ? 0.1 : 0.6), "#ffe3e6", fz(0.022));
    // 氯胺酮访客：走过来坐进 NMDA 的门里
    if (L.drug > 0) {
      const dx = lerp(-W * 0.05, R.site.x, L.drug), dy = L.drug < 1 ? g.top - H * 0.01 : R.site.y + s * 0.8;
      chara(dx, dy, s * 0.8, Object.assign({}, KET, { walk: L.drug < 1 ? time * 9 : null, arms: L.drug < 1 ? "wave" : "hug", eyes: "happy", mouth: "cat" }));
      // 名牌挂在头顶，别压住下面的 NMDA 标签和刹车员的名牌
      plate(nw ? "氯胺酮" : "氯胺酮 / PCP", dx, dy - s * 0.8 * 3.4 - fz(0.022) * 0.6, "#ffe9d2", fz(0.022));
      say("plug", lt > 1 && lt < 5.5, dx, dy - s * 2.6, W * 0.24, H * 0.72, "我来堵住 NMDA 的门～", "say");
    }

    // 皮层的三位：GABA 刹车员 + 两位锥体神经元
    const dz = L.doze;
    chara(g.G1[0], g.top, s, { who: "GABA", gray: dz * 0.55, eyes: dz > 0.5 ? "closed" : "open", mouth: dz > 0.5 ? "wavy" : "smile", arms: dz > 0.5 ? "down" : "hold", bob: 1 - dz * 0.7, dir: 1 });
    stopSign(g.G1[0] + s * 1.2, g.top - s * 0.3, s * 0.5, dz * 1.3, 1);
    if (dz > 0.5) emote("zzz", g.G1[0] - s * 0.2, g.top - s * 3.5, s * 0.7);
    // 刹车线：GABA → 两位锥体（虚线，打瞌睡时变淡）
    ctx.save(); ctx.globalAlpha *= 1 - dz * 0.8;
    ctx.setLineDash([5, 5]); ctx.strokeStyle = C.gaba; ctx.lineWidth = Math.max(2, H * 0.006);
    for (const P of [g.P1, g.P2]) {
      ctx.beginPath(); ctx.moveTo(g.G1[0] + s * 0.5, g.top - s * 3.3); ctx.quadraticCurveTo((g.G1[0] + P[0]) / 2, g.top - s * 5.2, P[0] - s * 0.4, P[1] - s * 3.3); ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.restore();
    const hy = L.hy;
    [g.P1, g.P2].forEach((P, i) => {
      const jit = hy * Math.sin(time * 38 + i) * s * 0.06;
      chara(P[0] + jit, P[1], s, { who: "Glu", eyes: hy > 0.5 ? "wide" : "happy", mouth: hy > 0.5 ? "open" : "smile", arms: hy > 0.5 ? "up" : "down", jump: hy * Math.abs(Math.sin(time * 7 + i)) * 0.3, seed: i });
      if (hy > 0.3) for (let k = 0; k < 3; k++) Anima.bolt(P[0] + Math.cos(time * 3 + k * 2.1 + i) * s * 1.5, P[1] - s * 1.6 + Math.sin(time * 3 + k * 2.1) * s * 0.8, s * 0.3, hy);
      plate(i ? "锥体 B" : "锥体 A", P[0], P[1] + fz(0.026) * 0.9, "#fff6d6");
    });
    for (const P of [g.P1, g.P2]) badge(P[0] - s * 1.2, g.top - s * 3.1, H * 0.02, "−", C.bad, 1 - dz * 0.8);
    plate(nw ? "刹车员" : "GABA 刹车员", g.G1[0], g.top + fz(0.026) * 0.9, "#ece8ff");

    // 中脑的三位
    const lim = L.lim, g2 = L.g2;
    ctx.save(); ctx.globalAlpha *= 0.3 + F.dir * 0.7;
    chara(g.D1[0], g.bot, s, { who: "DA", dir: -1, eyes: lim > 0.5 ? "wide" : "happy", mouth: lim > 0.5 ? "o" : "smile", arms: lim > 0.5 ? "up" : "wave", jump: lim * Math.abs(Math.sin(time * 6)) * 0.25 });
    if (lim > 0.5) emote("sweat", g.D1[0] + s * 0.9, g.bot - s * 3, s * 0.6);
    plate(nw ? "边缘线" : "边缘多巴胺", g.D1[0], g.bot + fz(0.026) * 0.55, "#ffe6d2");
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= 0.3 + F.ind * 0.7;
    chara(g.G2[0], g.bot, s, { who: "GABA", eyes: g2 > 0.5 ? "angry" : "open", brow: g2 > 0.5 ? "angry" : null, mouth: g2 > 0.5 ? "flat" : "smile", arms: g2 > 0.5 ? "fist" : "down" });
    if (g2 > 0.5) emote("anger", g.G2[0] + s * 0.9, g.bot - s * 3, s * 0.6);
    plate(nw ? "中继" : "GABA 中继站", g.G2[0], g.bot + fz(0.026) * 0.55, "#ece8ff");
    chara(g.D2[0], g.bot, s, { who: "DA", gray: g2 * 0.6, eyes: g2 > 0.5 ? "teary" : "happy", mouth: g2 > 0.5 ? "sad" : "smile", arms: "down" });
    if (g2 > 0.5) emote("gloom", g.D2[0] + s * 0.2, g.bot - s * 3.3, s * 0.7);
    plate(nw ? "皮层线" : "皮层多巴胺", g.D2[0], g.bot + fz(0.026) * 0.55, "#ece8ff");
    ctx.restore();

    // 标注和对话
    callout("nmda", cur === 0 && lt > 1 && (!nw || lt < 5), R.site.x, R.site.y, nw ? W * 0.52 : g.N[0] + W * 0.06, H * (nw ? 0.68 : 0.2), "NMDA 受体：刹车员的“电源”");
    callout("pyr", cur === 0 && lt > (nw ? 5.5 : 4), g.P2[0] + s, g.top - s * 1.5, g.P2[0] + W * 0.14, H * 0.2, nw ? "锥体神经元：放谷氨酸" : "锥体神经元：放出谷氨酸的长线");
    say("ok", cur === 0 && lt > 7, g.G1[0], g.top - s * 3.2, nw ? W * 0.2 : g.G1[0] + W * 0.14, H * (nw ? 0.7 : 0.74), nw ? "有我按着呢～" : "有我按着，大家别太激动～", "say");
    callout("weak", cur === 1 && lt > 1.5 && lt < (nw ? 5.8 : 7), R.site.x, R.site.y, nw ? W * 0.52 : g.N[0] + W * 0.08, H * (nw ? 0.68 : 0.2), "钥匙插进来，门却打不开");
    say("wild", cur === 1 && lt > (nw ? 6.4 : 6), g.P1[0], g.top - s * 3.3, W * (nw ? 0.55 : 0.62), H * 0.68, nw ? "停不下来！" : "没人管啦，停不下来！", "shout");
    say("go", cur === 2 && lt > 3.5 && (!nw || lt < 6.5), g.D1[0], g.bot - s * 3.2, W * (nw ? 0.64 : 0.56), H * 0.68, "又要发车？！", "shout");
    callout("pos", cur === 2 && lt > (nw ? 7.2 : 6.5), g.NAC[0], g.NAC[1] - H * 0.02, W * (nw ? 0.55 : 0.16), H * (nw ? 0.66 : 0.72), "阳性症状：幻觉、妄想");
    callout("relay", cur === 3 && lt > 3 && (!nw || lt < 6.5), g.G2[0], g.bot - s * 2.8, nw ? W * 0.5 : g.G2[0] - W * 0.2, H * (nw ? 0.66 : 0.7), "多了一站：刹车踩得更狠");
    say("few", cur === 3 && lt > (nw ? 7.4 : 6), g.D2[0], g.bot - s * 3.2, W * 0.72, H * 0.66, "车开不出去……", "think");
    callout("neg", cur === 3 && lt > 8, g.PFC[0], g.PFC[1] + H * 0.02, W * 0.62, H * 0.2, "阴性、认知症状");
    callout("both", cur === 4 && lt > 8, g.D1[0] + s * 0.8, g.bot - s * 2.2, W * 0.48, H * 0.68, "两条线一起出问题");
    ctx.restore();
  }

  // ---------- 第 6 幕：第二把钥匙 ----------
  function keyView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    Anima.wash("#f3f9ff", "#fdf0f4");
    Anima.bokeh(7, "#cfeaf7", 0.8, 44);
    Anima.petals(8, 0.4, 3);
    const mem = H * 0.74, rx = W * 0.4, rs = H * 0.095, s = H * 0.045;
    const block = prog(2.2, 2), in1 = prog(6, 2), open = prog(8.2, 0.8);
    Anima.postMembrane(mem, "#ece8ff", { face: true, faceX: W * 0.68, mood: open > 0.5 ? 1 : 0 });
    plate(nw ? "GABA 刹车员（膜）" : "GABA 刹车员的细胞膜", W * 0.68, H * 0.95, "#fff");
    // 刹车员手里的“停”牌：门一开就重新竖起来
    stopSign(W * 0.14, mem + H * 0.17, H * 0.04, (1 - open) * 1.2, 1);
    // 胶质细胞和甘氨酸回收门
    const gx0 = W * (nw ? 0.56 : 0.6), gTop = Anima.topSafe() + 4, gBot = H * 0.34;
    rrect(gx0, gTop, W - gx0 + 20, gBot - gTop, 30); ctx.fillStyle = "#e8f6ee"; ctx.fill(); outline(1.8); ctx.stroke();
    Anima.face(W * 0.92, (gTop + gBot) / 2, H * 0.03, 1);
    text(nw ? "胶质细胞" : "旁边的胶质细胞", gx0 + W * 0.02, gTop + fz(0.024) * 1.1, fz(0.024), C.mintDeep, "left");
    const tx = W * 0.78, ty = gBot;
    Anima.transporter(tx, ty, H * 0.05, "#9fc3ea", block > 0.9 ? 0 : time * 2.5, block > 0.95);
    // 研究中的药：走过去堵住回收门
    const dx = lerp(W * 1.05, tx + H * 0.09, block);
    chara(dx, ty + H * 0.14, s * 0.85, { who: "drug", hatColor: "#b8b0f0", hatColor2: "#fff", label: "", walk: block < 1 ? time * 9 : null, dir: -1, arms: block < 1 ? "down" : "shh", eyes: "happy" });
    if (block > 0.3) plate(nw ? "研究中的药" : "研究中的药：堵回收门", dx, ty + H * 0.14 + fz(0.022) * 0.9, "#ece8ff", fz(0.022));
    // NMDA 受体：左边方形孔给谷氨酸，右边圆形孔给甘氨酸
    const R = Anima.receptor(rx, mem, rs, mix("#ffd27a", "#d9d3dc", 0.6 - open * 0.6), open, { shape: "square" });
    plate("NMDA", rx - rs * 1.9, mem - rs * 0.5, "#fff3cf");
    const gs = { x: rx + rs * 1.25, y: mem - rs * 1.05 };
    ctx.beginPath(); ctx.arc(gs.x, gs.y, rs * 0.26, 0, Math.PI * 2); ctx.fillStyle = "#e3f4fc"; ctx.fill(); outline(1.4); ctx.stroke();
    outline(1.4); ctx.beginPath(); ctx.moveTo(gs.x - rs * 0.26, gs.y + rs * 0.1); ctx.lineTo(rx + rs * 0.7, mem - rs * 0.8); ctx.stroke();
    chara(R.site.x, R.site.y + s * 0.2, s * 0.9, { who: "Glu", eyes: open > 0.5 ? "happy" : "open", mouth: open > 0.5 ? "grin" : "wavy", arms: open > 0.5 ? "up" : "hold", item: open > 0.5 ? null : "key", shadow: false });
    // 甘氨酸：先被回收门收走，门堵上后留下来，其中一位走进第二个孔
    for (let i = 0; i < 3; i++) {
      let x, y, al = 1, walk = time * 8;
      if (block < 0.95) {
        const t = (time * 0.22 + i / 3) % 1;
        x = lerp(W * 0.52, tx, t); y = lerp(H * 0.62, ty + H * 0.06, t); al = Math.min(1, (1 - t) * 5);
      } else if (i === 0) {
        x = lerp(W * 0.6, gs.x + s * 0.1, in1); y = lerp(H * 0.52, gs.y + s * 0.15, in1); walk = in1 < 1 ? walk : null;
      } else { x = W * (0.56 + i * 0.07); y = H * (0.5 + i * 0.04); walk = null; }
      chara(x, y, s * 0.7, Object.assign({}, GLY, { walk, eyes: open > 0.5 && i === 0 ? "sparkle" : "happy", arms: i === 0 && in1 >= 1 ? "up" : "down", alpha: al, shadow: false, seed: i + 3 }));
    }
    if (block > 0.95 && lt > 4.2 && lt < 6) sparkles(W * 0.6, H * 0.5, s * 2, 4, 1, 9);
    // 门开了：钙离子、钠离子流进去
    if (open > 0.1) {
      for (let k = 0; k < 5; k++) {
        const t = (time * 0.7 + k / 5) % 1;
        ctx.save(); ctx.globalAlpha *= open * Math.sin(t * Math.PI);
        Anima.ion(rx + Math.sin(k * 2.3) * rs * 0.2, lerp(mem - rs * 1.2, mem + H * 0.18, t), H * 0.018, k % 2 ? "Na" : "Ca", k % 2 ? "#bfe3f5" : "#c8f0d8");
        ctx.restore();
      }
      if (lt < 9.5) sfx("咔嗒！", rx - rs * 1.6, mem - rs * 2.4, fz(0.04), "#e7a23a", -0.12, 1);
    }
    callout("gsite", lt > 0.6 && lt < 3.6, gs.x, gs.y, gs.x - W * 0.02, H * 0.28, nw ? "甘氨酸位点：第二把钥匙" : "甘氨酸位点：第二把钥匙（也认 D-丝氨酸）");
    callout("glyt", lt > 3.8 && lt < 8.5, tx - H * 0.05, ty, W * 0.4, H * 0.3, "甘氨酸回收门（GlyT1）");
    say("one", lt > 0.5 && lt < 5.5, R.site.x, R.site.y - s * 2.6, W * 0.2, H * 0.4, "一把钥匙开不了呀……", "think");
    say("two", lt > 8.8, gs.x, gs.y - s * 2, W * 0.18, H * (nw ? 0.3 : 0.4), "两把钥匙到齐，开门！", "shout");
    callout("brake", lt > 9.5, W * 0.14, mem + H * 0.08, W * 0.3, H * 0.9, "刹车重新踩住");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#d09a00", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.lavDeep, true);
  }
  function draw() {
    ctx.fillStyle = "#fff8f0"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) circuitView(S.v0);
    if (S.v1 > 0.02) keyView(S.v1);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#e7a23a",
    titleCard: { lines: ["NMDA", "掉线以后"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
