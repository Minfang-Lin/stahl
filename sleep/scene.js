Anima.register("sleep", {
    "title": "睡眠开关和叫醒员",
    "tag": "睡眠与觉醒",
    "headline": "睡不着、醒不来，大脑里的【开关】怎么了？",
    "lede": "每天早上，一群叫醒员从下丘脑和脑干出发，把大脑皮层叫醒；到了晚上，睡眠开关让它们下班。这两边像跷跷板一样此消彼长。看看失眠时谁在加班，助眠药和促醒药又分别拨动了哪一边。",
    "summary": "觉醒系统和食欲素、VLPO 睡眠开关、过度觉醒与 CBT-I、Z 药、食欲素受体拮抗剂、多塞平，以及发作性睡病和促醒药。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 睡眠与觉醒障碍",
    "footer": "助眠药和促醒药都请在医生指导下使用，长期失眠或白天总犯困，请先去睡眠门诊看看。",
    "canvasLabel": "拟人化的叫醒员去叫醒大脑皮层小镇、睡眠开关跷跷板和食欲素广播站的动画",
    "regions": ["hypo", "brainstem"],
    "parts": ["sleep"],
    "cast": ["His", "Ox", "GABA", "NE", "drug"],
    "color": "#a8b4f0"
  }, () => {
  const CH = [
    { title: "叫醒员出发", town: 1, see: 0, radio: 0, day: 0,
      pill: ["总指挥", "食欲素"], pill2: ["时间", "早上"],
      text: "每天早上，一群“叫醒员”从下丘脑和脑干出发，沿着长长的通路去叫醒大脑皮层：组胺、食欲素、去甲肾上腺素、多巴胺、血清素和乙酰胆碱。其中食欲素像总指挥，不停地给其他叫醒员打气，让“醒着”这个状态稳稳当当，不会一会儿醒、一会儿睡。",
      fact: "觉醒靠一整个网络；食欲素神经元只在下丘脑，却能让整个觉醒系统保持稳定" },
    { title: "睡眠开关", town: 0, see: 1, radio: 0, day: 0,
      pill: ["睡眠开关", "VLPO"], pill2: ["规则", "此消彼长"],
      text: "天黑以后，轮到下丘脑里一个叫腹外侧视前区（VLPO）的小地方上班。那里的 GABA 神经元就是“睡眠开关”：它一打开，就让叫醒员们安静下来。反过来，叫醒员忙的时候也会压住它。两边像跷跷板一样互相抑制，所以我们通常是干脆地睡着或醒来，而不是卡在中间。",
      fact: "VLPO 的 GABA 神经元和觉醒系统互相抑制，被形容为“触发器”式的睡眠开关" },
    { title: "下班了还在加班", town: 1, see: 0, radio: 0, day: 0,
      pill: ["凌晨", "2 点"], pill2: ["叫醒员", "还在加班"],
      text: "失眠常常不是因为“困意不够”，而是叫醒员下班了还在加班：大脑和身体一直处在过度觉醒的状态，躺在床上脑子还转个不停。治疗失眠，首先推荐失眠认知行为治疗（CBT-I），比如固定起床时间、困了再上床、不在床上反复发愁，帮大脑重新记住“床是用来睡觉的”。",
      fact: "各国指南都把 CBT-I 推荐为慢性失眠的首选治疗" },
    { title: "给睡眠开关加把劲", town: 0, see: 1, radio: 0, day: 0,
      pill: ["加强", "GABA"], pill2: ["注意", "短期用"],
      text: "有些助眠药是给 GABA 这边加重量：苯二氮䓬类，以及唑吡坦、右佐匹克隆这样的“Z 药”，都作用在 GABA-A 受体上，让睡眠开关更有力，跷跷板一下子压向睡觉那边。但它们可能带来第二天犯困、夜里跌倒，甚至梦游等复杂睡眠行为，也有依赖的风险，要按医嘱短期使用。",
      fact: "Z 药和苯二氮䓬都能增强 GABA-A 受体；老年人用时尤其要当心跌倒" },
    { title: "把叫醒广播调小声", town: 0, see: 0, radio: 1, day: 0,
      pill: ["食欲素", "调小声"], pill2: ["H1 门", "挡住"],
      text: "另一种思路不是强行关机，而是让叫醒员没那么吵。食欲素受体拮抗剂，比如苏沃雷生、莱博雷生、达利雷生，挡住接收食欲素的受体，就像把总指挥的叫醒广播调小声，大脑就顺势滑进睡眠。小剂量的多塞平则挡住组胺的 H1 门，组胺叫不醒人，人就犯困了。",
      fact: "食欲素受体拮抗剂同时阻断 OX1 和 OX2 两种受体，所以也叫“双重”拮抗剂" },
    { title: "白天怎么都睡不醒", town: 0, see: 0, radio: 0, day: 1,
      pill: ["白天", "睡不醒"], pill2: ["帮手", "促醒药"],
      text: "反过来，有的人白天怎么都睡不醒。发作性睡病常常和食欲素神经元大量减少有关：总指挥不够，醒着的状态就不稳，一不留神就睡着。促醒药可以帮忙：莫达非尼主要挡住多巴胺的回收门，让多巴胺多留一会儿；替洛利生松开组胺的 H3 刹车，让组胺放得更多。规律作息、白天多晒太阳也很重要。",
      fact: "1 型发作性睡病的人，下丘脑里的食欲素神经元大多已经丢失" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    cortex: "#ffd6e0", cortexDeep: "#f4b6c8", house: "#fffaf0", roof: "#f7a8b8", win: "#fff1a8", road: "#f3e2cf",
    plank: "#f3cfa6", pole: "#c9b6e8",
  });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { town: 1, see: 0, radio: 0, day: 0 };
  let tilt = -1; // 跷跷板：+1 睡眠那头压下去，-1 觉醒那头压下去
  let nightSky = 0; // 0 白天，1 夜里

  function tiltTarget() {
    if (cur === 1) return lt < 5 ? -1 : 1;
    if (cur === 3) return lt < 3.4 ? -0.35 + Math.sin(time * 3) * 0.08 : 1;
    return -1;
  }
  function skyTarget() {
    if (cur === 0) return 1 - ease((lt - 0.3) / 3.5);
    if (cur === 1) return lt < 5 ? 0 : 1;
    if (cur === 2 || cur === 3 || cur === 4) return 1;
    return 0;
  }
  function update(dt) {
    if (cur !== lastCur) {
      lastCur = cur; lt = 0;
      if (cur === 1) tilt = -1;
      if (cur === 0) nightSky = 1;
    }
    lt += dt;
    tilt = lerp(tilt, tiltTarget(), 1 - Math.exp(-dt * 3.2));
    nightSky = lerp(nightSky, skyTarget(), 1 - Math.exp(-dt * 2.2));
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrow = () => W / H < 1.45;
  const win = (a, b) => lt > a && lt < b;

  // ---------- 共用小零件 ----------
  function sky(night) {
    Anima.wash(mix("#fff3dd", "#8d90d6", night), mix("#eaf6ff", "#cfc8f0", night));
    if (night > 0.2) {
      ctx.save(); ctx.globalAlpha *= (night - 0.2) / 0.8;
      for (let i = 0; i < 22; i++) {
        const x = rnd(i + 900) * W, y = rnd(i + 950) * H * 0.55, tw = 0.5 + 0.5 * Math.sin(time * 2 + i);
        sparkle(x, y, H * (0.006 + rnd(i) * 0.008) * (0.6 + tw * 0.5), 0.9, "#fffbe0");
      }
      ctx.restore();
    } else Anima.bokeh(6, "#ffe3b0", 0.7, 5);
  }
  function sunMoon(x, y, r, night) {
    if (night < 0.98) { // 太阳
      ctx.save(); ctx.globalAlpha *= 1 - night;
      glow(x, y, r * 2.4, C.gold, 1);
      ctx.strokeStyle = "#ffb940"; ctx.lineWidth = Math.max(2, r * 0.12); ctx.lineCap = "round";
      for (let k = 0; k < 8; k++) { const q = k * Math.PI / 4 + time * 0.3; ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * r * 1.3, y + Math.sin(q) * r * 1.3); ctx.lineTo(x + Math.cos(q) * r * 1.65, y + Math.sin(q) * r * 1.65); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.8); ctx.stroke();
      face(x, y + r * 0.1, r * 0.55, 1);
      ctx.restore();
    }
    if (night > 0.02) { // 月亮
      ctx.save(); ctx.globalAlpha *= night;
      glow(x, y, r * 2.2, "#fff6c2", 1);
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.arc(x + r * 0.55, y - r * 0.35, r * 0.85, 0, Math.PI * 2, true);
      ctx.fillStyle = "#fff4c4"; ctx.fill("evenodd"); outline(1.6); ctx.stroke();
      ctx.fillStyle = C.ink;
      ctx.lineWidth = Math.max(1.2, r * 0.07);
      ctx.beginPath(); ctx.arc(x - r * 0.55, y + r * 0.05, r * 0.12, 0, Math.PI); ctx.stroke();
      ctx.restore();
    }
  }
  // 闭着眼睡觉的小脸
  function sleepFace(x, y, s) {
    outline(Math.max(1, s * 0.08));
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x + d * s * 0.32, y - s * 0.1, s * 0.13, 0.1, Math.PI - 0.1); ctx.stroke(); }
    Anima.blushAt(x, y + s * 0.15, s * 0.55, s * 0.14);
    ctx.beginPath(); ctx.arc(x, y + s * 0.25, s * 0.07, 0, Math.PI * 2); ctx.stroke();
  }
  function house(x, y, s, awake, lit, tired) {
    // (x, y) 是房子底边中心，s 是房子半宽
    const w = s * 2, h = s * 1.5;
    rrect(x - s, y - h, w, h, s * 0.16); ctx.fillStyle = C.house; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - s * 1.2, y - h + s * 0.05); ctx.lineTo(x, y - h - s * 0.95); ctx.lineTo(x + s * 1.2, y - h + s * 0.05); ctx.closePath();
    ctx.fillStyle = C.roof; ctx.fill(); outline(1.5); ctx.stroke();
    // 窗户就是眼睛
    const wy = y - h * 0.62, ws = s * 0.34;
    for (const d of [-1, 1]) {
      const wx = x + d * s * 0.45;
      if (lit > 0.05) glow(wx, wy, ws * 2.2, C.gold, lit * 0.8);
      rrect(wx - ws, wy - ws, ws * 2, ws * 2, ws * 0.4); ctx.fillStyle = mix("#c9c5e8", C.win, lit); ctx.fill(); outline(1.2); ctx.stroke();
      if (awake) {
        ctx.fillStyle = C.ink; ctx.beginPath(); ctx.ellipse(wx, wy + ws * 0.1, ws * 0.28, ws * (tired ? 0.5 : 0.42), 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(wx - ws * 0.1, wy - ws * 0.1, ws * 0.12, 0, Math.PI * 2); ctx.fill();
      } else {
        outline(Math.max(1, ws * 0.18)); ctx.beginPath(); ctx.arc(wx, wy - ws * 0.1, ws * 0.45, 0.2, Math.PI - 0.2); ctx.stroke();
      }
    }
    // 门是嘴巴
    outline(1.3);
    ctx.beginPath();
    if (awake && !tired) ctx.arc(x, y - h * 0.26, s * 0.2, 0.1, Math.PI - 0.1);
    else if (tired) { ctx.moveTo(x - s * 0.2, y - h * 0.22); for (let k = 1; k <= 4; k++) ctx.lineTo(x - s * 0.2 + k * s * 0.1, y - h * 0.22 + (k % 2 ? -1 : 1) * s * 0.06); }
    else ctx.arc(x, y - h * 0.22, s * 0.08, 0, Math.PI * 2);
    ctx.stroke();
    if (tired) Anima.sweat(x + s * 0.95, y - h * 0.95, s * 0.35);
    if (!awake) emote("zzz", x + s * 0.9, y - h - s * 0.4, s * 0.7);
  }
  function bell(x, y, s, swing) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(swing);
    ctx.beginPath(); ctx.moveTo(-s * 0.55, s * 0.5); ctx.quadraticCurveTo(-s * 0.5, -s * 0.6, 0, -s * 0.62); ctx.quadraticCurveTo(s * 0.5, -s * 0.6, s * 0.55, s * 0.5); ctx.closePath();
    ctx.fillStyle = C.gold; ctx.fill(); outline(Math.max(1, s * 0.12)); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, s * 0.62, s * 0.16, 0, Math.PI * 2); ctx.fillStyle = "#e7a23a"; ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function megaphone(x, y, s, dir) {
    ctx.save(); ctx.translate(x, y); ctx.scale(dir, 1);
    ctx.beginPath(); ctx.moveTo(0, -s * 0.25); ctx.lineTo(s * 1.2, -s * 0.7); ctx.lineTo(s * 1.2, s * 0.7); ctx.lineTo(0, s * 0.25); ctx.closePath();
    ctx.fillStyle = "#ffcf6e"; ctx.fill(); outline(Math.max(1.2, s * 0.08)); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(s * 1.2, 0, s * 0.18, s * 0.7, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function waves(x, y, s, dir, amp, n) {
    ctx.save(); ctx.lineCap = "round";
    for (let k = 0; k < n; k++) {
      const t = (time * 0.8 + k / n) % 1;
      ctx.globalAlpha = (1 - t) * amp;
      ctx.strokeStyle = "#ffb347"; ctx.lineWidth = Math.max(2, s * 0.12 * amp);
      const r = s * (0.6 + t * 3.2);
      ctx.beginPath(); ctx.arc(x, y, r, dir > 0 ? -0.5 : Math.PI - 0.5, dir > 0 ? 0.5 : Math.PI + 0.5); ctx.stroke();
    }
    ctx.restore();
  }
  function station(x, y, w, h, label, color) {
    rrect(x - w / 2, y - h, w, h, h * 0.18); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - w * 0.6, y - h + 2); ctx.lineTo(x, y - h - h * 0.45); ctx.lineTo(x + w * 0.6, y - h + 2); ctx.closePath();
    ctx.fillStyle = mix(color, "#6d5760", 0.18); ctx.fill(); ctx.stroke();
    const fs = Math.max(10, Math.min(h * 0.32, w * 0.2)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(label).width + fs * 0.9;
    rrect(x - tw / 2, y - h * 0.62 - fs * 0.7, tw, fs * 1.4, fs * 0.7); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.2); ctx.stroke();
    text(label, x, y - h * 0.62 + 1, fs, C.ink);
  }

  // ================= 大脑皮层小镇（第 1、3 幕） =================
  function geoT() {
    const n = narrow();
    const hs = H * (n ? 0.055 : 0.05);
    const houses = [];
    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      houses.push({ x: lerp(W * (n ? 0.5 : 0.52), W * 0.92, t), y: H * ((n ? 0.54 : 0.47) - Math.sin(t * Math.PI) * 0.08) });
    }
    const hypo = { x: W * 0.14, y: H * 0.56 }, stem = { x: W * 0.2, y: H * 0.93 };
    return { hs, houses, hypo, stem, cs: H * (n ? 0.045 : 0.042) };
  }
  const walkers = [
    { who: "His", from: "hypo", house: 0 },
    { who: "NE", from: "stem", house: 1 },
    { who: "DA", from: "stem", house: 2 },
    { who: "5HT", from: "stem", house: 3 },
    { who: "ACh", from: "stem", house: 4 },
  ];
  function roadPt(a, b, t) {
    const m = { x: lerp(a.x, b.x, 0.5), y: Math.max(a.y, b.y) + H * 0.02 };
    return { x: (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * m.x + t * t * b.x, y: (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * m.y + t * t * b.y };
  }
  function townView(a) {
    const g = geoT();
    ctx.save(); ctx.globalAlpha *= a;
    sky(nightSky);
    sunMoon(W * 0.26, H * 0.24, H * 0.05, nightSky);
    // 大脑皮层的小山丘（边缘是一道道脑回）
    const hb = narrow() ? 0.56 : 0.5, hx0 = W * 0.44;
    ctx.beginPath(); ctx.moveTo(W * 0.3, H + 5);
    ctx.quadraticCurveTo(W * 0.4, H * (hb + 0.02), hx0, H * hb);
    for (let k = 0; k <= 40; k++) {
      const t = k / 40, x = lerp(hx0, W + 10, t);
      const y = H * (hb - Math.sin(t * Math.PI * 0.95) * 0.09) + Math.sin(t * 28) * H * 0.01;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W + 10, H + 5); ctx.closePath();
    ctx.fillStyle = mix(C.cortex, "#d9cdea", nightSky * 0.5); ctx.fill(); outline(1.6); ctx.stroke();
    // 脑回的纹路
    ctx.save(); ctx.strokeStyle = Anima.alpha(C.cortexDeep, 0.7); ctx.lineWidth = Math.max(1.5, H * 0.005); ctx.lineCap = "round";
    for (let k = 0; k < 4; k++) {
      const x = W * (0.55 + k * 0.11), y = H * (0.8 + (k % 2) * 0.06);
      ctx.beginPath(); ctx.moveTo(x - W * 0.04, y); ctx.bezierCurveTo(x - W * 0.02, y - H * 0.05, x + W * 0.02, y + H * 0.05, x + W * 0.04, y); ctx.stroke();
    }
    ctx.restore();
    // 地面
    ctx.fillStyle = mix("#e6f4dc", "#b9b6dc", nightSky); ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(0, H * 0.93); ctx.quadraticCurveTo(W * 0.3, H * 0.9, W * 0.5, H * 0.95); ctx.lineTo(W * 0.5, H); ctx.closePath(); ctx.fill();

    // 通路（小路）
    const src = (w) => (w.from === "hypo" ? g.hypo : g.stem);
    const dest = (i) => ({ x: g.houses[i].x, y: g.houses[i].y + H * (narrow() ? 0.2 : 0.13) });
    ctx.save(); ctx.setLineDash([6, 8]); ctx.strokeStyle = Anima.alpha(C.line, 0.35); ctx.lineWidth = 2;
    walkers.forEach((w, i) => {
      const A = src(w), B = dest(w.house);
      ctx.beginPath(); for (let k = 0; k <= 16; k++) { const p = roadPt(A, B, k / 16); if (k) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); } ctx.stroke();
    });
    ctx.restore();

    station(g.hypo.x, g.hypo.y, H * 0.2, H * 0.12, "下丘脑", "#ffe6c4");
    station(g.stem.x, g.stem.y, H * 0.22, H * 0.12, "脑干", "#e4e0ff");

    // 房子：有人来叫就醒
    const arrive = [];
    walkers.forEach((w, i) => { arrive[i] = cur === 0 ? 1.2 + i * 0.6 + 4.2 : 0; });
    g.houses.forEach((h, i) => {
      const awake = cur === 2 ? true : lt > arrive[i];
      house(h.x, h.y, g.hs, awake, awake ? 1 : 0, cur === 2);
    });
    // 叫醒员
    const pos = [];
    walkers.forEach((w, i) => {
      const A = src(w), B = dest(w.house);
      let p = 1;
      if (cur === 0) p = prog(1.2 + i * 0.6, 4.2);
      if (p <= 0) { pos.push(null); return; }
      const q = roadPt(A, B, p);
      const moving = p < 1;
      const tired = cur === 2;
      chara(q.x, q.y, g.cs, { who: w.who, walk: moving ? time * 9 + i : null, arms: moving ? "down" : "up", dir: 1,
        eyes: tired ? (i % 2 ? "teary" : "dizzy") : (moving ? "open" : "happy"), mouth: tired ? "wavy" : (moving ? "smile" : "grin"),
        alpha: cur === 0 ? clamp(p * 6, 0, 1) : 1, brow: tired ? "worry" : null });
      if (!moving) {
        const sw = Math.sin(time * 12 + i) * 0.5;
        bell(q.x + g.cs * 0.95, q.y - g.cs * 3.2, g.cs * 0.55, sw);
        if (Math.sin(time * 6 + i) > 0.3) sfx("叮", q.x + g.cs * 1.7, q.y - g.cs * 3.9, g.cs * 0.8, "#e7a23a", 0.1, 0.9);
        if (tired) emote("sweat", q.x - g.cs * 0.9, q.y - g.cs * 3.2, g.cs * 0.6);
      }
      pos.push(q);
    });
    // 总指挥：食欲素，拿着喇叭给大家打气
    const ox = { x: g.hypo.x + H * 0.15, y: g.hypo.y };
    chara(ox.x, ox.y, g.cs * 1.1, { who: "Ox", arms: "hold", eyes: cur === 2 ? "angry" : "sparkle", mouth: "open", dir: 1 });
    megaphone(ox.x + g.cs * 0.7, ox.y - g.cs * 1.9, g.cs * 0.9, 1);
    waves(ox.x + g.cs * 1.9, ox.y - g.cs * 1.9, g.cs, 1, cur === 2 ? 1 : 0.8, 3);

    // 第 3 幕：床上睡不着的人（最左边的小房子里）
    const n = narrow(), topY = H * 0.27;
    if (cur === 2) {
      const cl = { x: W * 0.36, y: H * 0.24 };
      // 钟：凌晨两点
      const r = H * 0.045;
      if (nightSky > 0.5) {
        const cx = W * 0.37, cy = H * 0.22;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.6); ctx.stroke();
        outline(2); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(-Math.PI / 2 + Math.PI / 3) * r * 0.5, cy + Math.sin(-Math.PI / 2 + Math.PI / 3) * r * 0.5); ctx.moveTo(cx, cy); ctx.lineTo(cx, cy - r * 0.75); ctx.stroke();
      }
      void cl;
    }
    // 标注和气泡
    callout("t-cortex", cur === 0 && (n ? win(6.5, 9.5) : lt > 6.5), g.houses[2].x, g.houses[2].y - g.hs * 2.4, n ? W * 0.62 : g.houses[2].x, n ? topY : H * 0.16, "大脑皮层小镇");
    callout("t-ox", cur === 0 && (n ? lt > 9.5 : lt > 8), ox.x, ox.y - g.cs * 1.2, n ? W * 0.4 : ox.x + W * 0.02, n ? topY : H * 0.34, "食欲素：觉醒总指挥");
    say("t-go", cur === 0 && win(0.8, n ? 6.2 : 6.5), ox.x, ox.y - g.cs * 3.4, ox.x + W * (n ? 0.14 : 0.1), H * 0.2, "天亮啦，大家去叫醒皮层！", "shout");
    const d3 = dest(3);
    callout("t-hyper", cur === 2 && (n ? win(1, 4.5) : win(1, 8.5)), d3.x, d3.y - g.cs * 1.5, n ? W * 0.62 : W * 0.72, H * (n ? 0.8 : 0.72), "过度觉醒：该下班还在响");
    say("t-cant", cur === 2 && win(n ? 4.5 : 3, 8.5), g.houses[4].x, g.houses[4].y - g.hs * 2.5, n ? W * 0.72 : W * 0.86, H * (n ? 0.26 : 0.2), "好困…睡不着", "think");
    say("t-cbt", cur === 2 && lt > 8.5, W * 0.7, H * 0.72, n ? W * 0.66 : W * 0.72, H * (n ? 0.82 : 0.78), "首选：失眠认知行为治疗（CBT-I）", "box");
    ctx.restore();
  }

  // ================= 跷跷板（第 2、4 幕） =================
  function seesawView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const night = (tilt + 1) / 2;
    sky(night);
    sunMoon(W * 0.5, H * 0.24, H * 0.055, night);
    const n = narrow();
    const cx = W * 0.5, py = H * 0.8, L = Math.min(W * 0.4, H * 0.7), ang = -tilt * 0.22;
    // 地面
    ctx.fillStyle = mix("#e6f4dc", "#b9b6dc", night); ctx.fillRect(0, H * 0.9, W, H * 0.1);
    outline(1.4); ctx.beginPath(); ctx.moveTo(0, H * 0.9); ctx.lineTo(W, H * 0.9); ctx.stroke();
    // 支点
    ctx.beginPath(); ctx.moveTo(cx, py); ctx.lineTo(cx - H * 0.08, H * 0.9); ctx.lineTo(cx + H * 0.08, H * 0.9); ctx.closePath();
    ctx.fillStyle = C.pole; ctx.fill(); outline(1.6); ctx.stroke();
    face(cx, H * 0.86, H * 0.03, 1);
    // 板子
    ctx.save(); ctx.translate(cx, py); ctx.rotate(ang);
    rrect(-L, -H * 0.02, L * 2, H * 0.035, H * 0.017); ctx.fillStyle = C.plank; ctx.fill(); outline(1.8); ctx.stroke();
    // 两头的小牌子
    const fs = Math.max(10, H * 0.028) * Anima.UI;
    for (const [u, lab, col] of [[-1, "睡", "#c9c0f5"], [1, "醒", "#ffd27a"]]) {
      ctx.beginPath(); ctx.arc(u * (L + fs * 1.1), 0, fs * 0.85, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(1.4); ctx.stroke();
      text(lab, u * (L + fs * 1.1), 1, fs, C.ink);
    }
    ctx.restore();
    const on = (u) => ({ x: cx + Math.cos(ang) * u * L, y: py - H * 0.02 + Math.sin(ang) * u * L });
    const cs = H * (n ? 0.05 : 0.045);
    const sleepSide = tilt > 0.3, wakeSide = tilt < -0.3;
    // 睡眠开关 GABA（VLPO）
    const gp = on(-0.8);
    chara(gp.x, gp.y, cs * 1.15, { who: "GABA", arms: sleepSide ? "shh" : "down", eyes: sleepSide ? "closed" : (cur === 3 && lt < 3.4 ? "teary" : "sleepy"), mouth: sleepSide ? "cat" : "flat", dir: 1, alpha: wakeSide && cur === 1 ? 0.8 : 1 });
    if (cur === 3 && lt < 3.4) emote("sweat", gp.x - cs * 1.1, gp.y - cs * 3.4, cs * 0.6);
    // 觉醒团队
    const team = [["His", 0.5], ["Ox", 0.7], ["NE", 0.9]];
    const tp = [];
    team.forEach((m, i) => {
      const p = on(m[1]);
      tp.push(p);
      chara(p.x, p.y, cs, { who: m[0], arms: wakeSide ? "up" : "down", eyes: wakeSide ? "happy" : "closed", mouth: wakeSide ? "grin" : "cat", dir: -1,
        jump: wakeSide ? Math.abs(Math.sin(time * 5 + i)) * 0.2 : 0, alpha: sleepSide ? 0.85 : 1 });
      if (sleepSide) emote("zzz", p.x + cs * 0.6, p.y - cs * 3.3, cs * 0.6);
    });
    // 第 4 幕：助眠药访客跳上睡觉那头
    let dp = null;
    if (cur === 3) {
      const p0 = prog(1.8, 1.6), tgt = on(-0.55);
      const x = lerp(-cs * 2, tgt.x, p0), y = lerp(H * 0.4, tgt.y, p0) - Math.sin(p0 * Math.PI) * H * 0.12;
      if (p0 > 0) {
        chara(x, y, cs, { who: "drug", label: "Z 药", hatColor: "#c9c0f5", hatColor2: "#ffffff", arms: p0 >= 1 ? "fist" : "up", eyes: p0 >= 1 ? "happy" : "wide", mouth: "grin", dir: 1 });
        if (p0 > 0.9 && lt < 4.2) { sfx("咚！", x, y - cs * 4, H * 0.05, "#8f84e0", -0.1, 1 - prog(3.4, 0.8)); Anima.speedLines(x, y - cs * 1.5, cs * 2.4, 12, 0.5 * (1 - prog(3.4, 0.8))); }
        dp = { x, y: y - cs * 3.1 };
      }
    }
    // 互相抑制的两道弧线
    const arcY = H * (n ? 0.42 : 0.4);
    ctx.save(); ctx.strokeStyle = Anima.alpha(C.line, 0.55); ctx.lineWidth = 2; ctx.setLineDash([5, 6]);
    for (const d of [-1, 1]) {
      const x0 = cx + d * L * 0.62, x1 = cx - d * L * 0.62, yy = arcY + (d > 0 ? H * 0.05 : 0);
      ctx.beginPath(); ctx.moveTo(x0, yy + H * 0.04); ctx.quadraticCurveTo(cx, yy - H * 0.07, x1, yy + H * 0.04); ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(x1 - H * 0.02, yy + H * 0.04); ctx.lineTo(x1 + H * 0.02, yy + H * 0.04); ctx.stroke(); // ⊣ 抑制符号
      ctx.setLineDash([5, 6]);
    }
    ctx.restore();

    const topY = H * 0.27;
    const c1 = cur === 1;
    callout("s-vlpo", (c1 && (n ? win(1, 4.5) : lt > 1)) || (cur === 3 && !n && lt > 7), gp.x, gp.y - cs * 2, n ? W * 0.3 : W * 0.16, n ? topY : H * 0.3, "VLPO：睡眠开关（GABA）");
    callout("s-wake", c1 && (n ? win(4.5, 7.5) : lt > 2), tp[1].x, tp[1].y - cs * 3.4, n ? W * 0.7 : W * 0.84, n ? topY : H * 0.22, "觉醒系统");
    callout("s-mut", c1 && (n ? lt > 10 : lt > 3.5), cx, arcY - H * 0.02, cx, n ? topY : H * 0.16, "互相抑制，此消彼长");
    say("s-night", c1 && win(n ? 7.5 : 6.5, n ? 10 : 13), gp.x, gp.y - cs * 3.6, gp.x + W * (n ? 0.12 : 0.06), H * (n ? 0.3 : 0.44), "天黑啦，大家下班～", "say");
    if (dp) {
      say("s-drug", cur === 3 && win(3.4, n ? 6.5 : 7), dp.x, dp.y, dp.x + W * 0.1, H * 0.3, "我来帮 GABA 加把劲！", "shout");
      callout("s-z", cur === 3 && (n ? win(6.5, 9.5) : win(7, 13)), dp.x, dp.y + cs * 0.4, n ? W * 0.35 : W * 0.3, n ? topY : H * 0.16, "Z 药、苯二氮䓬：增强 GABA-A");
    }
    say("s-warn", cur === 3 && lt > (n ? 9.5 : 8), W * 0.8, H * 0.3, n ? W * 0.62 : W * 0.78, H * (n ? 0.3 : 0.2), "留意：次日困倦、跌倒、梦游、依赖", "box");
    ctx.restore();
  }

  // ================= 广播站（第 5 幕） =================
  function radioView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    sky(1);
    sunMoon(W * 0.52, H * 0.2, H * 0.045, 1);
    const vol = 1 - prog(2.5, 4.5) * 0.8;
    // 地面和皮层小镇
    ctx.fillStyle = "#b9b6dc"; ctx.fillRect(0, H * 0.9, W, H * 0.1);
    ctx.beginPath(); ctx.moveTo(W * 0.44, H + 5); ctx.quadraticCurveTo(W * 0.5, H * 0.8, W * 0.54, H * 0.78);
    for (let k = 0; k <= 30; k++) { const t = k / 30, x = lerp(W * 0.54, W + 10, t); ctx.lineTo(x, H * (0.78 - Math.sin(t * Math.PI) * 0.06) + Math.sin(t * 22) * H * 0.01); }
    ctx.lineTo(W + 10, H + 5); ctx.closePath(); ctx.fillStyle = mix(C.cortex, "#d9cdea", 0.5); ctx.fill(); outline(1.6); ctx.stroke();
    const hs = H * (n ? 0.05 : 0.045), cnt = n ? 3 : 4;
    for (let i = 0; i < cnt; i++) {
      const t = cnt > 1 ? i / (cnt - 1) : 0, x = lerp(W * 0.6, W * 0.92, t), y = H * (0.8 - Math.sin(t * Math.PI) * 0.06);
      const awake = vol > 0.55 + i * 0.08;
      house(x, y, hs, awake, awake ? 1 : 0.1, false);
    }
    // 广播塔和喇叭
    const tx = W * 0.2, ty = H * 0.9, cs = H * (n ? 0.052 : 0.046);
    const topY = H * (n ? 0.46 : 0.42);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * 0.012); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(tx + W * 0.08, ty); ctx.lineTo(tx + W * 0.08, topY); ctx.stroke();
    ctx.strokeStyle = C.pole; ctx.lineWidth = Math.max(2, H * 0.007); ctx.stroke();
    const spk = { x: tx + W * 0.08, y: topY };
    megaphone(spk.x, spk.y, H * 0.07 * (0.95 + 0.05 * Math.sin(time * 8) * vol), 1);
    waves(spk.x + H * 0.1, spk.y, H * 0.08, 1, vol, 4);
    if (vol > 0.6) sfx("起床——！", spk.x + H * 0.24, spk.y - H * 0.1, H * 0.045 * vol, "#e7a23a", -0.1, vol);
    // 食欲素总指挥
    chara(tx, ty, cs * 1.1, { who: "Ox", arms: "hold", eyes: vol > 0.5 ? "sparkle" : "sleepy", mouth: vol > 0.5 ? "open" : "o", dir: 1 });
    // 音量旋钮
    const kx = tx + W * 0.08, ky = H * 0.72, kr = H * 0.04;
    rrect(kx - kr * 1.5, ky - kr * 1.4, kr * 3, kr * 2.8, kr * 0.4); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.arc(kx, ky, kr, 0, Math.PI * 2); ctx.fillStyle = "#ffe6c4"; ctx.fill(); outline(1.5); ctx.stroke();
    const q = Math.PI * 0.75 + vol * Math.PI * 1.5;
    outline(2.4); ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(kx + Math.cos(q) * kr * 0.8, ky + Math.sin(q) * kr * 0.8); ctx.stroke();
    text("音量", kx, ky + kr * 1.1, Math.max(9, kr * 0.4) * Anima.UI, C.soft);
    // 拮抗剂访客：把音量拧小
    const dx = kx + kr * 2.4, dy = ty;
    const dA = prog(0.8, 1.2);
    ctx.save(); ctx.globalAlpha *= dA;
    chara(lerp(W * 0.5, dx, dA), dy, cs, { who: "drug", label: "拮抗剂", hatColor: "#ffcf6e", hatColor2: "#c9c0f5", arms: "point", eyes: "happy", dir: -1, walk: dA < 1 ? time * 9 : null });
    ctx.restore();
    // 放大小窗：H1 门被挡住
    let inset = null;
    const iA = prog(n ? 7.5 : 6.5, 0.8);
    if (iA > 0.01) {
      const iw = W * (n ? 0.5 : 0.34), ih = H * (n ? 0.36 : 0.34), ix = W - iw - W * 0.03, iy = H * (n ? 0.2 : 0.16);
      ctx.save(); ctx.globalAlpha *= iA;
      ctx.save(); ctx.shadowColor = "rgba(90,70,120,0.25)"; ctx.shadowBlur = 14; rrect(ix, iy, iw, ih, 16); ctx.fillStyle = "#fffdfb"; ctx.fill(); ctx.restore();
      outline(2); rrect(ix, iy, iw, ih, 16); ctx.stroke();
      ctx.save(); rrect(ix, iy, iw, ih, 16); ctx.clip();
      const my = iy + ih * 0.78;
      ctx.fillStyle = "#ffe0ea"; ctx.fillRect(ix, my, iw, ih);
      outline(1.6); ctx.beginPath(); ctx.moveTo(ix, my); ctx.lineTo(ix + iw, my); ctx.stroke();
      const cf = Math.max(10, Math.min(ih * 0.1, iw * 0.07)) * Anima.UI;
      text("多塞平挡住组胺的 H1 门", ix + iw / 2, iy + cf * 1.1, cf, C.ink);
      const rs = ih * 0.12, rx = ix + iw * 0.4;
      const R = Anima.receptor(rx, my, rs, "#e3c8f5", 0, { label: "H1" });
      const ds = ih * 0.1;
      chara(rx, R.site.y + rs * 0.2, ds, { who: "drug", label: "多塞平", hatColor: "#b98ad8", hatColor2: "#ffffff", arms: "hug", eyes: "closed", mouth: "cat", dir: 1 });
      chara(ix + iw * 0.78, my - ih * 0.02, ds, { who: "His", arms: "hold", eyes: "sleepy", mouth: "o", dir: -1 });
      emote("?", ix + iw * 0.78 + ds * 1, my - ds * 3.6, ds * 0.6);
      ctx.restore();
      ctx.restore();
      inset = { x: rx, y: R.site.y, ix, iy, iw, ih };
    }
    const tY = H * 0.27;
    say("r-ox", win(0.5, 3.5), tx, ty - cs * 3.5, tx + W * 0.12, H * 0.22, "大家都给我醒着！", "shout");
    callout("r-dora", n ? win(3.5, 7.5) : win(3, 13), kx, ky - kr, n ? W * 0.5 : W * 0.5, n ? tY : H * 0.26, "食欲素受体拮抗剂：调小叫醒声");
    ctx.restore();
  }

  // ================= 白天（第 6 幕） =================
  function dayView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = narrow();
    sky(0);
    Anima.petals(8, 0.5, 44);
    sunMoon(W * 0.1, H * 0.3, H * 0.05, 0);
    const gy = H * 0.92;
    ctx.fillStyle = "#e6f4dc"; ctx.fillRect(0, gy, W, H - gy); outline(1.4); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    const cs = H * (n ? 0.05 : 0.045);
    // 左：打瞌睡的人
    const wake = prog(8.5, 1);
    const px = W * 0.16, pyy = gy;
    const ps = H * (n ? 0.065 : 0.06);
    chara(px, pyy, ps, { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none",
      eyes: wake > 0.5 ? "sparkle" : "sleepy", mouth: wake > 0.5 ? "grin" : "o", arms: wake > 0.5 ? "up" : "down", dir: 1, jump: wake > 0.5 ? Math.abs(Math.sin(time * 5)) * 0.2 : 0 });
    // 桌子
    rrect(px - ps * 1.2, pyy - ps * 1.25, ps * 2.4 + W * 0.03, ps * 0.22, ps * 0.08); ctx.fillStyle = "#f3cfa6"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.fillStyle = "#f3cfa6"; ctx.fillRect(px + ps * 1.1, pyy - ps * 1.05, ps * 0.2, ps * 1.05); outline(1.2); ctx.strokeRect(px + ps * 1.1, pyy - ps * 1.05, ps * 0.2, ps * 1.05);
    if (wake < 0.5) emote("zzz", px + ps * 0.8, pyy - ps * 3.3, ps * 0.8);
    else emote("sparkle", px + ps * 1.1, pyy - ps * 3.4, ps * 0.8);
    // 中：食欲素站，好多座位空着
    const sx = W * (n ? 0.5 : 0.46), sw = W * (n ? 0.3 : 0.26), sy = H * (n ? 0.66 : 0.64), sh = H * 0.22;
    rrect(sx - sw / 2, sy - sh, sw, sh, H * 0.03); ctx.fillStyle = "#fff4e0"; ctx.fill(); outline(1.6); ctx.stroke();
    const fs = Math.max(10, H * 0.028) * Anima.UI;
    text("食欲素站", sx, sy - sh + fs * 0.9, fs, C.ink);
    const slots = 4, filled = [true, false, false, true];
    for (let i = 0; i < slots; i++) {
      const x = sx - sw / 2 + sw * (i + 0.5) / slots, y = sy - H * 0.02;
      if (filled[i]) chara(x, y, cs * 0.85, { who: "Ox", arms: i ? "wave" : "hold", eyes: "open", mouth: "wavy", brow: "worry", dir: i ? -1 : 1 });
      else {
        ctx.save(); ctx.setLineDash([3, 4]); outline(1.3);
        ctx.beginPath(); ctx.arc(x, y - cs * 0.85 * 2.1, cs * 0.85, 0, Math.PI * 2); ctx.stroke();
        rrect(x - cs * 0.6, y - cs * 1.2, cs * 1.2, cs * 1.2, cs * 0.3); ctx.stroke();
        ctx.restore();
      }
    }
    // 右上：莫达非尼挡住多巴胺回收门
    const vx = W * (n ? 0.83 : 0.8), v1y = H * (n ? 0.58 : 0.52), v2y = gy;
    const mA = prog(3, 0.8), pA = prog(5.5, 0.8);
    if (mA > 0.01) {
      ctx.save(); ctx.globalAlpha *= mA;
      const ts = H * 0.05;
      Anima.transporter(vx, v1y - ts * 1.9, ts, "#9fc3ea", time * 0.3, lt > 4);
      chara(vx - ts * 1.9, v1y, cs * 0.9, { who: "drug", label: "莫达非尼", hatColor: "#ffd27a", hatColor2: "#ffffff", arms: "point", eyes: "happy", dir: 1 });
      const nDA = lt > 4.5 ? 3 : 1;
      for (let k = 0; k < nDA; k++) chara(vx + ts * (1.3 + k * 0.9), v1y - (k % 2) * cs * 0.3, cs * 0.6, { who: "DA", arms: "up", eyes: "happy", mouth: "grin", jump: Math.abs(Math.sin(time * 5 + k)) * 0.3, shadow: false });
      ctx.restore();
    }
    // 右下：替洛利生松开组胺的 H3 刹车
    if (pA > 0.01) {
      ctx.save(); ctx.globalAlpha *= pA;
      const hx = vx + cs * 1.2, freed = prog(7, 0.8);
      chara(hx, v2y, cs * 0.95, { who: "His", arms: freed > 0.5 ? "up" : "hold", eyes: freed > 0.5 ? "happy" : "sleepy", mouth: freed > 0.5 ? "grin" : "flat", dir: -1, jump: freed > 0.5 ? Math.abs(Math.sin(time * 6)) * 0.25 : 0 });
      if (freed > 0.5) { bell(hx + cs * 0.9, v2y - cs * 3.3, cs * 0.5, Math.sin(time * 12) * 0.5); sfx("叮叮！", hx + cs * 1.6, v2y - cs * 4.2, cs * 0.8, "#e7a23a", 0.1, 1); }
      // 刹车牌：被访客拿开
      const bx = lerp(hx, hx - cs * 2.2, freed), by = lerp(v2y - cs * 1.3, v2y - cs * 4.1, freed);
      ctx.save(); ctx.translate(bx, by); ctx.rotate(-0.2 * freed);
      ctx.beginPath(); for (let k = 0; k < 8; k++) { const q = Math.PI / 8 + k * Math.PI / 4; const r = cs * 0.55; if (k) ctx.lineTo(Math.cos(q) * r, Math.sin(q) * r); else ctx.moveTo(Math.cos(q) * r, Math.sin(q) * r); } ctx.closePath();
      ctx.fillStyle = C.bad; ctx.fill(); outline(1.3); ctx.stroke();
      text("H3", 0, 1, cs * 0.45, "#ffffff");
      ctx.restore();
      chara(hx - cs * 2.3, v2y, cs * 0.9, { who: "drug", label: "替洛利生", hatColor: "#b98ad8", hatColor2: "#fff1b8", arms: freed > 0.3 ? "carry" : "down", eyes: "happy", dir: 1 });
      ctx.restore();
    }
    const tY = H * 0.27;
    callout("d-ox", n ? win(0.8, 3.2) : win(0.8, 13), sx + sw * 0.125 - sw / 2 + sw / 4, sy - H * 0.08, n ? W * 0.5 : sx, n ? tY : H * 0.24, "食欲素神经元变少");
    say("d-doze", win(0.5, n ? 3 : 7.5), px, pyy - ps * 3.2, px + W * (n ? 0.1 : 0.06), H * 0.22, "又…睡着了…", "think");
    callout("d-moda", n ? win(3.2, 6) : lt > 3.5, vx, v1y - H * 0.1, n ? W * 0.62 : vx - W * 0.02, n ? tY : H * 0.2, "莫达非尼：多巴胺多留一会儿");
    callout("d-pito", n ? win(6, 9) : lt > 6.5, vx - cs * 1, v2y - cs * 3.6, n ? W * 0.5 : vx - W * 0.1, H * (n ? 0.9 : 0.7), "替洛利生：松开 H3 刹车");
    say("d-up", lt > (n ? 9 : 9), px, pyy - ps * 3.3, px + W * (n ? 0.14 : 0.1), H * (n ? 0.3 : 0.4), "醒过来啦！", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#8f84e0", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#e7a23a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.town > 0.02) townView(S.town);
    if (S.see > 0.02) seesawView(S.see);
    if (S.radio > 0.02) radioView(S.radio);
    if (S.day > 0.02) dayView(S.day);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#a8b4f0",
    titleCard: { lines: ["睡不着、醒不来", "大脑里的开关怎么了？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
