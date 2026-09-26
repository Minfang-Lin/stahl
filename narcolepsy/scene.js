Anima.register("narcolepsy", {
    "title": "开关卡不住：发作性睡病",
    "tag": "睡眠与觉醒",
    "headline": "睡醒开关为什么【卡不住】？",
    "lede": "醒和睡像一架跷跷板，食欲素是中间那把锁扣。锁扣没了，跷跷板就在醒和睡之间乱晃；做梦时才该打开的“身体静音开关”，也会在醒着的时候误触。看看促醒药和夜里用的药，分别从哪里帮忙。",
    "summary": "食欲素锁扣、1 型发作性睡病的神经元丢失、跷跷板乱晃、REM 静音开关误触（猝倒、睡瘫、入睡幻觉），以及替洛利生、莫达非尼、羟丁酸钠的机制。",
    "chapter": "对应 Stahl《精神药理学精要》第 10 章 · 食欲素与发作性睡病",
    "footer": "白天总是突然睡着、大笑时腿发软，请到睡眠门诊做专业检查；用药请遵医嘱。",
    "canvasLabel": "食欲素锁扣稳住睡醒跷跷板、锁扣丢失后跷跷板乱晃、REM 静音开关误触导致猝倒的动画",
    "regions": ["hypo"],
    "parts": ["sleep"],
    "cast": ["Ox", "His", "GABA", "DA", "drug"],
    "color": "#ffb347"
  }, () => {
  const CH = [
    { title: "锁扣让跷跷板稳住",
      pill: ["食欲素", "锁扣"], pill2: ["跷跷板", "稳稳的"],
      text: "上一集说过，醒和睡像一架跷跷板，两边互相压制。食欲素神经元就像跷跷板中间的锁扣：白天它“咔嗒”一声扣住，让醒着的那头稳稳待着，不会一阵一阵往下滑；到了晚上它下班，跷跷板才干脆地翻到睡觉这边。",
      fact: "食欲素神经元只在下丘脑，白天活跃，帮觉醒系统保持稳定" },
    { title: "锁扣不见了",
      pill: ["食欲素", "越来越少"], pill2: ["可能原因", "自身免疫"],
      text: "在 1 型发作性睡病里，下丘脑的食欲素神经元大多已经不见了。原因还没完全弄清，一个主要的猜想是自身免疫：免疫系统可能把这群神经元误当成了敌人。神经元一旦丢失就回不来，锁扣也就没了。",
      fact: "1 型发作性睡病的人，食欲素神经元大多丢失，脑脊液里的食欲素很低" },
    { title: "跷跷板乱晃",
      pill: ["白天", "突然睡着"], pill2: ["夜里", "反复醒来"],
      text: "没有锁扣，跷跷板一碰就翻。白天它会突然滑向睡觉那头：开着会、吃着饭就睡着了，醒来精神一会儿，又撑不住；到了夜里，它又常常翻回醒着那头，一晚上醒好几次。所以发作性睡病不是睡得太多，而是睡和醒都稳不住。",
      fact: "白天过度嗜睡加上夜间睡眠不连贯，是发作性睡病的典型组合" },
    { title: "做梦时的身体静音开关",
      pill: ["REM 睡眠", "做梦"], pill2: ["肌肉", "暂时静音"],
      text: "睡眠里有一段叫快速眼动（REM）睡眠，梦大多在这时出现。这时脑干会同时打开两个开关：一个放映梦境，一个让全身肌肉暂时静音。梦里跑得再快，身体也躺着不动，免得把梦演出来。白天醒着的时候，食欲素守着这两个开关，不让它们乱开。",
      fact: "REM 睡眠时，除了眼球和呼吸肌，全身肌肉的张力几乎消失" },
    { title: "醒着时静音开关误开",
      pill: ["猝倒", "意识清醒"], pill2: ["诱因", "大笑、激动"],
      text: "食欲素没了，守门的人也没了。大笑、惊喜这样的强烈情绪，会让静音开关在醒着时突然打开：膝盖一软，脖子一歪，甚至跌坐下来，但人是清醒的，这就是猝倒。刚醒来时静音开关还没关，就动不了，叫睡瘫；刚要睡着时梦提前上演，就是入睡幻觉。",
      fact: "猝倒是 1 型发作性睡病的标志性症状，常由大笑等积极情绪诱发" },
    { title: "白天：让叫醒员多一点",
      pill: ["白天", "促醒药"], pill2: ["思路", "叫醒员变多"],
      text: "锁扣补不回来，就给觉醒那头多加点人。组胺神经元身上有个 H3 刹车，组胺多了就自己踩一脚；替洛利生是 H3 反向激动剂，把刹车松开，组胺放得更多。莫达非尼主要挡住多巴胺的回收门 DAT，索安非他酮同时挡住 DAT 和 NET，让叫醒信号多留一会儿。",
      fact: "替洛利生作用在组胺的 H3 自身受体上：刹车松开，组胺释放增多" },
    { title: "夜里：把深睡压实",
      pill: ["夜里", "羟丁酸钠"], pill2: ["未来", "补上锁扣？"],
      text: "另一种办法在夜里下手。羟丁酸钠睡前服用，和 GABA-B 受体有关，帮跷跷板稳稳压在深睡这边，让夜里不再反复醒来；睡得扎实了，白天的困倦和猝倒也常常减轻。未来的思路更直接：食欲素受体激动剂想亲自扮演锁扣，目前还在研究中。",
      fact: "羟丁酸钠能巩固夜间深睡眠，也能减少猝倒；需严格按医嘱使用" },
  ];
  const DUR = 14;
  CH.forEach((c, i) => { for (let j = 0; j < CH.length; j++) c["v" + j] = i === j ? 1 : 0; });

  const C = Object.assign({}, Anima.C, { plank: "#f3cfa6", pole: "#c9b6e8", house: "#fff4e0", roof: "#ffcf9e", bed: "#cfe0f5", panel: "#f4eefc", term: "#ffd6c4", post: "#ffe0ea" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0, v6: 0 };
  let tilt = -1, lastCur = -1;

  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsz = (k) => Math.max(11, W / 58) * Anima.UI * (k || 1);

  // 第 3 幕：一天的时间条（白天醒着但会突然睡着，夜里睡着但反复醒来）
  const DAY = 0.58, NAP = [[0.12, 0.2], [0.3, 0.37], [0.45, 0.52]], WAKE = [[0.66, 0.72], [0.79, 0.85], [0.91, 0.96]];
  const stateAt = (p) => {
    const inn = (arr) => arr.some((s) => p >= s[0] && p < s[1]);
    return p < DAY ? (inn(NAP) ? 1 : -1) : (inn(WAKE) ? -1 : 1);
  };
  const stripP = () => clamp((lt - 1) / 11.5, 0, 1);
  function tiltTarget() {
    if (cur === 0) return lt < 3.4 ? Math.sin(lt * 4.2) * 0.55 : (lt < 8.6 ? -1 : 1);
    if (cur === 2) return stateAt(stripP());
    if (cur === 6) return lt < 3 ? stateAt(0.6 + lt * 0.035) * 0.9 : (lt < 8.5 ? 1 : -1);
    return -1;
  }
  function update(dt) {
    lt = Anima.sceneTime;
    if (cur !== lastCur) { lastCur = cur; }
    tilt = lerp(tilt, tiltTarget(), 1 - Math.exp(-dt * (cur === 2 ? 6 : 3.5)));
  }

  // ---------- 共用零件 ----------
  function sky(night) {
    Anima.wash(mix("#fff3dd", "#8d90d6", night), mix("#eaf6ff", "#cfc8f0", night));
    if (night > 0.3) {
      for (let i = 0; i < 16; i++) sparkle(rnd(i + 900) * W, rnd(i + 950) * H * 0.5, H * 0.009 * (0.7 + 0.4 * Math.sin(time * 2 + i)), (night - 0.3) * 1.3, "#fffbe0");
    } else Anima.bokeh(6, "#ffe3b0", 0.7, 5);
  }
  function sunMoon(x, y, r, night) {
    ctx.save(); ctx.globalAlpha *= 1 - night;
    glow(x, y, r * 2.4, C.gold, 1);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = "#ffd76a"; ctx.fill(); outline(1.8); ctx.stroke();
    face(x, y + r * 0.1, r * 0.55, 1);
    ctx.restore();
    ctx.save(); ctx.globalAlpha *= night;
    glow(x, y, r * 2.2, "#fff6c2", 1);
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.arc(x + r * 0.55, y - r * 0.35, r * 0.85, 0, Math.PI * 2, true);
    ctx.fillStyle = "#fff4c4"; ctx.fill("evenodd"); outline(1.6); ctx.stroke();
    ctx.restore();
  }
  function ground(night, y) {
    ctx.fillStyle = mix("#e6f4dc", "#b9b6dc", night); ctx.fillRect(0, y, W, H - y);
    outline(1.4); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  // 锁扣：挂在支点上的小挂锁。k 0～1 扣上的程度；ghost 为虚线（空位）
  function padlock(x, y, s, k, ghost) {
    ctx.save();
    if (ghost) { ctx.setLineDash([4, 4]); ctx.globalAlpha *= 0.8; }
    if (k > 0.5 && !ghost) glow(x, y, s * 2.4, C.gold, (k - 0.5) * 1.6);
    outline(Math.max(2, s * 0.22)); ctx.strokeStyle = ghost ? C.soft : C.line;
    ctx.beginPath(); ctx.arc(x, y - s * 0.55 - (1 - k) * s * 0.5, s * 0.55, Math.PI, 0); ctx.stroke();
    rrect(x - s * 0.85, y - s * 0.55, s * 1.7, s * 1.3, s * 0.3);
    ctx.fillStyle = ghost ? "rgba(255,255,255,0.4)" : "#ffcf6e"; ctx.fill(); outline(1.6); if (ghost) ctx.strokeStyle = C.soft; ctx.stroke();
    if (!ghost) { ctx.fillStyle = C.line; ctx.beginPath(); ctx.arc(x, y + s * 0.02, s * 0.18, 0, Math.PI * 2); ctx.fill(); }
    ctx.restore();
  }
  // 跷跷板：返回板上某点位置（u：-1 睡那头，+1 醒那头）
  function seesaw(cx, py, L, gy, lockK, ghost) {
    const ang = -tilt * 0.22;
    ctx.beginPath(); ctx.moveTo(cx, py); ctx.lineTo(cx - H * 0.08, gy); ctx.lineTo(cx + H * 0.08, gy); ctx.closePath();
    ctx.fillStyle = C.pole; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.save(); ctx.translate(cx, py); ctx.rotate(ang);
    rrect(-L, -H * 0.02, L * 2, H * 0.035, H * 0.017); ctx.fillStyle = C.plank; ctx.fill(); outline(1.8); ctx.stroke();
    const fs = fsz(0.95);
    for (const [u, lab, col] of [[-1, "睡", "#c9c0f5"], [1, "醒", "#ffd27a"]]) {
      ctx.beginPath(); ctx.arc(u * (L + fs * 1.1), 0, fs * 0.85, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); outline(1.4); ctx.stroke();
      text(lab, u * (L + fs * 1.1), 1, fs, C.ink);
    }
    ctx.restore();
    padlock(cx, py + H * 0.075, H * 0.03, lockK, ghost);
    return (u) => ({ x: cx + Math.cos(ang) * u * L, y: py - H * 0.02 + Math.sin(ang) * u * L });
  }
  function riders(on, cs, lockless) {
    const sleepSide = tilt > 0.3, wakeSide = tilt < -0.3;
    const gp = on(-0.75);
    chara(gp.x, gp.y, cs * 1.1, { who: "GABA", arms: sleepSide ? "shh" : "down", eyes: sleepSide ? "closed" : "sleepy", mouth: sleepSide ? "cat" : "flat", dir: 1 });
    const pts = [];
    [["His", 0.55], ["NE", 0.85]].forEach((m, i) => {
      const p = on(m[1]); pts.push(p);
      chara(p.x, p.y, cs, { who: m[0], dir: -1, arms: wakeSide ? "up" : "down", eyes: wakeSide ? "happy" : (lockless ? "dizzy" : "closed"), mouth: wakeSide ? "grin" : "cat",
        jump: wakeSide ? Math.abs(Math.sin(time * 5 + i)) * 0.2 : 0 });
      if (sleepSide) emote("zzz", p.x + cs * 0.6, p.y - cs * 3.3, cs * 0.6);
    });
    return { gp, pts };
  }

  // ================= 第 1 幕：锁扣 =================
  function lockView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const night = clamp((tilt + 1) / 2, 0, 1), n = N();
    sky(night); sunMoon(W * 0.5, H * 0.26, H * 0.05, night);
    const gy = H * 0.88, cx = W * 0.5, py = H * 0.74, L = Math.min(W * 0.36, H * 0.6);
    ground(night, gy);
    const lockK = lt < 3.4 ? 0 : (lt < 8.6 ? prog(3.4, 0.4) : 1 - prog(8.6, 0.5));
    const on = seesaw(cx, py, L, gy, lockK, false);
    const cs = H * (n ? 0.05 : 0.045);
    const r = riders(on, cs, false);
    // 食欲素走到支点旁，扣上锁扣
    const walk = prog(0.6, 2.6), ox = lerp(W * 0.08, cx + H * 0.14, walk), off = lt > 8.6;
    chara(ox, gy + H * 0.005, cs * 1.05, { who: "Ox", walk: walk < 1 ? time * 9 : null, dir: off ? -1 : 1, item: off ? null : "key", arms: lt > 3.2 && lt < 5 ? "up" : "hold",
      eyes: off ? "sleepy" : (lt > 3.4 ? "happy" : "open"), mouth: lt > 3.4 && !off ? "grin" : "smile" });
    if (off && lt > 10) emote("zzz", ox + cs * 0.8, gy - cs * 3.4, cs * 0.6);
    if (win(3.4, 4.6)) { sfx("咔嗒！", cx + H * 0.07, py + H * 0.02, H * 0.05, "#e7a23a", -0.12, 1 - prog(4.2, 0.4)); Anima.speedLines(cx, py + H * 0.07, H * 0.06, 10, 0.5); }
    if (lt < 3.3) emote("sweat", r.pts[0].x - cs, r.pts[0].y - cs * 3.2, cs * 0.6);
    const topY = Anima.topSafe() + H * 0.02;
    say("n0-wob", win(0.8, 3.3), r.pts[1].x, r.pts[1].y - cs * 3.2, r.pts[1].x - W * 0.08, H * 0.36, "晃来晃去，站不稳～", "say");
    callout("n0-lock", win(4, n ? 8.4 : 13), cx, py + H * 0.075, n ? W * 0.28 : W * 0.24, n ? topY : H * 0.42, "食欲素：跷跷板的锁扣");
    say("n0-day", win(4.6, 8.4), r.pts[1].x, r.pts[1].y - cs * 3.2, n ? W * 0.72 : W * 0.8, H * 0.4, "扣住啦，一整天都醒得稳稳的！", "say");
    say("n0-off", lt > 9, ox, gy - cs * 3.2, n ? W * 0.72 : W * 0.78, H * 0.45, "到点下班，放它翻到睡觉那边～", "say");
    ctx.restore();
  }

  // ================= 第 2 幕：食欲素神经元丢失 =================
  const OX = [[0.3, 0.52], [0.43, 0.52], [0.56, 0.52], [0.69, 0.52], [0.3, 0.8], [0.43, 0.8], [0.56, 0.8], [0.69, 0.8]];
  const LOSS = [3.6, 6.8, 4.4, 8.2, 5.2, 99, 6, 7.5]; // 第 6 位留到最后
  function lossView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    Anima.wash("#fff5e8", "#fbe9f0"); Anima.bokeh(7, "#ffd9b0", 0.7, 12);
    const bx = W * (n ? 0.1 : 0.2), bw = W * (n ? 0.66 : 0.58), by = H * 0.3, bh = H * 0.62;
    // 下丘脑小屋
    ctx.beginPath(); ctx.moveTo(bx - W * 0.02, by + H * 0.02); ctx.lineTo(bx + bw / 2, by - H * 0.1); ctx.lineTo(bx + bw + W * 0.02, by + H * 0.02); ctx.closePath();
    ctx.fillStyle = C.roof; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(bx, by, bw, bh, H * 0.03); ctx.fillStyle = C.house; ctx.fill(); outline(1.8); ctx.stroke();
    text("下丘脑", bx + bw / 2, by - H * 0.03, fsz(1), C.ink);
    const cs = H * (n ? 0.048 : 0.045);
    const map = (p) => ({ x: bx + (p[0] - 0.22) / 0.56 * bw, y: H * p[1] });
    let lastP = null;
    OX.forEach((p, i) => {
      const q = map(p), k = prog(LOSS[i], 1.4);
      if (k >= 1) { // 空位：虚线圈
        ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.strokeStyle = Anima.alpha(C.line, 0.45);
        ctx.beginPath(); ctx.ellipse(q.x, q.y - cs * 1.5, cs * 0.9, cs * 1.6, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
        return;
      }
      chara(q.x, q.y, cs, { who: "Ox", gray: k * 0.9, alpha: 1 - k * 0.85, eyes: k > 0.05 ? "teary" : "happy", mouth: k > 0.05 ? "sad" : "smile", arms: k > 0 ? "down" : "wave", seed: i });
      if (i === 5) lastP = q;
    });
    // 免疫细胞：可能误把食欲素神经元当成敌人（机制还没完全弄清）
    const im = [0, 1].map((i) => {
      const p = prog(1.2 + i * 0.5, 2.4);
      return { x: lerp(W + cs * 2, bx + bw + (n ? -W * 0.06 : W * 0.06) + i * W * 0.07, p), y: H * (0.62 + i * 0.22), p };
    });
    im.forEach((m, i) => {
      chara(m.x, m.y, cs * 0.95, { who: "neuron", hair: "#8cb7d9", eye: "#4d7fa6", cloth: "#e3f1fb", hat: "helmet", hatColor: "#b9d8ee", label: "免疫", dir: -1,
        walk: m.p < 1 ? time * 8 + i : null, item: "shield", arms: "hold", eyes: "open", brow: "worry" });
      if (m.p >= 1) emote("?", m.x + cs * 0.8, m.y - cs * 3.3, cs * 0.6);
    });
    const topY = Anima.topSafe() + H * 0.02;
    callout("n1-ox", win(0.5, 3.4), map(OX[1]).x, map(OX[1]).y - cs * 3, n ? W * 0.35 : W * 0.3, topY, "食欲素神经元：只住在下丘脑");
    callout("n1-im", win(3.6, n ? 8 : 13), im[0].x, im[0].y - cs * 3.1, n ? W * 0.62 : W * 0.78, n ? topY : H * 0.2, "可能是免疫系统误伤");
    if (lastP) say("n1-last", lt > 8.8, lastP.x, lastP.y - cs * 3.2, lastP.x + W * (n ? 0.02 : 0.1), H * (n ? 0.3 : 0.24), "大家都不见了…锁扣没人扣了", "think");
    ctx.restore();
  }

  // ================= 第 3 幕：跷跷板乱晃 =================
  function wobbleView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const night = clamp((tilt + 1) / 2, 0, 1), n = N();
    sky(night); sunMoon(W * 0.5, H * 0.25, H * 0.045, night);
    const gy = H * 0.8, cx = W * 0.5, py = H * 0.66, L = Math.min(W * 0.34, H * 0.56);
    ground(night, gy);
    const on = seesaw(cx, py, L, gy, 0, true);
    const cs = H * (n ? 0.046 : 0.042);
    const r = riders(on, cs, true);
    // 一天的时间条
    const x0 = W * 0.08, x1 = W * 0.92, sy = H * 0.885, sh = H * 0.04, p = stripP(), fs = fsz(0.8);
    rrect(x0, sy, x1 - x0, sh, sh / 2); ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.fill();
    ctx.save(); rrect(x0, sy, x1 - x0, sh, sh / 2); ctx.clip();
    const step = 1 / 120;
    for (let u = 0; u < p; u += step) {
      const st = stateAt(u);
      ctx.fillStyle = st < 0 ? "#ffd76a" : "#9d95e0";
      ctx.fillRect(x0 + u * (x1 - x0), sy, (x1 - x0) * step + 1, sh);
    }
    ctx.restore();
    outline(1.4); rrect(x0, sy, x1 - x0, sh, sh / 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x0 + DAY * (x1 - x0), sy - 3); ctx.lineTo(x0 + DAY * (x1 - x0), sy + sh + 3); ctx.stroke();
    text("白天", x0 + DAY * 0.5 * (x1 - x0), sy - fs * 0.8, fs, C.ink);
    text("夜里", x0 + (DAY + 1) * 0.5 * (x1 - x0), sy - fs * 0.8, fs, C.ink);
    const cxp = x0 + p * (x1 - x0);
    ctx.beginPath(); ctx.moveTo(cxp, sy - 4); ctx.lineTo(cxp - 6, sy - 12); ctx.lineTo(cxp + 6, sy - 12); ctx.closePath(); ctx.fillStyle = C.rose; ctx.fill(); outline(1.2); ctx.stroke();
    const st = stateAt(p), nap = p < DAY && st > 0, wk = p >= DAY && st < 0;
    if (nap) sfx("咚…", r.pts[0].x, r.pts[0].y - cs * 4.5, H * 0.045, "#8f84e0", -0.1, 0.9);
    if (wk) sfx("又醒了", r.gp.x, r.gp.y - cs * 4.6, H * 0.04, "#e7a23a", -0.1, 0.9);
    const topY = Anima.topSafe() + H * 0.02;
    callout("n2-empty", win(0.3, n ? 3.8 : 13), cx, py + H * 0.075, n ? W * 0.3 : W * 0.24, n ? topY : H * 0.4, "锁扣空了：一碰就翻");
    say("n2-nap", p < DAY && lt > 3.8, r.pts[1].x, r.pts[1].y - cs * 3.2, n ? W * 0.7 : W * 0.8, H * 0.36, "白天说睡就睡着了？！", "shout");
    say("n2-wake", p >= DAY + 0.04, r.gp.x, r.gp.y - cs * 3.3, n ? W * 0.28 : W * 0.2, H * 0.36, "夜里却一次次醒来…", "think");
    ctx.restore();
  }

  // ================= 第 4、5 幕：REM 开关台 =================
  function panelBox(x, y, w, h, dream, mute, guard) {
    rrect(x, y, w, h, H * 0.03); ctx.fillStyle = C.panel; ctx.fill(); outline(1.8); ctx.stroke();
    const fs = fsz(0.9);
    text("脑干 · REM 开关台", x + w / 2, y + fs * 1.1, fs, C.ink);
    const rows = [["做梦", dream, "#b8b0f0"], ["肌肉静音", mute, "#ff9aa9"]], pos = [];
    rows.forEach((r, i) => {
      const ry = y + h * (0.36 + i * 0.26), lx = x + w * 0.1, tx = x + w * 0.62, tw = w * 0.22, th = fs * 1.2;
      text(r[0], lx, ry, fs, C.ink, "left");
      if (r[1] > 0.05) glow(tx + tw / 2, ry, tw, r[2], r[1]);
      rrect(tx, ry - th / 2, tw, th, th / 2); ctx.fillStyle = mix("#e6e0ee", r[2], r[1]); ctx.fill(); outline(1.4); ctx.stroke();
      ctx.beginPath(); ctx.arc(tx + th / 2 + (tw - th) * r[1], ry, th * 0.42, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
      text(r[1] > 0.5 ? "开" : "关", tx + tw + fs * 0.9, ry, fs * 0.85, r[1] > 0.5 ? C.bad : C.soft);
      pos.push({ x: tx, y: ry });
    });
    // 守门员：食欲素（guard 0 表示空位）
    const gx = x + w * 0.5, gyy = y + h * 0.97, cs = H * 0.036;
    if (guard > 0.02) chara(gx, gyy, cs, { who: "Ox", item: "shield", arms: "hold", eyes: "happy", alpha: guard });
    else {
      ctx.save(); ctx.setLineDash([4, 5]); outline(1.4); ctx.strokeStyle = C.soft;
      ctx.beginPath(); ctx.ellipse(gx, gyy - cs * 1.5, cs * 0.9, cs * 1.5, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
      emote("?", gx, gyy - cs * 3.2, cs * 0.7);
    }
    return { dream: pos[0], mute: pos[1], guard: { x: gx, y: gyy - cs * 3 } };
  }
  function muteIcon(x, y, s) {
    ctx.save(); outline(Math.max(1.5, s * 0.12));
    ctx.beginPath(); ctx.moveTo(x - s * 0.6, y - s * 0.25); ctx.lineTo(x - s * 0.3, y - s * 0.25); ctx.lineTo(x, y - s * 0.55); ctx.lineTo(x, y + s * 0.55); ctx.lineTo(x - s * 0.3, y + s * 0.25); ctx.lineTo(x - s * 0.6, y + s * 0.25); ctx.closePath();
    ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
    ctx.strokeStyle = C.bad; ctx.beginPath(); ctx.moveTo(x + s * 0.2, y - s * 0.3); ctx.lineTo(x + s * 0.7, y + s * 0.3); ctx.moveTo(x + s * 0.7, y - s * 0.3); ctx.lineTo(x + s * 0.2, y + s * 0.3); ctx.stroke();
    ctx.restore();
  }
  function cable(ax, ay, bx, by, on) {
    ctx.save(); ctx.setLineDash([6, 6]); outline(2); ctx.strokeStyle = on > 0.5 ? "#ff9aa9" : Anima.alpha(C.line, 0.35);
    const mx = (ax + bx) / 2, my = Math.max(ay, by) + H * 0.08;
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.quadraticCurveTo(mx, my, bx, by); ctx.stroke(); ctx.restore();
    if (on > 0.5) {
      const t = (time * 0.8) % 1, x = (1 - t) * (1 - t) * ax + 2 * (1 - t) * t * mx + t * t * bx, y = (1 - t) * (1 - t) * ay + 2 * (1 - t) * t * my + t * t * by;
      glow(x, y, H * 0.03, "#ff9aa9", 1);
    }
  }
  function remView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    sky(1);
    const rem = prog(3, 0.8), guard = prog(9.5, 1);
    // 床和睡着的人
    const bx0 = W * 0.05, bx1 = W * (n ? 0.5 : 0.48), by = H * 0.72;
    rrect(bx0, by, bx1 - bx0, H * 0.08, H * 0.02); ctx.fillStyle = C.bed; ctx.fill(); outline(1.6); ctx.stroke();
    rrect(bx0 + W * 0.01, by - H * 0.05, W * 0.08, H * 0.05, H * 0.02); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
    const cs = H * (n ? 0.06 : 0.065), px = bx0 + W * 0.05 + cs * 3.1, py = by - cs * 0.9;
    ctx.save(); ctx.translate(px, py); ctx.rotate(-Math.PI / 2);
    chara(0, 0, cs, { who: "neuron", eyes: "closed", mouth: rem > 0.5 ? "o" : "cat", gray: rem * 0.45, shadow: false, bob: 0 });
    ctx.restore();
    // 被子
    ctx.beginPath(); ctx.moveTo(px - cs * 1.4, by); ctx.quadraticCurveTo(px - cs * 1.2, by - cs * 1.6, px + cs * 0.4, by - cs * 1.3); ctx.lineTo(px + cs * 0.6, by); ctx.closePath();
    ctx.fillStyle = "#ffd6e0"; ctx.fill(); outline(1.4); ctx.stroke();
    const headX = px - cs * 2.1, headY = py;
    if (rem < 0.5) emote("zzz", headX + cs * 0.4, headY - cs * 1.6, cs * 0.6);
    else { // 眼球快速转动
      outline(1.4); const d = Math.sin(time * 14) * cs * 0.15;
      ctx.beginPath(); ctx.moveTo(headX - cs * 0.3 + d, headY - cs * 1.25); ctx.lineTo(headX + cs * 0.3 + d, headY - cs * 1.25); ctx.stroke();
      muteIcon(px - cs * 0.2, by - cs * 2.1, cs * 0.55);
    }
    // 梦境云朵：梦里在奔跑
    const dx = (bx0 + bx1) / 2, dy = H * (n ? 0.43 : 0.4), dr = H * 0.1;
    if (rem > 0.02) {
      ctx.save(); ctx.globalAlpha *= rem;
      ctx.fillStyle = "#fff"; outline(1.6);
      ctx.beginPath();
      for (let i = 0; i < 9; i++) { const q = i / 9 * Math.PI * 2, x = dx + Math.cos(q) * dr * 1.5, y = dy + Math.sin(q) * dr * 0.75; ctx.moveTo(x + dr * 0.45, y); ctx.arc(x, y, dr * 0.45, 0, Math.PI * 2); }
      ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(dx, dy, dr * 1.55, dr * 0.8, 0, 0, Math.PI * 2); ctx.fill();
      for (let i = 1; i <= 2; i++) { ctx.beginPath(); ctx.arc(lerp(dx, headX, i / 3), lerp(dy + dr * 0.9, headY - cs * 1.6, i / 3), dr * (0.2 - i * 0.05), 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
      const run = (time * 0.25) % 1;
      chara(dx - dr + run * dr * 2, dy + dr * 0.45, dr * 0.3, { who: "neuron", walk: time * 12, eyes: "happy", mouth: "grin", shadow: false });
      ctx.restore();
    }
    const pw = W * (n ? 0.4 : 0.34), px0 = W * 0.96 - pw, py0 = H * 0.3, ph = H * 0.52;
    const P = panelBox(px0, py0, pw, ph, rem, rem, guard);
    cable(P.mute.x, P.mute.y, px - cs * 0.2, by - cs * 1.4, rem);
    const topY = Anima.topSafe() + H * 0.02;
    callout("n3-dream", rem > 0.5 && win(3.8, n ? 6.6 : 9.4), dx, dy - dr * 0.7, n ? W * 0.3 : dx, topY, "REM：做梦开关打开");
    callout("n3-mute", rem > 0.5 && win(n ? 6.6 : 5.5, 9.4), px - cs * 0.2, by - cs * 2.1, n ? W * 0.4 : W * 0.5, n ? topY : H * 0.2, "同时肌肉静音：梦里跑，身体不动");
    say("n3-guard", lt > 10, P.guard.x, P.guard.y, n ? W * 0.45 : W * 0.55, H * 0.25, "白天醒着时，我守住这两个开关！", "say");
    ctx.restore();
  }
  function cataView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    sky(0);
    const gy = H * 0.86; ground(0, gy);
    const pw = W * (n ? 0.4 : 0.34), px0 = W * 0.96 - pw, py0 = H * 0.26, ph = H * 0.5;
    const muteK = lt < 5 ? 0 : (lt < 8.6 ? prog(5, 0.3) : 1 - prog(8.6, 0.6));
    const P = panelBox(px0, py0, pw, ph, 0, muteK, 0);
    const cs = H * (n ? 0.055 : 0.06), mx = W * (n ? 0.34 : 0.36), fx = W * 0.12;
    chara(fx, gy, cs, { who: "neuron", hair: "#e89a6a", cloth: "#d6f0e0", style: "bob", dir: 1, arms: lt < 2.5 ? "wave" : "down", eyes: lt > 5.3 && lt < 9 ? "wide" : "happy", mouth: lt > 5.3 && lt < 9 ? "o" : "grin" });
    const laugh = win(2.4, 5.4), slump = lt < 5.2 ? 0 : (lt < 8.8 ? prog(5.2, 0.5) : 1 - prog(8.8, 1));
    ctx.save(); ctx.translate(mx, gy); ctx.rotate(slump * 0.12); ctx.scale(1 + slump * 0.12, 1 - slump * 0.38);
    chara(0, 0, cs, { who: "neuron", dir: -1, arms: laugh ? "up" : "down", eyes: laugh ? "happy" : (slump > 0.3 ? "wide" : "open"), mouth: laugh ? "grin" : (slump > 0.3 ? "wavy" : "smile"), gray: slump * 0.35 });
    ctx.restore();
    const head = { x: mx, y: gy - cs * 2.6 * (1 - slump * 0.38) };
    if (laugh) { sfx("哈哈哈！", head.x + cs * 1.2, head.y - cs * 1.4, H * 0.045, "#e7a23a", -0.12, 1); emote("note", head.x - cs, head.y - cs * 0.8, cs * 0.6); }
    // 情绪闪电从头跑到开关台
    if (win(4, 5.2)) Anima.spark([[head.x, head.y], [lerp(head.x, P.mute.x, 0.5), H * 0.3], [P.mute.x, P.mute.y]], (lt - 4) / 1.1, H * 0.025, C.gold);
    if (slump > 0.3) { emote("sweat", head.x + cs, head.y - cs * 0.3, cs * 0.6); sfx("腿一软…", mx - cs * 0.3, gy - cs * 0.4, H * 0.04, "#8f84e0", 0.08, slump); muteIcon(mx + cs * 1.1, gy - cs * 0.9, cs * 0.5); }
    const topY = Anima.topSafe() + H * 0.02;
    say("n4-joke", win(0.4, 2.4), fx, gy - cs * 3.2, fx + W * 0.1, H * (n ? 0.4 : 0.44), "给你讲个超好笑的～", "say");
    callout("n4-empty", win(2.6, 5), P.guard.x, P.guard.y, P.guard.x, H * 0.93, "守门的食欲素不在了");
    callout("n4-cata", win(5.8, 9), mx, gy - cs * 1.5, n ? W * 0.3 : W * 0.3, n ? topY : H * 0.3, "猝倒：肌肉静音了，人却清醒");
    callout("n4-par", lt > 9.4, P.mute.x, P.mute.y, n ? W * 0.5 : W * 0.4, n ? topY : H * 0.26, "静音开关醒着开 → 猝倒、睡瘫");
    callout("n4-hal", lt > 10.6, P.dream.x, P.dream.y, n ? W * 0.5 : W * 0.4, n ? topY + fsz(1) * 2.6 : H * 0.14, "做梦开关醒着开 → 入睡幻觉");
    ctx.restore();
  }

  // ================= 第 6 幕：白天的促醒药 =================
  function card(x, y, w, h, title, color) {
    rrect(x, y, w, h, H * 0.03); ctx.fillStyle = "#fffdfb"; ctx.fill(); outline(1.8); ctx.stroke();
    const fs = fsz(0.95); ctx.font = fs + "px " + Anima.ROUND;
    const tw = ctx.measureText(title).width + fs * 1.4;
    rrect(x + w / 2 - tw / 2, y - fs * 0.75, tw, fs * 1.5, fs * 0.75); ctx.fillStyle = color; ctx.fill(); outline(1.6); ctx.stroke();
    text(title, x + w / 2, y + 1, fs, C.ink);
  }
  function miniSyn(R, who, kind, k) {
    ctx.save(); rrect(R.x, R.y, R.w, R.h, H * 0.03); ctx.clip();
    ctx.fillStyle = "#eef8fc"; ctx.fillRect(R.x, R.y, R.w, R.h);
    const cx = R.x + R.w / 2, th = R.h * 0.42, tw = R.w * 0.78;
    const T = Anima.terminal(cx, R.y, tw, th, C.term);
    const post = R.y + R.h * 0.84;
    ctx.fillStyle = C.post; ctx.fillRect(R.x, post, R.w, R.h); outline(1.6); ctx.beginPath(); ctx.moveTo(R.x, post); ctx.lineTo(R.x + R.w, post); ctx.stroke();
    ctx.restore();
    const col = Anima.CAST[who].hair, s = Math.min(H * 0.036, R.w * 0.07), bot = T.bot;
    for (let i = 0; i < 3; i++) Anima.vesicle(cx - tw * 0.22 + i * tw * 0.2, R.y + th * 0.62 - (i % 2) * th * 0.14, s * 0.9, col, 4, i * 5);
    const n = Math.round(2 + k * 4), out = [];
    for (let i = 0; i < n; i++) {
      const x = R.x + R.w * (0.14 + ((i * 0.37) % 1) * 0.72), y = lerp(bot + s * 3.6, post - s * 0.4, (i % 3) / 2.4) + Math.sin(time * 2 + i) * s * 0.2;
      chara(x, Math.min(y, post - 2), s, { who, eyes: "happy", arms: i % 2 ? "up" : "down", item: i % 2 ? null : "letter", seed: i });
      out.push({ x, y });
    }
    let site;
    if (kind === "H3") {
      const rx = cx + tw * 0.26, ry = bot - th * 0.02;
      const rr = Anima.receptor(rx, ry, s * 1.05, "#d9c2f0", 0, { dir: -1, label: "H3" });
      site = rr.site;
      // 刹车标志：k 小时亮着
      const bxx = rx - tw * 0.22, byy = bot - th * 0.28, br = s * 0.6;
      ctx.save(); ctx.globalAlpha *= 1 - k * 0.8;
      ctx.beginPath(); ctx.arc(bxx, byy, br, 0, Math.PI * 2); ctx.fillStyle = "#ffb3b3"; ctx.fill(); outline(1.4); ctx.stroke();
      text("刹", bxx, byy + 1, br * 1.1, C.ink); ctx.restore();
      if (k > 0.5) { outline(2); ctx.strokeStyle = C.bad; ctx.beginPath(); ctx.moveTo(bxx - br, byy - br); ctx.lineTo(bxx + br, byy + br); ctx.stroke(); }
    } else {
      const tx = cx + tw * 0.28, ty = bot - th * 0.05;
      Anima.transporter(tx, ty, s * 1.1, "#9fc3ea", k > 0.5 ? 0 : time * 3, k > 0.5);
      site = { x: tx + s * 1.2, y: ty + s * 1.8 };
    }
    return { site, mid: out[0] || { x: cx, y: post } };
  }
  function drugView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    Anima.wash("#fff7ea", "#f4f0ff"); Anima.petals(8, 0.5, 30);
    const top = Anima.topSafe() + H * 0.07, gap = W * 0.03, cw = (W - gap * 3) / 2, chh = H - top - H * 0.04;
    const L = { x: gap, y: top, w: cw, h: chh }, R = { x: gap * 2 + cw, y: top, w: cw, h: chh };
    card(L.x, L.y, L.w, L.h, "组胺：松开 H3 刹车", "#f0e0fb");
    card(R.x, R.y, R.w, R.h, "多巴胺：挡住回收门", "#ffe2c4");
    const kL = prog(2.4, 2), kR = prog(6.4, 2);
    const A = miniSyn(L, "His", "H3", kL), B = miniSyn(R, "DA", "DAT", kR);
    const ds = Math.min(H * 0.04, cw * 0.075);
    // 替洛利生坐到 H3 上
    const p1 = prog(1, 1.4), p2 = prog(5, 1.4);
    if (p1 > 0) chara(lerp(L.x + L.w * 0.9, A.site.x, p1), lerp(L.y + L.h * 0.75, A.site.y + ds * 3.2, p1), ds, { who: "drug", hatColor: "#c9a6ee", tag: "替洛利生", arms: p1 >= 1 ? "up" : "down", walk: p1 < 1 ? time * 9 : null, dir: -1, eyes: "happy" });
    if (p2 > 0) chara(lerp(R.x + R.w * 0.95, B.site.x, p2), lerp(R.y + R.h * 0.75, B.site.y + ds * 2.4, p2), ds, { who: "drug", hatColor: "#ffb347", tag: "莫达非尼", arms: p2 >= 1 ? "fist" : "down", walk: p2 < 1 ? time * 9 : null, dir: -1, eyes: "happy" });
    if (win(2.4, 3.6)) sfx("刹车松开！", L.x + L.w * 0.3, L.y + L.h * 0.62, H * 0.04, "#8f84e0", -0.1, 1);
    const topY = Anima.topSafe() + H * 0.01;
    callout("n5-h3", win(0.3, 2.4), A.site.x, A.site.y - ds, L.x + L.w * 0.5, L.y + L.h * 0.62, "H3：组胺自己的刹车");
    callout("n5-his", win(3.6, n ? 6.4 : 9.5), A.mid.x, A.mid.y - ds * 2, L.x + L.w * 0.5, L.y + L.h * 0.98, "反向激动 → 组胺放得更多");
    callout("n5-da", win(n ? 7.4 : 7, 14), B.mid.x, B.mid.y - ds * 2, R.x + R.w * 0.5, R.y + R.h * 0.98, "多巴胺在间隙里多留一会儿");
    say("n5-sol", lt > 9.6, B.site.x, B.site.y, R.x + R.w * 0.5, R.y + R.h * 0.35, "索安非他酮：DAT 和 NET 一起挡", "box");
    void topY;
    ctx.restore();
  }

  // ================= 第 7 幕：夜里压实深睡、未来的钥匙 =================
  function nightView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const night = clamp((tilt + 1) / 2, 0, 1), n = N();
    sky(night); sunMoon(W * 0.5, H * 0.25, H * 0.045, night);
    const gy = H * 0.88, cx = W * 0.5, py = H * 0.74, L = Math.min(W * 0.34, H * 0.58);
    ground(night, gy);
    const fut = prog(9, 2);
    const on = seesaw(cx, py, L, gy, fut > 0.95 ? 0.8 : 0, fut < 0.95);
    const cs = H * (n ? 0.046 : 0.042);
    const r = riders(on, cs, lt < 3);
    // 羟丁酸钠：跳上睡觉那头
    const p0 = prog(2, 1.4);
    if (p0 > 0 && lt < 8.8) {
      const tg = on(-0.45), x = lerp(-cs * 2, tg.x, p0), y = lerp(H * 0.4, tg.y, p0) - Math.sin(p0 * Math.PI) * H * 0.12;
      chara(x, y, cs, { who: "drug", hatColor: "#b8b0f0", tag: "羟丁酸钠", arms: p0 >= 1 ? "shh" : "up", eyes: p0 >= 1 ? "closed" : "wide", mouth: "cat", dir: 1, alpha: 1 - prog(8, 0.8) });
      if (win(3.3, 4.3)) sfx("压稳！", x, y - cs * 4, H * 0.045, "#8f84e0", -0.1, 1);
    }
    // 未来：食欲素受体激动剂扮演锁扣（研究中，用半透明表示）
    if (fut > 0) {
      const x = lerp(W + cs * 2, cx + H * 0.13, fut);
      chara(x, gy + H * 0.005, cs * 1.05, { who: "drug", hatColor: "#ffcf6e", hatColor2: "#ffe6c4", tag: "研究中", item: "key", arms: "hold", walk: fut < 1 ? time * 9 : null, dir: -1, alpha: 0.75, eyes: "sparkle" });
    }
    const topY = Anima.topSafe() + H * 0.02;
    say("n6-deep", win(4.2, 8.6), r.gp.x, r.gp.y - cs * 3.4, n ? W * 0.3 : W * 0.24, H * 0.38, "深睡压实了，一觉到天亮～", "say");
    callout("n6-gb", win(4.4, 8.6), on(-0.45).x, on(-0.45).y - cs * 2, n ? W * 0.62 : W * 0.72, n ? topY : H * 0.38, "和 GABA-B 受体有关");
    callout("n6-ox", lt > 10.6, cx, py + H * 0.075, n ? W * 0.4 : W * 0.3, n ? topY : H * 0.4, "食欲素受体激动剂：想当新锁扣");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    const V = [lockView, lossView, wobbleView, remView, cataView, drugView, nightView];
    V.forEach((f, i) => { if (S["v" + i] > 0.02) f(S["v" + i]); });
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#e0892a", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#ffb347",
    titleCard: { lines: ["睡醒开关", "为什么卡不住？"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
