Anima.register("acetylcholine-system", {
    "title": "乙酰胆碱：记忆邮差的一生",
    "tag": "痴呆",
    "headline": "记忆邮差【乙酰胆碱】的一生",
    "lede": "乙酰胆碱在神经末梢里现做现用：胆碱和乙酰辅酶 A 被接在一起，装进囊泡，送完信几乎立刻被剪刀手剪开，剪下的胆碱再被接回家重新做。跟着它走一圈，再看看基底前脑的邮差线，就明白胆碱酯酶抑制剂和抗胆碱药为什么一个帮忙、一个添乱。",
    "summary": "胆碱乙酰转移酶合成、VAChT 装囊泡、乙酰胆碱酯酶在间隙里快速分解、胆碱转运体回收原料、烟碱型和毒蕈碱型受体、基底前脑到皮层和海马的投射，以及胆碱酯酶抑制剂和抗胆碱药。",
    "chapter": "对应 Stahl《精神药理学精要》第 12 章 · 乙酰胆碱系统",
    "footer": "老人同时吃好几种药、最近变得更健忘或糊涂时，可以请医生或药师查查有没有抗胆碱作用的药。",
    "canvasLabel": "乙酰胆碱在神经末梢里被制造、装进囊泡、释放后被剪刀手剪开、胆碱被回收，以及基底前脑把乙酰胆碱送到皮层和海马的动画",
    "regions": ["hippo", "pfc"],
    "parts": ["dementia"],
    "cast": ["ACh", "AChE", "pump", "drug"],
    "color": "#f29cc0"
  }, () => {
  const CH = [
    { title: "现做的乙酰胆碱", v0: 1, v1: 0, v2: 0,
      pill: ["原料", "胆碱 + 乙酰"], pill2: ["囊泡", "0 位"],
      text: "乙酰胆碱（ACh）是在神经末梢里现做的。原料有两样：胆碱，主要来自食物，经血液运来，再被末梢收进去；乙酰辅酶 A，由末梢里的线粒体做出来。一位叫胆碱乙酰转移酶的工人把两者接在一起，乙酰胆碱就诞生了。接着，囊泡上的 VAChT 把它们一个个装进囊泡，等着出发。",
      fact: "胆碱 + 乙酰辅酶 A → 胆碱乙酰转移酶 → 乙酰胆碱，再由 VAChT 装进囊泡" },
    { title: "送信，然后被剪断", v0: 1, v1: 0, v2: 0,
      pill: ["释放", "出发"], pill2: ["剪刀手", "待命"],
      text: "电信号一到，囊泡和膜融合，乙酰胆碱涌进突触间隙，去敲对面的门。可间隙里守着乙酰胆碱酯酶（AChE），它是出了名的快剪刀，乙酰胆碱一靠近，就被剪成胆碱和乙酸两半。所以乙酰胆碱的信号来得快，停得也快。另一种丁酰胆碱酯酶也能分解它，大多在血液和胶质细胞里。",
      fact: "乙酰胆碱主要在突触间隙里被乙酰胆碱酯酶迅速分解成胆碱和乙酸" },
    { title: "回收原料，不回收递质", v0: 1, v1: 0, v2: 0,
      pill: ["回收", "胆碱"], pill2: ["乙酸", "漂走"],
      text: "多巴胺、5-HT 送完信，会被转运体整个拉回末梢。乙酰胆碱不一样：它已经被剪开了，被接回家的是剪下来的胆碱。末梢膜上的胆碱转运体把胆碱一个个拉进来，交给胆碱乙酰转移酶，配上新的乙酰辅酶 A，又做成新的乙酰胆碱，乙酸则漂走了。回收的是原料，不是递质本身。",
      fact: "胆碱转运体回收的是胆碱这个原料，而不是完整的乙酰胆碱" },
    { title: "两类门，好几把锁", v0: 0, v1: 1, v2: 0,
      pill: ["烟碱型", "离子通道"], pill2: ["毒蕈碱型", "M1～M5"],
      text: "乙酰胆碱的门分两大类。烟碱型受体本身就是离子通道，由五个亚基围成一圈，钥匙一插就开，大脑里常见的有 α7 和 α4β2 两种。毒蕈碱型受体一共五种，M1 到 M5，都是 G 蛋白偶联受体，开门后交给 G 蛋白慢慢往下传。其中 M1 在皮层和海马里很多，和学习、记忆关系密切。",
      fact: "烟碱型（如 α7、α4β2）是离子通道；毒蕈碱型 M1～M5 是 G 蛋白偶联受体" },
    { title: "基底前脑的邮差线", v0: 0, v1: 0, v2: 1,
      pill: ["总站", "基底前脑"], pill2: ["送往", "皮层、海马"],
      text: "大脑里一群重要的乙酰胆碱神经元住在基底前脑，其中一大群聚成 Meynert 基底核，把长长的轴突铺向整个大脑皮层；旁边内侧隔区的一群，则主要通往海马。乙酰胆碱沿着这些线路送到，皮层神经元对重要的信号更敏感，我们才能集中注意，把新东西记进海马。",
      fact: "基底前脑的胆碱能神经元投射到皮层和海马，帮助注意和记忆" },
    { title: "邮差变少以后", v0: 1, v1: 0, v2: 0,
      pill: ["乙酰胆碱", "变少"], pill2: ["剪刀手", "被按住"],
      text: "在阿尔茨海默病里，基底前脑的这些邮差一个个减少，皮层和海马收到的乙酰胆碱越来越少。胆碱酯酶抑制剂按住剪刀手，让剩下的乙酰胆碱多留一会儿，这就是它们的原理。反过来，很多老药带有抗胆碱作用，会占住 M 门，把本来就不多的信号挡住，老人可能更健忘、更糊涂，用药要请医生把关。",
      fact: "胆碱酯酶抑制剂让乙酰胆碱多留一会儿；抗胆碱药可能让老人记忆变差、意识混乱" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { term: "#ffd9e4", post: "#fbe3f0", cho: "#f7a6c3", acet: "#ffd24d", mito: "#ffc7a8", rec: "#f5b0cf", cht: "#9fc3ea" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  // 原料小零件：胆碱是粉色圆球，乙酰基是黄色小三角
  function cho(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = C.cho; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.beginPath(); ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.25, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  function acet(x, y, r, a, rot) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(rot || 0);
    ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(r * 0.9, r * 0.7); ctx.lineTo(-r * 0.9, r * 0.7); ctx.closePath(); ctx.fillStyle = C.acet; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.restore();
  }
  function mito(x, y, w, h) {
    ctx.beginPath(); ctx.ellipse(x, y, w, h, -0.2, 0, Math.PI * 2); ctx.fillStyle = C.mito; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.save(); ctx.strokeStyle = alpha(C.line, 0.5); ctx.lineWidth = 1.4; ctx.beginPath();
    for (let k = 0; k <= 8; k++) { const xx = x - w * 0.75 + k * w * 0.19, yy = y + (k % 2 ? h * 0.45 : -h * 0.45) - (xx - x) * 0.2; if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
    ctx.stroke(); ctx.restore();
  }

  // ---------- 突触特写 ----------
  function geo() {
    const cx = W * 0.47, tw = Math.min(W * 0.7, H * 1.2), th = H * 0.5, post = H * 0.82;
    const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
    const termY = (x) => {
      const dx = Math.abs(x - cx); let best = th, bd = 1e9;
      for (let i = 0; i <= 30; i++) { const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, th * 1.02, th, th); if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; } }
      return best;
    };
    const chtX = cx - tw * 0.4, chtY = termY(cx - tw * 0.4) - H * 0.005;
    return { cx, tw, th, post, termY, cht: { x: chtX, y: chtY }, mito: { x: cx - tw * 0.2, y: th * 0.6 }, chat: { x: cx - tw * 0.02, y: th * 0.9 },
      ves: { x: cx + tw * 0.25, y: th * 0.72, r: H * 0.08 }, rec: [cx - tw * 0.08, cx + tw * 0.22], ache: [cx - tw * 0.36, cx + tw * 0.47] };
  }
  // 第 2 幕：第 i 位快递员的行程
  function courier1(i, g) {
    const tr = 2.6 + i * 0.35, bound = i < 2;
    const V = { x: g.ves.x, y: g.th + H * 0.1 }, siteY = g.post - H * 0.05 * 1.62;
    const aIdx = i % 2 === 0 ? 0 : 1, A = { x: g.ache[aIdx] + (aIdx ? -H * 0.07 : H * 0.07), y: g.post - H * 0.01 };
    const T1 = bound ? { x: g.rec[i], y: siteY } : A;
    const tu = bound ? 8 + i * 1.1 : 0, snip = bound ? tu + 1.3 : tr + 1.6;
    if (lt < tr) return null;
    if (lt < tr + 1.5) { const p = ease((lt - tr) / 1.5); return { x: lerp(V.x, T1.x, p), y: lerp(V.y, T1.y, p) - Math.sin(p * Math.PI) * H * 0.04, walk: true, st: "go" }; }
    if (bound && lt < tu) return { x: T1.x, y: T1.y, st: "bound" };
    if (bound && lt < snip) { const p = ease((lt - tu) / 1.3); return { x: lerp(T1.x, A.x, p), y: lerp(T1.y, A.y, p), walk: true, st: "go" }; }
    return { x: A.x, y: A.y, st: "cut", t: lt - snip };
  }
  function synView(a) {
    const g = geo(), n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#fff4f6"); bg.addColorStop(0.55, "#f4f1fb"); bg.addColorStop(1, "#fff0f6");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#f4d3e6", 0.8, 70);
    Anima.petals(6, 0.4, 22);
    const fewer = cur === 5;
    // 突触后膜和门
    const recAct = [0, 0];
    const cs = H * 0.036;
    const C1 = cur === 1 ? [0, 1, 2, 3].map((i) => courier1(i, g)) : [];
    if (cur === 1) C1.forEach((c) => { if (c && c.st === "bound") recAct[C1.indexOf(c)] = 1; });
    if (cur === 5) { recAct[0] = lt < 6.8 ? 1 : 0; recAct[1] = lt < 6.8 ? 1 : 0; }
    Anima.postMembrane(g.post, C.post, {});
    const moodP = cur === 5 ? (lt > 8 ? -1 : 1) : recAct[0] + recAct[1] > 0 ? 1 : 0;
    face(n ? W * 0.9 : W * 0.88, g.post + (H - g.post) * 0.55, H * 0.04, moodP);
    g.rec.forEach((x, i) => Anima.receptor(x, g.post, H * 0.05, C.rec, recAct[i], { label: cur === 5 ? "M1" : null }));
    // 突触前末梢
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    mito(g.mito.x, g.mito.y, H * 0.09, H * 0.045);
    // 胆碱转运体（回收门）
    Anima.transporter(g.cht.x, g.cht.y, H * 0.045, C.cht, cur === 0 || cur === 2 ? time * 2.5 : time * 0.4, false);
    // 囊泡
    let nIn = 0;
    if (cur === 0) nIn = clamp(Math.floor((lt - 3.2) / 1.6) + 1, 0, 5);
    else if (cur === 1) nIn = lt < 2.4 ? 5 : 0;
    else if (cur === 2) nIn = clamp(Math.floor((lt - 5.6) / 1.8) + 1, 0, 3) + 1;
    else nIn = fewer ? 2 : 3;
    const vOpen = cur === 1 ? prog(2.2, 0.6) : 0;
    if (vOpen < 0.98) {
      ctx.save(); ctx.globalAlpha *= 1 - vOpen;
      Anima.vesicle(g.ves.x, g.ves.y, g.ves.r, "#f29cc0", nIn, 5);
      ctx.restore();
    }
    if (cur === 1 && vOpen > 0.05 && vOpen < 0.95) sfx("啵！", g.ves.x + g.ves.r * 1.2, g.th + H * 0.03, H * 0.04, "#f06a9a", -0.15, 1);
    // VAChT：囊泡上的小门
    const vx = g.ves.x - g.ves.r * 0.95, vy = g.ves.y;
    if (cur !== 1) { rrect(vx - H * 0.012, vy - H * 0.018, H * 0.024, H * 0.036, 4); ctx.fillStyle = "#c9b8f0"; ctx.fill(); outline(1.3); ctx.stroke(); }
    // ChAT 工人
    const worker = cur === 0 || cur === 2;
    chara(g.chat.x, g.chat.y, H * 0.048, { who: "neuron", hair: "#c77fa6", cloth: "#ffe1ee", tag: worker ? (n ? "ChAT" : "胆碱乙酰转移酶") : null,
      arms: worker ? "hold" : "down", eyes: worker ? "happy" : "open", mouth: "smile", shadow: false, alpha: worker ? 1 : 0.6 });
    // AChE 剪刀手
    g.ache.forEach((x, i) => {
      const held = cur === 5 && lt < 6.8;
      chara(x, g.post - H * 0.005, H * 0.042, { who: "AChE", item: held ? null : "scissors", arms: held ? "down" : "hold", eyes: held ? "open" : "happy", mouth: held ? "wavy" : "smile", dir: i ? -1 : 1, tag: i === 0 && !n && cur !== 5 ? "AChE" : null });
      if (held) {
        const q = prog(0.8 + i * 0.4, 1.2);
        chara(x + (i ? -1 : 1) * H * 0.09, g.post - H * 0.005, H * 0.038, { who: "drug", hatColor: "#f29cc0", tag: i === 0 ? (n ? "抑制剂" : "胆碱酯酶抑制剂") : null, arms: "hold", item: "scissors", eyes: "happy", alpha: q, dir: i ? 1 : -1 });
        if (q > 0.9) emote("sweat", x + H * 0.02, g.post - H * 0.13, H * 0.02);
      }
    });

    // ---- 各幕的演出 ----
    if (cur === 0) {
      // 胆碱从左边进来，乙酰从线粒体出来，在工人手里合成 ACh，再走进囊泡
      for (let k = 0; k < 5; k++) {
        const t0 = 0.4 + k * 1.6, p = prog(t0, 1.6);
        if (lt < t0) continue;
        const inside = p >= 1;
        if (!inside) {
          const sx = -H * 0.02, sy = g.post - H * 0.05;
          const x = p < 0.6 ? lerp(sx, g.cht.x, p / 0.6) : lerp(g.cht.x, g.chat.x - H * 0.03, (p - 0.6) / 0.4);
          const y = p < 0.6 ? lerp(sy, g.cht.y + H * 0.04, p / 0.6) : lerp(g.cht.y, g.chat.y - H * 0.06, (p - 0.6) / 0.4);
          cho(x, y, H * 0.021, 1);
        }
        const q = prog(t0 + 0.4, 1.2);
        if (q > 0 && q < 1) acet(lerp(g.mito.x, g.chat.x + H * 0.03, q), lerp(g.mito.y, g.chat.y - H * 0.06, q), H * 0.021, 1, time * 3);
        const m = prog(t0 + 1.6, 1.4);
        if (m > 0 && m < 1) {
          if (m < 0.15) sparkles(g.chat.x, g.chat.y - H * 0.08, H * 0.05, 3, 1, k);
          chara(lerp(g.chat.x + H * 0.03, vx, m), lerp(g.chat.y - H * 0.02, vy + H * 0.04, m), H * 0.032, { who: "ACh", walk: time * 9, eyes: "sparkle", arms: "up", alpha: m < 0.85 ? 1 : (1 - m) / 0.15, shadow: false });
        }
      }
      callout("cho", lt > 0.8 && lt < 4.6, g.cht.x - H * 0.06, g.cht.y + H * 0.06, n ? W * 0.35 : W * 0.14, n ? g.post + H * 0.07 : g.post - H * 0.14, "胆碱：来自食物，被末梢收进来");
      callout("ac", lt > 4.2 && lt < 8.6, g.mito.x, g.mito.y - H * 0.03, n ? W * 0.3 : W * 0.12, top + H * (n ? 0.01 : 0.08), "乙酰辅酶 A：线粒体做的");
      callout("vacht", lt > 8.8, vx, vy, n ? W * 0.7 : W * 0.84, top + H * (n ? 0.01 : 0.1), "VAChT：把 ACh 装进囊泡");
      say("born", lt > 3.3 && lt < 7.8, g.chat.x, g.chat.y - H * 0.12, n ? W * 0.62 : W * 0.68, g.th + H * 0.12, "接好啦，一位乙酰胆碱！", "say");
    }
    if (cur === 1) {
      if (lt < 2.6) Anima.spark([[g.cx, -10], [g.cx, g.th * 0.4], [g.ves.x, g.ves.y - g.ves.r]], clamp(lt / 2.2, 0, 1), H * 0.028, C.gold);
      let snipped = 0;
      C1.forEach((c, i) => {
        if (!c) return;
        if (c.st !== "cut") {
          chara(c.x, c.y, cs, { who: "ACh", walk: c.walk ? time * 9 + i : null, eyes: c.st === "bound" ? "happy" : "open", arms: c.st === "bound" ? "up" : "hold", item: c.st === "bound" ? null : "letter", mouth: "smile", shadow: false });
          return;
        }
        snipped++;
        if (c.t < 0.7) sfx("咔嚓！", c.x, c.y - H * 0.12, H * 0.036, C.mintDeep, 0.1, 1);
        cho(c.x - H * 0.015, c.y - H * 0.02, H * 0.021, 1);
        acet(c.x + H * 0.02 + c.t * H * 0.02, c.y - H * 0.03 - c.t * H * 0.06, H * 0.02, clamp(1 - c.t / 5, 0, 1), c.t * 2);
      });
      callout("ache", lt > 4.2 && lt < 8.2, g.ache[0], g.post - H * 0.08, n ? W * 0.4 : W * 0.2, n ? g.post + H * 0.07 : g.th + H * 0.1, "乙酰胆碱酯酶：一碰就剪开");
      callout("halves", lt > 8.8, g.ache[1] - H * 0.07, g.post - H * 0.03, n ? W * 0.7 : W * 0.78, g.th * 0.55, "剪成胆碱 + 乙酸");
      const b = C1[0];
      say("got", b && b.st === "bound" && lt < 7.8, b ? b.x : 0, b ? b.y - cs * 3 : 0, n ? W * 0.3 : W * 0.34, g.th + H * 0.14, "信送到啦！", "say");
    }
    if (cur === 2) {
      // 地上的胆碱被接回去，乙酸漂走
      for (let k = 0; k < 3; k++) {
        const sx = g.ache[k % 2] + (k % 2 ? -H * 0.07 : H * 0.07) + k * H * 0.02, sy = g.post - H * 0.03;
        const t0 = 0.5 + k * 1.4, p = prog(t0, 2.2);
        const x = p < 0.6 ? lerp(sx, g.cht.x, p / 0.6) : lerp(g.cht.x, g.chat.x - H * 0.03, (p - 0.6) / 0.4);
        const y = p < 0.6 ? lerp(sy, g.cht.y + H * 0.04, p / 0.6) : lerp(g.cht.y, g.chat.y - H * 0.06, (p - 0.6) / 0.4);
        if (p < 1) cho(x, y, H * 0.021, 1);
        acet(sx + H * 0.03 + lt * H * 0.015, sy - H * 0.04 - lt * H * 0.02, H * 0.02, clamp(1 - lt / 12, 0, 1), lt);
        const q = prog(t0 + 1.6, 1.2);
        if (q > 0 && q < 1) acet(lerp(g.mito.x, g.chat.x + H * 0.03, q), lerp(g.mito.y, g.chat.y - H * 0.06, q), H * 0.021, 1, time * 3);
        const m = prog(t0 + 2.8, 1.4);
        if (m > 0 && m < 1) chara(lerp(g.chat.x + H * 0.03, vx, m), lerp(g.chat.y - H * 0.02, vy + H * 0.04, m), H * 0.032, { who: "ACh", walk: time * 9, eyes: "sparkle", arms: "up", alpha: m < 0.85 ? 1 : (1 - m) / 0.15, shadow: false });
      }
      chara(g.cht.x - H * 0.075, g.cht.y + H * 0.13, H * 0.034, { who: "pump", item: "net", arms: "hold", eyes: "happy", tag: n ? "胆碱转运体" : null, dir: 1 });
      callout("cht", lt > 1 && lt < 6, g.cht.x, g.cht.y, n ? W * 0.3 : W * 0.24, top + H * 0.1, n ? "只回收胆碱" : "胆碱转运体：只接回胆碱");
      const ax1 = g.ache[1] - H * 0.07 + H * 0.02 + H * 0.03 + lt * H * 0.015, ay1 = g.post - H * 0.03 - H * 0.04 - lt * H * 0.02;
      callout("acg", lt > 3 && lt < 9, ax1, ay1, n ? W * 0.7 : W * 0.8, g.th * 0.5, "乙酸漂走了");
      say("recyc", lt > 6.2, g.chat.x, g.chat.y - H * 0.12, W * (n ? 0.5 : 0.6), n ? g.post - H * 0.2 : g.th + H * 0.13, "回收原料，再做一位新的！", "say");
    }
    if (cur === 5) {
      // 前半段：抑制剂按住剪刀手，ACh 在门上多待一会儿；后半段：抗胆碱药占住 M1 门
      g.rec.forEach((x, i) => {
        const siteY = g.post - H * 0.05 * 1.62;
        if (lt < 6.8) chara(x, siteY, cs, { who: "ACh", eyes: "happy", arms: "up", mouth: "grin", jump: Math.abs(Math.sin(time * 4 + i)) * 0.2, shadow: false });
        else {
          const q = prog(6.8 + i * 0.5, 1.4);
          chara(lerp(W + H * 0.1, x, q), siteY, cs * 1.1, { who: "drug", hatColor: "#9aa5b1", hatColor2: "#e2e6ea", tag: i === 0 ? "抗胆碱药" : null, walk: q < 1 ? time * 9 : null, eyes: "open", arms: "down", shadow: false });
          const bx = x - H * 0.08, by = siteY - H * 0.05 - Math.abs(Math.sin(time * 3 + i)) * H * 0.02;
          if (lt > 8) { chara(bx, by, cs, { who: "ACh", eyes: "teary", mouth: "wavy", arms: "down", item: "letter", shadow: false }); emote("?", bx + cs, by - cs * 3.2, cs * 0.6); }
        }
      });
      callout("chei", lt > 1.5 && lt < 6.5, g.ache[0] + H * 0.05, g.post - H * 0.08, n ? W * 0.28 : W * 0.22, g.th + H * 0.1, "按住剪刀：ACh 多留一会儿");
      say("confuse", lt > 8.8, n ? W * 0.9 : W * 0.88, g.post + H * 0.05, n ? W * 0.6 : W * 0.76, n ? g.post + H * 0.1 : g.th + H * 0.12, "信收不到……我有点糊涂了", "think");
    }
    ctx.restore();
  }

  // ---------- 第 4 幕：两类门 ----------
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    const fs = fsz(0.03);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function pentamer(x, y, r, cols, labels) {
    for (let k = 0; k < 5; k++) {
      const q = -Math.PI / 2 + k * Math.PI * 2 / 5, px = x + Math.cos(q) * r, py = y + Math.sin(q) * r;
      ctx.beginPath(); ctx.arc(px, py, r * 0.62, 0, Math.PI * 2); ctx.fillStyle = cols[k]; ctx.fill(); outline(1.5); ctx.stroke();
      if (labels) text(labels[k], px, py + 1, Math.max(10, r * 0.6), C.ink);
    }
    ctx.beginPath(); ctx.arc(x, y, r * 0.35, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
  }
  function splitView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f7effd");
    Anima.petals(8, 0.5, 44);
    const gap = W * 0.03, y0 = top + H * 0.07, ch = H * 0.93 - y0, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: y0, w: cw, h: ch }, R = { x: gap * 2 + cw, y: y0, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, n ? "烟碱型：离子通道" : "烟碱型：五个亚基围成的通道", "#fff1b8");
    card(R.x, R.y, R.w, R.h, n ? "毒蕈碱型：M1～M5" : "毒蕈碱型：M1～M5（G 蛋白）", "#e4e0ff");
    // 左上：从上往下看的两种五聚体
    const pr = Math.min(L.w * 0.08, H * 0.045), py = L.y + L.h * 0.25;
    const pa = L.x + L.w * 0.27, pb = L.x + L.w * 0.73;
    pentamer(pa, py, pr, ["#f7a6c3", "#f7a6c3", "#f7a6c3", "#f7a6c3", "#f7a6c3"], null);
    pentamer(pb, py, pr, ["#f7a6c3", "#a9d8ee", "#f7a6c3", "#a9d8ee", "#a9d8ee"], null);
    plate("α7", pa, py + pr * 2.3, fsz(0.028));
    plate("α4β2", pb, py + pr * 2.3, fsz(0.028));
    // 左下：侧面看，ACh 一插门就开，离子冲进去
    const my = L.y + L.h * 0.72, lx = L.x + L.w * 0.5;
    ctx.save(); rrect(L.x, L.y, L.w, L.h, 18); ctx.clip(); ctx.fillStyle = "#ffe8ef"; ctx.fillRect(L.x, my, L.w, L.h); ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(L.x, my); ctx.lineTo(L.x + L.w, my); ctx.stroke();
    const cyc = (time * 0.6) % 1, open = cyc < 0.6 ? 1 : 0;
    const rs = H * 0.048;
    Anima.receptor(lx, my, rs, "#f7a6c3", open, {});
    chara(lx, my - rs * 1.62, H * 0.03, { who: "ACh", arms: open ? "up" : "down", eyes: open ? "happy" : "open", shadow: false, alpha: open ? 1 : 0.4 });
    if (open) for (let k = 0; k < 4; k++) {
      const t = (time * 1.5 + k / 4) % 1;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      Anima.ion(lx + (k - 1.5) * rs * 0.12, lerp(my - rs * 1.4, my + H * 0.12, t), H * 0.016, k % 2 ? "Ca" : "Na", k % 2 ? "#c8f0d8" : "#bfe3f5");
      ctx.restore();
    }
    if (!n) sfx("快！", lx + L.w * 0.28, my + H * 0.08, H * 0.04, "#e7a23a", -0.1, open);
    // 右：五扇 M 门，M1 被点亮，G 蛋白慢慢传
    const ry = R.y + R.h * 0.42, rs2 = Math.min(H * 0.036, R.w * 0.06);
    ctx.save(); rrect(R.x, R.y, R.w, R.h, 18); ctx.clip(); ctx.fillStyle = "#f0ecff"; ctx.fillRect(R.x, ry, R.w, R.h); ctx.restore();
    outline(1.8); ctx.beginPath(); ctx.moveTo(R.x, ry); ctx.lineTo(R.x + R.w, ry); ctx.stroke();
    const on = Math.floor(lt / 2.4) % 5;
    for (let k = 0; k < 5; k++) {
      const x = R.x + R.w * (0.12 + k * 0.19);
      Anima.receptor(x, ry, rs2, "#c9bdf5", k === on ? 1 : 0.1, { shape: "tri" });
      text("M" + (k + 1), x, ry + rs2 * 0.9, fsz(0.026), C.ink);
      if (k === on) {
        chara(x, ry - rs2 * 1.62, H * 0.026, { who: "ACh", arms: "up", eyes: "happy", shadow: false });
        const t = ((lt % 2.4) / 2.4);
        const gx = x + (R.w * 0.1) * t, gy = ry + H * 0.08 + t * R.h * 0.25;
        ctx.beginPath(); ctx.ellipse(gx, gy, H * 0.03, H * 0.022, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe7a3"; ctx.fill(); outline(1.6); ctx.stroke();
        face(gx, gy, H * 0.021, 1);
      }
    }
    text("G 蛋白慢慢往下传 ⏳", R.x + R.w * 0.5, R.y + R.h * 0.9, fsz(0.026), "#6b61c9");
    // M1 在哪里
    const m1x = R.x + R.w * 0.12;
    callout("m1", lt > 5, m1x, ry + rs2 * 0.9, R.x + R.w * 0.45, R.y + R.h * 0.62, "M1：皮层、海马里很多");
    say("fast", lt > 1 && lt < 6, lx, my - H * 0.12, L.x + L.w * (n ? 0.5 : 0.3), n ? my + H * 0.1 : L.y + L.h * 0.5, "钥匙一插，门就开！", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：基底前脑的邮差线 ----------
  function brainView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4f9ff", "#fdeef3");
    Anima.bokeh(7, "#ffd1dc", 0.7, 90);
    const cx = W * 0.5, cy = top + (H - top) * 0.5, rx = Math.min(W * 0.4, H * 0.66), ry = (H - top) * 0.4;
    // 小脑和脑干
    ctx.beginPath(); ctx.ellipse(cx + rx * 0.62, cy + ry * 0.72, rx * 0.26, ry * 0.2, 0, 0, Math.PI * 2); ctx.fillStyle = "#f7cfd9"; ctx.fill(); outline(2); ctx.stroke();
    rrect(cx + rx * 0.15, cy + ry * 0.55, rx * 0.16, ry * 0.5, 10); ctx.fillStyle = "#f7cfd9"; ctx.fill(); outline(2); ctx.stroke();
    // 大脑
    ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
      const q = i / 60 * Math.PI * 2, wob = 1 + 0.03 * Math.sin(q * 11);
      const flat = Math.sin(q) > 0 ? 0.75 : 1;
      const x = cx + Math.cos(q) * rx * wob, y = cy + Math.sin(q) * ry * wob * flat;
      if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.closePath(); ctx.fillStyle = "#ffe4ea"; ctx.fill(); outline(2.2); ctx.stroke();
    // 目标：皮层上的几个点 + 海马
    const BF = { x: cx - rx * 0.32, y: cy + ry * 0.42 }, HP = { x: cx + rx * 0.12, y: cy + ry * 0.36 };
    const tg = [];
    for (let k = 0; k < 6; k++) { const q = Math.PI * (1.05 + k * 0.17); tg.push({ x: cx + Math.cos(q) * rx * 0.86, y: cy + Math.sin(q) * ry * 0.86 }); }
    // 海马：一条弯弯的小海马形
    ctx.save(); ctx.strokeStyle = "#e58fb0"; ctx.lineWidth = H * 0.028; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(HP.x - rx * 0.12, HP.y - ry * 0.02); ctx.quadraticCurveTo(HP.x, HP.y + ry * 0.14, HP.x + rx * 0.15, HP.y - ry * 0.02); ctx.stroke(); ctx.restore();
    const paths = tg.map((t) => ({ a: BF, b: t, c: { x: (BF.x + t.x) / 2 - rx * 0.05, y: (BF.y + t.y) / 2 + ry * 0.1 } }));
    paths.push({ a: { x: BF.x + rx * 0.04, y: BF.y }, b: { x: HP.x - rx * 0.1, y: HP.y }, c: { x: (BF.x + HP.x) / 2, y: BF.y + ry * 0.12 } });
    const qp = (P, u) => ({ x: (1 - u) * (1 - u) * P.a.x + 2 * (1 - u) * u * P.c.x + u * u * P.b.x, y: (1 - u) * (1 - u) * P.a.y + 2 * (1 - u) * u * P.c.y + u * u * P.b.y });
    const grow = prog(0.5, 2.5);
    paths.forEach((P, i) => {
      ctx.save(); ctx.strokeStyle = i === 6 ? "#e58fb0" : "#f29cc0"; ctx.lineWidth = Math.max(2.5, H * 0.008); ctx.lineCap = "round";
      ctx.beginPath(); for (let k = 0; k <= 30 * grow; k++) { const p = qp(P, k / 30); if (k) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); } ctx.stroke(); ctx.restore();
    });
    // 邮差沿线出发
    if (lt > 3) paths.forEach((P, i) => {
      const u = ((lt - 3) * 0.25 + i * 0.13) % 1, p = qp(P, u);
      chara(p.x, p.y + H * 0.01, H * 0.022, { who: "ACh", walk: time * 9 + i, item: "letter", arms: "hold", eyes: "happy", shadow: false });
    });
    // 皮层的小灯：收到信就亮
    const lit = prog(4.5, 2);
    tg.forEach((t, i) => { glow(t.x, t.y, H * 0.05, C.gold, lit * (0.6 + 0.4 * Math.sin(time * 3 + i))); sparkle(t.x, t.y, H * 0.018, lit); });
    glow(HP.x, HP.y + ry * 0.05, H * 0.07, C.gold, prog(6, 2) * 0.8);
    // 基底前脑总站
    glow(BF.x, BF.y, H * 0.06, "#f29cc0", 0.7);
    ctx.beginPath(); ctx.arc(BF.x, BF.y, H * 0.03, 0, Math.PI * 2); ctx.fillStyle = "#f29cc0"; ctx.fill(); outline(1.8); ctx.stroke();
    face(BF.x, BF.y + H * 0.004, H * 0.018, 1);
    const fs = fsz(0.026);
    plate("基底前脑", BF.x - rx * 0.05, BF.y + H * 0.08, fs, "#ffe1ee");
    plate("海马", HP.x + rx * 0.2, HP.y + H * 0.09, fs, "#ffe1ee");
    plate("大脑皮层", cx + rx * 0.2, cy - ry * 0.45, fs, "#fff");
    callout("nbm", lt > 1 && lt < 5.5, BF.x, BF.y, n ? W * 0.22 : W * 0.14, H * 0.9, "Meynert 基底核：邮差总站");
    callout("ctx", lt > 5.8 && lt < 10, tg[2].x, tg[2].y, n ? W * 0.3 : W * 0.22, top + H * 0.06, "送到皮层：更能集中注意");
    callout("hip", lt > 7.5, HP.x + rx * 0.1, HP.y, n ? W * 0.76 : W * 0.8, H * 0.9, "送到海马：记住新东西");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 0) v2 = clamp(Math.floor((lt - 3.2) / 1.6) + 1, 0, 5) + " 位";
    if (cur === 1) { v1 = lt < 2.2 ? "准备" : "出发"; v2 = lt > 4 ? "开剪" : "待命"; }
    if (cur === 5) { v2 = lt < 6.8 ? "被按住" : "照常"; if (lt > 6.8) { v1 = "M1 门被占"; } }
    pill(14, 12, cur === 5 && lt > 6.8 ? "抗胆碱药" : c.pill[0], v1, "#e0608f", false);
    pill(W - 14, 12, c.pill2[0], v2, "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) synView(S.v0);
    if (S.v1 > 0.02) splitView(S.v1);
    if (S.v2 > 0.02) brainView(S.v2);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0608f",
    titleCard: { lines: ["记忆邮差", "乙酰胆碱的一生"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
