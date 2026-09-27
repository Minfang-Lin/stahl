Anima.register("monoamine-brakes", {
    "title": "递质之间的刹车网络",
    "tag": "抗抑郁药",
    "headline": "递质之间互踩【刹车】和【油门】",
    "lede": "去甲肾上腺素和 5-HT 不是各干各的：它们给自己装刹车，也给对方踩油门、踩刹车。看懂这张网，就能明白米氮平这类药为什么“松开刹车”也能让递质变多。",
    "summary": "α2 自身受体、α2 异身受体、中缝核上的 α1 油门、5-HT2A/2C 的间接刹车；米氮平松开 α2 刹车，曲唑酮和阿戈美拉汀各挑一扇门。",
    "chapter": "对应 Stahl《精神药理学精要》第 6～7 章 · 单胺的相互调节",
    "footer": "抗抑郁药的选择、加减和停用都要和医生商量；如果出现伤害自己的想法，请马上告诉身边的人并尽快就医。",
    "canvasLabel": "去甲肾上腺素和 5-HT 神经元互相踩刹车和油门的网络动画",
    "regions": ["brainstem", "pfc"],
    "parts": ["mood"],
    "cast": ["NE", "5HT", "DA", "GABA", "drug"],
    "color": "#ec6470"
  }, () => {
  const CH = [
    { title: "NE 给自己踩刹车", v0: 1, v1: 0,
      pill: ["α2", "自身刹车"], pill2: ["NE 释放", "变少"],
      text: "去甲肾上腺素（NE）神经元住在脑干的蓝斑，5-HT 神经元住在中缝核，它们都把长线送到前额叶，而且彼此牵制。先看 NE 自己：末梢放出的 NE，有一部分回头按下末梢上的 α2 受体。这是它的自身受体，也是一个刹车：外面的 NE 一多，下一次就少放一些，免得放过了头。",
      fact: "α2 自身受体是 NE 神经元给自己装的刹车" },
    { title: "NE 给 5-HT 踩油门", v0: 1, v1: 0,
      pill: ["α1", "油门"], pill2: ["5-HT", "放电变快"],
      text: "NE 神经元还有一条分支，一路伸到中缝核，连在 5-HT 神经元的胞体上。那里装的是 α1 受体，它是一个油门：NE 一按，5-HT 神经元放电变快，送到前额叶的 5-HT 也跟着变多。所以 NE 越活跃，5-HT 也会被带动起来。",
      fact: "中缝核胞体上的 α1 受体：NE 给 5-HT 踩油门" },
    { title: "也给 5-HT 踩刹车", v0: 1, v1: 0,
      pill: ["α2", "异身刹车"], pill2: ["5-HT 释放", "变少"],
      text: "NE 还有一条分支伸到 5-HT 的轴突末梢。那里装的也是 α2 受体，只不过它长在“别人家”的末梢上，所以叫异身受体。NE 一按，5-HT 末梢就少放一些 5-HT。同一位 NE，在胞体上踩油门，在末梢上踩刹车，一松一紧，把 5-HT 调在合适的范围里。",
      fact: "5-HT 末梢上的 α2 异身受体：NE 给 5-HT 踩刹车" },
    { title: "5-HT 也反过来管", v0: 1, v1: 0,
      pill: ["5-HT2C", "刹车"], pill2: ["NE、DA", "变少"],
      text: "5-HT 也不只是被管着。它能通过 5-HT2A、5-HT2C 这些门，很多时候借助 GABA 刹车员，给 NE 和多巴胺（DA）踩刹车。5-HT 一多，NE 和 DA 神经元就被按得安静一些。有人认为，这可能是少数人吃 SSRI 后觉得情绪变平淡、提不起劲的原因之一，出现这种情况可以告诉医生。",
      fact: "5-HT 通过 5-HT2A/2C，间接给 NE 和 DA 踩刹车" },
    { title: "米氮平：松开刹车", v0: 1, v1: 0,
      pill: ["米氮平", "松刹车"], pill2: ["NE 5-HT", "都变多"],
      text: "米氮平不去堵回收门，而是松刹车。它挡住 NE 末梢上的 α2 自身受体，NE 就多放；挡住 5-HT 末梢上的 α2 异身受体，5-HT 也多放；多出来的 NE 再去踩中缝核的 α1 油门，5-HT 神经元放电更快。它还挡住 5-HT2A、2C、3 和组胺 H1 受体，所以可能让人犯困、胃口变大。",
      fact: "挡住刹车也能让递质变多：米氮平是 α2 拮抗剂" },
    { title: "挑一扇门来松", v0: 0, v1: 1,
      pill: ["曲唑酮", "挡 2A"], pill2: ["阿戈美拉汀", "挡 2C"],
      text: "别的药也会挑门。曲唑酮主要挡住 5-HT2A，还挡住组胺 H1 和 α1，所以容易犯困，医生有时用它帮助睡眠。阿戈美拉汀一边激活褪黑素受体，帮生物钟对上点；一边挡住 5-HT2C，松开 NE 和 DA 的刹车。想让递质变多，有两条路：堵住回收门，或者松开刹车。怎么选药，请交给医生。",
      fact: "增加递质的两条路：堵住回收门，或者松开刹车" },
  ];

  const C = Object.assign({}, Anima.C, { ctx: "#f3effd", stem: "#fff1e6", ne: "#ec6470", sht: "#62c9ab", da: "#ff9a52", gaba: "#8f86e2" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0 };
  const F = { auto: 1, gas: 0.3, het: 0.3, s2c: 0.25 };
  const FT = [[1, 0.3, 0.3, 0.25], [0.5, 1, 0.3, 0.25], [0.5, 0.6, 1, 0.25], [0.5, 0.5, 0.5, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
  const MIR = { who: "drug", hatColor: "#ec6470", hatColor2: "#ffe3e6", label: "" };

  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update(dt) {
    lt = Anima.sceneTime;
    const k = 1 - Math.exp(-dt * 3), f = FT[cur];
    F.auto = lerp(F.auto, f[0], k); F.gas = lerp(F.gas, f[1], k); F.het = lerp(F.het, f[2], k); F.s2c = lerp(F.s2c, f[3], k);
  }

  // ---------- 小工具 ----------
  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function path(P, color, w) {
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); P.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke();
  }
  // 踏板：kind "brake" 刹车（红）/ "gas" 油门（绿）；press 0～1 表示踩下去多少
  function pedal(x, y, r, kind, press) {
    const col = kind === "gas" ? "#7fd4ad" : "#ff8f9f";
    ctx.save(); ctx.translate(x, y);
    rrect(-r * 0.9, r * 0.55, r * 1.8, r * 0.35, r * 0.15); ctx.fillStyle = "#e9e1e6"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.rotate(-0.55 + press * 0.45);
    rrect(-r * 0.55, -r * 0.95, r * 1.1, r * 1.5, r * 0.3); ctx.fillStyle = col; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.rotate(0.55 - press * 0.45);
    text(kind === "gas" ? "油" : "刹", 0, -r * 0.15, r * 0.8, "#fff");
    ctx.restore();
    if (press > 0.5) { ctx.save(); ctx.globalAlpha *= press - 0.5; glow(x, y, r * 2.2, col, 1); ctx.restore(); }
  }
  function bulb(x, y, r, color) {
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
    g.addColorStop(0, "#ffffff"); g.addColorStop(1, color);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(1.8); ctx.stroke();
  }

  // ---------- 第 1～5 幕：刹车网络 ----------
  function levels() {
    const L = { auto: 1, gas: 1, het: 1, g2c: 1, d1: 0, d2: 0, d3: 0 };
    if (cur === 0) { L.auto = prog(3.5, 1.5); L.gas = 0; L.het = 0; L.g2c = 0; }
    if (cur === 1) { L.gas = prog(3, 1.5); L.het = 0; L.g2c = 0; }
    if (cur === 2) { L.het = prog(3, 1.5); L.g2c = 0; }
    if (cur === 3) L.g2c = prog(3, 1.5);
    if (cur === 4) { L.d1 = prog(1, 1.8); L.d2 = prog(3.6, 1.8); L.d3 = prog(6.2, 1.8); L.auto = 1 - L.d1; L.het = 1 - L.d2; L.g2c = 1 - L.d3; }
    L.neAct = 1 - L.g2c * 0.55; // NE 神经元的活跃度
    L.relNE = L.neAct * (1 - L.auto * 0.55) + L.d1 * 0.25;
    L.fire5 = 0.45 + L.gas * 0.35 + L.d1 * 0.3; // 5-HT 放电
    L.rel5 = L.fire5 * (1 - L.het * 0.6);
    return L;
  }
  function netView(a) {
    const nw = Anima.narrow, L = levels(), s = H * (nw ? 0.044 : 0.042), rb = H * (nw ? 0.062 : 0.07), pr = H * 0.036;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fdf6f8", "#f7f2ea");
    Anima.bokeh(6, "#ffd3d6", 0.6, 19);
    Anima.petals(6, 0.35, 8);
    const bandTop = Anima.topSafe() + 2, midTop = H * 0.57, bot = H * 0.93, fsB = fz(0.024);
    rrect(W * 0.015, bandTop, W * 0.97, H * 0.47 - bandTop, 18); ctx.fillStyle = alpha(C.ctx, 0.85); ctx.fill(); outline(1.5); ctx.stroke();
    rrect(W * 0.015, midTop, W * 0.97, H * 0.985 - midTop, 18); ctx.fillStyle = alpha(C.stem, 0.9); ctx.fill(); outline(1.5); ctx.stroke();
    text("前额叶", W * 0.03, bandTop + fsB * 1.1, fsB, C.lavDeep, "left");
    text(nw ? "脑干" : "脑干：蓝斑（NE）、中缝核（5-HT）", W * 0.03, midTop + fsB * 1.1, fsB, "#d0762a", "left");
    const LC = [W * 0.25, bot], DA = [W * 0.08, bot], GB = [W * (nw ? 0.43 : 0.47), bot], RA = [W * (nw ? 0.76 : 0.8), bot];
    const NB = [W * 0.27, H * (nw ? 0.3 : 0.27)], SB = [W * 0.7, H * (nw ? 0.3 : 0.27)];
    const fA = (k) => 0.3 + k * 0.7;
    // 轴突
    const axNE = [[LC[0], bot - s * 1.6], [LC[0], H * 0.55], [NB[0] - rb * 0.4, NB[1] + rb * 0.92]];
    const ax5 = [[RA[0], bot - s * 1.6], [RA[0], H * 0.55], [SB[0] + rb * 0.45, SB[1] + rb * 0.9]];
    path(axNE, mix(C.ne, "#ffffff", 0.55), H * 0.016);
    path(ax5, mix(C.sht, "#ffffff", 0.55), H * 0.016);
    Anima.spark(axNE, (time * 0.55 * (0.4 + L.neAct * 0.6)) % 1, H * 0.018, C.ne);
    Anima.spark(ax5, (time * 0.55 * L.fire5) % 1, H * 0.018, C.mintDeep);
    // NE 的两条分支：去中缝核（油门 α1）和去 5-HT 末梢（刹车 α2）
    const a1x = RA[0] + W * (nw ? 0.14 : 0.09);
    const brG = [[LC[0], H * 0.64], [a1x, H * 0.64], [a1x, bot - H * 0.105]];
    const hx = SB[0] - rb * 0.55, hy = SB[1] + Math.sqrt(rb * rb - rb * 0.55 * rb * 0.55);
    const brH = [[LC[0], H * 0.51], [W * 0.46, H * 0.51], [W * 0.46, H * 0.44], [hx - W * 0.03, H * 0.44]];
    ctx.save(); ctx.globalAlpha *= fA(F.gas);
    path(brG, mix(C.ne, "#ffffff", 0.55), H * 0.012);
    if (L.gas > 0.3 || cur === 4) Anima.spark(brG, (time * 0.5) % 1, H * 0.014, C.ne);
    const A1 = Anima.receptor(a1x, bot, H * 0.034, "#ffd3d6", L.gas, { shape: "round" });
    outline(H * 0.006); ctx.beginPath(); ctx.moveTo(a1x - H * 0.02, bot); ctx.lineTo(RA[0] + s * 0.6, bot - s * 0.2); ctx.stroke();
    plate("α1", a1x, nw ? bot - H * 0.13 : bot + fz(0.022) * 0.7, "#ffe3e6", fz(0.022));
    pedal(a1x - H * 0.05, H * 0.7, pr, "gas", L.gas);
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= fA(F.het);
    path(brH, mix(C.ne, "#ffffff", 0.55), H * 0.012);
    ctx.restore();
    // 两个末梢
    bulb(NB[0], NB[1], rb, "#ffd3d6"); face(NB[0], NB[1] - rb * 0.1, rb * 0.35, 1);
    bulb(SB[0], SB[1], rb, "#cdf1e4"); face(SB[0], SB[1] - rb * 0.1, rb * 0.35, 1);
    // 放出来的递质：数量代表释放多少
    const nNE = Math.max(1, Math.round(L.relNE * 4)), n5 = Math.max(1, Math.round(L.rel5 * 4.5));
    for (let k = 0; k < 5; k++) {
      const t = (time * 0.28 + k / 5) % 1, al = Math.min(1, t * 5, (1 - t) * 4);
      if (k < nNE) chara(NB[0] - rb * 1.3 - t * W * 0.05, NB[1] + rb * 0.4 + t * H * 0.08 + s * 2, s * 0.55, { who: "NE", eyes: "happy", arms: "hold", item: "letter", alpha: al, shadow: false, seed: k });
      if (k < n5) chara(SB[0] + rb * 1.2 + t * W * 0.05, SB[1] + rb * 0.4 + t * H * 0.08 + s * 2, s * 0.55, { who: "5HT", eyes: "happy", arms: "hold", item: "letter", alpha: al, shadow: false, seed: k + 5 });
    }
    // α2 自身受体（NE 末梢右下）
    ctx.save(); ctx.globalAlpha *= fA(F.auto);
    const ax2 = NB[0] + rb * 0.5, ay2 = NB[1] + Math.sqrt(rb * rb - rb * 0.25 * rb);
    const R2 = Anima.receptor(ax2, ay2, H * 0.03, "#ffd3d6", L.auto, { shape: "round", dir: -1 });
    plate("α2", ax2 + H * 0.065, ay2 - H * 0.01, "#ffe3e6", fz(0.022));
    pedal(ax2 + H * 0.075, ay2 + H * 0.075, pr, "brake", L.auto);
    const bindA = cur === 0 ? prog(2, 1.5) : 1;
    if (bindA > 0 && L.d1 < 0.5) chara(lerp(ax2 - W * 0.04, R2.site.x, bindA), lerp(ay2 + H * 0.16, R2.site.y + s * 0.62 * 3.1, bindA), s * 0.62, { who: "NE", arms: bindA >= 1 ? "up" : "down", walk: bindA < 1 ? time * 9 : null, eyes: "happy", shadow: false });
    ctx.restore();
    // α2 异身受体（5-HT 末梢左下）
    ctx.save(); ctx.globalAlpha *= fA(F.het);
    const RH = Anima.receptor(hx, hy, H * 0.03, "#ffd3d6", L.het, { shape: "round", dir: -1 });
    plate("α2", hx - H * 0.065, hy - H * 0.01, "#ffe3e6", fz(0.022));
    pedal(hx - H * 0.14, hy + H * 0.02, pr, "brake", L.het);
    const bindH = cur === 2 ? prog(2, 1.2) : cur > 2 ? 1 : 0;
    if (bindH > 0 && L.d2 < 0.5) chara(lerp(hx - W * 0.03, RH.site.x, bindH), lerp(H * 0.44 + s * 1.9, RH.site.y + s * 0.62 * 3.1, bindH), s * 0.62, { who: "NE", arms: bindH >= 1 ? "up" : "down", eyes: "happy", shadow: false });
    ctx.restore();
    // 5-HT → 5-HT2C → GABA → 刹住 NE 和 DA
    ctx.save(); ctx.globalAlpha *= fA(F.s2c);
    const c2x = GB[0] + W * (nw ? 0.11 : 0.11);
    const p5 = [[RA[0] - s * 0.6, bot - s * 1.9], [c2x + H * 0.02, bot - s * 1.9], [c2x + H * 0.02, bot - H * 0.07]];
    path(p5, mix(C.sht, "#ffffff", 0.5), H * 0.01);
    const R2C = Anima.receptor(c2x, bot, H * 0.032, "#f7b8d2", L.g2c, { shape: "tri" });
    outline(H * 0.006); ctx.beginPath(); ctx.moveTo(c2x - H * 0.02, bot); ctx.lineTo(GB[0] + s * 0.6, bot - s * 0.2); ctx.stroke();
    plate("2C", c2x + H * 0.055, bot - H * 0.03, "#ffe9f0", fz(0.022));
    ctx.setLineDash([5, 5]); ctx.strokeStyle = C.gaba; ctx.lineWidth = Math.max(2, H * 0.006);
    for (const T of [LC, DA]) { ctx.beginPath(); ctx.moveTo(GB[0] - s * 0.4, bot - s * 3.3); ctx.quadraticCurveTo((GB[0] + T[0]) / 2, bot - s * (T === DA ? 6 : 4.8), T[0] + s * 0.7, bot - s * 3); ctx.stroke(); }
    ctx.setLineDash([]);
    pedal(LC[0] + s * 1.5, bot - s * 3.1, pr * 0.85, "brake", L.g2c);
    pedal(DA[0] + s * 1.5, bot - s * 3.1, pr * 0.85, "brake", L.g2c);
    if (L.g2c > 0.3 && L.d3 < 0.5 && cur >= 3) chara(R2C.site.x, R2C.site.y + s * 0.15, s * 0.62, { who: "5HT", arms: "up", eyes: "happy", shadow: false });
    chara(GB[0], bot, s, { who: "GABA", eyes: L.g2c > 0.5 ? "angry" : "happy", brow: L.g2c > 0.5 ? "angry" : null, arms: L.g2c > 0.5 ? "fist" : "down", mouth: L.g2c > 0.5 ? "flat" : "smile" });
    plate("GABA", GB[0], bot + fz(0.026) * 0.55, "#ece8ff");
    chara(DA[0], bot, s, { who: "DA", gray: L.g2c * 0.55, eyes: L.g2c > 0.5 ? "sleepy" : "happy", mouth: L.g2c > 0.5 ? "flat" : "smile" });
    plate("DA", DA[0], bot + fz(0.026) * 0.55, "#ffe6d2");
    ctx.restore();
    // 两位主角
    const ne = L.neAct;
    chara(LC[0], bot, s * 1.05, { who: "NE", gray: (1 - ne) * 1.1, eyes: ne < 0.6 ? "sleepy" : "happy", mouth: ne < 0.6 ? "flat" : "smile", arms: ne > 0.9 && cur === 4 ? "up" : "down" });
    plate(nw ? "蓝斑 NE" : "蓝斑的 NE 神经元", LC[0], bot + fz(0.026) * 0.55, "#ffe0e3");
    const f5 = L.fire5;
    chara(RA[0], bot, s * 1.05, { who: "5HT", eyes: f5 > 0.75 ? "sparkle" : "happy", mouth: f5 > 0.75 ? "grin" : "smile", arms: f5 > 0.75 ? "up" : "down", jump: f5 > 0.75 ? Math.abs(Math.sin(time * 6)) * 0.2 : 0 });
    plate(nw ? "中缝核 5-HT" : "中缝核的 5-HT 神经元", RA[0], bot + fz(0.026) * 0.55, "#dff5ec");
    // 第 5 幕：米氮平访客坐进三扇刹车门
    if (cur === 4) {
      const spots = [[R2.site.x, R2.site.y + s * 0.62 * 3.1, L.d1], [RH.site.x, RH.site.y + s * 0.62 * 3.1, L.d2], [R2C.site.x, R2C.site.y + s * 0.15, L.d3]];
      spots.forEach((p, i) => {
        if (p[2] <= 0) return;
        const x = lerp(i === 2 ? W * 1.05 : W * 0.5, p[0], p[2]), y = lerp(i === 2 ? bot : H * 0.52, p[1], p[2]);
        chara(x, y, s * 0.62, Object.assign({}, MIR, { walk: p[2] < 1 ? time * 9 : null, arms: p[2] >= 1 ? "shh" : "down", eyes: "happy", shadow: false }));
        if (p[2] >= 1) plate("米氮平", x, i === 2 ? y - s * 2.4 : y + fz(0.02) * 0.9, "#ffe3e6", fz(0.02));
      });
    }
    // 标注和对话
    callout("c-auto", cur === 0 && lt > 4 && (!nw || lt < 7.6), R2.site.x, R2.site.y, W * 0.5, H * 0.2, nw ? "α2 自身受体：刹车" : "α2 自身受体：自己的刹车");
    say("s-auto", cur === 0 && lt > (nw ? 8.5 : 6.5), NB[0] - rb * 0.7, NB[1], W * (nw ? 0.47 : 0.14), H * (nw ? 0.645 : 0.46), "外面够多了，少放点～", "say");
    callout("c-gas", cur === 1 && lt > 3.5 && (!nw || lt < 7.6), a1x, bot - H * 0.08, W * 0.5, H * (nw ? 0.2 : 0.7), nw ? "α1：5-HT 的油门" : "α1 受体：给 5-HT 踩油门");
    say("s-gas", cur === 1 && lt > (nw ? 8.5 : 6.5), RA[0], bot - s * 3.4, W * (nw ? 0.47 : 0.84), H * (nw ? 0.645 : 0.44), "放电变快啦！", "shout");
    callout("c-het", cur === 2 && lt > 4 && (!nw || lt < 7.6), RH.site.x, RH.site.y, W * 0.5, H * 0.2, nw ? "α2 异身受体：刹车" : "α2 异身受体：装在别人家的刹车");
    say("s-het", cur === 2 && lt > (nw ? 8.5 : 7), SB[0] + rb * 0.7, SB[1], W * (nw ? 0.55 : 0.86), H * (nw ? 0.7 : 0.46), "少放一点 5-HT～", "say");
    callout("c-2c", cur === 3 && lt > 3.5 && (!nw || lt < 7.6), R2C.site.x, R2C.site.y, W * (nw ? 0.5 : 0.64), H * (nw ? 0.2 : 0.66), nw ? "5-HT2C → GABA 刹车" : "5-HT2C：叫 GABA 去刹车");
    say("s-2c", cur === 3 && lt > (nw ? 8.5 : 6.5), LC[0], bot - s * 3.4, W * (nw ? 0.5 : 0.24), H * (nw ? 0.61 : 0.46), "被按住了，没精神……", "think");
    callout("c-mir", cur === 4 && lt > 9, W * 0.5, H * 0.52, W * 0.5, H * 0.2, nw ? "三道刹车都松开了" : "刹车松开：NE 和 5-HT 都多放");
    ctx.restore();
  }

  // ---------- 第 6 幕：曲唑酮和阿戈美拉汀 ----------
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    plate(title, x + w / 2, y, color, fz(0.03));
  }
  function moon(x, y, r) {
    ctx.save();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + r * 0.45, y - r * 0.25, r * 0.85, 0, Math.PI * 2); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
  }
  function pickView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    Anima.wash("#fdf6f8", "#f3f0fd");
    Anima.petals(10, 0.5, 33);
    const top = Anima.topSafe() + H * 0.05, ch = H * 0.62, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "曲唑酮", "#e4e0ff");
    card(R.x, R.y, R.w, R.h, "阿戈美拉汀", "#ffe3e6");
    const s = Math.min(H * 0.04, cw * 0.07), rs = Math.min(H * 0.036, cw * 0.06);
    // 左：挡住 5-HT2A、H1、α1 → 犯困
    const my = L.y + L.h * 0.62, t1 = prog(0.8, 2);
    ctx.save(); rrect(L.x, L.y, L.w, L.h, 18); ctx.clip(); ctx.fillStyle = "#f1eefc"; ctx.fillRect(L.x, my, L.w, L.h); ctx.restore();
    outline(1.6); ctx.beginPath(); ctx.moveTo(L.x, my); ctx.lineTo(L.x + L.w, my); ctx.stroke();
    const doors = [["5-HT2A", "#ffd27a", 0.22, "tri"], ["H1", "#e0c8f5", 0.52, "round"], ["α1", "#ffd3d6", 0.8, "square"]];
    doors.forEach((d, i) => {
      const x = L.x + L.w * d[2], p = i === 0 ? t1 : prog(1.8 + i * 0.8, 1.6);
      const Rr = Anima.receptor(x, my, rs, d[1], (1 - p) * 0.8, { shape: d[3] });
      plate(d[0], x, my + H * 0.05, "#fff", fz(0.022));
      if (p > 0) chara(lerp(x - L.w * 0.15, Rr.site.x, p), p < 1 ? my : Rr.site.y + s * 0.15, s * (i ? 0.75 : 0.9), { who: "drug", hatColor: "#b8b0f0", hatColor2: "#fff", label: "", walk: p < 1 ? time * 9 : null, arms: "shh", eyes: p >= 1 && i === 0 ? "sleepy" : "happy", shadow: false });
    });
    const zz = prog(4.5, 1.5);
    if (zz > 0) {
      ctx.save(); ctx.globalAlpha *= zz;
      moon(L.x + L.w * 0.18, L.y + L.h * 0.22, H * 0.035);
      emote("zzz", L.x + L.w * 0.3, L.y + L.h * 0.2, H * 0.035);
      text(nw ? "犯困，助眠" : "犯困 → 常被用来助眠", L.x + L.w * 0.62, L.y + L.h * 0.22, fz(0.026), C.lavDeep);
      ctx.restore();
    }
    if (!nw) text("主要挡 5-HT2A", L.x + L.w / 2, L.y + L.h * 0.9, fz(0.024), C.soft);
    // 右：激活褪黑素受体 + 挡住 5-HT2C → DA、NE↑
    const ry = R.y + R.h * 0.62, t2 = prog(5, 2), t3 = prog(6.5, 2);
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 18); ctx.clip(); ctx.fillStyle = "#fff0f2"; ctx.fillRect(R.x, ry, R.w, R.h); ctx.restore();
    outline(1.6); ctx.beginPath(); ctx.moveTo(R.x, ry); ctx.lineTo(R.x + R.w, ry); ctx.stroke();
    const mx = R.x + R.w * 0.22, cx = R.x + R.w * 0.55;
    const RM = Anima.receptor(mx, ry, rs, "#fff1b8", t2 * (0.7 + 0.3 * Math.sin(time * 4)), { shape: "round" });
    plate(nw ? "褪黑素" : "褪黑素受体 MT1/2", mx, ry + H * 0.05, "#fff", fz(0.022));
    const RC = Anima.receptor(cx, ry, rs, "#f7b8d2", 0.8 * (1 - t3), { shape: "tri" });
    plate(nw ? "2C" : "5-HT2C", cx, ry + H * (nw ? 0.1 : 0.05), "#fff", fz(0.022));
    const AG = { who: "drug", hatColor: "#ff9aa9", hatColor2: "#fff", label: "", eyes: "happy", shadow: false };
    if (t2 > 0) chara(lerp(R.x + R.w * 0.05, RM.site.x, t2), t2 < 1 ? ry : RM.site.y + s * 0.15, s * 0.8, Object.assign({}, AG, { walk: t2 < 1 ? time * 9 : null, arms: t2 >= 1 ? "up" : "down" }));
    if (t3 > 0) chara(lerp(R.x + R.w * 0.4, RC.site.x, t3), t3 < 1 ? ry : RC.site.y + s * 0.15, s * 0.8, Object.assign({}, AG, { walk: t3 < 1 ? time * 9 : null, arms: "shh" }));
    if (t2 > 0.5) { ctx.save(); ctx.globalAlpha *= t2; moon(mx - rs * 0.6, R.y + R.h * 0.2, H * 0.028); Anima.sparkle(mx + rs * 0.6, R.y + R.h * 0.16, H * 0.02, 1); text("生物钟", mx + rs * 1.2, R.y + R.h * 0.2, fz(0.022), C.warn, "left"); ctx.restore(); }
    // DA、NE 的刹车松开
    const up = t3;
    const dx = R.x + R.w * 0.8;
    chara(dx - s * 0.9, ry, s * 0.8, { who: "DA", gray: (1 - up) * 0.5, eyes: up > 0.5 ? "sparkle" : "sleepy", arms: up > 0.5 ? "up" : "down", shadow: false });
    chara(dx + s * 0.9, ry, s * 0.8, { who: "NE", gray: (1 - up) * 0.5, eyes: up > 0.5 ? "sparkle" : "sleepy", arms: up > 0.5 ? "up" : "down", shadow: false });
    pedal(dx, R.y + R.h * 0.2, H * 0.034, "brake", 1 - up);
    plate(up > 0.5 ? "DA、NE↑" : "DA、NE", dx, ry + H * (nw ? 0.15 : 0.05), up > 0.5 ? "#fff1b8" : "#fff", fz(0.022));
    if (!nw) text("激活＋挡住", R.x + R.w / 2, R.y + R.h * 0.9, fz(0.024), C.soft);
    // 底部小结
    const k = prog(9, 1.2);
    if (k > 0) {
      ctx.save(); ctx.globalAlpha *= k;
      const y = top + ch + H * 0.09;
      plate(nw ? "① 堵住回收门" : "① 堵住回收门（如 SSRI）", W * 0.28, y, "#dff5ec", fz(0.028));
      plate(nw ? "② 松开刹车" : "② 松开刹车（如米氮平）", W * 0.72, y, "#ffe3e6", fz(0.028));
      text("递质变多的两条路", W / 2, y - H * 0.065, fz(0.024), C.soft);
      ctx.restore();
    }
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.ne, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.mintDeep, true);
  }
  function draw() {
    ctx.fillStyle = "#fdf7f4"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) netView(S.v0);
    if (S.v1 > 0.02) pickView(S.v1);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#ec6470",
    titleCard: { lines: ["递质之间的", "刹车网络"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
