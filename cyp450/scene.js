Anima.register("cyp450", {
    "title": "肝脏里的代谢工厂",
    "tag": "基础篇",
    "headline": "药吃下去以后，先去【肝脏工厂】报到",
    "lede": "大多数药物进入身体后，要在肝脏里被一群叫 CYP450 的酶“加工”，才能慢慢排出体外。流水线被别的药拖慢了、被香烟加快了、天生就快或慢，血里的药量都会跟着变。这也是为什么医生总要问：你还在吃什么？抽不抽烟？",
    "summary": "CYP450 酶的几条主要流水线（1A2、2D6、2C19、3A4），抑制剂和诱导剂，吸烟、西柚汁的影响，以及慢代谢者和超快代谢者。",
    "chapter": "对应 Stahl《精神药理学精要》第 2 章 · 酶作为药物靶点（药物代谢）",
    "footer": "如果要开始或停止吃别的药、保健品，或者戒烟、开始吸烟，请先告诉医生或药师。",
    "canvasLabel": "肝脏代谢工厂里，戴安全帽的 CYP 酶工人在流水线上加工药物胶囊的动画",
    "regions": [],
    "parts": ["basics"],
    "cast": ["drug", "MAO"],
    "color": "#f2b48c"
  }, () => {
  const CH = [
    { title: "药物的旅程", v0: 1, v1: 0, v2: 0,
      pill: ["药物", "先过肝脏"], pill2: ["CYP450", "加工车间"],
      text: "药吃下去以后，先在肠道被吸收，再顺着血流进入肝脏。肝脏像一座代谢工厂，里面有一大家子酶，叫细胞色素 P450（CYP450），负责给药物“加工”，让它们更容易被排出体外。很多精神科药物都要在这里过一道流水线，剩下的药才随血液到达大脑发挥作用。",
      fact: "口服的药大多先经过肝脏：一部分在这里被代谢掉，剩下的才进入全身血液" },
    { title: "几条主要流水线", v0: 0, v1: 1, v2: 0,
      pill: ["流水线", "1A2 2D6…"], pill2: ["最忙的", "3A4"],
      text: "CYP450 家族成员很多，名字是一串编号，像车间号。和精神科药物关系最大的是 1A2、2D6、2C19 和 3A4 这几条流水线，每条线专门加工某些药：比如 1A2 加工氯氮平、奥氮平，2D6 加工不少抗抑郁药和抗精神病药，3A4 最忙，市面上相当多的药都要经过它。",
      fact: "一种药常常走一两条主要流水线；知道它走哪条，就能预判谁会影响它" },
    { title: "流水线变慢：抑制剂", v0: 0, v1: 1, v2: 0,
      pill: ["抑制剂", "工人变慢"], pill2: ["血药浓度", "升高 ↑"],
      text: "有些药会按住某条流水线的工人，叫酶抑制剂。比如氟伏沙明会强烈抑制 1A2，和氯氮平一起用时，氯氮平加工不过来，在血里越积越多，副作用也跟着变多。氟西汀、帕罗西汀会抑制 2D6，经 2D6 加工的药浓度就可能升高。所以医生合用这些药时会格外小心，必要时调整方案。",
      fact: "抑制剂让流水线变慢 → 另一种药的血药浓度升高 → 副作用可能变多" },
    { title: "流水线变快：诱导剂", v0: 0, v1: 1, v2: 0,
      pill: ["诱导剂", "工人变多"], pill2: ["血药浓度", "降低 ↓"],
      text: "还有些东西会给流水线加派工人，叫酶诱导剂。卡马西平会诱导 3A4，让经过 3A4 的药被加工得更快，药效可能打折扣。吸烟也会诱导 1A2，所以吸烟的人氯氮平、奥氮平浓度往往偏低；一旦戒烟，多出来的工人慢慢下班，药的浓度可能反而升高，要提前告诉医生。",
      fact: "诱导作用一般要几天到几周才出现，停掉以后也要慢慢才消退" },
    { title: "天生的快慢", v0: 0, v1: 1, v2: 0,
      pill: ["基因", "决定快慢"], pill2: ["2D6 2C19", "差异大"],
      text: "每个人流水线的速度，有一部分是天生的，由基因决定。有人某种酶的活性很低，叫慢代谢者，同样的药在体内留得更久、浓度更高，更容易出现副作用；也有人酶特别多，是超快代谢者，药很快被加工掉，可能不太起效。2D6 和 2C19 的这类差异最常被提到，必要时可以参考基因检测。",
      fact: "2C19 慢代谢者在东亚人群中比例较高，大约每 6～7 人里就有 1 人" },
    { title: "告诉医生你的一切", v0: 0, v1: 0, v2: 1,
      pill: ["西柚汁", "抑制 3A4"], pill2: ["记得说", "药 · 烟 · 保健品"],
      text: "影响流水线的不只是处方药。西柚（葡萄柚）汁会抑制肠道里的 3A4；一些保健品，比如贯叶连翘（圣约翰草），会诱导 3A4；吸烟会诱导 1A2。所以看病时，请把正在吃的所有药、保健品，以及吸烟和饮食习惯都告诉医生和药师，也不要自己加药、减药或换药。",
      fact: "看病、取药时带上一份“我在吃什么”的清单，是最简单的用药安全习惯" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    liver: "#f0a58f", liverD: "#d9826c", belt: "#d8cfd6", beltD: "#b3a6b0", blood: "#ffd0d6", brain: "#ffd9e4",
    e1A2: "#8fc7f0", e2D6: "#f7a8c0", e2C19: "#a8dcb5", e3A4: "#ffc98f", met: "#d6d0d8",
  });
  const { rnd, clamp, lerp, ease, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0 };
  const N = () => Anima.narrow;
  const fsS = () => Math.max(10, H * 0.028) * Anima.UI;
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;

  // 每条流水线的工人样子
  const ENZ = {
    "1A2": { col: C.e1A2, hair: "#5f8fb8" },
    "2D6": { col: C.e2D6, hair: "#c7688a" },
    "2C19": { col: C.e2C19, hair: "#5e9e70" },
    "3A4": { col: C.e3A4, hair: "#c98a4a" },
  };
  // 每一幕里有哪几条流水线，以及它们的状态目标
  // spd 传送带速度，crew 工人数，pile 堆积，lvl 血药浓度（0～1），gray 工人被按住
  function rowsFor(k, t) {
    if (k === 1) return [
      { id: "1A2", drug: "氯氮平、奥氮平…", spd: 1, crew: 1, pile: 0, lvl: 0.5 },
      { id: "2D6", drug: "不少抗抑郁药…", spd: 1, crew: 1, pile: 0, lvl: 0.5 },
      { id: "2C19", drug: "西酞普兰…", spd: 1, crew: 1, pile: 0, lvl: 0.5 },
      { id: "3A4", drug: "很多很多药", spd: 1.6, crew: 1, pile: 0, lvl: 0.5, busy: 1 },
    ];
    if (k === 2) {
      const a = t > 1.5 ? 1 : 0, b = t > 5 ? 1 : 0;
      return [
        { id: "1A2", drug: "氯氮平", spd: lerp(1, 0.18, a), crew: 1, pile: a, lvl: lerp(0.5, 0.92, a * clamp((t - 2) / 4, 0, 1)), gray: a, vis: a ? { lab: "FLV", tag: "氟伏沙明", c1: "#c3a6ec" } : null },
        { id: "2D6", drug: "经 2D6 的药", spd: lerp(1, 0.3, b), crew: 1, pile: b * 0.8, lvl: lerp(0.5, 0.85, b * clamp((t - 5.5) / 4, 0, 1)), gray: b, vis: b ? { lab: "PAR", tag: "帕罗西汀", c1: "#8fdcc4" } : null },
      ];
    }
    if (k === 3) {
      const a = t > 1.2 ? 1 : 0, sm = t > 4.5 && t < 8.5 ? 1 : 0, quit = t > 8.5 ? 1 : 0;
      const crew2 = 1 + 2 * (sm + (quit ? clamp(1 - (t - 8.5) / 3.5, 0, 1) : 0) + (t <= 4.5 ? 0 : 0));
      return [
        { id: "3A4", drug: "经 3A4 的药", spd: lerp(1, 2.4, a), crew: 1 + 2 * a, pile: 0, lvl: lerp(0.5, 0.15, a * clamp((t - 1.8) / 3, 0, 1)), vis: a ? { lab: "CBZ", tag: "卡马西平", c1: "#9fc9f2", induce: true } : null },
        { id: "1A2", drug: "氯氮平", spd: lerp(1, 2.4, clamp(crew2 - 1, 0, 2) / 2), crew: crew2, pile: 0,
          lvl: t < 4.5 ? 0.5 : (t < 8.5 ? lerp(0.5, 0.18, clamp((t - 5) / 2.5, 0, 1)) : lerp(0.18, 0.88, clamp((t - 9) / 3.5, 0, 1))), smoke: t > 4.5 ? (quit ? 0 : 1) : 0 },
      ];
    }
    if (k === 4) return [
      { id: "2D6", drug: "慢代谢者", spd: 0.2, crew: 1, pile: 0.8, lvl: 0.9, gray: 0.6, sleepy: true, who: "慢" },
      { id: "2D6", drug: "一般代谢者", spd: 1, crew: 1, pile: 0, lvl: 0.5, who: "中" },
      { id: "2D6", drug: "超快代谢者", spd: 2.6, crew: 3, pile: 0, lvl: 0.12, who: "快" },
    ];
    return [];
  }
  // 平滑后的流水线状态（按“第几条”存）
  const RS = [];
  function update(dt) {
    if (cur !== lastCur) {
      lastCur = cur; lt = 0;
      const rows = rowsFor(cur, 0);
      RS.length = 0;
      rows.forEach((r) => RS.push({ spd: r.spd, crew: r.crew, pile: r.pile, lvl: r.lvl, gray: r.gray || 0, smoke: r.smoke || 0, u: 0 }));
    }
    lt += dt;
    const rows = rowsFor(cur, lt), k = 1 - Math.exp(-dt * 2.2);
    rows.forEach((r, i) => {
      const s = RS[i]; if (!s) return;
      s.spd = lerp(s.spd, r.spd, k); s.crew = lerp(s.crew, r.crew, k); s.pile = lerp(s.pile, r.pile, k);
      s.lvl = lerp(s.lvl, r.lvl, k); s.gray = lerp(s.gray, r.gray || 0, k); s.smoke = lerp(s.smoke, r.smoke || 0, k);
      s.u += dt * s.spd;
    });
  }

  // ---------- 小零件 ----------
  function capsule(x, y, r, c1, c2, happy) {
    ctx.save(); ctx.translate(x, y);
    rrect(-r * 1.5, -r, r * 3, r * 2, r);
    ctx.save(); ctx.clip();
    ctx.fillStyle = c1; ctx.fillRect(-r * 1.6, -r, r * 1.6, r * 2);
    ctx.fillStyle = c2 || "#ffffff"; ctx.fillRect(0, -r, r * 1.6, r * 2);
    ctx.restore();
    rrect(-r * 1.5, -r, r * 3, r * 2, r); outline(Math.max(1, r * 0.15)); ctx.stroke();
    if (r > 5) face(0, r * 0.05, r * 0.7, happy ? 1 : 0, false);
    ctx.restore();
  }
  function metab(x, y, r, a) {
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = C.met; ctx.fill(); outline(Math.max(1, r * 0.15)); ctx.stroke();
    if (r > 4) { // 闭眼微笑：加工完了，准备下班回家
      outline(Math.max(0.8, r * 0.12));
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x + d * r * 0.35, y - r * 0.05, r * 0.18, Math.PI, 0); ctx.stroke(); }
    }
    ctx.restore();
  }
  function worker(x, y, s, id, o) {
    const e = ENZ[id];
    o = o || {};
    chara(x, y, s, Object.assign({ who: "neuron", hair: e.hair, eye: Anima.mix(e.hair, "#3a2a30", 0.4), cloth: e.col, hat: "helmet", hatColor: e.col, label: id, style: "short" }, o));
  }
  function sign(x, y, t, col, fs) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(t).width + fs * 1.2, h = fs * 1.6;
    rrect(x - tw / 2, y - h / 2, tw, h, h * 0.3); ctx.fillStyle = col; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return tw;
  }
  function gaugeBar(x, y0, y1, w, lvl, first) {
    rrect(x - w / 2, y0, w, y1 - y0, w / 2); ctx.fillStyle = "#ffffff"; ctx.fill();
    ctx.save(); rrect(x - w / 2, y0, w, y1 - y0, w / 2); ctx.clip();
    const hgt = y1 - y0;
    ctx.fillStyle = Anima.alpha(C.bad, 0.12); ctx.fillRect(x - w / 2, y0, w, hgt * 0.3);
    ctx.fillStyle = Anima.alpha(C.good, 0.14); ctx.fillRect(x - w / 2, y0 + hgt * 0.3, w, hgt * 0.4);
    ctx.fillStyle = Anima.alpha(C.skyDeep, 0.12); ctx.fillRect(x - w / 2, y0 + hgt * 0.7, w, hgt * 0.3);
    const col = lvl > 0.7 ? C.bad : (lvl < 0.3 ? C.skyDeep : C.good);
    ctx.fillStyle = col; ctx.fillRect(x - w / 2, y0 + hgt * (1 - lvl), w, hgt * lvl);
    ctx.restore();
    rrect(x - w / 2, y0, w, y1 - y0, w / 2); outline(1.5); ctx.stroke();
    const fs = fsS() * 0.85;
    if (lvl > 0.7) text("太高", x + w * 0.7, y0 + hgt * 0.15, fs, C.bad, "left");
    if (lvl < 0.3) text("太低", x + w * 0.7, y0 + hgt * 0.85, fs, C.skyDeep, "left");
    return { x, y: y0 + hgt * (1 - lvl) };
  }

  // ================= 第 1 幕：药物的旅程 =================
  function pathAt(pts, t) {
    let len = 0; const seg = [];
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(l); len += l; }
    let d = clamp(t, 0, 1) * len, i = 0;
    while (i < seg.length - 1 && d > seg[i]) { d -= seg[i]; i++; }
    const p0 = pts[i], p1 = pts[i + 1], k = seg[i] ? d / seg[i] : 0;
    return { x: lerp(p0[0], p1[0], k), y: lerp(p0[1], p1[1], k), dir: p1[0] >= p0[0] ? 1 : -1 };
  }
  function view0(a) {
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f0", "#fdeef3");
    Anima.bokeh(7, "#ffd1dc", 0.7, 5);
    Anima.petals(8, 0.5, 11);
    const n = N();
    const gy = H * 0.8; // 地面
    // 路：嘴 → 肠道 → 肝脏工厂 → 血液 → 大脑；工厂旁边往下是“排出”
    const F = { x: W * (n ? 0.45 : 0.43), y: gy, w: W * (n ? 0.26 : 0.2), h: H * 0.34 };
    const B = { x: W * (n ? 0.86 : 0.86), y: H * (n ? 0.44 : 0.42), r: H * (n ? 0.1 : 0.11) };
    const gut = { x: W * 0.17, y: gy };
    const road = [[-W * 0.02, gy], [gut.x, gy], [F.x, gy]];
    const blood = [[F.x, gy], [F.x + F.w * 0.7, gy], [B.x - B.r * 1.6, gy], [B.x - B.r * 0.4, B.y + B.r * 1.2]];
    const outP = [[F.x, gy], [F.x + F.w * 0.3, gy + H * 0.08], [F.x + F.w * 0.9, H * 0.96]];
    // 地面和路
    ctx.fillStyle = "#f6eadf"; ctx.fillRect(0, gy, W, H - gy);
    outline(1.5); ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    // 血液小河
    ctx.strokeStyle = C.blood; ctx.lineWidth = H * 0.035; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); blood.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1] + H * 0.02) : ctx.moveTo(p[0], p[1] + H * 0.02))); ctx.stroke();
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5; ctx.setLineDash([6, 10]); ctx.lineDashOffset = -time * 20;
    ctx.stroke(); ctx.setLineDash([]); ctx.lineDashOffset = 0;
    // 肠道：弯弯曲曲的管子
    ctx.strokeStyle = C.line; ctx.lineWidth = H * 0.05; ctx.beginPath();
    for (let k = 0; k <= 30; k++) { const t = k / 30, x = gut.x - W * 0.06 + t * W * 0.12, y = gy - H * 0.13 + Math.sin(t * Math.PI * 4) * H * 0.04; if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.strokeStyle = "#ffc9b8"; ctx.lineWidth = H * 0.04; ctx.stroke();
    text("肠道", gut.x, gy - H * 0.24, fsS(), C.soft);
    // 大脑
    ctx.beginPath(); ctx.ellipse(B.x, B.y, B.r * 1.25, B.r, 0, 0, Math.PI * 2); ctx.fillStyle = C.brain; ctx.fill(); outline(2); ctx.stroke();
    ctx.save(); ctx.globalAlpha *= 0.5; ctx.strokeStyle = C.rose; ctx.lineWidth = 1.5;
    for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(B.x - B.r * 0.5 + k * B.r * 0.5, B.y - B.r * 0.3, B.r * 0.35, 0.2, Math.PI - 0.2); ctx.stroke(); }
    ctx.restore();
    face(B.x, B.y + B.r * 0.2, B.r * 0.4, 1);
    text("大脑", B.x, B.y - B.r * 1.3, fsS(), C.soft);
    // 排出口
    const ex = outP[2];
    rrect(ex[0] - W * 0.05, ex[1] - H * 0.05, W * 0.1, H * 0.06, H * 0.02); ctx.fillStyle = "#e9f5ee"; ctx.fill(); outline(1.4); ctx.stroke();
    text("排出体外", ex[0], ex[1] - H * 0.02, fsS() * 0.9, C.mintDeep);
    // 工厂
    const fx = F.x - F.w / 2, fy = F.y - F.h;
    ctx.beginPath(); ctx.moveTo(fx - F.w * 0.05, fy + F.h * 0.25); ctx.lineTo(F.x, fy - F.h * 0.02); ctx.lineTo(fx + F.w * 1.05, fy + F.h * 0.25); ctx.closePath();
    ctx.fillStyle = C.liverD; ctx.fill(); outline(2); ctx.stroke();
    rrect(fx + F.w * 0.72, fy - F.h * 0.02, F.w * 0.12, F.h * 0.22, 3); ctx.fillStyle = "#c9b4a8"; ctx.fill(); ctx.stroke();
    for (let k = 0; k < 3; k++) { // 烟囱冒出的小云朵（加工中）
      const t = (time * 0.35 + k / 3) % 1;
      ctx.save(); ctx.globalAlpha *= (1 - t) * 0.8;
      ctx.beginPath(); ctx.arc(fx + F.w * 0.78 + t * F.w * 0.2, fy - F.h * 0.06 - t * H * 0.1, H * (0.015 + t * 0.02), 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.2); ctx.stroke();
      ctx.restore();
    }
    rrect(fx, fy + F.h * 0.22, F.w, F.h * 0.78, 8); ctx.fillStyle = C.liver; ctx.fill(); outline(2); ctx.stroke();
    rrect(F.x - F.w * 0.14, F.y - F.h * 0.3, F.w * 0.28, F.h * 0.3, 6); ctx.fillStyle = "#8c5a4a"; ctx.fill(); ctx.stroke();
    face(F.x, fy + F.h * 0.42, F.h * 0.1, 1);
    sign(F.x, fy + F.h * 0.26, "肝脏代谢工厂", "#fff6e8", Math.min(fsS(), F.w * 0.1));
    // 走路的药物访客
    const cs = H * (n ? 0.045 : 0.04);
    for (let k = 0; k < 5; k++) {
      const T = (time * 0.07 + k * 0.2) % 1; // 0～0.5 走到工厂，之后分两路
      const toBrain = k % 2 === 0;
      if (T < 0.5) {
        const p = pathAt(road, T / 0.5);
        chara(p.x, p.y, cs, { who: "drug", label: "药", hatColor: ["#ff9aa9", "#9fc9f2", "#ffc98f", "#b3e3c4", "#c3a6ec"][k], walk: time * 9 + k, dir: 1, eyes: "happy" });
      } else if (T < 0.56) { // 在工厂里
      } else if (toBrain) {
        const p = pathAt(blood, (T - 0.56) / 0.44);
        chara(p.x, p.y, cs * 0.9, { who: "drug", label: "药", hatColor: ["#ff9aa9", "#9fc9f2", "#ffc98f", "#b3e3c4", "#c3a6ec"][k], walk: time * 9 + k, dir: 1, eyes: "sparkle", alpha: clamp((1 - T) * 8, 0, 1) });
      } else {
        const p = pathAt(outP, (T - 0.56) / 0.44);
        metab(p.x, p.y - cs * 0.5, cs * 0.5, clamp((1 - T) * 8, 0, 1));
      }
    }
    // MAO 在大脑边上客串
    const mx = B.x + B.r * (n ? 0.2 : 0.6), my = gy;
    chara(mx, my, cs, { who: "MAO", item: "broom", arms: "hold", eyes: "happy", dir: -1 });
    const top = Anima.topSafe() + H * 0.05;
    callout("c0-liver", cur === 0 && win(1.5, 7.5), fx + F.w * 0.1, fy + F.h * 0.5, n ? W * 0.3 : fx - W * 0.1, top + H * 0.06, "肝脏：药物代谢的主要工厂");
    callout("c0-out", cur === 0 && lt > 7.5, ex[0] - W * 0.03, ex[1] - H * 0.04, n ? W * 0.25 : ex[0] - W * 0.22, H * 0.9, "加工后的代谢物：排出体外");
    say("c0-go", cur === 0 && win(0.5, 4.5), W * 0.12, gy - cs * 3.2, n ? W * 0.2 : W * 0.14, top + H * 0.2, "先去工厂报到～", "say");
    say("c0-mao", cur === 0 && lt > 5, mx, my - cs * 3.2, n ? W * 0.72 : W * 0.75, top + H * 0.02, n ? "我只扫递质，药物归 CYP 管～" : "我在大脑里扫递质，药物归肝脏的 CYP 管～", "say");
    ctx.restore();
  }

  // ================= 第 2～5 幕：流水线 =================
  function rowDraw(r, s, y0, rh, idx) {
    const n = N();
    const x0 = W * (n ? 0.2 : 0.17), x1 = W * (n ? 0.84 : 0.85), by = y0 + rh * 0.74, bh = Math.max(6, rh * 0.09);
    const xs = lerp(x0, x1, 0.46), cs = Math.min(rh * 0.2, H * 0.052);
    const e = ENZ[r.id];
    // 左边的车间牌
    const fs = Math.min(fsS() * 1.05, rh * 0.2);
    sign(W * (n ? 0.1 : 0.085), by - rh * 0.28, "CYP" + r.id, e.col, fs);
    text(r.drug, W * (n ? 0.1 : 0.085), by + rh * 0.02, fs * 0.8, C.soft);
    // 工人（站在传送带后面）
    const crew = s.crew, nW = Math.max(1, Math.round(crew));
    const ws = [];
    for (let k = 0; k < 3; k++) {
      const vis = k === 0 ? 1 : clamp(crew - k, 0, 1);
      if (vis < 0.03) continue;
      const wx = xs + (k === 0 ? 0 : (k === 1 ? -1 : 1) * cs * 2.1);
      const busy = s.gray < 0.5;
      ctx.save(); ctx.globalAlpha *= vis;
      worker(wx, by + bh * 0.6 - (1 - vis) * cs, cs, r.id, {
        arms: busy ? (Math.sin(time * 6 * Math.max(0.6, s.spd) + k) > 0 ? "up" : "hold") : "down",
        eyes: r.sleepy ? "sleepy" : (s.gray > 0.5 ? "teary" : (s.spd > 1.8 ? "sparkle" : "happy")),
        mouth: s.gray > 0.5 ? "wavy" : "smile", gray: s.gray * (r.sleepy ? 0.6 : 0.5), brow: s.gray > 0.5 ? "worry" : null });
      ctx.restore();
      ws.push({ x: wx, y: by + bh * 0.6 });
    }
    // 传送带
    rrect(x0, by - bh / 2, x1 - x0, bh, bh / 2); ctx.fillStyle = C.belt; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.fillStyle = C.beltD;
    const step = bh * 2.2, off = (s.u * H * 0.12) % step;
    for (let x = x0 + bh + off; x < x1 - bh; x += step) { ctx.beginPath(); ctx.arc(x, by, bh * 0.22, 0, Math.PI * 2); ctx.fill(); }
    // 胶囊：左边来，经过工人以后变成代谢物
    const cr = Math.min(rh * 0.07, H * 0.018), sp = cr * 5.2, len = x1 - x0 - cr * 3;
    const shift = (s.u * H * 0.12) % sp;
    const pileN = Math.round(s.pile * 6);
    const hat = ["#ff9aa9", "#9fc9f2", "#ffc98f", "#c3a6ec"][idx % 4];
    for (let x = x0 + cr * 1.6 + shift - sp; x < x1 - cr * 1.6; x += sp) {
      if (x < x0 + cr * 1.6) continue;
      if (x < xs - cr * 1.8) {
        if (pileN > 0 && x > xs - cr * 3 - pileN * cr * 1.8) continue; // 堆积的地方另外画
        capsule(x, by - bh / 2 - cr, cr, hat, "#ffffff", true);
      } else if (x > xs + cr * 1.8) metab(x, by - bh / 2 - cr * 0.7, cr * 0.7, 1);
    }
    for (let k = 0; k < pileN; k++) { // 挤在工人面前的胶囊，叠两层
      const row2 = k % 2, col = Math.floor(k / 2);
      const x = xs - cr * 3.4 - col * cr * 3.1 - row2 * cr * 1.5, y = by - bh / 2 - cr - row2 * cr * 1.9 + Math.sin(time * 5 + k) * 1;
      capsule(x, y, cr, hat, "#ffffff", false);
    }
    if (s.gray < 0.5 && s.spd > 0.6) sparkles(xs, by - cs * 1.6, cs * 1.3, 3, 0.8, idx * 9);
    // 右边的血药浓度小表
    const gx = W * (n ? 0.92 : 0.925), g = gaugeBar(gx, y0 + rh * 0.18, by + bh * 0.5, Math.max(8, H * 0.022), s.lvl, idx === 0);
    if (idx === 0) text("血药浓度", n ? W - 6 : gx, y0 + rh * 0.18 - fsS() * 0.9, fsS() * 0.85, C.soft, n ? "right" : "center");
    return { x0, x1, by, xs, cs, ws, gauge: g, pileX: xs - cr * 3.4 - Math.max(0, pileN / 2 - 1) * cr * 3.1, pileY: by - cr * 3 };
  }
  // 访客：抑制剂按住工人，诱导剂站在旁边给工人打气
  function visitorDraw(v, R, cs) {
    const w = R.ws[0];
    if (!v.induce) {
      const x = w.x + cs * 2.3, y = w.y;
      chara(x, y, cs, { who: "drug", label: v.lab, hatColor: v.c1, hatColor2: "#ffffff", arms: "hug", eyes: "happy", mouth: "cat", dir: -1, tag: v.tag });
      return { x, y: y - cs * 3.1 };
    }
    const x = R.x0 + (R.xs - R.x0) * 0.35, y = w.y;
    chara(x, y, cs, { who: "drug", label: v.lab, hatColor: v.c1, hatColor2: "#ffffff", arms: "fist", eyes: "sparkle", mouth: "grin", dir: 1, tag: v.tag });
    return { x, y: y - cs * 3.1 };
  }
  function smokeDraw(x, y, s, a) {
    if (a < 0.03) return null;
    ctx.save(); ctx.globalAlpha *= a;
    const bob = Math.sin(time * 2) * s * 0.1;
    ctx.fillStyle = "#eeeaf0"; outline(1.4);
    ctx.beginPath();
    ctx.arc(x - s * 0.6, y + bob, s * 0.55, 0, Math.PI * 2); ctx.arc(x, y - s * 0.3 + bob, s * 0.7, 0, Math.PI * 2); ctx.arc(x + s * 0.6, y + bob, s * 0.55, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, y + s * 0.1 + bob, s * 1.05, s * 0.45, 0, 0, Math.PI * 2); ctx.fill();
    face(x, y - s * 0.05 + bob, s * 0.45, 1);
    text("香烟的烟", x, y + s * 0.95, fsS() * 0.85, C.soft);
    ctx.restore();
    return { x, y: y - s };
  }
  function view1(a) {
    const k = cur >= 1 && cur <= 4 ? cur : 1;
    const rows = rowsFor(k, lt);
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f0", "#fbeef0");
    Anima.bokeh(6, "#ffe0c8", 0.6, 30);
    const top = Anima.topSafe() + H * (rows.length > 3 ? 0.04 : 0.08), bottom = H * 0.97;
    const rh = (bottom - top) / rows.length;
    // 工厂里面：淡淡的墙和窗
    ctx.fillStyle = "rgba(240,165,143,0.08)"; ctx.fillRect(0, top - H * 0.02, W, H);
    const R = rows.map((r, i) => (RS[i] ? rowDraw(r, RS[i], top + i * rh, rh, i) : null));
    const n = N(), cs = R[0] ? R[0].cs : H * 0.04;
    const heads = [];
    rows.forEach((r, i) => {
      const s = RS[i]; if (!s || !R[i]) return;
      heads.push(r.vis ? visitorDraw(r.vis, R[i], R[i].cs) : null);
      if (r.smoke !== undefined) {
        const sa = s.smoke;
        const sm = smokeDraw(R[i].x0 + (R[i].xs - R[i].x0) * 0.3, R[i].by - R[i].cs * 3, R[i].cs * 1.35, sa);
        heads[i] = heads[i] || sm;
      }
      if (s.lvl > 0.72 && s.pile > 0.3) emote("sweat", R[i].ws[0].x - R[i].cs, R[i].ws[0].y - R[i].cs * 3.2, R[i].cs * 0.5);
    });
    const topC = Anima.topSafe() + H * 0.02;
    if (cur === 1) {
      callout("c1-3a4", lt > 3 && lt < 9, R[3].xs + cs, R[3].by - cs * 2, n ? W * 0.62 : R[3].xs + W * 0.2, R[3].by - H * 0.1, "3A4：最忙的流水线");
      callout("c1-met", lt > 8, R[0].x1 - W * 0.06, R[0].by - cs * 0.6, n ? W * 0.62 : R[0].x1 - W * 0.12, R[1].by - H * 0.08, "加工完：变成代谢物");
      say("c1-w", win(1, 6), R[0].ws[0].x, R[0].ws[0].y - cs * 3.1, R[0].xs + W * (n ? 0.2 : 0.14), R[0].by - H * 0.08, "来一个加工一个～", "say");
    }
    if (cur === 2 && R[0] && R[1]) {
      callout("c2-inh", lt > 2.2 && lt < (n ? 5.5 : 7), heads[0] ? heads[0].x : 0, heads[0] ? heads[0].y + cs * 2 : 0, n ? W * 0.45 : R[0].xs + W * 0.2, R[0].by - H * 0.2, "抑制剂：按住 1A2 的工人");
      callout("c2-lvl", lt > 5, R[0].gauge.x - W * 0.01, R[0].gauge.y, n ? W * 0.64 : W * 0.72, R[1].by + H * 0.01, "氯氮平在血里越积越多");
      say("c2-pile", n ? win(5.8, 8.4) : win(3, 8), R[0].pileX, R[0].pileY, n ? W * 0.28 : R[0].x0 + W * 0.08, R[0].by - H * 0.22, "排不上队啦～", "say");
      say("c2-par", lt > 8.5, heads[1] ? heads[1].x : 0, heads[1] ? heads[1].y : 0, n ? W * 0.3 : R[1].x0 + W * 0.12, R[1].by - H * 0.26, "氟西汀和我，都会拖慢 2D6～", "say");
    }
    if (cur === 3 && R[0] && R[1]) {
      callout("c3-ind", lt > 2 && lt < 5.5, R[0].xs + cs * 2, R[0].by - cs * 1.5, n ? W * 0.62 : R[0].xs + W * 0.16, R[0].by + H * 0.05, "诱导剂：给 3A4 加派工人");
      callout("c3-smoke", lt > 5.5 && lt < 8.5, heads[1] ? heads[1].x : 0, heads[1] ? heads[1].y + cs * 1.5 : 0, n ? W * 0.62 : R[1].xs + W * 0.16, R[1].by - H * 0.26, "吸烟：诱导 1A2，工人变多");
      callout("c3-quit", lt > (n ? 10.9 : 9), R[1].gauge.x - W * 0.01, R[1].gauge.y, n ? W * 0.55 : W * 0.68, n ? R[1].by + H * 0.1 : R[1].by - H * 0.26, "戒烟后：氯氮平浓度回升");
      say("c3-cbz", win(1.6, 5), heads[0] ? heads[0].x : 0, heads[0] ? heads[0].y : 0, n ? W * 0.5 : R[0].x0 + W * 0.02, n ? R[0].by - H * 0.3 : R[0].by - H * 0.22, n ? "加油！快一点！" : "大家加油，加工快一点！", "shout");
      say("c3-w", n ? win(8.8, 10.8) : lt > 9.5, R[1].ws[0].x, R[1].ws[0].y - cs * 3.1, n ? W * 0.32 : R[1].xs - W * 0.2, R[1].by - H * 0.22, "多出来的同事下班啦～", "say");
    }
    if (cur === 4) {
      rows.forEach((r, i) => { if (R[i]) sfx(r.who, W * (n ? 0.1 : 0.085), R[i].by - R[i].cs * 3.3, Math.min(H * 0.05, R[i].cs * 1.1), i === 0 ? C.skyDeep : (i === 2 ? C.bad : C.mintDeep), -0.1, 0.9); });
      callout("c4-slow", lt > (n ? 4.2 : 1.5) && lt < 7, R[0].gauge.x - W * 0.01, R[0].gauge.y, n ? W * 0.6 : W * 0.66, R[0].by - H * 0.2, "药留得久：副作用多");
      callout("c4-fast", lt > 7, R[2].gauge.x - W * 0.01, R[2].gauge.y, n ? W * 0.6 : W * 0.66, R[2].by - H * 0.2, "药走得快：可能不起效");
      say("c4-z", n ? win(1.2, 4.2) : win(2, 8), R[0].ws[0].x, R[0].ws[0].y - cs * 3.1, n ? W * 0.58 : R[0].xs - W * 0.18, R[0].by - H * 0.1, "我天生就慢一点…", "think");
    }
    ctx.restore();
  }

  // ================= 第 6 幕：告诉医生你的一切 =================
  function juice(x, y, s) {
    rrect(x - s * 0.5, y - s * 1.4, s, s * 1.4, s * 0.15); ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fill(); outline(1.4); ctx.stroke();
    rrect(x - s * 0.44, y - s * 1.0, s * 0.88, s * 0.94, s * 0.1); ctx.fillStyle = "#ffb3a0"; ctx.fill();
    ctx.beginPath(); ctx.arc(x + s * 0.45, y - s * 1.35, s * 0.35, 0, Math.PI * 2); ctx.fillStyle = "#ffd0c0"; ctx.fill(); outline(1.2); ctx.stroke();
    ctx.strokeStyle = "#f28c7a"; ctx.lineWidth = 1;
    for (let k = 0; k < 6; k++) { const q = k * Math.PI / 3; ctx.beginPath(); ctx.moveTo(x + s * 0.45, y - s * 1.35); ctx.lineTo(x + s * 0.45 + Math.cos(q) * s * 0.3, y - s * 1.35 + Math.sin(q) * s * 0.3); ctx.stroke(); }
    face(x, y - s * 0.5, s * 0.3, 1, false);
  }
  function bottle(x, y, s) {
    rrect(x - s * 0.45, y - s * 1.3, s * 0.9, s * 1.3, s * 0.18); ctx.fillStyle = "#d8f0d8"; ctx.fill(); outline(1.4); ctx.stroke();
    rrect(x - s * 0.3, y - s * 1.55, s * 0.6, s * 0.28, s * 0.08); ctx.fillStyle = "#9fd0a8"; ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#ffe36e";
    for (let k = 0; k < 5; k++) { const q = k * Math.PI * 2 / 5 - Math.PI / 2; ctx.beginPath(); ctx.arc(x + Math.cos(q) * s * 0.18, y - s * 0.7 + Math.sin(q) * s * 0.18, s * 0.12, 0, Math.PI * 2); ctx.fill(); }
    ctx.beginPath(); ctx.arc(x, y - s * 0.7, s * 0.08, 0, Math.PI * 2); ctx.fillStyle = "#f2a53a"; ctx.fill();
  }
  function cig(x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(-0.15);
    rrect(-s * 0.9, -s * 0.14, s * 1.8, s * 0.28, s * 0.05); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.3); ctx.stroke();
    rrect(-s * 0.9, -s * 0.14, s * 0.5, s * 0.28, s * 0.05); ctx.fillStyle = "#f2c28a"; ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#ff8a5c"; ctx.fillRect(s * 0.82, -s * 0.12, s * 0.08, s * 0.24);
    ctx.restore();
    for (let k = 0; k < 3; k++) {
      const t = (time * 0.4 + k / 3) % 1;
      ctx.save(); ctx.globalAlpha *= (1 - t) * 0.7;
      ctx.beginPath(); ctx.arc(x + s * 0.9 + Math.sin(t * 6) * s * 0.1, y - s * 0.3 - t * s * 1.2, s * (0.08 + t * 0.12), 0, Math.PI * 2); ctx.strokeStyle = C.soft; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.restore();
    }
  }
  function view2(a) {
    const L = cur === 5 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf2", "#fdeef3");
    Anima.bokeh(6, "#ffe0c8", 0.6, 60);
    Anima.petals(10, 0.6, 44);
    const n = N();
    // 桌子
    const ty = H * (n ? 0.6 : 0.58);
    rrect(W * 0.04, ty, W * (n ? 0.5 : 0.46), H * 0.05, 8); ctx.fillStyle = "#f3dcc4"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.fillStyle = "#e6c7a8"; ctx.fillRect(W * 0.08, ty + H * 0.05, W * 0.02, H * 0.26); ctx.fillRect(W * (n ? 0.48 : 0.44), ty + H * 0.05, W * 0.02, H * 0.26);
    const s = H * (n ? 0.12 : 0.12);
    const items = [
      { x: W * (n ? 0.12 : 0.11), t: 0.8, f: () => juice(W * (n ? 0.12 : 0.11), ty, s), lab: "西柚汁：让 3A4 变慢", col: C.bad },
      { x: W * (n ? 0.25 : 0.22), t: 2.8, f: () => bottle(W * (n ? 0.25 : 0.22), ty, s), lab: "贯叶连翘：让 3A4 变快", col: C.skyDeep },
      { x: W * (n ? 0.38 : 0.33), t: 4.8, f: () => cig(W * (n ? 0.38 : 0.33), ty - s * 0.2, s * 0.7), lab: "吸烟：让 1A2 变快", col: C.skyDeep },
      { x: W * (n ? 0.49 : 0.43), t: 0, f: () => { capsule(W * (n ? 0.47 : 0.42), ty - s * 0.3, s * 0.18, "#ff9aa9", "#ffffff", true); capsule(W * (n ? 0.5 : 0.45), ty - s * 0.3, s * 0.18, "#9fc9f2", "#ffffff", true); }, lab: null },
    ];
    items.forEach((it) => {
      const p = it.t ? clamp((L - it.t) * 2, 0, 1) : 1;
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p; ctx.translate(0, (1 - p) * -H * 0.05);
      it.f();
      ctx.restore();
    });
    // 小标签：一个接一个出现，排在桌子下面
    const fs = fsS() * 1.1;
    items.forEach((it, i) => {
      if (!it.lab) return;
      const p = clamp((L - it.t - 0.6) * 2, 0, 1);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      const yy = ty + H * 0.12 + i * fs * 2;
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(it.lab).width + fs * 1.2;
      rrect(W * 0.06, yy - fs * 0.8, tw, fs * 1.6, fs * 0.8); ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.3); ctx.stroke();
      ctx.fillStyle = it.col; ctx.beginPath(); ctx.arc(W * 0.06 + fs * 0.6, yy, fs * 0.22, 0, Math.PI * 2); ctx.fill();
      text(it.lab, W * 0.06 + fs * 1.0, yy + 1, fs, C.ink, "left");
      ctx.restore();
    });
    // 右边：病人把清单递给医生
    const gy = H * 0.93, cs = H * (n ? 0.075 : 0.075);
    const px = W * (n ? 0.66 : 0.64), dx = W * (n ? 0.88 : 0.86);
    const give = prog(7, 1.5);
    chara(px, gy, cs, { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#cfe6ff", style: "short", hat: "none", arms: give > 0.5 ? "point" : "hold", item: give > 0.5 ? null : "book", eyes: "happy", dir: 1 });
    chara(dx, gy, cs, { hair: "#5a4a6a", eye: "#3a2a4a", cloth: "#ffffff", style: "long", hat: "none", glasses: true, arms: give > 0.9 ? "hold" : "down", item: give > 0.9 ? "book" : null, eyes: "happy", mouth: "smile", dir: -1, tag: "医生 / 药师" });
    // 清单卡片
    const cw = W * (n ? 0.4 : 0.3), chh = H * 0.32, cx = W * (n ? 0.57 : 0.6), cy = Anima.topSafe() + H * 0.05;
    const cp = prog(6, 1);
    if (cp > 0) {
      ctx.save(); ctx.globalAlpha *= cp;
      rrect(cx, cy, cw, chh, 12); ctx.fillStyle = "#fffdf6"; ctx.fill(); outline(1.8); ctx.stroke();
      ctx.fillStyle = C.sakura; rrect(cx, cy, cw, chh * 0.2, 12); ctx.fill(); outline(1.8); ctx.stroke();
      const f2 = Math.min(fsS() * 1.15, chh * 0.12);
      text("我在吃什么", cx + cw / 2, cy + chh * 0.1, f2, C.ink);
      const li = ["所有处方药", "保健品、中草药", "吸烟、饮酒", "饮食（比如西柚）"];
      li.forEach((t, i) => {
        const on = L > 7.5 + i * 0.8;
        const yy = cy + chh * (0.32 + i * 0.18);
        ctx.beginPath(); ctx.rect(cx + cw * 0.08, yy - f2 * 0.45, f2 * 0.9, f2 * 0.9); ctx.fillStyle = "#ffffff"; ctx.fill(); outline(1.2); ctx.stroke();
        if (on) { ctx.strokeStyle = C.good; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(cx + cw * 0.08 + f2 * 0.15, yy); ctx.lineTo(cx + cw * 0.08 + f2 * 0.4, yy + f2 * 0.3); ctx.lineTo(cx + cw * 0.08 + f2 * 0.85, yy - f2 * 0.4); ctx.stroke(); }
        text(t, cx + cw * 0.08 + f2 * 1.4, yy + 1, f2 * 0.92, C.ink, "left");
      });
      ctx.restore();
    }
    if (L > 11) sparkles(px, gy - cs * 1.6, cs * 2, 4, 1, 3);
    say("c5-p", cur === 5 && win(1, 6), px, gy - cs * 3.1, n ? W * 0.72 : W * 0.66, H * 0.5, "这些也会影响我的药吗？", "think");
    say("c5-d", cur === 5 && lt > 8.5, dx, gy - cs * 3.1, n ? W * 0.72 : W * 0.76, H * (n ? 0.6 : 0.52), "都告诉我，我来帮你查查～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#d9826c", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) view0(S.v0);
    if (S.v1 > 0.02) view1(S.v1);
    if (S.v2 > 0.02) view2(S.v2);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e59a7a",
    titleCard: { lines: ["药吃下去以后", "先去肝脏工厂报到"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
