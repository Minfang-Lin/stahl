Anima.register("alpha2a-hcn", {
    "title": "前额叶的漏水小门",
    "tag": "注意缺陷多动障碍",
    "headline": "前额叶的网络为什么会【漏信号】？",
    "lede": "前额叶的神经元手拉手连成工作记忆网络，连接点树突棘上开着会漏水的小门：HCN 通道。去甲肾上腺素通过 α2A 受体把小门关上，信号就不漏；多巴胺通过 D1 受体让无关的输入漏掉。压力太大时，小门全开，网络就掉线了。",
    "summary": "工作记忆网络、树突棘上的 HCN 通道和 cAMP、NE 经 α2A（Gi）关小门增强信号、DA 经 D1 降噪、压力下的倒 U 形掉线，以及胍法辛、托莫西汀和兴奋剂从哪里起作用。",
    "chapter": "对应 Stahl《精神药理学精要》第 11 章 · 去甲肾上腺素与前额叶网络",
    "footer": "ADHD 的诊断和用药需要专业医生评估，请遵医嘱。",
    "canvasLabel": "前额叶神经元手拉手组成网络，树突棘上的 HCN 小门在 cAMP 作用下漏水，去甲肾上腺素经 α2A 受体把门关上的动画",
    "regions": ["pfc"],
    "parts": ["adhd"],
    "cast": ["NE", "DA", "neuron", "drug"],
    "color": "#7fc4e8"
  }, () => {
  const CH = [
    { title: "手拉手的工作记忆网络",
      pill: ["前额叶", "锥体神经元"], pill2: ["连接点", "树突棘"],
      text: "前额叶里的锥体神经元，靠树突上一个个小小的树突棘互相连接，像手拉手围成一圈。一个信息进来，比如一个要记住的数字，信号就在这一圈里来回传，输入已经消失了，网络还“记着”它。这就是工作记忆：把事情暂时放在心上。",
      fact: "工作记忆靠前额叶锥体神经元之间的循环兴奋，信号在网络里持续传递" },
    { title: "树突棘上的漏水小门",
      pill: ["小门", "HCN 通道"], pill2: ["开门的", "cAMP"],
      text: "放大一个树突棘看看。信号像水一样流进来，再顺着细细的棘颈流向细胞体。可是棘头上开着几扇小门，叫 HCN 通道。细胞里的第二信使 cAMP 一多，这些门就开得更大，信号从门口漏出去，流到下一站的就少了，整个网络的连接也跟着变弱。",
      fact: "HCN 通道位于前额叶树突棘上，cAMP 增多会让它更容易打开，削弱突触输入" },
    { title: "去甲肾上腺素：关上小门",
      pill: ["NE", "α2A 受体"], pill2: ["cAMP", "变少"],
      text: "去甲肾上腺素来了，它的钥匙插进棘头上的 α2A 受体。α2A 连着一种叫 Gi 的 G 蛋白，专门给制造 cAMP 的工厂踩刹车。cAMP 一少，HCN 小门就关上了，信号不再漏出去，稳稳地流到下一站，网络重新连紧。这就是去甲肾上腺素“增强信号”的办法。",
      fact: "NE 作用于 α2A 受体（偶联 Gi），减少 cAMP、关闭 HCN 通道，从而增强网络连接" },
    { title: "多巴胺：让杂音漏掉",
      pill: ["DA", "D1 受体"], pill2: ["作用", "降噪"],
      text: "不是每个输入都有用。多巴胺适量时，通过 D1 受体作用在无关输入的树突棘上：D1 让那里的 cAMP 增多，小门打开，杂音就从门口漏走了，只有和任务相关的信号留下来。不过 D1 刺激太多时，连重要的连接也会被削弱。",
      fact: "适量的 D1 刺激帮助过滤无关输入（降噪），过多反而削弱网络" },
    { title: "压力太大，网络掉线",
      pill: ["压力", "递质太多"], pill2: ["网络", "掉线"],
      text: "压力很大时，去甲肾上腺素和多巴胺一下子大量涌出。这时低亲和力的 α1 受体也被拉进来，D1 也被刺激过头，小门统统打开，信号四处漏光，手拉手的网络一个个松开，前额叶就“掉线”了。这正是倒 U 形曲线的右边：太多和太少一样不好。",
      fact: "高浓度 NE 激活 α1 受体、过多 DA 过度刺激 D1，会迅速削弱前额叶网络" },
    { title: "药物在这里帮忙",
      pill: ["胍法辛", "直接关门"], pill2: ["托莫西汀等", "NE 变多"],
      text: "明白了小门，就明白了几种药。胍法辛是比较选择性的 α2A 激动剂，自己把钥匙插进 α2A，直接让 cAMP 变少、小门关上。托莫西汀挡住 NET，兴奋剂也会提高去甲肾上腺素和前额叶里的多巴胺，它们最后同样经过 α2A 和 D1 这条路，把网络托回倒 U 的山顶。",
      fact: "胍法辛直接激动 α2A；托莫西汀和兴奋剂通过增加 NE、DA 间接作用于同一套机制" },
  ];
  const DUR = 14;
  CH.forEach((c, i) => { for (let j = 0; j < CH.length; j++) c["v" + j] = i === j ? 1 : 0; });

  const C = Object.assign({}, Anima.C, { dend: "#ffd9c7", spine: "#ffe6d8", term: "#e4ecff", door: "#9fd8c4", water: "#7fc4e8", noise: "#b9b2b8", a2a: "#f7a8b0", d1: "#ffc98a", camp: "#ffe27a", fac: "#d9d0f5", guan: "#b8b0f0", atx: "#8fdcc4" });
  const { rnd, clamp, lerp, ease, mix, outline, rrect, text, face, chara, say, callout, pill, glow, sparkle, sparkles, sfx, emote } = Anima;
  const ctx = Anima.ctx;
  let W = 0, H = 0, time = 0, cur = 0, lt = 0;
  const S = { v0: 1, v1: 0, v2: 0, v3: 0, v4: 0, v5: 0 };
  const prog = (t0, d) => ease((lt - t0) / d);
  const win = (a, b) => lt > a && lt < b;
  const N = () => Anima.narrow;
  const fsz = (k) => Math.max(11, W / 58) * Anima.UI * (k || 1);
  const bh = () => Math.max(12, W / 58) * Anima.UI + 14;
  let meter = 1;
  function update(dt) { lt = Anima.sceneTime; meter = lerp(meter, 1 - openNow() * 0.8, 1 - Math.exp(-dt * 2.5)); }
  // 每一幕中心那个树突棘的小门开多大
  function openNow() {
    if (cur === 1) return prog(3, 2.5);
    if (cur === 2) return 1 - prog(4.6, 1.8);
    if (cur === 5) return 1 - prog(3.2, 1.8);
    return 0.1;
  }

  // ---------- 小零件 ----------
  function drop(x, y, r, col, a) {
    ctx.save(); ctx.globalAlpha *= a;
    ctx.beginPath(); ctx.moveTo(x, y - r * 1.7); ctx.quadraticCurveTo(x + r * 1.05, y - r * 0.2, x, y + r); ctx.quadraticCurveTo(x - r * 1.05, y - r * 0.2, x, y - r * 1.7);
    ctx.fillStyle = col; ctx.fill(); outline(Math.max(1, r * 0.2)); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)"; ctx.beginPath(); ctx.arc(x - r * 0.3, y - r * 0.2, r * 0.25, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  function camp(x, y, r) {
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = C.camp; ctx.fill(); outline(1.2); ctx.stroke();
    if (r > 7) text("cAMP", x, y + 1, r * 0.62, C.ink);
  }
  // HCN 小门：嵌在棘头膜上，ang 是朝外的方向，open 0～1
  function door(x, y, s, ang, open) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    const gap = s * (0.05 + open * 0.42);
    for (const d of [-1, 1]) {
      ctx.save(); ctx.translate(0, d * (gap + s * 0.28)); ctx.rotate(d * open * 0.5);
      rrect(-s * 0.4, -s * 0.28, s * 0.8, s * 0.56, s * 0.2); ctx.fillStyle = C.door; ctx.fill(); outline(Math.max(1.2, s * 0.08)); ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
    face(x - Math.cos(ang) * s * 0.9, y - Math.sin(ang) * s * 0.9, s * 0.32, open > 0.5 ? -1 : 1);
  }
  function factory(x, y, s, on) { // 制造 cAMP 的小工厂（腺苷酸环化酶）
    rrect(x - s, y - s * 0.7, s * 2, s * 1.4, s * 0.3); ctx.fillStyle = mix("#e4e0ea", C.fac, on); ctx.fill(); outline(1.4); ctx.stroke();
    rrect(x + s * 0.3, y - s * 1.3, s * 0.4, s * 0.7, s * 0.1); ctx.fill(); ctx.stroke();
    if (on > 0.3) for (let k = 0; k < 2; k++) { const t = (time * 0.8 + k * 0.5) % 1; ctx.save(); ctx.globalAlpha *= (1 - t) * on; ctx.beginPath(); ctx.arc(x + s * 0.5 + t * s * 0.3, y - s * 1.4 - t * s * 0.9, s * (0.2 + t * 0.2), 0, Math.PI * 2); ctx.fillStyle = "#fff"; ctx.fill(); outline(1); ctx.stroke(); ctx.restore(); }
    face(x - s * 0.3, y + s * 0.05, s * 0.45, on > 0.5 ? 1 : 0);
  }
  // 一根树突棘：(x, hy) 是棘头中心，s 是尺寸单位，shaftY 是树突主干
  function spine(o) {
    const { x, hy, s, shaftY } = o, hr = s * 1.3, hv = s * 1.0;
    // 突触前小末梢（上方送信的邻居）
    const ty = hy - hv - s * 0.55;
    ctx.beginPath(); ctx.ellipse(x, ty - s * 0.5, s * 1.1, s * 0.7, 0, 0, Math.PI * 2); ctx.fillStyle = C.term; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - s * 0.25, ty - s * 1.1); ctx.lineTo(x - s * 0.25, ty - s * 3); ctx.moveTo(x + s * 0.25, ty - s * 1.1); ctx.lineTo(x + s * 0.25, ty - s * 3); ctx.stroke();
    // 棘颈 + 棘头
    ctx.beginPath(); ctx.moveTo(x - s * 0.28, shaftY + 2); ctx.lineTo(x - s * 0.28, hy + hv * 0.6); ctx.lineTo(x + s * 0.28, hy + hv * 0.6); ctx.lineTo(x + s * 0.28, shaftY + 2); ctx.closePath();
    ctx.fillStyle = C.spine; ctx.fill(); outline(1.6); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x, hy, hr, hv, 0, 0, Math.PI * 2); ctx.fillStyle = C.spine; ctx.fill(); ctx.stroke();
    ctx.fillStyle = C.spine; ctx.fillRect(x - s * 0.26, hy + hv * 0.5, s * 0.52, s * 0.6);
    const D = [Math.PI - 0.2, 0.2].map((q) => ({ x: x + Math.cos(q) * hr, y: hy + Math.sin(q) * hv, ang: q }));
    // 工厂和 cAMP
    const fx = x - s * 0.35, fy = hy + hv * 0.2;
    if (o.fac != null) factory(fx, fy, s * 0.3, o.fac);
    const n = Math.round(o.camp || 0);
    for (let i = 0; i < n; i++) {
      const d = D[i % 2], t = 0.55 + 0.3 * Math.sin(time * 1.5 + i * 2);
      camp(lerp(x + s * 0.2, d.x, t) + Math.sin(time * 2 + i) * s * 0.06, lerp(hy - hv * 0.1, d.y, t) + (i % 3 - 1) * s * 0.18, s * 0.17);
    }
    D.forEach((d) => door(d.x, d.y, s * 0.42, d.ang, o.open));
    // 受体
    const R = (o.recs || []).map((r) => {
      const q = -Math.PI / 2 + r.side * 0.75, rx = x + Math.cos(q) * hr * 0.9, ry = hy + Math.sin(q) * hv * 0.9;
      ctx.save(); ctx.translate(rx, ry); ctx.rotate(q + Math.PI / 2);
      const site = Anima.receptor(0, 0, s * 0.32, r.kind === "a2a" ? C.a2a : C.d1, r.act, { shape: r.kind === "a2a" ? "tri" : "square" }).site;
      ctx.restore();
      const sx = rx + Math.cos(q) * s * 0.52, sy = ry + Math.sin(q) * s * 0.52;
      return { x: sx, y: sy, q };
    });
    // 信号水滴
    const M = o.drops || 12, col = o.col || C.water;
    for (let j = 0; j < M; j++) {
      const ph = (time * 0.35 + j / M + (o.seed || 0) * 0.13) % 1, leak = rnd(j + (o.seed || 0) * 17) < o.open * 0.85;
      const d = D[j % 2];
      let px, py, a = 1;
      if (ph < 0.2) { const k = ph / 0.2; px = x + (j % 3 - 1) * s * 0.2; py = lerp(ty - s * 0.2, hy - hv * 0.5, k); a = Math.min(1, k * 4); }
      else if (ph < 0.35) { const k = (ph - 0.2) / 0.15; px = x + (j % 3 - 1) * s * 0.2 * (1 - k); py = lerp(hy - hv * 0.5, hy + hv * 0.1, k); }
      else if (leak) { const k = (ph - 0.35) / 0.65; px = lerp(x, d.x + Math.cos(d.ang) * s * 1.6, Math.min(1, k * 1.6)); py = lerp(hy + hv * 0.1, d.y, Math.min(1, k * 2)) + Math.max(0, k - 0.5) * s * 2.5; a = 1 - Math.max(0, k - 0.6) / 0.4; }
      else { const k = (ph - 0.35) / 0.65; if (k < 0.35) { px = x; py = lerp(hy + hv * 0.1, shaftY + s * 0.2, k / 0.35); } else { px = lerp(x, x + (o.run || W * 0.4), (k - 0.35) / 0.65); py = shaftY + s * 0.2; a = 1 - Math.max(0, k - 0.85) / 0.15; } }
      drop(px, py, s * 0.13, col, a);
    }
    return { D, R, top: { x, y: ty - s * 0.5 }, head: { x, y: hy }, fac: { x: fx, y: fy } };
  }
  function shaft(y, s) {
    ctx.beginPath(); rrect(-10, y - s * 0.45, W + 20, s * 1.3, s * 0.6); ctx.fillStyle = C.dend; ctx.fill(); outline(1.8); ctx.stroke();
  }
  function meterBar(x, y, w, v, label) {
    const h = fsz(0.9);
    text(label, x + w / 2, y - h * 0.9, fsz(0.85), C.ink);
    rrect(x, y, w, h, h / 2); ctx.fillStyle = "rgba(255,255,255,0.8)"; ctx.fill(); outline(1.4); ctx.stroke();
    rrect(x + 2, y + 2, Math.max(0, (w - 4) * v), h - 4, (h - 4) / 2); ctx.fillStyle = mix(C.bad, C.water, v); ctx.fill();
  }
  // 小网络（右上角），k：连接强度
  function netInset(x, y, w, h, k, broken) {
    rrect(x, y, w, h, H * 0.025); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    text("工作记忆网络", x + w / 2, y + fsz(0.8), fsz(0.78), C.ink);
    const cx = x + w / 2, cy = y + h * 0.58, rx = w * 0.32, ry = h * 0.28, P = [];
    for (let i = 0; i < 6; i++) { const q = i / 6 * Math.PI * 2 - Math.PI / 2; P.push([cx + Math.cos(q) * rx, cy + Math.sin(q) * ry]); }
    ctx.save(); ctx.lineWidth = 3;
    for (let i = 0; i < 6; i++) {
      const a = P[i], b = P[(i + 1) % 6];
      ctx.strokeStyle = Anima.alpha(C.water, 0.2 + 0.8 * k); ctx.setLineDash(k < 0.5 ? [4, 5] : []);
      if (broken && i % 2) continue;
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    }
    ctx.restore();
    P.forEach((p) => { ctx.beginPath(); ctx.arc(p[0], p[1], h * 0.06, 0, Math.PI * 2); ctx.fillStyle = mix("#e8e0e4", "#ffd3c4", k); ctx.fill(); outline(1.2); ctx.stroke(); });
    if (k > 0.2) { const t = (time * 0.35) % 1, i = Math.floor(t * 6), f = t * 6 - i, a = P[i], b = P[(i + 1) % 6]; glow(lerp(a[0], b[0], f), lerp(a[1], b[1], f), h * 0.12 * k, C.gold, k); }
  }
  function invU(x, y, w, h, pos) {
    rrect(x, y, w, h, H * 0.025); ctx.fillStyle = "rgba(255,255,255,0.85)"; ctx.fill(); outline(1.4); ctx.stroke();
    text("倒 U 形", x + w / 2, y + fsz(0.8), fsz(0.78), C.ink);
    const f = (u) => y + h * (0.9 - 0.6 * Math.sin(u * Math.PI));
    ctx.beginPath(); for (let i = 0; i <= 30; i++) { const u = i / 30, px = x + w * (0.1 + u * 0.8); if (i) ctx.lineTo(px, f(u)); else ctx.moveTo(px, f(u)); }
    ctx.strokeStyle = C.mintDeep; ctx.lineWidth = 3; ctx.stroke();
    const bx = x + w * (0.1 + pos * 0.8), by = f(pos) - h * 0.06;
    ctx.beginPath(); ctx.arc(bx, by, h * 0.06, 0, Math.PI * 2); ctx.fillStyle = pos > 0.7 ? C.bad : C.gold; ctx.fill(); outline(1.2); ctx.stroke();
  }
  function bg() { Anima.wash("#f3fbff", "#fff1ec"); Anima.bokeh(6, "#cfeaf7", 0.8, 21); }
  function layout() {
    const n = N(), s = H * (n ? 0.13 : 0.15);
    return { n, s, x: W * (n ? 0.3 : 0.34), hy: H * 0.5, shaftY: H * (n ? 0.8 : 0.82), ix: W * (n ? 0.63 : 0.74), iy: Anima.topSafe() + H * 0.02, iw: W * (n ? 0.34 : 0.22), ih: H * (n ? 0.24 : 0.3) };
  }

  // ================= 第 1、5 幕：手拉手的大网络 =================
  let card7 = { x: 0, y: 0 };
  function netBig(a, stress) {
    ctx.save(); ctx.globalAlpha *= a;
    const n = N();
    Anima.wash(stress ? "#fff0ea" : "#f3fbff", stress ? "#ffe6ee" : "#fff4ec"); Anima.bokeh(6, stress ? "#ffc9c9" : "#cfeaf7", 0.8, 5);
    const cx = W * 0.5, cy = H * (n ? 0.6 : 0.58), rx = W * (n ? 0.33 : 0.27), ry = H * 0.22, cs = H * (n ? 0.048 : 0.05);
    const P = [];
    for (let i = 0; i < 6; i++) { const q = i / 6 * Math.PI * 2 - Math.PI / 2 + 0.3; P.push({ x: cx + Math.cos(q) * rx, y: cy + Math.sin(q) * ry + cs * 1.5 }); }
    const brk = stress ? prog(5, 2.5) : 0, k = stress ? 1 - brk : 1;
    // 连接（手拉手的树突，中间一个树突棘）
    const links = [];
    for (let i = 0; i < 6; i++) {
      const A = P[i], B = P[(i + 1) % 6], m = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 - cs * 1.2 };
      const sep = stress && i % 2 === 0 ? brk * cs * 0.9 : 0;
      ctx.lineCap = "round";
      for (const [w, col] of [[cs * 0.34, C.line], [cs * 0.22, mix(C.dend, "#e0d8dc", 1 - k)]]) {
        ctx.strokeStyle = col; ctx.lineWidth = w;
        ctx.beginPath(); ctx.moveTo(A.x, A.y - cs * 1.4); ctx.quadraticCurveTo(lerp(A.x, m.x, 0.5), m.y, m.x - sep, m.y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(B.x, B.y - cs * 1.4); ctx.quadraticCurveTo(lerp(B.x, m.x, 0.5), m.y, m.x + sep, m.y); ctx.stroke();
      }
      ctx.beginPath(); ctx.arc(m.x - sep, m.y, cs * 0.28, 0, Math.PI * 2); ctx.fillStyle = C.spine; ctx.fill(); outline(1.4); ctx.stroke();
      if (stress && brk > 0.1) for (let j = 0; j < 3; j++) { const t = (time * 0.9 + j / 3) % 1; drop(m.x + (j - 1) * cs * 0.3, m.y + t * cs * 2, cs * 0.12, C.water, 1 - t); }
      links.push(m);
    }
    // 循环的信号
    const on = stress ? 1 - prog(4.6, 2.5) : (lt > 1.6 ? 1 : 0);
    if (on > 0.05) {
      const t = (((lt - 1.6) * 0.3) % 1 + 1) % 1, i = Math.floor(t * 6), f = t * 6 - i, A = P[i], B = P[(i + 1) % 6];
      const x = f < 0.5 ? lerp(A.x, links[i].x, f * 2) : lerp(links[i].x, B.x, f * 2 - 1), y = f < 0.5 ? lerp(A.y - cs * 1.4, links[i].y, f * 2) : lerp(links[i].y, B.y - cs * 1.4, f * 2 - 1);
      glow(x, y, cs * 1.2, C.gold, on); sparkle(x, y, cs * 0.35, on, "#fff6c2");
    }
    const lit = (i) => { if (on < 0.2) return false; const t = (((lt - 1.6) * 0.3) % 1 + 1) % 1; return Math.floor(t * 6) === i; };
    P.forEach((p, i) => chara(p.x, p.y, cs, { who: "neuron", hair: "#c58e6e", cloth: "#ffe0cf", arms: stress && brk > 0.3 ? "down" : "hug", eyes: stress && brk > 0.4 ? "dizzy" : (lit(i) ? "sparkle" : "happy"), mouth: stress && brk > 0.4 ? "wavy" : "smile", gray: stress ? brk * 0.5 : 0, seed: i }));
    const topY = Anima.topSafe() + H * 0.02;
    if (!stress) {
      // 输入：要记住的数字
      const pc = lt < 1.6 ? prog(0.3, 1.2) : 1, fade = 1 - prog(4, 1);
      if (fade > 0.02) {
        ctx.save(); ctx.globalAlpha *= fade;
        const x = lerp(W * 0.08, P[0].x - cs * 2, pc), y = lerp(H * 0.3, P[0].y - cs * 3.2, pc), r = cs * 0.9;
        card7 = { x, y };
        rrect(x - r, y - r * 1.2, r * 2, r * 2.4, r * 0.3); ctx.fillStyle = "#fff8d6"; ctx.fill(); outline(1.6); ctx.stroke();
        text("7", x, y + 2, r * 1.5, "#e0662a");
        ctx.restore();
      }
      callout("h-in", win(0.4, 3.8), card7.x, card7.y - cs, n ? W * 0.3 : W * 0.16, topY, "要记住的事：一个数字");
      callout("h-sp", win(n ? 7.6 : 4.2, 14), links[1].x, links[1].y, n ? W * 0.62 : W * 0.84, n ? topY : H * 0.3, "树突棘：手拉手的连接点");
      say("h-mem", lt > (n ? 4.2 : 6), P[3].x, P[3].y - cs * 3.2, cx, cy - cs, "卡片没了，我们还记得是 7！", "say");
    } else {
      const flood = prog(1, 3);
      for (let i = 0; i < 7; i++) {
        const t = (flood * 1.4 - i * 0.05), x = lerp(-cs * 2, W * (0.06 + i * 0.14), clamp(t, 0, 1)), y = H * 0.97;
        if (t > 0) chara(x, y, cs * 0.7, { who: i % 2 ? "DA" : "NE", walk: time * 10 + i, eyes: "wide", mouth: "open", arms: "up", seed: i });
      }
      if (win(0.3, 2.2)) { sfx("压力来了！", W * 0.5, H * 0.3, H * 0.06, C.bad, -0.1, 1); Anima.speedLines(W * 0.5, H * 0.5, H * 0.3, 18, 0.4); }
      invU(n ? W * 0.62 : W * 0.78, topY, W * (n ? 0.34 : 0.19), H * (n ? 0.2 : 0.22), lerp(0.5, 0.92, prog(3, 3)));
      callout("x-a1", win(3, n ? 7.4 : 13), P[1].x, P[1].y - cs * 3, n ? W * 0.3 : W * 0.3, topY, "NE、DA 太多：α1、D1 过度");
      callout("x-off", lt > (n ? 7.6 : 7.4), links[4].x, links[4].y, n ? W * 0.33 : W * 0.52, n ? topY : H * 0.9, "小门全开，网络掉线");
    }
    ctx.restore();
  }

  // ================= 第 2、3、6 幕：一根大树突棘 =================
  function spineView(a, k) {
    ctx.save(); ctx.globalAlpha *= a;
    bg();
    const g = layout(), s = g.s, n = g.n;
    shaft(g.shaftY, s);
    text("流向细胞体 →", W * 0.8, g.shaftY + s * 0.2, fsz(0.85), C.soft);
    let open = openNow(), campN = 1, fac = 0.3, recAct = 0;
    if (k === 1) { campN = lerp(1, 6, prog(1.5, 2.5)); fac = prog(1.5, 1); }
    if (k === 2) { recAct = prog(2, 0.6); fac = 1 - prog(3, 1); campN = lerp(6, 1, prog(3.2, 1.8)); }
    if (k === 5) { recAct = prog(1.8, 0.6); fac = 1 - prog(2, 1); campN = lerp(6, 1, prog(2.4, 1.6)); }
    const sp = spine({ x: g.x, hy: g.hy, s, shaftY: g.shaftY, open, camp: campN, fac, recs: k === 1 ? [] : [{ kind: "a2a", side: -1, act: recAct }], run: W - g.x });
    const cs = H * (n ? 0.042 : 0.045);
    // 谁来按 α2A
    let who = null;
    if (k === 2 || k === 5) {
      const r = sp.R[0], p = prog(k === 2 ? 0.4 : 0.3, 1.6), to = { x: r.x - cs * 0.6, y: r.y + cs * 3.3 };
      const x = lerp(-cs * 2, to.x, p), y = lerp(g.hy, to.y, p);
      const o = k === 2 ? { who: "NE", eyes: p >= 1 ? "happy" : "open", arms: p >= 1 ? "up" : "down" } : { who: "drug", hatColor: C.guan, tag: "胍法辛", eyes: "happy", arms: p >= 1 ? "up" : "down" };
      chara(x, y, cs, Object.assign({ walk: p < 1 ? time * 9 : null, dir: 1 }, o));
      who = { x, y: y - cs * 3.2 };
      // Gi → 工厂的刹车信号
      if (lt > 2.2 && lt < 4.5) Anima.spark([[r.x, r.y], [sp.fac.x, sp.fac.y]], (lt - 2.2) / 1.2, s * 0.15, "#ff9aa9");
    }
    if (k === 5) { // 托莫西汀 / 兴奋剂：更多 NE 赶来
      const p = prog(7, 2);
      for (let i = 0; i < 3; i++) {
        const x = lerp(W + cs * 2, W * (n ? 0.62 : 0.6) + i * cs * 1.8, clamp(p * 1.3 - i * 0.15, 0, 1));
        if (p > 0) chara(x, g.shaftY - s * 0.5, cs * 0.85, { who: "NE", walk: p < 1 ? time * 9 + i : null, dir: -1, eyes: "happy", arms: "wave", seed: i });
      }
      if (p > 0) chara(lerp(W + cs * 4, W * (n ? 0.8 : 0.9), p), g.shaftY - s * 0.5, cs, { who: "drug", hatColor: C.atx, tag: "托莫西汀", dir: -1, walk: p < 1 ? time * 9 : null, arms: "point", eyes: "happy" });
    }
    netInset(g.ix, g.iy, g.iw, g.ih, meter);
    if (k === 5) invU(g.ix, g.iy + g.ih + H * 0.02, g.iw, H * (n ? 0.16 : 0.18), lerp(0.2, 0.5, prog(3.5, 2.5)));
    else meterBar(g.ix + g.iw * 0.1, g.iy + g.ih + fsz(2), g.iw * 0.8, meter, "流到下一站的信号");
    const topY = Anima.topSafe() + H * 0.02, low = H * (n ? 0.9 : 0.9), d0 = sp.D[1];
    if (k === 1) {
      callout("a-sp", win(0.3, 2.8), g.x - s * 1.3, g.hy + s * 0.5, n ? W * 0.3 : W * 0.14, low, "树突棘：信号从这里流进来");
      callout("a-door", win(3.4, 7.8), d0.x, d0.y, n ? W * 0.5 : W * 0.6, low, "HCN 通道：会漏水的小门");
      callout("a-camp", win(1.6, n ? 3 : 7.8), g.x + s * 0.5, g.hy, n ? W * 0.3 : W * 0.14, topY, "cAMP 多 → 门开得大");
      say("a-leak", lt > 8, d0.x + s * 0.5, d0.y, n ? W * 0.74 : W * 0.66, H * (n ? 0.66 : 0.62), "信号从门口漏掉了，网络连不紧…", "think");
    }
    if (k === 2) {
      callout("b-a2a", win(2, 5), sp.R[0].x, sp.R[0].y, n ? W * 0.3 : W * 0.14, topY, "α2A 受体（连着 Gi）");
      callout("b-camp", win(3.4, 7), sp.fac.x, sp.fac.y, n ? W * 0.5 : W * 0.6, low, "cAMP 工厂被踩刹车");
      callout("b-shut", lt > 7.2, d0.x, d0.y, n ? W * 0.5 : W * 0.6, low, "小门关上 → 信号不漏");
      if (who) say("b-ne", lt > 8, who.x, who.y, n ? W * 0.74 : W * 0.66, H * (n ? 0.66 : 0.62), "信号增强，交给我！", "say");
    }
    if (k === 5) {
      callout("f-g", win(2, 6.5), sp.R[0].x, sp.R[0].y, n ? W * 0.3 : W * 0.14, topY, "胍法辛：直接激动 α2A");
      say("f-atx", lt > 9, W * 0.8, g.shaftY - s * 2, n ? W * 0.3 : W * 0.17, n ? H * 0.88 : H * 0.7, "托莫西汀挡住 NET、兴奋剂提高 NE 和 DA，也走这条路", "box");
    }
    ctx.restore();
  }

  // ================= 第 4 幕：三根树突棘，D1 降噪 =================
  function noiseView(a) {
    ctx.save(); ctx.globalAlpha *= a;
    bg();
    const n = N(), s = H * (n ? 0.085 : 0.1), shaftY = H * 0.82;
    shaft(shaftY, s);
    const xs = n ? [W * 0.17, W * 0.5, W * 0.83] : [W * 0.2, W * 0.5, W * 0.8], hy = H * 0.56;
    const da = prog(2.5, 1.5), noiseOpen = prog(4, 2);
    const sp = xs.map((x, i) => {
      const rel = i === 1;
      return spine({ x, hy, s, shaftY, open: rel ? 0.05 : noiseOpen * 0.95, camp: rel ? 1 : lerp(1, 4, noiseOpen), recs: rel ? [{ kind: "a2a", side: -1, act: 1 }] : [{ kind: "d1", side: i ? 1 : -1, act: da }], col: rel ? C.water : C.noise, seed: i + 1, drops: 6, run: W * 0.3 });
    });
    const cs = H * (n ? 0.036 : 0.038);
    [0, 2].forEach((i, j) => {
      const r = sp[i].R[0], p = prog(1 + j * 0.4, 1.5), x = lerp(i ? W + cs : -cs, r.x + (i ? cs * 0.5 : -cs * 0.5), p), y = lerp(hy, r.y + cs * 3.2, p);
      chara(x, y, cs, { who: "DA", dir: i ? -1 : 1, walk: p < 1 ? time * 9 : null, arms: p >= 1 ? "up" : "down", eyes: "happy" });
    });
    const r1 = sp[1].R[0];
    chara(r1.x - cs * 0.6, r1.y + cs * 3.2, cs, { who: "NE", eyes: "happy", arms: "up" });
    sparkles(xs[1], hy - s, s * 1.5, 3, 0.8, 4);
    const topY = Anima.topSafe() + H * 0.02, lab = hy - s * 3.2;
    text("无关输入", xs[0], lab, fsz(0.9), C.soft); text("任务相关", xs[1], lab, fsz(0.9), "#2f86b8"); text("无关输入", xs[2], lab, fsz(0.9), C.soft);
    callout("c-d1", win(2.6, 6.5), sp[0].R[0].x, sp[0].R[0].y, n ? W * 0.5 : W * 0.16, n ? H * 0.93 : topY, "D1 受体：让 cAMP 增多");
    callout("c-leak", win(6.5, 10.5), sp[2].D[1].x, sp[2].D[1].y, n ? W * 0.62 : W * 0.84, topY, "无关输入的小门打开，杂音漏走");
    say("c-too", lt > 10.6, xs[1], hy - s * 2.4, W * 0.5, H * 0.93, "D1 太多：连重要的连接也会变弱", "box");
    ctx.restore();
  }

  function draw() {
    ctx.fillStyle = "#fff6f2"; ctx.fillRect(0, 0, W, H);
    if (S.v0 > 0.02) netBig(S.v0, false);
    [1, 2, 5].forEach((i) => { if (S["v" + i] > 0.02) spineView(S["v" + i], i); });
    if (S.v3 > 0.02) noiseView(S.v3);
    if (S.v4 > 0.02) netBig(S.v4, true);
    const c = CH[cur];
    pill(14, 12, c.pill[0], c.pill[1], "#2f86b8", false);
    pill(W - 14, 12, c.pill2[0], c.pill2[1], "#6b61c9", true);
  }

  return {
    chapters: CH, state: S, dur: DUR, accent: "#7fc4e8",
    titleCard: { lines: ["前额叶的", "漏水小门"] },
    sync(e) { W = e.W; H = e.H; time = e.time; cur = e.cur; },
    update, draw,
  };
});
