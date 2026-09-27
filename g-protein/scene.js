Anima.register("g-protein", {
    "title": "三种接力：G 蛋白和第二信使",
    "tag": "基础篇",
    "headline": "受体收到信以后，【G 蛋白】怎样接力？",
    "lede": "G 蛋白偶联受体自己不开门放离子，它把消息交给门里面的 G 蛋白。G 蛋白有三种常见的接力方式：踩油门、踩刹车、打开钙仓库。看懂这三种接力，就能明白为什么同一种递质能让细胞做出相反的事。",
    "summary": "受体变形、GDP 换 GTP、Gs 和 Gi 调节 cAMP、Gq 经磷脂酶 C 产生 IP3 和 DAG，G 蛋白自带计时器，以及信号的层层放大。",
    "chapter": "对应 Stahl《精神药理学精要》第 2 章 · G 蛋白偶联受体",
    "footer": "",
    "canvasLabel": "拟人化的 G 蛋白 α 亚基把 GDP 换成 GTP，去调节腺苷酸环化酶和磷脂酶 C 的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["DA", "5HT", "neuron"],
    "color": "#f0b86e"
  }, () => {
  const CH = [
    { title: "受体换了形状", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["第一步", "GDP→GTP"], pill2: ["α 亚基", "出发"],
      text: "《突触邮局》说过，G 蛋白偶联受体传的是慢信号，这一集放大看第一棒。多巴胺把钥匙插进受体，受体像拧麻花一样换了个形状。门里面等着 G 蛋白三人组：α、β、γ，α 手里抱着 GDP。受体一变形，α 就丢掉 GDP、换上 GTP，这是它的“开机键”。开了机的 α 离开 βγ，去找下一位同事。",
      fact: "受体被激活 → G 蛋白的 α 亚基把 GDP 换成 GTP，并和 βγ 分开" },
    { title: "Gs 踩油门，Gi 踩刹车", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["Gs", "cAMP ↑"], pill2: ["Gi", "cAMP ↓"],
      text: "α 常去找的同事，是膜上的腺苷酸环化酶，一台把 ATP 做成 cAMP 的小机器。Gs 的 α 搭上去，机器转得飞快，cAMP 越做越多，像踩下油门；Gi 的 α 搭上去，机器慢下来，cAMP 变少，像踩刹车。cAMP 是第二信使，它会叫醒蛋白激酶 A，后面的故事在《基因的开关》里接着讲。",
      fact: "Gs 让腺苷酸环化酶多做 cAMP，Gi 让它少做" },
    { title: "Gq：剪开一个脂质", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["Gq", "磷脂酶 C"], pill2: ["结果", "Ca²⁺ ↑"],
      text: "第三种叫 Gq，它去找另一位同事：磷脂酶 C。磷脂酶 C 拿起剪刀，把膜上的一种脂质 PIP2 剪成两半。一半叫 IP3，游到内质网，打开储存钙的仓库，钙离子（Ca²⁺）一下子涌出来；另一半叫 DAG，留在膜上，和钙离子一起叫醒蛋白激酶 C，让它去给别的蛋白质盖章。",
      fact: "Gq → 磷脂酶 C → IP3（放出内质网的 Ca²⁺）+ DAG（激活蛋白激酶 C）" },
    { title: "同一把钥匙，不同的门", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["递质", "同一种"], pill2: ["G 蛋白", "不一样"],
      text: "同一种递质可以有好几种受体，它们连着不同的 G 蛋白。多巴胺的 D1 受体偏向 Gs，让 cAMP 变多；D2 受体偏向 Gi，让 cAMP 变少。5-HT 也一样：5-HT1A 偏向 Gi，踩刹车；5-HT2A 偏向 Gq，放出钙离子。同一位快递员送到不同的门，细胞里的结果可能正好相反，所以药物作用在哪种受体上格外重要。",
      fact: "D1 → Gs、D2 → Gi；5-HT1A → Gi、5-HT2A → Gq（指主要的偶联方式）" },
    { title: "自带的计时器", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["GTP", "→ GDP"], pill2: ["接力", "自动停"],
      text: "接力不会一直跑下去。α 亚基自己会慢慢把 GTP 切成 GDP，像身上带着一个计时器。时间一到，GTP 变回 GDP，α 就“下班”了，离开机器，回到 βγ 身边重新组队，机器也跟着慢下来。只要递质还在、受体还亮着，它们还能再开机；递质一走，信号就自然停下。",
      fact: "α 亚基有 GTP 酶活性：把 GTP 水解成 GDP 后自动关闭" },
    { title: "一封信，放大很多倍", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["受体", "1 个"], pill2: ["信号", "层层放大"],
      text: "为什么一点点递质，就能让细胞有明显的反应？因为接力的每一棒都会放大。一个被激活的受体，可以接连让好多个 G 蛋白开机；每个 α 叫醒一台机器，每台机器又能做出很多个 cAMP；后面的蛋白激酶还能给许多蛋白质盖章。一级一级放大，一封小小的信，整个细胞都能听见。",
      fact: "一个受体激活多个 G 蛋白，每个酶再产生大量第二信使：信号层层放大" },
  ];

  const C = Object.assign({}, Anima.C, {
    out: "#eef7fb", cell: "#fff6ee", mem: "#f7c6d3", rec: "#f7a8c0", ac: "#ffd9a8", er: "#dcecff",
    gdp: "#b9c2cc", gtp: "#ffd24d", camp: "#ffe68a", ca: "#c8f0d8", ip3: "#c9b8f5", dag: "#ffcf8a",
  });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const N = () => Anima.narrow;
  const T = (k) => (cur === k ? Anima.sceneTime : 99); // 淡出中的画面停在幕末
  const P = (L, t0, d) => ease((L - t0) / d);
  const fsS = () => Math.max(10, H * 0.03) * Anima.UI;
  const csz = () => H * (N() ? 0.058 : 0.062);
  const MT = () => H * 0.045;
  const GT = {
    s: { hair: "#3fae86", cloth: "#d4f5e6", hatColor: "#7fd3b0", label: "Gs" },
    i: { hair: "#d9606f", cloth: "#ffdfe3", hatColor: "#f08a9a", label: "Gi" },
    q: { hair: "#7a6bd6", cloth: "#e8e3ff", hatColor: "#a99be8", label: "Gq" },
  };

  // ---------- 小零件 ----------
  function bg(mem) {
    const mt = MT();
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#f3faff"); g.addColorStop(clamp(mem / H, 0, 1), C.out);
    g.addColorStop(clamp(mem / H + 0.01, 0, 1), C.cell); g.addColorStop(1, "#fdeff4");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#e4dcff", 0.6, 14); Anima.petals(5, 0.35, 3);
    ctx.fillStyle = C.mem; ctx.fillRect(-5, mem - mt / 2, W + 10, mt);
    outline(1.6); ctx.beginPath(); ctx.moveTo(0, mem - mt / 2); ctx.lineTo(W, mem - mt / 2); ctx.moveTo(0, mem + mt / 2); ctx.lineTo(W, mem + mt / 2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    const st = Math.max(8, H * 0.024);
    for (let x = st / 2; x < W; x += st) for (const yy of [mem - mt * 0.28, mem + mt * 0.28]) { ctx.beginPath(); ctx.arc(x, yy, Math.max(1.5, H * 0.006), 0, Math.PI * 2); ctx.fill(); }
    return mt;
  }
  // G 蛋白偶联受体：七根穿过膜的“麻花”，act 越大越扭开、越亮
  function gpcr(x, mem, s, act, col) {
    const mt = MT(), h = mt + s * 0.9, bw = s * 0.26;
    glow(x, mem, s * 2.2, C.gold, act * 0.8);
    for (let i = 0; i < 7; i++) {
      ctx.save(); ctx.translate(x + (i - 3) * s * (0.3 + act * 0.04), mem);
      ctx.rotate((i % 2 ? 1 : -1) * (0.08 + act * 0.14));
      rrect(-bw / 2, -h / 2, bw, h, bw / 2); ctx.fillStyle = i % 2 ? col : Anima.mix(col, "#ffffff", 0.3); ctx.fill(); outline(1.3); ctx.stroke();
      ctx.restore();
    }
    return { site: { x, y: mem - h / 2 + s * 0.1 }, bot: mem + h / 2 };
  }
  function ball(x, y, r, kind, a) {
    if (a != null && a < 0.03) return;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    const gtp = kind === "GTP";
    if (gtp) glow(x, y, r * 2.2, C.gold, 0.8);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = gtp ? C.gtp : C.gdp; ctx.fill(); outline(1.3); ctx.stroke();
    if (r > 8) text(kind, x, y + 1, r * 0.62, C.ink);
    ctx.restore();
  }
  function coin(x, y, r, a, label, col) {
    if (a < 0.03) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col || C.camp; ctx.fill(); outline(1.1); ctx.stroke();
    if (r > 9) text(label || "cAMP", x, y + 1, r * 0.58, C.ink);
    ctx.restore();
  }
  // 第二信使从 (x, y) 往下冒出来，n 是同时可见的个数（可以是小数）
  function stream(x, y, n, r, dist, seed, label, col, spd) {
    for (let k = 0; k < Math.ceil(n); k++) {
      const t = (time * (spd || 0.35) + rnd(k + seed)) % 1;
      const f = k < Math.floor(n) ? 1 : n - Math.floor(n);
      coin(x + (rnd(k * 3 + seed) - 0.5) * r * 9 * t, y + t * dist, r, Math.sin(t * Math.PI) * f, label, col);
    }
  }
  function galpha(x, y, s, type, nuc, o) {
    o = o || {};
    chara(x, y, s, Object.assign({ who: "neuron", hat: "cap", style: "short", eye: "#5a4650", arms: nuc ? "hold" : "down" }, GT[type], o));
    if (nuc) ball(x, y - s * 0.86 - (o.jump || 0) * s, s * 0.46, nuc);
  }
  // βγ：两个黏在膜内侧的小圆团子
  function bgPair(x, y, s, mood, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    [[0, 0.5, "#cfe6f7", "β"], [0.95, 0.42, "#ffd3b8", "γ"]].forEach((b) => {
      const bx = x + b[0] * s, r = b[1] * s;
      ctx.beginPath(); ctx.arc(bx, y + r, r, 0, Math.PI * 2); ctx.fillStyle = b[2]; ctx.fill(); outline(1.3); ctx.stroke();
      face(bx, y + r * 1.05, r * 0.62, mood);
      if (s > 12) text(b[3], bx, y + r * 2.45, Math.max(9, s * 0.42), C.ink);
    });
    ctx.restore();
  }
  // 膜上的酶：带齿轮的小机器（腺苷酸环化酶）
  function enzyme(x, mem, s, spin, mood, gray) {
    const mt = MT(), top = mem - mt * 0.8, h = s * 2.3 + mt * 0.8, w = s * 2.3;
    const col = Anima.mix(C.ac, "#d6d0d3", gray || 0);
    rrect(x - w / 2, top, w, h, s * 0.5); ctx.fillStyle = col; ctx.fill(); outline(1.6); ctx.stroke();
    const gx = x, gy = mem + s * 0.75, gr = s * 0.48;
    ctx.save(); ctx.translate(gx, gy); ctx.rotate(spin);
    ctx.fillStyle = "#fff4dc";
    for (let i = 0; i < 8; i++) { ctx.save(); ctx.rotate(i * Math.PI / 4); rrect(-gr * 0.2, -gr * 1.3, gr * 0.4, gr * 0.5, gr * 0.1); ctx.fill(); outline(1); ctx.stroke(); ctx.restore(); }
    ctx.beginPath(); ctx.arc(0, 0, gr, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, gr * 0.3, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    ctx.restore();
    face(x, top + h - s * 0.4, s * 0.34, mood);
    return { out: { x, y: top + h } };
  }
  function chip(t, x, y, col, fs) {
    fs = fs || fsS();
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1;
    rrect(x - w / 2, y - fs * 0.75, w, fs * 1.5, fs * 0.75); ctx.fillStyle = col || "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function meter(x, y0, y1, w, v, col, label) {
    rrect(x - w / 2, y0, w, y1 - y0, w / 2); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1.4); ctx.stroke();
    const hh = (y1 - y0 - 4) * clamp(v, 0, 1);
    if (hh > 2) { rrect(x - w / 2 + 2, y1 - 2 - hh, w - 4, hh, (w - 4) / 2); ctx.fillStyle = col; ctx.fill(); }
    text(label, x, y0 - fsS() * 0.8, fsS() * 0.9, C.ink);
  }

  // ---------- 第 1 幕：受体变形，GDP 换 GTP ----------
  function v0(a) {
    const L = T(0), n = N(), s = csz(), mem = H * (n ? 0.44 : 0.42);
    ctx.save(); ctx.globalAlpha *= a;
    const mt = bg(mem);
    const rx = W * 0.3, ex = W * (n ? 0.8 : 0.76);
    const bind = P(L, 0.4, 2), act = P(L, 2.4, 0.8), leave = P(L, 6.6, 3.4), acOn = P(L, 9.8, 1);
    enzyme(ex, mem, s, time * (0.3 + acOn * 3), acOn > 0.5 ? 1 : 0, 0.5 - acOn * 0.5);
    const rc = gpcr(rx, mem, s, act, C.rec);
    const top = Anima.topSafe() + s * 3.2;
    const dx = lerp(W * 0.06, rx, bind), dy = lerp(top, rc.site.y, bind) - Math.sin(bind * Math.PI) * H * 0.03;
    chara(dx, dy, s, { who: "DA", walk: bind < 1 ? time * 9 : null, eyes: act > 0.5 ? "happy" : "open", arms: act > 0.5 ? "up" : "hold", item: act > 0.5 ? null : "letter", mouth: act > 0.5 ? "grin" : "smile" });
    if (L > 2.4 && L < 3.6) sfx("咔嚓！", rx + s * 2.2, mem - s * 1.6, H * 0.045, C.warn, -0.1, Math.sin(P(L, 2.4, 1.2) * Math.PI));
    const fy = mem + mt / 2 + s * 3.25, ax0 = rx + s * 0.35, gx = lerp(ax0, ex - s * 1.8, leave);
    bgPair(rx - s * 2.3, mem + mt / 2, s, leave > 0.3 ? 1 : 0);
    const gdpOut = P(L, 3.6, 1.3), gtpIn = P(L, 4.6, 1.2);
    if (gdpOut > 0 && gdpOut < 1) ball(ax0 - gdpOut * s * 2.4, fy - s * 0.86 + gdpOut * s * 2.6, s * 0.46, "GDP", 1 - gdpOut);
    if (gtpIn > 0 && gtpIn < 1) ball(lerp(ax0 + s * 3.5, ax0, gtpIn), lerp(H * 0.97, fy - s * 0.86, gtpIn), s * 0.46, "GTP");
    const nuc = gdpOut <= 0 ? "GDP" : gtpIn >= 1 ? "GTP" : null;
    galpha(gx, fy, s, "s", nuc, { walk: leave > 0 && leave < 1 ? time * 9 : null, eyes: nuc === "GTP" ? "sparkle" : nuc ? "sleepy" : "open", mouth: nuc === "GTP" ? "grin" : "smile" });
    if (gtpIn >= 1 && L < 9) sparkles(gx, fy - s * 1.6, s * 2, 4, 1, 3);
    if (acOn > 0.3) stream(ex, mem + s * 2.4, acOn * 4, H * 0.02, H * 0.3, 5);
    callout("g0r", L > 1 && L < 4.2, rx + s * 1.1, mem - s * 0.2, rx + W * (n ? 0.4 : 0.22), mem - H * 0.12, "受体：七次穿过细胞膜");
    callout("g0t", L > 1 && L < 4.4, rx - s * 1.2, mem + mt / 2 + s * 1.4, W * 0.22, H * 0.92, "G 蛋白：α + β + γ 三人组");
    callout("g0s", L > 4.8 && L < 11, gx + s * 0.4, fy - s * 0.9, W * 0.64, mem - H * 0.12, "GDP 换成 GTP：开机！");
    say("g0a", L > 6.2 && L < 10, gx, fy - s * 1.5, W * 0.56, H * 0.86, "拿到 GTP，出发～！", "shout");
    ctx.restore();
  }

  // ---------- 第 2 幕：Gs 油门 / Gi 刹车 ----------
  function v1(a) {
    const L = T(1), n = N(), s = csz(), mem = H * (n ? 0.4 : 0.38);
    ctx.save(); ctx.globalAlpha *= a;
    bg(mem);
    ctx.save(); ctx.setLineDash([5, 7]); outline(1.4); ctx.beginPath(); ctx.moveTo(W / 2, mem + H * 0.05); ctx.lineTo(W / 2, H - 8); ctx.stroke(); ctx.restore();
    const on = P(L, 3, 1.6);
    [[-1, "s"], [1, "i"]].forEach((d) => {
      const side = d[0], ty = d[1], x = W * (0.5 + side * (n ? 0.24 : 0.22));
      const go = side < 0;
      chip(go ? "油门 Gs" : "刹车 Gi", x, mem - H * 0.07, go ? "#d4f5e6" : "#ffdfe3");
      const sp = go ? 0.6 + on * 4 : 0.6 - on * 0.5;
      const e = enzyme(x, mem, s, time * sp, go ? (on > 0.5 ? 1 : 0) : (on > 0.5 ? -1 : 0), go ? 0 : on * 0.4);
      const rx = x + side * W * (n ? 0.19 : 0.17), ra = P(L, 0.2, 1.2);
      const rc = gpcr(rx, mem, s, ra, go ? "#ffc0c6" : "#c9c2f5");
      chara(rx, rc.site.y, s, { who: go ? "NE" : "GABA", eyes: "happy", arms: ra > 0.5 ? "up" : "hold" });
      const walk = P(L, 0.8, 2.2), ax = lerp(rx, x + side * s * 1.9, walk), fy = mem + MT() / 2 + s * 3.25;
      galpha(ax, fy, s, ty, "GTP", { dir: side < 0 ? 1 : -1, walk: walk < 1 ? time * 9 : null, eyes: on > 0.5 ? (go ? "happy" : "closed") : "open", mouth: go && on > 0.5 ? "grin" : "smile" });
      if (!go && on > 0.5) emote("zzz", x + s * 1.2, mem + s * 0.4, s * 0.6, on);
      stream(x, e.out.y, go ? 2 + on * 7 : 2 - on * 1.6, H * (n ? 0.024 : 0.022), H - e.out.y - H * 0.08, go ? 11 : 23, "cAMP", null, go ? 0.25 + on * 0.25 : 0.25);
      meter(x - side * (n ? W * 0.16 : W * 0.15), H * 0.6, H * 0.93, Math.max(12, H * 0.035), go ? 0.35 + on * 0.55 : 0.35 - on * 0.27, go ? "#7fd3b0" : "#f08a9a", "cAMP");
    });
    if (L > 3 && L < 4.2) sfx("咔哒", W * 0.5, mem + H * 0.12, H * 0.045, C.warn, -0.1, Math.sin(P(L, 3, 1.2) * Math.PI));
    const lx = W * (0.5 - (n ? 0.24 : 0.22));
    callout("g1e", L > 0.5 && L < 4.3, lx + s * 0.9, mem + s * 0.4, W * 0.5, H * 0.16, "腺苷酸环化酶：把 ATP 做成 cAMP");
    say("g1s", L > 4.5 && L < 8, lx - s * 1.9, mem + s * 0.7, W * 0.4, H * 0.19, "油门踩到底～", n ? "say" : "shout");
    say("g1i", L > 8.3 && L < 12.5, W - lx + s * 1.9, mem + s * 0.7, W * 0.6, H * 0.19, "嘘，慢一点做…", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：Gq → 磷脂酶 C → IP3 + DAG ----------
  function v2(a) {
    const L = T(2), n = N(), s = csz(), mem = H * (n ? 0.4 : 0.37);
    ctx.save(); ctx.globalAlpha *= a;
    const mt = bg(mem), fy = mem + mt / 2 + s * 3.25;
    // 内质网：储钙的仓库
    const er = { x: W * 0.06, y: H * 0.74, w: W * (n ? 0.5 : 0.44), h: H * 0.2 };
    ctx.beginPath();
    for (let i = 0; i <= 24; i++) { const t = i / 24, x = er.x + t * er.w, y = er.y + Math.sin(t * Math.PI * 5 + time) * H * 0.012; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.lineTo(er.x + er.w, er.y + er.h); ctx.quadraticCurveTo(er.x + er.w / 2, er.y + er.h * 1.2, er.x, er.y + er.h); ctx.closePath();
    ctx.fillStyle = C.er; ctx.fill(); outline(1.6); ctx.stroke();
    text("内质网（钙仓库）", er.x + er.w * 0.5, er.y + er.h * 0.8, fsS() * 0.9, C.ink);
    const chX = er.x + er.w * 0.62, open = P(L, 7.4, 0.8);
    Anima.receptor(chX, er.y + H * 0.01, s * 0.8, "#a9d8ee", open, { shape: "tri" });
    const caLeft = 1 - P(L, 7.8, 3);
    for (let k = 0; k < 7; k++) if (rnd(k + 2) < caLeft + 0.15) Anima.ion(er.x + er.w * (0.12 + k * 0.1), er.y + er.h * (0.35 + rnd(k) * 0.2), H * 0.02, "Ca", C.ca);
    // PIP2：膜里的脂质，被剪成 IP3（头）+ DAG（尾巴）
    const px = W * (n ? 0.5 : 0.46), cut = P(L, 3, 0.6);
    const tailY = mem;
    ctx.fillStyle = C.dag; outline(1.2);
    for (const d of [-1, 1]) { rrect(px + d * s * 0.22 - s * 0.12, tailY - mt * 0.45, s * 0.24, mt * 0.9, s * 0.1); ctx.fill(); ctx.stroke(); }
    const ipT = P(L, 4.2, 3.2);
    const ipX = lerp(px, chX, ipT), ipY = lerp(mem + mt / 2 + s * 0.35, er.y - s * 1.3, ipT) - Math.sin(ipT * Math.PI) * H * 0.05;
    if (cut < 1) { outline(1.2); ctx.beginPath(); ctx.moveTo(px, mem + mt * 0.3); ctx.lineTo(px, mem + mt / 2 + s * 0.2); ctx.stroke(); }
    if (L < 8.5) coin(ipX + (cut < 1 ? 0 : 0), ipY, s * 0.42, 1 - P(L, 7.8, 0.7), "IP3", C.ip3);
    if (cut >= 1) text("DAG", px, mem - mt - fsS() * 0.2, fsS() * 0.85, C.ink);
    if (L > 3 && L < 4) sfx("咔嚓！", px + s * 1.5, mem + H * 0.12, H * 0.045, C.warn, -0.1, Math.sin(P(L, 3, 1) * Math.PI));
    // 磷脂酶 C（拿剪刀）和 Gq
    const plx = px - s * 1.5;
    chara(plx, fy, s, { who: "AChE", label: "PLC", hair: "#8fa6d6", cloth: "#e3ebff", hatColor: "#b8c8f0", item: "scissors", arms: "hold", eyes: L > 2.6 ? "happy" : "open", dir: 1 });
    const walk = P(L, 0.8, 2), grx = W * 0.1, gra = P(L, 0.1, 0.8);
    const grc = gpcr(grx, mem, s, gra, "#aee6d3");
    chara(grx, grc.site.y, s, { who: "5HT", eyes: "happy", arms: "up" });
    galpha(lerp(grx, plx - s * 1.7, walk), fy, s, "q", "GTP", { walk: walk < 1 ? time * 9 : null, eyes: "happy" });
    // 钙离子涌出，DAG + Ca²⁺ 叫醒蛋白激酶 C
    if (open > 0.2) for (let k = 0; k < 6; k++) {
      const t = ((L - 7.6) * 0.35 + k / 6) % 1;
      const x = lerp(chX, W * (n ? 0.66 : 0.64) + (rnd(k) - 0.3) * W * 0.12, t), y = lerp(er.y - s, mem + H * 0.16 + rnd(k + 5) * H * 0.2, t);
      ctx.save(); ctx.globalAlpha *= Math.min(1, Math.sin(t * Math.PI) * 2) * open; Anima.ion(x, y, H * 0.02, "Ca", C.ca); ctx.restore();
    }
    const kOn = P(L, 9.6, 1.4), kx = lerp(W * 0.86, px + s * 1.9, P(L, 8.4, 2)), kfy = lerp(H * 0.95, fy, P(L, 8.4, 2));
    chara(kx, kfy, s, { who: "neuron", label: "PKC", hat: "cap", hair: "#e0a23a", cloth: "#fff1c9", hatColor: "#ffd27a", dir: -1,
      gray: 0.7 * (1 - kOn), eyes: kOn > 0.5 ? "sparkle" : "sleepy", arms: kOn > 0.5 ? "up" : "down", walk: L > 8.4 && L < 10.4 ? time * 8 : null });
    if (kOn > 0.5) { sparkles(kx, kfy - s * 1.6, s * 2, 4, kOn, 9); sfx("盖章！", kx + s * 1.6, kfy - s * 2.8, H * 0.04, C.bad, 0.1, Math.sin(time * 3) * 0.3 + 0.7); }
    callout("g2p", L > 3.2 && L < 7, px + s * 0.1, mem, px + W * 0.16, mem - H * 0.15, "PIP2 被剪成 IP3 + DAG");
    callout("g2i", L > 7.2 && L < 10.4, chX, er.y - s * 0.6, chX + W * 0.2, er.y - H * 0.12, "IP3 打开钙仓库");
    callout("g2k", L > 10.4, kx + s * 0.4, kfy - s * 1.6, W * 0.62, mem - H * 0.15, "DAG + Ca²⁺ 叫醒蛋白激酶 C");
    ctx.restore();
  }

  // ---------- 第 4 幕：同一把钥匙，不同的门 ----------
  function v3(a) {
    const L = T(3), n = N(), s = csz() * (n ? 0.9 : 0.95), mem = H * (n ? 0.4 : 0.38);
    ctx.save(); ctx.globalAlpha *= a;
    const mt = bg(mem);
    ctx.save(); ctx.setLineDash([5, 7]); outline(1.4); ctx.beginPath(); ctx.moveTo(W / 2, Anima.topSafe() + 4); ctx.lineTo(W / 2, H - 8); ctx.stroke(); ctx.restore();
    const R = [
      { x: 0.13, who: "DA", name: "D1", g: "s", eff: "cAMP ↑", col: "#d4f5e6" },
      { x: 0.36, who: "DA", name: "D2", g: "i", eff: "cAMP ↓", col: "#ffdfe3" },
      { x: 0.64, who: "5HT", name: "5-HT1A", g: "i", eff: "cAMP ↓", col: "#ffdfe3" },
      { x: 0.87, who: "5HT", name: "5-HT2A", g: "q", eff: "Ca²⁺ ↑", col: "#e8e3ff" },
    ];
    const fs = fsS() * (n ? 0.85 : 0.9);
    R.forEach((r, i) => {
      const x = W * r.x, act = P(L, 2.6 + i * 0.3, 0.8), rc = gpcr(x, mem, s * 0.9, act, r.who === "DA" ? "#ffc9a3" : "#aee6d3");
      const dn = P(L, 0.3 + i * 0.3, 2.2);
      chara(lerp(x + (i < 2 ? -1 : 1) * W * 0.05, x, dn), lerp(Anima.topSafe() + s * 3.2, rc.site.y, dn), s, { who: r.who, walk: dn < 1 ? time * 9 : null, eyes: act > 0.5 ? "happy" : "open", arms: act > 0.5 ? "up" : "hold", item: act > 0.5 ? null : "letter" });
      chip(r.name, x, mem + mt / 2 + fs * 0.95, "#fff", fs);
      const ga = P(L, 3.4 + i * 0.4, 1), fy = mem + mt / 2 + fs * 1.9 + s * 3.2;
      galpha(x, fy, s, r.g, ga > 0.5 ? "GTP" : "GDP", { gray: 0.6 * (1 - ga), eyes: ga > 0.5 ? (r.g === "i" ? "closed" : "happy") : "sleepy", arms: ga > 0.5 && r.g === "i" ? "shh" : undefined });
      const ea = P(L, 5.4 + i * 0.4, 0.8);
      if (ea > 0.02) { ctx.save(); ctx.globalAlpha *= ea; chip(r.eff, x, fy + fs * 1.2, r.col, fs * 1.05); ctx.restore(); }
    });
    callout("g3a", L > 7 && L < 12.5, W * 0.245, mem + mt / 2 + fs * 4.6 + s * 3.2, W * 0.25, H * (n ? 0.76 : 0.93), "多巴胺：D1 油门，D2 刹车");
    callout("g3b", L > 8 && L < 12.5, W * 0.755, mem + mt / 2 + fs * 4.6 + s * 3.2, W * 0.75, H * 0.93, "5-HT：1A 刹车，2A 开钙库");
    say("g3s", L > 5.5 && L < 9.5, W * 0.36, mem - s * 3.4, W * 0.5, Anima.topSafe() + H * 0.07, "同一封信，结果不一样？", "think");
    ctx.restore();
  }

  // ---------- 第 5 幕：GTP 水解，自动停下 ----------
  function v4(a) {
    const L = T(4), n = N(), s = csz(), mem = H * (n ? 0.44 : 0.42);
    ctx.save(); ctx.globalAlpha *= a;
    const mt = bg(mem), fy = mem + mt / 2 + s * 3.25;
    const ex = W * (n ? 0.66 : 0.62), rx = W * 0.2;
    const lv = P(L, 7, 2.5), rc = gpcr(rx, mem, s, 1 - lv, C.rec);
    chara(lerp(rx, W * 0.02, lv), lerp(rc.site.y, Anima.topSafe() + s * 3.1, lv), s, { who: "DA", dir: lv > 0 ? -1 : 1, walk: lv > 0 && lv < 1 ? time * 9 : null, eyes: "happy", arms: lv > 0 ? "wave" : "up", alpha: 1 - P(L, 9, 1.5) });
    const hyd = P(L, 5, 0.6), off = P(L, 5.2, 1.6), back = P(L, 6.6, 3.2), join = P(L, 9.8, 0.6);
    const e = enzyme(ex, mem, s, time * (0.3 + 3.5 * (1 - off)), off > 0.5 ? 0 : 1, off * 0.5);
    stream(ex, e.out.y, 7 * (1 - off) + 0.3, H * 0.022, H - e.out.y - H * 0.06, 31);
    const bx = rx - s * 1.4;
    bgPair(bx, mem + mt / 2, s, join > 0.5 ? 1 : 0);
    const gx = lerp(ex - s * 1.8, bx + s * 2.6, back);
    galpha(gx, fy, s, "s", hyd < 0.5 ? "GTP" : "GDP", { dir: back > 0 && back < 1 ? -1 : 1, walk: back > 0 && back < 1 ? time * 8 : null,
      eyes: hyd < 0.5 ? "happy" : join > 0.5 ? "happy" : "sleepy", mouth: hyd < 0.5 ? "grin" : "smile" });
    // 计时器
    const tm = clamp((L - 0.8) / 4.2, 0, 1), cx = gx + s * 1.1, cy = fy - s * 3.6, cr = s * 0.5;
    if (L < 6.5) {
      ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, cr * 0.8, -Math.PI / 2, -Math.PI / 2 + tm * Math.PI * 2); ctx.closePath(); ctx.fillStyle = Anima.alpha(C.rose, 0.7); ctx.fill();
    }
    if (hyd > 0 && L < 7.5) { const t = P(L, 5, 1.8); coin(gx + s * (0.6 + t * 1.6), fy - s * (0.9 + t * 1.2), s * 0.28, 1 - t, "P", "#ffe36e"); }
    if (L > 5 && L < 6.3) sfx("噗～", gx + s * 1.8, fy - s * 2.6, H * 0.045, C.warn, -0.1, Math.sin(P(L, 5, 1.3) * Math.PI));
    if (join > 0.5 && L < 12) sparkles(bx + s, mem + mt / 2 + s * 1.2, s * 2.2, 4, join, 12);
    callout("g4t", L > 1 && L < 6.4, cx, cy, W * (n ? 0.62 : 0.5), mem - H * 0.14, "自带计时器：把 GTP 切成 GDP");
    callout("g4j", L > 10, bx + s * 0.5, mem + mt / 2 + s * 1.1, W * 0.26, H * 0.93, "回到 βγ 身边，等下一封信");
    say("g4s", L > 6.2 && L < 9.8, gx, fy - s * 3.2, W * 0.45, H * 0.88, "时间到，下班～", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：信号放大 ----------
  function v5(a) {
    const L = T(5), n = N(), s = csz() * 0.9, mem = H * (n ? 0.4 : 0.38);
    ctx.save(); ctx.globalAlpha *= a;
    const mt = bg(mem), fy = mem + mt / 2 + s * 3.25;
    const rx = W * 0.1, rc = gpcr(rx, mem, s, 1, C.rec);
    chara(rx, rc.site.y, s, { who: "DA", eyes: "happy", arms: "wave" });
    const XS = n ? [0.34, 0.6, 0.86] : [0.3, 0.47, 0.64, 0.81];
    const pts = [];
    XS.forEach((xf, i) => {
      const x = W * xf, t0 = 1 + i * 1.1, on = P(L, t0, 0.8), mOn = P(L, t0 + 3.6, 1);
      const e = enzyme(x + s * 0.9, mem, s * 0.8, time * (0.3 + mOn * 3.5), mOn > 0.5 ? 1 : 0, 0.5 * (1 - mOn));
      if (on > 0.02) {
        // 从受体一路传过来的光点
        const sp = P(L, t0 - 0.9, 0.9);
        if (sp < 1) Anima.spark([[rx, mem + mt], [x - s * 0.9, fy - s * 2]], sp, H * 0.02, C.gold);
        galpha(x - s * 0.9, fy, s * 0.85, "s", "GTP", { alpha: on, eyes: "sparkle", arms: "hold" });
      } else galpha(x - s * 0.9, fy, s * 0.85, "s", "GDP", { gray: 0.6, eyes: "sleepy" });
      if (mOn > 0.2) stream(x + s * 0.9, e.out.y, mOn * 8, H * 0.018, H - e.out.y - H * 0.04, 40 + i * 7, "cAMP", null, 0.3);
      pts.push(x);
    });
    if (L > 8.5 && L < 10.5) sfx("放大！", W * 0.55, H * 0.8, H * 0.07, C.bad, -0.12, Math.sin(P(L, 8.5, 2) * Math.PI));
    callout("g5r", L > 1.5 && L < 7, rx + s * 0.8, mem + mt, W * 0.3, H * 0.93, "1 个受体 → 很多 G 蛋白");
    callout("g5c", L > 7.5, pts[1] + s * 0.9, mem + H * 0.26, W * 0.62, mem - H * 0.15, "每台机器 → 很多 cAMP");
    say("g5d", L > 0.8 && L < 5.5, rx, rc.site.y - s * 3.2, W * (n ? 0.4 : 0.3), mem - H * 0.16, "我只敲了一下门……", "say");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    [v0, v1, v2, v3, v4, v5].forEach((f, i) => { const a = S["v" + i]; if (a > 0.02) f(a); });
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0913a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: 13, accent: "#e0913a",
    titleCard: { lines: ["三种接力：", "G 蛋白和第二信使"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update() {}, draw,
  };
});
