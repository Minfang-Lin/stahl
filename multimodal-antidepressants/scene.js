Anima.register("multimodal-antidepressants", {
    "title": "不止堵门：多模式抗抑郁药",
    "tag": "抗抑郁药",
    "headline": "不止堵门，还会【挑门】：多模式抗抑郁药",
    "lede": "SSRI 只做一件事：堵住 5-HT 的回收门。维拉佐酮和伏硫西汀在堵门之外，还亲自去几扇 5-HT 受体门前，有的挡住、有的按下、有的只按一半。挑的门不同，药物的“性格”和副作用也跟着不同。",
    "summary": "维拉佐酮：SERT 抑制＋5-HT1A 部分激动（SPARI）；伏硫西汀：SERT 抑制＋挡 5-HT3/7/1D、激动 1A、部分激动 1B，松开前额叶的 GABA 刹车；恶心仍然常见。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · 多模式抗抑郁药",
    "footer": "抗抑郁药的选择、换药和停药都要和医生商量；如果出现伤害自己的想法，请马上告诉身边的人并尽快就医。",
    "canvasLabel": "维拉佐酮和伏硫西汀两位药物访客一边堵住 5-HT 回收门、一边挑选几扇 5-HT 受体门挡住或按下的动画",
    "regions": ["synapse", "pfc"],
    "parts": ["mood"],
    "cast": ["drug", "5HT", "GABA", "Glu", "NE", "DA", "ACh"],
    "color": "#7cc6c9"
  }, () => {
  const CH = [
    { title: "只堵门，还是也挑门", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["SSRI", "只堵门"], pill2: ["多模式", "堵门＋挑门"],
      text: "SSRI 做的事很单纯：堵住 5-HT 的回收门，让突触里的 5-HT 变多。可 5-HT 一多，就会去敲所有的 5-HT 门，有的门带来疗效，有的门带来恶心、失眠等麻烦。多模式抗抑郁药想多做一步：一边堵回收门，一边亲自走到某几扇 5-HT 门前，该挡的挡住，该按的按下。",
      fact: "多模式＝抑制 5-HT 转运体，同时直接作用于一个或几个 5-HT 受体" },
    { title: "维拉佐酮：堵门＋半按 1A", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["维拉佐酮", "SPARI"], pill2: ["5-HT1A", "按一半"],
      text: "维拉佐酮一手堵住回收门，一手坐到 5-HT1A 受体上，只把门推开一半，这叫部分激动，所以它又叫 SPARI。“回收站暂停营业”里讲过：胞体上的 5-HT1A 是刹车，刚用药时被多出来的 5-HT 猛踩，要几周才慢慢适应。理论上，药物自己先半踩着它，刹车可能更快适应，但是否真的起效更快，还没有定论。",
      fact: "SPARI：5-HT 部分激动剂/再摄取抑制剂，代表药是维拉佐酮" },
    { title: "伏硫西汀：一把钥匙，好几个动作", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["伏硫西汀", "多模式"], pill2: ["受体", "5 种"],
      text: "伏硫西汀手里的活更多。它同样堵住回收门，同时挑了五扇 5-HT 门：挡住 5-HT3、5-HT7 和 5-HT1D，把 5-HT1A 按下去，把 5-HT1B 按一半。这些门装在不同的神经元上，有的管 5-HT 自己放多少，有的长在旁边的 GABA 刹车员身上。所以它不只是让 5-HT 变多，还在调整 5-HT 敲门以后的结果。",
      fact: "伏硫西汀：抑制 SERT；拮抗 5-HT3、5-HT7、5-HT1D；激动 5-HT1A；部分激动 5-HT1B" },
    { title: "松开前额叶的刹车", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["挡 3、7", "松刹车"], pill2: ["前额叶", "递质↑"],
      text: "看前额叶里的一个例子。GABA 刹车员身上装着 5-HT3 和 5-HT7 受体，5-HT 一按，刹车员就去压住旁边的锥体神经元。伏硫西汀挡住这两扇门，刹车松开，锥体神经元活跃起来，下游可能放出更多去甲肾上腺素、多巴胺、乙酰胆碱和谷氨酸。有人认为这和改善注意力差、思考变慢等认知症状有关，不过仍在研究中。",
      fact: "挡住 GABA 中间神经元上的 5-HT3/5-HT7 → 锥体神经元去抑制（与认知的关系仍在研究）" },
    { title: "恶心仍然常见", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["恶心", "仍常见"], pill2: ["多在", "头几周"],
      text: "堵回收门的药有一个共同的早期麻烦：恶心。身体里大部分 5-HT 在肠道，回收门一堵，肠道里的 5-HT 也变多，去敲迷走神经上的 5-HT3 门，恶心的信号就传到脑干。伏硫西汀虽然会挡 5-HT3，恶心仍是它最常见的副作用；维拉佐酮还可能引起腹泻。这些不适多在头几周明显，之后常会减轻，有不舒服就告诉医生。",
      fact: "人体大部分 5-HT 在肠道；恶心是这两种药最常见的副作用之一" },
    { title: "同样堵门，各有挑法", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["起效", "仍需几周"], pill2: ["选药", "听医生"],
      text: "把三位访客放在一起看：SSRI 只堵回收门；维拉佐酮堵门，再半按 5-HT1A；伏硫西汀堵门，再挑好几扇 5-HT 门。挑的门不同，药物的“性格”和副作用就不太一样，但它们都需要几周才慢慢起效。哪一种更适合，要看症状、身体情况和以前的用药经历，请和医生一起商量，不要自己换药或停药。",
      fact: "多模式药同样需要数周起效；换药、停药都要在医生指导下进行" },
  ];

  const C = Object.assign({}, Anima.C, { mm: "#7cc6c9", mmD: "#3f9ea3", vil: "#ffb08a", vor: "#9fb0f0" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0, ph = 0, brake = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const SSRI = { who: "drug", label: "SSRI", hatColor: "#8fdcc4", hatColor2: "#ffffff" };
  const VIL = { who: "drug", label: "", hatColor: C.vil, hatColor2: "#fff3ea" };
  const VOR = { who: "drug", label: "", hatColor: C.vor, hatColor2: "#eef1ff" };
  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function brakeTarget() {
    if (cur !== 1) return 0;
    if (lt < 4.2) return 0;
    if (lt < 7.6) return 1;
    return 0.5;
  }
  function update(dt) {
    lt = Anima.sceneTime;
    brake = lerp(brake, brakeTarget(), 1 - Math.exp(-dt * 2.5));
    ph += dt * 0.5 * (1 - brake * 0.7);
  }

  // ---------- 小工具 ----------
  function plate(t, x, y, bg, fs, x0, x1) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + (x0 === undefined ? 4 : x0), (x1 === undefined ? W - 4 : x1) - w / 2);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return w;
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
  }
  function cardTitle(x, y, w, title, color) { plate(title, x + w / 2, y, color, fz(0.03), x + 2, x + w - 2); }
  function bg(top, bot, seed) {
    Anima.wash(top, bot);
    Anima.bokeh(6, "#cdeff0", 0.6, seed);
    Anima.petals(6, 0.35, seed + 3);
  }
  function pedal(x, y, r, press) {
    ctx.save(); ctx.translate(x, y);
    rrect(-r * 0.9, r * 0.55, r * 1.8, r * 0.35, r * 0.15); ctx.fillStyle = "#e9e1e6"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.rotate(-0.55 + press * 0.45);
    rrect(-r * 0.55, -r * 0.95, r * 1.1, r * 1.5, r * 0.3); ctx.fillStyle = "#ff8f9f"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.rotate(0.55 - press * 0.45);
    text("刹", 0, -r * 0.15, r * 0.8, "#fff");
    ctx.restore();
    if (press > 0.5) { ctx.save(); ctx.globalAlpha *= press - 0.5; glow(x, y, r * 2.2, "#ff8f9f", 1); ctx.restore(); }
  }
  // 横着的一段膜；up=true 时膜上方是“屋里”
  function band(x0, x1, y, h, color) {
    ctx.fillStyle = color; ctx.fillRect(x0, y, x1 - x0, h);
    outline(1.5); ctx.beginPath(); ctx.moveTo(x0, h > 0 ? y + h : y); ctx.lineTo(x1, h > 0 ? y + h : y); ctx.stroke();
  }
  // 药物坐进门：p 0～1 走过去；act "shh" 挡住 / "up" 按下 / "hold" 按一半
  function sitDrug(opt, fromX, fromY, site, s, p, act, extra) {
    if (p <= 0) return;
    const x = lerp(fromX, site.x, p), y = p < 1 ? lerp(fromY, site.y + s * 0.2, p) : site.y + s * 0.2;
    chara(x, y, s, Object.assign({}, opt, { walk: p < 1 ? time * 9 : null, arms: p >= 1 ? act : "down", eyes: act === "up" && p >= 1 ? "sparkle" : "happy", shadow: false }, extra || {}));
  }

  // ---------- 第 1 幕：只堵门 vs 也挑门 ----------
  function compareView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f3fbfb", "#fdf4f6", 11);
    const top = Anima.topSafe() + H * 0.06, ch = H - top - H * 0.04, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const cards = [{ x: gap, y: top, w: cw, h: ch }, { x: gap * 2 + cw, y: top, w: cw, h: ch }];
    card(cards[0].x, top, cw, ch);
    card(cards[1].x, top, cw, ch);
    const more = prog(2.4, 2), cs = Math.min(H * 0.032, cw * 0.06), ts = Math.min(H * 0.045, cw * 0.08);
    const marks = [];
    cards.forEach((c, j) => {
      const preY = c.y + c.h * 0.3, postY = c.y + c.h * 0.84;
      ctx.save(); rrect(c.x, c.y, c.w, c.h, 18); ctx.clip();
      ctx.fillStyle = "#ffeede"; ctx.fillRect(c.x, c.y, c.w, preY - c.y);
      ctx.fillStyle = "#ffe8ef"; ctx.fillRect(c.x, postY, c.w, c.h);
      ctx.restore();
      outline(1.5); ctx.beginPath(); ctx.moveTo(c.x, preY); ctx.lineTo(c.x + c.w, preY); ctx.moveTo(c.x, postY); ctx.lineTo(c.x + c.w, postY); ctx.stroke();
      cardTitle(c.x, c.y, c.w, j ? (nw ? "多模式：还挑门" : "多模式：堵门＋挑门") : (nw ? "SSRI：只堵门" : "SSRI：只堵回收门"), j ? "#dfe4fb" : "#dff5ec");
      const tx = c.x + c.w * (nw ? 0.25 : 0.5);
      Anima.transporter(tx, preY, ts, "#8fdcc4", prog(0.6, 1.4) >= 1 ? 0 : time * 2.5, false);
      const dp = prog(0.6, 1.4);
      const doors = [["5-HT1A", nw ? "1A" : "5-HT1A", 0.2, "round"], ["5-HT3", nw ? "3" : "5-HT3", 0.5, "square"], ["5-HT7", nw ? "7" : "5-HT7", 0.8, "tri"]];
      const R = doors.map((d, i) => {
        let act = 0.25 + more * 0.75 * (0.8 + 0.2 * Math.sin(time * 4 + i));
        if (j === 1 && i > 0) act *= 1 - prog(4.6 + (i - 1) * 1.1, 1.2);
        return Anima.receptor(c.x + c.w * d[2], postY, ts * 0.95, "#cdf1e4", act, { shape: d[3] });
      });
      doors.forEach((d, i) => plate(d[1], c.x + c.w * d[2], postY + H * 0.055, "#fff", fz(0.024), c.x, c.x + c.w));
      // 5-HT 快递员在间隙里
      for (let k = 0; k < 5; k++) {
        const al = k < 2 ? 1 : clamp(more * 3 - (k - 2), 0, 1);
        if (al <= 0.02) continue;
        const x = c.x + c.w * (0.14 + k * 0.18) + Math.sin(time * 0.8 + k * 2) * c.w * 0.03;
        const y = (preY + postY) / 2 + cs * 1.6 + Math.cos(time + k * 1.3) * (postY - preY) * 0.1;
        chara(x, y, cs, { who: "5HT", eyes: "happy", arms: "hold", item: "letter", alpha: al, shadow: false, seed: k + j * 7 });
        if (j === 0 && k === 1) marks.push([x, y - cs * 3.1]);
      }
      sitDrug(j ? VOR : SSRI, tx + c.w * 0.4, preY + H * 0.1, { x: tx, y: preY + ts * 0.7 }, cs * 1.05, dp, "shh", j === 0 ? { tag: "SSRI" } : { tag: nw ? "多模式" : "多模式药" });
      if (j === 1) {
        sitDrug(VOR, c.x + c.w * 0.5, preY + H * 0.12, R[1].site, cs * 0.9, prog(4.6, 1.2), "shh");
        sitDrug(VOR, c.x + c.w * 0.6, preY + H * 0.12, R[2].site, cs * 0.9, prog(5.7, 1.2), "shh");
        sitDrug(VOR, c.x + c.w * 0.4, preY + H * 0.12, R[0].site, cs * 0.9, prog(7.4, 1.2), "up");
        marks.push([R[1].site.x, R[1].site.y], [R[0].site.x, R[0].site.y]);
      } else if (more > 0.5) Anima.sparkles(c.x + c.w * 0.5, postY - H * 0.05, c.w * 0.4, 4, more, 9);
    });
    say("m0-s", lt > 3.6 && lt < 9, marks[0][0], marks[0][1], cards[0].x + cw * (nw ? 0.7 : 0.5), nw ? top + ch * 0.14 : top + ch * 0.44, nw ? "都去敲～" : "每扇门都去敲～", "say");
    callout("m0-c1", lt > 5.6 && lt < 8.6, marks[1][0], marks[1][1] - cs, cards[1].x + cw * (nw ? 0.62 : 0.72), nw ? top + ch * 0.19 : top + ch * 0.45, "该挡的挡住");
    callout("m0-c2", lt > 8.8, marks[2][0], marks[2][1] - cs, cards[1].x + cw * (nw ? 0.62 : 0.4), nw ? top + ch * 0.19 : top + ch * 0.45, "该按的按下");
    ctx.restore();
  }

  // ---------- 第 2 幕：维拉佐酮 ----------
  function vilaView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fff8f2", "#f2fbfa", 21);
    const sx = W * 0.2, sy = H * (nw ? 0.56 : 0.6), r = H * (nw ? 0.1 : 0.11);
    const bx = W * 0.78, by = H * (nw ? 0.38 : 0.4), br = H * 0.08;
    // 轴突
    const ax = [[sx + r * 0.95, sy - r * 0.2], [W * 0.5, sy - r * 0.2], [bx - br * 0.95, by + br * 0.2]];
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    for (const [w, col] of [[H * 0.022, C.line], [H * 0.016, "#bfeee0"]]) { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ax.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); }
    for (let k = 0; k < 2; k++) Anima.spark(ax, (ph + k * 0.5) % 1, H * 0.02, C.mintDeep);
    // 胞体
    const gray = brake * 0.35;
    const g = ctx.createRadialGradient(sx - r * 0.3, sy - r * 0.3, r * 0.1, sx, sy, r);
    g.addColorStop(0, "#ffffff"); g.addColorStop(1, mix("#bfeee0", "#d8d8d8", gray));
    ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    face(sx, sy + r * 0.1, r * 0.4, brake > 0.7 ? 0 : 1);
    // 末梢
    const g2 = ctx.createRadialGradient(bx - br * 0.3, by - br * 0.3, br * 0.1, bx, by, br);
    g2.addColorStop(0, "#ffffff"); g2.addColorStop(1, "#ffe0cc");
    ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.fillStyle = g2; ctx.fill(); outline(2); ctx.stroke();
    const ts = H * 0.04, cs = H * 0.032;
    Anima.transporter(bx, by + br, ts, "#8fdcc4", prog(1.2, 1.5) >= 1 ? 0 : time * 2.5, false);
    // 5-HT1A 在胞体顶上
    const rx = sx + r * 0.35, ry = sy - r * 0.94;
    const R = Anima.receptor(rx, ry, H * 0.034, "#cdf1e4", brake, { shape: "round" });
    pedal(sx - r * 0.95, sy - r * 1.25, H * 0.034, brake);
    plate(nw ? "5-HT 神经元" : "中缝核的 5-HT 神经元", sx, sy + r + H * 0.05, "#dff5ec", fz(0.026));
    plate("末梢", bx + br * 1.6, by - br * 0.6, "#ffe6d6", fz(0.024));
    // 多出来的 5-HT 回到胞体附近踩刹车
    const e5 = prog(3.8, 1.4), push = prog(7.4, 1);
    for (let k = 0; k < 2; k++) {
      if (e5 <= 0) break;
      const fx = rx + (k ? 1 : -1) * r * (0.9 + k * 0.3) + W * 0.05;
      const onSite = k === 0 && e5 >= 1 && push < 0.3;
      const x = onSite ? R.site.x : lerp(fx, rx + r * (k ? 1.4 : 0.9), e5) + push * W * 0.03 * (k ? 1 : 0.5);
      const y = onSite ? R.site.y + cs * 0.2 : ry - H * 0.005;
      chara(x, y, cs * 0.85, { who: "5HT", alpha: e5, eyes: push > 0.5 ? "open" : "happy", arms: onSite ? "fist" : "down", shadow: false, seed: k });
    }
    sitDrug(VIL, bx + W * 0.1, by + br + H * 0.2, { x: bx, y: by + br + ts * 0.7 }, cs, prog(1.2, 1.5), "shh", { tag: "维拉佐酮" });
    sitDrug(VIL, rx + W * 0.12, ry, R.site, cs * 0.85, prog(7.4, 1), "hold");
    // 适应的进度：只是理论上的比较
    const k = prog(9.6, 0.8);
    if (k > 0) {
      ctx.save(); ctx.globalAlpha *= k;
      const x0 = W * (nw ? 0.42 : 0.46), x1 = W * 0.95, fs = fz(0.024);
      const rows = [[nw ? "只堵门" : "只堵门：刹车几周才适应", 0.3, "#8fdcc4"], [nw ? "堵门＋半按" : "堵门＋半按 1A：理论上更快？", 0.62, C.vil]];
      rows.forEach((rw, i) => {
        const y = H * (nw ? 0.72 : 0.72) + i * H * 0.12;
        text(rw[0], x0, y - H * 0.035, fs, C.ink, "left");
        rrect(x0, y - H * 0.01, x1 - x0, H * 0.03, H * 0.015); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
        rrect(x0, y - H * 0.01, (x1 - x0) * rw[1] * ease((lt - 9.6) / 2.4), H * 0.03, H * 0.015); ctx.fillStyle = rw[2]; ctx.fill();
      });
      ctx.restore();
    }
    callout("v1-1a", lt > 0.8 && lt < 3.8, R.site.x, R.site.y, sx + W * 0.2, H * (nw ? 0.28 : 0.26), nw ? "5-HT1A：胞体的刹车" : "5-HT1A：胞体上的刹车");
    callout("v1-half", lt > 8.2 && lt < 11, R.site.x, R.site.y, sx + W * 0.22, H * (nw ? 0.28 : 0.26), "维拉佐酮：只按一半");
    say("v1-s", lt > 5 && lt < 7.6, sx + r * 0.5, sy - r * 0.2, sx + W * 0.26, H * (nw ? 0.3 : 0.3), "刹车被踩住，放电变慢……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：伏硫西汀的五扇门 ----------
  const VD = [
    ["5-HT3", "3", "挡住", "shh", "square"], ["5-HT7", "7", "挡住", "shh", "tri"], ["5-HT1D", "1D", "挡住", "shh", "round"],
    ["5-HT1A", "1A", "按下", "up", "round"], ["5-HT1B", "1B", "按一半", "hold", "round"],
  ];
  function vortView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    const g0 = ctx.createLinearGradient(0, 0, 0, H);
    g0.addColorStop(0, "#fff4ef"); g0.addColorStop(0.5, "#eef8fc"); g0.addColorStop(1, "#f3f0ff");
    ctx.fillStyle = g0; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#dfe4fb", 0.8, 31);
    const cx = W * 0.5, tw = Math.min(W * 0.46, H * 0.85), th = H * 0.3, post = H * 0.7;
    Anima.postMembrane(post, "#efeafd", {});
    const s = H * (nw ? 0.04 : 0.045), cs = H * (nw ? 0.03 : 0.033);
    const xs = VD.map((d, i) => W * (0.12 + i * 0.19));
    const arr = VD.map((d, i) => prog(2.6 + i * 1.3, 1.1));
    const R = VD.map((d, i) => {
      const base = 0.35 + 0.15 * Math.sin(time * 3 + i), p = arr[i];
      const act = d[3] === "shh" ? base * (1 - p) : d[3] === "up" ? lerp(base, 1, p) : lerp(base, 0.55, p);
      return Anima.receptor(xs[i], post, s, "#cdf1e4", act, { shape: d[4] });
    });
    Anima.terminal(cx, 0, tw, th, "#ffe6d6");
    const ts = H * 0.048;
    Anima.transporter(cx, th - ts * 0.1, ts, "#8fdcc4", prog(0.6, 1.4) >= 1 ? 0 : time * 2.5, false);
    // 5-HT 快递员
    for (let k = 0; k < 4; k++) {
      const x = W * (0.2 + k * 0.2) + Math.sin(time * 0.7 + k * 2) * W * 0.03;
      const y = post - H * 0.12 + Math.cos(time * 0.9 + k) * H * 0.03;
      if (Math.abs(x - cx) < W * 0.06) continue;
      chara(x, y, cs * 0.8, { who: "5HT", eyes: "happy", arms: "hold", item: "letter", shadow: false, seed: k, alpha: 0.9 });
    }
    // 门下方的名字和动作
    VD.forEach((d, i) => {
      plate(nw ? d[1] : d[0], xs[i], post + H * 0.06, "#fff", fz(0.026));
      const p = arr[i];
      if (p > 0.6) {
        ctx.save(); ctx.globalAlpha *= (p - 0.6) / 0.4;
        plate(d[2], xs[i], post + H * 0.14, d[3] === "shh" ? "#ffe3e6" : d[3] === "up" ? "#dff5ec" : "#fff1d6", fz(0.026));
        ctx.restore();
      }
    });
    if (!nw && lt > 9) text("（这五扇门其实装在不同的神经元上，这里排成一排来看）", cx, H * 0.95, fz(0.022), C.soft);
    sitDrug(VOR, cx - W * 0.25, th + H * 0.12, { x: cx, y: th + ts * 0.6 }, cs, prog(0.6, 1.4), "shh", { tag: "伏硫西汀" });
    VD.forEach((d, i) => sitDrug(VOR, lerp(cx, xs[i], 0.4), th + H * 0.18, R[i].site, cs * 0.9, arr[i], d[3]));
    callout("v2-sert", lt > 1.8 && lt < 5, cx + ts, th, cx + tw * 0.62, th + H * 0.05, "先堵住回收门");
    say("v2-s", lt > 8.8, cx, th + ts + cs * 0.4, nw ? W * 0.17 : cx + W * 0.24, nw ? H * 0.36 : th + H * 0.14, nw ? "好几个动作～" : "一把钥匙，好几个动作～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：松开 GABA 刹车 ----------
  function pyramid(x, y, r, gray, glowA) {
    if (glowA > 0) glow(x, y, r * 2.2, C.gold, glowA * 0.8);
    ctx.lineCap = "round";
    for (const [w, col] of [[r * 0.22, C.line], [r * 0.13, "#ffd27a"]]) {
      ctx.strokeStyle = mix(col, "#cccccc", col === C.line ? 0 : gray); ctx.lineWidth = w;
      ctx.beginPath(); ctx.moveTo(x, y - r * 0.8); ctx.lineTo(x, y - r * 2); ctx.moveTo(x, y - r * 1.6); ctx.lineTo(x - r * 0.6, y - r * 2.2); ctx.moveTo(x, y - r * 1.6); ctx.lineTo(x + r * 0.6, y - r * 2.2); ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(x, y - r); ctx.lineTo(x + r * 0.95, y + r * 0.7); ctx.lineTo(x - r * 0.95, y + r * 0.7); ctx.closePath();
    ctx.fillStyle = mix("#fff0b3", "#dddddd", gray); ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.2, r * 0.36, gray > 0.5 ? 0 : 1);
  }
  function pfcView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f7f3ff", "#fff7ef", 41);
    const s = H * (nw ? 0.045 : 0.05), cs = H * 0.032;
    // GABA 中间神经元（平台）和两扇门
    const px0 = W * 0.05, px1 = W * 0.46, py = H * 0.74;
    rrect(px0, py, px1 - px0, H * 0.13, H * 0.05); ctx.fillStyle = "#ece8ff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(nw ? "GABA 中间神经元" : "GABA 中间神经元（刹车员）", (px0 + px1) / 2, py + H * 0.075, fz(0.024), C.lavDeep);
    const d3 = W * 0.11, d7 = W * 0.21, rs = H * 0.036;
    const blk = [prog(3.4, 1.2), prog(4.3, 1.2)];
    const on5 = prog(0.4, 1.8);
    const act = [on5 * (1 - blk[0]), on5 * (1 - blk[1])];
    const R3 = Anima.receptor(d3, py, rs, "#cdf1e4", act[0], { shape: "square" });
    const R7 = Anima.receptor(d7, py, rs, "#cdf1e4", act[1], { shape: "tri" });
    plate("3", d3 - rs * 1.4, py - rs * 0.8, "#fff", fz(0.022));
    plate("7", d7 + rs * 1.4, py - rs * 0.8, "#fff", fz(0.022));
    const brk = Math.max(act[0], act[1]);
    const gx = W * 0.36;
    // 刹车线
    const qx = W * (nw ? 0.64 : 0.66), qy = H * 0.52, qr = H * 0.075;
    ctx.save(); ctx.setLineDash([6, 6]); ctx.strokeStyle = alpha(C.lavDeep, 0.3 + brk * 0.7); ctx.lineWidth = Math.max(2, H * 0.006);
    ctx.beginPath(); ctx.moveTo(gx + s * 0.8, py - s * 2.2); ctx.quadraticCurveTo(W * 0.5, qy - H * 0.02, qx - qr * 0.95, qy + qr * 0.3); ctx.stroke(); ctx.restore();
    pedal(W * 0.52, qy - H * 0.1, H * 0.034, brk);
    chara(gx, py, s, { who: "GABA", eyes: brk > 0.5 ? "angry" : "sleepy", brow: brk > 0.5 ? "angry" : null, arms: brk > 0.5 ? "fist" : "down", mouth: brk > 0.5 ? "flat" : "o" });
    if (brk < 0.3 && lt > 6) emote("zzz", gx + s, py - s * 3.4, s * 0.6);
    // 5-HT 从左边来，按门；被挤开
    [[R3, 0], [R7, 1]].forEach((q) => {
      const Rr = q[0], k = q[1], b = blk[k];
      const x = b > 0 ? lerp(Rr.site.x, Rr.site.x - W * 0.04 - k * W * 0.03, b) : lerp(-W * 0.05, Rr.site.x, on5);
      const y = b > 0 ? lerp(Rr.site.y + cs * 0.2, py - H * 0.12, b) : on5 < 1 ? py - H * 0.12 : Rr.site.y + cs * 0.2;
      chara(x, y, cs, { who: "5HT", walk: on5 < 1 || (b > 0 && b < 1) ? time * 9 : null, arms: on5 >= 1 && b < 0.5 ? "up" : "down", eyes: b > 0.5 ? "wide" : "happy", shadow: false, seed: k });
      sitDrug(VOR, Rr.site.x + W * 0.12, py - H * 0.12, Rr.site, cs, b, "shh", k === 0 && b >= 1 && !nw ? { tag: "伏硫西汀" } : null);
    });
    // 锥体神经元
    const free = prog(5.6, 1.2);
    pyramid(qx, qy, qr, (1 - free) * brk * 0.8 + (1 - free) * 0.2 * (1 - on5), free);
    plate(nw ? "锥体神经元" : "锥体神经元（谷氨酸）", qx, qy + qr + H * 0.045, "#fff6d6", fz(0.024));
    // 下游放出的递质
    const outs = [["NE", "去甲"], ["DA", "多巴胺"], ["ACh", "乙酰胆碱"], ["Glu", "谷氨酸"]];
    const ox = W * (nw ? 0.87 : 0.88);
    ctx.lineCap = "round"; ctx.strokeStyle = alpha(C.line, 0.6); ctx.lineWidth = Math.max(2, H * 0.006);
    ctx.beginPath(); ctx.moveTo(qx + qr * 0.6, qy + qr * 0.7); ctx.quadraticCurveTo(ox - W * 0.06, qy + qr * 1.2, ox - W * 0.04, H * 0.32); ctx.stroke();
    if (free > 0.3) Anima.spark([[qx + qr * 0.6, qy + qr * 0.7], [ox - W * 0.06, qy + qr * 0.9], [ox - W * 0.04, H * 0.32]], (time * 0.6) % 1, H * 0.018, C.gold);
    outs.forEach((o, i) => {
      const p = prog(6.6 + i * 0.7, 0.8);
      if (p <= 0) return;
      const x = ox + (i % 2 ? W * 0.045 : -W * 0.045), y = H * (0.42 + Math.floor(i / 2) * 0.19) + Math.sin(time * 2 + i) * H * 0.005;
      chara(x, y, cs * 0.9, { who: o[0], alpha: p, jump: (1 - p) * 0.5, eyes: "happy", arms: "up", shadow: false });
    });
    const k2 = prog(8.8, 0.8);
    if (k2 > 0) { ctx.save(); ctx.globalAlpha *= k2; plate(nw ? "下游递质↑" : "下游：NE、DA、ACh、Glu ↑", ox - W * (nw ? 0.02 : 0.06), H * 0.83, "#fff1b8", fz(0.026)); ctx.restore(); }
    say("v3-g", lt > 1.8 && lt < 4.2, gx, py - s * 3.2, gx + W * 0.1, H * 0.33, nw ? "踩刹车！" : "5-HT 来了，踩刹车！", "shout");
    say("v3-p", lt > 6.8 && lt < 10.2, qx, qy - qr * 2.2, qx - W * 0.16, H * 0.25, "刹车松了，轻快多了～", "say");
    callout("v3-q", lt > 10.4, qx, qy - qr, nw ? W * 0.45 : W * 0.4, H * 0.27, nw ? "和认知的关系仍在研究" : "和注意、思考等认知症状的关系仍在研究");
    ctx.restore();
  }

  // ---------- 第 5 幕：肠道里的 5-HT 和恶心 ----------
  function gutView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fff8f0", "#f4fbf6", 51);
    // 肠道：一段弯弯的管子
    const gx0 = W * 0.03, gx1 = W * 0.56, gy = H * 0.8, gh = H * 0.14;
    ctx.beginPath();
    for (let i = 0; i <= 40; i++) { const x = gx0 + (gx1 - gx0) * i / 40, y = gy - gh / 2 + Math.sin(i * 0.5 + time * 0.8) * H * 0.008; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    for (let i = 40; i >= 0; i--) { const x = gx0 + (gx1 - gx0) * i / 40, y = gy + gh / 2 + Math.sin(i * 0.5 + time * 0.8) * H * 0.008; ctx.lineTo(x, y); }
    ctx.closePath(); ctx.fillStyle = "#ffd9c7"; ctx.fill(); outline(1.8); ctx.stroke();
    text(nw ? "肠道" : "肠道（大部分 5-HT 在这里）", (gx0 + gx1) / 2, gy + 2, fz(0.024), "#b0663f");
    // 肠道里放 5-HT 的细胞，带回收门
    const ex = W * 0.14, ey = gy - gh / 2, er = H * 0.05, ts = H * 0.036, cs = H * 0.03;
    ctx.beginPath(); ctx.arc(ex, ey, er, Math.PI, 0); ctx.closePath(); ctx.fillStyle = "#ffe9a8"; ctx.fill(); outline(1.6); ctx.stroke();
    Anima.transporter(ex + er * 0.95, ey - er * 0.45, ts * 0.8, "#8fdcc4", prog(1.2, 1.4) >= 1 ? 0 : time * 2.5, false);
    const more = prog(2.6, 1.6);
    // 迷走神经：从肠道往上，一直通到脑干
    const nx = W * 0.4, ny = gy - gh / 2;
    const bx = W * 0.8, by = H * 0.36, br = H * 0.075;
    const nerve = [[nx, ny - H * 0.08], [nx + W * 0.02, H * 0.46], [bx - br * 1.3, by + br * 0.4]];
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    for (const [w, col] of [[H * 0.02, C.line], [H * 0.014, "#fff1b8"]]) { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); nerve.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); }
    const R3 = Anima.receptor(nx, ny - H * 0.08, H * 0.034, "#cdf1e4", more * (0.7 + 0.3 * Math.sin(time * 5)), { shape: "square", dir: -1 });
    plate(nw ? "迷走神经" : "迷走神经", nx + W * 0.1, H * 0.52, "#fff", fz(0.024));
    const adapt = prog(10, 2);
    const sig = more * (1 - adapt * 0.8);
    if (sig > 0.2) Anima.spark(nerve, (time * 0.5) % 1, H * 0.018, "#8fcf6a");
    // 5-HT 从细胞游到迷走神经末梢
    for (let k = 0; k < 4; k++) {
      const al = k < 1 ? 1 : clamp(more * 3 - (k - 1), 0, 1);
      if (al <= 0.02) continue;
      const t = (time * 0.18 + k * 0.25) % 1;
      const x = lerp(ex + er * 0.3, nx - W * 0.02, t), y = lerp(ey - er * 0.9, ny - H * 0.1, t) + cs * 2.5 - Math.sin(t * Math.PI) * H * 0.07;
      chara(x, y, cs, { who: "5HT", alpha: al * Math.min(1, (1 - t) * 5, t * 8), eyes: "happy", arms: "hold", item: "letter", shadow: false, seed: k });
    }
    sitDrug({ who: "drug", label: "", hatColor: "#c7c0f0", hatColor2: "#ffffff" }, ex - W * 0.08, ey - H * 0.15, { x: ex + er * 0.95 + ts, y: ey - er * 0.45 - cs * 1.1 }, cs * 0.9, prog(1.2, 1.4), "shh");
    // 脑干
    const q = sig;
    ctx.beginPath(); ctx.ellipse(bx, by, br * 1.2, br, 0, 0, Math.PI * 2); ctx.fillStyle = mix("#ffe0ea", "#d8f0c0", q); ctx.fill(); outline(1.8); ctx.stroke();
    face(bx, by + br * 0.1, br * 0.42, q > 0.5 ? 0 : 1);
    if (q > 0.5) emote("sweat", bx + br * 1.1, by - br * 0.8, br * 0.5);
    plate(nw ? "脑干" : "脑干：呕吐中枢", bx, by + br + H * 0.05, "#fff", fz(0.024));
    const k2 = prog(10, 0.8);
    if (k2 > 0) {
      ctx.save(); ctx.globalAlpha *= k2;
      plate(nw ? "几周后常减轻" : "头几周明显，之后常减轻", bx, H * (nw ? 0.64 : 0.62), "#dff5ec", fz(0.026), W * 0.58);
      ctx.restore();
    }
    const k3 = prog(11, 0.8);
    if (k3 > 0 && !nw) {
      ctx.save(); ctx.globalAlpha *= k3;
      plate("维拉佐酮：还可能腹泻", bx, H * 0.74, "#fff1d6", fz(0.024), W * 0.58);
      ctx.restore();
    }
    callout("v4-3", lt > 3.4 && lt < 7.8, R3.site.x, R3.site.y, nw ? W * 0.3 : W * 0.26, H * 0.34, nw ? "5-HT3：恶心的门" : "5-HT3：恶心信号的门");
    say("v4-s", lt > 5.2 && lt < 9.8, bx - br * 0.5, by - br * 0.8, bx - W * 0.1, H * 0.2, "有点想吐……", "think");
    ctx.restore();
  }

  // ---------- 第 6 幕：三位访客放在一起 ----------
  function sumView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f3fbfb", "#fbf4fd", 61);
    const top = Anima.topSafe() + H * 0.06, ch = H * (nw ? 0.62 : 0.6), gap = W * 0.025, cw = (W - gap * 4) / 3;
    const D = [
      ["SSRI", SSRI, "#dff5ec", nw ? ["堵回收门"] : ["堵住回收门"]],
      ["维拉佐酮", VIL, "#ffe6d6", nw ? ["堵回收门", "半按 1A"] : ["堵住回收门", "半按 5-HT1A"]],
      ["伏硫西汀", VOR, "#dfe4fb", nw ? ["堵回收门", "挡 3、7、1D", "按 1A", "半按 1B"] : ["堵住回收门", "挡 5-HT3、7、1D", "按下 5-HT1A", "半按 5-HT1B"]],
    ];
    const cs = Math.min(H * 0.036, cw * 0.1);
    D.forEach((d, j) => {
      const x = gap + j * (cw + gap);
      card(x, top, cw, ch);
      const my = top + ch * 0.3, t0 = 0.6 + j * 1.6;
      ctx.save(); rrect(x, top, cw, ch, 18); ctx.clip(); ctx.fillStyle = "#ffeede"; ctx.fillRect(x, top, cw, my - top); ctx.restore();
      outline(1.5); ctx.beginPath(); ctx.moveTo(x, my); ctx.lineTo(x + cw, my); ctx.stroke();
      cardTitle(x, top, cw, d[0], d[2]);
      const ts = Math.min(H * 0.036, cw * 0.09);
      Anima.transporter(x + cw * 0.3, my, ts, "#8fdcc4", prog(t0, 1) >= 1 ? 0 : time * 2.5, false);
      sitDrug(Object.assign({}, d[1], { label: "" }), x + cw * 0.05, my + H * 0.08, { x: x + cw * 0.3, y: my + ts * 0.7 }, cs, prog(t0, 1), "shh");
      d[3].forEach((t, i) => {
        const p = prog(t0 + 0.8 + i * 0.5, 0.6);
        if (p <= 0) return;
        ctx.save(); ctx.globalAlpha *= p;
        plate(t, x + cw / 2, my + H * (nw ? 0.13 : 0.13) + i * H * (nw ? 0.08 : 0.068), i === 0 ? "#dff5ec" : "#fff", fz(nw ? 0.024 : 0.026), x + 2, x + cw - 2);
        ctx.restore();
      });
    });
    const k = prog(7.2, 1);
    if (k > 0) {
      ctx.save(); ctx.globalAlpha *= k;
      plate(nw ? "⏳ 都要几周才起效" : "⏳ 都要几周才慢慢起效", W * (nw ? 0.28 : 0.5), top + ch + H * (nw ? 0.1 : 0.09), "#fff1b8", fz(0.03));
      ctx.restore();
    }
    const nX = W * 0.9, nY = H * 0.97;
    chara(nX, nY, H * 0.035, { who: "neuron", eyes: "happy", arms: lt > 9 ? "wave" : "down", shadow: false });
    callout("v5-c", lt > 4.6 && lt < 7, gap * 3 + cw * 2.5, top + ch * 0.9, nw ? W * 0.6 : W * 0.75, top + ch + H * 0.06, nw ? "挑的门最多" : "伏硫西汀挑的门最多");
    say("v5-s", lt > 9.2, nX, nY - H * 0.035 * 3.1, nw ? W * 0.68 : W * 0.72, H * (nw ? 0.92 : 0.9), nw ? "和医生商量～" : "适合哪一种，和医生一起商量～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.mmD, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#f8fcfc"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) compareView(S.v0);
    if (S.v1 > 0.02) vilaView(S.v1);
    if (S.v2 > 0.02) vortView(S.v2);
    if (S.v3 > 0.02) pfcView(S.v3);
    if (S.v4 > 0.02) gutView(S.v4);
    if (S.v5 > 0.02) sumView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#7cc6c9",
    titleCard: { lines: ["不止堵门：", "多模式抗抑郁药"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
