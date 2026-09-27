Anima.register("signal-cascades", {
    "title": "四条信号通路：从门口到细胞核",
    "tag": "基础篇",
    "headline": "信号进门以后，走【四条路】去细胞核",
    "lede": "递质、激素和营养因子把信送到神经元，接下来信号要一路传进细胞里。Stahl 把这些路线归成四大类：G 蛋白、离子通道、激素的核受体、神经营养因子。它们起点不同，终点却都指向蛋白质和基因。",
    "summary": "四条主要信号转导通路总览：G 蛋白 → cAMP → PKA；离子通道 → Ca²⁺ → 钙调蛋白 → CaMK；激素 → 核受体 → 基因；BDNF → Trk → MAPK 激酶接力；以及为什么很多药要几周才见效。",
    "chapter": "对应 Stahl《精神药理学精要》第 1 章 · 信号转导级联",
    "footer": "",
    "canvasLabel": "四条彩色的小铁路从细胞膜通向细胞核：G 蛋白接力、钙离子叫醒钙调蛋白、激素穿过细胞膜和核受体一起进核、BDNF 让受体配对后激酶一棒一棒接力的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["DA", "Glu", "neuron"],
    "color": "#c7b8f2"
  }, () => {
  const CH = [
    { title: "四条路进细胞", v0: 1, v1: 0,
      pill: ["信号通路", "4 条"], pill2: ["终点", "细胞核"],
      text: "递质、激素和营养因子把信送到神经元门口以后，信号还要一路传进细胞里，最后常常传到细胞核、改变基因。Stahl 把这些路线归成四大类：G 蛋白偶联受体、离子通道、激素的核受体，以及神经营养因子的受体。就像四条不同的铁路，起点各不相同，终点却差不多。",
      fact: "四条主要信号转导通路：G 蛋白、离子通道、激素（核受体）、神经营养因子" },
    { title: "① G 蛋白：第二信使接力", v0: 0, v1: 1,
      pill: ["第 1 条", "G 蛋白"], pill2: ["第二信使", "cAMP"],
      text: "第一条路从 G 蛋白偶联受体出发。递质插上钥匙，受体换了形状，叫醒门里的 G 蛋白；G 蛋白再去催一台酶，大量做出 cAMP 这样的第二信使。cAMP 叫醒蛋白激酶 A（PKA），它给别的蛋白质盖上磷酸“印章”，有的消息还会走进细胞核。细节在《三种接力》里讲过。",
      fact: "G 蛋白偶联受体 → G 蛋白 → 第二信使（如 cAMP）→ 蛋白激酶（如 PKA）" },
    { title: "② 离子通道：钙离子当信使", v0: 0, v1: 1,
      pill: ["第 2 条", "离子通道"], pill2: ["信使", "Ca²⁺"],
      text: "第二条路从离子通道出发。比如谷氨酸打开 NMDA 这样的通道，钙离子（Ca²⁺）涌进细胞。钙离子本身就是信使：它先抱住一种叫钙调蛋白的小蛋白，钙调蛋白再叫醒钙调蛋白依赖性激酶（CaMK）。CaMK 也会盖磷酸印章，调节突触的强弱，还能把消息传进细胞核。",
      fact: "离子通道 → Ca²⁺ 内流 → 钙调蛋白 → 钙调蛋白依赖性激酶（CaMK）" },
    { title: "③ 激素：直接进门", v0: 0, v1: 1,
      pill: ["第 3 条", "激素"], pill2: ["受体", "在细胞里"],
      text: "第三条路最直接。雌激素、甲状腺激素、皮质醇这些激素，不在细胞表面敲门，而是穿过细胞膜，在细胞里找到自己的核受体。两个一结合，就一起走进细胞核，坐到 DNA 上，直接打开或关上一些基因。所以压力、怀孕、甲状腺问题带来的激素变化，也会影响大脑和情绪。",
      fact: "雌激素、甲状腺激素、皮质醇等结合核受体，直接调控基因的转录" },
    { title: "④ 神经营养因子：激酶接力", v0: 0, v1: 1,
      pill: ["第 4 条", "营养因子"], pill2: ["受体", "Trk"],
      text: "第四条路属于神经营养因子，比如 BDNF，它像给神经元施的肥。BDNF 结合酪氨酸激酶受体（Trk），两个受体配成一对，互相在尾巴上盖磷酸印章。印章一盖，里面的一串激酶开始接力，比如 MAPK 通路，一棒一棒传进细胞核，帮助神经元存活、长出新的连接。",
      fact: "BDNF → Trk 受体配对并磷酸化 → 激酶接力（如 MAPK 通路）→ 细胞核" },
    { title: "条条大路通细胞核", v0: 1, v1: 0,
      pill: ["汇合", "盖印章"], pill2: ["基因", "开 / 关"],
      text: "四条路起点不同，最后常常汇到同一类结果：各种激酶和磷酸酶给蛋白质盖上或撕下磷酸印章，让离子通道、受体和酶的工作状态改变；有的印章还会打开或关上基因，造出新的蛋白质。基因和蛋白质的改变需要时间，这也是很多精神科药物要吃上几周才见效的原因之一。",
      fact: "四条通路都汇集到蛋白质磷酸化和基因表达的改变，这需要时间" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { mem: "#ffd9c7", cyto: "#fff6ee", nuc: "#e9e1ff", L1: "#a99cf0", L2: "#6fc7a8", L3: "#f29cc0", L4: "#8cc66e" });
  const LC = [C.L1, C.L2, C.L3, C.L4];
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0 };
  const HOR = { hair: "#f5a3c7", eye: "#c2527f", cloth: "#ffe6f1", hat: "beret", hatColor: "#f7b8d2", style: "long", shadow: false };
  const NR = { hair: "#8e9bd6", eye: "#4d5aa0", cloth: "#e5e9fb", hat: "helmet", hatColor: "#b8c2ee", style: "short", shadow: false };
  const BDNF = { hair: "#7cc47f", eye: "#3f8a4a", cloth: "#e3f6de", hat: "band", hatColor: "#b5e3a8", style: "short", acc: "leaf", shadow: false };
  const CAM = { hair: "#7fcfc4", eye: "#2f8f86", cloth: "#dff5f1", hat: "none", style: "bob", shadow: false };
  const KIN = { hair: "#e39b5b", eye: "#a85a24", cloth: "#ffe2c6", hat: "cap", hatColor: "#f0a868", style: "short", shadow: false };

  function update() { lt = Anima.sceneTime; }
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => W / H < 1.5;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function plate(t, x, y, fs, color) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  const P = (x, y, r) => Anima.ion(x, y, r, "P", "#ffe08a");
  function bgCell(mem) {
    const g = ctx.createLinearGradient(0, 0, 0, mem);
    g.addColorStop(0, "#eef7fb"); g.addColorStop(1, "#f4f0ff");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, mem);
    ctx.fillStyle = C.cyto; ctx.fillRect(0, mem, W, H - mem);
    Anima.bokeh(5, "#d8ccf7", 0.6, 17);
    // 细胞膜：一条带小磷脂头的横带
    const th = H * 0.05;
    ctx.fillStyle = C.mem; ctx.fillRect(0, mem - th / 2, W, th);
    outline(1.8); ctx.beginPath(); ctx.moveTo(0, mem - th / 2); ctx.lineTo(W, mem - th / 2); ctx.moveTo(0, mem + th / 2); ctx.lineTo(W, mem + th / 2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    for (let x = 6; x < W; x += Math.max(8, H * 0.022)) for (const yy of [mem - th * 0.32, mem + th * 0.32]) { ctx.beginPath(); ctx.arc(x, yy, th * 0.12, 0, Math.PI * 2); ctx.fill(); }
  }
  // 细胞核：淡紫色的椭圆 + DNA + 几个基因开关
  function nucleus(x, y, rx, ry, genes, dnaY) {
    ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = C.nuc; ctx.fill(); outline(2.2); ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.ellipse(x, y, rx * 0.92, ry * 0.9, 0, 0, Math.PI * 2); ctx.clip();
    const dy = dnaY || y + ry * 0.35;
    for (const ph of [0, Math.PI]) {
      ctx.strokeStyle = ph ? "#8f84e0" : "#f28ca5"; ctx.lineWidth = Math.max(1.5, ry * 0.05);
      ctx.beginPath();
      for (let k = 0; k <= 30; k++) { const t = k / 30, xx = x - rx * 0.85 + t * rx * 1.7, yy = dy + Math.sin(t * Math.PI * 5 + ph + time) * ry * 0.1; if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
      ctx.stroke();
    }
    (genes || []).forEach((g, i) => {
      const gx = x + (i - (genes.length - 1) / 2) * rx * 0.42, gy = dy - ry * 0.02, w = rx * 0.2, h = ry * 0.16;
      glow(gx, gy, w * 1.2, C.gold, g * 0.9);
      rrect(gx - w / 2, gy - h / 2, w, h, h / 2); ctx.fillStyle = mix("#d8d2e8", "#bff0c8", g); ctx.fill(); outline(1.4); ctx.stroke();
      ctx.beginPath(); ctx.arc(gx + (g - 0.5) * w * 0.5, gy, h * 0.36, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
    });
    ctx.restore();
  }
  function lane(pts, color, w, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.setLineDash([w * 1.4, w * 0.9]);
    ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    ctx.restore();
  }

  // ---------- 第 1、6 幕：四条路总览 ----------
  function overView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    const mem = H * 0.36, fs = fsz(0.026), cs = H * 0.03, rs = H * 0.036;
    bgCell(mem);
    const NU = { x: W * 0.5, y: H * 1.02, rx: W * (n ? 0.4 : 0.34), ry: H * 0.24 };
    const all = cur === 5;
    const lit = [0, 1, 2, 3].map((i) => (all ? prog(0.3, 0.8) : prog(1 + i * 2.2, 0.8)));
    const genes = [0, 1, 2].map((i) => (all ? prog(5.5 + i * 0.8, 0.6) * (i === 1 ? 1 - prog(8.5, 0.6) : 1) : prog(9.8, 0.8) * (i !== 1 ? 1 : 0)));
    const xs = [0.14, 0.38, 0.62, 0.86].map((k) => k * W);
    const ends = [0, 1, 2, 3].map((i) => [NU.x + (i - 1.5) * NU.rx * 0.42, NU.y - NU.ry * (i === 0 || i === 3 ? 0.9 : 1)]);
    const paths = xs.map((x, i) => [[x, mem + H * 0.04], [x, H * 0.56], [lerp(x, ends[i][0], 0.6), H * 0.68], ends[i]]);
    paths.forEach((p, i) => lane(p, LC[i], H * 0.014, 0.25 + 0.75 * lit[i]));
    nucleus(NU.x, NU.y, NU.rx, NU.ry, genes, NU.y - NU.ry * 0.5);
    // 各条路的起点
    const siteY = mem - H * 0.025 - rs * 1.62;
    Anima.receptor(xs[0], mem - H * 0.025, rs, "#b8b0f0", lit[0], { shape: "tri" });
    chara(xs[0], siteY, cs, { who: "DA", eyes: "happy", arms: lit[0] > 0.5 ? "up" : "down", alpha: 0.4 + 0.6 * lit[0] });
    Anima.receptor(xs[1], mem - H * 0.025, rs, "#9fe0c8", lit[1], { shape: "square" });
    chara(xs[1], siteY, cs, { who: "Glu", eyes: "happy", arms: lit[1] > 0.5 ? "up" : "down", alpha: 0.4 + 0.6 * lit[1] });
    if (lit[1] > 0.5) for (let k = 0; k < 2; k++) { const t = (time * 0.6 + k / 2) % 1; Anima.ion(xs[1] + (k - 0.5) * rs * 0.6, lerp(mem, H * 0.5, t), H * 0.014, "Ca", "#c8f0d8"); }
    const hy = lerp(mem - H * 0.02, mem + H * 0.14, lit[2]);
    chara(xs[2], hy, cs, Object.assign({}, HOR, { eyes: "happy", arms: "wave", alpha: 0.4 + 0.6 * Math.max(lit[2], 0.2) }));
    for (const d of [-1, 1]) Anima.receptor(xs[3] + d * rs * lerp(0.9, 0.5, lit[3]), mem - H * 0.025, rs * 0.8, "#b5e3a8", lit[3], { shape: "round" });
    chara(xs[3], siteY + rs * 0.3, cs, Object.assign({}, BDNF, { eyes: "happy", arms: lit[3] > 0.5 ? "up" : "down", alpha: 0.4 + 0.6 * lit[3] }));
    // 跑动的信号
    paths.forEach((p, i) => { if (lit[i] > 0.5) Anima.spark(p, ((lt - (all ? 0 : 1 + i * 2.2)) * 0.28) % 1, H * 0.018, LC[i]); });
    const names = n ? ["① G 蛋白", "② 通道", "③ 激素", "④ 营养因子"] : ["① G 蛋白", "② 离子通道", "③ 激素", "④ 神经营养因子"];
    names.forEach((t, i) => { ctx.save(); ctx.globalAlpha *= 0.4 + 0.6 * lit[i]; plate(t, xs[i], H * (i % 2 ? 0.63 : 0.53), fs, "#fff"); ctx.restore(); });
    if (all) {
      // 磷酸印章聚到细胞核上方
      for (let k = 0; k < 6; k++) {
        const p = prog(1.5 + k * 0.4, 1);
        if (p <= 0) continue;
        const q = Math.PI * (1.15 + k * 0.14);
        P(NU.x + Math.cos(q) * NU.rx * 1.08, NU.y + Math.sin(q) * NU.ry * 1.18 + (1 - p) * H * 0.05, H * 0.018);
      }
      callout("phos", lt > 2.2 && lt < 5.8, NU.x - NU.rx * 0.5, NU.y - NU.ry * 1.05, n ? W * 0.3 : W * 0.3, H * 0.44, "蛋白质盖上磷酸印章");
      callout("gene", lt > 6 && lt < 10, NU.x - NU.rx * 0.42, NU.y - NU.ry * 0.62, n ? W * 0.62 : W * 0.66, H * 0.44, "基因打开或关上");
      say("weeks", lt > 10.2, NU.x, NU.y - NU.ry, n ? W * 0.5 : W * 0.5, H * 0.46, "这需要时间：很多药要几周才见效", "box");
    } else {
      callout("start", lt > 1 && lt < 5, xs[0] + rs * 0.6, mem, n ? W * 0.3 : W * 0.26, H * 0.44, "起点：细胞膜上的门");
      callout("end", lt > 10, NU.x, NU.y - NU.ry * 0.7, n ? W * 0.5 : W * 0.5, H * 0.44, "终点：细胞核（基因）");
      say("hor", lt > 5.6 && lt < 9.2, xs[2], hy - cs * 3.2, n ? W * 0.74 : W * 0.74, H * 0.22, "我不走门，直接穿过去～", "say");
    }
    ctx.restore();
  }

  // ---------- 第 2～5 幕：一条路放大看 ----------
  function detView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    const mem = H * (n ? 0.38 : 0.34), fs = fsz(0.026), cs = H * 0.042, rs = H * 0.046;
    bgCell(mem);
    const NU = { x: W * (n ? 0.83 : 0.84), y: H * 0.78, rx: W * (n ? 0.16 : 0.13), ry: H * 0.17 };
    const ST = (n ? [0.13, 0.33, 0.5, 0.64] : [0.14, 0.32, 0.48, 0.64]).map((k, i) => ({ x: k * W, y: [mem, H * 0.52, H * 0.62, H * 0.72][i] }));
    const act = [0, 1, 2, 3, 4].map((k) => prog(0.8 + k * 2.4, 0.6));
    const col = LC[cur - 1];
    const route = [[ST[0].x, mem + H * 0.03], [ST[1].x, ST[1].y], [ST[2].x, ST[2].y], [ST[3].x, ST[3].y], [NU.x - NU.rx * 0.2, NU.y]];
    lane(route, col, H * 0.012, 0.45);
    nucleus(NU.x, NU.y, NU.rx, NU.ry, [act[4]]);
    const sp = clamp((lt - 0.8) / 9.6, 0, 1);
    const plates = [], late = [];
    const kin = (x, y, k, name) => {
      chara(x, y + cs * 1.6, cs, Object.assign({}, KIN, { gray: 0.6 * (1 - act[k]), eyes: act[k] > 0.5 ? "happy" : "sleepy", arms: act[k] > 0.5 ? "up" : "down" }));
      if (act[k] > 0.5) P(x + cs * 1.3, y - cs * 1.2 + Math.sin(time * 5) * cs * 0.2, H * 0.016);
      plates.push([name, x, y + H * 0.1]);
    };
    if (cur === 1) {
      const r = Anima.receptor(ST[0].x, mem - H * 0.025, rs, "#b8b0f0", act[0], { shape: "tri" });
      const da = prog(0.1, 0.8);
      chara(ST[0].x, lerp(r.site.y - H * 0.12, r.site.y, da), cs, { who: "DA", eyes: "happy", arms: da >= 1 ? "up" : "down", alpha: da });
      plates.push(["受体", ST[0].x, mem + H * 0.08]);
      const g = ST[1];
      glow(g.x, g.y, H * 0.08, C.gold, act[1] * 0.8);
      ctx.beginPath(); ctx.ellipse(g.x, g.y, H * 0.045, H * 0.036, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe7a3"; ctx.fill(); outline(2); ctx.stroke(); face(g.x, g.y, H * 0.026, act[1] > 0.5 ? 1 : 0);
      plates.push(["G 蛋白", g.x, g.y + H * 0.08]);
      const m = ST[2];
      rrect(m.x - H * 0.05, m.y - H * 0.035, H * 0.1, H * 0.07, H * 0.02); ctx.fillStyle = "#ffd9a8"; ctx.fill(); outline(2); ctx.stroke(); face(m.x, m.y, H * 0.022, act[2] > 0.5 ? 1 : 0);
      if (act[2] > 0.5) for (let k = 0; k < 4; k++) { const q = time * 1.5 + k * 1.57; Anima.ion(m.x + Math.cos(q) * H * 0.08, m.y + Math.sin(q) * H * 0.06, H * 0.014, "cAMP", "#d9f3e3"); }
      plates.push(["cAMP", m.x, m.y + H * 0.1]);
      kin(ST[3].x, ST[3].y, 3, "PKA");
      late.push(() => say("key", lt > 1 && lt < 4.4, ST[0].x, mem - H * 0.16, n ? W * 0.56 : W * 0.3, n ? H * 0.22 : H * 0.16, "钥匙插好啦", "say"));
      late.push(() => callout("camp", lt > 5.8 && lt < 9, m.x + H * 0.05, m.y, n ? W * 0.56 : W * 0.6, H * 0.46, "第二信使：cAMP"));
      late.push(() => callout("pka", lt > 9.2, ST[3].x + cs, ST[3].y - cs * 2, n ? W * 0.6 : W * 0.62, H * 0.44, "激酶：盖上磷酸印章"));
    }
    if (cur === 2) {
      const r = Anima.receptor(ST[0].x, mem - H * 0.025, rs, "#9fe0c8", act[0], { shape: "square" });
      const gl = prog(0.1, 0.8);
      chara(ST[0].x, lerp(r.site.y - H * 0.12, r.site.y, gl), cs, { who: "Glu", eyes: "happy", arms: gl >= 1 ? "up" : "down", alpha: gl });
      plates.push(["离子通道", ST[0].x, mem + H * 0.08]);
      if (act[0] > 0.5) for (let k = 0; k < 4; k++) {
        const t = ((lt - 1) * 0.4 + k / 4) % 1;
        Anima.ion(lerp(ST[0].x, ST[1].x, t) + (k - 1.5) * H * 0.012, lerp(mem - H * 0.06, ST[1].y, t), H * 0.016, "Ca", "#c8f0d8");
      }
      if (act[1] > 0.5) for (let k = 0; k < 3; k++) { const q = time * 1.2 + k * 2.1; Anima.ion(ST[1].x + Math.cos(q) * H * 0.05, ST[1].y + Math.sin(q) * H * 0.04, H * 0.016, "Ca", "#c8f0d8"); }
      plates.push(["Ca²⁺", ST[1].x, ST[1].y + H * 0.09]);
      const c = ST[2];
      chara(c.x, c.y + cs * 1.6, cs, Object.assign({}, CAM, { eyes: act[2] > 0.5 ? "happy" : "open", arms: act[2] > 0.5 ? "hug" : "down" }));
      if (act[2] > 0.5) for (let k = 0; k < 4; k++) { const q = -Math.PI / 2 + (k - 1.5) * 0.6; Anima.ion(c.x + Math.cos(q) * cs * 1.9, c.y - cs * 0.3 + Math.sin(q) * cs * 1.9, H * 0.013, "Ca", "#c8f0d8"); }
      plates.push(["钙调蛋白", c.x, c.y + H * 0.1]);
      kin(ST[3].x, ST[3].y, 3, "CaMK");
      late.push(() => say("open", lt > 1 && lt < 4.4, ST[0].x, mem - H * 0.16, n ? W * 0.58 : W * 0.32, n ? H * 0.22 : H * 0.16, "开门，钙离子进来～", "say"));
      late.push(() => callout("ca", lt > 3.4 && lt < 7, ST[1].x + H * 0.04, ST[1].y, n ? W * 0.62 : W * 0.6, H * 0.44, "Ca²⁺ 本身就是信使"));
      late.push(() => callout("camk", lt > 8.2, ST[3].x + cs, ST[3].y - cs * 2, n ? W * 0.6 : W * 0.62, H * 0.44, "钙调蛋白叫醒 CaMK"));
    }
    if (cur === 3) {
      plate("雌激素 · 甲状腺激素 · 皮质醇", n ? W * 0.5 : W * 0.5, Anima.topSafe() + fs * 1.2, fs, "#ffe6f1");
      const p0 = prog(0.5, 2.5), p1 = prog(3.2, 1.6), p2 = prog(6.2, 3.6);
      const nr = ST[1];
      let hx, hy;
      if (p1 <= 0) { hx = ST[0].x; hy = lerp(mem - H * 0.12, mem + H * 0.12, p0); }
      else { hx = lerp(ST[0].x, nr.x - cs * 1.4, p1); hy = lerp(mem + H * 0.12, nr.y + cs * 1.6, p1); }
      const goal = { x: NU.x - NU.rx * 0.25, y: NU.y + cs * 1.4 };
      const pair = p2 > 0 ? { x: lerp(nr.x, goal.x, p2), y: lerp(nr.y + cs * 1.6, goal.y, p2) - Math.sin(p2 * Math.PI) * H * 0.04 } : null;
      const hp = pair ? { x: pair.x - cs * 1.4, y: pair.y } : { x: hx, y: hy };
      const rp = pair ? { x: pair.x, y: pair.y } : { x: nr.x, y: nr.y + cs * 1.6 };
      if (lt > 1.4 && lt < 2.8) sfx("穿过去～", ST[0].x + H * 0.1, mem - H * 0.04, H * 0.032, C.rose, -0.1, 1);
      chara(rp.x, rp.y, cs, Object.assign({}, NR, { eyes: p1 >= 1 ? "happy" : "open", arms: p1 >= 1 ? "hug" : "down", walk: p2 > 0 && p2 < 1 ? time * 8 : null, dir: -1 }));
      chara(hp.x, hp.y, cs, Object.assign({}, HOR, { eyes: "happy", arms: p1 >= 1 ? "hug" : "wave", walk: (p0 > 0 && p0 < 1) || (p1 > 0 && p1 < 1) || (p2 > 0 && p2 < 1) ? time * 8 : null }));
      if (p1 >= 1 && p2 <= 0) sparkles(nr.x - cs * 0.7, nr.y - cs * 1.4, cs * 2, 4, 1, 3);
      plates.push(["核受体", nr.x, nr.y + H * 0.1]);
      late.push(() => say("knock", lt > 0.4 && lt < 3, ST[0].x, mem - H * 0.12, n ? W * 0.62 : W * 0.32, n ? H * 0.3 : H * 0.2, "不用敲门～", "say"));
      late.push(() => callout("lipid", lt > 2.2 && lt < 5.8, ST[0].x, mem, n ? W * 0.6 : W * 0.46, H * 0.44, "脂溶性：直接穿过细胞膜"));
      late.push(() => callout("nr", lt > 6.4 && lt < 11, goal.x, NU.y - NU.ry * 0.7, n ? W * 0.5 : W * 0.54, H * 0.3, "和核受体一起进核，调控基因"));
    }
    if (cur === 4) {
      const pairP = prog(0.9, 1);
      for (const d of [-1, 1]) {
        const x = ST[0].x + d * rs * lerp(1.1, 0.5, pairP);
        Anima.receptor(x, mem - H * 0.025, rs * 0.85, "#b5e3a8", pairP, { shape: "round" });
        // 受体伸进细胞里的“尾巴”
        ctx.strokeStyle = C.line; ctx.lineWidth = rs * 0.34; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x, mem); ctx.lineTo(x, mem + H * 0.07); ctx.stroke();
        ctx.strokeStyle = "#b5e3a8"; ctx.lineWidth = rs * 0.2; ctx.beginPath(); ctx.moveTo(x, mem); ctx.lineTo(x, mem + H * 0.07); ctx.stroke();
        if (lt > 2.2) P(x + d * rs * 0.45, mem + H * 0.06, H * 0.015);
      }
      const bd = prog(0.1, 0.8);
      chara(ST[0].x, lerp(mem - H * 0.2, mem - H * 0.025 - rs * 1.3, bd), cs, Object.assign({}, BDNF, { eyes: "happy", arms: bd >= 1 ? "up" : "down", alpha: bd }));
      plates.push(["Trk", ST[0].x, mem + H * 0.12]);
      kin(ST[1].x, ST[1].y, 1, "Ras · Raf");
      kin(ST[2].x, ST[2].y, 2, "MEK");
      kin(ST[3].x, ST[3].y, 3, "ERK");
      if (sp > 0 && sp < 1) { const q = Anima.spark(route, sp, H * 0.001, col); P(q.x, q.y - H * 0.03, H * 0.018); }
      late.push(() => say("grow", lt > 0.8 && lt < 4.2, ST[0].x, mem - H * 0.16, n ? W * 0.58 : W * 0.34, n ? H * 0.22 : H * 0.16, "给神经元施点肥～", "say"));
      late.push(() => callout("trk", lt > 1.6 && lt < 5, ST[0].x + rs, mem + H * 0.04, n ? W * 0.6 : W * 0.5, H * 0.44, "Trk：两个配成一对"));
      late.push(() => callout("mapk", lt > 5.4 && lt < 10.5, ST[2].x + cs, ST[2].y - cs * 2, n ? W * 0.62 : W * 0.66, H * 0.44, "激酶接力（MAPK 通路）"));
    }
    plates.forEach((p) => plate(p[0], p[1], p[2], fs, "#fff"));
    late.forEach((f) => f());
    if (cur !== 4 && sp > 0 && sp < 1) Anima.spark(route, sp, H * 0.018, col);
    if (act[4] > 0.5) sparkles(NU.x, NU.y, NU.rx * 0.6, 3, act[4], 9);
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#7a6bd0", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#d0607a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) overView(S.v0);
    if (S.v1 > 0.02) detView(S.v1);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#7a6bd0",
    titleCard: { lines: ["四条信号通路", "从门口到细胞核"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
