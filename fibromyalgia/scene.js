Anima.register("fibromyalgia", {
    "title": "浑身疼、睡不好、脑子雾：纤维肌痛",
    "tag": "慢性疼痛",
    "headline": "浑身都痛，却【找不到伤】在哪",
    "lede": "纤维肌痛的人，全身好多地方都在痛，还常常很累、睡不解乏、脑子像蒙了一层雾。肌肉和关节里找不到损伤，问题出在大脑和脊髓怎样处理信号。看看疼痛怎样在中枢被放大、该过滤的信号怎样漏了过去，以及怎样按症状挑选帮手。",
    "summary": "广泛疼痛却无结构损伤、脊髓以上的中枢敏化、下行抑制过滤不足、症状对应回路（丘脑、下丘脑、背外侧前额叶、纹状体、杏仁核）、灰质变化的初步报道，以及 SNRI、α2δ 配体和睡眠、运动。",
    "chapter": "对应 Stahl《精神药理学精要》第 9 章 · 纤维肌痛",
    "footer": "全身广泛疼痛、长期疲劳，请到风湿免疫科或疼痛科就诊，先排除其他疾病；药物请遵医嘱。",
    "canvasLabel": "全身多处疼痛的小人、大脑把疼痛音量调大、脊髓后角的守门员变少，以及症状对应大脑回路的动画",
    "regions": ["brainstem", "hypo"],
    "parts": ["pain"],
    "cast": ["5HT", "NE", "Glu", "drug"],
    "color": "#c9a3e8"
  }, () => {
  const CH = [
    { title: "全身痛，却找不到伤", vB: 1, vF: 0, vM: 0, vT: 0,
      pill: ["疼痛区域", "0 处"], pill2: ["检查", "没找到伤"],
      text: "纤维肌痛的人，脖子、肩膀、背、腰、胳膊、腿，好多地方都在酸痛，按一按也格外疼。可是检查肌肉、韧带和关节，往往找不到结构上的损伤。医生主要看疼痛分布在身体的多少个区域，再看疲劳、睡醒不解乏、注意力差这些伴随症状有多重。它并不少见，大约每 25～50 个人里就有一个。",
      fact: "纤维肌痛是慢性、广泛的疼痛，肌肉和关节里却找不到明确的结构损伤" },
    { title: "音量在大脑里被调大", vB: 0, vF: 1, vM: 0, vT: 0,
      pill: ["敏化", "在大脑"], pill2: ["外周", "没有伤"],
      text: "那痛从哪里来？Stahl 认为，纤维肌痛主要来自中枢敏化，而且发生在脊髓以上：丘脑和大脑皮层里的疼痛通路变得过度敏感，甚至不需要外周有伤，也能自己启动、放大疼痛。就像大脑把疼痛的音量旋钮拧大了，平平常常的一点小信号，到了这里也变成响亮的“痛”。",
      fact: "脊髓以上（丘脑、皮层）的中枢敏化，被认为是纤维肌痛疼痛的重要来源" },
    { title: "该过滤的没过滤", vB: 0, vF: 1, vM: 0, vT: 0,
      pill: ["下行抑制", "不够用"], pill2: ["普通信号", "变成痛"],
      text: "身体每时每刻都在往上报告：关节动了一下、肠胃在消化、背挺直了。平时，从脑干下来的 5-HT 和去甲肾上腺素守在脊髓后角，把这些无关紧要的信号拦下来，我们就感觉不到。一种假说认为，纤维肌痛时这道下行抑制不够用，本该被过滤掉的普通信号一路传上去，被大脑读成了疼痛。",
      fact: "下行抑制平时给关节、肠胃等的无关信号“静音”；它不够用时，普通信号也可能被感到疼" },
    { title: "不只是痛：累、睡不好、脑子雾", vB: 0, vF: 0, vM: 1, vT: 0,
      pill: ["伴随症状", "一大串"], pill2: ["纤维雾", "脑子发懵"],
      text: "纤维肌痛不只有痛。很多人还很疲劳，睡醒了也不解乏，注意力和记忆变差，这被叫作“纤维雾”，也常伴着焦虑和情绪低落。Stahl 把每个症状对到可能出问题的回路上：疼痛和丘脑有关，睡眠和下丘脑有关，纤维雾和背外侧前额叶有关，疲劳和纹状体、伏隔核有关，情绪和焦虑则和杏仁核有关。",
      fact: "把症状拆开、再对到回路和递质，是 Stahl 给纤维肌痛挑药的思路" },
    { title: "长期疼痛会改变大脑吗", vB: 0, vF: 0, vM: 1, vT: 0,
      pill: ["灰质", "可能减少"], pill2: ["证据", "初步 ⚠"],
      text: "还有一些让人担心的初步研究：在纤维肌痛、慢性腰痛等长期疼痛的人身上，有报道背外侧前额叶、丘脑和颞叶皮层的灰质变少了，也有脑区反而增多。有人推测，长期疼痛让前额叶一直超负荷，它压住疼痛通路的“刹车”变弱，于是更痛，注意力也更差。这些还只是假说，需要更多研究。",
      fact: "慢性疼痛中灰质减少的报道还属初步发现，因果关系并不清楚" },
    { title: "按症状挑帮手", vB: 0, vF: 0, vM: 0, vT: 1,
      pill: ["药物", "SNRI + α2δ"], pill2: ["阿片类", "未证实有效"],
      text: "治疗也按症状来。SNRI（如度洛西汀、米那普仑）加强下行抑制来减轻疼痛，也可能帮到情绪、疲劳和纤维雾；α2δ 配体（如普瑞巴林）减少过多的递质释放，还可能改善焦虑和深睡眠。改善睡眠、循序渐进的运动和认知行为治疗同样重要。阿片类在纤维肌痛中并没有被证实有效。用药都要遵医嘱。",
      fact: "SNRI 和 α2δ 配体都能减轻纤维肌痛的疼痛，还各自可能帮到不同的伴随症状" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    body: "#ffe8dc", shirt: "#e4dcfa", brain: "#ffd0dc", brainIn: "#fff0f4", cord: "#ffe6dc", gate: "#fff4e0",
  });
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { vB: 1, vF: 0, vM: 0, vT: 0 };
  const P = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsS = () => Math.max(12, W / 58) * Anima.UI;
  let pillV = null;

  function update() { lt = Anima.sceneTime; }

  // ---------- 小工具 ----------
  function chip(t, x, y, col, fs, tc) {
    fs = fs || fsS() * 0.85;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = col || "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, fs, tc || C.ink);
    return { w, h };
  }
  function chip2(t1, t2, x, y, col, fs, k2) { // 两行的小牌子：症状 + 回路
    k2 = k2 || 0.85;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = Math.max(ctx.measureText(t1).width, ctx.measureText(t2).width * k2) + fs * 1.1, h = fs * 2.6;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    ctx.save(); ctx.shadowColor = "rgba(120,80,100,0.15)"; ctx.shadowBlur = 6; ctx.shadowOffsetY = 2;
    rrect(x - w / 2, y - h / 2, w, h, fs * 0.6); ctx.fillStyle = "#fffdf8"; ctx.fill(); ctx.restore();
    outline(1.4); rrect(x - w / 2, y - h / 2, w, h, fs * 0.6); ctx.stroke();
    ctx.fillStyle = col; rrect(x - w / 2, y - h / 2, fs * 0.35, h, fs * 0.18); ctx.fill();
    text(t1, x + fs * 0.1, y - fs * 0.55, fs, C.ink);
    text(t2, x + fs * 0.1, y + fs * 0.65, fs * k2, C.soft);
    return { w, h };
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 16); ctx.stroke();
    let fs = Math.max(12, Math.min(W / 42, h * 0.09)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(title).width + fs * 1.2;
    if (tw > w * 0.96) { fs *= w * 0.96 / tw; tw = w * 0.96; }
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function knob(x, y, r, v) {
    ctx.beginPath(); ctx.arc(x, y, r * 1.35, 0, Math.PI * 2); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(Math.max(1.5, r * 0.06)); ctx.stroke();
    const a0 = Math.PI * 0.75, span = Math.PI * 1.5;
    for (let i = 0; i < 12; i++) {
      const q = a0 + span * (i + 0.5) / 12;
      ctx.strokeStyle = mix(C.good, C.bad, i / 11); ctx.lineWidth = r * 0.22; ctx.lineCap = "butt";
      ctx.beginPath(); ctx.arc(x, y, r * 1.12, q - span / 26, q + span / 26); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(x, y, r * 0.85, 0, Math.PI * 2); ctx.fillStyle = mix("#ffe6c4", "#ffc2c2", v); ctx.fill(); outline(Math.max(1.5, r * 0.06)); ctx.stroke();
    const q = a0 + span * clamp(v, 0, 1);
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.14); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x + Math.cos(q) * r * 0.2, y + Math.sin(q) * r * 0.2); ctx.lineTo(x + Math.cos(q) * r * 0.75, y + Math.sin(q) * r * 0.75); ctx.stroke();
  }
  function brainBlob(x, y, r, hurt) {
    const col = mix(C.brain, "#ffb0b0", hurt * (0.5 + 0.5 * Math.sin(time * 9)));
    ctx.beginPath();
    for (const q of [[-0.45, 0.05, 0.62], [0.1, -0.2, 0.7], [0.55, 0.08, 0.58], [0, 0.25, 0.65]]) { ctx.moveTo(x + q[0] * r + q[2] * r, y + q[1] * r); ctx.arc(x + q[0] * r, y + q[1] * r, q[2] * r, 0, Math.PI * 2); }
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.05); ctx.stroke(); ctx.fillStyle = col; ctx.fill();
    face(x + r * 0.05, y + r * 0.12, r * 0.38, hurt > 0.5 ? -1 : 1);
    if (hurt > 0.5) Anima.sweat(x + r * 0.7, y - r * 0.4, r * 0.22);
  }
  function waves(x, y, s, amp, color) {
    if (amp < 0.02) return;
    ctx.save(); ctx.lineCap = "round";
    for (let k = 0; k < 3; k++) {
      const t = (time * 0.9 + k / 3) % 1;
      ctx.globalAlpha = (1 - t) * amp; ctx.strokeStyle = color; ctx.lineWidth = Math.max(2, s * 0.12 * amp);
      const r = s * (0.6 + t * 1.8);
      ctx.beginPath(); ctx.arc(x, y, r, -0.6, 0.6); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, r, Math.PI - 0.6, Math.PI + 0.6); ctx.stroke();
    }
    ctx.restore();
  }
  function polyPt(pts, t) {
    let len = 0; const seg = [];
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(l); len += l; }
    let d = clamp(t, 0, 1) * len, i = 0;
    while (i < seg.length - 1 && d > seg[i]) { d -= seg[i]; i++; }
    const p0 = pts[i], p1 = pts[i + 1] || p0, k = seg[i] ? d / seg[i] : 0;
    return { x: lerp(p0[0], p1[0], k), y: lerp(p0[1], p1[1], k) };
  }
  function rail(pts, color, w, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.7)"; ctx.lineWidth = Math.max(1, w * 0.18); ctx.setLineDash([w * 0.8, w * 1.2]); ctx.stroke();
    ctx.restore();
  }

  // ================= 第 1 幕：全身痛 =================
  // 身体上的疼痛区域（相对于身体中心，单位是头半径）
  const SPOTS = [[0, -1.1], [-1.25, -0.2], [1.25, -0.2], [-1.9, 1.1], [1.9, 1.1], [0, 0.9], [-0.55, 2.4], [0.55, 2.4], [-0.6, 3.6], [0.6, 3.6], [-0.65, 5.0], [0.65, 5.0]];
  function person(cx, top, r, spots, mood) {
    const neckY = top + r * 2.05, sh = neckY + r * 0.25;
    ctx.lineCap = "round";
    const limb = (pts, w) => {
      ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(cx + p[0] * r, sh + p[1] * r) : ctx.moveTo(cx + p[0] * r, sh + p[1] * r)));
      ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.stroke(); ctx.strokeStyle = C.body; ctx.lineWidth = w; ctx.stroke();
    };
    limb([[-0.5, 2.7], [-0.62, 4.1], [-0.66, 5.5]], r * 0.55);
    limb([[0.5, 2.7], [0.62, 4.1], [0.66, 5.5]], r * 0.55);
    limb([[-1.05, 0.2], [-1.6, 1.2], [-2.0, 2.2]], r * 0.45);
    limb([[1.05, 0.2], [1.6, 1.2], [2.0, 2.2]], r * 0.45);
    rrect(cx - r * 1.15, sh - r * 0.2, r * 2.3, r * 3.1, r * 0.55); ctx.fillStyle = C.shirt; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, top + r, r, 0, Math.PI * 2); ctx.fillStyle = C.body; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, top + r * 0.85, r * 1.02, Math.PI * 1.05, Math.PI * 1.95); ctx.fillStyle = "#8a6a58"; ctx.fill(); outline(1.5); ctx.stroke();
    face(cx, top + r * 1.15, r * 0.55, mood);
    const out = [];
    SPOTS.forEach((q, i) => {
      const a = spots[i] || 0;
      const x = cx + q[0] * r, y = sh + q[1] * r;
      if (a > 0.02) {
        glow(x, y, r * 0.9, C.bad, a * (0.55 + 0.25 * Math.sin(time * 6 + i)));
        Anima.bolt(x + r * 0.25, y - r * 0.25, r * 0.28, a, i % 2 ? C.bad : C.gold);
      }
      out.push({ x, y });
    });
    return out;
  }
  function magnifier(x, y, r, a) {
    ctx.save(); ctx.globalAlpha *= a;
    ctx.lineCap = "round"; ctx.strokeStyle = C.line; ctx.lineWidth = r * 0.3;
    ctx.beginPath(); ctx.moveTo(x + r * 0.7, y + r * 0.7); ctx.lineTo(x + r * 1.5, y + r * 1.5); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "rgba(220,240,255,0.6)"; ctx.fill(); outline(Math.max(2, r * 0.12)); ctx.stroke();
    ctx.restore();
  }
  function bodyView(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf5ff", "#fff1f1");
    Anima.bokeh(6, "#e8dcff", 0.7, 14);
    Anima.petals(6, 0.4, 3);
    const top = Anima.topSafe() + H * 0.04, r = (H * 0.9 - top) / 7.9, cx = W * (n ? 0.24 : 0.28);
    const sp = SPOTS.map((q, i) => P(0.6 + i * 0.45, 0.5));
    const cnt = sp.filter((v) => v > 0.5).length;
    pillV = cnt + " 处";
    const pts = person(cx, top, r, sp, cnt > 6 ? -1 : 0);
    // 右边：检查结果
    const px = W * (n ? 0.5 : 0.56), pw = W * (n ? 0.47 : 0.38), py = top + H * 0.08, ph = H * 0.9 - py;
    const ca = n ? P(5, 0.6) : 1;
    ctx.save(); ctx.globalAlpha *= ca;
    card(px, py, pw, ph, "检查结果", "#dff3e6");
    ctx.restore();
    const rows = ["肌肉", "韧带", "关节"], fs = fsS() * (n ? 0.8 : 0.9);
    rows.forEach((t, i) => {
      const p = P(6 + i * 0.9, 0.6);
      if (p < 0.02) return;
      ctx.save(); ctx.globalAlpha *= p;
      const y = py + ph * (0.2 + i * 0.17);
      chip(t, px + pw * 0.22, y, "#fff", fs);
      text("没找到伤 ✓", px + pw * 0.66, y, fs, C.mintDeep);
      ctx.restore();
    });
    const mg = P(5.2, 0.8);
    const mx = px + pw * 0.5 + Math.sin(time * 1.5) * pw * 0.08, my = py + ph * 0.72;
    magnifier(mx, my, Math.min(pw * 0.1, H * 0.06), mg);
    if (lt > 9.4) emote("?", mx + pw * 0.24, my - H * 0.01, H * 0.05);
    // 标注
    const ty = Anima.topSafe() + H * 0.01;
    callout("b-wide", n ? win(1, 5.4) : win(1.5, 13), pts[1].x, pts[1].y, n ? W * 0.5 : cx + W * 0.13, n ? ty : top + H * 0.02, n ? "好多地方在痛" : "脖子、肩、背、腰、四肢都在痛");
    say("b-ouch", win(4, 8) && !n, cx, top, cx - W * 0.12, top + H * 0.03, "按一下就好疼…", "think");
    callout("b-none", lt > (n ? 10 : 9.6), mx, my, px + pw * 0.5, py + ph * 0.95, "结构上找不到损伤");
    ctx.restore();
  }

  // ================= 第 2、3 幕：放大器和过滤网 =================
  function gF() {
    const n = N(), top = Anima.topSafe();
    const gx = W * (n ? 0.4 : 0.38), gy = H * 0.74;
    const br = { x: W * (n ? 0.78 : 0.76), y: top + H * (n ? 0.2 : 0.22), r: H * (n ? 0.12 : 0.13) };
    const stem = { x: gx, y: top + H * 0.1 };
    const src = [0.44, 0.62, 0.8].map((f) => ({ x: W * 0.09, y: H * f }));
    const upPath = [[gx + W * 0.04, gy], [gx + W * 0.12, gy], [br.x - br.r * 0.6, gy], [br.x, br.y + br.r * 0.9]];
    return { n, gx, gy, br, stem, src, upPath, cs: H * (n ? 0.036 : 0.04), knob: { x: br.x + br.r * (n ? 0.2 : 1.8), y: n ? H * 0.58 : br.y + br.r * 1.2, r: H * 0.045 } };
  }
  function bodyIcon(i, x, y, s) {
    ctx.save(); outline(1.5);
    if (i === 0) { // 关节：两段骨头
      ctx.fillStyle = "#fffaf0";
      rrect(x - s * 0.18, y - s, s * 0.36, s * 0.85, s * 0.15); ctx.fill(); ctx.stroke();
      rrect(x - s * 0.18, y + s * 0.15, s * 0.36, s * 0.85, s * 0.15); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y, s * 0.3, 0, Math.PI * 2); ctx.fillStyle = "#ffd9c2"; ctx.fill(); ctx.stroke();
    } else if (i === 1) { // 肠胃
      ctx.beginPath(); ctx.ellipse(x, y, s * 0.7, s * 0.5, -0.4, 0, Math.PI * 2); ctx.fillStyle = "#ffc9d6"; ctx.fill(); ctx.stroke();
      face(x, y, s * 0.3, 1);
    } else { // 背：一串小脊椎
      for (let k = 0; k < 4; k++) { rrect(x - s * 0.3 + Math.sin(k) * s * 0.1, y - s * 0.9 + k * s * 0.5, s * 0.6, s * 0.38, s * 0.12); ctx.fillStyle = "#fff4e0"; ctx.fill(); ctx.stroke(); }
    }
    ctx.restore();
  }
  function filterView(a) {
    const g = gF(), n = g.n, s2 = cur === 2, s1 = cur === 1;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f4ff", "#fff3ee");
    Anima.bokeh(6, "#ffe0d0", 0.7, 44);
    // 下行路：脑干 → 后角
    const weak = s2 ? P(6, 2) : 0;
    rail([[g.stem.x, g.stem.y + H * 0.04], [g.gx, g.gy - H * 0.08]], "#5cc49a", Math.max(4, H * 0.014), 1 - weak * 0.6);
    chip("脑干", g.stem.x, g.stem.y, "#e4e0ff", fsS() * 0.8);
    // 上行路
    rail(g.upPath, "#ff9a6b", Math.max(4, H * 0.014));
    // 身体的普通信号源
    const lab = ["关节活动", "肠胃消化", "背部姿势"];
    g.src.forEach((p, i) => {
      bodyIcon(i, p.x, p.y, H * 0.045);
      text(lab[i], p.x + H * 0.07, p.y + H * 0.055, fsS() * (n ? 0.66 : 0.72), C.soft, "left");
      if (s1) text("✓", p.x - H * 0.055, p.y - H * 0.04, fsS() * 0.9, C.mintDeep);
    });
    // 后角的闸门
    const open = s1 ? 0.35 : weak;
    const gw = H * 0.16, gh = H * 0.13;
    rrect(g.gx - gw / 2, g.gy - gh / 2, gw, gh, H * 0.02); ctx.fillStyle = C.gate; ctx.fill(); outline(1.8); ctx.stroke();
    for (const d of [-1, 1]) {
      ctx.save(); ctx.translate(g.gx + d * gw * 0.25, g.gy); ctx.rotate(d * open * 1.1);
      rrect(-gw * 0.04, -gh * 0.42, gw * 0.08, gh * 0.84, gw * 0.03); ctx.fillStyle = "#c9a3e8"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    }
    text("脊髓后角", g.gx, g.gy + gh / 2 + fsS() * 0.7, fsS() * 0.78, C.ink);
    // 小信号：从身体走到闸门，能不能过去看闸门
    const cs = g.cs * 0.75;
    const pass = s1 ? 0.35 : weak;
    let arrive = 0;
    for (let k = 0; k < 6; k++) {
      const per = 3.6, t = ((time * 0.9 / per) + k / 6) % 1;
      const src = g.src[k % 3];
      const through = (k % 3 === 0) || pass > 0.5 || (s1 && k % 2 === 0);
      const blocked = !through;
      const pth = [[src.x + H * 0.05, src.y], [g.gx - gw / 2, g.gy]].concat(through ? [[g.gx + gw / 2, g.gy]].concat(g.upPath.slice(1)) : []);
      const tt = blocked ? Math.min(t * 2.2, 1) : t;
      const q = polyPt(pth, tt);
      let al = blocked ? (t * 2.2 > 1 ? clamp(1 - (t * 2.2 - 1) * 1.5, 0, 1) : 1) : Math.sin(t * Math.PI) * 1.6;
      if (al < 0.03) continue;
      chara(q.x, q.y + cs * 0.8, cs, { who: "Glu", walk: time * 9 + k, item: "letter", arms: "hold", eyes: blocked && t * 2.2 > 1 ? "closed" : "open", alpha: clamp(al, 0, 1), shadow: false, seed: k });
      if (!blocked && t > 0.85) arrive = 1;
    }
    // 守门员：下行的 5-HT 和去甲肾上腺素
    const keep = [["5HT", -1], ["NE", 1]];
    keep.forEach((kp, i) => {
      const gone = s2 ? clamp((weak - i * 0.4) * 1.6, 0, 1) : (s1 ? 0 : 0);
      const x = g.gx + kp[1] * gw * 0.35, y = g.gy - gh / 2;
      if (gone > 0.98) return;
      chara(x, y, g.cs, { who: kp[0], arms: s2 && weak < 0.2 ? "shh" : "down", eyes: weak > 0.3 ? "sleepy" : "happy", mouth: "cat", dir: -kp[1], alpha: 1 - gone, gray: weak * 0.7 });
    });
    // 大脑和放大旋钮
    const vol = s1 ? lerp(0.35, 0.95, P(1.5, 2.5)) : 0.6;
    const hurt = (s1 && vol > 0.8 && (arrive || lt > 8.5)) || (s2 && weak > 0.6 && arrive) ? 1 : 0;
    brainBlob(g.br.x, g.br.y, g.br.r, hurt);
    waves(g.br.x, g.br.y, g.br.r, hurt ? 0.9 : 0, C.bad);
    if (hurt) sfx(s1 ? "好痛！" : "痛…", g.br.x - g.br.r * 1.5, g.br.y - g.br.r * 0.6, H * 0.05, C.bad, -0.1, 0.9);
    if (s1) {
      outline(1.5); ctx.beginPath(); ctx.moveTo(g.br.x + g.br.r * 0.6, g.br.y + g.br.r * 0.4); ctx.lineTo(g.knob.x, g.knob.y - g.knob.r * 1.3); ctx.stroke();
      knob(g.knob.x, g.knob.y, g.knob.r, vol);
      if (lt > 8.5) { // 没有输入，也自己转起来
        const t = (time * 0.5) % 1, q = t * Math.PI * 2;
        Anima.spark([[g.br.x + Math.cos(q) * g.br.r * 0.5, g.br.y + Math.sin(q) * g.br.r * 0.4], [g.br.x + Math.cos(q + 0.3) * g.br.r * 0.5, g.br.y + Math.sin(q + 0.3) * g.br.r * 0.4]], 0.5, H * 0.02, C.gold);
      }
    }
    // 标注
    const ty = Anima.topSafe() + H * 0.01, lowY = H * 0.93;
    if (s1) {
      callout("f-none", n ? win(0.6, 3.4) : win(0.6, 13), g.src[0].x, g.src[0].y - H * 0.05, n ? W * 0.3 : W * 0.16, n ? ty : H * 0.26, "外周：没有受伤");
      callout("f-knob", n ? win(3.6, 8) : lt > 2.5, g.knob.x - g.knob.r, g.knob.y, n ? W * 0.55 : g.knob.x - W * 0.08, n ? lowY : H * 0.93, n ? "丘脑、皮层：音量拧大" : "丘脑和皮层：疼痛音量被拧大");
      callout("f-self", lt > 8.6, g.br.x, g.br.y + g.br.r * 0.4, n ? W * 0.55 : g.br.x - W * 0.2, n ? lowY : H * 0.52, "不需要输入，也能自己响");
    }
    if (s2) {
      callout("f-keep", n ? win(0.8, 5.5) : win(0.8, 6.5), g.gx, g.gy - gh / 2 - g.cs * 3, n ? W * 0.62 : g.gx + W * 0.16, n ? H * 0.56 : H * 0.36, n ? "5-HT、NE 守门" : "5-HT、去甲肾上腺素：拦下无关信号");
      say("f-shh", win(1.5, 5.8) && !n, g.gx - gw * 0.35, g.gy - gh / 2 - g.cs * 3.2, g.gx - W * 0.14, H * 0.28, "小事就不用报告啦～", "say");
      callout("f-weak", lt > 7, g.gx, (g.stem.y + g.gy) / 2, n ? W * 0.62 : g.gx + W * 0.16, n ? H * 0.56 : H * 0.36, "守门的少了：普通信号漏上去");
    }
    ctx.restore();
  }

  // ================= 第 4、5 幕：症状对回路 =================
  function brainPath(cx, cy, rx, ry) {
    ctx.beginPath();
    ctx.moveTo(cx - rx, cy + ry * 0.1);
    ctx.bezierCurveTo(cx - rx * 1.05, cy - ry * 0.9, cx - rx * 0.2, cy - ry * 1.15, cx + rx * 0.4, cy - ry * 0.95);
    ctx.bezierCurveTo(cx + rx * 1.05, cy - ry * 0.7, cx + rx * 1.1, cy + ry * 0.3, cx + rx * 0.8, cy + ry * 0.6);
    ctx.bezierCurveTo(cx + rx * 0.4, cy + ry * 0.85, cx - rx * 0.2, cy + ry * 0.75, cx - rx * 0.55, cy + ry * 0.7);
    ctx.bezierCurveTo(cx - rx * 0.9, cy + ry * 0.62, cx - rx * 0.98, cy + ry * 0.4, cx - rx, cy + ry * 0.1);
    ctx.closePath();
  }
  // 症状、对应的回路、在脑图上的位置（前面朝左）、小牌子的位置
  const SYM = [
    { s: "纤维雾", r: "背外侧前额叶", q: [-0.55, -0.5], col: "#8f84e0", L: [0.13, 0.3], Ln: [0.14, 0.3] },
    { s: "疲劳", r: "纹状体、伏隔核", q: [-0.4, 0.12], col: "#ff9a52", L: [0.1, 0.62], Ln: [0.12, 0.6] },
    { s: "睡不好", r: "下丘脑", q: [-0.1, 0.42], col: "#4f9fd0", L: [0.3, 0.9], Ln: [0.3, 0.89] },
    { s: "疼痛", r: "丘脑", q: [0.08, 0.02], col: "#e8637a", L: [0.8, 0.3], Ln: [0.86, 0.34] },
    { s: "焦虑、低落", r: "杏仁核", q: [-0.3, 0.48], col: "#62c9ab", L: [0.72, 0.88], Ln: [0.76, 0.86] },
  ];
  function gM() {
    const n = N();
    const cx = W * (n ? 0.5 : 0.47), cy = H * (n ? 0.6 : 0.58), rx = W * (n ? 0.24 : 0.22), ry = H * (n ? 0.27 : 0.3);
    return { n, cx, cy, rx, ry, P: (q) => ({ x: cx + q[0] * rx, y: cy + q[1] * ry }) };
  }
  function mapView(a) {
    const g = gM(), n = g.n, s3 = cur === 3, s4 = cur === 4;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f3ff", "#fff4f0");
    Anima.bokeh(5, "#e0d8ff", 0.7, 7);
    // 脑干和小脑
    ctx.beginPath(); ctx.ellipse(g.cx + g.rx * 0.3, g.cy + g.ry * 0.85, g.rx * 0.1, g.ry * 0.3, 0.2, 0, Math.PI * 2); ctx.fillStyle = "#f5d3dc"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(g.cx + g.rx * 0.62, g.cy + g.ry * 0.62, g.rx * 0.26, g.ry * 0.2, -0.2, 0, Math.PI * 2); ctx.fillStyle = "#f7c6d3"; ctx.fill(); outline(1.5); ctx.stroke();
    brainPath(g.cx, g.cy, g.rx, g.ry);
    const gr = ctx.createRadialGradient(g.cx - g.rx * 0.2, g.cy - g.ry * 0.2, g.rx * 0.1, g.cx, g.cy, g.rx);
    gr.addColorStop(0, C.brainIn); gr.addColorStop(1, C.brain); ctx.fillStyle = gr; ctx.fill(); outline(2); ctx.stroke();
    face(g.cx + g.rx * 0.5, g.cy - g.ry * 0.45, g.ry * 0.11, s4 ? 0 : 1);
    if (s3) {
      SYM.forEach((sy, i) => {
        const p = P(0.6 + i * 1.5, 0.6);
        const node = g.P(sy.q);
        const w = Math.max(4, g.ry * 0.05);
        ctx.beginPath(); ctx.arc(node.x, node.y, w * 1.6, 0, Math.PI * 2); ctx.fillStyle = mix("#f2eaee", sy.col, p); ctx.fill(); outline(1.4); ctx.stroke();
        if (p < 0.02) return;
        glow(node.x, node.y, w * 5, sy.col, p * (0.5 + 0.3 * Math.sin(time * 4 + i)));
        const L = n ? sy.Ln : sy.L, lx = W * L[0], ly = H * L[1];
        ctx.save(); ctx.globalAlpha *= p;
        ctx.setLineDash([4, 5]); outline(1.4); ctx.beginPath(); ctx.moveTo(node.x, node.y); ctx.lineTo(lx, ly); ctx.stroke(); ctx.setLineDash([]);
        chip2(sy.s, sy.r, lx, ly, sy.col, fsS() * (n ? 0.8 : 0.85), n ? 1 : 0.85);
        ctx.restore();
      });
    }
    if (s4) {
      // 可能变少的三处灰质：背外侧前额叶、丘脑、颞叶皮层
      const shrink = P(1, 3);
      const regs = [{ q: [-0.55, -0.5], r: 0.2, t: "背外侧前额叶" }, { q: [0.08, 0.02], r: 0.14, t: "丘脑" }, { q: [0.35, 0.35], r: 0.17, t: "颞叶皮层" }];
      const pos = regs.map((rg) => {
        const c = g.P(rg.q), rr = g.ry * rg.r * (1 - shrink * 0.3);
        ctx.beginPath(); ctx.arc(c.x, c.y, rr, 0, Math.PI * 2); ctx.fillStyle = mix("#c9a3e8", "#d8d0d6", shrink * 0.7); ctx.globalAlpha *= 0.85; ctx.fill(); ctx.globalAlpha /= 0.85;
        ctx.save(); ctx.setLineDash([3, 4]); outline(1.4); ctx.beginPath(); ctx.arc(c.x, c.y, g.ry * rg.r, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
        return c;
      });
      // 前额叶对丘脑的“刹车”：变弱
      const brake = 1 - P(5.5, 2.5) * 0.75;
      ctx.save(); ctx.globalAlpha *= brake; ctx.strokeStyle = "#5cc49a"; ctx.lineWidth = Math.max(3, H * 0.012); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(pos[0].x + g.ry * 0.12, pos[0].y + g.ry * 0.1); ctx.quadraticCurveTo(pos[0].x + g.rx * 0.4, pos[0].y, pos[1].x - g.ry * 0.1, pos[1].y - g.ry * 0.08); ctx.stroke();
      ctx.restore();
      const tt = (time * 0.6) % 1;
      if (lt > 7.5) { glow(pos[1].x, pos[1].y, g.ry * 0.4, C.bad, 0.5 + 0.3 * Math.sin(time * 6)); Anima.bolt(pos[1].x, pos[1].y - g.ry * 0.25, g.ry * 0.1, 0.8, C.bad); }
      if (lt > 8.5) emote("gloom", pos[0].x, pos[0].y - g.ry * 0.3, g.ry * 0.14);
      void tt;
      const ty = Anima.topSafe() + H * 0.01;
      callout("m-dl", n ? win(1, 4) : lt > 1, pos[0].x, pos[0].y, n ? W * 0.25 : W * 0.14, n ? ty : H * 0.2, "背外侧前额叶");
      callout("m-th", n ? win(4.2, 7.2) : lt > 2, pos[1].x, pos[1].y, n ? W * 0.6 : W * 0.82, n ? ty : H * 0.34, "丘脑");
      callout("m-tp", n ? win(7.4, 13) : lt > 3, pos[2].x, pos[2].y, n ? W * 0.82 : W * 0.84, n ? H * 0.94 : H * 0.8, "颞叶皮层");
      callout("m-brake", lt > 5.8 && !n, (pos[0].x + pos[1].x) / 2, pos[0].y + g.ry * 0.05, W * 0.3, H * 0.93, "前额叶的“刹车”变弱 ⚠");
      chip("⚠ 初步研究", n ? W * 0.18 : W * 0.12, H * 0.93, "#fff4c2", fsS() * 0.8);
    }
    ctx.restore();
  }

  // ================= 第 6 幕：按症状挑帮手 =================
  function treatView(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf7ff", "#f3fbf6");
    Anima.bokeh(5, "#dff3e6", 0.7, 51);
    Anima.petals(6, 0.4, 9);
    const top = Anima.topSafe() + H * 0.07, gap = W * 0.02, cw = (W - gap * 4) / 3, chh = H * (n ? 0.76 : 0.8) - top;
    const T = ["SNRI", "α2δ 配体", "睡眠·运动·CBT"], cols = ["#ffe0e4", "#dff3e6", "#e4e0ff"];
    const helps = [["疼痛", "情绪", "疲劳", "纤维雾"], ["疼痛", "焦虑", "深睡眠"], ["睡眠", "体力", "应对疼痛"]];
    const tags = ["度洛西汀", "普瑞巴林", null];
    const fs = fsS() * (n ? 0.8 : 0.82);
    for (let i = 0; i < 3; i++) {
      const x = gap + i * (cw + gap), y = top, p = P(0.4 + i * 2.8, 0.7);
      if (p < 0.02) continue;
      ctx.save(); ctx.globalAlpha *= p;
      card(x, y, cw, chh, T[i], cols[i]);
      const s = Math.min(H * 0.05, cw * 0.11), cx = x + cw * (n ? 0.5 : 0.3), foot = y + chh * (n ? 0.4 : 0.62);
      if (i < 2) chara(cx, foot, s, { who: "drug", hatColor: i ? "#b8e6a0" : "#ffb3c0", arms: "wave", eyes: "happy", tag: n ? null : tags[i] });
      else {
        chara(cx - s * 0.6, foot, s, { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", walk: time * 8, arms: "fist", eyes: "happy", mouth: "grin" });
        emote("zzz", cx + s * 1.2, foot - s * 3, s * 0.8);
      }
      const hs = helps[i];
      hs.forEach((h, j) => {
        const q = P(1 + i * 2.8 + j * 0.4, 0.4);
        if (q < 0.02) return;
        ctx.save(); ctx.globalAlpha *= q;
        const hx = n ? x + cw * 0.5 : x + cw * 0.72, hy = n ? y + chh * (0.52 + j * 0.12) : y + chh * (0.2 + j * 0.16);
        chip(h + " ✓", hx, hy, mix("#ffffff", cols[i], 0.6), fs);
        ctx.restore();
      });
      ctx.restore();
    }
    say("t-op", lt > 9, W * 0.5, H * 0.8, W * 0.5, H * 0.9, n ? "阿片类：未证实有效" : "阿片类：在纤维肌痛里没被证实有效", "box");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fbf6fb"; ctx.fillRect(0, 0, W, H);
    pillV = null;
    if (S.vB > 0.02) bodyView(S.vB);
    if (S.vF > 0.02) filterView(S.vF);
    if (S.vM > 0.02) mapView(S.vM);
    if (S.vT > 0.02) treatView(S.vT);
    const c = CH[cur];
    pill(14, 12, c.pill[0], cur === 0 && pillV ? pillV : c.pill[1], "#b06ad8", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#e8637a", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#c9a3e8",
    titleCard: { lines: ["浑身都痛，", "却找不到伤"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
