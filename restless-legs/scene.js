Anima.register("restless-legs", {
    "title": "腿里的小虫子：不宁腿综合征",
    "tag": "睡眠与觉醒",
    "headline": "一到晚上，腿就【停不下来】",
    "lede": "躺下休息时，腿里像有小虫在爬，非得动一动才舒服，一停下来又回来了。这是不宁腿综合征。它和夜里起伏的多巴胺系统、脑里的铁有关；治疗先查铁，再选合适的药，还要当心一种叫“症状加重”的陷阱。",
    "summary": "休息时出现、活动后减轻、夜里加重的想动冲动；脑内铁不足和多巴胺系统失调的假说；查铁补铁、排查药物、α2δ 配体，以及多巴胺激动剂的“症状加重”。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 不宁腿综合征",
    "footer": "夜里腿不舒服、总想动而影响睡眠，可以去神经内科或睡眠门诊；不要自行加减药物。",
    "canvasLabel": "腿里的小虫子在休息时冒出来、一动就散开，铁帮忙制造多巴胺，α2δ 配体让钙通道安静，以及多巴胺激动剂长期使用后症状提前的动画",
    "regions": ["striatum"],
    "parts": ["sleep"],
    "cast": ["DA", "Glu", "drug", "neuron"],
    "color": "#b7a6e6"
  }, () => {
  const V0 = { v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const view = (k) => { const o = Object.assign({}, V0); o[k] = 1; return o; };
  const CH = [
    Object.assign({ title: "想动的腿",
      pill: ["腿", "静止"], pill2: ["想动", "越来越强"],
      text: "不宁腿综合征的人，常在傍晚或躺下休息时，觉得腿里说不出的难受：像有小虫在爬、在拉扯、在冒泡。它不是疼，也不是抽筋，最突出的是一股忍不住想动的冲动。蹬一蹬腿、起来走一走，难受马上减轻；可一停下来，它又回来了，于是很难入睡。",
      fact: "不宁腿综合征：休息时出现、活动后减轻、傍晚和夜里加重的想动冲动" }, view("v0")),
    Object.assign({ title: "越到晚上越难受",
      pill: ["现在", "早上"], pill2: ["腿里", "很轻"],
      text: "这种难受有明显的时间规律：早上最轻，傍晚开始冒头，夜里最重。大脑里的多巴胺系统也跟着昼夜起伏，一般认为夜里处在低谷。一种解释是两件事叠在了一起：多巴胺系统本来就不太稳，到了它最弱的夜里，腿里的不适就压不住了。所以很多人白天好好的，一到晚上就坐立不安。",
      fact: "症状有昼夜节律：傍晚和夜里加重，可能和多巴胺系统的昼夜起伏有关" }, view("v1")),
    Object.assign({ title: "脑里的铁不够",
      pill: ["脑内铁", "充足"], pill2: ["多巴胺", "平稳"],
      text: "另一个线索是铁。铁要穿过血脑屏障这道门才能进入大脑。制造多巴胺的第一步靠一种酶，叫酪氨酸羟化酶，铁是它离不开的帮手。研究发现，不宁腿患者脑里的铁常常偏少，有时抽血查铁还不算低。帮手不够，多巴胺系统的工作就乱了套。这还是一个假说，具体怎样乱，科学家还在研究。",
      fact: "主要假说：脑内铁不足 → 多巴胺系统功能失调" }, view("v2")),
    Object.assign({ title: "先查铁，也查查在吃的药",
      pill: ["第一步", "查铁蛋白"], pill2: ["第二步", "查药单"],
      text: "所以医生通常先抽血查铁，尤其是反映铁储备的铁蛋白。偏低的话，口服或静脉补铁，把铁库补满，有些人的症状会明显减轻。还要看看正在吃的药：一些抗抑郁药、抗组胺药和多巴胺阻断剂可能让症状加重。酒精、咖啡因和睡眠不足也会添乱。先把这些理清，再考虑别的药。",
      fact: "先查铁蛋白、补足铁储备，再排查可能加重症状的药物" }, view("v3")),
    Object.assign({ title: "让感觉通路安静一点",
      pill: ["钙离子", "涌入"], pill2: ["兴奋信号", "很多"],
      text: "加巴喷丁、普瑞巴林这类 α2δ 配体，现在常被列为一线选择。神经末梢的钙通道上带着一个叫 α2δ 的小零件。药物抓住这个零件，钙离子进得少了，末梢放出的谷氨酸等兴奋信号也少了，过度活跃的感觉通路慢慢安静下来。它们还能改善睡眠，常见的副作用是头晕和犯困。",
      fact: "α2δ 配体减少钙内流和兴奋性递质释放，近年的指南常把它列为一线" }, view("v4")),
    Object.assign({ title: "激动剂和“症状加重”",
      pill: ["症状开始", "晚上 9 点"], pill2: ["范围", "双腿"],
      text: "普拉克索、罗匹尼罗这类多巴胺激动剂，直接坐进多巴胺的 D2、D3 门里帮忙，起效快。可长期使用，一部分人会出现“症状加重”：不适出现得越来越早，从夜里提前到下午，程度更重，还可能蔓延到手臂。这时自己加量只会越来越糟，要请医生调整方案。",
      fact: "多巴胺激动剂长期使用可能出现症状加重：提前、变重、扩散" }, view("v5")),
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { skinL: "#ffe3d3", bug: "#b39ae6", bugD: "#8f74d6", bed: "#dce8f7", blanket: "#f7c7d4", term: "#ffd6c4", post: "#ffe0ea" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = Object.assign({}, V0, { v0: 1 });
  const prog = (t0, d) => ease((lt - t0) / d);
  const nar = () => Anima.narrow;
  const fsz = (k) => Math.max(11, H * k) * Anima.UI;
  let urge = 0.2; // 想动的冲动，平滑变化
  function urgeTarget() {
    if (cur !== 0) return 0;
    const moving = (lt > 4 && lt < 6.8) || lt > 10.6;
    return moving ? 0.08 : 0.95;
  }
  function update(dt) { lt = Anima.sceneTime; const t = urgeTarget(); urge = lerp(urge, t, 1 - Math.exp(-dt * (t > urge ? 0.7 : 3))); }

  function plate(t, x, y, fs, fill) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = fill || "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
  }
  // 小虫子：三节圆滚滚的身体，一扭一扭（可爱，不吓人）
  function bug(x, y, s, ph, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    for (let k = 2; k >= 0; k--) {
      const bx = x - k * s * 0.8, by = y + Math.sin(ph - k * 1.2) * s * 0.35;
      ctx.beginPath(); ctx.arc(bx, by, s * (k ? 0.5 : 0.6), 0, Math.PI * 2); ctx.fillStyle = k ? C.bug : C.bugD; ctx.fill();
      ctx.strokeStyle = alpha(C.line, 0.6); ctx.lineWidth = 1; ctx.stroke();
    }
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x + s * 0.2, y + Math.sin(ph) * s * 0.35 - s * 0.12, s * 0.16, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  // 放大镜里的一段肢体和小虫子
  function limbZoom(cx, cy, r, n, calm, label, seed) {
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = "#fffaf6"; ctx.fill();
    ctx.clip();
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(-0.35);
    rrect(-r * 1.2, -r * 0.42, r * 2.4, r * 0.84, r * 0.4); ctx.fillStyle = C.skinL; ctx.fill(); outline(2); ctx.stroke();
    for (let k = 0; k < n; k++) {
      const u = (rnd(k + seed) + time * 0.05 * (0.5 + rnd(k + seed + 9))) % 1;
      bug(-r * 0.95 + u * r * 1.9, (rnd(k + seed + 3) - 0.5) * r * 0.5, r * 0.07, time * 6 + k, 1 - calm);
    }
    ctx.restore();
    ctx.restore();
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.strokeStyle = "#fff"; ctx.lineWidth = 6; ctx.stroke(); outline(2.4); ctx.stroke();
    if (label) plate(label, cx, cy + r + H * 0.04, fsz(0.026));
  }
  function meter(x, y, w, v, title, col) {
    const h = H * 0.03, fs = fsz(0.026);
    text(title, x - fs * 0.5, y + h / 2, fs, C.ink, "right");
    rrect(x, y, w, h, h / 2); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(x, y, Math.max(h, w * clamp(v, 0, 1)), h, h / 2); ctx.fillStyle = col || mix("#c9e6d6", "#b39ae6", v); ctx.fill(); outline(1.6); ctx.stroke();
  }

  // ---------- 第 1 幕：床上和放大镜 ----------
  function bedView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#ebe8fb", "#f6eef6");
    Anima.bokeh(6, "#d8d2f7", 0.7, 14);
    const walking = lt > 10.6, kick = lt > 4 && lt < 6.8;
    const bx = W * 0.05, bw = W * (n ? 0.52 : 0.5), by = H * (n ? 0.6 : 0.64), s = H * (n ? 0.05 : 0.06);
    // 床
    rrect(bx, by, bw, H * 0.1, 10); ctx.fillStyle = C.bed; ctx.fill(); outline(2); ctx.stroke();
    ctx.fillStyle = "#c7d7ee"; ctx.fillRect(bx + 6, by + H * 0.1, W * 0.012, H * 0.08); ctx.fillRect(bx + bw - 6 - W * 0.012, by + H * 0.1, W * 0.012, H * 0.08);
    rrect(bx + s * 0.2, by - H * 0.045, s * 2.2, H * 0.045, 12); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    const jig = kick ? Math.sin(time * 18) * H * 0.012 : 0;
    if (!walking) {
      ctx.save(); ctx.translate(bx + s * 3.6, by - s * 0.2); ctx.rotate(-Math.PI / 2);
      chara(0, 0, s, { who: "neuron", eyes: urge > 0.6 ? "open" : "sleepy", mouth: urge > 0.6 ? "wavy" : "smile", brow: urge > 0.6 ? "worry" : null, arms: "down", shadow: false });
      ctx.restore();
      // 被子（腿在被子下面，蹬腿时一抖一抖）
      ctx.beginPath(); ctx.moveTo(bx + s * 2.9, by + 2);
      ctx.quadraticCurveTo(bx + bw * 0.5, by - H * 0.1 + jig, bx + bw - W * 0.01, by - H * 0.03 - jig);
      ctx.lineTo(bx + bw - W * 0.01, by + 2); ctx.closePath(); ctx.fillStyle = C.blanket; ctx.fill(); outline(2); ctx.stroke();
      if (kick) sfx("蹬蹬！", bx + bw * 0.78, by - H * 0.13, H * 0.042, C.lavDeep, -0.1, 1);
      if (urge > 0.6) emote("sweat", bx + s * 1.8, by - s * 2.4, s * 0.6);
    } else {
      ctx.beginPath(); ctx.moveTo(bx + W * 0.1, by + 2); ctx.quadraticCurveTo(bx + bw * 0.5, by - H * 0.05, bx + bw - W * 0.01, by - H * 0.02); ctx.lineTo(bx + bw - W * 0.01, by + 2); ctx.closePath(); ctx.fillStyle = C.blanket; ctx.fill(); outline(2); ctx.stroke();
      const wx = W * (n ? 0.27 : 0.3) + Math.sin((lt - 10.6) * 0.8) * W * 0.12;
      chara(wx, H * 0.95, s * 0.9, { who: "neuron", walk: time * 8, eyes: "happy", mouth: "smile", arms: "down", dir: Math.cos((lt - 10.6) * 0.8) > 0 ? 1 : -1 });
    }
    // 窗外的月亮
    const mx = bx + bw * 0.8, my = top + H * 0.1;
    glow(mx, my, H * 0.06, "#c9c3ff", 0.6);
    ctx.beginPath(); ctx.arc(mx, my, H * 0.03, 0, Math.PI * 2); ctx.fillStyle = "#fff4c2"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(mx + H * 0.014, my - H * 0.008, H * 0.025, 0, Math.PI * 2); ctx.fillStyle = "#ece8fb"; ctx.fill();
    // 放大镜：小腿里面
    const zr = H * (n ? 0.2 : 0.22), zx = W - zr - W * 0.05, zy = top + zr + H * 0.06;
    ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.beginPath(); ctx.moveTo(bx + bw * 0.8, by - H * 0.05); ctx.lineTo(zx - zr * 0.7, zy + zr * 0.7); ctx.stroke(); ctx.restore();
    limbZoom(zx, zy, zr, 12, 1 - urge, "小腿里面", 3);
    meter(W * (n ? 0.62 : 0.66), H * 0.9, W * (n ? 0.32 : 0.28), urge, "想动", null);
    callout("notpain", lt > 1.2 && lt < 4.2, zx - zr * 0.3, zy + zr * 0.2, n ? W * 0.68 : W * 0.72, H * 0.72, "不是疼，也不是抽筋");
    callout("move", lt > 4.6 && lt < 8.5, zx, zy + zr * 0.5, n ? W * 0.68 : W * 0.72, H * 0.72, "一动，就舒服一些");
    say("bugs", lt > 1.5 && lt < 4.2, bx + s * 1.3, by - s * 2.4, n ? W * 0.3 : W * 0.3, top + H * 0.08, "腿里像有小虫在爬……", "think");
    say("again", lt > 8.5 && lt < 10.6, bx + s * 1.3, by - s * 2.4, n ? W * 0.3 : W * 0.3, top + H * 0.08, "一停下来，又来了！", "think");
    ctx.restore();
  }

  // ---------- 第 2 幕：一天里的两条曲线 ----------
  const symC = (u) => clamp(0.08 + 0.85 * Math.pow(Math.max(0, Math.sin((u - 0.25) * Math.PI / 0.85)), 2) * (u > 0.33 ? 1 : 0.3), 0, 1);
  const daC = (u) => 0.55 + 0.3 * Math.cos((u - 0.25) * Math.PI * 2);
  function chartView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    const u = clamp(lt / 12.5, 0, 1); // 早上 6 点 → 第二天早上 6 点
    const night = u > 0.55 && u < 0.97;
    Anima.wash(night ? "#e7e4fa" : "#f4f9ff", "#fdf1f3");
    const gx = W * (n ? 0.08 : 0.1), gw = W * (n ? 0.84 : 0.56), gy = top + H * 0.1, gh = H * 0.55;
    rrect(gx, gy, gw, gh, 16); ctx.fillStyle = "rgba(255,255,255,0.82)"; ctx.fill(); outline(1.8); ctx.stroke();
    // 夜里的底色
    ctx.save(); rrect(gx, gy, gw, gh, 16); ctx.clip(); ctx.fillStyle = alpha("#c9c3ff", 0.25); ctx.fillRect(gx + gw * 0.55, gy, gw * 0.42, gh); ctx.restore();
    const fs = fsz(0.024);
    [["早上", 0.02], ["中午", 0.25], ["傍晚", 0.5], ["夜里", 0.72]].forEach((p) => text(p[0], gx + gw * (p[1] + 0.06), gy + gh + fs * 1.1, fs, C.soft));
    const px = (v) => gx + gw * (0.03 + 0.94 * v), py = (v) => gy + gh * (0.9 - 0.78 * v);
    const curve = (f, col, upto, dash) => {
      ctx.save(); if (dash) ctx.setLineDash([7, 6]);
      ctx.strokeStyle = col; ctx.lineWidth = Math.max(2.5, H * 0.009); ctx.lineJoin = "round";
      ctx.beginPath(); for (let i = 0; i <= 80 * upto; i++) { const v = i / 80; if (i) ctx.lineTo(px(v), py(f(v))); else ctx.moveTo(px(v), py(f(v))); } ctx.stroke(); ctx.restore();
    };
    curve(daC, "#ff9a52", u, true);
    curve(symC, C.bugD, u, false);
    const cx = px(u);
    ctx.save(); outline(1.2); ctx.setLineDash([2, 4]); ctx.beginPath(); ctx.moveTo(cx, gy + 6); ctx.lineTo(cx, gy + gh - 6); ctx.stroke(); ctx.restore();
    ctx.beginPath(); ctx.arc(cx, py(symC(u)), H * 0.012, 0, Math.PI * 2); ctx.fillStyle = C.bugD; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, py(daC(u)), H * 0.012, 0, Math.PI * 2); ctx.fillStyle = "#ff9a52"; ctx.fill(); outline(1.4); ctx.stroke();
    // 图例
    const ly = gy + gh + fs * 2.9;
    ctx.fillStyle = C.bugD; ctx.fillRect(gx, ly - 2, W * 0.03, 4); text("腿里难受", gx + W * 0.04, ly, fs, C.ink, "left");
    ctx.fillStyle = "#ff9a52"; ctx.fillRect(gx + gw * 0.5, ly - 2, W * 0.03, 4); text("多巴胺系统", gx + gw * 0.5 + W * 0.04, ly, fs, C.ink, "left");
    // 右边：此刻的腿和多巴胺快递员
    const zr = H * (n ? 0.1 : 0.15);
    const zx = n ? W * 0.78 : W * 0.8, zy = n ? H * 0.9 - zr * 0.2 : gy + zr + H * 0.02;
    if (!n) {
      limbZoom(zx, zy, zr, Math.round(1 + symC(u) * 10), 0, "此刻的腿", 7);
      const nd = Math.round(1 + daC(u) * 4), dy = gy + gh * 0.95;
      for (let k = 0; k < 5; k++) chara(zx - zr + k * zr * 0.5, dy, H * 0.03, { who: "DA", alpha: k < nd ? 1 : 0.15, eyes: k < nd ? "happy" : "sleepy", shadow: false });
      text("多巴胺快递员", zx, dy + H * 0.05, fs, C.ink);
    }
    callout("eve", u > 0.62 && lt < 11.5, px(0.78), py(symC(0.78)), n ? W * 0.55 : W * 0.4, gy + gh * 0.12, "傍晚到夜里最重");
    callout("low", u > 0.72, px(0.75), py(daC(0.75)), n ? W * 0.45 : W * 0.35, gy + gh * 0.75, "多巴胺系统夜里走低");
    say("morning", lt > 0.4 && lt < 3.2, px(0.12), py(symC(0.12)), n ? W * 0.35 : W * 0.3, gy + gh * 0.3, "上午几乎没感觉～", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：铁 → 多巴胺工坊 ----------
  function iron(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#d9a07a"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.6)"; ctx.beginPath(); ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.3, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  function ironView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff4ef", "#f7effb");
    const low = prog(6, 1.5); // 第 6 秒起：铁变少
    // 血管
    const vy = top + H * 0.05, vh = H * 0.13;
    rrect(-10, vy, W + 20, vh, vh / 2); ctx.fillStyle = "#ffd3d6"; ctx.fill(); outline(2); ctx.stroke();
    text("血液", W * 0.06, vy + vh / 2, fsz(0.026), C.ink, "left");
    // 屏障：一道带门的墙
    const wy = vy + vh + H * 0.05, gateX = W * 0.5;
    ctx.fillStyle = "#e9dccf"; ctx.fillRect(0, wy, W, H * 0.04); outline(1.6); ctx.strokeRect(-2, wy, W + 4, H * 0.04);
    rrect(gateX - H * 0.05, wy - H * 0.01, H * 0.1, H * 0.06, 6); ctx.fillStyle = "#fff6e0"; ctx.fill(); outline(1.6); ctx.stroke();
    // 血管里的铁一直在流；能穿过门的越来越少
    for (let k = 0; k < 10; k++) {
      const p = (time * 0.08 + k / 10) % 1, x = p * (W + 40) - 20;
      iron(x, vy + vh * (0.35 + 0.3 * rnd(k)), H * 0.017, k % 2 === 0 || low < 0.5 ? 1 : 0.25);
    }
    const every = low > 0.5 ? 2.6 : 0.9;
    for (let k = 0; k < 3; k++) {
      const t = ((time + k * every / 3) % every) / every;
      const pass = low > 0.5 ? k === 0 : true;
      if (!pass) continue;
      iron(gateX, lerp(vy + vh * 0.6, H * 0.52, t), H * 0.017, Math.sin(t * Math.PI));
    }
    // 多巴胺工坊
    const fx = n ? W * 0.3 : W * 0.34, fy = H * 0.88, s = H * 0.05;
    rrect(fx - W * (n ? 0.26 : 0.2), fy - H * 0.32, W * (n ? 0.52 : 0.4), H * 0.34, 14); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1.8); ctx.stroke();
    plate("多巴胺工坊", fx, fy - H * 0.32, fsz(0.026), "#ffe7c7");
    const toolOK = low < 0.5 || Math.sin(time * 1.3) > 0.6;
    chara(fx - W * (n ? 0.14 : 0.1), fy - H * 0.02, s, { who: "neuron", hair: "#8fb7a0", cloth: "#dff0e4", arms: toolOK ? "hold" : "down", item: toolOK ? "key" : null, eyes: toolOK ? "happy" : "open", mouth: toolOK ? "smile" : "wavy", brow: toolOK ? null : "worry", tag: n ? "酶" : "酪氨酸羟化酶" });
    if (!toolOK) emote("?", fx - W * (n ? 0.14 : 0.1) + s, fy - H * 0.02 - s * 3.3, s * 0.6);
    iron(fx - W * (n ? 0.14 : 0.1) + s * 1.2, fy - H * 0.02 - s * 1.2, H * 0.016, toolOK ? 1 : 0);
    // 做出来的多巴胺快递员
    const made = low < 0.5 ? 5 : 2;
    for (let k = 0; k < 5; k++) {
      const p = ((time * 0.3 + k / 5) % 1);
      const on = k < made ? 1 : 0;
      if (!on) continue;
      chara(fx - W * 0.03 + p * W * (n ? 0.26 : 0.2), fy - H * 0.02, H * 0.034, { who: "DA", walk: time * 9 + k, alpha: Math.sin(p * Math.PI), eyes: "happy", shadow: false });
    }
    // 右边：多巴胺信号计
    const mx = W * (n ? 0.8 : 0.78), my = H * (n ? 0.66 : 0.6);
    const wob = low * Math.sin(time * 3.1) * 0.35 + low * Math.sin(time * 7.3) * 0.15;
    ctx.save(); ctx.translate(mx, my);
    ctx.beginPath(); ctx.arc(0, 0, H * 0.12, Math.PI, 0); ctx.fillStyle = "#fff"; ctx.fill(); outline(2); ctx.stroke();
    ctx.rotate(-Math.PI / 2 + wob * 1.6);
    ctx.strokeStyle = low > 0.5 ? C.bad : C.good; ctx.lineWidth = Math.max(3, H * 0.009); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -H * 0.1); ctx.stroke();
    ctx.restore();
    plate("多巴胺系统", mx, my + H * 0.05, fsz(0.026));
    if (low > 0.5) limbZoom(mx, H * 0.83, H * 0.08, 5, 0, null, 11);
    callout("bbb", lt > 1 && lt < 5.5, gateX + H * 0.05, wy + H * 0.02, n ? W * 0.72 : W * 0.7, wy + H * 0.1, "血脑屏障：铁进脑的门");
    callout("th", lt > 3 && lt < 6.5, fx - W * (n ? 0.14 : 0.1) + s * 1.2, fy - H * 0.02 - s * 1.2, n ? W * 0.62 : W * 0.3, n ? H * 0.9 : H * 0.44, "铁：造多巴胺的帮手");
    callout("mess", lt > 8, mx, my - H * 0.06, n ? W * 0.62 : W * 0.72, n ? H * 0.47 : H * 0.38, "铁不够 → 多巴胺系统失调");
    say("lack", lt > 7, fx - W * (n ? 0.14 : 0.1), fy - H * 0.02 - s * 3.3, n ? W * 0.4 : W * 0.3, n ? H * 0.66 : H * 0.44, "工具不够用了……", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：查铁、查药单 ----------
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    const fs = fsz(0.03);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function checkView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7f2", "#f3effd");
    const gap = W * 0.03, y0 = top + H * 0.07, ch = H * 0.93 - y0, cw = (W - gap * 3) / 2;
    const L = { x: gap, y: y0, w: cw, h: ch }, R = { x: gap * 2 + cw, y: y0, w: cw, h: ch };
    card(L.x, L.y, L.w, L.h, "查铁、补铁", "#ffe0cc");
    card(R.x, R.y, R.w, R.h, "查查在吃的药", "#e4e0ff");
    // 左：铁库（罐子）从低到满，放大镜里的小虫变少
    const fill = 0.2 + 0.7 * prog(3, 4);
    const jx = L.x + L.w * 0.3, jw = L.w * 0.26, jt = L.y + L.h * 0.2, jb = L.y + L.h * 0.72;
    ctx.save(); rrect(jx - jw / 2, jt, jw, jb - jt, jw * 0.2); ctx.clip();
    ctx.fillStyle = "#e9b48f"; ctx.fillRect(jx - jw / 2, jb - (jb - jt) * fill, jw, jb - jt);
    for (let k = 0; k < 6; k++) iron(jx - jw * 0.25 + (k % 3) * jw * 0.25, jb - (jb - jt) * fill * (0.2 + 0.3 * Math.floor(k / 3)), H * 0.014, fill > 0.3 + k * 0.1 ? 1 : 0);
    ctx.restore();
    rrect(jx - jw / 2, jt, jw, jb - jt, jw * 0.2); outline(2); ctx.stroke();
    plate("铁储备", jx, jb + H * 0.045, fsz(0.026));
    if (lt > 2.5 && lt < 7.5) { // 补铁：一颗颗铁落进罐子
      const t = ((lt - 2.5) * 0.9) % 1;
      iron(jx, lerp(jt - H * 0.08, jt + (jb - jt) * (1 - fill), t), H * 0.018, Math.sin(t * Math.PI));
    }
    limbZoom(L.x + L.w * 0.75, L.y + L.h * 0.42, Math.min(L.w * 0.18, H * 0.11), Math.round(9 * (1 - prog(4, 4))) + 1, 0, null, 21);
    // 右：三位药物访客让小虫变多
    const zx = R.x + R.w * 0.5, zy = R.y + R.h * 0.35, zr = Math.min(R.w * 0.2, H * 0.11);
    const nb = 3 + Math.round(8 * prog(2, 6));
    limbZoom(zx, zy, zr, nb, 0, null, 31);
    const tags = n ? ["抗抑郁药", "抗组胺药", "DA 阻断剂"] : ["部分抗抑郁药", "抗组胺药", "多巴胺阻断剂"];
    const cols = ["#8fdcc4", "#b98ad8", "#ff9a52"];
    for (let k = 0; k < 3; k++) {
      const p = prog(1.5 + k * 1.5, 1.2);
      if (p <= 0) continue;
      const x = R.x + R.w * (0.2 + k * 0.3), y = R.y + R.h * (k === 1 ? 0.9 : 0.78);
      chara(x, lerp(y + H * 0.1, y, p), H * 0.04, { who: "drug", tag: tags[k], hatColor: cols[k], alpha: p, eyes: "open", arms: "point", dir: k < 1 ? 1 : -1, shadow: false });
    }
    callout("ferritin", lt > 1 && lt < 6, jx + jw * 0.5, jt + (jb - jt) * 0.8, L.x + L.w * 0.62, L.y + L.h * 0.84, "铁蛋白：看铁储备");
    callout("worse", lt > 6.5 && lt < 9.6, zx + zr * 0.6, zy + zr * 0.5, R.x + R.w * 0.55, R.y + R.h * 0.6, "有些药会让小虫变多");
    say("tell", lt > 9.8, R.x + R.w * 0.5, R.y + R.h * 0.7, R.x + R.w * 0.5, zy, "把正在吃的药都告诉医生", "box");
    ctx.restore();
  }

  // ---------- 第 5 幕：α2δ 和钙通道 ----------
  function chanView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, "#fff4ef"); bg.addColorStop(1, "#fff0f4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.8, 50);
    const cx = W * 0.45, tw = Math.min(W * 0.7, H * 1.2), th = H * 0.46, post = H * 0.8;
    Anima.postMembrane(post, C.post, {});
    const T = Anima.terminal(cx, 0, tw, th, C.term);
    const drug = prog(5, 1.5);
    plate(n ? "感觉神经末梢" : "感觉通路的神经末梢", cx + tw * 0.08, th * 0.55, fsz(0.028), "#fff4ec");
    text("下一站神经元", W * 0.04, post + H * 0.1, fsz(0.026), C.soft, "left");
    // 钙通道（带 α2δ 小零件），在末梢膜上
    const chX = cx - tw * 0.3, chY = th * 0.93;
    ctx.save(); ctx.translate(chX, chY); ctx.rotate(0.55);
    Anima.receptor(0, 0, H * 0.055, "#a9d8ee", 1 - drug * 0.7, { dir: -1, shape: "square" });
    ctx.restore();
    const ax = chX - H * 0.07, ay = chY + H * 0.04;
    ctx.beginPath(); ctx.ellipse(ax, ay, H * 0.032, H * 0.022, 0.5, 0, Math.PI * 2); ctx.fillStyle = "#ffe08a"; ctx.fill(); outline(1.4); ctx.stroke();
    // 钙离子：药物抓住 α2δ 后进得少
    const nCa = drug > 0.5 ? 2 : 6;
    for (let k = 0; k < nCa; k++) {
      const t = (time * 0.6 + k / nCa) % 1;
      ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI);
      Anima.ion(lerp(chX - H * 0.12, chX + H * 0.05, t) + (rnd(k) - 0.5) * H * 0.04, lerp(chY + H * 0.12, chY - H * 0.1, t), H * 0.02, "Ca", "#c8f0d8");
      ctx.restore();
    }
    // 谷氨酸快递员：没药时一大群涌出去
    const nGlu = drug > 0.5 ? 2 : 6;
    for (let k = 0; k < nGlu; k++) {
      const t = (time * 0.35 + k / nGlu) % 1;
      const x = cx - tw * 0.1 + k * tw * 0.08, y = lerp(th + H * 0.02, post - H * 0.02, t);
      chara(x, y, H * 0.026, { who: "Glu", alpha: Math.sin(t * Math.PI), eyes: drug > 0.5 ? "happy" : "wide", mouth: drug > 0.5 ? "smile" : "open", arms: drug > 0.5 ? "down" : "up", shadow: false });
    }
    // 下游的感觉神经：信号强度（火花多少）
    const spk = drug > 0.5 ? 0.25 : 1;
    for (let k = 0; k < 3; k++) if (k < 3 * spk + 0.5) Anima.spark([[W * 0.1, post + H * 0.08], [W * 0.6, post + H * 0.1], [W + 20, post + H * 0.12]], (time * 0.7 + k / 3) % 1, H * 0.02, C.gold);
    face(W * 0.86, post + H * 0.1, H * 0.05, drug > 0.5 ? 1 : -1);
    // 药物访客走过来抓住 α2δ
    if (lt > 3.2) {
      const q = prog(3.2, 1.8);
      const dx = lerp(-H * 0.1, ax - H * 0.05, q), dy = lerp(post - H * 0.02, ay + H * 0.14, q);
      chara(dx, dy, H * 0.042, { who: "drug", tag: n ? "α2δ 配体" : "加巴喷丁 / 普瑞巴林", hatColor: "#ffc94d", walk: q < 1 ? time * 9 : null, arms: q >= 1 ? "up" : "down", eyes: "happy", mouth: "smile", shadow: false });
    }
    callout("a2d", lt > 0.8 && lt < 5, ax, ay, n ? W * 0.28 : W * 0.2, th + H * 0.22, "α2δ：钙通道上的小零件");
    callout("less", lt > 7.5, chX + H * 0.04, chY - H * 0.05, n ? W * 0.72 : W * 0.8, th * 0.35, "钙进得少，兴奋信号变少");
    say("loud", lt > 1 && lt < 5, W * 0.86, post + H * 0.06, n ? W * 0.72 : W * 0.82, post - H * 0.12, "信号好吵！", "shout");
    say("calm", lt > 8.5, W * 0.86, post + H * 0.06, n ? W * 0.72 : W * 0.82, post - H * 0.12, "安静多了～", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：激动剂和症状加重 ----------
  const startHour = () => 21 - 6 * prog(5, 6);
  function augView(a) {
    const n = nar(), top = Anima.topSafe();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff5ef", "#f1ecfb");
    // 左：D2/D3 门上坐着激动剂
    const lw = n ? W * 0.5 : W * 0.46, my = H * 0.6, rs = H * 0.055;
    ctx.fillStyle = "#ffe0ea"; ctx.fillRect(0, my, lw, H - my); outline(2); ctx.beginPath(); ctx.moveTo(0, my); ctx.lineTo(lw, my); ctx.stroke();
    const xs = n ? [lw * 0.2, lw * 0.74] : [lw * 0.25, lw * 0.6];
    xs.forEach((x, i) => {
      const r = Anima.receptor(x, my, rs, "#ffc59e", 0.8, { label: i ? "D3" : "D2" });
      plate(i === 0 ? "普拉克索" : "罗匹尼罗", x, my + H * 0.12, fsz(0.026));
      const q = prog(0.6 + i * 0.4, 1.4);
      chara(x, lerp(top + H * 0.05, r.site.y, q), H * 0.04, { who: "drug", hatColor: "#ff9a52", eyes: "happy", arms: "up", alpha: q, shadow: false });
    });
    // 右：一年年过去，症状开始的时刻越来越早，范围扩大
    const rx0 = n ? W * 0.52 : W * 0.5, rw = W - rx0 - W * 0.03;
    const cr = Math.min(H * (n ? 0.12 : 0.14), rw * 0.3), cx = rx0 + rw * 0.3, cy = top + cr + H * 0.1;
    ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fillStyle = "#fffdf8"; ctx.fill(); outline(2.2); ctx.stroke();
    const ang = (h) => -Math.PI / 2 + h / 24 * Math.PI * 2, sh = startHour();
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, cr, ang(sh), ang(26)); ctx.closePath(); ctx.fillStyle = alpha(C.bug, 0.5); ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); outline(2.2); ctx.stroke();
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(3, H * 0.009); ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(ang(sh)) * cr * 0.9, cy + Math.sin(ang(sh)) * cr * 0.9); ctx.stroke();
    plate("症状开始", cx, cy + cr + H * 0.045, fsz(0.026));
    [[0, "#fff4c2"], [12, "#ffd96b"]].forEach((m) => { const q = ang(m[0]); ctx.beginPath(); ctx.arc(cx + Math.cos(q) * cr * 0.8, cy + Math.sin(q) * cr * 0.8, cr * 0.09, 0, Math.PI * 2); ctx.fillStyle = m[1]; ctx.fill(); outline(1.2); ctx.stroke(); });
    text("夜", cx, cy - cr * 0.55, fsz(0.022), C.soft); text("午", cx, cy + cr * 0.55, fsz(0.022), C.soft);
    // 日历：翻页
    const yrs = lt < 5 ? "刚开始" : lt < 8 ? "几个月后" : "更久以后";
    plate(yrs, rx0 + rw * 0.8, cy, fsz(0.028), "#fff1b8");
    // 手臂和腿的放大镜
    const zr = Math.min(H * 0.09, rw * 0.2);
    const early = lt < 4.5, worse = prog(6, 4);
    const zy = H * 0.78;
    limbZoom(rx0 + rw * 0.28, zy, zr, early ? 1 : Math.round(3 + 8 * worse), 0, "腿", 41);
    const armA = prog(8.5, 1.5);
    if (armA > 0) { ctx.save(); ctx.globalAlpha *= armA; limbZoom(rx0 + rw * 0.72, zy, zr, 6, 0, "手臂", 51); ctx.restore(); }
    callout("start", lt > 5.5 && lt < 9.8, cx + Math.cos(ang(sh)) * cr * 0.8, cy + Math.sin(ang(sh)) * cr * 0.8, n ? W * 0.25 : W * 0.3, top + H * (n ? 0.1 : 0.2), "越来越早：夜里 → 下午");
    callout("spread", lt > 9.3, rx0 + rw * 0.72 - zr * 0.7, zy, W * 0.24, H * 0.82, "变重，还蔓延到手臂");
    say("good", lt > 1.8 && lt < 5, xs[0], my - rs * 3.4, n ? W * 0.25 : W * 0.23, top + H * 0.22, "腿安静了～", "say");
    say("doc", lt > 10.8, W / 2, H * 0.9, W * 0.25, top + H * 0.08, "别自己加量，找医生调整", "box");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    let v1 = c.pill[1], v2 = c.pill2[1];
    if (cur === 0) { const mv = (lt > 4 && lt < 6.8) || lt > 10.6; v1 = mv ? "动起来" : "静止"; v2 = urge > 0.5 ? "很强" : "减轻"; }
    if (cur === 1) { const u = clamp(lt / 12.5, 0, 1); v1 = u < 0.2 ? "早上" : u < 0.4 ? "中午" : u < 0.6 ? "傍晚" : u < 0.95 ? "夜里" : "凌晨"; v2 = symC(u) > 0.6 ? "最难受" : symC(u) > 0.3 ? "冒头" : "很轻"; }
    if (cur === 2) { v1 = lt > 6.5 ? "不足" : "充足"; v2 = lt > 7 ? "失调" : "平稳"; }
    if (cur === 4) { v1 = lt > 5.8 ? "减少" : "涌入"; v2 = lt > 6.5 ? "减少" : "很多"; }
    if (cur === 5) { const h = Math.round(startHour()); v1 = (h >= 18 ? "晚上 " : "下午 ") + (h - 12) + " 点"; v2 = lt > 9 ? "扩到手臂" : "双腿"; }
    pill(14, 12, c.pill[0], v1, "#8f74d6", false);
    pill(W - 14, 12, c.pill2[0], v2, "#e07a9a", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) bedView(S.v0);
    if (S.v1 > 0.02) chartView(S.v1);
    if (S.v2 > 0.02) ironView(S.v2);
    if (S.v3 > 0.02) checkView(S.v3);
    if (S.v4 > 0.02) chanView(S.v4);
    if (S.v5 > 0.02) augView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: DUR, accent: "#8f74d6",
    titleCard: { lines: ["腿里的", "小虫子"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
