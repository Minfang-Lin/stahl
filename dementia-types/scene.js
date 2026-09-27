Anima.register("dementia-types", {
    "title": "不止阿尔茨海默：其他痴呆",
    "tag": "痴呆",
    "headline": "痴呆不只一种：【分清类型】很重要",
    "lede": "记性变差，不一定都是阿尔茨海默病。小血管堵了、神经元里长出路易体、额叶和颞叶先受累，都会引起痴呆。它们的早期表现和用药注意各不相同，尽早查清楚，才能照顾得更好。",
    "summary": "血管性痴呆的阶梯式下降、路易体痴呆和帕金森病痴呆、对抗精神病药特别敏感、额颞叶痴呆，以及混合型和可逆原因。",
    "chapter": "对应 Stahl《精神药理学精要》第 12 章 · 痴呆的类型",
    "footer": "家人出现记性、性格或动作的明显变化，请尽早到记忆门诊、神经内科或精神科评估；路易体痴呆患者用任何镇静或抗精神病药前都要先问医生。",
    "canvasLabel": "拟人化的脑内小镇里，不同类型的痴呆各自出了不同的问题的动画",
    "regions": ["pfc", "hippo"],
    "parts": ["dementia"],
    "cast": ["ACh", "DA", "drug"],
    "color": "#b9a6e8"
  }, () => {
  const CH = [
    { title: "痴呆不止一种", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["最常见", "阿尔茨海默病"], pill2: ["其他", "好几种"],
      text: "说起痴呆，很多人只想到阿尔茨海默病。它确实最常见，但不是唯一的一种：小血管出了问题，会引起血管性痴呆；神经元里长出路易体，会引起路易体痴呆和帕金森病痴呆；额叶和颞叶先受累，是额颞叶痴呆。它们的早期表现、病程和用药注意都不一样，而且常常不止一种同时存在。",
      fact: "痴呆是一组症状，背后可能是不同的疾病，也常常几种同时存在" },
    { title: "血管性痴呆：水管堵了", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["原因", "小血管堵塞"], pill2: ["病程", "阶梯式下降"],
      text: "脑子里的血管像给家家户户送水送饭的水管。血管性痴呆，是因为小血管变窄、堵住，或者发生了一次次小中风，一片片神经元“断了粮”。它常常呈“阶梯式”下降：一次小中风后明显差了一截，稳一阵，又下一个台阶。所以管好血管最重要：控制血压、血糖、血脂，还要戒烟。",
      fact: "血管性痴呆常呈阶梯式下降；保护血管，就是保护大脑" },
    { title: "路易体痴呆：忽好忽坏", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["病理", "路易体"], pill2: ["特点", "波动和幻觉"],
      text: "路易体痴呆的神经元里，会堆起一种叫 α-突触核蛋白的团块，叫路易体。它有几个很特别的表现：清醒程度忽好忽坏，今天很清楚、明天又糊涂；常看到很生动的幻觉，比如屋里有小动物或小人；动作变慢、变僵，像帕金森病；做梦时大喊、拳打脚踢，叫快速眼动睡眠行为障碍，有时比记忆问题早很多年出现。",
      fact: "认知波动、视幻觉、帕金森样动作、快速眼动睡眠行为障碍是路易体痴呆的核心表现" },
    { title: "同一家族，都怕抗精神病药", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["同一家族", "路易体"], pill2: ["用药", "非常谨慎"],
      text: "帕金森病痴呆和路易体痴呆是一家人，脑子里都有路易体，区别主要在先后：先有多年的帕金森病动作症状，后来才出现痴呆，叫帕金森病痴呆；痴呆先出现，或和动作症状差不多同时出现，更像路易体痴呆。这一家子都特别怕抗精神病药：本来就不多的多巴胺信号再被挡住，可能出现严重的反应，用药必须非常谨慎。",
      fact: "路易体痴呆和帕金森病痴呆对抗精神病药特别敏感，千万不要自行用药" },
    { title: "额颞叶痴呆：先变的是性格", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["发病", "常较年轻"], pill2: ["先出现", "性格、语言变化"],
      text: "额颞叶痴呆常在比较年轻的时候发病，不少人五六十岁甚至更早。它先损伤大脑前面的额叶和两侧的颞叶，最先变的往往是性格和行为：变得冲动、不顾场合、对家人冷淡；也有人先是说话越来越费劲，叫不出东西的名字。记忆一开始可能还不错，所以常被误以为只是“脾气变了”。",
      fact: "额颞叶痴呆常较早发病，先出现性格行为改变或语言问题，记忆早期可能相对保留" },
    { title: "混合型常见，尽早查清楚", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["混合型", "很常见"], pill2: ["就医", "越早越好"],
      text: "现实里，很多老人不止一种病变，比如阿尔茨海默病加上血管问题，叫混合型。所以发现记性、性格或动作变了，最好尽早去记忆门诊、神经内科或精神科：医生会弄清是哪一型，因为治疗和用药注意各不相同；还会排除一些能治好的原因，比如甲状腺功能低下、维生素 B12 缺乏、抑郁，它们也会让人看起来像痴呆。",
      fact: "尽早就医：分清类型，并排除甲状腺、维生素 B12 缺乏、抑郁等可逆原因" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    road: "#f4e6d4", roof: "#f5a9b8", wall: "#fff6ea", pipe: "#f7a8b4", clot: "#bdb2c4", lewy: "#f5a3c7",
    front: "#ffcfa8", temp: "#bfe3f5", brain: "#ffe3ea",
  });
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
  function chip(t, x, y, fs, color, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.7 + 0.3 * ease(a);
    ctx.translate(x, y); ctx.scale(pop, pop);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.6, h = fs * 1.7;
    ctx.shadowColor = "rgba(120,80,100,0.16)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2;
    rrect(-w / 2, -h / 2, w, h, h / 2); ctx.fillStyle = color; ctx.fill();
    ctx.shadowColor = "transparent"; outline(1.6); ctx.stroke();
    Anima.heart(-w / 2 + fs * 0.62, 0, fs * 0.28, C.rose);
    text(t, fs * 0.25, 1, fs, C.ink);
    ctx.restore();
  }
  function blobPath(x, y, r, seed, wob) {
    const n = 10, pts = [];
    for (let i = 0; i < n; i++) {
      const q = i / n * Math.PI * 2, rr = r * (0.8 + rnd(seed + i) * 0.34) + Math.sin(time * 1.3 + i * 2 + seed) * r * (wob || 0.03);
      pts.push([x + Math.cos(q) * rr, y + Math.sin(q) * rr * 0.86]);
    }
    ctx.beginPath();
    ctx.moveTo((pts[0][0] + pts[n - 1][0]) / 2, (pts[0][1] + pts[n - 1][1]) / 2);
    for (let i = 0; i < n; i++) {
      const p = pts[i], q = pts[(i + 1) % n];
      ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
    }
    ctx.closePath();
  }
  function house(x, y, w, h, roof, lit) {
    ctx.save();
    ctx.fillStyle = "rgba(90,70,80,0.1)"; ctx.beginPath(); ctx.ellipse(x, y + h * 0.03, w * 0.6, h * 0.07, 0, 0, Math.PI * 2); ctx.fill();
    rrect(x - w / 2, y - h * 0.68, w, h * 0.68, h * 0.06); ctx.fillStyle = mix("#e9e4ea", C.wall, clamp(lit + 0.3, 0, 1)); ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - w * 0.62, y - h * 0.64); ctx.lineTo(x, y - h); ctx.lineTo(x + w * 0.62, y - h * 0.64); ctx.closePath();
    ctx.fillStyle = mix("#cfc6d4", roof, clamp(lit + 0.3, 0, 1)); ctx.fill(); outline(2); ctx.stroke();
    rrect(x - w * 0.12, y - h * 0.34, w * 0.24, h * 0.34, w * 0.1); ctx.fillStyle = "#e8c29a"; ctx.fill(); outline(1.6); ctx.stroke();
    for (const d of [-1, 1]) {
      const wx = x + d * w * 0.3, wy = y - h * 0.46;
      if (lit > 0.05) glow(wx, wy, h * 0.18, C.gold, lit);
      rrect(wx - w * 0.1, wy - h * 0.08, w * 0.2, h * 0.16, 3); ctx.fillStyle = mix("#c9c3d0", "#fff1a8", lit); ctx.fill(); outline(1.4); ctx.stroke();
    }
    ctx.restore();
  }
  function lamp(x, y, r, lit) {
    ctx.save();
    if (lit > 0.05) glow(x, y, r * 3, C.gold, lit);
    rrect(x - r * 0.4, y - r * 1.35, r * 0.8, r * 0.5, 3); ctx.fillStyle = "#cfc6d4"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#e6e2ea", "#fff1a8", lit); ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y + r * 0.1, r * 0.55, lit > 0.5 ? 1 : -0.5, lit > 0.5);
    ctx.restore();
  }
  function arrow(x0, y0, x1, y1, color, w) {
    ctx.save();
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = w; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    const q = Math.atan2(y1 - y0, x1 - x0), s = w * 3;
    ctx.beginPath(); ctx.moveTo(x1 + Math.cos(q) * s * 0.4, y1 + Math.sin(q) * s * 0.4);
    ctx.lineTo(x1 + Math.cos(q + 2.5) * s, y1 + Math.sin(q + 2.5) * s); ctx.lineTo(x1 + Math.cos(q - 2.5) * s, y1 + Math.sin(q - 2.5) * s); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function tick(x, y, r, p) {
    if (p < 0.02) return;
    ctx.save();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#ffffff", C.mint, p); ctx.fill(); outline(1.5); ctx.stroke();
    ctx.strokeStyle = C.mintDeep; ctx.lineWidth = Math.max(2, r * 0.28); ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(x - r * 0.45, y); ctx.lineTo(x - r * 0.1, y + r * 0.38 * clamp(p * 2, 0, 1));
    if (p > 0.5) ctx.lineTo(x - r * 0.1 + r * 0.6 * (p - 0.5) * 2, y + r * 0.38 - r * 0.8 * (p - 0.5) * 2);
    ctx.stroke();
    ctx.restore();
  }
  const ELDER = { hair: "#e6e0ea", cloth: "#d9d0f5", eye: "#8a6a7a", style: "bun", hat: "none", glasses: true, ahoge: false };
  const GRANDPA = { hair: "#d8d2d6", cloth: "#cfe0f5", eye: "#6a5a6a", style: "short", hat: "none", glasses: true, ahoge: false };
  const FAMILY = { hair: "#a8765a", cloth: "#ffd3dc", eye: "#8a5a3e", style: "pony", hat: "none" };
  const MID = { hair: "#5a4a52", cloth: "#cfe8d8", eye: "#4a3a42", style: "short", hat: "none" };
  const DOC = { hair: "#6f8fb8", cloth: "#ffffff", eye: "#3e6a8a", style: "short", hat: "none", glasses: true };
  function ground(y) {
    ctx.fillStyle = "#f7e4d6"; ctx.fillRect(0, y, W, H - y);
    ctx.strokeStyle = alpha(C.line, 0.35); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // ---------- 第 1 幕：路口的指路牌 ----------
  function signView(a) {
    const here = cur === 0;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf6ff", "#fdeef3");
    Anima.bokeh(7, "#e3dbff", 0.8, 12);
    Anima.petals(8, 0.5, 33);
    const gy = Y(0.9);
    ground(gy);
    const hs = Math.min(H * 0.16, W * 0.12);
    house(W * 0.08, gy, hs * 0.8, hs * 0.85, "#f7b8d2", 0.6);
    house(W * 0.93, gy, hs * 0.8, hs * 0.85, "#bfe3f5", 0.6);
    // 指路牌
    const px = W * 0.5, py0 = Y(0.04);
    rrect(px - H * 0.009, py0, H * 0.018, gy - py0, 3); ctx.fillStyle = "#d9b48f"; ctx.fill(); outline(1.6); ctx.stroke();
    const names = ["阿尔茨海默病", "血管性痴呆", "路易体痴呆", "额颞叶痴呆", "混合型"];
    const cols = ["#ffd3dc", "#ffd9c2", "#f5d7ee", "#fff1b8", "#ddd5fa"];
    const fs = fsS() * (narrow() ? 0.95 : 1.05);
    const boards = [];
    names.forEach((n, i) => {
      const p = prog(0.8 + i * 1.2, 0.7);
      const d = i % 2 ? -1 : 1;
      const y = Y(0.1 + i * 0.13);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const w = ctx.measureText(n).width + fs * 2.2, h = fs * 1.7;
      boards.push({ x: px + d * w * 0.5, y, w });
      if (p < 0.02) return;
      ctx.save(); ctx.globalAlpha *= p;
      ctx.translate(px, y); ctx.rotate(d * 0.04 + Math.sin(time * 1.5 + i) * 0.015); ctx.scale(d * (0.6 + 0.4 * p), 0.6 + 0.4 * p);
      ctx.beginPath(); ctx.moveTo(-fs * 0.3, -h / 2); ctx.lineTo(w - h * 0.45, -h / 2); ctx.lineTo(w, 0); ctx.lineTo(w - h * 0.45, h / 2); ctx.lineTo(-fs * 0.3, h / 2); ctx.closePath();
      ctx.fillStyle = cols[i]; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.scale(d, 1);
      text(n, d * (w * 0.5 - fs * 0.25), 1, fs, C.ink);
      ctx.restore();
    });
    // 奶奶、家人和乙酰胆碱邮差
    const s = Math.min(H * 0.068, W * 0.05);
    const ex = W * 0.24, fx = W * 0.13;
    const know = lt > 7.5;
    chara(fx, gy, s * 0.95, Object.assign({}, FAMILY, { arms: "hug", eyes: know ? "happy" : "open", mouth: know ? "smile" : "wavy", brow: know ? null : "worry", dir: 1 }));
    chara(ex, gy, s, Object.assign({}, ELDER, { arms: "down", eyes: know ? "happy" : "open", mouth: "smile", dir: 1, look: know ? 0 : Math.sin(time * 1.4) }));
    if (!know && lt > 1.5) emote("?", ex + s * 1.1, gy - s * 3.4, s * 0.6);
    const ax = lerp(W + s * 2, W * 0.76, prog(4.5, 1.6));
    chara(ax, gy, s, { who: "ACh", item: prog(4.5, 1.6) < 1 ? "letter" : null, arms: prog(4.5, 1.6) < 1 ? "hold" : "point", eyes: "happy", mouth: "grin", walk: prog(4.5, 1.6) < 1 ? time * 9 : null, dir: -1 });
    const b0 = boards[0], b4 = boards[4];
    callout("t-ad", here && lt > 2 && lt < 7.4, b0.x + b0.w * 0.3, b0.y, W * 0.78, narrow() ? Y(0.8) : Y(0.2), "最常见，但不是唯一");
    callout("t-mix", here && lt > 7 && !narrow(), b4.x - b4.w * 0.35, b4.y + fs * 0.8, W * 0.3, narrow() ? Y(0.44) : Y(0.6), "常常几种同时存在");
    say("t-q", here && lt > 2 && lt < 7.4, ex, gy - s * 3.2, W * 0.2, Y(0.3), "记性差，就是阿尔茨海默病吧？", "think");
    say("t-a", here && lt > 7.6, ax, gy - s * 3.2, W * 0.78, narrow() ? Y(0.49) : Y(0.5), narrow() ? "原因常常混在一起！" : "原因可不止一种哦！", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：血管性痴呆 ----------
  function vascView(a) {
    const here = cur === 1;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6f2", "#fdeef3");
    Anima.bokeh(6, "#ffd1dc", 0.8, 21);
    const nw = narrow();
    const x0 = W * 0.03, x1 = W * (nw ? 0.6 : 0.62), gy = Y(0.93);
    ctx.fillStyle = "#f7e4d6"; ctx.fillRect(x0, gy, x1 - x0, H - gy);
    const hs = Math.min((H - Anima.topSafe()) * 0.34, (x1 - x0) * 0.2);
    const hx = [0, 1, 2, 3].map((i) => lerp(x0 + (x1 - x0) * 0.13, x1 - (x1 - x0) * 0.13, i / 3));
    const pipeY = Y(0.12), pw = Math.max(8, H * 0.03);
    const ev = [2, 5, 8], evHouse = [1, 3, 0];
    const blocked = [0, 0, 0, 0], blockT = [99, 99, 99, 99];
    ev.forEach((t0, k) => { blocked[evHouse[k]] = prog(t0, 0.5); blockT[evHouse[k]] = t0; });
    // 水管：主管 + 往下通到每户的支管
    const tube = (pts, w, col) => {
      for (const [ww, cc] of [[w, C.line], [w * 0.72, col]]) {
        ctx.strokeStyle = cc; ctx.lineWidth = ww; ctx.lineCap = "round"; ctx.lineJoin = "round";
        ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
      }
    };
    tube([[x0 - pw, pipeY], [x1 - (x1 - x0) * 0.05, pipeY]], pw * 1.3, C.pipe);
    const top = (i) => gy - hs * 1.02;
    hx.forEach((x, i) => tube([[x, pipeY], [x, top(i)]], pw, C.pipe));
    // 流动的小血球
    const cellR = pw * 0.28;
    for (let k = 0; k < 10; k++) {
      const t = (time * 0.18 + k / 10) % 1;
      const x = lerp(x0, x1 - (x1 - x0) * 0.06, t);
      ctx.beginPath(); ctx.arc(x, pipeY, cellR, 0, Math.PI * 2); ctx.fillStyle = "#e8637a"; ctx.fill();
    }
    hx.forEach((x, i) => {
      const clotY = lerp(pipeY, top(i), 0.55);
      for (let k = 0; k < 3; k++) {
        let t = (time * 0.35 + k / 3 + i * 0.13) % 1;
        const y = lerp(pipeY, top(i), t);
        if (blocked[i] > 0.5 && y > clotY - pw * 0.6) continue;
        ctx.beginPath(); ctx.arc(x, y, cellR, 0, Math.PI * 2); ctx.fillStyle = "#e8637a"; ctx.fill();
      }
    });
    // 房子：堵了的那户慢慢熄灯
    hx.forEach((x, i) => {
      const lit = 1 - prog(blockT[i] + 0.5, 0.9) * 0.85;
      house(x, gy, hs * 0.85, hs, ["#f5a9b8", "#bfe3f5", "#bfe8d6", "#ffe0a8"][i], lit);
      if (lit < 0.4) emote("gloom", x, gy - hs * 1.12, hs * 0.16);
      if (blocked[i] > 0.02) {
        const clotY = lerp(pipeY, top(i), 0.55);
        blobPath(x, clotY, pw * 0.95 * blocked[i], i * 7, 0.05);
        ctx.fillStyle = C.clot; ctx.fill(); outline(1.4); ctx.stroke();
        if (blocked[i] > 0.9) face(x, clotY + pw * 0.1, pw * 0.45, -0.6, false);
        const t0 = blockT[i];
        if (lt > t0 && lt < t0 + 0.8) { sfx("咚！", x + pw * 2, clotY - pw, H * 0.045, C.bad, -0.15, 1 - (lt - t0) / 0.8); Anima.speedLines(x, clotY, pw * 3, 16, 0.3); }
      }
    });
    // 右边：能力随时间的曲线
    const gx0 = W * (nw ? 0.68 : 0.7), gx1 = W * 0.96, gy0 = Y(0.08), gy1 = Y(nw ? 0.62 : 0.66);
    rrect(gx0 - W * 0.02, gy0 - H * 0.03, gx1 - gx0 + W * 0.035, gy1 - gy0 + H * 0.08, 14); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1.5); ctx.stroke();
    outline(1.8); ctx.beginPath(); ctx.moveTo(gx0, gy0); ctx.lineTo(gx0, gy1); ctx.lineTo(gx1, gy1); ctx.stroke();
    text("能力", gx0 + fsS() * 1.3, gy0 + fsS() * 0.2, fsS() * 0.85, C.soft);
    text("时间 →", gx1 - fsS() * 1.8, gy1 + fsS() * 0.9, fsS() * 0.85, C.soft);
    const T = 11.5, gxT = (t) => lerp(gx0 + 4, gx1 - 4, clamp(t / T, 0, 1)), lv = (v) => lerp(gy1 - 4, gy0 + fsS(), v);
    // 虚线：阿尔茨海默病多是慢慢往下滑
    ctx.save(); ctx.setLineDash([5, 5]); ctx.strokeStyle = alpha(C.lavDeep, 0.7); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(gxT(0), lv(0.9)); ctx.quadraticCurveTo(gxT(T * 0.5), lv(0.8), gxT(T), lv(0.38)); ctx.stroke(); ctx.restore();
    // 实线：一级一级往下掉
    const tNow = Math.min(lt, T);
    ctx.strokeStyle = C.bad; ctx.lineWidth = 3.2; ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(gxT(0), lv(0.9));
    let v = 0.9;
    for (let k = 0; k < ev.length; k++) {
      if (tNow < ev[k]) break;
      ctx.lineTo(gxT(ev[k]), lv(v));
      v -= 0.17 * prog(ev[k], 0.4);
      ctx.lineTo(gxT(ev[k]) + 2, lv(v));
    }
    ctx.lineTo(gxT(tNow), lv(v)); ctx.stroke();
    ctx.beginPath(); ctx.arc(gxT(tNow), lv(v), 4, 0, Math.PI * 2); ctx.fillStyle = C.bad; ctx.fill();
    text(nw ? "虚线：阿尔茨海默" : "- - 阿尔茨海默病：多是慢慢滑", (gx0 + gx1) / 2, gy1 + fsS() * (nw ? 2 : 2.3), fsS() * (nw ? 0.72 : 0.8), C.lavDeep);
    // 守护血管的四件事
    const tips = ["控制血压", "控制血糖", "控制血脂", "戒烟"];
    const tfs = fsS() * (nw ? 0.95 : 1.05);
    plate("守护血管", (x0 + x1) / 2, Y(0.25), tfs, "#ffffff", prog(9.4, 0.6));
    tips.forEach((t, k) => {
      const col = k % 2, row = Math.floor(k / 2);
      chip(t, lerp(x0, x1, col ? 0.72 : 0.28), Y(0.36 + row * 0.13), tfs, ["#fff1b8", "#e1f5ec", "#e3f3fc", "#ffe1ee"][k], prog(9.6 + k * 0.5, 0.6));
    });
    const c0 = { x: hx[1], y: lerp(pipeY, top(1), 0.55) };
    callout("v-clot", here && lt > 2.4 && lt < 9.2, c0.x + pw, c0.y, nw ? W * 0.3 : W * 0.38, Y(nw ? 0.56 : 0.5), "小血管堵住，一次次小中风");
    callout("v-step", here && lt > 5.6, gxT(ev[1]) + 3, lv(0.63), gx0 + (gx1 - gx0) * 0.4, Y(nw ? 0.5 : 0.52), "阶梯式下降");
    say("v-hungry", here && lt > 3 && lt < 9, hx[1], gy - hs * 1.2, nw ? W * 0.3 : W * 0.34, Y(nw ? 0.3 : 0.36), "饭……送不过来了……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：路易体痴呆的四格漫画 ----------
  function cat(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = "#e8dcf5"; outline(1.4);
    ctx.beginPath(); ctx.ellipse(x, y - s * 0.55, s * 0.75, s * 0.5, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + s * 0.7, y - s * 1.15, s * 0.45, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.moveTo(x + s * 0.7 + d * s * 0.35, y - s * 1.35); ctx.lineTo(x + s * 0.7 + d * s * 0.3, y - s * 1.75); ctx.lineTo(x + s * 0.7 + d * s * 0.05, y - s * 1.52); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(x - s * 0.7, y - s * 0.6); ctx.quadraticCurveTo(x - s * 1.3, y - s * 1.2 + Math.sin(time * 3) * s * 0.2, x - s * 1.1, y - s * 1.5); ctx.stroke();
    face(x + s * 0.72, y - s * 1.1, s * 0.3, 1, false);
    ctx.restore();
  }
  function panel(x, y, w, h, title, col, p) {
    ctx.save(); ctx.globalAlpha *= p;
    ctx.translate(x + w / 2, y + h / 2); ctx.scale(0.9 + 0.1 * p, 0.9 + 0.1 * p); ctx.translate(-x - w / 2, -y - h / 2);
    ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    rrect(x, y, w, h, 12); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.shadowColor = "transparent"; outline(2); ctx.stroke();
    ctx.save(); rrect(x, y, w, h, 12); ctx.clip(); Anima.tone(x, y + h * 0.8, w, h * 0.2, alpha(col, 0.9), 7, 1.3); ctx.restore();
    ctx.restore();
  }
  function lewyView(a) {
    const here = cur === 2;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf6ff", "#fff0f6");
    Anima.bokeh(6, "#f5d7ee", 0.8, 44);
    const top = Y(0.02), gap = W * 0.018;
    const pw = (W - gap * 3) / 2, ph = (H - top - gap * 1.6) / 2;
    const P = [[gap, top], [gap * 2 + pw, top], [gap, top + ph + gap * 0.6], [gap * 2 + pw, top + ph + gap * 0.6]].map((p) => ({ x: p[0], y: p[1], w: pw, h: ph }));
    const titles = ["清醒程度忽好忽坏", "生动的视幻觉", "动作慢、僵、手抖", "做梦时拳打脚踢"];
    const cols = ["#fff1b8", "#f5d7ee", "#e3f3fc", "#ddd5fa"];
    const tIn = [0.5, 3.2, 6, 8.6];
    const cs = Math.min(ph * 0.17, pw * 0.08);
    const fs = fsS() * (narrow() ? 0.9 : 1);
    let hallu = null, sleeper = null;
    P.forEach((q, i) => {
      const p = prog(tIn[i], 0.6);
      if (p < 0.02) return;
      panel(q.x, q.y, q.w, q.h, titles[i], cols[i], p);
      ctx.save(); ctx.globalAlpha *= p;
      ctx.save(); rrect(q.x, q.y, q.w, q.h, 12); ctx.clip();
      const fy = q.y + q.h * 0.9;
      if (i === 0) {
        const lit = 0.5 + 0.5 * Math.sin(time * 1.6);
        const lx = q.x + q.w * 0.62, ly = q.y + q.h * 0.42;
        lamp(lx, ly, Math.min(q.h * 0.12, q.w * 0.07), lit);
        ctx.strokeStyle = C.line; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(lx, q.y); ctx.lineTo(lx, ly - q.h * 0.16); ctx.stroke();
        chara(q.x + q.w * 0.3, fy, cs, Object.assign({}, GRANDPA, { eyes: lit > 0.5 ? "happy" : "sleepy", mouth: lit > 0.5 ? "grin" : "wavy", arms: lit > 0.5 ? "wave" : "down", dir: 1 }));
        if (lit < 0.35) emote("?", q.x + q.w * 0.3 + cs, fy - cs * 3.3, cs * 0.55);
        text(lit > 0.5 ? "清楚" : "迷糊", lx + q.w * 0.2, ly, fs * 0.95, lit > 0.5 ? C.warn : C.soft);
      } else if (i === 1) {
        const ex = q.x + q.w * 0.25;
        chara(ex, fy, cs, Object.assign({}, GRANDPA, { eyes: "wide", mouth: "o", arms: "point", dir: 1 }));
        hallu = { x: ex, y: fy - cs * 3.1 };
        const g = 0.35 + 0.15 * Math.sin(time * 2);
        cat(q.x + q.w * 0.62, fy, cs * 1.1, g);
        chara(q.x + q.w * 0.84, fy - q.h * 0.02 + Math.sin(time * 2) * 2, cs * 0.6, { who: "neuron", alpha: g, eyes: "happy", mouth: "cat", shadow: false, arms: "wave" });
        sparkles(q.x + q.w * 0.72, fy - cs * 2, cs * 2, 3, 0.7, 5);
      } else if (i === 2) {
        const wx = q.x + q.w * (0.2 + ((time * 0.03) % 0.6));
        chara(wx, fy, cs, Object.assign({}, GRANDPA, { eyes: "open", mouth: "flat", arms: "down", walk: time * 2.2, dir: 1, brow: "worry" }));
        const hx = wx + cs * 0.8, hy = fy - cs * 0.9;
        ctx.strokeStyle = C.line; ctx.lineWidth = 1.3;
        for (let k = 0; k < 3; k++) { const o = (k - 1) * cs * 0.25; ctx.beginPath(); ctx.moveTo(hx + cs * 0.3, hy + o); ctx.lineTo(hx + cs * 0.55 + Math.sin(time * 30 + k) * 1.5, hy + o); ctx.stroke(); }
        // 小碎步的脚印
        for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.ellipse(wx - cs * (1 + k * 0.5), fy + cs * 0.1, cs * 0.14, cs * 0.07, 0, 0, Math.PI * 2); ctx.fillStyle = alpha(C.line, 0.25 * (1 - k / 4)); ctx.fill(); }
        emote("sweat", wx + cs * 1.1, fy - cs * 3, cs * 0.5);
      } else {
        // 床上睡觉：把人横过来画
        const bx = q.x + q.w * 0.14, bw = q.w * 0.66, by = fy - q.h * 0.12;
        rrect(bx, by, bw, q.h * 0.12, 6); ctx.fillStyle = "#e9d8c4"; ctx.fill(); outline(1.5); ctx.stroke();
        rrect(bx - q.w * 0.02, by - q.h * 0.18, q.w * 0.03, q.h * 0.3, 3); ctx.fillStyle = "#d9b48f"; ctx.fill(); ctx.stroke();
        const punch = Math.sin(time * 5) > 0;
        const headX = bx + cs * 1.3, footX = headX + cs * 2.1;
        rrect(bx + cs * 0.1, by - cs * 0.5, cs * 1.5, cs * 0.5, cs * 0.25); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.2); ctx.stroke();
        ctx.save(); ctx.translate(footX, by - cs * 0.75); ctx.rotate(-Math.PI / 2);
        chara(0, 0, cs, Object.assign({}, GRANDPA, { eyes: "closed", mouth: "open", arms: punch ? "fist" : "up", shadow: false, bob: 0 }));
        ctx.restore();
        sleeper = { x: headX, y: by - cs * 1.4 };
        rrect(headX + cs * 1.05, by - cs * 1.25, bx + bw * 0.98 - headX - cs * 1.05, cs * 1.3, cs * 0.5); ctx.fillStyle = "#c9d6f5"; ctx.fill(); outline(1.5); ctx.stroke();
        emote("zzz", headX, by - cs * 2.6, cs * 0.55);
        if (punch) sfx("嘿！", headX + cs * 2.4, by - cs * 2.4, Math.max(12, cs * 0.9), C.bad, -0.15, 1);
      }
      ctx.restore();
      plate(titles[i], q.x + q.w / 2, q.y + fs * 1.2, fs, cols[i]);
      ctx.restore();
    });
    say("l-cat", here && lt > 4 && !!hallu, hallu ? hallu.x : 0, hallu ? hallu.y : 0, P[1].x + P[1].w * (narrow() ? 0.7 : 0.45), P[1].y + P[1].h * (narrow() ? 0.4 : 0.42), narrow() ? "有只小猫！" : "那边有只小猫呀～", "say");
    callout("l-rbd", here && lt > 9.4 && !!sleeper, sleeper ? sleeper.x + cs * 3 : 0, sleeper ? sleeper.y + cs * 0.3 : 0, P[3].x + P[3].w * 0.62, P[3].y + P[3].h * (narrow() ? 0.45 : 0.32), "快速眼动睡眠行为障碍");
    ctx.restore();
  }

  // ---------- 第 4 幕：路易体家族 + 药物敏感 ----------
  function neuronBadge(x, y, r, lewyP) {
    ctx.save();
    ctx.lineCap = "round";
    for (let k = 0; k < 6; k++) {
      const q = k / 6 * Math.PI * 2 + 0.5;
      for (const [w, col] of [[r * 0.3, C.line], [r * 0.19, "#f7b9a8"]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(q) * r * 1.8, y + Math.sin(q) * r * 1.6); ctx.stroke();
      }
    }
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffd3c4"; ctx.fill(); outline(1.8); ctx.stroke();
    face(x - r * 0.3, y - r * 0.05, r * 0.38, lerp(0.6, -0.5, lewyP));
    if (lewyP > 0.02) {
      const lr = r * 0.34 * lewyP, lx = x + r * 0.38, ly = y + r * 0.25;
      glow(lx, ly, lr * 2, C.lewy, 0.5);
      ctx.beginPath(); ctx.arc(lx, ly, lr, 0, Math.PI * 2); ctx.fillStyle = C.lewy; ctx.fill(); outline(1.3); ctx.stroke();
      ctx.beginPath(); ctx.arc(lx, ly, lr * 0.5, 0, Math.PI * 2); ctx.fillStyle = "#e0709f"; ctx.fill();
    }
    ctx.restore();
  }
  function familyView(a) {
    const here = cur === 3;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf6ff", "#f3f9ee");
    Anima.petals(10, 0.5, 50);
    const nw = narrow();
    const top = Y(0.07), ch = H * 0.96 - top, gap = W * 0.025, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "谁先出现？", "#f5d7ee");
    card(R.x, R.y, R.w, R.h, "特别怕抗精神病药", "#ffe1e1");
    const fs = fsS() * (nw ? 0.88 : 1.12);
    // 左：路易体 + 先后顺序
    const nr = Math.min(L.h * 0.09, L.w * 0.08);
    const nx = L.x + L.w * 0.5, ny = L.y + L.h * 0.2;
    neuronBadge(nx, ny, nr, prog(0.6, 1.5));
    const rows = [
      { name: "帕金森病痴呆", a: "动作症状", b: "痴呆", gap: "多年后", t: 2.5 },
      { name: "路易体痴呆", a: "痴呆", b: "动作症状", gap: "先或同时", t: 5 },
    ];
    rows.forEach((r, k) => {
      const p = prog(r.t, 0.8), ry = L.y + L.h * (nw ? 0.58 + k * 0.25 : 0.5 + k * 0.28);
      if (p < 0.02) return;
      ctx.save(); ctx.globalAlpha *= p;
      text(r.name, L.x + L.w * 0.5, ry - fs * 1.6, fs * 1.05, k ? "#c0508a" : C.lavDeep);
      const ax = L.x + L.w * 0.25, bx = L.x + L.w * 0.75;
      plate(r.a, ax, ry, fs, r.a === "痴呆" ? "#ddd5fa" : "#e3f3fc");
      plate(r.b, bx, ry, fs, r.b === "痴呆" ? "#ddd5fa" : "#e3f3fc");
      const aw = L.w * 0.08;
      arrow(L.x + L.w * 0.5 - aw, ry, L.x + L.w * 0.5 + aw, ry, alpha(C.line, 0.6), 2);
      text(r.gap, L.x + L.w * 0.5, ry + fs * 1.5, fs * 0.85, C.soft);
      ctx.restore();
    });
    // 右：多巴胺本来就少，访客再把门挡住
    const my = R.y + R.h * 0.62, rs = Math.min(R.h * 0.075, R.w * 0.08), cs = Math.min(R.h * 0.07, R.w * 0.065);
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 20); ctx.clip();
    ctx.fillStyle = "#ffe8ef"; ctx.fillRect(R.x, my, R.w, R.h);
    ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(R.x, my); ctx.lineTo(R.x + R.w, my); ctx.stroke();
    const rx = [R.x + R.w * 0.2, R.x + R.w * 0.44, R.x + R.w * 0.68];
    const dIn = prog(4.5, 1.8);
    const recs = rx.map((x, i) => Anima.receptor(x, my, rs, "#ffc98f", i === 1 ? (1 - dIn) * 0.9 : 0, { label: i === 0 ? "多巴胺受体" : null }));
    // 唯一的多巴胺快递员
    const site = recs[1].site;
    const kicked = prog(5.6, 1);
    const dax = lerp(site.x, R.x + R.w * 0.88, kicked), day = lerp(site.y, my - H * 0.005, kicked);
    chara(dax, day, cs, { who: "DA", eyes: kicked > 0.5 ? "teary" : "happy", mouth: kicked > 0.5 ? "sad" : "grin", arms: kicked > 0.5 ? "down" : "up", item: null });
    if (lt < 9.4) text("多巴胺本来就不多", R.x + R.w * 0.5, R.y + R.h * 0.14, fs, alpha(C.soft, 1 - prog(8.8, 0.6))); // 淡出后不画，免得气泡把它当成障碍
    // 抗精神病药访客
    if (dIn > 0) {
      const dx = lerp(R.x - cs * 2, site.x, dIn), dy = lerp(my - H * 0.02, site.y, dIn);
      chara(dx, dy, cs, { who: "drug", label: "", tag: "抗精神病药", hatColor: "#f0a0a0", hatColor2: "#ffffff", arms: dIn >= 1 ? "hug" : "wave", eyes: "open", mouth: "flat", walk: dIn < 1 ? time * 9 : null, dir: 1 });
    }
    // 突触后的居民：变僵、变晕
    const bad = prog(6.6, 1.2);
    const px = R.x + R.w * 0.62, py = R.y + R.h * 0.96;
    chara(px, py, cs * 0.95, Object.assign({}, GRANDPA, { eyes: bad > 0.5 ? "dizzy" : "happy", mouth: bad > 0.5 ? "wavy" : "smile", arms: "down", brow: bad > 0.5 ? "worry" : null, gray: bad * 0.5 }));
    if (bad > 0.5) { emote("sweat", px + cs * 1.1, py - cs * 3, cs * 0.55); emote("gloom", px - cs * 1.1, py - cs * 3.2, cs * 0.5); }
    // 警示牌
    const wp = prog(7.4, 0.6);
    if (wp > 0.02) {
      const wx = R.x + R.w * 0.3, wy = R.y + R.h * 0.84, wr = Math.min(R.h * 0.08, R.w * 0.07) * (0.6 + 0.4 * wp);
      ctx.save(); ctx.globalAlpha *= wp;
      glow(wx, wy, wr * 2, C.coral, 0.5 + 0.2 * Math.sin(time * 6));
      ctx.beginPath(); ctx.moveTo(wx, wy - wr); ctx.lineTo(wx + wr * 1.05, wy + wr * 0.75); ctx.lineTo(wx - wr * 1.05, wy + wr * 0.75); ctx.closePath();
      ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(2); ctx.stroke();
      text("!", wx, wy + wr * 0.18, wr * 1.1, C.bad);
      ctx.restore();
    }
    callout("f-lewy", here && lt > 1 && lt < 8.6, nx + nr * 0.4, ny + nr * 0.3, nw ? nx + L.w * 0.18 : nx + L.w * 0.18, nw ? ny + nr * 1.5 : ny - nr * 0.2, "路易体");
    callout("f-drug", here && lt > 5 && lt < 8.8, site.x - cs * 0.6, site.y - cs * 1.6, R.x + R.w * 0.3, R.y + R.h * 0.24, "多巴胺受体被挡住");
    say("f-careful", here && lt > 9.6, px, py - cs * 3.1, R.x + R.w * 0.5, R.y + R.h * (nw ? 0.19 : 0.13), "可能出现严重反应，用药必须非常谨慎", "box");
    ctx.restore();
  }

  // ---------- 第 5 幕：额颞叶痴呆 ----------
  function brainPath(cx, cy, rx, ry) {
    ctx.beginPath();
    ctx.moveTo(cx - rx * 0.95, cy + ry * 0.1);
    ctx.bezierCurveTo(cx - rx * 1.05, cy - ry * 0.7, cx - rx * 0.4, cy - ry * 1.05, cx + rx * 0.1, cy - ry);
    ctx.bezierCurveTo(cx + rx * 0.7, cy - ry * 0.98, cx + rx * 1.05, cy - ry * 0.5, cx + rx, cy + ry * 0.05);
    ctx.bezierCurveTo(cx + rx * 0.98, cy + ry * 0.45, cx + rx * 0.75, cy + ry * 0.62, cx + rx * 0.5, cy + ry * 0.62);
    ctx.bezierCurveTo(cx + rx * 0.3, cy + ry * 0.95, cx - rx * 0.2, cy + ry * 0.9, cx - rx * 0.35, cy + ry * 0.6);
    ctx.bezierCurveTo(cx - rx * 0.7, cy + ry * 0.62, cx - rx * 0.9, cy + ry * 0.45, cx - rx * 0.95, cy + ry * 0.1);
    ctx.closePath();
  }
  function ftdView(a) {
    const here = cur === 4;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ef", "#fbeef5");
    Anima.bokeh(6, "#ffe2b8", 0.8, 61);
    Anima.petals(6, 0.5, 8);
    const nw = narrow();
    const T0 = Anima.topSafe();
    const cx = W * (nw ? 0.3 : 0.29), cy = Y(0.46);
    const rx = Math.min(W * 0.22, (H - T0) * 0.48), ry = rx * 0.7;
    const shrink = prog(1.5, 4);
    // 小脑和脑干
    ctx.beginPath(); ctx.ellipse(cx - rx * 0.62, cy + ry * 0.72, rx * 0.28, ry * 0.22, 0, 0, Math.PI * 2); ctx.fillStyle = "#f7d3dc"; ctx.fill(); outline(2); ctx.stroke();
    rrect(cx - rx * 0.28, cy + ry * 0.55, rx * 0.16, ry * 0.6, rx * 0.06); ctx.fillStyle = "#f7d3dc"; ctx.fill(); outline(2); ctx.stroke();
    brainPath(cx, cy, rx, ry); ctx.fillStyle = C.brain; ctx.fill();
    ctx.save(); brainPath(cx, cy, rx, ry); ctx.clip();
    // 额叶（右边、前面）
    ctx.fillStyle = mix(C.front, "#d4ced6", shrink * 0.85);
    ctx.fillRect(cx + rx * 0.22, cy - ry * 1.2, rx, ry * 2.4);
    // 颞叶（下方两侧）
    ctx.beginPath(); ctx.ellipse(cx + rx * 0.22, cy + ry * 0.42, rx * 0.5, ry * 0.26, -0.1, 0, Math.PI * 2);
    ctx.fillStyle = mix(C.temp, "#d4ced6", shrink * 0.85); ctx.fill(); outline(1.6); ctx.stroke();
    // 脑回
    ctx.strokeStyle = alpha(C.line, 0.35); ctx.lineWidth = 1.6;
    for (let k = 0; k < 6; k++) {
      const x = cx - rx * 0.8 + k * rx * 0.32, y = cy - ry * 0.55 + (k % 2) * ry * 0.25;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.bezierCurveTo(x + rx * 0.1, y - ry * 0.2, x + rx * 0.18, y + ry * 0.2, x + rx * 0.26, y); ctx.stroke();
    }
    ctx.restore();
    outline(2.2); brainPath(cx, cy, rx, ry); ctx.stroke();
    ctx.save(); ctx.setLineDash([5, 4]); ctx.strokeStyle = alpha(C.line, 0.5); ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.moveTo(cx + rx * 0.22, cy - ry * 0.98); ctx.quadraticCurveTo(cx + rx * 0.18, cy, cx + rx * 0.3, cy + ry * 0.2); ctx.stroke(); ctx.restore();
    face(cx - rx * 0.35, cy - ry * 0.1, rx * 0.12, lerp(0.8, 0.2, shrink));
    if (shrink > 0.5) emote("gloom", cx + rx * 0.62, cy - ry * 1.05, rx * 0.1, shrink);
    // 海马的记忆小灯：还亮着
    const lx = cx - rx * 0.02, ly = cy + ry * 0.3, lr = rx * 0.07;
    lamp(lx, ly, lr, 0.9 + 0.1 * Math.sin(time * 3));
    // 右边：五十多岁的叔叔和家人
    const fy = Y(0.95), s = Math.min(H * 0.062, W * 0.045);
    const ux = W * (nw ? 0.7 : 0.66), fx = W * (nw ? 0.9 : 0.86);
    const tableX = (ux + fx) / 2, tableY = fy - s * 1.2;
    rrect(tableX - s * 1.6, tableY, s * 3.2, s * 0.35, 4); ctx.fillStyle = "#e8c29a"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(tableX, tableY + s * 0.35); ctx.lineTo(tableX, fy); ctx.stroke();
    const grab = lt > 3 && lt < 7;
    // 桌上的一盘点心
    {
      ctx.beginPath(); ctx.ellipse(tableX + s * 0.4, tableY - s * 0.05, s * 0.6, s * 0.16, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
      for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(tableX + s * (0.1 + k * 0.3), tableY - s * 0.22, s * 0.16, 0, Math.PI * 2); ctx.fillStyle = "#ffd9a8"; ctx.fill(); outline(1); ctx.stroke(); }
    }
    const talk = lt > 7.5;
    chara(ux, fy, s, Object.assign({}, MID, { arms: grab ? "point" : (talk ? "wave" : "down"), eyes: grab ? "sparkle" : (talk ? "open" : "happy"), mouth: grab ? "grin" : (talk ? "wavy" : "smile"), dir: 1, brow: talk ? "worry" : null }));
    chara(fx, fy, s * 0.95, Object.assign({}, FAMILY, { arms: "hug", eyes: lt > 3 ? "wide" : "happy", mouth: lt > 3 ? "o" : "smile", brow: lt > 3 ? "worry" : null, dir: -1 }));
    if (lt > 3.4) emote(lt > 7.5 ? "sweat" : "!", fx + s * 1.1, fy - s * 3.4, s * 0.55);
    callout("ft-front", here && lt > 1.5 && lt < 7.5, cx + rx * 0.7, cy - ry * 0.35, cx + rx * 0.35, Y(0.03), "额叶：性格、行为、分寸");
    callout("ft-temp", here && lt > 5 && lt < 10.5, cx + rx * 0.45, cy + ry * 0.5, cx + rx * 0.2, Y(0.98), "颞叶：语言、认东西");
    callout("ft-mem", here && lt > 10.5, lx - lr, ly, cx - rx * 0.3, Y(0.98), "记忆一开始可能还不错");
    say("ft-grab", here && lt > 3.2 && lt < 7.3, ux, fy - s * 3.2, ux, Y(0.35), "（不管场合）这些我全要了！", "shout");
    say("ft-word", here && lt > 7.8, ux, fy - s * 3.2, ux, Y(0.35), "那个……那个……叫什么来着？", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：混合型 + 记忆门诊 ----------
  function clinicView(a) {
    const here = cur === 5;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#f3f9ee");
    Anima.petals(12, 0.6, 50);
    Anima.bokeh(6, "#fff0b0", 0.7, 5);
    const nw = narrow();
    const top = Y(0.07), ch = H * 0.96 - top, gap = W * 0.025;
    const lw = (W - gap * 3) * (nw ? 0.45 : 0.42), rw = W - gap * 3 - lw;
    const L = { x: gap, y: top, w: lw, h: ch }, R = { x: gap * 2 + lw, y: top, w: rw, h: ch };
    card(L.x, L.y, L.w, L.h, "常常不止一种", "#ffe1ee");
    card(R.x, R.y, R.w, R.h, "去记忆门诊查一查", "#e1f5ec");
    const fs = fsS() * (nw ? 0.88 : 1);
    // 左：两个圈圈慢慢重叠
    const cr = Math.min(L.w * 0.27, L.h * 0.27);
    const ov = prog(1, 3);
    const ccx = L.x + L.w / 2, ccy = L.y + L.h * 0.5;
    const d = lerp(cr * 1.25, cr * 0.62, ov);
    const circ = (x, col, name, ty) => {
      ctx.beginPath(); ctx.arc(x, ccy, cr, 0, Math.PI * 2); ctx.fillStyle = alpha(col, 0.55); ctx.fill(); outline(2); ctx.stroke();
      text(name, x, ty, fs, C.ink);
    };
    circ(ccx - d, "#f7a8c0", "阿尔茨海默病", ccy - cr - fs * 0.9);
    circ(ccx + d, "#9fcdeb", "血管问题", ccy + cr + fs * 0.9);
    if (ov > 0.8) {
      ctx.save(); ctx.globalAlpha *= (ov - 0.8) * 5;
      ctx.save(); ctx.beginPath(); ctx.arc(ccx - d, ccy, cr, 0, Math.PI * 2); ctx.clip();
      ctx.beginPath(); ctx.arc(ccx + d, ccy, cr, 0, Math.PI * 2); ctx.fillStyle = alpha("#c9a6e8", 0.8); ctx.fill(); ctx.restore();
      plate("混合型", ccx, ccy, fs, "#ffffff");
      sparkles(ccx, ccy, cr * 0.7, 3, 1, 9);
      ctx.restore();
    }
    // 右：医生、奶奶和家人，旁边一张检查单
    const cs = Math.min(R.h * 0.075, R.w * 0.06);
    const fy = R.y + R.h * 0.94;
    const dx = R.x + R.w * 0.16;
    chara(dx, fy, cs * 1.05, Object.assign({}, DOC, { arms: "hold", item: "book", eyes: "happy", mouth: "smile", dir: 1 }));
    chara(R.x + R.w * 0.55, fy, cs, Object.assign({}, ELDER, { arms: "down", eyes: lt > 10 ? "happy" : "open", mouth: "smile", dir: -1 }));
    chara(R.x + R.w * 0.78, fy, cs * 0.95, Object.assign({}, FAMILY, { arms: lt > 10 ? "hug" : "down", eyes: "happy", mouth: "smile", dir: -1 }));
    if (lt > 11) emote("heart", R.x + R.w * 0.66, fy - cs * 3.6, cs * 0.6);
    const items = ["弄清是哪一型", "查甲状腺功能", "查维生素 B12", "看看是不是抑郁"];
    const ix = R.x + R.w * (nw ? 0.12 : 0.3), iy0 = R.y + R.h * 0.14, ih = R.h * 0.12;
    const tr = fs * 0.6;
    items.forEach((t, k) => {
      const p = prog(2.5 + k * 1.4, 0.6);
      if (p < 0.02) return;
      ctx.save(); ctx.globalAlpha *= p;
      tick(ix, iy0 + k * ih, tr, prog(3 + k * 1.4, 0.6));
      text(t, ix + tr * 1.8, iy0 + k * ih, fs, C.ink, "left");
      ctx.restore();
    });
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const brX = ix + tr * 1.8 + ctx.measureText("看看是不是抑郁").width + fs * 0.6;
    if (prog(7, 0.8) > 0.02) {
      ctx.save(); ctx.globalAlpha *= prog(7, 0.8);
      ctx.strokeStyle = C.mintDeep; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(brX, iy0 + ih * 0.7); ctx.quadraticCurveTo(brX + fs * 0.6, iy0 + ih * 0.7, brX + fs * 0.6, iy0 + ih * 2); ctx.quadraticCurveTo(brX + fs * 0.6, iy0 + ih * 3.3, brX, iy0 + ih * 3.3); ctx.stroke();
      ctx.restore();
    }
    callout("c-rev", here && lt > 7.4 && lt < 9.5, brX + fs * 0.6, iy0 + ih * 2, R.x + R.w * (nw ? 0.55 : 0.84), nw ? iy0 + ih * 3.9 : iy0 - ih * 0.2, "可能治好的原因");
    callout("c-mix", here && lt > 4.5 && lt < 12, ccx, ccy + fs, ccx, L.y + L.h * 0.93, nw ? "很常见" : "阿尔茨海默 + 血管，很常见");
    say("c-doc", here && lt > 9.6, dx, fy - cs * 3.2, R.x + R.w * 0.42, R.y + R.h * 0.66, "查清楚，才好对症照顾～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#8f84e0", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) signView(S.v0);
    if (S.v1 > 0.02) vascView(S.v1);
    if (S.v2 > 0.02) lewyView(S.v2);
    if (S.v3 > 0.02) familyView(S.v3);
    if (S.v4 > 0.02) ftdView(S.v4);
    if (S.v5 > 0.02) clinicView(S.v5);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#8f84e0",
    titleCard: { lines: ["不止", "阿尔茨海默"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
