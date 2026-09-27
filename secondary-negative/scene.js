Anima.register("secondary-negative", {
    "title": "药让人没劲？继发性阴性症状",
    "tag": "精神病与抗精神病药",
    "headline": "挡住警报，也挡住了【快乐】：继发性阴性症状",
    "lede": "抗精神病药挡住伏隔核的 D2 门，过多的“警报信”进不来了，可奖赏和动力的信也一起被挡在门外；开往前额叶的皮层线本来就车少，再被挡一下更冷清。于是人可能变得提不起劲。它和疾病本身的阴性症状怎么区分？又能怎么办？",
    "summary": "阻断中脑边缘 D2 同时削弱奖赏和动机、阻断中脑皮层 D2 让阴性和认知症状加重，原发与继发阴性症状的区分，以及减量、换药、辅助用药等思路。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 阻断 D2 引起继发性阴性症状",
    "footer": "用药期间如果觉得开心不起来、没动力、表情变少，请告诉医生；不要自行减药、停药或换药。",
    "canvasLabel": "药物访客坐进伏隔核的 D2 门，警报信和爱心信都被挡在门外，神经元居民慢慢变灰的动画",
    "regions": ["nac", "pfc"],
    "parts": ["psychosis"],
    "cast": ["DA", "drug", "neuron"],
    "color": "#f7b8c8"
  }, () => {
  const CH = [
    { title: "一扇门，两种信", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["伏隔核", "D2 门"], pill2: ["一扇门", "两种信"],
      text: "伏隔核是中脑边缘通路的终点站，常被叫作大脑的“快乐中心”。这里的 D2 门平时要收两种信：一种是奖赏和动力的信，吃到美食、听到喜欢的歌、和朋友聊天时的开心，都要经过它；另一种是“这很重要”的警报信。精神病发作时，警报信多得泛滥，于是出现幻觉和妄想。",
      fact: "伏隔核的 D2 受体既和阳性症状有关，也参与奖赏和动机" },
    { title: "一挡，两种都挡", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0,
      pill: ["D2", "被挡住"], pill2: ["代价", "快乐变少"],
      text: "抗精神病药坐进 D2 门的锁孔，警报信进不来了，幻觉和妄想慢慢安静下来，这是我们想要的疗效。可是门卫分不清信的内容，奖赏和动力的信也一起被挡在门外。为了压住过多的警报，有时要把这条线挡得很彻底，快乐的信号跟着变少，这就是治疗付出的代价。",
      fact: "阻断中脑边缘的 D2 能减轻阳性症状，但也会削弱奖赏信号" },
    { title: "药物带来的“没劲”", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0,
      pill: ["名称", "继发性阴性"], pill2: ["原因", "药物"],
      text: "于是人可能变得提不起劲：喜欢的东西没以前香了，这叫快感缺失；想做的事迟迟开不了头，对朋友也没兴趣，表情和情感变淡。这很像疾病本身的阴性症状，但原因在药物，所以叫继发性阴性症状，也有人称它为“神经阻滞剂引起的缺陷综合征”。它可能让人不想再吃药，也有人会借吸烟等方式找回快感。",
      fact: "由药物引起、酷似阴性症状的状态，叫继发性阴性症状" },
    { title: "皮层线：雪上加霜", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0,
      pill: ["前额叶", "本就车少"], pill2: ["再挡", "雪上加霜"],
      text: "再看开往前额叶的中脑皮层线。在精神分裂症里，这条线的多巴胺本来就可能偏少。皮层里的 D2 门虽然不多，药物一样会把它们挡住，本来就稀少的信号更难送到。结果可能让阴性症状加重，注意力、做计划这些认知功能，以及情绪，也可能跟着变差。",
      fact: "阻断中脑皮层通路的 D2，可能让阴性、认知和情感症状加重" },
    { title: "原发还是继发", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0,
      pill: ["原发", "病本身"], pill2: ["继发", "药物等"],
      text: "所以看到“没劲、没表情”，要先想想从哪里来。原发性阴性症状来自疾病本身，常在发病前后就有，比较顽固；继发性的和药物有关，常在开始用药或加量以后出现、变重。还有几位“长得很像”的：抑郁、药物引起的动作变慢和表情变少、因为幻听害怕而躲着人、白天太困。区分它们，要靠医生仔细观察和询问。",
      fact: "原发性阴性症状来自疾病本身；继发性阴性症状来自药物等其他原因" },
    { title: "可以怎么办", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1,
      pill: ["对策", "医生决定"], pill2: ["提醒", "别自己停药"],
      text: "如果和药物有关，医生可能会考虑几种办法：在症状稳住的前提下调整剂量，让一部分奖赏信号重新通过；换用耐受更好的药，比如同时阻断 5-HT2A 的药，或 D2 部分激动剂；有时加用治疗抑郁的药等辅助药物。还有一些新药正在研究中。要不要调、怎么调，都由医生决定，千万不要自己减药或停药。",
      fact: "减量、换药或加用辅助药物都可能有帮助，具体方案由医生决定" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, { d2: "#9fd0ee", post: "#ffe0ea", term: "#ffd6c4", cort: "#8f84e0", meso: "#f28ca5" });
  const { clamp, lerp, ease, outline, rrect, text, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0 };

  const nw = () => Anima.narrow || W / H < 1.45;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (Anima.narrow ? 1.08 : 1);
  const prog = (t0, d) => ease((lt - t0) / d);
  const tsafe = () => Anima.topSafe();
  const O = (base, o) => Object.assign({}, base, o || {});
  const D2X = { who: "drug", label: "", hatColor: "#ff9aa9", hatColor2: "#ffffff" };
  const RES = { who: "neuron", hair: "#b08968", cloth: "#ffe7c7" };
  const FRIEND = { who: "neuron", hair: "#8f6a4e", style: "bob", cloth: "#cfe6f7" };

  function update() { lt = Anima.sceneTime; }

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
      const fs = Math.min(fsz(0.032, 11), w * 0.8 / Math.max(4, title.length));
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.3;
      rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
    ctx.restore();
  }
  function banner(t, y, a) {
    if (a <= 0) return;
    const bf = fsz(0.03, 11);
    ctx.save(); ctx.globalAlpha *= a;
    ctx.font = `${bf}px ${Anima.ROUND}`;
    const bw = Math.min(W - 12, ctx.measureText(t).width + bf * 3.6), bh = bf * 2.2;
    rrect(W / 2 - bw / 2, y - bh / 2, bw, bh, bf * 0.8); ctx.fillStyle = "#fff4f7"; ctx.fill();
    outline(2); ctx.strokeStyle = C.rose; ctx.stroke();
    Anima.heart(W / 2 - bw / 2 + bf * 1.1, y, bf * 0.5, C.rose); Anima.heart(W / 2 + bw / 2 - bf * 1.1, y, bf * 0.5, C.rose);
    text(t, W / 2, y + 1, bf, C.ink);
    ctx.restore();
  }
  // 信上的记号：爱心（奖赏和动力）或感叹号（“这很重要”的警报）
  function badge(kind, x, y, s) {
    if (kind) Anima.heart(x, y, s * 0.55, C.rose);
    else {
      ctx.beginPath(); ctx.arc(x, y, s * 0.55, 0, Math.PI * 2); ctx.fillStyle = "#ffe08a"; ctx.fill(); outline(1.2); ctx.stroke();
      text("!", x, y + 1, s * 0.8, C.bad);
    }
  }

  // ---------- 突触：伏隔核（第 1、2 幕）和前额叶（第 4 幕） ----------
  // o: { doors, n, alarmOf(i), blk(k), period, cx, tw, color }
  function synapse(o) {
    const n = nw();
    const post = H * 0.6, th = H * 0.3;
    Anima.postMembrane(post, C.post, {});
    const sp = o.tw * (o.doors > 2 ? 0.24 : 0.46);
    const rs = Math.min(H * 0.05, o.tw * 0.06), cs = Math.min(H * 0.04, o.tw * 0.05);
    const doors = [];
    let arrivals = 0;
    const cour = [];
    for (let k = 0; k < o.doors; k++) {
      const x = o.cx + (k - (o.doors - 1) / 2) * sp;
      doors.push({ x, b: o.blk(k), act: 0 });
    }
    // 快递员：走到门前；门被药物占着就被弹回去
    for (let i = 0; i < o.n; i++) {
      const d = doors[i % o.doors], ph = time / o.period + i / o.n + 0.13, p = ph % 1;
      const kind = o.alarmOf(i + Math.floor(ph) * 3) ? 0 : 1;
      const sx = d.x + (i % 2 ? 1 : -1) * o.tw * 0.05, sy = th + cs * 3.4;
      const siteY = post - rs * 1.62;
      let x, y, a = 1, eyes = "happy", arms = "hold", item = "letter", mouth = "smile";
      if (d.b > 0.5) {
        const stopY = siteY - cs * 3.2;
        if (p < 0.45) { const k = ease(p / 0.45); x = lerp(sx, d.x + cs * 0.4, k); y = lerp(sy, stopY, k); }
        else { const k = (p - 0.45) / 0.55; x = d.x + cs * 0.4 + k * o.tw * 0.08; y = stopY - Math.sin(k * Math.PI) * H * 0.05 - k * H * 0.08; eyes = "teary"; mouth = "o"; a = 1 - k; if (k < 0.25) sfx("咚", d.x + cs * 1.8, stopY - cs * 2.6, fsz(0.03, 11), C.skyDeep, 0.1, 1); }
      } else {
        if (p < 0.5) { const k = ease(p / 0.5); x = lerp(sx, d.x, k); y = lerp(sy, siteY, k); }
        else { x = d.x; y = siteY; arms = "up"; item = null; mouth = "grin"; a = p > 0.85 ? (1 - p) / 0.15 : 1; d.act = Math.max(d.act, a); arrivals += kind ? 1 : 0; }
      }
      a *= clamp(p * 8, 0, 1);
      cour.push({ x, y, a, kind, i });
      if (a < 0.03) continue;
      chara(x, y, cs, { who: "DA", eyes, arms, item, mouth, alpha: a, walk: p < 0.5 ? time * 9 + i : null, shadow: false, seed: i });
      ctx.save(); ctx.globalAlpha *= a; badge(kind, x + cs * 1.05, y - cs * 1.4, cs * 0.8); ctx.restore();
    }
    doors.forEach((d) => {
      const r = Anima.receptor(d.x, post, rs, C.d2, d.b > 0.5 ? 0.03 : d.act, { label: "D2" });
      d.site = r.site;
    });
    // 药物访客走进来，坐进锁孔
    doors.forEach((d, k) => {
      if (d.b <= 0) return;
      const fx = -W * 0.08, fy = post - H * 0.12;
      const x = lerp(fx, d.x, d.b), y = lerp(fy, d.site.y, d.b) - Math.sin(d.b * Math.PI) * H * 0.06;
      chara(x, y, cs * 1.02, O(D2X, { eyes: "happy", mouth: "cat", arms: d.b >= 1 ? "hug" : "down", walk: d.b < 1 ? time * 9 : null, shadow: false, bob: 0.3 }));
    });
    Anima.terminal(o.cx, 0, o.tw, th, C.term);
    return { post, doors, cour, cs, rs, th, n };
  }

  // ---------- 第 1、2 幕：伏隔核 ----------
  function nacView(a) {
    const n = nw(), t = cur <= 1 ? lt : 99, blocked = cur === 1;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff4f2", "#fdeef3");
    Anima.bokeh(6, "#ffd1dc", 0.7, 11);
    Anima.petals(6, 0.4, 21);
    const cx = W * (n ? 0.42 : 0.4), tw = W * (n ? 0.74 : 0.56);
    const g = synapse({ doors: 4, n: 4, cx, tw, period: 4.2, alarmOf: (i) => (blocked ? i % 2 === 0 : i % 3 !== 0), blk: (k) => (blocked ? prog(0.6 + k * 0.6, 1.2) : 0) });
    tagBox("伏隔核 · 中脑边缘线", n ? W * 0.3 : W * 0.2, H * 0.68, fsz(0.028, 11), "#fff", C.ink, 1.3);
    // 膜下的居民：收到爱心信就开心，收到太多警报就紧张
    const gr = blocked ? 0.85 * prog(5, 3) : 0;
    const rs = H * (n ? 0.065 : 0.07), rx = W * (n ? 0.86 : 0.86), ry = H * 0.97;
    const beat = Math.floor(time / 1.6) % 3;
    chara(rx, ry, rs, O(RES, { gray: gr, eyes: gr > 0.5 ? "sleepy" : beat === 0 ? "wide" : "happy", mouth: gr > 0.5 ? "flat" : beat === 0 ? "wavy" : "smile", arms: gr > 0.5 ? "down" : "hug", dir: -1 }));
    if (gr > 0.5) emote("gloom", rx, ry - rs * 3.4, rs * 0.6);
    else if (!blocked) emote(beat === 0 ? "!" : "heart", rx - rs * 0.9, ry - rs * 3.3, rs * 0.55);
    // 标注
    const pick = (kind) => { for (const c of g.cour) if (c.kind === kind && c.a > 0.8 && c.y < g.post - g.rs * 3) return c; return null; };
    const hc = pick(1), ac = pick(0);
    const L1 = n ? [W * 0.26, H * 0.8] : [W * 0.2, H * 0.8], L2 = n ? [W * 0.26, H * 0.9] : [W * 0.44, H * 0.9];
    if (cur === 0) {
      callout("heartL", t > 1 && t < 12.5 && !!hc, hc ? hc.x + g.cs : 0, hc ? hc.y - g.cs * 1.5 : 0, L1[0], L1[1], n ? "爱心信：奖赏和动力" : "爱心信：奖赏、动力、开心");
      callout("alarmL", t > 4 && !!ac, ac ? ac.x + g.cs : 0, ac ? ac.y - g.cs * 1.5 : 0, L2[0], L2[1], n ? "警报信：发病时太多" : "警报信：“这很重要”，发病时太多");
    }
    if (cur === 1) {
      const d0 = g.doors[1];
      callout("calm", t > 3 && t < 8, d0.x, g.post - g.rs * 3.5, L1[0], L1[1], n ? "警报少了：阳性症状减轻" : "警报被挡：幻觉、妄想减轻 ✓");
      callout("cost", t > 7.5, g.doors[3].x, g.post - g.rs * 3.5, L2[0], L2[1], n ? "爱心信也进不来" : "爱心信也被挡：快乐和动力变少");
      say("sigh", t > 8.5, rx, ry - rs * 3.4, W * (n ? 0.68 : 0.78), H * (n ? 0.4 : 0.42), n ? "唉……\n没什么意思" : "唉……好像什么都没意思", "think");
    }
    ctx.restore();
  }

  // ---------- 第 3 幕：客厅里的“没劲” ----------
  function cake(x, y, s) {
    rrect(x - s, y - s * 0.9, s * 2, s * 0.9, s * 0.15); ctx.fillStyle = "#fff0e0"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.fillStyle = "#ffc2d1"; rrect(x - s, y - s * 0.95, s * 2, s * 0.3, s * 0.15); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y - s * 1.15, s * 0.22, 0, Math.PI * 2); ctx.fillStyle = C.bad; ctx.fill(); ctx.stroke();
  }
  function radio(x, y, s) {
    rrect(x - s, y - s * 1.1, s * 2, s * 1.1, s * 0.2); ctx.fillStyle = "#ffe7a3"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.beginPath(); ctx.arc(x - s * 0.4, y - s * 0.55, s * 0.32, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + s * 0.5, y - s * 1.1); ctx.lineTo(x + s * 0.9, y - s * 1.7); ctx.stroke();
  }
  function roomView(a) {
    const n = nw(), t = cur === 2 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ef", "#f6effb");
    Anima.bokeh(5, "#ffe0c2", 0.6, 31);
    const floor = H * 0.9;
    ctx.fillStyle = "#f2dfcf"; ctx.fillRect(0, floor, W, H - floor);
    outline(2); ctx.beginPath(); ctx.moveTo(0, floor); ctx.lineTo(W, floor); ctx.stroke();
    // 右边（手机：上面）三张症状小卡
    const items = [["快感缺失", "喜欢的东西不香了"], ["没动力", "想做的事开不了头"], ["情感平淡", "表情和情绪变淡"]];
    const f = fsz(0.03, 11);
    let firstCard = null;
    items.forEach((it, i) => {
      const p = prog(1.5 + i * 2.6, 0.7);
      if (p <= 0) return;
      let x, y, w, h;
      if (n) { w = W * 0.31; h = f * 3.4; x = W * 0.02 + i * (w + W * 0.015); y = tsafe() + H * 0.02; }
      else { w = W * 0.34; h = H * 0.15; x = W * 0.63; y = tsafe() + H * 0.05 + i * (h + H * 0.05); }
      ctx.save(); ctx.globalAlpha *= p;
      card(x, y, w, h, null, null, 1);
      const ff = Math.min(f, w * 0.85 / it[1].length);
      text(it[0], x + w / 2, y + h * 0.33, ff * 1.08, C.lavDeep);
      text(it[1], x + w / 2, y + h * 0.7, ff, C.ink);
      ctx.restore();
      if (i === 0) firstCard = { x, y, w, h };
    });
    // 居民坐在小桌前，药物访客在旁边“嘘——”
    const s = H * (n ? 0.075 : 0.085), rx = W * (n ? 0.3 : 0.2);
    const tx0 = rx + s * 1.3, tw = s * 3.2, ty = floor - s * 1.3;
    chara(rx, floor, s, O(RES, { gray: 0.7, eyes: "sleepy", mouth: "flat", arms: "down", dir: 1, bob: 0.2 }));
    emote("gloom", rx, floor - s * 3.5, s * 0.55);
    rrect(tx0, ty, tw, s * 0.25, 4); ctx.fillStyle = "#d9b48f"; ctx.fill(); outline(1.5); ctx.stroke();
    outline(1.8); ctx.beginPath(); ctx.moveTo(tx0 + tw * 0.15, ty); ctx.lineTo(tx0 + tw * 0.15, floor); ctx.moveTo(tx0 + tw * 0.85, ty); ctx.lineTo(tx0 + tw * 0.85, floor); ctx.stroke();
    const kc = prog(1, 0.6), kr = prog(4, 0.6);
    if (kc > 0) { ctx.save(); ctx.globalAlpha *= kc; cake(tx0 + tw * 0.3, ty, s * 0.42); sparkles(tx0 + tw * 0.3, ty - s * 0.6, s * 0.8, 3, 0.8, 5); ctx.restore(); }
    if (kr > 0) {
      ctx.save(); ctx.globalAlpha *= kr; radio(tx0 + tw * 0.72, ty, s * 0.36); ctx.restore();
      for (let k = 0; k < 3; k++) { const q = (time * 0.5 + k / 3) % 1; emote("note", tx0 + tw * 0.72 + q * s * 1.2, ty - s * 0.9 - q * s * 1.4, s * 0.35 * kr * (1 - q)); }
    }
    const dx = rx - s * 1.6;
    chara(dx, floor, s * 0.8, O(D2X, { eyes: "happy", mouth: "smile", arms: "shh", dir: 1 }));
    // 朋友从右边走进来招手
    const fk = prog(7, 1.6), fx = lerp(W * (n ? 1.08 : 0.66), W * (n ? 0.84 : 0.52), fk);
    if (t > 6.8) chara(fx, floor, s * 0.95, O(FRIEND, { eyes: "happy", mouth: "open", arms: fk >= 1 ? "wave" : "down", walk: fk < 1 ? time * 9 : null, dir: -1 }));
    const on = cur === 2;
    say("invite", on && t > 8.6 && t < 12, fx, floor - s * 3.1, W * (n ? 0.72 : 0.5), H * (n ? 0.46 : 0.42), "一起出去玩吧！", "say");
    say("meh", on && t > 10, rx, floor - s * 3.3, W * (n ? 0.3 : 0.3), H * (n ? 0.46 : 0.4), "嗯……下次吧", "think");
    callout("shh", on && t > 2.5 && t < 8.5, dx, floor - s * 2.4, W * (n ? 0.2 : 0.14), H * (n ? 0.5 : 0.36), n ? "原因是药物" : "原因在药物，不在病本身");
    callout("name", on && t > 2 && !n, rx + s * 0.8, floor - s * 2.6, W * 0.4, H * 0.2, "继发性阴性症状");
    ctx.restore();
  }

  // ---------- 第 4 幕：前额叶 ----------
  function pfcView(a) {
    const n = nw(), t = cur === 3 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f4f2ff", "#eef0fb");
    Anima.bokeh(5, "#ddd5fa", 0.7, 41);
    const cx = W * (n ? 0.36 : 0.32), tw = W * (n ? 0.5 : 0.38);
    const g = synapse({ doors: 2, n: 1, cx, tw, period: 5, alarmOf: () => false, blk: (k) => (cur === 3 ? prog(3 + k * 0.9, 1.2) : 0) });
    tagBox("前额叶 · 中脑皮层线", n ? W * 0.28 : W * 0.2, H * 0.68, fsz(0.028, 11), "#fff", C.ink, 1.3);
    // 计划板：信号越少，字越乱
    const blur = cur === 3 ? prog(6, 3) : 1;
    const bx = W * (n ? 0.08 : 0.06), bw = W * (n ? 0.3 : 0.2), by = H * 0.74, bh = H * 0.2;
    rrect(bx, by, bw, bh, 8); ctx.fillStyle = "#fbf6e9"; ctx.fill(); outline(1.8); ctx.stroke();
    text("今天的计划", bx + bw / 2, by + bh * 0.2, fsz(0.024, 10), C.ink);
    ctx.strokeStyle = C.lavDeep; ctx.lineWidth = 2;
    for (let k = 0; k < 2; k++) {
      const yy = by + bh * (0.5 + k * 0.26);
      ctx.beginPath();
      for (let j = 0; j <= 16; j++) { const xx = bx + bw * 0.12 + j * bw * 0.76 / 16, w = Math.sin(j * 1.7 + k + time * 2) * bh * 0.07 * blur; if (j) ctx.lineTo(xx, yy + w); else ctx.moveTo(xx, yy + w); }
      ctx.stroke();
    }
    const rs = H * (n ? 0.06 : 0.065), rx = bx + bw + W * (n ? 0.08 : 0.07), ry = H * 0.97;
    chara(rx, ry, rs, O(RES, { gray: 0.25 + blur * 0.55, eyes: blur > 0.5 ? "dizzy" : "open", mouth: blur > 0.5 ? "wavy" : "flat", arms: "down", dir: -1 }));
    if (blur > 0.5) emote("?", rx + rs, ry - rs * 3.3, rs * 0.55);
    // 右侧：三种症状可能加重
    const rows = [["阴性症状", "↑"], ["认知症状", "↑"], ["情感症状", "↑"]];
    const f = fsz(0.032, 12);
    const x0 = W * (n ? 0.8 : 0.8);
    rows.forEach((r, i) => {
      const p = prog(7 + i * 1.2, 0.6);
      if (p <= 0) return;
      const y = tsafe() + H * (n ? 0.1 : 0.14) + i * f * 2.6;
      ctx.save(); ctx.globalAlpha *= p;
      tagBox(r[0] + " " + r[1], x0, y, f, "#fff4f7", C.bad, 1.4);
      ctx.restore();
    });
    const on = cur === 3;
    const d0 = g.doors[0];
    callout("few", on && t > 0.8 && t < 3.2, d0.x, g.post - g.rs * 1.2, W * (n ? 0.78 : 0.72), H * (n ? 0.66 : 0.62), n ? "D2 门本来就不多" : "皮层里的 D2 门本来就不多");
    callout("blk", on && t > 4.4 && t < 9.5, g.doors[1].x, g.post - g.rs * 3.6, W * (n ? 0.78 : 0.72), H * (n ? 0.66 : 0.62), n ? "药物也把它挡住" : "药物一样把它挡住");
    say("sad", on && t > 9.8, rx, ry - rs * 3.3, W * (n ? 0.7 : 0.62), H * (n ? 0.78 : 0.76), n ? "脑子转不动……" : "脑子转不动，也提不起劲……", "think");
    ctx.restore();
  }

  // ---------- 第 5 幕：原发还是继发 ----------
  function lens(x, y, r) {
    ctx.save();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "rgba(220,240,255,0.35)"; ctx.fill();
    ctx.lineWidth = r * 0.16; ctx.strokeStyle = "#c9a27e"; ctx.stroke();
    ctx.lineCap = "round"; ctx.lineWidth = r * 0.28; ctx.beginPath(); ctx.moveTo(x + r * 0.75, y + r * 0.75); ctx.lineTo(x + r * 1.6, y + r * 1.6); ctx.stroke();
    ctx.restore();
  }
  function cmpView(a) {
    const n = nw(), t = cur === 4 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f7f8ff", "#fdf0f4");
    Anima.bokeh(5, "#e3dcff", 0.7, 51);
    const top = tsafe() + H * 0.07, gap = W * 0.035, cw = (W - gap * 3) / 2, ch = H * (n ? 0.4 : 0.42);
    const cards = [
      { t: "原发性：病本身", col: "#e4e0ff", l: ["发病前后就可能有", "往往比较顽固"], drug: false },
      { t: "继发性：和药物有关", col: "#ffd9e4", l: ["用药、加量后出现", "调整后可能减轻"], drug: true },
    ];
    cards.forEach((c, i) => {
      const p = prog(0.4 + i * 2.2, 0.8);
      const x = gap + i * (cw + gap);
      card(x, top, cw, ch, c.t, c.col, p);
      if (p <= 0) return;
      ctx.save(); ctx.globalAlpha *= p;
      const s = Math.min(H * 0.055, cw * 0.1), fy = top + ch * 0.62, mx = x + cw * 0.22;
      chara(mx, fy, s, O(RES, { gray: 0.65, eyes: "sleepy", mouth: "flat", shadow: false }));
      if (c.drug) chara(mx - s * 1.5, fy, s * 0.75, O(D2X, { eyes: "happy", arms: "shh", shadow: false }));
      else emote("gloom", mx, fy - s * 3.4, s * 0.5);
      const f = Math.min(fsz(0.028, 11), cw * 0.52 / 8);
      c.l.forEach((l, j) => text("· " + l, x + cw * 0.39, top + ch * (0.36 + j * 0.24), f, C.ink, "left"));
      ctx.restore();
    });
    // 下面：长得像的几位
    const sy = top + ch + H * 0.07, sh = H * 0.95 - sy;
    const ps = prog(5, 0.8);
    card(gap, sy, W - gap * 2, sh, "长得像的还有", "#fff1b8", ps);
    const alike = n ? ["抑郁", "动作变慢、表情少", "怕幻听而躲人", "白天太困"] : ["抑郁", "药物引起的动作变慢、表情少", "因为幻听害怕而躲着人", "白天太困"];
    const f2 = fsz(0.028, 11), cols = 2;
    alike.forEach((w, i) => {
      const p = prog(5.8 + i * 1.1, 0.5);
      if (p <= 0) return;
      const c = i % cols, r = Math.floor(i / cols);
      const x = gap + (W - gap * 2) * (0.27 + c * 0.47), y = sy + sh * (0.38 + r * 0.36);
      ctx.save(); ctx.globalAlpha *= p; tagBox(w, x, y, f2, "#fff", C.ink, 1.2); ctx.restore();
    });
    // 放大镜在卡片上慢慢移动
    if (t < 99) {
      const q = (time * 0.12) % 1, lx = gap + cw * 0.4 + Math.sin(q * Math.PI * 2) * (cw * 0.5 + gap / 2) + cw * 0.5;
      lens(lx, top + ch * 0.9, Math.min(H * 0.04, cw * 0.07));
    }
    ctx.restore();
  }

  // ---------- 第 6 幕：可以怎么办 ----------
  function fixView(a) {
    const n = nw(), t = cur === 5 ? lt : 99;
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f3fbf6", "#fff4ef");
    Anima.bokeh(6, "#cdeede", 0.7, 61);
    Anima.petals(8, 0.5, 71);
    const top = tsafe() + H * 0.07, gap = W * 0.025, cw = (W - gap * 4) / 3, ch = H * (n ? 0.58 : 0.56);
    const titles = n ? ["调剂量", "换药", "加帮手"] : ["调整剂量", "换一种药", "加用辅助药"];
    const cols = ["#dff4ea", "#dcefff", "#fff1b8"];
    const f = Math.min(fsz(0.027, 11), cw / 8.5);
    const s = Math.min(H * 0.05, cw * 0.12);
    for (let i = 0; i < 3; i++) {
      const p = prog(0.4 + i * 2.4, 0.8), x = gap + i * (cw + gap), cx = x + cw / 2;
      card(x, top, cw, ch, titles[i], cols[i], p);
      if (p <= 0) continue;
      ctx.save(); ctx.globalAlpha *= p;
      const my = top + ch * 0.6;
      if (i === 0) {
        // 两扇门：一扇仍被挡，一扇空出来，爱心信通过
        outline(1.5); ctx.beginPath(); ctx.moveTo(x + cw * 0.08, my); ctx.lineTo(x + cw * 0.92, my); ctx.stroke();
        const rs = s * 0.8, xa = x + cw * 0.3, xb = x + cw * 0.7;
        const ra = Anima.receptor(xa, my, rs, C.d2, 0.03, {});
        chara(xa, ra.site.y, s * 0.7, O(D2X, { eyes: "happy", arms: "hug", shadow: false, bob: 0 }));
        const q = (time * 0.35) % 1, rb = Anima.receptor(xb, my, rs, C.d2, q > 0.5 ? 1 : 0, {});
        const yy = q < 0.5 ? lerp(top + ch * 0.15, rb.site.y, ease(q * 2)) : rb.site.y;
        chara(xb, yy, s * 0.7, { who: "DA", eyes: "happy", arms: q > 0.5 ? "up" : "hold", item: q > 0.5 ? null : "letter", shadow: false, bob: 0 });
        badge(1, xb + s * 0.8, yy - s * 1.1, s * 0.6);
        text("挡得少一点", cx, top + ch * 0.8, f, C.ink);
        text("但症状要稳住", cx, top + ch * 0.8 + f * 1.4, f, C.soft);
      } else if (i === 1) {
        const x1 = x + cw * 0.3, x2 = x + cw * 0.7;
        chara(x1, my, s * 0.9, O(D2X, { hatColor: "#b8b0f0", eyes: "happy", arms: "wave", shadow: false }));
        chara(x2, my, s * 0.9, O(D2X, { hatColor: "#ffd27a", eyes: "happy", arms: "hold", shadow: false }));
        text("加挡 5-HT2A 的药", cx, top + ch * 0.8, f, C.ink);
        text("或 D2 部分激动剂", cx, top + ch * 0.8 + f * 1.4, f, C.ink);
      } else {
        chara(cx, my, s * 0.9, O(D2X, { hatColor: "#b5e3c9", eyes: "happy", arms: "hold", item: "star", shadow: false }));
        text("如治疗抑郁的药", cx, top + ch * 0.8, f, C.ink);
        text("新药研究中", cx, top + ch * 0.8 + f * 1.4, f, C.soft);
      }
      ctx.restore();
    }
    // 下面：居民慢慢恢复颜色（桌面）；提醒横幅
    const by = H * (n ? 0.9 : 0.92);
    if (!n) {
      const rs = H * 0.05, rx = lerp(W * 0.06, W * 0.12, prog(8, 2)), ry = H * 0.97;
      const back = cur === 5 ? prog(7.5, 3) : 1;
      chara(rx, ry, rs, O(RES, { gray: 0.7 * (1 - back), eyes: back > 0.6 ? "happy" : "sleepy", mouth: back > 0.6 ? "smile" : "flat", arms: back > 0.6 ? "wave" : "down" }));
      if (back > 0.6) emote("heart", rx + rs, ry - rs * 3.2, rs * 0.5);
    }
    banner(n ? "由医生决定 · 不要自己减药停药" : "要不要调、怎么调，由医生决定 · 不要自己减药或停药", by, prog(9, 0.8));
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.rose, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) nacView(S.v0);
    if (S.v1 > 0.02) roomView(S.v1);
    if (S.v2 > 0.02) pfcView(S.v2);
    if (S.v3 > 0.02) cmpView(S.v3);
    if (S.v4 > 0.02) fixView(S.v4);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#f28ca5",
    titleCard: { lines: ["挡住警报", "也挡住了快乐？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
