Anima.register("hallucinogens", {
    "title": "致幻剂和分离性物质：两种扭曲",
    "tag": "成瘾",
    "headline": "世界为什么会【扭曲】？",
    "lede": "有的物质按住皮层的 5-HT2A 按钮不放，让丘脑的过滤器放行太多信息；有的堵住 NMDA 受体，让感觉和“我”断了线；摇头丸则让 5-HT 的回收门反着转。看懂它们各自扭曲了哪里，也就明白它们的代价从哪里来。",
    "summary": "LSD、裸盖菇素、麦司卡林激动 5-HT2A，丘脑过滤器放行过多；氯胺酮、PCP 阻断 NMDA 带来分离；MDMA 让 5-HT 转运体反转，以及体温过高、低钠、情绪低落、坏旅程、诱发精神病和闪回等风险。",
    "chapter": "对应 Stahl《精神药理学精要》第 13 章 · 致幻剂与“派对药”",
    "footer": "如果自己或身边的人用了这类物质后出现高热、意识不清、惊恐或伤害自己的念头，请立刻拨打急救电话；想停用可以向精神科或成瘾医学科求助。",
    "canvasLabel": "致幻剂访客按住锥体神经元上的 5-HT2A 按钮、丘脑过滤器被撑开、氯胺酮堵住 NMDA 通道让人和身体脱节、MDMA 让回收门反着转的动画",
    "regions": ["pfc"],
    "parts": ["addiction"],
    "cast": ["5HT", "Glu", "NE", "DA", "drug"],
    "color": "#c6a7e8"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0 };
  const view = (k) => { const o = Object.assign({}, V0); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "按住 5-HT2A 不放",
      pill: ["5-HT2A", "轻按"], pill2: ["谷氨酸", "平稳"],
      text: "经典致幻剂，比如 LSD、迷幻蘑菇里的裸盖菇素、仙人掌里的麦司卡林，长得都有点像 5-HT。它们坐上大脑皮层锥体神经元的 5-HT2A 按钮，按得又重又久：平时轻轻一按的按钮被一直按住，锥体神经元兴奋过头，放出大量谷氨酸，把消息一股脑地传向下游。",
      fact: "LSD、裸盖菇素、麦司卡林等经典致幻剂，主要是 5-HT2A 受体的强效激动剂" }, view("v0")),
    Object.assign({ title: "过滤器放行太多",
      pill: ["丘脑过滤器", "正常"], pill2: ["皮层画面", "清楚"],
      text: "平时，丘脑像一道过滤器：眼睛、耳朵和身体送来的海量信息，它只放一小部分重要的进入皮层，世界才显得有条理。一种模型认为，致幻剂让皮层过度兴奋，再经过皮层—纹状体—丘脑的回路把过滤器“撑松”，太多信息一起涌进来：颜色流动、图案变形，时间好像变慢或停住。",
      fact: "丘脑门控模型：过滤器放行过多信息 → 知觉扭曲（这仍是一种假说）" }, view("v1")),
    Object.assign({ title: "分离：和身体断了线",
      pill: ["NMDA", "被堵住"], pill2: ["感觉", "脱节"],
      text: "氯胺酮和苯环己哌啶（PCP）走的是另一条路：它们钻进 NMDA 受体的通道，把门堵住，谷氨酸再敲门，离子也进不去。把感觉、身体和“我”连在一起的线路像是断了线，人会觉得自己飘在身体外面，周围隔着一层玻璃，这叫分离。用得多时还可能意识模糊、动弹不得，或出现类似精神病的表现。",
      fact: "氯胺酮、PCP 等分离性物质阻断 NMDA 受体，让感觉和自我“脱节”" }, view("v2")),
    Object.assign({ title: "MDMA 让回收门反着转",
      pill: ["回收门", "往里收"], pill2: ["5-HT", "正常"],
      text: "MDMA，俗称摇头丸，不去按门，而是钻进 5-HT 的回收门，也就是转运体，让它反着转：本来往里收的门，拼命把 5-HT 往外送，间隙里一下子涌满了 5-HT，也会放出一些去甲肾上腺素和多巴胺。人会觉得特别亲近、想和人拥抱、精力旺盛，而这种“亲近感”正是它危险的诱惑。",
      fact: "MDMA 让 5-HT 转运体反向转运，大量释放 5-HT，也释放 NE 和 DA" }, view("v3")),
    Object.assign({ title: "透支之后",
      pill: ["当晚", "体温升高"], pill2: ["几天后", "情绪低落"],
      text: "这份亲近是透支来的。当晚，体温可能越升越高，加上长时间跳舞、出汗脱水，严重时会危及生命；可一口气喝太多水，又可能让血液里的钠被冲得太稀。几天后，5-HT 的库存被掏空，人常常情绪低落、烦躁、睡不好。动物实验提示，反复使用可能损伤 5-HT 神经末梢，人身上的证据还在研究。",
      fact: "MDMA 的风险：体温过高、脱水或低钠、事后情绪低落；反复使用可能损伤 5-HT 末梢" }, view("v4")),
    Object.assign({ title: "难以预料的代价",
      pill: ["风险", "难预料"], pill2: ["研究用途", "严格医疗"],
      text: "致幻剂和分离性物质的风险很难预料：知觉扭曲时，可能做出危险的事，比如走上马路；可能陷入惊恐的“坏旅程”；对有精神病易感性的人，可能诱发精神病；有人停用很久以后，眼前还会突然闪回当时的扭曲画面。科学家正在严格的医疗条件下研究其中一些物质的治疗用途，这不是自己尝试的理由。",
      fact: "风险：危险行为、坏旅程、诱发精神病、闪回；研究中的治疗只在严格医疗条件下" }, view("v4")),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { pyr: "#ffd9c7", dend: "#f7b9a8", term: "#d9f2e8", post: "#ffe0ea", nmda: "#ffd27a", screen: "#fffdf8" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function update() { lt = Anima.sceneTime; }
  const LSD = { who: "drug", hatColor: "#c6a7e8", hatColor2: "#fff3a8" };

  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 16); ctx.stroke();
    const fs = fsz(0.028);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.2;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }

  // ---------- 第 1 幕：锥体神经元和 5-HT2A 按钮 ----------
  function pyrView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f2ff", "#fdeef3");
    Anima.bokeh(6, "#e3d6fb", 0.8, 12);
    const drug = prog(4, 1.5);
    const X = W * (n ? 0.5 : 0.46), SY = H * 0.66, sr = H * 0.1, dTop = top + H * 0.06;
    const shake = drug > 0.5 ? Math.sin(time * 30) * H * 0.003 : 0;
    // 树突和轴突
    ctx.lineCap = "round";
    for (const [w, col] of [[H * 0.03, C.line], [H * 0.02, C.dend]]) {
      ctx.strokeStyle = col; ctx.lineWidth = w;
      ctx.beginPath(); ctx.moveTo(X + shake, SY - sr * 0.8); ctx.lineTo(X + shake, dTop); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(X, SY + sr * 0.4); ctx.quadraticCurveTo(X + W * 0.05, H * 0.9, X + W * 0.3, H * 0.9); ctx.stroke();
    }
    // 胞体（三角形）
    glow(X, SY, sr * 2.2, C.gold, 0.25 + drug * (0.5 + 0.2 * Math.sin(time * 10)));
    ctx.beginPath(); ctx.moveTo(X + shake, SY - sr * 1.1); ctx.lineTo(X + sr * 1.05 + shake, SY + sr * 0.6); ctx.lineTo(X - sr * 1.05 + shake, SY + sr * 0.6); ctx.closePath();
    ctx.fillStyle = mix(C.pyr, "#ffc07a", drug * 0.6); ctx.fill(); outline(2); ctx.stroke();
    face(X + shake, SY + sr * 0.1, sr * 0.4, drug > 0.5 ? -1 : 1);
    if (drug > 0.5) { sfx("嗡嗡嗡！", X + sr * 1.8, SY - sr * 0.4, H * 0.036, C.bad, -0.1, 1); Anima.speedLines(X, SY, sr * 1.6, 12, 0.5); }
    // 5-HT2A 按钮（在树突左侧）
    const bx = X - H * 0.035, by = H * 0.36, br = H * 0.032;
    const press5 = !drug && ((lt % 2.2) < 0.7);
    const pressed = drug > 0.3 ? 1 : press5 ? 0.5 : 0;
    glow(bx - br, by, br * 3, C.gold, pressed);
    rrect(bx - br * 1.2, by - br * 1.1, br * 1.2, br * 2.2, br * 0.3); ctx.fillStyle = "#e9e1f7"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(bx - br * 1.2 - (1 - pressed) * br * 0.35, by, br * 0.75, 0, Math.PI * 2); ctx.fillStyle = mix("#bfe8d6", "#ff9a52", pressed); ctx.fill(); outline(1.8); ctx.stroke();
    const px = bx - br * 2.3;
    // 5-HT 平时轻轻按一下就走；致幻剂来了以后一直按着
    if (drug < 0.5) {
      const k = (lt % 2.2) / 2.2, near = k < 0.35;
      chara(px - (near ? 0 : (k - 0.35) * H * 0.3), by + H * 0.1, H * 0.034, { who: "5HT", arms: near ? "point" : "down", dir: 1, eyes: "happy", walk: near ? null : time * 9, alpha: 1 - drug * 2, shadow: false });
    }
    if (lt > 3) {
      const q = prog(3, 1.2);
      chara(lerp(-H * 0.1, px, q), by + H * 0.1, H * 0.036, Object.assign({}, LSD, { tag: "LSD", arms: q >= 1 ? "fist" : "down", walk: q < 1 ? time * 9 : null, eyes: q >= 1 ? "angry" : "open", mouth: "grin", dir: 1, shadow: false }));
    }
    // 另外两位经典致幻剂在旁边排队
    const others = [["裸盖菇素", "#d9b38c"], ["麦司卡林", "#9ed49a"]];
    others.forEach((o, i) => {
      const q = prog(5 + i * 0.8, 1.2);
      if (q <= 0) return;
      chara(lerp(-H * 0.1, W * (n ? 0.1 : 0.12) + i * W * (n ? 0.21 : 0.1), q), H * 0.9, H * 0.034, Object.assign({}, LSD, { hatColor: o[1], tag: o[0], walk: q < 1 ? time * 9 : null, eyes: "open", shadow: false }));
    });
    // 谷氨酸从轴突末端涌出
    const nG = drug > 0.5 ? 6 : 2;
    for (let k = 0; k < nG; k++) {
      const t = (time * 0.3 + k / nG) % 1;
      chara(X + W * 0.3 + t * W * 0.2, H * 0.9 - H * 0.02, H * 0.028, { who: "Glu", walk: time * 9 + k, alpha: Math.sin(t * Math.PI), eyes: drug > 0.5 ? "wide" : "happy", arms: drug > 0.5 ? "up" : "down", shadow: false });
    }
    plate(n ? "锥体神经元" : "皮层锥体神经元", X + sr * 1.9, SY + sr * 0.5, fsz(0.026), "#fff1e4");
    callout("btn", lt > 0.8 && lt < 5, bx - br, by - br, n ? W * 0.28 : W * 0.3, top + H * 0.06, "5-HT2A：兴奋按钮");
    callout("glu", lt > 7.5, X + W * 0.35, H * 0.87, n ? W * 0.72 : W * 0.78, H * 0.62, "大量谷氨酸涌向下游");
    say("hold", lt > 5 && lt < 10, px, by + H * 0.1 - H * 0.12, n ? W * 0.72 : W * 0.72, top + H * 0.1, "我按住就不松手！", "shout");
    ctx.restore();
  }

  // ---------- 第 2 幕：丘脑过滤器 ----------
  function tokenShape(k, x, y, r, a) {
    if (a < 0.02) return;
    const cols = ["#f28ca5", "#6fb9e0", "#ffc94d", "#4fb893", "#8f84e0"];
    ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = cols[k % 5];
    ctx.beginPath();
    if (k % 3 === 0) ctx.arc(x, y, r, 0, Math.PI * 2);
    else if (k % 3 === 1) ctx.rect(x - r * 0.85, y - r * 0.85, r * 1.7, r * 1.7);
    else { ctx.moveTo(x, y - r); ctx.lineTo(x + r, y + r * 0.8); ctx.lineTo(x - r, y + r * 0.8); ctx.closePath(); }
    ctx.fill(); ctx.strokeStyle = alpha(C.line, 0.6); ctx.lineWidth = 1; ctx.stroke();
    ctx.restore();
  }
  function senseIcon(kind, x, y, r) {
    ctx.save(); outline(1.8); ctx.fillStyle = "#fff";
    if (kind === 0) { ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.6, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y, r * 0.35, 0, Math.PI * 2); ctx.fillStyle = C.skyDeep; ctx.fill(); }
    else if (kind === 1) { ctx.beginPath(); ctx.arc(x, y, r * 0.8, -Math.PI * 0.6, Math.PI * 0.7); ctx.quadraticCurveTo(x - r * 0.3, y + r * 0.5, x - r * 0.2, y + r * 0.1); ctx.fillStyle = "#ffe0cc"; ctx.fill(); ctx.stroke(); }
    else { rrect(x - r * 0.6, y - r * 0.2, r * 1.2, r * 0.9, r * 0.3); ctx.fillStyle = "#ffe0cc"; ctx.fill(); ctx.stroke(); for (let k = 0; k < 4; k++) { rrect(x - r * 0.55 + k * r * 0.3, y - r * 0.8, r * 0.24, r * 0.7, r * 0.12); ctx.fill(); ctx.stroke(); } }
    ctx.restore();
  }
  function filterView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f3ff", "#fff0f5");
    const open = prog(4, 2.5); // 过滤器被撑松
    const gx = W * (n ? 0.36 : 0.38), gy0 = top + H * 0.08, gy1 = H * 0.94, gc = (gy0 + gy1) / 2;
    const sx = W * 0.07, ys = [gc - H * 0.22, gc, gc + H * 0.22];
    ys.forEach((y, k) => senseIcon(k, sx, y, H * 0.045));
    // 屏幕（皮层看到的世界）
    const scx = W * (n ? 0.5 : 0.52), scw = W * (n ? 0.46 : 0.44), scy = top + H * 0.1, sch = H * 0.62;
    rrect(scx, scy, scw, sch, 16); ctx.fillStyle = C.screen; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); rrect(scx, scy, scw, sch, 16); ctx.clip();
    const mx = scx + scw / 2, my = scy + sch / 2;
    if (open > 0.05) { // 旋转流动的颜色
      for (let k = 0; k < 7; k++) {
        const q = time * 0.8 + k * 0.9;
        ctx.save(); ctx.globalAlpha *= open * 0.35;
        ctx.strokeStyle = ["#f28ca5", "#6fb9e0", "#ffc94d", "#4fb893", "#8f84e0", "#ff9a52", "#b98ad8"][k]; ctx.lineWidth = H * 0.04;
        ctx.beginPath(); ctx.arc(mx, my, H * (0.06 + k * 0.045), q, q + 2.2); ctx.stroke(); ctx.restore();
      }
    }
    // 一朵花和一只钟：正常时端端正正，扭曲时变形、指针乱转
    const wv = open * Math.sin(time * 3) * 0.3;
    const fx = mx - scw * 0.2, fy = my + sch * 0.12;
    ctx.save(); ctx.translate(fx, fy); ctx.scale(1 + wv, 1 - wv * 0.7); ctx.rotate(open * Math.sin(time * 1.3) * 0.4);
    for (let k = 0; k < 5; k++) { const q = k * Math.PI * 2 / 5; ctx.beginPath(); ctx.arc(Math.cos(q) * H * 0.035, Math.sin(q) * H * 0.035, H * 0.03, 0, Math.PI * 2); ctx.fillStyle = "#ffc2d1"; ctx.fill(); outline(1.4); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(0, 0, H * 0.022, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.restore();
    const kx = mx + scw * 0.2, ky = my - sch * 0.1, kr = H * 0.06;
    ctx.save(); ctx.translate(kx, ky); ctx.scale(1 - wv * 0.5, 1 + wv);
    ctx.beginPath(); ctx.arc(0, 0, kr, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.8); ctx.stroke();
    const spin = open > 0.5 ? time * 0.4 : time * 0.05;
    ctx.strokeStyle = C.line; ctx.lineWidth = 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spin * 2) * kr * 0.75, Math.sin(spin * 2) * kr * 0.75); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spin * 0.3 - 1) * kr * 0.5, Math.sin(spin * 0.3 - 1) * kr * 0.5); ctx.stroke();
    ctx.restore();
    ctx.restore();
    plate("皮层看到的世界", mx, scy + sch + fsz(0.026) * 1.2, fsz(0.026), "#fff1e4");
    // 信息小块：从感官流向过滤器，能过去的进屏幕
    for (let k = 0; k < 18; k++) {
      const lane = k % 3, t = (time * 0.18 + rnd(k) ) % 1;
      const pass = open > 0.5 ? k % 3 !== 2 : k % 6 === 0;
      const y0 = ys[lane];
      if (t < 0.5) {
        const u = t / 0.5;
        tokenShape(k, lerp(sx + H * 0.06, gx - H * 0.03, u), lerp(y0, gc + (lane - 1) * H * 0.12 * (1 - open * 0.3), u), H * 0.014, 1);
      } else if (pass) {
        const u = (t - 0.5) / 0.5;
        tokenShape(k, lerp(gx + H * 0.03, scx + scw * 0.2 + rnd(k + 5) * scw * 0.6, u), lerp(gc + (lane - 1) * H * 0.05, scy + sch * (0.2 + rnd(k + 7) * 0.6), u), H * 0.014, u < 0.85 ? 1 : (1 - u) / 0.15);
      } else if (t < 0.6) {
        tokenShape(k, gx - H * 0.03, gc + (lane - 1) * H * 0.12, H * 0.014, 1 - (t - 0.5) / 0.1);
      }
    }
    // 过滤器：一道墙，中间的门缝会被撑大
    const gap = H * (0.05 + open * 0.2);
    for (const [y0, y1] of [[gy0, gc - gap / 2], [gc + gap / 2, gy1]]) {
      rrect(gx - H * 0.025, y0, H * 0.05, y1 - y0, 8); ctx.fillStyle = "#d9d0ea"; ctx.fill(); outline(1.8); ctx.stroke();
    }
    chara(gx, gc - gap / 2 - H * 0.01, H * 0.036, { who: "neuron", hair: "#8f86e2", cloth: "#e4e0ff", tag: "丘脑", eyes: open > 0.5 ? "dizzy" : "open", mouth: open > 0.5 ? "wavy" : "smile", arms: open > 0.5 ? "up" : "hold", shadow: false });
    // 皮层过度兴奋，反过来把过滤器撑松
    if (open > 0.1) {
      ctx.save(); ctx.globalAlpha *= open; ctx.setLineDash([6, 6]); ctx.strokeStyle = C.bad; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(scx + scw * 0.3, scy + sch); ctx.quadraticCurveTo(scx, H * 0.95, gx + H * 0.03, gc + gap / 2 + H * 0.04); ctx.stroke(); ctx.restore();
    }
    callout("gate", lt > 0.8 && lt < 4.5, gx + H * 0.025, gy0 + H * 0.1, n ? W * 0.3 : W * 0.3, top + H * 0.02, "丘脑：只放重要的进去");
    callout("loop", lt > 5.5 && lt < 10, scx + scw * 0.1, H * 0.9, n ? W * 0.7 : W * 0.74, H * 0.87, "皮层→纹状体→丘脑：撑松过滤器");
    say("wow", lt > 9, mx, my, n ? W * 0.72 : W * 0.74, scy + H * 0.05, "颜色在流动，时间停住了……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：NMDA 被堵住，人和身体脱节 ----------
  function nmdaView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f3f7ff", "#fbeff6");
    const blk = prog(3, 1.5);
    // 左：NMDA 受体特写
    const lx = W * (n ? 0.25 : 0.24), my = H * 0.6, rs = H * 0.07;
    ctx.fillStyle = "#ffe8ef"; ctx.fillRect(0, my, W * (n ? 0.5 : 0.48), H - my); outline(2); ctx.beginPath(); ctx.moveTo(0, my); ctx.lineTo(W * (n ? 0.5 : 0.48), my); ctx.stroke();
    Anima.receptor(lx, my, rs, C.nmda, 1 - blk, { shape: "square" });
    chara(lx, my - rs * 1.62, H * 0.03, { who: "Glu", arms: blk > 0.5 ? "fist" : "up", eyes: blk > 0.5 ? "open" : "happy", mouth: blk > 0.5 ? "wavy" : "grin", shadow: false });
    if (blk > 0.5) emote("?", lx + H * 0.03, my - rs * 1.62 - H * 0.1, H * 0.02);
    // 离子：没堵时流进去，堵了就停在门口
    for (let k = 0; k < 4; k++) {
      const t = (time * 0.8 + k / 4) % 1;
      const yy = blk > 0.5 ? lerp(my - rs * 2.4, my - rs * 1.9, Math.sin(t * Math.PI)) : lerp(my - rs * 2.4, my + H * 0.14, t);
      ctx.save(); ctx.globalAlpha *= blk > 0.5 ? 0.8 : Math.sin(t * Math.PI);
      Anima.ion(lx + (k - 1.5) * rs * 0.45, yy, H * 0.018, k % 2 ? "Ca" : "Na", k % 2 ? "#c8f0d8" : "#bfe3f5");
      ctx.restore();
    }
    // 药物访客钻进通道
    if (lt > 1.5) {
      const q = prog(1.5, 1.6);
      chara(lerp(-H * 0.1, lx, q), lerp(my - H * 0.02, my - rs * 0.35, q), H * 0.024, { who: "drug", hatColor: "#9aa5b1", hatColor2: "#f2f4f7", tag: n ? "氯胺酮" : "氯胺酮 / PCP", walk: q < 1 ? time * 9 : null, eyes: "happy", arms: "down", shadow: false });
    }
    plate("NMDA 受体", lx, H * 0.95, fsz(0.026));
    // 右：一个人和飘出去的“我”
    const px = W * (n ? 0.76 : 0.74), py = H * 0.88, s = H * 0.055;
    const drift = prog(5, 3);
    // 玻璃
    ctx.save(); ctx.globalAlpha *= drift * 0.6;
    rrect(W * (n ? 0.53 : 0.54), top + H * 0.06, H * 0.03, H * 0.82, 6); ctx.fillStyle = "rgba(191,227,245,0.5)"; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.restore();
    chara(px, py, s, { who: "neuron", eyes: drift > 0.5 ? "dizzy" : "open", mouth: drift > 0.5 ? "o" : "smile", arms: "down", gray: drift * 0.3 });
    const gx2 = px + drift * H * 0.1, gy2 = py - drift * H * 0.28;
    if (drift > 0.02) {
      ctx.save(); ctx.setLineDash([3, 5]); outline(1.2);
      ctx.beginPath(); ctx.moveTo(px, py - s * 2); ctx.quadraticCurveTo(px + H * 0.08, (py + gy2) / 2 - s, gx2, gy2 - s * 1.5);
      ctx.stroke(); ctx.restore();
      chara(gx2, gy2, s, { who: "neuron", eyes: "open", mouth: "o", arms: "up", alpha: 0.4 * drift, shadow: false });
      if (drift > 0.6) sparkles(gx2, gy2 - s * 2, s * 2, 3, 0.6, 8);
    }
    callout("plug", lt > 3.5 && lt < 8, lx + rs * 0.3, my, n ? W * 0.22 : W * 0.24, top + H * 0.08, "堵住通道：离子进不去");
    callout("dis", lt > 8.5, gx2, gy2 - s * 1.5, n ? W * 0.7 : W * 0.74, top + H * 0.06, "分离：像飘在身体外面");
    say("far", lt > 9.5, px, py - s * 3.2, n ? W * 0.28 : W * 0.24, H * 0.8, "周围好像隔着一层玻璃……", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：MDMA 让回收门反转 ----------
  function mdmaView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#f2fbf7"); bg.addColorStop(1, "#fff0f5");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeee2", 0.8, 61);
    const cx = W * 0.42, tw = Math.min(W * 0.62, H * 1.1), th = H * 0.44, post = H * 0.82;
    const rev = prog(4, 1);
    Anima.postMembrane(post, C.post, {});
    const R = [cx - tw * 0.3, cx - tw * 0.02, cx + tw * 0.26];
    R.forEach((x) => Anima.receptor(x, post, H * 0.045, "#a8e3cf", 0.2 + rev * 0.8, {}));
    Anima.terminal(cx, 0, tw, th, C.term);
    // 囊泡里的 5-HT 被掏空
    const left = Math.round(5 * (1 - prog(5, 6)));
    Anima.vesicle(cx - tw * 0.15, th * 0.62, H * 0.06, "#62c9ab", left, 3);
    Anima.vesicle(cx + tw * 0.08, th * 0.72, H * 0.055, "#62c9ab", left, 9);
    // 回收门在右侧膜上
    const tx = cx + tw * 0.4, ty = th * 0.78;
    const tr = Anima.transporter(tx, ty, H * 0.055, "#9fc3ea", rev > 0.5 ? -time * 5 : time * 1.5, false);
    const arrowY = ty + H * 0.1;
    sfx(rev > 0.5 ? "↓ 往外送" : "↑ 往里收", tx + H * 0.14, ty, H * 0.03, rev > 0.5 ? C.bad : C.skyDeep, 0, 1);
    // MDMA 访客钻进回收门
    if (lt > 2) {
      const q = prog(2, 2);
      chara(lerp(W + H * 0.1, tx + H * 0.02, q), lerp(post - H * 0.02, ty + H * 0.14, q), H * 0.034, { who: "drug", hatColor: "#ff9ad1", hatColor2: "#fff", tag: "MDMA", walk: q < 1 ? time * 9 : null, eyes: "happy", mouth: "grin", arms: q >= 1 ? "up" : "down", dir: -1, shadow: false });
    }
    // 反转前：一两个 5-HT 被收回去；反转后：一大群涌出来
    const cs = H * 0.028;
    if (rev < 0.5) {
      const t = (lt * 0.5) % 1;
      chara(lerp(cx + tw * 0.1, tx, t), lerp(post - H * 0.03, arrowY, t), cs, { who: "5HT", walk: time * 9, eyes: "happy", alpha: 1 - t * 0.6, shadow: false });
    } else {
      for (let k = 0; k < 8; k++) {
        const t = ((lt - 4) * 0.35 + k / 8) % 1;
        const x = lerp(tx, R[k % 3] + (rnd(k) - 0.5) * H * 0.12, t), y = lerp(arrowY, post - H * 0.03 - rnd(k + 3) * H * 0.18, t);
        chara(x, y, cs, { who: "5HT", walk: time * 9 + k, eyes: "sparkle", arms: "up", mouth: "grin", alpha: Math.min(1, t * 4), shadow: false });
      }
      // 也放出一些 NE 和 DA
      const q = prog(6.5, 1.5);
      chara(lerp(-H * 0.1, W * 0.1, q), post - H * 0.04, cs, { who: "NE", walk: q < 1 ? time * 9 : null, eyes: "happy", shadow: false, alpha: q });
      chara(lerp(-H * 0.1, W * 0.17, q), post - H * 0.14, cs, { who: "DA", walk: q < 1 ? time * 9 : null, eyes: "happy", shadow: false, alpha: q });
      if (lt > 7) for (let k = 0; k < 3; k++) Anima.heart(W * (0.3 + k * 0.2), post + H * 0.08 - ((time * 0.5 + k / 3) % 1) * H * 0.1, H * 0.018, C.rose);
    }
    callout("sert", lt > 0.8 && lt < 4, tx, ty - H * 0.05, n ? W * 0.72 : W * 0.78, top + H * 0.06, "5-HT 转运体：回收门");
    callout("flood", lt > 7.8 && lt < 12, R[1], post - H * 0.18, n ? W * 0.45 : W * 0.25, n ? post + H * 0.08 : th + H * 0.07, "5-HT 大量涌出（还有 NE、DA）");
    say("rev", lt > 4.2 && lt < 7.5, tx, ty + H * 0.1, n ? W * 0.62 : W * 0.66, th + H * 0.14, "门反着转啦！", "shout");
    say("hug", lt > 9.5, W * 0.5, post + H * 0.06, n ? W * 0.75 : W * 0.78, n ? post - H * 0.2 : post - H * 0.08, "好亲近……", "say");
    ctx.restore();
  }

  // ---------- 第 5、6 幕：三格小漫画 ----------
  function thermo(x, y, h, v) {
    rrect(x - h * 0.08, y - h, h * 0.16, h, h * 0.08); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y + h * 0.06, h * 0.13, 0, Math.PI * 2); ctx.fillStyle = C.bad; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(x - h * 0.04, y - h * (0.1 + 0.8 * v), h * 0.08, h * (0.1 + 0.8 * v), h * 0.04); ctx.fillStyle = C.bad; ctx.fill();
  }
  function panelsView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf6ff", "#fff0f3");
    const gap = W * 0.02, y0 = top + H * 0.08, ch = H * (cur === 5 ? 0.83 : 0.9) - y0, cw = (W - gap * 4) / 3;
    const P = [0, 1, 2].map((k) => ({ x: gap + k * (cw + gap), y: y0, w: cw, h: ch }));
    const titles = cur === 4 ? (n ? ["当晚：太热", "当晚：水太多", "几天后"] : ["当晚：体温升高", "当晚：水喝太多", "几天后、反复用"]) : ["危险行为", "坏旅程", n ? "精神病、闪回" : "诱发精神病、闪回"];
    P.forEach((p, k) => card(p.x, p.y, p.w, p.h, titles[k], ["#ffd9c7", "#dff0fb", "#e4e0ff"][k]));
    const s = Math.min(H * 0.045, cw * 0.1), fs = fsz(0.024);
    const on = (k) => prog(0.5 + k * 3.2, 1);
    if (cur === 4) {
      // 1：跳舞、体温升高
      let p = P[0], o = on(0);
      ctx.save(); ctx.globalAlpha *= Math.max(0.35, o);
      const heat = prog(1, 5);
      glow(p.x + p.w * 0.4, p.y + p.h * 0.6, p.w * 0.4, C.bad, heat * 0.6);
      chara(p.x + p.w * 0.4, p.y + p.h * 0.88, s, { who: "neuron", eyes: heat > 0.6 ? "dizzy" : "happy", mouth: heat > 0.6 ? "wavy" : "grin", arms: "up", jump: Math.abs(Math.sin(time * 6)) * 0.4 * (1 - heat * 0.5), cloth: mix("#ffe7c7", "#ffb3b3", heat) });
      if (heat > 0.4) emote("sweat", p.x + p.w * 0.4 + s, p.y + p.h * 0.88 - s * 3, s * 0.6);
      thermo(p.x + p.w * 0.8, p.y + p.h * 0.62, p.h * 0.36, 0.2 + 0.75 * heat);
      ctx.restore();
      // 2：水喝太多 → 钠被冲稀
      p = P[1]; o = on(1);
      ctx.save(); ctx.globalAlpha *= Math.max(0.35, o);
      const dil = prog(4.5, 3);
      const bx = p.x + p.w * 0.5, bt = p.y + p.h * 0.18, bb = p.y + p.h * 0.72, bw = p.w * 0.56;
      ctx.save(); rrect(bx - bw / 2, bt, bw, bb - bt, 12); ctx.clip();
      ctx.fillStyle = "#d8eefb"; ctx.fillRect(bx - bw / 2, lerp(bb - (bb - bt) * 0.45, bt + (bb - bt) * 0.08, dil), bw, bb - bt);
      ctx.restore();
      rrect(bx - bw / 2, bt, bw, bb - bt, 12); outline(2); ctx.stroke();
      for (let k = 0; k < 5; k++) {
        const x = bx + (rnd(k) - 0.5) * bw * (0.35 + 0.5 * dil), y = bb - (bb - bt) * (0.08 + rnd(k + 4) * (0.3 + 0.55 * dil));
        Anima.ion(x, y, H * 0.017, "Na", "#bfe3f5");
      }
      for (let k = 0; k < 3; k++) { const t = ((lt - 4.5) * 0.7 + k / 3) % 1; if (lt > 4.5 && lt < 8) { ctx.beginPath(); ctx.arc(bx + (k - 1) * bw * 0.2, lerp(bt - p.h * 0.1, bt + p.h * 0.1, t), H * 0.01, 0, Math.PI * 2); ctx.fillStyle = "#7fb8e6"; ctx.fill(); } }
      text(dil > 0.5 ? "钠被冲稀了" : "血液里的钠", bx, bb + fs * 1.4, fs, C.ink);
      ctx.restore();
      // 3：几天后 5-HT 库存见底；反复用，末梢可能受损
      p = P[2]; o = on(2);
      ctx.save(); ctx.globalAlpha *= Math.max(0.35, o);
      const low = prog(7, 2), dmg = prog(10, 2);
      const vx = p.x + p.w * 0.3, vy = p.y + p.h * 0.28;
      Anima.vesicle(vx, vy, Math.min(H * 0.05, p.w * 0.12), "#62c9ab", Math.round(5 * (1 - low)), 2);
      chara(p.x + p.w * 0.3, p.y + p.h * 0.88, s, { who: "5HT", eyes: low > 0.5 ? "teary" : "open", mouth: low > 0.5 ? "sad" : "smile", arms: "down", gray: low * 0.5 });
      if (low > 0.5) emote("gloom", p.x + p.w * 0.3, p.y + p.h * 0.88 - s * 3.3, s * 0.7);
      // 5-HT 神经末梢的小树枝
      const tx = p.x + p.w * (n ? 0.68 : 0.72), ty = p.y + p.h * 0.75;
      ctx.lineCap = "round";
      for (let k = 0; k < 4; k++) {
        const q = -Math.PI / 2 + (k - 1.5) * 0.45, L = p.h * 0.28 * (1 - dmg * (k % 2 ? 0.55 : 0.2));
        ctx.strokeStyle = mix("#62c9ab", "#c4bcc0", dmg); ctx.lineWidth = Math.max(2, H * 0.008);
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(tx + Math.cos(q) * L, ty + Math.sin(q) * L); ctx.stroke();
        ctx.beginPath(); ctx.arc(tx + Math.cos(q) * L, ty + Math.sin(q) * L, H * 0.01, 0, Math.PI * 2); ctx.fillStyle = mix("#62c9ab", "#c4bcc0", dmg); ctx.fill();
      }
      text(n ? "末梢" : "5-HT 末梢", tx, ty + fs * 1.3, fs, C.ink);
      ctx.restore();
      callout("heat", lt > 2 && lt < 5, P[0].x + P[0].w * 0.8, P[0].y + P[0].h * 0.4, P[0].x + P[0].w * 0.5, P[0].y + P[0].h * 0.12, "体温过高、脱水");
      callout("low", lt > 7.5 && lt < 10, vx, vy, P[2].x + P[2].w * 0.5, P[2].y + P[2].h * 0.5, "5-HT 库存见底");
      callout("dmg", lt > 10.5, tx, ty - p.h * 0.2, P[2].x + P[2].w * 0.5, P[2].y + P[2].h * 0.1, "末梢可能受损");
      say("blue", lt > 8, P[2].x + P[2].w * 0.3, P[2].y + P[2].h * 0.88 - s * 3.3, P[1].x + P[1].w * 0.5, P[1].y + P[1].h * 0.9, "心情好低落……", "think");
    } else {
      // 1：知觉扭曲，走向马路
      let p = P[0], o = on(0);
      ctx.save(); ctx.globalAlpha *= Math.max(0.35, o);
      const ry = p.y + p.h * 0.72;
      ctx.fillStyle = "#cfd3da"; ctx.fillRect(p.x + 3, ry, p.w - 6, p.h * 0.14);
      ctx.strokeStyle = "#fff"; ctx.lineWidth = 3; ctx.setLineDash([10, 8]); ctx.beginPath(); ctx.moveTo(p.x + 6, ry + p.h * 0.07); ctx.lineTo(p.x + p.w - 6, ry + p.h * 0.07); ctx.stroke(); ctx.setLineDash([]);
      const wk = prog(1, 2.5);
      chara(p.x + p.w * 0.3, lerp(p.y + p.h * 0.62, ry + p.h * 0.1, wk), s, { who: "neuron", eyes: "dizzy", mouth: "o", walk: wk < 1 ? time * 7 : null, arms: "down" });
      const carX = p.x + p.w - 6 - ((lt * 0.12) % 1) * p.w * 0.5, carY = ry + p.h * 0.02;
      rrect(carX - p.w * 0.22, carY, p.w * 0.22, p.h * 0.08, 6); ctx.fillStyle = "#9fc3ea"; ctx.fill(); outline(1.4); ctx.stroke();
      for (const d of [0.25, 0.75]) { ctx.beginPath(); ctx.arc(carX - p.w * 0.22 * d, carY + p.h * 0.08, p.h * 0.02, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill(); }
      if (wk > 0.6) { emote("!", p.x + p.w * 0.6, p.y + p.h * 0.3, s * 0.8); sfx("嘀——！", p.x + p.w * 0.65, p.y + p.h * 0.45, H * 0.034, C.bad, -0.1, 1); }
      ctx.restore();
      // 2：坏旅程：乌云和惊恐
      p = P[1]; o = on(1);
      ctx.save(); ctx.globalAlpha *= Math.max(0.35, o);
      const fear = prog(4, 2);
      const cx2 = p.x + p.w * 0.5, cy2 = p.y + p.h * 0.3;
      ctx.save(); ctx.globalAlpha *= 0.4 + fear * 0.6;
      for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(cx2 + (k - 1.5) * p.w * 0.13, cy2 + (k % 2) * H * 0.02, p.w * 0.12, 0, Math.PI * 2); ctx.fillStyle = "#9d93a6"; ctx.fill(); }
      ctx.restore();
      if (fear > 0.5) Anima.bolt(cx2, cy2 + p.h * 0.15, H * 0.04, 1, C.gold);
      chara(cx2, p.y + p.h * 0.88, s, { who: "neuron", eyes: fear > 0.5 ? "wide" : "open", mouth: fear > 0.5 ? "wavy" : "flat", brow: "worry", arms: fear > 0.5 ? "shh" : "down" });
      if (fear > 0.5) emote("sweat", cx2 + s, p.y + p.h * 0.88 - s * 3, s * 0.6);
      ctx.restore();
      // 3：易感的人可能诱发精神病；很久以后画面还会闪回
      p = P[2]; o = on(2);
      ctx.save(); ctx.globalAlpha *= Math.max(0.35, o);
      const fb = lt > 10.5 ? (Math.sin(time * 4) > 0 ? 1 : 0.3) : 0;
      const bx2 = p.x + p.w * 0.5, by2 = p.y + p.h * 0.34, br2 = Math.min(p.w * 0.25, H * 0.08);
      ctx.beginPath(); ctx.ellipse(bx2, by2, br2 * 1.2, br2 * 0.9, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffdfe8"; ctx.fill(); outline(1.8); ctx.stroke();
      if (lt > 8) { ctx.strokeStyle = C.bad; ctx.lineWidth = 2.4; ctx.beginPath(); ctx.moveTo(bx2 - br2 * 0.2, by2 - br2 * 0.9); ctx.lineTo(bx2 + br2 * 0.1, by2 - br2 * 0.3); ctx.lineTo(bx2 - br2 * 0.15, by2 + br2 * 0.1); ctx.lineTo(bx2 + br2 * 0.2, by2 + br2 * 0.6); ctx.stroke(); }
      if (fb > 0) for (let k = 0; k < 3; k++) { ctx.save(); ctx.globalAlpha *= 0.5 * fb; ctx.strokeStyle = ["#f28ca5", "#6fb9e0", "#ffc94d"][k]; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.arc(bx2, by2, br2 * (1.3 + k * 0.25), time + k, time + k + 2); ctx.stroke(); ctx.restore(); }
      chara(bx2, p.y + p.h * 0.88, s, { who: "neuron", eyes: fb > 0.5 ? "wide" : "open", mouth: "flat", arms: "down" });
      ctx.restore();
      callout("sus", lt > 8 && lt < 10.5, bx2 + br2 * 0.1, by2 - br2 * 0.3, P[2].x + P[2].w * 0.5, P[2].y + P[2].h * 0.1, "易感的人：可能诱发精神病");
      callout("flash", lt > 10.5, bx2 + br2 * 1.3, by2, P[2].x + P[2].w * 0.5, P[2].y + P[2].h * 0.62, "停用很久后还会闪回");
      say("res", lt > 11, W / 2, H * 0.9, W / 2, H * 0.92, n ? "治疗研究只在严格医疗条件下" : "治疗用途的研究只在严格医疗条件下，不是自己尝试的理由", "box");
    }
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 0) { v1 = lt > 4 ? "被按住" : "轻按"; v2 = lt > 5 ? "大量" : "平稳"; }
    if (cur === 1) { v1 = lt > 5 ? "撑松" : "正常"; v2 = lt > 6 ? "扭曲" : "清楚"; }
    if (cur === 2) { v1 = lt > 3.5 ? "被堵住" : "开着"; v2 = lt > 6 ? "脱节" : "正常"; }
    if (cur === 3) { v1 = lt > 4 ? "往外送" : "往里收"; v2 = lt > 4.5 ? "大量涌出" : "正常"; }
    pill(14, 12, c.pill[0], v1, "#8f6fd6", false);
    pill(W - 14, 12, c.pill2[0], v2, "#d0608a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) pyrView(S.v0);
    if (S.v1 > 0.02) filterView(S.v1);
    if (S.v2 > 0.02) nmdaView(S.v2);
    if (S.v3 > 0.02) mdmaView(S.v3);
    if (S.v4 > 0.02) panelsView(S.v4);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#8f6fd6",
    titleCard: { lines: ["致幻剂和", "分离性物质"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
