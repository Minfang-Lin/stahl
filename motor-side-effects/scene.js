Anima.register("motor-side-effects", {
    "title": "僵、抖、坐不住：药物引起的运动副作用",
    "tag": "精神病与抗精神病药",
    "headline": "僵、抖、坐不住：【黑质纹状体】里的 D2 被挡住了",
    "lede": "抗精神病药挡住 D2 时，管动作的黑质纹状体线也会被挡到。过去这些动作问题都被装进一个叫“锥体外系反应”的大口袋，其实里面是几种机制和处理都不一样的问题：药源性帕金森综合征、静坐不能、急性肌张力障碍，还有很少见但危险的恶性综合征。",
    "summary": "药源性帕金森（间接通路刹车占上风、多巴胺和乙酰胆碱失衡、抗胆碱药为何有效）、静坐不能、急性肌张力障碍、神经阻滞剂恶性综合征，以及它们和迟发性运动障碍在时间上的区别。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 黑质纹状体 D2 与运动副作用",
    "footer": "用药期间出现僵硬、手抖、坐立不安或肌肉突然拧住，请尽快告诉医生；如果出现高热、全身僵硬、意识不清，请立即就医。不要自行加药、减药或停药。",
    "canvasLabel": "药物访客挡住纹状体的 D2 门，间接通路的停车牌举起来，乙酰胆碱跷跷板失衡，居民变得僵硬、坐不住的动画",
    "regions": ["striatum"],
    "parts": ["psychosis"],
    "cast": ["DA", "ACh", "drug", "neuron"],
    "color": "#b5dcc8"
  }, () => {
  const CH = [
    { title: "一个大口袋", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["通路", "黑质纹状体"], pill2: ["EPS", "一个大口袋"],
      text: "抗精神病药挡住 D2 时，管动作的黑质纹状体线也会被挡到，帕金森病里受损的正是这条线。它带来的动作问题，过去常被一起装进一个大口袋，叫锥体外系反应（EPS）。可袋子里其实有好几种：药源性帕金森综合征、静坐不能、急性肌张力障碍，还有长期用药后的迟发性运动障碍。它们机制不同，处理也不同，最好分开认。",
      fact: "“锥体外系反应”是个笼统的说法，里面几种动作问题的处理并不一样" },
    { title: "药源性帕金森：刹车没人按", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["最常见", "像帕金森"], pill2: ["间接通路", "刹车占上风"],
      text: "最常见的是药源性帕金森综合征。《直接通路和间接通路》里讲过：纹状体里带 D2 的神经元属于间接通路，也就是“刹车”。多巴胺在 D2 上把刹车按住，等于在说“走吧”。药物挡住 D2，刹车没人按，“停”的信号占了上风，于是动作变慢、变少，肌肉发僵，手也可能发抖，看起来很像帕金森病。",
      fact: "D2 被挡 → 间接通路（刹车）占上风 → 动作慢、僵硬、震颤" },
    { title: "多巴胺和乙酰胆碱的跷跷板", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0, v6: 0,
      pill: ["平衡", "DA ⇄ ACh"], pill2: ["抗胆碱药", "挡 M1"],
      text: "纹状体里还住着乙酰胆碱中间神经元。平时，多巴胺通过它身上的 D2 门，让它少放一点乙酰胆碱，两边像跷跷板一样平衡。D2 被挡住后，乙酰胆碱放得太多，过度刺激下游神经元的 M1 受体，动作也更难启动。抗胆碱药挡住 M1，跷跷板回正一些，症状就能缓解；但它会带来口干、便秘、视物模糊、犯困和记性变差。",
      fact: "抗胆碱药通过恢复多巴胺和乙酰胆碱的平衡来缓解药源性帕金森" },
    { title: "静坐不能：坐不住", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0, v6: 0,
      pill: ["静坐不能", "坐不住"], pill2: ["抗胆碱药", "帮助不大"],
      text: "第二种是静坐不能。它有里外两面：心里说不出的烦躁不安；身体也停不下来，站着时两脚来回换重心、原地踏步，坐一会儿就想起身走动。它很容易被当成病情加重的焦躁。机制还不完全清楚，除了 D2 被挡，可能还和去甲肾上腺素、5-HT2A 等有关。抗胆碱药对它帮助不大，医生常会考虑 β 受体阻滞剂、苯二氮䓬类或 5-HT2A 拮抗剂。",
      fact: "静坐不能：内心烦躁 + 停不下来的腿脚动作；抗胆碱药效果通常不好" },
    { title: "急性肌张力障碍：突然拧住", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0, v6: 0,
      pill: ["急性", "肌肉拧住"], pill2: ["常见于", "刚开始用药"],
      text: "第三种是急性肌张力障碍，常在刚开始用药时出现，尤其是既不阻断 5-HT2A、也没有抗胆碱作用的药。脸、脖子、躯干或眼睛的肌肉突然不受控制地收缩，比如脖子拧向一边、眼睛往上翻，看起来很吓人。它同样和多巴胺、乙酰胆碱的失衡有关，医生注射抗胆碱药，通常很快就能缓解。一旦出现，请马上告诉医生或去急诊。",
      fact: "急性肌张力障碍多在开始用药早期出现，抗胆碱药通常能迅速缓解" },
    { title: "恶性综合征：要立刻就医", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1, v6: 0,
      pill: ["罕见", "但很危险"], pill2: ["处理", "立刻就医"],
      text: "还有一种很少见、却可能危及生命的情况：神经阻滞剂恶性综合征。表现是高热、全身肌肉极度僵硬、意识模糊甚至昏迷。有人认为它是药源性帕金森最极端的形式，也有人认为是药物对肌肉等细胞的毒性作用。它是急症，必须立刻就医：停用 D2 阻断药，在医院里降温、补液，并使用肌肉松弛药、多巴胺激动剂等治疗。",
      fact: "高热 + 肌肉极度僵硬 + 意识改变，要警惕恶性综合征，立即就医" },
    { title: "早来的和晚来的", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 1,
      pill: ["早来", "僵·坐不住"], pill2: ["晚来", "停不下来"],
      text: "把它们排在时间轴上：急性肌张力障碍常在最初几天出现；药源性帕金森和静坐不能多在开始用药或加量后的几天到几周出现；迟发性运动障碍则要几个月到几年才露面。前几种是 D2 被挡得太多，人会“僵住”或“坐不住”；迟发性运动障碍却是 D2 门变多变灵，人会“停不下来”，处理方向几乎相反。它的故事在《停不下来的小动作》里。",
      fact: "急性运动副作用出现早、像“僵住”；迟发性运动障碍出现晚、像“停不下来”" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { d2: "#9fd0ee", m1: "#f7b8d2", post: "#dff4ea", stop: "#e8637a" });
  const { clamp, lerp, ease, outline, rrect, text, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0 };
  let walkX = 0; // 第 2 幕走路的居民走了多远

  const nw = () => Anima.narrow || W / H < 1.45;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (Anima.narrow ? 1.08 : 1);
  const prog = (t0, d) => ease((lt - t0) / d);
  const tsafe = () => Anima.topSafe();
  const O = (base, o) => Object.assign({}, base, o || {});
  const D2X = { who: "drug", label: "", hatColor: "#ff9aa9", hatColor2: "#ffffff" };
  const ACX = { who: "drug", label: "", hatColor: "#b5e3c9", hatColor2: "#ffffff" };
  const RES = { who: "neuron", hair: "#b08968", cloth: "#ffe7c7" };
  const DOC = { who: "neuron", hair: "#6d5a45", style: "short", cloth: "#ffffff", glasses: true };
  const CHI = { who: "neuron", hair: "#f29cc0", eye: "#cc5b8b", cloth: "#ffe1ee", style: "bun" };
  const SPINY = { who: "neuron", hair: "#8f86e2", eye: "#5c52c4", cloth: "#e4e0ff", style: "long" };

  // 第 2 幕：刹车举起来的程度（0 放下，1 举高）
  const stopK = () => (cur === 1 ? prog(5.2, 1.2) : 0);
  function update(dt) {
    lt = Anima.sceneTime;
    walkX += (dt || 0) * lerp(0.09, 0.012, stopK());
  }

  // ---------- 小工具 ----------
  function tagBox(t, x, y, fs, bg, fg, border) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 0.9, h = fs * 1.45;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.94)"; ctx.fill();
    outline(border || 1.3); ctx.stroke();
    text(t, x, y + 1, fs, fg || C.ink);
    return w;
  }
  function card(x, y, w, h, title, color, a) {
    ctx.save(); ctx.globalAlpha *= a == null ? 1 : a;
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, Math.min(18, w * 0.08)); ctx.fillStyle = "#fffdfb"; ctx.fill(); ctx.restore();
    outline(2); rrect(x, y, w, h, Math.min(18, w * 0.08)); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.03, 11), w * 0.82 / Math.max(4, title.length));
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.3;
      rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
    ctx.restore();
  }
  function banner(t, y, a, col, cx) {
    if (a <= 0) return;
    const X = cx == null ? W / 2 : cx;
    const bf = fsz(0.03, 11);
    ctx.save(); ctx.globalAlpha *= a;
    ctx.font = `${bf}px ${Anima.ROUND}`;
    const bw = Math.min(W - 12, ctx.measureText(t).width + bf * 3.6), bh = bf * 2.2;
    rrect(X - bw / 2, y - bh / 2, bw, bh, bf * 0.8); ctx.fillStyle = "#fff4f7"; ctx.fill();
    outline(2); ctx.strokeStyle = col || C.rose; ctx.stroke();
    Anima.heart(X - bw / 2 + bf * 1.1, y, bf * 0.5, col || C.rose); Anima.heart(X + bw / 2 - bf * 1.1, y, bf * 0.5, col || C.rose);
    text(t, X, y + 1, bf, C.ink);
    ctx.restore();
  }
  function floorLine(y, col) {
    ctx.fillStyle = col; ctx.fillRect(0, y, W, H - y);
    outline(2); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  // 身体两侧的直线：僵住
  function stiff(x, fy, s, a) {
    if (a < 0.05) return;
    ctx.save(); ctx.globalAlpha *= a; outline(2);
    ctx.beginPath();
    for (const d of [-1, 1]) { ctx.moveTo(x + d * s * 1.25, fy - s * 2.7); ctx.lineTo(x + d * s * 1.25, fy - s * 0.4); }
    ctx.stroke(); ctx.restore();
  }
  function wiggle(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = C.lavDeep; ctx.lineWidth = Math.max(1.4, r * 0.14); ctx.lineCap = "round";
    for (let k = 0; k < 3; k++) { const q = -0.8 + k * 0.8 + Math.sin(time * 9 + k) * 0.15; ctx.beginPath(); ctx.arc(x, y, r * (1 + k * 0.1), q - 0.25, q + 0.25); ctx.stroke(); }
    ctx.restore();
  }
  function zig(x, y, s, a) { // 肌肉拧住的锯齿线
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = C.bad; ctx.lineWidth = Math.max(1.5, s * 0.12); ctx.beginPath();
    for (let k = 0; k <= 5; k++) { const xx = x - s * 0.8 + k * s * 0.32, yy = y + (k % 2 ? -1 : 1) * s * 0.18; if (k) ctx.lineTo(xx, yy); else ctx.moveTo(xx, yy); }
    ctx.stroke(); ctx.restore();
  }
  const MOUTHS = ["o", "cat", "wavy", "flat", "o", "smile"];
  // 四种小人：僵(dip)、坐不住(aka)、拧住(dys)、停不下来(td)
  function mini(kind, x, fy, s, o) {
    if (kind === "dip") {
      chara(x + Math.sin(time * 40) * s * 0.04, fy, s, O(RES, O({ gray: 0.35, eyes: "open", mouth: "flat", bob: 0, brow: "worry" }, o)));
      stiff(x, fy, s, 1);
    } else if (kind === "aka") {
      const sw = Math.sin(time * 5) * s * 0.35;
      chara(x + sw, fy, s, O(RES, O({ walk: time * 9, eyes: "open", mouth: "wavy", brow: "worry", dir: Math.cos(time * 5) > 0 ? 1 : -1 }, o)));
      emote("sweat", x + sw + s * 0.9, fy - s * 3, s * 0.45);
    } else if (kind === "dys") {
      ctx.save(); ctx.translate(x, fy - s * 0.2); ctx.rotate(-0.22); ctx.translate(-x, -(fy - s * 0.2));
      chara(x, fy, s, O(RES, O({ eyes: "wide", mouth: "o", arms: "down", bob: 0, look: -1 }, o)));
      ctx.restore();
      zig(x + s * 1.1, fy - s * 1.3, s * 0.6, 1);
    } else {
      chara(x, fy, s, O(RES, O({ eyes: Math.sin(time * 3) > 0.7 ? "closed" : "open", mouth: MOUTHS[Math.floor(time * 3.2) % 6], arms: Math.floor(time * 4) % 2 ? "hug" : "down", bob: 1, hair: "#b08968" }, o)));
      wiggle(x + s * 0.7, fy - s * 1.6, s * 0.35, 1);
    }
  }

  // ---------- 第 1 幕：一个大口袋 ----------
  function sack(x, y, r, open) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x - r * 0.45, y - r * 0.95);
    ctx.bezierCurveTo(x - r * 1.3, y - r * 0.4, x - r * 1.2, y + r * 0.9, x, y + r * 0.95);
    ctx.bezierCurveTo(x + r * 1.2, y + r * 0.9, x + r * 1.3, y - r * 0.4, x + r * 0.45, y - r * 0.95);
    ctx.closePath(); ctx.fillStyle = "#f2dcc0"; ctx.fill(); outline(2); ctx.stroke();
    // 袋口
    ctx.beginPath(); ctx.ellipse(x, y - r * 0.95, r * (0.45 + open * 0.3), r * (0.12 + open * 0.12), 0, 0, Math.PI * 2);
    ctx.fillStyle = open > 0.1 ? "#8a6e5a" : "#e6caa6"; ctx.fill(); ctx.stroke();
    if (open < 0.5) { ctx.strokeStyle = C.rose; ctx.lineWidth = r * 0.08; ctx.beginPath(); ctx.moveTo(x - r * 0.4, y - r * 0.8); ctx.lineTo(x + r * 0.4, y - r * 0.8); ctx.stroke(); }
    ctx.restore();
  }
  function bagView(a) {
    const n = nw(), t = cur === 0 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f2fbf6", "#f6f1fb");
    Anima.bokeh(6, "#cdeede", 0.7, 13);
    const bx = W * (n ? 0.17 : 0.2), by = H * (n ? 0.62 : 0.6), br = Math.min(H * (n ? 0.15 : 0.19), W * 0.15);
    const open = prog(2.4, 0.6);
    sack(bx, by, br, open);
    text("EPS", bx, by + br * 0.05, fsz(0.045, 14), C.ink);
    text("锥体外系反应", bx, by + br * 0.45, Math.min(fsz(0.026, 10), br * 0.3), C.ink);
    if (open > 0 && open < 1) sfx("啪！", bx + br * 0.9, by - br * 1.1, fsz(0.04, 13), C.warn, -0.1, 1);
    // 药物访客站在袋子旁边
    const ds = H * (n ? 0.05 : 0.06);
    chara(bx - br * 0.6, H * 0.97, ds, O(D2X, { eyes: t > 2.4 ? "wide" : "happy", mouth: t > 2.4 ? "o" : "smile", arms: "down", dir: 1 }));
    if (!n) tagBox("纹状体 · 黑质纹状体线", bx, tsafe() + H * 0.06, fsz(0.026, 10), "#fff", C.ink, 1.3);
    // 四张卡片
    const x0 = W * (n ? 0.37 : 0.42), gx = W * 0.02, cw = (W * 0.98 - x0 - gx) / 2, y0 = tsafe() + H * 0.05, ch = (H * 0.96 - y0 - H * 0.05) / 2;
    const items = [
      { k: "dip", t: n ? "药源性帕金森" : "药源性帕金森综合征", c: "僵、慢、抖", col: "#dcefff" },
      { k: "aka", t: "静坐不能", c: "坐不住", col: "#fff1b8" },
      { k: "dys", t: "急性肌张力障碍", c: "肌肉突然拧住", col: "#ffd9e4" },
      { k: "td", t: "迟发性运动障碍", c: "长期后：停不下来", col: "#e4e0ff" },
    ];
    items.forEach((it, i) => {
      const p = prog(3 + i * 1.5, 0.9);
      if (p <= 0) return;
      const x = x0 + (i % 2) * (cw + gx), y = y0 + Math.floor(i / 2) * (ch + H * 0.05);
      // 从袋口飞出来
      const fx = lerp(bx, x + cw / 2, p), fy = lerp(by - br, y + ch / 2, p) - Math.sin(p * Math.PI) * H * 0.15;
      if (p < 1) { glow(fx, fy, H * 0.05, it.col, 1); sparkle(fx, fy, H * 0.03, 1); return; }
      card(x, y, cw, ch, it.t, it.col, i === 3 ? 0.8 : 1);
      const s = Math.min(ch * 0.15, cw * 0.12);
      ctx.save(); ctx.globalAlpha *= i === 3 ? 0.8 : 1;
      if (n) {
        mini(it.k, x + cw * 0.5, y + ch * 0.9, s, { shadow: false });
        text(it.c, x + cw * 0.5, y + ch * 0.27, Math.min(fsz(0.027, 10), cw * 0.9 / it.c.length), i === 3 ? C.soft : C.ink);
      } else {
        mini(it.k, x + cw * 0.3, y + ch * 0.82, s, { shadow: false });
        text(it.c, x + cw * 0.68, y + ch * 0.55, Math.min(fsz(0.027, 10), cw * 0.4 / Math.max(3, it.c.length) * 1.6), i === 3 ? C.soft : C.ink);
      }
      ctx.restore();
    });
    say("which", cur === 0 && t > 9.5, bx - br * 0.6, H * 0.97 - ds * 3.2, W * (n ? 0.2 : 0.2), H * (n ? 0.3 : 0.3), n ? "要分开认哦" : "不一样的问题，要分开认哦", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：药源性帕金森 ----------
  function stopSign(x, y, r, a) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y);
    ctx.beginPath();
    for (let k = 0; k < 8; k++) { const q = Math.PI / 8 + k * Math.PI / 4; ctx.lineTo(Math.cos(q) * r, Math.sin(q) * r); }
    ctx.closePath(); ctx.fillStyle = C.stop; ctx.fill(); ctx.strokeStyle = "#fff"; ctx.lineWidth = r * 0.12; ctx.stroke(); outline(1.5); ctx.stroke();
    ctx.restore();
    text("停", x, y + 1, r * 0.9, "#ffffff");
  }
  function stopView(a) {
    const n = nw(), t = cur === 1 ? lt : 99, k = stopK();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4fbf7", "#eef6f1");
    Anima.bokeh(5, "#cdeede", 0.7, 23);
    const mid = W * (n ? 0.48 : 0.46);
    // 左：间接通路的 D2 神经元，举着停车牌
    const mem = H * 0.5, dx = W * (n ? 0.2 : 0.18), rs = H * 0.048, cs = H * 0.04;
    ctx.fillStyle = C.post; ctx.fillRect(0, mem, mid, H - mem);
    outline(2); ctx.beginPath(); ctx.moveTo(0, mem); ctx.lineTo(mid, mem); ctx.stroke();
    const drugIn = cur === 1 ? prog(4, 1.2) : 0;
    const daIn = cur === 1 ? prog(0.4, 1.3) : 1;
    const r = Anima.receptor(dx, mem, rs, C.d2, drugIn > 0.5 ? 0.03 : daIn, { label: "D2" });
    // 多巴胺：先坐进门里，药物来了被挤走
    const leave = drugIn;
    const dax = lerp(dx, dx + W * 0.12, leave), day = lerp(lerp(tsafe() + H * 0.05, r.site.y, daIn), H * 0.18, leave);
    chara(dax, day, cs, { who: "DA", eyes: leave > 0.1 ? "teary" : "happy", arms: leave > 0.1 ? "down" : "up", mouth: leave > 0.1 ? "o" : "grin", alpha: 1 - leave, shadow: false, bob: 0 });
    if (drugIn > 0) chara(lerp(-W * 0.05, dx, drugIn), lerp(mem - H * 0.1, r.site.y, drugIn), cs * 1.02, O(D2X, { eyes: "happy", arms: drugIn >= 1 ? "hug" : "down", walk: drugIn < 1 ? time * 9 : null, shadow: false, bob: 0.3 }));
    const ns = H * (n ? 0.06 : 0.065), nfy = H * 0.9;
    chara(dx, nfy, ns, { who: "neuron", hair: "#9c7b62", cloth: "#ffd0dc", arms: "up", eyes: k > 0.5 ? "angry" : "happy", mouth: k > 0.5 ? "open" : "smile", tag: "间接通路" });
    const hx = dx + ns * 0.9, hy = nfy - ns * 2.6;
    const sx = hx + lerp(ns * 1.6, ns * 0.3, k), sy = hy - lerp(ns * 0.2, ns * 1.6, k);
    outline(3); ctx.beginPath(); ctx.moveTo(hx, hy + ns * 0.3); ctx.lineTo(sx, sy); ctx.stroke();
    stopSign(sx, sy, ns * lerp(0.55, 0.8, k), 1);
    if (k > 0.5 && t < 99) sfx("停！", sx + ns * 1.6, sy - ns * 0.6, fsz(0.04, 13), C.stop, 0.1, 1);
    // 右：走路的居民
    const road = H * 0.86;
    ctx.fillStyle = "#efe6da"; ctx.fillRect(mid, road, W - mid, H - road);
    outline(2); ctx.beginPath(); ctx.moveTo(mid, road); ctx.lineTo(W, road); ctx.stroke();
    ctx.save(); ctx.setLineDash([10, 10]); ctx.strokeStyle = "#d8c7b3"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(mid, (road + H) / 2); ctx.lineTo(W, (road + H) / 2); ctx.stroke(); ctx.restore();
    const ws = H * (n ? 0.075 : 0.085), span = W - mid - ws * 3;
    const wx = mid + ws * 1.5 + ((walkX * W) % span + span) % span;
    const jit = Math.sin(time * 38) * ws * 0.05 * k;
    chara(wx + jit, road, ws, O(RES, { walk: time * lerp(9, 2, k), gray: 0.4 * k, eyes: k > 0.5 ? "open" : "happy", mouth: k > 0.5 ? "flat" : "smile", brow: k > 0.5 ? "worry" : null, bob: 1 - k }));
    stiff(wx, road, ws, k);
    if (k > 0.5) emote("sweat", wx + ws, road - ws * 3.2, ws * 0.45);
    const on = cur === 1;
    tagBox(n ? "复习：D2 神经元 = 刹车" : "复习：带 D2 的间接通路 = 刹车", mid + (W - mid) / 2, tsafe() + H * 0.06, fsz(0.026, 10), "#fff", C.soft, 1.2);
    callout("go", on && t > 1.6 && t < 4.4, sx, sy, W * (n ? 0.66 : 0.24), H * (n ? 0.4 : 0.62), n ? "多巴胺按住刹车" : "多巴胺按住刹车 = “走吧”");
    callout("blk", on && t > 5.5 && t < (n ? 7.4 : 9.2), dx + cs, r.site.y - cs * 2, W * (n ? 0.66 : 0.3), H * (n ? 0.3 : 0.42), n ? "D2 被挡：刹车没人按" : "D2 被挡：刹车没人按，举得高高的");
    callout("slow", on && t > 7.5, wx, road - ws * 1.6, W * (n ? 0.74 : 0.74), H * (n ? 0.42 : 0.42), n ? "慢、僵、手抖" : "动作变慢、肌肉发僵、手抖");
    ctx.restore();
  }

  // ---------- 第 3 幕：多巴胺和乙酰胆碱的跷跷板 ----------
  function seesaw(x, y, L, ang) {
    outline(2);
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - L * 0.08, y + L * 0.14); ctx.lineTo(x + L * 0.08, y + L * 0.14); ctx.closePath(); ctx.fillStyle = "#e6caa6"; ctx.fill(); ctx.stroke();
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    rrect(-L / 2, -L * 0.03, L, L * 0.05, L * 0.02); ctx.fillStyle = "#d9b48f"; ctx.fill(); ctx.stroke();
    ctx.restore();
    const c = Math.cos(ang), s = Math.sin(ang);
    return { l: { x: x - c * L * 0.4, y: y - s * L * 0.4 - L * 0.03 }, r: { x: x + c * L * 0.4, y: y + s * L * 0.4 - L * 0.03 } };
  }
  function achView(a) {
    const n = nw(), t = cur === 2 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff5fa", "#f1f7fb");
    Anima.bokeh(5, "#ffd6e7", 0.7, 33);
    const blk = cur === 2 ? prog(3, 1.2) : 1, anti = cur === 2 ? prog(8.2, 1.2) : 1;
    // 左：胆碱能中间神经元，头顶有 D2 门
    const mem = H * 0.5, ix = W * (n ? 0.2 : 0.18), rs = H * 0.045, cs = H * 0.038;
    ctx.fillStyle = "#ffeef5"; ctx.fillRect(0, mem, W * 0.4, H - mem);
    outline(2); ctx.beginPath(); ctx.moveTo(0, mem); ctx.lineTo(W * 0.4, mem); ctx.stroke();
    const r = Anima.receptor(ix, mem, rs, C.d2, blk > 0.5 ? 0.03 : 0.9, { label: "D2" });
    chara(lerp(ix, ix - W * 0.1, blk), lerp(r.site.y, H * 0.2, blk), cs, { who: "DA", eyes: blk > 0.2 ? "teary" : "happy", arms: blk > 0.2 ? "down" : "up", alpha: 1 - blk, shadow: false, bob: 0 });
    if (blk > 0) chara(lerp(-W * 0.05, ix, blk), lerp(mem - H * 0.1, r.site.y, blk), cs * 1.02, O(D2X, { eyes: "happy", arms: blk >= 1 ? "hug" : "down", shadow: false, bob: 0.3 }));
    const ns = H * (n ? 0.055 : 0.06), nfy = H * (n ? 0.81 : 0.84);
    chara(ix, nfy, ns, O(CHI, { eyes: blk > 0.5 ? "wide" : "happy", arms: blk > 0.5 ? "up" : "shh", mouth: blk > 0.5 ? "open" : "cat", tag: n ? "胆碱能神经元" : "胆碱能中间神经元" }));
    // 右：下游神经元上的 M1 门
    const m2 = H * 0.62, xs = n ? [0.6, 0.76, 0.92] : [0.6, 0.74, 0.88];
    ctx.fillStyle = "#f0ecff"; ctx.fillRect(W * 0.5, m2, W * 0.5, H - m2);
    outline(2); ctx.beginPath(); ctx.moveTo(W * 0.5, m2); ctx.lineTo(W, m2); ctx.stroke();
    const nAch = 1 + Math.round(2 * blk);
    const acts = [0, 0, 0], sites = [];
    xs.forEach((fx, j) => sites.push({ x: W * fx, y: m2 - rs * 1.62 }));
    for (let i = 0; i < 3; i++) {
      if (i >= nAch) continue;
      const p = (time / 3 + i / 3) % 1, st = sites[i];
      const sx = ix + ns * 1.2, sy = nfy - ns * 2.2;
      let x, y, al = clamp(p * 8, 0, 1), eyes = "happy";
      if (anti > 0.5) {
        if (p < 0.5) { const q = ease(p / 0.5); x = lerp(sx, st.x - cs, q); y = lerp(sy, st.y - cs * 3.2, q) - Math.sin(q * Math.PI) * H * 0.04; }
        else { const q = (p - 0.5) / 0.5; x = st.x - cs - q * W * 0.05; y = st.y - cs * 3.2 - q * H * 0.04; eyes = "teary"; al *= 1 - q; }
      } else if (p < 0.55) { const q = ease(p / 0.55); x = lerp(sx, st.x, q); y = lerp(sy, st.y, q) - Math.sin(q * Math.PI) * H * 0.05; }
      else { x = st.x; y = st.y; acts[i] = 1; al *= p > 0.9 ? (1 - p) * 10 : 1; }
      chara(x, y, cs * 0.9, { who: "ACh", eyes, arms: "hold", item: "letter", alpha: al, shadow: false, walk: time * 9 + i });
    }
    xs.forEach((fx, j) => {
      Anima.receptor(W * fx, m2, rs, C.m1, anti > 0.5 ? 0.03 : acts[j], { label: "M1", shape: "square" });
      if (anti > 0) chara(lerp(W * 1.05, W * fx, anti), lerp(m2 - H * 0.12, sites[j].y, anti), cs, O(ACX, { eyes: "happy", arms: anti >= 1 ? "hug" : "down", shadow: false, bob: 0.3 }));
    });
    const over = blk * (1 - anti);
    const sp = H * (n ? 0.055 : 0.06), spx = W * (n ? 0.76 : 0.8), spy = H * (n ? 0.81 : 0.84);
    chara(spx, spy, sp, O(SPINY, { gray: over * 0.3, eyes: over > 0.5 ? "x" : "happy", mouth: over > 0.5 ? "wavy" : "smile", arms: over > 0.5 ? "fist" : "down", tag: "纹状体神经元" }));
    stiff(spx, spy, sp, over);
    // 右上：跷跷板
    const L = W * (n ? 0.26 : 0.22), px = W * 0.5, py = tsafe() + H * (n ? 0.12 : 0.13);
    const tilt = (0.15 + 0.85 * blk - 0.7 * anti * blk) * 0.28;
    const ends = seesaw(px, py, L, tilt);
    const es = Math.min(H * 0.032, L * 0.09);
    chara(ends.l.x, ends.l.y, es, { who: "DA", eyes: "happy", shadow: false, bob: 0, gray: blk * 0.5 * (1 - anti) });
    chara(ends.r.x, ends.r.y, es, { who: "ACh", eyes: over > 0.5 ? "wide" : "happy", shadow: false, bob: 0 });
    if (over > 0.5) chara(ends.r.x + es * 1.6, ends.r.y, es * 0.9, { who: "ACh", eyes: "wide", shadow: false, bob: 0 });
    text(over > 0.5 ? "失衡" : "平衡", px - L * 0.5 - fsz(0.028, 11) * 1.6, py, fsz(0.028, 11), over > 0.5 ? C.bad : C.good);
    const on = cur === 2;
    callout("more", on && !n && t > 4.6 && t < 8.2, ix + ns, nfy - ns * 3, W * (n ? 0.3 : 0.3), H * (n ? 0.32 : 0.3), n ? "乙酰胆碱放太多" : "D2 被挡：乙酰胆碱放太多");
    callout("anti", on && t > 9.4 && t < 12, sites[1].x, sites[1].y - cs * 3, W * (n ? 0.5 : 0.52), H * (n ? 0.5 : 0.48), n ? "抗胆碱药挡住 M1" : "抗胆碱药挡住 M1：回正一些");
    banner(n ? "副作用：口干、便秘、视物模糊、犯困" : "抗胆碱副作用：口干、便秘、视物模糊、犯困、记性变差", H * 0.95, cur === 2 ? prog(11.3, 0.6) : 0, C.lavDeep);
    ctx.restore();
  }

  // ---------- 第 4 幕：静坐不能 ----------
  function chair(x, fy, s) {
    ctx.fillStyle = "#c9a27e"; outline(1.8);
    rrect(x - s * 0.9, fy - s * 1.2, s * 1.8, s * 0.25, 4); ctx.fill(); ctx.stroke();
    rrect(x - s * 0.9, fy - s * 3, s * 0.25, s * 2, 4); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - s * 0.75, fy - s * 0.95); ctx.lineTo(x - s * 0.75, fy); ctx.moveTo(x + s * 0.75, fy - s * 0.95); ctx.lineTo(x + s * 0.75, fy); ctx.stroke();
  }
  function akaView(a) {
    const n = nw(), t = cur === 3 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#fdf0f4");
    Anima.bokeh(5, "#ffe7a3", 0.7, 43);
    const floor = H * 0.88;
    floorLine(floor, "#f2dfcf");
    const s = H * (n ? 0.08 : 0.09), cx = W * (n ? 0.2 : 0.2);
    chair(cx - s * 0.2, floor, s);
    const up = t < 99 ? (t < 1.5 ? 0 : 1) : 1;
    let hx, hy;
    if (!up) { chara(cx, floor - s * 1.1, s, O(RES, { eyes: "open", mouth: "wavy", brow: "worry", arms: "hug" })); hx = cx; hy = floor - s * 4.3; }
    else {
      const sw = Math.sin(time * 1.6) * W * (n ? 0.07 : 0.08), x = cx + W * (n ? 0.1 : 0.12) + sw;
      chara(x, floor, s, O(RES, { walk: time * 8, eyes: "open", mouth: "wavy", brow: "worry", dir: Math.cos(time * 1.6) > 0 ? 1 : -1 }));
      emote("sweat", x + s, floor - s * 3.1, s * 0.45);
      hx = x; hy = floor - s * 3.2;
      // 地上的脚印
      for (let k = 0; k < 6; k++) { ctx.fillStyle = "rgba(160,120,100,0.25)"; ctx.beginPath(); ctx.ellipse(cx + W * 0.12 + (k - 2.5) * W * 0.03, floor + H * 0.04 + (k % 2) * H * 0.02, s * 0.14, s * 0.08, 0, 0, Math.PI * 2); ctx.fill(); }
    }
    // 右：机制和对策卡片
    const x0 = W * (n ? 0.5 : 0.55), cw = W * 0.97 - x0, y0 = tsafe() + H * 0.06, ch = H * 0.93 - y0;
    const f = Math.min(fsz(0.034, 12), cw / 15);
    const p1 = prog(5.5, 0.7), p2 = prog(8, 0.7);
    card(x0, y0, cw, ch, "机制和对策", "#fff1b8", Math.max(p1, 0.001));
    if (p1 > 0) {
      ctx.save(); ctx.globalAlpha *= p1;
      text("机制还不完全清楚：", x0 + cw / 2, y0 + ch * 0.12, f, C.soft);
      if (n) { text("D2 被挡，可能还有", x0 + cw / 2, y0 + ch * 0.12 + f * 1.5, f, C.ink); text("NE、5-HT2A 参与", x0 + cw / 2, y0 + ch * 0.12 + f * 2.9, f, C.ink); }
      else text("D2 被挡，可能还有 NE、5-HT2A 参与", x0 + cw / 2, y0 + ch * 0.12 + f * 1.5, Math.min(f, cw * 0.92 / 19), C.ink);
      ctx.restore();
    }
    if (p2 > 0) {
      ctx.save(); ctx.globalAlpha *= p2;
      text("医生可能考虑：", x0 + cw / 2, y0 + ch * 0.4, f, C.soft);
      ["β 受体阻滞剂", "苯二氮䓬类", "5-HT2A 拮抗剂"].forEach((w, i) => tagBox(w, x0 + cw / 2, y0 + ch * (0.52 + i * 0.12), f, "#fff", C.ink, 1.2));
      const yy = y0 + ch * 0.9, tw = tagBox("抗胆碱药：帮助不大", x0 + cw / 2, yy, f, "#f4f1f3", C.soft, 1.2);
      ctx.strokeStyle = C.bad; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x0 + cw / 2 - tw / 2 + f * 0.3, yy); ctx.lineTo(x0 + cw / 2 + tw / 2 - f * 0.3, yy); ctx.stroke();
      ctx.restore();
    }
    const on = cur === 3;
    say("inner", on && t > 1.6 && t < 7.5, hx, hy, W * (n ? 0.26 : 0.26), H * (n ? 0.32 : 0.3), n ? "心里好烦，\n停不下来……" : "心里说不出的烦，停不下来……", "think");
    callout("legs", on && t > (n ? 7.6 : 3), hx, floor - s * 0.4, W * (n ? 0.24 : 0.3), H * (n ? 0.3 : 0.5), n ? "踏步、来回走" : "外在：原地踏步、来回走");
    callout("mis", on && t > 8.5 && !n, hx, hy + s * 0.4, W * 0.26, H * 0.24, "常被当成病情加重");
    ctx.restore();
  }

  // ---------- 第 5 幕：急性肌张力障碍 ----------
  function dysView(a) {
    const n = nw(), t = cur === 4 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff4f6", "#f3f4fb");
    Anima.bokeh(5, "#ffd1dc", 0.7, 53);
    const floor = H * 0.9;
    floorLine(floor, "#ece3ef");
    const s = H * (n ? 0.08 : 0.095), x = W * (n ? 0.24 : 0.22);
    const relax = cur === 4 ? prog(10, 1.5) : 1, hit = cur === 4 ? prog(0.8, 0.4) : 1;
    const twist = hit * (1 - relax);
    ctx.save(); ctx.translate(x, floor - s * 0.2); ctx.rotate(-0.25 * twist); ctx.translate(-x, -(floor - s * 0.2));
    chara(x, floor, s, O(RES, { eyes: twist > 0.5 ? "wide" : "happy", mouth: twist > 0.5 ? "o" : "smile", look: -twist, bob: 0.3, arms: twist > 0.5 ? "down" : "wave" }));
    ctx.restore();
    if (twist > 0.3) { zig(x + s * 1.1, floor - s * 1.3, s * 0.6, twist); emote("sweat", x + s * 1.1, floor - s * 3.2, s * 0.45); }
    if (cur === 4 && t > 0.8 && t < 2) sfx("咔！", x + s * 1.6, floor - s * 3.4, fsz(0.045, 14), C.bad, -0.1, 1);
    tagBox(n ? "📅 刚开始用药" : "📅 常在刚开始用药时", x, tsafe() + H * 0.06, fsz(0.028, 11), "#fff", C.ink, 1.3);
    // 医生和抗胆碱药
    const dk = cur === 4 ? prog(7.5, 1.6) : 1, ds = s * 0.8;
    if (dk > 0) {
      const dx = lerp(-W * 0.1, x - s * 2.1, dk);
      chara(dx, floor, ds, O(DOC, { eyes: "happy", arms: "hold", item: "book", walk: dk < 1 ? time * 9 : null }));
      chara(dx + s * 3.6 * dk + (1 - dk) * s, floor, ds * 0.8, O(ACX, { eyes: "happy", arms: "wave", walk: dk < 1 ? time * 9 : null, dir: -1, tag: "抗胆碱药" }));
    }
    // 右：可能拧住的地方
    const x0 = W * (n ? 0.52 : 0.55), cw = W * 0.97 - x0, y0 = tsafe() + H * 0.06, ch = H * 0.62;
    card(x0, y0, cw, ch, "可能拧住的地方", "#ffd9e4", prog(2, 0.6));
    const parts = [["脸", "表情扭住"], ["脖子", "歪向一边"], ["躯干", "弯着、拧着"], ["眼睛", "往上翻"]];
    const f = Math.min(fsz(0.034, 12), cw / 11);
    parts.forEach((pp, i) => {
      const p = prog(2.8 + i * 1, 0.5);
      if (p <= 0) return;
      const y = y0 + ch * (0.2 + i * 0.2);
      ctx.save(); ctx.globalAlpha *= p;
      tagBox(pp[0], x0 + cw * 0.25, y, f, "#fff4f7", C.bad, 1.3);
      text(pp[1], x0 + cw * 0.64, y + 1, f, C.ink);
      ctx.restore();
    });
    banner(n ? "马上找医生或去急诊" : "一旦出现，马上告诉医生或去急诊", y0 + ch + H * 0.1, cur === 4 ? prog(11.5, 0.6) : 1, C.bad, x0 + cw / 2);
    const on = cur === 4;
    callout("fast", on && t > 9.4 && t < 11.4, x, floor - s * 3, W * (n ? 0.36 : 0.36), H * (n ? 0.36 : 0.3), n ? "抗胆碱药：很快缓解" : "注射抗胆碱药，通常很快缓解");
    ctx.restore();
  }

  // ---------- 第 6 幕：神经阻滞剂恶性综合征 ----------
  function thermo(x, y, h, v) {
    const w = h * 0.16;
    rrect(x - w / 2, y - h, w, h, w / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.8); ctx.stroke();
    const fh = (h - w) * v;
    rrect(x - w * 0.25, y - w * 0.5 - fh, w * 0.5, fh + w * 0.2, w * 0.25); ctx.fillStyle = C.bad; ctx.fill();
    ctx.beginPath(); ctx.arc(x, y, w * 0.8, 0, Math.PI * 2); ctx.fillStyle = C.bad; ctx.fill(); outline(1.8); ctx.stroke();
  }
  function nmsView(a) {
    const n = nw(), t = cur === 5 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff3f0", "#fbeef0");
    Anima.bokeh(5, "#ffc9c9", 0.6, 63);
    const floor = H * 0.9;
    floorLine(floor, "#f3e2dc");
    const s = H * (n ? 0.075 : 0.09), x = W * (n ? 0.2 : 0.2);
    const k = cur === 5 ? prog(0.8, 3) : 1;
    glow(x, floor - s * 1.8, s * 3, "#ff8a8a", 0.5 * k);
    chara(x, floor, s, O(RES, { gray: 0.35 * k, eyes: k > 0.5 ? "dizzy" : "open", mouth: "wavy", bob: 0, arms: "down" }));
    stiff(x, floor, s, k);
    emote("sweat", x + s * 1.1, floor - s * 3.1, s * 0.45);
    thermo(x + s * 2.3, floor - s * 0.5, s * 2.6, 0.3 + 0.65 * k);
    tagBox("罕见，但可能危及生命", x + s * 0.6, tsafe() + H * 0.06, fsz(0.028, 11), "#fff4f7", C.bad, 1.4);
    // 右上：三个危险信号；右下：医院里会做什么
    const x0 = W * (n ? 0.46 : 0.48), cw = W * 0.97 - x0, y0 = tsafe() + H * 0.07, ch1 = H * (n ? 0.3 : 0.28);
    const f = Math.min(fsz(0.032, 11), cw / 14);
    card(x0, y0, cw, ch1, "三个危险信号", "#ffd9e4", prog(1.5, 0.6));
    ["高热", "肌肉极度僵硬", "意识模糊"].forEach((w, i) => {
      const p = prog(2.2 + i * 1, 0.5);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      if (n) tagBox(w, x0 + cw * (i === 2 ? 0.5 : 0.27 + i * 0.46), y0 + ch1 * (i === 2 ? 0.72 : 0.36), f, "#fff4f7", C.bad, 1.3);
      else tagBox(w, x0 + cw * (0.18 + i * 0.32), y0 + ch1 * 0.55, f, "#fff4f7", C.bad, 1.3);
      ctx.restore();
    });
    const y1 = y0 + ch1 + H * 0.08, ch2 = H * 0.93 - y1;
    const p2 = prog(6.5, 0.7);
    card(x0, y1, cw, ch2, "急症：立刻就医", "#ffb3b3", Math.max(p2, 0.001));
    const steps = ["停用 D2 阻断药", "降温、补液等支持治疗", "肌肉松弛药、多巴胺激动剂等"];
    steps.forEach((w, i) => {
      const p = prog(7.5 + i * 1.2, 0.5);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      text((i + 1) + ". " + w, x0 + cw * 0.08, y1 + ch2 * (0.3 + i * 0.25), Math.min(f, cw * 0.86 / 14), C.ink, "left");
      ctx.restore();
    });
    ctx.restore();
  }

  // ---------- 第 7 幕：时间轴 ----------
  function lineView(a) {
    const n = nw(), t = cur === 6 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f8ff", "#fdeef3");
    Anima.bokeh(6, "#e3dcff", 0.7, 73);
    const ax = W * 0.05, bx = W * 0.95, ay = H * 0.55;
    const X = (u) => lerp(ax, bx, u);
    const f = fsz(0.027, 10.5);
    outline(2.2); ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, ay); ctx.lineTo(bx - H * 0.02, ay - H * 0.015); ctx.moveTo(bx, ay); ctx.lineTo(bx - H * 0.02, ay + H * 0.015); ctx.stroke();
    [[0.02, "开始用药"], [0.2, "几天"], [0.42, "几周"], [0.66, "几个月"], [0.9, "几年"]].forEach((tk) => {
      outline(1.6); ctx.beginPath(); ctx.moveTo(X(tk[1] === "开始用药" ? 0.01 : tk[0]), ay - H * 0.012); ctx.lineTo(X(tk[1] === "开始用药" ? 0.01 : tk[0]), ay + H * 0.012); ctx.stroke();
      text(tk[1], X(tk[0]) + (tk[1] === "开始用药" ? f * 1.6 : 0), ay + f * 1.4, f, C.soft);
    });
    const bh = H * 0.05;
    const bars = [
      { u0: 0.01, u1: 0.2, y: ay - H * 0.26, col: "#ffd9e4", t: "急性肌张力障碍", t0: 0.8 },
      { u0: 0.04, u1: 0.46, y: ay - H * 0.15, col: "#dcefff", t: n ? "药源性帕金森、静坐不能" : "药源性帕金森综合征、静坐不能", t0: 2.4 },
    ];
    bars.forEach((b) => {
      const p = prog(b.t0, 1);
      if (p <= 0) return;
      const w = (X(b.u1) - X(b.u0)) * p;
      rrect(X(b.u0), b.y - bh / 2, w, bh, bh / 2); ctx.fillStyle = b.col; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.save(); ctx.globalAlpha *= p; text(b.t, X(b.u1) + H * 0.015, b.y + 1, f, C.ink, "left"); ctx.restore();
    });
    const pt = prog(6.5, 1.2);
    if (pt > 0) {
      const y = ay + H * 0.16, w = (X(0.95) - X(0.58)) * pt;
      rrect(X(0.58), y - bh / 2, w, bh, bh / 2); ctx.fillStyle = "#e4e0ff"; ctx.fill(); outline(1.6); ctx.stroke();
      ctx.save(); ctx.globalAlpha *= pt; text("迟发性运动障碍", X(0.58) - H * 0.015, y + 1, f, C.ink, "right"); ctx.restore();
    }
    // 两种小人 + 结论
    const s = H * (n ? 0.045 : 0.05);
    const p1 = prog(4.5, 0.7), p3 = prog(8.5, 0.7);
    if (p1 > 0) {
      ctx.save(); ctx.globalAlpha *= p1;
      mini("dip", X(0.06), H * 0.95, s, { shadow: false });
      text(n ? "挡太多：僵、坐不住" : "D2 挡太多：僵住、坐不住", X(0.06) + s * 1.8, H * 0.95 - s * 1.5, f, C.skyDeep, "left");
      ctx.restore();
    }
    if (p3 > 0) {
      ctx.save(); ctx.globalAlpha *= p3;
      const tx = n ? X(0.56) : X(0.56);
      mini("td", tx, H * 0.95, s, { shadow: false });
      text(n ? "变多变灵：停不下来" : "D2 门变多变灵：停不下来", tx + s * 2.3, H * 0.95 - s * 1.5, f, C.rose, "left");
      ctx.restore();
    }
    const pk = prog(10.5, 0.6);
    if (pk > 0) {
      ctx.save(); ctx.globalAlpha *= pk;
      tagBox("详见《停不下来的小动作》", X(0.76), tsafe() + H * 0.08, f, "#fff", C.lavDeep, 1.4);
      ctx.restore();
    }
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.mintDeep, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#f6fbf8"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) bagView(S.v0);
    if (S.v1 > 0.02) stopView(S.v1);
    if (S.v2 > 0.02) achView(S.v2);
    if (S.v3 > 0.02) akaView(S.v3);
    if (S.v4 > 0.02) dysView(S.v4);
    if (S.v5 > 0.02) nmsView(S.v5);
    if (S.v6 > 0.02) lineView(S.v6);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#4fb893",
    titleCard: { lines: ["僵、抖、坐不住", "动作副作用从哪来？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
