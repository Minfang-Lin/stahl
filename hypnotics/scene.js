Anima.register("hypnotics", {
    "title": "助眠药的一晚：药物浓度决定你的睡眠",
    "tag": "睡眠与觉醒",
    "headline": "睡不睡得着，要看药【过没过门槛】",
    "lede": "助眠药一吃下去当晚就起效，它的效果几乎完全跟着血里的药物浓度走：浓度越过门槛，人就睡着；掉下门槛，人就醒来。跟着一条浓度曲线过一晚，看看起效快慢、半衰期长短怎样决定你是睡不着、半夜醒，还是第二天昏沉。",
    "summary": "两类助眠药的作用位置（GABA-A 正性变构、食欲素受体拮抗剂、H1、曲唑酮），入睡门槛与受体占有率，起效快慢，半衰期太短（半夜醒）和太长（次日宿醉、蓄积），理想的约 8 小时，以及 CBT-I。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 失眠的治疗：催眠药",
    "footer": "助眠药请在医生指导下使用，不要自行加量、混用或和酒同服；长期失眠优先考虑失眠认知行为治疗（CBT-I）。",
    "canvasLabel": "一条血药浓度曲线和入睡门槛，床上的小人随着浓度高低睡着、半夜醒来或早上昏沉的动画",
    "regions": ["hypo"],
    "parts": ["sleep"],
    "cast": ["GABA", "Ox", "His", "drug"],
    "color": "#9fb0ee"
  }, () => {
  const CH = [
    { title: "两条路：加重睡意，或调小叫醒", vK: 1, vG: 0,
      pill: ["加重睡意", "GABA-A"], pill2: ["调小叫醒", "挡住信号"],
      text: "助眠药大致走两条路。一条是给睡眠开关加重量：苯二氮䓬类和唑吡坦等“Z 药”结合在 GABA-A 受体的另一个位点上，让 GABA 的抑制更强。另一条是把叫醒的声音调小：苏沃雷生等挡住食欲素受体，小剂量多塞平挡住组胺 H1，曲唑酮挡住 5-HT2A、α1 和 H1。它们和很多精神科药不同，当晚就起效。",
      fact: "助眠药要么增强 GABA 的抑制，要么阻断食欲素、组胺、5-HT 等“叫醒”信号" },
    { title: "过了门槛才睡着", vK: 0, vG: 1, kind: "ideal",
      pill: ["入睡门槛", "过了才睡"], pill2: ["现在", ""],
      text: "所以，助眠药的效果几乎就跟着血里的药物浓度走。药物占住的受体一超过某个门槛，人就睡着；一掉到门槛以下，人就醒来。门槛因药而异，动物研究估计 GABA-A 类大约占住 25%～30% 的受体就够，食欲素受体拮抗剂要 65% 左右。比起半衰期本身，更要紧的是浓度在门槛以上待多久。",
      fact: "Stahl 说，你的睡眠“任凭药物浓度摆布”：关键是浓度在入睡门槛以上的时间" },
    { title: "入睡难：要快点过门槛", vK: 0, vG: 1, kind: "onset",
      pill: ["入睡难", "要起效快"], pill2: ["现在", ""],
      text: "如果躺下很久都睡不着，说明药物浓度爬过门槛太慢。比比这两条曲线：起效快的，很快越过门槛，人一会儿就睡着；起效慢的，人要在床上干等。有些药和晚饭一起吃，吸收会被拖慢。医生可能会建议早一点吃、别和食物一起吃，或者换一种药，具体都要听医生的。",
      fact: "入睡困难，需要起效快、能尽快越过入睡门槛的药" },
    { title: "太短：半夜就醒", vK: 0, vG: 1, kind: "short",
      pill: ["半衰期", "太短"], pill2: ["现在", ""],
      text: "半衰期很短的药（一到三个小时，比如三唑仑、扎来普隆和普通剂型的唑吡坦），浓度掉得快。前半夜睡得挺好，可凌晨两三点浓度就跌到门槛以下，人醒了，再也睡不着。Stahl 把这叫“太凉”。对这样的人，医生可能会换成在门槛以上待得更久的药或剂型。",
      fact: "半衰期太短：撑不到天亮，容易半夜或清晨过早醒来" },
    { title: "太长：第二天还晕", vK: 0, vG: 1, kind: "long",
      pill: ["半衰期", "太长"], pill2: ["现在", ""],
      text: "反过来，半衰期中等偏长（十几到三十小时，比如艾司唑仑）的药，到了早上七点浓度还在门槛以上，人就昏昏沉沉，像宿醉一样，反应慢、记性差，开车尤其危险。半衰期超过一天的药（比如氟西泮）天天吃，还会一晚晚越积越多，老人更容易跌倒。Stahl 把这叫“太热”。",
      fact: "半衰期太长：起床时药还没退，第二天容易犯困、反应慢，老人容易跌倒" },
    { title: "刚刚好，也别忘了 CBT-I", vK: 0, vG: 1, kind: "ideal",
      pill: ["刚刚好", "约 8 小时"], pill2: ["现在", ""],
      text: "理想的助眠药，在门槛以上待大约 8 小时，刚好盖住一整夜，起床时正好退下去，比如右佐匹克隆、唑吡坦控释片、小剂量曲唑酮和小剂量多塞平。食欲素受体拮抗剂还有个特点：早上身体自己的食欲素多起来，会把药挤下去。不过别忘了，失眠认知行为治疗（CBT-I）仍是首选的基础。",
      fact: "理想的助眠药：在入睡门槛以上约 8 小时，不冷不热刚刚好" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    night: "#eef0ff", night2: "#fff4f6", bed: "#ffe6c4", blanket: "#c9d3fb", sheet: "#fffaf3", curve: "#8f84e0", slow: "#e0913a", th: "#e8637a",
  });
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { vK: 1, vG: 0 };
  const P = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsS = () => Math.max(12, W / 58) * Anima.UI;
  const PERSON = { hair: "#6b5a8a", eye: "#4a3a6a", cloth: "#dfe6ff", style: "short", hat: "none" };
  let clock = "";

  function update() { lt = Anima.sceneTime; }

  // ---------- 小工具 ----------
  function chip(t, x, y, col, fs, tc) {
    fs = fs || fsS() * 0.85;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = col || "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, fs, tc || C.ink);
    return { w, h };
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(120,110,160,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 16); ctx.stroke();
    let fs = Math.max(12, Math.min(W / 42, h * 0.09)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(title).width + fs * 1.2;
    if (tw > w * 0.96) { fs *= w * 0.96 / tw; tw = w * 0.96; }
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function moon(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + r * 0.45, y - r * 0.2, r * 0.85, 0, Math.PI * 2); ctx.fillStyle = C.night; ctx.fill();
  }

  // ================= 第 1 幕：两条路 =================
  function keysView(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f3f3ff", "#fff3f5");
    Anima.bokeh(6, "#dfe3ff", 0.7, 11);
    const top = Anima.topSafe() + H * 0.07, gap = W * 0.025;
    const lw = W * (n ? 0.36 : 0.34), rw = W - gap * 3 - lw, ch = H * 0.93 - top;
    const L = { x: gap, y: top, w: lw, h: ch }, R = { x: gap * 2 + lw, y: top, w: rw, h: ch };
    const pA = P(0.3, 0.7), pB = P(4.2, 0.7);
    const mem = (b, y) => { ctx.save(); rrect(b.x, b.y, b.w, b.h, 16); ctx.clip(); ctx.fillStyle = "#f1eeff"; ctx.fillRect(b.x, y, b.w, b.h); ctx.restore(); outline(1.6); ctx.beginPath(); ctx.moveTo(b.x, y); ctx.lineTo(b.x + b.w, y); ctx.stroke(); };
    const s = H * (n ? 0.036 : 0.04);
    // 左：GABA-A 受体 + 另一个位点上的药
    ctx.save(); ctx.globalAlpha *= pA;
    card(L.x, L.y, L.w, L.h, "加重睡意", "#e4e0ff");
    const my = L.y + L.h * 0.62, rx = L.x + L.w * 0.4;
    mem(L, my);
    Anima.receptor(rx, my, H * 0.055, "#b8b0f0", 0.8, { label: "GABA-A" });
    chara(rx, my - H * 0.09, s, { who: "GABA", arms: "up", eyes: "happy" });
    chara(rx + H * 0.1, my - H * 0.01, s, { who: "drug", hatColor: "#b8b0f0", arms: "hug", eyes: "closed", mouth: "cat", dir: -1, tag: "Z 药" });
    for (let k = 0; k < 4; k++) { const t = (time * 0.8 + k / 4) % 1; ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI); Anima.ion(rx + (k - 1.5) * H * 0.012, my - H * 0.04 + t * H * 0.16, H * 0.014, "Cl", "#d7f0c8"); ctx.restore(); }
    emote("zzz", L.x + L.w * 0.8, L.y + L.h * 0.2, H * 0.04);
    ctx.restore();
    // 右：三扇叫醒之门被挡住
    const rs = [];
    if (pB > 0.02) {
      ctx.save(); ctx.globalAlpha *= pB;
      card(R.x, R.y, R.w, R.h, "调小叫醒的声音", "#ffe6c4");
      const ry = R.y + R.h * 0.62;
      mem(R, ry);
      const D = [{ w: "Ox", l: n ? "OX" : "食欲素受体", t: "苏沃雷生", c: "#ffd27a" }, { w: "His", l: "H1", t: "多塞平", c: "#d9b8f0" }, { w: "5HT", l: n ? "2A" : "5-HT2A", t: "曲唑酮", c: "#a8e0cc" }];
      D.forEach((d, i) => {
        const p = P(4.6 + i * 1.3, 0.6);
        const x = R.x + R.w * (0.2 + i * 0.3);
        Anima.receptor(x, ry, H * 0.045, d.c, 0, { label: d.l, shape: i === 2 ? "tri" : i === 1 ? "square" : "round" });
        const site = ry - H * 0.045 * 1.62;
        chara(x, site + (1 - p) * -H * 0.1, s * 0.95, { who: "drug", hatColor: d.c, arms: "fist", eyes: "open", mouth: "flat", tag: n ? null : d.t, alpha: p });
        chara(x + (n ? H * 0.06 : H * 0.075), ry - H * 0.12 - (n ? H * 0.03 : 0), s * 0.8, { who: d.w, eyes: p > 0.9 ? "sleepy" : "open", mouth: "o", arms: "down", dir: -1, gray: p * 0.5 });
        rs.push({ x, y: site });
      });
      ctx.restore();
    }
    const ty = Anima.topSafe() + H * 0.01;
    callout("k-allo", n ? win(1.2, 4) : win(1.2, 13), rx + H * 0.1, my - H * 0.06, n ? W * 0.3 : L.x + L.w * 0.5, n ? ty : L.y + L.h * 0.14, "结合在“另一个位点”");
    if (rs.length) callout("k-block", lt > (n ? 8.6 : 8.4), rs[0].x, rs[0].y, n ? W * 0.62 : R.x + R.w * 0.5, n ? ty : R.y + R.h * 0.14, "挡住叫醒信号的门");
    ctx.restore();
  }

  // ================= 第 2～6 幕：一晚的浓度曲线 =================
  const TH = 0.45, H0 = 22, H1 = 34; // 入睡门槛（相对浓度）；横轴 22:00 → 次日 10:00
  const RAW = {
    ideal: { ka: 3, ke: 0.1 }, fast: { ka: 4, ke: 0.1 }, slow: { ka: 0.55, ke: 0.1 },
    short: { ka: 3.5, ke: 0.46 }, long: { ka: 3, ke: 0.035 },
  };
  const PEAK = {};
  Object.keys(RAW).forEach((k) => { let m = 0; for (let t = 0; t < 12; t += 0.02) m = Math.max(m, Math.exp(-RAW[k].ke * t) - Math.exp(-RAW[k].ka * t)); PEAK[k] = m; });
  function conc(k, h) { const t = h - 23; if (t <= 0) return 0; const r = RAW[k]; return (Math.exp(-r.ke * t) - Math.exp(-r.ka * t)) / PEAK[k] * (k === "slow" ? 0.95 : 1); }
  let lastKind = "ideal";
  const kindNow = () => { if (CH[cur].kind) lastKind = CH[cur].kind; return lastKind; };
  function curves() {
    const kd = kindNow();
    if (kd === "onset") return [{ k: "fast", col: C.curve, lab: "起效快" }, { k: "slow", col: C.slow, lab: "起效慢" }];
    return [{ k: kd, col: kd === "short" ? "#4f9fd0" : kd === "long" ? C.slow : C.curve, lab: "" }];
  }
  const nowH = () => lerp(22.5, 33.5, clamp((lt - 0.8) / 10.6, 0, 1));
  const fmt = (h) => { const hh = Math.floor(h) % 24, mm = Math.floor((h - Math.floor(h)) * 6) * 10; return (hh < 10 ? "0" : "") + hh + ":" + (mm < 10 ? "0" : "") + mm; };
  function gG() {
    const n = N(), top = Anima.topSafe() + H * 0.04;
    const ch = { x0: W * (n ? 0.08 : 0.07), x1: W * (n ? 0.95 : 0.95), y0: top + H * 0.04, y1: H * (n ? 0.58 : 0.6) };
    return { n, ch, bedY: H * (n ? 0.88 : 0.88), X: (h) => lerp(ch.x0, ch.x1, (h - H0) / (H1 - H0)), Y: (v) => lerp(ch.y1, ch.y0, v / 1.12) };
  }
  function bed(x, y, w, state, label, labCol) {
    // state: sleep | awake | groggy | fresh
    const hgt = w * 0.18;
    rrect(x - w / 2, y - hgt, w, hgt, hgt * 0.3); ctx.fillStyle = C.bed; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(x - w / 2 - w * 0.03, y - hgt * 2.6, w * 0.06, hgt * 2.8, w * 0.02); ctx.fill(); ctx.stroke();
    rrect(x - w / 2 + w * 0.05, y - hgt * 1.75, w * 0.22, hgt * 0.8, hgt * 0.35); ctx.fillStyle = "#ffffff"; ctx.fill(); ctx.stroke();
    const s = Math.min(w * 0.095, H * 0.04);
    if (state === "groggy" || state === "fresh") {
      chara(x + w * 0.1, y - hgt, s, Object.assign({}, PERSON, state === "groggy" ? { eyes: "dizzy", mouth: "wavy", arms: "down", brow: "worry" } : { eyes: "happy", mouth: "grin", arms: "up" }));
      rrect(x - w * 0.25, y - hgt * 1.5, w * 0.72, hgt * 0.6, hgt * 0.3); ctx.fillStyle = C.blanket; ctx.fill(); outline(1.4); ctx.stroke();
      if (state === "groggy") { emote("sweat", x + w * 0.1 + s * 1.1, y - hgt - s * 3.2, s * 0.8); sfx("晕乎乎…", x + w * 0.38, y - hgt - s * 4.2, H * 0.036, C.slow, -0.1, 1); }
      else sparkles(x + w * 0.1, y - hgt - s * 2, s * 2.2, 4, 1, 3);
    } else {
      ctx.save(); ctx.translate(x - w / 2 + w * 0.17 + s * 3.1, y - hgt * 1.25); ctx.rotate(-Math.PI / 2);
      chara(0, 0, s, Object.assign({}, PERSON, state === "sleep" ? { eyes: "closed", mouth: "cat" } : { eyes: "wide", mouth: "o", brow: "worry" }, { shadow: false, bob: 0 }));
      ctx.restore();
      rrect(x - w / 2 + w * 0.26, y - hgt * 1.7, w * 0.7, hgt * 0.95, hgt * 0.4); ctx.fillStyle = C.blanket; ctx.fill(); outline(1.4); ctx.stroke();
      if (state === "sleep") emote("zzz", x - w * 0.18, y - hgt * 3.4, s * 0.9);
      else emote("?", x - w * 0.22, y - hgt * 3.3, s * 0.9);
    }
    if (label) chip(label, x + w * 0.22, y + hgt * 0.02 + fsS() * 0.2, labCol || "#fff", fsS() * 0.75);
  }
  function graphView(a) {
    const g = gG(), n = g.n, ch = g.ch, kd = kindNow();
    ctx.save(); ctx.globalAlpha *= a;
    const hc = nowH();
    const day = clamp((hc - 30) / 2, 0, 1);
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, mix(C.night, "#fff7e8", day)); bg.addColorStop(1, mix(C.night2, "#fffaf0", day));
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(5, mix("#dfe3ff", "#ffe8b0", day), 0.6, 21);
    // 图框
    rrect(ch.x0 - W * 0.02, ch.y0 - H * 0.03, ch.x1 - ch.x0 + W * 0.035, ch.y1 - ch.y0 + H * 0.1, 14); ctx.fillStyle = "rgba(255,255,255,0.82)"; ctx.fill(); outline(1.4); ctx.stroke();
    const fs = fsS() * (n ? 0.72 : 0.8);
    outline(1.4); ctx.beginPath(); ctx.moveTo(ch.x0, ch.y0); ctx.lineTo(ch.x0, ch.y1); ctx.lineTo(ch.x1, ch.y1); ctx.stroke();
    for (let h = 22; h <= 34; h += n ? 4 : 2) { const x = g.X(h); ctx.beginPath(); ctx.moveTo(x, ch.y1); ctx.lineTo(x, ch.y1 + 4); ctx.stroke(); text((h % 24) + ":00", x, ch.y1 + fs * 0.95, fs, C.soft); }
    text("血药浓度", ch.x0 + W * 0.01, ch.y0 + fs * 0.2, fs, C.soft, "left");
    // 7:00 起床线
    const xw = g.X(31);
    ctx.save(); ctx.setLineDash([4, 6]); ctx.strokeStyle = C.gold; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(xw, ch.y0); ctx.lineTo(xw, ch.y1); ctx.stroke(); ctx.restore();
    text("7:00 起床", xw + W * 0.008, ch.y0 + fs * 0.2, fs, "#c88600", "left");
    // 门槛
    const yt = g.Y(TH);
    ctx.save(); ctx.setLineDash([8, 6]); ctx.strokeStyle = C.th; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(ch.x0, yt); ctx.lineTo(ch.x1, yt); ctx.stroke(); ctx.restore();
    text("入睡门槛", ch.x0 + W * 0.01, yt - fs * 0.8, fs, C.th, "left");
    // 曲线：画到“现在”为止，门槛以上的部分涂色
    const cvs = curves(), M = 140;
    cvs.forEach((c) => {
      const hEnd = hc;
      ctx.save(); ctx.beginPath();
      for (let i = 0; i <= M; i++) { const h = lerp(22, hEnd, i / M), v = Math.max(conc(c.k, h), TH); if (i) ctx.lineTo(g.X(h), g.Y(v)); else ctx.moveTo(g.X(h), g.Y(v)); }
      ctx.lineTo(g.X(hEnd), yt); ctx.lineTo(g.X(22), yt); ctx.closePath(); ctx.fillStyle = Anima.alpha(c.col, 0.18); ctx.fill(); ctx.restore();
      ctx.save(); ctx.strokeStyle = c.col; ctx.lineWidth = Math.max(2.5, H * 0.008); ctx.lineJoin = "round"; ctx.beginPath();
      for (let i = 0; i <= M; i++) { const h = lerp(22, hEnd, i / M); if (i) ctx.lineTo(g.X(h), g.Y(conc(c.k, h))); else ctx.moveTo(g.X(h), g.Y(conc(c.k, h))); }
      ctx.stroke(); ctx.restore();
      const px = g.X(hc), py = g.Y(conc(c.k, hc));
      ctx.beginPath(); ctx.arc(px, py, H * 0.012, 0, Math.PI * 2); ctx.fillStyle = c.col; ctx.fill(); outline(1.2); ctx.stroke();
    });
    // 吃药的小胶囊 + “现在”的竖线
    const xd = g.X(23);
    ctx.save(); ctx.translate(xd, ch.y1 + fs * 2.3); ctx.rotate(-0.4);
    rrect(-H * 0.022, -H * 0.01, H * 0.044, H * 0.02, H * 0.01); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.2); ctx.stroke();
    rrect(-H * 0.022, -H * 0.01, H * 0.022, H * 0.02, H * 0.01); ctx.fillStyle = "#ff9aa9"; ctx.fill(); ctx.stroke();
    ctx.restore();
    const xn = g.X(hc);
    ctx.save(); ctx.strokeStyle = Anima.alpha(C.lavDeep, 0.6); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(xn, ch.y0); ctx.lineTo(xn, ch.y1); ctx.stroke(); ctx.restore();
    clock = fmt(hc);
    // 床
    const stateOf = (k) => {
      const v = conc(k, hc);
      if (hc >= 31) { if (v > TH) return "groggy"; return kd === "short" ? "awake" : "fresh"; }
      return v > TH ? "sleep" : "awake";
    };
    const bw = Math.min(W * (n ? 0.4 : 0.26), H * 0.5);
    let bedsPos = [];
    if (kd === "onset") {
      bedsPos = [{ x: W * 0.27, c: cvs[0] }, { x: W * 0.73, c: cvs[1] }];
      bedsPos.forEach((b) => bed(b.x, g.bedY, bw, stateOf(b.c.k), b.c.lab, mix("#ffffff", b.c.col, 0.35)));
    } else {
      bedsPos = [{ x: W * (n ? 0.3 : 0.3), c: cvs[0] }];
      bed(bedsPos[0].x, g.bedY, bw, stateOf(cvs[0].k), null);
      if (hc < 28) moon(W * (n ? 0.72 : 0.62), g.bedY - H * 0.12, H * 0.035);
      else { glow(W * (n ? 0.72 : 0.62), g.bedY - H * 0.12, H * 0.08, C.gold, day); ctx.beginPath(); ctx.arc(W * (n ? 0.72 : 0.62), g.bedY - H * 0.12, H * 0.035, 0, Math.PI * 2); ctx.fillStyle = mix("#fff1b8", "#ffc94d", day); ctx.fill(); outline(1.4); ctx.stroke(); }
    }
    // CBT-I 小卡片（第 6 幕）
    if (cur === 5 && lt > 8.2) {
      const p = P(8.2, 0.8), cw = W * (n ? 0.5 : 0.3), chh = H * (n ? 0.26 : 0.24), cx0 = W * (n ? 0.47 : 0.66), cy0 = g.bedY - chh;
      ctx.save(); ctx.globalAlpha *= p;
      card(cx0, cy0 + (1 - p) * H * 0.05, cw, chh, "CBT-I：首选的基础", "#dff3e6");
      const lines = n ? ["固定起床时间", "困了再上床"] : ["固定起床时间", "困了再上床", "床只用来睡觉"];
      lines.forEach((l, i) => text("· " + l, cx0 + cw * 0.08, cy0 + chh * (0.3 + i * (n ? 0.32 : 0.24)) + (1 - p) * H * 0.05, fsS() * (n ? 0.78 : 0.82), C.ink, "left"));
      ctx.restore();
    }
    // 标注
    const ty = Anima.topSafe() + H * 0.01;
    const c0 = cvs[0];
    if (cur === 1) {
      callout("g-dose", win(0.5, 3.5), xd, ch.y1 + fs * 2.3, n ? W * 0.35 : xd + W * 0.12, n ? ty : ch.y1 - H * 0.12, "23:00 吃药");
      callout("g-in", win(4, 13), g.X(27), g.Y(Math.max(TH, conc(c0.k, 27))) + H * 0.04, n ? W * 0.5 : g.X(27), n ? ty : yt + H * 0.1, n ? "门槛以上：睡着" : "浓度在门槛以上：睡着");
    }
    if (cur === 2) {
      callout("g-fast", win(1.5, 6), g.X(23.6), g.Y(conc("fast", 23.6)), n ? W * 0.35 : g.X(25), n ? ty : ch.y0 + H * 0.02, "很快越过门槛");
      callout("g-slow", lt > 6.2, g.X(25), g.Y(conc("slow", 25)), n ? W * 0.55 : g.X(26.8), n ? ty : yt + H * 0.1, "爬得慢：躺着干等");
    }
    if (cur === 3) callout("g-drop", lt > 4.2, g.X(26.6), yt, n ? W * 0.6 : g.X(28.5), n ? ty : ch.y0 + H * 0.04, n ? "凌晨就掉下门槛" : "凌晨两三点就掉到门槛以下");
    if (cur === 4) callout("g-hot", lt > 8.4, xw, g.Y(conc("long", 31)), n ? W * 0.62 : xw + W * 0.03, n ? ty : yt + H * 0.12, n ? "起床时还在门槛上" : "7 点了，还在门槛以上");
    if (cur === 5) callout("g-8h", win(3, 8), g.X(27), yt, n ? W * 0.5 : g.X(27), n ? ty : yt + H * 0.1, "门槛以上约 8 小时");
    if (cur === 3 && hc > 26.8 && hc < 31) say("g-wake", true, bedsPos[0].x - bw * 0.25, g.bedY - bw * 0.35, bedsPos[0].x + bw * (n ? 0.75 : 0.9), g.bedY - H * 0.12, "怎么才两点多…", "think");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#f6f4ff"; ctx.fillRect(0, 0, W, H);
    clock = "";
    if (S.vK > 0.02) keysView(S.vK);
    if (S.vG > 0.02) graphView(S.vG);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#6b61c9", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1] || clock || "22:30", "#e0913a", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#9fb0ee",
    titleCard: { lines: ["睡不睡得着，", "要看药过没过门槛"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
