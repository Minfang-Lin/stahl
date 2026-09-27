Anima.register("rna-splicing", {
    "title": "同一段基因，不同的剪法",
    "tag": "基础篇",
    "headline": "同一段基因，不同的【剪法】：可变剪接和 RNA 干扰",
    "lede": "基因先被抄成一卷“原始胶片”（前体 mRNA），再剪辑成正式的版本。剪法不同，同一个基因就能做出不同的蛋白；另一些小 RNA 则专门给别的基因按下静音键。",
    "summary": "转录、剪接、可变剪接，以及小 RNA 带着 RISC 让 mRNA 被切断或不被翻译的 RNA 干扰。",
    "chapter": "对应 Stahl《精神药理学精要》第 1 章 · 关于 RNA",
    "footer": "",
    "canvasLabel": "拟人化的 RNA 聚合酶、剪接工和 Dicer 剪刀手，把基因的胶片剪成不同版本、给 mRNA 按下静音键的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["neuron", "DA"],
    "color": "#f5b2c8"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const view = (k) => { const o = Object.assign({}, V0); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "先抄一卷原始胶片",
      pill: ["基因", "约 2 万个"], pill2: ["第一稿", "前体 mRNA"],
      text: "基因写在 DNA 上，但 DNA 自己不出门。要做蛋白质，先由 RNA 聚合酶把基因抄一遍，抄出来的叫前体 mRNA，像一卷刚拍完、还没剪辑的原始胶片。胶片上有两种片段：外显子是真正要用的镜头，内含子是夹在中间、大多要剪掉的片段。人大约只有 2 万个基因，却能做出多得多的蛋白质，秘密就藏在剪辑里。",
      fact: "前体 mRNA 里既有外显子，也有内含子；内含子一般在翻译之前被剪掉" }, view("v0")),
    Object.assign({ title: "剪辑：剪接",
      pill: ["剪掉", "内含子"], pill2: ["接上", "外显子"],
      text: "剪辑这一步叫剪接。细胞核里的剪接工把内含子一段段剪下来，再把外显子按顺序接好，得到成熟的 mRNA。成熟 mRNA 离开细胞核，来到细胞质里的核糖体那儿，被一段一段读出来，翻译成蛋白质。剪成什么样，决定了最后做出来的蛋白长什么样。",
      fact: "转录：DNA → RNA；剪接：去掉内含子、接好外显子；翻译：mRNA → 蛋白质" }, view("v1")),
    Object.assign({ title: "同一卷胶片，两个版本",
      pill: ["一个基因", "多种蛋白"], pill2: ["剪法", "A 和 B"],
      text: "有趣的是，剪法不止一种。同一段前体 mRNA，这一次保留全部外显子，下一次跳过其中一段，接出来的 mRNA 就不一样，做出来的蛋白也不同，这叫可变剪接。就像同一卷胶片，可以剪成完整的正片，也可以剪成一段预告片。所以大脑里的蛋白质种类，比基因的数目丰富得多。",
      fact: "可变剪接让一个基因可以做出不止一种蛋白质" }, view("v2")),
    Object.assign({ title: "不做蛋白的小 RNA",
      pill: ["小 RNA", "不编码蛋白"], pill2: ["剪刀手", "Dicer"],
      text: "还有一些 RNA 根本不打算变成蛋白质。比如小发夹 RNA：从 DNA 抄出来以后，它自己折成一根发夹的样子，由输出蛋白从细胞核送到细胞质，再由一位叫 Dicer 的剪刀手剪成短短的小片段。这类小 RNA 包括 microRNA 和 siRNA，它们的工作不是造东西，而是管着别的基因。",
      fact: "不编码蛋白的 RNA 也很重要：有的专门调节别的基因" }, view("v3")),
    Object.assign({ title: "按下静音键：RNA 干扰",
      pill: ["翻译", "进行中"], pill2: ["结果", "照常"],
      text: "小 RNA 片段会坐进一个叫 RISC 的蛋白复合体，像拿着一张寻人照片。它靠碱基配对，找到和自己互补的那条 mRNA，一贴上去，要么把这条 mRNA 剪断，要么让核糖体读不下去。蛋白质做不出来，这个基因就像被按了静音键，这叫 RNA 干扰。所以 RNA 既能促成蛋白质的合成，也能挡住它。",
      fact: "RNA 干扰：小 RNA 带着 RISC 找到互补的 mRNA，让它被切断或不被翻译" }, view("v4")),
    Object.assign({ title: "和药物有什么关系",
      pill: ["药物靶点", "都是蛋白"], pill2: ["小 RNA", "研究中"],
      text: "药物瞄准的受体、转运体和酶，都是蛋白质。它们长成什么样、做出来多少，一部分就由剪接和小 RNA 来调节。比如多巴胺 D2 受体，就有长、短两种剪接版本。研究者还发现，一些精神疾病里某些 microRNA 的水平有变化，也在探索用 RNA 做成的药物，不过这些大多还在研究阶段。",
      fact: "基因表达不只有“开”和“关”：剪接和小 RNA 也在一点点地微调" }, view("v5")),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { e1: "#f7a8c0", e2: "#ffd27a", e3: "#a8e0c8", e4: "#a9d0f2", intr: "#d9d2d6", nuc: "#ece6ff", ribo: "#ffc9a8", risc: "#c9bff5" });
  const EX = [C.e1, C.e2, C.e3, C.e4];
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  const cs = () => H * (nar() ? 0.05 : 0.045);
  function update() { lt = Anima.sceneTime; }

  // ---------- 共用零件 ----------
  function bgA(top, bot, seed) {
    Anima.wash(top, bot);
    Anima.bokeh(7, "#ffd1dc", 0.7, seed);
    Anima.petals(8, 0.45, seed + 7);
  }
  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "rgba(255,255,255,0.94)"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return w;
  }
  // 胶片的一格：外显子是彩色的，内含子是灰色斜纹
  function seg(x, y, w, h, col, intron, lab) {
    rrect(x, y - h / 2, w, h, h * 0.18);
    ctx.fillStyle = col; ctx.fill();
    if (intron) {
      ctx.save(); rrect(x, y - h / 2, w, h, h * 0.18); ctx.clip();
      ctx.strokeStyle = "rgba(255,255,255,0.8)"; ctx.lineWidth = Math.max(1.5, h * 0.08);
      for (let k = -h; k < w; k += h * 0.35) { ctx.beginPath(); ctx.moveTo(x + k, y + h / 2); ctx.lineTo(x + k + h, y - h / 2); ctx.stroke(); }
      ctx.restore();
    }
    outline(Math.max(1.3, h * 0.05)); rrect(x, y - h / 2, w, h, h * 0.18); ctx.stroke();
    // 胶片两边的小孔
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    const hs = h * 0.12;
    for (let k = x + hs * 1.2; k < x + w - hs; k += hs * 2.4) {
      ctx.fillRect(k, y - h / 2 + hs * 0.5, hs, hs); ctx.fillRect(k, y + h / 2 - hs * 1.5, hs, hs);
    }
    if (lab) {
      const f = Math.max(10, h * 0.36) * Anima.UI;
      ctx.font = `${f}px ${Anima.ROUND}`;
      const t = ctx.measureText(lab).width < w * 0.86 ? lab : lab.replace(/\D/g, "");
      if (t && ctx.measureText(t).width < w * 0.9) text(t, x + w / 2, y + 1, f, C.ink);
    }
  }
  // 前体 mRNA 的布局：外显子 1～4，中间夹 3 段内含子（相对宽度）
  const PRE = [[0.17, 0], [0.09, -1], [0.15, 1], [0.1, -1], [0.13, 2], [0.08, -1], [0.18, 3]];
  function preLayout(x0, w) {
    const tot = PRE.reduce((a, p) => a + p[0], 0);
    let x = x0;
    return PRE.map((p) => { const o = { x, w: p[0] / tot * w, ex: p[1] }; x += o.w; return o; });
  }
  function helix(x0, x1, y, amp, a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = 60;
    for (let k = 0; k <= n; k += 3) { // 碱基对的横档
      const t = k / n, x = lerp(x0, x1, t), q = t * Math.PI * 8 + time * 0.8;
      ctx.strokeStyle = k % 2 ? "#f7b9c9" : "#bfd7f5"; ctx.lineWidth = Math.max(1.5, amp * 0.12);
      ctx.beginPath(); ctx.moveTo(x, y + Math.sin(q) * amp); ctx.lineTo(x, y - Math.sin(q) * amp); ctx.stroke();
    }
    for (const ph of [0, Math.PI]) {
      ctx.strokeStyle = ph ? "#8f84e0" : "#f28ca5"; ctx.lineWidth = Math.max(2, amp * 0.2);
      ctx.beginPath();
      for (let k = 0; k <= n; k++) { const t = k / n, x = lerp(x0, x1, t), yy = y + Math.sin(t * Math.PI * 8 + time * 0.8 + ph) * amp; if (k) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
      ctx.stroke();
    }
    ctx.restore();
  }
  // 蛋白质：一串彩色珠子折起来，带一张小脸
  function protein(x, y, r, cols, seed, mood) {
    const pts = [];
    for (let i = 0; i < cols.length * 3; i++) {
      const q = i * 1.1 + seed, rr = r * (0.35 + 0.55 * rnd(seed * 7 + i));
      pts.push([x + Math.cos(q) * rr, y + Math.sin(q) * rr * 0.8]);
    }
    outline(Math.max(1.5, r * 0.06)); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    pts.forEach((p, i) => { ctx.beginPath(); ctx.arc(p[0], p[1], r * 0.2, 0, Math.PI * 2); ctx.fillStyle = cols[Math.floor(i / 3)]; ctx.fill(); outline(1.3); ctx.stroke(); });
    ctx.beginPath(); ctx.arc(x, y, r * 0.38, 0, Math.PI * 2); ctx.fillStyle = "#fff6ef"; ctx.fill(); outline(1.5); ctx.stroke();
    face(x, y + r * 0.04, r * 0.28, mood == null ? 1 : mood);
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    const fs = fsz(0.03);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  const poly = { who: "neuron", hair: "#e58fb0", eye: "#b04f78", cloth: "#ffe0ec", hat: "beret", hatColor: "#f7a8c0", style: "bob" };
  const editor = { who: "neuron", hair: "#7fa8d8", eye: "#3f6a9a", cloth: "#dcecff", hat: "band", hatColor: "#9fc3ea", style: "short", glasses: true };

  // ---------- 第 1 幕：转录 ----------
  function transcribeView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgA("#f6f3ff", "#fff0f5", 11);
    const dnaY = H * 0.36, x0 = W * 0.08, x1 = W * 0.92, sy = H * 0.76, sh = H * 0.1, s = cs();
    helix(x0, x1, dnaY, H * 0.035, 1);
    plate("DNA：写着基因", W * 0.2, dnaY - H * 0.09, fsz(0.03));
    const p = prog(0.8, 6.5), px = lerp(x0 + W * 0.02, x1 - W * 0.02, p);
    // 胶片从聚合酶身后一点点长出来
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, p >= 1 ? W : px, H); ctx.clip();
    preLayout(x0, x1 - x0).forEach((g) => seg(g.x, sy, g.w, sh, g.ex < 0 ? C.intr : EX[g.ex], g.ex < 0, g.ex < 0 ? "" : "外显子 " + (g.ex + 1)));
    ctx.restore();
    // 从 DNA 到胶片的抄写光束
    if (p > 0 && p < 1) { glow(px, (dnaY + sy) / 2, H * 0.08, C.gold, 0.6); sparkles(px, dnaY + H * 0.05, H * 0.05, 3, 1, Math.floor(time * 3)); }
    const fy = sy - sh / 2 - H * 0.055;
    chara(px, fy, s, Object.assign({}, poly, { walk: p > 0 && p < 1 ? time * 9 : null, arms: p < 1 ? "hold" : "wave", item: p < 1 ? "book" : null, eyes: p < 1 ? "open" : "happy", tag: "RNA 聚合酶" }));
    const done = lt > 7.6;
    const L = preLayout(x0, x1 - x0);
    callout("ex", done && lt < 12, L[2].x + L[2].w / 2, sy + sh / 2, L[2].x + L[2].w / 2, H * 0.92, "外显子：要留下的镜头");
    callout("in", done && lt > 9.3, L[3].x + L[3].w / 2, sy + sh / 2, L[5].x + W * 0.02, H * 0.92, "内含子：大多要剪掉");
    say("copy", lt > 1.2 && lt < 6.8, px, fy - s * 3, clamp(px + W * 0.16, W * 0.2, W * 0.8), H * 0.55, "照着基因抄一遍～", "say");
    say("film", done, px, fy - s * 3, W * (nar() ? 0.45 : 0.6), H * 0.55, "前体 mRNA：原始胶片！", "box");
    ctx.restore();
  }

  // ---------- 第 2 幕：剪接 ----------
  function spliceView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgA("#fff5ee", "#f4f0ff", 23);
    const x0 = W * 0.08, w = W * 0.84, y = H * 0.56, h = H * 0.1, s = cs();
    const L = preLayout(x0, w);
    const exW = L.filter((g) => g.ex >= 0).reduce((q, g) => q + g.w, 0);
    const drop = prog(2.4, 3), pack = prog(5.6, 2.2);
    let px = W / 2 - exW / 2;
    const cuts = [L[1], L[3], L[5]];
    L.forEach((g) => {
      if (g.ex < 0) {
        const k = cuts.indexOf(g), d = prog(1.6 + k * 1.1, 2.2);
        if (d >= 1) return;
        ctx.save(); ctx.globalAlpha *= 1 - d;
        ctx.translate(g.x + g.w / 2, y + d * H * 0.26); ctx.rotate(d * (k - 1) * 0.5);
        seg(-g.w / 2, 0, g.w, h, C.intr, true, "");
        ctx.restore();
      } else {
        seg(lerp(g.x, px, pack), y, g.w, h, EX[g.ex], false, "外显子 " + (g.ex + 1));
        px += g.w;
      }
    });
    // 剪接工沿着胶片去剪内含子
    const k = clamp(Math.floor((lt - 1) / 1.1), 0, 2);
    const tx = lt < 5.3 ? cuts[k].x + cuts[k].w / 2 : W * 0.5;
    const ex = lerp(W * 0.12, tx, prog(0.2, 1.2));
    const fy = y - h / 2 - H * 0.055;
    chara(ex, fy, s, Object.assign({}, editor, { item: lt < 5.3 ? "scissors" : null, arms: lt < 5.3 ? "hold" : "up", eyes: lt < 5.3 ? "open" : "happy", mouth: lt < 5.3 ? "smile" : "grin", tag: "剪接工" }));
    for (let i = 0; i < 3; i++) {
      const t0 = 1.6 + i * 1.1;
      if (lt > t0 && lt < t0 + 0.8) sfx("咔嚓！", cuts[i].x + cuts[i].w / 2 + W * 0.03, y - h * 1.3, fsz(0.04), "#e7708f", -0.12, Math.sin((lt - t0) / 0.8 * Math.PI));
    }
    if (pack > 0.9) sparkles(W / 2, y - h, exW * 0.3, 4, 1, 5);
    const done = lt > 8.2;
    if (done) plate("成熟 mRNA → 出核，去翻译", W / 2, y + h * 1.25, fsz(0.03), "#fff7d6");
    callout("drop", lt > 3 && lt < 7.5, L[3].x + L[3].w / 2, y + H * 0.2, L[3].x + L[3].w / 2 + W * 0.12, H * 0.9, "剪下来的内含子");
    say("cut", lt > 5.6 && lt < 13, ex, fy - s * 3, ex - W * 0.2, fy - s * 3.6, "外显子接好啦～", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：可变剪接 ----------
  function altView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgA("#f3f9ff", "#fff1f5", 37);
    const n = nar();
    const top = Anima.topSafe() + H * 0.07, pw = W * (n ? 0.62 : 0.5), ph = H * 0.07;
    preLayout(W / 2 - pw / 2, pw).forEach((g) => seg(g.x, top, g.w, ph, g.ex < 0 ? C.intr : EX[g.ex], g.ex < 0, ""));
    const vy = H * 0.5, vh = H * 0.075, cxL = W * 0.27, cxR = W * 0.73, uw = W * (n ? 0.075 : 0.06);
    const versions = [[0, 1, 2, 3], [0, 1, 3]];
    [cxL, cxR].forEach((cx, vi) => {
      const on = prog(1 + vi * 2.2, 1.4);
      if (on <= 0) return;
      ctx.save(); ctx.globalAlpha *= on;
      // 箭头
      outline(2); ctx.setLineDash([5, 6]);
      ctx.beginPath(); ctx.moveTo(W / 2 + (vi ? 1 : -1) * pw * 0.2, top + ph); ctx.lineTo(cx, vy - vh * 1.4); ctx.stroke(); ctx.setLineDash([]);
      const list = versions[vi], tw = uw * list.length;
      list.forEach((e, j) => seg(cx - tw / 2 + j * uw, vy, uw, vh, EX[e], false, String(e + 1)));
      plate(vi ? "剪法 B：跳过 3 号" : "剪法 A：全部保留", cx, vy - vh * 1.25, fsz(0.027), vi ? "#e7f6ff" : "#fff1f5");
      const pr = prog(2 + vi * 2.2, 1.6);
      if (pr > 0) {
        ctx.save(); ctx.globalAlpha *= pr;
        protein(cx, H * 0.74, H * 0.075, list.map((e) => EX[e]), vi ? 3.3 : 1.2, 1);
        plate(vi ? "蛋白 2" : "蛋白 1", cx, H * 0.87, fsz(0.03), "#fffdf5");
        ctx.restore();
      }
      ctx.restore();
    });
    const s = cs();
    chara(W / 2, H * 0.88, s, Object.assign({}, editor, { item: "scissors", arms: lt > 6 ? "wave" : "hold", eyes: lt > 6 ? "happy" : "open", tag: "剪接工" }));
    say("alt", lt > 3 && lt < 8.5, W / 2, H * 0.88 - s * 3.1, W / 2, H * 0.6, "跳过 3 号～", "think");
    say("trailer", lt > 9 && !n, W / 2, H * 0.88 - s * 3.1, W / 2, H * 0.57, nar() ? "都来自同一卷！" : "正片和预告片，都来自同一卷！", "say");
    callout("alt", lt > 6.5, W / 2 + pw / 2, top, W * (n ? 0.86 : 0.84), top + H * 0.02, "可变剪接");
    ctx.restore();
  }

  // ---------- 第 4 幕：小发夹 RNA、输出蛋白和 Dicer ----------
  function hairpin(x, y, len, a, rot) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(rot || 0);
    const g = len * 0.12;
    ctx.lineCap = "round";
    for (const [w, col] of [[len * 0.085, C.line], [len * 0.05, "#ff9fbf"]]) {
      ctx.strokeStyle = col; ctx.lineWidth = w;
      ctx.beginPath(); ctx.moveTo(-len / 2, -g); ctx.lineTo(len / 2 - g, -g); ctx.arc(len / 2 - g, 0, g, -Math.PI / 2, Math.PI / 2); ctx.lineTo(-len / 2, g); ctx.stroke();
    }
    ctx.strokeStyle = "rgba(255,255,255,0.9)"; ctx.lineWidth = 1.5;
    for (let k = -len / 2 + g; k < len / 2 - g * 1.5; k += g * 0.8) { ctx.beginPath(); ctx.moveTo(k, -g * 0.6); ctx.lineTo(k, g * 0.6); ctx.stroke(); }
    ctx.restore();
  }
  function piece(x, y, len, rot, col) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    for (const dy of [-len * 0.13, len * 0.13]) {
      rrect(-len / 2, dy - len * 0.08, len, len * 0.16, len * 0.08); ctx.fillStyle = dy < 0 ? (col || "#ff9fbf") : "#c9bff5"; ctx.fill(); outline(1.3); ctx.stroke();
    }
    ctx.restore();
  }
  function dicerView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f0", "#f5f0ff");
    Anima.bokeh(6, "#e2dafc", 0.8, 50);
    const n = nar(), s = cs();
    const nr = H * (n ? 0.25 : 0.28), nx = Math.max(W * 0.22, nr + 12), ny = H * 0.58;
    // 细胞核，右边有个核孔
    ctx.beginPath(); ctx.arc(nx, ny, nr, 0.22, Math.PI * 2 - 0.22); ctx.fillStyle = C.nuc; ctx.fill();
    ctx.strokeStyle = C.line; ctx.lineWidth = 3; ctx.stroke();
    ctx.beginPath(); ctx.arc(nx, ny, nr - 7, 0.26, Math.PI * 2 - 0.26); ctx.strokeStyle = "rgba(143,132,224,0.5)"; ctx.lineWidth = 2; ctx.stroke();
    helix(nx - nr * 0.7, nx + nr * 0.35, ny - nr * 0.55, H * 0.02, 0.9);
    text("细胞核", nx, ny - nr * 0.8, fsz(0.03), "#6b61c9");
    text("细胞质", W * 0.88, H * 0.92, fsz(0.03), C.soft);
    // 发夹 RNA：先在核里折好，再被输出蛋白扛出核孔
    const born = prog(0.8, 1.4), carry = prog(3.2, 3.2), chop = lt > 7.4;
    const porter = { x: lerp(nx - nr * 0.1, W * 0.52, carry), y: ny + nr * 0.5 };
    const hx = porter.x, hy = porter.y - s * 3.9, hl = H * 0.13;
    if (!chop) hairpin(hx, lt < 3 ? ny + nr * 0.02 : hy, hl, born, 0);
    chara(porter.x, porter.y, s, { who: "pump", arms: carry > 0 && !chop ? "carry" : "down", walk: carry > 0 && carry < 1 ? time * 9 : null, eyes: carry >= 1 ? "happy" : "open", tag: "输出蛋白" });
    // Dicer 剪刀手
    const dx = W * (n ? 0.8 : 0.76), dy = porter.y;
    chara(dx, dy, s * 1.05, { who: "AChE", label: "Dicer", item: "scissors", arms: "hold", dir: -1, eyes: chop ? "happy" : "open", mouth: chop ? "grin" : "smile", tag: "Dicer" });
    if (lt > 7 && lt < 8.2) sfx("咔嚓咔嚓！", (hx + dx) / 2, hy - H * 0.08, fsz(0.045), "#e7708f", -0.1, Math.sin((lt - 7) / 1.2 * Math.PI));
    if (chop) {
      for (let i = 0; i < 3; i++) {
        const t = prog(7.4, 1.5);
        piece(lerp(hx, W * (0.55 + i * 0.08), t) + (n ? -W * 0.02 : 0), lerp(hy, H * (0.3 + (i % 2) * 0.06), t), H * 0.05, Math.sin(time * 2 + i) * 0.3, null);
      }
      sparkles(W * 0.63, H * 0.32, H * 0.08, 4, 1, 9);
    }
    callout("hp", lt > 1.4 && lt < 6.8, hx + hl * 0.3, lt < 3 ? ny + nr * 0.02 : hy, n ? W * 0.5 : W * 0.46, H * 0.3, "小发夹 RNA：自己折起来");
    callout("small", chop && lt > 8.6, W * 0.63, H * 0.33, W * 0.63, H * 0.2, n ? "小 RNA 片段" : "小 RNA 片段（microRNA、siRNA）");
    say("go", lt > 3.6 && lt < 6.8, porter.x, porter.y - s * 3.1, porter.x + W * 0.1, porter.y + H * 0.06, "送出核孔啰～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：RNA 干扰 ----------
  function riboShape(x, y, r, mood) {
    ctx.beginPath(); ctx.ellipse(x, y - r * 0.95, r * 0.75, r * 0.55, 0, 0, Math.PI * 2); ctx.fillStyle = mix(C.ribo, "#ffffff", 0.3); ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, y + r * 0.1, r, r * 0.62, 0, 0, Math.PI * 2); ctx.fillStyle = C.ribo; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.12, r * 0.5, mood);
  }
  function riscView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f1", "#f1f6ff");
    Anima.bokeh(6, "#ffd9c2", 0.8, 60);
    const n = nar(), s = cs();
    const my = H * 0.62, mh = H * 0.07, x0 = W * 0.06, x1 = W * 0.94, tgt = W * 0.64;
    const cutT = prog(8.2, 1.6), pair = prog(6, 1.2);
    // mRNA：被切断后两半分开、变灰
    const segs = 9, sw = (x1 - x0) / segs;
    for (let i = 0; i < segs; i++) {
      const cx = x0 + i * sw, right = cx + sw / 2 > tgt;
      const off = cutT * (right ? 1 : -1) * W * 0.03;
      ctx.save(); ctx.globalAlpha *= 1 - cutT * 0.5;
      seg(cx + off, my + cutT * H * 0.03 * (right ? 1 : -1), sw, mh, mix(i % 2 ? "#ffe3b0" : "#ffd0dc", "#dddddd", cutT), false, "");
      ctx.restore();
    }
    if (pair > 0) glow(tgt, my, H * 0.1, "#b8a8ff", pair * (1 - cutT * 0.7));
    // 核糖体沿着 mRNA 读，身后拖出一串蛋白珠子；小 RNA 贴上以后就停下
    const stopX = tgt - W * 0.14;
    const rx = Math.min(lerp(W * 0.12, W * 0.8, clamp(lt / 11, 0, 1)), stopX);
    const stopped = rx >= stopX - 1 && lt > 6;
    const nb = Math.floor((rx - W * 0.12) / (H * 0.035));
    for (let i = 0; i < nb; i++) {
      const bx = rx - i * H * 0.025, by = my - H * 0.14 - i * H * 0.02 + Math.sin(i * 1.3 + time) * H * 0.01;
      ctx.beginPath(); ctx.arc(bx, by, H * 0.014, 0, Math.PI * 2); ctx.fillStyle = ["#f7a8c0", "#ffd27a", "#a8e0c8", "#a9d0f2"][i % 4]; ctx.fill(); outline(1.1); ctx.stroke();
    }
    riboShape(rx, my - H * 0.01, H * 0.06, stopped ? -1 : 1);
    if (stopped) emote("?", rx + H * 0.07, my - H * 0.16, H * 0.04);
    // RISC 拿着小 RNA 从右边走来
    const come = prog(2.2, 3.6);
    const kx = lerp(W * 0.95, tgt + W * 0.02, come), ky = my - mh / 2 - H * 0.02;
    piece(lerp(kx - s * 0.2, tgt, pair), lerp(ky - s * 2.1, my - mh * 0.15, pair), H * 0.05, 0, "#8f84e0");
    chara(kx + (pair > 0 ? W * 0.04 * pair : 0), ky, s, { who: "neuron", hair: "#9a8fe0", eye: "#5c52c4", cloth: "#e4e0ff", hat: "cap", hatColor: C.risc, label: "RISC", style: "pony", arms: pair > 0 ? "point" : "hold", dir: -1, walk: come > 0 && come < 1 ? time * 9 : null, eyes: cutT > 0.5 ? "happy" : "open", tag: "RISC" });
    if (lt > 8.2 && lt < 9.6) sfx("咔！", tgt, my - H * 0.12, fsz(0.05), "#8f84e0", -0.1, Math.sin((lt - 8.2) / 1.4 * Math.PI));
    if (cutT > 0.9) emote("zzz", tgt - W * 0.05, my + H * 0.1, H * 0.04);
    callout("mrna", lt > 0.8 && lt < 5.5, W * 0.3, my + mh / 2, W * 0.3, H * 0.84, "mRNA：正在被翻译");
    callout("match", pair > 0.8 && lt < 9, tgt, my + mh / 2, n ? W * 0.62 : W * 0.7, H * 0.84, "碱基配对：找到互补的那条");
    callout("mute", cutT > 0.8, tgt + W * 0.04, my + mh / 2, W * 0.66, H * 0.84, "被切断 → 蛋白做不出来");
    say("wanted", lt > 2.8 && lt < 6, kx, ky - s * 3.2, n ? W * 0.72 : W * 0.78, H * 0.3, "照片上就是你！", "shout");
    ctx.restore();
  }

  // ---------- 第 6 幕：和药物的关系 ----------
  function drugView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f7effd");
    Anima.petals(12, 0.6, 80);
    const top = Anima.topSafe() + H * 0.07, gap = W * 0.025, cw = (W - gap * 4) / 3, ch = H * (nar() ? 0.76 : 0.8) - top;
    const titles = ["种类变多", "受体分版本", "小 RNA 调音量"], cols = ["#fff1b8", "#ffe0ea", "#e4e0ff"];
    const fs = fsz(nar() ? 0.022 : 0.026);
    for (let i = 0; i < 3; i++) {
      const on = prog(0.4 + i * 2.2, 1.2);
      if (on <= 0) continue;
      const x = gap + i * (cw + gap);
      ctx.save(); ctx.globalAlpha *= on;
      card(x, top, cw, ch, titles[i], cols[i]);
      const cx = x + cw / 2;
      if (i === 0) {
        const sw = cw * 0.16;
        [0, 1, 2, 3].forEach((e) => seg(cx - sw * 2 + e * sw, top + ch * 0.2, sw, H * 0.05, EX[e], false, ""));
        [[0, 1, 2, 3], [0, 1, 3], [0, 2, 3]].forEach((l, k) => protein(x + cw * (0.22 + k * 0.28), top + ch * (0.5 + (k % 2) * 0.14), Math.min(H * 0.05, cw * 0.12), l.map((e) => EX[e]), k * 2.1 + 1, 1));
        text("1 个基因", cx, top + ch * 0.33, fs, C.ink);
        text("→ 好几种蛋白", cx, top + ch * 0.86, fs, C.ink);
      } else if (i === 1) {
        const ry = top + ch * 0.68, rs = Math.min(H * 0.05, cw * 0.11);
        outline(2); ctx.beginPath(); ctx.moveTo(x + 10, ry); ctx.lineTo(x + cw - 10, ry); ctx.stroke();
        Anima.receptor(cx - cw * 0.22, ry, rs, "#f7a8c0", 0.5 + 0.4 * Math.sin(time * 2), {});
        Anima.receptor(cx + cw * 0.22, ry, rs * 0.8, "#ffc3d4", 0.5 + 0.4 * Math.sin(time * 2 + 1), {});
        text("D2 长", cx - cw * 0.22, ry + H * 0.05, fs, C.ink);
        text("D2 短", cx + cw * 0.22, ry + H * 0.05, fs, C.ink);
        chara(cx, top + ch * 0.52, Math.min(H * 0.042, cw * 0.1), { who: "DA", eyes: "sparkle", arms: "hold", item: "letter", shadow: false });
        if (!nar()) { text("同一个基因", cx, top + ch * 0.12, fs, C.ink); text("两种剪法", cx, top + ch * 0.2, fs, C.ink); }
      } else {
        // 音量推子：小 RNA 把某个蛋白的产量往下推
        const sx = cx, sy0 = top + ch * 0.24, sy1 = top + ch * 0.66, v = 0.5 + 0.3 * Math.sin(time * 0.9);
        rrect(sx - 5, sy0, 10, sy1 - sy0, 5); ctx.fillStyle = "#efeaff"; ctx.fill(); outline(1.6); ctx.stroke();
        const ky = lerp(sy1, sy0, v);
        rrect(sx - cw * 0.14, ky - H * 0.018, cw * 0.28, H * 0.036, H * 0.018); ctx.fillStyle = "#c9bff5"; ctx.fill(); outline(1.6); ctx.stroke();
        piece(sx + cw * 0.28, ky, H * 0.045, Math.sin(time) * 0.2, "#8f84e0");
        text("蛋白产量", sx, sy0 - fs * 1.1, fs, C.soft);
        text("⚠ 多在研究中", cx, top + ch * 0.86, fs, "#c0668a");
      }
      ctx.restore();
    }
    say("tgt", lt > 7.5, W * 0.5, H * 0.91, W * 0.5, H * 0.91, "药物的靶点，都是基因做出来的蛋白", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 4) { v1 = lt > 6.2 ? "停止" : "进行中"; v2 = lt > 8.5 ? "静音" : "照常"; }
    pill(14, 12, c.pill[0], v1, "#e0708f", false);
    pill(W - 14, 12, c.pill2[0], v2, "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) transcribeView(S.v0);
    if (S.v1 > 0.02) spliceView(S.v1);
    if (S.v2 > 0.02) altView(S.v2);
    if (S.v3 > 0.02) dicerView(S.v3);
    if (S.v4 > 0.02) riscView(S.v4);
    if (S.v5 > 0.02) drugView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0708f",
    titleCard: { lines: ["同一段基因", "不同的剪法"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
