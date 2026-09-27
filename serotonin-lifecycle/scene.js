Anima.register("serotonin-lifecycle", {
    "title": "5-HT 的一生：从色氨酸出发",
    "tag": "精神病",
    "headline": "大脑里的 5-HT，为什么要【自己做】？",
    "lede": "身体里的 5-HT 大多待在肠道，可它过不了血脑屏障。大脑只好自己做：从食物里的色氨酸出发，挤过共用的入口，经过两站加工、装进囊泡，再从中缝核送往全脑。送完信以后，它被回收或分解；在松果体里，它还会变成褪黑素。",
    "summary": "5-HT 过不了血脑屏障；色氨酸和其他大中性氨基酸抢同一个入口；色氨酸羟化酶（TPH2，限速）→ 5-羟色氨酸 → 芳香族氨基酸脱羧酶 → 5-HT；VMAT2 装箱；中缝核投射全脑；SERT 回收，MAO-A 分解成 5-HIAA；松果体里变成褪黑素。",
    "chapter": "对应 Stahl《精神药理学精要》第 4 章 · 5-HT 的合成与终止",
    "footer": "",
    "canvasLabel": "色氨酸穿过血脑屏障、在 5-HT 神经元里被加工成 5-HT、送往全脑再被回收和分解的动画",
    "regions": ["brainstem"],
    "parts": ["psychosis"],
    "cast": ["5HT", "pump", "MAO"],
    "color": "#8fdcc4"
  }, () => {
  const CH = [
    { title: "肚子里的 5-HT 进不来", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, night: 0,
      pill: ["肠道", "九成以上"], pill2: ["屏障", "5-HT 不过"],
      text: "身体里的 5-HT，九成以上待在肠道里，帮忙管肠子的蠕动；血液里的 5-HT 也大多被血小板带着走。可是 5-HT 本身过不了血脑屏障，肚子里再多，也送不进大脑。所以大脑里用的 5-HT，得由脑子里的 5-HT 神经元自己做。原料是色氨酸，它能过这道屏障。",
      fact: "5-HT 不能通过血脑屏障，脑内的 5-HT 靠脑内神经元自己合成" },
    { title: "挤同一个入口", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, night: 0,
      pill: ["入口", "大家共用"], pill2: ["原料", "色氨酸"],
      text: "色氨酸是必需氨基酸，身体自己不会做，只能从食物里来。它进脑要走屏障上的一个入口：大中性氨基酸转运体。这个入口不是它专用的，亮氨酸、苯丙氨酸、酪氨酸等好几种氨基酸都来排队，别人越多，色氨酸越难挤进去。而且身体里大部分色氨酸本来就走另一条路，变成犬尿氨酸。",
      fact: "色氨酸要和其他大中性氨基酸竞争同一种转运体才能进入大脑" },
    { title: "第一站最慢：色氨酸羟化酶", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, night: 0,
      pill: ["限速", "TPH2"], pill2: ["产物", "5-HTP"],
      text: "进到 5-HT 神经元里的色氨酸，先遇到色氨酸羟化酶。它给色氨酸加上一个羟基，变成 5-羟色氨酸（5-HTP）。这一站做得最慢，是整条流水线的限速步骤。色氨酸羟化酶有两种：TPH1 主要在肠道等身体组织里，TPH2 在大脑的 5-HT 神经元里。",
      fact: "色氨酸羟化酶是 5-HT 合成的限速酶，脑内主要是 TPH2" },
    { title: "第二站：变成 5-HT，装箱", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, night: 0,
      pill: ["第二站", "脱羧酶"], pill2: ["装箱", "VMAT2"],
      text: "5-羟色氨酸马上被芳香族氨基酸脱羧酶剪掉一小段，变成 5-HT。这位师傅我们在《多巴胺的一生》里见过，多巴胺流水线的第二站也是它。做好的 5-HT 由 VMAT2 装进囊泡，存起来等着释放；装进囊泡，也免得在细胞里被单胺氧化酶分解掉。",
      fact: "芳香族氨基酸脱羧酶同时负责多巴胺和 5-HT 合成的第二步" },
    { title: "中缝核：送往全脑", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, night: 0,
      pill: ["老家", "中缝核"], pill2: ["去向", "几乎全脑"],
      text: "5-HT 神经元的家在脑干正中间的中缝核。它们人数不多，轴突却像一张大网，几乎通到大脑的每个角落：往上到皮层、纹状体、海马、下丘脑，往后到小脑，往下到脊髓。所以 5-HT 能同时影响情绪、睡眠、食欲、疼痛和动作。电信号一来，末梢就把囊泡里的 5-HT 放出去。",
      fact: "中缝核的 5-HT 神经元投射几乎遍及全脑和脊髓" },
    { title: "SERT 回收，MAO-A 分解", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, night: 0,
      pill: ["回收", "SERT"], pill2: ["分解", "MAO-A"],
      text: "送完信的 5-HT 要尽快离场。末梢上的 5-HT 转运体（SERT）把它拉回末梢，很多被重新装进囊泡再用；多出来的，交给单胺氧化酶 A（MAO-A）分解，变成 5-羟吲哚乙酸（5-HIAA），最后排出去。SSRI 堵住的，就是 SERT 这扇回收门。",
      fact: "5-HT 主要由 MAO-A 分解，代谢产物是 5-HIAA" },
    { title: "天黑以后：变成褪黑素", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, night: 1,
      pill: ["松果体", "夜里做"], pill2: ["产品", "褪黑素"],
      text: "5-HT 还是另一位角色的原料。在松果体里，天黑以后，5-HT 被两位师傅接力加工：先接上一个乙酰基，再接上一个甲基，就变成了褪黑素，它会告诉全身“夜晚到了”。白天光线一来，这条流水线就慢下来。褪黑素和生物钟的故事，可以回看《身体里的小时钟》。",
      fact: "褪黑素由松果体用 5-HT 合成，夜间分泌增多" },
  ];

  const C = Object.assign({}, Anima.C, { blood: "#ffb3bd", brain: "#efeafc", gut: "#ffe3d0", term: "#dff5ec", post: "#ffe3ec" });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, night: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  const TRP = { who: "neuron", hair: "#ffd27a", eye: "#c88600", cloth: "#fff3cf", style: "bob" };
  const HTP = { who: "neuron", hair: "#9ad8c0", eye: "#3f9f86", cloth: "#e8f8f0", style: "bob", hat: "beret", hatColor: "#cdeee0" };
  const OTH = { who: "neuron", hair: "#c9b8a8", eye: "#8a7560", cloth: "#f0ebe6", style: "short" };
  const NAS = { who: "5HT", hair: "#8fb8e0", eye: "#4a7fb0", hatColor: "#b8d4f0", label: "" };
  const MEL = { who: "neuron", hair: "#6b61c9", eye: "#4b40a0", cloth: "#e4e0ff", hat: "beret", hatColor: "#8f84e0", style: "long", acc: "star" };
  const TPH = { who: "neuron", hair: "#8f84e0", eye: "#5c52c4", cloth: "#e4e0ff", hat: "kerchief", hatColor: "#b8b0f0", style: "bun" };
  const AADC = { who: "neuron", hair: "#6fb9e0", eye: "#3a7fa8", cloth: "#dff1fb", hat: "kerchief", hatColor: "#a9d8ee", style: "short" };
  const W1 = { who: "neuron", hair: "#f29cc0", eye: "#cc5b8b", cloth: "#ffe1ee", hat: "kerchief", hatColor: "#f7b8d2", style: "bun" };
  const W2 = { who: "neuron", hair: "#b98ad8", eye: "#8a55b0", cloth: "#f0e0fb", hat: "kerchief", hatColor: "#d8b8ee", style: "short" };

  function plate(t, x, y, bg, fs) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function wall(x0, x1, y, h, gate) {
    const bw = h * 1.4;
    for (let r = 0; r < 2; r++) for (let x = x0 - (r ? bw / 2 : 0); x < x1; x += bw) {
      const bx = Math.max(x0, x), ex = Math.min(x1, x + bw - 3);
      if (gate && ex > gate[0] && bx < gate[1]) continue;
      if (ex - bx < 4) continue;
      rrect(bx, y + r * h / 2, ex - bx, h / 2 - 3, 4); ctx.fillStyle = "#f3d9c4"; ctx.fill(); outline(1.3); ctx.stroke();
    }
  }
  function river(y0, y1) {
    const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, "#ffd0d6"); g.addColorStop(1, C.blood);
    ctx.fillStyle = g; ctx.fillRect(-5, y0, W + 10, y1 - y0); outline(1.8);
    ctx.beginPath(); ctx.moveTo(0, y0); ctx.lineTo(W, y0); ctx.moveTo(0, y1); ctx.lineTo(W, y1); ctx.stroke();
    for (let k = 0; k < 7; k++) { const x = ((time * W * 0.05 + k * W / 6) % (W * 1.1)) - W * 0.05, y = y0 + (y1 - y0) * (0.3 + rnd(k) * 0.4); ctx.beginPath(); ctx.ellipse(x, y, H * 0.022, H * 0.013, 0, 0, Math.PI * 2); ctx.fillStyle = "#f7a0b0"; ctx.fill(); }
  }
  function arch(x, y, s, col, on) {
    const w = s * 3, h = s * 4;
    if (on > 0.02) glow(x, y - h * 0.5, s * 4, "#fff1b8", on);
    ctx.beginPath(); ctx.moveTo(x - w / 2, y); ctx.lineTo(x - w / 2, y - h + w / 2); ctx.arc(x, y - h + w / 2, w / 2, Math.PI, 0); ctx.lineTo(x + w / 2, y);
    ctx.lineTo(x + w * 0.3, y); ctx.lineTo(x + w * 0.3, y - h + w / 2); ctx.arc(x, y - h + w / 2, w * 0.3, 0, Math.PI, true); ctx.lineTo(x - w * 0.3, y); ctx.closePath();
    ctx.fillStyle = col; ctx.fill(); outline(1.8); ctx.stroke();
    return y - h;
  }

  // ---------- 第 1 幕：肠道、血液和屏障 ----------
  function bodyView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f2ff", "#fff1e6");
    const top = Anima.topSafe(), wy = H * (nw ? 0.4 : 0.36), wh = H * 0.07, r0 = wy + H * 0.1, r1 = wy + H * 0.24, s = H * 0.034;
    ctx.fillStyle = C.brain; ctx.fillRect(0, 0, W, wy);
    Anima.bokeh(5, "#ddd5fa", 0.8, 3);
    const gate = [W * 0.66, W * 0.72];
    wall(0, W, wy, wh, gate);
    river(r0, r1);
    // 肠道：弯弯的管子，里面挤满 5-HT
    const gy = H * 0.8, gx0 = W * 0.06, gx1 = W * (nw ? 0.6 : 0.52);
    ctx.lineCap = "round";
    ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.13; ctx.beginPath(); ctx.moveTo(gx0, gy); ctx.bezierCurveTo(gx0 + (gx1 - gx0) * 0.3, gy - H * 0.08, gx0 + (gx1 - gx0) * 0.7, gy + H * 0.08, gx1, gy); ctx.stroke();
    ctx.strokeStyle = C.gut; ctx.lineWidth = H * 0.12; ctx.stroke();
    for (let k = 0; k < (nw ? 5 : 7); k++) {
      const t = (k + 0.5) / (nw ? 5 : 7), x = lerp(gx0, gx1, t), y = gy + Math.sin(t * Math.PI * 2) * H * 0.03 + H * 0.045;
      chara(x, y, s * 0.8, { who: "5HT", eyes: "happy", shadow: false, bob: 0.6, seed: k });
    }
    text(nw ? "肠道" : "肠道：大部分 5-HT 在这里", (gx0 + gx1) / 2, H * 0.95, fz(0.026), "#c0661e");
    text("大脑", W * 0.04, wy - H * 0.05, fz(0.028), "#6b61c9", "left");
    text("血液", W * 0.97, r0 - H * 0.03, fz(0.024), "#b04a5c", "right");
    // 血液里的 5-HT 想往上走，被墙挡回
    const bx = W * (nw ? 0.3 : 0.32);
    const t = (lt * 0.4) % 1, up = Math.sin(Math.min(t, 0.5) * Math.PI) ;
    const hy = lerp(r1 - H * 0.01, wy + wh + s * 3.1, t < 0.5 ? ease(t * 2) : 1 - ease((t - 0.5) * 2));
    chara(bx, hy, s, { who: "5HT", eyes: t > 0.4 && t < 0.7 ? "x" : "open", mouth: t > 0.4 && t < 0.7 ? "wavy" : "smile", shadow: false, seed: 3 });
    if (t > 0.42 && t < 0.6) sfx("咚！", bx + s * 1.8, wy + wh + s * 0.5, fz(0.03), "#e8637a", -0.1, 1);
    // 色氨酸从门里过去
    for (let k = 0; k < 2; k++) {
      const u = (time * 0.18 + k * 0.5) % 1, x = lerp(W * 0.94, (gate[0] + gate[1]) / 2, clamp(u * 2, 0, 1));
      const y = u < 0.5 ? r1 - H * 0.01 : lerp(r1 - H * 0.01, wy * 0.72, (u - 0.5) * 2);
      chara(x, y, s * 0.95, Object.assign({}, TRP, { walk: time * 9 + k, eyes: "happy", alpha: Math.min(1, u * 8, (1 - u) * 6), shadow: false }));
    }
    // 脑子里的 5-HT 神经元
    const nx = W * (nw ? 0.4 : 0.45), ny = wy - H * 0.035;
    chara(nx, ny, s * 1.1, { who: "neuron", hair: "#62c9ab", cloth: "#dff5ec", arms: "hold", item: "star", eyes: "happy" });
    plate(nw ? "5-HT 神经元" : "脑里的 5-HT 神经元", nx + s * (nw ? 4.2 : 5.2), ny - s * 1.6, "#dff5ec", fz(0.022));
    callout("bbb", win(1.2, 6), W * 0.2, wy + wh * 0.5, W * 0.14, top + H * 0.04, "血脑屏障：挡住 5-HT");
    say("no", win(2.5, 7), bx, hy - s * 3, W * (nw ? 0.2 : 0.16), nw ? H * 0.7 : H * 0.2, "进不去呀～", "say");
    callout("trp", win(6, 9.5), (gate[0] + gate[1]) / 2, wy + wh * 0.5, W * (nw ? 0.72 : 0.8), H * 0.22, "色氨酸：可以进去");
    say("self", lt > 9.5, nx, ny - s * 3.4, W * (nw ? 0.74 : 0.24), nw ? H * 0.22 : top + H * 0.06, "那我们自己做！", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：共用的入口 ----------
  function gateView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f2ff", "#fff1e6");
    const wy = H * 0.42, wh = H * 0.08, s = H * (nw ? 0.036 : 0.04), gx = W * 0.5;
    ctx.fillStyle = C.brain; ctx.fillRect(0, 0, W, wy);
    const g = ctx.createLinearGradient(0, wy + wh, 0, H); g.addColorStop(0, "#ffe0e4"); g.addColorStop(1, "#ffd0d6");
    ctx.fillStyle = g; ctx.fillRect(0, wy + wh, W, H);
    wall(0, W, wy, wh, [gx - s * 1.6, gx + s * 1.6]);
    // 入口：一扇旋转门
    Anima.transporter(gx, wy + wh / 2, wh * 0.6, "#bfe8d6", time * 2, false);
    text("大脑", nw ? W * 0.96 : W * 0.04, nw ? wy - H * 0.04 : H * 0.3, fz(0.028), "#6b61c9", nw ? "right" : "left");
    text("血液", W * 0.04, H * 0.62, fz(0.026), "#b04a5c", "left");
    // 排队：从右下往门口
    const P = 1.3, ph = time / P, f = ph - Math.floor(ph), n0 = Math.floor(ph);
    const step = ease((f - 0.55) / 0.45), q = s * 2.1;
    const isT = (id) => id % 4 === 1;
    const slot = (k) => ({ x: gx + (k + 1) * q * 0.9, y: wy + wh + s * 3.4 + (k + 1) * q * 0.28 });
    for (let k = 6; k >= 0; k--) {
      const id = n0 + k + 1, p0 = slot(k), p1 = k ? slot(k - 1) : { x: gx, y: wy + wh + s * 3.1 };
      const x = lerp(p0.x, p1.x, step), y = lerp(p0.y, p1.y, step);
      if (x > W + s * 2) continue;
      chara(x, y, s, Object.assign({}, isT(id) ? TRP : OTH, { walk: step > 0 && step < 1 ? time * 9 + k : null, eyes: isT(id) ? "open" : "happy", mouth: isT(id) ? "wavy" : "smile", shadow: false, seed: id }));
    }
    // 刚进门的，往上走
    for (let j = 0; j < 3; j++) {
      const id = n0 - j, u = (f + j) / 3, x = gx + (isT(id) ? 1 : -1) * u * W * 0.22, y = wy - u * H * 0.06;
      chara(x, y, s * 0.95, Object.assign({}, isT(id) ? TRP : OTH, { walk: time * 9 + j, eyes: "happy", alpha: 1 - u, shadow: false, seed: id }));
    }
    plate(nw ? "去做 5-HT →" : "去 5-HT 神经元 →", gx + W * 0.28, nw ? wy - H * 0.14 : H * 0.12 + Anima.topSafe() * 0.5, "#dff5ec", fz(0.024));
    // 犬尿氨酸岔路（左下）
    const kx = W * (nw ? 0.22 : 0.2), ky = H * 0.8;
    rrect(kx - W * 0.1, ky - H * 0.05, W * 0.2, H * 0.1, 12); ctx.fillStyle = "#ffe6d6"; ctx.fill(); outline(1.6); ctx.stroke();
    text("犬尿氨酸", kx, ky, fz(0.026), "#c0661e");
    for (let k = 0; k < 3; k++) {
      const u = (time * 0.12 + k / 3) % 1, x = lerp(W * 0.46, kx + W * 0.06, u), y = lerp(H * 0.97, ky + H * 0.02, u) ;
      chara(x, y, s * 0.8, Object.assign({}, TRP, u > 0.7 ? { hair: "#f4a88a", cloth: "#ffe6d6" } : {}, { walk: time * 9 + k, eyes: "happy", alpha: Math.min(1, u * 6, (1 - u) * 6), shadow: false, dir: -1 }));
    }
    callout("lat", win(1, nw ? 5 : 7.5), gx, wy + wh / 2, gx - W * 0.2, H * 0.2, nw ? "大家共用的入口" : "大中性氨基酸转运体：大家共用的入口");
    say("crowd", nw ? win(5, 10) : lt > 4, slot(2).x, slot(2).y - s * 3.1, W * (nw ? 0.3 : 0.8), H * (nw ? 0.22 : 0.54), "人好多，好难挤进去～", "think");
    callout("kyn", lt > 8.5, kx, ky - H * 0.05, nw ? W * 0.24 : kx + W * 0.04, H * (nw ? 0.64 : 0.26), nw ? "大部分走这条路" : "大部分色氨酸走这条路");
    ctx.restore();
  }

  // ---------- 第 3、4、7 幕：流水线 ----------
  function lineView(a) {
    const nw = Anima.narrow, N = S.night, mel = cur === 6;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash(Anima.mix("#f2fbf7", "#3e3a6e", N), Anima.mix("#fdf0f4", "#6b61a0", N));
    if (N > 0.02) {
      ctx.save(); ctx.globalAlpha *= N;
      for (let k = 0; k < 14; k++) sparkle(W * rnd(k + 3), H * (0.15 + rnd(k + 9) * 0.35), H * 0.012, 0.5 + 0.5 * Math.sin(time * 2 + k));
      const mx = W * 0.86, my = Anima.topSafe() + H * 0.1, mr = H * 0.06;
      glow(mx, my, mr * 2.5, "#fff6c2", 0.8);
      ctx.beginPath(); ctx.arc(mx, my, mr, 0, Math.PI * 2); ctx.fillStyle = "#fff4c2"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.beginPath(); ctx.arc(mx + mr * 0.45, my - mr * 0.2, mr * 0.85, 0, Math.PI * 2); ctx.fillStyle = Anima.mix("#f2fbf7", "#3e3a6e", N); ctx.fill();
      ctx.restore();
    } else Anima.bokeh(6, "#cdeee0", 0.7, 13);
    const by = H * (nw ? 0.66 : 0.7), s = H * (nw ? 0.042 : 0.048), bh = H * 0.03;
    const X = { in: W * 0.05, a: W * (nw ? 0.34 : 0.36), b: W * (nw ? 0.66 : 0.62), end: W * 0.87 };
    rrect(W * 0.03, by, W * 0.9, bh, bh / 2); ctx.fillStyle = mel ? "#e4e0f5" : "#e6f4ee"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.save(); rrect(W * 0.03, by, W * 0.9, bh, bh / 2); ctx.clip(); ctx.strokeStyle = "rgba(109,87,96,0.25)"; ctx.lineWidth = 2;
    for (let x = W * 0.03 - ((time * W * 0.04) % (H * 0.04)) + H * 0.04; x < W * 0.93; x += H * 0.04) { ctx.beginPath(); ctx.moveTo(x, by + 3); ctx.lineTo(x - H * 0.012, by + bh - 3); ctx.stroke(); }
    ctx.restore();
    const M = mel ? [Object.assign({}, { who: "5HT" }), NAS, MEL] : [TRP, HTP, { who: "5HT" }];
    const names = mel ? ["5-HT", nw ? "N-乙酰-5-HT" : "N-乙酰-5-HT", "褪黑素"] : ["色氨酸", "5-羟色氨酸", "5-HT"];
    const stn = mel ? ["① 接乙酰基", "② 接甲基"] : [nw ? "色氨酸羟化酶" : "色氨酸羟化酶（TPH2）", nw ? "脱羧酶" : "芳香族氨基酸脱羧酶"];
    // 终点
    const vr = H * 0.07, vx = X.end + vr * 0.4, vy = by - vr * 0.9;
    if (!mel) { Anima.vesicle(vx, vy, vr, Anima.CAST["5HT"].hair, 6, 4); rrect(vx - vr * 1.12, vy - vr * 0.25, vr * 0.26, vr * 0.5, vr * 0.1); ctx.fillStyle = "#b8e6cf"; ctx.fill(); outline(1.4); ctx.stroke(); }
    const P = 1.7, ph = time / P, f = ph - Math.floor(ph), v = W * 0.055;
    const stepF = ease((f - 0.6) / 0.4);
    const topA = arch(X.a, by, s, mel ? "#ffe1ee" : "#e4e0ff", cur === 2 || mel ? 1 : 0.2);
    const topB = arch(X.b, by, s, mel ? "#f0e0fb" : "#dff1fb", cur === 3 || mel ? 1 : 0.2);
    const q = s * 1.9;
    for (let k = 0; k < 8; k++) {
      const x = X.a - (k + 1 - stepF) * q;
      if (x < X.in) continue;
      const al = k === 0 ? 1 - ease((stepF - 0.6) / 0.4) : Math.min(1, (x - X.in) / (s * 2));
      const busy = !mel && k < 3;
      chara(x, by, s * 0.85, Object.assign({}, M[0], { alpha: al, shadow: false, eyes: busy ? "open" : "happy", mouth: busy ? "wavy" : "smile", walk: stepF > 0 && stepF < 1 ? time * 10 + k : null, seed: k }));
    }
    const endX = mel ? W * 0.95 : vx - vr * 0.6;
    for (let j = 0; j < 7; j++) {
      const x = X.a + (f + j) * v * P;
      if (x > endX) continue;
      const m = x > X.b ? 2 : 1, al = Math.min(1, (x - X.a) / (s * 1.2), (endX - x) / (s * 1.5));
      const y = mel && m === 2 ? by - Math.max(0, x - X.b - s * 2) * 0.35 : by;
      chara(x, y, s * 0.85, Object.assign({}, M[m], { alpha: al, walk: time * 9 + j, eyes: m === 2 ? (mel ? "sleepy" : "sparkle") : "happy", mouth: "smile", shadow: false, seed: j + 20 }));
    }
    const busyA = f < 0.25;
    chara(X.a, topA, s, Object.assign({}, mel ? W1 : TPH, { arms: busyA ? "up" : "hold", eyes: !mel && cur === 2 && !busyA ? "sleepy" : "open", mouth: busyA ? "open" : "smile", item: busyA ? "star" : null }));
    chara(X.b, topB, s, Object.assign({}, mel ? W2 : AADC, { arms: "hold", item: mel ? "star" : "scissors", eyes: "happy", mouth: "grin" }));
    const r1 = by + bh + fz(0.026) * 1.2, r2 = r1 + fz(0.026) * 1.9;
    plate(names[0], (X.in + X.a) / 2, r1, mel ? "#dff5ec" : "#fff3cf");
    plate(names[1], (X.a + X.b) / 2, r1, mel ? "#e0ecfa" : "#e8f8f0");
    plate(names[2], (X.b + (mel ? W * 0.95 : vx)) / 2, r1, mel ? "#e4e0ff" : "#dff5ec");
    plate(stn[0], X.a, r2, mel ? "#ffe1ee" : "#eeeaff");
    plate(stn[1], X.b, r2, mel ? "#f0e0fb" : "#e6f4fc");
    if (cur === 2) text("VMAT2", vx, vy - vr - fz(0.022) * 0.8, fz(0.022), "#3f8f6c");
    const hy = nw ? H * 0.19 : H * 0.2;
    callout("tph", cur === 2 && win(1.2, 5.5), X.a, topA - s * 1.5, X.a - W * 0.06, hy, "限速步骤：最慢的一站");
    say("wait", cur === 2 && win(5.5, 9), X.a - q * 2, by - s * 3, X.a - W * 0.16, hy, "排队排队～", "think");
    say("hyd", cur === 2 && lt > 9, X.a, topA - s * 3, X.a + W * 0.18, hy, "加个羟基，下一位～", "say");
    callout("aadc", cur === 3 && win(1, 6), X.b, topB - s * 1.5, X.b - W * 0.06, hy, "剪掉一小段，变成 5-HT");
    callout("vmat", cur === 3 && lt > 6, vx - vr, vy, vx - W * 0.1, hy, "VMAT2：装进囊泡");
    say("same", cur === 3 && lt > 3.5 && lt < 9, X.b, topB - s * 3, X.b + W * 0.1, H * (nw ? 0.4 : 0.36), nw ? "做多巴胺也是我～" : "做多巴胺的第二站也是我～", "say");
    callout("pin", mel && lt > 1, X.a, topA - s * 1.2, W * 0.35, hy, "松果体：夜里加班");
    say("night", mel && lt > 6, W * 0.9, by - H * 0.3, W * (nw ? 0.62 : 0.66), H * 0.36, "天黑啦，该睡觉咯～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：中缝核投射全脑 ----------
  function mapView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4fbf8", "#fdf0f4"); Anima.petals(8, 0.4, 44);
    const top = Anima.topSafe();
    const cx = W * 0.47, cy = top + (H - top) * 0.42, rx = Math.min(W * 0.36, (H - top) * 0.7), ry = (H - top) * 0.34;
    // 大脑、小脑、脑干、脊髓
    const stemX = cx + rx * 0.2, stemY = cy + ry * 0.55;
    ctx.fillStyle = "#ffe3ea"; outline(2);
    ctx.beginPath(); rrect(stemX - rx * 0.08, stemY - ry * 0.2, rx * 0.16, H - stemY + ry * 0.2 + 10, rx * 0.08); ctx.fillStyle = "#f7d8e4"; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx + rx * 0.55, cy + ry * 0.6, rx * 0.28, ry * 0.3, 0, 0, Math.PI * 2); ctx.fillStyle = "#f3e0f0"; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff0f3"; ctx.fill(); outline(2.2); ctx.stroke();
    ctx.strokeStyle = "rgba(242,140,165,0.3)"; ctx.lineWidth = 2;
    for (let k = 0; k < 5; k++) { ctx.beginPath(); ctx.arc(cx - rx * 0.4 + k * rx * 0.2, cy - ry * 0.35, ry * 0.25, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke(); }
    // 中缝核
    const R = { x: stemX, y: stemY + ry * 0.05 };
    glow(R.x, R.y, H * 0.06, "#8fdcc4", 0.8 + 0.2 * Math.sin(time * 3));
    ctx.beginPath(); ctx.arc(R.x, R.y, H * 0.022, 0, Math.PI * 2); ctx.fillStyle = "#62c9ab"; ctx.fill(); outline(1.6); ctx.stroke();
    const T = [
      ["前额叶", cx - rx * 0.85, cy - ry * 0.05], ["皮层", cx - rx * 0.1, cy - ry * 0.75], ["纹状体", cx - rx * 0.28, cy + ry * 0.08],
      ["海马", cx + rx * 0.02, cy + ry * 0.42], ["下丘脑", cx - rx * 0.28, cy + ry * 0.62], ["小脑", cx + rx * 0.62, cy + ry * 0.62], ["脊髓", stemX, H * 0.97],
    ];
    const show = (i) => prog(0.8 + i * 0.7, 1);
    T.forEach((t, i) => {
      const k = show(i); if (k < 0.02) return;
      const mx = (R.x + t[1]) / 2 + (i === 6 ? 0 : -ry * 0.1), my = Math.min(R.y, t[2]) - ry * 0.15;
      ctx.save(); ctx.globalAlpha *= k; ctx.strokeStyle = "#3fa88c"; ctx.lineWidth = Math.max(2, H * 0.006); ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(R.x, R.y); if (i === 6) ctx.lineTo(t[1], t[2]); else ctx.quadraticCurveTo(mx, my, t[1], t[2]); ctx.stroke();
      ctx.beginPath(); ctx.arc(t[1], t[2], H * 0.012, 0, Math.PI * 2); ctx.fillStyle = "#8fdcc4"; ctx.fill(); ctx.stroke();
      // 小快递员
      if (i !== 6) { const u = (time * 0.3 + i * 0.37) % 1, uu = 1 - u; const px = uu * uu * R.x + 2 * uu * u * mx + u * u * t[1], py = uu * uu * R.y + 2 * uu * u * my + u * u * t[2]; chara(px, py + H * 0.012, H * 0.018, { who: "5HT", shadow: false, bob: 0, alpha: Math.min(1, u * 6, uu * 6) }); }
      ctx.restore();
    });
    // 名字：放在点的外侧
    T.forEach((t, i) => {
      const k = show(i); if (k < 0.5) return;
      const dx = i === 0 ? -1 : i === 5 ? 1 : 0;
      const lx = t[1] + dx * fz(0.024) * 2.4, ly = i === 6 ? t[2] - fz(0.024) * 1.2 : t[2] + (i === 1 ? -1 : 1) * fz(0.024) * 1.1;
      text(t[0], i === 6 ? t[1] + fz(0.024) * 2.2 : lx, ly, fz(0.024), "#2f7f6a");
    });
    callout("raphe", lt > 0.5, R.x, R.y, W * (nw ? 0.84 : 0.86), H * (nw ? 0.5 : 0.45), "中缝核：5-HT 的老家");
    say("net", lt > 7, R.x, R.y, W * (nw ? 0.8 : 0.84), H * (nw ? 0.28 : 0.24), nw ? "到处都送得到！" : "情绪、睡眠、食欲，都有我一份！", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：回收和分解 ----------
  const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
  function synView(a) {
    const nw = Anima.narrow;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#f2fbf7"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cdeee0", 0.7, 61);
    const cx = W * 0.44, tw = Math.min(W * 0.62, H * 1.1), th = H * 0.5, post = H * 0.84, s = H * 0.03;
    const ty = (x) => { const dx = Math.abs(x - cx); let best = th, bd = 1e9; for (let i = 0; i <= 30; i++) { const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, th * 1.02, th, th); if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; } } return best; };
    Anima.postMembrane(post, C.post, {});
    Anima.terminal(cx, 0, tw, th, C.term);
    const SX = cx + tw * 0.4, SY = ty(SX);
    Anima.transporter(SX, SY, H * 0.04, "#9fc3ea", time * 2.5, false);
    const V = { x: cx - tw * 0.22, y: th * 0.66 }, M = { x: cx + tw * 0.2, y: th * 0.8 };
    Anima.vesicle(V.x, V.y, H * 0.055, "#62c9ab", 6, 1);
    Anima.vesicle(cx - tw * 0.04, th * 0.5, H * 0.045, "#62c9ab", 5, 5);
    chara(M.x, M.y, s * 1.2, { who: "MAO", label: "MAO-A", arms: "hold", item: "broom", eyes: "happy", dir: -1, tag: "MAO-A" });
    const RX = [cx - tw * 0.2, cx + tw * 0.05];
    const act = [0, 0];
    for (let c = 0; c < 6; c++) {
      const t = (time * 0.13 + c / 6) % 1, ri = c % 2, rx = cx - tw * 0.08 + ri * tw * 0.1, ry = ty(rx) + s * 3.2, site = { x: RX[ri], y: post - H * 0.075 };
      let x, y, al = Math.min(1, t * 12), eyes = "happy", mouth = "smile", sc = 1;
      if (t < 0.2) { const k = ease(t / 0.2); x = lerp(rx, site.x, k); y = lerp(ry, site.y, k); }
      else if (t < 0.3) { x = site.x; y = site.y; act[ri] = 1; eyes = "sparkle"; }
      else if (t < 0.55) { const k = ease((t - 0.3) / 0.25); x = lerp(site.x, SX, k); y = lerp(site.y, SY + H * 0.1, k) - Math.sin(k * Math.PI) * H * 0.04; }
      else {
        const k = ease((t - 0.55) / 0.45), toM = c % 3 === 0, d = toM ? { x: M.x + s * 1.8, y: M.y } : V;
        x = lerp(SX, d.x, k); y = lerp(SY - H * 0.02, d.y + s * 1.5, k); sc = 0.85;
        if (!toM && k > 0.8) al = (1 - k) / 0.2;
        if (toM && k > 0.95) al = 0;
      }
      if (al > 0.02) chara(x, y, s * sc, { who: "5HT", walk: time * 9 + c, eyes, mouth, alpha: al, shadow: false, seed: c });
    }
    // 分解后的 5-HIAA：小小的灰色豆子飘出去
    for (let k = 0; k < 2; k++) {
      const u = (time * 0.13 + k * 0.5) % 1, x = lerp(M.x - s * 1.5, cx + tw * 0.62, u), y = lerp(M.y - s * 3, th * 0.3, u);
      ctx.save(); ctx.globalAlpha *= Math.min(1, u * 5, (1 - u) * 3);
      ctx.beginPath(); ctx.ellipse(x, y, H * 0.03, H * 0.02, 0.3, 0, Math.PI * 2); ctx.fillStyle = "#d8d0c8"; ctx.fill(); outline(1.3); ctx.stroke();
      ctx.restore();
    }
    text("5-HIAA", cx + tw * 0.62, th * 0.3 + H * 0.05, fz(0.024), "#8a7560");
    RX.forEach((x, i) => Anima.receptor(x, post, H * 0.042, "#8fdcc4", act[i], { shape: "tri" }));
    callout("sert", lt > 1 && lt < 7, SX, SY + H * 0.03, SX + W * 0.02, H * 0.62, "SERT：5-HT 回收门");
    say("reuse", lt > 3 && lt < 7.5, V.x, V.y - H * 0.06, V.x - W * 0.04, th * 0.24, nw ? "回箱再用～" : "回到箱子里，下次再用～", "say");
    callout("mao", lt > 7.5, M.x, M.y - s * 3.2, M.x - W * 0.14, th * 0.22, "MAO-A：分解成 5-HIAA");
    say("ssri", lt > 9, SX, SY + H * 0.04, W * (nw ? 0.74 : 0.8), H * 0.66, "SSRI 就是来堵我这扇门的～", "think");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#2f9f86", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#8f84e0", true);
  }
  function draw() {
    ctx.fillStyle = "#f7fbf9"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) bodyView(S.v0);
    if (S.v1 > 0.02) gateView(S.v1);
    if (S.v2 > 0.02) lineView(S.v2);
    if (S.v3 > 0.02) mapView(S.v3);
    if (S.v4 > 0.02) synView(S.v4);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#62c9ab",
    titleCard: { lines: ["5-HT 的一生", "从色氨酸出发"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
