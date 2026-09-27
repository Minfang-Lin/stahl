Anima.register("daytime-sleepiness", {
    "title": "白天为什么总犯困：呼吸暂停和轮班",
    "tag": "睡眠与觉醒",
    "headline": "白天总犯困，【原因】可能在夜里",
    "lede": "白天怎么都睡不醒，不一定是懒，也不只是发作性睡病。夜里喉咙一次次塌下来，大脑一次次被叫醒；身体钟和排班对不上；觉欠得太多；吃的药挡住了叫醒员。看懂这几种“困”，才知道该从哪里下手。",
    "summary": "阻塞性睡眠呼吸暂停：气道塌陷、血氧下降、微觉醒和睡眠碎片化，CPAP 怎样撑开气道；轮班让身体钟错位；睡眠不足和药物引起的嗜睡。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 其他原因的白天嗜睡",
    "footer": "白天总犯困、打鼾很响或被人看到夜里憋气，可以去睡眠门诊或呼吸科做睡眠监测；犯困时请不要开车。",
    "canvasLabel": "睡着后喉咙肌肉卫兵松手、气道塌下来，大脑反复被叫醒，正压通气把气道撑开，以及身体钟和排班表对不上的动画",
    "regions": ["hypo", "brainstem"],
    "parts": ["sleep"],
    "cast": ["His", "neuron", "drug"],
    "color": "#9fb8e8"
  }, () => {
  const CH = [
    { title: "气道塌下来了", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["气道", "通畅"], pill2: ["喉咙肌肉", "绷紧"],
      text: "白天总犯困，常见的原因之一藏在夜里的喉咙里。醒着的时候，喉咙周围的肌肉一直绷着劲，把软软的气道撑开，空气顺顺地进出肺。睡着以后，这些肌肉放松下来，气道变窄，气流挤过去让软组织抖动，就是打鼾；有的人气道干脆塌下来，呼吸停住了，这就是阻塞性睡眠呼吸暂停。",
      fact: "阻塞性睡眠呼吸暂停：睡着后上气道反复变窄、塌陷，气流减少甚至停止" },
    { title: "一次次被叫醒", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["微觉醒", "0 次"], pill2: ["血氧", "下降 ↓"],
      text: "呼吸一停，血液里的氧气慢慢往下掉。大脑察觉到危险，拉响警报：一次只有几秒的“微觉醒”，喉咙肌肉重新绷紧，气道打开，人猛吸一口气，又接着睡。然后气道再塌、再被叫醒……一晚上可能反复几十甚至上百次。因为每次醒得很短，第二天本人几乎什么都不记得。",
      fact: "呼吸暂停常以短暂的微觉醒结束，本人通常察觉不到" },
    { title: "睡成了碎片", v0: 0, v1: 1, v2: 0, v3: 0,
      pill: ["睡眠", "碎片化"], pill2: ["白天", "犯困"],
      text: "正常的睡眠像下楼梯，一级级走到深睡，再慢慢回来，一夜转好几圈。呼吸暂停的人，刚走几级就被叫醒拉回上面，很难走到深处，睡眠被切成了碎片。所以就算在床上躺够了时间，白天还是困：开会打瞌睡，开车也犯困。家人常常先发现：鼾声很响，还会突然停一下气。",
      fact: "睡眠被切碎，躺够时间也不解乏；响亮的鼾声和被看到憋气是重要线索" },
    { title: "用气压把气道撑开", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["CPAP", "开机"], pill2: ["血氧", "稳住"],
      text: "治疗的核心是持续气道正压通气（CPAP）。睡觉时戴上面罩，机器送出带一点压力的空气，像在气道里充了一个气垫，从里面把它撑开，肌肉放松了也塌不下来。呼吸不再中断，大脑不用一次次拉警报，睡眠重新连成一片。减重、侧睡也有帮助；规律使用后仍然很困，医生可能考虑加用促醒药。",
      fact: "CPAP 用气压从里面撑开气道，是中重度阻塞性睡眠呼吸暂停的主要治疗" },
    { title: "身体钟和排班对不上", v0: 0, v1: 0, v2: 1, v3: 0,
      pill: ["现在", "晚上 8 点"], pill2: ["身体钟", "醒"],
      text: "还有一种困，是时间对不上。上夜班或轮班时，下丘脑的主时钟还按“白天醒、夜里睡”在走：半夜要干活，它却在说“该睡了”，人就昏昏沉沉；早上下班回家想补觉，它又在喊“天亮了，起来”，躺下也睡不踏实。这叫轮班工作睡眠障碍，“身体里的小时钟”那一集讲过这座时钟怎样对表。",
      fact: "轮班让作息和身体钟错位：该醒的时候困，该睡的时候睡不着" },
    { title: "睡不够，和让人犯困的药", v0: 0, v1: 0, v2: 0, v3: 1,
      pill: ["困意债", "越攒越多"], pill2: ["H1 门", "被挡住"],
      text: "最常见的原因，其实是睡得不够：每天少睡一点，困意就像欠债一样越攒越多。有些药物也会让人白天犯困，比如一些抗组胺药、抗精神病药和抗抑郁药会挡住组胺的 H1 门，叫醒员组胺就叫不醒人。所以白天总犯困，先找原因：是呼吸、时钟、睡眠不足，还是药物？光靠多喝咖啡，解决不了问题。",
      fact: "白天嗜睡要先找原因：睡眠呼吸暂停、轮班、睡眠不足、药物都很常见" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { tissue: "#f6c3c9", tissueD: "#eea5b0", air: "#fdf8fb", cush: "#cfe6fb", lung: "#ffc9cf", night: "#8c86c9", brain: "#ffd9e2" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0 };
  // 平滑变化的量：sag 气道塌陷程度，guard 肌肉卫兵清醒程度，brain 大脑清醒程度，o2 血氧，cush CPAP 气垫
  const V = { sag: 0, guard: 1, brain: 1, o2: 1, cush: 0 };
  let airPh = 0;

  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;

  function wakeNow() { // 第 2 幕：两次微觉醒
    return cur === 1 && ((lt > 3.5 && lt < 6.5) || lt > 10.5 && lt < 13);
  }
  function targets() {
    if (cur === 0) {
      const sl = lt > 3.5;
      return { sag: !sl ? 0 : lt < 8.5 ? 0.55 : 1, guard: sl ? 0 : 1, brain: sl ? 0 : 1, o2: 1, cush: 0 };
    }
    if (cur === 1) {
      const w = wakeNow();
      return { sag: w ? 0 : 1, guard: w ? 1 : 0, brain: w ? 1 : 0, o2: w ? 1 : 0.25, cush: 0 };
    }
    if (cur === 3) {
      const on = lt > 1.5;
      return { sag: on ? 0 : 1, guard: 0, brain: 0, o2: on ? 1 : 0.5, cush: on ? 1 : 0 };
    }
    return { sag: 0, guard: 1, brain: 1, o2: 1, cush: 0 };
  }
  function update(dt) {
    lt = Anima.sceneTime;
    const T = targets();
    const sm = (k, up, down) => { const r = T[k] > V[k] ? up : down; V[k] = lerp(V[k], T[k], 1 - Math.exp(-dt * r)); };
    sm("sag", cur === 0 ? 0.9 : 1.1, 5); sm("guard", 5, 1.5); sm("brain", 6, 1.5); sm("o2", 1.4, 0.55); sm("cush", 2, 3);
    airPh += dt * 0.22 * clamp(1 - V.sag * 1.05, 0, 1) * (1 + V.cush * 0.4);
  }

  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return w;
  }
  function sunMoon(x, y, r, day) {
    if (day > 0.5) {
      glow(x, y, r * 2.4, C.gold, 0.7);
      ctx.strokeStyle = "#f2b93b"; ctx.lineWidth = Math.max(1.5, r * 0.18); ctx.lineCap = "round";
      for (let k = 0; k < 8; k++) { const q = k * Math.PI / 4 + time * 0.3; ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * r * 1.3, y + Math.sin(q) * r * 1.3); ctx.lineTo(x + Math.cos(q) * r * 1.7, y + Math.sin(q) * r * 1.7); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffd96b"; ctx.fill(); outline(1.6); ctx.stroke();
    } else {
      glow(x, y, r * 2.2, "#c9c3ff", 0.6);
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fff4c2"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.beginPath(); ctx.arc(x + r * 0.45, y - r * 0.25, r * 0.8, 0, Math.PI * 2); ctx.fillStyle = mix("#e9e6fb", "#f6eef8", 0.4); ctx.fill();
    }
  }
  function brainBlob(x, y, r, awake, alarm) {
    glow(x, y, r * 2, alarm ? C.bad : "#ffd1dc", alarm ? 0.5 + 0.3 * Math.sin(time * 14) : 0.4);
    ctx.beginPath();
    for (let i = 0; i <= 24; i++) {
      const q = i / 24 * Math.PI * 2, rr = r * (1 + 0.07 * Math.sin(q * 6));
      const px = x + Math.cos(q) * rr * 1.2, py = y + Math.sin(q) * rr * 0.9;
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    }
    ctx.closePath(); ctx.fillStyle = C.brain; ctx.fill(); outline(2); ctx.stroke();
    ctx.strokeStyle = alpha(C.line, 0.4); ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.moveTo(x - r * 0.6, y - r * 0.5); ctx.quadraticCurveTo(x - r * 0.2, y - r * 0.2, x - r * 0.5, y + r * 0.1); ctx.moveTo(x + r * 0.5, y - r * 0.55); ctx.quadraticCurveTo(x + r * 0.2, y - r * 0.2, x + r * 0.6, y); ctx.stroke();
    if (awake > 0.5) face(x, y + r * 0.2, r * 0.45, alarm ? -1 : 1);
    else { // 闭眼睡觉的小脸
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(1.2, r * 0.05);
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x + d * r * 0.25, y + r * 0.12, r * 0.1, 0.1 * Math.PI, 0.9 * Math.PI); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(x, y + r * 0.38, r * 0.06, 0, Math.PI * 2); ctx.stroke();
    }
  }

  // ---------- 气道画面（第 1、2、4 幕）----------
  function airGeo() {
    const n = nar(), top = Anima.topSafe();
    const x0 = W * 0.05, cy = H * (n ? 0.64 : 0.6), th = H * 0.068, LX = W - H * 0.17, x1 = LX - H * 0.13;
    const xs = x0 + (x1 - x0) * 0.5, bw = (x1 - x0) * 0.13;
    const ceil = (x) => cy - th + V.sag * 2 * th * 0.97 * Math.exp(-Math.pow((x - xs) / bw, 2)) * (1 - V.cush);
    return { n, top, x0, x1, cy, th, xs, bw, LX, ceil, yT: cy - th - H * 0.1, brain: { x: x0 + H * 0.13, y: top + H * 0.13, r: H * 0.07 } };
  }
  function airView(a) {
    const g = airGeo(), n = g.n, top = g.top;
    ctx.save(); ctx.globalAlpha *= a;
    const day = cur === 0 ? 1 - prog(3.5, 1.2) : 0;
    Anima.wash(mix("#ece8fb", "#f4f9ff", day), mix("#f3ecf8", "#fdeef3", day));
    Anima.bokeh(6, day > 0.5 ? "#ffd1dc" : "#d8d2f7", 0.7, 12);
    const alarm = wakeNow() && lt % 7 < 5.5;
    // 上下两块软组织
    const x0 = g.x0, x1 = g.x1, cy = g.cy, th = g.th;
    const wob = V.sag > 0.3 && V.sag < 0.9 && V.guard < 0.5 ? Math.sin(time * 22) * th * 0.06 : 0;
    ctx.beginPath(); ctx.moveTo(x0, g.yT);
    ctx.lineTo(x1, g.yT);
    for (let i = 40; i >= 0; i--) { const x = x0 + (x1 - x0) * i / 40; ctx.lineTo(x, g.ceil(x) + wob * Math.exp(-Math.pow((x - g.xs) / g.bw, 2))); }
    ctx.closePath(); ctx.fillStyle = C.tissue; ctx.fill(); outline(2); ctx.stroke();
    const fl = cy + th, fb = fl + H * 0.08;
    // 气道内部（CPAP 时是淡蓝色的气垫）
    ctx.save(); ctx.beginPath(); ctx.moveTo(x0, fl);
    for (let i = 0; i <= 40; i++) { const x = x0 + (x1 - x0) * i / 40; ctx.lineTo(x, g.ceil(x) + wob * Math.exp(-Math.pow((x - g.xs) / g.bw, 2))); }
    ctx.lineTo(x1, fl); ctx.closePath();
    ctx.fillStyle = mix(C.air, C.cush, V.cush); ctx.fill();
    ctx.restore();
    rrect(x0, fl, x1 - x0, fb - fl, 4); ctx.fillStyle = C.tissue; ctx.fill(); outline(2); ctx.stroke();
    // 空气小颗粒：从口鼻流向肺
    for (let k = 0; k < 16; k++) {
      const p = (airPh + k / 16) % 1, x = lerp(x0, x1 + H * 0.05, p);
      const room = (fl - g.ceil(Math.min(x, x1))) / 2;
      if (room < H * 0.01) continue;
      const y = fl - room + Math.sin(k * 2.3) * room * 0.55;
      const past = x > g.xs && V.sag > 0.85 ? 0 : 1;
      ctx.beginPath(); ctx.arc(x, y, H * 0.009, 0, Math.PI * 2); ctx.fillStyle = alpha("#7fb8e6", 0.8 * past); ctx.fill();
    }
    if (V.cush > 0.1) { // 气垫的推力箭头
      for (let k = 0; k < 3; k++) {
        const p = (time * 0.4 + k / 3) % 1, x = lerp(x0 + H * 0.03, x1 - H * 0.05, p);
        ctx.save(); ctx.globalAlpha *= V.cush * Math.sin(p * Math.PI); ctx.strokeStyle = C.skyDeep; ctx.lineWidth = Math.max(2, H * 0.008);
        ctx.beginPath(); ctx.moveTo(x - H * 0.03, cy - th * 0.5); ctx.lineTo(x, cy); ctx.lineTo(x - H * 0.03, cy + th * 0.5); ctx.stroke(); ctx.restore();
      }
    }
    // 口鼻入口
    ctx.beginPath(); ctx.ellipse(x0, cy, H * 0.018, th * 1.05, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.8); ctx.stroke();
    // 肺
    const LX = g.LX, lr = H * 0.07;
    const lungMood = V.o2 > 0.7 ? 1 : V.o2 > 0.5 ? 0 : -1;
    outline(2); ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.moveTo(x1, cy - th * 0.45); ctx.lineTo(LX, cy - th * 0.45); ctx.lineTo(LX, cy + th * 0.45); ctx.lineTo(x1, cy + th * 0.45); ctx.fill(); ctx.stroke();
    for (const d of [-1, 1]) {
      const breathe = 1 + Math.sin(airPh * 40) * 0.04 * (1 - V.sag);
      ctx.beginPath(); ctx.ellipse(LX + d * lr * 0.85, cy + H * 0.02, lr * 0.75 * breathe, lr * 1.35 * breathe, d * 0.12, 0, Math.PI * 2);
      ctx.fillStyle = mix("#d9d0e6", C.lung, V.o2); ctx.fill(); outline(2); ctx.stroke();
    }
    face(LX, cy + H * 0.03, lr * 0.55, lungMood);
    // 肌肉卫兵：站在上方软组织上，用绳子把气道顶上的软组织拉住
    const s = H * 0.04, gx = [g.xs - H * 0.12, g.xs + H * 0.12];
    const bumpY = g.ceil(g.xs) + (1 - V.sag) * 0; // 绳子拴在塌陷最深处
    gx.forEach((x, i) => {
      const hx = x + (i ? -s * 0.9 : s * 0.9), hy = g.yT - s * 1.1;
      ctx.save(); ctx.strokeStyle = "#b0707c"; ctx.lineWidth = Math.max(1.8, H * 0.006);
      ctx.beginPath(); ctx.moveTo(hx, hy);
      const slack = (1 - V.guard) * H * 0.05;
      ctx.quadraticCurveTo((hx + g.xs) / 2, (hy + bumpY) / 2 + slack, g.xs + (i ? H * 0.012 : -H * 0.012), bumpY - H * 0.004);
      ctx.stroke(); ctx.restore();
      chara(x, g.yT, s, { who: "neuron", hair: "#e0787f", cloth: "#ffd0d4", tag: i === 0 && !n ? "喉咙肌肉" : null, dir: i ? -1 : 1,
        arms: V.guard > 0.5 ? "hold" : "down", eyes: V.guard > 0.5 ? "open" : "sleepy", mouth: V.guard > 0.5 ? "flat" : "o", gray: (1 - V.guard) * 0.35, shadow: false });
      if (V.guard < 0.4 && (i + Math.floor(time * 0.8)) % 2 === 0) emote("zzz", x + s * 0.8, g.yT - s * 3.4, s * 0.6);
    });
    if (n) { if (cur === 0 && lt < 4.5) plate("喉咙肌肉", g.xs, fb + H * 0.045, fsz(0.026)); }
    else { if (cur !== 3) plate("口鼻", x0 + H * 0.04, fb + H * 0.045, fsz(0.026)); plate("肺", LX, cy + H * 0.2, fsz(0.026)); }
    // 大脑和通往卫兵的神经
    const B = g.brain;
    ctx.save(); ctx.setLineDash([5, 6]); outline(1.4); ctx.beginPath(); ctx.moveTo(B.x + B.r, B.y + B.r * 0.5); ctx.quadraticCurveTo(gx[0] - H * 0.02, B.y + B.r, gx[0], g.yT - s * 3.4); ctx.stroke(); ctx.restore();
    if (alarm) Anima.spark([[B.x + B.r, B.y + B.r * 0.5], [gx[0] - H * 0.04, B.y + B.r * 0.9], [gx[0], g.yT - s * 3.4]], (time * 1.2) % 1, H * 0.02, C.gold);
    brainBlob(B.x, B.y, B.r, V.brain, alarm);
    sunMoon(B.x + B.r * 1.9, B.y - B.r * 0.4, H * 0.024, cur === 0 && lt < 3.5 ? 1 : 0);
    if (V.brain < 0.4 && Math.floor(time * 0.7) % 2 === 0) emote("zzz", B.x + B.r * 1.3, B.y + B.r * 0.6, B.r * 0.4);
    if (alarm) sfx("叮铃铃！", B.x, B.y + B.r * 1.6, H * 0.036, C.bad, -0.1, 1);
    // 打鼾、憋气、猛吸一口气
    const snore = V.sag > 0.3 && V.sag < 0.9 && V.guard < 0.5;
    sfx("呼——噜", g.xs - H * 0.2, fb + H * 0.05, H * 0.04, C.lavDeep, -0.08, snore ? 0.6 + 0.4 * Math.sin(time * 5) : 0);
    const gasp = (cur === 1 && ((lt > 4.2 && lt < 5.6) || (lt > 11.2 && lt < 12.6)));
    sfx("哈——！", LX, cy - H * 0.2, H * 0.045, C.skyDeep, 0.1, gasp ? 1 : 0);
    // 血氧条（第 2、4 幕）
    if (cur === 1 || cur === 3) {
      const gy = H * 0.9, bx0 = W * (n ? 0.3 : 0.4), bx1 = W * 0.94, bh = H * 0.032, fs = fsz(0.026);
      text("血氧", bx0 - fs * 0.6, gy + bh / 2, fs, C.ink, "right");
      rrect(bx0, gy, bx1 - bx0, bh, bh / 2); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.6); ctx.stroke();
      rrect(bx0, gy, Math.max(bh, (bx1 - bx0) * (0.35 + 0.65 * V.o2)), bh, bh / 2); ctx.fillStyle = mix(C.bad, "#7cc8e8", clamp((V.o2 - 0.25) / 0.7, 0, 1)); ctx.fill(); outline(1.6); ctx.stroke();
    }
    // CPAP 机器
    if (cur === 3) {
      const mx = x0 + H * 0.12, my = H * 0.84, mw = H * 0.17, mh = H * 0.1;
      ctx.save(); ctx.strokeStyle = "#9fc3ea"; ctx.lineWidth = H * 0.018; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(mx, my - mh / 2); ctx.quadraticCurveTo(x0 - H * 0.02, my - mh, x0 - H * 0.005, cy + th * 0.6); ctx.stroke(); ctx.restore();
      rrect(mx - mw / 2, my - mh / 2, mw, mh, H * 0.02); ctx.fillStyle = "#eaf4fd"; ctx.fill(); outline(2); ctx.stroke();
      face(mx, my + mh * 0.05, mh * 0.35, lt > 1.5 ? 1 : 0);
      if (lt > 1.5) sparkles(mx, my, mw * 0.7, 3, 0.8, 5);
    }
    // 标注和对话（最后画）
    const B2 = g.brain;
    if (cur === 0) {
      callout("musc", lt > 0.8 && lt < 3.6, gx[1] + s * 0.5, g.yT - s * 1.5, n ? W * 0.62 : W * 0.66, top + H * 0.06, "醒着：喉咙肌肉撑住气道");
      callout("narrow", lt > 5 && lt < 8.8, g.xs, g.ceil(g.xs) + H * 0.01, n ? W * 0.55 : W * 0.6, fb + H * 0.1, "肌肉放松：气道变窄，打鼾");
      callout("apnea", lt > 9.8, g.xs, cy, n ? W * 0.5 : W * 0.56, fb + H * 0.1, "气道塌陷：呼吸停住了");
      say("sleepy", lt > 4 && lt < 8, gx[0], g.yT - s * 3.4, n ? W * 0.6 : W * 0.62, top + H * 0.07, "睡着了……手松了……", "think");
      say("air", lt > 10.3, LX, cy - H * 0.12, LX - H * 0.12, top + H * 0.12, "空气呢？！", "shout");
    }
    if (cur === 1) {
      callout("o2", lt > 1 && lt < 3.5, W * (n ? 0.45 : 0.55), H * 0.9, W * (n ? 0.55 : 0.62), H * 0.78, "呼吸停住：血氧往下掉");
      callout("arouse", lt > 4 && lt < 9, B2.x + B2.r, B2.y, n ? W * 0.62 : W * 0.6, top + H * 0.08, "微觉醒：只醒几秒");
      say("wake", lt > 3.6 && lt < 6, B2.x + B2.r, B2.y, n ? W * 0.5 : W * 0.34, top + H * 0.06, "醒醒！快喘气！", "shout");
      say("again", lt > 9.2, B2.x, B2.y, W * 0.45, n ? cy : fb + H * 0.08, "一夜几十上百次，本人却几乎不记得", "box");
    }
    if (cur === 3) {
      callout("cpap", lt > 2 && lt < 8.5, x0 + H * 0.12 + H * 0.085, H * 0.8, n ? W * 0.62 : W * 0.45, n ? fb + H * 0.02 : H * 0.82, "正压通气：用气压撑开气道");
      say("ok", lt > 3.5 && lt < 8.5, LX, cy - H * 0.12, LX - H * 0.1, top + H * 0.12, "呼吸顺畅啦～", "say");
      say("rest", lt > 9, B2.x, B2.y, W * 0.42, cy, n ? "还是很困？请医生评估" : "规律用了还是很困？找医生评估，可能加用促醒药", "box");
    }
    ctx.restore();
  }

  // ---------- 第 3 幕：睡眠楼梯被切碎 ----------
  function depthN(u) { // 正常一夜：4～5 个周期，前半夜深睡多
    if (u < 0.03 || u > 0.97) return 0;
    const f = (u * 4.5) % 1, v = (1 - Math.cos(f * Math.PI * 2)) / 2;
    return 1 + Math.round(v * (u < 0.55 ? 1 : 0.7));
  }
  function hypno(x, y, w, h, frag, p, title) {
    const fs = fsz(0.026);
    text(title, x, y - fs * 1.1, fs, C.ink, "left");
    rrect(x, y, w, h, 10); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1.6); ctx.stroke();
    const lv = (d) => y + h * (0.2 + 0.3 * d);
    ctx.save(); ctx.setLineDash([3, 5]); ctx.strokeStyle = alpha(C.line, 0.3); ctx.lineWidth = 1;
    for (let d = 0; d < 3; d++) { ctx.beginPath(); ctx.moveTo(x + w * 0.08, lv(d)); ctx.lineTo(x + w - 6, lv(d)); ctx.stroke(); }
    ctx.restore();
    const sfs = fsz(0.022);
    text("醒", x + w * 0.04, lv(0), sfs, C.soft); if (!nar()) text("浅", x + w * 0.04, lv(1), sfs, C.soft); text("深", x + w * 0.04, lv(2), sfs, C.soft);
    const N = 60, ticks = [];
    ctx.strokeStyle = frag ? C.lavDeep : C.mintDeep; ctx.lineWidth = Math.max(2, H * 0.007); ctx.lineJoin = "round";
    ctx.beginPath();
    let prev = 0;
    for (let i = 0; i <= N * p; i++) {
      const u = i / N; let d = depthN(u);
      if (frag) { d = Math.min(d, 1); if (i % 5 === 3) { d = 0; ticks.push(i); } }
      const xx = x + w * 0.08 + (w * 0.9) * u;
      if (i === 0) ctx.moveTo(xx, lv(d)); else { ctx.lineTo(xx, lv(prev)); ctx.lineTo(xx, lv(d)); }
      prev = d;
    }
    ctx.stroke();
    ticks.forEach((i) => { const xx = x + w * 0.08 + w * 0.9 * i / N; bolt(xx, lv(0) - h * 0.08, h * 0.09, 1); });
    return { lv, x0: x + w * 0.08, w: w * 0.9 };
  }
  function bolt(x, y, s, a) { Anima.bolt(x, y, s, a, C.bad); }
  function stairsView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#eeeafb", "#fdf1f0");
    Anima.bokeh(6, "#d8d2f7", 0.6, 31);
    const gx = W * 0.06, gw = W * 0.88, gh = H * 0.16, fs = fsz(0.026);
    const y1 = top + H * 0.08, y2 = y1 + gh + H * 0.1;
    const p = clamp(lt / 6, 0, 1);
    hypno(gx, y1, gw, gh, false, p, "顺畅的一夜：一级级走到深睡");
    const F = hypno(gx, y2, gw, gh, true, p, "呼吸暂停的一夜：一次次被拉回来");
    // 白天：坐在桌前打瞌睡
    const dA = prog(6.2, 1.2), fy = H * 0.95;
    ctx.save(); ctx.globalAlpha *= dA;
    const dx = W * (n ? 0.3 : 0.32), s = H * (n ? 0.042 : 0.05);
    sunMoon(W * 0.08, fy - H * 0.2, H * 0.022, 1);
    rrect(dx + s * 0.8, fy - s * 1.6, s * 3.8, s * 0.35, 4); ctx.fillStyle = "#e8c9a8"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = "#e8c9a8"; ctx.fillRect(dx + s * 1.1, fy - s * 1.25, s * 0.3, s * 1.25); ctx.fillRect(dx + s * 4.0, fy - s * 1.25, s * 0.3, s * 1.25);
    rrect(dx + s * 3.2, fy - s * 2.4, s * 0.7, s * 0.8, 3); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
    const nod = Math.sin(time * 1.6) > 0.3;
    chara(dx, fy, s, { who: "neuron", eyes: nod ? "closed" : "sleepy", mouth: nod ? "o" : "wavy", arms: "down", tag: "白天" });
    if (nod) emote("zzz", dx + s, fy - s * 3.5, s * 0.6);
    sfx("哈欠～", dx - s * 1.8, fy - s * 3.6, H * 0.034, C.lavDeep, -0.1, nod ? 0 : 1);
    const fx = W * (n ? 0.8 : 0.78);
    chara(fx, fy, s * 0.95, { who: "neuron", hair: "#6d8fbf", cloth: "#d9e8f7", style: "long", eyes: "open", mouth: "wavy", brow: "worry", arms: "down", tag: "家人", dir: -1 });
    ctx.restore();
    callout("frag", lt > 2.4 && lt < 6.2, F.x0 + F.w * 0.4, F.lv(0), n ? W * 0.6 : W * 0.55, y2 + gh + H * 0.06, "微觉醒把睡眠切成碎片");
    callout("deep", lt > 6.5 && lt < 9.6, F.x0 + F.w * 0.25, F.lv(2), n ? W * 0.62 : W * 0.66, y2 + gh + H * 0.06, "很难走到深睡");
    say("fam", lt > 9.9, fx, fy - s * 3.5, n ? W * 0.62 : W * 0.66, fy - s * 5.2, "夜里鼾声好响，还会突然停一下气！", "think");
    ctx.restore();
  }

  // ---------- 第 5 幕：两个表盘 ----------
  const hourNow = () => 20 + clamp(lt, 0, 13) * 1.35;
  const inRange = (h, a, b) => { h = ((h % 24) + 24) % 24; return a <= b ? h >= a && h < b : h >= a || h < b; };
  const bodySleep = (h) => inRange(h, 23, 7);
  const shiftWork = (h) => inRange(h, 21, 7);
  const shiftBed = (h) => inRange(h, 8, 15);
  function hourName(h) {
    h = Math.floor(((h % 24) + 24) % 24);
    const pre = h < 5 ? "凌晨" : h < 9 ? "早上" : h < 12 ? "上午" : h < 14 ? "中午" : h < 18 ? "下午" : "晚上";
    const hh = h > 12 ? h - 12 : h;
    return `${pre} ${hh} 点`;
  }
  function dial(cx, cy, r, secs, h, title) {
    const ang = (x) => -Math.PI / 2 + x / 24 * Math.PI * 2;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = "#fffdf8"; ctx.fill();
    secs.forEach((sc) => {
      const b = sc.to < sc.from ? sc.to + 24 : sc.to;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, ang(sc.from), ang(b)); ctx.closePath(); ctx.fillStyle = sc.color; ctx.fill();
    });
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); outline(2.2); ctx.stroke();
    const fs = fsz(0.03);
    secs.forEach((sc) => {
      const b = sc.to < sc.from ? sc.to + 24 : sc.to, m = ang((sc.from + b) / 2);
      text(sc.label, cx + Math.cos(m) * r * 0.62, cy + Math.sin(m) * r * 0.62, fs, C.ink);
    });
    sunMoon(cx, cy - r - H * 0.035, H * 0.016, 0); // 顶上是半夜
    const q = ang(h);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * 0.01); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(q) * r * 0.88, cy + Math.sin(q) * r * 0.88); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, H * 0.012, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    plate(title, cx, cy + r + H * 0.05, fsz(0.028));
  }
  function clockView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    const h = hourNow(), night = inRange(h, 19, 7);
    Anima.wash(night ? "#e7e4fa" : "#f4f9ff", night ? "#f1ecf8" : "#fdf3ee");
    Anima.bokeh(6, night ? "#d8d2f7" : "#ffe3b0", 0.7, 44);
    const r = H * (n ? 0.14 : 0.17), cyD = top + H * (n ? 0.06 : 0.08) + r + H * 0.04;
    const L = { x: n ? r + W * 0.04 : W * 0.2, y: cyD }, R = { x: n ? W - r - W * 0.04 : W * 0.8, y: cyD };
    dial(L.x, L.y, r, [{ from: 23, to: 7, color: "#d9d4f5", label: "睡" }, { from: 7, to: 23, color: "#fff3c4", label: "醒" }], h, n ? "身体钟" : "身体钟（SCN）");
    dial(R.x, R.y, r, [{ from: 21, to: 7, color: "#ffd9c2", label: "上班" }, { from: 8, to: 15, color: "#d9d4f5", label: "睡觉" }, { from: 15, to: 21, color: "#ffffff", label: "" }], h, "排班表");
    const mism = (bodySleep(h) && shiftWork(h)) || (!bodySleep(h) && shiftBed(h));
    const mx = W / 2, my = n ? H * 0.9 : cyD;
    // 中间：上班的人 / 回家躺下的人
    const s = H * 0.045, px = W / 2, py = n ? H * 0.94 : H * 0.82;
    if (!n || true) {
      if (shiftWork(h) || inRange(h, 7, 8)) {
        const walking = inRange(h, 7, 8);
        rrect(px - s * 3.2, py - s * 1.7, s * 2.2, s * 0.3, 4); ctx.fillStyle = "#e8c9a8"; ctx.fill(); outline(1.4); ctx.stroke();
        glow(px - s * 2.4, py - s * 2.2, s * 1.2, C.gold, 0.6);
        const sleepy = bodySleep(h);
        chara(px + (walking ? (h % 1) * s * 3 : 0), py, s, { who: "neuron", eyes: sleepy ? "sleepy" : "open", mouth: sleepy ? "wavy" : "smile", arms: walking ? "down" : "hold", item: walking ? null : "lamp", walk: walking ? time * 9 : null, tag: "夜班" });
        if (sleepy) emote("sweat", px + s, py - s * 3.2, s * 0.6);
      } else if (shiftBed(h) || inRange(h, 15, 20)) {
        rrect(px - s * 2.6, py - s * 0.9, s * 5.2, s * 0.9, s * 0.2); ctx.fillStyle = "#cfe0f5"; ctx.fill(); outline(1.6); ctx.stroke();
        rrect(px - s * 2.4, py - s * 1.45, s * 1.6, s * 0.55, s * 0.25); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
        ctx.save(); ctx.translate(px + s * 1.9, py - s * 0.95); ctx.rotate(-Math.PI / 2);
        chara(0, 0, s, { who: "neuron", eyes: "open", mouth: "wavy", arms: "down", shadow: false, bob: 0 });
        ctx.restore();
        rrect(px + s * 0.5, py - s * 1.5, s * 2.1, s * 0.75, s * 0.3); ctx.fillStyle = "#f7b9c8"; ctx.fill(); outline(1.4); ctx.stroke();
        emote("?", px - s * 0.4, py - s * 2.9, s * 0.7);
      } else {
        chara(px, py, s, { who: "neuron", eyes: "happy", arms: "wave", tag: "准备上班" });
      }
    }
    // 两个表盘之间：对上了 / 对不上
    const symY = n ? L.y + r + H * 0.13 : cyD;
    if (mism) { sfx("≠", mx, n ? L.y : symY, H * 0.09, C.bad, 0, 0.8 + 0.2 * Math.sin(time * 6)); }
    else text("＝", mx, n ? L.y : symY, H * 0.06, C.good);
    // 标注
    if (!n) callout("body", lt > 1 && lt < 5, L.x + r * 0.4, L.y - r * 0.5, n ? W * 0.3 : W * 0.32, n ? H * 0.64 : H * 0.72, "身体钟：夜里该睡");
    if (!n) callout("work", lt > 3 && lt < 7.5, R.x - r * 0.4, R.y - r * 0.4, n ? W * 0.68 : W * 0.68, n ? H * 0.64 : H * 0.72, "排班：夜里要上班");
    say("tired", lt > 2.4 && lt < 7, px, py - s * 3.4, W * 0.5, n ? H * 0.66 : H * 0.55, "半夜干活，好困……", "think");
    say("awake", lt > 9, px, py - s * 2, W * 0.5, n ? H * 0.66 : H * 0.55, "天亮了，身体不让我睡", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：睡眠债和 H1 ----------
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    const fs = fsz(0.03);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function splitView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f3effd");
    Anima.petals(8, 0.5, 60);
    const gap = W * 0.03, cy0 = top + H * 0.07, ch = H * 0.9 - cy0, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: cy0, w: cw, h: ch }, R = { x: gap * 2 + cw, y: cy0, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "睡不够：困意债", "#fff1b8");
    card(R.x, R.y, R.w, R.h, "药物：挡住叫醒员", "#e4e0ff");
    // 左：5 个晚上，每晚少睡的一截飞进罐子
    const fs = fsz(0.024), rowH = L.h * 0.08, bx = L.x + L.w * 0.08, bw = L.w * (n ? 0.5 : 0.52);
    let debt = 0;
    for (let i = 0; i < 5; i++) {
      const y = L.y + L.h * 0.17 + i * rowH * 1.25, t0 = 0.6 + i * 1.3;
      const on = prog(t0, 0.6);
      if (on <= 0) continue;
      ctx.save(); ctx.globalAlpha *= on;
      rrect(bx, y, bw, rowH, rowH / 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.save(); ctx.setLineDash([4, 4]); outline(1.4); ctx.stroke(); ctx.restore();
      const got = 0.68;
      rrect(bx, y, bw * got, rowH, rowH / 2); ctx.fillStyle = "#c9c3f2"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.restore();
      const fly = prog(t0 + 0.6, 0.8);
      debt += fly;
      if (fly > 0 && fly < 1) {
        const jx = L.x + L.w * 0.82, jy = L.y + L.h * 0.62;
        rrect(lerp(bx + bw * got, jx - bw * 0.1, fly), lerp(y, jy, fly), bw * 0.28, rowH * 0.8, rowH / 2); ctx.fillStyle = "#ffb3c1"; ctx.fill(); outline(1.2); ctx.stroke();
      }
    }
    text(n ? "每晚少睡一截" : "每晚：需要的觉 / 实际睡的", bx, L.y + L.h * 0.105, fs, C.soft, "left");
    // 罐子
    const jx = L.x + L.w * 0.82, jw = L.w * 0.22, jt = L.y + L.h * 0.3, jb = L.y + L.h * 0.72;
    const lvl = clamp(debt / 5, 0, 1);
    ctx.save(); rrect(jx - jw / 2, jt, jw, jb - jt, jw * 0.2); ctx.clip();
    ctx.fillStyle = "#ffb3c1"; ctx.fillRect(jx - jw / 2, jb - (jb - jt) * lvl * 0.92, jw, (jb - jt));
    ctx.restore();
    rrect(jx - jw / 2, jt, jw, jb - jt, jw * 0.2); outline(2); ctx.stroke();
    plate("困意", jx, jt - H * 0.04, fs);
    const cs = H * 0.036, sx = L.x + L.w * 0.3, sy = L.y + L.h * 0.95;
    chara(sx, sy, cs, { who: "neuron", eyes: lvl > 0.7 ? "closed" : lvl > 0.3 ? "sleepy" : "open", mouth: lvl > 0.5 ? "o" : "smile", gray: lvl * 0.3, arms: "down" });
    if (lvl > 0.6) emote("zzz", sx + cs, sy - cs * 3.3, cs * 0.6);
    // 右：H1 门
    const my = R.y + R.h * 0.6, rx = R.x + R.w * 0.42, rs = H * 0.05;
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 18); ctx.clip();
    ctx.fillStyle = "#f0ecff"; ctx.fillRect(R.x, my, R.w, R.h);
    ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(R.x, my); ctx.lineTo(R.x + R.w, my); ctx.stroke();
    const blocked = lt > 3.8;
    const rec = Anima.receptor(rx, my, rs, "#d3b8ec", blocked ? 0 : 0.9, { label: n ? null : "H1" });
    if (n) text("H1", rx + rs * 1.1, my + H * 0.04, fsz(0.026), C.ink, "left");
    const cs2 = H * 0.036;
    const hisOut = prog(3.8, 1.2);
    chara(rx - hisOut * R.w * 0.28, rec.site.y + hisOut * H * 0.02, cs2, { who: "His", eyes: blocked ? "teary" : "happy", arms: blocked ? "down" : "up", mouth: blocked ? "sad" : "grin", tag: blocked || n ? null : "组胺", alpha: 1 - hisOut * 0.3, shadow: false });
    if (lt > 2.4) {
      const q = prog(2.4, 1.6);
      chara(lerp(R.x + R.w * 0.9, rx, q), rec.site.y, cs2, { who: "drug", tag: "抗组胺药", hatColor: "#b98ad8", walk: q < 1 ? time * 9 : null, eyes: "open", arms: "down", shadow: false });
    }
    const ppx = R.x + R.w * 0.75, ppy = R.y + R.h * 0.95;
    const dz = prog(5, 2);
    chara(ppx, ppy, cs2, { who: "neuron", eyes: dz > 0.5 ? "sleepy" : "open", mouth: dz > 0.5 ? "o" : "smile", gray: dz * 0.4, arms: "down" });
    if (dz > 0.5) emote("zzz", ppx + cs2, ppy - cs2 * 3.3, cs2 * 0.6);
    callout("h1", lt > 5.5 && lt < 9.5, rx + rs * 0.5, my - rs * 1.2, R.x + R.w * 0.6, R.y + R.h * 0.2, "H1 被占：组胺叫不醒人");
    say("his", lt > 0.6 && lt < 3.6, rx, rec.site.y - cs2 * 1.5, R.x + R.w * (n ? 0.33 : 0.45), my + H * 0.1, "起床啦～！", "say");
    say("find", lt > 9.6, W / 2, H * 0.9, W / 2, H * 0.84, "先找原因：光靠多喝咖啡解决不了", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1], l1 = c.pill[0];
    if (cur === 0) { v1 = V.sag > 0.9 ? "塌陷" : V.sag > 0.3 ? "变窄" : "通畅"; v2 = V.guard > 0.5 ? "绷紧" : "放松"; }
    if (cur === 1) { v1 = ((lt > 3.5 ? 1 : 0) + (lt > 10.5 ? 1 : 0)) + " 次"; v2 = wakeNow() ? "回升 ↑" : "下降 ↓"; }
    if (cur === 3) { v1 = lt > 1.5 ? "开机" : "待机"; v2 = lt > 3 ? "稳住" : "偏低"; }
    if (cur === 4) { const h = hourNow(); v1 = hourName(h); v2 = bodySleep(h) ? "该睡" : "该醒"; }
    pill(14, 12, l1, v1, "#6b8fd6", false);
    pill(W - 14, 12, c.pill2[0], v2, "#c0668a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) airView(S.v0);
    if (S.v1 > 0.02) stairsView(S.v1);
    if (S.v2 > 0.02) clockView(S.v2);
    if (S.v3 > 0.02) splitView(S.v3);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#6b8fd6",
    titleCard: { lines: ["白天为什么", "总犯困？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
