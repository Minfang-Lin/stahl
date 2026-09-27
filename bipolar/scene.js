Anima.register("bipolar", {
    "title": "心境的跷跷板：双相障碍",
    "tag": "双相障碍",
    "headline": "心情不只会下雨，还会【暴晒】",
    "lede": "双相障碍的心境像一架跷跷板：一头是低落的抑郁，另一头是高涨的躁狂或轻躁狂。这一集回到心情小镇，看看“高”的时候是什么样子，为什么医生总要问“有没有特别兴奋的时候”，以及规律作息为什么这么重要。",
    "summary": "躁狂和轻躁狂的表现，双相 I 型和 II 型，混合特征，为什么不能只用抗抑郁药，以及睡眠和作息的重要性。",
    "chapter": "对应 Stahl《精神药理学精要》第 6 章 · 双相谱系",
    "footer": "如果你或身边的人出现伤害自己的想法，请立刻告诉信任的人，并尽快前往医院急诊或联系当地心理援助热线。",
    "canvasLabel": "心情小镇的居民站在一架在暴雨和烈日之间摇摆的跷跷板上，演示双相障碍的高与低",
    "regions": ["pfc", "amygdala", "brainstem"],
    "parts": ["mood"],
    "cast": ["DA", "NE", "5HT", "Glu"],
    "color": "#f7b267"
  }, () => {
  const CH = [
    { title: "心境的跷跷板", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["心境", "有低也有高"], pill2: ["名字", "双相"],
      text: "在“心情的天气预报”里，我们见过抑郁的连绵阴雨。可有些人的心情不只会下雨，还会突然暴晒：一段时间低落、没劲，另一段时间却异常高涨、停不下来，像坐在一架跷跷板上。这种高低交替的病叫双相障碍，以前也叫“躁郁症”。两头之间，也常常有平稳的日子。",
      fact: "双相障碍 = 抑郁发作 + 躁狂或轻躁狂发作，两头之间常有平稳期" },
    { title: "“高”的时候什么样", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["天气", "暴晒"], pill2: ["睡眠", "少也不累"],
      text: "跷跷板翘到“高”的一头，叫躁狂或轻躁狂：精力特别旺盛，睡得很少却不觉得累；话变多，想法一个接一个飞快地冒出来；容易冲动花钱、做冒险的决定；觉得自己无所不能。Stahl 认为，这时大脑里管情绪、判断和睡眠的几条环路，可能都“开得太大”，快递员们跑得停不下来。",
      fact: "“高”不是单纯的开心：它持续好几天，明显不像平时的自己，身边的人也看得出来" },
    { title: "I 型和 II 型", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["躁狂", "≥ 1 周"], pill2: ["轻躁狂", "≥ 4 天"],
      text: "双相分成几种。双相 I 型：至少有过一次躁狂，“高”得很明显，常常影响工作和生活，甚至需要住院。双相 II 型：“高”的时候只是轻躁狂，程度轻一些，却有过抑郁发作。II 型并不是“轻型”：它的抑郁往往更多、更久，而那几天“状态特别好”，很容易被忽略。",
      fact: "躁狂一般持续至少 1 周，轻躁狂至少 4 天；II 型的抑郁时间常常比 I 型更长" },
    { title: "又烦又累又停不下来", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["天气", "晴雨交加"], pill2: ["特征", "混合"],
      text: "高和低有时还会同时出现，叫做“混合特征”：心里低落、疲惫，脑子却转个不停，坐立不安、烦躁易怒，睡也睡不好。就像太阳雨里还打着雷。这种状态特别难受，也更容易冒出冲动的念头，所以一旦出现，要尽快告诉家人，并及时去看医生。",
      fact: "混合特征：抑郁和躁狂的症状混在一起出现，痛苦大，需要尽快就医" },
    { title: "医生为什么问“高”", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["就诊时", "多在低谷"], pill2: ["治疗", "思路不同"],
      text: "很多双相的人，第一次看病时正处在抑郁里，“高”的日子反而像是好时光，想不起来说。所以医生会仔细问：以前有没有特别兴奋、不怎么睡也不累的时候？这很重要，因为对双相来说，单用抗抑郁药可能把跷跷板一下推到“高”的一头（转躁），或者让高低循环变快，治疗思路和单纯抑郁不一样。",
      fact: "看抑郁时，请把“特别兴奋、不怎么睡”的经历告诉医生，这会影响用药选择" },
    { title: "给跷跷板打好地基", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["作息", "规律"], pill2: ["熬夜", "当心"],
      text: "双相是可以治疗、可以长期管理的。规律睡眠和作息是跷跷板下的地基：熬夜、倒时差、连续睡太少，都可能触发发作。按时用药、不自己停药，记心情日记，留意“睡得少也不累”这样的早期信号并告诉医生。如果出现伤害自己的想法，请马上告诉身边的人，并尽快去医院急诊。",
      fact: "睡眠变少常常是“高”的早期信号；规律作息 + 规范治疗，能让跷跷板稳下来" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { hot: "#ffb36b", rainC: "#8fb3dc" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt = Anima.sceneTime; // 本幕已经演了几秒（和引擎、截图工具用同一个钟）
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  const narrow = () => W / H < 1.5;

  // ---------- 天气小零件（和“心情的天气预报”一样的画法） ----------
  function cloud(x, y, r, color, mood, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const bumps = [[-0.9, 0.15, 0.55], [-0.45, -0.25, 0.7], [0.15, -0.4, 0.8], [0.7, -0.1, 0.62], [1.0, 0.25, 0.45], [0, 0.25, 0.7]];
    ctx.beginPath();
    for (const b of bumps) { ctx.moveTo(x + b[0] * r + b[2] * r, y + b[1] * r); ctx.arc(x + b[0] * r, y + b[1] * r, b[2] * r, 0, Math.PI * 2); }
    outline(Math.max(4, r * 0.09)); ctx.stroke();
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
  // 太阳：hot 越大越“烈”（橙红色、光芒更长、冒热气）
  function sun(x, y, r, a, hot) {
    if (a < 0.02) return;
    const h = hot || 0;
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * (2.6 + h * 1.4), mix(C.gold, "#ff8a4d", h), 0.9);
    ctx.translate(x, y); ctx.rotate(time * (0.3 + h * 1.2));
    for (let i = 0; i < 12; i++) {
      ctx.rotate(Math.PI / 6);
      const len = 1.5 + h * 0.45 + (i % 2) * h * 0.25;
      ctx.beginPath(); ctx.moveTo(-r * 0.16, -r * 1.12); ctx.lineTo(0, -r * len); ctx.lineTo(r * 0.16, -r * 1.12); ctx.closePath();
      ctx.fillStyle = mix("#ffd76a", "#ff9a52", h); ctx.fill(); outline(1.5); ctx.stroke();
    }
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#ffe68a", "#ffb36b", h); ctx.fill(); outline(2); ctx.stroke();
    if (h > 0.5) {
      // 瞪大眼睛的烈日
      ctx.fillStyle = C.line;
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x + d * r * 0.28, y - r * 0.02, r * 0.1, 0, Math.PI * 2); ctx.fill(); }
      ctx.beginPath(); ctx.arc(x, y + r * 0.3, r * 0.16, 0, Math.PI * 2); ctx.fillStyle = "#ff8a8a"; ctx.fill(); outline(1.5); ctx.stroke();
    } else face(x, y + r * 0.1, r * 0.55, 1);
    ctx.restore();
  }
  function bolt(x, y, s, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - s * 0.35, y + s * 0.7); ctx.lineTo(x + s * 0.05, y + s * 0.62); ctx.lineTo(x - s * 0.2, y + s * 1.3);
    ctx.lineTo(x + s * 0.45, y + s * 0.45); ctx.lineTo(x + s * 0.08, y + s * 0.52); ctx.lineTo(x + s * 0.3, y); ctx.closePath();
    ctx.fillStyle = "#ffe066"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.restore();
  }
  function heatWaves(x0, x1, y, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a * 0.6;
    ctx.strokeStyle = "#ffb36b"; ctx.lineWidth = Math.max(1.5, H * 0.004); ctx.lineCap = "round";
    for (let k = 0; k < 5; k++) {
      const bx = lerp(x0, x1, (k + 0.5) / 5), up = ((time * 0.5 + k * 0.23) % 1);
      ctx.globalAlpha = a * 0.6 * Math.sin(up * Math.PI);
      ctx.beginPath();
      for (let j = 0; j <= 12; j++) { const yy = y - up * H * 0.12 - j * H * 0.008; const xx = bx + Math.sin(j * 0.9 + time * 4) * H * 0.008; if (j) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
      ctx.stroke();
    }
    ctx.restore();
  }
  function house(x, y, w, h, color, roof) {
    rrect(x - w / 2, y - h, w, h, w * 0.08); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - w * 0.62, y - h + 2); ctx.lineTo(x, y - h - w * 0.5); ctx.lineTo(x + w * 0.62, y - h + 2); ctx.closePath();
    ctx.fillStyle = roof; ctx.fill(); ctx.stroke();
    rrect(x - w * 0.16, y - h * 0.62, w * 0.32, h * 0.3, 3); ctx.fillStyle = "#fff6d8"; ctx.fill(); ctx.stroke();
  }
  // 小镇底色：wet 0～1 下雨程度，hot 0～1 暴晒程度，night 0～1 夜晚
  function town(wet, hot, night) {
    const n = night || 0;
    let top = mix(mix("#fff4e0", "#dfe6f2", wet), "#ffd9a8", hot), bot = mix(mix("#fdeef3", "#eef0f7", wet), "#fff0d6", hot);
    top = mix(top, "#8c8fc4", n); bot = mix(bot, "#d9d3ef", n);
    Anima.wash(top, bot);
    if (wet < 0.5 && n < 0.5) Anima.bokeh(6, hot > 0.5 ? "#ffd08a" : "#ffe3a8", 0.8, 11);
    const gy = H * 0.86;
    ctx.beginPath(); ctx.moveTo(0, gy - H * 0.05);
    ctx.quadraticCurveTo(W * 0.25, gy - H * 0.16, W * 0.5, gy - H * 0.06); ctx.quadraticCurveTo(W * 0.75, gy - H * 0.14, W, gy - H * 0.05);
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
    ctx.fillStyle = mix(mix(mix("#d6efd0", "#d5dde3", wet), "#f1dca0", hot), "#a9b3c9", n); ctx.fill(); outline(1.6); ctx.stroke();
    const hs = H * 0.07;
    house(W * 0.22, gy - H * 0.06, hs, hs * 0.8, mix("#ffe0cf", "#e4e1e6", wet), mix("#f28ca5", "#b7aebd", wet));
    house(W * 0.8, gy - H * 0.065, hs * 0.9, hs * 0.75, mix("#fff1b8", "#e8e6e0", wet), mix("#8fc3ea", "#aab4c0", wet));
    ctx.fillStyle = mix(mix(mix("#bfe3a8", "#c3cdc8", wet), "#e8cf8a", hot), "#9aa7bd", n); ctx.fillRect(0, gy, W, H - gy);
    outline(1.6); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    return gy;
  }

  // ---------- 跷跷板 + 心情温度计 ----------
  // m：-1（低，左边沉下去）～ +1（高，右边翘起来）
  function seesaw(px, gy0, L, m, base, lift) {
    const gy = gy0 - (lift || 0);
    const py = gy - L * 0.16, ang = m * 0.26; // 沉下去的一头就是现在的心境
    // 地基砖块（最后一幕）：砌好之前，只有一根摇摇晃晃的细杆撑着
    const blocks = base || [];
    if (lift) {
      const done = blocks.reduce((t, b) => t + b.a, 0) / Math.max(1, blocks.length);
      ctx.save(); ctx.globalAlpha *= 1 - done;
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, L * 0.018); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(px, gy); ctx.quadraticCurveTo(px + Math.sin(time * 5) * L * 0.03, (gy + gy0) / 2, px, gy0); ctx.stroke();
      ctx.restore();
    }
    blocks.forEach((b) => {
      if (b.a < 0.02) return;
      ctx.save(); ctx.globalAlpha *= b.a;
      const bw = b.w, bh = b.h, by = b.y - (1 - b.a) * H * 0.08;
      rrect(b.x - bw / 2, by - bh, bw, bh, bh * 0.2); ctx.fillStyle = b.color; ctx.fill(); outline(1.8); ctx.stroke();
      text(b.t, b.x, by - bh / 2 + 1, Math.min(bh * 0.52, fsz(0.03)), C.ink);
      ctx.restore();
    });
    // 支点
    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - L * 0.09, gy); ctx.lineTo(px + L * 0.09, gy); ctx.closePath();
    ctx.fillStyle = "#e9c9a4"; ctx.fill(); outline(2); ctx.stroke();
    // 木板
    const th = Math.max(6, L * 0.035);
    ctx.save(); ctx.translate(px, py); ctx.rotate(ang);
    rrect(-L / 2, -th / 2, L, th, th / 2); ctx.fillStyle = "#f3d9b1"; ctx.fill(); outline(2); ctx.stroke();
    ctx.strokeStyle = alpha("#c49a6c", 0.6); ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(-L * 0.45, 0); ctx.lineTo(-L * 0.05, 0); ctx.moveTo(L * 0.05, 0); ctx.lineTo(L * 0.45, 0); ctx.stroke();
    ctx.restore();
    ctx.beginPath(); ctx.arc(px, py, th * 0.55, 0, Math.PI * 2); ctx.fillStyle = "#c49a6c"; ctx.fill(); outline(1.5); ctx.stroke();
    const end = (d) => ({ x: px + Math.cos(ang) * L / 2 * d, y: py + Math.sin(ang) * L / 2 * d });
    const Lp = end(-1), Rp = end(1);
    // 两头的小牌子：左“低”（小雨云），右“高”（小太阳）
    const br = L * 0.06;
    cloud(Lp.x, Lp.y - br * 1.2, br, "#c9cfe0", m < -0.3 ? -1 : null, 1);
    text("低", Lp.x, Lp.y - br * 1.15, br * 0.75, "#5a6f90");
    sun(Rp.x, Rp.y - br * 1.3, br * 0.7, 1, clamp(m, 0, 1));
    text("高", Rp.x, Rp.y + br * 0.85, br * 0.75, "#d9722a");
    const on = (d) => ({ x: px + Math.cos(ang) * d, y: py + Math.sin(ang) * d - th / 2 }); // 木板上离支点 d 的位置
    return { py, L: Lp, R: Rp, ang, on };
  }
  const bands = [[0.7, 1, "躁狂", "#ffb3a0"], [0.35, 0.7, "轻躁狂", "#ffe0a8"], [-0.35, 0.35, "平稳", "#cdeed8"], [-1, -0.35, "抑郁", "#c9d6ee"]];
  function thermo(x, y0, h, m) {
    const w = Math.max(12, h * 0.1), y1 = y0 + h;
    const Y = (v) => lerp(y1, y0, (v + 1) / 2);
    // 刻度色带
    bands.forEach((b) => {
      rrect(x - w * 0.5, Y(b[1]), w, Y(b[0]) - Y(b[1]), 3); ctx.fillStyle = alpha(b[3], 0.55); ctx.fill();
    });
    rrect(x - w / 2, y0 - w * 0.4, w, h + w * 0.4, w / 2); outline(2); ctx.stroke();
    // 液柱
    const lv = Y(m);
    const col = m > 0.7 ? "#ff7a59" : m > 0.35 ? "#ffa94d" : m > -0.35 ? "#6cc49a" : "#6f9fd6";
    rrect(x - w * 0.22, lv, w * 0.44, y1 - lv + w * 0.3, w * 0.22); ctx.fillStyle = col; ctx.fill();
    ctx.beginPath(); ctx.arc(x, y1 + w * 0.55, w * 0.8, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.arc(x - w * 0.25, y1 + w * 0.35, w * 0.18, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fill();
    // 指针
    ctx.beginPath(); ctx.moveTo(x + w * 0.6, lv); ctx.lineTo(x + w * 1.1, lv - w * 0.35); ctx.lineTo(x + w * 1.1, lv + w * 0.35); ctx.closePath(); ctx.fillStyle = col; ctx.fill(); outline(1.2); ctx.stroke();
    const fs = fsz(0.027);
    bands.forEach((b) => {
      const on = m >= b[0] && m <= b[1];
      text(b[2], x + w * 1.3, (Y(b[0]) + Y(b[1])) / 2, on ? fs * 1.12 : fs, on ? C.ink : C.soft, "left");
    });
    return { x, y: lv };
  }

  // ---------- 图标小圆牌 ----------
  function icon(kind, x, y, r) {
    const lw = Math.max(1.4, r * 0.06);
    outline(lw);
    if (kind === "batt") { // 满格电池
      rrect(x - r * 0.5, y - r * 0.25, r * 0.9, r * 0.5, r * 0.08); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.line; ctx.fillRect(x + r * 0.4, y - r * 0.1, r * 0.1, r * 0.2);
      ctx.fillStyle = "#6cc49a"; for (let k = 0; k < 4; k++) ctx.fillRect(x - r * 0.44 + k * r * 0.2, y - r * 0.19, r * 0.16, r * 0.38);
      Anima.bolt(x + r * 0.5, y - r * 0.45, r * 0.25, 1);
    } else if (kind === "moon") { // 月亮 + 小时钟：睡得少
      ctx.beginPath(); ctx.arc(x - r * 0.15, y - r * 0.05, r * 0.36, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x - r * 0.0, y - r * 0.17, r * 0.3, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
      ctx.beginPath(); ctx.arc(x + r * 0.3, y + r * 0.22, r * 0.25, 0, Math.PI * 2); ctx.fillStyle = "#ffe0cf"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + r * 0.3, y + r * 0.22); ctx.lineTo(x + r * 0.3, y + r * 0.08); ctx.moveTo(x + r * 0.3, y + r * 0.22); ctx.lineTo(x + r * 0.42, y + r * 0.26); ctx.stroke();
    } else if (kind === "talk") { // 叽叽喳喳的对话框
      rrect(x - r * 0.6, y - r * 0.5, r * 0.75, r * 0.45, r * 0.15); ctx.fillStyle = "#ffe0cf"; ctx.fill(); ctx.stroke();
      rrect(x - r * 0.15, y - r * 0.12, r * 0.75, r * 0.45, r * 0.15); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.line; for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(x + r * (0.05 + k * 0.17), y + r * 0.1, r * 0.04, 0, Math.PI * 2); ctx.fill(); }
    } else if (kind === "idea") { // 一串飞快的灯泡
      for (let k = 0; k < 3; k++) {
        const bx = x - r * 0.35 + k * r * 0.35, by = y - r * 0.05 + (k % 2) * r * 0.15;
        ctx.beginPath(); ctx.arc(bx, by, r * 0.16, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); ctx.stroke();
      }
      ctx.beginPath(); ctx.moveTo(x - r * 0.62, y - r * 0.32); ctx.lineTo(x - r * 0.8, y - r * 0.32); ctx.moveTo(x - r * 0.62, y + r * 0.02); ctx.lineTo(x - r * 0.85, y + r * 0.02); ctx.stroke();
    } else if (kind === "coin") { // 购物袋 + 金币
      rrect(x - r * 0.42, y - r * 0.3, r * 0.6, r * 0.62, r * 0.08); ctx.fillStyle = "#ffd3dc"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x - r * 0.12, y - r * 0.3, r * 0.16, Math.PI, 0); ctx.stroke();
      for (let k = 0; k < 2; k++) { ctx.beginPath(); ctx.arc(x + r * 0.35, y + r * 0.2 - k * r * 0.26, r * 0.17, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); ctx.stroke(); }
    } else if (kind === "crown") { // 皇冠：觉得自己无所不能
      ctx.beginPath(); ctx.moveTo(x - r * 0.5, y + r * 0.28); ctx.lineTo(x - r * 0.5, y - r * 0.3); ctx.lineTo(x - r * 0.25, y - r * 0.02); ctx.lineTo(x, y - r * 0.42); ctx.lineTo(x + r * 0.25, y - r * 0.02); ctx.lineTo(x + r * 0.5, y - r * 0.3); ctx.lineTo(x + r * 0.5, y + r * 0.28); ctx.closePath();
      ctx.fillStyle = "#ffd76a"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y + r * 0.08, r * 0.08, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill();
    } else if (kind === "angry") { // 烦躁：生气的符号
      emote("anger", x, y, r * 1.5);
    } else if (kind === "tired") { // 电量低
      rrect(x - r * 0.5, y - r * 0.25, r * 0.9, r * 0.5, r * 0.08); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.line; ctx.fillRect(x + r * 0.4, y - r * 0.1, r * 0.1, r * 0.2);
      ctx.fillStyle = C.coral; ctx.fillRect(x - r * 0.44, y - r * 0.19, r * 0.18, r * 0.38);
    } else if (kind === "run") { // 停不下来的小鞋
      ctx.beginPath(); ctx.moveTo(x - r * 0.45, y + r * 0.2); ctx.lineTo(x - r * 0.4, y - r * 0.3); ctx.lineTo(x, y - r * 0.3);
      ctx.quadraticCurveTo(x + r * 0.15, y - r * 0.02, x + r * 0.5, y); ctx.quadraticCurveTo(x + r * 0.65, y + r * 0.08, x + r * 0.6, y + r * 0.2); ctx.closePath();
      ctx.fillStyle = "#bfe8d6"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - r * 0.6, y - r * 0.1); ctx.lineTo(x - r * 0.85, y - r * 0.1); ctx.moveTo(x - r * 0.6, y + r * 0.08); ctx.lineTo(x - r * 0.8, y + r * 0.08); ctx.stroke();
    } else if (kind === "nosleep") { // 睁着眼的月亮
      ctx.beginPath(); ctx.arc(x, y, r * 0.42, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x + r * 0.18, y - r * 0.12, r * 0.36, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
      ctx.fillStyle = C.line; ctx.beginPath(); ctx.arc(x - r * 0.2, y + r * 0.02, r * 0.06, 0, Math.PI * 2); ctx.fill();
    }
  }
  function tile(x, y, r, kind, label, a, ring) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.7 + 0.3 * a;
    ctx.translate(x, y); ctx.scale(pop, pop); ctx.translate(-x, -y);
    ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = ring; ctx.lineWidth = Math.max(2.5, r * 0.1); ctx.stroke();
    icon(kind, x, y - r * 0.05, r * 0.95);
    const fs = fsz(0.031);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(label).width + fs * 1.1;
    rrect(x - tw / 2, y + r * 0.78, tw, fs * 1.45, fs * 0.72); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(label, x, y + r * 0.78 + fs * 0.75, fs, C.ink);
    ctx.restore();
  }
  function tilePos(i, n) {
    const half = Math.ceil(n / 2), col = i < half ? 0 : 1, row = col ? i - half : i;
    const rows = col ? n - half : half;
    const y0 = narrow() ? H * 0.34 : H * 0.3, y1 = H * 0.78;
    const y = rows === 1 ? (y0 + y1) / 2 : lerp(y0, y1, row / (rows - 1));
    return { x: col ? W * 0.88 : W * 0.12, y: y };
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

  // ---------- 第 1、6 幕：跷跷板小镇 ----------
  function moodNow() {
    if (cur === 0) { const q = Math.sin(lt * Math.PI * 2 / 9); return -0.9 * (q < 0 ? -1 : 1) * Math.sqrt(Math.abs(q)); }
    if (cur === 5) return 0.75 * Math.sin(lt * 2.2) * Math.exp(-lt * 0.32) + 0.04 * Math.sin(time * 1.3);
    return 0;
  }
  function seesawView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const last = cur === 5;
    const m = moodNow();
    const wet = last ? 0 : clamp(-m * 1.4 - 0.1, 0, 1), hot = last ? 0 : clamp(m * 1.4 - 0.1, 0, 1);
    const night = last ? 1 - prog(4, 6) : 0;
    const gy = town(wet, hot, night);
    const nar = narrow();
    const px = nar ? W * 0.6 : W * 0.52, L = Math.min(W * (nar ? 0.54 : 0.5), H * 1.05);
    // 天空
    const cy = H * (nar ? 0.3 : 0.27), cr = Math.min(H * 0.09, W * 0.075);
    if (last) {
      // 夜晚的月亮 → 清晨的太阳
      ctx.save(); ctx.globalAlpha *= night;
      glow(W * 0.8, cy, cr * 1.6, "#fff1a8", 0.7);
      ctx.beginPath(); ctx.arc(W * 0.8, cy, cr * 0.6, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); outline(2); ctx.stroke();
      face(W * 0.8, cy + cr * 0.08, cr * 0.32, 1);
      for (let k = 0; k < 8; k++) sparkle(W * (0.1 + rnd(k + 3) * 0.8), H * (0.18 + rnd(k + 9) * 0.25), H * 0.012, 0.6 + 0.4 * Math.sin(time * 2 + k));
      ctx.restore();
      sun(W * 0.8, lerp(cy + H * 0.2, cy, 1 - night), cr * 0.55, 1 - night, 0);
    } else {
      sun(px + L * 0.42, cy - H * 0.02, cr * (0.55 + hot * 0.2), hot, hot);
      heatWaves(px - L * 0.1, px + L * 0.6, gy - H * 0.02, hot);
      cloud(px - L * 0.3, cy, cr * (0.8 + wet * 0.3), "#c1c8da", wet > 0.5 ? -1 : null, wet);
      rain(px - L * 0.55, px - L * 0.02, cy + cr * 0.5, gy, 34, wet, 3);
    }
    // 地基（最后一幕一块块砌上）
    const base = [];
    const bh = Math.max(fsz(0.03) * 1.5, H * 0.045), bw = L * 0.3;
    if (last) {
      const B = [["规律睡眠", "#cdeed8"], ["按时用药", "#ffe0cf"], ["心情日记", "#e4e0ff"]];
      B.forEach((b, i) => {
        const x = px + (i === 2 ? 0 : (i ? 1 : -1) * bw * 0.51);
        const y = i === 2 ? gy - bh : gy;
        base.push({ x, y, w: bw, h: bh, t: b[0], color: b[1], a: prog(1.5 + i * 1.5, 0.8) });
      });
    }
    const pv = seesaw(px, gy, L, m, base, last ? bh * 2 : 0);
    // 居民：站在木板上，往沉下去的那一头滑
    const s = Math.min(H * 0.06, W * 0.05);
    const at = pv.on(m * L * 0.3);
    const eyes = last ? (lt > 6 ? "happy" : "open") : m < -0.4 ? "teary" : m > 0.4 ? "sparkle" : "open";
    const mouth = last ? "smile" : m < -0.4 ? "sad" : m > 0.4 ? "grin" : "o";
    chara(at.x, at.y, s, { who: "neuron", eyes, mouth, arms: last && lt > 6 ? "wave" : "up", item: last && lt < 4 ? "lamp" : null, gray: m < -0.4 ? 0.4 : 0, brow: m < -0.4 ? "worry" : null, jump: m > 0.5 ? Math.abs(Math.sin(time * 6)) * 0.15 : 0 });
    if (!last && m > 0.5) speedLinesAt(at.x, at.y - s * 1.6, s * 2.4);
    if (!last && m < -0.5) emote("gloom", at.x, at.y - s * 3.5, s * 0.7);
    if (last && lt > 4 && lt < 6.5) emote("zzz", at.x + s, at.y - s * 3.2, s * 0.6);
    // 心情温度计
    const tx = nar ? W * 0.08 : W * 0.08, th = H * (nar ? 0.4 : 0.44), ty = H * (nar ? 0.36 : 0.3);
    thermo(tx, ty, th, m);
    if (!last) {
      // 手机上两条标注左右分开放（高的一条用短一点的字），交替时不会互相挤开、压到“高”字
      callout("low", m < -0.45, pv.L.x, pv.L.y, nar ? W * 0.2 : pv.L.x - W * 0.02, gy + H * 0.06, "抑郁：低落、没劲");
      callout("high", m > 0.45, pv.R.x, pv.R.y, nar ? W * 0.8 : pv.R.x - W * 0.06, gy + H * 0.06, nar ? "躁狂/轻躁狂：停不下来" : "躁狂 / 轻躁狂：高涨、停不下来");
      say("swing", lt > 1 && lt < 6.5, at.x, at.y - s * 3.3, px + W * 0.02, H * 0.36, "一会儿下雨，一会儿暴晒……", "think");
      say("name", lt > 9.5, at.x, at.y - s * 3.3, px + W * 0.04, H * 0.36, "这叫双相障碍：高低两头都会来", "box");
    } else {
      callout("base", lt > 3 && lt < 7.5, px + bw * 0.5, gy - bh * 0.5, px + L * 0.42, gy + H * 0.05, "地基：规律作息 + 规范治疗");
      say("night", lt > 0.8 && lt < 4.2, at.x, at.y - s * 3.3, nar ? W * 0.3 : px - W * 0.02, H * 0.34, "熬夜、睡太少，跷跷板就晃起来", "think");
      say("help", lt > 7.5, at.x, at.y - s * 3.3, W * 0.5, H * (nar ? 0.3 : 0.34), "有伤害自己的想法时，请马上告诉身边的人，尽快去医院急诊。", "box");
    }
    ctx.restore();
  }
  function speedLinesAt(x, y, r) {
    ctx.save(); ctx.globalAlpha *= 0.7;
    ctx.strokeStyle = "#ffb36b"; ctx.lineWidth = Math.max(1.5, r * 0.04); ctx.lineCap = "round";
    for (let k = 0; k < 8; k++) {
      const q = k / 8 * Math.PI * 2 + time * 0.5, j = (time * 3 + k * 0.37) % 1;
      ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * r * (1 + j * 0.2), y + Math.sin(q) * r * (1 + j * 0.2));
      ctx.lineTo(x + Math.cos(q) * r * (1.3 + j * 0.2), y + Math.sin(q) * r * (1.3 + j * 0.2)); ctx.stroke();
    }
    ctx.restore();
  }

  // ---------- 第 2 幕：“高”的时候 ----------
  function maniaView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const gy = town(0, 1, 0);
    const nar = narrow();
    const cr = Math.min(H * 0.09, W * 0.075);
    sun(W * 0.5, H * (nar ? 0.3 : 0.27), cr * 0.8, 1, 1);
    heatWaves(W * 0.25, W * 0.75, gy - H * 0.02, 1);
    // 居民：一会儿跑到左边，一会儿跑到右边
    const s = Math.min(H * 0.065, W * 0.055);
    const ph = time * 0.9, x = W * 0.5 + Math.sin(ph) * W * (nar ? 0.12 : 0.15);
    const dir = Math.cos(ph) > 0 ? 1 : -1;
    chara(x, gy, s, { who: "neuron", eyes: "sparkle", mouth: "open", arms: "up", walk: time * 16, dir, jump: Math.abs(Math.sin(time * 5)) * 0.1 });
    // 身后的速度线
    ctx.save(); ctx.strokeStyle = alpha("#d9722a", 0.5); ctx.lineWidth = Math.max(1.5, H * 0.004); ctx.lineCap = "round";
    for (let k = 0; k < 4; k++) { const yy = gy - s * (0.6 + k * 0.6); ctx.beginPath(); ctx.moveTo(x - dir * s * 1.2, yy); ctx.lineTo(x - dir * s * (2.2 + (k % 2) * 0.6), yy); ctx.stroke(); }
    ctx.restore();
    // 快递员们一路狂奔
    const WHO = ["DA", "NE", "Glu", "5HT"];
    WHO.forEach((w, i) => {
      const t = (time * (0.22 + i * 0.03) + i * 0.27) % 1;
      const cx = lerp(-W * 0.05, W * 1.05, t), cy = gy + H * 0.06 + (i % 2) * H * 0.04;
      chara(cx, cy, s * 0.55, { who: w, walk: time * 18 + i, eyes: w === "5HT" ? "dizzy" : "sparkle", mouth: w === "5HT" ? "wavy" : "grin", arms: "up", shadow: false });
      if (w === "5HT") emote("sweat", cx + s * 0.5, cy - s * 1.8, s * 0.4);
    });
    // 症状圆牌
    const K = [["batt", "精力旺盛"], ["moon", "睡得很少"], ["talk", "话变多"], ["idea", "想法飞快"], ["coin", "冲动花钱"], ["crown", "无所不能"]];
    const tr = Math.min(H * 0.07, W * 0.055);
    K.forEach((k, i) => { const p = tilePos(i, K.length); tile(p.x, p.y, tr, k[0], k[1], prog(0.8 + i * 0.8, 0.6), "#ffb36b"); });
    say("idea", lt > 1.2 && lt < 7, x, gy - s * 3.3, W * 0.5, H * 0.5, "我有一百个好点子！今晚不睡也行！", "shout");
    const mp = tilePos(1, K.length);
    callout("sleep", lt > 7.2, mp.x + tr, mp.y, W * 0.36, H * (nar ? 0.4 : 0.36), "睡得少：常是最早的信号");
    say("friend", lt > 9.2, x, gy - s * 3.3, nar ? W * 0.5 : W * 0.6, H * (nar ? 0.56 : 0.52), "身边的人：“你最近好像变了一个人……”", "box");
    ctx.restore();
  }

  // ---------- 第 3 幕：I 型和 II 型 ----------
  const bumps = {
    I: [[0.2, 0.93, 0.055], [0.53, -0.62, 0.08], [0.86, 0.9, 0.05]],
    II: [[0.14, -0.72, 0.07], [0.36, 0.5, 0.035], [0.62, -0.8, 0.11], [0.9, 0.5, 0.03]],
  };
  const wave = (k, t) => clamp(bumps[k].reduce((s, b) => s + b[1] * Math.exp(-Math.pow((t - b[0]) / b[2], 2)), 0), -1, 1);
  function chartCard(x, y, w, h, kind, p, title, color) {
    card(x, y, w, h, title, color);
    const nar = narrow();
    const lx = x + w * 0.06, rx = x + w * 0.94, top = y + h * 0.1, bot = y + h * 0.8;
    const Y = (v) => lerp(bot, top, (v + 1) / 2);
    const fs = fsz(0.026);
    bands.forEach((b) => {
      ctx.fillStyle = alpha(b[3], 0.45); ctx.fillRect(lx, Y(b[1]), rx - lx, Y(b[0]) - Y(b[1]));
      text(b[2], lx + fs * 0.4, (Y(b[0]) + Y(b[1])) / 2, fs, alpha(C.ink, 0.55), "left");
    });
    outline(1.4); ctx.beginPath(); ctx.moveTo(lx, top); ctx.lineTo(lx, bot); ctx.lineTo(rx, bot); ctx.stroke();
    if (!nar) text("时间 →", rx - fs * 1.6, bot + fs * 0.9, fs, C.soft);
    ctx.strokeStyle = kind === "I" ? "#e8637a" : "#e7a23a"; ctx.lineWidth = Math.max(3, H * 0.008); ctx.lineCap = "round";
    ctx.beginPath();
    const N = 80;
    for (let k = 0; k <= N * p; k++) { const t = k / N, xx = lerp(lx, rx, t), yy = Y(wave(kind, t)); if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
    ctx.stroke();
    const v = wave(kind, p), tipX = lerp(lx, rx, p), tipY = Y(v);
    const s = Math.min(H * 0.028, w * 0.045);
    chara(tipX, tipY, s, { who: "neuron", eyes: v > 0.35 ? "sparkle" : v < -0.35 ? "teary" : "open", mouth: v > 0.35 ? "grin" : v < -0.35 ? "sad" : "smile", arms: v > 0.35 ? "up" : "down", shadow: false, gray: v < -0.35 ? 0.4 : 0 });
    return { Y, lx, rx, top, bot, tipX, tipY, s };
  }
  function typesView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7ef", "#f3f0fd");
    Anima.petals(8, 0.5, 60);
    const nar = narrow();
    const gap = W * 0.03, top = H * (nar ? 0.26 : 0.24), ch = H * (nar ? 0.68 : 0.7), cw = (W - gap * 3) / 2;
    const pI = prog(0.6, 6), pII = prog(3, 7);
    const A = chartCard(gap, top, cw, ch, "I", pI, "双相 I 型", "#ffd3dc");
    const B = chartCard(gap * 2 + cw, top, cw, ch, "II", pII, "双相 II 型", "#ffe6c4");
    // 标注：I 型冲进躁狂带；II 型只到轻躁狂，抑郁更长
    const iPeakX = lerp(A.lx, A.rx, 0.2), iPeakY = A.Y(0.93);
    const iiDipX = lerp(B.lx, B.rx, 0.62), iiDipY = B.Y(-0.8);
    const iiUpX = lerp(B.lx, B.rx, 0.36), iiUpY = B.Y(0.5);
    const fy = top + ch * 0.87;
    callout("mania", pI > 0.25 && lt < (nar ? 4.8 : 8.5), iPeakX, iPeakY, gap + cw * 0.5, fy, "躁狂：明显影响生活");
    if (nar) { // 手机上两条标注先后用同一个位置（同一个 key），后一条不会被前一条挤开
      const second = lt > 9.55;
      callout("hypo", (pII > 0.4 && lt > 6 && lt < 9.2) || lt > 9.9, second ? iiDipX : iiUpX, second ? iiDipY : iiUpY, W * 0.8, fy, second ? "II 型：抑郁常常更多更久" : "轻躁狂：轻一些，易被忽略");
    } else {
      callout("hypo", pII > 0.4 && lt < 9.5, iiUpX, iiUpY, gap * 2 + cw * 1.5, fy, "轻躁狂：轻一些，易被忽略");
      callout("dep2", lt > 9.5, iiDipX, iiDipY, gap * 2 + cw * 1.5, fy, "II 型：抑郁常常更多更久");
    }
    // 手机上卡片上半部没有空位：心里话缩成一行，放到左卡片底部的空白处（“躁狂”标注这时已经收起）
    say("good", lt > (nar ? 6 : 5.5) && lt < 9.5, B.tipX, B.tipY - B.s * 3, nar ? W * 0.22 : gap * 2 + cw * 1.5, nar ? top + ch * 0.9 : top + ch * 0.2, nar ? "只是状态特别好？" : "那几天只是状态特别好吧？", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：混合特征 ----------
  function mixedView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const gy = town(0.55, 0.35, 0);
    const nar = narrow();
    const cy = H * (nar ? 0.3 : 0.26), cr = Math.min(H * 0.09, W * 0.075);
    sun(W * 0.6, cy - H * 0.03, cr * 0.55, 0.9, 0.6);
    cloud(W * 0.44, cy, cr, "#b9bfd3", -1, 1);
    rain(W * 0.34, W * 0.62, cy + cr * 0.5, gy, 34, 0.9, 5);
    const flash = (time * 0.8) % 1 < 0.12 ? 1 : 0;
    bolt(W * 0.47, cy + cr * 0.45, cr * 0.7, flash);
    // 居民：来回踱步，又累又停不下来
    const s = Math.min(H * 0.065, W * 0.055);
    const ph = time * 1.4, x = W * 0.5 + Math.sin(ph) * W * 0.09;
    chara(x, gy, s, { who: "neuron", eyes: "teary", mouth: "wavy", arms: "fist", walk: time * 13, dir: Math.cos(ph) > 0 ? 1 : -1, brow: "angry", gray: 0.3 });
    emote("anger", x + s * 1.1, gy - s * 3.1, s * 0.6);
    emote("sweat", x - s * 1.0, gy - s * 2.9, s * 0.55);
    // 温度计：指针在两头之间乱跳
    const m = 0.62 * Math.sin(time * 4.3) + 0.2 * Math.sin(time * 7.1);
    const tx = W * 0.08, th = H * (nar ? 0.38 : 0.42), ty = H * (nar ? 0.36 : 0.31);
    const tp = thermo(tx, ty, th, m);
    // 症状圆牌（右边一列）
    const K = [["tired", "很累"], ["angry", "烦躁易怒"], ["run", "坐立不安"], ["nosleep", "睡不好"]];
    const tr = Math.min(H * 0.07, W * 0.055);
    K.forEach((k, i) => {
      const y = lerp(H * (nar ? 0.3 : 0.27), H * 0.8, i / (K.length - 1));
      tile(W * 0.88, y, tr * 0.92, k[0], k[1], prog(0.8 + i * 0.8, 0.6), "#c9a8e6");
    });
    callout("mix", lt > 4, tp.x + 12, tp.y, W * 0.25, H * 0.9, "混合特征：高和低一起来");
    say("stuck", lt > 1 && lt < 8.5, x, gy - s * 3.3, W * 0.5, H * 0.55, "好累……可就是停不下来！", "shout");
    say("tell", lt > 8.8, x, gy - s * 3.3, W * 0.5, H * 0.55, "这种时候更要尽快告诉家人，去看医生。", "box");
    ctx.restore();
  }

  // ---------- 第 5 幕：诊室 + 单用抗抑郁药的风险 ----------
  function clinicView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7fbff", "#fdf0f5");
    Anima.bokeh(6, "#d9ccfa", 0.7, 44);
    const nar = narrow();
    const gap = W * 0.03, top = H * (nar ? 0.26 : 0.24), ch = H * (nar ? 0.68 : 0.7), cw = (W - gap * 3) / 2;
    const L = { x: gap, y: top, w: cw, h: ch }, R = { x: gap * 2 + cw, y: top, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "诊室里", "#e4e0ff");
    card(R.x, R.y, R.w, R.h, "单用抗抑郁药时", "#ffe0cf");
    // 左：医生和居民
    const fy = L.y + L.h * 0.9, s = Math.min(H * 0.052, cw * 0.09);
    // 桌子
    rrect(L.x + L.w * 0.3, fy - s * 1.6, L.w * 0.4, s * 0.35, 4); ctx.fillStyle = "#e9c9a4"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(L.x + L.w * 0.34, fy - s * 1.25); ctx.lineTo(L.x + L.w * 0.34, fy); ctx.moveTo(L.x + L.w * 0.66, fy - s * 1.25); ctx.lineTo(L.x + L.w * 0.66, fy); ctx.stroke();
    const dx = L.x + L.w * 0.2, px = L.x + L.w * 0.8;
    chara(dx, fy, s, { who: "neuron", hair: "#5b4a5e", cloth: "#ffffff", glasses: true, eyes: "happy", mouth: "smile", arms: "hold", item: "book", dir: 1 });
    const remember = lt > 5.2;
    chara(px, fy, s, { who: "neuron", eyes: remember ? "wide" : "sleepy", mouth: remember ? "o" : "flat", arms: "down", dir: -1, gray: remember ? 0.1 : 0.4 });
    if (remember) emote("bulb", px + s * 0.9, fy - s * 3.2, s * 0.6);
    say("ask", lt > 0.6 && lt < 5.6, dx, fy - s * 3.2, L.x + L.w * 0.42, L.y + L.h * 0.25, "以前有没有特别兴奋、不怎么睡也不累的时候？", "say");
    // 回忆：一个小太阳的云朵泡泡
    const mp = prog(5.2, 0.8);
    if (mp > 0.02) {
      ctx.save(); ctx.globalAlpha *= mp;
      const bx = L.x + L.w * 0.62, by = L.y + L.h * 0.42, br = Math.min(L.w * 0.16, H * 0.1);
      for (let k = 0; k < 2; k++) { ctx.beginPath(); ctx.arc(lerp(px, bx, 0.35 + k * 0.25), lerp(fy - s * 3.4, by + br, 0.35 + k * 0.25), s * (0.12 + k * 0.06), 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke(); }
      ctx.beginPath(); ctx.ellipse(bx, by, br * 1.25, br, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff8e6"; ctx.fill(); outline(1.8); ctx.stroke();
      sun(bx - br * 0.45, by - br * 0.1, br * 0.3, 1, 0.5);
      chara(bx + br * 0.45, by + br * 0.6, br * 0.22, { who: "neuron", eyes: "sparkle", mouth: "grin", arms: "up", shadow: false, walk: time * 14 });
      ctx.restore();
    }
    say("recall", lt > 6.2 && (!nar || lt < 10.5), px, fy - s * 3.2, L.x + L.w * 0.4, L.y + L.h * 0.14, "那段“状态特别好”的日子，原来也要说？", "think");
    // 右：跷跷板 + 单用抗抑郁药
    const gy = R.y + R.h * 0.82, SL = R.w * 0.72, spx = R.x + R.w * 0.5;
    const push = prog(8.2, 1.2);
    const m = lt < 8.2 ? -0.75 : lerp(-0.75, 0.95, ease(push)) + (push >= 1 ? 0.06 * Math.sin(time * 9) : 0);
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 20); ctx.clip();
    ctx.fillStyle = mix("#eef0f7", "#ffe9cc", clamp(m, 0, 1)); ctx.fillRect(R.x, gy, R.w, R.h);
    ctx.restore();
    outline(1.6); ctx.beginPath(); ctx.moveTo(R.x, gy); ctx.lineTo(R.x + R.w, gy); ctx.stroke();
    const pv = seesaw(spx, gy, SL, m, null);
    const rs = Math.min(H * 0.045, R.w * 0.08);
    const rider = pv.on(m * SL * 0.28);
    chara(rider.x, rider.y, rs * 0.85, { who: "neuron", eyes: m > 0.5 ? "dizzy" : "teary", mouth: m > 0.5 ? "open" : "sad", arms: "up", gray: m < 0 ? 0.4 : 0 });
    // 抗抑郁药访客：走过来，从低的一头往上一推
    const wp = prog(6.5, 1.6);
    const vx = lerp(R.x + rs * 0.8, pv.L.x - rs * 0.6, wp);
    if (wp > 0.02) {
      chara(vx, gy, rs, { who: "drug", hatColor: "#8fdcc4", label: "", tag: "抗抑郁药", walk: wp < 1 ? time * 9 : null, arms: push > 0 ? "up" : "down", eyes: push >= 1 ? "wide" : "happy", mouth: push >= 1 ? "o" : "smile" });
      if (push >= 1) emote("!", vx + rs * (narrow() ? -0.9 : 0.8), gy - rs * 3.2, rs * 0.6);
    }
    if (push > 0.3 && push < 1) sfx("咻——", spx + SL * 0.1, gy - SL * 0.42, fsz(0.045), "#e07a2a", -0.12, 1);
    if (push >= 1) speedLinesAt(pv.R.x, pv.R.y - rs, rs * 1.6);
    callout("switch", lt > 9.6, pv.R.x, pv.R.y, R.x + R.w * 0.5, R.y + R.h * 0.9, "可能转躁，或循环变快");
    say("diff", lt > 10.8, rider.x, rider.y - rs * 2.8, R.x + R.w * 0.5, R.y + R.h * 0.24, "双相的治疗思路不一样！", "shout");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 0) { const m = moodNow(); v1 = m > 0.35 ? "高 ☀" : m < -0.35 ? "低 ☂" : "平稳"; }
    if (cur === 5) { v1 = lt > 5 ? "稳下来" : "规律"; }
    pill(14, 12, c.pill[0], v1, "#e07a2a", false);
    pill(W - 14, 12, c.pill2[0], v2, "#6f9fd6", true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) seesawView(S.v0);
    if (S.v1 > 0.02) maniaView(S.v1);
    if (S.v2 > 0.02) typesView(S.v2);
    if (S.v3 > 0.02) mixedView(S.v3);
    if (S.v4 > 0.02) clinicView(S.v4);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f7b267",
    titleCard: { lines: ["心境的", "跷跷板"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
