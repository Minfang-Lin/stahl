Anima.register("ocd-impulsivity", {
    "title": "油门和刹车：冲动与强迫",
    "tag": "冲动、强迫与成瘾",
    "headline": "“马上就要”和“停不下来”：大脑的【油门和刹车】",
    "lede": "纹状体像油门，前额叶像刹车。油门太灵，人就容易冲动；刹车松不开、车子在环岛里一圈圈绕，就成了强迫。很多问题都落在这条谱上，而且都可以治疗。",
    "summary": "冲动和强迫的“油门与刹车”框架、皮层-纹状体-丘脑-皮层回路、强迫思维和强迫行为，以及暴露与反应预防和 SSRI 等治疗。",
    "chapter": "对应 Stahl《精神药理学精要》第 13 章 · 冲动与强迫",
    "footer": "如果反复的念头或行为已经占用大量时间、让你很痛苦，可以到精神科或心理科求助；药物的种类、剂量和疗程请遵医嘱。",
    "canvasLabel": "多巴胺开着小车，前额叶教练管刹车，演示冲动和强迫的动画",
    "regions": ["pfc", "striatum"],
    "parts": ["addiction"],
    "cast": ["DA", "5HT", "Glu", "drug"],
    "color": "#f7b267"
  }, () => {
  const CH = [
    { title: "油门和刹车", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["油门", "纹状体"], pill2: ["刹车", "前额叶"],
      text: "Stahl 用“油门和刹车”来理解冲动和强迫。纹状体像油门，负责“去做”：看到想要的东西，就想冲过去；前额叶皮层像刹车，从上往下管着，负责“等一等、想一想、该停就停”。两者配合得好，我们既有动力，又管得住自己；油门太灵，或者刹车不够，行为就容易失控。",
      fact: "纹状体自下而上地驱动行为，前额叶皮层自上而下地踩刹车" },
    { title: "冲动：油门太灵", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["腹侧纹状体", "马上要"], pill2: ["前额叶底部", "刹车不够"],
      text: "冲动，就是还没想清楚就先做了。它更多和腹侧纹状体有关，这里连着奖赏回路，一看到诱惑就喊“马上要！”。本该踩刹车的是前额叶皮层的底部，也就是腹内侧前额叶；它管不住的时候，人就容易抢着说、抢着买、停不下来去赌。冲动常常是冲着“得到快乐”去的。",
      fact: "冲动：自下而上的“马上要”太强，自上而下的刹车不够" },
    { title: "强迫：关不掉的环岛", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["背侧纹状体", "习惯"], pill2: ["眶额皮层", "还没完成"],
      text: "强迫更像刹车松不开，车子在环岛里一圈圈绕。这个环岛就是“皮层-纹状体-丘脑-皮层”回路：眶额皮层不停拉响“还没完成、不对劲”的警报，信号传到管习惯的背侧纹状体，经过丘脑又回到皮层，本该关上的出口闸门就是关不上。这时的行为不再为了快乐，而是为了让不安暂时停下来。",
      fact: "强迫：背侧纹状体的习惯回路一圈圈转，眶额皮层的警报关不掉" },
    { title: "一条谱：从冲动到强迫", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["一头", "冲动"], pill2: ["另一头", "强迫"],
      text: "很多问题都落在这条从冲动到强迫的谱上，只是位置不同：赌博障碍、暴食更靠近冲动那头；拔毛、强迫症更靠近强迫那头；成瘾常常从冲动开始，慢慢滑向强迫。不少人两头的特点都有。它们都是大脑回路出了状况，是可以治疗的病，不是性格缺陷，也不是意志力差。",
      fact: "冲动和强迫是一条谱的两端，很多障碍两头的特点都有" },
    { title: "强迫症：念头和仪式", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["强迫思维", "反复冒出"], pill2: ["强迫行为", "暂时松口气"],
      text: "强迫症里，一些让人不安的念头会反复冒出来，比如“手上是不是有细菌”“门锁好了没有”，这叫强迫思维。为了缓解焦虑，人会去洗手、去检查，这叫强迫行为。做完会暂时松一口气，可念头很快又回来，于是越洗越多、越查越久。本人往往也知道没必要，只是停不下来。",
      fact: "强迫行为能暂时减轻焦虑，却让这个循环越转越牢" },
    { title: "治疗：不回应，再帮一把", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["心理治疗", "ERP"], pill2: ["药物", "SSRI 等"],
      text: "强迫症可以治疗。认知行为治疗里的“暴露与反应预防”（ERP），是在治疗师陪伴下一点点面对害怕的情境，却不去做仪式，让大脑发现：焦虑自己也会慢慢落下来。药物首选 SSRI，通常需要比治疗抑郁更高的剂量、更长的时间才见效；氯米帕明也有效；效果不够时，医生可能加用小剂量抗精神病药增效。",
      fact: "ERP 和 SSRI 是强迫症的主要治疗；用药种类、剂量和疗程都要遵医嘱" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { road: "#efe2d2", kart: "#ffb36b", ring: "#f3e6f7" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0, dist = 0, speed = 0;

  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };

  const prog = (t0, d) => ease((lt - t0) / d);
  // 小车速度（每秒走多少个 W）：第 1 幕看到点心先停一停，第 2 幕越开越快
  function targetSpeed() {
    if (cur === 0) return lt > 5 && lt < 9.3 ? 0 : 0.14;
    if (cur === 1) return lt < 2.5 ? 0.14 : 0.42;
    return 0;
  }
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; dist = 0; speed = targetSpeed(); }
    lt += dt;
    speed = lerp(speed, targetSpeed(), 1 - Math.exp(-dt * 3));
    dist += speed * W * dt;
  }
  const narrow = () => W / H < 1.4;
  const Y = (f) => { const t = Anima.topSafe(); return t + (H - t) * f; };
  const fsS = () => Math.max(11, H * 0.03) * Anima.UI;
  const COACH = { hair: "#8f7ac0", cloth: "#e4e0ff", eye: "#5c52c4", glasses: true, style: "short", hat: "none" };

  // ---------- 小工具 ----------
  function plate(t, x, y, fs, color, a) {
    if (a != null && a < 0.02) return 0;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#ffffff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    ctx.restore();
    return w;
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
  function arrowHead(x, y, q, s, color) {
    ctx.fillStyle = color; ctx.beginPath();
    ctx.moveTo(x + Math.cos(q) * s, y + Math.sin(q) * s);
    ctx.lineTo(x + Math.cos(q + 2.5) * s, y + Math.sin(q + 2.5) * s);
    ctx.lineTo(x + Math.cos(q - 2.5) * s, y + Math.sin(q - 2.5) * s); ctx.closePath(); ctx.fill();
  }
  // 横着的量表：油门 / 刹车
  function gauge(x, y, w, label, level, color) {
    const h = Math.max(10, H * 0.028), fs = fsS() * 0.95;
    const shake = level > 1 ? Math.sin(time * 40) * 2 : 0;
    text(label, x + w / 2, y - fs * 0.95, fs, C.ink);
    rrect(x + shake, y, w, h, h / 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.save(); rrect(x + shake, y, w, h, h / 2); ctx.clip();
    ctx.fillStyle = color; ctx.fillRect(x + shake, y, w * clamp(level, 0, 1), h);
    ctx.fillStyle = "rgba(255,255,255,0.45)"; ctx.fillRect(x, y + h * 0.15, w, h * 0.2);
    ctx.restore();
    if (level > 1) sfx("爆表！", x + w + fs * 1.4, y + h / 2, fs * 1.1, C.bad, -0.15, 1);
  }
  // 诱惑的小徽章
  function lure(kind, x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * 1.8, C.gold, 0.7);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fffdf5"; ctx.fill(); outline(2); ctx.stroke();
    if (kind === "cake") {
      rrect(x - r * 0.55, y - r * 0.1, r * 1.1, r * 0.5, 3); ctx.fillStyle = "#ffe7c4"; ctx.fill(); outline(1.3); ctx.stroke();
      ctx.fillStyle = "#ffd1dc"; ctx.fillRect(x - r * 0.52, y + r * 0.08, r * 1.04, r * 0.1);
      ctx.beginPath(); ctx.arc(x, y - r * 0.28, r * 0.17, 0, Math.PI * 2); ctx.fillStyle = C.coral; ctx.fill(); outline(1.2); ctx.stroke();
    } else if (kind === "dice") {
      ctx.save(); ctx.translate(x, y); ctx.rotate(0.2 + Math.sin(time * 3) * 0.2);
      rrect(-r * 0.45, -r * 0.45, r * 0.9, r * 0.9, r * 0.15); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.fillStyle = C.bad; for (const p of [[-0.2, -0.2], [0, 0], [0.2, 0.2]]) { ctx.beginPath(); ctx.arc(p[0] * r, p[1] * r, r * 0.08, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    } else {
      rrect(x - r * 0.45, y - r * 0.25, r * 0.9, r * 0.7, 3); ctx.fillStyle = "#bfe3f5"; ctx.fill(); outline(1.3); ctx.stroke();
      ctx.strokeStyle = C.line; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(x, y - r * 0.25, r * 0.22, Math.PI, 0); ctx.stroke();
      Anima.heart(x, y + r * 0.1, r * 0.2, C.rose);
    }
    ctx.restore();
  }
  // 两人座小车：多巴胺开车（踩油门），前额叶教练坐旁边（管手刹）
  function kart(x, gy, s, o) {
    const fast = o.fast || 0;
    const bump = Math.abs(Math.sin(time * 14)) * s * 0.06 * (fast > 0.05 ? 1 : 0);
    const y = gy - bump;
    const d = o.dir || 1;
    if (fast > 0.3) {
      ctx.save(); ctx.globalAlpha *= clamp(fast, 0, 1) * 0.6; ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.lineCap = "round";
      for (let k = 0; k < 4; k++) { const yy = y - s * (0.5 + k * 0.4), len = s * (1.5 + rnd(k + Math.floor(time * 8)) * 1.5); ctx.beginPath(); ctx.moveTo(x - d * s * 2.9, yy); ctx.lineTo(x - d * (s * 2.9 + len), yy); ctx.stroke(); }
      ctx.restore();
    }
    chara(x - d * s * 1.2, y - s * 0.9, s * 0.9, Object.assign({}, COACH, { shadow: false, dir: d }, o.coach || {}));
    chara(x + d * s * 1.1, y - s * 0.9, s, Object.assign({ who: o.driver || "DA", shadow: false, dir: d }, o.drv || {}));
    // 手刹拉杆
    const lever = o.lever == null ? 0.3 : o.lever;
    ctx.save(); ctx.translate(x - d * s * 0.05, y - s * 1.5); ctx.rotate(d * lerp(0.9, -0.2, lever));
    ctx.strokeStyle = C.line; ctx.lineWidth = s * 0.2; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -s * 1.3); ctx.stroke();
    ctx.strokeStyle = "#c9c1d6"; ctx.lineWidth = s * 0.1; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -s * 1.3, s * 0.22, 0, Math.PI * 2); ctx.fillStyle = C.coral; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.restore();
    ctx.fillStyle = "rgba(90,70,80,0.13)"; ctx.beginPath(); ctx.ellipse(x, gy + s * 0.05, s * 2.8, s * 0.25, 0, 0, Math.PI * 2); ctx.fill();
    rrect(x - s * 2.7, y - s * 1.75, s * 5.4, s * 1.25, s * 0.5); ctx.fillStyle = o.color || C.kart; ctx.fill(); outline(2); ctx.stroke();
    rrect(x + d * s * 2.2 - s * 0.25, y - s * 1.45, s * 0.5, s * 0.35, 3); ctx.fillStyle = "#fff1a8"; ctx.fill(); outline(1.2); ctx.stroke();
    for (const k of [-1, 1]) {
      const wx = x + k * s * 1.75, wy = gy - s * 0.45, wr = s * 0.48;
      ctx.beginPath(); ctx.arc(wx, wy, wr, 0, Math.PI * 2); ctx.fillStyle = "#6d5760"; ctx.fill();
      ctx.beginPath(); ctx.arc(wx, wy, wr * 0.45, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
      const q = (o.spin || 0);
      ctx.strokeStyle = "#6d5760"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(wx, wy); ctx.lineTo(wx + Math.cos(q) * wr * 0.45, wy + Math.sin(q) * wr * 0.45); ctx.stroke();
    }
    return { dx: x + d * s * 1.1, dy: y - s * 3.8, cx: x - d * s * 1.2, cy: y - s * 3.6, lx: x - d * s * 0.05, ly: y - s * 2.6 };
  }
  function roadScene(roadY) {
    ctx.fillStyle = "#e8f5e4"; ctx.fillRect(0, roadY - H * 0.02, W, H * 0.02);
    ctx.fillStyle = C.road; ctx.fillRect(0, roadY, W, H - roadY);
    outline(2); ctx.beginPath(); ctx.moveTo(0, roadY); ctx.lineTo(W, roadY); ctx.stroke();
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = Math.max(3, H * 0.008);
    const step = W * 0.12, off = dist % step;
    const my = roadY + (H - roadY) * 0.55;
    for (let x = -off; x < W + step; x += step) { ctx.beginPath(); ctx.moveTo(x, my); ctx.lineTo(x + step * 0.5, my); ctx.stroke(); }
    // 路边的小树，跟着一起往后跑
    const tstep = W * 0.3, toff = (dist * 0.8) % tstep;
    for (let x = -toff; x < W + tstep; x += tstep) {
      const tx = x + tstep * 0.3, ty = roadY - H * 0.01;
      ctx.fillStyle = "#c9a27a"; ctx.fillRect(tx - 3, ty - H * 0.06, 6, H * 0.06);
      ctx.beginPath(); ctx.arc(tx, ty - H * 0.09, H * 0.045, 0, Math.PI * 2); ctx.fillStyle = "#bfe8c6"; ctx.fill(); outline(1.4); ctx.stroke();
    }
  }

  // ---------- 第 1 幕：油门和刹车 ----------
  function driveView(a) {
    const here = cur === 0;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6fbff", "#fff4ea");
    Anima.bokeh(6, "#ffe0b8", 0.8, 21);
    const nw = narrow(), roadY = Y(0.7), s = Math.min(H * 0.062, W * 0.05);
    roadScene(roadY);
    const kx = W * 0.42, gy = roadY + (H - roadY) * 0.5;
    const cakeX = W * 1.1 - dist + W * 0.02;
    const near = cakeX < W * 0.9 && cakeX > W * 0.05;
    lure("cake", cakeX, roadY - H * 0.1, Math.min(H * 0.045, W * 0.035), 1);
    const want = lt > 3.8 && lt < 9.6, stop = lt > 5 && lt < 9.6;
    const k = kart(kx, gy, s, {
      fast: speed / 0.2, spin: dist / (s * 0.5), lever: stop ? 1 : 0.2,
      drv: { eyes: want ? "sparkle" : "happy", mouth: want ? "open" : "smile", arms: want ? "point" : "down" },
      coach: { arms: stop ? "shh" : "down", eyes: stop ? "open" : "happy", mouth: "smile" },
    });
    // 两个量表
    const gw = Math.min(W * 0.26, H * 0.45), gyy = Y(0.12);
    const gas = 0.45 + (want ? 0.35 : 0) + Math.sin(time * 3) * 0.03, brk = stop ? 0.8 : 0.3;
    gauge(W * 0.06, gyy, gw, "油门 · 纹状体", gas, "#ffb36b");
    gauge(W * 0.94 - gw, gyy, gw, "刹车 · 前额叶", brk, "#8f84e0");
    if (want && near) emote("heart", k.dx + s * 0.8, k.dy, s * 0.6);
    callout("o-gas", here && lt > 0.8 && lt < 6, k.dx + s * 0.4, k.dy + s * 1.5, W * 0.18, Y(0.38), "开车的多巴胺：想去就踩油门");
    callout("o-brake", here && lt > 5.4 && lt < (nw ? 9.8 : 11), k.lx, k.ly, W * 0.8, Y(0.38), "前额叶教练：拉住手刹");
    say("o-wait", here && lt > (nw ? 6.1 : 5.6) && lt < 10, k.cx, k.cy, W * 0.3, nw ? Y(0.26) : Y(0.5), "先等等，吃完正餐再说～", "say");
    say("o-ok", here && lt > 10.2, k.dx, k.dy, W * 0.66, nw ? Y(0.28) : Y(0.52), "好，油门刹车配合好！", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：冲动 ----------
  function rushView(a) {
    const here = cur === 1;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ee", "#ffeef0");
    Anima.bokeh(6, "#ffd1a8", 0.8, 31);
    const nw = narrow(), roadY = Y(0.7), s = Math.min(H * 0.062, W * 0.05);
    roadScene(roadY);
    // 路边一个接一个的诱惑
    const kinds = ["cake", "dice", "bag"];
    for (let i = 0; i < 6; i++) {
      const x = W * 1.1 + i * W * 0.55 - dist;
      if (x < -W * 0.1 || x > W * 1.2) continue;
      lure(kinds[i % 3], x, roadY - H * 0.1, Math.min(H * 0.045, W * 0.035), 1);
    }
    // “停”牌：一下就被冲过去
    const sx = W * 1.3 - dist * 0.9;
    if (sx > -W * 0.1 && sx < W * 1.2) {
      ctx.strokeStyle = C.line; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(sx, roadY); ctx.lineTo(sx, roadY - H * 0.14); ctx.stroke();
      const r = H * 0.04;
      ctx.beginPath(); for (let k = 0; k < 8; k++) { const q = k / 8 * Math.PI * 2 + Math.PI / 8; ctx.lineTo(sx + Math.cos(q) * r, roadY - H * 0.16 + Math.sin(q) * r); } ctx.closePath();
      ctx.fillStyle = C.bad; ctx.fill(); outline(1.8); ctx.stroke();
      text("停", sx, roadY - H * 0.16, r * 0.9, "#ffffff");
    }
    const kx = W * 0.5 + Math.sin(time * 20) * (speed > 0.3 ? 2 : 0), gy = roadY + (H - roadY) * 0.5;
    const rush = prog(2.3, 1);
    const k = kart(kx, gy, s, {
      fast: speed / 0.2, spin: dist / (s * 0.5), lever: 0.15,
      drv: { eyes: rush > 0.5 ? "sparkle" : "happy", mouth: rush > 0.5 ? "grin" : "smile", arms: rush > 0.5 ? "up" : "down" },
      coach: { eyes: rush > 0.5 ? "sleepy" : "open", mouth: rush > 0.5 ? "o" : "smile", gray: rush * 0.6, arms: "down" },
    });
    if (rush > 0.5) { emote("zzz", k.cx - s * 0.6, k.cy - s * 0.2, s * 0.55); Anima.speedLines(kx, gy - s, W * 0.35, 24, 0.25 * rush); }
    const gw = Math.min(W * 0.26, H * 0.45), gyy = Y(0.12);
    gauge(W * 0.06, gyy, gw, "油门 · 腹侧纹状体", lerp(0.5, 1.15, rush), "#ffb36b");
    gauge(W * 0.94 - gw, gyy, gw, "刹车 · 前额叶底部", lerp(0.3, 0.12, rush), "#8f84e0");
    callout("r-vs", here && lt > 1.5 && lt < 4.8, W * 0.06 + gw * 0.8, gyy + H * 0.03, W * 0.24, Y(0.34), "奖赏回路喊：马上要！");
    callout("r-pfc", here && lt > 9 && lt < 13, k.cx - s * 0.3, k.cy + s * 1.2, W * 0.2, Y(0.4), "刹车那头管不住");
    say("r-now", here && lt > 4.8 && lt < 9, k.dx, k.dy, nw ? W * 0.62 : W * 0.68, nw ? Y(0.22) : Y(0.44), "现在就要！全都要！", "shout");
    say("r-oops", here && lt > 9.4, k.cx, k.cy, W * 0.72, Y(0.4), "诶？刚才是不是该停一下……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：强迫的环岛（皮层-纹状体-丘脑-皮层回路） ----------
  function bell(x, y, r, ring) {
    const sw = ring ? Math.sin(time * 25) * 0.35 : 0;
    ctx.save(); ctx.translate(x, y); ctx.rotate(sw);
    if (ring) glow(0, 0, r * 2.2, C.coral, 0.6);
    ctx.beginPath(); ctx.moveTo(-r, r * 0.6); ctx.quadraticCurveTo(-r * 0.9, -r * 0.9, 0, -r); ctx.quadraticCurveTo(r * 0.9, -r * 0.9, r, r * 0.6); ctx.closePath();
    ctx.fillStyle = C.gold; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, r * 0.75, r * 0.22, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    ctx.restore();
    if (ring) for (const d of [-1, 1]) { ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, r * 1.6, d > 0 ? -0.5 : Math.PI - 0.5 + 1, d > 0 ? 0.5 : Math.PI + 0.5 + 1 - 1); ctx.stroke(); }
  }
  function loopView(a) {
    const here = cur === 2;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf6ff", "#f3f0fb");
    Anima.bokeh(6, "#e3dbff", 0.8, 44);
    Anima.petals(6, 0.4, 3);
    const nw = narrow();
    const T0 = Anima.topSafe();
    const cx = W * (nw ? 0.44 : 0.42), cy = Y(0.52);
    const rx = Math.min(W * (nw ? 0.33 : 0.3), (H - T0) * 0.75), ry = Math.min(rx * 0.48, (H - T0) * 0.36);
    const rw = Math.max(18, H * 0.075);
    // 出口的路（往右边伸出去），闸门关着
    const exY = cy + ry * 0.2;
    ctx.fillStyle = C.road; ctx.fillRect(cx + rx, exY - rw / 2, W, rw);
    outline(2); ctx.beginPath(); ctx.moveTo(cx + rx * 0.98, exY - rw / 2); ctx.lineTo(W, exY - rw / 2); ctx.moveTo(cx + rx * 0.98, exY + rw / 2); ctx.lineTo(W, exY + rw / 2); ctx.stroke();
    const gateX = cx + rx + rw * 1.2;
    const jiggle = lt > 8 ? Math.sin(time * 18) * 0.06 : 0;
    ctx.save(); ctx.translate(gateX, exY - rw * 0.7); ctx.rotate(Math.PI / 2 + jiggle);
    rrect(-rw * 0.1, -rw * 0.1, rw * 1.6, rw * 0.22, 3); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.6); ctx.stroke();
    for (let k = 0; k < 3; k++) { ctx.fillStyle = C.bad; ctx.fillRect(rw * (0.15 + k * 0.5), -rw * 0.1, rw * 0.22, rw * 0.22); }
    ctx.restore();
    plate(nw ? "出口" : "出口：去做别的事", Math.min(W - fsS() * 5, gateX + rw * 2.6), exY + rw * 1.25, fsS() * 0.9, "#e1f5ec");
    // 环岛
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.strokeStyle = C.line; ctx.lineWidth = rw + 4; ctx.stroke();
    ctx.strokeStyle = C.road; ctx.lineWidth = rw; ctx.stroke();
    ctx.save(); ctx.setLineDash([rw * 0.4, rw * 0.5]); ctx.lineDashOffset = -time * 30; ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    ctx.beginPath(); ctx.ellipse(cx, cy, rx - rw / 2 - 2, ry - rw / 2 - 2, 0, 0, Math.PI * 2); ctx.fillStyle = "#e8f5e4"; ctx.fill(); outline(1.6); ctx.stroke();
    // 三个站：眶额皮层（上）、背侧纹状体（右下）、丘脑（左下）
    const P = (q) => ({ x: cx + Math.cos(q) * rx, y: cy + Math.sin(q) * ry });
    const st = [
      { q: -Math.PI / 2, name: "眶额皮层", col: "#ffe1e1" },
      { q: Math.PI * 0.2, name: "背侧纹状体", col: "#ddd5fa" },
      { q: Math.PI * 0.8, name: "丘脑", col: "#e3f3fc" },
    ];
    const fs = fsS() * (nw ? 0.9 : 1);
    st.forEach((o, i) => {
      const p = P(o.q);
      const oy = i === 0 ? -rw * 1.45 : rw * 1.3;
      plate(o.name, p.x + (i === 1 ? rw * 0.6 : i === 2 ? -rw * 0.6 : 0), p.y + oy, fs, o.col);
    });
    const top = P(-Math.PI / 2);
    // 小车沿着环岛一直绕（顺时针）
    const lapT = 4.2, ph = ((lt / lapT) % 1);
    const q = Math.PI * 0.5 - ph * Math.PI * 2;
    const kp = P(q);
    const dir = Math.sin(q) > 0 ? 1 : -1;
    const s = Math.min(H * 0.04, W * 0.03);
    // 警报：小车经过顶上时铃响
    const nearTop = Math.sin(q) < -0.3;
    bell(top.x, top.y - rw * 2.6 - fs, Math.max(8, rw * 0.35), nearTop);
    if (nearTop) sfx("叮铃铃！", top.x + rw * 2.4, top.y - rw * 2.6 - fs, fs * 1.2, C.bad, -0.1, 1);
    // 小车后面画，前面的站牌不挡
    const tired = prog(6, 4);
    kart(kp.x, kp.y + s * 0.6, s, {
      dir, fast: 0.5, spin: time * 6, lever: 0.95 + Math.sin(time * 16) * 0.05, color: "#c9b6f0",
      drv: { eyes: tired > 0.5 ? "sleepy" : "open", mouth: "wavy", arms: "down", brow: "worry" },
      coach: { eyes: "x", mouth: "wavy", arms: "fist", brow: "worry" },
    });
    // 谷氨酸信使：带着“还没完成”的信，沿着回路跑
    for (let k = 0; k < 3; k++) {
      const qq = -Math.PI / 2 + ((time * 0.35 + k / 3) % 1) * Math.PI * 2;
      const gp = { x: cx + Math.cos(qq) * (rx - rw * 0.9), y: cy + Math.sin(qq) * (ry - rw * 0.9) };
      chara(gp.x, gp.y + s * 0.4, s * 0.62, { who: "Glu", item: "letter", arms: "hold", walk: time * 9 + k, eyes: "open", mouth: "wavy", dir: Math.sin(qq) > 0 ? -1 : 1, shadow: false });
    }
    const laps = Math.floor(lt / lapT) + 1;
    text(`第 ${laps} 圈`, cx, cy, fs * 1.3, C.lavDeep);
    const stP = P(st[1].q);
    callout("l-ofc", here && lt > 0.8 && lt < 5.4, top.x + rw * 0.3, top.y - rw * 2.4 - fs, nw ? W * 0.2 : W * 0.16, Y(0.1), "警报：还没完成、不对劲！");
    callout("l-ds", here && lt > 5.5 && lt < 10, stP.x + rw * 0.6, stP.y + rw * 0.9, nw ? W * 0.6 : W * 0.72, Y(0.96), "管习惯的背侧纹状体");
    callout("l-gate", here && lt > 10, gateX, exY - rw * 0.2, W * 0.78, Y(0.1), "出口的闸门关不上");
    say("l-again", here && lt > 5.6 && lt < 10, kp.x, kp.y - s * 3, nw ? W * 0.3 : W * 0.16, nw ? Y(0.1) : Y(0.12), "再绕一圈……就一圈……", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：一条谱 ----------
  function specView(a) {
    const here = cur === 3;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf2", "#f5f0ff");
    Anima.bokeh(6, "#fff0b0", 0.7, 7);
    Anima.petals(8, 0.5, 19);
    const nw = narrow();
    const x0 = W * 0.1, x1 = W * 0.9, by = Y(0.4), bh = Math.max(12, H * 0.035);
    const g = ctx.createLinearGradient(x0, 0, x1, 0);
    g.addColorStop(0, "#ffb36b"); g.addColorStop(0.5, "#ffe3c4"); g.addColorStop(0.5, "#e4dcfb"); g.addColorStop(1, "#8f84e0");
    rrect(x0, by - bh / 2, x1 - x0, bh, bh / 2); ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    const fs = fsS() * (nw ? 0.95 : 1.1);
    // 两头的小图标：油门脚踏 / 环形箭头
    const ir = Math.max(14, H * 0.045);
    ctx.beginPath(); ctx.arc(x0, by, ir, 0, Math.PI * 2); ctx.fillStyle = "#fff1dc"; ctx.fill(); outline(2); ctx.stroke();
    text("冲", x0, by, ir, "#e07a2a");
    ctx.beginPath(); ctx.arc(x1, by, ir, 0, Math.PI * 2); ctx.fillStyle = "#ece8ff"; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); ctx.strokeStyle = C.lavDeep; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x1, by, ir * 0.55, time * 3, time * 3 + Math.PI * 1.5); ctx.stroke();
    arrowHead(x1 + Math.cos(time * 3 + Math.PI * 1.5) * ir * 0.55, by + Math.sin(time * 3 + Math.PI * 1.5) * ir * 0.55, time * 3 + Math.PI * 2, ir * 0.3, C.lavDeep); ctx.restore();
    text("冲动：马上要", x0 + fs * 2.6, by + ir + fs * 1.1, fs, "#e07a2a");
    text("强迫：停不下", x1 - fs * 2.6, by + ir + fs * 1.1, fs, C.lavDeep);
    const items = [
      { t: "赌博障碍", f: 0.2, up: 1, at: 1.2 },
      { t: "暴食", f: 0.4, up: 1, at: 2.4 },
      { t: "拔毛", f: 0.66, up: 1, at: 3.6 },
      { t: "强迫症", f: 0.84, up: 1, at: 4.8 },
    ];
    items.forEach((it, k) => {
      const p = prog(it.at, 0.6);
      if (p < 0.02) return;
      const x = lerp(x0, x1, it.f), y = by - bh - fs * (k % 2 ? 1.6 : 3.4);
      ctx.save(); ctx.globalAlpha *= p;
      ctx.strokeStyle = alpha(C.line, 0.5); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, y + fs * 0.8); ctx.lineTo(x, by - bh / 2); ctx.stroke();
      ctx.restore();
      plate(it.t, x, y, fs, "#ffffff", p);
    });
    // 成瘾：从冲动慢慢滑到强迫
    const ap = prog(6.5, 3.5);
    const ax = lerp(lerp(x0, x1, 0.12), lerp(x0, x1, 0.8), ap), ay = by + ir + fs * 2.7;
    if (prog(6, 0.5) > 0.02) {
      ctx.save(); ctx.globalAlpha *= prog(6, 0.5);
      ctx.setLineDash([5, 5]); ctx.strokeStyle = alpha("#e07a2a", 0.7); ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.moveTo(lerp(x0, x1, 0.12), ay); ctx.lineTo(ax, ay); ctx.stroke(); ctx.setLineDash([]);
      ctx.restore();
      plate("成瘾", ax, ay, fs, mix("#ffd9b0", "#ddd5fa", ap), prog(6, 0.5));
    }
    // 下面的小居民：都可以治疗
    const cs = Math.min(H * 0.045, W * 0.035), fy = Y(0.97);
    const hp = prog(10, 1);
    ["DA", "5HT", "Glu"].forEach((w, i) => {
      const x = nw ? W * (0.14 + i * 0.13) : W * (0.36 + i * 0.14);
      chara(x, fy, cs, { who: w, arms: hp > 0.5 ? "up" : "down", eyes: hp > 0.5 ? "happy" : "open", mouth: hp > 0.5 ? "grin" : "smile", jump: hp > 0.5 ? Math.abs(Math.sin(time * 4 + i)) * 0.2 : 0 });
    });
    if (hp > 0.5) emote("heart", nw ? W * 0.27 : W * 0.5, fy - cs * 4, cs * 0.7);
    callout("s-add", here && lt > 7 && lt < 10.3, ax, ay + fs * 0.8, W * 0.5, nw ? Y(0.72) : Y(0.8), "成瘾：常从冲动慢慢滑向强迫");
    say("s-ok", here && lt > 10.5, nw ? W * 0.27 : W * 0.5, fy - cs * 3.2, nw ? W * 0.72 : W * 0.5, nw ? Y(0.8) : Y(0.7), "都是可以治疗的病，不是性格缺陷！", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：强迫症的循环 ----------
  function sink(x, y, w) {
    rrect(x - w / 2, y - w * 0.3, w, w * 0.3, w * 0.08); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.strokeStyle = C.line; ctx.lineWidth = 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x + w * 0.3, y - w * 0.3); ctx.lineTo(x + w * 0.3, y - w * 0.55); ctx.lineTo(x + w * 0.12, y - w * 0.55); ctx.stroke();
    rrect(x - w * 0.35, y, w * 0.7, w * 0.5, 4); ctx.fillStyle = "#e8e0f0"; ctx.fill(); outline(1.6); ctx.stroke();
  }
  function cycleView(a) {
    const here = cur === 4;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#fbf3ff");
    Anima.bokeh(6, "#d7efff", 0.8, 5);
    const nw = narrow();
    const cx = W * (nw ? 0.42 : 0.44), cy = Y(0.52);
    const T0 = Anima.topSafe();
    const rx = Math.min(W * (nw ? 0.3 : 0.28), (H - T0) * 0.7), ry = (H - T0) * 0.36;
    const per = 4, ph = (lt % per) / per; // 一圈：念头 → 焦虑 → 洗手 → 松口气
    const stage = Math.floor(ph * 4);
    const fs = fsS() * (nw ? 0.9 : 1.05);
    // 循环箭头
    ctx.save(); ctx.strokeStyle = alpha(C.lavDeep, 0.45); ctx.lineWidth = 3; ctx.setLineDash([8, 7]); ctx.lineDashOffset = -time * 20;
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    const nodes = ["不安的念头", "焦虑升高", "洗手、检查", "暂时松口气"];
    const cols = ["#ffe1e1", "#fff1b8", "#e3f3fc", "#e1f5ec"];
    const NQ = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];
    const np = NQ.map((q) => ({ x: cx + Math.cos(q) * rx, y: cy + Math.sin(q) * ry }));
    const mq = -Math.PI / 2 + ph * Math.PI * 2;
    const mx = cx + Math.cos(mq) * rx, my = cy + Math.sin(mq) * ry;
    arrowHead(mx, my, mq + Math.PI / 2, fs * 0.8, C.lavDeep);
    nodes.forEach((n, i) => {
      if (i === stage) glow(np[i].x, np[i].y, fs * 3, C.gold, 0.7);
      plate(n, np[i].x, np[i].y, fs * (i === stage ? 1.1 : 1), cols[i]);
    });
    // 中间：洗手池前的小居民
    const cs = Math.min(H * 0.068, W * 0.05);
    const px = cx - cs * 0.8, py = cy + ry * 0.55;
    sink(px + cs * 2.2, py - cs * 0.9, cs * 2.4);
    const washing = stage === 2;
    const worried = stage === 0 || stage === 1;
    chara(px, py, cs, { who: "5HT", hair: "#7a9ad8", cloth: "#e3f3fc", hat: "none", label: "", acc: null, arms: washing ? "hold" : (stage === 3 ? "down" : "hug"), eyes: stage === 3 ? "closed" : (worried ? "wide" : "open"), mouth: stage === 3 ? "smile" : "wavy", brow: worried ? "worry" : null, dir: 1 });
    if (washing) {
      sfx("哗哗", px + cs * 2.6, py - cs * 3.2, fs * 1.1, C.skyDeep, -0.1, 1);
      for (let k = 0; k < 4; k++) { const t = (time * 2 + k / 4) % 1; ctx.beginPath(); ctx.arc(px + cs * 2.6 + (rnd(k) - 0.5) * cs * 0.3, py - cs * 2.2 + t * cs * 1.2, cs * 0.1, 0, Math.PI * 2); ctx.fillStyle = C.sky; ctx.fill(); }
    }
    if (stage === 1) emote("sweat", px + cs, py - cs * 3.2, cs * 0.55);
    if (stage === 0) emote("!", px + cs * 0.9, py - cs * 3.4, cs * 0.6);
    // 右边：焦虑温度计
    const mX = W * 0.93, m0 = Y(0.12), m1 = Y(0.88), mw = Math.max(12, W * 0.022);
    const lvl = stage === 0 ? lerp(0.35, 0.6, (ph * 4) % 1) : stage === 1 ? lerp(0.6, 0.92, (ph * 4) % 1) : stage === 2 ? 0.92 : lerp(0.92, 0.35, ease((ph * 4) % 1));
    rrect(mX - mw / 2, m0, mw, m1 - m0, mw / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); rrect(mX - mw / 2, m0, mw, m1 - m0, mw / 2); ctx.clip();
    ctx.fillStyle = mix("#ffe08a", C.coral, lvl); ctx.fillRect(mX - mw / 2, m1 - (m1 - m0) * lvl, mw, (m1 - m0) * lvl); ctx.restore();
    text("焦虑", mX, m0 - fs * 0.9, fs * 0.9, C.soft);
    const n0 = np[0], n2 = np[2];
    callout("c-obs", here && lt > 1 && lt < 7, n0.x + fs * 3, n0.y, nw ? W * 0.78 : W * 0.72, Y(0.1), "强迫思维");
    callout("c-com", here && lt > 5 && lt < 11, n2.x + fs * 3, n2.y, nw ? W * 0.78 : W * 0.75, Y(0.96), "强迫行为");
    say("c-germ", here && lt < 8 && stage === 0, px, py - cs * 3.2, nw ? W * 0.24 : W * 0.24, Y(0.2), "手上是不是有细菌？", "think");
    say("c-know", here && lt > 8.5, px, py - cs * 3.2, nw ? W * 0.25 : W * 0.2, nw ? Y(0.76) : Y(0.3), "明明知道没必要……可是停不下来", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：治疗 ----------
  function treatView(a) {
    const here = cur === 5;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbfff5", "#fff1f4");
    Anima.petals(10, 0.6, 50);
    const nw = narrow();
    const top = Y(0.07), ch = H * 0.96 - top, gap = W * 0.025, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, nw ? "暴露与反应预防" : "暴露与反应预防（ERP）", "#e1f5ec");
    card(R.x, R.y, R.w, R.h, "药物帮一把", "#ffe7d6");
    const fs = fsS() * (nw ? 0.85 : 1);
    // 左：焦虑曲线
    const gx0 = L.x + L.w * 0.1, gx1 = L.x + L.w * 0.92, gy0 = L.y + L.h * 0.14, gy1 = L.y + L.h * 0.56;
    outline(1.8); ctx.beginPath(); ctx.moveTo(gx0, gy0); ctx.lineTo(gx0, gy1); ctx.lineTo(gx1, gy1); ctx.stroke();
    text("焦虑", gx0 + fs * 1.4, gy0, fs * 0.85, C.soft);
    text("时间 →", gx1 - fs * 1.8, gy1 + fs * 0.9, fs * 0.85, C.soft);
    const P = (f, v) => [lerp(gx0 + 3, gx1 - 3, f), lerp(gy1 - 3, gy0 + fs, v)];
    const drawTo = prog(0.5, 7);
    const curve = (fn, col, dash) => {
      ctx.save(); if (dash) ctx.setLineDash([6, 5]); ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.lineJoin = "round";
      ctx.beginPath();
      for (let i = 0; i <= 60; i++) { const f = i / 60 * drawTo; const p = P(f, fn(f)); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
      ctx.stroke(); ctx.restore();
    };
    curve((f) => { const u = (f * 3) % 1; return 0.25 + (u < 0.7 ? u / 0.7 * 0.65 : 0.9 - (u - 0.7) / 0.3 * 0.65); }, alpha(C.coral, 0.8), true);
    curve((f) => (f < 0.18 ? 0.25 + f / 0.18 * 0.65 : 0.12 + 0.78 * Math.exp(-(f - 0.18) * 3.2)), C.mintDeep, false);
    if (drawTo > 0.95) {
      text(nw ? "做仪式" : "做仪式：降了又回来", P(0.7, 0.98)[0], P(0.7, 0.98)[1], fs * 0.85, C.bad);
      text(nw ? "不做：自己落下" : "不做仪式：慢慢自己落下", P(0.62, 0.05)[0], P(0.62, 0.05)[1] - fs * 0.9, fs * 0.85, C.mintDeep);
    }
    const cs = Math.min(L.h * 0.07, L.w * 0.06);
    const fy = L.y + L.h * 0.95;
    const px = L.x + L.w * 0.34, tx = L.x + L.w * 0.66;
    const calm = prog(5, 4);
    chara(px, fy, cs, { who: "5HT", hair: "#7a9ad8", cloth: "#e3f3fc", hat: "none", label: "", acc: null, arms: "hug", eyes: calm > 0.5 ? "happy" : "open", mouth: calm > 0.5 ? "smile" : "wavy", brow: calm > 0.5 ? null : "worry", dir: 1 });
    chara(tx, fy, cs, { who: "neuron", hair: "#a8765a", cloth: "#fff1b8", item: "book", arms: "hold", eyes: "happy", mouth: "smile", dir: -1 });
    if (calm > 0.6) emote("sparkle", px + cs, fy - cs * 3.3, cs * 0.5);
    // 右：SSRI 把回收门挡住，5-HT 多留一会儿
    const my = R.y + R.h * 0.44, rs = Math.min(R.h * 0.06, R.w * 0.07);
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 20); ctx.clip();
    const band = R.y + fs * 1.3;
    ctx.fillStyle = "#e9f7f1"; ctx.fillRect(R.x, band, R.w, my - band);
    ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(R.x, my); ctx.lineTo(R.x + R.w, my); ctx.stroke();
    const trX = R.x + R.w * 0.72;
    const dIn = prog(1, 1.5);
    Anima.transporter(trX, my - rs * 0.2, rs, "#9fc3ea", dIn > 0.9 ? 0 : time * 2, dIn > 0.9);
    const vx = lerp(R.x + R.w + rs * 2, trX + rs * 2.3, dIn);
    chara(vx, my - rs * 0.1, Math.min(rs * 0.9, R.w * 0.05), { who: "drug", label: "", tag: "SSRI", hatColor: "#8fdcc4", hatColor2: "#ffffff", arms: dIn >= 1 ? "shh" : "wave", eyes: "happy", mouth: "cat", walk: dIn < 1 ? time * 9 : null, dir: -1 });
    const n5 = Math.round(lerp(2, 5, prog(2.5, 3)));
    for (let k = 0; k < 5; k++) {
      if (k >= n5) break;
      const x = R.x + R.w * (0.12 + k * 0.11), y = my - rs * 0.3 + Math.sin(time * 2 + k) * 2;
      chara(x, y - (k % 2) * rs * 0.9, Math.min(rs * 0.6, R.w * 0.035), { who: "5HT", eyes: "happy", mouth: "smile", arms: k % 2 ? "wave" : "down", seed: k, shadow: false });
    }
    const notes = [
      { t: nw ? "SSRI：剂量常更高、见效慢" : "SSRI：剂量常更高、见效更慢", c: "#e1f5ec", at: 4 },
      { t: "氯米帕明也有效", c: "#fff1b8", at: 6 },
      { t: nw ? "难治：加小剂量抗精神病药" : "难治时：加小剂量抗精神病药增效", c: "#ffe1ee", at: 8 },
    ];
    const nfs = Math.min(fs, R.w / (nw ? 13.6 : 16)); // 手机上文字缩短一点、字放大一点
    notes.forEach((n, k) => plate(n.t, R.x + R.w / 2, R.y + R.h * (0.6 + k * 0.12), nfs, n.c, prog(n.at, 0.6)));
    callout("t-erp", here && lt > 6 && lt < 8.8, P(0.6, 0.2)[0], P(0.6, 0.2)[1], L.x + L.w * 0.5, L.y + L.h * 0.68, "面对它，但不做仪式");
    say("t-with", here && lt > 9.5, tx, fy - cs * 3.2, L.x + L.w * (nw ? 0.5 : 0.72), L.y + L.h * (nw ? 0.72 : 0.68), nw ? "焦虑会自己落下来" : "我陪着你，焦虑会自己落下来", "say");
    say("t-doc", here && lt > 10.6, R.x + R.w * 0.5, R.y + R.h * 0.9, R.x + R.w * 0.5, nw ? R.y + R.h * 0.25 : R.y + R.h * 0.94, nw ? "剂量疗程听医生的" : "剂量和疗程都听医生的", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#ff9a52", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#8f84e0", true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) driveView(S.v0);
    if (S.v1 > 0.02) rushView(S.v1);
    if (S.v2 > 0.02) loopView(S.v2);
    if (S.v3 > 0.02) specView(S.v3);
    if (S.v4 > 0.02) cycleView(S.v4);
    if (S.v5 > 0.02) treatView(S.v5);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#ff9a52",
    titleCard: { lines: ["油门和刹车", "冲动与强迫"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
