/* =========================================================
   GRC study site — app logic (no dependencies, no build)
   Content lives in data/*.js. This file only renders it.
   ========================================================= */
(function () {
  "use strict";

  const LEARN = window.GRC_LEARN || [];
  const QUIZ = window.GRC_QUIZ || [];
  const IV = window.GRC_INTERVIEW || { categories: [], cards: [] };
  const TOOLS = window.GRC_TOOLS || [];
  const CHEAT = window.GRC_CHEAT || [];

  const STORE_KEY = "grc-study-v1";
  const LEVELS = { easy: "קל", medium: "בינוני", hard: "קשה" };
  const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Icons (authored, 1.75 stroke) ---------------- */
  const P = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const ICON = {
    learn: P('<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z"/>'),
    quiz: P('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>'),
    interview: P('<path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7l-4 3.5V16H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path d="M8.5 9.5h7M8.5 12.5h4"/>'),
    tools: P('<path d="M14.5 6.5a3.5 3.5 0 0 0 4.4 4.4L20 12l-8 8-3.5-3.5 8-8z" transform="rotate(0)"/><path d="M14 4.5 19.5 10M4 20l4.5-4.5"/>'),
    cheat: P('<path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z"/><path d="M14 3.5V8h4M10 12h5M10 15.5h5"/>'),
    sun: P('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>'),
    moon: P('<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>'),
    progress: P('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    check: P('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
    x: P('<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>'),
    arrow: P('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
    flip: P('<path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5M20 4.5v4h-4M20 12a8 8 0 0 1-13.7 5.6L4 15.5M4 19.5v-4h4"/>'),
    play: P('<path d="M7 5v14l11-7z"/>'),
    pause: P('<path d="M8 5v14M16 5v14"/>'),
    reset: P('<path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5M4 4.5v4h4"/>'),
    print: P('<path d="M7 9V3.5h10V9M7 17.5H4.5v-7a1.5 1.5 0 0 1 1.5-1.5h12a1.5 1.5 0 0 1 1.5 1.5v7H17"/><rect x="7" y="14" width="10" height="6.5" rx=".5"/>'),
    bulb: P('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3z"/>'),
    target: P('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>'),
    eye: P('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>'),
    alert: P('<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5M12 17.2v.1"/>'),
    list: P('<path d="M9 6.5h11M9 12h11M9 17.5h11M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01"/>'),
    timer: P('<circle cx="12" cy="13" r="7.5"/><path d="M12 9.5V13l2.5 1.5M9.5 2.5h5"/>'),
    retry: P('<path d="M20 12a8 8 0 1 1-2.4-5.7L20 8.5M20 4.5v4h-4"/>')
  };
  const learnCheck = `<span class="box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></span>`;

  /* ---------------- Text helpers ---------------- */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // `English` → isolated LTR span; **bold** → strong
  const md = (s) => esc(s)
    .replace(/`([^`]+)`/g, (_, t) => `<bdi class="en${t.length <= 24 ? " nw" : ""}" lang="en" dir="ltr">${t}</bdi>`)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const rich = (c) => {
    if (c == null || c === "") return "";
    if (typeof c === "string") return `<p>${md(c)}</p>`;
    return c.map((part) => Array.isArray(part)
      ? `<ul>${part.map((li) => `<li>${md(li)}</li>`).join("")}</ul>`
      : `<p>${md(part)}</p>`).join("");
  };
  const HE = /[֐-׿]/;
  const tag = (t) => HE.test(t) ? `<span class="tag tag--he" dir="rtl">${esc(t)}</span>` : `<span class="tag" dir="ltr">${esc(t)}</span>`;
  const tagList = (tags = []) => tags.length ? `<div class="tags">${tags.map(tag).join("")}</div>` : "";
  const bar = (p, label) => `<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(p * 100)}" aria-label="${esc(label)}"><div class="bar__fill" style="--p:${p}"></div></div>`;
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------------- Storage ---------------- */
  const defaults = () => ({ theme: null, learned: {}, quiz: { wrong: [], history: [] } });
  let state = load();
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (!s) return defaults();
      const d = defaults();
      return { ...d, ...s, quiz: { ...d.quiz, ...(s.quiz || {}) }, learned: s.learned || {} };
    } catch (e) { return defaults(); }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* storage full / private mode */ }
  }

  /* ---------------- Derived data ---------------- */
  const moduleById = (id) => LEARN.find((m) => m.id === id);
  const activeModules = () => LEARN.filter((m) => m.concepts && m.concepts.length);
  const learnedCount = (m) => m.concepts.filter((c) => state.learned[c.id]).length;
  const totals = () => {
    const all = activeModules().flatMap((m) => m.concepts);
    return { done: all.filter((c) => state.learned[c.id]).length, total: all.length };
  };
  const quizModules = () => LEARN.filter((m) => QUIZ.some((q) => q.module === m.id));

  /* ---------------- Theme ---------------- */
  const themeBtn = $("#themeBtn");
  function currentTheme() { return document.documentElement.dataset.theme; }
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    const dark = t === "dark";
    themeBtn.innerHTML = dark ? ICON.sun : ICON.moon;
    themeBtn.setAttribute("aria-label", dark ? "מעבר למצב בהיר" : "מעבר למצב כהה");
    const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
    $$('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", bg));
  }
  themeBtn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    state.theme = next; save(); applyTheme(next);
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!state.theme) applyTheme(e.matches ? "dark" : "light");
  });

  /* ---------------- Navigation ---------------- */
  const NAV = [
    { id: "learn", label: "לימוד", icon: ICON.learn },
    { id: "quiz", label: "מבחן", icon: ICON.quiz },
    { id: "interview", label: "ראיון", icon: ICON.interview },
    { id: "tools", label: "כלים", icon: ICON.tools },
    { id: "cheat", label: "דף סיכום", icon: ICON.cheat }
  ];
  const navHTML = NAV.map((n) => `<a class="nav__link" href="#/${n.id}" data-nav="${n.id}">${n.icon}<span>${n.label}</span></a>`).join("");
  $$(".nav").forEach((el) => { el.innerHTML = navHTML; });
  function markNav(section) {
    $$(".nav__link").forEach((a) => {
      if (a.dataset.nav === section) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* ---------------- Router ---------------- */
  const view = $("#view");
  let firstRender = true;
  function parse() {
    const parts = (location.hash.replace(/^#\/?/, "") || "learn").split("/").filter(Boolean);
    return { section: parts[0] || "learn", param: parts[1] ? decodeURIComponent(parts[1]) : null };
  }
  function render() {
    stopAllTimers();
    const { section, param } = parse();
    markNav(section);
    let html;
    switch (section) {
      case "learn": html = param ? viewModule(param) : viewLearn(); break;
      case "quiz": html = viewQuiz(); break;
      case "interview": html = viewInterview(param); break;
      case "tools": html = viewTools(); break;
      case "cheat": html = viewCheat(param); break;
      default: html = viewLearn(); markNav("learn");
    }
    view.innerHTML = `<div class="view-enter">${html}</div>`;
    const title = NAV.find((n) => n.id === section);
    document.title = `${title ? title.label + " · " : ""}GRC Consultant · הכנה לראיון`;
    if (!firstRender) {
      window.scrollTo(0, 0);
      view.focus({ preventScroll: true });
    }
    firstRender = false;
    afterRender(section);
  }
  window.addEventListener("hashchange", render);

  function afterRender(section) {
    if (section === "quiz") bindQuiz();
  }

  /* =========================================================
     LEARN
     ========================================================= */
  function viewLearn() {
    const t = totals();
    const p = t.total ? t.done / t.total : 0;
    const items = LEARN.map((m) => {
      const n = m.concepts.length;
      if (!n) {
        return `<li><div class="module-link" aria-disabled="true">
          <h2>${md(m.title)}</h2><span class="soon">בקרוב</span>
          <p>${md(m.summary)}</p></div></li>`;
      }
      const d = learnedCount(m);
      return `<li><a class="module-link" href="#/learn/${m.id}">
        <h2>${md(m.title)}</h2>${tagList(m.tags.slice(0, 1))}
        <p>${md(m.summary)}</p>
        <div class="progress-line">${bar(d / n, `התקדמות ב${m.title}`)}<span class="num">${d}/${n}</span></div>
      </a></li>`;
    }).join("");
    return `
      <header class="page-head">
        <h1>לימוד לפי נושאים</h1>
        <p>כל מושג מגיע עם הסבר קצר, למה הוא חשוב בראיון ודוגמה מהשטח. סמנו מושגים שלמדתם – ההתקדמות נשמרת במכשיר.</p>
      </header>
      <div class="overall">
        ${bar(p, "התקדמות כוללת")}
        <span class="num muted">${t.done} מתוך ${t.total} מושגים</span>
      </div>
      <ul class="module-list">${items}</ul>`;
  }

  function matrixHTML() {
    const lvl = (v) => v <= 4 ? 1 : v <= 9 ? 2 : v <= 14 ? 3 : 4;
    let cells = "";
    for (let i = 5; i >= 1; i--) {
      cells += `<div class="axis">${i}</div>`;
      for (let l = 1; l <= 5; l++) { const v = i * l; cells += `<div class="cell lvl-${lvl(v)}">${v}</div>`; }
    }
    cells += `<div></div>` + [1, 2, 3, 4, 5].map((l) => `<div class="axis">${l}</div>`).join("");
    return `<figure class="matrix-wrap" style="margin-inline:0">
      <div class="matrix" role="img" aria-label="מטריצת סיכונים 5 על 5: ציר אופקי סבירות 1 עד 5, ציר אנכי השפעה 1 עד 5, ציון הוא המכפלה">${cells}</div>
      <div class="matrix-legend"><span>אנכי: השפעה · אופקי: סבירות</span><span>ציון = סבירות × השפעה</span></div>
    </figure>`;
  }

  function viewModule(id) {
    const m = moduleById(id);
    if (!m || !m.concepts.length) {
      return `<a class="back" href="#/learn">${ICON.arrow}כל הנושאים</a>
        <div class="empty"><h2>הנושא עדיין בבנייה</h2><p>התוכן יתווסף בשלב הבא.</p></div>`;
    }
    const n = m.concepts.length, d = learnedCount(m);
    const cards = m.concepts.map((c) => {
      const on = !!state.learned[c.id];
      return `<article class="concept${on ? " is-learned" : ""}" id="c-${c.id}">
        <div class="concept__head">
          <h2>${md(c.title)}<bdi class="en" lang="en" dir="ltr">${esc(c.en)}</bdi></h2>
          <button class="learn-toggle" type="button" data-learn="${c.id}" aria-pressed="${on}" aria-label="סימון ${esc(c.title)} כנלמד">${learnCheck}<span>${on ? "נלמד" : "סמן כנלמד"}</span></button>
        </div>
        <div class="concept__body">${rich(c.explain)}</div>
        ${c.why ? `<div class="note note--why">${ICON.target}<div><span class="note__title">למה זה חשוב בראיון</span>${rich(c.why)}</div></div>` : ""}
        ${c.example ? `<div class="note note--example">${ICON.bulb}<div><span class="note__title">דוגמה מהשטח</span>${rich(c.example)}</div></div>` : ""}
        ${tagList(c.tags)}
      </article>`;
    }).join("");
    const hasQuiz = QUIZ.some((q) => q.module === m.id);
    const ivCats = [...new Set(IV.cards.filter((c) => c.module === m.id).map((c) => c.cat))];
    return `
      <a class="back" href="#/learn">${ICON.arrow}כל הנושאים</a>
      <header class="module-head">
        <h1>${md(m.title)}</h1>
        <p class="muted" style="margin-bottom:var(--s-3)"><bdi class="en" lang="en" dir="ltr">${esc(m.en)}</bdi></p>
        <div class="lead">${rich(m.intro || m.summary)}</div>
        ${m.showMatrix ? matrixHTML() : ""}
      </header>
      <div class="module-progress" id="moduleProgress">
        <div class="progress-line">${bar(d / n, "התקדמות בנושא")}<span class="num" id="modCount">${d}/${n}</span></div>
        <button class="btn btn--ghost" type="button" id="markAll" data-module="${m.id}">${d === n ? "ביטול סימון הכול" : "סמן את כל הנושא כנלמד"}</button>
      </div>
      <div class="concepts">${cards}</div>
      <div class="section-gap btn-row">
        ${hasQuiz ? `<a class="btn btn--primary" href="#/quiz" data-quiz-module="${m.id}">${ICON.quiz}תרגול שאלות בנושא</a>` : ""}
        ${ivCats.length ? `<a class="btn" href="#/interview/${ivCats[0]}">${ICON.interview}שאלות ראיון</a>` : ""}
      </div>`;
  }

  function updateModuleProgress(m) {
    const n = m.concepts.length, d = learnedCount(m);
    const wrap = $("#moduleProgress"); if (!wrap) return;
    const fill = $(".bar__fill", wrap); fill.style.setProperty("--p", d / n);
    $(".bar", wrap).setAttribute("aria-valuenow", Math.round((d / n) * 100));
    $("#modCount").textContent = `${d}/${n}`;
    $("#markAll").textContent = d === n ? "ביטול סימון הכול" : "סמן את כל הנושא כנלמד";
  }
  function setLearned(id, on) {
    if (on) state.learned[id] = true; else delete state.learned[id];
    const btn = $(`[data-learn="${CSS.escape(id)}"]`);
    if (btn) {
      btn.setAttribute("aria-pressed", String(on));
      $("span:last-child", btn).textContent = on ? "נלמד" : "סמן כנלמד";
      btn.closest(".concept").classList.toggle("is-learned", on);
    }
  }

  view.addEventListener("click", (e) => {
    const t = e.target.closest("[data-learn]");
    if (t) {
      const id = t.dataset.learn;
      setLearned(id, !state.learned[id]); save();
      updateModuleProgress(moduleById(parse().param));
      return;
    }
    const all = e.target.closest("#markAll");
    if (all) {
      const m = moduleById(all.dataset.module);
      const allOn = learnedCount(m) === m.concepts.length;
      m.concepts.forEach((c) => setLearned(c.id, !allOn)); save();
      updateModuleProgress(m);
      return;
    }
    const qm = e.target.closest("[data-quiz-module]");
    if (qm) { quizSetup.modules = new Set([qm.dataset.quizModule]); quizSetup.mode = "all"; quiz = null; }
  });

  /* =========================================================
     QUIZ
     ========================================================= */
  const quizSetup = { modules: new Set(), levels: new Set(), count: 10, mode: "all" };
  let quiz = null; // { items:[{q, opts:[{t,why,correct}]}], i, answered:[], done }

  function filteredPool() {
    let pool = QUIZ;
    if (quizSetup.mode === "wrong") {
      const w = new Set(state.quiz.wrong); pool = pool.filter((q) => w.has(q.id));
    }
    if (quizSetup.modules.size) pool = pool.filter((q) => quizSetup.modules.has(q.module));
    if (quizSetup.levels.size) pool = pool.filter((q) => quizSetup.levels.has(q.level));
    return pool;
  }

  function viewQuiz() {
    if (quiz && !quiz.done) return quizQuestionHTML();
    if (quiz && quiz.done) return quizSummaryHTML();
    return quizSetupHTML();
  }

  function quizSetupHTML() {
    const pool = filteredPool();
    const wrongN = state.quiz.wrong.filter((id) => QUIZ.some((q) => q.id === id)).length;
    const last = state.quiz.history[state.quiz.history.length - 1];
    const mods = quizModules().map((m) => {
      const c = QUIZ.filter((q) => q.module === m.id).length;
      return `<button type="button" class="chip" data-qmod="${m.id}" aria-pressed="${quizSetup.modules.has(m.id)}">${md(m.title)} <span class="count">${c}</span></button>`;
    }).join("");
    const lv = Object.entries(LEVELS).map(([k, v]) => `<button type="button" class="chip" data-qlvl="${k}" aria-pressed="${quizSetup.levels.has(k)}">${v}</button>`).join("");
    const counts = [10, 20, 0].map((n) => `<button type="button" class="chip" data-qcount="${n}" aria-pressed="${quizSetup.count === n}">${n || "הכול"}</button>`).join("");
    const n = quizSetup.count ? Math.min(quizSetup.count, pool.length) : pool.length;
    return `
      <header class="page-head">
        <h1>מבחן אמריקאי</h1>
        <p>אחרי כל תשובה תראו מיד למה התשובה הנכונה נכונה – ולמה כל אחת מהאחרות לא. סדר השאלות והתשובות מתערבב בכל פעם.</p>
      </header>
      <div class="col">
        <div class="panel">
          <div class="field">
            <span class="field__label" id="lbl-mode">מצב</span>
            <div class="chips" role="group" aria-labelledby="lbl-mode">
              <button type="button" class="chip" data-qmode="all" aria-pressed="${quizSetup.mode === "all"}">כל השאלות</button>
              <button type="button" class="chip" data-qmode="wrong" aria-pressed="${quizSetup.mode === "wrong"}" ${wrongN ? "" : "disabled"}>רק הטעויות שלי <span class="count">${wrongN}</span></button>
            </div>
          </div>
          <div class="field">
            <span class="field__label" id="lbl-mod">נושאים</span>
            <p class="field__hint">בלי בחירה = כל הנושאים</p>
            <div class="chips" role="group" aria-labelledby="lbl-mod">${mods}</div>
          </div>
          <div class="field">
            <span class="field__label" id="lbl-lvl">רמת קושי</span>
            <div class="chips" role="group" aria-labelledby="lbl-lvl">${lv}</div>
          </div>
          <div class="field">
            <span class="field__label" id="lbl-cnt">מספר שאלות</span>
            <div class="chips" role="group" aria-labelledby="lbl-cnt">${counts}</div>
          </div>
          <div class="field">
            <button class="btn btn--primary btn--block" type="button" id="quizStart" ${n ? "" : "disabled"}>${n ? `התחלה · ${n} שאלות` : "אין שאלות שמתאימות לסינון"}</button>
          </div>
        </div>
        ${last ? `<p class="muted small" style="margin-top:var(--s-4)">תוצאה אחרונה: <span class="num">${last.score}/${last.total}</span> · ${new Date(last.at).toLocaleDateString("he-IL")}</p>` : ""}
      </div>`;
  }

  function startQuiz() {
    let pool = shuffle(filteredPool());
    if (quizSetup.count) pool = pool.slice(0, quizSetup.count);
    quiz = {
      items: pool.map((q) => ({ q, opts: shuffle(q.options.map((o, i) => ({ ...o, correct: i === q.answer }))) })),
      i: 0, answered: [], done: false, mode: quizSetup.mode
    };
    rerenderQuiz();
  }

  function quizQuestionHTML() {
    const { items, i } = quiz;
    const it = items[i], q = it.q, m = moduleById(q.module);
    const ans = quiz.answered[i];
    const keys = ["א", "ב", "ג", "ד", "ה", "ו"];
    const opts = it.opts.map((o, k) => {
      let cls = "option", key = keys[k], verdict = "";
      if (ans != null) {
        if (o.correct) { cls += " is-correct show-why"; key = ICON.check; verdict = ""; }
        else if (k === ans) { cls += " is-wrong show-why"; key = ICON.x; verdict = "לא נכון. "; }
        else { cls += " is-dim show-why"; verdict = "לא נכון. "; }
      }
      return `<li><button type="button" class="${cls}" data-opt="${k}" ${ans != null ? "disabled" : ""}>
        <span class="option__key" aria-hidden="true">${key}</span>
        <span>${md(o.t)}</span>
        <span class="option__why" ${ans == null ? 'aria-hidden="true"' : ""}><div>${ans != null ? `<span class="verdict">${verdict}</span>${md(o.why)}` : ""}</div></span>
      </button></li>`;
    }).join("");
    const correctNow = ans != null && it.opts[ans].correct;
    const scoreSoFar = quiz.answered.filter((a, idx) => a != null && items[idx].opts[a].correct).length;
    return `
      <div class="col">
        <div class="quiz-meta">
          <div class="progress-line">${bar((i + (ans != null ? 1 : 0)) / items.length, "התקדמות במבחן")}<span class="num">${i + 1}/${items.length}</span></div>
          <button class="btn btn--ghost" type="button" id="quizQuit" style="min-height:36px;padding:4px 12px">יציאה</button>
        </div>
        <div class="panel" id="qPanel">
          <div class="flip__front-meta">
            <span class="level level--${q.level}">${LEVELS[q.level]}</span>
            ${m ? `<span>${md(m.title)}</span>` : ""}
            ${q.scenario ? `<span class="q-scenario">תרחיש</span>` : ""}
          </div>
          <p class="q-text" id="qText">${md(q.q)}</p>
          <ul class="options" aria-labelledby="qText">${opts}</ul>
          <div aria-live="polite">${ans != null ? `<div class="feedback ${correctNow ? "feedback--ok" : "feedback--bad"}">${correctNow ? ICON.check : ICON.x}${correctNow ? "נכון!" : "לא הפעם – קראו את ההסברים"}</div>` : ""}</div>
          <div class="quiz-actions">
            <span class="muted small num" style="align-self:center">${scoreSoFar} נכונות</span>
            ${ans != null ? `<button class="btn btn--primary" type="button" id="quizNext">${i + 1 < items.length ? "לשאלה הבאה" : "לסיכום"}</button>` : ""}
          </div>
        </div>
      </div>`;
  }

  function quizSummaryHTML() {
    const { items, answered } = quiz;
    const score = answered.filter((a, i) => items[i].opts[a] && items[i].opts[a].correct).length;
    const total = items.length;
    const pct = Math.round((score / total) * 100);
    const byMod = {};
    items.forEach((it, i) => {
      const k = it.q.module; byMod[k] = byMod[k] || { ok: 0, n: 0 };
      byMod[k].n++; if (it.opts[answered[i]].correct) byMod[k].ok++;
    });
    const rows = Object.entries(byMod).map(([k, v]) => {
      const m = moduleById(k);
      return `<li><div class="row"><span>${m ? md(m.title) : k}</span><span class="num">${v.ok}/${v.n}</span></div>${bar(v.ok / v.n, m ? m.title : k)}</li>`;
    }).join("");
    const wrongN = state.quiz.wrong.length;
    const msg = pct >= 85 ? "מצוין – אתם מוכנים בנושאים האלה." : pct >= 60 ? "בסיס טוב. כדאי לחזור על הטעויות." : "שווה לחזור לכרטיסי הלימוד ואז לנסות שוב.";
    return `
      <div class="col">
        <header class="page-head"><h1>סיכום המבחן</h1></header>
        <div class="panel">
          <div class="score"><span class="score__big">${score}/${total}</span><span class="muted num">${pct}%</span></div>
          <p>${msg}</p>
          <ul class="breakdown">${rows}</ul>
          <div class="quiz-actions">
            ${wrongN ? `<button class="btn btn--primary" type="button" id="quizRetryWrong">${ICON.retry}תרגול רק הטעויות (${wrongN})</button>` : ""}
            <button class="btn" type="button" id="quizAgain">מבחן חדש</button>
          </div>
        </div>
      </div>`;
  }

  function rerenderQuiz() {
    view.innerHTML = `<div class="view-enter">${viewQuiz()}</div>`;
    bindQuiz();
  }

  function answer(k) {
    if (!quiz || quiz.answered[quiz.i] != null) return;
    const it = quiz.items[quiz.i];
    quiz.answered[quiz.i] = k;
    const w = new Set(state.quiz.wrong);
    if (it.opts[k].correct) w.delete(it.q.id); else w.add(it.q.id);
    state.quiz.wrong = [...w]; save();
    // Update in place (no full re-render) so the reveal can transition.
    const panel = $("#qPanel");
    const html = quizQuestionHTML();
    const tmp = document.createElement("div"); tmp.innerHTML = html;
    const fresh = $("#qPanel", tmp);
    // Swap option buttons first in a "pre" state, then flip to show-why on next frame.
    $$(".option", fresh).forEach((b) => b.classList.remove("show-why"));
    panel.replaceWith(fresh);
    $(".quiz-meta", view).replaceWith($(".quiz-meta", tmp));
    requestAnimationFrame(() => requestAnimationFrame(() => {
      $$(".option", fresh).forEach((b) => b.classList.add("show-why"));
    }));
    bindQuiz();
    const next = $("#quizNext"); if (next) next.focus({ preventScroll: true });
  }

  function finishQuiz() {
    quiz.done = true;
    const score = quiz.answered.filter((a, i) => quiz.items[i].opts[a].correct).length;
    state.quiz.history.push({ at: Date.now(), score, total: quiz.items.length, mode: quiz.mode });
    state.quiz.history = state.quiz.history.slice(-20);
    save();
  }

  function bindQuiz() {
    const root = view;
    root.onclick = null;
    $$("[data-qmod]", root).forEach((b) => b.onclick = () => { toggleSet(quizSetup.modules, b.dataset.qmod); rerenderQuiz(); });
    $$("[data-qlvl]", root).forEach((b) => b.onclick = () => { toggleSet(quizSetup.levels, b.dataset.qlvl); rerenderQuiz(); });
    $$("[data-qcount]", root).forEach((b) => b.onclick = () => { quizSetup.count = +b.dataset.qcount; rerenderQuiz(); });
    $$("[data-qmode]", root).forEach((b) => b.onclick = () => { quizSetup.mode = b.dataset.qmode; rerenderQuiz(); });
    const s = $("#quizStart"); if (s) s.onclick = startQuiz;
    $$("[data-opt]", root).forEach((b) => b.onclick = () => answer(+b.dataset.opt));
    const n = $("#quizNext"); if (n) n.onclick = () => {
      if (quiz.i + 1 < quiz.items.length) quiz.i++; else finishQuiz();
      rerenderQuiz();
      window.scrollTo(0, 0);
    };
    const qq = $("#quizQuit"); if (qq) qq.onclick = () => { quiz = null; rerenderQuiz(); };
    const rw = $("#quizRetryWrong"); if (rw) rw.onclick = () => { quizSetup.mode = "wrong"; quizSetup.modules.clear(); quizSetup.levels.clear(); quizSetup.count = 0; startQuiz(); };
    const ag = $("#quizAgain"); if (ag) ag.onclick = () => { quiz = null; quizSetup.mode = "all"; rerenderQuiz(); };
  }
  function toggleSet(set, v) { set.has(v) ? set.delete(v) : set.add(v); }

  // Keyboard shortcuts in a running quiz: 1–6 choose, Enter = next
  document.addEventListener("keydown", (e) => {
    if (parse().section !== "quiz" || !quiz || quiz.done) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const k = parseInt(e.key, 10);
    if (k >= 1 && k <= quiz.items[quiz.i].opts.length && quiz.answered[quiz.i] == null) { e.preventDefault(); answer(k - 1); }
  });

  /* =========================================================
     INTERVIEW
     ========================================================= */
  function viewInterview(catId) {
    const cats = IV.categories;
    const cat = cats.find((c) => c.id === catId) || cats[0];
    const tabs = cats.map((c) => {
      const n = IV.cards.filter((x) => x.cat === c.id).length;
      return `<a class="chip" href="#/interview/${c.id}" ${c.id === cat.id ? 'aria-current="page"' : ""}>${esc(c.title)} <span class="count">${n}</span></a>`;
    }).join("");
    const cards = IV.cards.filter((x) => x.cat === cat.id);
    const body = cards.length
      ? `<div class="cards">${cards.map(cardHTML).join("")}</div>`
      : `<div class="empty"><h2>עוד אין כאן כרטיסים</h2><p>הכרטיסים לקטגוריה הזו יתווספו בשלבים הבאים.</p></div>`;
    return `
      <header class="page-head">
        <h1>הכנה לראיון</h1>
        <p>קראו את השאלה, ענו בקול, ורק אז הפכו את הכרטיס: נקודות מפתח לתשובה, מה המראיין בודק באמת וטעויות נפוצות.</p>
      </header>
      <nav class="tabs" aria-label="קטגוריות שאלות">${tabs}</nav>
      <div class="cat-intro"><p>${md(cat.intro)}</p></div>
      ${body}`;
  }

  function cardHTML(c) {
    const m = c.module ? moduleById(c.module) : null;
    const en = c.lang === "en";
    return `<div class="flip" data-card="${c.id}">
      <div class="flip__card">
        <div class="flip__face">${frontHTML(c, m, en)}</div>
        ${c.timer ? timerHTML(c) : ""}
      </div>
    </div>`;
  }
  function frontHTML(c, m, en) {
    return `<div class="flip__front-meta">${m ? tag(m.en) : ""}${en ? `<span>English</span>` : ""}</div>
      <p class="flip__q${en ? " ltr" : ""}" ${en ? 'lang="en" dir="ltr"' : ""}>${md(c.q)}</p>
      <div class="flip__spacer"></div>
      <div class="flip__actions"><button class="btn btn--primary" type="button" data-flip aria-expanded="false">${ICON.eye}הצגת תשובה</button></div>`;
  }
  function backHTML(c, en) {
    const L = en
      ? { points: "Model answer – key points", check: "What they're really checking", avoid: "Common mistakes" }
      : { points: "נקודות מפתח לתשובה", check: "מה המראיין בודק באמת", avoid: "טעויות נפוצות" };
    const dir = en ? ' class="ltr" lang="en" dir="ltr"' : "";
    return `<div class="flip__back">
      <p class="flip__q${en ? " ltr" : ""}" ${en ? 'lang="en" dir="ltr"' : ""} style="font-size:1rem;color:var(--muted)">${md(c.q)}</p>
      <div${dir}>
        <h3 class="h-points">${ICON.list}${L.points}</h3>
        <ul>${c.points.map((p) => `<li>${md(p)}</li>`).join("")}</ul>
        <h3 class="h-check">${ICON.target}${L.check}</h3>
        <p style="margin:0">${md(c.checking)}</p>
        <h3 class="h-avoid">${ICON.alert}${L.avoid}</h3>
        <ul>${c.mistakes.map((p) => `<li>${md(p)}</li>`).join("")}</ul>
      </div>
      <div class="flip__actions"><button class="btn" type="button" data-flip aria-expanded="true">${ICON.flip}חזרה לשאלה</button></div>
    </div>`;
  }

  function flipCard(el) {
    const c = IV.cards.find((x) => x.id === el.dataset.card);
    const m = c.module ? moduleById(c.module) : null;
    const en = c.lang === "en";
    const card = $(".flip__card", el), face = $(".flip__face", el);
    const toBack = !el.classList.contains("is-back");
    const swap = () => {
      face.innerHTML = toBack ? backHTML(c, en) : frontHTML(c, m, en);
      el.classList.toggle("is-back", toBack);
      const btn = $("[data-flip]", face); if (btn) btn.focus({ preventScroll: true });
    };
    if (reduceMotion() || !card.animate) {
      if (card.animate) {
        card.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 90, easing: "ease" }).onfinish = () => {
          swap(); card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 140, easing: "ease" });
        };
      } else swap();
      return;
    }
    const a = card.animate(
      [{ transform: "rotateY(0deg)" }, { transform: "rotateY(90deg)" }],
      { duration: 170, easing: "cubic-bezier(0.55, 0, 0.75, 0.3)" }
    );
    a.onfinish = () => {
      swap();
      card.animate(
        [{ transform: "rotateY(-90deg)" }, { transform: "rotateY(0deg)" }],
        { duration: 260, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
      );
      if (toBack) {
        const r = el.getBoundingClientRect();
        if (r.top < 64) el.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    };
  }

  /* ---- Practice timer (English cards) ---- */
  const timers = new Map(); // id → { total, left, endAt, int }
  function timerHTML(c) {
    return `<div class="timer" data-timer="${c.id}" data-total="${c.timer}">
      <div class="timer__row">
        <span class="timer__time" aria-hidden="true">${fmt(c.timer)}</span>
        <span class="visually-hidden" aria-live="polite" data-tlive></span>
        <div class="flip__spacer"></div>
        <button class="btn btn--primary" type="button" data-tplay aria-label="Start timer">${ICON.play}<span>Start</span></button>
        <button class="btn btn--ghost" type="button" data-treset aria-label="Reset timer">${ICON.reset}</button>
      </div>
      ${bar(1, "Time left")}
    </div>`;
  }
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.max(0, Math.ceil(s % 60))).padStart(2, "0")}`.replace(/:60$/, ":00");
  function paintTimer(el, t) {
    const left = Math.max(0, t.left);
    const time = $(".timer__time", el);
    time.textContent = fmt(Math.ceil(left));
    time.classList.toggle("is-low", left <= 15);
    $(".bar__fill", el).style.setProperty("--p", left / t.total);
    const play = $("[data-tplay]", el);
    play.innerHTML = t.int ? `${ICON.pause}<span>Pause</span>` : `${ICON.play}<span>${left < t.total && left > 0 ? "Resume" : "Start"}</span>`;
    play.setAttribute("aria-label", t.int ? "Pause timer" : "Start timer");
  }
  function getTimer(el) {
    const id = el.dataset.timer;
    if (!timers.has(id)) timers.set(id, { total: +el.dataset.total, left: +el.dataset.total, int: null, endAt: 0 });
    return timers.get(id);
  }
  function toggleTimer(el) {
    const t = getTimer(el), live = $("[data-tlive]", el);
    if (t.int) { clearInterval(t.int); t.int = null; t.left = (t.endAt - Date.now()) / 1000; paintTimer(el, t); return; }
    if (t.left <= 0) t.left = t.total;
    t.endAt = Date.now() + t.left * 1000;
    live.textContent = `Timer started: ${fmt(Math.ceil(t.left))}`;
    t.int = setInterval(() => {
      t.left = (t.endAt - Date.now()) / 1000;
      if (t.left <= 0) { clearInterval(t.int); t.int = null; t.left = 0; live.textContent = "Time is up"; }
      paintTimer(el, t);
    }, 250);
    paintTimer(el, t);
  }
  function resetTimer(el) {
    const t = getTimer(el); clearInterval(t.int); t.int = null; t.left = t.total; paintTimer(el, t);
  }
  function stopAllTimers() { timers.forEach((t) => clearInterval(t.int)); timers.clear(); }

  view.addEventListener("click", (e) => {
    const f = e.target.closest("[data-flip]"); if (f) { flipCard(f.closest(".flip")); return; }
    const tp = e.target.closest("[data-tplay]"); if (tp) { toggleTimer(tp.closest(".timer")); return; }
    const tr = e.target.closest("[data-treset]"); if (tr) { resetTimer(tr.closest(".timer")); }
  });

  /* =========================================================
     TOOLS
     ========================================================= */
  function viewTools() {
    const cats = TOOLS.map((c) => `
      <section class="tool-cat" aria-labelledby="tc-${c.id}">
        <h2 id="tc-${c.id}">${md(c.title)}</h2>
        <p>${md(c.intro)}</p>
        <ul class="tool-list">${c.tools.map((t) => `
          <li class="tool">
            <div class="tool__name" lang="en">${esc(t.name)}${t.vendor ? `<small>${md(t.vendor)}</small>` : ""}</div>
            <div><p>${md(t.purpose)}</p><p class="angle">${md(t.angle)}</p></div>
          </li>`).join("")}
        </ul>
      </section>`).join("");
    return `
      <header class="page-head">
        <h1>כלים ואקו-סיסטם</h1>
        <p>לא צריך לדעת להפעיל את כולם – צריך לזהות אותם, להבין מה הם עושים, ולדעת לדבר עליהם בהקשר הנכון בראיון.</p>
      </header>
      ${cats}`;
  }

  /* =========================================================
     CHEAT SHEET
     ========================================================= */
  function viewCheat(filter) {
    const mods = LEARN.filter((m) => CHEAT.some((b) => b.module === m.id));
    if (filter && !mods.some((m) => m.id === filter)) filter = null;
    const chips = `<nav class="chips no-print" aria-label="סינון לפי נושא" style="margin-bottom:var(--s-5)">
      <a class="chip" href="#/cheat" ${!filter ? 'aria-current="page"' : ""}>הכול</a>
      ${mods.map((m) => `<a class="chip" href="#/cheat/${m.id}" ${filter === m.id ? 'aria-current="page"' : ""}>${md(m.title)}</a>`).join("")}
    </nav>`;
    const blocks = CHEAT.filter((b) => !filter || b.module === filter).map((b) => {
      const m = moduleById(b.module);
      const table = b.table ? `<div class="table-wrap"><table>
        <thead><tr>${b.table.head.map((h) => `<th scope="col">${md(h)}</th>`).join("")}</tr></thead>
        <tbody>${b.table.rows.map((r) => `<tr>${r.map((c) => `<td>${md(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>` : "";
      const formula = b.formula ? b.formula.map((f) => `<div class="formula" lang="en">${esc(f)}</div>`).join("") : "";
      const items = b.items ? `<ul>${b.items.map((i) => `<li>${md(i)}</li>`).join("")}</ul>` : "";
      return `<section class="cheat-block" aria-label="${esc(b.title)}">
        <h2>${md(b.title)} ${(b.tags || []).map(tag).join("")}</h2>
        ${formula}${table}${items}
      </section>`;
    }).join("");
    const covered = new Set(CHEAT.map((b) => b.module));
    const pending = LEARN.filter((m) => !covered.has(m.id)).length;
    return `
      <header class="page-head">
        <h1>דף סיכום</h1>
        <p>העובדות, המספרים וההבחנות שחייבים לזכור. חמש דקות קריאה לפני הראיון.</p>
      </header>
      <div class="cheat-actions btn-row no-print">
        <button class="btn" type="button" onclick="window.print()">${ICON.print}הדפסה / PDF</button>
        ${pending ? `<span class="muted small" style="align-self:center">${pending} נושאים נוספים יתווספו בהמשך</span>` : ""}
      </div>
      ${chips}
      <div class="cheat">${blocks}</div>`;
  }

  /* =========================================================
     PROGRESS DIALOG + RESET
     ========================================================= */
  const dlg = $("#progressDialog"), progressBtn = $("#progressBtn"), resetBtn = $("#resetBtn");
  progressBtn.innerHTML = ICON.progress;
  progressBtn.addEventListener("click", () => {
    const rows = activeModules().map((m) => {
      const d = learnedCount(m), n = m.concepts.length;
      return `<li><div class="row"><span>${md(m.title)}</span><span class="num">${d}/${n}</span></div>${bar(d / n, m.title)}</li>`;
    }).join("");
    const last = state.quiz.history[state.quiz.history.length - 1];
    $("#progressSummary").innerHTML = `<ul class="stat-list">${rows}</ul>
      <p class="small">מבחנים שבוצעו: <span class="num">${state.quiz.history.length}</span>${last ? ` · אחרון: <span class="num">${last.score}/${last.total}</span>` : ""} · שאלות לחזרה: <span class="num">${state.quiz.wrong.length}</span></p>`;
    resetBtn.textContent = "איפוס כל ההתקדמות"; resetBtn.dataset.armed = "";
    if (dlg.showModal) { dlg.showModal(); $(".sheet__body", dlg).classList.remove("dialog-in"); void dlg.offsetWidth; $(".sheet__body", dlg).classList.add("dialog-in"); }
  });
  let armTimer;
  resetBtn.addEventListener("click", () => {
    if (!resetBtn.dataset.armed) {
      resetBtn.dataset.armed = "1"; resetBtn.textContent = "לחצו שוב לאישור האיפוס";
      clearTimeout(armTimer);
      armTimer = setTimeout(() => { resetBtn.dataset.armed = ""; resetBtn.textContent = "איפוס כל ההתקדמות"; }, 4000);
      return;
    }
    const theme = state.theme;
    state = defaults(); state.theme = theme; save();
    quiz = null; dlg.close(); render();
  });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

  /* ---------------- Boot ---------------- */
  applyTheme(currentTheme());
  render();
})();
