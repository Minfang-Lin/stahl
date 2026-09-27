// 展厅：大脑地图、按章节列表、角色图鉴、脑区展签，以及在展厅和小剧场之间切换。
(() => {
  const $ = (id) => document.getElementById(id);
  const SVG = "http://www.w3.org/2000/svg";
  const catalog = window.AnimaCatalog;
  const eps = Anima.episodes();
  const byId = {};
  eps.forEach((e) => { byId[e.id] = e; });

  // 大脑图旁边的标签：脑区上的锚点 (ax, ay) → 标签位置 (lx, ly)，side 决定标签在左边还是右边
  // 坐标是 SVG 外层坐标（大脑整体向右平移了 40）
  const LABELS = [
    { region: "pfc", ax: 168, ay: 140, lx: 4, ly: 60, side: "left" },
    { region: "nac", ax: 238, ay: 214, lx: 4, ly: 250, side: "left" },
    { region: "amygdala", ax: 276, ay: 248, lx: 4, ly: 310, side: "left" },
    { region: "hypo", ax: 252, ay: 286, lx: 4, ly: 370, side: "left" },
    { region: "striatum", ax: 300, ay: 156, lx: 636, ly: 176, side: "right" },
    { region: "synapse", ax: 530, ay: 112, lx: 636, ly: 136, side: "right" },
    { region: "hippo", ax: 360, ay: 232, lx: 636, ly: 226, side: "right" },
    { region: "midbrain", ax: 342, ay: 268, lx: 636, ly: 276, side: "right" },
    { region: "brainstem", ax: 344, ay: 344, lx: 636, ly: 356, side: "right" },
  ];

  const epsFor = (key, field) => eps.filter((e) => (e[field] || []).indexOf(key) >= 0);

  // ---------- 大脑图 ----------
  function el(tag, attrs, parent) {
    const n = document.createElementNS(SVG, tag);
    Object.keys(attrs).forEach((k) => n.setAttribute(k, attrs[k]));
    if (parent) parent.appendChild(n);
    return n;
  }

  function setupBrain() {
    const labels = $("labels");
    for (const L of LABELS) {
      const region = catalog.regions[L.region];
      const live = epsFor(L.region, "regions");
      const on = live.length > 0;
      const group = document.querySelector(`[data-region="${L.region}"]`);
      group.classList.add(on ? "on" : "off");
      group.setAttribute("role", "button");
      group.setAttribute("tabindex", "0");
      group.setAttribute("aria-label", `${region.name}：${on ? `已开演 ${live.length} 集` : "筹备中"}`);

      const g = el("g", { class: `label ${on ? "on" : "off"}`, "data-region": L.region, role: "button", tabindex: "0", "aria-label": region.name }, labels);
      const txt = region.name;
      const w = Array.from(txt).reduce((a, ch) => a + (ch.charCodeAt(0) > 255 ? 19 : 10), 0) + 22, h = 32;
      const x = L.side === "left" ? L.lx : L.lx - w;
      const edgeX = L.side === "left" ? x + w : x;
      el("path", { class: "leader", d: `M${L.ax} ${L.ay} L${edgeX} ${L.ly}` }, g);
      el("circle", { class: "pin", cx: L.ax, cy: L.ay, r: 3.5 }, g);
      el("rect", { x, y: L.ly - h / 2, width: w, height: h, rx: h / 2 }, g);
      const t = el("text", { x: x + 11, y: L.ly + 6.5 }, g);
      t.textContent = txt;
    }
    Array.prototype.forEach.call(document.querySelectorAll("[data-region]"), (n) => {
      n.addEventListener("click", () => openSheet(n.dataset.region, n));
      n.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openSheet(n.dataset.region, n); }
      });
    });
  }

  // ---------- 展签 ----------
  let lastFocus = null;
  function episodeItem(e) {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button"; b.className = "ep-card";
    b.style.setProperty("--ep", e.color);
    const dot = document.createElement("span"); dot.className = "ep-dot";
    const body = document.createElement("span"); body.className = "ep-body";
    const t = document.createElement("b"); t.textContent = e.title;
    const n = document.createElement("small"); n.className = "ep-n"; n.textContent = `${e.scenes} 幕`;
    t.appendChild(n);
    const d = document.createElement("span"); d.textContent = e.summary;
    const go = document.createElement("span"); go.className = "ep-go"; go.textContent = "开演 ▶";
    body.appendChild(t); body.appendChild(d);
    b.appendChild(dot); b.appendChild(body); b.appendChild(go);
    b.addEventListener("click", () => { closeSheet(); location.hash = e.id; });
    li.appendChild(b);
    return li;
  }
  function plannedItem(name) {
    const li = document.createElement("li");
    li.className = "ep-planned";
    const t = document.createElement("b"); t.textContent = name;
    const s = document.createElement("span"); s.textContent = "筹备中";
    li.appendChild(t); li.appendChild(s);
    return li;
  }

  function openSheet(key, from) {
    const region = catalog.regions[key];
    lastFocus = from || null;
    $("sheetTitle").textContent = region.name;
    $("sheetFact").textContent = region.fact;
    const list = $("sheetList");
    while (list.firstChild) list.removeChild(list.firstChild);
    epsFor(key, "regions").forEach((e) => list.appendChild(episodeItem(e)));
    region.planned.forEach((name) => list.appendChild(plannedItem(name)));
    $("sheet").hidden = false;
    $("sheetClose").focus();
  }
  function closeSheet() {
    $("sheet").hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $("sheetClose").addEventListener("click", closeSheet);
  $("sheetBackdrop").addEventListener("click", closeSheet);
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("sheet").hidden) closeSheet(); });

  // ---------- 按章节 ----------
  function setupBook() {
    const box = $("bookList");
    for (const c of catalog.parts) {
      const sec = document.createElement("section");
      sec.className = "disease";
      const h = document.createElement("h2"); h.textContent = c.name;
      const small = document.createElement("small"); small.className = "book-ch"; small.textContent = c.book;
      h.appendChild(small);
      const p = document.createElement("p"); p.textContent = c.desc;
      const ul = document.createElement("ul"); ul.className = "ep-list";
      epsFor(c.id, "parts").forEach((e) => ul.appendChild(episodeItem(e)));
      c.planned.forEach((name) => ul.appendChild(plannedItem(name)));
      sec.appendChild(h); sec.appendChild(p); sec.appendChild(ul);
      box.appendChild(sec);
    }
  }

  // ---------- 角色图鉴 ----------
  const portraits = [];
  function setupCast() {
    const box = $("castList");
    for (const c of catalog.cast) {
      const info = Anima.CAST[c.key];
      const li = document.createElement("li"); li.className = "cast-card";
      li.style.setProperty("--c", info.cloth);
      const cv = document.createElement("canvas"); cv.className = "cast-pic"; cv.setAttribute("aria-hidden", "true");
      const body = document.createElement("div"); body.className = "cast-body";
      const name = document.createElement("h3"); name.textContent = info.name.replace(/（.*）/, "");
      const role = document.createElement("span"); role.className = "cast-role"; role.textContent = c.role;
      name.appendChild(role);
      const d = document.createElement("p"); d.textContent = c.desc;
      const home = document.createElement("p"); home.className = "cast-home"; home.textContent = "🏠 " + c.home;
      const appear = epsFor(c.key, "cast");
      body.appendChild(name); body.appendChild(d); body.appendChild(home);
      if (appear.length) {
        const a = document.createElement("p"); a.className = "cast-appear";
        // 出演的集太多时只列前 3 集，其余用“等 N 集”带过，卡片不会被撑得很长
        a.appendChild(document.createTextNode(`出演 ${appear.length} 集：`));
        appear.slice(0, 3).forEach((e, i) => {
          const link = document.createElement("a"); link.href = "#" + e.id; link.textContent = e.title;
          if (i) a.appendChild(document.createTextNode("、"));
          a.appendChild(link);
        });
        if (appear.length > 3) a.appendChild(document.createTextNode(" 等"));
        body.appendChild(a);
      }
      li.appendChild(cv); li.appendChild(body);
      box.appendChild(li);
      portraits.push({ cv, key: c.key, i: portraits.length });
    }
  }
  const POSES = [["wave", "sparkle", "grin"], ["hold", "happy", "smile"], ["point", "open", "open"], ["shh", "closed", "o"], ["fist", "open", "grin"],
    ["hold", "open", "smile"], ["wave", "happy", "smile"], ["hold", "open", "smile"], ["hold", "open", "cat"], ["wave", "sparkle", "smile"]];
  const ITEMS = { DA: "letter", "5HT": "letter", ACh: "book", pump: "net", MAO: "broom", AChE: "scissors" };
  let castRaf = 0, castT = 0, castLast = 0;
  function drawCast(now) {
    if ($("panelCast").hidden || !$("episode").hidden) { castRaf = 0; return; }
    castT += Math.min(0.05, (now - castLast) / 1000 || 0); castLast = now;
    for (const p of portraits) {
      const pose = POSES[p.i % POSES.length];
      Anima.portrait(p.cv, (w, h) => {
        Anima.glow(w / 2, h * 0.55, w * 0.5, "#ffffff", 0.9);
        Anima.chara(w / 2, h * 0.94, h * 0.27, { who: p.key, arms: pose[0], eyes: pose[1], mouth: pose[2], item: ITEMS[p.key] || null, seed: p.i, label: p.key === "drug" ? "药" : undefined });
      }, castT + p.i * 0.7);
    }
    castRaf = requestAnimationFrame(drawCast);
  }
  function startCast() { if (!castRaf) { castLast = performance.now(); castRaf = requestAnimationFrame(drawCast); } }

  // ---------- 标签页 ----------
  const TABS = { brain: ["tabBrain", "panelBrain"], book: ["tabBook", "panelBook"], cast: ["tabCast", "panelCast"] };
  function selectTab(which) {
    Object.keys(TABS).forEach((k) => {
      $(TABS[k][0]).setAttribute("aria-selected", k === which);
      $(TABS[k][1]).hidden = k !== which;
    });
    if (which === "cast") startCast();
  }
  Object.keys(TABS).forEach((k) => $(TABS[k][0]).addEventListener("click", () => selectTab(k)));

  // ---------- 展厅 ↔ 小剧场：用网址里的 #id 记录当前在看哪一集 ----------
  let fromHome = false;
  function route() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (byId[id]) {
      fromHome = !$("home").hidden && fromHome !== null;
      $("home").hidden = true;
      $("episode").hidden = false;
      document.title = byId[id].title + " · 脑内小剧场";
      scrollTo(0, 0);
      Anima.play(id);
    } else {
      Anima.stop();
      $("episode").hidden = true;
      $("home").hidden = false;
      document.title = "脑内小剧场";
      if (!$("panelCast").hidden) startCast();
    }
  }
  $("back").addEventListener("click", () => { if (fromHome) history.back(); else location.hash = ""; });
  addEventListener("hashchange", route);

  const planned = {};
  Object.keys(catalog.regions).forEach((k) => catalog.regions[k].planned.forEach((n) => { planned[n] = 1; }));
  catalog.parts.forEach((c) => c.planned.forEach((n) => { planned[n] = 1; }));
  const np = Object.keys(planned).length;
  $("count").textContent = np ? `已开演 ${eps.length} 集 · 筹备中 ${np} 集 · 持续更新` : `已开演 ${eps.length} 集 · 持续更新`;

  setupBrain();
  setupBook();
  setupCast();
  fromHome = null;
  route();
  fromHome = false;
})();
