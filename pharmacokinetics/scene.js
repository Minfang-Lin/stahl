Anima.register("pharmacokinetics", {
    "title": "药在身体里的旅程：半衰期和稳态",
    "tag": "基础篇",
    "headline": "药吃下去以后，在身体里【待多久】？",
    "lede": "药从嘴里出发，被吸收进血液、流到全身、钻进大脑，再被肝脏加工、从肾脏离开。把身体想成一个一边放水、一边排水的浴缸，就能看懂半衰期、稳态，以及为什么停药也要按计划来。",
    "summary": "吸收、分布、血脑屏障、代谢和排泄，半衰期、约 4～5 个半衰期达到稳态和基本清除，半衰期长短与停药反应，以及长效针剂。",
    "chapter": "对应 Stahl《精神药理学精要》第 2 章 · 药代动力学基础",
    "footer": "加药、减药、停药和换药都请和医生商量，不要自己改。",
    "canvasLabel": "药物访客在身体里旅行，以及用浴缸水位演示半衰期和稳态的动画",
    "regions": [],
    "parts": ["basics"],
    "cast": ["drug", "neuron"],
    "color": "#7fc8e8"
  }, () => {
  const CH = [
    { title: "吸收和分布", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["第一站", "吸收"], pill2: ["然后", "随血流分布"],
      text: "药在身体里要走一趟旅程。吞下去的药先在胃肠里溶开，从肠壁被吸收进血液，这叫吸收。进了血液，它就搭上血流这条小河，被送到全身：大脑、肝脏、肾脏、肌肉，还有脂肪，这叫分布。有的药会在脂肪里存上一些，再慢慢放回血里。精神科药物要起作用，最后还得进到大脑。",
      fact: "吸收：从胃肠进入血液；分布：随血流到达全身各处" },
    { title: "血脑屏障", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["血脑屏障", "很挑剔"], pill2: ["容易进脑", "小·亲油"],
      text: "进大脑可没那么容易。脑里毛细血管的内皮细胞紧紧挨在一起，缝隙封得严严实实，这就是血脑屏障。能过去的多半是个子小、又“亲油”（脂溶性高）的分子，它们可以直接穿过细胞膜；个子大、带电、很“亲水”的分子，常常被挡在外面。所以作用于大脑的药，大多是小而亲油的。",
      fact: "小分子、脂溶性高的药物更容易穿过血脑屏障" },
    { title: "代谢和排泄", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["代谢", "肝脏"], pill2: ["排泄", "肾脏为主"],
      text: "药不会永远留在身体里。血液流过肝脏时，肝里的酶把药加工一下，让它变得更“亲水”，这叫代谢，详细过程在《肝脏里的代谢工厂》里。亲水的产物更容易溶进尿里，经过肾脏过滤排出去，这叫排泄；也有一部分随胆汁从肠道离开。代谢和排泄一起，决定了药在身体里待多久。",
      fact: "代谢让药变得更亲水，排泄主要经肾脏随尿排出" },
    { title: "半衰期", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0, v6: 0,
      pill: ["经过", "0 个半衰期"], pill2: ["浓度", "100%"],
      text: "把身体想成一个浴缸：水龙头放进药，下水口一直往外排，血里的药浓度就像浴缸的水位。吃一次药，水位先升上去，再慢慢下降。浓度降到一半所需要的时间，叫半衰期。一个半衰期后剩一半，两个剩四分之一，三个剩八分之一……每过一个半衰期，就再少一半。",
      fact: "半衰期：血药浓度下降一半所需要的时间" },
    { title: "稳态", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0, v6: 0,
      pill: ["按时服药", "第 1 次"], pill2: ["接近稳态", "50%"],
      text: "如果按时吃药，每次都在水还没排完时再加一点，水位就一次比一次高。可水位越高，下水口排得越快，最后进来的和出去的一样多，水位就在一个范围里上下起伏，这叫稳态。大约经过 4～5 个半衰期，就基本到达稳态。所以调整药量以后，常常要等一段时间再看效果。",
      fact: "按时服药，大约 4～5 个半衰期后达到稳态" },
    { title: "停药：也要 4～5 个半衰期", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1, v6: 0,
      pill: ["基本清除", "4～5 个"], pill2: ["单位", "半衰期"],
      text: "停药时，水龙头关了，下水口还在排，同样大约 4～5 个半衰期，药就基本清除了。半衰期短的药，水位掉得快，身体来不及适应，停药反应可能来得更快、更明显，比如帕罗西汀；半衰期很长的药，水位慢慢往下走，像自带了缓慢减量，比如氟西汀。减药停药，都要和医生商量着慢慢来。",
      fact: "半衰期越短，停药后浓度掉得越快，停药反应可能更明显" },
    { title: "长效针剂：小仓库", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 1,
      pill: ["长效针剂", "慢慢释放"], pill2: ["一针管", "几周～几个月"],
      text: "有些药做成了长效针剂，打进肌肉里，就像在身体里放了一个慢慢释放的小仓库。仓库每天只漏出一点点，药稳稳地流进血里，不用每天记着吃药，水位的起伏也更平缓。它适合需要长期稳定用药的人，比如一些精神分裂症患者，打一次针可以管几周到几个月。",
      fact: "长效针剂：药从注射部位慢慢释放，一针可维持几周到几个月" },
  ];

  const C = Object.assign({}, Anima.C, { blood: "#f4a3ae", water: "#a9d8f0", waterD: "#6fb9e0", tub: "#fffdf8", drugC: "#ff9aa9" });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0 };
  const N = () => Anima.narrow;
  const T = (k) => (cur === k ? Anima.sceneTime : 99);
  const P = (L, t0, d) => ease((L - t0) / d);
  const fsS = () => Math.max(10, H * 0.03) * Anima.UI;
  const csz = () => H * (N() ? 0.05 : 0.052);
  let pv = null, pv2 = null;
  const DRUG = (tag, o) => Object.assign({ who: "drug", tag: tag }, o || {});

  function chip(t, x, y, col, fs) {
    fs = fs || fsS();
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1;
    rrect(x - w / 2, y - fs * 0.75, w, fs * 1.5, fs * 0.75); ctx.fillStyle = col || "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function station(x, y, r, col, label, mood) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y - r * 0.05, r * 0.45, mood == null ? 1 : mood);
    chip(label, x, y + r + fsS() * 0.6, "#fff", fsS() * 0.9);
  }
  function polyAt(pts, u) {
    let len = 0; const seg = [];
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(l); len += l; }
    let d = clamp(u, 0, 1) * len, i = 0;
    while (i < seg.length - 1 && d > seg[i]) { d -= seg[i]; i++; }
    const k = seg[i] ? d / seg[i] : 0;
    return { x: lerp(pts[i][0], pts[i + 1][0], k), y: lerp(pts[i][1], pts[i + 1][1], k), seg: i };
  }

  // ---------- 第 1 幕：吸收和分布 ----------
  function v0(a) {
    const L = T(0), n = N(), s = csz();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff6f2", "#f5f0ff"); Anima.bokeh(6, "#ffd1dc", 0.6, 11); Anima.petals(6, 0.4, 5);
    const cx = W * (n ? 0.56 : 0.56), cy = H * (n ? 0.53 : 0.58), rx = W * (n ? 0.33 : 0.29), ry = H * (n ? 0.22 : 0.26), r = H * (n ? 0.065 : 0.07);
    // 血流小河
    ctx.lineWidth = H * 0.035; ctx.strokeStyle = Anima.alpha(C.blood, 0.5);
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke();
    outline(1.4); ctx.beginPath(); ctx.ellipse(cx, cy, rx + H * 0.0175, ry + H * 0.0175, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx, cy, rx - H * 0.0175, ry - H * 0.0175, 0, 0, Math.PI * 2); ctx.stroke();
    const dist = P(L, 4.5, 3);
    for (let k = 0; k < 18; k++) {
      const q = k / 18 * Math.PI * 2 + time * 0.35;
      ctx.beginPath(); ctx.arc(cx + Math.cos(q) * rx, cy + Math.sin(q) * ry, H * 0.008, 0, Math.PI * 2); ctx.fillStyle = "#e8637a"; ctx.fill();
      if (k % 2 === 0 && dist > 0.02) {
        const q2 = q + 0.17;
        ctx.save(); ctx.globalAlpha *= dist;
        ctx.beginPath(); ctx.arc(cx + Math.cos(q2) * rx, cy + Math.sin(q2) * ry, H * 0.011, 0, Math.PI * 2); ctx.fillStyle = "#ffd24d"; ctx.fill(); outline(1); ctx.stroke();
        ctx.restore();
      }
    }
    const ST = [[-90, "#ffd6e4", "大脑"], [-15, "#e8b89a", "肝脏"], [55, "#d9ccf5", "肾脏"], [125, "#fff1b8", "脂肪"], [180, "#ffd9c2", "胃肠"]];
    const pos = ST.map((st) => { const q = st[0] * Math.PI / 180; return [cx + Math.cos(q) * rx, cy + Math.sin(q) * ry]; });
    ST.forEach((st, i) => {
      station(pos[i][0], pos[i][1], r, st[1], st[2], 1);
      if (dist > 0.3 && i !== 4) sparkles(pos[i][0], pos[i][1], r * 1.2, 3, (dist - 0.3) * (i === 0 ? 1.4 : 0.8), i * 9);
    });
    // 胶囊访客：从嘴里出发，在胃肠溶开
    const g = pos[4], walk = P(L, 0.3, 2.2), melt = P(L, 2.6, 1.2);
    if (melt < 1) chara(lerp(W * 0.05, g[0], walk), lerp(Anima.topSafe() + s * 3.4, g[1] - r * 0.3, walk), s, DRUG("药", { walk: walk < 1 ? time * 9 : null, alpha: 1 - melt, eyes: "happy", arms: "wave" }));
    if (melt > 0) for (let k = 0; k < 7; k++) {
      const t = P(L, 3.2 + k * 0.15, 1.6), q = rnd(k) * Math.PI * 2;
      const x = lerp(g[0] + Math.cos(q) * r * 0.5, g[0] + r * 0.2 + rnd(k + 4) * r, t), y = lerp(g[1] + Math.sin(q) * r * 0.5, cy - ry * (0.2 + rnd(k + 2) * 0.5), t);
      ctx.save(); ctx.globalAlpha *= 1 - P(L, 5.5, 1.5);
      ctx.beginPath(); ctx.arc(x, y, H * 0.011, 0, Math.PI * 2); ctx.fillStyle = "#ffd24d"; ctx.fill(); outline(1); ctx.stroke(); ctx.restore();
    }
    if (L > 2.6 && L < 3.8) sfx("溶开～", g[0], g[1] - r * 1.6, H * 0.045, C.warn, -0.1, Math.sin(melt * Math.PI));
    callout("p0a", L > 3.5 && L < 7.5, g[0] + r * 0.4, g[1] - r * 0.6, W * 0.26, H * 0.93, "吸收：从肠壁进入血液");
    callout("p0d", L > 7.5, cx + rx * 0.72, cy - ry * 0.7, W * 0.8, Anima.topSafe() + H * 0.06, "分布：随血流到全身");
    say("p0s", L > 8.5 && L < 12.5, pos[3][0], pos[3][1] - r, n ? cx : W * 0.18, n ? cy : H * 0.93, "我先存一点，慢慢再放～", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：血脑屏障 ----------
  function v1(a) {
    const L = T(1), n = N(), s = csz();
    ctx.save(); ctx.globalAlpha *= a;
    const y0 = Math.max(Anima.topSafe() + H * 0.02, H * 0.17), y1 = H * 0.45, wy = y1 + H * 0.075;
    Anima.wash("#fff4f6", "#f0ecff");
    // 血管
    const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, "#ffe3e6"); g.addColorStop(1, "#ffd0d6");
    ctx.fillStyle = g; ctx.fillRect(0, y0, W, y1 - y0); outline(1.6); ctx.beginPath(); ctx.moveTo(0, y0); ctx.lineTo(W, y0); ctx.stroke();
    for (let k = 0; k < 7; k++) { const x = ((time * 0.06 + k / 7) % 1) * (W + 60) - 30, y = lerp(y0, y1, 0.2 + rnd(k) * 0.3); ctx.beginPath(); ctx.ellipse(x, y, H * 0.03, H * 0.014, 0, 0, Math.PI * 2); ctx.fillStyle = "#f28c9a"; ctx.fill(); outline(1); ctx.stroke(); }
    // 内皮细胞墙
    const bw = W / (n ? 6 : 9);
    for (let i = 0; i * bw < W + bw; i++) {
      rrect(i * bw + 1.5, y1, bw - 3, wy - y1, (wy - y1) * 0.4); ctx.fillStyle = "#ffe9d6"; ctx.fill(); outline(1.4); ctx.stroke();
      face(i * bw + bw / 2, (y1 + wy) / 2, (wy - y1) * 0.35, 1);
      ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.beginPath(); for (let z = 0; z < 4; z++) { const yy = lerp(y1 + 3, wy - 3, z / 3); ctx.lineTo(i * bw + (z % 2 ? 3 : -3), yy); } ctx.stroke();
    }
    // 脑组织
    ctx.fillStyle = "#f3eeff"; ctx.fillRect(0, wy, W, H - wy);
    for (let k = 0; k < 4; k++) { const x = W * (0.15 + k * 0.24), y = H * 0.83; ctx.beginPath(); ctx.arc(x, y, H * 0.045, 0, Math.PI * 2); ctx.fillStyle = "#ffd3c4"; ctx.fill(); outline(1.4); ctx.stroke(); face(x, y, H * 0.025, 1); }
    text("大脑这一侧", W * 0.97, wy + fsS(), fsS() * 0.85, C.soft, "right");
    text("血管里", W * 0.97, y0 + fsS(), fsS() * 0.85, C.soft, "right");
    // 小而亲油：钻过去
    const sx = W * 0.3, walk = P(L, 0.3, 2.2), dive = P(L, 2.8, 2.4);
    const smX = lerp(-s, sx, walk), smY = dive > 0 ? lerp(y1 - H * 0.01, H * 0.7, dive) : y1 - H * 0.01;
    const inWall = dive > 0.25 && dive < 0.7;
    chara(smX, smY, s * 0.75, DRUG("小·亲油", { walk: walk < 1 || (dive > 0 && dive < 1) ? time * 9 : null, alpha: inWall ? 0.55 : 1, eyes: dive >= 1 ? "happy" : "open", arms: dive >= 1 ? "up" : "down", hatColor: "#ffd27a", shadow: !inWall }));
    if (dive >= 1) sparkles(smX, smY - s * 1.2, s * 1.6, 4, 1, 3);
    // 大而亲水：被挡住
    const bx = W * 0.66, bw2 = P(L, 4.5, 2), bump = P(L, 6.5, 0.5), back = P(L, 7, 1.2);
    const bX = lerp(W + s * 2, bx, bw2), bY = y1 - H * 0.01 + (bump - back) * H * 0.02;
    if (bw2 > 0) chara(bX, bY, s * 1.15, DRUG("大·亲水", { hatColor: "#8fc4ea", walk: bw2 > 0 && bw2 < 1 ? time * 8 : null, dir: -1, eyes: back > 0.3 ? "dizzy" : "open", mouth: back > 0.3 ? "wavy" : "smile", arms: back > 0.3 ? "down" : "fist" }));
    if (L > 6.6 && L < 7.8) sfx("咚！", bx + s * 1.5, y1 - s * 0.5, H * 0.05, C.bad, 0.1, Math.sin(P(L, 6.6, 1.2) * Math.PI));
    if (back > 0.5) Anima.sweat(bX + s * 0.9, bY - s * 2.8, s * 0.3);
    callout("p1w", L > 0.8 && L < 4.8, W * 0.5, (y1 + wy) / 2, W * 0.5, H * 0.66, "内皮细胞紧紧挨着：血脑屏障");
    callout("p1s", L > 5 && L < 12.5, smX + s * 0.4, smY - s * 1.2, W * 0.28, H * 0.95, "小、亲油：直接穿过细胞膜");
    say("p1b", L > 8 && L < 12.5, bX, bY - s * 3.4, W * (n ? 0.62 : 0.72), H * 0.64, "个子太大，挤不进去……", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：代谢和排泄 ----------
  function v2(a) {
    const L = T(2), n = N(), s = csz() * 0.9;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f0", "#f2f6ff"); Anima.petals(6, 0.4, 8);
    const lv = { x: W * 0.3, y: H * 0.55, rx: W * (n ? 0.17 : 0.15), ry: H * 0.17 };
    const kd = { x: W * 0.74, y: H * 0.45, r: H * 0.1 };
    const cup = { x: kd.x, y: H * 0.86, w: W * (n ? 0.18 : 0.12), h: H * 0.1 };
    // 血管
    const path = [[-s, H * 0.3], [lv.x - lv.rx, H * 0.3], [lv.x - lv.rx * 0.6, lv.y], [lv.x + lv.rx * 0.6, lv.y], [lv.x + lv.rx, H * 0.3], [kd.x - kd.r * 0.2, H * 0.3], [kd.x, kd.y], [cup.x, cup.y - cup.h * 0.2]];
    ctx.lineWidth = H * 0.03; ctx.lineJoin = "round"; ctx.strokeStyle = Anima.alpha(C.blood, 0.4);
    ctx.beginPath(); path.slice(0, 7).forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    // 肝脏
    ctx.beginPath(); ctx.ellipse(lv.x, lv.y, lv.rx, lv.ry, -0.1, 0, Math.PI * 2); ctx.fillStyle = "#e8b89a"; ctx.fill(); outline(1.8); ctx.stroke();
    face(lv.x, lv.y + lv.ry * 0.45, lv.ry * 0.25, 1);
    chip("肝脏", lv.x, lv.y - lv.ry - fsS() * 0.2, "#fff", fsS() * 0.9);
    for (let k = 0; k < 3; k++) { const x = lv.x + (k - 1) * lv.rx * 0.45, y = lv.y - lv.ry * 0.1; ctx.save(); ctx.translate(x, y); ctx.rotate(time * (k % 2 ? -2 : 2)); ctx.fillStyle = "#fff4dc"; for (let t = 0; t < 6; t++) { ctx.rotate(Math.PI / 3); rrect(-H * 0.006, -H * 0.03, H * 0.012, H * 0.012, 2); ctx.fill(); } ctx.beginPath(); ctx.arc(0, 0, H * 0.02, 0, Math.PI * 2); ctx.fill(); outline(1); ctx.stroke(); ctx.restore(); }
    // 肾脏 + 尿杯
    ctx.save(); ctx.translate(kd.x, kd.y); ctx.beginPath(); ctx.ellipse(0, 0, kd.r * 0.75, kd.r, 0, 0, Math.PI * 2); ctx.fillStyle = "#d9ccf5"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(-kd.r * 0.85, 0, kd.r * 0.35, 0, Math.PI * 2); ctx.fillStyle = "#f5f0ff"; ctx.fill(); ctx.restore();
    face(kd.x + kd.r * 0.1, kd.y + kd.r * 0.1, kd.r * 0.35, 1);
    chip("肾脏", kd.x + kd.r * 1.4, kd.y - kd.r * 0.5, "#fff", fsS() * 0.9);
    rrect(cup.x - cup.w / 2, cup.y - cup.h / 2, cup.w, cup.h, cup.h * 0.2); ctx.fillStyle = "#fff6c8"; ctx.fill(); outline(1.6); ctx.stroke();
    text("尿", cup.x, cup.y + 1, fsS(), C.ink);
    for (let k = 0; k < 3; k++) { const t = (time * 0.5 + k / 3) % 1; ctx.beginPath(); ctx.arc(kd.x, lerp(kd.y + kd.r, cup.y - cup.h / 2, t), H * 0.008, 0, Math.PI * 2); ctx.fillStyle = Anima.alpha("#e7c84a", 1 - t); ctx.fill(); }
    // 访客们沿着路走
    const vis = P(L, 0.2, 1);
    for (let k = 0; k < 4; k++) {
      const u = ((L * 0.06) + k * 0.25) % 1;
      if (L < k * 2.5) continue;
      const p = polyAt(path, u);
      const inLiver = p.seg === 2, after = p.seg >= 3, down = p.seg === 6;
      if (inLiver) { sparkles(p.x, p.y - s, s * 1.5, 3, 1, k); continue; }
      const al = vis * (down ? 1 - (u - 0.9) * 8 : 1) * clamp(u / 0.04, 0, 1);
      if (al < 0.03) continue;
      chara(p.x, p.y + s * 0.3, s * 0.75, DRUG(after ? "亲水了" : "药", { alpha: clamp(al, 0, 1), walk: time * 9 + k, eyes: after ? "happy" : "open", shadow: false }));
      if (after) { ctx.save(); ctx.globalAlpha *= clamp(al, 0, 1); ctx.beginPath(); ctx.ellipse(p.x, p.y + s * 0.3 - s * 0.85, s * 0.75, s * 0.28, 0, 0, Math.PI * 2); ctx.strokeStyle = C.line; ctx.lineWidth = s * 0.26; ctx.stroke(); ctx.strokeStyle = "#8fd3f0"; ctx.lineWidth = s * 0.18; ctx.stroke(); ctx.restore(); }
    }
    callout("p2l", L > 1 && L < 7, lv.x + lv.rx * 0.5, lv.y + lv.ry * 0.5, W * 0.3, H * 0.93, "代谢：肝脏把药加工得更亲水");
    callout("p2k", L > 7, kd.x - kd.r * 0.5, kd.y + kd.r * 0.6, W * (n ? 0.42 : 0.44), H * 0.93, "排泄：经肾脏随尿排出");
    say("p2s", !n && L > 4.5 && L < 9, lv.x + lv.rx, H * 0.26, W * (n ? 0.4 : 0.52), Anima.topSafe() + H * 0.07, "套上泳圈，更亲水啦～", "say");
    ctx.restore();
  }

  // ---------- 浴缸和浓度曲线（第 4～7 幕共用）----------
  function layout() {
    const n = N(), top = Anima.topSafe() + H * 0.05;
    return { tub: { x: W * 0.05, y: top + H * 0.14, w: W * (n ? 0.3 : 0.3), h: H * 0.42 }, ch: { x0: W * (n ? 0.43 : 0.42), x1: W * 0.96, y0: top + H * 0.02, y1: H * 0.8 } };
  }
  function tub(b, level, inflow, outflow, mood) {
    const wl = b.y + b.h * (1 - clamp(level, 0, 1));
    // 水龙头
    const fx = b.x + b.w * 0.25, fy = b.y - H * 0.1;
    rrect(fx - H * 0.02, fy - H * 0.03, H * 0.09, H * 0.035, H * 0.012); ctx.fillStyle = "#cfd8e3"; ctx.fill(); outline(1.4); ctx.stroke();
    rrect(fx - H * 0.02, fy - H * 0.03, H * 0.03, H * 0.07, H * 0.01); ctx.fill(); ctx.stroke();
    if (inflow > 0.02) { ctx.fillStyle = Anima.alpha(C.water, 0.9); ctx.fillRect(fx - H * 0.012 * inflow, fy + H * 0.04, H * 0.024 * inflow, wl - fy - H * 0.04); }
    // 缸
    ctx.save(); rrect(b.x, b.y, b.w, b.h, b.h * 0.12); ctx.fillStyle = C.tub; ctx.fill(); ctx.clip();
    ctx.fillStyle = C.water; ctx.beginPath(); ctx.moveTo(b.x, b.y + b.h);
    for (let i = 0; i <= 20; i++) ctx.lineTo(b.x + b.w * i / 20, wl + Math.sin(i * 0.9 + time * 3) * H * 0.004);
    ctx.lineTo(b.x + b.w, b.y + b.h); ctx.closePath(); ctx.fill();
    ctx.restore();
    outline(2); rrect(b.x, b.y, b.w, b.h, b.h * 0.12); ctx.stroke();
    face(b.x + b.w / 2, b.y + b.h * 0.3, H * 0.035, mood == null ? 1 : mood);
    // 下水口
    const dx = b.x + b.w * 0.8, dy = b.y + b.h;
    rrect(dx - H * 0.015, dy, H * 0.03, H * 0.03, 3); ctx.fillStyle = "#cfd8e3"; ctx.fill(); outline(1.2); ctx.stroke();
    if (outflow > 0.02) for (let k = 0; k < 4; k++) { const t = (time * 1.2 + k / 4) % 1; ctx.beginPath(); ctx.arc(dx, dy + H * 0.03 + t * H * 0.08, H * 0.008 * (0.5 + outflow), 0, Math.PI * 2); ctx.fillStyle = Anima.alpha(C.waterD, (1 - t) * Math.min(1, outflow * 1.5)); ctx.fill(); }
    return { dx, dy, fx, fy, wl };
  }
  function axes(c, tMax, xl) {
    // 手机：框往上下各放一点，“血药浓度”和横轴名不压在框线上
    const n = N(), f0 = fsS() * 0.8, cTop = c.y0 - (n ? f0 * 1.3 : H * 0.02), cBot = n ? c.y1 + f0 * 3.1 : c.y1 + H * 0.08;
    rrect(c.x0 - W * 0.02, cTop, c.x1 - c.x0 + W * 0.03, cBot - cTop, 14); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    outline(1.4); ctx.beginPath(); ctx.moveTo(c.x0 + W * 0.02, c.y0); ctx.lineTo(c.x0 + W * 0.02, c.y1); ctx.lineTo(c.x1 - W * 0.01, c.y1); ctx.stroke();
    const fs = fsS() * 0.8, X = (t) => lerp(c.x0 + W * 0.02, c.x1 - W * 0.02, t / tMax);
    for (let t = 1; t <= tMax; t++) { outline(1); ctx.beginPath(); ctx.moveTo(X(t), c.y1); ctx.lineTo(X(t), c.y1 + 4); ctx.stroke(); if (!N() || t % 2 === 1 || tMax < 6) text(String(t), X(t), c.y1 + fs * 0.9, fs, C.soft); }
    text(xl || "经过几个半衰期 →", c.x1 - W * 0.02, c.y1 + fs * 2.2, fs, C.soft, "right");
    text("血药浓度", c.x0 + W * 0.025, c.y0 - fs * 0.2, fs, C.soft, "left");
    return X;
  }
  function curve(X, c, f, t0, t1, yMax, col, w, dash) {
    const Y = (v) => lerp(c.y1, c.y0 + H * 0.04, v / yMax);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w || Math.max(2.5, H * 0.007); ctx.lineJoin = "round"; if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    const M = 160;
    for (let i = 0; i <= M; i++) { const t = lerp(t0, t1, i / M); if (i) ctx.lineTo(X(t), Y(f(t))); else ctx.moveTo(X(t), Y(f(t))); }
    ctx.stroke(); ctx.restore();
    return Y;
  }

  // ---------- 第 4 幕：半衰期 ----------
  function v3(a) {
    const L = T(3), n = N(), g = layout();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#fdf1f5"); Anima.petals(5, 0.35, 4);
    const t = clamp((L - 1.6) / 9.5, 0, 1) * 5, fill = P(L, 0.4, 1.2);
    const lvl = L < 1.6 ? fill : Math.pow(0.5, t);
    tub(g.tub, lvl * 0.9, L > 0.4 && L < 1.6 ? 1 : 0, lvl, 1);
    const X = axes(g.ch, 5);
    const f = (x) => Math.pow(0.5, x);
    const Y = curve(X, g.ch, f, 0, Math.max(0.001, t), 1.05, "#e0913a");
    for (let k = 1; k <= Math.floor(t); k++) {
      const x = X(k), y = Y(f(k));
      ctx.save(); ctx.setLineDash([4, 5]); outline(1); ctx.beginPath(); ctx.moveTo(g.ch.x0 + W * 0.02, y); ctx.lineTo(x, y); ctx.lineTo(x, g.ch.y1); ctx.stroke(); ctx.restore();
      ctx.beginPath(); ctx.arc(x, y, H * 0.01, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill(); outline(1); ctx.stroke();
      if (k <= 3) chip(["一半", "1/4", "1/8"][k - 1], x + W * 0.035, y - H * 0.045, "#fff", fsS() * 0.8);
    }
    pv = Math.floor(t) + " 个半衰期"; pv2 = Math.round(lvl * 100) + "%";
    callout("p3h", L > 3 && L < 8, X(0.5), Y(0.75), lerp(g.ch.x0, g.ch.x1, n ? 0.62 : 0.55), g.ch.y0 + H * (n ? 0.075 : 0.1), n ? "半衰期：降到一半" : "半衰期：浓度降到一半的时间");
    say("p3t", L > 0.6 && L < 3.5, g.tub.x + g.tub.w / 2, g.tub.y, g.tub.x + g.tub.w * 0.9, g.tub.y + g.tub.h + H * 0.12, "水位 = 药浓度", "box");
    ctx.restore();
  }

  // ---------- 第 5 幕：稳态 ----------
  function conc(t) { let c = 0; for (let k = 0; k <= Math.floor(t); k++) c += Math.pow(0.5, t - k); return c; }
  function v4(a) {
    const L = T(4), n = N(), g = layout();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#fdf1f5"); Anima.petals(5, 0.35, 4);
    const tMax = 7, t = clamp((L - 0.8) / 10.5, 0, 1) * tMax;
    const X = axes(g.ch, tMax);
    const Yv = (v) => lerp(g.ch.y1, g.ch.y0 + H * 0.04, v / 2.2);
    // 稳态范围
    ctx.fillStyle = Anima.alpha(C.good, 0.14); ctx.fillRect(X(0), Yv(2), X(tMax) - X(0), Yv(1) - Yv(2));
    const b0 = X(4), b1 = X(5);
    ctx.fillStyle = Anima.alpha(C.gold, 0.18); ctx.fillRect(b0, g.ch.y0 + H * 0.02, b1 - b0, g.ch.y1 - g.ch.y0 - H * 0.02);
    text("4～5", (b0 + b1) / 2, g.ch.y0 + H * 0.045, fsS() * 0.8, "#c88600");
    curve(X, g.ch, conc, 0, Math.max(0.001, t), 2.2, "#e0913a");
    const c = conc(t), nd = Math.floor(t) + 1, ph = t - Math.floor(t);
    tub(g.tub, c / 2.3, ph < 0.12 ? 1 : 0, c / 2, 1);
    pv = "第 " + nd + " 次"; pv2 = nd >= 6 ? "≈ 稳态" : Math.round((1 - Math.pow(0.5, nd)) * 100) + "%";
    callout("p4s", L > 7.8, X(6), Yv(1.5), X(5.2), g.ch.y1 - H * 0.05, "稳态：进来的 = 出去的");
    say("p4d", L > 1.5 && L < 6.5, g.tub.x + g.tub.w * 0.8, g.tub.y + g.tub.h, g.tub.x + g.tub.w * 0.6, g.tub.y + g.tub.h + H * 0.14, "水位高，排得快～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：停药，短半衰期 vs 长半衰期 ----------
  function v5(a) {
    const L = T(5), n = N(), g = layout(), s = csz() * (n ? 0.85 : 1);
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#fdf1f5"); Anima.petals(5, 0.35, 4);
    // 图：以短半衰期药的半衰期为单位
    const tMax = 6, t = clamp((L - 1) / 8, 0, 1) * tMax;
    const X = axes(g.ch, tMax, "时间 →");
    const shortF = (x) => (x < 0.5 ? 1 : Math.pow(0.5, x - 0.5)), longF = (x) => (x < 0.5 ? 1 : Math.pow(0.5, (x - 0.5) / 5));
    curve(X, g.ch, longF, 0, Math.max(0.001, t), 1.1, "#4f8fc9");
    const Y = curve(X, g.ch, shortF, 0, Math.max(0.001, t), 1.1, "#e8637a");
    outline(1); ctx.save(); ctx.setLineDash([4, 5]); ctx.beginPath(); ctx.moveTo(X(0.5), g.ch.y0 + H * 0.03); ctx.lineTo(X(0.5), g.ch.y1); ctx.stroke(); ctx.restore();
    text("停药", X(0.5), n ? g.ch.y1 + fsS() * 0.8 * 2.2 : g.ch.y0 + H * 0.02, fsS() * 0.8, C.bad);
    if (t > 5) { const x = X(5), y = Y(shortF(5)); ctx.beginPath(); ctx.arc(x, y, H * 0.01, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill(); outline(1); ctx.stroke(); }
    const sl = shortF(t), ll = longF(t);
    tub(g.tub, lerp(sl, ll, 0) * 0.85, 0, t > 0.5 ? sl : 0, t > 1.5 ? 0 : 1);
    // 两位访客
    const cy = g.tub.y + g.tub.h + H * (n ? 0.155 : 0.22);
    chara(g.tub.x + g.tub.w * 0.2, cy, s, DRUG("帕罗西汀", { hatColor: "#ff9aa9", eyes: t > 1.2 ? "wide" : "open", mouth: t > 1.2 ? "wavy" : "smile", arms: t > 1.2 ? "down" : "wave" }));
    chara(g.tub.x + g.tub.w * 0.8, cy, s, DRUG("氟西汀", { hatColor: "#8fc4ea", eyes: "happy" }));
    if (t > 1.2) Anima.sweat(g.tub.x + g.tub.w * 0.2 + s, cy - s * 2.8, s * 0.3);
    ctx.fillStyle = "#e8637a"; ctx.fillRect(g.tub.x + g.tub.w * 0.2 - s, cy + s * 0.9, s * 2, 3);
    ctx.fillStyle = "#4f8fc9"; ctx.fillRect(g.tub.x + g.tub.w * 0.8 - s, cy + s * 0.9, s * 2, 3);
    callout("p5c", L > (n ? 9.5 : 7.5), X(5), Y(shortF(5)), X(4.2), g.ch.y0 + H * 0.08, "约 4～5 个半衰期：基本清除");
    callout("p5s", L > 2.5 && L < (n ? 6 : 7.5), X(1.6), Y(shortF(1.6)), X(2.6), g.ch.y0 + H * 0.2, "半衰期短：掉得快");
    callout("p5l", n ? L > 6 && L < 9.5 : L > 4.5, X(3.2), Y(longF(3.2)), X(3.4), n ? g.ch.y0 + H * 0.12 : g.ch.y1 - H * 0.06, "半衰期长：慢慢往下走");
    ctx.restore();
  }

  // ---------- 第 7 幕：长效针剂 ----------
  function v6(a) {
    const L = T(6), n = N(), g = layout();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#fdf1f5"); Anima.petals(5, 0.35, 4);
    const tMax = 8, t = clamp((L - 0.8) / 10, 0, 1) * tMax;
    const X = axes(g.ch, tMax, "时间 →");
    const oral = (x) => conc(x + 5) / 2.2 * 1.9;
    const lai = (x) => 1.3 + 0.12 * Math.sin(x * 0.8);
    curve(X, g.ch, oral, 0, tMax, 2.3, Anima.alpha("#e0913a", 0.45), Math.max(1.5, H * 0.004), [5, 5]);
    curve(X, g.ch, lai, 0, Math.max(0.001, t), 2.3, "#6b61c9");
    const lvl = lai(t) / 2.3;
    const b = tub(g.tub, lvl, 0, lvl, 1);
    // 小仓库：在肌肉里慢慢漏药
    const wx = g.tub.x + g.tub.w * 0.25, wy = g.tub.y - H * 0.13, ww = H * 0.11;
    ctx.fillStyle = "#ffe0c4"; ctx.beginPath(); ctx.moveTo(wx - ww / 2, wy); ctx.lineTo(wx, wy - ww * 0.45); ctx.lineTo(wx + ww / 2, wy); ctx.closePath(); ctx.fill(); outline(1.4); ctx.stroke();
    rrect(wx - ww / 2, wy, ww, ww * 0.6, 4); ctx.fillStyle = "#fff4e4"; ctx.fill(); ctx.stroke();
    face(wx, wy + ww * 0.3, ww * 0.18, 1);
    for (let k = 0; k < 3; k++) { const tt = (time * 0.6 + k / 3) % 1; ctx.beginPath(); ctx.arc(wx, lerp(wy + ww * 0.6, b.wl, tt), H * 0.008, 0, Math.PI * 2); ctx.fillStyle = Anima.alpha("#ffc94d", 1 - tt * 0.5); ctx.fill(); }
    const lf = fsS() * 0.8, ly = g.ch.y1 + lf * (n ? 4.1 : 3.4);
    ctx.fillStyle = "#6b61c9"; ctx.fillRect(g.ch.x0, ly - 2, lf * 1.4, 4); text("长效针剂", g.ch.x0 + lf * 1.7, ly, lf, C.ink, "left");
    ctx.fillStyle = Anima.alpha("#e0913a", 0.6); ctx.fillRect(g.ch.x0 + lf * 7, ly - 2, lf * 1.4, 4); text("每天口服", g.ch.x0 + lf * 8.7, ly, lf, C.ink, "left");
    callout("p6w", L > 1 && L < 6.5, wx + ww * 0.4, wy, g.tub.x + g.tub.w + W * 0.12, Anima.topSafe() + H * 0.04, "注射在肌肉里的小仓库");
    callout("p6c", L > 7, X(6), g.ch.y1 - (g.ch.y1 - g.ch.y0) * 0.55, X(5), g.ch.y1 - H * 0.15, "慢慢释放：起伏更平缓");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    pv = null; pv2 = null;
    [v0, v1, v2, v3, v4, v5, v6].forEach((f, i) => { const a = S["v" + i]; if (a > 0.02) { const k = pv, k2 = pv2; f(a); if (i !== cur) { pv = k; pv2 = k2; } } });
    const c = CH[cur];
    pill(14, 12, c.pill[0], pv || c.pill[1], "#3f9fcf", false);
    pill(W - 14, 12, c.pill2[0], pv2 || c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: 13, accent: "#3f9fcf",
    titleCard: { lines: ["药在身体里的旅程：", "半衰期和稳态"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update() {}, draw,
  };
});
