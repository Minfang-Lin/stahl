Anima.register("clozapine", {
    "title": "氯氮平：难治的王牌",
    "tag": "抗精神病药",
    "headline": "氯氮平：难治性精神分裂症的【王牌】",
    "lede": "试过两种抗精神病药，都用够了剂量和时间，还是不见好？氯氮平往往能帮上忙，还能降低自杀风险。可这张王牌的钥匙串特别长，要定期查血、留意好几种副作用，连吸烟都会改变它在血里的浓度。",
    "summary": "难治性精神分裂症、氯氮平的疗效和降低自杀风险、受体钥匙串、粒细胞缺乏和定期查血、心肌炎等需要留意的副作用，以及吸烟和 CYP1A2。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 氯氮平",
    "footer": "氯氮平必须在专业医生的监测下使用。用药期间出现发烧、喉咙痛、胸闷心慌、几天不排便等情况请及时就医；有轻生念头请马上求助。",
    "canvasLabel": "戴金色胶囊帽的氯氮平访客帮助难治的居民，旁边有查血的中性粒细胞卫兵和肝脏里的代谢酶工人",
    "regions": ["striatum", "nac"],
    "parts": ["psychosis"],
    "cast": ["DA", "5HT", "His", "ACh", "drug"],
    "color": "#ffd36e"
  }, () => {
  const CH = [
    { title: "试过两种药之后", v0: 1, ace: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["已试过", "两种药"], pill2: ["叫做", "难治性"],
      text: "有些人认真吃药，换过至少两种抗精神病药，每一种都用够了剂量、用够了时间，症状却还是没有明显好转。这叫难治性精神分裂症，并不少见。这不是谁不够努力，也不代表没有办法了。医生会先确认药有没有按时吃、诊断对不对，接下来，手里还有一张特别的王牌。",
      fact: "难治性精神分裂症：足量、足疗程试过至少两种抗精神病药，效果仍然不好" },
    { title: "王牌登场", v0: 1, ace: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["王牌", "氯氮平"], pill2: ["还能", "降自杀风险"],
      text: "这张王牌就是氯氮平。对难治性精神分裂症，它往往比其他抗精神病药更有效，不少试过好几种药的人，用上它以后幻觉、妄想明显减轻。它还是少数被证明能降低自杀风险的抗精神病药。不过它力气大，也需要格外仔细地照看。如果心里出现轻生的念头，请马上告诉家人和医生。",
      fact: "氯氮平对难治性精神分裂症往往更有效，也能降低自杀风险" },
    { title: "一长串钥匙", v0: 0, ace: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["D2 占据", "较低"], pill2: ["钥匙", "一长串"],
      text: "氯氮平的钥匙串特别长。它只轻轻占住一部分 D2 门，占据率比较低，所以很少引起僵硬、手抖这类动作副作用；它还挡住 5-HT2A，以及组胺 H1、乙酰胆碱 M1、α1 等许多别的锁。它为什么对难治者更有效，目前还没有完全弄清楚；而这一长串钥匙，也带来了不少副作用。",
      fact: "氯氮平的 D2 占据率较低，同时作用于 5-HT2A、H1、M1、α1 等许多受体" },
    { title: "一定要定期查血", v0: 0, ace: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["要查", "中性粒细胞"], pill2: ["最关键", "前几个月"],
      text: "氯氮平最需要留意的是粒细胞缺乏：血液里负责打细菌的中性粒细胞，在少数人身上会大大减少，身体一下子挡不住感染。所以用它必须定期查血。开始治疗的前几个月风险最高，查得也最勤，之后间隔可以慢慢拉长。用药期间如果发烧、喉咙痛、嘴里起溃疡，要马上告诉医生。",
      fact: "氯氮平可能引起粒细胞缺乏，必须定期查血，开始用药的前几个月最关键" },
    { title: "还要留意的几件事", v0: 0, ace: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["留意", "六件事"], pill2: ["早期", "心肌炎"],
      text: "还有几件事也要一起留意。刚开始的几周要当心心肌炎，出现胸闷、心慌、发烧要及时就医；它可能诱发癫痫；它会让肠子动得很慢，严重便秘甚至可能变成肠梗阻，千万别忍着；很多人夜里会流口水；还常见嗜睡、体重增加，以及血糖、血脂升高。这些都需要医生定期检查和处理。",
      fact: "心肌炎、癫痫、严重便秘、流口水、嗜睡、体重和代谢问题，都是氯氮平要留意的副作用" },
    { title: "吸烟会改变浓度", v0: 0, ace: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["分解它的酶", "CYP1A2"], pill2: ["吸烟", "浓度会变"],
      text: "氯氮平主要靠肝脏里的 CYP1A2 酶来分解。吸烟时，烟雾里的物质会让这种酶变多，氯氮平被分解得更快，血里的浓度就降下来；反过来，突然戒烟后，酶慢慢变少，浓度可能明显升高，副作用跟着加重。所以开始吸烟、戒烟或者吸烟量有变化，都要告诉医生，由医生监测和调整，不要自己加减药。",
      fact: "吸烟会诱导 CYP1A2、降低氯氮平血药浓度；戒烟后浓度可能升高" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    d2: "#9fd0ee", ht2a: "#8fdcc4", h1: "#dcc4f0", m1: "#f7c4d8", a1: "#ffd0d4", gold2: "#ffd36e",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, ace: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  let level = 0.5; // 第 6 幕：血药浓度（平滑）

  const nw = () => W / H < 1.45;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (Anima.narrow ? 1.08 : 1);
  const prog = (t0, d) => ease((lt - t0) / d);
  const tsafe = () => Anima.topSafe();
  const O = (base, o) => Object.assign({}, base, o || {});
  const CLZ = { who: "drug", label: "", hatColor: "#ffd36e", hatColor2: "#fff6d8" };
  const GUARD = { who: "neuron", hair: "#ece6fb", eye: "#7a70c0", cloth: "#ffffff", hat: "cap", hatColor: "#e3dcff", label: "", style: "short" };
  const WORKER = { who: "MAO", label: "1A2", hatColor: "#f6c6a0", cloth: "#ffe9d6" };
  const RES = { who: "neuron", hair: "#9c7b62", cloth: "#ffe7c7" };

  function levelTarget() {
    if (cur !== 5) return 0.5;
    if (lt < 1.5) return 0.5;
    if (lt < 5.5) return 0.2;
    if (lt < 10) return 0.85;
    return 0.5;
  }
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
    level = lerp(level, levelTarget(), 1 - Math.exp(-dt * 1.6));
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
    rrect(x, y, w, h, Math.min(18, w * 0.08)); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, Math.min(18, w * 0.08)); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.03, 11), w * 0.12);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.3;
      rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
    ctx.restore();
  }
  function banner(lines, y, a, bx) {
    if (a <= 0) return;
    const bf = fsz(0.03, 11);
    ctx.save(); ctx.globalAlpha *= a;
    ctx.font = `${bf}px ${Anima.ROUND}`;
    const bw = Math.min(W - 12, Math.max.apply(null, lines.map((l) => ctx.measureText(l).width)) + bf * 3.6), bh = bf * (1.1 + lines.length * 1.35);
    const X = clamp(bx == null ? W / 2 : bx, bw / 2 + 6, W - bw / 2 - 6);
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    rrect(X - bw / 2, y - bh / 2, bw, bh, bf * 0.8); ctx.fillStyle = "#fff4f7"; ctx.fill(); ctx.restore();
    outline(2); ctx.strokeStyle = C.rose; ctx.stroke();
    Anima.heart(X - bw / 2 + bf * 1.1, y, bf * 0.5, C.rose); Anima.heart(X + bw / 2 - bf * 1.1, y, bf * 0.5, C.rose);
    lines.forEach((l, j) => text(l, X, y + (j - (lines.length - 1) / 2) * bf * 1.35 + 1, bf, C.ink));
    ctx.restore();
  }
  function rail(x0, y, x1, color, k) {
    const w = Math.max(4, H * 0.018);
    ctx.save(); ctx.lineCap = "round";
    ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.85)"; ctx.lineWidth = Math.max(1.2, w * 0.28);
    ctx.setLineDash([w * 0.9, w * 1.1]); ctx.lineDashOffset = -time * w * k; ctx.stroke(); ctx.setLineDash([]);
    ctx.restore();
  }
  // 头顶的小雨云；k 越小越淡，最后变成太阳
  function cloud(x, y, r, k) {
    if (k > 0.02) {
      ctx.save(); ctx.globalAlpha *= k;
      ctx.fillStyle = "#c9c3d6";
      for (const [dx, dy, rr] of [[-0.6, 0.1, 0.55], [0, -0.2, 0.7], [0.6, 0.1, 0.55]]) { ctx.beginPath(); ctx.arc(x + dx * r, y + dy * r, rr * r, 0, Math.PI * 2); ctx.fill(); }
      outline(1.4); ctx.beginPath();
      for (const [dx, dy, rr] of [[-0.6, 0.1, 0.55], [0, -0.2, 0.7], [0.6, 0.1, 0.55]]) { ctx.moveTo(x + dx * r + rr * r, y + dy * r); ctx.arc(x + dx * r, y + dy * r, rr * r, 0, Math.PI * 2); }
      ctx.stroke();
      ctx.fillStyle = "#c9c3d6"; ctx.fillRect(x - r * 0.9, y + r * 0.05, r * 1.8, r * 0.5);
      ctx.strokeStyle = "#9fc8e6"; ctx.lineWidth = Math.max(1.2, r * 0.08);
      for (let i = 0; i < 4; i++) { const t = (time * 1.2 + i / 4) % 1; const dx = x - r * 0.6 + i * r * 0.4; ctx.beginPath(); ctx.moveTo(dx, y + r * 0.7 + t * r); ctx.lineTo(dx - r * 0.08, y + r * 0.95 + t * r); ctx.stroke(); }
      ctx.restore();
    }
    if (k < 0.98) {
      const a = 1 - k;
      ctx.save(); ctx.globalAlpha *= a;
      glow(x, y, r * 2, C.gold, 0.8);
      ctx.strokeStyle = "#ffb84d"; ctx.lineWidth = Math.max(1.5, r * 0.12); ctx.lineCap = "round";
      for (let i = 0; i < 8; i++) { const q = i / 8 * Math.PI * 2 + time * 0.5; ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * r * 0.75, y + Math.sin(q) * r * 0.75); ctx.lineTo(x + Math.cos(q) * r * 1.05, y + Math.sin(q) * r * 1.05); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, Math.PI * 2); ctx.fillStyle = "#ffe07a"; ctx.fill(); outline(1.4); ctx.stroke();
      face(x, y + r * 0.02, r * 0.35, 1);
      ctx.restore();
    }
  }
  function signpost(x, ground, h, label, color, a, lit) {
    ctx.save(); ctx.globalAlpha *= a;
    const fs = fsz(0.03, 11);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const bw = ctx.measureText(label).width + fs * 1.6, bh = fs * 1.9, by = ground - h;
    outline(2.2); ctx.beginPath(); ctx.moveTo(x, by + bh); ctx.lineTo(x, ground); ctx.stroke();
    if (lit) { glow(x, by + bh / 2, bw, C.gold, lit); sparkles(x, by + bh / 2, bw * 0.8, 5, lit, 3); }
    rrect(x - bw / 2, by, bw, bh, bh * 0.3); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(label, x, by + bh / 2 + 1, fs, C.ink);
    ctx.restore();
    return { y: by, bh };
  }

  // ---------- 第 1、2 幕：治疗的小路 ----------
  function pathView(a) {
    const n = nw(), ace = S.ace;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash(mix("#f1eff6", "#fff8e6", ace), mix("#ece8f2", "#ffeef2", ace));
    Anima.bokeh(6, ace > 0.5 ? "#ffe7a3" : "#dcd6e8", 0.7, 12);
    if (ace > 0.3) Anima.petals(8, ace * 0.6, 31);
    const ground = H * 0.82, s = H * (n ? 0.065 : 0.075);
    ctx.fillStyle = mix("#e8e2ea", "#f5ecd8", ace); ctx.fillRect(0, ground, W, H - ground);
    rail(W * 0.02, ground + H * 0.05, W * 0.98, mix("#c9bfc6", C.gold2, 0.3 + ace * 0.5), 0.5 + ace * 2);
    const xs = (n ? [0.2, 0.46, 0.8] : [0.18, 0.42, 0.78]).map((k) => k * W);
    const ph = H * (n ? 0.46 : 0.5);
    const sA = signpost(xs[0], ground, ph, "药 A", "#dcefff", 1 - ace * 0.4, 0);
    const sB = signpost(xs[1], ground, ph, "药 B", "#ffe3d6", 1 - ace * 0.4, 0);
    const litC = cur === 0 ? prog(9, 1.5) * 0.6 : 1;
    signpost(xs[2], ground, ph, ace > 0.5 ? "氯氮平" : "下一站", mix("#fff4c4", "#ffe07a", ace), 1, litC);
    // 每一站：够剂量、够时间都打了勾
    const fs = fsz(0.024, 10);
    [[xs[0], sA, 1.8], [xs[1], sB, 6]].forEach((q, i) => {
      const k = cur === 0 ? prog(q[2], 0.6) : 1;
      if (k <= 0) return;
      ctx.save(); ctx.globalAlpha *= k * (1 - ace * 0.4);
      tagBox("足量 ✓", q[0], q[1].y + q[1].bh + fs * 1.3, fs, "#e3f7ec", C.ink, 1.1);
      tagBox("足疗程 ✓", q[0], q[1].y + q[1].bh + fs * 3.1, fs, "#e3f7ec", C.ink, 1.1);
      ctx.restore();
    });
    // 居民沿着小路走
    let rx, walking = false;
    if (cur === 0) {
      const w1 = prog(0, 1.6), w2 = prog(4, 2), w3 = prog(9, 2);
      rx = lerp(W * 0.04, xs[0] + s * 1.9, w1);
      rx = lerp(rx, xs[1] + s * 1.9, w2);
      rx = lerp(rx, xs[2] - s * 2.4, w3);
      walking = (lt < 1.6) || (lt > 4 && lt < 6) || (lt > 9 && lt < 11);
    } else rx = lerp(xs[2] - s * 2.4, xs[2] - s * 1.6, prog(0, 1));
    const helped = cur === 1 ? prog(4, 2.5) : ace;
    chara(rx, ground, s, O(RES, { eyes: helped > 0.5 ? "happy" : "open", mouth: helped > 0.5 ? "smile" : "flat", brow: helped > 0.5 ? null : "worry", arms: helped > 0.7 ? "up" : "down", walk: walking ? time * 8 : null, dir: 1 }));
    cloud(rx, ground - s * 4.6, s * 0.8, 1 - helped);
    if (helped > 0.7) emote("heart", rx - s * 1.1, ground - s * 3, s * 0.5, (helped - 0.7) * 3);
    // 第 2 幕：氯氮平登场，手里拿着盾牌
    if (ace > 0.02) {
      const k = cur === 1 ? prog(0.5, 1.8) : 1;
      const cx = lerp(W + s * 2, xs[2] + s * 1.2, k);
      chara(cx, ground, s * 1.05, O(CLZ, { eyes: "happy", mouth: "cat", arms: lt > 7 && cur === 1 ? "hold" : "wave", item: lt > 7 && cur === 1 ? "shield" : null, dir: -1, walk: k < 1 ? time * 9 : null, tag: "氯氮平", alpha: ace }));
      if (k >= 1) sparkles(cx, ground - s * 1.8, s * 2, 5, ace, 9);
      const on1 = cur === 1;
      callout("better", on1 && lt > 4 && lt < 8, rx, ground - s * 1.8, W * (n ? 0.25 : 0.44), H * (n ? 0.28 : 0.36), "对难治者往往更有效");
      callout("suicide", on1 && lt > 8, cx, ground - s * 1.4, W * (n ? 0.72 : 0.52), H * (n ? 0.28 : 0.36), "还能降低自杀风险"); // 手机：和上一条并排放在顶上
      say("lighter", on1 && lt > 6 && lt < 11.5, rx, ground - s * 3.2, W * (n ? 0.3 : 0.3), H * (n ? 0.68 : 0.5), "好像……轻松一些了", "say");
      banner(["有轻生的念头？请马上告诉家人和医生"], H * 0.94, on1 ? prog(10.5, 0.8) : 0);
    }
    const on0 = cur === 0;
    callout("trs", on0 && lt > 7, xs[1], sB.y + sB.bh / 2, W * (n ? 0.5 : 0.5), H * (n ? 0.3 : 0.26), n ? "难治性：试过两种以上" : "难治性：足量足疗程试过至少两种药");
    say("sigh", on0 && lt > 2.5 && lt < 7, rx, ground - s * 3.3, W * (n ? 0.66 : 0.64), H * (n ? 0.36 : 0.34), "都认真吃了，还是不太好……", "think");
    say("next", on0 && lt > 10.5, rx, ground - s * 3.3, W * (n ? 0.4 : 0.52), H * (n ? 0.4 : 0.42), "前面还有一站？", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：一长串钥匙 ----------
  function keysView(a) {
    const n = nw(), t = cur === 2 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#f4effd");
    Anima.bokeh(7, "#ffe7a3", 0.7, 41);
    const post = H * (n ? 0.56 : 0.55);
    Anima.postMembrane(post, "#fdeff4", {});
    const locks = [
      { lab: "D2", who: "DA", col: C.d2, sh: "round", fx: ["占得少", "动作副作用少"], emo: null },
      { lab: "5-HT2A", who: "5HT", col: C.ht2a, sh: "tri", fx: ["挡住", ""], emo: "?" },
      { lab: "H1", who: "His", col: C.h1, sh: "square", fx: ["嗜睡", "体重增加"], emo: "zzz" },
      { lab: "M1", who: "ACh", col: C.m1, sh: "tri", fx: ["便秘", "口干等"], emo: "sweat" },
      { lab: "α1", who: "NE", col: C.a1, sh: "square", fx: ["头晕", "起身血压低"], emo: "?" },
    ];
    const x0 = W * (n ? 0.3 : 0.28), x1 = W * (n ? 0.9 : 0.86);
    const sp = (x1 - x0) / 4, rs = Math.min(H * 0.05, sp * 0.26), cs = Math.min(H * 0.04, sp * 0.22);
    const dx = W * (n ? 0.1 : 0.1), dS = H * (n ? 0.055 : 0.065), dy = post - H * 0.01;
    chara(dx, dy, dS, O(CLZ, { eyes: "happy", mouth: "cat", arms: "point", item: "key", tag: "氯氮平" }));
    // 钥匙串：一圈金色的小钥匙
    const kx = dx + dS * 1.05, ky = dy - dS * 1.25;
    ctx.beginPath(); ctx.arc(kx, ky, dS * 0.4, 0, Math.PI * 2); ctx.strokeStyle = C.gold; ctx.lineWidth = 2.5; ctx.stroke();
    for (let k = 0; k < 6; k++) { const q = k / 6 * Math.PI + Math.PI * 0.1 + Math.sin(time * 2) * 0.1; ctx.save(); ctx.translate(kx + Math.cos(q) * dS * 0.4, ky + Math.sin(q) * dS * 0.4); ctx.rotate(q); ctx.fillStyle = "#ffd36e"; rrect(0, -dS * 0.05, dS * 0.35, dS * 0.1, 2); ctx.fill(); outline(1); ctx.stroke(); ctx.restore(); }
    let d2Site = null;
    locks.forEach((L, i) => {
      const x = x0 + i * sp, hit = prog(1 + i * 1.3, 0.9);
      // D2：只在锁孔里停一下就松开（占据率低）
      const d2Loose = i === 0 ? 0.5 + 0.5 * Math.sin(time * 1.6) : 1;
      const occ = i === 0 ? hit * (d2Loose > 0.5 ? 1 : 0) : hit;
      const r = Anima.receptor(x, post, rs, L.col, i === 0 ? 0.7 * (1 - occ) : 0.05, { shape: L.sh, label: L.lab });
      if (i === 0) d2Site = r.site;
      if (hit > 0.01) {
        const bounce = i === 0 ? (1 - d2Loose) * rs * 1.4 : 0;
        const fx = lerp(kx, r.site.x, hit), fy = lerp(ky, r.site.y - bounce, hit) - Math.sin(hit * Math.PI) * H * 0.12;
        ctx.save(); ctx.translate(fx, fy); ctx.rotate(hit < 1 ? time * 6 : 0);
        const cr = rs * 0.36;
        rrect(-cr * 1.6, -cr * 0.8, cr * 3.2, cr * 1.6, cr * 0.8); ctx.fillStyle = "#fff6d8"; ctx.fill(); outline(1.3); ctx.stroke();
        ctx.save(); rrect(-cr * 1.6, -cr * 0.8, cr * 3.2, cr * 1.6, cr * 0.8); ctx.clip(); ctx.fillStyle = "#ffd36e"; ctx.fillRect(-cr * 1.6, -cr, cr * 1.6, cr * 2); ctx.restore();
        ctx.restore();
        if (hit > 0.9 && hit < 1) sfx("咔", x + rs, r.site.y - rs, fsz(0.03, 11), C.skyDeep, -0.1, 1);
      }
      // 锁的主人
      const ox = x + rs * 1.1 + cs * 0.8, oy = post - H * 0.005;
      const react = hit > 0.9 && i > 0;
      chara(ox, oy, cs, { who: L.who, dir: -1, shadow: false, eyes: react ? (i === 2 ? "sleepy" : i === 4 ? "dizzy" : "open") : "happy", mouth: react ? "wavy" : "smile", arms: i === 0 ? "wave" : "down" });
      if (react && L.emo) emote(L.emo, ox + cs * 0.6, oy - cs * 3.4, cs * 0.55);
      // 膜下：后果
      const k = prog(1.6 + i * 1.3, 0.8);
      if (k > 0) {
        ctx.save(); ctx.globalAlpha *= k;
        const f = Math.min(fsz(0.026, 10), sp * (n ? 0.2 : 0.14));
        L.fx.forEach((l, j) => { if (l) text(l, x + rs * 0.4, post + H * (0.1 + j * 0.065), f, i === 0 ? C.mintDeep : C.ink); });
        ctx.restore();
      }
    });
    // 省略号：还有更多的锁
    if (!n) text("……", x1 + sp * 0.55, post - rs * 0.8, fsz(0.04, 12), C.soft);
    const kb = prog(8.5, 0.8);
    banner(n ? ["为什么更有效？", "还没完全弄清楚"] : ["为什么对难治者更有效？目前还没有完全弄清楚"], H * (n ? 0.86 : 0.87), kb);
    const on = cur === 2;
    say("ring", on && t > 0.5 && t < (n ? 3 : 5.5), dx, dy - dS * 3.2, W * (n ? 0.3 : 0.24), H * (n ? 0.28 : 0.27), "我的钥匙串，可长啦～", "say");
    callout("lowd2", on && t > (n ? 3 : 2) && t < (n ? 5.4 : 8.5) && !!d2Site, d2Site ? d2Site.x : 0, d2Site ? d2Site.y : 0, W * (n ? 0.55 : 0.5), H * (n ? 0.3 : 0.28), n ? "D2：只轻轻占一下" : "D2：只轻轻占一下，占据率低");
    callout("many", on && t > (n ? 7.2 : 6.5), x0 + sp * 3, post - rs * 1.7, W * (n ? 0.5 : 0.7), H * (n ? 0.3 : 0.28), n ? "钥匙多，副作用也多" : "钥匙多，副作用也跟着多");
    ctx.restore();
  }

  // ---------- 第 4 幕：定期查血 ----------
  function bloodView(a) {
    const n = nw(), t = cur === 3 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff5f5", "#fdeef3");
    Anima.bokeh(6, "#ffc2d1", 0.7, 51);
    // 血管：一条横着的粉色河道
    const vt = tsafe() + H * 0.05, vb = H * (n ? 0.52 : 0.5);
    ctx.fillStyle = "#ffe0e4"; ctx.fillRect(0, vt, W, vb - vt);
    ctx.fillStyle = "#ffd0d8"; ctx.fillRect(0, vt, W, (vb - vt) * 0.12); ctx.fillRect(0, vb - (vb - vt) * 0.12, W, (vb - vt) * 0.12);
    outline(2); ctx.beginPath(); ctx.moveTo(0, vt); ctx.lineTo(W, vt); ctx.moveTo(0, vb); ctx.lineTo(W, vb); ctx.stroke();
    // 红细胞
    for (let k = 0; k < 12; k++) {
      const x = ((time * W * 0.05 + rnd(k) * W * 1.2) % (W * 1.2)) - W * 0.1, y = lerp(vt, vb, 0.2 + rnd(k + 5) * 0.6), r = H * 0.022;
      ctx.save(); ctx.translate(x, y); ctx.rotate(time * 0.5 + k);
      ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.7, 0, 0, Math.PI * 2); ctx.fillStyle = "#ff9aa9"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(0, 0, r * 0.45, r * 0.28, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffb8c3"; ctx.fill();
      ctx.restore();
    }
    // 中性粒细胞卫兵：巡逻，打细菌；少数人会变少
    const gs = Math.min(H * 0.05, W * 0.045), gy = vb - (vb - vt) * 0.14;
    const drop = cur === 3 ? prog(4, 2.5) : 0.6;
    const GX = n ? [0.14, 0.34, 0.54, 0.74, 0.92] : [0.12, 0.28, 0.44, 0.6, 0.76, 0.9];
    let lastGuard = null;
    GX.forEach((k, i) => {
      const gone = i % 2 === 1 ? drop : 0;
      const x = W * k + Math.sin(time * 0.8 + i * 1.7) * W * 0.02;
      if (gone > 0.98) return;
      chara(x, gy, gs, O(GUARD, { eyes: gone > 0.3 ? "teary" : "happy", mouth: gone > 0.3 ? "wavy" : "smile", arms: i % 3 === 0 ? "hold" : "fist", item: i % 3 === 0 ? "shield" : null, alpha: 1 - gone, walk: time * 5 + i, dir: Math.cos(time * 0.8 + i * 1.7) > 0 ? 1 : -1, shadow: false, tag: i === 0 ? "中性粒细胞" : "" }));
      if (gone === 0) lastGuard = { x, y: gy - gs * 3.2 };
    });
    // 细菌：卫兵少了以后变得嚣张
    for (let k = 0; k < 3; k++) {
      const bx = W * (0.2 + k * 0.28) + Math.sin(time * 1.3 + k) * W * 0.02, by = lerp(vt, vb, 0.35), br = H * 0.018 * (1 + drop * 0.6);
      ctx.save(); ctx.globalAlpha *= 0.4 + drop * 0.6;
      ctx.beginPath(); ctx.ellipse(bx, by, br * 1.4, br, 0.3, 0, Math.PI * 2); ctx.fillStyle = "#b8e39a"; ctx.fill(); outline(1.2); ctx.stroke();
      face(bx, by, br * 0.8, drop > 0.5 ? 1 : 0, false);
      ctx.restore();
    }
    // 下方：查血时间轴，前几个月很密，之后变疏
    const tl = W * (n ? 0.06 : 0.08), tr = W * (n ? 0.94 : 0.62), ty = H * (n ? 0.72 : 0.74);
    const kT = cur === 3 ? prog(6.5, 1) : 1;
    ctx.save(); ctx.globalAlpha *= kT;
    outline(2.2); ctx.beginPath(); ctx.moveTo(tl, ty); ctx.lineTo(tr, ty); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(tr, ty); ctx.lineTo(tr - H * 0.02, ty - H * 0.015); ctx.moveTo(tr, ty); ctx.lineTo(tr - H * 0.02, ty + H * 0.015); ctx.stroke();
    const fs = fsz(0.024, 10);
    const drops = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.45, 0.6, 0.75, 0.9];
    const shown = cur === 3 ? Math.floor(clamp((lt - 7) / 0.25, 0, drops.length)) : drops.length;
    drops.slice(0, shown).forEach((q) => {
      const x = lerp(tl + W * 0.02, tr - W * 0.04, q), r = H * 0.014;
      ctx.beginPath(); ctx.moveTo(x, ty - r * 3); ctx.quadraticCurveTo(x + r * 1.1, ty - r * 1.2, x, ty - r * 0.6); ctx.quadraticCurveTo(x - r * 1.1, ty - r * 1.2, x, ty - r * 3);
      ctx.fillStyle = C.bad; ctx.fill(); outline(1); ctx.stroke();
    });
    ctx.fillStyle = alpha(C.warn, 0.18); rrect(tl, ty + fs * 0.6, (tr - tl) * 0.38, fs * 1.6, fs * 0.5); ctx.fill();
    text("开始的前几个月：查得最勤", tl + (tr - tl) * 0.19, ty + fs * 1.4, fs * (n ? 0.9 : 1), C.ink);
    text("之后慢慢拉长", tl + (tr - tl) * 0.72, ty + fs * 1.4, fs * (n ? 0.9 : 1), C.soft);
    ctx.restore();
    // 右下：护士和试管
    const nx = W * (n ? 0.84 : 0.8), ny = H * 0.97, ns = H * (n ? 0.055 : 0.065);
    if (!n || t > 8) {
      chara(nx, ny, ns, { who: "neuron", hair: "#8f6a4e", style: "bun", cloth: "#ffffff", hat: "cap", hatColor: "#ffd6e0", label: "+", eyes: "happy", mouth: "smile", arms: "hold", dir: -1 });
      const tx = nx - ns * 1.6, tyy = ny - ns * 2;
      rrect(tx - ns * 0.18, tyy - ns * 0.9, ns * 0.36, ns * 1.3, ns * 0.18); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.save(); rrect(tx - ns * 0.18, tyy - ns * 0.9, ns * 0.36, ns * 1.3, ns * 0.18); ctx.clip(); ctx.fillStyle = C.bad; ctx.fillRect(tx - ns * 0.2, tyy - ns * 0.2, ns * 0.4, ns); ctx.restore();
    }
    const on = cur === 3;
    callout("few", on && t > 4.5 && t < (n ? 8 : 12), W * GX[1], gy - gs * 1.5, W * (n ? 0.5 : 0.36), H * (n ? 0.64 : 0.62), n ? "少数人：粒细胞缺乏" : "少数人：中性粒细胞大大减少");
    say("patrol", on && t > 0.8 && t < 4.5 && !!lastGuard, lastGuard ? lastGuard.x : 0, lastGuard ? lastGuard.y : 0, W * (n ? 0.5 : 0.5), H * (n ? 0.62 : 0.62), "细菌别跑！", "shout");
    say("check", on && t > (n ? 8.5 : 8), nx, ny - ns * 3.2, W * (n ? 0.55 : 0.78), H * (n ? 0.62 : 0.6), n ? "发烧、喉咙痛？马上告诉医生" : "发烧、喉咙痛、口腔溃疡？马上告诉医生～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：还要留意的几件事 ----------
  function icon(kind, x, y, s) {
    if (kind === "heart") { Anima.heart(x, y, s * 0.8, C.rose); emote("sweat", x + s * 0.9, y - s * 0.6, s * 0.5); }
    else if (kind === "bolt") Anima.bolt(x, y, s * 0.9, 1);
    else if (kind === "belly") {
      ctx.beginPath(); ctx.arc(x, y, s * 0.75, 0, Math.PI * 2); ctx.fillStyle = "#ffe0c4"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.strokeStyle = "#d59a7a"; ctx.lineWidth = Math.max(1.2, s * 0.08); ctx.beginPath();
      for (let k = 0; k <= 20; k++) { const q = k / 20 * Math.PI * 4, r = s * 0.1 + k / 20 * s * 0.5; const px = x + Math.cos(q) * r, py = y + Math.sin(q) * r * 0.8; if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
      ctx.stroke();
    } else if (kind === "drool") { Anima.sweat(x, y - s * 0.6, s * 0.9); }
    else if (kind === "zzz") { emote("zzz", x - s * 0.4, y + s * 0.4, s); }
    else if (kind === "scale") {
      rrect(x - s * 0.8, y - s * 0.3, s * 1.6, s * 0.9, s * 0.2); ctx.fillStyle = "#e3f0ff"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y + s * 0.15, s * 0.3, Math.PI, 0); ctx.stroke();
      const q = Math.PI + 0.4 + Math.sin(time * 2) * 0.3; ctx.beginPath(); ctx.moveTo(x, y + s * 0.15); ctx.lineTo(x + Math.cos(q) * s * 0.3, y + s * 0.15 + Math.sin(q) * s * 0.3); ctx.strokeStyle = C.bad; ctx.stroke();
    }
  }
  function sideView(a) {
    const n = nw(), t = cur === 4 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f5effd");
    Anima.bokeh(6, "#ffd1dc", 0.7, 61);
    Anima.petals(8, 0.5, 71);
    const items = [
      { t: "心肌炎", sub: "头几周：胸闷心慌", ic: "heart", col: "#ffd0dc" },
      { t: "癫痫", sub: "可能诱发抽搐", ic: "bolt", col: "#fff1b8" },
      { t: "严重便秘", sub: "别忍：防肠梗阻", ic: "belly", col: "#ffe3d6" },
      { t: "流口水", sub: "夜里常见", ic: "drool", col: "#dcefff" },
      { t: "嗜睡", sub: "白天也犯困", ic: "zzz", col: "#e4e0ff" },
      { t: "体重和代谢", sub: "查体重血糖血脂", ic: "scale", col: "#d6f3e8" },
    ];
    const cols = 3, gap = W * 0.025, top = tsafe() + H * 0.07;
    const areaW = n ? W : W * 0.74, cw = (areaW - gap * (cols + 1)) / cols;
    const chh = n ? H * 0.24 : H * 0.33, rowGap = H * (n ? 0.055 : 0.065);
    let heartCard = null, bellyCard = null;
    items.forEach((it, i) => {
      const r = Math.floor(i / cols), c = i % cols;
      const x = gap + c * (cw + gap), y = top + r * (chh + rowGap);
      const p = prog(0.5 + i * 1.1, 0.7);
      if (p <= 0) return;
      const cx = x + cw / 2;
      ctx.save(); ctx.translate(cx, y + chh / 2); ctx.scale(0.85 + 0.15 * p, 0.85 + 0.15 * p); ctx.translate(-cx, -(y + chh / 2));
      card(x, y, cw, chh, it.t, it.col, p);
      ctx.globalAlpha *= p;
      icon(it.ic, cx, y + chh * 0.45, Math.min(chh * 0.24, cw * 0.2));
      const f = Math.min(fsz(0.024, 10), cw / (it.sub.length + 1.5));
      text(it.sub, cx, y + chh * 0.82, f, C.ink);
      ctx.restore();
      if (i === 0) heartCard = { x: cx, y: y + chh * 0.45 };
      if (i === 2) bellyCard = { x: x + cw, y: y + chh * 0.45 };
      if (i === 0 && lt > 1.8) { // 红色小印章：前几周
        const k = cur === 4 ? prog(1.8, 0.4) : 1, f = fsz(0.022, 9);
        ctx.save(); ctx.translate(x + cw * 0.78, y + chh * 0.28); ctx.rotate(-0.2); ctx.scale(1.5 - 0.5 * k, 1.5 - 0.5 * k); ctx.globalAlpha *= k;
        ctx.font = `${f}px ${Anima.ROUND}`; const tw = ctx.measureText("前几周!").width + f;
        rrect(-tw / 2, -f * 0.75, tw, f * 1.5, f * 0.3); ctx.fillStyle = "rgba(255,240,240,0.95)"; ctx.fill(); ctx.strokeStyle = C.bad; ctx.lineWidth = 1.6; ctx.stroke();
        text("前几周!", 0, 1, f, C.bad);
        ctx.restore();
      }
    });
    // 右边（手机在下面）：氯氮平访客
    const s = H * (n ? 0.045 : 0.07);
    const vx = n ? W * 0.12 : W * 0.87, vy = H * (n ? 0.92 : 0.95); // 手机：脚下的名牌要留在画面里
    if (!n || t > 7.5) chara(vx, vy, s, O(CLZ, { eyes: "happy", mouth: "smile", arms: "wave", dir: -1, tag: "氯氮平" }));
    const on = cur === 4;
    callout("early", on && n && t > 1.5 && t < 3.8 && !!heartCard, heartCard ? heartCard.x + W * 0.03 : 0, heartCard ? heartCard.y : 0, W * 0.5, H * 0.94, "前几周最要留意");
    callout("belly", on && !n && t > 3.5 && !!bellyCard, bellyCard ? bellyCard.x : 0, bellyCard ? bellyCard.y : 0, W * 0.87, H * 0.5, "便秘可能很严重，别忍着");
    say("tell", on && t > (n ? 8 : 7.5), vx, vy - s * 3.2, n ? W * 0.6 : W * 0.86, n ? H * 0.89 : H * 0.3, "有不舒服，一定告诉医生哦～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：肝脏里的 CYP1A2 工坊 ----------
  function smoke(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    for (let k = 0; k < 6; k++) {
      const t = (time * 0.25 + k / 6) % 1;
      ctx.globalAlpha = a * Math.sin(t * Math.PI) * 0.8;
      ctx.beginPath(); ctx.arc(x + Math.sin(t * 6 + k) * r * 0.4 + t * r * 1.2, y - t * r * 2, r * (0.3 + t * 0.4), 0, Math.PI * 2);
      ctx.fillStyle = "#d8d2dc"; ctx.fill(); outline(1); ctx.stroke();
    }
    ctx.restore();
  }
  function liverView(a) {
    const n = nw(), t = cur === 5 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6ee", "#fbe9e2");
    Anima.bokeh(6, "#ffd9c2", 0.7, 81);
    // 肝脏工坊的地板和传送带
    const floor = H * (n ? 0.8 : 0.78), bw0 = W * (n ? 0.04 : 0.04), bw1 = W * (n ? 0.62 : 0.6);
    ctx.fillStyle = "#f3e1d3"; ctx.fillRect(0, floor, W, H - floor);
    outline(2); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    const beltY = floor - H * 0.2;
    rrect(bw0, beltY, bw1 - bw0, H * 0.04, H * 0.02); ctx.fillStyle = "#d9c8bd"; ctx.fill(); outline(1.8); ctx.stroke();
    for (let x = bw0 + H * 0.02; x < bw1; x += H * 0.05) { ctx.beginPath(); ctx.arc(x + ((time * H * 0.05) % (H * 0.05)), beltY + H * 0.02, H * 0.008, 0, Math.PI * 2); ctx.fillStyle = "#a8948a"; ctx.fill(); }
    outline(1.6); ctx.beginPath(); ctx.moveTo(bw0 + W * 0.02, beltY + H * 0.04); ctx.lineTo(bw0 + W * 0.02, floor); ctx.moveTo(bw1 - W * 0.02, beltY + H * 0.04); ctx.lineTo(bw1 - W * 0.02, floor); ctx.stroke();
    tagBox("肝脏 · 分解工坊", (bw0 + bw1) / 2, floor + H * 0.07, fsz(0.026, 10), "#fff", C.ink, 1.2);
    // 传送带上的氯氮平小胶囊
    for (let k = 0; k < 5; k++) {
      const q = (time * 0.08 + k / 5) % 1, x = lerp(bw0, bw1, q), y = beltY - H * 0.02, cr = H * 0.016;
      ctx.save(); ctx.globalAlpha *= Math.min(1, q * 6, (1 - q) * 6);
      rrect(x - cr * 1.6, y - cr * 0.8, cr * 3.2, cr * 1.6, cr * 0.8); ctx.fillStyle = "#fff6d8"; ctx.fill(); outline(1.1); ctx.stroke();
      ctx.save(); rrect(x - cr * 1.6, y - cr * 0.8, cr * 3.2, cr * 1.6, cr * 0.8); ctx.clip(); ctx.fillStyle = "#ffd36e"; ctx.fillRect(x - cr * 1.6, y - cr, cr * 1.6, cr * 2); ctx.restore();
      ctx.restore();
    }
    // 工人：平时两位；吸烟后多来两位；戒烟后离开
    const ws = Math.min(H * 0.05, W * 0.045);
    const extra = cur === 5 ? (t < 5.5 ? prog(1.5, 1.5) : 1 - prog(6, 2)) : 0;
    const WX = [0.14, 0.3, 0.46, 0.22].map((k) => bw0 + (bw1 - bw0) * (k / 0.56) * 0.9);
    WX.forEach((x, i) => {
      const isExtra = i >= 2, al = isExtra ? extra : 1;
      if (al < 0.02) return;
      const xx = isExtra ? x + (1 - al) * W * 0.1 : x, yy = i === 3 ? beltY - H * 0.005 : floor;
      if (i === 3) return; // 位置留给画面平衡
      chara(xx, floor, ws, O(WORKER, { arms: "hold", item: "scissors", eyes: extra > 0.5 ? "sparkle" : "happy", mouth: "grin", alpha: al, walk: isExtra && al < 1 ? time * 9 : null, tag: i === 0 ? "CYP1A2" : "" }));
      if (i === 2 && al > 0.5 && t < 5.5) emote("!", xx + ws, floor - ws * 3.3, ws * 0.5, al);
    });
    // 香烟和烟雾
    const smk = cur === 5 ? (t < 5.5 ? prog(0.5, 1) : 1 - prog(5.5, 1)) : 0;
    const sx = W * (n ? 0.1 : 0.08), sy = beltY - H * 0.18;
    if (smk > 0.02) {
      ctx.save(); ctx.globalAlpha *= smk;
      rrect(sx - H * 0.05, sy, H * 0.1, H * 0.02, 3); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.fillStyle = "#e7a23a"; ctx.fillRect(sx - H * 0.05, sy + 1, H * 0.025, H * 0.02 - 2);
      ctx.fillStyle = "#ff8a5c"; ctx.beginPath(); ctx.arc(sx + H * 0.05, sy + H * 0.01, H * 0.008, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      smoke(sx + H * 0.05, sy, H * 0.05, smk);
    }
    if (cur === 5 && t > 5.5 && t < 9) { // 戒烟：掰断香烟
      const k = prog(5.5, 0.5);
      tagBox("戒烟", sx + H * 0.02, sy - H * 0.04, fsz(0.026, 10), "#e3f7ec", C.mintDeep, 1.2);
      sfx("啪", sx + H * 0.08, sy - H * 0.08, fsz(0.035, 12), C.mintDeep, -0.1, k * (1 - prog(7.5, 1)));
    }
    // 右边：血药浓度计
    const gx = W * (n ? 0.82 : 0.78), gt = tsafe() + H * 0.12, gb = floor - H * 0.02, gw = Math.max(18, W * (n ? 0.08 : 0.05));
    const yOf = (q) => gb - q * (gb - gt);
    const fs = fsz(0.024, 10);
    text("血里的浓度", gx, gt - fs * 1.4, fs, C.ink);
    rrect(gx - gw / 2, gt, gw, gb - gt, gw / 2); ctx.fillStyle = "#fff"; ctx.fill();
    ctx.save(); rrect(gx - gw / 2, gt, gw, gb - gt, gw / 2); ctx.clip();
    ctx.fillStyle = alpha(C.good, 0.2); ctx.fillRect(gx - gw / 2, yOf(0.62), gw, yOf(0.38) - yOf(0.62));
    const col = level > 0.66 ? C.warn : level < 0.34 ? C.skyDeep : C.good;
    ctx.fillStyle = mix(col, "#ffffff", 0.25); ctx.fillRect(gx - gw / 2 + 3, yOf(level), gw - 6, gb - yOf(level));
    ctx.restore();
    outline(2); rrect(gx - gw / 2, gt, gw, gb - gt, gw / 2); ctx.stroke();
    ctx.setLineDash([3, 3]); outline(1.2); ctx.beginPath(); ctx.moveTo(gx - gw, yOf(0.62)); ctx.lineTo(gx + gw, yOf(0.62)); ctx.moveTo(gx - gw, yOf(0.38)); ctx.lineTo(gx + gw, yOf(0.38)); ctx.stroke(); ctx.setLineDash([]);
    text("合适", gx + gw * 1.35, yOf(0.5), fs * 0.9, C.good, "left");
    if (level < 0.34) text("太低", gx + gw * 1.35, yOf(level), fs * 0.9, C.skyDeep, "left");
    if (level > 0.66) { text("太高", gx + gw * 1.35, yOf(level), fs * 0.9, C.warn, "left"); emote("sweat", gx + gw * 0.8, yOf(level) - fs, fs * 0.8); }
    // 最后：医生来帮忙调整
    const dk = cur === 5 ? prog(10, 1) : 0;
    const dx = W * (n ? 0.62 : 0.66), ds = H * (n ? 0.05 : 0.06);
    if (dk > 0) chara(dx, floor, ds, { who: "neuron", hair: "#6d5a45", style: "short", cloth: "#ffffff", glasses: true, eyes: "happy", mouth: "smile", arms: "point", item: null, dir: 1, alpha: dk });
    const on = cur === 5;
    callout("smoke", on && t > 2 && t < 5.8, WX[2], floor - ws * 1.8, W * (n ? 0.4 : 0.36), H * (n ? 0.3 : 0.3), n ? "吸烟：酶变多，浓度↓" : "吸烟：CYP1A2 变多，氯氮平分解得更快");
    callout("quit", on && t > 7 && t < 10.5, gx - gw / 2, yOf(level), W * (n ? 0.4 : 0.4), H * (n ? 0.3 : 0.3), n ? "戒烟后：浓度↑" : "突然戒烟：浓度升高，副作用加重");
    say("doc", on && t > 10.5, dx, floor - ds * 3.2, W * (n ? 0.45 : 0.42), H * (n ? 0.32 : 0.34), n ? "吸烟有变化，告诉我～" : "吸烟有变化就告诉我，我来帮你调整～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.warn, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) pathView(S.v0);
    if (S.v2 > 0.02) keysView(S.v2);
    if (S.v3 > 0.02) bloodView(S.v3);
    if (S.v4 > 0.02) sideView(S.v4);
    if (S.v5 > 0.02) liverView(S.v5);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e7a23a",
    titleCard: { lines: ["氯氮平", "难治的王牌"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
