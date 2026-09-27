Anima.register("gaba-system", {
    "title": "GABA：大脑的刹车系统",
    "tag": "心境障碍",
    "headline": "大脑的【刹车】是怎么造出来、又怎么起作用的？",
    "lede": "GABA 是大脑里最主要的抑制性递质。它竟然是用“油门”谷氨酸做成的。跟着 GABA 走一圈：制造、装箱、回收和分解，快的 GABA-A 和慢的 GABA-B 两种门，α 亚基的分工，以及像交警一样指挥节奏的中间神经元。",
    "summary": "GAD 把谷氨酸变成 GABA、VIAAT 装箱、GAT1 回收和 GABA-T 分解（噻加宾、氨己烯酸），五个亚基的 GABA-A 和 α 亚基分工，G 蛋白偶联的 GABA-B（巴氯芬、羟丁酸钠），以及中间神经元和 GABA 不足。",
    "chapter": "对应 Stahl《精神药理学精要》第 6 章 · GABA 系统",
    "footer": "作用于 GABA 系统的药物（如苯二氮䓬、助眠药、抗癫痫药）都要遵医嘱使用，不要自行加量、合用或突然停药。",
    "canvasLabel": "拟人化的谷氨酸变成 GABA、GABA 被装箱、回收和分解，以及 GABA-A、GABA-B 受体和中间神经元指挥节奏的动画",
    "regions": ["synapse", "amygdala"],
    "parts": ["mood"],
    "cast": ["GABA", "Glu", "pump", "drug", "neuron"],
    "color": "#a99ee8"
  }, () => {
  const CH = [
    { title: "用油门的原料做刹车", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["原料", "谷氨酸"], pill2: ["工匠", "GAD"],
      text: "说来有趣，大脑最主要的刹车 GABA，是用最主要的油门谷氨酸做出来的。在 GABA 神经元的末梢里，一位叫谷氨酸脱羧酶（GAD）的工匠，从谷氨酸身上剪下一小块，变成二氧化碳放走，谷氨酸就变成了 GABA。接着，囊泡上的运输门 VIAAT 把 GABA 一个个装进囊泡，等着出发。",
      fact: "GABA 由谷氨酸经谷氨酸脱羧酶（GAD）一步做成，再由 VIAAT 装进囊泡" },
    { title: "回收和分解", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["回收", "GAT1"], pill2: ["分解", "GABA-T"],
      text: "GABA 送完信，末梢上的 GABA 转运体（GAT，比如 GAT1）把它拉回来，旁边的胶质细胞也会收一些；收回来的一部分，由 GABA 转氨酶（GABA-T）分解掉。两种抗癫痫药就在这里下手：氨己烯酸不可逆地抑制 GABA-T，GABA 攒得更多；噻加宾挡住 GAT1，GABA 在突触里停留得更久。",
      fact: "氨己烯酸不可逆地抑制 GABA-T，噻加宾阻断 GAT1：两条路都让 GABA 变多" },
    { title: "GABA-A：五瓣快门", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["GABA-A", "氯离子门"], pill2: ["速度", "毫秒级"],
      text: "从上往下看，GABA-A 受体是五个亚基围成的一圈，最常见的是两个 α、两个 β 和一个 γ，中间留着一个孔。两个 GABA 分别坐进 β 和 α 之间的缝，孔就张开，氯离子流进神经元，它就更难被激发，这是毫秒级的快刹车。α 和 γ 之间还有一个座位，苯二氮䓬就坐在那里，《杏仁核的警报器》里见过它。",
      fact: "最常见的 GABA-A 由 2 个 α、2 个 β、1 个 γ 组成；GABA 结合在 β 和 α 之间" },
    { title: "α 亚基的分工", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["α1", "镇静催眠"], pill2: ["α2/α3", "抗焦虑"],
      text: "α 亚基有好几种型号，装了哪种，这扇门的用处就不太一样。一般认为，含 α1 的门主要和镇静、催眠有关；含 α2、α3 的门和抗焦虑、放松有关；含 α5 的门多在海马，和学习记忆有关。苯二氮䓬几种门都坐，所以既抗焦虑又让人犯困，还可能影响记性；唑吡坦这类助眠药更偏爱 α1，主要帮人入睡。",
      fact: "α1 偏镇静催眠，α2、α3 偏抗焦虑，α5 偏学习记忆：这是大致的分工" },
    { title: "GABA-B：慢慢来的刹车", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["GABA-B", "G 蛋白"], pill2: ["速度", "慢而持久"],
      text: "GABA 还有一种门叫 GABA-B，它不是离子通道，而是 G 蛋白偶联受体。GABA 按下它，G 蛋白先出发，再去打开钾通道，钾离子流出去，神经元安静下来；在末梢上，它还把钙通道关小，递质就少放一些。这种刹车来得慢，却更持久。巴氯芬激动 GABA-B，用来缓解肌肉痉挛；治疗发作性睡病的羟丁酸钠，也作用在这里。",
      fact: "GABA-B 通过 G 蛋白打开钾通道、关小钙通道；巴氯芬、羟丁酸钠作用于它" },
    { title: "大脑的交警", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["交警", "中间神经元"], pill2: ["GABA", "太少就乱"],
      text: "GABA 中间神经元个子不大，却像路口的交警：一位交警连着许多锥体神经元，按节奏放行、叫停，让它们的放电整齐有序，大脑的节律也靠它们维持。如果 GABA 太少，或者交警累倒了，锥体神经元就乱成一团，兴奋过了头，可能表现为焦虑、失眠，严重时更容易出现癫痫发作。",
      fact: "GABA 不足、抑制不够 → 兴奋过度：和焦虑、失眠、癫痫风险都有关系" },
  ];
  const DUR = 14;
  const C = Object.assign({}, Anima.C, { term: "#e6e0ff", post: "#ffe3ec", cleft: "#f1f6ff", door: "#c9c0f5", gb: "#b7e0c8" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };
  const GAD = { hair: "#8fc79a", eye: "#3f8a55", cloth: "#e0f3e2", hat: "kerchief", hatColor: "#a9dcb3", style: "short", label: "GAD", tag: "GAD" };
  const GABAT = { hair: "#b39ddb", eye: "#6a54a8", cloth: "#ece5fb", hat: "kerchief", hatColor: "#cbbcf0", style: "bun", label: "T", tag: "GABA-T", item: "broom" };
  const VGB = { who: "drug", label: "VGB", hatColor: "#9ad8b0", tag: "氨己烯酸" };
  const TGB = { who: "drug", label: "TGB", hatColor: "#9fc3ea", tag: "噻加宾" };
  const BZ = { who: "drug", label: "BZ", hatColor: "#9ad8b0", hatColor2: "#fff1b8" };
  const ZOL = { who: "drug", label: "Z", hatColor: "#c3a6ec", hatColor2: "#fff1b8", tag: "唑吡坦" };
  const BAC = { who: "drug", label: "BAC", hatColor: "#ffb38a", tag: "巴氯芬" };
  const act = [0, 0, 0];
  function update(dt) {
    lt = Anima.sceneTime;
    const k = 1 - Math.exp(-dt * 5);
    for (let i = 0; i < 3; i++) act[i] = lerp(act[i], recAim[i] || 0, k);
  }
  const recAim = [0, 0, 0];
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fs = (k) => Math.max(10, H * (k || 0.026)) * Anima.UI;
  function chip(t, x, y, col, bg) {
    const f = fs(0.036);
    ctx.font = `${f}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + f * 1.1;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - f * 0.75, w, f * 1.5, f * 0.75); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, f, col || C.ink);
  }
  function bgWash(top, mid, bot) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, top); g.addColorStop(0.5, mid); g.addColorStop(1, bot);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }
  // 从 (a) 走到 (b)：返回位置和是否到达
  function walkPos(a, b, t0, d) {
    const p = prog(t0, d);
    return { x: lerp(a.x, b.x, p), y: lerp(a.y, b.y, p) - Math.sin(p * Math.PI) * H * 0.03, p, moving: p > 0 && p < 1 };
  }

  // ---------- 第 1～2 幕：GABA 末梢 ----------
  function geoA() {
    const n = N(), cx = W * (n ? 0.5 : 0.46), tw = Math.min(W * (n ? 0.9 : 0.6), H * (n ? 1.08 : 1.1)), th = H * (n ? 0.56 : 0.58), bot = th, mem = H * 0.86;
    const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
    const termY = (x) => {
      const dx = Math.abs(x - cx); let best = bot, bd = 1e9;
      for (let i = 0; i <= 30; i++) {
        const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, bot + th * 0.02, bot, bot);
        if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; }
      }
      return best;
    };
    const cs = H * (n ? 0.046 : 0.046), rs = H * (n ? 0.05 : 0.048);
    const gatX = cx + tw * 0.38;
    return { n, cx, tw, th, bot, mem, termY, cs, rs, foot: bot - th * 0.09,
      gad: { x: cx - tw * 0.26, y: bot - th * 0.09 }, ves: { x: cx + tw * 0.1, y: H * 0.26, r: H * 0.065 },
      rel: { x: cx - tw * 0.06, y: bot - H * 0.05 }, recX: [cx - tw * 0.32, cx - tw * 0.02, cx + tw * 0.26],
      gat: { x: gatX, y: termY(gatX) - H * 0.012 }, gt: { x: cx + tw * 0.22, y: bot - th * 0.07 } };
  }
  function viewA(a) {
    const g = geoA(), n = g.n, cs = g.cs, rs = g.rs;
    ctx.save(); ctx.globalAlpha *= a;
    bgWash("#f7f3ff", C.cleft, "#fff2f6");
    Anima.bokeh(6, "#dcd4fb", 0.8, 21);
    Anima.petals(7, 0.4, 5);
    Anima.postMembrane(g.mem, C.post, {});
    const R = g.recX.map((x, i) => Anima.receptor(x, g.mem, rs, C.door, act[i], {}));
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    const c = cur;
    // 囊泡和 VIAAT
    const vd = c === 0 ? 3 + Math.min(4, Math.floor(Math.max(0, lt - 0.8) / 6.5 + 0.2)) : (lt > 7 ? 8 : 5);
    Anima.vesicle(g.ves.x, g.ves.y, g.ves.r, "#8f86e2", vd, 3);
    const va = { x: g.ves.x, y: g.ves.y + g.ves.r * 1.05 };
    Anima.transporter(va.x, va.y, g.ves.r * 0.36, "#d8f0c8", time * (c === 0 ? 2 : 0.4), false);
    if (c === 1 && lt > 7) sparkles(g.ves.x, g.ves.y, g.ves.r * 1.4, 4, prog(7, 1), 4);
    Anima.vesicle(g.rel.x, g.rel.y, H * 0.036, "#8f86e2", 4, 9);
    // 转运体 GAT1
    const blocked = c === 1 && lt > 10.2;
    Anima.transporter(g.gat.x, g.gat.y, rs * 0.95, "#9fc3ea", c === 1 && !blocked ? time * 3 : time * 0.3, blocked);
    let who = [];
    if (c === 0) {
      // 谷氨酸进门 → GAD 剪一刀 → 变成 GABA → 走到囊泡下面 → 被 VIAAT 装进去
      chara(g.gad.x, g.gad.y, cs, Object.assign({}, GAD, { item: "scissors", arms: "hold", eyes: "happy", dir: 1 }));
      const t = lt - 0.8;
      if (t > 0) {
        const u = t % 6.5, top = { x: g.cx, y: H * 0.15 }, at = { x: g.gad.x + cs * 1.9, y: g.foot }, va2 = { x: g.ves.x, y: g.foot };
        let x, y, morph = 0, walk = null, scale = 1;
        if (u < 2) { const p = ease(u / 2); x = lerp(top.x, at.x, p); y = lerp(top.y, at.y, p); walk = time * 9; }
        else if (u < 3.2) { x = at.x; y = at.y; morph = clamp((u - 2.4) / 0.8, 0, 1); }
        else if (u < 5.2) { const p = ease((u - 3.2) / 2); x = lerp(at.x, va2.x, p); y = at.y; morph = 1; walk = time * 9; }
        else { const p = ease((u - 5.2) / 0.9); x = va2.x; y = lerp(va2.y, va.y + cs * 0.4, p); morph = 1; scale = 1 - p * 0.85; }
        if (morph < 1) chara(x, y, cs, { who: "Glu", alpha: 1 - morph, walk, eyes: u >= 2 ? "closed" : "open", arms: "down", dir: -1 });
        if (morph > 0) chara(x, y, cs * scale, { who: "GABA", alpha: morph, walk, eyes: "happy", arms: u > 5.2 ? "up" : "down", dir: 1 });
        if (u > 2.3 && u < 3.3) sfx("咔嚓！", at.x - cs * 0.3, at.y - cs * 3.6, H * 0.034, "#4fb893", -0.12, Math.sin((u - 2.3) * Math.PI));
        if (u > 2.6 && u < 4.6) { const k = (u - 2.6) / 2; ctx.save(); ctx.globalAlpha *= 1 - k; Anima.ion(at.x - cs * 0.6 - k * cs * 2, at.y - cs * 2.5 - k * H * 0.12, H * 0.022, "CO₂", "#eef2f5"); ctx.restore(); }
        if (morph > 0.5 && u < 3.4) sparkles(x, y - cs * 1.5, cs * 2, 4, 1, 5);
        who.push({ x, y });
      }
    }
    let vg = null, tg = null, gtGray = 0;
    if (c === 1) {
      // 维加巴特林：从上面进来抱住 GABA-T
      const vp = walkPos({ x: g.cx, y: H * 0.12 }, { x: g.gt.x - cs * (n ? 4.8 : 2.9), y: g.gt.y }, 4.5, 2);
      if (vp.p > 0) { vg = vp; chara(vp.x, vp.y, cs, Object.assign({}, VGB, { walk: vp.moving ? time * 9 : null, arms: vp.p >= 1 ? "hug" : "wave", eyes: "happy", dir: 1 })); }
      gtGray = prog(6.3, 0.8) * 0.6;
      chara(g.gt.x, g.gt.y, cs, Object.assign({}, GABAT, { gray: gtGray, eyes: gtGray > 0.3 ? "sleepy" : "open", arms: "hold", dir: -1 }));
      const tp = walkPos({ x: W + cs * 2, y: g.mem - H * 0.03 }, { x: g.gat.x + rs * 0.9, y: g.gat.y + rs + cs * 3.3 }, 8.8, 1.4);
      if (tp.p > 0) { tg = tp; chara(tp.x, tp.y, cs, Object.assign({}, TGB, { walk: tp.moving ? time * 9 : null, arms: tp.p >= 1 ? "up" : "wave", eyes: tp.p >= 1 ? "happy" : "open", dir: -1 })); }
      // 间隙里的 GABA：释放 → 受体 → 回收门 → 末梢里（一部分被分解）
      const aim = [0, 0, 0], bw = prog(10.2, 1.2), cs2 = cs * 0.72;
      for (let k = 0; k < 4; k++) {
        const t = lt - 0.3 - k; if (t < 0) continue;
        const u = (t % 4) / 4, ri = k % 3, site = { x: g.recX[ri] + (k === 3 ? rs * 1.5 : 0), y: g.mem - rs * (k === 3 ? 0 : 1.62) };
        const from = { x: g.rel.x + (k - 1.5) * cs * 0.4, y: g.bot + cs2 * 3.4 }, mouth = { x: g.gat.x, y: g.gat.y + rs + cs2 * 3.2 }, inn = { x: g.gt.x + cs * 1.2, y: g.gt.y };
        let x, y, al = 1, eyes = "happy", sc = 1;
        if (u < 0.25) { const p = ease(u / 0.25); x = lerp(from.x, site.x, p); y = lerp(from.y, site.y, p); al = clamp(u * 12, 0, 1); }
        else if (u < 0.5) { x = site.x; y = site.y; if (k < 3) aim[ri] = 1; }
        else if (u < 0.8) { const p = ease((u - 0.5) / 0.3); x = lerp(site.x, mouth.x, p); y = lerp(site.y, mouth.y, p) - Math.sin(p * Math.PI) * H * 0.04; }
        else { const p = ease((u - 0.8) / 0.2); x = lerp(mouth.x, inn.x, p); y = lerp(mouth.y, inn.y, p); sc = 1 - p * 0.4; al = 1 - p;
          if (k % 2 === 0 && gtGray < 0.2) eyes = "dizzy"; }
        // 回收门被挡住以后：大家都留在门口
        if (bw > 0) { x = lerp(x, site.x + Math.sin(time * 1.3 + k) * rs * 0.3, bw); y = lerp(y, site.y, bw); al = lerp(al, 1, bw); sc = lerp(sc, 1, bw); eyes = bw > 0.5 ? "happy" : eyes; if (k < 3) aim[ri] = Math.max(aim[ri], bw); }
        if (al > 0.03) chara(x, y, cs2 * sc, { who: "GABA", alpha: al, eyes, arms: "down", shadow: false, seed: k });
        if (k === 0 && u < 0.08 && bw < 0.5) sfx("啵！", g.rel.x + cs, g.rel.y + H * 0.06, H * 0.03, "#8f84e0", -0.1, 1 - u * 12);
      }
      for (let i = 0; i < 3; i++) recAim[i] = aim[i];
    } else for (let i = 0; i < 3; i++) recAim[i] = 0;

    // ---------- 标注和气泡 ----------
    const below = g.mem + H * 0.05;
    if (c === 0) {
      callout("a0", lt > 3, g.gad.x, g.gad.y - cs * 2.2, n ? W * 0.28 : g.gad.x - W * 0.04, below, "GAD：谷氨酸 → GABA");
      callout("a1", lt > 6.5, va.x + g.ves.r * 0.3, va.y, n ? W * 0.72 : g.ves.x + W * 0.16, n ? below + H * 0.1 : below, "VIAAT：装进囊泡");
      say("a2", lt > 9.5, g.gad.x, g.gad.y - cs * 3.2, n ? W * 0.3 : W * 0.1, n ? H * 0.27 : H * 0.34, "剪掉一小块，就变刹车！", "say");
    }
    if (c === 1) {
      callout("b0", win(1, 4.5), g.gat.x + rs * 0.6, g.gat.y, n ? W * 0.7 : g.gat.x + W * 0.1, n ? below + H * 0.05 : H * 0.3, "GAT1：回收 GABA");
      callout("b1", win(1.8, 4.5), g.gt.x, g.gt.y - cs * 2.4, n ? W * 0.3 : W * 0.12, n ? below + H * 0.05 : H * 0.18, "GABA-T：分解 GABA");
      callout("b2", win(7.2, 10), g.ves.x - g.ves.r, g.ves.y, n ? W * 0.3 : W * 0.14, n ? H * 0.62 : H * 0.34, "GABA 攒得更多");
      callout("b3", lt > 11.8, g.recX[1], g.mem - rs * 1.2, n ? W * 0.4 : g.recX[1] - W * 0.05, below, "GABA 停留得更久");
      if (vg) say("b4", win(6.6, 9.5), vg.x, vg.y - cs * 3.2, n ? W * 0.3 : g.cx - g.tw * 0.62, n ? H * 0.55 : H * 0.5, "清扫员先歇一歇～", "say");
      if (tg) say("b5", lt > 10.6, tg.x - cs * 0.5, tg.y - cs * 2, n ? W * 0.24 : W * 0.86, n ? H * 0.3 : H * 0.66, "回收门，暂停！", n ? "say" : "shout");
    }
    ctx.restore();
  }

  // ---------- 第 3 幕：从上往下看 GABA-A ----------
  function viewB(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5f2ff", "#fff3f6");
    Anima.bokeh(6, "#d8d0fa", 0.8, 33);
    const cx = W * (n ? 0.38 : 0.36), cy = H * (n ? 0.6 : 0.58), R = H * (n ? 0.2 : 0.24), cs = H * (n ? 0.042 : 0.038);
    const open = prog(4.2, 1.2), D = R * (0.7 + open * 0.07), sr = R * 0.42;
    const names = ["γ", "β", "α", "β", "α"], cols = { "α": "#cfc6f7", "β": "#bfe3f5", "γ": "#ffd9c2" };
    // 膜（从上往下看是一片）
    ctx.beginPath(); ctx.ellipse(cx, cy, R * 1.75, R * 1.5, 0, 0, Math.PI * 2); ctx.fillStyle = Anima.alpha("#ffd6e2", 0.55); ctx.fill();
    ctx.save(); ctx.setLineDash([4, 6]); outline(1.2); ctx.stroke(); ctx.restore();
    const ang = (i) => -Math.PI / 2 + i * Math.PI * 2 / 5;
    const P = (i, d) => ({ x: cx + Math.cos(ang(i)) * d, y: cy + Math.sin(ang(i)) * d });
    // 孔
    const pr = R * (0.08 + 0.17 * open);
    glow(cx, cy, pr * 2.4, C.gold, open * 0.7);
    for (let i = 0; i < 5; i++) {
      const p = P(i, D);
      ctx.beginPath(); ctx.arc(p.x, p.y, sr, 0, Math.PI * 2); ctx.fillStyle = cols[names[i]]; ctx.fill(); outline(2); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.beginPath(); ctx.ellipse(p.x - sr * 0.35, p.y - sr * 0.4, sr * 0.25, sr * 0.14, -0.6, 0, Math.PI * 2); ctx.fill();
      text(names[i], p.x, p.y + 1, sr * 0.8, C.ink, "center", Anima.SANS);
    }
    ctx.beginPath(); ctx.arc(cx, cy, pr, 0, Math.PI * 2); ctx.fillStyle = "#6b61c9"; ctx.fill(); outline(1.5); ctx.stroke();
    // 氯离子掉进孔里
    if (open > 0.3) for (let k = 0; k < 7; k++) {
      const t = (time * 0.45 + k / 7) % 1, q = k * 2.4 + 0.5, d = lerp(R * 1.6, 0, ease(t));
      ctx.save(); ctx.globalAlpha *= open * (t < 0.85 ? 1 : (1 - t) / 0.15);
      Anima.ion(cx + Math.cos(q) * d, cy + Math.sin(q) * d, H * 0.022 * (1 - t * 0.5), "Cl", "#bfe8d6");
      ctx.restore();
    }
    // 两个 GABA 坐进 β 和 α 之间，苯二氮䓬座位在 α 和 γ 之间
    const mid = (i) => -Math.PI / 2 + (i + 0.5) * Math.PI * 2 / 5;
    const site = (i, d) => ({ x: cx + Math.cos(mid(i)) * d, y: cy + Math.sin(mid(i)) * d });
    const bzs = site(4, D * 1.05);
    ctx.save(); ctx.translate(bzs.x, bzs.y); ctx.rotate(Math.PI / 4);
    ctx.fillStyle = "#fff1b8"; ctx.fillRect(-sr * 0.2, -sr * 0.2, sr * 0.4, sr * 0.4); outline(1.4); ctx.strokeRect(-sr * 0.2, -sr * 0.2, sr * 0.4, sr * 0.4);
    ctx.restore();
    const gab = [];
    [1, 3].forEach((i, j) => {
      const s = site(i, D * 1.42), st = { x: j ? -cs * 2 : W * (n ? 0.78 : 0.7), y: s.y + cs * 1.5 };
      const wp = walkPos(st, { x: s.x, y: s.y + cs * 1.5 }, 1.2 + j * 0.5, 2.2);
      if (wp.p > 0) { chara(wp.x, wp.y, cs, { who: "GABA", walk: wp.moving ? time * 9 : null, arms: wp.p >= 1 ? "hug" : "wave", eyes: wp.p >= 1 ? "happy" : "open", dir: s.x > st.x ? 1 : -1 }); gab.push(wp); }
    });
    if (open > 0.05 && open < 0.95) sfx("咔！", cx + R * 0.3, cy - R * 1.25, H * 0.036, "#6b61c9", -0.1, 1);
    // 右边：神经元兴奋度
    const mx = W * (n ? 0.85 : 0.78), y0 = H * (n ? 0.3 : 0.28), y1 = H * 0.68, bw = W * (n ? 0.06 : 0.035);
    const lvl = lerp(0.85, 0.3, prog(5.5, 3));
    text("兴奋度", mx, y0 - fs(0.03), fs(0.028), C.ink);
    rrect(mx - bw / 2, y0, bw, y1 - y0, bw * 0.4); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.6); ctx.stroke();
    const fh = (y1 - y0 - 6) * lvl;
    rrect(mx - bw / 2 + 3, y1 - 3 - fh, bw - 6, fh, bw * 0.3); ctx.fillStyle = mix(C.good, C.bad, clamp((lvl - 0.3) / 0.55, 0, 1)); ctx.fill();
    const calm = lvl < 0.55, ns = H * 0.045;
    chara(mx, H * 0.95, ns, { who: "neuron", eyes: calm ? "happy" : "wide", mouth: calm ? "smile" : "wavy", brow: calm ? null : "worry" });
    if (!calm) emote("sweat", mx + ns, H * 0.95 - ns * 3.1, ns * 0.6);
    // 标注和气泡
    callout("r0", win(0.6, 4), P(0, D).x, P(0, D).y - sr, cx + R * (n ? 0.4 : 1.2), cy - R * 1.55, "五个亚基围成一圈");
    callout("r1", win(4.3, 8.4) && gab.length > 0, site(1, D).x, site(1, D).y, n ? W * 0.5 : cx + R * 1.6, cy + R * 1.35, "GABA 坐在 β 和 α 之间");
    callout("r2", lt > 8.6, bzs.x, bzs.y, n ? W * 0.3 : cx - R * 1.3, cy - R * 1.5, "苯二氮䓬座位：α 和 γ 之间");
    say("r3", lt > 7 && !n, mx, H * 0.95 - ns * 3.2, n ? W * 0.6 : mx - W * 0.14, H * (n ? 0.96 : 0.82), n ? "安静啦～" : "Cl⁻ 进来，安静啦～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：α 亚基的分工 ----------
  function icon(kind, x, y, s, on) {
    ctx.save(); ctx.globalAlpha *= 0.35 + 0.65 * on;
    if (kind === 0) { // 月亮 + zzz
      ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.beginPath(); ctx.arc(x + s * 0.45, y - s * 0.3, s * 0.85, 0, Math.PI * 2); ctx.fillStyle = "#fffdfb"; ctx.fill();
      if (on > 0.5) emote("zzz", x + s * 0.9, y - s * 0.9, s * 0.7);
    } else if (kind === 1) { Anima.heart(x, y + s * 0.2, s * 0.9, on > 0.5 ? "#f7a8c0" : "#e6d6dc"); if (on > 0.5) sparkles(x, y, s * 1.4, 3, 1, 8); }
    else {
      rrect(x - s, y - s * 0.7, s * 2, s * 1.4, s * 0.15); ctx.fillStyle = "#dfefff"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y - s * 0.7); ctx.lineTo(x, y + s * 0.7); ctx.stroke();
      if (on > 0.5) emote("?", x + s * 1.35, y + s * 0.1, s * 0.6);
    }
    ctx.restore();
  }
  function viewC(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    bgWash("#fbf8ff", "#f3f7ff", "#fff1f5");
    Anima.petals(8, 0.45, 40);
    const mem = H * (n ? 0.74 : 0.76), rs = H * (n ? 0.055 : 0.056), cs = H * (n ? 0.042 : 0.042);
    Anima.postMembrane(mem, C.post, {});
    const xs = n ? [0.15, 0.47, 0.79] : [0.2, 0.5, 0.8];
    const tt = ["α1：镇静催眠", "α2/α3：抗焦虑", "α5：学习记忆"];
    // 谁坐在哪扇门上
    const bzIn = prog(1.5, 2) * (1 - prog(7.6, 0.8)), zIn = prog(8.8, 2);
    const on = [Math.max(bzIn, zIn), bzIn, bzIn];
    const top = Anima.topSafe() + H * 0.04, chh = H * (n ? 0.24 : 0.26), cw = W * (n ? 0.3 : 0.24);
    xs.forEach((f, i) => {
      const x = W * f;
      // 效果卡
      const lit = ease(clamp((on[i] - 0.6) / 0.4, 0, 1));
      ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 4;
      rrect(x - cw / 2, top, cw, chh, 16); ctx.fillStyle = mix("#fffdfb", ["#fff4c8", "#ffe4ee", "#e3f0ff"][i], lit); ctx.fill(); ctx.restore();
      outline(lit > 0.5 ? 2.6 : 1.6); rrect(x - cw / 2, top, cw, chh, 16); ctx.stroke();
      text(tt[i], x, top + fs(0.03) * 1.1, fs(0.03), C.ink);
      icon(i, x, top + chh * 0.6, H * 0.06, lit);
      ctx.save(); ctx.setLineDash([4, 5]); outline(1.3); ctx.globalAlpha *= 0.4 + lit * 0.6;
      ctx.beginPath(); ctx.moveTo(x, top + chh); ctx.lineTo(x, mem - rs * 1.7 - cs * 3.2); ctx.stroke(); ctx.restore();
      Anima.receptor(x, mem, rs, C.door, 0.35 + on[i] * 0.65, {});
      chara(x, mem - rs * 1.62, cs * 0.8, { who: "GABA", eyes: "happy", arms: "down", shadow: false, seed: i });
    });
    // 访客
    const vis = [];
    xs.forEach((f, i) => {
      const x = W * f, seat = { x: x + rs * 1.75, y: mem + H * 0.005 };
      if (bzIn > 0.01) {
        const p = prog(1.5 + i * 0.3, 2), from = { x: W + cs * 2 + (2 - i) * cs * 3, y: seat.y };
        const px = lerp(from.x, seat.x, p);
        chara(px, seat.y, cs, Object.assign({}, BZ, { alpha: 1 - prog(7.6, 0.8), walk: p < 1 ? time * 9 : null, arms: p >= 1 ? "hug" : "wave", eyes: "happy", dir: -1, tag: i === 1 ? "苯二氮䓬" : null }));
        vis[i] = { x: px, y: seat.y };
      }
      if (i === 0 && zIn > 0.01) {
        const px = lerp(W * 0.5, seat.x, zIn), py = seat.y + Math.sin(zIn * Math.PI) * H * 0.08;
        chara(px, py, cs, Object.assign({}, ZOL, { walk: zIn < 1 ? time * 9 : null, arms: zIn >= 1 ? "hug" : "wave", eyes: "happy", dir: -1 }));
        vis[3] = { x: px, y: seat.y };
      }
    });
    callout("c0", win(0.5, 3.5), W * xs[1], mem - rs * 0.6, W * 0.5, mem + H * 0.1, "同一种门，α 型号不同");
    if (vis[1]) say("c1", win(4.5, 7.6), vis[1].x, vis[1].y + H * 0.02, W * (n ? 0.5 : 0.62), H * 0.9, "三扇门我都坐！", "say");
    if (vis[3]) say("c2", lt > 10.8, vis[3].x, vis[3].y + H * 0.02, W * (n ? 0.45 : 0.36), H * 0.9, "我最爱 α1，快睡吧～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：GABA-B ----------
  function viewD(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    bgWash("#f7fbf6", C.cleft, "#fff2f6");
    Anima.bokeh(6, "#cdeedc", 0.8, 61);
    const mem = H * 0.72, cx = W * (n ? 0.36 : 0.32), tw = Math.min(W * (n ? 0.6 : 0.42), H * 0.8), th = H * 0.4, bot = th;
    const rs = H * (n ? 0.05 : 0.046), cs = H * (n ? 0.04 : 0.036);
    Anima.postMembrane(mem, C.post, {});
    Anima.terminal(cx, 0, tw, th, "#e7f5ec");
    // 末梢里的囊泡
    const caOff = prog(10.4, 0.8);
    for (let i = 0; i < 3; i++) Anima.vesicle(cx + (i - 1) * tw * 0.2, bot - H * 0.1 - (i % 2) * H * 0.06 + (1 - caOff) * Math.sin(time * 3 + i) * H * 0.008, H * 0.032, "#8f86e2", 4, i * 5);
    // 末梢上的 GABA-B（朝下）和钙通道
    const pgx = cx - tw * 0.22, pgy = bot - H * 0.004, cax = cx + tw * 0.2, cay = bot - H * 0.004;
    const preOn = prog(9.4, 0.6);
    Anima.receptor(pgx, pgy, rs * 0.85, C.gb, preOn, { dir: -1, shape: "square" });
    Anima.receptor(cax, cay, rs * 0.75, "#ffe3a3", 1 - caOff, { dir: -1 });
    if (caOff < 0.95) for (let k = 0; k < 4; k++) {
      const t = (time * 0.6 + k / 4) % 1;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * (1 - caOff);
      Anima.ion(cax + (k % 2 ? 1 : -1) * rs * 0.2, lerp(bot + H * 0.14, bot - H * 0.05, t), H * 0.02, "Ca", "#c8f0d8");
      ctx.restore();
    }
    if (caOff > 0.2) { ctx.save(); ctx.globalAlpha *= caOff; ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(2.5, H * 0.008); const r = rs * 0.5, yy = cay + rs * 0.9;
      ctx.beginPath(); ctx.moveTo(cax - r, yy - r); ctx.lineTo(cax + r, yy + r); ctx.moveTo(cax + r, yy - r); ctx.lineTo(cax - r, yy + r); ctx.stroke(); ctx.restore(); }
    // 突触后：GABA-B → G 蛋白 → 钾通道
    const gbx = cx, kx = W * (n ? 0.78 : 0.7);
    const postOn = prog(2.3, 0.6);
    Anima.receptor(gbx, mem, rs, C.gb, postOn, { shape: "square" });
    const kOpen = prog(6, 0.8);
    Anima.receptor(kx, mem, rs * 0.9, "#bfe3f5", kOpen, {});
    const gp = prog(2.8, 3.2), gy = mem + H * 0.075, gx = lerp(gbx + rs * 0.8, kx - rs * 1.1, gp);
    ctx.save(); ctx.setLineDash([4, 6]); outline(1.3); ctx.beginPath(); ctx.moveTo(gbx + rs * 0.8, gy); ctx.lineTo(kx - rs * 1.1, gy); ctx.stroke(); ctx.restore();
    ctx.beginPath(); ctx.ellipse(gx, gy, H * 0.05, H * 0.04, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe7a3"; ctx.fill(); outline(1.8); ctx.stroke();
    face(gx, gy + H * 0.004, H * 0.024, 1);
    text("G 蛋白", gx - H * 0.1, gy, fs(0.026), C.ink, "right");
    if (gp > 0 && gp < 1) sfx("慢慢来…", gx + H * 0.14, gy + H * 0.02, H * 0.03, "#c88600", -0.06, 1);
    if (kOpen > 0.3) for (let k = 0; k < 4; k++) {
      const t = (time * 0.5 + k / 4) % 1;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * kOpen;
      Anima.ion(kx + (k % 2 ? 1 : -1) * rs * 0.25, lerp(mem + H * 0.14, mem - H * 0.16, t), H * 0.021, "K", "#ffd9c2");
      ctx.restore();
    }
    // 神经元的小脸
    const calm = kOpen > 0.5;
    face(W * (n ? 0.14 : 0.1), H * 0.88, H * 0.045, calm ? 1 : 0);
    // GABA 们
    const g1 = walkPos({ x: cx - tw * 0.04, y: bot + cs * 3.2 }, { x: gbx, y: mem - rs * 1.62 }, 0.4, 1.9);
    if (g1.p > 0) chara(g1.x, g1.y, cs, { who: "GABA", walk: g1.moving ? time * 9 : null, arms: g1.p >= 1 ? "up" : "down", eyes: "happy" });
    const g2p = prog(8, 1.4), g2 = { x: lerp(cx + tw * 0.02, pgx, g2p), y: lerp(mem - H * 0.04, pgy + rs * 1.5 + cs * 3.1, g2p) };
    if (g2p > 0) chara(g2.x, g2.y, cs * 0.85, { who: "GABA", walk: g2p < 1 ? time * 9 : null, arms: g2p >= 1 ? "up" : "down", eyes: "happy", alpha: clamp(g2p * 4, 0, 1) });
    const b2x = W * (n ? 0.58 : 0.52);
    Anima.receptor(b2x, mem, rs, C.gb, prog(12.8, 0.6), { shape: "square" });
    const bp = walkPos({ x: W + cs * 2, y: mem - rs * 1.62 }, { x: b2x, y: mem - rs * 1.62 }, 11.2, 1.6);
    if (bp.p > 0) chara(bp.x, bp.y, cs, Object.assign({}, BAC, { walk: bp.moving ? time * 9 : null, arms: bp.p >= 1 ? "up" : "wave", eyes: "happy", dir: -1 }));
    callout("d0", win(2.4, 6.2), gbx + rs * 0.5, mem - rs * 0.8, n ? W * 0.5 : gbx + W * 0.2, H * (n ? 0.92 : 0.5), "GABA-B：G 蛋白偶联受体");
    callout("d1", win(6.4, 10), kx + rs * 0.4, mem - rs * 0.5, n ? W * 0.55 : kx + W * 0.12, H * (n ? 0.92 : 0.5), "钾通道打开，K⁺ 流出");
    callout("d2", lt > 10.6, cax + rs * 0.5, cay + rs, n ? W * 0.76 : cax + W * 0.2, H * (n ? 0.27 : 0.3), "末梢：钙通道关小");
    if (bp.p > 0) say("d3", lt > 12.4, bp.x, bp.y - cs * 3.2, n ? W * 0.7 : bp.x + W * 0.1, H * (n ? 0.42 : 0.44), "我也能按 GABA-B！", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：交警 ----------
  function pyramid(x, y, s, fire, gray, chaos) {
    const col = mix("#ffd3c4", "#d8d0d4", gray);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, s * 0.12);
    ctx.beginPath(); ctx.moveTo(x, y - s * 0.9); ctx.lineTo(x, y - s * 1.9); ctx.stroke();
    if (fire > 0) glow(x, y - s * 0.2, s * 2, C.gold, fire);
    ctx.beginPath(); ctx.moveTo(x, y - s * 1.05); ctx.lineTo(x + s * 0.95, y + s * 0.6); ctx.lineTo(x - s * 0.95, y + s * 0.6); ctx.closePath();
    ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y + s * 0.12, s * 0.42, chaos > 0.5 ? -1 : 1);
    if (fire > 0.5) Anima.bolt(x + s * 0.9, y - s * 1.3, s * 0.45, fire);
  }
  function viewE(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f8f5ff", "#fff4f0");
    Anima.bokeh(7, "#e3dcfb", 0.8, 71);
    const row = H * (n ? 0.6 : 0.6), ps = H * (n ? 0.065 : 0.065), xs = n ? [0.09, 0.27, 0.73, 0.91] : [0.08, 0.21, 0.34, 0.66, 0.79, 0.92];
    const chaos = prog(6.6, 1.6), gx = W * 0.5, cs = H * (n ? 0.05 : 0.046);
    // 放电：同步时大家一起，乱了以后各自乱放
    const spikeAt = (i, t) => {
      if (t < 6.6) return Math.abs((t * 1.1) % 1) < 0.1;
      const sl = Math.floor(t * 8);
      return rnd(sl * 13 + i * 7) > 0.6 && (t * 8 - sl) < 0.6;
    };
    // 连线
    ctx.save(); ctx.setLineDash([4, 6]); outline(1.3); ctx.globalAlpha *= 1 - chaos * 0.6;
    xs.forEach((f) => { ctx.beginPath(); ctx.moveTo(gx, row - cs * 1.6); ctx.quadraticCurveTo((gx + W * f) / 2, row - H * 0.2, W * f, row - ps * 0.2); ctx.stroke(); });
    ctx.restore();
    xs.forEach((f, i) => pyramid(W * f, row, ps, spikeAt(i, lt) ? 1 : 0, 0, chaos));
    // 交警：站在小台子上
    rrect(gx - cs * 1.2, row, cs * 2.4, cs * 0.6, cs * 0.2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.5); ctx.stroke();
    const beat = Math.abs(Math.sin(lt * 1.1 * Math.PI));
    chara(gx, row, cs * (1 - chaos * 0.15), { who: "GABA", acc: "whistle", gray: chaos * 0.7, arms: chaos > 0.5 ? "down" : (beat > 0.5 ? "up" : "wave"), eyes: chaos > 0.5 ? "dizzy" : "happy", mouth: chaos > 0.5 ? "wavy" : "o" });
    if (chaos > 0.5) emote("sweat", gx + cs, row - cs * 3.3, cs * 0.6);
    else if (beat > 0.8) sfx("哔！", gx + cs * 1.4, row - cs * 3.3, H * 0.032, "#6b61c9", -0.1, 1);
    // 放电记录
    const bx0 = W * 0.05, bx1 = W * 0.95, by0 = H * (n ? 0.76 : 0.77), by1 = H * 0.97, rows = xs.length;
    rrect(bx0, by0, bx1 - bx0, by1 - by0, H * 0.02); ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill(); outline(1.3); ctx.stroke();
    text("放电记录", bx0 + H * 0.015, by0 - fs(0.024) * 0.2 - H * 0.012, fs(0.024), C.soft, "left");
    const span = 5, rh = (by1 - by0 - H * 0.02) / rows;
    ctx.strokeStyle = mix(C.lavDeep, C.bad, chaos); ctx.lineWidth = Math.max(1.5, H * 0.004);
    ctx.beginPath();
    for (let r = 0; r < rows; r++) {
      const yy = by0 + H * 0.01 + rh * (r + 0.5);
      for (let k = 0; k < 100; k++) {
        const t = lt - span + span * k / 100;
        if (t < -3) continue;
        if (spikeAt(r, t) && !spikeAt(r, t - span / 100)) { const x = lerp(bx0 + 6, bx1 - 6, k / 100); ctx.moveTo(x, yy - rh * 0.4); ctx.lineTo(x, yy + rh * 0.4); }
      }
    }
    ctx.stroke();
    // 症状小牌
    const sym = ["焦虑", "失眠", "癫痫风险"]; // 左右两组上方各一个，中间顶上一个
    sym.forEach((s, j) => {
      const p = prog(8.6 + j * 0.9, 0.5);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      const x = W * [0.2, 0.8, 0.5][j], y = j === 2 ? Anima.topSafe() + H * 0.04 : row - ps * 3;
      chip(s, x, y, C.bad, "#fff0f2");
      ctx.restore();
    });
    const p0 = { x: W * xs[0], y: row - ps };
    callout("e0", win(0.6, 5.5), gx - cs * 0.6, row - cs * 2.2, n ? W * 0.3 : W * 0.36, H * (n ? 0.3 : 0.3), "GABA 中间神经元");
    callout("e1", win(1.5, 5.5), p0.x, p0.y, n ? W * 0.2 : W * 0.14, H * (n ? 0.4 : 0.36), "锥体神经元");
    say("e2", win(1, 6.4), gx, row - cs * 3.3, n ? W * 0.72 : W * 0.62, H * (n ? 0.3 : 0.3), "一、二，一、二～", "say");
    say("e3", lt > 10.6, gx, row - cs * 3.3, W * 0.5, H * (n ? 0.33 : 0.3), n ? "拦不住啦…" : "GABA 不够，拦不住啦…", "think");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) viewA(S.v0);
    if (S.v1 > 0.02) viewB(S.v1);
    if (S.v2 > 0.02) viewC(S.v2);
    if (S.v3 > 0.02) viewD(S.v3);
    if (S.v4 > 0.02) viewE(S.v4);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#6b61c9", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#d0679a", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#a99ee8",
    titleCard: { lines: ["GABA：", "大脑的刹车系统"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
