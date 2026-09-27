Anima.register("depression", {
    "title": "心情的天气预报",
    "tag": "抑郁症",
    "headline": "抑郁的时候，大脑里在【下雨】吗？",
    "lede": "抑郁不只是“心情不好”。跟着 5-HT、去甲肾上腺素、多巴胺三位快递员，看看科学家怎样一步步解释抑郁：从“递质不够”，到“门开太多”，再到“缺水的小树”。最重要的是：这场雨是会停的。",
    "summary": "抑郁症的表现，单胺、受体和神经营养三个假说，以及为什么说它是可以治疗的病。",
    "chapter": "对应 Stahl《精神药理学精要》第 6 章 · 心境障碍",
    "footer": "如果你或身边的人出现伤害自己的想法，请立刻告诉信任的人，并联系当地心理援助热线或前往医院急诊。",
    "canvasLabel": "拟人化的单胺快递员在下雨的心情小镇里，演示抑郁症的几种解释和治疗的希望",
    "regions": ["brainstem", "pfc", "hippo", "amygdala"],
    "parts": ["mood"],
    "cast": ["5HT", "NE", "DA"],
    "color": "#9cc3e6"
  }, () => {
  const CH = [
    { title: "不只是心情不好", town: 1, brain: 0, syn: 0, tree: 0, rain: 1, sx: 0.3,
      pill: ["持续", "≥ 两周"], pill2: ["它是", "可治的病"],
      text: "抑郁症不只是“心情不好”。如果情绪低落，或者对以前喜欢的事提不起兴趣，持续了至少两周，还常常伴随睡不好、胃口改变、没精神、难以集中注意力、总觉得是自己的错，甚至出现轻生的念头，就要想到它。它是一种常见的、可以治疗的疾病，不是软弱，也不是“想开点”就能好。",
      fact: "核心表现：情绪低落或兴趣减退，几乎每天都这样、持续至少两周，并且影响了生活",
      labels: [] },
    { title: "单胺三兄妹", town: 0, brain: 1, syn: 0, tree: 0, rain: 1, sx: 0.3,
      pill: ["单胺", "三兄妹"], pill2: ["老家", "脑干·中脑"],
      text: "心情小镇里有三位快递员：5-HT、去甲肾上腺素和多巴胺，合称单胺。它们的老家在脑干和中脑，沿着长长的通路，把信送到前额叶、海马、杏仁核等街区。Stahl 把症状和它们大致对应起来：5-HT 多管情绪、焦虑、睡眠和食欲；去甲肾上腺素管精力和注意力；多巴胺管兴趣、动力和快乐感。",
      fact: "这张对应表只是粗略的地图：在真实的大脑里，三位快递员常常一起合作",
      labels: [] },
    { title: "是递质不够吗？", town: 0, brain: 0, syn: 1, tree: 0, rain: 1, sx: 0.3,
      pill: ["单胺升高", "几小时"], pill2: ["心情好转", "几周"],
      text: "最早的解释叫单胺假说：抑郁是因为单胺太少，信送不到，心情就下起了雨。抗抑郁药确实能让突触里的单胺变多，而且几小时内就做到了。可奇怪的是，心情往往要过几周才慢慢放晴。这个“时间差”说明，递质不够只是故事的一部分，真正的变化还在后面。",
      fact: "单胺几小时就升高，情绪却要几周才改善：这个时间差让科学家继续寻找答案",
      labels: [] },
    { title: "门开得太多了", town: 0, brain: 0, syn: 1, tree: 0, rain: 1, sx: 0.5,
      pill: ["受体", "上调 ↑"], pill2: ["时间", "用药前"],
      text: "受体假说换了个角度：单胺长期不够时，收信的神经元会多开几扇门等信，也就是受体数量代偿性增加，叫做“上调”。用上抗抑郁药以后，信多了，这些多出来的门会在几周里慢慢“下调”，回到平衡。受体调整需要的时间，和药物起效的时间更吻合。",
      fact: "受体数量的调整要花几周，和抗抑郁药起效的时间差不多",
      labels: [] },
    { title: "缺水的小树", town: 0, brain: 0, syn: 0, tree: 1, rain: 1, sx: 0.5,
      pill: ["皮质醇", "偏高 ↑"], pill2: ["BDNF", "偏低 ↓"],
      text: "长期的压力会让应激激素皮质醇偏高，也会让脑源性神经营养因子（BDNF）变少。BDNF 就像神经元的营养液，少了它，海马等脑区的神经元像缺水的小树，枝叶慢慢萎缩。好消息是，有效的治疗可能让 BDNF 回升，帮助这些小树重新长出枝叶。",
      fact: "一些研究发现，抑郁时海马的体积可能偏小，治疗后这种变化可能部分恢复",
      labels: [] },
    { title: "天气会转晴", town: 1, brain: 0, syn: 0, tree: 0, rain: 0, sx: 0.5,
      pill: ["天气", "转晴中"], pill2: ["求助", "随时可以"],
      text: "抑郁是可以治疗的。抗抑郁药、心理治疗、规律运动和规律作息都有帮助，很多人会慢慢好起来，只是需要一点时间和耐心。如果你正被低落困住，可以先告诉一个信任的人，再去看精神科或心理科。如果出现伤害自己的想法，请马上告诉身边的人，并联系当地心理援助热线或去医院急诊。",
      fact: "有伤害自己的想法时，请立刻求助：身边的人、当地心理援助热线、医院急诊",
      labels: [] },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    term: "#ffe0cf", post: "#e6effa", ground: "#cfe8c6", trunk: "#c89b74", leaf: "#8fd3a8", cortisol: "#9aa0bd", bdnf: "#8fe0ff",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { town: 1, brain: 0, syn: 0, tree: 0, rain: 1, sx: 0.3 };
  const WHO = ["5HT", "NE", "DA"];

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;

  // ---------- 天气小零件 ----------
  function cloud(x, y, r, color, mood, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const bumps = [[-0.9, 0.15, 0.55], [-0.45, -0.25, 0.7], [0.15, -0.4, 0.8], [0.7, -0.1, 0.62], [1.0, 0.25, 0.45], [0, 0.25, 0.7]];
    ctx.beginPath();
    for (const b of bumps) { ctx.moveTo(x + b[0] * r + b[2] * r, y + b[1] * r); ctx.arc(x + b[0] * r, y + b[1] * r, b[2] * r, 0, Math.PI * 2); }
    outline(Math.max(4, r * 0.09)); ctx.stroke();
    ctx.fillStyle = color; ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.beginPath(); ctx.ellipse(x - r * 0.4, y - r * 0.35, r * 0.35, r * 0.16, -0.3, 0, Math.PI * 2); ctx.fill();
    if (mood != null) face(x + r * 0.05, y + r * 0.08, r * 0.42, mood);
    ctx.restore();
  }
  function rain(x0, x1, y0, y1, n, a, color, seed) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.strokeStyle = color || "#8fb3dc"; ctx.lineWidth = Math.max(1.5, H * 0.004); ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const t = (time * (0.7 + rnd(i + (seed || 0)) * 0.4) + rnd(i + 31 + (seed || 0))) % 1;
      const x = lerp(x0, x1, rnd(i + 7 + (seed || 0))) - t * H * 0.03, y = lerp(y0, y1, t);
      ctx.moveTo(x, y); ctx.lineTo(x - H * 0.006, y + H * 0.028);
    }
    ctx.stroke();
    ctx.restore();
  }
  function sun(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * 2.6, C.gold, 0.9);
    ctx.translate(x, y); ctx.rotate(time * 0.3);
    for (let i = 0; i < 10; i++) {
      ctx.rotate(Math.PI / 5);
      ctx.beginPath(); ctx.moveTo(-r * 0.16, -r * 1.12); ctx.lineTo(0, -r * 1.5); ctx.lineTo(r * 0.16, -r * 1.12); ctx.closePath();
      ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.5); ctx.stroke();
    }
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffe68a"; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.1, r * 0.55, 1);
    ctx.restore();
  }
  function rainbow(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a * 0.55;
    const cols = ["#ffb3c1", "#ffd6a0", "#fff1a8", "#c8efc8", "#bfe3f5", "#d9ccfa"];
    const w = r * 0.07;
    cols.forEach((c, i) => {
      ctx.strokeStyle = c; ctx.lineWidth = w;
      ctx.beginPath(); ctx.arc(x, y, r - i * w, Math.PI, Math.PI * 2); ctx.stroke();
    });
    ctx.restore();
  }
  function house(x, y, w, h, color, roof) {
    rrect(x - w / 2, y - h, w, h, w * 0.08); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - w * 0.62, y - h + 2); ctx.lineTo(x, y - h - w * 0.5); ctx.lineTo(x + w * 0.62, y - h + 2); ctx.closePath();
    ctx.fillStyle = roof; ctx.fill(); ctx.stroke();
    rrect(x - w * 0.16, y - h * 0.62, w * 0.32, h * 0.3, 3); ctx.fillStyle = "#fff6d8"; ctx.fill(); ctx.stroke();
  }

  // ---------- 小图标（症状 / 帮助） ----------
  function icon(kind, x, y, r) {
    const lw = Math.max(1.4, r * 0.06);
    outline(lw);
    if (kind === "sleep") { // 月亮 + z
      ctx.beginPath(); ctx.arc(x - r * 0.1, y, r * 0.45, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x + r * 0.1, y - r * 0.12, r * 0.4, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
      text("z", x + r * 0.42, y - r * 0.35, r * 0.4, C.soft);
    } else if (kind === "food") { // 碗 + 筷子
      ctx.beginPath(); ctx.moveTo(x - r * 0.55, y - r * 0.05); ctx.quadraticCurveTo(x, y + r * 0.8, x + r * 0.55, y - r * 0.05); ctx.closePath();
      ctx.fillStyle = "#ffd3c4"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x, y - r * 0.08, r * 0.45, r * 0.13, 0, Math.PI, 0); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + r * 0.1, y - r * 0.2); ctx.lineTo(x + r * 0.55, y - r * 0.6); ctx.moveTo(x + r * 0.22, y - r * 0.15); ctx.lineTo(x + r * 0.62, y - r * 0.48); ctx.stroke();
    } else if (kind === "energy") { // 电量低的电池
      rrect(x - r * 0.5, y - r * 0.25, r * 0.9, r * 0.5, r * 0.08); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.line; ctx.fillRect(x + r * 0.4, y - r * 0.1, r * 0.1, r * 0.2);
      ctx.fillStyle = C.coral; ctx.fillRect(x - r * 0.44, y - r * 0.19, r * 0.18, r * 0.38);
    } else if (kind === "focus") { // 绕晕的漩涡
      ctx.beginPath();
      for (let k = 0; k <= 40; k++) { const q = k * 0.4, rr = r * 0.05 + k * r * 0.012; const px = x + Math.cos(q) * rr, py = y + Math.sin(q) * rr; if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
      ctx.strokeStyle = C.lavDeep; ctx.stroke();
    } else if (kind === "guilt") { // 压在心上的小石头
      Anima.heart(x, y + r * 0.1, r * 0.4, "#f7b8c8");
      rrect(x - r * 0.28, y - r * 0.6, r * 0.56, r * 0.36, r * 0.12); ctx.fillStyle = "#c9c1c7"; ctx.fill(); outline(lw); ctx.stroke();
    } else if (kind === "pill") { // 药
      ctx.save(); ctx.translate(x, y); ctx.rotate(-0.6);
      rrect(-r * 0.55, -r * 0.2, r * 1.1, r * 0.4, r * 0.2); ctx.fillStyle = "#fff"; ctx.fill();
      ctx.save(); ctx.clip(); ctx.fillStyle = "#ff9aa9"; ctx.fillRect(-r * 0.55, -r * 0.2, r * 0.55, r * 0.4); ctx.restore();
      rrect(-r * 0.55, -r * 0.2, r * 1.1, r * 0.4, r * 0.2); ctx.stroke();
      ctx.restore();
    } else if (kind === "talk") { // 两个对话框 + 爱心
      rrect(x - r * 0.6, y - r * 0.5, r * 0.75, r * 0.5, r * 0.15); ctx.fillStyle = "#e4e0ff"; ctx.fill(); ctx.stroke();
      rrect(x - r * 0.1, y - r * 0.1, r * 0.7, r * 0.48, r * 0.15); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      Anima.heart(x + r * 0.25, y + r * 0.13, r * 0.14, C.rose);
    } else if (kind === "run") { // 小跑鞋
      ctx.beginPath(); ctx.moveTo(x - r * 0.55, y + r * 0.2); ctx.lineTo(x - r * 0.5, y - r * 0.3); ctx.lineTo(x - r * 0.1, y - r * 0.3);
      ctx.quadraticCurveTo(x + r * 0.05, y - r * 0.02, x + r * 0.45, y); ctx.quadraticCurveTo(x + r * 0.62, y + r * 0.08, x + r * 0.58, y + r * 0.2); ctx.closePath();
      ctx.fillStyle = "#bfe8d6"; ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#fff"; ctx.fillRect(x - r * 0.57, y + r * 0.2, r * 1.15, r * 0.1); ctx.strokeRect(x - r * 0.57, y + r * 0.2, r * 1.15, r * 0.1);
      ctx.beginPath(); ctx.moveTo(x - r * 0.7, y - r * 0.1); ctx.lineTo(x - r * 0.95, y - r * 0.1); ctx.moveTo(x - r * 0.7, y + r * 0.08); ctx.lineTo(x - r * 0.9, y + r * 0.08); ctx.stroke();
    } else if (kind === "clock") { // 时钟
      ctx.beginPath(); ctx.arc(x, y, r * 0.48, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - r * 0.32); ctx.moveTo(x, y); ctx.lineTo(x + r * 0.22, y + r * 0.08); ctx.stroke();
    }
  }
  function tile(x, y, r, kind, label, a, ring, gray) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.7 + 0.3 * a;
    ctx.translate(x, y); ctx.scale(pop, pop); ctx.translate(-x, -y);
    ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = ring; ctx.lineWidth = Math.max(2.5, r * 0.1); ctx.stroke();
    if (gray && ctx.filter !== undefined) ctx.filter = "grayscale(0.6)";
    icon(kind, x, y - r * 0.05, r * 0.95);
    ctx.filter = "none";
    const fs = fsz(0.032);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(label).width + fs * 1.1;
    rrect(x - tw / 2, y + r * 0.78, tw, fs * 1.45, fs * 0.72); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(label, x, y + r * 0.78 + fs * 0.75, fs, C.ink);
    ctx.restore();
  }

  // ---------- 第 1、6 幕：心情小镇 ----------
  function tilePos(i, n) {
    const col = i < Math.ceil(n / 2) ? 0 : 1, row = col ? i - Math.ceil(n / 2) : i;
    const rows = col ? n - Math.ceil(n / 2) : Math.ceil(n / 2);
    const y0 = W / H < 1.5 ? H * 0.36 : H * 0.3, y1 = H * 0.78;
    const y = rows === 1 ? (y0 + y1) / 2 : lerp(y0, y1, row / (rows - 1));
    return { x: col ? W * 0.87 : W * 0.13, y: y };
  }
  function townView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const r = S.rain;
    Anima.wash(mix("#fff4e0", "#dfe6f2", r), mix("#fdeef3", "#eef0f7", r));
    if (r < 0.9) Anima.bokeh(6, "#ffe3a8", 1 - r, 11);
    const gy = H * 0.86;
    // 远处的小房子和山丘
    ctx.beginPath(); ctx.moveTo(0, gy - H * 0.05);
    ctx.quadraticCurveTo(W * 0.25, gy - H * 0.16, W * 0.5, gy - H * 0.06); ctx.quadraticCurveTo(W * 0.75, gy - H * 0.14, W, gy - H * 0.05);
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
    ctx.fillStyle = mix("#d6efd0", "#d5dde3", r); ctx.fill(); outline(1.6); ctx.stroke();
    const hs = H * 0.08;
    house(W * 0.3, gy - H * 0.06, hs, hs * 0.8, mix("#ffe0cf", "#e4e1e6", r), mix("#f28ca5", "#b7aebd", r));
    house(W * 0.7, gy - H * 0.065, hs * 0.9, hs * 0.75, mix("#fff1b8", "#e8e6e0", r), mix("#8fc3ea", "#aab4c0", r));
    ctx.fillStyle = mix("#bfe3a8", "#c3cdc8", r); ctx.fillRect(0, gy, W, H - gy);
    outline(1.6); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();

    const sad = S.rain > 0.5;
    // 天空：第 1 幕是雨云，第 6 幕云散开、太阳出来
    const cy = W / H < 1.5 ? H * 0.28 : H * 0.25, cr = Math.min(H * 0.1, W * 0.08);
    const part = 1 - r; // 0 下雨 → 1 晴
    if (!sad) {
      rainbow(W * 0.5, gy - H * 0.05, Math.min(W * 0.33, H * 0.6), prog(2, 3));
      sun(W * 0.5, cy - H * 0.02, cr * 0.75, part);
    }
    rain(W * 0.36, W * 0.66, cy + cr * 0.4, gy, 40, r, "#8fb3dc", 3);
    cloud(W * 0.5 + cr * 1.3 + part * W * 0.12, cy - cr * 0.3 - part * H * 0.08, cr * (0.6 - part * 0.15), mix("#b8bfd4", "#ffffff", part), null, 1);
    cloud(W * 0.5 - part * W * 0.2, cy - part * H * 0.1, cr * (1 - part * 0.45), mix("#c9cfe0", "#ffffff", part), sad ? -1 : null, 1);

    // 主角：心情小镇的居民
    const s = H * 0.07, x = W * 0.5;
    if (sad) {
      const up = prog(8, 2); // 后半幕：抬起头，被告知“可以治”
      chara(x, gy, s, { who: "neuron", eyes: up > 0.5 ? "teary" : "sleepy", mouth: up > 0.5 ? "o" : "sad", arms: "hug", gray: 0.6 * (1 - up * 0.5), brow: "worry" });
      emote("gloom", x, gy - s * 3.3, s * 0.8, 1 - up);
      if (up > 0.5) emote("sparkle", x + s * 1.1, gy - s * 3, s * 0.8, up);
      // 症状小图标一个个冒出来
      const K = [["sleep", "睡眠"], ["food", "食欲"], ["energy", "精力"], ["focus", "注意力"], ["guilt", "自责"]];
      const tr = Math.min(H * 0.075, W * 0.06);
      K.forEach((k, i) => { const p = tilePos(i, K.length); tile(p.x, p.y, tr, k[0], k[1], prog(1.2 + i * 0.7, 0.6), "#b8c4dc", true); });
      say("blue", lt > 0.8 && lt < 7.5, x + s * 0.4, gy - s * 3.2, W / H < 1.5 ? x : x + W * 0.17, H * 0.5, "以前喜欢的事，现在也提不起劲……", "think");
      say("treat", lt > 7.8, x, gy - s * 3.2, x, H * 0.47, "这是一种病，不是你不够坚强。它可以治疗。", "box");
    } else {
      // 三位快递员也回来了
      const ks = s * 0.72;
      const P = [[x - W * 0.19, "5HT"], [x + W * 0.19, "DA"], [x - W * 0.11, "NE"]];
      chara(x, gy, s, { who: "neuron", eyes: "happy", mouth: "grin", arms: lt > 1 ? "up" : "wave", jump: Math.abs(Math.sin(time * 3)) * 0.12 });
      sparkles(x, gy - s * 1.6, s * 2.2, 5, 0.8, 3);
      P.forEach((p, i) => {
        const inT = prog(0.5 + i * 0.5, 1.2);
        const px = lerp(p[0] + (i === 1 ? W * 0.3 : -W * 0.3), p[0], inT);
        chara(px, gy + H * 0.035, ks, { who: p[1], eyes: "happy", arms: inT < 1 ? "down" : "wave", walk: inT < 1 ? time * 9 : null, dir: i === 1 ? -1 : 1, mouth: "grin", alpha: clamp(inT * 3, 0, 1) });
      });
      const K = [["pill", "药物"], ["talk", "心理治疗"], ["run", "运动"], ["clock", "规律作息"]];
      const tr = Math.min(H * 0.075, W * 0.06);
      K.forEach((k, i) => { const p = tilePos(i, K.length); tile(p.x, p.y, tr, k[0], k[1], prog(1 + i * 0.6, 0.6), ["#ff9aa9", "#b8b0f0", "#8fd3a8", "#ffd27a"][i], false); });
      say("slow", lt > 1.5 && lt < 6.5, x + s * 0.3, gy - s * 3.2, x + W * 0.13, H * 0.5, "慢慢来，天会晴的～", "say");
      say("help", lt > 6.5, x, gy - s * 3.3, x, H * 0.5, "有伤害自己的想法时，请马上告诉身边的人，联系当地心理援助热线，或去医院急诊。", "box");
    }
    ctx.restore();
  }

  // ---------- 第 2 幕：单胺三兄妹 ----------
  function brainView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f8ff", "#fdf0f5");
    Anima.bokeh(6, "#d9ccfa", 0.8, 21);
    Anima.petals(8, 0.5, 33);
    const narrow = W / H < 1.5;
    const bx = narrow ? W * 0.25 : W * 0.28, by = H * 0.55, R = Math.min(W * (narrow ? 0.2 : 0.22), H * (narrow ? 0.27 : 0.3));
    // 侧面看的大脑：前额在左
    ctx.beginPath();
    ctx.moveTo(bx - R * 1.05, by + R * 0.1);
    ctx.bezierCurveTo(bx - R * 1.15, by - R * 0.7, bx - R * 0.4, by - R * 1.0, bx + R * 0.2, by - R * 0.92);
    ctx.bezierCurveTo(bx + R * 0.9, by - R * 0.85, bx + R * 1.2, by - R * 0.3, bx + R * 1.05, by + R * 0.25);
    ctx.bezierCurveTo(bx + R * 1.0, by + R * 0.6, bx + R * 0.6, by + R * 0.65, bx + R * 0.3, by + R * 0.55);
    ctx.bezierCurveTo(bx - R * 0.1, by + R * 0.62, bx - R * 0.5, by + R * 0.55, bx - R * 0.8, by + R * 0.5);
    ctx.bezierCurveTo(bx - R * 1.0, by + R * 0.45, bx - R * 1.04, by + R * 0.3, bx - R * 1.05, by + R * 0.1);
    ctx.closePath();
    ctx.fillStyle = "#ffe3ea"; ctx.fill(); outline(2.2); ctx.stroke();
    // 脑沟
    ctx.save(); ctx.clip();
    ctx.strokeStyle = alpha("#d98ea5", 0.6); ctx.lineWidth = Math.max(1.5, R * 0.02);
    const g = [[-0.7, -0.5, -0.3, -0.2], [-0.2, -0.8, 0.1, -0.4], [0.4, -0.7, 0.6, -0.2], [-0.6, 0.1, -0.2, 0.25], [0.5, 0.1, 0.8, 0.0]];
    for (const q of g) { ctx.beginPath(); ctx.moveTo(bx + q[0] * R, by + q[1] * R); ctx.quadraticCurveTo(bx + (q[0] + q[2]) / 2 * R + R * 0.1, by + (q[1] + q[3]) / 2 * R - R * 0.12, bx + q[2] * R, by + q[3] * R); ctx.stroke(); }
    ctx.restore();
    // 小脑 + 脑干
    ctx.beginPath(); ctx.ellipse(bx + R * 0.72, by + R * 0.62, R * 0.32, R * 0.2, -0.2, 0, Math.PI * 2); ctx.fillStyle = "#f7d0dc"; ctx.fill(); outline(2); ctx.stroke();
    rrect(bx + R * 0.18, by + R * 0.35, R * 0.26, R * 0.75, R * 0.12); ctx.fillStyle = "#f9d9c8"; ctx.fill(); ctx.stroke();
    // 三条通路：从脑干/中脑出发
    const O = { "5HT": [bx + R * 0.31, by + R * 0.78], NE: [bx + R * 0.33, by + R * 0.58], DA: [bx + R * 0.24, by + R * 0.38] };
    const T = {
      "5HT": [[bx + R * 0.1, by - R * 0.2], [bx - R * 0.8, by - R * 0.2]],
      NE: [[bx + R * 0.3, by - R * 0.6], [bx - R * 0.4, by - R * 0.7]],
      DA: [[bx - R * 0.25, by + R * 0.05], [bx - R * 0.75, by + R * 0.25]],
    };
    const col = { "5HT": "#3fb08f", NE: "#ec6470", DA: "#ff9a52" };
    const runner = { x: bx, y: by - R };
    WHO.forEach((w, k) => {
      const on = prog(1 + k * 1.6, 1.2);
      if (on < 0.02) return;
      const o = O[w], m = T[w][0], e = T[w][1];
      ctx.save(); ctx.globalAlpha *= on;
      ctx.strokeStyle = "#ffffff"; ctx.lineWidth = Math.max(5, R * 0.07); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(o[0], o[1]); ctx.quadraticCurveTo(m[0], m[1], e[0], e[1]); ctx.stroke();
      ctx.strokeStyle = col[w]; ctx.lineWidth = Math.max(2.5, R * 0.035); ctx.setLineDash([R * 0.06, R * 0.05]); ctx.lineDashOffset = -time * 30;
      ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(o[0], o[1], Math.max(4, R * 0.05), 0, Math.PI * 2); ctx.fillStyle = col[w]; ctx.fill(); outline(1.5); ctx.stroke();
      // 沿着路跑的小快递员
      const t = (time * 0.25 + k * 0.3) % 1;
      const px = (1 - t) * (1 - t) * o[0] + 2 * (1 - t) * t * m[0] + t * t * e[0], py = (1 - t) * (1 - t) * o[1] + 2 * (1 - t) * t * m[1] + t * t * e[1];
      chara(px, py + R * 0.04, Math.max(6.5, R * 0.075), { who: w, walk: time * 9, dir: -1, eyes: "happy", shadow: false });
      if (k === 1) { runner.x = px; runner.y = py - R * 0.2; }
      ctx.restore();
    });
    // 右边：三张角色卡
    const cx0 = narrow ? W * 0.53 : W * 0.56, cw = W * 0.97 - cx0;
    const top = H * 0.2, ch = H * 0.22, gap = H * 0.035;
    const info = [
      ["5HT", "5-HT", "情绪 · 焦虑 · 睡眠 · 食欲", "#cdf1e4"],
      ["NE", "去甲肾上腺素", "精力 · 注意力", "#ffd3d6"],
      ["DA", "多巴胺", "兴趣 · 动力 · 快乐感", "#ffe6c4"],
    ];
    const cs = Math.min(H * 0.05, ch * 0.24);
    info.forEach((f, k) => {
      const on = prog(1 + k * 1.6, 0.9);
      if (on < 0.02) return;
      const y = top + k * (ch + gap);
      ctx.save(); ctx.globalAlpha *= on; ctx.translate((1 - on) * W * 0.05, 0);
      ctx.shadowColor = "rgba(120,80,100,0.16)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
      rrect(cx0, y, cw, ch, ch * 0.25); ctx.fillStyle = "#fffdfb"; ctx.fill();
      ctx.shadowColor = "transparent"; outline(1.8); ctx.stroke();
      rrect(cx0, y, cw * 0.26, ch, ch * 0.25); ctx.fillStyle = f[3]; ctx.fill(); ctx.stroke();
      chara(cx0 + cw * 0.13, y + ch * 0.9, cs, { who: f[0], eyes: k === 0 && lt > 9 ? "happy" : "open", arms: "wave", mouth: "smile" });
      const fs1 = fsz(0.04), fs2 = fsz(0.032);
      text(f[1], cx0 + cw * 0.3, y + ch * 0.28, fs1, C.ink, "left");
      ctx.font = `${fs2}px ${Anima.ROUND}`;
      const LL = Anima.wrapText(f[2], cw * 0.66);
      LL.forEach((l, j) => text(l, cx0 + cw * 0.3, y + ch * (LL.length > 1 ? 0.58 : 0.66) + j * fs2 * 1.25, fs2, col[f[0]], "left"));
      ctx.restore();
    });
    const nar = narrow;
    callout("bs", lt > 1.5 && (!nar || lt < 4.4), bx + R * 0.34, by + R * 0.7, bx + R * 0.1, H * 0.94, "脑干：中缝核、蓝斑");
    callout("vta", lt > 4.6 && (!nar || lt < 7.4), bx + R * 0.24, by + R * 0.38, bx - R * 0.55, H * 0.94 - fsz(0.04) * 2.1, "中脑：腹侧被盖区");
    callout("pfcL", lt > 6 && (!nar || (lt > 7.6 && lt < 10.4)), bx - R * 0.8, by - R * 0.2, bx - R * 0.75, H * 0.2, "前额叶");
    say("team", lt > (nar ? 10.5 : 7.5), runner.x, runner.y, bx + R * 0.45, H * 0.17, "对应只是大致的，我们常常一起干活哦～", "say");
    ctx.restore();
  }

  // ---------- 第 3、4 幕：突触 ----------
  function geo() {
    const k = clamp((S.sx - 0.3) / 0.2, 0, 1);
    const cx = W * S.sx, tw = lerp(Math.min(W * 0.5, H * 0.9), Math.min(W * 0.66, H * 1.15), k);
    const th = H * 0.34, post = H * 0.72, rs = H * 0.045, cs = H * 0.04;
    // 受体：3 扇常驻的门 + 4 扇“上调”时多开的门
    const base = [-0.3, 0, 0.3], extra = [-0.45, -0.15, 0.15, 0.45];
    return { cx, tw, th, post, rs, cs, bot: th, base: base.map((f) => cx + tw * f), extra: extra.map((f) => cx + tw * f), siteY: post - rs * 1.62 };
  }
  // 第 4 幕：几周里受体慢慢下调
  function week() { return cur === 3 ? clamp(Math.floor((lt - 6.5) / 1.6) + 1, 1, 4) : 1; }
  function extraAmt(i) {
    if (cur !== 3) return 0;
    const up = prog(1 + i * 0.7, 0.8);
    const down = prog(7.5 + i * 1.3, 1.2);
    return up * (1 - down);
  }
  function courierCount() {
    if (cur === 2) return lt < 4 ? 1 : 1 + Math.min(5, Math.floor((lt - 4) / 0.35) + 1);
    if (cur === 3) return lt < 6.5 ? 1 : Math.min(5, 1 + Math.floor((lt - 6.5) / 1.2));
    return 1;
  }
  function synView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const g = geo();
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, "#eef3fb"); bg.addColorStop(1, "#f2f4fb");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfe0f7", 0.8, 60);
    Anima.postMembrane(g.post, C.post, {});
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    const n = courierCount();
    // 谁站在哪扇门上
    const sites = g.base.slice();
    const R = [];
    g.base.forEach((x, i) => R.push({ x, amt: 1, act: n > i + 1 || (n === 1 && i === 1 && cur === 2 && lt > 2.4) ? 1 : 0 }));
    g.extra.forEach((x, i) => R.push({ x, amt: extraAmt(i), act: 0, extra: true }));
    R.forEach((r) => {
      if (r.amt < 0.02) return;
      ctx.save(); ctx.translate(r.x, g.post); ctx.scale(r.amt, r.amt); ctx.translate(-r.x, -g.post);
      Anima.receptor(r.x, g.post, g.rs, r.extra ? "#c7b8f2" : "#f7a8c0", r.act * 0.9, {});
      if (r.extra) face(r.x, g.post - g.rs * 0.5, g.rs * 0.35, 0);
      ctx.restore();
      if (r.extra && r.amt > 0.1 && r.amt < 0.9 && cur === 3 && lt < 6) sfx("噗", r.x + g.rs, g.post - g.rs * 2.2, H * 0.032, C.lavDeep, -0.15, Math.sin(r.amt * Math.PI));
    });
    // 快递员
    const cs = g.cs;
    for (let i = 0; i < n; i++) {
      const w = WHO[i % 3];
      const fromX = g.cx + g.tw * (-0.15 + i * 0.08), fromY = g.bot + cs * 3.2;
      if (i === 0) { // 最早的一位：一开始孤零零地走，同伴来了以后开心起来
        const wx = g.cx + Math.sin(time * 0.5) * g.tw * 0.18;
        const t1 = cur === 2 ? 4 : 6.5, p0 = n > 1 ? ease((lt - t1) / 1.2) : 0;
        const x0 = lerp(wx, g.cx - g.tw * 0.15, p0);
        chara(x0, g.siteY - H * 0.02, cs, { who: "5HT", walk: p0 < 1 ? time * 5 : null, eyes: p0 > 0.5 ? "happy" : "teary", mouth: p0 > 0.5 ? "grin" : "sad", arms: p0 > 0.5 ? "wave" : "hold", item: p0 > 0.5 ? null : "letter", gray: 0.5 * (1 - p0), dir: p0 > 0 ? 1 : (Math.cos(time * 0.5) > 0 ? 1 : -1) });
        continue;
      }
      const born = cur === 2 ? 4 + (i - 1) * 0.35 : 6.5 + (i - 1) * 1.2;
      const p = ease((lt - born) / 1.1);
      const site = i < 4 && i >= 1 ? { x: sites[i - 1], y: g.siteY } : { x: g.cx + g.tw * (i === 0 ? -0.12 : 0.12), y: g.siteY - H * 0.02 };
      const x = lerp(fromX, site.x, p), y = lerp(fromY, site.y, p) - Math.sin(p * Math.PI) * H * 0.05;
      chara(x, y, cs, { who: w, eyes: p < 1 ? "sparkle" : "happy", arms: p < 1 ? "hold" : "up", item: p < 1 ? "letter" : null, mouth: "grin", walk: p < 1 ? time * 10 : null, alpha: clamp(p * 4, 0, 1), jump: p >= 1 ? Math.abs(Math.sin(time * 4 + i)) * 0.2 : 0 });
    }
    // 药物访客（第 3 幕）
    if (cur === 2) {
      const p = prog(2.2, 1.5);
      const dx = lerp(-W * 0.05, g.cx - g.tw * 0.5, p);
      chara(dx, g.bot + cs * 2.2, cs * 0.95, { who: "drug", label: "药", walk: p < 1 ? time * 9 : null, eyes: "happy", arms: p >= 1 ? "wave" : "down", alpha: clamp(p * 3, 0, 1) });
      if (lt > 3.8 && lt < 5) sfx("唰唰！", g.cx, g.bot + H * 0.06, H * 0.045, "#ff9a52", -0.12, Math.sin((lt - 3.8) / 1.2 * Math.PI));
    }
    // 心情小云：住在收信神经元里
    const mx = g.cx - g.tw * 0.5 < W * 0.12 ? g.cx + g.tw * 0.05 : g.cx - g.tw * 0.55, my = g.post + (H - g.post) * 0.5;
    const cleared = cur === 3 ? prog(10, 2.5) : 0;
    const mr = H * 0.07;
    sun(mx, my, mr * 0.55, cleared);
    cloud(mx - cleared * mr * 1.2, my + cleared * mr * 0.3, mr * (1 - cleared * 0.5), mix("#c9cfe0", "#ffffff", cleared), cleared > 0.5 ? null : -1, 1);
    rain(mx - mr * 0.8, mx + mr * 0.7, my + mr * 0.4, H, 8, 1 - cleared, "#8fb3dc", 9);
    text("心情", mx, my - mr * 1.5, fsz(0.03), C.soft);

    if (cur === 2) {
      chart(g);
      say("allhere", lt > 5.2 && lt < 10, g.base[1], g.siteY - cs * 3, g.cx + g.tw * 0.18, g.bot + H * 0.05, "我们都到齐啦！", "shout");
      say("stillrain", lt > 7.5, mx, my - mr * 0.6, W / H < 1.5 ? W * 0.27 : mx + W * 0.12, my - H * 0.02, "……可心情还是阴天", "think");
    } else if (cur === 3) {
      say("waiting", lt > 2 && lt < 6.3, g.extra[3], g.post - g.rs * 2, g.extra[3] - W * 0.04, g.post - H * 0.2, "信太少了，多开几扇门等等看！", "say");
      say("late", lt > 7.5 && lt < 11.5, g.base[1], g.siteY - cs * 3, g.cx + g.tw * 0.2, g.bot + H * 0.04, "久等啦，信来了～", "say");
      say("sunny", lt > 11.8, mx + mr * 0.5, my - mr * 0.3, mx + W * 0.2, my - H * 0.02, "放晴了！", "say");
      callout("up", lt > 3 && lt < 7, g.extra[1], g.post - g.rs * 0.8, g.extra[1] + W * 0.12, g.post + H * 0.14, "受体上调：门变多了");
      callout("down", lt > 8.5, g.extra[3], g.post - g.rs * 0.2, g.extra[3] - W * 0.06, g.post + H * 0.14, "几周里慢慢下调，回到平衡");
    }
    ctx.restore();
  }
  function chart(g) {
    const narrow = W / H < 1.5;
    const x0 = narrow ? W * 0.58 : W * 0.6, x1 = W * 0.97, y0 = H * 0.2, y1 = H * 0.93;
    ctx.save();
    const on = prog(0.5, 1);
    ctx.globalAlpha *= on;
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x0, y0, x1 - x0, y1 - y0, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.shadowColor = "transparent"; outline(2); ctx.stroke();
    const fs = fsz(0.034);
    text("用药以后……", (x0 + x1) / 2, y0 + fs * 1.3, fs, C.ink);
    const ax = x0 + (x1 - x0) * 0.1, ay = y1 - fs * 2.4, aw = (x1 - x0) * 0.82, ah = (ay - y0) * 0.66;
    outline(1.8); ctx.beginPath(); ctx.moveTo(ax, ay - ah - fs * 0.5); ctx.lineTo(ax, ay); ctx.lineTo(ax + aw, ay); ctx.stroke();
    const ticks = [["几小时", 0.12], ["几天", 0.45], ["几周", 0.85]];
    ticks.forEach((t) => text(t[0], ax + aw * t[1], ay + fs * 0.95, fs * 0.85, C.soft));
    const curve = (fn, p, color) => {
      ctx.strokeStyle = color; ctx.lineWidth = Math.max(3, H * 0.008); ctx.lineCap = "round";
      ctx.beginPath();
      for (let k = 0; k <= 40 * p; k++) { const t = k / 40, px = ax + aw * t, py = ay - ah * fn(t); if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
      ctx.stroke();
      const t = p, px = ax + aw * t, py = ay - ah * fn(t);
      if (p > 0.01) { ctx.beginPath(); ctx.arc(px, py, Math.max(4, H * 0.01), 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); outline(1.5); ctx.stroke(); }
      return { x: px, y: py };
    };
    const fA = (t) => 0.08 + 0.82 * (1 - Math.exp(-t * 14));
    const fB = (t) => 0.08 + 0.72 * ease((t - 0.5) / 0.45);
    const pA = prog(3.6, 2), pB = prog(5.5, 4.5);
    const eA = curve(fA, pA, "#ff9a52");
    const eB = curve(fB, pB, "#6fb9e0");
    ctx.restore();
    const fsL = fs * 0.9;
    if (pA > 0.1) text("单胺", eA.x - aw * 0.12, eA.y - fsL * 1.1, fsL, "#e07a2a", "center");
    if (pB > 0.6) text("心情", eB.x - aw * 0.02, eB.y + fsL * 1.2, fsL, "#3d8fbf", "center");
    callout("fastA", pA > 0.5 && lt < 9, ax + aw * 0.15, ay - ah * fA(0.15), ax + aw * 0.45, y0 + (y1 - y0) * 0.55, "几小时就升高");
    callout("slowB", pB > 0.8, ax + aw * 0.8, ay - ah * fB(0.8), ax + aw * 0.42, ay - ah * 0.45, "几周才好转");
  }

  // ---------- 第 5 幕：海马小树 ----------
  function branch(x, y, len, ang, depth, seed, life, leaves) {
    const x2 = x + Math.cos(ang) * len, y2 = y + Math.sin(ang) * len;
    const sway = Math.sin(time * 1.5 + seed) * 0.02 * (5 - depth);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, len * 0.16 + 1.8); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.strokeStyle = mix("#b8aca8", C.trunk, life); ctx.lineWidth = Math.max(1, len * 0.16);
    ctx.stroke();
    if (depth === 0) { leaves.push([x2, y2, seed]); return; }
    // 枝条的萎缩：没营养时，外层的细枝会缩短
    const shrink = depth <= 2 ? lerp(0.55, 1, life) : 1;
    const n = depth >= 3 ? 2 : 3;
    for (let k = 0; k < n; k++) {
      const spread = n === 2 ? (k ? 0.42 : -0.42) : (k - 1) * 0.5;
      branch(x2, y2, len * (0.7 + rnd(seed * 3 + k) * 0.12) * shrink, ang + spread + sway + (rnd(seed + k * 7) - 0.5) * 0.3, depth - 1, seed * 3 + k + 1, life, leaves);
    }
  }
  function can(x, y, s, dir) { // 小喷壶，dir = -1 时壶嘴朝左
    const d = dir || 1, q = 0.35;
    ctx.save(); ctx.translate(x, y); ctx.scale(d, 1); ctx.rotate(q);
    rrect(-s * 0.5, -s * 0.35, s, s * 0.7, s * 0.15); ctx.fillStyle = "#bfe3f5"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(s * 0.45, -s * 0.05); ctx.lineTo(s * 1.1, -s * 0.45); ctx.lineTo(s * 1.15, -s * 0.35); ctx.lineTo(s * 0.5, s * 0.1); ctx.closePath(); ctx.fillStyle = "#bfe3f5"; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(-s * 0.1, -s * 0.5, s * 0.28, Math.PI, 0); ctx.stroke();
    ctx.restore();
    // 壶嘴的位置（先转再镜像）
    const lx = s * 1.12, ly = -s * 0.4;
    const rx = lx * Math.cos(q) - ly * Math.sin(q), ry = lx * Math.sin(q) + ly * Math.cos(q);
    return { x: x + d * rx, y: y + ry };
  }
  function drop(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, s * 2.2, C.bdnf, 0.8);
    ctx.beginPath(); ctx.moveTo(x, y - s); ctx.quadraticCurveTo(x + s * 0.8, y + s * 0.2, x, y + s * 0.6); ctx.quadraticCurveTo(x - s * 0.8, y + s * 0.2, x, y - s);
    ctx.fillStyle = C.bdnf; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.restore();
    sparkle(x + s * 0.7, y - s * 0.6, s * 0.5, a * (0.5 + 0.5 * Math.sin(time * 6 + x)));
  }
  function treeView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const heal = prog(6.5, 5); // 0 枯萎中 → 1 恢复
    const wither = prog(0.5, 4.5);
    const life = clamp(1 - wither * 0.8 + heal * 0.8, 0, 1);
    Anima.wash(mix("#e3e7f0", "#fff6ea", heal), mix("#eef0f7", "#fdeef3", heal));
    if (heal > 0.1) Anima.bokeh(6, "#ffe3a8", heal, 13);
    const gy = H * 0.86, tx = W * 0.47;
    ctx.fillStyle = mix("#d5dcd6", "#cfe8c6", heal); ctx.fillRect(0, gy, W, H - gy);
    outline(1.6); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    // 小树：树枝就像神经元的树突
    const leaves = [];
    const L = H * 0.17;
    branch(tx, gy, L, -Math.PI / 2, 4, 1, life, leaves);
    leaves.forEach((l, i) => {
      if (rnd(l[2]) > life * 1.05) return;
      const s = H * 0.024 * (0.8 + rnd(l[2] + 5) * 0.4);
      ctx.save(); ctx.translate(l[0], l[1]); ctx.rotate(rnd(l[2] + 2) * 6 + Math.sin(time * 2 + i) * 0.1);
      ctx.beginPath(); ctx.ellipse(0, 0, s, s * 0.6, 0, 0, Math.PI * 2);
      ctx.fillStyle = mix("#c8c6a8", i % 5 === 0 ? "#f9c5d1" : C.leaf, life); ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    });
    // 飘落的叶子（枯萎阶段）
    if (heal < 0.5) {
      for (let k = 0; k < 7; k++) {
        const t = ((lt * 0.25) + k / 7) % 1;
        const lx = tx + (rnd(k + 40) - 0.5) * W * 0.3 + Math.sin(t * 8 + k) * H * 0.03, ly = lerp(H * 0.35, gy, t);
        ctx.save(); ctx.globalAlpha *= wither * (1 - heal * 2) * Math.sin(t * Math.PI);
        ctx.translate(lx, ly); ctx.rotate(t * 6 + k);
        ctx.beginPath(); ctx.ellipse(0, 0, H * 0.018, H * 0.011, 0, 0, Math.PI * 2); ctx.fillStyle = "#d8c89a"; ctx.fill(); outline(1); ctx.stroke();
        ctx.restore();
      }
    }
    // 树干上的名牌和小脸
    face(tx, gy - L * 0.62, H * 0.045, life > 0.6 ? 1 : -1);
    const fsN = fsz(0.03);
    ctx.font = `${fsN}px ${Anima.ROUND}`;
    const nw = ctx.measureText("海马").width + fsN;
    rrect(tx - nw / 2, gy - L * 0.2 - fsN * 0.7, nw, fsN * 1.4, fsN * 0.3); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
    text("海马", tx, gy - L * 0.2 + 1, fsN, C.ink);
    // 压力云：皮质醇的灰雨
    const cr = Math.min(H * 0.09, W * 0.075), cx = W * 0.2, cy = H * 0.3;
    const cloudA = 1 - heal;
    cloud(cx - heal * W * 0.2, cy, cr, "#b9bdd0", -1, cloudA);
    if (cloudA > 0.05) text("压力", cx - heal * W * 0.2 - cr * 0.3, cy - cr * 0.35, fsz(0.03), "#6d7190");
    for (let k = 0; k < 6; k++) { // 皮质醇雨滴（灰紫色）
      const t = ((time * 0.6) + k / 6) % 1;
      const x = lerp(cx - cr * 0.3, tx - W * 0.08, t), y = lerp(cy + cr * 0.6, H * 0.6, t);
      ctx.save(); ctx.globalAlpha *= cloudA * wither * Math.sin(t * Math.PI);
      Anima.ion(x + rnd(k) * cr * 0.6, y, H * 0.016, "", C.cortisol);
      ctx.restore();
    }
    // 太阳 + 浇营养液的居民（恢复阶段）
    sun(W * 0.22, H * 0.28, cr * 0.7, heal);
    const s = H * 0.055, px = W * 0.72, pin = prog(5.5, 1.5);
    if (pin > 0.02) {
      const x = lerp(W * 1.05, px, pin);
      chara(x, gy, s, { who: "neuron", arms: "carry", eyes: "happy", mouth: "grin", dir: -1, walk: pin < 1 ? time * 9 : null, alpha: clamp(pin * 3, 0, 1) });
      const sp = can(x - s * 0.1, gy - s * 3.45, s * 1.05, -1);
      if (pin >= 1) {
        for (let k = 0; k < 7; k++) {
          const t = ((time * 0.45) + k / 7) % 1;
          const dx = lerp(sp.x, tx + W * 0.04 + (rnd(k + 3) - 0.5) * W * 0.12, t), dy = lerp(sp.y, H * 0.42 + rnd(k) * H * 0.2, t) - Math.sin(t * Math.PI) * H * 0.08;
          drop(dx, dy, H * 0.021, Math.sin(t * Math.PI));
        }
      }
    }
    if (heal > 0.4) sparkles(tx, H * 0.45, H * 0.2, 6, heal, 5);
    callout("cort", lt > 1.5 && lt < 6.5, cx + cr * 0.75, cy + cr * 0.45, cx + W * 0.04, H * 0.66, "皮质醇（应激激素）偏高");
    callout("bdnf", lt > 7.5, lerp(W * 0.62, tx + W * 0.04, 0.5), H * 0.5, W * 0.78, H * 0.26, "BDNF：神经元的营养液");
    say("thirsty", lt > 2.5 && lt < 6.3, tx + H * 0.05, H * 0.4, tx + W * 0.2, H * 0.36, "好渴……枝叶都缩起来了", "think");
    say("water", lt > 8.5, px, gy - s * 3.2, W * 0.82, H * 0.52, "给你浇点营养液～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 3) { v1 = lt < 7 ? "上调 ↑" : "慢慢下调 ↓"; v2 = lt < 6.5 ? "用药前" : "第 " + week() + " 周"; }
    if (cur === 4 && lt > 7) { v1 = "回落"; v2 = "回升 ↑"; }
    pill(14, 12, c.pill[0], v1, "#6fa3d6", false);
    pill(W - 14, 12, c.pill2[0], v2, C.rose, true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.town > 0.02) townView(S.town);
    if (S.brain > 0.02) brainView(S.brain);
    if (S.syn > 0.02) synView(S.syn);
    if (S.tree > 0.02) treeView(S.tree);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#9cc3e6",
    titleCard: { lines: ["心情的", "天气预报"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
