Anima.register("basal-ganglia-loops", {
    "title": "直接通路和间接通路",
    "tag": "精神病与抗精神病药",
    "headline": "动作的【油门】和【刹车】：直接通路与间接通路",
    "lede": "一个动作从想到做，要先在大脑里绕一圈：皮层、纹状体、苍白球、丘脑，再回到皮层。丘脑平时被轻轻按住，纹状体里的两群神经元，一群负责松手，一群负责按得更紧。多巴胺同时管着这两群人。",
    "summary": "皮层-纹状体-丘脑环路、苍白球对丘脑的持续抑制、D1 直接通路（油门）和 D2 间接通路（刹车），多巴胺的一踩一松，以及多巴胺不足或 D2 被挡时动作为什么变慢变僵。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 皮层-纹状体-丘脑环路",
    "footer": "用药期间如果出现动作变慢、僵硬、手抖或坐立不安，请告诉医生；不要自行加药、减药或停药。",
    "canvasLabel": "皮层、纹状体、苍白球、丘脑和黑质被画成小镇居民，信号小光点沿着箭头绕环路传递的动画",
    "regions": ["striatum", "midbrain"],
    "parts": ["psychosis"],
    "cast": ["DA", "GABA", "Glu", "neuron", "drug"],
    "color": "#b5dcc8"
  }, () => {
  // 每幕给纹状体两群神经元的“输入”：d1、d2 是直接给定的兴奋程度；da 模式下由多巴胺算出来
  const CH = [
    { title: "绕一圈的环路", dan: 0, loop: 1,
      pill: ["环路", "绕一圈"], pill2: ["调度站", "纹状体"],
      text: "大脑发出一个动作之前，消息要先绕一圈：皮层把想法送到纹状体，纹状体交给苍白球，苍白球管着丘脑，丘脑再把消息送回皮层。这一圈叫皮层-纹状体-丘脑环路。纹状体像一个调度站，决定哪些动作放行、哪些先等一等。",
      fact: "动作指令要先绕一圈：皮层 → 纹状体 → 苍白球 → 丘脑 → 皮层" },
    { title: "丘脑平时被按住", dan: 0, loop: 0,
      pill: ["丘脑", "被按住"], pill2: ["递质", "GABA"],
      text: "先看终点前的一站。苍白球内侧部（还有黑质网状部）住着一群 GABA 神经元，它们平时自己就一直在放电，不停地给丘脑踩刹车。丘脑被按住，就送不出“开始动”的消息。这样很安全：没被选中的动作，都乖乖待在原地，不会乱冒出来。",
      fact: "苍白球内侧部平时持续放出 GABA，一直抑制着丘脑" },
    { title: "直接通路：油门", dan: 0, loop: 0,
      pill: ["直接通路", "油门"], pill2: ["受体", "D1"],
      text: "皮层想做一个动作，先用谷氨酸叫醒纹状体里带 D1 受体的神经元。它们直接连到苍白球内侧部，用 GABA 让这位“按住丘脑的人”安静下来。按手的人被按住了，丘脑就松开了，把“开始动”的消息送回皮层。抑制一个抑制者，结果是放行，这叫去抑制。",
      fact: "直接通路：D1 神经元抑制苍白球内侧部 → 丘脑被放开 → 动作启动" },
    { title: "间接通路：刹车", dan: 0, loop: 0,
      pill: ["间接通路", "刹车"], pill2: ["受体", "D2"],
      text: "纹状体里还有另一群神经元，带着 D2 受体，它们多绕一圈：先抑制苍白球外侧部；外侧部原本按着丘脑底核，一松手，丘脑底核就兴奋起来，用谷氨酸去催苍白球内侧部。内侧部更用力地按住丘脑，动作就停下来。这就是间接通路，像刹车。",
      fact: "间接通路：D2 神经元 → 苍白球外侧部 → 丘脑底核 → 苍白球内侧部，丘脑被按得更紧" },
    { title: "多巴胺：一踩一松", dan: 1, loop: 0,
      pill: ["多巴胺", "一踩一松"], pill2: ["动作", "顺畅"],
      text: "黑质的多巴胺沿着黑质纹状体通路送到纹状体，同时对两群神经元说话。对 D1 神经元，它是兴奋的，等于踩下直接通路的油门；对 D2 神经元，它是抑制的，等于松开间接通路的刹车。一踩一松，方向一致，丘脑更容易被放开，动作起得快、走得顺。",
      fact: "多巴胺经 D1 兴奋直接通路、经 D2 抑制间接通路，两边都让动作更顺畅" },
    { title: "刹车占了上风", dan: 1, loop: 0,
      pill: ["刹车", "占上风"], pill2: ["动作", "变慢变僵"],
      text: "如果多巴胺不够，比如帕金森病里黑质的多巴胺神经元越来越少，油门没人踩，刹车也没人松，间接通路占了上风，丘脑被按得紧紧的，动作变慢、变僵。抗精神病药挡住 D2 受体，刹车同样松不开，就可能出现锥体外系反应。类似的环路也经过纹状体的其他部分，管着情绪和思维。",
      fact: "多巴胺不足或 D2 被挡住 → 间接通路占优 → 动作变慢、僵硬" },
  ];
  const DUR = 14;
  const C = Object.assign({}, Anima.C, { exc: "#f0a93a", inh: "#8f84e0", d1: "#bfe8d6", d2: "#ffd0dc", da: "#ff9a52", box: "#fffdf8" });
  const { clamp, lerp, ease, alpha, outline, rrect, text, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { dan: 0, loop: 1 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const nw = () => Anima.narrow || W / H < 1.45;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (Anima.narrow ? 1.08 : 1);

  // ---------- 小模型：谁抑制谁，一站一站传下去 ----------
  // 每个值 0～1 表示放电多少；平滑时下游跟着上游慢慢变，所以能看见“因→果”一站一站传过去
  const A = { ctx: 0.3, d1: 0.1, d2: 0.1, gpe: 0.78, stn: 0.4, gpi: 0.7, thal: 0.25, da: 0.6, blk: 0 };
  function inputs() {
    const t = lt;
    if (cur === 0) return { ctx: 0.3, d1: 0.1, d2: 0.1, da: 0.6, blk: 0 };
    if (cur === 1) return { ctx: 0.2, d1: 0.05, d2: 0.05, da: 0.6, blk: 0 };
    if (cur === 2) { const on = t > 2 && t < 11.5 ? 1 : 0; return { ctx: on ? 1 : 0.2, d1: on ? 1 : 0.1, d2: 0.1, da: 0.6, blk: 0 }; }
    if (cur === 3) { const on = t > 2 && t < 11.5 ? 1 : 0; return { ctx: on ? 1 : 0.2, d1: 0.1, d2: on ? 1 : 0.1, da: 0.6, blk: 0 }; }
    if (cur === 4) { const da = t > 1.5 ? 1 : 0.35, drive = t > 5 ? 1 : 0.3; return { ctx: drive, da, blk: 0 }; }
    // 第 6 幕：前半多巴胺变少（帕金森病），后半多巴胺回来、D2 被药物挡住
    const pd = t < 7, da = pd ? lerp(1, 0.05, prog(0.5, 3)) : 1;
    return { ctx: 1, da, blk: pd ? 0 : prog(7.5, 1.5) };
  }
  function update(dt) {
    lt = Anima.sceneTime;
    const I = inputs(), k = 1 - Math.exp(-dt * 2.2);
    A.ctx = lerp(A.ctx, I.ctx, k); A.da = lerp(A.da, I.da, k); A.blk = lerp(A.blk, I.blk, k);
    let d1 = I.d1, d2 = I.d2;
    if (d1 == null) { // 多巴胺模式：D1 被兴奋、D2 被抑制（被药挡住时抑制不了）
      d1 = A.ctx * (0.3 + 0.6 * A.da);
      d2 = A.ctx * (0.9 - 0.75 * A.da * (1 - A.blk));
    }
    A.d1 = lerp(A.d1, d1, k); A.d2 = lerp(A.d2, d2, k);
    A.gpe = lerp(A.gpe, 0.85 - 0.75 * A.d2, k);
    A.stn = lerp(A.stn, 0.25 + 0.7 * (1 - A.gpe), k);
    A.gpi = lerp(A.gpi, clamp(0.75 - 0.5 * A.d1 + 1.0 * (A.stn - 0.4), 0.03, 1), k);
    A.thal = lerp(A.thal, clamp(1 - A.gpi * 1.05, 0, 1), k);
  }

  // ---------- 版面 ----------
  function geo() {
    const n = nw(), T = Anima.topSafe() / H;
    const s = n ? H * 0.045 : Math.min(H * 0.05, W * 0.04);
    const F = n ? { ctx: [0, T + 0.2], d1: [0.245, 0.6], d2: [0.245, 0.85], gpi: [0.55, 0.62], thal: [0.87, 0.62], gpe: [0.47, 0.92], stn: [0.73, 0.92], snc: [0.055, 0.9] }
      : { ctx: [0, T + 0.2], d1: [0.2, 0.52], d2: [0.2, 0.77], gpi: [0.55, 0.55], thal: [0.84, 0.55], gpe: [0.41, 0.92], stn: [0.64, 0.92], snc: [0.06, 0.95] };
    const P = {};
    for (const k in F) P[k] = { x: F[k][0] * W, y: F[k][1] * H };
    const bx = n ? 0.14 : 0.2, bw = n ? 0.48 : 0.6;
    const box = { x: W * bx, y: (T + 0.015) * H, w: W * bw, h: P.ctx.y - (T + 0.015) * H + s * 0.9 };
    const sx = n ? 0.12 : 0.06;
    const str = { x: W * sx, y: P.d1.y - s * 3.8, w: W * (n ? 0.25 : 0.27), h: P.d2.y - P.d1.y + s * 4.8 };
    // 放气泡和标注的空地：TR 右上，BR 右下，ML 中间偏左
    const slot = n ? { TR: [0.81, 0.29], BR: [0.81, 0.29], ML: [0.5, 0.71] } : { TR: [0.9, 0.24], BR: [0.86, 0.8], ML: [0.44, 0.67] };
    for (const k in slot) slot[k] = { x: slot[k][0] * W, y: slot[k][1] * H };
    return { s, P, box, str, n, slot };
  }
  // 两个角色之间的弯箭头：kind + 兴奋（橙）/ - 抑制（紫），act 决定粗细和小光点多少
  function bez(a, b, c, t) { return { x: (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * c.x + t * t * b.x, y: (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * c.y + t * t * b.y }; }
  function arrow(a, b, bend, kind, act, hl, seed) {
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1;
    const c = { x: mx - dy / L * bend * L, y: my + dx / L * bend * L };
    const col = kind > 0 ? C.exc : C.inh, w = Math.max(1.6, H * (0.004 + 0.008 * act));
    ctx.save();
    ctx.globalAlpha *= 0.35 + 0.65 * Math.max(act, hl);
    if (hl > 0.02) { ctx.strokeStyle = alpha(C.lemon, 0.9 * hl); ctx.lineWidth = w + H * 0.02; ctx.lineCap = "round"; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo(c.x, c.y, b.x, b.y); ctx.stroke(); }
    ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = "round";
    if (kind < 0) ctx.setLineDash([w * 2.2, w * 1.6]);
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo(c.x, c.y, b.x, b.y); ctx.stroke(); ctx.setLineDash([]);
    // 终点：兴奋画箭头，抑制画一条横杠（和教科书一样）
    const e = bez(a, b, c, 0.97), ang = Math.atan2(b.y - e.y, b.x - e.x), r = H * 0.022;
    ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(ang); ctx.fillStyle = col;
    if (kind > 0) { ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-r * 1.3, -r * 0.8); ctx.lineTo(-r * 1.3, r * 0.8); ctx.closePath(); ctx.fill(); }
    else { ctx.fillRect(-w, -r * 0.9, w * 2, r * 1.8); }
    ctx.restore();
    // 小光点：沿路跑的信号
    const n = Math.round(act * 4);
    for (let i = 0; i < n; i++) {
      const t = (time * (0.35 + act * 0.5) + i / Math.max(1, n) + (seed || 0) * 0.13) % 1, p = bez(a, b, c, t);
      glow(p.x, p.y, H * 0.022, col, 0.8);
      ctx.beginPath(); ctx.arc(p.x, p.y, H * 0.007, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill();
    }
    // 中间的小符号牌
    const m = bez(a, b, c, 0.5), fs = fsz(0.022, 10);
    ctx.beginPath(); ctx.arc(m.x, m.y, fs * 0.72, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.2); ctx.stroke();
    text(kind > 0 ? "+" : "−", m.x, m.y + 1, fs * 1.1, col);
    ctx.restore();
    return { a, b, c, pt: (t) => bez(a, b, c, t) };
  }
  function plate(x, y, w, h, label, color, fs) {
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.18)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 3;
    rrect(x, y, w, h, Math.min(18, h * 0.2)); ctx.fillStyle = C.box; ctx.fill(); ctx.restore();
    outline(1.8); rrect(x, y, w, h, Math.min(18, h * 0.2)); ctx.stroke();
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const tw = ctx.measureText(label).width + fs * 1.2;
    rrect(x + fs * 0.6, y - fs * 0.7, tw, fs * 1.4, fs * 0.7); ctx.fillStyle = color; ctx.fill(); outline(1.4); ctx.stroke();
    text(label, x + fs * 0.6 + tw / 2, y + 1, fs, C.ink);
  }
  // 按放电多少决定表情和灰度
  function mood(act) {
    return act > 0.6 ? { eyes: "happy", mouth: "grin", gray: 0 } : act > 0.3 ? { eyes: "open", mouth: "smile", gray: 0.15 } : { eyes: "sleepy", mouth: "flat", gray: 0.55 };
  }
  const O = (a, b) => Object.assign({}, a, b);

  function draw() {
    ctx.fillStyle = "#fbfaf4"; ctx.fillRect(0, 0, W, H);
    Anima.wash("#f5fbf6", "#fdf1f4");
    Anima.bokeh(7, "#d9f0e4", 0.7, 12);
    Anima.petals(5, 0.35, 31);
    const g = geo(), s = g.s, P = g.P, n = g.n, fs = fsz(0.026, 11);
    // 街区底板
    plate(g.box.x, g.box.y, g.box.w, g.box.h, "皮层", "#fff1b8", fs);
    plate(g.str.x, g.str.y, g.str.w, g.str.h, "纹状体", "#d9f0e4", fs);
    // 高亮哪条路
    const hlD = cur === 2 ? prog(1.5, 1) : 0, hlI = cur === 3 ? prog(1.5, 1) : cur === 5 ? 0.6 : 0, hlG = cur === 1 ? 1 : 0;
    const head = (p) => ({ x: p.x, y: p.y - s * 1.7 });
    const side = (p, d) => ({ x: p.x + d * s * 1.3, y: p.y - s * 1.5 });
    // 箭头
    const aCtx = arrow({ x: g.box.x + g.box.w * (n ? 0.4 : 0.24), y: g.box.y + g.box.h }, { x: g.str.x + g.str.w * 0.8, y: P.d1.y - s * 1.2 }, 0.12, 1, A.ctx, cur === 0 ? 0.5 * prog(1, 1) * (1 - prog(4, 1)) : 0, 1);
    const aD = arrow(side(P.d1, 1), side(P.gpi, -1), -0.12, -1, A.d1, hlD, 2);
    const aI1 = arrow({ x: P.d2.x + s * 1.2, y: P.d2.y - s * 0.8 }, side(P.gpe, -1), 0.15, -1, A.d2, hlI, 3);
    const aI2 = arrow(side(P.gpe, 1), side(P.stn, -1), -0.25, -1, A.gpe, hlI, 4);
    const aI3 = arrow({ x: P.stn.x + s * 0.4, y: P.stn.y - s * 3.2 }, { x: P.gpi.x + s * 0.6, y: P.gpi.y + s * 0.1 }, 0.15, 1, A.stn, hlI, 5);
    const aG = arrow(side(P.gpi, 1), side(P.thal, -1), -0.12, -1, A.gpi, Math.max(hlG, hlD, hlI), 6);
    const aT = arrow({ x: P.thal.x, y: P.thal.y - s * 3.4 }, { x: g.box.x + g.box.w * 0.93, y: g.box.y + g.box.h }, 0.1, 1, A.thal, cur === 2 ? prog(6, 1) : 0, 7);
    let aDA = null;
    if (S.dan > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.dan;
      aDA = arrow({ x: P.snc.x + s * 0.3, y: P.snc.y - s * 3.2 }, { x: P.d1.x - s * 1.3, y: (P.d1.y + P.d2.y) / 2 - s * 0.9 }, -0.15, 1, A.da * 0.9, 0, 8);
      ctx.restore();
    }
    // 第 1 幕：一个大光点绕环路走一圈
    if (S.loop > 0.02 && cur === 0 && lt > 1) {
      const legs = [aCtx, aD, aG, aT], q = ((lt - 1) * 0.28) % 1 * 4, leg = legs[Math.floor(q)], p = leg.pt(q % 1);
      glow(p.x, p.y, H * 0.05, C.gold, S.loop); sparkle(p.x, p.y, H * 0.022, S.loop);
    }
    // ---- 角色 ----
    // 皮层：发出指令的谷氨酸神经元 + 做动作的小人
    const cx0 = g.box.x + g.box.w * (n ? 0.2 : 0.24), cy0 = P.ctx.y, mx = g.box.x + g.box.w * 0.72;
    chara(cx0, cy0, s * 0.9, O({ who: "Glu", tag: n ? "" : "皮层神经元", arms: A.ctx > 0.6 ? "point" : "down" }, mood(A.ctx)));
    const mv = A.thal, stiff = cur === 5 && mv < 0.45;
    const mvx = mx + (mv > 0.45 ? Math.sin(time * 1.4) * g.box.w * 0.1 * mv : Math.sin(time * 30) * s * 0.03 * (stiff ? 1 : 0));
    chara(mvx, cy0, s * 0.9, O({ who: "neuron", hair: "#9c7b62", cloth: "#dff4ea", tag: "动作", walk: mv > 0.45 ? time * 10 * mv : null,
      arms: mv > 0.6 ? "wave" : stiff ? "down" : "down", dir: Math.cos(time * 1.4) > 0 ? 1 : -1, bob: mv > 0.45 ? 1 : 0 }, mv > 0.6 ? { eyes: "sparkle", mouth: "grin" } : mv > 0.35 ? { eyes: "open", mouth: "smile" } : { eyes: "open", mouth: "wavy", gray: 0.3 }));
    if (stiff) emote("sweat", mvx + s * 0.8, cy0 - s * 3, s * 0.5);
    if (mv > 0.6) emote("note", mvx + s * 0.9, cy0 - s * 3.1, s * 0.5);
    // 纹状体两群神经元
    const d1c = { who: "neuron", hair: "#4fb893", cloth: C.d1, hat: "cap", hatColor: "#8fd6b5", label: "D1", tag: "D1 神经元" };
    const d2c = { who: "neuron", hair: "#e87f9a", cloth: C.d2, hat: "cap", hatColor: "#f7a8c0", label: "D2", tag: "D2 神经元" };
    chara(P.d1.x, P.d1.y, s, O(d1c, O(mood(A.d1), { arms: A.d1 > 0.6 ? "up" : "down" })));
    chara(P.d2.x, P.d2.y, s, O(d2c, O(mood(A.d2), { arms: A.d2 > 0.6 ? "fist" : "down" })));
    if (A.d1 > 0.6) sparkles(P.d1.x, P.d1.y - s * 1.6, s * 1.6, 3, 1, 3);
    if (A.d2 > 0.6) sparkles(P.d2.x, P.d2.y - s * 1.6, s * 1.6, 3, 1, 4);
    // 苍白球内侧部：按住丘脑的人
    const gpiO = A.gpi > 0.55 ? { eyes: "angry", mouth: "flat", arms: "shh", gray: 0 } : O(mood(A.gpi), { arms: "down" });
    chara(P.gpi.x, P.gpi.y, s, O({ who: "GABA", tag: n ? "苍白球内侧" : "苍白球内侧部", dir: 1 }, gpiO));
    if (A.gpi < 0.3) emote("zzz", P.gpi.x + s, P.gpi.y - s * 3.2, s * 0.55);
    // 丘脑
    const th = A.thal;
    chara(P.thal.x, P.thal.y, s, O({ who: "neuron", hair: "#c9a27e", cloth: "#ffe0c4", tag: "丘脑", dir: -1 },
      th > 0.6 ? { eyes: "sparkle", mouth: "open", arms: "up", jump: Math.abs(Math.sin(time * 5)) * 0.2 } : th > 0.3 ? { eyes: "open", mouth: "smile", arms: "down" } : { eyes: "closed", mouth: "sad", arms: "hug", gray: 0.5 }));
    if (th < 0.25) emote("gloom", P.thal.x + s, P.thal.y - s * 3.1, s * 0.55);
    // 间接通路的两站
    chara(P.gpe.x, P.gpe.y, s * 0.9, O({ who: "GABA", tag: n ? "苍白球外侧" : "苍白球外侧部", hair: "#a99ee8" }, O(mood(A.gpe), { arms: A.gpe > 0.6 ? "shh" : "down" })));
    chara(P.stn.x, P.stn.y, s * 0.9, O({ who: "Glu", tag: "丘脑底核" }, O(mood(A.stn), { arms: A.stn > 0.6 ? "point" : "down" })));
    // 黑质：多巴胺的家
    if (S.dan > 0.02) {
      ctx.save(); ctx.globalAlpha *= S.dan;
      const lo = A.da < 0.4;
      chara(P.snc.x + s * 0.2, P.snc.y, s * 0.85, { who: "DA", tag: "黑质", eyes: lo ? "teary" : "happy", mouth: lo ? "sad" : "smile", arms: lo ? "down" : "wave", gray: lo ? 0.6 : 0 });
      // 飞向纹状体的多巴胺小快递员
      const nDA = Math.round(A.da * 3);
      for (let i = 0; i < nDA; i++) {
        const t = (time * 0.3 + i / 3) % 1, p = aDA.pt(t);
        chara(p.x, p.y + s * 0.4, s * 0.45, { who: "DA", eyes: "happy", shadow: false, bob: 0, alpha: Math.sin(t * Math.PI) });
      }
      // D1 身边：+ 油门；D2 身边：− 松刹车（被药挡住时是锁）
      if (A.da > 0.4) {
        const bf = fsz(0.022, 10);
        const tx = (P.d1.x + g.str.x + g.str.w) / 2 + s * 0.6;
        tagBox(n ? "油门 +" : "DA → 油门 +", tx, P.d1.y - s * 0.7, bf, "#e9f8f0", C.good);
        tagBox(A.blk > 0.5 ? (n ? "被挡住" : "D2 被挡：松不开") : (n ? "松刹车" : "DA → 松刹车"), tx, P.d2.y - s * 0.7, bf, A.blk > 0.5 ? "#ffe6ea" : "#f1eeff", A.blk > 0.5 ? C.bad : C.lavDeep);
      }
      ctx.restore();
    }
    // 第 6 幕后半：药物访客坐在 D2 神经元旁边
    if (cur === 5 && A.blk > 0.05) {
      const k = A.blk;
      chara(P.d2.x - s * (n ? 1.9 : 2.1), lerp(P.d2.y - s * 4, P.d2.y - s * 0.9, k), s * 0.7, { who: "drug", label: "", tag: "拮抗剂", eyes: "happy", mouth: "cat", arms: "hug", alpha: k, shadow: k > 0.9 });
    }
    // 图例
    const lf = fsz(0.021, 10), ly = H - lf * 1.3, lx = n ? W - lf * 7.6 : W - lf * 8;
    if (!n && cur < 4) {
      text("→ 兴奋", lx, ly - lf * 1.5, lf, C.exc, "left");
      text("⊣ 抑制", lx, ly, lf, C.inh, "left");
    }

    // ---- 标注和对话（每幕 1～3 个标注 + 1～2 个气泡；手机上同一时刻只留一两个）----
    const q = (c, a, b) => cur === c && lt > a && lt < b, L = g.slot;
    const strR = { x: g.str.x + g.str.w, y: g.str.y + g.str.h * 0.45 };
    // 第 1 幕
    callout("l-str", q(0, 1.5, 13), strR.x, strR.y, L.ML.x, L.ML.y, "纹状体：调度站");
    callout("l-thal", q(0, 4.5, n ? 6.3 : 13), P.thal.x, n ? P.thal.y - s * 3.2 : P.thal.y + s * 0.2, n ? W * 0.8 : L.BR.x, n ? H * 0.45 : H * 0.7, n ? "丘脑：中转站" : "丘脑：回皮层的中转站");
    say("s-loop", q(0, 6.5, 13.5), L.TR.x, L.TR.y, L.TR.x, L.TR.y, "想做的动作，先绕一圈再放行", "box");
    // 第 2 幕
    const gm = aG.pt(0.5);
    callout("l-tonic", q(1, 1, 13), gm.x, gm.y, n ? W * 0.72 : gm.x, H * (n ? 0.71 : 0.72), n ? "一直抑制丘脑" : "一直放电：持续抑制");
    say("s-hold", q(1, 2.5, n ? 7.5 : 13.5), P.gpi.x + s * 0.5, P.gpi.y - s * 3, L.TR.x, L.TR.y, "先别动，等命令～", "say");
    say("s-th", q(1, 8, 13.5), P.thal.x, P.thal.y - s * 3, L.BR.x, L.BR.y, "被按住了……", "think");
    // 第 3 幕
    callout("l-d1", q(2, 2.5, 7), P.d1.x + s * 0.8, P.d1.y - s * 2, L.ML.x, L.ML.y, "D1 神经元被叫醒");
    callout("l-dis", q(2, 7.5, 13), P.gpi.x, P.gpi.y - s * 1.5, L.ML.x, L.ML.y, n ? "去抑制" : "按手的人被按住 → 去抑制");
    say("s-go", q(2, 7.5, 13.5), P.thal.x, P.thal.y - s * 3.4, L.BR.x, L.BR.y, "松开啦，开始动！", "shout");
    // 第 4 幕
    callout("l-d2", q(3, 2.5, 7.5), P.d2.x + s, P.d2.y - s * 2.2, L.ML.x, L.ML.y, n ? "D2 神经元" : "D2 神经元：多绕一圈");
    callout("l-stn", q(3, 7.5, 13), P.stn.x, P.stn.y - s * 3, n ? W * 0.76 : P.stn.x + W * 0.12, H * (n ? 0.76 : 0.7), n ? "丘脑底核兴奋" : "丘脑底核兴奋，催苍白球");
    say("s-stop", q(3, 8, 13.5), P.thal.x, P.thal.y - s * 3, L.TR.x, L.TR.y, "又被按紧了，停下～", "think");
    // 第 5 幕
    const dm = aDA ? aDA.pt(0.45) : { x: 0, y: 0 };
    callout("l-nigro", q(4, 1.5, 8) && !n, dm.x, dm.y, L.ML.x, L.ML.y + H * 0.04, "黑质纹状体通路");
    say("s-da", q(4, 2, 8), L.TR.x, L.TR.y, L.TR.x, L.TR.y, "多巴胺：一边踩油门，一边松刹车", "box");
    say("s-smooth", q(4, 8.5, 14), mvx + s * 0.6, cy0 - s * 2.8, L.TR.x, L.TR.y, "走得好顺～", "say");
    // 第 6 幕
    say("s-pd", q(5, 1.5, n ? 4.5 : 7), L.BR.x, L.BR.y, L.BR.x, L.BR.y, "帕金森病：多巴胺越来越少", "box");
    say("s-drug", q(5, 8.5, 14), L.BR.x, L.BR.y, L.BR.x, L.BR.y, "抗精神病药挡住 D2：刹车松不开", "box");
    callout("l-eps", n ? q(5, 5, 8.3) : q(5, 4, 14), mvx + s * 0.7, cy0 - s * 1.6, n ? W * 0.8 : W * 0.9, n ? H * 0.34 : H * 0.2, "动作变慢、变僵");
    Anima.pill(14, 12, CH[cur].pill[0], CH[cur].pill[1], "#4fb893", false);
    Anima.pill(W - 14, 12, CH[cur].pill2[0], CH[cur].pill2[1], "#8f84e0", true);
  }
  function tagBox(t, x, y, fs, bg, fg) {
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 0.9, h = fs * 1.45;
    x = clamp(x, w / 2 + 4, W - w / 2 - 4);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg; ctx.fill(); outline(1.2); ctx.stroke();
    text(t, x, y + 1, fs, fg);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#4fb893",
    titleCard: { lines: ["动作的油门", "和刹车"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
