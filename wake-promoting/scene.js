Anima.register("wake-promoting", {
    "title": "叫醒大脑的几种办法：促醒药",
    "tag": "睡眠与觉醒",
    "headline": "白天总犯困，药物从【哪扇门】把大脑叫醒？",
    "lede": "白天嗜睡，可以看成觉醒系统在白天开得不够大。促醒药像几把不同的钥匙：有的挡住让人犯困的腺苷，有的让多巴胺和去甲肾上腺素多起来，有的松开组胺的刹车，还有一把干脆在夜里下手，让人睡得更深。一把一把看过去。",
    "summary": "咖啡因阻断腺苷受体（和 D2 的配对）、苯丙胺与哌甲酯大幅升高 DA/NE、索利氨酯阻断 DAT/NET、莫达非尼/阿莫达非尼以 DAT 为主抬高紧张性多巴胺、替洛利生阻断 H3 增加组胺，以及羟丁酸钠加深夜间慢波睡眠。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 促醒药",
    "footer": "白天总是犯困，先查查睡眠够不够、有没有睡眠呼吸暂停等原因；促醒药都请在医生指导下使用，部分属于管制药品。",
    "canvasLabel": "几位戴胶囊帽的药物访客拿着钥匙，从腺苷受体、多巴胺回收门、组胺刹车和夜间深睡几扇门把大脑叫醒的动画",
    "regions": ["hypo", "midbrain"],
    "parts": ["sleep"],
    "cast": ["DA", "NE", "His", "drug", "pump"],
    "color": "#ffc46b"
  }, () => {
  const CH = [
    { title: "叫醒大脑的几把钥匙", vW: 1, vA: 0, vT: 0, vH: 0, vN: 0,
      pill: ["白天", "觉醒不够"], pill2: ["钥匙", "五把"],
      text: "白天总是犯困，可以看成大脑的觉醒系统在白天开得不够大。促醒药就像几把不同的钥匙，从不同的门进去叫醒大脑：挡住让人犯困的腺苷，让多巴胺和去甲肾上腺素多一些，松开组胺的刹车，或者干脆让夜里睡得更深。为什么会犯困，可以回看《发作性睡病》和《白天为什么总犯困》。",
      fact: "多数促醒药的思路，是增加多巴胺、去甲肾上腺素、组胺这些促醒递质" },
    { title: "咖啡因：挡住记账的腺苷", vW: 0, vA: 1, vT: 0, vH: 0, vN: 0,
      pill: ["咖啡因", "挡腺苷"], pill2: ["D2", "重新灵敏"],
      text: "醒着的时间越长，腺苷就在脑子里积得越多，它像个记账员，记着我们欠了多少觉。腺苷受体常和多巴胺的 D2 受体手拉手：腺苷一结合，旁边的 D2 对多巴胺就没那么敏感，人又累又困。咖啡因挡住腺苷受体，腺苷插不进来，D2 重新灵敏，人就觉得清醒、没那么累。",
      fact: "咖啡因是世界上用得最多的精神活性物质，它是腺苷受体拮抗剂" },
    { title: "苯丙胺和哌甲酯：DA、NE 大涨", vW: 0, vA: 0, vT: 1, vH: 0, vN: 0,
      pill: ["DA/NE", "大涨"], pill2: ["管制", "要当心"],
      text: "苯丙胺和哌甲酯挡住多巴胺和去甲肾上腺素的回收门（DAT、NET），苯丙胺还会把囊泡里的多巴胺挤出来，这两种促醒递质一下子多了很多，所以效果很强，用于发作性睡病的白天嗜睡。它们有滥用和被挪作他用的风险，是管制药品。索利氨酯也挡 DAT 和 NET，力度温和一些，滥用风险也低一些。",
      fact: "兴奋剂促醒效果强，但滥用风险高；两种“开门法”的细节见《两种兴奋剂》" },
    { title: "莫达非尼：轻轻地、稳稳地", vW: 0, vA: 0, vT: 1, vH: 0, vN: 0,
      pill: ["莫达非尼", "以 DAT 为主"], pill2: ["水位", "平稳抬高"],
      text: "莫达非尼和它的 R 型兄弟阿莫达非尼，被认为主要作用在多巴胺转运体 DAT 上。它和 DAT 结合得并不牢，但血里的浓度高，照样能占住不少回收门。它的浓度慢慢升起、平稳地维持好几个小时，又只占一部分门，更像把多巴胺的背景水位抬高一点，而不是冲出尖峰，所以滥用风险比兴奋剂低得多。",
      fact: "莫达非尼对 DAT 亲和力弱，但浓度高、起伏缓，偏向抬高紧张性多巴胺" },
    { title: "替洛利生：松开组胺的刹车", vW: 0, vA: 0, vT: 0, vH: 1, vN: 0,
      pill: ["H3", "刹车松开"], pill2: ["组胺", "放得更多"],
      text: "组胺神经元的末梢上装着 H3 受体，这是组胺自己的刹车：放出去的组胺回头按一下 H3，末梢就少放一点。替洛利生坐进 H3，挡住它，还把它自带的那点刹车也压下去，于是组胺放得更多，去叫醒大脑皮层。它不是管制药品，还没发现滥用风险，但可能让人过于兴奋、焦虑或失眠。",
      fact: "替洛利生是 H3 受体拮抗剂/反向激动剂，靠增加组胺释放来促醒" },
    { title: "羟丁酸钠：夜里睡深，白天才醒", vW: 0, vA: 0, vT: 0, vH: 0, vN: 1,
      pill: ["夜里", "深睡变多"], pill2: ["白天", "少犯困"],
      text: "最后一把钥匙走的路完全不同。羟丁酸钠不在白天叫醒大脑，而是夜里帮人睡得更深：它作用在 GHB 受体和 GABA-B 受体上，让慢波睡眠明显增多，还能减少猝倒。夜里睡扎实了，白天自然没那么困。它有滥用风险，要在严格管理下使用。所有促醒药都要在医生指导下用。",
      fact: "羟丁酸钠加深夜间慢波睡眠，从而间接减轻白天的嗜睡" },
  ];
  const DUR = 13;

  const C = Object.assign({}, Anima.C, {
    brain: "#ffd0dc", term: "#ffe0c4", post: "#fff0dc", ade: "#b9c7d8", day: "#fff7e3", night: "#eef0ff",
  });
  const { clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { vW: 1, vA: 0, vT: 0, vH: 0, vN: 0 };
  const P = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsS = () => Math.max(12, W / 58) * Anima.UI;
  const ADE = { hair: "#9fb3c8", eye: "#5d6f85", cloth: "#e6eef7", hat: "cap", hatColor: "#b9c7d8", label: "腺苷", style: "bob" };
  const PERSON = { hair: "#7a5a48", eye: "#5a3a2a", cloth: "#ffe6c4", style: "short", hat: "none" };

  function update() { lt = Anima.sceneTime; }

  // ---------- 小工具 ----------
  function chip(t, x, y, col, fs, tc) {
    fs = fs || fsS() * 0.85;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.55;
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = col || "#fff"; ctx.fill(); outline(1.3); ctx.stroke();
    text(t, x, y + 1, fs, tc || C.ink);
    return { w, h };
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,110,80,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 16); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 16); ctx.stroke();
    let fs = Math.max(12, Math.min(W / 42, h * 0.09)) * Anima.UI;
    ctx.font = `${fs}px ${Anima.ROUND}`;
    let tw = ctx.measureText(title).width + fs * 1.2;
    if (tw > w * 0.96) { fs *= w * 0.96 / tw; tw = w * 0.96; }
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function brainBlob(x, y, r, awake) {
    const col = mix("#e6dde6", C.brain, awake);
    ctx.beginPath();
    for (const q of [[-0.45, 0.05, 0.62], [0.1, -0.2, 0.7], [0.55, 0.08, 0.58], [0, 0.25, 0.65]]) { ctx.moveTo(x + q[0] * r + q[2] * r, y + q[1] * r); ctx.arc(x + q[0] * r, y + q[1] * r, q[2] * r, 0, Math.PI * 2); }
    ctx.strokeStyle = C.line; ctx.lineWidth = Math.max(2, r * 0.05); ctx.stroke(); ctx.fillStyle = col; ctx.fill();
    const fy = y + r * 0.12, s = r * 0.38;
    if (awake > 0.6) { face(x + r * 0.05, fy, s, 1); sparkles(x, y, r * 1.2, 5, awake, 3); }
    else { // 困：闭着眼
      outline(Math.max(1.2, s * 0.08));
      for (const d of [-1, 1]) { ctx.beginPath(); ctx.moveTo(x + r * 0.05 + d * s * 0.45, fy - s * 0.05); ctx.lineTo(x + r * 0.05 + d * s * 0.2, fy - s * 0.05); ctx.stroke(); }
      ctx.beginPath(); ctx.arc(x + r * 0.05, fy + s * 0.3, s * 0.1, 0, Math.PI * 2); ctx.stroke();
      emote("zzz", x + r * 0.9, y - r * 0.7, r * 0.3);
    }
  }
  function lamp(x, y, r, on) {
    if (on > 0.05) glow(x, y, r * 3, C.gold, on);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = mix("#eeeae6", "#ffe27a", on); ctx.fill(); outline(1.4); ctx.stroke();
  }

  // ================= 第 1 幕：五把钥匙 =================
  const KEYS = [
    { d: "咖啡因", t: "腺苷受体", c: "#c7a07a" }, { d: "哌甲酯", t: "DAT·NET", c: "#ff9a52" }, { d: "莫达非尼", t: "DAT", c: "#ffc46b" },
    { d: "替洛利生", t: "H3", c: "#b98ad8" }, { d: "羟丁酸钠", t: "夜里深睡", c: "#8f9de0" },
  ];
  function keysView(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#fff8ec", "#f4f1ff");
    Anima.bokeh(6, "#ffe7b0", 0.7, 5);
    Anima.petals(5, 0.35, 12);
    const top = Anima.topSafe();
    const bx = W * 0.5, br = H * (n ? 0.11 : 0.12), by = top + br * 1.1;
    const board = { x: W * 0.04, y: H * (n ? 0.56 : 0.52), w: W * 0.92, h: H * (n ? 0.38 : 0.42) };
    const lit = KEYS.map((k, i) => P(1.8 + i * 1.8, 0.6));
    const awake = lit.reduce((s2, v) => s2 + v, 0) / KEYS.length;
    brainBlob(bx, by, br, awake);
    // 控制板
    card(board.x, board.y, board.w, board.h, "觉醒系统的控制板", "#fff1b8");
    const kw = board.w / KEYS.length, fs = fsS() * (n ? 0.72 : 0.8), s = H * (n ? 0.036 : 0.04);
    const holes = [];
    KEYS.forEach((k, i) => {
      const cx = board.x + kw * (i + 0.5), hy = board.y + board.h * 0.3;
      lamp(cx, hy - board.h * 0.02, H * 0.016, lit[i]);
      // 钥匙孔
      ctx.beginPath(); ctx.arc(cx, hy + board.h * 0.14, H * 0.018, 0, Math.PI * 2); ctx.fillStyle = C.line; ctx.fill();
      ctx.beginPath(); ctx.moveTo(cx - H * 0.008, hy + board.h * 0.15); ctx.lineTo(cx + H * 0.008, hy + board.h * 0.15); ctx.lineTo(cx + H * 0.012, hy + board.h * 0.24); ctx.lineTo(cx - H * 0.012, hy + board.h * 0.24); ctx.closePath(); ctx.fill();
      text(k.t, cx, board.y + board.h * 0.88, fs, C.ink);
      // 拿钥匙的药物访客：从右边走进来
      const p = P(0.4 + i * 1.8, 1.4);
      if (p > 0.01) {
        const fx = cx + kw * 0.28, fy = board.y + board.h * 0.66;
        const x = lerp(W + s * 2, fx, p);
        chara(x, fy, s, { who: "drug", hatColor: k.c, arms: p >= 1 ? "point" : "hold", item: "key", walk: p < 1 ? time * 9 : null, dir: -1, eyes: lit[i] > 0.5 ? "happy" : "open", tag: n ? null : k.d });
      }
      holes.push({ x: cx, y: hy + board.h * 0.14 });
      if (lit[i] > 0.02 && lit[i] < 0.99) sfx("咔嗒", cx, hy - board.h * 0.16, H * 0.035, "#e0913a", -0.1, 1);
    });
    // 从控制板往上连到大脑的线
    ctx.save(); ctx.setLineDash([4, 6]); outline(1.4); ctx.beginPath(); ctx.moveTo(bx, board.y - fsS()); ctx.lineTo(bx, by + br * 0.95); ctx.stroke(); ctx.restore();
    const ty = Anima.topSafe() + H * 0.01;
    say("w-z", win(0.5, 4), bx - br * 0.5, by - br * 0.4, n ? W * 0.2 : bx - W * 0.22, by, "好困…", "think");
    say("w-up", lt > 10.5, bx + br * 0.5, by - br * 0.4, n ? W * 0.8 : bx + W * 0.22, by, "醒啦！", "shout");
    void ty; void holes;
    ctx.restore();
  }

  // ================= 第 2 幕：咖啡因和腺苷 =================
  function adeView(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff8ef"); bg.addColorStop(0.6, "#f3f6fb"); bg.addColorStop(1, "#fff1e4");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#e3ebf5", 0.8, 70);
    const post = H * 0.72, s = H * (n ? 0.036 : 0.04);
    Anima.postMembrane(post, C.post, {});
    const ax = W * (n ? 0.3 : 0.32), dx = ax + H * (n ? 0.2 : 0.22), rs = H * 0.05;
    const bindAde = P(2.4, 0.8) * (1 - P(6.6, 0.8));
    const caf = P(5.2, 1.6);
    const d2on = 1 - bindAde * 0.85;
    // 两个受体手拉手
    outline(2.2); ctx.beginPath(); ctx.moveTo(ax + rs * 0.6, post - rs * 0.7); ctx.quadraticCurveTo((ax + dx) / 2, post - rs * 1.2, dx - rs * 0.6, post - rs * 0.7); ctx.stroke();
    Anima.receptor(ax, post, rs, "#b9c7d8", bindAde * 0.3, { label: n ? "腺苷" : "腺苷受体" });
    Anima.receptor(dx, post, rs, mix("#d8d0d6", "#ffb38a", d2on), d2on > 0.6 && lt > 1 ? 1 : 0.1, { shape: "square", label: "D2" });
    // 越积越多的腺苷
    const cnt = Math.min(5, Math.floor(lt * 1.2));
    for (let k = 0; k < cnt; k++) {
      if (k === 0) continue;
      const leave = P(6.6 + k * 0.2, 1.2);
      const x = W * (n ? 0.08 : 0.1) + k * s * 1.6 + leave * W * 0.1, y = H * 0.4 + (k % 2) * s * 0.8;
      chara(x, y, s * 0.8, Object.assign({}, ADE, { eyes: "sleepy", mouth: "o", alpha: 1 - leave, seed: k }));
    }
    // 结合在受体上的那位
    const site = { x: ax, y: post - rs * 1.62 };
    const ap = P(1.2, 1.2), leave0 = P(6.4, 1);
    const axx = lerp(W * 0.08, site.x, ap) + leave0 * W * 0.12, ayy = lerp(H * 0.36, site.y, ap) - leave0 * H * 0.12;
    if (1 - leave0 > 0.02) chara(axx, ayy, s, Object.assign({}, ADE, { eyes: bindAde > 0.5 ? "closed" : "sleepy", arms: bindAde > 0.5 ? "hug" : "down", alpha: 1 - leave0, walk: ap < 1 ? time * 8 : null }));
    // 咖啡因访客
    if (caf > 0.01) {
      const cx = lerp(W + s * 2, site.x, caf);
      chara(cx, site.y, s, { who: "drug", hatColor: "#c7a07a", hatColor2: "#fff3e0", arms: caf >= 1 ? "fist" : "hold", eyes: caf >= 1 ? "happy" : "open", walk: caf < 1 ? time * 9 : null, dir: -1, tag: n ? null : "咖啡因" });
      if (win(6.2, 7.6)) sfx("让一让！", site.x + s * 2.4, site.y - s * 3.4, H * 0.04, "#b07a4a", -0.1, 1);
    }
    // D2 上的多巴胺
    const dd = { x: dx, y: post - rs * 1.62 };
    chara(dd.x, dd.y, s, { who: "DA", eyes: d2on > 0.6 ? "happy" : "open", arms: d2on > 0.6 ? "up" : "down", mouth: d2on > 0.6 ? "grin" : "wavy" });
    if (d2on < 0.5 && lt > 3) emote("?", dd.x + s, dd.y - s * 3.4, s * 0.8);
    // 右上：大脑
    const bx = W * (n ? 0.8 : 0.8), by = Anima.topSafe() + H * 0.16, br = H * 0.1;
    brainBlob(bx, by, br, lt < 2.4 ? 0.7 : (lt < 7 ? 0.2 : 0.9));
    const ty = Anima.topSafe() + H * 0.01;
    callout("a-acc", n ? win(0.6, 3) : win(0.6, 6), W * 0.14, H * 0.36, n ? W * 0.3 : W * 0.2, n ? ty : H * 0.18, "醒得越久，腺苷越多");
    callout("a-pair", n ? win(3.2, 6) : win(2.6, 7.4), (ax + dx) / 2, post - rs * 1.1, n ? W * 0.55 : (ax + dx) / 2 + W * 0.06, H * 0.93, n ? "D2 变迟钝" : "腺苷一结合，旁边的 D2 变迟钝");
    callout("a-caf", lt > 7.6, site.x, site.y - s * 3.1, n ? W * 0.35 : site.x - W * 0.05, n ? ty : H * 0.22, "咖啡因占住腺苷受体");
    say("a-da", lt > 8.6, dd.x, dd.y - s * 3.1, n ? W * 0.75 : dd.x + W * 0.16, n ? H * 0.52 : H * 0.42, "又收得到信啦！", "say");
    ctx.restore();
  }

  // ================= 第 3、4 幕：多巴胺回收门 =================
  function gT() {
    const n = N();
    const cx = W * (n ? 0.3 : 0.32), tw = Math.min(W * (n ? 0.52 : 0.44), H * 0.95), th = H * (n ? 0.34 : 0.38), post = H * 0.76;
    const panel = { x: W * (n ? 0.62 : 0.64), y: Anima.topSafe() + H * 0.06, w: W * (n ? 0.35 : 0.32), h: H * (n ? 0.42 : 0.44) };
    return { n, cx, tw, th, post, panel, T: { x: cx + tw * 0.38, y: th * 0.8 }, s: H * (n ? 0.032 : 0.034) };
  }
  // 突触里的多巴胺水位（随时间）
  function level(t) {
    if (cur === 2) return 0.2 + 0.7 * ease((t - 1.2) / 2) + (t > 3 ? 0.06 * Math.sin(t * 5) : 0);
    return 0.2 + 0.3 * ease((t - 1.5) / 6);
  }
  function transView(a) {
    const g = gT(), n = g.n, s2 = cur === 2;
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fff6ee"); bg.addColorStop(0.5, "#f1f7fb"); bg.addColorStop(1, "#fff3ea");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#ffe3c4", 0.7, 33);
    Anima.postMembrane(g.post, C.post, {});
    const lv = level(lt);
    for (let i = 0; i < 3; i++) Anima.receptor(g.cx - g.tw * 0.32 + i * g.tw * 0.26, g.post, H * 0.04, "#ffb38a", lv > 0.35 ? 0.4 + 0.6 * lv : 0.1, { shape: "square" });
    text("觉醒回路的下一站", W * (n ? 0.3 : 0.32), g.post + (H - g.post) * 0.6, fsS() * 0.78, C.soft);
    Anima.terminal(g.cx, 0, g.tw, g.th, C.term);
    text("多巴胺神经元末梢", g.cx - g.tw * 0.08, Math.max(g.th * 0.42, Anima.topSafe() + fsS() * 0.6), fsS() * 0.8, C.ink);
    // 回收门：兴奋剂完全堵住；莫达非尼只占一部分
    const block = s2 ? P(1, 1) : P(1.5, 3) * 0.55;
    Anima.transporter(g.T.x, g.T.y, H * 0.045, "#9fc3ea", time * (3 - block * 2.8), s2 && block > 0.5);
    // 多巴胺快递员：水位越高越多
    const cnt = Math.round(2 + lv * 7);
    for (let k = 0; k < cnt; k++) {
      const x = g.cx - g.tw * 0.45 + ((k * 0.618 + Math.sin(time * 0.4 + k) * 0.04) % 1) * g.tw * 0.75, y = g.th + (g.post - g.th) * (0.3 + 0.4 * ((k * 0.383) % 1)) + Math.sin(time * 2 + k) * H * 0.01;
      const who = s2 && k % 4 === 3 ? "NE" : "DA";
      chara(x, y, g.s * 0.8, { who, eyes: "happy", arms: k % 2 ? "up" : "down", shadow: false, seed: k });
    }
    // 药物访客
    const dp = g.T.x + H * 0.06, dy = g.T.y + H * 0.12;
    if (s2) {
      const p = P(0.3, 1);
      chara(lerp(W + 20, dp, p), dy, g.s * 1.1, { who: "drug", hatColor: "#ff9a52", arms: "fist", eyes: "angry", dir: -1, tag: n ? null : "哌甲酯", walk: p < 1 ? time * 9 : null });
      // 苯丙胺钻进末梢，把囊泡里的多巴胺挤出来
      const q = P(3, 1.5);
      if (q > 0.01) {
        const vx = g.cx - g.tw * 0.2, vy = g.th * 0.72;
        Anima.vesicle(vx, vy, H * 0.04, "#ff9a52", 5, 3);
        chara(lerp(g.cx + g.tw * 0.2, vx + H * 0.06, q), vy + H * 0.05, g.s * 0.9, { who: "drug", hatColor: "#ff7a7a", arms: "point", dir: -1, eyes: "open", tag: n ? null : "苯丙胺", alpha: q });
        if (win(4.4, 7)) sfx("挤！", vx - H * 0.02, n ? vy + H * 0.1 : vy - H * 0.06, H * 0.04, C.bad, -0.1, 1);
      }
      const r = P(9, 1);
      if (r > 0.01) chara(dp + H * 0.09, dy + H * 0.02, g.s * 0.95, { who: "drug", hatColor: "#ffd27a", arms: "wave", dir: -1, eyes: "happy", tag: n ? null : "索利氨酯", alpha: r });
    } else {
      for (let k = 0; k < 4; k++) {
        const p = P(0.6 + k * 0.8, 1.4);
        if (p < 0.01) continue;
        const fx = g.T.x + H * (0.05 + (k % 2) * 0.06), fy = g.T.y + H * (0.08 + Math.floor(k / 2) * 0.1);
        chara(lerp(W + 20, fx, p), fy, g.s * 0.75, { who: "drug", hatColor: "#ffc46b", arms: k % 2 ? "wave" : "down", dir: -1, eyes: "happy", walk: p < 1 ? time * 8 : null, seed: k, tag: !n && k === 3 ? "莫达非尼" : null });
      }
      // 下游：组胺、食欲素也被带动
      if (lt > 8) {
        const q = P(8, 1), hx = W * (n ? 0.66 : 0.7), hy = g.post + (H - g.post) * 0.7;
        ctx.save(); ctx.globalAlpha *= q;
        chara(hx, hy, g.s * 0.9, { who: "His", eyes: "happy", arms: "up", tag: n ? null : "组胺" });
        chara(hx + H * 0.1, hy, g.s * 0.9, { who: "Ox", eyes: "happy", arms: "wave", tag: n ? null : "食欲素" });
        ctx.restore();
      }
    }
    // 右上：水位小图
    const pn = g.panel;
    card(pn.x, pn.y, pn.w, pn.h, "突触里的多巴胺", "#ffe0c4");
    const x0 = pn.x + pn.w * 0.08, x1 = pn.x + pn.w * 0.92, y0 = pn.y + pn.h * 0.18, y1 = pn.y + pn.h * 0.88;
    outline(1.2); ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.save(); ctx.strokeStyle = s2 ? "#ff7a52" : "#e0a33a"; ctx.lineWidth = Math.max(2.5, H * 0.007); ctx.lineJoin = "round"; ctx.beginPath();
    const tMax = Math.min(lt, 12);
    for (let i = 0; i <= 80; i++) { const t = tMax * i / 80, x = lerp(x0, x1, t / 12), y = lerp(y1, y0, level(t)); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    // 标注
    const ty = Anima.topSafe() + H * 0.01, low = H * 0.93;
    if (s2) {
      callout("t-block", n ? win(1.4, 4.2) : win(1.4, 13), g.T.x - H * 0.03, g.T.y, n ? W * 0.3 : g.T.x + W * 0.04, n ? low : g.th + H * 0.2, "DAT、NET 被堵住");
      callout("t-high", n ? win(4.4, 8.6) : lt > 3.6, (x0 + x1) / 2, lerp(y1, y0, 0.85), (x0 + x1) / 2, pn.y + pn.h + H * 0.08, "一下子涨得很高");
      callout("t-sol", lt > 9.6, dp + H * 0.09, dy - g.s * 2.6, n ? W * 0.62 : W * 0.78, n ? low : pn.y + pn.h + H * 0.2, n ? "索利氨酯：更温和" : "索利氨酯：也挡 DAT、NET，更温和");
    } else {
      callout("t-weak", n ? win(2.2, 5.4) : win(2.2, 13), g.T.x - H * 0.03, g.T.y, n ? W * 0.3 : g.T.x + W * 0.04, n ? low : g.th + H * 0.2, n ? "结合不牢，但人多" : "结合不牢，但浓度高、人多");
      callout("t-tonic", n ? win(5.6, 8) : lt > 5.6, lerp(x0, x1, 0.55), lerp(y1, y0, level(6.6)), (x0 + x1) / 2, pn.y + pn.h + H * 0.08, "慢慢升高、平稳维持");
      callout("t-down", lt > 8.8, W * (n ? 0.66 : 0.7), g.post + (H - g.post) * 0.4, n ? W * 0.3 : W * 0.44, low, n ? "再带动组胺、食欲素" : "可能再带动组胺、食欲素");
    }
    ctx.restore();
  }

  // ================= 第 5 幕：H3 刹车 =================
  function h3View(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, "#fbf4ff"); bg.addColorStop(0.5, "#f3f5fb"); bg.addColorStop(1, "#fff4ec");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#eadcff", 0.7, 81);
    const cx = W * (n ? 0.36 : 0.4), tw = Math.min(W * (n ? 0.6 : 0.5), H * 1.0), th = H * (n ? 0.34 : 0.38), post = H * 0.76, s = H * (n ? 0.034 : 0.036);
    const drug = P(5, 1.4), brake = lt < 5 ? P(1.5, 1) : 1 - drug;
    const rel = 0.3 + 0.7 * (1 - brake) * (lt > 5 ? 1 : 0.4);
    const awake = lt > 7 ? 1 : 0.2;
    Anima.postMembrane(post, C.post, { face: true, faceX: W * (n ? 0.1 : 0.08), mood: awake > 0.5 ? 1 : 0 });
    for (let i = 0; i < 3; i++) Anima.receptor(cx - tw * 0.3 + i * tw * 0.3, post, H * 0.04, "#d9b8f0", rel > 0.6 ? 1 : 0.2, { label: i === 1 ? "H1" : null });
    text("大脑皮层", W * (n ? 0.28 : 0.2), post + (H - post) * 0.62, fsS() * 0.78, C.soft);
    Anima.terminal(cx, 0, tw, th, "#f0e0fb");
    text("组胺神经元末梢", cx - tw * 0.1, Math.max(th * 0.42, Anima.topSafe() + fsS() * 0.6), fsS() * 0.8, C.ink);
    // H3：末梢膜上的刹车
    const hx = cx + tw * 0.34, hy = th * 0.8;
    ctx.save(); ctx.translate(hx, hy); ctx.rotate(-0.5);
    Anima.receptor(0, 0, H * 0.035, "#b98ad8", brake, { dir: -1, shape: "tri" });
    ctx.restore();
    chip("H3 刹车", hx + H * 0.1, hy - H * 0.05, brake > 0.5 ? "#ffd6dc" : "#e3f5ea", fsS() * 0.72);
    // 组胺快递员：刹车踩着时少，松开后多
    const cnt = Math.round(1 + rel * 6);
    for (let k = 0; k < cnt; k++) {
      const t = ((time * 0.18) + k / cnt) % 1;
      const x = cx - tw * 0.3 + ((k * 0.43) % 1) * tw * 0.6, y = lerp(th + H * 0.02, post - H * 0.07, t);
      chara(x, y + s * 2, s * 0.8, { who: "His", eyes: "happy", arms: k % 2 ? "up" : "down", alpha: Math.sin(t * Math.PI), shadow: false, seed: k });
    }
    // 回头按刹车的那位组胺
    if (lt < 5.2) {
      const p = P(0.6, 1);
      chara(hx + H * 0.02, hy + H * 0.05 + s * 3.1 + (1 - p) * H * 0.1, s, { who: "His", arms: "point", eyes: "open", dir: -1, tag: n ? null : "组胺" });
    }
    if (drug > 0.01) chara(lerp(W + 30, hx + H * 0.03, drug), hy + H * 0.05 + s * 3.1, s * 1.1, { who: "drug", hatColor: "#b98ad8", arms: drug >= 1 ? "shh" : "hold", eyes: "happy", dir: -1, tag: n ? null : "替洛利生", walk: drug < 1 ? time * 9 : null });
    const ty = Anima.topSafe() + H * 0.01;
    say("h-stop", win(1.8, 5), hx, hy + H * 0.05, n ? W * 0.7 : hx + W * 0.15, n ? H * 0.5 : th + H * 0.1, "够了，少放一点～", "say");
    callout("h-pit", lt > 6.6, hx, hy + H * 0.06, n ? W * 0.5 : hx + W * 0.1, n ? ty : th + H * 0.16, "替洛利生坐进 H3：刹车松开");
    callout("h-more", lt > (n ? 9.5 : 8.4), cx, (th + post) / 2, n ? W * 0.5 : cx - W * 0.22, H * 0.93, "组胺变多，叫醒皮层");
    ctx.restore();
  }

  // ================= 第 6 幕：夜里睡深 =================
  function nightView(a) {
    const n = N();
    ctx.save(); ctx.globalAlpha *= a;
    Anima.wash("#f1f0ff", "#fff7ea");
    Anima.bokeh(5, "#dfe3ff", 0.7, 17);
    const top = Anima.topSafe() + H * 0.07, gap = W * 0.025;
    const lw = W * (n ? 0.58 : 0.6), rw = W - gap * 3 - lw, ch = H * 0.93 - top;
    card(gap, top, lw, ch, "夜里：睡眠的深度", "#e4e0ff");
    card(gap * 2 + lw, top, rw, ch, "白天", "#fff1b8");
    // 左：睡眠深度图（越往下越深）
    const x0 = gap + lw * 0.1, x1 = gap + lw * 0.95, y0 = top + ch * 0.2, y1 = top + ch * 0.72;
    const fs = fsS() * (n ? 0.7 : 0.78);
    outline(1.2); ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); ctx.stroke();
    text("醒", x0 - fs * 0.8, y0, fs, C.soft);
    text("深", x0 - fs * 0.8, y1, fs, C.soft);
    const before = [0.2, 0.55, 0.3, 0.1, 0.45, 0.05, 0.35, 0.15, 0.3, 0.05, 0.2, 0.1];
    const after = [0.3, 0.75, 1, 0.95, 0.6, 0.9, 0.85, 0.5, 0.6, 0.4, 0.45, 0.3];
    const step = (arr, prog, col, dash) => {
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = Math.max(2.5, H * 0.007); ctx.lineJoin = "round"; if (dash) ctx.setLineDash(dash);
      ctx.beginPath();
      const m = arr.length, upto = prog * m;
      for (let i = 0; i < m && i < upto; i++) {
        const xa = lerp(x0, x1, i / m), xb = lerp(x0, x1, Math.min(i + 1, upto) / m), y = lerp(y0, y1, arr[i]);
        if (i) ctx.lineTo(xa, y); else ctx.moveTo(xa, y);
        ctx.lineTo(xb, y);
      }
      ctx.stroke(); ctx.restore();
    };
    const pb = P(0.5, 3.5), pa = P(5, 3.5);
    step(before, pb, "#c9bfd0", pa > 0 ? [6, 6] : null);
    if (pa > 0) {
      // 深睡的部分涂色
      ctx.save(); ctx.fillStyle = Anima.alpha("#8f84e0", 0.16);
      after.forEach((v, i) => { if (i / after.length < pa && v > 0.7) ctx.fillRect(lerp(x0, x1, i / after.length), lerp(y0, y1, 0.7), (x1 - x0) / after.length, lerp(y0, y1, v) - lerp(y0, y1, 0.7)); });
      ctx.restore();
      step(after, pa, "#8f84e0");
    }
    chip(pa > 0.1 ? "用药后：慢波睡眠变多" : "用药前：浅、碎", (x0 + x1) / 2, top + ch * 0.86, pa > 0.1 ? "#e4e0ff" : "#f1ecee", fs);
    // 夜里的药物访客
    const dp = P(4.2, 0.8);
    if (dp > 0.01) chara(x1 - lw * 0.05, y0 - H * 0.005, H * (n ? 0.03 : 0.035), { who: "drug", hatColor: "#8f9de0", arms: "shh", eyes: "closed", mouth: "cat", dir: -1, alpha: dp, tag: n ? null : "羟丁酸钠" });
    // 右：白天的人
    const rx = gap * 2 + lw + rw / 2, ry = top + ch * 0.72, ps = Math.min(H * 0.06, rw * 0.14);
    const good = lt > 9;
    chara(rx, ry, ps, Object.assign({}, PERSON, good ? { eyes: "sparkle", mouth: "grin", arms: "up" } : { eyes: "sleepy", mouth: "o", arms: "down", brow: "worry" }));
    if (!good) emote("zzz", rx + ps * 1.2, ry - ps * 3.2, ps * 0.8);
    else sparkles(rx, ry - ps * 1.6, ps * 2.2, 5, 1, 9);
    const ty = Anima.topSafe() + H * 0.01;
    callout("n-gaba", win(5.4, 13) && !n, x1 - lw * 0.05, y0 - H * 0.08, x1 - lw * 0.3, top + ch * 0.1, "作用在 GHB、GABA-B 受体上");
    say("n-day", good, rx, ry - ps * 3.2, rx, top + ch * 0.2, "白天精神多了！", "say");
    void ty;
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fffaf2"; ctx.fillRect(0, 0, W, H);
    if (S.vW > 0.02) keysView(S.vW);
    if (S.vA > 0.02) adeView(S.vA);
    if (S.vT > 0.02) transView(S.vT);
    if (S.vH > 0.02) h3View(S.vH);
    if (S.vN > 0.02) nightView(S.vN);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0913a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#ffc46b",
    titleCard: { lines: ["白天总犯困，", "药从哪扇门叫醒大脑？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
