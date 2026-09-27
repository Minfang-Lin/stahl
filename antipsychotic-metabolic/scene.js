Anima.register("antipsychotic-metabolic", {
    "title": "体重和血糖：抗精神病药的代谢风险",
    "tag": "抗精神病药",
    "headline": "为什么有的抗精神病药会让【体重和血糖】上去？",
    "lede": "不少抗精神病药会让人胃口变大、体重上升，有的还会让血糖、血脂升高。Stahl 把它分成两步来讲：先是下丘脑的饱腹信号被挡住，再是一个还没弄清楚的“受体 X”。看懂机制，就明白为什么要定期检查。",
    "summary": "H1 和 5-HT2C 被挡 → 饱腹信号变弱 → 体重增加 → 胰岛素抵抗；假想的“受体 X”让不胖也可能血糖升高；少见但危险的糖尿病酮症酸中毒；各药风险高低；体重、腰围、血压、血糖、血脂的定期监测。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 心血管代谢风险",
    "footer": "用药期间如果特别口渴、尿多、乏力，或恶心呕吐、呼吸深快，请立即就医。是否换药、加药由医生决定，请不要自行停药。",
    "canvasLabel": "拟人化的组胺和 5-HT 按下下丘脑的饱腹开关、药物访客挡住它们、胰岛素钥匙打不开门，以及定期检查的动画",
    "regions": ["hypo"],
    "parts": ["psychosis"],
    "cast": ["His", "5HT", "drug"],
    "color": "#f2b35c"
  }, () => {
  const CH = [
    { title: "饱腹开关被挡住", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["H1", "被挡住"], pill2: ["5-HT2C", "被挡住"],
      text: "下丘脑里有一个管饱和饿的中心。吃饱以后，组胺和 5-HT 分别按下这里神经元上的 H1 和 5-HT2C 两扇门，“吃饱了”的信号亮起来，人自然就放下筷子。不少抗精神病药会同时挡住这两扇门，饱腹信号变弱，人总觉得饿，吃得比以前多。这是代谢风险第一步的开头。",
      fact: "一般认为，同时挡住 H1 和 5-HT2C，是抗精神病药让人胃口变大的主要原因" },
    { title: "体重上去，胰岛素不灵了", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["体重", "上升 ↑"], pill2: ["胰岛素", "不太灵"],
      text: "吃得多了，体重慢慢上去，肚子上的脂肪尤其容易堆积。脂肪多了以后，肌肉和肝脏对胰岛素变得不敏感：胰岛素这把钥匙插进去，门却开得不利索，葡萄糖进不了细胞，只好留在血里，这叫胰岛素抵抗。血糖、甘油三酯慢慢升高，久了可能发展成糖尿病和血脂异常，心血管的负担也加重。",
      fact: "第一步：食欲增加 → 体重（尤其腹部脂肪）增加 → 胰岛素抵抗 → 血糖、血脂升高" },
    { title: "第二步：神秘的“受体 X”", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["第二步", "受体 X？"], pill2: ["体重", "没怎么变"],
      text: "第二步更让人意外：有些药似乎能绕过体重，直接让胰岛素变得不灵。Stahl 提出一种假设：胰腺、肝脏、肌肉里可能有药物能作用的“受体 X”，一被药挡住，细胞对胰岛素的反应就变差。所以有的人体重没怎么变，血糖、血脂却升高了。这个“受体 X”到底是什么，目前还没有弄清楚。",
      fact: "“受体 X”只是一个假设，用来解释“不胖也可能血糖升高”；具体机制仍未明确" },
    { title: "少见但很急：酮症酸中毒", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["少见", "但很急"], pill2: ["信号", "口渴多尿"],
      text: "极少数人的血糖会在用药后较短时间里迅速升高，甚至出现糖尿病酮症酸中毒：细胞用不上葡萄糖，身体只好大量分解脂肪，产生酸性的酮体，血液慢慢变“酸”。它来得急，可能危及生命。用药期间如果特别口渴、尿多、乏力，或者恶心呕吐、呼吸又深又快，要马上去医院，并告诉医生正在用的药。",
      fact: "口渴、多尿、乏力、恶心呕吐、呼吸深快：出现这些要立即就医" },
    { title: "每种药风险不一样", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["较高", "氯氮平等"], pill2: ["较低", "阿立哌唑等"],
      text: "不同抗精神病药的代谢风险差别很大。一般认为，氯氮平和奥氮平风险较高；喹硫平、利培酮等居中；阿立哌唑、齐拉西酮、鲁拉西酮等较低。大致上，药把 H1 和 5-HT2C 挡得越多，越容易长体重。不过每个人反应不同，风险低的药也可能出问题，风险高的药对有些人又特别重要，要和医生一起权衡。",
      fact: "氯氮平、奥氮平代谢风险较高；但个体差异很大，选药要综合疗效和风险" },
    { title: "定期检查，早点发现", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["检查", "五项"], pill2: ["时间", "定期复查"],
      text: "所以用抗精神病药要定期查几项：体重和体重指数（BMI）、腰围、血压、空腹血糖（或糖化血红蛋白）、血脂。开始用药前先测一次打底，用药后前几个月查得勤一些，之后定期复查。一旦发现苗头，医生可能建议调整饮食和运动、换一种代谢风险更低的药，或者加用二甲双胍等药物。不要自己停药。",
      fact: "体重/BMI、腰围、血压、血糖、血脂：用药前打底，之后定期复查" },
  ];
  const DUR = 14;
  const C = Object.assign({}, Anima.C, { mem: "#ffe6d6", sugar: "#ffffff", fat: "#fff1b8" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const AP = { who: "drug", label: "AP", hatColor: "#f7a8c0", hatColor2: "#fff1b8" };
  const INS = { hair: "#7ec4e8", eye: "#3f86b0", cloth: "#e2f3fb", hat: "cap", hatColor: "#9fd3ef", style: "short", label: "INS" };
  const PER = { who: "neuron", hair: "#7a5a48", cloth: "#dff0ff" };
  function update() { lt = Anima.sceneTime; }
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fs = (k) => Math.max(10, H * (k || 0.026)) * Anima.UI;
  function chip(t, x, y, col, bg, k) {
    const f = fs(k || 0.03);
    ctx.font = `${f}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + f * 1.1;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - f * 0.75, w, f * 1.5, f * 0.75); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, f, col || C.ink);
    return w;
  }
  function walkPos(a, b, t0, d) {
    const p = prog(t0, d);
    return { x: lerp(a.x, b.x, p), y: lerp(a.y, b.y, p) - Math.sin(p * Math.PI) * H * 0.03, p, moving: p > 0 && p < 1 };
  }
  function membrane(x0, x1, y, h, col) {
    ctx.fillStyle = col; ctx.fillRect(x0, y, x1 - x0, h);
    outline(1.6); ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    for (let x = x0 + 6; x < x1; x += Math.max(8, H * 0.024)) { ctx.beginPath(); ctx.arc(x, y + H * 0.013, Math.max(1.5, H * 0.006), 0, Math.PI * 2); ctx.fill(); }
  }
  function sugar(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    rrect(x - s / 2, y - s / 2, s, s, s * 0.2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.1); ctx.stroke();
    ctx.fillStyle = "rgba(160,200,230,0.6)"; ctx.fillRect(x - s * 0.25, y - s * 0.25, s * 0.2, s * 0.2);
    ctx.restore();
  }
  function bowl(x, y, s, full) {
    if (full > 0) { ctx.beginPath(); ctx.arc(x, y - s * 0.1, s * 0.55 * (0.4 + 0.6 * full), Math.PI, 0); ctx.fillStyle = "#fffaf0"; ctx.fill(); outline(1.1); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(x - s * 0.7, y - s * 0.1); ctx.quadraticCurveTo(x, y + s * 0.8, x + s * 0.7, y - s * 0.1); ctx.closePath(); ctx.fillStyle = "#f7a8c0"; ctx.fill(); outline(1.5); ctx.stroke();
  }
  function meter(x, y, w, h, v, label, col) {
    text(label, x + w / 2, y - fs(0.026), fs(0.026), C.ink);
    rrect(x, y, w, h, Math.min(w, h) * 0.3); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    const fh = (h - 6) * clamp(v, 0, 1);
    rrect(x + 3, y + h - 3 - fh, w - 6, fh, Math.min(w, h) * 0.2); ctx.fillStyle = col || mix(C.good, C.bad, v); ctx.fill();
  }

  // ---------- 第 1 幕：下丘脑的饱腹开关 ----------
  function viewHypo(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ef", "#fdeff3");
    Anima.bokeh(6, "#ffe0b8", 0.8, 17);
    Anima.petals(6, 0.4, 4);
    const mem = H * 0.6, x1 = W * (n ? 0.58 : 0.6), rs = H * 0.055, cs = H * 0.045;
    membrane(0, x1, mem, H - mem, C.mem);
    outline(1.6); ctx.beginPath(); ctx.moveTo(x1, mem); ctx.lineTo(x1, H); ctx.stroke();
    const dx = [W * (n ? 0.14 : 0.15), W * (n ? 0.42 : 0.42)];
    const block = prog(7.2, 1.4);
    const on = prog(1.6, 0.8) * (1 - block);
    Anima.receptor(dx[0], mem, rs, "#d7c2ef", on, { shape: "round" });
    Anima.receptor(dx[1], mem, rs, "#a6e3cf", on, { shape: "tri" });
    text("H1", dx[0], mem + H * 0.05, fs(0.032), C.ink);
    text("5-HT2C", dx[1], mem + H * 0.05, fs(0.032), C.ink);
    // 饱腹灯
    const lx = (dx[0] + dx[1]) / 2, ly = H * 0.83, lr = H * 0.07, lit = on;
    glow(lx, ly, lr * 2.4, C.gold, lit);
    ctx.beginPath(); ctx.arc(lx, ly, lr, 0, Math.PI * 2); ctx.fillStyle = mix("#eee6e2", "#fff1b8", lit); ctx.fill(); outline(1.8); ctx.stroke();
    text("饱", lx, ly + 1, lr * 0.9, mix("#b8aaa6", "#c88600", lit));
    // 递质和药物
    const site = (i) => ({ x: dx[i], y: mem - rs * 1.62 });
    const who = ["His", "5HT"], st = [{ x: -cs * 2, y: mem }, { x: x1 * 0.62, y: H * 0.2 }];
    for (let i = 0; i < 2; i++) {
      const p = walkPos(st[i], site(i), 0.4 + i * 0.3, 1.3);
      if (p.p <= 0) continue;
      const push = block, x = lerp(p.x, dx[i] + (i ? 1 : -1) * rs * 3, push), y = lerp(p.y, mem, push);
      chara(x, y, cs * 0.9, { who: who[i], walk: p.moving || (push > 0 && push < 1) ? time * 9 : null, arms: push > 0.5 ? "down" : (p.p >= 1 ? "up" : "down"), eyes: push > 0.5 ? "teary" : "happy", mouth: push > 0.5 ? "o" : "smile", dir: i ? -1 : 1 });
      if (push > 0.8) emote("?", x + cs, y - cs * 3, cs * 0.6);
    }
    const drugs = [];
    for (let i = 0; i < 2; i++) {
      const p = walkPos({ x: x1 * 0.5, y: H * 0.15 }, site(i), 6.6 + i * 0.3, 1.4);
      if (p.p > 0) { chara(p.x, p.y, cs, Object.assign({}, AP, { walk: p.moving ? time * 9 : null, arms: p.p >= 1 ? "hug" : "wave", eyes: "happy", tag: i === 1 ? "抗精神病药" : null })); drugs.push(p); }
    }
    // 右边：吃饭的人
    const px = W * (n ? 0.8 : 0.8), py = H * 0.8, ps = H * (n ? 0.06 : 0.07), full = lit > 0.5;
    rrect(px - ps * 2.2, py - ps * 0.2, ps * 4.4, ps * 0.5, ps * 0.15); ctx.fillStyle = "#f3d9c4"; ctx.fill(); outline(1.5); ctx.stroke();
    chara(px, py, ps, Object.assign({}, PER, { eyes: full ? "happy" : (lt > 8 ? "sparkle" : "open"), mouth: full ? "cat" : "open", arms: full ? "down" : "hold" }));
    const bowlX = full ? px + ps * 1.5 : px, bf = lt > 8.5 ? 1 : (full ? 0.2 : 0.7);
    bowl(bowlX, py - ps * (full ? 0.35 : 0.7), ps * 0.6, bf);
    if (lt > 9 && Math.sin(time * 3) > 0.3) sfx("咕噜", px - ps * 1.6, py - ps * 1.2, H * 0.03, C.warn, -0.1, 1);
    const top = Anima.topSafe() + H * 0.04;
    callout("h0", win(2, 6.5), lx, ly - lr, n ? W * 0.3 : lx, n ? top + H * 0.12 : H * 0.36, "饱腹信号亮了");
    callout("h1", lt > 8.8 && drugs.length > 1, dx[1] + rs * 0.6, mem - rs * 0.9, n ? W * 0.32 : x1 * 0.5, n ? top + H * 0.12 : H * 0.32, "两扇门都被挡住");
    say("h2", win(3.2, 7), px, py - ps * 3.2, n ? W * 0.78 : px, n ? H * 0.45 : H * 0.42, "吃饱啦～", "say");
    say("h3", lt > 10, px, py - ps * 3.2, n ? W * 0.78 : px, n ? H * 0.45 : H * 0.42, "怎么还是饿…", "think");
    ctx.restore();
  }

  // ---------- 第 2 幕：体重 → 胰岛素抵抗 ----------
  function viewInsulin(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff9f1", "#fff0f0");
    Anima.bokeh(5, "#ffe0b8", 0.7, 27);
    const grow = prog(0.5, 4), res = prog(5.5, 2.5);
    // 左：体重秤上的人
    const px = W * (n ? 0.17 : 0.17), py = H * 0.86, ps = H * (n ? 0.07 : 0.075);
    rrect(px - ps * 1.8, py, ps * 3.6, ps * 0.45, ps * 0.15); ctx.fillStyle = "#e7eef7"; ctx.fill(); outline(1.5); ctx.stroke();
    const dy = py + ps * 0.95, dr = ps * 0.9;
    ctx.beginPath(); ctx.arc(px, dy, dr, Math.PI, 0); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
    const ang = Math.PI + lerp(0.5, 2.4, grow);
    ctx.strokeStyle = C.bad; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(px, dy); ctx.lineTo(px + Math.cos(ang) * dr * 0.85, dy + Math.sin(ang) * dr * 0.85); ctx.stroke();
    chara(px, py, ps, Object.assign({}, PER, { eyes: grow > 0.6 ? "open" : "happy", mouth: grow > 0.6 ? "wavy" : "smile", arms: "down" }));
    ctx.beginPath(); ctx.ellipse(px, py - ps * 0.7, ps * lerp(0.4, 0.8, grow), ps * lerp(0.32, 0.5, grow), 0, 0, Math.PI * 2); ctx.fillStyle = "#dff0ff"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.save(); ctx.setLineDash([3, 3]); ctx.strokeStyle = C.warn; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(px, py - ps * 0.7, ps * lerp(0.4, 0.8, grow) + 2, ps * 0.15, 0, 0, Math.PI); ctx.stroke(); ctx.restore();
    // 右：血液和肌肉细胞
    const x0 = W * (n ? 0.38 : 0.36), x1 = W * 0.97, top = Anima.topSafe() + H * 0.03, mem = H * 0.52;
    rrect(x0, top, x1 - x0, mem - top, H * 0.03); ctx.fillStyle = mix("#ffe9ec", "#ffd6dc", res); ctx.fill(); outline(1.4); ctx.stroke();
    text("血液", x0 + H * 0.05, top + H * 0.035, fs(0.026), C.soft);
    ctx.fillStyle = "#ffeede"; ctx.fillRect(x0, mem, x1 - x0, H * 0.45); outline(1.6); ctx.strokeRect(x0, mem, x1 - x0, H * 0.45);
    text("肌肉细胞", x0 + (x1 - x0) * 0.5, H * 0.93, fs(0.028), C.soft);
    const rx = x0 + (x1 - x0) * 0.28, gx = x0 + (x1 - x0) * 0.68, rs = H * 0.05, cs = H * 0.042;
    Anima.receptor(rx, mem, rs, mix("#9fd3ef", "#c9c0c4", res), 1, { shape: "square" });
    const gOpen = prog(1.5, 0.6) * (1 - res * 0.85);
    Anima.receptor(gx, mem, rs, mix("#ffd9a8", "#c9c0c4", res), gOpen, {});
    text("胰岛素受体", rx, mem + H * 0.06, fs(0.026), C.ink);
    text("葡萄糖门", gx, mem + H * 0.06, fs(0.026), C.ink);
    const ip = walkPos({ x: x0 + cs * 1.5, y: mem - H * 0.02 }, { x: rx, y: mem - rs * 1.62 }, 0.4, 1.2);
    if (ip.p > 0) chara(ip.x, ip.y, cs, Object.assign({}, INS, { item: "key", walk: ip.moving ? time * 9 : null, arms: "hold", eyes: res > 0.5 ? "open" : "happy", mouth: res > 0.5 ? "wavy" : "smile", brow: res > 0.5 ? "worry" : null }));
    if (res > 0.5) emote("sweat", rx + cs, mem - rs * 1.62 - cs * 3.1, cs * 0.6);
    // 葡萄糖：敏感时从门进去，抵抗时越积越多
    const ss = H * 0.03;
    for (let k = 0; k < 6; k++) {
      const t = (time * 0.35 + k / 6) % 1, sx = lerp(x0 + (x1 - x0) * 0.45, gx, t), sy = lerp(top + H * 0.08 + (k % 3) * H * 0.05, mem + H * 0.12, t);
      if (t < 0.8 || gOpen > 0.3) sugar(sx, sy, ss, gOpen * Math.sin(t * Math.PI));
    }
    const pile = Math.floor(res * 14);
    for (let k = 0; k < pile; k++) sugar(x0 + (x1 - x0) * (0.1 + rnd(k * 3) * 0.8), top + H * 0.07 + rnd(k * 5 + 1) * (mem - top - H * 0.14), ss, 1);
    for (let k = 0; k < Math.floor(res * 5); k++) { ctx.beginPath(); ctx.arc(x0 + (x1 - x0) * (0.15 + rnd(k * 7 + 2) * 0.7), top + H * 0.06 + rnd(k * 9) * (mem - top - H * 0.12), H * 0.016, 0, Math.PI * 2); ctx.fillStyle = "#ffe07a"; ctx.fill(); outline(1); ctx.stroke(); }
    callout("i0", win(1.5, 5.2), px + ps * 0.6, py - ps * 0.9, n ? W * 0.2 : W * 0.2, H * (n ? 0.4 : 0.4), "腹部脂肪变多");
    callout("i1", lt > 6.5, rx - rs * 0.6, mem - rs * 0.8, n ? W * 0.66 : x0 + W * 0.02, H * (n ? 0.74 : 0.64), "胰岛素抵抗：门开不利索");
    callout("i2", lt > 9, x0 + (x1 - x0) * 0.8, top + H * 0.15, n ? W * 0.7 : x1 - W * 0.12, H * (n ? 0.86 : 0.76), "血糖、血脂升高");
    if (ip.p > 0) say("i3", lt > 10.5, rx + cs * 0.5, mem - rs * 1.62 - cs * 2.8, n ? W * 0.72 : rx + W * 0.26, top + H * (n ? 0.1 : 0.12), n ? "门怎么不开…" : "钥匙插了，门怎么不开…", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：受体 X ----------
  function organ(i, x, y, s) {
    ctx.beginPath();
    if (i === 0) ctx.ellipse(x, y, s * 1.4, s * 0.55, -0.15, 0, Math.PI * 2);
    else if (i === 1) { ctx.moveTo(x - s * 1.3, y - s * 0.3); ctx.quadraticCurveTo(x, y - s * 1.1, x + s * 1.3, y - s * 0.5); ctx.quadraticCurveTo(x + s * 0.6, y + s * 0.9, x - s * 1.3, y - s * 0.3); }
    else ctx.ellipse(x, y, s * 1.3, s * 0.7, 0, 0, Math.PI * 2);
    ctx.fillStyle = ["#ffe0a3", "#e8a28c", "#f7b8c4"][i]; ctx.fill(); outline(1.6); ctx.stroke();
    if (i === 2) { outline(1); for (let k = -1; k <= 1; k++) { ctx.beginPath(); ctx.moveTo(x - s * 0.9, y + k * s * 0.25); ctx.lineTo(x + s * 0.9, y + k * s * 0.25); ctx.stroke(); } }
    face(x, y + s * 0.05, s * 0.35, lt > 5.5 ? -1 : 1);
  }
  function viewX(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f5ff", "#fff3ec");
    Anima.bokeh(6, "#e2dcfb", 0.7, 37);
    const top = Anima.topSafe() + H * 0.03, gap = W * 0.025, cw = (W - gap * 4) / 3, ch = H * (n ? 0.5 : 0.52);
    const T = ["胰腺", "肝脏", "肌肉"], pos = [];
    for (let i = 0; i < 3; i++) {
      const x = gap + i * (cw + gap), cx = x + cw / 2;
      rrect(x, top, cw, ch, 16); ctx.fillStyle = "#fffdfb"; ctx.fill(); outline(1.6); ctx.stroke();
      text(T[i], cx, top + fs(0.03) * 1.1, fs(0.03), C.ink);
      organ(i, cx, top + ch * 0.36, Math.min(cw * 0.2, H * 0.06));
      const dm = top + ch * 0.86, rs = Math.min(H * 0.045, cw * 0.12);
      ctx.fillStyle = "#f1ecff"; ctx.fillRect(x + 3, dm, cw - 6, top + ch - dm - 3); outline(1.2); ctx.beginPath(); ctx.moveTo(x + 3, dm); ctx.lineTo(x + cw - 3, dm); ctx.stroke();
      const r = Anima.receptor(cx, dm, rs, "#c9c0f5", 0.2, { shape: "square" });
      text("X？", cx + rs * 1.5, dm - rs * 0.6, fs(0.026), C.lavDeep);
      const p = walkPos({ x: x + cw * 0.05, y: dm }, { x: cx, y: r.site.y }, 1 + i * 0.8, 1.4);
      if (p.p > 0) chara(p.x, p.y, rs * 0.85, Object.assign({}, AP, { walk: p.moving ? time * 9 : null, arms: p.p >= 1 ? "hug" : "wave", eyes: "happy" }));
      pos.push({ cx, dm, rs });
    }
    // 下面：体重不变，血糖升高
    const by = top + ch + H * (n ? 0.1 : 0.1), bh = H * 0.05, b0 = W * 0.08, bw = W * 0.34, b2 = W * 0.58;
    const glu = lerp(0.3, 0.85, prog(5.5, 3));
    const bar = (x, v, lab, col) => {
      text(lab, x, by - fs(0.028) * 0.9, fs(0.028), C.ink, "left");
      rrect(x, by, bw, bh, bh / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
      rrect(x + 3, by + 3, (bw - 6) * v, bh - 6, (bh - 6) / 2); ctx.fillStyle = col; ctx.fill();
    };
    bar(b0, 0.4 + Math.sin(time * 2) * 0.01, "体重", "#9fc3ea");
    bar(b2, glu, "血糖", mix(C.good, C.bad, (glu - 0.3) / 0.55));
    if (lt > 8.5) sfx("⚠ 一种假设", W * (n ? 0.22 : 0.5), H * 0.95, fs(0.03), C.warn, -0.05, prog(8.5, 0.6));
    callout("x0", win(3.2, 7.5), pos[0].cx + pos[0].rs * 0.7, pos[0].dm + pos[0].rs * 0.3, n ? W * 0.4 : pos[0].cx + W * 0.1, top + ch + H * 0.02, "假想的“受体 X”");
    callout("x1", lt > 7.5, b2 + bw * glu, by + bh / 2, n ? W * 0.62 : b2 + bw * 0.5, H * (n ? 0.94 : 0.96), "不胖也可能血糖升高");
    say("x2", lt > 10 && !n, b0 + bw * 0.4, by, n ? W * 0.28 : b0 + bw * 0.5, by - H * 0.08, "体重没怎么变呀？", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：酮症酸中毒 ----------
  function viewDKA(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f2", "#fbeff6");
    const top = Anima.topSafe() + H * 0.03, x0 = W * 0.04, x1 = W * (n ? 0.62 : 0.6), bb = H * 0.42;
    const acid = prog(4.5, 4);
    rrect(x0, top, x1 - x0, bb - top, H * 0.03); ctx.fillStyle = mix("#ffe9ec", "#e6d6f5", acid); ctx.fill(); outline(1.4); ctx.stroke();
    text("血液", x0 + H * 0.05, top + H * 0.035, fs(0.026), C.soft);
    const nS = Math.floor(lerp(3, 16, prog(0.5, 3)));
    for (let k = 0; k < nS; k++) sugar(x0 + (x1 - x0) * (0.1 + rnd(k * 3 + 1) * 0.8), top + H * 0.07 + rnd(k * 5 + 2) * (bb - top - H * 0.12), H * 0.028, 1);
    // 脂肪分解 → 酮体上升
    const fx = W * (n ? 0.16 : 0.16), fy = H * 0.76, fr = H * 0.05;
    const burn = prog(3, 2);
    for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(fx + (k - 1) * fr * 1.3, fy + (k % 2) * fr * 0.6, fr * lerp(0.8, 0.55, burn), 0, Math.PI * 2); ctx.fillStyle = C.fat; ctx.fill(); outline(1.3); ctx.stroke(); }
    text("脂肪", fx, fy + fr * 1.9, fs(0.026), C.soft);
    if (burn > 0.2) for (let k = 0; k < 5; k++) {
      const t = (time * 0.35 + k / 5) % 1;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * burn;
      Anima.ion(fx + Math.sin(k * 2 + t * 4) * fr, lerp(fy - fr, top + H * 0.1, t), H * 0.024, "酮", "#d9c7f2");
      ctx.restore();
    }
    // 人和症状
    const px = W * (n ? 0.42 : 0.4), py = H * 0.93, ps = H * (n ? 0.065 : 0.07), sick = prog(6, 1);
    chara(px, py, ps, Object.assign({}, PER, { eyes: sick > 0.5 ? "sleepy" : "open", mouth: sick > 0.5 ? "wavy" : "flat", brow: "worry", arms: "hold" }));
    rrect(px + ps * 0.5, py - ps * 1.6, ps * 0.5, ps * 0.7, ps * 0.1); ctx.fillStyle = "rgba(191,227,245,0.9)"; ctx.fill(); outline(1.2); ctx.stroke();
    if (sick > 0.5) emote("sweat", px + ps, py - ps * 3.2, ps * 0.5);
    const sym = ["口渴", "尿多", "乏力", "恶心呕吐", "呼吸深快"];
    const sx = W * (n ? 0.84 : 0.8), sy0 = H * (n ? 0.2 : 0.2);
    sym.forEach((s, j) => { const p = prog(6.5 + j * 0.7, 0.4); if (p <= 0) return; ctx.save(); ctx.globalAlpha *= p; chip(s, sx, sy0 + j * H * (n ? 0.1 : 0.095), C.bad, "#fff0f2", 0.032); ctx.restore(); });
    // 医院
    const hx = W * (n ? 0.8 : 0.8), hy = H * 0.84, hs = H * 0.06, hp = prog(10, 0.6);
    if (hp > 0) { ctx.save(); ctx.globalAlpha *= hp; rrect(hx - hs, hy - hs, hs * 2, hs * 2, hs * 0.3); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke(); ctx.fillStyle = C.bad; ctx.fillRect(hx - hs * 0.18, hy - hs * 0.65, hs * 0.36, hs * 1.3); ctx.fillRect(hx - hs * 0.65, hy - hs * 0.18, hs * 1.3, hs * 0.36); ctx.restore(); }
    callout("k0", win(1, 4.5), x0 + (x1 - x0) * 0.5, top + H * 0.2, n ? W * 0.3 : W * 0.32, H * 0.52, "葡萄糖用不上，堆在血里");
    callout("k1", win(5, 9.8), fx + W * 0.08, top + H * 0.22, n ? W * 0.45 : W * 0.34, H * (n ? 0.62 : 0.52), "酮体：让血液变酸");
    say("k2", lt > 10.3, hx - hs, hy - hs * 0.4, n ? W * 0.5 : W * 0.6, H * (n ? 0.55 : 0.6), "马上去医院！", "shout");
    ctx.restore();
  }

  // ---------- 第 5 幕：各药风险 ----------
  function viewRank(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf2", "#f5f3ff");
    Anima.petals(7, 0.4, 51);
    const base = H * 0.86, xs = [0.2, 0.5, 0.8], bw = W * (n ? 0.28 : 0.22), hs = [0.5, 0.34, 0.2];
    const names = [["氯氮平", "奥氮平"], ["喹硫平", "利培酮"], ["阿立哌唑", "齐拉西酮", "鲁拉西酮"]], lab = ["较高", "中等", "较低"], cols = ["#ffb3bf", "#ffd9a0", "#bfe8d6"];
    const tops = [];
    for (let i = 0; i < 3; i++) {
      const g = prog(0.8 + i * 0.7, 1.6), x = W * xs[i], h = H * hs[i] * g, y = base - h;
      rrect(x - bw / 2, y, bw, Math.max(h, 1), 12); ctx.fillStyle = cols[i]; ctx.fill(); outline(1.8); ctx.stroke();
      text(lab[i], x, base + H * 0.05, fs(0.032), C.ink);
      if (g > 0.95) names[i].forEach((s, j) => chip(s, x, y + H * 0.045 + j * H * 0.052, C.ink, "rgba(255,255,255,0.95)", 0.028));
      const cs = H * 0.04;
      if (g > 0.3) chara(x, y, cs, Object.assign({}, AP, { arms: i === 0 ? "carry" : i === 1 ? "hug" : "wave", item: i === 0 ? "star" : null, eyes: "happy" }));
      tops.push({ x, y, cs });
    }
    ctx.beginPath(); outline(1.8); ctx.moveTo(W * 0.05, base); ctx.lineTo(W * 0.95, base); ctx.stroke();
    text("代谢风险", W * 0.08, Anima.topSafe() + H * 0.04, fs(0.028), C.soft, "left");
    callout("r0", win(3.5, 8), tops[0].x + tops[0].cs, tops[0].y - tops[0].cs * 2, n ? W * 0.5 : W * 0.38, H * 0.3, "H1、5-HT2C 挡得多");
    callout("r1", lt > 8.5, tops[2].x + bw * 0.3, tops[2].y, W * 0.72, Anima.topSafe() + H * 0.08, "个体差异很大");
    say("r2", lt > 10, tops[2].x, tops[2].y - tops[2].cs * 3.1, W * 0.74, H * 0.44, "风险低≠没风险～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：定期检查 ----------
  function viewCheck(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbf8", "#fff4ef");
    Anima.bokeh(6, "#cdeedc", 0.7, 63);
    const top = Anima.topSafe() + H * 0.03, x0 = W * 0.04, cw = W * (n ? 0.5 : 0.42), ch = H * (n ? 0.62 : 0.62);
    rrect(x0, top + H * 0.02, cw, ch, 14); ctx.fillStyle = "#fffdfb"; ctx.fill(); outline(1.8); ctx.stroke();
    rrect(x0 + cw * 0.35, top, cw * 0.3, H * 0.045, 8); ctx.fillStyle = "#d8c8b8"; ctx.fill(); outline(1.4); ctx.stroke();
    const items = ["体重 / BMI", "腰围", "血压", "血糖", "血脂"], rh = (ch - H * 0.06) / 5;
    items.forEach((s, i) => {
      const y = top + H * 0.08 + rh * (i + 0.5), p = prog(0.8 + i * 0.7, 0.4), warn = i === 3 && lt > 7.4;
      rrect(x0 + cw * 0.07, y - rh * 0.25, rh * 0.5, rh * 0.5, 4); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      if (p > 0) {
        ctx.save(); ctx.globalAlpha *= p; ctx.strokeStyle = warn ? C.bad : C.good; ctx.lineWidth = 3;
        const bx = x0 + cw * 0.07, s2 = rh * 0.5;
        if (warn) text("!", bx + s2 / 2, y, rh * 0.5, C.bad);
        else { ctx.beginPath(); ctx.moveTo(bx + s2 * 0.2, y); ctx.lineTo(bx + s2 * 0.45, y + s2 * 0.25); ctx.lineTo(bx + s2 * 0.85, y - s2 * 0.3); ctx.stroke(); }
        ctx.restore();
      }
      text(s, x0 + cw * 0.07 + rh * 0.8, y, fs(0.034), warn ? C.bad : C.ink, "left");
    });
    // 时间轴
    const ty = H * 0.9, t0 = W * 0.06, t1 = W * 0.94, marks = ["用药前", "前几个月", "之后定期"];
    outline(2); ctx.beginPath(); ctx.moveTo(t0, ty); ctx.lineTo(t1, ty); ctx.stroke();
    marks.forEach((m, i) => {
      const x = lerp(t0 + W * 0.08, t1 - W * 0.08, i / 2), on = prog(0.5 + i * 1.8, 0.5);
      ctx.beginPath(); ctx.arc(x, ty, H * 0.018, 0, Math.PI * 2); ctx.fillStyle = mix("#ffffff", C.mintDeep, on); ctx.fill(); outline(1.5); ctx.stroke();
      text(m, x, ty - H * 0.045, fs(0.028), on > 0.5 ? C.ink : C.soft);
    });
    // 医生和办法
    const dx = W * (n ? 0.66 : 0.58), dy = H * (n ? 0.78 : 0.76), ds = H * (n ? 0.055 : 0.065);
    chara(dx, dy, ds, { who: "neuron", hair: "#5a4a6a", cloth: "#ffffff", hat: "none", item: "book", arms: "hold", eyes: lt > 7.4 ? "open" : "happy", tag: "医生" });
    const opts = ["饮食和运动", "换一种药", "加用二甲双胍等"];
    const ox = W * (n ? 0.8 : 0.8);
    opts.forEach((s, j) => {
      const p = prog(8.6 + j * 0.8, 0.4); if (p <= 0) return;
      const oy = top + H * (n ? 0.06 + j * 0.1 : 0.08 + j * 0.12);
      ctx.save(); ctx.globalAlpha *= p; chip(s, ox, oy, C.ink, "#eefaf4", n ? 0.03 : 0.032); ctx.restore();
    });
    callout("c0", win(0.8, 4.5) && !n, lerp(t0 + W * 0.08, t1 - W * 0.08, 0), ty, n ? W * 0.62 : W * 0.3, H * (n ? 0.66 : 0.8), "先测一次打底");
    callout("c1", win(7.6, 11), x0 + cw * 0.5, top + H * 0.08 + rh * 3.5, n ? W * 0.62 : x0 + cw + W * 0.14, H * 0.4, "发现苗头");
    say("c2", lt > 11.2, dx, dy - ds * 3.2, n ? W * 0.72 : dx + W * 0.1, H * 0.55, n ? "别自己停药～" : "一起调整，别自己停药～", "say");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) viewHypo(S.v0);
    if (S.v1 > 0.02) viewInsulin(S.v1);
    if (S.v2 > 0.02) viewX(S.v2);
    if (S.v3 > 0.02) viewDKA(S.v3);
    if (S.v4 > 0.02) viewRank(S.v4);
    if (S.v5 > 0.02) viewCheck(S.v5);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#d9822b", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f2b35c",
    titleCard: { lines: ["体重和血糖：", "抗精神病药的代谢风险"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
