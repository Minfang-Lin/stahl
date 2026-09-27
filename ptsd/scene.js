Anima.register("ptsd", {
    "title": "恐惧的记忆：创伤后应激",
    "tag": "焦虑与创伤",
    "headline": "过去的危险，为什么像【现在】又发生了一次？",
    "lede": "一次可怕的经历，会让杏仁核把当时的声音、气味、地点和“危险”绑在一起记下来。如果海马没给这份记忆贴好“时间和地点”的标签，过去的恐惧就会一次次闯进现在。看看恐惧消退、心理治疗和药物，是怎样帮大脑重新学会“现在是安全的”。",
    "summary": "恐惧条件化、PTSD 的四类表现、海马的时间标签、恐惧消退与再巩固，以及创伤聚焦心理治疗、SSRI/SNRI 和哌唑嗪。",
    "chapter": "对应 Stahl《精神药理学精要》第 8 章 · 创伤与恐惧记忆",
    "footer": "如果创伤的回忆一直困扰着你，请找专业的心理治疗师或精神科医生聊一聊；药物请遵医嘱使用。",
    "canvasLabel": "拟人化的杏仁核警报塔、海马档案馆管理员、前额叶指挥官一起整理恐惧记忆卡片的动画",
    "regions": ["amygdala", "hippo", "pfc"],
    "parts": ["anxiety"],
    "cast": ["NE", "GABA", "5HT", "drug"],
    "color": "#f0a8b8"
  }, () => {
  const CH = [
    { title: "一次可怕的经历", town: 1, cards: 0, lib: 0, recon: 0, med: 0,
      pill: ["杏仁核", "记下危险"], pill2: ["提示", "绑在一起"],
      text: "经历一件非常可怕的事时，杏仁核会把当时的“提示”，比如听到的声音、闻到的气味、所在的地点，和“危险”紧紧绑在一起，存成一份恐惧记忆。这叫恐惧条件化。它本来是保护我们的本领：下次再遇到这些提示，警报器会提前响，让我们赶快躲开。",
      fact: "恐惧条件化：平常的提示和危险一起出现过，之后单独出现也能拉响警报" },
    { title: "被困住的警报", town: 0, cards: 1, lib: 0, recon: 0, med: 0,
      pill: ["PTSD", "四类表现"], pill2: ["持续", "超过一个月"],
      text: "大多数人经历创伤后，警报会慢慢平静下来。但有些人过了很久还被困在里面，这就是创伤后应激障碍（PTSD）。常见四类表现：可怕的回忆不请自来，或者做噩梦；躲开会让人想起它的人和地方；心情和想法变得灰暗，比如内疚、麻木；还有过度警觉，容易受惊、睡不好。",
      fact: "诊断 PTSD 要求这些表现持续一个月以上，并且明显影响生活" },
    { title: "海马的时间标签", town: 0, cards: 0, lib: 1, recon: 0, med: 0,
      pill: ["海马", "贴标签"], pill2: ["标签", "模糊了"],
      text: "记忆的档案馆由海马管理。它会给每份记忆贴上“时间和地点”的标签：这是那天、在那里发生的事，已经过去了。可在 PTSD 里，创伤记忆的标签常常是模糊的。于是一碰到提示，杏仁核分不清过去和现在，过去的危险就像正在眼前发生，这就是“闪回”的感觉。",
      fact: "海马帮记忆加上时间、地点这些“背景”；背景模糊时，过去的恐惧容易被当成现在" },
    { title: "恐惧消退：新的记忆", town: 1, cards: 0, lib: 0, recon: 0, med: 0,
      pill: ["恐惧消退", "新学习"], pill2: ["旧记忆", "还在"],
      text: "好消息是，恐惧可以“消退”。在安全的环境里，一次次面对提示，却没有危险发生，前额叶就学到一条新的记忆：“这里现在是安全的”，再通过杏仁核里的 GABA 神经元踩下刹车。要注意，旧的恐惧记忆并没有被删除，只是被新记忆压住了，所以压力大时它偶尔还会冒出来。",
      fact: "消退是一种新的学习，不是把旧记忆擦掉，所以恐惧有时会“卷土重来”" },
    { title: "重新整理记忆", town: 0, cards: 0, lib: 0, recon: 1, med: 0,
      pill: ["一线", "心理治疗"], pill2: ["唤起时", "可修改"],
      text: "记忆也不是存好就再也不动了。一段记忆被唤起时，会有一小段时间变“软”、可以修改，然后再重新存回去，这叫再巩固，是理解创伤聚焦心理治疗的一个思路。以创伤为中心的心理治疗，比如延长暴露、认知加工治疗和 EMDR，是 PTSD 的一线治疗：在治疗师陪伴下慢慢回看那段记忆，给它加上“已经过去了”的新理解。",
      fact: "以创伤为中心的心理治疗是 PTSD 的一线治疗，常常比药物效果更持久" },
    { title: "药物帮手", town: 0, cards: 0, lib: 0, recon: 0, med: 1,
      pill: ["常用药", "SSRI/SNRI"], pill2: ["噩梦", "哌唑嗪"],
      text: "药物也能帮忙。SSRI（如舍曲林、帕罗西汀）和 SNRI（如文拉法辛）是常用的药，要吃几周才慢慢起效，能减轻闯入的回忆、过度警觉和低落。噩梦很多时，医生有时会用哌唑嗪，它挡住去甲肾上腺素的 α1 受体，让夜里的警报小一点，不过研究结果并不一致。苯二氮䓬一般不推荐用于 PTSD。",
      fact: "苯二氮䓬不能预防或治好 PTSD，还可能妨碍恐惧消退，一般不推荐" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    tower: "#ffd9bf", towerRed: "#ffb3b3", pfc: "#8fa4f0", fear: "#e8637a", safe: "#4fb893", paper2: "#fffdf8",
    shelf: "#e8c9a6", wood: "#d9ad85", night: "#6d6fb8",
  });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { town: 1, cards: 0, lib: 0, recon: 0, med: 0 };
  const PERSON = { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none" };
  const HIPPO = { hair: "#72bfcc", eye: "#2f8595", cloth: "#dff3f6", hat: "beret", hatColor: "#a6dde6", label: "海马", style: "bob", glasses: true };
  const THERA = { hair: "#c98fb0", eye: "#9a5580", cloth: "#fde6ef", style: "long", hat: "none", tag: "治疗师" };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrow = () => W / H < 1.45;
  const win = (a, b) => lt > a && lt < b;
  const topY = () => Anima.topSafe() + H * 0.02;

  // ================= 小零件 =================
  function cloud(x, y, s, col, mood) {
    ctx.beginPath();
    for (const [dx, dy, r] of [[-0.55, 0.1, 0.42], [-0.15, -0.2, 0.55], [0.35, -0.05, 0.48], [0.7, 0.15, 0.35], [0.1, 0.2, 0.5]]) {
      ctx.moveTo(x + dx * s + r * s, y + dy * s); ctx.arc(x + dx * s, y + dy * s, r * s, 0, Math.PI * 2);
    }
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, s * 0.08); ctx.stroke(); ctx.fillStyle = col; ctx.fill();
    if (mood != null) face(x + s * 0.05, y + s * 0.05, s * 0.36, mood, true);
  }
  function stormCloud(x, y, s, a, flash) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    if (flash > 0.02) glow(x, y + s * 0.8, s * 2.2, C.gold, flash);
    cloud(x, y, s, "#8e8aa8", -1);
    for (let k = 0; k < 3; k++) { // 雨丝
      const t = (time * 1.4 + k / 3) % 1;
      ctx.strokeStyle = Anima.alpha("#8fb7e0", 1 - t); ctx.lineWidth = Math.max(1.5, s * 0.05);
      ctx.beginPath(); ctx.moveTo(x + (k - 1) * s * 0.45, y + s * 0.6 + t * s * 0.6); ctx.lineTo(x + (k - 1) * s * 0.45 - s * 0.08, y + s * 0.8 + t * s * 0.6); ctx.stroke();
    }
    if (flash > 0.3) Anima.bolt(x + s * 0.2, y + s * 0.95, s * 0.45, flash, C.gold);
    ctx.restore();
  }
  // 提示小圆章：声音（铃铛）、气味（烟）、地点（路灯）
  function cueIcon(kind, x, y, r) {
    ctx.save(); outline(Math.max(1.2, r * 0.07));
    if (kind === "sound") {
      ctx.beginPath(); ctx.moveTo(x - r * 0.45, y + r * 0.3); ctx.quadraticCurveTo(x - r * 0.42, y - r * 0.5, x, y - r * 0.52); ctx.quadraticCurveTo(x + r * 0.42, y - r * 0.5, x + r * 0.45, y + r * 0.3); ctx.closePath();
      ctx.fillStyle = C.gold; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y + r * 0.42, r * 0.12, 0, Math.PI * 2); ctx.fillStyle = "#e7a23a"; ctx.fill(); ctx.stroke();
    } else if (kind === "smell") {
      ctx.lineWidth = Math.max(1.5, r * 0.12); ctx.strokeStyle = "#b39ddb";
      for (let k = -1; k <= 1; k++) {
        ctx.beginPath();
        for (let i = 0; i <= 10; i++) { const t = i / 10, xx = x + k * r * 0.32 + Math.sin(t * 6 + time * 3 + k) * r * 0.1, yy = y + r * 0.5 - t * r; if (i) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
        ctx.stroke();
      }
    } else if (kind === "place") {
      ctx.fillStyle = C.line; ctx.fillRect(x - r * 0.05, y - r * 0.3, r * 0.1, r * 0.85);
      ctx.beginPath(); ctx.moveTo(x - r * 0.3, y - r * 0.3); ctx.lineTo(x + r * 0.3, y - r * 0.3); ctx.lineTo(x + r * 0.18, y - r * 0.55); ctx.lineTo(x - r * 0.18, y - r * 0.55); ctx.closePath();
      ctx.fillStyle = "#ffe08a"; ctx.fill(); ctx.stroke();
      glow(x, y - r * 0.2, r * 0.5, C.gold, 0.8);
    }
    ctx.restore();
  }
  function cueBadge(kind, x, y, r, label, a, ring) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    if (ring) glow(x, y, r * 1.8, C.fear, ring);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(Math.max(1.5, r * 0.08)); ctx.stroke();
    cueIcon(kind, x, y, r);
    if (label) {
      const fs = Math.max(11, r * 0.5) * Anima.UI;
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(label).width + fs * 0.9;
      rrect(x - tw / 2, y + r * 1.05, tw, fs * 1.35, fs * 0.67); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.2); ctx.stroke();
      text(label, x, y + r * 1.05 + fs * 0.7, fs, C.ink);
    }
    ctx.restore();
  }
  // 记忆卡片（像一张拍立得）：kind fear 可怕的 / happy 开心的 / safe 安全的
  function memCard(x, y, s, o) {
    o = o || {};
    if ((o.a == null ? 1 : o.a) < 0.02) return;
    ctx.save(); ctx.globalAlpha *= o.a == null ? 1 : o.a;
    ctx.translate(x, y); ctx.rotate(o.rot || 0);
    const w = s * 2, h = s * 2.5;
    if (o.glow) glow(0, 0, s * 2.4, o.glowColor || C.gold, o.glow);
    const border = o.kind === "fear" ? mix(C.fear, "#ffb38a", o.soften || 0) : o.kind === "safe" ? C.safe : "#f2b36b";
    ctx.save(); ctx.shadowColor = "rgba(120,80,100,0.2)"; ctx.shadowBlur = s * 0.2; ctx.shadowOffsetY = s * 0.06;
    rrect(-w / 2, -h / 2, w, h, s * 0.12); ctx.fillStyle = C.paper2; ctx.fill(); ctx.restore();
    if (o.wobble) { ctx.save(); ctx.setLineDash([s * 0.15, s * 0.1]); ctx.lineDashOffset = -time * s; }
    ctx.strokeStyle = border; ctx.lineWidth = Math.max(2, s * 0.09); rrect(-w / 2, -h / 2, w, h, s * 0.12); ctx.stroke();
    if (o.wobble) ctx.restore();
    // 画面
    const px = -w / 2 + s * 0.16, py = -h / 2 + s * 0.16, pw = w - s * 0.32, ph = s * 1.55;
    ctx.save(); rrect(px, py, pw, ph, s * 0.08); ctx.clip();
    if (o.kind === "fear") {
      ctx.fillStyle = mix("#d7d2ea", "#ffe9d6", o.soften || 0); ctx.fillRect(px, py, pw, ph);
      if ((o.soften || 0) > 0.3) { ctx.save(); ctx.globalAlpha *= o.soften; ctx.beginPath(); ctx.arc(px + pw * 0.78, py + ph * 0.3, s * 0.28, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); ctx.restore(); }
      cloud(px + pw * 0.45, py + ph * 0.42, s * 0.42 * (1 - (o.soften || 0) * 0.3), "#8e8aa8", null);
      if ((o.soften || 0) < 0.5) Anima.bolt(px + pw * 0.5, py + ph * 0.78, s * 0.2, 1, C.gold);
    } else if (o.kind === "safe") {
      ctx.fillStyle = "#e3f6ea"; ctx.fillRect(px, py, pw, ph);
      ctx.beginPath(); ctx.arc(px + pw * 0.5, py + ph * 0.55, s * 0.36, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1); ctx.stroke();
      face(px + pw * 0.5, py + ph * 0.58, s * 0.2, 1, false);
    } else {
      ctx.fillStyle = "#e6f4ff"; ctx.fillRect(px, py, pw, ph);
      ctx.fillStyle = "#cfeccf"; ctx.fillRect(px, py + ph * 0.7, pw, ph * 0.3);
      ctx.beginPath(); ctx.arc(px + pw * 0.3, py + ph * 0.3, s * 0.2, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill();
      ctx.beginPath(); ctx.arc(px + pw * 0.65, py + ph * 0.55, s * 0.3, 0, Math.PI * 2); ctx.fillStyle = "#8ed99b"; ctx.fill(); outline(1); ctx.stroke();
      ctx.fillStyle = "#b08968"; ctx.fillRect(px + pw * 0.63, py + ph * 0.7, s * 0.07, ph * 0.2);
    }
    ctx.restore();
    outline(Math.max(1, s * 0.04)); rrect(px, py, pw, ph, s * 0.08); ctx.stroke();
    // 下方的标签（时间 · 地点）
    if (o.label) {
      const fs = Math.max(8, s * 0.3);
      const ly = py + ph + (h / 2 - (py + ph)) / 2 + s * 0.02;
      if (o.blur) {
        for (let k = 0; k < 3; k++) { ctx.save(); ctx.globalAlpha *= 0.3; text(o.label, (k - 1) * s * 0.07, ly + (k - 1) * s * 0.04, fs, C.soft); ctx.restore(); }
        ctx.fillStyle = "rgba(120,110,160,0.35)"; ctx.beginPath(); ctx.ellipse(s * 0.1, ly, s * 0.55, s * 0.2, 0.2, 0, Math.PI * 2); ctx.fill();
      } else text(o.label, 0, ly, fs, o.labelColor || C.ink);
    }
    if (o.note) { // 贴上去的便签
      ctx.save(); ctx.globalAlpha *= o.note; ctx.rotate(0.08);
      rrect(-s * 0.2, s * 0.1, s * 1.35, s * 0.9, s * 0.06); ctx.fillStyle = "#fff4a8"; ctx.fill(); outline(1.2); ctx.stroke();
      // 卡片缩小飞回抽屉时，便签上的字太小会挤在一起，只留便签
      if (s > H * 0.07) {
        text("已经过去了", s * 0.47, s * 0.38, Math.max(7, s * 0.2), C.ink);
        text("我现在安全", s * 0.47, s * 0.72, Math.max(7, s * 0.2), C.mintDeep);
      }
      ctx.restore();
    }
    ctx.restore();
  }
  function lock(x, y, s, open) {
    outline(Math.max(1.2, s * 0.12));
    ctx.beginPath(); ctx.arc(x + (open ? s * 0.45 : 0), y - s * 0.4 - (open ? s * 0.25 : 0), s * 0.42, Math.PI, 0); ctx.stroke();
    rrect(x - s * 0.6, y - s * 0.45, s * 1.2, s * 0.95, s * 0.18); ctx.fillStyle = open ? C.mint : "#ffd27a"; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, s * 0.12, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
  }
  function card(x, y, w, h, title, color, fill) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    if (fill !== false) { rrect(x, y, w, h, 18); ctx.fillStyle = fill || "#fffdfb"; ctx.fill(); }
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    let fs = Math.max(12, Math.min(W / 40, h * 0.1)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(title).width + fs * 1.4;
    if (tw > w * 0.96) { fs *= w * 0.96 / tw; tw = w * 0.96; }
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  // 一行字的横幅（手机上代替旁白方框，放不下时自动缩小字号）
  const bannerA = {};
  function banner(key, on, x, y, t) {
    const a = bannerA[key] = lerp(bannerA[key] || 0, on ? 1 : 0, 0.1);
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    let fs = Math.max(12, W / 58) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(t).width;
    if (tw > W - 40 - fs * 1.6) { fs *= (W - 40 - fs * 1.6) / tw; ctx.font = `${fs}px ${Anima.ROUND}`; tw = ctx.measureText(t).width; }
    const w = tw + fs * 1.6, h = fs * 1.9;
    ctx.save(); ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = "#fffdf6"; ctx.fill(); ctx.restore();
    outline(1.8); rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    ctx.restore();
  }
  const small = () => Math.max(10, H * 0.03) * Anima.UI;

  // ================= 警报塔小镇（第 1、4 幕） =================
  function geoT() {
    const n = narrow();
    const tx = W * (n ? 0.2 : 0.25), base = H * 0.93, th = H * (n ? 0.5 : 0.56), tw = H * (n ? 0.27 : 0.3);
    const platY = base - th * 0.72;
    const lampP = { x: tx, y: platY - tw * 0.02, r: tw * 0.15 };
    const cs = H * (n ? 0.05 : 0.043);
    const guard = { x: tx + tw * 0.33, y: platY, s: cs };
    const gaba = { x: tx - tw * 0.33, y: platY, s: cs };
    const drawer = { x: tx, y: base - th * 0.4, w: tw * 0.46, h: th * 0.13 };
    const person = { x: W * (n ? 0.84 : 0.83), y: base, s: H * (n ? 0.07 : 0.064) };
    const hq = { x: W * (n ? 0.6 : 0.56), y: H * (n ? 0.5 : 0.44) };
    return { n, tx, base, th, tw, platY, lampP, guard, gaba, drawer, person, hq, cs };
  }
  function towerBody(g, ring) {
    const { tx, base, tw, platY } = g;
    const col = mix(C.tower, C.towerRed, ring * (0.5 + 0.5 * Math.sin(time * 8)));
    ctx.beginPath();
    ctx.moveTo(tx, platY - H * 0.02);
    ctx.bezierCurveTo(tx + tw * 0.62, platY + H * 0.02, tx + tw * 0.62, base, tx, base);
    ctx.bezierCurveTo(tx - tw * 0.62, base, tx - tw * 0.62, platY + H * 0.02, tx, platY - H * 0.02);
    ctx.fillStyle = col; ctx.fill(); outline(Math.max(1.5, H * 0.005)); ctx.stroke();
    rrect(tx - tw * 0.48, platY - H * 0.012, tw * 0.96, H * 0.03, H * 0.012); ctx.fillStyle = "#fff2e6"; ctx.fill(); outline(1.6); ctx.stroke();
    face(tx, base - g.th * 0.13, tw * 0.13, ring > 0.5 ? -1 : 1);
    const fs = Math.max(10, tw * 0.1) * Anima.UI;
    text("杏仁核", tx, base - g.th * 0.24, fs, C.soft);
  }
  function lampDraw(g, ring) {
    const L = g.lampP;
    if (ring > 0.02) {
      ctx.save(); ctx.globalAlpha *= ring * 0.35;
      const q = time * 4;
      for (const k of [0, Math.PI]) {
        ctx.beginPath(); ctx.moveTo(L.x, L.y - L.r * 0.6);
        ctx.arc(L.x, L.y - L.r * 0.6, H * 0.3, q + k - 0.22, q + k + 0.22); ctx.closePath();
        const gr = ctx.createRadialGradient(L.x, L.y, 0, L.x, L.y, H * 0.3);
        gr.addColorStop(0, "rgba(255,110,120,0.9)"); gr.addColorStop(1, "rgba(255,110,120,0)");
        ctx.fillStyle = gr; ctx.fill();
      }
      ctx.restore();
      glow(L.x, L.y - L.r * 0.6, L.r * 3, C.bad, ring * (0.6 + 0.4 * Math.sin(time * 10)));
    }
    ctx.beginPath(); ctx.arc(L.x, L.y, L.r, Math.PI, 0); ctx.closePath();
    ctx.fillStyle = mix("#f3e6ea", "#ff7a8a", ring); ctx.fill(); outline(1.8); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.beginPath(); ctx.ellipse(L.x - L.r * 0.4, L.y - L.r * 0.55, L.r * 0.18, L.r * 0.1, -0.6, 0, Math.PI * 2); ctx.fill();
  }
  // 抽屉：里面放着恐惧记忆卡片；cards = [{kind, a, peek}]
  function drawerDraw(g, cards, glowA) {
    const D = g.drawer, cs = D.w * 0.36;
    if (glowA > 0.02) glow(D.x, D.y - D.h * 0.3, D.w * 1.1, C.fear, glowA);
    cards.forEach((c, i) => {
      if (c.a < 0.02) return;
      memCard(D.x + (i ? cs * 0.55 : -cs * 0.45), D.y - D.h * 0.5 - cs * 0.9 * c.peek, cs, { kind: c.kind, a: c.a, rot: i ? 0.12 : -0.08, soften: c.soften || 0 });
    });
    rrect(D.x - D.w / 2, D.y - D.h / 2, D.w, D.h, D.h * 0.2); ctx.fillStyle = "#f7e3cf"; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(D.x - D.w * 0.14, D.y - D.h * 0.12, D.w * 0.28, D.h * 0.24, D.h * 0.12); ctx.fillStyle = C.wood; ctx.fill(); outline(1.2); ctx.stroke();
  }
  function hqDraw(g, a) {
    if (a < 0.02) return null;
    const h = g.hq, cw = H * (g.n ? 0.3 : 0.32), cs = H * (g.n ? 0.05 : 0.042);
    ctx.save(); ctx.globalAlpha *= a;
    cloud(h.x, h.y, cw * 0.55, "#ffffff", null);
    // 桌上的新卡片（绿色：“这里现在安全”）
    const bx = h.x + cw * 0.28, by = h.y - cw * 0.12;
    const cx = h.x - cw * 0.12, cy = h.y - cw * 0.06;
    chara(cx, cy, cs, { hair: "#6a7bd1", eye: "#4153a8", cloth: "#dfe6ff", hat: "cap", hatColor: C.pfc, label: "PFC", style: "short", glasses: true,
      arms: "point", dir: 1, eyes: "happy", mouth: "grin" });
    ctx.restore();
    return { btn: { x: bx, y: by }, head: { x: cx, y: cy - cs * 3.1 }, feet: { x: cx, y: cy }, cs };
  }
  function cablePts(A, B, lift) {
    const M = [(A[0] + B[0]) / 2, Math.min(A[1], B[1]) - lift];
    const pts = [];
    for (let k = 0; k <= 16; k++) { const t = k / 16; pts.push([(1 - t) * (1 - t) * A[0] + 2 * (1 - t) * t * M[0] + t * t * B[0], (1 - t) * (1 - t) * A[1] + 2 * (1 - t) * t * M[1] + t * t * B[1]]); }
    return pts;
  }
  function strokePts(pts) { ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); }

  function townView(a) {
    const g = geoT(), n = g.n;
    ctx.save(); ctx.globalAlpha *= a;
    const c0 = cur === 0, c3 = cur === 3;
    const gloom = c0 ? prog(0.3, 1.2) * (1 - prog(11.5, 1.5) * 0.5) : 0;
    Anima.wash(mix("#fff4ec", "#e6e2f2", gloom), mix("#f5fbf2", "#efe8f5", gloom));
    Anima.bokeh(6, gloom > 0.4 ? "#d9d2f0" : "#d9f0dc", 0.8, 11);
    if (c3) Anima.petals(8, prog(9, 2) * 0.8, 33);
    // 草地
    ctx.fillStyle = mix("#e3f3d9", "#d8dfe0", gloom); ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(0, g.base - H * 0.02);
    ctx.quadraticCurveTo(W * 0.5, g.base - H * 0.07, W, g.base - H * 0.02); ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
    outline(1.4); ctx.beginPath(); ctx.moveTo(0, g.base - H * 0.02); ctx.quadraticCurveTo(W * 0.5, g.base - H * 0.07, W, g.base - H * 0.02); ctx.stroke();

    const P = g.person;
    // ---------- 警报强度 ----------
    let ring = 0;
    const trials = [1.2, 4.4, 7.6], trialRing = [0.9, 0.5, 0.15];
    let trial = -1;
    if (c0) ring = win(2, 4.5) ? 0.6 : (lt > 10.8 ? 0.9 : 0);
    if (c3) trials.forEach((t, i) => { if (lt > t) trial = i; if (win(t + 0.5, t + 2.6)) ring = trialRing[i]; });
    const safeA = c3 ? clamp((trial + 1) / 3, 0, 1) * prog(1.8, 1) : 0;

    // ---------- 第 1 幕：暴风云、提示、丝带、卡片 ----------
    const cloudP = { x: P.x - P.s * 0.4, y: H * (n ? 0.3 : 0.28), s: H * (n ? 0.09 : 0.085) };
    const flash = c0 && win(1.5, 4.5) ? Math.max(0, Math.sin(lt * 7)) : 0;
    const cloudA = c0 ? prog(0.4, 1) * (1 - prog(8.6, 1)) : 0;
    const cues = [
      { kind: "sound", label: "声音", x: W * (n ? 0.4 : 0.44), y: H * (n ? 0.5 : 0.5) },
      { kind: "smell", label: "气味", x: W * (n ? 0.55 : 0.56), y: H * (n ? 0.62 : 0.6) },
      { kind: "place", label: "地点", x: W * (n ? 0.7 : 0.68), y: H * (n ? 0.5 : 0.5) },
    ];
    const br = H * (n ? 0.06 : 0.056);
    const cardAt = { x: W * (n ? 0.55 : 0.56), y: H * 0.48 };
    const D = g.drawer;
    const drawerCardS = D.w * 0.36;
    // 丝带：把提示和暴风云绑在一起
    if (c0) {
      const tie = prog(5.8, 2);
      const gather = prog(8.6, 0.9);
      if (tie > 0 && gather < 1) {
        ctx.save(); ctx.globalAlpha *= 1 - gather;
        cues.forEach((c, i) => {
          ctx.strokeStyle = C.fear; ctx.lineWidth = Math.max(2.5, H * 0.007); ctx.lineCap = "round";
          const pts = cablePts([c.x, c.y - br], [cloudP.x - cloudP.s * (0.4 - i * 0.4), cloudP.y + cloudP.s * 0.5], H * 0.02);
          const m = Math.max(1, Math.round(pts.length * clamp(tie * 1.2 - i * 0.1, 0, 1)));
          strokePts(pts.slice(0, m));
          if (m === pts.length) Anima.heart(pts[8][0], pts[8][1], H * 0.012, C.fear);
        });
        ctx.restore();
      }
    }
    stormCloud(cloudP.x, cloudP.y, cloudP.s, cloudA, flash);
    if (c0 && flash > 0.4) sfx("轰隆！", cloudP.x - cloudP.s * 1.6, cloudP.y - cloudP.s * 0.2, H * 0.05, "#8f84e0", -0.15, flash);
    if (c0) {
      const gather = prog(8.6, 0.9);
      cues.forEach((c, i) => {
        const aIn = prog(3.4 + i * 0.5, 0.6);
        const x = lerp(c.x, cardAt.x, gather), y = lerp(c.y, cardAt.y, gather);
        cueBadge(c.kind, x, y, br * (1 - gather * 0.5), gather > 0.2 ? null : c.label, aIn * (1 - gather), lt > 5.8 && lt < 8.6 ? 0.5 + 0.3 * Math.sin(time * 6) : 0);
      });
    }
    if (c3) { // 第 4 幕：安全地一次次面对提示（铃声）
      const t = trial >= 0 ? trials[trial] : 0;
      const r = trial >= 0 && win(t, t + 1.4);
      // 手机上指挥部的云和“练习次数”占着中间，铃铛放到下面空着的草地上方
      const bx = W * (n ? 0.58 : 0.72), by = H * (n ? 0.72 : 0.48);
      cueBadge("sound", bx, by, br, "声音", prog(0.4, 0.6), r ? 0.6 : 0);
      if (r) sfx("叮～", bx + br * 1.6, by - br * (n ? 0.2 : 1), H * 0.04, "#e7a23a", 0.1, 1);
    }

    // ---------- 塔 ----------
    lampDraw(g, ring);
    towerBody(g, ring);
    // 抽屉里的卡片
    const cardsIn = [];
    let dGlow = 0;
    if (c0) {
      const inA = prog(11.2, 0.3);
      cardsIn.push({ kind: "fear", a: inA, peek: 1 });
      dGlow = lt > 10.8 ? 0.6 + 0.3 * Math.sin(time * 5) : 0;
    }
    if (c3) {
      cardsIn.push({ kind: "fear", a: 1, peek: 1 });
      cardsIn.push({ kind: "safe", a: safeA, peek: 1.15 });
    }
    drawerDraw(g, cardsIn, dGlow);
    // 飞进抽屉的卡片
    if (c0) {
      const f = prog(9.4, 1.8);
      const s0 = H * (n ? 0.06 : 0.055);
      const cA = prog(8.8, 0.6) * (1 - prog(11.1, 0.3));
      if (cA > 0.02) {
        const x = lerp(cardAt.x, D.x - drawerCardS * 0.45, f), y = lerp(cardAt.y, D.y - D.h * 0.5 - drawerCardS * 0.9, f) - Math.sin(f * Math.PI) * H * 0.12;
        memCard(x, y, lerp(s0, drawerCardS, f), { kind: "fear", a: cA, rot: Math.sin(f * Math.PI) * 0.3, glow: 0.6 });
        if (f < 0.1) sparkles(x, y, s0 * 1.8, 5, cA, 3);
      }
    }
    // 哨兵 NE
    const G = g.guard;
    const alarmed = ring > 0.4;
    chara(G.x, G.y, G.s, alarmed
      ? { who: "NE", arms: "up", eyes: "wide", mouth: "open", brow: "worry", dir: 1, jump: Math.abs(Math.sin(time * 8)) * 0.2 }
      : { who: "NE", arms: c3 && lt > 10 ? "wave" : "down", eyes: c3 && lt > 9 ? "happy" : "open", mouth: "smile", dir: 1 });
    if (ring > 0.5) sfx("呜——", g.lampP.x, g.lampP.y - g.lampP.r * 3.2, H * 0.04, C.bad, -0.12, 0.6 + 0.4 * Math.sin(time * 6));
    // GABA（第 4 幕）
    const Gb = g.gaba;
    if (c3) {
      const on = prog(2, 0.8);
      ctx.save(); ctx.globalAlpha *= on;
      const shh = trial >= 0 && lt > 2.6;
      chara(Gb.x, Gb.y, Gb.s, { who: "GABA", arms: shh ? "shh" : "down", eyes: "closed", mouth: "cat", dir: 1 });
      ctx.restore();
    }
    // 前额叶指挥部和新学到的“安全”连线（第 4 幕）
    const hq = c3 ? hqDraw(g, prog(0.2, 1)) : null;
    let midCable = null;
    if (hq) {
      const pts = cablePts([hq.feet.x - hq.cs * 1.4, hq.feet.y - hq.cs * 1.4], [Gb.x + Gb.s * 0.9, Gb.y - Gb.s * 1.8], H * 0.1);
      const w = lerp(0.35, 1, safeA);
      ctx.save(); ctx.globalAlpha *= prog(1.2, 1);
      ctx.lineCap = "round";
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * 0.012 * w); strokePts(pts);
      ctx.strokeStyle = C.good; ctx.lineWidth = Math.max(2, H * 0.008 * w); strokePts(pts);
      if (lt > 1.8) Anima.spark(pts, (time * 0.55) % 1, H * 0.018 * (0.6 + w * 0.4), C.good);
      ctx.restore();
      midCable = pts[7];
      // 指挥官手上举着的新卡片
      memCard(hq.feet.x + hq.cs * 1.9, hq.feet.y - hq.cs * 2.2, hq.cs * 0.75, { kind: "safe", a: prog(1.6, 0.8), rot: 0.1, glow: safeA * 0.6, glowColor: C.good });
      // 练习次数
      if (trial >= 0) {
        const fs = Math.max(11, H * 0.03) * Anima.UI;
        const lx = hq.feet.x, ly = hq.feet.y + H * (n ? 0.09 : 0.08);
        const label = "安全地练习 " + (trial + 1) + " 次";
        ctx.font = `${fs}px ${Anima.ROUND}`;
        const tw = ctx.measureText(label).width + fs * 1.2;
        rrect(lx - tw / 2, ly - fs * 0.8, tw, fs * 1.6, fs * 0.8); ctx.fillStyle = "rgba(255,255,255,0.92)"; ctx.fill(); outline(1.4); ctx.stroke();
        text(label, lx, ly + 1, fs, C.mintDeep);
      }
    }
    // 人
    const scared = c0 ? win(1.6, 8.5) || lt > 10.8 : ring > 0.5;
    const relieved = c3 && lt > 9.5;
    chara(P.x, P.y, P.s, Object.assign({}, PERSON, {
      eyes: scared ? (c0 ? "teary" : "wide") : (relieved ? "happy" : "open"), mouth: scared ? "wavy" : (relieved ? "grin" : "smile"),
      brow: scared ? "worry" : null, arms: scared ? "hug" : (relieved ? "wave" : "down"), dir: -1 }));
    if (scared) emote("sweat", P.x + P.s * 1.0, P.y - P.s * 3.1, P.s * 0.55);
    if (relieved) emote("sparkle", P.x + P.s * 1.1, P.y - P.s * 3.2, P.s * 0.6);

    // ---------- 标注和气泡 ----------
    const ty = topY();
    if (c0) {
      callout("p-cue", n ? win(4, 8.6) : win(4, 9), cues[1].x, cues[1].y - br, n ? W * 0.5 : cues[1].x, n ? ty : H * 0.3, "提示：声音、气味、地点");
      callout("p-amy", lt > (n ? 11 : 10.8), D.x + D.w * 0.4, D.y, n ? W * 0.45 : D.x + W * 0.2, n ? ty : H * 0.6, "杏仁核：存下“危险记忆”");
      say("p-scary", win(1.8, 4.8), P.x, P.y - P.s * 3.2, P.x - W * (n ? 0.2 : 0.14), H * (n ? 0.62 : 0.66), "好可怕…", "say");
      say("p-ne", win(n ? 8.8 : 6.2, n ? 10.8 : 10.4), G.x, G.y - G.s * 3.2, G.x + W * (n ? 0.22 : 0.12), H * (n ? 0.3 : 0.2), "记住了！这些＝危险！", "shout");
    }
    if (c3 && hq) {
      // 手机上几条标注和最后的气泡轮流用顶部同一个位置：前后错开半秒，后一条不会被还在淡出的前一条挤到人脸上
      callout("p-pfc", n ? win(1.8, 4.7) : lt > 1.8, hq.feet.x + hq.cs * 1.9, hq.feet.y - hq.cs * 3.2, n ? W * 0.55 : hq.feet.x + W * 0.1, n ? ty : H * 0.2, "前额叶：学到“现在安全”");
      callout("p-gaba", n ? win(5.2, 8.2) : lt > 4.5, Gb.x, Gb.y - Gb.s * 3.2, n ? W * 0.35 : Gb.x + W * 0.02, n ? ty : H * 0.17, "GABA：在杏仁核里踩刹车");
      callout("p-old", n ? win(8.7, 10.4) : lt > 7.6, D.x - D.w * 0.45, D.y - D.h * 1.2, n ? W * 0.45 : D.x + W * 0.24, n ? ty : H * 0.74, "旧记忆还在，只是被压住");
      say("p-safe", lt > (n ? 10.9 : 9.8), P.x, P.y - P.s * 3.2, P.x - W * (n ? 0.2 : 0.18), n ? ty : H * 0.62, "嗯，现在是安全的", "say");
    }
    void midCable;
    ctx.restore();
  }

  // ================= 四类表现（第 2 幕） =================
  function bed(x, y, s, eyes) {
    // 枕头 + 露出来的小脸 + 被子
    rrect(x - s * 1.4, y - s * 0.55, s * 1.2, s * 0.7, s * 0.3); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.beginPath(); ctx.arc(x - s * 0.8, y - s * 0.4, s * 0.5, 0, Math.PI * 2); ctx.fillStyle = C.skin; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.beginPath(); ctx.arc(x - s * 0.8, y - s * 0.4, s * 0.52, Math.PI * 0.95, Math.PI * 1.95); ctx.closePath(); ctx.fillStyle = PERSON.hair; ctx.fill(); ctx.stroke();
    outline(Math.max(1, s * 0.06));
    if (eyes === "open") { for (const d of [-1, 1]) { ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(x - s * 0.8 + d * s * 0.17, y - s * 0.35, s * 0.06, 0, Math.PI * 2); ctx.fill(); } }
    else for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x - s * 0.8 + d * s * 0.17, y - s * 0.36, s * 0.08, 0.2, Math.PI - 0.2); ctx.stroke(); }
    rrect(x - s * 1.5, y - s * 0.15, s * 3, s * 0.65, s * 0.25); ctx.fillStyle = "#cfe0ff"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.6)"; for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(x - s * 0.6 + k * s * 0.7, y + s * 0.15, s * 0.08, 0, Math.PI * 2); ctx.fill(); }
    return { head: { x: x - s * 0.8, y: y - s * 0.9 } };
  }
  function thinkCloud(x, y, s) {
    ctx.fillStyle = "#ffffff"; outline(1.3);
    ctx.beginPath();
    for (let i = 0; i < 7; i++) { const q = i / 7 * Math.PI * 2; ctx.moveTo(x + Math.cos(q) * s * 0.75 + s * 0.35, y + Math.sin(q) * s * 0.45); ctx.arc(x + Math.cos(q) * s * 0.75, y + Math.sin(q) * s * 0.45, s * 0.35, 0, Math.PI * 2); }
    ctx.stroke(); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x, y, s * 0.8, s * 0.5, 0, 0, Math.PI * 2); ctx.fill();
  }
  function lampPost(x, base, h) {
    ctx.fillStyle = C.line; rrect(x - h * 0.025, base - h, h * 0.05, h, h * 0.02); ctx.fill();
    ctx.beginPath(); ctx.moveTo(x - h * 0.12, base - h); ctx.lineTo(x + h * 0.12, base - h); ctx.lineTo(x + h * 0.07, base - h * 1.15); ctx.lineTo(x - h * 0.07, base - h * 1.15); ctx.closePath();
    ctx.fillStyle = "#ffe08a"; ctx.fill(); outline(1.3); ctx.stroke();
    glow(x, base - h * 1.05, h * 0.3, C.gold, 0.7);
  }
  function cardsView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff7f2", "#f3eefb");
    Anima.bokeh(5, "#ffd9e2", 0.7, 61);
    const top = topY() + H * 0.05, gap = W * 0.025, gy = H * 0.055;
    const bottom = H * (n ? 0.84 : 0.86);
    const cw = (W - gap * 3) / 2, chh = (bottom - top - gy) / 2;
    const R = [
      { x: gap, y: top }, { x: gap * 2 + cw, y: top },
      { x: gap, y: top + chh + gy }, { x: gap * 2 + cw, y: top + chh + gy },
    ];
    const titles = ["① 闯入：回忆和噩梦", "② 回避", "③ 心情想法变灰", "④ 过度警觉"];
    const subs = ["可怕的画面突然冒出来", "躲开会想起它的人和地方", "内疚、麻木、提不起兴趣", "容易受惊、睡不好"];
    const cols = ["#e4e0ff", "#d9f3e6", "#e6e2ea", "#ffe0e0"];
    const pops = [0.4, 3, 5.6, 8.1];
    const fs = small();
    const out = [];
    R.forEach((r, i) => {
      const p = prog(pops[i], 0.7);
      if (p < 0.02) { out.push(null); return; }
      ctx.save(); ctx.globalAlpha *= p;
      ctx.translate(r.x + cw / 2, r.y + chh / 2); ctx.scale(0.85 + 0.15 * p, 0.85 + 0.15 * p); ctx.translate(-(r.x + cw / 2), -(r.y + chh / 2));
      card(r.x, r.y, cw, chh, titles[i], cols[i]);
      ctx.save(); rrect(r.x, r.y, cw, chh, 18); ctx.clip();
      const cx = r.x + cw / 2, s = Math.min(chh * 0.17, cw * 0.085);
      const ground = r.y + chh * 0.76;
      const o = {};
      if (i === 0) {
        const b = bed(cx - cw * 0.04, ground - s * 0.55, s * 1.8, "closed");
        const bob = Math.sin(time * 2) * s * 0.08;
        const tcx = cx + cw * 0.2, tcy = r.y + chh * 0.38 + bob;
        thinkCloud(tcx, tcy, s * 1.5);
        stormCloud(tcx, tcy - s * 0.1, s * 0.62, 1, Math.max(0, Math.sin(time * 3)) * 0.8);
        ctx.fillStyle = "#ffffff"; outline(1.2);
        for (const [k, rr] of [[0.3, 0.18], [0.55, 0.12]]) { ctx.beginPath(); ctx.arc(lerp(b.head.x, tcx - s, k), lerp(b.head.y, tcy + s * 0.5, k), s * rr, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
        Anima.sweat(b.head.x + s * 1.1, b.head.y - s * 0.1, s * 0.45);
      } else if (i === 1) {
        lampPost(cx + cw * 0.22, ground, chh * 0.5);
        const px = cx - cw * 0.12 - ((time * 0.15) % 1) * cw * 0.06;
        chara(px, ground, s, Object.assign({}, PERSON, { eyes: "closed", mouth: "wavy", brow: "worry", walk: time * 8, dir: -1, arms: "down" }));
        // 绕开的虚线箭头
        ctx.save(); ctx.setLineDash([4, 5]); ctx.strokeStyle = C.mintDeep; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(cx + cw * 0.12, ground - s * 0.5); ctx.quadraticCurveTo(cx + cw * 0.02, ground - s * 4.4, cx - cw * 0.26, ground - s * 3.4); ctx.stroke(); ctx.restore();
        o.lamp = { x: cx + cw * 0.22, y: ground - chh * 0.55 };
      } else if (i === 2) {
        // 小雨云
        const px = cx - cw * 0.05;
        chara(px, ground, s, Object.assign({}, PERSON, { eyes: "sleepy", mouth: "sad", arms: "down", gray: 0.55, dir: 1 }));
        emote("gloom", px + s * 1.3, ground - s * 2.6, s * 0.7);
        const ccx = px - s * 1.8, ccy = ground - s * 3.4;
        cloud(ccx, ccy, s * 0.75, "#c9c5d6", -1);
        for (let k = 0; k < 3; k++) { const t = (time * 1.2 + k / 3) % 1; ctx.strokeStyle = Anima.alpha("#8fb7e0", 1 - t); ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(ccx + (k - 1) * s * 0.4, ccy + s * 0.5 + t * s * 0.8); ctx.lineTo(ccx + (k - 1) * s * 0.4 - s * 0.1, ccy + s * 0.8 + t * s * 0.8); ctx.stroke(); }
        // 一朵没兴趣的花
        const fx = cx + cw * 0.25;
        ctx.strokeStyle = "#8fbf8f"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(fx, ground); ctx.lineTo(fx, ground - s * 1.6); ctx.stroke();
        for (let k = 0; k < 5; k++) { const q = k / 5 * Math.PI * 2; ctx.beginPath(); ctx.arc(fx + Math.cos(q) * s * 0.3, ground - s * 1.8 + Math.sin(q) * s * 0.3, s * 0.24, 0, Math.PI * 2); ctx.fillStyle = "#d8d0dc"; ctx.fill(); }
      } else {
        const cyc = (lt * 0.5) % 1, jolt = cyc < 0.25 && lt > 8.5;
        const px = cx - cw * 0.12;
        chara(px, ground, s, Object.assign({}, PERSON, { eyes: "wide", mouth: jolt ? "open" : "wavy", brow: "worry", arms: jolt ? "up" : "hug", dir: 1, jump: jolt ? 0.4 : 0 }));
        if (jolt) { emote("!", px + s * 1.2, ground - s * 2.8, s * 0.7); sfx("啪！", cx + cw * 0.18, ground - s * 1.2, s * 0.9, "#e7a23a", 0.1, 1); }
        // 掉在地上的书
        rrect(cx + cw * 0.12, ground - s * 0.35, s * 1.1, s * 0.35, s * 0.06); ctx.fillStyle = "#c9c0f5"; ctx.fill(); outline(1.2); ctx.stroke();
        // 月亮：睡不好
        const mx = r.x + cw * 0.1, my = r.y + chh * 0.3;
        ctx.beginPath(); ctx.arc(mx, my, s * 0.5, 0, Math.PI * 2); ctx.arc(mx + s * 0.28, my - s * 0.18, s * 0.42, 0, Math.PI * 2, true);
        ctx.fillStyle = "#fff4c4"; ctx.fill("evenodd"); outline(1.2); ctx.stroke();
        chara(cx + cw * 0.35, ground, s * 0.8, { who: "NE", arms: "up", eyes: "wide", mouth: "open", dir: -1 });
        o.px = px; o.py = ground - s * 3.2;
      }
      ctx.restore();
      text(subs[i], r.x + cw / 2, r.y + chh * 0.9, Math.min(fs, cw / (subs[i].length + 1.5)), C.ink);
      ctx.restore();
      out.push(o);
    });
    const stripY = (bottom + H) / 2;
    if (out[1] && out[1].lamp) callout("c-cue", win(3.8, 10.6), out[1].lamp.x, out[1].lamp.y, n ? W * 0.6 : out[1].lamp.x, stripY - (Math.max(12, W / 58) * Anima.UI + 14) / 2, "提示：会想起那件事的地方");
    if (out[3] && out[3].px) say("c-jump", lt > 8.6 && lt < 11.2, out[3].px, out[3].py, out[3].px + W * (n ? 0.02 : 0.12), R[3].y + chh * 0.22, "吓我一跳！", "shout");
    banner("c-help", lt > 11, W / 2, stripY, n ? "超过一个月、影响生活：请找专业帮助" : "持续一个月以上、明显影响生活：请找专业帮助");
    ctx.restore();
  }

  // ================= 海马档案馆（第 3 幕） =================
  function libView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff6ea", "#f6efe6");
    Anima.bokeh(5, "#ffe3b0", 0.6, 17);
    const floor = H * 0.93;
    ctx.fillStyle = "#f1dcc3"; ctx.fillRect(0, floor, W, H - floor); outline(1.4); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    // 书架：“过去”
    const sx = W * (n ? 0.72 : 0.74), sw = W * (n ? 0.26 : 0.22), sTop = H * (n ? 0.36 : 0.3), sBot = floor;
    rrect(sx, sTop, sw, sBot - sTop, 10); ctx.fillStyle = C.shelf; ctx.fill(); outline(1.8); ctx.stroke();
    const rows = 3, rh = (sBot - sTop) / rows;
    for (let r = 0; r < rows; r++) {
      const yy = sTop + rh * (r + 1);
      ctx.fillStyle = C.wood; ctx.fillRect(sx + 4, yy - rh * 0.1, sw - 8, rh * 0.1);
      for (let k = 0; k < 5; k++) {
        const bx = sx + sw * 0.08 + k * sw * 0.17, bh = rh * (0.5 + rnd(r * 7 + k) * 0.2);
        rrect(bx, yy - rh * 0.1 - bh, sw * 0.13, bh, 3); ctx.fillStyle = ["#f7c6d3", "#c9e4f5", "#fff1b8", "#d9f3e6", "#e4e0ff"][(k + r) % 5]; ctx.fill(); outline(1.1); ctx.stroke();
      }
    }
    const fsS = Math.max(11, H * 0.032) * Anima.UI;
    rrect(sx + sw / 2 - fsS * 2.6, sTop - fsS * 1.8, fsS * 5.2, fsS * 1.5, fsS * 0.75); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.3); ctx.stroke();
    text("过去的书架", sx + sw / 2, sTop - fsS * 1.05, fsS, C.ink);
    // 小小的杏仁核塔（左下）
    const tx = W * (n ? 0.1 : 0.09), tw = H * 0.2, tb = floor, tTop = tb - H * 0.3;
    const ring = lt > 9.8 ? 1 : 0;
    ctx.beginPath(); ctx.moveTo(tx, tTop); ctx.bezierCurveTo(tx + tw * 0.62, tTop + H * 0.03, tx + tw * 0.62, tb, tx, tb); ctx.bezierCurveTo(tx - tw * 0.62, tb, tx - tw * 0.62, tTop + H * 0.03, tx, tTop);
    ctx.fillStyle = mix(C.tower, C.towerRed, ring * (0.5 + 0.5 * Math.sin(time * 8))); ctx.fill(); outline(1.6); ctx.stroke();
    face(tx, tb - H * 0.08, tw * 0.15, ring ? -1 : 1);
    const lp = { x: tx, y: tTop - H * 0.005, r: tw * 0.18 };
    if (ring) glow(lp.x, lp.y - lp.r * 0.5, lp.r * 3.5, C.bad, 0.6 + 0.4 * Math.sin(time * 10));
    ctx.beginPath(); ctx.arc(lp.x, lp.y, lp.r, Math.PI, 0); ctx.closePath(); ctx.fillStyle = mix("#f3e6ea", "#ff7a8a", ring); ctx.fill(); outline(1.5); ctx.stroke();
    text("杏仁核", tx, tb - H * 0.16, Math.max(10, H * 0.026) * Anima.UI, C.soft);
    if (ring) sfx("呜——", tx + tw * 0.5, tTop - H * 0.1, H * 0.04, C.bad, -0.1, 0.7 + 0.3 * Math.sin(time * 6));
    // 桌子和管理员
    const dx = W * (n ? 0.5 : 0.48), dTop = H * 0.76, dw = W * (n ? 0.2 : 0.16);
    rrect(dx - dw / 2, dTop, dw, H * 0.035, 6); ctx.fillStyle = C.wood; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = C.wood; for (const d of [-1, 1]) { ctx.fillRect(dx + d * dw * 0.4 - 4, dTop + H * 0.035, 8, floor - dTop - H * 0.035); }
    const ls = H * (n ? 0.075 : 0.07);
    const lx = dx - dw / 2 - ls * 1.4;
    const stampT = [2.2, 7.1];
    const stamping = stampT.some((t) => win(t - 0.4, t + 0.5));
    const worried = lt > 7.6;
    chara(lx, floor, ls, Object.assign({}, HIPPO, { arms: stamping ? "point" : "hold", item: stamping ? null : "book", eyes: worried ? "open" : "happy", mouth: worried ? "wavy" : "smile", brow: worried ? "worry" : null, dir: 1 }));
    if (lt > 7.8 && lt < 10.5) emote("?", lx + ls * 1.0, floor - ls * 3.6, ls * 0.6);
    // 印章
    const cs = H * (n ? 0.075 : 0.072);
    const deskC = { x: dx, y: dTop - cs * 1.25 };
    for (let k = 0; k < 2; k++) {
      const t = stampT[k];
      const down = win(t - 0.25, t + 0.15) ? 1 : 0;
      if (!win(t - 0.8, t + 0.8)) continue;
      const sy = deskC.y - cs * 1.6 + down * cs * 1.1;
      ctx.save(); ctx.globalAlpha *= clamp(1 - Math.abs(lt - t) / 0.8, 0, 1) * 1.5;
      rrect(dx - cs * 0.35, sy - cs * 0.9, cs * 0.7, cs * 0.5, cs * 0.12); ctx.fillStyle = C.wood; ctx.fill(); outline(1.3); ctx.stroke();
      rrect(dx - cs * 0.55, sy - cs * 0.4, cs * 1.1, cs * 0.35, cs * 0.08); ctx.fillStyle = k ? "#9aa0c8" : C.rose; ctx.fill(); ctx.stroke();
      ctx.restore();
      if (down && lt > t) sfx(k ? "噗…" : "啪！", dx + cs * 1.4, deskC.y - cs * 1.2, H * 0.04, k ? "#8f84e0" : C.rose, 0.1, 1);
    }
    // 卡片 A：开心的记忆，贴好标签 → 书架
    const shelfSpot = { x: sx + sw * 0.5, y: sTop + rh * 0.45 };
    const aIn = prog(0.4, 1.2), aOut = prog(3.2, 1.6);
    if (aOut < 1) {
      const x = aOut > 0 ? lerp(deskC.x, shelfSpot.x, aOut) : lerp(-cs * 2, deskC.x, aIn);
      const y = aOut > 0 ? lerp(deskC.y, shelfSpot.y, aOut) - Math.sin(aOut * Math.PI) * H * 0.1 : lerp(H * 0.3, deskC.y, aIn);
      memCard(x, y, cs * (1 - aOut * 0.4), { kind: "happy", rot: aIn < 1 ? (1 - aIn) * 0.4 : 0, label: lt > 2.2 ? "那天 · 公园" : null, a: 1 - prog(4.5, 0.3) });
    }
    if (lt > 4.6) { memCard(shelfSpot.x, shelfSpot.y, cs * 0.6, { kind: "happy", label: "那天 · 公园" }); if (lt < 6.5) sparkles(shelfSpot.x, shelfSpot.y, cs * 1.3, 4, 1, 8); }
    // 卡片 B：可怕的记忆，标签糊了 → 飞去杏仁核
    let bPos = null;
    const bIn = prog(5.2, 1.2), bOut = prog(8.4, 1.4);
    if (lt > 5.2) {
      const tgt = { x: tx + tw * 0.2, y: tTop + H * 0.05 };
      const x = bOut > 0 ? lerp(deskC.x, tgt.x, bOut) : lerp(-cs * 2, deskC.x, bIn);
      const y = bOut > 0 ? lerp(deskC.y, tgt.y, bOut) - Math.sin(bOut * Math.PI) * H * 0.12 : lerp(H * 0.3, deskC.y, bIn);
      memCard(x, y, cs * (1 - bOut * 0.35), { kind: "fear", rot: bOut > 0 ? Math.sin(time * 5) * 0.15 : (1 - bIn) * 0.4, label: lt > 7.1 ? "？？ · ？？" : null, blur: true, glow: lt > 9.6 ? 0.8 : 0, glowColor: C.fear });
      bPos = { x, y };
    }
    const ty = topY();
    callout("l-hip", n ? win(1.4, 4.8) : win(1.2, 8), lx, floor - ls * 2, n ? W * 0.4 : lx + W * 0.02, n ? ty : H * 0.28, "海马：贴上时间和地点");
    callout("l-shelf", !n && win(4.8, 8.2), shelfSpot.x - cs * 0.6, shelfSpot.y, shelfSpot.x - W * 0.2, H * 0.5, "标签清楚：安心归档");
    if (bPos) callout("l-blur", lt > (n ? 7.8 : 7.6), bPos.x, bPos.y + cs * 0.6, n ? W * 0.5 : W * 0.44, n ? ty : H * 0.24, "标签模糊：像是“现在”");
    say("l-say", win(2.4, n ? 4.8 : 5.2), lx, floor - ls * 3.2, lx + W * (n ? 0.2 : 0.14), H * (n ? 0.42 : 0.38), "那天在公园的事～", "say");
    say("l-now", lt > 10, tx, tTop - H * 0.02, tx + W * (n ? 0.18 : 0.12), H * (n ? 0.5 : 0.48), "是现在吗？！", "shout");
    ctx.restore();
  }

  // ================= 重新整理记忆（第 5 幕） =================
  function reconView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff6f0", "#f1f7f0");
    Anima.petals(8, 0.5, 71);
    const floor = H * 0.93;
    ctx.fillStyle = "#e6f1dc"; ctx.fillRect(0, floor, W, H - floor); outline(1.4); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    // 步骤条
    const ty = topY() + H * 0.04;
    const steps = ["① 唤起", "② 变软、可修改", "③ 重新存好"];
    const stepT = [0.4, 2.8, 8.4];
    const xs = [0.18, 0.5, 0.82];
    const fs = Math.max(11, Math.min(H * 0.036, W / 26)) * Anima.UI;
    let active = -1;
    stepT.forEach((t, i) => { if (lt > t) active = i; });
    ctx.save(); ctx.globalAlpha *= 1 - prog(9.6, 0.6);
    for (let i = 0; i < 3; i++) {
      const x = W * xs[i];
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(steps[i]).width + fs * 1.2;
      const on = i <= active;
      if (i < 2) { outline(1.6); ctx.setLineDash([4, 5]); ctx.beginPath(); ctx.moveTo(x + tw / 2 + 6, ty); ctx.lineTo(W * xs[i + 1] - tw / 2 - 6, ty); ctx.stroke(); ctx.setLineDash([]); }
      rrect(x - tw / 2, ty - fs * 0.85, tw, fs * 1.7, fs * 0.85); ctx.fillStyle = on ? (i === active ? "#ffe0ea" : "#ffffff") : "rgba(255,255,255,0.6)"; ctx.fill(); outline(i === active ? 2.4 : 1.4); ctx.stroke();
      text(steps[i], x, ty + 1, fs, on ? C.ink : C.soft);
    }
    ctx.restore();
    // 左下：杏仁核的小抽屉（记忆原来待的地方）
    const bx = W * (n ? 0.12 : 0.1), by = floor - H * 0.12, bw = H * 0.2, bh = H * 0.12;
    rrect(bx - bw / 2, by, bw, bh, 10); ctx.fillStyle = "#f7e3cf"; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(bx - bw * 0.15, by + bh * 0.4, bw * 0.3, bh * 0.2, 6); ctx.fillStyle = C.wood; ctx.fill(); outline(1.2); ctx.stroke();
    text("记忆抽屉", bx, by + bh + H * 0.03 > floor ? by - H * 0.03 : by + bh + H * 0.03, Math.max(10, H * 0.026) * Anima.UI, C.soft);
    // 人和治疗师
    const cs = H * (n ? 0.062 : 0.058);
    const tX = W * (n ? 0.32 : 0.33), pX = W * (n ? 0.72 : 0.68);
    chara(tX, floor, cs, Object.assign({}, THERA, { arms: win(4, 8) ? "point" : "down", eyes: "happy", mouth: "smile", dir: 1 }));
    const eased = lt > 7.2;
    chara(pX, floor, cs, Object.assign({}, PERSON, { arms: eased ? "wave" : "hug", eyes: eased ? "happy" : "open", mouth: eased ? "grin" : "wavy", brow: eased ? null : "worry", dir: -1 }));
    if (!eased && lt > 1) emote("sweat", pX + cs * 0.9, floor - cs * 3.2, cs * 0.5);
    if (eased) emote("heart", pX + cs * 1.0, floor - cs * 3.3, cs * 0.7);
    // 记忆卡片的旅程
    const center = { x: W * 0.5, y: H * (n ? 0.5 : 0.48) };
    const home = { x: bx, y: by - H * 0.02 };
    const up = prog(0.4, 2), back = prog(8.4, 1.6);
    const big = H * (n ? 0.1 : 0.1);
    const soft = lt > 2.8 && lt < 8.6;
    const soften = prog(5, 2.5);
    let cx = lerp(home.x, center.x, up), cy = lerp(home.y, center.y, up) - Math.sin(up * Math.PI) * H * 0.05;
    let sz = lerp(big * 0.35, big, up);
    if (back > 0) { cx = lerp(center.x, home.x, back); cy = lerp(center.y, home.y, back) - Math.sin(back * Math.PI) * H * 0.1; sz = lerp(big, big * 0.35, back); }
    const cardA = 1 - prog(9.9, 0.3);
    const pulse = soft ? 1 + Math.sin(time * 4) * 0.03 : 1;
    memCard(cx, cy, sz * pulse, { kind: "fear", soften, wobble: soft, glow: soft ? 0.7 : 0, glowColor: "#ffd6a8", note: prog(5.4, 1), rot: soft ? Math.sin(time * 2) * 0.04 : 0, a: cardA });
    if (up >= 1 && back <= 0) lock(cx + sz * 1.3, cy - sz * 1.1, sz * 0.28, soft);
    if (lt > 9.8 && lt < 11.5) { lock(bx + bw * 0.55, by - H * 0.02, H * 0.028, false); sparkles(bx, by, bw * 0.7, 5, 1, 12); sfx("咔哒", bx + bw * 0.6, by - H * 0.08, H * 0.035, C.mintDeep, 0.1, 1); }
    // 铅笔：写上新的理解
    if (win(4.6, 7.6)) {
      const px = cx + sz * 0.5 + Math.sin(time * 9) * sz * 0.15, py = cy + sz * 0.5;
      ctx.save(); ctx.translate(px, py); ctx.rotate(-0.7);
      rrect(-sz * 0.08, -sz * 0.9, sz * 0.16, sz * 0.75, sz * 0.03); ctx.fillStyle = "#ffcf6e"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-sz * 0.08, -sz * 0.15); ctx.lineTo(sz * 0.08, -sz * 0.15); ctx.lineTo(0, 0); ctx.closePath(); ctx.fillStyle = C.peach; ctx.fill(); ctx.stroke();
      ctx.restore();
    }
    callout("r-soft", n ? win(2.8, 5.4) : win(2.8, 8.4), cx - sz, cy, n ? W * 0.2 : W * 0.24, H * (n ? 0.42 : 0.34), n ? "记忆暂时变“软”" : "唤起时，记忆暂时变“软”");
    say("r-thera", win(n ? 5.4 : 4.2, 8.4), tX, floor - cs * 3.2, tX - W * (n ? 0.05 : 0.1), H * (n ? 0.62 : 0.6), "我们一起慢慢看～", "say");
    say("r-list", lt > 10.2, W / 2, H * 0.5, W / 2, H * (n ? 0.46 : 0.44), "以创伤为中心的心理治疗：延长暴露 · 认知加工治疗 · EMDR", "box");
    ctx.restore();
  }

  // ================= 药物帮手（第 6 幕） =================
  function dial(x, y, r, v) {
    ctx.beginPath(); ctx.arc(x, y, r * 1.12, Math.PI, 0); ctx.lineTo(x + r * 1.12, y + r * 0.22); ctx.lineTo(x - r * 1.12, y + r * 0.22); ctx.closePath();
    ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.5); ctx.stroke();
    const cols = [C.good, C.gold, C.bad];
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(x, y, r * 0.86, Math.PI + i * Math.PI / 3, Math.PI + (i + 1) * Math.PI / 3); ctx.strokeStyle = cols[i]; ctx.lineWidth = r * 0.2; ctx.lineCap = "butt"; ctx.stroke(); }
    const q = Math.PI + clamp(v, 0, 1) * Math.PI;
    outline(Math.max(2, r * 0.08)); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(q) * r * 0.8, y + Math.sin(q) * r * 0.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r * 0.1, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
  }
  function medView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff7f2", "#f1eefb");
    Anima.petals(8, 0.5, 52);
    const top = topY() + H * 0.06, gap = W * 0.03, cw = (W - gap * 3) / 2, ch = H * 0.8 - top;
    const L = { x: gap, y: top, w: cw, h: Math.min(ch, H * 0.8 - top) }, R = { x: gap * 2 + cw, y: top, w: cw, h: Math.min(ch, H * 0.8 - top) };
    card(L.x, L.y, L.w, L.h, "白天：SSRI / SNRI", "#d9f3e6");
    // 右边卡片是夜里的颜色
    ctx.save(); ctx.shadowColor = "rgba(90,70,120,0.25)"; ctx.shadowBlur = 14; rrect(R.x, R.y, R.w, R.h, 18); ctx.fillStyle = "#5f5f9e"; ctx.fill(); ctx.restore();
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 18); ctx.clip();
    const bg = ctx.createLinearGradient(0, R.y, 0, R.y + R.h); bg.addColorStop(0, "#6d6fb8"); bg.addColorStop(1, "#b9b3e3"); ctx.fillStyle = bg; ctx.fillRect(R.x, R.y, R.w, R.h);
    for (let i = 0; i < 10; i++) sparkle(R.x + rnd(i + 300) * R.w, R.y + rnd(i + 330) * R.h * 0.45, H * 0.008 * (0.7 + 0.4 * Math.sin(time * 2 + i)), 0.9, "#fffbe0");
    ctx.restore();
    card(R.x, R.y, R.w, R.h, "夜里：噩梦很多时", "#e4e0ff", false);
    const s = Math.min(H * (n ? 0.056 : 0.055), cw * 0.09);
    // ---- 左：SSRI 访客 + 5-HT 拧低灵敏度 ----
    const gL = L.y + L.h * 0.86;
    const dx = L.x + L.w * 0.3, dy = L.y + L.h * 0.52, dr = Math.min(L.w * 0.16, L.h * 0.2);
    // 小警报塔
    const tb = gL, tt = L.y + L.h * 0.3, ttw = dr * 1.5;
    ctx.beginPath(); ctx.moveTo(dx, tt); ctx.bezierCurveTo(dx + ttw, tt + dr * 0.2, dx + ttw, tb, dx, tb); ctx.bezierCurveTo(dx - ttw, tb, dx - ttw, tt + dr * 0.2, dx, tt);
    const v = lerp(0.9, 0.35, prog(1.5, 7.5));
    ctx.fillStyle = mix(C.tower, C.towerRed, clamp((v - 0.4) * 1.6, 0, 1) * (0.5 + 0.5 * Math.sin(time * 6))); ctx.fill(); outline(1.5); ctx.stroke();
    dial(dx, dy, dr * 0.75, v);
    face(dx, tb - dr * 0.4, dr * 0.3, v > 0.6 ? -1 : 1);
    text("灵敏度", dx, dy + dr * 0.45, Math.max(9, dr * 0.22) * Anima.UI, C.soft);
    const vx = L.x + L.w * 0.66;
    const vA = prog(0.6, 1);
    ctx.save(); ctx.globalAlpha *= vA;
    chara(lerp(L.x + L.w * 1.0, vx, vA), gL, s, { who: "drug", label: "SSRI", tag: "SSRI/SNRI", hatColor: "#8fdcc4", hatColor2: "#fff1b8", arms: "point", eyes: "happy", dir: -1, walk: vA < 1 ? time * 9 : null });
    chara(vx + s * 2.1, gL, s * 0.9, { who: "5HT", arms: "wave", eyes: "happy", dir: -1 });
    ctx.restore();
    // 日历
    const wk = 1 + Math.min(3, Math.floor(clamp((lt - 1.5) / 8, 0, 0.999) * 4));
    const kx = L.x + L.w * 0.8, ky = L.y + L.h * 0.22, ks = s * 0.9;
    rrect(kx - ks * 1.4, ky - ks * 0.9, ks * 2.8, ks * 1.8, ks * 0.3); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.fillStyle = C.rose; rrect(kx - ks * 1.4, ky - ks * 0.9, ks * 2.8, ks * 0.5, ks * 0.3); ctx.fill();
    text("第 " + wk + " 周", kx, ky + ks * 0.3, Math.max(10, ks * 0.62) * Anima.UI, C.ink);
    // ---- 右：床、噩梦云、NE 和 α1 门、哌唑嗪 ----
    const gR = R.y + R.h * 0.86;
    const bs = s * 1.9;
    const bedX = R.x + R.w * 0.34;
    bed(bedX, gR - bs * 0.2, bs, "closed");
    const calm = prog(5, 3);
    const ncx = R.x + R.w * 0.3, ncy = R.y + R.h * 0.34;
    ctx.save(); ctx.globalAlpha *= 1 - calm;
    thinkCloud(ncx, ncy, bs * 0.9);
    stormCloud(ncx, ncy - bs * 0.05, bs * 0.38, 1, Math.max(0, Math.sin(time * 3)) * 0.8);
    ctx.restore();
    if (calm > 0.02) { ctx.save(); ctx.globalAlpha *= calm; thinkCloud(ncx, ncy, bs * 0.9); sparkles(ncx, ncy, bs * 0.5, 4, 1, 9); emote("zzz", ncx + bs * 0.3, ncy, bs * 0.4); ctx.restore(); }
    // α1 门
    const rx = R.x + R.w * 0.66, ry = gR;
    const openAmt = lt < 4.2 ? (Math.sin(time * 4) > 0 ? 0.9 : 0.3) : 0;
    const rec = Anima.receptor(rx, ry, s * 1.1, "#ffc2c8", openAmt, { label: "α1" });
    const pA = prog(2.6, 1.4);
    // NE 想去敲门
    chara(R.x + R.w * 0.88, gR, s * 0.9, { who: "NE", arms: lt < 4.2 ? "up" : "down", eyes: lt < 4.2 ? "wide" : "open", mouth: lt < 4.2 ? "open" : "o", dir: -1 });
    if (lt > 4.6) emote("?", R.x + R.w * 0.88 + s * 0.8, gR - s * 3.2, s * 0.6);
    let pz = null;
    if (pA > 0.01) {
      const x = lerp(R.x + R.w * 1.05, rx, pA), y = lerp(R.y + R.h * 0.2, rec.site.y + s * 0.3, pA) - Math.sin(pA * Math.PI) * H * 0.04;
      chara(x, y, s * 0.9, { who: "drug", label: "α1 阻断", tag: "哌唑嗪", hatColor: "#c3a6ec", hatColor2: "#ffffff", arms: pA >= 1 ? "hug" : "wave", eyes: pA >= 1 ? "closed" : "happy", mouth: "cat", dir: -1 });
      pz = { x, y: y - s * 2.8 };
    }
    const ty = topY();
    const stripY = H * 0.9 - (Math.max(12, W / 58) * Anima.UI + 14) / 2;
    callout("m-ssri", n ? win(1.6, 4.4) : win(1.6, 13), vx, gL - s * 3.2, n ? W * 0.3 : L.x + L.w * 0.6, n ? stripY : L.y + L.h * 0.08 + H * 0.06, "几周里慢慢调低灵敏度");
    // 手机上三条都用底部同一个位置：前后错开半秒，后一条不会被挤到人脸上
    if (pz) callout("m-pz", n ? win(4.9, 8.3) : lt > 4.8, rx, ry - s * 1.8, n ? W * 0.62 : R.x + R.w * 0.6, n ? stripY : R.y + R.h * 0.08 + H * 0.06, "哌唑嗪：挡住 α1 门");
    if (pz) say("m-pzs", win(5.4, 8.8), pz.x, pz.y, R.x + R.w * 0.5, R.y + R.h * (n ? 0.3 : 0.45), "夜里的警报，小声点～", "say");
    say("m-bzd", lt > (n ? 8.9 : 8.8), W / 2, H * 0.9, W / 2, H * 0.9, "苯二氮䓬：一般不推荐用于 PTSD", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.bad, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.town > 0.02) townView(S.town);
    if (S.cards > 0.02) cardsView(S.cards);
    if (S.lib > 0.02) libView(S.lib);
    if (S.recon > 0.02) reconView(S.recon);
    if (S.med > 0.02) medView(S.med);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f0a8b8",
    titleCard: { lines: ["过去的危险", "为什么像现在又发生了一次？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
