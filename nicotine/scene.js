Anima.register("nicotine", {
    "title": "尼古丁的钥匙和伐尼克兰",
    "tag": "成瘾",
    "headline": "为什么烟【一支接一支】？",
    "lede": "尼古丁手里有一把能打开多巴胺神经元大门的钥匙。可门开得快、关得也快，门还会越装越多，空着的门在两支烟之间“饿”得发慌。看懂这把钥匙，也就看懂了戒烟药伐尼克兰为什么只把门开一半。",
    "summary": "α4β2 烟碱受体、多巴胺奖赏、受体脱敏和上调、两支烟之间的渴求，以及伐尼克兰这个部分激动剂怎样帮忙戒烟。",
    "chapter": "对应 Stahl《精神药理学精要》第 13 章 · 尼古丁",
    "footer": "想戒烟可以去戒烟门诊或找医生一起规划，药物和支持结合，成功的机会更大。",
    "canvasLabel": "尼古丁访客打开多巴胺神经元上的门、门很快关上又越装越多，伐尼克兰访客占住门只开一半的动画",
    "regions": ["midbrain", "nac"],
    "parts": ["addiction"],
    "cast": ["DA", "ACh", "drug"],
    "color": "#9fc3ea"
  }, () => {
  const CH = [
    { title: "尼古丁的钥匙", v0: 1, v1: 0,
      pill: ["门", "α4β2"], pill2: ["尼古丁", "也能开门"],
      text: "中脑腹侧被盖区的多巴胺神经元身上，有一种门叫 α4β2 烟碱型乙酰胆碱受体。它本来归乙酰胆碱管：乙酰胆碱一插钥匙，门就短暂打开，让钠离子、钙离子流进来。尼古丁长得不一样，却刚好也能插进这把锁，把门打开。",
      fact: "α4β2 受体是离子通道，天然钥匙是乙酰胆碱，尼古丁也能打开它" },
    { title: "多巴胺冲向伏隔核", v0: 0, v1: 1,
      pill: ["VTA", "放电 ⚡"], pill2: ["伏隔核", "DA ↑"],
      text: "门一开，带正电的离子涌进多巴胺神经元，它兴奋起来，一连串地放电。电信号沿着“多巴胺快递线”从腹侧被盖区跑到伏隔核，大量多巴胺被放出来。伏隔核收到信就记下：“刚才那样很舒服，下次还要。”吸一口烟，尼古丁很快就能到达大脑，这份奖赏来得又快又直接。",
      fact: "尼古丁 → α4β2 开门 → 多巴胺神经元放电 → 伏隔核多巴胺升高" },
    { title: "门很快关上：脱敏", v0: 1, v1: 0,
      pill: ["受体", "打开"], pill2: ["快感", "很短"],
      text: "奇怪的是，尼古丁还坐在门口，门却很快关上了，而且怎么敲也不开，这叫脱敏。多巴胺神经元不再兴奋，伏隔核的多巴胺回落，所以一支烟带来的那点“爽”很短暂。尼古丁要过一阵子才会从身体里慢慢减少，在那之前，这些门一直“关门不理人”。",
      fact: "α4β2 受体被尼古丁激活后很快脱敏：门关上，一段时间内敲不开" },
    { title: "门越来越多：上调", v0: 1, v1: 0,
      pill: ["α4β2", "3 扇"], pill2: ["天天", "吸烟"],
      text: "天天吸烟，门天天被尼古丁弄得“关门不理人”。神经元好像觉得门不够用，就在膜上装了更多的 α4β2 受体，这叫上调。研究发现，长期吸烟的人大脑里，这类受体明显比不吸烟的人多。门变多了，也为接下来的麻烦埋下了伏笔。",
      fact: "长期吸烟会让 α4β2 受体数量增加（上调）" },
    { title: "空着的门“饿”了", v0: 1, v1: 0,
      pill: ["空门", "7 扇"], pill2: ["感觉", "渴求"],
      text: "两支烟之间，尼古丁慢慢离开，那些门恢复了敏感，而且比以前多了好多，却都空着，像一张张饥饿的小嘴。多巴胺神经元得不到刺激，人就会渴求、烦躁、坐立不安、难以集中注意力。再点一支烟，门又被填满，难受暂时消失，于是一支接一支，循环就这样转了起来。",
      fact: "两支烟之间：受体恢复敏感又空着 → 渴求和戒断的难受 → 再吸一支" },
    { title: "伐尼克兰：只开一半", v0: 1, v1: 0,
      pill: ["伐尼克兰", "开一半"], pill2: ["尼古丁", "挤不进"],
      text: "伐尼克兰是 α4β2 受体的部分激动剂。它自己坐进门里，只把门打开一半，给多巴胺神经元温和、平稳的刺激，渴求和戒断的难受就减轻了。它还占着位子，这时再吸烟，尼古丁挤不进来，奖赏也变小了。尼古丁贴片、口香糖则是平稳地补一点尼古丁，安非他酮也能帮忙。",
      fact: "伐尼克兰：占住 α4β2、只开一半门，既减轻渴求，又让吸烟没那么“爽”" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { rec: "#a9cdef", desens: "#cfc8cc", cell: "#ffe3cf", out: "#f1f7fb", soma: "#ffd3c4", dend: "#f7b9a8", axon: "#f3a996" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0, da = 0.15;
  const S = { v0: 1, v1: 0 };
  const NIC = { who: "drug", label: "", hatColor: "#c4ae92", hatColor2: "#f3ebe0", tag: "尼古丁" };
  const VAR = { who: "drug", label: "", hatColor: "#7fc1ec", hatColor2: "#ffffff", tag: "伐尼克兰" };
  const SLOT0 = [1, 3, 5]; // 一开始只有 3 扇门，上调后 7 扇全满

  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => W / H < 1.5;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function daTarget() {
    if (cur === 0) return lt < 7 ? (lt > 2.6 && lt < 4 ? 0.3 : 0.15) : 0.15 + 0.7 * prog(7.2, 2);
    if (cur === 1) return 0.2 + 0.7 * prog(2.5, 3);
    if (cur === 2) return 0.85 - 0.7 * prog(2.4, 3);
    if (cur === 3) return 0.15;
    if (cur === 4) return lt > 11.4 ? 0.5 : 0.06;
    return 0.06 + 0.4 * prog(1.8, 2);
  }
  function update(dt) { lt = Anima.sceneTime; da = lerp(da, daTarget(), 1 - Math.exp(-dt * 3)); }

  // 下方的伏隔核多巴胺条
  function gauge(y) {
    const x0 = W * 0.3, x1 = W * 0.94, h = H * 0.032, fs = fsz(0.026);
    text("伏隔核的多巴胺", x0, y - h * 1.2, fs, C.ink, "left");
    rrect(x0, y, x1 - x0, h, h / 2); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.6); ctx.stroke();
    const w = Math.max(h, (x1 - x0) * clamp(da, 0, 1));
    rrect(x0, y, w, h, h / 2); ctx.fillStyle = mix("#ffd27a", "#ff9a52", da); ctx.fill(); outline(1.6); ctx.stroke();
    if (da > 0.6) sparkles(x0 + w, y + h / 2, h * 1.5, 3, 1, 4);
    if (cur === 5) { // 以前吸烟时的高度
      const mx = x0 + (x1 - x0) * 0.85;
      ctx.save(); ctx.setLineDash([4, 4]); outline(1.4); ctx.beginPath(); ctx.moveTo(mx, y - h * 0.4); ctx.lineTo(mx, y + h * 1.4); ctx.stroke(); ctx.restore();
      text("以前吸烟时", mx, y + h * 2.1, fs * 0.9, C.soft);
    }
  }

  // ---------- 受体特写 ----------
  function slotX(j) { return W * (0.08 + 0.84 * (j + 0.5) / 7); }
  // 第 j 扇门此刻的状态：{ on 显示, act 打开, des 脱敏, who 谁坐着, wa 坐着的人的透明度 }
  function doorState(j) {
    const k = SLOT0.indexOf(j), base = k >= 0;
    const st = { on: base ? 1 : 0, act: 0, des: 0, who: null, wa: 1, walk: 0, dx: 0, dy: 0 };
    if (cur === 0) {
      if (!base) return st;
      if (k === 0 && lt > 1 && lt < 5.2) { const p = prog(1, 1.5); st.who = "ACh"; st.dx = (1 - p) * -W * 0.25; st.walk = p < 1; st.act = lt > 2.6 && lt < 4 ? 1 : 0; st.wa = 1 - prog(4.2, 1); st.dy = -prog(4.2, 1) * H * 0.1; }
      const p = prog(5 + k * 0.4, 1.8);
      if (lt > 5 + k * 0.4) { st.who = "nic"; st.dx = (1 - p) * W * 0.5; st.walk = p < 1; st.wa = p; st.act = prog(6.8 + k * 0.4, 0.6); }
    } else if (cur === 2) {
      if (!base) return st;
      st.who = "nic"; st.des = prog(2 + k * 0.6, 1.4); st.act = 1 - st.des;
    } else if (cur === 3) {
      const t0 = 1.5 + [0, 2, 4, 6].indexOf(j) * 1.3;
      if (!base) { st.on = prog(t0, 0.5); if (st.on <= 0) return st; }
      st.who = "nic"; st.des = 1; st.wa = base ? 1 : prog(t0 + 0.6, 0.8);
    } else if (cur === 4) {
      st.on = 1; const p = prog(0.5 + (j % 3) * 0.3, 2.4);
      st.des = 1 - prog(3, 2);
      if (p < 1) { st.who = "nic"; st.wa = 1 - p; st.dy = -p * H * 0.16; st.walk = true; }
      if (j === 3 && lt > 10) { const q = prog(10, 1.4); st.who = "nic"; st.dx = (1 - q) * W * 0.4; st.wa = q; st.walk = q < 1; st.act = prog(11.4, 0.4); }
    } else if (cur === 5) {
      st.on = 1; const p = prog(0.4 + j * 0.15, 1.6);
      st.who = "var"; st.dy = -(1 - p) * H * 0.2; st.wa = p; st.walk = p < 1; st.act = 0.5 * prog(1.8 + j * 0.15, 0.8);
    }
    return st;
  }
  function closeView(a) {
    const n = nar(), top = Anima.topSafe(), M = H * (n ? 0.62 : 0.6), rs = H * 0.05, cs = H * 0.034;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.fillStyle = C.out; ctx.fillRect(0, 0, W, M);
    Anima.bokeh(6, "#d6ecf7", 0.7, 5);
    const mood = cur === 0 ? (lt > 7.4 ? 1 : 0) : cur === 2 ? 1 - prog(2.6, 2) * 1.2 : cur === 4 ? (lt > 11.6 ? 0.4 : -1) : cur === 5 ? (lt > 2.4 ? 0.7 : -0.6) : 0;
    Anima.postMembrane(M, C.cell, {});
    if (cur !== 3 && cur !== 4) face(W * 0.13, M + H * 0.2, H * 0.06, mood);
    const fs = fsz(0.026);
    text("多巴胺神经元（腹侧被盖区）", W * 0.03, M + H * 0.06, fs, C.soft, "left");
    const doors = [];
    for (let j = 0; j < 7; j++) {
      const st = doorState(j), x = slotX(j);
      doors.push({ st, x });
      if (st.on < 0.02) continue;
      ctx.save(); ctx.globalAlpha *= st.on;
      const col = mix(C.rec, C.desens, st.des);
      const r = Anima.receptor(x, M, rs * (0.6 + 0.4 * st.on), col, st.act, {});
      ctx.restore();
      if (cur === 3 && st.on > 0.05 && st.on < 0.95) sfx("啵！", x + rs, M - rs * 2, H * 0.04, "#6fb9e0", -0.1, 1);
      // 离子往里流
      if (st.act > 0.3) for (let k = 0; k < 3; k++) {
        const t = (time * 0.9 + k / 3 + j * 0.13) % 1;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * st.act;
        Anima.ion(x + (k - 1) * rs * 0.15, lerp(M - rs * 1.2, M + H * 0.1, t), H * 0.016, k === 1 ? "Ca" : "Na", k === 1 ? "#c8f0d8" : "#bfe3f5");
        ctx.restore();
      }
      if (st.des > 0.6 && (j + Math.floor(time)) % 2 === 0) emote("zzz", x + rs * 0.5, M - rs * 3.2, rs * 0.5, st.des);
      // 空门“饿”了
      if (cur === 4 && !st.who && st.des < 0.4) {
        const b = Math.abs(Math.sin(time * 3 + j));
        sfx("咕～", x, M - rs * 2.3 - b * rs * 0.2, H * 0.03, C.warn, -0.1, (1 - st.des) * (0.5 + 0.5 * b));
      }
    }
    // 坐在门上的角色
    const siteY = M - rs * 1.62;
    let tagged = -9; // 手机上相邻两扇门都有名牌会挤在一起：隔一个才写
    doors.forEach((d, j) => {
      const st = d.st;
      if (!st.who || st.wa < 0.02) return;
      const x = d.x + st.dx, y = siteY + st.dy;
      const base = st.who === "ACh" ? { who: "ACh" } : st.who === "var" ? VAR : NIC;
      const confused = cur === 2 && st.des > 0.5;
      const showTag = !n || !base.tag || j - tagged > 1 || Math.abs(st.dx) > rs;
      if (base.tag && showTag) tagged = j;
      chara(x, y, cs, Object.assign({}, base, { tag: showTag ? base.tag : null, alpha: st.wa, walk: st.walk ? time * 9 + j : null, shadow: false,
        eyes: confused ? "open" : st.act > 0.4 || cur === 5 ? "happy" : "open", mouth: confused ? "wavy" : "smile", arms: st.act > 0.6 ? "up" : "down" }));
      if (confused && j === 3) emote("?", x + cs, y - cs * 3.2, cs * 0.8);
    });
    gauge(H * 0.9); // 先画，气泡和标注会避开它的文字
    // 各幕的额外演出
    const dj = slotX(3);
    if (cur === 0) {
      callout("door", lt < 5, dj + rs * 0.6, M - rs, n ? W * 0.7 : dj + W * 0.1, top + H * 0.08, "α4β2 受体：一扇离子通道门");
      callout("ions", lt > 8, slotX(5), M + H * 0.05, n ? W * 0.62 : W * 0.66, M + H * 0.085, "钠、钙离子流进来");
      say("ach", lt > 1.6 && lt < 4.8, slotX(1), siteY - cs * 3, slotX(1) + W * 0.08, top + H * (n ? 0.24 : 0.1), "这扇门本来归我开～", "say");
      say("nic", lt > 6.6 && lt < 11, slotX(5), siteY - cs * 3, slotX(5) - W * 0.1, top + H * 0.08, "我也有这把钥匙！", "shout");
    }
    if (cur === 2) {
      callout("des", lt > 4.4, dj + rs * 0.6, M - rs, n ? W * 0.62 : W * 0.66, top + H * 0.06, "脱敏：门关上，敲也不开");
      say("huh", lt > 5 && lt < 11, dj, siteY - cs * 3, dj - W * 0.18, top + H * 0.14, "咦？门怎么不开了？", "think");
    }
    if (cur === 3) {
      const wx = W * 0.13, wy = H * 0.95;
      chara(wx, wy, cs * 1.1, { who: "neuron", arms: lt < 7 ? "point" : "down", eyes: "open", mouth: "smile", tag: "神经元" });
      say("more", lt > 0.8 && lt < 6.5, wx, wy - cs * 3.4, W * 0.3, top + H * 0.14, "门不够用？再装几扇！", "say");
      callout("up", lt > 7, slotX(6), M - rs * 1.4, n ? W * 0.7 : W * 0.72, top + H * 0.08, "上调：门越装越多");
    }
    if (cur === 4) {
      callout("empty", lt > 4.5 && lt < 9.5, slotX(5), M - rs * 1.4, n ? W * 0.68 : W * 0.7, top + H * 0.08, "门恢复敏感，却空着");
      const px = W * 0.13, py = H * 0.95;
      chara(px, py, cs * 1.1, { who: "neuron", eyes: lt > 11.6 ? "happy" : "angry", brow: lt > 11.6 ? null : "angry", mouth: lt > 11.6 ? "smile" : "wavy", arms: lt > 11.6 ? "down" : "fist", tag: "神经元" });
      if (lt > 5 && lt < 11.6) emote("anger", px + cs, py - cs * 3.3, cs * 0.8);
      say("crave", lt > 5.4 && lt < 11, px, py - cs * 3.4, W * 0.3, top + H * 0.14, "好烦……想再来一支", "think");
      callout("again", lt > 11.6, slotX(3), M - rs * 1.4, n ? W * 0.62 : W * 0.66, top + H * 0.08, "又一支：暂时不难受了");
    }
    if (cur === 5) {
      callout("half", lt > 2.6 && lt < 6.5, dj + rs * 0.6, M - rs, dj + W * 0.1, top + H * 0.06, "部分激动剂：门只开一半");
      const q = prog(6, 1.5), bx = lerp(W + cs * 2, slotX(4) + rs * 0.7, q) + (lt > 7.5 ? prog(7.5, 1.2) * W * 0.12 : 0);
      if (lt > 6) {
        chara(bx, siteY - H * 0.06, cs, Object.assign({}, NIC, { walk: q < 1 ? time * 9 : null, eyes: lt > 7.5 ? "x" : "open", mouth: lt > 7.5 ? "wavy" : "smile", alpha: 1 - prog(10, 1) }));
        if (lt > 7.5 && lt < 9) sfx("挤不进！", bx, siteY - H * 0.2, H * 0.04, C.bad, 0.1, 1);
      }
      say("full", lt > 7.6 && lt < 11, slotX(4), siteY - cs * 3, n ? W * 0.3 : W * 0.34, top + H * 0.1, "位子有人啦～", "say");
      say("more", lt > 10.6, W * 0.5, top, n ? W * 0.62 : W * 0.7, top + H * 0.1, "尼古丁贴片、口香糖：平稳补一点｜安非他酮也能帮忙", "box");
    }
    ctx.restore();
  }

  // ---------- 第 2 幕：从腹侧被盖区到伏隔核 ----------
  function neuronShape(x, y, r, mood) {
    ctx.lineCap = "round";
    for (let k = 0; k < 5; k++) {
      const q = Math.PI * 0.55 + k * 0.45 + rnd(k) * 0.2, x1 = x + Math.cos(q) * r * 2, y1 = y + Math.sin(q) * r * 1.8;
      for (const [w, col] of [[r * 0.34, C.line], [r * 0.22, C.dend]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + Math.cos(q + 0.3) * r * 1.2, y + Math.sin(q + 0.3) * r * 1.2, x1, y1); ctx.stroke();
      }
    }
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = C.soma; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.1, r * 0.5, mood);
  }
  function pathView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4f9ff", "#fdeef3");
    Anima.bokeh(7, "#ffd1dc", 0.8, 21);
    const V = { x: W * 0.17, y: H * 0.6 }, N = { x: W * 0.78, y: H * 0.5 }, r = H * 0.075, R = H * 0.14;
    const P = [[V.x + r * 0.9, V.y - r * 0.3], [W * 0.45, top + H * 0.02], [N.x - R * 0.9, N.y - R * 0.2]];
    for (const [w, col] of [[r * 0.3, C.line], [r * 0.19, C.axon]]) {
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(P[0][0], P[0][1]); ctx.quadraticCurveTo(P[1][0], P[1][1], P[2][0], P[2][1]); ctx.stroke();
    }
    const fire = lt > 2.2;
    // 伏隔核：一个圆圆的街区
    const happy = prog(3.5, 2);
    glow(N.x, N.y, R * 1.8, C.gold, happy * 0.8);
    ctx.beginPath(); ctx.arc(N.x, N.y, R, 0, Math.PI * 2); ctx.fillStyle = mix("#ffe8ee", "#fff1c9", happy); ctx.fill(); outline(2.2); ctx.stroke();
    face(N.x, N.y + R * 0.1, R * 0.45, happy > 0.5 ? 1 : 0);
    if (happy > 0.6) emote("heart", N.x + R * 0.8, N.y - R * 0.9, R * 0.35);
    neuronShape(V.x, V.y, r, fire ? 1 : 0);
    if (fire) { glow(V.x, V.y, r * 2, C.gold, 0.5 + 0.3 * Math.sin(time * 9)); emote("!", V.x + r * 0.3, V.y - r * 1.6, r * 0.5); }
    // 电信号一串串跑过去
    if (fire) for (let k = 0; k < 3; k++) {
      const t = ((lt - 2.2) * 0.6 + k / 3) % 1;
      const q = (u) => [(1 - u) * (1 - u) * P[0][0] + 2 * (1 - u) * u * P[1][0] + u * u * P[2][0], (1 - u) * (1 - u) * P[0][1] + 2 * (1 - u) * u * P[1][1] + u * u * P[2][1]];
      Anima.spark([q(Math.max(0, t - 0.01)), q(t)], 1, H * 0.022, C.gold);
    }
    // 多巴胺快递员冒出来
    for (let k = 0; k < 6; k++) {
      const p = prog(3.6 + k * 0.5, 0.8);
      if (p <= 0) continue;
      const q = -Math.PI * 0.94 + k * Math.PI * 0.176, x = N.x + Math.cos(q) * R * 1.02, y = N.y + Math.sin(q) * R * 1.02 + H * 0.01;
      chara(x, y, H * 0.03, { who: "DA", alpha: p, arms: "up", eyes: "happy", mouth: "grin", jump: Math.abs(Math.sin(time * 5 + k)) * 0.3, shadow: false });
    }
    chara(V.x - r * 1.4, V.y + r * 2.2, H * 0.04, Object.assign({}, NIC, { arms: "point", eyes: "happy", mouth: "grin" }));
    const fs = fsz(0.03);
    plate(n ? "VTA" : "腹侧被盖区（VTA）", V.x, V.y + r * 2.9, fs);
    plate("伏隔核", N.x, N.y + R + fs * 1.4, fs);
    callout("fire", lt > 2.6 && lt < 7, W * 0.45, top + H * 0.08, n ? W * 0.5 : W * 0.46, H * 0.36, "多巴胺神经元放电 ⚡");
    say("nac", lt > 6, N.x - R * 0.7, N.y + R * 0.5, W * 0.47, H * 0.7, "好舒服！记住了，下次还要～", "say");
    gauge(H * 0.9);
    ctx.restore();
  }
  function plate(t, x, y, fs) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 2 && lt > 3) v1 = "脱敏";
    if (cur === 3) v1 = (3 + clamp(Math.floor((lt - 1.5) / 1.3) + 1, 0, 4)) + " 扇";
    if (cur === 4 && lt > 11.4) v2 = "暂时缓解";
    if (cur === 5 && lt < 6) v2 = "…";
    pill(14, 12, c.pill[0], v1, "#e07a2a", false);
    pill(W - 14, 12, c.pill2[0], v2, "#4d8bc4", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) closeView(S.v0);
    if (S.v1 > 0.02) pathView(S.v1);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#6fa8dc",
    titleCard: { lines: ["尼古丁的钥匙", "和伐尼克兰"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
