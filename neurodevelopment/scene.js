Anima.register("neurodevelopment", {
    "title": "长大的大脑：突触修剪",
    "tag": "精神病",
    "headline": "大脑的连接为什么【先多后少】？",
    "lede": "大脑不是一出生就装好的。神经元先要爬到自己的位置，再伸出轴突和树突搭起突触；幼儿期连接多到“乱长”，青春期再由小胶质细胞园丁修剪。前额叶最晚完工，一直忙到 20 多岁。神经发育假说认为，精神分裂症的伏笔可能就埋在这段长长的工期里。",
    "summary": "神经元的出生和迁移、生长锥和突触形成、突触“先多后少”、小胶质细胞和补体修剪、前额叶的髓鞘化，以及精神分裂症的神经发育假说和保护因素。",
    "chapter": "对应 Stahl《精神药理学精要》第 4 章 · 神经发育假说",
    "footer": "如果身边的青少年或年轻人出现明显的变化，比如越来越孤僻、听到别人听不到的声音，请尽早找精神科医生：越早得到帮助越好。",
    "canvasLabel": "神经元沿绳梯爬到皮层、生长锥找路搭突触、小胶质细胞园丁按补体标签修剪突触、前额叶最后完工的动画",
    "regions": ["pfc"],
    "parts": ["psychosis"],
    "cast": ["neuron", "Glu"],
    "color": "#9fd8a8"
  }, () => {
  const CH = [
    { title: "出生和迁移",
      pill: ["时间", "孕期为主"], pill2: ["路线", "沿绳梯爬"],
      text: "大脑的故事从妈妈肚子里就开始了。孕期里，神经元在脑室旁边的“出生地”一批批诞生，然后沿着放射状胶质细胞伸出的长长“绳梯”往上爬，爬到大脑皮层里属于自己的那一层。先出生的住在里层，后出生的要越过前辈，住到更外面。位置站对了，以后才好和邻居连线。",
      fact: "大脑皮层的神经元大多在出生前就生好了，并沿着放射状胶质细胞“爬”到自己的位置" },
    { title: "伸出小手，搭起突触",
      pill: ["生长锥", "找路"], pill2: ["突触", "一个个搭起"],
      text: "到了位置，神经元开始“拉网线”。轴突的前端有一只会摸索的小手，叫生长锥，它顺着周围分子留下的路标，一路找到要连接的神经元；对方也把树突长得枝繁叶茂，准备接信。两边一碰上，就搭起一个新的突触。从出生前后到幼儿期，大脑里的突触一天天飞快地多起来。",
      fact: "生长锥靠周围的“路标分子”找路，找到目标后搭起突触" },
    { title: "先多后少",
      pill: ["突触", "先多后少"], pill2: ["规则", "用进废退"],
      text: "有意思的是，大脑的连接不是一直越来越多，而是先多后少。幼儿期，突触长得比成年人还多，像一棵枝叶乱长的小树；从童年后期到青春期，大脑开始大修剪，相当一部分连接被剪掉。规则很简单：常用的留下，不用的剪掉，也就是“用进废退”。修剪不是损失，而是让回路更利落、更高效。",
      fact: "幼儿期突触数量达到高峰，之后经过修剪，成年人的突触反而更少、更精" },
    { title: "园丁和标签",
      pill: ["园丁", "小胶质细胞"], pill2: ["标签", "补体"],
      text: "谁来修剪？大脑里有一群园丁，叫小胶质细胞。它们本来是大脑的免疫细胞，在发育期还兼职修枝。少用的突触会被贴上“待修剪”的标签，这些标签是补体蛋白，比如 C1q、C3；小胶质细胞认出标签，就把那个突触吞掉收走。常用的突触信号多、很活跃，不容易被贴标签，留下来还会越来越结实。",
      fact: "小胶质细胞认出补体标签（如 C3），吞掉不常用的突触" },
    { title: "前额叶最后完工",
      pill: ["前额叶", "20 多岁"], pill2: ["髓鞘", "信号更快"],
      text: "大脑不是同时完工的。管看、管听、管动作的区域先成熟，负责计划、控制冲动、权衡后果的前额叶最晚，它的修剪和“包电线”一直持续到 20 多岁。包电线指的是髓鞘化：少突胶质细胞把轴突一圈圈包起来，信号就能一段一段跳着跑，更快也更省力。青少年容易冲动，部分就因为前额叶还在施工。",
      fact: "前额叶是最晚成熟的脑区之一，修剪和髓鞘化会持续到 20 多岁" },
    { title: "神经发育假说",
      pill: ["假说", "神经发育"], pill2: ["常见起病", "青春晚期"],
      text: "精神分裂症为什么常在青春晚期到成年早期起病？神经发育假说认为：一些基因上的易感性，加上孕期或早年的环境因素，可能让神经元迁移、连线早早出了一点小偏差；到了青春期大修剪，修剪又可能过了头，前额叶的连接变得太少。早年埋下的伏笔，在前额叶快完工时才显现。这仍是研究中的假说，也不是谁的错。",
      fact: "神经发育假说：易感基因 + 早期环境 → 连接出偏差 → 青春期修剪过度（仍在研究）" },
    { title: "给大脑搭把手",
      pill: ["守护", "三件事"], pill2: ["求助", "越早越好"],
      text: "发育中的大脑也需要照顾。睡眠给大脑留出整理连接的时间；青春期大量使用大麻，与之后精神病风险升高有关，它会打乱大脑自己的“倒着送的信”，详见《倒着送的信》那一集；如果出现明显的变化，比如越来越孤僻、听到别人听不到的声音，请尽早求助。越早得到帮助，治疗效果往往越好。",
      fact: "好好睡觉、青春期远离大麻、有变化及早求助：给发育中的大脑搭把手" },
  ];
  CH.forEach((c, i) => { for (let j = 0; j < CH.length; j++) c["v" + j] = i === j ? 1 : 0; });

  const C = Object.assign({}, Anima.C, { soma: "#ffd3c4", dend: "#f7b9a8", glia: "#cfe7d6", layer: "#fdf0e6", vz: "#ffe0ea", myelin: "#fff3c4", leaf: "#8cc084" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsz = (k) => Math.max(11, W / 58) * Anima.UI * (k || 1);
  const GARD = { who: "neuron", hair: "#79b98f", eye: "#3f7f58", cloth: "#dff3e4", hat: "kerchief", hatColor: "#a9dbb8", style: "short", item: "scissors", tag: "小胶质" };

  function update() { lt = Anima.sceneTime; }

  // ---------- 共用零件 ----------
  function soma(x, y, r, mood, col) {
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
    g.addColorStop(0, "#fff0ea"); g.addColorStop(1, col || C.soma);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(Math.max(1.5, r * 0.06)); ctx.stroke();
    face(x, y + r * 0.1, r * 0.5, mood);
  }
  function branch(x0, y0, x1, y1, w, col, cx, cy) {
    for (const [ww, cc] of [[w + 3, C.line], [w, col || C.dend]]) {
      ctx.strokeStyle = cc; ctx.lineWidth = ww; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(x0, y0);
      if (cx != null) ctx.quadraticCurveTo(cx, cy, x1, y1); else ctx.lineTo(x1, y1);
      ctx.stroke();
    }
  }
  // 一棵“树突小树”：底下是细胞体，树枝上长着一排排树突棘（突触）
  function treeGeo(x, y, h) {
    const br = [[x, y, x, y - h]];
    [[0.28, -1], [0.42, 1], [0.6, -1], [0.76, 1]].forEach((q) => { const by = y - h * q[0]; br.push([x, by, x + q[1] * h * 0.36, by - h * 0.26]); });
    const sp = [];
    br.forEach((b, bi) => {
      const n = bi ? 6 : 8;
      for (let k = 0; k < n; k++) {
        const t = bi ? (k + 1) / (n + 0.4) : 0.18 + k * 0.1, side = k % 2 ? 1 : -1;
        const dx = b[2] - b[0], dy = b[3] - b[1], L = Math.hypot(dx, dy);
        sp.push({ x: lerp(b[0], b[2], t), y: lerp(b[1], b[3], t), nx: -dy / L * side, ny: dx / L * side, r: rnd(bi * 20 + k) });
      }
    });
    // 修剪顺序：随机但固定
    const order = sp.map((s, i) => i).sort((a, b) => sp[a].r - sp[b].r);
    order.forEach((i, rank) => { sp[i].rank = rank; });
    return { x, y, h, br, sp };
  }
  function drawTree(g, spA, opt) {
    const o = opt || {}, w = Math.max(3, g.h * 0.032);
    g.br.forEach((b) => branch(b[0], b[1], b[2], b[3], w, o.col));
    const len = g.h * 0.085, r = g.h * 0.028;
    g.sp.forEach((s, i) => {
      const a = spA(i, s);
      if (a < 0.02) return;
      ctx.save(); ctx.globalAlpha *= a;
      const ex = s.x + s.nx * len, ey = s.y + s.ny * len;
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(1.2, w * 0.35); ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(ex, ey); ctx.stroke();
      ctx.beginPath(); ctx.arc(ex, ey, r * (0.6 + 0.4 * a), 0, Math.PI * 2);
      const gr = o.gray || (o.wilt && o.wilt(s));
      ctx.fillStyle = gr ? "#ddd4d8" : (o.glow ? "#fff1b8" : "#ffc6d4"); ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    });
    soma(g.x, g.y, g.h * 0.12, o.mood == null ? 1 : o.mood, o.gray ? "#e2d8dc" : null);
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = "rgba(255,253,251,0.95)"; ctx.fill();
    ctx.restore();
    outline(1.8); rrect(x, y, w, h, 16); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.95), w * 0.12);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.2;
      rrect(x + w / 2 - tw / 2, y - fs * 0.72, tw, fs * 1.45, fs * 0.72); ctx.fillStyle = color; ctx.fill(); outline(1.5); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
  }
  function arrow(x0, y0, x1, y1, col, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    ctx.strokeStyle = col || C.line; ctx.fillStyle = col || C.line; ctx.lineWidth = Math.max(2, H * 0.006); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    const q = Math.atan2(y1 - y0, x1 - x0), s = H * 0.02;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - Math.cos(q - 0.5) * s, y1 - Math.sin(q - 0.5) * s); ctx.lineTo(x1 - Math.cos(q + 0.5) * s, y1 - Math.sin(q + 0.5) * s); ctx.closePath(); ctx.fill();
    ctx.restore();
  }

  // ---------- 第 1 幕：沿绳梯爬到自己的那一层 ----------
  function viewMigrate(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f0", "#fdeef3");
    const top = Anima.topSafe() + H * 0.02, deep = H * 0.74, vz = H * 0.84;
    // 皮层的六层：一条条浅色的带子
    for (let k = 0; k < 6; k++) {
      const y0 = lerp(top, deep, k / 6);
      ctx.fillStyle = k % 2 ? "rgba(255,240,228,0.8)" : "rgba(255,250,244,0.8)"; ctx.fillRect(0, y0, W, (deep - top) / 6);
    }
    ctx.fillStyle = C.vz; ctx.fillRect(0, vz, W, H - vz);
    outline(1.4); ctx.beginPath(); ctx.moveTo(0, vz); ctx.lineTo(W, vz); ctx.stroke();
    ctx.save(); ctx.setLineDash([5, 6]); ctx.beginPath(); ctx.moveTo(0, top); ctx.lineTo(W, top); ctx.stroke(); ctx.restore();
    // 放射状胶质：从脑室区一直拉到表面的绳梯
    const FX = [0.36, 0.56, 0.76].map((k) => k * W);
    FX.forEach((fx, i) => {
      ctx.strokeStyle = C.line; ctx.lineWidth = 8; ctx.beginPath();
      for (let k = 0; k <= 20; k++) { const y = lerp(vz, top, k / 20), x = fx + Math.sin(k * 0.8 + i) * H * 0.006; if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.strokeStyle = C.glia; ctx.lineWidth = 5; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(fx, vz + H * 0.06, H * 0.045, H * 0.03, 0, 0, Math.PI * 2); ctx.fillStyle = C.glia; ctx.fill(); outline(1.5); ctx.stroke();
      face(fx, vz + H * 0.062, H * 0.022, 1);
    });
    // 神经元：先出生的住里层，后出生的越过前辈住到外层
    const s = H * 0.024, n = 8;
    let late = null;
    for (let i = 0; i < n; i++) {
      const t0 = 0.6 + i * 1.15, p = clamp((lt - t0) / 2.4, 0, 1);
      if (lt < t0) continue;
      const fx = FX[i % 3], ty = lerp(deep - H * 0.02, top + H * 0.12, i / (n - 1));
      const arrived = p >= 1, side = (Math.floor(i / 3) % 2 ? -1 : 1) * (i % 2 ? 1 : 1.9);
      const y = lerp(vz - H * 0.005, ty, ease(p)), x = fx + (arrived ? side * H * 0.035 * clamp((lt - t0 - 2.4) * 2, 0, 1) : H * 0.012);
      chara(x, y, s, { who: "neuron", arms: arrived ? "wave" : "up", eyes: arrived ? "happy" : "open", mouth: arrived ? "grin" : "o", shadow: false, bob: arrived ? 1 : 0, alpha: clamp((lt - t0) * 3, 0, 1) });
      if (i === 6 && !arrived) late = { x, y };
    }
    text("↑ 外层：后到", W * 0.1, top + H * 0.05, fsz(0.85), C.soft);
    text("↓ 里层：先到", W * 0.1, deep - H * 0.03, fsz(0.85), C.soft);
    const on = (k, t0) => lt > t0;
    callout("mg-rg", on("rg", 1.2), FX[0] - H * 0.004, H * 0.55, W * 0.15, H * 0.42, "放射状胶质：绳梯");
    callout("mg-vz", on("vz", 0.3), W * 0.1, vz + H * 0.05, W * 0.16, vz + H * 0.01, "出生地（脑室区）");
    callout("mg-l", lt > 7, W * 0.9, top + H * 0.06, W * 0.88, top + H * 0.16, "皮层：一层一层");
    say("mg-late", !!late && lt > 7.5, late ? late.x : 0, late ? late.y - s * 3 : 0, late ? late.x + W * 0.2 : 0, late ? late.y - H * 0.02 : 0, "借过～我住更外面一层！", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：生长锥找路，搭起突触 ----------
  function growthCone(x, y, s, ang) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    for (let k = -2; k <= 2; k++) {
      const q = k * 0.4 + Math.sin(time * 5 + k) * 0.08, L = s * (1.3 + (k % 2 ? 0.3 : 0));
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, s * 0.22); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(q) * L, Math.sin(q) * L); ctx.stroke();
    }
    ctx.beginPath(); ctx.ellipse(s * 0.25, 0, s * 0.6, s * 0.75, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffc6b0"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.restore();
  }
  function viewGrow(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbff", "#fdf0f4");
    Anima.bokeh(7, "#ffd1dc", 0.7, 12);
    const r = H * 0.075, A = { x: W * 0.16, y: H * 0.62 }, B = { x: W * 0.8, y: H * 0.5 };
    const meet = { x: W * 0.64, y: H * 0.46 };
    // 背景里远处也在连线的小神经元
    for (let k = 0; k < 4; k++) {
      const x = W * (0.3 + k * 0.17), y = H * (0.88 - (k % 2) * 0.04), q = prog(2 + k * 1.8, 2.5);
      ctx.save(); ctx.globalAlpha *= 0.45;
      if (k < 3) branch(x, y, lerp(x, x + W * 0.15, q), lerp(y, H * (0.88 - ((k + 1) % 2) * 0.04), q), 2.5);
      soma(x, y, H * 0.025, 1);
      if (q >= 1) sparkle(x + W * 0.15, H * (0.88 - ((k + 1) % 2) * 0.04), H * 0.02, 1);
      ctx.restore();
    }
    // B 的树突：一根根长出来
    const dg = prog(0.5, 5);
    const dends = [[-2.7, 1.0], [-3.2, 1.25], [-3.7, 0.95], [-2.2, 0.85], [-0.4, 0.9], [0.5, 0.8]];
    dends.forEach((d, i) => {
      const L = r * 2.4 * d[1] * (0.25 + 0.75 * dg), ex = B.x + Math.cos(d[0]) * L, ey = B.y + Math.sin(d[0]) * L;
      branch(B.x, B.y, ex, ey, r * 0.2, C.dend, B.x + Math.cos(d[0] + 0.3) * L * 0.5, B.y + Math.sin(d[0] + 0.3) * L * 0.5);
    });
    branch(B.x, B.y, lerp(B.x, meet.x, 0.3 + 0.7 * dg), lerp(B.y, meet.y, 0.3 + 0.7 * dg), r * 0.24, C.dend);
    soma(B.x, B.y, r, lt > 7 ? 1 : 0);
    // A 的轴突：生长锥沿着路标前进
    const p = prog(1, 6);
    const path = (t) => ({ x: lerp(A.x + r, meet.x - H * 0.02, t), y: lerp(A.y, meet.y, t) - Math.sin(t * Math.PI) * H * 0.12 });
    ctx.strokeStyle = C.line; ctx.lineWidth = r * 0.22 + 3; ctx.lineCap = "round";
    ctx.beginPath(); for (let k = 0; k <= 30; k++) { const q = path(p * k / 30); if (k) ctx.lineTo(q.x, q.y); else ctx.moveTo(q.x, q.y); } ctx.stroke();
    ctx.strokeStyle = "#f3a996"; ctx.lineWidth = r * 0.22; ctx.stroke();
    // 路标分子：小旗子
    [0.3, 0.55, 0.8].forEach((t, i) => {
      const q = path(t), fx = q.x, fy = q.y - H * 0.1;
      const lit = p > t - 0.08;
      ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(fx, fy + H * 0.06); ctx.lineTo(fx, fy - H * 0.02); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(fx, fy - H * 0.02); ctx.lineTo(fx + H * 0.04, fy - H * 0.005); ctx.lineTo(fx, fy + H * 0.01); ctx.closePath();
      ctx.fillStyle = lit ? C.gold : "#f3e8d6"; ctx.fill(); outline(1.3); ctx.stroke();
      if (lit && p < 1) glow(fx + H * 0.015, fy, H * 0.04, C.gold, 0.5);
    });
    const tip = path(p), tip2 = path(Math.min(1, p + 0.02));
    if (p < 1) growthCone(tip.x, tip.y, H * 0.042, Math.atan2(tip2.y - tip.y, tip2.x - tip.x));
    soma(A.x, A.y, r, 1);
    // 碰上了：搭起突触
    if (lt > 7) {
      const k = prog(7, 0.6);
      ctx.beginPath(); ctx.arc(meet.x - H * 0.02, meet.y, H * 0.032 * k, 0, Math.PI * 2); ctx.fillStyle = "#ffd6c4"; ctx.fill(); outline(1.6); ctx.stroke();
      glow(meet.x, meet.y, H * 0.08, C.gold, 0.6 + Math.sin(time * 4) * 0.2);
      sfx("咔嗒！", meet.x, meet.y - H * 0.14, H * 0.05, "#ff9a52", -0.12, clamp((10 - lt), 0, 1));
      if (lt > 8.5) {
        const t = ((lt - 8.5) * 0.5) % 1;
        chara(lerp(meet.x - H * 0.02, meet.x + H * 0.05, t), meet.y + H * 0.1, H * 0.02, { who: "Glu", item: "letter", arms: "hold", eyes: "happy", shadow: false });
      }
    }
    callout("gr-cone", p > 0.15 && p < 1, tip.x, tip.y, tip.x - W * 0.05, H * 0.86, "生长锥：探路的小手");
    callout("gr-cue", lt > 3 && lt < 7.5, path(0.55).x, path(0.55).y - H * 0.14, W * 0.42, Anima.topSafe() + H * 0.04, "路标分子：往这边走");
    callout("gr-syn", lt > 8, meet.x - H * 0.02, meet.y, W * 0.48, H * 0.26, "新的突触");
    say("gr-a", lt > 0.8 && lt < 4.5, A.x, A.y - r, A.x + W * 0.08, A.y - H * 0.24, "我去那边找朋友！", "say");
    say("gr-b", lt > 7.6, B.x, B.y + r, B.x, B.y + H * 0.24, "找到你啦！", "shout");
    ctx.restore();
  }

  // ---------- 第 3 幕：先多后少的曲线 ----------
  const syn = (age) => age < 2.5 ? 0.3 + 0.7 * ease(age / 2.5) : 1 - 0.4 * ease((age - 3) / 18);
  function viewCurve(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbfff5", "#fdf0f4");
    Anima.petals(8, 0.5, 30);
    const top = Anima.topSafe() + H * 0.06;
    const x0 = W * 0.1, x1 = W * (N() ? 0.56 : 0.54), y0 = top + H * 0.06, y1 = H * 0.8;
    card(x0 - W * 0.04, top, x1 - x0 + W * 0.08, H * 0.93 - top, "突触数量", "#e2f5d8");
    const age = clamp((lt - 1) / 10, 0, 1) * 25;
    const X = (g) => lerp(x0, x1, g / 25), Y = (v) => lerp(y1, y0, v);
    outline(1.6); ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); ctx.lineTo(x1, y1); ctx.stroke();
    const fs = fsz(0.8);
    [[0, "出生"], [3, "3"], [12, "12"], [18, "18"], [25, "25 岁"]].forEach((q) => text(q[1], X(q[0]), y1 + fs * 0.9, fs, C.soft));
    // 青春期的底色
    ctx.fillStyle = "rgba(255,210,122,0.22)"; ctx.fillRect(X(11), y0, X(20) - X(11), y1 - y0);
    ctx.strokeStyle = C.line; ctx.lineWidth = 5; ctx.beginPath();
    for (let g = 0; g <= age; g += 0.25) { if (g) ctx.lineTo(X(g), Y(syn(g))); else ctx.moveTo(X(g), Y(syn(g))); }
    ctx.stroke(); ctx.strokeStyle = "#7cc98a"; ctx.lineWidth = 3; ctx.stroke();
    ctx.beginPath(); ctx.arc(X(age), Y(syn(age)), H * 0.013, 0, Math.PI * 2); ctx.fillStyle = C.rose; ctx.fill(); outline(1.5); ctx.stroke();
    // 右边：同一棵小树，突触跟着曲线长出来、再被剪掉
    const g = treeGeo(W * (N() ? 0.79 : 0.77), H * 0.86, H * (N() ? 0.5 : 0.56));
    const n = g.sp.length * syn(age);
    drawTree(g, (i, s) => clamp(n - s.rank, 0, 1), { mood: age > 18 ? 1 : 0 });
    const ag = Math.floor(age);
    text(age < 0.5 ? "出生" : ag + " 岁", g.x + g.h * 0.28, g.y - H * 0.02, fsz(1.1), C.rose);
    callout("cv-peak", lt > 2.4, X(2.5), Y(1), X(8), Y(0.45), "幼儿期：连接最多");
    callout("cv-prune", lt > 6.5, X(15), Y(syn(15)), X(15), y1 - H * 0.12, "青春期：大修剪");
    say("cv-busy", win(2.2, 5.5), g.x, g.y - g.h * 0.12, g.x, g.y - g.h - H * 0.03, "枝叶好多，好热闹！", "say");
    say("cv-neat", lt > 9.5, g.x, g.y - g.h * 0.12, g.x, g.y - g.h - H * 0.03, "留下常用的，更利落～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：小胶质细胞园丁按标签修剪 ----------
  function viewGarden(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6fff4", "#fff0f3");
    Anima.bokeh(6, "#d6f0d0", 0.8, 44);
    const dy = H * 0.8, top = Anima.topSafe(), n = 6, xs = [];
    for (let i = 0; i < n; i++) xs.push(W * (0.12 + i * 0.15));
    const weak = [1, 3, 5];
    // 园丁依次走到贴了标签的突触：到达、剪掉
    const arr = (k) => 5 + k * 2.1;
    const cutK = (i) => { const k = weak.indexOf(i); return k < 0 ? 0 : prog(arr(k) + 0.6, 0.8); };
    // 树突（横着的一根树枝）
    branch(W * 0.02, dy + H * 0.02, W * 0.98, dy - H * 0.01, H * 0.05, C.dend, W * 0.5, dy + H * 0.03);
    xs.forEach((x, i) => {
      const w = weak.indexOf(i) >= 0, cut = cutK(i), strong = !w && lt > 11;
      ctx.save(); ctx.globalAlpha *= 1 - cut;
      const by = dy - H * 0.14 - cut * H * 0.05, col = w ? "#ddd4d8" : "#ffd6c4";
      // 轴突从上面垂下来
      ctx.strokeStyle = C.line; ctx.lineWidth = strong ? 7 : 5; ctx.beginPath(); ctx.moveTo(x - H * 0.02, top + H * 0.02); ctx.quadraticCurveTo(x + H * 0.03, (top + by) / 2, x, by); ctx.stroke();
      ctx.strokeStyle = w ? "#e7dfe2" : "#f3a996"; ctx.lineWidth = strong ? 4.5 : 2.8; ctx.stroke();
      // 树突棘 + 末梢鼓包
      branch(x, dy - H * 0.01, x, dy - H * 0.08, H * 0.018, w ? "#e6dde0" : C.dend);
      const r = H * (strong ? 0.046 : 0.04);
      ctx.beginPath(); ctx.ellipse(x, by + H * 0.02, r, r * 0.8, 0, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(1.6); ctx.stroke();
      face(x, by + H * 0.022, r * 0.55, w ? 0 : 1);
      // 常用的突触：信号一趟趟跑下来
      if (!w) {
        const t = (time * 0.7 + i * 0.3) % 1;
        Anima.spark([[x - H * 0.02, top + H * 0.02], [x + H * 0.01, (top + by) / 2], [x, by]], t, H * 0.018, C.gold);
        if (t > 0.85) glow(x, by + H * 0.02, H * 0.06, C.gold, 0.8);
        if (strong) sparkles(x, by, H * 0.06, 2, 0.8, i);
      }
      // 补体标签
      const k = weak.indexOf(i);
      if (k >= 0) {
        const tp = prog(1.5 + k * 0.8, 1.2);
        if (tp > 0) {
          const tx = lerp(-W * 0.05, x + r * 0.9, tp), ty = lerp(H * 0.3, by + H * 0.02, tp) - Math.sin(tp * Math.PI) * H * 0.08;
          rrect(tx - H * 0.018, ty - H * 0.035, H * 0.05, H * 0.032, 4); ctx.fillStyle = C.gold; ctx.fill(); outline(1.3); ctx.stroke();
          text("C3", tx + H * 0.007, ty - H * 0.019, Math.max(9, H * 0.02), C.ink);
        }
      }
      ctx.restore();
      if (cut > 0 && cut < 1) sfx("咔嚓", x + H * 0.04, by - H * 0.03, H * 0.045, C.mintDeep, -0.15, Math.sin(cut * Math.PI));
    });
    // 园丁
    let gx = -W * 0.08;
    if (lt > 4) {
      const k = clamp(Math.floor((lt - 4) / 2.1), 0, 2), leg = clamp((lt - 4 - k * 2.1) / 1, 0, 1);
      const from = k === 0 ? -W * 0.08 : xs[weak[k - 1]] + H * 0.03, to = xs[weak[k]] + H * 0.03;
      gx = lt > 4 + 2 * 2.1 + 1 ? xs[5] + H * 0.03 : lerp(from, to, ease(leg));
      const moving = leg > 0 && leg < 1;
      chara(gx + H * 0.03, dy - H * 0.02, H * 0.042, Object.assign({}, GARD, { walk: moving ? time * 9 : null, arms: moving ? "hold" : "up", dir: -1, eyes: moving ? "open" : "happy" }));
    }
    callout("gd-tag", win(2, 8), xs[1] + H * 0.045, dy - H * 0.13, xs[1] + W * 0.1, H * 0.3, "补体：“待修剪”标签");
    callout("gd-use", lt > 10.5, xs[2], dy - H * 0.16, xs[2] - W * 0.02, H * 0.3, "常用的突触：留下，更结实");
    say("gd-say", win(5.2, 10.5), gx + H * 0.03, dy - H * 0.15, gx - W * 0.12, H * 0.42, "贴了标签的，我来收走～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：前额叶最后完工 + 髓鞘 ----------
  function brainPath(cx, cy, rx, ry) {
    ctx.beginPath();
    ctx.moveTo(cx - rx, cy + ry * 0.1);
    ctx.bezierCurveTo(cx - rx * 1.05, cy - ry * 0.9, cx - rx * 0.2, cy - ry * 1.15, cx + rx * 0.4, cy - ry * 0.95);
    ctx.bezierCurveTo(cx + rx * 1.05, cy - ry * 0.7, cx + rx * 1.1, cy + ry * 0.3, cx + rx * 0.8, cy + ry * 0.6);
    ctx.bezierCurveTo(cx + rx * 0.4, cy + ry * 0.85, cx - rx * 0.2, cy + ry * 0.75, cx - rx * 0.55, cy + ry * 0.7);
    ctx.bezierCurveTo(cx - rx * 0.9, cy + ry * 0.62, cx - rx * 0.98, cy + ry * 0.4, cx - rx, cy + ry * 0.1);
    ctx.closePath();
  }
  function viewMature(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#f3f0ff");
    const age = clamp((lt - 1) / 9, 0, 1) * 25;
    const nb = N();
    const cx = W * (nb ? 0.3 : 0.27), cy = H * 0.52, rx = W * (nb ? 0.24 : 0.2), ry = H * 0.28;
    // 从后往前完工：视觉（后）→ 运动（顶）→ 颞叶 → 前额叶（前，额头朝左）
    const R = [{ u: 0.7, v: 0.05, done: 6, col: "#bfe3f5", name: "看" }, { u: 0.15, v: -0.62, done: 10, col: "#bfe8d6", name: "动" }, { u: 0.15, v: 0.35, done: 15, col: "#ddd5fa", name: "听" }, { u: -0.65, v: -0.2, done: 24, col: "#ffd27a", name: "前额叶" }];
    // 脑干
    ctx.beginPath(); ctx.ellipse(cx + rx * 0.3, cy + ry * 0.85, rx * 0.09, ry * 0.25, 0.2, 0, Math.PI * 2); ctx.fillStyle = "#f5d3dc"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx + rx * 0.62, cy + ry * 0.62, rx * 0.26, ry * 0.2, -0.2, 0, Math.PI * 2); ctx.fillStyle = "#f7c6d3"; ctx.fill(); outline(1.5); ctx.stroke();
    brainPath(cx, cy, rx, ry); ctx.fillStyle = "#ffe6ec"; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); brainPath(cx, cy, rx, ry); ctx.clip();
    R.forEach((q) => {
      const k = clamp((age - q.done * 0.55) / (q.done * 0.45), 0, 1);
      const x = cx + q.u * rx, y = cy + q.v * ry;
      ctx.beginPath(); ctx.ellipse(x, y, rx * 0.42, ry * 0.4, 0, 0, Math.PI * 2); ctx.fillStyle = alpha(q.col, 0.25 + 0.75 * k); ctx.fill();
      if (k < 1) { ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.stroke(); ctx.restore(); }
    });
    ctx.restore();
    brainPath(cx, cy, rx, ry); outline(2); ctx.stroke();
    R.forEach((q, i) => {
      const x = cx + q.u * rx * 0.8, y = cy + q.v * ry * 0.8;
      text(q.name + (age >= q.done ? " ✓" : ""), x, y - H * 0.03, fsz(i === 3 ? 1 : 0.95), age >= q.done ? C.ink : C.soft);
      if (age >= q.done && age - q.done < 1.5) sparkles(x, y, H * 0.05, 3, 1, i);
      else if (i === 3) { chara(x, y + ry * 0.3, H * 0.024, { who: "neuron", hat: "helmet", hatColor: "#ffcf6e", arms: "carry", item: "book", eyes: "open", shadow: false }); }
    });
    text("年龄 " + Math.floor(age) + " 岁", cx, cy + ry * 1.2 + fsz(0.6), fsz(1.05), C.rose);
    // 右边：少突胶质细胞给轴突包髓鞘，信号越跑越快
    const ax0 = W * (nb ? 0.58 : 0.55), ax1 = W * 0.95, ay = H * 0.66;
    const my = clamp(age / 22, 0, 1), nSeg = 5;
    branch(ax0, ay, ax1, ay, H * 0.02, "#f3a996");
    const segW = (ax1 - ax0) / nSeg;
    for (let k = 0; k < nSeg; k++) {
      const kk = clamp(my * nSeg - k, 0, 1);
      if (kk <= 0) continue;
      const sx = ax0 + segW * (k + 0.1), sw = segW * 0.8 * kk;
      rrect(sx, ay - H * 0.028, sw, H * 0.056, H * 0.028); ctx.fillStyle = C.myelin; ctx.fill(); outline(1.4); ctx.stroke();
      for (let j = 1; j < 4; j++) { const lx = sx + sw * j / 4; ctx.beginPath(); ctx.moveTo(lx, ay - H * 0.024); ctx.lineTo(lx, ay + H * 0.024); ctx.strokeStyle = alpha("#e7a23a", 0.5); ctx.lineWidth = 1.2; ctx.stroke(); }
    }
    // 少突胶质细胞：伸出手臂抱住轴突
    const ox = (ax0 + ax1) / 2, oy = ay - H * 0.2;
    for (let k = 0; k < 3; k++) { const tx = ax0 + segW * (k * 2 + 0.5); ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.quadraticCurveTo((ox + tx) / 2, oy + H * 0.02, tx, ay - H * 0.03); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(ox, oy, H * 0.045, 0, Math.PI * 2); ctx.fillStyle = "#fff3c4"; ctx.fill(); outline(1.6); ctx.stroke();
    face(ox, oy + H * 0.004, H * 0.025, 1);
    // 信号：没包的时候慢慢挪，包好了就一段段跳
    const speed = 0.18 + my * 0.7, t = (time * speed) % 1;
    const tt = my > 0.7 ? (Math.floor(t * nSeg) + ease((t * nSeg) % 1)) / nSeg : t;
    const sx = lerp(ax0, ax1, tt);
    glow(sx, ay, H * 0.05, C.gold, 1); Anima.bolt(sx, ay, H * 0.03, 1);
    text(my > 0.7 ? "⚡ 跳着跑，快！" : "⚡ 慢慢走…", (ax0 + ax1) / 2, ay + H * 0.1, fsz(0.95), my > 0.7 ? "#c88600" : C.soft);
    callout("mt-pfc", lt > 3, cx - rx * 0.85, cy - ry * 0.45, cx - rx * 0.4, Anima.topSafe() + H * 0.06, "前额叶：最后完工");
    callout("mt-my", lt > 5, ax0 + segW * 0.5, ay - H * 0.02, ax0 + segW * 0.9, H * 0.86, "髓鞘：一圈圈绝缘层");
    callout("mt-ol", win(1.5, 5), ox + H * 0.04, oy, ox + W * 0.02, Anima.topSafe() + H * 0.05, "少突胶质细胞");
    ctx.restore();
  }

  // ---------- 第 6 幕：神经发育假说 ----------
  function viewHypo(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f3", "#f1effc");
    const nb = N(), top = Anima.topSafe() + H * 0.02;
    // 时间条：孕期 → 童年 → 青春期 → 成年早期
    const tx0 = W * 0.08, tx1 = W * 0.92, ty = top + H * 0.05;
    const ph = clamp((lt - 0.5) / 11, 0, 1);
    rrect(tx0, ty - H * 0.012, tx1 - tx0, H * 0.024, H * 0.012); ctx.fillStyle = "#f3e8f0"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(tx0, ty - H * 0.012, (tx1 - tx0) * ph, H * 0.024, H * 0.012); ctx.fillStyle = "#c9b6e8"; ctx.fill();
    ["孕期", "童年", "青春期", "成年早期"].forEach((s, i) => text(s, lerp(tx0, tx1, (i + 0.5) / 4), ty + H * 0.05, fsz(0.82), C.ink));
    if (ph > 0.8) { const fx = lerp(tx0, tx1, 0.82); text("▼", fx, ty - H * 0.035, fsz(0.9), C.rose); }
    // 两棵树：一般的修剪 vs 修剪走偏
    const th = H * (nb ? 0.38 : 0.42), gy = H * 0.83;
    const L = treeGeo(W * 0.27, gy, th), Rt = treeGeo(W * 0.7, gy, th);
    const grow = clamp(ph / 0.35, 0, 1), prune = clamp((ph - 0.45) / 0.35, 0, 1);
    const nL = L.sp.length * lerp(0.35, 1, grow) * (1 - 0.35 * prune), nR = Rt.sp.length * lerp(0.35, 0.92, grow) * (1 - 0.7 * prune);
    drawTree(L, (i, s) => clamp(nL - s.rank, 0, 1), { mood: 1 });
    drawTree(Rt, (i, s) => clamp(nR - s.rank, 0, 1), { mood: prune > 0.6 ? -1 : 0, col: "#f0c2b4" });
    text("一般的修剪", L.x, gy + th * 0.12 + H * 0.04, fsz(0.85), C.ink);
    text("修剪走偏", Rt.x, gy + th * 0.12 + H * 0.04, fsz(0.85), C.ink);
    // 早年：两张“伏笔”卡片落在右边这棵树的根上
    ["易感基因", "早期环境"].forEach((s, i) => {
      const p = prog(1 + i * 1.2, 1.5), x = Rt.x + (i ? 1 : -1) * W * 0.14, y = lerp(top + H * 0.2, gy + H * 0.04, p);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= clamp(p * 3, 0, 1) * (1 - prog(9, 1.5));
      const fs = fsz(0.8); ctx.font = `${fs}px ${Anima.ROUND}`; const w = ctx.measureText(s).width + fs * 1.2;
      rrect(x - w / 2, y - fs * 0.8, w, fs * 1.6, fs * 0.8); ctx.fillStyle = i ? "#ffe0ea" : "#e4e0ff"; ctx.fill(); outline(1.4); ctx.stroke();
      text(s, x, y + 1, fs, C.ink);
      ctx.restore();
    });
    // 青春期：两位园丁，右边这位剪过了头
    if (prune > 0 && prune < 1) {
      const bob = Math.sin(time * 6) * H * 0.01;
      chara(L.x + th * 0.42, gy, H * 0.03, Object.assign({}, GARD, { arms: "up", eyes: "happy", dir: -1, tag: null }));
      chara(Rt.x + th * 0.42, gy + bob * 0.2, H * 0.03, Object.assign({}, GARD, { arms: "up", eyes: "dizzy", mouth: "wavy", dir: -1, tag: null }));
      emote("sweat", Rt.x + th * 0.42 + H * 0.03, gy - H * 0.1, H * 0.025);
    }
    if (prune >= 1) glow(Rt.x, gy - th * 0.6, th * 0.5, "#c4bcc0", 0.35);
    callout("hy-pfc", lt > 9.5, Rt.x + th * 0.25, gy - th * 0.7, Rt.x + W * 0.14, gy - th * 0.35, "前额叶连接变少");
    say("hy-g", win(6.5, 9.5), Rt.x + th * 0.42, gy - H * 0.1, Rt.x - W * 0.12, top + H * 0.22, "咦，我是不是剪太多了？", "think");
    say("hy-on", lt > 10, lerp(tx0, tx1, 0.82), ty + H * 0.02, lerp(tx0, tx1, 0.8), ty + H * 0.13, "常在这时起病", "box");
    ctx.restore();
  }

  // ---------- 第 7 幕：给大脑搭把手 ----------
  function leafShape(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y);
    ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, s * 0.6); ctx.stroke();
    for (let k = -3; k <= 3; k++) {
      ctx.save(); ctx.rotate(k * 0.42); const L = s * (1 - Math.abs(k) * 0.18);
      ctx.beginPath(); ctx.ellipse(0, -L / 2, s * 0.1, L / 2, 0, 0, Math.PI * 2); ctx.fillStyle = C.leaf; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
  }
  function moon(x, y, R) {
    const d = R * 0.6, R2 = R * 0.85, a = (R * R - R2 * R2 + d * d) / (2 * d), h = Math.sqrt(R * R - a * a);
    const ux = Math.cos(-0.6), uy = Math.sin(-0.6), p1 = [a * ux - h * uy, a * uy + h * ux], p2 = [a * ux + h * uy, a * uy - h * ux];
    const cx2 = d * ux, cy2 = d * uy;
    ctx.beginPath();
    ctx.arc(x, y, R, Math.atan2(p1[1], p1[0]), Math.atan2(p2[1], p2[0]));
    ctx.arc(x + cx2, y + cy2, R2, Math.atan2(p2[1] - cy2, p2[0] - cx2), Math.atan2(p1[1] - cy2, p1[0] - cx2), true);
    ctx.closePath(); ctx.fillStyle = "#fff4c4"; ctx.fill(); outline(1.4); ctx.stroke();
  }
  function viewHelp(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const night = 1 - prog(4.5, 1.5);
    Anima.wash(mix("#fff8ee", "#b8b6e6", night * prog(0, 1.2)), mix("#fdeef3", "#e2dcf7", night));
    const nb = N(), gy = H * 0.88, th = H * 0.5;
    const g = treeGeo(W * 0.5, gy, th);
    // 第一件：睡觉时园丁安静整理，树突棘闪闪发亮
    const sleepK = prog(0.5, 1) * night;
    const droop = lt > 10 ? 1 - prog(10.3, 1.5) : prog(8, 1);
    const sick = (s) => droop > 0.3 && s.x > g.x + th * 0.05;
    drawTree(g, (i, s) => (s.rank < 24 ? 1 : 0) * (sick(s) ? 1 - droop * 0.5 : 1), { mood: droop > 0.5 ? -1 : 1, glow: sleepK > 0.4, wilt: sick });
    if (sleepK > 0.1) {
      const mx = W * 0.2, my = Anima.topSafe() + H * 0.1;
      ctx.save(); ctx.globalAlpha *= sleepK;
      glow(mx, my, H * 0.1, "#fff6c2", 1);
      moon(mx, my, H * 0.05);
      emote("zzz", g.x - th * 0.3, gy - th * 1.02, H * 0.035);
      sparkles(g.x, gy - th * 0.55, th * 0.45, 5, 1, Math.floor(time));
      chara(g.x - th * 0.5, gy, H * 0.03, Object.assign({}, GARD, { arms: "hold", eyes: "happy", item: "broom", tag: null }));
      ctx.restore();
    }
    // 第二件：青春期挡住大麻
    const cp = prog(4.8, 1.6), bounce = prog(6.6, 1);
    if (lt > 4.5 && lt < 12) {
      const lx = lerp(W * 1.05, g.x + th * 0.62, cp) + bounce * W * 0.3, ly = gy - th * 0.62 - Math.sin(bounce * Math.PI) * H * 0.1;
      leafShape(lx, ly, H * 0.1, 1 - bounce * 0.7);
      if (bounce > 0.05) { text("✕", lx, ly - H * 0.02, fsz(1.8), C.bad); }
      chara(g.x + th * 0.52, gy, H * 0.036, { who: "neuron", item: "shield", arms: "hold", eyes: bounce > 0 ? "happy" : "angry", mouth: bounce > 0 ? "grin" : "flat", dir: 1, tag: "青少年" });
      if (bounce > 0 && bounce < 1) sfx("挡！", lx - H * 0.05, ly - H * 0.08, H * 0.05, C.mintDeep, -0.1, Math.sin(bounce * Math.PI));
    }
    // 第三件：及早求助，耷拉的树枝重新挺起来
    if (lt > 8.5) {
      const hp = prog(8.5, 1.5);
      chara(lerp(-W * 0.05, g.x - th * 0.55, hp), gy, H * 0.038, { who: "neuron", hair: "#7a8ba6", cloth: "#ffffff", hat: "none", item: "lamp", arms: "hold", walk: hp < 1 ? time * 9 : null, eyes: "happy", tag: "医生" });
      const lx = lerp(-W * 0.05, g.x - th * 0.55, hp), ly = gy - H * 0.06;
      if (hp >= 1) { ctx.save(); ctx.globalAlpha *= 0.35 * prog(10, 0.6); ctx.fillStyle = "#fff1b8"; ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(g.x + th * 0.45, gy - th * 0.95); ctx.lineTo(g.x + th * 0.45, gy - th * 0.35); ctx.closePath(); ctx.fill(); ctx.restore(); }
      if (lt > 11) sparkles(g.x + th * 0.3, gy - th * 0.6, th * 0.3, 4, 1, 3);
    }
    callout("hp-sleep", win(1, 4.8), g.x + th * 0.2, gy - th * 0.7, W * (nb ? 0.8 : 0.78), Anima.topSafe() + H * 0.08, "睡眠：整理连接的时间");
    say("hp-can", win(6.2, 9), g.x + th * 0.52, gy - H * 0.12, W * 0.8, H * 0.32, "青春期，大麻离远点！", "shout");
    callout("hp-ref", win(6.5, 10.5), g.x + th * 0.6, gy - H * 0.1, W * 0.84, H * 0.72, "见《倒着送的信》");
    say("hp-help", lt > 10, g.x - th * 0.55, gy - H * 0.12, W * 0.2, H * 0.44, "有变化，早点来找我们～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.mintDeep, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  const VIEWS = [viewMigrate, viewGrow, viewCurve, viewGarden, viewMature, viewHypo, viewHelp];
  function draw() {
    ctx.fillStyle = "#fff8f2"; ctx.fillRect(0, 0, W, H);
    VIEWS.forEach((f, i) => { if (S["v" + i] > 0.02) f(S["v" + i]); });
    hud();
  }

  return {
    chapters: CH, state: S, dur: 14, accent: "#7cc98a",
    titleCard: { lines: ["长大的大脑：", "突触修剪"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
