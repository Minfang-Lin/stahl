Anima.register("enzyme-inhibitors", {
    "title": "剪刀停工：可逆和不可逆的酶抑制",
    "tag": "基础篇",
    "headline": "让酶的剪刀【停工】，有两种办法",
    "lede": "酶是细胞里的剪刀手，药物可以让它停工：可逆抑制剂只是暂时握住剪刀，不可逆抑制剂则把剪刀焊死。这一区别，决定了 MAO 抑制剂为什么要忌口、停药后为什么要等两周。",
    "summary": "活性位点、可逆（竞争性）和不可逆抑制、新酶合成、MAO-A 与 MAO-B、酪胺引起的奶酪反应，以及吗氯贝胺为什么风险较小。",
    "chapter": "对应 Stahl《精神药理学精要》第 2 章 · 酶作为药物靶点",
    "footer": "服用 MAO 抑制剂期间的饮食和合并用药，请严格遵医嘱；出现剧烈头痛、心慌等情况要立即就医。",
    "canvasLabel": "剪刀手酶在工作台上剪开底物，可逆抑制剂握住又松开、不可逆抑制剂把剪刀焊死，以及酪胺穿过肠道把去甲肾上腺素挤出来、血压升高的动画",
    "regions": ["synapse"],
    "parts": ["basics"],
    "cast": ["MAO", "AChE", "DA", "5HT", "NE", "drug"],
    "color": "#e8b98f"
  }, () => {
  const CH = [
    { title: "剪刀手的工作", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["酶", "正常工作"], pill2: ["底物", "被分解"],
      text: "酶是细胞里的剪刀手：它身上有一个特别的座位，叫活性位点，只有合适的分子（底物）才坐得进去。底物一坐好，咔嚓一下，就被加工成别的东西。比如单胺氧化酶（MAO）专门拆 5-HT、去甲肾上腺素和多巴胺。如果让剪刀停工，底物就会越积越多。",
      fact: "酶在活性位点结合底物、把它变成产物；抑制酶 → 底物增多" },
    { title: "可逆：握住又松开", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["抑制", "可逆"], pill2: ["底物", "少"],
      text: "有的药物是可逆抑制剂：它坐进活性位点，暂时握住剪刀，但抓得不牢，一会儿坐上、一会儿离开。其中竞争性抑制剂和底物抢同一个座位：底物来得越多，越有机会把药挤开，重新坐上去。等药物被身体清除，剪刀手马上又能工作。",
      fact: "可逆抑制：药物一离开，酶立刻恢复；竞争性抑制可被大量底物抵消" },
    { title: "不可逆：剪刀被焊死", v0: 1, v1: 0, v2: 0, v3: 0,
      pill: ["抑制", "不可逆"], pill2: ["恢复", "等新酶"],
      text: "另一些药物是不可逆抑制剂：它和酶牢牢结合，像把剪刀焊死。就算药物已经离开血液，这些酶也修不好了，只能等细胞造出新的酶。老牌的 MAO 抑制剂大多是这样，停药以后，大约要两周，MAO 才慢慢恢复。所以停药后换用别的药，要听医生安排间隔时间。",
      fact: "不可逆抑制：要等新酶合成才恢复，MAO 大约需要两周" },
    { title: "MAO-A 和 MAO-B", v0: 0, v1: 1, v2: 0, v3: 0,
      pill: ["MAO-A", "5-HT、NE"], pill2: ["MAO-B", "多巴胺"],
      text: "单胺氧化酶有两种。MAO-A 主要分解 5-HT 和去甲肾上腺素，也能分解多巴胺和食物里的酪胺；它不只在脑里，肠道和肝脏里也很多，像守在门口的检查员。MAO-B 主要分解多巴胺，在脑里较多。抗抑郁作用主要来自抑制 MAO-A；只抑制 MAO-B 的药，多用于帕金森病。",
      fact: "MAO-A：5-HT、NE、酪胺（肠道、肝脏里也多）；MAO-B：以多巴胺为主" },
    { title: "奶酪反应", v0: 0, v1: 0, v2: 1, v3: 0,
      pill: ["酪胺", "挡不住"], pill2: ["血压", "正常"],
      text: "为什么服用不可逆的 MAO 抑制剂要忌口？陈年奶酪等食物里有很多酪胺。平时，肠道和肝脏里的 MAO-A 会把它拆掉。MAO-A 被焊死以后，酪胺大量进入血液，被去甲肾上腺素末梢的回收门当成自己人收进去，再把囊泡里的去甲肾上腺素挤出来。血管一下子收紧，血压可能骤然升高，这叫奶酪反应。",
      fact: "不可逆 MAO-A 抑制 + 大量酪胺 → 去甲肾上腺素被挤出 → 血压骤升" },
    { title: "可逆的好处", v0: 0, v1: 0, v2: 0, v3: 1,
      pill: ["吗氯贝胺", "可逆"], pill2: ["血压", "较稳"],
      text: "吗氯贝胺是可逆的 MAO-A 抑制剂。它坐在活性位点上，但抓得不牢：吃进来的酪胺一多，就能把它挤开，MAO-A 又能把酪胺拆掉，所以奶酪反应的风险小得多，饮食仍要遵医嘱。乙酰胆碱酯酶抑制剂也是可逆抑制的例子，比如治疗痴呆的多奈哌齐，《消失的记忆邮差》里见过。",
      fact: "可逆的 MAO-A 抑制剂能被大量酪胺挤开，奶酪反应风险较小" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { table: "#f3d9c2", pocket: "#c9a88a", vessel: "#ffb3b8", gut: "#ffd6bf" });
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0 };
  const TYR = { hair: "#f2c14e", eye: "#b8860b", cloth: "#fff3c4", hat: "band", hatColor: "#ffd966", style: "short", shadow: false };
  const DRUG = (tag, col) => ({ who: "drug", label: "", hatColor: col, tag, shadow: false });

  function update() { lt = Anima.sceneTime; }
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => W / H < 1.5;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function plate(t, x, y, fs, color) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = color || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function card(x, y, w, h, title, color) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill(); ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    plate(title, x + w / 2, y, fsz(0.03), color);
  }
  function bg(top, mid, bot, seed) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, top); g.addColorStop(0.5, mid); g.addColorStop(1, bot);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#ffdcc4", 0.7, seed);
    Anima.petals(7, 0.45, seed + 3);
  }
  function lock(x, y, s) {
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(1.5, s * 0.18);
    ctx.beginPath(); ctx.arc(x, y - s * 0.3, s * 0.4, Math.PI, 0); ctx.stroke();
    rrect(x - s * 0.6, y - s * 0.3, s * 1.2, s * 0.9, s * 0.2); ctx.fillStyle = C.gold; ctx.fill(); outline(1.4); ctx.stroke();
  }
  function crumbs(x, y, s, p) { // 被剪开的底物：几块小碎片飘走
    if (p <= 0 || p >= 1) return;
    ctx.save(); ctx.globalAlpha *= 1 - p;
    for (let k = 0; k < 3; k++) {
      const q = -Math.PI / 2 + (k - 1) * 0.8;
      ctx.beginPath(); ctx.arc(x + Math.cos(q) * s * 2 * p, y - s * 1.5 + Math.sin(q) * s * 2 * p, s * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = Anima.CAST.DA.hair; ctx.fill(); outline(1); ctx.stroke();
    }
    ctx.restore();
  }
  // 工作台：桌面上的凹槽就是活性位点；剪刀手站在右边
  // o: occ（坐在位点上的角色选项）, gray, lock, cut（0～1 剪的动画）, enz（剪刀手的额外选项）
  function station(x, y, s, o) {
    const tw = s * 3.2, th = s * 1.1, top = y - th;
    rrect(x - tw / 2, top, tw, th, s * 0.3); ctx.fillStyle = mix(C.table, "#d8d2d4", o.gray || 0); ctx.fill(); outline(1.8); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, top + s * 0.05, s * 0.75, s * 0.28, 0, 0, Math.PI * 2); ctx.fillStyle = C.pocket; ctx.fill(); outline(1.4); ctx.stroke();
    const ex = x + tw / 2 + s * 0.9;
    chara(ex, y, s, Object.assign({ who: "MAO", item: "scissors", arms: "point", dir: -1, eyes: "open", gray: o.gray || false }, o.enz || {}));
    if (o.lock) lock(ex - s * 1.2, y - s * 1.4, s * 0.55);
    if (o.occ) chara(x, top + s * 0.1, s * 0.82, o.occ);
    if (o.cut > 0 && o.cut < 1) { sfx("咔嚓！", x + s * 0.2, top - s * 2.6, s * 0.75, C.bad, -0.1, Math.sin(o.cut * Math.PI)); crumbs(x, top, s, o.cut); }
    return { x, top, ex, y };
  }
  // 底物一轮：走过来、坐下、被剪开。返回 { occ, cut }（occ 为 null 表示此刻不在台上）
  function subCycle(t, x, top, s, who, extra) {
    const sx = x - W * 0.12, sy = top - H * 0.26;
    if (t < 0.45) { const e = ease(t / 0.45); return { walker: { x: lerp(sx, x, e), y: lerp(sy, top + s * 0.1, e), o: Object.assign({ who, walk: time * 8, eyes: "happy", shadow: false }, extra || {}) }, occ: null, cut: 0 }; }
    if (t < 0.62) return { occ: Object.assign({ who, eyes: "open", mouth: "o", shadow: false }, extra || {}), cut: 0 };
    return { occ: null, cut: (t - 0.62) / 0.3 };
  }

  // ---------- 第 1～3 幕：三个工作台 ----------
  function benchView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff8ef", "#fdf3ea", "#fff0f4", 9);
    const s = H * (n ? 0.056 : 0.066), y = H * 0.84, fs = fsz(0.026);
    const xs = (n ? [0.16, 0.47, 0.78] : [0.22, 0.48, 0.74]).map((k) => k * W);
    const DR = DRUG(cur === 2 ? "不可逆" : "可逆", cur === 2 ? "#ff8f8f" : "#9fd7f0");
    const walkers = [], sts = [];
    let cutCount = 0;
    xs.forEach((x, i) => {
      const top = y - s * 1.1, per = 3.2, t = ((lt + i * 1.1) % per) / per;
      const o = { occ: null, cut: 0, gray: 0, lock: false, enz: {} };
      const work = () => { const c = subCycle(t, x, top, s, "DA"); o.occ = c.occ; o.cut = c.cut; if (c.walker) walkers.push(c.walker); if (c.cut > 0) o.enz = { eyes: "happy", arms: "up" }; };
      if (cur === 0) work();
      if (cur === 1) {
        const arrive = prog(0.8 + i * 0.4, 1.2), leave = prog(9.6 + i * 0.3, 1.4);
        const pushed = lt > 5.2 && lt < 9.6 && i < 2 && ((lt - 5.2 + i) % 2.4) < 1.6; // 底物多了：挤回座位
        if (leave >= 1) work();
        else if (arrive < 1) { if (arrive > 0) walkers.push({ x: lerp(x - W * 0.14, x, arrive), y: lerp(top - H * 0.26, top + s * 0.1, arrive), o: Object.assign({}, DR, { walk: time * 9, eyes: "happy" }) }); }
        else if (leave > 0) walkers.push({ x: lerp(x, x + W * 0.1, leave), y: lerp(top + s * 0.1, top - H * 0.3, leave), o: Object.assign({}, DR, { walk: time * 9, eyes: "happy", alpha: 1 - leave }) });
        else if (pushed) {
          o.occ = { who: "DA", eyes: "sparkle", arms: "up", shadow: false };
          walkers.push({ x: x - s * 2.4, y: top - s * 0.2, o: Object.assign({}, DR, { eyes: "wide", mouth: "o" }) });
          if (((lt - 5.2 + i) % 2.4) < 0.5) sfx("挤！", x - s * 1.4, top - s * 3.4, s * 0.7, C.warn, -0.1, 1);
        } else { o.occ = Object.assign({}, DR, { arms: "hug", eyes: "happy", tag: null }); o.enz = { eyes: "sleepy", arms: "down" }; }
      }
      if (cur === 2) {
        const arrive = prog(0.6 + i * 0.3, 1.2), weld = lt > 3 ? 1 : 0, leave = prog(5.4 + i * 0.3, 1.4);
        const renew = prog(8.2 + i * 1.5, 1.2);
        if (renew >= 1) { work(); o.enz = Object.assign({ tag: "新的" }, o.enz); }
        else {
          o.gray = weld * 0.8; o.lock = weld > 0;
          o.enz = weld ? { eyes: "x", mouth: "wavy", arms: "down", alpha: 1 - renew } : {};
          if (renew > 0) walkers.push({ k: 1, x: lerp(W + s * 3, x + s * 2.5, renew), y, o: { who: "MAO", item: "scissors", walk: time * 9, dir: -1, eyes: "sparkle", shadow: true, tag: "新的" } });
          if (arrive > 0 && arrive < 1) walkers.push({ x: lerp(x - W * 0.14, x, arrive), y: lerp(top - H * 0.26, top + s * 0.1, arrive), o: Object.assign({}, DR, { walk: time * 9, eyes: "happy" }) });
          else if (arrive >= 1 && leave <= 0) o.occ = Object.assign({}, DR, { arms: "hug", eyes: weld ? "happy" : "open", tag: null });
          else if (leave > 0 && leave < 1) walkers.push({ x: lerp(x, x - W * 0.1, leave), y: lerp(top + s * 0.1, top - H * 0.3, leave), o: Object.assign({}, DR, { walk: time * 9, eyes: "happy", alpha: 1 - leave }) });
          if (lt > 3 && lt < 4.4) { sparkles(x + s * 2.5, y - s * 1.6, s * 1.5, 5, 1, i * 5); sfx("滋滋", x + s * 2.8, y - s * 3.8, s * 0.7, C.warn, -0.1, 1); }
        }
      }
      if (o.cut > 0) cutCount++;
      sts.push(station(x, y, s, o));
    });
    walkers.forEach((w) => chara(w.x, w.y, s * (w.k || 0.82), w.o));
    // 等着的底物（第 2、3 幕）
    if (cur === 1 || cur === 2) {
      const crowd = cur === 1 ? (lt > 5 && lt < 9.6 ? 6 : 2) : (lt > 5 && lt < 10 ? 5 : 2);
      for (let k = 0; k < crowd; k++) {
        const x = W * (n ? 0.1 : 0.08) + (k % 3) * s * 1.6, yy = H * 0.5 - Math.floor(k / 3) * s * 2.2;
        chara(x, yy, s * 0.7, { who: "DA", eyes: cur === 2 ? "teary" : "sparkle", arms: "up", jump: Math.abs(Math.sin(time * 4 + k)) * 0.3, shadow: false });
      }
    }
    if (cur === 2 && lt > 7.6) plate("第 " + Math.min(14, Math.max(1, Math.round((lt - 7.6) / 5 * 13) + 1)) + " 天", W * 0.5, Anima.topSafe() + fs * 1.4, fs * 1.1, "#fff1b8");
    const st = sts[1];
    if (cur === 0) {
      callout("site", lt > 0.8 && lt < 5, st.x, st.top, n ? W * 0.5 : W * 0.46, H * 0.36, "活性位点：底物坐的座位");
      callout("enz", lt > 5.4 && lt < 9.6, st.ex, y - s * 3.2, n ? W * 0.7 : W * 0.7, H * 0.28, "酶：把底物加工掉");
      say("snip", lt > 10, sts[2].ex, y - s * 3.3, n ? W * 0.66 : W * 0.72, H * 0.4, "咔嚓～下一位！", "say");
    }
    if (cur === 1) {
      callout("rev", lt > 2.4 && lt < 5.2, st.x, st.top - s * 2, n ? W * 0.6 : W * 0.56, H * 0.3, "可逆：暂时握住剪刀");
      callout("comp", lt > 5.6 && lt < 9.4, xs[0], st.top - s * 2.4, n ? W * 0.5 : W * 0.44, H * 0.28, "底物多了，能挤回座位");
      callout("back", lt > 10.8, st.ex, y - s * 3.2, n ? W * 0.64 : W * 0.68, H * 0.34, "药一走，马上恢复");
      say("crowd", lt > 5.6 && lt < 9, W * 0.1, H * 0.4, n ? W * 0.22 : W * 0.16, H * 0.24, "我们人多～", "say");
    }
    if (cur === 2) {
      callout("weld", lt > 3.2 && lt < 7, sts[1].ex - s * 1.2, y - s * 1.6, n ? W * 0.56 : W * 0.56, H * 0.36, "不可逆：剪刀被焊死");
      callout("new", lt > 9, xs[0] + s * 2.5, y - s * 3.2, n ? W * 0.44 : W * 0.4, H * 0.36, "新造的酶来接班");
      say("stuck", lt > 5.6 && lt < 8.8, sts[2].ex, y - s * 3.2, n ? W * 0.72 : W * 0.76, H * 0.4, "药走了，我还是动不了…", "think");
    }
    ctx.restore();
  }

  // ---------- 第 4 幕：MAO-A 和 MAO-B ----------
  function abView(a) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fff7f0", "#f6f2ff", "#fff0f4", 21);
    const top = Anima.topSafe() + H * 0.07, gap = W * 0.03, cw = (W - gap * 3) / 2, ch = H * 0.93 - top;
    const fs = fsz(0.026), s = Math.min(H * 0.06, cw * 0.085);
    const cards = [{ x: gap, t: "MAO-A", col: "#ffd3c4", subs: [["5HT", null], ["NE", null], ["DA", null], [null, "酪胺"]], where: "脑 · 肠道 · 肝脏" },
      { x: gap * 2 + cw, t: "MAO-B", col: "#e4e0ff", subs: [["DA", null]], where: "脑内较多" }];
    cards.forEach((c, j) => {
      card(c.x, top, cw, ch, c.t, c.col);
      const x = c.x + cw * 0.42, y = top + ch * 0.66;
      const per = 2.6, k = Math.floor((lt + j * 1.3) / per), t = ((lt + j * 1.3) % per) / per;
      const sub = c.subs[k % c.subs.length];
      const extra = sub[1] ? Object.assign({}, TYR, { tag: "酪胺" }) : null;
      const cy = subCycle(t, x, y - s * 1.1, s, sub[0] || "DA", extra);
      if (cy.walker) chara(cy.walker.x, cy.walker.y, s * 0.82, cy.walker.o);
      station(x, y, s, { occ: cy.occ, cut: cy.cut, enz: { tag: c.t, eyes: cy.cut > 0 ? "happy" : "open" } });
      plate(c.where, c.x + cw / 2, top + ch * 0.86, fs, "#fff");
      plate(j ? "主要分解：多巴胺" : (n ? "5-HT、NE、酪胺…" : "主要分解：5-HT、NE，还有酪胺"), c.x + cw / 2, top + ch * 0.2, fs, j ? "#f1eeff" : "#fff1ea");
    });
    callout("gut", lt > 4 && lt < 9, gap + cw * 0.5, top + ch * 0.86, n ? W * 0.3 : W * 0.26, H * 0.99, "肠道里的检查员");
    callout("pd", lt > 9.2, gap * 2 + cw * 1.5, top + ch * 0.86, n ? W * 0.72 : W * 0.74, H * 0.99, n ? "多用于帕金森病" : "MAO-B 抑制剂：多用于帕金森病");
    say("tyr", lt > 1.5 && lt < 4.5, gap + cw * 0.8, top + ch * 0.5, n ? W * 0.5 : W * 0.72, n ? H * 0.96 : top + ch * 0.45, "MAO-A 啥都能拆一点～", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：奶酪反应 / 第 6 幕：可逆的 MAO-A ----------
  function cheese(x, y, s) {
    ctx.beginPath(); ctx.moveTo(x - s, y + s * 0.5); ctx.lineTo(x + s, y + s * 0.5); ctx.lineTo(x + s, y - s * 0.2); ctx.lineTo(x - s, y + s * 0.1); ctx.closePath();
    ctx.fillStyle = "#ffe07a"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.fillStyle = "#e8b83a";
    [[-0.4, 0.25], [0.3, 0.2], [0.6, 0.35]].forEach((p) => { ctx.beginPath(); ctx.arc(x + p[0] * s, y + p[1] * s, s * 0.1, 0, Math.PI * 2); ctx.fill(); });
  }
  function gauge(x, y, r, v, fs) { // v 0～1：血压
    ctx.beginPath(); ctx.arc(x, y, r, Math.PI, 0); ctx.closePath(); ctx.fillStyle = "#fff"; ctx.fill(); outline(2); ctx.stroke();
    [["#bfe8d6", Math.PI, Math.PI * 1.5], ["#ffe08a", Math.PI * 1.5, Math.PI * 1.75], ["#ffb3b8", Math.PI * 1.75, Math.PI * 2]].forEach((z) => {
      ctx.beginPath(); ctx.arc(x, y, r * 0.8, z[1], z[2]); ctx.strokeStyle = z[0]; ctx.lineWidth = r * 0.22; ctx.stroke();
    });
    const q = Math.PI + v * Math.PI;
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.07); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(q) * r * 0.75, y + Math.sin(q) * r * 0.75); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r * 0.1, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
    text("血压", x, y + fs * 0.9, fs, C.ink);
  }
  function tyrView(a, rev) {
    const n = nar();
    ctx.save(); ctx.globalAlpha *= a;
    bg("#fffaf0", "#fff4ee", "#fdeff2", rev ? 41 : 33);
    const s = H * 0.044, fs = fsz(0.026), top = Anima.topSafe();
    // 肠壁（左）
    const gx = W * (n ? 0.24 : 0.2);
    ctx.fillStyle = C.gut; ctx.fillRect(gx - W * 0.03, top, W * 0.06, H - top);
    outline(2); ctx.beginPath(); ctx.moveTo(gx - W * 0.03, top); ctx.lineTo(gx - W * 0.03, H); ctx.moveTo(gx + W * 0.03, top); ctx.lineTo(gx + W * 0.03, H); ctx.stroke();
    text("肠壁", gx, top + fs * 1.2, fs, C.ink);
    // 血管（下方横着）
    const vy = H * 0.8, squeeze = rev ? 0 : prog(10, 1.5), vr = H * 0.07 * (1 - squeeze * 0.45);
    rrect(gx + W * 0.03, vy - vr, W, vr * 2, vr); ctx.fillStyle = C.vessel; ctx.fill(); outline(2); ctx.stroke();
    text("血管", W * (n ? 0.9 : 0.94), vy, fs, C.ink);
    if (squeeze > 0.3) { emote("sweat", W * 0.6, vy - vr - s, s * 0.8); sfx("收紧！", W * 0.5, vy - vr - s * 1.6, s * 0.9, C.bad, -0.1, squeeze); }
    // 奶酪
    cheese(W * 0.08, H * 0.38, H * 0.06);
    // 肠壁里的 MAO-A
    const my = H * 0.62;
    const DR = rev ? DRUG("吗氯贝胺", "#9fd7f0") : DRUG("不可逆", "#ff8f8f");
    let occ = Object.assign({}, DR, { arms: "hug", eyes: "happy", tag: null }), cut = 0, pushed = false;
    const walkers = [];
    // 酪胺一个个从奶酪走来
    const nT = rev ? 4 : 5;
    for (let k = 0; k < nT; k++) {
      const t0 = 0.6 + k * 0.8, t = lt - t0;
      if (t < 0) continue;
      if (rev) {
        // 走到 MAO-A 台前；挤开药物后被剪开
        const e = ease(t / 1.6), wx = lerp(W * 0.08, gx - s * 1.5 - (k % 2) * s * 1.4, e), wy = lerp(H * 0.42, my - s * 1.1 + Math.floor(k / 2) * s * 0.1, e);
        if (lt > 4.5 + k * 1.6 && lt < 6.2 + k * 1.6) { pushed = true; occ = Object.assign({}, TYR, { eyes: "open", mouth: "o", tag: null }); }
        else if (lt >= 6.2 + k * 1.6) { cut = Math.max(cut, clamp((lt - 6.2 - k * 1.6) / 0.6, 0, 1)); continue; }
        else walkers.push({ x: wx, y: wy, o: Object.assign({}, TYR, { walk: e < 1 ? time * 8 : null, eyes: "happy", arms: "up", tag: k === 0 ? "酪胺" : null }) });
      } else {
        // 穿过肠壁 → 血管 → 末梢
        const u = t / 6;
        if (u >= 1) continue;
        let x, y;
        if (u < 0.25) { const e = u / 0.25; x = lerp(W * 0.08, gx + W * 0.06, e); y = lerp(H * 0.42, vy + s * 1.4, e); }
        else if (u < 0.75) { const e = (u - 0.25) / 0.5; x = lerp(gx + W * 0.06, W * (n ? 0.62 : 0.6), e); y = vy + s * 1.4; }
        else { const e = (u - 0.75) / 0.25; x = W * (n ? 0.62 : 0.6); y = lerp(vy + s * 1.4, H * 0.45, e); }
        walkers.push({ x, y, o: Object.assign({}, TYR, { walk: time * 8, eyes: "happy", arms: "wave", alpha: u > 0.9 ? (1 - u) * 10 : 1, tag: k === 0 ? "酪胺" : null }) });
      }
    }
    if (rev && pushed) walkers.push({ x: gx + s * 0.2, y: my - s * 3.5, o: Object.assign({}, DR, { eyes: "wide", mouth: "o", tag: null }) });
    if (rev && cut > 0 && cut < 1) occ = null;
    station(gx, my, s, { occ, cut: rev ? cut : 0, gray: rev ? 0 : 0.8, lock: !rev, enz: { tag: "MAO-A", eyes: rev ? (cut > 0 ? "happy" : "open") : "x", mouth: rev ? "smile" : "wavy" } });
    walkers.forEach((w) => chara(w.x, w.y, s, w.o));
    let bp = 0.3;
    if (!rev) {
      // NE 末梢：酪胺进去，把去甲肾上腺素挤出来
      const T = { cx: W * (n ? 0.62 : 0.6), y0: top * 0.3, w: W * (n ? 0.3 : 0.22), h: H * 0.42 };
      Anima.terminal(T.cx, T.y0, T.w, T.h, "#ffd9dc", { face: true, mood: lt > 7 ? -0.3 : 1 });
      text("NE 末梢", T.cx - T.w * 0.24, T.y0 + T.h * 0.66, fs, C.ink);
      const out = prog(7, 1);
      Anima.vesicle(T.cx + T.w * 0.18, T.y0 + T.h * 0.62, H * 0.035, Anima.CAST.NE.hair, Math.round(5 - out * 4), 4);
      if (out > 0) for (let k = 0; k < 6; k++) {
        const t = ((lt - 7) * 0.35 + k / 6) % 1;
        chara(T.cx + (k - 2.5) * s * 1.3, lerp(T.y0 + T.h + s * 3, vy - vr * 0.3, t), s * 0.85, { who: "NE", alpha: Math.min(1, Math.sin(t * Math.PI) * 3) * out, walk: time * 9 + k, eyes: "wide", arms: "up", shadow: false });
      }
      bp = 0.3 + 0.65 * prog(9.5, 2);
      callout("mao", lt > 0.8 && lt < 4.2, gx + s * 2.8, my - s * 1.6, n ? W * 0.44 : W * 0.44, H * 0.93, "MAO-A 被焊死：挡不住");
      callout("push", lt > 7.2 && lt < 10.6, T.cx + T.w * 0.18, T.y0 + T.h * 0.62, n ? W * 0.3 : W * 0.34, H * 0.62, "NE 被挤出来");
      say("hi", lt > 3.6 && lt < 6.8, W * 0.4, vy, n ? W * 0.8 : W * 0.42, n ? H * 0.92 : H * 0.56, n ? "顺流而上～" : "我是酪胺，顺流而上～", "say");
    } else {
      bp = 0.3 + 0.06 * Math.sin(time);
      callout("rev", lt > 1.2 && lt < 4.4, gx, my - s * 2.4, n ? W * 0.56 : W * 0.46, H * 0.36, "吗氯贝胺：可逆地坐着");
      callout("push2", lt > 4.8 && lt < 9, gx - s * 1.5, my - s * 3, n ? W * 0.56 : W * 0.5, H * 0.5, "酪胺多了，把它挤开");
      say("ache", lt > 9.4, W * 0.62, H * 0.62, n ? W * 0.5 : W * 0.6, n ? H * 0.4 : H * 0.6, "同样可逆：AChE 抑制剂（如多奈哌齐）", "box");
      chara(W * (n ? 0.62 : 0.36), vy - vr, s, { who: "AChE", item: "scissors", arms: "point", eyes: "happy", alpha: prog(9.4, 1) });
    }
    gauge(W * (n ? 0.86 : 0.86), H * (n ? 0.5 : 0.46), H * 0.1, bp, fs);
    if (bp > 0.8) { sfx("血压飙升！", W * 0.86, H * (n ? 0.3 : 0.28), s * 0.9, C.bad, -0.1, 1); emote("!", W * 0.86 + H * 0.12, H * 0.38, s); }
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 1) { v2 = lt > 5.2 && lt < 9.6 ? "多" : "少"; if (lt > 10.6) v1 = "药走了"; }
    if (cur === 2 && lt > 7.6) v2 = "约两周";
    if (cur === 4 && lt > 9.5) v2 = "骤升 ↑";
    pill(14, 12, c.pill[0], v1, "#c9733a", false);
    pill(W - 14, 12, c.pill2[0], v2, cur === 4 && lt > 9.5 ? C.bad : "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) benchView(S.v0);
    if (S.v1 > 0.02) abView(S.v1);
    if (S.v2 > 0.02) tyrView(S.v2, false);
    if (S.v3 > 0.02) tyrView(S.v3, true);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#c9733a",
    titleCard: { lines: ["剪刀停工", "可逆和不可逆"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
