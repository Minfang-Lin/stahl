Anima.register("circadian", {
    "title": "身体里的小时钟",
    "tag": "睡眠与觉醒",
    "headline": "为什么早上要晒太阳、晚上要【少看屏幕】？",
    "lede": "下丘脑里有一座主时钟，叫视交叉上核（SCN），一圈大约 24 小时。它每天靠早晨的光对一次表，天黑后请褪黑素出来提醒全身“该准备睡了”，还指挥着肝脏、肠道这些小时钟一起打拍子。看看倒时差、轮班和“晚睡晚起”时，时钟是怎样对不上的，又该怎样把它调回来。",
    "summary": "SCN 主时钟、早晨光线对表、褪黑素和屏幕光、全身的外周时钟、倒时差、轮班和睡眠时相延迟，以及褪黑素类药物和情绪障碍里的节律紊乱。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 昼夜节律",
    "footer": "褪黑素和褪黑素受体激动剂也请在医生或药师指导下使用；长期作息紊乱、白天很困或情绪低落，请去睡眠门诊或精神科看看。",
    "canvasLabel": "拟人化的 SCN 钟楼守护员、提着小灯的褪黑素信使和全身小时钟乐队的动画",
    "regions": ["hypo"],
    "parts": ["sleep"],
    "cast": ["His", "Ox", "drug"],
    "color": "#9fc8f0"
  }, () => {
  const CH = [
    { title: "大脑里的主时钟", tower: 1, orch: 0, cards: 0, tips: 0,
      pill: ["主时钟", "SCN"], pill2: ["一圈", "约 24 小时"],
      text: "我们身体里有一座主时钟，就在下丘脑里一个叫视交叉上核（SCN）的小地方。它一圈大约 24 小时，告诉全身什么时候该醒、什么时候该睡：白天让叫醒员们上班，晚上让它们休息。就算待在没有窗户的房间里，这座时钟也会自己继续走，只是会慢慢和外面的时间差开一点。",
      fact: "SCN 在下丘脑、视交叉的正上方，是全身昼夜节律的主时钟" },
    { title: "早上的光来对表", tower: 1, orch: 0, cards: 0, tips: 0,
      pill: ["对表", "早晨的光"], pill2: ["路线", "眼睛→SCN"],
      text: "主时钟一圈并不刚好是 24 小时，多数人略长一点，所以每天都要对一次表。对表的信号主要是光：早晨的光照进眼睛，视网膜里一种特别的感光细胞，会沿着一条专线把“天亮了”的消息直接送到 SCN。所以起床后出去晒晒太阳，是给时钟对表的好办法。",
      fact: "光是最强的对表信号：早晨的光让时钟往前调，深夜的强光则把它往后推" },
    { title: "天黑了：褪黑素出场", tower: 1, orch: 0, cards: 0, tips: 0,
      pill: ["褪黑素", "天黑出场"], pill2: ["强光", "压住它"],
      text: "天黑以后，SCN 通知松果体开始分泌褪黑素。褪黑素像一位提着小灯的信使，随着血液告诉全身：“夜晚到了，该准备睡了。”可是晚上的强光，尤其是离眼睛很近的屏幕光，会把褪黑素压下去，时钟也跟着往后推，于是越来越晚才困。",
      fact: "褪黑素在夜里分泌、被强光抑制；它是“夜晚到了”的信号，不是强力安眠药" },
    { title: "全身的小时钟", tower: 0, orch: 1, cards: 0, tips: 0,
      pill: ["小时钟", "遍布全身"], pill2: ["指挥", "SCN"],
      text: "不只大脑，身体各处的细胞里也有自己的小时钟，比如肝脏、肠道、心脏和肌肉。SCN 像乐队指挥，让这些小时钟跟着同一个节拍走：什么时候消化、什么时候分泌激素。吃饭的时间也会影响肝脏、肠道的小时钟，半夜吃东西，它们就可能和主时钟对不上拍。",
      fact: "几乎全身的细胞都有“时钟基因”，主时钟负责让它们保持同步" },
    { title: "时钟对不上的时候", tower: 0, orch: 0, cards: 1, tips: 0,
      pill: ["节律", "对不上"], pill2: ["常见于", "青少年"],
      text: "身体钟和外面的时间对不上，就会出问题。坐飞机跨越好几个时区，会倒时差；上夜班、轮班工作，要在身体钟说“该睡了”的时候干活；还有睡眠时相延迟，在青少年里很常见：到很晚都不困，早上又起不来。这些不是“懒”，而是时钟被推后或打乱了。",
      fact: "青少年的生物钟本来就容易往后推，晚上的屏幕光会让它推得更晚" },
    { title: "帮时钟对准", tower: 0, orch: 0, cards: 0, tips: 1,
      pill: ["对准", "早光晚暗"], pill2: ["褪黑素类", "调时间"],
      text: "想帮时钟对准，可以早上起床后多晒光，晚上把灯光调暗、少看屏幕，每天固定时间起床。褪黑素和褪黑素受体激动剂（如雷美替胺）主要帮忙“调时间”，比如倒时差、睡眠时相延迟，并不是强力安眠药，要在医生指导下用。抑郁、双相等情绪问题也常和节律紊乱有关，规律作息对它们也很重要。",
      fact: "褪黑素类药物主要用来调整睡眠时间；情绪障碍常伴随昼夜节律紊乱" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    tower: "#ffe6c4", roof: "#9fb8ea", pine: "#d9a877", pineDeep: "#b98256", day: "#fff3c4", night: "#cfc8f0",
  });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { tower: 1, orch: 0, cards: 0, tips: 0 };
  const KEEPER = { hair: "#5b7fd6", eye: "#3a56a8", cloth: "#e0e8ff", hat: "cap", hatColor: "#ffd27a", label: "SCN", style: "short" };
  const MEL = { hair: "#8a86d8", eye: "#4c4fa8", cloth: "#ebe8ff", hat: "beret", hatColor: "#c9c0f5", label: "褪黑素", style: "long" };
  const PERSON = { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none" };
  let tod = 0.25, night = 0; // 一天中的时刻（0 = 午夜，0.5 = 中午），夜色

  function todTarget() {
    if (cur === 0) return 0.25 + clamp(lt / 12.5, 0, 1); // 一整天
    if (cur === 1) return lt < 5.9 ? 0.2 : 0.27;
    if (cur === 2) return lerp(0.72, 0.92, ease((lt - 0.5) / 4));
    return 0.4;
  }
  function nightOf(t) {
    const d = ((t % 1) + 1) % 1;
    // 6 点到 18 点是白天，前后各一个多小时的黎明和黄昏
    if (d > 0.3 && d < 0.72) return 0;
    if (d >= 0.72 && d < 0.8) return (d - 0.72) / 0.08;
    if (d > 0.22 && d <= 0.3) return 1 - (d - 0.22) / 0.08;
    return 1;
  }
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; tod = cur === 1 ? 0.2 : todTarget(); }
    lt += dt;
    const tg = todTarget();
    tod = cur === 0 ? tg : lerp(tod, tg, 1 - Math.exp(-dt * 3));
    let nt = nightOf(tod);
    if (cur === 1) nt = 1 - ease(lt / 3) * 0.95;
    night = lerp(night, nt, 1 - Math.exp(-dt * 4));
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrow = () => W / H < 1.45;
  const win = (a, b) => lt > a && lt < b;
  const topY = () => Anima.topSafe() + H * 0.02;
  const cfs = () => Math.max(12, W / 58) * Anima.UI;
  const stripY = () => H * 0.9 - (cfs() + 14) / 2;

  // ---------- 小零件 ----------
  function sky(nt) {
    Anima.wash(mix("#fff3dd", "#8d90d6", nt), mix("#eaf6ff", "#cfc8f0", nt));
    if (nt > 0.2) {
      ctx.save(); ctx.globalAlpha *= (nt - 0.2) / 0.8;
      for (let i = 0; i < 20; i++) {
        const x = rnd(i + 900) * W, y = rnd(i + 950) * H * 0.5, tw = 0.5 + 0.5 * Math.sin(time * 2 + i);
        sparkle(x, y, H * (0.006 + rnd(i) * 0.008) * (0.6 + tw * 0.5), 0.9, "#fffbe0");
      }
      ctx.restore();
    } else Anima.bokeh(6, "#ffe3b0", 0.7, 5);
  }
  function sunMoon(x, y, r, nt) {
    if (nt < 0.98) {
      ctx.save(); ctx.globalAlpha *= 1 - nt;
      glow(x, y, r * 2.4, C.gold, 1);
      ctx.strokeStyle = "#ffb940"; ctx.lineWidth = Math.max(2, r * 0.12); ctx.lineCap = "round";
      for (let k = 0; k < 8; k++) { const q = k * Math.PI / 4 + time * 0.3; ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * r * 1.3, y + Math.sin(q) * r * 1.3); ctx.lineTo(x + Math.cos(q) * r * 1.65, y + Math.sin(q) * r * 1.65); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.8); ctx.stroke();
      face(x, y + r * 0.1, r * 0.55, 1);
      ctx.restore();
    }
    if (nt > 0.02) moon(x, y, r, nt);
  }
  function moon(x, y, r, a) {
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * 2.2, "#fff6c2", 1);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.arc(x + r * 0.55, y - r * 0.35, r * 0.85, 0, Math.PI * 2, true);
    ctx.fillStyle = "#fff4c4"; ctx.fill("evenodd"); outline(1.6); ctx.stroke();
    ctx.restore();
  }
  // 24 小时表盘：上半是白天（太阳），下半是夜里（月亮）
  function dial24(x, y, r, t, face2) {
    ctx.beginPath(); ctx.arc(x, y, r * 1.08, 0, Math.PI * 2); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(Math.max(1.8, r * 0.05)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, r * 0.95, Math.PI, 0); ctx.closePath(); ctx.fillStyle = C.day; ctx.fill();
    ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, r * 0.95, 0, Math.PI); ctx.closePath(); ctx.fillStyle = C.night; ctx.fill();
    for (let k = 0; k < 24; k++) {
      const q = Math.PI / 2 + k / 24 * Math.PI * 2, long = k % 6 === 0;
      ctx.strokeStyle = C.line; ctx.lineWidth = long ? Math.max(1.6, r * 0.04) : 1;
      ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * r * (long ? 0.78 : 0.85), y + Math.sin(q) * r * (long ? 0.78 : 0.85)); ctx.lineTo(x + Math.cos(q) * r * 0.95, y + Math.sin(q) * r * 0.95); ctx.stroke();
    }
    // 小太阳、小月亮
    ctx.beginPath(); ctx.arc(x, y - r * 0.55, r * 0.14, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y + r * 0.55, r * 0.13, 0, Math.PI * 2); ctx.arc(x + r * 0.07, y + r * 0.5, r * 0.11, 0, Math.PI * 2, true); ctx.fillStyle = "#fff4c4"; ctx.fill("evenodd"); outline(1.2); ctx.stroke();
    if (face2) face(x - r * 0.45, y + r * 0.05, r * 0.16, 1, false);
    const q = Math.PI / 2 + t * Math.PI * 2;
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2.5, r * 0.08); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(q) * r * 0.72, y + Math.sin(q) * r * 0.72); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r * 0.08, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill(); outline(1.2); ctx.stroke();
  }
  function bell(x, y, s, swing) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(swing);
    ctx.beginPath(); ctx.moveTo(-s * 0.55, s * 0.5); ctx.quadraticCurveTo(-s * 0.5, -s * 0.6, 0, -s * 0.62); ctx.quadraticCurveTo(s * 0.5, -s * 0.6, s * 0.55, s * 0.5); ctx.closePath();
    ctx.fillStyle = C.gold; ctx.fill(); outline(Math.max(1, s * 0.12)); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, s * 0.62, s * 0.16, 0, Math.PI * 2); ctx.fillStyle = "#e7a23a"; ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function card(x, y, w, h, title, color, fill) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = fill || "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    let fs = Math.max(12, Math.min(W / 40, h * 0.09)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(title).width + fs * 1.4;
    if (tw > w * 0.96) { fs *= w * 0.96 / tw; tw = w * 0.96; }
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  const bannerA = {};
  function banner(key, on, x, y, t, color) {
    const a = bannerA[key] = lerp(bannerA[key] || 0, on ? 1 : 0, 0.1);
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    let fs = cfs();
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(t).width;
    if (tw > W - 40 - fs * 1.6) { fs *= (W - 40 - fs * 1.6) / tw; ctx.font = `${fs}px ${Anima.ROUND}`; tw = ctx.measureText(t).width; }
    const w = tw + fs * 1.6, h = fs * 1.9, bx = clamp(x - w / 2, 8, W - w - 8);
    ctx.save(); ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2;
    rrect(bx, y - h / 2, w, h, h / 2); ctx.fillStyle = "#fffdf6"; ctx.fill(); ctx.restore();
    outline(1.8); rrect(bx, y - h / 2, w, h, h / 2); ctx.stroke();
    ctx.fillStyle = color || C.rose; ctx.beginPath(); ctx.arc(bx + fs * 0.75, y, fs * 0.22, 0, Math.PI * 2); ctx.fill();
    text(t, bx + w / 2 + fs * 0.2, y + 1, fs, C.ink);
    ctx.restore();
  }
  function phone(x, y, s, on) {
    if (on > 0.02) {
      glow(x, y, s * 4.5, "#fffbe0", on);
      ctx.save(); ctx.globalAlpha *= on * 0.6; ctx.strokeStyle = "#fff6c2"; ctx.lineWidth = Math.max(2, s * 0.12); ctx.lineCap = "round";
      for (let k = 0; k < 8; k++) { const q = k * Math.PI / 4 + time * 0.5; ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * s * 1.6, y + Math.sin(q) * s * 1.9); ctx.lineTo(x + Math.cos(q) * s * 2.4, y + Math.sin(q) * s * 2.8); ctx.stroke(); }
      ctx.restore();
    }
    rrect(x - s * 0.7, y - s * 1.2, s * 1.4, s * 2.4, s * 0.25); ctx.fillStyle = "#6d6fb8"; ctx.fill(); outline(Math.max(1.5, s * 0.08)); ctx.stroke();
    rrect(x - s * 0.55, y - s * 1.0, s * 1.1, s * 1.9, s * 0.12); ctx.fillStyle = mix("#3f4270", "#f4fbff", on); ctx.fill();
    if (on > 0.5) { face(x, y - s * 0.1, s * 0.4, 1, false); }
    else emote("zzz", x + s * 0.3, y - s * 0.6, s * 0.5);
  }

  // ================= 下丘脑钟楼（第 1～3 幕） =================
  function geoT() {
    const n = narrow();
    const tx = W * (n ? 0.44 : 0.45), base = H * 0.93, th = H * (n ? 0.5 : 0.54), tw = H * (n ? 0.22 : 0.23);
    const clock = { x: tx, y: base - th * 0.66, r: tw * 0.4 };
    const keeper = { x: tx + tw * (n ? 0.95 : 0.9), y: base, s: H * (n ? 0.06 : 0.056) };
    const cs = H * (n ? 0.046 : 0.044);
    return { n, tx, base, th, tw, clock, keeper, cs };
  }
  function clockTower(g) {
    const { tx, base, th, tw } = g;
    rrect(tx - tw / 2, base - th, tw, th, tw * 0.12); ctx.fillStyle = C.tower; ctx.fill(); outline(Math.max(1.6, H * 0.005)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(tx - tw * 0.62, base - th + 2); ctx.lineTo(tx, base - th - tw * 0.55); ctx.lineTo(tx + tw * 0.62, base - th + 2); ctx.closePath();
    ctx.fillStyle = C.roof; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(tx, base - th - tw * 0.58, tw * 0.06, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); ctx.stroke();
    // 门
    rrect(tx - tw * 0.16, base - th * 0.2, tw * 0.32, th * 0.2, [tw * 0.16, tw * 0.16, 0, 0]); ctx.fillStyle = "#f3cfa6"; ctx.fill(); ctx.stroke();
    // 招牌
    const fs = Math.max(10, Math.min(tw * 0.14, H * 0.03)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const label = "下丘脑 · SCN", lw = ctx.measureText(label).width + fs;
    rrect(tx - lw / 2, base - th * 0.36 - fs * 0.7, lw, fs * 1.4, fs * 0.7); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.2); ctx.stroke();
    text(label, tx, base - th * 0.36 + 1, fs, C.ink);
    dial24(g.clock.x, g.clock.y, g.clock.r, tod, false);
  }
  function eyeDraw(x, y, r, lit) {
    glow(x, y, r * 1.8, C.gold, lit);
    ctx.beginPath(); ctx.moveTo(x - r, y); ctx.quadraticCurveTo(x, y - r * 0.95, x + r, y); ctx.quadraticCurveTo(x, y + r * 0.95, x - r, y); ctx.closePath();
    ctx.fillStyle = "#ffffff"; ctx.fill(); outline(Math.max(1.8, r * 0.06)); ctx.stroke();
    ctx.save(); ctx.clip();
    ctx.beginPath(); ctx.arc(x + r * 0.1, y, r * 0.42, 0, Math.PI * 2); ctx.fillStyle = "#7a9fe0"; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + r * 0.1, y, r * 0.2, 0, Math.PI * 2); ctx.fillStyle = "#3a3f6e"; ctx.fill();
    ctx.beginPath(); ctx.arc(x - r * 0.02, y - r * 0.12, r * 0.08, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
    ctx.restore();
    outline(Math.max(1.5, r * 0.05));
    for (let k = 0; k < 4; k++) { const t = 0.25 + k * 0.17, px = lerp(x - r, x + r, t), py = y - r * 0.47 * Math.sin(t * Math.PI); ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - r * 0.06, py - r * 0.2); ctx.stroke(); }
  }
  function pineHouse(x, base, s, glowA) {
    if (glowA > 0.02) glow(x, base - s * 1.1, s * 2, "#c9c0f5", glowA);
    // 松果形状的小屋
    ctx.beginPath(); ctx.moveTo(x, base - s * 2.2);
    ctx.bezierCurveTo(x + s * 1.1, base - s * 1.6, x + s * 1.0, base, x, base);
    ctx.bezierCurveTo(x - s * 1.0, base, x - s * 1.1, base - s * 1.6, x, base - s * 2.2);
    ctx.fillStyle = C.pine; ctx.fill(); outline(Math.max(1.6, s * 0.05)); ctx.stroke();
    ctx.save(); ctx.clip(); ctx.strokeStyle = C.pineDeep; ctx.lineWidth = Math.max(1.2, s * 0.04);
    for (let k = -3; k <= 3; k++) { ctx.beginPath(); ctx.moveTo(x + k * s * 0.35 - s, base - s * 2); ctx.lineTo(x + k * s * 0.35 + s, base); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x + k * s * 0.35 + s, base - s * 2); ctx.lineTo(x + k * s * 0.35 - s, base); ctx.stroke(); }
    ctx.restore();
    rrect(x - s * 0.25, base - s * 0.55, s * 0.5, s * 0.55, [s * 0.25, s * 0.25, 0, 0]); ctx.fillStyle = "#6d6fb8"; ctx.fill(); outline(1.3); ctx.stroke();
    const fs = Math.max(10, s * 0.26) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const lw = ctx.measureText("松果体").width + fs;
    rrect(x - lw / 2, base - s * 1.3 - fs * 0.7, lw, fs * 1.4, fs * 0.7); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.2); ctx.stroke();
    text("松果体", x, base - s * 1.3 + 1, fs, C.ink);
  }
  function towerView(a) {
    const g = geoT(), n = g.n;
    ctx.save(); ctx.globalAlpha *= a;
    const c0 = cur === 0, c1 = cur === 1, c2 = cur === 2;
    sky(night);
    // 太阳 / 月亮的位置
    if (c0) {
      const q = Math.PI + (tod - 0.25) * Math.PI * 2; // 6 点从左边升起
      const sx = W * 0.5 + Math.cos(q) * W * 0.42, sy = H * 0.8 + Math.sin(q) * H * 0.62;
      const d = ((tod % 1) + 1) % 1;
      if (d > 0.2 && d < 0.8) sunMoon(sx, sy, H * 0.05, 0);
      else { const mq = q + Math.PI; moon(W * 0.5 + Math.cos(mq) * W * 0.42, H * 0.8 + Math.sin(mq) * H * 0.62, H * 0.045, 1); }
    }
    if (c1) sunMoon(W * 0.1, lerp(H * 0.6, H * (n ? 0.26 : 0.22), prog(0, 3)), H * 0.05, night);
    if (c2) sunMoon(W * 0.15, H * (n ? 0.3 : 0.24), H * 0.045, night);
    // 地面
    ctx.fillStyle = mix("#e6f4dc", "#b9b6dc", night); ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(0, g.base - H * 0.01); ctx.quadraticCurveTo(W * 0.5, g.base - H * 0.05, W, g.base - H * 0.01); ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
    outline(1.4); ctx.beginPath(); ctx.moveTo(0, g.base - H * 0.01); ctx.quadraticCurveTo(W * 0.5, g.base - H * 0.05, W, g.base - H * 0.01); ctx.stroke();

    // ---------- 第 2 幕：眼睛和光的专线 ----------
    let lightPos = null, eyeP = null;
    if (c1) {
      eyeP = { x: W * (n ? 0.15 : 0.14), y: H * (n ? 0.62 : 0.6), r: H * (n ? 0.075 : 0.075) };
      const sunP = { x: W * 0.1, y: lerp(H * 0.6, H * (n ? 0.26 : 0.22), prog(0, 3)) };
      // 光束
      const beam = prog(2, 1);
      if (beam > 0.02) {
        ctx.save(); ctx.globalAlpha *= beam * 0.5;
        const gr = ctx.createLinearGradient(sunP.x, sunP.y, eyeP.x, eyeP.y); gr.addColorStop(0, "rgba(255,215,106,0.9)"); gr.addColorStop(1, "rgba(255,215,106,0.1)");
        ctx.fillStyle = gr; ctx.beginPath(); ctx.moveTo(sunP.x - H * 0.03, sunP.y); ctx.lineTo(sunP.x + H * 0.03, sunP.y); ctx.lineTo(eyeP.x + eyeP.r * 0.5, eyeP.y); ctx.lineTo(eyeP.x - eyeP.r * 0.2, eyeP.y); ctx.closePath(); ctx.fill();
        ctx.restore();
      }
      eyeDraw(eyeP.x, eyeP.y, eyeP.r, beam);
      // 专线：眼睛 → SCN
      const A = [eyeP.x + eyeP.r, eyeP.y], B = [g.tx - g.tw * 0.5, g.clock.y + g.clock.r * 0.4];
      const M = [(A[0] + B[0]) / 2, Math.max(A[1], B[1]) + H * 0.08];
      const pts = [];
      for (let k = 0; k <= 14; k++) { const t = k / 14; pts.push([(1 - t) * (1 - t) * A[0] + 2 * (1 - t) * t * M[0] + t * t * B[0], (1 - t) * (1 - t) * A[1] + 2 * (1 - t) * t * M[1] + t * t * B[1]]); }
      ctx.save(); ctx.lineCap = "round"; ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(5, H * 0.016); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
      ctx.strokeStyle = "#ffe08a"; ctx.lineWidth = Math.max(3, H * 0.011); ctx.stroke(); ctx.restore();
      const run = prog(3.2, 2.6);
      if (lt > 3.2 && run < 1) {
        const p = Anima.spark(pts, run, H * 0.028, C.gold);
        lightPos = p;
        sparkles(p.x, p.y, H * 0.05, 4, 1, 3);
      }
      if (lt > 3.2) lightPos = lightPos || { x: pts[7][0], y: pts[7][1] };
    }

    // ---------- 第 3 幕：松果体 ----------
    let pine = null;
    if (c2) {
      pine = { x: W * (n ? 0.84 : 0.84), y: g.base, s: H * (n ? 0.1 : 0.1) };
      pineHouse(pine.x, pine.y, pine.s, night * 0.6);
      // SCN → 松果体 的通知
      if (lt > 2 && lt < 5.5) {
        const A = [g.tx + g.tw * 0.5, g.clock.y], B = [pine.x - pine.s * 0.6, pine.y - pine.s * 1.8];
        ctx.save(); ctx.setLineDash([5, 7]); ctx.strokeStyle = Anima.alpha(C.lavDeep, 0.8); ctx.lineWidth = 2.4;
        ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.quadraticCurveTo((A[0] + B[0]) / 2, Math.min(A[1], B[1]) - H * 0.1, B[0], B[1]); ctx.stroke(); ctx.restore();
        Anima.spark([A, [(A[0] + B[0]) / 2, Math.min(A[1], B[1]) - H * 0.05], B], ((lt - 2) * 0.5) % 1, H * 0.022, C.lavDeep);
      }
    }

    clockTower(g);
    // 钟表守护员 SCN
    const K = g.keeper;
    const fixing = c1 && win(5.6, 7.6);
    chara(K.x, K.y, K.s, Object.assign({}, KEEPER, { arms: fixing ? "carry" : (c0 ? (night > 0.5 ? "down" : "point") : "wave"), item: fixing ? "key" : null,
      eyes: c0 && night > 0.5 ? "sleepy" : "happy", mouth: "smile", dir: -1 }));
    if (fixing) { sfx("咔哒", g.clock.x + g.clock.r * 1.2, g.clock.y - g.clock.r * 1.1, H * 0.04, C.skyDeep, 0.1, 1); sparkles(g.clock.x, g.clock.y, g.clock.r * 1.3, 5, 1, 7); }

    // ---------- 叫醒员（组胺、食欲素） ----------
    const wk = [{ who: "His", x: n ? 0.7 : 0.66 }, { who: "Ox", x: n ? 0.9 : 0.78 }];
    if (c2) { wk[0].x = n ? 0.1 : 0.12; wk[1].x = n ? 0.24 : 0.24; }
    const wkPos = [];
    if (!c1) wk.forEach((w, i) => {
      const x = W * w.x, y = g.base, s = g.cs;
      const awake = c0 ? night < 0.5 : (c2 ? (win(7.6, 10.4) ? true : night < 0.6) : true);
      const lateLight = c2 && win(7.6, 10.4);
      const wx = x + (c0 && awake ? Math.sin(time * 0.8 + i * 2) * W * 0.03 : 0);
      chara(wx, y, s, { who: w.who, arms: awake ? "up" : "hug", eyes: awake ? (lateLight ? "wide" : "happy") : "closed", mouth: awake ? (lateLight ? "o" : "grin") : "cat",
        walk: c0 && awake ? time * 8 + i : null, dir: i ? -1 : 1 });
      if (awake && !lateLight) { bell(wx + s * 0.95 * (i ? -1 : 1), y - s * 3.2, s * 0.5, Math.sin(time * 12 + i) * 0.5); if (Math.sin(time * 6 + i) > 0.3) sfx("叮", wx + s * 1.6 * (i ? -1 : 1), y - s * 3.9, s * 0.7, "#e7a23a", 0.1, 0.9); }
      if (!awake) emote("zzz", wx + s * 0.6, y - s * 3.3, s * 0.6);
      if (lateLight) emote("!", wx + s * 0.8, y - s * 3.6, s * 0.6);
      wkPos.push({ x: wx, y: y - s * 3.2 });
    });

    // ---------- 褪黑素信使（第 3 幕） ----------
    let mel0 = null, ph = null;
    if (c2 && pine) {
      const screenOn = win(7.4, 10.6) ? 1 : 0;
      const phoneA = prog(6.8, 0.6) * (1 - prog(11.2, 0.8));
      const ms = g.cs * 1.05;
      for (let k = 0; k < (n ? 2 : 3); k++) {
        const out = prog(3.2 + k * 0.7, 2.2);
        const hide = screenOn ? prog(7.6, 1) : 0;
        const back = lt > 10.6 ? prog(10.6, 1.4) : 0;
        const tgtX = pine.x - pine.s * (1.4 + k * (n ? 0.75 : 0.85)) - (n ? 0 : W * 0.02);
        let x = lerp(pine.x, tgtX, out);
        if (lt > 7.6 && lt <= 10.6) x = lerp(tgtX, pine.x, hide);
        if (lt > 10.6) x = lerp(pine.x, tgtX, back);
        const al = lt > 7.6 && lt <= 10.6 ? 1 - hide * 0.85 : Math.min(1, out * 3) * (lt > 10.6 ? Math.max(0.15, back) : 1);
        if (out <= 0) continue;
        const scared = lt > 7.6 && lt <= 10.6;
        chara(x, g.base, ms * (scared ? lerp(1, 0.7, hide) : 1), Object.assign({}, MEL, { arms: scared ? "hug" : "hold", item: scared ? null : "lamp", eyes: scared ? "x" : "happy", mouth: scared ? "wavy" : "cat",
          walk: (out < 1 || (back > 0 && back < 1) || (hide > 0 && hide < 1)) ? time * 8 + k : null, dir: scared ? 1 : -1, alpha: al }));
        if (k === 0) mel0 = { x, y: g.base - ms * 3.2 };
      }
      if (phoneA > 0.02) {
        ph = { x: W * (n ? 0.64 : 0.62), y: H * (n ? 0.5 : 0.46), s: H * 0.045 };
        ctx.save(); ctx.globalAlpha *= phoneA; phone(ph.x, ph.y, ph.s, screenOn); ctx.restore();
      }
    }

    // ---------- 标注和气泡 ----------
    const ty = topY();
    if (c0) {
      callout("t-scn", n ? win(1, 5) : lt > 1, K.x, K.y - K.s * 3.2, n ? W * 0.62 : K.x + W * 0.1, n ? ty : H * 0.3, "视交叉上核（SCN）：主时钟");
      callout("t-24", n ? lt > 8.6 : lt > 3.5, g.clock.x - g.clock.r, g.clock.y, n ? W * 0.3 : W * 0.2, n ? ty : H * 0.2, "一圈约 24 小时");
      say("t-hi", win(n ? 5.2 : 4.5, 8.4), K.x, K.y - K.s * 3.2, K.x + W * (n ? 0.02 : 0.14), H * (n ? 0.42 : 0.44), "白天叫大家上班，晚上下班～", "say");
    }
    if (c1 && eyeP) {
      callout("t-eye", n ? win(2.2, 5.4) : lt > 2.2, eyeP.x, eyeP.y + eyeP.r * 0.6, n ? W * 0.35 : eyeP.x + W * 0.04, n ? ty : H * 0.86, "眼睛：看到早晨的光");
      if (lightPos) callout("t-line", n ? win(5.4, 8.6) : lt > 4, lightPos.x, lightPos.y, n ? W * 0.5 : W * 0.3, n ? ty : H * 0.36, "感光细胞的专线：直通 SCN");
      say("t-set", lt > (n ? 8.6 : 6), K.x, K.y - K.s * 3.2, K.x + W * (n ? 0.0 : 0.1), H * (n ? 0.3 : 0.3), "早上好！对表啦～", "say");
      if (win(0.5, 3.4)) sfx("慢了一点…", g.clock.x + g.clock.r * 1.5, g.clock.y - g.clock.r * 0.9, H * 0.032, C.soft, 0.1, 1);
    }
    if (c2 && pine) {
      callout("t-pine", n ? win(3, 6.6) : win(3, 13), pine.x, pine.y - pine.s * 2, n ? W * 0.55 : pine.x - W * 0.04, n ? ty : H * 0.3, "松果体：天黑后放出褪黑素");
      if (mel0) say("t-mel", win(4.8, 7.4), mel0.x, mel0.y, mel0.x - W * (n ? 0.1 : 0.08), H * (n ? 0.5 : 0.5), "该准备睡了～", "say");
      if (ph) callout("t-screen", n ? lt > 7.6 : lt > 7.6, ph.x, ph.y - ph.s * 1.3, n ? W * 0.45 : ph.x - W * 0.08, n ? ty : H * 0.18, "强光会压住褪黑素");
      if (ph) say("t-bright", win(8, 10.4), ph.x + ph.s * 2, g.base - g.cs * 2, n ? W * 0.84 : W * 0.86, H * (n ? 0.55 : 0.55), "好亮…先躲起来！", "shout");
    }
    ctx.restore();
  }

  // ================= 全身小时钟乐队（第 4 幕） =================
  function organIcon(kind, x, y, s) {
    outline(Math.max(1.2, s * 0.08));
    if (kind === 0) { // 肝脏
      ctx.beginPath(); ctx.moveTo(x - s, y); ctx.quadraticCurveTo(x - s * 0.9, y - s * 0.8, x + s * 0.2, y - s * 0.6); ctx.quadraticCurveTo(x + s * 1.1, y - s * 0.5, x + s, y - s * 0.1); ctx.quadraticCurveTo(x, y + s * 0.6, x - s, y);
      ctx.fillStyle = "#d98a7a"; ctx.fill(); ctx.stroke();
    } else if (kind === 1) { // 肠道
      ctx.strokeStyle = C.line; ctx.lineWidth = s * 0.45; ctx.lineCap = "round"; ctx.beginPath();
      for (let k = 0; k <= 20; k++) { const t = k / 20, xx = x - s + t * s * 2, yy = y + Math.sin(t * Math.PI * 3) * s * 0.35; if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
      ctx.stroke(); ctx.strokeStyle = "#ffb3c1"; ctx.lineWidth = s * 0.3; ctx.stroke();
    } else if (kind === 2) Anima.heart(x, y, s * 0.8, C.rose);
    else { // 肌肉：鼓起的小手臂
      ctx.beginPath(); ctx.ellipse(x, y, s * 0.9, s * 0.45, -0.3, 0, Math.PI * 2); ctx.fillStyle = "#ffcfb8"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x - s * 0.1, y - s * 0.25, s * 0.35, s * 0.25, -0.3, 0, Math.PI * 2); ctx.fillStyle = "#ffb89e"; ctx.fill(); ctx.stroke();
    }
  }
  function miniClock(x, y, r, ang, mood, off) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = off ? "#ffe4e4" : "#fffdf8"; ctx.fill(); outline(Math.max(1.5, r * 0.07)); ctx.stroke();
    for (const [dx, dy] of [[-0.75, -0.95], [0.75, -0.95]]) { ctx.beginPath(); ctx.arc(x + dx * r, y + dy * r, r * 0.22, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); ctx.stroke(); }
    for (let k = 0; k < 12; k++) { const q = k / 12 * Math.PI * 2; ctx.beginPath(); ctx.arc(x + Math.cos(q) * r * 0.82, y + Math.sin(q) * r * 0.82, Math.max(1, r * 0.04), 0, Math.PI * 2); ctx.fillStyle = C.soft; ctx.fill(); }
    face(x, y + r * 0.35, r * 0.32, mood, true);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.09); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(ang) * r * 0.62, y + Math.sin(ang) * r * 0.62); ctx.stroke();
  }
  function orchView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff8ee", "#f1f0fd");
    Anima.bokeh(7, "#ffe3b0", 0.7, 91);
    Anima.petals(8, 0.5, 19);
    const floor = H * 0.93;
    ctx.fillStyle = "#f3e2cf"; ctx.fillRect(0, floor, W, H - floor); outline(1.4); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    // 指挥台
    const px = W * 0.5, pw = H * 0.24, ph = H * 0.12;
    rrect(px - pw / 2, floor - ph, pw, ph, 8); ctx.fillStyle = "#c9c0f5"; ctx.fill(); outline(1.6); ctx.stroke();
    text("主时钟", px, floor - ph / 2, Math.max(10, H * 0.03) * Anima.UI, C.ink);
    const ks = H * (n ? 0.065 : 0.062);
    const beat = Math.sin(time * 4);
    chara(px, floor - ph, ks, Object.assign({}, KEEPER, { arms: beat > 0 ? "up" : "point", eyes: "happy", mouth: "grin", dir: 1 }));
    // 指挥棒
    const hx = px + ks * 0.76, hy = floor - ph - ks * (beat > 0 ? 1.85 : 1.2);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, ks * 0.08); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx + ks * 0.9, hy - ks * (0.6 + beat * 0.3)); ctx.stroke();
    sparkle(hx + ks * 0.9, hy - ks * (0.6 + beat * 0.3), ks * 0.25, 1);
    // 小时钟们，排成半圆
    const names = ["肝脏", "肠道", "心脏", "肌肉"];
    const pos = n ? [[0.14, 0.62], [0.3, 0.36], [0.7, 0.36], [0.86, 0.62]] : [[0.16, 0.62], [0.32, 0.36], [0.68, 0.36], [0.84, 0.62]];
    const r = H * (n ? 0.075 : 0.08);
    const common = -Math.PI / 2 + Math.floor(time * 2) * 0.35; // 大家一起一格一格走
    const snack = win(6.6, 10.6);
    const out = [];
    pos.forEach((p, i) => {
      const x = W * p[0], y = H * p[1] + (i === 0 || i === 3 ? 0 : 0);
      const aIn = prog(0.4 + i * 0.5, 0.7);
      if (aIn < 0.02) { out.push(null); return; }
      const off = snack && i === 0;
      const ang = off ? time * 5 : common;
      ctx.save(); ctx.globalAlpha *= aIn;
      const bounce = off ? Math.sin(time * 12) * r * 0.05 : Math.abs(Math.sin(time * 4)) * r * 0.08;
      miniClock(x, y - bounce, r, ang, off ? -1 : 1, off);
      organIcon(i, x, y + r * 1.55, r * 0.42);
      text(names[i], x, y + r * 2.25, Math.max(10, H * 0.03) * Anima.UI, C.ink);
      if (!off && Math.sin(time * 4 + i) > 0.6) emote("note", x + r * 1.1, y - r * 0.9, r * 0.5);
      if (off) { emote("?", x + r * 1.0, y - r * 1.2, r * 0.5); Anima.sweat(x - r * 1.1, y - r * 0.6, r * 0.3); }
      ctx.restore();
      out.push({ x, y, r });
    });
    // 半夜的小零食
    let sn = null;
    if (snack || win(6, 11.2)) {
      const sa = prog(6.2, 0.5) * (1 - prog(10.6, 0.6));
      const sx = W * (n ? 0.28 : 0.28), sy = H * (n ? 0.88 : 0.88);
      ctx.save(); ctx.globalAlpha *= sa;
      moon(sx + H * 0.1, sy - H * 0.1, H * 0.025, 1);
      ctx.beginPath(); ctx.arc(sx, sy - H * 0.02, H * 0.035, 0, Math.PI); ctx.closePath(); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.beginPath(); ctx.arc(sx, sy - H * 0.022, H * 0.03, Math.PI, 0); ctx.fillStyle = "#fff6e0"; ctx.fill(); ctx.stroke();
      text("半夜加餐", sx, sy + H * 0.035, Math.max(9, H * 0.025) * Anima.UI, C.soft);
      ctx.restore();
      sn = { x: sx, y: sy - H * 0.05 };
    }
    // 连线：指挥 → 各个小时钟的节拍
    ctx.save(); ctx.setLineDash([4, 6]); ctx.strokeStyle = Anima.alpha(C.lavDeep, 0.45); ctx.lineWidth = 1.8;
    out.forEach((o, i) => { if (!o || (snack && i === 0)) return; ctx.beginPath(); ctx.moveTo(hx + ks * 0.9, hy - ks * 0.6); ctx.lineTo(o.x, o.y + o.r * (o.y < H * 0.5 ? 1 : -1)); ctx.stroke(); });
    ctx.restore();
    const ty = topY();
    if (out[1]) callout("o-small", n ? win(1.6, 4.6) : win(1.6, 13), out[1].x - out[1].r, out[1].y, n ? W * 0.4 : W * 0.12, n ? ty : H * 0.36, "身体各处的小时钟");
    callout("o-beat", n ? win(4.6, 6.6) : win(3.6, 13), px, floor - ph - ks * 3.2, n ? W * 0.6 : W * 0.62, n ? ty : H * 0.16, "跟着主时钟的节拍走");
    say("o-go", win(0.8, 4.2), px, floor - ph - ks * 3.3, px + W * (n ? 0.02 : 0.14), H * (n ? 0.5 : 0.56), "大家跟上节拍～", "say");
    if (sn && out[0]) say("o-snack", win(7, 10.6), out[0].x + out[0].r, out[0].y, n ? W * 0.5 : W * 0.2, n ? ty + H * 0.06 : H * 0.16, n ? "我乱拍啦！" : "半夜吃东西？我乱拍了！", "shout");
    ctx.restore();
  }

  // ================= 时钟对不上（第 5 幕） =================
  function twoClocks(x, y, r, bodyT, outT) {
    const fs = Math.max(9, r * 0.5) * Anima.UI;
    dial24(x - r * 1.35, y, r, bodyT, false);
    dial24(x + r * 1.35, y, r, outT, false);
    text("身体钟", x - r * 1.35, y + r * 1.55, fs, C.ink);
    text("外面", x + r * 1.35, y + r * 1.55, fs, C.ink);
    ctx.save(); ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x - r * 0.2, y - r * 0.2); ctx.lineTo(x + r * 0.2, y + r * 0.2); ctx.moveTo(x + r * 0.2, y - r * 0.2); ctx.lineTo(x - r * 0.2, y + r * 0.2); ctx.stroke(); ctx.restore();
  }
  function cardsView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#f6f6ff", "#fdf1f4");
    Anima.bokeh(5, "#d9e4ff", 0.7, 13);
    const top = topY() + H * 0.06, gap = W * 0.02, cw = (W - gap * 4) / 3, chh = H * 0.8 - top;
    const titles = ["倒时差", "轮班工作", "晚睡晚起型"];
    const subs = ["飞到新时区，身体还在老时间", "身体钟说“睡”，却要上班", "很晚才困，早上起不来"];
    const cols = ["#d9ecff", "#ffe6c4", "#e4e0ff"];
    const out = [];
    for (let i = 0; i < 3; i++) {
      const x = gap + i * (cw + gap), y = top;
      const p = prog(0.4 + i * 2.4, 0.7);
      if (p < 0.02) { out.push(null); continue; }
      ctx.save(); ctx.globalAlpha *= p;
      card(x, y, cw, chh, titles[i], cols[i]);
      const cx = x + cw / 2, r = Math.min(cw * 0.13, chh * 0.1);
      const bodyT = [0.1, 0.08, 0.9][i], outT = [0.5, 0.95, 0.3][i];
      twoClocks(cx, y + chh * 0.24, r, bodyT, outT);
      const ground = y + chh * 0.8, s = Math.min(chh * 0.11, cw * 0.12);
      const o = {};
      if (i === 0) {
        chara(cx, ground, s, Object.assign({}, PERSON, { eyes: "sleepy", mouth: "o", arms: "down", dir: 1 }));
        emote("zzz", cx + s * 0.7, ground - s * 3.2, s * 0.6);
        // 小飞机
        const fx = x + cw * 0.15 + ((time * 0.1) % 1) * cw * 0.7, fy = y + chh * 0.46;
        ctx.save(); ctx.translate(fx, fy); ctx.rotate(-0.1);
        ctx.beginPath(); ctx.ellipse(0, 0, s * 0.9, s * 0.22, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.3); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-s * 0.1, 0); ctx.lineTo(-s * 0.4, s * 0.55); ctx.lineTo(s * 0.05, s * 0.55); ctx.lineTo(s * 0.3, 0); ctx.closePath(); ctx.fillStyle = "#bfe3f5"; ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-s * 0.75, 0); ctx.lineTo(-s * 0.95, -s * 0.4); ctx.lineTo(-s * 0.6, -s * 0.1); ctx.closePath(); ctx.fillStyle = "#bfe3f5"; ctx.fill(); ctx.stroke();
        ctx.restore();
      } else if (i === 1) {
        moon(x + cw * 0.82, y + chh * 0.46, s * 0.4, 1);
        chara(cx - s * 0.4, ground, s, { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#ffffff", style: "short", hat: "cap", hatColor: "#ffffff", label: "+", eyes: "sleepy", mouth: "wavy", arms: "hold", item: "lamp", dir: 1 });
        Anima.sweat(cx + s * 0.6, ground - s * 3, s * 0.35);
      } else {
        // 床上的青少年，拿着手机还很精神
        moon(x + cw * 0.85, y + chh * 0.46, s * 0.4, 1);
        rrect(cx - s * 1.8, ground - s * 0.6, s * 3.6, s * 0.6, s * 0.2); ctx.fillStyle = "#cfe0ff"; ctx.fill(); outline(1.3); ctx.stroke();
        chara(cx, ground - s * 0.3, s, Object.assign({}, PERSON, { hair: "#5a4a6a", eyes: "open", mouth: "smile", arms: "hold", dir: 1 }));
        phone(cx + s * 0.05, ground - s * 1.05, s * 0.28, 1);
        o.head = { x: cx, y: ground - s * 3.4 };
      }
      const sf = Math.max(10, H * 0.028) * Anima.UI;
      text(subs[i], cx, y + chh * 0.91, Math.min(sf, cw / (subs[i].length + 0.8)), C.ink);
      ctx.restore();
      out.push(Object.assign(o, { cx, cy: y + chh * 0.24, r }));
    }
    if (out[0]) callout("k-mis", lt > 1.4 && (n ? lt < 7 : true), out[0].cx, out[0].cy + out[0].r * 1.1, n ? W * 0.5 : W * 0.3, stripY(), "身体钟和外面的钟对不上");
    if (out[2] && out[2].head) say("k-teen", lt > 5.6, out[2].head.x, out[2].head.y, n ? out[2].head.x - W * 0.1 : W * 0.78, H * 0.9, "还一点都不困呀…", "think");
    ctx.restore();
  }

  // ================= 帮时钟对准（第 6 幕） =================
  function alarmClock(x, y, s, ring) {
    const sh = ring ? Math.sin(time * 30) * s * 0.06 : 0;
    ctx.save(); ctx.translate(x + sh, y);
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(d * s * 0.6, -s * 0.85, s * 0.3, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); outline(1.3); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.fillStyle = "#ffb3c1"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, s * 0.78, 0, Math.PI * 2); ctx.fillStyle = "#fffdf8"; ctx.fill(); ctx.stroke();
    text("7:00", 0, 1, s * 0.5, C.ink);
    ctx.restore();
    if (ring) sfx("铃铃", x + s * 1.3, y - s * 1.2, s * 0.6, "#e7a23a", 0.15, 1);
  }
  function tagLabel(x, y, t, fs) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.1); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function tipsView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    Anima.wash("#fff6e6", "#eef0fd");
    Anima.petals(8, 0.5, 64);
    const floor = H * 0.93;
    ctx.fillStyle = "#e6f4dc"; ctx.fillRect(0, floor, W, H - floor); outline(1.4); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    const cs = H * (n ? 0.05 : 0.048);
    // 三个小站
    const zx = n ? [0.1, 0.3, 0.5] : [0.1, 0.27, 0.44];
    const zA = [prog(0.4, 0.7), prog(1.8, 0.7), prog(3.2, 0.7)];
    const tagFs = Math.max(10, H * 0.028) * Anima.UI;
    // 早上晒光
    if (zA[0] > 0.02) {
      ctx.save(); ctx.globalAlpha *= zA[0];
      const x = W * zx[0];
      sunMoon(x + cs * 0.9, floor - cs * 5.2, cs * 0.6, 0);
      chara(x, floor, cs, Object.assign({}, PERSON, { arms: "up", eyes: "happy", mouth: "grin", dir: 1 }));
      tagLabel(x, floor + tagFs * 0.5, "早上晒光", tagFs * 0.85);
      ctx.restore();
    }
    if (zA[1] > 0.02) {
      ctx.save(); ctx.globalAlpha *= zA[1];
      const x = W * zx[1];
      alarmClock(x, floor - cs * 1.6, cs * 0.9, Math.sin(time * 2) > 0);
      tagLabel(x, floor + tagFs * 0.5, n ? "定时起床" : "固定起床时间", tagFs * 0.85);
      ctx.restore();
    }
    if (zA[2] > 0.02) {
      ctx.save(); ctx.globalAlpha *= zA[2];
      const x = W * zx[2];
      moon(x + cs * 1.2, floor - cs * 5, cs * 0.5, 1);
      // 调暗的台灯
      ctx.fillStyle = C.line; ctx.fillRect(x - cs * 1.1, floor - cs * 2.2, cs * 0.12, cs * 2.2);
      ctx.beginPath(); ctx.moveTo(x - cs * 1.6, floor - cs * 2.2); ctx.lineTo(x - cs * 0.6, floor - cs * 2.2); ctx.lineTo(x - cs * 0.85, floor - cs * 2.9); ctx.lineTo(x - cs * 1.35, floor - cs * 2.9); ctx.closePath();
      ctx.fillStyle = "#ffe8b0"; ctx.fill(); outline(1.3); ctx.stroke();
      glow(x - cs * 1.05, floor - cs * 2.1, cs * 1.2, C.gold, 0.4);
      phone(x + cs * 0.6, floor - cs * 0.9, cs * 0.35, 0);
      tagLabel(x, floor + tagFs * 0.5, n ? "晚上调暗" : "晚上调暗、少看屏幕", tagFs * 0.85);
      ctx.restore();
    }
    // 右边：小钟楼和“调时间”的访客
    const tx = W * (n ? 0.84 : 0.76), tw = H * (n ? 0.16 : 0.2), th = H * (n ? 0.36 : 0.44);
    rrect(tx - tw / 2, floor - th, tw, th, tw * 0.12); ctx.fillStyle = C.tower; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(tx - tw * 0.62, floor - th + 2); ctx.lineTo(tx, floor - th - tw * 0.55); ctx.lineTo(tx + tw * 0.62, floor - th + 2); ctx.closePath(); ctx.fillStyle = C.roof; ctx.fill(); ctx.stroke();
    const cr = tw * 0.4, cy = floor - th * 0.66;
    const t0 = 0.9, t1 = 0.95;
    const adj = prog(5.6, 2.4);
    dial24(tx, cy, cr, lerp(t0, t1, adj) + (adj > 0 && adj < 1 ? Math.sin(time * 10) * 0.005 : 0), false);
    const dA = prog(4.6, 1);
    let dPos = null, mPos = null;
    if (dA > 0.02) {
      const dx = tx - tw * 0.5 - cs * (n ? 1.0 : 1.6), dy = floor;
      ctx.save(); ctx.globalAlpha *= dA;
      chara(lerp(W * 0.6, dx, dA), dy, cs, { who: "drug", label: "MT", tag: n ? null : "雷美替胺", hatColor: "#c9c0f5", hatColor2: "#fff1b8", arms: dA >= 1 ? "point" : "wave", eyes: "happy", mouth: "smile", dir: 1, walk: dA < 1 ? time * 9 : null });
      if (!n) chara(tx + tw * 0.5 + cs * 1.4, dy, cs * 0.9, Object.assign({}, MEL, { arms: "hold", item: "lamp", eyes: "happy", mouth: "cat", dir: -1 }));
      ctx.restore();
      dPos = { x: dx, y: dy - cs * 3.2 };
      mPos = { x: tx + tw * 0.5 + cs * 1.4, y: dy - cs * 3 };
      if (adj > 0 && adj < 1) sfx("轻轻拨", tx, cy - cr * 1.5, H * 0.035, C.lavDeep, -0.1, 1);
    }
    const ty = topY();
    if (dPos) callout("p-drug", n ? win(5, 8.4) : lt > 5.2, dPos.x, dPos.y, n ? W * 0.5 : W * 0.62, n ? ty : H * 0.18, n ? "雷美替胺等：帮忙“调时间”" : "褪黑素类：帮忙“调时间”");
    if (dPos) say("p-not", win(n ? 8.4 : 7, n ? 10.6 : 10.4), dPos.x, dPos.y, n ? W * 0.45 : W * 0.5, H * (n ? 0.35 : 0.38), "我是来调时间的，不是强力安眠药哦", "say");
    void mPos;
    if (n) banner("p-mood", lt > 10.6, W / 2, ty + H * 0.04, "抑郁、双相也常和节律紊乱有关", C.lavDeep);
    else say("p-mood", lt > 10.4, W * 0.3, H * 0.34, W * 0.28, H * 0.34, "抑郁、双相等情绪问题，也常和节律紊乱有关", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#5b7fd6", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#e7a23a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.tower > 0.02) towerView(S.tower);
    if (S.orch > 0.02) orchView(S.orch);
    if (S.cards > 0.02) cardsView(S.cards);
    if (S.tips > 0.02) tipsView(S.tips);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#9fc8f0",
    titleCard: { lines: ["身体里的", "小时钟"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
