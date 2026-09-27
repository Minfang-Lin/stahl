Anima.register("tca", {
    "title": "三环类：钥匙串太长的老前辈",
    "tag": "抗抑郁药",
    "headline": "三环类：一串钥匙，【堵了太多门】",
    "lede": "三环类是最早的一批抗抑郁药。它们堵住 5-HT 和去甲肾上腺素的回收门，这是有效的部分；可它们手里的钥匙太多，顺手还挡住了组胺、乙酰胆碱、α1 受体，甚至心脏和大脑里的钠通道。",
    "summary": "SERT、NET 双重抑制带来疗效；H1、M 受体、α1 阻断带来困倦、口干、头晕；钠通道阻断让过量格外危险；小剂量时只用上“抓得最紧”的几把钥匙。",
    "chapter": "对应 Stahl《精神药理学精要》第 7 章 · 三环类抗抑郁药",
    "footer": "三环类药物一次吃多非常危险：药要放在孩子和情绪低落的家人拿不到的地方；如果误服或过量，请立即去医院急诊。用药、加减和停药都请遵医嘱。",
    "canvasLabel": "拿着一大串钥匙的三环类药物访客，把回收门、几种受体和钠通道一起堵住的动画",
    "regions": ["synapse"],
    "parts": ["mood"],
    "cast": ["drug", "5HT", "NE", "His", "ACh"],
    "color": "#b98ad8"
  }, () => {
  const CH = [
    { title: "一大串钥匙", v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["三环类", "老前辈"], pill2: ["钥匙", "一大串"],
      text: "三环类抗抑郁药是最早的一批抗抑郁药，因为分子骨架上有三个环而得名，比如阿米替林、氯米帕明、丙米嗪。在我们的小镇里，它像一位老前辈访客，手里拎着一大串钥匙：走过一排门，就把钥匙一把一把插进去，把门堵住。问题是，它堵住的门实在太多了。",
      fact: "三环类得名于化学结构里的三个环，是最早的抗抑郁药之一" },
    { title: "有用的两把钥匙", v0: 0, v1: 1, v2: 0, v3: 0, v4: 0, v5: 0,
      pill: ["堵住", "SERT＋NET"], pill2: ["突触里", "5-HT、NE↑"],
      text: "先看有用的两把。一把堵住 5-HT 的回收门（SERT），另一把堵住去甲肾上腺素（NE）的回收门（NET）。两扇回收门一关，5-HT 和 NE 在突触里多留一会儿，把更多的信送到受体，这是它抗抑郁的部分，思路和 SNRI 很像。不同的三环类各有偏重，比如氯米帕明堵 5-HT 回收门特别用力。",
      fact: "三环类的疗效主要来自同时抑制 5-HT 转运体和 NE 转运体" },
    { title: "H1 和 M 受体：困和干", v0: 0, v1: 0, v2: 1, v3: 0, v4: 0, v5: 0,
      pill: ["挡住", "H1、M"], pill2: ["结果", "困、口干"],
      text: "第三把钥匙挡住组胺的 H1 受体。组胺本来帮大脑保持清醒，门被挡住，人就犯困，胃口也可能变大、体重增加。第四把挡住乙酰胆碱的 M1 等 M 受体（毒蕈碱受体），身体靠它们分泌口水、推动肠子、调节眼睛和膀胱，于是可能口干、便秘、看东西模糊、排尿困难。",
      fact: "挡 H1 → 困倦、体重增加；挡 M 受体 → 口干、便秘、视物模糊、尿潴留" },
    { title: "α1：起身头晕", v0: 0, v1: 0, v2: 0, v3: 1, v4: 0, v5: 0,
      pill: ["挡住", "α1"], pill2: ["起身", "头晕"],
      text: "第五把钥匙挡住 α1 受体。平时，去甲肾上腺素按下血管上的 α1，血管收紧一点，人从坐着、躺着站起来时，血压能马上跟上。α1 被挡住，血管松松的，猛一站起来，血一时往下走，头部供血跟不上，就会眼前发黑、头晕，这叫体位性低血压。所以起身要慢一点，老人尤其要当心摔倒。",
      fact: "挡 α1 → 血管收不紧，容易体位性低血压和头晕" },
    { title: "钠通道：过量很危险", v0: 0, v1: 0, v2: 0, v3: 0, v4: 1, v5: 0,
      pill: ["钠通道", "被堵住"], pill2: ["过量", "很危险"],
      text: "最要紧的是第六把：它能堵住心脏和大脑里的电压门控钠通道。电信号靠钠离子冲进细胞来传递，通道被堵，心脏的电信号传得又慢又乱，可能出现危险的心律失常，大脑也可能抽搐。一次吃多时尤其危险，这是它现在较少作为首选的主要原因。药要放在安全的地方，万一误服或吃多，请立即去急诊。",
      fact: "三环类过量会阻断心脏钠通道，引起心律失常和抽搐，可能危及生命" },
    { title: "老前辈的今天", v0: 0, v1: 0, v2: 0, v3: 0, v4: 0, v5: 1,
      pill: ["小剂量", "只用几把"], pill2: ["首选", "多为新药"],
      text: "三环类的疗效并不差，只是钥匙串太长，副作用多、过量危险，所以现在一般先用 SSRI、SNRI 等新药。有趣的是，每把钥匙抓门的力气不一样：剂量小时，只有抓得最紧的几把起作用。比如小剂量多塞平主要挡住 H1，用来帮助睡眠；小剂量阿米替林常用于一些慢性疼痛。怎么用，请交给医生。",
      fact: "剂量小时只占住亲和力最高的靶点：小剂量多塞平主要阻断 H1" },
  ];

  const C = Object.assign({}, Anima.C, { tca: "#b98ad8", tcaD: "#8a55b0" });
  const { clamp, lerp, ease, mix, alpha, outline, rrect, text, face, chara, say, callout, pill, glow, sparkles, emote, sfx } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const TCA = { who: "drug", label: "TCA", hatColor: "#b98ad8", hatColor2: "#f3e8fb" };
  const DOORS = [
    ["SERT", "#8fdcc4", "round", "5-HT 回收"], ["NET", "#ffb3bd", "square", "NE 回收"], ["H1", "#e0c8f5", "tri", "组胺"],
    ["M1", "#f7b8d2", "round", "乙酰胆碱"], ["α1", "#ffd3d6", "square", "血管"], ["钠通道", "#bfe3f5", "square", "心脏·脑"],
  ];
  let tone = 1; // 第 4 幕血管的紧张度
  const prog = (t0, d) => ease((lt - t0) / d);
  const fz = (k) => Math.max(11, H * (k || 0.028)) * Anima.UI;
  function update(dt) {
    lt = Anima.sceneTime;
    tone = lerp(tone, cur === 3 && lt > 3.8 ? 0 : 1, 1 - Math.exp(-dt * 1.6));
  }

  // ---------- 小工具 ----------
  function plate(t, x, y, bg, fs, x0, x1) {
    fs = fs || fz(0.026);
    ctx.font = `${fs}px ${Anima.ROUND}`;
    const w = ctx.measureText(t).width + fs * 1.1, h = fs * 1.5;
    x = clamp(x, w / 2 + (x0 === undefined ? 4 : x0), (x1 === undefined ? W - 4 : x1) - w / 2);
    rrect(x - w / 2, y - h / 2, w, h, h / 2); ctx.fillStyle = bg || "rgba(255,255,255,0.95)"; ctx.fill(); outline(1.4); ctx.stroke();
    text(t, x, y + 1, fs, C.ink);
    return w;
  }
  function card(x, y, w, h, title, color) {
    ctx.save();
    ctx.shadowColor = "rgba(150,100,120,0.2)"; ctx.shadowBlur = 14; ctx.shadowOffsetY = 4;
    rrect(x, y, w, h, 18); ctx.fillStyle = "#fffdfb"; ctx.fill();
    ctx.restore();
    outline(2); rrect(x, y, w, h, 18); ctx.stroke();
    plate(title, x + w / 2, y, color, fz(0.03), x + 2, x + w - 2);
  }
  // 钥匙：(x, y) 是钥匙圈的中心，钥匙杆朝 rot 方向
  function key(x, y, s, rot, color) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    outline(Math.max(1, s * 0.12));
    rrect(s * 0.3, -s * 0.13, s * 1.25, s * 0.26, s * 0.08); ctx.fillStyle = color; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.rect(s * 1.05, s * 0.1, s * 0.16, s * 0.28); ctx.rect(s * 1.33, s * 0.1, s * 0.16, s * 0.2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, s * 0.45, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, s * 0.17, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function bg(top, bot, seed) {
    Anima.wash(top, bot);
    Anima.bokeh(6, "#e6d4f5", 0.6, seed);
    Anima.petals(6, 0.35, seed + 3);
  }
  // 一排六扇门；plug(i) 0～1 表示第 i 扇门插了多少钥匙。返回门的位置
  function doorRow(y, plug, glowOpen) {
    const nw = Anima.narrow, s = H * (nw ? 0.042 : 0.056), xs = [];
    ctx.fillStyle = alpha("#ffe6ee", 0.95); ctx.fillRect(0, y, W, H - y);
    outline(1.6); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    DOORS.forEach((d, i) => {
      const x = W * (0.1 + i * 0.16), p = plug(i);
      xs.push(x);
      const R = Anima.receptor(x, y, s, d[1], glowOpen ? (1 - p) * (0.45 + 0.2 * Math.sin(time * 3 + i)) : 0, { shape: d[2] });
      if (p > 0.02) {
        ctx.save(); ctx.globalAlpha *= clamp(p * 1.6, 0, 1);
        key(R.site.x, R.site.y - s * (0.95 + (1 - p) * 0.8), s * 0.6, Math.PI / 2, C.tca);
        ctx.restore();
      }
      plate(d[0], x, y + H * 0.055, "#fff", fz(0.027));
    });
    return { xs, s, y, top: y - s * 1.62 };
  }

  // ---------- 第 1 幕：一大串钥匙 ----------
  function ringView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fbf6ff", "#fff3f3", 11);
    const y = H * 0.7;
    const tIn = (i) => 0.5 + 1.3 * (i + 0.55);
    const row = doorRow(y, (i) => prog(tIn(i) + 0.5, 0.35), true);
    const s = H * (nw ? 0.048 : 0.058), fy = H * 0.5;
    const cx = Math.min(row.xs[5] + W * 0.05, row.xs[0] - W * 0.09 + Math.max(0, lt - 0.5) / 1.3 * W * 0.16);
    // 飞出去的钥匙
    const hx = cx + s * 0.9, hy = fy - s * 1.3;
    let used = 0;
    DOORS.forEach((d, i) => {
      const t0 = tIn(i), p = (lt - t0) / 0.5;
      if (lt > t0) used++;
      if (p <= 0 || p >= 1) return;
      const tx = row.xs[i], ty = row.top - row.s * 1.6;
      key(lerp(hx, tx, p), lerp(hy, ty, p) - Math.sin(p * Math.PI) * H * 0.06, s * 0.55, p * Math.PI * 1.5, C.tca);
    });
    // 身后拖着的钥匙串：还没用掉的钥匙
    const left = 6 - used, L = W * 0.12 + left * W * 0.012;
    const ex = cx - L, ey = hy + s * 0.2;
    ctx.strokeStyle = C.tcaD; ctx.lineWidth = Math.max(1.5, H * 0.004);
    ctx.beginPath(); ctx.moveTo(hx - s * 0.3, hy); ctx.quadraticCurveTo(cx - L * 0.5, hy + s * 1.6, ex, ey); ctx.stroke();
    for (let j = 0; j < left; j++) {
      const t = (j + 1) / (left + 1);
      const px = (1 - t) * (1 - t) * (hx - s * 0.3) + 2 * (1 - t) * t * (cx - L * 0.5) + t * t * ex;
      const py = (1 - t) * (1 - t) * hy + 2 * (1 - t) * t * (hy + s * 1.6) + t * t * ey;
      key(px, py + s * 0.3, s * 0.45, Math.PI / 2 + Math.sin(time * 3 + j) * 0.25, C.tca);
    }
    const done = lt > tIn(5) + 0.6;
    chara(cx, fy, s, Object.assign({}, TCA, { walk: done ? null : time * 8, arms: done ? "wave" : "hold", item: done ? null : "key", eyes: done ? "happy" : "open", mouth: done ? "grin" : "smile", tag: "三环类" }));
    // 类别小牌
    const k = prog(9.4, 1);
    if (k > 0) {
      ctx.save(); ctx.globalAlpha *= k;
      const cy = y + H * 0.14, xs = row.xs;
      plate(nw ? "有效" : "有效：抗抑郁", (xs[0] + xs[1]) / 2, cy, "#dff5ec", fz(0.026));
      plate(nw ? "副作用" : "副作用：困、干、晕", xs[3], cy, "#fff1d6", fz(0.026));
      plate(nw ? "危险" : "过量危险", xs[5], cy, "#ffdfe4", fz(0.026));
      ctx.restore();
    }
    callout("t0-one", lt > 2.4 && lt < 7.5, row.xs[0], row.top, W * 0.3, H * 0.3, "一把钥匙堵一扇门");
    callout("t0-na", lt > 10.3, row.xs[5], row.top, W * 0.72, H * 0.32, nw ? "连钠通道都堵上" : "连心脏、大脑的钠通道都堵上");
    say("t0-s", lt > 0.6 && lt < 5, cx, fy - s * 3.3, cx + W * (nw ? 0.34 : 0.2), H * 0.3, "钥匙多，门也多～", "say");
    ctx.restore();
  }

  // ---------- 第 2 幕：SERT 和 NET ----------
  function synView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    const g0 = ctx.createLinearGradient(0, 0, 0, H);
    g0.addColorStop(0, "#fff4ef"); g0.addColorStop(0.5, C.cleft); g0.addColorStop(1, "#fff0f4");
    ctx.fillStyle = g0; ctx.fillRect(0, 0, W, H);
    Anima.bokeh(6, "#cfeaf7", 0.8, 90);
    const cx = W * 0.5, tw = Math.min(W * 0.74, H * 1.3), th = H * 0.4, post = H * 0.82;
    const bez = (t, p0, p1, p2, p3) => (1 - t) * (1 - t) * (1 - t) * p0 + 3 * (1 - t) * (1 - t) * t * p1 + 3 * (1 - t) * t * t * p2 + t * t * t * p3;
    const termY = (x) => {
      const dx = Math.abs(x - cx); let best = th, bd = 1e9;
      for (let i = 0; i <= 30; i++) { const t = i / 30, px = bez(t, tw / 2, tw / 2, tw * 0.3, 0), py = bez(t, th * 0.62, th * 1.02, th, th); if (Math.abs(px - dx) < bd) { bd = Math.abs(px - dx); best = py; } }
      return best;
    };
    const more = prog(5.2, 3);
    Anima.postMembrane(post, "#ffe0ea", {});
    const rx = [cx - tw * 0.42, cx - tw * 0.2, cx + tw * 0.2, cx + tw * 0.42];
    const R = rx.map((x, i) => Anima.receptor(x, post, H * 0.042, i < 2 ? "#8fdcc4" : "#ffb3bd", 0.15 + more * 0.85 * (0.8 + 0.2 * Math.sin(time * 4 + i)), { shape: i < 2 ? "round" : "square" }));
    Anima.terminal(cx, 0, tw, th, "#ffe6d6");
    const ts = H * 0.052, sx = cx - tw * 0.26, nx = cx + tw * 0.26;
    const sy = termY(sx) - ts * 0.1, ny = termY(nx) - ts * 0.1;
    const blk = prog(3, 1.8);
    Anima.transporter(sx, sy, ts, "#8fdcc4", blk > 0.6 ? 0 : time * 2.5, false);
    Anima.transporter(nx, ny, ts, "#ffb3bd", blk > 0.6 ? 0 : time * 2.5, false);
    plate("SERT", sx - ts * 1.7, sy - ts * 0.4, "#dff5ec", fz(0.024));
    plate("NET", nx + ts * 1.6, ny - ts * 0.4, "#ffe3e6", fz(0.024));
    // 快递员：堵门前一个个被拉回去，堵门后留在突触里
    const cs = H * (nw ? 0.03 : 0.036), mid = (th + post) / 2 + cs * 1.4;
    const pos = [];
    for (const type of [0, 1]) {
      const tx = type ? nx : sx, sgn = type ? 1 : -1;
      for (let k = 0; k < 5; k++) {
        const extra = k < 2 ? 1 : clamp(more * 3 - (k - 2), 0, 1);
        if (extra <= 0.02) continue;
        const bx = cx + sgn * tw * (0.08 + 0.085 * k), c = (time * 0.22 + k * 0.5) % 1;
        const back = { x: lerp(bx, tx, c), y: lerp(post - cs * 0.3, sy + ts * 0.9 + cs * 3, c), al: c > 0.8 ? (1 - c) / 0.2 : 1 };
        const stay = { x: bx + Math.sin(time * 0.7 + k * 2 + type) * tw * 0.03, y: mid + Math.cos(time * 0.9 + k * 1.7) * (post - th) * 0.12 };
        const q = k < 2 ? blk : 1;
        const x = lerp(back.x, stay.x, q), yy = lerp(back.y, stay.y, q), al = lerp(back.al, 1, q) * extra;
        pos.push([x, yy]);
        chara(x, yy, cs, { who: type ? "NE" : "5HT", eyes: q > 0.5 ? "happy" : "open", arms: "hold", item: "letter", alpha: al, shadow: false, seed: k + type * 5, walk: q < 0.5 ? time * 8 : null });
      }
    }
    // 两位三环类访客坐进回收门
    [[sx, sy, -1], [nx, ny, 1]].forEach((p, i) => {
      if (blk <= 0) return;
      const x = lerp(p[0] + p[2] * W * 0.3, p[0], blk), y = lerp(mid + cs * 2, p[1] + ts * 0.7 + cs * 3.1, blk);
      chara(x, y, cs * 1.05, Object.assign({}, TCA, { walk: blk < 1 ? time * 9 : null, arms: blk >= 1 ? "shh" : "down", eyes: "happy", dir: -p[2], tag: i === 0 && blk >= 1 ? "三环类" : null }));
    });
    if (more > 0.3) sparkles(cx, post - H * 0.06, tw * 0.45, 5, more, 3);
    callout("t1-door", lt > 0.8 && lt < 3.6, nx, ny + ts * 0.8, nx + W * 0.02, H * 0.5, "回收门：把递质拉回去");
    callout("t1-rec", lt > 8, R[1].site.x, R[1].site.y, nw ? W * 0.3 : cx - tw * 0.3, H * 0.93, "受体收到更多的信");
    const p0 = pos[0];
    say("t1-s", lt > 5.2 && lt < 8.2 && !!p0, p0 ? p0.x : 0, p0 ? p0.y - cs * 3.2 : 0, nw ? W * 0.5 : cx, nw ? H * 0.9 : H * 0.47, "门关了，多送一会儿信～", "say");
    ctx.restore();
  }

  // ---------- 第 3 幕：H1 和 M 受体 ----------
  function sideView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fbf6ff", "#fff4f8", 21);
    const top = Anima.topSafe() + H * 0.06, ch = H - top - H * 0.04, gap = W * 0.03, cw = (W - gap * 3) / 2;
    const cards = [{ x: gap, y: top, w: cw, h: ch }, { x: gap * 2 + cw, y: top, w: cw, h: ch }];
    card(cards[0].x, top, cw, ch, nw ? "H1（组胺）" : "H1 受体：组胺的门", "#efe3fb");
    card(cards[1].x, top, cw, ch, nw ? "M 受体（ACh）" : "M 受体：乙酰胆碱的门", "#ffe1ee");
    const s = Math.min(H * 0.042, cw * 0.075), pc = prog(0.4, 2), pd = prog(3.2, 1.6), eff = prog(5.2, 1.2);
    const heads = [];
    cards.forEach((c, j) => {
      const mem = c.y + c.h * 0.5, dx = c.x + c.w * 0.3;
      ctx.save(); rrect(c.x, c.y, c.w, c.h, 18); ctx.clip(); ctx.fillStyle = j ? "#fff0f5" : "#f5effd"; ctx.fillRect(c.x, mem, c.w, c.h); ctx.restore();
      outline(1.6); ctx.beginPath(); ctx.moveTo(c.x, mem); ctx.lineTo(c.x + c.w, mem); ctx.stroke();
      const on = pc >= 1 && pd < 0.4 ? 1 : 0;
      const R = Anima.receptor(dx, mem, s * 1.1, j ? "#f7b8d2" : "#e0c8f5", on, { shape: j ? "round" : "tri" });
      // 递质快递员：先走到门口，被挤开
      const who = j ? "ACh" : "His";
      let px = lerp(c.x + c.w * 0.9, R.site.x, pc), py = pc >= 1 ? R.site.y + s * 0.8 * 3.1 * 0.25 : mem;
      if (pd > 0) { px = lerp(R.site.x, c.x + c.w * 0.72, pd); py = lerp(py, mem, pd); }
      chara(px, py, s * 0.8, { who, walk: pc < 1 || (pd > 0 && pd < 1) ? time * 8 : null, eyes: pd > 0.5 ? "wide" : "happy", mouth: pd > 0.5 ? "o" : "smile", arms: on ? "up" : "hold", item: on ? null : "letter", dir: pd > 0 && pd < 1 ? 1 : -1, shadow: false });
      if (pd >= 1) emote("?", px + s * 0.7, py - s * 2.9, s * 0.6);
      heads.push([px, py - s * 2.5]);
      if (pd > 0) chara(lerp(c.x + c.w * 0.02, R.site.x, pd), pd < 1 ? mem : R.site.y + s * 0.2, s * 0.8, Object.assign({}, TCA, { walk: pd < 1 ? time * 9 : null, arms: pd >= 1 ? "shh" : "down", eyes: "happy", shadow: false }));
      // 下游的变化
      const fs = fz(0.03);
      if (j === 0) {
        const nx = c.x + c.w * 0.26, ny = c.y + c.h - H * 0.035;
        chara(nx, ny, s * 0.85, { who: "neuron", eyes: eff > 0.5 ? "sleepy" : "open", mouth: eff > 0.5 ? "o" : "smile", gray: eff * 0.3, shadow: false });
        if (eff > 0.5) emote("zzz", nx + s * 1.1, ny - s * 2.6, s * 0.7);
        ctx.save(); ctx.globalAlpha *= eff;
        plate("犯困", c.x + c.w * 0.68, mem + c.h * 0.16, "#efe3fb", fs, c.x, c.x + c.w);
        ctx.restore();
        ctx.save(); ctx.globalAlpha *= prog(7, 1);
        plate(nw ? "体重↑" : "胃口↑ 体重↑", c.x + c.w * 0.68, mem + c.h * 0.33, "#fff1d6", fs, c.x, c.x + c.w);
        ctx.restore();
      } else {
        const L = nw ? ["口干", "便秘", "看不清", "排尿难"] : ["口干", "便秘", "视物模糊", "排尿困难"];
        L.forEach((t, k) => {
          const p = prog(5.2 + k * 0.9, 0.8);
          if (p <= 0) return;
          ctx.save(); ctx.globalAlpha *= p;
          plate(t, c.x + c.w * (k % 2 ? 0.73 : 0.28), mem + c.h * (k < 2 ? 0.16 : 0.34), "#ffe9ef", fs, c.x, c.x + c.w);
          ctx.restore();
        });
      }
    });
    callout("t2-h1", lt > 5.6, cards[0].x + cards[0].w * 0.3, top + ch * 0.5 - s * 1.8, cards[0].x + cards[0].w * 0.5, top + ch * 0.2, nw ? "清醒信号进不去" : "清醒信号送不进去");
    say("t2-s", lt > 4.2 && lt < 12, heads[1][0], heads[1][1], cards[1].x + cards[1].w * 0.62, top + ch * 0.2, "门被占了……", "think");
    ctx.restore();
  }

  // ---------- 第 4 幕：α1 和起身头晕 ----------
  function standView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fff8f4", "#fdf0f6", 31);
    // 左：血管
    const vx0 = W * 0.04, vx1 = W * (nw ? 0.52 : 0.54), vy = H * 0.6, half = H * (0.06 + 0.05 * (1 - tone)), wall = H * 0.035;
    ctx.fillStyle = "#ffe3e3"; ctx.fillRect(vx0, vy - half, vx1 - vx0, half * 2);
    for (const sg of [-1, 1]) {
      rrect(vx0, sg < 0 ? vy - half - wall : vy + half, vx1 - vx0, wall, wall * 0.4);
      ctx.fillStyle = "#ffb3bd"; ctx.fill(); outline(1.5); ctx.stroke();
    }
    for (let k = 0; k < 7; k++) {
      const t = (time * (0.12 + 0.05 * tone) + k / 7) % 1;
      const x = vx0 + t * (vx1 - vx0), y = vy + Math.sin(k * 2.3) * half * 0.5;
      ctx.beginPath(); ctx.ellipse(x, y, H * 0.018, H * 0.011, 0.2, 0, Math.PI * 2); ctx.fillStyle = "#ff8a8a"; ctx.fill(); outline(1); ctx.stroke();
    }
    // 两侧的“收紧”小箭头
    if (tone > 0.4) {
      ctx.save(); ctx.globalAlpha *= tone;
      for (const sg of [-1, 1]) text(sg < 0 ? "▼" : "▲", vx0 + (vx1 - vx0) * 0.75, vy + sg * (half + wall * 1.7), fz(0.024), C.bad);
      ctx.restore();
    }
    const ax = vx0 + (vx1 - vx0) * 0.35, ay = vy - half - wall;
    const pd = prog(2.4, 1.4);
    const R = Anima.receptor(ax, ay, H * 0.036, "#ffd3d6", tone * 0.9, { shape: "square" });
    plate("α1", ax - H * 0.08, ay - H * 0.03, "#ffe3e6", fz(0.024));
    plate("血管", vx0 + (vx1 - vx0) * 0.12, vy + half + wall + H * 0.05, "#fff", fz(0.026));
    const cs = H * 0.032;
    const neX = pd > 0 ? lerp(R.site.x, R.site.x + W * 0.1, pd) : R.site.x;
    chara(neX, pd > 0 ? ay : R.site.y + cs * 0.3, cs, { who: "NE", eyes: pd > 0.5 ? "wide" : "happy", arms: pd > 0 ? "down" : "up", walk: pd > 0 && pd < 1 ? time * 8 : null, shadow: false });
    if (pd > 0) chara(lerp(R.site.x - W * 0.12, R.site.x, pd), pd < 1 ? ay : R.site.y + cs * 0.3, cs, Object.assign({}, TCA, { walk: pd < 1 ? time * 9 : null, arms: pd >= 1 ? "shh" : "down", eyes: "happy", shadow: false }));
    // 右：从坐着到站起来
    const px = W * (nw ? 0.72 : 0.74), gy = H * 0.9, s = H * 0.05;
    const up = prog(6.2, 0.6);
    const lvl = lt < 6.2 ? 0.85 : lt < 7.6 ? lerp(0.85, 0.3, ease((lt - 6.2) / 1.2)) : lerp(0.3, 0.8, ease((lt - 8.4) / 3));
    ctx.fillStyle = "#e9d7c7";
    ctx.save(); ctx.globalAlpha *= 1 - up;
    rrect(px - s * 1.2, gy - s * 1.2, s * 2.4, s * 0.35, s * 0.1); ctx.fill(); outline(1.4); ctx.stroke();
    ctx.fillRect(px - s * 1.05, gy - s * 0.9, s * 0.25, s * 0.9); ctx.fillRect(px + s * 0.8, gy - s * 0.9, s * 0.25, s * 0.9);
    ctx.restore();
    outline(1.4); ctx.beginPath(); ctx.moveTo(px - W * 0.18, gy); ctx.lineTo(px + W * 0.2, gy); ctx.stroke();
    const dizzy = lt > 6.6 && lvl < 0.55;
    chara(px, gy - s * 1.1 * (1 - up), s, { who: "neuron", eyes: dizzy ? "dizzy" : "happy", mouth: dizzy ? "wavy" : "smile", arms: dizzy ? "hug" : "down" });
    if (dizzy) { emote("sweat", px + s, gy - s * 3.6, s * 0.6); Anima.sparkles(px, gy - s * 3.6, s * 1.3, 4, 1, 5); }
    // 头部供血的小量表
    const gx = px + W * (nw ? 0.17 : 0.13), g1 = gy - H * 0.36, gh = H * 0.3, gw = H * 0.035;
    rrect(gx - gw / 2, g1, gw, gh, gw / 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.5); ctx.stroke();
    ctx.save(); rrect(gx - gw / 2, g1, gw, gh, gw / 2); ctx.clip();
    ctx.fillStyle = lvl < 0.5 ? C.bad : "#ff8a8a"; ctx.fillRect(gx - gw / 2, g1 + gh * (1 - lvl), gw, gh * lvl);
    ctx.restore();
    text(nw ? "脑供血" : "头部供血", gx, g1 - H * 0.035, fz(0.022), C.ink);
    callout("t3-v", lt > 4.4 && lt < 9.5, vx0 + (vx1 - vx0) * 0.6, vy + half, (vx0 + vx1) / 2, H * 0.9, nw ? "血管松了，收不紧" : "血管松了，收不紧");
    say("t3-s", lt > 7 && lt < 12.5, px, gy - s * 3.3, px - W * 0.1, H * 0.3, "一站起来，眼前发黑……", "think");
    ctx.restore();
  }

  // ---------- 第 5 幕：钠通道 ----------
  function heartShape(x, y, r, color) {
    ctx.beginPath();
    ctx.moveTo(x, y + r * 0.9);
    ctx.bezierCurveTo(x - r * 1.5, y - r * 0.1, x - r * 0.9, y - r * 1.2, x, y - r * 0.45);
    ctx.bezierCurveTo(x + r * 0.9, y - r * 1.2, x + r * 1.5, y - r * 0.1, x, y + r * 0.9);
    ctx.fillStyle = color; ctx.fill(); outline(1.8); ctx.stroke();
  }
  function ecg(x0, y0, w, h, wide) {
    rrect(x0, y0, w, h, 10); ctx.fillStyle = "#fbfffd"; ctx.fill(); outline(1.4); ctx.stroke();
    ctx.save(); rrect(x0, y0, w, h, 10); ctx.clip();
    ctx.strokeStyle = alpha("#4fb893", 0.18); ctx.lineWidth = 1;
    for (let gx = x0; gx < x0 + w; gx += h * 0.25) { ctx.beginPath(); ctx.moveTo(gx, y0); ctx.lineTo(gx, y0 + h); ctx.stroke(); }
    ctx.strokeStyle = wide > 0.5 ? C.bad : C.mintDeep; ctx.lineWidth = Math.max(1.5, h * 0.035);
    ctx.beginPath();
    const base = y0 + h * 0.62, per = w * 0.34;
    for (let i = 0; i <= 160; i++) {
      const x = x0 + (i / 160) * w, u = x - x0 + time * w * 0.25;
      const n = Math.floor(u / per), jit = wide > 0.5 ? (Math.sin(n * 2.7) * 0.25) * per * wide : 0;
      const f = ((u + jit) % per + per) % per / per;
      const qw = 0.035 * (1 + wide * 2.5);
      let v = 0;
      if (Math.abs(f - 0.3) < qw) v = Math.sin((f - 0.3 + qw) / (2 * qw) * Math.PI * 2) * (1 - wide * 0.3);
      else if (Math.abs(f - 0.55) < 0.07) v = -0.18 * Math.sin((f - 0.48) / 0.14 * Math.PI);
      const yy = base - v * h * 0.42;
      if (i) ctx.lineTo(x, yy); else ctx.moveTo(x, yy);
    }
    ctx.stroke();
    ctx.restore();
  }
  function naView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#f5fbff", "#fff3f5", 41);
    const mx0 = W * 0.03, mx1 = W * (nw ? 0.56 : 0.58), my = H * 0.56;
    ctx.fillStyle = "#fff0e8"; ctx.fillRect(mx0, my, mx1 - mx0, H * 0.4);
    outline(1.6); ctx.beginPath(); ctx.moveTo(mx0, my); ctx.lineTo(mx1, my); ctx.stroke();
    if (!nw) text("细胞外（钠离子多）", mx0 + W * 0.01, Anima.topSafe() + H * 0.04, fz(0.024), C.soft, "left");
    text(nw ? "细胞内" : "细胞内：钠离子冲进来 → 电信号", mx0 + W * 0.01, H * 0.94, fz(0.024), C.soft, "left");
    const n = 4, xs = [], s = H * (nw ? 0.042 : 0.046), cs = H * 0.03;
    const plugT = [3.2, 6.6, 7.2, 7.8], od = prog(6.4, 1.4);
    for (let i = 0; i < n; i++) {
      const x = mx0 + (mx1 - mx0) * (0.14 + i * 0.24), p = prog(plugT[i], 1.2);
      xs.push(x);
      const R = Anima.receptor(x, my, s, "#bfe3f5", (1 - p) * (0.5 + 0.5 * Math.sin(time * 5 + i)), { shape: "square" });
      if (p < 0.95) {
        for (let k = 0; k < 3; k++) {
          const t = (time * 0.8 + k / 3 + i * 0.21) % 1;
          ctx.save(); ctx.globalAlpha *= Math.sin(t * Math.PI) * (1 - p);
          Anima.ion(x + Math.sin(k * 2 + i) * s * 0.3, lerp(my - H * 0.2, my + H * 0.2, t), H * 0.017, "Na", "#fff1b8");
          ctx.restore();
        }
      }
      if (p > 0) chara(lerp(x - W * 0.08, R.site.x, p), p < 1 ? my - H * 0.2 : R.site.y + cs * 0.2, cs, Object.assign({}, TCA, { walk: p < 1 ? time * 9 : null, arms: p >= 1 ? "shh" : "down", eyes: "happy", shadow: false }));
    }
    const stage = lt < 3 ? "" : lt < 6.4 ? (nw ? "正常用量" : "正常用量：堵住一点点") : (nw ? "一次吃太多" : "一次吃太多：全堵上了");
    if (stage) plate(stage, (mx0 + mx1) / 2, H * 0.8, lt < 6.4 ? "#dff5ec" : "#ffdfe4", fz(0.028), mx0, mx1);
    // 右：心脏和心电图、大脑
    const hx = W * (nw ? 0.78 : 0.8), hy = H * (nw ? 0.34 : 0.33), hr = H * 0.075;
    const beat = 1 + Math.max(0, Math.sin(time * (od > 0.5 ? 9 : 6))) * 0.06 * (1 + od);
    ctx.save(); ctx.translate(hx, hy); ctx.scale(beat, beat); heartShape(0, 0, hr, mix("#ff9fb3", "#ff7a8a", od)); ctx.restore();
    face(hx, hy - hr * 0.05, hr * 0.4, od > 0.5 ? 0 : 1);
    if (od > 0.5) emote("sweat", hx + hr * 1.1, hy - hr * 0.8, hr * 0.5);
    const ew = W * (nw ? 0.38 : 0.34), eh = H * 0.13, ex = hx - ew / 2, ey = hy + hr * 1.2;
    ecg(clamp(ex, mx1 + W * 0.02, W - ew - W * 0.02), ey, ew, eh, od);
    const bx = hx, by = ey + eh + H * 0.14, br = H * 0.06;
    ctx.beginPath(); ctx.ellipse(bx, by, br * 1.25, br, 0, 0, Math.PI * 2); ctx.fillStyle = "#ffd9e4"; ctx.fill(); outline(1.8); ctx.stroke();
    ctx.strokeStyle = alpha(C.line, 0.5); ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.moveTo(bx, by - br); ctx.quadraticCurveTo(bx - br * 0.2, by, bx, by + br); ctx.stroke();
    face(bx, by + br * 0.1, br * 0.4, od > 0.6 ? 0 : 1);
    if (od > 0.6) for (let k = 0; k < 3; k++) Anima.bolt(bx + (k - 1) * br * 1.1, by - br * 1.2 - Math.abs(Math.sin(time * 7 + k)) * br * 0.2, br * 0.35, od, C.gold);
    callout("t4-ch", lt > 0.8 && lt < 5.8, xs[1], my - s * 1.6, xs[1] + W * 0.06, H * 0.2, nw ? "钠通道：电信号的门" : "电压门控钠通道：电信号的入口");
    callout("t4-ecg", lt > 8.8, hx, ey + eh * 0.3, nw ? W * 0.5 : hx - W * 0.1, nw ? H * 0.9 : H * 0.9, nw ? "心跳信号慢又乱" : "心脏的电信号又慢又乱");
    say("t4-s", lt > 8, hx - hr * 0.6, hy - hr * 0.6, nw ? W * 0.42 : hx - W * 0.2, H * 0.22, "拍子乱了！", "shout");
    ctx.restore();
  }

  // ---------- 第 6 幕：小剂量只用几把钥匙 ----------
  function doseView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    const nw = Anima.narrow;
    bg("#fbf6ff", "#f5fbf7", 51);
    // 剂量滑杆
    const sx0 = W * 0.2, sx1 = W * 0.8, sy = Anima.topSafe() + H * 0.1;
    const dose = lt < 5.5 ? 0.12 : lerp(0.12, 1, ease((lt - 5.5) / 2.5));
    rrect(sx0, sy - H * 0.012, sx1 - sx0, H * 0.024, H * 0.012); ctx.fillStyle = "#f1eafa"; ctx.fill(); outline(1.4); ctx.stroke();
    rrect(sx0, sy - H * 0.012, (sx1 - sx0) * dose, H * 0.024, H * 0.012); ctx.fillStyle = C.tca; ctx.fill();
    ctx.beginPath(); ctx.arc(sx0 + (sx1 - sx0) * dose, sy, H * 0.026, 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1.8); ctx.stroke();
    text("小剂量", sx0 - H * 0.04, sy + 1, fz(0.024), C.soft, "right");
    text(nw ? "大" : "抗抑郁剂量", sx1 + H * 0.04, sy + 1, fz(0.024), C.soft, "left");
    // 亲和力：H1 最高（多塞平），其次才轮到别的门
    const need = [0.55, 0.62, 0.05, 0.7, 0.66, 0.85];
    const y = H * 0.72;
    const row = doorRow(y, (i) => clamp((dose - need[i]) / 0.08, 0, 1), true);
    const s = H * 0.042;
    chara(row.xs[2] - W * 0.08, y - H * 0.2, s, Object.assign({}, TCA, { label: "", eyes: "happy", arms: dose > 0.9 ? "carry" : "hold", item: "key", tag: nw ? "多塞平" : "以多塞平为例" }));
    const k1 = prog(1.5, 1);
    if (k1 > 0 && lt < 12) {
      ctx.save(); ctx.globalAlpha *= k1 * (lt < 5.5 ? 1 : clamp(1 - (lt - 5.5), 0, 1));
      emote("zzz", row.xs[2] + s * 1.2, row.top - s * 2, s * 0.7);
      ctx.restore();
    }
    const k2 = prog(9, 1);
    if (k2 > 0) {
      ctx.save(); ctx.globalAlpha *= k2;
      plate(nw ? "小剂量阿米替林：慢性疼痛" : "小剂量阿米替林：常用于一些慢性疼痛", W * 0.5, y + H * 0.14, "#fff1d6", fz(0.026));
      ctx.restore();
    }
    callout("t5-h1", lt > 1.8 && lt < 5.5, row.xs[2], row.top, nw ? W * 0.62 : row.xs[2] + W * 0.14, H * 0.45, nw ? "先堵上 H1 → 助眠" : "抓得最紧的 H1 先堵上 → 助眠");
    callout("t5-all", lt > 8 && lt < 11.5, row.xs[5], row.top, nw ? W * 0.62 : row.xs[5] - W * 0.12, H * 0.45, "剂量大了，一串全用上");
    say("t5-s", lt > 11.5, row.xs[2] - W * 0.08 + s, y - H * 0.2 - s * 2.6, W * 0.66, H * 0.42, "新药钥匙少，一般先请它们～", "say");
    ctx.restore();
  }

  function hud() {
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], C.tcaD, false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], C.rose, true);
  }
  function draw() {
    ctx.fillStyle = "#fdf8fb"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) ringView(S.v0);
    if (S.v1 > 0.02) synView(S.v1);
    if (S.v2 > 0.02) sideView(S.v2);
    if (S.v3 > 0.02) standView(S.v3);
    if (S.v4 > 0.02) naView(S.v4);
    if (S.v5 > 0.02) doseView(S.v5);
    hud();
  }
  return {
    chapters: CH, state: S, dur: 14, accent: "#b98ad8",
    titleCard: { lines: ["三环类：", "钥匙串太长的老前辈"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
