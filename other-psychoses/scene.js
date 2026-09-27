Anima.register("other-psychoses", {
    "title": "不只是精神分裂症：各种精神病性障碍",
    "tag": "精神病",
    "headline": "幻觉和妄想，【不只】出现在精神分裂症里",
    "lede": "“精神病”是一组症状，不是一种病。精神分裂症之外，心境障碍、帕金森病、痴呆和各种物质都可能带来幻觉和妄想。它们落在多巴胺、谷氨酸、5-HT 网络的不同环节上，所以治疗的“钥匙”也不一样。",
    "summary": "精神病性症状的多种来源、精神分裂症的五个症状维度、心境相关精神病、帕金森病精神病和痴呆相关精神病，以及为什么不同的精神病要用不同的钥匙。",
    "chapter": "对应 Stahl《精神药理学精要》第 4 章 · 其他精神病性障碍",
    "footer": "出现幻觉、妄想或自杀念头时，请及时就医或求助；用药请遵医嘱。",
    "canvasLabel": "拟人化的神经元、递质和药物访客演示不同精神病性障碍背后的线路和不同治疗钥匙的动画",
    "regions": ["pfc", "midbrain"],
    "parts": ["psychosis"],
    "cast": ["DA", "5HT", "Glu", "GABA", "drug", "neuron"],
    "color": "#c9a8e8"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const view = (k) => { const o = Object.assign({}, V0); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "精神病是一组症状",
      pill: ["精神病", "一组症状"], pill2: ["背后", "很多种病"],
      text: "“精神病”说的是一组症状：幻觉，比如听到、看到并不存在的东西；妄想，比如坚信有人要害自己；还有言语和行为变得紊乱。它不是某一种病的名字。精神分裂症是最常见、最典型的一种，但物质或药物所致的精神病、妄想障碍、分裂情感性障碍等也以它为核心，躁狂、抑郁、痴呆和帕金森病也可能伴有它。",
      fact: "精神病性症状是“症状”，背后可能是很多种不同的疾病" }, view("v0")),
    Object.assign({ title: "精神分裂症的五个维度",
      pill: ["症状维度", "5 个"], pill2: ["各有", "偏重的回路"],
      text: "就算是精神分裂症，也不只有阳性和阴性症状。很多研究把它分成五个维度：阳性（幻觉、妄想）、阴性（淡漠、没动力）、认知（注意、计划、解决问题变难）、情感（抑郁、焦虑）和攻击（敌意、冲动）。它们可能各自偏重不同的脑回路，所以一种药很难照顾到全部症状。要说明的是，大多数患者并不暴力。",
      fact: "五个维度各自偏重的脑回路，目前仍是假说" }, view("v1")),
    Object.assign({ title: "心境相关的精神病",
      pill: ["抑郁/躁狂", "伴精神病"], pill2: ["原则", "两边都治"],
      text: "心境障碍也会带来精神病性症状。重度抑郁时，有人坚信自己犯了不可饶恕的错，这是精神病性抑郁；躁狂时，有人坚信自己有特殊的身份或能力。反过来，精神分裂症也常伴有抑郁和焦虑。治疗的原则很简单：精神病性症状要治，情感症状也要治，这也是为了预防自杀。有轻生念头时一定要及时求助。",
      fact: "精神分裂症可以有情感症状，心境障碍也可以有精神病性症状" }, view("v2")),
    Object.assign({ title: "帕金森病精神病",
      pill: ["帕金森病", "过半会出现"], pill2: ["5-HT2A", "变多"],
      text: "帕金森病先出现动作症状，病情发展后，一半以上的人会出现幻觉和妄想。它不是“帕金森病加精神分裂症”：幻觉多是看见的，比如人或小动物；妄想常是怀疑亲人偷东西、欺骗或伤害自己，或者怀疑伴侣不忠；早期往往还知道这些不是真的。一种解释是路易体让皮层的 5-HT 末梢减少，5-HT2A 受体代偿性变多，信号失衡。",
      fact: "帕金森病精神病以视幻觉为主，早期常保留自知力" }, view("v3")),
    Object.assign({ title: "痴呆相关精神病",
      pill: ["刹车", "有力"], pill2: ["多巴胺", "正常"],
      text: "痴呆也常伴有精神病性症状：阿尔茨海默病以妄想更常见，路易体痴呆则常有和帕金森病相似的视幻觉。书里的看法是，被什么弄坏并不那么要紧，斑块、缠结、小中风还是路易体都有可能；要紧的是弄坏了哪条线路。如果皮层里 GABA 的刹车坏了，谷氨酸神经元在 5-HT2A 的推动下过度兴奋，下游多巴胺就会过多。",
      fact: "从药理学看，“坏在哪条线路”比“被什么弄坏”更关键（假说）" }, view("v4")),
    Object.assign({ title: "不同的锁，不同的钥匙",
      pill: ["情形", "精神分裂症"], pill2: ["钥匙", "阻断 D2"],
      text: "三张网彼此相连，但不同的病落在不同的环节，钥匙也不同。精神分裂症主要靠阻断 D2 受体。帕金森病和痴呆的精神病，强力阻断 D2 可能让动作更僵，痴呆老人用抗精神病药还有卒中和死亡风险增加的警告，所以更倾向只阻断 5-HT2A，比如匹莫范色林。物质所致的，要看是哪种物质：兴奋剂推高多巴胺，致幻剂作用在 5-HT2A，苯环利定、氯胺酮阻断 NMDA。",
      fact: "精神病的“钥匙”要按病因和线路来选，都需要医生权衡" }, view("v5")),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { brain: "#ffe3ea", pos: "#ff9a9a", neg: "#9fc3ea", cog: "#ffd27a", aff: "#b8a8f0", agg: "#f4a26b", ht2a: "#8fdcc4", d2: "#ffb07a", nmda: "#ffd27a" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  function update() { lt = Anima.sceneTime; }

  function plate(t, x, y, fs, fill, align) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    const x0 = align === "left" ? x : x - w / 2;
    rrect(x0, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "rgba(255,255,255,0.94)"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x0 + w / 2, y + 1, fs, C.ink);
    return w;
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    if (title) plate(title, x + w / 2, y, fsz(0.03), color);
  }
  const bgSoft = (a, b, seed) => { Anima.wash(a, b); Anima.bokeh(6, "#e6d8fb", 0.7, seed); Anima.petals(8, 0.45, seed + 3); };

  // ---------- 第 1 幕：一把伞下的很多病 ----------
  function umbrellaView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgSoft("#f7f2ff", "#fff1f5", 12);
    const n = nar(), cx = W / 2, uy = Anima.topSafe() + H * 0.2, ur = W * (n ? 0.4 : 0.3);
    // 伞面
    ctx.beginPath(); ctx.moveTo(cx - ur, uy);
    for (let k = 0; k < 6; k++) { const x0 = cx - ur + k * ur / 3; ctx.quadraticCurveTo(x0 + ur / 6, uy - H * 0.035, x0 + ur / 3, uy); }
    ctx.quadraticCurveTo(cx + ur * 0.9, uy - H * 0.2, cx, uy - H * 0.16);
    ctx.quadraticCurveTo(cx - ur * 0.9, uy - H * 0.2, cx - ur, uy);
    ctx.fillStyle = "#e7dcff"; ctx.fill(); outline(2.2); ctx.stroke();
    outline(3); ctx.beginPath(); ctx.moveTo(cx, uy); ctx.lineTo(cx, uy + H * 0.08); ctx.arc(cx - H * 0.02, uy + H * 0.08, H * 0.02, 0, Math.PI); ctx.stroke();
    text("精神病性症状：幻觉 · 妄想 · 紊乱", cx, uy - H * 0.07, fsz(n ? 0.03 : 0.034), C.ink);
    const rows = [
      { t: "以它为核心", items: ["精神分裂症", "物质/药物所致", "分裂情感性障碍", "妄想障碍", "短暂精神病性障碍"], col: "#ffe0ea", y: n ? 0.47 : 0.48 },
      { t: "可能伴有它", items: ["躁狂", "抑郁", "痴呆", "帕金森病"], col: "#e2f1ff", y: n ? 0.71 : 0.72 },
    ];
    const fs = fsz(n ? 0.025 : 0.028);
    rows.forEach((r, ri) => {
      const on = prog(1.5 + ri * 4, 1);
      if (on <= 0) return;
      ctx.save(); ctx.globalAlpha *= on;
      const y = H * r.y;
      text(r.t, W * 0.04, y - H * 0.075, fsz(0.028), ri ? "#3f93c9" : "#c0668a", "left");
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const ws = r.items.map((t) => ctx.measureText(t).width + fs * 1.1);
      const perRow = n && r.items.length > 3 ? 3 : r.items.length;
      for (let line = 0; line * perRow < r.items.length; line++) {
        const sl = r.items.slice(line * perRow, (line + 1) * perRow), sw = ws.slice(line * perRow, (line + 1) * perRow);
        const tot = sw.reduce((q, w) => q + w, 0) + fs * (sl.length - 1);
        let x = W / 2 - tot / 2;
        sl.forEach((t, k) => {
          const pop = prog(1.8 + ri * 4 + (line * perRow + k) * 0.4, 0.6);
          ctx.save(); ctx.globalAlpha *= pop;
          plate(t, x, y + line * fs * 2 - (1 - pop) * H * 0.02, fs, r.col, "left");
          ctx.restore();
          x += sw[k] + fs;
        });
      }
      ctx.restore();
    });
    // 伞下的居民
    const s = H * 0.042, px = W * (n ? 0.86 : 0.88), py = H * 0.95;
    chara(px, py, s, { who: "neuron", eyes: lt > 10 ? "happy" : "open", mouth: "smile", arms: lt > 10 ? "point" : "down", dir: -1 });
    say("q", lt > 9.8, px, py - s * 3.2, W * (n ? 0.62 : 0.7), H * 0.9, "先弄清楚是哪一种～", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：五个维度 ----------
  function brain(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x - r * 1.05, y + r * 0.1);
    ctx.bezierCurveTo(x - r * 1.15, y - r * 0.7, x - r * 0.3, y - r * 1.05, x + r * 0.3, y - r * 0.95);
    ctx.bezierCurveTo(x + r * 1.05, y - r * 0.85, x + r * 1.25, y - r * 0.1, x + r * 1.05, y + r * 0.35);
    ctx.bezierCurveTo(x + r * 0.9, y + r * 0.7, x + r * 0.4, y + r * 0.72, x + r * 0.1, y + r * 0.6);
    ctx.bezierCurveTo(x - r * 0.3, y + r * 0.75, x - r * 0.9, y + r * 0.6, x - r * 1.05, y + r * 0.1);
    ctx.fillStyle = C.brain; ctx.fill(); outline(2.2); ctx.stroke();
    // 脑干
    ctx.beginPath(); ctx.ellipse(x + r * 0.78, y + r * 0.52, r * 0.3, r * 0.2, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd5df"; ctx.fill(); outline(2); ctx.stroke();
    rrect(x + r * 0.3, y + r * 0.45, r * 0.24, r * 0.6, r * 0.12); ctx.fillStyle = "#ffd5df"; ctx.fill(); outline(2); ctx.stroke();
    ctx.strokeStyle = "rgba(109,87,96,0.35)"; ctx.lineWidth = 1.5;
    for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(x - r * 0.4 + k * r * 0.35, y - r * 0.3 + (k % 2) * r * 0.2, r * 0.25, 0.4, 2.6); ctx.stroke(); }
  }
  function dimsView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgSoft("#fff6f0", "#f3efff", 22);
    const n = nar(), bx = W * (n ? 0.28 : 0.3), by = H * 0.55, r = Math.min(H * 0.27, W * 0.22);
    brain(bx, by, r);
    text("← 前", bx - r * 0.95, by - r * 1.05, fsz(0.024), C.soft, "left");
    // 前额叶在左边
    const P = {
      dl: [bx - r * 0.55, by - r * 0.55], vm: [bx - r * 0.8, by - r * 0.05], of: [bx - r * 0.7, by + r * 0.3],
      nac: [bx - r * 0.2, by + r * 0.15], amy: [bx + r * 0.05, by + r * 0.4], vta: [bx + r * 0.42, by + r * 0.55],
    };
    const D = [
      { k: "阳性", d: "中脑边缘 → 伏隔核", c: C.pos, pts: ["vta", "nac"] },
      { k: "阴性", d: "中脑皮层、奖赏回路", c: C.neg, pts: ["vm", "nac"] },
      { k: "认知", d: "背外侧前额叶", c: C.cog, pts: ["dl"] },
      { k: "情感", d: "腹内侧前额叶、杏仁核", c: C.aff, pts: ["vm", "amy"] },
      { k: "攻击", d: "眶额皮层、杏仁核", c: C.agg, pts: ["of", "amy"] },
    ];
    const fs = fsz(n ? 0.025 : 0.028), lx = W * (n ? 0.56 : 0.58), top = Anima.topSafe() + H * 0.08, step = (H * 0.92 - top) / 5;
    const act = clamp(Math.floor((lt - 0.8) / 2.2), -1, 4);
    D.forEach((d, i) => {
      const on = prog(0.8 + i * 2.2, 0.8);
      if (on <= 0) return;
      const y = top + step * (i + 0.5), hot = i === act;
      ctx.save(); ctx.globalAlpha *= on;
      d.pts.forEach((p) => {
        const q = P[p];
        if (hot) glow(q[0], q[1], r * 0.28, d.c, 0.9);
        ctx.beginPath(); ctx.arc(q[0], q[1], r * (hot ? 0.09 : 0.065), 0, Math.PI * 2); ctx.fillStyle = d.c; ctx.fill(); outline(1.4); ctx.stroke();
      });
      if (hot) {
        const q = P[d.pts[0]];
        ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.beginPath(); ctx.moveTo(q[0], q[1]); ctx.lineTo(lx - fs * 0.6, y); ctx.stroke(); ctx.restore();
      }
      ctx.beginPath(); ctx.arc(lx + fs * 0.2, y, fs * 0.55, 0, Math.PI * 2); ctx.fillStyle = d.c; ctx.fill(); outline(1.3); ctx.stroke();
      text(d.k, lx + fs * 1.2, y - fs * 0.62, fs * 1.05, C.ink, "left");
      text(d.d, lx + fs * 1.2, y + fs * 0.72, fs * 0.9, C.soft, "left");
      ctx.restore();
    });
    const s = H * 0.04;
    chara(bx - r * 0.2, H * 0.97, s, { who: "neuron", hair: "#9a8fe0", cloth: "#e4e0ff", eyes: "happy", arms: "point", dir: 1, item: "book" });
    say("dims", lt > 11.8, bx - r * 0.2, H * 0.97 - s * 3.1, bx + r * 0.25, Anima.topSafe() + H * 0.07, "五组症状，药要分别看效果", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：心境相关的精神病 ----------
  function moodView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgSoft("#f2f7ff", "#fff3f0", 32);
    const n = nar(), cy = H * 0.55, r = H * (n ? 0.27 : 0.3), sep = r * (1.3 - 0.35 * prog(0.5, 2.5));
    const lx = W / 2 - sep / 2, rx = W / 2 + sep / 2;
    ctx.save(); ctx.globalAlpha *= 0.85;
    ctx.beginPath(); ctx.arc(lx, cy, r, 0, Math.PI * 2); ctx.fillStyle = "rgba(159,195,234,0.35)"; ctx.fill(); outline(2); ctx.stroke();
    ctx.beginPath(); ctx.arc(rx, cy, r, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,154,154,0.3)"; ctx.fill(); outline(2); ctx.stroke();
    ctx.restore();
    const fs = fsz(0.03);
    text("心境症状", lx - r * 0.5, cy + r * 0.1, fs, "#3f7fb9");
    text(n ? "精神病性" : "精神病性症状", rx + r * 0.48, cy + r * 0.1, fs, "#c0505a");
    const s = H * (n ? 0.04 : 0.045), fy = cy + r * 0.62;
    const dep = { x: W / 2 - r * 0.15, y: fy }, man = { x: W / 2 + r * 0.2, y: fy };
    const phase = lt < 6.5 ? 0 : 1;
    if (phase === 0) {
      chara(dep.x, dep.y, s, { who: "neuron", hair: "#8a93a6", cloth: "#dbe3f0", eyes: "teary", mouth: "sad", brow: "worry", arms: "down", gray: 0.35 });
      emote("gloom", dep.x + s * 0.9, dep.y - s * 3.3, s * 0.7);
      say("dep", lt > 1.4, dep.x, dep.y - s * 3.1, W * (n ? 0.3 : 0.26), H * 0.24, "全都是我的错，不可饶恕……", "think");
    } else {
      chara(man.x, man.y, s, { who: "neuron", hair: "#f29c5a", cloth: "#ffe1c4", eyes: "sparkle", mouth: "grin", arms: "up", jump: Math.abs(Math.sin(time * 5)) * 0.2 });
      speedLinesAt(man.x, man.y - s * 1.5, s * 2);
      say("man", lt > 7, man.x, man.y - s * 3.1, W * (n ? 0.7 : 0.74), H * 0.24, "我有特殊的使命，谁也比不上我！", "shout");
    }
    const lab = phase ? "躁狂伴精神病性症状" : "精神病性抑郁";
    plate(lab, W / 2, cy - r * 0.15, fsz(n ? 0.026 : 0.028), phase ? "#ffe8d6" : "#e2ecfa");
    callout("both", lt > 10.5, W / 2 - r * 0.25, cy + r * 0.2, W * 0.34, H * 0.97, "两边的症状都要治");
    ctx.restore();
  }
  function speedLinesAt(x, y, r) { Anima.speedLines(x, y, r, 12, 0.5); }

  // ---------- 第 4 幕：帕金森病精神病 ----------
  function pdpView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgSoft("#f4fbf7", "#f5f0ff", 42);
    const n = nar(), top = Anima.topSafe() + H * 0.07, gap = W * 0.03, cw = (W - gap * 3) / 2, ch = H * (n ? 0.5 : 0.62);
    const titles = ["精神分裂症", "帕金森病精神病"], cols = ["#ffe0ea", "#dff3ea"];
    const rows = n ? [["幻觉", "听到为主", "看见为主"], ["妄想", "被害、关系", "亲人偷/骗/害"], ["自知", "常常没有", "早期常有"]] : [["幻觉", "多是听到的", "多是看见的：人、小动物"], ["妄想", "被害、关系等", "亲人偷、骗、害我，伴侣不忠"], ["自知", "常常没有", "早期常知道不是真的"]];
    const fs = fsz(n ? 0.023 : 0.027);
    for (let c = 0; c < 2; c++) {
      const x = gap + c * (cw + gap);
      card(x, top, cw, ch, titles[c], cols[c]);
      rows.forEach((r, i) => {
        const on = prog(1 + i * 1.6 + c * 0.5, 0.8);
        if (on <= 0) return;
        ctx.save(); ctx.globalAlpha *= on;
        const y = top + ch * (0.22 + i * 0.28);
        const pw = plate(r[0], x + cw * 0.05, y, fs, c ? "#c9efdc" : "#ffd0dc", "left");
        text(r[c + 1], x + cw * 0.05 + pw + fs * 0.5, y, fs, C.ink, "left");
        ctx.restore();
      });
    }
    // 下面一条：机制
    let my = top + ch + H * (n ? 0.1 : 0.13); const on = prog(6.5, 1);
    if (on > 0) {
      ctx.save(); ctx.globalAlpha *= on;
      const s = H * 0.036;
      const x1 = W * (n ? 0.1 : 0.12), x2 = W * (n ? 0.1 : 0.55), my2 = n ? my + H * 0.06 : my;
      if (n) my -= H * 0.03;
      chara(x1, my + H * 0.08, s, { who: "DA", eyes: "sleepy", mouth: "sad", gray: 0.6, shadow: false });
      plate("黑质多巴胺 ↓ → 动作症状", x1 + s * 1.5, my, fs, "#ffe8d6", "left");
      chara(x2, my2 + H * 0.08, s, { who: "5HT", eyes: "sleepy", mouth: "sad", gray: 0.6, shadow: false });
      plate(n ? "皮层 5-HT ↓ → 5-HT2A ↑" : "皮层 5-HT 末梢 ↓ → 5-HT2A ↑", x2 + s * 1.5, my2, fs, "#dff3ea", "left");
      ctx.restore();
    }
    const ex = gap + cw * 1.5;
    say("insight", lt > 9.5 && !n, ex, top + ch * 0.8, ex, top + ch * 1.02, "角落的猫……好像不是真的？", "think");
    ctx.restore();
  }

  // ---------- 第 5 幕：痴呆相关精神病 ----------
  function lesion(kind, x, y, r) {
    ctx.save();
    if (kind === 0) { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#c9b8a8"; ctx.fill(); outline(1.4); ctx.stroke(); }
    else if (kind === 1) { ctx.strokeStyle = "#9a7a9a"; ctx.lineWidth = r * 0.3; ctx.beginPath(); for (let k = 0; k <= 12; k++) { const q = k / 12; const xx = x - r + q * r * 2, yy = y + Math.sin(q * 12) * r * 0.5; if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); } ctx.stroke(); }
    else if (kind === 2) Anima.bolt(x, y, r * 1.1, 1, "#8fb7e8");
    else { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#e8b3c9"; ctx.fill(); outline(1.4); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y, r * 0.45, 0, Math.PI * 2); ctx.fillStyle = "#b86a8f"; ctx.fill(); }
    ctx.restore();
  }
  function dementiaView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgSoft("#fff8f0", "#f1f0ff", 52);
    const n = nar(), s = H * (n ? 0.045 : 0.048);
    const broken = prog(4.5, 1.5), over = prog(6.5, 1.5);
    // 谷氨酸神经元（三角形细胞体）
    const gx = W * 0.5, gy = H * 0.5, gr = H * 0.1;
    if (over > 0.2) glow(gx, gy, gr * 2, "#ffd27a", over);
    ctx.beginPath(); ctx.moveTo(gx, gy - gr * 1.2); ctx.lineTo(gx + gr, gy + gr * 0.6); ctx.lineTo(gx - gr, gy + gr * 0.6); ctx.closePath();
    ctx.fillStyle = mix("#fff0b3", "#ffc36b", over); ctx.fill(); outline(2); ctx.stroke();
    face(gx, gy + gr * 0.1, gr * 0.42, over > 0.5 ? -1 : 1);
    if (over > 0.5) emote("sweat", gx + gr * 0.8, gy - gr * 0.9, gr * 0.4);
    text("谷氨酸神经元", gx, gy + gr * 0.95, fsz(0.026), C.ink);
    // 左边：GABA 刹车员
    const bx = W * (n ? 0.2 : 0.22), by = H * 0.62;
    ctx.save(); ctx.globalAlpha *= 1 - broken * 0.6;
    outline(3); ctx.beginPath(); ctx.moveTo(bx + s * 1.2, by - s * 1.8); ctx.lineTo(gx - gr * 0.85, gy + gr * 0.1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(gx - gr * 0.85, gy + gr * 0.1 - H * 0.025); ctx.lineTo(gx - gr * 0.85, gy + gr * 0.1 + H * 0.025); ctx.stroke();
    ctx.restore();
    chara(bx, by, s, { who: "GABA", eyes: broken > 0.5 ? "dizzy" : "open", mouth: broken > 0.5 ? "wavy" : "smile", arms: broken > 0.5 ? "down" : "shh", gray: broken * 0.7, tag: "GABA 刹车" });
    // 病变从天而降
    const names = ["斑块", "缠结", "小中风", "路易体"];
    for (let k = 0; k < 4; k++) {
      const p = prog(2 + k * 0.6, 1.2);
      if (p <= 0) continue;
      const tx = bx + (k - 1.5) * W * (n ? 0.1 : 0.075), ty = lerp(Anima.topSafe() + H * 0.04, by - s * 4.2, p);
      lesion(k, tx, ty, H * 0.025);
      if (p >= 1) text(names[k], tx, ty - H * 0.05 - (k % 2) * H * 0.055, fsz(0.024), C.ink);
    }
    // 右上：5-HT 按着 5-HT2A 按钮
    const hx = W * (n ? 0.78 : 0.76), hy = H * 0.4;
    chara(hx, hy, s, { who: "5HT", arms: "point", dir: -1, eyes: over > 0.5 ? "angry" : "open", mouth: "smile", tag: "5-HT2A" });
    outline(2); ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.moveTo(hx - s, hy - s * 1.6); ctx.lineTo(gx + gr * 0.6, gy - gr * 0.3); ctx.stroke(); ctx.setLineDash([]);
    // 下游：多巴胺变多
    const dx = W * (n ? 0.72 : 0.72), dy = H * 0.93;
    outline(3); ctx.beginPath(); ctx.moveTo(gx + gr * 0.3, gy + gr * 0.7); ctx.quadraticCurveTo(gx + gr * 0.8, dy - s * 2, dx - s * 2.4, dy - s * 1.5); ctx.stroke();
    const nDA = 1 + Math.round(3 * over);
    for (let k = 0; k < nDA; k++) chara(dx + (k - 1) * s * 1.6, dy, s * 0.8, { who: "DA", eyes: over > 0.5 ? "wide" : "open", arms: over > 0.5 ? "up" : "down", jump: over > 0.5 ? Math.abs(Math.sin(time * 6 + k)) * 0.3 : 0, seed: k, shadow: false });
    callout("where", lt > 9, bx, by - s * 1.5, W * (n ? 0.26 : 0.26), H * 0.94, "关键：坏的是哪条线路");
    say("halluc", over > 0.8 && lt > 8, dx, dy - s * 2.6, W * (n ? 0.8 : 0.86), H * (n ? 0.68 : 0.72), "多巴胺太多 → 幻觉、妄想", "box");
    ctx.restore();
  }

  // ---------- 第 6 幕：不同的钥匙 ----------
  const CASES = [
    { t: "精神分裂症", key: "阻断 D2" },
    { t: "帕金森病/痴呆精神病", key: "只挡 5-HT2A" },
    { t: "物质所致", key: "看是哪种" },
  ];
  const caseNow = () => (lt < 4.6 ? 0 : lt < 9.4 ? 1 : 2);
  function keysView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bgSoft("#f7f2ff", "#fff4ee", 62);
    const n = nar(), my = H * 0.66, rs = H * (n ? 0.06 : 0.065);
    ctx.fillStyle = "#ffe0ea"; ctx.fillRect(0, my, W, H - my);
    outline(2); ctx.beginPath(); ctx.moveTo(0, my); ctx.lineTo(W, my); ctx.stroke();
    const doors = [{ x: W * 0.2, c: C.d2, l: "D2", sh: "round" }, { x: W * 0.5, c: C.ht2a, l: "5-HT2A", sh: "tri" }, { x: W * 0.8, c: C.nmda, l: "NMDA", sh: "square" }];
    const cs = caseNow(), lc = lt - [0, 4.6, 9.4][cs];
    const Rs = doors.map((d, i) => {
      let act = 0.2;
      if (cs === 0 && i === 0) act = 0.9;
      if (cs === 2) act = 0.8;
      if (cs === 1 && i === 1) act = 0.9;
      const R = Anima.receptor(d.x, my, rs, d.c, act, { shape: d.sh });
      text(d.l, d.x, my + H * 0.11, fsz(0.03), C.ink);
      return R;
    });
    const ds = H * (n ? 0.042 : 0.045), p = ease(lc / 1.8);
    if (cs === 0) {
      const R = Rs[0];
      chara(lerp(W * 0.45, R.site.x, p), lerp(H * 0.4, R.site.y + ds * 0.3, p), ds, { who: "drug", label: "D2", hatColor: "#ffb07a", arms: p >= 1 ? "shh" : "down", walk: p < 1 ? time * 9 : null, dir: -1, eyes: "happy", tag: "抗精神病药" });
      if (p >= 1) sparkles(R.site.x, R.site.y, rs * 1.5, 3, 1, 3);
    } else if (cs === 1) {
      const R0 = Rs[0], R1 = Rs[1], q = ease((lc - 1.5) / 1.8);
      // 被拦下的 D2 阻断剂
      ctx.save(); ctx.globalAlpha *= 1 - q * 0.5;
      chara(R0.site.x + rs * 1.8, R0.site.y + ds * 0.3, ds, { who: "drug", label: "D2", hatColor: "#ffb07a", eyes: "wide", mouth: "wavy", arms: "down", tag: "强力挡 D2", gray: 0.3 });
      ctx.restore();
      if (lc > 0.8) { outline(4); ctx.strokeStyle = "#e8637a"; ctx.lineWidth = 5; const cx = R0.site.x + rs * 1.8, cy = R0.site.y - ds * 1.5; ctx.beginPath(); ctx.moveTo(cx - ds, cy - ds); ctx.lineTo(cx + ds, cy + ds); ctx.moveTo(cx + ds, cy - ds); ctx.lineTo(cx - ds, cy + ds); ctx.stroke(); }
      chara(lerp(W * 0.62, R1.site.x, q), lerp(H * 0.4, R1.site.y + ds * 0.3, q), ds, { who: "drug", label: "2A", hatColor: C.ht2a, arms: q >= 1 ? "shh" : "down", walk: q > 0 && q < 1 ? time * 9 : null, dir: -1, eyes: "happy", tag: "匹莫范色林" });
      if (q >= 1) sparkles(R1.site.x, R1.site.y, rs * 1.5, 3, 1, 5);
    } else {
      const who = [["兴奋剂", "#ffb07a", "DA"], ["致幻剂", C.ht2a, "2A"], ["氯胺酮等", "#ffd27a", "NMDA"]];
      Rs.forEach((R, i) => {
        const q = ease((lc - i * 0.6) / 1.6);
        if (q <= 0) return;
        chara(lerp(R.site.x + rs * 2.2, R.site.x + rs * 1.4, q), my - H * 0.005, ds * 0.9, { who: "drug", label: who[i][2], hatColor: who[i][1], hatColor2: "#eeeeee", eyes: "open", arms: "point", dir: -1, tag: who[i][0], alpha: clamp(q * 2, 0, 1) });
      });
    }
    say("sz", cs === 0 && lc > 2, Rs[0].site.x, Rs[0].site.y - ds * 3, W * 0.36, H * 0.3, "挡住过多的多巴胺信号", "say");
    say("pd", cs === 1 && lc > 0.8 && lc < 3.2, Rs[0].site.x + rs * 1.8, Rs[0].site.y - ds * 2.6, W * 0.24, H * 0.3, "动作可能更僵！", "shout");
    say("pd2", cs === 1 && lc > 3.4, Rs[1].site.x, Rs[1].site.y - ds * 3, W * 0.66, H * 0.3, "只按住过强的 5-HT2A", "say");
    say("sub", cs === 2 && lc > 2.4, W / 2, my - H * 0.12, W / 2, H * 0.3, "不同的物质，落在不同的门上", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 4) { v1 = lt > 4.8 ? "坏了" : "有力"; v2 = lt > 7 ? "过多" : "正常"; }
    if (cur === 5) { const k = caseNow(); v1 = ["精神分裂症", "帕金森/痴呆", "物质所致"][k]; v2 = CASES[k].key; }
    pill(14, 12, c.pill[0], v1, "#9a6fd0", false);
    pill(W - 14, 12, c.pill2[0], v2, "#d0607f", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) umbrellaView(S.v0);
    if (S.v1 > 0.02) dimsView(S.v1);
    if (S.v2 > 0.02) moodView(S.v2);
    if (S.v3 > 0.02) pdpView(S.v3);
    if (S.v4 > 0.02) dementiaView(S.v4);
    if (S.v5 > 0.02) keysView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#9a6fd0",
    titleCard: { lines: ["不只是", "精神分裂症"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
