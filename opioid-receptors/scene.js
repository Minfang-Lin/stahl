Anima.register("opioid-receptors", {
    "title": "μ、δ、κ：阿片受体三姐妹",
    "tag": "冲动、强迫与成瘾",
    "headline": "同是阿片受体，三姐妹【脾气各不同】",
    "lede": "身体自己会做阿片：内啡肽、脑啡肽和强啡肽。它们敲开 μ、δ、κ 三扇门，有的止痛、有的带来奖赏，有的带来坏心情，还有一扇藏在管呼吸的脑干里。看看阿片类药物在每扇门上做了什么，耐受又是怎么来的。",
    "summary": "内源性阿片肽和 μ、δ、κ 受体（Gi/o）、脊髓止痛、VTA 的 GABA 去抑制与奖赏、强啡肽和 κ 的不快感、脑干呼吸抑制、完全/部分激动剂和拮抗剂、受体脱敏内化与耐受。",
    "chapter": "对应 Stahl《精神药理学精要》第 13 章 · 内源性阿片系统",
    "footer": "阿片类药物请严格遵医嘱使用。怀疑有人阿片过量（叫不醒、呼吸很慢）时，请立即拨打急救电话。",
    "canvasLabel": "拟人化的内源性阿片肽和药物访客推开 μ、δ、κ 三扇受体之门的动画",
    "regions": ["midbrain", "nac", "brainstem"],
    "parts": ["addiction"],
    "cast": ["DA", "GABA", "Glu", "drug"],
    "color": "#f2a6b8"
  }, () => {
  const CH = [
    { title: "身体自带的阿片", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["阿片肽", "三种"], pill2: ["受体", "μ δ κ"],
      text: "阿片不只是外来的药，身体自己也会做：内啡肽、脑啡肽和强啡肽，统称内源性阿片肽。它们对应三扇门：μ、δ 和 κ 受体。内啡肽偏爱 μ，脑啡肽偏爱 δ，强啡肽专找 κ。三扇门都是 G 蛋白偶联受体，走 Gi/o 这一路：门一开，神经元就安静下来、少放递质，像一齐踩下刹车。",
      fact: "三种阿片受体都偶联 Gi/o：让神经元更难兴奋、减少递质释放" },
    { title: "μ 和 δ：把痛信号调小", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["痛信号", "变小"], pill2: ["μ", "在末梢上"],
      text: "痛觉从身体传到脊髓，由痛觉神经末梢放出谷氨酸，把信号交给往大脑走的神经元。这些末梢上装着 μ 门。内啡肽或吗啡一插进来，末梢的钙通道被关小，谷氨酸放得少了，往上传的痛信号也跟着变小。δ 受体也能止痛，还可能和情绪有关，不过研究还在进行。",
      fact: "μ 受体在脊髓和脑内多处减弱痛觉传递，是阿片类镇痛的主要靶点" },
    { title: "μ 在中脑：松开多巴胺的刹车", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["μ", "按住 GABA"], pill2: ["多巴胺", "去抑制 ↑"],
      text: "为什么阿片会让人欣快？在中脑的腹侧被盖区，多巴胺神经元平时被旁边的 GABA 中间神经元踩着刹车，而 μ 门恰好装在这位刹车员身上。阿片一来，刹车员被按得安静下来，多巴胺神经元就松了绑，往伏隔核放出更多多巴胺，带来强烈的奖赏感。按住“踩刹车的人”，这种办法叫去抑制。",
      fact: "μ 激活抑制 VTA 的 GABA 中间神经元 → 多巴胺神经元去抑制 → 伏隔核多巴胺增加" },
    { title: "κ：强啡肽带来的坏心情", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["κ", "强啡肽"], pill2: ["多巴胺", "释放 ↓"],
      text: "κ 门的作用刚好相反。压力大的时候，伏隔核里的强啡肽放得更多，它们按下多巴胺末梢上的 κ 门，多巴胺就少放了。结果不是快乐，而是不快、烦躁、心里发堵。长期压力或反复使用成瘾物质后，κ 系统可能被调高，这也许是戒断时特别难受、容易复发的原因之一。",
      fact: "强啡肽作用于 κ 受体，减少伏隔核多巴胺释放，带来不快和烦躁" },
    { title: "脑干：呼吸被调慢", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["μ", "在呼吸中枢"], pill2: ["呼吸", "变慢 ↓"],
      text: "脑干里有一群负责打拍子的神经元，指挥我们一呼一吸，这里也装着 μ 门。阿片越多，被占上的 μ 门越多，拍子就越慢、越浅，严重时呼吸会停下来，这就是阿片过量致命的原因；和酒精、镇静药一起用更危险。肠道里也有 μ 门，被打开后肠子变慢，所以阿片常常带来便秘。",
      fact: "呼吸抑制是阿片过量致死的主要原因；和酒精、苯二氮䓬类合用风险更高" },
    { title: "开满、开一半、不开", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["丁丙诺啡", "天花板"], pill2: ["纳洛酮", "挤下来"],
      text: "同一扇 μ 门，不同的药开法不同。吗啡、芬太尼、美沙酮是完全激动剂，量越多，门开得越大。丁丙诺啡是部分激动剂，而且抓得很牢，门最多只开到一部分，再加量效果也不再往上走，这叫天花板效应，呼吸抑制的风险也更低。纳洛酮和纳曲酮是拮抗剂，坐进门里却不开门，还能把别的阿片挤下来。",
      fact: "完全激动剂开到最大；丁丙诺啡有天花板效应；纳洛酮能把阿片从 μ 受体上挤下来" },
    { title: "耐受：门被收进屋里", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["μ 门", "变少"], pill2: ["同样的量", "效果 ↓"],
      text: "μ 门被反复、长时间地打开后，细胞会自我保护：先给门贴上标记，让它和 G 蛋白脱钩，这叫脱敏；再把一部分门收进细胞里，这叫内化。门变少、变迟钝，同样的量效果变弱，这就是耐受。停用一段时间后耐受会下降，这时再按以前的量使用，很容易过量。受体怎样增减，可以看《门变多还是变少》。",
      fact: "耐受来自 μ 受体的脱敏和内化；停用后耐受下降，再用旧量可能过量" },
  ];

  const C = Object.assign({}, Anima.C, { mu: "#f7a8c0", de: "#a9d8ee", ka: "#c8b8f5", term: "#ffe6d6", post: "#fbeaf0", vta: "#fff3e8", nac: "#ffe3ea" });
  const PEP = {
    end: { who: "neuron", hair: "#ffc94d", eye: "#c88600", cloth: "#fff1b8", tag: "内啡肽", acc: "star" },
    enk: { who: "neuron", hair: "#f28ca5", eye: "#c25577", cloth: "#ffe0ea", tag: "脑啡肽", style: "bob" },
    dyn: { who: "neuron", hair: "#7a8ba6", eye: "#4d5f80", cloth: "#dde3ee", tag: "强啡肽", style: "long" },
  };
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  const win = (a, b) => lt > a && lt < b;
  const P = (k, extra) => Object.assign({}, PEP[k], extra);
  // 呼吸波形：每 0.04 秒记一个点
  const wave = []; let acc = 0, phase = 0;
  function breathRate() {
    const occ = cur === 4 ? [prog(2, 1), prog(4.5, 1), prog(7, 1)].reduce((a, b) => a + b, 0) / 3 : 0;
    return { occ, f: 0.55 * (1 - occ * 0.7), amp: 1 - occ * 0.65 };
  }
  function update(dt) {
    lt = Anima.sceneTime;
    const b = breathRate();
    phase += dt * b.f * Math.PI * 2;
    acc += dt;
    while (acc > 0.04) { acc -= 0.04; wave.push(Math.sin(phase) * b.amp); if (wave.length > 200) wave.shift(); }
  }

  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function meter(x, y, w, v, label, color) {
    const h = H * 0.03;
    text(label, x - fz(0.024) * 0.4, y, fz(0.024), C.ink, "right");
    rrect(x, y - h / 2, w, h, h / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    if (v > 0.01) { rrect(x, y - h / 2, w * clamp(v, 0, 1), h, h / 2); ctx.fillStyle = color; ctx.fill(); outline(1.3); ctx.stroke(); }
  }
  function bg(top, bottom, seed) { Anima.wash(top, bottom); Anima.bokeh(6, "#ffd6e0", 0.6, seed); Anima.petals(6, 0.35, seed + 3); }

  // ---------- 第 1 幕：三种阿片肽和三扇门 ----------
  function famView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff7f0", "#fbeef7", 11);
    const post = H * 0.76, rs = H * 0.065, cs = H * (nw ? 0.048 : 0.052), th = H * 0.3;
    const calm = prog(6, 2);
    Anima.postMembrane(post, C.post, { face: false });
    Anima.terminal(W * 0.5, 0, Math.min(W * 0.84, H * 1.5), th, "#ffe8d6");
    for (let k = 0; k < 5; k++) Anima.vesicle(W * 0.5 + (k - 2) * Math.min(W * 0.12, H * 0.22), th * (0.62 + (k % 2) * 0.14), H * 0.032, ["#ffc94d", "#f28ca5", "#7a8ba6"][k % 3], 4, k * 3);
    const D = [["μ", C.mu, "round", "end"], ["δ", C.de, "tri", "enk"], ["κ", C.ka, "square", "dyn"]];
    const X = [W * 0.22, W * 0.5, W * 0.78];
    D.forEach((d, i) => {
      const p = prog(1 + i * 1.2, 2);
      const r = Anima.receptor(X[i], post, rs, d[1], p >= 1 ? 1 : 0, { shape: d[2] });
      plate(d[0] + " 受体", X[i], post + rs * 0.9, mix(d[1], "#ffffff", 0.5), fz(0.03));
      const fx0 = W * 0.5 + (i - 1) * Math.min(W * 0.2, H * 0.36);
      chara(lerp(fx0, r.site.x, p), lerp(th + cs * 3.2, r.site.y + cs * 0.25, p) - Math.sin(p * Math.PI) * H * 0.04, cs, P(d[3], { walk: p < 1 ? time * 9 : null, eyes: p >= 1 ? "happy" : "open", arms: p >= 1 ? "up" : "down", mouth: p >= 1 ? "grin" : "smile", dir: i === 2 ? -1 : 1, alpha: clamp(p * 4, 0, 1) }));
      // Gi/o：门开以后，下面的神经元安静下来
      if (p >= 1) {
        const gy = nw ? H * 0.905 : post + (H - post) * 0.3; // 手机上受体名牌的字大，挪到更下面
        ctx.save(); ctx.globalAlpha *= calm;
        text("安静 ↓", X[i], gy + H * 0.02, fz(0.028), "#8f84e0");
        ctx.restore();
      }
    });
    const fy = post + (H - post) * 0.55, fx = nw ? W * 0.08 : W * 0.06;
    face(fx, fy, H * 0.06, calm > 0.5 ? 1 : 0.3);
    if (calm > 0.5) emote("note", fx + H * 0.05, fy - H * 0.05, H * 0.03);
    else { ctx.save(); ctx.globalAlpha *= 1 - calm; Anima.bolt(fx + H * 0.06, fy - H * 0.04, H * 0.02, 1); ctx.restore(); }
    callout("gio", lt > (nw ? 8.3 : 6.3), X[1] + W * 0.05, post + H * 0.14, nw ? W * 0.5 : W * 0.66, nw ? H * 0.42 : H, "Gi/o：神经元安静、少放递质");
    say("pair", win(4.5, nw ? 8 : 9.5), X[0] + cs, post - rs * 1.62 - cs * 3, nw ? W * 0.34 : W * 0.34, H * 0.42, "我们都是身体自己做的阿片～", "say");
    ctx.restore();
  }

  // ---------- 第 2、4 幕：突触特写（脊髓止痛 / 伏隔核里的 κ） ----------
  function synView(a) {
    const nw = Anima.narrow, pain = cur !== 3;
    ctx.save(); ctx.globalAlpha *= a;
    bg(pain ? "#fff6ef" : "#f4f1fb", pain ? "#fdeef3" : "#eef0f7", 21);
    const cx = W * (nw ? 0.52 : 0.5), tw = Math.min(W * (nw ? 0.56 : 0.46), H * 0.95), th = H * 0.42, post = H * 0.78, cs = H * 0.038;
    const bz = (u, p0, p1, p2, p3) => (1 - u) * (1 - u) * (1 - u) * p0 + 3 * (1 - u) * (1 - u) * u * p1 + 3 * (1 - u) * u * u * p2 + u * u * u * p3;
    const ex = bz(0.35, cx - tw / 2, cx - tw / 2, cx - tw * 0.3, cx), ey = bz(0.35, th * 0.62, th * 1.02, th, th);
    const bind = pain ? prog(3, 1.8) : prog(4, 1.8) * (0.4 + 0.6 * prog(6, 2));
    const rate = 1 - bind * 0.65;
    const stress = pain ? 0 : prog(1, 2.5);
    // 突触后
    Anima.postMembrane(post, pain ? "#fde3ea" : "#e9e4f7", { face: false });
    const recX = [cx - tw * 0.28, cx, cx + tw * 0.28];
    const on = 0.3 + rate * 0.7;
    recX.forEach((x, i) => Anima.receptor(x, post, H * 0.045, pain ? "#ffd27a" : "#ffc2a0", on * (0.5 + 0.5 * Math.abs(Math.sin(time * 2 + i))), { shape: pain ? "square" : "round" }));
    // 往大脑方向的信号：痛信号 / 奖赏信号
    const sy = post + (H - post) * 0.5;
    if (pain) {
      ctx.save(); ctx.globalAlpha *= 0.35 + rate * 0.65;
      Anima.spark([[W * 0.08, sy], [W + 20, sy]], (time * 0.6) % 1, H * 0.018 * (0.5 + rate), C.bad);
      ctx.restore();
      sfx("痛！", W * 0.12, sy - H * 0.01, H * (0.035 + rate * 0.03), C.bad, -0.15, 0.4 + rate * 0.6);
      text("往大脑 →", W * 0.95, sy + H * 0.06, fz(0.024), C.soft, "right");
    } else {
      const fx = W * 0.1;
      face(fx, sy, H * 0.065, 1 - stress * 1.6);
      if (stress > 0.5) emote("gloom", fx, sy - H * 0.07, H * 0.035, stress);
    }
    // 末梢
    Anima.terminal(cx, 0, tw, th, pain ? C.term : "#ffe8d2");
    const who = pain ? "Glu" : "DA";
    for (let k = 0; k < 4; k++) Anima.vesicle(cx + (k - 1.5) * tw * 0.17, th * (0.6 + (k % 2) * 0.13), H * 0.034, Anima.CAST[who].hair, 4, k * 3);
    plate(pain ? "痛觉神经末梢（脊髓）" : "多巴胺末梢（伏隔核）", cx, Math.max(Anima.topSafe() + H * 0.03, th * 0.32), "#fff", fz(0.024));
    // 钙通道：离子进来的多少跟着 rate
    const chX2 = 2 * cx - bz(0.75, cx - tw / 2, cx - tw / 2, cx - tw * 0.3, cx);
    const chY = bz(0.75, th * 0.62, th * 1.02, th, th);
    Anima.receptor(chX2, chY, H * 0.028, "#c8f0d8", rate, { dir: -1, shape: "square" });
    for (let k = 0; k < 4; k++) {
      if (k >= Math.round(rate * 4)) continue;
      const t = (time * 0.6 + k / 4) % 1;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      Anima.ion(chX2 + (k - 1.5) * H * 0.025, lerp(chY + H * 0.1, chY - H * 0.05, t), H * 0.016, "Ca", "#c8f0d8");
      ctx.restore();
    }
    // 放出的递质
    for (let k = 0; k < 6; k++) {
      const ph = time * 0.35 + k / 6, cyc = Math.floor(ph), t = ph - cyc;
      if (rnd(cyc * 11 + k) > rate * 0.75) continue;
      const al = Math.min(1, t * 6, (1 - t) * 5);
      const x0 = cx + (k - 2.5) * tw * 0.06, x1 = recX[k % 3] + (k < 3 ? -1 : 1) * H * 0.05;
      chara(lerp(x0, x1, t), lerp(th + cs * 3, post - H * 0.01, t), cs * 0.75, { who, item: "letter", arms: "hold", eyes: "happy", walk: time * 9 + k, alpha: al, shadow: false });
    }
    // 受体：μ（痛）或 κ（伏隔核），装在末梢左下
    const rr = H * 0.042, rot = 0.55;
    ctx.save(); ctx.translate(ex, ey); ctx.rotate(rot);
    Anima.receptor(0, 0, rr, pain ? C.mu : C.ka, bind, { dir: -1, shape: pain ? "round" : "square" });
    ctx.restore();
    plate(pain ? "μ" : "κ", ex - rr * 1.7, ey - rr * 0.4, mix(pain ? C.mu : C.ka, "#fff", 0.5), fz(0.028));
    const site = [ex - Math.sin(rot) * rr * 1.62, ey + Math.cos(rot) * rr * 1.62], ks = cs * 0.85;
    const pb = pain ? prog(3, 1.8) : prog(4, 1.8);
    if (pb > 0) chara(lerp(pain ? -W * 0.05 : W * 0.2, site[0], pb), lerp(pain ? site[1] + ks * 3.1 : post, site[1] + ks * 3.1, pb), ks, P(pain ? "end" : "dyn", { walk: pb < 1 ? time * 9 : null, arms: pb >= 1 ? "up" : "down", eyes: pb >= 1 ? (pain ? "happy" : "angry") : "open", shadow: false }));
    // 伏隔核：压力让强啡肽放得更多
    if (!pain) {
      const cxx = W * (nw ? 0.87 : 0.86), cyy = Anima.topSafe() + H * 0.12, r = H * 0.07;
      ctx.save(); ctx.globalAlpha *= stress;
      const bumps = [[-0.8, 0.1, 0.55], [-0.3, -0.3, 0.7], [0.35, -0.25, 0.65], [0.85, 0.1, 0.5], [0, 0.2, 0.7]];
      ctx.beginPath(); for (const b of bumps) { ctx.moveTo(cxx + b[0] * r + b[2] * r, cyy + b[1] * r); ctx.arc(cxx + b[0] * r, cyy + b[1] * r, b[2] * r, 0, Math.PI * 2); }
      outline(3); ctx.stroke(); ctx.fillStyle = "#b8bfd4"; ctx.fill();
      text("压力", cxx, cyy + r * 0.05, fz(0.028), "#fff");
      ctx.restore();
      for (let k = 0; k < 3; k++) {
        const t = ((lt - 2) * 0.35 + k / 3) % 1;
        if (lt < 2 + k * 0.6) continue;
        ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * 0.9;
        chara(lerp(W * (0.35 + k * 0.12), cx + tw * 0.1, t * 0.4), lerp(post, th + H * 0.2, t), cs * 0.6, P("dyn", { tag: null, shadow: false, eyes: "angry", walk: time * 9 }));
        ctx.restore();
      }
    }
    // 标注
    callout("mu1", cur === 1 && win(3.5, 8), site[0], site[1], nw ? W * 0.25 : W * 0.16, post - H * (nw ? 0.08 : 0.16), nw ? "μ 门：内啡肽插进来" : "μ 门：内啡肽、吗啡插进来");
    callout("ca1", cur === 1 && lt > 5.5, chX2, chY + H * 0.06, nw ? W * 0.8 : W * 0.84, post - H * (nw ? 0.25 : 0.15), nw ? "钙通道关小" : "钙通道关小，谷氨酸少放");
    say("less1", cur === 1 && lt > 8.5, W * 0.14, sy - H * 0.04, nw ? W * 0.5 : W * 0.34, sy, "痛好像没那么厉害了～", "say");
    callout("ka1", cur === 3 && win(4.5, nw ? 8.4 : 9), site[0], site[1], nw ? W * 0.22 : W * 0.16, post - H * 0.16, "κ 门：强啡肽按下");
    callout("da1", cur === 3 && lt > 7, cx + tw * 0.2, th + H * 0.12, nw ? W * 0.78 : W * 0.8, post - H * 0.16, "多巴胺放得少了");
    say("bad1", cur === 3 && lt > (nw ? 9.2 : 8.5), W * 0.1, sy - H * 0.05, nw ? W * 0.46 : W * 0.26, sy, "心里好烦，提不起劲……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：腹侧被盖区的去抑制 ----------
  function vtaView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff8ef", "#fdeef3", 31);
    const gy = H * 0.86, s = H * (nw ? 0.056 : 0.065);
    const top = Anima.topSafe() + H * 0.02;
    rrect(W * 0.02, top, W * (nw ? 0.56 : 0.5), H * 0.97 - top, 20); ctx.fillStyle = alpha(C.vta, 0.9); ctx.fill(); outline(1.5); ctx.stroke();
    text("中脑 · 腹侧被盖区", W * 0.04, top + fz(0.026), fz(0.026), "#d0762a", "left");
    const nx = W * (nw ? 0.8 : 0.8), ny = H * 0.5, nr = H * 0.12;
    const opi = prog(2, 1.8), dis = prog(3.8, 1.5);
    // 伏隔核
    ctx.beginPath(); ctx.arc(nx, ny, nr, 0, Math.PI * 2); ctx.fillStyle = C.nac; ctx.fill(); outline(2); ctx.stroke();
    face(nx, ny + nr * 0.1, nr * 0.45, dis > 0.5 ? 1 : 0);
    text("伏隔核", nx, ny + nr + fz(0.026), fz(0.026), "#c25577");
    if (dis > 0.6) { sparkles(nx, ny, nr * 1.3, 5, dis, 3); Anima.heart(nx + nr * 0.9, ny - nr * 0.9 - Math.abs(Math.sin(time * 3)) * H * 0.02, H * 0.025, C.rose); }
    // 多巴胺通路
    const DAx = W * (nw ? 0.42 : 0.37), GBx = W * (nw ? 0.12 : 0.1);
    const rail = [[DAx + s, gy - s * 1.8], [DAx + s * 2, ny], [nx - nr, ny]];
    ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(rail[0][0], rail[0][1]); ctx.quadraticCurveTo(rail[1][0], rail[1][1], rail[2][0], rail[2][1]);
    ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.02; ctx.stroke(); ctx.strokeStyle = "#ffd2b0"; ctx.lineWidth = H * 0.013; ctx.stroke();
    const n = Math.round(1 + dis * 4);
    for (let k = 0; k < 5; k++) {
      if (k >= n) continue;
      const t = (time * 0.18 + k / 5) % 1, u = 1 - t;
      const x = u * u * rail[0][0] + 2 * u * t * rail[1][0] + t * t * rail[2][0], y = u * u * rail[0][1] + 2 * u * t * rail[1][1] + t * t * rail[2][1];
      chara(x, y + H * 0.01, s * 0.5, { who: "DA", item: "letter", arms: "hold", eyes: "happy", walk: time * 9 + k, shadow: false, alpha: Math.min(1, t * 8, (1 - t) * 8) });
    }
    // GABA 刹车员和多巴胺神经元
    const gray = opi;
    chara(GBx + s * 0.4, gy, s, { who: "GABA", eyes: gray > 0.5 ? "sleepy" : "angry", brow: gray > 0.5 ? null : "angry", arms: gray > 0.5 ? "down" : "fist", mouth: gray > 0.5 ? "flat" : "open", gray: gray * 0.6 });
    plate("GABA", GBx + s * 0.4, gy + fz(0.024) * 0.6, "#ece8ff", fz(0.024));
    chara(DAx, gy, s * 1.05, { who: "DA", eyes: dis > 0.5 ? "sparkle" : "sleepy", mouth: dis > 0.5 ? "grin" : "flat", arms: dis > 0.5 ? "up" : "down", gray: (1 - dis) * 0.4, jump: dis > 0.5 ? Math.abs(Math.sin(time * 5)) * 0.2 : 0 });
    plate("多巴胺", DAx, gy + fz(0.024) * 0.6, "#ffe6d2", fz(0.024));
    // 抑制线 + 刹车灯
    const bx = (GBx + DAx) / 2 + s * 0.3, by = gy - s * 3.9, br = H * 0.024, brk = 1 - opi;
    ctx.save(); ctx.setLineDash([5, 5]); ctx.strokeStyle = alpha("#8f86e2", 0.4 + brk * 0.6); ctx.lineWidth = Math.max(2, H * 0.005);
    ctx.beginPath(); ctx.moveTo(GBx + s, gy - s * 3); ctx.quadraticCurveTo(bx, by - s, DAx - s * 0.9, gy - s * 2.8); ctx.stroke(); ctx.restore();
    glow(bx, by, br * 2.4, "#ff8f9f", brk);
    ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.fillStyle = mix("#f2e6ea", "#ff7f93", brk); ctx.fill(); outline(1.5); ctx.stroke();
    text("刹", bx, by + 1, br * 1.05, "#fff");
    // GABA 身上的 μ 门
    const mx = GBx + s * 0.4, my = gy - s * 3.3, mr = H * 0.035;
    Anima.receptor(mx, my, mr, C.mu, opi, { shape: "round" });
    plate("μ", mx + mr * 1.6, my - mr * 0.2, mix(C.mu, "#fff", 0.5), fz(0.026));
    if (opi > 0) chara(lerp(mx - W * 0.1, mx, opi), my - mr * 1.62 - (1 - opi) * H * 0.1, s * 0.7, { who: "drug", hatColor: "#f7a8c0", tag: "阿片", eyes: opi >= 1 ? "happy" : "open", arms: opi >= 1 ? "up" : "down", walk: opi < 1 ? time * 9 : null, shadow: false });
    callout("gb", win(0.5, 3.5), GBx + s * 0.4, gy - s * 2, nw ? W * 0.3 : W * 0.28, H * 0.34, "GABA 刹车员按着多巴胺");
    callout("mu", win(3.5, 7.5), mx, my, nw ? W * 0.3 : W * 0.3, H * 0.34, "μ 门在刹车员身上");
    say("free", lt > 6, DAx, gy - s * 3.3, nw ? W * 0.26 : W * 0.3, nw ? H * 0.28 : H * 0.4, "刹车松开，冲呀！", "shout");
    say("yay", lt > 8, nx, ny - nr, nw ? W * 0.78 : W * 0.8, Anima.topSafe() + H * 0.08, "好开心！还想要！", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：脑干呼吸中枢 ----------
  function breathView(a) {
    const nw = Anima.narrow, b = breathRate();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#f3f8ff", "#fdf0f3", 41);
    const top = Anima.topSafe() + H * 0.02;
    const cy = H * 0.44, s = H * (nw ? 0.05 : 0.058);
    // 三位打拍子的神经元（站在圆台上），头顶有 μ 门
    const X = nw ? [W * 0.14, W * 0.32, W * 0.5] : [W * 0.14, W * 0.29, W * 0.44];
    const beat = Math.sin(phase) > 0;
    rrect(W * 0.03, top, X[2] - W * 0.03 + W * 0.1, H * 0.66 - top, 20); ctx.fillStyle = alpha("#fff1e6", 0.9); ctx.fill(); outline(1.5); ctx.stroke();
    text("脑干 · 呼吸中枢", W * 0.05, top + fz(0.026), fz(0.026), "#d0762a", "left");
    X.forEach((x, i) => {
      const o = prog(2 + i * 2.5, 1);
      const on = cur === 4 ? o : 0;
      const ry = cy - H * 0.03;
      Anima.receptor(x, ry, H * 0.03, C.mu, on, { shape: "round" });
      chara(x, cy + H * 0.12, s, { who: "neuron", arms: beat && on < 0.5 ? "up" : "down", eyes: on > 0.5 ? "sleepy" : "happy", mouth: on > 0.5 ? "flat" : "open", gray: on * 0.45, item: "star" });
      if (on > 0) chara(x, ry - H * 0.03 * 1.62 - (1 - on) * H * 0.08, s * 0.62, { who: "drug", hatColor: "#f7a8c0", eyes: "happy", arms: "up", shadow: false, alpha: on });
      if (on > 0.5) emote("zzz", x + s * 0.9, cy - s * 1.6, s * 0.6);
    });
    // 肺：跟着拍子鼓起
    const lx = W * (nw ? 0.8 : 0.74), ly = H * 0.42, lr = H * 0.14, inf = 0.82 + 0.18 * Math.sin(phase) * b.amp;
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.ellipse(lx + d * lr * 0.55, ly, lr * 0.48 * inf, lr * inf, d * 0.12, 0, Math.PI * 2); ctx.fillStyle = "#ffc9d3"; ctx.fill(); outline(2); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(lx, ly - lr * 1.5); ctx.lineTo(lx, ly - lr * 0.6); outline(H * 0.012); ctx.stroke();
    face(lx, ly + lr * 0.35, lr * 0.3, b.occ > 0.6 ? 0 : 1, false);
    // 呼吸波形
    const wy = H * 0.84, wh = H * 0.08, wx0 = W * 0.06, wx1 = W * 0.94;
    rrect(wx0, wy - wh * 1.3, wx1 - wx0, wh * 2.6, 14); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.strokeStyle = "#5c9fd0"; ctx.lineWidth = Math.max(2, H * 0.005); ctx.beginPath();
    wave.forEach((v, i) => { const x = lerp(wx0 + 10, wx1 - 10, i / 199), y = wy - v * wh; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
    ctx.stroke();
    text("呼吸", wx0 + fz(0.024) * 1.4, wy - wh * 1.3 - fz(0.024) * 0.8, fz(0.024), C.ink);
    callout("rc", cur === 4 && win(0.5, 4), X[1], cy - s * 2, nw ? W * 0.62 : W * 0.6, top + H * 0.08, "打拍子的神经元，指挥一呼一吸");
    callout("slow", cur === 4 && lt > 5, wx1 - W * 0.1, wy, nw ? W * 0.7 : W * 0.76, H * 0.64, "拍子越来越慢、越来越浅");
    ctx.restore();
  }

  // ---------- 第 6 幕：完全、部分、拮抗 ----------
  function cmpView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff8f2", "#f6effd", 51);
    const top = Anima.topSafe() + H * 0.03, gap = W * 0.025, cw = (W - gap * 4) / 3, ch = H * 0.97 - top;
    const T = [["完全激动剂", "吗啡", "#ffb36b"], ["部分激动剂", "丁丙诺啡", "#8fd3a8"], ["拮抗剂", "纳洛酮", "#8fc3ea"]];
    const dose = 1 + (lt > 3.5 ? 1 : 0) + (lt > 6 ? 1 : 0);
    const push = prog(6, 1.5);
    const lvl = [[0.4, 0.75, 1][dose - 1], [0.3, 0.42, 0.45][dose - 1], lt < 1 ? 0 : 1 - push];
    T.forEach((t, i) => {
      const x = gap + i * (cw + gap), mx = x + cw / 2;
      rrect(x, top, cw, ch, 18); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1.6); ctx.stroke();
      text(t[0], mx, top + fz(0.032) * 0.95, fz(0.032), C.ink);
      const my = top + ch * 0.58, rs = Math.min(H * 0.055, cw * 0.14), cs = Math.min(H * 0.04, cw * 0.09);
      ctx.fillStyle = "#fbe3ea"; ctx.fillRect(x + 2, my, cw - 4, top + ch - my - 2); outline(1.5); ctx.beginPath(); ctx.moveTo(x, my); ctx.lineTo(x + cw, my); ctx.stroke();
      const cap = lerp(0, 1, lvl[i]);
      const r = Anima.receptor(mx, my, rs, C.mu, cap, { shape: "round" });
      // 访客
      if (i < 2) {
        chara(mx, r.site.y + cs * 0.25, cs, { who: "drug", hatColor: t[2], tag: t[1], eyes: "happy", arms: lvl[i] > 0.6 ? "up" : "hug" });
        for (let k = 1; k < dose; k++) chara(mx + (k === 1 ? -1 : 1) * cw * 0.3, r.site.y + cs * 0.25 - k * 0, cs * 0.7, { who: "drug", hatColor: t[2], eyes: i === 1 ? "open" : "happy", arms: "down", walk: time * 7 + k, shadow: false });
      } else {
        const off = push;
        if (off < 1 && lt > 1) chara(mx + off * cw * 0.35, r.site.y + cs * 0.25 - Math.sin(off * Math.PI) * H * 0.1, cs, { who: "drug", hatColor: "#ffb36b", tag: "阿片", eyes: off > 0.1 ? "dizzy" : "happy", alpha: 1 - off * 0.6 });
        const nIn = prog(5, 1);
        if (nIn > 0) chara(lerp(x - cs, mx, nIn), r.site.y + cs * 0.25, cs, { who: "drug", hatColor: t[2], tag: t[1], eyes: "angry", arms: nIn >= 1 ? "shh" : "down", walk: nIn < 1 ? time * 9 : null });
        if (push > 0.05 && push < 0.9) sfx("挤！", mx + cw * 0.2, my - rs * 3, H * 0.045, C.skyDeep, 0.1, 1);
      }
      // 开门程度
      const bx = x + cw * 0.18, bw = cw * 0.64, by = my + (top + ch - my) * 0.45;
      rrect(bx, by, bw, H * 0.035, H * 0.017); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
      if (lvl[i] > 0.02) { rrect(bx, by, bw * lvl[i], H * 0.035, H * 0.017); ctx.fillStyle = C.mu; ctx.fill(); outline(1.3); ctx.stroke(); }
      text("门开 " + Math.round(lvl[i] * 100) + "%", mx, by + H * 0.07, fz(0.026), C.ink);
      if (i === 1) { ctx.save(); ctx.setLineDash([4, 4]); ctx.strokeStyle = C.bad; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(bx + bw * 0.45, by - H * 0.02); ctx.lineTo(bx + bw * 0.45, by + H * 0.055); ctx.stroke(); ctx.restore(); }
      if (i < 2) plate("剂量 ×" + dose, mx, top + ch * 0.2, "#fff6e6", fz(0.024));
    });
    const x1 = gap * 2 + cw;
    callout("ceil", lt > 7, x1 + cw * 0.18 + cw * 0.64 * 0.45, top + ch * 0.58 + (ch * 0.42) * 0.45, nw ? W * 0.5 : x1 + cw * 0.5, nw ? H * 0.93 : top + ch * 0.36, "天花板：加量也不再往上"); // 手机上放到卡片下方空处，别压住“剂量 ×3”和小人
    ctx.restore();
  }

  // ---------- 第 7 幕：脱敏和内化 ----------
  function tolView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff7f2", "#f2eefb", 61);
    const mem = H * 0.52, rs = H * 0.048, cs = H * 0.036, n = 5;
    ctx.fillStyle = "#fbe7ee"; ctx.fillRect(0, mem, W, H - mem);
    outline(2); ctx.beginPath(); ctx.moveTo(0, mem); ctx.lineTo(W, mem); ctx.stroke();
    text("细胞里面", W * 0.04, H * 0.95, fz(0.024), C.soft, "left");
    const eff = [];
    for (let i = 0; i < n; i++) {
      const x = W * (0.12 + i * 0.19), inter = i === 1 || i === 3;
      const tagT = i === 1 ? 2 : 3.2, sink = inter ? prog(tagT + 2, 2.5) : 0, tagged = inter && lt > tagT;
      const y = mem + sink * H * 0.3;
      if (sink > 0) { ctx.beginPath(); ctx.arc(x, y - rs * 0.7, rs * 1.9 * sink, 0, Math.PI * 2); ctx.fillStyle = alpha("#ffffff", 0.7); ctx.fill(); outline(1.4); ctx.stroke(); }
      const act = (tagged ? 0.25 : 1) * (0.7 + 0.3 * Math.sin(time * 2 + i));
      const r = Anima.receptor(x, y, rs, C.mu, act, { shape: "round" });
      eff.push(inter ? (tagged ? 0.25 : 1) * (1 - sink) : 1);
      if (sink < 0.3) chara(x, r.site.y + cs * 0.25, cs, { who: "drug", hatColor: "#f7a8c0", eyes: "happy", arms: "hug", alpha: 1 - sink * 3 });
      if (tagged) { const bx = x + rs * 0.9, by = y - rs * 0.8; ctx.beginPath(); ctx.arc(bx, by, rs * 0.32, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill(); outline(1.2); ctx.stroke(); text("!", bx, by + 1, rs * 0.4, C.ink); }
    }
    const e = eff.reduce((p, q) => p + q, 0) / n;
    meter(W * (nw ? 0.5 : 0.62), Anima.topSafe() + H * 0.06, W * (nw ? 0.42 : 0.3), e, "效果", C.mu);
    callout("tag", win(2.3, 5.5), W * 0.31 + rs * 0.9, mem - rs * 0.8, nw ? W * 0.5 : W * 0.3, nw ? H * 0.62 : H * 0.24, "贴上标记：和 G 蛋白脱钩（脱敏）");
    callout("in", lt > 5.5, W * 0.69, mem + H * 0.26, nw ? W * 0.5 : W * 0.5, H * 0.91, "收进细胞里（内化）");
    say("more", lt > 8.5, W * 0.88, mem - rs * 3.4, nw ? W * 0.5 : W * 0.6, nw ? H * 0.6 : H * 0.27, "同样的量，没以前管用了……", "think");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) famView(S.v0);
    if (S.v1 > 0.02) synView(S.v1);
    if (S.v2 > 0.02) vtaView(S.v2);
    if (S.v3 > 0.02) breathView(S.v3);
    if (S.v4 > 0.02) cmpView(S.v4);
    if (S.v5 > 0.02) tolView(S.v5);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#d06a8a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: 13, accent: "#e0809c",
    titleCard: { lines: ["μ、δ、κ：", "阿片受体三姐妹"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
