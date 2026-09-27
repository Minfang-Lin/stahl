Anima.register("neurotransmission-types", {
    "title": "三种送信方式：经典、逆行和容积传递",
    "tag": "基础篇",
    "headline": "神经元送信，不只【一种】方式",
    "lede": "《突触邮局》里的信是从前往后、一对一送到的。其实大脑还会倒着回信，也会像广播一样把信撒向远处；一个神经元还能同时寄出好几种信。这一集把这些送信方式放在一起看。",
    "summary": "经典（顺行）传递、兴奋-分泌偶联、逆行传递、容积传递（前额叶多巴胺靠扩散和 NET 清除）和共存递质。",
    "chapter": "对应 Stahl《精神药理学精要》第 1 章 · 神经传递的方式",
    "footer": "",
    "canvasLabel": "拟人化的递质快递员演示经典传递、电-钙-释放的偶联、倒着飘回的逆行信使、溢出突触向远处扩散的容积传递，以及小囊泡和大囊泡一起释放的共存递质",
    "regions": ["synapse", "pfc"],
    "parts": ["basics"],
    "cast": ["Glu", "DA", "5HT", "pump", "drug"],
    "color": "#f7b7a3"
  }, () => {
  const CH = [
    { title: "经典传递：一对一", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["方式", "经典"], pill2: ["方向", "前 → 后"],
      text: "最常见的送信方式叫经典传递，也叫顺行传递：突触前末梢放出递质，递质游过几十纳米宽的突触间隙，交给正对面突触后膜上的受体。就像打一通电话，一对一，又快又准，隔壁的门几乎收不到。《突触邮局》走过的就是这条路。这一集看看，大脑还有哪些送信方式。",
      fact: "经典（顺行）传递：突触前 → 突触后，精准地送到正对面的受体" },
    { title: "电 → 钙 → 释放", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["偶联", "电 → 钙 → 放"], pill2: ["关键", "Ca²⁺"],
      text: "送信的开关是怎么按下的？电信号（动作电位）沿着轴突跑到末梢，打开末梢膜上的电压门控钙通道；钙离子（Ca²⁺）涌进来，像按响门铃，囊泡赶紧贴到膜上、融合，把递质放出去。电、钙、释放，这一串叫兴奋-分泌偶联。没有钙离子进来，电信号再多，信也送不出去。",
      fact: "兴奋-分泌偶联：动作电位 → 钙通道开放、Ca²⁺ 内流 → 囊泡融合、释放递质" },
    { title: "逆行传递：倒着回信", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["方式", "逆行"], pill2: ["方向", "后 → 前"],
      text: "信也可以倒着送，这叫逆行传递：突触后神经元临时做出一种信使，让它从后往前飘回突触前末梢，告诉发信的一方“收到了，调一调吧”。内源性大麻素就是这样的回信，《倒着送的信》里见过它。一氧化氮（NO）是一种很小的气体分子，不用排队进门，能直接穿过细胞膜，也被认为能逆行传话。",
      fact: "逆行传递：突触后 → 突触前，例子有内源性大麻素和一氧化氮（NO）" },
    { title: "容积传递：像广播", v0: 0, v1: 1, v2: 0, v3: 0,
      pill: ["方式", "容积传递"], pill2: ["范围", "远处也收到"],
      text: "第三种方式像广播，叫容积传递。递质放出来以后，有一部分溢出突触间隙，在细胞外的液体里慢慢扩散，找到较远处的受体。这些受体常常不在突触里，而是散在树突和胞体旁边。多巴胺、5-HT、去甲肾上腺素这些单胺，常常这样送信：不是打电话，而是广而告之。",
      fact: "容积传递：递质扩散到突触以外、较远处的受体，单胺递质常这样起作用" },
    { title: "前额叶：多巴胺走得远", v0: 0, v1: 0, v2: 1, v3: 0,
      pill: ["脑区", "前额叶"], pill2: ["多巴胺回收", "靠 NET"],
      text: "举个例子：在前额叶皮层，多巴胺末梢上的回收门 DAT 很少。放出来的多巴胺回不了家，就在细胞外扩散，走得更远、停得更久，沿路敲响别处的受体。最后常常是附近去甲肾上腺素末梢上的回收门 NET 顺手把它收回。所以在前额叶，阻断 NET 的药物也能让多巴胺升高。",
      fact: "前额叶 DAT 很少，多巴胺主要靠扩散和 NET 清除；NET 抑制剂因此能升高前额叶多巴胺" },
    { title: "一位邮差，好几种信", v0: 0, v1: 0, v2: 0, v3: 1,
      pill: ["放电", "慢"], pill2: ["释放", "经典递质"],
      text: "一个神经元也不只送一种信。很多神经元同时装着经典的小分子递质和神经肽，这叫共存递质。小分子递质装在小囊泡里，平常放电就放出来；神经肽装在更大的囊泡里，往往要放电又快又密时才一起放出，作用更慢、更持久。几种方式合起来，大脑既能点对点，也能广而告之。",
      fact: "共存递质：经典递质和神经肽可以出自同一个神经元，神经肽多在高频放电时释放" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    term: "#ffe0cf", nterm: "#ffd9dc", post: "#ffe0ea", rec: "#ffd27a", cb1: "#a8dca0", chan: "#a9d8ee",
    soma: "#ffd3c4", dend: "#f7b9a8", dcv: "#c9a6e8",
  });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0 };
  const ECB = { hair: "#6cbf73", eye: "#3f8a4a", cloth: "#e2f5dc", hat: "beret", hatColor: "#a8dca0", style: "bob", acc: "leaf", shadow: false };
  const PEP = { hair: "#b784de", eye: "#7a4fb0", cloth: "#f1e3fb", hat: "band", hatColor: "#d8b8f2", style: "long", shadow: false };

  function update() { lt = Anima.sceneTime; }
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => W / H < 1.5;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
  function termY(x, T) { // 末梢下边缘的高度（和 Anima.terminal 的曲线一致）
    const dx = Math.abs(x - T.cx), bot = T.y0 + T.h;
    let best = bot, bd = 1e9;
    for (let i = 0; i <= 30; i++) {
      const t = i / 30, px = bez(t, T.w / 2, T.w / 2, T.w * 0.3, 0), py = bez(t, T.y0 + T.h * 0.62, bot + T.h * 0.02, bot, bot);
      if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; }
    }
    return best;
  }
  function plate(t, x, y, fs, color) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function arrow(x0, y0, x1, y1, color, w, a) {
    if (a <= 0.01) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = w; ctx.lineCap = "round";
    ctx.setLineDash([w * 1.6, w * 1.3]);
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke(); ctx.setLineDash([]);
    const q = Math.atan2(y1 - y0, x1 - x0), s = w * 2.6;
    ctx.beginPath(); ctx.moveTo(x1 + Math.cos(q) * s * 0.7, y1 + Math.sin(q) * s * 0.7);
    ctx.lineTo(x1 + Math.cos(q + 2.4) * s, y1 + Math.sin(q + 2.4) * s); ctx.lineTo(x1 + Math.cos(q - 2.4) * s, y1 + Math.sin(q - 2.4) * s); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  // 递质快递员：沿着从释放点到受体的路循环送信，rel 决定出来几位
  function couriers(from, tos, rel, who, cs, seed, speed) {
    const n = 4, on = Math.round(n * clamp(rel, 0, 1));
    for (let k = 0; k < on; k++) {
      const t = (time * (speed || 0.3) + k / n + seed) % 1, to = tos[k % tos.length];
      const x = lerp(from.x + (k - 1.5) * cs * 1.2, to.x, t), y = lerp(from.y, to.y, t) - Math.sin(t * Math.PI) * H * 0.02;
      chara(x, y, cs, { who, alpha: Math.min(1, Math.sin(t * Math.PI) * 2.5), walk: time * 9 + k, item: "letter", arms: "hold", eyes: "happy", shadow: false });
    }
  }
  function bg(top, mid, bot, seed) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, top); g.addColorStop(0.5, mid); g.addColorStop(1, bot);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#ffd8c8", 0.7, seed);
    Anima.petals(7, 0.45, seed + 3);
  }
  // 一个小神经元：圆圆的胞体 + 几根树突
  function soma(x, y, r, mood, gray) {
    ctx.lineCap = "round";
    for (let k = 0; k < 4; k++) {
      const q = k * 1.57 + 0.5, x1 = x + Math.cos(q) * r * 1.8, y1 = y + Math.sin(q) * r * 1.6;
      for (const [w, col] of [[r * 0.32, C.line], [r * 0.2, C.dend]]) { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x1, y1); ctx.stroke(); }
    }
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix(C.soma, "#ddd6da", gray || 0); ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.1, r * 0.5, mood);
  }
  // 朝某个方向伸出的受体（up 指向递质来的方向）
  function recAt(x, y, s, color, act, ux, uy, shape) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.atan2(ux, -uy));
    const r = Anima.receptor(0, 0, s, color, act, { shape: shape || "round" });
    ctx.restore();
    return { x: x + ux * s * 1.62, y: y + uy * s * 1.62, r };
  }

  // ---------- 第 1～3 幕：一个突触 ----------
  function synView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff6ee", "#eef7fb", "#fff0f4", 11);
    const post = H * 0.77, rs = H * 0.045, cs = H * 0.032, fs = fsz(0.026);
    const T = { cx: W * 0.4, y0: 0, w: Math.min(W * (n ? 0.5 : 0.44), H * 0.85), h: H * 0.44 };
    const recX = [T.cx - T.w * 0.2, T.cx + T.w * 0.1], siteY = post - rs * 1.62;
    const farX = W * (n ? 0.87 : 0.86);
    // 放信量
    let rel = 1;
    if (cur === 1) rel = lt > 7.6 ? 1 : 0;
    if (cur === 2) rel = 1 - 0.6 * prog(8.5, 2);
    // 突触后膜和受体
    Anima.postMembrane(post, C.post, {});
    const pfx = W * 0.08, pfy = post + (H - post) * 0.55;
    face(pfx, pfy, H * 0.045, 1);
    const lit = cur === 1 ? prog(8.4, 0.8) : 1;
    recX.forEach((x, i) => Anima.receptor(x, post, rs, C.rec, rel > 0.3 ? lit * (0.6 + 0.3 * Math.sin(time * 4 + i)) : 0, { shape: "square" }));
    Anima.receptor(farX, post, rs, C.rec, 0, { shape: "square" });
    if (cur === 0) emote("zzz", farX + rs * 1.2, post - rs * 2.4, H * 0.03);
    // 突触前末梢
    Anima.terminal(T.cx, T.y0, T.w, T.h, C.term, { face: true, mood: cur === 2 && lt > 9 ? 0.6 : 1 });
    text("突触前末梢", T.cx - T.w * 0.24, T.h * 0.66, fs, C.ink);
    // 钙通道
    const caX = T.cx - T.w * 0.41, caY = termY(caX, T);
    const caOpen = cur === 1 ? prog(2.6, 0.6) * (1 - prog(9, 1)) : (rel > 0.5 ? 0.5 : 0.2);
    ctx.save(); ctx.translate(caX, caY); ctx.rotate(0.9);
    Anima.receptor(0, 0, H * 0.03, C.chan, caOpen, { dir: -1, shape: "square" });
    ctx.restore();
    let apPt = null;
    if (cur === 1) {
      // ① 电信号沿着轴突往下跑
      if (lt > 0.4 && lt < 2.8) apPt = Anima.spark([[T.cx, -10], [T.cx, T.h * 0.4], [caX + T.w * 0.05, caY - H * 0.04]], (lt - 0.4) / 2.4, H * 0.03, C.gold);
      // ② 钙离子涌进来
      if (lt > 2.8 && lt < 9) for (let k = 0; k < 5; k++) {
        const t = ((lt - 2.8) * 0.5 + k / 5) % 1;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
        Anima.ion(lerp(caX - H * 0.1, caX + H * 0.1, t), lerp(caY + H * 0.1, caY - H * 0.08, t), H * 0.02, "Ca", "#c8f0d8");
        ctx.restore();
      }
      // ③ 囊泡贴膜、融合
      const vx = [T.cx - T.w * 0.02, T.cx + T.w * 0.13, T.cx + T.w * 0.27], vr = H * 0.038;
      vx.forEach((x, i) => {
        const y0 = T.h * (0.55 + (i % 2) * 0.12), y1 = termY(x, T) - vr * 0.9;
        const p = prog(4.2 + i * 0.3, 2), open = prog(6.4 + i * 0.3, 0.8);
        if (open >= 1) return;
        ctx.save(); ctx.globalAlpha *= 1 - open;
        Anima.vesicle(x, lerp(y0, y1, p) + open * vr * 0.5, vr * (1 - open * 0.4), Anima.CAST.Glu.hair, 5, i * 5);
        ctx.restore();
        if (open > 0.05) sfx("啵！", x + vr, y1 + vr * 1.8, H * 0.036, "#ff9a52", -0.15, Math.sin(open * Math.PI));
      });
      // 右边的三步小清单
      const lx = W * (n ? 0.84 : 0.8), steps = ["① 电信号", "② 钙进来", "③ 放递质"], on = [lt > 0.4, lt > 2.8, lt > 6.4];
      steps.forEach((s, i) => {
        const y = H * (0.3 + i * 0.12);
        ctx.save(); ctx.globalAlpha *= on[i] ? 1 : 0.35;
        plate(s, lx, y, fs, on[i] ? ["#fff1b8", "#d9f3e3", "#ffe0ea"][i] : "#fff");
        ctx.restore();
        if (i < 2) arrow(lx, y + fs * 0.9, lx, y + H * 0.12 - fs * 0.9, C.soft, Math.max(1.5, H * 0.004), on[i + 1] ? 1 : 0.3);
      });
    }
    couriers({ x: T.cx - T.w * 0.05, y: termY(T.cx, T) + cs * 3.4 }, [{ x: recX[0], y: siteY }, { x: recX[1], y: siteY }], rel, "Glu", cs, 0, 0.3);
    if (cur === 0) {
      // “电话线”：释放点到正对面的受体
      ctx.save(); ctx.setLineDash([5, 6]); ctx.strokeStyle = C.rose; ctx.lineWidth = 2;
      ctx.globalAlpha *= prog(3, 1) * (0.6 + 0.3 * Math.sin(time * 3));
      recX.forEach((x) => { ctx.beginPath(); ctx.moveTo(x, termY(x, T) + H * 0.01); ctx.lineTo(x, siteY - cs * 3.4); ctx.stroke(); });
      ctx.restore();
      callout("pre", lt > 0.6 && lt < 5, T.cx + T.w * 0.2, T.h * 0.5, n ? W * 0.8 : W * 0.76, H * 0.28, "突触前：发信");
      callout("one", lt > 4.2 && lt < 9, recX[1] + rs * 0.6, post - rs, n ? W * 0.6 : W * 0.6, post + H * 0.08, "送到正对面：一对一");
      callout("far", lt > 8.8, farX, post - rs * 1.6, n ? W * 0.64 : W * 0.78, H * 0.52, "隔壁的门：收不到");
      say("go", lt > 1.2 && lt < 5.2, recX[0], siteY - cs * 3.2, n ? W * 0.18 : W * 0.14, H * 0.56, "直达对面～", "say");
    }
    if (cur === 1) {
      callout("ca", lt > 2.9 && lt < 6.3, caX, caY, n ? W * 0.3 : W * 0.18, n ? post + H * 0.08 : H * 0.6, "Ca²⁺ 涌进末梢");
      callout("fuse", lt > 6.6 && lt < 11, T.cx + T.w * 0.02, termY(T.cx, T), n ? W * 0.62 : W * 0.62, post + H * 0.1, "囊泡融合，放出递质");
      say("bell", lt > 11, pfx, pfy - H * 0.05, n ? W * 0.3 : W * 0.24, post + H * 0.1, "收到！门铃是钙按的～", "say");
    }
    if (cur === 2) {
      // 内源性大麻素和 NO：从突触后飘回突触前
      const cbX = T.cx + T.w * 0.3, cbY = termY(cbX, T) - rs * 0.1;
      const up = prog(3, 3.5);
      const cb = Anima.receptor(cbX, cbY, rs, C.cb1, prog(6.3, 0.8), { dir: -1, shape: "tri" });
      const from = { x: recX[1] + T.w * 0.14, y: post + H * 0.1 }, to = { x: cb.site.x, y: cb.site.y + cs * 3.25 };
      const born = prog(1.5, 1.2);
      if (born > 0) {
        if (born < 1) sparkles(from.x, from.y - cs * 1.5, cs * 2, 3, 1, 7);
        chara(lerp(from.x, to.x, up), lerp(from.y, to.y, up) - Math.sin(up * Math.PI) * H * 0.03, cs * (0.4 + 0.6 * born),
          Object.assign({}, ECB, { alpha: born, arms: up > 0.95 ? "up" : "wave", eyes: "happy", item: "letter" }));
      }
      // 逆行的大箭头
      const ax = n ? W * 0.1 : W * 0.14;
      arrow(ax, post - H * 0.04, ax, H * 0.48, C.mintDeep, H * 0.01, prog(2.4, 1) * (0.7 + 0.3 * Math.sin(time * 4)));
      sfx("逆行 ↑", ax + H * 0.1, H * 0.62, H * 0.036, C.mintDeep, -0.1, prog(2.4, 1));
      // NO：小小的气体，直接穿过膜
      if (lt > 6.2) for (let k = 0; k < 2; k++) {
        const t = ((lt - 6.2) * 0.22 + k * 0.5) % 1, x = recX[0] - T.w * 0.12 + k * T.w * 0.1 + Math.sin(t * 9 + k) * H * 0.012;
        const y = lerp(post + H * 0.06, T.h * 0.62, t);
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
        ctx.beginPath(); ctx.arc(x, y, H * 0.024, 0, Math.PI * 2); ctx.fillStyle = "#e6f3ff"; ctx.fill(); outline(1.4); ctx.stroke();
        text("NO", x, y + 1, H * 0.022, C.skyDeep);
        ctx.restore();
      }
      callout("ecb", lt > 3.2 && lt < 6.8, from.x, from.y - cs * 2, n ? W * 0.62 : W * 0.7, post + H * 0.1, "内源性大麻素：现做的回信");
      callout("no", lt > 7, recX[0] - T.w * 0.12, post + H * 0.02, n ? W * 0.44 : W * 0.4, post + H * 0.11, "NO：小气体，穿膜而过");
      say("reply", lt > 0.8 && lt < 3.4, pfx, pfy - H * 0.05, n ? W * 0.26 : W * 0.22, post + H * 0.1, "收到啦，回一封信～", "say");
      say("ok", lt > 9, T.cx, T.h * 0.4, n ? W * 0.8 : W * 0.72, H * 0.3, "好，我少送一点", "say");
    }
    ctx.restore();
    return apPt;
  }

  // ---------- 第 4 幕：容积传递 ----------
  function volView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#f6f4ff", "#fff6ef", "#fdeef3", 23);
    const cs = H * 0.027, rs = H * 0.036, fs = fsz(0.026);
    const T = { cx: W * 0.5, y0: 0, w: W * (n ? 0.36 : 0.24), h: H * 0.36 };
    const spY = H * 0.5; // 正对面的树突棘
    const src = { x: T.cx, y: (T.h + spY) / 2 + H * 0.01 };
    // 广播的波纹
    for (let k = 0; k < 3; k++) {
      const t = ((lt * 0.25) + k / 3) % 1, r = H * 0.06 + t * H * 0.55;
      ctx.save(); ctx.globalAlpha *= (1 - t) * 0.6 * prog(1.5, 1); ctx.setLineDash([6, 8]);
      ctx.strokeStyle = Anima.CAST.DA.hair; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(src.x, src.y, r, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
    }
    // 正对面的树突棘
    ctx.beginPath(); ctx.ellipse(T.cx, spY + H * 0.1, T.w * 0.36, H * 0.1, 0, 0, Math.PI * 2); ctx.fillStyle = C.post; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = C.post; ctx.fillRect(T.cx - T.w * 0.2, spY + H * 0.12, T.w * 0.4, H); outline(2);
    ctx.beginPath(); ctx.moveTo(T.cx - T.w * 0.2, spY + H * 0.16); ctx.lineTo(T.cx - T.w * 0.2, H); ctx.moveTo(T.cx + T.w * 0.2, spY + H * 0.16); ctx.lineTo(T.cx + T.w * 0.2, H); ctx.stroke();
    Anima.receptor(T.cx, spY + H * 0.005, rs, C.rec, 0.7, {});
    Anima.terminal(T.cx, T.y0, T.w, T.h, "#ffe3c4", { face: true, mood: 1 });
    // 远处的邻居
    const nb = n ? [{ x: W * 0.14, y: H * 0.5 }, { x: W * 0.86, y: H * 0.56 }, { x: W * 0.2, y: H * 0.86 }]
      : [{ x: W * 0.14, y: H * 0.46 }, { x: W * 0.86, y: H * 0.52 }, { x: W * 0.26, y: H * 0.84 }];
    const r = H * 0.065;
    const sites = nb.map((p, i) => {
      const dx = src.x - p.x, dy = src.y - p.y, d = Math.hypot(dx, dy), ux = dx / d, uy = dy / d;
      const heard = prog(4.5 + i * 1.3, 0.8);
      soma(p.x, p.y, r, heard > 0.5 ? 1 : 0, 0.6 * (1 - heard));
      if (heard > 0.5 && heard < 1) sparkles(p.x, p.y - r, r * 1.2, 3, 1, i * 3);
      return recAt(p.x + ux * r, p.y + uy * r, rs * 0.9, C.rec, heard, ux, uy, "round");
    });
    // 溢出去的多巴胺
    for (let k = 0; k < 6; k++) {
      const to = sites[k % 3], t0 = 1.5 + k * 0.45;
      if (lt < t0) continue;
      const t = ((lt - t0) / 4.2) % 1, e = ease(Math.min(1, t * 1.2));
      const px = -(to.y - src.y), py = to.x - src.x, pl = Math.hypot(px, py) || 1;
      const wob = Math.sin(t * 12 + k) * H * 0.02;
      const x = lerp(src.x, to.x, e) + px / pl * wob, y = lerp(src.y, to.y + cs * 1.4, e) + py / pl * wob;
      chara(x, y, cs, { who: "DA", alpha: Math.min(1, Math.sin(t * Math.PI) * 3), walk: time * 8 + k, eyes: "happy", arms: "wave", shadow: false });
    }
    text("单胺末梢", T.cx + T.w * 0.22, T.h * 0.52, fs, C.ink);
    sfx("广播～", src.x + (n ? W * 0.14 : W * 0.08), src.y + H * 0.02, H * 0.036, "#ff9a52", -0.12, prog(1.5, 1) * (lt < 6 ? 1 : 0));
    callout("spill", lt > 2 && lt < 6.2, src.x - T.w * 0.12, src.y, n ? W * 0.5 : W * 0.5, H * (n ? 0.94 : 0.93), "溢出突触间隙");
    callout("extra", lt > 6.4 && lt < 11, sites[0].x, sites[0].y, n ? W * 0.3 : W * 0.2, H * 0.28, "突触外的受体也收到");
    say("far", lt > 7.5, nb[1].x, nb[1].y - r * 1.2, n ? W * 0.74 : W * 0.8, H * 0.3, "我离得远，也收到啦！", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：前额叶的多巴胺 ----------
  function pfcView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff8ee", "#f0f7ff", "#fdf0f5", 37);
    const post = H * 0.8, rs = H * 0.04, cs = H * 0.028, fs = fsz(0.026);
    const D = { cx: W * (n ? 0.26 : 0.28), y0: 0, w: W * (n ? 0.4 : 0.3), h: H * 0.42 };
    const N = { cx: W * (n ? 0.8 : 0.78), y0: 0, w: W * (n ? 0.34 : 0.26), h: H * 0.36 };
    Anima.postMembrane(post, C.post, {});
    const recX = [W * 0.22, W * 0.48], siteY = post - rs * 1.62;
    const hit = cur === 4 ? prog(3, 1) : 0;
    recX.forEach((x, i) => Anima.receptor(x, post, rs, "#ffc7a0", hit * (0.6 + 0.3 * Math.sin(time * 3 + i)), { shape: "tri" }));
    Anima.terminal(D.cx, D.y0, D.w, D.h, "#ffe3c4");
    Anima.terminal(N.cx, N.y0, N.w, N.h, C.nterm);
    text("多巴胺末梢", D.cx, D.h * 0.55, fs, C.ink);
    text("NE 末梢", N.cx + N.w * 0.08, N.h * 0.55, fs, C.ink);
    // DAT：只有一扇小小的
    const datX = D.cx + D.w * 0.32, datY = termY(datX, D) - H * 0.006;
    Anima.transporter(datX, datY, rs * 0.6, "#c9d3df", time * 0.3, false);
    // NET
    const netX = N.cx - N.w * 0.3, netY = termY(netX, N) - H * 0.006;
    const blocked = lt > 10.2;
    Anima.transporter(netX, netY, rs, "#9fc3ea", blocked ? 0 : time * 2.4, blocked);
    const px = netX + N.w * 0.02, py = netY + H * 0.2;
    chara(px, py, cs * 1.1, { who: "pump", item: "net", arms: lt > 6 && !blocked ? "wave" : "down", eyes: blocked ? "wide" : "happy", dir: -1, tag: "NET" });
    // 药物访客坐到 NET 上
    if (lt > 9.2) {
      const p = prog(9.2, 1.2);
      chara(lerp(W + cs * 3, netX - rs * 1.7, p), netY + rs * 2.6, cs, { who: "drug", label: "", hatColor: "#9fc3ea", tag: "NET 抑制剂", walk: p < 1 ? time * 9 : null, arms: p >= 1 ? "up" : "down", eyes: "happy", shadow: false });
    }
    // 多巴胺：放出来 → 扩散很远 → 被 NET 收走（药来了以后就收不走，越积越多）
    const rel = { x: D.cx - D.w * 0.05, y: termY(D.cx, D) + cs * 3.2 };
    for (let k = 0; k < 5; k++) {
      const t0 = 0.5 + k * 0.6;
      if (lt < t0) continue;
      const t = ((lt - t0) / 5.5) % 1;
      let x, y, al = 1;
      const stay = blocked && t > 0.55;
      const u = stay ? 0.55 : t;
      const mid = { x: recX[k % 2], y: siteY - H * 0.02 };
      if (u < 0.5) { const e = u / 0.5; x = lerp(rel.x, mid.x, e); y = lerp(rel.y, mid.y, e); }
      else { const e = (u - 0.5) / 0.5; x = lerp(mid.x, netX, e); y = lerp(mid.y, netY + rs * 3.4, e) - Math.sin(e * Math.PI) * H * 0.05; al = e > 0.85 ? (1 - e) / 0.15 : 1; }
      if (stay) { x += Math.sin(time * 1.5 + k) * W * 0.03; }
      al *= Math.min(1, (lt - t0) * 2);
      chara(x, y, cs, { who: "DA", alpha: al, walk: time * 8 + k, eyes: stay ? "sparkle" : "open", arms: stay ? "up" : "down", shadow: false });
    }
    callout("dat", lt > 0.8 && lt < 5, datX, datY + rs * 0.6, n ? W * 0.3 : W * 0.3, H * 0.52, "DAT 很少，回不了家");
    callout("net", lt > 5.4 && lt < 9.2, netX, netY + rs, n ? W * 0.56 : W * 0.6, H * 0.5, "NET 顺手收回多巴胺");
    callout("drug", lt > 10.8, netX - rs * 1.7, netY + rs * 0.6, n ? W * 0.42 : W * 0.5, H * 0.5, "堵住 NET → 多巴胺也升高");
    say("wander", lt > 1.8 && lt < 5, recX[1], siteY - cs * 3, n ? W * 0.66 : W * 0.56, H * 0.6, "回收门在哪儿呀？", "think");
    say("grab", lt > 6 && lt < 9.2, px, py - cs * 3.4, n ? W * 0.7 : W * 0.86, H * 0.68, "多巴胺也交给我～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：共存递质 ----------
  function coView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff7f0", "#f3f0ff", "#fff0f4", 51);
    const post = H * 0.78, rs = H * 0.045, cs = H * 0.03, fs = fsz(0.026);
    const T = { cx: W * (n ? 0.36 : 0.38), y0: 0, w: Math.min(W * (n ? 0.52 : 0.42), H * 0.85), h: H * 0.5 };
    const fast = lt > 6;
    Anima.postMembrane(post, C.post, {});
    const recX = [T.cx - T.w * 0.26, T.cx, T.cx + T.w * 0.3], siteY = post - rs * 1.62;
    const pepOn = prog(8.8, 1.5);
    recX.forEach((x, i) => {
      if (i < 2) Anima.receptor(x, post, rs, "#8fdcc4", 0.5 + 0.4 * Math.sin(time * (fast ? 7 : 3) + i), { shape: "round" });
      else Anima.receptor(x, post, rs, C.dcv, pepOn * (0.7 + 0.3 * Math.sin(time * 1.2)), { shape: "tri" });
    });
    Anima.terminal(T.cx, T.y0, T.w, T.h, C.term, { face: true, mood: 1 });
    // 放电：慢 → 快又密
    const per = fast ? 0.45 : 2.2, ph = (lt % per) / per;
    if (ph < 0.6) Anima.spark([[T.cx, -10], [T.cx, T.h * 0.3]], ph / 0.6, H * 0.024, C.gold);
    // 小囊泡（贴着膜）和大囊泡（后面）
    const bot = termY(T.cx, T), vr = H * 0.03;
    [-0.2, 0.02, 0.2].forEach((dx, i) => { const x = T.cx + T.w * dx; Anima.vesicle(x, termY(x, T) - vr * 1.1, vr, Anima.CAST["5HT"].hair, 4, i * 3); });
    const big = [T.cx + T.w * 0.12, T.cx + T.w * 0.3], R = H * 0.05;
    big.forEach((x, i) => {
      const y0 = T.h * 0.52, y1 = termY(x, T) - R * 0.9, p = prog(6.4 + i * 0.4, 1.6), open = prog(8 + i * 0.4, 0.8);
      if (open >= 1) return;
      ctx.save(); ctx.globalAlpha *= 1 - open;
      const y = lerp(y0, y1, p);
      ctx.beginPath(); ctx.arc(x, y, R, 0, Math.PI * 2); ctx.fillStyle = "#efe2fb"; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, R * 0.55, 0, Math.PI * 2); ctx.fillStyle = C.dcv; ctx.fill();
      ctx.restore();
      if (open > 0.05) sfx("啵！", x + R, y1 + R * 2, H * 0.036, "#a36ad6", -0.15, Math.sin(open * Math.PI));
    });
    text("小囊泡", T.cx - T.w * 0.26, T.h * 0.62, fs, C.ink);
    text("大囊泡", T.cx + T.w * 0.12, T.h * 0.3, fs, C.ink);
    // 经典递质一直在送；快放电时送得更勤
    couriers({ x: T.cx - T.w * 0.08, y: bot + cs * 3.4 }, [{ x: recX[0], y: siteY }, { x: recX[1], y: siteY }], 1, "5HT", cs, 0, fast ? 0.55 : 0.25);
    // 神经肽：慢慢飘向远一点的门，停得更久
    if (lt > 8.2) for (let k = 0; k < 2; k++) {
      const p = prog(8.2 + k * 0.6, 2.5), sx = big[k], sy = termY(sx, T) + cs * 3;
      const tx = recX[2] + (k ? W * 0.12 : 0), ty = k ? siteY + H * 0.06 : siteY;
      chara(lerp(sx, tx, p) + (k && p >= 1 ? Math.sin(time) * W * 0.01 : 0), lerp(sy, ty, p), cs, Object.assign({}, PEP, { walk: p < 1 ? time * 6 : null, arms: p >= 1 ? "up" : "hold", item: p >= 1 ? null : "letter", eyes: "happy", tag: k ? null : "神经肽" }));
    }
    // 右上角：放电节奏
    const bx = W * (n ? 0.84 : 0.8), by = H * 0.34;
    plate(fast ? "放电：快又密" : "放电：慢", bx, by, fs, fast ? "#fff1b8" : "#ffffff");
    ctx.save(); outline(1.6);
    const tw = W * (n ? 0.24 : 0.16), ty = by + fs * 2.2;
    ctx.beginPath(); ctx.moveTo(bx - tw / 2, ty);
    for (let i = 0; i <= 40; i++) {
      const x = bx - tw / 2 + tw * i / 40, tt = lt - (40 - i) * 0.05, spike = ((tt % per) + per) % per < 0.05 && tt > 0;
      ctx.lineTo(x, spike ? ty - fs * 1.1 : ty);
    }
    ctx.stroke(); ctx.restore();
    callout("small", lt > 1 && lt < 5.6, T.cx - T.w * 0.2, termY(T.cx - T.w * 0.2, T) - vr, n ? W * 0.22 : W * 0.2, post + H * 0.08, "小囊泡：经典递质");
    callout("big", lt > 6.4 && lt < 10, big[1] + H * 0.03, T.h * 0.62, n ? W * 0.74 : W * 0.78, H * 0.6, "大囊泡：神经肽");
    callout("slow", lt > 10.4, recX[2], post - rs, n ? W * 0.62 : W * 0.66, post + H * 0.1, "神经肽：慢而持久");
    say("me", lt > 9 && lt < 12.4, recX[2], siteY - cs * 3.2, n ? W * 0.76 : W * 0.86, H * 0.52, "放电快了才轮到我～", "say");
    say("sum", lt > 12.4, W * 0.5, H * 0.5, n ? W * 0.62 : W * 0.72, H * 0.52, "点对点，也能广而告之", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 1) v1 = lt < 2.8 ? "电 ⚡" : lt < 6.4 ? "钙 Ca²⁺" : "释放 ✉";
    if (cur === 4 && lt > 10.8) v2 = "升高 ↑";
    if (cur === 5 && lt > 6) { v1 = "快又密"; v2 = lt > 8 ? "两种一起" : v2; }
    pill(14, 12, c.pill[0], v1, "#e0765a", false);
    pill(W - 14, 12, c.pill2[0], v2, "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) synView(S.v0);
    if (S.v1 > 0.02) volView(S.v1);
    if (S.v2 > 0.02) pfcView(S.v2);
    if (S.v3 > 0.02) coView(S.v3);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0765a",
    titleCard: { lines: ["三种送信方式", "经典、逆行和容积"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
