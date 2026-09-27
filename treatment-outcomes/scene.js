Anima.register("treatment-outcomes", {
    "title": "有效、缓解、复发：怎样算治好了",
    "tag": "抗抑郁药",
    "headline": "症状减半，还是【几乎没有】？",
    "lede": "抗抑郁治疗的效果，可以画成一条症状分数随时间往下走的曲线。降到一半叫“反应”，降到几乎没有叫“缓解”；没扫干净的残留症状、缓解后又回来的复燃和复发，都藏在这条曲线里。",
    "summary": "反应（症状减半）与缓解（几乎无症状）、康复，残留症状为什么是复燃的信号，复燃和复发的区别，单胺再摄取抑制剂的缓解比例，以及好转后为什么还要巩固和维持。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · 抑郁治疗疗效的定义",
    "footer": "什么时候减药、停药，请和医生一起决定。如果症状又冒头，或者出现伤害自己的想法，请尽早告诉医生和身边的人。",
    "canvasLabel": "一位小居民沿着症状分数曲线往下走，经过“减少一半”的线，走进“缓解区”，并在巩固和维持期守住的动画",
    "regions": ["pfc"],
    "parts": ["mood"],
    "cast": ["neuron", "drug"],
    "color": "#7fb8e0"
  }, () => {
  const CH = [
    { title: "好转一半：反应", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["反应", "症状减半"], pill2: ["但还是", "半山腰"],
      text: "怎样才算抗抑郁治疗“有效”？医生常用量表给症状打分，把分数画成一条随时间变化的曲线。治疗以后，分数比开始时降低了一半或更多，就叫“反应”。这当然是好消息，可曲线还停在半山腰：人好了一些，却还没有好。过去这就算达标，现在的目标要再往下走。",
      fact: "反应：症状评分比治疗前减少至少一半" },
    { title: "几乎没有症状：缓解", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["缓解", "几乎无症状"], pill2: ["保持住", "→ 康复"],
      text: "如果分数继续往下走，一直降进几乎没有症状的区域，就叫“缓解”。这时不只是“好一些”，而是“好了”。缓解稳稳保持几个月以上，可以称为“康复”。不过康复也不等于永远不会再来。书里把这段路分成三程：先把症状降下来的急性期，接着的巩固期，以及更长的维持期。",
      fact: "现在抑郁治疗的目标是缓解，并把缓解保持下去" },
    { title: "残留症状：没扫干净的角落", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["残留", "失眠·疲劳"], pill2: ["提醒", "易复燃"],
      text: "不少人没有完全缓解，留下一些“尾巴”。书里提到，最常剩下的是失眠、疲劳、身上各处的疼痛、注意力差和提不起兴趣；情绪低落和自杀念头，反倒常常较早得到改善。别小看这些尾巴：带着残留症状的人，以后复燃的风险明显更高，所以值得告诉医生，一起继续处理。",
      fact: "最常见的残留症状：失眠、疲劳、疼痛、注意力差、兴趣低" },
    { title: "复燃和复发", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["复燃", "缓解后不久"], pill2: ["复发", "康复之后"],
      text: "好了之后症状又回来，要分两种情况。还没完全缓解，或者缓解后的头几个月里就卷土重来，叫“复燃”，可以看成同一次发作还没真正结束；已经康复一段时间，又出现新的一次发作，叫“复发”。两者都在提醒：曲线降到底以后，还要守住。",
      fact: "复燃：同一次发作卷土重来；复发：康复以后的新一次发作" },
    { title: "第一种药能缓解多少人", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["第一步", "约 1/3"], pill2: ["四步后", "约 2/3"],
      text: "经典的单胺再摄取抑制剂，比如 SSRI、SNRI，在单相抑郁里效果如何？书中引用的真实世界研究显示，第一种药就达到缓解的大约只有三分之一；接连换了四种、前后约一年，累计也只有约三分之二缓解。而且试的步数越多，缓解以后越容易复燃。这不是叫人灰心，而是说明要尽早、认真地追求缓解。",
      fact: "单相抑郁用第一种单胺再摄取抑制剂，约三分之一能缓解（研究中的约数）" },
    { title: "缓解，并且守住", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["目标", "缓解+守住"], pill2: ["减停药", "问医生"],
      text: "所以现在的目标是两件事：先把症状降到几乎没有，再把它守住。好转以后，医生通常会建议继续治疗一段时间，也就是巩固和维持，让刚恢复的大脑站稳。什么时候减药、怎样减，要和医生商量，别一觉得好了就自己停。如果症状又冒头，或者出现伤害自己的念头，请尽早告诉医生和身边的人。",
      fact: "好转后继续巩固、维持治疗，有助于减少复燃和复发" },
  ];

  const C = Object.assign({}, Anima.C, { acc: "#7fb8e0", accD: "#3f8fc4", band: "#dff5ec", half: "#f0a868" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const PT = { who: "neuron", hair: "#8a6f9e", cloth: "#dcecf8" };
  const DOC = { who: "neuron", hair: "#6d5a8a", cloth: "#ffffff", glasses: true };
  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  // ---------- 小工具 ----------
  function plate(t, x, y, bg, fs, x0, x1) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + (x0 === undefined ? 4 : x0), (x1 === undefined ? W - 4 : x1) - w / 2);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return w;
  }
  function card(x, y, w, h) {
    ctx.save();
    ctx.shadowColor = "rgba(120,110,150,0.18)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
  }
  function bg(top, bot, seed) {
    Anima.wash(top, bot);
    Anima.bokeh(6, "#d6ecfa", 0.6, seed);
    Anima.petals(5, 0.35, seed + 3);
  }
  function fade(a, fn) { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha *= a; fn(); ctx.restore(); }
  // 布局：桌面左边曲线、右边人物；手机上曲线在上、人物在下
  function lay() {
    const nw = Anima.narrow, top = Anima.topSafe() + H * 0.03;
    if (nw) return { nw, B: { x: W * 0.03, y: top, w: W * 0.94, h: H * 0.71 - top }, side: { x: W * 0.03, y: H * 0.72, w: W * 0.94, h: H * 0.27 } };
    return { nw, B: { x: W * 0.03, y: top, w: W * 0.6, h: H * 0.95 - top }, side: { x: W * 0.66, y: top, w: W * 0.31, h: H * 0.95 - top } };
  }
  // 症状曲线图：sev(t) 返回 0～1（1 = 治疗前），p 是已画到的时间比例
  function chart(B, o) {
    card(B.x, B.y, B.w, B.h);
    const fs = fz(Anima.narrow ? 0.024 : 0.03), phase = o.phase;
    const ax = B.x + fs * 1.4, aw = B.w - fs * 2.2, ay = B.y + fs * 2.2, ah = B.h - fs * (phase ? 5.6 : 4.2);
    const X = (t) => ax + t * aw, Y = (s) => ay + ah * (1 - s / 1.08);
    // 缓解区
    ctx.fillStyle = alpha(C.mintDeep, 0.16); ctx.fillRect(ax, Y(0.15), aw, Y(0) - Y(0.15));
    // 减少一半的线
    ctx.save(); ctx.setLineDash([6, 6]); ctx.strokeStyle = C.half; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(ax, Y(0.5)); ctx.lineTo(ax + aw, Y(0.5)); ctx.stroke(); ctx.restore();
    // 坐标轴
    outline(1.8); ctx.beginPath(); ctx.moveTo(ax, ay - fs * 0.6); ctx.lineTo(ax, Y(0)); ctx.lineTo(ax + aw, Y(0)); ctx.stroke();
    text("症状分数", ax + fs * 0.4, B.y + fs * 1.1, fs, C.ink, "left");
    text("时间 →", ax + aw, Y(0) + fs * 0.9, fs, C.soft, "right");
    text("减少一半", ax + fs * 0.4, Y(0.5) - fs * 0.75, fs, "#c77a2c", "left");
    text("缓解区", ax + fs * 0.4, Y(0.075), fs, "#2f8f6e", "left");
    if (phase) {
      const names = ["急性期", "巩固期", "维持期"], cuts = [0, 0.3, 0.6, 1], cols = ["#ffe6d6", "#fff1c9", "#dff5ec"];
      const py = Y(0) + fs * 2.3;
      for (let i = 0; i < 3; i++) {
        const x0 = X(cuts[i]) + 2, x1 = X(cuts[i + 1]) - 2;
        rrect(x0, py - fs * 0.75, x1 - x0, fs * 1.5, fs * 0.5); ctx.fillStyle = cols[i]; ctx.fill(); outline(1.2); ctx.stroke();
        text(names[i], (x0 + x1) / 2, py + 1, fs, C.ink);
      }
    }
    return { X, Y, ax, aw, ay, ah, fs };
  }
  function curve(g, sev, t0, t1, color, dash, lw) {
    if (t1 <= t0) return null;
    ctx.save(); if (dash) ctx.setLineDash(dash);
    ctx.strokeStyle = color; ctx.lineWidth = lw || Math.max(3, H * 0.008); ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath();
    const n = 60;
    for (let k = 0; k <= n; k++) { const t = lerp(t0, t1, k / n), x = g.X(t), y = g.Y(sev(t)); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    return { x: g.X(t1), y: g.Y(sev(t1)) };
  }
  const drop = (to, tEnd) => (t) => 1 - (1 - to) * ease(t / tEnd) + Math.sin(t * 40) * 0.012 * ease(t / tEnd);
  function rider(p, opt) { if (p) chara(p.x, p.y - H * 0.004, H * (Anima.narrow ? 0.034 : 0.03), Object.assign({}, PT, { shadow: false }, opt)); }

  // ---------- 第 1 幕：反应 ----------
  function v0(a) {
    fade(a, () => {
      const L = lay(); bg("#f3f9ff", "#fdf3f6", 11);
      const g = chart(L.B, {});
      const sev = drop(0.42, 0.5), p = prog(0.6, 6.5) * 0.95;
      const end = curve(g, sev, 0, Math.max(0.001, p), C.accD);
      const crossed = sev(p) < 0.5;
      rider(end, { walk: p < 0.95 ? time * 8 : null, eyes: crossed ? "happy" : "open", mouth: crossed ? "smile" : "flat", brow: crossed ? null : "worry" });
      const sx = L.nw ? L.side.x + L.side.w * 0.2 : L.side.x + L.side.w * 0.45, sy = L.nw ? L.side.y + L.side.h * 0.8 : H * 0.9, s = H * (L.nw ? 0.05 : 0.06);
      chara(sx, sy, s, Object.assign({}, PT, { eyes: lt > 8 ? "open" : "sleepy", mouth: lt > 8 ? "smile" : "flat", brow: "worry", arms: "down", tag: "治疗中" }));
      if (!L.nw) {
        const cx = L.side.x + L.side.w / 2;
        fade(prog(6.5, 1), () => plate("反应 = 分数降低 ≥ 50%", cx, L.side.y + H * 0.08, "#ffe9d6", fz(0.028), L.side.x, L.side.x + L.side.w));
        fade(prog(10.5, 1), () => plate("还没到终点", cx, L.side.y + H * 0.17, "#fff", fz(0.028), L.side.x, L.side.x + L.side.w));
      }
      if (lt > 4 && lt < 6) sfx("反应！", end.x - g.fs * 2, end.y - g.fs * 3, fz(0.04), "#e7a23a", -0.1, Math.sin((lt - 4) / 2 * Math.PI));
      callout("o0-start", lt > 0.4 && lt < 3.6, g.X(0), g.Y(1), g.X(0.2), g.Y(1) - g.fs * 0.2, "治疗开始：100%");
      callout("o0-half", lt > 6.5, g.X(0.55), g.Y(sev(0.55)), g.X(0.55), g.Y(0.8), L.nw ? "降了一半多 = 反应" : "降了一半多：叫“反应”");
      say("o0-s", lt > 8.5, sx, sy - s * 3.2, L.nw ? L.side.x + L.side.w * 0.62 : sx, L.nw ? L.side.y + L.side.h * 0.45 : H * 0.42, L.nw ? "好些了，但还是累……" : "好一些了，\n可还是容易累……", "think");
    });
  }

  // ---------- 第 2 幕：缓解 ----------
  function v1(a) {
    fade(a, () => {
      const L = lay(); bg("#f3fbf7", "#f5f3ff", 21);
      const g = chart(L.B, { phase: true });
      const sev = drop(0.06, 0.32), p = prog(0.5, 8.5) * 0.97;
      const end = curve(g, sev, 0, Math.max(0.001, p), C.mintDeep);
      const inBand = sev(p) < 0.15;
      rider(end, { walk: p < 0.96 ? time * 8 : null, eyes: inBand ? "happy" : "open", arms: inBand ? "up" : "down" });
      if (inBand) sparkles(end.x, end.y - H * 0.05, H * 0.05, 3, 1, 5);
      const sx = L.nw ? L.side.x + L.side.w * 0.2 : L.side.x + L.side.w * 0.45, sy = L.nw ? L.side.y + L.side.h * 0.8 : H * 0.9, s = H * (L.nw ? 0.05 : 0.06);
      chara(sx, sy, s, Object.assign({}, PT, { eyes: inBand ? "happy" : "open", mouth: inBand ? "grin" : "smile", arms: inBand ? "up" : "down", tag: inBand ? "缓解" : "治疗中" }));
      if (!L.nw) {
        const cx = L.side.x + L.side.w / 2;
        fade(prog(2, 1), () => plate("反应：好一些", cx, L.side.y + H * 0.08, "#ffe9d6", fz(0.03), L.side.x, L.side.x + L.side.w));
        fade(prog(4, 1), () => plate("缓解：好了", cx, L.side.y + H * 0.17, "#dff5ec", fz(0.03), L.side.x, L.side.x + L.side.w));
        fade(prog(8, 1), () => plate("保持住 → 康复", cx, L.side.y + H * 0.26, "#e4eefb", fz(0.03), L.side.x, L.side.x + L.side.w));
      } else fade(prog(8, 1), () => plate("保持住 → 康复", L.side.x + L.side.w * 0.66, L.side.y + L.side.h * 0.55, "#e4eefb", fz(0.026)));
      callout("o1-rem", lt > 4.2 && lt < 8, g.X(0.33), g.Y(sev(0.33)), g.X(0.33), g.Y(0.62), L.nw ? "几乎没有症状" : "降进缓解区：几乎没有症状");
      callout("o1-keep", lt > 9, g.X(0.8), g.Y(sev(0.8)), g.X(0.72), g.Y(0.55), L.nw ? "守住几个月以上" : "稳稳守住几个月以上");
    });
  }

  // ---------- 第 3 幕：残留症状 ----------
  function v2(a) {
    fade(a, () => {
      const L = lay(); bg("#fff8f0", "#f3f7fd", 31);
      const g = chart(L.B, {});
      const sev = drop(0.3, 0.38), p = prog(0.4, 5) * 0.97;
      const end = curve(g, sev, 0, Math.max(0.001, p), C.accD);
      rider(end, { walk: p < 0.96 ? time * 8 : null, eyes: "sleepy", mouth: "flat", brow: "worry" });
      const left = ["失眠", "疲劳", "疼痛", "注意力差", "兴趣低"], gone = ["情绪低落", "自杀念头"];
      if (!L.nw) {
        const x = L.side.x, w = L.side.w, cx = x + w / 2;
        plate("还剩下的尾巴", cx, L.side.y + H * 0.05, "#ffe3e6", fz(0.026), x, x + w);
        left.forEach((t, i) => fade(prog(2 + i * 0.6, 0.6), () => {
          const y = L.side.y + H * (0.14 + i * 0.075);
          const pw = plate(t, cx, y, "#fff4d6", fz(0.028), x, x + w);
          glow(cx - pw / 2 - H * 0.03, y, H * 0.03, C.gold, 0.7 + 0.3 * Math.sin(time * 3 + i));
          Anima.sparkle(cx - pw / 2 - H * 0.03, y, H * 0.018, 1);
        }));
        fade(prog(6, 1), () => {
          plate("常较早改善", cx, L.side.y + H * 0.54, "#e4eefb", fz(0.026), x, x + w);
          gone.forEach((t, i) => plate(t, cx + w * (i ? 0.24 : -0.24), L.side.y + H * 0.62, "#f1eef0", fz(0.024), x, x + w));
        });
        chara(cx, H * 0.93, H * 0.045, Object.assign({}, PT, { eyes: "sleepy", mouth: "wavy", brow: "worry" }));
        emote("zzz", cx + H * 0.08, H * 0.93 - H * 0.12, H * 0.03);
      } else {
        const x = L.side.x + L.side.w * 0.2, w = L.side.w * 0.8;
        chara(L.side.x + L.side.w * 0.1, L.side.y + L.side.h * 0.8, H * 0.045, Object.assign({}, PT, { eyes: "sleepy", mouth: "wavy", brow: "worry" }));
        left.forEach((t, i) => fade(prog(2 + i * 0.6, 0.6), () => {
          const row = i < 3 ? 0 : 1, col = row ? i - 3 : i;
          plate(t, x + w * (row ? 0.3 + col * 0.36 : 0.18 + col * 0.32), L.side.y + L.side.h * (row ? 0.72 : 0.3), "#fff4d6", fz(0.022), x, x + w);
        }));
      }
      callout("o2-risk", lt > 7.5, g.X(0.75), g.Y(sev(0.75)), g.X(0.62), g.Y(0.72), L.nw ? "尾巴 → 更易复燃" : "带着尾巴：以后更容易复燃");
      callout("o2-gap", lt > 3 && lt < 7, g.X(0.55), g.Y(0.15), g.X(0.45), g.Y(0.02) + g.fs * 0.2, L.nw ? "离缓解还差一截" : "离缓解区还差一截");
    });
  }

  // ---------- 第 4 幕：复燃和复发 ----------
  function v3(a) {
    fade(a, () => {
      const L = lay(); bg("#f7f5ff", "#fff6f0", 41);
      const g = chart(L.B, { phase: true });
      const base = drop(0.07, 0.25);
      const p = prog(0.4, 4) * 0.97;
      curve(g, base, 0, Math.max(0.001, p), C.mintDeep);
      // 分支一：巩固期里又回来（复燃）
      const ra = (t) => base(t) + 0.62 * ease((t - 0.36) / 0.14);
      const pa = prog(4.3, 2.2);
      const ea = pa > 0 ? curve(g, ra, 0.36, lerp(0.36, 0.52, pa), C.bad, [8, 6]) : null;
      // 分支二：康复以后又来一次（复发）
      const rb = (t) => base(t) + 0.66 * ease((t - 0.74) / 0.14);
      const pb = prog(7.4, 2.4);
      const eb = pb > 0 ? curve(g, rb, 0.74, lerp(0.74, 0.92, pb), C.lavDeep, [8, 6]) : null;
      if (ea) chara(ea.x, ea.y, H * 0.026, Object.assign({}, PT, { eyes: "teary", mouth: "sad", shadow: false, alpha: pa }));
      if (eb) chara(eb.x, eb.y, H * 0.026, Object.assign({}, PT, { eyes: "teary", mouth: "sad", shadow: false, alpha: pb }));
      if (!L.nw) {
        const x = L.side.x, w = L.side.w, cx = x + w / 2;
        fade(prog(5, 1), () => { plate("复燃", cx, L.side.y + H * 0.08, "#ffe3e6", fz(0.03), x, x + w); plate("缓解后不久就回来", cx, L.side.y + H * 0.16, "#fff", fz(0.028), x, x + w); plate("同一次发作没结束", cx, L.side.y + H * 0.23, "#fff", fz(0.028), x, x + w); });
        fade(prog(8.4, 1), () => { plate("复发", cx, L.side.y + H * 0.36, "#efe6fb", fz(0.03), x, x + w); plate("康复一段时间以后", cx, L.side.y + H * 0.44, "#fff", fz(0.028), x, x + w); plate("新的一次发作", cx, L.side.y + H * 0.51, "#fff", fz(0.028), x, x + w); });
        chara(cx, H * 0.93, H * 0.045, Object.assign({}, DOC, { eyes: "happy", arms: lt > 10 ? "point" : "hold", item: lt > 10 ? null : "book", tag: "医生" }));
      } else {
        fade(prog(5, 1), () => plate("复燃：缓解后不久", L.side.x + L.side.w * 0.3, L.side.y + L.side.h * 0.3, "#ffe3e6", fz(0.022)));
        fade(prog(8.4, 1), () => plate("复发：康复以后", L.side.x + L.side.w * 0.7, L.side.y + L.side.h * 0.75, "#efe6fb", fz(0.022)));
      }
      callout("o3-a", !L.nw && lt > 6.2 && lt < 9, g.X(0.47), g.Y(ra(0.47)), g.X(0.28), g.Y(0.9), "复燃");
      callout("o3-b", !L.nw && lt > 9.6, g.X(0.86), g.Y(rb(0.86)), g.X(0.62), g.Y(0.92), "复发");
    });
  }

  // ---------- 第 5 幕：缓解比例 ----------
  function v4(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#f3f9ff", "#fff7ef", 51);
      const top = Anima.topSafe() + H * 0.04;
      const B = nw ? { x: W * 0.03, y: top, w: W * 0.94, h: H * 0.6 - top } : { x: W * 0.03, y: top, w: W * 0.6, h: H * 0.95 - top };
      card(B.x, B.y, B.w, B.h);
      const cols = nw ? 6 : 4, rows = 12 / cols;
      const stepAt = [1, 3.4, 5.8, 8.2], adds = [4, 2, 1, 1];
      let lit = 0; const step = stepAt.filter((t) => lt > t).length;
      for (let i = 0; i < step; i++) lit += adds[i];
      const who = []; // 每个人在第几步缓解
      let k = 0; adds.forEach((n, i) => { for (let j = 0; j < n; j++) who[[0, 5, 10, 3, 8, 1, 6, 11][k++]] = i; });
      const cw = B.w / cols, rh = (B.h - H * 0.05) / rows, s = Math.min(cw * 0.2, rh * 0.22);
      for (let i = 0; i < 12; i++) {
        const cx = B.x + cw * (i % cols + 0.5), cy = B.y + H * 0.03 + rh * (Math.floor(i / cols) + 0.85);
        const st = who[i], on = st !== undefined && st < step;
        const pop = on ? prog(stepAt[st], 0.8) : 0;
        if (on) glow(cx, cy - s * 1.5, s * 2.2, ["#ffe08a", "#bfe8d6", "#c8e0f7", "#e0d6fa"][st], pop * 0.8);
        chara(cx, cy, s, Object.assign({}, PT, { gray: on ? 1 - pop : 0.7, eyes: on && pop > 0.5 ? "happy" : "sleepy", mouth: on && pop > 0.5 ? "smile" : "flat", arms: on && pop > 0.9 ? "up" : "down", jump: on && pop < 1 ? Math.sin(pop * Math.PI) * 0.4 : 0, seed: i }));
      }
      const R = nw ? { x: W * 0.03, y: H * 0.64, w: W * 0.94 } : { x: W * 0.66, y: top + H * 0.02, w: W * 0.31 };
      const lab = nw ? ["第1步", "第2步", "第3步", "第4步"] : ["第 1 种药", "第 2 种", "第 3 种", "第 4 种"];
      lab.forEach((t, i) => {
        const on = step > i;
        const x = nw ? R.x + R.w * (0.125 + i * 0.25) : R.x + R.w / 2, y = nw ? R.y + H * 0.04 : R.y + H * (0.05 + i * 0.09);
        plate(t, x, y, on ? ["#fff1c9", "#dff5ec", "#e4eefb", "#efe6fb"][i] : "#f1eef0", fz(nw ? 0.024 : 0.03), nw ? R.x + R.w * i * 0.25 : R.x, nw ? R.x + R.w * (i + 1) * 0.25 : R.x + R.w);
      });
      const cnt = lit + "/12 人缓解" + (lit === 4 ? "（约 1/3）" : lit === 8 ? "（约 2/3）" : "");
      if (!nw) {
        plate(step ? cnt : "还没缓解", R.x + R.w / 2, R.y + H * 0.43, "#fff", fz(0.03), R.x, R.x + R.w);
        fade(prog(9.6, 1), () => { plate("步数越多", R.x + R.w / 2, R.y + H * 0.56, "#ffe3e6", fz(0.028), R.x, R.x + R.w); plate("缓解后越易复燃", R.x + R.w / 2, R.y + H * 0.64, "#ffe3e6", fz(0.028), R.x, R.x + R.w); });
        fade(0.8, () => plate("示意：12 人，约数 ⚠", R.x + R.w / 2, H * 0.92, "#fff", fz(0.022), R.x, R.x + R.w));
      } else {
        plate(step ? cnt : "还没缓解", R.x + R.w * 0.3, R.y + H * 0.16, "#fff", fz(0.026));
        fade(prog(9.6, 1), () => plate("步数多 → 易复燃", R.x + R.w * 0.72, R.y + H * 0.16, "#ffe3e6", fz(0.022)));
      }
    });
  }

  // ---------- 第 6 幕：缓解并守住 ----------
  function v5(a) {
    fade(a, () => {
      const L = lay(); bg("#f3fbf7", "#fff8f0", 61);
      const g = chart(L.B, { phase: true });
      const sev = drop(0.05, 0.28), p = prog(0.4, 7) * 0.98;
      const end = curve(g, sev, 0, Math.max(0.001, p), C.mintDeep);
      rider(end, { walk: p < 0.97 ? time * 8 : null, eyes: "happy", item: p > 0.6 ? "shield" : null, arms: p > 0.6 ? "hold" : "down" });
      const tips = L.nw ? ["降下来", "站稳", "守住"] : ["降下来", "站稳", "守住"], mids = [0.15, 0.45, 0.8];
      tips.forEach((t, i) => fade(prog(1.5 + i * 2.2, 0.8), () => plate(t, g.X(mids[i] + (i ? 0 : 0.1)), g.Y(L.nw ? 0.98 : 0.8), ["#ffe6d6", "#fff1c9", "#dff5ec"][i], fz(0.024))));
      const s = H * (L.nw ? 0.048 : 0.055);
      const px = L.nw ? L.side.x + L.side.w * 0.12 : L.side.x + L.side.w * 0.3, py = L.nw ? L.side.y + L.side.h * 0.8 : H * 0.9;
      const dx = L.nw ? L.side.x + L.side.w * 0.3 : L.side.x + L.side.w * 0.72;
      chara(px, py, s, Object.assign({}, PT, { eyes: "happy", mouth: "smile", arms: lt > 10 ? "up" : "down", tag: L.nw ? null : "我" }));
      chara(dx, py, s * 0.95, Object.assign({}, DOC, { eyes: "happy", arms: "wave", dir: -1, tag: "医生" }));
      if (lt > 7.5) Anima.heart((px + dx) / 2, py - s * 3.6, s * 0.4, C.rose);
      say("o5-d", lt > 3 && lt < 9, dx, py - s * 3.1, L.nw ? L.side.x + L.side.w * 0.72 : L.side.x + L.side.w * 0.55, L.nw ? L.side.y + L.side.h * 0.4 : H * 0.4, L.nw ? "好了也先别自己停～" : "好转了也先别自己停药，\n我们一起安排～", "say");
      say("o5-p", lt > 9.5, px, py - s * 3.1, L.nw ? L.side.x + L.side.w * 0.72 : L.side.x + L.side.w * 0.45, L.nw ? L.side.y + L.side.h * 0.4 : H * 0.4, L.nw ? "有变化就说！" : "有变化我会马上说！", "say");
    });
  }

  function draw() {
    ctx.fillStyle = "#f7fbff"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) v0(S.v0);
    if (S.v1 > 0.02) v1(S.v1);
    if (S.v2 > 0.02) v2(S.v2);
    if (S.v3 > 0.02) v3(S.v3);
    if (S.v4 > 0.02) v4(S.v4);
    if (S.v5 > 0.02) v5(S.v5);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.accD, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: 14, accent: "#7fb8e0",
    titleCard: { lines: ["有效、缓解、复发", "怎样算治好了？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
