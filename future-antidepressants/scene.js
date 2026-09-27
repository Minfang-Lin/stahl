Anima.register("future-antidepressants", {
    "title": "抗抑郁的新路线",
    "tag": "抗抑郁药",
    "headline": "抗抑郁药的【新路线】在哪里？",
    "lede": "氯胺酮证明了“快车道”存在，研究者于是寻找能口服、更持久的新药：右美沙芬和安非他酮一个挡 NMDA、一个让它留得更久；右美沙酮是美沙酮的“镜像另一半”；致幻剂辅助心理治疗也在严格监护下试验。它们指向同一个方向：谷氨酸和神经可塑性。",
    "summary": "右美沙芬-安非他酮的药代组合巧思（CYP2D6 抑制）和双重机制，右美沙酮的 NMDA 拮抗，裸盖菇素等致幻剂辅助心理治疗，以及谷氨酸与神经可塑性这条共同思路。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · 心境障碍的未来治疗",
    "footer": "这些新疗法大多仍在研究中，请不要自行购买、混用止咳药或尝试致幻剂。想了解新疗法，请到正规医院找医生评估。",
    "canvasLabel": "右美沙芬挡住 NMDA 门，安非他酮让肝脏里的 CYP2D6 流水线慢下来，右美沙酮和裸盖菇素登场，最后神经元长出新枝桠的动画",
    "regions": ["pfc", "synapse"],
    "parts": ["mood"],
    "cast": ["drug", "Glu", "DA", "NE", "5HT", "neuron"],
    "color": "#b49be0"
  }, () => {
  const V = (i) => { const o = {}; for (let k = 0; k < 7; k++) o["v" + k] = k === i ? 1 : 0; return o; };
  const CH = [
    Object.assign({ title: "快车道的启发",
      pill: ["氯胺酮", "起效快"], pill2: ["但是", "药效短"],
      text: "前面讲过，氯胺酮和艾司氯胺酮挡住 NMDA 受体，抗抑郁作用来得很快，还常常能迅速减轻自杀念头。可这份效果往往只维持几天，而且必须在医疗机构里用药、观察。于是研究者想找一条“口服版的快车道”：起效快、效果更持久、用起来方便，也更容易耐受。",
      fact: "思路：寻找像氯胺酮一样起效快、但能口服、效果更持久的 NMDA 拮抗剂" }, V(0)),
    Object.assign({ title: "右美沙芬：走得太快",
      pill: ["右美沙芬", "挡 NMDA"], pill2: ["难题", "代谢太快"],
      text: "候选之一是右美沙芬，它本来是常见的止咳药成分。在大脑里，它能挡住 NMDA 受体，也会结合 5-HT 转运体和 σ1 受体，这几处各起多大作用还不清楚。难题在肝脏：CYP2D6 这条代谢流水线把它拆得飞快，口服以后，很难在血液里维持足够的浓度。",
      fact: "右美沙芬主要经 CYP2D6 代谢，单独口服时很快被分解" }, V(1)),
    Object.assign({ title: "安非他酮：给流水线踩刹车",
      pill: ["安非他酮", "抑制 2D6"], pill2: ["右美沙芬", "留得更久"],
      text: "巧思在它的搭档身上。安非他酮本身是一种抗抑郁药，同时还会抑制 CYP2D6。把两者做进同一片药里，安非他酮让流水线慢下来，右美沙芬就能在血液里留得更久、浓度更稳。这是药代动力学上的配合：一个药负责让另一个药“留下来”。药物相互作用，有时也能被巧妙地利用。",
      fact: "安非他酮抑制 CYP2D6，让右美沙芬的血药浓度更高、维持更久" }, V(2)),
    Object.assign({ title: "两份力气合在一起",
      pill: ["右美沙芬", "谷氨酸"], pill2: ["安非他酮", "DA·NE"],
      text: "到了大脑里，两位各干各的活。右美沙芬挡住 NMDA 受体，走和氯胺酮相近的谷氨酸路线；安非他酮挡住多巴胺和去甲肾上腺素的回收门，走经典的单胺路线，两条路可能互相加成。书出版时它还在试验中，后来在美国获批用于成人抑郁症。请别自己把止咳药和抗抑郁药混着吃，那可能有危险。",
      fact: "右美沙芬-安非他酮：一片药里同时走谷氨酸路线和单胺路线" }, V(3)),
    Object.assign({ title: "右美沙酮：镜子里的另一半",
      pill: ["美沙酮", "左旋+右旋"], pill2: ["右美沙酮", "研究中"],
      text: "另一位候选叫右美沙酮。美沙酮其实是一对“镜像双胞胎”的混合物，就像左手和右手。左旋的那一半主要激动 μ 阿片受体，这是美沙酮能用于治疗阿片类物质使用障碍的原因；右旋的那一半阿片作用弱得多，却能挡住 NMDA 受体。研究者把它单独拿出来，当作起效快的抗抑郁药来试验。",
      fact: "右美沙酮是美沙酮的右旋体：阿片作用较弱，能拮抗 NMDA，仍在研究中" }, V(4)),
    Object.assign({ title: "致幻剂辅助心理治疗",
      pill: ["裸盖菇素", "激动 2A"], pill2: ["前提", "严格监护"],
      text: "还有一条路把药物和心理治疗绑在一起。裸盖菇素在体内变成裸盖菇碱，主要激动 5-HT2A 受体；MDMA 则让大量 5-HT 被释放出来。研究者设想：在治疗师陪伴下，这种特殊状态也许让人更容易重新面对痛苦记忆、把它重新整理。这些都还在研究中，只能在严格的医疗监护下进行；自己使用有真实的危险。",
      fact: "裸盖菇素的致幻作用主要来自激动 5-HT2A 受体；辅助心理治疗仍在研究中" }, V(5)),
    Object.assign({ title: "共同的方向：长出新连接",
      pill: ["共同点", "谷氨酸"], pill2: ["目标", "新连接"],
      text: "把这些新路线放在一起看，方向很相似：不只是多送一点单胺，而是去调动谷氨酸系统，帮神经元重新长出连接。挡住 NMDA 受体可能引发一阵谷氨酸释放，带动新突触生长；激动 5-HT2A 也会让前额叶释放更多谷氨酸。它们大多还在研究中，机制也在继续弄清。想尝试新疗法，请找正规医院的医生评估。",
      fact: "新一代抗抑郁思路的共同点：谷氨酸系统和神经可塑性" }, V(6)),
  ];

  const C = Object.assign({}, Anima.C, { acc: "#b49be0", accD: "#7d62c4", nmda: "#ffe0b8", liver: "#f6d9cf" });
  const { clamp, lerp, ease, alpha, outline, rrect, text, chara, say, callout, pill, glow, sparkles, sparkle, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = V(0);
  const DXM = { who: "drug", label: "", hatColor: "#f7b267", hatColor2: "#fff4e0" };
  const BUP = { who: "drug", label: "", hatColor: "#7fc8a9", hatColor2: "#eafaf2" };
  const ESK = { who: "drug", label: "", hatColor: "#ffb08a", hatColor2: "#fff3ea" };
  const PSI = { who: "drug", label: "", hatColor: "#c3a6ec", hatColor2: "#f6f0ff" };
  const CYP = { who: "AChE", label: "2D6", hair: "#c98f6d", cloth: "#f7e0d2", hatColor: "#e8a58a" };
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
  function card(b, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(120,100,150,0.18)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(b.x, b.y, b.w, b.h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(b.x, b.y, b.w, b.h, 18); ctx.stroke();
    if (title) plate(title, b.x + b.w / 2, b.y, color || "#efe6fb", fz(0.028), b.x + 2, b.x + b.w - 2);
  }
  function bg(top, bot, seed) {
    Anima.wash(top, bot);
    Anima.bokeh(6, "#e6dcfb", 0.6, seed);
    Anima.petals(5, 0.35, seed + 3);
  }
  function fade(a, fn) { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha *= a; fn(); ctx.restore(); }
  function top() { return Anima.topSafe() + H * 0.06; }
  function two(gapK) {
    const t = top(), g = W * (gapK || 0.03), w = (W - g * 3) / 2, h = H - t - H * 0.04;
    return [{ x: g, y: t, w, h }, { x: g * 2 + w, y: t, w, h }];
  }
  // 膜 + NMDA 门；返回门的结合位点
  function nmdaGate(x, y, s, act, label) {
    return Anima.receptor(x, y, s, C.nmda, act, { shape: "square", label: label === undefined ? "NMDA" : label });
  }
  function membrane(b, y, fill) {
    ctx.save(); rrect(b.x, b.y, b.w, b.h, 18); ctx.clip();
    ctx.fillStyle = fill || "#f3eefc"; ctx.fillRect(b.x, y, b.w, b.h);
    ctx.restore();
    outline(1.6); ctx.beginPath(); ctx.moveTo(b.x, y); ctx.lineTo(b.x + b.w, y); ctx.stroke();
  }
  function gauge(x, y, w, h, v, label) {
    rrect(x, y, w, h, h / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    if (v > 0.01) { rrect(x + 2, y + 2, Math.max(h - 4, (w - 4) * v), h - 4, (h - 4) / 2); ctx.fillStyle = "#f7b267"; ctx.fill(); }
    if (label) text(label, x + w / 2, y - fz(0.024) * 0.9, fz(0.024), C.ink);
  }
  // 肝脏里的 CYP2D6 流水线：block 0～1 表示被安非他酮抑制了多少
  function conveyor(b, block, showBup) {
    const nw = Anima.narrow, by = b.y + b.h * 0.74, s = Math.min(H * 0.04, b.w * 0.055), back = by - s * 3.4;
    // 传送带
    rrect(b.x + b.w * 0.04, by, b.w * 0.92, H * 0.03, H * 0.015); ctx.fillStyle = "#eadfd8"; ctx.fill(); outline(1.4); ctx.stroke();
    for (let k = 0; k < 12; k++) { const x = b.x + b.w * 0.06 + ((k / 12 + time * 0.08) % 1) * b.w * 0.88; ctx.beginPath(); ctx.arc(x, by + H * 0.015, H * 0.006, 0, Math.PI * 2); ctx.fillStyle = "#c9b6ab"; ctx.fill(); }
    const wx = b.x + b.w * 0.5, speed = lerp(0.11, 0.07, block);
    rrect(wx - s * 4, back - s * 0.1, s * 8, s * 0.7, s * 0.3); ctx.fillStyle = "#f3e6dc"; ctx.fill(); outline(1.3); ctx.stroke();
    // CYP2D6 工人
    chara(wx, back, s * 1.25, Object.assign({}, CYP, { item: block > 0.5 ? null : "scissors", arms: block > 0.5 ? "down" : "hold", eyes: block > 0.5 ? "sleepy" : "open", mouth: block > 0.5 ? "o" : "smile", shadow: false }));
    if (block < 0.5) sfx("咔嚓", wx + s * 2.6, back - s * 3.6, fz(0.026), "#e0785a", -0.1, 0.9);
    else emote("zzz", wx + s * 1.6, back - s * 4.2, s * 0.8);
    if (showBup > 0) chara(wx - s * 2.4, back, s * 1.15, Object.assign({}, BUP, { arms: "shh", eyes: "happy", alpha: showBup, tag: nw ? null : "安非他酮", shadow: false }));
    // 右美沙芬们沿传送带走
    for (let i = 0; i < 5; i++) {
      const t = (time * speed + i / 5) % 1, x = b.x + b.w * (0.07 + t * 0.86);
      const past = x > wx + s * 0.8;
      const chop = past ? clamp((1 - block) * 1.2, 0, 1) : 0;
      const al = Math.min(1, t * 8, (1 - t) * 8) * (1 - chop * clamp((x - wx) / (b.w * 0.2), 0, 0.85));
      if (al <= 0.02) continue;
      chara(x, by - H * 0.002, s * (past ? lerp(1, 0.55, chop) : 1), Object.assign({}, DXM, { walk: time * 9 + i, eyes: chop > 0.5 ? "dizzy" : "happy", mouth: chop > 0.5 ? "o" : "smile", alpha: al, shadow: false, gray: chop * 0.6 }));
    }
    return { wx, by: back, s };
  }

  // ---------- 第 1 幕：快车道的启发 ----------
  function v0(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#f8f4ff", "#fff6ef", 11);
      const [L, R] = two();
      card(L, nw ? "氯胺酮类" : "氯胺酮、艾司氯胺酮", "#ffe6d6");
      card(R, nw ? "心愿单" : "研究者的心愿单", "#efe6fb");
      const my = L.y + L.h * 0.52, s = Math.min(H * 0.046, L.w * 0.08);
      membrane(L, my);
      const site = nmdaGate(L.x + L.w * 0.3, my, H * 0.062, 0).site;
      const p = prog(0.6, 1.4);
      chara(lerp(L.x + L.w * 0.1, site.x, p), p < 1 ? lerp(my - H * 0.12, site.y, p) : site.y, s, Object.assign({}, ESK, { walk: p < 1 ? time * 9 : null, arms: p >= 1 ? "shh" : "down", eyes: "happy", shadow: false }));
      const burst = prog(2.2, 1);
      for (let k = 0; k < 3; k++) if (burst > 0) chara(L.x + L.w * (0.62 + k * 0.12), my - H * 0.02 - Math.abs(Math.sin(time * 4 + k)) * H * 0.02, s * 0.85, { who: "Glu", eyes: "sparkle", arms: "up", alpha: burst, shadow: false, seed: k });
      // 效果电量：几天后慢慢下降
      const e = lt < 3 ? prog(1.8, 1.2) : lerp(1, 0.25, prog(5, 4));
      const gy = L.y + L.h * 0.8;
      gauge(L.x + L.w * 0.15, gy, L.w * 0.7, H * 0.035, e, nw ? "效果" : "抗抑郁效果");
      fade(prog(5.5, 1), () => plate(nw ? "几天后↓" : "几天后慢慢退去", L.x + L.w / 2, gy + H * 0.08, "#ffe3e6", fz(0.024), L.x, L.x + L.w));
      const wish = nw ? ["能口服", "起效快", "更持久", "好耐受"] : ["能口服，用起来方便", "起效快", "效果更持久", "更容易耐受"];
      const fs = fz(nw ? 0.026 : 0.03);
      wish.forEach((t, i) => {
        const y = R.y + R.h * (0.2 + i * 0.17), bx = R.x + R.w * 0.12, q = prog(6.5 + i * 1, 0.6);
        rrect(bx - fs * 0.5, y - fs * 0.5, fs, fs, 4); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
        if (q > 0) fade(q, () => { Anima.heart(bx, y, fs * 0.36, C.rose); });
        text(t, bx + fs, y + 1, fs, C.ink, "left");
      });
      callout("f0-nmda", lt > 1.4 && lt < 5, site.x, site.y - s * 2.6, L.x + L.w * 0.4, L.y + L.h * 0.22, nw ? "挡住 NMDA" : "挡住 NMDA 门");
      callout("f0-clinic", lt > 9.5, L.x + L.w * 0.5, gy, nw ? R.x + R.w * 0.5 : L.x + L.w * 0.5, nw ? R.y + R.h * 0.92 : L.y + L.h * 0.97, nw ? "要在医院里用" : "还得在医疗机构里用药");
    });
  }

  // ---------- 第 2 幕：右美沙芬 ----------
  function v1(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#fff8f0", "#f6f2ff", 21);
      const t0 = top(), g = W * 0.03, lw = W * (nw ? 0.36 : 0.35);
      const L = { x: g, y: t0, w: lw, h: H - t0 - H * 0.04 }, R = { x: g * 2 + lw, y: t0, w: W - g * 3 - lw, h: H - t0 - H * 0.04 };
      card(L, "大脑", "#efe6fb"); card(R, nw ? "肝脏" : "肝脏：CYP2D6 流水线", "#ffe6d6");
      const my = L.y + L.h * 0.55, s = Math.min(H * 0.046, L.w * 0.1);
      membrane(L, my);
      const site = nmdaGate(L.x + L.w * 0.5, my, H * 0.062, 0).site;
      chara(site.x, site.y, s, Object.assign({}, DXM, { arms: "shh", eyes: "happy", shadow: false }));
      plate("右美沙芬", L.x + L.w / 2, L.y + L.h * 0.16, "#fff4e0", fz(0.026), L.x, L.x + L.w);
      fade(prog(nw ? 6.2 : 2.5, 1), () => {
        plate(nw ? "SERT·σ1 ⚠" : "也碰 SERT、σ1 ⚠", L.x + L.w / 2, L.y + L.h * 0.8, "#fff4d6", fz(0.024), L.x, L.x + L.w);
      });
      const c = conveyor(R, 0, 0);
      const gv = 0.12 + Math.sin(time * 2) * 0.02;
      gauge(R.x + R.w * 0.2, R.y + R.h * 0.2, R.w * 0.6, H * 0.035, gv, nw ? "血中浓度" : "血液里的右美沙芬");
      fade(prog(6, 1), () => plate(nw ? "太低了" : "很快被拆掉，浓度上不去", R.x + R.w / 2, R.y + R.h * 0.88, "#ffe3e6", fz(0.026), R.x, R.x + R.w));
      callout("f1-nmda", lt > 1 && lt < 6, site.x, my + H * 0.06, L.x + L.w * 0.5, L.y + L.h * 0.68, "挡住 NMDA");
      say("f1-cyp", !nw && lt > 7 && lt < 12, c.wx + c.s, c.by - c.s * 4, R.x + R.w * (nw ? 0.72 : 0.75), R.y + R.h * 0.38, nw ? "拆拆拆～" : "来一个拆一个～", "say");
    });
  }

  // ---------- 第 3 幕：安非他酮踩刹车 ----------
  function v2(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#f3fbf7", "#f8f4ff", 31);
      const t0 = top(), b = { x: W * 0.03, y: t0, w: W * 0.94, h: H - t0 - H * 0.04 };
      card(b, nw ? "肝脏：CYP2D6" : "肝脏：CYP2D6 流水线", "#ffe6d6");
      const blk = prog(3.2, 1.2), come = prog(0.8, 2.2);
      const c = conveyor({ x: b.x + b.w * 0.05, y: b.y, w: b.w * 0.9, h: b.h }, blk, come >= 1 ? 1 : 0);
      if (come < 1) chara(lerp(b.x + b.w * 0.97, c.wx - c.s * 2.3, come), c.by, c.s * 1.1, Object.assign({}, BUP, { walk: come > 0 ? time * 9 : null, dir: -1, eyes: "happy", shadow: false }));
      const gv = lerp(0.12, 0.8, prog(4.5, 4));
      gauge(b.x + b.w * 0.25, b.y + b.h * 0.2, b.w * 0.5, H * 0.035, gv, nw ? "血中浓度" : "血液里的右美沙芬");
      if (gv > 0.7) sparkles(b.x + b.w * 0.25 + b.w * 0.5 * gv, b.y + b.h * 0.2, H * 0.04, 3, 1, 3);
      fade(prog(8.5, 1), () => plate(nw ? "留得更久" : "右美沙芬留得更久、浓度更稳", b.x + b.w / 2, b.y + b.h * 0.9, "#dff5ec", fz(0.028), b.x, b.x + b.w));
      callout("f2-bup", lt > 3.4 && lt < 8, c.wx - c.s * 2.3, c.by - c.s * 3.2, c.wx - b.w * 0.25, b.y + b.h * 0.38, nw ? "抑制 CYP2D6" : "安非他酮：抑制 CYP2D6");
      say("f2-cyp", lt > 5 && lt < 9, c.wx, c.by - c.s * 4.2, c.wx + b.w * 0.22, b.y + b.h * 0.4, nw ? "好困……" : "好困，慢一点……", "think");
    });
  }

  // ---------- 第 4 幕：双重机制 ----------
  function v3(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#f8f4ff", "#fff8f0", 41);
      const [L, R] = two(0.04);
      card(L, nw ? "谷氨酸路线" : "右美沙芬：谷氨酸路线", "#ffe6d6");
      card(R, nw ? "单胺路线" : "安非他酮：单胺路线", "#dff5ec");
      const my = L.y + L.h * 0.5, s = Math.min(H * 0.046, L.w * 0.08);
      membrane(L, my); membrane(R, my, "#eef8f3");
      const p1 = prog(0.6, 1.2), p2 = prog(3.4, 1.2);
      const site = nmdaGate(L.x + L.w * 0.26, my, H * 0.062, 0).site;
      if (p1 > 0) chara(site.x, site.y, s, Object.assign({}, DXM, { arms: "shh", eyes: "happy", alpha: p1, shadow: false }));
      const burst = prog(1.8, 1);
      for (let k = 0; k < 3; k++) if (burst > 0) chara(L.x + L.w * (0.58 + k * 0.13), my - H * 0.02 - Math.abs(Math.sin(time * 4 + k)) * H * 0.02, s * 0.8, { who: "Glu", eyes: "sparkle", arms: "up", alpha: burst, shadow: false, seed: k });
      const tx = [R.x + R.w * 0.3, R.x + R.w * 0.7];
      tx.forEach((x, i) => {
        Anima.transporter(x, my, H * 0.05, i ? "#ffb3bd" : "#ffd27a", p2 >= 1 ? 0 : time * 2.5, false);
        if (p2 > 0) chara(x, my - H * 0.055, s * 0.9, Object.assign({}, BUP, { arms: "shh", eyes: "happy", alpha: p2, shadow: false }));
      });
      const n = p2 >= 1 ? 4 : 2;
      for (let k = 0; k < n; k++) chara(R.x + R.w * (0.16 + k * 0.22), my + H * 0.18, s * 0.85, { who: k % 2 ? "NE" : "DA", eyes: "happy", arms: p2 >= 1 ? "up" : "down", shadow: false, seed: k });
      text("+", W / 2, my, fz(0.06), C.accD);
      fade(prog(6, 1), () => {
        plate(nw ? "NMDA 拮抗" : "挡住 NMDA，引发谷氨酸释放", L.x + L.w / 2, L.y + L.h * 0.84, "#fff", fz(0.024), L.x, L.x + L.w);
        plate(nw ? "挡 DA、NE 回收" : "挡住 DA、NE 的回收门", R.x + R.w / 2, R.y + R.h * 0.84, "#fff", fz(0.024), R.x, R.x + R.w);
      });
      fade(prog(9, 1), () => plate(nw ? "可能互相加成 ⚠" : "两条路可能互相加成 ⚠", W / 2, H * 0.97 - fz(0.028), "#efe6fb", fz(0.028)));
      say("f3-da", lt > 5 && lt < 8.8, R.x + R.w * 0.16, my + H * 0.18 - s * 2.8, R.x + R.w * 0.5, R.y + R.h * 0.2, nw ? "留下来啦～" : "我们多留一会儿～", "say");
    });
  }

  // ---------- 第 5 幕：右美沙酮 ----------
  function v4(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#f6f8ff", "#fff6f0", 51);
      const t0 = top(), b = { x: W * 0.03, y: t0, w: W * 0.94, h: H - t0 - H * 0.04 };
      card(b, "美沙酮 = 左旋 + 右旋", "#efe6fb");
      const cx = W / 2, my = b.y + b.h * 0.6, s = Math.min(H * 0.055, b.w * 0.06);
      // 镜子
      const mg = ctx.createLinearGradient(cx - 6, 0, cx + 6, 0); mg.addColorStop(0, "#e8f4fb"); mg.addColorStop(1, "#ffffff");
      rrect(cx - W * 0.012, b.y + b.h * 0.12, W * 0.024, b.h * 0.72, 8); ctx.fillStyle = mg; ctx.fill(); outline(1.5); ctx.stroke();
      sparkle(cx, b.y + b.h * 0.2, H * 0.02, 0.8 + 0.2 * Math.sin(time * 3));
      const LX = b.x + b.w * 0.25, RX = b.x + b.w * 0.75;
      membrane(b, my, "#f5f1fb");
      const mu = Anima.receptor(LX, my, H * 0.062, "#cfe3f7", prog(2, 1), { shape: "round", label: "μ" });
      const nm = nmdaGate(RX, my, H * 0.062, 0);
      const p = prog(0.6, 1.5);
      const twin = (x0, site, arms, tag, dir, hc) => { chara(lerp(cx + dir * W * 0.05, site.x, p), p < 1 ? lerp(my - H * 0.1, site.y, p) : site.y, s * 0.85, { who: "drug", label: "", hatColor: hc, hatColor2: "#fff", walk: p < 1 ? time * 9 : null, dir: -dir, arms: p >= 1 ? arms : "down", eyes: "happy", shadow: false });
        fade(p, () => plate(tag, site.x + dir * s * 2.2, my - s * 1.6, hc, fz(0.026))); };
      twin(LX, mu.site, "hold", "左旋", -1, "#8fb8e8");
      twin(RX, nm.site, "shh", "右旋", 1, "#e8a0c8");
      fade(prog(3, 1), () => plate(nw ? "激动 μ：阿片作用" : "强烈激动 μ 阿片受体", LX, b.y + b.h * 0.8, "#e4eefb", fz(0.026), b.x, cx - W * 0.02));
      fade(prog(5.5, 1), () => plate(nw ? "挡 NMDA，阿片弱" : "阿片作用弱，能挡 NMDA", RX, b.y + b.h * 0.8, "#ffe3ee", fz(0.026), cx + W * 0.02, b.x + b.w));
      fade(prog(8.5, 1), () => plate(nw ? "右美沙酮：研究中 ⚠" : "单独拿出右旋：右美沙酮，研究中 ⚠", RX, b.y + b.h * 0.92, "#fff4d6", fz(0.024), cx + W * 0.01, b.x + b.w));
      callout("f4-l", lt > 2 && lt < 5.5, LX, my - s * 3, LX, b.y + b.h * 0.18, nw ? "用于阿片使用障碍" : "美沙酮治疗阿片类物质使用障碍靠它");
      callout("f4-r", lt > 6.5, RX, my - s * 3, RX, b.y + b.h * 0.18, nw ? "抗抑郁候选" : "快速抗抑郁的候选");
    });
  }

  // ---------- 第 6 幕：致幻剂辅助心理治疗 ----------
  function v5(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#f8f4ff", "#f3fbf7", 61);
      const [L, R] = two();
      card(L, nw ? "5-HT2A" : "作用靶点：5-HT2A", "#efe6fb");
      card(R, nw ? "治疗室" : "治疗师陪伴的治疗室", "#dff5ec");
      const my = L.y + L.h * 0.55, s = Math.min(H * 0.046, L.w * 0.08);
      membrane(L, my);
      const p = prog(0.6, 1.4), on = prog(2, 1);
      const r2a = Anima.receptor(L.x + L.w * 0.5, my, H * 0.062, "#d9ccf5", on * (0.7 + 0.3 * Math.sin(time * 4)), { shape: "tri" });
      chara(lerp(L.x + L.w * 0.15, r2a.site.x, p), p < 1 ? lerp(my - H * 0.12, r2a.site.y, p) : r2a.site.y, s, Object.assign({}, PSI, { walk: p < 1 ? time * 9 : null, arms: p >= 1 ? "up" : "down", eyes: "sparkle", shadow: false }));
      plate("裸盖菇素 → 裸盖菇碱", L.x + L.w / 2, L.y + L.h * 0.14, "#f6f0ff", fz(nw ? 0.022 : 0.026), L.x, L.x + L.w);
      if (on > 0.5) glow(r2a.site.x, my, H * 0.08, "#c3a6ec", on * 0.6);
      fade(prog(3.5, 1), () => plate(nw ? "MDMA：放出 5-HT" : "MDMA：让大量 5-HT 被放出来", L.x + L.w / 2, L.y + L.h * 0.84, "#fff", fz(0.024), L.x, L.x + L.w));
      // 治疗室：病人、治疗师、正在重新整理的记忆盒
      const fy = R.y + R.h * 0.86, ps = Math.min(H * 0.055, R.w * 0.1);
      const px = R.x + R.w * 0.3, dx = R.x + R.w * 0.72;
      chara(px, fy, ps, { who: "neuron", hair: "#8a6f9e", cloth: "#dcecf8", eyes: lt > 9 ? "happy" : "closed", mouth: "smile", arms: "hug" });
      chara(dx, fy, ps * 0.95, Object.assign({}, DOC, { eyes: "happy", arms: "hold", item: "book", dir: -1, tag: "治疗师" }));
      const mx = (px + dx) / 2, mY = R.y + R.h * 0.38, q = prog(5, 4);
      for (let k = 0; k < 4; k++) {
        const ang = k * 1.6 + q * Math.PI * 1.5, r = R.w * 0.12 * (1 - q * 0.6);
        const x = mx + Math.cos(ang) * r, y = mY + Math.sin(ang) * r * 0.5;
        rrect(x - H * 0.032, y - H * 0.023, H * 0.064, H * 0.046, 5);
        ctx.fillStyle = Anima.mix("#cfc6cc", ["#ffd9c2", "#bfe8d6", "#ddd5fa", "#fff1b8"][k], q); ctx.fill(); outline(1.2); ctx.stroke();
      }
      if (q > 0.9) sparkles(mx, mY, R.w * 0.1, 3, 1, 8);
      fade(prog(9.5, 1), () => plate(nw ? "严格医疗监护下" : "只在严格医疗监护下研究", R.x + R.w / 2, R.y + R.h * 0.08 + fz(0.03), "#ffe3e6", fz(0.026), R.x, R.x + R.w));
      callout("f5-mem", lt > 5.2 && lt < 9.2, mx, mY - H * 0.03, mx, R.y + R.h * 0.2, nw ? "重新整理记忆 ⚠" : "重新面对、整理痛苦记忆 ⚠");
      callout("f5-2a", lt > 2.4 && lt < 7, r2a.site.x, my + H * 0.05, L.x + L.w * 0.5, L.y + L.h * 0.7, nw ? "激动 5-HT2A" : "激动 5-HT2A 受体");
    });
  }

  // ---------- 第 7 幕：共同方向 ----------
  function v6(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#fff8f0", "#f3fbf7", 71);
      const t0 = top(), b = { x: W * 0.03, y: t0, w: W * 0.94, h: H - t0 - H * 0.04 };
      card(b, nw ? "谷氨酸 → 新连接" : "谷氨酸一阵释放 → 长出新连接", "#fff1d6");
      const s = Math.min(H * 0.046, b.w * 0.045);
      const srcs = [["挡 NMDA", "#f7b267", 0.2], ["激动 5-HT2A", "#c3a6ec", 0.5]];
      if (!nw) srcs.push(["安非他酮等单胺药", "#7fc8a9", 0.8]);
      const ay = b.y + b.h * 0.2;
      srcs.forEach((q, i) => fade(prog(0.5 + i * 1, 0.8), () => plate(q[0], b.x + b.w * (nw ? 0.28 + i * 0.44 : q[2]), ay, q[1], fz(0.026), b.x, b.x + b.w)));
      // 树突和新枝桠
      const dy = b.y + b.h * 0.72, grow = prog(4.5, 3);
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * 0.012); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(b.x + b.w * 0.06, dy + H * 0.04); ctx.quadraticCurveTo(b.x + b.w * 0.5, dy - H * 0.04, b.x + b.w * 0.94, dy + H * 0.04); ctx.stroke();
      ctx.strokeStyle = "#f3a996"; ctx.lineWidth = Math.max(2, H * 0.007);
      for (let k = 0; k < 7; k++) {
        const x = b.x + b.w * (0.14 + k * 0.12), y0 = dy + Math.pow((k - 3) / 3, 2) * H * 0.035 - H * 0.005, Lh = H * 0.07 * ease(grow * 1.4 - k * 0.06);
        if (Lh < 1) continue;
        ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y0 - Lh); ctx.stroke();
        ctx.beginPath(); ctx.arc(x, y0 - Lh, H * 0.012, 0, Math.PI * 2); ctx.fillStyle = "#f3a996"; ctx.fill();
      }
      if (grow > 0.8) sparkles(b.x + b.w / 2, dy - H * 0.07, b.w * 0.3, 4, grow, 4);
      const burst = prog(2.5, 1.2);
      for (let k = 0; k < 5; k++) if (burst > 0) {
        const x = b.x + b.w * (0.2 + k * 0.15), y = lerp(ay + H * 0.2, dy - H * 0.1, burst);
        chara(x, y, s, { who: "Glu", eyes: "sparkle", arms: "up", jump: Math.abs(Math.sin(time * 4 + k)) * 0.2, shadow: false, seed: k });
      }
      fade(prog(9, 1), () => plate(nw ? "大多还在研究中" : "大多还在研究中：想尝试，请找正规医院评估", b.x + b.w / 2, b.y + b.h * 0.93, "#ffe3e6", fz(0.026), b.x, b.x + b.w));
      callout("f6-sp", lt > 6.5 && lt < 9.5, b.x + b.w * 0.5, dy - H * 0.06, b.x + b.w * 0.5, b.y + b.h * 0.4, nw ? "新突触长出来" : "神经可塑性：新突触长出来");
    });
  }

  const VIEWS = [v0, v1, v2, v3, v4, v5, v6];
  function draw() {
    ctx.fillStyle = "#fbf8ff"; ctx.fillRect(0, 0, W, H);
    VIEWS.forEach((f, i) => { if (S["v" + i] > 0.02) f(S["v" + i]); });
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.accD, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#e0785a", true);
  }

  return {
    chapters: CH, state: S, dur: 14, accent: "#b49be0",
    titleCard: { lines: ["抗抑郁药的", "新路线"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
