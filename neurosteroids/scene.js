Anima.register("neurosteroids", {
    "title": "突触外的安静开关：神经甾体",
    "tag": "心境障碍",
    "headline": "突触外面，还有一个【安静开关】",
    "lede": "GABA-A 门不只守在突触里，突触外面还有一批对一点点 GABA 就有反应的门，负责持续的“背景安静”。身体自带的神经甾体别孕烯醇酮，能把这两种门都调得更灵。看看它和产后抑郁的一种假说，以及布瑞诺龙、祖拉诺龙是怎样起作用的。",
    "summary": "突触内（γ）和突触外（δ）两种 GABA-A、相位性和紧张性抑制、神经甾体的正性变构调节、分娩后骤降假说，以及神经甾体类药物。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · GABA-A 与神经甾体",
    "footer": "产后情绪低落持续两周以上、或出现伤害自己或孩子的念头，请尽快告诉家人并就医；药物请遵医嘱使用。",
    "canvasLabel": "拟人化的 GABA、别孕烯醇酮和药物访客在突触内外两种 GABA-A 门上帮忙开门的动画",
    "regions": ["synapse", "hypo"],
    "parts": ["mood"],
    "cast": ["GABA", "drug"],
    "color": "#e8a6c8"
  }, () => {
  const CH = [
    { title: "两种位置的 GABA-A", v0: 1, v1: 0, card: 1,
      pill: ["突触里", "含 γ"], pill2: ["突触外", "含 δ"],
      text: "GABA 打开的 GABA-A 门，其实住在两种地方。一种在突触里，正对着释放 GABA 的末梢，大多含有 γ 亚基；另一种在突触外面的膜上，很多含有 δ 亚基。突触里，GABA 一阵一阵地涌出来，又很快被收走；突触外，只有从突触里漏出来的零星 GABA，浓度低得多。",
      fact: "突触内的 GABA-A 多含 γ 亚基，突触外的一类含 δ 亚基" },
    { title: "一下一下，和一直都在", v0: 1, v1: 0, card: 1,
      pill: ["相位性", "一阵一阵"], pill2: ["紧张性", "一直都在"],
      text: "两种门的脾气也不一样。突触里的门等 GABA 大量涌来才开，开一下、关一下，产生一阵一阵的“相位性抑制”；突触外的门对很低浓度的 GABA 也敏感，一直微微开着，带来持续的“紧张性抑制”。苯二氮䓬的座位要靠 γ 亚基，所以它只帮得上突触里的门，突触外的 δ 门没有它的座位。",
      fact: "苯二氮䓬需要 γ 亚基；含 δ 亚基的突触外 GABA-A 对它不敏感" },
    { title: "神经甾体：两边都帮", v0: 1, v1: 0, card: 1,
      pill: ["别孕烯醇酮", "PAM"], pill2: ["紧张性", "大大增强"],
      text: "身体里有一类自带的安静帮手，叫神经甾体，比如别孕烯醇酮，它由孕激素（孕酮）代谢而来。它钻进细胞膜，坐在 GABA-A 门的另一个座位上，是正性变构调节剂：自己不开门，但让 GABA 来时门开得更好。两种门它都能帮，尤其能把突触外那扇门的“背景安静”调大。",
      fact: "神经甾体是 GABA-A 的正性变构调节剂，对含 δ 亚基的突触外受体作用尤其明显" },
    { title: "分娩后骤降", v0: 0, v1: 1, card: 0,
      pill: ["分娩后", "骤降 ↓"], pill2: ["假说", "来不及适应"],
      text: "怀孕期间，孕酮和别孕烯醇酮升得很高，大脑的 GABA-A 门也慢慢适应了这么多帮手。分娩以后，这些激素在短短几天里骤降，可门的数量和组成可能来不及调回来，安静开关一下子变弱了。这是解释产后抑郁的一种假说，并不是全部原因：遗传、睡眠不足、压力和支持不够也都有关系。",
      fact: "“分娩后神经甾体骤降、GABA-A 来不及适应”是产后抑郁的一种机制假说" },
    { title: "神经甾体类药物", v0: 1, v1: 0, card: 1,
      pill: ["布瑞诺龙", "静脉"], pill2: ["祖拉诺龙", "口服"],
      text: "顺着这个思路，科学家做出了神经甾体类药物。布瑞诺龙其实就是别孕烯醇酮做成的静脉制剂，需要在医院里连续输注；祖拉诺龙则是口服的神经甾体。它们同时作用在突触里和突触外的 GABA-A 上，把安静开关重新调大，起效比传统抗抑郁药快，常常几天内就能看到变化。",
      fact: "布瑞诺龙、祖拉诺龙已在一些国家获批用于产后抑郁，起效以天计" },
    { title: "开关别调太大", v0: 1, v1: 0, card: 1,
      pill: ["常见", "嗜睡"], pill2: ["用药", "遵医嘱"],
      text: "安静开关也不能调得太大。这些药作用在全脑的 GABA-A 上，常见的副作用是嗜睡、头晕；布瑞诺龙输注时可能过度镇静，要有医护人员在旁监测；吃祖拉诺龙后的一段时间内不要开车。和酒、苯二氮䓬这些同样作用在 GABA-A 上的东西一起用，抑制还会叠加。一定要在医生指导下使用。",
      fact: "作用在 GABA-A 上的东西会叠加：用药期间别喝酒，正在吃的镇静药要告诉医生" },
  ];
  const DUR = 14;
  const C = Object.assign({}, Anima.C, { term: "#ffd6c4", post: "#f5dcf0", out: "#f3f8ff", door: "#c9c0f5", doorX: "#f7c3dc", allo: "#f4a7c4" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, card: 0 };
  const ALLO = { hair: "#f08fb8", eye: "#c0507e", cloth: "#ffe3ef", hat: "beret", hatColor: "#ffc2d9", label: "ALLO", style: "long" };
  const P4 = { hair: "#e8b36b", eye: "#a8742a", cloth: "#fff1d6", hat: "beret", hatColor: "#ffd79a", label: "孕酮", style: "long" };
  const BZ = { who: "drug", label: "BZ", hatColor: "#9ad8b0", hatColor2: "#fff1b8" };
  const BRX = { who: "drug", label: "BRX", hatColor: "#f4a7c4", hatColor2: "#ffffff" };
  const ZUR = { who: "drug", label: "ZUR", hatColor: "#c3a6ec", hatColor2: "#fff1b8" };
  const P = 2.6; // 突触里 GABA 一阵的周期（秒）
  const lv = { tonic: 0.3, amp: 1, act0: 0, act1: 0, dim: 0 };
  function update(dt) {
    lt = Anima.sceneTime;
    const ph = time % P, burst = ph > 0.45 && ph < 1.3 ? 1 : 0;
    const k = 1 - Math.exp(-dt * 2.5), kf = 1 - Math.exp(-dt * 10);
    let tonic = 0.3, amp = 1, dim = 0;
    if (cur === 1 && lt > 7) amp = 1.5;
    if (cur === 2) { tonic = lerp(0.3, 0.9, prog(5, 3)); amp = lerp(1, 1.4, prog(5, 3)); }
    if (cur === 4) { tonic = lerp(0.3, 0.85, prog(4, 3)); amp = lerp(1, 1.4, prog(4, 3)); }
    if (cur === 5) { tonic = lerp(0.85, 1.25, prog(4, 5)); amp = 1.6; dim = prog(4, 5); }
    lv.tonic = lerp(lv.tonic, tonic, k); lv.amp = lerp(lv.amp, amp, k); lv.dim = lerp(lv.dim, dim, k);
    lv.act0 = lerp(lv.act0, burst, kf);
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fs = (k) => Math.max(10, H * (k || 0.026)) * Anima.UI;
  function nameTag(t, x, y, col) {
    const f = fs(0.027);
    ctx.font = `${f}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + f * 1.1;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - f * 0.72, w, f * 1.44, f * 0.72); ctx.fillStyle = "rgba(255,255,255,0.94)"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, f, col || C.ink);
  }

  // ---------- 突触画面 ----------
  function geo() {
    const n = N(), mem = H * (n ? 0.6 : 0.58), cx = W * 0.5, tw = Math.min(W * 0.4, H * 0.78);
    const rs = H * (n ? 0.058 : 0.055), cs = H * (n ? 0.042 : 0.038);
    return { n, mem, cx, tw, th: H * 0.33, rs, cs,
      rec: [{ x: W * (n ? 0.16 : 0.13), t: "d" }, { x: cx - tw * 0.2, t: "g" }, { x: cx + tw * 0.2, t: "g" }, { x: W * (n ? 0.87 : 0.87), t: "d" }] };
  }
  // 一扇 GABA-A 门：t = "g"（突触里，含 γ，有苯二氮䓬座位）或 "d"（突触外，含 δ）
  function door(g, r, act) {
    const s = g.rs, col = r.t === "g" ? C.door : C.doorX;
    const R = Anima.receptor(r.x, g.mem, s, col, act, { shape: "round" });
    const bx = r.x + s * 0.95, by = g.mem - s * 0.55;
    ctx.beginPath(); ctx.arc(bx, by, s * 0.32, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
    text(r.t === "g" ? "γ" : "δ", bx, by + 1, s * 0.42, r.t === "g" ? C.lavDeep : "#c0507e", "center", Anima.SANS);
    if (r.t === "g") { ctx.beginPath(); ctx.rect(r.x - s * 1.18, g.mem - s * 1.35, s * 0.34, s * 0.34); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.1); ctx.stroke(); }
    // 神经甾体的座位：在膜里面
    ctx.save(); ctx.translate(r.x - s * 0.9, g.mem + s * 0.28); ctx.rotate(Math.PI / 4);
    ctx.fillStyle = "#ffd1e4"; ctx.fillRect(-s * 0.13, -s * 0.13, s * 0.26, s * 0.26); outline(1); ctx.strokeRect(-s * 0.13, -s * 0.13, s * 0.26, s * 0.26); ctx.restore();
    return { site: R.site, bz: { x: r.x - s * 1.01, y: g.mem - s * 1.35 }, ns: { x: r.x - s * 1.75, y: g.mem + s * 0.75 } };
  }
  function trace(g, a) {
    if (a < 0.02) return null;
    const n = g.n, x0 = W * (n ? 0.2 : 0.2), x1 = W * 0.97, y0 = H * (n ? 0.72 : 0.7), y1 = H * 0.96, base = y1 - H * 0.03;
    ctx.save(); ctx.globalAlpha *= a;
    rrect(x0, y0, x1 - x0, y1 - y0, H * 0.02); ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill(); outline(1.4); ctx.stroke();
    text("抑制电流", x0 + H * 0.02, y0 + fs(0.022) * 0.9, fs(0.022), C.soft, "left");
    const span = 6, hMax = (base - y0) * 0.72, tonicH = hMax * 0.42 * lv.tonic;
    const spike = (tt) => { const d = ((tt - 0.5) % P + P) % P; return lv.amp * Math.exp(-d / 0.35) * (1 - Math.exp(-d / 0.05)); };
    // 背景（紧张性）
    ctx.fillStyle = Anima.alpha("#f4a7c4", 0.35); ctx.fillRect(x0 + 2, base - tonicH, x1 - x0 - 4, tonicH);
    ctx.strokeStyle = "#e37aa8"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x0 + 2, base - tonicH); ctx.lineTo(x1 - 2, base - tonicH); ctx.stroke();
    // 一阵一阵（相位性）
    ctx.save(); rrect(x0, y0, x1 - x0, y1 - y0, H * 0.02); ctx.clip();
    ctx.strokeStyle = C.lavDeep; ctx.lineWidth = 2.2; ctx.beginPath();
    let peak = null;
    for (let k = 0; k <= 120; k++) {
      const tt = time - span + span * k / 120, x = lerp(x0 + 4, x1 - 4, k / 120), y = base - tonicH - spike(tt) * hMax * 0.62;
      if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      if (k > 30 && k < 95 && (!peak || y < peak.y)) peak = { x, y };
    }
    ctx.stroke(); ctx.restore();
    ctx.strokeStyle = Anima.alpha(C.line, 0.35); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0 + 4, base); ctx.lineTo(x1 - 4, base); ctx.stroke();
    ctx.restore();
    return { peak, tonic: { x: lerp(x0, x1, 0.2), y: base - tonicH / 2 }, x0, y0 };
  }
  function mug(x, y, s) {
    rrect(x - s * 0.5, y - s * 1.2, s, s * 1.2, s * 0.12); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + s * 0.5, y - s * 0.6, s * 0.28, -1.3, 1.3); ctx.stroke();
    ctx.fillStyle = "#fff"; ctx.beginPath();
    for (const dx of [-0.3, 0, 0.3]) { ctx.moveTo(x + dx * s + s * 0.26, y - s * 1.2); ctx.arc(x + dx * s, y - s * 1.2, s * 0.26, 0, Math.PI * 2); }
    ctx.fill(); ctx.stroke();
    text("酒", x, y - s * 0.55, s * 0.5, C.ink);
  }
  function synView(a) {
    const g = geo(), n = g.n, cs = g.cs;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.out); bg.addColorStop(1, "#fff0f6");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#f3d6ec", 0.8, 31);
    Anima.petals(8, 0.45, 12);
    Anima.postMembrane(g.mem, C.post, {});
    const T = Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    // 突触里：一阵一阵的 GABA
    const ph = time % P, u = ph / P;
    for (let i = 0; i < 6; i++) {
      const sx = g.cx + (i - 2.5) * g.tw * 0.07, sy = T.bot + H * 0.01;
      const tr = g.rec[1 + (i % 2)], tx = tr.x + ((i >> 1) - 1) * g.rs * 0.5, ty = g.mem - g.rs * 1.7;
      let x, y, al = 1;
      if (u < 0.12) { al = 0; x = sx; y = sy; }
      else if (u < 0.3) { const k = ease((u - 0.12) / 0.18); x = lerp(sx, tx, k); y = lerp(sy, ty, k); }
      else if (u < 0.5) { x = tx; y = ty; }
      else { const k = (u - 0.5) / 0.5; x = tx + (i % 2 ? 1 : -1) * k * g.tw * (0.3 + (i >> 1) * 0.12); y = ty - Math.sin(k * 2.5) * H * 0.06; al = 1 - k; }
      if (al > 0.02) chara(x, y, cs * 0.62, { who: "GABA", alpha: al, shadow: false, eyes: u < 0.5 ? "happy" : "open", arms: "down" });
    }
    // 突触外：零星几个慢慢晃
    const extra = [];
    for (let i = 0; i < 2; i++) {
      const r = g.rec[i ? 3 : 0], wob = Math.sin(time * 0.7 + i * 2);
      const x = r.x + (i ? -1 : 1) * g.rs * (1.3 + 0.6 * Math.max(0, wob)), y = g.mem - g.rs * 1.7 - Math.max(0, wob) * H * 0.04;
      chara(x, y, cs * 0.62, { who: "GABA", shadow: false, eyes: "closed", arms: "down", mouth: "cat" });
      extra.push({ x, y });
    }
    const D = g.rec.map((r, i) => door(g, r, r.t === "g" ? lv.act0 * Math.min(1, lv.amp) : clamp(lv.tonic * 0.8, 0, 1)));
    if (lv.act0 > 0.6) sfx("啪！", g.cx, g.mem - g.rs * 2.9, H * 0.034, C.lavDeep, -0.1, lv.act0);
    // 神经元的小脸
    const fx = W * (n ? 0.1 : 0.09), fy = H * 0.82, calm = clamp(lv.tonic, 0, 1.3);
    face(fx, fy, H * 0.05, cur === 3 ? -1 : 1);
    if (lv.dim > 0.4) emote("zzz", fx + H * 0.05, fy - H * 0.07, H * 0.04);
    text("神经元", fx, fy + H * 0.075, fs(0.022), C.soft);
    const tr = trace(g, S.card);

    // 访客们
    const walkTo = (o, from, to, t0, d, extraOpt) => {
      const p = prog(t0, d);
      if (p <= 0) return null;
      const x = lerp(from.x, to.x, p), y = lerp(from.y, to.y, p) - Math.sin(p * Math.PI) * H * 0.05;
      chara(x, y, cs, Object.assign({}, o, { walk: p < 1 ? time * 9 : null, arms: p < 1 ? "wave" : "hug", eyes: p < 1 ? "open" : "happy", dir: to.x > from.x ? 1 : -1 }, extraOpt || {}));
      return { x, y, sat: p >= 1 };
    };
    let bz = null, bz2 = null, al = [], p4 = null, drugs = [];
    if (cur === 1) {
      bz = walkTo(BZ, { x: g.cx - g.tw * 0.7, y: g.mem - H * 0.2 }, D[1].bz, 5.5, 2);
      bz2 = walkTo(BZ, { x: W + cs * 2, y: g.mem - H * 0.1 }, { x: D[3].bz.x + g.rs * 0.2, y: D[3].bz.y - g.rs * 0.2 }, 8, 2, { eyes: "open", arms: "down", mouth: "o" });
      if (bz2 && bz2.sat) emote("?", bz2.x + cs, bz2.y - cs * 3.3, cs * 0.7);
    }
    if (cur === 2) {
      const pp = prog(0.5, 1.2), morph = prog(2.2, 0.8), from = { x: W * 0.3, y: g.mem + g.rs * 0.75 };
      if (morph < 1) { ctx.save(); ctx.globalAlpha *= pp * (1 - morph); chara(from.x, from.y, cs, Object.assign({}, P4, { arms: "wave", eyes: "happy" })); ctx.restore(); }
      if (morph > 0 && morph < 1) sparkles(from.x, from.y - cs * 1.5, cs * 2.2, 5, 1, 9);
      p4 = from;
      [0, 1, 3].forEach((ri, j) => {
        const st = j === 0 ? from : { x: ri === 3 ? W + cs * 2 : -cs * 2, y: g.mem + g.rs * 0.75 };
        const o = walkTo(ALLO, st, D[ri].ns, j === 0 ? 3 : 2.6 + j * 0.6, 2.4);
        if (o) al.push(o);
      });
    }
    if (cur >= 4) {
      [[0, BRX], [1, BRX], [2, ZUR], [3, ZUR]].forEach((q, j) => {
        const ri = q[0], st = { x: ri < 2 ? -cs * 2 : W + cs * 2, y: g.mem + g.rs * 0.75 };
        const o = cur === 4 ? walkTo(q[1], st, D[ri].ns, 0.8 + j * 0.5, 2.6) : (chara(D[ri].ns.x, D[ri].ns.y, cs, Object.assign({}, q[1], { arms: "hug", eyes: lv.dim > 0.5 ? "sleepy" : "happy", dir: ri < 2 ? 1 : -1 })), { x: D[ri].ns.x, y: D[ri].ns.y, sat: true });
        if (o) drugs.push(o);
      });
      if (drugs[0]) { const d0 = drugs[0]; ctx.save(); ctx.globalAlpha *= prog(1, 1); nameTag("布瑞诺龙", d0.x, d0.y + H * 0.04); ctx.restore(); }
      if (drugs[3]) { const d3 = drugs[3]; ctx.save(); ctx.globalAlpha *= cur === 4 ? prog(3, 1) : 1; nameTag("祖拉诺龙", d3.x, d3.y + H * 0.04); ctx.restore(); }
      if (cur === 4 && drugs[0]) { // 输液袋
        const bxp = drugs[0].x - cs * 1.4, byp = drugs[0].y - cs * 3.2;
        rrect(bxp - cs * 0.35, byp - cs * 0.5, cs * 0.7, cs * 0.9, cs * 0.2); ctx.fillStyle = "#fff6fb"; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.fillStyle = Anima.alpha("#f4a7c4", 0.8); ctx.fillRect(bxp - cs * 0.28, byp - cs * 0.05, cs * 0.56, cs * 0.35);
      }
    }
    if (cur === 5) {
      const pm = prog(3, 1.5), pb = prog(4.5, 1.5);
      ctx.save(); ctx.globalAlpha *= pm; mug(g.cx - g.tw * 0.62, g.mem - H * 0.06, H * 0.05); ctx.restore();
      if (pb > 0) chara(g.cx + g.tw * 0.62, g.mem - H * 0.02, cs, Object.assign({}, BZ, { alpha: pb, arms: "carry", eyes: "sleepy", dir: -1 }));
      if (lv.dim > 0.05) { ctx.fillStyle = Anima.alpha("#8a82b8", 0.14 * lv.dim); ctx.fillRect(0, 0, W, H); }
    }

    // ---------- 标注和气泡 ----------
    const c = cur, top = Anima.topSafe() + H * 0.02, midY = g.th + H * 0.03;
    if (c === 0) {
      callout("n0a", win(1.5, n ? 5 : 99), g.rec[1].x, g.mem - g.rs * 0.8, g.cx - g.tw * 0.05, H * 0.44, "突触里的 GABA-A（含 γ）");
      callout("n0b", lt > (n ? 5 : 4.5), g.rec[0].x, g.mem - g.rs * 1.2, W * 0.2, midY - H * 0.06, "突触外的 GABA-A（含 δ）");
      say("n0c", lt > (n ? 9 : 8), extra[1].x, extra[1].y - cs * 2, W * 0.8, midY + H * 0.04, "这里 GABA 只有零星几个～", "say");
    }
    if (c === 1 && tr) {
      callout("n1a", win(1, n ? 4 : 5.5) && !!tr.peak, tr.peak ? tr.peak.x : 0, tr.peak ? tr.peak.y : 0, W * 0.6, H * 0.62, "相位性：一阵一阵");
      callout("n1b", win(n ? 4 : 1.8, n ? 6 : 5.5), tr.tonic.x, tr.tonic.y, W * 0.32, H * 0.64, "紧张性：一直都在");
      if (bz) say("n1c", win(6.5, n ? 8.5 : 9), bz.x, bz.y - cs * 3.1, bz.x + W * 0.02, midY, "坐在 γ 旁边，帮忙～", "say");
      if (bz2) say("n1d", lt > (n ? 9 : 10), bz2.x, bz2.y - cs * 3.1, W * 0.72, midY + H * 0.02, "δ 门没有我的座位？", "think");
    }
    if (c === 2) {
      if (p4) callout("n2a", win(0.8, 3.5), p4.x, p4.y - cs * 2, W * 0.3, midY + H * 0.03, "孕酮 → 别孕烯醇酮");
      const a0 = al[0];
      callout("n2b", win(4, n ? 7.5 : 8.5) && !!a0, a0 ? a0.x : 0, a0 ? a0.y - cs * 1.5 : 0, W * 0.3, midY + H * 0.03, "别孕烯醇酮：坐进膜里的座位");
      callout("n2c", lt > (n ? 7.5 : 7) && !!tr, tr ? tr.tonic.x : 0, tr ? tr.tonic.y : 0, W * 0.62, midY + H * 0.1, "突触外的背景安静调大了");
      const a1 = al[2];
      if (a1) say("n2d", lt > (n ? 11 : 9.5), a1.x, a1.y - cs * 3.1, W * 0.8, midY - H * 0.02, "我两种门都能帮！", "say");
    }
    if (c === 4) {
      callout("n4a", win(2.5, n ? 6 : 99), W * 0.06, g.mem - H * 0.02, W * 0.2, midY - H * 0.04, "布瑞诺龙：静脉输注");
      callout("n4b", lt > (n ? 6 : 4.5), W * 0.94, g.mem - H * 0.02, W * 0.78, midY - H * 0.04, "祖拉诺龙：口服");
      say("n4c", lt > (n ? 9.5 : 8), g.cx, g.mem - g.rs * 2, g.cx, midY + H * 0.06, "里外两种门，一起调大～", "say");
    }
    if (c === 5) {
      callout("n5a", win(4.5, n ? 8.5 : 99), g.cx - g.tw * 0.62, g.mem - H * 0.12, W * 0.26, midY + H * 0.02, "酒、苯二氮䓬：抑制会叠加");
      say("n5b", lt > (n ? 8.5 : 7.5), fx, fy - H * 0.06, W * 0.12, H * 0.72, "好困…", "think");
    }
    ctx.restore();
  }

  // ---------- 孕期和产后的曲线 ----------
  function graphView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6f9", "#f6f1ff");
    Anima.bokeh(6, "#f7d3e4", 0.7, 44);
    const n = N(), gx0 = W * 0.08, gx1 = W * 0.92, gy0 = Anima.topSafe() + H * 0.1, gy1 = H * (n ? 0.5 : 0.52), birth = 0.55;
    rrect(gx0 - W * 0.02, gy0 - H * 0.05, gx1 - gx0 + W * 0.04, gy1 - gy0 + H * 0.1, H * 0.03); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    const allo = (x) => x < birth ? lerp(0.15, 0.95, Math.pow(x / birth, 1.6)) : lerp(0.95, 0.12, ease((x - birth) / 0.07));
    const doors = (x) => x < birth ? lerp(1, 0.55, x / birth) : lerp(0.55, 1, ease((x - birth - 0.08) / 0.34));
    const X = (x) => lerp(gx0, gx1, x), Y = (v) => lerp(gy1, gy0 + H * 0.02, v);
    // 分娩线
    ctx.save(); ctx.setLineDash([5, 6]); outline(1.4); ctx.beginPath(); ctx.moveTo(X(birth), gy0 - H * 0.02); ctx.lineTo(X(birth), gy1); ctx.stroke(); ctx.restore();
    text("孕期", X(birth / 2), gy1 + fs(0.024), fs(0.024), C.soft);
    text("分娩", X(birth), gy1 + fs(0.024), fs(0.024), C.ink);
    text("产后", X((1 + birth) / 2), gy1 + fs(0.024), fs(0.024), C.soft);
    const cursor = clamp((lt - 1) / 9, 0, 1);
    const curve = (fn, col, w) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); for (let k = 0; k <= 80; k++) { const x = k / 80; if (x > cursor + 0.001) break; const px = X(x), py = Y(fn(x)); if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); } ctx.stroke(); };
    curve(allo, "#e37aa8", Math.max(2.5, H * 0.008));
    curve((x) => doors(x) * 0.8, C.lavDeep, Math.max(2, H * 0.005));
    const ly = gy0 - H * 0.015;
    ctx.fillStyle = "#e37aa8"; ctx.fillRect(gx0, ly - 2, W * 0.03, 4); text("别孕烯醇酮", gx0 + W * 0.035, ly, fs(0.024), "#e37aa8", "left");
    const lx2 = gx0 + W * (n ? 0.3 : 0.2);
    ctx.fillStyle = C.lavDeep; ctx.fillRect(lx2, ly - 2, W * 0.03, 4); text("能用的 δ 门", lx2 + W * 0.035, ly, fs(0.024), C.lavDeep, "left");
    // 空档：激素没了，门还没回来
    const gap = cursor > birth + 0.05 ? prog(6.5, 1) : 0;
    if (gap > 0) { ctx.fillStyle = Anima.alpha(C.bad, 0.12 * gap); ctx.fillRect(X(birth + 0.04), gy0 - H * 0.02, X(birth + 0.3) - X(birth + 0.04), gy1 - gy0 + H * 0.02); }
    // 妈妈沿着时间走
    const mx = X(cursor), my = H * 0.9, ms = H * (n ? 0.055 : 0.05);
    const qv = allo(cursor) * 0.6 + doors(cursor) * 0.4, sad = cursor > birth + 0.03 && cursor < birth + 0.3;
    // 下面一排：膜上的 δ 门和帮手
    const memY = H * 0.72, nD = 5;
    ctx.fillStyle = C.post; ctx.fillRect(0, memY, W, H * 0.035); outline(1.4); ctx.beginPath(); ctx.moveTo(0, memY); ctx.lineTo(W, memY); ctx.moveTo(0, memY + H * 0.035); ctx.lineTo(W, memY + H * 0.035); ctx.stroke();
    const dCount = doors(cursor) * nD, aCount = allo(cursor);
    for (let i = 0; i < nD; i++) {
      const x = W * (0.2 + i * 0.15), vis = clamp(dCount - i, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.15 + 0.85 * vis;
      Anima.receptor(x, memY, H * 0.035, C.doorX, vis * clamp(aCount * 1.2, 0.15, 1), {});
      ctx.restore();
      if (vis > 0.5 && aCount > 0.3 + i * 0.1) chara(x - H * 0.06, memY + H * 0.03, H * 0.03, Object.assign({}, ALLO, { shadow: false, arms: "hug", eyes: "happy" }));
    }
    chara(mx, my, ms, { hair: "#8a5a48", eye: "#5a3a2a", cloth: cursor < birth ? "#ffd9e6" : "#dff0ff", style: "long", hat: "none", walk: cursor < 1 ? time * 7 : null,
      eyes: sad ? "teary" : "happy", mouth: sad ? "sad" : "smile", brow: sad ? "worry" : null, arms: cursor >= birth ? "hug" : "down" });
    if (cursor >= birth) { ctx.beginPath(); ctx.ellipse(mx, my - ms * 1.3, ms * 0.45, ms * 0.32, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff6ea"; ctx.fill(); outline(1.2); ctx.stroke(); face(mx, my - ms * 1.28, ms * 0.22, 1, false); }
    if (sad) emote("gloom", mx + ms, my - ms * 3.2, ms * 0.6);
    const c3 = cur === 3;
    callout("g3a", c3 && win(2.5, n ? 5.5 : 6.5) && cursor > birth * 0.85, X(birth * 0.85), Y(allo(birth * 0.85)), X(0.25), Y(0.45), "孕期：别孕烯醇酮很高");
    callout("g3b", c3 && lt > (n ? 5.5 : 6.5) && cursor > birth + 0.05, X(birth + 0.05), Y(allo(birth + 0.05)), X(0.8), Y(0.95) + H * 0.02, "分娩后几天内骤降");
    say("g3c", c3 && lt > 8.5, X(birth + 0.16), gy1 - H * 0.1, W * 0.5, H * 0.87, "门还没调回来，安静开关变弱了", "box");
    if (c3 && lt > 10) sfx("⚠ 一种假说", W * 0.14, H * 0.87, fs(0.03), C.warn, -0.06, prog(10, 0.6));
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) synView(S.v0);
    if (S.v1 > 0.02) graphView(S.v1);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#d0679a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e8a6c8",
    titleCard: { lines: ["突触外面的", "安静开关"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
