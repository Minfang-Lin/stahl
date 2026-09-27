Anima.register("adhd-development", {
    "title": "前额叶的成长时间表",
    "tag": "ADHD",
    "headline": "前额叶的【成长时间表】：ADHD 和神经发育",
    "lede": "大脑是分区施工的，前额叶最晚完工。Stahl 把 ADHD 看作前额叶回路“施工推迟”的神经发育问题：这能解释它为什么在童年出现、症状为什么随年龄变样，以及为什么成人 ADHD 常被藏在别的问题后面。",
    "summary": "大脑各区的成熟顺序、前额叶突触先长后剪、ADHD 的成熟推迟假说和高遗传度，症状随年龄的变化，成人 ADHD 与共病，以及早发现、早支持。",
    "chapter": "对应 Stahl《精神药理学精要》第 11 章 · 神经发育和 ADHD",
    "footer": "怀疑自己或孩子有 ADHD，请到正规医院的儿童保健、精神心理或相关专科评估；诊断和用药都要由医生决定。",
    "canvasLabel": "前额叶施工队沿着年龄时间轴修建连接、突触先长后剪、ADHD 施工晚一步，以及成人 ADHD 被共病箱子挡住的动画",
    "regions": ["pfc"],
    "parts": ["adhd"],
    "cast": ["neuron", "drug"],
    "color": "#f4a26b"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, adhd: 0 };
  const view = (k, extra) => { const o = Object.assign({}, V0, extra || {}); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "大脑按顺序完工",
      pill: ["施工", "分区进行"], pill2: ["前额叶", "最晚完工"],
      text: "大脑不是一下子长好的，而是分区施工。管感觉和动作的区域最先完工，杏仁核、纹状体、海马随后跟上；负责计划、专注、管住冲动的前额叶最晚，一直忙到 20 多岁。很多精神心理问题都在童年和青年期冒头，正好对上这段大施工期。",
      fact: "前额叶是大脑里最晚成熟的区域之一，要到 20 多岁才基本完工" }, view("v0")),
    Object.assign({ title: "突触先长后剪",
      pill: ["突触", "先多后少"], pill2: ["高峰", "约 6 岁"],
      text: "放大到前额叶，数一数突触。出生后突触飞快增加，大约 6 岁达到高峰；接下来到青春期，多达一半被修剪掉，留下常用、结实的连线。随着施工推进，工作记忆、持续专注、做计划这些执行功能一样样上线。修剪的细节见《长大的大脑：突触修剪》。",
      fact: "前额叶的突触大约 6 岁前快速增加，到青春期多达一半被修剪掉" }, view("v1")),
    Object.assign({ title: "ADHD：施工可能晚了一步",
      pill: ["遗传度", "约 75%"], pill2: ["起病", "12 岁前"],
      text: "Stahl 的统一解释是：ADHD 的前额叶回路成熟推迟了。突触怎么长，更关键的是哪些该剪、哪些该留，可能和一般的时间表不一样。ADHD 的遗传度很高，约 75%，由许多基因和环境共同影响，不是家教不好，也不是孩子的错。诊断要求一部分症状在 12 岁以前出现。",
      fact: "ADHD 被看作前额叶回路成熟推迟的神经发育问题，遗传度约 75%" }, view("v1", { adhd: 1 })),
    Object.assign({ title: "症状跟着年龄变样",
      pill: ["多动冲动", "渐渐减轻"], pill2: ["注意力", "常常持续"],
      text: "症状会随着大脑发育变样。学龄前，孩子本来就很难长时间专注，注意力问题不好看出，更显眼的是多动和冲动；上学后，走神变得明显，而且常常一路持续到成年。多动和冲动到青春期往往明显减轻，或者换成不显眼的样子；与此同时，焦虑、抑郁、物质使用等共病越来越多。",
      fact: "多动和冲动常随年龄减轻，注意力问题常持续到成年，共病随年龄增多" }, view("v2")),
    Object.assign({ title: "成人 ADHD 常被挡住",
      pill: ["成人患病", "约儿童一半"], pill2: ["成人确诊", "不到 1/5"],
      text: "成人 ADHD 的患病率大约是儿童的一半，却更少被发现：儿童和青少年里约一半得到诊断和治疗，成人不到五分之一。成年人很少只有 ADHD，焦虑、抑郁、物质使用、吸烟常常同时存在，大家先处理这些，ADHD 就被挡在了后面。所以治疗这些问题时，也值得留意注意力等认知症状。",
      fact: "成人 ADHD 常和心境、焦虑、物质使用问题共病，容易被漏诊" }, view("v3")),
    Object.assign({ title: "给施工中的大楼搭把手",
      pill: ["支持", "越早越好"], pill2: ["前额叶", "还在长"],
      text: "一种推测是：12 岁以后，有的人前额叶继续长出新的连接、补上了进度，症状明显减轻，这可能是成人患病率只有儿童一半的原因之一。早一点发现和评估，给孩子行为训练和学校支持，必要时由医生用药，就像给还在施工的大楼搭好脚手架。药物怎样调节前额叶，见《前额叶的收音机》。",
      fact: "ADHD 从儿童到成人都可以评估和治疗，诊断和用药要由专业医生决定" }, view("v4")),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { pfc: "#ffcfae", bar: "#ffe6d4", adhd: "#f08a5d", syn: "#8fc7e8", hyp: "#f28ca5", ina: "#8f84e0", com: "#7cc49b", crate: "#f3dcc0" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, chara, say, callout, pill, glow, sparkle, sparkles, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  function plate(t, x, y, fs, fill, align) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    const x0 = align === "left" ? x : align === "right" ? x - w : x - w / 2;
    rrect(x0, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x0 + w / 2, y + 1, fs, C.ink);
    return w;
  }
  function panel(x, y, w, h) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.16)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "rgba(255,253,250,0.92)"; ctx.fill(); ctx.restore();
    outline(1.8); rrect(x, y, w, h, 18); ctx.stroke();
  }
  // 施工队员（前额叶的神经元，戴安全帽）
  function worker(x, y, s, o) {
    chara(x, y, s, Object.assign({ who: "neuron", hat: "helmet", hatColor: "#ffc94d", cloth: "#ffe0c2", hair: "#c98a5a" }, o || {}));
  }
  // 一个会随着年龄长大的孩子
  function kid(x, y, s, o) {
    chara(x, y, s, Object.assign({ who: "neuron", hair: "#7a5a4a", cloth: "#cfe8f7", style: "short" }, o || {}));
  }

  // ---------- 第 1 幕：各脑区的完工进度条 ----------
  const ROWS = [["感觉运动", 0.3, "#bfe3f5"], ["杏仁核", 0.42, "#ffd1dc"], ["纹状体", 0.5, "#fff1b8"], ["海马", 0.56, "#c8efd9"], ["前额叶", 1, C.pfc]];
  function orderView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f0", "#fdeef3"); Anima.bokeh(6, "#ffe0c8", 0.7, 11);
    const x0 = W * (n ? 0.27 : 0.2), x1 = W * 0.9, yT = top + H * 0.05, yB = H * 0.64, rh = (yB - yT) / ROWS.length, ax = H * 0.71;
    const age = prog(0.8, 9); // 0 → 1 表示出生 → 20 多岁
    const fs = fsz(0.03);
    ROWS.forEach((r, i) => {
      const y = yT + rh * (i + 0.5), bh = Math.min(rh * 0.5, H * 0.06);
      rrect(x0, y - bh / 2, (x1 - x0), bh, bh / 2); ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.fill();
      ctx.save(); ctx.setLineDash([4, 5]); outline(1.2); rrect(x0, y - bh / 2, (x1 - x0) * r[1], bh, bh / 2); ctx.stroke(); ctx.restore();
      const f = Math.min(age, r[1]);
      if (f > 0.01) { rrect(x0, y - bh / 2, (x1 - x0) * f, bh, bh / 2); ctx.fillStyle = r[2]; ctx.fill(); outline(1.6); ctx.stroke(); }
      text(r[0], x0 - fs * 0.6, y, fs, C.ink, "right");
      if (age >= r[1] && i < 4) { sparkle(x0 + (x1 - x0) * r[1] + bh * 0.7, y, bh * 0.45, 1); }
      if (i === 4) worker(x0 + (x1 - x0) * Math.max(0.03, f), y + bh / 2, Math.min(H * 0.04, rh * 0.28), { walk: age < 1 ? time * 8 : null, arms: age < 1 ? "hold" : "up", item: age < 1 ? "book" : null, eyes: age < 1 ? "open" : "happy" });
    });
    // 年龄轴
    outline(2); ctx.beginPath(); ctx.moveTo(x0, ax); ctx.lineTo(x1, ax); ctx.stroke();
    const tf = fsz(0.026);
    [["出生", 0], ["童年", 0.28], ["青春期", 0.6], ["20 多岁", 1]].forEach((t) => {
      const x = lerp(x0, x1, t[1]);
      ctx.beginPath(); ctx.moveTo(x, ax - 5); ctx.lineTo(x, ax + 5); ctx.stroke();
      text(t[0], x, ax + tf * 1.1, tf, C.soft);
    });
    // 沿着时间轴长大的孩子
    const kx = lerp(x0, x1, age), ks = H * (0.03 + 0.022 * age);
    kid(kx, H * 0.975, ks, { walk: age > 0 && age < 1 ? time * 8 : null, eyes: "happy", arms: age >= 1 ? "wave" : "down" });
    const pY = yT + rh * 4.5;
    say("busy", lt > 2.5 && lt < 9, x0 + (x1 - x0) * Math.min(age, 1), pY - H * 0.04, W * (n ? 0.74 : 0.76), yT + rh * (n ? 0.55 : 1.2), "前额叶还在施工中～", "say");
    callout("pfc", lt > 10, x0 + (x1 - x0) * 0.8, pY, W * (n ? 0.45 : 0.5), H * 0.83, "前额叶：计划、专注、踩刹车");
    ctx.restore();
  }

  // ---------- 第 2、3 幕：前额叶突触数量曲线 ----------
  const fNorm = (g) => { g *= 25; return g < 6 ? 0.12 + 0.88 * ease(g / 6) : g < 14 ? 1 - 0.46 * ease((g - 6) / 8) : 0.54; };
  const fAdhd = (g) => fNorm(Math.max(0, g - 0.11)); // 示意：整条时间表往后推一点
  function curveView(a) {
    const n = nar(), top = Anima.topSafe(), ad = S.adhd;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6fbff", "#fff1ea"); Anima.petals(8, 0.5, 33);
    const px = W * 0.04, pw = n ? W * 0.92 : W * 0.6, py = top + H * 0.02, ph = H * 0.93 - py;
    panel(px, py, pw, ph);
    const fs = fsz(0.028);
    text("前额叶的突触数量", px + pw / 2, py + fs * 1.2, fs, C.ink);
    const x0 = px + pw * 0.08, x1 = px + pw * 0.94, yt = py + fs * 3 + H * 0.06, yb = py + ph - fs * 2.6;
    const X = (g) => lerp(x0, x1, g), Y = (v) => lerp(yb, yt, v);
    outline(2); ctx.beginPath(); ctx.moveTo(x0, yt - fs * 0.5); ctx.lineTo(x0, yb); ctx.lineTo(x1, yb); ctx.stroke();
    const tf = fsz(0.025);
    [["出生", 0], ["6 岁", 6 / 25], ["12 岁", 12 / 25], ["青春期", 15 / 25], ["25 岁", 1]].forEach((t, i) => {
      if (n && i === 3) return;
      ctx.beginPath(); ctx.moveTo(X(t[1]), yb); ctx.lineTo(X(t[1]), yb + 5); ctx.stroke();
      text(t[0], X(t[1]), yb + tf * 1.1, tf, C.soft);
    });
    const drawCurve = (f, upto, color, dash, w) => {
      ctx.save(); if (dash) ctx.setLineDash(dash);
      ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath();
      for (let k = 0; k <= 80; k++) { const g = (k / 80) * upto; const x = X(g), y = Y(f(g)); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
    };
    const pn = cur === 1 ? prog(0.8, 8) : 1;
    ctx.save(); ctx.globalAlpha *= 1 - ad * 0.55;
    drawCurve(fNorm, Math.max(0.001, pn), C.syn, null, Math.max(3, H * 0.009));
    ctx.restore();
    let pa = 0;
    if (ad > 0.02) {
      pa = cur === 2 ? prog(1, 8) : 1;
      // 12 岁那条线：症状要在这之前出现
      ctx.save(); ctx.globalAlpha *= ad; ctx.setLineDash([5, 6]); outline(1.4);
      ctx.beginPath(); ctx.moveTo(X(12 / 25), yt); ctx.lineTo(X(12 / 25), yb); ctx.stroke(); ctx.restore();
      ctx.save(); ctx.globalAlpha *= ad;
      drawCurve(fAdhd, Math.max(0.001, pa), C.adhd, [10, 7], Math.max(3, H * 0.009));
      ctx.restore();
    }
    // 骑在曲线上的施工队员：先搭，后剪
    const cs = H * (n ? 0.036 : 0.04);
    if (ad < 0.5) {
      const g = pn, v = fNorm(g), pruning = g > 6 / 25 && g < 14 / 25;
      worker(X(g), Y(v), cs, { walk: pn < 1 ? time * 8 : null, item: pruning ? "scissors" : null, arms: pruning ? "hold" : g < 6 / 25 ? "up" : "wave", eyes: "happy", mouth: pruning ? "o" : "grin" });
      if (pruning) sparkles(X(g) + cs, Y(v) - cs * 1.5, cs * 1.4, 2, 0.8, 5);
    } else {
      const g = pa, v = fAdhd(g);
      worker(X(g), Y(v), cs, { hatColor: "#ffb07a", walk: pa < 1 ? time * 8 : null, item: "book", arms: "hold", eyes: "open", mouth: "wavy", dir: 1 });
      if (pa < 1) emote("sweat", X(g) - cs * 0.9, Y(v) - cs * 3, cs * 0.5);
    }
    if (cur === 1) {
      callout("m1", lt > 1.2 && lt < 4.2, X(1 / 25), Y(fNorm(1 / 25)), X(4 / 25) + W * 0.04, Y(0.5), "1 岁左右：工作记忆冒头");
      callout("peak", lt > 4 && lt < 7.5, X(6 / 25), Y(1), X(12 / 25), Y(0.96), "约 6 岁：突触最多，能专注、会计划");
      callout("prune", lt > 7.5, X(10 / 25), Y(fNorm(10 / 25)), X(n ? 13 / 25 : 16 / 25), Y(0.3), "青春期：多达一半被剪掉");
    }
    if (cur === 2) {
      callout("typ", lt > 1 && lt < 5.5, X(4 / 25), Y(fNorm(4 / 25)), X(n ? 9 / 25 : 10 / 25), Y(0.2), "一般的时间表");
      callout("late", lt > 5.5, X(9 / 25), Y(fAdhd(9 / 25)), X(n ? 15 / 25 : 17 / 25), Y(0.22), "ADHD：成熟可能推迟");
      say("twelve", lt > 8.5, X(12 / 25), yt + H * 0.02, X(n ? 19 / 25 : 18 / 25), yt + H * 0.12, n ? "12 岁前\n出现症状" : "症状要在 12 岁前出现", "box");
    }
    // 右边小窗：放大看一根树突（桌面）
    if (!n) {
      const bx = W * 0.67, bw = W * 0.29, by = py, bh = ph;
      panel(bx, by, bw, bh);
      text("放大看一段树突", bx + bw / 2, by + fs * 1.2, fs, C.ink);
      const g = ad > 0.5 ? pa : pn, v = ad > 0.5 ? fAdhd(g) : fNorm(g);
      const cx = bx + bw * 0.5, yA = by + bh * 0.2, yZ = by + bh * 0.9;
      ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.028; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(cx, yA); ctx.lineTo(cx, yZ); ctx.stroke();
      ctx.strokeStyle = "#f7b9a8"; ctx.lineWidth = H * 0.02; ctx.stroke();
      const N = 14, on = Math.round(N * v);
      for (let k = 0; k < N; k++) {
        const side = k % 2 ? 1 : -1, y = lerp(yA + H * 0.02, yZ - H * 0.02, (k + 0.5) / N);
        const show = [0, 7, 3, 11, 5, 9, 1, 13, 2, 8, 4, 12, 6, 10].indexOf(k) < on;
        ctx.save(); ctx.globalAlpha *= show ? 1 : 0.15;
        const ex = cx + side * H * 0.07;
        ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.moveTo(cx, y); ctx.lineTo(ex, y - H * 0.01); ctx.stroke();
        ctx.beginPath(); ctx.arc(ex, y - H * 0.01, H * 0.016, 0, Math.PI * 2); ctx.fillStyle = ad > 0.5 ? "#ffc9ad" : "#bfe3f5"; ctx.fill(); outline(1.3); ctx.stroke();
        ctx.restore();
      }
      text("突触 " + on + " 个", cx, by + bh * 0.13, fsz(0.026), ad > 0.5 ? C.adhd : "#4d8fb8");
    }
    ctx.restore();
  }

  // ---------- 第 4 幕：症状随年龄变化 ----------
  const STAGES = ["学龄前", "学龄期", "青春期", "大学", "成年"];
  const LINES = [["多动冲动", C.hyp, [0.9, 0.85, 0.55, 0.42, 0.34]], ["注意力不集中", C.ina, [0.25, 0.78, 0.8, 0.8, 0.8]], ["共病", C.com, [0.05, 0.2, 0.4, 0.58, 0.74]]];
  function ageView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf7ff", "#fff3ea"); Anima.bokeh(6, "#e4dcff", 0.6, 44);
    const fs = fsz(0.028);
    const x0 = W * 0.1, x1 = W * (n ? 0.9 : 0.72), yt = top + H * 0.14, yb = H * 0.66;
    // 图例
    let lx = W * 0.06;
    LINES.forEach((L) => {
      const lab = n && L[0] === "注意力不集中" ? "注意力" : L[0];
      ctx.fillStyle = L[1]; rrect(lx, top + H * 0.035, fs * 1.4, fs * 0.5, fs * 0.25); ctx.fill();
      text(lab, lx + fs * 1.7, top + H * 0.035 + fs * 0.25, fs, C.ink, "left");
      ctx.font = `${fs}px ${Anima.ROUND}`; lx += fs * 2.6 + ctx.measureText(lab).width + fs;
    });
    outline(2); ctx.beginPath(); ctx.moveTo(x0, yt); ctx.lineTo(x0, yb); ctx.lineTo(x1, yb); ctx.stroke();
    const X = (i) => lerp(x0 + (x1 - x0) * 0.08, x1 - (x1 - x0) * 0.06, i / 4), Y = (v) => lerp(yb, yt, v);
    const tf = fsz(0.026);
    STAGES.forEach((s, i) => text(s, X(i), yb + tf * 1.1, tf, C.soft));
    const p = prog(0.8, 8) * 4;
    LINES.forEach((L) => {
      ctx.strokeStyle = L[1]; ctx.lineWidth = Math.max(3, H * 0.01); ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath();
      for (let k = 0; k <= 40; k++) {
        const t = (k / 40) * p, i = Math.min(3, Math.floor(t)), f = ease(t - i);
        const v = lerp(L[2][i], L[2][Math.min(4, i + 1)], f);
        if (k) ctx.lineTo(X(t), Y(v)); else ctx.moveTo(X(t), Y(v));
      }
      ctx.stroke();
      const i = Math.min(3, Math.floor(p)), v = lerp(L[2][i], L[2][Math.min(4, i + 1)], ease(p - i));
      ctx.beginPath(); ctx.arc(X(p), Y(v), H * 0.012, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.strokeStyle = L[1]; ctx.lineWidth = 2.5; ctx.stroke();
    });
    // 沿着年龄长大的人
    const g = p / 4, kx = n ? lerp(W * 0.12, W * 0.88, g) : W * 0.86, ks = H * (0.04 + 0.025 * g);
    const young = g < 0.3, mid = g >= 0.3 && g < 0.7;
    kid(kx, H * 0.975, ks, { jump: young ? Math.abs(Math.sin(time * 5)) * 0.5 : 0, arms: young ? "up" : mid ? "hold" : "down", item: mid ? "book" : null,
      eyes: young ? "sparkle" : mid ? "sleepy" : "open", mouth: young ? "grin" : mid ? "flat" : "wavy", cloth: g > 0.7 ? "#e4e0ff" : "#cfe8f7", walk: !n || g >= 1 ? null : time * 7 });
    if (!young) emote(mid ? "?" : "sweat", kx + ks * 1.1, H * 0.975 - ks * 3.3, ks * 0.55);
    if (!n) {
      const bx = W * 0.86;
      text(young ? "坐不住" : mid ? "走神" : "忙乱、拖延", bx, H * 0.975 - ks * 3.1 - H * 0.07, fs, C.ink);
    }
    callout("hyp", lt > 3 && lt < 7.5, X(2), Y(0.55), X(n ? 2.2 : 2.6), yt - H * 0.02, "多动冲动：青春期后常减轻");
    callout("ina", lt > 8, X(3), Y(0.8), X(n ? 2.2 : 2.6), yt - H * 0.02, "注意力问题：常持续到成年");
    callout("com", lt > 9.5, X(4), Y(0.74), X(n ? 2.4 : 3.2), Y(0.36), "共病越来越多");
    ctx.restore();
  }

  // ---------- 第 5 幕：成人 ADHD 被共病箱子挡住 ----------
  const CRATES = ["焦虑", "抑郁", "物质使用", "吸烟"];
  function hiddenView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff9f1", "#f1f5ff"); Anima.bokeh(6, "#dfe9ff", 0.7, 61);
    const gy = H * 0.9, fs = fsz(0.03);
    ctx.fillStyle = "#f3e7dc"; ctx.fillRect(0, gy, W, H - gy);
    outline(1.5); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    const cx = W * (n ? 0.55 : 0.52), cw = Math.min(W * (n ? 0.3 : 0.2), H * 0.34), ch = H * 0.12;
    // 箱子后面的 ADHD 牌子
    const sy = gy - ch * 1.78, found = prog(9.3, 1);
    glow(cx, sy, H * 0.12, C.gold, found * 0.8);
    rrect(cx - cw * 0.42, sy - ch * 0.45, cw * 0.84, ch * 0.9, 12); ctx.fillStyle = mix("#fff", "#ffe39a", found); ctx.fill(); outline(2); ctx.stroke();
    text("ADHD", cx, sy + 1, fsz(0.04), C.ink);
    // 箱子：医生一个个搬开
    CRATES.forEach((t, i) => { // 前两个在上层，先被搬走
      const col = i % 2, row = i < 2 ? 2 : 1, t0 = 3 + i * 1.5, mv = prog(t0, 1.2);
      const fx = cx - cw / 2 + col * cw / 2 + mv * W * 0.12 * (col ? 1 : -1), fy = gy - ch * row;
      ctx.save(); ctx.globalAlpha *= 1 - prog(t0 + 0.5, 0.6);
      rrect(fx + 2, fy + 2, cw / 2 - 4, ch - 4, 6); ctx.fillStyle = C.crate; ctx.fill(); outline(1.8); ctx.stroke();
      outline(1); ctx.beginPath(); ctx.moveTo(fx + 6, fy + ch * 0.25); ctx.lineTo(fx + cw / 2 - 6, fy + ch * 0.25); ctx.stroke();
      text(t, fx + cw / 4, fy + ch * 0.6, fsz(t.length > 2 ? 0.024 : 0.028), C.ink);
      ctx.restore();
    });
    // 成年人（本人）和医生
    const ps = H * 0.06;
    chara(W * (n ? 0.14 : 0.18), gy, ps, { who: "neuron", hair: "#6b5a7a", cloth: "#e4e0ff", style: "long", eyes: found > 0.5 ? "happy" : "open", mouth: found > 0.5 ? "smile" : "wavy", brow: found > 0.5 ? null : "worry", arms: "hold", item: "book" });
    if (found < 0.5) emote("sweat", W * (n ? 0.14 : 0.18) + ps, gy - ps * 3.2, ps * 0.5);
    const dx = W * (n ? 0.88 : 0.84);
    chara(dx, gy, ps, { who: "neuron", hair: "#8a7a6a", cloth: "#ffffff", glasses: true, dir: -1, arms: lt > 3 && lt < 9.5 ? "hold" : "point", eyes: found > 0.5 ? "sparkle" : "open", mouth: "smile", tag: "医生" });
    if (found > 0.5) emote("bulb", dx, gy - ps * 3.5, ps * 0.6);
    text("常常一起出现：", cx, gy - ch * 2.65, fs, C.soft);
    say("self", lt > 0.8 && lt < 3.2, W * (n ? 0.14 : 0.18), gy - ps * 3.2, W * (n ? 0.26 : 0.24), top + H * 0.1, "总是丢三落四、做事拖……", "think");
    say("doc", lt > 9.8, dx, gy - ps * 3.2, W * (n ? 0.7 : 0.8), top + H * 0.16, n ? "后面还有\nADHD！" : "后面还藏着 ADHD！", "say");
    callout("hide", lt > 3.2 && lt < 9, cx + cw * 0.5, gy - ch * 1.5, n ? W * 0.5 : W * 0.72, top + H * 0.05, "先处理共病，ADHD 被挡在后面");
    ctx.restore();
  }

  // ---------- 第 6 幕：脚手架 ----------
  function scaffoldView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f3fbf6", "#fff4ec"); Anima.petals(12, 0.6, 71);
    const gy = H * 0.9;
    ctx.fillStyle = "#e9f3e1"; ctx.fillRect(0, gy, W, H - gy); outline(1.5); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    const bx = W * 0.5, bw = Math.min(W * 0.26, H * 0.4), fh = H * 0.1;
    const floors = 1 + Math.floor(4 * prog(1, 9) + 0.001);
    const grow = 4 * prog(1, 9) - Math.floor(4 * prog(1, 9));
    for (let k = 0; k < Math.min(5, floors + 1); k++) {
      const part = k < floors ? 1 : grow;
      if (part <= 0.02) continue;
      const y = gy - fh * (k + 1);
      ctx.save(); ctx.globalAlpha *= part;
      rrect(bx - bw / 2, y, bw, fh, 6); ctx.fillStyle = k % 2 ? "#ffe0cc" : "#ffd3bb"; ctx.fill(); outline(1.8); ctx.stroke();
      for (let j = 0; j < 3; j++) { rrect(bx - bw * 0.36 + j * bw * 0.27, y + fh * 0.25, bw * 0.18, fh * 0.45, 4); ctx.fillStyle = "#fff8e8"; ctx.fill(); outline(1.2); ctx.stroke(); }
      ctx.restore();
    }
    // 脚手架
    const sh = fh * 5.2;
    ctx.strokeStyle = "#b99a7a"; ctx.lineWidth = Math.max(2, H * 0.006);
    for (const sx of [-1, 1]) {
      const x = bx + sx * (bw / 2 + H * 0.03);
      ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x, gy - sh); ctx.stroke();
      for (let k = 1; k <= 5; k++) { ctx.beginPath(); ctx.moveTo(x, gy - fh * k); ctx.lineTo(bx + sx * bw / 2, gy - fh * k); ctx.stroke(); }
    }
    plate("前额叶大楼", bx, gy - fh * (floors + (grow > 0.5 ? 1 : 0)) - H * 0.045, fsz(0.028), "#fff1e4");
    const hs = H * (n ? 0.05 : 0.055);
    const P = n ? [0.1, 0.26, 0.74, 0.9] : [0.14, 0.26, 0.74, 0.86], L = W * P[0], R = W * P[3];
    chara(L, gy, hs, { who: "neuron", hair: "#9a6a4a", cloth: "#ffd9e4", style: "bun", arms: "wave", eyes: "happy", tag: "家人" });
    chara(W * P[1], gy, hs, { who: "neuron", hair: "#5a6a8a", cloth: "#d9ecff", glasses: true, arms: "hold", item: "book", eyes: "open", tag: "老师" });
    chara(W * P[2], gy, hs, { who: "neuron", hair: "#8a7a6a", cloth: "#ffffff", glasses: true, dir: -1, arms: "point", eyes: "happy", tag: "医生" });
    chara(R, gy, hs, { who: "drug", label: "药", dir: -1, arms: "wave", eyes: "happy", tag: "必要时" });
    worker(bx + bw / 2 + H * 0.07, gy - fh * floors, H * 0.04, { arms: "up", eyes: "sparkle", mouth: "grin", jump: Math.abs(Math.sin(time * 3)) * 0.2 });
    sparkles(bx + bw / 2 + H * 0.07, gy - fh * floors - H * 0.08, H * 0.08, 3, 0.8, 9);
    callout("sup", lt > 2 && lt < 7, W * (P[0] + P[1]) / 2, gy - hs * 3.2, n ? W * 0.3 : W * 0.24, top + H * 0.12, "行为训练 · 学校支持");
    callout("rx", lt > 5 && lt < 10, W * (P[2] + P[3]) / 2, gy - hs * 3.2, n ? W * 0.8 : W * 0.78, n ? H * 0.6 : top + H * 0.22, "必要时由医生用药");
    say("kid", lt > 10, bx + bw / 2 + H * 0.07, gy - fh * floors - H * 0.12, n ? W * 0.8 : W * 0.26, n ? H * 0.45 : top + H * 0.14, n ? "我在慢慢长～" : "不是懒，也不是故意的——我在慢慢长～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0804f", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#8f84e0", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) orderView(S.v0);
    if (S.v1 > 0.02) curveView(S.v1);
    if (S.v2 > 0.02) ageView(S.v2);
    if (S.v3 > 0.02) hiddenView(S.v3);
    if (S.v4 > 0.02) scaffoldView(S.v4);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0804f",
    titleCard: { lines: ["前额叶的", "成长时间表"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
