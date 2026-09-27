Anima.register("glutamate-system", {
    "title": "谷氨酸的循环：神经元和星形胶质细胞",
    "tag": "精神病",
    "headline": "谷氨酸送完信，是怎样【回家】的？",
    "lede": "谷氨酸是大脑里最忙的快递员，也是最需要管紧的一位。送完信以后，它先被星形胶质细胞吸走，换上“便服”变成谷氨酰胺，再送回神经元变回谷氨酸，重新装箱。它能开的门也分好几种。",
    "summary": "谷氨酸是最主要的兴奋性递质；EAAT 把它吸进星形胶质细胞，谷氨酰胺合成酶把它变成谷氨酰胺，送回神经元后由谷氨酰胺酶变回谷氨酸，再由 VGluT 装箱；离子型受体 AMPA、红藻氨酸、NMDA，代谢型 mGluR；NMDA 的协同钥匙和突触前的刹车。",
    "chapter": "对应 Stahl《精神药理学精要》第 4 章 · 谷氨酸系统",
    "footer": "",
    "canvasLabel": "谷氨酸快递员被星形胶质细胞回收、变成谷氨酰胺再送回神经元的动画",
    "regions": ["synapse", "pfc"],
    "parts": ["psychosis"],
    "cast": ["Glu", "pump"],
    "color": "#f6c02e"
  }, () => {
  const CH = [
    { title: "大脑的主油门", v0: 1, v1: 0, v2: 0, astro: 0,
      pill: ["递质", "谷氨酸"], pill2: ["作用", "兴奋 ⚡"],
      text: "谷氨酸是大脑里最主要的兴奋性递质，神经元之间大部分快速的“加油”信号都靠它。电信号一到，末梢放出谷氨酸，它们敲开对面的受体门，钠离子冲进去，下一个神经元就兴奋起来，像踩下油门。谷氨酸也是细胞里到处都有的普通氨基酸，所以它的来去要管得特别严。",
      fact: "谷氨酸是中枢神经系统最主要的兴奋性神经递质" },
    { title: "胶质细胞快快吸走", v0: 1, v1: 0, v2: 0, astro: 1,
      pill: ["回收", "EAAT"], pill2: ["清太慢", "过度兴奋"],
      text: "谷氨酸送完信要马上离场。突触旁边贴着一位星形胶质细胞，它膜上的谷氨酸转运体（EAAT）把间隙里的谷氨酸飞快地吸进去。为什么这么急？如果谷氨酸越积越多，受体门一直开着，钙离子不停往里涌，神经元就会兴奋过头，甚至受伤，这叫兴奋性毒性。",
      fact: "星形胶质细胞上的 EAAT 负责清除突触间隙里的大部分谷氨酸" },
    { title: "换身便服：谷氨酰胺", v0: 0, v1: 1, v2: 0, astro: 1,
      pill: ["胶质细胞", "合成酶"], pill2: ["产品", "谷氨酰胺"],
      text: "被吸进星形胶质细胞的谷氨酸，会遇到一位师傅：谷氨酰胺合成酶。它给谷氨酸接上一个氨基，变成谷氨酰胺。谷氨酰胺就像谷氨酸换上的便服：它打不开谷氨酸的受体门，可以安安全全地在细胞之间搬运。星形胶质细胞再把谷氨酰胺送出来，交还给神经元。",
      fact: "谷氨酰胺合成酶主要在星形胶质细胞里；谷氨酰胺不会激活谷氨酸受体" },
    { title: "回到神经元，重新装箱", v0: 0, v1: 1, v2: 0, astro: 1,
      pill: ["神经元", "谷氨酰胺酶"], pill2: ["装箱", "VGluT"],
      text: "谷氨酰胺被神经元收进末梢，另一位师傅谷氨酰胺酶帮它脱下便服，又变回谷氨酸。接着，囊泡上的装货门 VGluT 把谷氨酸装进囊泡，等下一次电信号来了再放出去。放出、被吸走、变成谷氨酰胺、送回、变回、装箱，这一圈叫做谷氨酸-谷氨酰胺循环。",
      fact: "谷氨酸-谷氨酰胺循环让神经元和星形胶质细胞合作回收谷氨酸" },
    { title: "能开的门：两大家族", v0: 0, v1: 0, v2: 1, astro: 0,
      pill: ["离子型", "3 种"], pill2: ["代谢型", "mGluR"],
      text: "谷氨酸能开的门分成两大家族。离子型受体本身就是离子通道：AMPA 开得最快，负责大部分快速兴奋；红藻氨酸受体和它有点像；NMDA 开得慢、关得也慢，还会放钙离子进来，和学习、记忆有关。另一家是代谢型受体 mGluR，它们连着 G 蛋白，一站一站往下传，负责慢慢地调节。",
      fact: "离子型：AMPA、红藻氨酸、NMDA；代谢型：mGluR（G 蛋白偶联受体）" },
    { title: "NMDA 的第二把钥匙", v0: 1, v1: 0, v2: 0, astro: 1,
      pill: ["NMDA", "两把钥匙"], pill2: ["协同", "D-丝氨酸"],
      text: "NMDA 门光有谷氨酸还打不开，还要一把协同钥匙：甘氨酸或 D-丝氨酸。这把钥匙和星形胶质细胞关系很密切：胶质细胞可以放出 D-丝氨酸，它膜上的甘氨酸回收门 GlyT1 又决定门边留下多少甘氨酸。所以胶质细胞不只是清洁工，还能调节 NMDA 门开得容不容易。",
      fact: "NMDA 受体需要谷氨酸和协同激动剂（甘氨酸或 D-丝氨酸）同时结合" },
    { title: "代谢型门：给自己踩刹车", v0: 1, v1: 0, v2: 0, astro: 0,
      pill: ["突触前", "mGluR2/3"], pill2: ["放出量", "变少"],
      text: "有些代谢型受体装在谷氨酸神经元自己的末梢上，比如 mGluR2 和 mGluR3。谷氨酸放得太多、溢出间隙时，就会按下这扇门，门后的 G 蛋白传话进来，末梢就少放一些谷氨酸。这就像给自己装了一个刹车，免得油门踩过头。",
      fact: "突触前的 mGluR2/3 是谷氨酸释放的负反馈“刹车”" },
  ];

  const C = Object.assign({}, Anima.C, { term: "#fff0c8", post: "#ffe7d8", astro: "#dff0ff", astroD: "#9fc3ea", gln: "#d6f0c2" });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, astro: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update() { lt = Anima.sceneTime; }
  const GLN = { who: "Glu", cloth: C.gln, hatColor: "#9fd88a", hair: "#e3c85a", label: "Gln" };
  const DSER = { who: "neuron", hair: "#8fd0f0", eye: "#3a8ab8", cloth: "#e0f4ff", style: "bob" };
  const GLY = { who: "neuron", hair: "#c7a4f0", eye: "#7a55b0", cloth: "#f0e6ff", style: "short" };
  const GS = { who: "neuron", hair: "#6fb9e0", eye: "#3a7fa8", cloth: "#dff1fb", hat: "kerchief", hatColor: "#a9d8ee", style: "bun" };
  const GA = { who: "neuron", hair: "#f29a52", eye: "#c0661e", cloth: "#ffe6cc", hat: "kerchief", hatColor: "#ffc98f", style: "short" };

  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function meter(label, x, y, w, v, col) {
    const mh = H * 0.028;
    text(label, x - fz(0.024) * 0.5, y, fz(0.024), C.ink, "right");
    rrect(x, y - mh / 2, w, mh, mh / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(x, y - mh / 2, Math.max(mh, w * v), mh, mh / 2); ctx.fillStyle = col; ctx.fill(); outline(1.3); ctx.stroke();
  }
  // 星形胶质细胞：伸出好几条胳膊的星星
  function astro(x, y, r, gray, mood) {
    const col = Anima.mix(C.astro, "#d8d4d8", gray || 0);
    ctx.lineCap = "round";
    for (const [w, c] of [[r * 0.34, C.line], [r * 0.26, col]]) {
      ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath();
      for (let k = 0; k < 6; k++) { const q = k * Math.PI / 3 + 0.3; ctx.moveTo(x, y); ctx.quadraticCurveTo(x + Math.cos(q + 0.3) * r, y + Math.sin(q + 0.3) * r, x + Math.cos(q) * r * 1.5, y + Math.sin(q) * r * 1.5); }
      ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(x, y, r * 0.78, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.15, r * 0.36, mood == null ? 1 : mood);
  }
  const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
  function termYf(cx, tw, th) {
    return (x) => {
      const dx = Math.abs(x - cx); let best = th, bd = 1e9;
      for (let i = 0; i <= 30; i++) { const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, th * 1.02, th, th); if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; } }
      return best;
    };
  }
  function gprot(x, y, r, on) {
    if (on > 0.05) glow(x, y, r * 2.2, "#ffe08a", on);
    ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.78, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe7a3"; ctx.fill(); outline(1.6); ctx.stroke();
    face(x, y, r * 0.55, on > 0.5 ? 1 : 0);
  }

  // ---------- 突触特写（第 1、2、6、7 幕） ----------
  function synView(a) {
    const nw = Anima.narrow, A = S.astro;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#fffaf0"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#fff3ea");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#ffe9a8", 0.7, 5);
    const cx = W * (nw ? 0.38 : 0.36), tw = Math.min(W * 0.48, H * 0.86), th = H * 0.4, post = H * 0.8, s = H * 0.032, rs = H * 0.046;
    const ty = termYf(cx, tw, th);
    const ex = cur === 1 ? clamp(Math.min((lt - 6.5) / 1.2, (11.8 - lt) / 1.2), 0, 1) : 0; // 第 2 幕中段：假如回收停下来
    // 星形胶质细胞
    const ax = W * (nw ? 0.85 : 0.87), ay = H * 0.46, ar = Math.min(H * 0.16, W * (nw ? 0.12 : 0.1));
    const E = [{ x: ax - ar * 1.2, y: ay + ar * 0.5 }, { x: ax - ar * 0.55, y: ay + ar * 1.35 }];
    if (A > 0.02) {
      ctx.save(); ctx.globalAlpha *= A;
      astro(ax, ay, ar, ex * 0.8, ex > 0.5 ? -1 : 1);
      if (cur !== 5) E.forEach((e, i) => Anima.transporter(e.x, e.y, H * 0.036, "#9fe0c4", time * (3 - ex * 3), ex > 0.5 && i === 0));
      text(nw ? "胶质细胞" : "星形胶质细胞", ax, ay + ar * 1.85, fz(0.024), "#3a7fa8");
      ctx.restore();
    }
    // 突触后膜和受体
    const hot = cur === 1 ? ex : 0;
    Anima.postMembrane(post, Anima.mix(C.post, "#ffc0c0", hot), { face: !nw, faceX: W * 0.08, mood: hot > 0.5 ? -1 : 1 });
    const RX = cur === 5 ? [cx] : [cx - tw * 0.2, cx + tw * 0.12];
    Anima.terminal(cx, 0, tw, th, C.term);
    // 突触前的 mGluR2/3（第 7 幕）
    const mg = { x: cx + tw * 0.44 }; mg.y = ty(mg.x);
    let brake = 0;
    if (cur === 6) {
      brake = prog(3, 3);
      ctx.save(); ctx.translate(mg.x, mg.y); ctx.rotate(-0.5);
      Anima.receptor(0, 0, H * 0.034, "#c8b8f0", brake > 0.1 ? 0.6 + 0.4 * Math.sin(time * 4) : 0, { dir: -1, shape: "tri" });
      ctx.restore();
      gprot(mg.x - tw * 0.12, mg.y - th * 0.3, H * 0.03, brake);
    }
    const rate = cur === 6 ? 1 - brake * 0.55 : 1;
    for (let k = 0; k < 3; k++) Anima.vesicle(cx + (k - 1) * tw * 0.17, th * (0.72 - (k % 2) * 0.14), H * 0.04, "#f6c02e", Math.round(5 * rate), k * 3);
    // 快递员
    const REL = [cx - tw * 0.12, cx + tw * 0.05];
    const act = RX.map(() => 0);
    const nC = cur === 6 ? 6 : 5;
    let sp = null;
    for (let c = 0; c < nC; c++) {
      const t = (time * 0.2 + c / nC) % 1, ri = c % RX.length, rx = REL[c % 2], ry = ty(rx) + s * 3.2, site = { x: RX[ri] + (cur === 5 ? -rs * 0.45 : 0), y: post - rs * 1.62 };
      if (cur === 6 && c % 6 >= Math.round(6 * rate)) continue; // 刹车后放得少
      let x, y, al = Math.min(1, t * 12), eyes = "happy", mouth = "smile";
      if (cur === 5) { // 第 6 幕：谷氨酸坐在 NMDA 上等第二把钥匙
        if (c > 0) continue;
        const k = prog(0.5, 1.5); x = lerp(rx, site.x - rs * 0.5, k); y = lerp(ry, site.y, k); al = 1;
        eyes = lt > 5 ? "happy" : "open"; mouth = lt > 5 ? "grin" : "wavy";
      } else if (cur === 6 && (c === 1 || c === 4) && brake > 0.05) { // 溢出去按刹车
        const k = ease(t / 0.5); x = lerp(rx, mg.x - s * 0.6, k); y = lerp(ry, mg.y + s * 3.6, k); al = Math.min(1, (1 - t) * 4);
      } else if (t < 0.28) { const k = ease(t / 0.28); x = lerp(rx, site.x, k); y = lerp(ry, site.y, k); }
      else if (t < 0.45) { x = site.x; y = site.y; act[ri] = 1; eyes = "sparkle"; mouth = "grin"; }
      else if (cur === 1 && ex > 0.3) { // 清不走：在间隙里打转
        x = site.x + Math.sin(time * 1.3 + c * 2) * W * 0.06; y = site.y - H * 0.06 + Math.cos(time + c) * H * 0.03; eyes = "angry"; mouth = "open"; act[ri] = 1;
      } else if (A > 0.5) { const k = ease((t - 0.45) / 0.4), e = E[c % 2]; x = lerp(site.x, e.x - s * 0.8, k); y = lerp(site.y, e.y + s * 2.4, k); al = k > 0.85 ? (1 - k) / 0.15 : 1; if (c === 0 && k < 0.5) sp = { x, y }; }
      else { al = Math.max(0, 1 - (t - 0.45) * 8); x = site.x; y = site.y; }
      if (al > 0.02) chara(x, y, s, { who: "Glu", walk: time * 9 + c, eyes, mouth, alpha: al, shadow: false, seed: c });
    }
    if (cur === 1 && ex > 0.05) for (let k = 0; k < 4; k++) { // 越积越多
      const x = cx + (rnd(k) - 0.3) * tw * 0.8 + Math.sin(time + k) * W * 0.02, y = post - H * 0.04 - rnd(k + 9) * H * 0.2;
      chara(x, y, s * 0.9, { who: "Glu", eyes: "angry", mouth: "open", alpha: ex, shadow: false, seed: k + 7 });
    }
    // 受体
    let nmdaOpen = 0;
    if (cur === 5) {
      nmdaOpen = prog(5, 1);
      const r = Anima.receptor(RX[0], post, rs * 1.15, "#f7a8c0", nmdaOpen, { shape: "square", label: "NMDA" });
      // 协同钥匙孔
      const kx = RX[0] + rs * 0.55, ky = r.site.y + rs * 0.05;
      ctx.beginPath(); ctx.arc(kx, ky, rs * 0.26, 0, Math.PI * 2); ctx.fillStyle = "#e0f4ff"; ctx.fill(); outline(1.4); ctx.stroke();
      // D-丝氨酸从胶质细胞走过来；甘氨酸在 GlyT1 门口
      const k = prog(1.5, 3.3);
      const dx = lerp(ax - ar * 1.3, kx + s * 0.9, k), dy = lerp(ay + ar * 1.2, ky, k) + s * 0.2;
      chara(dx, dy, s * 0.95, Object.assign({}, DSER, { walk: k < 1 ? time * 9 : null, eyes: k >= 1 ? "happy" : "open", alpha: A }));
      if (k > 0.98) plate("D-丝氨酸", dx + s * 1.6, dy - s * 3.6, "#e0f4ff", fz(0.022));
      const gx = ax - ar * 0.55, gy = ay + ar * 1.35;
      Anima.transporter(gx, gy, H * 0.036, "#d8c4f5", time * 1.5, false);
      chara(gx - s * 2.2, gy + s * 3, s * 0.9, Object.assign({}, GLY, { eyes: "happy", alpha: A }));
      text("甘氨酸", gx - s * 2.2, gy + s * 3 + fz(0.022) * 0.9, fz(0.022), "#7a55b0");
    } else RX.forEach((x, i) => Anima.receptor(x, post, rs, "#f7a8c0", act[i], { shape: "square", label: cur === 0 && i === 0 ? "AMPA" : null }));
    // 进入的离子
    const flow = cur === 5 ? nmdaOpen : Math.max(act[0] || 0, act[1] || 0);
    if (flow > 0.3) for (let k = 0; k < 4; k++) {
      const t = (time * 1.2 + k / 4) % 1, x = RX[k % RX.length] + (rnd(k) - 0.5) * rs * 0.6, y = lerp(post - rs * 1.2, post + H * 0.12, t);
      const ca = cur === 5 || hot > 0.5;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI); Anima.ion(x, y, H * 0.017, ca ? "Ca" : "Na", ca ? "#c8f0d8" : "#bfe3f5"); ctx.restore();
    }
    // 兴奋度
    const lvl = cur === 1 ? lerp(0.45, 1, ex) : cur === 5 ? 0.2 + nmdaOpen * 0.5 : cur === 6 ? 0.7 - brake * 0.3 : 0.2 + 0.4 * flow;
    const mx = W * (nw ? 0.6 : 0.62), my = post + (H - post) * 0.55;
    meter(cur === 6 ? "放出量" : "兴奋", mx, my, W * (nw ? 0.34 : 0.3), cur === 6 ? rate : lvl, cur === 6 ? "#f6c02e" : Anima.mix("#f6c02e", "#e8637a", hot));
    // 标注
    callout("amp", cur === 0 && lt > 2, RX[0] + rs * 0.7, post - rs, nw ? W * 0.76 : RX[0] - W * 0.02, nw ? H * 0.46 : post - H * 0.28, "受体门打开，Na⁺ 冲进来");
    say("gas", cur === 0 && lt > 5.5, cx - tw * 0.2, post - rs * 1.6 - s * 3, W * (nw ? 0.8 : 0.72), H * (nw ? 0.62 : 0.5), "油门踩下去！", "shout");
    callout("eaat", cur === 1 && lt > 1.5 && lt < 6.2, E[0].x, E[0].y, E[0].x - W * 0.08, H * (nw ? 0.22 : 0.2), "EAAT：谷氨酸回收门");
    say("sp", cur === 1 && lt < 6 && lt > 3 && !!sp, sp ? sp.x : 0, sp ? sp.y - s * 3 : 0, W * 0.56, H * 0.55, "送完就撤！", "say");
    say("tox", cur === 1 && ex > 0.5, W * 0.08, post + H * 0.05, W * (nw ? 0.26 : 0.32), H * 0.9, nw ? "清不走就过度兴奋" : "如果清不走……兴奋过头啦！", "box");
    callout("dser", cur === 5 && win(1.8, 7), ax - ar * 1.3, ay + ar * 0.9, ax - W * 0.1, H * (nw ? 0.2 : 0.18), "胶质细胞送来 D-丝氨酸");
    callout("glyt", cur === 5 && lt > 7.5, ax - ar * 0.55, ay + ar * 1.35, ax - W * 0.1, H * (nw ? 0.2 : 0.18), "GlyT1：甘氨酸回收门");
    say("two", cur === 5 && lt > 5.5, RX[0] - rs * 0.5, post - rs * 1.7 - s * 3.2, cx - W * (nw ? 0.16 : 0.2), H * (nw ? 0.5 : 0.52), nw ? "钥匙到齐，开门！" : "两把钥匙都到齐，开门！", nw ? "say" : "shout");
    callout("mg", cur === 6 && lt > 2.5, mg.x, mg.y, nw ? W * 0.8 : mg.x + W * 0.1, H * (nw ? 0.36 : 0.5), "突触前的 mGluR2/3");
    say("brk", cur === 6 && lt > 6.5, mg.x - tw * 0.12, mg.y - th * 0.3, nw ? W * 0.78 : cx - tw * 0.1, nw ? H * 0.62 : th * 0.3, "外面够多啦，少放点～", "say");
    ctx.restore();
  }

  // ---------- 谷氨酸-谷氨酰胺循环（第 3、4 幕） ----------
  function cycleView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#f1f7ff"); Anima.bokeh(6, "#ffe9a8", 0.6, 15); Anima.petals(6, 0.4, 16);
    const top = Anima.topSafe() + H * 0.03, bot = H * 0.74, s = H * (nw ? 0.036 : 0.046);
    // 左：神经元末梢；右：星形胶质细胞；下：突触间隙
    const L = { x: W * 0.03, y: top, w: W * 0.38, h: bot - top }, R = { x: W * 0.59, y: top, w: W * 0.38, h: bot - top };
    rrect(L.x, L.y, L.w, L.h, 24); ctx.fillStyle = "#fff0c8"; ctx.fill(); outline(2); ctx.stroke();
    rrect(R.x, R.y, R.w, R.h, 24); ctx.fillStyle = C.astro; ctx.fill(); outline(2); ctx.stroke();
    rrect(-10, bot + H * 0.04, W + 20, H - bot, 0); ctx.fillStyle = "rgba(210,236,248,0.7)"; ctx.fill();
    plate("神经元末梢", L.x + L.w / 2, L.y, "#ffe08a", fz(0.024));
    plate("星形胶质细胞", R.x + R.w / 2, R.y, "#bfe3f5", fz(0.024));
    text("突触间隙", W * 0.5, H * 0.95, fz(0.024), "#3a7fa8");
    const nFocus = cur === 3 ? 1 : 0, aFocus = cur === 2 ? 1 : 0;
    // 站点
    const P = {
      rel: [L.x + L.w * 0.8, bot + H * 0.02], cleft: [W * 0.5, bot + H * 0.12], eaat: [R.x + R.w * 0.2, bot],
      gs: [R.x + R.w * 0.55, top + L.h * 0.62], out: [R.x, top + L.h * 0.3], mid: [W * 0.5, top + L.h * 0.3],
      inn: [L.x + L.w, top + L.h * 0.3], ga: [L.x + L.w * 0.45, top + L.h * 0.55], ves: [L.x + L.w * 0.72, top + L.h * 0.78],
    };
    // 转运体和囊泡
    Anima.transporter(P.eaat[0], P.eaat[1], H * 0.036, "#9fe0c4", time * 3, false);
    Anima.transporter(P.out[0], P.out[1], H * 0.03, "#cde8b8", time * 1.5, false);
    Anima.transporter(P.inn[0], P.inn[1], H * 0.03, "#cde8b8", time * 1.5, false);
    const vr = H * 0.05;
    Anima.vesicle(P.ves[0], P.ves[1], vr, "#f6c02e", 5, 2);
    rrect(P.ves[0] - vr * 1.2, P.ves[1] - vr * 0.25, vr * 0.3, vr * 0.5, vr * 0.1); ctx.fillStyle = "#ffd27a"; ctx.fill(); outline(1.4); ctx.stroke();
    // 师傅们
    if (aFocus) glow(P.gs[0], P.gs[1] - s * 1.5, s * 4, "#fff1b8", 1);
    if (nFocus) glow(P.ga[0], P.ga[1] - s * 1.5, s * 4, "#fff1b8", 1);
    // 一圈路线
    const route = [P.rel, P.cleft, P.eaat, P.gs, P.out, P.mid, P.inn, P.ga, P.ves];
    const seg = [0.1, 0.1, 0.14, 0.1, 0.08, 0.08, 0.14, 0.14, 0.12];
    const at = (t) => { let acc = 0; for (let i = 0; i < seg.length; i++) { if (t < acc + seg[i] || i === seg.length - 1) { const k = clamp((t - acc) / seg[i], 0, 1), p = route[i], q = route[(i + 1) % route.length]; return { x: lerp(p[0], q[0], k), y: lerp(p[1], q[1], k), i, k }; } acc += seg[i]; } return null; };
    for (let c = 0; c < 7; c++) {
      const t = (time * 0.055 + c / 7) % 1, p = at(t);
      const isGln = p.i >= 3 && p.i < 7 && !(p.i === 3 && p.k < 0.5);
      const al = p.i === 8 ? 1 - p.k : p.i === 0 ? Math.min(1, p.k * 3) : 1;
      if (al < 0.02) continue;
      chara(p.x, p.y + s * 1.5, s, Object.assign({}, isGln ? GLN : { who: "Glu" }, { walk: time * 9 + c, eyes: isGln ? "sleepy" : "happy", mouth: isGln ? "cat" : "smile", alpha: al, shadow: false, seed: c }));
    }
    chara(P.gs[0], P.gs[1] + s * 1.6, s * 1.1, Object.assign({}, GS, { arms: "hold", item: "star", eyes: "happy", mouth: aFocus ? "grin" : "smile" }));
    chara(P.ga[0], P.ga[1] + s * 1.6, s * 1.1, Object.assign({}, GA, { arms: "hold", item: "scissors", eyes: "happy", mouth: nFocus ? "grin" : "smile" }));
    plate(nw ? "合成酶" : "谷氨酰胺合成酶", P.gs[0], P.gs[1] + s * 2.6, "#e6f4fc", fz(0.022));
    plate("谷氨酰胺酶", P.ga[0], P.ga[1] + s * 2.6, "#fff0dc", fz(0.022));
    // 小图例
    const ly = H * 0.86, fs = fz(0.024);
    if (!nw) {
    chara(W * (nw ? 0.08 : 0.2), ly + s * 1.1, s * 0.7, { who: "Glu", shadow: false, bob: 0 });
    text("谷氨酸", W * (nw ? 0.08 : 0.2) + s * 1.1, ly, fs, C.ink, "left");
    chara(W * (nw ? 0.64 : 0.66), ly + s * 1.1, s * 0.7, Object.assign({}, GLN, { shadow: false, bob: 0, eyes: "sleepy" }));
    text("谷氨酰胺", W * (nw ? 0.64 : 0.66) + s * 1.1, ly, fs, C.ink, "left");
    }
    const cy2 = nw ? H * 0.9 : H * 0.52;
    callout("eaat2", cur === 2 && win(1, 5), P.eaat[0], P.eaat[1], P.eaat[0] + W * 0.02, cy2, "EAAT：吸进胶质细胞");
    callout("gs", cur === 2 && (nw ? win(5, 8.5) : lt > 5), P.gs[0], P.gs[1] - s * 2, nw ? W * 0.5 : P.gs[0] - W * 0.02, nw ? cy2 : top + H * 0.08, "接上氨基，变成谷氨酰胺");
    say("pj", cur === 2 && lt > 8.5, P.gs[0], P.gs[1] - s * 1.8, nw ? W * 0.5 : W * 0.5, nw ? H * 0.9 : top + (bot - top) * 0.62, "换上便服，就不会乱开门～", "say");
    callout("ga", cur === 3 && win(1, 5), P.ga[0], P.ga[1] - s * 2, nw ? W * 0.5 : P.ga[0] + W * 0.04, nw ? cy2 : top + H * 0.08, "谷氨酰胺酶：变回谷氨酸");
    callout("vglut", cur === 3 && (nw ? win(5, 8.5) : lt > 5), P.ves[0] - vr, P.ves[1], P.ves[0] - W * 0.02, cy2, "VGluT：装进囊泡");
    say("loop", cur === 3 && lt > 8.5, P.ga[0], P.ga[1] - s * 1.8, W * 0.5, nw ? H * 0.9 : top + (bot - top) * 0.62, "转一圈，又回到囊泡里啦！", "say");
    ctx.restore();
  }

  // ---------- 两大家族（第 5 幕） ----------
  function familyView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#fdf0f4"); Anima.bokeh(6, "#ffe9a8", 0.6, 25); Anima.petals(8, 0.4, 26);
    const my = H * 0.6, s = H * (nw ? 0.034 : 0.038), rs = H * (nw ? 0.042 : 0.048);
    const g = ctx.createLinearGradient(0, my, 0, H); g.addColorStop(0, "#ffe7d8"); g.addColorStop(1, "#fff3ec");
    ctx.fillStyle = g; ctx.fillRect(0, my, W, H - my); outline(2); ctx.beginPath(); ctx.moveTo(0, my); ctx.lineTo(W, my); ctx.stroke();
    const X = [0.13, 0.36, 0.6, 0.85].map((k) => k * W);
    const names = ["AMPA", "红藻氨酸", "NMDA", "mGluR"];
    const eff = nw ? ["Na⁺ 最快", "Na⁺ 进", "Ca²⁺ 也进", "传话"] : ["Na⁺ 进，最快", "Na⁺ 进", "Ca²⁺ 也进，慢", "G 蛋白传话"];
    const t0 = [1, 2.2, 3.4, 4.6];
    const bt = Anima.topSafe() + H * 0.05;
    // 家族括号
    const br = (x1, x2, y, t, col) => { outline(1.8); ctx.strokeStyle = col; ctx.beginPath(); ctx.moveTo(x1, y + H * 0.03); ctx.lineTo(x1, y); ctx.lineTo(x2, y); ctx.lineTo(x2, y + H * 0.03); ctx.stroke(); plate(t, (x1 + x2) / 2, y, "#fff", fz(0.026)); };
    br(X[0] - W * 0.08, X[2] + W * 0.08, bt, "离子型：门就是通道", "#e7a23a");
    br(X[3] - W * 0.08, X[3] + W * 0.08, bt, "代谢型", "#8f84e0");
    X.forEach((x, i) => {
      const k = prog(t0[i], 1.4), open = i === 2 ? prog(t0[i] + 1.6, 1.5) : i === 3 ? 0 : k;
      if (i < 3) Anima.receptor(x, my, rs, i === 2 ? "#f7a8c0" : "#ffd27a", open, { shape: "square" });
      else { Anima.receptor(x, my, rs, "#c8b8f0", k, { shape: "square" }); gprot(x + rs * 1.6, my + H * 0.08, H * 0.03, prog(t0[i] + 1, 1)); }
      const site = { x, y: my - rs * 1.62 };
      chara(lerp(x - W * 0.07, site.x, k), lerp(bt + H * 0.2, site.y, k), s, { who: "Glu", walk: k < 1 ? time * 9 + i : null, eyes: k >= 1 ? "happy" : "open", alpha: Math.min(1, (lt - t0[i] + 1) * 2), shadow: false, seed: i });
      if (i === 2 && open < 0.5 && k >= 1) { Anima.ion(x, my - rs * 0.5, H * 0.017, "Mg", "#e6e0d4"); }
      if (i < 3 && open > 0.3) for (let q = 0; q < 3; q++) {
        const t = (time * (i === 2 ? 0.7 : 1.4) + q / 3) % 1;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * open;
        Anima.ion(x + (q - 1) * rs * 0.25, lerp(my - rs * 1.1, my + H * 0.1, t), H * 0.016, i === 2 && q === 1 ? "Ca" : "Na", i === 2 && q === 1 ? "#c8f0d8" : "#bfe3f5");
        ctx.restore();
      }
      if (i === 3 && lt > t0[3] + 2) Anima.spark([[x + rs * 1.6, my + H * 0.11], [x + rs * 1.6, H * 0.94], [x - W * 0.08, H * 0.94]], ((lt - t0[3] - 2) * 0.25) % 1, H * 0.018, "#8f84e0");
      plate(names[i], x, my + H * 0.2, i === 3 ? "#ece6fb" : "#fff3d0", fz(0.026));
      text(eff[i], x, my + H * 0.29, fz(nw ? 0.022 : 0.024), C.ink);
    });
    callout("mg1", lt > 4.2 && lt < 7.5, X[2] + rs * 0.2, my - rs * 0.5, X[2] + W * 0.02, H * 0.44, "NMDA 还塞着镁离子");
    say("slowG", lt > 8, X[3], my - rs * 1.6 - s * 3, X[3] - W * 0.1, bt + H * 0.13, "我不开门，我传话～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#c88600", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6fb9e0", true);
  }
  function draw() {
    ctx.fillStyle = "#fffaf2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) synView(S.v0);
    if (S.v1 > 0.02) cycleView(S.v1);
    if (S.v2 > 0.02) familyView(S.v2);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#f6c02e",
    titleCard: { lines: ["谷氨酸的循环", "神经元和星形胶质细胞"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
