Anima.register("tardive", {
    "title": "停不下来的小动作",
    "tag": "抗精神病药",
    "headline": "门铃装太多：【迟发性运动障碍】",
    "lede": "长期挡住多巴胺的 D2 门，纹状体会悄悄多装几扇门，还把门铃调得特别灵。于是嘴巴、舌头、脸上出现停不下来的小动作。怎样早点发现？VMAT2 抑制剂又是怎么帮忙的？",
    "summary": "长期 D2 阻断后受体变多变敏感、迟发性运动障碍的表现、和急性锥体外系反应的区别、风险因素、AIMS 量表定期检查，以及 VMAT2 抑制剂。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 迟发性运动障碍",
    "footer": "如果发现自己或家人嘴巴、舌头、脸或手脚出现不自主的小动作，请告诉医生；不要自行停用或更换抗精神病药。",
    "canvasLabel": "纹状体的神经元悄悄多装了几扇 D2 门，VMAT2 装箱员把多巴胺装进囊泡的动画",
    "regions": ["striatum"],
    "parts": ["psychosis"],
    "cast": ["DA", "drug"],
    "color": "#9fd0ee"
  }, () => {
  const CH = [
    { title: "门铃装太多、太灵", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["D2 受体", "变多变灵"], pill2: ["原因", "长期被挡"],
      text: "抗精神病药长期挡住纹状体里的 D2 门，多巴胺的铃声总是传不进来。神经元以为“门铃是不是坏了”，就悄悄多装了几扇 D2 门，还把每一扇都调得格外灵敏。这是一种代偿：门铃装太多、太灵，一点点多巴胺就能让它们响个不停。这种变化通常要用药几个月到几年，才慢慢出现。",
      fact: "长期阻断 D2 受体后，纹状体的 D2 受体会代偿性地变多、变敏感" },
    { title: "停不下来的小动作", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["常见", "嘴·舌·脸"], pill2: ["自己", "常察觉不到"],
      text: "门铃太灵的结果，是出现一些自己控制不了的小动作，这叫迟发性运动障碍。最常见在嘴巴、舌头和脸上：咂嘴、噘嘴、舌头在嘴里打转、频繁眨眼；有时手指、手脚或身体也会不停地动。很多人自己察觉不到，反而是家人先注意到。这不是故意的，也不是坏习惯，发现了就告诉医生。",
      fact: "迟发性运动障碍多表现为口、舌、面部的不自主运动，也可累及手脚和躯干" },
    { title: "僵住，还是停不下来", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["早期", "僵住"], pill2: ["长期", "停不下来"],
      text: "它和刚开始吃药时可能出现的急性锥体外系反应不一样。急性反应多在开始用药或加量后不久出现，是 D2 被挡得太多，人会“僵住”：肌肉发紧、手抖、坐立不安，调整以后通常能好转。迟发性运动障碍则在长期用药后才出现，是门铃太多太灵，人会“停不下来”，而且可能持续很久。",
      fact: "急性锥体外系反应出现早、像“僵住”；迟发性运动障碍出现晚、像“停不下来”" },
    { title: "谁更容易出现", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["风险", "时间·年龄"], pill2: ["第二代", "低≠零"],
      text: "谁更容易出现呢？用药时间越长、年纪越大，风险越高；用药早期出现过明显急性锥体外系反应的人，风险也更高一些。第二代抗精神病药引起它的风险比第一代低，但并不是零。所以不管用哪一种药，只要是长期服用，就值得一直留意。",
      fact: "用药时间长、年龄大是迟发性运动障碍的重要风险因素；第二代药风险较低但不是零" },
    { title: "定期检查：AIMS", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["量表", "AIMS"], pill2: ["检查", "定期做"],
      text: "长期用药期间，医生会定期检查有没有不自主运动，常用的工具是 AIMS 量表，也就是异常不自主运动量表。医生会请你坐好、张开嘴、伸伸舌头、做几个简单的动作，仔细看看脸、嘴唇、下巴、舌头、手、脚和躯干。检查不疼也不麻烦，越早发现，越容易处理。",
      fact: "AIMS（异常不自主运动量表）常用来定期筛查和评估迟发性运动障碍" },
    { title: "VMAT2：少装一点", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["VMAT2", "少装一点"], pill2: ["抗精神病药", "别自己停"],
      text: "现在有专门的药：VMAT2 抑制剂，比如缬苯那嗪和氘丁苯那嗪。VMAT2 是末梢里的“装箱员”，负责把多巴胺装进囊泡。药物让它少装一些，每次放出的多巴胺就少了，太灵的门铃不再响个不停，小动作随之减轻。千万不要自己停抗精神病药：突然停药可能让病情复发，怎么调整，要和医生一起商量。",
      fact: "VMAT2 抑制剂减少多巴胺装进囊泡，释放减少，从而减轻迟发性运动障碍" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { d2: "#9fd0ee", post: "#dff4ea", term: "#ffd6c4", nigro: "#4fb893" });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };

  const nw = () => W / H < 1.45;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (Anima.narrow ? 1.08 : 1);
  const prog = (t0, d) => ease((lt - t0) / d);
  const tsafe = () => Anima.topSafe();
  const O = (base, o) => Object.assign({}, base, o || {});
  const D2X = { who: "drug", label: "D2", hatColor: "#ff9aa9", hatColor2: "#ffffff" };
  const FGA = { who: "drug", label: "", hatColor: "#ff9aa9", hatColor2: "#ffffff" };
  const SGA = { who: "drug", label: "", hatColor: "#8fcbe8", hatColor2: "#ffffff" };
  const VMI = { who: "drug", label: "", hatColor: "#b5e3c9", hatColor2: "#ffffff" };
  // VMAT2 装箱员：用 chara 的覆盖参数造出来的新角色
  const VMAT = { who: "neuron", hair: "#7fb3d5", eye: "#3f7fae", cloth: "#dff0ff", hat: "cap", hatColor: "#a8d8f0", label: "VMAT2", style: "short" };
  const RES = { who: "neuron", hair: "#9c7b62", cloth: "#ffe7c7" };

  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
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
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, Math.min(18, w * 0.08)); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, Math.min(18, w * 0.08)); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.032, 11), w * 0.09);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.3;
      rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
    ctx.restore();
  }
  function banner(lines, y, a, bx) {
    if (a <= 0) return;
    const bf = fsz(0.03, 11);
    ctx.save(); ctx.globalAlpha *= a;
    ctx.font = `${bf}px ${Anima.ROUND}`;
    const bw = Math.min(W - 12, Math.max.apply(null, lines.map((l) => ctx.measureText(l).width)) + bf * 3.6), bh = bf * (1.1 + lines.length * 1.35);
    const X = clamp(bx == null ? W / 2 : bx, bw / 2 + 6, W - bw / 2 - 6);
    ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    rrect(X - bw / 2, y - bh / 2, bw, bh, bf * 0.8); ctx.fillStyle = "#fff4f7"; ctx.fill(); ctx.restore();
    outline(2); ctx.strokeStyle = C.rose; ctx.stroke();
    Anima.heart(X - bw / 2 + bf * 1.1, y, bf * 0.5, C.rose); Anima.heart(X + bw / 2 - bf * 1.1, y, bf * 0.5, C.rose);
    lines.forEach((l, j) => text(l, X, y + (j - (lines.length - 1) / 2) * bf * 1.35 + 1, bf, C.ink));
    ctx.restore();
  }
  // 门铃：挂在 D2 门旁边的小金铃，ring 0～1 时左右摇
  function bell(x, y, r, ring) {
    const sw = ring * Math.sin(time * 22) * 0.5;
    ctx.save(); ctx.translate(x, y); ctx.rotate(sw);
    outline(Math.max(1, r * 0.12)); ctx.beginPath(); ctx.moveTo(0, -r * 1.3); ctx.lineTo(0, -r * 0.9); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-r * 0.8, r * 0.5); ctx.quadraticCurveTo(-r * 0.75, -r * 0.95, 0, -r * 0.95); ctx.quadraticCurveTo(r * 0.75, -r * 0.95, r * 0.8, r * 0.5); ctx.closePath();
    ctx.fillStyle = "#ffd36e"; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, r * 0.6, r * 0.22, 0, Math.PI * 2); ctx.fillStyle = "#e7a23a"; ctx.fill(); ctx.stroke();
    ctx.restore();
    if (ring > 0.3) {
      ctx.save(); ctx.globalAlpha *= ring; ctx.strokeStyle = "#e7a23a"; ctx.lineWidth = Math.max(1, r * 0.12);
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.arc(x, y, r * 1.5, d > 0 ? -0.5 : Math.PI - 0.5 + 1, d > 0 ? 0.5 : Math.PI + 0.5); ctx.stroke(); }
      ctx.restore();
    }
  }
  // 小动作的“抖动线”：画在嘴边、手边
  function wiggle(x, y, r, a) {
    if (a < 0.02) return;
    ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = C.lavDeep; ctx.lineWidth = Math.max(1.4, r * 0.14); ctx.lineCap = "round";
    for (let k = 0; k < 3; k++) {
      const q = -0.8 + k * 0.8 + Math.sin(time * 9 + k) * 0.15;
      ctx.beginPath(); ctx.arc(x, y, r * (1 + k * 0.1), q - 0.25, q + 0.25); ctx.stroke();
    }
    ctx.restore();
  }
  // 小动作：嘴型循环
  const MOUTHS = ["o", "cat", "wavy", "flat", "o", "smile"];
  const busyMouth = (sp, k) => MOUTHS[Math.floor(time * sp + (k || 0)) % MOUTHS.length];

  // ---------- 第 1 幕：门铃装太多 ----------
  function growView(a) {
    const n = nw(), t = cur === 0 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f2fbf6", "#e8f3ee");
    Anima.bokeh(6, "#cdeede", 0.7, 13);
    const post = H * (n ? 0.62 : 0.6);
    Anima.postMembrane(post, C.post, {});
    const x0 = W * (n ? 0.07 : 0.07), x1 = W * (n ? 0.93 : 0.66);
    const N = 9, sp = (x1 - x0) / (N - 1);
    const rs = Math.min(H * 0.048, sp * 0.3), cs = Math.min(H * 0.042, sp * 0.28);
    const old = [0, 2, 4, 6, 8];
    let firstNew = null, firstOld = null;
    for (let i = 0; i < N; i++) {
      const x = x0 + i * sp, isOld = old.indexOf(i) >= 0;
      const k = isOld ? 1 : prog(3.5 + (i % 4) * 0.7, 0.8);
      if (k <= 0) continue;
      ctx.save(); ctx.translate(x, post); ctx.scale(k, k); ctx.translate(-x, -post);
      const sens = isOld ? 0 : 0.45 + 0.35 * Math.abs(Math.sin(time * 3 + i));
      const r = Anima.receptor(x, post, rs, C.d2, isOld ? 0.03 : sens * (t > 8 ? 1 : 0.5), { label: "D2" });
      ctx.restore();
      if (isOld) {
        chara(x, r.site.y, cs * 1.02, O(D2X, { eyes: t > 2 ? "sleepy" : "happy", mouth: "cat", arms: "hug", shadow: false, bob: 0.3 }));
        if (!firstOld) firstOld = { x, y: r.site.y };
      } else {
        bell(x + rs * 0.95, post - rs * 1.9, rs * 0.35, t > 8 ? 1 : 0.3);
        if (k > 0.9 && !firstNew) firstNew = { x, y: post - rs * 1.2 };
        if (k > 0.2 && k < 0.95) sfx("啵", x, post - rs * 2.4, fsz(0.03, 11), C.skyDeep, -0.1, 1);
      }
    }
    // 第 8 秒以后：偶尔路过的一位多巴胺，就让一大串门铃响起来
    if (t > 8 && t < 99) {
      const q = ((t - 8) * 0.18) % 1, dx = lerp(x0 - sp, x1 + sp, q);
      chara(dx, post - H * 0.16 - Math.abs(Math.sin(time * 5)) * H * 0.01, cs * 0.9, { who: "DA", eyes: "wide", mouth: "o", arms: "up", shadow: false, walk: time * 8 });
      const fq = fsz(0.034, 12); // 字别跑出画面
      sfx("叮铃铃", clamp(dx, fq * 2.2, W - fq * 2.2), post - H * 0.31, fq, "#e7a23a", -0.1, 0.9);
    }
    // 右上：日历翻页
    if (!n) {
      const cw = W * 0.2, ch = H * 0.26, cx = W - cw - W * 0.04, cy = tsafe() + H * 0.06;
      const page = t < 3 ? 0 : t < 6 ? 1 : 2, labels = ["用药第 1 个月", "第 1 年", "几年以后"];
      rrect(cx, cy, cw, ch, 10); ctx.fillStyle = "#fff"; ctx.fill(); outline(2); ctx.stroke();
      ctx.fillStyle = "#ffb3c7"; rrect(cx, cy, cw, ch * 0.26, 10); ctx.fill(); outline(2); ctx.stroke();
      for (let k = 0; k < 2; k++) { ctx.beginPath(); ctx.arc(cx + cw * (0.3 + k * 0.4), cy, ch * 0.05, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke(); }
      text("日历", cx + cw / 2, cy + ch * 0.13, fsz(0.024, 10), C.ink);
      const flip = t < 99 ? clamp((t % 3) / 0.4, 0, 1) : 1;
      ctx.save(); ctx.globalAlpha *= flip;
      text(labels[page], cx + cw / 2, cy + ch * 0.62, fsz(0.034, 12), C.ink);
      ctx.restore();
    } else {
      const page = t < 3 ? 0 : t < 6 ? 1 : 2, labels = ["第 1 个月", "第 1 年", "几年以后"];
      tagBox("📅 " + labels[page], W * 0.78, tsafe() + H * 0.1, fsz(0.03, 11), "#fff", C.ink, 1.3);
    }
    // 膜下：神经元居民扛着新的门
    const s = H * (n ? 0.06 : 0.065), rx = W * (n ? 0.5 : 0.36) + Math.sin(time * 0.7) * W * 0.05, fy = H * 0.97;
    chara(rx, fy, s, O(RES, { arms: "carry", eyes: t > 3 ? "happy" : "open", mouth: t > 3 ? "grin" : "o", walk: time * 7, dir: Math.cos(time * 0.7) > 0 ? 1 : -1 }));
    Anima.receptor(rx, fy - s * 3.3, s * 0.5, C.d2, 0.1, { dir: -1 });
    const on = cur === 0;
    callout("blocked", on && t > 0.8 && t < 3.8 && !!firstOld, firstOld ? firstOld.x : 0, firstOld ? firstOld.y - cs * 1.5 : 0, W * (n ? 0.4 : 0.34), H * (n ? 0.32 : 0.3), n ? "D2 长期被挡" : "D2 长期被药物挡住");
    say("more", on && t > 2.5 && t < 8, rx, fy - s * 3.9, W * (n ? 0.22 : 0.6), H * (n ? 0.78 : 0.8), n ? "再多装几个！" : "门铃不响？再多装几个！", "say"); // 手机：一行，不挡右下角小人的脸
    callout("grow", on && t > 6 && !!firstNew, firstNew ? firstNew.x : 0, firstNew ? firstNew.y : 0, W * (n ? 0.25 : 0.62), H * (n ? 0.92 : 0.84), n ? "D2 变多、变灵" : "代偿：D2 变多、变敏感");
    ctx.restore();
  }

  // ---------- 第 2 幕：停不下来的小动作 ----------
  function tdView(a) {
    const n = nw(), t = cur === 1 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff7ee", "#fdeef3");
    Anima.bokeh(6, "#ffd1dc", 0.7, 23);
    Anima.petals(6, 0.4, 33);
    // 小客厅
    const floor = H * 0.9;
    ctx.fillStyle = "#f2dfcf"; ctx.fillRect(0, floor, W, H - floor);
    outline(2); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    const s = H * (n ? 0.13 : 0.15), x = W * (n ? 0.34 : 0.34), fy = H * 1.02;
    const blink = Math.sin(time * 3.1) > 0.7;
    const mouth = busyMouth(3.2);
    const hand = Math.floor(time * 4) % 2 ? "hug" : "hold";
    chara(x, fy, s, O(RES, { eyes: blink ? "closed" : "open", mouth, arms: hand, dir: 1, bob: 0.3, look: Math.sin(time * 1.3) * 0.8 }));
    const mouthPt = { x: x + s * 0.05, y: fy - s * 1.62 }, handPt = { x: x, y: fy - s * 0.82 };
    const k = prog(1, 1);
    wiggle(mouthPt.x + s * 0.5, mouthPt.y, s * 0.35, k);
    wiggle(handPt.x - s * 0.55, handPt.y, s * 0.3, k * (t > 5 ? 1 : 0.4));
    if (Math.sin(time * 3.2) > 0.6) sfx("吧唧", mouthPt.x + s * 1.3, mouthPt.y - s * 0.5, fsz(0.045, 13), C.lavDeep, -0.1, k * 0.8);
    // 旁边的家人，温和地注意到
    const fx = W * (n ? 0.8 : 0.72), fs2 = H * (n ? 0.075 : 0.085);
    chara(fx, floor, fs2, { who: "neuron", hair: "#8f6a4e", style: "bob", cloth: "#cfe6f7", eyes: t > 7 ? "happy" : "open", mouth: "smile", arms: t > 7 ? "wave" : "down", dir: -1 });
    if (t > 7) emote("heart", fx - fs2, floor - fs2 * 3.2, fs2 * 0.5);
    const on = cur === 1;
    callout("mouth", on && t > 1.5 && (!n || t < 10.2), mouthPt.x + s * 0.3, mouthPt.y, W * (n ? 0.62 : 0.62), H * (n ? 0.3 : 0.26), n ? "嘴巴、舌头、脸" : "最常见：嘴巴、舌头、脸");
    callout("limbs", on && t > 4.5, handPt.x - s * 0.5, handPt.y, W * (n ? 0.22 : 0.14), H * (n ? 0.94 : 0.95), n ? "有时手脚、躯干" : "有时：手指、手脚、躯干");
    say("fam", on && t > 7 && t < 11, fx, floor - fs2 * 3.2, W * (n ? 0.72 : 0.78), H * (n ? 0.52 : 0.46), "你的嘴巴一直在动呢，我们告诉医生吧～", "say");
    say("self", on && t > 10.5, x, fy - s * 3.2, W * (n ? 0.3 : 0.34), H * (n ? 0.3 : 0.26), "咦？我自己都没发觉……", "think");
    ctx.restore();
  }

  // ---------- 第 3 幕：僵住 vs 停不下来 ----------
  function vsView(a) {
    const n = nw(), t = cur === 2 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f8ff", "#fdeef3");
    Anima.bokeh(6, "#e3dcff", 0.7, 43);
    const top = tsafe() + H * 0.07, gap = W * 0.035, cw = (W - gap * 3) / 2, ch = H * 0.9 - top;
    const cards = [
      { t: "急性锥体外系反应", col: "#dcefff", when: n ? "用药早期" : "开始用药、加量后不久", why: "D2 被挡得太多", sfxT: "僵住", sc: C.skyDeep },
      { t: "迟发性运动障碍", col: "#ffd9e4", when: n ? "长期用药后" : "长期用药以后", why: "门铃太多、太灵", sfxT: "停不下来", sc: C.rose },
    ];
    let heads = [];
    cards.forEach((c, i) => {
      const p = prog(0.3 + i * 1.5, 0.8);
      const x = gap + i * (cw + gap), cx = x + cw / 2;
      card(x, top, cw, ch, c.t, c.col, p);
      if (p <= 0) { heads.push(null); return; }
      ctx.save(); ctx.globalAlpha *= p;
      const f = Math.min(fsz(0.027, 10), cw / 10);
      text(c.when, cx, top + ch * 0.1, f, C.soft);
      // 小门示意
      const my = top + ch * 0.32, rs = Math.min(H * 0.03, cw * 0.06);
      outline(1.4); ctx.beginPath(); ctx.moveTo(x + cw * 0.12, my); ctx.lineTo(x + cw * 0.88, my); ctx.stroke();
      const nd = i ? 6 : 3;
      for (let k = 0; k < nd; k++) {
        const rx = x + cw * (0.2 + k * (0.6 / Math.max(1, nd - 1)));
        const r = Anima.receptor(rx, my, rs, C.d2, i ? 0.6 + 0.3 * Math.abs(Math.sin(time * 5 + k)) : 0.03, {});
        if (!i) chara(rx, r.site.y, rs * 0.8, O(D2X, { label: "", shadow: false, bob: 0, eyes: "happy" }));
        else if (k % 2) bell(rx + rs * 0.9, my - rs * 1.9, rs * 0.35, 1);
      }
      text(c.why, cx, my + rs * 1.3, f, C.ink);
      // 角色
      const s = Math.min(H * 0.07, cw * 0.12), fy = top + ch * 0.8;
      if (!i) {
        const jit = Math.sin(time * 40) * s * 0.04;
        chara(cx + jit, fy, s, O(RES, { eyes: "wide", mouth: "flat", arms: "down", bob: 0, gray: 0.35, brow: "worry" }));
        emote("sweat", cx + s, fy - s * 3.2, s * 0.5);
        // 僵住：身体两侧的直线
        outline(2); ctx.beginPath(); ctx.moveTo(cx - s * 1.2, fy - s * 2.6); ctx.lineTo(cx - s * 1.2, fy - s * 0.4); ctx.moveTo(cx + s * 1.2, fy - s * 2.6); ctx.lineTo(cx + s * 1.2, fy - s * 0.4); ctx.stroke();
      } else {
        const sway = Math.sin(time * 2.6) * s * 0.3;
        chara(cx + sway, fy, s, O(RES, { eyes: Math.sin(time * 3) > 0.7 ? "closed" : "open", mouth: busyMouth(3.4, 2), arms: Math.floor(time * 4) % 2 ? "hug" : "down", bob: 1, hair: "#b08968" }));
        wiggle(cx + sway + s * 0.6, fy - s * 1.6, s * 0.35, 1);
      }
      heads.push({ x: cx, y: fy - s * 3.2 });
      sfx(c.sfxT, cx, top + ch * 0.93, fsz(0.045, 14), c.sc, i ? 0.06 : -0.06, n && t < 99 && (i ? t > 5 : t > 2 && t < 9.5) ? 0 : 1);
      ctx.restore();
    });
    const on = cur === 2;
    const h1 = heads[1];
    callout("long", on && t > 5 && !!h1, h1 ? h1.x + W * 0.04 : 0, h1 ? h1.y + H * 0.1 : 0, n ? W * 0.75 : W * 0.85, n ? H * 0.93 : H * 0.54, n ? "可能持续很久" : "可能持续很久");
    const h0 = heads[0];
    say("stiff", on && t > 2 && t < 9 && !!h0, h0 ? h0.x : 0, h0 ? h0.y : 0, W * (n ? 0.25 : 0.37), H * (n ? 0.9 : 0.56), n ? "身体好僵……" : "肌肉发紧，身体好僵……", "say");
    ctx.restore();
  }

  // ---------- 第 4 幕：谁更容易出现 ----------
  function riskView(a) {
    const n = nw(), t = cur === 3 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#f4effd");
    Anima.bokeh(6, "#ffe7a3", 0.7, 53);
    const top = tsafe() + H * 0.07;
    // 左：风险因素卡片
    const lx = W * 0.04, lw = W * (n ? 0.44 : 0.4), lh = (H * 0.93 - top - H * 0.06) / 3;
    const facs = [
      { t: "用药时间越长", ic: "cal" },
      { t: "年纪越大", ic: "old" },
      { t: "早期急性反应明显", ic: "stiff" },
    ];
    let fac0 = null;
    facs.forEach((f, i) => {
      const p = prog(0.5 + i * 1.3, 0.7);
      if (p <= 0) return;
      const y = top + i * (lh + H * 0.03);
      ctx.save(); ctx.globalAlpha *= p; ctx.translate((1 - p) * -W * 0.05, 0);
      card(lx, y, lw, lh, null, null, 1);
      const is = Math.min(lh * 0.28, lw * 0.1), ix = lx + lw * 0.16, iy = y + lh * 0.5;
      if (f.ic === "cal") {
        rrect(ix - is, iy - is, is * 2, is * 2, 4); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
        ctx.fillStyle = "#ffb3c7"; ctx.fillRect(ix - is + 1, iy - is + 1, is * 2 - 2, is * 0.6);
        text(String(1 + Math.floor(time * 1.5) % 9) + "年", ix, iy + is * 0.3, is * 0.7, C.ink);
      } else if (f.ic === "old") {
        chara(ix, iy + is * 1.4, is * 0.75, { who: "neuron", hair: "#e3dcd8", glasses: true, style: "bun", eyes: "happy", ahoge: false, shadow: false });
      } else {
        chara(ix, iy + is * 1.4, is * 0.75, O(RES, { eyes: "wide", mouth: "flat", gray: 0.35, shadow: false, bob: 0 }));
      }
      const ft = Math.min(fsz(0.03, 11), lw * 0.62 / f.t.length);
      text(f.t, lx + lw * 0.6, iy, ft, C.ink);
      text("↑ 风险", lx + lw * 0.6, iy + ft * 1.3, Anima.narrow ? Math.max(10.5, ft * 0.8) : ft * 0.8, C.bad); // 手机：小字别太小
      ctx.restore();
      if (i === 0) fac0 = { x: lx + lw, y: iy };
    });
    // 右：两根风险柱
    const bx0 = W * (n ? 0.6 : 0.56), bx1 = W * (n ? 0.86 : 0.8), bb = H * 0.8, bt = top + H * 0.08;
    const bw = W * (n ? 0.1 : 0.08);
    outline(2); ctx.beginPath(); ctx.moveTo(bx0 - bw, bb); ctx.lineTo(bx1 + bw, bb); ctx.stroke();
    const grow = prog(4.5, 1.5);
    [[bx0, 0.85, "#ff9aa9", FGA, "第一代"], [bx1, 0.35, "#8fcbe8", SGA, "第二代"]].forEach((b, i) => {
      const h = (bb - bt) * b[1] * grow;
      rrect(b[0] - bw / 2, bb - h, bw, h, Math.min(8, h / 2)); ctx.fillStyle = b[2]; ctx.fill(); outline(1.8); ctx.stroke();
      const s = H * (n ? 0.045 : 0.05);
      chara(b[0], bb - h, s, O(b[3], { eyes: "happy", mouth: i ? "smile" : "flat", arms: i ? "wave" : "down", shadow: false, tag: b[4] }));
    });
    text("迟发性运动障碍风险", (bx0 + bx1) / 2, bb + fsz(0.028, 11) * 2.6, fsz(0.026, 10), C.soft); // 留出名牌的位置
    const on = cur === 3;
    const hy = bb - (bb - bt) * 0.35 * grow - H * 0.05 * 3.2;
    callout("notzero", on && t > 6.5, bx1 + bw * 0.5, bb - (bb - bt) * 0.2, W * (n ? 0.8 : 0.84), H * (n ? 0.9 : 0.9), "较低，但不是零");
    say("sga", on && t > 8.5, bx1, hy, W * (n ? 0.74 : 0.78), top + H * (n ? 0.02 : 0.03), "我的风险低一些，但也要留意哦～", "say");
    callout("factors", on && t > 1 && t < 6.5 && !!fac0, fac0 ? fac0.x : 0, fac0 ? fac0.y : 0, W * (n ? 0.7 : 0.66), H * (n ? 0.5 : 0.5), n ? "这些会让风险升高" : "这些情况，风险更高");
    ctx.restore();
  }

  // ---------- 第 5 幕：AIMS 定期检查 ----------
  function aimsView(a) {
    const n = nw(), t = cur === 4 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f3fbff", "#eef4fb");
    Anima.bokeh(6, "#cfe7f7", 0.7, 63);
    const floor = H * 0.9;
    ctx.fillStyle = "#e6eef5"; ctx.fillRect(0, floor, W, H - floor);
    outline(2); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    const s = H * (n ? 0.07 : 0.085);
    // 医生
    const dx = W * (n ? 0.1 : 0.1);
    chara(dx, floor, s, { who: "neuron", hair: "#6d5a45", style: "short", cloth: "#ffffff", glasses: true, eyes: "happy", mouth: t > 1 && t < 5 ? "open" : "smile", arms: "hold", item: "book", dir: 1 });
    // 居民坐在小凳子上
    const rx = W * (n ? 0.32 : 0.3);
    rrect(rx - s * 0.9, floor - s * 0.5, s * 1.8, s * 0.25, 4); ctx.fillStyle = "#c9a27e"; ctx.fill(); outline(1.5); ctx.stroke();
    outline(1.8); ctx.beginPath(); ctx.moveTo(rx - s * 0.7, floor - s * 0.25); ctx.lineTo(rx - s * 0.7, floor); ctx.moveTo(rx + s * 0.7, floor - s * 0.25); ctx.lineTo(rx + s * 0.7, floor); ctx.stroke();
    const phase = t < 3 ? "open" : t < 6 ? "o" : "smile";
    chara(rx, floor - s * 0.2, s, O(RES, { eyes: "happy", mouth: phase, arms: t > 6 && t < 9 ? "up" : "down", dir: -1 }));
    if (t < 6) emote("note", rx - s, floor - s * 3.6, s * 0.5);
    // 右：检查清单
    const items = ["面部表情", "嘴唇", "下巴", "舌头", "手和手臂", "腿和脚", "躯干"];
    const bx = W * (n ? 0.52 : 0.5), bw = W * (n ? 0.45 : 0.44), by = tsafe() + H * 0.07, bh = floor - by - H * 0.04;
    card(bx, by, bw, bh, "AIMS 检查清单", "#dcefff", 1);
    const cols = n ? 1 : 2, rows = Math.ceil(items.length / cols);
    const ih = (bh - H * 0.08) / rows, f = Math.min(fsz(0.03, 11), ih * 0.5);
    items.forEach((it, i) => {
      const c = Math.floor(i / rows), r = i % rows;
      const x = bx + bw * (cols === 1 ? 0.14 : 0.1 + c * 0.48), y = by + H * 0.06 + r * ih + ih / 2;
      const done = prog(1.2 + i * 1.1, 0.4);
      rrect(x - f * 0.6, y - f * 0.6, f * 1.2, f * 1.2, 3); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.4); ctx.stroke();
      if (done > 0) {
        ctx.save(); ctx.globalAlpha *= done; ctx.strokeStyle = C.good; ctx.lineWidth = Math.max(2, f * 0.18); ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x - f * 0.35, y); ctx.lineTo(x - f * 0.05, y + f * 0.3); ctx.lineTo(x + f * 0.45, y - f * 0.4); ctx.stroke();
        ctx.restore();
      }
      text(it, x + f * 1.1, y + 1, f, C.ink, "left");
    });
    const on = cur === 4;
    say("tongue", on && t > 1 && t < 6.5, dx, floor - s * 3.2, W * (n ? 0.22 : 0.2), H * (n ? 0.5 : 0.5), "张开嘴，伸伸舌头～", "say");
    callout("aims", on && t > (n ? 6.5 : 3) && (!n || t < 9), bx + bw * 0.5, by, W * (n ? 0.25 : 0.3), H * (n ? 0.45 : 0.26), n ? "AIMS：不自主运动量表" : "AIMS：异常不自主运动量表"); // 手机：写短一点，放在清单左边，不压住清单
    say("easy", on && t > 9, rx, floor - s * 3.4, W * (n ? 0.26 : 0.28), H * (n ? 0.5 : 0.5), "不疼，一会儿就好啦", "say");
    ctx.restore();
  }

  // ---------- 第 6 幕：VMAT2 抑制剂 ----------
  function vmatView(a) {
    const n = nw(), t = cur === 5 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff4ef", "#eef7fb");
    Anima.bokeh(6, "#ffd9c2", 0.6, 73);
    const post = H * (n ? 0.8 : 0.8);
    Anima.postMembrane(post, C.post, {});
    const tcx = W * (n ? 0.4 : 0.36), tw = W * (n ? 0.74 : 0.56), th = H * (n ? 0.52 : 0.52);
    const T = Anima.terminal(tcx, 0, tw, th, C.term);
    text(n ? "多巴胺末梢" : "多巴胺神经末梢（纹状体）", tcx, th * 0.84, fsz(0.024, 10), C.soft);
    const inh = cur === 5 ? prog(4, 1.5) : 1;
    let inhPt = null;
    // 装箱台：左边排队的多巴胺，VMAT2 把它们送进大囊泡
    const cs = Math.min(H * 0.05, W * 0.045);
    const vx = tcx + tw * 0.2, vy = th * 0.5, vr = H * 0.07;
    const vmx = vx - vr * 2.4, vmy = vy + vr * 1.3;
    const period = lerp(1.1, 3.2, inh);
    const nIn = Math.round(lerp(6, 2, inh));
    Anima.vesicle(vx, vy, vr, Anima.CAST.DA.hair, nIn, 3);
    // 送进囊泡的那位
    const q = (time % period) / period;
    const from = { x: vmx + cs * 1.3, y: vmy }, to = { x: vx - vr * 0.2, y: vy + cs * 0.6 };
    if (q < 0.6) {
      const k = ease(q / 0.6);
      chara(lerp(from.x, to.x, k), lerp(from.y, to.y, k) - Math.sin(k * Math.PI) * cs, cs * 0.8, { who: "DA", eyes: "happy", mouth: "open", arms: "up", shadow: false, alpha: 1 - Math.max(0, (k - 0.8) * 5) });
    }
    chara(vmx, vmy, cs * 1.15, O(VMAT, { eyes: inh > 0.5 ? "open" : "happy", mouth: inh > 0.5 ? "wavy" : "grin", arms: q < 0.6 ? "point" : "hold", dir: 1, tag: "VMAT2" }));
    // 抑制剂访客
    if (inh > 0.02) {
      const ix = lerp(-cs * 3, vmx - cs * 2.7, inh);
      chara(n ? vmx - cs * 3.3 : ix, vmy, // 手机：再往左一点，名牌不和“VMAT2”叠在一起
       cs * 1.1, O(VMI, { eyes: "happy", mouth: "cat", arms: "shh", dir: 1, alpha: inh, tag: "抑制剂" }));
      if (lt > 4.5 || cur !== 5) inhPt = { x: n ? vmx - cs * 2.7 : ix, y: vmy - cs * 1.5 };
    }
    // 靠在膜边的囊泡，放出多巴胺
    const relX = [tcx - tw * 0.25, tcx + tw * 0.2];
    relX.forEach((x, i) => Anima.vesicle(x, th - H * 0.06, H * 0.04, Anima.CAST.DA.hair, Math.round(lerp(5, 2, inh)), 7 + i));
    const nOut = Math.round(lerp(5, 1, inh));
    for (let k = 0; k < nOut; k++) {
      const tt = (time * 0.3 + k / nOut) % 1;
      const x = relX[k % 2] + (k - 2) * W * 0.03, y = lerp(th + cs * 2.6, post - H * 0.06, tt);
      ctx.save(); ctx.globalAlpha *= Math.sin(tt * Math.PI);
      chara(x, y, cs * 0.75, { who: "DA", eyes: "sparkle", mouth: "open", arms: "up", shadow: false, seed: k });
      ctx.restore();
    }
    // D2 门（变多、变灵）和门铃
    const x0 = W * 0.06, x1 = W * (n ? 0.66 : 0.64), rs = Math.min(H * 0.04, W * 0.03);
    let ringSum = lerp(1, 0.15, inh);
    for (let i = 0; i < 8; i++) {
      const x = lerp(x0, x1, i / 7);
      Anima.receptor(x, post, rs, C.d2, ringSum * (0.5 + 0.5 * Math.abs(Math.sin(time * 5 + i))), {});
      if (i % 2) bell(x + rs * 0.95, post - rs * 1.9, rs * 0.35, ringSum);
    }
    // 右下：居民的小动作慢慢平静
    const s = H * (n ? 0.06 : 0.07), rx = W * (n ? 0.84 : 0.84), fy = post - H * 0.005;
    const calm = inh > 0.8 && t > 8 ? 1 : 0;
    chara(rx, fy, s, O(RES, { eyes: calm ? "happy" : "open", mouth: calm ? "smile" : busyMouth(3), arms: calm ? "wave" : (Math.floor(time * 4) % 2 ? "hug" : "down"), dir: -1 }));
    wiggle(rx - s * 0.6, fy - s * 1.6, s * 0.35, 1 - inh * (t > 8 ? 1 : 0.5));
    if (calm) emote("note", rx + s, fy - s * 3.3, s * 0.5);
    const on = cur === 5;
    callout("pack", on && t > 0.8 && t < 4.5, vmx, vmy - cs * 2, W * (n ? 0.66 : 0.78), H * (n ? 0.62 : 0.3), n ? "VMAT2：装箱员" : "VMAT2：把多巴胺装进囊泡");
    callout("names", on && t > 5 && t < (n ? 8.5 : 7.6) && !!inhPt, inhPt ? inhPt.x : 0, inhPt ? inhPt.y : 0, W * (n ? 0.5 : 0.78), H * (n ? 0.62 : 0.5), n ? "缬苯那嗪、氘丁苯那嗪" : "VMAT2 抑制剂：缬苯那嗪、氘丁苯那嗪");
    say("half", on && t > 5 && t < (n ? 8.5 : 10), vmx, vmy - cs * 3.6, W * (n ? 0.7 : 0.8), H * (n ? 0.3 : 0.3), "今天少装一点～", "say");
    callout("less", on && t > (n ? 8.5 : 8), relX[1], th + H * 0.02, W * (n ? 0.66 : 0.8), H * (n ? 0.62 : 0.5), n ? "少装 → 少放" : "少装一点 → 放出的少一点");
    banner(n ? ["别自己停抗精神病药", "调整要和医生商量"] : ["不要自己停抗精神病药，调整要和医生商量"], H * (n ? 0.9 : 0.92), on ? prog(10.5, 0.8) : 0);
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.skyDeep, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) growView(S.v0);
    if (S.v1 > 0.02) tdView(S.v1);
    if (S.v2 > 0.02) vsView(S.v2);
    if (S.v3 > 0.02) riskView(S.v3);
    if (S.v4 > 0.02) aimsView(S.v4);
    if (S.v5 > 0.02) vmatView(S.v5);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#6fb9e0",
    titleCard: { lines: ["停不下来的", "小动作"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
