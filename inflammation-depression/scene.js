Anima.register("inflammation-depression", {
    "title": "身体发炎，心情也会下雨",
    "tag": "心境障碍",
    "headline": "身体里的【小火苗】，也会让心情下雨？",
    "lede": "炎症本来是身体的消防队。可如果小火苗一直不灭，免疫细胞放出的警报信会传进大脑，叫醒脑里的免疫卫兵，还把做 5-HT 的原料拐走。这是抑郁研究里一个正在展开的假说，一起看看它讲了什么。",
    "summary": "慢性低度炎症和细胞因子、信号进脑与小胶质细胞激活、IDO 把色氨酸拐向犬尿氨酸途径、喹啉酸与 NMDA、生病行为、“炎症型”抑郁亚型的研究，以及运动、睡眠和减重。",
    "chapter": "对应 Stahl《精神药理学精要》第 6 章 · 炎症与抑郁",
    "footer": "炎症与抑郁的关系还在研究中，请不要自行服用抗炎药治疗情绪问题。有伤害自己的想法时，请马上告诉身边的人，并联系心理援助热线或去医院急诊。",
    "canvasLabel": "身体里的小火苗放出细胞因子警报信、传进大脑、让心情小镇下雨的动画",
    "regions": ["hippo", "pfc"],
    "parts": ["mood"],
    "cast": ["5HT", "Glu", "drug"],
    "color": "#f4a88a"
  }, () => {
  const CH = [
    { title: "身体里的小火苗", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["慢性炎症", "小火苗"], pill2: ["细胞因子", "IL-6 等"],
      text: "炎症本来是身体的消防队：受伤或感染时，免疫细胞赶来灭火，放出细胞因子这种“警报信”，比如 IL-6、TNF-α，火灭了就收工。可是肥胖、慢性病、长期压力，会让身体里一直燃着一些小火苗，免疫细胞不停地放警报信，血液里的细胞因子长期偏高，这叫慢性低度炎症。",
      fact: "细胞因子是免疫细胞传话用的蛋白；IL-6、TNF-α 是常被研究的促炎细胞因子" },
    { title: "警报信传进大脑", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["入口", "屏障弱处"], pill2: ["小胶质", "被叫醒"],
      text: "大脑有血脑屏障守着，可警报信还是有办法报进来：从屏障比较薄弱的地方渗进去，或者由迷走神经把肚子里的炎症消息，一路“打电话”报给大脑。大脑也有自己的免疫卫兵，叫小胶质细胞。它们收到警报就被激活，自己也开始放细胞因子，脑子里的小火苗就这样点起来了。",
      fact: "外周炎症信号可经血脑屏障较弱处、迷走神经等途径传入大脑，激活小胶质细胞" },
    { title: "色氨酸被拐走了", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["IDO", "被叫醒"], pill2: ["5-HT 原料", "变少"],
      text: "5-HT 是用色氨酸做的，色氨酸来自食物。平时大部分色氨酸本来就走另一条岔路，变成犬尿氨酸，只有一小部分去做 5-HT。炎症时，细胞因子叫醒了岔路口的扳道工，一种叫 IDO 的酶，它把更多色氨酸拐进犬尿氨酸那条路，留给 5-HT 工厂的原料就更少了。",
      fact: "促炎细胞因子能激活 IDO，把色氨酸更多地转向犬尿氨酸途径" },
    { title: "岔路尽头的喹啉酸", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0, v6: 0,
      pill: ["喹啉酸", "猛敲 NMDA"], pill2: ["神经元", "累坏了"],
      text: "犬尿氨酸在大脑里还会接着往下变。在被激活的小胶质细胞里，它多半被做成喹啉酸。喹啉酸会去敲谷氨酸的 NMDA 门，门开得太多、太久，钙离子一个劲往里涌，神经元累得吃不消，还可能受伤。有人认为，这可能是炎症影响情绪和记忆的原因之一，不过这还只是一个假说。",
      fact: "喹啉酸是 NMDA 受体激动剂，过多时可能有神经毒性（仍在研究中）" },
    { title: "生病行为：本来是帮你养病", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0, v6: 0,
      pill: ["生病行为", "省电模式"], pill2: ["一直发炎", "像抑郁"],
      text: "感冒发烧时，人会很累、什么都不想做、只想躲在被窝里，这叫生病行为。它其实是细胞因子在帮忙：让你少活动、多休息，把力气留给免疫系统打仗，病好了自然就消失。可如果炎症一直不退，这套“省电模式”就一直开着，疲倦、没兴趣、不想见人，看起来就很像抑郁。",
      fact: "生病行为（疲倦、兴趣减退、退缩）由细胞因子引起，和抑郁的部分症状很像" },
    { title: "一部分人的“发炎型”抑郁", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1, v6: 0,
      pill: ["炎症指标", "部分人高"], pill2: ["抗炎", "研究中"],
      text: "研究发现，一部分抑郁的人血液里的炎症指标偏高，比如 C 反应蛋白、IL-6。他们可能是抑郁里的一个亚型，对一些常用抗抑郁药的反应也可能差一些。科学家正在试验抗炎治疗，目前看来可能只对炎症高的那部分人有帮助。这还在研究中，请不要自己吃抗炎药来治抑郁。",
      fact: "“炎症型”抑郁是研究中的假说；抗炎治疗不是抑郁的常规治疗" },
    { title: "把小火苗调小", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 1,
      pill: ["帮手", "运动 睡眠"], pill2: ["炎症", "慢慢降"],
      text: "好消息是，身体里的小火苗是可以调小的。规律运动、睡够睡好、需要时减轻体重，都和炎症指标下降有关；学着应对长期压力，也能帮上忙。火苗小了，心里的天气也更容易放晴。如果情绪低落持续两周以上，记得去看医生，抑郁是可以治疗的。",
      fact: "运动、充足睡眠和减重都与炎症水平下降有关；情绪低落持续请及时就医" },
  ];

  const C = Object.assign({}, Anima.C, { blood: "#ffb3bd", wall: "#ffd9c2", tissue: "#f1ecf8", fire: "#ff9a52", fire2: "#ffd76a" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  const win = (a, b) => lt > a && lt < b;
  function update() { lt = Anima.sceneTime; }
  const IMM = { who: "neuron", hair: "#6fc4a0", eye: "#3f8f6c", cloth: "#dff5ea", hat: "helmet", hatColor: "#9fd8b8" };
  const MG = { who: "neuron", hair: "#a58fd8", eye: "#6b55b0", cloth: "#ece6fb", style: "spiky" };
  const TRP = { who: "neuron", hair: "#ffd27a", eye: "#c88600", cloth: "#fff3cf", style: "bob" };
  const IDO = { who: "neuron", hair: "#e8637a", eye: "#b03a50", cloth: "#ffe0e4", hat: "kerchief", hatColor: "#f7a8b8", style: "bun" };
  const QUIN = { who: "neuron", hair: "#e05a5a", eye: "#a32a2a", cloth: "#ffd9d0", style: "spiky" };

  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  // 小火苗：带小脸的一簇火
  function flame(x, y, s, a) {
    if (a < 0.02 || s < 1) return;
    ctx.save(); ctx.globalAlpha *= a;
    const wob = Math.sin(time * 7 + x) * s * 0.08;
    glow(x, y - s * 0.6, s * 1.6, C.fire, 0.7);
    for (const [k, col] of [[1, C.fire], [0.6, C.fire2]]) {
      ctx.beginPath(); ctx.moveTo(x, y);
      ctx.bezierCurveTo(x - s * 0.75 * k, y, x - s * 0.6 * k, y - s * 0.9 * k, x + wob, y - s * 1.6 * k);
      ctx.bezierCurveTo(x + s * 0.6 * k, y - s * 0.9 * k, x + s * 0.75 * k, y, x, y);
      ctx.fillStyle = col; ctx.fill(); if (k === 1) { outline(Math.max(1.2, s * 0.06)); ctx.stroke(); }
    }
    if (s > 10) face(x, y - s * 0.35, s * 0.28, 0, false);
    ctx.restore();
  }
  // 细胞因子：带刺的小球，写着名字
  function cyto(x, y, r, label, a) {
    if (a != null && a < 0.02) return;
    ctx.save(); if (a != null) ctx.globalAlpha *= a;
    ctx.beginPath();
    for (let q = 0; q <= 20; q++) { const ang = q / 20 * Math.PI * 2 + time, rr = r * (q % 2 ? 0.78 : 1); if (q) ctx.lineTo(x + Math.cos(ang) * rr, y + Math.sin(ang) * rr); else ctx.moveTo(x + rr, y); }
    ctx.fillStyle = "#ffcf9e"; ctx.fill(); outline(Math.max(1, r * 0.1)); ctx.stroke();
    if (label && r > 8) text(label, x, y + 1, r * (label.length > 4 ? 0.45 : 0.6), C.ink);
    ctx.restore();
  }
  function cloud(x, y, r, color, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const B = [[-0.9, 0.15, 0.55], [-0.45, -0.25, 0.7], [0.15, -0.4, 0.8], [0.7, -0.1, 0.62], [1.0, 0.25, 0.45], [0, 0.25, 0.7]];
    ctx.beginPath(); for (const b of B) { ctx.moveTo(x + b[0] * r + b[2] * r, y + b[1] * r); ctx.arc(x + b[0] * r, y + b[1] * r, b[2] * r, 0, Math.PI * 2); }
    outline(Math.max(3, r * 0.08)); ctx.stroke(); ctx.fillStyle = color; ctx.fill();
    ctx.restore();
  }
  function rain(x0, x1, y0, y1, n, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = "#8fb3dc"; ctx.lineWidth = Math.max(1.5, H * 0.004); ctx.lineCap = "round"; ctx.beginPath();
    for (let i = 0; i < n; i++) { const t = (time * (0.7 + rnd(i) * 0.4) + rnd(i + 31)) % 1, x = lerp(x0, x1, rnd(i + 7)), y = lerp(y0, y1, t); ctx.moveTo(x, y); ctx.lineTo(x - H * 0.005, y + H * 0.025); }
    ctx.stroke(); ctx.restore();
  }
  function sun(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; glow(x, y, r * 2.4, C.gold, 1);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.6); ctx.stroke(); face(x, y + r * 0.1, r * 0.55, 1);
    ctx.restore();
  }
  function river(y0, y1, n, labelOn) {
    const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, "#ffd0d6"); g.addColorStop(1, C.blood);
    rrect(-10, y0, W + 20, y1 - y0, 16); ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    for (let k = 0; k < n; k++) { const x = ((time * W * 0.05 + k * W / (n - 1)) % (W * 1.1)) - W * 0.05, y = y0 + (y1 - y0) * (0.25 + rnd(k) * 0.5); ctx.beginPath(); ctx.ellipse(x, y, H * 0.026, H * 0.015, 0, 0, Math.PI * 2); ctx.fillStyle = "#f7788c"; ctx.fill(); outline(1.1); ctx.stroke(); }
    if (labelOn) text("血液", W * 0.02, y0 + H * 0.03, fz(0.024), "#b04a5c", "left");
  }
  function bg(a, b, seed) { Anima.wash(a, b); Anima.bokeh(6, "#ffe0cc", 0.6, seed); }

  // ---------- 第 1 幕：身体里的小火苗 ----------
  function bodyView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff6ec", "#fdeef0", 3);
    const ry0 = H * 0.6, ry1 = H * 0.76, s = H * (nw ? 0.042 : 0.045);
    river(ry0, ry1, 9, true);
    // 右边：大脑的方向
    const bx = W * 0.93, by = H * 0.4;
    ctx.beginPath(); ctx.ellipse(bx, by, W * 0.06, H * 0.09, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe3ea"; ctx.fill(); outline(2); ctx.stroke();
    face(bx, by, H * 0.035, lt > 8 ? 0 : 1);
    text("大脑", bx, by + H * 0.13, fz(0.026), "#c25577");
    // 三个火源和免疫细胞
    const SRC = [["肥胖", "fat"], ["慢性病", "ill"], ["长期压力", "stress"]];
    const X = nw ? [W * 0.14, W * 0.42, W * 0.7] : [W * 0.12, W * 0.35, W * 0.58];
    const sy = H * 0.34;
    SRC.forEach((src, i) => {
      const x = X[i], on = prog(0.5 + i * 0.9, 1.4);
      // 小图标
      if (i === 0) { ctx.beginPath(); ctx.arc(x, sy, H * 0.055, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.8); ctx.stroke(); for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(x + (k - 1) * H * 0.025, sy + (k % 2) * H * 0.015, H * 0.012, 0, Math.PI * 2); ctx.fillStyle = "#ffe08a"; ctx.fill(); } face(x, sy + H * 0.01, H * 0.03, 0); }
      else if (i === 1) { ctx.beginPath(); ctx.arc(x, sy, H * 0.05, 0, Math.PI * 2); ctx.fillStyle = "#ffe0e4"; ctx.fill(); outline(1.8); ctx.stroke(); ctx.fillStyle = C.bad; ctx.fillRect(x - H * 0.01, sy - H * 0.03, H * 0.02, H * 0.06); ctx.fillRect(x - H * 0.03, sy - H * 0.01, H * 0.06, H * 0.02); }
      else cloud(x, sy, H * 0.05, "#c9cfe0", 1);
      plate(src[0], x, sy + H * 0.085, "#fff", fz(0.024));
      flame(x + H * 0.06, sy - H * 0.01, H * 0.04 * on, on);
      // 免疫细胞站在河岸上，把警报信扔进河里
      chara(x + H * 0.06, ry0 + H * 0.005, s, Object.assign({}, IMM, { arms: on > 0.9 && Math.sin(time * 3 + i) > 0 ? "carry" : "hold", eyes: on > 0.5 ? "angry" : "open", mouth: "open", tag: i === 0 ? "免疫细胞" : null }));
      if (on > 0.9) { const t = (time * 0.7 + i * 0.3) % 1; cyto(x + H * 0.06 + t * W * 0.05, lerp(ry0 - s * 3.4, ry0 + H * 0.04, t) - Math.sin(t * Math.PI) * H * 0.05, H * 0.017, null, 1); }
    });
    // 河里漂向大脑的细胞因子，越来越多
    const n = Math.round(2 + prog(3, 5) * 7);
    for (let k = 0; k < 9; k++) {
      if (k >= n) continue;
      const t = (time * 0.07 + k / 9) % 1, x = lerp(W * 0.1, W * 0.88, t), y = ry0 + (ry1 - ry0) * (0.3 + rnd(k + 5) * 0.4);
      cyto(x, y, H * 0.024, k % 2 ? "IL-6" : "TNF-α", Math.min(1, t * 8, (1 - t) * 8));
    }
    // 血液里的细胞因子水平
    const lvl = 0.2 + prog(3, 5) * 0.7, mx = W * (nw ? 0.46 : 0.26), my = H * 0.88, mw = W * (nw ? 0.46 : 0.36), mh = H * 0.032;
    text("血液里的细胞因子", mx - fz(0.024) * 0.5, my, fz(0.024), C.ink, "right");
    rrect(mx, my - mh / 2, mw, mh, mh / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(mx, my - mh / 2, mw * lvl, mh, mh / 2); ctx.fillStyle = C.fire; ctx.fill(); outline(1.3); ctx.stroke();
    // 手机上放到血管下面，不盖住免疫细胞的脸
    callout("ck", lt > 4, W * 0.5, ry0 + (ry1 - ry0) * 0.5, nw ? W * 0.55 : W * 0.72, H * (nw ? 0.81 : 0.5), "细胞因子：IL-6、TNF-α 等");
    say("alarm", win(2.5, 7), X[0] + H * 0.06, ry0 - s * 3.2, nw ? W * 0.32 : W * 0.26, H * 0.18, "着火啦！发警报信！", "shout");
    ctx.restore();
  }

  // ---------- 第 2 幕：进入大脑 ----------
  function entryView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = C.tissue; ctx.fillRect(0, 0, W, H);
    const top = Anima.topSafe() + H * 0.01, ry1 = top + H * 0.16, wb = ry1 + H * 0.07;
    river(top, ry1, 8, true);
    const gapX = W * 0.28, bw = W / 12;
    for (let k = 0; k < 12; k++) {
      const x = k * bw, weak = Math.abs(x + bw / 2 - gapX) < bw;
      if (weak) { ctx.save(); ctx.setLineDash([4, 4]); }
      rrect(x + (weak ? 6 : 2), ry1 + 2, bw - (weak ? 12 : 4), wb - ry1 - 4, 6); ctx.fillStyle = weak ? "#fff0e6" : C.wall; ctx.fill(); outline(1.5); ctx.stroke();
      if (weak) ctx.restore();
    }
    text("大脑", W * 0.03, wb + H * 0.04, fz(0.026), "#8a55b0", "left");
    // 从薄弱处渗进来的细胞因子
    for (let k = 0; k < 4; k++) {
      const t = ((lt - 1 - k * 0.7) * 0.25) % 1;
      if (lt < 1 + k * 0.7) continue;
      cyto(gapX + Math.sin(t * 6 + k) * W * 0.02, lerp(top + H * 0.08, H * 0.7, t), H * 0.02, null, Math.sin(t * Math.PI));
    }
    // 迷走神经：从肚子一路打电话
    const bx = W * 0.9, by = H * 0.9, sx = W * 0.62, sy = H * 0.5;
    ctx.beginPath(); ctx.ellipse(bx, by, W * 0.07, H * 0.06, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd9c2"; ctx.fill(); outline(1.8); ctx.stroke();
    flame(bx, by + H * 0.03, H * 0.035, 1); text("肚子", bx - W * 0.075, by - H * 0.07, fz(0.024), C.ink);
    ctx.beginPath(); ctx.ellipse(sx, sy, H * 0.07, H * 0.05, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe3ea"; ctx.fill(); outline(1.8); ctx.stroke();
    text("脑干", sx, sy + 1, fz(0.024), C.ink);
    const nerve = [[bx - W * 0.03, by - H * 0.05], [W * 0.78, H * 0.62], [sx + H * 0.06, sy + H * 0.03]];
    ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(nerve[0][0], nerve[0][1]); ctx.quadraticCurveTo(nerve[1][0], nerve[1][1], nerve[2][0], nerve[2][1]);
    ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.016; ctx.stroke(); ctx.strokeStyle = "#fff1b8"; ctx.lineWidth = H * 0.01; ctx.stroke();
    if (lt > 2.5) { const t = ((lt - 2.5) * 0.5) % 1, u = 1 - t; const px = u * u * nerve[0][0] + 2 * u * t * nerve[1][0] + t * t * nerve[2][0], py = u * u * nerve[0][1] + 2 * u * t * nerve[1][1] + t * t * nerve[2][1]; glow(px, py, H * 0.03, C.gold, 1); Anima.bolt(px, py, H * 0.015, 1); }
    // 小胶质细胞：被叫醒
    const wake = prog(4.5, 1.5), mx = W * (nw ? 0.34 : 0.42), my = H * 0.9, s = H * 0.058;
    flame(mx - s * 1.4, my, H * 0.035 * wake, wake); flame(mx + s * 1.5, my - H * 0.02, H * 0.03 * wake, wake);
    chara(mx, my, s, Object.assign({}, MG, { tag: "小胶质细胞", eyes: wake > 0.5 ? "angry" : "sleepy", brow: wake > 0.5 ? "angry" : null, mouth: wake > 0.5 ? "open" : "cat", arms: wake > 0.5 ? "fist" : "hug" }));
    if (wake < 0.5) emote("zzz", mx + s * 0.8, my - s * 3.2, s * 0.6);
    else { emote("anger", mx + s * 0.9, my - s * 3, s * 0.6); for (let k = 0; k < 3; k++) { const t = (time * 0.6 + k / 3) % 1; cyto(mx + Math.cos(k * 2.1) * s * (1.2 + t * 2), my - s * 1.6 + Math.sin(k * 2.1) * s * (1 + t * 1.5), H * 0.014, null, (1 - t) * wake); } }
    callout("weak", win(1.2, 6), gapX + bw * 0.4, (ry1 + wb) / 2, nw ? W * 0.3 : W * 0.34, H * 0.42, "屏障较薄弱处：渗进来");
    callout("vagus", lt > 3, nerve[1][0], nerve[1][1], nw ? W * 0.84 : W * 0.86, H * 0.35, "迷走神经：打电话报信");
    say("mg", lt > 7, mx, my - s * 3.2, nw ? W * 0.3 : W * 0.26, H * 0.56, "有敌情？我也来放警报！", "shout");
    ctx.restore();
  }

  // ---------- 第 3 幕：色氨酸的岔路 ----------
  function trackPath(k, up, t, g) {
    // 先走主干，再上岔或下岔
    if (t < 0.45) { const u = t / 0.45; return [lerp(g.x0, g.fx, u), g.y0]; }
    const u = (t - 0.45) / 0.55, ty = up ? g.upY : g.dnY;
    return [lerp(g.fx, g.x1, u), lerp(g.y0, ty, Math.min(1, u * 1.6))];
  }
  function trpView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fffaf0", "#f6f0fb", 23);
    const g = { x0: W * 0.04, fx: W * (nw ? 0.42 : 0.4), x1: W * 0.8, y0: H * 0.6, upY: H * 0.36, dnY: H * 0.84 };
    const ido = prog(4, 1.2), up = 0.45 - ido * 0.33;
    // 铁轨
    const rail = (pts) => { ctx.lineCap = "round"; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.022; ctx.stroke(); ctx.strokeStyle = "#f3e2cf"; ctx.lineWidth = H * 0.014; ctx.stroke(); };
    rail([[g.x0, g.y0], [g.fx, g.y0]]);
    rail([[g.fx, g.y0], [g.fx + (g.x1 - g.fx) / 1.6, g.upY], [g.x1 + W * 0.05, g.upY]]);
    rail([[g.fx, g.y0], [g.fx + (g.x1 - g.fx) / 1.6, g.dnY], [g.x1 + W * 0.05, g.dnY]]);
    // 5-HT 工厂和犬尿氨酸站
    const hx = W * (nw ? 0.86 : 0.88), hs = H * 0.12;
    rrect(hx - hs * 0.6, g.upY - hs * 0.95, hs * 1.2, hs * 0.85, 8); ctx.fillStyle = "#dff5ec"; ctx.fill(); outline(1.8); ctx.stroke();
    rrect(hx + hs * 0.15, g.upY - hs * 1.3, hs * 0.22, hs * 0.4, 3); ctx.fillStyle = "#c9ebdd"; ctx.fill(); ctx.stroke();
    plate("5-HT 工厂", hx, g.upY + hs * 0.2, "#e9f8f1", fz(0.026));
    chara(hx, g.upY - hs * 0.12, H * 0.028, { who: "5HT", eyes: up > 0.3 ? "happy" : "teary", mouth: up > 0.3 ? "smile" : "sad", shadow: false });
    rrect(hx - hs * 0.6, g.dnY - hs * 0.8, hs * 1.2, hs * 0.7, 8); ctx.fillStyle = "#ffe6d6"; ctx.fill(); outline(1.8); ctx.stroke();
    plate("犬尿氨酸", hx, g.dnY + hs * 0.2, "#fff0e6", fz(0.026));
    // 原料小条
    const mx = W * (nw ? 0.56 : 0.6), my = Anima.topSafe() + H * 0.05, mw = W * (nw ? 0.34 : 0.22), mh = H * 0.03;
    text("做 5-HT 的原料", mx - fz(0.024) * 0.5, my, fz(0.024), C.ink, "right");
    rrect(mx, my - mh / 2, mw, mh, mh / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(mx, my - mh / 2, mw * up / 0.45, mh, mh / 2); ctx.fillStyle = "#62c9ab"; ctx.fill(); outline(1.3); ctx.stroke();
    // 色氨酸小人一个个走过来
    const N = 7, cs = H * 0.03;
    for (let k = 0; k < N; k++) {
      const ph = time * 0.13 + k / N, cyc = Math.floor(ph), t = ph - cyc;
      const goUp = rnd(cyc * 17 + k) < up;
      const p = trackPath(k, goUp, t, g);
      const kyn = !goUp && t > 0.75;
      chara(p[0], p[1] - H * 0.01, cs, Object.assign({}, TRP, kyn ? { hair: "#f4a88a", cloth: "#ffe6d6" } : {}, { walk: time * 9 + k, eyes: "happy", alpha: Math.min(1, t * 10, (1 - t) * 10), shadow: false, tag: k === 0 && t < 0.45 ? "色氨酸" : null }));
    }
    // 扳道工 IDO 和道岔
    const ix = g.fx - W * 0.02, iy = g.y0 + H * 0.2, s = H * 0.05;
    ctx.save(); ctx.translate(g.fx, g.y0 + H * 0.03); ctx.rotate(-0.5 + ido * 1.0);
    rrect(-H * 0.008, -H * 0.08, H * 0.016, H * 0.08, 4); ctx.fillStyle = "#c9b6e8"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -H * 0.08, H * 0.014, 0, Math.PI * 2); ctx.fillStyle = C.bad; ctx.fill(); ctx.stroke();
    ctx.restore();
    chara(ix, iy, s, Object.assign({}, IDO, { tag: "IDO", eyes: ido > 0.5 ? "angry" : "sleepy", brow: ido > 0.5 ? "angry" : null, arms: ido > 0.5 ? "point" : "hug", mouth: ido > 0.5 ? "open" : "cat", dir: 1 }));
    if (ido < 0.3) emote("zzz", ix + s, iy - s * 3.2, s * 0.6);
    // 细胞因子飞来叫醒 IDO
    for (let k = 0; k < 3; k++) {
      const t = clamp((lt - 2 - k * 0.4) / 1.8, 0, 1);
      if (t <= 0 || t >= 1) continue;
      cyto(lerp(W * 0.05, ix, t), lerp(H * 0.95, iy - s * 2, t) - Math.sin(t * Math.PI) * H * 0.1, H * 0.022, "IL-6");
    }
    if (win(4, 5.2)) sfx("咔嚓！", g.fx + W * 0.06, g.y0 + H * 0.12, H * 0.045, C.bad, -0.1, 1);
    callout("trp", win(0.5, 4), g.x0 + W * 0.12, g.y0 - H * 0.04, nw ? W * 0.28 : W * 0.22, H * 0.34, "色氨酸：来自食物");
    callout("ido", lt > 5.5, ix + s * 0.5, iy - s * 2, nw ? W * 0.26 : W * 0.2, H * 0.36, "IDO：把色氨酸拐向犬尿氨酸");
    say("less", lt > 8, hx, g.upY - hs, nw ? W * 0.7 : W * 0.66, nw ? H * 0.6 : H * 0.2, "原料越来越少了……", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：喹啉酸和 NMDA ----------
  function quinView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#f7f3fc", "#fbeef0", 33);
    const post = H * 0.78, rs = H * 0.05, cs = H * 0.036;
    Anima.postMembrane(post, "#f7dde8", { face: false });
    const X = nw ? [W * 0.46, W * 0.66, W * 0.86] : [W * 0.46, W * 0.64, W * 0.82];
    const arrive = X.map((x, i) => prog(2 + i * 1.6, 1.6));
    const load = arrive.reduce((p, q) => p + q, 0) / 3;
    // 小胶质细胞把犬尿氨酸做成喹啉酸
    const mx = W * (nw ? 0.14 : 0.13), my = H * 0.66, s = H * 0.055;
    flame(mx + s * 1.3, my - H * 0.01, H * 0.03, 1);
    chara(mx, my, s, Object.assign({}, MG, { tag: "小胶质细胞", eyes: "angry", brow: "angry", arms: "carry", mouth: "open" }));
    for (let k = 0; k < 2; k++) { const t = (time * 0.3 + k / 2) % 1; chara(lerp(mx - W * 0.1, mx - s * 0.8, t), my, s * 0.45, Object.assign({}, TRP, { hair: "#f4a88a", cloth: "#ffe6d6", walk: time * 9, alpha: Math.min(1, t * 6, (1 - t) * 6), shadow: false })); }
    X.forEach((x, i) => {
      const p = arrive[i];
      const r = Anima.receptor(x, post, rs, "#ffd27a", p >= 1 ? 1 : 0, { shape: "square", label: i === 0 ? "NMDA" : null });
      if (p > 0) chara(lerp(mx + s, r.site.x, p), lerp(my, r.site.y + cs * 0.25, p) - Math.sin(p * Math.PI) * H * 0.08, cs, Object.assign({}, QUIN, { tag: i === 0 ? "喹啉酸" : null, walk: p < 1 ? time * 9 : null, eyes: "angry", arms: p >= 1 ? "fist" : "down", mouth: "grin" }));
      if (p >= 1) for (let k = 0; k < 3; k++) { const t = (time * 0.9 + k / 3 + i * 0.2) % 1; ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI); Anima.ion(x + (k - 1) * rs * 0.25, lerp(post - rs * 0.6, post + H * 0.14, t), H * 0.014, "Ca", "#c8f0d8"); ctx.restore(); }
    });
    if (lt > 4 && lt < 9) sfx("咚咚咚！", X[1], post - rs * 3.8 - H * 0.05, H * 0.045, C.bad, -0.1, 1);
    // 神经元：越来越累
    const fx = W * (nw ? 0.12 : 0.1), fy = post + (H - post) * 0.55;
    face(fx, fy, H * 0.075, 1 - load * 1.8);
    if (load > 0.5) { emote("sweat", fx + H * 0.06, fy - H * 0.05, H * 0.035); emote("gloom", fx, fy - H * 0.08, H * 0.035, load); }
    callout("q", win(3, 7.5), X[0], post - rs * 1.6, nw ? W * 0.36 : W * 0.34, H * 0.36, "喹啉酸：NMDA 门的激动剂");
    callout("ca", lt > 7, X[2], post + H * 0.08, nw ? W * 0.66 : W * 0.72, H * 0.96, "Ca²⁺ 涌进来太多");
    say("tired", lt > 8.5, fx, fy - H * 0.05, nw ? W * 0.3 : W * 0.28, H * 0.42, "太吵了……累得吃不消", "think");
    ctx.restore();
  }

  // ---------- 第 5 幕：生病行为（两张卡片对比） ----------
  function bed(x, y, w, s, opt) {
    rrect(x - w / 2, y - s * 0.6, w, s * 0.9, s * 0.25); ctx.fillStyle = "#f3e2cf"; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(x - w / 2 - s * 0.1, y - s * 2.2, s * 0.35, s * 2.5, s * 0.15); ctx.fillStyle = "#e8cfb4"; ctx.fill(); ctx.stroke();
    chara(x - w * 0.22, y - s * 0.3, s, Object.assign({ who: "neuron", arms: "hug", shadow: false }, opt));
    rrect(x - w * 0.36, y - s * 1.35, w * 0.8, s * 1.05, s * 0.3); ctx.fillStyle = "#cfe3f7"; ctx.fill(); outline(1.6); ctx.stroke();
  }
  function sickView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fdf8f2", "#f2f0f8", 43);
    const top = Anima.topSafe() + H * 0.03, gap = W * 0.03, cw = (W - gap * 3) / 2, chh = H * 0.96 - top;
    const T = ["感冒几天", "炎症一直不退"];
    T.forEach((t, i) => {
      const x = gap + i * (cw + gap), mx = x + cw / 2;
      rrect(x, top, cw, chh, 18); ctx.fillStyle = i ? "#eef0f7" : "#fffaf0"; ctx.fill(); outline(1.6); ctx.stroke();
      text(t, mx, top + fz(0.03) * 1.1, fz(0.03), C.ink);
      const s = Math.min(H * 0.068, cw * 0.12), by = top + chh * 0.8, bw = cw * 0.72;
      const well = i === 0 ? prog(6.5, 1.5) : 0;
      // 天空：左边雨停出太阳，右边一直下雨
      const cy = top + chh * 0.3, cr = Math.min(H * 0.07, cw * 0.12);
      ctx.save(); rrect(x, top, cw, chh, 18); ctx.clip();
      sun(mx + cw * 0.22, cy - cr * 0.3, cr * 0.6, well);
      cloud(mx - cw * 0.05, cy, cr, "#c9cfe0", 1 - well);
      rain(mx - cw * 0.2, mx + cw * 0.12, cy + cr * 0.5, by - s * 2, 18, 1 - well);
      ctx.restore();
      if (well > 0.5) {
        chara(mx, by + s * 0.4, s * 1.1, { who: "neuron", eyes: "happy", mouth: "grin", arms: "up", jump: Math.abs(Math.sin(time * 4)) * 0.2 });
        sparkles(mx, by - s * 1.5, s * 2, 4, well, 5);
      } else {
        bed(mx, by, bw, s, { eyes: "sleepy", mouth: i ? "sad" : "flat", gray: i ? 0.45 : 0.2 });
        emote(i ? "gloom" : "zzz", mx - bw * 0.22, by - s * 3, s * 0.7);
      }
      if (i === 0) { // 免疫细胞打败病毒
        const beat = prog(2, 3.5), vx = mx + bw * 0.3, vy = by - s * 2.6;
        if (beat < 1) { ctx.save(); ctx.globalAlpha *= 1 - beat; cyto(vx, vy, s * 0.55, null); ctx.fillStyle = "#9fd86a"; ctx.beginPath(); ctx.arc(vx, vy, s * 0.35, 0, Math.PI * 2); ctx.fill(); face(vx, vy, s * 0.25, -1, false); ctx.restore(); }
        if (lt > 1 && lt < 6.5) chara(vx + s * 1.3, by - s * 0.2, s * 0.8, Object.assign({}, IMM, { arms: "fist", eyes: "angry", mouth: "open", dir: -1 }));
        if (win(3, 5)) sfx("打败病毒！", vx, vy - s * 1.2, H * 0.035, C.good, -0.1, 1);
      } else {
        flame(mx + bw * 0.34, by - s * 0.3, s * 0.9, 1);
        const L = ["累", "没兴趣", "想躲起来"];
        L.forEach((l, k) => { const p = prog(2 + k * 1.3, 0.6); if (p > 0) { ctx.save(); ctx.globalAlpha *= p; plate(l, x + cw * (0.2 + k * 0.3), top + chh * 0.55 - (k % 2) * H * 0.04, "#fff", fz(0.026)); ctx.restore(); } });
      }
    });
    // 手机上卡片窄：两个气泡都放在各自卡片上半（云和雨那里），不盖住床上的人、也不跑出卡片
    say("rest", win(1, 6), gap + cw / 2 - cw * 0.15, top + chh * 0.6, gap + cw * (nw ? 0.5 : 0.3), top + chh * (nw ? 0.3 : 0.48), "多休息，力气留给免疫系统", "say");
    say("stuck", lt > 8, gap * 2 + cw * 1.5, top + chh * 0.6, gap * 2 + cw * 1.5, top + chh * 0.3, nw ? "省电模式\n关不掉……" : "省电模式关不掉……", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：一部分人的“发炎型”抑郁 ----------
  function subView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#f7f5fb", "#fdf0ee", 53);
    const n = 8, cols = nw ? 4 : 8, rows = nw ? 2 : 1, top = Anima.topSafe() + H * 0.05;
    const cw = W / (cols + 0.4), s = Math.min(H * 0.075, cw * 0.3), hot = [1, 4, 6];
    const rowY = (r) => nw ? top + H * (0.32 + r * 0.4) : H * 0.72;
    const vi = (lt - 4) / 0.75, pos = (i) => [cw * (0.7 + i % cols), rowY(Math.floor(i / cols))];
    for (let i = 0; i < n; i++) {
      const [x, y] = pos(i), isHot = hot.indexOf(i) >= 0, seen = vi > i + 0.5, helped = isHot && seen ? 1 : 0;
      cloud(x, y - s * 4.3, s * 0.9, helped ? "#f4f6fb" : "#c9cfe0", 1);
      if (isHot) flame(x + s * 1.1, y - s * 0.2, s * 0.7 * (helped ? 0.35 : 1), lt > 1.5 ? 1 - helped * 0.5 : 0);
      chara(x, y, s, { who: "neuron", eyes: helped ? "happy" : "sleepy", mouth: helped ? "smile" : "flat", gray: helped ? 0.1 : 0.4, seed: i });
      if (seen && !isHot && vi < n + 2) emote("?", x + s * 0.8, y - s * 3, s * 0.5);
      if (helped) sparkles(x, y - s * 1.5, s * 1.6, 3, 1, i);
    }
    // 抗炎药访客挨个走过
    if (vi > -0.5 && vi < n) {
      const k = clamp(Math.floor(vi), 0, n - 1), f = clamp(vi - k, 0, 1), p0 = pos(k), p1 = pos(Math.min(n - 1, k + 1));
      const same = Math.floor(k / cols) === Math.floor(Math.min(n - 1, k + 1) / cols);
      const px = f < 0.6 || !same ? p0[0] : lerp(p0[0], p1[0], (f - 0.6) / 0.4);
      chara(px - s * 1.1, p0[1] + s * 0.5, s * 0.8, { who: "drug", hatColor: "#ffb36b", tag: "抗炎（研究中）", walk: time * 9, eyes: "happy", dir: 1 });
    }
    callout("crp", win(1.5, 4.5), cw * 1.7 + s * 1.1, rowY(0) - s * 0.6, nw ? W * 0.5 : W * 0.4, top + H * 0.04, "炎症指标偏高（如 CRP、IL-6）");
    // 手机上方框放在两排中间（第一排的腿和第二排的云那里），字短一点排成两行，不盖住任何人的脸
    say("dont", lt > 10, W * 0.5, H * 0.5, W * 0.5, nw ? H * 0.565 : H * 0.88, nw ? "还在研究中：别自己吃抗炎药治抑郁" : "还在研究中：请不要自己吃抗炎药治抑郁", "box");
    ctx.restore();
  }

  // ---------- 第 7 幕：把小火苗调小 ----------
  function icon(k, x, y, r) {
    outline(Math.max(1.4, r * 0.06));
    if (k === 0) { ctx.beginPath(); ctx.moveTo(x - r * 0.55, y + r * 0.2); ctx.lineTo(x - r * 0.5, y - r * 0.3); ctx.lineTo(x - r * 0.1, y - r * 0.3); ctx.quadraticCurveTo(x + r * 0.05, y, x + r * 0.45, y); ctx.quadraticCurveTo(x + r * 0.62, y + r * 0.08, x + r * 0.58, y + r * 0.2); ctx.closePath(); ctx.fillStyle = "#bfe8d6"; ctx.fill(); ctx.stroke(); }
    else if (k === 1) { ctx.beginPath(); ctx.arc(x, y, r * 0.42, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(x + r * 0.2, y - r * 0.15, r * 0.36, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); text("z", x + r * 0.4, y - r * 0.35, r * 0.4, C.soft); }
    else { rrect(x - r * 0.5, y - r * 0.2, r, r * 0.55, r * 0.12); ctx.fillStyle = "#ffe0ea"; ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y + r * 0.05, r * 0.18, Math.PI, 0); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y + r * 0.05); ctx.lineTo(x + r * 0.1, y - r * 0.08); ctx.stroke(); }
  }
  function townView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    const clear = prog(7, 3);
    Anima.wash(mix("#dfe6f2", "#fff4e0", clear), mix("#eef0f7", "#fdeef3", clear));
    const gy = H * 0.86;
    ctx.beginPath(); ctx.moveTo(0, gy - H * 0.05); ctx.quadraticCurveTo(W * 0.25, gy - H * 0.16, W * 0.5, gy - H * 0.06); ctx.quadraticCurveTo(W * 0.75, gy - H * 0.14, W, gy - H * 0.05);
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fillStyle = mix("#d5dde3", "#d6efd0", clear); ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = mix("#c3cdc8", "#bfe3a8", clear); ctx.fillRect(0, gy, W, H - gy); outline(1.6); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    const cy = H * 0.3, cr = Math.min(H * 0.1, W * 0.08);
    sun(W * 0.5, cy - H * 0.02, cr * 0.7, clear);
    rain(W * 0.38, W * 0.62, cy + cr * 0.4, gy, 36, 1 - clear);
    cloud(W * 0.5 - clear * W * 0.25, cy - clear * H * 0.06, cr * (1 - clear * 0.4), mix("#c9cfe0", "#ffffff", clear), 1);
    // 小火苗随着帮手出现越来越小
    const help = [prog(1.5, 1), prog(3.5, 1), prog(5.5, 1)];
    const f = 1 - (help[0] + help[1] + help[2]) / 3 * 0.8;
    const s = H * 0.07, x = W * 0.5;
    flame(x + s * 1.6, gy - H * 0.01, H * 0.07 * f, 1);
    chara(x, gy, s, { who: "neuron", eyes: clear > 0.5 ? "happy" : "sleepy", mouth: clear > 0.5 ? "grin" : "flat", arms: clear > 0.5 ? "up" : "hug", gray: (1 - clear) * 0.4, jump: clear > 0.5 ? Math.abs(Math.sin(time * 3)) * 0.12 : 0 });
    const L = ["运动", "睡眠", "减重"], tr = Math.min(H * 0.07, W * 0.06);
    L.forEach((l, i) => {
      const p = help[i]; if (p < 0.02) return;
      const px = nw ? W * (0.15 + i * 0.35) : W * (i < 2 ? 0.13 : 0.87), py = nw ? H * 0.44 : H * (i === 0 ? 0.36 : i === 1 ? 0.62 : 0.48);
      const tx = nw ? px : px;
      ctx.save(); ctx.globalAlpha *= p;
      ctx.beginPath(); ctx.arc(tx, py, tr, 0, Math.PI * 2); ctx.fillStyle = "#fffdfb"; ctx.fill(); ctx.strokeStyle = ["#8fd3a8", "#b8b0f0", "#ff9aa9"][i]; ctx.lineWidth = Math.max(2.5, tr * 0.1); ctx.stroke();
      icon(i, tx, py - tr * 0.05, tr * 0.95);
      plate(l, tx, py + tr * 1.1, "#fff", fz(0.028));
      ctx.restore();
    });
    say("ok", lt > 8.5, x, gy - s * 3.2, nw ? W * 0.5 : W * 0.72, nw ? H * 0.2 : H * 0.2, "火苗小了，天也慢慢晴了～", "say");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    const V = [bodyView, entryView, trpView, quinView, sickView, subView, townView];
    V.forEach((f, i) => { const v = S["v" + i]; if (v > 0.02) f(v); });
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0764a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: 13, accent: "#f08a64",
    titleCard: { lines: ["身体发炎，", "心情也会下雨"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
