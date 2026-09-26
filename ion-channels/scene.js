Anima.register("ion-channels", {
    "title": "离子通道：药物的另一扇门",
    "tag": "基础篇",
    "headline": "神经元膜上的【小门】，也是药物的靶点",
    "lede": "神经元的膜上开着许多只让离子进出的小门，叫离子通道。有的门要递质当钥匙，有的门感应电压自己开关。NMDA 的双重锁、苯二氮䓬坐的“侧座”、抗癫痫药让钠通道歇一歇、加巴喷丁抓住钙通道的小亚基——都是在这些门上做文章。",
    "summary": "配体门控和电压门控两大家族、NMDA 的双重锁、变构调节、钠通道阻滞剂，以及作用于钙通道 α2δ 亚基的加巴喷丁和普瑞巴林。",
    "chapter": "对应 Stahl《精神药理学精要》第 3 章 · 离子通道作为药物靶点",
    "footer": "文中提到的药物都要在医生指导下使用，不要自行加量、减量或停药。",
    "canvasLabel": "拟人化的递质和药物访客在神经元膜上的离子通道小门前开门、关门的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["GABA", "Glu", "ACh", "drug"],
    "color": "#9fc9f2"
  }, () => {
  const CH = [
    { title: "两种开门方式", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["离子通道", "膜上的门"], pill2: ["两大家族", "钥匙/电压"],
      text: "神经元的膜上除了受体和回收门，还开着许多只让离子进出的小门，叫离子通道。按开门的方式，它们分成两大家族：配体门控通道要递质当钥匙，钥匙一插门就开；电压门控通道不认钥匙，它们身上有电压感应器，膜上的电压一变，门就自己打开。",
      fact: "离子通道是一扇“门”：配体门控靠递质开门，电压门控靠电压开门" },
    { title: "钥匙开的门", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["配体门控", "收到就开"], pill2: ["反应", "几毫秒"],
      text: "配体门控通道本身就是受体。谷氨酸打开 AMPA 门，放钠离子进来，神经元更兴奋；乙酰胆碱打开烟碱型受体，也放阳离子进来；GABA 打开 GABA-A 门，放氯离子进来，神经元就安静下来，在《杏仁核的警报器》里我们见过它。递质一到门就开，所以这类信号特别快。",
      fact: "GABA-A、NMDA、AMPA、烟碱型乙酰胆碱受体，都是配体门控离子通道" },
    { title: "NMDA 的双重锁", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["NMDA", "双重锁"], pill2: ["开门条件", "钥匙＋电压"],
      text: "NMDA 受体是一扇特别谨慎的门。光有谷氨酸这把钥匙还不够，还要第二把钥匙：甘氨酸或 D-丝氨酸。更妙的是，门里还塞着一个镁离子塞子，只有神经元已经被兴奋起来、膜电位变了（去极化），塞子才被赶走，钠离子和钙离子才能冲进来。",
      fact: "NMDA 受体要谷氨酸＋甘氨酸（或 D-丝氨酸），还要去极化赶走镁离子，才能开门" },
    { title: "门上的另一个座位", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["变构调节", "侧座"], pill2: ["苯二氮䓬", "PAM"],
      text: "药物不一定要抢钥匙孔。门上还有别的座位，叫变构位点，坐在这里的药物自己不开门，而是改变门对钥匙的反应：让门更容易开的叫正性变构调节剂（PAM），让门更难开的叫负性变构调节剂（NAM）。苯二氮䓬就是 GABA-A 门的 PAM：GABA 在时，门开得更勤；GABA 不在，它打不开门。",
      fact: "变构调节剂不插钥匙孔，而是把门的“灵敏度”调高或调低" },
    { title: "让钠通道歇一歇", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["钠通道", "电压门控"], pill2: ["阻滞剂", "抗癫痫"],
      text: "动作电位靠电压门控钠通道一扇接一扇地开门，像接力一样沿着轴突往前跑。如果神经元放电太猛太密，就可能引发癫痫发作。卡马西平、拉莫三嗪等药物会结合在钠通道上，让刚开过的门多歇一会儿，高频乱放电被拦下，正常节奏的信号大多还能通过。其中一些药也用作心境稳定剂。",
      fact: "一些抗癫痫药（如卡马西平、拉莫三嗪）阻滞电压门控钠通道，部分也用于双相障碍" },
    { title: "抓住钙通道的小亚基", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["钙通道", "N、P/Q 型"], pill2: ["谷氨酸", "放得少了"],
      text: "递质要靠末梢上的电压门控钙通道放行才能释放。N 型和 P/Q 型钙通道身上有个小亚基叫 α2δ。加巴喷丁和普瑞巴林就结合在 α2δ 上：神经元过度兴奋时，钙离子进得少一些，谷氨酸等递质就不会被过量放出。它们常用于神经病理性疼痛，普瑞巴林在一些国家也用于焦虑。",
      fact: "加巴喷丁、普瑞巴林名字像 GABA，其实作用在钙通道的 α2δ 亚基上" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    mem: "#f7c6d3", out: "#eef7fb", cell: "#ffeef2", gaba: "#c9c0f5", ampa: "#ffd27a", nic: "#f7b8d2",
    nmda: "#ffc98f", na: "#bfe3f5", cl: "#bfe8d6", ca: "#c8f0d8", mg: "#e8dcc8", vchan: "#a9d8ee", term: "#ffd6c4",
  });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const dr = { allo: 0, nm: 0, meter: 0 }; // 平滑过渡的开门程度

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
    const k = 1 - Math.exp(-dt * 9);
    dr.allo = lerp(dr.allo, alloTarget(), k);
    dr.nm = lerp(dr.nm, nmdaTarget(), 1 - Math.exp(-dt * 5));
    const mt = cur !== 3 ? 0 : (lt < 1.4 ? 0 : (lt < 5 ? 0.45 : (lt < 9 ? 0.9 : 0.04)));
    dr.meter = lerp(dr.meter, mt, 1 - Math.exp(-dt * 2.5));
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsS = () => Math.max(10, H * 0.028) * Anima.UI;
  const csz = () => H * (N() ? 0.052 : 0.048);

  // ---------- 共用零件 ----------
  function bg(memY) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#f4fbff"); g.addColorStop(memY / H - 0.02, C.out); g.addColorStop(memY / H + 0.02, C.cell); g.addColorStop(1, "#fff0f4");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.8, 70);
    Anima.petals(8, 0.45, 21);
  }
  // 一条横着的膜（磷脂双层画成一条带子，上下两排小圆点）
  function membrane(x0, x1, y, t) {
    ctx.fillStyle = C.mem; ctx.fillRect(x0, y - t, x1 - x0, t * 2);
    outline(Math.max(1.5, H * 0.004));
    ctx.beginPath(); ctx.moveTo(x0, y - t); ctx.lineTo(x1, y - t); ctx.moveTo(x0, y + t); ctx.lineTo(x1, y + t); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    const r = Math.max(1.4, H * 0.006);
    for (let x = x0 + 6; x < x1; x += Math.max(9, H * 0.026)) {
      ctx.beginPath(); ctx.arc(x, y - t * 0.55, r, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(x, y + t * 0.55, r, 0, Math.PI * 2); ctx.fill();
    }
  }
  function sideLabels(y, t) {
    const fs = fsS();
    text("细胞外", W - 12, y - t - fs * 1.1, fs, C.soft, "right");
    text("神经元里面", W - 12, y + t + fs * 1.1, fs, C.soft, "right");
  }
  // 细胞外飘着的离子（外面的 Na⁺、Cl⁻、Ca²⁺ 比里面多）
  function ambient(y0, y1, list, n, seed) {
    for (let i = 0; i < n; i++) {
      const it = list[i % list.length];
      const x = ((rnd(seed + i) * W + time * 8 * (rnd(seed + i + 50) - 0.5)) % W + W) % W;
      const y = lerp(y0, y1, rnd(seed + i + 20)) + Math.sin(time * 0.9 + i) * H * 0.012;
      ctx.save(); ctx.globalAlpha *= 0.55;
      Anima.ion(x, y, H * 0.017, it[0], it[1]);
      ctx.restore();
    }
  }
  // 离子通道：两扇半门跨在膜上，open 0～1。o.keys 钥匙孔，o.sensor 电压感应器，o.plug 镁离子塞子，o.label 名牌，o.flip 上下翻转（外面在下）
  function chan(x, y, hw, hh, col, open, o) {
    o = o || {};
    const f = o.flip ? -1 : 1;
    const gap = hw * (0.1 + 0.5 * clamp(open, 0, 1));
    const top = y - hh * f, bot = y + hh * 0.75 * f;
    if (open > 0.2) glow(x, y, hh * 1.3, o.glow || C.gold, open * 0.8);
    const keys = [];
    for (const side of [-1, 1]) {
      const x0 = side < 0 ? x - gap - hw : x + gap;
      const yy = Math.min(top, bot), hgt = Math.abs(bot - top);
      rrect(x0, yy, hw, hgt, hw * 0.42);
      ctx.fillStyle = col; ctx.fill(); outline(Math.max(1.4, hw * 0.07)); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.45)"; rrect(x0 + hw * 0.2, yy + hgt * 0.12, hw * 0.15, hgt * 0.55, hw * 0.07); ctx.fill();
      if (o.sensor) { // 电压感应器：门柱中间一个带闪电的小圆牌
        const sx = x0 + hw / 2, sy = y;
        ctx.beginPath(); ctx.arc(sx, sy, hw * 0.3, 0, Math.PI * 2); ctx.fillStyle = open > 0.5 ? "#fff1a8" : "#ffffff"; ctx.fill(); outline(1.2); ctx.stroke();
        Anima.bolt(sx, sy, hw * 0.22, 1, open > 0.5 ? C.gold : "#e6dccb");
      }
      keys.push({ x: x0 + hw / 2, y: top });
    }
    (o.keys || []).forEach((kk) => {
      const p = keys[kk.side < 0 ? 0 : 1], r = hw * 0.24, ky = p.y + r * 0.9 * f;
      ctx.fillStyle = kk.color || "#ffffff"; outline(1.3);
      ctx.beginPath();
      if (kk.shape === "square") ctx.rect(p.x - r, ky - r, r * 2, r * 2);
      else if (kk.shape === "tri") { ctx.moveTo(p.x, ky - r); ctx.lineTo(p.x + r, ky + r * 0.8); ctx.lineTo(p.x - r, ky + r * 0.8); ctx.closePath(); }
      else ctx.arc(p.x, ky, r, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
    });
    if (o.label) pending.push(() => {
      const fs = fsS();
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(o.label).width + fs * 1.1;
      const ly = bot + fs * 1.1 * f;
      rrect(x - tw / 2, ly - fs * 0.72, tw, fs * 1.44, fs * 0.72); ctx.fillStyle = "rgba(255,255,255,0.94)"; ctx.fill(); outline(1.3); ctx.stroke();
      text(o.label, x, ly + 1, fs, C.ink);
    });
    return { top, bot, gap, keys };
  }
  // 门的名牌要盖在离子上面：先记下来，画完离子再统一画
  let pending = [];
  function flushLabels() { pending.forEach((f) => f()); pending = []; }
  // 离子流：open 时从一侧穿过门流到另一侧，关着时在门口打转
  function ionFlow(p) {
    const n = p.n || 6, r = p.r || H * 0.022, spread = p.spread || H * 0.25;
    for (let k = 0; k < n; k++) {
      const sx = p.x + (rnd(p.seed + k * 3) - 0.5) * spread, ex = p.x + (rnd(p.seed + k * 5 + 1) - 0.5) * spread;
      if (p.open > 0.04) {
        const t = (time * (p.speed || 0.45) + k / n) % 1;
        let x, y, a = 1;
        if (t < 0.4) { const q = ease(t / 0.4); x = lerp(sx, p.x, q); y = lerp(p.yA, p.yIn, q); a = clamp(t * 8, 0, 1); }
        else if (t < 0.55) { const q = (t - 0.4) / 0.15; x = p.x; y = lerp(p.yIn, p.yOut, q); }
        else { const q = ease((t - 0.55) / 0.45); x = lerp(p.x, ex, q); y = lerp(p.yOut, p.yB, q); a = 1 - q; }
        ctx.save(); ctx.globalAlpha *= a * clamp(p.open * 1.5, 0, 1);
        Anima.ion(x, y, r, p.lab, p.col);
        ctx.restore();
      }
      if (p.open < 0.96 && !p.noHover) {
        const x = lerp(sx, p.x, 0.55) + Math.sin(time * 1.3 + k * 2) * r, y = lerp(p.yA, p.yIn, 0.55 + 0.25 * rnd(p.seed + k)) + Math.cos(time * 1.7 + k) * r * 0.6;
        ctx.save(); ctx.globalAlpha *= 1 - p.open;
        Anima.ion(x, y, r, p.lab, p.col);
        ctx.restore();
      }
    }
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 16; ctx.shadowOffsetY = 5;
    rrect(x, y, w, h, 20); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 20); ctx.stroke();
    const fs = Math.max(12, Math.min(W / 38, h * 0.07)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function arrowLine(x0, y0, x1, y1, col, w) {
    ctx.strokeStyle = col; ctx.lineWidth = w || 2.2; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    const q = Math.atan2(y1 - y0, x1 - x0), s = (w || 2.2) * 3.2;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - Math.cos(q - 0.5) * s, y1 - Math.sin(q - 0.5) * s);
    ctx.moveTo(x1, y1); ctx.lineTo(x1 - Math.cos(q + 0.5) * s, y1 - Math.sin(q + 0.5) * s); ctx.stroke();
  }
  // 画面淡出时（已经不是本幕）用“幕末”的时间，免得时间线从头再演一遍
  const T = (k) => (cur === k ? lt : 99);

  // ================= 第 1 幕：两种开门方式 =================
  function view0(a) {
    const L0 = T(0);
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6fbff", "#fdf0f5");
    Anima.petals(12, 0.6, 50);
    const top = Math.max(H * 0.22, Anima.topSafe() + H * 0.06), ch = H * 0.94 - top, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, N() ? "配体门控" : "配体门控：钥匙开门", "#fff1b8");
    card(R.x, R.y, R.w, R.h, N() ? "电压门控" : "电压门控：电压开门", "#dff0fb");
    const hw = Math.min(H * 0.055, cw * 0.09), hh = H * 0.095, mt = H * 0.03, cs = Math.min(H * 0.058, cw * 0.1);
    // 左卡：谷氨酸带着钥匙来开门
    const my = L.y + L.h * 0.58, lx = L.x + L.w * 0.5;
    ctx.save(); rrect(L.x, L.y, L.w, L.h, 20); ctx.clip();
    ctx.fillStyle = C.cell; ctx.fillRect(L.x, my, L.w, L.h);
    membrane(L.x, L.x + L.w, my, mt);
    const c = L0 % 5.2;
    const openL = ease((c - 1.5) / 0.3) * (1 - ease((c - 4.2) / 0.3));
    const dL = chan(lx, my, hw, hh, C.ampa, openL, { keys: [{ side: 1, shape: "square", color: "#fff6d6" }] });
    ionFlow({ x: lx, yA: my - hh - H * 0.12, yIn: my - hh * 0.6, yOut: my + hh * 0.5, yB: my + H * 0.2, open: openL, lab: "Na", col: C.na, n: 7, seed: 3, spread: cw * 0.6 });
    const key = dL.keys[1];
    let gx, gy = key.y, gw = null, ga = 1, gArms = "up", gEyes = "happy";
    if (c < 1.5) { const p = ease(c / 1.5); gx = lerp(L.x + L.w * 0.12, key.x, p); gy = lerp(my - hh - H * 0.02, key.y, p); gw = time * 9; gArms = "hold"; gEyes = "open"; }
    else if (c < 4.4) gx = key.x;
    else { const p = (c - 4.4) / 0.8; gx = lerp(key.x, L.x + L.w * 0.9, p); gw = time * 9; ga = 1 - p; gArms = "wave"; }
    chara(gx, gy, cs, { who: "Glu", arms: gArms, item: gArms === "hold" ? "key" : null, eyes: gEyes, mouth: openL > 0.5 ? "grin" : "smile", walk: gw, alpha: ga });
    if (openL > 0.5) sfx("咔嚓！", lx - L.w * 0.26, my - hh * 1.1, H * 0.04, "#e7a23a", -0.12, openL);
    ctx.restore();
    // 右卡：电信号沿膜跑过来，门自己打开
    const rx = R.x + R.w * 0.5;
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 20); ctx.clip();
    ctx.fillStyle = C.cell; ctx.fillRect(R.x, my, R.w, R.h);
    membrane(R.x, R.x + R.w, my, mt);
    const c2 = L0 % 4.4, st = c2 / 2.6;
    const openR = ease((st - 0.46) / 0.08) * (1 - ease((c2 - 3.4) / 0.3));
    const dR = chan(rx, my, hw, hh, C.vchan, openR, { sensor: true });
    ionFlow({ x: rx, yA: my - hh - H * 0.12, yIn: my - hh * 0.6, yOut: my + hh * 0.5, yB: my + H * 0.2, open: openR, lab: "Na", col: C.na, n: 7, seed: 9, spread: cw * 0.6 });
    if (st <= 1) Anima.spark([[R.x + R.w * 0.04, my + mt * 2.2], [R.x + R.w * 0.96, my + mt * 2.2]], st, H * 0.024, C.gold);
    // 小电压表
    const gx2 = R.x + R.w * 0.82, gy2 = my - hh - H * 0.06, gr = Math.min(H * 0.06, cw * 0.11);
    ctx.beginPath(); ctx.arc(gx2, gy2, gr, Math.PI, 0); ctx.closePath(); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.4); ctx.stroke();
    const needle = Math.PI * (1.15 + 0.7 * openR);
    ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(gx2, gy2); ctx.lineTo(gx2 + Math.cos(needle) * gr * 0.85, gy2 + Math.sin(needle) * gr * 0.85); ctx.stroke();
    text("电压", gx2, gy2 + fsS() * 0.8, fsS() * 0.9, C.soft);
    face(dR.keys[0].x - hw * 0.1, my + hh * 0.45, hw * 0.55, openR > 0.5 ? 1 : 0, false);
    ctx.restore();
    const fs = fsS();
    if (!N()) {
      text("钠离子冲进来", lx, L.y + L.h - fs * 1.4, fs, "#c88600");
      text("钠离子冲进来", rx, R.y + R.h - fs * 1.4, fs, C.skyDeep);
    }
    callout("i0-key", cur === 0 && win(2, 6.5), key.x, key.y - cs * 1.6, N() ? L.x + L.w * 0.5 : L.x + L.w * 0.3, N() ? L.y + L.h * 0.78 : L.y + L.h * 0.26, "递质就是钥匙");
    callout("i0-sen", cur === 0 && lt > 6.5, dR.keys[0].x - hw * 0.4, my, N() ? R.x + R.w * 0.5 : R.x + R.w * 0.3, N() ? L.y + L.h * 0.78 : L.y + L.h * 0.26, "电压感应器");
    say("i0-glu", cur === 0 && win(0.4, 3.2), gx, gy - cs * 3.1, L.x + L.w * 0.72, L.y + L.h * 0.2, "我带钥匙来啦！", "say");
    say("i0-v", cur === 0 && win(7, 11.5), rx, my - hh, R.x + R.w * 0.62, L.y + L.h * 0.24, "电来了，开门！", "shout");
    ctx.restore();
  }

  // ================= 第 2 幕：钥匙开的门 =================
  function view1(a) {
    const L1 = T(1);
    const mem = H * (N() ? 0.6 : 0.58), mt = H * 0.035;
    ctx.save(); ctx.globalAlpha *= a;
    bg(mem);
    const hw = H * 0.055, hh = H * 0.11, cs = csz();
    ambient(Anima.topSafe() + H * 0.02, mem - hh - H * 0.08, [["Na", C.na], ["Cl", C.cl]], 12, 300);
    const D = [
      { x: W * 0.2, col: C.gaba, who: "GABA", lab: "Cl", ic: C.cl, name: "GABA-A", t0: 0.6, shape: "round", eff: "安静～", ec: C.lavDeep },
      { x: W * 0.5, col: C.ampa, who: "Glu", lab: "Na", ic: C.na, name: "AMPA", t0: 2.4, shape: "square", eff: "兴奋！", ec: "#e7a23a" },
      { x: W * 0.8, col: C.nic, who: "ACh", lab: "Na", ic: C.na, name: "烟碱型", t0: 4.2, shape: "tri", eff: "兴奋！", ec: "#e7a23a" },
    ];
    membrane(-5, W + 5, mem, mt);
    const heads = [];
    D.forEach((d, i) => {
      const arrive = d.t0 + 1.4, open = ease((L1 - arrive) / 0.4);
      const g = chan(d.x, mem, hw, hh, d.col, open, { keys: [{ side: 1, shape: d.shape }], label: d.name });
      ionFlow({ x: d.x, yA: mem - hh - H * 0.14, yIn: mem - hh * 0.6, yOut: mem + hh * 0.5, yB: mem + H * 0.22, open, lab: d.lab, col: d.ic, n: 6, seed: i * 11, spread: W * 0.14 });
      const k = g.keys[1];
      const p = ease((L1 - d.t0) / 1.4);
      if (L1 > d.t0) {
        const x = lerp(d.x + W * 0.08, k.x, p), y = lerp(mem - hh - H * 0.2, k.y, p);
        chara(x, y, cs, { who: d.who, walk: p < 1 ? time * 9 : null, arms: p < 1 ? "hold" : (i === 0 ? "shh" : "up"), item: p < 1 ? "key" : null,
          eyes: p < 1 ? "open" : "happy", mouth: p < 1 ? "smile" : (i === 0 ? "cat" : "grin"), dir: -1, alpha: clamp((L1 - d.t0) * 3, 0, 1) });
        heads.push({ x, y: y - cs * 3.1 });
      } else heads.push(null);
      if (open > 0.3) sfx(d.eff, d.x, mem + H * (N() ? 0.21 : 0.26), H * 0.04, d.ec, i === 0 ? 0.08 : -0.1, open * (0.75 + 0.25 * Math.sin(time * 4 + i)));
    });
    flushLabels();
    if (!N()) sideLabels(mem, mt);
    const fy = N() ? H * 0.97 : mem + H * 0.33;
    callout("i1-gaba", cur === 1 && win(2.2, 6.3), D[0].x, mem + hh * 0.4, D[0].x + W * 0.05, fy, "GABA-A：放 Cl⁻ 进来，踩刹车");
    callout("i1-ampa", cur === 1 && win(6.3, 9.6), D[1].x, mem + hh * 0.4, D[1].x, fy, "AMPA：放 Na⁺ 进来，踩油门");
    callout("i1-nic", cur === 1 && lt > 9.6, D[2].x, mem + hh * 0.4, D[2].x - W * 0.05, fy, "烟碱型受体：乙酰胆碱的门");
    say("i1-g", cur === 1 && win(2.2, 5.8) && !!heads[0], heads[0] ? heads[0].x : 0, heads[0] ? heads[0].y : 0, W * 0.24, mem - H * 0.36, "嘘——大家安静一点～", "say");
    say("i1-u", cur === 1 && win(5.8, 10) && !!heads[1], heads[1] ? heads[1].x : 0, heads[1] ? heads[1].y : 0, W * 0.62, mem - H * 0.37, "油门踩下去！", "shout");
    ctx.restore();
  }

  // ================= 第 3 幕：NMDA 的双重锁 =================
  function nmdaTarget() {
    if (cur !== 2) return 0;
    if (lt < 2.3) return 0;
    if (lt < 4.4) return 0.12 + Math.abs(Math.sin(lt * 7)) * 0.08; // 只有一把钥匙：门抖一抖
    return 0.85;
  }
  function view2(a) {
    const L2 = T(2);
    const mem = H * (N() ? 0.62 : 0.6), mt = H * 0.035;
    ctx.save(); ctx.globalAlpha *= a;
    bg(mem);
    membrane(-5, W + 5, mem, mt);
    const dx = W * 0.5, hw = H * 0.075, hh = H * 0.14, cs = csz();
    ambient(Anima.topSafe() + H * 0.02, mem - hh - H * 0.1, [["Na", C.na], ["Ca", C.ca]], 10, 400);
    const plugOut = prog(8, 1.2);
    const open = cur === 2 ? dr.nm : 0.85;
    // 离子：塞子在的时候堵在门口，塞子走了就冲进来
    for (let k = 0; k < 5; k++) { // 挤在门口的离子
      const x = dx + (k - 2) * H * 0.045 + Math.sin(time * 2 + k) * H * 0.006, y = mem - hh - H * 0.05 - (k % 2) * H * 0.04;
      ctx.save(); ctx.globalAlpha *= (1 - plugOut) * clamp((L2 - 4.4) * 2, 0.35, 1);
      Anima.ion(x, y, H * 0.02, k % 2 ? "Ca" : "Na", k % 2 ? C.ca : C.na);
      ctx.restore();
    }
    const g = chan(dx, mem, hw, hh, C.nmda, open, { keys: [{ side: -1, shape: "square" }, { side: 1, shape: "round", color: "#e3f4fc" }], label: "NMDA 受体" });
    ionFlow({ x: dx, yA: mem - hh - H * 0.15, yIn: mem - hh * 0.5, yOut: mem + hh * 0.5, yB: mem + H * 0.24, open: plugOut, lab: "Na", col: C.na, n: 4, seed: 5, spread: W * 0.2, noHover: true });
    ionFlow({ x: dx, yA: mem - hh - H * 0.15, yIn: mem - hh * 0.5, yOut: mem + hh * 0.5, yB: mem + H * 0.24, open: plugOut, lab: "Ca", col: C.ca, n: 4, seed: 17, spread: W * 0.2, speed: 0.38, noHover: true });

    // 镁离子塞子：一个圆滚滚的小胖子，被电一下就“啵”地掉出去
    const mgr = H * 0.04;
    const mgx = lerp(dx, dx + W * 0.2, plugOut), mgy = lerp(mem, mem + H * 0.2, plugOut) - Math.sin(plugOut * Math.PI) * H * 0.08;
    ctx.beginPath(); ctx.arc(mgx, mgy, mgr, 0, Math.PI * 2); ctx.fillStyle = C.mg; ctx.fill(); outline(1.6); ctx.stroke();
    face(mgx, mgy + mgr * 0.15, mgr * 0.7, plugOut > 0.9 ? 1 : 0);
    if (plugOut > 0.9) sfx("Ca²⁺ 进来：学习和记忆的信号", dx, mem + H * 0.3, H * 0.036, C.mintDeep, -0.04, prog(9.5, 1));
    text("Mg²⁺", mgx, mgy - mgr * 1.45, fsS() * 0.9, C.ink);
    if (plugOut > 0.05 && plugOut < 0.95) sfx("啵！", mgx + mgr * 2, mgy - mgr, H * 0.045, "#ff9a52", -0.15, Math.sin(plugOut * Math.PI));
    // 去极化：电信号沿膜从左边跑过来
    if (L2 > 6.2 && L2 < 8.3) Anima.spark([[-10, mem + mt * 2.4], [dx - hw, mem + mt * 2.4]], (L2 - 6.2) / 1.9, H * 0.028, C.gold);
    if (L2 > 8 && L2 < 9) Anima.speedLines(dx, mem, H * 0.2, 26, (1 - Math.abs(L2 - 8.5) * 2) * 0.6);
    // 两把钥匙
    const k1 = g.keys[0], k2 = g.keys[1];
    const p1 = prog(0.6, 1.6), p2 = prog(2.8, 1.6);
    const gluX = lerp(dx - W * 0.28, k1.x, p1), gluY = lerp(mem - hh - H * 0.18, k1.y, p1);
    chara(gluX, gluY, cs, { who: "Glu", walk: p1 < 1 ? time * 9 : null, arms: p1 < 1 ? "hold" : (plugOut > 0.5 ? "up" : "down"), item: p1 < 1 ? "key" : null,
      eyes: plugOut > 0.5 ? "happy" : (L2 > 2.3 ? "open" : "open"), mouth: plugOut > 0.5 ? "grin" : (L2 > 2.3 && L2 < 8 ? "wavy" : "smile"), dir: 1 });
    const glyX = lerp(dx + W * 0.28, k2.x, p2), glyY = lerp(mem - hh - H * 0.18, k2.y, p2);
    if (L2 > 2.8) chara(glyX, glyY, cs * 0.92, { who: "neuron", hair: "#8cc8e8", eye: "#3f86b0", cloth: "#e3f4fc", hat: "beret", hatColor: "#bfe3f5", style: "bob", label: "Gly",
      walk: p2 < 1 ? time * 9 : null, arms: p2 < 1 ? "hold" : (plugOut > 0.5 ? "up" : "down"), item: p2 < 1 ? "key" : null, eyes: plugOut > 0.5 ? "happy" : "open", dir: -1, tag: "甘氨酸", alpha: clamp((L2 - 2.8) * 3, 0, 1) });
    if (L2 > 2.3 && L2 < 4.4) emote("?", gluX + cs * 0.9, gluY - cs * 3.4, cs * 0.7);
    flushLabels();
    if (plugOut > 0.8) { sparkles(dx, mem + H * 0.18, H * 0.12, 5, 1, 31); }
    sideLabels(mem, mt);
    const top = Anima.topSafe() + H * 0.04;
    callout("i2-gly", cur === 2 && win(4.6, 7.4), k2.x + hw * 0.3, k2.y - cs * 1.5, N() ? W * 0.68 : dx + W * 0.26, top + H * 0.02, "第二把钥匙：甘氨酸或 D-丝氨酸");
    callout("i2-mg", cur === 2 && win(3.2, 8.2), mgx - mgr, mgy, N() ? W * 0.22 : dx - W * 0.25, mem + H * 0.2, "镁离子塞子");
    callout("i2-dep", cur === 2 && lt > 8.4, dx - hw, mem + mt * 2.4, N() ? W * 0.3 : dx - W * 0.25, N() ? top + H * 0.1 : mem + H * 0.24, "去极化：把塞子赶走");
    say("i2-q", cur === 2 && win(1.8, 4.4), gluX, gluY - cs * 3.1, gluX - W * 0.03, top + H * 0.08, "咦？门怎么没开？", "think");
    say("i2-mg2", cur === 2 && win(5, 8), mgx + mgr, mgy, N() ? W * 0.78 : dx + W * 0.28, mem + H * 0.2, "被电一下，我才让开～", "say");
    ctx.restore();
  }

  // ================= 第 4 幕：变构调节 =================
  function alloTarget() {
    if (cur !== 3) return 0;
    if (lt < 1.4) return 0;
    if (lt < 5) return ((lt - 1.4) % 2.2) < 0.8 ? 1 : 0;
    if (lt < 9) return ((lt - 5) % 0.9) < 0.6 ? 1 : 0;
    return 0;
  }
  function view3(a) {
    const L3 = T(3);
    const mem = H * (N() ? 0.62 : 0.6), mt = H * 0.035;
    ctx.save(); ctx.globalAlpha *= a;
    bg(mem);
    membrane(-5, W + 5, mem, mt);
    const dx = W * (N() ? 0.46 : 0.42), hw = H * 0.06, hh = H * 0.12, cs = csz();
    ambient(Anima.topSafe() + H * 0.02, mem - hh - H * 0.1, [["Cl", C.cl]], 8, 500);
    const open = cur === 3 ? dr.allo : 0;
    const g = chan(dx, mem, hw, hh, C.gaba, open, { keys: [{ side: 1, shape: "round", color: "#f3f0ff" }], label: "GABA-A" });
    ionFlow({ x: dx, yA: mem - hh - H * 0.16, yIn: mem - hh * 0.5, yOut: mem + hh * 0.5, yB: mem + H * 0.24, open, lab: "Cl", col: C.cl, n: L3 > 5 && L3 < 9 ? 9 : 6, seed: 41, spread: W * 0.2, speed: L3 > 5 && L3 < 9 ? 0.75 : 0.45 });
    flushLabels();
    // 变构位点：左半门外侧的小方座
    const gap = g.gap, seatX = dx - gap - hw - cs * 0.9, seatY = mem - mt - cs * 1.1;
    // 小椅子：座面 + 连到门柱上的椅背
    rrect(seatX - cs * 0.9, seatY, cs * 1.8, cs * 0.45, cs * 0.15); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.4); ctx.stroke();
    rrect(seatX - cs * 0.65, seatY + cs * 0.45, cs * 0.25, mem - mt - seatY - cs * 0.45, cs * 0.08); ctx.fill(); ctx.stroke();
    rrect(seatX + cs * 0.4, seatY + cs * 0.45, cs * 0.25, mem - mt - seatY - cs * 0.45, cs * 0.08); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(seatX + cs * 0.9, seatY + cs * 0.2); ctx.lineTo(dx - gap - hw, seatY + cs * 0.2); ctx.stroke();
    // GABA：第 1～9 秒站在钥匙孔上，之后离开
    const key = g.keys[1];
    const pIn = prog(0.2, 1.2), pOut = prog(9, 1.4);
    const gx = lerp(lerp(dx + W * 0.2, key.x, pIn), dx + W * 0.16, pOut), gy = lerp(lerp(mem - hh - H * 0.2, key.y, pIn), mem - hh - H * 0.26, pOut);
    chara(gx, gy, cs, { who: "GABA", walk: (pIn < 1 || (pOut > 0 && pOut < 1)) ? time * 9 : null, arms: pIn < 1 ? "hold" : (pOut > 0 ? "wave" : "shh"), item: pIn < 1 ? "key" : null,
      eyes: "happy", mouth: "cat", dir: pOut > 0 ? 1 : -1, alpha: 1 - pOut * 0.9 });
    // 苯二氮䓬访客：第 5 秒走到侧座上
    const pD = prog(4.2, 1.2);
    const bx = lerp(-W * 0.05, seatX, pD), by = seatY - cs * 0.7;
    if (L3 > 4.2) chara(bx, by, cs, { who: "drug", label: "BZ", hatColor: "#9ad8b0", hatColor2: "#fff1b8", walk: pD < 1 ? time * 9 : null,
      arms: L3 > 9.5 ? "down" : (pD < 1 ? "down" : "point"), eyes: L3 > 9.5 ? "open" : "happy", mouth: L3 > 9.5 ? "wavy" : "smile", dir: 1, tag: "苯二氮䓬" });
    if (L3 > 9.8) emote("sweat", bx + cs * 0.9, by - cs * 3.2, cs * 0.6);
    // 右边的“开门次数”量表
    const mx = W * (N() ? 0.86 : 0.82), mTop = mem - H * 0.36, mH = H * 0.3, mW = H * 0.06;
    const lvS = dr.meter;
    rrect(mx - mW / 2, mTop, mW, mH, mW / 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.save(); rrect(mx - mW / 2, mTop, mW, mH, mW / 2); ctx.clip();
    ctx.fillStyle = C.cl; ctx.fillRect(mx - mW / 2, mTop + mH * (1 - lvS), mW, mH * lvS);
    ctx.restore();
    const fs = fsS();
    text("开门次数", mx, mTop - fs * 1.0, fs, C.ink);
    const phase = L3 < 5 ? "只有 GABA" : (L3 < 9 ? "GABA＋苯二氮䓬" : "只有苯二氮䓬");
    text(phase, mx, mem + mt + fs * 1.6, fs, C.lavDeep);
    if (L3 > 5.5 && L3 < 9) sfx("开得更勤！", mx - mW * 1.6, mTop + mH * 0.12, H * 0.035, C.mintDeep, -0.12, 1);
    if (!N()) sideLabels(mem, mt);
    callout("i3-seat", cur === 3 && win(5.4, 9.2), seatX, seatY, N() ? W * 0.2 : seatX - W * 0.04, mem + H * 0.22, "变构位点：门上的另一个座位");
    say("i3-help", cur === 3 && win(5.8, 9), bx, by - cs * 3.1, N() ? W * 0.3 : bx + W * 0.06, mem - H * 0.4, "我只帮它开得更勤～", "say");
    say("i3-no", cur === 3 && lt > 10, bx, by - cs * 3.1, N() ? W * 0.3 : bx + W * 0.08, mem - H * 0.4, "没有 GABA，我开不了门…", "think");
    ctx.restore();
  }

  // ================= 第 5 幕：钠通道 =================
  function view4(a) {
    const L4 = T(4);
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4fbff", "#fdf0f5");
    Anima.bokeh(6, "#cfeaf7", 0.8, 12);
    const ay = H * (N() ? 0.64 : 0.62), th = H * 0.075, x0 = W * 0.14, x1 = W * 0.86;
    const storm = L4 > 4.5 && L4 < 9 ? 1 : 0;
    // 轴突：一根横着的管子，上边是膜
    rrect(x0, ay - th, x1 - x0, th * 2, th); ctx.fillStyle = C.cell; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = C.mem; ctx.fillRect(x0 + th * 0.5, ay - th - H * 0.012, x1 - x0 - th, H * 0.024);
    // 细胞体和末梢
    const sr = H * 0.1;
    ctx.beginPath(); ctx.arc(x0, ay, sr, 0, Math.PI * 2); ctx.fillStyle = "#ffd3c4"; ctx.fill(); outline(2); ctx.stroke();
    face(x0, ay + sr * 0.1, sr * 0.5, storm ? -1 : 1);
    if (storm) { emote("sweat", x0 + sr * 0.8, ay - sr * 0.9, sr * 0.35); }
    const tr = H * 0.07;
    ctx.beginPath(); ctx.arc(x1, ay, tr, 0, Math.PI * 2); ctx.fillStyle = storm ? Anima.mix("#ffd6c4", "#ff9a9a", 0.5 + 0.5 * Math.sin(time * 14)) : C.term; ctx.fill(); outline(2); ctx.stroke();
    // 钠通道们
    const nC = 6, chs = [];
    for (let i = 0; i < nC; i++) chs.push(lerp(x0 + sr * 1.4, x1 - tr * 1.6, i / (nC - 1)));
    const blockIdx = [1, 3];
    // 电信号：一串从细胞体出发的光点
    const speed = (x1 - x0) / 1.6;
    const sparks = [];
    const emit = (tStart, tEnd, every, blockMode) => {
      for (let t = tStart, i = 0; t < tEnd; t += every, i++) {
        const age = L4 - t;
        if (age < 0) continue;
        let x = x0 + sr + age * speed;
        let dead = false;
        if (blockMode && i % 3 !== 0) { // 太密的信号在药物把守的门前停下
          const bX = chs[blockIdx[0]];
          if (x > bX) { dead = true; if (age * speed + x0 + sr - bX > W * 0.08) continue; x = bX; }
        }
        if (x > x1 + tr) continue;
        sparks.push({ x, dead, fade: dead ? clamp(1 - (age * speed + x0 + sr - chs[blockIdx[0]]) / (W * 0.08), 0, 1) : 1 });
      }
    };
    emit(0.3, 4.5, 2.1, false);
    emit(4.5, 9, 0.42, false);
    emit(9, 14, 0.42, true);
    // 顶上的“放电记录”：末梢收到的每一个信号画一根竖线
    const arr = [], travel = (x1 - x0 - sr) / speed;
    const addArr = (tS, tE, every, blockMode) => { for (let t = tS, i = 0; t < tE; t += every, i++) if (!blockMode || i % 3 === 0) arr.push(t + travel); };
    addArr(0.3, 4.5, 2.1, false); addArr(4.5, 9, 0.42, false); addArr(9, 14, 0.42, true);
    const rx0 = W * (N() ? 0.08 : 0.22), rx1 = W * (N() ? 0.92 : 0.78), ry = Anima.topSafe() + H * (N() ? 0.1 : 0.08), rh = H * 0.1;
    rrect(rx0, ry, rx1 - rx0, rh, H * 0.02); ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill(); outline(1.5); ctx.stroke();
    text("末梢收到的信号", rx0 + H * 0.02, ry - fsS() * 0.8, fsS(), C.soft, "left");
    ctx.save(); rrect(rx0, ry, rx1 - rx0, rh, H * 0.02); ctx.clip();
    ctx.strokeStyle = Anima.alpha(C.line, 0.3); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(rx0, ry + rh * 0.75); ctx.lineTo(rx1, ry + rh * 0.75); ctx.stroke();
    const span = 6;
    arr.forEach((ta) => {
      const age = L4 - ta;
      if (age < 0 || age > span) return;
      const x = rx1 - H * 0.02 - (age / span) * (rx1 - rx0 - H * 0.04);
      ctx.strokeStyle = ta > 4.5 + travel && ta < 9 + travel ? C.bad : C.skyDeep; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(x, ry + rh * 0.75); ctx.lineTo(x, ry + rh * 0.18); ctx.stroke();
    });
    ctx.restore();
    const drugOn = prog(9, 1);
    chs.forEach((cx, i) => {
      let near = 0;
      sparks.forEach((s) => { if (!s.dead) near = Math.max(near, 1 - clamp(Math.abs(s.x - cx) / (H * 0.07), 0, 1)); });
      const blocked = drugOn > 0.5 && blockIdx.indexOf(i) >= 0;
      const op = blocked ? near * 0.25 : near;
      // 门在管子上方的膜里
      chan(cx, ay - th, H * 0.03, H * 0.05, blocked ? Anima.mix(C.vchan, "#d6d0d8", 0.5) : C.vchan, op, { sensor: false });
      // 门外排队的钠离子，门一开就掉进去
      for (let k = 0; k < 2; k++) {
        const t = clamp(op * 1.4 - k * 0.2, 0, 1);
        const ix = cx + (k - 0.5) * H * 0.05 * (1 - t), iy = lerp(ay - th - H * 0.085 - k * H * 0.02, ay - th * 0.1, t);
        ctx.save(); ctx.globalAlpha *= 1 - t * 0.6;
        Anima.ion(ix, iy, H * 0.019, "Na", C.na);
        ctx.restore();
      }
    });
    sparks.forEach((s) => {
      if (s.fade < 0.05) return;
      ctx.save(); ctx.globalAlpha *= s.fade;
      glow(s.x, ay, H * 0.07, C.gold, 1); Anima.bolt(s.x, ay, H * 0.028, 1, C.gold);
      if (s.dead) sfx("噗", s.x + H * 0.04, ay + th * 1.3, H * 0.032, C.soft, 0.1, s.fade);
      ctx.restore();
    });
    if (storm) {
      sfx("噼里啪啦！", x1 - W * 0.06, ay + tr + H * 0.1, H * 0.045, C.bad, 0.1, 0.7 + 0.3 * Math.sin(time * 10));
      for (let k = 0; k < 3; k++) Anima.bolt(x1 + (k - 1) * tr * 0.8, ay - tr * 1.5 + Math.sin(time * 13 + k) * 3, tr * 0.3, 0.9, C.gold);
    }
    // 药物访客站在两扇被把守的门旁边
    const cs = csz();
    const heads = [];
    blockIdx.forEach((bi, j) => {
      if (drugOn <= 0) return;
      const x = chs[bi] + cs * 0.1, y = ay - th - H * 0.075;
      ctx.save(); ctx.globalAlpha *= drugOn;
      chara(x, y - (1 - drugOn) * H * 0.1, cs, { who: "drug", label: j ? "LTG" : "CBZ", hatColor: j ? "#ffb3c7" : "#9fc9f2", hatColor2: "#ffffff", arms: "shh", eyes: "happy", mouth: "cat", dir: j ? -1 : 1, tag: j ? "拉莫三嗪" : "卡马西平" });
      ctx.restore();
      if (drugOn > 0.5) emote("zzz", chs[bi] + H * 0.035, ay - th - H * 0.03, H * 0.03);
      heads.push({ x, y: y - cs * 3.1 });
    });
    const fs = fsS();
    text("细胞体", x0, ay + sr + fs * 1.2, fs, C.soft);
    text("末梢", x1, ay + tr + fs * 1.2, fs, C.soft);
    const low = ay + H * 0.24;
    callout("i4-na", cur === 4 && win(0.8, 4.6), chs[2], ay + th, W * 0.4, low, "电压门控钠通道：一扇接一扇开门");
    callout("i4-storm", cur === 4 && win(4.8, 9), x1 - tr * 0.7, ay + tr * 0.7, W * 0.45, low, "放电太密：可能引发癫痫发作");
    callout("i4-blk", cur === 4 && lt > 9.4, chs[1], ay + th, W * 0.35, low, "阻滞剂：让刚开过的门多歇一会儿");
    say("i4-s", cur === 4 && win(5, 8.8), x0, ay - sr, W * 0.3, ay - H * 0.22, "停、停不下来啦！", "shout");
    say("i4-d", cur === 4 && win(10, 13.5) && heads.length > 1, heads[1] ? heads[1].x : 0, heads[1] ? heads[1].y : 0, W * 0.7, ay - H * 0.2, "跑太快的，先歇歇～", "say");
    ctx.restore();
  }

  // ================= 第 6 幕：钙通道 α2δ =================
  function view5(a) {
    const L5 = T(5);
    ctx.save(); ctx.globalAlpha *= a;
    const bgr = ctx.createLinearGradient(0, 0, 0, H);
    bgr.addColorStop(0, "#fff4ef"); bgr.addColorStop(0.5, C.out); bgr.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bgr; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.8, 90);
    const cx = W * (N() ? 0.5 : 0.45), tw = Math.min(W * (N() ? 0.8 : 0.56), H * 1.05), th = H * (N() ? 0.44 : 0.42);
    const post = H * 0.84;
    const calm = prog(6, 3);
    Anima.postMembrane(post, "#ffe0ea", { face: true, faceX: N() ? W * 0.14 : W * 0.86, mood: calm > 0.6 ? 1 : -1 });
    // 突触后的受体
    for (let i = 0; i < 4; i++) Anima.receptor(cx - tw * 0.33 + i * tw * 0.22, post, H * 0.035, "#ffd27a", L5 < 6 ? 0.8 : 0.3 + 0.2 * Math.sin(time * 2 + i), { shape: "square" });
    const T0 = Anima.terminal(cx, 0, tw, th, C.term);
    const bot = T0.bot;
    // 钙通道（外面在下面，所以翻过来画）
    const chX = cx - tw * 0.2, hw = H * 0.032, hh = H * 0.05;
    const busy = L5 < 6 ? 1 : 0.35;
    const openCa = busy * (0.6 + 0.4 * Math.sin(time * (L5 < 6 ? 10 : 3)));
    ionFlow({ x: chX, yA: bot + H * 0.2, yIn: bot + hh * 0.5, yOut: bot - hh * 0.5, yB: bot - H * 0.16, open: L5 < 6 ? 1 : lerp(1, 0.35, calm), lab: "Ca", col: C.ca, n: L5 < 6 ? 9 : 3, seed: 61, spread: W * 0.12, speed: L5 < 6 ? 0.8 : 0.35, noHover: true });
    chan(chX, bot, hw, hh, C.vchan, openCa, { flip: true, sensor: true });
    // α2δ 亚基：挂在通道外侧的小圆包
    const ax = chX + hw * 2.3, ay2 = bot + hh * 0.9, ar = H * 0.034;
    const drawA2d = () => {
      ctx.beginPath(); ctx.moveTo(ax - ar * 1.1, ay2 - ar * 0.4); ctx.lineTo(chX + hw * 1.1, bot + hh * 0.4); outline(1.4); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(ax, ay2, ar * 1.2, ar, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe3a8"; ctx.fill(); ctx.stroke();
      face(ax, ay2 + ar * 0.15, ar * 0.62, calm > 0.5 ? 1 : 0, false);
      text("α2δ", ax - ar * 0.2, ay2 + ar * 1.75, fsS() * 0.95, C.ink);
    };
    // 电信号不停地往下跑
    const apEvery = L5 < 6 ? 0.7 : 1.6;
    const apT = (L5 % apEvery) / apEvery;
    Anima.spark([[cx, -10], [cx, th * 0.4], [chX, bot - H * 0.08]], apT, H * 0.024, C.gold);
    // 谷氨酸被放出来：从末梢底部掉到突触后膜
    const cs = csz() * 0.72;
    const relEvery = L5 < 6 ? 0.32 : 1.2;
    for (let k = 0; k < 40; k++) {
      const te = k * relEvery; const age = L5 - te;
      if (age < 0 || age > 1.6) continue;
      if (L5 >= 6 && te < 6) continue;
      const rx = cx + tw * (-0.05 + rnd(k + 3) * 0.35), p = ease(age / 1.4);
      chara(rx, lerp(bot + cs * 3.2, post - H * 0.005, p), cs, { who: "Glu", arms: "up", eyes: L5 < 6 ? "x" : "happy", mouth: "open", alpha: clamp((1.6 - age) * 3, 0, 1), shadow: false, seed: k });
    }
    if (L5 < 6) sfx("哗啦啦！", cx + tw * 0.28, bot + H * 0.14, H * 0.042, "#e7a23a", 0.12, 0.8);
    // 药物访客：第 6 秒走来抱住 α2δ
    const pD = prog(5.8, 1.4), dcs = csz();
    const dx2 = lerp(W * 1.05, ax + ar * 1.2 + dcs * 0.9, pD), dy2 = lerp(post - H * 0.02, ay2 + dcs * 1.05, pD);
    const drugY = dy2;
    if (L5 > 5.8) chara(dx2, drugY, dcs, { who: "drug", label: "PGB", hatColor: "#c3a6ec", hatColor2: "#ffffff", walk: pD < 1 ? time * 9 : null, arms: pD < 1 ? "down" : "point", eyes: "happy", mouth: "smile", dir: -1, tag: "普瑞巴林" });
    if (pD >= 1) { Anima.heart(ax + ar * 1.3, ay2 - ar * 1.3, ar * 0.35, C.rose); }
    drawA2d();
    const top = Anima.topSafe() + H * 0.03;
    callout("i5-ch", cur === 5 && win(0.8, 4.2), chX - hw, bot + hh * 0.5, N() ? W * 0.22 : chX - W * 0.2, bot + H * 0.12, "N、P/Q 型钙通道");
    callout("i5-a2d", cur === 5 && win(3, 6.2), ax + ar, ay2, N() ? W * 0.75 : ax + W * 0.22, bot + H * 0.02, "α2δ 亚基");
    callout("i5-drug", cur === 5 && lt > 7.2, ax, ay2 + ar, N() ? W * 0.35 : ax - W * 0.12, N() ? post - H * 0.08 : post - H * 0.14, "加巴喷丁、普瑞巴林抓住 α2δ");
    say("i5-go", cur === 5 && win(1.5, 5.8), cx + tw * 0.1, bot + H * 0.1, N() ? W * 0.72 : cx + tw * 0.62, bot + H * 0.02, "冲呀——！太多啦！", "shout");
    say("i5-d", cur === 5 && win(8, 12.5), dx2, drugY - dcs * 3.1, N() ? W * 0.76 : ax - W * 0.2, bot + H * 0.2, "少放一点，别那么吵～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#4f93c8", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    pending = [];
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) view0(S.v0);
    if (S.v1 > 0.02) view1(S.v1);
    if (S.v2 > 0.02) view2(S.v2);
    if (S.v3 > 0.02) view3(S.v3);
    if (S.v4 > 0.02) view4(S.v4);
    if (S.v5 > 0.02) view5(S.v5);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#6fa8dc",
    titleCard: { lines: ["神经元膜上的小门", "也是药物的靶点"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
