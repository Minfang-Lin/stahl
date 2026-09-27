Anima.register("dopamine-receptors", {
    "title": "多巴胺的五扇门",
    "tag": "精神病与抗精神病药",
    "headline": "一种钥匙，【五扇门】：多巴胺受体",
    "lede": "多巴胺只有一种，它的门却有五扇：D1 到 D5。两个家族连着相反的 G 蛋白；D2 还装在多巴胺神经元自己身上，当自己的刹车；D3 住在奖赏区，特别敏感；D1 在前额叶帮忙记事。同一种药，占哪几扇门、占多少，效果就不一样。",
    "summary": "D1 家族（Gs，cAMP↑）和 D2 家族（Gi，cAMP↓）、D2 自身受体在胞体和末梢上的两种刹车、小剂量先松刹车、伏隔核里敏感的 D3 和卡利拉嗪、前额叶的 D1，以及药物对五扇门的不同占座。",
    "chapter": "对应 Stahl《精神药理学精要》第 4～5 章 · 多巴胺受体",
    "footer": "药物对受体的作用和剂量有关，请按医嘱用药，不要自行加减药量。",
    "canvasLabel": "多巴胺快递员敲开 D1 到 D5 五扇门，门后连着不同的 G 蛋白和刹车的动画",
    "regions": ["striatum", "pfc", "nac"],
    "parts": ["psychosis"],
    "cast": ["DA", "neuron", "drug"],
    "color": "#ffb38a"
  }, () => {
  const CH = [
    { title: "一种钥匙，五扇门", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["受体", "D1～D5"], pill2: ["家族", "两个"],
      text: "多巴胺只有一种，它的受体却有五种：D1 到 D5。按长相和脾气，它们分成两个家族：D1 和 D5 是 D1 家族；D2、D3、D4 是 D2 家族。同一位多巴胺快递员，可以把钥匙插进任何一扇门，可门后连着的东西不一样，结果也就不一样。",
      fact: "多巴胺受体有五种：D1 家族（D1、D5）和 D2 家族（D2、D3、D4）" },
    { title: "一个加，一个减", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["D1 家族", "Gs"], pill2: ["D2 家族", "Gi"],
      text: "两个家族的差别藏在门后面。D1 家族连着 Gs，像踩油门：腺苷酸环化酶转得更快，第二信使 cAMP 变多。D2 家族连着 Gi，像踩刹车：机器慢下来，cAMP 变少。同一位多巴胺，敲开不同家族的门，细胞里的结果正好相反。这套接力在《三种接力》里细讲过。",
      fact: "D1 家族偶联 Gs，使 cAMP 增加；D2 家族偶联 Gi，使 cAMP 减少" },
    { title: "D2：给自己踩刹车", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["自身受体", "D2"], pill2: ["作用", "刹车"],
      text: "D2 不只装在收信的神经元上，多巴胺神经元自己身上也有，叫自身受体，像给自己装的刹车。装在末梢上的，多巴胺一按，末梢就少合成、少释放一些；装在胞体和树突上的，多巴胺一按，神经元放电就慢下来。外面的多巴胺越多，刹车踩得越重，免得放过了头。",
      fact: "D2 自身受体：末梢上减少多巴胺的合成和释放，胞体上减慢放电" },
    { title: "小剂量，先松刹车", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["小剂量", "先占刹车"], pill2: ["多巴胺", "反而变多"],
      text: "所以同一种药，小剂量和大剂量可能不一样。一种解释是：有些 D2 阻断药在小剂量时，更多先占住自身受体，刹车被松开，多巴胺反而放得更多；剂量加大，才把突触后的 D2 也挡住。常被举的例子是氨磺必利。药效和剂量有关，怎么用药要听医生的。",
      fact: "有些 D2 阻断药小剂量时先挡住自身受体，多巴胺释放反而增加" },
    { title: "D3：奖赏区的敏感门", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["D3", "很敏感"], pill2: ["住在", "伏隔核"],
      text: "D3 主要集中在伏隔核这些和奖赏、动机、情绪有关的地方。它对多巴胺特别敏感：多巴胺只来一点点，D3 就先亮了，D2 还没反应。卡利拉嗪是一种 D2、D3 部分激动剂，它抓 D3 抓得特别牢，亲和力比抓 D2 还高。这和它的疗效有什么关系，还在研究中。",
      fact: "D3 对多巴胺的亲和力高于 D2；卡利拉嗪对 D3 的亲和力很高" },
    { title: "前额叶的 D1", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["前额叶", "D1"], pill2: ["帮忙", "工作记忆"],
      text: "在前额叶，D1 是多巴胺的主要门之一。前额叶的神经元手拉手组成工作记忆网络，把正在想的事“记在心上”。适量的多巴胺通过 D1，帮网络滤掉无关的杂音，让重要的信号更清楚；太少或太多都不好，像一座小山。杂音怎么漏掉，可以回看《前额叶的漏水小门》。",
      fact: "前额叶的 D1 参与工作记忆：刺激适量最好，太少太多都不好（倒 U 形）" },
    { title: "五扇门，占座不同", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["同一种药", "占座不同"], pill2: ["图", "示意"],
      text: "把五扇门放在一起看：多巴胺自己五扇都能开；药物却各有偏好。卡利拉嗪最爱 D3，其次是 D2，几乎不碰 D1；氯氮平占 D2 比较少，却会碰 D4 和 D1 等别的门。占了哪几扇门、占了多少，决定了它在不同脑区做什么、带来哪些副作用。这是读懂一种药“性格”的钥匙。",
      fact: "药物对 D1～D5 的占据比例不同，效果和副作用也就不同" },
  ];
  const DUR = 13;
  const C = Object.assign({}, Anima.C, { f1: "#b5e3c9", f2: "#f7b8c8", term: "#ffd6c4", post: "#ffe8ee", nac: "#fff0f3", pfc: "#f3f0ff", camp: "#ffe08a" });
  const { rnd, clamp, lerp, ease, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const nw = () => Anima.narrow || W / H < 1.45;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (Anima.narrow ? 1.08 : 1);
  const O = (a, b) => Object.assign({}, a, b);
  const DRUG = { who: "drug", label: "", hatColor: "#ff9aa9", hatColor2: "#ffffff" };
  const CARI = { who: "drug", label: "", hatColor: "#b9a8f0", hatColor2: "#ffffff" };
  const GS = { who: "neuron", hat: "cap", hair: "#3fae86", cloth: "#d4f5e6", hatColor: "#7fd3b0", label: "Gs" };
  const GI = { who: "neuron", hat: "cap", hair: "#d9606f", cloth: "#ffdfe3", hatColor: "#f08a9a", label: "Gi" };

  // 第 3、4 幕的小模型：刹车（自身受体）→ 放电、释放
  const M = { fire: 1, rel: 1, bT: 0, bS: 0, blkA: 0, blkP: 0 };
  function update(dt) {
    lt = Anima.sceneTime;
    const k = 1 - Math.exp(-dt * 2);
    let bT = 0, bS = 0, blkA = 0, blkP = 0;
    if (cur === 2) { bT = lt > 3.5 ? 1 : 0; bS = lt > 7 ? 1 : 0; }
    if (cur === 3) { blkA = lt > 1.5 ? 1 : 0; blkP = lt > 8.5 ? 1 : 0; bT = 1 - blkA; bS = 1 - blkA; }
    M.bT = lerp(M.bT, bT, k); M.bS = lerp(M.bS, bS, k); M.blkA = lerp(M.blkA, blkA, k); M.blkP = lerp(M.blkP, blkP, k);
    M.fire = lerp(M.fire, 1 - 0.55 * M.bS, k * 0.8);
    M.rel = lerp(M.rel, M.fire * (1 - 0.5 * M.bT), k * 0.8);
  }

  // ---------- 小工具 ----------
  function tagBox(t, x, y, fs, bg, fg) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 0.9, h = fs * 1.45;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
    text(t, x, y + 1, fs, fg || C.ink);
    return w;
  }
  function card(x, y, w, h, title, color) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 3;
    rrect(x, y, w, h, 16); ctx.fillStyle = "#fffdfb"; ctx.fill(); ctx.restore();
    outline(1.8); rrect(x, y, w, h, 16); ctx.stroke();
    const fs = Math.min(fsz(0.03, 11), w * 0.08);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.3;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.4); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function bar(x, y0, y1, w, v, col, label) {
    rrect(x - w / 2, y0, w, y1 - y0, w / 2); ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill(); outline(1.4); ctx.stroke();
    const hh = (y1 - y0 - 4) * clamp(v, 0, 1);
    if (hh > 2) { rrect(x - w / 2 + 2, y1 - 2 - hh, w - 4, hh, Math.min((w - 4) / 2, hh / 2)); ctx.fillStyle = col; ctx.fill(); }
    if (label) text(label, x, y1 + fsz(0.022, 10) * 1.1, fsz(0.022, 10), C.ink);
  }
  function gear(x, y, r, spin, gray) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(spin);
    ctx.fillStyle = Anima.mix("#fff1c9", "#dcd6d9", gray || 0);
    for (let i = 0; i < 8; i++) { ctx.save(); ctx.rotate(i * Math.PI / 4); rrect(-r * 0.2, -r * 1.3, r * 0.4, r * 0.5, r * 0.1); ctx.fill(); outline(1); ctx.stroke(); ctx.restore(); }
    ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); outline(1.3); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, r * 0.3, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    ctx.restore();
  }
  function coin(x, y, r, a) {
    if (a < 0.03) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = C.camp; ctx.fill(); outline(1); ctx.stroke();
    if (r > 9) text("cAMP", x, y + 1, r * 0.55, C.ink);
    ctx.restore();
  }
  const famCol = (i) => (i < 2 ? C.f1 : C.f2);
  const NAMES = ["D1", "D5", "D2", "D3", "D4"];
  function doorXs() { const n = nw(); return (n ? [0.1, 0.27, 0.5, 0.69, 0.88] : [0.12, 0.27, 0.5, 0.65, 0.8]).map((k) => k * W); }

  // ---------- 画面 0：五扇门（第 1 幕、第 7 幕）----------
  const PROF = [ // 第 7 幕：占座示意（0～1，只表示相对多少）
    { name: "多巴胺自己", who: "DA", occ: [1, 1, 1, 1, 1] },
    { name: "卡利拉嗪", who: "cari", occ: [0, 0, 0.75, 0.95, 0.1] },
    { name: "氯氮平", who: "cloz", occ: [0.35, 0.2, 0.4, 0.25, 0.6] },
  ];
  function v0(a) {
    const n = nw(), xs = doorXs(), post = H * (n ? 0.6 : 0.58), rs = Math.min(H * 0.062, W * 0.05), cs = rs * 0.8;
    const t = lt, last = cur === 6;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f0", "#fdeef3"); Anima.bokeh(7, "#ffd9c2", 0.7, 5); Anima.petals(6, 0.4, 9);
    Anima.postMembrane(post, C.post, {});
    const pi = last ? Math.min(2, Math.floor(t / 4.3)) : -1, pf = last ? prog(pi * 4.3, 0.8) : 0, P = last ? PROF[pi] : null;
    const sites = [];
    xs.forEach((x, i) => {
      let act = 0;
      if (!last) act = t > 1.5 + i * 1.6 ? 1 : 0.05;
      else act = P.who === "DA" ? 1 : P.who === "cari" ? (i >= 2 ? P.occ[i] * 0.5 : 0) : 0.1;
      const r = Anima.receptor(x, post, rs, famCol(i), act, { label: NAMES[i] });
      sites.push(r.site);
    });
    // 家族括号
    if (!last) {
      const by = post + H * 0.16, fs = fsz(0.028, 11);
      [[0, 1, C.f1, n ? "D1 家族" : "D1 家族 · 连 Gs"], [2, 4, C.f2, n ? "D2 家族" : "D2 家族 · 连 Gi"]].forEach((f) => {
        const x0 = xs[f[0]] - rs, x1 = xs[f[1]] + rs;
        ctx.strokeStyle = Anima.mix(f[2], C.line, 0.35); ctx.lineWidth = 2.5; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x0, by - H * 0.03); ctx.lineTo(x0, by); ctx.lineTo(x1, by); ctx.lineTo(x1, by - H * 0.03); ctx.stroke();
        tagBox(f[3], (x0 + x1) / 2, by + fs * 1.1, fs, f[2]);
      });
      // 多巴胺快递员依次敲门
      const k = clamp((t - 0.3) / 1.6, 0, 4.95), i0 = Math.min(4, Math.floor(k)), f = k - i0;
      xs.forEach((x, i) => { if (i < i0 || (i === i0 && f > 0.9)) chara(x, sites[i].y, cs, { who: "DA", eyes: "happy", arms: "up", mouth: "grin", seed: i }); });
      if (f <= 0.9) {
        const x = lerp(i0 === 0 ? -cs * 2 : xs[i0 - 1], xs[i0], ease(Math.min(1, f / 0.9)));
        chara(x, sites[i0].y - Math.sin(f * Math.PI) * H * 0.04, cs, { who: "DA", item: "key", arms: "hold", walk: time * 9, eyes: "sparkle", mouth: "open" });
      }
    } else {
      // 占座柱：每扇门下面一根
      const y0 = post + H * 0.1, y1 = H * 0.9, bw = Math.max(12, W * 0.03);
      xs.forEach((x, i) => {
        const v = P.occ[i] * pf;
        bar(x, y0, y1, bw, v, P.who === "DA" ? "#ffb98a" : P.who === "cari" ? "#b9a8f0" : "#9fd0ee", null);
        // 门上坐着谁
        if (P.occ[i] > 0.3) {
          const o = P.who === "DA" ? { who: "DA", eyes: "happy", arms: "up" } : O(P.who === "cari" ? CARI : O(DRUG, { hatColor: "#9fd0ee" }), { eyes: "happy", arms: "hug", mouth: "cat", alpha: pf });
          chara(x, lerp(sites[i].y - H * 0.1, sites[i].y, pf), cs * (0.7 + 0.3 * P.occ[i]), O(o, { shadow: false, seed: i }));
        }
      });
      tagBox("示意：" + P.name, W * 0.24, Anima.topSafe() + fsz(0.03, 11) * 1.2, fsz(0.032, 12), "#fff", C.ink);
    }
    const q = (c, a0, b0) => cur === c && t > a0 && t < b0;
    callout("r-f1", q(0, 3, 13), xs[0], post + H * 0.04, n ? W * 0.2 : W * 0.2, H * 0.9, "D1 家族：D1、D5");
    callout("r-f2", q(0, 5, 13), xs[3], post + H * 0.04, n ? W * 0.72 : W * 0.72, H * 0.9, "D2 家族：D2、D3、D4");
    say("r-all", q(0, 8.5, 13.5), xs[4], sites[4].y - cs * 3.2, n ? W * 0.62 : W * 0.66, H * (n ? 0.3 : 0.28), "同一把钥匙，五扇门都能开～", "say");
    callout("r-c3", q(6, 5, 8.6), xs[3], sites[3].y - cs * 2.5, n ? W * 0.7 : W * 0.75, H * 0.3, "D3 占得最多");
    callout("r-c4", q(6, 9.5, 13), xs[4], sites[4].y - cs * 2.5, n ? W * 0.7 : W * 0.78, H * 0.3, n ? "D4 相对较多" : "D2 占得少，D4 相对多");
    ctx.restore();
  }

  // ---------- 画面 1：Gs 和 Gi ----------
  function v1(a) {
    const n = nw(), top = Anima.topSafe() + H * 0.05, gap = W * 0.025, cw = (W - gap * 3) / 2, ch = H * 0.95 - top;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fbf8ff", "#fff3ee"); Anima.petals(5, 0.4, 13);
    const on = prog(2.5, 1.5), s = Math.min(H * 0.042, cw * 0.08);
    [0, 1].forEach((side) => {
      const x = gap + side * (cw + gap), up = side === 0;
      card(x, top, cw, ch, up ? "D1 家族 → Gs：cAMP 变多" : "D2 家族 → Gi：cAMP 变少", up ? C.f1 : C.f2);
      const mem = top + ch * 0.4, rx = x + cw * 0.24, mx = x + cw * 0.62;
      ctx.save(); rrect(x, top, cw, ch, 16); ctx.clip();
      ctx.fillStyle = up ? "#effaf4" : "#fff0f3"; ctx.fillRect(x, mem, cw, ch);
      ctx.fillStyle = "#f7d9c6"; ctx.fillRect(x, mem - H * 0.012, cw, H * 0.024);
      ctx.restore();
      outline(1.4); ctx.beginPath(); ctx.moveTo(x, mem - H * 0.012); ctx.lineTo(x + cw, mem - H * 0.012); ctx.moveTo(x, mem + H * 0.012); ctx.lineTo(x + cw, mem + H * 0.012); ctx.stroke();
      const ra = prog(0.5, 1);
      const r = Anima.receptor(rx, mem, s * 1.1, up ? C.f1 : C.f2, ra, { label: up ? "D1" : "D2" });
      chara(rx, r.site.y, s, { who: "DA", eyes: "happy", arms: ra > 0.5 ? "up" : "hold", item: ra > 0.5 ? null : "key" });
      // G 蛋白从受体下面走到机器旁边
      const gx = lerp(rx, mx - s * 1.6, prog(1.2, 1.4)), gy = mem + s * 3.9;
      chara(gx, gy, s * 0.9, O(up ? GS : GI, { walk: lt > 1.2 && lt < 2.6 ? time * 9 : null, eyes: on > 0.5 ? (up ? "happy" : "closed") : "open", arms: on > 0.5 ? (up ? "up" : "shh") : "down" }));
      // 机器：腺苷酸环化酶
      const gr = s * 0.7, spin = time * (up ? 0.8 + on * 5 : 0.8 - on * 0.65);
      gear(mx, mem + s * 1.4, gr, spin, up ? 0 : on * 0.5);
      text("腺苷酸环化酶", mx + (up ? 0 : 0), mem - H * 0.035, fsz(0.022, 10), C.soft);
      if (!up && on > 0.5) emote("zzz", mx + gr * 1.5, mem + s * 0.6, s * 0.5);
      // cAMP 往下冒
      const num = up ? 2 + on * 6 : 2 - on * 1.5, cr = Math.max(7, H * 0.022);
      for (let k = 0; k < Math.ceil(num); k++) {
        const tt = (time * (up ? 0.3 + on * 0.3 : 0.25) + rnd(k + side * 9)) % 1, f = k < Math.floor(num) ? 1 : num - Math.floor(num);
        coin(mx + (rnd(k * 3 + side) - 0.5) * gr * 5 * tt, mem + s * 2.3 + tt * (top + ch - mem - s * 3), cr, Math.sin(tt * Math.PI) * f);
      }
      bar(x + cw * 0.9, mem + H * 0.06, top + ch - H * 0.08, Math.max(12, W * 0.022), up ? 0.35 + on * 0.55 : 0.35 - on * 0.27, up ? "#7fd3b0" : "#f08a9a", "cAMP");
      sfx(up ? "↑" : "↓", x + cw * 0.9, mem + H * 0.02, fsz(0.05, 16), up ? C.good : C.bad, 0, on);
    });
    say("g-up", lt > 4 && lt < 12.5, gap + cw * 0.62 - s * 1.6, top + ch * 0.4 + s * 1.2, gap + cw * 0.3, top + ch * 0.86, "油门踩下去～", "say");
    say("g-dn", lt > 6 && lt < 12.5, gap * 2 + cw * 1.62 - s * 1.6, top + ch * 0.4 + s * 1.2, gap * 2 + cw * 1.3, top + ch * 0.86, "嘘，慢一点做…", "say");
    ctx.restore();
  }

  // ---------- 画面 2：多巴胺神经元和它的自身受体（第 3、4 幕）----------
  function v2(a) {
    const n = nw(), t = lt, T = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f1", "#fdeef3"); Anima.bokeh(6, "#ffd9c2", 0.6, 21);
    const post = H * 0.84, sx = W * (n ? 0.15 : 0.14), sy = H * 0.66, sr = H * (n ? 0.1 : 0.1);
    const tx = W * (n ? 0.66 : 0.64), tw = W * (n ? 0.5 : 0.42), tb = H * 0.5, tt = T + H * 0.02;
    Anima.postMembrane(post, C.post, {});
    // 轴突：胞体 → 末梢
    const ax = [sx + sr * 0.9, sy - sr * 0.3], bx = [tx - tw / 2 + 4, (tt + tb) / 2], cx = [W * 0.28, T + H * 0.02];
    for (const w of [[H * 0.03, C.line], [H * 0.02, "#f3a996"]]) {
      ctx.strokeStyle = w[1]; ctx.lineWidth = w[0]; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(ax[0], ax[1]); ctx.quadraticCurveTo(cx[0], cx[1], bx[0], bx[1]); ctx.stroke();
    }
    // 电信号：放电越快，跑得越密
    const nSp = 1 + Math.round(M.fire * 2), sp = 0.25 + M.fire * 0.35;
    for (let k = 0; k < nSp; k++) {
      const u = (time * sp + k / nSp) % 1, px = (1 - u) * (1 - u) * ax[0] + 2 * (1 - u) * u * cx[0] + u * u * bx[0], py = (1 - u) * (1 - u) * ax[1] + 2 * (1 - u) * u * cx[1] + u * u * bx[1];
      glow(px, py, H * 0.03, C.gold, 0.9); Anima.bolt(px, py, H * 0.018, 1);
    }
    // 末梢
    rrect(tx - tw / 2, tt, tw, tb - tt, Math.min(tw, tb - tt) * 0.3); ctx.fillStyle = C.term; ctx.fill(); outline(2); ctx.stroke();
    const nv = Math.round(2 + M.rel * 3);
    for (let k = 0; k < 5; k++) {
      const vx = tx - tw * 0.3 + (k % 3) * tw * 0.2 + (k > 2 ? tw * 0.1 : 0), vy = tt + (tb - tt) * (k > 2 ? 0.66 : 0.38);
      ctx.save(); ctx.globalAlpha *= k < nv ? 1 : 0.15;
      Anima.vesicle(vx, vy, H * 0.035, Anima.CAST.DA.hair, 4, k * 3);
      ctx.restore();
    }
    // 末梢上的自身受体（门朝下）
    const aT = tx - tw * 0.38, rsA = H * 0.038;
    const rT = Anima.receptor(aT, tb, rsA, C.f2, M.bT * (1 - M.blkA), { dir: -1, label: "D2" });
    // 胞体
    const g = ctx.createRadialGradient(sx - sr * 0.3, sy - sr * 0.3, sr * 0.1, sx, sy, sr);
    g.addColorStop(0, "#fff0ea"); g.addColorStop(1, "#ffcfb8");
    ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    face(sx, sy + sr * 0.2, sr * 0.45, M.fire > 0.7 ? 1 : 0);
    text(n ? "胞体" : "胞体（中脑）", sx, sy + sr + fsz(0.024, 10) * 0.9, fsz(0.024, 10), C.ink);
    const rS = Anima.receptor(sx - sr * 0.2, sy - sr * 0.95, rsA * 0.9, C.f2, M.bS * (1 - M.blkA), { label: "D2" });
    // 放出去的多巴胺：朝突触后的门走
    const rs = Math.min(H * 0.046, W * 0.04), cs = rs * 0.8, pX = [tx - tw * 0.12, tx + tw * 0.1, tx + tw * 0.32];
    const pd = pX.map((x) => Anima.receptor(x, post, rs, C.f2, (1 - M.blkP) * clamp(M.rel * 1.1 - 0.1, 0, 1), { label: "D2" }));
    const nDA = Math.round(1 + M.rel * 4);
    for (let k = 0; k < nDA; k++) {
      const u = (time * 0.22 + k / nDA) % 1, x0 = tx - tw * 0.1 + (k % 3) * tw * 0.12, x1 = pX[k % 3] + (k > 2 ? rs * 1.6 : 0);
      chara(lerp(x0, x1, u), lerp(tb + cs * 3.2, pd[k % 3].site.y - (M.blkP > 0.5 ? cs * 2 : 0), u), cs * 0.7, { who: "DA", eyes: "happy", shadow: false, walk: time * 8 + k, alpha: Math.sin(u * Math.PI) });
    }
    // 回头按刹车的多巴胺（末梢上、胞体上）
    if (M.bT > 0.3 && M.blkA < 0.5) chara(rT.site.x, rT.site.y + cs * 3.1, cs * 0.75, { who: "DA", eyes: "closed", arms: "shh", mouth: "cat", shadow: false });
    if (M.bS > 0.3 && M.blkA < 0.5) chara(rS.site.x, rS.site.y, cs * 0.75, { who: "DA", eyes: "closed", arms: "shh", mouth: "cat", shadow: false });
    // 药物访客：先坐自身受体，再坐突触后的门
    if (M.blkA > 0.02) {
      const k = M.blkA;
      chara(rT.site.x, lerp(post, rT.site.y + cs * 3.2, k), cs * 0.8, O(DRUG, { eyes: "happy", arms: "hug", alpha: k, shadow: false }));
      chara(rS.site.x, lerp(rS.site.y - H * 0.1, rS.site.y, k), cs * 0.8, O(DRUG, { eyes: "happy", arms: "hug", alpha: k, shadow: false }));
    }
    if (M.blkP > 0.02) pd.forEach((r, i) => chara(r.site.x, lerp(r.site.y - H * 0.12, r.site.y, M.blkP), cs * 0.85, O(DRUG, { eyes: "happy", arms: "hug", alpha: M.blkP, shadow: false, seed: i })));
    // 两个计量柱
    const bw = Math.max(12, W * 0.024), fs = fsz(0.022, 10);
    bar(W * (n ? 0.04 : 0.04), T + H * 0.1, T + H * 0.32, bw, M.fire, "#ffc94d", null);
    text("放电", W * (n ? 0.04 : 0.04) + (n ? 0 : 0), T + H * 0.07, fs, C.ink);
    bar(W - W * 0.04, tt + H * 0.02, tb - H * 0.02, bw, M.rel, "#ff9a52", null);
    text("释放", W - W * 0.04, tt, fs, C.ink);
    const q = (c, a0, b0) => cur === c && t > a0 && t < b0;
    callout("a-t", q(2, 3.5, 7), aT, tb + rsA * 0.8, n ? W * 0.4 : W * 0.36, H * 0.66, n ? "末梢：少放一点" : "末梢上的 D2：少合成、少释放");
    callout("a-s", q(2, 7.3, 13), rS.site.x, rS.site.y - cs, n ? W * 0.3 : W * 0.3, T + H * 0.1, n ? "胞体：放电变慢" : "胞体上的 D2：放电变慢");
    say("a-say", q(2, 4, 12.5), rT.site.x, rT.site.y + cs, n ? W * 0.66 : W * 0.44, H * (n ? 0.53 : 0.74), n ? "少放一点～" : "外面够多啦，少放一点～", "say");
    callout("a-low", q(3, 2.5, 8), rT.site.x, rT.site.y + cs * 2, n ? W * 0.4 : W * 0.36, H * 0.66, n ? "小剂量：先占刹车" : "小剂量：先占住自身受体");
    say("a-more", q(3, 4, 8.3), tx + tw * 0.3, tb, n ? W * 0.3 : W * 0.3, T + H * 0.12, "刹车松了，多巴胺更多！", "shout");
    // 手机上方框放到左上方（轴突上面），不压住突触里被挡住的 D2 和快递员
    say("a-hi", q(3, 9, 13.5), pX[1], post - rs * 3, n ? W * 0.3 : W * 0.4, H * (n ? 0.27 : 0.7), "剂量加大：突触后的 D2 也被挡住", "box");
    ctx.restore();
  }

  // ---------- 画面 3：伏隔核里的 D3 ----------
  function v3(a) {
    const n = nw(), t = lt, T = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff4f6", "#ffe8ef"); Anima.bokeh(8, "#ffc6d6", 0.8, 33);
    for (let k = 0; k < 5; k++) Anima.heart(W * (0.1 + k * 0.2), T + H * (0.08 + (k % 2) * 0.06), H * 0.018, alpha(C.rose, 0.35));
    const post = H * 0.6, rs = Math.min(H * 0.05, W * 0.045), cs = rs * 0.82;
    const xs = (n ? [0.1, 0.28, 0.46, 0.64] : [0.1, 0.26, 0.42, 0.58]).map((k) => k * W), kinds = [3, 2, 3, 2];
    Anima.postMembrane(post, "#ffe0ea", {});
    text("伏隔核", W * 0.08, post + H * 0.3, fsz(0.03, 11), C.rose, "left");
    const low = t < 5.5, cari = prog(5.5, 1.5);
    const sites = xs.map((x, i) => {
      const d3 = kinds[i] === 3;
      const act = low ? (d3 ? prog(1.5 + i * 0.5, 1) : 0) : 0.3 * (1 - cari);
      return Anima.receptor(x, post, rs, d3 ? "#ffb0c4" : C.f2, act, { label: d3 ? "D3" : "D2" }).site;
    });
    // 只来了一点点多巴胺：先进 D3
    if (low || cari < 0.9) {
      [0, 2].forEach((i, j) => {
        const p = prog(0.5 + j * 0.6, 1.2);
        chara(lerp(xs[i] - W * 0.08, xs[i], p), lerp(sites[i].y - H * 0.18, sites[i].y, p) - (low ? 0 : cari * H * 0.15), cs, { who: "DA", eyes: "happy", arms: p > 0.9 ? "up" : "hold", alpha: 1 - cari, shadow: false });
      });
    }
    // 卡利拉嗪：先抓 D3，再抓 D2
    if (cari > 0.02) {
      [0, 2, 1, 3].forEach((i, j) => {
        const p = prog(5.5 + j * 0.9, 1.2);
        if (p <= 0) return;
        chara(xs[i], lerp(sites[i].y - H * 0.2, sites[i].y, p), cs, O(CARI, { eyes: "happy", arms: p > 0.9 ? "hug" : "up", mouth: "cat", shadow: false, alpha: p }));
      });
    }
    // 右边：亲和力对比柱
    const bx = W * (n ? 0.84 : 0.8), bw = Math.max(14, W * 0.035), y0 = T + H * 0.2, y1 = post - H * 0.05, fs = fsz(0.024, 10);
    text(low ? "对多巴胺" : "对卡利拉嗪", bx + bw * 0.9, y0 - fs * 2.4, fs, C.ink);
    text("的亲和力", bx + bw * 0.9, y0 - fs * 1.1, fs, C.ink);
    bar(bx, y0, y1, bw, low ? 0.85 : 0.95, "#ffb0c4", "D3");
    bar(bx + bw * 1.9, y0, y1, bw, low ? 0.4 : 0.7, C.f2, "D2");
    const q = (a0, b0) => t > a0 && t < b0;
    callout("d3-s", q(2, 5.5), xs[0], sites[0].y - cs * 2.5, n ? W * 0.36 : W * 0.3, T + H * 0.14, n ? "D3：一点点就亮" : "D3：多巴胺一点点就亮");
    say("d3-d2", q(3, 5.8), xs[1], sites[1].y - rs * 0.5, n ? W * 0.5 : W * 0.5, H * (n ? 0.8 : 0.82), "D2：还没到我这儿……", "think");
    say("d3-c", q(7, 13), xs[0], sites[0].y - cs * 3.2, n ? W * 0.42 : W * 0.4, T + H * 0.12, "卡利拉嗪：我最喜欢 D3～", "say");
    callout("d3-r", q(8, 13), bx, y0 + H * 0.05, n ? W * 0.62 : W * 0.66, H * 0.84, n ? "D3 抓得更牢" : "卡利拉嗪：抓 D3 比抓 D2 更牢");
    ctx.restore();
  }

  // ---------- 画面 4：前额叶的 D1 ----------
  function v4(a) {
    const n = nw(), t = lt, T = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f4ff", "#fdf1f6"); Anima.bokeh(7, "#e1dbff", 0.8, 44); Anima.petals(5, 0.35, 45);
    const s = Math.min(H * 0.05, W * 0.045), over = cur === 5 && lt > 9.3 && lt < 12.3, da = prog(2.5, 2), net = over ? 0.25 : da;
    const P = (n ? [[0.14, 0.55], [0.36, 0.38], [0.58, 0.55]] : [[0.12, 0.56], [0.3, 0.4], [0.48, 0.56]]).map((p) => ({ x: p[0] * W, y: p[1] * H }));
    // 手拉手的网络：一圈发光的线，信号在上面转
    ctx.strokeStyle = alpha(C.lavDeep, 0.4 + 0.5 * net); ctx.lineWidth = H * (0.006 + 0.006 * net); ctx.lineCap = "round";
    ctx.beginPath(); P.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y - s * 1.5) : ctx.moveTo(p.x, p.y - s * 1.5))); ctx.closePath(); ctx.stroke();
    const u = (time * 0.35) % 1 * 3, i0 = Math.floor(u), f = u - i0, A = P[i0], B = P[(i0 + 1) % 3];
    const sx = lerp(A.x, B.x, f), sy = lerp(A.y, B.y, f) - s * 1.5;
    glow(sx, sy, H * 0.05, C.gold, 0.5 + 0.5 * net); sparkle(sx, sy, H * (0.015 + 0.015 * net), 1);
    P.forEach((p, i) => {
      chara(p.x, p.y, s, { who: "neuron", hair: "#8f84e0", cloth: "#e8e3ff", eyes: over ? "dizzy" : net > 0.6 ? "happy" : "open", mouth: over ? "wavy" : net > 0.6 ? "smile" : "wavy", arms: "wave", seed: i, tag: i === 1 ? "前额叶神经元" : "" });
      const r = Anima.receptor(p.x + s * 1.4, p.y, s * 0.55, C.f1, da * (0.6 + 0.4 * Math.sin(time * 2 + i) * 0.5), { label: n ? null : "D1" });
      if (da > 0.2) chara(r.site.x, r.site.y, s * 0.5, { who: "DA", eyes: "happy", shadow: false, alpha: da, bob: 0 });
    });
    // 杂音：灰色的小问号飞进来，多巴胺到了以后从“漏水口”漏走
    const noise = 1 - net * 0.8;
    for (let k = 0; k < 7; k++) {
      const tt = (time * 0.18 + rnd(k)) % 1, p = P[k % 3];
      const x = p.x + (rnd(k * 5) - 0.5) * s * 6 * (1 - tt * noise), y = Math.min(p.y - s * 0.4 - H * 0.022, p.y - s * 1.5 + (rnd(k * 7) - 0.5) * s * 4 + tt * s * 3 * net); // 别掉到脚下的名牌上
      ctx.save(); ctx.globalAlpha *= Math.sin(tt * Math.PI) * (0.15 + 0.85 * noise);
      ctx.beginPath(); ctx.arc(x, y, H * 0.022, 0, Math.PI * 2); ctx.fillStyle = "#ece6ea"; ctx.fill(); outline(1); ctx.stroke();
      text("?", x, y + 1, H * 0.03, "#8a7f86");
      ctx.restore();
    }
    // 右边：倒 U 小山
    const gx = W * (n ? 0.72 : 0.64), gw = W * (n ? 0.25 : 0.3), gy = H * 0.86, gh = H * 0.42, fs = fsz(0.022, 10);
    rrect(gx - W * 0.02, gy - gh - H * 0.06, gw + W * 0.04, gh + H * 0.14, 14); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.5); ctx.stroke();
    outline(1.6); ctx.beginPath(); ctx.moveTo(gx, gy - gh); ctx.lineTo(gx, gy); ctx.lineTo(gx + gw, gy); ctx.stroke();
    const cy = (x) => gy - gh * 0.85 * Math.exp(-Math.pow((x - 0.5) / 0.24, 2));
    ctx.strokeStyle = C.lavDeep; ctx.lineWidth = 3; ctx.beginPath();
    for (let k = 0; k <= 40; k++) { const x = k / 40; if (k) ctx.lineTo(gx + x * gw, cy(x)); else ctx.moveTo(gx + x * gw, cy(x)); }
    ctx.stroke();
    const dx = lt > 9 && lt < 12.3 ? lerp(0.5, 0.8, prog(9, 1)) : lerp(0.12, 0.5, da);
    ctx.beginPath(); ctx.arc(gx + dx * gw, cy(dx), H * 0.018, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); outline(1.4); ctx.stroke();
    text("D1 刺激 →", gx + gw * 0.5, gy + fs * 1.1, fs, C.ink);
    text("工作记忆", gx + fs * 0.4, gy - gh - fs * 0.6, fs, C.ink, "left");
    text("太少", gx + gw * 0.12, gy - fs * 1.2, fs, C.ink); text("太多", gx + gw * 0.88, gy - fs * 1.2, fs, C.ink);
    const q = (a0, b0) => t > a0 && t < b0;
    callout("p-net", q(0.8, 5), P[1].x, P[1].y - s * (n ? 1 : 3), n ? W * 0.36 : W * 0.32, n ? H * 0.74 : T + H * 0.05, "工作记忆网络");
    callout("p-d1", q(5, 13), P[2].x + s * 1.4, P[2].y - s * 0.6, n ? W * 0.36 : W * 0.3, H * 0.84, n ? "DA → D1：滤掉杂音" : "多巴胺经 D1：滤掉杂音");
    say("p-top", q(6.5, 9), gx + gw * 0.5, cy(0.5), gx + gw * 0.5, T + H * 0.06, "刚刚好！", "say");
    say("p-over", q(9.5, 12.3), gx + gw * 0.85, cy(0.85), gx + gw * 0.5, T + H * 0.06, "太多也会掉线", "say");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fffaf5"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) v0(S.v0);
    if (S.v1 > 0.02) v1(S.v1);
    if (S.v2 > 0.02) v2(S.v2);
    if (S.v3 > 0.02) v3(S.v3);
    if (S.v4 > 0.02) v4(S.v4);
    pill(14, 12, CH[cur].pill[0], CH[cur].pill[1], "#ff9a52", false);
    pill(W - 14, 12, CH[cur].pill2[0], CH[cur].pill2[1], "#8f84e0", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#ff9a52",
    titleCard: { lines: ["多巴胺的", "五扇门"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
