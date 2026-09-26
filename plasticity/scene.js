Anima.register("plasticity", {
    "title": "基因的开关：从信号到可塑性",
    "tag": "基础篇",
    "headline": "一封信，怎样一路传到【基因】那里？",
    "lede": "递质送到的信，不只让神经元“当场”兴奋或安静。接力传进细胞核以后，它还能打开基因、造出新的受体和营养因子，让常用的连接越来越结实。这就是大脑的可塑性，也是药物和心理治疗都要慢慢起效的原因之一。",
    "summary": "第一信使、第二信使、蛋白激酶和转录因子 CREB，早期基因和晚期基因，表观遗传的“书签和封条”，以及长时程增强和突触可塑性。",
    "chapter": "对应 Stahl《精神药理学精要》第 1 章 · 信号转导与基因表达",
    "footer": "",
    "canvasLabel": "拟人化的血清素、谷氨酸、蛋白激酶和转录因子接力把信号传进细胞核、打开基因的动画",
    "regions": ["synapse", "hippo"],
    "parts": ["basics"],
    "cast": ["5HT", "Glu", "neuron"],
    "color": "#b8a8f0"
  }, () => {
  const CH = [
    { title: "接力传话", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["第一信使", "递质"], pill2: ["第二信使", "cAMP、Ca²⁺"],
      text: "《突触邮局》最后说到慢信号，这一集跟着它走完全程。递质是第一信使，只把信送到门口。门里面，G 蛋白偶联受体让细胞造出 cAMP，NMDA 等通道放进钙离子，它们是第二信使，在细胞里四处传话。消息最后交到蛋白激酶手里，它像盖章的办事员，给别的蛋白质盖上磷酸“印章”，改变它们的工作状态。",
      fact: "递质（第一信使）→ 受体 → 第二信使（cAMP、Ca²⁺）→ 蛋白激酶" },
    { title: "打开基因的开关", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["转录因子", "CREB"], pill2: ["新蛋白", "受体、BDNF"],
      text: "有的激酶会一路走进细胞核，给一种叫 CREB 的转录因子盖章。被激活的 CREB 坐到 DNA 上，按下某个基因的开关，基因被抄写成 mRNA，送到细胞核外的“工厂”，造出新的蛋白质，比如新的受体、离子通道，或者像营养液一样的 BDNF。一封信，就这样变成了细胞里长久的改变。",
      fact: "CREB 被磷酸化后结合到 DNA 上，开启一批基因的转录，其中包括 BDNF" },
    { title: "早期基因和晚期基因", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["早期基因", "几分钟"], pill2: ["晚期基因", "几小时～几天"],
      text: "基因不是一下子全部打开的。信号来了几分钟，最先亮起来的是一批早期基因，比如 c-fos。它们造出的蛋白，本身又是新的转录因子，再去打开下一批晚期基因。晚期基因要几小时到几天才慢慢表达，造出受体、酶和搭建突触的材料。所以真正的“装修”，总是要花上一段时间。",
      fact: "早期基因几分钟内被开启，它们的产物再去开启晚期基因（几小时～几天）" },
    { title: "书签和封条", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["表观遗传", "不改字"], pill2: ["改的是", "能不能读"],
      text: "DNA 像一本很厚的书，缠在叫组蛋白的小线轴上。表观遗传不改书里的字，而是改哪些页能被读到：DNA 甲基化像贴在页边的封条，常常让基因读不出来；组蛋白上的一些修饰，比如乙酰化，像书签，让那一页更容易翻开。压力、早年经历和环境，都可能在书上留下这样的标记。",
      fact: "表观遗传改变的是基因“能不能被读到”，而不是 DNA 序列本身" },
    { title: "一起放电，连在一起", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["长时程增强", "LTP"], pill2: ["规则", "用进废退"],
      text: "在海马这样管学习记忆的地方，两个神经元如果常常一起放电，它们之间的连接就会变强：突触后面多装上几扇 AMPA 门，小小的树突棘也长大一点，这叫长时程增强（LTP）。NMDA 那扇双重锁的门，正好负责察觉“一起放电”。反过来，很少用的连接会慢慢变弱。一句话概括：一起放电的神经元，连在一起。",
      fact: "“一起放电的神经元连在一起”来自赫布的学习规则，LTP 是它的经典例子" },
    { title: "大脑可以慢慢改变", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["药物", "改变信号"], pill2: ["心理治疗", "练习新连接"],
      text: "药物和心理治疗走的路不一样：药物从受体入手，改变送到细胞里的信号；心理治疗通过一遍遍练习新的想法和做法，让新的连接一起放电。可它们最后都要借助同一套机制：信号、基因、新蛋白、新连接。这些改变需要时间，所以治疗常常要坚持几周，好转也是一点一点来的。",
      fact: "药物和心理治疗都可能改变大脑的连接，两者常常一起使用、互相加分" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    out: "#eef7fb", cell: "#fff5ec", mem: "#f7c6d3", nuc: "#ece6ff", nucD: "#b8a8f0", dna1: "#f28ca5", dna2: "#8f84e0",
    gprot: "#ffe7a3", camp: "#fff1a8", ca: "#c8f0d8", mrna: "#ff9a52", spool: "#ffd9c2", seal: "#e8637a", mark: "#8fdcc4",
  });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };
  const N = () => Anima.narrow;
  const fsS = () => Math.max(10, H * 0.028) * Anima.UI;
  const csz = () => H * (N() ? 0.05 : 0.046);
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  // 淡出中的画面用“幕末”的时间
  const T = (k) => (cur === k ? lt : 99);

  // 角色：蛋白激酶（盖章的办事员）和转录因子 CREB
  const KIN = { who: "neuron", hair: "#8f6fd0", eye: "#5c42a0", cloth: "#fff1b8", hat: "cap", hatColor: "#c9b8f5", label: "PKA", style: "short" };
  const CREB = { who: "neuron", hair: "#e8739a", eye: "#b04070", cloth: "#ffe1ea", hat: "band", hatColor: "#ff9fb3", label: "CREB", style: "long" };
  function stamp(x, y, s, down) {
    // 小印章：手柄 + 印面；down 0～1 往下按
    ctx.save(); ctx.translate(x, y + down * s * 0.5);
    rrect(-s * 0.18, -s * 0.9, s * 0.36, s * 0.55, s * 0.12); ctx.fillStyle = "#c98f6a"; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -s * 0.95, s * 0.22, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    rrect(-s * 0.4, -s * 0.38, s * 0.8, s * 0.3, s * 0.08); ctx.fillStyle = C.bad; ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function pBadge(x, y, r, a) {
    if (a < 0.03) return;
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * 2.4, C.gold, 1);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffe36e"; ctx.fill(); outline(1.3); ctx.stroke();
    text("P", x, y + 1, r * 1.3, C.ink);
    ctx.restore();
  }
  function dnaStrand(x0, x1, y, amp, glowFrom, glowTo, gA) {
    for (const ph of [0, Math.PI]) {
      ctx.strokeStyle = ph ? C.dna2 : C.dna1; ctx.lineWidth = Math.max(2, H * 0.007);
      ctx.beginPath();
      for (let k = 0; k <= 60; k++) { const t = k / 60, x = lerp(x0, x1, t), yy = y + Math.sin(t * Math.PI * 6 + ph + time * 0.8) * amp; if (k) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
      ctx.stroke();
    }
    ctx.strokeStyle = Anima.alpha(C.line, 0.25); ctx.lineWidth = 1;
    for (let k = 0; k <= 24; k++) { const t = k / 24, x = lerp(x0, x1, t), d = Math.sin(t * Math.PI * 6 + time * 0.8) * amp; ctx.beginPath(); ctx.moveTo(x, y - d); ctx.lineTo(x, y + d); ctx.stroke(); }
    if (gA > 0.02) {
      ctx.save(); ctx.globalAlpha *= gA;
      rrect(glowFrom, y - amp * 1.6, glowTo - glowFrom, amp * 3.2, amp); ctx.fillStyle = Anima.alpha(C.gold, 0.35); ctx.fill();
      ctx.restore();
    }
  }

  // ================= 第 1、2 幕：细胞里的接力 =================
  function geo0() {
    const n = N();
    const mem = H * (n ? 0.42 : 0.36);
    const nuc = { x: W * (n ? 0.72 : 0.72), y: H * (n ? 0.72 : 0.69), r: H * (n ? 0.22 : 0.24) };
    return {
      n, mem, nuc, mt: H * 0.028,
      gx: W * (n ? 0.2 : 0.2), nx: W * (n ? 0.42 : 0.38),
      K: { x: W * (n ? 0.2 : 0.3), y: H * 0.88 },
      dnaY: nuc.y + nuc.r * 0.3,
    };
  }
  function view0(a) {
    const g = geo0(), n = g.n, cs = csz();
    const L1 = T(0), L2 = cur === 1 ? lt : (cur === 0 ? -1 : 99);
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#f4fbff"); bg.addColorStop(g.mem / H, C.out); bg.addColorStop(g.mem / H + 0.02, C.cell); bg.addColorStop(1, "#fdf0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#e4dcff", 0.7, 14);
    Anima.petals(6, 0.4, 3);
    // 膜
    ctx.fillStyle = C.mem; ctx.fillRect(-5, g.mem - g.mt, W + 10, g.mt * 2);
    outline(1.6); ctx.beginPath(); ctx.moveTo(-5, g.mem - g.mt); ctx.lineTo(W + 5, g.mem - g.mt); ctx.moveTo(-5, g.mem + g.mt); ctx.lineTo(W + 5, g.mem + g.mt); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    for (let x = 6; x < W; x += Math.max(9, H * 0.026)) { ctx.beginPath(); ctx.arc(x, g.mem - g.mt * 0.55, Math.max(1.4, H * 0.006), 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(x, g.mem + g.mt * 0.55, Math.max(1.4, H * 0.006), 0, Math.PI * 2); ctx.fill(); }
    // 在第 1 幕里，激酶站在中间；第 2 幕走进细胞核
    const inS1 = cur === 0 || (cur !== 1);
    const tt = cur === 1 ? L2 : L1; // 受体的时间线：第 2 幕一开始就是“满载”状态
    const on5 = cur === 1 ? 1 : prog(0.4, 1.2), onG = cur === 1 ? 1 : prog(2.6, 1.2);
    const rs = H * 0.04;
    const r1 = Anima.receptor(g.gx, g.mem, rs, "#b8b0f0", on5, { shape: "tri" });
    const r2 = Anima.receptor(g.nx, g.mem, rs, "#ffd27a", onG, { shape: "square" });
    // 递质：从上方走来，站到钥匙孔上
    chara(lerp(g.gx + W * 0.08, r1.site.x, on5), lerp(g.mem - H * 0.2, r1.site.y, on5), cs, { who: "5HT", arms: on5 < 1 ? "hold" : "up", item: on5 < 1 ? "letter" : null, eyes: "happy", walk: on5 < 1 ? time * 9 : null, dir: -1 });
    if (tt > 2.6 || cur === 1) chara(lerp(g.nx + W * 0.08, r2.site.x, onG), lerp(g.mem - H * 0.2, r2.site.y, onG), cs, { who: "Glu", arms: onG < 1 ? "hold" : "up", item: onG < 1 ? "letter" : null, eyes: "happy", mouth: "grin", walk: onG < 1 ? time * 9 : null, dir: -1, alpha: cur === 1 ? 1 : clamp((tt - 2.6) * 3, 0, 1) });
    // G 蛋白
    const gp = { x: g.gx + W * 0.05, y: g.mem + H * 0.08 };
    ctx.beginPath(); ctx.ellipse(gp.x, gp.y, H * 0.045, H * 0.034, 0, 0, Math.PI * 2); ctx.fillStyle = C.gprot; ctx.fill(); outline(1.6); ctx.stroke();
    face(gp.x, gp.y, H * 0.025, on5 > 0.5 ? 1 : 0);
    if (on5 > 0.5) glow(gp.x, gp.y, H * 0.06, C.gold, 0.6);
    // 激酶的位置
    let kx = g.K.x, ky = g.K.y, kWalk = null, kArms = "up", kDir = -1;
    const pore = { x: g.nuc.x - g.nuc.r, y: g.nuc.y };
    const crebX = g.nuc.x - g.nuc.r * 0.02, crebY = g.dnaY;
    if (cur === 1 || (cur > 1 && a > 0)) {
      const p1 = ease(L2 / 1.6), p2 = ease((L2 - 1.6) / 1.4);
      if (p2 <= 0) { kx = lerp(g.K.x, pore.x, p1); ky = lerp(g.K.y, pore.y + cs * 1.5, p1); }
      else { kx = lerp(pore.x, crebX - cs * 2.5, p2); ky = lerp(pore.y + cs * 1.5, crebY, p2); }
      kWalk = p2 < 1 ? time * 9 : null; kDir = 1; kArms = p2 < 1 ? "hold" : "up";
    }
    // 第二信使：cAMP 小金币从 G 蛋白飞向激酶，Ca²⁺ 从 NMDA 门落下来
    const tgt = cur === 1 ? { x: g.K.x, y: g.K.y - cs * 1.6 } : { x: kx, y: ky - cs * 1.6 };
    const flowA = cur === 1 ? clamp(1 - L2 / 2, 0.25, 1) : 1;
    if (on5 > 0.8) for (let k = 0; k < 5; k++) {
      const t = (time * 0.35 + k / 5) % 1;
      const x = lerp(gp.x, tgt.x, t) + Math.sin(t * 9 + k) * H * 0.02, y = lerp(gp.y, tgt.y, t);
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * flowA;
      ctx.beginPath(); ctx.arc(x, y, H * 0.022, 0, Math.PI * 2); ctx.fillStyle = C.camp; ctx.fill(); outline(1.2); ctx.stroke();
      text("cAMP", x, y + 1, H * 0.013, C.ink);
      ctx.restore();
    }
    if (onG > 0.8) for (let k = 0; k < 5; k++) {
      const t = (time * 0.45 + k / 5) % 1;
      const x = lerp(g.nx, tgt.x + H * 0.03, t) + Math.cos(t * 7 + k) * H * 0.015, y = lerp(g.mem + H * 0.03, tgt.y, t);
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * flowA;
      Anima.ion(x, y, H * 0.018, "Ca", C.ca);
      ctx.restore();
    }
    // 细胞核
    const nu = g.nuc;
    ctx.beginPath(); ctx.arc(nu.x, nu.y, nu.r, 0, Math.PI * 2); ctx.fillStyle = C.nuc; ctx.fill(); outline(2); ctx.stroke();
    // 核孔（左边的小门）
    ctx.beginPath(); ctx.arc(pore.x, pore.y, H * 0.022, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.5); ctx.stroke();
    text("细胞核", nu.x + nu.r * 0.2, nu.y - nu.r * 0.72, fsS(), C.lavDeep);
    // DNA 和基因开关
    const gene0 = nu.x + nu.r * 0.18, gene1 = nu.x + nu.r * 0.66;
    const geneOn = cur === 1 ? prog(4.4, 0.8) : 0;
    dnaStrand(nu.x - nu.r * 0.8, nu.x + nu.r * 0.8, g.dnaY, H * 0.025, gene0, gene1, geneOn);
    // 基因上方的小灯
    const lampX = (gene0 + gene1) / 2, lampY = g.dnaY - H * 0.1;
    glow(lampX, lampY, H * 0.07, C.gold, geneOn);
    ctx.beginPath(); ctx.arc(lampX, lampY, H * 0.022, 0, Math.PI * 2); ctx.fillStyle = geneOn > 0.5 ? "#fff1a8" : "#e8e2ee"; ctx.fill(); outline(1.3); ctx.stroke();
    text("基因", lampX, g.dnaY + H * 0.055, fsS() * 0.9, C.ink);
    // CREB 坐在 DNA 上
    const stamped = cur === 1 ? prog(3.2, 0.3) : 0;
    chara(crebX, crebY, cs * 0.95, Object.assign({}, CREB, { arms: geneOn > 0.5 ? "point" : "down", eyes: stamped > 0.5 ? "sparkle" : "sleepy", mouth: stamped > 0.5 ? "grin" : "flat", dir: 1, gray: 0.5 * (1 - stamped) }));
    pBadge(crebX - cs * 0.55, crebY - cs * 1.0, cs * 0.28, stamped);
    // 激酶
    chara(kx, ky, cs, Object.assign({}, KIN, { arms: kArms, walk: kWalk, eyes: "happy", mouth: "grin", dir: kDir, tag: "蛋白激酶" }));
    const stampBeat = cur === 0 ? (L1 > 5 ? Math.max(0, Math.sin(time * 5)) : 0) : (L2 > 2.8 && L2 < 3.6 ? Math.sin((L2 - 2.8) / 0.8 * Math.PI) : 0);
    stamp(kx + kDir * cs * 0.9, ky - cs * 3.2, cs * 0.9, stampBeat);
    if (cur === 0 && L1 > 5 && stampBeat > 0.95) sfx("咚！", kx + cs * 1.8, ky - cs * 3.6, H * 0.04, C.bad, -0.12, 1);
    if (cur === 1 && L2 > 3.1 && L2 < 3.9) sfx("咚！盖章！", crebX, crebY - cs * 4.2, H * 0.045, C.bad, -0.12, 1);
    if (cur === 0 && L1 > 5) { // 盖好章的蛋白：带着 P 的小圆球四处跑
      for (let k = 0; k < 3; k++) {
        const t = ((L1 - 5) * 0.3 + k / 3) % 1;
        const x = lerp(kx + cs, kx + cs + W * 0.14, t), y = ky - cs * 1.5 - Math.sin(t * Math.PI) * H * 0.12 + k * H * 0.03;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
        ctx.beginPath(); ctx.arc(x, y, H * 0.02, 0, Math.PI * 2); ctx.fillStyle = "#cfe6ff"; ctx.fill(); outline(1.2); ctx.stroke();
        pBadge(x + H * 0.018, y - H * 0.016, H * 0.011, 1);
        ctx.restore();
      }
    }
    // 第 2 幕：mRNA 丝带跑出细胞核，外面造出新蛋白
    if (cur === 1) {
      const pm = prog(6, 2.5);
      if (pm > 0) {
        const pts = [[lampX, g.dnaY], [nu.x, nu.y - nu.r * 0.3], [pore.x + H * 0.02, pore.y - H * 0.01], [pore.x - W * 0.08, nu.y - H * 0.02]];
        const pos = Anima.spark(pts, pm, H * 0.001, C.mrna);
        ctx.strokeStyle = C.mrna; ctx.lineWidth = Math.max(2.5, H * 0.008); ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(pos.x, pos.y);
        for (let k = 1; k <= 8; k++) ctx.lineTo(pos.x + k * H * 0.008 * (pm < 1 ? 1 : 1), pos.y + Math.sin(k + time * 6) * H * 0.008);
        ctx.stroke();
        if (pm >= 1) text("mRNA", pos.x + H * 0.04, pos.y - H * 0.03, fsS() * 0.9, C.mrna);
      }
      // 新蛋白：一扇新受体装到膜上，一包 BDNF 送出去
      const pr = prog(9, 2);
      if (pr > 0) {
        const rx = W * (n ? 0.56 : 0.52);
        const fx = pore.x - W * 0.08, fy = nu.y - H * 0.02;
        const x = lerp(fx, rx, pr), y = lerp(fy, g.mem, pr);
        if (pr < 1) { ctx.save(); ctx.translate(x, y); Anima.receptor(0, H * 0.04, rs * 0.8, "#b3e3c4", 0, { shape: "round" }); ctx.restore(); }
        else { Anima.receptor(rx, g.mem, rs, "#b3e3c4", 0.5 + 0.5 * Math.sin(time * 3), { shape: "round" }); sparkles(rx, g.mem - rs, rs * 1.8, 4, 1, 7); }
        // BDNF：一个装着营养液的小瓶，往外送
        const bx = lerp(fx, W * (n ? 0.1 : 0.1), pr), by = lerp(fy, H * 0.66, pr);
        ctx.beginPath(); ctx.ellipse(bx, by, H * 0.038, H * 0.047, 0, 0, Math.PI * 2); ctx.fillStyle = "#c8f0d8"; ctx.fill(); outline(1.3); ctx.stroke();
        text("BDNF", bx, by - H * 0.055, fsS() * 0.85, C.mintDeep);
        sparkle(bx + H * 0.025, by - H * 0.03, H * 0.012, 1);
      }
    }
    // 标注和对话
    const top = Anima.topSafe() + H * 0.02;
    callout("p0-1st", cur === 0 && win(1.4, 5), r1.site.x + cs * 0.8, r1.site.y - cs * 1.8, n ? W * 0.62 : W * 0.3, n ? H * 0.97 : top + H * 0.05, "第一信使：递质");
    callout("p0-2nd", cur === 0 && win(4.5, 8.8), (gp.x + tgt.x) / 2, (gp.y + tgt.y) / 2, n ? W * 0.62 : W * 0.56, n ? H * 0.97 : top + H * 0.05, "第二信使：cAMP、Ca²⁺");
    callout("p0-kin", cur === 0 && lt > 8.8, kx + cs * 0.8, ky - cs * 1.4, n ? W * 0.62 : W * 0.56, n ? H * 0.97 : top + H * 0.05, n ? "蛋白激酶：盖磷酸章" : "蛋白激酶：给蛋白质盖“磷酸章”");
    say("p0-5", cur === 0 && win(1.2, 4.4), r1.site.x, r1.site.y - cs * 3.1, n ? W * 0.44 : W * 0.3, g.mem + H * (n ? 0.1 : 0.16), "信送到门口，接力开始～", "say");
    say("p0-k", cur === 0 && win(6, 12), kx, ky - cs * 3.4, kx + W * (n ? 0.3 : 0.16), ky - cs * (n ? 5 : 3.2), "收到！盖章～", "shout");
    callout("p1-creb", cur === 1 && win(3.4, 6.5), crebX, crebY - cs * 1.5, n ? W * 0.5 : nu.x - nu.r * 0.9, n ? H * 0.97 : top + H * 0.05, "转录因子 CREB：被盖章后醒来");
    callout("p1-gene", cur === 1 && win(6.5, 9.5), lampX, lampY, n ? W * 0.6 : nu.x + nu.r * 0.2, n ? H * 0.97 : top + H * 0.05, "基因打开：抄成 mRNA");
    callout("p1-new", cur === 1 && lt > 10, W * (n ? 0.56 : 0.52), g.mem - rs * 1.2, n ? W * 0.55 : W * 0.56, n ? H * 0.97 : top + H * 0.05, "造出新蛋白：受体、BDNF…");
    say("p1-c", cur === 1 && win(4.4, 8.5), crebX, crebY - cs * 3.1, n ? W * 0.84 : nu.x + nu.r * 0.9, nu.y - nu.r * 0.55, "开关按下啦！", "shout");
    ctx.restore();
  }

  // ================= 第 3 幕：早期基因和晚期基因 =================
  function view1(a) {
    const L = T(2), n = N(), cs = csz();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f8f5ff", "#fdeef3");
    Anima.bokeh(6, "#e4dcff", 0.7, 25);
    const dy = H * 0.62, x0 = W * 0.06, x1 = W * (n ? 0.72 : 0.66);
    // 细胞核的底色
    rrect(x0 - W * 0.02, dy - H * 0.3, x1 - x0 + W * 0.04, H * 0.5, H * 0.08); ctx.fillStyle = C.nuc; ctx.fill(); outline(2); ctx.stroke();
    text("细胞核", x0 + W * 0.02, dy - H * 0.26, fsS(), C.lavDeep, "left");
    const eX = [lerp(x0, x1, 0.18)], lX = [lerp(x0, x1, 0.55), lerp(x0, x1, 0.82)];
    const eOn = prog(1.2, 0.8), lOn = [prog(5.2, 1), prog(6.4, 1)];
    const seg = H * 0.05;
    dnaStrand(x0, x1, dy, H * 0.022, 0, 0, 0);
    const lamp = (x, on, lab, col) => {
      ctx.save(); ctx.globalAlpha *= 1;
      rrect(x - seg, dy - H * 0.04, seg * 2, H * 0.08, H * 0.02); ctx.fillStyle = Anima.alpha(C.gold, 0.35 * on); ctx.fill();
      ctx.restore();
      const ly = dy - H * 0.12;
      glow(x, ly, H * 0.07, C.gold, on);
      ctx.beginPath(); ctx.arc(x, ly, H * 0.025, 0, Math.PI * 2); ctx.fillStyle = on > 0.5 ? "#fff1a8" : "#e8e2ee"; ctx.fill(); outline(1.3); ctx.stroke();
      text(lab, x, dy + H * 0.075, fsS() * 0.95, col);
    };
    lamp(eX[0], eOn, n ? "早期基因" : "早期基因（c-fos 等）", "#c86b2e");
    lamp(lX[0], lOn[0], "晚期基因", C.lavDeep);
    lamp(lX[1], lOn[1], "晚期基因", C.lavDeep);
    // CREB 按下早期基因
    chara(eX[0] - seg * 1.6, dy, cs * 0.9, Object.assign({}, CREB, { arms: eOn > 0.5 ? "point" : "down", eyes: "sparkle", mouth: "grin", dir: 1 }));
    // 早期基因的产物：小小的新转录因子，走去打开晚期基因
    const walkP = prog(2.4, 2.8);
    if (L > 2) {
      for (let k = 0; k < 2; k++) {
        const tx = lX[k] - seg * 1.5;
        const p = clamp(walkP * 1.1 - k * 0.1, 0, 1);
        const x = lerp(eX[0] + seg * 1.4, tx, ease(p));
        chara(x, dy, cs * 0.72, { who: "neuron", hair: "#ffa36b", eye: "#b0551e", cloth: "#ffe6c4", hat: "beret", hatColor: "#ffc98f", label: "Fos", style: "bob",
          walk: p < 1 ? time * 9 + k : null, arms: p < 1 ? "hold" : "point", eyes: "happy", dir: 1, alpha: clamp((L - 2) * 3, 0, 1) });
      }
    }
    // 晚期基因的产物：砖块和新受体，一路送去右边搭新突触
    const bx0 = x1 + W * 0.02, sx = W * (n ? 0.86 : 0.84), sy = dy - H * 0.02;
    const build = prog(8, 4.5);
    // 右边：一小段树突和慢慢长出来的树突棘
    ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.07; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(sx, H * 0.97); ctx.lineTo(sx, H * 0.28); ctx.stroke();
    ctx.strokeStyle = "#f7b9a8"; ctx.lineWidth = H * 0.058; ctx.stroke();
    const sr = H * (0.025 + 0.035 * build);
    ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.02 + 2; ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx - H * 0.05 - sr, sy); ctx.stroke();
    ctx.strokeStyle = "#f7b9a8"; ctx.lineWidth = H * 0.02; ctx.stroke();
    ctx.beginPath(); ctx.arc(sx - H * 0.06 - sr, sy, sr, 0, Math.PI * 2); ctx.fillStyle = "#f7b9a8"; ctx.fill(); outline(1.6); ctx.stroke();
    face(sx - H * 0.06 - sr, sy + sr * 0.1, sr * 0.6, build > 0.5 ? 1 : 0, false);
    if (build > 0.9) sparkles(sx - H * 0.06 - sr, sy, sr * 1.8, 5, 1, 12);
    if (L > 7.4) for (let k = 0; k < 4; k++) {
      const t = ((L - 7.4) * 0.35 + k / 4) % 1;
      const x = lerp(lX[k % 2], sx - H * 0.06 - sr * 2, t), y = lerp(dy - H * 0.05, sy - H * 0.02 * (k % 2), t) - Math.sin(t * Math.PI) * H * 0.15;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      if (k % 2) { rrect(x - H * 0.018, y - H * 0.012, H * 0.036, H * 0.024, 3); ctx.fillStyle = "#ffd9a8"; ctx.fill(); outline(1.2); ctx.stroke(); }
      else { ctx.beginPath(); ctx.arc(x, y, H * 0.016, 0, Math.PI * 2); ctx.fillStyle = "#b3e3c4"; ctx.fill(); outline(1.2); ctx.stroke(); }
      ctx.restore();
    }
    text("树突棘", sx - H * 0.06 - sr, sy + sr + fsS() * 1.1, fsS() * 0.9, C.soft);
    // 顶上的时钟：几分钟 → 几小时 → 几天
    const top = Anima.topSafe() + H * 0.04;
    const stage = L < 4.8 ? 0 : (L < 8 ? 1 : 2);
    const lbl = ["几分钟后", "几小时后", "几天后"][stage];
    const ckx = W * (n ? 0.5 : 0.5), cky = top + H * 0.07, ckr = H * 0.05;
    ctx.beginPath(); ctx.arc(ckx - W * 0.09, cky, ckr, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.8); ctx.stroke();
    const hand = time * (stage + 1) * 1.2;
    ctx.strokeStyle = C.line; ctx.lineWidth = 2.2;
    ctx.beginPath(); ctx.moveTo(ckx - W * 0.09, cky); ctx.lineTo(ckx - W * 0.09 + Math.cos(hand) * ckr * 0.75, cky + Math.sin(hand) * ckr * 0.75); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ckx - W * 0.09, cky); ctx.lineTo(ckx - W * 0.09 + Math.cos(hand / 12) * ckr * 0.5, cky + Math.sin(hand / 12) * ckr * 0.5); ctx.stroke();
    sfx(lbl, ckx + W * 0.04, cky, H * 0.05, ["#c86b2e", C.lavDeep, C.mintDeep][stage], -0.06, 1);
    callout("p2-early", cur === 2 && win(1.6, 5), eX[0], dy - H * 0.12, n ? W * 0.3 : eX[0] + W * 0.06, dy + H * 0.23, "早期基因：几分钟就亮");
    callout("p2-fos", cur === 2 && win(5, 8.4), lX[0] - seg * 1.5, dy - cs * 1.5, n ? W * 0.4 : lX[0] - W * 0.05, dy + H * 0.23, "它的产物是新的转录因子");
    callout("p2-late", cur === 2 && lt > 8.6, sx - H * 0.08, sy, n ? W * 0.55 : W * 0.6, dy + H * 0.26, "晚期基因：造材料，搭新突触");
    say("p2-say", cur === 2 && win(3, 7), lX[1] - seg * 1.5, dy - cs * 2.4, n ? W * 0.62 : lX[1], dy - H * 0.26, "下一棒交给我们～", "say");
    ctx.restore();
  }

  // ================= 第 4 幕：书签和封条 =================
  function view2(a) {
    const L = T(3), n = N(), cs = csz();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf7ff", "#fdeef3");
    Anima.bokeh(6, "#e4dcff", 0.7, 41);
    const y = H * (n ? 0.56 : 0.54);
    const spools = 5, x0 = W * 0.1, x1 = W * 0.9, sp = (x1 - x0) / (spools - 1), sr = Math.min(H * 0.07, sp * 0.3);
    // 各个线轴的状态：open 0～1（松开 = 能读）
    const stress = prog(7.2, 1.6);
    const st = [
      { open: 1, mark: "ac", lab: n ? "开着" : "开着的基因" },
      { open: 0, mark: "me", lab: n ? "封着" : "封起来的基因" },
      { open: 1 - stress, mark: stress > 0.5 ? "me" : "ac", lab: "" },
      { open: 1, mark: "ac", lab: "" },
      { open: 0, mark: "me", lab: "" },
    ];
    // DNA 线：在线轴之间穿过，松开的线轴画成松松的圈
    ctx.strokeStyle = C.dna1; ctx.lineWidth = Math.max(2.5, H * 0.008); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(0, y);
    for (let i = 0; i < spools; i++) {
      const x = x0 + i * sp;
      ctx.lineTo(x - sr * 1.2, y);
      ctx.moveTo(x + sr * 1.2, y);
    }
    ctx.lineTo(W, y); ctx.stroke();
    const readerTargets = [];
    st.forEach((s, i) => {
      const x = x0 + i * sp;
      const o = s.open;
      // 线轴（组蛋白）
      const r = sr * (1 - o * 0.25);
      ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.85, 0, 0, Math.PI * 2); ctx.fillStyle = C.spool; ctx.fill(); outline(1.6); ctx.stroke();
      face(x, y + r * 0.1, r * 0.4, o > 0.5 ? 1 : 0, false);
      // 绕在上面的 DNA：紧的时候贴着线轴绕好几圈，松的时候变成一个大圈
      ctx.strokeStyle = C.dna2; ctx.lineWidth = Math.max(2, H * 0.006);
      const loopR = lerp(r * 1.05, sr * 1.7, o);
      for (let k = 0; k < (o > 0.5 ? 1 : 3); k++) {
        ctx.beginPath(); ctx.ellipse(x, y - (loopR - r) * 0.5 * o, loopR + k * 2, (loopR + k * 2) * lerp(0.85, 0.75, o), 0.3 - k * 0.2, 0, Math.PI * 2); ctx.stroke();
      }
      // 标记：书签（乙酰化）或者封条（甲基化）
      if (s.mark === "ac") {
        const bxp = x + sr * 0.9, byp = y - loopR * 0.9 - H * 0.03;
        ctx.beginPath(); ctx.moveTo(bxp - H * 0.015, byp - H * 0.04); ctx.lineTo(bxp + H * 0.015, byp - H * 0.04); ctx.lineTo(bxp + H * 0.015, byp + H * 0.02); ctx.lineTo(bxp, byp + H * 0.008); ctx.lineTo(bxp - H * 0.015, byp + H * 0.02); ctx.closePath();
        ctx.fillStyle = C.mark; ctx.fill(); outline(1.2); ctx.stroke();
        text("Ac", bxp, byp - H * 0.014, H * 0.016, C.ink);
        glow(x, y - loopR * 0.5, sr * 2, C.gold, o * 0.5);
      } else {
        for (let k = 0; k < 2; k++) {
          ctx.save(); ctx.translate(x + (k ? 1 : -1) * r * 0.45, y - r * 0.2 + k * r * 0.35); ctx.rotate(k ? 0.5 : -0.5);
          rrect(-r * 0.75, -H * 0.012, r * 1.5, H * 0.024, 3); ctx.fillStyle = "#ffd6dc"; ctx.fill(); outline(1.1); ctx.stroke();
          text("M", 0, 1, H * 0.018, C.seal);
          ctx.restore();
        }
      }
      if (s.lab) text(s.lab, x, y + sr * 1.9, fsS() * 0.95, s.mark === "ac" ? C.mintDeep : C.seal);
      readerTargets.push({ x: x - sr * 1.55, y: y + 2, open: o });
    });
    // 读书的 CREB：先走到开着的线轴，读得开心；再走到封起来的线轴，读不出来
    const rt = L < 3.5 ? 0 : (L < 7 ? 1 : 2);
    const path = [readerTargets[0], readerTargets[1], readerTargets[2]];
    const seg = rt === 0 ? prog(0.2, 1.4) : (rt === 1 ? prog(3.5, 1.4) : prog(7.4, 1.4));
    const from = rt === 0 ? { x: -W * 0.05, y: path[0].y } : path[rt - 1], to = path[rt];
    const cx = lerp(from.x, to.x, seg), cy = lerp(from.y, to.y, seg) - Math.sin(seg * Math.PI) * H * 0.06;
    const reading = seg >= 1;
    const happy = reading && to.open > 0.5;
    chara(cx, cy, cs, Object.assign({}, CREB, { walk: seg < 1 ? time * 9 : null, arms: reading ? (happy ? "hold" : "down") : "down", item: happy ? "book" : null,
      eyes: reading ? (happy ? "happy" : "teary") : "open", mouth: reading ? (happy ? "grin" : "wavy") : "smile", dir: 1 }));
    if (reading && !happy) emote("sweat", cx + cs * 0.9, cy - cs * 3.2, cs * 0.6);
    if (reading && happy) emote("note", cx + cs * 0.9, cy - cs * 3.2, cs * 0.6);
    // 压力乌云：第 7 秒飘过来，在第三个线轴上贴封条
    if (L > 6) {
      const p = prog(6, 1.4), tx = readerTargets[2].x;
      const ux = lerp(W * 1.1, tx + W * 0.06, p), uy = Anima.topSafe() + H * 0.12;
      ctx.save(); ctx.globalAlpha *= clamp((L - 6) * 2, 0, 1) * (1 - prog(11, 1.5) * 0.6);
      ctx.fillStyle = "#d6d0e0"; outline(1.4);
      ctx.beginPath(); ctx.arc(ux - H * 0.05, uy, H * 0.04, 0, Math.PI * 2); ctx.arc(ux, uy - H * 0.025, H * 0.05, 0, Math.PI * 2); ctx.arc(ux + H * 0.05, uy, H * 0.04, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(ux, uy + H * 0.01, H * 0.09, H * 0.03, 0, 0, Math.PI * 2); ctx.fill();
      face(ux, uy, H * 0.025, -1, false);
      text("压力", ux, uy + H * 0.06, fsS() * 0.9, C.soft);
      ctx.strokeStyle = "#9fb8e0"; ctx.lineWidth = 1.5;
      for (let k = 0; k < 4; k++) { const t = (time * 1.2 + k / 4) % 1; ctx.beginPath(); ctx.moveTo(ux - H * 0.05 + k * H * 0.033, uy + H * 0.05 + t * H * 0.08); ctx.lineTo(ux - H * 0.055 + k * H * 0.033, uy + H * 0.07 + t * H * 0.08); ctx.stroke(); }
      ctx.restore();
    }
    const top = Anima.topSafe() + H * 0.02;
    callout("p3-his", cur === 3 && win(0.8, 4), x0 + sp, y + sr * 0.3, n ? W * 0.3 : x0 + sp * 1.4, y + sr * 2.8, "组蛋白：缠着 DNA 的小线轴");
    callout("p3-ac", cur === 3 && win(1.5, 6.5), x0 + sr * 0.9, y - sr * 1.8, n ? W * 0.22 : x0 + W * 0.06, top + H * 0.1, "书签（如乙酰化）：这页好翻开");
    callout("p3-me", cur === 3 && win(4.2, 8), x0 + sp + sr * 0.3, y + sr * 0.3, n ? W * 0.5 : x0 + sp + W * 0.12, y + sr * 2.8, "封条（DNA 甲基化）：常常读不到");
    callout("p3-env", cur === 3 && lt > 8.5, readerTargets[2].x, y - sr, n ? W * 0.5 : readerTargets[2].x + W * 0.1, y + sr * 2.8, "压力、早年经历也会留下标记");
    say("p3-no", cur === 3 && win(5, 7.2), cx, cy - cs * 3.1, n ? W * 0.3 : cx - W * 0.1, top + H * 0.26, "这页被封住了，读不出来…", "think");
    ctx.restore();
  }

  // ================= 第 5 幕：一起放电，连在一起 =================
  function neuronBall(x, y, r, mood, lit, col) {
    glow(x, y, r * 2, C.gold, lit);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.1, r * 0.5, mood);
  }
  function view3(a) {
    const L = T(4), n = N(), cs = csz();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f5fbf6", "#fdeef3");
    Anima.bokeh(7, "#d9f0dc", 0.7, 52);
    Anima.petals(8, 0.5, 60);
    const r = H * 0.075;
    const A = { x: W * 0.18, y: H * 0.45 }, B = { x: W * (n ? 0.8 : 0.78), y: H * 0.5 }, Cc = { x: W * 0.24, y: H * 0.82 };
    // 放电节拍：A、B 一起亮
    const beatT = 1.1, beats = Math.floor(Math.max(0, L - 0.5) / beatT), ph = (Math.max(0, L - 0.5) % beatT) / beatT;
    const strength = clamp(beats / 8, 0, 1); // 练习越多，连接越强
    const lit = L > 0.5 && ph < 0.3 ? 1 - ph / 0.3 : 0;
    // A→B 的路：越练越宽
    const w0 = H * (0.012 + 0.04 * strength);
    const mid = { x: (A.x + B.x) / 2, y: Math.min(A.y, B.y) - H * 0.1 };
    const road = (p0, p1, m, w, col) => {
      ctx.lineCap = "round";
      ctx.strokeStyle = C.line; ctx.lineWidth = w + 3; ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.quadraticCurveTo(m.x, m.y, p1.x, p1.y); ctx.stroke();
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke();
    };
    const spine = { x: B.x - r * 1.5, y: B.y - r * 0.2 };
    road(A, spine, mid, w0, "#ffd3c4");
    // C→B：很少用，越来越细、越来越淡
    const fade = clamp(1 - L / 12, 0.25, 1);
    ctx.save(); ctx.globalAlpha *= fade;
    const mid2 = { x: (Cc.x + B.x) / 2, y: Cc.y + H * 0.02 };
    const spine2 = { x: B.x - r * 1.1, y: B.y + r * 1.1 };
    ctx.setLineDash([6, 6]); road(Cc, spine2, mid2, H * 0.014 * fade, "#e8e2ee"); ctx.setLineDash([]);
    neuronBall(Cc.x, Cc.y, r * 0.7, 0, 0, "#e8e2ee");
    ctx.restore();
    // 树突棘：越来越大，上面的 AMPA 门越来越多
    const sr = r * (0.35 + 0.35 * strength);
    ctx.beginPath(); ctx.arc(spine.x, spine.y, sr, 0, Math.PI * 2); ctx.fillStyle = "#ffd3c4"; ctx.fill(); outline(1.8); ctx.stroke();
    const nAmpa = 1 + Math.floor(strength * 4);
    for (let k = 0; k < nAmpa; k++) {
      const q = Math.PI + (k - (nAmpa - 1) / 2) * 0.5;
      const px = spine.x + Math.cos(q) * sr, py = spine.y + Math.sin(q) * sr;
      ctx.save(); ctx.translate(px, py); ctx.rotate(q + Math.PI / 2);
      Anima.receptor(0, 0, H * 0.018, "#ffd27a", lit, { shape: "square" });
      ctx.restore();
    }
    neuronBall(A.x, A.y, r, 1, lit, "#ffd3c4");
    neuronBall(B.x, B.y, r, 1, lit, "#ffd3c4");
    if (lit > 0.5) { sfx("一起！", A.x, A.y - r * 1.8, H * 0.04, "#e7a23a", -0.1, lit); sfx("一起！", B.x, B.y - r * 1.8, H * 0.04, "#e7a23a", 0.1, lit); }
    // 谷氨酸快递员沿着路送信，路越宽，来得越勤
    const nC = 1 + Math.floor(strength * 3);
    for (let k = 0; k < nC; k++) {
      const t = (time * 0.18 + k / nC) % 1;
      const x = (1 - t) * (1 - t) * A.x + 2 * (1 - t) * t * mid.x + t * t * spine.x, y = (1 - t) * (1 - t) * A.y + 2 * (1 - t) * t * mid.y + t * t * spine.y;
      chara(x, y - w0 * 0.3, cs * 0.75, { who: "Glu", walk: time * 9 + k, item: "letter", arms: "hold", eyes: "happy", shadow: false, dir: 1 });
    }
    // 练习次数小计数
    const top = Anima.topSafe() + H * 0.03;
    const fs = fsS();
    text("一起放电 × " + beats, W * 0.5, H * 0.93, fs * 1.1, C.ink);
    text("海马", W * 0.06, top + fs, fs, C.soft, "left");
    callout("p4-ltp", cur === 4 && win(4, 8.5), mid.x, mid.y + w0 * 0.5, n ? W * 0.45 : mid.x, top + H * 0.06, "长时程增强：常用的连接变强");
    callout("p4-ampa", cur === 4 && win(8.5, 13), spine.x - sr, spine.y, n ? W * 0.55 : spine.x - W * 0.12, top + H * 0.06, "多装几扇 AMPA 门，树突棘也长大");
    callout("p4-weak", cur === 4 && lt > 6, mid2.x, mid2.y, n ? W * 0.62 : mid2.x + W * 0.1, H * 0.72, "很少用的连接：慢慢变弱");
    say("p4-ab", cur === 4 && win(1, 4.5), B.x, B.y - r, n ? W * 0.62 : W * 0.66, H * 0.24, "又一起放电啦，我们更熟了～", "say");
    ctx.restore();
  }

  // ================= 第 6 幕：大脑可以慢慢改变 =================
  function tree(x, y, s, grow) {
    // 一棵神经元小树：树干 + 越长越多的枝和叶（新连接）
    ctx.strokeStyle = "#c98f6a"; ctx.lineCap = "round";
    ctx.lineWidth = s * 0.16; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - s * 1.2); ctx.stroke();
    const br = [[-0.9, -1.9, 0], [0.9, -1.9, 0.1], [-0.5, -2.4, 0.3], [0.5, -2.5, 0.45], [-1.3, -1.4, 0.6], [1.3, -1.5, 0.7], [0, -2.8, 0.85]];
    br.forEach((b, i) => {
      const g = clamp((grow - b[2]) / 0.15, 0, 1);
      if (g <= 0) return;
      const ex = x + b[0] * s * g, ey = y - s * 1.2 + (b[1] + 1.2) * s * g;
      ctx.lineWidth = s * 0.08; ctx.strokeStyle = "#c98f6a"; ctx.beginPath(); ctx.moveTo(x, y - s * 1.1); ctx.lineTo(ex, ey); ctx.stroke();
      ctx.beginPath(); ctx.arc(ex, ey, s * 0.28 * g, 0, Math.PI * 2); ctx.fillStyle = i % 2 ? "#b3e3c4" : "#c8f0d8"; ctx.fill(); outline(1.3); ctx.stroke();
      if (g > 0.9) sparkle(ex + s * 0.2, ey - s * 0.2, s * 0.08, 0.5 + 0.5 * Math.sin(time * 3 + i));
    });
    face(x, y - s * 0.6, s * 0.2, 1, false);
  }
  function view4(a) {
    const L = T(5), n = N(), cs = csz();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf2", "#f1fbf4");
    Anima.bokeh(7, "#d9f0dc", 0.7, 70);
    Anima.petals(12, 0.6, 80);
    const top = Anima.topSafe() + H * 0.04;
    const tx = W * (n ? 0.74 : 0.72), ty = H * 0.9, ts = H * (n ? 0.13 : 0.14);
    // 地面
    ctx.fillStyle = "#e6f5e4"; ctx.beginPath(); ctx.ellipse(tx, ty + H * 0.02, W * 0.2, H * 0.05, 0, 0, Math.PI * 2); ctx.fill(); outline(1.4); ctx.stroke();
    // 上路：药物 → 受体 → 信号
    const y1 = H * (n ? 0.42 : 0.4), y2 = H * 0.86;
    const x0 = W * 0.1;
    chara(x0, y1, cs, { who: "drug", label: "药", hatColor: "#ff9aa9", hatColor2: "#ffffff", arms: "point", eyes: "happy", dir: 1, tag: "药物" });
    Anima.receptor(x0 + W * 0.14, y1, H * 0.04, "#b8b0f0", 0.5 + 0.5 * Math.sin(time * 3), { shape: "tri" });
    // 下路：两个人在聊天练习（心理治疗）
    chara(x0 - W * 0.02, y2, cs, { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none", arms: "wave", eyes: "happy", dir: 1 });
    chara(x0 + W * 0.08, y2, cs, { hair: "#5a4a6a", eye: "#3a2a4a", cloth: "#ffe7c7", style: "long", hat: "none", glasses: true, arms: "hold", item: "book", eyes: "happy", dir: -1 });
    emote("heart", x0 + W * 0.03, y2 - cs * 3.8, cs * 0.6);
    text("心理治疗", x0 + W * 0.03, y2 + fsS() * 1.1, fsS(), C.ink);
    // 两条路都汇到“信号 → 基因 → 新蛋白 → 新连接”
    const hub = { x: W * (n ? 0.44 : 0.42), y: H * 0.64 };
    const pathA = [[x0 + W * 0.18, y1 - H * 0.02], [hub.x - W * 0.08, y1 + H * 0.02], [hub.x, hub.y]];
    const pathB = [[x0 + W * 0.13, y2 - cs * 2], [hub.x - W * 0.08, y2 - H * 0.08], [hub.x, hub.y]];
    ctx.save(); ctx.setLineDash([5, 7]); ctx.strokeStyle = Anima.alpha(C.line, 0.5); ctx.lineWidth = 2;
    for (const p of [pathA, pathB]) { ctx.beginPath(); p.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke(); }
    ctx.restore();
    Anima.spark(pathA, (time * 0.35) % 1, H * 0.02, C.gold);
    Anima.spark(pathB, (time * 0.35 + 0.5) % 1, H * 0.02, C.mintDeep);
    // 汇合点：小小的细胞核
    ctx.beginPath(); ctx.arc(hub.x, hub.y, H * 0.07, 0, Math.PI * 2); ctx.fillStyle = C.nuc; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.arc(hub.x, hub.y, H * 0.06, 0, Math.PI * 2); ctx.clip();
    dnaStrand(hub.x - H * 0.06, hub.x + H * 0.06, hub.y, H * 0.015, 0, 0, 0);
    ctx.restore();
    text("信号 → 基因 → 新蛋白", hub.x, hub.y + H * 0.11, fsS(), C.lavDeep);
    // 通往小树
    ctx.save(); ctx.setLineDash([5, 7]); ctx.strokeStyle = Anima.alpha(C.line, 0.5); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(hub.x + H * 0.07, hub.y); ctx.quadraticCurveTo(tx - W * 0.12, hub.y - H * 0.05, tx - ts * 0.8, ty - ts * 1.4); ctx.stroke(); ctx.restore();
    Anima.spark([[hub.x + H * 0.07, hub.y], [tx - W * 0.1, hub.y - H * 0.03], [tx - ts * 0.8, ty - ts * 1.4]], (time * 0.3) % 1, H * 0.018, C.rose);
    // 小树一周一周长大
    const grow = clamp((L - 0.8) / 10, 0, 1);
    tree(tx, ty, ts, grow);
    const wk = 1 + Math.min(7, Math.floor(grow * 8));
    const ccx = tx + ts * 1.6, ccy = ty - ts * 2.9, cw = H * 0.12;
    rrect(ccx - cw / 2, ccy - cw * 0.4, cw, cw * 0.8, 6); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.fillStyle = C.rose; rrect(ccx - cw / 2, ccy - cw * 0.4, cw, cw * 0.22, 6); ctx.fill();
    text("第 " + wk + " 周", ccx, ccy + cw * 0.1, Math.max(10, H * 0.026) * Anima.UI, C.ink);
    callout("p5-drug", cur === 5 && win(1, 5.5), x0 + W * 0.14, y1 - H * 0.07, n ? W * 0.3 : x0 + W * 0.16, top + H * 0.04, "药物：从受体入手改变信号");
    callout("p5-talk", cur === 5 && win(4.5, 9), x0 + W * 0.03, y2 - cs * 2, n ? W * 0.4 : x0 + W * 0.2, H * 0.68, "心理治疗：练出新的连接");
    callout("p5-tree", cur === 5 && lt > 9, tx - ts * 0.6, ty - ts * 2, n ? W * 0.5 : tx - W * 0.2, top + H * 0.04, "新连接一点点长出来");
    say("p5-t", cur === 5 && lt > 7, tx, ty - ts * 2.9, n ? W * 0.74 : tx - W * 0.02, top + H * 0.2, "慢慢长，也在长～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.lavDeep, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#d9826c", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) view0(S.v0);
    if (S.v1 > 0.02) view1(S.v1);
    if (S.v2 > 0.02) view2(S.v2);
    if (S.v3 > 0.02) view3(S.v3);
    if (S.v4 > 0.02) view4(S.v4);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#8f84e0",
    titleCard: { lines: ["一封信怎样", "传到基因那里？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
