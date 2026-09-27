Anima.register("ketamine", {
    "title": "快车道：氯胺酮与艾司氯胺酮",
    "tag": "抗抑郁药",
    "headline": "抗抑郁有没有【快车道】？",
    "lede": "传统抗抑郁药在“回收站”那条慢车道上，要走几周。氯胺酮走的是另一条路：先松开一个刹车，让谷氨酸短暂爆发，再在几小时里长出新的突触“小枝桠”。快，但必须在医院里、由医生护航。",
    "summary": "氯胺酮和艾司氯胺酮为什么起效快：NMDA 受体、谷氨酸爆发、AMPA、BDNF 和 mTOR，以及为什么必须在医疗机构里使用。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · 快速起效的抗抑郁治疗",
    "footer": "氯胺酮类药物只能在医疗机构内、由医护人员给药和观察，切勿自行获取或使用。出现伤害自己的想法时，请马上告诉身边的人并尽快去医院急诊。",
    "canvasLabel": "药物访客开车走上快车道，松开 GABA 刹车、让谷氨酸快递员爆发，帮神经元长出新枝桠的动画",
    "regions": ["pfc", "synapse"],
    "parts": ["mood"],
    "cast": ["Glu", "GABA", "drug"],
    "color": "#f2a65a"
  }, () => {
  const CH = [
    { title: "慢车道和快车道", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["传统", "几周"], pill2: ["快车道", "几小时"],
      text: "在“回收站暂停营业”那一集里，传统抗抑郁药走的是慢车道：回收门当天就堵上了，心情却常常要等两到四周才慢慢好转。有没有更快的路？氯胺酮原本是一种麻醉药。科学家发现，在医疗环境中按特定方案使用时，它能让一部分难治性抑郁的人在几小时到一天内明显好转。",
      fact: "传统抗抑郁药常要 2～4 周起效；氯胺酮类可在几小时到一天内起效" },
    { title: "先松开刹车", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["GABA", "踩刹车"], pill2: ["氯胺酮", "挡 NMDA"],
      text: "Stahl 的解释从一个“刹车”开始。在前额叶里，GABA 中间神经元一直踩着刹车，管着谷氨酸神经元，不让它太活跃。这些 GABA 神经元身上有 NMDA 受体，靠它保持工作。氯胺酮堵住了这个 NMDA 受体的通道，GABA 神经元打起了瞌睡，刹车松开，谷氨酸神经元就活跃起来，这叫“去抑制”。",
      fact: "氯胺酮是 NMDA 受体拮抗剂：先挡住 GABA 中间神经元上的 NMDA 受体，松开刹车" },
    { title: "谷氨酸短暂爆发", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["谷氨酸", "爆发"], pill2: ["AMPA", "被激活"],
      text: "刹车一松，谷氨酸神经元一下子放出一大波谷氨酸，这是一次短暂的“爆发”。因为 NMDA 受体被氯胺酮挡着，这波谷氨酸主要去敲另一扇门：AMPA 受体。AMPA 受体被大量激活，信号传进下一个神经元。爆发很快就过去了，真正重要的，是它在后面引发的变化。",
      fact: "谷氨酸爆发是短暂的，它激活的主要是 AMPA 受体" },
    { title: "长出新枝桠", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["新枝桠", "几小时"], pill2: ["名字", "突触发生"],
      text: "AMPA 受体被激活后，神经元会释放 BDNF，也就是“缺水的小树”里那瓶营养液，再打开细胞里一个叫 mTOR 的生长开关。于是在短短几小时里，树突上冒出新的“小枝桠”，也就是树突棘，神经元之间重新连上了线，这叫突触发生。科学家认为，这可能是它起效快的原因之一。",
      fact: "AMPA → BDNF → mTOR → 几小时内长出新的树突棘（突触发生）" },
    { title: "艾司氯胺酮鼻喷雾", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["给药", "医院里"], pill2: ["用完", "要留观"],
      text: "艾司氯胺酮是从氯胺酮里挑出来的一种（S 型），做成了鼻喷雾剂，用于难治性抑郁等情况。它必须在医疗机构里、在医护人员看护下使用，用完要留下观察一段时间，因为可能出现解离感（像飘起来、周围不真实）、血压升高和嗜睡，当天也不能开车。它通常和口服抗抑郁药一起用。",
      fact: "艾司氯胺酮鼻喷雾：只在医疗机构内给药并观察，常与口服抗抑郁药联用" },
    { title: "快车道也要护航", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["滥用", "有风险"], pill2: ["疗程", "要规范"],
      text: "快车道不能随便开。氯胺酮有被滥用的风险，私自反复使用可能损伤膀胱和记忆力，它不是“派对药”，绝不能自己找来用。它的效果也可能不持久，需要在医生安排下完成规范疗程，并配合其他治疗。如果出现伤害自己的想法，请马上告诉身边的人，并尽快去医院急诊。",
      fact: "氯胺酮类只能在医生安排下使用；效果可能不持久，需要规范疗程" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { term: "#fff0c4", post: "#fdeede", bdnf: "#8fe0ff", trunk: "#c89b74" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };
  const KET = { who: "drug", hatColor: "#ffb36b", hatColor2: "#fff4e0", label: "", tag: "氯胺酮" };
  const ESK = { who: "drug", hatColor: "#ff9a52", hatColor2: "#ffe6c4", label: "", tag: "艾司氯胺酮" };
  const SSRI = { who: "drug", hatColor: "#8fdcc4", hatColor2: "#ffffff", label: "", tag: "传统抗抑郁药" };
  const drug = (base, o) => Object.assign({}, base, o);

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt = Anima.sceneTime;
  }
  const prog = (t0, d) => ease((lt - t0) / d);
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  const narrow = () => W / H < 1.5;

  function sun(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, r * 2.6, C.gold, 0.9);
    ctx.translate(x, y); ctx.rotate(time * 0.3);
    for (let i = 0; i < 10; i++) {
      ctx.rotate(Math.PI / 5);
      ctx.beginPath(); ctx.moveTo(-r * 0.16, -r * 1.12); ctx.lineTo(0, -r * 1.5); ctx.lineTo(r * 0.16, -r * 1.12); ctx.closePath();
      ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.5); ctx.stroke();
    }
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffe68a"; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.1, r * 0.55, 1);
    ctx.restore();
  }
  function tag(t, x, y, fs, color) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(t).width + fs * 1.2;
    x = clamp(x, tw / 2 + 4, W - tw / 2 - 4);
    rrect(x - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color || "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  function drop(x, y, s, a) {
    ctx.save(); ctx.globalAlpha *= a;
    glow(x, y, s * 2.2, C.bdnf, 0.8);
    ctx.beginPath(); ctx.moveTo(x, y - s); ctx.quadraticCurveTo(x + s * 0.8, y + s * 0.2, x, y + s * 0.6); ctx.quadraticCurveTo(x - s * 0.8, y + s * 0.2, x, y - s);
    ctx.fillStyle = C.bdnf; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.restore();
  }

  // ---------- 第 1、6 幕：慢车道和快车道 ----------
  function car(x, y, s, who, moving) {
    // 小车：车身盖住访客的下半身
    const bw = s * 4.2, bh = s * 1.3;
    chara(x + s * 0.2, y - bh * 0.35, s, drug(who, { arms: moving ? "up" : "wave", eyes: moving ? "sparkle" : "happy", mouth: "grin", tag: "", shadow: false }));
    ctx.save();
    rrect(x - bw / 2, y - bh, bw, bh * 0.8, bh * 0.35); ctx.fillStyle = "#ffb36b"; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.5)"; rrect(x - bw * 0.4, y - bh * 0.9, bw * 0.3, bh * 0.18, bh * 0.08); ctx.fill();
    for (const d of [-1, 1]) {
      const wx = x + d * bw * 0.3, wy = y - bh * 0.18;
      ctx.save(); ctx.translate(wx, wy); ctx.rotate(moving ? time * 14 : 0);
      ctx.beginPath(); ctx.arc(0, 0, bh * 0.3, 0, Math.PI * 2); ctx.fillStyle = "#6d5760"; ctx.fill();
      ctx.beginPath(); ctx.arc(0, 0, bh * 0.13, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();
      ctx.fillStyle = "#6d5760"; ctx.fillRect(-bh * 0.02, -bh * 0.13, bh * 0.04, bh * 0.26);
      ctx.restore();
    }
    ctx.restore();
    text(who.tag, x, y - bh * 0.62, Math.max(10, s * 0.62), C.ink);
    if (moving) {
      ctx.save(); ctx.strokeStyle = alpha("#e07a2a", 0.55); ctx.lineWidth = Math.max(2, s * 0.1); ctx.lineCap = "round";
      for (let k = 0; k < 4; k++) { const yy = y - bh * (0.2 + k * 0.25), l = s * (1.5 + (k % 2)); ctx.beginPath(); ctx.moveTo(x - bw * 0.6, yy); ctx.lineTo(x - bw * 0.6 - l, yy); ctx.stroke(); }
      ctx.restore();
    }
    return { head: { x: x + s * 0.2, y: y - bh * 0.35 - s * 3.1 } };
  }
  function discoNo(x, y, r) { // 画了叉的派对灯球
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#e4e0ff"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.clip();
    ctx.strokeStyle = alpha("#8f84e0", 0.6); ctx.lineWidth = 1.2;
    for (let k = -3; k <= 3; k++) { ctx.beginPath(); ctx.moveTo(x - r, y + k * r * 0.3); ctx.lineTo(x + r, y + k * r * 0.3); ctx.moveTo(x + k * r * 0.3, y - r); ctx.lineTo(x + k * r * 0.3, y + r); ctx.stroke(); }
    ctx.restore();
    ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(3, r * 0.16);
    ctx.beginPath(); ctx.arc(x, y, r * 1.25, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - r * 0.88, y - r * 0.88); ctx.lineTo(x + r * 0.88, y + r * 0.88); ctx.stroke();
  }
  function roadView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const last = cur === 5;
    const nar = narrow();
    Anima.wash("#fff4e0", "#fdeef3");
    Anima.bokeh(6, "#ffe3a8", 0.8, 12);
    Anima.petals(8, 0.5, 23);
    const x0 = W * 0.04, x1 = W * 0.84, y1 = H * 0.5, y2 = H * 0.82;
    const fs = fsz(0.03);
    // 远山
    ctx.beginPath(); ctx.moveTo(0, H * 0.4); ctx.quadraticCurveTo(W * 0.3, H * 0.28, W * 0.6, H * 0.38); ctx.quadraticCurveTo(W * 0.8, H * 0.3, W, H * 0.36); ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
    ctx.fillStyle = "#dff0d6"; ctx.fill(); outline(1.4); ctx.stroke();
    // 慢车道：小土路 + 里程牌
    rrect(x0, y1 - H * 0.03, x1 - x0, H * 0.06, H * 0.03); ctx.fillStyle = "#f3e3cf"; ctx.fill(); outline(1.8); ctx.stroke();
    for (let k = 1; k <= 4; k++) {
      const x = lerp(x0 + W * 0.08, x1 - W * 0.04, (k - 1) / 3), y = y1 - H * 0.03;
      outline(1.4); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - H * 0.06); ctx.stroke();
      // 手机上最后一幕的安全提醒方框要占顶部，那时先把里程牌上的字淡出
      const wa = nar && last ? 1 - prog(10.2, 0.5) : 1;
      if (wa > 0.02) { ctx.save(); ctx.globalAlpha *= wa; tag(nar ? k + "周" : "第 " + k + " 周", x, y - H * 0.075, fs * 0.9, "#fff8e6"); ctx.restore(); }
    }
    // 快车道：高速公路
    rrect(x0, y2 - H * 0.055, x1 - x0, H * 0.11, H * 0.02); ctx.fillStyle = "#d9dde8"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.save(); ctx.strokeStyle = "#ffffff"; ctx.lineWidth = Math.max(2, H * 0.008); ctx.setLineDash([H * 0.04, H * 0.03]); ctx.lineDashOffset = last ? -time * 20 : -time * 120;
    ctx.beginPath(); ctx.moveTo(x0 + 10, y2); ctx.lineTo(x1 - 10, y2); ctx.stroke(); ctx.restore();
    // 手机上第 1 幕“传统药”的名牌就在路口，车道名往下挪一点
    tag("慢车道", x0 + W * 0.06, y1 + H * (nar && !last ? 0.11 : 0.06), fs, "#fff1b8");
    tag("快车道", x0 + W * 0.06, y2 + H * 0.085, fs, "#ffd9c2");
    // 终点：心情转晴
    const gx = W * 0.915;
    outline(2); ctx.beginPath(); ctx.moveTo(gx, y2 + H * 0.04); ctx.lineTo(gx, H * 0.3); ctx.stroke();
    sun(gx, H * 0.27, Math.min(H * 0.055, W * 0.04), 1);
    tag("心情转晴", gx, y2 + H * 0.085, fs * 0.9, "#fff");
    const s = Math.min(H * 0.045, W * 0.04);
    // 慢车道上的传统抗抑郁药：一步一步走
    const sp = last ? 0.55 + lt / 14 * 0.25 : lt / 14 * 0.42;
    const sx = lerp(x0 + W * 0.05, x1 - W * 0.02, sp);
    chara(sx, y1 + H * 0.01, s, drug(SSRI, { walk: time * 5, eyes: "happy", mouth: "smile", arms: "hold", item: "letter", tag: nar ? "传统药" : "传统抗抑郁药" }));
    let carPos;
    if (!last) {
      // 快车道：小车一下子冲到终点
      const cp = prog(1.2, 2.2);
      const cx = lerp(-W * 0.12, gx - W * 0.1, cp);
      carPos = car(cx, y2 + H * 0.045, s, KET, cp < 1);
      if (cp >= 1) sparkles(gx - W * 0.1, y2 - H * 0.1, s * 3, 5, 1, 4);
      if (lt > 1.8 && lt < 3.2) sfx("咻——！", W * 0.5, y2 - H * 0.12, fsz(0.05), "#e07a2a", -0.1, 1);
      // 手机上气泡放到传统药右上方，不压住它的头
      say("slow", lt > 0.5 && lt < (nar ? 6.3 : 7), sx, y1 - s * 2.9, nar ? W * 0.55 : W * 0.3, H * 0.27, "我走慢车道，要几周哦～", "say");
      // 手机上爆炸框太大会盖住慢车道，改成普通气泡，放在两条路中间
      say("fast", lt > 4, carPos.head.x, carPos.head.y, nar ? W * 0.5 : W * 0.5, H * (nar ? 0.665 : 0.64), "我走快车道：几小时到一天！", nar ? "say" : "shout");
      callout("anes", lt > 7.5, cx, y2 - H * 0.02, nar ? W * 0.56 : W * 0.36, H * 0.3, "氯胺酮：原本是一种麻醉药");
    } else {
      // 最后一幕：快车道中间有“医疗机构”关卡，医生护航
      const bx = W * 0.44, by = y2 - H * 0.055;
      rrect(bx - W * 0.045, by - H * 0.2, W * 0.09, H * 0.2, 8); ctx.fillStyle = "#e3f3ee"; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bx - W * 0.055, by - H * 0.2); ctx.lineTo(bx, by - H * 0.26); ctx.lineTo(bx + W * 0.055, by - H * 0.2); ctx.closePath(); ctx.fillStyle = "#8fdcc4"; ctx.fill(); ctx.stroke();
      ctx.fillStyle = C.bad; ctx.fillRect(bx - H * 0.008, by - H * 0.2 + H * 0.02, H * 0.016, H * 0.05); ctx.fillRect(bx - H * 0.025, by - H * 0.2 + H * 0.037, H * 0.05, H * 0.016);
      tag(nar ? "医院" : "医疗机构", bx, by - H * 0.07, fs * 0.9, "#fff");
      // 栏杆：车到了才抬起来
      const open = prog(3.5, 1);
      ctx.save(); ctx.translate(bx + W * 0.045, by + H * 0.02); ctx.rotate(-open * 1.2);
      rrect(0, -H * 0.008, W * 0.1, H * 0.016, H * 0.008); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.fillStyle = C.bad; for (let k = 0; k < 3; k++) ctx.fillRect(W * (0.015 + k * 0.03), -H * 0.008, W * 0.012, H * 0.016);
      ctx.restore();
      // 医生
      const dx = bx + W * 0.085;
      chara(dx, by - H * 0.005, s, { who: "neuron", hair: "#5b4a5e", cloth: "#ffffff", glasses: true, eyes: "happy", mouth: "smile", arms: lt > 3 ? "wave" : "hold", item: lt > 3 ? null : "book" });
      // 小车：先停在关卡前，检查后慢慢开过去，后面是疗程的里程
      const p1 = prog(0.5, 2), p2 = prog(5, 6);
      const cx = lt < 5 ? lerp(-W * 0.1, bx - W * 0.11, p1) : lerp(bx - W * 0.11, gx - W * 0.12, p2);
      carPos = car(cx, y2 + H * 0.045, s, KET, (p1 > 0 && p1 < 1) || (p2 > 0 && p2 < 1));
      for (let k = 0; k < 4; k++) {
        const x = lerp(bx + W * 0.12, x1 - W * 0.04, k / 3);
        ctx.beginPath(); ctx.arc(x, y2 - H * 0.075, Math.max(3, H * 0.009), 0, Math.PI * 2); ctx.fillStyle = cx > x ? C.good : "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
      }
      text("规范疗程", lerp(bx + W * 0.12, x1 - W * 0.04, 0.5), y2 - H * 0.12, fs * 0.9, C.soft);
      // 不是派对药
      const dr = Math.min(H * 0.04, W * 0.032), ddx = nar ? W * 0.12 : W * 0.1, ddy = H * 0.63;
      discoNo(ddx, ddy, dr);
      text("不是派对药", ddx + dr * 1.6, ddy, fs, C.bad, "left");
      // 手机上气泡和标注放到左上，不压住慢车道上传统药的头
      say("escort", lt > 1 && lt < (nar ? 6.2 : 7), dx, by - s * 3.2, nar ? W * 0.25 : W * 0.44, H * 0.28, "快车道也要有医生护航～", "say");
      callout("course", lt > (nar ? 7.4 : 7) && lt < (nar ? 9.3 : 10.5), lerp(bx + W * 0.12, x1 - W * 0.04, 0.66), y2 - H * 0.075, nar ? W * 0.3 : W * 0.66, H * 0.3, "效果可能不持久：要规范疗程");
      say("help", lt > 10.5, W * 0.5, H * 0.5, nar ? W * 0.3 : W * 0.55, H * 0.2, "有伤害自己的想法时，请马上告诉身边的人，尽快去医院急诊。", "box");
    }
    ctx.restore();
  }

  // ---------- 第 2 幕：GABA 的刹车 ----------
  function pedal(x, y, s, pressed) {
    ctx.save(); ctx.translate(x, y);
    outline(Math.max(1.5, s * 0.08));
    ctx.beginPath(); ctx.moveTo(0, -s * 0.9); ctx.lineTo(0, -s * 0.2); ctx.stroke();
    ctx.rotate(pressed * 0.5 - 0.1);
    rrect(-s * 0.55, -s * 0.2, s * 1.1, s * 0.5, s * 0.14); ctx.fillStyle = mix("#c8efc8", "#ffb3b3", pressed); ctx.fill(); ctx.stroke();
    ctx.restore();
    text("刹车", x, y + s * 0.85, fsz(0.03), pressed > 0.5 ? C.bad : C.good);
  }
  function brakeView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f3ff", "#fff3ea");
    Anima.bokeh(6, "#d9ccfa", 0.8, 31);
    const nar = narrow();
    const gy = H * 0.9;
    ctx.fillStyle = "#f0e8f7"; ctx.fillRect(0, gy, W, H - gy); outline(1.4); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    const plug = prog(4.2, 0.6);       // 氯胺酮堵上 NMDA 通道
    const doze = prog(5, 1.5);         // GABA 神经元打瞌睡
    const brake = 1 - prog(6, 1.5);    // 刹车松开
    const wake = prog(7.5, 1.5);       // 谷氨酸神经元醒过来
    // GABA 中间神经元
    const gx = W * (nar ? 0.26 : 0.27), gcy = H * 0.6, gr = Math.min(H * 0.11, W * 0.09);
    ctx.beginPath(); ctx.arc(gx, gcy, gr, 0, Math.PI * 2); ctx.fillStyle = mix("#e4e0ff", "#e6e3ea", doze); ctx.fill(); outline(2); ctx.stroke();
    face(gx, gcy + gr * 0.15, gr * 0.42, doze > 0.5 ? 0 : 1);
    if (doze > 0.5) emote("zzz", gx + gr * 0.7, gcy - gr * 0.5, gr * 0.35, doze);
    tag("GABA 中间神经元", gx, gcy + gr * 1.3, fsz(0.028), "#e4e0ff");
    // NMDA 受体长在它头顶
    const rs = Math.min(H * 0.042, gr * 0.4), ry = gcy - gr * 0.92;
    const R = Anima.receptor(gx, ry, rs, "#ffd27a", 1 - doze * 0.8, { label: "NMDA" });
    // 谷氨酸钥匙一直插在上面，让 GABA 神经元保持工作
    const cs = Math.min(H * 0.036, W * 0.03);
    chara(gx, R.site.y + rs * 0.1, cs * 0.8, { who: "Glu", eyes: plug > 0.5 ? "wide" : "happy", mouth: plug > 0.5 ? "o" : "smile", arms: "down", shadow: false });
    // 通道里的塞子（氯胺酮）
    if (plug > 0.02) {
      ctx.save(); ctx.globalAlpha *= plug;
      rrect(gx - rs * 0.22, ry - rs * 1.3, rs * 0.44, rs * 1.25, rs * 0.2); ctx.fillStyle = "#ffb36b"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.restore();
      if (plug < 1) sfx("咔！", gx + rs * 1.6, ry - rs * 1.8, fsz(0.045), "#e07a2a", -0.12, 1);
    }
    // 氯胺酮访客走过来
    const kp = prog(2.4, 1.8);
    const kx = lerp(-W * 0.06, gx - gr * 1.3, kp);
    if (kp > 0) chara(kx, gy, cs * 1.15, drug(KET, { walk: kp < 1 ? time * 9 : null, arms: plug > 0.5 ? "point" : "down", eyes: "happy", mouth: "grin" }));
    // 谷氨酸神经元（锥体神经元，三角形）
    const px = W * (nar ? 0.66 : 0.66), pcy = H * 0.56, pr = Math.min(H * 0.15, W * 0.12);
    ctx.beginPath(); ctx.moveTo(px, pcy - pr * 1.1); ctx.quadraticCurveTo(px + pr * 0.15, pcy - pr * 0.9, px + pr * 0.95, pcy + pr * 0.6);
    ctx.quadraticCurveTo(px, pcy + pr * 0.85, px - pr * 0.95, pcy + pr * 0.6); ctx.quadraticCurveTo(px - pr * 0.15, pcy - pr * 0.9, px, pcy - pr * 1.1); ctx.closePath();
    ctx.fillStyle = mix("#e8e2d6", "#fff0b3", wake); ctx.fill(); outline(2); ctx.stroke();
    outline(Math.max(3, pr * 0.08)); ctx.beginPath(); ctx.moveTo(px, pcy - pr * 1.1); ctx.lineTo(px, pcy - pr * 1.6); ctx.stroke();
    face(px, pcy + pr * 0.2, pr * 0.36, wake > 0.5 ? 1 : 0);
    if (wake < 0.5) emote("zzz", px + pr * 0.55, pcy - pr * 0.3, pr * 0.25, 1 - wake * 2);
    if (wake > 0.5) sparkles(px, pcy, pr * 1.2, 5, wake, 6);
    tag("谷氨酸神经元", px, pcy + pr * 1.05, fsz(0.028), "#fff0b3");
    // 刹车：GABA 神经元的轴突连到谷氨酸神经元，中间是踏板
    const ex = px - pr * 0.72, ey = pcy + pr * 0.35;
    const lx0 = gx + gr, ly0 = gcy;
    ctx.save();
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(4, H * 0.012); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(lx0, ly0); ctx.quadraticCurveTo((lx0 + ex) / 2, ly0 + H * 0.12, ex, ey); ctx.stroke();
    ctx.strokeStyle = "#c7b8f2"; ctx.lineWidth = Math.max(2.5, H * 0.008); ctx.stroke();
    // ⊣ 形的末端：抑制
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * 0.009);
    ctx.beginPath(); ctx.moveTo(ex - H * 0.02, ey - H * 0.03); ctx.lineTo(ex + H * 0.02, ey + H * 0.03); ctx.stroke();
    ctx.restore();
    if (brake > 0.3) {
      const t = (time * 0.6) % 1, q = 1 - t;
      const sx = q * q * lx0 + 2 * q * t * (lx0 + ex) / 2 + t * t * ex, sy = q * q * ly0 + 2 * q * t * (ly0 + H * 0.12) + t * t * ey;
      glow(sx, sy, H * 0.03, "#b8b0f0", brake);
    }
    // 踏板放在地上，一根拉线连到刹车线上；GABA 快递员踩着它
    const mxL = 0.25 * lx0 + 0.5 * (lx0 + ex) / 2 + 0.25 * ex, myL = 0.25 * ly0 + 0.5 * (ly0 + H * 0.12) + 0.25 * ey;
    const ps = Math.min(H * 0.05, W * 0.04), pdx = mxL, pdy = gy - ps * 0.35;
    ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.beginPath(); ctx.moveTo(mxL, myL); ctx.lineTo(pdx, pdy - ps * 0.9); ctx.stroke(); ctx.restore();
    pedal(pdx, pdy, ps, brake);
    chara(pdx - ps * 1.6, gy, cs * 1.05, { who: "GABA", arms: doze > 0.5 ? "down" : "fist", eyes: doze > 0.5 ? "closed" : "open", mouth: doze > 0.5 ? "cat" : "flat", gray: 0.5 * doze, bob: doze > 0.5 ? 0.3 : 1 });
    if (doze > 0.5) emote("zzz", pdx - ps * 1.6 + cs, gy - cs * 3.2, cs * 0.6, doze);
    // 谷氨酸快递员：醒过来就蹦起来
    const qx = px + pr * 1.25;
    chara(qx, gy, cs * 1.1, { who: "Glu", eyes: wake > 0.5 ? "sparkle" : "sleepy", mouth: wake > 0.5 ? "grin" : "flat", arms: wake > 0.5 ? "up" : "down", gray: 0.5 * (1 - wake), jump: wake > 0.5 ? Math.abs(Math.sin(time * 5)) * 0.2 : 0, dir: -1 });
    if (nar) { // 手机上两条标注位置相同，用同一个 key 先后说
      const second = lt > 4.3;
      callout("nmda", (lt > 0.8 && lt < 4) || (lt > 4.6 && lt < 9), second ? gx - rs * 0.2 : gx + rs * 0.6, second ? ry - rs * 0.8 : ry - rs, W * 0.3, H * 0.2 + Anima.topSafe() * 0.3, second ? "氯胺酮：堵住 NMDA 通道" : "NMDA 受体：让 GABA 保持工作");
    } else {
      callout("nmda", lt > 0.8 && lt < 4, gx + rs * 0.6, ry - rs, W * 0.3, H * 0.2 + Anima.topSafe() * 0.3, "NMDA 受体：让 GABA 保持工作");
      callout("ket", lt > 4.6 && lt < 9, gx - rs * 0.2, ry - rs * 0.8, W * 0.3, H * 0.2 + Anima.topSafe() * 0.3, "氯胺酮：堵住 NMDA 通道");
    }
    // 手机上中间放不下：气泡都放到右上角（谷氨酸神经元的头顶上方），“去抑制”标注用左上角的位置，
    // 不压住谷氨酸神经元的脸和右下角的谷氨酸快递员
    callout("dis", lt > 9, pdx + H * 0.03, pdy, nar ? W * 0.28 : W * 0.46, nar ? H * 0.2 + Anima.topSafe() * 0.3 : H * 0.95, "刹车松开 = 去抑制");
    say("brake", lt > 0.8 && lt < 4.5, qx, gy - cs * 3.4, nar ? W * 0.84 : W * 0.8, H * (nar ? 0.3 : 0.28), nar ? "被刹车管着…" : "被刹车管着，好困……", "think");
    say("free", lt > 9, qx, gy - cs * 3.4, nar ? W * 0.78 : W * 0.8, H * (nar ? 0.3 : 0.28), "刹车松开啦！", nar ? "say" : "shout");
    ctx.restore();
  }

  // ---------- 第 3 幕：谷氨酸爆发 ----------
  function burstView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nar = narrow();
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff8ea"); bg.addColorStop(0.5, "#eef8fc"); bg.addColorStop(1, "#fff1e6");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#ffe3a8", 0.8, 50);
    const cx = W * 0.47, tw = Math.min(W * (nar ? 0.66 : 0.56), H * 1.05), th = H * 0.36, post = H * 0.74;
    Anima.postMembrane(post, C.post, {});
    const rs = H * 0.05;
    const RX = [cx - tw * 0.36, cx - tw * 0.12, cx + tw * 0.12, cx + tw * 0.36];
    const kind = ["AMPA", "NMDA", "AMPA", "AMPA"];
    const burst = lt > 1 && lt < 7.5;
    const fade = prog(7.5, 2.5);
    Anima.terminal(cx, 0, tw, th, C.term);
    for (let i = 0; i < 3; i++) Anima.vesicle(cx - tw * 0.2 + i * tw * 0.2, th * (0.55 + (i % 2) * 0.15), H * 0.04, Anima.CAST.Glu.hair, burst ? 2 : 5, i * 5);
    // 受体
    const act = (i) => kind[i] === "AMPA" ? clamp(prog(1.6, 0.8) * (1 - fade * 0.7), 0, 1) : 0;
    const R = RX.map((x, i) => Anima.receptor(x, post, rs, kind[i] === "AMPA" ? "#ffd27a" : "#d9ccfa", act(i), { label: kind[i] }));
    // NMDA 上坐着氯胺酮
    const nx = RX[1];
    rrect(nx - rs * 0.22, post - rs * 1.35, rs * 0.44, rs * 1.3, rs * 0.2); ctx.fillStyle = "#ffb36b"; ctx.fill(); outline(1.4); ctx.stroke();
    const cs = Math.min(H * 0.036, W * 0.03);
    chara(nx, R[1].site.y + rs * 0.2, cs, drug(KET, { arms: "shh", eyes: "happy", mouth: "smile", tag: "" }));
    // 电信号在下一个神经元里传开
    if (lt > 2 && fade < 0.8) {
      const t = (time * 0.8) % 1;
      Anima.spark([[RX[0], post + H * 0.1], [RX[3], post + H * 0.12], [W + 20, post + H * 0.16]], t, H * 0.025, C.gold);
    }
    // 谷氨酸快递员：一大波冲出来，又很快稀下去
    const N = 12;
    for (let i = 0; i < N; i++) {
      const born = 1 + i * 0.35;
      const t = (lt - born) / 1.6;
      if (t < 0 || born > 7.5) continue;
      const tgt = [0, 2, 3][i % 3];
      const sx = cx + tw * (-0.2 + (i % 5) * 0.1), ex = RX[tgt] + (i < 3 ? 0 : (rnd(i) - 0.5) * rs * 0.8);
      const p = clamp(t, 0, 1);
      const x = lerp(sx, ex, ease(p)), y = lerp(th + cs * 3, post - rs * 1.6, ease(p)) - Math.sin(p * Math.PI) * H * 0.04;
      const stay = i < 3 ? 8 : born + 1.6; // 前三位在 AMPA 门上多站一会儿
      const out = clamp((lt - stay) / 1.5, 0, 1);
      if (out >= 1) continue;
      chara(x, y, cs * 0.85, { who: "Glu", walk: p < 1 ? time * 14 + i : null, eyes: p < 1 ? "sparkle" : "happy", mouth: p < 1 ? "open" : "grin", arms: "up", alpha: 1 - out, shadow: false, jump: p >= 1 ? Math.abs(Math.sin(time * 5 + i)) * 0.15 : 0 });
    }
    if (lt > 1 && lt < 2.4) sfx("哗——！", cx + tw * 0.3, th + H * 0.06, fsz(0.05), "#e7a23a", -0.12, 1);
    callout("ampa", lt > 3 && lt < 9.5, RX[3] + rs * 0.6, post - rs, nar ? W * 0.78 : W * 0.86, H * 0.3, "AMPA 受体：被大量激活");
    callout("short", lt > 9.5, cx - tw * 0.3, th + H * 0.1, nar ? W * 0.3 : W * 0.22, H * 0.46, "爆发很短暂，很快就过去");
    say("go", lt > 1.4 && lt < 6, cx, th + cs * 3, nar ? W * 0.2 : W * 0.14, th * 0.62, "冲呀——！", "shout");
    say("block", lt > 6.5 && lt < 11, nx, R[1].site.y - cs * 3, nx - W * 0.06, post - H * 0.2, "这扇门我先挡着～", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：长出新枝桠 ----------
  function bez(p0, p1, p2, t) { const q = 1 - t; return { x: q * q * p0[0] + 2 * q * t * p1[0] + t * t * p2[0], y: q * q * p0[1] + 2 * q * t * p1[1] + t * t * p2[1] }; }
  function sproutView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nar = narrow();
    const on = prog(3, 1); // mTOR 开关打开
    Anima.wash(mix("#eef0f5", "#fff6ea", on), mix("#f2f2f6", "#effaf1", on));
    if (on > 0.2) Anima.bokeh(6, "#ffe3a8", on, 13);
    // 神经元胞体 + 一根长长的树突
    const sx = W * 0.12, sy = H * 0.62, sr = Math.min(H * 0.1, W * 0.08);
    const p0 = [sx + sr * 0.8, sy - sr * 0.2], p1 = [W * 0.5, H * 0.38], p2 = [W * 0.93, H * 0.52];
    ctx.lineCap = "round";
    for (const pr of [[H * 0.05, C.line], [H * 0.038, "#f7c9a8"]]) {
      ctx.strokeStyle = pr[1]; ctx.lineWidth = pr[0];
      ctx.beginPath(); ctx.moveTo(p0[0], p0[1]); ctx.quadraticCurveTo(p1[0], p1[1], p2[0], p2[1]); ctx.stroke();
    }
    // 树突棘：沿着树突一根根冒出来
    const N = nar ? 10 : 14;
    const grow = [];
    for (let i = 0; i < N; i++) {
      const t = 0.12 + i / (N - 1) * 0.84;
      const p = bez(p0, p1, p2, t), q = bez(p0, p1, p2, t + 0.01);
      const nx = -(q.y - p.y), ny = q.x - p.x, nl = Math.hypot(nx, ny) || 1;
      const side = i % 2 ? 1 : -1;
      const old = i % 4 === 0; // 本来就有的几根
      const g = old ? 1 : prog(4.2 + i * 0.45, 0.9);
      grow.push({ p, g, side });
      if (g < 0.02) continue;
      const len = H * 0.055 * g, ux = nx / nl * side, uy = ny / nl * side;
      const hx = p.x + ux * (H * 0.018 + len), hy = p.y + uy * (H * 0.018 + len);
      ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * 0.011);
      ctx.beginPath(); ctx.moveTo(p.x + ux * H * 0.015, p.y + uy * H * 0.015); ctx.lineTo(hx, hy); ctx.stroke();
      ctx.strokeStyle = "#f7c9a8"; ctx.lineWidth = Math.max(1.5, H * 0.006); ctx.stroke();
      ctx.beginPath(); ctx.arc(hx, hy, H * 0.017 * (0.5 + g * 0.5), 0, Math.PI * 2); if (!old) glow(hx, hy, H * 0.03, "#ffd76a", 0.6 * g);
      ctx.beginPath(); ctx.arc(hx, hy, H * 0.017 * (0.5 + g * 0.5), 0, Math.PI * 2); ctx.fillStyle = old ? "#f7c9a8" : "#ffc46b"; ctx.fill(); outline(1.5); ctx.stroke();
      if (!old && g > 0.1 && g < 0.95) sparkle(hx + H * 0.02, hy - H * 0.02, H * 0.015, 1);
    }
    // 胞体
    const g = ctx.createRadialGradient(sx - sr * 0.3, sy - sr * 0.3, sr * 0.1, sx, sy, sr);
    g.addColorStop(0, "#fff0ea"); g.addColorStop(1, "#ffd3c4");
    ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    face(sx, sy + sr * 0.15, sr * 0.45, lt > 7 ? 1 : 0);
    // BDNF 营养液：从上方飘下来
    const bp = prog(0.8, 1);
    for (let k = 0; k < 6; k++) {
      const t = ((time * 0.35) + k / 6) % 1;
      const x = lerp(W * 0.3, W * 0.72, rnd(k + 3)), y = lerp(H * 0.12, H * 0.4, t);
      drop(x, y, H * 0.02, bp * Math.sin(t * Math.PI));
    }
    // mTOR 开关
    const mx = W * (nar ? 0.5 : 0.46), my = H * 0.8, mw = Math.min(W * 0.14, H * 0.2), mh = H * 0.1;
    rrect(mx - mw / 2, my - mh / 2, mw, mh, mh * 0.2); ctx.fillStyle = "#fffdfb"; ctx.fill(); outline(1.8); ctx.stroke();
    text("mTOR", mx - mw * 0.2, my, fsz(0.032), C.ink);
    const lx = mx + mw * 0.27;
    rrect(lx - mw * 0.1, my - mh * 0.3, mw * 0.2, mh * 0.6, mw * 0.1); ctx.fillStyle = mix("#ffd0d0", "#bfe8d6", on); ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(lx, lerp(my + mh * 0.15, my - mh * 0.15, on), mw * 0.075, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
    if (on > 0.5) glow(mx, my, mw * 0.7, C.mint, on * 0.8);
    outline(1.3); ctx.save(); ctx.setLineDash([4, 5]); ctx.beginPath(); ctx.moveTo(mx, my - mh / 2); ctx.lineTo(W * 0.5, H * 0.5); ctx.stroke(); ctx.restore();
    // 时钟：几小时
    const kx = W * (nar ? 0.84 : 0.88), ky = H * 0.8, kr = Math.min(H * 0.065, W * 0.05);
    ctx.beginPath(); ctx.arc(kx, ky, kr, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(2); ctx.stroke();
    const hr = lt * 0.5;
    outline(Math.max(2, kr * 0.08));
    ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(kx + Math.sin(hr) * kr * 0.5, ky - Math.cos(hr) * kr * 0.5); ctx.moveTo(kx, ky); ctx.lineTo(kx + Math.sin(hr * 12) * kr * 0.75, ky - Math.cos(hr * 12) * kr * 0.75); ctx.stroke();
    text("几小时", kx, ky + kr * 1.45, fsz(0.03), C.warn);
    // 谷氨酸快递员在树突上欢呼
    const cs = Math.min(H * 0.036, W * 0.03);
    const gp = bez(p0, p1, p2, 0.55);
    chara(gp.x, gp.y - H * 0.03, cs, { who: "Glu", eyes: lt > 6 ? "sparkle" : "happy", arms: lt > 6 ? "up" : "wave", mouth: "grin", shadow: false });
    callout("bdnf", lt > 1 && lt < 5, W * 0.5, H * 0.26, nar ? W * 0.72 : W * 0.78, H * 0.2 + Anima.topSafe() * 0.2, "BDNF：神经元的营养液");
    callout("mtor", lt > 3 && lt < 8, mx - mw / 2, my, nar ? W * 0.22 : W * 0.26, H * 0.93, "mTOR：生长开关，打开！");
    const sp = grow[Math.floor(N * 0.7)];
    callout("spine", lt > 8, sp.p.x, sp.p.y - H * 0.06, nar ? W * 0.62 : W * 0.72, H * 0.2 + Anima.topSafe() * 0.2, "新的树突棘：突触“小枝桠”");
    say("link", lt > 9, sx, sy - sr, nar ? W * 0.24 : W * 0.2, H * 0.34, "又能和邻居连上线啦！", "say");
    ctx.restore();
  }

  // ---------- 第 5 幕：艾司氯胺酮鼻喷雾 ----------
  function sprayBottle(x, y, s) {
    rrect(x - s * 0.22, y - s * 0.2, s * 0.44, s * 0.8, s * 0.1); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    rrect(x - s * 0.22, y + s * 0.15, s * 0.44, s * 0.2, 2); ctx.fillStyle = "#ffb36b"; ctx.fill(); ctx.stroke();
    rrect(x - s * 0.08, y - s * 0.55, s * 0.16, s * 0.35, s * 0.06); ctx.fillStyle = "#ffe6c4"; ctx.fill(); ctx.stroke();
  }
  function icon(kind, x, y, r) {
    outline(Math.max(1.4, r * 0.06));
    if (kind === "float") { // 解离感：轻飘飘的小人和漩涡
      ctx.beginPath();
      for (let k = 0; k <= 30; k++) { const q = k * 0.45 + time, rr = r * 0.05 + k * r * 0.014; const px = x + Math.cos(q) * rr, py = y + Math.sin(q) * rr * 0.7; if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
      ctx.strokeStyle = C.lavDeep; ctx.stroke();
      emote("?", x + r * 0.35, y - r * 0.3, r * 0.35);
    } else if (kind === "bp") { // 血压计
      ctx.beginPath(); ctx.arc(x, y + r * 0.1, r * 0.42, Math.PI, 0); ctx.closePath(); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      ctx.beginPath(); ctx.arc(x, y + r * 0.1, r * 0.32, Math.PI * 1.55, 0); ctx.strokeStyle = C.bad; ctx.lineWidth = r * 0.1; ctx.stroke();
      outline(Math.max(1.5, r * 0.06)); ctx.beginPath(); ctx.moveTo(x, y + r * 0.1); ctx.lineTo(x + r * 0.28, y - r * 0.15); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + r * 0.5, y - r * 0.05); ctx.lineTo(x + r * 0.5, y - r * 0.5); ctx.moveTo(x + r * 0.38, y - r * 0.38); ctx.lineTo(x + r * 0.5, y - r * 0.5); ctx.lineTo(x + r * 0.62, y - r * 0.38); ctx.strokeStyle = C.bad; ctx.stroke();
    } else if (kind === "sleep") {
      ctx.beginPath(); ctx.arc(x - r * 0.1, y, r * 0.4, 0, Math.PI * 2); ctx.fillStyle = "#fff1a8"; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(x + r * 0.1, y - r * 0.12, r * 0.35, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
      text("z", x + r * 0.4, y - r * 0.35, r * 0.4, C.soft);
    } else if (kind === "car") { // 不能开车
      rrect(x - r * 0.45, y - r * 0.15, r * 0.9, r * 0.35, r * 0.12); ctx.fillStyle = "#bfe3f5"; ctx.fill(); ctx.stroke();
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x + d * r * 0.25, y + r * 0.22, r * 0.1, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill(); }
      ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(2, r * 0.08);
      ctx.beginPath(); ctx.arc(x, y, r * 0.6, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - r * 0.42, y - r * 0.42); ctx.lineTo(x + r * 0.42, y + r * 0.42); ctx.stroke();
    }
  }
  function tile(x, y, r, kind, label, a, ring) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    const pop = 0.7 + 0.3 * a;
    ctx.translate(x, y); ctx.scale(pop, pop); ctx.translate(-x, -y);
    ctx.shadowColor = "rgba(120,80,100,0.18)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = ring; ctx.lineWidth = Math.max(2.5, r * 0.1); ctx.stroke();
    icon(kind, x, y - r * 0.05, r * 0.95);
    const fs = fsz(0.03);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(label).width + fs * 1.1;
    rrect(x - tw / 2, y + r * 0.78, tw, fs * 1.45, fs * 0.72); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    text(label, x, y + r * 0.78 + fs * 0.75, fs, C.ink);
    ctx.restore();
  }
  function clinicView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nar = narrow();
    Anima.wash("#f5fbff", "#fdf3ea");
    Anima.bokeh(6, "#cfeaf7", 0.7, 66);
    const gy = H * 0.88;
    // 诊室：墙上的窗、地板、小床
    ctx.fillStyle = "#f3eadf"; ctx.fillRect(0, gy, W, H - gy); outline(1.4); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    const wx = W * 0.08, wy = Anima.topSafe() + H * 0.03, ww = W * 0.16, wh = H * 0.2;
    rrect(wx, wy, ww, wh, 8); ctx.fillStyle = "#dff2fb"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(wx + ww / 2, wy); ctx.lineTo(wx + ww / 2, wy + wh); ctx.moveTo(wx, wy + wh / 2); ctx.lineTo(wx + ww, wy + wh / 2); ctx.stroke();
    const s = Math.min(H * 0.055, W * 0.045);
    // 病人：用完鼻喷雾，有一阵轻飘飘的，然后休息
    const px = W * (nar ? 0.36 : 0.34);
    const dz = lt > 3.5 && lt < 8.5;
    // 休息用的小沙发
    const aw = s * 3.4, ah = s * 2.6;
    rrect(px - aw / 2, gy - ah, aw, ah * 0.75, s * 0.5); ctx.fillStyle = "#cfe8f5"; ctx.fill(); outline(1.8); ctx.stroke();
    rrect(px - aw * 0.62, gy - ah * 0.55, aw * 0.24, ah * 0.55, s * 0.3); ctx.fillStyle = "#b8dcef"; ctx.fill(); ctx.stroke();
    rrect(px + aw * 0.38, gy - ah * 0.55, aw * 0.24, ah * 0.55, s * 0.3); ctx.fill(); ctx.stroke();
    chara(px, gy, s, { who: "neuron", eyes: lt < 3.5 ? "open" : dz ? "dizzy" : "happy", mouth: dz ? "wavy" : "smile", arms: lt < 3.5 ? "hold" : "down" });
    if (lt < 3.5) sprayBottle(px + s * 0.35, gy - s * 2.1, s * 0.9);
    if (dz) { // 轻飘飘：身边的小漩涡
      ctx.save(); ctx.globalAlpha *= 0.7;
      for (let k = 0; k < 3; k++) { const q = time * 2 + k * 2.1; sparkle(px + Math.cos(q) * s * 1.6, gy - s * 2 + Math.sin(q) * s * 0.8, s * 0.25, 1); }
      ctx.restore();
    }
    // 医护人员
    const dx = W * (nar ? 0.14 : 0.16);
    chara(dx, gy, s, { who: "neuron", hair: "#5b4a5e", cloth: "#ffffff", glasses: true, eyes: "happy", mouth: "smile", arms: "hold", item: "book" });
    // 留观时钟
    const kx = W * (nar ? 0.56 : 0.5), ky = H * (nar ? 0.4 : 0.36), kr = Math.min(H * 0.06, W * 0.05);
    ctx.beginPath(); ctx.arc(kx, ky, kr, 0, Math.PI * 2); ctx.fillStyle = "#fff1b8"; ctx.fill(); outline(2); ctx.stroke();
    outline(Math.max(2, kr * 0.08));
    ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(kx + Math.sin(lt * 0.4) * kr * 0.5, ky - Math.cos(lt * 0.4) * kr * 0.5); ctx.moveTo(kx, ky); ctx.lineTo(kx + Math.sin(lt * 3) * kr * 0.75, ky - Math.cos(lt * 3) * kr * 0.75); ctx.stroke();
    tag("留观", kx, ky + kr * 1.5, fsz(0.028), "#fff");
    // 两位访客：艾司氯胺酮 + 口服抗抑郁药
    const vp = prog(7.5, 1.5), vx = W * (nar ? 0.56 : 0.54);
    chara(vx, gy, s * 0.9, drug(ESK, { arms: "wave", eyes: "happy", mouth: "grin", tag: nar ? "艾司" : "艾司氯胺酮" }));
    chara(lerp(W * 1.05, vx + s * 2.6, vp), gy, s * 0.9, drug(SSRI, { tag: nar ? "口服药" : "口服抗抑郁药", walk: vp < 1 ? time * 9 : null, dir: -1, arms: vp >= 1 ? "wave" : "down", eyes: "happy", mouth: "grin", alpha: clamp(vp * 3, 0, 1) }));
    // 可能的反应
    const tr = Math.min(H * 0.062, W * 0.05), tx = W * (nar ? 0.88 : 0.87);
    const K = [["float", "解离感"], ["bp", "血压升高"], ["sleep", "嗜睡"], ["car", "当天别开车"]];
    K.forEach((k, i) => tile(tx, lerp(H * (nar ? 0.27 : 0.25), H * 0.76, i / 3), tr * 0.9, k[0], k[1], prog(3.5 + i * 0.8, 0.6), "#f2b5c4"));
    callout("where", lt > 0.8 && lt < 5, px + s * 0.35, gy - s * 2.3, nar ? W * 0.44 : W * 0.4, H * 0.22 + Anima.topSafe() * 0.2, "鼻喷雾：只在医疗机构里使用");
    say("watch", lt > 3.8 && lt < 8, dx, gy - s * 3.2, nar ? W * 0.3 : W * 0.3, H * 0.4, "先在这儿休息，我们陪你观察～", "say");
    callout("combo", lt > 9, vx + s * 1.3, gy - s * 2, nar ? W * 0.44 : W * 0.46, H * 0.22 + Anima.topSafe() * 0.2, "通常和口服抗抑郁药一起用");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 1) { v1 = lt > 6.5 ? "松开" : "踩刹车"; }
    if (cur === 2) { v1 = lt > 8 ? "回落" : "爆发"; }
    pill(14, 12, c.pill[0], v1, "#e07a2a", false);
    pill(W - 14, 12, c.pill2[0], v2, "#6b61c9", true);
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) roadView(S.v0);
    if (S.v1 > 0.02) brakeView(S.v1);
    if (S.v2 > 0.02) burstView(S.v2);
    if (S.v3 > 0.02) sproutView(S.v3);
    if (S.v4 > 0.02) clinicView(S.v4);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f2a65a",
    titleCard: { lines: ["抗抑郁的", "快车道"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
