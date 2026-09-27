Anima.register("dopamine-lifecycle", {
    "title": "多巴胺的一生：合成、装箱和清除",
    "tag": "精神病",
    "headline": "多巴胺从哪里来，又到哪里去？",
    "lede": "多巴胺是神经元自己做出来的：一条小小的流水线，把食物里的酪氨酸一站一站加工成多巴胺，装进囊泡。送完信以后，它又要被回收或分解。纹状体和前额叶收拾多巴胺的办法还不一样。",
    "summary": "酪氨酸 → 酪氨酸羟化酶（限速）→ 左旋多巴 → 多巴脱羧酶 → 多巴胺；VMAT2 装箱，MAO 在胞内分解；纹状体靠 DAT 回收，前额叶靠 NET、扩散和 COMT；再往下一站就是去甲肾上腺素。",
    "chapter": "对应 Stahl《精神药理学精要》第 4 章 · 多巴胺的合成与终止",
    "footer": "",
    "canvasLabel": "酪氨酸在神经元流水线上被加工成多巴胺、装进囊泡、释放后被回收和分解的动画",
    "regions": ["midbrain", "striatum", "pfc"],
    "parts": ["psychosis"],
    "cast": ["DA", "NE", "pump", "MAO", "drug"],
    "color": "#ffb36b"
  }, () => {
  const CH = [
    { title: "从酪氨酸出发", v0: 1, v1: 0, v2: 0, v3: 0, pfc: 0,
      pill: ["原料", "酪氨酸"], pill2: ["限速", "第一站"],
      text: "多巴胺不是从外面直接送进来的，而是神经元自己做的。原料是酪氨酸，一种氨基酸，主要来自食物里的蛋白质，随血液进到神经元里。第一站是酪氨酸羟化酶，它给酪氨酸加上一个羟基，变成左旋多巴。这一站做得最慢，整条流水线的快慢由它说了算，叫做限速步骤。",
      fact: "酪氨酸羟化酶是多巴胺合成的限速酶" },
    { title: "第二站：变成多巴胺", v0: 1, v1: 0, v2: 0, v3: 0, pfc: 0,
      pill: ["第二站", "脱羧酶"], pill2: ["帕金森病", "补原料"],
      text: "左旋多巴一出来，马上就到第二站：多巴脱羧酶。它手脚很快，剪掉一小段羧基，左旋多巴就变成了多巴胺。这一站不用排队，所以帕金森病时补充左旋多巴，就像跳过最慢的第一站，直接给流水线送半成品，让剩下的多巴胺神经元多做出一些多巴胺。",
      fact: "多巴脱羧酶也叫芳香族氨基酸脱羧酶，5-HT 的流水线也用它" },
    { title: "装箱，或者被分解", v0: 0, v1: 1, v2: 0, v3: 0, pfc: 0,
      pill: ["装箱", "VMAT2"], pill2: ["分解", "MAO"],
      text: "刚做好的多巴胺要赶紧装进囊泡。囊泡膜上的装货门叫 VMAT2，它把多巴胺一个个搬进去，存起来等着释放。没装进箱子、留在细胞里的多巴胺，会被线粒体上的单胺氧化酶（MAO）分解，MAO-A 和 MAO-B 两种都能分解多巴胺。装进囊泡，既是备货，也是保护。",
      fact: "VMAT2 把胞质里的单胺装进囊泡；胞内游离的多巴胺由 MAO 分解" },
    { title: "纹状体：回收门很多", v0: 0, v1: 0, v2: 1, v3: 0, pfc: 0,
      pill: ["纹状体", "DAT 多"], pill2: ["停留", "很短"],
      text: "电信号一到，囊泡把多巴胺放进突触间隙，敲完受体的门以后，它要尽快撤场。在纹状体里，末梢上装着很多多巴胺转运体 DAT，像一排回收门，把多巴胺很快拉回末梢，重新装箱再用，或者交给 MAO 分解。所以在这里，多巴胺的信号来得快，收得也快。",
      fact: "纹状体里 DAT 很丰富，回收是那里清除多巴胺的主要方式" },
    { title: "前额叶：回收门很少", v0: 0, v1: 0, v2: 1, v3: 0, pfc: 1,
      pill: ["前额叶", "DAT 少"], pill2: ["清除", "三条路"],
      text: "到了前额叶，情况不一样：这里的 DAT 很少。放出来的多巴胺，一部分被附近去甲肾上腺素神经元的回收门 NET 顺手拉走，一部分慢慢扩散开，还有一部分交给另一位清扫员 COMT 分解。所以在前额叶，多巴胺停留得更久、走得更远；堵住 NET 的药，也能让这里的多巴胺升高。",
      fact: "前额叶 DAT 少，多巴胺主要靠 NET 回收、扩散和 COMT 分解来清除" },
    { title: "再往下一站：去甲肾上腺素", v0: 0, v1: 0, v2: 0, v3: 1, pfc: 0,
      pill: ["新一站", "β-羟化酶"], pill2: ["产品", "NE"],
      text: "这条流水线还没到头。在去甲肾上腺素神经元里，多巴胺被装进囊泡后，囊泡里还等着一位师傅：多巴胺 β-羟化酶。它再给多巴胺加上一个羟基，多巴胺就变成了去甲肾上腺素（NE）。多巴胺和去甲肾上腺素是同一条流水线上的前后两站，去甲肾上腺素系统的故事，就从这里接着讲。",
      fact: "酪氨酸 → 左旋多巴 → 多巴胺 → 去甲肾上腺素，是同一条儿茶酚胺流水线" },
  ];

  const C = Object.assign({}, Anima.C, { term: "#ffe0c8", post: "#ffe3ec", blood: "#ffb3bd", ves: "#fff6ea" });
  const { rnd, clamp, lerp, ease, outline, rrect, text, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, pfc: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  const TYR = { who: "neuron", hair: "#b08968", eye: "#7a5236", cloth: "#f3e6d6", style: "bob" };
  const DOPA = { who: "neuron", hair: "#ffb36b", eye: "#d07a2a", cloth: "#fff1b8", style: "twin", hat: "beret", hatColor: "#ffe08a" };
  const TH = { who: "neuron", hair: "#8f84e0", eye: "#5c52c4", cloth: "#e4e0ff", hat: "kerchief", hatColor: "#b8b0f0", style: "bun" };
  const DDC = { who: "neuron", hair: "#6fb9e0", eye: "#3a7fa8", cloth: "#dff1fb", hat: "kerchief", hatColor: "#a9d8ee", style: "short" };
  const DBH = { who: "neuron", hair: "#e87a8a", eye: "#b03a50", cloth: "#ffe0e4", hat: "kerchief", hatColor: "#f7a8b8", style: "bun" };
  const COMT = { who: "AChE", hair: "#c08ad8", eye: "#8a55b0", cloth: "#f0e0fb", hatColor: "#d8b8ee", label: "COMT" };

  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return w;
  }
  function arrow(x1, y1, x2, y2, col) {
    const q = Math.atan2(y2 - y1, x2 - x1), k = H * 0.018;
    ctx.strokeStyle = col || C.line; ctx.lineWidth = Math.max(1.6, H * 0.005); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    ctx.moveTo(x2 - Math.cos(q - 0.5) * k, y2 - Math.sin(q - 0.5) * k); ctx.lineTo(x2, y2); ctx.lineTo(x2 - Math.cos(q + 0.5) * k, y2 - Math.sin(q + 0.5) * k);
    ctx.stroke();
  }
  function mito(x, y, r) {
    ctx.beginPath(); ctx.ellipse(x, y, r * 1.6, r, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe0d0"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.strokeStyle = "#e7a88a"; ctx.lineWidth = Math.max(1.2, r * 0.08); ctx.beginPath();
    for (let i = 0; i < 7; i++) { const t = i / 6, px = x - r * 1.3 + t * r * 2.6, up = i % 2 ? -1 : 1; ctx.moveTo(px, y + up * r * 0.75); ctx.lineTo(px, y - up * r * 0.1); }
    ctx.stroke();
  }
  // 拱门：流水线上的一站，师傅站在拱顶
  function arch(x, y, s, col, on) {
    const w = s * 3, h = s * 4;
    if (on > 0.02) glow(x, y - h * 0.5, s * 4, "#fff1b8", on);
    ctx.beginPath(); ctx.moveTo(x - w / 2, y); ctx.lineTo(x - w / 2, y - h + w / 2); ctx.arc(x, y - h + w / 2, w / 2, Math.PI, 0); ctx.lineTo(x + w / 2, y);
    ctx.lineTo(x + w * 0.3, y); ctx.lineTo(x + w * 0.3, y - h + w / 2); ctx.arc(x, y - h + w / 2, w * 0.3, 0, Math.PI, true); ctx.lineTo(x - w * 0.3, y); ctx.closePath();
    ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
    return y - h;
  }

  // ---------- 第 1、2 幕：流水线 ----------
  function factoryView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ef", "#fdeef3"); Anima.bokeh(7, "#ffe0cc", 0.6, 11); Anima.petals(6, 0.4, 12);
    const by = H * (nw ? 0.66 : 0.7), s = H * (nw ? 0.042 : 0.048);
    const X = { in: W * 0.07, th: W * (nw ? 0.34 : 0.36), ddc: W * (nw ? 0.66 : 0.62), ves: W * 0.87 };
    // 左边的血管
    const g = ctx.createLinearGradient(0, 0, W * 0.06, 0); g.addColorStop(0, C.blood); g.addColorStop(1, "#ffd0d6");
    rrect(-20, H * 0.2, W * 0.06 + 20, H * 0.66, 14); ctx.fillStyle = g; ctx.fill(); outline(1.8); ctx.stroke();
    for (let k = 0; k < 4; k++) { const y = H * 0.2 + ((time * H * 0.05 + k * H * 0.17) % (H * 0.66)); ctx.beginPath(); ctx.ellipse(W * 0.028, y, H * 0.014, H * 0.024, 0, 0, Math.PI * 2); ctx.fillStyle = "#f7788c"; ctx.fill(); }
    // 传送带
    const bh = H * 0.03;
    rrect(W * 0.04, by, W * 0.88, bh, bh / 2); ctx.fillStyle = "#f3e2cf"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.save(); rrect(W * 0.04, by, W * 0.88, bh, bh / 2); ctx.clip();
    ctx.strokeStyle = "#d8c0a8"; ctx.lineWidth = 2;
    for (let x = W * 0.04 - ((time * W * 0.04) % (H * 0.04)) + H * 0.04; x < W * 0.92; x += H * 0.04) { ctx.beginPath(); ctx.moveTo(x, by + 3); ctx.lineTo(x - H * 0.012, by + bh - 3); ctx.stroke(); }
    ctx.restore();
    // 终点的囊泡
    const vr = H * 0.07, vx = X.ves + vr * 0.5, vy = by - vr * 0.9;
    Anima.vesicle(vx, vy, vr, Anima.CAST.DA.hair, 6 + Math.floor((time * 0.6) % 4), 3);
    // 节拍：第一站每 P 秒做好一个
    const P = 1.7, ph = time / P, f = ph - Math.floor(ph), v = W * 0.055;
    const stepF = ease((f - 0.6) / 0.4), extra = cur === 1 ? prog(4.5, 1) : 0;
    const topTH = arch(X.th, by, s, "#e4e0ff", cur === 0 ? 1 : 0.2);
    const topDDC = arch(X.ddc, by, s, "#dff1fb", cur === 1 ? 1 : 0.2);
    // 排队的酪氨酸
    const q = s * 1.9;
    for (let k = 0; k < 8; k++) {
      const x = X.th - (k + 1 - stepF) * q;
      if (x < X.in) continue;
      const al = k === 0 ? 1 - ease((stepF - 0.6) / 0.4) : Math.min(1, (x - X.in) / (s * 2));
      chara(x, by, s * 0.85, Object.assign({}, TYR, { alpha: al, shadow: false, eyes: k < 3 ? "open" : "happy", mouth: k < 3 ? "wavy" : "smile", walk: stepF > 0 && stepF < 1 ? time * 10 + k : null }));
      if (k === 1 && cur === 0 && lt > 3) emote("sweat", x + s * 0.7, by - s * 3, s * 0.5);
    }
    // 做好以后往右走：左旋多巴 → 多巴胺
    const items = [];
    for (let j = 0; j < 6; j++) items.push(X.th + (f + j) * v * P);
    if (extra > 0) for (let j = 0; j < 6; j++) { const x = X.th + (f + j - 0.5) * v * P; items.push(x > (X.th + X.ddc) / 2 ? x : -1e4); }
    items.forEach((x, i) => {
      if (x > vx - vr * 0.6) return;
      const isDA = x > X.ddc, al = Math.min(1, (x - X.th) / (s * 1.2), (vx - vr * 0.6 - x) / (s * 1.5)) * (i >= 6 ? extra * Math.min(1, (x - (X.th + X.ddc) / 2) / (s * 1.2)) : 1);
      if (al < 0.02) return;
      chara(x, by, s * 0.85, Object.assign({}, isDA ? { who: "DA" } : DOPA, { alpha: al, walk: time * 9 + i, eyes: isDA ? "sparkle" : "happy", mouth: "smile", shadow: false }));
    });
    // 两位师傅
    const busy = f < 0.25;
    chara(X.th, topTH, s, Object.assign({}, TH, { arms: busy ? "up" : "hold", eyes: cur === 0 && !busy ? "sleepy" : "open", mouth: busy ? "open" : "smile", item: busy ? "star" : null }));
    chara(X.ddc, topDDC, s, Object.assign({}, DDC, { arms: "hold", item: "scissors", eyes: "happy", mouth: "grin", jump: Math.abs(Math.sin(time * 6)) * 0.15 }));
    if (busy && cur === 0) sfx("嘿咻", X.th + s * 1.8, topTH - s * 2.4, fz(0.03), "#8f84e0", -0.1, 1 - f * 4);
    if (cur === 1) sfx("咔嚓！", X.ddc + s * 1.9, topDDC - s * 2.2, fz(0.03), "#3a7fa8", -0.1, 0.5 + 0.5 * Math.sin(time * 6));
    // 名字：材料一行，车站一行
    const r1 = by + bh + fz(0.026) * 1.2, r2 = r1 + fz(0.026) * 1.9;
    plate("酪氨酸", (X.in + X.th) / 2, r1, "#fff3dc");
    plate("左旋多巴", (X.th + X.ddc) / 2, r1, "#ffeedd");
    plate("多巴胺", (X.ddc + vx) / 2, r1, "#ffe6c8");
    plate("酪氨酸羟化酶", X.th, r2, "#eeeaff");
    plate("多巴脱羧酶", X.ddc, r2, "#e6f4fc");
    text("血液", W * 0.012, H * 0.91, fz(0.024), "#b04a5c", "left");
    // 第 2 幕：药物访客从上面送来左旋多巴
    const dx = (X.th + X.ddc) / 2, dy = by - s * 4.6;
    if (cur === 1 && extra > 0.02) {
      ctx.save(); ctx.globalAlpha *= extra;
      ctx.strokeStyle = C.line; ctx.setLineDash([4, 5]); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(dx, dy + s * 0.2); ctx.lineTo(dx, by - s * 3); ctx.stroke(); ctx.setLineDash([]);
      chara(dx, dy, s, { who: "drug", label: "L-DOPA", tag: "左旋多巴（药）", arms: "carry", eyes: "happy", mouth: "grin", hatColor: "#ffb36b" });
      ctx.restore();
    }
    const hy = nw ? H * 0.19 : H * 0.2;
    callout("th", cur === 0 && win(1.2, 5), X.th, topTH - s * 1.5, X.th - W * 0.08, hy, "限速步骤：最慢的一站");
    callout("ddc", cur === 1 && win(1, 5.5), X.ddc + s * 0.6, topDDC - s * 1.5, X.ddc + W * 0.08, hy, "剪掉羧基，马上变多巴胺");
    say("slow", cur === 0 && win(5, 8.8), X.th - q * 2, by - s * 3, X.th - W * 0.16, hy, "前面好慢呀～", "think");
    say("one", cur === 0 && lt > 8.8, X.th, topTH - s * 3, X.th + W * 0.18, hy, "别急，一个一个来～", "say");
    say("drop", cur === 1 && lt > 6, dx, dy - s * 3.2, nw ? W * 0.28 : dx + W * 0.18, hy, nw ? "跳过第一站！" : "半成品送到，跳过第一站！", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：装箱或被分解 ----------
  function packView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff4ea", "#ffeef2"); Anima.bokeh(6, "#ffd9c2", 0.6, 31);
    const s = H * (nw ? 0.036 : 0.04), vr = H * (nw ? 0.1 : 0.11);
    const V = [[W * 0.6, H * 0.34], [W * 0.84, H * 0.42], [W * 0.66, H * 0.7]];
    const M = { x: W * 0.24, y: H * 0.8, r: H * 0.06 };
    mito(M.x, M.y, M.r);
    text("线粒体", M.x, M.y + M.r * 1.55, fz(0.024), C.ink);
    // 左边进来的流水线出口
    plate(nw ? "刚做好的" : "流水线刚做好的", W * (nw ? 0.14 : 0.13), H * 0.4, "#ffe6c8", fz(0.024));
    arrow(W * 0.04, H * 0.45, W * 0.14, H * 0.5);
    V.forEach((v, i) => {
      Anima.vesicle(v[0], v[1], vr, Anima.CAST.DA.hair, 6, i * 5);
      // VMAT2 装货门
      const gx = v[0] - vr * 0.95, gy = v[1] + vr * 0.1;
      rrect(gx - vr * 0.14, gy - vr * 0.26, vr * 0.28, vr * 0.52, vr * 0.1); ctx.fillStyle = "#b8e6cf"; ctx.fill(); outline(1.5); ctx.stroke();
    });
    for (let c = 0; c < 6; c++) {
      const t = (time * 0.17 + c / 6) % 1, cyc = Math.floor(time * 0.17 + c / 6);
      const stray = c === 2 || c === 5;
      const sx = W * 0.08, sy = H * 0.52;
      let x, y, sc = 1, al = Math.min(1, t * 10), eyes = "happy", mouth = "smile";
      if (!stray) {
        const vi = (c + cyc) % 3, dv = V[vi], door = [dv[0] - vr * 0.95, dv[1] + vr * 0.1];
        if (t < 0.7) { const k = ease(t / 0.7); x = lerp(sx, door[0], k); y = lerp(sy, door[1], k) + s * 1.5 - Math.sin(k * Math.PI) * H * 0.04; }
        else { const k = (t - 0.7) / 0.3; x = door[0]; y = door[1] + s * 1.5 * (1 - k); al = 1 - k; eyes = "sparkle"; sc = 1 - k * 0.7; }
      } else {
        if (t < 0.6) { const k = ease(t / 0.6); x = lerp(sx, M.x + M.r * 1.9, k); y = lerp(sy, M.y, k); }
        else { const k = (t - 0.6) / 0.4; x = M.x + M.r * 1.9; y = M.y; al = 1 - k; eyes = "dizzy"; mouth = "o"; if (k > 0.1) sparkles(x, y - s * 1.5, s * 1.4, 3, 1 - k, c); }
      }
      if (al > 0.02) chara(x, y, s * sc, { who: "DA", walk: time * 9 + c, eyes, mouth, alpha: al, shadow: false });
    }
    chara(M.x + M.r * 2.9, M.y, s * 1.05, { who: "MAO", arms: "hold", item: "broom", eyes: "open", mouth: "smile", dir: -1, tag: "MAO" });
    callout("vmat", win(1, 6), V[0][0] - vr * 0.95, V[0][1] + vr * 0.1, W * 0.36, H * 0.22, "VMAT2：囊泡上的装货门");
    callout("mao", lt > 6.5, M.x + M.r * 1.6, M.y, M.x + W * (nw ? 0.4 : 0.26), H * 0.93, "MAO：分解没装箱的多巴胺");
    say("safe", win(3, 8), V[1][0], V[1][1] - vr, V[1][0] - W * 0.04, V[1][1] - vr - H * 0.1, "进了箱子就安全啦～", "say");
    say("sweep", lt > 8.8, M.x + M.r * 2.9, M.y - s * 3.2, M.x + W * (nw ? 0.22 : 0.18), H * (nw ? 0.34 : 0.5), "在外面晃的，归我分解～", "say");
    ctx.restore();
  }

  // ---------- 第 4、5 幕：突触里的清除 ----------
  const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
  function termYf(cx, tw, th) {
    return (x) => {
      const dx = Math.abs(x - cx); let best = th, bd = 1e9;
      for (let i = 0; i <= 30; i++) { const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, th * 1.02, th, th); if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; } }
      return best;
    };
  }
  function synView(a) {
    const nw = Anima.narrow, pf = S.pfc;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.8, 90);
    const cx = W * (0.44 - 0.06 * pf), tw = Math.min(W * 0.5, H * 0.95), th = H * 0.42, post = H * 0.8, s = H * 0.03;
    const ty = termYf(cx, tw, th);
    Anima.postMembrane(post, C.post, {});
    const RX = [cx - tw * 0.22, cx + tw * 0.08];
    const recAct = [0, 0];
    Anima.terminal(cx, 0, tw, th, C.term);
    // 右边：去甲肾上腺素末梢（前额叶才出现）
    const nx = W * 0.88, ntw = Math.min(W * 0.2, H * 0.36), nth = H * 0.3;
    const nty = termYf(nx, ntw, nth), NETp = { x: nx - ntw * 0.3 };
    NETp.y = nty(NETp.x);
    if (pf > 0.02) {
      ctx.save(); ctx.globalAlpha *= pf;
      Anima.terminal(nx, 0, ntw, nth, "#ffd3d6");
      Anima.transporter(NETp.x, NETp.y, H * 0.036, "#f7a8b8", time * 2.5, false);
      text("NE 末梢", nx, nth * 0.7, fz(0.022), "#c23a4a");
      ctx.restore();
    }
    // DAT：纹状体三扇，前额叶只剩一扇
    const DX = [cx - tw * 0.42, cx + tw * 0.42, cx + tw * 0.26];
    const DAT = DX.map((x) => ({ x, y: ty(x) }));
    DAT.forEach((d, i) => {
      const al = i === 0 ? 1 : 1 - pf;
      if (al < 0.02) return;
      ctx.save(); ctx.globalAlpha *= al; Anima.transporter(d.x, d.y, H * (i === 0 && pf > 0.5 ? 0.03 : 0.036), "#9fc3ea", time * (2.5 - pf * 2), false); ctx.restore();
    });
    // 囊泡
    for (let k = 0; k < 3; k++) Anima.vesicle(cx + (k - 1) * tw * 0.16, th * (0.7 - (k % 2) * 0.12), H * 0.04, Anima.CAST.DA.hair, 4, k * 3);
    // 快递员们
    const comt = { x: W * 0.09, y: post };
    const REL = [cx - tw * 0.1, cx + tw * 0.04];
    let say1 = null;
    for (let c = 0; c < 6; c++) {
      const t = (time * 0.2 + c / 6) % 1, rx = REL[c % 2], ry = ty(rx) + s * 3.2, rec = RX[c % 2], site = { x: rec, y: post - H * 0.075 };
      let x, y, al = Math.min(1, t * 12), eyes = "happy", mouth = "smile";
      if (t < 0.25) { const k = ease(t / 0.25); x = lerp(rx, site.x, k); y = lerp(ry, site.y, k); }
      else if (t < 0.35) { x = site.x; y = site.y; recAct[c % 2] = 1; eyes = "sparkle"; }
      else {
        const k = ease((t - 0.35) / (pf > 0.5 ? 0.65 : 0.3));
        let dest, gone = true;
        if (pf < 0.5) dest = DAT[c % 3];
        else {
          const m = c % 6;
          if (m === 0) dest = DAT[0];
          else if (m === 1 || m === 4) dest = NETp;
          else if (m === 2) { dest = { x: comt.x + s * 2.5, y: comt.y - s * 4 }; gone = false; }
          else dest = { x: m === 3 ? -W * 0.1 : cx - tw * 0.1, y: m === 3 ? post - H * 0.12 : post - H * 0.2 };
        }
        const dy = gone ? dest.y + H * 0.045 : dest.y;
        x = lerp(site.x, dest.x, k); y = lerp(site.y, dy + s * 3, k) - Math.sin(k * Math.PI) * H * 0.03;
        if (k >= 1) al = 0;
        else if (k > 0.8) al = (1 - k) / 0.2;
        if (pf > 0.5 && c % 6 === 2 && k > 0.6) { eyes = "dizzy"; mouth = "o"; }
        if (pf > 0.5 && c % 6 === 5) { x = lerp(site.x, cx - tw * 0.1 + Math.sin(time) * W * 0.05, k); y = lerp(site.y, post - H * 0.02, k); al = 1 - k * 0.5; eyes = "open"; mouth = "cat"; }
        if (pf < 0.5 && k < 0.2 && c === 1) say1 = { x, y };
      }
      if (al > 0.02) chara(x, y, s, { who: "DA", walk: time * 9 + c, eyes, mouth, alpha: al, shadow: false, seed: c });
    }
    RX.forEach((x, i) => Anima.receptor(x, post, H * 0.042, "#f7a8c0", recAct[i], {}));
    if (pf > 0.02) chara(comt.x, comt.y + H * 0.005, H * 0.04, Object.assign({}, COMT, { arms: "hold", item: "scissors", alpha: pf, tag: nw ? null : "COMT", eyes: "happy" }));
    // 停留时间条
    const my = post + (H - post) * 0.55, mx = W * (nw ? 0.64 : 0.56), mw = W * (nw ? 0.32 : 0.3), mh = H * 0.028, lvl = lerp(0.2, 0.85, pf);
    text(nw ? "停留" : "多巴胺停留", mx - fz(0.024) * 0.5, my, fz(0.024), C.ink, "right");
    rrect(mx, my - mh / 2, mw, mh, mh / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(mx, my - mh / 2, mw * lvl, mh, mh / 2); ctx.fillStyle = "#ffb36b"; ctx.fill(); outline(1.3); ctx.stroke();
    callout("dat", cur === 3 && lt > 1.5, DAT[1].x, DAT[1].y + H * 0.03, DAT[1].x + W * 0.06, H * 0.52, "DAT：多巴胺回收门");
    callout("net", cur === 4 && lt > 2, NETp.x, NETp.y + H * 0.03, NETp.x - W * 0.02, H * 0.5, "NET：顺手回收多巴胺");
    callout("comt", cur === 4 && lt > 5, comt.x + H * 0.03, comt.y + H * 0.03, comt.x + W * (nw ? 0.22 : 0.14), post + H * 0.06, nw ? "COMT：清扫员" : "COMT：另一位清扫员");
    say("home", cur === 3 && lt > 3 && lt < 9, cx - tw * 0.42, ty(cx - tw * 0.42) + H * 0.06, cx - tw * 0.2, th + H * 0.1, "送完信，马上回家！", "say");
    say("few", cur === 4 && lt > 7.5, cx - tw * 0.1, post - H * 0.12, nw ? cx - tw * 0.05 : W * 0.68, nw ? H * 0.22 : H * 0.64, "回收门好少，多逛一会儿～", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：变成去甲肾上腺素 ----------
  function neView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff5f2", "#fbeef6"); Anima.bokeh(6, "#ffd3d6", 0.6, 51); Anima.petals(8, 0.5, 52);
    // 顶部：整条流水线
    const ty = Anima.topSafe() + H * 0.06, fs = fz(nw ? 0.024 : 0.026);
    const names = ["酪氨酸", "左旋多巴", "多巴胺", nw ? "NE" : "去甲肾上腺素"], cols = ["#fff3dc", "#ffeedd", "#ffe6c8", "#ffd3d6"];
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const ws = names.map((n) => ctx.measureText(n).width + fs * 1.1), gap = fs * 2.2;
    let x0 = (W - ws.reduce((p, q) => p + q, 0) - gap * 3) / 2;
    names.forEach((n, i) => {
      const cxp = x0 + ws[i] / 2;
      ctx.save(); if (i === 3) ctx.globalAlpha *= 0.4 + 0.6 * prog(6, 1);
      plate(n, cxp, ty, cols[i], fs); ctx.restore();
      if (i < 3) arrow(x0 + ws[i] + fs * 0.4, ty, x0 + ws[i] + gap - fs * 0.4, ty);
      x0 += ws[i] + gap;
    });
    // 去甲肾上腺素神经元（整个面板）
    const px0 = W * 0.03, py0 = ty + H * 0.07;
    rrect(px0, py0, W * 0.94, H * 0.97 - py0, 24); ctx.fillStyle = "rgba(255,226,230,0.55)"; ctx.fill(); outline(1.8); ctx.stroke();
    plate(nw ? "NE 神经元里" : "去甲肾上腺素神经元里", px0 + W * (nw ? 0.8 : 0.12), py0, "#ffd3d6", fz(0.024));
    const vx = W * 0.6, vy = (py0 + H * 0.97) / 2 + H * 0.02, vr = Math.min((H * 0.97 - py0) * 0.43, W * 0.25), s = H * (nw ? 0.04 : 0.045);
    glow(vx, vy, vr * 1.2, "#fff4c2", 0.6);
    ctx.beginPath(); ctx.arc(vx, vy, vr, 0, Math.PI * 2); ctx.fillStyle = C.ves; ctx.fill(); outline(2.2); ctx.stroke();
    const door = { x: vx - vr, y: vy + vr * 0.2 };
    rrect(door.x - vr * 0.07, door.y - vr * 0.18, vr * 0.14, vr * 0.36, vr * 0.05); ctx.fillStyle = "#b8e6cf"; ctx.fill(); outline(1.5); ctx.stroke();
    const wk = { x: vx - vr * 0.12, y: vy + vr * 0.62 };
    // 囊泡里已经做好的 NE
    const home = [[vx + vr * 0.45, vy - vr * 0.12], [vx + vr * 0.1, vy - vr * 0.38], [vx + vr * 0.58, vy + vr * 0.42]];
    home.forEach((h, i) => chara(h[0], h[1] + Math.sin(time * 1.5 + i) * s * 0.15, s * 0.85, { who: "NE", eyes: i === 0 ? "sparkle" : "happy", mouth: "smile", shadow: false, bob: 0, seed: i }));
    let popAt = null;
    for (let c = 0; c < 3; c++) {
      const t = (time * 0.15 + c / 3) % 1;
      let x, y, al = Math.min(1, t * 10), who = "DA", eyes = "happy", sc = 1;
      if (t < 0.35) { const k = t / 0.35; x = lerp(px0 + s, door.x, k); y = door.y + s * 1.5; }
      else if (t < 0.6) { const k = ease((t - 0.35) / 0.25); x = lerp(door.x + s, wk.x - s * 1.8, k); y = lerp(door.y + s * 1.5, wk.y, k); }
      else {
        const k = ease((t - 0.6) / 0.4); who = "NE"; eyes = "sparkle";
        const h = home[c];
        x = lerp(wk.x + s * 1.8, h[0], k); y = lerp(wk.y, h[1], k); sc = 1 - k * 0.15;
        al = Math.min(1, (1 - t) * 6);
        if (t < 0.68) popAt = { x: wk.x + s * 1.8, y: wk.y };
      }
      chara(x, y, s * sc, { who, walk: t < 0.6 ? time * 9 + c : null, eyes, mouth: "smile", alpha: al, shadow: false, seed: c + 5 });
    }
    chara(wk.x, wk.y, s * 1.1, Object.assign({}, DBH, { arms: popAt ? "up" : "hold", item: "star", eyes: "happy", mouth: popAt ? "grin" : "smile", tag: "β-羟化酶" }));
    if (popAt) sfx("变！", popAt.x + s * 0.5, popAt.y - s * 3.8, fz(0.032), "#c23a4a", -0.1, 1);
    text("VMAT2", door.x - fz(0.022) * 0.6, door.y - vr * 0.3, fz(0.022), "#3f8f6c", "right");
    callout("dbh", win(1.2, 6), wk.x - s * 0.8, wk.y - s * 2.5, W * (nw ? 0.3 : 0.26), nw ? py0 + H * 0.1 : H * 0.36, "多巴胺 β-羟化酶：在囊泡里");
    say("ne", lt > 6.8, home[0][0], home[0][1] - s * 2.7, W * (nw ? 0.25 : 0.24), nw ? py0 + H * 0.13 : H * 0.4, "我变成去甲肾上腺素啦！", nw ? "say" : "shout");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0662a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#8f84e0", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) factoryView(S.v0);
    if (S.v1 > 0.02) packView(S.v1);
    if (S.v2 > 0.02) synView(S.v2);
    if (S.v3 > 0.02) neView(S.v3);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#ffb36b",
    titleCard: { lines: ["多巴胺的一生", "合成、装箱和清除"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
