Anima.register("histamine", {
    "title": "组胺：清醒管家和它的四扇门",
    "tag": "睡眠与觉醒",
    "headline": "组胺在大脑里，是一位【清醒管家】",
    "lede": "组胺神经元只住在下丘脑的一个小角落，纤维却伸遍全脑，白天给每个街区点灯。它手里有四扇门：H1 叫醒大脑，H2 管胃酸，H3 是自己的刹车，H4 在免疫细胞上。很多药犯困、长胖，都和这些门有关。",
    "summary": "结节乳头核的组胺神经元、H1（Gq）促醒、阻断 H1 带来的嗜睡和体重增加、新一代抗过敏药为什么不太犯困、H3 自身和异身刹车、替洛利生松开刹车，以及 H2、H4。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 组胺系统",
    "footer": "犯困、体重变化等副作用请告诉医生，不要自行停药或换药。",
    "canvasLabel": "拟人化的组胺管家从下丘脑出发点亮全脑、推开 H1 到 H4 四扇门的动画",
    "regions": ["hypo"],
    "parts": ["sleep"],
    "cast": ["His", "ACh", "NE", "drug"],
    "color": "#c9a6e8"
  }, () => {
  const CH = [
    { title: "住在下丘脑的清醒管家", v0: 1, v1: 0, v2: 0, v3: 0, nb: 0,
      pill: ["住址", "结节乳头核"], pill2: ["纤维", "伸向全脑"],
      text: "组胺不只和过敏有关，它在大脑里也是一位叫醒员。组胺神经元只住在一个地方：下丘脑后部的结节乳头核，人数不多，纤维却伸遍全脑，从皮层、丘脑到脑干都有。白天它们不停放电，给各个街区点灯；人睡着以后，它们几乎停工，灯也跟着暗下来。",
      fact: "脑内的组胺神经元只在下丘脑的结节乳头核；清醒时放电最多，睡着后几乎停止" },
    { title: "H1：叫醒之门", v0: 0, v1: 1, v2: 0, v3: 0, nb: 0,
      pill: ["H1", "叫醒门"], pill2: ["信号", "Gq 接力"],
      text: "组胺放出来以后，最重要的一扇门是突触后的 H1 受体。H1 是 G 蛋白偶联受体，接的是 Gq 这一路：钥匙一插，细胞里的信号一站站往下传，神经元变得更兴奋、更容易放电。全脑的神经元都被这样轻轻推一把，人就清醒、警觉，注意力也跟着上来。",
      fact: "H1 受体偶联 Gq，激活后让神经元更兴奋，是组胺促醒的主要一扇门" },
    { title: "挡住 H1：犯困又嘴馋", v0: 0, v1: 1, v2: 0, v3: 0, nb: 0,
      pill: ["H1", "被挡住"], pill2: ["结果", "困 + 饿"],
      text: "很多药会顺手挡住 H1 这扇门：老一代抗过敏药比如苯海拉明，一部分抗抑郁药比如米氮平，还有一些抗精神病药比如奥氮平、喹硫平。组胺的钥匙插不进去，叫醒信号传不下去，人就犯困。下丘脑里的 H1 还和饱腹感有关，被挡住后胃口可能变大，体重慢慢上升。",
      fact: "阻断 H1 → 嗜睡、食欲增加、体重上升：很多药物副作用的来源" },
    { title: "有的抗过敏药为什么不困", v0: 0, v1: 0, v2: 1, v3: 0, nb: 0,
      pill: ["城墙", "血脑屏障"], pill2: ["新一代", "难进脑"],
      text: "那为什么有的抗过敏药不太让人犯困？大脑外面有一道血脑屏障，像一圈砌得很密的城墙。老一代抗过敏药容易溶在脂肪里，能穿过城墙，挡住大脑里的 H1。新一代比如氯雷他定、西替利嗪，不容易穿过去，有的还会被墙上的“门卫”送回血里，主要在鼻子、皮肤这些身体里的 H1 上干活。",
      fact: "新一代抗组胺药不容易进入大脑，所以通常更少犯困，但并不是完全不会" },
    { title: "H3：管家自己的刹车", v0: 0, v1: 1, v2: 0, v3: 0, nb: 1,
      pill: ["H3", "刹车"], pill2: ["释放", "变少"],
      text: "组胺神经元的末梢上还有一扇 H3 门，它是自身受体，也就是自己的刹车：外面的组胺一多，就有一些回头按下 H3，末梢下一次少放一些。H3 还装在别家的末梢上，比如乙酰胆碱、去甲肾上腺素的末梢，组胺一按，它们也少放一点。所以 H3 像一个总阀门，同时管着好几种叫醒递质。",
      fact: "H3 既是组胺的自身受体，也是其他递质末梢上的异身受体，都起刹车作用" },
    { title: "替洛利生：松开刹车", v0: 0, v1: 1, v2: 0, v3: 0, nb: 1,
      pill: ["替洛利生", "松刹车"], pill2: ["组胺", "释放 ↑"],
      text: "有意思的是，H3 就算没有组胺来按，自己也会轻轻踩着一点刹车。替洛利生是 H3 反向激动剂，它坐进 H3，不但挡住组胺，连这点自带的刹车也松开。于是组胺放得更多，去敲全脑的 H1 叫醒门；乙酰胆碱、去甲肾上腺素也跟着多放一些，人就更清醒。它被用来治疗发作性睡病白天的嗜睡。",
      fact: "替洛利生是 H3 拮抗剂/反向激动剂：松开组胺的刹车，让组胺释放增多" },
    { title: "四扇门，各管一摊", v0: 0, v1: 0, v2: 0, v3: 1, nb: 0,
      pill: ["受体", "四种"], pill2: ["组胺", "一位"],
      text: "最后把四扇门排在一起看。H1 在大脑里管清醒，在身体里管过敏时的红肿发痒；H2 主要在胃里，让胃分泌胃酸，胃药法莫替丁挡的就是它；H3 是组胺自己的刹车；H4 主要在免疫细胞上，和炎症、瘙痒有关，还在研究中。同一位组胺，推开不同的门，效果完全不一样。",
      fact: "H1 清醒与过敏、H2 胃酸、H3 刹车、H4 免疫：组胺受体一共四种" },
  ];

  const C = Object.assign({}, Anima.C, {
    his: "#b98ad8", term: "#efe2fb", post: "#fbe9f0", h1: "#f7b8d2", h3: "#a9d8ee", brain: "#ffe3ea", brainD: "#f4bccb",
    vessel: "#ffb3bd", wall: "#ffd9c2", tissue: "#f3ecfb",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, nb: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  const win = (a, b) => lt > a && lt < b;
  function update() { lt = Anima.sceneTime; }

  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function curve(P, color, w) {
    ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(P[0][0], P[0][1]); ctx.quadraticCurveTo(P[1][0], P[1][1], P[2][0], P[2][1]);
    ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke();
  }
  const qpt = (P, t) => [(1 - t) * (1 - t) * P[0][0] + 2 * (1 - t) * t * P[1][0] + t * t * P[2][0], (1 - t) * (1 - t) * P[0][1] + 2 * (1 - t) * t * P[1][1] + t * t * P[2][1]];
  // 刹车灯：红色小圆牌，亮度 = 刹车踩了多少
  // 神经元的大脸：awake 0 犯困（眯眼 + zzz），1 清醒（星星）
  function sleepyFace(x, y, s, awake) {
    glow(x, y, s * 1.6, C.gold, clamp(awake - 0.5, 0, 0.5));
    if (awake >= 0.4) face(x, y, s, awake > 0.6 ? 1 : 0);
    else {
      outline(Math.max(1.5, s * 0.08));
      ctx.beginPath(); for (const d of [-1, 1]) { ctx.moveTo(x + d * s * 0.2, y - s * 0.08); ctx.lineTo(x + d * s * 0.45, y - s * 0.08); } ctx.stroke();
      Anima.blushAt(x, y + s * 0.18, s * 0.55, s * 0.14);
      ctx.beginPath(); ctx.arc(x, y + s * 0.25, s * 0.07, 0, Math.PI * 2); ctx.stroke();
      emote("zzz", x + s * 0.7, y - s * 0.6, s * 0.5);
    }
    if (awake > 0.8) emote("sparkle", x + s * 0.7, y - s * 0.6, s * 0.5);
  }
  function brakeLamp(x, y, r, b) {
    glow(x, y, r * 2.4, "#ff8f9f", clamp(b, 0, 1));
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#f2e6ea", "#ff7f93", clamp(b, 0, 1)); ctx.fill(); outline(1.5); ctx.stroke();
    text("刹", x, y + 1, r * 1.05, "#fff");
  }

  // ---------- 第 1 幕：全脑地图，白天点灯，夜里停工 ----------
  function sunMoon(x, y, r, n) {
    ctx.save(); ctx.globalAlpha *= 1 - n;
    glow(x, y, r * 2.3, C.gold, 1);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.6); ctx.stroke();
    face(x, y + r * 0.1, r * 0.55, 1);
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= n;
    glow(x, y, r * 2, "#fff6c2", 1);
    const ox = x + r * 0.55, oy = y - r * 0.35, r2 = r * 0.85, d = Math.hypot(ox - x, oy - y), aa = (r * r - r2 * r2 + d * d) / (2 * d), hh = Math.sqrt(r * r - aa * aa);
    const ux = (ox - x) / d, uy = (oy - y) / d, P1 = [x + ux * aa - uy * hh, y + uy * aa + ux * hh], P2 = [x + ux * aa + uy * hh, y + uy * aa - ux * hh];
    const ang = (p, c) => Math.atan2(p[1] - c[1], p[0] - c[0]);
    ctx.beginPath(); ctx.arc(x, y, r, ang(P1, [x, y]), ang(P2, [x, y])); ctx.arc(ox, oy, r2, ang(P2, [ox, oy]), ang(P1, [ox, oy]), true); ctx.closePath();
    ctx.fillStyle = "#fff4c4"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.restore();
  }
  function mapView(a) {
    const nw = Anima.narrow, n = cur === 0 ? prog(7, 2) : 0;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash(mix("#fff5e6", "#8f93d8", n), mix("#fdeef3", "#d2cbf0", n));
    Anima.bokeh(6, mix("#ffe3b0", "#e8e4ff", n), 0.7, 7);
    const cx = W * (nw ? 0.5 : 0.52), cy = H * (nw ? 0.55 : 0.52);
    const rx = Math.min(W * (nw ? 0.4 : 0.34), H * 0.56), ry = rx * 0.58;
    // 脑干和小脑
    rrect(cx + rx * 0.08, cy + ry * 0.5, rx * 0.24, ry * 0.95, rx * 0.1); ctx.fillStyle = mix(C.brainD, "#c9c2dc", n * 0.5); ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx + rx * 0.62, cy + ry * 0.62, rx * 0.26, ry * 0.3, -0.2, 0, Math.PI * 2); ctx.fillStyle = mix("#f7c9d4", "#d4cde6", n * 0.5); ctx.fill(); ctx.stroke();
    // 大脑
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = mix(C.brain, "#e3def2", n * 0.6); ctx.fill(); outline(2.2); ctx.stroke();
    ctx.save(); ctx.clip();
    ctx.strokeStyle = alpha(C.line, 0.25); ctx.lineWidth = Math.max(1.5, H * 0.004);
    for (let k = 0; k < 7; k++) { const x0 = cx - rx * 0.8 + k * rx * 0.27; ctx.beginPath(); ctx.moveTo(x0, cy - ry); ctx.quadraticCurveTo(x0 + rx * 0.12, cy - ry * 0.4, x0 - rx * 0.05, cy - ry * 0.05); ctx.stroke(); }
    ctx.restore();
    // 目的地：皮层前、中、后，丘脑，脑干
    const TMN = [cx - rx * 0.02, cy + ry * 0.6];
    const T = [[cx - rx * 0.72, cy - ry * 0.12], [cx - rx * 0.2, cy - ry * 0.72], [cx + rx * 0.55, cy - ry * 0.45], [cx + rx * 0.22, cy + ry * 0.05], [cx + rx * 0.2, cy + ry * 1.28]];
    const P = T.map((t, i) => [TMN, [(TMN[0] + t[0]) / 2 + (i === 4 ? rx * 0.25 : 0), Math.min(TMN[1], t[1]) - ry * (i === 4 ? -0.1 : 0.25)], t]);
    const day = 1 - n;
    P.forEach((p, i) => {
      const reach = cur === 0 ? prog(0.8 + i * 0.45, 1.6) : 1;
      ctx.save(); ctx.globalAlpha *= 0.35 + 0.65 * reach;
      curve(p, mix(mix("#e7d6f5", C.his, day * reach), "#b9b3cc", n), H * 0.011);
      ctx.restore();
      const lit = reach * day;
      glow(p[2][0], p[2][1], H * 0.07, C.gold, lit);
      ctx.beginPath(); ctx.arc(p[2][0], p[2][1], H * 0.018, 0, Math.PI * 2); ctx.fillStyle = mix("#d9d3e6", "#fff1a8", lit); ctx.fill(); outline(1.5); ctx.stroke();
      if (lit > 0.5) sparkle(p[2][0] + H * 0.025, p[2][1] - H * 0.025, H * 0.014, lit);
      // 放电：信号沿纤维跑出去，夜里几乎不跑
      if (reach > 0.9 && day > 0.2) {
        const t = (time * 0.45 + i * 0.23) % 1;
        const q = qpt(p, t);
        ctx.save(); ctx.globalAlpha *= day;
        glow(q[0], q[1], H * 0.025, C.gold, 1); Anima.bolt(q[0], q[1], H * 0.012, 1, C.gold);
        ctx.restore();
      }
    });
    // 小管家们提着灯走向各街区
    if (day > 0.1) for (let i = 0; i < 3; i++) {
      const p = P[[0, 2, 1][i]], t = cur === 0 ? clamp((lt - 1 - i * 0.6) / 3.2, 0, 0.8) : 0.8;
      if (t <= 0) continue;
      const q = qpt(p, t);
      chara(q[0], q[1] + H * 0.012, H * 0.022, { who: "His", item: "lamp", arms: "hold", walk: t < 0.8 ? time * 9 : null, eyes: "happy", alpha: day, shadow: false, dir: p[2][0] < TMN[0] ? -1 : 1 });
    }
    // 结节乳头核：组胺神经元的家
    ctx.beginPath(); ctx.ellipse(TMN[0], TMN[1], H * 0.05, H * 0.03, 0, 0, Math.PI * 2); ctx.fillStyle = mix("#f0e0fb", "#d8d2ea", n); ctx.fill(); outline(1.6); ctx.stroke();
    const hs = H * 0.04;
    chara(TMN[0], TMN[1] + H * 0.02, hs, { who: "His", eyes: n > 0.6 ? "closed" : "happy", mouth: n > 0.6 ? "cat" : "grin", arms: n > 0.6 ? "hug" : "wave", gray: n * 0.3 });
    if (n > 0.6) emote("zzz", TMN[0] + hs * 0.8, TMN[1] - hs * 2.6, hs * 0.8, n);
    // 放电记录条：白天很密，夜里几乎平
    const bx = W * 0.03, bw = W * (nw ? 0.34 : 0.22), by = H * 0.9, bh = H * 0.06;
    rrect(bx, by - bh / 2, bw, bh, bh * 0.3); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.save(); rrect(bx, by - bh / 2, bw, bh, bh * 0.3); ctx.clip();
    ctx.strokeStyle = C.his; ctx.lineWidth = Math.max(1.5, H * 0.004); ctx.beginPath();
    for (let k = 0; k < 40; k++) {
      const x = bx + bw - ((time * W * 0.05 + k * bw / 40) % bw);
      const nn = cur === 0 ? clamp((x - bx) / bw * 1.4 + (lt - 7.5) / 2, 0, 1) : 0; // 右边是“现在”
      const fire = rnd(k * 3 + Math.floor(time * 2)) > 0.25 + nn * 0.72;
      ctx.moveTo(x, by + bh * 0.3); ctx.lineTo(x, fire ? by - bh * 0.3 : by + bh * 0.22);
    }
    ctx.stroke(); ctx.restore();
    text("放电", bx + bw / 2, by - bh * 0.95, fz(0.024), C.ink);
    const sr = H * 0.04, sx = nw ? W * 0.9 : W * 0.88, sy = Anima.topSafe() + sr * 1.6;
    sunMoon(sx, sy, sr, n);
    callout("tmn", cur === 0 && win(1, 7), TMN[0] + (nw ? H * 0.05 : -H * 0.05), TMN[1], nw ? W * 0.76 : W * 0.24, nw ? H * 0.9 : H * 0.76, "结节乳头核：组胺的家");
    callout("fib", cur === 0 && win(3, 7), T[1][0], T[1][1], nw ? W * 0.3 : W * 0.24, Anima.topSafe() + H * 0.06, "纤维伸到全脑，给街区点灯");
    say("night", cur === 0 && lt > 8.8, TMN[0] + hs * 0.5, TMN[1] - hs * 3, nw ? W * 0.72 : W * 0.8, H * 0.8, "睡着啦，管家也下班～", "think");
    ctx.restore();
  }

  // ---------- 第 2、3、5、6 幕：突触特写 ----------
  function geo() {
    const nw = Anima.narrow, cx = W * (0.5 - S.nb * 0.1), tw = Math.min(W * (nw ? 0.52 : 0.46), H * 0.95), th = H * 0.42;
    const post = H * 0.77, rs = H * 0.048, cs = H * (nw ? 0.036 : 0.038);
    // 末梢左半边下缘的贝塞尔曲线（和 Anima.terminal 一致）：u=0 在侧面，u=1 在正中底部
    const bz = (u, a, b, c, d) => (1 - u) * (1 - u) * (1 - u) * a + 3 * (1 - u) * (1 - u) * u * b + 3 * (1 - u) * u * u * c + u * u * u * d;
    const edge = (u, side) => { const bx = bz(u, cx - tw / 2, cx - tw / 2, cx - tw * 0.3, cx); return [side < 0 ? bx : 2 * cx - bx, bz(u, th * 0.62, th * 1.02, th, th)]; };
    const recX = [cx - tw * 0.3, cx, cx + tw * 0.3];
    const nx = W * (nw ? 0.84 + (1 - S.nb) * 0.3 : 0.82 + (1 - S.nb) * 0.3), nwid = Math.min(W * (nw ? 0.26 : 0.2), H * 0.42), nh = H * 0.34;
    const nbx = bz(0.45, nx - nwid / 2, nx - nwid / 2, nx - nwid * 0.3, nx), nedge = [nbx, bz(0.45, nh * 0.62, nh * 1.02, nh, nh)];
    return { cx, tw, th, post, rs, cs, edge, recX, nx, nwid, nh, nedge, siteY: post - rs * 1.62 };
  }
  // 放出的组胺：一个个从末梢底部落到 H1 门口。rate 0～1.6 决定每一轮放出几位
  function flow(g, rate, alive) {
    const N = 6;
    for (let k = 0; k < N; k++) {
      const ph = time * 0.32 + k / N, cyc = Math.floor(ph), t = ph - cyc;
      if (rnd(cyc * 13 + k) > rate * 0.62) continue;
      const i = k % 3, x0 = g.cx + (k - 2.5) * g.tw * 0.07, y0 = g.th + g.cs * 3.1;
      const x1 = g.recX[i] + (k < 3 ? -1 : 1) * g.rs * 1.4, y1 = g.siteY + g.cs * 1.4;
      const al = Math.min(1, t * 6, (1 - t) * 5) * alive;
      if (al < 0.02) continue;
      chara(lerp(x0, x1, t), lerp(y0, y1, t) - Math.sin(t * Math.PI) * H * 0.03, g.cs * 0.8, { who: "His", item: "letter", arms: "hold", eyes: "happy", walk: time * 9 + k, alpha: al, shadow: false, seed: k });
    }
  }
  function synView(a) {
    const g = geo(), nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#fbf3ff"); bg.addColorStop(0.55, "#eef6fb"); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#e2d4f7", 0.8, 31); Anima.petals(6, 0.4, 12);
    // —— 状态 ——
    const drugH1 = cur === 2 ? [0, 1, 2].map((i) => prog(0.6 + i * 0.8, 1.4)) : [0, 0, 0];
    const tilo = cur === 5 ? prog(1, 1.6) : 0, tilo2 = cur === 5 ? prog(3.2, 1.6) : 0;
    const auto = cur === 4 ? 0.3 + 0.7 * prog(3.2, 1.2) : cur === 5 ? 0.3 * (1 - tilo) : 0.3; // H3 刹车踩了多少（0.3 = 自带的一点）
    const het = cur === 4 ? prog(6.4, 1.2) : 0;
    const rate = cur === 5 ? 1 + tilo * 0.6 : 1.25 - auto * 0.75;
    const bound = cur === 1 ? prog(1.5, 1.8) : cur === 2 ? 0 : 1;
    const act = bound * (cur === 5 ? 1 : 0.85);
    const awake = cur === 2 ? 1 - prog(4.5, 2) : cur === 1 ? prog(3.5, 2) : 0.6 + rate * 0.25;
    // —— 突触后：皮层神经元 ——
    Anima.postMembrane(g.post, C.post, { face: false });
    const fx = nw ? W * 0.1 : W * 0.08, fy = g.post + (H - g.post) * 0.55;
    sleepyFace(fx, fy, H * 0.075, awake);
    if (act > 0.4 && awake > 0.5) Anima.spark([[g.recX[2], g.post + H * 0.08], [g.recX[0], g.post + H * 0.12], [fx + H * 0.06, fy]], (time * 0.5) % 1, H * 0.02, C.gold);
    const R = g.recX.map((x, i) => Anima.receptor(x, g.post, g.rs, C.h1, drugH1[i] > 0.9 ? 0 : act, { shape: "tri", label: i === 1 ? "H1" : null }));
    // —— 组胺末梢 ——
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    for (let k = 0; k < 4; k++) Anima.vesicle(g.cx + (k - 1.5) * g.tw * 0.17, g.th * (0.62 + (k % 2) * 0.12), H * 0.035, C.his, 4, k * 5);
    // 释放量小条
    const mY = Math.max(Anima.topSafe() + H * 0.03, g.th * 0.36), mW = g.tw * 0.36;
    plate("放出", g.cx - mW * 0.5 - fz(0.022) * 1.6, mY, "#f3e8fd", fz(0.022));
    for (let k = 0; k < 6; k++) { rrect(g.cx - mW * 0.5 + k * mW / 6, mY - H * 0.014, mW / 6 - 3, H * 0.028, 3); ctx.fillStyle = k < Math.round(rate * 3.7) ? C.his : "#ffffff"; ctx.fill(); outline(1.2); ctx.stroke(); }
    // H3 自身受体（末梢左下）
    const e3 = g.edge(0.3, -1), rs3 = H * 0.038;
    ctx.save(); ctx.translate(e3[0], e3[1]); ctx.rotate(0.6);
    Anima.receptor(0, 0, rs3, C.h3, auto, { dir: -1, shape: "round" });
    ctx.restore();
    const s3 = [e3[0] - Math.sin(0.6) * rs3 * 1.62, e3[1] + Math.cos(0.6) * rs3 * 1.62];
    plate("H3", e3[0] - rs3 * 1.9, e3[1] - rs3 * 0.3, "#dff0fa", fz(0.022));
    brakeLamp(e3[0] - rs3 * 1.9, e3[1] - rs3 * 1.9, H * 0.022, auto);
    const onH3 = cur === 4 ? prog(2, 1.4) : cur === 1 ? 0 : 0;
    const hs3 = g.cs * 0.8;
    if (onH3 > 0) chara(lerp(g.cx - g.tw * 0.1, s3[0] + hs3 * 0.3, onH3), lerp(g.th + g.cs * 3, s3[1] + hs3 * 3.1, onH3), hs3, { who: "His", arms: onH3 >= 1 ? "up" : "down", walk: onH3 < 1 ? time * 9 : null, eyes: onH3 >= 1 ? "angry" : "open", mouth: "open", shadow: false });
    if (cur === 4 && lt > 3.2 && lt < 4.4) sfx("踩！", e3[0] - rs3 * 3.6, e3[1] + rs3 * 0.8, H * 0.045, "#ff7f93", -0.2, 1);
    if (tilo > 0) chara(lerp(-W * 0.05, s3[0] + hs3 * 0.3, tilo), s3[1] + hs3 * 3.2 + (1 - tilo) * H * 0.08, hs3 * 1.05, { who: "drug", hatColor: "#8fc3ea", hatColor2: "#ffffff", tag: "替洛利生", walk: tilo < 1 ? time * 9 : null, eyes: tilo >= 1 ? "happy" : "open", arms: tilo >= 1 ? "up" : "down", shadow: false });
    // —— 旁边的邻居末梢（乙酰胆碱、去甲肾上腺素），也装着 H3 ——
    if (S.nb > 0.05) {
      ctx.save(); ctx.globalAlpha *= S.nb;
      const nb = Anima.terminal(g.nx, 0, g.nwid, g.nh, "#fff0d8");
      plate("ACh / NE 末梢", g.nx, Math.max(Anima.topSafe() + H * 0.03, g.nh * 0.35), "#fff6e6", fz(0.022));
      const nrate = cur === 5 ? 1 + tilo2 * 0.6 : 1.1 - het * 0.6;
      for (let k = 0; k < 4; k++) {
        const ph = time * 0.3 + k / 4, cyc = Math.floor(ph), t = ph - cyc;
        if (rnd(cyc * 7 + k + 50) > nrate * 0.6) continue;
        const al = Math.min(1, t * 6, (1 - t) * 5);
        chara(g.nx + (k - 1.5) * g.nwid * 0.18, lerp(g.nh + g.cs * 2.5, g.post - H * 0.01, t), g.cs * 0.7, { who: k % 2 ? "NE" : "ACh", item: "letter", arms: "hold", eyes: "happy", walk: time * 9 + k, alpha: al, shadow: false });
      }
      const eh = g.nedge;
      ctx.save(); ctx.translate(eh[0], eh[1]); ctx.rotate(0.45);
      Anima.receptor(0, 0, rs3 * 0.9, C.h3, cur === 4 ? het : 0.3 * (1 - tilo2), { dir: -1, shape: "round" });
      ctx.restore();
      brakeLamp(eh[0] - rs3 * 1.9, eh[1] - rs3 * 0.3, H * 0.02, cur === 4 ? het : 0.3 * (1 - tilo2));
      const sh = [eh[0] - Math.sin(0.45) * rs3 * 1.46, eh[1] + Math.cos(0.45) * rs3 * 1.46];
      const onHet = cur === 4 ? prog(5, 1.4) : 0;
      if (onHet > 0) chara(lerp(g.cx + g.tw * 0.25, sh[0] - hs3 * 0.2, onHet), lerp(g.th + g.cs * 3, sh[1] + hs3 * 3.1, onHet), hs3, { who: "His", arms: onHet >= 1 ? "up" : "down", walk: onHet < 1 ? time * 9 : null, eyes: "open", mouth: "open", shadow: false, dir: 1 });
      if (tilo2 > 0) chara(lerp(g.cx + g.tw * 0.2, sh[0] - hs3 * 0.2, tilo2), sh[1] + hs3 * 3.2, hs3 * 1.05, { who: "drug", hatColor: "#8fc3ea", hatColor2: "#ffffff", walk: tilo2 < 1 ? time * 9 : null, eyes: "happy", arms: tilo2 >= 1 ? "up" : "down", shadow: false });
      callout("het", cur === 4 && lt > 6.2, eh[0], eh[1] + rs3, nw ? W * 0.72 : W * 0.78, g.post - H * 0.18, nw ? "H3 也在别家末梢" : "别家末梢上的 H3：少放 ACh、NE");
      callout("more", cur === 5 && lt > 5, nb.cx, g.nh * 0.9, nw ? W * 0.78 : W * 0.82, g.post - H * 0.14, "ACh、NE 也多放");
      ctx.restore();
    }
    // —— 组胺快递员 ——
    flow(g, rate, cur === 2 ? 1 - prog(8, 1) : 1);
    if (cur !== 2) R.forEach((r, i) => { if (bound > 0.05) chara(r.site.x, lerp(g.th + g.cs * 3, r.site.y + g.cs * 0.25, bound), g.cs, { who: "His", arms: bound >= 1 ? "up" : "hold", eyes: bound >= 1 ? "happy" : "open", mouth: bound >= 1 ? "grin" : "smile", jump: bound >= 1 ? Math.abs(Math.sin(time * 4 + i)) * 0.2 : 0, alpha: clamp(bound * 3, 0, 1), seed: i }); });
    // 第 3 幕：药物访客占住 H1
    if (cur === 2) {
      const tags = ["苯海拉明", "米氮平", "奥氮平"], hats = ["#ffb36b", "#ff9aa9", "#9fd8b8"];
      R.forEach((r, i) => {
        const p = drugH1[i]; if (p <= 0) return;
        const from = i === 0 ? -W * 0.08 : i === 1 ? g.cx : W * 1.05;
        chara(lerp(from, r.site.x, p), r.site.y + g.cs * 0.25 + (i === 1 ? (1 - p) * H * 0.1 : 0), g.cs, { who: "drug", hatColor: hats[i], tag: tags[i], walk: p < 1 ? time * 9 : null, eyes: p >= 1 ? "happy" : "open", arms: p >= 1 ? "hug" : "down", seed: i, dir: i === 2 ? -1 : 1 });
        if (p >= 1 && lt > 4 && lt < 8) emote("?", r.site.x + g.cs * 1.6, r.site.y - g.cs * 2.6, g.cs * 0.6);
      });
      // 下丘脑的饱腹信号变弱：胃口和体重
      const ap = prog(7.5, 1), cxx = nw ? W * 0.88 : W * 0.83, cyy = H * (nw ? 0.42 : 0.36), cr = H * (nw ? 0.055 : 0.07);
      if (ap > 0) {
        ctx.save(); ctx.globalAlpha *= ap;
        rrect(cxx - Math.max(cr * 1.5, fz(0.03) * 2.2), cyy - cr * 1.1, Math.max(cr * 3, fz(0.03) * 4.4), cr * 1.65 + fz(0.03) * 2.7, cr * 0.4); ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.fill(); outline(1.5); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cxx - cr * 0.8, cyy - cr * 0.3); ctx.quadraticCurveTo(cxx, cyy + cr * 0.9, cxx + cr * 0.8, cyy - cr * 0.3); ctx.closePath(); ctx.fillStyle = "#ffd3c4"; ctx.fill(); ctx.stroke();
        for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(cxx + (k - 1) * cr * 0.35, cyy - cr * 0.4, cr * 0.22, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke(); }
        const fq = fz(0.03), y1 = cyy + cr * 0.55 + fq * 0.7; text("胃口 ↑", cxx, y1, fq, "#d0762a"); text("体重 ↑", cxx, y1 + fq * 1.25, fq, "#d0762a");
        ctx.restore();
      }
    }
    // —— 标注和气泡 ——
    const c = cur;
    callout("h1", c === 1 && win(2.5, 8), g.recX[0] - g.rs * 0.6, g.post - g.rs, nw ? W * 0.18 : W * 0.14, g.post - H * 0.2, "H1 受体（Gq）");
    callout("gq", c === 1 && lt > 5, g.recX[2], g.post + H * 0.1, nw ? W * 0.75 : W * 0.78, nw ? H * 0.5 : H * 0.93, "Gq 接力 → 神经元更兴奋");
    say("wake", c === 1 && lt > 7.5, fx + H * 0.08, fy, nw ? W * 0.38 : W * 0.3, fy, "醒啦，精神满满～", "say");
    callout("blk", c === 2 && win(2.5, 7.5), g.recX[2] + g.rs, g.post - g.rs * 1.5, nw ? W * 0.8 : W * 0.84, g.post - H * 0.2, "占住 H1，钥匙插不进");
    say("sleepy", c === 2 && lt > 6.5, fx + H * 0.08, fy, nw ? W * 0.38 : W * 0.3, fy, "好困……还有点饿", "think");
    callout("auto", c === 4 && win(2.8, 6), e3[0], e3[1], nw ? W * 0.2 : W * 0.14, g.th + H * 0.18, "H3 自身受体：自己的刹车");
    // 手机上一行放在囊泡那一排，别压住邻居末梢的“刹”灯
    say("less", c === 4 && lt > 8, g.cx - g.tw * 0.05, g.th * 0.85, g.cx + g.tw * (nw ? -0.05 : 0.18), g.th * (nw ? 0.75 : 0.6), nw ? "够多啦，少放点" : "外面够多啦，少放点", "say");
    callout("inv", c === 5 && win(2.2, 7), s3[0], s3[1], nw ? W * 0.24 : W * 0.18, g.th + H * 0.2, nw ? "反向激动剂" : "反向激动剂：自带的刹车也松开");
    say("more5", c === 5 && lt > 7.5, fx + H * 0.08, fy, nw ? W * 0.7 : W * 0.32, nw ? H * 0.9 : fy, "叫醒信号变多啦！", nw ? "say" : "shout"); // 手机上放右下角，别压住 H1
    ctx.restore();
  }

  // ---------- 第 4 幕：血脑屏障 ----------
  function bbbView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = "#fff7f3"; ctx.fillRect(0, 0, W, H);
    const vt = Anima.topSafe() + H * 0.02, vb = H * 0.4, wt = vb, wb = H * 0.47, post = H * 0.86;
    // 血管
    const vg = ctx.createLinearGradient(0, vt, 0, vb); vg.addColorStop(0, "#ffd0d6"); vg.addColorStop(1, C.vessel);
    rrect(-10, vt, W + 20, vb - vt, 20); ctx.fillStyle = vg; ctx.fill(); outline(2); ctx.stroke();
    for (let k = 0; k < 9; k++) { const x = ((time * W * 0.06 + k * W / 8) % (W * 1.12)) - W * 0.06, y = vt + (vb - vt) * (0.3 + rnd(k) * 0.45); ctx.beginPath(); ctx.ellipse(x, y, H * 0.03, H * 0.018, 0, 0, Math.PI * 2); ctx.fillStyle = "#f7788c"; ctx.fill(); outline(1.2); ctx.stroke(); }
    text("血管", W * 0.04, vt + H * 0.035, fz(0.026), "#b04a5c", "left");
    // 城墙：一块块紧紧挨着的砖（血管内皮细胞）
    const bw = W / 12, gapX = W * 0.36, pumpX = W * 0.66;
    const squeeze = cur === 3 ? Math.sin(clamp((lt - 1.8) / 1.6, 0, 1) * Math.PI) : 0;
    for (let k = 0; k < 12; k++) {
      const x = k * bw, dx = Math.abs(x + bw / 2 - gapX) < bw ? Math.sign(x + bw / 2 - gapX) * squeeze * bw * 0.12 : 0;
      rrect(x + 2 + dx, wt + 2, bw - 4, wb - wt - 4, 6); ctx.fillStyle = C.wall; ctx.fill(); outline(1.5); ctx.stroke();
    }
    // 脑组织和 H1 门
    ctx.fillStyle = C.tissue; ctx.fillRect(0, wb, W, H - wb);
    Anima.postMembrane(post, "#f7dbe6", { face: false });
    const r1 = Anima.receptor(gapX, post, H * 0.045, C.h1, 0, { shape: "tri", label: "H1" });
    const r2x = W * 0.84; Anima.receptor(r2x, post, H * 0.045, C.h1, 0.6, { shape: "tri" });
    const cs = H * 0.036;
    chara(r2x, r1.site.y + cs * 0.25, cs * 0.9, { who: "His", arms: "up", eyes: "happy", seed: 3 });
    const sleepy = prog(5, 1.5);
    const fx = W * 0.1, fy = post + (H - post) * 0.55;
    sleepyFace(fx, fy, H * 0.06, 1 - sleepy);
    text("大脑", W * 0.96, wb + H * 0.05, fz(0.026), "#8a55b0", "right");
    // 老一代：钻过城墙，坐上 H1
    const p1 = clamp((lt - 1.5) / 3, 0, 1), y1 = p1 < 0.5 ? lerp(vb - cs * 0.6, wb + cs * 3.2, ease(p1 * 2)) : lerp(wb + cs * 3.2, r1.site.y + cs * 0.25, ease((p1 - 0.5) * 2));
    chara(p1 <= 0 ? W * 0.2 + Math.sin(time) * W * 0.02 : lerp(W * 0.2, gapX, ease(Math.min(1, p1 * 2))), y1, cs, { who: "drug", hatColor: "#ffb36b", tag: "老一代", walk: p1 < 1 ? time * 9 : null, eyes: p1 >= 1 ? "happy" : "sparkle", arms: p1 >= 1 ? "hug" : "down" });
    if (squeeze > 0.3) sfx("滋溜～", gapX + W * 0.07, (wt + wb) / 2, H * 0.04, "#e7883a", -0.1, squeeze);
    // 新一代：想钻，被门卫送回血里
    const t2 = lt - 5.5, down = t2 < 0 ? 0 : t2 < 1 ? ease(t2) : t2 < 2.4 ? 1 - ease((t2 - 1.4)) : 0;
    const nx = t2 < 2.4 ? pumpX : lerp(pumpX, W * 0.9, ease((t2 - 2.4) / 2));
    chara(nx, lerp(vb - cs * 0.6, wt + cs * 1.2, clamp(down, 0, 1)), cs, { who: "drug", hatColor: "#8fd3a8", tag: "新一代", walk: t2 > 2.4 && t2 < 4.4 ? time * 9 : null, eyes: t2 > 1 && t2 < 2.6 ? "x" : "happy", arms: t2 > 1 && t2 < 2.4 ? "up" : "down", dir: 1 });
    chara(pumpX, wb + cs * 3.3, cs * 0.95, { who: "pump", label: "门卫", arms: t2 > 0.8 && t2 < 2.6 ? "carry" : "down", eyes: t2 > 0.8 && t2 < 2.6 ? "angry" : "happy", mouth: t2 > 0.8 && t2 < 2.6 ? "open" : "smile" });
    if (t2 > 1 && t2 < 2.4) sfx("请回～", pumpX + W * 0.08, wb + cs * 1.4, H * 0.04, C.skyDeep, 0.1, 1);
    // 手机上放到血管上沿，别挡住钻进来的“老一代”
    callout("bbb", cur === 3 && win(0.8, 5.5), W * 0.18, (wt + wb) / 2, nw ? W * 0.33 : W * 0.2, nw ? Anima.topSafe() : H * 0.6, "血脑屏障：砌得很密的城墙");
    callout("pgp", cur === 3 && win(6.8, 10), pumpX - cs, wb + cs * 1.5, nw ? W * 0.5 : W * 0.5, H * 0.66, "“门卫”把它送回血里");
    say("old", cur === 3 && win(3.5, 6.5), gapX, post - H * 0.14, nw ? W * 0.22 : W * 0.2, H * 0.62, "我溜进来啦～", "say");
    say("new", cur === 3 && lt > 9.5, W * 0.9, vt + H * 0.05, nw ? W * 0.4 : W * 0.72, vt + H * 0.08, "我去鼻子和皮肤那儿干活～", "say");
    ctx.restore();
  }

  // ---------- 第 7 幕：四扇门 ----------
  function icon(k, x, y, r, on) {
    outline(Math.max(1.4, r * 0.06));
    if (k === 0) { // 睁开的眼睛 + 小太阳
      glow(x, y, r, C.gold, on);
      ctx.beginPath(); ctx.moveTo(x - r * 0.7, y); ctx.quadraticCurveTo(x, y - r * 0.6, x + r * 0.7, y); ctx.quadraticCurveTo(x, y + r * 0.6, x - r * 0.7, y); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, r * 0.22, 0, Math.PI * 2); ctx.fillStyle = C.lavDeep; ctx.fill();
    } else if (k === 1) { // 胃 + 胃酸滴
      ctx.beginPath(); ctx.moveTo(x - r * 0.3, y - r * 0.7); ctx.quadraticCurveTo(x - r * 0.2, y - r * 0.1, x - r * 0.6, y + r * 0.2); ctx.quadraticCurveTo(x - r * 0.6, y + r * 0.75, x, y + r * 0.6); ctx.quadraticCurveTo(x + r * 0.75, y + r * 0.45, x + r * 0.6, y - r * 0.2); ctx.quadraticCurveTo(x + r * 0.4, y - r * 0.55, x + r * 0.05, y - r * 0.3); ctx.lineTo(x, y - r * 0.7); ctx.fillStyle = "#ffc9c9"; ctx.fill(); ctx.stroke();
      for (let d = 0; d < 3; d++) { const t = (time * 0.8 + d / 3) % 1; ctx.save(); ctx.globalAlpha *= on * Math.sin(t * Math.PI); ctx.beginPath(); ctx.arc(x - r * 0.2 + d * r * 0.2, y + t * r * 0.3, r * 0.08, 0, Math.PI * 2); ctx.fillStyle = "#9fd86a"; ctx.fill(); ctx.stroke(); ctx.restore(); }
    } else if (k === 2) brakeLamp(x, y, r * 0.5, on);
    else { // 免疫细胞：带小突起的圆
      ctx.beginPath(); for (let q = 0; q <= 24; q++) { const ang = q / 24 * Math.PI * 2, rr = r * (0.55 + (q % 2) * 0.1); if (q) ctx.lineTo(x + Math.cos(ang) * rr, y + Math.sin(ang) * rr); else ctx.moveTo(x + rr, y); }
      ctx.fillStyle = mix("#e9eef5", "#bfe8d6", on); ctx.fill(); ctx.stroke(); face(x, y, r * 0.35, 1);
    }
  }
  function doorsView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf3ff", "#fff3ea"); Anima.petals(8, 0.4, 40);
    const D = [["H1", "清醒 · 过敏", "挡住：抗过敏药", C.h1], ["H2", "胃酸", "挡住：法莫替丁", "#ffd27a"], ["H3", "自己的刹车", "替洛利生", C.h3], ["H4", "免疫、瘙痒", "研究中", "#bfe8d6"]];
    const top = Anima.topSafe() + H * 0.03, cols = nw ? 2 : 4, rows = nw ? 2 : 1, gap = W * 0.025;
    const cw = (W - gap * (cols + 1)) / cols, chh = nw ? (H * 0.97 - top - gap) / 2 : H * 0.8 - top;
    const hop = (lt - 0.8) / 2.1, idx = clamp(Math.floor(hop), 0, 3);
    D.forEach((d, i) => {
      const col = i % cols, row = Math.floor(i / cols), x = gap + col * (cw + gap), y = top + row * (chh + gap);
      const on = lt > 0.8 + i * 2.1 + 1.1 ? 1 : 0.15;
      rrect(x, y, cw, chh, 18); ctx.fillStyle = mix("#ffffff", d[3], 0.18 * on); ctx.fill(); outline(1.8); ctx.stroke();
      const fs = fz(0.04);
      text(d[0], x + cw / 2, y + fs * 0.9, fs * 1.1, C.ink);
      const ry = y + chh * (nw ? 0.56 : 0.52), rs = Math.min(H * 0.055, cw * 0.13);
      Anima.receptor(x + cw * 0.3, ry, rs, d[3], on > 0.5 ? 0.9 : 0, { shape: i === 0 ? "tri" : "round" });
      icon(i, x + cw * 0.72, ry - rs * 0.8, Math.min(H * 0.09, cw * 0.2), on);
      text(d[1], x + cw / 2, y + chh * (nw ? 0.73 : 0.72), fz(0.036), C.ink);
      text(d[2], x + cw / 2, y + chh * (nw ? 0.88 : 0.87), fz(0.03), C.soft);
      if (on > 0.5) chara(x + cw * 0.3, ry - rs * 1.62 + H * 0.01, rs * 0.7, { who: "His", arms: "up", eyes: "happy", shadow: false, seed: i });
    });
    // 组胺管家从一扇门跳到下一扇
    if (lt < 0.8 + 4 * 2.1) {
      const col = idx % cols, row = Math.floor(idx / cols), f = clamp(hop - idx, 0, 1);
      const x = gap + col * (cw + gap) + cw * 0.3, y = top + row * (chh + gap) + chh * (nw ? 0.56 : 0.52) - H * 0.09;
      chara(x, y - Math.sin(Math.min(1, f * 2) * Math.PI) * H * 0.04, H * 0.035, { who: "His", item: "key", arms: "hold", eyes: "sparkle", walk: time * 9, alpha: f < 0.55 ? 1 : 1 - (f - 0.55) * 3 });
    }
    say("same", lt > 9.8, W * 0.5, H * 0.5, W * 0.5, nw ? H * 0.5 : H * 0.89, "同一位组胺，门不同，效果不同", "box");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) mapView(S.v0);
    if (S.v1 > 0.02) synView(S.v1);
    if (S.v2 > 0.02) bbbView(S.v2);
    if (S.v3 > 0.02) doorsView(S.v3);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#9a62c8", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }

  return {
    chapters: CH, state: S, dur: 13, accent: "#b98ad8",
    titleCard: { lines: ["组胺：", "清醒管家和它的四扇门"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
