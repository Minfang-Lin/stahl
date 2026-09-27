// 脑内小剧场 · 3:4 宣传片（1080×1440，约 43 秒）
// 五段：片头提问 → 角色登场 → 六个机制片段（直接借真实的小剧场画面）→ 上线内容 → 结尾
// 预览：用浏览器打开 promo/index.html；导出：node tools/promo.js
(function () {
  "use strict";
  const A = window.Anima, C = A.C, ROUND = A.ROUND, SANS = A.SANS;
  const VW = 1080, VH = 1440, FPS = 30;
  const pv = document.getElementById("pv");
  const g = pv.getContext("2d");
  const cv = document.getElementById("cv");
  const STAGE = { x: 40, y: 150, w: 1000, h: 820 }; // 引擎 3:4 录制布局里舞台所在的位置

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ease = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
  const back = (t) => { t = clamp(t, 0, 1); const c = 1.7; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };

  function img(src) { const i = new Image(); i.src = src; return i; }
  const IM = {
    mascot: img("../assets/icon/mascot.svg"), icon: img("../assets/icon/icon-512.png"),
    brain: img("shots/brain.png"), book: img("shots/book.png"), cast: img("shots/cast.png"),
  };

  // 引擎的画笔（花瓣、角色、表情）画在这块透明图层上，再贴到宣传片画布
  const fx = document.createElement("canvas"); fx.width = VW; fx.height = VH;
  function layer(fn, t) { A.portrait(fx, fn, t); g.drawImage(fx, 0, 0); }

  // 背景只画一次
  const bgc = document.createElement("canvas"); bgc.width = VW; bgc.height = VH;
  (function () {
    const b = bgc.getContext("2d");
    const gr = b.createLinearGradient(0, 0, 0, VH);
    gr.addColorStop(0, "#fff7f1"); gr.addColorStop(1, "#fbeaf1");
    b.fillStyle = gr; b.fillRect(0, 0, VW, VH);
    b.fillStyle = "rgba(242,140,165,0.13)";
    for (let y = 11; y < VH; y += 22) for (let x = 11 + (y % 44 ? 11 : 0); x < VW; x += 22) { b.beginPath(); b.arc(x, y, 1.8, 0, Math.PI * 2); b.fill(); }
  })();

  function rr(x, y, w, h, r) { g.beginPath(); g.roundRect(x, y, w, h, r); }
  function txt(s, x, y, fs, color, o) {
    o = o || {};
    g.save();
    if (o.alpha != null) g.globalAlpha *= clamp(o.alpha, 0, 1);
    g.font = `${o.bold ? "700 " : ""}${fs}px ${o.font || ROUND}`;
    g.textAlign = o.align || "center"; g.textBaseline = "middle";
    if (o.stroke) { g.lineJoin = "round"; g.strokeStyle = o.stroke; g.lineWidth = o.sw || fs * 0.2; g.strokeText(s, x, y); }
    g.fillStyle = color; g.fillText(s, x, y);
    g.restore();
  }
  function card(x, y, w, h, r, fill) {
    g.save(); g.shadowColor = "rgba(150,100,120,0.25)"; g.shadowBlur = 30; g.shadowOffsetY = 10;
    g.fillStyle = fill || "#fff"; rr(x, y, w, h, r); g.fill(); g.restore();
    g.strokeStyle = C.line; g.lineWidth = 4; rr(x, y, w, h, r); g.stroke();
  }
  function pill(s, x, y, fs, fill, color, a) {
    g.save(); g.globalAlpha *= a == null ? 1 : clamp(a, 0, 1);
    g.font = `${fs}px ${ROUND}`;
    const w = g.measureText(s).width + fs * 1.3, h = fs * 1.75;
    rr(x - w / 2, y - h / 2, w, h, h / 2); g.fillStyle = fill; g.fill();
    g.strokeStyle = C.line; g.lineWidth = 3.5; g.stroke();
    g.restore();
    txt(s, x, y + 2, fs, color, { alpha: a });
    return w;
  }
  // 以 (x, y) 为中心、按比例 k 缩放着画
  function scaled(x, y, k, fn) { g.save(); g.translate(x, y); g.scale(k, k); g.translate(-x, -y); fn(); g.restore(); }
  const castName = (k) => (k === "drug" ? "药物访客" : A.CAST[k].name.replace(/（.*）/, ""));

  // ---------- 1. 片头：满屏术语，看得头大 ----------
  const JARGON = [
    ["5-HT2A", 150, 690, -0.12], ["D2 受体", 900, 700, 0.1], ["GABA-A", 120, 1010, 0.08], ["CYP2D6", 930, 980, -0.1],
    ["NMDA", 250, 1250, -0.06], ["HPA 轴", 830, 1260, 0.12], ["α2δ", 520, 1330, 0.04], ["部分激动剂", 540, 640, -0.04],
    ["SERT", 90, 850, 0.14], ["H1", 990, 840, -0.14],
  ];
  const JCOL = [C.sakura, C.sky, C.mint, C.lemon, C.lav, C.peach];
  function segHook(t) {
    g.drawImage(bgc, 0, 0);
    txt("《Stahl 精神药理学精要》", 540, 180, 50, C.soft, { alpha: ease((t - 0.2) / 0.4) });
    txt("受体、通路、机制图……", 540, 280, 68, C.ink, { alpha: ease((t - 0.6) / 0.4) });
    const k = back((t - 1.2) / 0.45);
    if (k > 0) {
      const shake = t > 1.7 && t < 2.3 ? Math.sin(t * 60) * 6 : 0;
      scaled(540, 440, k, () => txt("看得头大？", 540 + shake, 440, 150, C.rose, { stroke: "#fff", sw: 26 }));
    }
    JARGON.forEach((j, i) => {
      const a = back((t - 0.5 - i * 0.12) / 0.35);
      if (a <= 0) return;
      const y = j[2] + Math.sin(t * 2 + i) * 10;
      g.save(); g.translate(j[1], y); g.rotate(j[3] + Math.sin(t * 1.5 + i) * 0.04); g.scale(a, a);
      pill(j[0], 0, 0, 40, JCOL[i % JCOL.length], C.ink);
      g.restore();
    });
    // 大脑小人：先弹出来，再冒汗、打问号
    const m = back((t - 0.1) / 0.5);
    if (m > 0) {
      const w = 600, h = w * 580 / 860, bob = Math.sin(t * 3) * 8;
      scaled(540, 1000, m, () => g.drawImage(IM.mascot, 540 - w / 2, 1000 - h / 2 + bob, w, h));
    }
    layer(() => {
      A.emote("?", 800, 790, 44, ease((t - 1.6) / 0.3));
      A.emote("?", 300, 800, 36, ease((t - 1.9) / 0.3));
      A.emote("sweat", 760, 880, 30, ease((t - 2.2) / 0.3));
    }, t);
  }

  // ---------- 2. 角色登场 ----------
  const CASTS = ["DA", "5HT", "NE", "GABA", "Glu", "ACh", "pump", "MAO", "AChE", "drug"];
  const POSES = [["wave", "sparkle", "grin"], ["hold", "happy", "smile"], ["point", "open", "open"], ["shh", "closed", "o"], ["fist", "open", "grin"]];
  function segCast(t) {
    g.drawImage(bgc, 0, 0);
    txt("别担心～", 540, 150, 60, C.soft, { alpha: ease(t / 0.3) });
    txt("我们把它拍成了", 540, 250, 72, C.ink, { alpha: ease((t - 0.25) / 0.3) });
    const k = back((t - 0.6) / 0.45);
    if (k > 0) scaled(540, 385, k, () => txt("日系治愈小剧场", 540, 385, 116, C.rose, { stroke: "#fff", sw: 24 }));
    layer(() => {
      A.glow(540, 1000, 520, "#ffffff", 0.7);
      CASTS.forEach((key, i) => {
        const row = i < 5 ? 0 : 1, col = i % 5;
        const x = 136 + col * 202, y = row ? 1180 : 840;
        const p = clamp((t - 0.5 - i * 0.12) / 0.4, 0, 1);
        if (p <= 0) return;
        const jump = Math.sin(p * Math.PI) * 0.6 + (p >= 1 ? Math.abs(Math.sin(t * 3 + i)) * 0.08 : 0);
        const pose = POSES[i % POSES.length];
        A.chara(x, y, 58, { who: key, arms: pose[0], eyes: pose[1], mouth: pose[2], jump, seed: i, alpha: ease(p * 2), label: key === "drug" ? "药" : undefined });
      });
    }, t);
    CASTS.forEach((key, i) => {
      const row = i < 5 ? 0 : 1, col = i % 5;
      const p = ease((t - 0.8 - i * 0.12) / 0.3);
      if (p > 0) pill(castName(key), 136 + col * 202, (row ? 1180 : 840) + 52, 27, "#fff", C.ink, p);
    });
    txt("递质是快递员 · 受体是带锁的门 · 药物是来访的客人", 540, 1370, 34, C.soft, { font: SANS, alpha: ease((t - 1.6) / 0.4) });
  }

  // ---------- 3. 机制片段：直接播放真实的小剧场 ----------
  const CLIPS = [
    { id: "synapse", ch: 2, at: 0.6, q: "神经递质是怎么送信的？" },
    { id: "antidepressants", ch: 0, at: 1.5, q: "SSRI 到底堵住了什么？" },
    { id: "gaba-system", ch: 2, at: 1.5, q: "GABA 为什么是大脑的刹车？" },
    { id: "ketamine", ch: 2, at: 1.0, q: "氯胺酮为什么起效这么快？" },
    { id: "histamine", ch: 2, at: 1.5, q: "有的抗过敏药为什么让人犯困？" },
    { id: "addiction", ch: 1, at: 3.0, q: "成瘾时，多巴胺发生了什么？" },
  ];
  const titleOf = {};
  A.episodes().forEach((e) => { titleOf[e.id] = e.title; });
  function startClip(c) {
    A.play(c.id);
    const b = document.getElementById("ch" + c.ch);
    if (b) b.click();
    for (let i = 0; i < Math.round(c.at * FPS); i++) window.__rec.tick(1 / FPS);
  }
  function segClip(ci) {
    const c = CLIPS[ci];
    return function (t, dt) {
      window.__rec.tick(dt);
      g.drawImage(bgc, 0, 0);
      pill(`机制小剧场 ${ci + 1} / ${CLIPS.length}`, 540, 105, 34, C.rose, "#fff", ease(t / 0.25));
      const qk = back(t / 0.4);
      scaled(540, 210, 0.85 + 0.15 * qk, () => txt(c.q, 540, 210, 66, C.ink, { alpha: ease(t / 0.3), stroke: "#fff", sw: 14 }));
      const sk = 0.94 + 0.06 * ease(t / 0.35);
      scaled(540, 710, sk, () => {
        card(40, 300, 1000, 820, 36);
        g.save(); rr(40, 300, 1000, 820, 36); g.clip();
        g.drawImage(cv, STAGE.x, STAGE.y, STAGE.w, STAGE.h, 40, 300, 1000, 820);
        g.restore();
        g.strokeStyle = C.line; g.lineWidth = 4; rr(40, 300, 1000, 820, 36); g.stroke();
      });
      txt(`出自《${titleOf[c.id] || c.id}》`, 540, 1200, 40, C.soft, { alpha: ease((t - 0.3) / 0.3) });
      for (let i = 0; i < CLIPS.length; i++) {
        const x = 540 + (i - (CLIPS.length - 1) / 2) * 44;
        g.beginPath(); g.arc(x, 1290, i === ci ? 12 : 8, 0, Math.PI * 2);
        g.fillStyle = i === ci ? C.rose : i < ci ? "#f6b9c8" : "#eadde2"; g.fill();
      }
      txt("看画面，就懂机制", 540, 1370, 34, C.soft, { font: SANS });
    };
  }

  // ---------- 4. 上线内容 ----------
  const SHOTS = [["brain", "按脑区找", 0], ["book", "按章节学", 110], ["cast", "角色图鉴", 110]];
  function segStats(t) {
    g.drawImage(bgc, 0, 0);
    txt("现在已经上线", 540, 110, 52, C.soft, { alpha: ease(t / 0.3) });
    const n = Math.round(86 * ease((t - 0.2) / 1.0));
    g.font = `230px ${ROUND}`; const nw = g.measureText(String(n)).width;
    g.font = `84px ${ROUND}`; const uw = g.measureText("集").width;
    const x0 = 540 - (nw + 16 + uw) / 2;
    txt(String(n), x0, 270, 230, C.rose, { align: "left", stroke: "#fff", sw: 30, alpha: ease((t - 0.1) / 0.3) });
    txt("集", x0 + nw + 16, 305, 84, C.ink, { align: "left", alpha: ease((t - 0.1) / 0.3) });
    txt("覆盖原书 13 章 · 77 个小节", 540, 440, 50, C.ink, { alpha: ease((t - 1.0) / 0.4) });

    // 手机里轮流展示展厅的三个标签页
    const per = 5.8 / SHOTS.length;
    const idx = Math.min(SHOTS.length - 1, Math.floor(t / per));
    const pk = back((t - 0.5) / 0.5);
    if (pk > 0) scaled(540, 900, 0.8 + 0.2 * pk, () => {
      card(325, 530, 430, 740, 60, "#6d5760");
      g.save(); rr(343, 548, 394, 704, 44); g.clip();
      g.fillStyle = "#fff7f1"; g.fillRect(343, 548, 394, 704);
      for (let i = 0; i <= idx; i++) {
        const im = IM[SHOTS[i][0]];
        const a = i === idx ? ease((t - i * per) / 0.3) : 1;
        if (!im.naturalWidth) continue;
        g.globalAlpha = a;
        const sy = SHOTS[i][2], sh = 704 / 394 * im.naturalWidth;
        g.drawImage(im, 0, sy, im.naturalWidth, sh, 343, 548, 394, 704);
      }
      g.restore();
      rr(480, 562, 120, 22, 11); g.fillStyle = "#6d5760"; g.fill();
    });
    SHOTS.forEach((s, i) => {
      const x = 540 + (i - 1) * 290, on = i === idx;
      pill(s[1], x, 1350, 44, on ? C.rose : "#fff", on ? "#fff" : C.ink, ease((t - 0.8 - i * 0.12) / 0.3));
    });
    layer(() => { A.sparkles(540, 900, 330, 7, ease((t - 0.8) / 0.4), 11); }, t);
  }

  // ---------- 5. 结尾 ----------
  function segEnd(t) {
    g.drawImage(bgc, 0, 0);
    layer(() => { A.glow(540, 400, 330, "#ffffff", 0.9); A.sparkles(540, 400, 270, 8, ease(t / 0.5), 3); }, t);
    const k = back(t / 0.5);
    if (k > 0 && IM.icon.naturalWidth) {
      g.save(); g.translate(540, 400); g.rotate(Math.sin(t * 2.2) * 0.04); g.scale(k, k);
      g.save(); g.shadowColor = "rgba(150,100,120,0.3)"; g.shadowBlur = 36; g.shadowOffsetY = 12;
      rr(-190, -190, 380, 380, 86); g.fillStyle = "#fff"; g.fill(); g.restore();
      g.save(); rr(-190, -190, 380, 380, 86); g.clip(); g.drawImage(IM.icon, -190, -190, 380, 380); g.restore();
      g.strokeStyle = C.line; g.lineWidth = 5; rr(-190, -190, 380, 380, 86); g.stroke();
      g.restore();
    }
    txt("脑内小剧场", 540, 720, 120, C.ink, { stroke: "#fff", sw: 22, alpha: ease((t - 0.4) / 0.4) });
    txt("Stahl 精神药理学图解", 540, 835, 58, C.rose, { alpha: ease((t - 0.7) / 0.4) });
    const pk = back((t - 1.2) / 0.4);
    if (pk > 0) scaled(540, 960, pk, () => pill("小红书小工具 · 已上线", 540, 960, 54, C.rose, "#fff"));
    txt("86 集治愈系动画，点开就能看", 540, 1075, 44, C.ink, { font: SANS, alpha: ease((t - 1.7) / 0.4) });
    layer(() => {
      ["DA", "5HT", "GABA", "NE", "drug"].forEach((key, i) => {
        const p = clamp((t - 1.9 - i * 0.1) / 0.4, 0, 1);
        if (p <= 0) return;
        A.chara(260 + i * 140, 1305, 40, { who: key, arms: "wave", eyes: "happy", mouth: "grin", jump: Math.sin(p * Math.PI) * 0.5, seed: i, alpha: ease(p * 2), label: key === "drug" ? "药" : undefined });
      });
    }, t);
    txt("科普示意动画，不能替代医生的诊断和用药建议 · 与原书作者和出版社无关", 540, 1400, 24, C.soft, { font: SANS });
  }

  // ---------- 时间线 ----------
  const SEGS = [{ dur: 4.6, draw: segHook }, { dur: 4.4, draw: segCast }];
  CLIPS.forEach((c, i) => SEGS.push({ dur: 3.8, start: () => startClip(c), draw: segClip(i) }));
  SEGS.push({ dur: 5.8, draw: segStats }, { dur: 6.2, draw: segEnd });
  let acc = 0;
  SEGS.forEach((s) => { s.t0 = acc; acc += s.dur; });
  const TOTAL = acc;

  let T = 0, si = -1;
  function frame(dt) {
    if (T >= TOTAL) { T = 0; si = -1; }
    let i = 0;
    while (i < SEGS.length - 1 && T >= SEGS[i + 1].t0) i++;
    const s = SEGS[i];
    if (i !== si) { si = i; if (s.start) s.start(); }
    const t = T - s.t0;
    s.draw(t, dt);
    layer(() => A.petals(16, 0.9, 70), T); // 一直飘着的花瓣
    // 段落之间：淡淡地闪一下
    const edge = Math.min(i > 0 ? t / 0.3 : 1, i < SEGS.length - 1 ? (s.dur - t) / 0.2 : 1);
    if (edge < 1) {
      g.fillStyle = `rgba(255,247,241,${(1 - clamp(edge, 0, 1)).toFixed(3)})`; g.fillRect(0, 0, VW, VH);
    }
    T += dt;
  }

  const imgs = Object.keys(IM).map((k) => (IM[k].decode ? IM[k].decode().catch(() => 0) : 0));
  const ready = Promise.all(imgs.concat([
    document.fonts.load(`40px "ZCOOL KuaiLe"`).catch(() => 0),
    document.fonts.load(`40px "Noto Sans SC"`, "科普").catch(() => 0),
  ])).then(() => document.fonts.ready);

  window.__promo = { total: TOTAL, fps: FPS, ready, tick: () => frame(1 / FPS), seek(to) { T = 0; si = -1; while (T < to - 1e-6) frame(1 / FPS); } };

  if (!window.__PROMO_REC) {
    ready.then(() => {
      let last = performance.now();
      const loop = (now) => { frame(Math.min(0.05, (now - last) / 1000)); last = now; requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
    });
  }
})();
