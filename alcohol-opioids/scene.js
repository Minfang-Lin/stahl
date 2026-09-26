Anima.register("alcohol-opioids", {
    "title": "酒精和阿片：依赖与戒断",
    "tag": "冲动、强迫与成瘾",
    "headline": "为什么说停就停【可能有危险】？",
    "lede": "酒精帮 GABA 踩刹车、按住谷氨酸的油门；喝久了，大脑反过来调整，突然停酒就像刹车失灵。阿片类物质作用在 μ 阿片受体上，最大的危险是呼吸变慢。好在两者都有药物能帮忙，也都有急救和治疗的办法。",
    "summary": "酒精对 GABA 和谷氨酸的作用、耐受和反向调节、酒精戒断的危险、戒酒药物，以及阿片受体、呼吸抑制、纳洛酮急救和美沙酮、丁丙诺啡等药物辅助治疗。",
    "chapter": "对应 Stahl《精神药理学精要》第 13 章 · 酒精与阿片类物质",
    "footer": "长期大量饮酒的人不要自己突然停酒，请在医生指导下戒断；怀疑有人阿片类过量（叫不醒、呼吸很慢），请立即拨打急救电话。",
    "canvasLabel": "拟人化的 GABA 和谷氨酸站在天平两边，酒精和阿片类访客打破平衡、药物帮忙恢复的动画",
    "regions": ["nac", "midbrain"],
    "parts": ["addiction"],
    "cast": ["GABA", "Glu", "DA", "drug"],
    "color": "#9fcdeb"
  }, () => {
  const CH = [
    { title: "酒精：帮刹车，压油门", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["GABA", "刹车更灵"], pill2: ["谷氨酸", "被压住"],
      text: "大脑里有一架天平：一边是踩刹车的 GABA，让神经元安静；一边是踩油门的谷氨酸，让神经元兴奋。酒精会增强 GABA 的作用，又压住谷氨酸的 NMDA 受体，天平往“安静”那边倒，于是人放松、话多，反应也变慢。酒精还会让大脑放出内啡肽和多巴胺，带来愉快感，这也是容易越喝越多的原因之一。",
      fact: "酒精增强 GABA、抑制谷氨酸（NMDA），还会释放内啡肽和多巴胺" },
    { title: "喝久了：大脑反向调节", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["GABA 系统", "变迟钝"], pill2: ["谷氨酸系统", "上调"],
      text: "如果天天喝、喝很多，大脑会想办法把天平扶正：GABA 这边变得迟钝，同样的酒效果变弱，这是耐受；谷氨酸那边则增兵加码，油门越踩越重。这样一来，有酒的时候天平刚好平衡，大脑已经把酒算进了日常，这就是身体依赖。这种改变是大脑的适应，不是意志力差。",
      fact: "耐受和依赖来自大脑的反向调节：GABA 变迟钝，谷氨酸上调" },
    { title: "突然停酒：刹车失灵", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["戒断", "可能有危险"], pill2: ["处理", "要就医"],
      text: "这时如果突然停酒，酒精这块砝码一下子拿走，天平猛地倒向谷氨酸：手抖、出汗、心慌、焦虑、睡不着；严重时会抽搐，甚至出现震颤谵妄，意识混乱、看到不存在的东西，可能危及生命。所以长期大量饮酒的人不要自己硬扛着停，要在医生指导下戒断，医生常用苯二氮䓬类药物暂时顶上刹车，再慢慢减量。",
      fact: "酒精戒断可能出现抽搐、震颤谵妄，一定要在医生指导下戒断" },
    { title: "帮助戒酒的药", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["戒酒药物", "三种思路"], pill2: ["还要", "心理支持"],
      text: "戒断之后，还有药物帮忙少喝或不喝。纳曲酮挡住阿片受体，减少“喝一口就想喝更多”的奖赏感；阿坎酸帮忙稳住过度兴奋的谷氨酸系统，减少停酒后的难受和渴求；双硫仑让人一喝酒就非常难受，像给酒贴上警告，但反应可能很重，必须严格遵医嘱。药物再配合心理治疗和互助支持，效果更好。",
      fact: "纳曲酮、阿坎酸、双硫仑思路各不相同，都需要医生评估后使用" },
    { title: "阿片类：止痛也止住呼吸", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["作用于", "μ 阿片受体"], pill2: ["最大风险", "呼吸抑制"],
      text: "阿片类物质，比如吗啡、海洛因、芬太尼，会打开 μ 阿片受体这扇门：能强力止痛，也会带来欣快感。可是脑干里管呼吸的中枢也有这种受体，用得太多，呼吸会越来越慢、越来越浅，这是过量致死的主要原因。纳洛酮能把阿片从受体上挤下来，快速逆转过量，是救命的急救药；用了纳洛酮也要马上叫急救。",
      fact: "阿片过量最危险的是呼吸抑制；纳洛酮是急救药，用后仍要立即就医" },
    { title: "阿片成瘾：药物辅助治疗", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["药物", "稳住受体"], pill2: ["加上", "心理社会支持"],
      text: "阿片戒断很难受：流泪流涕、打哈欠、腹泻、浑身酸痛、心烦，但通常不像酒精戒断那样危及生命。治疗常用药物辅助：美沙酮是完全激动剂，稳稳地把门打开，替代成瘾物质；丁丙诺啡是部分激动剂，只开一半，有“天花板效应”，呼吸抑制的风险更低；纳曲酮则把门挡住。再加上心理治疗和社会支持，很多人能重新过上稳定的生活。",
      fact: "美沙酮、丁丙诺啡、纳曲酮配合心理社会支持，是阿片成瘾的主要治疗" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { beam: "#d9b48f", pan: "#fff1dc" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;

  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrow = () => W / H < 1.4;
  const Y = (f) => { const t = Anima.topSafe(); return t + (H - t) * f; };
  const fsS = () => Math.max(11, H * 0.03) * Anima.UI;
  const ALC = { who: "drug", label: "", tag: "酒精", hatColor: "#c8ecd8", hatColor2: "#ffffff" };

  // ---------- 小工具 ----------
  function plate(t, x, y, fs, color, a) {
    if (a != null && a < 0.02) return 0;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#ffffff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    ctx.restore();
    return w;
  }
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
  function cup(x, y, s, a) {
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.moveTo(x - s * 0.5, y - s); ctx.lineTo(x + s * 0.5, y - s); ctx.lineTo(x + s * 0.38, y); ctx.lineTo(x - s * 0.38, y); ctx.closePath();
    ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - s * 0.44, y - s * 0.6); ctx.lineTo(x + s * 0.44, y - s * 0.6); ctx.lineTo(x + s * 0.38, y); ctx.lineTo(x - s * 0.38, y); ctx.closePath();
    ctx.fillStyle = "#ffe08a"; ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#ffffff"; for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(x - s * 0.15 + k * s * 0.15, y - s * 0.3 - ((time * 0.6 + k * 0.3) % 1) * s * 0.3, s * 0.05, 0, Math.PI * 2); ctx.fill(); }
    ctx.restore();
  }
  function chip(t, x, y, fs, color, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.7 + 0.3 * ease(a);
    ctx.translate(x, y); ctx.scale(pop, pop);
    plate(t, 0, 0, fs, color);
    ctx.restore();
  }

  // ---------- 天平 ----------
  // tilt > 0：右边（谷氨酸）往下沉；< 0：左边（GABA）往下沉
  function balance(cx, py, L, tilt, left, right, s) {
    const baseY = py + L * 1.12;
    // 底座和立柱
    rrect(cx - L * 0.25, baseY, L * 0.5, L * 0.08, L * 0.04); ctx.fillStyle = C.beam; ctx.fill(); outline(2); ctx.stroke();
    rrect(cx - L * 0.035, py, L * 0.07, baseY - py, L * 0.03); ctx.fillStyle = C.beam; ctx.fill(); outline(2); ctx.stroke();
    // 指针
    ctx.save(); ctx.translate(cx, py); ctx.rotate(tilt);
    ctx.strokeStyle = C.bad; ctx.lineWidth = 3; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, L * 0.4); ctx.stroke();
    ctx.restore();
    // 刻度弧
    ctx.save(); ctx.strokeStyle = alpha(C.line, 0.4); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, py, L * 0.45, Math.PI / 2 - 0.5, Math.PI / 2 + 0.5); ctx.stroke(); ctx.restore();
    text("平衡", cx, py + L * 0.56, fsS() * 0.8, C.soft);
    // 横梁
    const ex = Math.cos(tilt) * L, ey = Math.sin(tilt) * L;
    const LA = { x: cx - ex, y: py - ey }, RA = { x: cx + ex, y: py + ey };
    ctx.save(); ctx.translate(cx, py); ctx.rotate(tilt);
    rrect(-L, -L * 0.035, L * 2, L * 0.07, L * 0.03); ctx.fillStyle = C.beam; ctx.fill(); outline(2); ctx.stroke();
    ctx.restore();
    ctx.beginPath(); ctx.arc(cx, py, L * 0.06, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(2); ctx.stroke();
    const hang = L * 0.42, pw = L * 0.62;
    const pans = [LA, RA].map((A, i) => {
      const y = A.y + hang;
      ctx.strokeStyle = C.line; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(A.x - pw * 0.45, y); ctx.moveTo(A.x, A.y); ctx.lineTo(A.x + pw * 0.45, y); ctx.stroke();
      return { x: A.x, y };
    });
    // 盘子上的人（先画人，再画盘子前沿）
    [left, right].forEach((arr, i) => {
      const P = pans[i];
      arr.forEach((o) => {
        if (o.alpha != null && o.alpha < 0.02) return;
        chara(P.x + (o.dx || 0) * s, P.y - (o.lift || 0) * s, o.s || s, Object.assign({ shadow: false }, o));
      });
      ctx.beginPath(); ctx.ellipse(P.x, P.y, pw / 2, pw * 0.1, 0, 0, Math.PI); ctx.lineTo(P.x - pw / 2, P.y);
      ctx.fillStyle = C.pan; ctx.fill(); outline(2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(P.x, P.y, pw / 2, pw * 0.06, 0, Math.PI, Math.PI * 2); ctx.strokeStyle = alpha(C.line, 0.6); ctx.lineWidth = 1.5; ctx.stroke();
    });
    plate("刹车 GABA", pans[0].x, pans[0].y + pw * 0.22, fsS() * 0.95, "#e4e0ff");
    plate("油门 谷氨酸", pans[1].x, pans[1].y + pw * 0.22, fsS() * 0.95, "#fff0b3");
    return { L: pans[0], R: pans[1] };
  }
  function geoBal() {
    const nw = narrow();
    const T0 = Anima.topSafe();
    const L = Math.min(W * (nw ? 0.28 : 0.24), (H - T0) * 0.5);
    return { cx: W * 0.4, py: Y(0.3), L, s: Math.min(H * 0.05, L * 0.14) };
  }
  // 右边的大脑居民：显示现在的状态
  function resident(x, y, s, mood, shake) {
    const jx = shake ? Math.sin(time * 40) * s * 0.08 * shake : 0;
    const o = {
      calm: { eyes: "happy", mouth: "smile", arms: "down" },
      tipsy: { eyes: "sleepy", mouth: "cat", arms: "wave" },
      okay: { eyes: "open", mouth: "flat", arms: "down" },
      shaky: { eyes: "wide", mouth: "wavy", arms: "hug", brow: "worry" },
      bad: { eyes: "dizzy", mouth: "wavy", arms: "hug", brow: "worry" },
    }[mood];
    chara(x + jx, y, s, Object.assign({ who: "neuron", dir: -1 }, o));
  }
  function balBg() {
    Anima.wash("#f3f9ff", "#fdf1f4");
    Anima.bokeh(6, "#d7efff", 0.8, 13);
    Anima.petals(6, 0.4, 7);
  }

  // ---------- 第 1 幕 ----------
  function drinkView(a) {
    const here = cur === 0;
    ctx.save(); ctx.globalAlpha *= a;
    balBg();
    const g = geoBal(), s = g.s, nw = narrow();
    const inP = prog(1.5, 1.4), onPan = prog(2.9, 0.6);
    const tilt = lerp(0, -0.2, prog(3.2, 1.4)) + Math.sin(time * 2) * 0.01;
    const hush = prog(4.5, 1);
    const P = balance(g.cx, g.py, g.L, tilt,
      [{ who: "GABA", dx: -1.1, arms: onPan > 0.5 ? "up" : "down", eyes: "happy", mouth: "smile" },
       { who: "GABA", dx: 1.1, arms: onPan > 0.5 ? "up" : "down", eyes: "happy", mouth: "grin", dir: -1 }].concat(onPan > 0 ? [Object.assign({}, ALC, { dx: 0, lift: 1.1, arms: "wave", eyes: "happy", mouth: "cat" })] : []),
      [{ who: "Glu", dx: -1.1, eyes: hush > 0.5 ? "sleepy" : "open", mouth: hush > 0.5 ? "o" : "smile", arms: "down" },
       { who: "Glu", dx: 1.1, eyes: hush > 0.5 ? "sleepy" : "open", mouth: hush > 0.5 ? "o" : "smile", arms: "down", dir: -1 }], s);
    // 酒精访客走过来，跳到 GABA 那边
    if (inP > 0 && onPan <= 0) chara(lerp(-s * 2, P.L.x - g.L * 0.4, inP), P.L.y + g.L * 0.5, s, Object.assign({}, ALC, { walk: time * 9, arms: "wave", eyes: "happy", mouth: "cat" }));
    if (hush > 0.5) { emote("zzz", P.R.x + s * 1.6, P.R.y - s * 3.4, s * 0.55); sfx("嘘～", P.R.x - s * 2.5, P.R.y - s * 4, s * 0.9, C.lavDeep, -0.1, hush); }
    // 大脑居民 + 多巴胺送来的小爱心
    const rx = W * (nw ? 0.86 : 0.84), ry = Y(0.95), rs = s * 1.1;
    resident(rx, ry, rs, lt > 4.5 ? "tipsy" : "calm");
    const dp = prog(7, 1.4);
    if (dp > 0) {
      chara(lerp(W + s * 2, rx - rs * 2.4, dp), ry, s * 0.85, { who: "DA", item: dp < 1 ? "letter" : null, arms: dp < 1 ? "hold" : "up", walk: dp < 1 ? time * 9 : null, eyes: "happy", mouth: "grin", dir: -1 });
      if (dp >= 1) { emote("heart", rx - rs * 1.2, ry - rs * 3.6, rs * 0.6); sparkles(rx - rs * 1.2, ry - rs * 2, rs * 2, 3, 1, 4); }
    }
    callout("a-gaba", here && lt > 3.5 && lt < 7.5, P.L.x - s, P.L.y - s * 2.5, nw ? W * 0.18 : W * 0.14, Y(0.02), "增强 GABA：刹车更灵");
    callout("a-nmda", here && lt > 5 && lt < 8.4, P.R.x, P.R.y - s * 2.5, nw ? W * 0.72 : W * 0.66, Y(0.02), "压住谷氨酸（NMDA）");
    callout("a-endo", here && lt > 9.2, rx - rs * 2.4, ry - rs * 2, W * 0.7, Y(0.1), "还放出内啡肽和多巴胺");
    say("a-relax", here && lt > 5.5, rx, ry - rs * 3.1, nw ? W * 0.76 : W * 0.82, nw ? Y(0.6) : Y(0.52), "好放松……反应也慢了", "think");
    ctx.restore();
  }

  // ---------- 第 2 幕：反向调节 ----------
  function calendar(x, y, s, n) {
    rrect(x - s, y - s, s * 2, s * 2.1, s * 0.2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.save(); rrect(x - s, y - s, s * 2, s * 2.1, s * 0.2); ctx.clip(); ctx.fillStyle = C.coral; ctx.fillRect(x - s, y - s, s * 2, s * 0.55); ctx.restore();
    text(String(n), x, y + s * 0.5, s * 1.1, C.ink);
    const flip = (time * 2) % 1;
    ctx.save(); ctx.globalAlpha *= 1 - flip;
    ctx.beginPath(); ctx.moveTo(x - s, y - s * 0.45); ctx.lineTo(x + s, y - s * 0.45); ctx.lineTo(x + s * (1 - flip * 2), y - s * 0.45 - flip * s); ctx.closePath(); ctx.fillStyle = "#fff6f0"; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.restore();
  }
  function adaptView(a) {
    const here = cur === 1;
    ctx.save(); ctx.globalAlpha *= a;
    balBg();
    const g = geoBal(), s = g.s, nw = narrow();
    const dull = prog(2, 3), more = prog(5, 3);
    const tilt = lerp(-0.2, 0, prog(5.5, 3)) + Math.sin(time * 2) * 0.008;
    const gl = [
      { who: "GABA", dx: -1.1, arms: "down", eyes: dull > 0.5 ? "sleepy" : "happy", mouth: dull > 0.5 ? "flat" : "smile", gray: dull * 0.6 },
      { who: "GABA", dx: 1.1, arms: "down", eyes: dull > 0.5 ? "sleepy" : "happy", mouth: dull > 0.5 ? "flat" : "smile", gray: dull * 0.6, dir: -1 },
      Object.assign({}, ALC, { dx: 0, lift: 1.1, arms: "down", eyes: "happy", mouth: "cat" }),
    ];
    const gr = [
      { who: "Glu", dx: -1.1, eyes: "open", mouth: "smile", arms: "down" },
      { who: "Glu", dx: 1.1, eyes: "open", mouth: "smile", arms: "down", dir: -1 },
      { who: "Glu", dx: -2.1, eyes: "angry", mouth: "grin", arms: "fist", alpha: prog(5, 0.6), lift: 0 },
      { who: "Glu", dx: 2.1, eyes: "angry", mouth: "grin", arms: "fist", alpha: prog(6.2, 0.6), dir: -1 },
      { who: "Glu", dx: 0, lift: 0.4, eyes: "angry", mouth: "grin", arms: "up", alpha: prog(7.4, 0.6), s: s * 0.9 },
    ];
    const P = balance(g.cx, g.py, g.L, tilt, gl, gr, s);
    [5, 6.2, 7.4].forEach((t0, k) => { if (lt > t0 && lt < t0 + 0.6) sfx("咚！", P.R.x + (k - 1) * s * 2, P.R.y - s * 4, s * 0.9, C.warn, -0.15, 1 - (lt - t0) / 0.6); });
    if (dull > 0.5) emote("zzz", P.L.x - s * 1.8, P.L.y - s * 3.4, s * 0.5);
    // 日历：天天喝
    const cx = W * (nw ? 0.86 : 0.86), cy = Y(0.2), cs = Math.min(H * 0.05, W * 0.04);
    calendar(cx, cy, cs, 1 + Math.floor(lt * 2));
    text("天天喝", cx, cy + cs * 1.7, fsS(), C.soft);
    const rx = W * 0.86, ry = Y(0.95), rs = s * 1.1;
    resident(rx, ry, rs, lt > 7.5 ? "okay" : "tipsy");
    callout("b-dull", here && lt > 2.5 && lt < 8, P.L.x, P.L.y - s * 3, nw ? W * 0.2 : W * 0.16, Y(0.02), "GABA 变迟钝：耐受");
    callout("b-glu", here && lt > 6 && lt < 11, P.R.x, P.R.y - s * 3.2, nw ? W * 0.62 : W * 0.6, Y(0.02), "谷氨酸增兵：上调");
    say("b-need", here && lt > 8.5, rx, ry - rs * 3.1, nw ? W * 0.76 : W * 0.8, Y(0.5), "有酒才觉得“正常”……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：突然停酒 ----------
  function stopView(a) {
    const here = cur === 2;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6f0", "#fde9ee");
    Anima.bokeh(6, "#ffd1d1", 0.8, 17);
    const g = geoBal(), s = g.s, nw = narrow();
    const leave = prog(1.2, 1.2), slam = prog(2.3, 0.5), benzo = prog(9, 1.2);
    const tilt = lerp(0, 0.34, slam) - benzo * 0.26 + (slam > 0.9 && benzo < 0.5 ? Math.sin(time * 30) * 0.015 : 0);
    const wild = slam > 0.5 && benzo < 0.8;
    const gl = [
      { who: "GABA", dx: -1.1, arms: "down", eyes: wild ? "teary" : "sleepy", mouth: "wavy", gray: 0.5 },
      { who: "GABA", dx: 1.1, arms: "down", eyes: wild ? "teary" : "sleepy", mouth: "wavy", gray: 0.5, dir: -1 },
    ];
    if (benzo > 0) gl.push({ who: "drug", label: "", tag: "苯二氮䓬类", hatColor: "#b8b0f0", hatColor2: "#ffffff", dx: 0, lift: lerp(3.5, 1.1, benzo), arms: "up", eyes: "happy", mouth: "grin", alpha: benzo });
    const gr = [-2.1, -1.1, 0, 1.1, 2.1].map((dx, k) => ({ who: "Glu", dx, lift: k === 2 ? 0.4 : 0, s: k === 2 ? s * 0.9 : s, eyes: wild ? "angry" : "open", mouth: wild ? "grin" : "flat", arms: wild ? (k % 2 ? "fist" : "up") : "down", jump: wild ? Math.abs(Math.sin(time * 9 + k)) * 0.3 : 0, dir: k > 2 ? -1 : 1 }));
    const P = balance(g.cx, g.py, g.L, tilt, gl, gr, s);
    // 酒精访客走掉
    if (leave < 1) chara(lerp(P.L.x, -s * 3, leave), P.L.y - s * 0.3 + leave * s * 2, s, Object.assign({}, ALC, { walk: leave > 0 ? time * 9 : null, arms: "wave", eyes: "happy", mouth: "smile", dir: -1, alpha: 1 - leave * 0.6 }));
    if (lt > 2.3 && lt < 3.2) { sfx("哐！", P.R.x, P.R.y + s * 2, s * 1.4, C.bad, -0.15, 1); Anima.speedLines(P.R.x, P.R.y, g.L * 0.8, 20, 0.35); }
    // 居民：手抖、出汗
    const rx = W * (nw ? 0.86 : 0.84), ry = Y(0.95), rs = s * 1.1;
    resident(rx, ry, rs, benzo > 0.8 ? "okay" : (lt > 6 ? "bad" : (slam > 0.5 ? "shaky" : "okay")), wild ? 1 : 0);
    if (wild) { emote("sweat", rx + rs, ry - rs * 3.2, rs * 0.55); }
    const fs = fsS() * (nw ? 0.9 : 1);
    const sx = W * (nw ? 0.84 : 0.84);
    const sym = [["手抖", "#fff1b8", 3.2], ["出汗、心慌", "#ffe1e1", 4], ["焦虑、睡不着", "#e3f3fc", 4.8]];
    sym.forEach((q, k) => chip(q[0], sx, Y(0.06 + k * 0.1), fs, q[1], prog(q[2], 0.5) * (1 - prog(8.8, 0.6))));
    chip("严重：抽搐、震颤谵妄", nw ? W * 0.7 : W * 0.78, Y(0.38), fs, "#ffc9c9", prog(6, 0.6) * (1 - prog(8.8, 0.6)));
    if (lt > 6 && lt < 9) glow(nw ? W * 0.7 : W * 0.78, Y(0.38), fs * 5, C.coral, 0.3 + 0.2 * Math.sin(time * 8));
    plate("医生指导下，逐渐减量", W * (nw ? 0.7 : 0.78), Y(0.2), fs, "#e1f5ec", prog(10, 0.8));
    callout("c-slam", here && lt > 3 && lt < 8.8, P.R.x - s * 2.6, P.R.y - s * 1, nw ? W * 0.22 : W * 0.16, Y(0.02), "天平倒向谷氨酸");
    callout("c-bz", here && lt > 10, P.L.x, P.L.y - s * 3.3, nw ? W * 0.2 : W * 0.16, Y(0.02), "苯二氮䓬类：暂时顶上刹车");
    say("c-shake", here && lt > 3.4 && lt < 8.6, rx, ry - rs * 3.1, nw ? W * 0.36 : W * 0.66, nw ? Y(0.8) : Y(0.62), "手、手停不下来地抖……", "shout");
    say("c-doc", here && lt > 11, rx, ry - rs * 3.1, nw ? W * 0.45 : W * 0.64, nw ? Y(0.85) : Y(0.62), "不要自己硬扛，去医院戒断", "box");
    ctx.restore();
  }

  // ---------- 第 4 幕：戒酒药物 ----------
  function medsView(a) {
    const here = cur === 3;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#f3f9ee");
    Anima.petals(10, 0.5, 50);
    const nw = narrow();
    const top = Y(0.08), bot = H * (nw ? 0.78 : 0.85), gap = W * 0.02, cw = (W - gap * 4) / 3, ch = bot - top;
    const K = [0, 1, 2].map((i) => ({ x: gap + i * (cw + gap), y: top, w: cw, h: ch }));
    const names = ["纳曲酮", "阿坎酸", "双硫仑"];
    const cols = ["#e4e0ff", "#fff0b3", "#ffe1e1"];
    K.forEach((k, i) => card(k.x, k.y, k.w, k.h, names[i], cols[i]));
    const fs = Math.min(fsS() * (nw ? 0.85 : 1), cw / 7.5);
    const cs = Math.min(ch * 0.13, cw * 0.12);
    // 1. 纳曲酮：挡住阿片受体
    {
      const k = K[0], my = k.y + k.h * 0.7;
      outline(1.6); ctx.beginPath(); ctx.moveTo(k.x, my); ctx.lineTo(k.x + k.w, my); ctx.stroke();
      const rs = cs * 1.1, rx = k.x + k.w * 0.4;
      const p = prog(1, 1.2);
      const R0 = Anima.receptor(rx, my, rs, "#c9b6f0", 0, { label: nw ? null : "阿片受体" });
      chara(lerp(k.x + k.w + cs, R0.site.x, p), lerp(my - cs * 0.2, R0.site.y, p), cs, { who: "drug", label: "", tag: "纳曲酮", hatColor: "#c9b6f0", hatColor2: "#ffffff", arms: p >= 1 ? "shh" : "wave", eyes: "happy", mouth: "cat", walk: p < 1 ? time * 9 : null, dir: -1 });
      const dim = prog(3, 2);
      const ux = k.x + k.w * 0.8, uy = k.y + k.h * 0.4;
      cup(ux, uy, cs * 1.1);
      Anima.heart(ux, uy - cs * 1.7, cs * 0.45 * (1 - dim * 0.6), mix(C.rose, "#d4ced6", dim));
      plate("少一点“还想喝”", k.x + k.w / 2, k.y + k.h * 0.88, fs, "#ffffff", prog(3.5, 0.6));
    }
    // 2. 阿坎酸：安抚谷氨酸
    {
      const k = K[1], fy = k.y + k.h * 0.72;
      const calm = prog(4.5, 1.5);
      const gx = k.x + k.w * 0.34;
      chara(gx + (calm < 0.5 ? Math.sin(time * 30) * 2 : 0), fy, cs, { who: "Glu", eyes: calm > 0.5 ? "happy" : "angry", mouth: calm > 0.5 ? "smile" : "grin", arms: calm > 0.5 ? "down" : "fist", dir: 1 });
      if (calm < 0.5) sfx("吵吵", gx, fy - cs * 3.8, fs * 1.1, C.warn, -0.1, 1 - calm * 2);
      const p = prog(3.5, 1.2);
      chara(lerp(k.x + k.w + cs, k.x + k.w * 0.68, p), fy, cs, { who: "drug", label: "", tag: "阿坎酸", hatColor: "#ffe08a", hatColor2: "#ffffff", arms: p >= 1 ? "shh" : "wave", eyes: "happy", mouth: "smile", walk: p < 1 ? time * 9 : null, dir: -1 });
      if (calm > 0.5) emote("note", gx + cs, fy - cs * 3.4, cs * 0.5);
      plate("稳住谷氨酸", k.x + k.w / 2, k.y + k.h * 0.88, fs, "#ffffff", prog(5, 0.6));
    }
    // 3. 双硫仑：一喝酒就很难受
    {
      const k = K[2], fy = k.y + k.h * 0.72;
      const sip = prog(7, 0.8), sick = prog(7.8, 0.8);
      const px = k.x + k.w * 0.4;
      chara(px, fy, cs, { who: "neuron", eyes: sick > 0.5 ? "dizzy" : "open", mouth: sick > 0.5 ? "wavy" : "smile", arms: sip > 0.3 ? "hold" : "down", brow: sick > 0.5 ? "worry" : null, cloth: "#ffe7c7", skin: sick > 0.5 ? "#ffd6d6" : C.skin });
      cup(px + cs * (1.3 - sip * 1.1), fy - cs * (0.9 + sip * 0.9), cs * 0.7, 1);
      if (sick > 0.5) { emote("sweat", px + cs, fy - cs * 3.3, cs * 0.5); emote("gloom", px - cs, fy - cs * 3.4, cs * 0.5); }
      chara(k.x + k.w * 0.78, fy, cs * 0.9, { who: "drug", label: "", tag: "双硫仑", hatColor: "#ffb3b3", hatColor2: "#ffffff", arms: "point", eyes: "open", mouth: "flat", dir: -1 });
      plate("⚠ 严格遵医嘱", k.x + k.w / 2, k.y + k.h * 0.88, fs, "#fff1b8", prog(9, 0.6));
    }
    callout("d-nal", here && lt > 2 && lt < 7, K[0].x + K[0].w * 0.4, K[0].y + K[0].h * 0.5, K[0].x + K[0].w * 0.5, K[0].y + K[0].h * 0.22, "挡住阿片受体");
    say("d-sick", here && lt > 8.2 && lt < 12.5, K[2].x + K[2].w * 0.4, K[2].y + K[2].h * 0.4, K[2].x + K[2].w * 0.5, K[2].y + K[2].h * (nw ? 0.3 : 0.18), nw ? "好难受……" : "喝了一口，好难受……", "shout");
    say("d-more", here && lt > 10.5, W * 0.5, H, W * 0.5, H * 0.93, "再配合心理治疗和互助支持", "box");
    ctx.restore();
  }

  // ---------- 第 5 幕：阿片类和呼吸 ----------
  function lung(x, y, r, br, sleepy) {
    for (const d of [-1, 1]) {
      ctx.beginPath(); ctx.ellipse(x + d * r * 0.55, y, r * 0.5 * (1 + br * 0.18), r * 0.8 * (1 + br * 0.12), d * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = mix("#ffc2cf", "#d8d0d6", sleepy); ctx.fill(); outline(1.8); ctx.stroke();
    }
    ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x, y - r * 1.2); ctx.lineTo(x, y - r * 0.4); ctx.stroke();
    face(x, y + r * 0.1, r * 0.35, lerp(1, -0.6, sleepy), sleepy < 0.5);
  }
  function opioidView(a) {
    const here = cur === 4;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f4ff", "#fff0f4");
    Anima.bokeh(6, "#e3dbff", 0.8, 9);
    const nw = narrow();
    const my = Y(0.7), rs = Math.min(H * 0.07, W * 0.05), cs = Math.min(H * 0.06, W * 0.042);
    const lx0 = W * 0.03, lx1 = W * (nw ? 0.6 : 0.58);
    // 膜
    ctx.fillStyle = "#f3e8ff"; ctx.fillRect(lx0, my, lx1 - lx0, H - my);
    outline(2); ctx.beginPath(); ctx.moveTo(lx0, my); ctx.lineTo(lx1, my); ctx.stroke();
    const RX = [0.2, 0.5, 0.8].map((f) => lerp(lx0, lx1, f));
    const rescue = prog(8.4, 0.8);
    const acts = RX.map((x, i) => prog(1 + i * 1.3, 0.8) * (1 - rescue));
    const recs = RX.map((x, i) => Anima.receptor(x, my, rs, "#c9b6f0", acts[i], { label: i === 0 ? "μ 阿片受体" : null }));
    // 阿片类访客
    recs.forEach((R0, i) => {
      const p = prog(0.5 + i * 1.3, 0.9);
      if (p <= 0) return;
      const off = rescue;
      const x = lerp(lx0 - cs * 2, R0.site.x, p) - off * W * 0.05 * (i + 1), y = lerp(my - H * 0.02, R0.site.y, p) + off * H * 0.06;
      chara(x, y, cs, { who: "drug", label: "", tag: "阿片类", hatColor: "#c9b6f0", hatColor2: "#f3e8ff", arms: off > 0.3 ? "down" : (p >= 1 ? "hug" : "wave"), eyes: off > 0.3 ? "dizzy" : "happy", mouth: off > 0.3 ? "o" : "cat", walk: p < 1 ? time * 9 : null, alpha: 1 - off * 0.7 });
    });
    const tot = (acts[0] + acts[1] + acts[2]) / 3;
    // 疼痛小刺球：变小
    const px = lerp(lx0, lx1, 0.5), py = Y(0.22), pr = Math.min(H * 0.085, W * 0.06) * (1 - Math.min(1, tot * 1.5) * 0.6);
    ctx.beginPath(); for (let k = 0; k < 16; k++) { const q = k / 16 * Math.PI * 2 + time * 0.3, r = k % 2 ? pr * 0.7 : pr; ctx.lineTo(px + Math.cos(q) * r, py + Math.sin(q) * r); } ctx.closePath();
    ctx.fillStyle = mix("#ffb3b3", "#e8e0e6", tot); ctx.fill(); outline(1.6); ctx.stroke();
    text("疼", px, py, pr * 0.7, C.ink);
    if (tot > 0.3 && rescue < 0.5) { emote("heart", px + pr * 2.2, py, cs * 0.7, tot); sparkles(px + pr * 2.2, py, cs * 1.8, 3, tot, 2); }
    // 右边：脑干的呼吸中枢
    const bx = W * (nw ? 0.8 : 0.79), by = Y(0.42), br = Math.min(H * 0.13, W * 0.1);
    const depress = clamp(tot * 1.3 - 0.3, 0, 1) * (1 - rescue);
    const rate = lerp(2.4, 0.7, depress), amp = lerp(1, 0.25, depress);
    const breath = Math.sin(time * rate) * amp;
    if (depress > 0.6) glow(bx, by, br * 2.2, C.coral, 0.3 + 0.2 * Math.sin(time * 5));
    lung(bx, by, br, breath, depress);
    if (depress > 0.6) emote("zzz", bx + br * 1.2, by - br * 1.2, br * 0.3);
    plate("脑干 · 呼吸中枢", bx, by + br * 1.3, fsS() * (nw ? 0.85 : 1), "#ffe1ee");
    // 呼吸波形
    const wx0 = bx - br * 1.4, wx1 = bx + br * 1.4, wy = by + br * 2.1;
    ctx.strokeStyle = depress > 0.6 ? C.bad : C.mintDeep; ctx.lineWidth = 2.2; ctx.beginPath();
    for (let i = 0; i <= 40; i++) { const f = i / 40, t = time - (1 - f) * 3; const x = lerp(wx0, wx1, f), y = wy - Math.sin(t * rate) * amp * br * 0.25; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke();
    // 纳洛酮冲进来
    const nIn = prog(7.8, 0.8);
    let nx = null;
    if (nIn > 0) {
      nx = lerp(W + cs * 2, RX[2] + rs * 1.8, nIn) - rescue * 0;
      chara(nx, my - H * 0.005, cs * 1.05, { who: "drug", label: "", tag: "纳洛酮", hatColor: "#ff8a8a", hatColor2: "#ffffff", arms: nIn >= 1 ? "fist" : "point", eyes: "angry", mouth: "open", walk: nIn < 1 ? time * 12 : null, dir: -1 });
      if (nIn < 1) Anima.speedLines(nx, my - cs * 1.5, cs * 3, 14, 0.3);
      if (rescue > 0.2 && rescue < 0.95) sfx("让开！", RX[1], my - rs * 3.2, fsS() * 1.3, C.bad, -0.12, 1);
    }
    if (rescue > 0.9) sparkles(bx, by, br * 1.6, 5, 1, 7);
    callout("e-pain", here && lt > 2.5 && lt < 7, px - pr, py, W * 0.16, Y(0.04), "止痛，也带来欣快感");
    callout("e-breath", here && lt > 5.5 && lt < 9.3, bx - br, by, nw ? W * 0.6 : W * 0.58, Y(0.04), "呼吸越来越慢：最危险");
    callout("e-nal", here && lt > 9.5, nx || 0, my - cs * 3, nw ? W * 0.55 : W * 0.5, Y(0.08), "纳洛酮：把阿片挤下受体");
    say("e-call", here && lt > 10.5, bx, by - br, bx, Y(0.9), "用了纳洛酮，也要马上叫急救！", "box");
    ctx.restore();
  }

  // ---------- 第 6 幕：药物辅助治疗 ----------
  function matView(a) {
    const here = cur === 5;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbfff5", "#f3f0ff");
    Anima.petals(10, 0.5, 30);
    Anima.bokeh(6, "#d6f5dc", 0.8, 8);
    const nw = narrow();
    const my = Y(0.52), rs = Math.min(H * 0.075, W * 0.055), cs = Math.min(H * 0.06, W * 0.045);
    ctx.fillStyle = "#f3e8ff"; ctx.fillRect(0, my, W, Y(0.78) - my);
    outline(2); ctx.beginPath(); ctx.moveTo(0, my); ctx.lineTo(W, my); ctx.moveTo(0, Y(0.78)); ctx.lineTo(W, Y(0.78)); ctx.stroke();
    const XS = [0.17, 0.5, 0.83].map((f) => W * f);
    const info = [
      { name: "美沙酮", kind: "完全激动剂", col: "#ffd27a", level: 1, t: 1 },
      { name: "丁丙诺啡", kind: "部分激动剂", col: "#9fdcc0", level: 0.5, t: 3 },
      { name: "纳曲酮", kind: "拮抗剂：挡门", col: "#c9b6f0", level: 0, t: 6.5 },
    ];
    const fs = fsS() * (nw ? 0.88 : 1);
    let ceil = null;
    info.forEach((o, i) => {
      const x = XS[i];
      const p = prog(o.t, 1);
      const R0 = Anima.receptor(x, my, rs, "#c9b6f0", o.level * p, { label: null });
      // 开门程度的小表
      const mx = x + rs * 2.2, m0 = my - rs * 2.6, m1 = my - rs * 0.2, mw = Math.max(8, rs * 0.35);
      rrect(mx - mw / 2, m0, mw, m1 - m0, mw / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
      ctx.save(); rrect(mx - mw / 2, m0, mw, m1 - m0, mw / 2); ctx.clip();
      ctx.fillStyle = o.col; const lv = o.level * p; ctx.fillRect(mx - mw / 2, m1 - (m1 - m0) * lv, mw, (m1 - m0) * lv); ctx.restore();
      if (i === 1) {
        const cy = m1 - (m1 - m0) * 0.5;
        ctx.save(); ctx.setLineDash([4, 3]); ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(mx - mw * 1.6, cy); ctx.lineTo(mx + mw * 1.6, cy); ctx.stroke(); ctx.restore();
        ceil = { x: mx + mw * 1.6, y: cy };
      }
      if (p > 0) {
        chara(lerp(x - W * 0.12, R0.site.x, p), lerp(my - H * 0.02, R0.site.y, p), cs, { who: "drug", label: "", tag: o.name, hatColor: o.col, hatColor2: "#ffffff", arms: p >= 1 ? (i === 2 ? "shh" : "hug") : "wave", eyes: "happy", mouth: "cat", walk: p < 1 ? time * 9 : null });
      }
      plate(o.name, x, Y(0.6), fs * 1.1, mix(o.col, "#ffffff", 0.3), prog(o.t + 0.3, 0.6));
      plate(o.kind, x, Y(0.7), fs, "#ffffff", prog(o.t + 0.6, 0.6));
    });
    // 第二位丁丙诺啡想再挤进去：门也不会开更大
    const extra = prog(5, 0.8);
    if (extra > 0 && lt < 9) {
      const x = lerp(XS[1] + W * 0.12, XS[1] + rs * 1.1, extra);
      chara(x, my - H * 0.005, cs * 0.85, { who: "drug", label: "", tag: "再多一点", hatColor: "#9fdcc0", hatColor2: "#ffffff", arms: "point", eyes: extra >= 1 ? "open" : "happy", mouth: "o", walk: extra < 1 ? time * 9 : null, dir: -1 });
      if (extra >= 1) emote("?", x + cs, my - cs * 3.4, cs * 0.5);
    }
    // 下面：心理社会支持
    const fy = Y(0.98), ss = Math.min(H * 0.055, W * 0.04);
    const sp = prog(9, 1.2);
    const ppl = [
      { who: "DA", arms: "up", eyes: "happy", mouth: "grin" },
      { who: "neuron", cloth: "#ffd3dc", style: "pony", arms: "hug", eyes: "happy", mouth: "smile" },
      { who: "GABA", item: "book", arms: "hold", eyes: "happy", mouth: "smile" },
    ];
    ppl.forEach((o, i) => { if (sp > 0.02) chara(narrow() ? W * (0.62 + i * 0.12) : W * (0.4 + i * 0.1), fy, ss, Object.assign({ alpha: sp, dir: i === 2 ? -1 : 1 }, o)); });
    if (sp > 0.8) emote("heart", narrow() ? W * 0.74 : W * 0.5, fy - ss * 4, ss * 0.7);
    plate("+ 心理治疗、社会支持", nw ? W * 0.27 : W * 0.2, nw ? Y(0.9) : Y(0.92), fs, "#ffe1ee", prog(9.5, 0.6));
    callout("f-ceil", here && lt > 5.5 && lt < 9.6, ceil ? ceil.x : 0, ceil ? ceil.y : 0, nw ? W * 0.5 : W * 0.6, Y(0.04), "天花板效应：再多也不会开更大");
    callout("f-meth", here && lt > 1.8 && lt < 5.3, XS[0], my - rs * 2, W * 0.2, Y(0.04), "稳稳地替代，减少渴求和戒断");
    say("f-wd", here && lt > 10, W * 0.5, H, nw ? W * 0.5 : W * 0.78, nw ? Y(0.08) : Y(0.9), nw ? "阿片戒断很难受，但通常不危及生命" : "阿片戒断很难受，但通常不像酒精戒断那样危及生命", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#5c9fd0", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) drinkView(S.v0);
    if (S.v1 > 0.02) adaptView(S.v1);
    if (S.v2 > 0.02) stopView(S.v2);
    if (S.v3 > 0.02) medsView(S.v3);
    if (S.v4 > 0.02) opioidView(S.v4);
    if (S.v5 > 0.02) matView(S.v5);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#5c9fd0",
    titleCard: { lines: ["酒精和阿片", "依赖与戒断"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
