Anima.register("dementia-biomarkers", {
    "title": "提前看见：分期和生物标志物",
    "tag": "痴呆",
    "headline": "在太晚之前【看见】阿尔茨海默病",
    "lede": "阿尔茨海默病的病变，往往比记性变差早很多年就开始了。Stahl 把它分成三个阶段，并介绍了能“提前看见”病变的生物标志物：PET、脑脊液、磁共振，以及正在进入临床的血液检测。为什么要这么早看见？这和抗 Aβ 治疗的时机有关。",
    "summary": "无症状期、轻度认知障碍期和痴呆期；淀粉样蛋白 PET、脑脊液 Aβ42 和 tau、FDG PET、磁共振海马萎缩，以及 tau PET 和血液 p-tau 等新工具；为什么抗 Aβ 治疗要趁早。",
    "chapter": "对应 Stahl《精神药理学精要》第 12 章 · 在太晚之前诊断阿尔茨海默病",
    "footer": "记性明显变差，请到记忆门诊、神经内科或精神科就诊；做哪些检查、怎样解读结果，请听专科医生的建议。",
    "canvasLabel": "认知曲线和淀粉样蛋白曲线随时间变化、斑块在脑里堆积而脑脊液里的 Aβ42 变少、tau 从受伤的神经元漏出、海马变小，以及医生打开生物标志物工具箱的动画",
    "regions": ["hippo"],
    "parts": ["dementia"],
    "cast": ["neuron", "drug"],
    "color": "#b7a3e0"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, early: 0 };
  const view = (k, extra) => { const o = Object.assign({}, V0, extra || {}); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "三个阶段",
      pill: ["病变", "早很多年"], pill2: ["确诊", "常在第 3 期"],
      text: "Stahl 把阿尔茨海默病分成三个阶段。第一阶段没有任何症状，可 β-淀粉样蛋白（Aβ）已经在脑子里悄悄堆积；第二阶段是轻度认知障碍，神经元开始受伤，记性变差，但还能自己过日子；第三阶段才是痴呆。可大多数人要到第三阶段才被确诊，那时离真正的起点往往已经过去很多年。",
      fact: "阿尔茨海默病分为无症状期、轻度认知障碍期和痴呆期，病变比症状早很多年" }, view("v0")),
    Object.assign({ title: "无症状期：斑块悄悄堆起",
      pill: ["认知", "还正常"], pill2: ["脑脊液 Aβ42", "变少"],
      text: "第一阶段也叫无症状的淀粉样蛋白沉积。用能粘上斑块的示踪剂做淀粉样蛋白 PET，斑块会亮起来。另一条线索藏在脑脊液里：Aβ42 本来会随脑脊液流出大脑，现在被斑块粘住留在脑里，流出来的反而变少了。认知正常的七八十岁老人里，大约四分之一已经能查到 Aβ。",
      fact: "无症状期：淀粉样蛋白 PET 阳性、脑脊液 Aβ42 降低，但认知还正常" }, view("v1")),
    Object.assign({ title: "轻度认知障碍：神经元受伤",
      pill: ["脑脊液 tau", "升高"], pill2: ["海马", "变小"],
      text: "到了第二阶段，神经元真正开始受损。tau 蛋白从受伤的神经元里漏出来，脑脊液里的 tau 升高；FDG PET 显示大脑“吃糖”变少，代谢下降；磁共振能看到海马等区域萎缩。要注意，轻度认知障碍的人里大约一半查不到 Aβ，他们的记性问题可能来自抑郁或别的疾病。",
      fact: "轻度认知障碍不一定是阿尔茨海默病：约一半的人查不到 Aβ 沉积" }, view("v2")),
    Object.assign({ title: "生物标志物工具箱",
      pill: ["看 Aβ", "PET·脑脊液"], pill2: ["看损伤", "tau·MRI"],
      text: "这些能反映病变的检查叫生物标志物，大致回答两个问题。Aβ 有没有沉积：看淀粉样蛋白 PET、脑脊液 Aβ42。tau 和神经元损伤到了哪一步：tau PET 能直接看到缠结，脑脊液 tau、磁共振的海马萎缩反映神经元受损。近几年还有抽血就能测的指标，比如血液 p-tau，更方便，正在逐步进入临床。",
      fact: "生物标志物分两类线索：Aβ 有没有沉积，tau 和神经元损伤到了哪一步" }, view("v3")),
    Object.assign({ title: "为什么要趁早",
      pill: ["抗 Aβ 抗体", "早期患者"], pill2: ["用药前", "确认有 Aβ"],
      text: "为什么要这么早看见？支持淀粉样蛋白假说的人认为，连锁反应一旦转起来，炎症、tau 缠结和突触损伤会自己越滚越大，这时再清除 Aβ 可能就来不及了。所以抗 Aβ 抗体药，比如仑卡奈单抗、多奈单抗，只用于轻度认知障碍或轻度痴呆、并且查实有 Aβ 的人。连锁反应的细节见《淀粉样蛋白的连锁反应》。",
      fact: "抗 Aβ 抗体药用于早期、并经检查确认有淀粉样蛋白的患者" }, view("v0", { early: 1 })),
    Object.assign({ title: "在专科医生指导下检查",
      pill: ["Aβ 阳性", "≠ 一定发病"], pill2: ["解读", "专科医生"],
      text: "生物标志物不是算命。查到 Aβ 不等于一定会得痴呆，也说不准什么时候；APOE4 基因只说明风险高一些。检查结果要结合记忆评估、病史和其他检查一起解读，还要排除抑郁、甲状腺问题这些能治的原因。发现记性明显变差，请到记忆门诊或神经内科，由专科医生决定查什么、怎么看。",
      fact: "Aβ 阳性不等于一定会发展成痴呆，结果要由专科医生结合临床来解读" }, view("v4")),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { ab: "#9b8fc4", abL: "#d8d0f0", tau: "#e98a7a", cog: "#5fae8f", brain: "#ffe3ea", csf: "#d6eefa", plaque: "#b7aec2" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function panel(x, y, w, h, fill) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.16)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = fill || "rgba(255,253,250,0.94)"; ctx.fill(); ctx.restore();
    outline(1.8); rrect(x, y, w, h, 16); ctx.stroke();
  }
  function elder(x, y, s, o) {
    chara(x, y, s, Object.assign({ who: "neuron", hair: "#dcd6d2", cloth: "#d9e8f7", style: "bun", glasses: true }, o || {}));
  }
  function doctor(x, y, s, o) {
    chara(x, y, s, Object.assign({ who: "neuron", hair: "#6a5a6a", cloth: "#ffffff", glasses: true, style: "short" }, o || {}));
  }
  // 大脑侧面轮廓（PET/MRI 小窗里用）
  function brainShape(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x - r, y + r * 0.1);
    ctx.bezierCurveTo(x - r * 1.05, y - r * 0.7, x - r * 0.2, y - r * 0.95, x + r * 0.3, y - r * 0.8);
    ctx.bezierCurveTo(x + r * 0.95, y - r * 0.65, x + r * 1.1, y + r * 0.05, x + r * 0.8, y + r * 0.4);
    ctx.bezierCurveTo(x + r * 0.6, y + r * 0.62, x + r * 0.2, y + r * 0.55, x - r * 0.1, y + r * 0.6);
    ctx.bezierCurveTo(x - r * 0.6, y + r * 0.66, x - r * 0.95, y + r * 0.5, x - r, y + r * 0.1);
    ctx.closePath();
  }
  // 海马：弯弯的小海马形状，k 越小越萎缩
  function hippo(x, y, r, k, col) {
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    ctx.beginPath();
    ctx.moveTo(-r, -r * 0.2);
    ctx.bezierCurveTo(-r * 0.6, -r * 0.75, r * 0.4, -r * 0.7, r * 0.7, -r * 0.1);
    ctx.bezierCurveTo(r * 0.95, r * 0.35, r * 0.5, r * 0.6, r * 0.25, r * 0.3);
    ctx.bezierCurveTo(r * 0.1, r * 0.05, -r * 0.4, -r * 0.1, -r * 0.75, r * 0.15);
    ctx.closePath(); ctx.fillStyle = col; ctx.fill(); ctx.restore();
    outline(1.6); ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.lineWidth = 1.6 / k; ctx.stroke(); ctx.restore();
  }
  // 脑脊液量杯：level 0～1
  function tube(x, y, w, h, level, color, label) {
    rrect(x, y, w, h, w * 0.3); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill();
    ctx.save(); rrect(x, y, w, h, w * 0.3); ctx.clip();
    ctx.fillStyle = C.csf; ctx.fillRect(x, y + h * 0.1, w, h);
    ctx.fillStyle = color; ctx.fillRect(x, y + h * (1 - level), w, h * level); ctx.restore();
    outline(1.8); rrect(x, y, w, h, w * 0.3); ctx.stroke();
    for (let k = 1; k < 4; k++) { ctx.beginPath(); ctx.moveTo(x, y + h * k / 4); ctx.lineTo(x + w * 0.3, y + h * k / 4); ctx.stroke(); }
    text(label, x + w / 2, y + h + fsz(0.026) * 1.2, fsz(0.026), C.ink);
  }

  // ---------- 第 1、5 幕：三阶段曲线 ----------
  const cogF = (g) => g < 0.45 ? 1 : g < 0.72 ? 1 - 0.3 * ease((g - 0.45) / 0.27) : 0.7 - 0.55 * ease((g - 0.72) / 0.28);
  const abF = (g) => 0.05 + 0.85 * ease((g - 0.05) / 0.5);
  const ndF = (g) => 0.03 + 0.9 * ease((g - 0.38) / 0.55);
  function stageView(a) {
    const n = nar(), top = Anima.topSafe(), ea = S.early;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#faf7ff", "#fff3f0"); Anima.bokeh(6, "#e4dcff", 0.6, 17);
    const fs = fsz(0.028);
    const x0 = W * 0.07, x1 = W * 0.95, yt = top + H * 0.2, yb = H * 0.7;
    const X = (g) => lerp(x0, x1, g), Y = (v) => lerp(yb, yt, v);
    const bands = [[0, 0.45, "#eef6ff", n ? "① 无症状" : "① 无症状期"], [0.45, 0.72, "#fff4dc", n ? "② MCI" : "② 轻度认知障碍"], [0.72, 1, "#ffe6ea", n ? "③ 痴呆" : "③ 痴呆期"]];
    bands.forEach((b) => {
      ctx.fillStyle = b[2]; ctx.fillRect(X(b[0]), yt, X(b[1]) - X(b[0]), yb - yt);
      text(b[3], (X(b[0]) + X(b[1])) / 2, yb + fs * 1.1, fs, C.ink);
    });
    outline(2); ctx.beginPath(); ctx.moveTo(x0, yt); ctx.lineTo(x0, yb); ctx.lineTo(x1, yb); ctx.stroke();
    // 图例
    const LG = [["认知功能", C.cog], ["Aβ 沉积", C.ab], ["神经元损伤", C.tau]];
    let lx = W * 0.06;
    LG.forEach((L) => {
      const ly = yb + fs * 3;
      ctx.fillStyle = L[1]; rrect(lx, ly - fs * 0.25, fs * 1.4, fs * 0.5, fs * 0.25); ctx.fill();
      text(L[0], lx + fs * 1.7, ly, fs, C.ink, "left");
      ctx.font = `${fs}px ${Anima.ROUND}`; lx += fs * 2.6 + ctx.measureText(L[0]).width + fs;
    });
    const p = cur === 0 ? prog(0.6, 8.5) : 1;
    const line = (f, col, w, dash) => {
      ctx.save(); if (dash) ctx.setLineDash(dash);
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.beginPath();
      for (let k = 0; k <= 90; k++) { const g = (k / 90) * Math.max(p, 0.001); if (k) ctx.lineTo(X(g), Y(f(g))); else ctx.moveTo(X(g), Y(f(g))); }
      ctx.stroke(); ctx.restore();
    };
    line(abF, C.ab, Math.max(3, H * 0.008), [9, 6]);
    line(ndF, C.tau, Math.max(3, H * 0.008), [3, 6]);
    line(cogF, C.cog, Math.max(4, H * 0.012));
    // 老人沿着认知曲线走
    const es = H * 0.045;
    elder(X(p), Y(cogF(p)) - H * 0.005, es, { walk: p < 1 ? time * 7 : null, eyes: p < 0.45 ? "happy" : p < 0.72 ? "open" : "teary", mouth: p < 0.45 ? "smile" : "wavy", brow: p > 0.5 ? "worry" : null });
    if (p > 0.5 && p < 1) emote("?", X(p) + es, Y(cogF(p)) - es * 3.2, es * 0.5);
    // 通常确诊的地方
    ctx.save(); ctx.setLineDash([5, 5]); outline(1.4); ctx.beginPath(); ctx.moveTo(X(0.74), yt); ctx.lineTo(X(0.74), yb); ctx.stroke(); ctx.restore();
    if (ea < 0.5) {
      callout("start", lt > 2 && lt < 6, X(0.12), Y(abF(0.12)), n ? X(0.2) : X(0.22), Y(0.5), "真正的起点：Aβ 开始堆积");
      callout("dx", lt > 8.5, X(0.74), Y(0.35), n ? X(0.48) : X(0.56), Y(0.12), "大多数人到这里才确诊");
    } else {
      // 趁早的窗口 + 引线上的小火苗
      const wa = prog(1, 1.2);
      ctx.save(); ctx.globalAlpha *= wa * 0.9;
      ctx.fillStyle = alpha(C.gold, 0.25); ctx.fillRect(X(0.3), yt, X(0.8) - X(0.3), yb - yt);
      ctx.strokeStyle = C.gold; ctx.lineWidth = 3; ctx.strokeRect(X(0.3), yt, X(0.8) - X(0.3), yb - yt);
      ctx.restore();
      const fg = (0.05 + ((lt * 0.07) % 0.9));
      glow(X(fg), Y(abF(fg)), H * 0.04, "#ff9a52", 0.9); sparkle(X(fg), Y(abF(fg)), H * 0.022, 1, "#ffd27a");
      const ds = H * 0.045;
      chara(X(0.55), Y(0.2), ds, { who: "drug", label: "抗体", hatColor: "#b7a3e0", arms: lt > 5 ? "fist" : "hold", item: lt > 5 ? null : "net", eyes: "sparkle", tag: n ? null : "抗 Aβ 抗体" });
      callout("win", lt > 2 && lt < 7, X(0.4), yt + H * 0.02, n ? X(0.3) : X(0.24), Y(0.72), n ? "早期：更可能有意义" : "早期：抗 Aβ 治疗更可能有意义");
      callout("fuse", lt > 7, X(fg), Y(abF(fg)), n ? X(0.3) : X(0.2), Y(0.6), "连锁反应转起来后，可能自己越滚越大");
      say("ab", lt > 9, X(0.55), Y(0.2) - ds * 3.2, n ? X(0.82) : X(0.84), Y(0.25), n ? "先确认有 Aβ！" : "先查实有 Aβ，再出手！", "say");
    }
    ctx.restore();
  }

  // ---------- 第 2 幕：斑块和脑脊液 ----------
  function amyloidView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f9", "#eef7ff"); Anima.petals(8, 0.5, 21);
    const pl = prog(0.8, 8); // 斑块长大程度
    const bx = W * 0.04, bw = W * (n ? 0.56 : 0.58), by = top + H * 0.04, bh = H * 0.94 - by;
    panel(bx, by, bw, bh, "#fff1f4");
    const fs = fsz(0.028);
    text("大脑里（海马附近）", bx + bw / 2, by + fs * 1.2, fs, C.ink);
    // 神经元和它们身边的斑块
    const NS = [[0.25, 0.35], [0.7, 0.32], [0.45, 0.62]];
    const nr = H * 0.055;
    NS.forEach((q, i) => {
      const x = bx + bw * q[0], y = by + bh * q[1];
      ctx.beginPath(); ctx.arc(x, y, nr, 0, Math.PI * 2); ctx.fillStyle = "#ffd9c7"; ctx.fill(); outline(1.8); ctx.stroke();
      face(x, y + nr * 0.1, nr * 0.5, 1);
      const pr = nr * (0.2 + 0.75 * pl), px = x + nr * 1.5 * (i === 1 ? -1 : 1), py = y + nr * 1.1;
      if (pl > 0.02) {
        for (let k = 0; k < 6; k++) {
          const q2 = k * 1.05 + i;
          ctx.beginPath(); ctx.arc(px + Math.cos(q2) * pr * 0.45, py + Math.sin(q2) * pr * 0.35, pr * 0.55, 0, Math.PI * 2); ctx.fillStyle = C.plaque; ctx.fill();
        }
        // PET 示踪剂让斑块发光
        glow(px, py, pr * 1.6, "#ff9a52", prog(3, 2) * 0.8);
      }
    });
    // Aβ 小碎片：往右下的出口流，一部分被斑块粘住
    const out = { x: bx + bw * 0.95, y: by + bh * 0.88 };
    for (let k = 0; k < 14; k++) {
      const t = (time * 0.18 + k / 14) % 1, src = NS[k % 3];
      const sx = bx + bw * src[0], sy = by + bh * src[1];
      const stuck = rnd(k * 3.1) < 0.2 + pl * 0.7;
      const px = sx + nr * 1.5 * (k % 3 === 1 ? -1 : 1), py = sy + nr * 1.1;
      const tx = stuck ? px : out.x, ty = stuck ? py : out.y;
      const u = stuck ? Math.min(1, t * 2.2) : t;
      const x = lerp(sx, tx, u) + Math.sin(t * 9 + k) * H * 0.01, y = lerp(sy, ty, u);
      ctx.save(); ctx.globalAlpha *= stuck ? (u < 1 ? 1 : 0) : Math.sin(t * Math.PI);
      ctx.beginPath(); ctx.arc(x, y, H * 0.011, 0, Math.PI * 2); ctx.fillStyle = C.ab; ctx.fill(); outline(1); ctx.stroke();
      ctx.restore();
    }
    // 出口 → 脑脊液
    const tx = W * (n ? 0.64 : 0.68), tw = W * (n ? 0.1 : 0.07), th = H * 0.36, ty = H * 0.46;
    outline(2); ctx.beginPath(); ctx.moveTo(out.x, out.y); ctx.lineTo(tx, ty + th * 0.3); ctx.stroke();
    tube(tx, ty, tw, th, 0.85 - 0.55 * pl, C.ab, n ? "脑脊液" : "脑脊液 Aβ42");
    // PET 小窗
    const qx = W * (n ? 0.78 : 0.78), qw = W * (n ? 0.2 : 0.19), qy = by, qh = H * 0.36;
    panel(qx, qy, qw, qh, "#2f2a44");
    text(n ? "Aβ PET" : "淀粉样蛋白 PET", qx + qw / 2, qy + fs * 1.1, fsz(0.024), "#fff");
    const br = Math.min(qw * 0.36, qh * 0.34), bcx = qx + qw / 2, bcy = qy + qh * 0.6;
    brainShape(bcx, bcy, br); ctx.fillStyle = "#4a4466"; ctx.fill(); ctx.strokeStyle = "#8a84a8"; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.save(); brainShape(bcx, bcy, br); ctx.clip();
    for (let k = 0; k < 6; k++) glow(bcx + (rnd(k) - 0.5) * br * 1.4, bcy + (rnd(k + 9) - 0.6) * br * 0.9, br * 0.45, "#ff8a3a", prog(2 + k * 0.5, 1.5) * pl);
    ctx.restore();
    // 老人：认知还正常
    const es = H * 0.055, ex = W * (n ? 0.9 : 0.9);
    elder(ex, H * 0.95, es, { eyes: "happy", mouth: "smile", arms: "wave", dir: -1 });
    callout("plaque", lt > 2 && lt < 6.5, bx + bw * 0.25 + nr * 1.5, by + bh * 0.35 + nr * 1.1, bx + bw * 0.3, by + bh * 0.82, "斑块：把 Aβ 粘在脑里");
    callout("csf", lt > 6.5, tx + tw / 2, ty + th * 0.6, n ? W * 0.5 : W * 0.46, by + bh * 0.84, "流进脑脊液的 Aβ42 变少了");
    say("fine", lt > 3.5 && lt < 9.5, ex, H * 0.95 - es * 3.2, n ? W * 0.87 : W * 0.88, H * 0.52, n ? "记性好着呢～" : "我记性好着呢～", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：神经元受伤 ----------
  function damageView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f2", "#f3f1ff"); Anima.bokeh(5, "#ffd9d0", 0.6, 27);
    const dm = prog(0.8, 8), fs = fsz(0.028);
    const bx = W * 0.04, bw = W * (n ? 0.52 : 0.5), by = top + H * 0.04, bh = H * 0.94 - by;
    panel(bx, by, bw, bh, "#fff5ef");
    text("神经元", bx + bw / 2, by + fs * 1.2, fs, C.ink);
    const nr = H * 0.05;
    const NS = [[0.25, 0.3], [0.7, 0.3], [0.25, 0.62], [0.7, 0.62]];
    NS.forEach((q, i) => {
      const x = bx + bw * q[0], y = by + bh * q[1], hurt = clamp(dm * 1.5 - i * 0.2, 0, 1);
      ctx.beginPath(); ctx.arc(x, y, nr, 0, Math.PI * 2); ctx.fillStyle = mix("#ffd9c7", "#d8d2d6", hurt); ctx.fill(); outline(1.8); ctx.stroke();
      face(x, y + nr * 0.1, nr * 0.5, hurt > 0.5 ? -1 : 0);
      if (hurt > 0.1) { // tau 缠结：一团乱线
        ctx.save(); ctx.globalAlpha *= hurt; ctx.strokeStyle = C.tau; ctx.lineWidth = 1.6; ctx.beginPath();
        for (let k = 0; k < 14; k++) { const q2 = k * 2.3 + i; const xx = x + Math.cos(q2) * nr * 0.55, yy = y - nr * 0.35 + Math.sin(q2 * 1.7) * nr * 0.25; if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
        ctx.stroke(); ctx.restore();
      }
      // tau 从受伤的神经元往下漏
      if (hurt > 0.3) for (let k = 0; k < 2; k++) {
        const t = (time * 0.35 + k * 0.5 + i * 0.23) % 1;
        const xx = lerp(x, bx + bw * 0.96, t), yy = lerp(y + nr, by + bh * 0.9, t);
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * hurt;
        ctx.beginPath(); ctx.arc(xx, yy, H * 0.01, 0, Math.PI * 2); ctx.fillStyle = C.tau; ctx.fill(); ctx.restore();
      }
    });
    const tx = bx + bw + W * 0.02, tw = W * (n ? 0.08 : 0.06), th = H * 0.36, ty = H * 0.46;
    outline(2); ctx.beginPath(); ctx.moveTo(bx + bw * 0.96, by + bh * 0.9); ctx.lineTo(tx, ty + th * 0.3); ctx.stroke();
    tube(tx, ty, tw, th, 0.12 + 0.6 * dm, C.tau, "tau");
    // 右边：MRI 海马 和 FDG PET
    const qx = W * (n ? 0.72 : 0.66), qw = W * (n ? 0.26 : 0.3);
    const qh = (H * 0.94 - by - H * 0.03) / 2;
    panel(qx, by, qw, qh, "#f4f1ea");
    text(n ? "MRI" : "磁共振：海马", qx + qw / 2, by + fs * 1.1, fsz(0.025), C.ink);
    hippo(qx + qw / 2, by + qh * 0.6, Math.min(qw * 0.35, qh * 0.4), 1 - 0.3 * dm, "#e0cbb8");
    const q2y = by + qh + H * 0.03;
    panel(qx, q2y, qw, qh, "#2f2a44");
    text(n ? "FDG PET" : "FDG PET：吃糖多少", qx + qw / 2, q2y + fs * 1.1, fsz(0.025), "#fff");
    const br = Math.min(qw * 0.34, qh * 0.34), bcx = qx + qw / 2, bcy = q2y + qh * 0.6;
    brainShape(bcx, bcy, br); ctx.fillStyle = mix("#ff9a52", "#4a6ab0", dm * 0.85); ctx.fill(); ctx.strokeStyle = "#8a84a8"; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.save(); brainShape(bcx, bcy, br); ctx.clip(); glow(bcx, bcy, br * 0.8, "#ffe27a", 1 - dm * 0.9); ctx.restore();
    callout("tau", lt > 2 && lt < 6, tx + tw / 2, ty + th * 0.5, n ? W * 0.3 : W * 0.3, by + bh * 0.84, "脑脊液 tau 升高");
    callout("mri", lt > 5.5 && lt < 9.5, qx + qw * 0.4, by + qh * 0.6, n ? W * 0.3 : W * 0.3, by + bh * 0.84, "海马萎缩变小");
    callout("fdg", lt > 9.5, qx + qw * 0.3, bcy, n ? W * 0.3 : W * 0.3, by + bh * 0.84, "大脑代谢变低");
    ctx.restore();
  }

  // ---------- 第 4 幕：工具箱 ----------
  const TOOLS = [["淀粉样蛋白 PET", "看斑块", C.ab, "A"], ["脑脊液 Aβ42", "腰穿取液", C.ab, "A"], ["tau PET", "看缠结", C.tau, "T"], ["脑脊液 tau", "神经元受损", "#6fb9e0", "N"], ["磁共振", "海马萎缩", "#6fb9e0", "N"], ["血液 p-tau", "抽血，新进展", C.gold, "新"]];
  function toolView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f9ff", "#fff4f6"); Anima.petals(10, 0.5, 51);
    const cols = n ? 2 : 3, rows = n ? 3 : 2;
    const gx0 = W * (n ? 0.03 : 0.2), gx1 = W * 0.97, gy0 = top + H * 0.11, gy1 = H * 0.96;
    const gap = H * 0.025, cw = (gx1 - gx0 - gap * (cols - 1)) / cols, chh = (gy1 - gy0 - gap * (rows - 1)) / rows;
    const fs = fsz(n ? 0.03 : 0.032), fs2 = fsz(0.026);
    TOOLS.forEach((T, i) => {
      const r = Math.floor(i / cols), c = i % cols, x = gx0 + c * (cw + gap), y = gy0 + r * (chh + gap);
      const ap = prog(0.6 + i * 1.3, 0.8);
      if (ap <= 0.01) return;
      ctx.save(); ctx.globalAlpha *= ap; ctx.translate(0, (1 - ap) * H * 0.03);
      panel(x, y, cw, chh);
      ctx.fillStyle = alpha(T[2], 0.25); rrect(x, y, cw, chh * 0.18, 16); ctx.fill();
      if (!n) text(["看 Aβ", "看 Aβ", "看 tau", "看损伤", "看损伤", "新工具"][i], x + cw / 2, y + chh * 0.09, fsz(0.022), C.ink);
      const ir = Math.min(chh * 0.2, cw * 0.14), ix = x + ir * 1.4, iy = y + chh * 0.55;
      ctx.beginPath(); ctx.arc(ix, iy, ir, 0, Math.PI * 2); ctx.fillStyle = alpha(T[2], 0.35); ctx.fill(); outline(1.5); ctx.stroke();
      text(T[3], ix, iy + 1, ir * 1.1, C.ink);
      text(T[0], x + ir * 2.8, iy - fs * 0.7, fs, C.ink, "left");
      text(T[1], x + ir * 2.8, iy + fs * 0.75, fs2, C.soft, "left");
      if (i === 2 || i === 5) sparkle(x + cw - ir * 0.8, y + chh * 0.35, ir * 0.35, 1);
      ctx.restore();
    });
    if (!n) {
      const ds = H * 0.06;
      doctor(W * 0.1, H * 0.95, ds, { arms: lt > 9 ? "up" : "point", eyes: lt > 9 ? "happy" : "open", mouth: "smile", tag: "医生" });
      say("pick", lt > 9, W * 0.1, H * 0.95 - ds * 3.2, W * 0.1, top + H * 0.2, "各看一面，合起来判断", "say");
    }
    ctx.save(); ctx.globalAlpha *= prog(3, 1);
    text(n ? "A 看 Aβ · T 看 tau · N 看损伤" : "A = Aβ 沉积 · T = tau 缠结 · N = 神经元损伤", (gx0 + gx1) / 2, top + H * 0.05, fsz(0.028), C.ink);
    ctx.restore();
    ctx.restore();
  }

  // ---------- 第 6 幕：记忆门诊 ----------
  const STEPS = ["记忆评估和病史", "排除可以治的原因", "需要时查生物标志物", "结合起来解读"];
  function clinicView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbf7", "#fff5ee"); Anima.bokeh(6, "#d8f0e2", 0.6, 71);
    const gy = H * 0.92;
    ctx.fillStyle = "#eef3e6"; ctx.fillRect(0, gy, W, H - gy); outline(1.5); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    // 清单板
    const px = W * (n ? 0.3 : 0.36), pw = W * (n ? 0.66 : 0.4), py = top + H * 0.05, ph = H * (n ? 0.42 : 0.5);
    panel(px, py, pw, ph);
    const fs = fsz(0.03);
    text("在记忆门诊", px + pw / 2, py + fs * 1.3, fs, C.ink);
    STEPS.forEach((t, i) => {
      const y = py + fs * 3.2 + i * (ph - fs * 4) / 4, on = lt > 1.5 + i * 2;
      const bxx = px + fs * 1.2;
      rrect(bxx - fs * 0.5, y - fs * 0.5, fs, fs, 4); ctx.fillStyle = on ? "#c8efd9" : "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      if (on) { ctx.strokeStyle = C.mintDeep; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(bxx - fs * 0.3, y); ctx.lineTo(bxx - fs * 0.05, y + fs * 0.28); ctx.lineTo(bxx + fs * 0.35, y - fs * 0.3); ctx.stroke(); }
      text(t, bxx + fs * 0.9, y, fs, on ? C.ink : C.soft, "left");
    });
    const es = H * 0.06;
    const ex = W * (n ? 0.12 : 0.14), fx = W * (n ? 0.27 : 0.25), dx = W * (n ? 0.86 : 0.86);
    elder(ex, gy, es, { eyes: lt > 9 ? "happy" : "open", mouth: lt > 9 ? "smile" : "wavy", brow: lt > 9 ? null : "worry", arms: "down", tag: n ? null : "老人" });
    chara(fx, gy, es * 0.95, { who: "neuron", hair: "#7a5a4a", cloth: "#ffe0cc", style: "pony", arms: "hug", eyes: "happy", tag: n ? null : "家人" });
    doctor(dx, gy, es, { dir: -1, arms: "point", eyes: "happy", mouth: "smile", tag: "医生" });
    if (lt < 4) emote("?", ex + es, gy - es * 3.2, es * 0.5);
    say("worry", lt > 0.5 && lt < 4.5, ex, gy - es * 3.2, W * (n ? 0.2 : 0.18), H * (n ? 0.6 : 0.3), n ? "查到 Aβ 就\n一定会得吗？" : "查到 Aβ，就一定会得痴呆吗？", "think");
    say("doc", lt > 5.5 && (!n || lt < 9.5), dx, gy - es * 3.2, W * (n ? 0.62 : 0.84), H * (n ? 0.66 : 0.3), n ? "不一定，我们\n一起看全貌" : "不一定。我们一起看全貌～", "say");
    callout("apoe", lt > 9.8, ex - es * 0.9, gy - es * 1.2, W * 0.08, H * (n ? 0.62 : 0.55), "APOE4 基因：只说明风险高一些");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#8f84e0", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#e0804f", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) stageView(S.v0);
    if (S.v1 > 0.02) amyloidView(S.v1);
    if (S.v2 > 0.02) damageView(S.v2);
    if (S.v3 > 0.02) toolView(S.v3);
    if (S.v4 > 0.02) clinicView(S.v4);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#8f84e0",
    titleCard: { lines: ["在太晚之前", "看见阿尔茨海默病"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
