# GRC Consultant — Interview Prep (Hebrew)

A static, Hebrew (RTL) study site for a Cybersecurity GRC Consultant interview:
learning modules, a multiple-choice quiz, interview flip cards, a tools reference and a printable cheat sheet.

No backend and no build step. Open `index.html` directly, or serve the folder with any static host (GitHub Pages).

## Live site

🔗 **[Open the study site](https://GITHUB-PAGES-URL-PLACEHOLDER)**

<!-- TODO: replace https://GITHUB-PAGES-URL-PLACEHOLDER with the GitHub Pages URL once Pages is enabled
     (Settings → Pages → Deploy from branch → main / root). It usually looks like:
     https://<username>.github.io/<repo-name>/ -->

**Contents:** 10 learning modules · 142 quiz questions · 52 interview flip cards · tools reference · printable cheat sheet.

## Structure

```
index.html          app shell (header, nav, dialog)
css/styles.css      design tokens, light/dark themes, components, print styles
js/app.js           router + rendering (reads the data files; no content here)
data/learn.js       learning modules → concept cards
data/quiz.js        quiz questions
data/interview.js   interview categories + flip cards
data/tools.js       tools & ecosystem
data/cheatsheet.js  cheat-sheet blocks
```

Data files are plain `.js` files that each set one global (e.g. `window.GRC_QUIZ = [...]`), so the
site also works from `file://`, where browsers block `fetch()` of JSON.

## Adding content

Each data file starts with a comment describing its schema. In any text field:

- `` `English term` `` → rendered as an isolated left-to-right span (keeps English correct inside Hebrew).
  Keep a whole English phrase inside one pair of backticks, e.g. `` `A.8.28 Secure coding` ``.
- `**bold**` → bold.

Rules:
- IDs (concepts, questions, cards) must be unique and never reused — progress is stored by ID.
- A quiz question needs `options` (each with `t` and `why`) and `answer` (index of the correct option).
  Options are shuffled at runtime, so the order in the file doesn't matter.
- Anything not verified against a primary source is marked with a `// VERIFY` comment.

## Progress

Stored in the browser's `localStorage` under `grc-study-v1` (learned concepts, quiz history, wrong answers).
The progress dialog (chart icon in the header) has a reset button.

## Deploy (GitHub Pages)

Push to `main`, then enable Pages for the `main` branch, root folder (`/`).
`.nojekyll` disables Jekyll processing so files are served as-is.
