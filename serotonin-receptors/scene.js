Anima.register("serotonin-receptors", {
    "title": "血清素的受体大家庭",
    "tag": "精神病",
    "headline": "同一位血清素，推开【不同的门】",
    "lede": "血清素能开的门有十几种：有的是自己的刹车，有的是皮层的兴奋按钮，有的按住多巴胺，还有一扇直通的离子通道会带来恶心。门不同，效果就不同，药物正是靠“挑门”来挑效果。",
    "summary": "5-HT1A、1B/D 两道自身刹车，5-HT2A 兴奋按钮与纹状体多巴胺，5-HT2C 按住多巴胺和去甲肾上腺素，5-HT3 与恶心，5-HT7 与节律。",
    "chapter": "对应 Stahl《精神药理学精要》第 4～5 章 · 血清素受体",
    "footer": "",
    "canvasLabel": "拟人化的血清素快递员推开不同受体之门、引起不同效果的动画",
    "regions": ["brainstem", "pfc"],
    "parts": ["psychosis"],
    "cast": ["5HT", "Glu", "GABA", "DA", "NE", "drug"],
    "color": "#8fdcc4"
  }, () => {
  const CH = [
    { title: "一位快递员，许多扇门", v0: 1, v1: 0, v2: 0, v4: 0, v3: 0,
      pill: ["受体", "十几种"], pill2: ["快递员", "只有一位"],
      text: "血清素从脑干的中缝核出发，把信送到大脑的各个角落。可它能开的门不止一种：科学家已经找到十几种血清素受体，从 5-HT1 排到 5-HT7，下面还分 A、B、C 等亚型。同一位快递员推开不同的门，结果完全不同：有的门是刹车，有的门是油门，还有一扇是直通的离子通道。这一集，我们一扇一扇去敲门。",
      fact: "血清素受体有十几种；除了 5-HT3 是离子通道，其余都是 G 蛋白偶联受体" },
    { title: "5-HT1A：胞体上的刹车", v0: 0, v1: 1, v2: 0, v4: 0, v3: 0,
      pill: ["5-HT1A", "刹车"], pill2: ["放电", "变慢"],
      text: "血清素神经元的胞体上装着 5-HT1A 受体，这是它自己的“自身受体”。胞体附近的血清素一多，就按下这扇门，神经元放电变慢，送出去的血清素也少一些，像给自己踩刹车。下游神经元上也有 5-HT1A，开门后让那个神经元安静下来。抗焦虑药丁螺环酮是 5-HT1A 的部分激动剂：它坐上门，只把门推开一半。",
      fact: "5-HT1A 既是胞体上的自身刹车，也在下游神经元上起抑制作用" },
    { title: "5-HT1B/D：末梢上的刹车", v0: 0, v1: 1, v2: 0, v4: 0, v3: 0,
      pill: ["5-HT1B/D", "刹车"], pill2: ["释放", "变少"],
      text: "轴突末梢也有自己的刹车：5-HT1B/D 自身受体。末梢放出血清素后，一部分快递员回头按下末梢上的这扇门，末梢就知道“外面已经够多了”，下一次少放一些。胞体上的 5-HT1A 管“多久发一次信号”，末梢上的 5-HT1B/D 管“每次放多少”。两道刹车一前一后，血清素就不会越放越多。",
      fact: "末梢上的 5-HT1B/D 自身受体负反馈，减少血清素的释放" },
    { title: "5-HT2A：兴奋按钮", v0: 0, v1: 0, v2: 1, v4: 0, v3: 0,
      pill: ["5-HT2A", "兴奋按钮"], pill2: ["挡住后", "纹状体 DA↑"],
      text: "5-HT2A 是皮层锥体神经元上的兴奋按钮。血清素一按，锥体神经元更兴奋，沿长线把谷氨酸送到脑干，叫醒那里的 GABA 刹车员，刹车员再按住开往纹状体的多巴胺神经元。血清素绕了一圈，结果是少放多巴胺。第二代抗精神病药挡住 5-HT2A，这串刹车跟着松开，纹状体里的多巴胺多放一些，动作方面的副作用就少一点。",
      fact: "挡住 5-HT2A → 多巴胺的刹车松开 → 纹状体里多巴胺释放增加" },
    { title: "5-HT2C：按住 DA 和 NE", v0: 0, v1: 0, v2: 0, v4: 1, v3: 0,
      pill: ["5-HT2C", "刹车"], pill2: ["挡住后", "DA NE↑"],
      text: "5-HT2C 装在脑干的 GABA 刹车员身上。血清素一按，刹车员就去按住多巴胺和去甲肾上腺素神经元，送到前额叶的这两种递质都变少。反过来，挡住 5-HT2C，刹车松开，前额叶的多巴胺和去甲肾上腺素就多起来，一些抗抑郁药用的正是这一招。下丘脑里的 5-HT2C 还和饱腹感有关，挡住它，胃口可能变大、体重增加。",
      fact: "挡住 5-HT2C → 前额叶多巴胺、去甲肾上腺素增加；也可能让胃口变大" },
    { title: "5-HT3：一开就通的门", v0: 0, v1: 0, v2: 0, v4: 0, v3: 1,
      pill: ["5-HT3", "离子通道"], pill2: ["信号", "恶心"],
      text: "5-HT3 是血清素受体里唯一的离子通道，钥匙一插，门立刻打开，离子冲进去，信号一下就传出去。它守在肠道的迷走神经末梢，也在脑干的呕吐中枢附近。刚开始吃 SSRI 时，血清素一下子变多，猛敲 5-HT3，人就可能觉得恶心，常常几天到几周后慢慢减轻。止吐药昂丹司琼挡住这扇门，恶心的信号就传不上去了。",
      fact: "SSRI 早期的恶心和 5-HT3 被激活有关；昂丹司琼是 5-HT3 拮抗剂" },
    { title: "挑门，就能挑效果", v0: 1, v1: 0, v2: 0, v4: 0, v3: 0,
      pill: ["5-HT7", "节律"], pill2: ["药物", "挑门"],
      text: "最后一扇门 5-HT7，在下丘脑的生物钟、丘脑和皮层里都有，和昼夜节律、睡眠、情绪有关，有些药物也会挡住它。回头看：同一位血清素，开 1A 是刹车，开 2A 是兴奋，开 3 是恶心信号。药物不用改变血清素本身，只要挑门：半按 1A 帮着抗焦虑，挡住 2A 让纹状体多点多巴胺，挡住 3 就能止吐。",
      fact: "同一个递质，门不同，效果不同；药物靠“挑门”来挑效果" },
  ];

  const C = Object.assign({}, Anima.C, { post: "#e9f7f1", term: "#dff4ec", ctx: "#f0f8f4", mid: "#fff3e8" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v4: 0, v3: 0 };
  const DOORS = [
    { k: "1A", color: "#8fdcc4", shape: "round", eff: "刹车：少放电", ic: "stop" },
    { k: "1B/D", color: "#a9d8ee", shape: "round", eff: "刹车：少释放", ic: "stop" },
    { k: "2A", color: "#ffd27a", shape: "tri", eff: "兴奋按钮", ic: "bolt" },
    { k: "2C", color: "#f7b8d2", shape: "tri", eff: "按住 DA/NE", ic: "stop" },
    { k: "3", color: "#c8b8f5", shape: "square", eff: "恶心信号", ic: "ion" },
    { k: "7", color: "#ffc9a8", shape: "round", eff: "节律、情绪", ic: "clock" },
  ];
  const DRUGS = [ // 最后一幕：谁坐哪扇门
    { door: 0, t: 1.8, name: "丁螺环酮", hat: "#8fdcc4", half: true, res: "半按：抗焦虑" },
    { door: 2, t: 3.8, name: "抗精神病药", hat: "#ffb36b", res: "挡住：DA↑" },
    { door: 4, t: 5.8, name: "昂丹司琼", hat: "#b8b0f0", res: "挡住：止吐" },
    { door: 5, t: 7.8, name: "沃替西汀等", hat: "#ff9aa9", res: "挡住" },
  ];

  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

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
  function path(P, color, w) {
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); P.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke();
  }
  function flow(P, rate, color, n) {
    path(P, mix(color, "#ffffff", 0.45), H * 0.014);
    const m = n || Math.max(1, Math.round(1 + rate * 4));
    for (let k = 0; k < m; k++) {
      const t = (time * (0.1 + rate * 0.45) + k / m) % 1, q = along(P, t);
      glow(q[0], q[1], H * 0.02, color, 0.8);
      ctx.beginPath(); ctx.arc(q[0], q[1], H * 0.009, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); outline(1); ctx.stroke();
    }
  }
  function badge(x, y, r, t, color) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, r * 1.3, "#fff");
  }
  function stopSign(x, y, r, ang) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    outline(Math.max(1.5, r * 0.12)); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -r * 2.2); ctx.stroke();
    ctx.translate(0, -r * 2.2);
    ctx.beginPath();
    for (let k = 0; k < 8; k++) { const q = Math.PI / 8 + k * Math.PI / 4; if (k) ctx.lineTo(Math.cos(q) * r, Math.sin(q) * r); else ctx.moveTo(Math.cos(q) * r, Math.sin(q) * r); }
    ctx.closePath(); ctx.fillStyle = "#ff8f9f"; ctx.fill(); ctx.stroke();
    ctx.rotate(-ang); text("停", 0, 1, r * 0.9, "#fff");
    ctx.restore();
  }
  function clock(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fff8ec"; ctx.fill(); outline(1.6); ctx.stroke();
    outline(Math.max(1.5, r * 0.12));
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(time * 0.8) * r * 0.5, y + Math.sin(time * 0.8) * r * 0.5);
    ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(time * 3) * r * 0.75, y + Math.sin(time * 3) * r * 0.75); ctx.stroke();
  }
  function icon(kind, x, y, r) {
    if (kind === "stop") stopSign(x, y + r * 1.6, r * 0.7, 0);
    else if (kind === "bolt") { glow(x, y, r * 1.6, C.gold, 0.8); Anima.bolt(x, y, r, 1); }
    else if (kind === "ion") { for (let k = 0; k < 3; k++) Anima.ion(x + (k - 1) * r * 0.9, y + Math.sin(time * 4 + k) * r * 0.3, r * 0.42, "Na", "#bfe3f5"); }
    else clock(x, y, r * 0.8);
  }
  function trainCar(x, y, s, color, a) {
    ctx.save(); ctx.globalAlpha *= a;
    rrect(x - s * 1.3, y - s * 0.75, s * 2.6, s * 1.4, s * 0.45); ctx.fillStyle = color; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.fillStyle = "#fff"; rrect(x - s * 0.9, y - s * 0.5, s * 0.7, s * 0.5, s * 0.15); ctx.fill(); rrect(x + s * 0.2, y - s * 0.5, s * 0.7, s * 0.5, s * 0.15); ctx.fill();
    ctx.restore();
  }
  function track(P, n, speed, color) {
    outline(H * 0.012); ctx.beginPath(); P.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    for (let k = 0; k < n; k++) {
      const t = (time * speed + k / n) % 1, q = along(P, t);
      trainCar(q[0], q[1], H * 0.016, color, Math.min(1, t * 6, (1 - t) * 6));
    }
  }
  const drugO = (hat, o) => Object.assign({ who: "drug", hatColor: hat, hatColor2: "#ffffff", label: "" }, o);

  // ---------- 第 1、7 幕：一排门 ----------
  function doorsView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow, last = cur === 6;
    Anima.wash("#f2fbf7", "#fdf0f4");
    Anima.bokeh(7, "#c9efe0", 0.8, 5);
    Anima.petals(8, 0.4, 41);
    const mem = H * 0.72, rs = Math.min(H * 0.055, W * 0.038), s = rs * 0.72;
    Anima.postMembrane(mem, C.post, {});
    // 上方的血清素末梢
    const T = Anima.terminal(W * 0.5, Anima.topSafe() - H * 0.02, Math.min(W * 0.3, H * 0.5), H * 0.2, C.term, { face: true });
    const X = DOORS.map((d, i) => W * (0.1 + i * 0.16));
    DOORS.forEach((d, i) => {
      const t0 = 1 + i * 1.5, arrive = last ? 1 : prog(t0, 1.2);
      const dr = last ? DRUGS.filter((q) => q.door === i)[0] : null;
      const dp = dr ? prog(dr.t, 1.2) : 0;
      const on = arrive >= 1 ? (dr ? lerp(1, dr.half ? 0.5 : 0, dp) : 1) : 0;
      const hl = last && i === 5 && lt < 2 ? 1 : 0;
      const R = Anima.receptor(X[i], mem, rs, d.color, on * (0.75 + 0.25 * Math.sin(time * 4 + i)), { shape: d.shape });
      if (hl) glow(X[i], mem - rs, rs * 3, C.gold, 0.6 + 0.4 * Math.sin(time * 5));
      plate(nw ? d.k : "5-HT" + d.k, X[i], mem + H * 0.07, mix(d.color, "#ffffff", 0.5), fz(0.024));
      if (!nw || d.k === "3") text(d.k === "3" ? "离子通道" : "G 蛋白", X[i], mem + H * 0.13, fz(0.02), C.soft);
      // 血清素快递员：从末梢出发，走到自己的门上
      const p = arrive;
      if (p > 0) {
        let x = lerp(W * 0.5, R.site.x, p), y = lerp(T.bot + H * 0.12, R.site.y + s * 0.2, p) - Math.sin(p * Math.PI) * H * 0.05;
        if (dp > 0) { x = lerp(x, R.site.x - rs * 1.5, dp); y = lerp(y, mem, dp); }
        chara(x, y, s, { who: "5HT", walk: p < 1 ? time * 9 : null, eyes: dp > 0.5 ? "open" : "happy", mouth: "smile", arms: p >= 1 && !dr ? "up" : "hold", item: p < 1 ? "letter" : null, shadow: false, seed: i });
        if (dr && dp > 0.5 && !dr.half) emote("?", x - s * 0.6, y - s * 3.4, s * 0.6);
      }
      if (dr && dp > 0) {
        const x = lerp(W * 1.05, R.site.x, dp), y = dp < 1 ? mem - H * 0.02 : R.site.y + s * 0.3;
        chara(x, y, s, drugO(dr.hat, { walk: dp < 1 ? time * 9 : null, dir: -1, arms: dr.half ? "wave" : "shh", eyes: "happy", shadow: false }));
      }
      // 门开以后，头顶冒出这扇门的“效果”
      const eff = arrive >= 1 ? 1 : 0;
      if (eff) {
        const stag = nw && i % 2 ? H * 0.09 : 0;
        const iy = H * (nw ? 0.3 : 0.34) + stag, r = H * 0.034;
        ctx.save(); ctx.globalAlpha *= clamp((lt - t0 - 1.1) * 3, 0, 1) || (last ? 1 : 0);
        if (!nw && !(dr && dp > 0.5 && !dr.half)) icon(d.ic, X[i], iy, r);
        plate(dr && dp > 0.5 ? dr.res : d.eff, X[i], iy + H * 0.06, "#fff", fz(0.022));
        if (dr && dp > 0.5) plate(dr.name, X[i], mem + H * (nw ? (i % 2 ? 0.2 : 0.135) : 0.195), "#fff4e0", fz(0.022));
        ctx.restore();
      }
    });
    if (!last) {
      callout("gp", lt > 10, X[1], mem + H * 0.13, X[1] + W * 0.12, H * 0.94, "其余都是 G 蛋白偶联受体");
      callout("ch3", lt > 8.5, X[4] + rs * 0.7, mem - rs * 0.7, X[4] - W * 0.02, H * 0.22, "5-HT3：唯一的离子通道");
      say("hi", lt > 0.5 && lt < 5, W * 0.5, T.bot, W * (nw ? 0.8 : 0.2), H * 0.2, "同一封信，送去不同的门～", "say");
    } else {
      callout("c7", lt < 3.6, X[5], mem - rs * 1.8, X[5] - W * 0.08, H * 0.2, nw ? "5-HT7：节律、睡眠" : "5-HT7：生物钟、睡眠和情绪");
      say("pick", lt > 9.5, W * 0.5, T.bot, W * (nw ? 0.8 : 0.22), H * 0.2, "门挑对了，效果就挑对了！", "shout");
    }
    ctx.restore();
  }

  // ---------- 第 2、3 幕：两道自身刹车 ----------
  function brakeView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow, sc3 = cur === 2;
    Anima.wash("#f2fbf7", "#fff3ee");
    Anima.bokeh(6, "#c9efe0", 0.7, 17);
    const sx = W * (nw ? 0.2 : 0.17), sy = H * 0.66, r = H * 0.11, s = H * 0.042, rs = H * 0.042;
    // 下游神经元（右下）
    const px0 = W * 0.44, py = H * 0.8;
    ctx.save(); rrect(px0, py, W * 0.6, H * 0.3, 30); ctx.fillStyle = "#e9f2ff"; ctx.fill(); outline(1.8); ctx.stroke(); ctx.restore();
    const cxT = W * 0.7, tw = Math.min(W * 0.4, H * 0.62), th = H * 0.36, y0 = Anima.topSafe() - H * 0.04;
    // 轴突：从胞体一路通到末梢
    const ax = [[sx + r * 0.9, sy - r * 0.3], [W * 0.4, sy - r * 0.3], [W * 0.4, y0 + H * 0.02], [cxT - tw * 0.1, y0 + H * 0.02]];
    path(ax, "#f7c8b4", H * 0.022);
    // 胞体
    ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fillStyle = "#ffe0d2"; ctx.fill(); outline(2); ctx.stroke();
    const brake1 = sc3 ? 0.35 : prog(3.5, 2); // 5-HT1A 被按下的程度
    const brake2 = sc3 ? prog(3.8, 2) : 0;
    face(sx, sy + r * 0.25, r * 0.4, brake1 > 0.5 && !sc3 ? 0 : 1);
    plate(nw ? "中缝核神经元" : "中缝核的血清素神经元", sx, sy + r + H * 0.05, "#fff");
    // 胞体上的 5-HT1A
    const r1x = sx + r * 0.2, r1y = sy - r * 0.96;
    const R1 = Anima.receptor(r1x, r1y, rs, DOORS[0].color, brake1, { shape: "round" });
    plate("1A", r1x - rs * 1.5, r1y - rs * 0.4, "#e6f7ef", fz(0.022));
    const come = sc3 ? 1 : prog(2, 1.5);
    if (come > 0) chara(lerp(sx - r * 1.4, R1.site.x, come), lerp(r1y + H * 0.02, R1.site.y + s * 0.2, come) - Math.sin(come * Math.PI) * H * 0.04, s * 0.85, { who: "5HT", walk: come < 1 ? time * 9 : null, arms: come >= 1 ? "up" : "hold", eyes: "happy", shadow: false });
    if (brake1 > 0.3 && !sc3) stopSign(r1x + rs * 1.6, r1y, H * 0.022, 0);
    // 动作电位：刹车越重，跑得越少
    const rate = 1 - brake1 * 0.65;
    const tS = (time * 0.5 * rate) % 1;
    Anima.spark(ax, tS, H * 0.022, C.gold);
    // 末梢和 5-HT1B/D
    const T = Anima.terminal(cxT, y0, tw, th, C.term);
    const rbx = cxT - tw * 0.36, rby = y0 + th * 0.8;
    const R2 = Anima.receptor(rbx, rby, rs * 0.9, DOORS[1].color, brake2, { shape: "round", dir: -1 });
    plate("1B/D", rbx + rs * 2, rby + rs * 0.6, "#e3f4fc", fz(0.022));
    if (sc3) {
      const up = prog(2.5, 1.5);
      if (up > 0) chara(lerp(rbx + W * 0.08, R2.site.x, up), lerp(H * 0.66, R2.site.y + s * 3.1, up), s * 0.8, { who: "5HT", walk: up < 1 ? time * 9 : null, arms: up >= 1 ? "up" : "down", eyes: "happy", shadow: false });
      if (brake2 > 0.3) stopSign(rbx - rs * 1.6, rby + H * 0.1, H * 0.022, 0);
    }
    // 囊泡释放：每次放出的快递员
    const nRel = Math.round(4 - brake2 * 2.5);
    for (let k = 0; k < 4; k++) {
      const t = (time * 0.3 + k / 4) % 1;
      if (k >= nRel) continue;
      const x = cxT - tw * 0.12 + k * tw * 0.11, y = lerp(T.bot + H * 0.02, py - s * 2.2, t);
      chara(x, y + s * 2.4, s * 0.7, { who: "5HT", arms: "hold", item: "letter", eyes: "happy", alpha: Math.min(1, t * 5, (1 - t) * 5), shadow: false, seed: k });
    }
    for (let k = 0; k < 3; k++) Anima.vesicle(cxT - tw * 0.1 + k * tw * 0.12, T.bot - th * 0.22 - (k % 2) * th * 0.12, H * 0.03, "#62c9ab", Math.round(5 - brake2 * 3), k * 5);
    // 下游神经元上的突触后 5-HT1A（第 2 幕）和丁螺环酮
    const pr = W * 0.62, pr2 = W * 0.82;
    const Rp = Anima.receptor(pr, py, rs, DOORS[0].color, sc3 ? 0.6 : 1, { shape: "round" });
    plate("1A", pr - rs * 1.5, py - rs * 0.5, "#e6f7ef", fz(0.022));
    chara(Rp.site.x, Rp.site.y + s * 0.2, s * 0.8, { who: "5HT", eyes: "happy", arms: "up", shadow: false });
    const bu = sc3 ? 0 : prog(7, 2);
    const Rb = Anima.receptor(pr2, py, rs, DOORS[0].color, bu * 0.5, { shape: "round" });
    plate("1A", pr2 - rs * 1.5, py - rs * 0.5, "#e6f7ef", fz(0.022));
    if (bu > 0) {
      chara(lerp(W * 1.05, Rb.site.x, bu), bu < 1 ? py - H * 0.01 : Rb.site.y + s * 0.2, s * 0.85, drugO("#8fdcc4", { walk: bu < 1 ? time * 9 : null, dir: -1, arms: bu >= 1 ? "wave" : "down", eyes: "happy", shadow: false }));
      plate("丁螺环酮", Rb.site.x, py + H * 0.08, "#e6f7ef", fz(0.024));
    }
    face(W * 0.5, py + H * 0.1, H * 0.035, 1);
    if (!sc3) plate(nw ? "下游：安静下来" : "下游神经元：安静下来", W * 0.64, H * 0.95, "#fff", fz(0.022));
    // 标注
    if (!sc3) {
      callout("c1a", lt > 4, r1x, R1.site.y, W * 0.24, H * 0.24, nw ? "5-HT1A：胞体刹车" : "5-HT1A 自身受体：胞体上的刹车");
      say("slow", lt > 5 && lt < 9.5, sx, sy - r, W * 0.3, H * 0.44, "信号……慢一点发～", "think");
      callout("half", lt > 9.2, Rb.site.x, Rb.site.y, W * 0.64, H * 0.56, nw ? "部分激动剂：推开一半" : "部分激动剂：只把门推开一半");
    } else {
      callout("c1b", lt > 4.5, rbx, rby, W * 0.28, H * 0.22, nw ? "5-HT1B/D：末梢刹车" : "5-HT1B/D 自身受体：末梢上的刹车");
      say("enough", lt > 7, cxT + tw * 0.2, y0 + th * 0.5, W * 0.88, H * 0.52, "外面够多啦，少放点～", "say");
      callout("two", lt > 1 && lt < 4.5, r1x, R1.site.y, W * 0.24, H * 0.24, "1A 管发几次，1B/D 管放多少");
    }
    ctx.restore();
  }

  // ---------- 第 4、5 幕：绕一圈的刹车链 ----------
  function chainView(a, mode) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow, s = H * (nw ? 0.046 : 0.044);
    Anima.wash("#fbfaf2", "#fdf0f4");
    Anima.bokeh(6, "#ffe7a3", 0.6, 7 + mode);
    const bandTop = Anima.topSafe() + 2, midTop = H * 0.56, top = H * 0.47, bot = H * 0.93, fsB = fz(0.024);
    rrect(W * 0.015, bandTop, W * 0.97, H * 0.51 - bandTop, 18); ctx.fillStyle = alpha(C.ctx, 0.9); ctx.fill(); outline(1.5); ctx.stroke();
    rrect(W * 0.015, midTop, W * 0.97, H * 0.985 - midTop, 18); ctx.fillStyle = alpha(C.mid, 0.9); ctx.fill(); outline(1.5); ctx.stroke();
    const blk = prog(6, 2.2); // 药物挡住受体
    const press = 1 - blk; // 5-HT 按门的程度
    const drugName = mode ? "5-HT2C 拮抗剂" : (nw ? "第二代抗精神病药" : "第二代抗精神病药");
    if (!mode) {
      text("皮层", W * 0.03, bandTop + fsB * 1.1, fsB, C.mintDeep, "left");
      text(nw ? "脑干 · 黑质" : "脑干 · 黑质（多巴胺的老家）", W * 0.03, midTop + fsB * 1.1, fsB, "#d0762a", "left");
      const P = [W * 0.4, top], G = [W * 0.44, bot], D = [W * 0.7, bot], ST = [W * 0.86, H * 0.3];
      const rx = W * (nw ? 0.23 : 0.2), rs = H * 0.045;
      const R = Anima.receptor(rx, top, rs, DOORS[2].color, press * (0.7 + 0.3 * Math.sin(time * 5)), { shape: "tri" });
      plate("2A", rx + rs * 0.2, top + fz(0.026) * 0.9, "#fff3cf", fz(0.022));
      outline(H * 0.008); ctx.beginPath(); ctx.moveTo(rx + rs * 0.7, top); ctx.lineTo(P[0] - s * 0.6, top - s * 0.2); ctx.stroke();
      // 谷氨酸长线 → GABA（+），GABA → 多巴胺（−）
      const pA = [[P[0] + s * 0.4, top + s * 0.3], [P[0] + s * 0.4, H * 0.62], [G[0] - s * 1.2, bot - s * 2.4]];
      flow(pA, 0.1 + press * 1.1, C.gold);
      badge(pA[2][0], pA[2][1], H * 0.02, "+", C.good);
      const pB = [[G[0] + s * 0.9, bot - s * 1.5], [D[0] - s * 1.1, bot - s * 1.5]];
      flow(pB, 0.1 + press * 1.1, C.lavDeep);
      badge(pB[1][0], pB[1][1], H * 0.02, "−", C.bad);
      track([[D[0] + s * 0.9, bot - s * 1.2], [D[0] + s * 0.9, H * 0.6], [ST[0], ST[1] + H * 0.05]], 1 + Math.round(blk * 3), 0.1 + blk * 0.25, C.rose);
      plate("纹状体", ST[0], ST[1], mix(C.rose, "#ffffff", 0.55));
      // 角色
      const s5 = blk > 0 ? lerp(R.site.x, R.site.x - W * 0.09, blk) : R.site.x;
      chara(s5, blk > 0 ? top : R.site.y + s * 0.2, s * 0.85, { who: "5HT", arms: press > 0.5 ? "up" : "down", eyes: press > 0.5 ? "happy" : "open", shadow: false });
      if (blk > 0.6) emote("?", s5 + s, top - s * 3, s * 0.6);
      plate(nw ? "血清素" : "血清素（来自中缝核）", W * (nw ? 0.08 : 0.08), top + fz(0.026) * 0.9, "#e6f7ef");
      if (blk > 0) {
        chara(lerp(-W * 0.05, R.site.x, blk), blk < 1 ? top - H * 0.01 : R.site.y + s * 0.2, s * 0.85, drugO("#ffb36b", { walk: blk < 1 ? time * 9 : null, arms: "shh", eyes: "happy", shadow: false }));
      }
      chara(P[0], top, s, { who: "Glu", eyes: press > 0.5 ? "sparkle" : "happy", mouth: press > 0.5 ? "open" : "smile", arms: press > 0.5 ? "up" : "down", jump: press * Math.abs(Math.sin(time * 6)) * 0.25 });
      if (press > 0.5) for (let k = 0; k < 3; k++) Anima.bolt(P[0] + Math.cos(time * 3 + k * 2.1) * s * 1.5, top - s * 1.6 + Math.sin(time * 3 + k * 2.1) * s * 0.8, s * 0.3, press);
      plate("锥体神经元", P[0], top + fz(0.026) * 0.9, "#fff6d6");
      chara(G[0], bot, s, { who: "GABA", eyes: press > 0.5 ? "angry" : "happy", brow: press > 0.5 ? "angry" : null, arms: press > 0.5 ? "fist" : "down", mouth: press > 0.5 ? "flat" : "smile" });
      plate(nw ? "GABA" : "GABA 刹车员", G[0], bot + fz(0.026) * 0.55, "#ece8ff");
      chara(D[0], bot, s, { who: "DA", gray: press * 0.5, eyes: press > 0.5 ? "sleepy" : "sparkle", mouth: press > 0.5 ? "flat" : "grin", arms: press > 0.5 ? "down" : "up" });
      plate(nw ? "多巴胺" : "多巴胺神经元", D[0], bot + fz(0.026) * 0.55, "#ffe6d2");
      if (blk > 0.3) plate(nw ? "抗精神病药" : drugName, R.site.x, R.site.y - s * 3.3, "#ffe9d2", fz(0.022));
      callout("btn", lt > 1 && lt < 5.5, R.site.x, R.site.y, W * 0.3, H * 0.2, "5-HT2A：兴奋按钮");
      say("brake", lt > 3 && lt < 6.5, G[0], bot - s * 3.2, W * (nw ? 0.2 : 0.22), H * 0.7, "锥体叫我去刹车！", "shout");
      callout("more", lt > 9, ST[0], ST[1] + H * 0.03, W * 0.6, H * 0.2, "刹车松开：纹状体多巴胺↑");
      say("free", lt > 9.5, D[0], bot - s * 3.2, W * (nw ? 0.5 : 0.56), H * 0.72, "可以多发车啦～", "say");
    } else {
      text(nw ? "前额叶" : "前额叶皮层", W * 0.03, bandTop + fsB * 1.1, fsB, C.mintDeep, "left");
      text(nw ? "脑干" : "脑干（中缝核、腹侧被盖区、蓝斑）", W * 0.03, midTop + fsB * 1.1, fsB, "#d0762a", "left");
      const G = [W * 0.4, bot], D = [W * 0.64, bot], N = [W * 0.86, bot], ST = [W * 0.75, H * 0.3];
      const rx = W * 0.24, rs = H * 0.045;
      const R = Anima.receptor(rx, bot, rs, DOORS[3].color, press * (0.7 + 0.3 * Math.sin(time * 5)), { shape: "tri" });
      plate("2C", rx + rs * 1.4, bot - rs * 2, "#ffe9f0", fz(0.022));
      outline(H * 0.008); ctx.beginPath(); ctx.moveTo(rx + rs * 0.7, bot); ctx.lineTo(G[0] - s * 0.6, bot - s * 0.2); ctx.stroke();
      const pB = [[G[0] + s * 0.9, bot - s * 1.9], [D[0] - s * 1.1, bot - s * 1.9]];
      flow(pB, 0.1 + press * 1.1, C.lavDeep);
      badge(pB[1][0], pB[1][1], H * 0.02, "−", C.bad);
      const pC = [[G[0] + s * 0.5, bot - s * 3.4], [G[0] + s * 0.5, H * 0.62], [N[0] - s * 1.1, H * 0.62], [N[0] - s * 1.1, bot - s * 1.9]];
      flow(pC, 0.1 + press * 1.1, C.lavDeep);
      badge(pC[3][0], pC[3][1], H * 0.02, "−", C.bad);
      track([[D[0], bot - s * 3.4], [ST[0] - W * 0.03, ST[1] + H * 0.05]], 1 + Math.round(blk * 2), 0.1 + blk * 0.25, C.rose);
      track([[N[0], bot - s * 3.4], [ST[0] + W * 0.03, ST[1] + H * 0.05]], 1 + Math.round(blk * 2), 0.1 + blk * 0.25, "#ec6470");
      plate("前额叶", ST[0], ST[1], mix(C.lavDeep, "#ffffff", 0.6));
      // 下丘脑的小卡片：饱腹感
      const cx0 = W * 0.2, cy0 = H * (nw ? 0.355 : 0.33);
      rrect(cx0 - W * 0.16, cy0 - H * 0.095, W * 0.32, H * 0.25, 16); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.4); ctx.stroke();
      plate(nw ? "下丘脑 2C：饱了" : "下丘脑里的 2C：“吃饱啦”", cx0, cy0 - H * 0.05, "#fff", fz(0.024));
      ctx.beginPath(); ctx.ellipse(cx0, cy0 + H * 0.06, H * 0.06, H * 0.035, 0, 0, Math.PI); ctx.fillStyle = "#ffd9c2"; ctx.fill(); outline(1.6); ctx.stroke();
      outline(1.6); ctx.beginPath(); ctx.moveTo(cx0 - H * 0.07, cy0 + H * 0.06); ctx.lineTo(cx0 + H * 0.07, cy0 + H * 0.06); ctx.stroke();
      for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(cx0 + (k - 1) * H * 0.025, cy0 + H * 0.05, H * 0.018, Math.PI, 0); ctx.fillStyle = "#fffaf3"; ctx.fill(); ctx.stroke(); }
      if (blk > 0.5) { emote("heart", cx0 + H * 0.09, cy0, H * 0.03); text(nw ? "胃口↑" : "胃口变大", cx0, cy0 + H * 0.14, fz(0.024), C.bad); }
      // 角色
      const f5 = lerp(R.site.x, W * 0.08, blk);
      chara(f5, blk > 0 ? lerp(R.site.y + s * 0.2, bot, blk) : R.site.y + s * 0.2, s * 0.85, { who: "5HT", arms: press > 0.5 ? "up" : "down", eyes: press > 0.5 ? "happy" : "open", shadow: false });
      if (blk > 0.6) emote("?", f5 + s, bot - s * 3, s * 0.6);
      plate("血清素", blk > 0.5 ? f5 : W * 0.08, bot + fz(0.026) * 0.55, "#e6f7ef");
      if (blk > 0) {
        chara(lerp(-W * 0.05, R.site.x, blk), blk < 1 ? bot : R.site.y + s * 0.2, s * 0.8, drugO("#f7b8d2", { walk: blk < 1 ? time * 9 : null, arms: "shh", eyes: "happy", shadow: false }));
        if (blk > 0.3) plate(nw ? "2C 拮抗剂" : drugName, R.site.x, H * 0.66, "#ffe9f0", fz(0.022));
      }
      chara(G[0], bot, s, { who: "GABA", eyes: press > 0.5 ? "angry" : "happy", brow: press > 0.5 ? "angry" : null, arms: press > 0.5 ? "fist" : "down", mouth: press > 0.5 ? "flat" : "smile" });
      plate(nw ? "GABA" : "GABA 刹车员", G[0], bot + fz(0.026) * 0.55, "#ece8ff");
      chara(D[0], bot, s, { who: "DA", gray: press * 0.5, eyes: press > 0.5 ? "sleepy" : "sparkle", mouth: press > 0.5 ? "flat" : "grin", arms: press > 0.5 ? "down" : "up" });
      plate("DA", D[0], bot + fz(0.026) * 0.55, "#ffe6d2");
      chara(N[0], bot, s, { who: "NE", gray: press * 0.5, eyes: press > 0.5 ? "sleepy" : "sparkle", mouth: press > 0.5 ? "flat" : "grin", arms: press > 0.5 ? "down" : "up" });
      plate("NE", N[0], bot + fz(0.026) * 0.55, "#ffe0e3");
      callout("c2c", lt > 1 && lt < 5.5, R.site.x, R.site.y, W * 0.42, H * 0.6, nw ? "5-HT2C：在 GABA 身上" : "5-HT2C：装在 GABA 刹车员身上");
      say("hold", lt > 3 && lt < 6.5, D[0], bot - s * 3.2, W * 0.62, H * 0.4, "被按住了……", "think");
      callout("up", lt > 9, ST[0], ST[1] + H * 0.03, W * 0.56, H * 0.2, "刹车松开：DA、NE↑");
    }
    ctx.restore();
  }

  // ---------- 第 6 幕：5-HT3 和恶心 ----------
  function nauseaView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow, s = H * 0.045;
    Anima.wash("#f6f3ff", "#fff1e8");
    Anima.bokeh(6, "#e4dcff", 0.7, 23);
    // 肠道：下方的一段波浪形肠壁
    const gy = H * 0.8;
    ctx.beginPath(); ctx.moveTo(-10, H + 10); ctx.lineTo(-10, gy);
    for (let x = 0; x <= W + 10; x += 16) ctx.lineTo(x, gy + Math.sin(x / 30 + time) * H * 0.012);
    ctx.lineTo(W + 10, H + 10); ctx.closePath(); ctx.fillStyle = "#ffd9d0"; ctx.fill(); outline(1.8); ctx.stroke();
    plate("肠道", W * 0.08, H * 0.92, "#fff");
    const blk = prog(6.5, 2), fire = 1 - blk;
    // 迷走神经：从肠道一路通到脑干的呕吐中枢
    const cx = W * (nw ? 0.8 : 0.78), cy = H * 0.34, rs = H * 0.065, rx = W * 0.4;
    const nerve = [[rx, gy - rs * 0.1], [rx, H * 0.56], [cx - H * 0.1, H * 0.56], [cx - H * 0.02, cy + H * 0.08]];
    path(nerve, "#e4dcff", H * 0.02);
    const R = Anima.receptor(rx, gy, rs, DOORS[4].color, fire * 1, { shape: "square" });
    plate("5-HT3", rx + rs * 1.9, gy - rs * 0.8, "#efe9ff", fz(0.024));
    // 离子一下冲进去
    if (fire > 0.2 && lt > 1.5) {
      for (let k = 0; k < 4; k++) {
        const t = (time * 1.1 + k / 4) % 1;
        ctx.save(); ctx.globalAlpha *= fire * Math.sin(t * Math.PI);
        Anima.ion(rx + Math.sin(k * 2) * rs * 0.15, lerp(gy - rs * 1.6, gy + H * 0.14, t), H * 0.016, "Na", "#bfe3f5");
        ctx.restore();
      }
      Anima.spark(nerve, (time * 0.7) % 1, H * 0.022, C.gold);
    }
    // 呕吐中枢：脑干里的一个圆圆的小站
    const sick = lt > 3 ? fire : 0;
    ctx.beginPath(); ctx.arc(cx, cy, H * 0.1, 0, Math.PI * 2); ctx.fillStyle = mix("#e8f7ef", "#d8f0b8", sick); ctx.fill(); outline(2); ctx.stroke();
    if (sick > 0.5) { face(cx, cy + H * 0.015, H * 0.05, 0); emote("sweat", cx + H * 0.08, cy - H * 0.08, H * 0.035); Anima.sweat(cx - H * 0.07, cy - H * 0.03, H * 0.02); }
    else face(cx, cy + H * 0.015, H * 0.05, 1);
    plate(nw ? "呕吐中枢" : "脑干的呕吐中枢", cx, cy + H * 0.14, "#fff");
    // SSRI 访客：血清素一下变多
    chara(W * 0.12, gy, s, drugO("#8fdcc4", { arms: "wave", eyes: "happy", mouth: "smile" }));
    plate(nw ? "SSRI 刚开始" : "刚开始吃 SSRI", W * 0.12, gy - s * 3.9, "#e6f7ef", fz(0.022));
    const go = prog(0.5, 1.2);
    for (let k = 0; k < 3; k++) {
      const x = W * (0.2 + k * 0.05);
      let xx = x + Math.sin(time + k) * W * 0.01, yy = gy - H * 0.005, walk = null;
      if (k === 0) { xx = lerp(x, R.site.x, go * (1 - blk)); yy = lerp(gy, R.site.y + s * 0.2, go * (1 - blk)); walk = go > 0 && go < 1 ? time * 9 : null; }
      chara(xx, yy, s * 0.7, { who: "5HT", walk, arms: k === 0 && fire > 0.5 ? "up" : "hold", eyes: blk > 0.5 ? "open" : "happy", shadow: false, seed: k });
      if (k === 0 && blk > 0.6) emote("?", xx + s * 0.6, yy - s * 2.4, s * 0.5);
    }
    if (blk > 0) {
      chara(lerp(W * 0.62, R.site.x, blk), blk < 1 ? gy : R.site.y + s * 0.2, s * 0.85, drugO("#b8b0f0", { walk: blk < 1 ? time * 9 : null, dir: -1, arms: "shh", eyes: "happy", shadow: false }));
      plate("昂丹司琼", R.site.x + W * 0.1, gy + H * 0.1, "#ece8ff", fz(0.024));
    }
    callout("ch", lt > 1 && lt < 6, R.site.x, R.site.y, W * 0.24, H * 0.5, "5-HT3：一插钥匙就开的离子通道");
    callout("vag", lt > 3 && lt < 8, rx, H * 0.56, W * 0.4, H * 0.26, "迷走神经把信号送上去");
    say("sick", lt > 4 && lt < 7.5, cx, cy - H * 0.1, W * 0.62, H * 0.62, "有点想吐……", "think");
    say("blk", lt > 8, R.site.x, R.site.y - s * 2.4, W * 0.6, H * 0.66, "这扇门我来挡住～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.mintDeep, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }
  function draw() {
    ctx.fillStyle = "#f7fbf8"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) doorsView(S.v0);
    if (S.v1 > 0.02) brakeView(S.v1);
    if (S.v2 > 0.02) chainView(S.v2, 0);
    if (S.v4 > 0.02) chainView(S.v4, 1);
    if (S.v3 > 0.02) nauseaView(S.v3);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#4fb893",
    titleCard: { lines: ["血清素的", "受体大家庭"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
