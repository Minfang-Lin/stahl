Anima.register("transporter-families", {
    "title": "回收门的两大家族",
    "tag": "基础篇",
    "headline": "回收递质要过【两道门】",
    "lede": "递质送完信，先被细胞膜上的回收门拉回末梢，再被囊泡上的装箱员装回囊泡。这两道门属于两个不同的家族：一个靠钠离子搭便车，一个靠质子交换。很多精神科药物，瞄准的就是它们。",
    "summary": "SLC6 膜转运体（SERT、NET、DAT、GAT）靠钠离子梯度回收递质，SLC18 囊泡转运体（VMAT2、VAChT）靠质子梯度装货；SSRI、SNRI、兴奋剂和 VMAT2 抑制剂各堵哪道门。",
    "chapter": "对应 Stahl《精神药理学精要》第 2 章 · 转运体作为药物靶点",
    "footer": "",
    "canvasLabel": "回收员把递质从突触间隙拉回末梢、装箱员把它装进囊泡，钠离子和质子怎样提供动力，以及不同药物访客分别堵住哪扇门的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["pump", "DA", "5HT", "NE", "GABA", "Glu", "ACh", "MAO", "drug"],
    "color": "#9fc3ea"
  }, () => {
  const CH = [
    { title: "两道回收门", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["第一道", "细胞膜上"], pill2: ["第二道", "囊泡上"],
      text: "递质送完信，要被收回来再利用。这一路要过两道门：第一道在末梢的细胞膜上，叫膜转运体，把递质从突触间隙拉回末梢里；第二道在囊泡上，叫囊泡转运体，把递质装回囊泡，等下一次放出去。这两道门属于两个不同的家族，也都是药物的靶点。",
      fact: "膜转运体：突触间隙 → 末梢；囊泡转运体：末梢 → 囊泡" },
    { title: "膜上的一家人：SLC6", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["家族", "SLC6"], pill2: ["成员", "各认各的"],
      text: "膜上的回收门，很多属于同一个大家族，叫 SLC6。5-HT 的回收门叫 SERT，去甲肾上腺素的叫 NET，多巴胺的叫 DAT，GABA 的叫 GAT。它们长得很像，各认各的递质。谷氨酸的回收门属于另一个家族，叫 SLC1，也叫兴奋性氨基酸转运体，这里先不展开。",
      fact: "SERT、NET、DAT、GAT 同属 SLC6 家族；谷氨酸转运体属于 SLC1 家族" },
    { title: "搭钠离子的便车", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["动力", "Na⁺ 浓度差"], pill2: ["方向", "外 → 里"],
      text: "回收门要把递质往浓度更高的末梢里拉，力气从哪来？答案是钠离子。细胞外的钠离子多、末梢里面少，它们总想往里冲。回收门让递质和钠离子（还有氯离子）一起进门，递质就像搭了顺风车。末梢里的钠钾泵再花能量把钠离子搬出去，维持这个浓度差，回收门才能一直转。",
      fact: "SLC6 转运体和 Na⁺、Cl⁻ 一起转运：借钠离子的浓度差把递质运进末梢" },
    { title: "囊泡上的装箱员：SLC18", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["家族", "SLC18"], pill2: ["动力", "H⁺ 浓度差"],
      text: "进了末梢，还要装箱。囊泡上的装箱员属于 SLC18 家族：VMAT2 把多巴胺、5-HT、去甲肾上腺素这些单胺装进囊泡，VAChT 负责装乙酰胆碱。它们的动力不是钠离子，而是氢离子（质子）：囊泡上的质子泵先把氢离子打进囊泡，装箱员放氢离子出去，换递质进来。",
      fact: "VMAT2、VAChT 属于 SLC18 家族，靠囊泡内外的质子（H⁺）浓度差装货" },
    { title: "药物堵住膜上的门", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["靶点", "膜转运体"], pill2: ["访客", "SSRI"],
      text: "很多药物的靶点正是膜转运体。SSRI 只堵 5-HT 的门 SERT；SNRI 同时堵 SERT 和 NET；安非他酮这样的 NDRI 堵 NET 和 DAT；哌甲酯这类兴奋剂也主要堵 DAT 和 NET。哪扇门被堵，哪种递质就回不了家，在突触间隙里停得更久、送信更多。",
      fact: "SSRI、SNRI、NDRI 和哌甲酯类兴奋剂，都作用在 SLC6 家族的膜转运体上" },
    { title: "按住装箱员：VMAT2 抑制剂", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["靶点", "VMAT2"], pill2: ["每次释放", "变少"],
      text: "囊泡转运体也能当靶点。缬苯那嗪、氘丁苯那嗪、丁苯那嗪都是 VMAT2 抑制剂：装箱员被按住，多巴胺装不进囊泡，留在外面的被单胺氧化酶分解，每次放出去的就少了，可以减轻迟发性运动障碍、亨廷顿病舞蹈症这类不自主运动。苯丙胺则两道门都动，详见《两种兴奋剂》。",
      fact: "VMAT2 抑制剂让囊泡少装单胺；苯丙胺同时作用于膜转运体和 VMAT2" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { term: "#ffe3c4", post: "#ffe0ea", pumpC: "#9fc3ea", vmat: "#ffd27a", rec: "#ffc7a0", mem: "#ffd9c7" });
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };

  function update() { lt = Anima.sceneTime; }
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => W / H < 1.5;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
  function termY(x, T) {
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
  function bg(top, mid, bot, seed) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, top); g.addColorStop(0.5, mid); g.addColorStop(1, bot);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfe3f7", 0.7, seed);
    Anima.petals(7, 0.45, seed + 3);
  }
  // 质子：小小的红色圆球，中间一个“+”（不用文字，免得和别的字打架）
  function proton(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffb8b8"; ctx.fill(); outline(Math.max(1, r * 0.14)); ctx.stroke();
    ctx.strokeStyle = "#c2414f"; ctx.lineWidth = Math.max(1.2, r * 0.22);
    ctx.beginPath(); ctx.moveTo(x - r * 0.5, y); ctx.lineTo(x + r * 0.5, y); ctx.moveTo(x, y - r * 0.5); ctx.lineTo(x, y + r * 0.5); ctx.stroke();
  }
  // 膜片（横着的一条磷脂双层）
  function band(y, th, x0, x1, color) {
    ctx.fillStyle = color; ctx.fillRect(x0, y - th / 2, x1 - x0, th);
    outline(1.8); ctx.beginPath(); ctx.moveTo(x0, y - th / 2); ctx.lineTo(x1, y - th / 2); ctx.moveTo(x0, y + th / 2); ctx.lineTo(x1, y + th / 2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    const st = Math.max(8, th * 0.4);
    for (let x = x0 + st / 2; x < x1; x += st) for (const yy of [y - th / 2 + th * 0.12, y + th / 2 - th * 0.12]) { ctx.beginPath(); ctx.arc(x, yy, th * 0.1, 0, Math.PI * 2); ctx.fill(); }
  }

  // ---------- 第 1、6 幕：末梢全景 ----------
  function termView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff6ee", "#eef6fc", "#fff0f4", 12);
    const post = H * 0.84, rs = H * 0.04, cs = H * 0.03, fs = fsz(0.026);
    const T = { cx: W * (n ? 0.42 : 0.4), y0: 0, w: Math.min(W * (n ? 0.64 : 0.5), H * 0.95), h: H * 0.58 };
    const vm = cur === 5 ? prog(1.5, 2) : 0; // VMAT2 被按住的程度
    // 突触后
    Anima.postMembrane(post, C.post, {});
    const recX = [T.cx - T.w * 0.25, T.cx + T.w * 0.02], siteY = post - rs * 1.62;
    recX.forEach((x, i) => Anima.receptor(x, post, rs, C.rec, (1 - vm * 0.8) * (0.55 + 0.3 * Math.sin(time * 3 + i)), { shape: "tri" }));
    Anima.terminal(T.cx, T.y0, T.w, T.h, C.term, { face: false });
    face(T.cx - T.w * 0.26, T.h * 0.3, H * 0.04, vm > 0.5 ? 0 : 1);
    // 膜转运体（DAT）
    const dx = T.cx + T.w * 0.3, dy = termY(dx, T) - H * 0.008;
    Anima.transporter(dx, dy, rs, C.pumpC, time * 2, false);
    const px = dx + T.w * 0.14, py = dy + H * 0.2;
    chara(px, py, cs * 1.1, { who: "pump", item: "net", arms: "wave", eyes: "happy", dir: -1, tag: "DAT" });
    // 囊泡 + VMAT2
    const V = { x: T.cx + T.w * 0.02, y: T.h * 0.58, r: H * 0.075 };
    const nIn = cur === 5 ? Math.round(6 - vm * 4) : 6;
    Anima.vesicle(V.x, V.y, V.r, Anima.CAST.DA.hair, nIn, 3);
    Anima.vesicle(V.x - V.r * 2.3, V.y + V.r * 0.4, V.r * 0.7, Anima.CAST.DA.hair, cur === 5 ? Math.round(4 - vm * 3) : 4, 9);
    const gx = V.x + V.r * 0.9, gy = V.y - V.r * 0.35;
    ctx.save(); ctx.translate(gx, gy); ctx.rotate(-0.4);
    Anima.transporter(0, 0, H * 0.026, C.vmat, vm > 0.6 ? 0 : time * 2.4, false);
    ctx.restore();
    text("VMAT2", V.x - V.r * 0.2, V.y - V.r - fs * 0.9, fs * 0.9, C.ink);
    // 快递员：间隙 → DAT → 末梢里 → VMAT2 → 囊泡
    const inside = { x: dx - T.w * 0.02, y: dy - H * 0.05 }, load = { x: gx + H * 0.02, y: gy + cs * 3.2 };
    for (let k = 0; k < 3; k++) {
      const t = ((lt * 0.14) + k / 3) % 1;
      let x, y, al = 1, sc = 1, o = { eyes: "happy", arms: "hold", item: "letter" };
      const out = { x: recX[k % 2], y: siteY }, mouth = { x: dx, y: dy + rs * 1.1 + cs * 3.2 };
      if (t < 0.3) { const e = ease(t / 0.3); x = lerp(out.x, mouth.x, e); y = lerp(out.y, mouth.y, e); o.item = null; o.arms = "down"; }
      else if (t < 0.4) { const e = (t - 0.3) / 0.1; x = dx; y = lerp(mouth.y, inside.y, e); al = Math.abs(e - 0.5) * 2; sc = 0.7 + Math.abs(e - 0.5) * 0.6; o.item = null; }
      else if (cur === 5 && vm > 0.5) {
        // 装不进去：在门口转悠，然后被清扫员分解
        const e = ease((t - 0.4) / 0.3), d = ease((t - 0.7) / 0.3);
        x = lerp(inside.x, load.x + H * 0.03, e) + Math.sin(time * 2 + k) * H * 0.01; y = lerp(inside.y, load.y + H * 0.03, e);
        al = 1 - d; o = { eyes: d > 0 ? "dizzy" : "teary", arms: "down", mouth: "wavy" };
      } else if (t < 0.8) { const e = ease((t - 0.4) / 0.4); x = lerp(inside.x, load.x, e); y = lerp(inside.y, load.y, e) - Math.sin(e * Math.PI) * H * 0.03; o.item = null; }
      else { const e = (t - 0.8) / 0.2; x = lerp(load.x, gx - H * 0.01, e); y = lerp(load.y, gy + H * 0.01, e); al = 1 - e; sc = 1 - e * 0.5; o.arms = "up"; o.item = null; }
      chara(x, y, cs * sc, Object.assign({ who: "DA", alpha: al, walk: time * 8 + k, shadow: false }, o));
    }
    if (cur === 0) {
      callout("mem", lt > 0.8 && lt < 6, dx, dy + rs * 0.7, n ? W * 0.62 : W * 0.72, H * 0.62, "① 膜转运体：拉回末梢");
      callout("ves", lt > 6 && lt < 11.5, gx, gy, n ? W * 0.7 : W * 0.76, n ? H * 0.66 : H * 0.3, "② 囊泡转运体：装进囊泡");
      say("home", lt > 2 && lt < 6.5, px, py - cs * 3.4, n ? W * 0.82 : W * 0.88, post - H * 0.06, "欢迎回来～", "say");
      say("box", lt > 11.5, V.x - V.r * 2.3, V.y - V.r * 0.4, n ? W * 0.24 : W * 0.2, H * 0.54, "装好啦，下次再出发", "say");
    }
    if (cur === 5) {
      const dp = prog(0.5, 1.6);
      chara(lerp(-cs * 3, gx - H * 0.035, dp), gy + cs * 2.4, cs, { who: "drug", label: "", hatColor: "#ffb36b", tag: "VMAT2 抑制剂", walk: dp < 1 ? time * 9 : null, arms: dp >= 1 ? "shh" : "down", eyes: "happy", dir: 1, shadow: false });
      const mx = load.x + H * 0.1, my = load.y + H * 0.03;
      chara(mx, my, cs, { who: "MAO", item: "broom", arms: "hold", eyes: lt > 6 ? "happy" : "open", dir: -1 });
      callout("hold", lt > 2.2 && lt < 6.2, gx, gy - H * 0.02, n ? W * 0.74 : W * 0.72, H * 0.24, "VMAT2 被按住：装不进");
      callout("mao", lt > 6.4 && lt < 10.4, mx, my - cs * 2.5, n ? W * 0.76 : W * 0.78, H * 0.5, "留在外面：被 MAO 分解");
      say("less", lt > 3.8 && lt < 8, recX[0], siteY - cs * 3, n ? W * 0.2 : W * 0.14, post - H * 0.1, "今天的信少了一点", "think");
      say("amph", lt > 10.6, T.cx, T.h * 0.5, n ? W * 0.3 : W * 0.2, H * 0.68, n ? "苯丙胺：两道门都动" : "苯丙胺：两道门都动（见《两种兴奋剂》）", "box");
    }
    ctx.restore();
  }

  // ---------- 第 2 幕：SLC6 一家 ----------
  function famView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#f4f8ff", "#fff8f0", "#f7f0fd", 25);
    const fs = fsz(0.028), my = H * 0.52, th = H * 0.07, s = H * 0.05, cs = H * 0.032;
    const x0 = W * 0.03, x1 = W * (n ? 0.97 : 0.7);
    // 上面是间隙，下面是末梢里
    ctx.fillStyle = "#fff3e6"; ctx.fillRect(x0, my, x1 - x0, H * 0.4);
    band(my, th, x0, x1, C.mem);
    text("突触间隙", x0 + fs * 3, my - H * 0.29, fs * 0.9, C.soft);
    text("末梢里面", x0 + fs * 3, my + H * 0.33, fs * 0.9, C.soft);
    const fam = [["SERT", "5HT"], ["NET", "NE"], ["DAT", "DA"], ["GAT", "GABA"]];
    const step = (x1 - x0) / 4.2;
    fam.forEach((f, i) => {
      const x = x0 + step * (0.8 + i) + step * 0.1, show = prog(0.5 + i * 0.8, 0.8);
      ctx.save(); ctx.globalAlpha *= 0.25 + 0.75 * show;
      Anima.transporter(x, my, s, C.pumpC, time * 2 + i, false);
      plate(f[0], x, my + H * 0.22, fs, ["#cdf1e4", "#ffd3d6", "#ffd27a", "#e4e0ff"][i]);
      ctx.restore();
      if (show < 0.5) return;
      const t = (time * 0.22 + i * 0.27) % 1;
      const y = t < 0.5 ? lerp(my - H * 0.28, my - s * 1.0, ease(t / 0.5)) : lerp(my - s, my + H * 0.12, ease((t - 0.5) / 0.5));
      const al = t > 0.42 && t < 0.62 ? 0.35 : Math.min(1, Math.sin(t * Math.PI) * 3);
      chara(x - s * 1.1, y, cs, { who: f[1], alpha: al * show, walk: time * 8 + i, eyes: "happy", arms: t < 0.5 ? "wave" : "up", shadow: false });
    });
    // SLC1：另一家
    const g = prog(8, 1);
    if (g > 0.01) {
      ctx.save(); ctx.globalAlpha *= g;
      const gx = n ? W * 0.5 : W * 0.85, gy = n ? H * 0.94 : H * 0.52;
      if (!n) {
        rrect(W * 0.74, H * 0.26, W * 0.22, H * 0.56, 18); ctx.fillStyle = "#fffdf7"; ctx.fill(); outline(1.8); ctx.stroke();
        Anima.transporter(gx, gy, s * 0.9, "#ffe08a", time * 2, false);
        chara(gx - s * 1.3, gy - s * 0.8, cs, { who: "Glu", eyes: "happy", arms: "wave", shadow: false });
        plate("SLC1", gx, H * 0.33, fs, "#fff0b3");
        plate("谷氨酸", gx, gy + H * 0.14, fs, "#fff");
      } else plate("谷氨酸的门：另一家 SLC1", gx, gy, fs, "#fff0b3");
      ctx.restore();
    }
    callout("fam", lt > 3.6 && lt < 8, x0 + step * 1.9, my - th / 2, n ? W * 0.5 : W * 0.36, H * 0.26, "同一家族：SLC6");
    say("mine", lt > 4.5 && lt < 8.5, x0 + step * 2.9, my - H * 0.2, n ? W * 0.72 : W * 0.56, H * 0.24, "我们只认自己的递质～", "say");
    callout("glu", lt > 9 && !n, W * 0.85, H * 0.4, W * 0.6, H * 0.94, "谷氨酸转运体：另一个家族");
    ctx.restore();
  }

  // ---------- 第 3 幕：钠离子的便车 ----------
  function naView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#f2f8ff", "#fff6ee", "#fff1ec", 31);
    const fs = fsz(0.028), my = H * 0.56, th = H * 0.1, ir = H * 0.02, cs = H * 0.038;
    ctx.fillStyle = "#fff0e2"; ctx.fillRect(0, my, W, H);
    band(my, th, 0, W, C.mem);
    plate("细胞外：Na⁺ 多", n ? W * 0.24 : W * 0.14, Anima.topSafe() + fs * 1.2, fs, "#e6f3ff");
    plate("末梢里：Na⁺ 少", n ? W * 0.24 : W * 0.14, H - fs * 1.4, fs, "#fff");
    // 外面很多钠离子，里面很少
    for (let k = 0; k < 16; k++) {
      const x = ((k * 0.137 + 0.05) % 1) * W, y = Anima.topSafe() + fs * 2.6 + ((k * 0.311) % 1) * (my - th / 2 - Anima.topSafe() - fs * 3.2);
      Anima.ion(x + Math.sin(time + k) * H * 0.01, y + Math.cos(time * 1.3 + k) * H * 0.008, ir, "Na", "#bfe3f5");
    }
    for (let k = 0; k < 3; k++) Anima.ion(W * (0.55 + k * 0.1), my + H * 0.2 + k * H * 0.04, ir, "Na", "#bfe3f5");
    // 转运体：外开 → 关 → 内开
    const tx = W * (n ? 0.42 : 0.4), s = H * 0.1, per = 4.5, ph = (lt % per) / per;
    const th2 = ph < 0.35 ? 0.24 : ph < 0.5 ? lerp(0.24, -0.24, ease((ph - 0.35) / 0.15)) : ph < 0.8 ? -0.24 : lerp(-0.24, 0.24, ease((ph - 0.8) / 0.2));
    for (const side of [-1, 1]) {
      ctx.save(); ctx.translate(tx + side * s * 0.42, my); ctx.rotate(side * th2);
      rrect(-s * 0.36, -s * 1.1, s * 0.72, s * 2.2, s * 0.3); ctx.fillStyle = C.pumpC; ctx.fill(); outline(2); ctx.stroke();
      ctx.restore();
    }
    face(tx, my + s * 1.35, s * 0.25, 1);
    // 一起过门的：多巴胺 + 两个钠 + 一个氯（数量只是示意）
    const pass = ph < 0.35 ? lerp(-1, 0, ease(ph / 0.35)) : ph < 0.5 ? 0 : ph < 0.8 ? ease((ph - 0.5) / 0.3) : 2;
    if (pass < 2) {
      const al = pass < -0.9 ? (pass + 1) * 10 : pass > 0.9 ? (1 - pass) * 10 : 1;
      const yy = my + pass * H * 0.3;
      ctx.save(); ctx.globalAlpha *= clamp(al, 0, 1);
      chara(tx, yy + cs * 1.5, cs, { who: "DA", eyes: "happy", arms: "up", shadow: false });
      Anima.ion(tx - s * 0.2, yy - cs * 2.4, ir * 1.1, "Na", "#bfe3f5");
      Anima.ion(tx + s * 0.22, yy - cs * 2.0, ir * 1.1, "Na", "#bfe3f5");
      Anima.ion(tx + s * 0.02, yy - cs * 3.6, ir, "Cl", "#d9f3e3");
      ctx.restore();
    }
    // 钠钾泵
    const kx = W * (n ? 0.82 : 0.78), kon = prog(8.5, 1);
    ctx.save(); ctx.globalAlpha *= 0.3 + 0.7 * kon;
    rrect(kx - s * 0.6, my - s * 0.9, s * 1.2, s * 1.8, s * 0.35); ctx.fillStyle = "#ffe08a"; ctx.fill(); outline(2); ctx.stroke();
    face(kx, my, s * 0.3, 1);
    ctx.restore();
    if (kon > 0.5) {
      const t = (lt * 0.5) % 1;
      Anima.ion(kx - s * 0.25, lerp(my + H * 0.18, my - H * 0.2, t), ir, "Na", "#bfe3f5");
      Anima.ion(kx + s * 0.25, lerp(my - H * 0.2, my + H * 0.18, t), ir, "K", "#ffd6e5");
      Anima.bolt(kx + s * 0.8, my - s * 0.6, H * 0.02, 1, C.gold);
    }
    callout("grad", lt > 0.8 && lt < 4.8, W * 0.62, my - H * 0.2, n ? W * 0.66 : W * 0.62, Anima.topSafe() + fs * 0.2, "Na⁺ 总想往里冲");
    callout("ride", lt > 4.8 && lt < 8.6, tx + s * 0.6, my, n ? W * 0.64 : W * 0.6, my + H * 0.26, "递质和 Na⁺ 一起进门");
    callout("pump", lt > 9, kx, my + s * 0.9, n ? W * 0.62 : W * 0.72, n ? H * 0.76 : H * 0.9, "钠钾泵：把 Na⁺ 搬回去");
    say("ride", lt > 5.2 && lt < 8.6, tx, my - s * 1.2, n ? W * 0.16 : W * 0.2, my - H * 0.14, "搭个便车～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：囊泡转运体 ----------
  function vesView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff8ee", "#fff3f6", "#f3f0ff", 44);
    const fs = fsz(0.028), cs = H * 0.032, pr = H * 0.018;
    const V = { x: W * (n ? 0.4 : 0.4), y: H * 0.58, r: H * 0.27 };
    // 囊泡：里面偏酸（粉一点）
    ctx.beginPath(); ctx.arc(V.x, V.y, V.r, 0, Math.PI * 2); ctx.fillStyle = "#ffeef2"; ctx.fill();
    ctx.lineWidth = H * 0.018; ctx.strokeStyle = C.mem; ctx.stroke(); outline(1.6);
    ctx.beginPath(); ctx.arc(V.x, V.y, V.r + H * 0.009, 0, Math.PI * 2); ctx.stroke(); ctx.beginPath(); ctx.arc(V.x, V.y, V.r - H * 0.009, 0, Math.PI * 2); ctx.stroke();
    // 已经装进来的单胺
    const nIn = 2 + Math.floor(clamp(lt - 5, 0, 8) / 2.2);
    for (let k = 0; k < nIn; k++) {
      const q = k * 2.1 + 0.5, rr = V.r * (0.35 + (k % 2) * 0.2);
      chara(V.x + Math.cos(q) * rr, V.y + Math.sin(q) * rr * 0.6 + cs * 1.3, cs * 0.8, { who: k % 2 ? "5HT" : "DA", eyes: "happy", shadow: false });
    }
    // 质子泵（左）
    const L = { x: V.x - V.r, y: V.y };
    rrect(L.x - H * 0.04, L.y - H * 0.06, H * 0.08, H * 0.12, H * 0.02); ctx.fillStyle = "#ffe08a"; ctx.fill(); outline(2); ctx.stroke();
    face(L.x, L.y, H * 0.02, 1);
    Anima.bolt(L.x - H * 0.07, L.y - H * 0.08, H * 0.018, 0.6 + 0.4 * Math.sin(time * 6), C.gold);
    for (let k = 0; k < 3; k++) {
      const t = (lt * 0.4 + k / 3) % 1;
      proton(lerp(L.x - H * 0.12, L.x + V.r * 0.5, t), L.y + (k - 1) * H * 0.05 + Math.sin(t * 6) * H * 0.01, pr);
    }
    for (let k = 0; k < 6; k++) proton(V.x + Math.cos(k * 1.3) * V.r * 0.7, V.y + Math.sin(k * 1.3) * V.r * 0.7, pr);
    // VMAT2（右）：H⁺ 出去，单胺进来
    const R = { x: V.x + V.r * Math.cos(-0.5), y: V.y + V.r * Math.sin(-0.5) };
    ctx.save(); ctx.translate(R.x, R.y); ctx.rotate(-0.5 + Math.PI / 2);
    Anima.transporter(0, 0, H * 0.05, C.vmat, time * 2, false);
    ctx.restore();
    const on = prog(4.6, 0.6);
    if (on > 0) {
      const t = ((lt - 4.6) * 0.4) % 1;
      const ox = R.x + H * 0.2, oy = R.y - H * 0.12;
      ctx.save(); ctx.globalAlpha *= Math.min(1, Math.sin(t * Math.PI) * 3);
      chara(lerp(ox, R.x - H * 0.04, t), lerp(oy, R.y + H * 0.02, t) + cs * 1.4, cs, { who: "DA", eyes: "happy", arms: "up", shadow: false, walk: time * 8 });
      proton(lerp(R.x - H * 0.03, ox, t), lerp(R.y + H * 0.05, oy + H * 0.14, t), pr);
      ctx.restore();
    }
    // VAChT：另一只小囊泡
    const A = n ? { x: W * 0.84, y: H * 0.8, r: H * 0.1 } : { x: W * 0.84, y: H * 0.6, r: H * 0.12 };
    const ap = prog(8.8, 1);
    ctx.save(); ctx.globalAlpha *= 0.25 + 0.75 * ap;
    ctx.beginPath(); ctx.arc(A.x, A.y, A.r, 0, Math.PI * 2); ctx.fillStyle = "#fff0f6"; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); ctx.translate(A.x - A.r * 0.7, A.y - A.r * 0.7); ctx.rotate(-Math.PI / 4 - Math.PI / 2);
    Anima.transporter(0, 0, H * 0.03, "#f7b8d2", time * 2, false);
    ctx.restore();
    chara(A.x + A.r * 0.1, A.y + A.r * 0.55, cs * 0.8, { who: "ACh", eyes: "happy", shadow: false });
    ctx.restore();
    if (ap > 0.5) {
      const t = (lt * 0.35) % 1;
      chara(lerp(A.x - A.r * 1.8, A.x - A.r * 0.8, t), lerp(A.y - A.r * 1.6, A.y - A.r * 0.6, t), cs * 0.8, { who: "ACh", alpha: Math.min(1, Math.sin(t * Math.PI) * 3), eyes: "happy", arms: "up", shadow: false });
    }
    text("囊泡里面", V.x, V.y - V.r * 0.72, fs * 0.9, C.soft);
    callout("hp", lt > 0.8 && lt < 4.8, L.x, L.y + H * 0.06, n ? W * 0.24 : W * 0.16, H * 0.92, "质子泵：把 H⁺ 打进囊泡");
    callout("vmat", lt > 5 && lt < 9, R.x + H * 0.03, R.y, n ? W * 0.72 : W * 0.72, H * 0.24, "VMAT2：H⁺ 出去，单胺进来");
    callout("vacht", lt > 9.2, A.x - A.r * 0.7, A.y - A.r * 0.7, n ? W * 0.7 : W * 0.8, n ? H * 0.52 : H * 0.86, "VAChT：装乙酰胆碱");
    say("swap", lt > 5.6 && lt < 9, R.x + H * 0.2, R.y - H * 0.16, n ? W * 0.8 : W * 0.86, R.y + H * 0.04, "换我进去！", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：药物堵门 ----------
  const PH = [
    { t: 0.6, name: "SSRI", block: [1, 0, 0], col: "#9fe0c8" },
    { t: 4.8, name: "SNRI", block: [1, 1, 0], col: "#ffb3bd" },
    { t: 9, name: "NDRI", block: [0, 1, 1], col: "#ffc98a" },
  ];
  function phase() { let p = -1; PH.forEach((q, i) => { if (lt >= q.t) p = i; }); return p; }
  function drugView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#f6f9ff", "#fff7ef", "#fdf0f5", 58);
    const fs = fsz(0.028), my = H * 0.6, th = H * 0.07, s = H * 0.05, cs = H * 0.03;
    ctx.fillStyle = "#fff3e6"; ctx.fillRect(0, my, W, H);
    band(my, th, 0, W, C.mem);
    text("突触间隙", W * 0.03, Anima.topSafe() + fs, fs * 0.9, C.soft, "left");
    const doors = [["SERT", "5HT"], ["NET", "NE"], ["DAT", "DA"]];
    const p = phase(), P = PH[Math.max(0, p)];
    doors.forEach((d, i) => {
      const x = W * (0.2 + i * 0.3), blk = p >= 0 && P.block[i] ? prog(P.t + 0.8 + i * 0.1, 0.4) : 0;
      Anima.transporter(x, my, s, C.pumpC, blk > 0.5 ? 0 : time * 2, blk > 0.5);
      plate(d[0], x, my + H * 0.14, fs, "#fff");
      // 递质：没被堵就回家，被堵了就在间隙里越聚越多
      const m = blk > 0.5 ? 4 : 2;
      for (let k = 0; k < m; k++) {
        if (blk > 0.5) {
          const q = k * 1.6 + i;
          chara(x + Math.cos(time * 0.8 + q) * W * 0.07, my - H * 0.12 - (k % 2) * H * 0.09, cs, { who: d[1], eyes: "sparkle", arms: "up", jump: Math.abs(Math.sin(time * 4 + q)) * 0.3, shadow: false });
        } else {
          const t = (time * 0.25 + k / 2 + i * 0.2) % 1;
          const y = t < 0.6 ? lerp(my - H * 0.28, my - s, t / 0.6) : lerp(my, my + H * 0.3, (t - 0.6) / 0.4);
          chara(x - s * 0.2 + Math.sin(t * 5) * s * 0.3, y, cs, { who: d[1], alpha: Math.min(1, Math.sin(t * Math.PI) * 3) * (t > 0.55 && t < 0.7 ? 0.3 : 1), walk: time * 8, eyes: "happy", shadow: false });
        }
      }
      // 药物访客坐在门上
      if (blk > 0) chara(x + s * 1.3, my - s * 1.4, cs, { who: "drug", label: "", hatColor: P.col, tag: P.name, alpha: blk, arms: "up", eyes: "happy", shadow: false });
    });
    callout("p0", lt > 1.8 && lt < 4.6, W * 0.2, my - s, n ? W * 0.3 : W * 0.3, H * 0.3, "SSRI：只堵 SERT");
    callout("p1", lt > 6 && lt < 8.8, W * 0.35, my - s, n ? W * 0.5 : W * 0.45, H * 0.3, "SNRI：堵 SERT + NET");
    callout("p2", lt > 10.2, W * 0.65, my - s, n ? W * 0.5 : W * 0.6, H * 0.3, "NDRI、哌甲酯：堵 NET + DAT");
    say("more", lt > 2.6 && lt < 4.6, W * 0.2, my - H * 0.3, n ? W * 0.62 : W * 0.6, H * 0.34, "回不去，就多送几次信！", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 4) v2 = PH[Math.max(0, phase())].name + (phase() === 2 ? " 等" : "");
    if (cur === 5 && lt < 3) v2 = "照常";
    pill(14, 12, c.pill[0], v1, "#4d7fb8", false);
    pill(W - 14, 12, c.pill2[0], v2, "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) termView(S.v0);
    if (S.v1 > 0.02) famView(S.v1);
    if (S.v2 > 0.02) naView(S.v2);
    if (S.v3 > 0.02) vesView(S.v3);
    if (S.v4 > 0.02) drugView(S.v4);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#4d7fb8",
    titleCard: { lines: ["回收门的", "两大家族"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
