Anima.register("anxiety-subtypes", {
    "title": "惊恐、社交焦虑、广泛性焦虑：同中有异",
    "tag": "焦虑与创伤",
    "headline": "各种焦虑障碍，【同】在哪里，【异】在哪里？",
    "lede": "惊恐障碍、社交焦虑、广泛性焦虑和创伤后应激，都有“恐惧”和“担忧”两个核心，用的也多半是同一套回路：杏仁核警报塔和 CSTC 担忧环线。不同的是警报失灵的方式：一直低鸣、突然大响、只在人前响，或被创伤线索触发。",
    "summary": "恐惧（杏仁核）与担忧（CSTC）两个核心；各亚型回路失灵方式的不同；惊恐发作与预期焦虑、社交焦虑、广泛性焦虑、PTSD 的特点；与抑郁的症状重叠；SSRI/SNRI + 认知行为治疗的共同骨架和各型的补充用药。",
    "chapter": "对应 Stahl《精神药理学精要》第 8 章 · 各类焦虑障碍的治疗",
    "footer": "焦虑障碍是可以治疗的。用药和心理治疗的安排请听医生的，不要自己加减药或用酒精来缓解紧张。",
    "canvasLabel": "杏仁核警报塔和担忧环线小火车，在不同焦虑障碍里以不同方式失灵的动画",
    "regions": ["amygdala", "pfc"],
    "parts": ["anxiety"],
    "cast": ["neuron", "Glu", "drug"],
    "color": "#f2a0b8"
  }, () => {
  const V = (i) => { const o = {}; for (let k = 0; k < 7; k++) o["v" + k] = k === i ? 1 : 0; return o; };
  const CH = [
    Object.assign({ title: "两个核心：恐惧和担忧",
      pill: ["恐惧", "杏仁核"], pill2: ["担忧", "CSTC 环线"],
      text: "惊恐障碍、社交焦虑、广泛性焦虑，名字各不相同，底子却很像：都有“恐惧”和“担忧”两个核心。恐惧像杏仁核这座警报塔突然拉响，心跳加快、只想逃；担忧像皮层、纹状体、丘脑连成的环线上的小火车，载着“万一……”一圈圈绕，停不下来。这两套回路，前几集分别讲过。",
      fact: "焦虑障碍的两个核心症状：恐惧（杏仁核回路）和担忧（CSTC 回路）" }, V(0)),
    Object.assign({ title: "同一套回路，不同的失灵",
      pill: ["回路", "大体相同"], pill2: ["不同", "失灵方式"],
      text: "书中的看法是：不同焦虑障碍用的多半是同一套回路和递质，区别在于失灵的方式。广泛性焦虑像一直低声嗡嗡的警报，持续不断，却不算猛烈；惊恐障碍平时安静，会毫无预兆地突然大响；社交焦虑的大响，只在特定的社交场合出现；创伤后应激则是被创伤“训练”出来的，一碰到相关线索就响。",
      fact: "区分各型焦虑的，可能不是回路本身，而是回路失灵的方式" }, V(1)),
    Object.assign({ title: "惊恐障碍：突如其来",
      pill: ["发作", "突然·意外"], pill2: ["之后", "预期焦虑"],
      text: "惊恐障碍的主角是意料之外的惊恐发作：心跳猛冲、喘不上气、头晕，甚至觉得自己要不行了，一般几分钟内到顶，再慢慢退去。更折磨人的常常是两次发作之间：总担心下一次什么时候来，这叫预期焦虑；于是开始躲开地铁、人多的地方，生活圈越缩越小。恐惧在前，担忧和回避跟在后面。",
      fact: "惊恐障碍：意外的惊恐发作，加上担心再次发作的预期焦虑和回避" }, V(2)),
    Object.assign({ title: "社交焦虑：怕被评价",
      pill: ["害怕", "被人评价"], pill2: ["发作", "可以预料"],
      text: "社交焦虑害怕的是被人注视和评价：发言、聚会、在别人面前吃饭或写字，都可能拉响警报，脸红、手抖、心跳快，也可能出现惊恐发作，不过它们是可以预料的，只在这些场合出现。于是人常常提前好几天就开始担心，并尽量躲开。只在上台表演、演讲时特别紧张的，叫表演型社交焦虑。",
      fact: "社交焦虑的恐惧和发作，集中在可以预料的社交或表演场合" }, V(3)),
    Object.assign({ title: "广泛性焦虑和创伤后应激",
      pill: ["广泛性", "长期担忧"], pill2: ["PTSD", "恐惧记忆"],
      text: "广泛性焦虑的担忧没有固定对象：工作、健康、家人，什么都可能“万一”，而且持续很久，常伴着疲劳、肌肉紧绷、睡不好、易烦躁。创伤后应激障碍源于一次可怕的经历：恐惧被牢牢记住，相关的声音、气味都能把人拉回当时，还有噩梦、一惊一乍和回避。它现在被归入创伤和应激相关障碍。",
      fact: "广泛性焦虑重在长期担忧；PTSD 重在被条件化的恐惧记忆" }, V(4)),
    Object.assign({ title: "和抑郁的拼图",
      pill: ["核心", "各不相同"], pill2: ["周边", "大量重叠"],
      text: "焦虑和抑郁像两块拼图：抑郁的核心是情绪低落、失去兴趣，焦虑的核心是恐惧和担忧，但周边的拼块大量重合，比如睡不好、注意力差、容易累、坐立不安。多几块或少几块，一种诊断就可能变成另一种，它们也常常同时出现。所以医生除了看诊断名，还会逐条看症状，再对应到回路去选择治疗。",
      fact: "焦虑和抑郁的核心不同，但睡眠、注意力、疲劳、激越等症状大量重叠" }, V(5)),
    Object.assign({ title: "共同的骨架，各自的补充",
      pill: ["骨架", "SSRI/SNRI"], pill2: ["加上", "认知行为"],
      text: "治疗也是同中有异。共同的骨架是 SSRI 或 SNRI，加上认知行为治疗，尤其是暴露练习。各型再有补充：苯二氮䓬可以短期帮忙，但有依赖风险；普瑞巴林等 α2δ 配体常用于广泛性焦虑；只在表演时紧张的，有时用 β 受体阻滞剂；PTSD 的噩梦可以用哌唑嗪。请别用酒来壮胆。研究者还在尝试让暴露治疗“学得更牢”。",
      fact: "共同骨架：SSRI/SNRI + 认知行为治疗；各型再加各自的补充" }, V(6)),
  ];

  const C = Object.assign({}, Anima.C, { acc: "#f2a0b8", accD: "#d9648a" });
  const { clamp, lerp, ease, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = V(0);
  const ME = { who: "neuron", hair: "#8a6f9e", cloth: "#ffe3ec" };
  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

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
  function card(b, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(b.x, b.y, b.w, b.h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(b.x, b.y, b.w, b.h, 18); ctx.stroke();
    if (title) plate(title, b.x + b.w / 2, b.y, color || "#ffe3ec", fz(0.028), b.x + 2, b.x + b.w - 2);
  }
  function bg(top, bot, seed) {
    Anima.wash(top, bot);
    Anima.bokeh(6, "#ffd6e2", 0.6, seed);
    Anima.petals(6, 0.4, seed + 3);
  }
  function fade(a, fn) { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha *= a; fn(); ctx.restore(); }
  function top() { return Anima.topSafe() + H * 0.06; }
  function two() {
    const t = top(), g = W * 0.03, w = (W - g * 3) / 2, h = H - t - H * 0.04;
    return [{ x: g, y: t, w, h }, { x: g * 2 + w, y: t, w, h }];
  }
  // 杏仁核警报塔：alarm 0～1
  function tower(x, y, h, alarm) {
    const w = h * 0.34;
    rrect(x - w / 2, y - h, w, h, w * 0.2); ctx.fillStyle = "#f3e3ff"; ctx.fill(); outline(1.8); ctx.stroke();
    if (alarm > 0.3) glow(x, y - h - w * 0.2, h * 0.6, "#ff8a8a", alarm * (0.6 + 0.4 * Math.sin(time * 12)));
    ctx.beginPath(); ctx.arc(x, y - h, w * 0.55, Math.PI, 0); ctx.closePath(); ctx.fillStyle = Anima.mix("#e0d4f5", "#ff8a8a", clamp(alarm * 1.4, 0, 1)); ctx.fill(); outline(1.6); ctx.stroke();
    face(x, y - h * 0.45, w * 0.32, alarm > 0.5 ? -1 : 1);
    return { top: y - h - w * 0.55 };
  }
  // 担忧环线和小火车
  function loop(cx, cy, rx, ry, spd, s) {
    ctx.strokeStyle = "#e8d6c5"; ctx.lineWidth = Math.max(4, H * 0.02);
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke();
    for (const d of [-1, 1]) { ctx.beginPath(); ctx.ellipse(cx, cy, rx + d * H * 0.012, ry + d * H * 0.012, 0, 0, Math.PI * 2); outline(1.4); ctx.stroke(); }
    const q = time * spd, x = cx + rx * Math.cos(q), y = cy + ry * Math.sin(q);
    rrect(x - s * 1.2, y - s * 0.9, s * 2.4, s * 0.9, s * 0.3); ctx.fillStyle = "#ffd27a"; ctx.fill(); outline(1.5); ctx.stroke();
    chara(x, y - s * 0.6, s * 0.75, { who: "Glu", dir: -Math.sin(q) >= 0 ? 1 : -1, arms: "hold", item: "letter", eyes: "open", mouth: "wavy", shadow: false });
    return { x, y };
  }

  // ---------- 第 1 幕：两个核心 ----------
  function v0(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#fff5f8", "#f5f3ff", 11);
      const [L, R] = two();
      card(L, nw ? "恐惧：杏仁核" : "恐惧：杏仁核警报塔", "#ffe3e6");
      card(R, nw ? "担忧：CSTC" : "担忧：CSTC 环线", "#e4eefb");
      const al = lt > 2 && lt < 7 ? 1 : 0.15;
      const tw = tower(L.x + L.w * 0.38, L.y + L.h * 0.82, L.h * 0.5, al);
      const s = Math.min(H * 0.05, L.w * 0.09);
      chara(L.x + L.w * 0.72, L.y + L.h * 0.9, s, Object.assign({}, ME, { eyes: al > 0.5 ? "wide" : "open", mouth: al > 0.5 ? "wavy" : "smile", brow: al > 0.5 ? "worry" : null, arms: al > 0.5 ? "up" : "down" }));
      if (al > 0.5) { sfx("呜——", L.x + L.w * 0.62, L.y + L.h * 0.22, fz(0.036), "#e8637a", -0.1, 1); emote("sweat", L.x + L.w * 0.72 + s, L.y + L.h * 0.9 - s * 3.2, s * 0.7); }
      const cx = R.x + R.w / 2, cy = R.y + R.h * 0.55;
      loop(cx, cy, R.w * 0.34, R.h * 0.26, 1.3, Math.min(H * 0.04, R.w * 0.07));
      chara(cx, cy + R.h * 0.12, s * 0.9, Object.assign({}, ME, { eyes: "open", mouth: "wavy", brow: "worry", arms: "hug" }));
      fade(prog(7, 1), () => emote("?", cx + s, cy + R.h * 0.12 - s * 3.3, s * 0.6));
      callout("a0-t", lt > 2.2 && lt < 7, L.x + L.w * 0.38, tw.top, L.x + L.w * 0.38, L.y + L.h * 0.12, nw ? "心跳快、想逃" : "警报：心跳加快、想逃");
      say("a0-w", lt > 7.5, cx, cy - R.h * (nw ? 0.02 : 0.2), cx, nw ? cy - R.h * 0.17 : R.y + R.h * 0.12, nw ? "万一……" : "万一……又万一……", "think");
    });
  }

  // ---------- 第 2 幕：四种失灵方式 ----------
  const ROWS = [
    ["广泛性焦虑", "广泛性", (t) => 0.42 + Math.sin(t * 60) * 0.06 + Math.sin(t * 23) * 0.04, "一直低鸣", "#fff1c9"],
    ["惊恐障碍", "惊恐", (t) => 0.1 + 0.85 * Math.max(Math.exp(-Math.pow((t - 0.3) * 30, 2)), Math.exp(-Math.pow((t - 0.78) * 30, 2))), "突然、意外", "#ffe3e6"],
    ["社交焦虑", "社交", (t) => 0.1 + 0.75 * Math.max(bump(t, 0.45, 0.58), bump(t, 0.82, 0.93)), "只在人前", "#efe6fb"],
    ["创伤后应激", "PTSD", (t) => 0.12 + 0.8 * Math.max(Math.exp(-Math.pow((t - 0.52) * 26, 2)), Math.exp(-Math.pow((t - 0.86) * 26, 2))), "线索触发", "#e4eefb"],
  ];
  function bump(t, a, b) { return ease((t - a) / 0.03) * (1 - ease((t - b) / 0.03)); }
  function v1(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#fff8f2", "#f7f3ff", 21);
      const t0 = top() - H * 0.02, b = { x: W * 0.03, y: t0, w: W * 0.94, h: H - t0 - H * 0.03 };
      card(b, null);
      const lw = b.w * (nw ? 0.2 : 0.17), tagW = nw ? 0 : b.w * 0.16;
      const px = b.x + lw, pw = b.w - lw - tagW - b.w * 0.03, rh = b.h / 4;
      const scan = clamp((lt - 0.5) / 8, 0, 1);
      ROWS.forEach((r, i) => {
        const y0 = b.y + rh * i, base = y0 + rh * 0.85, amp = rh * 0.7;
        if (i) { ctx.strokeStyle = alpha(C.line, 0.2); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(b.x + 10, y0); ctx.lineTo(b.x + b.w - 10, y0); ctx.stroke(); }
        // 触发标记：社交场合、创伤线索
        if (i === 2) [[0.45, 0.58], [0.82, 0.93]].forEach((z) => { ctx.fillStyle = alpha("#c3a6ec", 0.18); ctx.fillRect(px + pw * z[0], y0 + rh * 0.1, pw * (z[1] - z[0]), rh * 0.78); if (scan > z[0]) emote("sweat", px + pw * (z[0] + z[1]) / 2, y0 + rh * 0.25, rh * 0.12); });
        if (i === 3) {
          Anima.bolt(px + pw * 0.04, y0 + rh * 0.3, rh * 0.18, 1, C.bad);
          [0.5, 0.84].forEach((z) => { if (scan > z - 0.02) Anima.bolt(px + pw * z - rh * 0.25, y0 + rh * 0.3, rh * 0.12, 1, C.warn); });
        }
        outline(1.3); ctx.beginPath(); ctx.moveTo(px, base); ctx.lineTo(px + pw, base); ctx.stroke();
        if (scan > 0) {
          ctx.strokeStyle = [C.warn, C.bad, C.lavDeep, C.skyDeep][i]; ctx.lineWidth = Math.max(2.5, H * 0.006); ctx.lineJoin = "round";
          ctx.beginPath();
          for (let k = 0; k <= 120 * scan; k++) { const t = k / 120, x = px + pw * t, y = base - amp * r[2](t); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
          ctx.stroke();
        }
        if (i === 1 && scan > 0.3) sfx("!", px + pw * 0.3, y0 + rh * 0.14, rh * 0.3, C.bad, 0, 1);
        text(nw ? r[1] : r[0], b.x + lw * 0.5, y0 + rh * 0.5, fz(nw ? 0.026 : 0.03), C.ink);
        if (!nw) fade(prog(9 + i * 0.6, 0.6), () => plate(r[3], px + pw + tagW / 2 + b.w * 0.015, y0 + rh * 0.5, r[4], fz(0.026), px + pw, b.x + b.w - 4));
      });
      text("时间 →", px + pw, b.y + b.h - fz(0.022) * 0.7, fz(0.022), C.soft, "right");
      if (nw) {
        callout("a1-g", lt > 9 && lt < 11, px + pw * 0.9, b.y + rh * 0.4, px + pw * 0.7, b.y + rh * 0.02, "一直低鸣");
        callout("a1-p", lt > 11, px + pw * 0.78, b.y + rh * 1.2, px + pw * 0.55, b.y + rh * 1.02, "突然、意外");
      }
    });
  }

  // ---------- 第 3 幕：惊恐障碍 ----------
  function v2(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#fff5f5", "#f6f3ff", 31);
      const [L, R] = two();
      card(L, nw ? "意外的发作" : "意外的惊恐发作", "#ffe3e6");
      card(R, nw ? "发作之间" : "两次发作之间", "#e4eefb");
      const s = Math.min(H * 0.05, L.w * 0.09);
      const hit = lt > 1.8 && lt < 6.5 ? 1 : 0;
      const tw = tower(L.x + L.w * 0.25, L.y + L.h * 0.85, L.h * 0.45, hit ? 1 : 0.1);
      const mx = L.x + L.w * 0.65, my = L.y + L.h * 0.88;
      if (hit) { ctx.save(); rrect(L.x, L.y, L.w, L.h, 18); ctx.clip(); speedLines(mx, my - s * 1.6, s * 2.2, 18, 0.8); ctx.restore(); }
      chara(mx, my, s, Object.assign({}, ME, { walk: hit ? null : time * 7, eyes: hit ? "wide" : "open", mouth: hit ? "o" : "smile", brow: hit ? "worry" : null, arms: hit ? "hug" : "down" }));
      if (hit) { Anima.heart(mx + s * 1.3, my - s * 2.2 - Math.abs(Math.sin(time * 14)) * s * 0.3, s * 0.45, C.bad); emote("sweat", mx - s * 1.1, my - s * 3.2, s * 0.6); }
      if (hit) sfx("怦怦！", mx, L.y + L.h * 0.22, fz(0.036), C.bad, -0.1, 1);
      fade(prog(5, 1), () => plate(nw ? "几分钟到顶 ⚠" : "通常几分钟内到顶，再退去 ⚠", L.x + L.w / 2, L.y + L.h * 0.12 + fz(0.03), "#fff", fz(0.024), L.x, L.x + L.w));
      // 右：预期焦虑和回避
      const rx = R.x + R.w * 0.3, ry = R.y + R.h * 0.88;
      const avoid = prog(8.5, 1.4);
      chara(lerp(rx, R.x + R.w * 0.14, avoid), ry, s, Object.assign({}, ME, { eyes: "open", mouth: "wavy", brow: "worry", dir: avoid > 0 ? -1 : 1, walk: avoid > 0 && avoid < 1 ? time * 8 : null }));
      const dx = R.x + R.w * 0.72, dy = R.y + R.h * 0.88, dw = R.w * 0.3, dh = R.h * 0.5;
      rrect(dx - dw / 2, dy - dh, dw, dh, 10); ctx.fillStyle = "#e4eefb"; ctx.fill(); outline(1.6); ctx.stroke();
      outline(1.4); ctx.beginPath(); ctx.moveTo(dx, dy - dh); ctx.lineTo(dx, dy); ctx.stroke();
      plate(nw ? "地铁" : "地铁·人多处", dx, dy - dh - fz(0.024) * 0.2, "#fff", fz(0.024), R.x, R.x + R.w);
      if (avoid > 0) fade(avoid, () => { ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(3, H * 0.008); ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(dx - dw * 0.35, dy - dh * 0.75); ctx.lineTo(dx + dw * 0.35, dy - dh * 0.2); ctx.moveTo(dx + dw * 0.35, dy - dh * 0.75); ctx.lineTo(dx - dw * 0.35, dy - dh * 0.2); ctx.stroke(); });
      say("a2-w", lt > 6.5 && lt < 10.5, rx, ry - s * 3.2, R.x + R.w * 0.4, R.y + R.h * (nw ? 0.36 : 0.2), nw ? "下次又来怎么办？" : "下次什么时候又来？", "think");
      callout("a2-av", lt > 10, dx, dy - dh * 0.5, R.x + R.w * 0.5, R.y + R.h * (nw ? 0.2 : 0.12), nw ? "回避：圈子变小" : "回避：生活圈越缩越小");
      callout("a2-t", hit && lt < 5, L.x + L.w * 0.25, tw.top, L.x + L.w * 0.3, L.y + L.h * 0.3, nw ? "毫无预兆" : "毫无预兆地大响");
    });
  }
  const speedLines = (x, y, r, n, a) => Anima.speedLines(x, y, r, n, a);

  // ---------- 第 4 幕：社交焦虑 ----------
  function v3(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#fbf5ff", "#fff6f0", 41);
      const t0 = top(), b = { x: W * 0.03, y: t0, w: W * 0.94, h: H - t0 - H * 0.04 };
      card(b, nw ? "在别人面前" : "在别人的注视下", "#efe6fb");
      const s = Math.min(H * 0.055, b.w * 0.05);
      const stx = b.x + b.w * (nw ? 0.3 : 0.28), sty = b.y + b.h * 0.62;
      // 舞台和聚光灯
      ctx.fillStyle = alpha("#fff1b8", 0.55); ctx.beginPath(); ctx.moveTo(stx - s * 0.6, b.y + H * 0.02); ctx.lineTo(stx - s * 2.4, sty); ctx.lineTo(stx + s * 2.4, sty); ctx.lineTo(stx + s * 0.6, b.y + H * 0.02); ctx.closePath(); ctx.fill();
      rrect(stx - s * 3, sty, s * 6, s * 0.6, s * 0.2); ctx.fillStyle = "#e9d7c7"; ctx.fill(); outline(1.5); ctx.stroke();
      const on = lt > 1.5;
      chara(stx, sty, s, Object.assign({}, ME, { eyes: on ? "wide" : "open", mouth: on ? "wavy" : "smile", brow: on ? "worry" : null, arms: on ? "hold" : "down", item: on ? "book" : null }));
      if (on) { emote("sweat", stx + s * 1.1, sty - s * 3.3, s * 0.6); Anima.blushAt(stx, sty - s * 2.05, s * 0.45, s * 0.2); }
      // 观众的眼睛
      const n = nw ? 4 : 6;
      for (let k = 0; k < n; k++) {
        const x = b.x + b.w * (0.08 + k * (nw ? 0.12 : 0.085)), y = b.y + b.h * 0.9;
        chara(x, y, s * 0.55, { who: "neuron", hair: ["#b08968", "#7a8ba6", "#c98f6d", "#8f86e2", "#62c9ab", "#ec6470"][k], cloth: "#f1eef0", dir: 1, eyes: "open", mouth: "flat", shadow: false, look: 1 });
      }
      // 右侧：提前几天的担心 + 可预料
      const R = { x: b.x + b.w * 0.58, w: b.w * 0.4 };
      const cal = prog(5.5, 1);
      if (cal > 0) fade(cal, () => {
        const cw = R.w * (nw ? 0.7 : 0.6), ch = b.h * 0.34, cx = R.x + R.w / 2 - cw / 2, cy = b.y + b.h * 0.12;
        rrect(cx, cy, cw, ch, 10); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
        ctx.fillStyle = "#ffc2c9"; rrect(cx, cy, cw, ch * 0.22, 10); ctx.fill(); outline(1.4); ctx.stroke();
        for (let d = 0; d < 5; d++) {
          const x = cx + cw * (0.14 + d * 0.18), y = cy + ch * 0.6;
          ctx.beginPath(); ctx.arc(x, y, Math.min(cw * 0.07, ch * 0.14), 0, Math.PI * 2);
          ctx.fillStyle = d === 4 ? "#ff8a8a" : alpha("#c3a6ec", 0.3 + d * 0.12 * prog(6.5, 3)); ctx.fill(); outline(1.2); ctx.stroke();
        }
        text(nw ? "发言日" : "发言那天", cx + cw * 0.86, cy + ch * 0.92, fz(0.022), C.ink, "right");
      });
      fade(prog(9, 1), () => plate(nw ? "表演型：只怕上台" : "表演型：只在上台、演讲时紧张", R.x + R.w / 2, b.y + b.h * 0.62, "#fff4d6", fz(nw ? 0.026 : 0.03), R.x, R.x + R.w));
      fade(prog(3, 1), () => plate(nw ? "怕被评价" : "怕被注视、被评价", R.x + R.w / 2, b.y + b.h * 0.76, "#ffe3e6", fz(nw ? 0.026 : 0.03), R.x, R.x + R.w));
      callout("a3-cal", lt > 6.5 && lt < 9, R.x + R.w * 0.4, b.y + b.h * 0.3, R.x + R.w * 0.5, b.y + b.h * 0.5, nw ? "提前几天就担心" : "提前好几天就开始担心");
      say("a3-s", lt > 2 && lt < 5.5, stx, sty - s * 3.2, stx + b.w * (nw ? 0.28 : 0.22), b.y + b.h * 0.2, nw ? "大家都在看我……" : "大家都在看我，\n会不会出丑……", "think");
    });
  }

  // ---------- 第 5 幕：广泛性焦虑和 PTSD ----------
  function v4(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#fff8ef", "#f3f7fd", 51);
      const [L, R] = two();
      card(L, "广泛性焦虑", "#fff1c9");
      card(R, nw ? "PTSD" : "创伤后应激障碍", "#e4eefb");
      const s = Math.min(H * 0.05, L.w * 0.09);
      // 左：担心绕着转
      const cx = L.x + L.w / 2, cy = L.y + L.h * 0.52;
      chara(cx, L.y + L.h * 0.9, s, Object.assign({}, ME, { eyes: "sleepy", mouth: "wavy", brow: "worry", arms: "hug" }));
      const ws = nw ? ["工作", "健康", "家人"] : ["工作？", "健康？", "家人？", "钱？"];
      ws.forEach((t, i) => {
        const q = time * 0.6 + i / ws.length * Math.PI * 2;
        fade(prog(0.8 + i * 0.7, 0.6), () => plate(t, cx + Math.cos(q) * L.w * 0.3, cy - L.h * 0.12 + Math.sin(q) * L.h * 0.12, "#fff4d6", fz(nw ? 0.026 : 0.03), L.x, L.x + L.w));
      });
      fade(prog(4.5, 1), () => plate(nw ? "持续很久" : "持续很久：累、紧、睡不好", cx, L.y + L.h * 0.62, "#fff", fz(0.024), L.x, L.x + L.w));
      // 右：创伤记忆被线索唤起
      const px = R.x + R.w * 0.3, py = R.y + R.h * 0.9;
      const cue = lt > 7 && lt < 10.5;
      const bx = R.x + R.w * 0.66, by = R.y + R.h * 0.4, bw = R.w * 0.36, bh = R.h * 0.26;
      rrect(bx - bw / 2, by - bh / 2, bw, bh, 10); ctx.fillStyle = cue ? "#ffe3e6" : "#f1eef0"; ctx.fill(); outline(1.6); ctx.stroke();
      text(nw ? "记忆" : "恐惧记忆", bx, by, fz(0.026), C.ink);
      if (cue) { glow(bx, by, bw * 0.8, "#ff8a8a", 0.5 + 0.3 * Math.sin(time * 10)); sfx("砰！", R.x + R.w * (nw ? 0.72 : 0.2), R.y + R.h * (nw ? 0.72 : 0.2), fz(0.04), C.bad, -0.15, 1); }
      chara(px, py, s, Object.assign({}, ME, { eyes: cue ? "wide" : "open", mouth: cue ? "o" : "flat", brow: "worry", arms: cue ? "hug" : "down", jump: cue && lt < 7.6 ? 0.4 : 0 }));
      if (cue) emote("!", px + s, py - s * 3.4, s * 0.6);
      fade(prog(4, 1), () => plate(nw ? "一次可怕的经历" : "源于一次可怕的经历", R.x + R.w / 2, R.y + R.h * 0.12 + fz(0.03), "#fff", fz(0.024), R.x, R.x + R.w));
      fade(prog(10.5, 1), () => plate(nw ? "噩梦·易惊" : "噩梦、一惊一乍、回避", bx, by + bh / 2 + fz(0.03), "#e4eefb", fz(0.024), R.x, R.x + R.w));
      callout("a4-cue", cue, bx - bw / 2, by, nw ? R.x + R.w * 0.4 : px, R.y + R.h * (nw ? 0.3 : 0.62), nw ? "线索拉回当时" : "声音、气味把人拉回当时");
    });
  }

  // ---------- 第 6 幕：和抑郁的拼图 ----------
  function piece(x, y, w, h, color, t, fs) {
    rrect(x - w / 2, y - h / 2, w, h, 8); ctx.fillStyle = color; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + w / 2, y, h * 0.16, -Math.PI / 2, Math.PI / 2); ctx.fillStyle = color; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function v5(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#f7f5ff", "#fff6f3", 61);
      const t0 = top() - H * 0.02, cx = W / 2;
      const pw = W * (nw ? 0.27 : 0.2), ph = H * (nw ? 0.1 : 0.1), fs = fz(nw ? 0.024 : 0.028);
      const sh = prog(4, 2);
      const lx = lerp(W * 0.18, W * (nw ? 0.17 : 0.22), sh), rx = lerp(W * 0.82, W * (nw ? 0.83 : 0.78), sh);
      const rows = [t0 + H * 0.12, t0 + H * 0.28, t0 + H * 0.44];
      plate("抑郁", lx, t0 + H * 0.02, "#e4eefb", fz(0.03));
      plate("焦虑", rx, t0 + H * 0.02, "#ffe3e6", fz(0.03));
      piece(lx, rows[0], pw, ph, "#c8e0f7", nw ? "低落" : "情绪低落", fs);
      piece(lx, rows[1], pw, ph, "#c8e0f7", nw ? "没兴趣" : "失去兴趣", fs);
      piece(rx, rows[0], pw, ph, "#ffc2c9", "恐惧", fs);
      piece(rx, rows[1], pw, ph, "#ffc2c9", "担忧", fs);
      if (!nw) { piece(lx, rows[2], pw, ph, "#c8e0f7", "自责", fs); piece(rx, rows[2], pw, ph, "#ffc2c9", "肌肉紧", fs); }
      const shared = nw ? ["睡不好", "注意力差", "容易累", "坐立不安"] : ["睡不好", "注意力差", "容易累", "坐立不安"];
      const sy0 = t0 + H * (nw ? 0.2 : 0.14);
      shared.forEach((t, i) => fade(prog(1.2 + i * 0.6, 0.6), () => {
        const y = sy0 + i * H * (nw ? 0.12 : 0.13);
        piece(cx, y, pw * (nw ? 1.05 : 1), ph, "#dff5ec", t, fs);
      }));
      const fy = H * 0.9;
      fade(prog(7.5, 1), () => plate(nw ? "常常同时出现" : "核心不同，周边重叠，常常同时出现", cx, fy - (nw ? 0 : H * 0.02), "#fff4d6", fz(0.026)));
      callout("a5-sh", lt > 4 && lt < 7.3, cx - pw / 2, sy0, nw ? W * 0.3 : W * 0.3, H * (nw ? 0.84 : 0.86), nw ? "共有的拼块" : "两边共有的拼块");
      const dx = W * (nw ? 0.83 : 0.9), s = H * 0.042;
      if (!nw) chara(dx, H * 0.95, s, { who: "neuron", hair: "#6d5a8a", cloth: "#ffffff", glasses: true, eyes: "happy", arms: lt > 9 ? "point" : "hold", item: lt > 9 ? null : "book", dir: -1, tag: "医生" });
      say("a5-d", !nw && lt > 9.5, dx, H * 0.95 - s * 3.2, W * 0.78, H * 0.68, "逐条看症状～", "say");
    });
  }

  // ---------- 第 7 幕：治疗 ----------
  function v6(a) {
    fade(a, () => {
      const nw = Anima.narrow; bg("#f3fbf7", "#fff6f3", 71);
      const t0 = top();
      const core = { x: W * (nw ? 0.1 : 0.3), y: t0, w: W * (nw ? 0.8 : 0.4), h: H * 0.2 };
      card(core, "共同的骨架", "#dff5ec");
      const s = Math.min(H * 0.04, core.h * 0.25), ds = H * (nw ? 0.045 : 0.065);
      const r1 = core.y + core.h * (nw ? 0.4 : 0.58);
      plate("SSRI / SNRI", core.x + core.w * 0.28, r1, "#e4eefb", fz(0.028), core.x, core.x + core.w / 2);
      plate(nw ? "认知行为治疗" : "认知行为治疗·暴露", core.x + core.w * 0.72, r1, "#fff4d6", fz(0.028), core.x + core.w / 2, core.x + core.w);
      text("+", core.x + core.w / 2, r1, fz(0.04), C.accD);
      const items = [
        ["广泛性焦虑", nw ? "α2δ 配体等" : "普瑞巴林等 α2δ 配体", "#fff1c9"],
        ["惊恐障碍", nw ? "苯二氮䓬短期" : "苯二氮䓬：短期帮忙", "#ffe3e6"],
        ["社交焦虑", nw ? "表演型：β 阻滞剂 ⚠" : "表演型：β 受体阻滞剂 ⚠", "#efe6fb"],
        ["PTSD", nw ? "噩梦：哌唑嗪" : "噩梦：哌唑嗪", "#e4eefb"],
      ];
      const gy = core.y + core.h + H * 0.07, gap = W * 0.02, cols = nw ? 2 : 4, cw = (W - gap * (cols + 1)) / cols;
      const rg = nw ? H * 0.07 : 0, chh = nw ? (H * 0.97 - gy - rg) / 2 : H * 0.97 - gy;
      items.forEach((it, i) => {
        const bx = gap + (i % cols) * (cw + gap), by = gy + Math.floor(i / cols) * (chh + rg);
        const p = prog(1.5 + i * 1.6, 0.8);
        const b = { x: bx, y: by, w: cw, h: chh };
        // 连到骨架的线
        ctx.strokeStyle = alpha(C.line, 0.35); ctx.lineWidth = 2; ctx.setLineDash([4, 5]);
        ctx.beginPath(); ctx.moveTo(bx + cw / 2, by); ctx.lineTo(core.x + core.w / 2, core.y + core.h); ctx.stroke(); ctx.setLineDash([]);
        card(b, it[0], it[2]);
        if (p > 0) fade(p, () => {
          const dy = by + chh * 0.62;
          if (!nw) chara(bx + cw / 2, dy, Math.min(ds, chh * 0.16), { who: "drug", label: "", hatColor: ["#ffd27a", "#ff9aa9", "#c3a6ec", "#9fc3ea"][i], hatColor2: "#fff", eyes: "happy", arms: "wave", shadow: false });
          plate(it[1], bx + cw / 2, by + chh * (nw ? 0.6 : 0.84), "#fff", fz(nw ? 0.022 : 0.027), bx + 2, bx + cw - 2);
        });
      });
      fade(prog(9.5, 1), () => {
        if (nw) plate("别用酒来壮胆", W / 2, core.y + core.h * 0.78, "#ffe3e6", fz(0.024));
        else plate("别用酒来壮胆", core.x - W * 0.14, core.y + core.h * 0.5, "#ffe3e6", fz(0.026), 4, core.x);
      });
      if (!nw) fade(prog(11, 1), () => plate("研究中：让暴露“学得更牢”", core.x + core.w + W * 0.15, core.y + core.h * 0.5, "#f6f0ff", fz(0.024), core.x + core.w, W - 4));
      callout("a6-bz", !nw && lt > 4.5 && lt < 8.5, gap * 2 + cw * 1.5, gy + chh * 0.55, gap * 2 + cw * 1.5, gy + chh * 0.2, "有依赖风险，遵医嘱");
    });
  }

  const VIEWS = [v0, v1, v2, v3, v4, v5, v6];
  function draw() {
    ctx.fillStyle = "#fff8fa"; ctx.fillRect(0, 0, W, H);
    VIEWS.forEach((f, i) => { if (S["v" + i] > 0.02) f(S["v" + i]); });
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.accD, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: 14, accent: "#f2a0b8",
    titleCard: { lines: ["各种焦虑障碍", "同中有异"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
