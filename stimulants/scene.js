Anima.register("stimulants", {
    "title": "两种兴奋剂，两种开门法",
    "tag": "注意缺陷多动障碍",
    "headline": "哌甲酯和苯丙胺，开门的方法【不一样】",
    "lede": "同样是让多巴胺变多：哌甲酯从外面把回收门堵住，苯丙胺却被回收门当成自己人请进去，再把多巴胺从囊泡里挤出来、让门反着转。再看看为什么进脑的速度决定了“快感”，缓释剂型和前体药又怎样让它慢下来。",
    "summary": "哌甲酯阻断 DAT/NET、苯丙胺被转运进末梢并经 VMAT2 挤出多巴胺、转运体反向转运，紧张性与相位性多巴胺，起效速度与滥用风险，以及前体药赖右苯丙胺。",
    "chapter": "对应 Stahl《精神药理学精要》第 11 章 · 兴奋剂的作用机制",
    "footer": "兴奋剂需要医生评估后开具，请按医嘱服用，不要自己改变剂型或用法。",
    "canvasLabel": "哌甲酯堵住多巴胺回收门、苯丙胺被运进末梢挤出多巴胺并让回收门反转的动画",
    "regions": ["pfc", "nac"],
    "parts": ["adhd"],
    "cast": ["DA", "pump", "drug"],
    "color": "#ff9a52"
  }, () => {
  const CH = [
    { title: "哌甲酯：从外面堵门",
      pill: ["哌甲酯", "堵住 DAT"], pill2: ["多巴胺", "多留一会儿"],
      text: "先看平时：电信号一到，囊泡放出多巴胺，送完信就被回收门 DAT 拉回去，停留的时间很短。哌甲酯从突触间隙这一侧坐到门口，把门堵住。下一次放电放出的多巴胺回不去了，就在间隙里多留一会儿，一次又一次敲响受体。去甲肾上腺素的回收门 NET 也一样被它堵住。",
      fact: "哌甲酯阻断 DAT 和 NET；它只让“放出来的”递质留得更久，本身不促使释放" },
    { title: "苯丙胺：被当成自己人",
      pill: ["苯丙胺", "进门了"], pill2: ["DAT", "认错人"],
      text: "苯丙胺的开门法完全不同。它长得很像单胺，回收门 DAT 把它当成自己人，转一圈就把它运进了末梢里。门在忙着运它，间隙里的多巴胺也排不上队、回不去。苯丙胺就这样一边占着门，一边进到了门里。这一步已经让多巴胺多了一些，但更厉害的还在后面。",
      fact: "苯丙胺是 DAT、NET 的底物：它被转运体运进神经末梢，同时和多巴胺竞争回收" },
    { title: "挤出囊泡，门反着转",
      pill: ["胞质多巴胺", "越来越多"], pill2: ["放电", "不需要"],
      text: "进到末梢里，苯丙胺又钻进囊泡的装货门 VMAT2，把原本装好的多巴胺挤了出来。末梢里的多巴胺越来越多，回收门 DAT 就反过来转，把它们一个个往外送。这一路不需要电信号，所以苯丙胺能让多巴胺放得比哌甲酯更多。",
      fact: "苯丙胺通过 VMAT2 让多巴胺从囊泡进入胞质，再让 DAT 反向转运，放电之外也能释放" },
    { title: "背景水位和一下子的尖峰",
      pill: ["紧张性", "背景水位"], pill2: ["相位性", "尖峰"],
      text: "多巴胺有两种放法：紧张性是平稳的背景水位，相位性是遇到重要事情时一下子冒出的尖峰。一种假说认为，ADHD 时背景水位偏低、波动乱，真正重要的尖峰不容易被读出来。治疗的理想目标，是把背景水位慢慢托到刚刚好，让有意义的尖峰更清楚。",
      fact: "紧张性是持续的低水平释放，相位性是短暂的爆发式释放；治疗希望平稳提升紧张性" },
    { title: "进脑的速度决定快感",
      pill: ["进脑速度", "决定快感"], pill2: ["缓释", "平稳"],
      text: "同一种药，快慢不同，结果也不同。如果多巴胺在伏隔核里猛地冲出一个尖峰，奖赏系统会当成“中大奖”，产生快感，让人还想再来，这就是滥用的风险。缓释剂型让浓度慢慢爬坡、稳稳停住，更像托高背景水位，快感就小得多。",
      fact: "多巴胺上升越快越猛，越容易被奖赏系统当作奖励；缓释剂型更平稳" },
    { title: "前体药：在血液里慢慢切开",
      pill: ["前体药", "赖右苯丙胺"], pill2: ["起效", "慢而稳"],
      text: "还有一种办法是给药物加一条“尾巴”。赖右苯丙胺是右苯丙胺连着一个赖氨酸，本身不起作用。它进入血液后，主要由红细胞里的酶慢慢把尾巴剪掉，放出有效的右苯丙胺。剪的速度有限，药物只能一点一点地进大脑，上升自然平稳。",
      fact: "赖右苯丙胺是前体药，主要在血液中被红细胞的酶水解，变成右苯丙胺后才起效" },
  ];
  const DUR = 14;
  CH.forEach((c, i) => { for (let j = 0; j < CH.length; j++) c["v" + j] = i === j ? 1 : 0; });

  const C = Object.assign({}, Anima.C, { term: "#ffd6c4", post: "#ffe0ea", rec: "#f7a8c0", dat: "#9fc3ea", mph: "#ff9aa9", amp: "#ffb347", lis: "#8fdcc4", blood: "#ffd3d6", rbc: "#f27b86" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsz = (k) => Math.max(11, W / 58) * Anima.UI * (k || 1);
  const L2 = (a, b, t) => ({ x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) });
  const hop = (a, b, t, h) => { const p = L2(a, b, t); p.y -= Math.sin(t * Math.PI) * h; return p; };
  let datSpin = 0;
  function update(dt) {
    lt = Anima.sceneTime;
    let v = 0.4;
    if (cur === 0) v = lt > 6.2 ? 0 : (win(3.2, 5) ? 4 : 0.6);
    if (cur === 1) v = win(2.4, 4.6) ? 3.5 : (lt > 4.6 ? 0.3 : 0.6);
    if (cur === 2) v = lt < 6 ? 0.3 : -3.5;
    datSpin += v * dt;
  }

  // ================= 突触特写（第 1～3 幕） =================
  function geo() {
    const n = N(), cx = W * (n ? 0.5 : 0.44), tw = Math.min(W * (n ? 0.8 : 0.6), H * 1.1), th = H * 0.52, bot = th, post = H * 0.84;
    const bez = (t, a, b, c, d) => (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d;
    const termY = (x) => {
      const dx = Math.abs(x - cx); let best = bot, bd = 1e9;
      for (let i = 0; i <= 30; i++) { const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, bot + th * 0.02, bot, bot); if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; } }
      return best;
    };
    const ds = H * 0.05, cs = H * (n ? 0.042 : 0.04);
    const D = { x: cx + tw * 0.33 }; D.y = termY(D.x) - H * 0.012;
    const rec = [cx - tw * 0.3, cx - tw * 0.08, cx + tw * 0.14].map((x) => ({ x, y: post }));
    const ves = [[cx - tw * 0.22, bot - th * 0.22], [cx - tw * 0.02, bot - th * 0.34], [cx + tw * 0.16, bot - th * 0.2]].map((v) => ({ x: v[0], y: v[1] }));
    return { n, cx, tw, th, bot, post, termY, ds, cs, D, rec, ves, out: { x: D.x, y: D.y + ds * 1.05 + cs * 3.1 }, inn: { x: D.x - ds * 0.4, y: D.y - ds * 1.2 } };
  }
  function vmat(v, r, open) { // 囊泡上的装货门 VMAT2
    const x = v.x + r * 0.95, y = v.y;
    if (open > 0.05) glow(x, y, r * 0.8, C.gold, open);
    rrect(x - r * 0.18, y - r * 0.32, r * 0.36, r * 0.64, r * 0.12); ctx.fillStyle = mix("#c9c0f5", "#fff1a8", open); ctx.fill(); outline(1.2); ctx.stroke();
    return { x, y };
  }
  function arrowArc(x, y, r, dir) { // 回收门旁的方向箭头：dir 1 往里，-1 往外
    ctx.save(); outline(2.2); ctx.strokeStyle = dir > 0 ? C.skyDeep : C.bad;
    const x0 = x + r * 1.5, y0 = y + (dir > 0 ? r * 0.9 : -r * 0.9), y1 = y + (dir > 0 ? -r * 0.9 : r * 0.9);
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo(x0 + r * 0.5, y, x0, y1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x0 - r * 0.25, y1 + (dir > 0 ? r * 0.25 : -r * 0.25)); ctx.lineTo(x0, y1); ctx.lineTo(x0 + r * 0.3, y1 + (dir > 0 ? r * 0.2 : -r * 0.2)); ctx.stroke();
    ctx.restore();
  }
  function daChar(p, cs, o) {
    chara(p.x, p.y, cs, Object.assign({ who: "DA", eyes: "happy", arms: "down" }, o || {}));
  }
  let AP = { x: 0, y: 0 };
  function synView(a, k) {
    const g = geo(), cs = g.cs, n = g.n;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#fff4ef"); bg.addColorStop(0.5, C.cleft); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.9, 90);
    Anima.postMembrane(g.post, C.post, {});
    // 受体亮不亮，看有没有多巴胺站在上面
    const act = [0, 0, 0];
    const T = Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    // 电信号
    const sp = (t0) => { if (win(t0, t0 + 1)) Anima.spark([[g.cx, -10], [g.cx, g.th * 0.3], [g.cx - g.tw * 0.04, g.bot - g.th * 0.45]], lt - t0, H * 0.028, C.gold); };
    const vr = H * 0.048;
    let vmatOpen = 0, vesN = [5, 5, 5];
    const ppl = []; // {p, o}
    const recSite = (i) => ({ x: g.rec[i].x, y: g.post - g.ds * 1.62 });
    const relP = (i) => ({ x: g.ves[i].x, y: g.bot + cs * 3.3 });
    let spin = datSpin, blocked = false, arrow = 1;
    if (k === 0) {
      sp(0.2); sp(6.9);
      [0, 1, 2].forEach((i) => {
        // 第一次：放出 → 受体 → 被回收
        const t0 = 1.2 + i * 0.15;
        if (lt > t0 && lt < 5.2 + i * 0.3) {
          let p, o = {};
          if (lt < t0 + 1.4) p = hop(relP(i), recSite(i), prog(t0, 1.4), H * 0.04);
          else if (lt < 3.2 + i * 0.3) { p = recSite(i); act[i] = 1; o = { arms: "up" }; }
          else { const q = prog(3.2 + i * 0.3, 1.6); p = L2(recSite(i), g.out, q); o = { walk: time * 9, alpha: 1 - prog(4.6 + i * 0.3, 0.5) }; }
          ppl.push({ p, o });
        }
        // 第二次：门被堵，留在间隙里来回敲门
        const t1 = 7.9 + i * 0.15;
        if (lt > t1) {
          let p, o = {};
          if (lt < t1 + 1.4) p = hop(relP(i), recSite(i), prog(t1, 1.4), H * 0.04);
          else {
            const ph = (lt - t1 - 1.4) * 0.5 + i * 0.33, j = Math.floor(ph) % 3, f = ph % 1;
            const A = recSite((i + j) % 3), B = recSite((i + j + 1) % 3);
            p = f < 0.6 ? A : hop(A, B, (f - 0.6) / 0.4, H * 0.08);
            if (f < 0.6) { act[(i + j) % 3] = 1; o = { arms: "up" }; } else o = { walk: time * 9 };
          }
          ppl.push({ p, o });
        }
      });
      if (lt > 6.2) blocked = true;
      const pm = prog(4.4, 1.8), mx = lerp(W + cs * 2, g.out.x + g.ds * 0.2, pm);
      if (pm > 0) {
        chara(mx, lerp(g.post - H * 0.02, g.out.y, pm), cs * 1.05, { who: "drug", hatColor: C.mph, tag: "哌甲酯", dir: -1, walk: pm < 1 ? time * 9 : null, arms: pm >= 1 ? "shh" : "down", eyes: pm >= 1 ? "happy" : "open" });
        if (win(6.1, 7)) sfx("堵！", g.D.x + g.ds * 1.4, g.D.y + g.ds * 0.3, H * 0.05, "#e8637a", -0.12, 1);
      }
    }
    if (k === 1) {
      // 间隙里两位多巴胺想回家
      [0, 1].forEach((i) => {
        const home = L2(recSite(i + 1), g.out, 0.55 + i * 0.12);
        const p = lt < 3 ? L2(recSite(i + 1), home, prog(0.5, 2)) : { x: home.x - i * cs * 1.6 + Math.sin(time * 1.5 + i) * cs * 0.3, y: home.y };
        ppl.push({ p, o: { eyes: lt > 3.5 ? "open" : "happy", mouth: lt > 3.5 ? "wavy" : "smile", walk: lt < 2.5 ? time * 9 : null, dir: 1, emo: lt > 4 ? "?" : null } });
      });
      const pa = prog(0.3, 2), pin = prog(2.4, 2.2), pw = prog(4.8, 1.4);
      let ap, al = 1;
      const cyto = { x: g.cx + g.tw * 0.08, y: g.bot - g.th * 0.08 };
      if (pin <= 0) ap = L2({ x: W + cs * 2, y: g.post - H * 0.02 }, g.out, pa);
      else if (pin < 1) { ap = L2(g.out, { x: g.inn.x, y: g.inn.y + cs * 1.2 }, pin); al = 1 - Math.sin(pin * Math.PI) * 0.75; }
      else ap = L2({ x: g.inn.x, y: g.inn.y + cs * 1.2 }, cyto, pw);
      const s2 = pin >= 1 ? cs * 0.85 : cs * 1.05;
      AP = ap;
      chara(ap.x, ap.y, s2, { who: "drug", hatColor: C.amp, tag: "苯丙胺", dir: -1, alpha: al, walk: (pa > 0 && pa < 1) || (pw > 0 && pw < 1) ? time * 9 : null, arms: pin > 0 && pin < 1 ? "up" : "down", eyes: pin >= 1 ? "sparkle" : "happy", mouth: "grin" });
      if (win(2.4, 3.6)) sfx("请进～", g.D.x + g.ds * 2.6, g.D.y - g.ds * 0.6, H * 0.045, C.skyDeep, -0.12, 1);
    }
    if (k === 2) {
      const cyto = { x: g.cx + g.tw * 0.08, y: g.bot - g.th * 0.08 };
      const vm = { x: g.ves[1].x + vr * 1.05, y: g.ves[1].y + cs * 1.4 };
      const pv = prog(0.4, 1.4), pin = prog(2, 1);
      vmatOpen = win(1.6, 3.4) ? 1 : 0;
      if (pin < 1) {
        const ap = pv < 1 ? L2(cyto, vm, pv) : vm;
        chara(ap.x, ap.y, cs * 0.85 * (1 - pin * 0.5), { who: "drug", hatColor: C.amp, tag: "苯丙胺", dir: -1, walk: pv > 0 && pv < 1 ? time * 9 : null, alpha: 1 - pin, eyes: "sparkle", mouth: "grin" });
      }
      // 多巴胺被挤出囊泡，在胞质里越积越多
      const nOut = 5;
      for (let i = 0; i < nOut; i++) {
        const t0 = 3 + i * 0.55, vi = i % 3;
        if (lt < t0) continue;
        vesN[vi] = Math.max(1, vesN[vi] - 1);
        const spot = { x: g.cx + g.tw * (0.02 + i * 0.065), y: g.bot - g.th * (0.06 + (i % 2) * 0.1) };
        const t2 = 7.2 + i * 0.9; // 从反转的门出去
        let p, o = { eyes: "wide", mouth: "o", arms: "up" }, s = cs * 0.75;
        if (lt < t0 + 1) p = hop({ x: g.ves[vi].x, y: g.ves[vi].y + s * 1.2 }, spot, prog(t0, 1), H * 0.03);
        else if (lt < t2) { p = { x: spot.x + Math.sin(time * 2 + i) * s * 0.2, y: spot.y }; o = { eyes: "open", mouth: "wavy" }; }
        else {
          const q = prog(t2, 1.4);
          if (q < 0.5) p = L2(spot, { x: g.inn.x, y: g.inn.y + s * 1.2 }, q * 2);
          else { p = L2({ x: g.D.x, y: g.out.y - cs * 0.5 }, recSite(i % 3), (q - 0.5) * 2); s = cs; }
          o = { walk: time * 9, eyes: "happy", mouth: "grin" };
          if (q >= 1) { act[i % 3] = 1; o.arms = "up"; }
          if (q > 0.35 && q < 0.6) o.alpha = 0.3;
        }
        ppl.push({ p, o, s });
      }
      if (lt > 6) { blocked = false; arrow = -1; }
      // 没有电信号
      const bx = g.cx, by = g.th * 0.18, r = H * 0.035;
      if (lt > 7) {
        Anima.bolt(bx, by, r, 0.6, "#d9d0d4");
        outline(3); ctx.strokeStyle = C.bad; ctx.beginPath(); ctx.moveTo(bx - r, by - r); ctx.lineTo(bx + r, by + r); ctx.stroke();
      }
    }
    g.ves.forEach((v, i) => {
      Anima.vesicle(v.x, v.y, vr, Anima.CAST.DA.hair, vesN[i], i * 7);
      if (i === 1) vmat(v, vr, vmatOpen);
    });
    Anima.transporter(g.D.x, g.D.y, g.ds, C.dat, spin, blocked);
    arrowArc(g.D.x, g.D.y, g.ds, arrow);
    g.rec.forEach((r, i) => Anima.receptor(r.x, r.y, g.ds, C.rec, act[i], { label: i === 1 && !n ? "多巴胺受体" : null }));
    ppl.forEach((m, i) => {
      daChar(m.p, m.s || cs, Object.assign({ seed: i }, m.o));
      if (m.o.emo) emote(m.o.emo, m.p.x + cs * 0.8, m.p.y - cs * 3.2, cs * 0.6);
    });
    const topY = Anima.topSafe() + H * 0.02, rx = n ? W * 0.62 : W * 0.84, bh = Math.max(12, W / 58) * Anima.UI + 14;
    const cy = n ? topY : H * 0.3;
    if (k === 0) {
      callout("s0-dat", win(0.5, 4.4), g.D.x + g.ds * 0.6, g.D.y, rx, cy, "DAT：多巴胺的回收门");
      say("s0-mph", win(6.3, 9.6), g.out.x, g.out.y - cs * 3.3, n ? W * 0.3 : rx, H * (n ? 0.3 : 0.66), "从外面堵住，此门暂停～", "say");
      callout("s0-stay", n ? win(9.8, 12) : lt > 9.8, recSite(1).x, recSite(1).y - cs * 3, n ? W * 0.4 : W * 0.3, topY, "放电才有货，只是留得更久");
      say("s0-coc", lt > (n ? 12 : 10.6), g.D.x, g.D.y, n ? W * 0.45 : rx, H * (n ? 0.3 : 0.62), "可卡因也堵这扇门，但冲进大脑快得多", "box");
    }
    if (k === 1) {
      callout("s1-look", win(0.5, 2.3), AP.x, AP.y - cs * 3, rx, cy, "苯丙胺：长得像单胺");
      callout("s1-in", win(2.6, 7.5), g.D.x, g.D.y, rx, cy, "DAT 把它当自己人运进去");
      say("s1-q", lt > 7.5, g.out.x - cs * 2, g.out.y - cs * 3.2, n ? W * 0.3 : rx, n ? H * 0.34 : H * 0.62, "门被占着，我回不去啦", "think");
    }
    if (k === 2) {
      callout("s2-vmat", win(1.2, 4), g.ves[1].x + vr, g.ves[1].y, n ? W * 0.3 : W * 0.14, H * (n ? 0.62 : 0.66), "VMAT2：囊泡的装货门");
      callout("s2-cyto", win(4.2, 7), g.cx + g.tw * 0.1, g.bot - g.th * 0.12, n ? W * 0.3 : W * 0.14, H * (n ? 0.62 : 0.66), "多巴胺被挤到胞质里");
      callout("s2-rev", lt > 7.2, g.D.x + g.ds * 1.6, g.D.y, rx, n ? topY + bh * 2.3 : H * 0.36, "DAT 反着转，往外送");
      callout("s2-noap", win(7.5, 11), g.cx, g.th * 0.18, n ? W * 0.3 : W * 0.2, topY, "不需要电信号");
    }
    ctx.restore();
  }

  // ================= 第 4 幕：紧张性与相位性 =================
  function graphBox(x, y, w, h) {
    rrect(x, y, w, h, H * 0.03); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.8); ctx.stroke();
  }
  function tonicView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    Anima.wash("#fff7f0", "#eef6ff"); Anima.bokeh(6, "#ffe1c4", 0.7, 3);
    const gx = W * 0.05, gy = Anima.topSafe() + H * 0.1, gw = W * (n ? 0.9 : 0.66), gh = H * (n ? 0.5 : 0.56);
    graphBox(gx, gy, gw, gh);
    let star = null;
    const base = (t) => lerp(0.18, 0.5, ease((t - 4.5) / 4.5)); // 背景水位随时间慢慢托高
    const noise = (t) => lerp(0.1, 0.03, ease((t - 4.5) / 4.5));
    const band = [0.42, 0.58];
    const Y = (v) => gy + gh * (0.92 - v * 0.8);
    ctx.fillStyle = Anima.alpha(C.mint, 0.5); ctx.fillRect(gx + 2, Y(band[1]), gw - 4, Y(band[0]) - Y(band[1]));
    text("刚刚好", gx + gw - fsz(2.2), Y((band[0] + band[1]) / 2), fsz(0.8), C.mintDeep);
    // 滚动的曲线：右边是“现在”
    const span = 6, pts = [];
    for (let i = 0; i <= 140; i++) {
      const u = i / 140, t = lt - span + u * span;
      let v = base(t) + Math.sin(t * 7.3) * noise(t) + Math.sin(t * 12.1 + 1) * noise(t) * 0.6;
      const ev = t % 3; // 每 3 秒一次“有意义”的尖峰
      if (t > 0 && ev > 1 && ev < 1.5) v += Math.sin((ev - 1) / 0.5 * Math.PI) * 0.32;
      pts.push([gx + u * gw, Y(clamp(v, 0, 1))]);
    }
    ctx.save(); rrect(gx, gy, gw, gh, H * 0.03); ctx.clip();
    ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.lineTo(gx + gw, gy + gh); ctx.lineTo(gx, gy + gh); ctx.closePath();
    ctx.fillStyle = Anima.alpha("#ffb37a", 0.35); ctx.fill();
    ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.strokeStyle = "#ff8a3d"; ctx.lineWidth = 3; ctx.stroke();
    ctx.restore();
    // 尖峰上的小星星
    for (let i = 0; i < pts.length; i += 1) {
      const t = lt - span + i / 140 * span, ev = t % 3;
      if (t > 0 && Math.abs(ev - 1.25) < 0.0215) { sparkle(pts[i][0], pts[i][1] - H * 0.03, H * 0.022, 1, "#ffd76a"); star = pts[i]; }
    }
    text("时间 →", gx + gw - fsz(2), gy + gh - fsz(0.8), fsz(0.8), C.soft);
    text("多巴胺", gx + fsz(2.2), gy + fsz(1), fsz(0.8), C.soft);
    // 右边：前额叶的收信员读信号
    const cs = H * (n ? 0.05 : 0.055), rx = n ? W * 0.83 : W * 0.85, ry = n ? H * 0.95 : gy + gh;
    const nowEv = (lt % 3) > 1 && (lt % 3) < 1.5, good = base(lt) > 0.4;
    chara(rx, ry, cs, { who: "neuron", label: "前额叶", hat: "band", hatColor: "#ffd9c2", eyes: good ? (nowEv ? "sparkle" : "happy") : (nowEv ? "open" : "dizzy"), mouth: good ? "grin" : "wavy", arms: good && nowEv ? "up" : "down", dir: -1 });
    if (nowEv) emote(good ? "!" : "?", rx + cs * 0.9, ry - cs * 3.3, cs * 0.7);
    // 慢慢托高水位的缓释药
    const pd = prog(4, 1.6);
    if (pd > 0 && !n) chara(lerp(-cs, gx + gw * 0.12, pd), gy + gh + H * 0.14, cs * 0.9, { who: "drug", hatColor: C.mph, tag: "缓释", arms: "up", walk: pd < 1 ? time * 8 : null, eyes: "happy" });
    if (pd > 0 && n) chara(lerp(-cs, W * 0.2, pd), H * 0.95, cs * 0.85, { who: "drug", hatColor: C.mph, tag: "缓释", arms: "up", walk: pd < 1 ? time * 8 : null, eyes: "happy" });
    const topY = Anima.topSafe() + H * 0.01;
    callout("t-tonic", win(0.5, n ? 2.4 : 4.3), gx + gw * 0.3, Y(base(lt)), n ? W * 0.3 : gx + gw * 0.3, n ? topY : H * 0.95, "紧张性：背景水位（偏低、乱晃）");
    if (star) callout("t-phasic", win(n ? 2.5 : 1.4, 4.3), star[0], star[1], n ? W * 0.7 : gx + gw * 0.8, topY, "相位性：一下子的尖峰");
    callout("t-up", win(4.6, 9), gx + gw * 0.9, Y(base(lt)), n ? W * 0.5 : gx + gw * 0.6, topY, "慢慢托高背景水位");
    say("t-clear", lt > 9.6, rx, ry - cs * 3.2, n ? W * 0.55 : W * 0.84, n ? topY + H * 0.1 : H * 0.3, "重要的信号读得清楚了！", "say");
    ctx.restore();
  }

  // ================= 第 5 幕：速度与快感 =================
  function rewardView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    Anima.wash("#fff4f0", "#f7efff"); Anima.petals(8, 0.5, 60);
    const gx = W * 0.05, gy = Anima.topSafe() + H * 0.08, gw = W * (n ? 0.9 : 0.58), gh = H * (n ? 0.5 : 0.66);
    graphBox(gx, gy, gw, gh);
    const Y = (v) => gy + gh * (0.9 - v * 0.78), X = (u) => gx + gw * (0.06 + u * 0.9);
    const thr = 0.7;
    ctx.save(); ctx.setLineDash([6, 6]); outline(1.6); ctx.strokeStyle = C.bad; ctx.beginPath(); ctx.moveTo(gx + 6, Y(thr)); ctx.lineTo(gx + gw - 6, Y(thr)); ctx.stroke(); ctx.restore();
    text("快感线", gx + gw - fsz(2), Y(thr) - fsz(0.8), fsz(0.8), C.bad);
    text("伏隔核里的多巴胺", gx + fsz(4.8), gy + fsz(1), fsz(0.8), C.soft);
    const fast = (u) => (u < 0.08 ? 0.15 : 0.15 + 0.8 * Math.exp(-Math.pow((u - 0.2) / 0.08, 2) * (u < 0.2 ? 1 : 0.25)));
    const slow = (u) => 0.15 + 0.38 * ease((u - 0.05) / 0.5);
    const curve = (f, p, col) => {
      ctx.beginPath();
      for (let i = 0; i <= 100 * p; i++) { const u = i / 100; if (i) ctx.lineTo(X(u), Y(f(u))); else ctx.moveTo(X(u), Y(f(u))); }
      ctx.strokeStyle = col; ctx.lineWidth = 3.5; ctx.stroke();
      const u = p, px = X(u), py = Y(f(u));
      ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(1.2); ctx.stroke();
      return { x: px, y: py };
    };
    const pf = clamp((lt - 0.5) / 4, 0, 1), ps = clamp((lt - 6) / 4.5, 0, 1);
    const hf = curve(fast, pf, "#ff6f7d");
    const hs = ps > 0 ? curve(slow, ps, C.mintDeep) : null;
    const over = pf > 0.15 && pf < 0.34 && lt < 5.5;
    if (over) { Anima.speedLines(hf.x, hf.y, H * 0.05, 14, 0.6); for (let k = 0; k < 5; k++) sparkle(hf.x + Math.cos(k * 1.3 + time * 3) * H * 0.07, hf.y + Math.sin(k * 1.3 + time * 3) * H * 0.05, H * 0.02, 1, "#ffd76a"); }
    // 奖赏中心的小伙伴
    const cs = H * (n ? 0.045 : 0.05), bx = n ? W * 0.2 : W * 0.8, by = n ? H * 0.96 : H * 0.62;
    const party = lt > 1.4 && lt < 6, calm = lt > 7;
    for (let i = 0; i < 3; i++) {
      const x = bx + (i - 1) * cs * 2.2;
      chara(x, by, cs, { who: "DA", eyes: party ? "sparkle" : (calm ? "happy" : "open"), mouth: party ? "grin" : "smile", arms: party ? "up" : "down", jump: party ? Math.abs(Math.sin(time * 6 + i)) * 0.4 : 0, seed: i });
    }
    if (party) { sfx("中大奖！", bx, by - cs * 4.6, H * 0.05, "#ff6f7d", -0.12, 1); emote("heart", bx + cs * 3, by - cs * 3, cs * 0.7); }
    if (!n) text("伏隔核 · 奖赏中心", bx, by + cs * 0.9, fsz(0.9), C.ink);
    const topY = Anima.topSafe() + H * 0.01;
    callout("r-fast", win(1.6, n ? 6 : 14), X(0.2), Y(0.95), n ? W * 0.62 : X(0.45), topY, "猛冲：尖峰 → 快感、想再来");
    say("r-more", win(3.2, 6), bx, by - cs * 3.2, n ? W * 0.66 : W * 0.8, n ? H * 0.72 : H * 0.3, "还想再来一次！", "shout");
    if (hs) callout("r-slow", lt > 8, X(0.7), Y(slow(0.7)), n ? W * 0.5 : X(0.62), n ? topY : Y(0.2) + H * 0.02, "缓释：慢慢爬坡，停在线下");
    ctx.restore();
  }

  // ================= 第 6 幕：前体药在血液里被切开 =================
  function prodrugView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    Anima.wash("#fff5f3", "#fbeaf0");
    const vy0 = H * (n ? 0.56 : 0.46), vy1 = H * 0.9;
    // 血管
    ctx.beginPath(); ctx.moveTo(0, vy0); for (let x = 0; x <= W + 20; x += 20) ctx.lineTo(x, vy0 + Math.sin(x / 60 + time) * 3); ctx.lineTo(W + 20, vy1); ctx.lineTo(0, vy1); ctx.closePath();
    ctx.fillStyle = C.blood; ctx.fill(); outline(1.8); ctx.stroke();
    text("血管 · 血液流向 →", W * 0.14, vy1 - fsz(0.9), fsz(0.85), "#c2505c");
    // 大脑（上方）
    const brain = { x: W * (n ? 0.78 : 0.82), y: H * (n ? 0.3 : 0.28) }, br = H * 0.09;
    ctx.beginPath(); ctx.ellipse(brain.x, brain.y, br * 1.4, br, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd3dc"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.save(); ctx.strokeStyle = "#e9a3b5"; ctx.lineWidth = 2; for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(brain.x - br * 0.6 + k * br * 0.6, brain.y, br * 0.35, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke(); } ctx.restore();
    face(brain.x, brain.y + br * 0.3, br * 0.4, 1);
    // 红细胞（带剪刀的酶住在里面）
    const cs = H * (n ? 0.042 : 0.045), rbcs = [W * 0.34, W * 0.6].map((x, i) => ({ x, y: (vy0 + vy1) / 2 + (i ? cs * 0.6 : -cs * 0.4) }));
    rbcs.forEach((r, i) => {
      ctx.beginPath(); ctx.ellipse(r.x, r.y, H * 0.085, H * 0.06, 0, 0, Math.PI * 2); ctx.fillStyle = C.rbc; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(r.x, r.y, H * 0.05, H * 0.03, 0, 0, Math.PI * 2); ctx.fillStyle = mix(C.rbc, "#ffffff", 0.3); ctx.fill();
      chara(r.x, r.y + H * 0.03, cs * 0.75, { who: "AChE", label: "酶", item: "scissors", arms: "hold", eyes: "happy", hatColor: "#ffc2c8", cloth: "#ffe3e6", seed: i });
    });
    // 前体药一个个流过来，经过红细胞时被剪开
    let freed = 0;
    for (let i = 0; i < 6; i++) {
      const t0 = i * 1.8, u = (lt - t0) / 7;
      if (u < 0 || u > 1.6) continue;
      const x = lerp(-cs * 3, W * 0.9, u), y = (vy0 + vy1) / 2 + (i % 2 ? cs * 1.3 : -cs * 0.2) + Math.sin(time * 2 + i) * 3;
      const r = rbcs[i % 2], cutX = r.x + H * 0.1, cut = x > cutX;
      if (!cut) {
        chara(x, y + cs * 1.2, cs, { who: "drug", hatColor: C.amp, hatColor2: C.lis, tag: "赖右苯丙胺", arms: "hold", eyes: "closed", mouth: "cat", walk: time * 5 + i, gray: 0.3, seed: i });
        ctx.beginPath(); ctx.arc(x - cs * 1.3, y, cs * 0.35, 0, Math.PI * 2); ctx.fillStyle = C.lis; ctx.fill(); outline(1.2); ctx.stroke();
      } else {
        freed++;
        const k = clamp((x - cutX) / (W * 0.25), 0, 1);
        if (k < 0.2) sfx("咔嚓", cutX, y - cs * 3.6, H * 0.04, "#e8637a", -0.1, 1 - k * 5);
        const px = lerp(cutX, brain.x, k), py = lerp(y + cs * 1.2, brain.y + br, k);
        chara(px, py, cs, { who: "drug", hatColor: C.amp, tag: "右苯丙胺", arms: "up", eyes: "sparkle", mouth: "grin", walk: time * 9, alpha: 1 - clamp((k - 0.85) / 0.15, 0, 1), seed: i });
        ctx.save(); ctx.globalAlpha *= 1 - k; ctx.beginPath(); ctx.arc(cutX - cs * 0.5 - k * W * 0.05, y + k * H * 0.05, cs * 0.35, 0, Math.PI * 2); ctx.fillStyle = C.lis; ctx.fill(); outline(1.2); ctx.stroke(); ctx.restore();
      }
    }
    // 小曲线：平稳上升
    const mx = n ? W * 0.06 : W * 0.06, my = Anima.topSafe() + H * (n ? 0.12 : 0.06), mw = W * (n ? 0.44 : 0.3), mh = H * (n ? 0.2 : 0.24);
    graphBox(mx, my, mw, mh);
    const pp = clamp(lt / 12, 0, 1);
    ctx.beginPath();
    for (let i = 0; i <= 60 * pp; i++) { const u = i / 60, v = 0.1 + 0.7 * ease(u / 0.8); const X = mx + mw * (0.08 + u * 0.84), Y = my + mh * (0.88 - v * 0.75); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
    ctx.strokeStyle = C.mintDeep; ctx.lineWidth = 3; ctx.stroke();
    text("大脑里的药：慢慢升", mx + mw / 2, my + mh + fsz(0.9), fsz(0.85), C.ink);
    const topY = Anima.topSafe() + H * 0.02;
    callout("p-tail", win(0.8, 4.5), W * 0.1, (vy0 + vy1) / 2 + cs * 0.2, n ? W * 0.62 : W * 0.5, n ? topY : H * 0.36, "赖氨酸尾巴：连着时不起作用");
    callout("p-cut", win(4.8, 9.5), rbcs[0].x, rbcs[0].y, n ? W * 0.62 : W * 0.5, n ? topY : H * 0.36, "红细胞里的酶慢慢剪开");
    say("p-go", lt > 9.8, brain.x - br, brain.y + br * 0.5, n ? W * 0.62 : W * 0.55, n ? topY + H * 0.08 : H * 0.3, "剪一个进一个，上升自然平稳", "box");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 3; i++) if (S["v" + i] > 0.02) synView(S["v" + i], i);
    if (S.v3 > 0.02) tonicView(S.v3);
    if (S.v4 > 0.02) rewardView(S.v4);
    if (S.v5 > 0.02) prodrugView(S.v5);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0662a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#ff9a52",
    titleCard: { lines: ["两种兴奋剂", "两种开门法"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
