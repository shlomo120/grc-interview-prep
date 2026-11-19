/* =========================================================
   INTERVIEW PREPARATION
   ---------------------------------------------------------
   categories: tabs shown in the Interview section.
   cards: {
     id, cat,                 // cat must match a category id
     module: "risk" | null,   // optional link to a learning module
     lang: "he" | "en",       // "en" = question + model answer in English (LTR)
     q: "the question",
     points: [ ... ],         // model answer outline – key points, not a script
     checking: "what the interviewer is really checking",
     mistakes: [ ... ],       // common mistakes to avoid
     timer: 120               // optional: practice timer in seconds (English cards)
   }
   Inline markup: `English term`, **bold**.
   ========================================================= */

window.GRC_INTERVIEW = {
  categories: [
    { id: "general", title: "כללי / HR", intro: "שאלות פתיחה ושאלות HR. המטרה: סיפור קוהרנטי שמחבר את הרקע שלכם לתפקיד ולחברה." },
    { id: "behavioral", title: "התנהגותי (STAR)", intro: "ענו במבנה STAR: **Situation** (הקשר קצר), **Task** (מה היה התפקיד שלכם), **Action** (מה **אתם** עשיתם – רוב התשובה), **Result** (תוצאה, רצוי מדידה, ומה למדתם)." },
    { id: "technical", title: "GRC טכני", intro: "תקנים, תהליכים ומתודולוגיה. תענו במבנה ברור ותחברו כל עיקרון לדוגמה מעשית." },
    { id: "scenarios", title: "תרחישים", intro: "המראיין רוצה לראות איך אתם חושבים. תתחילו בשאלות הבהרה, תציגו גישה מובנית ותסיימו בהמלצה." },
    { id: "depth", title: "עומק טכני (PT)", intro: "חברת בדיקות חדירות תבדוק שאתם מדברים את השפה של הבודקים: חולשות, CVSS, OWASP, ענן." },
    { id: "english", title: "English practice", intro: "Answer out loud, in English, against the timer (2 minutes). Aim for structure: headline → 2–3 points → example → close." },
    { id: "ask", title: "שאלות למראיין", intro: "שאלות חכמות בסוף הראיון מראות שחשבתם על התפקיד ברצינות. בחרו 2–3." }
  ],

  cards: [
    /* ---------- Risk methodology ---------- */
    {
      id: "iv-risk-process", cat: "technical", module: "risk", lang: "he",
      q: "תארו את תהליך הערכת הסיכונים שלכם מקצה לקצה.",
      points: [
        "**הקשר והיקף** – יעדים עסקיים, רגולציה, גבולות ההיקף, קריטריוני קבלת סיכון שההנהלה מאשרת.",
        "**זיהוי** – נכסים ותהליכים קריטיים, איומים, חולשות ובקרות קיימות. מקורות: ראיונות, מסמכים, תוצאות PT וסריקות, אירועי עבר.",
        "**ניתוח והערכה** – סבירות × השפעה (השפעה עסקית, לא רק CIA), השוואה לקריטריונים, תעדוף.",
        "**טיפול** – Mitigate/Accept/Transfer/Avoid, תוכנית טיפול עם בעלים ויעדים, אישור בעלי הסיכון לסיכון השיורי.",
        "**ניטור** – מעקב יישום, עדכון המרשם, בחינה מחדש במרווחים קבועים ובכל שינוי משמעותי.",
        "לסגור בדוגמה קצרה מלקוח אמיתי או היפותטי."
      ],
      checking: "שיש לכם מתודולוגיה סדורה, שאתם מבינים שהתוצר הוא החלטה עסקית, ושאתם יודעים לעבוד עם אנשים (סדנאות, ראיונות) ולא רק עם אקסל.",
      mistakes: [
        "לקפוץ ישר לרשימת חולשות טכניות בלי היקף ונכסים.",
        "לא להזכיר בעלי סיכון ומי מאשר את הסיכון השיורי.",
        "לתאר תהליך חד-פעמי במקום מחזורי.",
        "לדקלם תקן בלי דוגמה מעשית."
      ]
    },
    {
      id: "iv-risk-inherent", cat: "technical", module: "risk", lang: "he",
      q: "מה ההבדל בין inherent risk ל-residual risk, ולמה זה חשוב ללקוח?",
      points: [
        "**Inherent** – רמת הסיכון בלי בקרות (או לפני הבקרות המתוכננות). **Residual** – מה שנשאר אחרי הבקרות.",
        "הפער מראה את התרומה של הבקרות ועוזר להצדיק השקעה.",
        "את ה-residual משווים לתיאבון הסיכון: אם הוא מעליו – ממשיכים לטפל; אם בתוכו – בעל הסיכון מאשר.",
        "דוגמה: גישה מרחוק בלי MFA (גבוה) → אחרי MFA וניטור (נמוך-בינוני)."
      ],
      checking: "הבנה של בסיס המתודולוגיה וחיבור שלה להחלטה ולתקציב.",
      mistakes: [
        "להגיד ש-residual יכול להיות אפס.",
        "לשכוח מי מאשר את הסיכון השיורי.",
        "להגדיר נכון אבל בלי להסביר למה זה מעניין את הלקוח."
      ]
    },
    {
      id: "iv-risk-known", cat: "scenarios", module: "risk", lang: "he",
      q: "הצגתם ממצא ללקוח, והוא עונה: \"הסיכון הזה כבר ידוע לנו.\" מה עושים?",
      points: [
        "לא להתווכח – לשאול: **איפה הוא מתועד?** האם הוא במרשם הסיכונים, עם בעלים, דירוג והחלטת טיפול?",
        "אם יש החלטת Accept – האם היא התקבלה בסמכות הנכונה, מתועדת, ובתוקף? האם היא מבוססת על אותו מידע (למשל ניצול שהוכח ב-PT עכשיו)?",
        "\"ידוע\" אינו טיפול. אם אין החלטה מתועדת – זה פער, ומציעים להכניס למרשם ולקבל החלטה פורמלית.",
        "אם ההחלטה תקינה – מציינים בדוח שהסיכון מוכר ומקובל, ומפנים להחלטה. כך הממצא נשאר שקוף והלקוח לא מרגיש מותקף.",
        "לבדוק אם השתנה משהו מאז ההחלטה (חשיפה, נכס, איום) שמצדיק בחינה מחדש."
      ],
      checking: "האם אתם מבדילים בין \"מודעות\" לבין \"ניהול סיכון\", ואם אתם יכולים לעמוד על שלכם בנימוס ובלי להיגרר לעימות.",
      mistakes: [
        "למחוק את הממצא כי הלקוח \"כבר יודע\".",
        "להתעקש בצורה שמייצרת עימות.",
        "לא לבדוק אם קבלת הסיכון התקבלה בסמכות הנכונה."
      ]
    },
    {
      id: "iv-risk-accept-high", cat: "scenarios", module: "risk", lang: "he",
      q: "הלקוח רוצה לקבל סיכון גבוה, מעל תיאבון הסיכון, כי אין תקציב. מה עושים?",
      points: [
        "קבלת סיכון היא זכות של הארגון – התפקיד שלנו לוודא שהיא **מודעת, מתועדת ובסמכות הנכונה** (סיכון מעל התיאבון מחייב בדרך כלל הסלמה להנהלה).",
        "לנסח את ההשפעה העסקית בשפה של המחליט: כסף, לקוחות, רגולציה, חוזים.",
        "להציע **בקרות ביניים** זולות (הגבלת גישה, ניטור, הקשחה) שמורידות חשיפה עד שיהיה תקציב.",
        "להגביל את הקבלה בזמן (למשל 6 חודשים) ולקבוע מועד לבחינה מחדש.",
        "לתעד במרשם – כדי שגם המבקר יראה תהליך תקין."
      ],
      checking: "שיקול דעת עסקי: אתם לא \"משטרה\", אבל גם לא חותמת גומי.",
      mistakes: [
        "לאיים שהארגון ייכשל במבדק.",
        "לשנות את הדירוג כדי שהבעיה \"תיעלם\".",
        "לקבל החלטה בעל פה בלי תיעוד."
      ]
    },
    {
      id: "iv-risk-mgmt", cat: "behavioral", module: "risk", lang: "he",
      q: "ספרו על מקרה שבו הסברתם סיכון להנהלה או לקהל לא טכני.",
      points: [
        "**S** – הקשר קצר: מי הקהל, מה היה על הפרק (תקציב, החלטה, ממצא).",
        "**T** – המשימה שלכם: לגרום להם להבין ולהחליט.",
        "**A** – מה עשיתם: תרגמתם חולשה טכנית לתרחיש עסקי (\"מה יקרה, למי, כמה זה יעלה\"), השתמשתם בדוגמה מוכרת או במקרה מהעולם, הצגתם 2–3 אפשרויות עם עלות ותועלת, ונתתם המלצה ברורה.",
        "**R** – תוצאה מדידה: החלטה שהתקבלה, תקציב שאושר, זמן תיקון שהתקצר. ומה למדתם.",
        "אם אין ניסיון ישיר: מקרה מקביל (הסבר להורים, ללקוח בעבודה קודמת) – העיקרון זהה."
      ],
      checking: "יכולת תקשורת עם מקבלי החלטות – אחת הדרישות המפורשות בתיאור המשרה.",
      mistakes: [
        "להשתמש בז'רגון (CVSS, CVE) כאילו ההנהלה מבינה.",
        "לספר מה \"הצוות\" עשה במקום מה אתם עשיתם.",
        "לסיים בלי תוצאה."
      ]
    },
    {
      id: "iv-risk-en-process", cat: "english", module: "risk", lang: "en", timer: 120,
      q: "Walk me through how you would run a risk assessment for a new client.",
      points: [
        "**Headline:** \"I follow a structured, repeatable process aligned with ISO 27005, and I keep it business-focused.\"",
        "**Scope and context:** understand the business, critical services, regulatory obligations, and agree on risk acceptance criteria with management.",
        "**Identify:** map critical assets and processes, then threats, vulnerabilities and existing controls — through interviews, document review and recent pentest results.",
        "**Analyse and evaluate:** rate likelihood and business impact, compare against the criteria, and prioritise.",
        "**Treat:** agree a treatment option per risk, build a treatment plan with owners and deadlines, and get risk owners to sign off on residual risk.",
        "**Close:** \"It's a cycle — I track implementation and reassess at planned intervals or when something significant changes.\""
      ],
      checking: "Clear, structured spoken English under time pressure, and correct use of core terminology.",
      mistakes: [
        "Translating from Hebrew word by word — use short, simple sentences.",
        "Running out of time before reaching treatment and follow-up.",
        "Filler words instead of a clear opening sentence."
      ]
    },
    {
      id: "iv-risk-en-cfo", cat: "english", module: "risk", lang: "en", timer: 120,
      q: "How would you explain residual risk to a CFO?",
      points: [
        "**Plain-language definition:** \"Residual risk is the exposure we still carry after our controls are in place. It's never zero.\"",
        "**Use their language:** money and decisions — \"Today this risk could cost us roughly X per year; with this control it drops to Y.\"",
        "**The decision:** \"The question for you is whether Y is acceptable for the business, or whether we spend more to reduce it further — or transfer part of it through insurance.\"",
        "**Ownership:** make clear that accepting residual risk is a business decision, documented and reviewed periodically.",
        "Keep it to 3–4 sentences, then pause for questions."
      ],
      checking: "Whether you can adapt your message to a non-technical, finance-minded executive — in English.",
      mistakes: [
        "Opening with technical jargon (CVSS, CVE, Annex A).",
        "Giving a long lecture instead of a short answer plus an offer to go deeper.",
        "Not ending with the decision you need from them."
      ]
    },

    /* ---------- ISO 27001 ---------- */
    {
      id: "iv-iso-structure", cat: "technical", module: "iso27001", lang: "he",
      q: "תארו את המבנה של ISO 27001:2022.",
      points: [
        "**סעיפים 4–10** – דרישות מערכת הניהול, כולן חובה: הקשר והיקף, הנהלה ומדיניות, תכנון (סיכונים, SoA, יעדים), תמיכה (משאבים, כשירות, תיעוד), תפעול, הערכת ביצועים (מבדק פנימי, סקר הנהלה), שיפור.",
        "לחבר ל-**PDCA**: 4–6 Plan, 7–8 Do, 9 Check, 10 Act.",
        "**Annex A** – ‏93 בקרות ב-4 נושאים (Organizational, People, Physical, Technological). נבחרות לפי הערכת הסיכונים ומוצדקות ב-**SoA**.",
        "**ISO 27002** נותן הנחיות יישום לכל בקרה ואינו ניתן להסמכה.",
        "לסגור: \"התקן מסמיך מערכת ניהול, לא רשימת בקרות.\""
      ],
      checking: "שליטה בבסיס, והבנה שהלב הוא ניהול סיכונים ושיפור מתמיד – לא צ'ק-ליסט.",
      mistakes: [
        "לדבר רק על Annex A ולשכוח את סעיפי מערכת הניהול.",
        "להגיד שכל 93 הבקרות חובה.",
        "לצטט מספרים של גרסת 2013 (114 בקרות, 14 תחומים)."
      ]
    },
    {
      id: "iv-iso-startup", cat: "scenarios", module: "iso27001", lang: "he",
      q: "סטארט-אפ צריך הסמכת ISO 27001 תוך שנה. איך הייתם ניגשים לזה?",
      points: [
        "**שאלות הבהרה:** למה עכשיו (לקוח ספציפי? איזה היקף הוא דורש?), גודל, ענן, משאבים פנימיים, מי מוביל אצלם.",
        "**חודש 1–2:** gap assessment, הגדרת **היקף** ממוקד ואישור הנהלה, מינוי בעלים.",
        "**חודש 2–4:** מתודולוגיית סיכונים, **הערכת סיכונים**, תוכנית טיפול, **SoA**.",
        "**חודש 3–6:** מדיניות ונהלים שמתאימים למה שהצוות באמת עושה; יישום בקרות חסרות (MFA, סקירות הרשאות, VM, גיבויים, ניהול ספקים).",
        "**חודש 6–9:** הפעלת הבקרות וצבירת ראיות, הדרכת מודעות, ניטור יעדים.",
        "**חודש 9–10:** **מבדק פנימי** בלתי תלוי, תיקון ממצאים, **סקר הנהלה**.",
        "**חודש 10–12:** Stage 1 → זמן לתיקונים → Stage 2. כדאי לבחור גוף הסמכה מוקדם, כי לוחות הזמנים שלהם מתמלאים.",
        "להזכיר סיכונים ללוח הזמנים: זמינות הצוות, תלות בפיתוח, ובחירת גוף הסמכה."
      ],
      checking: "יכולת לנהל פרויקט מקצה לקצה, להכיר את הדרישות בסדר הנכון, ולהיות ריאליסטיים מול לקוח.",
      mistakes: [
        "להתחיל ב\"נכתוב את כל הנהלים\".",
        "לשכוח מבדק פנימי וסקר הנהלה לפני Stage 1.",
        "לא להשאיר זמן שהבקרות יפעלו ויצברו ראיות.",
        "להבטיח הצלחה בלי לשאול על משאבים."
      ]
    },
    {
      id: "iv-iso-gap", cat: "technical", module: "iso27001", lang: "he",
      q: "איך מבצעים gap assessment מול ISO 27001?",
      points: [
        "**הכנה:** הבנת העסק, ההיקף הצפוי והמסמכים הקיימים.",
        "**שיטה:** ראיונות עם בעלי תפקידים (CTO, DevOps, HR, IT), סקירת מסמכים, ובדיקת ראיות מדגמית – לא רק \"יש לכם נוהל?\" אלא \"תראו לי שהוא מתבצע\".",
        "**כיסוי:** כל סעיפי 4–10 ובקרות Annex A הרלוונטיות.",
        "**דירוג פערים:** קיים ומיושם / קיים חלקית / לא קיים; והאם הבעיה בתיעוד, ביישום או בראיות.",
        "**תוצר:** דוח פערים עם תעדוף לפי סיכון ומאמץ, ו-roadmap עם בעלים ולוחות זמנים.",
        "בחברת PT: לשלב ממצאי בדיקות טכניות כראיה לפערים בבקרות."
      ],
      checking: "שיטתיות, ושאתם מבדילים בין \"יש מסמך\" ל\"הבקרה פועלת\".",
      mistakes: [
        "Gap assessment שהוא רק צ'ק-ליסט של מסמכים.",
        "דוח פערים בלי תעדוף ובלי roadmap.",
        "להתעלם מסעיפי מערכת הניהול ולהתמקד רק בבקרות."
      ]
    },
    {
      id: "iv-iso-audit-prep", cat: "technical", module: "iso27001", lang: "he",
      q: "איך מכינים לקוח למבדק הסמכה?",
      points: [
        "**ראיות מוכנות ומאורגנות:** תיקייה לפי סעיף ובקרה – היקף, מדיניות, מרשם סיכונים, SoA, תוכנית טיפול, דוח מבדק פנימי, פרוטוקול סקר הנהלה, רשומות הדרכה, סקירות הרשאות.",
        "**Mock audit / מבדק פנימי** שבודק כמו המבקר: דגימות, ראיונות.",
        "**הכנת מרואיינים:** להסביר להם מה המבקר ישאל, לענות בכנות, לא להמציא, ולהפנות לראיה.",
        "**לוגיסטיקה:** לוח זמנים, חדרים או קישורים, מי זמין, מי מלווה את המבקר.",
        "**במהלך המבדק:** לתעד שאלות ובקשות, לספק ראיות מהר, ולא להתווכח עם ממצאים – להבין ולתעד.",
        "**אחרי:** תוכנית פעולה מתקנת לכל אי-התאמה, עם ניתוח שורש."
      ],
      checking: "ניסיון מעשי מול מבקרים וגופי הסמכה – יתרון מפורש בתיאור המשרה.",
      mistakes: [
        "\"לאמן\" עובדים לענות תשובות לא נכונות.",
        "ראיות שנוצרות בשבוע האחרון (המבקר מזהה תאריכים).",
        "להתעמת עם המבקר על ממצא."
      ]
    },
    {
      id: "iv-iso-en-explain", cat: "english", module: "iso27001", lang: "en", timer: 120,
      q: "Briefly explain what ISO 27001 is to a startup CEO who has never heard of it.",
      points: [
        "**One-line definition:** \"It's the international standard for running information security as a management system — and you can get certified against it.\"",
        "**Why they should care:** enterprise customers and partners ask for it; it shortens security questionnaires and sales cycles.",
        "**How it works:** define the scope, assess your risks, choose controls to treat them, document them, run them, and review and improve regularly.",
        "**What certification means:** an accredited certification body audits you; the certificate is valid for three years, with yearly surveillance audits.",
        "**Close:** \"It's less about buying tools and more about having a repeatable, risk-based way of managing security.\""
      ],
      checking: "Explaining a framework simply and persuasively to a business audience, in English.",
      mistakes: [
        "Starting with clause numbers or \"Annex A\".",
        "Saying it guarantees you won't be breached.",
        "Not connecting it to revenue or customers."
      ]
    },

    /* ---------- SOC 2 ---------- */
    {
      id: "iv-soc-types", cat: "technical", module: "soc2", lang: "he",
      q: "מה ההבדל בין SOC 2 Type I ל-Type II, ומה הייתם ממליצים ללקוח?",
      points: [
        "**Type I** – תכנון הבקרות בנקודת זמן. **Type II** – תכנון ופעולה אפקטיבית לאורך תקופה, עם דגימות מכל התקופה.",
        "לקוחות מעדיפים Type II כי הוא מוכיח שהבקרות באמת פועלות.",
        "**המלצה טיפוסית:** אם עסקה ממתינה – Type I מהר, ומיד אחריו תקופת תצפית (3–6 חודשים) ל-Type II הראשון, ואז דוח שנתי.",
        "להזכיר: SOC 2 הוא **attestation** של פירמת CPA, לא certification.",
        "ה-AICPA לא קובע מינימום לתקופת התצפית – מתאמים מול המבקר ומול ציפיות הלקוחות."
      ],
      checking: "הבנה של המוצר ושל הלחץ העסקי שמאחוריו.",
      mistakes: [
        "\"SOC 2 certification\".",
        "\"חובה 6 חודשים לפחות\".",
        "להמליץ אוטומטית על Type II בלי לשאול מה לוח הזמנים העסקי."
      ]
    },
    {
      id: "iv-soc-6months", cat: "scenarios", module: "soc2", lang: "he",
      q: "לקוח רוצה SOC 2 תוך 6 חודשים כדי לסגור עסקה. מה הצעד הראשון ואיך ממשיכים?",
      points: [
        "**לברר מה הלקוח של הלקוח באמת צריך:** Type I מספיק? אילו קטגוריות? מתי בדיוק?",
        "**Readiness assessment:** היקף (מערכות, אנשים, ספקים), קטגוריות, מיפוי בקרות קיימות, פערים.",
        "**תוכנית:** לסגור פערים קריטיים (הרשאות, onboarding/offboarding, ניהול שינויים, ניטור, ניהול ספקים, IR), לכתוב נהלים, ולהגדיר בעלים וראיות לכל בקרה.",
        "**לבחור פירמת CPA מוקדם** ולתאם תאריכים.",
        "**מסלול ריאלי:** Type I בתוך כ-3 חודשים, ואז תקופת תצפית ל-Type II. בינתיים אפשר לתת ללקוח הקצה bridge letter או מכתב התקדמות כדי לא לעצור את העסקה.",
        "**כלי אוטומציה** יכולים לקצר את איסוף הראיות, אבל לא מחליפים תהליכים."
      ],
      checking: "האם אתם מתחילים במוכנות ובשאלות עסקיות ולא קופצים לביצוע – ואם אתם יודעים לנהל ציפיות.",
      mistakes: [
        "להבטיח Type II של 12 חודשים תוך 6 חודשים.",
        "לדלג על readiness.",
        "לבחור את כל 5 הקטגוריות \"ליתר ביטחון\"."
      ]
    },
    {
      id: "iv-soc-exception", cat: "scenarios", module: "soc2", lang: "he",
      q: "באמצע תקופת התצפית מתגלה שסקירת ההרשאות הרבעונית לא בוצעה ברבעון האחרון. מה עושים?",
      points: [
        "**לא מזייפים ולא מתארכים בדיעבד** – זה קו אדום.",
        "**לבצע מיד** את הסקירה, לתעד את המועד האמיתי ולטפל בממצאים.",
        "**ניתוח שורש:** למה זה נשכח? אין בעלים? אין תזכורת?",
        "**תיקון תהליכי:** תזכורת אוטומטית, בעלים וגיבוי, ובקרה מפצה אם יש (למשל offboarding אוטומטי מה-IdP).",
        "**שקיפות מול המבקר:** סביר שיירשם חריג. ההנהלה תוכל להגיב בדוח ולתאר את הפעולה המתקנת.",
        "להסביר ללקוח שחריג בודד לא בהכרח פוגע בחוות דעת נקייה."
      ],
      checking: "יושרה מקצועית, ושילוב של פתרון מיידי עם תיקון תהליכי.",
      mistakes: [
        "לחפש דרך \"להסתיר\" את הפער.",
        "לתקן את המקרה בלי לתקן את התהליך.",
        "להבהיל את הלקוח שהדוח \"נכשל\"."
      ]
    },
    {
      id: "iv-soc-read-report", cat: "technical", module: "soc2", lang: "he",
      q: "לקוח מבקש שתעברו על דוח SOC 2 של ספק קריטי. על מה מסתכלים?",
      points: [
        "**סוג ותקופה:** Type I או II? מתי הסתיימה התקופה? אם עבר זמן – לבקש bridge letter.",
        "**היקף:** האם השירות שהלקוח קונה בכלל בהיקף? אילו קטגוריות נכללו?",
        "**חוות הדעת:** unqualified / qualified / adverse.",
        "**חריגים:** מה נמצא, באיזה תחום, ומה תגובת ההנהלה.",
        "**ספקי משנה:** carve-out או inclusive? אם carve-out – האם צריך דוחות של ספקי המשנה הקריטיים?",
        "**CUECs:** אילו בקרות הלקוח שלנו חייב להפעיל – ולוודא שהוא באמת מפעיל אותן.",
        "**תוצר:** סיכום סיכונים והמלצה (לאשר, לאשר בתנאים, לבקש מידע נוסף)."
      ],
      checking: "יכולת מעשית בניהול סיכוני ספקים – גשר לנושא third-party risk.",
      mistakes: [
        "להסתכל רק על חוות הדעת.",
        "לשכוח את ה-CUECs.",
        "לא לבדוק שהשירות הרלוונטי בהיקף."
      ]
    },
    {
      id: "iv-soc-en-vs-iso", cat: "english", module: "soc2", lang: "en", timer: 120,
      q: "A customer asks: \"What's the difference between ISO 27001 and SOC 2, and which one should we get?\"",
      points: [
        "**ISO 27001:** a certifiable international standard for an information security management system. An accredited certification body issues a 3-year certificate, with annual surveillance audits.",
        "**SOC 2:** an attestation report by an independent CPA firm against the AICPA Trust Services Criteria. A Type II report shows controls operated effectively over a period.",
        "**Which one:** \"It depends on who your customers are. US customers often ask for SOC 2; European and global customers often ask for ISO 27001.\"",
        "**Smart approach:** build one control set and map it to both, so the second framework costs much less.",
        "**Close:** \"Let's start by looking at what your top prospects actually require.\""
      ],
      checking: "Clear comparison in English, and a business-driven recommendation instead of a generic answer.",
      mistakes: [
        "Calling SOC 2 a \"certification\".",
        "Recommending one without asking about the customer base.",
        "Going too deep into criteria IDs."
      ]
    }

  ]
};
