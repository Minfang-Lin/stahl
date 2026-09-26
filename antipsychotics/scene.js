Anima.register("antipsychotics", {
    "title": "D2 受体的门卫",
    "tag": "抗精神病药",
    "headline": "抗精神病药：D2 受体的【门卫】",
    "lede": "抗精神病药像一位门卫，坐进多巴胺 D2 受体的锁孔。它让过度活跃的中脑边缘线安静下来，也会顺路挡到别的线路，带来动作和泌乳素方面的副作用。第二代药物和部分激动剂，又各自想了什么办法？",
    "summary": "D2 阻断和占据率窗口、锥体外系反应、泌乳素升高、5-HT2A 阻断、D2 部分激动剂，以及 H1、M1、α1 带来的副作用。",
    "chapter": "对应 Stahl《精神药理学精要》第 5 章 · 抗精神病药",
    "footer": "用药期间如果出现僵硬、手抖、坐立不安、泌乳、体重明显增加等情况，请告诉医生；不要自行加药、减药或停药。",
    "canvasLabel": "抗精神病药门卫坐进多巴胺 D2 受体锁孔的动画，旁边是占据率计量表",
    "regions": ["striatum", "nac", "hypo"],
    "parts": ["psychosis"],
    "cast": ["DA", "5HT", "His", "drug"],
    "color": "#8fcbe8"
  }, () => {
  const CH = [
    { title: "坐进锁孔的门卫", g0: 1, g1: 0, g2: 0, sda: 0, dim: 0, keys: 0, occ: 0.67,
      pill: ["线路", "中脑边缘"], pill2: ["窗口", "60～80%"],
      text: "抗精神病药最核心的动作，是挡住多巴胺的 D2 受体。药物像一位门卫，坐进 D2 受体的锁孔，却不开门，多巴胺来了也插不进钥匙。在车太多的中脑边缘通路里，这样能让过度的“这很重要”信号安静下来，减轻幻觉和妄想。一般认为，大约要占住六到八成的 D2 受体，药才能起效。",
      fact: "多数抗精神病药是 D2 受体拮抗剂，大约占住 60%～80% 的 D2 受体时起效" },
    { title: "动作的副作用", g0: 0, g1: 1, g2: 0, sda: 0, dim: 0, keys: 0, occ: 0.83,
      pill: ["线路", "黑质纹状体"], pill2: ["超过", "约 80%"],
      text: "可药物分不清路线，黑质纹状体线上的 D2 也会被挡住。纹状体靠多巴胺让动作顺畅，一旦被挡得太多，比如超过八成左右，就可能出现锥体外系反应：肌肉僵硬、手抖、坐立不安。长期用药，还可能出现迟发性运动障碍，比如嘴巴、舌头不由自主地动。发现这些变化，要及时告诉医生。",
      fact: "D2 占据率太高（约 80% 以上）时，锥体外系反应明显增多" },
    { title: "泌乳素升高", g0: 0, g1: 0, g2: 1, sda: 0, dim: 0, keys: 0, occ: 0.67,
      pill: ["线路", "结节漏斗"], pill2: ["泌乳素", "升高"],
      text: "在结节漏斗线上，多巴胺平时像在对垂体说“嘘——”，按住泌乳素，不让它分泌太多。D2 被药物挡住以后，这声“嘘”传不过去，泌乳素就升高了，可能出现乳房胀痛、溢乳、月经紊乱，以及性欲下降等性功能问题，男女都可能发生。不同药物的影响差别很大，有不舒服可以和医生商量。",
      fact: "多巴胺抑制泌乳素分泌；垂体的 D2 受体被挡住，泌乳素就会升高" },
    { title: "第二代：多挡一把锁", g0: 0, g1: 0, g2: 0, sda: 1, dim: 0, keys: 0, occ: 0.67,
      pill: ["第二代", "也挡 5-HT2A"], pill2: ["副作用", "更少"],
      text: "第二代抗精神病药，也叫非典型抗精神病药，除了挡 D2，还挡住血清素的 5-HT2A 受体。在纹状体里，5-HT2A 像多巴胺释放的“刹车”；刹车被挡住，多巴胺就多放出来一些，从药物手里抢回一部分 D2 受体。所以，这类药带来的动作副作用通常更少。",
      fact: "挡住 5-HT2A 能让纹状体多释放一些多巴胺，抵消一部分 D2 阻断" },
    { title: "调光开关", g0: 0, g1: 0, g2: 0, sda: 0, dim: 1, keys: 0, occ: 0.67,
      pill: ["部分激动剂", "调到中间"], pill2: ["灯光", "一半"],
      text: "还有一类药叫 D2 部分激动剂，比如阿立哌唑、依匹哌唑、卡利拉嗪。它们坐进 D2 的锁孔后，只把门打开一点点，像把调光开关停在中间：多巴胺太多的地方，灯被调暗一些；多巴胺太少的地方，又能补上一点亮光。所以它们能减轻症状，动作和泌乳素方面的副作用也往往更少。",
      fact: "D2 部分激动剂像调光开关：多巴胺太多时降一点，太少时补一点" },
    { title: "一串钥匙", g0: 0, g1: 0, g2: 0, sda: 0, dim: 0, keys: 1, occ: 0.67,
      pill: ["其他的锁", "H1 M1 α1"], pill2: ["记得", "遵医嘱"],
      text: "很多抗精神病药手里不止一把钥匙，还会挡住别的锁：挡住组胺 H1 受体，会犯困、体重增加；挡住乙酰胆碱 M1 受体，会口干、便秘；挡住 α1 受体，会头晕、起身时血压偏低。部分药物还和体重、血糖、血脂的问题有关，要定期检查。效果和副作用因人而异，请按医嘱服用，不要自行停药。",
      fact: "副作用常来自 H1、M1、α1 这些“别的锁”；用药期间要定期查体重、血糖和血脂" },
  ];
  const DUR = 14;

  const C = Object.assign({}, Anima.C, {
    meso: "#f28ca5", nigro: "#4fb893", tubero: "#e7a23a", d2: "#9fd0ee",
    postMeso: "#ffe0ea", postNigro: "#dff4ea", postTubero: "#fff0d6",
  });
  const { rnd, clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0;
  let lastCur = -1, lt = 0;
  const S = { g0: 1, g1: 0, g2: 0, sda: 0, dim: 0, keys: 0, occ: 0.67 };
  let occV = 0; // 计量表上显示的占据率（平滑）

  const narrow = () => W < 640;
  const topPad = () => Math.max(12, W / 60) * Anima.UI * 1.35 + 14 + 20;
  const fsz = (k, min) => Math.max(min || 11, H * k) * (narrow() ? 1.08 : 1);
  const prog = (t0, d) => ease((lt - t0) / d);
  const mixH = (a, b, t) => "#" + mix(a, b, t).match(/\d+/g).map((v) => ("0" + (+v).toString(16)).slice(-2)).join("");
  // 变灰或变僵：直接混色，不用 ctx.filter（手机上很慢）
  function dull(who, k, o) {
    const c = Object.assign({ skin: C.skin, hatColor: "#ffffff" }, Anima.CAST[who], o || {});
    const g = "#c4c0c6";
    return Object.assign({}, o || {}, { who, hair: mixH(c.hair, g, k), cloth: mixH(c.cloth, "#e6e4e8", k), eye: mixH(c.eye, "#8a8590", k),
      hatColor: mixH(c.hatColor, g, k), skin: mixH(c.skin, "#f1eff1", k * 0.8), blush: k < 0.5 });
  }

  // 每个 D2 受体上坐的是谁，随本幕时间变化：返回 0（多巴胺）～1（药物）的进度
  const PLAN = {
    0: { pre: [], arrive: [[0, 1.5], [2, 2.4], [3, 3.3], [5, 4.2]] },
    1: { pre: [0, 2, 3, 5], arrive: [[1, 3]] },
    2: { pre: [], arrive: [[0, 3], [2, 3.8], [3, 4.6], [5, 5.4]] },
  };
  function seatP(kind, i, t) {
    const p = PLAN[kind];
    if (p.pre.indexOf(i) >= 0) return 1;
    for (const a of p.arrive) if (a[0] === i) return ease((t - a[1]) / 1.1);
    return 0;
  }
  function occTarget() {
    if (cur <= 2) { let n = 0; for (let i = 0; i < 6; i++) n += seatP(cur, i, lt) > 0.9 ? 1 : 0; return n / 6; }
    if (cur === 3) return lt < 7 ? 5 / 6 : 4 / 6;
    return S.occ;
  }
  function update(dt) {
    if (cur !== lastCur) { lastCur = cur; lt = 0; }
    lt += dt;
    occV = lerp(occV, occTarget(), 1 - Math.exp(-dt * 3));
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
    rrect(x, y, w, h, Math.min(20, w * 0.08)); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, Math.min(20, w * 0.08)); ctx.stroke();
    if (title) {
      const fs = Math.min(fsz(0.036, 12), w * 0.1);
      ctx.font = `${fs}px ${Anima.ROUND}`;
      const tw = ctx.measureText(title).width + fs * 1.3;
      rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
      text(title, x + w / 2, y + 1, fs, C.ink);
    }
    ctx.restore();
  }
  // 站名牌：和上一集的铁路图同一套颜色
  function lineSign(name, color, cx, cy) {
    const fs = fsz(0.03, 11), y = cy == null ? topPad() + fs * 0.4 : cy;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(name).width + fs * 2.6, h = fs * 1.7, x0 = cx == null ? W / 2 : cx, x = x0 - w / 2;
    rrect(x, y, w, h, h / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + fs * 0.9, y + h / 2, fs * 0.38, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); outline(1.2); ctx.stroke();
    text(name, x0 + fs * 0.35, y + h / 2 + 1, fs, C.ink);
  }
  // 药物访客：D2 拮抗剂（粉白胶囊帽）
  const DRUG = { who: "drug", label: "D2拮抗剂", hatColor: "#ff9aa9", hatColor2: "#ffffff" };
  const drugOpt = (o) => Object.assign({}, DRUG, o || {});

  // 占据率计量表：绿色是有效窗口（约 60%～80%），再往上是动作副作用区
  function meter(x, top, bot, v, redNote) {
    const w = Math.max(16, W * 0.032), h = bot - top, fs = fsz(0.024, 10);
    const yOf = (p) => bot - p * h;
    text("D2 占据率", x, top - fs * 2.6, fs, C.ink);
    const col = v > 0.8 ? C.bad : v >= 0.6 ? C.good : C.skyDeep;
    text(Math.round(v * 100) + "%", x, top - fs * 1.1, fs * 1.35, col);
    rrect(x - w / 2, top, w, h, w / 2); ctx.fillStyle = "#fff"; ctx.fill();
    ctx.save(); rrect(x - w / 2, top, w, h, w / 2); ctx.clip();
    ctx.fillStyle = alpha(C.good, 0.22); ctx.fillRect(x - w / 2, yOf(0.8), w, yOf(0.6) - yOf(0.8));
    ctx.fillStyle = alpha(C.bad, 0.16); ctx.fillRect(x - w / 2, top, w, yOf(0.8) - top);
    const g = ctx.createLinearGradient(0, yOf(v), 0, bot);
    g.addColorStop(0, mix(col, "#ffffff", 0.1)); g.addColorStop(1, mix(col, "#ffffff", 0.5));
    ctx.fillStyle = g; ctx.fillRect(x - w / 2 + 3, yOf(v), w - 6, bot - yOf(v));
    ctx.restore();
    outline(2); rrect(x - w / 2, top, w, h, w / 2); ctx.stroke();
    ctx.setLineDash([3, 3]); outline(1.2);
    ctx.beginPath(); ctx.moveTo(x - w * 0.9, yOf(0.6)); ctx.lineTo(x + w * 0.5, yOf(0.6)); ctx.moveTo(x - w * 0.9, yOf(0.8)); ctx.lineTo(x + w * 0.5, yOf(0.8)); ctx.stroke();
    ctx.setLineDash([]);
    text("60%", x - w * 0.9 - fs * 1.1, yOf(0.6), fs * 0.85, C.soft);
    text("80%", x - w * 0.9 - fs * 1.1, yOf(0.8), fs * 0.85, C.soft);
    if (redNote) sparkles(x, yOf(0.9), w * 1.4, 3, 1, 5);
    return { yOf, w };
  }

  // ---------- 第 1～3 幕：D2 受体一排门 ----------
  function gateGeo() {
    const nw = narrow();
    const post = H * 0.6, x0 = W * (nw ? 0.08 : 0.1), x1 = W * (nw ? 0.68 : 0.64);
    const xs = []; for (let i = 0; i < 6; i++) xs.push(lerp(x0, x1, i / 5));
    const sp = (x1 - x0) / 5, rs = Math.min(H * 0.05, sp * 0.3), cs = Math.min(H * 0.042, sp * 0.3);
    return { post, xs, rs, cs, mx: W * (nw ? 0.89 : 0.85), mTop: H * (nw ? 0.34 : 0.3), mBot: post - H * 0.05 };
  }
  function gateView(kind, a) {
    const t = cur === kind ? lt : 99; // 淡出时停在最后的样子
    const g = gateGeo(), nw = narrow();
    const lineCol = [C.meso, C.nigro, C.tubero][kind];
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash(["#fff4f6", "#f2fbf6", "#fffaf0"][kind], ["#ffe8ef", "#e4f5ec", "#fff0dc"][kind]);
    Anima.bokeh(7, ["#ffd1dc", "#cdeede", "#ffe4b8"][kind], 0.8, 30 + kind * 7);
    Anima.petals(6, 0.4, 50 + kind);
    Anima.postMembrane(g.post, [C.postMeso, C.postNigro, C.postTubero][kind], {});
    if (!nw) lineSign(["伏隔核 · 中脑边缘线", "纹状体 · 黑质纹状体线", "垂体 · 结节漏斗线"][kind], lineCol);
    else if (kind < 2) lineSign(["伏隔核", "纹状体"][kind], lineCol, W * 0.84, H * 0.9); // 手机：站牌放在右下角
    // 受体和坐在锁孔上的人
    const seats = [];
    g.xs.forEach((x, i) => {
      const p = seatP(kind, i, t);
      const r = Anima.receptor(x, g.post, g.rs, C.d2, p > 0.9 ? 0.05 : 0.9 * (1 - p), { label: "D2" });
      seats.push({ x, y: r.site.y, p });
    });
    const sp = g.xs[1] - g.xs[0], hoverY = g.post - H * 0.2;
    seats.forEach((st, i) => {
      // 多巴胺：先站在锁孔上（开门、发光），被药物挤开后飘到上面休息
      const dp = st.p;
      const dx = st.x + sp * 0.5 * dp, dy = lerp(st.y, hoverY - (i % 2) * H * 0.03, dp);
      const calm = kind === 0 ? t > 6 : true;
      let dOpt;
      if (kind === 2) dOpt = { eyes: dp > 0.5 ? "wide" : "happy", arms: dp > 0.5 ? "down" : "shh", mouth: dp > 0.5 ? "o" : "cat" };
      else if (kind === 0) dOpt = dp > 0.5 ? { eyes: calm ? "happy" : "open", mouth: "smile", arms: "down" } : { eyes: "sparkle", mouth: "open", arms: "up" };
      else dOpt = dp > 0.5 ? { eyes: "open", mouth: "wavy", arms: "down" } : { eyes: "happy", mouth: "smile", arms: "up" };
      chara(dx, dy, g.cs, Object.assign({ who: "DA", seed: i, shadow: dp < 0.5, jump: dp < 0.5 && kind === 0 ? Math.abs(Math.sin(time * 6 + i)) * 0.25 : 0 }, dOpt));
      if (kind === 0 && dp < 0.5 && i % 2 === 0) emote("!", dx + g.cs * 0.9, dy - g.cs * 3.5, g.cs * 0.55);
      if (dp > 0.3 && dp < 0.95) emote("?", dx + g.cs * 0.8, dy - g.cs * 3.4, g.cs * 0.55);
      // 药物：从上方落进锁孔
      if (dp > 0.01) {
        const fy = lerp(-g.cs * 4, st.y, dp);
        chara(st.x, fy, g.cs * 1.05, drugOpt({ eyes: dp < 1 ? "open" : "happy", arms: dp < 1 ? "up" : "hug", mouth: "cat", shadow: false, bob: dp < 1 ? 0 : 0.5 }));
        if (dp > 0.85 && dp < 1) sfx("咔", st.x + g.cs * 1.2, st.y - g.cs * 1.5, fsz(0.035, 12), C.skyDeep, -0.1, 1);
      }
    });
    // 占据率计量表
    const m = meter(g.mx, g.mTop, g.mBot, occV, kind === 1 && occV > 0.8);
    // 膜下面：这条线上的“后果”
    const on = cur === kind;
    const s = H * (nw ? 0.05 : 0.048), fy = H * 0.95;
    if (kind === 0) {
      const rx = W * (nw ? 0.3 : 0.28), relief = prog(6.5, 1);
      chara(rx, fy, s, { who: "neuron", eyes: relief > 0.5 ? "happy" : "wide", mouth: relief > 0.5 ? "smile" : "wavy", arms: relief > 0.5 ? "wave" : "hug" });
      emote(relief > 0.5 ? "note" : "!", rx + s * 1, fy - s * 3.4, s * 0.6);
      callout("d2", on && t > 0.5 && t < 5.5, g.xs[1] + g.rs * 0.5, g.post + g.rs * 0.55, W * (nw ? 0.6 : 0.5), H * (nw ? 0.8 : 0.8), nw ? "D2 受体：多巴胺的门" : "D2 受体：多巴胺的门");
      callout("win", on && t > 6 && (!nw || t < 9.5), g.mx - m.w * 0.5, m.yOf(0.7), W * (nw ? 0.62 : 0.78), H * (nw ? 0.7 : 0.76), nw ? "有效窗口：六到八成" : "有效窗口：约占住六到八成");
      say("sit", on && t > 2 && t < 6.5, g.xs[0], seats[0].y - g.cs * 3.2, W * (nw ? 0.3 : 0.24), H * (nw ? 0.28 : 0.26), "这个位子我先坐着～", "say");
      say("calm", on && t > (nw ? 9.5 : 7), rx, fy - s * 3.3, W * (nw ? 0.62 : 0.46), H * (nw ? 0.74 : 0.72), "心里的警报安静多了～", "say");
    } else if (kind === 1) {
      const eps = prog(4.2, 1);
      const X = nw ? [0.12, 0.34, 0.56] : [0.1, 0.26, 0.42];
      const labels = ["僵硬", "手抖", "坐立不安"];
      X.forEach((k, i) => {
        let x = W * k;
        let o;
        if (eps < 0.5) o = { who: "neuron", eyes: "happy", arms: i === 1 ? "wave" : "up", mouth: "smile", walk: time * 6 + i, jump: Math.abs(Math.sin(time * 3 + i)) * 0.15 };
        else if (i === 0) o = { who: "neuron", eyes: "wide", arms: "down", mouth: "flat", bob: 0 };
        else if (i === 1) { x += Math.sin(time * 38) * s * 0.06; o = { who: "neuron", eyes: "open", arms: "hold", mouth: "wavy", bob: 0 }; }
        else { x += Math.sin(time * 2.2) * s * 1.2; o = { who: "neuron", eyes: "open", arms: "down", mouth: "wavy", walk: time * 11, dir: Math.cos(time * 2.2) > 0 ? 1 : -1 }; }
        chara(x, fy - H * 0.03, s, Object.assign({ hair: ["#b08968", "#8f6a4e", "#c9a27e"][i], style: ["short", "bob", "short"][i] }, o));
        if (eps > 0.5) {
          emote("sweat", x + s * 0.9, fy - H * 0.03 - s * 3.2, s * 0.5);
          text(labels[i], W * k, fy + H * 0.005, fsz(0.026, 10), C.ink);
        }
      });
      callout("red", on && t > 4.5 && (!nw || t < 7.5), g.mx - m.w * 0.5, m.yOf(0.88), W * (nw ? 0.74 : 0.84), H * 0.68, "约八成以上 → 动作副作用");
      callout("eps", on && t > (nw ? 7.5 : 5.5) && (!nw || t < 11), W * X[2], fy - H * 0.03 - s * 2.4, W * (nw ? 0.74 : 0.6), H * 0.7, "锥体外系反应");
      say("stiff", on && t > 5 && t < (nw ? 9 : 14), W * X[0], fy - H * 0.03 - s * 3.2, W * (nw ? 0.26 : 0.2), H * 0.68, "身体好僵……", "say");
      say("td", on && t > (nw ? 11 : 9), W * 0.8, H * 0.86, W * (nw ? 0.8 : 0.84), H * (nw ? 0.74 : 0.87), nw ? "长期：留意迟发性运动障碍" : "长期用药：留意迟发性运动障碍", "box");
    } else {
      // 垂体：泌乳素工厂；奶瓶计量表
      const px = W * (nw ? 0.2 : 0.2), py = H * 0.8, pr = H * (nw ? 0.12 : 0.11);
      const prl = cur === 2 ? lerp(0.25, 0.85, prog(4, 4)) : 0.85;
      ctx.beginPath(); ctx.ellipse(px, py, pr * 1.2, pr * 0.8, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd6c0"; ctx.fill(); outline(2); ctx.stroke();
      face(px, py - pr * 0.05, pr * 0.45, prl > 0.6 ? 0 : 1);
      if (prl > 0.6) emote("sweat", px + pr * 0.8, py - pr * 0.7, pr * 0.3);
      text("垂体", px, py + pr * 0.52, fsz(0.024, 10), C.ink);
      const bx = W * (nw ? 0.5 : 0.44), bw = W * (nw ? 0.1 : 0.06), btop = H * 0.68, bbot = H * 0.96;
      // 奶瓶形状
      const bottle = () => { ctx.beginPath(); rrect(bx - bw * 0.25, btop, bw * 0.5, (bbot - btop) * 0.12, 3); ctx.roundRect(bx - bw / 2, btop + (bbot - btop) * 0.12, bw, (bbot - btop) * 0.88, bw * 0.25); };
      bottle(); ctx.fillStyle = "#fff"; ctx.fill();
      ctx.save(); bottle(); ctx.clip();
      const ly = bbot - (bbot - btop) * 0.88 * prl;
      ctx.fillStyle = "#fff8e8"; ctx.fillRect(bx - bw, ly, bw * 2, bbot - ly);
      ctx.fillStyle = alpha(prl > 0.6 ? C.warn : C.good, 0.35); ctx.fillRect(bx - bw, ly, bw * 2, bbot - ly);
      ctx.restore();
      bottle(); outline(2); ctx.stroke();
      text("泌乳素", bx, btop - fsz(0.024, 10) * 0.9, fsz(0.024, 10), C.ink);
      // 泌乳素小滴，从垂体飘向奶瓶
      const nDrop = Math.round(prl * 5);
      for (let k = 0; k < nDrop; k++) {
        const tt = (time * 0.4 + k / 5) % 1;
        const x = lerp(px + pr * 1.1, bx - bw * 0.6, tt), y = py - Math.sin(tt * Math.PI) * H * 0.06;
        ctx.save(); ctx.globalAlpha *= Math.sin(tt * Math.PI);
        ctx.beginPath(); ctx.arc(x, y, H * 0.012, 0, Math.PI * 2); ctx.fillStyle = "#fffaf0"; ctx.fill(); outline(1); ctx.stroke();
        ctx.restore();
      }
      if (prl > 0.6) sfx("↑", bx + bw * 0.9, btop + (bbot - btop) * 0.3, fsz(0.05, 16), C.warn, 0, 1);
      callout("shh", on && t > 0.5 && t < 3.5, g.xs[2], seats[2].y - g.cs * 1.5, W * (nw ? 0.5 : 0.36), H * (nw ? 0.28 : 0.26), nw ? "多巴胺“按住”泌乳素" : "多巴胺平时“按住”泌乳素");
      say("shhh", on && t < 3.5, g.xs[4], seats[4].y - g.cs * 3.2, W * (nw ? 0.6 : 0.6), H * (nw ? 0.36 : 0.3), "嘘——少分泌一点～", "say");
      callout("up", on && t > 6 && (!nw || t < 9), bx + bw * 0.5, btop + (bbot - btop) * 0.3, W * (nw ? 0.78 : 0.66), H * 0.7, nw ? "泌乳素升高" : "D2 被挡 → 泌乳素升高");
      say("prl", on && t > (nw ? 9 : 8), bx, btop, W * (nw ? 0.76 : 0.8), H * (nw ? 0.7 : 0.86), "可能：溢乳、月经紊乱、性功能问题", "box");
    }
    ctx.restore();
  }

  // ---------- 第 4 幕：第二代，多挡一把 5-HT2A 锁 ----------
  function sdaView(a) {
    const t = cur === 3 ? lt : 99, nw = narrow();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f2fbf6", "#e4f5ec");
    Anima.bokeh(7, "#cdeede", 0.8, 44);
    const g = gateGeo(), cs = g.cs;
    const post = H * 0.68, tcx = W * (nw ? 0.3 : 0.32), tw = W * (nw ? 0.44 : 0.36), th = H * 0.27;
    Anima.postMembrane(post, C.postNigro, {});
    const T = Anima.terminal(tcx, 0, tw, th, "#ffd6c4");
    text("多巴胺神经末梢", tcx, T.bot - th * 0.3, fsz(0.024, 10), C.soft);
    // 5-HT2A 受体：长在末梢右下方，门朝下；血清素在下面“按刹车”
    const rX = tcx + tw * 0.3, rY = T.bot - th * 0.06, rs = g.rs * 0.9;
    const block = prog(3.5, 1.2);
    const r5 = Anima.receptor(rX, rY, rs, "#8fdcc4", (1 - block) * 0.8, { shape: "tri", dir: -1 });
    tagBox("5-HT2A", rX + rs * 2.3, rY + rs * 0.4, fsz(0.022, 9), "#e6f7f0", C.ink, 1.1);
    const hang = r5.site.y + cs * 3.3;
    const sx = lerp(r5.site.x, r5.site.x + W * (nw ? 0.12 : 0.09), block), sy = hang + block * cs * 0.3;
    chara(sx, sy, cs, { who: "5HT", arms: block > 0.5 ? "down" : "carry", eyes: block > 0.5 ? "wide" : "open", mouth: block > 0.5 ? "o" : "smile", dir: -1 });
    if (block > 0.5) emote("?", sx + cs * 0.9, sy - cs * 3.4, cs * 0.55);
    if (block > 0.02) chara(r5.site.x, lerp(H * 0.62, hang, block), cs * 1.05, drugOpt({ label: "第二代", hatColor: "#8fcbe8", arms: "carry", eyes: "happy", mouth: "cat", shadow: false, alpha: Math.min(1, block * 2) }));
    // 末梢左半边放出来的多巴胺：刹车松开后变多
    const nOut = block > 0.5 ? 4 : 1;
    for (let k = 0; k < nOut; k++) {
      const tt = (time * 0.3 + k / nOut) % 1;
      const x = tcx - tw * 0.32 + k * tw * 0.1 + Math.sin(time + k) * W * 0.008, y = lerp(T.bot + cs * 3.2, post - H * 0.14, tt);
      ctx.save(); ctx.globalAlpha *= Math.sin(tt * Math.PI);
      chara(x, y, cs * 0.8, { who: "DA", eyes: "sparkle", arms: "up", mouth: "open", shadow: false, seed: k });
      ctx.restore();
    }
    // D2 一排：先 5/6 被挡，后来多巴胺抢回一个
    const retake = prog(6.5, 1.3), RI = 1;
    const seatY = [];
    g.xs.forEach((x, i) => {
      const drugOn = i === RI ? 1 - retake : (i === 4 ? 0 : 1);
      const daOn = i === 4 ? 1 : (i === RI ? retake : 0);
      const r = Anima.receptor(x, post, g.rs, C.d2, daOn * 0.9, { label: "D2" });
      seatY.push(r.site.y);
      if (drugOn > 0.02) chara(x + (1 - drugOn) * cs * 1.5, r.site.y - (1 - drugOn) * H * 0.1, cs, drugOpt({ label: "第二代", hatColor: "#8fcbe8", alpha: drugOn, eyes: drugOn < 1 ? "open" : "happy", arms: "hug", mouth: "cat", shadow: false }));
      if (daOn > 0.02) chara(x, lerp(r.site.y - H * 0.1, r.site.y, daOn), cs, { who: "DA", eyes: "happy", arms: "up", mouth: "grin", alpha: daOn, shadow: false });
    });
    // 下面的居民：动作重新顺畅起来
    const smooth = prog(8, 1), s = H * (nw ? 0.05 : 0.048), fy = H * 0.95;
    for (let i = 0; i < 2; i++) {
      const x = W * (nw ? 0.2 + i * 0.26 : 0.18 + i * 0.2) + (smooth > 0.5 ? Math.sin(time * 1.5 + i * 2) * W * 0.03 : 0);
      chara(x, fy, s, smooth > 0.5 ? { who: "neuron", eyes: "happy", arms: i ? "wave" : "up", mouth: "grin", walk: time * 8 + i, hair: i ? "#8f6a4e" : "#b08968", style: i ? "bob" : "short" }
        : { who: "neuron", eyes: "wide", arms: "down", mouth: "flat", bob: 0, hair: i ? "#8f6a4e" : "#b08968", style: i ? "bob" : "short" });
      if (smooth > 0.5) emote("note", x + s, fy - s * 3.3, s * 0.6);
      else emote("sweat", x + s * 0.9, fy - s * 3.2, s * 0.5);
    }
    lineSign(nw ? "纹状体" : "纹状体 · 黑质纹状体线", C.nigro, W * 0.8, H * 0.85);
    meter(g.mx, H * (nw ? 0.46 : 0.4), post - H * 0.05, occV, false);
    const on = cur === 3, LX = W * (nw ? 0.7 : 0.72), LY = H * (nw ? 0.26 : 0.2);
    callout("brake", on && t > 0.8 && t < 4.5, rX + rs * 0.6, rY + rs * 0.8, LX, LY, nw ? "5-HT2A：放多巴胺的刹车" : "5-HT2A：多巴胺释放的“刹车”");
    say("huh", on && t > 4.5 && t < 8.5, sx, sy - cs * 3.3, LX, LY, "咦，刹车被挡住了？", "think");
    say("more", on && t > 5 && t < 9.5, tcx - tw * 0.25, T.bot + cs * 2, W * (nw ? 0.16 : 0.1), H * (nw ? 0.36 : 0.36), "我们多来几位！", "shout");
    callout("back", on && t > 9, g.xs[RI], seatY[RI] - cs * 1.5, LX, LY, nw ? "多巴胺抢回一些 D2" : "多出来的多巴胺抢回一些 D2");
    ctx.restore();
  }

  // ---------- 第 5 幕：部分激动剂 = 调光开关 ----------
  function lamp(x, y, r, b) {
    glow(x, y, r * (1.5 + b * 3), C.gold, 0.3 + b * 0.9);
    outline(1.5); ctx.beginPath(); ctx.moveTo(x, y - r * 2.4); ctx.lineTo(x, y - r); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#e9e6ee", "#fff3a0", b); ctx.fill(); outline(1.8); ctx.stroke();
    if (b > 0.7) sparkles(x, y, r * 2.4, 4, (b - 0.7) * 3, 9);
  }
  function slider(x, y, w, b, label) {
    const h = Math.max(8, w * 0.07);
    rrect(x, y - h / 2, w, h, h / 2); ctx.fillStyle = "#f1ecf4"; ctx.fill(); outline(1.4); ctx.stroke();
    const g = ctx.createLinearGradient(x, 0, x + w, 0); g.addColorStop(0, "#d8d4e0"); g.addColorStop(1, "#ffe070");
    ctx.save(); rrect(x, y - h / 2, w * b, h, h / 2); ctx.fillStyle = g; ctx.fill(); ctx.restore();
    ctx.beginPath(); ctx.arc(x + w * b, y, h * 1.1, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.setLineDash([2, 3]); outline(1); ctx.beginPath(); ctx.moveTo(x + w / 2, y - h * 1.6); ctx.lineTo(x + w / 2, y + h * 1.6); ctx.stroke(); ctx.setLineDash([]);
    if (label) text(label, x + w / 2, y + h * 2.6, fsz(0.022, 9), C.soft);
  }
  function dimView(a) {
    const t = cur === 4 ? lt : 99, nw = narrow();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fffaf0", "#f4effd");
    Anima.bokeh(6, "#ffe7a3", 0.7, 81);
    Anima.petals(8, 0.5, 12);
    const top = topPad() + H * 0.07, gap = W * 0.04, cw = (W - gap * 3) / 2, ch = H * (nw ? 0.64 : 0.7);
    const cards = [{ title: "多巴胺太多时", from: 1, crowd: true }, { title: "多巴胺太少时", from: 0.1, crowd: false }];
    const cs = Math.min(H * 0.045, cw * 0.1), rs = Math.min(H * 0.055, cw * 0.11);
    const PA = { hatColor: "#b5e3c9", hatColor2: "#ffffff", label: "部分激动剂" };
    let drugHead = null, sliderPt = null;
    cards.forEach((c, i) => {
      const x = gap + i * (cw + gap);
      card(x, top, cw, ch, c.title, i ? "#dcd6fb" : "#ffd0dc");
      const my = top + ch * 0.8, rx = x + cw * 0.32;
      ctx.save(); rrect(x, top, cw, ch, 16); ctx.clip();
      ctx.fillStyle = "#eef6fb"; ctx.fillRect(x, my, cw, ch); ctx.restore();
      outline(1.6); ctx.beginPath(); ctx.moveTo(x, my); ctx.lineTo(x + cw, my); ctx.stroke();
      const arrive = prog(2.5 + i * 1.2, 1.2);
      const b = lerp(c.from, 0.5, arrive);
      const r = Anima.receptor(rx, my, rs, C.d2, b, { label: "D2" });
      // 左：一群多巴胺；药物来了以后它们散开
      if (c.crowd) {
        for (let k = 0; k < 3; k++) {
          const onSite = k === 0;
          const hx = onSite ? rx : rx + (k === 1 ? -1 : 1) * cs * 2.3, hy = onSite ? r.site.y : r.site.y - cs * 0.4;
          const leave = arrive;
          chara(hx + (k - 1) * leave * cw * 0.12, hy - leave * H * 0.1, cs, { who: "DA", eyes: "sparkle", arms: "up", mouth: "open", alpha: 1 - leave * 0.85, shadow: false, jump: Math.abs(Math.sin(time * 6 + k)) * 0.3 * (1 - leave), seed: k });
        }
      } else if (arrive < 0.5) {
        emote("gloom", rx, r.site.y - cs * 1.2, cs * 0.7);
      }
      if (arrive > 0.01) {
        const dy = lerp(top + ch * 0.1, r.site.y, arrive);
        chara(rx, dy, cs * 1.05, drugOpt(Object.assign({}, PA, { arms: arrive < 1 ? "up" : "hug", eyes: "happy", mouth: "cat", shadow: false })));
        if (i === 0) drugHead = { x: rx, y: dy - cs * 3.2 };
      }
      // 灯和调光开关
      const lx = x + cw * 0.74, ly = top + ch * 0.36;
      lamp(lx, ly, Math.min(H * 0.045, cw * 0.08), b);
      const sw = cw * 0.36;
      slider(lx - sw / 2, ly + H * (nw ? 0.12 : 0.13), sw, b, arrive > 0.9 ? "停在中间" : (i ? "太暗" : "太亮"));
      if (i === 1) sliderPt = { x: lx, y: ly + H * 0.13 };
    });
    const on = cur === 4;
    const nf = fsz(0.026, 10);
    text("阿立哌唑 · 依匹哌唑 · 卡利拉嗪", W / 2, top + ch + (H - top - ch) / 2, nf, C.soft);
    say("half", on && t > 4.5 && !!drugHead, drugHead ? drugHead.x : 0, drugHead ? drugHead.y : 0, W * (nw ? 0.3 : 0.28), top + ch * 0.2, "我只把门开一半～", "say");
    callout("dimmer", on && t > 6.5 && !!sliderPt, sliderPt ? sliderPt.x : 0, sliderPt ? sliderPt.y : 0, W * (nw ? 0.74 : 0.74), nw ? top + ch * 0.8 : top + ch * 0.12, nw ? "调光开关停在中间" : "像调光开关，停在中间");
    ctx.restore();
  }

  // ---------- 第 6 幕：一串钥匙 ----------
  function keysView(a) {
    const t = cur === 5 ? lt : 99, nw = narrow();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f6f8ff", "#fdeef3");
    Anima.bokeh(7, "#e3dcff", 0.8, 61);
    const post = H * (nw ? 0.56 : 0.55);
    Anima.postMembrane(post, "#fdeff4", {});
    const locks = [
      { lab: "D2", who: "DA", col: C.d2, shape: "round", fx: ["减轻幻觉妄想", "（主要疗效）"], mood: { eyes: "happy", mouth: "smile" } },
      { lab: "H1", who: "His", col: "#dcc4f0", shape: "square", fx: ["犯困", "体重增加"], mood: { eyes: "sleepy", mouth: "flat" }, emo: "zzz" },
      { lab: "M1", who: "ACh", col: "#f7c4d8", shape: "tri", fx: ["口干", "便秘"], mood: { eyes: "open", mouth: "wavy" }, emo: "sweat" },
      { lab: "α1", who: "NE", col: "#ffd0d4", shape: "square", fx: ["头晕", "起身时血压低"], mood: { eyes: "dizzy", mouth: "o" }, emo: "?" },
    ];
    const xs = nw ? [0.3, 0.48, 0.66, 0.84] : [0.3, 0.47, 0.64, 0.81];
    const sp = W * 0.17, rs = Math.min(H * 0.05, sp * 0.24), cs = Math.min(H * 0.04, sp * 0.2);
    // 药物访客：手里一串钥匙
    const dxp = W * (nw ? 0.1 : 0.12), dyp = post - H * 0.02, dS = H * (nw ? 0.05 : 0.055);
    chara(dxp, dyp, dS, drugOpt({ label: "抗精神病药", arms: "point", item: "key", eyes: "happy", mouth: "cat", dir: 1 }));
    // 钥匙环
    ctx.beginPath(); ctx.arc(dxp + dS * 1.05, dyp - dS * 1.25, dS * 0.35, 0, Math.PI * 2); ctx.strokeStyle = C.gold; ctx.lineWidth = 2.5; ctx.stroke();
    locks.forEach((L, i) => {
      const x = W * xs[i], hit = prog(1 + i * 1.6, 0.9);
      const r = Anima.receptor(x, post, rs, L.col, 0.05, { shape: L.shape, label: L.lab });
      // 一颗小胶囊飞进锁孔
      if (hit > 0.01) {
        const fx = lerp(dxp + dS, r.site.x, hit), fy = lerp(dyp - dS * 2, r.site.y, hit) - Math.sin(hit * Math.PI) * H * 0.12;
        ctx.save(); ctx.translate(fx, fy); ctx.rotate(hit < 1 ? time * 6 : 0);
        const cr = rs * 0.36;
        rrect(-cr * 1.6, -cr * 0.8, cr * 3.2, cr * 1.6, cr * 0.8); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
        ctx.save(); rrect(-cr * 1.6, -cr * 0.8, cr * 3.2, cr * 1.6, cr * 0.8); ctx.clip(); ctx.fillStyle = "#ff9aa9"; ctx.fillRect(-cr * 1.6, -cr, cr * 1.6, cr * 2); ctx.restore();
        ctx.restore();
        if (hit > 0.9 && hit < 1) sfx("咔", x + rs, r.site.y - rs, fsz(0.03, 11), C.skyDeep, -0.1, 1);
      }
      // 锁的主人：进不去门了
      const ox = x + rs * 1.1 + cs * 0.9, oy = post - H * 0.005;
      chara(ox, oy, cs, Object.assign({ who: L.who, dir: -1, arms: "down", shadow: false }, hit > 0.9 ? L.mood : { eyes: "open", mouth: "smile" }));
      if (hit > 0.9 && L.emo) emote(L.emo, ox + cs * 0.6, oy - cs * 3.4, cs * 0.55);
      // 膜下：后果
      const k = prog(1.6 + i * 1.6, 0.8);
      if (k > 0) {
        ctx.save(); ctx.globalAlpha *= k;
        const f = nw ? fsz(0.026, 10) : Math.min(fsz(0.027, 10), sp * 0.12);
        L.fx.forEach((l, j) => text(l, x + rs * 0.5, post + H * (0.1 + j * 0.065), j && i === 0 ? f * 0.85 : f, j && i === 0 ? C.soft : C.ink));
        ctx.restore();
      }
    });
    // 底部横幅：定期检查、遵医嘱
    const kb = prog(8, 0.8);
    if (kb > 0) {
      const bf = fsz(0.03, 11), by = H * (nw ? 0.87 : 0.88);
      const lines = nw ? ["定期查体重、血糖、血脂", "按医嘱服药，不要自行停药"] : ["定期查体重、血糖、血脂 · 按医嘱服药，不要自行停药"];
      ctx.save(); ctx.globalAlpha *= kb;
      ctx.font = `${bf}px ${Anima.ROUND}`;
      const bw = Math.max.apply(null, lines.map((l) => ctx.measureText(l).width)) + bf * 3.6, bh = bf * (1.1 + lines.length * 1.35);
      ctx.save(); ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
      rrect(W / 2 - bw / 2, by - bh / 2, bw, bh, bf * 0.8); ctx.fillStyle = "#fff4f7"; ctx.fill(); ctx.restore();
      outline(2); ctx.strokeStyle = C.rose; ctx.stroke();
      Anima.heart(W / 2 - bw / 2 + bf * 1.1, by, bf * 0.5, C.rose); Anima.heart(W / 2 + bw / 2 - bf * 1.1, by, bf * 0.5, C.rose);
      lines.forEach((l, j) => text(l, W / 2, by + (j - (lines.length - 1) / 2) * bf * 1.35 + 1, bf, C.ink));
      ctx.restore();
    }
    const on = cur === 5;
    say("ring", on && t > 0.5 && t < 7, dxp, dyp - dS * 3.2, W * (nw ? 0.26 : 0.22), H * (nw ? 0.26 : 0.26), "我这串钥匙，不止开一扇门～", "say");
    callout("other", on && t > 4, W * xs[2], post - rs * 1.6, W * (nw ? 0.7 : 0.66), H * (nw ? 0.24 : 0.24), nw ? "别的锁 → 副作用" : "挡到别的锁 → 带来副作用");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.skyDeep, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }
  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.g0 > 0.02) gateView(0, S.g0);
    if (S.g1 > 0.02) gateView(1, S.g1);
    if (S.g2 > 0.02) gateView(2, S.g2);
    if (S.sda > 0.02) sdaView(S.sda);
    if (S.dim > 0.02) dimView(S.dim);
    if (S.keys > 0.02) keysView(S.keys);
    hud();
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#6fb9e0",
    titleCard: { lines: ["D2 受体的", "门卫"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
