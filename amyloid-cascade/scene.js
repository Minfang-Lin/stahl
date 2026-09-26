Anima.register("amyloid-cascade", {
    "title": "淀粉样蛋白的连锁反应",
    "tag": "痴呆",
    "headline": "斑块是怎样【一步步】堆起来的？",
    "lede": "阿尔茨海默病里的斑块和缠结，并不是凭空出现的。从细胞膜上的一根长蛋白开始，剪刀手剪错了地方，小碎片抱成团、堆成斑块，又牵连出 tau 缠结和炎症，这就是“淀粉样蛋白级联假说”。",
    "summary": "APP 被 α 或 β、γ 分泌酶剪开，Aβ 聚成寡聚体和斑块，tau 过度磷酸化、微管散架，小胶质细胞引发炎症，以及抗 Aβ 抗体怎样帮忙清除。",
    "chapter": "对应 Stahl《精神药理学精要》第 12 章 · 淀粉样蛋白级联假说",
    "footer": "如果家人的记性明显变差、已经影响日常生活，可以去记忆门诊、神经内科或精神科做评估。",
    "canvasLabel": "剪刀手剪开细胞膜上的长蛋白，放出 Aβ 小碎片，碎片抱团成斑块、tau 从轨道上掉下来、清洁工小胶质细胞发火，最后抗体贴标签帮忙清除的动画",
    "regions": ["hippo"],
    "parts": ["dementia"],
    "cast": ["neuron", "drug"],
    "color": "#d4b36a"
  }, () => {
  const CH = [
    { title: "膜上的长蛋白", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["APP", "横跨细胞膜"], pill2: ["α 剪刀", "剪在中间"],
      text: "神经元的细胞膜上插着一根长长的蛋白质，叫淀粉样前体蛋白，简称 APP。它一头在细胞外，一头在细胞里，中间藏着一小段“Aβ”。大多数时候，一位叫 α 分泌酶的剪刀手会从这一小段的中间剪下去，Aβ 被剪成两半，也就做不出来了。这是一条安全的正常途径。",
      fact: "α 分泌酶剪在 Aβ 片段中间，所以这条途径不会产生 Aβ" },
    { title: "β 和 γ 两刀", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["剪法", "β → γ"], pill2: ["Aβ42", "更黏"],
      text: "另一条途径换了两位剪刀手。β 分泌酶先在 Aβ 片段的上方剪一刀，γ 分泌酶再在细胞膜里剪第二刀，一整段 Aβ 就被放了出来。γ 剪的位置有时靠前、有时靠后，所以 Aβ 有长有短：最常见的是 Aβ40，多出两个氨基酸的 Aβ42 更黏，更容易粘在一起。",
      fact: "β 分泌酶先剪、γ 分泌酶后剪，才会放出 Aβ；Aβ42 比 Aβ40 更容易聚集" },
    { title: "先抱团，再成斑块", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["小团", "寡聚体"], pill2: ["大堆", "斑块"],
      text: "Aβ 小碎片不爱单独待着，它们先几个几个抱成小团，叫可溶性寡聚体。科学家认为，这些小团可能是毒性最强的形式：它们黏在突触上，让信号变弱，树突上的小刺慢慢缩回去。小团越聚越多，最后在神经元外面堆成又大又硬的淀粉样斑块。",
      fact: "单个 Aβ → 小团（寡聚体）→ 斑块；伤突触最厉害的可能是小团" },
    { title: "tau 松手，轨道散架", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["tau", "扣住轨道"], pill2: ["运输", "顺畅"],
      text: "神经元里有一条条微管，像运送物资的轨道，tau 蛋白像扣件，把轨道扣得稳稳的。Aβ 的刺激会让激酶给 tau 贴上太多磷酸基团，也就是过度磷酸化。贴满标签的 tau 松开手，从轨道上掉下来，缠成神经纤维缠结。轨道散了架，送往突触的物资到不了，神经元越来越虚弱。",
      fact: "tau 过度磷酸化 → 离开微管、缠成一团 → 微管散开，运输中断" },
    { title: "清洁工也累坏了", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["小胶质", "来清扫"], pill2: ["炎症", "平稳"],
      text: "小胶质细胞是大脑里的清洁工和免疫卫士。它们发现斑块，就赶过来想把 Aβ 吃掉。可是 Aβ 越堆越多，清洁工一直处在激活状态，开始不停地放出炎症信号。这些信号本来是为了报警，却误伤了周围的神经元和突触，炎症和损伤互相加重，形成恶性循环。",
      fact: "小胶质细胞本想清除 Aβ，长期激活反而放出炎症信号、加重损伤" },
    { title: "抗体贴标签", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["抗体", "贴标签"], pill2: ["ARIA", "查磁共振"],
      text: "抗 Aβ 抗体药，比如仑卡奈单抗、多奈单抗，像贴标签的小帮手：它们认出 Aβ 并牢牢粘上去，小胶质细胞看到标签，就把它们清除掉，斑块变少了。它们用于早期、确认有淀粉样蛋白的患者，可能引起脑水肿或微出血，叫 ARIA，要定期做磁共振。级联假说仍有争议，但越早干预，意义可能越大。",
      fact: "抗体给 Aβ 贴标签、招来小胶质细胞清除；用药期间要用磁共振监测 ARIA" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    out: "#eef6fb", inn: "#fff0e6", mem: "#ffd9c7", app: "#cbbef2", ab: "#f2c15e", cterm: "#bfe8d6",
    plaque: "#c9b98e", tau: "#9b7fc0", mt: "#a9d8ee", soma: "#ffd3c4", dend: "#f7b9a8",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };
  const AB = { hair: "#e0a93e", eye: "#9a6a1e", cloth: "#fbe7bf", hat: "none", style: "spiky" };
  const SEC = (l, h, c, hc) => ({ who: "AChE", label: l, hair: h, cloth: c, hatColor: hc, item: "scissors", tag: l + " 分泌酶" });
  const ALPHA = SEC("α", "#6cc49a", "#dff5ea", "#9fdcc0");
  const BETA = SEC("β", "#e2849b", "#ffe0e8", "#f7b0c0");
  const GAMMA = SEC("γ", "#8f86e2", "#e4e0ff", "#b8b0f0");
  const GLIA = { hair: "#86c38b", eye: "#3f8a4a", cloth: "#dcf2d8", hat: "helmet", hatColor: "#a8dca8", style: "short", item: "broom", tag: "小胶质细胞" };
  const ANTI = { who: "drug", label: "", hatColor: "#8fcaf0", hatColor2: "#ffffff", tag: "抗 Aβ 抗体" };
  const KIN = { hair: "#f08a5d", eye: "#c0502a", cloth: "#ffe0cf", hat: "kerchief", hatColor: "#ffb48f", style: "bun", tag: "激酶" };

  function update() { lt = Anima.sceneTime; }
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => W / H < 1.5;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;

  function plate(t, x, y, fs, color, a) {
    if (a != null && a < 0.02) return;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    ctx.restore();
  }
  function blobPath(x, y, r, seed) {
    const n = 10, pts = [];
    for (let i = 0; i < n; i++) {
      const q = i / n * Math.PI * 2, rr = r * (0.8 + rnd(seed + i) * 0.34) + Math.sin(time * 1.3 + i * 2 + seed) * r * 0.03;
      pts.push([x + Math.cos(q) * rr, y + Math.sin(q) * rr * 0.86]);
    }
    ctx.beginPath();
    ctx.moveTo((pts[0][0] + pts[n - 1][0]) / 2, (pts[0][1] + pts[n - 1][1]) / 2);
    for (let i = 0; i < n; i++) { const p = pts[i], q = pts[(i + 1) % n]; ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2); }
    ctx.closePath();
  }
  function plaque(x, y, r, seed, a) {
    if (a < 0.02 || r < 2) return;
    ctx.save(); ctx.globalAlpha *= a;
    blobPath(x, y, r, seed);
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r * 1.1);
    g.addColorStop(0, "#e8dcb8"); g.addColorStop(1, C.plaque);
    ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.2, r * 0.05)); ctx.stroke();
    ctx.fillStyle = "rgba(140,110,60,0.35)";
    for (let i = 0; i < 9; i++) {
      const q = rnd(seed + i + 30) * Math.PI * 2, rr = r * 0.7 * rnd(seed + i + 40);
      ctx.beginPath(); ctx.arc(x + Math.cos(q) * rr, y + Math.sin(q) * rr, r * 0.06, 0, Math.PI * 2); ctx.fill();
    }
    if (r > 10) face(x, y + r * 0.05, r * 0.4, -0.6, false);
    ctx.restore();
  }
  function tangle(x, y, r, p, seed) {
    if (p < 0.02) return;
    ctx.save(); ctx.strokeStyle = C.tau; ctx.lineWidth = Math.max(1.5, r * 0.08); ctx.lineCap = "round";
    const n = Math.max(2, Math.round(24 * p));
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let k = 0; k < n; k++) {
      const q = rnd(seed + k) * Math.PI * 2, rr = r * (0.25 + rnd(seed + k + 50) * 0.75), cq = rnd(seed + k + 90) * Math.PI * 2;
      ctx.quadraticCurveTo(x + Math.cos(cq) * r * 1.1, y + Math.sin(cq) * r * 0.8, x + Math.cos(q) * rr, y + Math.sin(q) * rr * 0.7);
    }
    ctx.stroke(); ctx.restore();
  }
  // Aβ 小碎片（远处的小不点），sticky 时手上挂着黏黏的蜜
  function abMini(x, y, s, o) {
    chara(x, y, s, Object.assign({}, AB, { shadow: false }, o));
    if (o && o.sticky) {
      ctx.fillStyle = "#f5b83d"; outline(1);
      for (const d of [-1, 1]) {
        const hx = x + d * s * 0.75, hy = y - s * 0.55 + Math.abs(Math.sin(time * 3 + d)) * s * 0.15;
        ctx.beginPath(); ctx.ellipse(hx, hy, s * 0.16, s * 0.26, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      }
    }
  }
  function snip(x, y, w, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.setLineDash([5, 4]); ctx.strokeStyle = C.bad; ctx.lineWidth = 2.2;
    ctx.beginPath(); ctx.moveTo(x - w, y); ctx.lineTo(x + w, y); ctx.stroke(); ctx.restore();
  }

  // ---------- 第 1、2 幕：膜上的 APP ----------
  function appView(a) {
    const n = nar(), top = Anima.topSafe();
    const M = H * (n ? 0.64 : 0.58), mt = H * 0.075, ax = W * 0.5, cs = H * 0.045;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = C.out; ctx.fillRect(0, 0, W, M);
    ctx.fillStyle = C.inn; ctx.fillRect(0, M, W, H - M);
    Anima.bokeh(6, "#d6ecf7", 0.7, 12);
    // 细胞膜：上下两排磷脂小球
    ctx.fillStyle = C.mem; ctx.fillRect(0, M - mt / 2, W, mt);
    const pr = mt * 0.2;
    for (let x = pr; x < W; x += pr * 2.2) for (const yy of [M - mt / 2 + pr, M + mt / 2 - pr]) {
      ctx.beginPath(); ctx.arc(x, yy, pr, 0, Math.PI * 2); ctx.fillStyle = "#fff5ee"; ctx.fill(); outline(1); ctx.stroke();
    }
    const fs = fsz(0.03);
    plate("↑ 细胞外", fs * 3.2, M - mt / 2 - fs * 1.3, fs, "#fff");
    plate("↓ 细胞内", fs * 3.2, M + mt / 2 + fs * 1.3, fs, "#fff");
    // APP 的三段：上段（细胞外）、Aβ 段、下段（细胞内）
    const yT = M - H * 0.33, yB = M - H * 0.11, yA = M - H * 0.055, yG = M + mt * 0.15, yC = M + H * 0.2;
    const seg = (y0, y1, col, dx, dy, al) => {
      if (al < 0.02) return;
      ctx.save(); ctx.globalAlpha *= al;
      const w = H * 0.044;
      rrect(ax - w / 2 + dx, Math.min(y0, y1) + dy, w, Math.abs(y1 - y0), w / 2); ctx.fillStyle = col; ctx.fill(); outline(1.6); ctx.stroke();
      for (let y = y0 + w * 0.6; y < y1 - w * 0.3; y += w * 0.9) { ctx.beginPath(); ctx.arc(ax + dx, y + dy, w * 0.18, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,0.55)"; ctx.fill(); }
      ctx.restore();
    };
    const headR = H * 0.075;
    const head = (dx, dy, al, mood) => {
      if (al < 0.02) return;
      ctx.save(); ctx.globalAlpha *= al;
      ctx.beginPath(); ctx.ellipse(ax + dx, yT + dy, headR * 1.1, headR, 0, 0, Math.PI * 2); ctx.fillStyle = C.app; ctx.fill(); outline(1.8); ctx.stroke();
      face(ax + dx, yT + dy + headR * 0.1, headR * 0.5, mood);
      ctx.restore();
    };
    const s0 = cur === 0;
    if (s0) {
      // α：从 Aβ 中间剪
      const cut = lt > 5.2, f = prog(5.4, 4);
      const dx = W * 0.16 * f, dy = -H * (n ? 0.03 : 0.1) * f, al = 1 - f * 0.35;
      seg(yT + headR * 0.8, yB, C.app, dx, dy, al); seg(yB, yA, C.ab, dx, dy, al); head(dx, dy, al, 1);
      seg(yA, yG, C.ab, 0, 0, 1); seg(yG, yC, C.cterm, 0, 0, 1);
      snip(ax, yA, H * 0.05, lt > 4.6 && lt < 6.5 ? 1 : 0);
      if (lt > 5 && lt < 6.2) sfx("咔嚓！", ax + H * 0.1, yA - H * 0.02, H * 0.045, C.bad, -0.1, 1);
      if (f > 0.9) sparkles(ax + dx, yT + dy, headR * 1.8, 3, 1, 5);
      const wp = prog(1.8, 2.6), x = lerp(-cs * 2, ax - cs * 1.55, wp);
      chara(x, M - mt / 2, cs, Object.assign({}, ALPHA, { arms: wp < 1 ? "down" : "point", walk: wp < 1 && wp > 0 ? time * 9 : null, eyes: cut ? "happy" : "open", mouth: cut ? "grin" : "smile" }));
      callout("app", lt < 5, ax + H * 0.02, yT + headR * 0.5, ax + W * 0.2, yT + H * 0.02, "APP：一头在外，一头在里");
      callout("abseg", lt > 1.5 && lt < 7, ax + H * 0.02, yA, ax + W * 0.24, yA + H * 0.02, "Aβ 片段藏在这里");
      callout("sapp", lt > 8, ax + dx + headR, yT + dy, ax + dx + W * 0.08, yT + dy + H * 0.2, "Aβ 被剪成两半，无害");
      say("acut", lt > 3.8 && lt < 10.5, x, M - mt / 2 - cs * 3.2, n ? W * 0.2 : W * 0.24, M - H * 0.3, "从中间剪，Aβ 就做不成啦～", "say");
    } else {
      // β 先剪上面，γ 再剪膜里
      const fb = prog(3.6, 3.5), fg = prog(7, 1.6);
      seg(yT + headR * 0.8, yB, C.app, -W * 0.18 * fb, -H * 0.12 * fb, 1 - fb * 0.6); head(-W * 0.18 * fb, -H * 0.12 * fb, 1 - fb * 0.6, 0.6);
      const up = -H * 0.2 * fg, abA = 1 - prog(8.2, 0.8);
      seg(yB, yG, C.ab, 0, up, abA); seg(yG, yC, C.cterm, 0, 0, 1);
      snip(ax, yB, H * 0.05, lt > 2.8 && lt < 4.6 ? 1 : 0);
      snip(ax, yG, H * 0.05, lt > 6.2 && lt < 7.8 ? 1 : 0);
      if (lt > 3.2 && lt < 4.4) sfx("咔嚓！", ax + H * 0.1, yB - H * 0.02, H * 0.045, C.bad, -0.1, 1);
      if (lt > 6.6 && lt < 7.8) sfx("咔嚓！", ax + H * 0.1, yG + H * 0.04, H * 0.045, C.bad, -0.1, 1);
      const bp = prog(0.6, 2), bx = lerp(-cs * 2, ax - cs * 1.55, bp), by = M - mt / 2 - H * 0.055;
      chara(bx, M - mt / 2, cs, Object.assign({}, BETA, { arms: bp < 1 ? "down" : "point", walk: bp < 1 && bp > 0 ? time * 9 : null, dir: 1 }));
      const gp = prog(4.2, 2.2), gx = lerp(-cs * 2, ax - cs * 1.3, gp), gy = M + H * 0.2;
      chara(gx, gy, cs, Object.assign({}, GAMMA, { arms: gp < 1 ? "down" : "wave", walk: gp < 1 && gp > 0 ? time * 9 : null }));
      // 放出来的 Aβ：长的（42）和短的（40）
      const ab = prog(8.2, 1), abY = yB + up + H * 0.04, s2 = cs * 1.15;
      if (ab > 0.01) {
        const x42 = lerp(ax, ax + W * (n ? 0.2 : 0.16), prog(9.4, 1.4)), x40 = lerp(ax, ax + W * (n ? 0.38 : 0.3), prog(9.4, 1.4));
        ctx.save(); ctx.globalAlpha *= ab;
        if (lt > 9.4) abMini(x40, abY + H * 0.02, s2 * 0.92, { tag: "Aβ40", eyes: "open" });
        abMini(x42, abY + H * 0.02, s2, { tag: "Aβ42", eyes: lt > 10 ? "happy" : "wide", mouth: "cat", arms: lt > 10 ? "hug" : "up", sticky: lt > 9.8 });
        ctx.restore();
        if (lt > 8.2 && lt < 9.6) sfx("啵！", ax + H * 0.08, abY - H * 0.1, H * 0.05, "#e0a93e", -0.15, 1);
        callout("sticky", lt > 10.3, x42 + s2 * 0.8, abY - s2 * 0.4, x42 + W * 0.1, abY - H * 0.16, "Aβ42 多两个氨基酸，更黏");
      }
      callout("beta", lt > 3 && lt < 6.5, ax + H * 0.02, yB, ax + W * 0.22, yB - H * 0.08, "β 分泌酶：先剪上面");
      callout("gamma", lt > 6.3 && lt < 9.2, ax + H * 0.02, yG, ax + W * 0.2, M + H * 0.2, "γ 分泌酶：在膜里剪第二刀");
      say("bcut", lt > 1.8 && lt < 4.8, bx, by - cs * 2.4, n ? W * 0.18 : W * 0.2, M - H * 0.34, "我先剪这里～", "say");
    }
    ctx.restore();
  }

  // ---------- 第 3 幕：抱团和斑块 ----------
  function aggView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#eef6fb", "#f6effa");
    Anima.bokeh(7, "#dcd0f5", 0.7, 30);
    // 下方的树突和三个突触
    const dY = H * 0.88, sx = [0.56, 0.72, 0.88].map((k) => W * k), hr = H * 0.042;
    rrect(-10, dY, W + 20, H * 0.2, H * 0.05); ctx.fillStyle = C.dend; ctx.fill(); outline(2); ctx.stroke();
    text("树突", W * 0.08, dY + H * 0.055, fsz(0.03), C.ink);
    const hurt = [prog(6.2, 2.4), prog(6.8, 2.4), 0];
    const pl = prog(8.6, 3), PX = W * (n ? 0.24 : 0.22), PY = H * 0.56;
    sx.forEach((x, i) => {
      const hh = 1 - hurt[i] * 0.55, hy = dY - H * 0.14 * hh;
      ctx.strokeStyle = C.line; ctx.lineWidth = hr * 0.62; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(x, dY + 4); ctx.lineTo(x, hy); ctx.stroke();
      ctx.strokeStyle = C.dend; ctx.lineWidth = hr * 0.42; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x, hy, hr * hh, hr * 0.8 * hh, 0, 0, Math.PI * 2); ctx.fillStyle = mix(C.dend, "#d8d0d6", hurt[i]); ctx.fill(); outline(1.8); ctx.stroke();
      face(x, hy + hr * 0.1, hr * 0.5 * hh, 1 - hurt[i] * 1.6);
      const bY = dY - H * 0.14 - hr * 2.4;
      ctx.beginPath(); ctx.arc(x, bY, hr * 1.05, 0, Math.PI * 2); ctx.fillStyle = "#ffd6c4"; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.fillStyle = "#ff9a52"; for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(x - hr * 0.5 + k * hr * 0.33, bY + hr * 0.45 - (k % 2) * hr * 0.25, hr * 0.13, 0, Math.PI * 2); ctx.fill(); }
      const sig = 1 - hurt[i];
      if (sig > 0.1) { glow(x, (bY + hy) / 2, hr * 1.4, C.gold, sig * (0.6 + 0.3 * Math.sin(time * 5 + i))); sparkles(x, (bY + hy) / 2, hr, 2, sig, i * 9); }
      if (hurt[i] > 0.5) emote("sweat", x + hr, hy - hr, hr * 0.8);
    });
    plaque(PX, PY, H * 0.15 * pl, 3, 1);
    // 12 个 Aβ：游荡 → 抱成 3 个小团 → 两团贴到突触上 → 都堆进斑块
    const cY = dY - H * 0.14 - hr * 0.2;
    const G = [[sx[0] - hr * 1.6, cY + H * 0.02], [sx[1] - hr * 1.6, cY + H * 0.02], [W * 0.34, H * 0.36]];
    const Gm = [[W * 0.44, H * 0.46], [W * 0.5, H * 0.64], [W * 0.34, H * 0.36]];
    const s = H * 0.024;
    for (let i = 0; i < 12; i++) {
      const g = i % 3, k = Math.floor(i / 3), q = k / 4 * Math.PI * 2 + time * 0.5;
      const wx = W * (0.08 + rnd(i + 3) * 0.44) + Math.sin(time * 0.9 + i) * W * 0.02;
      const wy = top + H * 0.1 + rnd(i + 17) * (H * 0.7 - top) + Math.cos(time * 0.7 + i) * H * 0.02;
      const f1 = prog(2.2 + i * 0.06, 2.4), f2 = g < 2 ? prog(5, 1.6) : 0, f3 = prog(8.4 + i * 0.1, 2.2);
      const cx = lerp(Gm[g][0], G[g][0], f2), cy = lerp(Gm[g][1], G[g][1], f2);
      let x = lerp(wx, cx + Math.cos(q) * s * 1.3, f1), y = lerp(wy, cy + Math.sin(q) * s * 0.6, f1);
      x = lerp(x, PX + Math.cos(i) * H * 0.05, f3); y = lerp(y, PY + Math.sin(i) * H * 0.05, f3);
      if (f3 > 0.95) continue;
      ctx.save(); ctx.globalAlpha *= 1 - f3;
      abMini(x, y, s, { arms: f1 > 0.8 ? "hug" : "down", eyes: f1 > 0.8 ? "happy" : "open", mouth: "cat" });
      ctx.restore();
    }
    callout("olig", lt > 3.8 && lt < 6.4, Gm[2][0], Gm[2][1] - s * 3, n ? W * 0.3 : W * 0.28, top + H * 0.08, "寡聚体：几个抱成的小团");
    callout("syn", lt > 6.6 && lt < 10, sx[1], dY - H * 0.1, sx[1] - W * 0.02, top + H * 0.14, "突触信号变弱，小刺缩回去");
    callout("plq", lt > 10, PX, PY - H * 0.1, PX + W * 0.12, top + H * 0.06, "淀粉样斑块：越堆越大");
    say("weak", lt > 7.2 && lt < 11, sx[0], cY, sx[0] + W * 0.06, H * 0.4, "信号……听不清了", "think");
    callout("synA", lt < 3.6, sx[2], dY - H * 0.14 - hr * 1.2, sx[2] - W * 0.04, top + H * 0.14, "突触：两边隔着小缝传信");
    ctx.restore();
  }

  // ---------- 第 4 幕：tau 和微管 ----------
  function tauView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff4ec", "#fde9e4");
    const y0 = top + H * 0.16, y1 = H * 0.95, mY = H * 0.5;
    rrect(-20, y0, W + 40, y1 - y0, H * 0.08); ctx.fillStyle = C.inn; ctx.fill(); outline(2.2); ctx.stroke();
    text("神经元的轴突里", W * 0.97, y0 + H * 0.04, fsz(0.026), C.soft, "right");
    // Aβ 在外面放出刺激信号
    const sig = prog(1.6, 1);
    const ox = W * 0.12, oy = y0 - H * 0.05;
    for (let k = 0; k < 4; k++) abMini(ox + (k - 1.5) * H * 0.03, oy + H * 0.02, H * 0.018, { arms: "hug", eyes: "happy", shadow: false });
    if (sig > 0 && lt < 6.5) { Anima.bolt(ox + H * 0.08, y0 + H * 0.02, H * 0.03, sig, C.bad); }
    // 微管：一段段的轨道
    const NS = 8, L = (W + 40) / NS, broke = prog(7.8, 2.4);
    const segY = (i) => mY + (rnd(i + 5) - 0.5) * H * 0.12 * broke;
    const segX = (i) => -20 + i * L + (i - NS / 2) * L * 0.12 * broke;
    for (let i = 0; i < NS; i++) {
      ctx.save(); ctx.translate(segX(i) + L / 2, segY(i)); ctx.rotate((rnd(i + 9) - 0.5) * 0.5 * broke);
      rrect(-L / 2 + 2, -H * 0.022, L - 4, H * 0.044, H * 0.02); ctx.fillStyle = C.mt; ctx.fill(); outline(1.6); ctx.stroke();
      for (let k = 1; k < 4; k++) { ctx.beginPath(); ctx.moveTo(-L / 2 + k * L / 4, -H * 0.022); ctx.lineTo(-L / 2 + k * L / 4, H * 0.022); ctx.strokeStyle = "rgba(90,120,150,0.3)"; ctx.lineWidth = 1; ctx.stroke(); }
      ctx.restore();
    }
    // tau：站在接缝下面，举手扣住轨道
    const cs = H * 0.036, kx = lerp(-cs * 2, W * 0.95, prog(3, 3.6));
    const TX = W * 0.8, TY = H * 0.84;
    for (let i = 1; i < NS; i++) {
      const x = -20 + i * L, px = kx > x ? prog(3 + (x / W) * 3.6, 0.6) : 0;
      const fall = prog(6.2 + i * 0.12, 1.6);
      const fx = lerp(x, TX + (rnd(i) - 0.5) * H * 0.12, fall), fy = lerp(mY + cs * 3.3, TY + (rnd(i + 2) - 0.5) * H * 0.04, fall);
      ctx.save(); ctx.globalAlpha *= 1 - prog(8.4, 1) * 0.7;
      chara(fx, fy, cs, { hair: "#b39ae0", eye: "#6f55b0", cloth: "#ece4ff", style: "bob", label: "tau", hat: "none", arms: fall > 0.05 ? "up" : "carry",
        eyes: fall > 0.2 ? "dizzy" : px > 0.5 ? "wide" : "happy", mouth: fall > 0.2 ? "wavy" : "smile", shadow: fall < 0.1 });
      for (let k = 0; k < 3; k++) {
        const pk = clamp(px * 3 - k, 0, 1);
        if (pk <= 0) continue;
        const qx = fx + (k - 1) * cs * 0.7, qy = fy - cs * 1.2 - (k % 2) * cs * 0.5;
        ctx.beginPath(); ctx.arc(qx, qy, cs * 0.3 * pk, 0, Math.PI * 2); ctx.fillStyle = "#ff9a9a"; ctx.fill(); outline(1); ctx.stroke();
        if (pk > 0.8) text("P", qx, qy + 1, cs * 0.36, "#fff");
      }
      ctx.restore();
    }
    tangle(TX, TY - H * 0.04, H * 0.085, prog(8, 3), 7);
    const kw = lt > 3 && lt < 6.6;
    if (lt < 7.2) chara(kx, mY + cs * 3.3 + H * 0.02, cs * 1.05, Object.assign({}, KIN, { walk: kw ? time * 9 : null, arms: "hold", item: "star", alpha: 1 - prog(6.6, 0.6) }));
    // 运货小车：沿轨道跑，轨道散了就卡住
    const cartX = lt < 7.5 ? (W * 0.1 + ((lt * 0.12) % 1) * W * 0.8) : lerp(W * 0.1 + (((7.5 * 0.12) % 1)) * W * 0.8, W * 0.44, prog(7.5, 1.5));
    const ci = clamp(Math.floor((cartX + 20) / L), 0, NS - 1), cy = (broke > 0 ? segY(ci) : mY) - H * 0.022;
    Anima.vesicle(cartX, cy - H * 0.045, H * 0.042, "#ff9a52", 6, 3);
    ctx.strokeStyle = C.line; ctx.lineWidth = 2;
    const st = lt < 7.5 ? Math.sin(time * 10) * H * 0.008 : 0;
    ctx.beginPath(); ctx.moveTo(cartX - H * 0.012, cy - H * 0.01); ctx.lineTo(cartX - H * 0.018 + st, cy); ctx.moveTo(cartX + H * 0.012, cy - H * 0.01); ctx.lineTo(cartX + H * 0.018 - st, cy); ctx.stroke();
    if (lt > 9) { emote("?", cartX + H * 0.05, cy - H * 0.09, H * 0.03); emote("sweat", cartX - H * 0.04, cy - H * 0.07, H * 0.025); }
    callout("mt", lt < 3.2, W * 0.66, mY - H * 0.02, W * 0.72, y0 + H * 0.14, "微管：运物资的轨道");
    callout("tau", lt < 3.2, -20 + L * 2, mY + cs * 2, W * 0.42, H * 0.86, "tau：扣住轨道的扣件");
    callout("ph", lt > 4 && lt < 7.2, kx - H * 0.02, mY + cs * 2, n ? W * 0.4 : W * 0.35, H * 0.93, "磷酸基团 P：贴太多就松手");
    callout("tng", lt > 9, TX, TY - H * 0.1, TX - W * 0.12, top + H * 0.02, "神经纤维缠结");
    callout("sig", lt > 1.4 && lt < 4, ox + H * 0.06, y0, ox + W * 0.2, top + H * 0.01, "Aβ 的刺激");
    say("stuck", lt > 9.6, cartX, cy - H * 0.07, cartX - W * 0.14, cy + H * 0.2, "轨道断了，送不过去！", "shout");
    ctx.restore();
  }

  // ---------- 第 5 幕：小胶质细胞 ----------
  function neuronChar(x, y, s, hurt) {
    chara(x, y, s, { who: "neuron", gray: hurt * 0.8, eyes: hurt > 0.5 ? "teary" : "open", mouth: hurt > 0.5 ? "sad" : "smile", brow: hurt > 0.5 ? "worry" : null, tag: "神经元" });
  }
  function gliaView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash(mix("#eef6fb", "#fbe9e6", prog(7, 3)), "#f6effa");
    Anima.bokeh(6, "#dcd0f5", 0.7, 44);
    const PX = W * 0.46, PY = H * 0.6, R = H * 0.14, cs = H * 0.05, gy = H * 0.93;
    plaque(PX, PY, R, 11, 1);
    // 新的 Aβ 不断飘来
    for (let i = 0; i < 5; i++) {
      const t = ((lt * 0.12 + i / 5) % 1);
      abMini(lerp(PX + (rnd(i) - 0.3) * W * 0.3, PX, t), lerp(top + H * 0.05, PY - R * 0.6, t), H * 0.018, { arms: "hug", alpha: Math.sin(t * Math.PI), shadow: false });
    }
    const wp = prog(0.5, 2.2), gx = lerp(-cs * 2, PX - R - cs * 1.2, wp);
    const eat = lt > 2.8 && lt < 6.2, mad = lt > 6.2;
    chara(gx, gy, cs, Object.assign({}, GLIA, { walk: wp < 1 && wp > 0 ? time * 9 : null, arms: eat ? "hold" : mad ? "fist" : "down", item: eat ? null : "broom",
      eyes: mad ? "angry" : eat ? "happy" : "open", mouth: mad ? "open" : eat ? "cat" : "smile", brow: mad ? "angry" : null }));
    if (eat) for (let k = 0; k < 3; k++) {
      const t = ((lt - 2.8) * 0.6 + k / 3) % 1;
      abMini(lerp(PX - R * 0.6, gx + cs * 0.3, t), lerp(PY - R * 0.2, gy - cs * 1.2, t), H * 0.018 * (1 - t * 0.6), { alpha: 1 - t, shadow: false });
    }
    if (lt > 5 && lt < 7) emote("sweat", gx + cs, gy - cs * 3, cs * 0.7);
    if (mad) emote("anger", gx + cs * 0.9, gy - cs * 3, cs * 0.7);
    // 炎症信号：从清洁工身上往外冒的小火花
    const inf = prog(7, 1.5);
    if (inf > 0) for (let k = 0; k < 10; k++) {
      const t = (time * 0.35 + k / 10) % 1, q = -0.9 + (k / 10) * 1.6;
      const x = gx + Math.cos(q) * t * W * 0.5, y = gy - cs * 1.5 + Math.sin(q) * t * H * 0.35;
      ctx.save(); ctx.globalAlpha *= inf * Math.sin(t * Math.PI);
      Anima.bolt(x, y, H * 0.028, 1, k % 2 ? C.coral : C.warn);
      ctx.restore();
    }
    const hurt = prog(8.5, 2.5), nx = n ? [0.74, 0.9] : [0.76, 0.9];
    neuronChar(W * nx[0], gy, cs * 0.95, hurt); neuronChar(W * nx[1], gy - H * 0.02, cs * 0.9, prog(9.2, 2.5));
    if (hurt > 0.5) emote("gloom", W * nx[0], gy - cs * 3.4, cs * 0.7);
    callout("glia", lt > 1.2 && lt < 5, gx, gy - cs * 2, gx + W * 0.06, top + H * 0.1, "小胶质细胞：大脑的清洁工");
    callout("infl", lt > 7.6, gx + W * 0.15, gy - H * 0.22, n ? W * 0.5 : W * 0.56, top + H * 0.05, "炎症信号：误伤了邻居");
    say("eat", lt > 3 && lt < 6, gx, gy - cs * 3.2, gx + W * 0.03, H * 0.34, "我来吃掉 Aβ！", "say");
    say("mad", lt > 6.4 && lt < 10.5, gx, gy - cs * 3.2, gx + W * 0.04, H * 0.34, "扫不完啊！拉警报！", "shout");
    say("ouch", lt > 10.5, W * nx[0], gy - cs * 3.2, W * nx[0] - W * 0.06, H * 0.46, "好难受……", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：抗体 ----------
  function yTag(x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.lineCap = "round";
    for (const [w, c] of [[s * 0.42, C.line], [s * 0.26, "#8fcaf0"]]) {
      ctx.strokeStyle = c; ctx.lineWidth = w;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -s); ctx.lineTo(-s * 0.6, -s * 1.7); ctx.moveTo(0, -s); ctx.lineTo(s * 0.6, -s * 1.7); ctx.stroke();
    }
    ctx.restore();
  }
  function abView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f1f8fd", "#fdf2f6");
    Anima.petals(8, 0.5, 60);
    const cs = H * 0.048, gy = H * 0.93;
    const PX = W * (n ? 0.5 : 0.48), PY = H * 0.58, shrink = prog(5.2, 5), R = H * 0.15 * (1 - shrink * 0.6);
    plaque(PX, PY, R, 21, 1);
    // 抗体访客把 Y 形标签贴到斑块上
    const wp = prog(0.4, 2), ax = lerp(-cs * 2, PX - W * 0.2, wp);
    chara(ax, gy, cs, Object.assign({}, ANTI, { walk: wp < 1 && wp > 0 ? time * 9 : null, arms: lt > 2.4 && lt < 5 ? "wave" : "down", eyes: "happy", mouth: "grin" }));
    for (let i = 0; i < 7; i++) {
      const t0 = 2.4 + i * 0.3, f = prog(t0, 0.9), q = -Math.PI * 0.95 + i * 0.32;
      const gone = prog(6.5 + i * 0.45, 0.8);
      if (f <= 0 || gone >= 1) continue;
      const ex = PX + Math.cos(q) * R * 0.95, ey = PY + Math.sin(q) * R * 0.85;
      const x = lerp(ax + cs, ex, f), y = lerp(gy - cs * 2.5, ey, f) - Math.sin(f * Math.PI) * H * 0.08;
      ctx.save(); ctx.globalAlpha *= 1 - gone;
      yTag(x, y, H * 0.03, q + Math.PI / 2 + Math.PI);
      ctx.restore();
    }
    const mx = W * (n ? 0.82 : 0.78), eat = lt > 5;
    chara(mx, gy, cs * 1.05, Object.assign({}, GLIA, { dir: -1, arms: eat ? "hold" : "down", item: eat ? null : "broom", eyes: eat ? "happy" : "open", mouth: eat ? "cat" : "smile" }));
    if (lt > 4.2 && lt < 5.6) emote("!", mx, gy - cs * 3.4, cs * 0.7);
    if (eat && shrink < 0.98) for (let k = 0; k < 3; k++) {
      const t = ((lt - 5) * 0.55 + k / 3) % 1;
      const ex = lerp(PX + R * 0.6, mx - cs * 0.3, t), ey = lerp(PY, gy - cs * 1.2, t);
      abMini(ex, ey, H * 0.02 * (1 - t * 0.6), { alpha: 1 - t, shadow: false });
      ctx.save(); ctx.globalAlpha *= 1 - t; yTag(ex + H * 0.012, ey - H * 0.03, H * 0.016, 0.4); ctx.restore();
    }
    if (shrink > 0.9) sparkles(PX, PY, R * 2, 4, 1, 3);
    // ARIA 小卡片：磁共振
    const ca = prog(9.4, 0.8);
    if (ca > 0.02) {
      ctx.save(); ctx.globalAlpha *= ca;
      const fs = fsz(0.026); ctx.font = `${fs}px ${Anima.ROUND}`;
      const chh = H * 0.2, cw = chh * 0.9 + ctx.measureText("水肿 / 微出血").width + fs * 1.4, cx = W * 0.03, cy = top + H * 0.04;
      rrect(cx, cy, cw, chh, 14); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.8); ctx.stroke();
      const rx = cx + chh * 0.45, ry = cy + chh * 0.5;
      ctx.beginPath(); ctx.arc(rx, ry, chh * 0.32, 0, Math.PI * 2); ctx.fillStyle = "#dfe6ee"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.beginPath(); ctx.arc(rx, ry, chh * 0.16, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      text("ARIA", cx + chh * 0.85 + (cw - chh * 0.85) / 2, cy + chh * 0.3, fs * 1.1, C.bad);
      text("水肿 / 微出血", cx + chh * 0.85 + (cw - chh * 0.85) / 2, cy + chh * 0.55, fs, C.ink);
      text("定期磁共振", cx + chh * 0.85 + (cw - chh * 0.85) / 2, cy + chh * 0.8, fs, C.ink);
      ctx.restore();
    }
    callout("anti", lt > 2.6 && lt < 6.5, PX - R * 0.8, PY - R * 0.5, n ? W * 0.3 : W * 0.26, top + H * 0.1, "抗体：给 Aβ 贴上标签");
    callout("clr", lt > 6.5 && lt < 10, PX + R * 0.6, PY - R * 0.3, n ? W * 0.62 : W * 0.66, top + H * 0.1, "小胶质细胞按标签清除");
    say("see", lt > 4.4 && lt < 8, mx, gy - cs * 3.2, mx - W * 0.06, H * 0.36, "有标签！交给我～", "say");
    say("early", lt > 10.2, PX, PY - R, W * 0.72, H * 0.42, "越早清理，意义可能越大", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 3) { v1 = lt > 4 ? (lt > 6.5 ? "松手了" : "被贴 P") : v1; v2 = lt > 7.8 ? "中断" : v2; }
    if (cur === 4) { v1 = lt > 6.2 ? "过度激活" : v1; v2 = lt > 7 ? "加重" : v2; }
    pill(14, 12, c.pill[0], v1, "#c28a1e", false);
    pill(W - 14, 12, c.pill2[0], v2, "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) appView(S.v0);
    if (S.v1 > 0.02) aggView(S.v1);
    if (S.v2 > 0.02) tauView(S.v2);
    if (S.v3 > 0.02) gliaView(S.v3);
    if (S.v4 > 0.02) abView(S.v4);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#d4a13a",
    titleCard: { lines: ["淀粉样蛋白的", "连锁反应"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
