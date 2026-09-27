Anima.register("muscarinic-antipsychotic", {
    "title": "不碰 D2 的抗精神病药",
    "tag": "精神病与抗精神病药",
    "headline": "不在门口挡人：【不碰 D2】的抗精神病药",
    "lede": "几十年来，抗精神病药几乎都要挡住多巴胺的 D2 门。新思路换了一位主角：乙酰胆碱的毒蕈碱型受体。占诺美林按下 M4 刹车，给多巴胺松油门；再配上一位只在身体里站岗的搭档曲司氯铵，把外周副作用挡在大脑门外。",
    "summary": "烟碱型和毒蕈碱型受体、遍布全身的 M 受体和抗胆碱副作用、占诺美林经 M4 间接减少多巴胺释放、和 D2 阻断的区别、M1 与认知、外周副作用，以及几乎不进大脑的曲司氯铵。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 毒蕈碱受体与新机制",
    "footer": "新药是否适合自己，请和医生商量；不要自行换药、加药或停药。",
    "canvasLabel": "乙酰胆碱的 M 受体遍布全身，药物访客在大脑里按下 M4 刹车、在身体里挡住 M 受体的动画",
    "regions": ["striatum", "midbrain"],
    "parts": ["psychosis"],
    "cast": ["ACh", "DA", "drug"],
    "color": "#f7b8d2"
  }, () => {
  const CH = [
    { title: "乙酰胆碱的两类门", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["烟碱型", "离子通道"], pill2: ["毒蕈碱型", "M1～M5"],
      text: "乙酰胆碱的门分两大类。烟碱型受体本身就是离子通道，钥匙一插门就开，离子冲进去，反应很快，尼古丁也能开这扇门。毒蕈碱型受体是 G 蛋白偶联受体，一共五种，M1 到 M5，开门以后交给 G 蛋白慢慢接力。两类门的名字，来自最早发现能打开它们的物质：烟碱和毒蕈碱。",
      fact: "乙酰胆碱受体分烟碱型（离子通道）和毒蕈碱型（M1～M5，G 蛋白偶联受体）" },
    { title: "M 门遍布全身", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["M 受体", "全身都有"], pill2: ["挡住", "抗胆碱"],
      text: "M 受体不只在大脑里，全身都有：眼睛、唾液腺、肠道、膀胱、汗腺……乙酰胆碱通过它们让眼睛对焦、口水分泌、肠子蠕动、膀胱排尿。很多老药会顺手挡住 M 受体，比如一些抗精神病药和三环类抗抑郁药，于是出现口干、便秘、视物模糊、排尿困难；老人还容易变得糊涂。",
      fact: "挡住 M 受体会带来抗胆碱副作用：口干、便秘、视物模糊、排尿困难、意识混乱" },
    { title: "M4：给多巴胺松油门", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["占诺美林", "激动 M4"], pill2: ["多巴胺", "少放一些"],
      text: "占诺美林走另一条路：它是 M1 和 M4 受体的激动剂。脑干里的胆碱能神经元平时用乙酰胆碱去催中脑的多巴胺神经元放电；它们身上的 M4 像一个刹车。占诺美林按下 M4，乙酰胆碱放得少了，多巴胺神经元慢下来，送到纹状体的多巴胺也少了。纹状体里还有别的 M4，也往同一个方向帮忙。",
      fact: "激动 M4 能减少对多巴胺神经元的推动，间接减少纹状体的多巴胺释放" },
    { title: "挡门，还是少送", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["D2", "不碰"], pill2: ["方式", "少送一些"],
      text: "两种办法都能让纹状体里过强的多巴胺信号降下来，方式却不同。D2 阻断药是在门口挡人：多巴胺还是很多，门却被占住，挡得太多就可能出现动作副作用和泌乳素升高。占诺美林是少送一些：D2 门没被占，照常收信。所以在研究中，它引起锥体外系反应和泌乳素升高的情况比较少。",
      fact: "占诺美林不阻断 D2，锥体外系反应和泌乳素升高相对少见" },
    { title: "M1：给皮层帮把手", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["M1", "皮层·海马"], pill2: ["认知", "研究中"],
      text: "占诺美林的另一个目标是 M1。M1 在大脑皮层和海马里很多，和学习、记忆关系密切。乙酰胆碱或占诺美林打开 M1，皮层神经元对重要的信号反应更灵敏，信号传得更清楚；有人认为，这也可能从皮层那头帮着调节多巴胺。它对思考和记忆到底有多少帮助，还需要更多研究确认。",
      fact: "M1 在皮层和海马很多，与学习记忆有关；激动 M1 能否改善认知仍在研究" },
    { title: "身体也收到了", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["外周", "M 被打开"], pill2: ["副作用", "恶心出汗"],
      text: "问题是，占诺美林不只进大脑，它在身体里也会打开 M 受体，正好和老药相反：口水变多、出汗、恶心、呕吐、拉肚子。早年的研究已经看到它能减轻精神病症状，却因为这些外周副作用太难受，一度被放下。大脑里要它，身体里不想要它，怎么办？",
      fact: "占诺美林单用时，外周 M 受体被激活，会引起恶心、呕吐、出汗、流口水等" },
    { title: "大脑门外的搭档", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["曲司氯铵", "只在外周"], pill2: ["大脑里", "照常起效"],
      text: "办法是配一个搭档：曲司氯铵。它是 M 受体拮抗剂，带着电荷，几乎穿不过血脑屏障，只在身体里挡住 M 受体，把恶心、出汗这些外周副作用压下去；大脑里的 M1、M4 仍交给占诺美林。第一种这样组合的药已在美国获批用于精神分裂症，国内情况请以最新信息为准。",
      fact: "曲司氯铵几乎不进大脑，只挡外周 M 受体，减少占诺美林的外周副作用" },
  ];
  const DUR = 13;
  const C = Object.assign({}, Anima.C, { m: "#f7b8d2", n: "#bfe3f5", d2: "#9fd0ee", term: "#ffd6c4", post: "#ffe8ee" });
  const { rnd, clamp, lerp, ease, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const nw = () => Anima.narrow || W / H < 1.45;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (Anima.narrow ? 1.08 : 1);
  const O = (a, b) => Object.assign({}, a, b);
  const XAN = { who: "drug", label: "", hatColor: "#8fdcc4", hatColor2: "#ffffff" };
  const TRO = { who: "drug", label: "", hatColor: "#ffb38a", hatColor2: "#ffffff" };
  const OLD = { who: "drug", label: "", hatColor: "#c9b8e8", hatColor2: "#ffffff" };
  const D2B = { who: "drug", label: "", hatColor: "#ff9aa9", hatColor2: "#ffffff" };

  // 第 3 幕的小模型：M4 刹车 → 乙酰胆碱 → 多巴胺神经元放电 → 纹状体多巴胺
  const M = { m4: 0, ach: 1, fire: 1, da: 1 };
  function update(dt) {
    lt = Anima.sceneTime;
    const k = 1 - Math.exp(-dt * 1.8);
    M.m4 = lerp(M.m4, cur === 2 && lt > 4 ? 1 : 0, k);
    M.ach = lerp(M.ach, 1 - 0.7 * M.m4, k);
    M.fire = lerp(M.fire, 0.25 + 0.75 * M.ach, k);
    M.da = lerp(M.da, M.fire, k);
  }

  // ---------- 小工具 ----------
  function tagBox(t, x, y, fs, bg, fg) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 0.9, h = fs * 1.45;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
    text(t, x, y + 1, fs, fg || C.ink);
  }
  function card(x, y, w, h, title, color) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 3;
    rrect(x, y, w, h, 14); ctx.fillStyle = "#fffdfb"; ctx.fill(); ctx.restore();
    outline(1.8); rrect(x, y, w, h, 14); ctx.stroke();
    if (!title) return;
    const fs = Math.min(fsz(0.028, 11), w * 0.1);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(title).width + fs * 1.3;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.4); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function bar(x, y0, y1, w, v, col, label, xmax) {
    rrect(x - w / 2, y0, w, y1 - y0, w / 2); ctx.fillStyle = "rgba(255,255,255,0.9)"; ctx.fill(); outline(1.4); ctx.stroke();
    const hh = (y1 - y0 - 4) * clamp(v, 0, 1);
    if (hh > 2) { rrect(x - w / 2 + 2, y1 - 2 - hh, w - 4, hh, Math.min((w - 4) / 2, hh / 2)); ctx.fillStyle = col; ctx.fill(); }
    if (label) {
      // 名字比柱子宽：左右夹在画面（或所在方框）里面，不出边
      const fs = fsz(0.022, 10);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const hw = ctx.measureText(label).width / 2 + 3;
      text(label, clamp(x, hw, (xmax || W) - hw), y0 - fs * 0.9, fs, C.ink);
    }
  }
  function soma(x, y, r, col, mood, label) {
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
    g.addColorStop(0, "#fffaf6"); g.addColorStop(1, col);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill(); outline(2); ctx.stroke();
    face(x, y + r * 0.15, r * 0.45, mood);
    if (label) tagBox(label, x, y + r + fsz(0.022, 10) * 1.1, fsz(0.022, 10), "#fff");
  }
  const bez = (a, c, b, u) => ({ x: (1 - u) * (1 - u) * a.x + 2 * (1 - u) * u * c.x + u * u * b.x, y: (1 - u) * (1 - u) * a.y + 2 * (1 - u) * u * c.y + u * u * b.y });
  function axon(a, c, b, col) {
    for (const w of [[H * 0.022, C.line], [H * 0.014, col]]) {
      ctx.strokeStyle = w[1]; ctx.lineWidth = w[0]; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo(c.x, c.y, b.x, b.y); ctx.stroke();
    }
  }

  // ---------- 画面 0：烟碱型 vs 毒蕈碱型 ----------
  function v0(a) {
    const n = nw(), top = Anima.topSafe() + H * 0.05, gap = W * 0.025, cw = (W - gap * 3) / 2, ch = H * 0.95 - top;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7fb", "#f4f8ff"); Anima.petals(6, 0.4, 3);
    const s = Math.min(H * 0.045, cw * 0.085);
    [0, 1].forEach((side) => {
      const x = gap + side * (cw + gap), mem = top + ch * 0.5, nic = side === 0;
      card(x, top, cw, ch, nic ? "烟碱型：离子通道，快" : "毒蕈碱型：G 蛋白，慢一些", nic ? C.n : C.m);
      ctx.save(); rrect(x, top, cw, ch, 14); ctx.clip();
      ctx.fillStyle = nic ? "#eef7fc" : "#fff0f6"; ctx.fillRect(x, mem, cw, ch);
      ctx.restore();
      outline(1.6); ctx.beginPath(); ctx.moveTo(x, mem); ctx.lineTo(x + cw, mem); ctx.stroke();
      if (nic) {
        const rx = x + cw * 0.38, cyc = (time * 0.6) % 1, open = lt > 1.5 && cyc < 0.6 ? 1 : 0;
        const r = Anima.receptor(rx, mem, s * 1.3, C.n, open, { shape: "tri", label: "N" });
        chara(rx, r.site.y, s, { who: "ACh", eyes: open ? "happy" : "open", arms: open ? "up" : "hold", item: open ? null : "key" });
        for (let k = 0; k < 6 && open; k++) {
          const u = (time * 1.4 + k / 6) % 1;
          ctx.save(); ctx.globalAlpha *= Math.sin(u * Math.PI);
          Anima.ion(rx + (rnd(k) - 0.5) * s * 1.2, lerp(mem - s * 2.4, mem + ch * 0.35, u), H * 0.018, "Na", "#bfe3f5");
          ctx.restore();
        }
        sfx("嗖！", rx + cw * 0.28, mem + ch * 0.2, fsz(0.045, 14), "#e7a23a", -0.1, open);
        text("⏱ 几毫秒", x + cw * 0.5, top + ch - H * 0.05, fsz(0.03, 12), "#3f8fb8");
      } else {
        const xs = [0.14, 0.32, 0.5, 0.68, 0.86].map((k) => x + cw * k), rs = Math.min(s * 0.95, cw * 0.06);
        xs.forEach((rx, i) => {
          const on = lt > 1.5 + i * 0.7 ? 1 : 0;
          const r = Anima.receptor(rx, mem, rs, C.m, on * 0.8, { label: "M" + (i + 1) });
          if (on) chara(rx, r.site.y, rs * 0.75, { who: "ACh", eyes: "happy", arms: "up", shadow: false, seed: i });
        });
        // G 蛋白接力：光点慢慢往下走
        const gx = x + cw * 0.5, gy = mem + ch * (n ? 0.3 : 0.22);
        ctx.beginPath(); ctx.ellipse(gx, gy, H * 0.045, H * 0.035, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffe7a3"; ctx.fill(); outline(1.6); ctx.stroke();
        face(gx, gy, H * 0.026, 1);
        text("G 蛋白", gx + H * 0.08, gy, fsz(0.022, 10), C.ink, "left");
        const u = (time * 0.2) % 1;
        glow(lerp(xs[2], gx, u), lerp(mem + rs * 0.6, gy, u), H * 0.03, "#8f84e0", 0.9);
        text("⏳ 慢一些", x + cw * 0.5, top + ch - H * 0.05, fsz(0.03, 12), "#6b61c9");
      }
    });
    say("n-say", lt > 2 && lt < 7.5, gap + cw * (n ? 0.62 : 0.38), n ? top + ch * 0.5 : top + ch * 0.5 - s * 5.5, gap + cw * (n ? 0.5 : 0.72), top + ch * (n ? 0.74 : 0.18), n ? "门开就冲！" : "门一开，离子就冲！", "say");
    say("m-say", lt > 5.5, gap * 2 + cw * 1.5, top + ch * 0.5 - s * (n ? 0 : 3.5), gap * 2 + cw * 1.5, top + ch * (n ? 0.665 : 0.18), n ? "慢慢接力" : "五扇 M 门，各在各的地方", "say");
    ctx.restore();
  }

  // ---------- 画面 1：全身的 M 门（第 2、6、7 幕）----------
  // 每个“站点”一张小卡片：器官名、一扇 M 门、谁坐在门上、结果
  const ST = [
    { name: "大脑" }, { name: "眼睛" }, { name: "唾液腺" },
    { name: "汗腺" }, { name: "胃肠" }, { name: "膀胱" },
  ];
  const RES = {
    1: ["容易糊涂", "看不清", "口干", "出汗少", "便秘", "排尿难"],
    5: ["M1、M4|打开", "", "口水|变多", "出汗", "恶心、|腹泻", ""],
    6: ["M1、M4|打开", "", "副作用|减轻", "副作用|减轻", "副作用|减轻", ""],
  };
  function body(cx, top, h) {
    const hr = h * 0.14, hy = top + hr;
    ctx.save();
    ctx.fillStyle = "#fff1e8"; outline(2);
    rrect(cx - h * 0.16, hy + hr * 0.9, h * 0.32, h * 0.6, h * 0.1); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, hy, hr, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // 大脑
    ctx.beginPath(); ctx.ellipse(cx, hy - hr * 0.35, hr * 0.7, hr * 0.42, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd6e2"; ctx.fill(); outline(1.4); ctx.stroke();
    face(cx, hy + hr * 0.45, hr * 0.35, 1);
    // 胃肠：一段弯弯的小管子
    ctx.strokeStyle = "#f3b58f"; ctx.lineWidth = h * 0.025; ctx.lineCap = "round"; ctx.beginPath();
    for (let k = 0; k <= 20; k++) { const u = k / 20, x = cx + Math.sin(u * Math.PI * 3) * h * 0.08, y = top + h * (0.56 + u * 0.14); if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx, top + h * 0.8, h * 0.05, h * 0.04, 0, 0, Math.PI * 2); ctx.fillStyle = "#fff0b8"; ctx.fill(); outline(1.3); ctx.stroke();
    ctx.restore();
    // 各个站点在身上的位置：大脑、眼睛、唾液腺、汗腺（皮肤）、胃肠、膀胱
    return [[cx, hy - hr * 0.4], [cx - hr * 0.32, hy + hr * 0.35], [cx + hr * 0.3, hy + hr * 0.7], [cx + h * 0.16, hy + hr + h * 0.12], [cx, top + h * 0.62], [cx, top + h * 0.8]];
  }
  function station(i, x, y, w, h, who, act, res, bad) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.15)"; ctx.shadowBlur = 8; ctx.shadowOffsetY = 2;
    rrect(x, y, w, h, 12); ctx.fillStyle = bad ? "#fff3f5" : "#ffffff"; ctx.fill(); ctx.restore();
    outline(1.5); rrect(x, y, w, h, 12); ctx.stroke();
    const fs = fsz(0.026, 10), n = nw();
    text(ST[i].name, x + fs * 0.6, y + fs * 1.05, fs, C.ink, "left");
    const rs = Math.min(h * 0.15, w * 0.09), rx = x + w * (n ? 0.22 : 0.26), mem = y + h * (n ? 0.82 : 0.8);
    const r = Anima.receptor(rx, mem, rs, C.m, act, { label: n ? null : "M" });
    if (who) chara(rx, r.site.y, rs * 0.72, O(who, { shadow: false, seed: i }));
    if (res) {
      const col = bad ? C.bad : C.good;
      if (n) res.split("|").forEach((l, j, L) => text(l, x + w * 0.66, y + h * 0.6 + (j - (L.length - 1) / 2) * fs * 1.25, fs, col));
      else text(res.replace("|", ""), x + w * 0.66, y + h * 0.55, fs * 1.2, col);
    }
    return { x: rx, y: r.site.y };
  }
  function v1(a) {
    const n = nw(), T = Anima.topSafe(), t = lt, k = cur;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8f4", "#fdf0f5"); Anima.bokeh(6, "#ffd6e2", 0.6, 17);
    const top = T + H * 0.03, bot = H * 0.97;
    let boxes = [], BP = null;
    if (n) {
      const gw = (W - 5 * 8) / 3, gh = (H * 0.78 - top - 8 * 2) / 2 - 2;
      for (let i = 0; i < 6; i++) boxes.push([8 + (i % 3) * (gw + 8) + 4, top + 8 + Math.floor(i / 3) * (gh + 8), gw, gh]);
    } else {
      const bw = W * 0.29, bh = (bot - top - H * 0.04) / 3;
      BP = body(W / 2, top + H * 0.02, bot - top - H * 0.08);
      for (let i = 0; i < 6; i++) {
        const side = i < 3 ? 0 : 1, row = i % 3;
        boxes.push([side ? W - bw - W * 0.03 : W * 0.03, top + row * (bh + H * 0.02), bw, bh]);
      }
    }
    // 大脑周围的血脑屏障（第 7 幕）
    const bbb = k === 6 ? prog(0.5, 1) : 0;
    const B = boxes[0];
    if (bbb > 0.02) {
      ctx.save(); ctx.globalAlpha *= bbb; ctx.setLineDash([8, 6]); ctx.strokeStyle = C.lavDeep; ctx.lineWidth = 3;
      rrect(B[0] - 5, B[1] - 5, B[2] + 10, B[3] + 10, 16); ctx.stroke(); ctx.restore();
    }
    const S0 = [];
    for (let i = 0; i < 6; i++) {
      const b = boxes[i], brain = i === 0;
      let who = { who: "ACh", eyes: "happy", arms: "up" }, act = 0.7, res = "", bad = false;
      if (k === 1) {
        const p = prog(3 + i * 0.6, 1);
        if (p > 0.5) { who = O(OLD, { eyes: "happy", arms: "hug", mouth: "cat" }); act = 0.05; res = RES[1][i]; bad = true; }
      } else if (k === 5) {
        const p = prog(1.5 + i * 0.5, 1);
        if (p > 0.5) { who = O(XAN, { eyes: "sparkle", arms: "up", mouth: "grin" }); act = 1; res = RES[5][i]; bad = !brain && !!res; }
      } else if (k === 6) {
        const p = prog(2 + i * 0.5, 1);
        if (brain) { who = O(XAN, { eyes: "sparkle", arms: "up", mouth: "grin" }); act = 1; res = RES[6][0]; }
        else if (p > 0.5) { who = O(TRO, { eyes: "happy", arms: "hug", mouth: "cat" }); act = 0.05; res = RES[6][i]; }
        else { who = O(XAN, { eyes: "open", arms: "up" }); act = 1; }
      }
      S0.push(station(i, b[0], b[1], b[2], b[3], who, act, res, bad));
      if (!n) {
        // 虚线连到身上的位置
        const px = BP[i][0], py = BP[i][1];
        ctx.save(); ctx.setLineDash([3, 4]); outline(1.2); ctx.beginPath();
        ctx.moveTo(i < 3 ? b[0] + b[2] : b[0], b[1] + b[3] * 0.5); ctx.lineTo(px, py); ctx.stroke(); ctx.restore();
        ctx.beginPath(); ctx.arc(px, py, 3.5, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
      }
      if (bad && (k === 5) && i === 4) emote("sweat", S0[i].x + W * 0.03, S0[i].y - H * 0.05, H * 0.02);
    }
    // 第 7 幕：曲司氯铵想进大脑，被屏障弹回来
    if (k === 6 && t > 3) {
      const u = ((t - 3) * 0.4) % 1, bx = B[0] + B[2] + (n ? 10 : W * 0.04), by = B[1] + B[3] * 0.5;
      const x = u < 0.5 ? lerp(bx + W * 0.06, B[0] + B[2] + 8, u * 2) : lerp(B[0] + B[2] + 8, bx + W * 0.06, (u - 0.5) * 2);
      if (!n) {
        chara(x, by + H * 0.05, H * 0.028, O(TRO, { eyes: u > 0.45 && u < 0.7 ? "x" : "open", arms: "up", shadow: false }));
        if (u > 0.45 && u < 0.6) sfx("咚", B[0] + B[2] + 12, by - H * 0.03, fsz(0.035, 12), C.lavDeep, -0.1, 1);
      }
    }
    const q = (c, a0, b0) => cur === c && t > a0 && t < b0;
    const cx = n ? W * 0.5 : W * 0.5;
    say("b-old", q(1, 3.5, 12.5), S0[4].x, S0[4].y - H * 0.06, n ? W * 0.5 : cx, n ? H * 0.9 : H * 0.12 + T, "老药顺手把 M 门都挡住了", "box");
    callout("b-all", q(1, 0.5, 3.4), S0[0].x, S0[0].y, n ? W * 0.5 : cx, n ? H * 0.86 : T + H * 0.04, "乙酰胆碱在各处开 M 门");
    say("x-body", q(5, 5, 12.5), S0[4].x, S0[4].y - H * 0.06, n ? W * 0.5 : cx, n ? H * 0.9 : T + H * 0.1, "身体里的 M 门也被打开了……", "think");
    callout("t-bbb", q(6, 1, n ? 6 : 7), B[0] + B[2] * 0.5, B[1] + B[3] + 5, n ? W * 0.5 : cx, n ? H * 0.86 : T + H * 0.04, "血脑屏障：曲司氯铵进不去");
    say("t-ok", q(6, n ? 7.8 : 7.5, 13), S0[0].x, S0[0].y - H * 0.03, n ? W * 0.5 : cx, n ? H * 0.9 : T + H * 0.1, n ? "脑内占诺美林，脑外曲司氯铵" : "大脑里交给占诺美林，外面交给曲司氯铵", "box");
    // 图例：谁是谁（桌面）
    if (!n) {
      const lf = fsz(0.021, 10), names = k === 1 ? [["老药（挡 M）", "#c9b8e8"]] : k === 5 ? [["占诺美林（开 M）", "#8fdcc4"]] : [["占诺美林（开 M）", "#8fdcc4"], ["曲司氯铵（挡 M）", "#ffb38a"]];
      names.forEach((m, j) => tagBox(m[0], W * 0.5 + (j - (names.length - 1) / 2) * lf * 9.5, bot - lf * 0.9, lf, alpha(m[1], 0.45)));
    }
    ctx.restore();
  }

  // ---------- 画面 2：M4 刹车 → 多巴胺少放 ----------
  function v2(a) {
    const n = nw(), T = Anima.topSafe(), t = lt;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6fbff", "#fff1f4"); Anima.bokeh(6, "#d9ecf7", 0.7, 25);
    // 纹状体：右上的街区，地上三扇 D2 门
    const px = W * (n ? 0.5 : 0.55), pw = W * (n ? 0.47 : 0.41), py = T + H * 0.03, ph = H * 0.4, floor = py + ph * 0.9;
    rrect(px, py, pw, ph, 16); ctx.fillStyle = "#ffeef3"; ctx.fill(); outline(1.8); ctx.stroke();
    tagBox("纹状体", px + pw * 0.14, py + fsz(0.024, 10) * 1.1, fsz(0.024, 10), "#ffd6e2");
    const rs = Math.min(H * 0.045, pw * 0.08), dx = [0.3, 0.55, 0.8].map((k) => px + pw * k);
    const busy = clamp(M.da * 1.1 - 0.1, 0, 1);
    const R = dx.map((x) => Anima.receptor(x, floor, rs, C.d2, busy, { label: "D2" }));
    const nDA = Math.round(1 + M.da * 5);
    for (let k = 0; k < nDA; k++) {
      const u = (time * 0.25 + k / nDA) % 1, r = R[k % 3];
      chara(r.site.x + (k > 2 ? rs * 1.4 : 0), lerp(py + ph * 0.25, r.site.y, u), rs * 0.7, { who: "DA", eyes: M.da > 0.6 ? "sparkle" : "happy", shadow: false, alpha: Math.sin(u * Math.PI), bob: 0 });
    }
    if (M.da > 0.7) emote("!", px + pw * 0.08, py + ph * 0.45, H * 0.03);
    // 多巴胺神经元（中脑）和脑干的胆碱能神经元
    const dr = H * 0.075, dA = { x: W * (n ? 0.5 : 0.46), y: H * 0.72 }, cA = { x: W * (n ? 0.15 : 0.14), y: H * 0.8 };
    axon({ x: dA.x + dr * 0.7, y: dA.y - dr * 0.7 }, { x: dA.x + W * 0.1, y: floor + H * 0.1 }, { x: px + pw * 0.2, y: py + ph }, "#ffb98a");
    axon({ x: cA.x + dr * 0.8, y: cA.y - dr * 0.3 }, { x: (cA.x + dA.x) / 2, y: cA.y - H * 0.02 }, { x: dA.x - dr * 1.25, y: dA.y + dr * 0.1 }, "#f7b8d2");
    // 电信号：多巴胺神经元放电越快，光点越多
    const nS = Math.round(1 + M.fire * 3);
    for (let k = 0; k < nS; k++) {
      const u = (time * (0.2 + M.fire * 0.4) + k / nS) % 1, p = bez({ x: dA.x + dr * 0.7, y: dA.y - dr * 0.7 }, { x: dA.x + W * 0.1, y: floor + H * 0.1 }, { x: px + pw * 0.2, y: py + ph }, u);
      glow(p.x, p.y, H * 0.025, C.gold, 0.9); Anima.bolt(p.x, p.y, H * 0.015, 1);
    }
    // 乙酰胆碱快递员：沿着线送去多巴胺神经元的 M5 门
    const nA = Math.round(M.ach * 3);
    for (let k = 0; k < nA; k++) {
      const u = (time * 0.22 + k / 3) % 1, p = bez({ x: cA.x + dr * 0.8, y: cA.y - dr * 0.3 }, { x: (cA.x + dA.x) / 2, y: cA.y - H * 0.02 }, { x: dA.x - dr * 1.25, y: dA.y + dr * 0.1 }, u);
      chara(p.x, p.y - H * 0.012, H * 0.022, { who: "ACh", eyes: "happy", shadow: false, bob: 0, alpha: Math.sin(u * Math.PI) });
    }
    soma(dA.x, dA.y, dr, "#ffd2b0", M.fire > 0.6 ? 1 : 0, n ? "多巴胺神经元" : "多巴胺神经元（中脑）");
    ctx.save(); ctx.translate(dA.x - dr, dA.y); ctx.rotate(-Math.PI / 2);
    Anima.receptor(0, 0, H * 0.032, C.m, M.ach * 0.9, { label: "M5" });
    ctx.restore();
    soma(cA.x, cA.y, dr * 0.9, "#ffd0e2", 1, n ? "胆碱能神经元" : "胆碱能神经元（脑干）");
    // 占诺美林：按下 M4（手机上它站好以后，脚下名牌会压住 M4 小牌，M4 交给标注“按下 M4 刹车”来点名）
    const xp = prog(4, 1.4);
    const m4 = Anima.receptor(cA.x, cA.y - dr * 0.85, H * 0.036, C.m, M.m4, { label: n && cur === 2 && xp > 0.9 ? "" : "M4" });
    if (cur === 2 && xp > 0) chara(m4.site.x, lerp(T + H * 0.1, m4.site.y, xp), H * 0.034, O(XAN, { eyes: xp < 1 ? "open" : "happy", arms: xp < 1 ? "up" : "shh", mouth: "cat", shadow: false, tag: "占诺美林" }));
    // 计量柱
    const bw = Math.max(12, W * 0.022);
    bar(W * (n ? 0.06 : 0.05), T + H * (n ? 0.2 : 0.12), H * 0.56, bw, M.ach, "#f29cc0", "乙酰胆碱");
    bar(px + pw - bw * 1.2, py + ph * 0.28, floor - rs * 2.2, bw, M.da, "#ff9a52", "多巴胺", px + pw - 2);
    const q = (a0, b0) => t > a0 && t < b0;
    callout("m-m5", q(1, 4.5), dA.x - dr * 1.1, dA.y, n ? W * 0.3 : W * 0.3, H * 0.52, n ? "乙酰胆碱催它放电" : "乙酰胆碱经 M5 催它放电");
    callout("m-m4", q(5.5, 13), m4.site.x + H * 0.02, m4.site.y, n ? W * 0.36 : W * 0.26, n ? H * 0.45 : H * 0.5, n ? "按下 M4 刹车" : "按下 M4：乙酰胆碱少放");
    // 手机上气泡在方框下面，尾巴指向多巴胺计量柱，不压住 D2 的小牌
    say("m-da", q(8.5, 13.5), n ? px + pw - bw * 1.2 : dx[1], n ? floor - rs * 2.2 : R[1].site.y - rs, n ? W * 0.8 : W * 0.72, H * (n ? 0.75 : 0.62), "多巴胺少了，D2 门清静了～", "say");
    ctx.restore();
  }

  // ---------- 画面 3：挡门 vs 少送 ----------
  function v3(a) {
    const n = nw(), top = Anima.topSafe() + H * 0.05, gap = W * 0.025, cw = (W - gap * 3) / 2, ch = H * 0.95 - top;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7fbff", "#fff3f6"); Anima.petals(5, 0.35, 41);
    const p = prog(1.5, 1.5);
    [0, 1].forEach((side) => {
      const x = gap + side * (cw + gap), mem = top + ch * 0.62, blk = side === 0;
      card(x, top, cw, ch, blk ? "D2 阻断药：在门口挡" : "占诺美林：少送一些", blk ? "#ffd0dc" : "#c9f0e2");
      ctx.save(); rrect(x, top, cw, ch, 14); ctx.clip(); ctx.fillStyle = "#ffeef3"; ctx.fillRect(x, mem, cw, ch); ctx.restore();
      outline(1.6); ctx.beginPath(); ctx.moveTo(x, mem); ctx.lineTo(x + cw, mem); ctx.stroke();
      const rs = Math.min(H * 0.045, cw * 0.08), xs = [0.25, 0.5, 0.75].map((k) => x + cw * k), cs = rs * 0.8;
      xs.forEach((rx, i) => {
        const r = Anima.receptor(rx, mem, rs, C.d2, blk ? 0.9 * (1 - p) : (i === 1 ? 0.7 : 0.2), { label: "D2" });
        if (blk) {
          chara(rx, lerp(top + ch * 0.2, r.site.y, p), cs, O(D2B, { eyes: "happy", arms: "hug", mouth: "cat", alpha: p, shadow: false }));
          // 很多多巴胺被挡在外面
          for (let k = 0; k < 2; k++) chara(rx + (k ? 1 : -1) * cs * 1.3, r.site.y - cs * 3.2 - k * cs * 0.6, cs * 0.75, { who: "DA", eyes: p > 0.5 ? "open" : "happy", mouth: p > 0.5 ? "wavy" : "smile", shadow: false, seed: i * 2 + k });
          if (p > 0.5 && i === 1 && !n) emote("?", rx + cs * 1.9, r.site.y - cs * 6, cs * 0.6); // 手机上气泡已经说了，省掉问号
        } else if (i === 1) chara(rx, r.site.y, cs, { who: "DA", eyes: "happy", arms: "up" });
        else if (i === 2) chara(rx + cs * 0.3, r.site.y - cs * 3.2, cs * 0.75, { who: "DA", eyes: "happy", shadow: false });
      });
      const fs = fsz(0.026, 11), ty = mem + (top + ch - mem) * 0.45;
      if (blk) {
        text(n ? "门被占住" : "多巴胺还很多，门被占住", x + cw / 2, ty, fs, C.ink);
        text(n ? "挡太多：动作、泌乳素" : "挡太多：动作副作用、泌乳素升高", x + cw / 2, ty + fs * 1.6, fs * 0.95, C.bad);
      } else {
        text(n ? "D2 门没被占" : "多巴胺少了，D2 门没被占", x + cw / 2, ty, fs, C.ink);
        text(n ? "照常收信" : "照常收信：这两类副作用少见", x + cw / 2, ty + fs * 1.6, fs * 0.95, C.good);
      }
    });
    say("c-l", lt > 3 && lt < 8, gap + cw * 0.5, top + ch * 0.3, gap + cw * 0.5, top + ch * 0.14, n ? "我们进不去！" : "让一让，我们进不去！", "say");
    say("c-r", lt > 7.5, gap * 2 + cw * 1.5, top + ch * 0.5, gap * 2 + cw * 1.5, top + ch * 0.14, n ? "人少，门照常开～" : "人少，门也照常开～", "say"); // 手机上卡片窄，气泡字短一点才不出卡片
    ctx.restore();
  }

  // ---------- 画面 4：M1 和皮层 ----------
  function v4(a) {
    const n = nw(), T = Anima.topSafe(), t = lt;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f8f5ff", "#fff3f7"); Anima.bokeh(7, "#e3dcff", 0.8, 51); Anima.petals(5, 0.35, 52);
    const on = prog(3.5, 1.5), cx = W * 0.5, cy = H * 0.7, s = Math.min(H * 0.1, W * 0.075);
    Anima.postMembrane(cy + H * 0.02, "#efeaff", {});
    // 输入 → 神经元 → 输出
    const inY = cy - s * 1.6;
    ctx.save(); ctx.setLineDash([6, 6]); outline(1.4); ctx.beginPath(); ctx.moveTo(W * 0.05, inY); ctx.lineTo(W * 0.95, inY); ctx.stroke(); ctx.restore();
    for (let k = 0; k < 3; k++) {
      const u = (time * 0.3 + k / 3) % 1, x = lerp(W * 0.05, W * 0.95, u), past = x > cx;
      const br = past ? 0.25 + 0.75 * on : 0.6;
      glow(x, inY, H * (0.03 + (past ? 0.03 * on : 0)), C.gold, br); sparkle(x, inY, H * (0.012 + (past ? 0.014 * on : 0)), br);
    }
    text("信号进来", W * 0.12, inY - H * 0.05, fsz(0.024, 10), C.soft);
    text(on > 0.5 ? "传得更清楚" : "传出去有点弱", W * 0.86, inY - H * 0.05, fsz(0.024, 10), on > 0.5 ? C.good : C.soft);
    chara(cx, cy, s, { who: "neuron", hair: "#8f84e0", cloth: "#e8e3ff", eyes: on > 0.5 ? "sparkle" : "sleepy", mouth: on > 0.5 ? "grin" : "flat", arms: on > 0.5 ? "up" : "down", tag: "皮层神经元" });
    if (on > 0.5) emote("bulb", cx + s * 1.1, cy - s * 3.3, s * 0.5);
    // 两扇 M1 门：一扇给乙酰胆碱，一扇给占诺美林
    const floor = cy + H * 0.02, gx = [cx - W * (n ? 0.3 : 0.24), cx + W * (n ? 0.3 : 0.24)], rs = H * 0.045;
    gx.forEach((x, i) => {
      const act = i === 0 ? 0.3 + 0.4 * on : on;
      const r = Anima.receptor(x, floor, rs, C.m, act, { label: "M1" });
      if (i === 0) chara(x, r.site.y, rs * 0.8, { who: "ACh", eyes: "happy", arms: "up", shadow: false });
      else if (on > 0.02) chara(x, lerp(T + H * 0.1, r.site.y, on), rs * 0.85, O(XAN, { eyes: "happy", arms: "up", mouth: "cat", shadow: false, tag: n ? "" : "占诺美林" }));
      ctx.strokeStyle = alpha(C.gold, 0.3 + 0.6 * act); ctx.lineWidth = 3; ctx.setLineDash([4, 5]);
      ctx.beginPath(); ctx.moveTo(x, floor - rs * 2.2); ctx.quadraticCurveTo((x + cx) / 2, cy - s * 0.2, cx + (i ? s * 0.6 : -s * 0.6), cy - s * 0.8); ctx.stroke(); ctx.setLineDash([]);
    });
    tagBox("⚠ 对认知的帮助还在研究", W * 0.5, H * 0.9, fsz(0.026, 11), "#fff8e1", C.warn);
    const q = (a0, b0) => t > a0 && t < b0;
    callout("c-m1", q(0.8, 4), gx[0], floor - rs, n ? W * 0.24 : W * 0.2, T + H * 0.1, n ? "M1：皮层、海马很多" : "M1：皮层和海马里很多");
    say("c-sharp", q(5.5, 12.5), cx, cy - s * 3.2, n ? W * 0.7 : W * 0.72, T + H * 0.1, "重要的信号，听得更清楚了！", "say");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fffaf6"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) v0(S.v0);
    if (S.v1 > 0.02) v1(S.v1);
    if (S.v2 > 0.02) v2(S.v2);
    if (S.v3 > 0.02) v3(S.v3);
    if (S.v4 > 0.02) v4(S.v4);
    pill(14, 12, CH[cur].pill[0], CH[cur].pill[1], "#e0719a", false);
    pill(W - 14, 12, CH[cur].pill2[0], CH[cur].pill2[1], "#3fae86", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#e0719a",
    titleCard: { lines: ["不碰 D2 的", "抗精神病药"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
