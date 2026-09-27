Anima.register("behavioral-addictions", {
    "title": "没有药物也会上瘾",
    "tag": "成瘾",
    "headline": "没有药物也会【上瘾】：赌博、暴食和冲动控制",
    "lede": "上瘾不一定需要药物。赌博、游戏、暴食这些行为，也能驱动同一条多巴胺奖赏回路，也会从冲动滑向强迫。Stahl 还把间歇性暴怒、偷窃癖、纵火癖等冲动控制障碍，放进同一个“刹车和油门”的框架里理解。",
    "summary": "行为也能激活奖赏回路、说不准的奖励和“差一点就中”、从腹侧冲动到背侧习惯、暴食障碍和它的治疗、冲动控制障碍的刹车与油门失衡，以及以心理行为为主的治疗。",
    "chapter": "对应 Stahl《精神药理学精要》第 13 章 · 行为成瘾和冲动控制障碍",
    "footer": "如果赌博、游戏、进食或冲动行为已经让你或家人很困扰，请到精神科或心理门诊求助；这些问题可以治疗，不是意志力差。",
    "canvasLabel": "老虎机让多巴胺快递员在等待中最兴奋、控制权从腹侧纹状体移到背侧、饱了还停不下来的进食、刹车和油门的天平，以及换一条新路的动画",
    "regions": ["nac", "striatum", "pfc"],
    "parts": ["addiction"],
    "cast": ["DA", "neuron", "drug"],
    "color": "#f7a35c"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const view = (k) => { const o = Object.assign({}, V0); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "没有药物，也走同一条路",
      pill: ["奖赏回路", "同一条"], pill2: ["入口", "物质或行为"],
      text: "上瘾不一定需要药物。赌博、打游戏、暴食这些行为，本身就能让腹侧被盖区的多巴胺快递员出发，把“真好，还想要”的信送到伏隔核，走的正是成瘾物质走的那条奖赏回路。Stahl 把它们叫作行为成瘾：明知有害还停不下来，越做越多，不做就难受，做了才松口气。",
      fact: "行为成瘾和物质成瘾，共用同一套奖赏和习惯回路" }, view("v0")),
    Object.assign({ title: "说不准的奖励最勾人",
      pill: ["奖励", "说不准"], pill2: ["多巴胺", "等待时最高"],
      text: "赌博特别容易上瘾，一个原因是奖励说不准。动物研究发现，结果最难预料的时候，多巴胺神经元在等待中最活跃；“差一点就中”也会点亮奖赏回路，让人觉得下一把就能中。书里还提到，有的人用了多巴胺激动剂后开始沉迷赌博，说明把奖赏回路的多巴胺调高，就可能推着人去赌。",
      fact: "有人用多巴胺激动剂后出现赌博问题，提示奖赏回路里的多巴胺参与其中" }, view("v1")),
    Object.assign({ title: "从冲动到强迫",
      pill: ["控制权", "腹侧 → 背侧"], pill2: ["下注", "越来越大"],
      text: "起初，赌一把、玩一局是冲着快乐去的，主要由腹侧纹状体掌管，这是冲动。反复多次以后，控制权慢慢移到管习惯的背侧纹状体，行为变成了自动反应：下注越来越大，这是耐受；不赌就烦躁，一赌才松口气。这时已经不太是为了快乐，而是停不下来，和《被劫持的奖赏快递》里讲的一样。",
      fact: "行为成瘾也会从“腹侧的冲动”滑向“背侧的强迫习惯”" }, view("v2")),
    Object.assign({ title: "暴食障碍",
      pill: ["饱腹感", "已经饱了"], pill2: ["共病", "约八成"],
      text: "暴食障碍是最常见的进食障碍：在一段时间里吃下远超常人的量，控制不住，吃完很痛苦。它不是嘴馋，饱了也停不下来，常被情绪或场景触发。约一半的人有肥胖，但不是全部；约八成同时有心境、焦虑、物质使用问题或 ADHD。在美国等国家，赖右苯丙胺获批治疗暴食障碍，配合心理治疗效果更好。",
      fact: "暴食障碍的核心是失控，不是意志力差；它常和其他精神心理问题一起出现" }, view("v3")),
    Object.assign({ title: "冲动控制障碍：刹车和油门",
      pill: ["刹车", "不够"], pill2: ["油门", "太猛"],
      text: "还有一些问题的核心是管不住冲动，叫冲动控制障碍。比如间歇性暴怒障碍，一点小事就爆发出不相称的怒火；偷窃癖，反复忍不住拿并不需要的东西；纵火癖，反复被点火吸引。Stahl 用同一个框架理解它们：前额叶从上往下的刹车不够，或者从下往上的油门太猛，详见《油门和刹车：冲动与强迫》。",
      fact: "冲动控制障碍：自上而下的刹车和自下而上的冲动失去平衡" }, view("v4")),
    Object.assign({ title: "可以治疗，换一条路",
      pill: ["治疗", "心理行为为主"], pill2: ["药物", "部分辅助"],
      text: "这些都是可以治疗的大脑回路问题，不是品德差，也不是意志力差。治疗以心理行为治疗为主，比如认知行为治疗：认出触发的场景，练习换一种回应，趁早打断“短暂快乐、反复重复、变成习惯”的链条。冲动控制障碍目前还没有获批的专门药物，医生可能针对共病用药，或尝试一些药物辅助。",
      fact: "治疗以心理行为治疗为主；趁行为还没固化成习惯时打断它，可能更容易" }, view("v5")),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { vta: "#ffe0c8", nac: "#ffd1dc", rail: "#e8c9a8", brake: "#7fb2e6", gas: "#f07a7a", dorsal: "#d9d2f5", ventral: "#ffd9b8" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function blob(x, y, rx, ry, col, mood) {
    ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(2); ctx.stroke();
    if (mood != null) face(x, y + ry * 0.1, Math.min(rx, ry) * 0.5, mood);
  }
  function person(x, y, s, o) {
    chara(x, y, s, Object.assign({ who: "neuron", hair: "#6b5a7a", cloth: "#ffe6c9", style: "short" }, o || {}));
  }
  // 小图标：老虎机、游戏手柄、蛋糕、药丸
  function icon(kind, x, y, r, lit) {
    glow(x, y, r * 1.8, C.gold, lit * 0.9);
    ctx.save(); ctx.translate(x, y);
    if (kind === "slot") {
      rrect(-r * 0.8, -r * 0.8, r * 1.6, r * 1.6, r * 0.3); ctx.fillStyle = "#ffb3c1"; ctx.fill(); outline(1.6); ctx.stroke();
      rrect(-r * 0.6, -r * 0.35, r * 1.2, r * 0.6, r * 0.1); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
      for (let k = -1; k <= 1; k++) { ctx.beginPath(); ctx.arc(k * r * 0.38, -r * 0.05, r * 0.12, 0, Math.PI * 2); ctx.fillStyle = k ? C.coral : C.gold; ctx.fill(); }
      outline(1.6); ctx.beginPath(); ctx.moveTo(r * 0.8, -r * 0.2); ctx.lineTo(r * 1.05, -r * 0.7); ctx.stroke();
      ctx.beginPath(); ctx.arc(r * 1.05, -r * 0.75, r * 0.12, 0, Math.PI * 2); ctx.fillStyle = C.coral; ctx.fill(); ctx.stroke();
    } else if (kind === "game") {
      rrect(-r, -r * 0.5, r * 2, r, r * 0.5); ctx.fillStyle = "#c9c1f5"; ctx.fill(); outline(1.6); ctx.stroke();
      outline(2); ctx.beginPath(); ctx.moveTo(-r * 0.65, 0); ctx.lineTo(-r * 0.25, 0); ctx.moveTo(-r * 0.45, -r * 0.2); ctx.lineTo(-r * 0.45, r * 0.2); ctx.stroke();
      for (const d of [[0.4, -0.12], [0.62, 0.12]]) { ctx.beginPath(); ctx.arc(r * d[0], r * d[1], r * 0.1, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill(); }
    } else if (kind === "cake") {
      rrect(-r * 0.8, -r * 0.2, r * 1.6, r * 0.8, r * 0.1); ctx.fillStyle = "#ffe6b8"; ctx.fill(); outline(1.6); ctx.stroke();
      rrect(-r * 0.8, -r * 0.45, r * 1.6, r * 0.35, r * 0.15); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.beginPath(); ctx.arc(0, -r * 0.62, r * 0.18, 0, Math.PI * 2); ctx.fillStyle = C.coral; ctx.fill(); outline(1.2); ctx.stroke();
    } else if (kind === "pill") {
      ctx.rotate(-0.5);
      rrect(-r * 0.9, -r * 0.35, r * 1.8, r * 0.7, r * 0.35); ctx.fillStyle = "#fff"; ctx.fill();
      ctx.save(); rrect(-r * 0.9, -r * 0.35, r * 1.8, r * 0.7, r * 0.35); ctx.clip(); ctx.fillStyle = "#ff9aa9"; ctx.fillRect(-r, -r, r, r * 2); ctx.restore();
      outline(1.6); rrect(-r * 0.9, -r * 0.35, r * 1.8, r * 0.7, r * 0.35); ctx.stroke();
    }
    ctx.restore();
  }

  // ---------- 第 1 幕：同一条奖赏回路 ----------
  const TRIG = [["pill", "成瘾物质"], ["slot", "赌博"], ["game", "游戏"], ["cake", "暴食"]];
  function roadView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f0", "#fdeef3"); Anima.bokeh(7, "#ffd9c0", 0.7, 13);
    const fs = fsz(0.03);
    const V = { x: W * 0.14, y: H * 0.74 }, N = { x: W * 0.86, y: H * 0.74 };
    // 铁路
    const rw = H * 0.04;
    ctx.fillStyle = C.rail; rrect(V.x, V.y - rw / 2, N.x - V.x, rw, rw / 2); ctx.fill(); outline(1.6); ctx.stroke();
    ctx.save(); ctx.setLineDash([8, 10]); ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(V.x, V.y); ctx.lineTo(N.x, N.y); ctx.stroke(); ctx.restore();
    blob(V.x, V.y, H * 0.09, H * 0.075, C.vta, 1);
    const act = TRIG.map((t, i) => clamp((lt - 1 - i * 2.2) * 2, 0, 1) * (lt > 1 + i * 2.2 + 2.2 && i < 3 ? 0.35 : 1));
    const tot = Math.max.apply(null, act);
    blob(N.x, N.y, H * 0.1, H * 0.08, mix(C.nac, "#ffb0c4", tot), tot > 0.5 ? 1 : 0);
    plate(n ? "VTA" : "腹侧被盖区", V.x, V.y + H * 0.13, fsz(0.027), "#fff1e4");
    plate("伏隔核", N.x, N.y + H * 0.13, fsz(0.027), "#ffe6ec");
    // 触发的入口：上方四个图标，亮起时往回路里连一根线
    const ir = H * (n ? 0.05 : 0.055);
    TRIG.forEach((t, i) => {
      const x = lerp(W * 0.22, W * 0.78, i / 3), y = top + H * 0.2;
      const on = clamp((lt - 1 - i * 2.2) * 2, 0, 1);
      ctx.save(); ctx.globalAlpha *= 0.4 + 0.6 * on;
      ctx.save(); ctx.setLineDash([4, 6]); ctx.strokeStyle = on > 0.5 ? C.gold : C.soft; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x, y + ir * 1.1); ctx.lineTo(lerp(V.x, N.x, 0.15 + i * 0.12), V.y - rw); ctx.stroke(); ctx.restore();
      icon(t[0], x, y, ir, on * (0.6 + 0.4 * Math.sin(time * 5)));
      text(t[1], x, y + ir * 1.6, fs, C.ink);
      ctx.restore();
    });
    // 多巴胺快递员沿铁路奔跑
    const k = Math.round(2 + tot * (n ? 2 : 3)), cs = H * (n ? 0.036 : 0.04);
    for (let i = 0; i < k; i++) {
      const t = (time * 0.16 + i / k) % 1;
      chara(lerp(V.x + H * 0.08, N.x - H * 0.1, t), V.y - rw * 0.3, cs, { who: "DA", walk: time * 10 + i, item: "letter", arms: "hold", eyes: "sparkle", seed: i, shadow: false });
    }
    if (tot > 0.5) sparkles(N.x, N.y - H * 0.12, H * 0.08, 3, 0.8, 3);
    callout("sub", lt > 1.5 && lt < 3.2, lerp(V.x, N.x, 0.15), V.y + rw / 2, n ? W * 0.45 : W * 0.3, n ? H * 0.9 : H * 0.55, "药物：直接作用在突触上");
    callout("beh", lt > 4 && lt < 9.5, lerp(V.x, N.x, 0.39), V.y + rw / 2, n ? W * 0.5 : W * 0.5, n ? H * 0.9 : H * 0.52, "行为：同一条奖赏回路也被点亮");
    say("more", lt > 9.8, N.x, N.y - H * 0.1, n ? W * 0.5 : W * 0.72, n ? H * 0.89 : H * 0.5, "真好，还想要！", "shout");
    ctx.restore();
  }

  // ---------- 第 2 幕：老虎机和说不准的奖励 ----------
  const SYM = ["7", "★", "●"];
  function slotView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6fa", "#f4f0ff"); Anima.petals(8, 0.5, 29);
    const cyc = 4.4, ci = Math.floor(Math.max(0, lt - 0.5) / cyc), ct = Math.max(0, lt - 0.5) % cyc;
    const res = [[1, 2, 0], [0, 0, 1], [0, 0, 2]][ci % 3]; // 没中、差一点、差一点
    const near = ci % 3 !== 0;
    const mx = W * (n ? 0.3 : 0.3), my = H * 0.52, mw = Math.min(W * (n ? 0.5 : 0.36), H * 0.62), mh = H * 0.5;
    // 机器
    rrect(mx - mw / 2, my - mh / 2, mw, mh, H * 0.04); ctx.fillStyle = "#ffc2cf"; ctx.fill(); outline(2.2); ctx.stroke();
    rrect(mx - mw * 0.35, my - mh / 2 - H * 0.06, mw * 0.7, H * 0.08, H * 0.03); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.8); ctx.stroke();
    text("幸运机", mx, my - mh / 2 - H * 0.02, fsz(0.03), C.ink);
    const rw = mw * 0.24, rh = mh * 0.42, ry = my - mh * 0.2;
    for (let r = 0; r < 3; r++) {
      const x = mx + (r - 1) * rw * 1.15;
      rrect(x - rw / 2, ry - rh / 2, rw, rh, H * 0.015); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
      const stop = 1.2 + r * 0.6, spinning = ct < stop;
      const sym = spinning ? SYM[Math.floor(time * 14 + r * 2) % 3] : SYM[res[r]];
      ctx.save(); ctx.globalAlpha *= spinning ? 0.55 : 1;
      text(sym, x, ry + (spinning ? Math.sin(time * 40 + r) * rh * 0.12 : 0), rh * 0.5, sym === "7" ? C.bad : sym === "★" ? "#e7a23a" : "#8f84e0");
      ctx.restore();
    }
    // 拉杆
    outline(2.2); ctx.beginPath(); ctx.moveTo(mx + mw / 2, my - mh * 0.1); ctx.lineTo(mx + mw / 2 + H * 0.05, my - mh * (ct < 0.4 ? -0.05 : 0.35)); ctx.stroke();
    ctx.beginPath(); ctx.arc(mx + mw / 2 + H * 0.05, my - mh * (ct < 0.4 ? -0.05 : 0.35), H * 0.022, 0, Math.PI * 2); ctx.fillStyle = C.coral; ctx.fill(); ctx.stroke();
    const done = ct >= 2.4;
    if (done) {
      const t = near ? "差一点！" : "没中";
      text(t, mx, my + mh * 0.22, fsz(0.04), near ? "#e7a23a" : C.soft);
      if (near && ct < 3.4) sfx("!!", mx + mw * 0.35, my + mh * 0.15, H * 0.05, C.bad, 0.1, 1);
    }
    // 多巴胺计
    const da = ct < 0.3 ? 0.3 : !done ? 0.9 : near ? (ct < 3.4 ? 0.75 : 0.5) : 0.2;
    const gx = W * (n ? 0.66 : 0.62), gw = W * (n ? 0.07 : 0.05), gh = H * 0.44, gy = H * 0.3;
    rrect(gx, gy, gw, gh, gw / 2); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.save(); rrect(gx, gy, gw, gh, gw / 2); ctx.clip();
    ctx.fillStyle = mix("#ffd27a", "#ff9a52", da); ctx.fillRect(gx, gy + gh * (1 - da), gw, gh * da); ctx.restore();
    outline(1.8); rrect(gx, gy, gw, gh, gw / 2); ctx.stroke();
    text("多巴胺", gx + gw / 2, gy + gh + fsz(0.028) * 1.2, fsz(0.028), C.ink);
    const ds = H * (n ? 0.05 : 0.055), dx = W * (n ? 0.86 : 0.8);
    chara(dx, H * 0.8, ds, { who: "DA", jump: da > 0.7 ? Math.abs(Math.sin(time * 6)) * 0.5 : 0, arms: da > 0.7 ? "up" : "down", eyes: da > 0.7 ? "sparkle" : "open", mouth: da > 0.7 ? "grin" : "flat", dir: -1 });
    if (!n) callout("wait", ct > 0.5 && ct < 2.3 && lt < 9, gx + gw / 2, gy + gh * 0.15, W * 0.84, top + H * 0.06, "等结果的时候最兴奋");
    say("again", lt > 5 && near && done && (!n || lt < 10.2), dx, H * 0.8 - ds * 3.2, n ? W * 0.55 : W * 0.84, n ? H * 0.87 : top + H * 0.22, n ? "下一把就中！" : "下一把一定中！", "shout");
    callout("pd", lt > 10.3, mx, my + mh / 2, n ? W * 0.5 : W * 0.4, H * (n ? 0.9 : 0.86), "多巴胺激动剂也可能诱发赌博");
    ctx.restore();
  }

  // ---------- 第 3 幕：腹侧 → 背侧 ----------
  function shiftView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f8f6ff", "#fff3ea"); Anima.bokeh(6, "#e2dcff", 0.6, 37);
    const p = prog(1, 8), fs = fsz(0.028);
    const cx = W * (n ? 0.32 : 0.3);
    const D = { x: cx, y: top + H * 0.2 }, Vn = { x: cx, y: H * 0.72 };
    blob(D.x, D.y, H * 0.13, H * 0.08, mix("#eeeaf8", C.dorsal, p), p > 0.5 ? 0 : null);
    blob(Vn.x, Vn.y, H * 0.13, H * 0.08, mix(C.ventral, "#f3ece6", p), p < 0.5 ? 1 : null);
    plate(n ? "背侧：习惯" : "背侧纹状体：习惯", D.x, D.y + H * 0.13, fsz(0.026), "#efeaff");
    plate(n ? "腹侧：想要" : "腹侧纹状体：想要", Vn.x, Vn.y + H * 0.13, fsz(0.026), "#fff0e0");
    // 控制权小旗子从腹侧爬到背侧
    const fy = lerp(Vn.y, D.y, p);
    ctx.save(); ctx.setLineDash([5, 6]); outline(1.4); ctx.beginPath(); ctx.moveTo(cx - H * 0.18, Vn.y); ctx.quadraticCurveTo(cx - H * 0.3, (D.y + Vn.y) / 2, cx - H * 0.18, D.y); ctx.stroke(); ctx.restore();
    glow(cx, fy, H * 0.06, C.gold, 0.7);
    chara(cx, fy + H * 0.045, H * 0.035, { who: "neuron", hat: "helmet", hatColor: "#ffc94d", cloth: "#fff1b8", arms: "carry", item: "star", eyes: "open", walk: p > 0 && p < 1 ? time * 8 : null });
    // 右边：本人和越来越高的筹码
    const px = W * (n ? 0.72 : 0.66), gy = H * 0.94, ps = H * 0.065;
    const stacks = 1 + Math.floor(p * 5);
    for (let k = 0; k < stacks; k++) {
      for (let j = 0; j <= k; j++) {
        const x = px + ps * 1.6 + k * ps * 0.55, y = gy - H * 0.012 - j * H * 0.022;
        ctx.beginPath(); ctx.ellipse(x, y, ps * 0.25, H * 0.011, 0, 0, Math.PI * 2); ctx.fillStyle = j % 2 ? "#ffd27a" : "#ffb3c1"; ctx.fill(); outline(1.2); ctx.stroke();
      }
    }
    person(px, gy, ps, { eyes: p < 0.4 ? "sparkle" : p < 0.75 ? "open" : "teary", mouth: p < 0.4 ? "grin" : "wavy", brow: p > 0.5 ? "worry" : null, gray: p > 0.6 ? (p - 0.6) * 1.2 : 0, arms: p < 0.4 ? "up" : "hold" });
    if (p > 0.6) emote("gloom", px, gy - ps * 3.3, ps * 0.6);
    say("fun", lt > 0.8 && lt < 4.5, px, gy - ps * 3.2, n ? W * 0.74 : W * 0.72, top + H * 0.22, "好玩！再来一局～", "say");
    say("stuck", lt > 9.5, px, gy - ps * 3.2, n ? W * 0.74 : W * 0.72, top + H * 0.22, n ? "不玩就烦，\n停不下来……" : "不玩就烦躁，停不下来……", "think");
    callout("tol", lt > 5 && lt < 9.3, px + ps * 2.5, gy - H * 0.08, n ? W * 0.7 : W * 0.8, top + H * 0.34, "越下越大：耐受");
    ctx.restore();
  }

  // ---------- 第 4 幕：暴食 ----------
  function eatView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#fdeef3"); Anima.petals(8, 0.5, 45);
    const fs = fsz(0.028);
    const gy = H * 0.92, px = W * (n ? 0.3 : 0.3), ps = H * 0.07;
    // 桌子
    const tx = px - W * 0.02, tw = W * (n ? 0.4 : 0.3), ty = gy - H * 0.14;
    person(px, ty + H * 0.07, ps, { arms: "hold", item: null, eyes: lt > 6 ? "teary" : "open", mouth: Math.sin(time * 8) > 0 ? "o" : "flat", brow: lt > 6 ? "worry" : null });
    rrect(tx - tw / 2, ty, tw, H * 0.04, 6); ctx.fillStyle = "#e8c9a8"; ctx.fill(); outline(1.8); ctx.stroke();
    outline(2); ctx.beginPath(); ctx.moveTo(tx - tw * 0.4, ty + H * 0.04); ctx.lineTo(tx - tw * 0.4, gy); ctx.moveTo(tx + tw * 0.4, ty + H * 0.04); ctx.lineTo(tx + tw * 0.4, gy); ctx.stroke();
    const left = Math.max(1, 6 - Math.floor(lt / 1.8));
    for (let k = 0; k < left; k++) icon(k % 2 ? "cake" : "cake", tx - tw * 0.4 + (k + 0.5) * tw * 0.8 / 6, ty - H * 0.035, H * 0.03, 0);
    if (lt > 6) emote("sweat", px + ps, ty + H * 0.07 - ps * 3.3, ps * 0.5);
    // 饱腹计
    const fullv = clamp(0.35 + lt * 0.12, 0, 1);
    const gx = W * (n ? 0.6 : 0.52), gw = W * (n ? 0.07 : 0.05), gh = H * 0.4, gy0 = top + H * 0.14;
    rrect(gx, gy0, gw, gh, gw / 2); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.save(); rrect(gx, gy0, gw, gh, gw / 2); ctx.clip(); ctx.fillStyle = "#bfe8d6"; ctx.fillRect(gx, gy0 + gh * (1 - fullv), gw, gh * fullv); ctx.restore();
    outline(1.8); rrect(gx, gy0, gw, gh, gw / 2); ctx.stroke();
    ctx.save(); ctx.setLineDash([4, 4]); ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(gx - 6, gy0 + gh * 0.3); ctx.lineTo(gx + gw + 6, gy0 + gh * 0.3); ctx.stroke(); ctx.restore();
    text("饱了", gx + gw + fs * 1.8, gy0 + gh * 0.3, fs, C.bad);
    text("饱腹感", gx + gw / 2, gy0 + gh + fs * 1.2, fs, C.ink);
    // 触发：情绪乌云
    const cx = W * (n ? 0.14 : 0.12), cy = top + H * 0.14;
    ctx.save(); ctx.globalAlpha *= prog(0.5, 1);
    for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(cx + (k - 1.5) * H * 0.035, cy + (k % 2) * H * 0.01, H * 0.035, 0, Math.PI * 2); ctx.fillStyle = "#d6d0dc"; ctx.fill(); }
    ctx.restore();
    // 药物访客（右侧）
    const dx = W * (n ? 0.86 : 0.82), ds = H * 0.055;
    if (lt > 8) {
      ctx.save(); ctx.globalAlpha *= prog(8, 1);
      chara(dx, gy, ds, { who: "drug", label: "药", dir: -1, arms: "wave", eyes: "happy", tag: n ? "赖右苯丙胺" : "赖右苯丙胺（部分国家获批）" });
      ctx.restore();
    }
    callout("cue", lt > 1 && lt < 5, cx, cy + H * 0.03, n ? W * 0.28 : W * 0.24, H * 0.42, "情绪、场景触发");
    callout("over", lt > 5 && lt < 9.5, gx + gw / 2, gy0 + gh * 0.1, n ? W * 0.78 : W * 0.78, top + H * 0.1, "饱了也停不下来：失控");
    say("rx", lt > 9.5, dx, gy - ds * 3.2, n ? W * 0.4 : W * 0.78, top + H * (n ? 0.1 : 0.26), n ? "配合心理\n治疗更好" : "配合心理治疗，效果更好～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：刹车和油门的天平 ----------
  const ICD = ["间歇性暴怒", "偷窃癖", "纵火癖"];
  function balanceView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4f8ff", "#fff1ee"); Anima.bokeh(6, "#dbe8fb", 0.6, 55);
    const p = prog(1.5, 4), fs = fsz(0.028);
    const cx = W * (n ? 0.5 : 0.36), cy = top + H * (n ? 0.22 : 0.3), arm = Math.min(W * (n ? 0.34 : 0.22), H * 0.4);
    const tilt = 0.28 * p; // 往“油门”那边沉
    // 支柱
    outline(2.5); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, H * (n ? 0.62 : 0.78)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - H * 0.06, H * (n ? 0.62 : 0.78)); ctx.lineTo(cx + H * 0.06, H * (n ? 0.62 : 0.78)); ctx.stroke();
    const L = { x: cx - Math.cos(tilt) * arm, y: cy - Math.sin(tilt) * arm }, R = { x: cx + Math.cos(tilt) * arm, y: cy + Math.sin(tilt) * arm };
    ctx.beginPath(); ctx.moveTo(L.x, L.y); ctx.lineTo(R.x, R.y); ctx.stroke();
    const panY = H * 0.14;
    for (const P of [L, R]) { outline(1.4); ctx.beginPath(); ctx.moveTo(P.x, P.y); ctx.lineTo(P.x, P.y + panY); ctx.stroke(); ctx.beginPath(); ctx.ellipse(P.x, P.y + panY, H * 0.08, H * 0.018, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke(); }
    const s = H * 0.042;
    chara(L.x, L.y + panY - H * 0.01, s, { who: "neuron", hair: "#5a7ab0", cloth: "#d5e7f8", arms: "hold", item: "shield", eyes: p > 0.5 ? "teary" : "open", brow: p > 0.5 ? "worry" : null, gray: p * 0.4, tag: "前额叶刹车" });
    chara(R.x, R.y + panY - H * 0.01, s * (1 + p * 0.25), { who: "neuron", hair: "#e0605a", cloth: "#ffd0cc", arms: "fist", eyes: "angry", mouth: "open", tag: "冲动油门" });
    if (p > 0.5) Anima.bolt(R.x + s * 1.2, R.y + panY - s * 3, s * 0.8, 1, C.gas);
    // 例子卡片
    const cw = n ? W * 0.29 : W * 0.24, ch = H * 0.12, gap = W * 0.02;
    ICD.forEach((t, i) => {
      const ap = prog(5 + i * 1.3, 0.8);
      if (ap <= 0.01) return;
      const x = n ? W * 0.04 + i * (cw + gap) : W * 0.7, y = n ? H * 0.8 : top + H * 0.08 + i * (ch + H * 0.03);
      ctx.save(); ctx.globalAlpha *= ap;
      rrect(x, y, cw, ch, 14); ctx.fillStyle = ["#ffe0dc", "#fff1c9", "#ffe6cc"][i]; ctx.fill(); outline(1.8); ctx.stroke();
      text(t, x + cw / 2, y + ch / 2, fsz(n ? 0.03 : 0.032), C.ink);
      ctx.restore();
    });
    if (!n) {
      text("冲动控制障碍，例如：", W * 0.7 + cw / 2, top + H * 0.035, fs, C.soft);
    }
    callout("brk", lt > 2 && lt < 5, L.x, L.y, n ? W * 0.2 : W * 0.16, H * (n ? 0.72 : 0.88), "从上往下：刹车不够");
    callout("gas", lt > 2.5 && lt < 5.5, R.x, R.y, n ? W * 0.78 : W * 0.56, H * (n ? 0.72 : 0.88), "从下往上：油门太猛");
    ctx.restore();
  }

  // ---------- 第 6 幕：换一条路 ----------
  function pathView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f2fbf5", "#fff5ec"); Anima.petals(12, 0.6, 63);
    const p = prog(2, 8), fs = fsz(0.028);
    const O = { x: W * 0.08, y: H * 0.86 }, F = { x: W * 0.42, y: H * 0.86 };
    const A = { x: W * 0.92, y: top + H * 0.28 }, B = { x: W * 0.92, y: H * 0.86 };
    const road = (from, c, to, col, w) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.quadraticCurveTo(c.x, c.y, to.x, to.y); ctx.stroke(); };
    const rw = H * 0.06;
    const cA = { x: W * 0.62, y: top + H * 0.3 };
    road(O, { x: (O.x + F.x) / 2, y: O.y }, F, C.line, rw + 4); road(O, { x: (O.x + F.x) / 2, y: O.y }, F, "#efe2cf", rw);
    road(F, cA, A, C.line, rw + 4); road(F, cA, A, mix("#d8cfd6", "#ece8ea", p), rw);
    road(F, { x: W * 0.7, y: B.y }, B, C.line, rw + 4); road(F, { x: W * 0.7, y: B.y }, B, mix("#efe2cf", "#c8efd9", p), rw);
    plate("老习惯", W * 0.8, top + H * 0.2, fsz(0.028), "#ece8ea");
    plate("新的回应", W * 0.66, H * 0.95, fsz(0.028), "#dff5e8");
    // 本人：走到岔路口，停一下，转向新路
    const ps = H * 0.055;
    let x, y = O.y;
    if (p < 0.4) x = lerp(O.x + W * 0.04, F.x, p / 0.4);
    else if (p < 0.55) x = F.x;
    else { x = lerp(F.x, W * 0.78, (p - 0.55) / 0.45); }
    person(x, y + rw * 0.3, ps, { walk: p < 0.4 || p > 0.55 ? time * 8 : null, eyes: p > 0.55 ? "happy" : "open", mouth: p > 0.55 ? "smile" : "flat", arms: p > 0.55 && p >= 1 ? "up" : "down" });
    if (p >= 0.4 && p < 0.55) emote("bulb", x, y - ps * 3.2, ps * 0.6);
    // 陪伴的人：治疗师、家人，以及小小的药物访客
    const hs = H * 0.045;
    chara(W * 0.2, top + H * 0.4, hs, { who: "neuron", hair: "#6a5a6a", cloth: "#ffffff", glasses: true, arms: "point", eyes: "happy", tag: "治疗师" });
    chara(W * 0.36, top + H * 0.4, hs, { who: "neuron", hair: "#9a6a4a", cloth: "#ffd9e4", style: "bun", arms: "wave", eyes: "happy", tag: "家人" });
    if (!n) chara(W * 0.52, top + H * 0.4, hs * 0.9, { who: "drug", label: "药", arms: "down", eyes: "open", tag: "部分辅助" });
    say("stop", lt > 3 && lt < 8, W * 0.2, top + H * 0.4 - hs * 3.2, n ? W * 0.3 : W * 0.3, top + H * 0.06, "先认出触发，停一下", "say");
    callout("new", lt > 8, x, y - ps * 2, n ? W * 0.52 : W * 0.56, H * 0.62, "反复练习，新回应也会变成习惯");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0804f", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#c0668a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) roadView(S.v0);
    if (S.v1 > 0.02) slotView(S.v1);
    if (S.v2 > 0.02) shiftView(S.v2);
    if (S.v3 > 0.02) eatView(S.v3);
    if (S.v4 > 0.02) balanceView(S.v4);
    if (S.v5 > 0.02) pathView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0804f",
    titleCard: { lines: ["没有药物", "也会上瘾"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
