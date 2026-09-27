Anima.register("dementia-agitation", {
    "title": "痴呆里的激越和幻觉",
    "tag": "痴呆",
    "headline": "刹车坏了：痴呆里的【激越】",
    "lede": "痴呆的老人有时会坐立不安、来回走、大声喊，甚至看到并不存在的东西。Stahl 用一个“刹车”模型来解释：前额叶管着情绪中心，病变把刹车弄坏了。可在找刹车之前，先要当侦探，找出那些说不出口的不舒服。",
    "summary": "前额叶自上而下的刹车被病变破坏、5-HT/NE/DA 失衡与 5-HT2A 相关的幻觉，先找疼痛、感染、便秘等可逆原因，非药物方法优先，以及抗精神病药的获益与风险。",
    "chapter": "对应 Stahl《精神药理学精要》第 12 章 · 痴呆的行为和精神症状",
    "footer": "家人出现激越、幻觉时，请联系医生评估原因；抗精神病药等药物必须由医生决定，不要自行给药。照护者也可以寻求支持。",
    "canvasLabel": "前额叶刹车手管住杏仁核冒出的冲动，病变让刹车手变灰、冲动直达，照护者当侦探找出疼痛等原因，以及医生在天平前权衡用药的动画",
    "regions": ["pfc", "amygdala"],
    "parts": ["dementia"],
    "cast": ["5HT", "NE", "DA", "neuron", "drug"],
    "color": "#f2b38c"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, broken: 0 };
  const view = (k, extra) => { const o = Object.assign({}, V0, extra || {}); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "前额叶的刹车",
      pill: ["刹车", "有力"], pill2: ["激越", "很少"],
      text: "大脑前面的前额叶皮层，像一位管刹车的队长。杏仁核这些情绪中心，不时冒出冲动：着急、害怕、生气。前额叶收到后，会沿着往下的线路踩一脚刹车，把冲动调小，我们才能忍一忍、想一想再行动。这种从上往下的控制，是 Stahl 理解痴呆激越的关键。",
      fact: "前额叶自上而下地调控杏仁核等情绪中心，帮我们管住冲动" }, view("v0")),
    Object.assign({ title: "刹车被病变弄坏",
      pill: ["刹车", "变弱"], pill2: ["激越", "出现"],
      text: "在阿尔茨海默病等痴呆里，斑块、缠结或小中风会一点点损伤前额叶的神经元，刹车手没了力气。杏仁核冒出的冲动不再被调小，直接变成了行动：坐立不安、来回走动、大声喊叫，甚至推人打人，这就叫激越。这不是老人故意使坏，而是管刹车的零件坏了。",
      fact: "Stahl 的模型：前额叶神经元受损 → 自上而下的控制减弱 → 激越" }, view("v0", { broken: 1 })),
    Object.assign({ title: "剩下的线路失衡",
      pill: ["信号", "失衡"], pill2: ["5-HT2A", "过强"],
      text: "剩下的线路也不再平衡：调节情绪和冲动的 5-HT、去甲肾上腺素、多巴胺信号，有的偏多、有的偏少，像一台推子乱跳的调音台。一部分人还会出现幻觉和妄想，比如看到屋里有并不存在的小猫。一种看法是 5-HT2A 信号相对过强，“5-HT 与幻觉”那一集讲过这个按钮。",
      fact: "痴呆里的幻觉和妄想，可能和 5-HT2A 信号相对过强有关" }, view("v1", { broken: 1 })),
    Object.assign({ title: "先找说不出的不舒服",
      pill: ["找到", "0 个"], pill2: ["激越", "很强"],
      text: "激越出现时，先别急着用药，先当侦探。很多激越其实是说不出的不舒服：哪里疼，尿路或肺部感染，好几天没大便，夜里睡不好，搬了家或换了照护的人，或者某种药的副作用。痴呆的人常常讲不清这些，只能用着急和发脾气来表达。把原因找出来处理好，激越常常就平息了。",
      fact: "疼痛、感染、便秘、睡不好、环境变化、药物副作用，都可能引起激越" }, view("v2", { broken: 1 })),
    Object.assign({ title: "不用药的办法先上",
      pill: ["刺激", "很多"], pill2: ["激越", "偏强"],
      text: "接下来，优先用不吃药的办法。减少刺激：关掉吵闹的电视，别一下子来很多人；温和安抚：蹲下来、慢慢说、握握手，不和他争对错；规律作息：固定时间起床、吃饭、散步，白天多晒太阳。环境稳了，杏仁核冒出的冲动也会少一些。照护者也要照顾好自己。",
      fact: "非药物方法是首选：减少刺激、温和安抚、规律作息" }, view("v3", { broken: 1 })),
    Object.assign({ title: "用药前的天平",
      pill: ["药物", "医生权衡"], pill2: ["原则", "短期复查"],
      text: "症状严重、可能伤到自己或别人时，医生可能短期使用某些抗精神病药。依匹哌唑已在美国获批用于阿尔茨海默病相关的激越。但抗精神病药用在痴呆老人身上，都有增加卒中和死亡风险的警告。所以必须由医生权衡利弊，尽量短期使用、定期复查，家人千万不要自行给药。",
      fact: "抗精神病药在痴呆老人中有增加卒中和死亡风险的警告，需医生权衡、短期使用" }, view("v4", { broken: 1 })),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { pfc: "#ffd9c7", amy: "#ffc2cf", brake: "#7fb2e6", imp: "#f07a7a", plaque: "#b9aeb4" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  let agit = 0.1;
  function agitTarget() {
    if (cur === 0) return 0.12;
    if (cur === 1) return 0.15 + 0.75 * prog(3, 3);
    if (cur === 2) return 0.8;
    if (cur === 3) return 0.9 - 0.12 * found();
    if (cur === 4) return 0.75 - 0.2 * (lt > 2.5) - 0.2 * (lt > 5.5) - 0.15 * (lt > 8.5);
    return 0.4;
  }
  const found = () => cur === 3 ? clamp(Math.floor((lt - 1.4) / 1.6) + 1, 0, 6) : 0;
  function update(dt) { lt = Anima.sceneTime; agit = lerp(agit, agitTarget(), 1 - Math.exp(-dt * 1.5)); }

  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function meter(x, y, w, v) {
    const h = H * 0.03, fs = fsz(0.026);
    text("激越", x - fs * 0.5, y + h / 2, fs, C.ink, "right");
    rrect(x, y, w, h, h / 2); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(x, y, Math.max(h, w * clamp(v, 0, 1)), h, h / 2); ctx.fillStyle = mix("#bfe8d6", C.imp, v); ctx.fill(); outline(1.6); ctx.stroke();
  }
  // 老人（痴呆的人）：激越越强，越坐立不安
  function elder(x, y, s, v, extra) {
    const pace = v > 0.6 ? Math.sin(time * 1.4) * s * 1.6 : 0;
    const o = Object.assign({ who: "neuron", hair: "#d8d2cf", cloth: "#cfe0f5", style: "bun", glasses: true,
      eyes: v > 0.6 ? "angry" : v > 0.35 ? "open" : "happy", brow: v > 0.6 ? "worry" : null, mouth: v > 0.6 ? "wavy" : "smile",
      arms: v > 0.7 ? "fist" : "down", walk: v > 0.6 ? time * 7 : null, dir: Math.cos(time * 1.4) > 0 ? 1 : -1 }, extra || {});
    chara(x + pace, y, s, o);
    if (v > 0.6) { emote("anger", x + pace + s, y - s * 3.2, s * 0.6); emote("sweat", x + pace - s, y - s * 3, s * 0.5); }
    return x + pace;
  }

  // ---------- 第 1、2 幕：刹车线路 ----------
  function brakeView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6ef", "#fdeef3");
    Anima.bokeh(6, "#ffd9c7", 0.7, 18);
    const br = cur === 1 ? prog(1, 3) : S.broken;
    const P = { x: W * (n ? 0.24 : 0.26), y: top + H * 0.17 }, A = { x: W * (n ? 0.24 : 0.26), y: H * 0.74 }, E = { x: W * (n ? 0.76 : 0.72), y: H * 0.93 };
    const pr = H * 0.095;
    // 往下的刹车线（前额叶 → 杏仁核）和往外的冲动线（杏仁核 → 行为）
    ctx.save(); ctx.strokeStyle = mix(C.brake, "#c9c3c6", br); ctx.lineWidth = Math.max(4, H * 0.012); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(P.x, P.y + pr); ctx.lineTo(A.x, A.y - pr * 0.8); ctx.stroke(); ctx.restore();
    const imp = { a: { x: A.x + pr, y: A.y }, c: { x: (A.x + E.x) / 2, y: A.y - H * 0.28 }, b: { x: E.x - H * 0.06, y: E.y - H * 0.16 } };
    const qp = (u) => ({ x: (1 - u) * (1 - u) * imp.a.x + 2 * (1 - u) * u * imp.c.x + u * u * imp.b.x, y: (1 - u) * (1 - u) * imp.a.y + 2 * (1 - u) * u * imp.c.y + u * u * imp.b.y });
    ctx.save(); ctx.setLineDash([6, 7]); ctx.strokeStyle = alpha(C.imp, 0.5); ctx.lineWidth = 2;
    ctx.beginPath(); for (let k = 0; k <= 30; k++) { const p = qp(k / 30); if (k) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); } ctx.stroke(); ctx.restore();
    // 刹车信号：蓝色小波往下跑（坏了以后变少、变淡）
    const nb = 4;
    for (let k = 0; k < nb; k++) {
      if (br > 0.5 && k % 3 !== 0) continue;
      const t = (time * 0.5 + k / nb) % 1, y = lerp(P.y + pr, A.y - pr * 0.8, t);
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * (1 - br * 0.6);
      ctx.strokeStyle = C.brake; ctx.lineWidth = Math.max(2.5, H * 0.008);
      ctx.beginPath(); ctx.arc(A.x, y, H * 0.025, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke();
      ctx.restore();
    }
    // 冲动：红色小火花从杏仁核冒出；刹车好时半路被接住熄灭，坏了就一路冲到老人身上
    for (let k = 0; k < 6; k++) {
      const u = (time * 0.28 + k / 6) % 1, stop = lerp(0.35, 1.05, br);
      if (u > stop) continue;
      const p = qp(u), fade = u > stop - 0.1 ? (stop - u) / 0.1 : 1;
      Anima.bolt(p.x, p.y, H * 0.03, clamp(fade, 0, 1), C.imp);
      if (br < 0.5 && u > stop - 0.08) sparkles(p.x, p.y, H * 0.03, 2, 0.6, k);
    }
    // 刹车好时：半路有一面蓝色的盾把冲动接住
    const sp = qp(0.37), sa = clamp(1 - br * 1.3, 0, 1);
    if (sa > 0.02) {
      ctx.save(); ctx.globalAlpha *= sa;
      glow(sp.x, sp.y, H * 0.06, C.brake, 0.6);
      ctx.beginPath(); ctx.moveTo(sp.x, sp.y - H * 0.04); ctx.quadraticCurveTo(sp.x + H * 0.035, sp.y - H * 0.035, sp.x + H * 0.03, sp.y); ctx.quadraticCurveTo(sp.x + H * 0.02, sp.y + H * 0.03, sp.x, sp.y + H * 0.045); ctx.quadraticCurveTo(sp.x - H * 0.02, sp.y + H * 0.03, sp.x - H * 0.03, sp.y); ctx.quadraticCurveTo(sp.x - H * 0.035, sp.y - H * 0.035, sp.x, sp.y - H * 0.04);
      ctx.fillStyle = "#d5e7f8"; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.restore();
      ctx.save(); ctx.globalAlpha *= sa * 0.5; ctx.setLineDash([4, 5]); ctx.strokeStyle = C.brake; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(A.x + H * 0.01, (P.y + A.y) / 2); ctx.lineTo(sp.x - H * 0.03, sp.y); ctx.stroke(); ctx.restore();
    }
    // 前额叶：一团神经元 + 刹车手
    ctx.beginPath(); ctx.ellipse(P.x, P.y, pr * 1.5, pr, 0, 0, Math.PI * 2); ctx.fillStyle = mix(C.pfc, "#ddd6d9", br * 0.8); ctx.fill(); outline(2); ctx.stroke();
    for (let k = 0; k < 4; k++) { // 斑块和缠结：灰色的团块慢慢出现
      const pa = prog(1.5 + k * 0.7, 1) * br;
      if (pa <= 0) continue;
      ctx.save(); ctx.globalAlpha *= pa;
      const x = P.x + (k - 1.5) * pr * 0.7, y = P.y + (k % 2 ? -pr * 0.45 : pr * 0.5);
      ctx.beginPath(); ctx.arc(x, y, pr * 0.2, 0, Math.PI * 2); ctx.fillStyle = C.plaque; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    }
    face(P.x, P.y, pr * 0.45, br > 0.5 ? -1 : 1);
    const hs = H * 0.05, hx = P.x + pr * 2.3, hy = P.y + pr * 0.95;
    // 刹车拉杆
    ctx.save(); ctx.translate(hx - hs * 1.3, hy); ctx.rotate(br > 0.5 ? 0.6 : -0.25 + Math.sin(time * 2) * 0.05);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * 0.01); ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -hs * 2.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -hs * 2.4, hs * 0.35, 0, Math.PI * 2); ctx.fillStyle = C.bad; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.restore();
    chara(hx, hy, hs, { who: "neuron", hair: "#e39a6d", cloth: "#ffe0cc", tag: "刹车手", arms: br > 0.5 ? "down" : "hold", eyes: br > 0.5 ? "teary" : "open", mouth: br > 0.5 ? "sad" : "flat", brow: br > 0.5 ? "worry" : null, gray: br * 0.6, dir: -1 });
    // 杏仁核
    ctx.beginPath(); ctx.ellipse(A.x, A.y, pr * 0.95, pr * 0.72, 0.4, 0, Math.PI * 2); ctx.fillStyle = C.amy; ctx.fill(); outline(2); ctx.stroke();
    face(A.x, A.y + pr * 0.05, pr * 0.4, br > 0.5 ? -1 : 0);
    const fs = fsz(0.028);
    plate("前额叶", P.x, P.y - pr - fs * 0.6, fs, "#fff1e4");
    plate("杏仁核", A.x, A.y + pr + fs * 0.4, fs, "#ffe6ec");
    // 老人
    const ex = elder(E.x, E.y, H * 0.065, agit, { tag: null });
    if (!n) meter(W * 0.66, top + H * 0.04, W * 0.24, agit);
    // 标注和对话
    if (cur === 0) {
      callout("brake", lt > 1 && lt < 6.5, A.x, (P.y + A.y) / 2, n ? W * 0.12 : W * 0.1, (P.y + A.y) / 2 + H * 0.02, "往下踩刹车");
      callout("imp", lt > 3 && lt < 6.8, qp(0.6).x, qp(0.6).y, n ? W * 0.62 : W * 0.55, n ? H * 0.52 : H * 0.42, "冲动：着急、害怕、生气");
      say("hold", lt > 7, hx, hy - hs * 3.2, n ? W * 0.66 : W * 0.56, n ? H * 0.5 : top + H * 0.2, "冲动来了，先等一等～", "say");
    } else {
      callout("plaque", lt > 2 && lt < 7, P.x + pr * 0.6, P.y + pr * 0.5, n ? W * 0.6 : W * 0.56, top + H * 0.2, "病变损伤前额叶神经元");
      callout("agit", lt > 6.5, ex, E.y - H * 0.21, n ? W * 0.6 : W * 0.56, n ? top + H * 0.2 : H * 0.45, "激越：坐立不安、喊叫、推人");
      say("home", lt > 7.5, ex, E.y - H * 0.21, n ? W * 0.72 : W * 0.8, H * 0.6, "我要回家！", "shout");
    }
    ctx.restore();
  }

  // ---------- 第 3 幕：调音台和 5-HT2A 按钮 ----------
  function mixerView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f3effd");
    Anima.petals(6, 0.4, 33);
    // 调音台
    const mx = W * 0.04, mw = W * (n ? 0.5 : 0.44), my = top + H * 0.1, mh = H * (n ? 0.64 : 0.7);
    rrect(mx, my, mw, mh, 18); ctx.fillStyle = "#fffdfb"; ctx.fill(); outline(2); ctx.stroke();
    plate("剩下的线路", mx + mw / 2, my, fsz(0.028), "#fff1b8");
    const who = ["5HT", "NE", "DA"], names = ["5-HT", "NE", "DA"];
    const phase = [0, 2.1, 4.2];
    for (let k = 0; k < 3; k++) {
      const x = mx + mw * (0.2 + k * 0.3), y0 = my + mh * 0.18, y1 = my + mh * 0.68;
      rrect(x - H * 0.008, y0, H * 0.016, y1 - y0, 4); ctx.fillStyle = "#e9e1e6"; ctx.fill(); outline(1.2); ctx.stroke();
      const mid = (y0 + y1) / 2;
      ctx.save(); ctx.setLineDash([3, 4]); outline(1); ctx.beginPath(); ctx.moveTo(x - H * 0.03, mid); ctx.lineTo(x + H * 0.03, mid); ctx.stroke(); ctx.restore();
      const v = Math.sin(time * (0.9 + k * 0.37) + phase[k]) * 0.8 * prog(0.5, 1.5);
      const ky = mid - v * (y1 - y0) / 2;
      rrect(x - H * 0.03, ky - H * 0.015, H * 0.06, H * 0.03, 6); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
      chara(x, my + mh * 0.86, H * 0.034, { who: who[k], eyes: Math.abs(v) > 0.5 ? "dizzy" : "open", mouth: Math.abs(v) > 0.5 ? "wavy" : "smile", arms: v > 0.3 ? "up" : "down", shadow: false });
      text(names[k], x, my + mh * 0.94, fsz(0.026), C.ink);
    }
    // 右：皮层神经元上的 5-HT2A 按钮，按得太重 → 看到小猫
    const rx = W * (n ? 0.77 : 0.72), ry = H * 0.62, s = H * 0.05;
    const on = prog(3, 1.5);
    const bx = rx, by = ry - H * 0.2;
    // 皮层神经元（三角形），按钮长在它身上
    const ny = by + H * 0.13;
    ctx.beginPath(); ctx.moveTo(bx, ny - H * 0.08); ctx.lineTo(bx + H * 0.075, ny + H * 0.04); ctx.lineTo(bx - H * 0.075, ny + H * 0.04); ctx.closePath(); ctx.fillStyle = mix("#ffd9c7", "#ffc07a", on * 0.6); ctx.fill(); outline(1.8); ctx.stroke();
    face(bx, ny, H * 0.025, on > 0.5 ? -1 : 1);
    glow(bx, by, H * 0.09, C.gold, on * (0.6 + 0.3 * Math.sin(time * 5)));
    ctx.beginPath(); ctx.arc(bx, by, H * 0.035, 0, Math.PI * 2); ctx.fillStyle = mix("#bfe8d6", "#ffb35c", on); ctx.fill(); outline(2); ctx.stroke();
    text("5-HT2A", bx + H * 0.1, by, fsz(0.026), C.ink, "left");
    // 老人和幻觉里的小猫
    const ex = n ? W * 0.66 : W * 0.62, ey = H * 0.95;
    chara(ex, ey, s * 1.1, { who: "neuron", hair: "#d8d2cf", cloth: "#cfe0f5", style: "bun", glasses: true, eyes: on > 0.5 ? "wide" : "open", mouth: "o", arms: on > 0.5 ? "point" : "down" });
    const cat = prog(5, 1.5);
    if (cat > 0) {
      const cx = ex + H * 0.2, cy = ey - H * 0.05;
      ctx.save(); ctx.globalAlpha *= cat * (0.55 + 0.2 * Math.sin(time * 2)); ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.arc(cx, cy, H * 0.035, 0, Math.PI * 2);
      ctx.moveTo(cx - H * 0.03, cy - H * 0.02); ctx.lineTo(cx - H * 0.024, cy - H * 0.055); ctx.lineTo(cx - H * 0.008, cy - H * 0.034);
      ctx.moveTo(cx + H * 0.03, cy - H * 0.02); ctx.lineTo(cx + H * 0.024, cy - H * 0.055); ctx.lineTo(cx + H * 0.008, cy - H * 0.034);
      ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.setLineDash([]); face(cx, cy + H * 0.005, H * 0.018, 0);
      ctx.restore();
    }
    ctx.save(); ctx.setLineDash([4, 5]); outline(1.2); ctx.beginPath(); ctx.moveTo(bx, by + H * 0.04); ctx.lineTo(ex, ey - s * 3.6); ctx.stroke(); ctx.restore();
    callout("mix", lt > 1.5 && lt < 6.5, mx + mw * 0.5, my + mh, n ? W * 0.3 : W * 0.28, H * 0.95, "5-HT、NE、DA 有多有少");
    callout("2a", lt > 4, bx, by - H * 0.035, n ? W * 0.7 : W * 0.72, top + H * 0.06, "5-HT2A 信号过强");
    say("cat", lt > 7, ex, ey - s * 3.6, n ? W * 0.62 : W * 0.66, H * 0.56, "那里有只小猫！", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：当侦探 ----------
  function icon(kind, x, y, r) {
    ctx.save(); ctx.lineWidth = Math.max(1.6, r * 0.12); ctx.strokeStyle = C.line; ctx.lineCap = "round";
    if (kind === 0) Anima.bolt(x, y, r * 0.9, 1, C.bad);
    else if (kind === 1) { rrect(x - r * 0.15, y - r * 0.8, r * 0.3, r * 1.2, r * 0.15); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y + r * 0.5, r * 0.3, 0, Math.PI * 2); ctx.fillStyle = C.bad; ctx.fill(); ctx.stroke(); }
    else if (kind === 2) { ctx.beginPath(); ctx.ellipse(x, y, r * 0.7, r * 0.55, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe0c4"; ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y, r * 0.25, 0, Math.PI * 1.6); ctx.stroke(); }
    else if (kind === 3) { ctx.beginPath(); ctx.arc(x, y, r * 0.6, 0, Math.PI * 2); ctx.fillStyle = "#fff4c2"; ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(x + r * 0.3, y - r * 0.2, r * 0.5, 0, Math.PI * 2); ctx.fillStyle = "#fffaf3"; ctx.fill(); }
    else if (kind === 4) { ctx.beginPath(); ctx.moveTo(x - r * 0.7, y); ctx.lineTo(x, y - r * 0.7); ctx.lineTo(x + r * 0.7, y); ctx.closePath(); ctx.fillStyle = "#f7b9a8"; ctx.fill(); ctx.stroke(); rrect(x - r * 0.5, y, r, r * 0.6, 3); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke(); }
    else { ctx.save(); ctx.translate(x, y); ctx.rotate(-0.6); rrect(-r * 0.7, -r * 0.3, r * 1.4, r * 0.6, r * 0.3); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke(); ctx.fillStyle = "#ff9aa9"; rrect(-r * 0.7, -r * 0.3, r * 0.7, r * 0.6, r * 0.3); ctx.fill(); ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }
  function detectiveView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ee", "#fdf0f3");
    Anima.bokeh(6, "#ffe0c4", 0.7, 55);
    const cx = W * 0.5, cy = top + (H * 0.86 - top) * 0.52, R = Math.min(W * 0.36, (H * 0.86 - top) * 0.46 * (n ? 1.05 : 1.6));
    const names = ["疼痛", "感染", "便秘", "睡不好", "环境变化", "药物副作用"];
    const f = found();
    const pos = [];
    for (let k = 0; k < 6; k++) {
      const q = -Math.PI / 2 + (k + 0.5) * Math.PI * 2 / 6;
      const x = cx + Math.cos(q) * (n ? W * 0.4 : R), y = cy + Math.sin(q) * (n ? H * 0.3 : R * 0.62);
      pos.push({ x, y });
      const r = H * 0.055, open = k < f;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = open ? "#fffdf8" : "#ece6ea"; ctx.fill(); outline(2); ctx.stroke();
      if (open) { icon(k, x, y, r * 0.7); text(names[k], x, y + r + fsz(0.026) * 0.9, fsz(0.026), C.ink); }
      else sfx("?", x, y, r * 1.1, C.soft, 0, 1);
      if (open && lt - (1.4 + k * 1.6) < 0.8) sparkles(x, y, r * 1.4, 4, 1, k);
    }
    const ex = elder(cx, cy + H * 0.1, H * 0.05, agit, {});
    // 照护者提着灯一个个去看
    const k = clamp(f - 1, 0, 5), tgt = pos[Math.min(f, 5)];
    const t = ((lt - 1.4) % 1.6) / 1.6;
    const from = f > 0 ? pos[k] : { x: cx - W * 0.1, y: cy + H * 0.1 };
    const gx = f >= 6 ? pos[5].x : lerp(from.x, tgt.x, ease(t * 1.5)), gy = f >= 6 ? pos[5].y : lerp(from.y, tgt.y, ease(t * 1.5));
    chara(gx + H * 0.12, gy + H * 0.05, H * 0.038, { who: "neuron", hair: "#7a8ba6", cloth: "#dff0e4", item: "lamp", arms: "hold", eyes: "open", mouth: "smile", walk: f < 6 && t < 0.66 ? time * 9 : null, tag: n ? null : "照护者", shadow: false });
    if (!n) meter(W * 0.1, top + H * 0.03, W * 0.18, agit);
    say("why", lt > 0.5 && lt < 5, ex, cy + H * 0.1 - H * 0.16, W * 0.5, H * 0.93, "说不出哪里不舒服……", "think");
    callout("cause", lt > 10.8, cx, cy - H * 0.02, W * 0.5, H * 0.93, "找到原因，激越常会平息");
    ctx.restore();
  }

  // ---------- 第 5 幕：不用药的办法 ----------
  function calmView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ef", "#f1f7fb");
    const floor = H * 0.9;
    ctx.fillStyle = "#f6e6d6"; ctx.fillRect(0, floor, W, H - floor);
    // 电视和噪音波
    const tvOff = lt > 2.5, tx = W * (n ? 0.16 : 0.14), ty = H * 0.5;
    rrect(tx - H * 0.09, ty - H * 0.065, H * 0.18, H * 0.13, 8); ctx.fillStyle = tvOff ? "#6d5760" : "#bfe3f5"; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = "#c7b39a"; ctx.fillRect(tx - H * 0.01, ty + H * 0.065, H * 0.02, floor - ty - H * 0.065);
    if (!tvOff) for (let k = 0; k < 3; k++) {
      const r = H * (0.1 + ((time * 0.6 + k / 3) % 1) * 0.15);
      ctx.save(); ctx.globalAlpha *= 1 - ((time * 0.6 + k / 3) % 1); ctx.strokeStyle = C.imp; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(tx, ty, r, -0.6, 0.6); ctx.stroke(); ctx.restore();
    }
    if (!tvOff) sfx("吵吵吵", tx + H * 0.18, ty - H * 0.13, H * 0.04, C.imp, -0.1, 1);
    // 时钟：规律作息
    const ck = prog(8.5, 1);
    if (ck > 0) {
      const kx = W * (n ? 0.84 : 0.86), ky = top + H * 0.14, kr = H * 0.06;
      ctx.save(); ctx.globalAlpha *= ck;
      ctx.beginPath(); ctx.arc(kx, ky, kr, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(2); ctx.stroke();
      ctx.strokeStyle = C.line; ctx.lineWidth = 3; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(kx, ky - kr * 0.7); ctx.moveTo(kx, ky); ctx.lineTo(kx + kr * 0.5, ky + kr * 0.1); ctx.stroke();
      glow(kx - W * 0.1, ky, H * 0.08, C.gold, 0.7);
      ctx.beginPath(); ctx.arc(kx - W * 0.1, ky, H * 0.03, 0, Math.PI * 2); ctx.fillStyle = "#ffd96b"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.restore();
    }
    // 老人和照护者
    const ex = W * 0.52, cgx = lerp(tx + H * 0.12, ex + H * 0.12, prog(4, 1.5));
    const exx = elder(ex, floor, H * 0.055, agit, {});
    const holding = lt > 5.5;
    chara(cgx, floor, H * 0.05, { who: "neuron", hair: "#7a8ba6", cloth: "#dff0e4", dir: -1, arms: lt < 4 && lt > 2 ? "point" : holding ? "hug" : "down", eyes: "happy", mouth: "smile", walk: lt > 4 && lt < 5.5 ? time * 9 : null, tag: "照护者" });
    if (holding) { Anima.heart(ex + H * 0.06, floor - H * 0.2 - Math.abs(Math.sin(time * 2)) * H * 0.02, H * 0.02, C.rose); }
    // 右下角：杏仁核冒冲动的小窗
    const ax = W * (n ? 0.84 : 0.86), ay = H * (n ? 0.64 : 0.58), ar = H * 0.075;
    ctx.beginPath(); ctx.arc(ax, ay, ar * 1.5, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(ax, ay + ar * 0.2, ar * 0.7, ar * 0.5, 0.4, 0, Math.PI * 2); ctx.fillStyle = C.amy; ctx.fill(); outline(1.6); ctx.stroke();
    face(ax, ay + ar * 0.2, ar * 0.3, agit > 0.5 ? -1 : 1);
    const nb = Math.round(agit * 6);
    for (let k = 0; k < nb; k++) { const q = -Math.PI / 2 + (k - 2.5) * 0.45; Anima.bolt(ax + Math.cos(q) * ar * 1.05, ay + Math.sin(q) * ar * 0.9, H * 0.022, 0.5 + 0.5 * Math.sin(time * 6 + k), C.imp); }
    plate("杏仁核", ax, ay + ar * 1.5 + fsz(0.026) * 0.4, fsz(0.026));
    meter(W * (n ? 0.2 : 0.14), top + H * 0.04, W * (n ? 0.3 : 0.22), agit);
    callout("quiet", lt > 2.6 && lt < 5.5, tx, ty - H * 0.07, n ? W * 0.3 : W * 0.26, top + H * 0.2, "减少刺激");
    callout("soothe", lt > 5.8 && lt < 8.8, ex + H * 0.06, floor - H * 0.2, n ? W * 0.55 : W * 0.5, top + H * 0.2, "温和安抚：慢慢说，不争对错");
    callout("routine", lt > 8.8, W * (n ? 0.84 : 0.86), top + H * 0.2, n ? W * 0.5 : W * 0.66, top + H * (n ? 0.26 : 0.32), "规律作息，白天晒太阳");
    say("sit", lt > 6 && lt < 10, cgx, floor - H * 0.17, n ? W * 0.3 : W * 0.3, H * 0.48, "我陪着你，我们慢慢来～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：天平 ----------
  function scaleView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f3effd");
    Anima.petals(6, 0.4, 88);
    const cx = W * 0.5, py = top + H * 0.2, arm = Math.min(W * 0.34, H * 0.5);
    const benefit = prog(1, 1.5), risk = prog(4.5, 1.5);
    const tilt = (risk - benefit) * 0.14 + Math.sin(time * 1.3) * 0.02 * prog(8, 1);
    // 支柱
    ctx.fillStyle = "#e8c9a8"; ctx.fillRect(cx - H * 0.012, py, H * 0.024, H * 0.55); outline(1.6); ctx.strokeRect(cx - H * 0.012, py, H * 0.024, H * 0.55);
    rrect(cx - H * 0.1, py + H * 0.55, H * 0.2, H * 0.04, 6); ctx.fillStyle = "#e8c9a8"; ctx.fill(); ctx.stroke();
    const L = { x: cx - Math.cos(tilt) * arm, y: py - Math.sin(tilt) * arm }, R = { x: cx + Math.cos(tilt) * arm, y: py + Math.sin(tilt) * arm };
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(4, H * 0.012); ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(L.x, L.y); ctx.lineTo(R.x, R.y); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, py, H * 0.018, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); outline(1.6); ctx.stroke();
    const pan = (P, col) => {
      const d = H * 0.2;
      ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(P.x, P.y); ctx.lineTo(P.x - arm * 0.28, P.y + d); ctx.moveTo(P.x, P.y); ctx.lineTo(P.x + arm * 0.28, P.y + d); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(P.x, P.y + d, arm * 0.32, H * 0.03, 0, 0, Math.PI); ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(P.x, P.y + d, arm * 0.32, H * 0.012, 0, 0, Math.PI * 2); ctx.fillStyle = mix(col, "#ffffff", 0.4); ctx.fill(); ctx.stroke();
      return { x: P.x, y: P.y + d };
    };
    const pl = pan(L, "#c8ecd9"), pr = pan(R, "#ffd0d6");
    // 左盘：药物访客（冲动变小）
    chara(pl.x, lerp(top, pl.y, benefit), H * 0.04, { who: "drug", hatColor: "#8fdcc4", tag: n ? "抗精神病药" : "抗精神病药（短期）", eyes: "happy", arms: "up", alpha: benefit, shadow: false });
    // 右盘：两个红色砝码
    const wts = ["卒中", "死亡"];
    wts.forEach((t, k) => {
      const q = prog(4.5 + k * 1.2, 1.2);
      if (q <= 0) return;
      const x = pr.x + (k ? 1 : -1) * Math.max(arm * 0.13, H * 0.05), y = lerp(top, pr.y - H * 0.035, q);
      ctx.save(); ctx.globalAlpha *= q;
      rrect(x - H * 0.045, y - H * 0.035, H * 0.09, H * 0.07, 8); ctx.fillStyle = "#f28b8b"; ctx.fill(); outline(1.8); ctx.stroke();
      text(t, x, y + 1, fsz(0.024), "#fff");
      ctx.restore();
      if (q < 1 && q > 0.8) sfx("咚！", x, pr.y - H * 0.12, H * 0.04, C.bad, 0.1, 1);
    });
    // 医生站在中间想
    const dx = cx + H * 0.16, dy = H * 0.95;
    chara(dx, dy, H * 0.05, { who: "neuron", hair: "#6d5a45", cloth: "#ffffff", eyes: "open", mouth: "flat", arms: lt > 8 ? "point" : "down", glasses: true, tag: "医生" });
    if (lt > 8) emote("bulb", dx + H * 0.05, dy - H * 0.17, H * 0.03);
    callout("help", lt > 2 && lt < 7, pl.x, pl.y - H * 0.05, n ? W * 0.22 : W * 0.2, H * 0.72, "严重时：短期减轻激越");
    callout("warn", lt > 6, pr.x, pr.y, n ? W * 0.72 : W * 0.8, n ? H * 0.66 : H * 0.72, "警告：卒中、死亡风险增加");
    say("brex", lt > 1.8 && lt < (n ? 4.3 : 7.5), pl.x, top + H * 0.02, n ? W * 0.62 : W * 0.28, top + H * (n ? 0.1 : 0.08), "依匹哌唑：美国已获批用于阿尔茨海默病激越", "box");
    say("doc", lt > 8.5, dx, dy - H * 0.16, n ? W * 0.3 : W * 0.66, n ? H * 0.72 : H * 0.62, "由医生权衡：短期用、定期复查", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 1) { v1 = lt > 3 ? "变弱" : "有力"; v2 = agit > 0.5 ? "出现" : "很少"; }
    if (cur === 3) { v1 = found() + " 个"; v2 = agit > 0.7 ? "很强" : "减轻"; }
    if (cur === 4) { v1 = lt > 2.5 ? "减少" : "很多"; v2 = agit > 0.6 ? "偏强" : agit > 0.35 ? "减轻" : "平稳"; }
    pill(14, 12, c.pill[0], v1, "#e0804f", false);
    pill(W - 14, 12, c.pill2[0], v2, "#c0668a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) brakeView(S.v0);
    if (S.v1 > 0.02) mixerView(S.v1);
    if (S.v2 > 0.02) detectiveView(S.v2);
    if (S.v3 > 0.02) calmView(S.v3);
    if (S.v4 > 0.02) scaleView(S.v4);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0804f",
    titleCard: { lines: ["痴呆里的", "激越和幻觉"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
