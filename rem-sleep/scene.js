Anima.register("rem-sleep", {
    "title": "一夜的换班：快速眼动和非快速眼动",
    "tag": "睡眠与觉醒",
    "headline": "睡着以后，大脑在【一班接一班】地换岗",
    "lede": "一夜的睡眠不是一整块，而是四到六个大约 90 分钟的周期：先从浅睡滑进深睡，再换成做梦的快速眼动睡眠。看看脑干里谁在 REM 时下班、谁来接班，身体为什么动不了，抗抑郁药又怎样改动这张夜班排班表。",
    "summary": "睡眠周期和睡眠图、慢波和纺锤波、REM 开/REM 关的换班（乙酰胆碱 vs 去甲肾上腺素、5-HT、组胺）、REM 时肌肉静音、抗抑郁药压低 REM 和停药反跳，以及深睡时的类淋巴“大扫除”。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 睡眠结构与神经化学",
    "footer": "抗抑郁药不要自己突然停；想减药或换药，请和医生商量，按计划慢慢来。长期睡不好，可以去睡眠门诊看看。",
    "canvasLabel": "睡眠图一段段画满一整夜、皮层神经元从各跳各的到齐步走、脑干哨兵下班乙酰胆碱接班、身体静音做梦、抗抑郁药让哨兵加班推迟 REM、深睡时脑脊液冲洗废物的动画",
    "regions": ["brainstem", "hypo"],
    "parts": ["sleep"],
    "cast": ["ACh", "NE", "5HT", "His", "drug"],
    "color": "#9fa8e8"
  }, () => {
  const CH = [
    { title: "一夜的排班表",
      pill: ["一个周期", "约 90 分钟"], pill2: ["一夜", "4～6 个周期"],
      text: "睡着以后，大脑并没有关机，而是按一张排班表一班一班地换岗。一夜大约有 4～6 个周期，每个周期约 90 分钟：先是非快速眼动睡眠，从浅睡 N1、N2 一路滑进深睡 N3；然后换成快速眼动睡眠，也就是 REM，梦大多在这时出现。前半夜深睡多，越到后半夜，REM 越长。",
      fact: "一夜约 4～6 个周期；前半夜深睡多，后半夜 REM 多" },
    { title: "从浅睡滑进深睡",
      pill: ["非快速眼动", "N1→N3"], pill2: ["深睡", "慢波"],
      text: "清醒时，皮层的神经元各忙各的，脑电波又小又快。进入 N2，丘脑时不时哼起一段短促的小调，叫睡眠纺锤波，外面的声音更难吵醒人。到了深睡 N3，大批神经元开始“齐步走”：一起放电、一起安静，脑电波变成又高又慢的慢波。这时最难叫醒，身体也在抓紧修复。",
      fact: "深睡 N3 时神经元同步放电，脑电图上是高大的慢波" },
    { title: "REM 换班：哨兵下班",
      pill: ["REM 关", "NE·5-HT·组胺"], pill2: ["REM 开", "乙酰胆碱"],
      text: "一个周期快结束时，脑干里要换一次班。清醒时，去甲肾上腺素、5-HT、组胺这几位哨兵提着灯站岗；进入非快速眼动，灯慢慢调暗；到了 REM，它们几乎完全下班，叫“REM 关”神经元。接班的是脑干里的乙酰胆碱神经元，叫“REM 开”：它们重新热闹起来，让皮层像醒着一样活跃，梦就开演了。",
      fact: "REM 时乙酰胆碱神经元活跃，去甲肾上腺素、5-HT、组胺神经元几乎静默" },
    { title: "身体静音，眼睛在转",
      pill: ["肌肉", "静音"], pill2: ["眼球", "快速转动"],
      text: "梦开演的同时，脑干还会往下发一道命令，经过延髓传到脊髓，把管骨骼肌的运动神经元“静音”。所以梦里跑得再快，身体也躺着不动，不会把梦演出来。只有少数肌肉照常工作：呼吸肌继续呼吸，眼球在眼皮底下快速转来转去，“快速眼动”这个名字就是这么来的。",
      fact: "REM 时大部分骨骼肌失去张力，呼吸肌和眼球运动照常" },
    { title: "抗抑郁药：哨兵加班",
      pill: ["REM", "被压低"], pill2: ["突然停药", "REM 反跳"],
      text: "很多抗抑郁药会提高 5-HT 或去甲肾上腺素，相当于让“REM 关”的哨兵夜里还在加班。结果是第一次 REM 来得更晚，整夜的 REM 也变少，程度因药而异。反过来，如果突然停药，被压住的 REM 可能一下子反弹，出现多梦、梦很鲜明甚至噩梦。所以停药要和医生商量，慢慢减。",
      fact: "不少抗抑郁药会推迟、减少 REM；突然停药可能 REM 反跳、多梦" },
    { title: "深睡时的大扫除",
      pill: ["深睡", "大扫除"], pill2: ["状态", "研究中"],
      text: "深睡还有一项可能的任务：打扫卫生。白天，脑细胞工作时会留下代谢废物，比如 β-淀粉样蛋白。动物研究发现，深睡时细胞之间的缝隙变宽，脑脊液沿着血管旁边的通道流进来，把废物冲走，这套系统叫类淋巴系统。人身上是不是也这样、效果有多大，还在研究中。",
      fact: "深睡时类淋巴系统可能更活跃，帮大脑清走废物（仍在研究）" },
  ];
  CH.forEach((c, i) => { for (let j = 0; j < CH.length; j++) c["v" + j] = i === j ? 1 : 0; });

  const C = Object.assign({}, Anima.C, { rem: "#b58df0", deep: "#6f86d6", bed: "#cfe0f5", csf: "#9fd6f2", night: "#3f4478" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsz = (k) => Math.max(11, W / 58) * Anima.UI * (k || 1);
  function update() { lt = Anima.sceneTime; }

  // 睡眠图数据：[开始小时, 结束小时, 阶段]，阶段 0 清醒、1 REM、2 N1、3 N2、4 N3
  const BASE = [[0, 0.1, 0], [0.1, 0.2, 2], [0.2, 0.5, 3], [0.5, 1.1, 4], [1.1, 1.3, 3], [1.3, 1.45, 1],
    [1.45, 1.7, 3], [1.7, 2.3, 4], [2.3, 2.6, 3], [2.6, 2.95, 1],
    [2.95, 3.4, 3], [3.4, 3.6, 4], [3.6, 4.0, 3], [4.0, 4.45, 1],
    [4.45, 4.52, 0], [4.52, 5.4, 3], [5.4, 6.0, 1],
    [6.0, 6.9, 3], [6.9, 7.75, 1], [7.75, 8, 0]];
  const DRUG = [[0, 0.15, 0], [0.15, 0.25, 2], [0.25, 0.6, 3], [0.6, 1.1, 4], [1.1, 1.9, 3], [1.9, 2.3, 4], [2.3, 2.9, 3], [2.9, 3.0, 1],
    [3.0, 3.5, 3], [3.5, 3.7, 4], [3.7, 4.6, 3], [4.6, 4.8, 1], [4.8, 4.9, 0], [4.9, 6.1, 3], [6.1, 6.4, 1], [6.4, 7.3, 3], [7.3, 7.65, 1], [7.65, 8, 0]];
  const REBOUND = [[0, 0.1, 0], [0.1, 0.2, 2], [0.2, 0.45, 3], [0.45, 0.8, 4], [0.8, 0.9, 3], [0.9, 1.4, 1],
    [1.4, 1.6, 3], [1.6, 2.0, 4], [2.0, 2.2, 3], [2.2, 3.0, 1], [3.0, 3.1, 0], [3.1, 3.6, 3], [3.6, 4.5, 1],
    [4.5, 5.0, 3], [5.0, 6.1, 1], [6.1, 6.2, 0], [6.2, 6.6, 3], [6.6, 7.8, 1], [7.8, 8, 0]];
  const LV = ["清醒", "REM", "N1", "N2", "N3"];

  // ---------- 共用零件 ----------
  function panel(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(90,80,140,0.2)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = "rgba(255,253,251,0.95)"; ctx.fill();
    ctx.restore();
    outline(1.8); rrect(x, y, w, h, 16); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.9), w * 0.09);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.2;
      rrect(x + w / 2 - tw / 2, y - fs * 0.72, tw, fs * 1.45, fs * 0.72); ctx.fillStyle = color; ctx.fill(); outline(1.5); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
  }
  // 画一张睡眠图，upto：画到第几个小时；返回坐标换算
  function hypno(x, y, w, h, data, upto, opt) {
    const o = opt || {}, lab = o.labels !== false, lw = lab ? fsz(0.8) * 2.6 : 0;
    const X = (t) => x + lw + (w - lw) * t / 8, Y = (s) => y + h * s / 4;
    const fs = Math.min(fsz(0.78), h / 5.2);
    if (lab) LV.forEach((l, i) => text(l, x + lw * 0.45, Y(i), fs, i === 1 ? C.rem : C.soft));
    ctx.save(); ctx.strokeStyle = alpha(C.line, 0.15); ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(X(0), Y(i)); ctx.lineTo(X(8), Y(i)); ctx.stroke(); }
    ctx.restore();
    if (o.hours) ["23 点", "1 点", "3 点", "5 点", "7 点"].forEach((l, i) => text(l, X(i * 2), y + h + fs * 1.2, fs, C.soft));
    // N3 底色、REM 彩条
    data.forEach((d) => {
      if (d[0] >= upto) return;
      const x0 = X(d[0]), x1 = X(Math.min(d[1], upto));
      if (d[2] === 1) { rrect(x0, Y(1) - h * 0.07, Math.max(2, x1 - x0), h * 0.14, h * 0.05); ctx.fillStyle = alpha(o.remCol || C.rem, 0.85); ctx.fill(); }
      if (d[2] === 4 && o.deep !== false) { ctx.fillStyle = alpha(C.deep, 0.28); ctx.fillRect(x0, Y(4) - h * 0.06, x1 - x0, h * 0.12); }
    });
    ctx.strokeStyle = o.col || C.line; ctx.lineWidth = o.lw || Math.max(2, h * 0.02); ctx.lineJoin = "round";
    ctx.beginPath();
    data.forEach((d, i) => {
      if (d[0] >= upto) return;
      const x0 = X(d[0]), x1 = X(Math.min(d[1], upto)), yy = Y(d[2]);
      if (i === 0) ctx.moveTo(x0, yy); else ctx.lineTo(x0, yy);
      ctx.lineTo(x1, yy);
    });
    ctx.stroke();
    let st = 0; data.forEach((d) => { if (upto >= d[0] && upto < d[1]) st = d[2]; });
    return { X, Y, st };
  }
  function lying(x, y, s, o) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(-Math.PI / 2);
    chara(0, 0, s, Object.assign({ who: "neuron", eyes: "closed", mouth: "cat", arms: "down", shadow: false, bob: 0 }, o));
    ctx.restore();
  }
  function bed(x, y, w, h, blanket) {
    rrect(x, y, w, h * 0.35, h * 0.1); ctx.fillStyle = "#e7d2bd"; ctx.fill(); outline(1.5); ctx.stroke();
    rrect(x + w * 0.02, y - h * 0.3, w * 0.22, h * 0.32, h * 0.12); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.4); ctx.stroke();
    if (blanket) { rrect(x + w * 0.35, y - h * 0.32, w * 0.65, h * 0.4, h * 0.15); ctx.fillStyle = C.bed; ctx.fill(); outline(1.5); ctx.stroke(); }
  }
  function moon(x, y, R) {
    const d = R * 0.6, R2 = R * 0.85, a = (R * R - R2 * R2 + d * d) / (2 * d), h = Math.sqrt(R * R - a * a);
    const ux = Math.cos(-0.6), uy = Math.sin(-0.6), p1 = [a * ux - h * uy, a * uy + h * ux], p2 = [a * ux + h * uy, a * uy - h * ux];
    const cx2 = d * ux, cy2 = d * uy;
    ctx.beginPath();
    ctx.arc(x, y, R, Math.atan2(p1[1], p1[0]), Math.atan2(p2[1], p2[0]));
    ctx.arc(x + cx2, y + cy2, R2, Math.atan2(p2[1] - cy2, p2[0] - cx2), Math.atan2(p1[1] - cy2, p1[0] - cx2), true);
    ctx.closePath(); ctx.fillStyle = "#fff4c4"; ctx.fill(); outline(1.4); ctx.stroke();
  }
  function nightSky() {
    Anima.wash("#e9e6fb", "#f7eef6");
    for (let i = 0; i < 14; i++) sparkle(rnd(i + 300) * W, Anima.topSafe() + rnd(i + 330) * H * 0.25, H * 0.008 * (0.7 + 0.4 * Math.sin(time * 2 + i)), 0.8, "#fffbe0");
  }

  // ---------- 第 1 幕：一夜的睡眠图 ----------
  function viewChart(a) {
    ctx.save(); ctx.globalAlpha *= a;
    nightSky();
    const nb = N(), top = Anima.topSafe() + H * 0.02;
    const upto = clamp((lt - 0.8) / 11, 0, 1) * 8;
    // 上面：床上睡着的人，月亮跟着时间走
    const mx = lerp(W * 0.1, W * 0.9, upto / 8), my = top + H * 0.08 - Math.sin(upto / 8 * Math.PI) * H * 0.04;
    moon(mx, my, H * 0.035);
    const bx = W * (nb ? 0.36 : 0.4), by = top + H * 0.25, bw = W * (nb ? 0.28 : 0.2);
    bed(bx, by, bw, H * 0.12, true);
    let st = 0; BASE.forEach((d) => { if (upto >= d[0] && upto < d[1]) st = d[2]; });
    lying(bx + bw * 0.14, by - H * 0.01, H * 0.028, { eyes: st === 0 ? "sleepy" : "closed" });
    say("ch-dream", st === 1, bx + bw * 0.12, by - H * 0.05, bx + bw * 0.85, by - H * 0.12, "♪ 做梦中", "think");
    if (st >= 3) emote("zzz", bx + bw * 0.2, by - H * 0.08, H * 0.03);
    const chip = ["清醒", "REM", "N1 浅睡", "N2", "N3 深睡"][st];
    ctx.font = `${fsz(0.95)}px ${Anima.ROUND}`;
    const cw = ctx.measureText(chip).width + fsz(1.2);
    rrect(bx + bw + W * 0.03, by - H * 0.07, cw, fsz(1.6), fsz(0.8)); ctx.fillStyle = st === 1 ? C.rem : st === 4 ? C.deep : "#ffffff"; ctx.fill(); outline(1.4); ctx.stroke();
    text(chip, bx + bw + W * 0.03 + cw / 2, by - H * 0.07 + fsz(0.8), fsz(0.95), st === 1 || st === 4 ? "#ffffff" : C.ink);
    // 下面：睡眠图
    const px = W * 0.04, py = by + H * 0.08, pw = W * 0.92, ph = H * 0.96 - py;
    panel(px, py, pw, ph, "睡眠图（示意）", "#e4e0ff");
    const g = hypno(px + W * 0.02, py + ph * 0.14, pw - W * 0.05, ph * 0.64, BASE, upto, { hours: true });
    // 周期分隔
    [1.45, 2.95, 4.45, 6.0].forEach((t, i) => { if (upto > t) { ctx.save(); ctx.setLineDash([3, 5]); ctx.strokeStyle = alpha(C.rem, 0.6); ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(g.X(t), g.Y(0) - ph * 0.04); ctx.lineTo(g.X(t), g.Y(4) + ph * 0.02); ctx.stroke(); ctx.restore(); text("第 " + (i + 1) + " 周期", g.X(t) - (g.X(1.5) - g.X(0)) / 2, g.Y(0) - ph * 0.02, fsz(0.7), C.soft); } });
    ctx.beginPath(); ctx.arc(g.X(upto), g.Y(g.st), H * 0.012, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill(); outline(1.4); ctx.stroke();
    callout("ch-deep", upto > 2.3 && upto < 6.5, g.X(0.8), g.Y(4), g.X(1.6), g.Y(4) + ph * 0.02, "深睡：前半夜多");
    callout("ch-rem", upto > 7, g.X(7.3), g.Y(1), g.X(6.3), g.Y(2) + ph * 0.02, "REM：越往后越长");
    ctx.restore();
  }

  // ---------- 第 2 幕：从各跳各的到齐步走 ----------
  const stAt = (t) => (t < 4 ? 0 : t < 8 ? 1 : 2); // 0 清醒/N1，1 N2，2 N3
  function eeg(t) {
    const s = stAt(t);
    if (s === 0) return 0.18 * Math.sin(t * 38) + 0.12 * Math.sin(t * 61 + 1) + 0.08 * Math.sin(t * 23);
    if (s === 1) {
      const ph = (t - 4) % 1.8, burst = ph > 0.6 && ph < 1.1 ? Math.sin((ph - 0.6) / 0.5 * Math.PI) : 0;
      return 0.2 * Math.sin(t * 14) + 0.3 * burst * Math.sin(t * 70);
    }
    const k = clamp((t - 8) / 1.5, 0, 1);
    return lerp(0.2 * Math.sin(t * 14), 0.9 * Math.sin(t * 5.2), k);
  }
  function viewWaves(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const deep = prog(8, 2);
    Anima.wash(mix("#f1f0ff", "#c9cdf2", deep), mix("#fbf2f7", "#e3e0f8", deep));
    const nb = N(), top = Anima.topSafe() + H * 0.03, s = stAt(lt);
    // 皮层：一排神经元，齐步程度随阶段增加
    const sync = s === 2 ? clamp((lt - 8) / 1.5, 0, 1) : s === 1 ? 0.3 : 0;
    const n = nb ? 6 : 8, rowY = top + H * 0.32;
    ctx.fillStyle = alpha("#ffd9e3", 0.6); rrect(W * 0.04, top + H * 0.06, W * 0.92, H * 0.32, 18); ctx.fill(); outline(1.4); ctx.stroke();
    text("皮层", W * 0.04 + fsz(1.6), top + H * 0.1, fsz(0.85), C.soft);
    for (let i = 0; i < n; i++) {
      const x = W * (0.13 + 0.74 * i / (n - 1));
      const om = s === 2 ? 5.2 : 14, phase = rnd(i + 7) * Math.PI * 2 * (1 - sync);
      const v = Math.sin(time * om * (s === 2 ? 0.5 : 0.7) + phase);
      const jump = s === 2 ? Math.max(0, v) * 0.9 : Math.max(0, v) * 0.25;
      chara(x, rowY, H * 0.03, { who: "neuron", jump, eyes: s === 2 ? (v > 0 ? "happy" : "closed") : "open", arms: s === 2 && v > 0 ? "up" : "down", mouth: s === 2 && v > 0 ? "grin" : "smile", shadow: false, bob: 0 });
    }
    // 丘脑：N2 时哼小调（纺锤波）
    const wy = H * 0.8, amp = H * (nb ? 0.085 : 0.1);
    const tx = W * 0.5, ty = (top + H * 0.38 + wy - amp * 1.35) / 2;
    ctx.beginPath(); ctx.ellipse(tx, ty, H * 0.07, H * 0.045, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe7c7"; ctx.fill(); outline(1.5); ctx.stroke();
    face(tx, ty + H * 0.004, H * 0.025, 1);
    text("丘脑", tx + H * 0.12, ty, fsz(0.85), C.soft);
    const hum = s === 1 && ((lt - 4) % 1.8) > 0.6 && ((lt - 4) % 1.8) < 1.1;
    if (hum) { emote("note", tx + H * 0.06, ty - H * 0.07, H * 0.03); glow(tx, ty, H * 0.1, C.gold, 0.6); }
    // 脑电波：最近几秒的记录，从右往左滚
    const wx0 = W * 0.06, wx1 = W * 0.94;
    rrect(wx0 - W * 0.01, wy - amp * 1.35, wx1 - wx0 + W * 0.02, amp * 2.7, 12); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.strokeStyle = C.lavDeep; ctx.lineWidth = 2.2; ctx.beginPath();
    const span = 3.2;
    for (let k = 0; k <= 200; k++) {
      const x = lerp(wx0, wx1, k / 200), t = lt - span * (1 - k / 200);
      const v = t < 0 ? 0 : eeg(t);
      if (k) ctx.lineTo(x, wy - v * amp); else ctx.moveTo(x, wy - v * amp);
    }
    ctx.stroke();
    text("脑电波", wx0 + fsz(2), wy - amp * 1.12, fsz(0.8), C.soft);
    const chip = ["清醒 → N1", "N2", "N3 深睡"][s];
    text(chip, wx1 - fsz(3), wy - amp * 1.12, fsz(0.95), s === 2 ? C.deep : C.ink);
    callout("wv-sp", win(4.8, 8), wx1 - W * 0.12, wy, wx1 - W * 0.2, wy + amp * 1.2, "睡眠纺锤波");
    callout("wv-slow", lt > 9.5, W * 0.5, wy - amp * 0.8, W * 0.62, wy + amp * 1.2, "慢波：神经元齐步走");
    say("wv-a", win(0.8, 4), W * 0.3, rowY - H * 0.1, W * 0.28, top + H * 0.1, "各忙各的～", "say");
    say("wv-c", lt > 10, W * 0.5, rowY - H * 0.1, W * 0.7, top + H * 0.12, "一、二！一、二！", "shout");
    ctx.restore();
  }

  // ---------- 第 3 幕：脑干换班 ----------
  const GUARD = ["NE", "5HT", "His"];
  function viewShift(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const ph = lt < 3.5 ? 0 : lt < 7 ? 1 : 2; // 清醒 / 非快速眼动 / REM
    const nightK = prog(3, 1.5);
    Anima.wash(mix("#fff6e6", "#d8d6f5", nightK), mix("#fdf0f3", "#ece6fb", nightK));
    const nb = N(), top = Anima.topSafe() + H * 0.04;
    // 阶段条
    const labels = ["清醒", "非快速眼动", "快速眼动 REM"];
    const bw = W * 0.8, bx = W * 0.1, byy = top + H * 0.03;
    labels.forEach((l, i) => {
      const x = bx + bw * i / 3, on = i === ph;
      rrect(x + 3, byy - fsz(0.8), bw / 3 - 6, fsz(1.6), fsz(0.8)); ctx.fillStyle = on ? (i === 2 ? C.rem : i === 1 ? C.deep : C.gold) : "rgba(255,255,255,0.7)"; ctx.fill(); outline(1.3); ctx.stroke();
      text(l, x + bw / 6, byy, Math.min(fsz(0.85), bw / 3 / (l.length + 1)), on && i ? "#ffffff" : C.ink);
    });
    // 值班室
    const px = W * 0.04, py = top + H * 0.13, pw = W * 0.92, ph2 = H * 0.95 - py;
    panel(px, py, pw, ph2, "脑干值班室", "#e4e0ff");
    const gy = py + ph2 * 0.72, s = Math.min(H * 0.05, W * 0.045);
    const lvl = [1, 0.45, 0.04][ph], lvlA = [1, 0.25, 1][ph];
    const lvS = lerp([1, 0.45, 0.04][Math.max(0, ph - 1)], lvl, prog(ph * 3.5, 1.5)), lvA = lerp([1, 0.25, 1][Math.max(0, ph - 1)], lvlA, prog(ph * 3.5, 1.5));
    GUARD.forEach((w, i) => {
      const x = px + pw * (nb ? 0.14 + i * 0.19 : 0.14 + i * 0.16);
      const off = lvS < 0.2;
      if (lvS > 0.1) glow(x + s * 0.8, gy - s * 1.2, s * 2 * lvS, C.gold, lvS);
      chara(x, gy, s, { who: w, item: "lamp", arms: "hold", eyes: off ? "closed" : lvS < 0.6 ? "sleepy" : "open", mouth: off ? "cat" : "smile", gray: off ? 0.45 : 0, tag: w === "5HT" ? "5-HT" : w === "His" ? "组胺" : "NE" });
      if (off) emote("zzz", x + s * 0.8, gy - s * 3.3, s * 0.6);
      // 活动条
      const hb = ph2 * 0.3;
      rrect(x + s * 1.3, gy, s * 0.4, -hb, 4); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1); ctx.stroke();
      rrect(x + s * 1.3, gy, s * 0.4, -hb * Math.max(0.03, lvS), 4); ctx.fillStyle = C.warn; ctx.fill();
    });
    const ax = px + pw * (nb ? 0.8 : 0.78);
    const on = lvA > 0.6;
    if (ph === 2) { glow(ax, gy - s * 1.5, s * 3, C.rem, 0.7); sparkles(ax, gy - s * 1.6, s * 2, 4, 1, 2); }
    chara(ax, gy, s * 1.1, { who: "ACh", item: "star", arms: on ? "carry" : "hold", eyes: ph === 1 ? "sleepy" : ph === 2 ? "sparkle" : "open", mouth: ph === 2 ? "grin" : "smile", tag: "ACh", jump: ph === 2 ? Math.abs(Math.sin(time * 4)) * 0.2 : 0 });
    const hb = ph2 * 0.3;
    rrect(ax + s * 1.5, gy, s * 0.4, -hb, 4); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1); ctx.stroke();
    rrect(ax + s * 1.5, gy, s * 0.4, -hb * lvA, 4); ctx.fillStyle = C.rem; ctx.fill();
    // 交接：REM 时哨兵把钥匙交给乙酰胆碱
    if (ph === 2 && lt < 9.5) {
      const k = prog(7.2, 1.6), kx = lerp(px + pw * 0.46, ax - s, k), ky = gy - s * 1.6 - Math.sin(k * Math.PI) * H * 0.08;
      ctx.save(); ctx.globalAlpha *= 1 - prog(8.8, 0.6); glow(kx, ky, s * 0.8, C.gold, 0.8); ctx.beginPath(); ctx.arc(kx - s * 0.25, ky, s * 0.2, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); outline(1.4); ctx.stroke(); ctx.fillStyle = C.gold; rrect(kx - s * 0.05, ky - s * 0.06, s * 0.5, s * 0.12, 2); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    // 皮层小屏幕：REM 时亮起来放“梦”
    const sx = ax, sy = py + ph2 * 0.2;
    say("sh-dream", ph === 2, ax, gy - s * 3.4, sx - pw * 0.06, sy, "皮层放映：梦 ♪", "think");
    const midX = px + pw * (nb ? 0.33 : 0.3);
    callout("sh-off", nb ? win(7.5, 10.5) : lt > 7.5, midX, gy - s * 3.2, midX, nb ? H * 0.99 : py + ph2 * 0.12, "REM 关：NE、5-HT、组胺");
    callout("sh-on", lt > 9.5, ax - s * 0.8, gy - s * 2, ax - pw * 0.05, gy + s * 1.6, "REM 开：乙酰胆碱");
    say("sh-g", win(4, 7), midX, gy - s * 3.2, midX + pw * 0.12, py + ph2 * 0.18, "灯调暗一点～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：身体静音 ----------
  function viewMute(a) {
    ctx.save(); ctx.globalAlpha *= a;
    nightSky();
    const nb = N(), rem = prog(2.5, 1.2);
    // 床和睡着的人
    const bx = W * (nb ? 0.08 : 0.12), by = H * 0.8, bw = W * (nb ? 0.5 : 0.42);
    bed(bx, by, bw, H * 0.2, false);
    const s = H * 0.055, hx = bx + s * 3.3;
    lying(hx, by - H * 0.005, s, { eyes: "closed", mouth: "cat" });
    // 眼球在眼皮下转：头旁边画两道左右晃的小弧
    if (rem > 0.5) {
      const ex = hx - s * 2.25 + Math.sin(time * 14) * s * 0.18, ey = by - s * 0.6;
      ctx.strokeStyle = C.rem; ctx.lineWidth = 2;
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(ex, ey + d * s * 0.32, s * 0.12, 0, Math.PI * 2); ctx.stroke(); }
      sfx("↔", hx - s * 2.2, by - s * 1.6, s * 0.7, C.rem, 0, 0.9);
    }
    // 梦：云里有个在跑的小人
    const dx = bx + bw * 0.55, dy = Anima.topSafe() + H * 0.2;
    if (rem > 0.05) {
      ctx.save(); ctx.globalAlpha *= rem;
      say("mu-cloud", true, hx - s * 2, by - s * 1.2, dx, dy, "　　　　　　　　\n　　　　　　　　\n　　　　　　　　", "think");
      ctx.restore();
      ctx.save(); ctx.globalAlpha *= rem;
      chara(dx + Math.sin(time * 1.5) * W * 0.03, dy + H * 0.04, H * 0.028, { who: "neuron", walk: time * 12, arms: "wave", eyes: "happy", mouth: "grin", shadow: false });
      ctx.restore();
    } else say("mu-cloud", false, hx - s * 2, by - s * 1.2, dx, dy, "　　　　　　　　\n　　　　　　　　\n　　　　　　　　", "think");
    // 右边：脑干 → 延髓 → 脊髓 → 运动神经元，肌肉音量旋钮拨到 0
    const rx = W * (nb ? 0.78 : 0.74), stemY = Anima.topSafe() + H * 0.14, cordY = H * 0.62;
    ctx.beginPath(); ctx.ellipse(rx, stemY + H * 0.04, W * 0.05, H * 0.06, 0, 0, Math.PI * 2); ctx.fillStyle = "#f5d3dc"; ctx.fill(); outline(1.5); ctx.stroke();
    face(rx, stemY + H * 0.045, H * 0.022, 1);
    text("脑干", rx + W * 0.08, stemY + H * 0.04, fsz(0.85), C.ink);
    ctx.strokeStyle = C.line; ctx.lineWidth = 9; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(rx, stemY + H * 0.1); ctx.lineTo(rx, cordY); ctx.stroke();
    ctx.strokeStyle = "#f7c6d3"; ctx.lineWidth = 6; ctx.stroke();
    text("脊髓", rx + W * 0.06, (stemY + cordY) / 2 + H * 0.04, fsz(0.8), C.soft);
    if (rem > 0.3) { const t = ((lt - 2.5) * 0.6) % 1; Anima.spark([[rx, stemY + H * 0.1], [rx, cordY]], t, H * 0.02, C.rem); }
    // 肌肉张力表
    const kx = rx, ky = cordY + H * 0.14, kr = H * 0.075, tone = 1 - rem;
    ctx.beginPath(); ctx.arc(kx, ky, kr, Math.PI, 0); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(kx, ky, kr * 0.8, Math.PI, Math.PI * (1 + tone)); ctx.strokeStyle = C.good; ctx.lineWidth = kr * 0.18; ctx.stroke();
    const q = Math.PI * (1 + tone);
    ctx.strokeStyle = C.line; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(kx + Math.cos(q) * kr * 0.75, ky + Math.sin(q) * kr * 0.75); ctx.stroke();
    text("肌肉张力", kx, ky + fsz(1), fsz(0.85), C.ink);
    if (rem > 0.8) sfx("静音", kx + kr * 1.3, ky - kr * 0.5, fsz(1.1), C.rem, -0.1, 1);
    callout("mu-cmd", win(3, 8.5), rx, (stemY + cordY) / 2, rx - W * 0.2, (stemY + cordY) / 2, "静音命令：传到脊髓");
    callout("mu-ok", lt > 8.5, hx - s * 1.4, by - s * 0.3, W * 0.22, H * 0.5, "呼吸和眼球照常动");
    say("mu-run", win(4.5, 8.5) && !nb, dx - W * 0.05, dy + H * 0.08, dx - W * 0.12, dy + H * 0.25, "梦里在跑，身体没动～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：抗抑郁药让哨兵加班；突然停药 REM 反跳 ----------
  function viewDrug(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f0eefc", "#fbf0f5");
    const nb = N(), top = Anima.topSafe() + H * 0.05, stop = prog(8.5, 1);
    // 左：哨兵 + 药物访客
    const lx = W * 0.04, lw = W * (nb ? 0.3 : 0.28), lh = H * 0.93 - top;
    panel(lx, top, lw, lh, "脑干值班室", "#e4e0ff");
    const s = Math.min(H * 0.042, lw * 0.14), gy = top + lh * 0.5;
    const off = stop > 0.5;
    ["5HT", "NE"].forEach((w, i) => {
      const x = lx + lw * (0.3 + i * 0.4);
      if (!off) glow(x + s * 0.8, gy - s * 1.2, s * 2, C.gold, 0.9);
      chara(x, gy, s, { who: w, item: "lamp", arms: "hold", eyes: off ? "closed" : "sleepy", mouth: off ? "cat" : "wavy", brow: off ? null : "worry", gray: off ? 0.45 : 0, tag: w === "5HT" ? "5-HT" : "NE" });
      if (!off) emote("sweat", x + s * 0.8, gy - s * 3, s * 0.5);
    });
    const ddx = lerp(lx + lw * 0.5, lx - lw * 0.6, stop);
    chara(ddx, top + lh * 0.9, s * 1.05, { who: "drug", label: "药", tag: "抗抑郁药", arms: stop > 0 ? "wave" : "point", eyes: "happy", walk: stop > 0 && stop < 1 ? time * 9 : null, dir: stop > 0 ? -1 : 1, shadow: false, alpha: 1 - stop * 0.9 });
    // ACh：停药后一下子忙起来
    const ax = lx + lw * 0.5, ay = top + lh * (nb ? 0.82 : 0.72); // 手机上往下挪一点，头上的“!”别压住 NE 的名牌
    if (off) { chara(ax, ay, s * 0.9, { who: "ACh", item: "star", arms: "carry", eyes: "sparkle", mouth: "grin", tag: "ACh", jump: Math.abs(Math.sin(time * 6)) * 0.3, shadow: false }); emote("!", ax + s, ay - s * 3, s * 0.6); }
    // 右：三张睡眠图
    const rx = lx + lw + W * 0.03, rw = W * 0.96 - rx, gh = (H * 0.93 - top) / 2 - H * 0.05;
    const up1 = clamp((lt - 0.5) / 3, 0, 1) * 8, up2 = clamp((lt - 3) / 4, 0, 1) * 8, up3 = clamp((lt - 9) / 3.5, 0, 1) * 8;
    panel(rx, top, rw, gh + H * 0.03, "平时", "#fff1b8");
    const g1 = hypno(rx + W * 0.01, top + H * 0.03, rw - W * 0.03, gh * 0.72, BASE, up1, { deep: false });
    const y2 = top + gh + H * 0.08;
    panel(rx, y2, rw, gh + H * 0.03, off ? "突然停药后" : "服用某些抗抑郁药时", off ? "#ffd6da" : "#ddd5fa");
    const data2 = off ? REBOUND : DRUG, up = off ? up3 : up2;
    const g2 = hypno(rx + W * 0.01, y2 + H * 0.03, rw - W * 0.03, gh * 0.72, data2, up, { deep: false, remCol: off ? "#f07aa8" : C.rem });
    // 第一次 REM 的位置对比
    if (!off && up2 > 3.1) {
      ctx.save(); ctx.setLineDash([4, 4]); ctx.strokeStyle = C.bad; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(g1.X(1.3), g1.Y(1)); ctx.lineTo(g1.X(1.3), g2.Y(1)); ctx.stroke(); ctx.restore();
      arrowH(g2.X(1.3), g2.Y(1) - gh * 0.08, g2.X(2.85), g2.Y(1) - gh * 0.08, C.bad);
    }
    if (off && up3 > 6) sparkles(g2.X(4), g2.Y(1), rw * 0.25, 4, 1, 5);
    callout("dg-late", win(5, 8.5), g2.X(2.95), g2.Y(1), g2.X(4.2), g2.Y(4), "第一次 REM 推迟、变少");
    callout("dg-reb", lt > 11, g2.X(6.6), g2.Y(1), g2.X(5), g2.Y(4), "REM 反跳：多梦");
    say("dg-g", win(2, 8), lx + lw * 0.3, gy - s * 3.2, lx + lw * 0.5, top + lh * 0.2, "还不能下班……", "think");
    say("dg-stop", win(9, 13.5), ax, ay - s * 3, lx + lw * 0.5, top + lh * 0.2, "一下子全是梦！", "shout");
    ctx.restore();
  }
  function arrowH(x0, y0, x1, y1, col) {
    ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    const s = H * 0.015; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - s, y1 - s * 0.6); ctx.lineTo(x1 - s, y1 + s * 0.6); ctx.closePath(); ctx.fill();
  }

  // ---------- 第 6 幕：类淋巴系统大扫除 ----------
  function viewClean(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const sleepK = prog(3.5, 2.5);
    Anima.wash(mix("#fff6e6", "#dcdcf6", sleepK), mix("#fdf0f3", "#e6eefb", sleepK));
    const nb = N(), top = Anima.topSafe() + H * 0.03;
    const x0 = W * 0.04, y0 = top + H * 0.04, w = W * 0.92, h = H * 0.93 - y0;
    rrect(x0, y0, w, h, 18); ctx.fillStyle = mix("#e8f5fb", "#cfeaf7", sleepK); ctx.fill(); outline(1.6); ctx.stroke();
    // 左边一条血管，脑脊液沿着它流进来
    const vx = x0 + w * 0.08;
    rrect(vx - w * 0.03, y0 + 6, w * 0.06, h - 12, w * 0.03); ctx.fillStyle = "#ffc6cc"; ctx.fill(); outline(1.4); ctx.stroke();
    text("血管", vx, y0 + h * 0.08, Math.min(fsz(0.8), w * 0.03 * Anima.UI), C.ink);
    // 脑细胞：深睡时缩一点，缝隙变宽
    const cols = nb ? 4 : 6, rows = 3, gw = (w * 0.86) / cols, gh = h / rows;
    const cellR = Math.min(gw, gh) * lerp(0.46, 0.36, sleepK);
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const cx = x0 + w * 0.14 + gw * (i + 0.5), cy = y0 + gh * (j + 0.5);
      ctx.beginPath(); ctx.ellipse(cx, cy, cellR, cellR * 0.92, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe0ea"; ctx.fill(); outline(1.4); ctx.stroke();
      face(cx, cy + cellR * 0.05, cellR * 0.35, sleepK > 0.5 ? 1 : 0);
      if (sleepK > 0.6 && (i + j) % 3 === 0) emote("zzz", cx + cellR * 0.6, cy - cellR * 0.8, cellR * 0.25);
    }
    // 废物小颗粒：白天越积越多，深睡时被冲向右边
    const flow = prog(5.5, 1);
    for (let k = 0; k < 26; k++) {
      const appear = clamp((lt - rnd(k) * 3) * 2, 0, 1);
      const bxw = x0 + w * 0.14 + gw * Math.floor(rnd(k + 40) * cols) + gw, byw = y0 + gh * Math.floor(rnd(k + 80) * rows) + gh * (0.2 + rnd(k + 90) * 0.6);
      let x = bxw - gw * 0.02, y = byw;
      if (flow > 0) { const t = ((lt - 5.5) * 0.12 + rnd(k + 5)) % 1; x = lerp(x0 + w * 0.14, x0 + w * 1.02, t); y = byw + Math.sin(t * 12 + k) * gh * 0.03; }
      if (x > x0 + w - 8) continue;
      ctx.save(); ctx.globalAlpha *= appear * (flow > 0 ? 0.9 : 1);
      ctx.beginPath(); ctx.arc(x, y, Math.max(2.5, H * 0.008), 0, Math.PI * 2); ctx.fillStyle = "#a89aa2"; ctx.fill(); ctx.restore();
    }
    // 脑脊液水流
    if (flow > 0) {
      ctx.save(); ctx.globalAlpha *= flow;
      for (let r = 0; r < rows + 1; r++) {
        const yy = y0 + gh * r + (r === 0 ? gh * 0.08 : r === rows ? -gh * 0.08 : 0);
        ctx.strokeStyle = alpha("#4fa8dc", 0.55); ctx.lineWidth = Math.max(3, gh * 0.05); ctx.setLineDash([gh * 0.12, gh * 0.12]); ctx.lineDashOffset = -time * gh * 0.6;
        ctx.beginPath(); ctx.moveTo(vx + w * 0.03, yy); ctx.lineTo(x0 + w - 6, yy); ctx.stroke();
      }
      ctx.setLineDash([]); ctx.restore();
      sfx("哗～", x0 + w * 0.8, y0 + h * 0.12, H * 0.05, "#4fa8dc", -0.1, flow);
    }
    const midY = y0 + gh;
    callout("cl-waste", win(1, 5), x0 + w * 0.14 + gw * 1.02, y0 + gh * 0.5, x0 + w * 0.4, y0 + h * 0.08, "代谢废物，如 β-淀粉样蛋白");
    callout("cl-gap", win(4.5, 9), x0 + w * 0.14 + gw * 2, midY, x0 + w * 0.5, y0 + h * 0.9, "深睡：细胞间隙变宽");
    callout("cl-csf", lt > 8.5, vx + w * 0.1, midY, x0 + w * 0.45, y0 + h * 0.9, "脑脊液把废物冲走");
    say("cl-note", lt > 10, x0 + w * 0.7, y0 + h * 0.5, x0 + w * 0.72, y0 + h * 0.2, "人脑里效果多大，还在研究中", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.lavDeep, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#d0608a", true);
  }
  const VIEWS = [viewChart, viewWaves, viewShift, viewMute, viewDrug, viewClean];
  function draw() {
    ctx.fillStyle = "#f7f4fd"; ctx.fillRect(0, 0, W, H);
    VIEWS.forEach((f, i) => { if (S["v" + i] > 0.02) f(S["v" + i]); });
    hud();
  }

  return {
    chapters: CH, state: S, dur: 14, accent: "#9fa8e8",
    titleCard: { lines: ["一夜的换班：", "快速眼动和非快速眼动"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
