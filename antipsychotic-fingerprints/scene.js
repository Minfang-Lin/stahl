Anima.register("antipsychotic-fingerprints", {
    "title": "抗精神病药的受体指纹",
    "tag": "抗精神病药",
    "headline": "每种抗精神病药，都有自己的【受体指纹】",
    "lede": "抗精神病药不只抓 D2 一扇门，它们抓 5-HT2A、5-HT1A、H1、M1、α1 等门的力气各不相同。把这些“握力”排成一排，就像一枚指纹。按 Stahl 的办法把药分成几家来读，就能大致猜出一种药的性格。",
    "summary": "结合亲和力决定药量升高时先占哪扇门；“平”类 5-HT2A 强于 D2、常带 H1/M1；“酮”类 D2 和 5-HT2A 都强，鲁拉西酮挡 5-HT7、齐拉西酮有 SNRI 样作用；“哌唑/拉嗪”类是部分激动剂；5-HT1A 部分激动可能减少动作副作用；看指纹猜副作用，换药就是换指纹。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 各药物的药理特点",
    "footer": "图中指纹是按受体结合特点画的示意，不是精确数值。选药、换药请遵医嘱，不要自行停药或换药。",
    "canvasLabel": "药物访客用粗细不同的绳子抓住一排受体门，以及几家抗精神病药的受体指纹条形图动画",
    "regions": ["striatum"],
    "parts": ["psychosis"],
    "cast": ["drug", "DA", "5HT", "GABA"],
    "color": "#b8a6ef"
  }, () => {
  const CH = [
    { title: "握力：结合亲和力", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["握力", "亲和力"], pill2: ["药量升高", "先占强的"],
      text: "每种抗精神病药都不止抓一扇门，而且抓每扇门的力气不一样，这种力气叫结合亲和力。亲和力越强，只要一点点药，那扇门就被占住；亲和力弱的门，要药量高得多才轮得到。把一种药对各扇门的握力排成一排，就像这种药独有的指纹。",
      fact: "亲和力越强，占住这种受体所需的药物浓度越低" },
    { title: "“平”家族：5-HT2A 抓得更紧", v0: 0, v1: 1, v2: 0, v3: 0,
      pill: ["家族", "“平”类"], pill2: ["特点", "2A > D2"],
      text: "先看名字里带“平”的一家：氯氮平、奥氮平、喹硫平、阿塞那平。它们的指纹有个共同点：抓 5-HT2A 比抓 D2 更紧。不少成员还紧紧抓着组胺 H1，氯氮平和奥氮平还抓着乙酰胆碱 M1。H1 被挡住，人就容易犯困、胃口变大，所以这一家比较常见嗜睡和体重增加。",
      fact: "“平”类：5-HT2A 强于 D2，常伴 H1 阻断（嗜睡、体重增加）" },
    { title: "“酮”家族：D2 和 5-HT2A 都抓紧", v0: 0, v1: 1, v2: 0, v3: 0,
      pill: ["家族", "“酮”类"], pill2: ["特点", "D2 2A 都强"],
      text: "再看“酮”这一家：利培酮、帕利哌酮、鲁拉西酮、齐拉西酮。它们把 D2 和 5-HT2A 都抓得很紧，对 M1 几乎不碰。家里各有特长：鲁拉西酮还紧紧挡住 5-HT7；齐拉西酮还能轻轻堵一下 5-HT 和去甲肾上腺素的回收门，有点像抗抑郁药。D2 抓得牢，也要留意动作副作用和泌乳素升高。",
      fact: "“酮”类：D2 和 5-HT2A 都强；鲁拉西酮挡 5-HT7，齐拉西酮有 SNRI 样作用" },
    { title: "“哌唑/拉嗪”家族：只推开一点", v0: 0, v1: 1, v2: 0, v3: 0,
      pill: ["家族", "部分激动"], pill2: ["D2", "推开一点"],
      text: "第三家名字里带“哌唑”或“拉嗪”：阿立哌唑、依匹哌唑、卡利拉嗪。它们把 D2 抓得很牢，却不是把门堵死，而是只推开一点点，叫部分激动，所以指纹里的 D2 画成半满的格子。依匹哌唑推得比阿立哌唑更轻，也更紧地抓着 5-HT2A；卡利拉嗪最爱 D3。这一家对 H1、M1 抓得不紧。",
      fact: "阿立哌唑、依匹哌唑、卡利拉嗪都是 D2 部分激动剂" },
    { title: "半按 5-HT1A 的好处", v0: 0, v1: 0, v2: 1, v3: 0,
      pill: ["5-HT1A", "半按"], pill2: ["纹状体", "DA 多一点"],
      text: "不少较新的药还半按着 5-HT1A 门，也就是部分激动。一种解释是：皮层神经元上的 5-HT1A 被按一下，神经元安静一点，经过一串接力，纹状体里多巴胺的刹车就松一些，放出的多巴胺多一点，和药物抢回一部分 D2，动作副作用可能少一些。5-HT1A 也可能帮助改善情绪和焦虑，这些还在研究中。",
      fact: "5-HT1A 部分激动可能增加纹状体多巴胺释放、减少锥体外系反应（假说）" },
    { title: "看指纹，猜性格", v0: 0, v1: 0, v2: 0, v3: 1,
      pill: ["指纹", "猜性格"], pill2: ["换药", "换指纹"],
      text: "把指纹读熟了，就能大致猜出一种药的性格：H1 抓得紧，容易犯困、长体重；M1 抓得紧，容易口干、便秘；α1 抓得紧，起身时容易头晕；D2 抓得太牢，要留意动作副作用和泌乳素。换一种药，就是换一张指纹，所以换药后疗效和副作用有时会不一样。每个人反应不同，换不换药要由医生决定。",
      fact: "受体指纹可以帮助预测副作用倾向，但个体差异很大" },
  ];

  const C = Object.assign({}, Anima.C, { card: "#fffdfb" });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  // 受体：名字、短名、颜色
  const RC = { D2: ["D2", "D2", "#ff9a52"], A2: ["5-HT2A", "2A", "#62c9ab"], A1: ["5-HT1A", "1A", "#8fb8e0"], H1: ["H1", "H1", "#b98ad8"], M1: ["M1", "M1", "#f29cc0"], a1: ["α1", "α1", "#e7a23a"],
    D3: ["D3", "D3", "#ffb36b"], T7: ["5-HT7", "7", "#3fa88c"], RU: ["回收门", "回收", "#9fc3ea"] };
  const BASE = ["D2", "A2", "A1", "H1", "M1", "a1"];
  // 指纹（0～1，示意；见核对清单）
  const FAM = {
    1: { name: "“平”家族", hi: ["A2", "H1", "M1"], drugs: [
      ["氯氮平", [0.35, 0.8, 0.35, 0.85, 0.8, 0.8]], ["奥氮平", [0.6, 0.85, 0.1, 0.9, 0.65, 0.5]],
      ["喹硫平", [0.25, 0.45, 0.3, 0.85, 0.35, 0.6]], ["阿塞那平", [0.75, 0.95, 0.5, 0.7, 0.05, 0.7]]] },
    2: { name: "“酮”家族", hi: ["D2", "A2", "T7", "RU"], drugs: [
      ["利培酮", [0.8, 0.95, 0.2, 0.5, 0.02, 0.75]], ["帕利哌酮", [0.8, 0.9, 0.2, 0.5, 0.02, 0.7]],
      ["鲁拉西酮", [0.85, 0.85, 0.6, 0.05, 0.02, 0.45], "T7", 0.95], ["齐拉西酮", [0.8, 0.95, 0.6, 0.5, 0.02, 0.6], "RU", 0.45]] },
    3: { name: "“哌唑/拉嗪”家族", hi: ["D2", "D3", "A1"], part: true, drugs: [
      ["阿立哌唑", [0.95, 0.6, 0.75, 0.45, 0.02, 0.5]], ["依匹哌唑", [0.95, 0.85, 0.9, 0.5, 0.02, 0.8]],
      ["卡利拉嗪", [0.9, 0.5, 0.6, 0.5, 0.02, 0.35], "D3", 1]] },
  };

  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return w;
  }
  function card(x, y, w, h, title, col) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    rrect(x, y, w, h, 14); ctx.fillStyle = C.card; ctx.fill(); ctx.restore();
    outline(1.8); rrect(x, y, w, h, 14); ctx.stroke();
    if (title) plate(title, x + w / 2, y, col || "#ece6fb", fz(0.024));
  }
  // 一枚指纹：一排竖条。keys 受体，vals 高低，part 时 D2 画成半满的斜纹
  function prints(x, y, w, h, keys, vals, grow, hi, part, lab) {
    const n = keys.length, cw = w / n, bw = cw * 0.62, fs = fz(Anima.narrow ? 0.02 : 0.022), base = y + h - fs * 1.3;
    const top = y + fs * 0.4, bh = base - top;
    ctx.strokeStyle = "rgba(109,87,96,0.25)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, base); ctx.lineTo(x + w, base); ctx.stroke();
    const out = {};
    keys.forEach((k, i) => {
      const cx = x + cw * (i + 0.5), v = vals[i] * grow, bx = cx - bw / 2, hh = Math.max(2, bh * v), on = hi && hi.indexOf(k) >= 0;
      if (on) glow(cx, base - hh / 2, bw * 1.6, "#fff1b8", 0.8);
      rrect(bx, base - hh, bw, hh, Math.min(bw * 0.3, 5)); ctx.fillStyle = RC[k][2]; ctx.fill(); outline(on ? 2 : 1.2); ctx.stroke();
      if (part && k === "D2" && hh > 6) {
        ctx.save(); rrect(bx, base - hh, bw, hh, Math.min(bw * 0.3, 5)); ctx.clip();
        ctx.fillStyle = "#fff"; ctx.fillRect(bx, base - hh, bw, hh * 0.5);
        ctx.strokeStyle = RC.D2[2]; ctx.lineWidth = 2;
        for (let q = -hh; q < bw + hh; q += 6) { ctx.beginPath(); ctx.moveTo(bx + q, base - hh); ctx.lineTo(bx + q - hh * 0.5, base - hh * 0.5); ctx.stroke(); }
        ctx.restore(); outline(on ? 2 : 1.2); rrect(bx, base - hh, bw, hh, Math.min(bw * 0.3, 5)); ctx.stroke();
      }
      if (lab !== false) text(RC[k][1], cx, base + fs * 0.75, fs, C.ink);
      out[k] = { x: cx, y: base - hh };
    });
    return out;
  }

  // ---------- 第 1 幕：握力和药量 ----------
  function gripView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f3ff", "#fff1f4"); Anima.bokeh(6, "#ddd5fa", 0.7, 7); Anima.petals(8, 0.4, 8);
    const my = H * 0.72, rs = H * (nw ? 0.042 : 0.048), s = H * (nw ? 0.04 : 0.05);
    const g = ctx.createLinearGradient(0, my, 0, H); g.addColorStop(0, "#ffe3ec"); g.addColorStop(1, "#fff3f6");
    ctx.fillStyle = g; ctx.fillRect(0, my, W, H - my); outline(2); ctx.beginPath(); ctx.moveTo(0, my); ctx.lineTo(W, my); ctx.stroke();
    const aff = [0.8, 0.95, 0.3, 0.6, 0.15, 0.45];
    const X = BASE.map((k, i) => W * (0.1 + i * 0.16));
    const dx = W * 0.5, dy = H * 0.44;
    const conc = prog(2, 8);
    // 绳子：越粗握力越强
    X.forEach((x, i) => {
      const sy = my - rs * 1.62;
      ctx.strokeStyle = Anima.alpha(RC[BASE[i]][2], 0.85); ctx.lineWidth = 1.5 + aff[i] * H * 0.022; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(dx, dy - s * 1.4); ctx.quadraticCurveTo((dx + x) / 2, (dy + sy) / 2 - H * 0.08, x, sy); ctx.stroke();
    });
    X.forEach((x, i) => {
      const occ = clamp((conc - (1 - aff[i])) / 0.12, 0, 1);
      const r = Anima.receptor(x, my, rs, RC[BASE[i]][2], 0, { shape: "square" });
      if (occ > 0.02) chara(r.site.x, r.site.y + rs * 0.3, rs * 0.5 * occ + 1, { who: "drug", eyes: "happy", shadow: false, bob: 0, alpha: occ });
      plate(nw ? RC[BASE[i]][1] : RC[BASE[i]][0], x, my + H * 0.07, "#fff", fz(0.024));
      if (occ > 0.9) text("占", x, my + H * 0.15, fz(0.026), "#8f84e0");
    });
    chara(dx, dy, s, { who: "drug", label: "药", arms: "up", eyes: "happy", mouth: "grin", hatColor: "#b8a6ef" });
    // 药量条
    const mx = W * (nw ? 0.3 : 0.2), mY = Anima.topSafe() + H * 0.05, mw = W * (nw ? 0.4 : 0.26), mh = H * 0.028;
    text("药量", mx - fz(0.024) * 0.5, mY, fz(0.024), C.ink, "right");
    rrect(mx, mY - mh / 2, mw, mh, mh / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(mx, mY - mh / 2, Math.max(mh, mw * conc), mh, mh / 2); ctx.fillStyle = "#b8a6ef"; ctx.fill(); outline(1.3); ctx.stroke();
    callout("rope", win(0.8, 5), (dx + X[1]) / 2, (dy + my) / 2 - H * 0.1, W * (nw ? 0.72 : 0.78), H * (nw ? 0.28 : 0.24), "绳子越粗，握力越强");
    say("first", win(4, 9), X[1], my - rs * 1.8, X[1] + W * 0.06, H * 0.36, "我最先被占！", "say");
    callout("last", lt > 9, X[4], my - rs * 1.8, X[4] - W * 0.02, H * (nw ? 0.4 : 0.36), "握力弱：药量很高才轮到");
    ctx.restore();
  }

  // ---------- 第 2～4 幕：三个家族 ----------
  function famView(a) {
    const nw = Anima.narrow, F = FAM[cur] || FAM[cur > 3 ? 3 : 1];
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f3ff", "#fff4ee"); Anima.bokeh(6, "#ddd5fa", 0.6, 17);
    const top = Anima.topSafe() + H * (nw ? 0.05 : 0.04);
    const gx = nw ? W * 0.03 : W * 0.3, gw = nw ? W * 0.94 : W * 0.67, gy = top + (nw ? H * 0.01 : 0), gh = H * 0.83 - gy, cb = H * 0.89;
    const n = F.drugs.length, cols = 2, rows = Math.ceil(n / cols), gap = H * 0.05;
    const cw = (gw - gap) / cols, chh = (gh - gap * (rows - 1)) / rows;
    const grow = prog(0.5, 1.5), hiOn = lt > 3.5 ? F.hi : null;
    const spots = [];
    F.drugs.forEach((d, i) => {
      const cx = gx + (i % cols) * (cw + gap), cy = gy + Math.floor(i / cols) * (chh + gap) + (n === 3 && i === 2 ? 0 : 0);
      const x = n === 3 && i === 2 ? gx + (gw - cw) / 2 : cx;
      card(x, cy, cw, chh, d[0], "#ece6fb");
      const keys = d[2] ? BASE.concat([d[2]]) : BASE, vals = d[2] ? d[1].concat([d[3]]) : d[1];
      spots.push(prints(x + cw * 0.05, cy + chh * 0.14, cw * 0.9, chh * 0.82, keys, vals, grow, hiOn, F.part));
    });
    // 左侧（桌面）：家族招牌和一个会随指纹变化的小居民
    if (!nw) {
      const lx = W * 0.15;
      plate(F.name, lx, top + H * 0.02, "#fff1b8", fz(0.028));
      text("2A = 5-HT2A", lx, top + H * 0.09, fz(0.022), C.soft);
      text("1A = 5-HT1A", lx, top + H * 0.14, fz(0.022), C.soft);
      const px = lx, py = H * 0.8, ps = H * 0.055, k = prog(4, 1.5);
      if (cur === 1) {
        chara(px, py, ps, { who: "neuron", eyes: k > 0.5 ? "sleepy" : "open", mouth: k > 0.5 ? "cat" : "smile", arms: k > 0.5 ? "hug" : "down" });
        if (k > 0.5) { emote("zzz", px + ps, py - ps * 3.2, ps * 0.6); plate("胃口↑", px + ps * 2.4, py - ps * 1.4, "#ffe6d6", fz(0.024)); }
      } else if (cur === 2) {
        const r = Anima.receptor(px - ps * 0.9, py, ps * 0.8, RC.D2[2], 0, { shape: "square" });
        const r2 = Anima.receptor(px + ps * 0.9, py, ps * 0.8, RC.A2[2], 0, { shape: "square" });
        chara(r.site.x, r.site.y + ps * 0.3, ps * 0.45 * k + 1, { who: "drug", alpha: k, shadow: false, bob: 0 });
        chara(r2.site.x, r2.site.y + ps * 0.3, ps * 0.45 * k + 1, { who: "drug", alpha: k, shadow: false, bob: 0 });
        text("D2", px - ps * 0.9, py + ps * 0.7, fz(0.022), C.ink); text("5-HT2A", px + ps * 0.9, py + ps * 0.7, fz(0.022), C.ink);
      } else {
        const op = 0.35 + 0.1 * Math.sin(time * 2);
        const r = Anima.receptor(px, py, ps, RC.D2[2], op * k, { shape: "square" });
        chara(r.site.x, r.site.y + ps * 0.4, ps * 0.55 * k + 1, { who: "drug", alpha: k, shadow: false, bob: 0, eyes: "happy" });
        text("D2：半开", px, py + ps * 0.8, fz(0.024), C.ink);
      }
    }
    // 标注
    if (cur === 1) {
      const o = spots[1];
      callout("pA2", win(3.5, 7.5), o.A2.x, o.A2.y, o.A2.x, cb, "2A 比 D2 高");
      callout("pH1", lt > 8.5, spots[2].H1.x, spots[2].H1.y, spots[2].H1.x, cb, "H1 很高：犯困、胃口大");
      say("sl", !nw && lt > 5.5, W * 0.15, H * 0.8 - H * 0.055 * 3.2, W * 0.15, H * 0.44, "好困……", "think");
    } else if (cur === 2) {
      const o2 = spots[2], o3 = spots[3];
      callout("p7", win(5.8, 9), o2.T7.x, o2.T7.y, o2.T7.x - W * 0.08, cb, "鲁拉西酮：还挡 5-HT7");
      callout("pRU", lt > 9.8, o3.RU.x, o3.RU.y, o3.RU.x - W * 0.1, cb, nw ? "齐拉西酮：轻堵回收门" : "齐拉西酮：轻轻堵 5-HT/NE 回收门");
      callout("pM1", win(1.8, 5), spots[2].M1.x, spots[2].M1.y, spots[2].M1.x, cb, "M1 几乎不碰");
    } else {
      const o = spots[2];
      callout("pD3", win(3.5, 8.5), o.D3.x, o.D3.y, o.D3.x + W * 0.04, cb, "卡利拉嗪：最爱 D3");
      callout("pPart", lt > 9.3, spots[2].D2.x, spots[2].D2.y + H * 0.02, spots[2].D2.x - W * 0.04, cb, "半满：部分激动");
      say("half", !nw && lt > 5.5, W * 0.15, H * 0.8 - H * 0.055 * 3, W * 0.15, H * 0.46, "门只开一条缝～", "say");
    }
    ctx.restore();
  }

  // ---------- 第 5 幕：5-HT1A 的接力 ----------
  function chainView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4fbf8", "#fdf0f4"); Anima.petals(8, 0.4, 33);
    const top = Anima.topSafe() + H * 0.05, bot = H * 0.82, pw = W * 0.29, gap = (W - pw * 3) / 4, s = H * (nw ? 0.038 : 0.058);
    const P = [0, 1, 2].map((i) => ({ x: gap + i * (pw + gap), y: top, w: pw, h: bot - top }));
    const T = ["皮层", "脑干", "纹状体"], col = ["#eef8f3", "#f0ecff", "#fff1e6"];
    P.forEach((p, i) => { card(p.x, p.y, p.w, p.h, T[i], col[i]); });
    const k1 = prog(1, 2), k2 = prog(4, 2), k3 = prog(7, 2);
    // 皮层：药物半按 5-HT1A，锥体神经元安静一点
    const ax = P[0].x + pw / 2, ay = top + (bot - top) * 0.78;
    const r = Anima.receptor(ax - pw * 0.22, ay, s * 0.9, RC.A1[2], 0.45 * k1, { shape: "tri" });
    chara(r.site.x, r.site.y + s * 0.45, s * 0.6, { who: "drug", eyes: "happy", shadow: false, bob: 0, alpha: Math.min(1, k1 * 3) });
    chara(ax + pw * 0.18, ay, s, { who: "neuron", hair: "#f6c02e", cloth: "#fff0b3", eyes: k1 > 0.5 ? "happy" : "angry", mouth: k1 > 0.5 ? "smile" : "open", arms: k1 > 0.5 ? "down" : "fist" });
    // 脑干：GABA 刹车员被叫得少了
    const bx = P[1].x + pw / 2, by2 = ay;
    chara(bx, by2, s, { who: "GABA", item: "shield", arms: k2 > 0.5 ? "down" : "hold", eyes: k2 > 0.5 ? "sleepy" : "open", mouth: "smile" });
    // 纹状体：多巴胺多放一点，抢回一些 D2
    const cx = P[2].x + pw / 2, cy = ay;
    const Rx = [cx - pw * 0.22, cx + pw * 0.22];
    Rx.forEach((x, i) => {
      const rr = Anima.receptor(x, cy, s * 0.8, RC.D2[2], i === 1 ? k3 : 0, { shape: "square" });
      if (i === 0) chara(rr.site.x, rr.site.y + s * 0.4, s * 0.5, { who: "drug", shadow: false, bob: 0, eyes: "happy" });
      else if (k3 > 0.02) chara(rr.site.x, lerp(top + H * 0.15, rr.site.y + s * 0.4, k3), s * 0.6, { who: "DA", shadow: false, bob: 0, eyes: "sparkle", alpha: k3 });
    });
    const nDA = 1 + Math.round(k3 * 3);
    for (let q = 0; q < 4; q++) {
      const u = (time * 0.3 + q / 4) % 1;
      if (q >= nDA) continue;
      chara(cx - pw * 0.3 + u * pw * 0.6, top + (bot - top) * 0.35 + Math.sin(u * 6 + q) * H * 0.02, s * 0.55, { who: "DA", walk: time * 9 + q, shadow: false, alpha: Math.min(1, u * 5, (1 - u) * 5) });
    }
    // 箭头和接力光点
    const ly = top + (bot - top) * 0.2;
    for (let i = 0; i < 2; i++) {
      const x1 = P[i].x + pw - gap * 0.2, x2 = P[i + 1].x + gap * 0.2;
      ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(P[i].x + pw * 0.8, ly); ctx.lineTo(P[i + 1].x + pw * 0.2, ly); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(P[i + 1].x + pw * 0.2 - H * 0.02, ly - H * 0.015); ctx.lineTo(P[i + 1].x + pw * 0.2, ly); ctx.lineTo(P[i + 1].x + pw * 0.2 - H * 0.02, ly + H * 0.015); ctx.stroke();
      const sp = i === 0 ? 1.2 - k1 * 0.7 : 1.2 - k2 * 0.7;
      Anima.spark([[P[i].x + pw * 0.8, ly], [P[i + 1].x + pw * 0.2, ly]], (time * sp * 0.6 + i * 0.3) % 1, H * 0.016, i === 0 ? "#f6c02e" : "#8f86e2");
    }
    const fs = fz(nw ? 0.022 : 0.024), ty = bot + H * 0.07;
    const cap = nw ? ["安静一点", "刹车松一点", "DA 多一点"] : ["神经元安静一点", "刹车松一点", "多巴胺多一点"];
    P.forEach((p, i) => { const k = [k1, k2, k3][i]; ctx.save(); ctx.globalAlpha *= 0.3 + 0.7 * k; text(cap[i], p.x + pw / 2, ty, fs, C.ink); ctx.restore(); });
    callout("a1", win(1.5, 6), r.site.x, r.site.y, P[0].x + pw * 0.5, top + (bot - top) * 0.4, nw ? "半按 1A" : "药物半按 5-HT1A");
    callout("d2b", lt > 8, Rx[1], cy - s * 1.6, P[2].x + pw * 0.45, top + (bot - top) * (nw ? 0.56 : 0.5), nw ? "抢回 D2" : "抢回一部分 D2");
    say("calm", win(4, 9.5), bx, by2 - s * 3.2, bx, top + (bot - top) * (nw ? 0.36 : 0.42), nw ? "少按点刹车～" : "今天不用按那么紧～", "say");
    say("move", lt > 10, cx, cy - s * 2.5, P[1].x + pw * 0.5, top + (bot - top) * (nw ? 0.28 : 0.45), nw ? "动作更顺～" : "动作副作用可能少一些～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：看指纹猜性格，换药换指纹 ----------
  function predictView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f3ff", "#fff4ee"); Anima.bokeh(6, "#ddd5fa", 0.6, 27); Anima.petals(8, 0.4, 28);
    const top = Anima.topSafe() + H * 0.04, cw = W * (nw ? 0.44 : 0.4), chh = H * (nw ? 0.3 : 0.36);
    const A = { x: W * (nw ? 0.04 : 0.06), y: top }, B = { x: W * (nw ? 0.52 : 0.54), y: top };
    card(A.x, A.y, cw, chh, "指纹 A", "#ece6fb"); card(B.x, B.y, cw, chh, "指纹 B", "#fff1b8");
    const va = [0.45, 0.8, 0.2, 0.9, 0.8, 0.75], vb = [0.9, 0.9, 0.5, 0.15, 0.02, 0.3];
    const g = prog(0.3, 1.2);
    const hiA = lt > 2 && lt < 8 ? ["H1", "M1", "a1"] : null, hiB = lt > 8 ? ["D2"] : null;
    const oa = prints(A.x + cw * 0.05, A.y + chh * 0.14, cw * 0.9, chh * 0.8, BASE, va, g, hiA);
    const ob = prints(B.x + cw * 0.05, B.y + chh * 0.14, cw * 0.9, chh * 0.8, BASE, vb, g, hiB);
    // 预测的性格小牌
    const tagsA = nw ? ["犯困", "体重", "口干", "头晕"] : ["犯困", "长体重", "口干便秘", "起身头晕"], tagsB = nw ? ["动作", "泌乳素"] : ["动作副作用", "泌乳素↑"];
    const ry = top + chh + H * 0.08, fs = fz(nw ? 0.022 : 0.024);
    const per = nw ? 2 : 4;
    const row = (arr, x0, w, t0, bg) => { arr.forEach((t, i) => { const k = prog(t0 + i * 0.5, 0.6); if (k < 0.02) return; const c = i % per, r = Math.floor(i / per), nn = Math.min(per, arr.length); ctx.save(); ctx.globalAlpha *= k; plate(t, x0 + w * (c + 0.5) / nn, ry + r * H * 0.075, bg, fs); ctx.restore(); }); };
    row(tagsA, A.x, cw, 2.5, "#f0e6ff"); row(tagsB, B.x, cw, 8.5, "#fff3d0");
    // 换药箭头
    const k = prog(6, 1.5), ax1 = A.x + cw + W * 0.01, ax2 = B.x - W * 0.01, ay = top + chh * 0.5;
    if (k > 0.02) {
      ctx.save(); ctx.globalAlpha *= k; ctx.strokeStyle = "#8f84e0"; ctx.lineWidth = Math.max(2.5, H * 0.008); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(ax1, ay); ctx.lineTo(lerp(ax1, ax2, k), ay); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ax2 - H * 0.02, ay - H * 0.02); ctx.lineTo(ax2, ay); ctx.lineTo(ax2 - H * 0.02, ay + H * 0.02); ctx.stroke();
      ctx.restore();
    }
    // 小居民：先在 A 下面犯困，换药后走到 B 下面
    const ps = H * (nw ? 0.04 : 0.05), m = prog(6.5, 2.5), px = lerp(A.x + cw * 0.5, B.x + cw * 0.5, m), py = H * 0.95;
    chara(px, py, ps, { who: "neuron", walk: m > 0 && m < 1 ? time * 9 : null, eyes: m < 0.5 ? (lt > 3 ? "sleepy" : "open") : "happy", mouth: m < 0.5 ? "cat" : "smile", arms: m >= 1 ? "wave" : "down" });
    if (m < 0.5 && lt > 3) emote("zzz", px + ps, py - ps * 3.2, ps * 0.6);
    callout("hH1", win(2.5, 6.5), oa.H1.x, oa.H1.y, oa.H1.x, nw ? H * 0.68 : ry + H * 0.1, nw ? "H1 高" : "H1、M1、α1 都高");
    say("sw", nw ? win(7, 9.5) : win(6, 10.5), (ax1 + ax2) / 2, ay, W * 0.5, nw ? H * 0.765 : top + chh + H * 0.18, nw ? "换药 = 换指纹" : "换一种药，就是换一张指纹", "box");
    say("awake", lt > 10, px, py - ps * 3.2, px - W * 0.2, py - ps * 2, nw ? "不那么困了～" : "不那么困了，可别的要留意～", "say");
    callout("hD2", nw ? lt > 9.5 : lt > 9, ob.D2.x, ob.D2.y, ob.D2.x + W * 0.04, nw ? H * 0.68 : ry + H * 0.1, "D2 抓得很牢");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#8f84e0", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#e0662a", true);
  }
  function draw() {
    ctx.fillStyle = "#fbf8ff"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) gripView(S.v0);
    if (S.v1 > 0.02) famView(S.v1);
    if (S.v2 > 0.02) chainView(S.v2);
    if (S.v3 > 0.02) predictView(S.v3);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#b8a6ef",
    titleCard: { lines: ["抗精神病药的", "受体指纹"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
