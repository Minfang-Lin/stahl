Anima.register("mood-stabilizers", {
    "title": "锂盐和心境稳定剂",
    "tag": "心境稳定剂",
    "headline": "给心情的跷跷板装上【减震器】",
    "lede": "双相障碍的心境像跷跷板一样忽高忽低。心境稳定剂就像给跷跷板装上减震器：让“高”不那么冲，“低”不那么沉，更重要的是预防下一次发作。来认识老前辈锂盐，还有丙戊酸盐和拉莫三嗪这几位访客。",
    "summary": "锂盐的长处和窄窄的安全区，血锂监测和中毒信号，丙戊酸盐、拉莫三嗪各自擅长什么、要当心什么，以及它们在突触里大概做了什么。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · 心境稳定剂",
    "footer": "用锂盐时如果出现明显手抖、呕吐腹泻、走路不稳或意识模糊，请立刻就医。出现伤害自己的想法时，请马上告诉身边的人并尽快去医院急诊。",
    "canvasLabel": "药物访客给心情跷跷板装上减震器，演示锂盐、丙戊酸盐和拉莫三嗪的作用和注意事项",
    "regions": ["synapse"],
    "parts": ["mood"],
    "cast": ["Glu", "GABA", "drug"],
    "color": "#9ad0c2"
  }, () => {
  const CH = [
    { title: "给跷跷板装减震器", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["作用", "减震"], pill2: ["重点", "防复发"],
      text: "上一集的跷跷板，有时晃得停不下来。心境稳定剂就像给它装上减震器：让躁狂的“高”不那么冲，抑郁的“低”不那么沉，更重要的是减少下一次发作。不过，没有哪一种药样样都行：有的更擅长压住“高”，有的更擅长托住“低”，医生会根据每个人的情况来组合。",
      fact: "心境稳定剂：减轻发作，更重要的是预防复发；不同药物擅长的方向不一样" },
    { title: "老前辈锂盐", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["登场", "1949 年"], pill2: ["擅长", "防复发"],
      text: "锂盐是资历最老的心境稳定剂，1949 年人们发现它能让躁狂平静下来，到现在已经用了七十多年。它既能治疗躁狂，更擅长长期预防躁狂和抑郁再次发作。还有一点很珍贵：不少研究显示，锂盐能降低双相障碍患者的自杀风险。",
      fact: "锂盐：预防复发的“老前辈”，降低自杀风险的证据较充分" },
    { title: "窄窄的安全区", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["治疗窗", "很窄"], pill2: ["定期查", "3 项"],
      text: "锂盐的“安全区”很窄：血里的锂太少不起效，稍微多一点又可能中毒，这叫治疗窗窄。所以用锂盐要定期抽血查血锂浓度，按医生的安排调整。锂盐时间长了可能影响甲状腺和肾脏，所以还要定期查甲状腺功能和肾功能。这些检查不是麻烦，而是让它安全工作的保障。",
      fact: "用锂盐要定期查：血锂浓度、甲状腺功能、肾功能（具体频率听医生安排）" },
    { title: "当心血锂突然升高", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["血锂", "升高 ↑"], pill2: ["中毒信号", "立刻就医"],
      text: "锂主要靠肾脏排出去。天热大量出汗、喝水太少脱水，或者腹泻、呕吐，都可能让血锂升高；布洛芬这类止痛药（NSAIDs）、某些利尿剂和降压药也会。所以看别的病、买止痛药前，要先说自己在用锂盐。如果出现明显手抖、呕吐、走路不稳、意识模糊，要马上就医。",
      fact: "明显手抖、呕吐腹泻、走路不稳、意识模糊：可能是锂中毒，请立刻就医" },
    { title: "丙戊酸盐和拉莫三嗪", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["各有", "所长"], pill2: ["皮疹", "马上说"],
      text: "另外两位访客原本是抗癫痫药。丙戊酸盐对躁狂效果好，但怀孕时使用可能导致胎儿畸形和发育问题，育龄女性一定要先和医生详细讨论。拉莫三嗪更擅长预防抑郁发作，对躁狂帮助不大；它要从小剂量慢慢加上去，因为少数人会出现严重皮疹，一旦出皮疹要马上联系医生。",
      fact: "丙戊酸盐：擅长躁狂，孕期风险高；拉莫三嗪：擅长防抑郁，要慢慢加量、当心皮疹" },
    { title: "它们在突触里做什么", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["机制", "未完全清楚"], pill2: ["用药", "遵医嘱"],
      text: "这些药是怎么减震的？科学家还没有完全弄清，而且各不相同。丙戊酸盐和拉莫三嗪可能作用在离子通道上，让神经元放电不那么“冲”，谷氨酸也少放一些；锂盐则钻进细胞里，调节细胞内的信号接力。另外，一些第二代抗精神病药也常用于双相。无论哪种，都请遵医嘱长期使用，不要自己停药。",
      fact: "机制各不相同：调节谷氨酸、离子通道和细胞内信号等，仍在研究中" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { term: "#ffe0cf", post: "#e3f3ee", rainC: "#8fb3dc" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };
  // 三位药物访客的样子
  const LI = { who: "drug", hatColor: "#9fd3ee", hatColor2: "#ffffff", label: "Li", tag: "锂盐", glasses: true, hair: "#b8b8c8" };
  const VPA = { who: "drug", hatColor: "#ffb3a0", hatColor2: "#ffffff", label: "", tag: "丙戊酸盐" };
  const LTG = { who: "drug", hatColor: "#bfe39a", hatColor2: "#ffffff", label: "", tag: "拉莫三嗪" };
  const drug = (base, o) => Object.assign({}, base, o);

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt = Anima.sceneTime;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  const narrow = () => W / H < 1.5;

  // ---------- 天气和小镇（和“心境的跷跷板”一集同样的画法） ----------
  function cloud(x, y, r, color, mood, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const bumps = [[-0.9, 0.15, 0.55], [-0.45, -0.25, 0.7], [0.15, -0.4, 0.8], [0.7, -0.1, 0.62], [1.0, 0.25, 0.45], [0, 0.25, 0.7]];
    ctx.beginPath();
    for (const b of bumps) { ctx.moveTo(x + b[0] * r + b[2] * r, y + b[1] * r); ctx.arc(x + b[0] * r, y + b[1] * r, b[2] * r, 0, Math.PI * 2); }
    outline(Math.max(3, r * 0.09)); ctx.stroke();
    ctx.fillStyle = color; ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.beginPath(); ctx.ellipse(x - r * 0.4, y - r * 0.35, r * 0.35, r * 0.16, -0.3, 0, Math.PI * 2); ctx.fill();
    if (mood != null) face(x + r * 0.05, y + r * 0.08, r * 0.42, mood);
    ctx.restore();
  }
  function rain(x0, x1, y0, y1, n, a, seed) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.strokeStyle = C.rainC; ctx.lineWidth = Math.max(1.5, H * 0.004); ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const t = (time * (0.7 + rnd(i + seed) * 0.4) + rnd(i + 31 + seed)) % 1;
      const x = lerp(x0, x1, rnd(i + 7 + seed)) - t * H * 0.03, y = lerp(y0, y1, t);
      ctx.moveTo(x, y); ctx.lineTo(x - H * 0.006, y + H * 0.028);
    }
    ctx.stroke();
    ctx.restore();
  }
  function sun(x, y, r, a, hot) {
    if (a < 0.02) return;
    const h = hot || 0;
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * (2.6 + h * 1.2), mix(C.gold, "#ff8a4d", h), 0.9);
    ctx.translate(x, y); ctx.rotate(time * (0.3 + h));
    for (let i = 0; i < 12; i++) {
      ctx.rotate(Math.PI / 6);
      ctx.beginPath(); ctx.moveTo(-r * 0.16, -r * 1.12); ctx.lineTo(0, -r * (1.5 + h * 0.5)); ctx.lineTo(r * 0.16, -r * 1.12); ctx.closePath();
      ctx.fillStyle = mix("#ffd76a", "#ff9a52", h); ctx.fill(); outline(1.5); ctx.stroke();
    }
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#ffe68a", "#ffb36b", h); ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.1, r * 0.55, h > 0.5 ? 0 : 1);
    ctx.restore();
  }
  function house(x, y, w, h, color, roof) {
    rrect(x - w / 2, y - h, w, h, w * 0.08); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - w * 0.62, y - h + 2); ctx.lineTo(x, y - h - w * 0.5); ctx.lineTo(x + w * 0.62, y - h + 2); ctx.closePath();
    ctx.fillStyle = roof; ctx.fill(); ctx.stroke();
    rrect(x - w * 0.16, y - h * 0.62, w * 0.32, h * 0.3, 3); ctx.fillStyle = "#fff6d8"; ctx.fill(); ctx.stroke();
  }
  function town(wet, hot) {
    Anima.wash(mix(mix("#fff4e0", "#dfe6f2", wet), "#ffd9a8", hot), mix(mix("#fdeef3", "#eef0f7", wet), "#fff0d6", hot));
    Anima.bokeh(6, "#ffe3a8", 0.7 * (1 - wet), 11);
    const gy = H * 0.86;
    ctx.beginPath(); ctx.moveTo(0, gy - H * 0.05);
    ctx.quadraticCurveTo(W * 0.25, gy - H * 0.16, W * 0.5, gy - H * 0.06); ctx.quadraticCurveTo(W * 0.75, gy - H * 0.14, W, gy - H * 0.05);
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
    ctx.fillStyle = mix(mix("#d6efd0", "#d5dde3", wet), "#f1dca0", hot); ctx.fill(); outline(1.6); ctx.stroke();
    const hs = H * 0.07;
    house(W * 0.1, gy - H * 0.05, hs, hs * 0.8, "#ffe0cf", "#f28ca5");
    house(W * 0.92, gy - H * 0.05, hs * 0.9, hs * 0.75, "#fff1b8", "#8fc3ea");
    ctx.fillStyle = mix(mix("#bfe3a8", "#c3cdc8", wet), "#e8cf8a", hot); ctx.fillRect(0, gy, W, H - gy);
    outline(1.6); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    return gy;
  }
  // 弹簧减震器：从 (x, y0) 到 (x, y1)
  function spring(x, y0, y1, w, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const n = 7;
    rrect(x - w * 0.7, y1 - w * 0.3, w * 1.4, w * 0.3, w * 0.1); ctx.fillStyle = "#b9c7d6"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, w * 0.28); ctx.lineCap = "round"; ctx.lineJoin = "round";
    const path = () => { ctx.beginPath(); ctx.moveTo(x, y0); for (let i = 0; i <= n; i++) ctx.lineTo(x + (i % 2 ? w : -w) * (i === 0 || i === n ? 0 : 1), lerp(y0 + w * 0.2, y1 - w * 0.3, i / n)); };
    path(); ctx.stroke();
    ctx.strokeStyle = "#9fd3ee"; ctx.lineWidth = Math.max(1.5, w * 0.16); path(); ctx.stroke();
    ctx.restore();
  }
  // 跷跷板：m -1（低的一头沉下去）～ +1（高的一头沉下去）
  function seesaw(px, gy, L, m, springA) {
    const py = gy - L * 0.16, ang = m * 0.26, th = Math.max(6, L * 0.035);
    const end = (d) => ({ x: px + Math.cos(ang) * L / 2 * d, y: py + Math.sin(ang) * L / 2 * d });
    const Lp = end(-1), Rp = end(1);
    // 减震器：装在两头下面
    const sw = Math.max(5, L * 0.03);
    const e1 = { x: px - Math.cos(ang) * L * 0.36, y: py - Math.sin(ang) * L * 0.36 }, e2 = { x: px + Math.cos(ang) * L * 0.36, y: py + Math.sin(ang) * L * 0.36 };
    spring(e1.x, e1.y + th * 0.5, gy, sw, springA || 0);
    spring(e2.x, e2.y + th * 0.5, gy, sw, springA || 0);
    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - L * 0.09, gy); ctx.lineTo(px + L * 0.09, gy); ctx.closePath();
    ctx.fillStyle = "#e9c9a4"; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); ctx.translate(px, py); ctx.rotate(ang);
    rrect(-L / 2, -th / 2, L, th, th / 2); ctx.fillStyle = "#f3d9b1"; ctx.fill(); outline(2); ctx.stroke();
    ctx.restore();
    ctx.beginPath(); ctx.arc(px, py, th * 0.55, 0, Math.PI * 2); ctx.fillStyle = "#c49a6c"; ctx.fill(); outline(1.5); ctx.stroke();
    const br = L * 0.055;
    cloud(Lp.x, Lp.y - br * 1.2, br, "#c9cfe0", null, 1);
    text("低", Lp.x, Lp.y - br * 1.15, br * 0.75, "#5a6f90");
    sun(Rp.x, Rp.y - br * 1.3, br * 0.7, 1, 0);
    text("高", Rp.x, Rp.y + br * 0.85, br * 0.75, "#d9722a");
    const on = (d) => ({ x: px + Math.cos(ang) * d, y: py + Math.sin(ang) * d - th / 2 });
    return { py, L: Lp, R: Rp, on, spring: e2 };
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 16; ctx.shadowOffsetY = 5;
    rrect(x, y, w, h, 20); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 20); ctx.stroke();
    if (!title) return;
    const fs = fsz(0.036);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function lines(t, x, y, maxW, fs, color, align) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const L = Anima.wrapText(t, maxW);
    L.forEach((l, i) => text(l, x, y + i * fs * 1.3, fs, color || C.ink, align));
    return L.length * fs * 1.3;
  }

  // ---------- 第 1 幕：装上减震器 ----------
  const amp = (t) => t < 4.6 ? 0.92 : 0.15 + 0.77 * Math.exp(-(t - 4.6) * 0.55);
  const moodAt = (t) => amp(t) * Math.sin(t * 2.4);
  function shockView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const m = moodAt(lt);
    const gy = town(clamp(-m * 1.2, 0, 0.8), clamp(m * 1.2, 0, 0.8));
    const nar = narrow();
    const px = W * 0.47, L = Math.min(W * (nar ? 0.56 : 0.46), H * 0.95);
    const inst = prog(4.4, 0.5);
    const pv = seesaw(px, gy, L, m, inst);
    if (lt > 4.4 && lt < 5.4) sfx("咔嗒！", pv.spring.x + L * 0.08, gy - L * 0.25, fsz(0.045), "#3f9fc2", -0.1, 1 - (lt - 4.4));
    const s = Math.min(H * 0.058, W * 0.05);
    const at = pv.on(m * L * 0.28);
    const calm = lt > 7;
    chara(at.x, at.y, s, { who: "neuron", eyes: calm ? "happy" : "dizzy", mouth: calm ? "smile" : "wavy", arms: "up", jump: calm ? 0 : Math.abs(m) * 0.15 });
    if (!calm) emote("sweat", at.x + s, at.y - s * 3, s * 0.55);
    else sparkles(at.x, at.y - s * 1.6, s * 2.2, 4, 0.8, 5);
    // 两位访客扛着减震器走过来
    const wp = prog(1.6, 2.6), cs = s * 0.85;
    const lx = lerp(-W * 0.06, px - L * 0.62, wp), rx = lerp(W * 1.06, px + L * 0.62, wp);
    chara(lx, gy, cs, drug(LI, { walk: wp < 1 ? time * 9 : null, arms: inst > 0.5 ? "wave" : "hold", eyes: "happy", mouth: "grin", tag: "锂盐" }));
    chara(rx, gy, cs, drug(VPA, { walk: wp < 1 ? time * 9 : null, arms: inst > 0.5 ? "fist" : "hold", eyes: "happy", mouth: "grin", dir: -1 }));
    // 右上角：起伏记录
    const gx0 = nar ? W * 0.62 : W * 0.74, gx1 = W * 0.97, gy0 = Anima.topSafe() + H * 0.02, gh = H * (nar ? 0.16 : 0.18);
    ctx.save();
    rrect(gx0, gy0, gx1 - gx0, gh, 12); ctx.fillStyle = "rgba(255,255,255,0.88)"; ctx.fill(); outline(1.5); ctx.stroke();
    const fs = fsz(0.026);
    text("心境起伏", gx0 + fs * 0.6, gy0 + fs * 0.9, fs, C.soft, "left");
    const mid = gy0 + gh * 0.58, hh = gh * 0.34;
    ctx.setLineDash([3, 4]); outline(1); ctx.beginPath(); ctx.moveTo(gx0 + 8, mid); ctx.lineTo(gx1 - 8, mid); ctx.stroke(); ctx.setLineDash([]);
    ctx.strokeStyle = "#e07a2a"; ctx.lineWidth = Math.max(2, H * 0.005); ctx.beginPath();
    const span = 8, t0 = Math.max(0, lt - span);
    for (let k = 0; k <= 60; k++) {
      const t = lerp(t0, t0 + span, k / 60);
      if (t > lt) break;
      const xx = lerp(gx0 + 8, gx1 - 8, k / 60), yy = mid - moodAt(t) * hh;
      if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy);
    }
    ctx.stroke();
    ctx.restore();
    say("dizzy", lt > 0.6 && lt < 4.2, at.x, at.y - s * 3.3, px, H * 0.4, "晃得我头好晕……", "think");
    say("fix", lt > 5 && lt < 9.5, rx, gy - cs * 3.2, nar ? W * 0.62 : W * 0.7, H * (nar ? 0.5 : 0.48), "装上减震器，高低都不会太猛～", "say");
    // 手机上把标注放到底部两个名牌中间，不被名牌挤到上面压住“高”字
    callout("absorb", lt > 5.5, pv.spring.x, (pv.spring.y + gy) / 2, nar ? W * 0.46 : pv.spring.x + W * 0.02, nar ? H : gy + H * 0.05, "减震器 = 心境稳定剂");
    callout("goal", lt > 9.8, gx0, mid, nar ? W * 0.3 : W * 0.55, H * 0.42, "目标：起伏变小，少复发");
    ctx.restore();
  }

  // ---------- 第 2 幕：锂盐的保护罩 ----------
  function lithiumView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const gy = town(0, 0);
    const nar = narrow();
    const px = nar ? W * 0.55 : W * 0.52, L = Math.min(W * (nar ? 0.46 : 0.36), H * 0.75);
    const m = 0.08 * Math.sin(time * 1.5);
    // 保护罩
    const dr = L * 0.72, dcy = gy;
    ctx.save();
    ctx.beginPath(); ctx.arc(px, dcy, dr, Math.PI, 0); ctx.closePath();
    const g = ctx.createRadialGradient(px, dcy, dr * 0.3, px, dcy, dr);
    g.addColorStop(0, "rgba(191,227,245,0.05)"); g.addColorStop(1, "rgba(159,211,238,0.35)");
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = alpha("#6fb9e0", 0.8); ctx.lineWidth = Math.max(2, H * 0.005); ctx.setLineDash([8, 6]); ctx.lineDashOffset = -time * 20; ctx.stroke(); ctx.setLineDash([]);
    ctx.restore();
    const pv = seesaw(px, gy, L, m, 1);
    const s = Math.min(H * 0.05, W * 0.045);
    const at = pv.on(m * L * 0.28);
    chara(at.x, at.y, s, { who: "neuron", eyes: "happy", mouth: "smile", arms: "wave" });
    // 风暴从左边来、烈日从右边来，碰到保护罩就被弹开
    const bounce = (t0) => { const t = lt - t0; if (t < 0) return -1; if (t < 1.6) return ease(t / 1.6); return 0.8 + 0.2 * Math.cos((t - 1.6) * 9) * Math.exp(-(t - 1.6) * 2.5); };
    const b1 = bounce(1.5), b2 = bounce(5);
    const cr = Math.min(H * 0.075, W * 0.06), yb = gy - dr * 0.75;
    if (b1 >= 0) {
      const x = lerp(-cr * 2, px - dr * 0.66 - cr * 1.1, b1);
      cloud(x, yb, cr, "#b9bfd3", -1, 1); rain(x - cr * 0.8, x + cr * 0.8, yb + cr * 0.5, gy, 14, 1, 3);
      if (lt > 3.1 && lt < 3.9) sfx("咚！", px - dr * 0.7, yb - cr * 1.2, fsz(0.05), "#3f9fc2", -0.15, 1);
    }
    if (b2 >= 0) {
      const x = lerp(W + cr * 2, px + dr * 0.66 + cr * 1.1, b2);
      sun(x, yb, cr * 0.65, 1, 1);
      if (lt > 6.6 && lt < 7.4) sfx("咚！", px + dr * 0.7, yb - cr * 1.2, fsz(0.05), "#e07a2a", 0.12, 1);
    }
    // 锂盐老前辈
    const lx = px - dr * 0.35, ls = s * 1.05;
    chara(lx, gy, ls, drug(LI, { item: "shield", arms: "hold", eyes: lt > 3.2 ? "happy" : "open", mouth: "grin" }));
    // 爱心：降低自杀风险
    const hp = prog(9.5, 1);
    if (hp > 0.02) {
      const hx = px + dr * 0.3, hy = gy - dr * 0.55 - Math.sin(time * 2) * H * 0.01;
      ctx.save(); ctx.globalAlpha *= hp;
      glow(hx, hy, H * 0.07, "#ffb3c1", 0.9);
      Anima.heart(hx, hy, H * 0.035 * (0.7 + 0.3 * hp), C.rose);
      ctx.restore();
      callout("suicide", hp > 0.5, hx + H * 0.03, hy, nar ? W * 0.66 : W * 0.78, H * 0.3, "降低自杀风险：证据较充分");
    }
    say("elder", lt > 0.5 && lt < 5, lx, gy - ls * 3.3, nar ? W * 0.3 : W * 0.25, H * 0.38, "我是 1949 年登场的老前辈！", "say");
    callout("relapse", lt > 4 && lt < 9.3, px - dr * 0.7, gy - dr * 0.7, nar ? W * 0.3 : W * 0.24, H * 0.3, "预防复发：挡住下一场风暴");
    ctx.restore();
  }

  // ---------- 第 3、4 幕：血锂仪表盘 ----------
  function gaugeGeo() {
    const nar = narrow();
    const cx = nar ? W * 0.3 : W * 0.3, cy = H * 0.72, r = Math.min(W * (nar ? 0.24 : 0.2), H * 0.4);
    return { cx, cy, r };
  }
  const Z = [[0, 0.42, "#c9dcf2", "偏低"], [0.42, 0.58, "#9fdcb8", "治疗范围"], [0.58, 1, "#ffb3b3", "过高"]];
  function gauge(g, v) {
    const { cx, cy, r } = g;
    const A = (t) => Math.PI + t * Math.PI;
    ctx.save();
    // 底盘
    ctx.beginPath(); ctx.arc(cx, cy, r * 1.08, Math.PI, 0); ctx.closePath(); ctx.fillStyle = "#fffdfb"; ctx.fill(); outline(2); ctx.stroke();
    Z.forEach((z) => {
      ctx.beginPath(); ctx.arc(cx, cy, r * 0.9, A(z[0]), A(z[1])); ctx.strokeStyle = z[2]; ctx.lineWidth = r * 0.22; ctx.stroke();
    });
    // 治疗范围的边框：窄窄一条
    ctx.beginPath(); ctx.arc(cx, cy, r * 1.01, A(0.42), A(0.58)); ctx.arc(cx, cy, r * 0.79, A(0.58), A(0.42), true); ctx.closePath();
    ctx.strokeStyle = "#3f9f6f"; ctx.lineWidth = 2.5; ctx.stroke();
    const fs = fsz(0.028);
    Z.forEach((z) => {
      const q = A((z[0] + z[1]) / 2), rr = z[3] === "治疗范围" ? r * 0.58 : r * 0.62;
      text(z[3], cx + Math.cos(q) * rr, cy + Math.sin(q) * rr, fs, z[3] === "过高" ? C.bad : z[3] === "偏低" ? "#4d6f9a" : "#2f8a5f");
    });
    text("血锂", cx, cy - r * 0.2, fs * 1.1, C.soft);
    // 指针
    const q = A(clamp(v, 0, 1));
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, r * 0.03); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(q) * r * 0.78, cy + Math.sin(q) * r * 0.78); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, r * 0.07, 0, Math.PI * 2); ctx.fillStyle = v > 0.58 ? C.bad : "#3f9f6f"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.restore();
    return { tip: { x: cx + Math.cos(q) * r * 0.78, y: cy + Math.sin(q) * r * 0.78 }, edge: { x: cx + Math.cos(A(0.58)) * r, y: cy + Math.sin(A(0.58)) * r } };
  }
  function icon(kind, x, y, r) {
    const lw = Math.max(1.4, r * 0.06);
    outline(lw);
    if (kind === "tube") { // 试管
      ctx.save(); ctx.translate(x, y); ctx.rotate(0.35);
      rrect(-r * 0.16, -r * 0.55, r * 0.32, r * 1.05, r * 0.16); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      ctx.save(); rrect(-r * 0.16, -r * 0.55, r * 0.32, r * 1.05, r * 0.16); ctx.clip(); ctx.fillStyle = "#ff8a9a"; ctx.fillRect(-r * 0.2, -r * 0.05, r * 0.4, r * 0.6); ctx.restore();
      rrect(-r * 0.22, -r * 0.62, r * 0.44, r * 0.14, r * 0.05); ctx.fillStyle = "#9fd3ee"; ctx.fill(); ctx.stroke();
      ctx.restore();
    } else if (kind === "thyroid") { // 蝴蝶形的甲状腺
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.ellipse(x + d * r * 0.24, y, r * 0.24, r * 0.36, d * 0.3, 0, Math.PI * 2); ctx.fillStyle = "#ffc7d4"; ctx.fill(); ctx.stroke(); }
      rrect(x - r * 0.12, y - r * 0.05, r * 0.24, r * 0.16, r * 0.06); ctx.fillStyle = "#ffc7d4"; ctx.fill(); ctx.stroke();
      face(x, y + r * 0.02, r * 0.14, 1, false);
    } else if (kind === "kidney") { // 豆子形的肾
      for (const d of [-1, 1]) {
        ctx.save(); ctx.translate(x + d * r * 0.26, y); ctx.scale(d, 1);
        ctx.beginPath(); ctx.moveTo(r * 0.05, -r * 0.4); ctx.bezierCurveTo(-r * 0.35, -r * 0.45, -r * 0.35, r * 0.45, r * 0.05, r * 0.4); ctx.bezierCurveTo(r * 0.2, r * 0.36, r * 0.18, r * 0.12, r * 0.05, r * 0.08); ctx.bezierCurveTo(-r * 0.02, 0, -r * 0.02, -r * 0.05, r * 0.05, -r * 0.1); ctx.bezierCurveTo(r * 0.2, -r * 0.14, r * 0.2, -r * 0.36, r * 0.05, -r * 0.4); ctx.closePath();
        ctx.fillStyle = "#e8a0a0"; ctx.fill(); ctx.stroke(); ctx.restore();
      }
    } else if (kind === "sweat") { // 大太阳 + 汗珠：脱水
      ctx.beginPath(); ctx.arc(x - r * 0.15, y - r * 0.12, r * 0.28, 0, Math.PI * 2); ctx.fillStyle = "#ffcf6e"; ctx.fill(); ctx.stroke();
      Anima.sweat(x + r * 0.3, y + r * 0.05, r * 0.5);
    } else if (kind === "tummy") { // 肚子不舒服
      ctx.beginPath(); ctx.ellipse(x, y, r * 0.42, r * 0.34, -0.3, 0, Math.PI * 2); ctx.fillStyle = "#d6f0c8"; ctx.fill(); ctx.stroke();
      face(x, y, r * 0.28, -1, false);
      ctx.beginPath(); for (let k = 0; k <= 16; k++) { const q = k * 0.5, rr = r * 0.03 + k * r * 0.012; const px = x + r * 0.5 + Math.cos(q) * rr, py = y - r * 0.38 + Math.sin(q) * rr; if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); } ctx.stroke();
    } else if (kind === "pill") { // 止痛药
      ctx.save(); ctx.translate(x, y); ctx.rotate(-0.6);
      rrect(-r * 0.5, -r * 0.18, r, r * 0.36, r * 0.18); ctx.fillStyle = "#fff"; ctx.fill();
      ctx.save(); ctx.clip(); ctx.fillStyle = "#ffcf6e"; ctx.fillRect(-r * 0.5, -r * 0.18, r * 0.5, r * 0.36); ctx.restore();
      rrect(-r * 0.5, -r * 0.18, r, r * 0.36, r * 0.18); ctx.stroke();
      ctx.restore();
    } else if (kind === "drop") { // 利尿剂：水滴 + 往下的箭头
      ctx.beginPath(); ctx.moveTo(x - r * 0.1, y - r * 0.45); ctx.quadraticCurveTo(x + r * 0.28, y, x - r * 0.1, y + r * 0.2); ctx.quadraticCurveTo(x - r * 0.48, y, x - r * 0.1, y - r * 0.45);
      ctx.fillStyle = "#bfe3f5"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + r * 0.35, y - r * 0.3); ctx.lineTo(x + r * 0.35, y + r * 0.3); ctx.moveTo(x + r * 0.2, y + r * 0.15); ctx.lineTo(x + r * 0.35, y + r * 0.3); ctx.lineTo(x + r * 0.5, y + r * 0.15); ctx.stroke();
    }
  }
  function tile(x, y, r, kind, label, a, ring, done) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.7 + 0.3 * a;
    ctx.translate(x, y); ctx.scale(pop, pop); ctx.translate(-x, -y);
    ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = ring; ctx.lineWidth = Math.max(2.5, r * 0.1); ctx.stroke();
    icon(kind, x, y - r * 0.05, r * 0.95);
    const fs = fsz(0.03);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(label).width + fs * 1.1;
    rrect(x - tw / 2, y + r * 0.78, tw, fs * 1.45, fs * 0.72); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(label, x, y + r * 0.78 + fs * 0.75, fs, C.ink);
    if (done > 0) { // 打勾
      const cx = x + r * 0.75, cy = y - r * 0.7, cr = r * 0.3;
      ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fillStyle = C.good; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.strokeStyle = "#fff"; ctx.lineWidth = Math.max(2, cr * 0.3); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(cx - cr * 0.45, cy); ctx.lineTo(cx - cr * 0.1, cy + cr * 0.35 * done); if (done > 0.5) ctx.lineTo(cx + cr * 0.5, cy - cr * 0.4); ctx.stroke();
    }
    ctx.restore();
  }
  function levelView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const warn = cur === 3;
    Anima.wash(warn ? "#fff4f0" : "#f5fbff", warn ? "#fdeaea" : "#f0f9f4");
    Anima.bokeh(6, warn ? "#ffd1d1" : "#cfeaf7", 0.7, 33);
    const nar = narrow();
    const g = gaugeGeo();
    let v;
    if (!warn) v = 0.5 + 0.06 * Math.sin(time * 1.3);
    else { const st = clamp((lt - 1.3) / 1.5, 0, 4), f = Math.floor(st); v = 0.5 + 0.09 * (Math.min(4, f) + (f < 4 ? ease((st - f) * 2.5) : 0)) + 0.015 * Math.sin(time * 7); }
    v = clamp(v, 0, 0.9);
    const gp = gauge(g, v);
    // 锂盐访客站在仪表盘旁边
    const ls = Math.min(H * 0.05, W * 0.045), lx = g.cx + g.r * 1.25, ly = g.cy + H * 0.02;
    const toxic = warn && v > 0.62;
    chara(lx, ly, ls, drug(LI, { eyes: toxic ? "dizzy" : "happy", mouth: toxic ? "wavy" : "smile", arms: toxic ? "down" : "wave", dir: -1 }));
    if (toxic) emote("sweat", lx + ls, ly - ls * 3, ls * 0.55);
    // 右边：要查的三项 / 让血锂升高的几件事
    const tr = Math.min(H * 0.07, W * 0.055);
    const col0 = nar ? W * 0.68 : W * 0.66, col1 = nar ? W * 0.88 : W * 0.86;
    if (!warn) {
      const K = [["tube", "血锂浓度"], ["thyroid", "甲状腺"], ["kidney", "肾功能"]];
      const P = [[col0, H * 0.36], [col1, H * 0.36], [(col0 + col1) / 2, H * 0.66]];
      K.forEach((k, i) => tile(P[i][0], P[i][1], tr, k[0], k[1], prog(1 + i * 1.2, 0.6), "#8fcfb6", prog(6 + i * 1, 0.6)));
      text("定期检查", (col0 + col1) / 2, H * 0.2 + fsz(0.02), fsz(0.036), "#2f8a5f");
      callout("narrow", lt > 2, gp.edge.x, gp.edge.y, nar ? W * 0.38 : W * 0.4, H * 0.3, "有效和过量，离得很近");
      // 两句话用同一个气泡先后说：后一句不会被还没淡出的前一句挤到名牌上
      say("why", lt > 4.5 && (lt < 9.5 || lt > 10), lx, ly - ls * 3.2, W * 0.5, H * 0.9, lt < 9.75 ? "我的安全区很窄，要常常量一量～" : "检查是让我安全工作的保障！", "say");
    } else {
      const K = [["sweat", "出汗脱水"], ["tummy", "腹泻呕吐"], ["pill", "止痛药"], ["drop", "利尿剂"]];
      const P = [[col0, H * 0.34], [col1, H * 0.34], [col0, H * 0.62], [col1, H * 0.62]];
      K.forEach((k, i) => tile(P[i][0], P[i][1], tr, k[0], k[1], prog(1 + i * 1.5, 0.6), "#f2a0a8", 0));
      if (lt > 1 && lt < 7.5) { // 升高的箭头
        const k = Math.floor((lt - 1) / 1.5) % 4;
        sfx("↑", g.cx + g.r * 0.5, g.cy - g.r * 1.1, fsz(0.06), C.bad, 0, 0.8);
        if (k >= 0) sparkle(P[Math.min(3, k)][0], P[Math.min(3, k)][1] - tr, tr * 0.3, 0.8);
      }
      callout("kid", lt > 2 && lt < 7.5, P[0][0] - tr, P[0][1], nar ? W * 0.62 : W * 0.55, H * 0.9, "锂排不出去，血锂就升高");
      say("danger", lt > 7.6, lx, ly - ls * 3.2, nar ? W * 0.76 : W * 0.45, nar ? H * 0.55 : H * 0.9, "明显手抖、呕吐、走路不稳、意识模糊：马上就医！", "box");
    }
    ctx.restore();
  }

  // ---------- 第 5 幕：丙戊酸盐和拉莫三嗪 ----------
  function drugCard(x, y, w, h, kind) {
    const isV = kind === "V";
    card(x, y, w, h, isV ? "丙戊酸盐" : "拉莫三嗪", isV ? "#ffd9cf" : "#e3f3cf");
    const cs = Math.min(H * 0.045, w * 0.08);
    const nar = narrow();
    const floor = y + h * (nar ? 0.46 : 0.5);
    const fs = fsz(nar ? 0.028 : 0.03);
    const head = { x: x + w * 0.35, y: floor - cs * 3.2 };
    if (isV) {
      // 烈日被慢慢压成温和的太阳
      const cool = prog(2, 3);
      sun(x + w * 0.68, y + h * 0.22, Math.min(w * 0.08, H * 0.05), 1, 1 - cool);
      chara(x + w * 0.35, floor, cs, drug(VPA, { arms: cool < 1 ? "fist" : "wave", eyes: "happy", mouth: "grin", tag: "" }));
      if (cool > 0.1 && cool < 0.95) sfx("嘿！", x + w * 0.5, y + h * 0.22, fsz(0.04), "#e07a2a", -0.1, 1);
    } else {
      // 一级一级的台阶：慢慢加量
      const n = 5, sw = w * 0.1, sh = h * 0.06, sx = x + w * 0.18, sy = floor;
      for (let i = 0; i < n; i++) { rrect(sx + i * sw, sy - (i + 1) * sh, sw * (n - i), sh, 3); ctx.fillStyle = mix("#e3f3cf", "#bfe39a", i / n); ctx.fill(); outline(1.4); ctx.stroke(); }
      const step = Math.min(n - 1, Math.floor(clamp((lt - 1) / 2, 0, n - 1)));
      const sub = clamp(((lt - 1) / 2) - step, 0, 1);
      const hop = step < n - 1 ? ease(clamp((sub - 0.6) / 0.4, 0, 1)) : 0;
      const cx = sx + sw * (step + 0.5 + hop), cy = sy - sh * (step + 1 + hop) - Math.sin(hop * Math.PI) * sh;
      head.x = cx; head.y = cy + sh - cs * 3.2;
      chara(cx, cy + sh, cs, drug(LTG, { arms: "hold", eyes: "happy", mouth: "smile", tag: "", walk: hop > 0 && hop < 1 ? time * 9 : null }));
      // 小伞挡住雨云：预防抑郁
      const ux = x + w * 0.8, uy = y + h * 0.2, ur = Math.min(w * 0.08, H * 0.05);
      cloud(ux, uy - ur * 0.3, ur, "#c9cfe0", null, 1);
      rain(ux - ur, ux + ur, uy + ur * 0.4, uy + ur * 1.2, 8, 1, 7);
      ctx.beginPath(); ctx.arc(ux, uy + ur * 1.6, ur * 0.9, Math.PI, 0); ctx.closePath(); ctx.fillStyle = "#bfe39a"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ux, uy + ur * 1.6); ctx.lineTo(ux, uy + ur * 2.4); ctx.stroke();
    }
    // 擅长
    const tx = x + w * 0.07, tw = w * 0.86;
    let yy = y + h * (nar ? 0.56 : 0.6);
    yy += lines(isV ? "擅长：压住躁狂的“高”" : "擅长：预防抑郁的“低”", x + w / 2, yy, tw, fs * 1.05, isV ? "#d9722a" : "#4f8a2f");
    // 注意事项
    const wy = y + h * (nar ? 0.64 : 0.7), wh = h * (nar ? 0.32 : 0.26);
    const wa = prog(isV ? 3.5 : 8, 0.8);
    ctx.save(); ctx.globalAlpha *= 0.3 + 0.7 * wa;
    rrect(tx, wy, tw, wh, 12); ctx.fillStyle = "#fff0f0"; ctx.fill(); ctx.strokeStyle = "#f2a0a8"; ctx.lineWidth = 2; ctx.stroke();
    const warnT = isV ? "⚠ 孕期可能致畸：育龄女性要先和医生讨论" : "⚠ 要慢慢加量：出现皮疹马上联系医生";
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const L = Anima.wrapText(warnT, tw * 0.92);
    const lh = fs * 1.3, y0 = wy + wh / 2 - (L.length - 1) * lh / 2;
    L.forEach((l, i) => text(l, x + w / 2, y0 + i * lh, fs, C.bad));
    ctx.restore();
    return { head };
  }
  function pairView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f2", "#f3f9ee");
    Anima.petals(8, 0.5, 44);
    const nar = narrow();
    const gap = W * 0.03, top = H * (nar ? 0.26 : 0.24), ch = H * (nar ? 0.7 : 0.71), cw = (W - gap * 3) / 2;
    const A = drugCard(gap, top, cw, ch, "V");
    const B = drugCard(gap * 2 + cw, top, cw, ch, "L");
    say("vpa", lt > 1 && lt < 6, A.head.x, A.head.y, gap + cw * 0.6, top + ch * 0.2, "躁狂交给我！", "shout");
    say("ltg", lt > 6.5, B.head.x, B.head.y, nar ? gap + cw * 0.6 : gap * 2 + cw * 1.35, top + ch * (nar ? 0.16 : 0.12), "一步一步慢慢来～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：突触里 ----------
  function gear(x, y, r, rot, color) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.beginPath();
    for (let i = 0; i < 16; i++) { const q = i / 16 * Math.PI * 2, rr = i % 2 ? r : r * 1.22; ctx.lineTo(Math.cos(q) * rr, Math.sin(q) * rr); }
    ctx.closePath(); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function synView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nar = narrow();
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#effaf5");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.8, 90);
    const cx = W * 0.42, tw = Math.min(W * (nar ? 0.6 : 0.5), H * 0.95), th = H * 0.38, post = H * 0.68;
    const calm = prog(3, 3); // 0：放电很冲 → 1：平稳下来
    Anima.postMembrane(post, C.post, {});
    const rs = H * 0.045;
    const RX = [cx - tw * 0.3, cx, cx + tw * 0.3];
    Anima.terminal(cx, 0, tw, th, C.term);
    // 电信号：一开始又快又密，后来慢下来
    const rate = lerp(1.6, 0.5, calm);
    for (let k = 0; k < 2; k++) {
      const t = (time * rate + k * 0.5) % 1;
      if (k === 1 && calm > 0.6) continue;
      Anima.spark([[cx, -10], [cx, th * 0.5], [cx - tw * 0.08, th * 0.85]], t, H * 0.025, C.gold);
    }
    // 钠通道：斜插在末梢左下方的膜上
    const chX = cx - tw * 0.42, chY = th * 0.8;
    ctx.save(); ctx.translate(chX, chY); ctx.rotate(0.95);
    Anima.receptor(0, 0, H * 0.032, "#a9d8ee", 1 - calm * 0.7, { dir: -1, shape: "square" });
    ctx.restore();
    for (let k = 0; k < 4; k++) {
      const t = (time * lerp(1.2, 0.4, calm) + k / 4) % 1;
      if (calm > 0.6 && k % 2) continue;
      const x = lerp(chX - H * 0.12, chX + H * 0.06, t), y = lerp(chY + H * 0.1, chY - H * 0.06, t);
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      Anima.ion(x, y, H * 0.018, "Na", "#bfe3f5");
      ctx.restore();
    }
    // 两位访客守在通道旁边
    const cs = Math.min(H * 0.04, W * 0.035);
    const vIn = prog(1.5, 1.5);
    // 手机上名牌相对角色更宽，两位站开一点，名牌不叠在一起
    const vx = lerp(-W * 0.05, chX - cs * (nar ? 2 : 1.2), vIn);
    chara(vx, chY + H * 0.2, cs, drug(VPA, { walk: vIn < 1 ? time * 9 : null, arms: vIn >= 1 ? "shh" : "down", eyes: "happy" }));
    chara(vx + cs * (nar ? 5.6 : 2.6), chY + H * 0.22, cs, drug(LTG, { walk: vIn < 1 ? time * 9 : null, arms: vIn >= 1 ? "shh" : "down", eyes: "happy", alpha: clamp(vIn * 3, 0, 1) }));
    // 受体
    RX.forEach((x, i) => Anima.receptor(x, post, rs, "#ffd27a", 0.4 + 0.3 * Math.sin(time * 2 + i), { label: i === 1 ? "谷氨酸受体" : null }));
    // 谷氨酸快递员：一开始挤成一团往外冲，后来一位一位走
    const n = Math.round(lerp(6, 3, calm));
    for (let i = 0; i < n; i++) {
      const t = (time * lerp(0.9, 0.35, calm) + i / n) % 1;
      const fx = cx + tw * (-0.2 + (i % 3) * 0.2), x = lerp(fx, RX[i % 3], t), y = lerp(th + cs * 3, post - rs * 1.6, t);
      chara(x, y, cs * 0.85, { who: "Glu", walk: time * lerp(16, 8, calm) + i, eyes: calm > 0.6 ? "happy" : "wide", mouth: calm > 0.6 ? "smile" : "open", arms: calm > 0.6 ? "hold" : "up", item: calm > 0.6 ? "letter" : null, alpha: Math.sin(t * Math.PI) * 1.2, shadow: false });
    }
    // GABA 在旁边
    const gx = cx + tw * 0.62, gy2 = post - rs * 0.2;
    if (gx < W * 0.95) chara(gx, gy2, cs, { who: "GABA", arms: "wave", eyes: "happy", mouth: "smile", dir: -1 });
    // 突触后细胞里：锂盐和细胞内信号齿轮
    const ix = nar ? W * 0.72 : W * 0.74, iy = post + (H - post) * 0.55, gr = Math.min(H * 0.045, W * 0.04);
    const sp = lerp(2.2, 0.8, prog(7, 2));
    gear(ix - gr * 1.3, iy, gr, time * sp, "#ffe7a3");
    gear(ix + gr * 1.05, iy - gr * 0.55, gr * 0.8, -time * sp * 1.25 + 0.2, "#d9ccfa");
    const lIn = prog(6.5, 1.5);
    const lx = lerp(W * 1.05, ix + gr * 3.4, lIn);
    if (lIn > 0) chara(lx, iy + gr * 1.2, cs, drug(LI, { walk: lIn < 1 ? time * 9 : null, dir: -1, arms: lIn >= 1 ? "point" : "down", eyes: "happy", mouth: "grin" }));
    callout("chan", lt > 2 && lt < 9, chX, chY, nar ? W * 0.18 : W * 0.16, H * 0.18 + Anima.topSafe() * 0.5, "离子通道：放电别太“冲”");
    callout("sig", lt > 8, ix - gr * 1.3, iy, nar ? W * 0.3 : W * 0.36, H * 0.9, "细胞内信号：锂盐在里面调节");
    say("slow", lt > 4.5 && lt < 8.5, RX[1], post - rs * 3, cx + tw * 0.15, (th + post) / 2, "不用那么急啦～", "say");
    say("doc", lt > 10, W * 0.8, H * 0.3, nar ? W * 0.78 : W * 0.83, H * 0.26, "机制还在研究中：请遵医嘱长期用药，别自己停药。", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 0) { v1 = lt > 4.6 ? "装上啦" : "晃得厉害"; }
    if (cur === 3) { v1 = lt > 2.5 ? "升高 ↑" : "正常"; }
    pill(14, 12, c.pill[0], v1, "#3f9f8a", false);
    pill(W - 14, 12, c.pill2[0], v2, C.rose, true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) shockView(S.v0);
    if (S.v1 > 0.02) lithiumView(S.v1);
    if (S.v2 > 0.02) levelView(S.v2);
    if (S.v3 > 0.02) pairView(S.v3);
    if (S.v4 > 0.02) synView(S.v4);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#9ad0c2",
    titleCard: { lines: ["锂盐和", "心境稳定剂"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
