Anima.register("neuropathic-pain", {
    "title": "神经自己出了错：神经病理性疼痛",
    "tag": "慢性疼痛",
    "headline": "没有人碰你，神经却在【喊痛】",
    "lede": "平常的疼痛，是神经如实地报告伤害；神经病理性疼痛，是报信的线路自己出了故障。钻进受损的神经和脊髓后角看一看：钠通道怎样让神经自己放电，后角神经元怎样被“上发条”，以及几类药分别在哪一站帮忙。",
    "summary": "外周敏化（受损神经的钠通道、自发放电、串线）、脊髓后角的上发条和 NMDA、中枢敏化与触诱发痛，α2δ 配体偏爱开放的钙通道，钠通道阻断剂和 SNRI。",
    "chapter": "对应 Stahl《精神药理学精要》第 9 章 · 神经病理性疼痛",
    "footer": "麻、刺、烧灼样的长期疼痛，请到疼痛科或神经科就诊；止痛相关药物都请遵医嘱使用。",
    "canvasLabel": "受损的神经上钠通道变多、自己放电，脊髓后角神经元被上发条，加巴喷丁类药物抱住忙碌的钙通道的动画",
    "regions": ["brainstem"],
    "parts": ["pain"],
    "cast": ["Glu", "neuron", "NE", "drug"],
    "color": "#f59a8c"
  }, () => {
  const CH = [
    { title: "报信的电线出了故障", vN: 1, vS: 0, vM: 0,
      pill: ["平常的痛", "如实报警"], pill2: ["神经痛", "线路故障"],
      text: "平常的疼痛，是外周神经这条“电线”在如实报告伤害：被针扎一下，神经末梢把刺激变成电信号，沿着神经跑到脊髓后角，再往上传进大脑。神经病理性疼痛不一样，受伤或生病的是神经系统本身，比如糖尿病、带状疱疹伤到了神经。这时候，是报信的线路自己出了故障。",
      fact: "神经病理性疼痛来自神经系统本身的损伤或功能异常，而不是组织受伤后正常的报警" },
    { title: "没人碰，也在发信号", vN: 1, vS: 0, vM: 0,
      pill: ["钠通道", "变多了"], pill2: ["信号", "自己冒出"],
      text: "先看外周。电信号靠神经上的钠通道一站站点燃。受损的那一段，钠通道可能变多、变得一点就着，于是神经在受伤的地方自己放电：皮肤什么也没碰到，它也不停地往脊髓送“痛”的信号。受损的神经之间还可能串线，旁边管轻触的纤维一动，信号就窜到疼痛纤维上。这叫外周敏化。",
      fact: "受损的神经可以在不该放电的位置自发产生冲动，这是外周敏化的一部分" },
    { title: "后角被“上了发条”", vN: 0, vS: 1, vM: 0,
      pill: ["后角", "上发条"], pill2: ["NMDA", "被敲开"],
      text: "信号到了脊髓后角，要交给下一个神经元。如果疼痛信号一刻不停地涌进来，这个神经元会被“上发条”：同样强度的刺激，反应一次比一次大。谷氨酸平时主要打开 AMPA 门；被反复敲门以后，平时被镁离子堵住的 NMDA 门也打开了，更多钙流进细胞，把它推向更兴奋的状态。",
      fact: "上发条（wind-up）：持续的疼痛输入让后角神经元对同样的刺激反应越来越强" },
    { title: "总开关打开：中枢敏化", vN: 0, vS: 1, vM: 0,
      pill: ["中枢敏化", "放大器"], pill2: ["轻轻一碰", "也痛"],
      text: "持续的轰炸会让后角的受体和通道被加上磷酸化标记，传信效率变高，门也装得更多，像打开了放大疼痛的总开关。上游末梢放出的谷氨酸也更多。结果，本来只报告轻触的信号也被当成疼痛：轻轻一碰就痛，叫触诱发痛。更高处的丘脑和皮层也可能“学会”放大，伤好了，痛还在。",
      fact: "中枢敏化以后，即使外周不再有伤害信号，疼痛通路也可能自己维持、放大疼痛" },
    { title: "α2δ 配体：专挑忙的通道", vN: 0, vS: 1, vM: 0,
      pill: ["α2δ 配体", "少放递质"], pill2: ["偏爱", "忙的通道"],
      text: "加巴喷丁和普瑞巴林叫 α2δ 配体。它们结合在末梢电压门控钙通道的 α2δ 亚基上，让流进来的钙变少，放出的谷氨酸也就少了。有意思的是，它们更容易结合正在频繁打开的通道，所以主要压住那些过度兴奋、一直在喊痛的末梢，对安静的正常通道影响比较小。",
      fact: "α2δ 配体偏爱处在开放状态的钙通道，是一种“使用依赖性”的抑制" },
    { title: "三个位置，三种帮手", vN: 0, vS: 0, vM: 1,
      pill: ["下手处", "三站"], pill2: ["阿片类", "并不更好"],
      text: "治疗神经病理性疼痛，可以在不同的站下手。在受损的神经上，钠通道阻断剂让异常放电安静下来，比如卡马西平常用于三叉神经痛，局部用的利多卡因也属这一类。在脊髓后角，α2δ 配体减少过多的递质释放。从脑干往下，SNRI 加强下行抑制，去甲肾上腺素通过 α2 受体踩刹车。都要遵医嘱使用。",
      fact: "Stahl 指出：对慢性神经病理性疼痛，阿片类一般并不比 SNRI 或 α2δ 配体更有效" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    fiberC: "#ffb3a0", fiberA: "#b9dcf5", skin2: "#ffe3d3", horn: "#fff1e6", term: "#ffd6c4", post: "#ffe3ea",
    na: "#9fd3f0", vscc: "#a9e0c4", a2d: "#fff1b8", brain: "#ffd0dc", brainDeep: "#f4a9bd",
  });
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { vN: 1, vS: 0, vM: 0 };
  const P = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsS = () => Math.max(12, W / 58) * Anima.UI;

  function update() { lt = Anima.sceneTime; }

  // ---------- 小工具 ----------
  function chip(t, x, y, col, fs, tc) {
    fs = fs || fsS() * 0.85;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = col || "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, fs, tc || C.ink);
    return { w, h };
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 16); ctx.stroke();
    let fs = Math.max(12, Math.min(W / 42, h * 0.09)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(title).width + fs * 1.2;
    if (tw > w * 0.96) { fs *= w * 0.96 / tw; tw = w * 0.96; }
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function tube(pts, col, w, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.stroke();
    ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.55)"; ctx.lineWidth = Math.max(1, w * 0.2); ctx.stroke();
    ctx.restore();
  }
  function brainBlob(x, y, r, hurt) {
    const col = mix(C.brain, "#ffb0b0", hurt * (0.5 + 0.5 * Math.sin(time * 9)));
    ctx.beginPath();
    for (const q of [[-0.45, 0.05, 0.62], [0.1, -0.2, 0.7], [0.55, 0.08, 0.58], [0, 0.25, 0.65]]) { ctx.moveTo(x + q[0] * r + q[2] * r, y + q[1] * r); ctx.arc(x + q[0] * r, y + q[1] * r, q[2] * r, 0, Math.PI * 2); }
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.05); ctx.stroke(); ctx.fillStyle = col; ctx.fill();
    face(x + r * 0.05, y + r * 0.12, r * 0.4, hurt > 0.5 ? -1 : 1);
    if (hurt > 0.5) Anima.sweat(x + r * 0.7, y - r * 0.4, r * 0.25);
  }
  function needle(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(-0.5);
    outline(Math.max(1.2, s * 0.08));
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -s * 2.4); ctx.stroke();
    rrect(-s * 0.3, -s * 3.4, s * 0.6, s * 1.1, s * 0.2); ctx.fillStyle = "#ffd6e0"; ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function featherIcon(x, y, s, rot, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(s * 0.5, -s * 0.35, s * 1.4, -s * 0.1); ctx.quadraticCurveTo(s * 0.6, s * 0.3, 0, 0);
    ctx.fillStyle = "#f3f0ff"; ctx.fill(); outline(Math.max(1, s * 0.05)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-s * 0.2, s * 0.05); ctx.lineTo(s * 1.3, -s * 0.08); ctx.stroke();
    ctx.restore();
  }

  // ================= 第 1、2 幕：受损的神经 =================
  function gN() {
    const n = N(), top = Anima.topSafe();
    const x0 = W * 0.12, x1 = W * (n ? 0.64 : 0.68);
    const box = { x: W * (n ? 0.68 : 0.72), y: H * (n ? 0.47 : 0.4), w: W * (n ? 0.29 : 0.2), h: H * (n ? 0.4 : 0.42) };
    const yC = box.y + box.h * 0.3, yA = box.y + box.h * 0.72;
    const r = H * (n ? 0.065 : 0.075);
    const brain = { x: box.x + box.w / 2, y: Math.max(top + r * 1.05, box.y - r * 1.9), r };
    return { n, x0, x1, yC, yA, box, brain, xd: lerp(x0, x1, 0.45), fw: Math.max(6, H * 0.034), cs: H * 0.04,
      chX: [0.14, 0.28, 0.66, 0.82].map((t) => lerp(x0, x1, t)), endX: box.x + box.w * 0.3 };
  }
  // 本幕此刻在跑的电信号：{ path, t }
  function nerveSignals(g) {
    const Cp = (xa) => [[xa, g.yC], [g.endX, g.yC]];
    const up = [[g.box.x + g.box.w / 2, g.box.y], [g.brain.x, g.brain.y + g.brain.r * 0.8]];
    const out = []; let hurt = 0;
    const run = (path, t0, d, col) => { const p = (lt - t0) / d; if (p > 0 && p < 1) out.push({ path, t: p, col }); return p; };
    if (cur === 0) {
      run(Cp(g.x0), 1.6, 2.2, C.gold);
      const u = run(up, 3.8, 0.8, C.gold);
      if (u > 0.9 && lt < 6.3) hurt = 1;
    }
    if (cur === 1) {
      for (let k = 0; k < 7; k++) {
        const t0 = 3.4 + k * 1.3;
        if (k === 4) continue; // 这一拍留给“串线”
        run(Cp(g.xd), t0, 1.0, C.gold);
        const u = run(up, t0 + 1.0, 0.5, C.gold);
        if (u > 0.5 && u < 3.2) hurt = 1;
      }
      // 串线：触觉纤维的信号在受损处窜到疼痛纤维上
      const tA = 8.2;
      run([[g.x0, g.yA], [g.xd, g.yA]], tA, 1.1, "#6fb9e0");
      run([[g.xd, g.yA], [g.xd, g.yC]], tA + 1.1, 0.35, "#6fb9e0");
      run([[g.xd, g.yC], [g.endX, g.yC]], tA + 1.45, 0.9, C.gold);
      const u = run(up, tA + 2.35, 0.5, C.gold);
      if (u > 0.5 && u < 3.2) hurt = 1;
    }
    return { out, hurt };
  }
  function nerveView(a) {
    const g = gN(), n = g.n;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6ef", "#f6f0fb");
    Anima.bokeh(6, "#ffd9c9", 0.7, 12);
    Anima.petals(5, 0.35, 61);
    const damaged = cur === 1 ? 1 : P(6.4, 1);
    const sig = nerveSignals(g);
    // 皮肤
    const sk = { y0: g.yC - H * 0.1, y1: g.yA + H * 0.1 };
    rrect(-20, sk.y0, g.x0 + 20, sk.y1 - sk.y0, H * 0.04); ctx.fillStyle = C.skin2; ctx.fill(); outline(1.8); ctx.stroke();
    text("皮肤", g.x0 * 0.45, sk.y1 - H * 0.035, fsS() * 0.8, C.soft);
    // 脊髓后角的小站
    const b = g.box;
    rrect(b.x, b.y, b.w, b.h, H * 0.03); ctx.fillStyle = C.horn; ctx.fill(); outline(1.8); ctx.stroke();
    if (sig.hurt) glow(b.x + b.w / 2, b.y + b.h / 2, b.w * 0.7, C.bad, 0.35);
    text("脊髓后角", b.x + b.w / 2, b.y + b.h - fsS() * 0.8, fsS() * 0.85, C.ink);
    // 通往大脑的路
    ctx.save(); ctx.setLineDash([5, 6]); outline(2); ctx.beginPath(); ctx.moveTo(b.x + b.w / 2, b.y); ctx.lineTo(g.brain.x, g.brain.y + g.brain.r * 0.8); ctx.stroke(); ctx.restore();
    // 两根纤维
    tube([[g.x0 - W * 0.03, g.yA], [g.endX, g.yA]], C.fiberA, g.fw * 0.8);
    tube([[g.x0 - W * 0.03, g.yC], [g.endX, g.yC]], mix(C.fiberC, "#d9c8cc", damaged * 0.25), g.fw);
    const lf = fsS() * 0.78;
    text("疼痛纤维（C）", g.x0 + W * 0.015, g.yC + g.fw + lf * 0.9, lf, C.soft, "left");
    text("触觉纤维（Aβ）", g.x0 + W * 0.015, g.yA + g.fw + lf * 0.9, lf, C.soft, "left");
    // 后角里的神经元居民
    chara(b.x + b.w * (n ? 0.72 : 0.68), b.y + b.h * 0.62, g.cs * (n ? 0.85 : 1), { who: "neuron", eyes: sig.hurt ? "wide" : "open", mouth: sig.hurt ? "open" : "smile", arms: sig.hurt ? "up" : "down", dir: -1 });
    // 钠通道：信号经过时一站站打开
    const cs = H * 0.027;
    const near = (x) => sig.out.some((s) => { const p = s.path, sx = lerp(p[0][0], p[1][0], s.t), sy = lerp(p[0][1], p[1][1], s.t); return Math.abs(sy - g.yC) < 2 && Math.abs(sx - x) < W * 0.05; });
    g.chX.forEach((x) => {
      const on = near(x);
      Anima.receptor(x, g.yC - g.fw / 2, cs, C.na, on ? 1 : 0, { shape: "square" });
      if (on) for (let k = 0; k < 2; k++) { const t = (time * 2.2 + k / 2) % 1; ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI); Anima.ion(x + (k - 0.5) * cs * 0.5, g.yC - g.fw / 2 - cs * 2.6 + t * cs * 2.4, H * 0.014, "Na", "#bfe3f5"); ctx.restore(); }
    });
    // 受损的一段：裂缝、创可贴、变多的钠通道
    if (damaged > 0.02) {
      ctx.save(); ctx.globalAlpha *= damaged;
      const extra = cur === 1 ? Math.floor(P(0.8, 2.6) * 6) : 0;
      for (let j = 0; j < extra; j++) {
        const x = g.xd + (j - 2.5) * cs * 1.6, fire = cur === 1 && lt > 3.2 && Math.sin(time * 9 + j) > 0.2;
        Anima.receptor(x, g.yC - g.fw / 2, cs * 0.85, mix(C.na, "#ffb3c0", 0.4), fire ? 1 : 0.2, { shape: "square" });
      }
      ctx.save(); ctx.translate(g.xd, g.yC); ctx.rotate(-0.25);
      rrect(-g.fw * 1.2, -g.fw * 0.9, g.fw * 2.4, g.fw * 1.8, g.fw * 0.3); ctx.fillStyle = "#ffe0c2"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.fillStyle = "#e9b98f"; for (const d of [-0.5, 0, 0.5]) { ctx.beginPath(); ctx.arc(d * g.fw, 0, g.fw * 0.1, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
      if (cur === 1 && lt > 3.2) {
        const fl = 0.5 + 0.5 * Math.sin(time * 7);
        Anima.bolt(g.xd - cs * 4.5, g.yC - g.fw * 2.6, cs * 0.9, fl, C.bad);
        Anima.bolt(g.xd + cs * 4.5, g.yC - g.fw * 2.4, cs * 0.9, 1 - fl, C.gold);
      }
      ctx.restore();
    }
    // 第 1 幕：针扎；第 2 幕：羽毛轻碰
    if (cur === 0) {
      const d = P(0.4, 1) * (1 - P(3, 1));
      needle(g.x0 * 0.55, sk.y0 + H * 0.02 - (1 - d) * H * 0.06, H * 0.035, d > 0.02 || lt < 3 ? 1 : 0);
      if (win(1.2, 2.6)) sfx("扎！", g.x0 * 0.5, sk.y0 - H * 0.08, H * 0.045, C.bad, -0.15, 1);
    }
    if (cur === 1) {
      if (win(0.5, 7.6)) sfx("没人碰…", g.x0 * 0.55, sk.y0 - H * 0.07, H * (n ? 0.034 : 0.038), C.lavDeep, -0.1, 1);
      if (win(7.4, 9.6)) featherIcon(g.x0 * 0.3, g.yA - H * 0.02 + Math.sin(time * 5) * H * 0.01, H * 0.06, -0.3, 1);
    }
    // 大脑
    brainBlob(g.brain.x, g.brain.y, g.brain.r, sig.hurt);
    if (sig.hurt) sfx("痛！", g.brain.x - g.brain.r * 1.9, g.brain.y, H * 0.05, C.bad, -0.1, 0.85 + 0.15 * Math.sin(time * 8));
    // 电信号
    sig.out.forEach((s) => Anima.spark(s.path, s.t, H * 0.022, s.col));
    // 标注
    const ty = Anima.topSafe() + H * 0.01;
    if (cur === 0) {
      callout("n-fib", n ? win(0.8, 4.2) : win(0.8, 13), lerp(g.x0, g.x1, 0.62), g.yC, n ? W * 0.35 : lerp(g.x0, g.x1, 0.55), n ? ty : H * 0.2, "外周神经：报信的电线");
      callout("n-na", n ? win(4.4, 6.4) : win(2, 13), g.chX[0], g.yC - g.fw / 2 - cs * 1.6, n ? W * 0.3 : W * 0.2, n ? ty : H * 0.93, "钠通道：一站站点燃电信号");
      callout("n-dmg", lt > 7, g.xd, g.yC + g.fw, n ? W * 0.4 : g.xd, n ? H * 0.94 : H * 0.93, "神经本身受伤：线路故障");
      say("n-ouch", win(4.6, 6.4) && !n, g.brain.x, g.brain.y - g.brain.r, g.brain.x - W * 0.2, g.brain.y - H * 0.02, "被扎到了，快缩手！", "say");
    }
    if (cur === 1) {
      callout("n-more", n ? win(1, 4) : lt > 1, g.xd, g.yC - g.fw / 2 - cs * 1.6, n ? W * 0.4 : g.xd - W * 0.05, n ? ty : H * 0.22, "钠通道变多：一点就着");
      callout("n-self", n ? win(4.2, 7.8) : win(3.6, 13), lerp(g.xd, g.x1, 0.6), g.yC, n ? W * 0.45 : lerp(g.xd, g.x1, 0.7), n ? H * 0.94 : H * 0.93, "受伤处自己放电");
      callout("n-cross", lt > 8.3, g.xd, (g.yC + g.yA) / 2, n ? W * 0.4 : W * 0.28, n ? ty : H * 0.93, "串线：轻触信号窜过来");
    }
    ctx.restore();
  }

  // ================= 第 3～5 幕：脊髓后角的突触 =================
  function gS() {
    const n = N(), top = Anima.topSafe();
    const cx = W * (n ? 0.3 : 0.34), tw = Math.min(W * (n ? 0.52 : 0.44), H * 0.95), th = H * (n ? 0.34 : 0.38), post = H * (n ? 0.76 : 0.74);
    const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
    const termY = (x) => {
      const dx = Math.abs(x - cx); let best = th, bd = 1e9;
      for (let i = 0; i <= 30; i++) { const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, th * 1.02, th, th); if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; } }
      return best;
    };
    const panel = { x: W * (n ? 0.63 : 0.64), y: top + H * 0.06, w: W * (n ? 0.34 : 0.32), h: H * (n ? 0.4 : 0.44) };
    return { n, cx, tw, th, post, termY, panel, rs: H * (n ? 0.04 : 0.042), gs: H * (n ? 0.026 : 0.028),
      recX: [cx - tw * 0.3, cx + tw * 0.02, cx + tw * 0.3], vX: [cx - tw * 0.3, cx + tw * 0.02, cx + tw * 0.3] };
  }
  // 每一幕的刺激：时刻、放出几位谷氨酸、反应大小、是不是轻触
  function pulses() {
    if (cur === 2) return [0.8, 2.4, 4.0, 5.6, 7.2, 8.8, 10.4].map((t, k) => ({ t, m: 2, amp: 0.22 + k * 0.12, nmda: k >= 2 }));
    if (cur === 3) return [{ t: 0.8, m: 4, amp: 0.95, nmda: 1 }, { t: 3.0, m: 4, amp: 0.95, nmda: 1 }, { t: 5.2, m: 4, amp: 0.95, nmda: 1 },
      { t: 7.6, m: 2, amp: 0.8, nmda: 1, touch: 1 }, { t: 10, m: 2, amp: 0.8, nmda: 1, touch: 1 }];
    if (cur === 4) return [0.8, 2.0, 3.2, 4.4, 5.6, 6.8, 8.0, 9.2, 10.4, 11.6].map((t) => { const d = t > 5 ? 1 : 0; return { t, m: d ? 1 : 4, amp: d ? 0.4 : 0.92, nmda: !d, drug: d }; });
    return [];
  }
  function synView(a) {
    const g = gS(), n = g.n;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, "#eef7fb"); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.8, 90);
    const ps = pulses();
    let last = null;
    ps.forEach((p) => { if (lt >= p.t) last = p; });
    const act = last && lt - last.t > 0.6 && lt - last.t < 1.5 ? 1 : 0;
    const angry = last && last.amp > 0.7 && act;
    Anima.postMembrane(g.post, C.post, { face: true, faceX: n ? W * 0.08 : W * 0.07, mood: angry ? -1 : (last && last.amp > 0.5 ? 0 : 1) });
    const P3 = cur === 3 ? P(0.6, 1.6) : 0; // 第 4 幕：受体被磷酸化、多装一扇门
    // 受体：AMPA、NMDA、（敏化后）新装的 AMPA
    const R = [];
    R.push(Anima.receptor(g.recX[0], g.post, g.rs, "#f7a8c0", act, { label: "AMPA" }));
    const nOpen = act && last && last.nmda ? 1 : 0;
    R.push(Anima.receptor(g.recX[1], g.post, g.rs, "#f5c07a", nOpen, { shape: "square", label: "NMDA" }));
    if (cur === 3) {
      ctx.save(); ctx.globalAlpha *= P3;
      R.push(Anima.receptor(g.recX[2], g.post - (1 - P3) * H * 0.05, g.rs, "#f7a8c0", act, {}));
      ctx.restore();
      for (let i = 0; i < 3; i++) { if (P3 < 0.5) continue; const x = g.recX[i] + g.rs * 0.95, y = g.post - g.rs * 1.1; Anima.ion(x, y, H * 0.017, "P", "#ffe39a"); }
    }
    // 镁离子塞子：第 3 幕第三次刺激时被挤开
    const mgPop = cur === 2 ? P(4.6, 0.8) : (cur === 3 || (cur === 4 && lt < 5)) ? 1 : 0;
    const mgBack = cur === 4 ? P(5.2, 1) : 0;
    const mgA = cur === 2 ? 1 - mgPop : mgBack;
    if (mgA > 0.02) { ctx.save(); ctx.globalAlpha *= clamp(mgA * 1.5, 0, 1); Anima.ion(g.recX[1] + mgPop * g.rs * 1.5 * (cur === 2 ? 1 : 0), g.post - g.rs * 1.62 - (cur === 2 ? mgPop * H * 0.06 : 0), H * 0.02, "Mg", "#e8e2ff"); ctx.restore(); }
    // 钙流进细胞
    if (nOpen) for (let k = 0; k < 3; k++) { const t = ((lt - last.t - 0.6) * 1.2 + k / 3) % 1; ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI); Anima.ion(g.recX[1] + (k - 1) * g.rs * 0.4, g.post - g.rs + t * H * 0.12, H * 0.015, "Ca", "#c8f0d8"); ctx.restore(); }
    // 突触前末梢（初级传入纤维）
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    text("疼痛纤维的末梢", g.cx, Math.max(g.th * 0.45, Anima.topSafe() + fsS() * 0.6), fsS() * 0.8, C.ink);
    text("后角神经元", W * (n ? 0.26 : 0.19), g.post + (H - g.post) * 0.55, fsS() * 0.8, C.soft);
    // 电压门控钙通道（第 5 幕放大看）
    const busy = (i) => i < 2;
    const drugA = cur === 4 ? P(3.4, 1.4) : 0;
    const chan = [];
    if (cur === 4) {
      for (let i = 0; i < 3; i++) {
        const x = g.vX[i], y = g.termY(x);
        const open = busy(i) && last && lt - last.t < 0.7 ? (last.drug ? 0.35 : 1) : 0;
        ctx.save(); ctx.translate(x, y); Anima.receptor(0, 0, H * 0.036, C.vscc, open, { dir: -1, shape: "square" }); ctx.restore();
        // α2δ 亚基：通道边上的小黄豆
        ctx.beginPath(); ctx.ellipse(x + H * 0.044, y + H * 0.045, H * 0.022, H * 0.015, 0.4, 0, Math.PI * 2); ctx.fillStyle = C.a2d; ctx.fill(); outline(1.2); ctx.stroke();
        if (open > 0.5) for (let k = 0; k < 3; k++) { const t = ((lt - last.t) * 1.6 + k / 3) % 1; ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI); Anima.ion(x + (k - 1) * H * 0.012, y + H * 0.06 - t * H * 0.1, H * 0.013, "Ca", "#c8f0d8"); ctx.restore(); }
        if (!busy(i)) emote("zzz", x - H * 0.03, y + H * 0.05, H * 0.022);
        chan.push({ x, y });
      }
    }
    // 谷氨酸快递员
    ps.forEach((p, k) => {
      const dt = lt - p.t;
      if (dt < 0 || dt > 1.8) return;
      for (let j = 0; j < p.m; j++) {
        const tgt = cur === 3 ? j % 3 : (j % 2);
        const sx = g.cx + (j - (p.m - 1) / 2) * g.tw * 0.14, sy = g.termY(sx) + g.gs * 3.2;
        const ex = g.recX[tgt] + (j >= 2 ? g.rs * 0.9 : 0), ey = g.post - g.rs * 1.62;
        const q = ease(dt / 0.6), al = dt > 1.3 ? 1 - (dt - 1.3) / 0.5 : 1;
        const o = { who: "Glu", eyes: p.amp > 0.7 ? "angry" : "open", mouth: "open", arms: q < 1 ? "hold" : "up", item: q < 1 ? "letter" : null, alpha: al, shadow: false, seed: k * 5 + j };
        if (p.touch) { o.hair = "#9fd0f0"; o.cloth = "#e3f2fc"; }
        chara(lerp(sx, ex, q), lerp(sy, ey, q), g.gs, o);
      }
    });
    // 触觉纤维的小末梢（第 4 幕）
    if (cur === 3) {
      const kx = W * (n ? 0.06 : 0.07), ky = g.th * 0.78;
      tube([[-10, ky - H * 0.05], [kx, ky]], C.fiberA, H * 0.018);
      ctx.beginPath(); ctx.arc(kx, ky, H * 0.03, 0, Math.PI * 2); ctx.fillStyle = C.fiberA; ctx.fill(); outline(1.5); ctx.stroke();
      if (lt > 7) featherIcon(kx - H * 0.02, ky - H * 0.1 + Math.sin(time * 5) * H * 0.01, H * 0.055, -0.4, 1);
    }
    // 发条（第 3 幕）
    if (cur === 2) {
      const kx = g.cx + g.tw * 0.55, ky = g.post + (H - g.post) * 0.5, s = H * 0.035, q = lt * 1.2;
      ctx.save(); ctx.translate(kx, ky); ctx.rotate(q);
      outline(1.6); ctx.fillStyle = "#ffe39a";
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.ellipse(d * s * 0.8, 0, s * 0.7, s * 0.45, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
      rrect(-s * 0.18, -s * 0.18, s * 0.36, s * 1.4, s * 0.1); ctx.fill(); ctx.stroke();
      ctx.restore();
    }
    // 药物：抱住忙碌通道的 α2δ（第 5 幕）
    if (cur === 4 && drugA > 0.02) {
      const names = ["加巴喷丁", "普瑞巴林"];
      for (let i = 0; i < 2; i++) {
        const c = chan[i], ds = H * (n ? 0.034 : 0.038);
        const fx = c.x + H * 0.062, fy = c.y + H * 0.05 + ds * 3.1;
        const sx = W * 0.62, x = lerp(sx, fx, drugA);
        chara(x, fy, ds, { who: "drug", hatColor: "#b8e6a0", arms: drugA > 0.95 ? "up" : "down", walk: drugA < 1 ? time * 9 : null, eyes: drugA > 0.95 ? "happy" : "open", dir: -1, tag: n ? null : names[i], alpha: drugA });
      }
    }
    // 右上角的小图表：每次刺激的反应
    const pn = g.panel;
    card(pn.x, pn.y, pn.w, pn.h, "每次刺激的反应", "#ffe0d0");
    const shown = ps.filter((p) => lt > p.t + 0.7);
    const bw = pn.w / 12, base = pn.y + pn.h * 0.9;
    shown.forEach((p, k) => {
      const hh = pn.h * 0.68 * p.amp * ease((lt - p.t - 0.7) / 0.5);
      const x = pn.x + pn.w * 0.08 + k * bw * 1.1;
      if (x + bw > pn.x + pn.w - 4) return;
      rrect(x, base - hh, bw * 0.85, hh, bw * 0.2); ctx.fillStyle = p.touch ? "#8cc8ee" : mix("#ffc98a", "#e8637a", p.amp); ctx.fill(); outline(1.2); ctx.stroke();
    });
    outline(1.2); ctx.beginPath(); ctx.moveTo(pn.x + pn.w * 0.05, base); ctx.lineTo(pn.x + pn.w * 0.95, base); ctx.stroke();
    // 标注和气泡
    const ty = Anima.topSafe() + H * 0.01, lowY = g.post + (H - g.post) * 0.55;
    if (cur === 2) {
      callout("s-wind", lt > (n ? 5.2 : 3.4), pn.x + pn.w * 0.5, base - pn.h * 0.45, pn.x + pn.w * 0.5, pn.y + pn.h + H * 0.1, n ? "同样刺激，越来越响" : "同样的刺激，反应越来越大");
      callout("s-nmda", win(5, 13), g.recX[1], g.post - g.rs * 1.7, n ? W * 0.45 : g.recX[1] + W * 0.02, g.th + H * 0.02, "NMDA 门：镁塞子被挤开");
      callout("s-glu", win(0.8, 4.6), g.recX[0], g.post - g.rs * 2, n ? W * 0.3 : g.recX[0] - W * 0.02, g.th + H * 0.02, "谷氨酸先敲 AMPA 门");
    }
    if (cur === 3) {
      callout("s-p", n ? win(1.2, 4.2) : win(1.2, 7.2), g.recX[2] + g.rs, g.post - g.rs * 1.1, n ? W * 0.45 : g.recX[2] + W * 0.06, g.th + H * 0.03, "磷酸化 + 多装一扇门");
      callout("s-more", n ? win(4.4, 7.2) : win(3, 7.2), g.cx + g.tw * 0.1, g.termY(g.cx) + g.gs * 2, n ? W * 0.3 : g.cx - W * 0.12, g.th + H * 0.03, "谷氨酸放得更多");
      callout("s-touch", lt > 7.6, W * (n ? 0.06 : 0.07), g.th * 0.78, n ? W * 0.3 : W * 0.22, g.th + H * 0.04, "轻触的信号也被当成痛");
      say("s-ouch", lt > 8.4, n ? W * 0.08 : W * 0.07, g.post + H * 0.04, n ? W * 0.3 : W * 0.46, lowY, "轻轻一碰也好痛！", "shout");
    }
    if (cur === 4) {
      const c0 = chan[0];
      callout("s-a2d", n ? win(0.8, 3.4) : win(0.8, 13), c0.x + H * 0.044, c0.y + H * 0.045, n ? W * 0.3 : c0.x, n ? Anima.topSafe() + H * 0.01 : g.th * 0.72, "α2δ 亚基：钙通道上的小把手");
      callout("s-quiet", n ? win(3.6, 6.8) : win(2, 13), chan[2].x, chan[2].y, n ? W * 0.35 : chan[2].x + W * 0.05, lowY, "安静的通道：不太理会");
      callout("s-less", lt > (n ? 7 : 6.5), pn.x + pn.w * 0.6, base - pn.h * 0.3, pn.x + pn.w * 0.5, pn.y + pn.h + H * 0.1, "钙少了，谷氨酸也少了");
      say("s-hug", win(5, 9) && !n, chan[1].x + H * 0.05, chan[1].y + H * 0.08, chan[1].x + W * 0.16, lowY - H * 0.02, "你太忙了，歇一歇～", "say");
    }
    ctx.restore();
  }

  // ================= 第 6 幕：三个位置 =================
  function mapView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    Anima.wash("#fff7ef", "#f3f0fb");
    Anima.bokeh(5, "#ffe0c4", 0.7, 31);
    Anima.petals(6, 0.4, 5);
    const top = Anima.topSafe() + H * 0.07, gap = W * 0.02, cw = (W - gap * 4) / 3, chh = H * 0.9 - top;
    const T = ["钠通道阻断剂", "α2δ 配体", "SNRI"], cols = ["#d6ecfa", "#dff3e6", "#ffe0e4"];
    const sites = ["① 受损神经", "② 脊髓后角", "③ 脑干往下"];
    const tags = ["卡马西平", "普瑞巴林", "度洛西汀"];
    const fs = fsS() * (n ? 0.78 : 0.85);
    const pos = [];
    for (let i = 0; i < 3; i++) {
      const x = gap + i * (cw + gap), y = top, p = P(0.4 + i * 2.6, 0.7);
      if (p < 0.02) { pos.push(null); continue; }
      ctx.save(); ctx.globalAlpha *= p;
      card(x, y, cw, chh, T[i], cols[i]);
      chip(sites[i], x + cw / 2, y + chh - fs * 1.2, "#fffaf0", fs);
      const cx = x + cw / 2, my = y + chh * 0.46, s = Math.min(H * 0.055, cw * 0.12), tg = tags[i];
      if (i === 0) { // 神经上的钠通道被挡住，火花熄掉
        tube([[x + cw * 0.06, my], [x + cw * 0.94, my]], C.fiberC, H * 0.034);
        for (let k = 0; k < 3; k++) Anima.receptor(x + cw * (0.2 + k * 0.3), my - H * 0.017, H * 0.03, C.na, 0, { shape: "square" });
        chara(x + cw * 0.5, my - H * 0.02, s, { who: "drug", hatColor: "#8fc8f0", arms: "shh", eyes: "closed", mouth: "cat", tag: tg });
        const fz = (time * 0.8) % 1;
        Anima.bolt(x + cw * 0.8, my + H * 0.08, s * 0.6 * (1 - fz), 1 - fz, C.gold);
        if (!n) sfx("嘘…", x + cw * 0.22, my + H * 0.09, H * 0.04, C.skyDeep, -0.1, 1);
      } else if (i === 1) { // 钙通道上的 α2δ 被抱住
        const vx = cx - cw * 0.16, vy = my - H * 0.06;
        Anima.receptor(vx, vy, H * 0.042, C.vscc, 0.15, { dir: -1, shape: "square" });
        ctx.beginPath(); ctx.ellipse(vx + H * 0.05, vy + H * 0.05, H * 0.024, H * 0.016, 0.4, 0, Math.PI * 2); ctx.fillStyle = C.a2d; ctx.fill(); outline(1.2); ctx.stroke();
        chara(vx + H * 0.075, vy + H * 0.06 + s * 3.1, s, { who: "drug", hatColor: "#b8e6a0", arms: "up", eyes: "happy", dir: -1, tag: tg });
        Anima.ion(vx - H * 0.05, vy + H * 0.1, H * 0.016, "Ca", "#c8f0d8");
      } else { // 下行的去甲肾上腺素 + 被挡住的回收门
        const tx = cx + cw * 0.2, ty = my - H * 0.07;
        Anima.transporter(tx, ty, H * 0.05, "#9fc3ea", time * 0.3, true);
        chara(cx - cw * 0.2, my + s * 1.8, s, { who: "NE", arms: "shh", eyes: "happy", mouth: "cat" });
        chara(tx, ty + H * 0.07 + s * 3.1, s * 0.9, { who: "drug", hatColor: "#ffb3c0", arms: "point", eyes: "open", dir: -1, tag: tg });
      }
      ctx.restore();
      pos.push({ x, y, cx, my });
    }
    const ty = Anima.topSafe() + H * 0.01;
    const ly = top + chh * 0.8;
    if (pos[0]) callout("m-na", lt > 1, pos[0].x + cw * 0.8, pos[0].my, pos[0].cx, ly, n ? "异常放电熄火" : "挡住钠通道：异常放电熄火");
    if (pos[1]) callout("m-ca", lt > 3.8, pos[1].cx - cw * 0.16, pos[1].my - H * 0.06, pos[1].cx, ly, n ? "少放递质" : "少放递质：后角安静些");
    if (pos[2]) callout("m-ne", lt > 6.4, pos[2].cx - cw * 0.2, pos[2].my, pos[2].cx, ly, n ? "下行刹车" : "NE 经 α2 受体踩刹车");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.vN > 0.02) nerveView(S.vN);
    if (S.vS > 0.02) synView(S.vS);
    if (S.vM > 0.02) mapView(S.vM);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e8637a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f59a8c",
    titleCard: { lines: ["没有人碰你，", "神经却在喊痛"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
