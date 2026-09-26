Anima.register("endocannabinoid", {
    "title": "倒着送的信：内源性大麻素",
    "tag": "成瘾",
    "headline": "收信人也能【回信】吗？",
    "lede": "突触里的信大多从前往后送。内源性大麻素却是倒着送的回信：收信的神经元被吵得太厉害时，临时写一封“先别送了”，寄回给发信的末梢。大麻里的 THC 冒充这封回信，结果把精细的调节弄乱了。",
    "summary": "逆行信使、CB1 受体、按需现做和 FAAH/MAGL 分解，THC 怎样打乱这套调节，又怎样在腹侧被盖区松开多巴胺的刹车。",
    "chapter": "对应 Stahl《精神药理学精要》第 13 章 · 大麻素系统",
    "footer": "青少年的大脑还在发育，尽量不要接触大麻；如果发现自己停不下来，或出现奇怪的想法和感觉，请及时求助医生。",
    "canvasLabel": "突触后神经元现做内源性大麻素、倒着飘回突触前结合 CB1 受体让它少放递质，以及 THC 访客赖着不走、松开多巴胺刹车的动画",
    "regions": ["synapse", "nac"],
    "parts": ["addiction"],
    "cast": ["Glu", "GABA", "DA", "drug"],
    "color": "#9fd89a"
  }, () => {
  const CH = [
    { title: "信通常往前送", v0: 1, v1: 0,
      pill: ["方向", "前 → 后"], pill2: ["谷氨酸", "照常送"],
      text: "突触里的信通常是单行道：突触前的末梢放出递质，比如谷氨酸，递质游过突触间隙，交给突触后神经元的受体。可如果信一直猛送，收信的一方会被吵得受不了。大脑有一个巧妙的办法，让收信人能“回一封信”，这就是内源性大麻素系统。它的门叫 CB1，装在突触前的末梢上。",
      fact: "CB1 受体主要装在突触前末梢上，谷氨酸末梢和 GABA 末梢都有" },
    { title: "收信人现写回信", v0: 1, v1: 0,
      pill: ["突触后", "太吵了"], pill2: ["回信", "现做"],
      text: "当突触后神经元被强烈激活，钙离子涌进来，它就用细胞膜上的脂质原料，临时做出内源性大麻素，比如花生四烯酸乙醇胺（AEA）和 2-AG。它们不提前装进囊泡，要用的时候才现做。做好以后，它们反着方向，从突触后飘回突触前，所以叫“逆行信使”。",
      fact: "内源性大麻素按需现做，是从突触后飘向突触前的逆行信使" },
    { title: "CB1：先别送了", v0: 1, v1: 0,
      pill: ["CB1", "被激活"], pill2: ["递质释放", "减少"],
      text: "回信飘到突触前，结合末梢上的 CB1 受体。CB1 一被激活，末梢里的钙通道就不爱开门了，囊泡少放递质，就像收到一句“先别送了，我收到啦”。这封回信可以寄给谷氨酸末梢，让兴奋少一点；也可以寄给 GABA 末梢，让抑制少一点。",
      fact: "CB1 被激活 → 突触前钙内流减少 → 递质释放减少" },
    { title: "用完就拆", v0: 1, v1: 0,
      pill: ["回信", "拆掉"], pill2: ["送信", "恢复"],
      text: "这封回信必须短，只在需要的时间和地点起作用，所以用完很快就被拆掉：2-AG 主要由突触前的 MAGL 分解，花生四烯酸乙醇胺主要由突触后的 FAAH 分解。回信一拆，CB1 安静下来，末梢又恢复正常送信。整套系统像一个随手调节的小音量旋钮，精细又短暂。",
      fact: "MAGL 主要分解 2-AG，FAAH 主要分解 AEA：回信来得快、走得也快" },
    { title: "THC：赖着不走的冒牌回信", v0: 1, v1: 0,
      pill: ["THC", "占住 CB1"], pill2: ["调节", "乱了"],
      text: "大麻里的 THC 长得不一样，却也能激活 CB1。可它不是按需现做、只在一个突触起作用，而是大量涌进来，到处结合 CB1，那两位拆信员也拆不动它，要过很久才会被身体清除。精细的“随手调音量”变成了“一直按着”，于是记忆、动作协调和对时间的感觉都可能改变。",
      fact: "THC 是外来的 CB1 激动剂：范围广、时间长，打乱了精细的调节" },
    { title: "腹侧被盖区：松开刹车", v0: 0, v1: 1,
      pill: ["GABA 刹车", "踩着"], pill2: ["多巴胺", "平稳"],
      text: "在腹侧被盖区，GABA 神经元平时轻轻踩着多巴胺神经元的刹车，它们的末梢上也有 CB1。THC 结合这些 CB1，GABA 少放了，刹车一松，多巴胺神经元更兴奋，伏隔核的多巴胺升高，带来“嗨”和奖赏感。青少年的大脑还在发育，长期大量使用与精神病风险增加有关。另一种成分 CBD 作用方式不同，不会让人“嗨”。",
      fact: "THC 抑制 GABA 末梢 → 多巴胺神经元去抑制 → 伏隔核多巴胺升高" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { term: "#ffe6b8", gterm: "#e4e0ff", post: "#ffe0ea", cb1: "#a8dca0", glu: "#ffd27a", grec: "#b8b0f0", soma: "#ffd3c4", dend: "#f7b9a8", axon: "#f3a996" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0 };
  const ECB = (t) => ({ hair: "#6cbf73", eye: "#3f8a4a", cloth: "#e2f5dc", hat: "beret", hatColor: "#a8dca0", style: "bob", acc: "leaf", tag: t, shadow: false });
  const THC = { who: "drug", label: "", hatColor: "#8fd18a", hatColor2: "#f2fbe9", tag: "THC", shadow: false };
  const CUT = (t, h, c, hc) => ({ who: "AChE", label: "", hair: h, cloth: c, hatColor: hc, item: "scissors", tag: t });
  const MAGL = CUT("MAGL", "#e2849b", "#ffe0e8", "#f7b0c0"), FAAH = CUT("FAAH", "#6fa8dc", "#dcecf9", "#a9cdef");

  function update() { lt = Anima.sceneTime; }
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => W / H < 1.5;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
  // 末梢下边缘的高度（和 Anima.terminal 的曲线一致）
  function termY(x, T) {
    const dx = Math.abs(x - T.cx), bot = T.y0 + T.h;
    let best = bot, bd = 1e9;
    for (let i = 0; i <= 30; i++) {
      const t = i / 30, px = bez(t, T.w / 2, T.w / 2, T.w * 0.3, 0), py = bez(t, T.y0 + T.h * 0.62, bot + T.h * 0.02, bot, bot);
      if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; }
    }
    return best;
  }
  function plate(t, x, y, fs, color) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  // 每幕的放信量（1 = 照常）
  function relMain() {
    if (cur === 1) return 1;
    if (cur === 2) return 1 - 0.8 * prog(2.5, 3);
    if (cur === 3) return 0.2 + 0.8 * prog(6.5, 2.5);
    if (cur === 4) return 1 - 0.85 * prog(2.5, 2.5);
    return 0.7;
  }
  function relGaba() {
    if (cur === 2) return 0.7 - 0.55 * prog(3.5, 3);
    if (cur === 3) return 0.15 + 0.55 * prog(6.5, 2.5);
    if (cur === 4) return 0.7 - 0.6 * prog(2.5, 2.5);
    return 0.7;
  }
  // 递质快递员：沿着从末梢到受体的路来回送，rel 决定出来几位
  function couriers(from, tos, rel, who, cs, seed) {
    const n = 4, on = Math.round(n * clamp(rel, 0, 1));
    for (let k = 0; k < n; k++) {
      if (k >= on) continue;
      const t = (time * 0.3 + k / n + seed) % 1, to = tos[k % tos.length];
      const x = lerp(from.x + (k - 1.5) * cs * 1.6, to.x, t), y = lerp(from.y, to.y, t) - Math.sin(t * Math.PI) * H * 0.02;
      chara(x, y, cs, { who, alpha: Math.min(1, Math.sin(t * Math.PI) * 2.5), walk: time * 9 + k, item: "letter", arms: "hold", eyes: "happy", shadow: false });
    }
  }

  // ---------- 突触特写（第 1～5 幕）----------
  function synView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff8ea"); bg.addColorStop(0.5, "#eef8f0"); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cdeccf", 0.8, 14);
    const post = H * 0.76, rs = H * 0.045, cs = H * 0.03;
    const T = { cx: W * (n ? 0.36 : 0.38), y0: 0, w: Math.min(W * (n ? 0.52 : 0.44), H * 0.85), h: H * 0.44 };
    const G = { cx: W * (n ? 0.83 : 0.82), y0: 0, w: W * (n ? 0.3 : 0.24), h: H * 0.36 };
    const rel = relMain(), relG = relGaba();
    // 突触后膜和受体
    const hot = cur === 1 ? 1 - prog(9, 3) * 0.6 : 0;
    Anima.postMembrane(post, mix(C.post, "#ffd0dc", hot), {});
    const px0 = W * 0.08, pfy = post + (H - post) * 0.55;
    face(px0, pfy, H * 0.05, cur === 1 ? (lt < 6 ? -0.4 : 0.8) : cur === 4 ? -0.3 : 0.8);
    if (hot > 0.5 && lt < 6) { emote("anger", px0 + H * 0.05, pfy - H * 0.06, H * 0.03); }
    const recX = [T.cx - T.w * 0.22, T.cx + T.w * 0.08], siteY = post - rs * 1.62;
    recX.forEach((x) => Anima.receptor(x, post, rs, C.glu, rel > 0.5 ? 0.6 + 0.3 * Math.sin(time * 4 + x) : rel * 0.6, { shape: "square" }));
    Anima.receptor(G.cx, post, rs, C.grec, relG * 0.8, { shape: "round" });
    // 两个末梢
    const TT = Anima.terminal(T.cx, T.y0, T.w, T.h, C.term, { face: true, mood: cur === 2 || cur === 4 ? 0.2 : 1 });
    Anima.terminal(G.cx, G.y0, G.w, G.h, C.gterm);
    const fs = fsz(0.026);
    text("谷氨酸末梢", T.cx - T.w * 0.26, T.h * 0.72, fs, C.ink);
    text("GABA 末梢", G.cx, G.h * 0.62, fs, C.ink);
    // 钙通道
    const caX = T.cx - T.w * 0.4, caY = termY(caX, T);
    ctx.save(); ctx.translate(caX, caY); ctx.rotate(0.9);
    Anima.receptor(0, 0, H * 0.028, C.sky, rel > 0.6 ? 0.8 : rel, { dir: -1, shape: "square" });
    ctx.restore();
    // CB1：末梢上的“回信收件口”
    const cbX = T.cx + T.w * 0.3, cbY = termY(cbX, T) - rs * 0.1, gbX = G.cx + G.w * 0.18, gbY = termY(gbX, G) - rs * 0.1;
    let cbA = 0, gbA = 0;
    if (cur === 2) { cbA = prog(0.5, 1); gbA = prog(1, 1); }
    if (cur === 3) { cbA = 1 - prog(3, 1); gbA = 1 - prog(3.4, 1); }
    if (cur === 4) { cbA = prog(2, 1); gbA = prog(2.4, 1); }
    const cb = Anima.receptor(cbX, cbY, rs, C.cb1, cbA, { dir: -1, shape: "tri", label: "CB1" });
    const gb = Anima.receptor(gbX, gbY, rs * 0.9, C.cb1, gbA, { dir: -1, shape: "tri", label: "CB1" });
    // 递质快递员
    couriers({ x: T.cx - T.w * 0.05, y: termY(T.cx, T) + cs * 3.4 }, [{ x: recX[0], y: siteY }, { x: recX[1], y: siteY }], rel, "Glu", cs, 0);
    couriers({ x: G.cx - G.w * 0.12, y: termY(G.cx, G) + cs * 3.4 }, [{ x: G.cx, y: siteY }], relG * 0.8, "GABA", cs * 0.9, 0.5);
    // 内源性大麻素和 THC
    const cbSite = { x: cb.site.x, y: cb.site.y + cs * 3.25 }, gbSite = { x: gb.site.x, y: gb.site.y + cs * 3.25 };
    const e1 = { tag: "2-AG", to: cbSite, from: { x: recX[1] + W * 0.05, y: post + H * 0.1 } };
    const e2 = { tag: "AEA", to: gbSite, from: { x: G.cx - G.w * 0.35, y: post + H * 0.1 } };
    if (cur === 0) {
      callout("pre", lt < 5, T.cx - T.w * 0.1, T.h * 0.5, n ? W * 0.14 : W * 0.1, T.h * 0.3, "突触前：发信");
      callout("post", lt > 3 && lt < 8, W * 0.3, post + H * 0.08, n ? W * 0.5 : W * 0.46, post + H * 0.1, "突触后：收信");
      callout("cb", lt > 7.5, cbX + rs * 0.5, cbY + rs, n ? W * 0.72 : W * 0.66, H * 0.6, "CB1：末梢上的“回信口”");
      say("go", lt > 1 && lt < 6, recX[0], siteY - cs * 3, W * 0.18, H * 0.58, "谷氨酸快递，照常出发～", "say");
    }
    if (cur === 1) {
      // 钙离子冲进突触后
      if (lt > 1 && lt < 7) for (let k = 0; k < 4; k++) {
        const t = ((lt - 1) * 0.6 + k / 4) % 1;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
        Anima.ion(recX[k % 2] + (k - 1.5) * rs * 0.2, lerp(post, post + H * 0.16, t), H * 0.016, "Ca", "#c8f0d8");
        ctx.restore();
      }
      const up = prog(7, 3.5);
      [e1, e2].forEach((e, i) => {
        const born = prog(3.6 + i * 0.6, 1.2);
        if (born <= 0) return;
        const x = lerp(e.from.x, e.to.x, up), y = lerp(e.from.y, e.to.y, up) - Math.sin(up * Math.PI) * H * 0.04;
        if (born < 1) sparkles(e.from.x, e.from.y - cs * 1.5, cs * 2, 3, 1, i * 7);
        chara(x, y, cs * (0.4 + 0.6 * born), Object.assign(ECB(e.tag), { alpha: born, arms: up > 0.95 ? "up" : "wave", eyes: "happy", item: "letter" }));
      });
      if (up > 0.05 && up < 1) { // 逆行的大箭头
        ctx.save(); ctx.globalAlpha *= Math.sin(up * Math.PI);
        const ax = n ? W * 0.62 : W * 0.6, ay0 = post - H * 0.04, ay1 = H * 0.46;
        ctx.strokeStyle = C.mintDeep; ctx.lineWidth = H * 0.012; ctx.lineCap = "round"; ctx.setLineDash([H * 0.02, H * 0.015]);
        ctx.beginPath(); ctx.moveTo(ax, ay0); ctx.lineTo(ax, ay1); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = C.mintDeep; ctx.beginPath(); ctx.moveTo(ax - H * 0.025, ay1 + H * 0.01); ctx.lineTo(ax, ay1 - H * 0.03); ctx.lineTo(ax + H * 0.025, ay1 + H * 0.01); ctx.fill();
        ctx.restore();
        sfx("逆行 ↑", (n ? W * 0.62 : W * 0.6) + H * 0.09, H * 0.56, H * 0.04, C.mintDeep, -0.1, Math.sin(up * Math.PI));
      }
      callout("ca", lt > 1.5 && lt < 4.5, recX[0], post + H * 0.08, n ? W * 0.3 : W * 0.28, post + H * 0.12, "Ca²⁺ 涌进突触后");
      callout("make", lt > 4.3 && lt < 6.9, e1.from.x, e1.from.y - cs * 2, n ? W * 0.62 : W * 0.66, H * 0.56, "内源性大麻素：要用时现做");
      say("loud", lt > 1.2 && lt < 4.2, px0, pfy - H * 0.06, W * 0.16, H * 0.56, "太吵啦！回封信！", "shout");
    }
    if (cur === 2 || cur === 3) {
      const cutM = cur === 3 ? prog(2.6, 0.8) : 0, drift = cur === 3 ? prog(3.4, 2) : 0, cutF = cur === 3 ? prog(5.8, 0.8) : 0;
      if (cutM < 1) chara(cbSite.x, cbSite.y, cs, Object.assign(ECB("2-AG"), { alpha: 1 - cutM, arms: "up", eyes: cutM > 0 ? "dizzy" : "happy" }));
      const fx = W * (n ? 0.66 : 0.64), fy = post + H * 0.2;
      if (cutF < 1) chara(lerp(gbSite.x, fx - cs * 2.2, drift), lerp(gbSite.y, fy, drift), cs, Object.assign(ECB("AEA"), { alpha: 1 - cutF, arms: drift > 0 ? "down" : "up", eyes: cutF > 0 ? "dizzy" : "happy", walk: drift > 0 && drift < 1 ? time * 8 : null }));
      if (cur === 2) {
        if (lt > 1.5) emote("zzz", caX + H * 0.03, caY - H * 0.06, H * 0.03);
        callout("cb1", lt > 1 && lt < 4.5, cbX + rs * 0.6, cbY + rs, n ? W * 0.7 : W * 0.66, H * 0.56, "CB1 收到回信，被激活");
        callout("ca2", lt > 4.5 && lt < 8.5, caX, caY, n ? W * 0.3 : W * 0.24, H * 0.56, "钙通道少开 → 少放递质");
        callout("gaba", lt > 8.5, gbX - rs * 0.6, gbY + rs, n ? W * 0.6 : W * 0.62, H * 0.56, "GABA 末梢也收到回信");
        say("ok", lt > 5 && lt < 10, T.cx, T.h * 0.45, n ? W * 0.72 : W * 0.66, H * 0.3, "收到～那我先少送点", "say");
      } else {
        const mx = cbX - rs * 1.8, my = termY(mx, T) - H * 0.015;
        chara(mx, my, cs * 1.1, Object.assign({}, MAGL, { arms: "point", eyes: lt > 3.4 ? "happy" : "open" }));
        chara(fx, fy, cs * 1.1, Object.assign({}, FAAH, { dir: -1, arms: "wave", eyes: lt > 6.6 ? "happy" : "open" }));
        if (lt > 2.6 && lt < 3.6) sfx("咔嚓！", cbSite.x + cs, cbSite.y - cs * 2, H * 0.04, C.bad, -0.1, 1);
        if (lt > 5.8 && lt < 6.8) sfx("咔嚓！", fx - cs, fy - cs * 3.4, H * 0.04, C.bad, -0.1, 1);
        if (cutM > 0 && cutM < 1) sparkles(cbSite.x, cbSite.y - cs, cs * 2, 4, 1, 3);
        if (cutF > 0 && cutF < 1) sparkles(fx - cs * 2.2, fy - cs, cs * 2, 4, 1, 5);
        callout("magl", lt > 1 && lt < 5, mx, my - cs * 2, n ? W * 0.14 : W * 0.12, H * 0.54, "MAGL：在突触前拆 2-AG");
        callout("faah", lt > 4.5 && lt < 8.5, fx, fy - cs * 2.4, n ? W * 0.44 : W * 0.46, post - H * 0.08, "FAAH：在突触后拆 AEA");
        callout("back", lt > 8.8, T.cx - T.w * 0.05, termY(T.cx, T) + H * 0.04, n ? W * 0.62 : W * 0.6, H * 0.56, "回信拆掉，送信恢复");
      }
    }
    if (cur === 4) {
      const come = prog(0.4, 2);
      const spots = [cbSite, gbSite, { x: W * 0.7, y: H * 0.68 }, { x: W * 0.12, y: H * 0.62 }];
      spots.forEach((p, i) => {
        const sx = i % 2 ? W + cs * 3 : -cs * 3;
        const x = lerp(sx, p.x, prog(0.4 + i * 0.25, 2)) + (i > 1 ? Math.sin(time * 1.2 + i) * W * 0.02 : 0);
        chara(x, p.y + (i > 1 ? Math.sin(time * 1.6 + i) * H * 0.01 : 0), cs, Object.assign({}, THC, { arms: i < 2 ? "up" : "wave", eyes: "happy", mouth: "grin", alpha: come }));
      });
      const mx = cbX - rs * 1.8, my = termY(mx, T) - H * 0.015;
      chara(mx, my, cs * 1.1, Object.assign({}, MAGL, { arms: "point", eyes: lt > 5 ? "x" : "open", mouth: lt > 5 ? "wavy" : "smile" }));
      if (lt > 5 && lt < 8.5) { sfx("剪不动！", mx - H * 0.04, my - H * 0.14, H * 0.036, C.bad, -0.1, 1); emote("sweat", mx + cs, my - cs * 3, cs * 0.7); }
      const badges = ["记忆", "动作协调", "时间感"];
      badges.forEach((b, i) => {
        const p = prog(8.4 + i * 0.6, 0.8);
        if (p <= 0) return;
        ctx.save(); ctx.globalAlpha *= p;
        const bx = W * ((n ? 0.36 : 0.36) + i * (n ? 0.22 : 0.2)), by = H * 0.92;
        plate(b + " ?", bx, by + Math.sin(time * 2 + i) * H * 0.006, fs, "#fff6d8");
        ctx.restore();
      });
      callout("thc", lt > 2.4 && lt < 7, cbSite.x + cs, cbSite.y - cs * 2, n ? W * 0.66 : W * 0.64, H * 0.56, "THC：到处占住 CB1");
      callout("long", lt > 7 && lt < 11, spots[2].x, spots[2].y - cs * 3, n ? W * 0.62 : W * 0.66, H * 0.46, "拆不掉，久久不走");
    }
    ctx.restore();
  }

  // ---------- 第 6 幕：腹侧被盖区 ----------
  function vtaView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4f9ff", "#fdeef3");
    Anima.bokeh(7, "#ffd1dc", 0.8, 33);
    const cs = H * 0.03, rs = H * 0.042;
    const D = { x: W * (n ? 0.26 : 0.24), y: H * 0.74 }, r = H * 0.08;
    const N = { x: W * 0.8, y: H * (n ? 0.62 : 0.56) }, R = H * 0.12;
    const Gt = { cx: D.x, y0: top * 0.4, w: W * (n ? 0.26 : 0.2), h: H * 0.42 - top * 0.4 };
    const thc = prog(2, 2), rel = 1 - 0.8 * prog(4, 2), free = prog(5, 2);
    // 多巴胺神经元到伏隔核的路
    const P = [[D.x + r * 0.9, D.y - r * 0.3], [W * 0.55, H * 0.46], [N.x - R * 0.9, N.y + R * 0.2]];
    for (const [w, col] of [[r * 0.3, C.line], [r * 0.19, C.axon]]) {
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(P[0][0], P[0][1]); ctx.quadraticCurveTo(P[1][0], P[1][1], P[2][0], P[2][1]); ctx.stroke();
    }
    const happy = prog(6.5, 2);
    glow(N.x, N.y, R * 1.8, C.gold, happy * 0.8);
    ctx.beginPath(); ctx.arc(N.x, N.y, R, 0, Math.PI * 2); ctx.fillStyle = mix("#ffe8ee", "#fff1c9", happy); ctx.fill(); outline(2.2); ctx.stroke();
    face(N.x, N.y + R * 0.1, R * 0.45, happy > 0.5 ? 1 : 0);
    const fs = fsz(0.028);
    plate("伏隔核", N.x, N.y + R + fs * 1.3, fs);
    for (let k = 0; k < 5; k++) {
      const p = prog(6.5 + k * 0.4, 0.8);
      if (p <= 0) continue;
      const q = -Math.PI * 0.92 + k * Math.PI * 0.21;
      chara(N.x + Math.cos(q) * R * 1.02, N.y + Math.sin(q) * R * 1.02 + H * 0.01, H * 0.026, { who: "DA", alpha: p, arms: "up", eyes: "happy", jump: Math.abs(Math.sin(time * 5 + k)) * 0.3, shadow: false });
    }
    if (free > 0.5) for (let k = 0; k < 2; k++) {
      const t = ((lt - 6) * 0.55 + k / 2) % 1, u = t;
      if (lt < 6) break;
      const qx = (1 - u) * (1 - u) * P[0][0] + 2 * (1 - u) * u * P[1][0] + u * u * P[2][0], qy = (1 - u) * (1 - u) * P[0][1] + 2 * (1 - u) * u * P[1][1] + u * u * P[2][1];
      glow(qx, qy, H * 0.05, C.gold, 1); Anima.bolt(qx, qy, H * 0.022, 1, C.gold);
    }
    // 多巴胺神经元：被刹车时灰灰的
    ctx.lineCap = "round";
    for (let k = 0; k < 4; k++) {
      const q = Math.PI * 0.6 + k * 0.5, x1 = D.x + Math.cos(q) * r * 1.9, y1 = D.y + Math.sin(q) * r * 1.5;
      for (const [w, col] of [[r * 0.34, C.line], [r * 0.22, C.dend]]) { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(D.x, D.y); ctx.lineTo(x1, y1); ctx.stroke(); }
    }
    ctx.beginPath(); ctx.arc(D.x, D.y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#d9d2d6", C.soma, free); ctx.fill(); outline(2); ctx.stroke();
    face(D.x, D.y + r * 0.1, r * 0.5, free > 0.5 ? 1 : -0.4);
    if (free > 0.6) { glow(D.x, D.y, r * 1.8, C.gold, 0.4 + 0.3 * Math.sin(time * 9)); emote("!", D.x + r, D.y - r * 1.2, r * 0.5); }
    else emote("zzz", D.x + r * 0.8, D.y - r * 1.1, r * 0.45);
    plate(n ? "多巴胺神经元" : "多巴胺神经元（VTA）", D.x, D.y + r + fs * 1.4 > H - fs ? H - fs : D.y + r + fs * 1.4, fs);
    // GABA 末梢压在上面
    Anima.terminal(Gt.cx, Gt.y0, Gt.w, Gt.h, C.gterm);
    text("GABA 末梢", Gt.cx - Gt.w * 0.12, Gt.y0 + Gt.h * 0.62, fs * 0.9, C.ink);
    const gX = Gt.cx + Gt.w * 0.26, gY = termY(gX, Gt) - rs * 0.1;
    const gr = Anima.receptor(gX, gY, rs, C.cb1, thc, { dir: -1, shape: "tri", label: "CB1" });
    couriers({ x: Gt.cx - Gt.w * 0.1, y: termY(Gt.cx, Gt) + cs * 3.4 }, [{ x: D.x - r * 0.2, y: D.y - r * 0.85 }], rel, "GABA", cs, 0.2);
    const tx = lerp(W + cs * 3, gr.site.x, prog(1.6, 2)), ty = gr.site.y + cs * 3.25;
    if (lt > 1.6) chara(tx, ty, cs, Object.assign({}, THC, { arms: thc > 0.9 ? "up" : "wave", walk: thc < 1 ? time * 9 : null, eyes: "happy", mouth: "grin" }));
    callout("brake", lt > 0.6 && lt < 4, Gt.cx - Gt.w * 0.2, termY(Gt.cx - Gt.w * 0.2, Gt), n ? W * 0.5 : W * 0.5, H * 0.26, "GABA：踩着多巴胺神经元的刹车");
    callout("thc", lt > 4 && lt < 7.8, gX + rs * 0.5, gY + rs, n ? W * 0.56 : W * 0.54, H * 0.26, "THC 结合 CB1 → GABA 少放");
    callout("dis", lt > 7.8 && lt < 10.6, D.x + r * 0.7, D.y - r * 0.7, n ? W * 0.56 : W * 0.54, H * 0.3, "刹车松开 = 去抑制");
    say("teen", lt > 10.6, N.x, N.y - R, n ? W * 0.64 : W * 0.62, H * 0.24, "青少年：长期大量使用，与精神病风险增加有关", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 1 && lt > 6.5) v1 = "回信中";
    if (cur === 2 && lt < 2.5) v2 = "照常";
    if (cur === 3 && lt < 6.5) v2 = "等一下";
    if (cur === 4 && lt < 4) v2 = "…";
    if (cur === 5) { v1 = lt > 4.5 ? "松开" : v1; v2 = lt > 6 ? "升高 ↑" : v2; }
    pill(14, 12, c.pill[0], v1, "#3f9a5a", false);
    pill(W - 14, 12, c.pill2[0], v2, "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) synView(S.v0);
    if (S.v1 > 0.02) vtaView(S.v1);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#5fb36a",
    titleCard: { lines: ["倒着送的信", "内源性大麻素"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
