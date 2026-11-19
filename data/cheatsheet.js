/* =========================================================
   CHEAT SHEET – must-remember facts, readable in ~5 minutes
   ---------------------------------------------------------
   blocks: [{ id, module, title, tags, items?, table?, formula? }]
   - items:   bullet strings (inline markup: `English`, **bold**)
   - table:   { head: [...], rows: [[...], ...] }
   - formula: array of LTR formula lines
   Order in this array = order on the page.
   ========================================================= */

window.GRC_CHEAT = [
  {
    id: "c-risk-terms", module: "risk", title: "סיכון במשפט אחד", tags: ["ISO 31000"],
    items: [
      "**Risk** = איום שמנצל חולשה ופוגע בנכס → השפעה עסקית.",
      "ניסוח: \"בשל [חולשה], [איום] עלול [פעולה], מה שיוביל ל[השפעה].\"",
      "רמת סיכון = **סבירות × השפעה** (בדרך כלל 1–5 על כל ציר).",
      "`ISO 31000`: סיכון = \"השפעה של אי-ודאות על יעדים\"."
    ]
  },
  {
    id: "c-risk-treat", module: "risk", title: "4 אפשרויות טיפול", tags: ["ISO 27005"],
    table: {
      head: ["אפשרות", "מינוח ISO 27005", "דוגמה"],
      rows: [
        ["`Mitigate`", "`Modification`", "MFA, הצפנה, נוהל"],
        ["`Accept`", "`Retention`", "סיכון בתוך התיאבון, מתועד"],
        ["`Transfer`", "`Sharing`", "ביטוח סייבר, מיקור חוץ"],
        ["`Avoid`", "`Avoidance`", "הפסקת הפעילות / הפיצ'ר"]
      ]
    },
    items: ["**Transfer לא מעביר אחריות** – רק חלק מההשפעה הכספית."]
  },
  {
    id: "c-risk-ir", module: "risk", title: "Inherent · Residual · Owner", tags: ["ISO 27001 6.1.3"],
    items: [
      "**Inherent** – לפני בקרות. **Residual** – אחרי בקרות, אף פעם לא אפס.",
      "Residual חייב להיות בתוך **תיאבון הסיכון**; אחרת ממשיכים לטפל או מסלימים.",
      "**Risk Owner** (בעל תפקיד עסקי) מאשר את תוכנית הטיפול ואת הסיכון השיורי – לא היועץ ולא המבקר.",
      "**Risk Appetite** – נקבע ע\"י הנהלה / דירקטוריון; מתורגם ל**קריטריוני קבלה**."
    ]
  },
  {
    id: "c-risk-quant", module: "risk", title: "כימות", tags: ["FAIR"],
    formula: ["SLE = AV × EF", "ALE = SLE × ARO", "Control worth it if (ALE before − ALE after) > annual control cost"],
    items: ["AV = ערך נכס · EF = % נזק מאירוע · ARO = אירועים בשנה (פעם ב-5 שנים = 0.2)."]
  },
  {
    id: "c-risk-iso", module: "risk", title: "סיכונים ב-ISO 27001", tags: ["ISO 27001"],
    table: {
      head: ["סעיף", "מה נדרש"],
      rows: [
        ["`6.1.2`", "תהליך הערכת סיכונים: קריטריונים (כולל קבלה), תוצאות עקביות, זיהוי סיכוני CIA, בעלי סיכון"],
        ["`6.1.3`", "טיפול: בחירת אפשרויות, בקרות, השוואה ל-`Annex A`, `SoA`, תוכנית טיפול, אישור בעלים"],
        ["`8.2`", "ביצוע הערכה במרווחים מתוכננים ובשינוי משמעותי"],
        ["`8.3`", "יישום תוכנית הטיפול ושמירת תיעוד התוצאות"]
      ]
    }
  },
  {
    id: "c-risk-register", module: "risk", title: "שדות במרשם סיכונים", tags: ["Risk Register"],
    items: [
      "מזהה · תרחיש · נכס/תהליך · סבירות · השפעה · inherent",
      "בקרות קיימות · החלטת טיפול · תוכנית פעולה",
      "**בעלים · תאריך יעד** · residual · סטטוס",
      "בלי בעלים ויעדים – זו רשימה, לא כלי ניהול."
    ]
  },

  /* ---------- ISO 27001 ---------- */
  {
    id: "c-iso-clauses", module: "iso27001", title: "ISO 27001 – סעיפים 4–10", tags: ["ISO 27001:2022"],
    table: {
      head: ["סעיף", "עיקר הדרישה"],
      rows: [
        ["`4`", "הקשר, בעלי עניין, **היקף** (4.3)"],
        ["`5`", "הנהלה, **מדיניות** (5.2), תפקידים (5.3)"],
        ["`6`", "**סיכונים** (6.1.2), **טיפול ו-SoA** (6.1.3), יעדים (6.2), שינויים (6.3)"],
        ["`7`", "משאבים, כשירות, מודעות, תקשורת, **מידע מתועד** (7.5)"],
        ["`8`", "ביצוע הערכת סיכונים (8.2) ותוכנית טיפול (8.3)"],
        ["`9`", "ניטור, **מבדק פנימי** (9.2), **סקר הנהלה** (9.3)"],
        ["`10`", "שיפור מתמיד, אי-התאמות ופעולה מתקנת"]
      ]
    },
    items: ["4–10 כולם **חובה**. רק בקרות Annex A ניתנות להחרגה (עם הצדקה ב-SoA).", "PDCA: ‏4–6 Plan · 7–8 Do · 9 Check · 10 Act."]
  },
  {
    id: "c-iso-annexa", module: "iso27001", title: "Annex A ‏· 93 בקרות", tags: ["Annex A"],
    table: {
      head: ["נושא", "בקרות"],
      rows: [["`A.5 Organizational`", "37"], ["`A.6 People`", "8"], ["`A.7 Physical`", "14"], ["`A.8 Technological`", "34"]]
    },
    items: [
      "2013: ‏114 בקרות ב-14 תחומים → 2022: ‏93 ב-4 נושאים, **11 חדשות**.",
      "חדשות לזכור: `A.5.7 Threat intel` · `A.5.23 Cloud` · `A.8.9 Config mgmt` · `A.8.12 DLP` · `A.8.28 Secure coding`.",
      "**ISO 27002** = הנחיות יישום, אותו מספור, 5 מאפיינים, **לא ניתן להסמכה**."
    ]
  },
  {
    id: "c-iso-soa", module: "iso27001", title: "SoA ‏(6.1.3 d)", tags: ["SoA"],
    items: ["הבקרות הנחוצות", "הצדקה להכללה", "האם מיושמת", "הצדקה להחרגה מ-Annex A", "הגשר: **סיכונים → טיפול → SoA → בקרות → ראיות**."]
  },
  {
    id: "c-iso-cert", module: "iso27001", title: "מחזור הסמכה", tags: ["Certification"],
    items: [
      "**Stage 1** – מוכנות ותיעוד · **Stage 2** – יישום ואפקטיביות.",
      "תעודה ל-**3 שנים** · מבדקי מעקב **שנתיים** (שנים 1–2) · הסמכה מחדש בשנה 3.",
      "לפני Stage 2: **מבדק פנימי + סקר הנהלה**.",
      "**Major** = דרישה לא מתקיימת / כשל מערכתי · **Minor** = כשל נקודתי · **OFI** = לא אי-התאמה.",
      "מעבר מ-2013 הסתיים **31.10.2025** ‏(IAF MD 26) · `Amd 1:2024` = שינויי אקלים ב-4.1/4.2."
    ]
  },

  /* ---------- SOC 2 ---------- */
  {
    id: "c-soc-types", module: "soc2", title: "SOC 2 – ‏Type I מול Type II", tags: ["AICPA"],
    table: {
      head: ["", "Type I", "Type II"],
      rows: [
        ["בודק", "תכנון", "תכנון **+ פעולה אפקטיבית**"],
        ["זמן", "נקודת זמן", "תקופה (לרוב 3–12 חודשים)"],
        ["ערך ללקוחות", "צעד ראשון מהיר", "הסטנדרט המבוקש"]
      ]
    },
    items: [
      "**Attestation, לא certification** – דוח עם חוות דעת של **פירמת CPA**.",
      "ה-AICPA **לא קובע מינימום** לתקופה · **Bridge letter** = הצהרת הנהלה, לא חוות דעת."
    ]
  },
  {
    id: "c-soc-tsc", module: "soc2", title: "Trust Services Criteria", tags: ["TSC 2017"],
    items: [
      "**Security** (חובה) · `Availability · Processing Integrity · Confidentiality · Privacy`",
      "`CC1 Control Env` · `CC2 Comm & Info` · `CC3 Risk Assessment` · `CC4 Monitoring` · `CC5 Control Activities`",
      "`CC6 Logical & Physical Access` · `CC7 System Operations` · `CC8 Change Mgmt` · `CC9 Risk Mitigation`",
      "CC1–CC5 מבוססים על **COSO** · Points of focus עודכנו ב-2022 – הנחיה, לא דרישה."
    ]
  },
  {
    id: "c-soc-report", module: "soc2", title: "קריאת דוח SOC 2", tags: ["Vendor review"],
    items: [
      "חלקים: חוות דעת · הצהרת הנהלה · תיאור מערכת · בקרות, בדיקות ותוצאות.",
      "חוות דעת: **unqualified** · qualified · adverse · disclaimer. חריגים בודדים ≠ הסתייגות.",
      "**CUECs** = בקרות שהלקוח חייב להפעיל · **Carve-out** = ספק המשנה לא נבדק (נפוץ) · **Inclusive** = נבדק.",
      "SOC 1 = דיווח כספי · SOC 2 = TSC, מפורט · SOC 3 = סיכום ציבורי."
    ]
  },
  {
    id: "c-soc-vs-iso", module: "soc2", title: "ISO 27001 מול SOC 2", tags: ["Comparison"],
    table: {
      head: ["", "ISO 27001", "SOC 2"],
      rows: [
        ["תוצר", "תעודה", "דוח אטסטציה"],
        ["מנפיק", "גוף הסמכה מוסמך", "פירמת CPA"],
        ["מחזור", "3 שנים + מעקב שנתי", "דוח Type II כל שנה"],
        ["מיקוד", "מערכת ניהול (ISMS)", "בקרות מול TSC לאורך תקופה"]
      ]
    },
    items: ["ההחלטה לפי **דרישות הלקוחות**; סט בקרות אחד שממופה לשתיהן."]
  }

];
