Anima.register("norepinephrine-system", {
    "title": "去甲肾上腺素：蓝斑的警戒哨",
    "tag": "心境障碍",
    "headline": "脑干里的小哨所，怎样让【全脑】警觉起来？",
    "lede": "去甲肾上腺素（NE）神经元大多住在脑干的蓝斑，却把消息送到几乎整个大脑。看看 NE 怎样在流水线上做出来、怎样被回收和分解，α 和 β 两大家族的门各管什么，以及几类药物分别从哪里下手。",
    "summary": "酪氨酸 → 左旋多巴 → 多巴胺 → 囊泡里的 DBH 做成 NE，蓝斑投射全脑，NET 回收、MAO 和 COMT 分解，α1、α2A（突触后和自身受体）与 β1/β2/β3，NE 太少和太多，以及 NET 抑制剂、米氮平、胍法辛、哌唑嗪、普萘洛尔。",
    "chapter": "对应 Stahl《精神药理学精要》第 6 章 · 去甲肾上腺素系统",
    "footer": "文中提到的药物各有适应证和注意事项，请在医生指导下使用，不要自行加减或停药。",
    "canvasLabel": "拟人化的去甲肾上腺素在流水线上被做出来、从蓝斑出发送信、按下 α 和 β 受体，以及药物访客调节它的动画",
    "regions": ["brainstem", "pfc"],
    "parts": ["mood"],
    "cast": ["NE", "DA", "pump", "MAO", "drug"],
    "color": "#ec6470"
  }, () => {
  const CH = [
    { title: "流水线上做出来", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["原料", "酪氨酸"], pill2: ["最后一步", "在囊泡里"],
      text: "NE 是在一条流水线上一步步做出来的。原料是酪氨酸：酪氨酸羟化酶给它加上一个羟基，变成左旋多巴，这是最慢、最关键的一步；多巴脱羧酶再去掉一个羧基，它就成了多巴胺。多巴胺被装进囊泡，囊泡里住着多巴胺 β-羟化酶（DBH），再加一个羟基，多巴胺就变成了 NE。",
      fact: "酪氨酸 → 左旋多巴 → 多巴胺 → NE；最后一步由囊泡里的 DBH 完成" },
    { title: "蓝斑：全脑的警戒哨", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["老家", "蓝斑"], pill2: ["投射", "几乎全脑"],
      text: "大脑里的 NE 神经元，大多住在脑干里一个小小的核团，叫蓝斑。它们数量不多，轴突却像广播线一样伸向几乎整个大脑：前额叶、下丘脑、海马、小脑，还一路往下到脊髓。蓝斑像一座警戒哨：放电太少，人没精神、注意力差；刚刚好，清醒专注；太多了，就紧张焦虑、睡不着、心慌。",
      fact: "蓝斑的 NE 神经元数量不多，却投射到几乎整个中枢神经系统" },
    { title: "回收和分解", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["回收", "NET"], pill2: ["分解", "MAO·COMT"],
      text: "NE 送完信，末梢上的去甲肾上腺素转运体（NET）把它拉回来，重新装进囊泡。末梢里多出来的，由单胺氧化酶（MAO）分解；漏到外面的，由儿茶酚-O-甲基转移酶（COMT）处理。有意思的是，前额叶里多巴胺转运体很少，那里的多巴胺也常常搭 NET 的车被收回来。",
      fact: "NET 回收 NE；MAO 和 COMT 负责分解。前额叶的多巴胺也主要靠 NET 回收" },
    { title: "α 受体：警觉和刹车", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["α1", "Gq·警觉"], pill2: ["α2", "Gi·刹车"],
      text: "NE 的门分成 α 和 β 两大家族。α1 在突触后，连着 Gq，让人警觉；在血管上，它让血管收缩。α2 有 α2A、α2B、α2C 三种：α2A 在前额叶的突触后，帮工作记忆稳住信号，《前额叶的漏水小门》里讲过；它也装在 NE 自己的末梢和胞体上当自身受体，NE 一多就踩刹车，少放一些。",
      fact: "α2A 身兼两职：前额叶里的突触后受体，以及 NE 神经元自己的刹车（自身受体）" },
    { title: "β 受体：心跳和气道", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["β1", "心脏"], pill2: ["β2", "支气管"],
      text: "β 受体也有三种，它们都连着 Gs，让细胞里的 cAMP 增多。β1 主要在心脏，NE 一按，心跳更快、更有力；β2 在支气管等处，让气道舒张；β3 在脂肪和膀胱等处。大脑里也有 β1 受体，有研究认为它和情绪有关。所以一紧张，NE 一多，心就怦怦跳。",
      fact: "β1、β2、β3 都连着 Gs；心脏以 β1 为主，支气管以 β2 为主" },
    { title: "把 NE 调高", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["NET 抑制", "堵回收门"], pill2: ["米氮平", "松刹车"],
      text: "想让 NE 多一些，有两条路。一条是堵住回收门：NET 抑制剂，比如托莫西汀、瑞波西汀，还有同时挡住 5-HT 回收的 SNRI，让 NE 在突触里留得更久。另一条是松开刹车：米氮平挡住 α2 自身受体，刹车失灵，NE 就放得更多，《递质之间的刹车网络》里细讲过。",
      fact: "堵住 NET 或挡住 α2 自身受体，都能让突触里的 NE 变多" },
    { title: "把 NE 调低或挡住", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["胍法辛", "踩刹车"], pill2: ["普萘洛尔", "挡住 β"],
      text: "也可以反过来，把 NE 的作用调低，或挡住一部分。胍法辛、可乐定是 α2A 激动剂，帮忙踩下刹车，让蓝斑安静一些，也帮前额叶稳住信号；哌唑嗪挡住 α1，医生有时用它减少创伤后的噩梦；普萘洛尔挡住 β 受体，能减轻心慌、手抖。这些药都要在医生指导下使用。",
      fact: "α2A 激动剂踩刹车，α1 拮抗剂和 β 阻滞剂挡住下游的门" },
  ];
  const DUR = 14;
  const C = Object.assign({}, Anima.C, { term: "#ffe0e0", post: "#ffe9e0", cleft: "#f3f8ff", a1: "#f7a8b8", a2: "#c9c0f5", beta: "#ffd08a" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };
  const TYR = { hair: "#d9b98a", eye: "#9a7440", cloth: "#fff3dc", hat: "cap", hatColor: "#e6c79a", style: "short", label: "Tyr" };
  const LD = { hair: "#ffb870", eye: "#d07a2a", cloth: "#ffe9cc", hat: "cap", hatColor: "#ffc98f", style: "twin", label: "L-D" };
  const EN = (hair, cloth, label) => ({ hair, eye: mix(hair, "#333333", 0.45), cloth, hat: "kerchief", hatColor: mix(hair, "#ffffff", 0.35), style: "short", label, tag: label });
  const TOH = EN("#9bb8e0", "#e3ecfa", "TOH"), DDC = EN("#c9a0dc", "#f1e6f8", "DDC"), DBH = EN("#f2a0a0", "#fde6e6", "DBH");
  const COMT = Object.assign(EN("#8fb7a0", "#dff0e4", "COMT"), { style: "bun", item: "broom" });
  const NRI = { who: "drug", label: "NRI", hatColor: "#9fc3ea", tag: "NET 抑制剂" };
  const MIR = { who: "drug", label: "MIR", hatColor: "#ffb38a", tag: "米氮平" };
  const act = [0, 0, 0], aim = [0, 0, 0];
  function update(dt) {
    lt = Anima.sceneTime;
    const k = 1 - Math.exp(-dt * 5);
    for (let i = 0; i < 3; i++) act[i] = lerp(act[i], aim[i], k);
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fs = (k) => Math.max(10, H * (k || 0.026)) * Anima.UI;
  function bgWash(top, mid, bot) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, top); g.addColorStop(0.5, mid); g.addColorStop(1, bot);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }
  // 沿着几个点走（相同的点表示停一会儿）
  function along(pts, u) {
    const m = pts.length - 1, f = clamp(u, 0, 0.9999) * m, i = Math.floor(f), p = ease(f - i), a = pts[i], b = pts[i + 1];
    const mv = a.x !== b.x || a.y !== b.y;
    return { x: lerp(a.x, b.x, p), y: lerp(a.y, b.y, p) - (mv ? Math.sin(p * Math.PI) * H * 0.03 : 0), seg: i, moving: mv && p > 0 && p < 1 };
  }
  function walkPos(a, b, t0, d) {
    const p = prog(t0, d);
    return { x: lerp(a.x, b.x, p), y: lerp(a.y, b.y, p) - Math.sin(p * Math.PI) * H * 0.03, p, moving: p > 0 && p < 1 };
  }
  function card(x, y, w, h, title, lit, col) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = mix("#fffdfb", col || "#fff4c8", lit); ctx.fill(); ctx.restore();
    outline(lit > 0.5 ? 2.4 : 1.6); rrect(x, y, w, h, 16); ctx.stroke();
    text(title, x + w / 2, y + fs(0.03) * 1.1, fs(0.03), C.ink);
  }

  // ---------- 第 1 幕：流水线 ----------
  function viewFactory(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff5f3", "#fdeff5");
    Anima.bokeh(7, "#ffd6dc", 0.8, 12);
    Anima.petals(8, 0.45, 3);
    const py = H * (n ? 0.84 : 0.86), cs = H * (n ? 0.047 : 0.058), st1 = W * 0.24, st2 = W * 0.47;
    const ves = { x: W * (n ? 0.8 : 0.78), y: H * (n ? 0.6 : 0.58), r: H * (n ? 0.2 : 0.26) };
    // 传送带
    rrect(-10, py, ves.x - ves.r * 0.6 + 10, H * 0.035, H * 0.017); ctx.fillStyle = "#f3e1d8"; ctx.fill(); outline(1.5); ctx.stroke();
    for (let x = ((time * 30) % (H * 0.06)) - H * 0.06; x < ves.x - ves.r * 0.7; x += H * 0.06) { ctx.beginPath(); ctx.arc(x, py + H * 0.0175, H * 0.008, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1); ctx.stroke(); }
    // 大囊泡
    ctx.beginPath(); ctx.arc(ves.x, ves.y, ves.r, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(2.2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.beginPath(); ctx.ellipse(ves.x - ves.r * 0.45, ves.y - ves.r * 0.55, ves.r * 0.2, ves.r * 0.1, -0.6, 0, Math.PI * 2); ctx.fill();
    text("囊泡", ves.x, ves.y - ves.r * 0.7, fs(0.026), C.soft);
    Anima.transporter(ves.x - ves.r, ves.y + ves.r * 0.3, ves.r * 0.22, "#ffe0b0", time * 1.5, false);
    // 工匠们
    const eY = py - H * (n ? 0.2 : 0.21), ecs = cs * 0.95;
    chara(st1, eY, ecs, Object.assign({}, TOH, { item: "star", arms: lt > 2.2 && lt < 3.2 ? "up" : "hold", eyes: "happy" }));
    chara(st2, eY, ecs, Object.assign({}, DDC, { item: "scissors", arms: "hold", eyes: "happy" }));
    const dbh = { x: ves.x + ves.r * 0.45, y: ves.y + ves.r * 0.6 };
    chara(dbh.x, dbh.y, cs * 0.82, Object.assign({}, DBH, { item: "star", arms: lt > 8.6 && lt < 9.6 ? "up" : "hold", eyes: "happy", dir: -1 }));
    // 快递员一路变身
    const inV = { x: ves.x - ves.r * 0.25, y: dbh.y };
    let x = -cs * 2, y = py, sc = 1, stage = 0, mor = 0, walk = null;
    const seg = (t0, t1) => clamp((lt - t0) / (t1 - t0), 0, 1);
    if (lt < 2.2) { const p = ease(seg(0.6, 2.2)); x = lerp(-cs * 2, st1, p); walk = p < 1 ? time * 9 : null; }
    else if (lt < 3.2) { x = st1; stage = 0; mor = seg(2.4, 3.2); }
    else if (lt < 4.8) { const p = ease(seg(3.2, 4.8)); x = lerp(st1, st2, p); stage = 1; walk = time * 9; }
    else if (lt < 5.8) { x = st2; stage = 1; mor = seg(5, 5.8); }
    else if (lt < 7.4) { const p = ease(seg(5.8, 7.4)); x = lerp(st2, ves.x - ves.r * 1.25, p); stage = 2; walk = time * 9; }
    else if (lt < 8.4) { const p = ease(seg(7.4, 8.4)); x = lerp(ves.x - ves.r * 1.25, inV.x, p); y = lerp(py, inV.y, p) - Math.sin(p * Math.PI) * H * 0.06; sc = lerp(1, 0.82, p); stage = 2; }
    else { x = inV.x; y = inV.y; sc = 0.82; stage = 2; mor = seg(8.8, 9.6); }
    const looks = [TYR, LD, { who: "DA" }, { who: "NE" }], names = ["酪氨酸", "左旋多巴", "多巴胺", "NE"];
    const done = lt > 9.6;
    const o = (k, al) => Object.assign({}, looks[k], { alpha: al, walk, tag: al >= 0.5 ? names[k] : null, eyes: done ? "sparkle" : "happy", arms: done ? "up" : "down", jump: done ? Math.abs(Math.sin(time * 4)) * 0.25 : 0 });
    if (mor < 1) chara(x, y, cs * sc, o(stage, 1 - mor));
    if (mor > 0) chara(x, y, cs * sc, o(stage + 1, mor));
    if (mor > 0 && mor < 1) { sparkles(x, y - cs * 1.5, cs * 2, 5, 1, 7); sfx(stage === 1 ? "−CO₂" : "+OH", x + cs * 1.4, y - cs * 3.4, H * 0.032, "#e0662a", -0.1, Math.sin(mor * Math.PI)); }
    // 顶上的流程条
    const cur4 = lt < 3 ? 0 : lt < 5.6 ? 1 : lt < 9.4 ? 2 : 3;
    const f = fs(n ? 0.034 : 0.042), gy = Anima.topSafe() + H * 0.05;
    ctx.font = `${f}px ${Anima.ROUND}`;
    const parts = []; names.forEach((s, i) => { parts.push(s); if (i < 3) parts.push("→"); });
    const ws = parts.map((s) => ctx.measureText(s).width + f * 0.7), tot = ws.reduce((p, q) => p + q, 0);
    let gx = W / 2 - tot / 2;
    parts.forEach((s, i) => {
      const on = i % 2 === 0 && i / 2 === cur4, cx2 = gx + ws[i] / 2;
      if (on) { rrect(gx, gy - f * 0.8, ws[i], f * 1.6, f * 0.8); ctx.fillStyle = "#ffe0e3"; ctx.fill(); outline(1.4); ctx.stroke(); }
      text(s, cx2, gy + 1, f, on ? "#c23a4a" : C.soft);
      gx += ws[i];
    });
    callout("f0", win(2.2, 5.2), st1, eY - ecs * 2.4, n ? W * 0.3 : st1 + W * 0.02, gy + H * 0.1, "最慢、最关键的一步");
    callout("f1", lt > 8.8, dbh.x, dbh.y - cs * 2, n ? W * 0.66 : ves.x - W * 0.04, gy + H * 0.12, "DBH 住在囊泡里");
    if (done) say("f2", lt > 10.2, x, y - cs * 2.8, n ? W * 0.3 : W * 0.5, H * (n ? 0.4 : 0.5), n ? "我是 NE 啦！" : "变身完成，我是 NE！", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：蓝斑和全脑 ----------
  function viewBrain(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f4ff", "#fff3f0");
    Anima.bokeh(6, "#ffd6dc", 0.7, 44);
    const bx = W * (n ? 0.46 : 0.36), by = H * (n ? 0.44 : 0.5), rx = n ? W * 0.34 : Math.min(W * 0.28, H * 0.46), ry = rx * (n ? 0.62 : 0.66);
    const f = 0.5 - 0.38 * prog(4, 1) + 0.38 * prog(6.8, 1) + 0.42 * prog(9.6, 1);
    // 脑干和脊髓
    const s0 = { x: bx + rx * 0.22, y: by + ry * 0.4 }, s1 = { x: bx + rx * 0.34, y: by + ry * 1.5 };
    ctx.lineCap = "round";
    ctx.strokeStyle = C.line; ctx.lineWidth = rx * 0.17 + 3; ctx.beginPath(); ctx.moveTo(s0.x, s0.y); ctx.lineTo(s1.x, s1.y); ctx.stroke();
    ctx.strokeStyle = "#f6d0d8"; ctx.lineWidth = rx * 0.17; ctx.stroke();
    // 小脑
    const cb = { x: bx + rx * 0.58, y: by + ry * 0.72 };
    ctx.beginPath(); ctx.ellipse(cb.x, cb.y, rx * 0.3, ry * 0.28, -0.1, 0, Math.PI * 2); ctx.fillStyle = "#f7d3dd"; ctx.fill(); outline(1.8); ctx.stroke();
    for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(cb.x - rx * 0.24, cb.y + i * ry * 0.09); ctx.quadraticCurveTo(cb.x, cb.y + i * ry * 0.09 - ry * 0.04, cb.x + rx * 0.24, cb.y + i * ry * 0.09); outline(1); ctx.stroke(); }
    // 大脑
    ctx.beginPath(); ctx.ellipse(bx, by, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe6ec"; ctx.fill(); outline(2.2); ctx.stroke();
    ctx.save(); ctx.globalAlpha *= 0.35; outline(1.4);
    for (let i = 0; i < 7; i++) { const q = -2.6 + i * 0.5; ctx.beginPath(); ctx.arc(bx + Math.cos(q) * rx * 0.55, by + Math.sin(q) * ry * 0.55, rx * 0.12, q, q + 2.2); ctx.stroke(); }
    ctx.restore();
    const lc = { x: bx + rx * 0.26, y: by + ry * 0.66 };
    const T = [
      { x: bx - rx * 0.74, y: by - ry * 0.05, t: "前额叶" }, { x: bx - rx * 0.05, y: by - ry * 0.78, t: "" },
      { x: bx - rx * 0.32, y: by + ry * 0.4, t: "下丘脑" }, { x: bx + rx * 0.02, y: by + ry * 0.2, t: "海马" },
      { x: cb.x + rx * 0.05, y: cb.y + ry * 0.02, t: "小脑" }, { x: s1.x, y: s1.y - ry * 0.05, t: "脊髓" },
    ];
    const curve = (p, k) => { const c = { x: (lc.x + p.x) / 2 + (k % 2 ? 1 : -1) * rx * 0.08, y: Math.min(lc.y, p.y) - ry * 0.25 }; return (t) => ({ x: (1 - t) * (1 - t) * lc.x + 2 * (1 - t) * t * c.x + t * t * p.x, y: (1 - t) * (1 - t) * lc.y + 2 * (1 - t) * t * c.y + t * t * p.y }); };
    T.forEach((p, k) => {
      const pr = prog(0.6 + k * 0.35, 1.2); if (pr <= 0) return;
      const cf = curve(p, k);
      ctx.strokeStyle = mix("#ec6470", "#f7c1c7", 1 - f); ctx.lineWidth = Math.max(1.5, H * 0.005 * (0.5 + f));
      ctx.beginPath(); for (let i = 0; i <= 24; i++) { const q = cf(i / 24 * pr); if (i) ctx.lineTo(q.x, q.y); else ctx.moveTo(q.x, q.y); } ctx.stroke();
      if (pr >= 1) {
        glow(p.x, p.y, rx * 0.16, "#ff9aa9", f);
        for (let j = 0; j < 2; j++) { const tt = (time * (0.2 + f * 0.5) + j * 0.5 + k * 0.13) % 1, q = cf(tt); ctx.save(); ctx.globalAlpha *= f > 0.2 ? 1 : 0.4; chara(q.x, q.y + H * 0.01, H * 0.022, { who: "NE", shadow: false, walk: time * 9 }); ctx.restore(); }
      }
    });
    T.forEach((p) => { if (p.t) text(p.t, p.x, p.y + (p.t === "脊髓" ? 0 : -ry * 0.12), fs(0.028), C.ink); });
    glow(lc.x, lc.y, rx * 0.12, "#6fb9e0", 0.6 + f * 0.4);
    ctx.beginPath(); ctx.arc(lc.x, lc.y, rx * 0.045, 0, Math.PI * 2); ctx.fillStyle = "#4f9fd6"; ctx.fill(); outline(1.5); ctx.stroke();
    // 放电表和小人
    const m0 = W * (n ? 0.06 : 0.7), m1 = W * (n ? 0.56 : 0.95), my = H * (n ? 0.88 : 0.3), mh = H * 0.03;
    text("蓝斑放电", (m0 + m1) / 2, my - H * 0.05, fs(0.028), C.ink);
    const zones = [[0, 0.3, "#ddd5fa", "太少"], [0.3, 0.7, "#bfe8d6", "刚好"], [0.7, 1, "#ffc2cc", "太多"]];
    zones.forEach((z) => { ctx.fillStyle = z[2]; ctx.fillRect(lerp(m0, m1, z[0]), my, (m1 - m0) * (z[1] - z[0]), mh); if (!n) text(z[3], lerp(m0, m1, (z[0] + z[1]) / 2), my + mh + H * 0.035, fs(0.026), C.soft); });
    outline(1.6); ctx.strokeRect(m0, my, m1 - m0, mh);
    const nx = lerp(m0, m1, clamp(f, 0.02, 0.98));
    ctx.beginPath(); ctx.moveTo(nx, my + mh * 0.2); ctx.lineTo(nx - H * 0.015, my - H * 0.02); ctx.lineTo(nx + H * 0.015, my - H * 0.02); ctx.closePath(); ctx.fillStyle = "#c23a4a"; ctx.fill(); outline(1.2); ctx.stroke();
    if (n) text(zones[f < 0.3 ? 0 : f < 0.7 ? 1 : 2][3], nx, my + mh + H * 0.03, fs(0.026), C.ink);
    const px = W * (n ? 0.82 : 0.825), pyy = H * (n ? 0.97 : 0.86), ps = H * (n ? 0.05 : 0.06);
    const st = f < 0.3 ? 0 : f < 0.7 ? 1 : 2;
    chara(px, pyy, ps, { who: "neuron", hair: "#6d5a8a", cloth: "#e8f2ff", eyes: ["sleepy", "happy", "wide"][st], mouth: ["flat", "smile", "wavy"][st], brow: st === 2 ? "worry" : null, arms: st === 1 ? "up" : "down" });
    if (st === 0) emote("zzz", px + ps, pyy - ps * 3.2, ps * 0.6); else if (st === 1) sparkles(px, pyy - ps * 1.6, ps * 2, 4, 1, 3); else emote("sweat", px + ps, pyy - ps * 3.2, ps * 0.6);
    callout("b0", win(0.8, 4.2), lc.x, lc.y, n ? W * 0.72 : lc.x + rx * 0.5, n ? H * 0.72 : by + ry * 1.25, "蓝斑：NE 的老家");
    say("b1", win(4.8, 6.9), px, pyy - ps * 3.2, n ? W * 0.72 : px - W * 0.02, H * (n ? 0.62 : 0.55), "好困，集中不了…", "think");
    say("b2", lt > 10.4, px, pyy - ps * 3.2, n ? W * 0.72 : px - W * 0.02, H * (n ? 0.62 : 0.55), "心怦怦跳，睡不着…", "say");
    ctx.restore();
  }

  // ---------- 第 3、4、6 幕：突触 ----------
  function geo() {
    const n = N(), cx = W * (n ? 0.5 : 0.45), tw = Math.min(W * (n ? 0.9 : 0.6), H * 1.08), th = H * (n ? 0.5 : 0.52), bot = th, mem = H * 0.84;
    const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
    const termY = (x) => {
      const dx = Math.abs(x - cx); let best = bot, bd = 1e9;
      for (let i = 0; i <= 30; i++) { const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, bot + th * 0.02, bot, bot); if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; } }
      return best;
    };
    const cs = H * 0.044, rs = H * 0.048, a2x = cx - tw * 0.26, netX = cx + tw * 0.38;
    return { n, cx, tw, th, bot, mem, termY, cs, rs, a1x: cx - tw * 0.3, a2ax: cx + tw * 0.08, a2x, a2y: termY(a2x),
      net: { x: netX, y: termY(netX) - H * 0.012 }, rel: { x: cx - tw * 0.02, y: bot - H * 0.05 }, mao: { x: cx + tw * 0.2, y: bot - th * 0.07 },
      comt: { x: W * (n ? 0.9 : 0.9), y: mem } };
  }
  function synView(a) {
    const g = geo(), n = g.n, cs = g.cs, rs = g.rs, c = cur, cs2 = cs * 0.72;
    ctx.save(); ctx.globalAlpha *= a;
    bgWash("#fff4f2", C.cleft, "#fff3ee");
    Anima.bokeh(6, "#ffd6dc", 0.8, 81);
    Anima.petals(6, 0.4, 9);
    Anima.postMembrane(g.mem, C.post, {});
    Anima.receptor(g.a1x, g.mem, rs, C.a1, act[0], { shape: "tri" });
    Anima.receptor(g.a2ax, g.mem, rs, C.a2, act[1], {});
    text("α1", g.a1x, g.mem + H * 0.05, fs(0.03), "#c23a4a");
    text("α2A", g.a2ax, g.mem + H * 0.05, fs(0.03), C.lavDeep);
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    Anima.receptor(g.a2x, g.a2y, rs * 0.85, C.a2, act[2], { dir: -1 });
    text("α2", g.a2x, g.a2y - H * 0.035, fs(0.028), C.lavDeep);
    const brake = c === 3 ? prog(9.2, 0.8) : 0, more = c === 5 ? prog(9.2, 0.8) : 0;
    for (let i = 0; i < 3; i++) Anima.vesicle(g.cx - g.tw * 0.14 + i * g.tw * 0.14, H * 0.2 + (i % 2) * H * 0.07 + (1 - brake) * Math.sin(time * 3 + i) * H * 0.008, H * 0.034, mix("#ec6470", "#c9c0c4", brake), 4 + (more > 0.5 ? 2 : 0), i * 4);
    Anima.vesicle(g.rel.x, g.rel.y, H * 0.036, mix("#ec6470", "#c9c0c4", brake), 4, 2);
    if (more > 0) sparkles(g.rel.x, g.rel.y, H * 0.07, 4, more, 2);
    const blocked = c === 5 && lt > 4;
    Anima.transporter(g.net.x, g.net.y, rs * 0.95, "#9fc3ea", blocked ? time * 0.2 : time * 3, blocked);
    if (c === 2 || c === 5) chara(g.mao.x, g.mao.y, cs * 0.95, { who: "MAO", item: "broom", arms: "hold", eyes: "open", dir: -1 });
    if (c === 2) chara(g.comt.x, g.comt.y, cs * 0.95, Object.assign({}, COMT, { arms: "hold", eyes: "happy", dir: -1 }));
    // 被放出来的 NE
    const sA1 = { x: g.a1x, y: g.mem - rs * 1.62 }, sA2A = { x: g.a2ax, y: g.mem - rs * 1.62 }, sA2 = { x: g.a2x, y: g.a2y + rs * 1.4 + cs2 * 3.2 };
    const from = { x: g.rel.x, y: g.bot + cs2 * 3.3 }, mouth = { x: g.net.x, y: g.net.y + rs + cs2 * 3.2 }, inn = { x: g.mao.x + cs * 1.3, y: g.mao.y };
    const A = [0, 0, 0];
    const drawNE = (p, al, eyes, s) => { if (al > 0.03) chara(p.x, p.y, cs2 * (s || 1), { who: "NE", alpha: al, eyes, arms: "down", shadow: false, walk: p.moving ? time * 9 : null }); };
    if (c === 2 || c === 5) {
      const bw = c === 5 ? prog(4, 1.2) : 0, K = c === 5 && more > 0 ? 6 : 4;
      for (let k = 0; k < K; k++) {
        const t0 = k < 4 ? 0.3 + k : 9.3 + (k - 4) * 0.6, t = lt - t0; if (t < 0) continue;
        const u = (t % 4) / 4;
        const rest = [{ x: sA1.x + rs * 1.5, y: g.mem }, { x: sA2A.x + rs * 1.5, y: g.mem }, { x: g.cx + g.tw * 0.22, y: g.mem - H * 0.06 }, { x: g.cx - g.tw * 0.46, y: g.mem - H * 0.05 }, { x: g.cx + g.tw * 0.36, y: g.mem - H * 0.02 }, { x: g.cx - g.tw * 0.1, y: g.mem - H * 0.12 }][k];
        let path, endEyes = "happy";
        if (k === 3 && c === 2) { path = [from, { x: g.cx + g.tw * 0.3, y: g.mem - H * 0.12 }, { x: g.comt.x - cs * 1.5, y: g.comt.y }, { x: g.comt.x - cs * 1.5, y: g.comt.y }]; endEyes = "dizzy"; }
        else { path = [from, k % 2 ? sA2A : sA1, k % 2 ? sA2A : sA1, mouth, inn]; if (k === 0) endEyes = "dizzy"; }
        if (k >= 4) path = [from, rest, rest];
        const p = along(path, u);
        let al = u > 0.85 && k < 4 ? 1 - (u - 0.85) / 0.15 : clamp(u * 12, 0, 1), eyes = p.seg >= path.length - 2 && u > 0.75 ? endEyes : "happy", sc = 1;
        if (k < 4 && (p.seg === 1 || (p.seg === 2 && path.length === 5 && u < 0.5))) A[k % 2] = 1;
        if (bw > 0) { const r = k < 4 ? (k < 2 ? (k % 2 ? sA2A : sA1) : rest) : rest; p.x = lerp(p.x, r.x + Math.sin(time * 1.3 + k) * rs * 0.25, bw); p.y = lerp(p.y, r.y, bw); al = lerp(al, 1, bw); eyes = "happy"; if (k < 2) A[k] = Math.max(A[k], bw); }
        drawNE(p, al, eyes, sc);
      }
    }
    let nri = null, mir = null, k2 = null;
    if (c === 3) {
      const g0 = walkPos(from, sA1, 0.5, 1.5), g1 = walkPos(from, sA2A, 3.6, 1.5), g2 = walkPos({ x: g.rel.x - cs, y: g.bot + cs2 * 3.3 }, sA2, 7.4, 1.6);
      if (g0.p > 0) { drawNE(g0, 1, g0.p >= 1 ? "happy" : "open"); if (g0.p >= 1) A[0] = 1; }
      if (g1.p > 0) { drawNE(g1, 1, g1.p >= 1 ? "happy" : "open"); if (g1.p >= 1) A[1] = 1; }
      if (g2.p > 0) { drawNE(g2, 1, g2.p >= 1 ? "happy" : "open"); if (g2.p >= 1) A[2] = 1; k2 = g2; }
      if (brake > 0.2 && brake < 1) sfx("刹车！", g.a2x + rs * 1.8, g.a2y + H * 0.05, H * 0.036, C.lavDeep, -0.1, 1);
      if (A[1] > 0.5 && lt > 5.2) { const t = (time * 0.6) % 1; Anima.spark([[g.a2ax, g.mem + H * 0.08], [W + 10, g.mem + H * 0.1]], t, H * 0.02, C.gold); }
    }
    if (c === 5) {
      const np = walkPos({ x: W + cs * 2, y: g.mem - H * 0.04 }, { x: g.net.x + rs * 0.9, y: g.net.y + rs + cs * 3.3 }, 2.4, 1.6);
      if (np.p > 0) { nri = np; chara(np.x, np.y, cs, Object.assign({}, NRI, { walk: np.moving ? time * 9 : null, arms: np.p >= 1 ? "up" : "wave", eyes: "happy", dir: -1 })); }
      const mp = walkPos({ x: -cs * 2, y: g.mem - H * 0.06 }, { x: g.a2x, y: g.a2y + rs * 1.4 + cs * 3.2 }, 7.4, 1.8);
      if (mp.p > 0) { mir = mp; chara(mp.x, mp.y, cs, Object.assign({}, MIR, { walk: mp.moving ? time * 9 : null, arms: mp.p >= 1 ? "up" : "wave", eyes: "happy" })); }
    }
    for (let i = 0; i < 3; i++) aim[i] = A[i];
    // 突触后的小脸
    const fx = W * (n ? 0.1 : 0.08), fy = H * 0.93, alert = act[0] > 0.5 && c === 3;
    face(fx, fy, H * 0.04, alert ? 1 : 0);
    if (alert) emote("!", fx + H * 0.05, fy - H * 0.06, H * 0.035);
    // 标注和气泡
    const top = Anima.topSafe() + H * 0.05;
    if (c === 2) {
      callout("s0", win(1, 5), g.net.x + rs * 0.6, g.net.y, n ? W * 0.72 : g.net.x + W * 0.08, n ? top + H * 0.1 : H * 0.28, "NET：把 NE 拉回来");
      callout("s1", win(5.2, 9.5), g.mao.x, g.mao.y - cs * 2.4, n ? W * 0.3 : W * 0.12, n ? top + H * 0.1 : H * 0.3, "MAO：末梢里分解");
      callout("s2", lt > 9.5, g.comt.x - cs * 0.3, g.comt.y - cs * 2.6, n ? W * 0.32 : g.comt.x - W * 0.06, H * (n ? 0.3 : 0.56), "COMT：外面的分解");
    }
    if (c === 3) {
      callout("s3", win(1.8, 5.2), g.a1x - rs * 0.6, g.mem - rs * 0.8, n ? W * 0.5 : W * 0.12, H * (n ? 0.93 : 0.62), "α1：Gq，让人警觉");
      callout("s4", win(5.2, 9), g.a2ax + rs * 0.5, g.mem - rs * 0.8, n ? W * 0.62 : g.a2ax + W * 0.16, H * (n ? 0.93 : 0.62), "α2A：稳住前额叶信号");
      callout("s5", lt > 9.3, g.a2x - rs * 0.6, g.a2y + rs, n ? W * 0.62 : W * 0.1, H * (n ? 0.93 : 0.62), "α2 自身受体：踩刹车");
      if (k2) say("s6", lt > 10.6, k2.x, k2.y - cs2 * 3.2, n ? W * 0.62 : g.cx + g.tw * 0.25, H * (n ? 0.3 : 0.66), "NE 够多了，少放点！", "say");
    }
    if (c === 5) {
      if (nri) say("s7", win(4.2, 7.4), nri.x, nri.y - cs * 3.2, n ? W * 0.72 : W * 0.88, H * (n ? 0.58 : 0.6), "回收门，暂停！", "shout");
      callout("s8", win(5, 9), g.a1x, g.mem - rs * 1.2, n ? W * 0.3 : W * 0.14, H * (n ? 0.62 : 0.6), "NE 留得更久");
      callout("s9", lt > 9.6, g.rel.x, g.rel.y, n ? W * 0.72 : g.cx + g.tw * 0.3, H * (n ? 0.3 : 0.3), "刹车松开，放得更多");
      if (mir) say("s10", lt > 10.8, mir.x, mir.y - cs * 3.2, n ? W * 0.3 : W * 0.12, H * (n ? 0.3 : 0.42), "α2 刹车，先挡住～", "say");
    }
    ctx.restore();
  }

  // ---------- 第 5 幕：β 受体 ----------
  function organIcon(i, x, y, s, on) {
    if (i === 0) { // 大脑
      ctx.beginPath(); ctx.ellipse(x, y, s * 1.2, s * 0.85, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe6ec"; ctx.fill(); outline(1.6); ctx.stroke();
      outline(1); for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(x - s * 0.5 + k * s * 0.5, y - s * 0.1, s * 0.3, 3.4, 5.9); ctx.stroke(); }
      if (on > 0.5) emote("?", x + s * 1.3, y - s * 0.9, s * 0.6);
    } else if (i === 1) { // 心脏：心跳快慢
      const rate = lerp(4, 11, on), b = 1 + Math.max(0, Math.sin(time * rate)) * 0.14;
      Anima.heart(x, y, s * 1.1 * b, "#f28ca5"); face(x, y + s * 0.1, s * 0.35, 1);
      if (on > 0.5 && Math.sin(time * rate) > 0.6) sfx("怦", x + s * 1.3, y - s, s * 0.6, C.bad, -0.1, 1);
    } else if (i === 2) { // 支气管：变粗
      const w = lerp(0.12, 0.26, on) * s;
      ctx.lineCap = "round";
      const br = (x0, y0, x1, y1) => { ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke(); ctx.strokeStyle = "#bfe3f5"; ctx.lineWidth = w; ctx.stroke(); };
      br(x, y - s, x, y); br(x, y, x - s * 0.8, y + s * 0.6); br(x, y, x + s * 0.8, y + s * 0.6); br(x - s * 0.8, y + s * 0.6, x - s * 1.1, y + s * 1.1); br(x + s * 0.8, y + s * 0.6, x + s * 1.1, y + s * 1.1);
    } else { // 脂肪：变小
      for (let k = 0; k < 4; k++) { const r = s * lerp(0.42, 0.28, on) * (1 + (k % 2) * 0.2); ctx.beginPath(); ctx.arc(x + (k % 2 ? 0.45 : -0.45) * s, y + (k < 2 ? -0.35 : 0.4) * s, r, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.3); ctx.stroke(); }
    }
  }
  function viewBeta(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ef", "#fdf0f5");
    Anima.petals(8, 0.4, 61);
    const tt = ["大脑 · β1", "心脏 · β1", "支气管 · β2", "脂肪 · β3"], cols = ["#f3ecff", "#ffe4ee", "#e3f3ff", "#fff4c8"];
    const top = Anima.topSafe() + H * 0.04, gap = W * 0.025;
    const cw = n ? (W - gap * 3) / 2 : (W - gap * 5) / 4, ch = n ? (H - top - gap * 2) / 2 : H * 0.62;
    const out = [];
    for (let i = 0; i < 4; i++) {
      const x = n ? gap + (i % 2) * (cw + gap) : gap + i * (cw + gap), y = n ? top + Math.floor(i / 2) * (ch + gap * 0.8) : top + H * 0.06;
      const on = prog(1 + i * 1.1 + 1.4, 0.6);
      card(x, y, cw, ch, tt[i], on * 0.8, cols[i]);
      const cx = x + cw * (n ? 0.72 : 0.5), ix = n ? x + cw * 0.27 : cx, iy = y + ch * (n ? 0.58 : 0.36), s = Math.min(cw * 0.16, H * (n ? 0.045 : 0.06));
      organIcon(i, ix, iy, s, on);
      const dm = y + ch * (n ? 0.9 : 0.86), rs = Math.min(H * 0.04, cw * 0.1);
      ctx.fillStyle = "#ffe0d6"; ctx.fillRect(x + 3, dm, cw - 6, Math.min(H * 0.025, y + ch - dm - 3)); outline(1.2); ctx.beginPath(); ctx.moveTo(x + 3, dm); ctx.lineTo(x + cw - 3, dm); ctx.stroke();
      Anima.receptor(cx, dm, rs, C.beta, on, { shape: "square" });
      const p = walkPos({ x: x + cw * 0.1, y: dm - H * 0.01 }, { x: cx, y: dm - rs * 1.62 }, 1 + i * 1.1, 1.4);
      if (p.p > 0) chara(p.x, p.y, rs * 0.8, { who: "NE", walk: p.moving ? time * 9 : null, eyes: p.p >= 1 ? "happy" : "open", arms: p.p >= 1 ? "up" : "down", shadow: false });
      if (on > 0.5 && !n) text("cAMP ↑", cx + cw * 0.3, dm - rs * 2.2, fs(0.024), "#c88600");
      out.push({ x, y, cw, ch, cx, ix, iy, s, dm, rs });
    }
    const o1 = out[1], o0 = out[0];
    callout("t0", win(6, 10), o0.cx + o0.rs, o0.dm - o0.rs * 0.8, W * 0.5, n ? o0.y + o0.ch + H * 0.01 : H * 0.94, "都连着 Gs：cAMP ↑");
    say("t1", lt > 9.5, o1.ix + o1.s, o1.iy - o1.s, n ? o1.x + o1.cw * 0.62 : o1.cx + o1.cw * 0.25, n ? o1.y + o1.ch * 0.3 : o1.y + H * 0.02, "心跳加快啦！", n ? "say" : "shout");
    ctx.restore();
  }

  // ---------- 第 7 幕：调低或挡住 ----------
  function viewDown(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5f8ff", "#fff3f3");
    Anima.bokeh(6, "#d9e8fb", 0.7, 91);
    const top = Anima.topSafe() + H * 0.04, gap = W * 0.025, cw = (W - gap * 4) / 3, ch = H - top - H * (n ? 0.04 : 0.1);
    const T = ["胍法辛 · 可乐定", "哌唑嗪", "普萘洛尔"], lab = ["α2A 激动剂", "α1 拮抗剂", "β 阻滞剂"], res = ["蓝斑安静些", "挡住 α1", "心跳慢一点"], dc = [C.a2, C.a1, C.beta], sh = ["round", "tri", "square"];
    const D = [{ who: "drug", label: "GFC", hatColor: "#c9c0f5" }, { who: "drug", label: "PZS", hatColor: "#f7a8b8" }, { who: "drug", label: "PRO", hatColor: "#ffd08a" }];
    const pos = [];
    for (let i = 0; i < 3; i++) {
      const x = gap + i * (cw + gap), cx = x + cw / 2, t0 = 1 + i * 3.4, on = prog(t0 + 1.6, 0.6);
      card(x, top, cw, ch, n ? T[i].replace(" · ", "·") : T[i], on * 0.7, ["#ece8ff", "#ffe4ea", "#fff1d6"][i]);
      text(lab[i], cx, top + fs(0.03) * 2.6, fs(0.026), C.soft);
      const dm = top + ch * 0.8, rs = Math.min(H * 0.05, cw * 0.13), cs = rs * 0.85;
      ctx.fillStyle = "#ffe9e0"; ctx.fillRect(x + 3, dm, cw - 6, top + ch - dm - 4); outline(1.2); ctx.beginPath(); ctx.moveTo(x + 3, dm); ctx.lineTo(x + cw - 3, dm); ctx.stroke();
      const doorAct = i === 0 ? on : (i === 1 ? 0.15 : 0.15);
      Anima.receptor(cx, dm, rs, dc[i], doorAct, { shape: sh[i] });
      const site = { x: cx, y: dm - rs * 1.62 };
      const p = walkPos({ x: x + cw * 0.08, y: dm - H * 0.01 }, site, t0, 1.6);
      if (p.p > 0) chara(p.x, p.y, cs, Object.assign({}, D[i], { walk: p.moving ? time * 9 : null, eyes: "happy", arms: p.p >= 1 ? (i === 0 ? "up" : "hug") : "wave" }));
      // 被挡在门外的 NE
      if (i > 0 && on > 0) { const nx = cx + cw * 0.3; chara(nx, dm, cs * 0.85, { who: "NE", eyes: "open", mouth: "o", alpha: on, dir: -1 }); emote("?", nx + cs, dm - cs * 3, cs * 0.6, on); }
      // 效果图示
      const ey = top + ch * (n ? 0.3 : 0.3), es = Math.min(cw * 0.14, H * 0.05);
      if (i === 0) { for (let k = 0; k < 3; k++) { const hgt = es * lerp(1.4, 0.5, on) * (0.7 + 0.3 * Math.abs(Math.sin(time * lerp(6, 2, on) + k))); rrect(cx - es * 1.2 + k * es * 0.9, ey + es - hgt, es * 0.5, hgt, es * 0.15); ctx.fillStyle = "#ec6470"; ctx.fill(); outline(1.1); ctx.stroke(); } }
      if (i === 1) { ctx.beginPath(); ctx.arc(cx, ey, es * 0.8, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(1.4); ctx.stroke(); ctx.beginPath(); ctx.arc(cx + es * 0.35, ey - es * 0.25, es * 0.7, 0, Math.PI * 2); ctx.fillStyle = mix("#fffdfb", "#ffe4ea", on * 0.7); ctx.fill(); if (on > 0.5) emote("zzz", cx + es, ey - es, es * 0.6); }
      if (i === 2) { const rate = lerp(11, 4, on), b = 1 + Math.max(0, Math.sin(time * rate)) * 0.14; Anima.heart(cx, ey, es * b, "#f28ca5"); face(cx, ey + es * 0.1, es * 0.32, on > 0.5 ? 1 : 0); }
      ctx.save(); ctx.globalAlpha *= on; text(res[i], cx, ey + es * 1.9, fs(0.028), C.ink); ctx.restore();
      pos.push({ p, cx, dm, rs, cs, x });
    }
    const cy2 = (pos[0].dm + top + ch) / 2;
    callout("d0", win(2.8, 6), pos[0].cx, pos[0].dm, pos[0].cx + (n ? W * 0.06 : 0), cy2, "按下刹车");
    callout("d1", win(6.2, 9.6), pos[1].cx, pos[1].dm, pos[1].cx, cy2, "占住锁孔");
    if (pos[2].p.p >= 1) say("d2", lt > 10.6 && !n, pos[2].p.x, pos[2].p.y - pos[2].cs * 3.1, pos[2].cx + cw * 0.2, top + ch * 0.5, n ? "慢一点～" : "心跳慢一点～", "say");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) viewFactory(S.v0);
    if (S.v1 > 0.02) viewBrain(S.v1);
    if (S.v2 > 0.02) synView(S.v2);
    if (S.v3 > 0.02) viewBeta(S.v3);
    if (S.v4 > 0.02) viewDown(S.v4);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#c23a4a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#ec6470",
    titleCard: { lines: ["去甲肾上腺素：", "蓝斑的警戒哨"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
