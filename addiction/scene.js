Anima.register("addiction", {
    "title": "被劫持的奖赏快递",
    "tag": "冲动、强迫与成瘾",
    "headline": "成瘾不是意志力差，是【奖赏回路】被劫持了",
    "lede": "大脑有一条送“开心信件”的多巴胺快递线。成瘾物质抄近路、把音量拧到最大，大脑只好慢慢改造自己：耐受、习惯、刹车变弱。好消息是，这些改变可以通过治疗慢慢恢复。",
    "summary": "奖赏回路、成瘾物质怎样让多巴胺暴涨、耐受、从冲动到强迫、提示线索和渴求，以及部分激动剂等治疗。",
    "chapter": "对应 Stahl《精神药理学精要》第 13 章 · 冲动、强迫与成瘾",
    "footer": "如果你或身边的人正在为成瘾困扰，可以向精神科、成瘾医学科求助；停用某些物质可能有风险，请在医生指导下进行。",
    "canvasLabel": "拟人化的多巴胺快递员在奖赏回路里送信、被成瘾物质劫持又慢慢恢复的动画",
    "regions": ["nac", "midbrain", "pfc", "striatum"],
    "parts": ["addiction"],
    "cast": ["DA", "GABA", "Glu", "drug"],
    "color": "#ffb36b"
  }, () => {
  const CH = [
    { title: "大脑的奖赏快递", map: 1, syn: 0, stri: 0, brake: 0, heal: 0,
      pill: ["路线", "腹侧被盖区 → 伏隔核"], pill2: ["多巴胺", "适度升高"],
      text: "中脑的腹侧被盖区住着一群多巴胺神经元，它们沿着一条“快递线”把多巴胺送到伏隔核。吃到好吃的、运动出一身汗、被人夸奖，多巴胺都会适度升高，伏隔核收到信就记下：“这个好，下次还想要。”这套奖赏回路帮我们学会去做对生存有益的事。",
      fact: "自然的奖赏让多巴胺适度升高，这是学习和动力的来源" },
    { title: "成瘾物质走捷径", map: 1, syn: 0, stri: 0, brake: 0, heal: 0,
      pill: ["多巴胺", "远超自然奖赏"], pill2: ["方式", "抄近路"],
      text: "成瘾物质不走正路，而是直接把音量拧到最大。可卡因堵住多巴胺的回收门；苯丙胺类让回收门反着转，把多巴胺往外送；阿片类让管着多巴胺神经元的 GABA 刹车松开；尼古丁直接叫醒多巴胺神经元；酒精则在好几个地方同时起作用。结果是多巴胺的涨幅远远超过自然奖赏。",
      fact: "起点各不相同，但成瘾物质大多会让伏隔核的多巴胺大幅升高" },
    { title: "耐受：同样的量不够了", map: 0, syn: 1, stri: 0, brake: 0, heal: 0,
      pill: ["多巴胺受体", "变少"], pill2: ["日常快乐", "变平淡"],
      text: "音量一次次被拧到最大，大脑为了保护自己，会把多巴胺受体收起来一些，反应也调小。于是同样的量不够了，需要更多才能有原来的感觉，这叫耐受。更难受的是，吃到好吃的、和朋友聊天这些日常的小快乐，也变得平淡了。",
      fact: "耐受是大脑的适应性改变，不是“意志力差”" },
    { title: "从“喜欢”到“不得不”", map: 0, syn: 0, stri: 1, brake: 0, heal: 0,
      pill: ["腹侧纹状体", "奖赏、冲动"], pill2: ["背侧纹状体", "习惯、强迫"],
      text: "一开始，使用多半是冲着“喜欢”和冲动去的，这时主要由腹侧纹状体（包括伏隔核）负责。反复使用之后，控制行为的重心会慢慢移到背侧纹状体，它管的是习惯。行为变得像传送带一样自动：不一定还觉得快乐，却停不下来，冲动慢慢变成了强迫。",
      fact: "从冲动到强迫：行为的控制重心从腹侧纹状体移向背侧纹状体" },
    { title: "刹车变弱，线索勾起渴求", map: 0, syn: 0, stri: 0, brake: 1, heal: 0,
      pill: ["前额叶刹车", "变弱"], pill2: ["提示线索", "勾起渴求"],
      text: "前额叶皮层像大脑的刹车，帮我们想清楚后果、说一句“先等等”。成瘾时，这个刹车会变弱。和使用有关的场景、人和东西叫提示线索，一出现就会让多巴胺神经元抢先兴奋，带来强烈的渴求。停用时，身体和情绪还会经历一阵戒断的难受，所以很难靠“忍一忍”就停下来。",
      fact: "提示线索引发的渴求是复发的重要原因，治疗中可以学会识别和应对" },
    { title: "可以治疗，可以恢复", map: 0, syn: 0, stri: 0, brake: 0, heal: 1,
      pill: ["治疗", "药物 + 心理 + 支持"], pill2: ["大脑回路", "可以慢慢恢复"],
      text: "成瘾是一种可以治疗的慢性大脑疾病，不是道德问题。有些药物本身是部分激动剂：阿片类成瘾可以用丁丙诺啡，戒烟可以用伐尼克兰，它们稳稳占住受体、只把门开一半，减少渴求和戒断的难受；还有纳曲酮等药物可以挡住受体。再配合心理行为治疗和家人朋友的支持，大脑的回路可以慢慢恢复。",
      fact: "药物、心理行为治疗和身边人的支持常常一起用；需要帮助时请及时就医" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    term: "#ffd6c4", soma: "#ffd3c4", dend: "#f7b9a8", axon: "#f3a996", post: "#ffe7d6", rail: "#f6e3cf",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;

  const S = { map: 1, syn: 0, stri: 0, brake: 0, heal: 0 };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const narrow = () => W / H < 1.4; // 手机竖屏：顶部两排数值胶囊，内容往下挪
  const Y = (f) => H * (narrow() ? 0.22 + 0.78 * f : f);
  const fsSmall = () => Math.max(10, H * 0.028) * Anima.UI;

  // ---------- 小工具 ----------
  function plate(t, x, y, fs, color, a) {
    if (a != null && a < 0.02) return;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#ffffff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    ctx.restore();
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 16; ctx.shadowOffsetY = 5;
    rrect(x, y, w, h, 20); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 20); ctx.stroke();
    const fs = Math.max(13, Math.min(W / 36, h * 0.075)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function neuronShape(x, y, r, seed, mood, flip) {
    ctx.save();
    ctx.lineCap = "round";
    for (let k = 0; k < 5; k++) {
      const q = (flip ? -Math.PI * 0.45 : Math.PI * 0.55) + k * 0.45 + rnd(seed + k) * 0.2;
      const x1 = x + Math.cos(q) * r * 2, y1 = y + Math.sin(q) * r * 1.8;
      for (const [w, col] of [[r * 0.3, C.line], [r * 0.19, C.dend]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + Math.cos(q + 0.3) * r * 1.2, y + Math.sin(q + 0.3) * r * 1.2, x1, y1);
        ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(q - 0.6) * r * 0.6, y1 + Math.sin(q - 0.6) * r * 0.6);
        ctx.moveTo(x1, y1); ctx.lineTo(x1 + Math.cos(q + 0.6) * r * 0.6, y1 + Math.sin(q + 0.6) * r * 0.6);
        ctx.stroke();
      }
    }
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
    g.addColorStop(0, "#fff0ea"); g.addColorStop(1, C.soma);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.5, r * 0.05)); ctx.stroke();
    face(x, y + r * 0.15, r * 0.5, mood);
    ctx.restore();
  }
  // 竖着的“多巴胺音量”表：level 0～1（超过 1 就爆表），mark 是自然奖赏的刻度
  function meter(x, y0, y1, w, level, mark, title) {
    const shake = level > 1 ? Math.sin(time * 40) * w * 0.12 : 0;
    x += shake;
    const h = y1 - y0;
    ctx.save();
    rrect(x - w / 2, y0, w, h, w / 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); rrect(x - w / 2, y0, w, h, w / 2); ctx.clip();
    const lv = clamp(level, 0, 1), fy = y1 - h * lv;
    const g = ctx.createLinearGradient(0, y1, 0, y0);
    g.addColorStop(0, "#ffe08a"); g.addColorStop(0.5, "#ffb36b"); g.addColorStop(1, "#ff7a8a");
    ctx.fillStyle = g; ctx.fillRect(x - w / 2, fy, w, y1 - fy);
    ctx.fillStyle = "rgba(255,255,255,0.45)"; ctx.fillRect(x - w * 0.3, y0, w * 0.14, h);
    ctx.restore();
    if (mark != null) {
      const my = y1 - h * mark;
      ctx.save(); ctx.setLineDash([4, 3]); ctx.strokeStyle = C.mintDeep; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x - w * 0.9, my); ctx.lineTo(x + w * 0.9, my); ctx.stroke(); ctx.restore();
    }
    ctx.restore();
    if (level > 1) { glow(x, y0, w * 3, C.coral, 0.8); sfx("爆表！", x - w * 1.6, y0 + w * 1.2, Math.max(14, H * 0.045), C.bad, -0.2, 1); }
    const tfs = fsSmall() * 0.95;
    ctx.font = `${tfs}px ${Anima.ROUND}`;
    const tx = Math.min(x, W - ctx.measureText(title).width / 2 - 6);
    text(title, tx, y0 - tfs * 1.1, tfs, C.soft);
  }
  // 自然奖赏的小徽章：蛋糕、跑鞋、小红花
  function reward(kind, x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.6 + 0.4 * ease(a);
    ctx.translate(x, y); ctx.scale(pop, pop);
    glow(0, 0, r * 1.8, C.gold, 0.8);
    ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fillStyle = "#fffdf5"; ctx.fill(); outline(2); ctx.stroke();
    if (kind === "cake") {
      ctx.beginPath(); ctx.moveTo(-r * 0.55, r * 0.35); ctx.lineTo(r * 0.55, r * 0.35); ctx.lineTo(r * 0.45, -r * 0.2); ctx.lineTo(-r * 0.55, -r * 0.05); ctx.closePath();
      ctx.fillStyle = "#ffe7c4"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.fillStyle = "#ffd1dc"; ctx.fillRect(-r * 0.52, r * 0.05, r * 1.02, r * 0.1);
      ctx.beginPath(); ctx.arc(r * 0.05, -r * 0.3, r * 0.17, 0, Math.PI * 2); ctx.fillStyle = C.coral; ctx.fill(); outline(1.2); ctx.stroke();
    } else if (kind === "shoe") {
      ctx.beginPath(); ctx.moveTo(-r * 0.6, r * 0.25); ctx.lineTo(-r * 0.55, -r * 0.3); ctx.lineTo(-r * 0.15, -r * 0.3); ctx.quadraticCurveTo(0, 0, r * 0.35, -r * 0.02); ctx.quadraticCurveTo(r * 0.65, r * 0.05, r * 0.62, r * 0.25); ctx.closePath();
      ctx.fillStyle = C.sky; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.fillStyle = "#ffffff"; ctx.fillRect(-r * 0.6, r * 0.2, r * 1.22, r * 0.12);
      ctx.strokeStyle = C.line; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(-r * 0.3, -r * 0.2); ctx.lineTo(-r * 0.1, -r * 0.05); ctx.stroke();
    } else {
      for (let i = 0; i < 6; i++) { const q = i / 6 * Math.PI * 2 + time; ctx.beginPath(); ctx.arc(Math.cos(q) * r * 0.32, Math.sin(q) * r * 0.32 - r * 0.05, r * 0.22, 0, Math.PI * 2); ctx.fillStyle = "#ff9fb3"; ctx.fill(); }
      ctx.beginPath(); ctx.arc(0, -r * 0.05, r * 0.2, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); outline(1.2); ctx.stroke();
      text("棒", 0, r * 0.52, r * 0.34, C.ink);
    }
    ctx.restore();
  }
  function drugVisitor(x, y, s, name, color, opt, tagA) {
    chara(x, y, s, Object.assign({ who: "drug", label: "", hatColor: color, hatColor2: "#ffffff" }, opt));
    plate(name, x, y + s * 0.75, fsSmall(), mix(color, "#ffffff", 0.6), tagA == null ? (opt.alpha == null ? 1 : opt.alpha) : tagA);
  }

  // ---------- 第 1、2 幕：奖赏快递线 ----------
  function mapGeo() {
    const nw = narrow();
    const r = Math.min(H * 0.065, W * 0.05);
    const V = { x: W * 0.15, y: Y(0.62) };
    const T = { x: W * (nw ? 0.52 : 0.56), y: Y(0.34) };
    const N = { x: W * (nw ? 0.74 : 0.76), y: Y(0.6) };
    const sx = V.x + r * 0.9, sy = V.y - r * 0.4, ex = T.x - r * 0.7, ey = T.y + r * 0.2;
    const mx = (sx + ex) / 2 - W * 0.05, my = Math.min(sy, ey) - H * 0.08;
    const pt = (t) => ({ x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * mx + t * t * ex, y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * my + t * t * ey });
    return { r, V, T, N, sx, sy, ex, ey, mx, my, pt, mX: W * 0.94, m0: Y(0.26), m1: Y(0.9) };
  }
  function mapView(a) {
    const here1 = cur === 0, here2 = cur === 1;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ee", "#fdeef3");
    Anima.bokeh(8, "#ffe0b8", 0.8, 21);
    Anima.petals(8, 0.5, 12);
    const g = mapGeo(), r = g.r;
    const drug = cur === 1;
    // 铁路：多巴胺神经元的轴突
    for (const [w, col] of [[r * 0.5, C.line], [r * 0.42, C.rail]]) {
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(g.sx, g.sy); ctx.quadraticCurveTo(g.mx, g.my, g.ex, g.ey); ctx.stroke();
    }
    ctx.save(); ctx.setLineDash([r * 0.12, r * 0.2]); ctx.strokeStyle = alpha(C.line, 0.45); ctx.lineWidth = r * 0.28;
    ctx.beginPath(); ctx.moveTo(g.sx, g.sy); ctx.quadraticCurveTo(g.mx, g.my, g.ex, g.ey); ctx.stroke(); ctx.restore();
    // 伏隔核：收件的神经元
    const flood = drug ? prog(8, 1.5) : 0;
    neuronShape(g.N.x, g.N.y, r * 1.2, 7, drug ? lerp(0.8, 1, flood) : 1, true);
    if (flood > 0.3) { Anima.speedLines(g.N.x, g.N.y, r * 2.4, 30, flood * 0.35); emote("sparkle", g.N.x + r, g.N.y - r * 1.4, r * 0.6, flood); }
    plate("伏隔核", g.N.x, g.N.y + r * 2.3, fsSmall(), "#ffe7d6");
    // 腹侧被盖区：多巴胺神经元
    const nic = drug ? prog(0.6, 1.2) : 0;
    neuronShape(g.V.x, g.V.y, r, 3, nic > 0.5 ? 1 : 0.6);
    if (nic > 0.8) { emote("!", g.V.x + r * 0.2, g.V.y - r * 1.5, r * 0.6); glow(g.V.x, g.V.y, r * 2, C.gold, 0.6 + 0.3 * Math.sin(time * 8)); }
    plate("腹侧被盖区", g.V.x + r * 0.3, g.V.y + r * 2.5, fsSmall(), "#fff1b8");
    // 末梢和回收门
    ctx.beginPath(); ctx.arc(g.T.x, g.T.y, r * 0.75, 0, Math.PI * 2); ctx.fillStyle = C.term; ctx.fill(); outline(2); ctx.stroke();
    const coke = drug && lt > 4.2 && lt < 7.2, amph = drug && lt >= 7.2;
    const dx = g.T.x + r * 0.55, dy = g.T.y + r * 0.75;
    Anima.transporter(dx, dy, r * 0.55, "#9fc3ea", amph ? -time * 5 : (coke ? 0 : time * 1.5), coke);
    if (amph) for (let k = 0; k < 3; k++) { const t = (time * 1.2 + k / 3) % 1; ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI); chara(dx + t * r * 0.8, dy + r * 0.5 + t * r * 0.9, r * 0.2, { who: "DA", shadow: false }); ctx.restore(); }
    // GABA 刹车：站在多巴胺神经元旁边
    const opi = drug ? prog(2.2, 1) : 0;
    const gx = g.V.x + r * 3.8, gy = g.V.y + r * 1.9, gs = H * 0.038;
    const lever = lerp(-0.2, 0.9, opi); // 拉杆：0 拉紧，放下就是刹车松了
    ctx.save(); ctx.translate(gx + gs * 1.4, gy); ctx.rotate(lever);
    ctx.strokeStyle = C.line; ctx.lineWidth = gs * 0.22; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -gs * 2.2); ctx.stroke();
    ctx.strokeStyle = "#c9c1d6"; ctx.lineWidth = gs * 0.12; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -gs * 2.2, gs * 0.35, 0, Math.PI * 2); ctx.fillStyle = C.coral; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.restore();
    rrect(gx + gs * 0.9, gy - gs * 0.2, gs, gs * 0.3, 3); ctx.fillStyle = "#cfc6d4"; ctx.fill(); outline(1.2); ctx.stroke();
    chara(gx, gy, gs, { who: "GABA", arms: opi > 0.5 ? "down" : "point", eyes: opi > 0.5 ? "sleepy" : "open", mouth: opi > 0.5 ? "o" : "flat", dir: 1 });
    if (opi > 0.5) emote("zzz", gx - gs * 0.8, gy - gs * 3.3, gs * 0.7);
    // 多巴胺快递员
    const ev = [1.5, 5.5, 9.5];
    let burst = 0;
    if (!drug) ev.forEach((t0) => { if (lt > t0 && lt < t0 + 3) burst = Math.max(burst, Math.sin((lt - t0) / 3 * Math.PI)); });
    const n = drug ? lerp(3, 12, prog(3, 6)) : 3 + burst * 3;
    const sp = drug ? lerp(0.07, 0.16, prog(3, 6)) : 0.07;
    const cs = Math.min(H * 0.032, W * 0.026);
    for (let i = 0; i < 12; i++) {
      if (i >= Math.ceil(n)) break;
      const fa = clamp(n - i, 0, 1);
      const t = (time * sp + i / Math.max(4, Math.ceil(n)) + rnd(i) * 0.05) % 1;
      let x, y, walk = time * 10 + i;
      if (t < 0.8) { const q = g.pt(t / 0.8); x = q.x; y = q.y + cs * 0.3; }
      else { const k = (t - 0.8) / 0.2; x = lerp(g.T.x + r * 0.2, g.N.x - r * 0.9, k); y = lerp(g.T.y + r * 0.9, g.N.y - r * 0.2, k) - Math.sin(k * Math.PI) * H * 0.06; walk = null; }
      chara(x, y, cs, { who: "DA", walk, item: "letter", arms: "hold", eyes: drug && flood > 0.3 ? "dizzy" : (i % 2 ? "happy" : "open"), mouth: drug ? "open" : "smile", alpha: fa, seed: i, shadow: false });
    }
    // 第 1 幕：三种自然奖赏
    if (!drug) {
      const kinds = ["cake", "shoe", "flower"];
      ev.forEach((t0, k) => reward(kinds[k], g.V.x + r * 0.2, g.V.y - r * 2.6, r * 0.75, lt > t0 - 0.3 && lt < t0 + 3.2 ? Math.min(1, (lt - t0 + 0.3) * 3, (t0 + 3.2 - lt) * 3) : 0));
      if (burst > 0.4) emote("heart", g.N.x + r * 0.9, g.N.y - r * 1.8, r * 0.6, burst);
    }
    // 第 2 幕：成瘾物质访客
    const vs = Math.min(H * 0.036, W * 0.028);
    if (drug) {
      const walkIn = (t0) => prog(t0, 0.9);
      const p1 = walkIn(0.3);
      if (p1 > 0) drugVisitor(lerp(-vs * 3, g.V.x - r * 1.6, p1), g.V.y + r * 0.9, vs, "尼古丁", "#b9c4cf", { arms: nic > 0.8 ? "point" : "wave", eyes: "happy", mouth: "grin", walk: p1 < 1 ? time * 9 : null, dir: 1, alpha: p1 }, p1);
      const p2 = walkIn(1.6);
      if (p2 > 0) drugVisitor(lerp(-vs * 3, gx - gs * 1.6, p2), gy, vs, "阿片类", "#c9b6f0", { arms: opi > 0.5 ? "shh" : "wave", eyes: "happy", mouth: "cat", walk: p2 < 1 ? time * 9 : null, dir: 1, alpha: p2 }, p2);
      const p3 = walkIn(3.6), out3 = prog(6.8, 0.6);
      if (p3 > 0 && out3 < 1) drugVisitor(dx + r * 1.2 + (1 - p3) * W * 0.2, dy + r * 0.9, vs, "可卡因", "#ffffff", { hatColor2: "#e8e8ee", arms: "fist", eyes: "angry", mouth: "grin", walk: p3 < 1 ? time * 9 : null, dir: -1, alpha: p3 * (1 - out3) }, p3 * (1 - out3));
      const p4 = walkIn(7);
      if (p4 > 0) drugVisitor(dx + r * 1.2 + (1 - p4) * W * 0.2, dy + r * 0.9, vs, "苯丙胺类", "#ffc2a8", { arms: "point", eyes: "sparkle", mouth: "grin", walk: p4 < 1 ? time * 9 : null, dir: -1, alpha: p4 }, p4);
      const p5 = prog(9, 1);
      if (p5 > 0) {
        const ax = lerp(W * 0.3, W * 0.4, p5) + Math.sin(time * 1.5) * W * 0.02;
        drugVisitor(ax, Y(0.9), vs, "酒精", "#c8ecd8", { arms: "wave", eyes: "dizzy", mouth: "wavy", walk: time * 6, dir: 1, alpha: p5 }, p5);
      }
    }
    // 多巴胺音量表
    let level = 0.12;
    if (!drug) level = 0.12 + burst * 0.24;
    else level = lerp(0.12, 1.15, prog(2, 7));
    meter(g.mX, g.m0, g.m1, Math.max(12, W * 0.024), level, 0.38, "多巴胺音量");
    if (!drug || lt < 4) text("自然奖赏", g.mX - Math.max(12, W * 0.024) * 1.1, g.m1 - (g.m1 - g.m0) * 0.38, fsSmall() * 0.9, C.mintDeep, "right");
    if (drug && flood > 0.3) sfx("哗——！", g.N.x - r * 0.4, g.N.y - r * 2.4, Math.max(16, H * 0.06), "#ff9a52", -0.12, flood);
    // 标注和对话
    callout("a-vta", here1 && lt > 0.5 && lt < 7, g.V.x + r * 0.7, g.V.y - r * 0.5, g.V.x + W * 0.18, Y(0.2), "多巴胺神经元的家");
    callout("a-nac", here1 && lt > 2 && lt < 7, g.N.x - r * 0.5, g.N.y + r * 0.8, g.N.x - W * 0.18, Y(0.93), "伏隔核：收到“开心信件”");
    say("a-like", here1 && lt > 7.2, g.N.x, g.N.y - r * 1.4, g.N.x - W * (narrow() ? 0.24 : 0.12), Y(0.2), "这个好，下次还想要！", "say");
    callout("a-brake", here2 && lt > 2.8 && lt < 7, gx + gs * 1.4, gy - gs * 1.5, g.V.x + W * 0.24, Y(0.93), "GABA 刹车被松开了");
    callout("a-coke", here2 && lt > 4.4 && lt < 7, dx, dy, g.T.x + W * 0.02, Y(0.14), "回收门被堵住");
    callout("a-amph", here2 && lt > 7.5 && lt < 10.5, dx, dy, g.T.x + W * 0.02, Y(0.14), "回收门反着转，往外送");
    say("a-much", here2 && lt > 10.5, g.N.x, g.N.y - r * 1.4, g.N.x - W * 0.02, Y(0.3), "太、太多啦！", "shout");
    ctx.restore();
  }

  // ---------- 第 3 幕：耐受 ----------
  function synView(a) {
    const here = cur === 2;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.9, 90);
    const cx = W * 0.42, tw = Math.min(W * 0.58, H * 1.05), th = H * 0.34, post = H * 0.76;
    const rs = H * 0.05, cs = H * 0.04;
    const recX = [-0.36, -0.12, 0.12, 0.36].map((f) => cx + tw * f);
    const sink = [prog(3.5, 1.5), 0, prog(5, 1.5), 0]; // 第 1、3 个受体被收起来
    const resp = lerp(1, 0.4, prog(3.5, 3));
    const phase2 = lt > 8; // 日常小快乐
    Anima.postMembrane(post, C.post, {});
    recX.forEach((x, i) => {
      if (sink[i] >= 0.99) return;
      ctx.save(); ctx.globalAlpha *= 1 - sink[i];
      ctx.beginPath(); ctx.rect(0, 0, W, post + 2); ctx.clip();
      const actv = phase2 ? 0.25 : (lt > 1.2 ? 0.9 : 0);
      Anima.receptor(x, post + sink[i] * rs * 1.8, rs, "#ffc98f", actv, { label: i === 1 ? "多巴胺受体" : null });
      ctx.restore();
      if (sink[i] > 0.05 && sink[i] < 0.8) sfx("咻", x + rs, post - rs * 1.8, H * 0.04, C.skyDeep, -0.1, 1 - sink[i]);
    });
    Anima.terminal(cx, 0, tw, th, C.term);
    // 多巴胺快递员：第一段是一大群（被成瘾物质放大），第二段只有一两位（自然的小快乐）
    const siteY = post - rs * 1.62;
    const nDA = phase2 ? 2 : 6;
    for (let i = 0; i < nDA; i++) {
      const t0 = phase2 ? 8.6 + i * 0.4 : 0.2 + i * 0.12;
      const p = prog(t0, 1.2);
      if (p <= 0) continue;
      const hasRec = !phase2 ? (i < 4 ? sink[i] < 0.5 : false) : true;
      const tx = phase2 ? recX[i === 0 ? 1 : 3] : (i < 4 ? recX[i] : recX[i - 4] + tw * 0.12);
      const ty = hasRec && (i < 4 || phase2) ? siteY : post - H * 0.01;
      const fx = cx + (i - nDA / 2) * tw * 0.08, fy = th + cs * 3.2;
      const x = lerp(fx, tx, p), y = lerp(fy, ty, p) - Math.sin(p * Math.PI) * H * 0.04;
      const lost = !phase2 && (i >= 4 || !hasRec) && p >= 1;
      chara(x, y, cs, { who: "DA", walk: p < 1 ? time * 10 : null, item: p < 1 ? "letter" : null, arms: p < 1 ? "hold" : (lost ? "down" : (phase2 ? "wave" : "up")), eyes: lost ? "open" : "happy", mouth: lost ? "wavy" : "smile", seed: i, alpha: clamp(p * 4, 0, 1) });
      if (lost && i === 4) emote("?", x + cs, y - cs * 3.3, cs * 0.6);
    }
    // 小蛋糕：日常的小快乐
    const cake = prog(8, 0.8);
    const kx = W * 0.82, ky = Y(0.3);
    reward("cake", kx, ky, H * 0.05, cake);
    if (cake > 0.5) { ctx.save(); ctx.globalAlpha *= 0.5 * cake; ctx.beginPath(); ctx.arc(kx, ky, H * 0.05, 0, Math.PI * 2); ctx.fillStyle = "#d9d4de"; ctx.fill(); ctx.restore(); }
    // 突触后的小居民和“开心音量”
    const rx = W * 0.8, ry = H * 0.97;
    const flat = lt > 5;
    chara(rx, ry, cs * 1.05, { who: "neuron", eyes: flat ? "sleepy" : "sparkle", mouth: flat ? "flat" : "grin", arms: flat ? "down" : "up", dir: -1 });
    if (flat) emote("gloom", rx, ry - cs * 3.4, cs * 0.6);
    const lv = phase2 ? 0.12 * resp + 0.03 : (lt > 1.2 ? resp * 0.9 : 0.1);
    meter(W * 0.95, Y(0.26), Y(0.88), Math.max(12, W * 0.024), lv, 0.38, "开心音量");
    callout("a-sink", here && lt > 4 && lt < 8.5, recX[0], post - rs * 0.4, recX[0] + W * 0.02, post + H * 0.1, "受体收起来了，反应调小");
    callout("a-cake", here && lt > 8.6, kx - H * 0.05, ky + H * 0.03, kx - W * 0.1, Y(0.46), "小快乐也变淡了");
    say("a-more", here && lt > 5.5 && lt < 8.5, rx, ry - cs * 3.3, rx - W * 0.12, post - H * 0.12, "同样的量，不够了……", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：腹侧 → 背侧 ----------
  function striView(a) {
    const here = cur === 3;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf7ff", "#fff1ec");
    Anima.bokeh(6, "#e3dbff", 0.8, 50);
    const nw = narrow();
    const x0 = W * 0.05, x1 = W * (nw ? 0.95 : 0.9), cs = H * 0.042;
    const D = { y: Y(0.2), h: Y(0.56) - Y(0.2) }, V = { y: Y(0.62), h: Y(0.97) - Y(0.62) };
    const shift = prog(2, 7);
    // 两个区域
    const zone = (z, col, title, lit) => {
      if (lit > 0.05) glow((x0 + x1) / 2, z.y + z.h / 2, (x1 - x0) * 0.45, C.gold, lit * 0.8);
      rrect(x0, z.y, x1 - x0, z.h, 22); ctx.fillStyle = alpha(col, 0.55); ctx.fill(); outline(2); ctx.stroke();
      plate(title, x0 + (x1 - x0) * 0.2, z.y, fsSmall() * 1.1, "#ffffff");
    };
    zone(D, "#ddd5fa", "背侧纹状体：习惯", shift);
    zone(V, "#ffd9c2", "腹侧纹状体：奖赏、冲动", 1 - shift);
    // 背侧：传送带
    const bx0 = x0 + (x1 - x0) * 0.3, bx1 = x1 - (x1 - x0) * 0.08, by = D.y + D.h * 0.78, bh = D.h * 0.16;
    rrect(bx0, by, bx1 - bx0, bh, bh / 2); ctx.fillStyle = "#cfc6d4"; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); rrect(bx0, by, bx1 - bx0, bh, bh / 2); ctx.clip();
    ctx.strokeStyle = alpha(C.line, 0.5); ctx.lineWidth = 2;
    const off = (time * 60 * (0.3 + shift)) % (bh * 1.4);
    for (let x = bx0 - bh * 1.4 + off; x < bx1; x += bh * 1.4) { ctx.beginPath(); ctx.moveTo(x, by); ctx.lineTo(x + bh * 0.6, by + bh); ctx.stroke(); }
    ctx.restore();
    for (const ex of [bx0 + bh / 2, bx1 - bh / 2]) { ctx.beginPath(); ctx.arc(ex, by + bh / 2, bh * 0.36, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.4); ctx.stroke(); }
    // 传送带上的快递员：一圈一圈自动走
    const loop = ((time * 0.08 * (0.4 + shift)) % 1);
    const walkerX = lerp(bx0 + bh, bx1 - bh, loop);
    const auto = shift > 0.5;
    chara(walkerX, by + bh * 0.1, cs, { who: "DA", walk: time * 7, eyes: auto ? "sleepy" : "open", mouth: auto ? "flat" : "smile", arms: "down", alpha: 0.4 + shift * 0.6 });
    if (auto) emote("sweat", walkerX + cs, by - cs * 3, cs * 0.5);
    // 腹侧：追着爱心跑的快递员，慢慢没了劲
    const vx = x0 + (x1 - x0) * (0.42 + Math.sin(time * 0.9) * 0.08), vy = V.y + V.h * 0.88;
    chara(vx, vy, cs, { who: "DA", walk: time * 9 * (1 - shift * 0.7), eyes: shift < 0.5 ? "sparkle" : "open", mouth: shift < 0.5 ? "grin" : "flat", arms: shift < 0.5 ? "up" : "down", gray: shift > 0.5 ? shift * 0.6 : false });
    const hx = vx + cs * 2.4, hy = vy - cs * 2.2;
    Anima.heart(hx, hy + Math.sin(time * 4) * 3, cs * 0.6 * (1 - shift * 0.5), mix(C.rose, "#d9d4de", shift));
    // 主导权：一面小旗从腹侧挪到背侧
    const fx = x0 + (x1 - x0) * 0.13;
    const fy = lerp(V.y + V.h * 0.75, D.y + D.h * 0.75, shift);
    ctx.save();
    ctx.setLineDash([5, 5]); ctx.strokeStyle = alpha(C.line, 0.5); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(fx + cs * 1.4, V.y + V.h * 0.4); ctx.quadraticCurveTo(fx + cs * 3.2, (V.y + D.y + D.h) / 2, fx + cs * 1.4, D.y + D.h * 0.6); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = alpha(C.line, 0.6); ctx.beginPath(); const ax = fx + cs * 1.4, ay = D.y + D.h * 0.6; ctx.moveTo(ax, ay - 6); ctx.lineTo(ax - 6, ay + 5); ctx.lineTo(ax + 6, ay + 5); ctx.closePath(); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = C.line; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(fx, fy - cs * 2.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(fx, fy - cs * 2.6); ctx.quadraticCurveTo(fx + cs * 0.9, fy - cs * 2.4 + Math.sin(time * 6) * 2, fx + cs * 1.7, fy - cs * 2.1); ctx.lineTo(fx, fy - cs * 1.6); ctx.closePath();
    ctx.fillStyle = C.gold; ctx.fill(); outline(1.5); ctx.stroke();
    if (shift > 0.05 && shift < 0.95) sparkles(fx, fy - cs * 2, cs * 1.5, 3, 1, 4);
    callout("a-flag", here && lt > 1 && lt < 9, fx + cs * 0.9, fy - cs * 2.2, x0 + (x1 - x0) * 0.62, V.y + V.h * 0.3, "行为的“指挥权”慢慢往上移");
    say("a-stop", here && lt > 9, walkerX, by - cs * 3.2, (bx0 + bx1) / 2 + W * 0.08, D.y + D.h * 0.32, "不是想要……是停不下来", "think");
    ctx.restore();
  }

  // ---------- 第 5 幕：刹车和提示线索 ----------
  function brakeView(a) {
    const here = cur === 4;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5f9ff", "#fff0ea");
    Anima.bokeh(6, "#d7efff", 0.8, 31);
    const cs = H * 0.045, roadY = Y(0.86);
    // 路
    ctx.fillStyle = "#f3e2cf"; ctx.fillRect(0, roadY - H * 0.02, W, H * 0.07);
    outline(2); ctx.beginPath(); ctx.moveTo(0, roadY - H * 0.02); ctx.lineTo(W, roadY - H * 0.02); ctx.moveTo(0, roadY + H * 0.05); ctx.lineTo(W, roadY + H * 0.05); ctx.stroke();
    // 前额叶小平台和刹车力
    const px = W * 0.13, py = Y(0.5);
    rrect(px - W * 0.09, py, W * 0.18, H * 0.05, 8); ctx.fillStyle = "#e4dbf2"; ctx.fill(); outline(2); ctx.stroke();
    const brk = lerp(0.85, 0.3, prog(0.8, 3));
    chara(px, py, cs * 1.1, { who: "neuron", hair: "#8f7ac0", cloth: "#e4e0ff", eye: "#5c52c4", glasses: true, arms: "fist", eyes: brk < 0.5 ? "teary" : "open", mouth: brk < 0.5 ? "wavy" : "flat", brow: "worry", dir: 1 });
    plate("前额叶", px, py + H * 0.08, fsSmall(), "#e4e0ff");
    // 刹车力条
    const bw = W * 0.14, bx = px - bw / 2, by2 = py + H * 0.14;
    rrect(bx, by2, bw, H * 0.03, H * 0.015); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    rrect(bx, by2, bw * brk, H * 0.03, H * 0.015); ctx.fillStyle = mix(C.mintDeep, C.coral, 1 - brk); ctx.fill();
    text("刹车力", px, by2 + H * 0.055, fsSmall() * 0.9, C.soft);
    // 小车：载着多巴胺快递员，被线索一次次往前拽
    const cues = [2.6, 5, 7.4];
    let pull = 0, jolt = 0;
    cues.forEach((t0) => { pull += prog(t0, 0.8); if (lt > t0 && lt < t0 + 0.8) jolt = 1; });
    const cx = W * (0.34 + pull * 0.1) + Math.sin(time * 30) * jolt * 2, cy = roadY + H * 0.01;
    const cw = H * 0.16, chh = H * 0.07;
    // 绳子：前额叶拽着小车
    ctx.strokeStyle = "#b07a4a"; ctx.lineWidth = 2.2;
    ctx.beginPath(); ctx.moveTo(px + cs * 0.8, py - cs * 1.4); ctx.quadraticCurveTo((px + cx) / 2, lerp(py + H * 0.02, py + H * 0.12, 1 - brk), cx - cw / 2, cy - chh * 0.6); ctx.stroke();
    chara(cx, cy - chh * 0.55, cs, { who: "DA", eyes: lt > 10 ? "teary" : (jolt || lt > 2.6 ? "sparkle" : "open"), mouth: lt > 10 ? "sad" : "open", arms: lt > 10 ? "hug" : "point", dir: 1, brow: lt > 10 ? "worry" : null });
    rrect(cx - cw / 2, cy - chh, cw, chh, 8); ctx.fillStyle = "#ffd27a"; ctx.fill(); outline(2); ctx.stroke();
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(cx + d * cw * 0.3, cy + H * 0.005, chh * 0.25, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.8); ctx.stroke(); }
    if (jolt) { Anima.speedLines(cx, cy - chh, H * 0.2, 22, 0.3); emote("!", cx + cs, cy - chh - cs * 3.4, cs * 0.7); }
    if (lt > 10) { emote("sweat", cx + cs * 1.1, cy - chh - cs * 3, cs * 0.6); emote("gloom", cx - cs * 0.2, cy - chh - cs * 3.6, cs * 0.6); }
    // 提示线索：路边一个接一个冒出来
    const cueX = [0.62, 0.76, 0.9].map((f) => W * f);
    const cueY = Y(narrow() ? 0.34 : 0.42);
    const names = ["熟悉的地方", "某些人", "某些东西"];
    cues.forEach((t0, k) => {
      const p = prog(t0 - 0.4, 0.6);
      if (p <= 0) return;
      const x = cueX[k], y = cueY + (k % 2) * H * 0.12;
      ctx.save(); ctx.globalAlpha *= p;
      glow(x, y, H * 0.1, C.coral, 0.4 + 0.3 * Math.sin(time * 5 + k));
      ctx.restore();
      if (k === 0) { // 路牌
        ctx.save(); ctx.globalAlpha *= p;
        ctx.strokeStyle = C.line; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, y + H * 0.08); ctx.lineTo(x, y - H * 0.04); ctx.stroke();
        rrect(x - H * 0.06, y - H * 0.07, H * 0.12, H * 0.05, 6); ctx.fillStyle = "#bfe3f5"; ctx.fill(); outline(1.6); ctx.stroke();
        ctx.restore();
      } else if (k === 1) {
        chara(x, y + H * 0.08, cs * 0.9, { who: "neuron", gray: 0.7, eyes: "closed", mouth: "smile", arms: "wave", alpha: p * 0.85 });
      } else {
        ctx.save(); ctx.globalAlpha *= p;
        rrect(x - H * 0.03, y - H * 0.03, H * 0.06, H * 0.09, 6); ctx.fillStyle = "#ffe1ee"; ctx.fill(); outline(1.6); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(x, y - H * 0.03, H * 0.03, H * 0.01, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
        ctx.restore();
      }
      plate(names[k], x, y + H * 0.12, fsSmall(), "#ffffff", p);
    });
    callout("a-pfc", here && lt > 1 && lt < 6, px + W * 0.05, py - cs * 1.5, px + W * 0.16, Y(0.22), "前额叶：大脑的刹车变弱了");
    callout("a-cue", here && lt > 3 && lt < 10, cueX[0] - H * 0.05, cueY, cueX[0] - W * 0.08, Y(0.2), "提示线索：场景、人、物");
    callout("a-wd", here && lt > 10.3, cx - cs * 0.3, cy - chh - cs * 2.4, cx + W * 0.1, Y(0.25), "戒断：身体和情绪都很难受");
    say("a-crave", here && lt > 5.4 && lt < 10, cx, cy - chh - cs * 3.2, narrow() ? W * 0.3 : cx - W * 0.12, narrow() ? Y(0.04) : Y(0.64), "一看到它，就好想……", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：治疗和恢复 ----------
  function sprout(x, y, s, p) {
    if (p < 0.02) return;
    ctx.save();
    ctx.strokeStyle = "#6cbf7a"; ctx.lineWidth = Math.max(2, s * 0.15); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - s * 1.4 * p); ctx.stroke();
    for (const d of [-1, 1]) {
      ctx.save(); ctx.translate(x, y - s * 1.3 * p); ctx.rotate(d * 0.7 + Math.sin(time * 2 + x) * 0.1);
      ctx.beginPath(); ctx.ellipse(d * s * 0.4 * p, 0, s * 0.45 * p, s * 0.22 * p, 0, 0, Math.PI * 2); ctx.fillStyle = "#9fe0a8"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
  }
  function healView(a) {
    const here = cur === 5;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbfff5", "#fff1f4");
    Anima.petals(12, 0.6, 50);
    Anima.bokeh(6, "#d6f5dc", 0.8, 8);
    const nw = narrow();
    const top = nw ? H * 0.36 : H * 0.21, ch = H * 0.95 - top, gap = W * 0.025, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "药物帮一把", "#ffe7d6");
    card(R.x, R.y, R.w, R.h, "身边人帮一把", "#e1f5ec");
    const cs = Math.min(H * 0.042, cw * 0.07);
    // 左：受体上稳稳坐着的部分激动剂
    const my = L.y + L.h * 0.7;
    ctx.save(); rrect(L.x, L.y, L.w, L.h, 20); ctx.clip();
    ctx.fillStyle = "#ffe8ef"; ctx.fillRect(L.x, my, L.w, L.h);
    ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(L.x, my); ctx.lineTo(L.x + L.w, my); ctx.stroke();
    const rs = Math.min(H * 0.05, cw * 0.08);
    const RX = [L.x + L.w * 0.3, L.x + L.w * 0.72];
    const names = [["丁丙诺啡", "阿片受体", "#c9b6f0"], ["伐尼克兰", "尼古丁受体", "#b9c4cf"]];
    RX.forEach((x, i) => {
      const p = prog(1 + i * 1.5, 1.2);
      const R0 = Anima.receptor(x, my, rs, "#ffc98f", p * (0.5 + Math.sin(time * 1.5 + i) * 0.03), {});
      plate(names[i][1], x, my + H * 0.05, fsSmall(), "#ffffff");
      if (p > 0) {
        const sx = lerp(x + (i ? 1 : -1) * L.w * 0.18, R0.site.x, p), sy = lerp(my - H * 0.03, R0.site.y, p) - Math.sin(p * Math.PI) * H * 0.04;
        drugVisitor(sx, sy, cs, names[i][0], names[i][2], { arms: p >= 1 ? "hug" : "wave", eyes: "happy", mouth: "cat", walk: p < 1 ? time * 9 : null, dir: i ? -1 : 1 }, 1);
        // 头顶上一个“半开”的小刻度
      }
    });
    // 渴求的乌云：慢慢变小
    const calm = prog(3, 5);
    const clX = L.x + L.w * 0.5, clY = L.y + L.h * 0.2;
    if (calm < 0.98) {
      ctx.save(); ctx.globalAlpha *= 1 - calm;
      ctx.fillStyle = "#cfc6d4";
      for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(clX + (k - 1.5) * rs * 0.9, clY + (k % 2) * rs * 0.2, rs * (0.7 - calm * 0.4), 0, Math.PI * 2); ctx.fill(); }
      text("渴求", clX, clY + rs * 0.1, fsSmall(), C.ink);
      ctx.restore();
    }
    if (calm > 0.5) sparkles(clX, clY, rs * 1.6, 4, calm, 3);
    // 右：多巴胺快递员被家人、朋友和治疗师围着
    const fy = R.y + R.h * 0.88, cx = R.x + R.w * 0.5;
    const grow = prog(2, 8);
    for (let k = 0; k < 5; k++) sprout(R.x + R.w * (0.1 + k * 0.2), R.y + R.h * 0.97, H * 0.035, clamp(grow * 1.4 - k * 0.1, 0, 1));
    const tIn = prog(1, 1.4), fIn = prog(4.5, 1.4);
    chara(cx, fy, cs * 1.1, { who: "DA", arms: fIn >= 1 ? "hug" : "down", eyes: lt > 5 ? "happy" : "open", mouth: lt > 5 ? "grin" : "smile" });
    chara(lerp(R.x - cs, cx - cs * 2.8, tIn), fy, cs, { who: "GABA", item: "book", arms: "hold", eyes: "happy", mouth: "smile", walk: tIn < 1 ? time * 9 : null, dir: 1 });
    plate(nw ? "心理治疗" : "心理行为治疗", cx - cs * 2.8, fy + cs * 0.8, fsSmall(), "#e4e0ff", tIn);
    if (fIn > 0) {
      chara(lerp(R.x + R.w + cs, cx + cs * 2.6, fIn), fy, cs, { who: "neuron", cloth: "#ffd3dc", style: "pony", arms: "hug", eyes: "happy", mouth: "grin", walk: fIn < 1 ? time * 9 : null, dir: -1 });
      plate("家人朋友", cx + cs * 2.6, fy + cs * 0.8, fsSmall(), "#ffe1ee", fIn);
    }
    if (fIn >= 1) { emote("heart", cx, fy - cs * 4, cs * 0.8); sparkles(cx, fy - cs * 1.6, cs * 3, 5, 0.9, 8); }
    callout("a-partial", here && lt > 2.6, RX[0] + rs * 0.6, my - rs * 0.8, L.x + L.w * 0.5, L.y + L.h * (nw ? 0.45 : 0.38), nw ? "部分激动剂：只开一半" : "部分激动剂：稳稳占住，只开一半");
    say("a-with", here && lt > 6.2, cx + cs * 2.6, fy - cs * 3.3, R.x + R.w * 0.55, R.y + R.h * (nw ? 0.3 : 0.28), "我们陪你慢慢来", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#ff9a52", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#8f84e0", true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.map > 0.02) mapView(S.map);
    if (S.syn > 0.02) synView(S.syn);
    if (S.stri > 0.02) striView(S.stri);
    if (S.brake > 0.02) brakeView(S.brake);
    if (S.heal > 0.02) healView(S.heal);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#ff9a52",
    titleCard: { lines: ["被劫持的", "奖赏快递"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
