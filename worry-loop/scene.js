Anima.register("worry-loop", {
    "title": "停不下来的担心：担忧回路",
    "tag": "焦虑",
    "headline": "“万一……”为什么【停不下来】？",
    "lede": "恐惧是杏仁核拉响的快警报；担忧却发生在一条“皮层-纹状体-丘脑-皮层”的环路里，念头一圈圈地转。看看谁在调节这条环路的转速，药物和认知行为治疗又怎样帮它慢下来。",
    "summary": "恐惧与担忧的区别、CSTC 担忧回路、谷氨酸/NE/GABA/5-HT 各站调节；SSRI/SNRI、丁螺环酮、普瑞巴林、苯二氮䓬各自调小转速的方式，以及认知行为治疗的“下车”。",
    "chapter": "对应 Stahl《精神药理学精要》第 8 章 · 担忧回路与广泛性焦虑",
    "footer": "如果担心已经影响到睡眠、工作和生活，请找医生或心理治疗师聊一聊。药物的选择和加减请遵医嘱。",
    "canvasLabel": "谷氨酸信使坐着小列车在“皮层-纹状体-丘脑-皮层”环路上一圈圈转，各种调节员和药物让它慢下来的动画",
    "regions": ["pfc", "striatum"],
    "parts": ["anxiety"],
    "cast": ["Glu", "NE", "GABA", "5HT", "drug", "neuron"],
    "color": "#9ab6ea"
  }, () => {
  const CH = [
    { title: "恐惧和担忧", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["恐惧", "快·身体"], pill2: ["担忧", "反复想"],
      text: "焦虑有两种不同的样子。恐惧来得快：杏仁核这座警报塔一看到危险，马上拉响警报，心跳加快、身体绷紧，危险走了，警报也慢慢停下。担忧则是另一回事：它发生在一条环路里，脑子反复想着“万一……”，眼前明明没有危险，念头却一圈圈转个不停。这一集，我们去看看这条担忧的环路。",
      fact: "恐惧主要和杏仁核有关，担忧主要和皮层-纹状体-丘脑-皮层环路有关" },
    { title: "停不下来的环路", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["环路", "CSTC"], pill2: ["伴随", "紧张·累"],
      text: "这条环路叫皮层-纹状体-丘脑-皮层回路（CSTC）。前额叶皮层冒出一个“万一”，信使沿着轨道把它送到纹状体，再经过丘脑，又回到皮层，下一圈还会多带回几个“万一”。在广泛性焦虑里，担心就像在这条环路里转个不停，常常持续好几个月，还伴着肌肉紧张、睡不好、容易累。",
      fact: "广泛性焦虑：难以控制的担心，常伴肌肉紧张、睡眠问题和疲劳" },
    { title: "各站的调节员", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["油门", "Glu·NE"], pill2: ["刹车", "GABA·5-HT"],
      text: "环路转多快，受好几位调节员影响。谷氨酸是轨道上的信使，也是油门；去甲肾上腺素从蓝斑赶来，让大脑更警觉，转速往上提；GABA 是刹车员，按一下，转速就慢下来；5-HT 从中缝核送来，也帮着让环路安静一些。治疗焦虑的药，大多是找到其中一位调节员，帮环路把转速调小。",
      fact: "谷氨酸、去甲肾上腺素偏向“加速”，GABA、5-HT 偏向“减速”" },
    { title: "慢慢调小：SSRI、SNRI 和丁螺环酮", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["一线", "SSRI/SNRI"], pill2: ["起效", "几周"],
      text: "长期治疗里，SSRI 和 SNRI 常是一线选择。它们堵住回收门，让 5-HT 等递质多留一会儿，环路的转速在几周里慢慢调小，所以要耐心坚持，别刚吃几天就放弃。丁螺环酮是 5-HT1A 受体的部分激动剂，只把这扇门按一半，同样要几周才起效，一般不容易成瘾。",
      fact: "SSRI、SNRI 是广泛性焦虑常用的一线药，需要数周起效" },
    { title: "普瑞巴林和苯二氮䓬", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["普瑞巴林", "松油门"], pill2: ["苯二氮䓬", "短期"],
      text: "还有两位帮手作用更直接。普瑞巴林抓住谷氨酸末梢上钙通道的 α2δ 小亚基，神经元过度兴奋时，钙进得少，谷氨酸就放得少，油门松了一些；它在一些国家被批准用于广泛性焦虑。苯二氮䓬帮 GABA 的门开得更勤，刹车一下就踩住，见效快，但久用会耐受和依赖，一般只短期使用，要遵医嘱。",
      fact: "普瑞巴林结合 α2δ，减少过度的谷氨酸释放；苯二氮䓬宜短期使用" },
    { title: "学会下车", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["CBT", "学会下车"], pill2: ["求助", "找医生"],
      text: "药物帮环路减速，认知行为治疗则教人“下车”。担心的念头像一列列车开过来，过去我们一看到就跳上去，跟着转一圈又一圈。练习以后，可以站在站台上看着它：“哦，又是一个‘万一’。”不上车，列车也会开走，环路慢慢不再转得那么勤。如果担心已经影响生活，请找医生或心理治疗师聊一聊。",
      fact: "认知行为治疗帮助人学会让念头经过，而不是跟着它转" },
  ];

  const C = Object.assign({}, Anima.C, { wl: "#9ab6ea", wlD: "#5b7fc4" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0, ang = -Math.PI / 2, spd = 1.4;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function spdTarget() {
    if (cur === 0) return 1.5;
    if (cur === 1) return 1.8;
    if (cur === 2) return lt < 3.6 ? 1.1 : lt < 6.6 ? 2.2 : lt < 9.2 ? 1.1 : 0.6;
    if (cur === 3) return lt < 3 ? 1.8 : lerp(1.8, 0.55, clamp((lt - 3) / 7, 0, 1));
    return 1.2;
  }
  function update(dt) {
    lt = Anima.sceneTime;
    spd = lerp(spd, spdTarget(), 1 - Math.exp(-dt * 2));
    ang += dt * spd;
  }

  // ---------- 小工具 ----------
  function plate(t, x, y, bg, fs, x0, x1) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + (x0 === undefined ? 4 : x0), (x1 === undefined ? W - 4 : x1) - w / 2);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return w;
  }
  function card(x, y, w, h) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
  }
  function cardTitle(x, y, w, title, color) { plate(title, x + w / 2, y, color, fz(0.03), x + 2, x + w - 2); }
  function bg(top, bot, seed) {
    Anima.wash(top, bot);
    Anima.bokeh(6, "#d6e3fb", 0.6, seed);
    Anima.petals(6, 0.35, seed + 3);
  }
  // 环形轨道：皮层（上）→ 纹状体（右下）→ 丘脑（左下）→ 回到皮层
  const ST = [[-Math.PI / 2, "皮层"], [Math.PI / 6, "纹状体"], [Math.PI * 5 / 6, "丘脑"]];
  function track(cx, cy, rx, ry, a, labels) {
    const al = a == null ? 1 : a;
    ctx.save(); ctx.globalAlpha *= al;
    ctx.strokeStyle = "#d9c7b5"; ctx.lineWidth = Math.max(2, H * 0.006);
    for (let k = 0; k < 36; k++) {
      const q = k / 36 * Math.PI * 2, c = Math.cos(q), s = Math.sin(q);
      ctx.beginPath(); ctx.moveTo(cx + (rx - H * 0.018) * c, cy + (ry - H * 0.018) * s); ctx.lineTo(cx + (rx + H * 0.018) * c, cy + (ry + H * 0.018) * s); ctx.stroke();
    }
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.ellipse(cx, cy, rx + d * H * 0.012, ry + d * H * 0.012, 0, 0, Math.PI * 2); outline(Math.max(1.5, H * 0.004)); ctx.stroke(); }
    ctx.restore();
    const pts = ST.map((st) => {
      const x = cx + rx * Math.cos(st[0]), y = cy + ry * Math.sin(st[0]);
      ctx.beginPath(); ctx.arc(x, y, H * 0.022, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
      return [x, y];
    });
    if (labels !== false) ST.forEach((st, i) => {
      const ox = Math.cos(st[0]), oy = Math.sin(st[0]);
      plate(st[1], pts[i][0] + ox * H * 0.07, pts[i][1] + oy * H * 0.06 + (i === 0 ? -H * 0.005 : H * 0.01), i === 0 ? "#e4eefb" : i === 1 ? "#ffe6d6" : "#efe6fb", fz(0.025));
    });
    return pts;
  }
  // 小列车：谷氨酸信使坐在车上，带着一张“万一……”
  function train(cx, cy, rx, ry, q, s, opt) {
    const x = cx + rx * Math.cos(q), y = cy + ry * Math.sin(q);
    const dir = -Math.sin(q) >= 0 ? 1 : -1;
    const o = opt || {};
    ctx.save(); ctx.globalAlpha *= o.alpha == null ? 1 : o.alpha;
    rrect(x - s * 1.2, y - s * 0.9, s * 2.4, s * 0.9, s * 0.3); ctx.fillStyle = o.cart || "#ffd27a"; ctx.fill(); outline(1.5); ctx.stroke();
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x + d * s * 0.7, y - s * 0.05, s * 0.28, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke(); }
    chara(x, y - s * 0.6, s * 0.75, { who: o.who || "Glu", dir, arms: "hold", item: "letter", eyes: o.eyes || "open", mouth: o.mouth || "wavy", shadow: false });
    if (o.rider) chara(x - dir * s * 0.8, y - s * 0.6, s * 0.75, { who: "neuron", dir, eyes: "wide", mouth: "wavy", brow: "worry", shadow: false });
    ctx.restore();
    return { x, y };
  }
  function gauge(x, y, r, v, label) {
    ctx.beginPath(); ctx.arc(x, y, r, Math.PI, 0); ctx.closePath(); ctx.fillStyle = "#fffdf6"; ctx.fill(); outline(1.8); ctx.stroke();
    const seg = [["#bfe8d6", 0, 0.4], ["#fff1b8", 0.4, 0.7], ["#ffc2c9", 0.7, 1]];
    seg.forEach((sg) => { ctx.beginPath(); ctx.arc(x, y, r * 0.82, Math.PI + sg[1] * Math.PI, Math.PI + sg[2] * Math.PI); ctx.strokeStyle = sg[0]; ctx.lineWidth = r * 0.16; ctx.stroke(); });
    const q = Math.PI + clamp(v, 0, 1) * Math.PI + Math.sin(time * 9) * 0.02 * v;
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.06); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(q) * r * 0.72, y + Math.sin(q) * r * 0.72); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r * 0.08, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    text(label, x, y + r * 0.3, fz(0.024), C.ink);
  }
  function tower(x, y, h, alarm) {
    const w = h * 0.32;
    rrect(x - w / 2, y - h, w, h, w * 0.2); ctx.fillStyle = "#f3e3ff"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y - h, w * 0.55, Math.PI, 0); ctx.closePath(); ctx.fillStyle = alarm > 0.5 ? "#ff8a8a" : "#e0d4f5"; ctx.fill(); outline(1.6); ctx.stroke();
    if (alarm > 0.3) { glow(x, y - h - w * 0.2, h * 0.5, "#ff8a8a", alarm * (0.6 + 0.4 * Math.sin(time * 12))); }
    face(x, y - h * 0.45, w * 0.32, alarm > 0.5 ? 0 : 1);
  }
  function snake(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a;
    ctx.strokeStyle = C.line; ctx.lineWidth = s * 0.5; ctx.lineCap = "round";
    ctx.beginPath(); for (let k = 0; k <= 12; k++) { const xx = x - k * s * 0.5, yy = y + Math.sin(k * 0.9 + time * 5) * s * 0.4; if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); } ctx.stroke();
    ctx.strokeStyle = "#8fcf6a"; ctx.lineWidth = s * 0.34; ctx.stroke();
    ctx.beginPath(); ctx.arc(x + s * 0.2, y, s * 0.4, 0, Math.PI * 2); ctx.fillStyle = "#8fcf6a"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.fillStyle = C.line; ctx.beginPath(); ctx.arc(x + s * 0.35, y - s * 0.1, s * 0.07, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  // ---------- 第 1 幕：恐惧 vs 担忧 ----------
  function twoView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f3f7ff", "#fdf4f6", 11);
    const top = Anima.topSafe() + H * 0.05, ch = H - top - H * 0.04, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h); card(R.x, R.y, R.w, R.h);
    // 左：恐惧——快来快去
    const sn = lt < 1 ? 0 : lt < 5.8 ? prog(1, 0.6) : 1 - prog(5.8, 1);
    const alarm = lt > 1.5 && lt < 6.4 ? 1 : 0;
    const gy = L.y + L.h - H * 0.05, s = Math.min(H * 0.045, cw * 0.08);
    tower(L.x + L.w * 0.22, gy, Math.min(H * 0.3, L.h * 0.5), alarm);
    const snx = L.x + L.w * (0.55 + (lt > 5.8 ? prog(5.8, 1) * 0.5 : 0));
    snake(snx, gy - s * 0.3, s * 0.7, sn);
    const px = L.x + L.w * 0.8;
    chara(px, gy, s, { who: "neuron", eyes: alarm ? "wide" : "happy", mouth: alarm ? "o" : "smile", arms: alarm ? "up" : "down", jump: alarm && lt < 2.6 ? 0.3 : 0 });
    if (alarm) { Anima.heart(px + s * 1.2, gy - s * 2.2 - Math.abs(Math.sin(time * 10)) * s * 0.2, s * 0.45, C.bad); emote("!", px - s * 0.9, gy - s * 3.5, s * 0.6); }
    // 右：担忧——一圈圈转
    const rcx = R.x + R.w * 0.5, rcy = R.y + R.h * 0.52, rrx = R.w * 0.34, rry = R.h * 0.28;
    track(rcx, rcy, rrx, rry, 1, false);
    train(rcx, rcy, rrx, rry, ang, s * 0.9);
    chara(rcx, rcy + rry * 0.45, s * 0.9, { who: "neuron", eyes: "open", mouth: "wavy", brow: "worry", shadow: false });
    emote("sweat", rcx + s * 0.8, rcy + rry * 0.45 - s * 2.8, s * 0.5);
    cardTitle(L.x, L.y, L.w, nw ? "恐惧：杏仁核" : "恐惧：杏仁核拉警报", "#ffe3e6");
    cardTitle(R.x, R.y, R.w, nw ? "担忧：环路" : "担忧：念头绕圈圈", "#e4eefb");
    callout("w0-am", lt > 0.6 && lt < 4.4, L.x + L.w * 0.22, gy - Math.min(H * 0.3, L.h * 0.5) * 0.6, L.x + L.w * 0.45, L.y + L.h * 0.2, nw ? "杏仁核警报塔" : "杏仁核：警报塔");
    say("w0-f", lt > 1.8 && lt < 5.2, px, gy - s * 3.2, L.x + L.w * 0.62, L.y + L.h * 0.3, "吓一跳！", "shout");
    say("w0-w", lt > 5.6, rcx, rcy + rry * 0.45 - s * 2.9, R.x + R.w * 0.5, R.y + R.h * 0.16, "万一……万一……", "think");
    callout("w0-lp", lt > 7.5, rcx + rrx, rcy, nw ? R.x + R.w * 0.5 : R.x + R.w * 0.6, R.y + R.h * 0.94, nw ? "危险走了也不停" : "眼前没危险，也停不下来");
    ctx.restore();
  }

  // ---------- 第 2 幕：环路和身体 ----------
  function loopView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f3f7ff", "#fff6ef", 21);
    const cx = W * 0.3, cy = H * 0.6, rx = W * (nw ? 0.24 : 0.2), ry = H * 0.25, s = H * (nw ? 0.042 : 0.046);
    track(cx, cy, rx, ry);
    const thoughts = nw ? ["万一迟到？", "万一生病？", "万一搞砸？"] : ["万一迟到了？", "万一生病了？", "万一搞砸了？"];
    thoughts.forEach((t, i) => {
      const p = prog(2.4 + i * 1.8, 0.8);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      plate(t, cx, cy - ry * 0.45 + i * ry * 0.45 + Math.sin(time * 2 + i) * H * 0.004, "#fff", fz(0.026));
      ctx.restore();
    });
    const T = train(cx, cy, rx, ry, ang, s * 0.9);
    // 右：身体跟着累
    const bx = W * 0.8, by = H * 0.94, eff = prog(6.4, 4);
    chara(bx, by, s * 1.05, { who: "neuron", eyes: eff > 0.6 ? "sleepy" : "open", mouth: "wavy", brow: "worry", gray: eff * 0.35 });
    if (eff > 0.2) { ctx.save(); ctx.globalAlpha *= eff; ctx.strokeStyle = C.bad; ctx.lineWidth = 2; for (const d of [-1, 1]) { ctx.beginPath(); ctx.moveTo(bx + d * s * 0.9, by - s * 1.5); ctx.lineTo(bx + d * s * 1.3, by - s * 1.8); ctx.moveTo(bx + d * s * 1.0, by - s * 1.2); ctx.lineTo(bx + d * s * 1.45, by - s * 1.35); ctx.stroke(); } ctx.restore(); }
    // 电量
    const ex = bx + W * (nw ? 0.12 : 0.1), ey = by - s * 2.6, ew = H * 0.04, eh = H * 0.1, lvl = lerp(0.9, 0.18, eff);
    rrect(ex - ew / 2, ey - eh / 2, ew, eh, 4); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    rrect(ex - ew * 0.2, ey - eh / 2 - H * 0.01, ew * 0.4, H * 0.012, 2); ctx.fillStyle = C.line; ctx.fill();
    ctx.fillStyle = lvl < 0.35 ? C.bad : C.good; ctx.fillRect(ex - ew / 2 + 2, ey + eh / 2 - 2 - (eh - 4) * lvl, ew - 4, (eh - 4) * lvl);
    const chips = ["肌肉紧张", "睡不好", "容易累"];
    chips.forEach((t, i) => {
      const p = prog(6.6 + i * 1.3, 0.8);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      plate(t, bx - W * (nw ? 0.02 : 0.02), H * (0.3 + i * 0.11), ["#ffe3e6", "#e4eefb", "#fff1d6"][i], fz(0.027));
      ctx.restore();
    });
    callout("w1-t", lt > 0.8 && lt < 5.5, T.x, T.y - s * 1.6, nw ? W * 0.72 : W * 0.66, H * 0.36, nw ? "谷氨酸信使" : "谷氨酸信使沿轨道一圈圈跑");
    say("w1-s", lt > 10.4, bx, by - s * 3.3, nw ? W * 0.74 : bx - W * 0.1, nw ? H * 0.62 : H * 0.66, "停不下来，好累……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：调节员 ----------
  function regView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f3f7ff", "#f4fbf6", 31);
    const cx = W * (nw ? 0.34 : 0.36), cy = H * 0.6, rx = W * (nw ? 0.23 : 0.2), ry = H * 0.25, s = H * (nw ? 0.04 : 0.044);
    const P = track(cx, cy, rx, ry);
    const T = train(cx, cy, rx, ry, ang, s * 0.9, { mouth: spd > 1.6 ? "open" : "smile", eyes: spd > 1.6 ? "wide" : "happy" });
    // 转速表
    const gx = W * 0.84, gyy = H * 0.5, gr = Math.min(W * 0.12, H * 0.16);
    gauge(gx, gyy, gr, spd / 2.4, "转速");
    // 三位调节员
    const ne = prog(3.4, 1.2), ga = prog(6.4, 1.2), sh = prog(9, 1.2);
    const cs = s * 0.9;
    if (ne > 0) {
      const x = lerp(W * 1.02, P[1][0] + W * 0.02, ne), y = P[1][1] + H * 0.2;
      chara(x, y, cs, { who: "NE", walk: ne < 1 ? time * 9 : null, arms: ne >= 1 ? "up" : "down", eyes: "sparkle", dir: -1, shadow: false, tag: "NE" });
    }
    if (ga > 0) {
      const x = lerp(-W * 0.02, P[2][0] - W * 0.02, ga), y = P[2][1] + H * 0.2;
      chara(x, y, cs, { who: "GABA", walk: ga < 1 ? time * 9 : null, arms: ga >= 1 ? "fist" : "down", eyes: ga >= 1 ? "angry" : "open", brow: ga >= 1 ? "angry" : null, shadow: false, tag: "GABA" });
    }
    if (sh > 0) {
      const x = cx - rx * 0.3, y = lerp(P[0][1] + H * 0.06, P[0][1] + H * 0.17, sh);
      chara(x, y, cs, { who: "5HT", arms: sh >= 1 ? "shh" : "down", eyes: "happy", shadow: false, alpha: sh });
    }
    const roles = [[nw ? "谷氨酸：油门" : "谷氨酸：信使和油门", 0.4, 0.8], [nw ? "NE：加速" : "NE：更警觉，加速", 3.6, 1], [nw ? "GABA：刹车" : "GABA：踩刹车", 6.6, 1], [nw ? "5-HT：安抚" : "5-HT：让它安静些", 9.2, 1]];
    roles.forEach((r, i) => {
      const p = prog(r[1], r[2]);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      plate(r[0], gx, gyy + gr * 0.55 + H * 0.06 + i * H * 0.075, ["#fff1b8", "#ffe3e6", "#ece8ff", "#dff5ec"][i], fz(0.025), W * 0.64);
      ctx.restore();
    });
    callout("w2-g", lt > 0.6 && lt < 3.2, T.x, T.y - s * 1.5, nw ? W * 0.4 : W * 0.5, H * 0.26, nw ? "谷氨酸在跑" : "谷氨酸：轨道上的信使");
    say("w2-ne", lt > 4.4 && lt < 6.8, P[1][0] + W * 0.02, P[1][1] + H * 0.2 - cs * 3.1, nw ? W * 0.5 : W * 0.6, H * 0.3, "打起精神，快跑！", "shout");
    say("w2-5", lt > 10, cx - rx * 0.3, P[0][1] + H * 0.17 - cs * 3.1, nw ? W * 0.14 : cx - W * 0.22, H * 0.27, nw ? "慢一点～" : "慢一点，没事的～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：SSRI/SNRI 和丁螺环酮 ----------
  function slowView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f3f7ff", "#f6fbf2", 41);
    const cx = W * (nw ? 0.32 : 0.34), cy = H * 0.6, rx = W * (nw ? 0.23 : 0.2), ry = H * 0.25, s = H * (nw ? 0.04 : 0.044);
    const P = track(cx, cy, rx, ry);
    train(cx, cy, rx, ry, ang, s * 0.9, { mouth: spd > 1.2 ? "wavy" : "smile", eyes: spd > 1.2 ? "open" : "happy" });
    // 5-HT 的回收门（环路中间）
    const tx = cx, ty = cy - ry * 0.4, ts = H * 0.036, dp = prog(1, 1.4);
    ctx.beginPath(); ctx.arc(tx, ty - H * 0.045, H * 0.055, Math.PI * 0.9, Math.PI * 2.1); ctx.closePath(); ctx.fillStyle = "#dff5ec"; ctx.fill(); outline(1.5); ctx.stroke();
    Anima.transporter(tx, ty, ts, "#8fdcc4", dp >= 1 ? 0 : time * 2.5, false);
    if (dp > 0) chara(lerp(tx - rx * 0.6, tx, dp), ty + ts * 0.7 + s * 0.8 * 2.6, s * 0.8, { who: "drug", label: "", hatColor: "#8fdcc4", hatColor2: "#fff", walk: dp < 1 ? time * 9 : null, arms: dp >= 1 ? "shh" : "down", eyes: "happy", shadow: false, tag: "SSRI/SNRI" });
    const n5 = 1 + Math.round(prog(3, 5) * 2);
    for (let k = 0; k < n5; k++) chara(cx + (k - 1) * rx * 0.35 + Math.sin(time + k) * 4, cy + ry * 0.62, s * 0.7, { who: "5HT", eyes: "happy", arms: "hold", item: "letter", shadow: false, seed: k });
    // 丁螺环酮：半按 5-HT1A
    const bp = prog(6.8, 1.4);
    const rx1 = P[2][0] + W * (nw ? 0.02 : 0.0), ry1 = P[2][1] + H * 0.2;
    ctx.fillStyle = alpha("#efeafd", 0.9); ctx.fillRect(rx1 - W * 0.08, ry1, W * 0.16, H * 0.05); outline(1.4); ctx.beginPath(); ctx.moveTo(rx1 - W * 0.08, ry1); ctx.lineTo(rx1 + W * 0.08, ry1); ctx.stroke();
    const R = Anima.receptor(rx1, ry1, H * 0.036, "#cdf1e4", lerp(0.1, 0.5, bp), { shape: "round" });
    plate("1A", rx1 + W * 0.05, ry1 - H * 0.03, "#fff", fz(0.022));
    if (bp > 0) chara(lerp(rx1 - W * 0.1, R.site.x, bp), bp < 1 ? ry1 : R.site.y + s * 0.15, s * 0.7, { who: "drug", label: "", hatColor: "#c3a6ec", hatColor2: "#fff", walk: bp < 1 ? time * 9 : null, arms: bp >= 1 ? "hold" : "down", eyes: "happy", shadow: false });
    // 转速表和日历
    const gx = W * 0.82, gyy = H * 0.42, gr = Math.min(W * 0.12, H * 0.15);
    gauge(gx, gyy, gr, spd / 2.4, "转速");
    const wk = lt < 3 ? 0 : Math.min(4, 1 + Math.floor((lt - 3) / 1.8));
    if (wk > 0) plate(`第 ${wk} 周`, gx, gyy + gr * 0.5 + H * 0.07, "#fff1b8", fz(0.028));
    const k2 = prog(8.4, 1);
    if (k2 > 0) { ctx.save(); ctx.globalAlpha *= k2; plate(nw ? "丁螺环酮：半按 1A" : "丁螺环酮：5-HT1A 按一半", gx, gyy + gr * 0.5 + H * 0.16, "#efe6fb", fz(0.025), W * 0.6); ctx.restore(); }
    callout("w3-g", lt > 9.6, gx + gr * 0.4, gyy - gr * 0.5, nw ? W * 0.7 : W * 0.78, H * 0.2, nw ? "几周里慢慢变慢" : "几周里慢慢调小");
    say("w3-s", lt > 2.2 && lt < 6.4, tx, ty + ts + s * 0.3, nw ? W * 0.72 : W * 0.68, H * 0.24, "要耐心等几周哦～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：普瑞巴林和苯二氮䓬 ----------
  function fastView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f7f3ff", "#fff6ef", 51);
    const top = Anima.topSafe() + H * 0.05, ch = H - top - H * 0.04, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h); card(R.x, R.y, R.w, R.h);
    const s = Math.min(H * 0.04, cw * 0.075);
    // 左：谷氨酸末梢、钙通道和 α2δ
    const tx = L.x + L.w * 0.5, tY = L.y + L.h * 0.42, tr = Math.min(L.w * 0.26, L.h * 0.2);
    ctx.save(); rrect(L.x, L.y, L.w, L.h, 18); ctx.clip();
    ctx.beginPath(); ctx.ellipse(tx, tY - tr * 0.4, tr * 1.3, tr, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff4cf"; ctx.fill(); outline(1.8); ctx.stroke();
    text(Anima.narrow ? "谷氨酸末梢" : "谷氨酸神经元的末梢", tx, tY - tr * 0.5, fz(0.024), "#b08a2a");
    ctx.restore();
    const chx = tx - tr * 0.55, chy = tY + tr * 0.55;
    const pg = prog(2.6, 1.4);
    Anima.receptor(chx, chy, H * 0.032, "#bfe3f5", 1 - pg * 0.7, { shape: "square", dir: -1 });
    // α2δ 小亚基：通道旁边的小圆球
    const ax = chx + H * 0.045, ay = chy - H * 0.005;
    ctx.beginPath(); ctx.arc(ax, ay, H * 0.018, 0, Math.PI * 2); ctx.fillStyle = "#ffcf6e"; ctx.fill(); outline(1.3); ctx.stroke();
    for (let k = 0; k < 3; k++) {
      const t = (time * 0.7 + k / 3) % 1;
      if (k >= 3 - Math.round(pg * 2)) continue;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      Anima.ion(chx + (k - 1) * H * 0.012, lerp(chy + H * 0.1, chy - H * 0.08, t), H * 0.015, "Ca", "#c8f0d8");
      ctx.restore();
    }
    const nG = Math.max(1, 4 - Math.round(prog(4, 2) * 3));
    for (let k = 0; k < 4; k++) {
      const al = k < nG ? 1 : 0.15;
      chara(L.x + L.w * (0.2 + k * 0.2), L.y + L.h * 0.88, s * 0.75, { who: "Glu", eyes: al > 0.5 ? "open" : "closed", mouth: al > 0.5 ? "wavy" : "smile", alpha: al, shadow: false, seed: k });
    }
    if (pg > 0) chara(lerp(L.x + L.w * 0.95, ax + s * 0.9, pg), chy + H * 0.02 + s * 2.4, s * 0.85, { who: "drug", label: "", hatColor: "#ffcf6e", hatColor2: "#fff", walk: pg < 1 ? time * 9 : null, arms: pg >= 1 ? "hug" : "down", eyes: "happy", dir: -1, shadow: false, tag: pg >= 1 ? "普瑞巴林" : null });
    plate("α2δ", ax + H * 0.06, ay - H * 0.05, "#fff1d6", fz(0.022), L.x, L.x + L.w);
    // 右：GABA-A 门和苯二氮䓬
    const my = R.y + R.h * 0.55, dx = R.x + R.w * 0.45;
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 18); ctx.clip(); ctx.fillStyle = "#f0ecff"; ctx.fillRect(R.x, my, R.w, R.h); ctx.restore();
    outline(1.6); ctx.beginPath(); ctx.moveTo(R.x, my); ctx.lineTo(R.x + R.w, my); ctx.stroke();
    const bz = prog(6.2, 1.4), open = 0.45 + 0.55 * bz;
    const GR = Anima.receptor(dx, my, H * 0.04, "#ddd5fa", open * (0.7 + 0.3 * Math.sin(time * 5)), { shape: "round" });
    chara(GR.site.x, GR.site.y + s * 0.2, s * 0.8, { who: "GABA", eyes: "happy", arms: "up", shadow: false });
    if (bz > 0) chara(lerp(R.x + R.w * 0.95, dx + H * 0.1, bz), my, s * 0.8, { who: "drug", label: "", hatColor: "#b8b0f0", hatColor2: "#fff", walk: bz < 1 ? time * 9 : null, arms: bz >= 1 ? "hold" : "down", eyes: "happy", dir: -1, shadow: false, tag: bz >= 1 ? "苯二氮䓬" : null });
    const nCl = 1 + Math.round(bz * 3);
    for (let k = 0; k < nCl; k++) {
      const t = (time * (0.6 + bz * 0.6) + k / nCl) % 1;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      Anima.ion(dx + (k % 2 ? 1 : -1) * H * 0.008, lerp(my - H * 0.12, my + H * 0.14, t), H * 0.015, "Cl", "#dfe4fb");
      ctx.restore();
    }
    face(R.x + R.w * 0.72, my + (R.y + R.h - my) * 0.5, H * 0.04, bz > 0.5 ? 1 : 0);
    const k1 = prog(8.4, 0.8), k2 = prog(9.6, 0.8);
    if (k1 > 0) { ctx.save(); ctx.globalAlpha *= k1; plate("见效快", R.x + R.w * 0.3, R.y + R.h * 0.22, "#dff5ec", fz(0.026), R.x, R.x + R.w); ctx.restore(); }
    if (k2 > 0) { ctx.save(); ctx.globalAlpha *= k2; plate(nw ? "只短期用" : "久用会依赖：短期用", R.x + R.w * 0.3, R.y + R.h * 0.34, "#ffe3e6", fz(0.026), R.x, R.x + R.w); ctx.restore(); }
    cardTitle(L.x, L.y, L.w, nw ? "普瑞巴林" : "普瑞巴林：松油门", "#fff1d6");
    cardTitle(R.x, R.y, R.w, nw ? "苯二氮䓬" : "苯二氮䓬：踩刹车", "#ece8ff");
    callout("w4-ca", lt > 4.4 && lt < 9, chx, chy, L.x + L.w * 0.5, L.y + L.h * 0.16, nw ? "谷氨酸放得少了" : "钙进得少，谷氨酸放得少");
    say("w4-s", lt > 7.6, R.x + R.w * 0.72, my + (R.y + R.h - my) * 0.5 - H * 0.04, R.x + R.w * 0.7, R.y + R.h * 0.9, "安静下来了～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：学会下车 ----------
  function cbtView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f3f7ff", "#f4fbf6", 61);
    const cx = W * 0.5, cy = H * 0.62, rx = W * (nw ? 0.3 : 0.24), ry = H * 0.22, s = H * (nw ? 0.042 : 0.046);
    const fade = 1 - prog(9.5, 3) * 0.55;
    track(cx, cy, rx, ry, fade);
    // 第一圈人跟着坐车；之后站在站台上看着它开走
    const lap1 = 4.4, q = lt < lap1 ? -Math.PI / 2 + (lt / lap1) * Math.PI * 2 : -Math.PI / 2 + ((lt - lap1) * 0.9) % (Math.PI * 2);
    const onTrain = lt < lap1;
    const T = train(cx, cy, rx, ry, q, s * 0.95, { rider: onTrain, alpha: lt < lap1 ? 1 : fade });
    ctx.save(); ctx.globalAlpha *= lt < lap1 ? 1 : fade;
    plate(nw ? "万一……" : "“万一……”", T.x, T.y - s * 3.6, "#fff", fz(0.022));
    ctx.restore();
    // 站台
    const px = cx + rx * 0.02, py = cy - ry - H * 0.03;
    rrect(px + W * 0.03, py - H * 0.005, W * 0.16, H * 0.02, 4); ctx.fillStyle = "#e9d7c7"; ctx.fill(); outline(1.3); ctx.stroke();
    if (!onTrain) {
      const calm = prog(5.5, 1.5);
      chara(px + W * 0.11, py, s, { who: "neuron", eyes: calm > 0.5 ? "happy" : "open", mouth: calm > 0.5 ? "smile" : "flat", arms: lt > 10.5 ? "wave" : "down", brow: calm > 0.5 ? null : "worry" });
    }
    const k = prog(11, 1);
    if (k > 0) { ctx.save(); ctx.globalAlpha *= k; plate(nw ? "练得越多，转得越少" : "练习越多，环路转得越少", cx, cy + ry * 0.05, "#dff5ec", fz(0.026)); ctx.restore(); }
    callout("w5-pl", nw ? lt > 5 && lt < 7.4 : lt > 5 && lt < 9.2, px + W * 0.11, py + H * 0.005, nw ? W * 0.25 : W * 0.22, H * 0.26, nw ? "站台：不上车" : "站在站台上，不上车");
    say("w5-a", lt > 1 && lt < 4, T.x, T.y - s * 3, nw ? W * 0.3 : W * 0.24, H * 0.3, "又跟着转起来了……", "think");
    say("w5-b", nw ? lt > 7.6 && lt < 11.4 : lt > 6.2 && lt < 11, px + W * 0.11, py - s * 3.2, nw ? W * 0.3 : W * 0.76, nw ? H * 0.3 : H * 0.26, "哦，又是一个“万一”。", "think");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.wlD, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }
  function draw() {
    ctx.fillStyle = "#f8faff"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) twoView(S.v0);
    if (S.v1 > 0.02) loopView(S.v1);
    if (S.v2 > 0.02) regView(S.v2);
    if (S.v3 > 0.02) slowView(S.v3);
    if (S.v4 > 0.02) fastView(S.v4);
    if (S.v5 > 0.02) cbtView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#9ab6ea",
    titleCard: { lines: ["停不下来的担心：", "担忧回路"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
