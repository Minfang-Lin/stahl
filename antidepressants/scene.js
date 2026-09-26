Anima.register("antidepressants", {
    "title": "回收站暂停营业",
    "tag": "抗抑郁药",
    "headline": "抗抑郁药为什么要【等几周】？",
    "lede": "大多数抗抑郁药做的第一件事，是让单胺快递员在突触里多留一会儿：堵住回收门，或者让清扫员停工。可回收门当天就堵上了，心情却要等几周才好转。这一集讲讲其中的“刹车”，还有副作用和用药的小约定。",
    "summary": "SSRI、SNRI、安非他酮和 MAOI 怎样起作用，为什么要等几周，以及副作用、忌口和停药的注意事项。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · 心境障碍的治疗",
    "footer": "用药期间如果出现情绪明显变差或伤害自己的想法，请立刻告诉家人和医生，也可以联系当地心理援助热线或前往医院急诊。",
    "canvasLabel": "拟人化的药物访客堵住血清素回收门、5-HT1A 自身受体刹车慢慢松开的动画",
    "regions": ["synapse", "brainstem"],
    "parts": ["mood"],
    "cast": ["5HT", "pump", "drug", "NE", "MAO"],
    "color": "#8fdcc4"
  }, () => {
  const CH = [
    { title: "先堵住回收门", syn: 1, auto: 0, line: 0, doors: 0, mao: 0, note: 0,
      pill: ["血清素", "正常"], pill2: ["回收门", "营业中"],
      text: "最常用的一类抗抑郁药叫 SSRI，也就是选择性血清素再摄取抑制剂。平时，血清素送完信，会从回收门（血清素转运体）回到末梢。SSRI 就像一位访客，把这扇回收门先堵上，挂上“暂停回收”的牌子。于是，血清素在突触里多留一会儿，有更多机会把信送到受体。",
      fact: "“再摄取”就是回收：SSRI 堵住的是血清素的回收门（血清素转运体，SERT）" },
    { title: "为什么要等几周", syn: 0, auto: 1, line: 0, doors: 0, mao: 0, note: 0,
      pill: ["刹车", "踩住"], pill2: ["用药", "第 1 周"],
      text: "奇怪的是，回收门当天就堵上了，心情却要等几周。Stahl 的经典解释是：一开始，多出来的血清素先跑到神经元自己的胞体上，按下 5-HT1A 自身受体，这是一个刹车，神经元反而少放电。几周后，这些自身受体慢慢“脱敏”、变少，刹车松开，末梢释放的血清素才真正多起来。",
      fact: "一般用药 2～4 周开始见效，完全起效可能还要更久，需要一点耐心" },
    { title: "副作用常常先到", syn: 0, auto: 0, line: 1, doors: 0, mao: 0, note: 0,
      pill: ["先到", "副作用"], pill2: ["后到", "疗效"],
      text: "副作用往往比疗效来得早：恶心、胃口变化、睡眠变化、性功能方面的影响都可能出现；刚开始的一两周，有人还会觉得更焦虑、更坐立不安。很多不适会慢慢减轻，但都值得告诉医生。特别是青少年和年轻人，刚开始用药或调整用药时，要留意情绪变化和轻生念头，一旦出现，请马上告诉家人和医生。",
      fact: "副作用常常先来、疗效后到；出现轻生念头时，请立刻告诉家人和医生" },
    { title: "更多的回收门", syn: 0, auto: 0, line: 0, doors: 1, mao: 0, note: 0,
      pill: ["回收门", "三扇"], pill2: ["选药", "因人而异"],
      text: "除了 SSRI，还有别的“堵门”方式。SNRI（血清素和去甲肾上腺素再摄取抑制剂）同时堵住血清素和去甲肾上腺素两扇回收门。安非他酮则主要作用于去甲肾上腺素和多巴胺的回收门，几乎不碰血清素。堵的门不同，适合的人和副作用也不一样，所以医生会根据每个人的情况来选。",
      fact: "SSRI 管血清素；SNRI 管血清素 + 去甲肾上腺素；安非他酮管去甲肾上腺素 + 多巴胺" },
    { title: "清扫员停工", syn: 0, auto: 0, line: 0, doors: 0, mao: 1, note: 0,
      pill: ["清扫员", "上班中"], pill2: ["现在", "较少首选"],
      text: "老牌选手 MAOI（单胺氧化酶抑制剂）走的是另一条路：让清扫员单胺氧化酶停工，血清素、去甲肾上腺素和多巴胺就不容易被分解，数量变多。它的效果可以很强，但要严格忌口，比如陈年奶酪等富含酪胺的食物，否则血压可能突然升得很高；还要特别当心和其他药物的相互作用。所以现在它很少作为首选。",
      fact: "用 MAOI 时要严格忌口含酪胺的食物，并避免危险的药物相互作用" },
    { title: "用药小约定", syn: 0, auto: 0, line: 0, doors: 0, mao: 0, note: 1,
      pill: ["约定", "4 条"], pill2: ["一起", "慢慢来"],
      text: "和抗抑郁药相处，有几个小约定：用够剂量、用够时间，别太早放弃；好转以后，通常还要继续用一段时间，防止复发；不要自己突然停药，否则可能出现头晕、恶心、“过电感”等停药反应，减药换药都要和医生商量。另外，心理治疗同样重要，药物和谈话可以一起帮你走出阴天。",
      fact: "减药、换药、停药都请和医生商量，一步一步慢慢来" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    term: "#ffd6c4", post: "#e3f5ee", rec: "#8fdcc4", pumpC: "#9fc3ea", soma: "#ffd3c4",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { syn: 1, auto: 0, line: 0, doors: 0, mao: 0, note: 0 };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  const narrow = () => W / H < 1.5;

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

  // ---------- 第 1 幕：突触特写 ----------
  function geo() {
    const cx = W * 0.44, tw = Math.min(W * 0.62, H * 1.1), th = H * 0.42, post = H * 0.76;
    const bot = th;
    const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
    const termY = (x) => {
      const dx = Math.abs(x - cx);
      let best = bot, bd = 1e9;
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        const px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, bot + th * 0.02, bot, bot);
        if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; }
      }
      return best;
    };
    const rs = H * 0.05, cs = H * 0.042;
    const recX = [cx - tw * 0.32, cx - tw * 0.05, cx + tw * 0.22];
    const T = { x: cx + tw * 0.4 }; T.y = termY(T.x) - H * 0.01;
    return { cx, tw, th, bot, post, termY, rs, cs, recX, T, siteY: post - rs * 1.62 };
  }
  function synView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const g = geo();
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#effaf5");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(7, "#cfeaf7", 0.9, 90);
    Anima.petals(8, 0.5, 20);
    const block = prog(4.2, 0.4);
    const blocked = lt > 4.2;
    const n = blocked ? Math.min(5, 3 + Math.floor((lt - 4.6) / 0.8) + 1) : 3;
    Anima.postMembrane(g.post, C.post, { face: true, faceX: g.cx - g.tw * 0.62 < 40 ? W * 0.88 : g.cx - g.tw * 0.62, mood: blocked && lt > 7 ? 1 : 0 });
    g.recX.forEach((x, i) => Anima.receptor(x, g.post, g.rs, C.rec, blocked && lt > 5 + i * 0.6 ? 1 : 0.35, { label: i === 1 ? "5-HT 受体" : null }));
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    for (let i = 0; i < 3; i++) Anima.vesicle(g.cx - g.tw * 0.2 + i * g.tw * 0.18, g.bot - g.th * (0.35 + (i % 2) * 0.15), H * 0.04, Anima.CAST["5HT"].hair, 5, i * 5);
    Anima.transporter(g.T.x, g.T.y, g.rs, C.pumpC, blocked ? 0.3 : time * 2.5, blocked);
    // 回收员
    const px = g.T.x + g.rs * 1.5, py = g.T.y + g.rs * 3.9;
    chara(px, py, g.cs, { who: "pump", item: "net", arms: blocked ? "down" : "wave", eyes: blocked ? "wide" : "happy", mouth: blocked ? "o" : "smile", dir: -1 });
    if (blocked && lt < 8) emote("sweat", px + g.cs * 0.9, py - g.cs * 3, g.cs * 0.6);
    // 快递员：送完信后，一位往回收门走；门被堵上后，大家都留在突触里
    const pos = [];
    for (let i = 0; i < n; i++) {
      let x, y, o;
      if (i < 3) { x = g.recX[i]; y = g.siteY; o = { eyes: blocked ? "happy" : "open", arms: blocked ? "up" : "down", mouth: blocked ? "grin" : "smile", jump: blocked ? Math.abs(Math.sin(time * 4 + i)) * 0.2 : 0 }; }
      else {
        const born = 4.6 + (i - 3) * 0.8, p = ease((lt - born) / 1);
        const hx = g.cx + g.tw * [-0.185, 0.085, -0.44][i - 3], hy = g.siteY - H * 0.13 + Math.sin(time * 2 + i) * H * 0.012;
        x = lerp(g.cx + g.tw * (i % 2 ? 0.1 : -0.1), hx, p); y = lerp(g.bot + g.cs * 3, hy, p);
        o = { eyes: "sparkle", arms: "wave", mouth: "grin", alpha: clamp(p * 3, 0, 1) };
      }
      // 第 0 位：门没堵之前，送完信往回收门走
      if (i === 0 && !blocked) {
        const p = prog(1, 2.6);
        x = lerp(g.recX[0], g.T.x, p); y = lerp(g.siteY, g.T.y + g.rs * 2.8, p) - Math.sin(p * Math.PI) * H * 0.05;
        const inn = prog(3.4, 0.6);
        o = { walk: p < 1 ? time * 9 : null, eyes: "happy", arms: "down", mouth: "smile", alpha: 1 - inn };
      }
      if (i === 0 && blocked) { // 回来的这位碰到封条，只好折返
        const p = prog(4.4, 1.6);
        x = lerp(g.T.x - g.rs * 0.6, g.recX[0], p); y = lerp(g.T.y + g.rs * 2.9, g.siteY, p);
        o = { walk: p < 1 ? time * 9 : null, eyes: p < 1 ? "wide" : "happy", arms: p < 1 ? "down" : "up", mouth: p < 1 ? "o" : "grin", alpha: clamp((lt - 4.2) * 3, 0, 1), dir: -1 };
        if (p < 0.5) emote("?", x + g.cs * 0.8, y - g.cs * 3.3, g.cs * 0.7);
      }
      pos.push({ x, y });
      chara(x, y, g.cs, Object.assign({ who: "5HT", seed: i }, o));
      if (blocked && i < 3 && lt > 5) sparkles(x, y - g.cs * 1.5, g.cs * 2, 3, 0.7, i * 13);
    }
    // SSRI 访客：走过来，把回收门堵上
    const dp = prog(1.8, 2.4);
    const dx = lerp(W + g.cs * 2, g.T.x - g.rs * 0.9, dp), dy = g.T.y + g.rs * 3.9;
    chara(dx, dy, g.cs * 1.05, { who: "drug", label: "SSRI", walk: dp < 1 ? time * 9 : null, dir: -1, arms: blocked ? "fist" : "down", eyes: blocked ? "happy" : "open", mouth: blocked ? "grin" : "smile" });
    if (block > 0 && block < 1) sfx("啪！", g.T.x + g.rs * 1.4, g.T.y - g.rs * 0.2, H * 0.05, "#e7a23a", -0.15, 1);
    if (lt > 4.2 && lt < 5.2) sfx("啪！", g.T.x + g.rs * 1.4, g.T.y - g.rs * 0.2, H * 0.05, "#e7a23a", -0.15, 1 - (lt - 4.2));

    callout("sert", lt > 0.6 && lt < 4.2, g.T.x - g.rs * 0.7, g.T.y, g.T.x - W * 0.08, g.bot + H * 0.14, "血清素转运体：回收门");
    callout("ssri", lt > 5.2, dx - g.cs * 0.8, dy - g.cs * 1.5, g.T.x - W * 0.14, g.post + H * 0.1, "SSRI：把回收门先堵上");
    say("closed", lt > 4.6 && lt < 9, dx + g.cs * 0.5, dy - g.cs * 3.2, W * 0.86, g.bot * 0.45, "回收门暂停营业～", "say");
    const p1 = pos[3];
    say("stay", lt > 9.2 && !!p1, p1 ? p1.x : 0, p1 ? p1.y - g.cs * 3.2 : 0, W * 0.84, g.bot * 0.5, "那我在这儿多待一会儿！", "shout");
    ctx.restore();
  }

  // ---------- 第 2 幕：自身受体刹车 ----------
  function weekNow() { return clamp(1 + Math.floor((lt - 2.8) / 2.2), 1, 4); }
  function desens() { return prog(3, 8); } // 0：刹车踩住 → 1：自身受体脱敏，刹车松开
  function pedal(x, y, s, pressed) { // 刹车踏板
    ctx.save(); ctx.translate(x, y);
    outline(Math.max(1.5, s * 0.08));
    ctx.beginPath(); ctx.moveTo(0, -s * 0.9); ctx.lineTo(0, -s * 0.2); ctx.stroke();
    ctx.rotate(pressed * 0.5 - 0.1);
    rrect(-s * 0.55, -s * 0.2, s * 1.1, s * 0.5, s * 0.14); ctx.fillStyle = mix("#ffb3b3", "#c8efc8", 1 - pressed); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = alpha("#6d5760", 0.5); ctx.lineWidth = Math.max(1, s * 0.05);
    for (let k = -1; k <= 1; k++) { ctx.beginPath(); ctx.moveTo(k * s * 0.3, -s * 0.1); ctx.lineTo(k * s * 0.3, s * 0.2); ctx.stroke(); }
    ctx.restore();
    text("刹车", x, y + s * 0.85, fsz(0.03), pressed > 0.5 ? C.bad : C.good);
  }
  function autoView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#effaf5");
    Anima.petals(10, 0.5, 50);
    const d = desens(), brake = 1 - d;
    const top = H * 0.22, ch = H * 0.72, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "胞体（脑干中缝核）", "#ffe0d0");
    card(R.x, R.y, R.w, R.h, "末梢（突触）", "#d9f3ea");
    // 左：胞体
    const sr = Math.min(L.w * 0.15, H * 0.1);
    const sx = L.x + L.w * 0.6, sy = L.y + L.h * 0.74;
    // 右：末梢
    const tcx = R.x + R.w * 0.5, ty0 = R.y + R.h * 0.12, ttw = R.w * 0.7, tth = R.h * 0.34;
    // 轴突：从胞体通到末梢
    const ax = [[sx + sr * 0.9, sy - sr * 0.1], [L.x + L.w + gap / 2, sy - sr * 0.1], [L.x + L.w + gap / 2, ty0 - H * 0.03], [tcx, ty0 - H * 0.03], [tcx, ty0 + 6]];
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    for (const pr of [[H * 0.03, C.line], [H * 0.022, "#f3a996"]]) {
      ctx.strokeStyle = pr[1]; ctx.lineWidth = pr[0];
      ctx.beginPath(); ax.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke();
    }
    // 放电：刹车踩住时稀稀拉拉，松开后一个接一个
    const rate = lerp(0.18, 0.75, d);
    for (let k = 0; k < 3; k++) {
      const t = (time * rate + k / 3) % 1;
      if (k > 0 && d < 0.5 && k !== 0) continue;
      Anima.spark(ax, t, H * 0.022, C.gold);
    }
    // 胞体本体
    const g = ctx.createRadialGradient(sx - sr * 0.3, sy - sr * 0.3, sr * 0.1, sx, sy, sr);
    g.addColorStop(0, "#fff0ea"); g.addColorStop(1, C.soma);
    ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.5, sr * 0.04)); ctx.stroke();
    face(sx, sy + sr * 0.2, sr * 0.45, d > 0.55 ? 1 : -0.4);
    if (d < 0.4) emote("zzz", sx + sr * 0.6, sy - sr * 0.05, sr * 0.3);
    // 5-HT1A 自身受体：胞体顶上的门，旁边连着刹车踏板
    const rs = Math.min(H * 0.045, sr * 0.38);
    const rx = sx, ry = sy - sr;
    const recA = clamp(1 - d * 0.75, 0, 1); // 脱敏后变小、变灰
    ctx.save(); ctx.translate(rx, ry); ctx.scale(0.55 + recA * 0.45, 0.55 + recA * 0.45); ctx.translate(-rx, -ry);
    if (d > 0.5 && ctx.filter !== undefined) ctx.filter = "grayscale(0.7)";
    const rec = Anima.receptor(rx, ry, rs, "#f7a8c0", brake, { label: "5-HT1A" });
    ctx.filter = "none";
    ctx.restore();
    const pdx = sx - sr * 1.25, pdy = sy - sr * 0.55;
    pedal(pdx, pdy, Math.min(H * 0.05, L.w * 0.08), brake);
    ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.beginPath(); ctx.moveTo(rx - rs * 0.8, ry - rs * 0.6); ctx.lineTo(pdx + rs * 0.3, pdy - rs * 0.9); ctx.stroke(); ctx.restore();
    // 站在自身受体上的血清素（刹车踩住时），脱敏后离开
    const cs = Math.min(H * 0.036, L.w * 0.06);
    const siteY = ry - rs * 1.62 * (0.55 + recA * 0.45);
    ctx.save(); ctx.globalAlpha *= clamp(1 - (d - 0.45) * 3, 0, 1);
    chara(rx, siteY, cs, { who: "5HT", arms: "down", eyes: "open", mouth: "o", jump: 0 });
    ctx.restore();
    if (d > 0.5) {
      const p = clamp((d - 0.5) * 2.5, 0, 1);
      chara(rx + L.w * 0.22 * p, sy + sr * 1.1, cs, { who: "5HT", arms: "wave", eyes: "happy", walk: p < 1 ? time * 9 : null, alpha: clamp(p * 3, 0, 1) });
    }
    // 右：末梢和释放的血清素
    const T = Anima.terminal(tcx, ty0, ttw, tth, C.term);
    const my = R.y + R.h * 0.8;
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 20); ctx.clip();
    ctx.fillStyle = C.post; ctx.fillRect(R.x, my, R.w, R.h);
    ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(R.x, my); ctx.lineTo(R.x + R.w, my); ctx.stroke();
    const rxs = [R.x + R.w * 0.25, R.x + R.w * 0.5, R.x + R.w * 0.75];
    const nrel = 1 + Math.round(d * 4);
    rxs.forEach((x, i) => Anima.receptor(x, my, H * 0.035, C.rec, nrel > i + 1 ? 1 : 0.2, {}));
    const rcs = Math.min(H * 0.032, R.w * 0.05);
    for (let i = 0; i < nrel; i++) {
      const hx = i < 3 ? rxs[i] : R.x + R.w * (i === 3 ? 0.37 : 0.63), hy = i < 3 ? my - H * 0.035 * 1.62 : (T.bot + my) / 2 + Math.sin(time * 2 + i) * H * 0.01;
      chara(hx, hy, rcs, { who: "5HT", eyes: d > 0.5 ? "happy" : "open", arms: d > 0.5 ? "up" : "down", mouth: "grin", jump: d > 0.6 && i < 3 ? Math.abs(Math.sin(time * 4 + i)) * 0.2 : 0 });
    }
    if (d > 0.7) sparkles(R.x + R.w / 2, (T.bot + my) / 2, R.w * 0.35, 6, (d - 0.7) * 3, 4);
    // 周数进度条
    const bw = R.w * 0.7, bx = R.x + (R.w - bw) / 2, byy = R.y + R.h - H * 0.045;
    rrect(bx, byy - H * 0.012, bw, H * 0.024, H * 0.012); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
    rrect(bx, byy - H * 0.012, bw * (0.1 + d * 0.9), H * 0.024, H * 0.012); ctx.fillStyle = mix("#ffb3b3", "#8fdcc4", d); ctx.fill();
    const nar = narrow();
    callout("auto", lt > 1 && lt < (nar ? 4.4 : 8.5), rx + rs * 0.7, ry - rs * 0.9, L.x + L.w * 0.62, L.y + L.h * (nar ? 0.2 : 0.16), "5-HT1A 自身受体 = 刹车");
    callout("desens", lt > 9, rx + rs * 0.5, ry - rs * 0.4, L.x + L.w * 0.55, L.y + L.h * (nar ? 0.2 : 0.16), "几周后：自身受体脱敏、变少");
    say("brake", lt > (nar ? 4.6 : 1.2) && lt < (nar ? 8.8 : 6.8), sx - sr * 0.5, sy - sr * 0.3, L.x + L.w * 0.3, L.y + L.h * 0.3, "血清素一多，我先踩一脚刹车……", "think");
    say("go", lt > 9.5, tcx, T.bot, tcx, ty0 + tth * 0.45, "刹车松开，信终于多起来啦！", "shout");
    ctx.restore();
  }

  // ---------- 第 3 幕：副作用和疗效的时间线 ----------
  function icon(kind, x, y, r) {
    const lw = Math.max(1.4, r * 0.06);
    outline(lw);
    if (kind === "nausea") { // 晕乎乎的小胃
      ctx.beginPath(); ctx.ellipse(x, y, r * 0.42, r * 0.32, -0.3, 0, Math.PI * 2); ctx.fillStyle = "#d6f0c8"; ctx.fill(); ctx.stroke();
      face(x, y, r * 0.3, -1, false);
      ctx.beginPath(); ctx.arc(x + r * 0.45, y - r * 0.4, r * 0.1, 0, Math.PI * 1.5); ctx.stroke();
    } else if (kind === "food") {
      ctx.beginPath(); ctx.moveTo(x - r * 0.5, y - r * 0.05); ctx.quadraticCurveTo(x, y + r * 0.7, x + r * 0.5, y - r * 0.05); ctx.closePath();
      ctx.fillStyle = "#ffd3c4"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + r * 0.1, y - r * 0.2); ctx.lineTo(x + r * 0.5, y - r * 0.55); ctx.moveTo(x + r * 0.2, y - r * 0.15); ctx.lineTo(x + r * 0.58, y - r * 0.45); ctx.stroke();
    } else if (kind === "sleep") {
      ctx.beginPath(); ctx.arc(x - r * 0.1, y, r * 0.42, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x + r * 0.1, y - r * 0.12, r * 0.37, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
      text("z", x + r * 0.4, y - r * 0.35, r * 0.4, C.soft);
    } else if (kind === "heart") {
      Anima.heart(x - r * 0.05, y + r * 0.05, r * 0.4, "#f7b8c8");
      text("?", x + r * 0.4, y - r * 0.35, r * 0.4, C.lavDeep);
    } else if (kind === "anx") {
      Anima.sweat(x - r * 0.05, y - r * 0.4, r * 0.7);
    }
  }
  function tile(x, y, r, kind, label, a, ring) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.7 + 0.3 * Math.min(1, a * 1.5);
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
    ctx.restore();
  }
  function sun(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * 2.6, C.gold, 0.9);
    ctx.translate(x, y); ctx.rotate(time * 0.3);
    for (let i = 0; i < 10; i++) {
      ctx.rotate(Math.PI / 5);
      ctx.beginPath(); ctx.moveTo(-r * 0.16, -r * 1.12); ctx.lineTo(0, -r * 1.5); ctx.lineTo(r * 0.16, -r * 1.12); ctx.closePath();
      ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.5); ctx.stroke();
    }
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffe68a"; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.1, r * 0.55, 1);
    ctx.restore();
  }
  function lineView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f0", "#f3f0fd");
    Anima.bokeh(6, "#ffe3a8", 0.7, 17);
    const nar = narrow();
    const x0 = W * 0.07, x1 = W * 0.93, ly = nar ? H * 0.6 : H * 0.68, span = x1 - x0;
    // 时间线（一条小路）
    rrect(x0 - H * 0.02, ly - H * 0.018, span + H * 0.04, H * 0.036, H * 0.018); ctx.fillStyle = "#f3e3cf"; ctx.fill(); outline(1.8); ctx.stroke();
    const fs = fsz(0.03);
    for (let k = 0; k <= 6; k++) {
      const x = x0 + span * k / 6;
      ctx.beginPath(); ctx.arc(x, ly, Math.max(3, H * 0.008), 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      text(k === 0 ? "开始" : (nar ? k + "周" : "第 " + k + " 周"), x, ly + fs * 1.4, fs, C.soft);
    }
    // 走在路上的居民和药物访客
    const wp = clamp(lt / 12.5, 0, 1);
    const wx = x0 + span * 0.72 * wp;
    const week = wp * 0.72 * 6;
    const cs = H * 0.045;
    const good = week > 2.5;
    chara(wx, ly - H * 0.005, cs, { who: "neuron", walk: time * 7, eyes: good ? "happy" : week > 0.3 ? "sleepy" : "open", mouth: good ? "grin" : "wavy", arms: good ? "wave" : "down" });
    chara(wx - cs * 2.2, ly - H * 0.005, cs * 0.9, { who: "drug", label: "药", walk: time * 7 + 1, eyes: "happy", arms: "hold", mouth: "smile" });
    if (!good && week > 0.3) emote("sweat", wx + cs * 0.9, ly - cs * 3.2, cs * 0.6);
    // 副作用：先冒出来，其中很多会慢慢减轻
    const tr = Math.min(H * 0.065, W * 0.05);
    const SE = [["nausea", "恶心", 0.05, 0.3, true], ["food", "胃口", 0.16, 0.3, true], ["sleep", "睡眠", 0.27, 0.3, true], ["anx", "更焦虑", 0.1, 0.49, true], ["heart", "性功能", 0.22, 0.49, false]];
    SE.forEach((e, i) => {
      const appear = prog(0.6 + i * 0.5, 0.6);
      const fade = e[4] ? prog(7 + i * 0.4, 2) * 0.65 : 0;
      tile(x0 + span * e[2], H * (nar ? (e[3] > 0.4 ? 0.41 : 0.27) : e[3]), tr, e[0], e[1], appear * (1 - fade), "#f2b5c4");
    });
    // 疗效：太阳慢慢升起
    const sp = prog(5, 5);
    const sunX = x0 + span * 0.55, sunY = lerp(ly - H * 0.05, H * 0.34, sp);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, ly - H * 0.02); ctx.clip();
    sun(sunX, sunY, Math.min(H * 0.07, W * 0.05), sp > 0.02 ? 1 : 0);
    ctx.restore();
    callout("se", nar ? lt > 1.5 && lt < 4.5 : lt > 3, x0 + span * 0.27 + tr * 0.8, H * 0.3, x0 + span * 0.45, H * 0.2, "副作用：常常先到");
    callout("ben", lt > (nar ? 9 : 7.5), sunX + tr * 0.8, sunY, x0 + span * 0.8, H * 0.2, "疗效：一般 2～4 周开始");
    say("tell", nar ? lt > 4.6 && lt < 8.8 : lt > 2 && lt < 7.5, wx, ly - cs * 3.2, nar ? W * 0.7 : wx + W * 0.2, nar ? H * 0.36 : H * 0.44, "有点恶心……要告诉医生吗？", "think");
    say("warn", lt > (nar ? 9 : 7.8), wx, ly - cs * 3.2, W * 0.5, H * 0.9, "年轻人刚用药时，如果情绪变差、有轻生念头，请马上告诉家人和医生。", "box");
    ctx.restore();
  }

  // ---------- 第 4 幕：三种“堵门”方式 ----------
  function doorsView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6fbff", "#fdf0f5");
    Anima.petals(8, 0.5, 60);
    const gap = W * 0.025, cw = (W - gap * 4) / 3, top = H * 0.24, ch = H * 0.7;
    const D = [
      { name: "SSRI", block: [1, 0, 0], hat: "#8fdcc4" },
      { name: "SNRI", block: [1, 1, 0], hat: "#ec6470" },
      { name: "安非他酮", block: [0, 1, 1], hat: "#ff9a52" },
    ];
    const rows = [["5HT", "5-HT"], ["NE", "NE"], ["DA", "DA"]];
    const posDrug = [];
    D.forEach((d, i) => {
      const on = prog(0.4 + i * 2.6, 0.8);
      const x = gap + i * (cw + gap);
      posDrug.push(null);
      if (on < 0.02) return;
      ctx.save(); ctx.globalAlpha *= on; ctx.translate(0, (1 - on) * H * 0.05);
      card(x, top, cw, ch, d.name, mix(d.hat, "#ffffff", 0.55));
      const rs = Math.min(H * 0.042, cw * 0.1), cs = Math.min(H * 0.03, cw * 0.075);
      rows.forEach((r, k) => {
        const y = top + ch * (0.19 + k * 0.19);
        const bl = d.block[k] && lt > 0.4 + i * 2.6 + 1.2 + k * 0.3;
        Anima.transporter(x + cw * 0.52, y, rs, "#9fc3ea", bl ? 0 : time * 2 + k, bl);
        // 门外的快递员：门开着时被回收进去，被堵住时开心地留在外面
        if (bl) {
          chara(x + cw * 0.2, y + cs * 1.4, cs, { who: r[0], eyes: "happy", arms: "up", mouth: "grin", jump: Math.abs(Math.sin(time * 4 + k + i)) * 0.2 });
        } else {
          const t = (time * 0.35 + k * 0.3 + i * 0.2) % 1;
          chara(lerp(x + cw * 0.18, x + cw * 0.46, t), y + cs * 1.4, cs, { who: r[0], walk: time * 9, eyes: "open", alpha: 1 - ease((t - 0.7) / 0.3) });
        }
        text(r[1], x + cw * 0.84, y, fsz(0.03), Anima.CAST[r[0]].eye);
      });
      const dcs = Math.min(H * 0.042, cw * 0.1);
      const dx = x + cw * 0.5, dy = top + ch * 0.94;
      chara(dx, dy, dcs, { who: "drug", label: d.name, hatColor: d.hat, eyes: "happy", arms: lt > 0.4 + i * 2.6 + 1.5 ? "fist" : "wave", mouth: "grin" });
      posDrug[i] = { x: dx, y: dy - dcs * 3.2 };
      ctx.restore();
    });
    const g1 = posDrug[1], g2 = posDrug[2];
    callout("tape", lt > 2 && lt < 6.5, gap + cw * 0.52 + Math.min(H * 0.042, cw * 0.1) * 0.95, top + ch * 0.19 + Math.min(H * 0.042, cw * 0.1) * 0.2, gap + cw * 0.5, H * 0.13, "被堵住的门：递质留得更久");
    say("snri", lt > 4.2 && lt < 7.6 && !!g1, g1 ? g1.x : 0, g1 ? g1.y : 0, g1 ? g1.x + cw * 0.3 : 0, top + ch * 0.72, "两扇门我都管！", "say");
    say("bup", lt > 8 && !!g2, g2 ? g2.x : 0, g2 ? g2.y : 0, g2 ? g2.x - cw * 0.35 : 0, top + ch * 0.72, "我管去甲和多巴胺～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：MAOI 让清扫员停工 ----------
  function cheese(x, y, s) {
    ctx.beginPath(); ctx.moveTo(x - s, y + s * 0.5); ctx.lineTo(x + s, y + s * 0.5); ctx.lineTo(x + s, y - s * 0.1); ctx.lineTo(x - s, y + s * 0.05); ctx.closePath();
    ctx.fillStyle = "#ffe08a"; ctx.fill(); outline(Math.max(1.5, s * 0.06)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - s, y + s * 0.05); ctx.lineTo(x + s * 0.2, y - s * 0.55); ctx.lineTo(x + s, y - s * 0.1); ctx.closePath(); ctx.fillStyle = "#fff0b3"; ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#f1c65a";
    for (const h of [[-0.5, 0.25, 0.14], [0.2, 0.3, 0.1], [0.6, 0.12, 0.12], [-0.05, 0.1, 0.08]]) { ctx.beginPath(); ctx.arc(x + h[0] * s, y + h[1] * s, h[2] * s, 0, Math.PI * 2); ctx.fill(); }
  }
  function sign(x, y, s, t) { // 小立牌
    outline(Math.max(1.4, s * 0.05));
    ctx.beginPath(); ctx.moveTo(x - s * 0.4, y); ctx.lineTo(x - s * 0.2, y - s * 0.9); ctx.moveTo(x + s * 0.4, y); ctx.lineTo(x + s * 0.2, y - s * 0.9); ctx.stroke();
    rrect(x - s * 0.75, y - s * 1.55, s * 1.5, s * 0.8, s * 0.12); ctx.fillStyle = "#fff4c2"; ctx.fill(); ctx.stroke();
    text(t, x, y - s * 1.15, s * 0.36, C.bad);
  }
  function maoView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff4ef"); bg.addColorStop(1, "#f7effd");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#ffd1dc", 0.8, 70);
    const nar = narrow();
    const cx = nar ? W * 0.33 : W * 0.32, tw = Math.min(W * (nar ? 0.62 : 0.56), H * 1.0), th = H * 0.84;
    const T = Anima.terminal(cx, 0, tw, th, C.term);
    const floor = th * 0.9;
    const off = lt > 4.5; // 停工
    const cs = Math.min(H * 0.05, tw * 0.08);
    // 清扫员
    const mx = cx - tw * 0.18, my = floor;
    chara(mx, my, cs, { who: "MAO", item: off ? null : "broom", arms: off ? "hug" : "hold", eyes: off ? "closed" : "open", mouth: off ? "cat" : "smile", bob: off ? 0.3 : 1 });
    if (off) {
      emote("zzz", mx + cs * 0.8, my - cs * 3.2, cs * 0.8);
      // 扫帚靠在一边
      ctx.save(); ctx.translate(mx - cs * 1.4, my); ctx.rotate(-0.25);
      ctx.strokeStyle = "#b07a4a"; ctx.lineWidth = Math.max(2, cs * 0.1); ctx.beginPath(); ctx.moveTo(0, -cs * 2.4); ctx.lineTo(0, -cs * 0.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-cs * 0.1, -cs * 0.55); ctx.lineTo(-cs * 0.35, 0); ctx.lineTo(cs * 0.35, 0); ctx.lineTo(cs * 0.1, -cs * 0.55); ctx.closePath(); ctx.fillStyle = "#f3d58a"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
      const sp = prog(4.8, 0.6);
      ctx.save(); ctx.globalAlpha *= sp;
      sign(mx - cs * 2.9, my, cs * 1.2, "停工中");
      ctx.restore();
    } else {
      // 还在上班：把多余的递质分解掉
      const k = Math.floor(lt / 1.4) % 3, p = (lt % 1.4) / 1.4;
      const x = mx - cs * 1.7, y = my - cs * 0.1;
      ctx.save(); ctx.globalAlpha *= 1 - p;
      chara(x, y - p * cs, cs * 0.65, { who: ["5HT", "NE", "DA"][k], eyes: "dizzy", mouth: "o", shadow: false, bob: 0 });
      ctx.restore();
      sparkle(x, y - cs * 2.4 - p * cs, cs * 0.4, 1 - p);
      emote("sweat", mx + cs * 0.9, my - cs * 3.1, cs * 0.55);
    }
    // MAOI 访客
    const dp = prog(2.2, 1.8);
    const dx = lerp(cx + tw * 0.55, cx + tw * 0.05, dp);
    chara(dx, floor, cs, { who: "drug", label: "MAOI", hatColor: "#b8b0f0", walk: dp < 1 ? time * 9 : null, dir: -1, arms: off ? "shh" : "down", eyes: off ? "happy" : "open", alpha: clamp(dp * 3, 0, 1) });
    // 堆起来的单胺快递员：停工以后越来越多
    const nMore = off ? Math.min(6, 3 + Math.floor((lt - 4.8) / 0.8)) : 2;
    const who = ["5HT", "NE", "DA"];
    for (let i = 0; i < nMore; i++) {
      const p = i < 2 ? 1 : prog(4.8 + (i - 2) * 0.8, 0.8);
      const hx = cx + tw * (0.02 + (i % 3) * 0.13) + (i >= 3 ? tw * 0.065 : 0), hy = th * (i >= 3 ? 0.5 : 0.68);
      chara(hx, lerp(hy + H * 0.05, hy, p), cs * 0.72, { who: who[i % 3], eyes: "happy", arms: "up", mouth: "grin", alpha: p, jump: Math.abs(Math.sin(time * 4 + i)) * 0.15 });
    }
    if (nMore > 3) sparkles(cx + tw * 0.15, th * 0.55, tw * 0.25, 5, 0.9, 8);
    // 右：忌口卡片
    const kx = nar ? W * 0.66 : W * 0.64, kw = W * 0.97 - kx, ky = H * 0.24, kh = H * 0.62;
    const kon = prog(7, 0.9);
    if (kon > 0.02) {
      ctx.save(); ctx.globalAlpha *= kon; ctx.translate(0, (1 - kon) * H * 0.04);
      card(kx, ky, kw, kh, "⚠ 用 MAOI 时", "#ffe0e6");
      const cz = Math.min(kw * 0.22, H * 0.08);
      cheese(kx + kw * 0.5, ky + kh * 0.28, cz);
      // 禁止符号
      ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(3, cz * 0.12);
      ctx.beginPath(); ctx.arc(kx + kw * 0.5, ky + kh * 0.27, cz * 1.25, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(kx + kw * 0.5 - cz * 0.88, ky + kh * 0.27 - cz * 0.88); ctx.lineTo(kx + kw * 0.5 + cz * 0.88, ky + kh * 0.27 + cz * 0.88); ctx.stroke();
      const fs = fsz(0.032);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const L1 = Anima.wrapText(nar ? "忌口：陈年奶酪等含酪胺的食物" : "严格忌口：陈年奶酪等富含酪胺的食物", kw * 0.86);
      const L2 = Anima.wrapText(nar ? "当心药物相互作用" : "当心药物相互作用：用别的药之前先问医生", kw * 0.86);
      let yy = ky + kh * 0.6;
      L1.forEach((l) => { text(l, kx + kw * 0.5, yy, fs, C.ink); yy += fs * 1.35; });
      yy += fs * 0.6;
      L2.forEach((l) => { text(l, kx + kw * 0.5, yy, fs, C.ink); yy += fs * 1.35; });
      ctx.restore();
    }
    callout("mao", lt > 0.6 && lt < 4.4, mx, my - cs * 2.4, mx + tw * 0.1, th + H * 0.07, "单胺氧化酶（MAO）：清扫员");
    callout("maoi", lt > 5.5, dx, floor - cs * 1.8, dx + tw * 0.05, th + H * 0.07, "MAOI：让清扫员停工");
    say("shh", lt > 4.6 && lt < 8.5, dx, floor - cs * 3.2, dx + tw * 0.08, th * 0.32, "嘘——今天先休息吧", "say");
    say("more", lt > 8.8, cx + tw * 0.1, th * 0.45, cx + tw * 0.05, th * 0.28, "没人分解我们，越来越多啦！", "shout");
    ctx.restore();
  }

  // ---------- 第 6 幕：用药小约定 ----------
  function check(x, y, s, p) {
    rrect(x - s / 2, y - s / 2, s, s, s * 0.2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    if (p <= 0) return;
    ctx.save(); ctx.strokeStyle = C.good; ctx.lineWidth = Math.max(2.5, s * 0.16); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x - s * 0.3, y);
    const p1 = Math.min(1, p * 2), p2 = clamp(p * 2 - 1, 0, 1);
    ctx.lineTo(x - s * 0.3 + s * 0.22 * p1, y + s * 0.25 * p1);
    if (p2 > 0) ctx.lineTo(x - s * 0.08 + s * 0.45 * p2, y + s * 0.25 - s * 0.6 * p2);
    ctx.stroke(); ctx.restore();
  }
  function noteView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f2", "#eef9f4");
    Anima.bokeh(6, "#ffd1dc", 0.8, 25);
    Anima.petals(12, 0.7, 40);
    const nar = narrow();
    const nx = W * 0.04, nw = W * (nar ? 0.92 : 0.58), ny = H * 0.22, nh = H * 0.72;
    // 笔记本
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 16; ctx.shadowOffsetY = 5;
    rrect(nx, ny, nw, nh, 16); ctx.fillStyle = "#fffdf5"; ctx.fill();
    ctx.restore();
    outline(2); rrect(nx, ny, nw, nh, 16); ctx.stroke();
    ctx.save(); rrect(nx, ny, nw, nh, 16); ctx.clip();
    ctx.fillStyle = "#ffe0e6"; ctx.fillRect(nx, ny, nw * 0.06, nh);
    ctx.restore();
    for (let k = 0; k < 5; k++) { ctx.beginPath(); ctx.arc(nx + nw * 0.03, ny + nh * (0.12 + k * 0.19), Math.max(3, H * 0.009), 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke(); }
    const fsT = fsz(0.042);
    text("用药小约定", nx + nw * 0.53, ny + fsT * 1.2, fsT, C.rose);
    const items = [
      "用够剂量、用够时间，别太早放弃",
      "好转以后继续用一段时间，防复发",
      "别自己突然停药：可能头晕、“过电感”",
      "减药换药找医生商量；心理治疗也重要",
    ];
    const fs = nar ? fsz(0.034) : fsz(0.044), bs = fs * 1.1;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tx = nx + nw * 0.1 + bs * 1.4, maxW = nx + nw - tx - nw * 0.04;
    let y = ny + fsT * (nar ? 2.6 : 3.3);
    items.forEach((it, i) => {
      const on = prog(0.8 + i * 2, 0.6);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const L = Anima.wrapText(it, maxW);
      ctx.save(); ctx.globalAlpha *= 0.25 + on * 0.75;
      check(nx + nw * 0.1 + bs * 0.4, y + fs * 0.1, bs, prog(1.4 + i * 2, 0.6));
      L.forEach((l, k) => text(l, tx, y + k * fs * 1.35, fs, C.ink, "left"));
      ctx.restore();
      y += L.length * fs * 1.35 + fs * (nar ? 0.7 : 1.3);
    });
    // 右边：大家一起加油
    if (nar) { // 手机上笔记本占满宽度，角色缩到右下角
      const c2 = H * 0.032;
      chara(nx + nw - c2 * 1.6, ny + nh - H * 0.02, c2, { who: "5HT", eyes: "happy", arms: lt > 8 ? "up" : "wave", mouth: "grin" });
      if (lt > 8) sparkles(nx + nw - c2 * 1.6, ny + nh - c2 * 2, c2 * 2.5, 5, 1, 9);
      ctx.restore();
      return;
    }
    const gx = nx + nw + (W - nx - nw) / 2, gy = H * 0.9, cs = Math.min(H * 0.055, (W - nx - nw) * 0.11);
    chara(gx - cs * 2.2, gy, cs, { who: "drug", label: "药", eyes: "happy", arms: "wave", mouth: "grin" });
    chara(gx + cs * 2.2, gy, cs, { who: "5HT", eyes: "happy", arms: lt > 8 ? "up" : "hold", item: lt > 8 ? null : "letter", mouth: "grin", jump: lt > 8 ? Math.abs(Math.sin(time * 4)) * 0.2 : 0 });
    chara(gx, gy + H * 0.02, cs * 0.9, { who: "pump", eyes: "happy", arms: "fist", mouth: "smile" });
    if (lt > 8) sparkles(gx, gy - cs * 2, cs * 3, 6, 1, 9);
    say("together", lt > 1 && lt < 7.5, gx - cs * 2.2, gy - cs * 3.2, gx - cs * 0.5, H * 0.4, "有任何不舒服，都可以和医生说哦～", "say");
    say("slowly", lt > 7.8, gx + cs * 2.2, gy - cs * 3.2, gx + cs * 0.3, H * 0.4, "我们一起慢慢来！", "shout");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 0) { v1 = lt > 5 ? "变多 ↑" : "正常"; v2 = lt > 4.2 ? "暂停" : "营业中"; }
    if (cur === 1) { const d = desens(); v1 = d < 0.35 ? "踩住" : d < 0.85 ? "慢慢松开" : "松开啦"; v2 = "第 " + weekNow() + " 周"; }
    if (cur === 4) { v1 = lt > 4.5 ? "停工中" : "上班中"; }
    pill(14, 12, c.pill[0], v1, "#3fb08f", false);
    pill(W - 14, 12, c.pill2[0], v2, C.rose, true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.syn > 0.02) synView(S.syn);
    if (S.auto > 0.02) autoView(S.auto);
    if (S.line > 0.02) lineView(S.line);
    if (S.doors > 0.02) doorsView(S.doors);
    if (S.mao > 0.02) maoView(S.mao);
    if (S.note > 0.02) noteView(S.note);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#8fdcc4",
    titleCard: { lines: ["回收站", "暂停营业"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
