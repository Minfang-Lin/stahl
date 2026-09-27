Anima.register("augmentation-trd", {
    "title": "一种药不够时：增效和难治性抑郁",
    "tag": "抗抑郁药",
    "headline": "一种药不够时，【下一步】怎么走？",
    "lede": "抗抑郁药只起了一部分作用，先别灰心。医生会先回头检查，再决定换药还是加一位“帮手”：帮手作用在不同的靶点上，去点亮还暗着的症状灯。难治的时候，还有艾司氯胺酮、电休克治疗和经颅磁刺激这些路。",
    "summary": "先查剂量、疗程、服药和诊断；换药还是加药；非典型抗精神病药、锂盐、T3、安非他酮、米氮平各自的增效思路；艾司氯胺酮、ECT、rTMS 的机制。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · 增效策略与难治性抑郁",
    "footer": "加药、换药、减药都要由医生决定，请不要自己调整。如果出现伤害自己的想法，请马上告诉身边的人，并尽快去医院。",
    "canvasLabel": "抑郁的症状灯只亮了一部分，医生检查、换药或加一位帮手药物，把暗着的灯一盏盏点亮的动画",
    "regions": ["pfc"],
    "parts": ["mood"],
    "cast": ["drug", "neuron", "DA", "NE", "5HT", "GABA", "Glu"],
    "color": "#f0a868"
  }, () => {
  const CH = [
    { title: "先回头检查一遍", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["先查", "剂量·疗程"], pill2: ["再查", "诊断·服药"],
      text: "吃了抗抑郁药，心情只好了一点点，甚至没什么变化，先别急着加药。医生通常会先回头检查：剂量够不够，时间够不够，一般要足量用上几周才算数；有没有按时吃；诊断准不准，比如会不会其实是双相障碍，有没有同时存在焦虑、饮酒或甲状腺问题。很多“没效果”，查一查就找到了原因。",
      fact: "判断“没效果”之前，先确认足量、足疗程、按时服药和诊断" },
    { title: "换药，还是加药", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["几乎无效", "换药"], pill2: ["部分有效", "加药"],
      text: "检查过后，常见两条路。如果几乎没有效果，或者副作用受不了，可以换一种作用方式不同的药，就像请走一位访客，换一位拿着不同钥匙的。如果已经有一部分效果，只是还不够，可以留着它，再请一位帮手，这叫增效。增效的思路是：帮手作用在不同的靶点上，去点亮还暗着的那几盏症状灯。",
      fact: "增效：在原来的抗抑郁药上，加一种作用于不同靶点的药" },
    { title: "帮手一：非典型抗精神病药", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["增效", "非典型药"], pill2: ["靶点", "2A/2C·D2"],
      text: "常用的帮手之一是一些非典型抗精神病药，比如阿立哌唑、依匹哌唑、喹硫平。它们大多挡住 5-HT2A、5-HT2C，松开压在多巴胺和去甲肾上腺素身上的刹车；阿立哌唑、依匹哌唑还在 D2、D3 和 5-HT1A 上只按一半，像调光开关；喹硫平在体内的代谢产物还能堵 NE 回收门。也要留意坐立不安、犯困、体重增加等副作用。",
      fact: "非典型抗精神病药增效：5-HT2A/2C 拮抗，加上 D2/D3、5-HT1A 部分激动等" },
    { title: "更多的帮手", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["帮手", "各有门路"], pill2: ["机制", "部分未明"],
      text: "别的帮手各有门路。锂盐作用在细胞内部的信号通路上，具体怎样增效还没完全弄清，但有证据显示它能降低自杀风险。甲状腺激素 T3 可能帮神经元把“转速”提上来，机制也不完全清楚。安非他酮堵住多巴胺和去甲肾上腺素的回收门，帮精力和兴趣回来。米氮平松开 α2 刹车，让 NE 和 5-HT 多放，还能帮助睡眠。",
      fact: "锂盐、T3、安非他酮、米氮平都可用于增效，作用靶点各不相同" },
    { title: "难治时的其他路", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["难治性", "≥2 种不够"], pill2: ["其他路", "三条"],
      text: "如果试过两种以上的抗抑郁药，剂量和时间都够了，效果还是不理想，常被称为难治性抑郁。这时还有别的路：艾司氯胺酮鼻喷雾剂走“快车道”，挡住 NMDA 受体，引发谷氨酸爆发和新突触生长；电休克治疗（ECT）在麻醉下用短暂电流引发一次受控的脑电发作，安全、有效；经颅磁刺激（rTMS）用磁场从头皮外唤醒左侧前额叶。",
      fact: "难治性抑郁常指至少两种足量足疗程的抗抑郁药效果不佳" },
    { title: "一步一步，一起试", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["每一步", "看几周"], pill2: ["加减药", "听医生"],
      text: "难治不等于治不好。治疗像爬楼梯：每一步都要给药几周时间，再看效果决定下一步，医生会根据你的症状、副作用和身体情况来安排。请不要自己加药、减药或突然停药，也不要因为一次没效果就放弃。心理治疗、规律作息同样重要。如果出现伤害自己的想法，请马上告诉身边的人，尽快去医院。",
      fact: "难治不等于治不好：和医生一起，一步一步调整" },
  ];

  const C = Object.assign({}, Anima.C, { aug: "#f0a868", augD: "#d9772f" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sparkle, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const DRUG_A = { who: "drug", label: "", hatColor: "#9fd8c8", hatColor2: "#ffffff" };
  const DRUG_B = { who: "drug", label: "", hatColor: "#ffb08a", hatColor2: "#fff3ea" };
  const AUG = { who: "drug", label: "", hatColor: "#c3a6ec", hatColor2: "#f6f0ff" };
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
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
  }
  function cardTitle(x, y, w, title, color) { plate(title, x + w / 2, y, color, fz(0.03), x + 2, x + w - 2); }
  function bg(top, bot, seed) {
    Anima.wash(top, bot);
    Anima.bokeh(6, "#ffe0c4", 0.6, seed);
    Anima.petals(6, 0.35, seed + 3);
  }
  function bulb(x, y, r, on) {
    if (on > 0.05) glow(x, y, r * 2.4, C.gold, on);
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
    g.addColorStop(0, "#ffffff"); g.addColorStop(1, mix("#d9d3d6", "#ffd84d", on));
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(x - r * 0.45, y + r * 0.85, r * 0.9, r * 0.45, r * 0.12); ctx.fillStyle = "#e9e1e6"; ctx.fill(); outline(1.2); ctx.stroke();
    if (on > 0.6) sparkles(x, y, r * 1.5, 3, on - 0.4, Math.round(x));
  }
  // 症状灯面板：lit 是四盏灯的亮度（心情、兴趣、睡眠、精力）
  function lamps(x, y, w, h, lit, title) {
    rrect(x, y, w, h, 16); ctx.fillStyle = "rgba(255,253,248,0.95)"; ctx.fill(); outline(1.8); ctx.stroke();
    const names = ["心情", "兴趣", "睡眠", "精力"], two = Anima.narrow || w < h * 1.6;
    const r = Math.min(two ? w * 0.12 : w * 0.07, h * (two ? 0.1 : 0.17));
    const fs = fz(0.022), pos = [];
    names.forEach((n, i) => {
      const cx = two ? x + w * (i % 2 ? 0.72 : 0.28) : x + w * (0.14 + i * 0.24);
      const cy = two ? y + h * (i < 2 ? 0.3 : 0.7) - fs * 0.4 : y + h * 0.42 - fs * 0.2;
      bulb(cx, cy - r * 0.2, r, lit[i]);
      text(n, cx, cy + r * 1.75, fs, C.ink);
      pos.push([cx, cy]);
    });
    if (title) plate(title, x + w / 2, y, "#fff1d6", fz(0.024), x + 2, x + w - 2);
    return pos;
  }
  function pedal(x, y, r, press) {
    ctx.save(); ctx.translate(x, y);
    rrect(-r * 0.9, r * 0.55, r * 1.8, r * 0.35, r * 0.15); ctx.fillStyle = "#e9e1e6"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.rotate(-0.55 + press * 0.45);
    rrect(-r * 0.55, -r * 0.95, r * 1.1, r * 1.5, r * 0.3); ctx.fillStyle = "#ff8f9f"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.rotate(0.55 - press * 0.45);
    text("刹", 0, -r * 0.15, r * 0.8, "#fff");
    ctx.restore();
  }
  function walkTo(opt, x0, y0, x1, y1, p, extra) {
    if (p <= 0) return;
    chara(lerp(x0, x1, p), lerp(y0, y1, p), extra && extra.s ? extra.s : H * 0.04, Object.assign({}, opt, { walk: p < 1 ? time * 9 : null, dir: x1 < x0 ? -1 : 1 }, extra || {}));
  }

  // ---------- 第 1 幕：先检查 ----------
  function checkView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fff8f0", "#f7f3fd", 11);
    const top = Anima.topSafe() + H * 0.05;
    const L = { x: W * 0.04, y: top + H * 0.03, w: W * 0.42, h: H * (nw ? 0.36 : 0.3) };
    const lp = lamps(L.x, L.y, L.w, L.h, [0.15, 0, 0.7 + 0.1 * Math.sin(time * 3), 0.1], "症状灯");
    const s = H * 0.05;
    chara(W * 0.18, H * 0.93, s, { who: "neuron", eyes: lt > 10 ? "happy" : "open", mouth: lt > 10 ? "smile" : "flat", brow: lt > 10 ? null : "worry", arms: "down" });
    walkTo(DRUG_A, W * 0.3, H * 0.93, W * 0.3, H * 0.93, 1, { s: s * 0.8, arms: "down", eyes: "happy", tag: nw ? "原来的药" : "原来的抗抑郁药", shadow: false });
    // 右边的检查单
    const B = { x: W * 0.54, y: top + H * 0.02, w: W * 0.42, h: H * (nw ? 0.5 : 0.66) };
    rrect(B.x, B.y, B.w, B.h, 14); ctx.fillStyle = "#fffdf6"; ctx.fill(); outline(2); ctx.stroke();
    rrect(B.x + B.w * 0.35, B.y - H * 0.02, B.w * 0.3, H * 0.045, 8); ctx.fillStyle = "#e9d7c7"; ctx.fill(); outline(1.5); ctx.stroke();
    const items = nw ? ["剂量够吗", "时间够吗（几周）", "按时吃了吗", "诊断对吗"] : ["剂量够了吗", "用够几周了吗", "有没有按时吃", "诊断对吗：双相？共病？"];
    const fs = fz(nw ? 0.026 : 0.032);
    items.forEach((t, i) => {
      const y = B.y + B.h * (0.2 + i * 0.2), bx = B.x + B.w * 0.1, p = prog(1.8 + i * 1.9, 0.6);
      rrect(bx - fs * 0.5, y - fs * 0.5, fs, fs, 4); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      if (p > 0) {
        ctx.save(); ctx.globalAlpha *= p; ctx.strokeStyle = C.good; ctx.lineWidth = Math.max(2, fs * 0.18); ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(bx - fs * 0.35, y); ctx.lineTo(bx - fs * 0.05, y + fs * 0.3); ctx.lineTo(bx + fs * 0.5, y - fs * 0.45); ctx.stroke(); ctx.restore();
      }
      text(t, bx + fs * 1.0, y + 1, fs, C.ink, "left");
    });
    const done = prog(9.6, 0.8);
    if (done > 0) { ctx.save(); ctx.globalAlpha *= done; plate("下一步 →", B.x + B.w * 0.5, B.y + B.h * 0.94, "#dff5ec", fz(0.028)); ctx.restore(); }
    const dx = W * 0.47, dy = H * 0.93;
    chara(dx, dy, s * 0.95, Object.assign({}, DOC, { arms: lt > 9.6 ? "wave" : "hold", item: lt > 9.6 ? null : "book", eyes: "happy", dir: 1, tag: "医生" }));
    callout("a0-lamp", lt > 0.8 && lt < 5.5, lp[2][0], lp[2][1], L.x + L.w * 0.5, L.y + L.h + H * 0.1, nw ? "只亮了一盏" : "只亮了一盏，还有好几盏暗着");
    say("a0-s", lt > 6 && lt < 9.5, W * 0.18, H * 0.93 - s * 3.2, nw ? W * 0.8 : W * 0.24, nw ? H * 0.86 : H * 0.52, "吃了几周，还是提不起劲……", "think");
    say("a0-d", lt > 10, dx, dy - s * 3.1, nw ? W * 0.8 : W * 0.3, nw ? H * 0.86 : H * 0.52, "查清楚，再走下一步～", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：换药 vs 加药 ----------
  function forkView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fff8f0", "#f3fbf7", 21);
    const top = Anima.topSafe() + H * 0.05, ch = H - top - H * 0.04, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const Ls = [{ x: gap }, { x: gap * 2 + cw }];
    Ls.forEach((c) => card(c.x, top, cw, ch));
    // 左：换药
    const sw = prog(3, 1.6), sin = prog(4.4, 1.6);
    const litL = [lerp(0, 0.9, sin), lerp(0, 0.9, sin), lerp(0.25, 0.2, sin), lerp(0, 0.7, sin)];
    const lw = cw * 0.84, lh = H * (nw ? 0.3 : 0.26), ly = top + H * 0.07;
    lamps(Ls[0].x + (cw - lw) / 2, ly, lw, lh, litL);
    const gy = top + ch - H * 0.05, s = Math.min(H * 0.042, cw * 0.08);
    const ax = Ls[0].x + cw * 0.5;
    if (sw < 1) chara(lerp(ax, Ls[0].x + cw * 0.05, sw), gy, s, Object.assign({}, DRUG_A, { walk: sw > 0 ? time * 9 : null, dir: sw > 0 ? -1 : 1, eyes: "sleepy", mouth: "flat", alpha: 1 - sw, tag: "药 A" }));
    walkTo(DRUG_B, Ls[0].x + cw * 0.95, gy, ax, gy, sin, { s, eyes: "happy", arms: sin >= 1 ? "up" : "down", tag: "药 B" });
    if (!nw) plate("几乎无效或受不了副作用", Ls[0].x + cw / 2, ly + lh + H * 0.07, "#fff", fz(0.025), Ls[0].x, Ls[0].x + cw);
    // 右：加药（增效）
    const ad = prog(7, 1.6), glowB = prog(8.6, 1.4);
    const litR = [0.8, lerp(0.05, 0.9, glowB), 0.8, lerp(0.05, 0.9, glowB)];
    const lpR = lamps(Ls[1].x + (cw - lw) / 2, ly, lw, lh, litR);
    const bx = Ls[1].x + cw * 0.38;
    chara(bx, gy, s, Object.assign({}, DRUG_A, { eyes: "happy", arms: ad >= 1 ? "wave" : "down", tag: "药 A" }));
    walkTo(AUG, Ls[1].x + cw * 0.95, gy, Ls[1].x + cw * 0.66, gy, ad, { s, eyes: "happy", arms: ad >= 1 ? "up" : "down", tag: "帮手" });
    if (ad >= 1) { ctx.save(); ctx.globalAlpha *= glowB; Anima.heart(Ls[1].x + cw * 0.52, gy - s * 3.6, s * 0.5, C.rose); ctx.restore(); }
    if (!nw) plate("已经有一部分效果时", Ls[1].x + cw / 2, ly + lh + H * 0.07, "#fff", fz(0.025), Ls[1].x, Ls[1].x + cw);
    cardTitle(Ls[0].x, top, cw, nw ? "无效：换药" : "换药", "#ffe6d6");
    cardTitle(Ls[1].x, top, cw, nw ? "部分有效：加药" : "加一位帮手（增效）", "#efe6fb");
    callout("a1-b", lt > 5.6 && lt < 7.5, ax, gy - s * 3, Ls[0].x + cw * 0.5, top + ch * 0.62, "换一套钥匙");
    callout("a1-r", lt > 11, lpR[1][0], lpR[1][1], Ls[1].x + cw * 0.5, top + ch * 0.62, nw ? "暗着的灯亮了" : "点亮还暗着的灯");
    say("a1-s", lt > 8.4 && lt < 10.8, Ls[1].x + cw * 0.66, gy - s * 3.2, Ls[1].x + cw * (nw ? 0.5 : 0.72), top + ch * (nw ? 0.64 : 0.55), nw ? "我来帮忙～" : "我管另外几扇门～", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：非典型抗精神病药增效 ----------
  function atypView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fbf6ff", "#fff6ee", 31);
    const post = H * 0.66, s = H * (nw ? 0.04 : 0.046), cs = H * 0.032;
    ctx.fillStyle = alpha("#efeafd", 0.95); ctx.fillRect(0, post, W * 0.64, H - post);
    outline(1.6); ctx.beginPath(); ctx.moveTo(0, post); ctx.lineTo(W * 0.64, post); ctx.stroke();
    const D = [
      [nw ? "2A/2C" : "5-HT2A/2C", "挡住", "shh", "tri", 0.1, "#ffe3e6"],
      [nw ? "D2/D3" : "D2/D3", "按一半", "hold", "square", 0.32, "#fff1d6"],
      [nw ? "1A" : "5-HT1A", "按一半", "hold", "round", 0.54, "#fff1d6"],
    ];
    const arr = [prog(1, 1.4), prog(5, 1.4), prog(7.2, 1.4)];
    const R = D.map((d, i) => {
      const x = W * d[4], p = arr[i];
      const act = d[2] === "shh" ? 0.8 * (1 - p) : lerp(0.2, 0.55, p);
      return Anima.receptor(x, post, s, i ? "#ffe0b8" : "#cdf1e4", act, { shape: d[3] });
    });
    D.forEach((d, i) => {
      plate(d[0], W * d[4], post + H * 0.055, "#fff", fz(0.025));
      if (arr[i] > 0.6) { ctx.save(); ctx.globalAlpha *= (arr[i] - 0.6) / 0.4; plate(d[1], W * d[4], post + H * 0.13, d[5], fz(0.025)); ctx.restore(); }
    });
    // 5-HT2A/2C 上方：刹车压着 DA 和 NE
    const rel = prog(2.6, 1.4);
    const px = W * 0.07, py = H * 0.4;
    pedal(px, py - H * 0.02, H * 0.034, 1 - rel);
    [["DA", 0.15], ["NE", 0.23]].forEach((q, i) => {
      chara(W * q[1], H * 0.5, cs, { who: q[0], gray: (1 - rel) * 0.6, eyes: rel > 0.5 ? "sparkle" : "sleepy", arms: rel > 0.5 ? "up" : "down", jump: rel > 0.9 ? Math.abs(Math.sin(time * 5 + i)) * 0.2 : 0, shadow: false });
    });
    // 访客坐进三扇门
    D.forEach((d, i) => {
      const p = arr[i];
      if (p <= 0) return;
      const site = R[i].site, x = lerp(site.x + (i ? W * 0.1 : -W * 0.12), site.x, p), y = p < 1 ? lerp(post - H * 0.14, site.y + cs * 0.2, p) : site.y + cs * 0.2;
      chara(x, y, cs, Object.assign({}, AUG, { walk: p < 1 ? time * 9 : null, arms: p >= 1 ? d[2] : "down", eyes: "happy", shadow: false, tag: i === 0 && p >= 1 ? (nw ? "阿立哌唑等" : "阿立哌唑等") : null }));
    });
    // 右：症状灯
    const lx = W * 0.68, lw = W * 0.29, ly = Anima.topSafe() + H * 0.08, lh = H * (nw ? 0.42 : 0.36);
    const lit = [lerp(0.6, 0.95, prog(8.4, 1.2)), lerp(0.1, 0.9, prog(3.6, 1.2)), 0.7, lerp(0.1, 0.9, prog(4.2, 1.2))];
    lamps(lx, ly, lw, lh, lit, "症状灯");
    if (!nw) {
      const k = prog(9.6, 1);
      if (k > 0) {
        ctx.save(); ctx.globalAlpha *= k;
        plate("喹硫平：代谢产物还堵 NE 回收门", lx + lw / 2, ly + lh + H * 0.1, "#fff", fz(0.022), W * 0.66);
        plate("留意：坐立不安、犯困、体重", lx + lw / 2, ly + lh + H * 0.18, "#ffe9ef", fz(0.022), W * 0.66);
        ctx.restore();
      }
    }
    callout("a2-brake", nw ? lt > 2.8 && lt < 4.8 : lt > 3 && lt < 6.5, px, py - H * 0.04, W * 0.34, H * 0.25, nw ? "刹车松开，DA、NE↑" : "刹车松开：DA、NE 多放");
    callout("a2-dim", lt > 8.6, R[1].site.x, R[1].site.y, W * 0.38, H * 0.25, nw ? "只按一半：调光开关" : "只按一半，像调光开关");
    say("a2-s", nw ? lt > 5 && lt < 8 : lt > 4.2 && lt < 8, W * 0.19, H * 0.5 - cs * 3.1, nw ? W * 0.34 : W * 0.44, nw ? H * 0.28 : H * 0.3, "终于能动起来啦！", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：锂盐、T3、安非他酮、米氮平 ----------
  function fourView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fff8f0", "#f4f7fd", 41);
    const top = Anima.topSafe() + H * 0.05, gap = W * 0.02;
    const cols = nw ? 2 : 4, rows = nw ? 2 : 1;
    const cw = (W - gap * (cols + 1)) / cols, chh = nw ? (H - top - H * 0.03 - gap * 1.6) / 2 : H - top - H * 0.06;
    const box = (i) => ({ x: gap + (i % cols) * (cw + gap), y: top + Math.floor(i / cols) * (chh + gap * 1.6), w: cw, h: chh });
    const titles = ["锂盐", nw ? "T3" : "甲状腺激素 T3", "安非他酮", "米氮平"];
    const chips = nw ? ["细胞内信号 ⚠", "提“转速” ⚠", "堵 DA、NE 门", "松 α2 刹车"] : ["作用于细胞内信号 ⚠", "帮神经元提“转速” ⚠", "堵 DA、NE 回收门", "松开 α2 刹车"];
    const colors = ["#e4eefb", "#fff1d6", "#ffe6d6", "#ffe3e6"];
    const B = [0, 1, 2, 3].map(box);
    B.forEach((b) => card(b.x, b.y, b.w, b.h));
    const m = Math.min(cw, chh) , st = (i) => prog(0.6 + i * 2.4, 1.2);
    const midY = (b) => b.y + b.h * (nw ? 0.5 : 0.45);
    // 锂盐：离子进入细胞，信号一路传到细胞核
    { const b = B[0], p = st(0), cx = b.x + b.w * 0.5, cy = midY(b), r = m * 0.28;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = "#fff4ef"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx + r * 0.35, cy + r * 0.25, r * 0.32, 0, Math.PI * 2); ctx.fillStyle = "#e9e1ff"; ctx.fill(); outline(1.3); ctx.stroke();
      const pts = [[cx - r * 0.8, cy - r * 0.3], [cx - r * 0.2, cy - r * 0.45], [cx, cy], [cx + r * 0.35, cy + r * 0.25]];
      ctx.save(); ctx.setLineDash([3, 4]); outline(1.2); ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); ctx.restore();
      Anima.ion(lerp(cx - r * 1.5, cx - r * 0.8, p), lerp(cy - r * 1.1, cy - r * 0.3, p), m * 0.06, "Li", "#c8e6ff");
      if (p >= 1) Anima.spark(pts, (time * 0.5) % 1, m * 0.035, C.lavDeep); }
    // T3：表盘指针往上走
    { const b = B[1], p = st(1), cx = b.x + b.w * 0.5, cy = midY(b) + m * 0.12, r = m * 0.3;
      ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, 0); ctx.closePath(); ctx.fillStyle = "#fffaf0"; ctx.fill(); outline(1.6); ctx.stroke();
      for (let k = 0; k <= 4; k++) { const q = Math.PI + k * Math.PI / 4; outline(1.2); ctx.beginPath(); ctx.moveTo(cx + Math.cos(q) * r * 0.8, cy + Math.sin(q) * r * 0.8); ctx.lineTo(cx + Math.cos(q) * r * 0.95, cy + Math.sin(q) * r * 0.95); ctx.stroke(); }
      const q = Math.PI * (1.15 + 0.5 * p + Math.sin(time * 3) * 0.02);
      ctx.strokeStyle = C.augD; ctx.lineWidth = Math.max(2, m * 0.02); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(q) * r * 0.75, cy + Math.sin(q) * r * 0.75); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx, cy, m * 0.025, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
      Anima.ion(lerp(cx + r * 1.4, cx + r * 0.95, p), cy - r * 0.95, m * 0.06, "T3", "#fff1b8"); }
    // 安非他酮：DA、NE 的回收门被堵，快递员留下
    { const b = B[2], p = st(2), cx = b.x + b.w * 0.5, cy = midY(b), cs = m * (nw ? 0.11 : 0.1);
      const my = cy - m * 0.18;
      outline(1.5); ctx.beginPath(); ctx.moveTo(b.x, my); ctx.lineTo(b.x + b.w, my); ctx.stroke();
      Anima.transporter(cx - b.w * 0.2, my, m * 0.08, "#ffd27a", p >= 1 ? 0 : time * 2.5, false);
      Anima.transporter(cx + b.w * 0.2, my, m * 0.08, "#ffb3bd", p >= 1 ? 0 : time * 2.5, false);
      if (p > 0) { chara(cx - b.w * 0.2, my + m * 0.06 + cs * 2.6, cs, Object.assign({}, AUG, { hatColor: "#ffb08a", arms: "shh", eyes: "happy", shadow: false, alpha: p })); chara(cx + b.w * 0.2, my + m * 0.06 + cs * 2.6, cs, Object.assign({}, AUG, { hatColor: "#ffb08a", arms: "shh", eyes: "happy", shadow: false, alpha: p })); }
      const n = p >= 1 ? 4 : 2;
      for (let k = 0; k < n; k++) chara(b.x + b.w * (0.15 + k * 0.23), my + m * 0.4 + Math.sin(time * 2 + k) * m * 0.01, cs * 0.85, { who: k % 2 ? "NE" : "DA", eyes: "happy", arms: p >= 1 ? "up" : "down", shadow: false, seed: k }); }
    // 米氮平：α2 刹车松开
    { const b = B[3], p = st(3), cx = b.x + b.w * 0.5, cy = midY(b), cs = m * (nw ? 0.11 : 0.1);
      pedal(cx, cy - m * 0.12, m * 0.09, 1 - p);
      if (p > 0) chara(cx + m * 0.2, cy - m * 0.04, cs * 0.9, Object.assign({}, AUG, { hatColor: "#ec6470", hatColor2: "#ffe3e6", arms: "shh", eyes: "happy", shadow: false, alpha: p }));
      [["NE", -0.2], ["5HT", 0.2]].forEach((q, i) => chara(cx + b.w * q[1], cy + m * 0.3, cs, { who: q[0], gray: (1 - p) * 0.5, eyes: p > 0.5 ? "happy" : "sleepy", arms: p > 0.5 ? "up" : "down", shadow: false, seed: i }));
      if (p > 0.5) { ctx.save(); ctx.globalAlpha *= p; emote("zzz", b.x + b.w * 0.15, b.y + b.h * 0.3, m * 0.07); ctx.restore(); } }
    B.forEach((b, i) => {
      const p = st(i);
      if (p > 0.3) { ctx.save(); ctx.globalAlpha *= p; plate(chips[i], b.x + b.w / 2, b.y + b.h - H * (nw ? 0.04 : 0.06), colors[i], fz(nw ? 0.024 : 0.024), b.x + 2, b.x + b.w - 2); ctx.restore(); }
      cardTitle(b.x, b.y, b.w, titles[i], colors[i]);
    });
    callout("a3-li", lt > 2 && lt < 6, B[0].x + B[0].w * 0.3, midY(B[0]) - m * 0.1, nw ? W * 0.5 : B[0].x + B[0].w * 0.6, nw ? H * 0.5 : B[0].y + B[0].h + H * 0.1, nw ? "怎样增效还没完全弄清" : "锂盐：怎样增效还没完全弄清");
    say("a3-s", lt > 8.2 && !nw, B[2].x + B[2].w * 0.15, midY(B[2]) + Math.min(cw, chh) * 0.4 - Math.min(cw, chh) * 0.075 * 2.6, B[2].x + B[2].w * 0.5, B[2].y + B[2].h * 0.72, "精力、兴趣回来一点啦～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：难治时的其他路 ----------
  function trdView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f6f8ff", "#fff7ee", 51);
    const top = Anima.topSafe() + H * 0.05, gap = W * 0.025, cw = (W - gap * 4) / 3, chh = H - top - H * 0.05;
    const B = [0, 1, 2].map((i) => ({ x: gap + i * (cw + gap), y: top, w: cw, h: chh }));
    B.forEach((b) => card(b.x, b.y, b.w, b.h));
    const titles = nw ? ["艾司氯胺酮", "ECT", "rTMS"] : ["艾司氯胺酮鼻喷", "电休克治疗 ECT", "经颅磁刺激 rTMS"];
    const chips = nw ? ["快车道", "受控发作", "唤醒前额叶"] : ["挡 NMDA → 长出新突触", "麻醉下的受控脑电发作", "磁场唤醒左侧前额叶"];
    const cols = ["#ffe6d6", "#e4eefb", "#efe6fb"];
    const st = (i) => prog(0.6 + i * 3, 1.2);
    const m = Math.min(cw, chh * 0.7);
    // 艾司氯胺酮：挡住 NMDA → 谷氨酸爆发 → 枝桠长出来
    { const b = B[0], p = st(0), cx = b.x + b.w * 0.5, my = b.y + b.h * 0.42, cs = m * 0.075;
      outline(1.5); ctx.beginPath(); ctx.moveTo(b.x, my); ctx.lineTo(b.x + b.w, my); ctx.stroke();
      const R = Anima.receptor(cx - b.w * 0.18, my, m * 0.08, "#ffe0b8", 0, { shape: "square" });
      if (p > 0) chara(R.site.x, R.site.y + cs * 0.2, cs, Object.assign({}, AUG, { hatColor: "#ffb08a", arms: "shh", eyes: "happy", shadow: false, alpha: p }));
      const burst = prog(2.2, 1);
      for (let k = 0; k < 3; k++) { if (burst <= 0) break; const q = -0.9 + k * 0.6; chara(cx + b.w * 0.18 + Math.cos(q) * m * 0.15 * burst, my - m * 0.06 - Math.abs(Math.sin(q)) * m * 0.12 * burst, cs * 0.8, { who: "Glu", eyes: "sparkle", arms: "up", alpha: burst, shadow: false, seed: k }); }
      // 树突和新长的小枝桠
      const dy = my + b.h * 0.2, grow = prog(3.2, 1.4);
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, m * 0.03); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(b.x + b.w * 0.1, dy + m * 0.1); ctx.quadraticCurveTo(cx, dy - m * 0.05, b.x + b.w * 0.9, dy + m * 0.1); ctx.stroke();
      ctx.strokeStyle = "#f3a996"; ctx.lineWidth = Math.max(1.5, m * 0.018);
      for (let k = 0; k < 4; k++) { const x = b.x + b.w * (0.25 + k * 0.17), y0 = dy + m * 0.04 - Math.abs(k - 1.5) * m * -0.02; const L = m * 0.08 * grow; if (L < 1) continue; ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y0 - L); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y0 - L, m * 0.018 * grow, 0, Math.PI * 2); ctx.fillStyle = "#f3a996"; ctx.fill(); }
      if (grow > 0.8) sparkles(cx, dy - m * 0.05, b.w * 0.3, 3, grow, 4); }
    // ECT：麻醉中，一圈电波扫过大脑
    { const b = B[1], p = st(1), cx = b.x + b.w * 0.5, cy = b.y + b.h * 0.45, r = m * 0.24;
      ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.2, r, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe0ea"; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.strokeStyle = alpha(C.line, 0.5); ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.quadraticCurveTo(cx - r * 0.2, cy, cx, cy + r); ctx.stroke();
      face(cx, cy + r * 0.15, r * 0.35, 1);
      if (p > 0) {
        for (let k = 0; k < 2; k++) { const t = ((time * 0.45) + k * 0.5) % 1; ctx.save(); ctx.globalAlpha *= p * (1 - t); ctx.strokeStyle = C.skyDeep; ctx.lineWidth = Math.max(2, m * 0.02); ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.2 * (0.3 + t), r * (0.3 + t), 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
        ctx.save(); ctx.globalAlpha *= p; emote("zzz", cx + r * 1.1, cy - r * 1.1, m * 0.07); ctx.restore();
        if (!nw) { ctx.save(); ctx.globalAlpha *= prog(4.8, 1); plate("在麻醉中进行", cx, cy + r + H * 0.06, "#fff", fz(0.024), b.x + 2, b.x + b.w - 2); ctx.restore(); }
      } }
    // rTMS：头顶的线圈，磁场一圈圈唤醒前额叶
    { const b = B[2], p = st(2), cx = b.x + b.w * 0.5, cy = b.y + b.h * 0.5, r = m * 0.24;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = "#fff1e8"; ctx.fill(); outline(1.8); ctx.stroke();
      const fx = cx - r * 0.45, fy = cy - r * 0.35;
      glow(fx, fy, r * 0.6, C.gold, p * (0.6 + 0.4 * Math.sin(time * 6)));
      face(cx + r * 0.2, cy + r * 0.2, r * 0.3, p > 0.5 ? 1 : 0);
      const kx = fx - r * 0.55, ky = fy - r * 0.75;
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(kx + d * r * 0.22, ky, r * 0.22, 0, Math.PI * 2); ctx.fillStyle = "#c3a6ec"; ctx.fill(); outline(1.5); ctx.stroke(); }
      if (p > 0) for (let k = 0; k < 3; k++) { const t = (time * 0.8 + k / 3) % 1; ctx.save(); ctx.globalAlpha *= p * (1 - t); ctx.setLineDash([3, 4]); ctx.strokeStyle = C.lavDeep; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(kx, ky + r * 0.1, r * (0.3 + t * 0.6), 0.2, Math.PI - 0.2); ctx.stroke(); ctx.restore(); }
      if (!nw) { ctx.save(); ctx.globalAlpha *= prog(7.5, 1); plate("不用麻醉，人是清醒的", cx, cy + r + H * 0.07, "#fff", fz(0.024), b.x + 2, b.x + b.w - 2); ctx.restore(); } }
    B.forEach((b, i) => {
      const p = st(i);
      if (p > 0.3) { ctx.save(); ctx.globalAlpha *= p; plate(chips[i], b.x + b.w / 2, b.y + b.h - H * 0.06, cols[i], fz(nw ? 0.024 : 0.025), b.x + 2, b.x + b.w - 2); ctx.restore(); }
      cardTitle(b.x, b.y, b.w, titles[i], cols[i]);
    });
    callout("a4-ect", lt > 5 && lt < 9.5, B[1].x + B[1].w * 0.5, B[1].y + B[1].h * 0.45 - m * 0.24, B[1].x + B[1].w * 0.5, B[1].y + H * 0.1, nw ? "安全、有效" : "安全、有效的老办法");
    say("a4-s", lt > 10, B[0].x + B[0].w * 0.6, B[0].y + B[0].h * 0.42 - m * 0.12, B[0].x + B[0].w * 0.55, B[0].y + H * 0.12, "新枝桠长出来啦～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：楼梯 ----------
  function stairView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fff8f0", "#f3fbf6", 61);
    const steps = nw ? ["查清楚", "换药", "增效", "ECT 等"] : ["查清楚", "调整剂量或换药", "加药增效", "ECT、rTMS 等"];
    const sx0 = W * 0.36, sw = W * 0.155, base = H * 0.95, sh = H * 0.12;
    const cols = ["#ffe6d6", "#fff1d6", "#efe6fb", "#e4eefb"];
    const k = Math.min(3, Math.floor(Math.max(0, lt - 0.8) / 2.4));
    for (let i = 0; i < 4; i++) {
      const x = sx0 + i * sw, y = base - (i + 1) * sh;
      rrect(x, y, sw + 2, base - y, 6); ctx.fillStyle = cols[i]; ctx.fill(); outline(1.6); ctx.stroke();
    }
    for (let i = 0; i < 4; i++) plate(steps[i], sx0 + i * sw + sw / 2, base - (i + 0.5) * sh, "#fff", fz(nw ? 0.024 : 0.025), sx0 + i * sw, sx0 + (i + 1) * sw);
    const s = H * (nw ? 0.042 : 0.046);
    const stepPos = (i) => ({ x: sx0 + i * sw + sw * 0.5, y: base - (i + 1) * sh });
    const t = Math.max(0, lt - 0.8) / 2.4, i0 = Math.min(3, Math.floor(t)), fr = Math.min(1, (t - i0) * 2.5);
    const from = stepPos(Math.max(0, i0 - 1)), to = stepPos(i0);
    const px = i0 === 0 ? to.x : lerp(from.x, to.x, ease(fr)), py = i0 === 0 ? to.y : lerp(from.y, to.y, ease(fr)) - Math.sin(Math.min(1, fr) * Math.PI) * sh * 0.4;
    const moving = i0 > 0 && fr < 1;
    chara(px - s * 0.7, py, s, { who: "neuron", walk: moving ? time * 9 : null, eyes: k >= 3 ? "happy" : "open", mouth: k >= 2 ? "smile" : "flat", arms: k >= 3 && !moving ? "up" : "down" });
    chara(px + s * 0.8, py, s * 0.95, Object.assign({}, DOC, { walk: moving ? time * 9 : null, eyes: "happy", arms: "down", dir: -1 }));
    // 症状灯
    const L = { x: W * 0.03, y: Anima.topSafe() + H * 0.05, w: W * 0.3, h: H * (nw ? 0.36 : 0.32) };
    const lit = [0, 1, 2, 3].map((j) => clamp((k + (moving ? 0 : 1) - j) * 0.9 + 0.1, 0.1, 0.95));
    lamps(L.x, L.y, L.w, L.h, lit, "症状灯");
    // 别自己加减
    const sp = prog(8.6, 1);
    if (sp > 0) {
      ctx.save(); ctx.globalAlpha *= sp;
      const x = W * 0.17, y = L.y + L.h + H * 0.14;
      plate(nw ? "自己加减药" : "自己加药、减药、停药", x, y, "#ffe3e6", fz(0.026));
      ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(2.5, H * 0.007); ctx.lineCap = "round";
      const w2 = W * (nw ? 0.12 : 0.13);
      ctx.beginPath(); ctx.moveTo(x - w2, y - H * 0.035); ctx.lineTo(x + w2, y + H * 0.035); ctx.stroke();
      ctx.restore();
    }
    say("a5-d", lt > 1.6 && lt < 6.5, px + s * 0.8, py - s * 3.1, nw ? W * 0.62 : W * 0.6, H * 0.28, "每一步先看几周，再决定～", "say");
    say("a5-p", lt > 10.2, px - s * 0.7, py - s * 3.2, nw ? W * 0.5 : W * 0.55, H * 0.26, "一起慢慢来！", "say");
    callout("a5-sign", lt > 9.4 && lt < 13, W * 0.17, L.y + L.h + H * 0.14 + H * 0.03, W * 0.2, H * 0.9, nw ? "交给医生安排" : "这些都交给医生安排");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.augD, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fffaf5"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) checkView(S.v0);
    if (S.v1 > 0.02) forkView(S.v1);
    if (S.v2 > 0.02) atypView(S.v2);
    if (S.v3 > 0.02) fourView(S.v3);
    if (S.v4 > 0.02) trdView(S.v4);
    if (S.v5 > 0.02) stairView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#f0a868",
    titleCard: { lines: ["一种药不够时：", "增效和难治性抑郁"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
