Anima.register("receptor-regulation", {
    "title": "门变多还是变少：受体的上调和下调",
    "tag": "基础篇",
    "headline": "药吃久了，受体的门会【变多】还是【变少】？",
    "lede": "受体不是装好就不变的门。信太多，细胞会先挂上“暂停营业”，再把门收进屋、少造新门；信太少，它会多装几扇、调得更灵。耐受、撤药反跳，还有“慢慢加、慢慢减”的道理，都藏在这里。",
    "summary": "受体磷酸化和 β-抑制蛋白造成的脱敏、内化、长期下调和上调，以及它们怎样解释耐受、撤药反跳和逐步加减药。",
    "chapter": "对应 Stahl《精神药理学精要》第 2 章 · 受体的适应",
    "footer": "加药、减药和停药都请和医生商量，不要自己突然停药。",
    "canvasLabel": "受体被盖章、挂上暂停营业牌子、被收进细胞里，以及细胞多装新受体的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["DA", "GABA", "neuron", "drug"],
    "color": "#8fc4ea"
  }, () => {
  const CH = [
    { title: "信太多：先按暂停", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["递质", "太多 ↑↑"], pill2: ["受体", "暂停营业"],
      text: "受体不是一成不变的。如果递质或开门的药长时间太多，门一直被按着，细胞会先踩一脚刹车：一位叫 GRK 的激酶在门的里侧盖上磷酸“印章”，接着 β-抑制蛋白贴上来，像挂上“暂停营业”的牌子。钥匙还插在锁里，门却不再把信号往里传了。这叫脱敏，几秒到几分钟就能发生。",
      fact: "脱敏：受体被磷酸化、β-抑制蛋白贴上后，和 G 蛋白“断开”" },
    { title: "内化：门被收进屋里", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["膜上的门", "5 扇"], pill2: ["去向", "回收或拆掉"],
      text: "挂了牌子的门，接着会被细胞膜包成一个小泡，拉进细胞里面，这叫内化。进了屋的门有两条路：如果刺激很快停了，它们被擦干净，送回膜上重新营业；如果刺激一直不停，一部分会被送到溶酶体拆掉。膜上能用的门，就这样一扇扇少了下来。",
      fact: "内化后的受体可以被送回膜上（复敏），也可以被降解" },
    { title: "长期太多：下调和耐受", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["受体", "6 扇"], pill2: ["时间", "开始"],
      text: "刺激持续几天到几周，细胞干脆少造新门，受体总数越来越少，这就是下调。结果是：同样多的药，能打开的门少了，效果越来越弱，这是耐受的重要原因之一。想要同样的效果，就得更多的药，而更多的药又让门继续变少。苯二氮䓬类药物用久了容易耐受，也和这类适应有关。",
      fact: "下调：受体数量减少；耐受：同样的量，效果变弱" },
    { title: "信太少：上调、变灵敏", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["受体", "4 扇"], pill2: ["灵敏度", "正常"],
      text: "反过来，如果递质长期太少，或者门一直被挡门的药占着，细胞收不到信，就会想办法多开几扇门：造出更多受体送到膜上，有的门还变得更灵敏，这叫上调。长期挡住多巴胺 D2 受体以后，门变多、变灵，就是《停不下来的小动作》里迟发性运动障碍的一种解释。",
      fact: "上调：受体变多、变灵敏，是细胞对“信太少”的代偿" },
    { title: "突然停药：反跳", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["停药", "太突然"], pill2: ["结果", "反跳"],
      text: "调好的平衡，最怕被突然打破。左边：长期挡门的药突然停掉，那些变多、变灵的门一下子全露出来，平常的递质就能引起过强的信号。右边：长期开门的药突然停掉，门已经变少、变迟钝，天然递质不够用，信号一下子太弱，比如苯二氮䓬突然停用后，焦虑和失眠可能反弹。这些都属于撤药反应。",
      fact: "撤药反跳：药走得太快，适应过的受体来不及调回来" },
    { title: "慢慢加，慢慢减", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["加减药", "慢慢来"], pill2: ["原因", "给门时间"],
      text: "受体调整要花时间，常常是几天到几周。所以很多药从小量开始慢慢加，让门有时间适应；停药时也要慢慢减，让门一步一步调回来，不至于一下子失衡。抗抑郁药让一些 5-HT 受体下调、长期阻断 D2 后的超敏、苯二氮䓬的耐受，都是这个道理。怎么加、怎么减，请和医生商量，不要自己突然停药。",
      fact: "药量变得慢一点，受体就跟得上：这就是“慢慢加、慢慢减”" },
  ];

  const C = Object.assign({}, Anima.C, { out: "#eef7fb", cell: "#fff6ee", mem: "#f7c6d3", rec: "#f7a8c0", recG: "#aac6ea", lyso: "#e9dcff" });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const N = () => Anima.narrow;
  const T = (k) => (cur === k ? Anima.sceneTime : 99);
  const P = (L, t0, d) => ease((L - t0) / d);
  const fsS = () => Math.max(10, H * 0.03) * Anima.UI;
  const csz = () => H * (N() ? 0.05 : 0.052);
  const RS = () => H * (N() ? 0.052 : 0.056);
  let pv = null, pv2 = null; // 本帧动态胶囊数值

  function bg(mem, x0, x1) {
    x0 = x0 || 0; x1 = x1 == null ? W : x1;
    const mt = H * 0.035;
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#f3faff"); g.addColorStop(clamp(mem / H, 0, 1), C.out);
    g.addColorStop(clamp(mem / H + 0.01, 0, 1), C.cell); g.addColorStop(1, "#fdeff4");
    ctx.fillStyle = g; ctx.fillRect(x0, 0, x1 - x0, H);
    ctx.fillStyle = C.mem; ctx.fillRect(x0, mem - mt / 2, x1 - x0, mt);
    outline(1.6); ctx.beginPath(); ctx.moveTo(x0, mem - mt / 2); ctx.lineTo(x1, mem - mt / 2); ctx.moveTo(x0, mem + mt / 2); ctx.lineTo(x1, mem + mt / 2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    const st = Math.max(8, H * 0.024);
    for (let x = x0 + st / 2; x < x1; x += st) for (const yy of [mem - mt * 0.25, mem + mt * 0.25]) { ctx.beginPath(); ctx.arc(x, yy, Math.max(1.5, H * 0.006), 0, Math.PI * 2); ctx.fill(); }
  }
  function door(x, mem, s, act, o) {
    o = o || {};
    const a = o.a == null ? 1 : o.a;
    if (a < 0.02) return { site: { x, y: mem - s * 1.62 } };
    ctx.save(); ctx.globalAlpha *= a;
    if (o.hot) glow(x, mem - s, s * 2.2, C.rose, o.hot * (0.5 + 0.3 * Math.sin(time * 4)));
    const r = Anima.receptor(x, mem + (o.dy || 0), s, o.color || C.rec, act, {});
    if (o.p) pBadge(x + s * 0.55, mem + s * 0.45 + (o.dy || 0), s * 0.26, o.p);
    if (o.sign) sign(x, mem + s * 1.25 + (o.dy || 0), s, o.sign);
    ctx.restore();
    return r;
  }
  function pBadge(x, y, r, a) {
    if (a < 0.03) return;
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * 2.2, C.gold, 0.8);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffe36e"; ctx.fill(); outline(1.1); ctx.stroke();
    if (r > 5) text("P", x, y + 1, r * 1.3, C.ink);
    ctx.restore();
  }
  // “暂停营业”小木牌
  function sign(x, y, s, a) {
    if (a < 0.03) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(Math.sin(time * 2 + x) * 0.05);
    const fs = Math.max(8, s * 0.36) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText("暂停").width + fs * 0.8;
    outline(1); ctx.beginPath(); ctx.moveTo(-w * 0.3, -fs * 0.7); ctx.lineTo(0, -fs * 1.3); ctx.lineTo(w * 0.3, -fs * 0.7); ctx.stroke();
    rrect(-w / 2, -fs * 0.7, w, fs * 1.4, fs * 0.3); ctx.fillStyle = "#fff4c2"; ctx.fill(); outline(1.2); ctx.stroke();
    text("暂停", 0, 1, fs, C.bad);
    ctx.restore();
  }
  function meter(x0, x1, y, v, lo, hi, label) {
    const h = Math.max(12, H * 0.03), fs = fsS() * 0.9;
    rrect(x0, y, x1 - x0, h, h / 2); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.fillStyle = Anima.alpha(C.good, 0.2); ctx.fillRect(lerp(x0, x1, lo), y + 2, (hi - lo) * (x1 - x0), h - 4);
    const bad = v > hi + 0.03 || v < lo - 0.03;
    const w = (x1 - x0 - 4) * clamp(v, 0, 1);
    if (w > 2) { rrect(x0 + 2, y + 2, w, h - 4, (h - 4) / 2); ctx.fillStyle = bad ? C.bad : C.good; ctx.fill(); }
    text(label, x0, y - fs * 0.9, fs, C.ink, "left");
  }
  const drug = (label, c1, c2) => ({ who: "drug", tag: label, hatColor: c1, hatColor2: c2 || "#ffffff" });

  // ---------- 第 1 幕：脱敏 ----------
  function v0(a) {
    const L = T(0), n = N(), s = csz(), rs = RS(), mem = H * (n ? 0.5 : 0.47);
    ctx.save(); ctx.globalAlpha *= a;
    bg(mem); Anima.petals(5, 0.35, 3);
    const XS = [0.14, 0.32, 0.5, 0.68, 0.86].map((f) => W * f);
    const gx = lerp(-s * 2, W + s * 2, P(L, 2.2, 4.5)), bx = lerp(-s * 2, W + s * 2, P(L, 5, 4.5));
    XS.forEach((x, i) => {
      const p = gx > x ? P(gx - x, 0, s) : 0, sg = bx > x ? 1 : 0;
      const sgA = bx > x ? clamp((bx - x) / (s * 2), 0, 1) : 0;
      const r = door(x, mem, rs, 1 - sgA * 0.85, { p, sign: sgA });
      chara(x, r.site.y, s, { who: "DA", eyes: sg ? "wide" : "happy", mouth: sg ? "o" : "grin", arms: sg ? "down" : "up" });
      if (sg && L < 12) emote("?", x + s, r.site.y - s * 3.3, s * 0.6, sgA);
    });
    // 天上还在不停掉下来的递质：信太多了
    for (let k = 0; k < 4; k++) {
      const t = (time * 0.25 + k / 4) % 1;
      chara(W * (0.23 + k * 0.18), lerp(Anima.topSafe() + s * 2, mem - rs * 1.4, t) , s * 0.75, { who: "DA", item: "letter", arms: "hold", alpha: Math.sin(t * Math.PI) * 0.8, shadow: false });
    }
    const fy = mem + H * (n ? 0.3 : 0.28);
    const gp = P(L, 2.2, 4.5), bp = P(L, 5, 4.5);
    if (gp > 0 && gp < 1) chara(gx, fy, s, { who: "neuron", tag: "GRK", hat: "cap", label: "GRK", hair: "#8f6fd0", cloth: "#fff1b8", hatColor: "#c9b8f5", walk: time * 9, arms: "hold", eyes: "happy" });
    if (gp > 0 && gp < 1) pBadge(gx + s * 0.1, fy - s * 0.9, s * 0.28, 1);
    if (bp > 0 && bp < 1) chara(bx, fy, s, { who: "neuron", tag: "β-抑制蛋白", hat: "beret", hair: "#e8739a", cloth: "#ffe1ea", hatColor: "#ff9fb3", walk: time * 9, arms: "carry", eyes: "open" });
    face(W * 0.5, H * 0.92, H * 0.04, L > 9 ? 0 : -1);
    if (L < 5) { Anima.sweat(W * 0.5 + H * 0.05, H * 0.88, H * 0.02); }
    callout("r0g", L > 3.4 && L < 6.8, gx, fy - s * 2.6, W * 0.3, H * (n ? 0.94 : 0.95), "GRK：给门里侧盖上磷酸章");
    callout("r0b", L > 7.5, XS[2] - rs * 0.5, mem + rs * 1.4, W * 0.72, H * 0.94, "β-抑制蛋白：挂上“暂停营业”");
    say("r0s", L > 0.4 && L < 2.6, W * 0.5, H * 0.88, W * 0.24, H * 0.82, "信太多啦，吵死了～", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：内化 ----------
  function v1(a) {
    const L = T(1), n = N(), s = csz(), rs = RS(), mem = H * (n ? 0.44 : 0.4);
    ctx.save(); ctx.globalAlpha *= a;
    bg(mem); Anima.petals(5, 0.35, 3);
    const XS = [0.12, 0.3, 0.48, 0.66, 0.84].map((f) => W * f);
    const ly = { x: W * (n ? 0.8 : 0.82), y: H * 0.84, r: H * 0.09 };
    ctx.beginPath(); ctx.arc(ly.x, ly.y, ly.r, 0, Math.PI * 2); ctx.fillStyle = C.lyso; ctx.fill(); outline(1.6); ctx.stroke();
    face(ly.x, ly.y - ly.r * 0.2, ly.r * 0.4, 1);
    text("溶酶体（拆解站）", ly.x, ly.y + ly.r * 0.45, fsS() * 0.8, C.ink);
    let count = 0;
    XS.forEach((x, i) => {
      const inn = i >= 1 && i <= 3, sink = inn ? P(L, 1 + (i - 1) * 0.6, 2) : 0;
      const back = i === 1 ? P(L, 5.5, 2.5) : 0, go = i > 1 && inn ? P(L, 5.5 + (i - 2) * 0.6, 3) : 0;
      let vx = x, vy = mem + sink * H * 0.24;
      if (back > 0) vy = lerp(mem + H * 0.24, mem, back);
      if (go > 0) { vx = lerp(x, ly.x, go); vy = lerp(mem + H * 0.24, ly.y, go); }
      const onMem = !inn || back >= 1;
      if (onMem) count++;
      const signA = i === 1 ? 1 - P(L, 4, 1.2) : 1 - go;
      const al = 1 - P(L, 7.5 + (i - 2) * 0.6, 1.2) * (go > 0 ? 1 : 0);
      if (inn && sink > 0.05 && back < 1) { // 小泡
        ctx.save(); ctx.globalAlpha *= al * Math.min(1, sink * 3);
        ctx.beginPath(); ctx.arc(vx, vy - rs * 0.3, rs * 1.9, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,230,238,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
        ctx.restore();
      }
      const r = door(vx, vy, rs * (go > 0 ? 1 - go * 0.4 : 1), onMem && i === 1 ? 0.6 + 0.3 * Math.sin(time * 3) : 0.1, { a: al, sign: signA, p: signA });
      if (i === 1 && back >= 1) sparkles(x, mem - rs, rs * 2, 4, 1, 3);
      const leave = inn ? P(L, 1, 1.5) : 0;
      if (leave < 1) chara(x + leave * W * 0.05, r.site.y - (inn ? leave * H * 0.12 : 0), s, { who: "DA", eyes: inn && leave > 0 ? "happy" : "open", arms: inn && leave > 0 ? "wave" : "down", alpha: 1 - leave });
    });
    pv = count + " 扇";
    callout("r1i", L > 1.5 && L < 5.2, XS[2], mem + H * 0.18, W * 0.3, H * 0.93, "内化：门被包进小泡，收进屋里");
    callout("r1b", L > 6.5 && L < 10.5, XS[1] + rs, mem - rs, W * (n ? 0.5 : 0.36), mem - H * 0.2, "擦干净，送回膜上：复敏");
    callout("r1l", L > 9, ly.x - ly.r * 0.7, ly.y - ly.r * 0.7, W * 0.52, H * 0.66, "刺激不停：送去拆掉");
    ctx.restore();
  }

  // ---------- 第 3 幕：下调和耐受 ----------
  function v2(a) {
    const L = T(2), n = N(), s = csz() * 0.95, rs = RS() * 0.95, mem = H * (n ? 0.48 : 0.46);
    ctx.save(); ctx.globalAlpha *= a;
    bg(mem); Anima.petals(5, 0.35, 3);
    const XS = [0.1, 0.25, 0.4, 0.55, 0.7, 0.85].map((f) => W * f);
    let open = 0;
    XS.forEach((x, i) => {
      const gone = i >= 3 ? P(L, 1.5 + (5 - i) * 1.6, 1.6) : 0;
      const r = door(x, mem + gone * rs * 2, rs, gone > 0.5 ? 0 : 1, { a: 1 - gone });
      if (gone < 0.5) open++;
      // 同样多的药：每扇门前一位开门药访客
      const lost = gone > 0.5;
      const vx = lost ? x + Math.sin(time * 1.2 + i) * W * 0.02 : x, vy = lost ? mem - rs * 0.6 - H * 0.06 : r.site.y;
      chara(vx, vy, s, Object.assign(drug("开门药", "#ff9aa9"), { eyes: lost ? "open" : "happy", mouth: lost ? "wavy" : "smile", arms: lost ? "down" : "up", walk: lost ? time * 6 : null }));
      if (lost) emote("?", vx + s, vy - s * 3.3, s * 0.6);
    });
    pv = open + " 扇"; pv2 = L < 1.5 ? "开始" : "几周后";
    const my = H * 0.86;
    meter(W * 0.1, W * (n ? 0.62 : 0.5), my, open / 6 * 0.75, 0.45, 0.8, "效果");
    face(W * (n ? 0.82 : 0.72), my, H * 0.045, open > 4 ? 1 : 0);
    callout("r2d", L > 3 && L < 8.5, XS[4], mem + rs * 0.6, W * 0.72, mem + H * 0.12, "下调：新门越造越少");
    callout("r2t", L > 8.5, W * 0.3, my, W * (n ? 0.5 : 0.62), mem + H * 0.12, "耐受：同样的量，效果变弱");
    say("r2q", L > 6 && L < 10, XS[5], mem - H * 0.2, W * 0.66, Anima.topSafe() + H * 0.08, "我的门呢？", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：上调 ----------
  function v3(a) {
    const L = T(3), n = N(), s = csz() * 0.95, rs = RS() * 0.95, mem = H * (n ? 0.46 : 0.44);
    ctx.save(); ctx.globalAlpha *= a;
    bg(mem); Anima.petals(5, 0.35, 3);
    const OLD = [0.1, 0.36, 0.62, 0.88], NEW = [0.23, 0.49, 0.75];
    const sens = P(L, 8.5, 1.5);
    OLD.forEach((f, i) => {
      const r = door(W * f, mem, rs, 0.05, { hot: sens });
      chara(W * f, r.site.y, s, Object.assign(drug("挡门药", "#9fb7e8", "#e8eefc"), { eyes: "closed", mouth: "flat", arms: "shh" }));
    });
    let cnt = 4;
    NEW.forEach((f, i) => {
      const t0 = 2 + i * 2, up = P(L, t0 + 1.2, 0.8);
      if (up > 0) cnt++;
      door(W * f, mem + (1 - up) * rs * 2.5, rs, 0.15, { a: up, hot: sens, color: "#f9b8cc" });
      if (up > 0.5 && L < t0 + 3) sparkles(W * f, mem - rs, rs * 2, 4, 1, i * 5);
    });
    // 搬新门的工人
    const k = clamp(Math.floor((L - 2) / 2), 0, 2), lk = (L - 2) - k * 2, wx = W * NEW[k];
    const wa = L > 2 && L < 8 ? 1 : 0;
    if (wa) {
      const py = lerp(H * 0.98, mem + H * 0.22, ease(lk / 1.2));
      chara(wx, py, s, { who: "neuron", arms: "carry", eyes: "happy", mouth: "grin", walk: lk < 1.2 ? time * 9 : null, hat: "helmet", hatColor: "#ffd27a" });
      if (lk < 1.2) { ctx.save(); ctx.translate(0, 0); Anima.receptor(wx, py - s * 3.4, s * 0.55, "#f9b8cc", 0, {}); ctx.restore(); }
    }
    // 在门外进不去的递质
    for (let i = 0; i < 3; i++) {
      const x = W * (0.2 + i * 0.3) + Math.sin(time + i) * W * 0.03;
      chara(x, mem - H * (n ? 0.16 : 0.18), s * 0.8, { who: "DA", item: "letter", arms: "hold", eyes: "teary", mouth: "sad", walk: time * 5 + i, shadow: false });
    }
    pv = cnt + " 扇"; pv2 = sens > 0.5 ? "变高 ↑" : "正常";
    face(W * 0.5, H * 0.92, H * 0.04, L > 8 ? 1 : -1);
    callout("r3u", L > 3.5 && L < 8.5, W * NEW[1], mem + rs * 0.5, W * 0.3, H * 0.93, "上调：多装几扇门");
    callout("r3s", L > 9, W * NEW[2], mem - rs * 1.2, W * 0.7, H * 0.93, "每扇门还更灵敏");
    say("r3w", L > 2.4 && L < 6, wx, mem + H * 0.12, W * (n ? 0.62 : 0.7), mem + H * 0.26, "收不到信？多装几扇门～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：突然停药 ----------
  function v4(a) {
    const L = T(4), n = N(), mem = H * (n ? 0.5 : 0.48), s = csz() * (n ? 0.7 : 0.75), rs = RS() * (n ? 0.62 : 0.7);
    ctx.save(); ctx.globalAlpha *= a;
    const stop = P(L, 2.5, 1.2), flood = P(L, 3.8, 1.6);
    [0, 1].forEach((side) => {
      const x0 = side * W / 2, x1 = x0 + W / 2;
      ctx.save(); ctx.beginPath(); ctx.rect(x0, 0, W / 2, H); ctx.clip();
      bg(mem, x0, x1);
      const cx = x0 + W / 4;
      const XS = side === 0 ? [0.08, 0.2, 0.32, 0.44, 0.56, 0.68, 0.8, 0.92] : [0.2, 0.5, 0.8];
      XS.forEach((f, i) => {
        const x = x0 + f * W / 2;
        const act = side === 0 ? (L < 2.5 ? 0.05 : flood) : (L < 2.5 ? 0.9 : (i === 1 ? 0.35 * flood : 0));
        const r = door(x, mem, rs, act, { hot: side === 0 ? flood : 0 });
        if (stop < 1) chara(x, r.site.y - stop * H * 0.3, s, Object.assign(side === 0 ? drug(n && i !== (side === 0 ? 3 : 1) ? null : "挡门药", "#9fb7e8", "#e8eefc") : drug(n && i !== 1 ? null : "开门药", "#ff9aa9"), { alpha: 1 - stop, eyes: stop > 0 ? "happy" : "closed", arms: stop > 0 ? "wave" : side === 0 ? "shh" : "up", shadow: false }));
        if (side === 0 && flood > 0) chara(x, lerp(Anima.topSafe() + s * 3, r.site.y, flood), s, { who: "DA", eyes: "sparkle", arms: "up", alpha: flood });
        if (side === 1 && i === 1 && flood > 0) chara(x, lerp(Anima.topSafe() + s * 3, r.site.y, flood), s, { who: "GABA", eyes: "open", mouth: "wavy", alpha: flood });
      });
      if (L > 2.5 && L < 3.8) sfx("咻——", cx, mem - H * 0.26, H * 0.045, C.warn, -0.1, Math.sin(stop * Math.PI));
      const v = side === 0 ? lerp(0.5, 0.96, flood) : lerp(0.55, 0.12, stop);
      meter(x0 + W * 0.05, x1 - W * 0.05, H * 0.86, v, 0.35, 0.7, "信号强度");
      const bad = L > 4.5;
      face(cx, mem + H * 0.18, H * 0.045, bad ? -1 : 0);
      if (bad) emote(side === 0 ? "anger" : "gloom", cx + H * 0.06, mem + H * 0.12, H * 0.03);
      ctx.restore();
    });
    ctx.save(); outline(2); ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke(); ctx.restore();
    const fs = fsS() * (n ? 0.85 : 1), ty = Anima.topSafe() + fs;
    ctxChip("挡门药突然停", W * 0.25, ty, "#e8eefc", fs);
    ctxChip("开门药突然停", W * 0.75, ty, "#ffe1ea", fs);
    callout("r4l", L > 5 && L < 12.5, W * 0.25, mem - rs * 1.8, W * 0.25, mem + H * 0.24, n ? "门多又灵：信号过强" : "门多又灵，一下子全露出来");
    callout("r4r", L > 6 && L < 12.5, W * 0.75, mem - rs, W * 0.75, mem + H * 0.24, n ? "门少又钝：信号太弱" : "门少又钝，信号一下子不够");
    ctx.restore();
  }
  function ctxChip(t, x, y, col, fs) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1;
    rrect(x - w / 2, y - fs * 0.75, w, fs * 1.5, fs * 0.75); ctx.fillStyle = col; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }

  // ---------- 第 6 幕：慢慢加，慢慢减 ----------
  function v5(a) {
    const L = T(5), n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7fbff", "#fdf1f5"); Anima.petals(8, 0.5, 20);
    const top = Anima.topSafe() + H * 0.07, bot = H * (n ? 0.6 : 0.64), gap = W * 0.04, cw = (W - gap * 3) / 2;
    const rev = clamp((L - 0.5) / 5, 0, 1);
    [["突然停", 0], ["慢慢减", 1]].forEach((c, k) => {
      const x0 = gap + k * (cw + gap), x1 = x0 + cw;
      rrect(x0, top, cw, bot - top, 16); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.8); ctx.stroke();
      ctxChip(c[0], (x0 + x1) / 2, top, k ? "#d4f5e6" : "#ffdfe3", fsS());
      const px0 = x0 + cw * 0.08, px1 = x1 - cw * 0.06, py0 = top + (bot - top) * 0.22, py1 = bot - (bot - top) * 0.1;
      const dose = (t) => k ? (t < 0.15 ? 1 : t > 0.85 ? 0 : 1 - Math.ceil((t - 0.15) / 0.7 * 4) / 4) : (t < 0.3 ? 1 : 0);
      const M = 80, d = [], r = []; let rv = 1;
      for (let i = 0; i <= M; i++) { const t = i / M; d.push(dose(t)); rv += (d[i] - rv) * 0.06; r.push(rv); }
      const X = (i) => lerp(px0, px1, i / M), Y = (v) => lerp(py1, py0, v);
      const m = Math.round(M * rev);
      // 差距（失衡）
      ctx.beginPath(); for (let i = 0; i <= m; i++) ctx.lineTo(X(i), Y(d[i])); for (let i = m; i >= 0; i--) ctx.lineTo(X(i), Y(r[i]));
      ctx.fillStyle = Anima.alpha(C.bad, 0.25); ctx.fill();
      for (const [arr, col] of [[d, "#e0913a"], [r, "#6b61c9"]]) {
        ctx.strokeStyle = col; ctx.lineWidth = Math.max(2.5, H * 0.007); ctx.lineJoin = "round"; ctx.beginPath();
        for (let i = 0; i <= m; i++) { if (i) ctx.lineTo(X(i), Y(arr[i])); else ctx.moveTo(X(i), Y(arr[i])); }
        ctx.stroke();
      }
      outline(1.4); ctx.beginPath(); ctx.moveTo(px0, py0 - 6); ctx.lineTo(px0, py1); ctx.lineTo(px1, py1); ctx.stroke();
      text("时间 →", px1, py1 + fsS() * 0.8, fsS() * 0.8, C.soft, "right");
    });
    // 图例
    const lf = fsS() * 0.85, ly = bot + lf * 1.4;
    ctx.fillStyle = "#e0913a"; ctx.fillRect(W * 0.2 - lf * 2, ly - 2, lf * 1.4, 4); text("药量", W * 0.2 - lf * 0.3, ly, lf, C.ink, "left");
    ctx.fillStyle = "#6b61c9"; ctx.fillRect(W * 0.45 - lf * 2, ly - 2, lf * 1.4, 4); text("受体的适应", W * 0.45 - lf * 0.3, ly, lf, C.ink, "left");
    ctx.fillStyle = Anima.alpha(C.bad, 0.35); ctx.fillRect(W * (n ? 0.78 : 0.72) - lf * 2, ly - lf * 0.4, lf * 1.4, lf * 0.8); text("失衡", W * (n ? 0.78 : 0.72) - lf * 0.3, ly, lf, C.ink, "left");
    const ex = ["抗抑郁药：一些 5-HT 受体下调", "长期阻断 D2：门变多变灵", "苯二氮䓬：用久了耐受"];
    const cy0 = ly + lf * 2.2, dy = (H - 8 - cy0) / 3;
    ex.forEach((t, i) => { const e = P(L, 7 + i * 1.2, 0.8); if (e > 0.02) { ctx.save(); ctx.globalAlpha *= e; ctxChip(t, W * 0.5, cy0 + dy * (i + 0.4), "#fff", fsS() * 0.9); ctx.restore(); } });
    callout("r5a", L > 3 && L < 7, gap + cw * 0.4, lerp(bot, top, 0.35), gap + cw * 0.64, top + (bot - top) * 0.36, "差距大：反跳");
    callout("r5b", L > 4 && L < 7, W - gap - cw * 0.5, lerp(bot, top, 0.5), W - gap - cw * 0.3, top + (bot - top) * 0.36, "一步步跟上");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    pv = null; pv2 = null;
    [v0, v1, v2, v3, v4, v5].forEach((f, i) => { const a = S["v" + i]; if (a > 0.02) { const k = pv, k2 = pv2; f(a); if (i !== cur) { pv = k; pv2 = k2; } } });
    const c = CH[cur];
    pill(14, 12, c.pill[0], pv || c.pill[1], "#4f8fc9", false);
    pill(W - 14, 12, c.pill2[0], pv2 || c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: 13, accent: "#4f8fc9",
    titleCard: { lines: ["门变多还是变少：", "受体的上调和下调"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update() {}, draw,
  };
});
