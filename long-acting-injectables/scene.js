Anima.register("long-acting-injectables", {
    "title": "长效针剂：慢慢释放的小仓库",
    "tag": "抗精神病药",
    "headline": "打一针，为什么能管上【几周到几个月】？",
    "lede": "口服药每天吃，浓度像锯齿一样起起落落，一漏服就可能掉出有效区间。长效针剂把药存进肌肉里的“小仓库”，让它一点一点放出来。看看仓库是怎么做的、为什么起步要帮一把，以及它的好处和要注意的地方。",
    "summary": "口服的锯齿形浓度和漏服，肌肉里的药物储库，酯化前体和微晶/纳米晶体两种缓释办法，起始负荷或口服重叠，更平稳的浓度和从两周到半年的间隔，以及副作用消退慢。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 长效注射剂",
    "footer": "是否使用长效针剂、用哪一种、怎样起步和间隔多久，都要由医生评估决定；打针后如有不适，请及时告诉医生。",
    "canvasLabel": "口服药浓度锯齿形起伏、肌肉里的小仓库慢慢把药放进血里的动画",
    "regions": [],
    "parts": ["psychosis"],
    "cast": ["drug", "neuron"],
    "color": "#8fc9e8"
  }, () => {
  const CH = [
    { title: "口服：一排锯齿", g: 1, v1: 0, v2: 0, v3: 0,
      pill: ["口服", "每天吃"], pill2: ["浓度", "锯齿样"],
      text: "口服药要每天吃。每吃一次，血里的药浓度先升到高峰，再慢慢降下来，到下一次吃药前落到低谷，画出来像一排锯齿。只要按时吃，锯齿大多落在绿色的“有效区间”里：太高，副作用容易多；太低，药效不够。高峰和低谷差得越多，这种起伏就越明显。",
      fact: "口服药的浓度一天之内有高峰和低谷，按时服用才能稳在有效区间里" },
    { title: "漏服很常见", g: 1, v1: 0, v2: 0, v3: 0,
      pill: ["漏服", "很常见"], pill2: ["浓度", "掉出区间"],
      text: "可在生活里，漏吃药是很常见的事：忘了、出门了、觉得自己已经好了，或者不喜欢副作用。连着漏几次，浓度就掉出有效区间，症状可能慢慢回来，甚至复发。这不是“意志力”不够：很多慢性病都有漏服的问题，精神分裂症的人还可能因为疾病本身，不觉得自己需要吃药。",
      fact: "漏服是精神分裂症复发的常见原因之一，它不是“不够努力”的问题" },
    { title: "肌肉里的小仓库", g: 0, v1: 1, v2: 0, v3: 0,
      pill: ["打在", "肌肉里"], pill2: ["释放", "一点一点"],
      text: "长效针剂换了一种思路：不再每天吃，而是把药打进臀部或上臂的肌肉里，在那里存成一个“小仓库”。仓库里的药不会一下子冲进血里，而是一点点溶解、释放出来，被旁边的毛细血管带走，再慢慢流遍全身。打一次针，这个仓库可以慢慢放上几周到几个月。",
      fact: "长效针剂在注射部位形成药物储库，缓慢释放入血" },
    { title: "仓库是怎么做的", g: 0, v1: 0, v2: 1, v3: 0,
      pill: ["办法一", "酯化前体"], pill2: ["办法二", "微小晶体"],
      text: "怎么让药放得这么慢？常见两种办法。一种是给药分子接上一条长长的脂肪酸“尾巴”，做成酯化的前体药，溶在油里：它要先慢慢离开油滴，再被身体里的酯酶剪掉尾巴，才变回有活性的药。另一种是把药做成很难溶的微晶或纳米晶体，药只能从晶体表面一点点溶下来。",
      fact: "酯化前体（油剂）要先释放、再水解；微晶/纳米晶体靠缓慢溶解" },
    { title: "起步要帮一把", g: 1, v1: 0, v2: 0, v3: 0,
      pill: ["起步", "爬坡慢"], pill2: ["办法", "负荷或重叠"],
      text: "仓库放药很慢，也带来一个问题：刚开始打针时，血里的浓度要爬很长的坡，往往要好几个月才到稳态。所以很多长效针剂在起步时，要么先打一两针加强的“起始负荷”，要么和口服药重叠吃一段时间，把浓度尽快托进有效区间。具体怎么起步，每种药都不一样，由医生来安排。",
      fact: "长效针剂达到稳态常需数月，因此常用起始负荷或口服重叠（因药而异）" },
    { title: "更平稳，间隔更长", g: 1, v1: 0, v2: 0, v3: 0,
      pill: ["峰谷", "更小"], pill2: ["间隔", "几周到半年"],
      text: "到了稳态，长效针剂的浓度曲线平缓得多：高峰没那么高，低谷也没那么低，更稳地待在有效区间里。不同的药和剂型，打针的间隔也不一样：有的两周一次，有的一个月、两个月或三个月一次，现在还有半年一次的剂型。选哪一种，要看药物、剂型和个人情况。",
      fact: "不同药物和剂型的注射间隔从约两周到半年不等" },
    { title: "好处和要注意的", g: 0, v1: 0, v2: 0, v3: 1,
      pill: ["好处", "少漏服"], pill2: ["注意", "撤不回来"],
      text: "长效针剂最大的好处，是不用天天记着吃药，医护人员也能及时知道有没有按时打针，因为漏服而复发的机会就少了。但也有要注意的地方：仓库一旦放进去就取不出来，如果出现副作用，也要等药慢慢放完，消退得比口服药慢。所以要在医生评估后使用，常常先用同一种口服药试试是否耐受。",
      fact: "长效针剂减少漏服，但副作用消退也慢：用前要评估，常先确认口服耐受" },
  ];
  const DUR = 14;
  const C = Object.assign({}, Anima.C, { band: "#d6f2e3", skin: "#ffe3d6", muscle: "#f7c6c8", vessel: "#f28c8c" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { g: 1, v1: 0, v2: 0, v3: 0 };
  const LAI = { who: "drug", label: "LAI", hatColor: "#8fc9e8", hatColor2: "#ffffff" };
  const EST = { hair: "#8fb7a0", eye: "#4d8066", cloth: "#dff0e4", hat: "kerchief", hatColor: "#a7d1b6", style: "short", label: "酯酶", tag: "酯酶" };
  function update() { lt = Anima.sceneTime; }
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fs = (k) => Math.max(10, H * (k || 0.026)) * Anima.UI;
  function chip(t, x, y, col, bg, k) {
    const f = fs(k || 0.03);
    ctx.font = `${f}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + f * 1.1;
    rrect(x - w / 2, y - f * 0.75, w, f * 1.5, f * 0.75); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, f, col || C.ink);
    return w;
  }
  function capsule(x, y, s, miss) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(-0.5);
    rrect(-s, -s * 0.45, s * 2, s * 0.9, s * 0.45); ctx.fillStyle = miss ? "#eee" : "#ff9aa9"; ctx.fill(); outline(1.1); ctx.stroke();
    ctx.fillStyle = miss ? "#f6f6f6" : "#fff"; ctx.fillRect(0, -s * 0.4, s * 0.9, s * 0.8);
    ctx.restore();
    if (miss) { ctx.strokeStyle = C.bad; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(x - s, y - s); ctx.lineTo(x + s, y + s); ctx.moveTo(x + s, y - s); ctx.lineTo(x - s, y + s); ctx.stroke(); }
  }

  // ---------- 浓度曲线 ----------
  const KE = 0.9, KA = 6;
  function oral(t, missed) { // t 单位：天；从很早以前开始每天一次
    let c = 0;
    for (let d = -12; d <= t; d++) { if (missed && d >= 4 && d <= 7) continue; const dt = t - d; c += Math.exp(-KE * dt) - Math.exp(-KA * dt); }
    return c;
  }
  const ORAL_MAX = (() => { let m = 0; for (let t = 0; t < 2; t += 0.02) m = Math.max(m, oral(t, false)); return m; })();
  function viewGraph(a) {
    const n = N(), c = cur;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#fff4f2");
    Anima.bokeh(6, "#d3ecfa", 0.7, 23);
    const x0 = W * (n ? 0.1 : 0.08), x1 = W * (c === 1 ? (n ? 0.74 : 0.78) : 0.94), y0 = Anima.topSafe() + H * (n ? 0.08 : 0.08), y1 = H * (c === 5 ? (n ? 0.66 : 0.7) : 0.8);
    rrect(x0 - W * 0.02, y0 - H * 0.04, x1 - x0 + W * 0.04, y1 - y0 + H * 0.08, H * 0.03); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    const Y = (v) => lerp(y1, y0, v), lo = 0.36, hi = 0.72;
    ctx.fillStyle = Anima.alpha(C.band, 0.9); ctx.fillRect(x0, Y(hi), x1 - x0, Y(lo) - Y(hi));
    ctx.save(); ctx.setLineDash([5, 5]); ctx.strokeStyle = C.mintDeep; ctx.lineWidth = 1.4; [lo, hi].forEach((v) => { ctx.beginPath(); ctx.moveTo(x0, Y(v)); ctx.lineTo(x1, Y(v)); ctx.stroke(); }); ctx.restore();
    text("有效区间", x0 + W * 0.01, (Y(lo) + Y(hi)) / 2, fs(0.026), C.mintDeep, "left");
    outline(1.6); ctx.beginPath(); ctx.moveTo(x0, y0 - H * 0.02); ctx.lineTo(x0, y1); ctx.lineTo(x1, y1); ctx.stroke();
    text("血药浓度", x0, y0 - H * 0.055 < Anima.topSafe() ? y0 - H * 0.01 : y0 - H * 0.055, fs(0.024), C.soft, "left");
    const scaleO = (v) => 0.22 + (v / ORAL_MAX) * 0.46; // 口服曲线映射到画面
    const plot = (fn, span, upto, col, w, dash) => {
      ctx.save(); if (dash) ctx.setLineDash(dash);
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath();
      const M = 260; let last = null;
      for (let k = 0; k <= M; k++) { const t = span * k / M; if (t > upto) break; const x = lerp(x0, x1, k / M), y = Y(fn(t)); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); last = { x, y }; }
      ctx.stroke(); ctx.restore(); return last;
    };
    let tip = null;
    if (c === 0 || c === 1) {
      const span = 10, upto = clamp((lt - 0.5) / 10, 0, 1) * span, miss = c === 1;
      tip = plot((t) => scaleO(oral(t, miss)), span, upto, "#e8637a", Math.max(2.5, H * 0.007));
      for (let d = 0; d < 10; d++) { if (d > upto) break; capsule(lerp(x0, x1, d / span) + W * 0.005, y1 + H * 0.035, H * 0.016, miss && d >= 4 && d <= 7); }
      text("天 →", x1, y1 + H * 0.035, fs(0.024), C.soft, "right");
      if (tip) { ctx.beginPath(); ctx.arc(tip.x, tip.y, H * 0.012, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke(); }
      const pk = { x: lerp(x0, x1, 2.25 / span), y: Y(scaleO(oral(2.25, false))) }, tr = { x: lerp(x0, x1, 2.99 / span), y: Y(scaleO(oral(2.99, false))) };
      if (c === 0) {
        callout("g0", lt > 3.4, pk.x, pk.y, n ? W * 0.3 : pk.x - W * 0.04, y0 + H * 0.02, "高峰");
        callout("g1", lt > 4.2, tr.x, tr.y, n ? W * 0.45 : tr.x + W * 0.06, y1 - H * 0.08, "低谷");
        say("g2", lt > 8, x1 - W * 0.08, y0, n ? W * 0.62 : W * 0.66, y0 + H * 0.02, n ? "按时吃就稳在区间里" : "按时吃，就稳在区间里～", "box");
      } else {
        const low = { x: lerp(x0, x1, 7.95 / span), y: Y(scaleO(oral(7.95, true))) };
        const drop = upto > 7;
        const px = W * (n ? 0.87 : 0.89), py = H * 0.78, ps = H * (n ? 0.055 : 0.07);
        chara(px, py, ps, { who: "neuron", hair: "#7a5a48", cloth: "#dff0ff", gray: drop ? 0.5 : 0, eyes: drop ? "teary" : "happy", mouth: drop ? "wavy" : "smile", brow: drop ? "worry" : null });
        if (drop) emote("gloom", px + ps, py - ps * 3.2, ps * 0.6);
        callout("g3", upto > 5, lerp(x0, x1, 5.5 / span), y1 + H * 0.03, n ? W * 0.4 : W * 0.45, y0 + H * 0.05, "连着漏了几次");
        callout("g4", upto > 7.5, low.x, low.y, n ? W * 0.5 : low.x - W * 0.08, y1 - H * 0.12, "掉出有效区间");
        say("g5", upto > 8, px, py - ps * 3.2, n ? W * 0.8 : px, H * (n ? 0.36 : 0.35), "好像又不太对劲…", "think");
      }
    }
    if (c === 4) {
      const span = 16, upto = clamp((lt - 0.5) / 7, 0, 1) * span;
      const slow = (t) => 0.62 * (1 - Math.exp(-t / 5.5)) + 0.02, fast = (t) => 0.62 * (1 - Math.exp(-t / 0.6)) + 0.03 * Math.exp(-Math.pow(t - 1.2, 2)) + 0.02;
      const e1 = plot(slow, span, upto, "#8f84e0", Math.max(2.5, H * 0.007), [8, 6]);
      const e2 = lt > 5 ? plot(fast, span, clamp((lt - 5) / 6, 0, 1) * span, "#2f9fd6", Math.max(3, H * 0.008)) : null;
      text("周 →", x1, y1 + H * 0.035, fs(0.024), C.soft, "right");
      // 起步的针和药片
      if (lt > 5) { const iy = y1 + H * 0.04; [0, 0.15].forEach((w) => { const x = lerp(x0, x1, w / span) + W * 0.01; ctx.save(); ctx.translate(x, iy); ctx.rotate(-0.8); rrect(-H * 0.022, -H * 0.008, H * 0.044, H * 0.016, 3); ctx.fillStyle = "#e3f3ff"; ctx.fill(); outline(1); ctx.stroke(); ctx.restore(); }); capsule(lerp(x0, x1, 1 / span), iy, H * 0.013, false); capsule(lerp(x0, x1, 2 / span), iy, H * 0.013, false); }
      const t4 = 4;
      callout("g6", lt > 2.5, lerp(x0, x1, t4 / span), Y(slow(t4)), n ? W * 0.62 : lerp(x0, x1, 0.5), y1 - H * 0.05, "只打维持针：爬坡很慢");
      callout("g7", lt > 7.5 && !!e2, lerp(x0, x1, 1.5 / span), Y(fast(1.5)), n ? W * 0.4 : lerp(x0, x1, 0.3), y0 + H * 0.0, "加起始负荷或口服重叠");
      say("g8", lt > 10.5, lerp(x0, x1, 0.7), Y(0.64), n ? W * 0.7 : W * 0.78, Y(0.2), "⚠ 怎么起步因药而异", "box");
    }
    if (c === 5) {
      const span = 12, upto = clamp((lt - 0.5) / 6, 0, 1) * span;
      const oz = (t) => 0.6 + 0.16 * Math.sin(t * Math.PI * 2 * 1.6), lz = (t) => 0.6 + 0.03 * Math.sin(t * Math.PI * 2 / 4) + 0.02 * Math.cos(t * 1.3);
      plot(oz, span, upto, Anima.alpha("#e8637a", 0.55), Math.max(1.5, H * 0.004));
      const e = plot(lz, span, upto, "#2f9fd6", Math.max(3.5, H * 0.01));
      text("口服", x0 + W * 0.02, Y(0.86), fs(0.026), "#e8637a", "left");
      text("长效针剂", x0 + W * (n ? 0.17 : 0.1), Y(0.86), fs(0.026), "#2f9fd6", "left");
      // 间隔
      const iv = ["2 周", "1 个月", "2 个月", "3 个月", "半年"], iy = H * (n ? 0.87 : 0.88);
      text("打针间隔（因药和剂型而异）", W * 0.5, iy - H * (n ? 0.075 : 0.07), fs(0.026), C.soft);
      iv.forEach((s, j) => { const p = prog(6.5 + j * 0.6, 0.4); if (p <= 0) return; ctx.save(); ctx.globalAlpha *= p; chip(s, lerp(W * (n ? 0.12 : 0.18), W * (n ? 0.88 : 0.82), j / 4), iy, "#2a6f99", "#e8f5fd", n ? 0.03 : 0.032); ctx.restore(); });
      callout("g9", lt > 3, lerp(x0, x1, 0.3), Y(lz(0.3 * span)), n ? W * 0.35 : W * 0.3, Y(0.2), "峰谷更小，更平稳");
    }
    ctx.restore();
  }

  // ---------- 第 3 幕：肌肉里的小仓库 ----------
  function viewMuscle(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    const top = Anima.topSafe() + H * 0.02, sk = top + H * 0.08, mu = sk + H * 0.05, vy = H * 0.8, vh = H * 0.09;
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = C.skin; ctx.fillRect(0, top, W, sk - top); ctx.fillStyle = "#fff1b8"; ctx.fillRect(0, sk, W, mu - sk);
    ctx.fillStyle = C.muscle; ctx.fillRect(0, mu, W, H - mu);
    outline(1.4); [top, sk, mu].forEach((y) => { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); });
    ctx.strokeStyle = Anima.alpha("#d8888f", 0.5); ctx.lineWidth = 1.2;
    for (let y = mu + H * 0.04; y < vy - H * 0.02; y += H * 0.045) { ctx.beginPath(); ctx.moveTo(0, y); for (let x = 0; x <= W; x += W / 20) ctx.lineTo(x, y + Math.sin(x * 0.02 + y) * 3); ctx.stroke(); }
    text("皮肤", W * 0.04, (top + sk) / 2, fs(0.024), C.soft, "left");
    text("肌肉", W * 0.04, mu + H * 0.04, fs(0.024), C.soft, "left");
    // 血管
    rrect(-10, vy, W + 20, vh, vh / 2); ctx.fillStyle = C.vessel; ctx.fill(); outline(1.6); ctx.stroke();
    for (let k = 0; k < 9; k++) { const x = ((time * 50 + k * W / 9) % (W + 40)) - 20; ctx.beginPath(); ctx.ellipse(x, vy + vh * (0.35 + (k % 2) * 0.3), vh * 0.22, vh * 0.12, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd0d0"; ctx.fill(); }
    text("毛细血管", W * 0.9, vy + vh / 2, fs(0.024), "#fff", "center");
    // 针
    const dx = W * (n ? 0.42 : 0.4), dy = (mu + vy) / 2 - H * 0.03;
    const inj = cur === 2 ? prog(0.5, 1.4) * (1 - prog(3.4, 1)) : 0, push = cur === 2 ? prog(2, 1.2) : 1;
    const R = H * (n ? 0.1 : 0.11) * (cur === 2 ? push : 1) * (1 - (cur === 2 ? prog(5, 9) * 0.12 : 0.15));
    if (R > 1) {
      ctx.beginPath(); ctx.ellipse(dx, dy, R * 1.3, R, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff7d6"; ctx.fill(); outline(1.8); ctx.stroke();
      for (let k = 0; k < 10; k++) { const q = rnd(k + 3) * Math.PI * 2, rr = Math.sqrt(rnd(k + 7)) * R * 0.75, s = R * 0.12; ctx.save(); ctx.translate(dx + Math.cos(q) * rr * 1.2, dy + Math.sin(q) * rr * 0.8); ctx.rotate(q); ctx.fillStyle = "#bfe3f5"; ctx.fillRect(-s / 2, -s / 2, s, s); outline(1); ctx.strokeRect(-s / 2, -s / 2, s, s); ctx.restore(); }
      face(dx, dy + R * 0.2, R * 0.3, 1);
    }
    if (inj > 0.01) {
      const tipY = lerp(top - H * 0.2, dy, inj), sw = H * 0.05, sl = H * 0.2;
      ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(dx, tipY); ctx.lineTo(dx, tipY - H * 0.12); ctx.stroke();
      rrect(dx - sw / 2, tipY - H * 0.12 - sl, sw, sl, 6); ctx.fillStyle = "rgba(230,245,255,0.95)"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.fillStyle = "#bfe3f5"; ctx.fillRect(dx - sw / 2 + 3, tipY - H * 0.12 - sl * (1 - push) + 2, sw - 6, sl * (1 - push) * 0.9);
    }
    // 从仓库里溜出来的药
    const rel = cur === 2 ? prog(4.6, 0.5) : 1;
    for (let k = 0; k < 5; k++) {
      if (rel <= 0) break;
      const t = (time * 0.12 + k / 5) % 1, sx = dx + R * 1.1, ex = W * (0.6 + k * 0.08);
      const x = lerp(sx, ex, t), y = lerp(dy + R * 0.3, vy + vh * 0.55, ease(t));
      ctx.save(); ctx.globalAlpha *= rel * Math.min(1, (1 - t) * 5);
      chara(x, y, H * 0.026, Object.assign({}, LAI, { shadow: false, walk: time * 8 + k, eyes: "happy" }));
      ctx.restore();
    }
    if (cur === 2 && inj > 0.5 && push < 1) sfx("噗～", dx + H * 0.08, dy - H * 0.12, H * 0.034, "#2f9fd6", -0.1, 1);
    callout("m0", cur === 2 && lt > 4.2, dx - R * 1.1, dy, n ? W * 0.2 : W * 0.2, dy + H * 0.14, "药物储库：小仓库");
    callout("m1", cur === 2 && lt > 7.5, W * 0.7, vy + vh * 0.3, n ? W * 0.72 : W * 0.72, mu + H * 0.06, "一点点进入血液");
    say("m2", cur === 2 && lt > 9.5, dx, dy - R * 0.5, n ? W * 0.3 : W * 0.24, top + H * 0.02 + H * 0.12, "我慢慢放，能管好几周～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：两种做法 ----------
  function viewForms(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#fff6ef");
    Anima.petals(6, 0.4, 33);
    const top = Anima.topSafe() + H * 0.04, gap = W * 0.03, cw = (W - gap * 3) / 2, ch = H - top - H * 0.05;
    const L = gap, R = gap * 2 + cw;
    [[L, "酯化前体（油剂）"], [R, "微晶 / 纳米晶体"]].forEach((q) => { rrect(q[0], top, cw, ch, 16); ctx.fillStyle = "#fffdfb"; ctx.fill(); outline(1.6); ctx.stroke(); text(q[1], q[0] + cw / 2, top + fs(0.03) * 1.1, fs(0.03), C.ink); });
    const cs = H * (n ? 0.04 : 0.042);
    // 左：油滴里的前体药 → 出油滴 → 酯酶剪尾巴
    const ox = L + cw * 0.3, oy = top + ch * 0.45, orr = Math.min(cw * 0.2, H * 0.13);
    ctx.beginPath(); ctx.arc(ox, oy, orr, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,225,130,0.55)"; ctx.fill(); outline(1.6); ctx.stroke();
    text("油滴", ox, oy - orr - H * 0.025, fs(0.024), C.soft);
    const tail = (x, y, s, a2) => { ctx.save(); ctx.globalAlpha *= a2; ctx.strokeStyle = "#e7a23a"; ctx.lineWidth = Math.max(2, s * 0.18); ctx.beginPath(); ctx.moveTo(x - s * 0.5, y - s * 1.2); for (let k = 1; k <= 6; k++) ctx.lineTo(x - s * 0.5 - k * s * 0.3, y - s * 1.2 + (k % 2 ? -1 : 1) * s * 0.25); ctx.stroke(); ctx.restore(); };
    for (let k = 0; k < 2; k++) { const x = ox + (k ? orr * 0.35 : -orr * 0.25), y = oy + orr * 0.45; tail(x, y, cs * 0.8, 1); chara(x, y, cs * 0.8, Object.assign({}, LAI, { eyes: "sleepy", shadow: false })); }
    const u = ((lt - 0.8) % 7) / 7, run = lt > 0.8;
    const ex = L + cw * 0.66, ey = top + ch * 0.86;
    chara(ex, ey, cs, Object.assign({}, EST, { item: "scissors", arms: u > 0.45 && u < 0.6 ? "up" : "hold", eyes: "happy", dir: -1 }));
    if (run) {
      const s0 = { x: ox + orr * 0.1, y: oy + orr * 0.45 }, s1 = { x: ox + orr * 1.4, y: top + ch * 0.62 }, s2 = { x: ex - cs * 1.8, y: ey }, s3 = { x: L + cw * 0.92, y: top + ch * 0.62 };
      let x, y, cut = 0, al = 1;
      if (u < 0.25) { const p = ease(u / 0.25); x = lerp(s0.x, s1.x, p); y = lerp(s0.y, s1.y, p); }
      else if (u < 0.45) { const p = ease((u - 0.25) / 0.2); x = lerp(s1.x, s2.x, p); y = lerp(s1.y, s2.y, p); }
      else if (u < 0.6) { x = s2.x; y = s2.y; cut = (u - 0.45) / 0.15; }
      else { const p = ease((u - 0.6) / 0.4); x = lerp(s2.x, s3.x, p); y = lerp(s2.y, s3.y, p); cut = 1; al = 1 - Math.max(0, (u - 0.9) / 0.1); }
      if (cut < 1) tail(x, y, cs * 0.85, 1); else { ctx.save(); ctx.globalAlpha *= clamp(1 - (u - 0.6) * 4, 0, 1); tail(s2.x - cs * 0.2, s2.y + cs * 0.9, cs * 0.85, 1); ctx.restore(); }
      chara(x, y, cs * 0.85, Object.assign({}, LAI, { alpha: al, eyes: cut >= 1 ? "sparkle" : "open", arms: cut >= 1 ? "up" : "down", walk: cut > 0 && cut < 1 ? null : time * 9 }));
      if (cut > 0.2 && cut < 1) sfx("咔嚓！", s2.x, s2.y - cs * 3.6, H * 0.032, "#4fb893", -0.1, 1);
    }
    // 右：晶体从表面一点点溶掉
    const kx = R + cw * 0.45, ky = top + ch * 0.52, bs = Math.min(cw * 0.07, H * 0.045), G = 5;
    const gone = Math.floor(clamp(lt / 13, 0, 1) * 9);
    const edge = [];
    for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) { const e = Math.min(i, j, G - 1 - i, G - 1 - j); if (e === 0) edge.push([i, j]); }
    for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) {
      const idx = edge.findIndex((q) => q[0] === i && q[1] === j);
      const shown = idx < 0 || idx >= gone;
      const fad = idx === gone ? 1 - (lt / 13 * 9 - gone) : 1;
      if (!shown) continue;
      ctx.save(); ctx.globalAlpha *= clamp(fad, 0.1, 1);
      const x = kx + (i - G / 2) * bs, y = ky + (j - G / 2) * bs;
      ctx.fillStyle = "#bfe3f5"; ctx.fillRect(x, y, bs, bs); outline(1); ctx.strokeRect(x, y, bs, bs);
      ctx.restore();
    }
    for (let k = 0; k < 4; k++) { const t = (time * 0.18 + k / 4) % 1, q = k * 1.7 + 0.6; const x = kx + Math.cos(q) * (bs * 3 + t * cw * 0.35), y = ky + Math.sin(q) * (bs * 3 + t * ch * 0.25); ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI); chara(x, y + cs * 1.2, cs * 0.6, Object.assign({}, LAI, { shadow: false, eyes: "happy" })); ctx.restore(); }
    callout("f0", win(1, 5.5), ox - orr * 0.4, oy + orr * 0.1, n ? L + cw * 0.5 : L + cw * 0.3, top + ch * (n ? 0.14 : 0.2), "长长的脂肪酸尾巴");
    callout("f1", lt > 6, kx + bs * 2.5, ky - bs * 1.5, n ? R + cw * 0.5 : R + cw * 0.55, top + ch * 0.9, "只能从表面慢慢溶");
    say("f2", lt > 9, ex, ey - cs * 3.2, n ? L + cw * 0.5 : L + cw * 0.5, top + ch * (n ? 0.14 : 0.28), n ? "剪掉尾巴～" : "剪掉尾巴，才有活性～", "say");
    ctx.restore();
  }

  // ---------- 第 7 幕：好处和注意 ----------
  function viewPros(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6fbff", "#fff5f2");
    const top = Anima.topSafe() + H * 0.04, gap = W * 0.03, cw = (W - gap * 3) / 2, ch = H - top - H * 0.05;
    const L = gap, R = gap * 2 + cw, onL = prog(0.5, 0.6), onR = prog(6.5, 0.6);
    [[L, "好处：不怕漏服", onL, "#e8f7ef"], [R, "注意：撤不回来", onR, "#fff0e6"]].forEach((q) => { rrect(q[0], top, cw, ch, 16); ctx.fillStyle = mix("#fffdfb", q[3], q[2]); ctx.fill(); outline(1.6); ctx.stroke(); text(q[1], q[0] + cw / 2, top + fs(0.03) * 1.1, fs(0.03), C.ink); });
    // 左：两行日历
    const cols = 7, cell = Math.min((cw - W * 0.04) / cols, H * 0.07), gx = L + (cw - cell * cols) / 2;
    const rowY = [top + ch * 0.28, top + ch * 0.6];
    text("口服", L + cw / 2, rowY[0] - H * 0.045, fs(0.026), C.soft);
    text("长效针剂", L + cw / 2, rowY[1] - H * 0.045, fs(0.026), C.soft);
    for (let r = 0; r < 2; r++) for (let k = 0; k < 14; k++) {
      const x = gx + (k % 7) * cell, y = rowY[r] + Math.floor(k / 7) * cell, p = prog(0.8 + k * 0.25, 0.3);
      rrect(x + 2, y + 2, cell - 4, cell - 4, 4); ctx.fillStyle = r === 1 ? mix("#ffffff", "#cdeefa", p) : "#fff"; ctx.fill(); outline(1); ctx.stroke();
      if (p <= 0) continue;
      if (r === 0) { const miss = k === 3 || k === 4 || k === 9 || k === 12; capsule(x + cell / 2, y + cell / 2, cell * 0.25, miss); }
      else if (k === 0) { ctx.save(); ctx.translate(x + cell / 2, y + cell / 2); ctx.rotate(-0.8); rrect(-cell * 0.35, -cell * 0.1, cell * 0.7, cell * 0.2, 3); ctx.fillStyle = "#8fc9e8"; ctx.fill(); outline(1); ctx.stroke(); ctx.restore(); }
    }
    // 右：仓库还在放，副作用慢慢退
    const dx = R + cw * 0.3, dy = top + ch * 0.5, dr = Math.min(cw * 0.14, H * 0.08);
    ctx.beginPath(); ctx.ellipse(dx, dy, dr * 1.3, dr, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff7d6"; ctx.fill(); outline(1.6); ctx.stroke();
    face(dx, dy + dr * 0.15, dr * 0.35, 0);
    text("小仓库", dx, dy + dr * 1.45, fs(0.026), C.soft);
    const px = R + cw * 0.74, py = top + ch * 0.9, ps = H * (n ? 0.05 : 0.06), side = onR * (1 - prog(10, 4) * 0.4);
    for (let k = 0; k < 3; k++) { const t = (time * 0.25 + k / 3) % 1; ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * onR; ctx.beginPath(); ctx.arc(lerp(dx + dr * 1.2, px - ps, t), lerp(dy, py - ps * 1.2, t), H * 0.012, 0, Math.PI * 2); ctx.fillStyle = "#8fc9e8"; ctx.fill(); outline(1); ctx.stroke(); ctx.restore(); }
    chara(px, py, ps, { who: "neuron", hair: "#7a5a48", cloth: "#dff0ff", eyes: side > 0.5 ? "sleepy" : "open", mouth: side > 0.5 ? "wavy" : "smile", brow: side > 0.5 ? "worry" : null, gray: side * 0.3 });
    if (side > 0.5) emote("zzz", px + ps, py - ps * 3.2, ps * 0.6);
    // 取不出来：一只打叉的小手
    if (onR > 0.5) { const hx = dx, hy = dy - dr * 1.9; ctx.save(); ctx.globalAlpha *= onR; ctx.beginPath(); ctx.arc(hx, hy, H * 0.03, 0, Math.PI * 2); ctx.fillStyle = "#ffe0cc"; ctx.fill(); outline(1.3); ctx.stroke(); ctx.strokeStyle = C.bad; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(hx - H * 0.035, hy - H * 0.035); ctx.lineTo(hx + H * 0.035, hy + H * 0.035); ctx.stroke(); ctx.restore(); }
    callout("p0", win(4, 9), gx + cell * 3.5, rowY[0] + cell, n ? L + cw * 0.5 : L + cw * 0.5, top + ch * 0.93, "口服：漏了好几天");
    callout("p1", lt > 8, dx, dy - dr * 1.9, n ? R + cw * 0.5 : R + cw * 0.5, top + ch * 0.2, "放进去就取不出来");
    say("p2", lt > 10.2, px, py - ps * 3.2, n ? R + cw * 0.7 : R + cw * 0.6, top + ch * (n ? 0.55 : 0.65), n ? "慢慢才退…" : "副作用要慢慢才退…", "think");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.g > 0.02) viewGraph(S.g);
    if (S.v1 > 0.02) viewMuscle(S.v1);
    if (S.v2 > 0.02) viewForms(S.v2);
    if (S.v3 > 0.02) viewPros(S.v3);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#2a6f99", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#d0679a", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#8fc9e8",
    titleCard: { lines: ["长效针剂：", "慢慢释放的小仓库"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
