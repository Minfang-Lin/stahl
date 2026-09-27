Anima.register("symptom-circuits", {
    "title": "症状、回路和递质：Stahl 的看病地图",
    "tag": "基础篇",
    "headline": "把诊断拆成症状，再给每个症状找到【回路】",
    "lede": "“抑郁症”“焦虑症”这样的诊断，其实是一组症状的名字。Stahl 的思路是把它拆开：每个症状对应大脑里一条“效率不好”的回路，每条回路由几种递质调节，药物再挑递质、挑受体，瞄准想改善的那个症状。",
    "summary": "诊断 = 一组症状；症状 → 回路（奖赏、杏仁核、背外侧前额叶、睡眠觉醒）→ 递质 → 药物；以及为什么同一个诊断的两个人治疗可以不同。",
    "chapter": "对应 Stahl《精神药理学精要》各章 · 症状—回路—递质",
    "footer": "这是一张简化的科普地图，具体怎么治疗要由医生根据每个人的情况决定，请勿自行用药或换药。",
    "canvasLabel": "症状卡片贴到大脑回路上、回路太安静或太吵、递质快递员上岗、药物访客挑选回收门和受体的动画",
    "regions": ["pfc", "amygdala", "striatum", "hypo"],
    "parts": ["basics"],
    "cast": ["DA", "5HT", "NE", "GABA", "His", "Ox", "drug"],
    "color": "#f7b27a"
  }, () => {
  const CH = [
    { title: "诊断是一组症状",
      pill: ["诊断", "一组症状"], pill2: ["看法", "拆开看"],
      text: "医生说“抑郁症”“焦虑症”的时候，这个名字其实是一组症状的合称：比如情绪低落、没兴趣、睡不好、注意力差、容易紧张。Stahl 书里有一个很实用的思路：别只盯着诊断这个大标签，而是把它拆开，一个症状一个症状地看。因为每一个症状，背后可能对应着大脑里不同的地方。",
      fact: "诊断是一组症状的名字；拆开来看，每个症状都有自己的来历" },
    { title: "每个症状，一条回路",
      pill: ["症状", "→ 回路"], pill2: ["地图", "简化假设"],
      text: "拆开以后，把症状卡片贴到大脑地图上。没兴趣、没动力，和伏隔核到前额叶的奖赏回路有关；焦虑、害怕，和杏仁核的警报回路有关；注意力差，和背外侧前额叶有关；睡不好，和下丘脑、脑干的睡眠觉醒系统有关。这是一张简化的假设地图，但它让看不见的症状有了位置。",
      fact: "症状 → 回路：这张“症状地图”是 Stahl 看病思路的核心假设" },
    { title: "回路“效率不好”",
      pill: ["奖赏回路", "太安静"], pill2: ["警报回路", "太吵"],
      text: "回路出问题，通常不是“坏掉了”，更像是传信的效率不好。有的回路太安静：奖赏回路里的信号稀稀拉拉，好事来了也提不起劲；有的回路太吵：杏仁核的警报一点小事就响个不停，人就紧张、害怕。同一套机器，调得太低或太高，都会变成症状。",
      fact: "回路效率不好，可以是“太安静”，也可以是“太吵”" },
    { title: "每条回路的快递员",
      pill: ["回路", "→ 递质"], pill2: ["快递员", "各有分工"],
      text: "每条回路都有自己常用的快递员。奖赏回路离不开多巴胺；杏仁核的警报，由 5-HT 和 GABA 帮忙调小；背外侧前额叶的注意力，靠去甲肾上腺素和多巴胺调好“信噪比”；睡眠觉醒系统里，组胺、食欲素负责叫人醒，GABA 负责让人睡。知道是哪位快递员，就知道从哪里下手。",
      fact: "回路 → 递质：每条回路由几种主要的递质调节" },
    { title: "药物挑钥匙",
      pill: ["递质", "→ 药物"], pill2: ["目标", "某个症状"],
      text: "药物就是冲着这些递质和受体去的。SSRI 挡住 5-HT 的回收门，帮警报慢慢调小；安非他酮挡住多巴胺和去甲肾上腺素的回收门，常用来帮助提不起劲；哌甲酯提高前额叶的多巴胺和去甲肾上腺素，帮助集中注意；食欲素受体拮抗剂挡住叫醒信号，帮助入睡。挑递质、挑受体，就是在挑症状。",
      fact: "递质 → 药物：选药时要看想改善哪个症状；用药请遵医嘱" },
    { title: "同一个诊断，不同的地图",
      pill: ["同一诊断", "地图不同"], pill2: ["同一症状", "多种诊断"],
      text: "所以，同样叫抑郁症的两个人，地图可能很不一样：一个主要是没兴趣和失眠，另一个主要是焦虑和注意力差，亮起来的回路不同，治疗也可以不同。反过来，同一个症状，比如失眠，可以出现在抑郁、焦虑、双相、创伤后应激里，走的都是睡眠觉醒这套回路。各条回路的细节，都在对应的那几集里。",
      fact: "诊断相同，症状地图可以不同；症状相同，可以来自不同的诊断" },
  ];
  CH.forEach((c, i) => { for (let j = 0; j < CH.length; j++) c["v" + j] = i === j ? 1 : 0; });

  const C = Object.assign({}, Anima.C, { brain: "#ffe3ea", brainIn: "#fff4f6" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsz = (k) => Math.max(11, W / 58) * Anima.UI * (k || 1);
  function update() { lt = Anima.sceneTime; }

  // 四条回路：节点坐标按大脑的半宽、半高归一（额头朝左）
  const CIR = [
    { sym: "没兴趣", name: "伏隔核—前额叶", col: "#ff9a52", nodes: [[-0.84, -0.22], [-0.34, 0.14]], who: ["DA"] },
    { sym: "焦虑害怕", name: "杏仁核", col: "#ec6470", nodes: [[-0.14, 0.56], [-0.72, 0.44]], who: ["5HT", "GABA"] },
    { sym: "注意力差", name: "背外侧前额叶", col: "#8f84e0", nodes: [[-0.5, -0.72], [0.08, -0.3]], who: ["NE", "DA"] },
    { sym: "睡不好", name: "下丘脑和脑干", col: "#4f9fd0", nodes: [[0.04, 0.26], [0.3, 0.92]], who: ["His", "Ox", "GABA"] },
  ];
  const TAG = { DA: "DA", "5HT": "5-HT", GABA: "GABA", NE: "NE", His: "组胺", Ox: "食欲素" };

  // ---------- 共用零件 ----------
  function brainPath(cx, cy, rx, ry) {
    ctx.beginPath();
    ctx.moveTo(cx - rx, cy + ry * 0.1);
    ctx.bezierCurveTo(cx - rx * 1.05, cy - ry * 0.9, cx - rx * 0.2, cy - ry * 1.15, cx + rx * 0.4, cy - ry * 0.95);
    ctx.bezierCurveTo(cx + rx * 1.05, cy - ry * 0.7, cx + rx * 1.1, cy + ry * 0.3, cx + rx * 0.8, cy + ry * 0.6);
    ctx.bezierCurveTo(cx + rx * 0.4, cy + ry * 0.85, cx - rx * 0.2, cy + ry * 0.75, cx - rx * 0.55, cy + ry * 0.7);
    ctx.bezierCurveTo(cx - rx * 0.9, cy + ry * 0.62, cx - rx * 0.98, cy + ry * 0.4, cx - rx, cy + ry * 0.1);
    ctx.closePath();
  }
  // 画大脑和四条回路；lit[i] 0～1 亮起程度，bad[i] 0～1 “效率不好”（信号一顿一顿）
  function brainMap(cx, cy, rx, ry, lit, bad, face0) {
    const P = (q) => ({ x: cx + q[0] * rx, y: cy + q[1] * ry });
    ctx.beginPath(); ctx.ellipse(cx + rx * 0.3, cy + ry * 0.85, rx * 0.1, ry * 0.3, 0.2, 0, Math.PI * 2); ctx.fillStyle = "#f5d3dc"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx + rx * 0.62, cy + ry * 0.62, rx * 0.26, ry * 0.2, -0.2, 0, Math.PI * 2); ctx.fillStyle = "#f7c6d3"; ctx.fill(); outline(1.5); ctx.stroke();
    brainPath(cx, cy, rx, ry);
    const g = ctx.createRadialGradient(cx - rx * 0.2, cy - ry * 0.2, rx * 0.1, cx, cy, rx);
    g.addColorStop(0, C.brainIn); g.addColorStop(1, C.brain); ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    if (face0) face(cx + rx * 0.55, cy - ry * 0.35, ry * 0.12, face0 > 0 ? 1 : 0);
    const pts = [];
    CIR.forEach((c, i) => {
      const ps = c.nodes.map(P); pts.push(ps);
      const k = lit[i];
      ctx.save(); ctx.globalAlpha *= 0.25 + 0.75 * k;
      const A = ps[0], B = ps[1], mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2, nx = -(B.y - A.y) * 0.3, ny = (B.x - A.x) * 0.3;
      const ring = [];
      for (let j = 0; j <= 24; j++) {
        const t = j <= 12 ? j / 12 : (24 - j) / 12, sg = j <= 12 ? 1 : -1, u = 1 - t;
        ring.push([u * u * A.x + 2 * u * t * (mx + nx * sg) + t * t * B.x, u * u * A.y + 2 * u * t * (my + ny * sg) + t * t * B.y]);
      }
      const trace = () => { ctx.beginPath(); ring.forEach((p, j) => { if (j) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }); ctx.closePath(); };
      const w = Math.max(3, ry * 0.045);
      ctx.lineJoin = "round"; ctx.lineCap = "round";
      if (k > 0.3) { trace(); ctx.strokeStyle = alpha(c.col, 0.25 * k); ctx.lineWidth = w * 3.5; ctx.stroke(); }
      trace(); ctx.strokeStyle = C.line; ctx.lineWidth = w + 2.5; ctx.stroke();
      trace(); ctx.strokeStyle = mix("#e8dde2", c.col, k); ctx.lineWidth = w; ctx.stroke();
      ps.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, w * 1.1, 0, Math.PI * 2); ctx.fillStyle = mix("#f2eaee", c.col, k); ctx.fill(); outline(1.4); ctx.stroke(); });
      // 信号小光点：效率不好时一顿一顿
      if (k > 0.5) {
        const b = bad ? bad[i] : 0, sp = 0.35 * (1 - 0.6 * b);
        let t = (time * sp + i * 0.25) % 1;
        if (b > 0.5 && Math.sin(time * 5 + i) > 0.2) t = Math.floor(t * 6) / 6;
        const sa = b > 0.5 ? 0.5 + 0.5 * Math.sin(time * 9 + i) : 1;
        ctx.save(); ctx.globalAlpha *= sa; Anima.spark(ring, t, w * 1.3, C.gold); ctx.restore();
      }
      ctx.restore();
    });
    return pts;
  }
  function symCard(x, y, w, h, t, col, gray, check) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 3;
    rrect(x - w / 2, y - h / 2, w, h, h * 0.3); ctx.fillStyle = gray ? "#f1ecee" : "#ffffff"; ctx.fill();
    ctx.restore();
    outline(1.6); rrect(x - w / 2, y - h / 2, w, h, h * 0.3); ctx.stroke();
    ctx.fillStyle = gray ? "#cfc5ca" : col; rrect(x - w / 2, y - h / 2, h * 0.28, h, h * 0.14); ctx.fill();
    const fs = Math.min(fsz(0.95), (w - h * 0.4) / (t.length + 0.6), h * 0.55);
    text(t + (check ? " ✓" : ""), x + h * 0.14, y + 1, fs, gray ? C.soft : C.ink);
  }
  function panel(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = "rgba(255,253,251,0.95)"; ctx.fill();
    ctx.restore();
    outline(1.8); rrect(x, y, w, h, 16); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.9), w * 0.1);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.2;
      rrect(x + w / 2 - tw / 2, y - fs * 0.72, tw, fs * 1.45, fs * 0.72); ctx.fillStyle = color; ctx.fill(); outline(1.5); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
  }
  function folder(x, y, w, h, label, open) {
    ctx.fillStyle = "#ffd9a8"; outline(1.6);
    rrect(x - w / 2, y - h / 2 - h * 0.12, w * 0.4, h * 0.25, 6); ctx.fill(); ctx.stroke();
    rrect(x - w / 2, y - h / 2, w, h, 10); ctx.fill(); ctx.stroke();
    ctx.save(); ctx.translate(x - w / 2, y + h / 2); ctx.transform(1, 0, -0.25 * open, 1, 0, 0);
    rrect(0, -h * 0.82, w, h * 0.82, 10); ctx.fillStyle = "#ffe6c4"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.restore();
    text(label, x, y + h * 0.1, Math.min(fsz(1.05), w / (label.length + 1)), C.ink);
  }
  function mapGeo() {
    const nb = N();
    const rx = Math.min(H * 0.46, W * (nb ? 0.3 : 0.28)), ry = rx * 0.66;
    return { cx: W * (nb ? 0.66 : 0.62), cy: H * 0.5 + (Anima.topSafe() - H * 0.1) * 0.5, rx, ry, cw: W * (nb ? 0.27 : 0.2), ch: H * (nb ? 0.1 : 0.085) };
  }

  // ---------- 第 1 幕：一组症状装进一个文件夹 ----------
  const SYMS = ["情绪低落", "没兴趣", "睡不好", "注意力差", "紧张焦虑"];
  const SCOL = ["#b8b0f0", "#ff9a52", "#4f9fd0", "#8f84e0", "#ec6470"];
  function viewBundle(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf2", "#fdeef3");
    Anima.bokeh(7, "#ffe0c0", 0.7, 3);
    const nb = N(), px = W * 0.2, py = H * 0.84;
    chara(px, py, H * 0.07, { who: "neuron", eyes: lt > 9 ? "open" : "sleepy", mouth: lt > 9 ? "smile" : "sad", brow: lt > 9 ? null : "worry", arms: "down" });
    if (lt < 9) emote("gloom", px + H * 0.08, py - H * 0.2, H * 0.03);
    const fx = W * 0.74, fy = H * 0.6, fw = W * (nb ? 0.34 : 0.26), fh = H * 0.28;
    const into = prog(6, 1.6), out = prog(9.5, 1.6);
    folder(fx, fy, fw, fh, into > 0.5 ? "诊断：抑郁症" : "诊断", out);
    const cw = W * (nb ? 0.24 : 0.16), chh = H * (nb ? 0.09 : 0.075);
    SYMS.forEach((s, i) => {
      const t0 = 0.8 + i * 0.9, ap = prog(t0, 0.6);
      if (ap <= 0) return;
      const hx = W * (0.42 + (i % 2) * 0.08), hy = Anima.topSafe() + H * (0.1 + i * 0.145);
      const fxI = fx + (i - 2) * fw * 0.12, fyI = fy - fh * 0.1;
      const sx = W * 0.5 + (i - 2) * (cw * (nb ? 0.9 : 1.08)) * (nb ? 0.72 : 1), sy = Anima.topSafe() + H * 0.08 + (nb ? (i % 2) * chh * 1.15 : 0);
      let x = lerp(lerp(px, hx, ap), fxI, into), y = lerp(lerp(py - H * 0.2, hy, ap), fyI, into);
      if (out > 0) { x = lerp(fxI, sx, out); y = lerp(fyI, sy, out); }
      ctx.save(); ctx.globalAlpha *= ap * (into > 0.9 && out < 0.05 ? 0 : 1);
      symCard(x, y, cw, chh, s, SCOL[i]);
      ctx.restore();
    });
    callout("bd-f", win(7.5, 10), fx, fy - fh * 0.3, fx, fy + fh * 0.75, "诊断：一组症状的名字");
    say("bd-p", win(1, 6), px, py - H * 0.22, px, H * 0.4, "我睡不好，也提不起劲……", "say");
    say("bd-open", lt > 10.5, fx, fy - fh * 0.5, fx - W * 0.02, fy + fh * 0.72, "拆开，一张一张看！", "shout");
    ctx.restore();
  }

  // ---------- 第 2 幕：症状卡片贴到回路上 ----------
  function viewSnap(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf8ff", "#fdf0f2");
    const g = mapGeo(), top = Anima.topSafe() + H * 0.06;
    const lit = CIR.map((c, i) => prog(1.9 + i * 2.4, 0.5));
    const pts = brainMap(g.cx, g.cy, g.rx, g.ry, lit, lit.map((k) => k), 0);
    CIR.forEach((c, i) => {
      const t0 = 0.6 + i * 2.4, p = prog(t0, 1.3);
      const sx = W * 0.04 + g.cw / 2, sy = top + g.ch * 0.6 + i * g.ch * 1.5;
      const tgt = pts[i][0], back = prog(t0 + 2.1, 0.9);
      const x = lerp(lerp(sx, tgt.x, p), sx, back), y = lerp(lerp(sy, tgt.y - g.ch * 0.5, p), sy, back) - Math.sin(p * Math.PI) * H * 0.06;
      if (back > 0) { ctx.save(); ctx.globalAlpha *= back; ctx.setLineDash([4, 5]); ctx.strokeStyle = c.col; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sx + g.cw / 2, sy); ctx.lineTo(tgt.x, tgt.y); ctx.stroke(); ctx.restore(); }
      ctx.save(); ctx.globalAlpha *= 0.35; symCard(sx, sy, g.cw, g.ch, c.sym, c.col); ctx.restore();
      const sc = lerp(1, 0.8, p * (1 - back));
      symCard(x, y, g.cw * sc, g.ch * sc, c.sym, c.col);
      if (p > 0.95 && lt < t0 + 2.2) sfx("啪！", x + g.cw * 0.4, y - g.ch, H * 0.04, c.col, -0.12, 1);
      const P2 = pts[i][1];
      callout("sn-" + i, lt > t0 + 1.3 && lt < t0 + 3.4, P2.x, P2.y, P2.x + W * 0.08, i === 2 ? top - H * 0.02 : H * 0.92, c.name);
    });
    say("sn-end", lt > 11, g.cx - g.rx * 0.3, g.cy + g.ry * 0.6, g.cx - g.rx * 0.1, H * 0.93, "看不见的症状，有了位置！", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：太安静 vs 太吵 ----------
  function loopPanel(x, y, w, h, kind) {
    const quiet = kind === 0;
    panel(x, y, w, h, quiet ? "奖赏回路：太安静" : "杏仁核：太吵", quiet ? "#ffe0c4" : "#ffd6da");
    const cx = x + w / 2, cy = y + h * 0.45, r = Math.min(w * 0.3, h * 0.28);
    const A = quiet ? "伏隔核" : "杏仁核", B = quiet ? "前额叶" : "前额叶";
    const col = quiet ? "#ff9a52" : "#ec6470";
    ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.25, r * 0.75, 0, 0, Math.PI * 2);
    ctx.strokeStyle = C.line; ctx.lineWidth = 8; ctx.stroke(); ctx.strokeStyle = mix("#eee4e8", col, quiet ? 0.3 : 1); ctx.lineWidth = 5; ctx.stroke();
    const nodes = [[cx - r * 1.25, cy, B], [cx + r * 1.25, cy, A]];
    const n = quiet ? 1 : 7;
    for (let k = 0; k < n; k++) {
      const t = (time * (quiet ? 0.12 : 0.55) + k / n) % 1, q = t * Math.PI * 2;
      const sx = cx + Math.cos(q) * r * 1.25, sy = cy + Math.sin(q) * r * 0.75;
      ctx.save(); ctx.globalAlpha *= quiet ? 0.45 + 0.3 * Math.sin(time * 3) : 1;
      glow(sx, sy, r * 0.25, C.gold, 0.8); Anima.bolt(sx, sy, r * 0.13, 1);
      ctx.restore();
    }
    nodes.forEach((p) => {
      ctx.beginPath(); ctx.arc(p[0], p[1], r * 0.28, 0, Math.PI * 2); ctx.fillStyle = quiet ? "#eee6ea" : "#ffd6da"; ctx.fill(); outline(1.6); ctx.stroke();
      face(p[0], p[1] + r * 0.03, r * 0.16, quiet ? 0 : -1);
      text(p[2], p[0], p[1] + r * 0.5, Math.min(fsz(0.8), w * 0.08), C.ink);
    });
    // 结果：一个小人的反应
    const px = cx, py = y + h * 0.95;
    if (quiet) {
      chara(px, py, h * 0.07, { who: "neuron", eyes: "sleepy", mouth: "flat", gray: 0.5, arms: "down" });
      // 好事（礼物）来了，也没反应
      const gx = px + w * 0.22, gy = py - h * 0.08;
      rrect(gx - h * 0.04, gy - h * 0.04, h * 0.08, h * 0.07, 3); ctx.fillStyle = "#ffc6d4"; ctx.fill(); outline(1.3); ctx.stroke();
      ctx.fillStyle = C.gold; ctx.fillRect(gx - h * 0.006, gy - h * 0.04, h * 0.012, h * 0.07);
      emote("gloom", px + h * 0.06, py - h * 0.24, h * 0.03);
    } else {
      const shake = Math.sin(time * 30) * h * 0.004;
      chara(px + shake, py, h * 0.07, { who: "neuron", eyes: "wide", mouth: "wavy", brow: "worry", arms: "fist" });
      emote("sweat", px + h * 0.07, py - h * 0.22, h * 0.03);
      // 警报灯
      const bx = cx, by = cy - r * 0.2;
      glow(bx, by, r * 0.5, C.bad, 0.4 + 0.4 * Math.abs(Math.sin(time * 6)));
      sfx("铃铃铃！", cx + w * 0.3, y + h * 0.66, Math.min(h * 0.07, w * 0.08), C.bad, -0.1, 0.6 + 0.4 * Math.abs(Math.sin(time * 6)));
    }
    return { cx, cy, r, px, py };
  }
  function viewTune(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff9f3", "#f5f0ff");
    const top = Anima.topSafe() + H * 0.07, gap = W * 0.04, w = (W - gap * 3) / 2, h = H * 0.92 - top;
    const L = loopPanel(gap, top, w, h, 0), R = loopPanel(gap * 2 + w, top, w, h, 1);
    const nb = N();
    say("tn-q", win(1.5, 7), L.px, L.py - h * 0.2, nb ? L.cx : L.px - w * 0.18, nb ? L.cy : L.py - h * 0.28, "好事来了，也提不起劲……", "think");
    say("tn-l", win(6.5, 13), R.px, R.py - h * 0.2, R.cx, R.cy, "一点小事，警报就响！", "shout");
    callout("tn-slow", win(2, 6.5) && !nb, L.cx, L.cy - L.r * 0.75, L.cx, top + h * 0.12, "信号稀稀拉拉");
    callout("tn-fast", win(7, 13) && !nb, R.cx, R.cy - R.r * 0.75, R.cx, top + h * 0.12, "信号挤成一团");
    ctx.restore();
  }

  // ---------- 第 4 幕：递质快递员上岗 ----------
  function viewCourier(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf8ff", "#fdf0f2");
    const g = mapGeo(), top = Anima.topSafe() + H * 0.06;
    const pts = brainMap(g.cx, g.cy, g.rx, g.ry, [1, 1, 1, 1], [0, 0, 0, 0], 0);
    const s = H * (N() ? 0.034 : 0.03);
    // 左边：每条回路一行，写上它的快递员
    CIR.forEach((c, i) => {
      const t0 = 0.8 + i * 2.6, p = prog(t0, 1.4);
      const sy = top + g.ch * 0.6 + i * g.ch * 1.5, sx = W * 0.04 + g.cw / 2;
      symCard(sx, sy, g.cw, g.ch, c.sym, c.col);
      if (p <= 0) return;
      // 快递员从卡片旁边走到回路的节点上
      c.who.forEach((w, j) => {
        const node = pts[i][j % pts[i].length];
        const ox = (j - (c.who.length - 1) / 2) * s * 1.9;
        const x = lerp(sx + g.cw * 0.6, node.x + ox * (c.who.length > pts[i].length ? 1 : 0.5), p), y = lerp(sy + s * 1.2, node.y + s * 0.3, p) - Math.sin(p * Math.PI) * H * 0.05;
        chara(x, y, s, { who: w, walk: p < 1 ? time * 9 + j : null, eyes: p >= 1 ? "happy" : "open", arms: p >= 1 ? "wave" : "hold", item: p >= 1 ? null : "letter", tag: TAG[w], shadow: false });
      });
    });
    callout("cr-da", win(2.4, 5.5), pts[0][0].x, pts[0][0].y, W * 0.3, H * 0.9, "多巴胺：让好事“值得期待”");
    callout("cr-am", win(5, 8.1), pts[1][0].x, pts[1][0].y, g.cx + g.rx * 0.2, H * 0.92, "5-HT、GABA：把警报调小");
    callout("cr-at", win(7.6, 10.7), pts[2][0].x, pts[2][0].y, g.cx - g.rx * 0.2, top - H * 0.02, "NE、DA：调好信噪比");
    callout("cr-sl", lt > 10.2, pts[3][0].x, pts[3][0].y, g.cx + g.rx * 0.5, top - H * 0.02, "组胺、食欲素叫醒，GABA 哄睡");
    ctx.restore();
  }

  // ---------- 第 5 幕：药物挑回收门和受体 ----------
  const RX = [
    { sym: "焦虑害怕", col: "#ec6470", who: "5HT", drug: "SSRI", kind: "pump", res: "警报调小" },
    { sym: "没兴趣", col: "#ff9a52", who: "DA", drug: "安非他酮", kind: "pump", res: "更有劲" },
    { sym: "注意力差", col: "#8f84e0", who: "NE", drug: "哌甲酯", kind: "pump", res: "更专注" },
    { sym: "睡不好", col: "#4f9fd0", who: "Ox", drug: "食欲素拮抗", kind: "rec", res: "好入睡" },
  ];
  function viewDrug(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf3", "#f2f6ff");
    const nb = N(), top = Anima.topSafe() + H * 0.04, rowH = (H * 0.97 - top) / 4;
    const cw = W * (nb ? 0.26 : 0.2), chh = Math.min(rowH * 0.62, H * 0.085);
    const xCard = W * 0.04 + cw / 2, xWho = W * (nb ? 0.4 : 0.36), xDoor = W * (nb ? 0.56 : 0.52), xDrug0 = W * 1.08;
    const s = Math.min(rowH * 0.27, H * 0.042);
    RX.forEach((r, i) => {
      const y = top + rowH * (i + 0.5), t0 = 0.6 + i * 2.7, p = prog(t0, 1.5), done = lt > t0 + 1.7;
      // 行底色
      ctx.fillStyle = i % 2 ? "rgba(255,255,255,0.35)" : "rgba(255,240,230,0.45)"; ctx.fillRect(0, y - rowH / 2, W, rowH);
      symCard(xCard, y, cw, chh, r.sym, r.col, !done, done);
      // 箭头：症状 ← 递质
      ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.beginPath(); ctx.moveTo(xCard + cw / 2 + 6, y); ctx.lineTo(xWho - s * 1.4, y); ctx.stroke(); ctx.restore();
      const doorY = y + s * 1.2;
      if (r.kind === "pump") Anima.transporter(xDoor, doorY - s * 0.6, s * 1.3, "#9fc3ea", done ? 0 : time * 2, done);
      else Anima.receptor(xDoor, doorY + s * 0.2, s * 1.1, "#ffcf9e", done ? 0 : 0.7, {});
      // 递质：药物来了以后，回收门停工 → 它能多留一会儿（开心）；受体被挡 → 叫醒员没门可敲（打哈欠）
      const happy = r.kind === "pump" ? done : false;
      chara(xWho, y + s * 1.5, s, { who: r.who, tag: TAG[r.who], eyes: done ? (happy ? "happy" : "sleepy") : "open", arms: done && happy ? "up" : "hold", item: done && happy ? null : "letter", shadow: false });
      if (done && !happy) emote("zzz", xWho + s, y - s * 1.6, s * 0.8);
      const dx = lerp(xDrug0, xDoor + s * 2.8, p);
      if (p > 0) chara(dx, y + s * 1.5, s * 1.05, { who: "drug", label: "药", tag: r.drug, walk: p > 0 && p < 1 ? time * 9 : null, dir: -1, arms: done ? "point" : "down", eyes: done ? "happy" : "open", shadow: false });
      if (done) {
        const rk = prog(t0 + 1.7, 0.6), rxx = W * (nb ? 0.86 : 0.84);
        ctx.save(); ctx.globalAlpha *= rk;
        text("→ " + r.res, rxx, y, Math.min(fsz(1.05), W * 0.04 * Anima.UI), mix(r.col, C.ink, 0.35));
        if (rk < 1) sparkles(rxx, y, rowH * 0.4, 3, 1, i);
        ctx.restore();
      }
      if (lt > t0 + 1.4 && lt < t0 + 2.4) sfx("咔！", xDoor, y - rowH * 0.3, rowH * 0.3, C.warn, -0.12, 1);
    });
    callout("dr-p", win(1.6, 6) && !nb, xDoor, top + rowH * 0.5, xDoor + W * 0.1, top + rowH * 0.95, "回收门停工，递质多留一会儿");
    callout("dr-r", lt > 9.5 && !nb, xDoor, top + rowH * 3.3, xDoor - W * 0.02, H * 0.99, "挡住受体，叫不醒");
    ctx.restore();
  }

  // ---------- 第 6 幕：同一个诊断，不同的地图 ----------
  function viewCompare(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf2", "#f3f0ff");
    const nb = N(), top = Anima.topSafe() + H * 0.07, gap = W * 0.03;
    const w = (W - gap * 3) / 2, h = H * 0.95 - top;
    panel(gap, top, w, h, "同一个诊断", "#e4e0ff");
    panel(gap * 2 + w, top, w, h, "同一个症状", "#ffe0c4");
    // 左：两位“抑郁症”，亮起的回路不同
    const pa = prog(0.8, 1), pb = prog(2.5, 1);
    [[0, 3], [1, 2]].forEach((lit, k) => {
      const yy = top + h * (k ? 0.73 : 0.3), p = k ? pb : pa;
      const rx = Math.min(w * 0.26, h * 0.26), cx = gap + w * 0.7, cy = yy;
      ctx.save(); ctx.globalAlpha *= p;
      const L = [0, 1, 2, 3].map((i) => (lit.indexOf(i) >= 0 ? prog(1.5 + k * 1.7, 0.8) : 0));
      brainMap(cx, cy, rx, rx * 0.66, L, [0, 0, 0, 0], 0);
      const px = gap + w * 0.18;
      chara(px, yy + h * 0.13, h * 0.055, { who: "neuron", hair: k ? "#6d5a45" : "#b08968", style: k ? "long" : "short", eyes: "open", mouth: "smile", tag: "抑郁症" });
      lit.forEach((ci, j) => {
        const c = CIR[ci];
        const nb2 = N(); symCard(gap + w * 0.2, yy - h * (nb2 ? 0.2 : 0.18) + j * h * (nb2 ? 0.105 : 0.075), w * 0.37, h * (nb2 ? 0.095 : 0.068), c.sym, c.col);
      });
      ctx.restore();
    });
    // 右：失眠卡片连到四个不同的诊断
    const rx0 = gap * 2 + w, pc = prog(6, 1);
    const scx = rx0 + w / 2, scy = top + h * 0.2;
    ctx.save(); ctx.globalAlpha *= pc;
    symCard(scx, scy, w * 0.36, h * 0.09, "睡不好", CIR[3].col);
    const DX = ["抑郁", "焦虑", "双相", "创伤后应激"];
    DX.forEach((d, i) => {
      const q = prog(7 + i * 0.5, 0.8);
      const fx = rx0 + w * (0.14 + (i % 2) * 0.72), fy = top + h * (0.5 + Math.floor(i / 2) * 0.28);
      if (q <= 0) return;
      ctx.save(); ctx.globalAlpha *= q;
      ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.beginPath(); ctx.moveTo(scx, scy + h * 0.05); ctx.lineTo(fx, fy - h * 0.06); ctx.stroke(); ctx.restore();
      const fw = w * (nb ? 0.26 : 0.24);
      folder(fx, fy, fw, h * 0.12, d, 0);
      ctx.restore();
    });
    // 中间：它们走的都是同一条睡眠觉醒回路
    if (lt > 9.5) {
      const rr = Math.min(w * 0.2, h * 0.16), cx = rx0 + w / 2, cy = top + h * 0.64;
      const k = prog(9.5, 1);
      ctx.save(); ctx.globalAlpha *= k;
      brainMap(cx, cy, rr, rr * 0.66, [0, 0, 0, 1], [0, 0, 0, 1], 0);
      ctx.restore();
    }
    ctx.restore();
    say("cp-a", win(3.5, 7.5), gap + w * 0.5, top + h * 0.5, gap + w * 0.5, top + h * 0.52, "同一个名字，亮的回路不一样", "box");
    callout("cp-s", lt > 10.5, rx0 + w / 2, top + h * 0.64, rx0 + w / 2, H * 0.97, "同一套睡眠觉醒回路");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0784a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  const VIEWS = [viewBundle, viewSnap, viewTune, viewCourier, viewDrug, viewCompare];
  function draw() {
    ctx.fillStyle = "#fff8f2"; ctx.fillRect(0, 0, W, H);
    VIEWS.forEach((f, i) => { if (S["v" + i] > 0.02) f(S["v" + i]); });
    hud();
  }

  return {
    chapters: CH, state: S, dur: 14, accent: "#f7b27a",
    titleCard: { lines: ["症状、回路和递质：", "Stahl 的看病地图"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
