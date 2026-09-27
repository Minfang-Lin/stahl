Anima.register("synapse", {
    "title": "突触邮局",
    "tag": "基础篇",
    "headline": "神经元之间怎么【传话】？",
    "lede": "大脑里的神经元不直接手拉手，它们隔着一道窄窄的缝隙，靠神经递质“送信”。跟着多巴胺快递员走一趟：电信号怎样变成化学信号，受体怎样收信，送完的信又被谁回收。",
    "summary": "动作电位、囊泡释放、受体结合、转运体回收和酶分解，以及快信号和慢信号：读懂所有精神科药物的第一课。",
    "chapter": "对应 Stahl《精神药理学精要》第 1 章 · 化学神经传递",
    "footer": "",
    "canvasLabel": "拟人化的多巴胺快递员在突触里送信的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["DA", "Glu", "GABA", "pump", "MAO"],
    "color": "#f28ca5"
  }, () => {
  const CH = [
    { title: "脑内小镇", town: 1, zoom: 0, split: 0,
      pill: ["神经元", "约 860 亿个"], pill2: ["每个神经元", "上千个突触"],
      text: "大脑里住着大约 860 亿个神经元，每一个都像小镇上的一户人家：树突是收信的天线，细胞体是家，轴突是通往别人家的长路。一户人家可以和上千户通信，它们之间的“小邮局”叫做突触。精神药理学讲的，几乎都是这些小邮局里发生的事。",
      fact: "人脑约有 860 亿个神经元，每个神经元可以有上千个突触连接",
      labels: ["soma", "dend", "axon", "syn"] },
    { title: "电信号跑到终点", town: 0, zoom: 1, split: 0,
      pill: ["信号", "电信号 ⚡"], pill2: ["传导速度", "最快约 100 m/s"],
      text: "消息在神经元内部用电信号传递，叫动作电位，它沿着轴突一路跑到末梢。末梢膜上的钙通道被电信号打开，钙离子（Ca²⁺）涌进来，就像按响了门铃：装着神经递质的小泡泡，也就是囊泡，赶紧往膜边上靠。",
      fact: "神经元内部传的是电信号，神经元之间大多靠化学信号（神经递质）",
      labels: ["ap", "ca", "ves"] },
    { title: "快递员出发", town: 0, zoom: 1, split: 0,
      pill: ["信号", "化学信号 ✉"], pill2: ["突触间隙", "20～40 纳米"],
      text: "囊泡和细胞膜融合，打开一个小口，里面的神经递质一下子被释放到突触间隙里。这一趟的快递员是多巴胺，每位都带着一封信，要送到对面的神经元。突触间隙非常窄，递质几乎一眨眼就能游过去。",
      fact: "突触间隙只有约 20～40 纳米，比头发丝细几千倍",
      labels: ["cleft"] },
    { title: "受体收信", town: 0, zoom: 1, split: 0,
      pill: ["受体", "收到啦"], pill2: ["规则", "一把钥匙开一把锁"],
      text: "对面膜上站着一排受体，它们像带锁的门，只认自己的那把钥匙：多巴胺只开多巴胺受体。钥匙一插进去，门被激活，信号就在下一个神经元里接着传下去。有的递质踩油门，比如谷氨酸让下一个神经元更兴奋；有的踩刹车，比如 GABA 让它安静下来。",
      fact: "谷氨酸是大脑里最主要的兴奋性递质，GABA 是最主要的抑制性递质",
      labels: ["rec", "post"] },
    { title: "回收和清扫", town: 0, zoom: 1, split: 0,
      pill: ["回收", "转运体"], pill2: ["分解", "单胺氧化酶"],
      text: "信送完了，递质不能一直赖在间隙里，不然信号停不下来。突触前膜上的转运体像回收员，把多巴胺、5-HT、去甲肾上腺素拉回末梢，重新装进囊泡再利用；多出来的，由单胺氧化酶（MAO）分解掉。很多精神科药物，比如抗抑郁药，瞄准的正是这个回收站。",
      fact: "乙酰胆碱是个例外：它主要在间隙里被乙酰胆碱酯酶直接剪断",
      labels: ["pump", "mao"] },
    { title: "快信号和慢信号", town: 0, zoom: 0, split: 1,
      pill: ["快信号", "几毫秒"], pill2: ["慢信号", "几秒～几天"],
      text: "受体收到信以后有两种传法。离子通道型受体像一扇快门，递质一来门就打开，离子冲进去，几毫秒就有反应。G 蛋白偶联受体则像接力传话：先交给 G 蛋白，再交给细胞里的第二信使，一路传到细胞核，甚至改变基因的表达，要花几秒到几天。有些药要吃上几周才见效，原因之一就在这里。",
      fact: "快的像按门铃，慢的像写信改家规：药效的“时间差”常常来自这里",
      labels: ["fast", "slow"] },
  ];
  const DUR = 13; // 每幕秒数

  const C = Object.assign({}, Anima.C, {
    term: "#ffd6c4", post: "#ffe0ea", cleft: "#eef7fb", chan: "#a9d8ee", rec: "#f7a8c0", pumpC: "#9fc3ea",
    soma: "#ffd3c4", dend: "#f7b9a8", axon: "#f3a996", nuc: "#e9e1ff", gprot: "#ffe7a3",
  });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0; // 本幕已经播了几秒
  const act = [0, 0, 0]; // 三个受体被激活的程度（平滑过渡）

  const S = { town: 1, zoom: 0, split: 0 };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
    for (let i = 0; i < 3; i++) act[i] = lerp(act[i], recTarget(i), 1 - Math.exp(-dt * 4));
  }
  const prog = (t0, d) => ease((lt - t0) / d);

  // ---------- 第 1 幕：神经元小镇 ----------
  function neuronShape(x, y, r, seed, mood) {
    // 树突：从细胞体伸出去的几根分叉的枝
    ctx.lineCap = "round";
    for (let k = 0; k < 5; k++) {
      const q = Math.PI * 0.55 + k * 0.45 + rnd(seed + k) * 0.2;
      const x1 = x + Math.cos(q) * r * 2.1, y1 = y + Math.sin(q) * r * 2.1 * 0.9;
      for (const [w, col] of [[r * 0.34, C.line], [r * 0.22, C.dend]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + Math.cos(q + 0.3) * r * 1.2, y + Math.sin(q + 0.3) * r * 1.2, x1, y1);
        ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(q - 0.6) * r * 0.7, y1 + Math.sin(q - 0.6) * r * 0.7);
        ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(q + 0.6) * r * 0.7, y1 + Math.sin(q + 0.6) * r * 0.7);
        ctx.stroke();
      }
    }
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
    g.addColorStop(0, "#fff0ea"); g.addColorStop(1, C.soma);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.5, r * 0.05)); ctx.stroke();
    face(x, y + r * 0.1, r * 0.5, mood);
  }
  function axonPath(a, b, r) {
    const sx = a[0] + r * 0.9, sy = a[1] + r * 0.4, ex = b[0] - r * 2.3, ey = b[1] - r * 0.2;
    const mx = (sx + ex) / 2, my = Math.min(sy, ey) - H * 0.12 + (a[1] > b[1] ? H * 0.22 : 0);
    return { sx, sy, ex, ey, mx, my, pt: (t) => ({ x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * mx + t * t * ex, y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * my + t * t * ey }) };
  }
  function townView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4f9ff", "#fdeef3");
    Anima.bokeh(8, "#ffd1dc", 0.8);
    const r = H * 0.07;
    const N = [[0.13, 0.42], [0.38, 0.72], [0.62, 0.38], [0.87, 0.68]].map((p) => [p[0] * W, p[1] * H]);
    const paths = [];
    for (let i = 0; i < N.length - 1; i++) {
      const p = axonPath(N[i], N[i + 1], r);
      paths.push(p);
      for (const [w, col] of [[r * 0.3, C.line], [r * 0.19, C.axon]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(p.sx, p.sy); ctx.quadraticCurveTo(p.mx, p.my, p.ex, p.ey); ctx.stroke();
      }
      // 轴突末梢的小鼓包，旁边是下一户人家的树突：这里就是突触
      ctx.beginPath(); ctx.arc(p.ex, p.ey, r * 0.28, 0, Math.PI * 2); ctx.fillStyle = C.term; ctx.fill(); outline(1.5); ctx.stroke();
    }
    N.forEach((n, i) => neuronShape(n[0], n[1], r, i * 10, 1));
    // 放大镜：提示下一幕要钻进这个突触里
    const syn = paths[1];
    const pulse = 1 + Math.sin(time * 3) * 0.06;
    ctx.save();
    ctx.beginPath(); ctx.arc(syn.ex, syn.ey, r * 0.75 * pulse, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 6; ctx.stroke(); ctx.strokeStyle = C.rose; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.restore();
    sparkles(syn.ex, syn.ey, r * 1.1, 4, 1, 7);
    // 沿着轴突送信的小快递员
    const who = ["DA", "5HT", "Glu", "GABA", "NE", "ACh"];
    for (let i = 0; i < 6; i++) {
      const p = paths[i % 3], t = (time * 0.07 + i * 0.37) % 1;
      const q = p.pt(t);
      chara(q.x, q.y + H * 0.005, H * 0.026, { who: who[i], walk: time * 9 + i, item: "letter", arms: "hold", eyes: i % 2 ? "happy" : "open", shadow: false });
    }
    const on = (k) => cur === 0 && CH[0].labels.indexOf(k) >= 0;
    const n1 = N[1], mid = paths[0].pt(0.5);
    callout("soma", on("soma"), n1[0], n1[1] + r * 0.4, n1[0], H * 0.93, "细胞体：神经元的家");
    callout("dend", on("dend"), N[2][0] - r * 1.6, N[2][1] + r * 1.1, N[2][0] - W * 0.02, H * 0.62, "树突：收信的天线");
    callout("axon", on("axon"), mid.x, mid.y, mid.x - W * 0.02, H * 0.2, "轴突：送信的长路");
    callout("syn", on("syn"), syn.ex, syn.ey, syn.ex + W * 0.1, H * 0.2, "突触：两户人家之间的小邮局");
    ctx.restore();
  }

  // ---------- 第 2～5 幕：突触特写 ----------
  function geo() {
    const cx = W * 0.47, tw = Math.min(W * 0.62, H * 1.15), th = H * 0.44, post = H * 0.73;
    const bot = th;
    // 末梢下边缘（和 Anima.terminal 的曲线一致），用来把东西放在膜上
    const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
    const termY = (x) => {
      const dx = Math.abs(x - cx);
      let best = bot, bd = 1e9;
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        const px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, bot + th * 0.02, bot, bot);
        if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; }
      }
      return best;
    };
    const recX = [cx - tw * 0.3, cx - tw * 0.02, cx + tw * 0.26];
    const rs = H * 0.052, cs = H * 0.045;
    const relX = [cx - tw * 0.26, cx - tw * 0.03, cx + tw * 0.2, cx + tw * 0.06];
    const T = { x: cx + tw * 0.4 }; T.y = termY(T.x) - H * 0.01;
    const ves = [[cx - tw * 0.2, bot - th * 0.34], [cx - tw * 0.02, bot - th * 0.26], [cx + tw * 0.19, bot - th * 0.38], [cx + tw * 0.04, bot - th * 0.56]];
    return { cx, tw, th, bot, post, termY, recX, rs, cs, relX, T, ves, siteY: post - rs * 1.62 };
  }
  // 受体被激活的目标值（第 3 幕陆续收信，第 4 幕全亮，第 5 幕陆续离开）
  function recTarget(i) {
    if (cur === 2) return lt > 2.4 + i * 0.45 + 1.6 ? 1 : 0;
    if (cur === 3) return 1;
    if (cur === 4) return lt < 1 + i * 0.9 ? 1 : 0;
    return 0;
  }
  // 第 i 位快递员此刻的位置和样子
  function courier(i, g) {
    const site = i < 3 ? { x: g.recX[i], y: g.siteY } : { x: g.recX[2] + g.tw * 0.17, y: g.post - H * 0.02 };
    const rel = { x: g.relX[i], y: g.termY(g.relX[i]) + g.cs * 3.3 };
    if (cur === 2) {
      const t0 = 2.4 + i * 0.45;
      if (lt < t0) return null;
      const p = ease((lt - t0) / 1.6);
      return { x: lerp(rel.x, site.x, p), y: lerp(rel.y, site.y, p) - Math.sin(p * Math.PI) * H * 0.05, jump: 0, walk: p < 1 ? time * 10 : null,
        eyes: "sparkle", arms: "hold", item: "letter", mouth: "open", a: clamp((lt - t0) * 3, 0, 1) };
    }
    if (cur === 3) {
      if (i === 3) { // 第四位没找到空着的门
        const wx = site.x + Math.sin(time * 0.8) * g.tw * 0.04;
        return { x: wx, y: site.y, walk: time * 7, eyes: "open", arms: "hold", item: "letter", mouth: "wavy", a: 1, emo: "?" };
      }
      return { x: site.x, y: site.y, jump: Math.abs(Math.sin(time * 4 + i)) * 0.25, eyes: "happy", arms: "up", item: null, mouth: "grin", a: 1 };
    }
    if (cur === 4) {
      const t0 = 1 + i * 0.9, p = ease((lt - t0) / 2.6);
      const mouth = { x: g.T.x, y: g.T.y + g.rs * 1.6 };
      const from = i === 3 ? { x: site.x, y: site.y } : site;
      if (lt < t0) return { x: from.x, y: from.y, eyes: "happy", arms: "down", a: 1 };
      if (p < 0.8) {
        const k = p / 0.8;
        return { x: lerp(from.x, mouth.x, k), y: lerp(from.y, mouth.y + g.cs * 3, k) - Math.sin(k * Math.PI) * H * 0.04, walk: time * 9, eyes: "open", arms: "down", a: 1, mouth: "smile" };
      }
      const k = (p - 0.8) / 0.2; // 钻进回收门里
      return { x: mouth.x, y: lerp(mouth.y + g.cs * 3, g.T.y - g.cs, k), eyes: "happy", arms: "up", a: 1 - k, mouth: "open" };
    }
    return null;
  }

  function synapseView(a) {
    const g = geo();
    ctx.save(); ctx.globalAlpha *= a;
    // 间隙里的液体
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(7, "#cfeaf7", 0.9, 90);
    Anima.petals(10, 0.5, 20);
    // 突触后膜
    const bindSum = (act[0] + act[1] + act[2]) / 3;
    Anima.postMembrane(g.post, C.post, { face: true, faceX: g.cx - g.tw * 0.62 < 40 ? W * 0.85 : g.cx - g.tw * 0.6, mood: bindSum > 0.4 ? 1 : 0 });
    if (bindSum > 0.3) { // 信号在下一个神经元里继续传
      const t = (time * 0.6) % 1;
      Anima.spark([[g.recX[0], g.post + H * 0.1], [g.recX[2], g.post + H * 0.12], [W + 20, g.post + H * 0.16]], t, H * 0.025, C.gold);
    }
    // 受体
    const R = g.recX.map((x, i) => Anima.receptor(x, g.post, g.rs, C.rec, act[i], { label: i === 1 ? "多巴胺受体" : null }));
    // 突触前末梢
    const T = Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    // 动作电位：沿着轴突往下跑
    let ap = null;
    if (cur === 1 || (cur === 2 && lt < 1.2)) {
      const t = cur === 1 ? ((lt * 0.45) % 1.3) : 0.95 + lt * 0.05;
      if (t <= 1) ap = Anima.spark([[g.cx, -10], [g.cx, g.th * 0.35], [g.cx - g.tw * 0.05, g.bot - g.th * 0.2]], t, H * 0.03, C.gold);
    }
    // 钙通道 + 钙离子
    const chX = g.cx - g.tw * 0.43, chY = g.termY(chX);
    ctx.save(); ctx.translate(chX, chY); ctx.rotate(0.95);
    Anima.receptor(0, 0, H * 0.03, C.chan, cur === 1 && lt > 2 ? 1 : 0, { dir: -1, shape: "square" });
    ctx.restore();
    if (cur === 1 && lt > 2) {
      for (let k = 0; k < 5; k++) {
        const t = ((lt - 2) * 0.5 + k / 5) % 1;
        const x = lerp(chX - H * 0.1, chX + H * 0.08, t), y = lerp(chY + H * 0.12, chY - H * 0.06, t);
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
        Anima.ion(x, y, H * 0.022, "Ca", "#c8f0d8");
        ctx.restore();
      }
    }
    // 囊泡：第 2 幕往膜边靠，第 3 幕融合打开
    const vr = H * 0.045;
    g.ves.forEach((v, i) => {
      let x = v[0], y = v[1], r = vr, open = 0;
      const target = { x: g.relX[i], y: g.termY(g.relX[i]) - vr * 0.8 };
      if (cur === 1) { const p = prog(3 + i * 0.4, 3); x = lerp(v[0], target.x, p); y = lerp(v[1], target.y, p); }
      if (cur === 2) { x = target.x; y = target.y; open = prog(1.6 + i * 0.45, 0.9); }
      if (cur === 3) { x = target.x; y = target.y; open = 1; }
      if (cur === 4) { const p = prog(3 + i * 0.6, 3); x = lerp(target.x, v[0], p); y = lerp(target.y, v[1], p); open = 1 - p; }
      if (open < 1) {
        ctx.save(); ctx.globalAlpha *= 1 - open;
        Anima.vesicle(x, y + open * vr * 0.6, r * (1 - open * 0.4), Anima.CAST.DA.hair, cur === 4 ? Math.round(5 * (1 - open)) : 5, i * 7);
        ctx.restore();
      }
      if (cur === 2 && open > 0.05 && open < 0.98) sfx("啵！", x + vr, y + vr * 1.6, H * 0.04, "#ff9a52", -0.15, Math.sin(open * Math.PI));
    });
    // 转运体（回收门）和回收员
    const spin = cur === 4 ? time * 3 : time * 0.4;
    Anima.transporter(g.T.x, g.T.y, g.rs, C.pumpC, spin, false);
    // 回收员站在门外，清扫员在末梢里
    const px = g.T.x + g.rs * 1.7, py = g.T.y + g.rs * 2.8;
    if (cur === 4) chara(px, py, g.cs * 1.05, { who: "pump", arms: cur === 4 ? "wave" : "down", item: "net", eyes: cur === 4 ? "happy" : "open", dir: -1, alpha: cur === 4 ? 1 : 0.9 });
    const mx = g.cx + g.tw * 0.22, my = g.bot - g.th * 0.12;
    chara(mx, my, g.cs * 0.95, { who: "MAO", arms: "hold", item: "broom", eyes: cur === 4 && lt > 5 ? "happy" : "open", mouth: "smile", dir: 1 });
    // 被分解的多余递质：几个晕乎乎的小不点
    if (cur === 4) {
      for (let k = 0; k < 3; k++) {
        const p = prog(4 + k * 1.2, 2);
        if (p <= 0 || p >= 1) continue;
        const x = mx + g.cs * (1.2 + k * 0.9), y = my - g.cs * 0.2;
        ctx.save(); ctx.globalAlpha *= 1 - p;
        chara(x, y - p * g.cs, g.cs * 0.45, { who: "DA", eyes: "dizzy", mouth: "o", shadow: false, bob: 0 });
        sparkle(x, y - g.cs * 2 - p * g.cs * 2, g.cs * 0.4, 1 - p);
        ctx.restore();
      }
    }
    // 快递员们
    const pos = [];
    for (let i = 0; i < 4; i++) {
      const c = courier(i, g);
      pos.push(c);
      if (!c || c.a < 0.02) continue;
      chara(c.x, c.y, g.cs, { who: "DA", eyes: c.eyes, arms: c.arms, item: c.item, mouth: c.mouth || "smile", walk: c.walk == null ? null : c.walk, jump: c.jump || 0, alpha: c.a, seed: i });
      if (c.emo) emote(c.emo, c.x + g.cs * 0.9, c.y - g.cs * 3.3, g.cs * 0.7);
      if (cur === 3 && i < 3) sparkles(c.x, c.y - g.cs * 1.5, g.cs * 2, 3, 0.8, i * 13);
    }

    // 标注和对话
    const on = (k) => CH[cur].labels.indexOf(k) >= 0;
    callout("ap", on("ap") && !!ap, ap ? ap.x : g.cx, ap ? ap.y : 0, g.cx + g.tw * 0.45, H * 0.14, "动作电位：跑下来的电信号");
    callout("ca", on("ca") && lt > 2, chX, chY, chX - W * 0.02, g.post + H * 0.08, "钙通道打开，Ca²⁺ 涌进来");
    callout("ves", on("ves") && lt > 3.5, g.ves[2][0], g.ves[2][1], g.cx + g.tw * 0.55, g.th * 0.45, "囊泡：装满递质的小泡泡");
    callout("cleft", on("cleft") && lt > 5, g.cx - g.tw * 0.45, (g.bot + g.post) / 2 + H * 0.02, g.cx - g.tw * 0.45, g.post + H * 0.1, "突触间隙：只有几十纳米宽");
    const nw = Anima.narrow; // 手机：两个标注在膜下同一处先后出现，不压住角色的脸
    callout("rec", on("rec") && (!nw || (lt > 0.6 && lt < 5)), g.recX[1] + g.rs * 0.6, g.post - g.rs, nw ? W * 0.33 : g.recX[1] + g.tw * 0.12, g.post + H * (nw ? 0.09 : 0.1), "受体：只认自己钥匙的门");
    callout("post", on("post") && bindSum > 0.5 && (!nw || lt >= 5.8), g.recX[2] + g.rs * 2, g.post + H * 0.12, nw ? W * 0.36 : g.recX[2] + g.tw * 0.25, g.post + H * (nw ? 0.09 : 0.2), "信号传给下一个神经元");
    callout("pump", on("pump") && lt < 6.5, g.T.x, g.T.y, g.T.x + W * 0.05, g.th * 0.3, "转运体：把递质拉回去");
    callout("mao", on("mao") && lt >= 6.5, mx, my - g.cs * 2, mx + W * 0.1, g.th * 0.3, "MAO：分解多余的单胺递质");
    const p0 = pos[0];
    say("go", cur === 2 && p0 && lt < 6, p0 ? p0.x : 0, p0 ? p0.y - g.cs * 3 : 0, p0 ? p0.x - W * 0.1 : 0, g.bot + H * 0.03, "多巴胺快递，出发～！", "shout");
    say("recv", cur === 3 && lt > 1 && lt < 7, nw ? W * 0.9 : W * 0.1, nw ? g.post + H * 0.05 : g.post + H * 0.14, nw ? W * 0.78 : W * 0.24, nw ? g.post + H * 0.16 : g.post + H * 0.14, "收到信啦！", "say");
    const p3 = pos[3];
    say("lost", cur === 3 && lt > 6 && !!p3, p3 ? p3.x : 0, p3 ? p3.y - g.cs * 3 : 0, p3 ? p3.x + W * 0.06 : 0, g.bot - H * 0.06, "门都满了，我该去哪呀？", "think");
    say("back", cur === 4 && lt > 1.2 && lt < 6, px, py - g.cs * 3.2, px + W * 0.02, py - H * 0.2, "辛苦啦，回家重新装箱～", "say");
    say("sweep", cur === 4 && lt >= 6.5, mx, my - g.cs * 3, mx - W * 0.2, my - H * 0.02, "多出来的交给我分解～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：快信号和慢信号 ----------
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 16; ctx.shadowOffsetY = 5;
    rrect(x, y, w, h, 20); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 20); ctx.stroke();
    const fs = Math.max(13, Math.min(W / 36, h * 0.075)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function nucleus(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = C.nuc; ctx.fill(); outline(2); ctx.stroke();
    // DNA 双螺旋
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r * 0.85, 0, Math.PI * 2); ctx.clip();
    for (const ph of [0, Math.PI]) {
      ctx.strokeStyle = ph ? "#8f84e0" : "#f28ca5"; ctx.lineWidth = Math.max(1.5, r * 0.08);
      ctx.beginPath();
      for (let k = 0; k <= 20; k++) { const t = k / 20, xx = x - r * 0.7 + t * r * 1.4, yy = y + Math.sin(t * Math.PI * 3 + ph + time) * r * 0.3; if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
      ctx.stroke();
    }
    ctx.restore();
  }
  function splitView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f7effd");
    Anima.petals(14, 0.7, 50);
    const top = H * 0.22, ch = H * 0.72, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "快：离子通道型受体", "#fff1b8");
    card(R.x, R.y, R.w, R.h, "慢：G 蛋白偶联受体", "#e4e0ff");
    const cs = Math.min(H * 0.045, cw * 0.075);
    // 左：门一开，离子冲进去
    const my = L.y + L.h * 0.52, lx = L.x + L.w / 2;
    ctx.save(); rrect(L.x, L.y, L.w, L.h, 20); ctx.clip();
    ctx.fillStyle = "#ffe8ef"; ctx.fillRect(L.x, my, L.w, L.h);
    ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(L.x, my); ctx.lineTo(L.x + L.w, my); ctx.stroke();
    const cyc = (time * 0.7) % 1, open = cyc < 0.55 ? 1 : 0;
    Anima.receptor(lx, my, H * 0.05, "#ffd27a", open, {});
    chara(lx, my - H * 0.082, cs, { who: "Glu", arms: open ? "up" : "down", eyes: open ? "happy" : "open", mouth: open ? "grin" : "smile" });
    for (let k = 0; k < 6; k++) {
      const t = (time * 1.6 + k / 6) % 1;
      if (!open) continue;
      const x = lx + (rnd(k + 3) - 0.5) * H * 0.04, y = lerp(my - H * 0.14, my + H * 0.2, t);
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      Anima.ion(x + (t < 0.4 ? (rnd(k) - 0.5) * H * 0.2 * (1 - t / 0.4) : 0), y, H * 0.018, "Na", "#bfe3f5");
      ctx.restore();
    }
    sfx("嗖！", lx + L.w * 0.28, my + H * 0.12, H * 0.045, "#e7a23a", -0.1, open);
    text("⏱ 几毫秒", lx, L.y + L.h - H * 0.06, Math.max(12, H * 0.04) * Anima.UI, "#c88600");
    // 右：接力传话，一直传到细胞核
    const ry = R.y + R.h * 0.34, rx = R.x + R.w * 0.3;
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 20); ctx.clip();
    ctx.fillStyle = "#f0ecff"; ctx.fillRect(R.x, ry, R.w, R.h);
    ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(R.x, ry); ctx.lineTo(R.x + R.w, ry); ctx.stroke();
    Anima.receptor(rx, ry, H * 0.045, "#b8b0f0", 0.6 + Math.sin(time * 2) * 0.3, { shape: "tri" });
    chara(rx, ry - H * 0.074, cs, { who: "5HT", arms: "hold", item: "letter", eyes: "happy" });
    // G 蛋白：圆滚滚的小搬运工
    const gx = R.x + R.w * 0.58, gy = ry + R.h * 0.14;
    ctx.beginPath(); ctx.ellipse(gx, gy, H * 0.05, H * 0.04, 0, 0, Math.PI * 2); ctx.fillStyle = C.gprot; ctx.fill(); outline(2); ctx.stroke();
    face(gx, gy, H * 0.03, 1); text("G 蛋白", gx, gy - H * 0.065, Math.max(11, H * 0.028) * Anima.UI, C.ink);
    const nw = Anima.narrow; // 手机：细胞核挪到左边，名字写在右边，底下留给“几秒～几天”
    const nx = R.x + R.w * (nw ? 0.32 : 0.5), ny = R.y + R.h * (nw ? 0.68 : 0.8), nr = Math.min(H * 0.085, R.w * 0.16);
    nucleus(nx, ny, nr);
    if (nw) {
      text("细胞核", R.x + R.w * 0.74, ny - H * 0.028, Math.max(11, H * 0.028) * Anima.UI, C.ink);
      text("（基因）", R.x + R.w * 0.74, ny + H * 0.028, Math.max(11, H * 0.028) * Anima.UI, C.ink);
    } else text("细胞核（基因）", nx, ny + nr + H * 0.035, Math.max(11, H * 0.028) * Anima.UI, C.ink);
    // 第二信使：一路小光点
    const pts = nw ? [[rx, ry + H * 0.02], [gx, gy], [nx, ny - nr]] : [[rx, ry + H * 0.02], [gx, gy], [R.x + R.w * 0.3, ry + R.h * 0.34], [nx, ny - nr]];
    ctx.save(); ctx.setLineDash([4, 6]); outline(1.4); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore();
    const t = (time * 0.18) % 1;
    Anima.spark(pts, t, H * 0.02, "#8f84e0");
    text("⏳ 几秒～几天", R.x + R.w * (nw ? 0.5 : 0.78), R.y + R.h - H * 0.06, Math.max(12, H * 0.036) * Anima.UI, "#6b61c9");
    say("fast", lt > 1 && lt < 8, lx - cs, my - H * 0.2, L.x + L.w * 0.26, L.y + L.h * 0.16, "门开啦，快冲！", "shout");
    say("slow", lt > 4, rx + cs, ry - H * 0.2, R.x + R.w * (nw ? 0.76 : 0.72), R.y + R.h * (nw ? 0.23 : 0.14), nw ? "一站一站\n慢慢传～" : "我把消息一站一站慢慢传进去～", "say");
    ctx.restore();
  }
  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.rose, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.town > 0.02) townView(S.town);
    if (S.zoom > 0.02) synapseView(S.zoom);
    if (S.split > 0.02) splitView(S.split);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f28ca5",
    titleCard: { lines: ["神经元之间", "怎么传话？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
