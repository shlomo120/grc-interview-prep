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
    },

    /* ---------- NIST CSF 2.0 ---------- */
    {
      id: "iv-nist-use", cat: "technical", module: "nist-csf", lang: "he",
      q: "איך הייתם משתמשים ב-NIST CSF 2.0 מול לקוח?",
      points: [
        "**מסגרת וולונטרית ומבוססת תוצאות**, לא ניתנת להסמכה – כלי לשפה משותפת ולמדידת בשלות.",
        "**6 פונקציות:** Govern (חדשה ב-2.0, במרכז), Identify, Protect, Detect, Respond, Recover.",
        "**תהליך:** בונים Current Profile בראיונות ובסקירת ראיות, מגדירים Target Profile עם ההנהלה לפי תיאבון הסיכון, וגוזרים roadmap מהפער.",
        "**Tiers** (אופציונלי) – לתאר את רמת הקפדנות של ניהול הסיכונים.",
        "**שילוב עם ISO 27001:** ממפים בקרות קיימות – יש מיפוי ISO 27001:2022 ל-CSF 2.0 בקטלוג OLIR של NIST.",
        "**דוח להנהלה:** ציון לכל פונקציה, Current מול Target – תמונה שדירקטוריון מבין."
      ],
      checking: "שאתם יודעים להפוך מסגרת לכלי עבודה מעשי ולתקשורת מול הנהלה.",
      mistakes: [
        "\"NIST certification\".",
        "להכיר רק 5 פונקציות (גרסה 1.1).",
        "לדקלם את המבנה בלי להסביר איך משתמשים בו."
      ]
    },
    {
      id: "iv-nist-en-govern", cat: "english", module: "nist-csf", lang: "en", timer: 120,
      q: "What's new in NIST CSF 2.0, and why does it matter for a GRC consultant?",
      points: [
        "**Headline:** \"The biggest change is the new Govern function, which sits at the centre of the framework.\"",
        "**Govern covers:** organizational context, risk management strategy, roles and responsibilities, policy, oversight, and cybersecurity supply chain risk management.",
        "**Scope:** it now targets organizations of all sizes and sectors, not just critical infrastructure.",
        "**Resources:** Implementation Examples, Quick-Start Guides and Informative References, published online.",
        "**Why it matters:** governance is exactly where GRC work lives — risk appetite, policies, accountability and board oversight. It also gives us a clear language to report maturity to management."
      ],
      checking: "Being up to date, and connecting framework changes to the actual role — in English.",
      mistakes: [
        "Listing changes without explaining why they matter.",
        "Calling it a standard or a certification.",
        "Forgetting supply chain risk."
      ]
    },

    /* ---------- GDPR ---------- */
    {
      id: "iv-gdpr-breach", cat: "scenarios", module: "gdpr", lang: "he",
      q: "לקוח SaaS ישראלי עם משתמשים באירופה מגלה דליפה. מה קורה ב-72 השעות הראשונות?",
      points: [
        "**השעון מתחיל מרגע ה-awareness** – לא מסיום החקירה.",
        "**הכלה וחקירה ראשונית:** מה דלף, של מי, כמה, האם המידע היה מוצפן.",
        "**הערכת סיכון לנושאי המידע:** \"לא צפוי לגרום לסיכון\" ← תיעוד בלבד; \"סיכון\" ← דיווח לרשות הפיקוח המוסמכת תוך 72 שעות ככל האפשר (סעיף 33); \"סיכון גבוה\" ← גם הודעה לנושאי המידע (סעיף 34), אלא אם חל חריג.",
        "**תפקיד:** האם הלקוח controller או processor? Processor מדווח ל-controller בלי שיהוי מיותר.",
        "**הדין הישראלי במקביל:** אירוע חמור במאגר לפי התקנות ← דיווח **מיד** לרשות להגנת הפרטיות.",
        "**תיעוד** של הכול `(33(5))` – כולל ההחלטות והנימוקים. מעורבות יועץ משפטי ו-DPO.",
        "אפשר לדווח בשלבים, כשהמידע עוד לא מלא."
      ],
      checking: "שליטה במנגנון הדיווח, ההבחנה בין סיכון לסיכון גבוה, והחיבור לדין הישראלי.",
      mistakes: [
        "לחכות לסיום החקירה לפני דיווח.",
        "להגיד שכל אירוע מחייב הודעה לכל המשתמשים.",
        "לשכוח את הדיווח המקביל לפי התקנות הישראליות.",
        "לשכוח לתעד אירוע שהוחלט לא לדווח עליו."
      ]
    },
    {
      id: "iv-gdpr-gap", cat: "technical", module: "gdpr", lang: "he",
      q: "איך מבצעים gap assessment מול GDPR כיועצי GRC (ולא כעורכי דין)?",
      points: [
        "**גבולות התפקיד:** אנחנו מתרגמים דרישות לבקרות ותהליכים. שאלות משפטיות (בסיס חוקי, פרשנות) – בשיתוף היועץ המשפטי.",
        "**תחולה ותפקיד:** האם חל (סעיף 3)? controller או processor לגבי כל סוג מידע?",
        "**מיפוי מידע ו-RoPA:** אילו נתונים, מאיפה, למה, למי מועברים, כמה זמן נשמרים.",
        "**בקרות:** אבטחה (סעיף 32), privacy by design, מדיניות שמירה ומחיקה.",
        "**תהליכים:** זכויות נושאי מידע (חודש), דיווח על אירוע (72 שעות), DPIA לעיבוד בסיכון גבוה.",
        "**ספקים:** DPA (סעיף 28), רשימת sub-processors, מנגנוני העברה (כולל הלימות לישראל).",
        "**ממשל:** האם נדרש DPO? נציג באיחוד (סעיף 27)?",
        "**תוצר:** דוח פערים מתועדף ו-roadmap."
      ],
      checking: "שאתם מבינים את הגבול בין GRC לייעוץ משפטי, ויודעים להפוך רגולציה לתוכנית עבודה.",
      mistakes: [
        "לתת ייעוץ משפטי חד-משמעי על בסיס חוקי.",
        "להתמקד רק באבטחה ולשכוח זכויות, ספקים ו-RoPA.",
        "להתחיל בלי מיפוי מידע."
      ]
    },
    {
      id: "iv-gdpr-en-dpia", cat: "english", module: "gdpr", lang: "en", timer: 120,
      q: "When is a DPIA required under GDPR, and how is it different from a regular security risk assessment?",
      points: [
        "**When:** before processing that is likely to result in a high risk to individuals' rights and freedoms (Art. 35).",
        "**Explicit cases:** systematic, extensive profiling with significant effects; large-scale special-category or criminal data; large-scale systematic monitoring of public areas.",
        "**Minimum content:** description and purposes, necessity and proportionality, risks to individuals, and the measures to address them.",
        "**The difference:** a security risk assessment looks at risk to the organization; a DPIA looks at risk to the people whose data is processed.",
        "**Close:** \"If high risk remains after mitigation, the controller must consult the supervisory authority before processing (Art. 36).\""
      ],
      checking: "Precise knowledge of a key GDPR mechanism, and connecting it to risk methodology — in English.",
      mistakes: [
        "Saying a DPIA is needed for all processing.",
        "Confusing a DPIA with a pentest or a security audit.",
        "Forgetting that it must be done before the processing starts."
      ]
    },

    /* ---------- Israel ---------- */
    {
      id: "iv-il-high", cat: "scenarios", module: "il-privacy", lang: "he",
      q: "לקוח ישראלי מגלה שהמאגר שלו ברמת אבטחה גבוהה. מה הוא חייב לעשות, ובאיזו תדירות?",
      points: [
        "**לאמת את הסיווג:** מידע רגיש (או איסוף להעברה כעיסוק) **וגם** 100,000 איש או יותר **או** יותר מ-100 מורשי גישה.",
        "**תיעוד:** מסמך הגדרות מאגר (עדכון שנתי), נוהל אבטחה, מצאי מערכות ותרשים רשת.",
        "**סקר סיכונים ומבדקי חדירות** – לפחות אחת ל-18 חודשים, ותיקון הליקויים.",
        "**ביקורת תקופתית** – אחת ל-24 חודשים (ברמה גבוהה אפשר במסגרת הסקר).",
        "**בקרות:** אמצעי פיזי לזיהוי ולגישה מרחוק, תיעוד גישה עם שמירה ל-24 חודשים, ניהול הרשאות, הדרכה אחת לשנתיים, גיבוי.",
        "**אירועים:** תיעוד, דיון לפחות פעם ברבעון, ודיווח **מיד** על אירוע חמור.",
        "**ספקים:** סקר לפני התקשרות, הסכם ופיקוח.",
        "**תיקון 13:** לבדוק חובת הודעה על המאגר ומינוי ממונה, ולהכיר את חשיפת העיצומים."
      ],
      checking: "היכרות מדויקת עם התקנות – הלחם והחמאה של לקוחות ישראליים בחברת PT.",
      mistakes: [
        "לבלבל בין 18 ל-24 חודשים.",
        "להגיד \"100 מורשי גישה\" במקום \"יותר מ-100\".",
        "לשכוח את דיון האירועים הרבעוני ואת הדיווח המיידי."
      ]
    },
    {
      id: "iv-il-a13", cat: "technical", module: "il-privacy", lang: "he",
      q: "מה השתנה בתיקון 13 לחוק הגנת הפרטיות, ואיך זה משפיע על הלקוחות שלנו?",
      points: [
        "**מועדים:** התקבל ב-5.8.2024, בתוקף מ-14.8.2025.",
        "**הגדרות:** מידע אישי, מידע בעל רגישות מיוחדת (כולל מיקום ופעילות כלכלית), בעל שליטה ומחזיק – מקבילים ל-GDPR.",
        "**רישום:** נשאר רק לסוחרי מידע (מעל 10,000 איש) ולגופים ציבוריים. מאגר רגיש מעל 100,000 איש – הודעה תוך 30 ימים.",
        "**ממונה על הגנת הפרטיות:** חובה לגופים ציבוריים, לסוחרי מידע, ולגופים שעיקר פעילותם ניטור שיטתי או מידע רגיש בהיקף ניכר.",
        "**אכיפה:** עיצומים כספיים (חלקם לפי מספר האנשים במאגר), פיצויים לדוגמה עד 10,000 ₪ ועבירות פליליות.",
        "**השפעה:** ציות הופך לסיכון עסקי מדיד; כדאי לעדכן את הערכת הסיכונים, לבדוק את חובות ההודעה והממונה, ולוודא עמידה בתקנות – עכשיו יש להן \"שיניים\"."
      ],
      checking: "שאתם מעודכנים ברגולציה המקומית, ויודעים לתרגם אותה להשפעה על לקוחות.",
      mistakes: [
        "להגיד שהתיקון עדיין לא בתוקף.",
        "לבלבל בין רישום להודעה.",
        "להציג סכומי קנס בלי לדעת על מה הם חלים."
      ]
    },

    /* ---------- Documentation ---------- */
    {
      id: "iv-docs-hierarchy", cat: "technical", module: "docs", lang: "he",
      q: "מה ההבדל בין Policy, Standard, Procedure ו-Guideline?",
      points: [
        "**Policy** – מה ולמה; עקרונות; מאושרת ע\"י ההנהלה; מחייבת; משתנה לעיתים רחוקות.",
        "**Standard** – דרישות מדידות שמממשות את המדיניות; מחייב.",
        "**Procedure** – איך, צעד אחר צעד, עם תפקידים וזמנים; מחייב.",
        "**Guideline** – המלצות; לא מחייבת.",
        "**דוגמה אחת לאורך כל הרמות** – למשל גישה מרחוק: עיקרון → MFA חובה → שלבי ההגדרה ב-IdP → המלצה למנהל סיסמאות.",
        "**בקרת מסמכים:** בעלים, אישור, גרסה, סקירה שנתית, תהליך חריגות."
      ],
      checking: "יסודות, והאם אתם מבינים איך המסמכים מתחברים זה לזה ולביקורת.",
      mistakes: [
        "הגדרות בלי דוגמה.",
        "להגיד שהנחיה מחייבת.",
        "לשכוח את מחזור הסקירה ואת תהליך החריגות."
      ]
    },
    {
      id: "iv-docs-write", cat: "technical", module: "docs", lang: "he",
      q: "איך הייתם כותבים נוהל Vulnerability Management ללקוח?",
      points: [
        "**מתחילים בראיונות:** איך מזהים חולשות היום, מי מתקן, אילו כלים, מה הבעיות.",
        "**היקף ומלאי נכסים**, כולל ענן, קוד וספריות צד שלישי.",
        "**זיהוי:** סריקות בתדירות מוגדרת, PT, מודיעין, bug bounty.",
        "**תעדוף:** CVSS יחד עם ההקשר – חשיפה, קריטיות הנכס, ניצול פעיל (KEV / EPSS).",
        "**SLA לפי רמת סיכון**, נקבע עם הלקוח ולפי תיאבון הסיכון.",
        "**טיפול:** תיקון, בקרה מפצה או קבלת סיכון מתועדת עם תאריך תפוגה.",
        "**אימות:** retest; **מדדים:** חולשות פתוחות לפי גיל וחומרה, עמידה ב-SLA.",
        "**תפקידים (RACI)** וראיות לכל שלב – כך הנוהל עומד גם מול מבקר."
      ],
      checking: "יכולת מעשית לכתוב את המסמכים שבתיאור המשרה, בחיבור לעולם של חברת PT.",
      mistakes: [
        "להעתיק תבנית בלי להתאים למציאות.",
        "SLA לפי CVSS בלבד.",
        "לשכוח את מסלול החריגות ואת הבדיקה החוזרת."
      ]
    },
    {
      id: "iv-docs-compensating", cat: "scenarios", module: "docs", lang: "he",
      q: "הלקוח אומר: \"אין לנו MFA בשרת הזה, אבל יש לנו compensating control\". מה בודקים?",
      points: [
        "**מה בדיוק הבקרה?** לבקש תיאור וראיה, לא רק אמירה.",
        "**האם היא מכסה את אותו סיכון?** MFA מגן מפני גניבת סיסמה. בקרה מפצה טובה מצמצמת את אותו תרחיש – למשל גישה רק דרך jump host עם MFA והגבלת IP.",
        "**האם היא פועלת ונבדקת?** לוגים, ניטור, ראיה שהתרעות מטופלות.",
        "**האם היא מתועדת כחריגה** – עם הערכת סיכון, אישור בעל הסיכון ותאריך תפוגה?",
        "**האם יש תוכנית** לפתרון הקבע?",
        "**מסקנה מנומקת בדוח:** מקובל, מקובל בתנאים, או לא מכסה – ולמה."
      ],
      checking: "חשיבה ביקורתית מכבדת: לא דוחים אוטומטית, ולא מקבלים על סמך מילים.",
      mistakes: [
        "לקבל את הטענה בלי ראיה.",
        "לדחות כל בקרה מפצה אוטומטית.",
        "לא לבדוק אם הבקרה מכסה את אותו סיכון בדיוק."
      ]
    },
    {
      id: "iv-docs-en-rto", cat: "english", module: "docs", lang: "en", timer: 120,
      q: "Explain the difference between RTO and RPO, and how they shape a client's backup and DR strategy.",
      points: [
        "**RTO – Recovery Time Objective:** how quickly a system must be back up after a disruption.",
        "**RPO – Recovery Point Objective:** how much data loss, measured in time, is acceptable.",
        "**Who sets them:** the business, through a Business Impact Analysis — not IT.",
        "**How they drive design:** RPO drives backup frequency and replication; RTO drives the recovery architecture — warm standby, multi-region, runbooks.",
        "**Example:** a payments platform might need RTO of one hour and RPO of minutes; a marketing site can live with a day.",
        "**Close:** \"And we test restores regularly — an untested backup is just an assumption.\""
      ],
      checking: "Clear definitions and the ability to connect them to business decisions — in English.",
      mistakes: [
        "Swapping the definitions.",
        "Saying IT decides the targets.",
        "Forgetting restore testing."
      ]
    },

    /* ---------- Pentest → GRC ---------- */
    {
      id: "iv-pt-cvss", cat: "depth", module: "pentest-grc", lang: "he",
      q: "איך מתעדפים ממצאים – לפי CVSS או לפי סיכון עסקי?",
      points: [
        "**CVSS מודד חומרה, לא סיכון** – כך כותבים FIRST עצמם במדריך של v4.0. ציון ה-Base צריך להשלמה בהקשר (Threat, Environmental).",
        "**סבירות:** חשיפה לאינטרנט, ניצול בפועל (CISA KEV), הסתברות לניצול (EPSS), קלות הניצול.",
        "**השפעה:** קריטיות הנכס, סוג המידע (אישי, רגיש), תלות עסקית, רגולציה.",
        "**בקרות מפצות** שמקטינות סבירות או השפעה.",
        "**מודלים:** SSVC, ו-BOD 26-04 של CISA (יוני 2026) שקובעת זמני תיקון לפי חשיפה, KEV, אוטומציה של הניצול והשפעה.",
        "**דוגמה:** CVSS 7.5 ב-KEV על VPN חשוף קודם ל-CVSS 9.1 בשרת פנימי בלי ניצול ידוע."
      ],
      checking: "השאלה הכי \"חברת PT\" שיש – האם אתם מגשרים בין הטכני לעסקי.",
      mistakes: [
        "\"מתקנים לפי CVSS מהגבוה לנמוך\".",
        "לצטט את לוחות הזמנים של `BOD 22-01` כאילו הם עדיין בתוקף.",
        "לשכוח את ההקשר העסקי ואת בקרות הפיצוי."
      ]
    },
    {
      id: "iv-pt-owasp", cat: "depth", module: "pentest-grc", lang: "he",
      q: "ספרו על OWASP Top 10, ותנו דוגמה לאיך ממצא מהרשימה הופך לסיכון עסקי.",
      points: [
        "**המהדורה הנוכחית היא 2025:** A01 Broken Access Control (כולל SSRF), A02 Security Misconfiguration, A03 Software Supply Chain Failures, A04 Cryptographic Failures, A05 Injection, A06 Insecure Design, A07 Authentication Failures, A08 Software or Data Integrity Failures, A09 Logging and Alerting Failures, A10 Mishandling of Exceptional Conditions.",
        "**מגמות:** Access Control ראשון, תצורות שגויות עלו, שרשרת אספקה קיבלה קטגוריה משלה.",
        "**דוגמה – IDOR (A01):** \"כל משתמש רשום יכול לצפות בחשבוניות של כל הלקוחות\" → דליפת מידע אישי → חובות דיווח (GDPR, הדין הישראלי) → פגיעה באמון.",
        "**המלצה בשלוש שכבות:** תיקון בדיקת ההרשאה; מנגנון הרשאות מרכזי; בדיקות הרשאה אוטומטיות ב-CI ו-secure coding standard `(A.8.28)`.",
        "**מיפוי:** ISO `A.8.3` / `A.8.28`, SOC 2 `CC6`, NIST `PR.AA`."
      ],
      checking: "עדכניות מקצועית ויכולת תרגום – בדיוק ה-bridge שבתיאור המשרה.",
      mistakes: [
        "לצטט את רשימת 2021 כעדכנית.",
        "לעצור בתיאור הטכני בלי השפעה עסקית.",
        "המלצה של \"לתקן את הבאג\" בלבד."
      ]
    },
    {
      id: "iv-pt-pushback", cat: "behavioral", module: "pentest-grc", lang: "he",
      q: "ספרו על פעם שלקוח או צוות פיתוח דחו ממצא שלכם (\"זה לא באמת בעיה\"). איך התמודדתם?",
      points: [
        "**S/T:** ממצא שהצוות טען שהוא \"תיאורטי\", או שהחומרה מוגזמת.",
        "**A:** הקשבתם – אולי יש הקשר שלא ידעתם (בקרה מפצה, חשיפה מוגבלת). הצגתם ראיות (PoC, תרחיש ניצול), ותרגמתם להשפעה עסקית. הייתם מוכנים לשנות את הדירוג אם הוצגו עובדות – אבל לא בגלל לחץ.",
        "**הסלמה מסודרת:** אם יש מחלוקת – מתעדים את העמדות, ומעבירים להחלטת בעל הסיכון (Accept מתועד).",
        "**R:** תוצאה – תיקון, או קבלת סיכון מתועדת – ויחסים טובים שנשמרו.",
        "**לקח:** המטרה היא החלטה מושכלת, לא לנצח בוויכוח."
      ],
      checking: "יושרה מקצועית יחד עם גמישות ותקשורת – \"pushback on a finding\" מופיע במפורש בבריף.",
      mistakes: [
        "להתקפל מיד ולמחוק את הממצא.",
        "להתעקש בלי להקשיב לטיעונים.",
        "לא לתעד את ההחלטה הסופית."
      ]
    },
    {
      id: "iv-pt-en-exec", cat: "english", module: "pentest-grc", lang: "en", timer: 120,
      q: "Explain a critical pentest finding to a non-technical executive.",
      points: [
        "**Start with the impact:** \"Any registered user can see every other customer's invoices and personal data.\"",
        "**Why it matters:** regulatory exposure (GDPR, Israeli privacy law), contractual obligations to customers, and reputational damage.",
        "**How likely:** \"It requires only a normal account and no special skills.\"",
        "**What we recommend:** an immediate fix, a change to how access checks are built, and automated tests so it doesn't come back.",
        "**What we need from you:** priority over the next release and an owner on the engineering side.",
        "Avoid jargon — no CVSS, no IDOR — unless they ask."
      ],
      checking: "Executive communication in English: impact first, clear ask, no jargon.",
      mistakes: [
        "Opening with the technical details.",
        "Not stating what decision or resource you need.",
        "Exaggerating or using fear instead of facts."
      ]
    },

    /* ---------- Vendor risk ---------- */
    {
      id: "iv-ven-program", cat: "technical", module: "vendor", lang: "he",
      q: "איך הייתם בונים תוכנית ניהול סיכוני ספקים ללקוח?",
      points: [
        "**מלאי ספקים** – מהנהלת החשבונות, מה-SSO ומראיונות; מה כל ספק עושה ולמה הוא ניגש.",
        "**דירוג קריטיות** – מידע, גישה למערכות, תלות עסקית, רגולציה. העומק נגזר מהדירוג.",
        "**בדיקת נאותות** – SOC 2 / ISO (לבדוק היקף ותוקף), שאלון (SIG / CAIQ), PT, מדיניות.",
        "**חוזה** – דרישות אבטחה, DPA, דיווח על אירוע בזמן מוגדר, זכות ביקורת, ספקי משנה, מחיקה בסיום.",
        "**ניטור** – הערכה מחדש שנתית לקריטיים, דוחות מתעדכנים, מעקב אירועים, fourth parties.",
        "**סיום** – ביטול גישות ומחיקת מידע עם אישור.",
        "**מסגרות:** ISO `A.5.19`–`A.5.23`, SOC 2 `CC9`, NIST `GV.SC`, GDPR סעיף 28, תקנה 15."
      ],
      checking: "יכולת לבנות תהליך שלם ומדורג לפי סיכון – לא רק \"לשלוח שאלון\".",
      mistakes: [
        "לשלוח את אותו שאלון ארוך לכל הספקים.",
        "לקבל תעודה בלי לבדוק את ההיקף.",
        "לשכוח את החוזה ואת סיום ההתקשרות."
      ]
    },
    {
      id: "iv-ven-questionnaire", cat: "scenarios", module: "vendor", lang: "he",
      q: "לקוח SaaS מקבל עשרות שאלוני אבטחה בחודש, וזה מעכב מכירות. מה הייתם מציעים?",
      points: [
        "**ספריית תשובות** מאושרת, עם בעלים ותחזוקה.",
        "**ראיות במקום טקסט:** דוח SOC 2 / תעודת ISO תחת NDA, מדיניות.",
        "**Trust Center** עם מסמכים ציבוריים ותחת NDA.",
        "**שאלונים סטנדרטיים מוכנים מראש:** SIG Lite, CAIQ (ופרסום ב-CSA STAR).",
        "**כנות:** \"לא\" עם תוכנית עדיף על \"כן\" שגוי – תשובות הופכות להתחייבויות.",
        "**לולאת משוב:** שאלות חוזרות חושפות פערים אמיתיים → roadmap.",
        "**כלים:** פלטפורמות אוטומציה יכולות לעזור, אבל צריך מישהו שמאשר תוכן."
      ],
      checking: "הבנה של הצד העסקי של GRC, ויכולת להפוך עבודה ידנית לתהליך.",
      mistakes: [
        "להציע לענות \"כן\" על הכול.",
        "לא להשתמש בראיות קיימות (SOC 2 / ISO).",
        "לא לחבר את השאלות החוזרות לפערים אמיתיים."
      ]
    },
    {
      id: "iv-ven-en-soc", cat: "english", module: "vendor", lang: "en", timer: 120,
      q: "A critical vendor sends you their SOC 2 Type II report. What do you look for?",
      points: [
        "**Period and freshness:** when did the period end? If there's a gap, ask for a bridge letter.",
        "**Scope:** is the service we actually buy in scope? Which Trust Services Categories are covered?",
        "**Opinion:** unqualified, qualified, adverse or disclaimer.",
        "**Exceptions:** what failed, in which area, and management's response.",
        "**Subservice organizations:** carve-out or inclusive? Do we need reports from their key subservice providers?",
        "**CUECs:** which controls we must operate on our side — and confirm we actually do.",
        "**Close:** \"Then I summarise the residual risk and recommend approve, approve with conditions, or request more information.\""
      ],
      checking: "Practical vendor-review skill, explained clearly in English.",
      mistakes: [
        "Reading only the opinion page.",
        "Ignoring CUECs.",
        "Not checking that the purchased service is in scope."
      ]
    },

    /* ---------- Real-world cases ---------- */
    {
      id: "iv-case-lesson", cat: "technical", module: "cases", lang: "he",
      q: "בחרו אירוע סייבר מוכר. מה נכשל, ומה הייתם עושים אצל לקוח כדי שזה לא יקרה?",
      points: [
        "**בוחרים מקרה שמכירים היטב**, למשל Colonial Pipeline.",
        "**מה קרה (משפט):** כניסה דרך פרופיל VPN ישן עם אימות חד-שלבי; כופרה; השבתת הצינור כחמישה ימים.",
        "**בקרות שנכשלו:** MFA בגישה מרחוק; ביטול חשבונות לא פעילים; תוכנית תגובה לכופרה.",
        "**מיפוי:** ISO `A.8.5`, `A.5.18`, `A.5.29`; NIST `PR.AA`; בישראל – אמצעי פיזי לגישה מרחוק ברמה בינונית וגבוהה.",
        "**אצל לקוח:** מלאי של כל נקודות הגישה מרחוק, בקרה שמוודאת MFA בכולן, סקירת הרשאות שמוצאת חשבונות רדומים, ותרגיל tabletop לכופרה.",
        "**זהירות במספרים** – לצטט רק מה שבטוחים בו."
      ],
      checking: "האם אתם מחברים אירוע לבקרה, לתקן ולפעולה מעשית – ולא רק מספרים סיפור.",
      mistakes: [
        "לספר את האירוע בלי לקח.",
        "להמציא פרטים או מספרים.",
        "לבחור מקרה שאתם לא מכירים לעומק."
      ]
    },
    {
      id: "iv-case-compliance", cat: "scenarios", module: "cases", lang: "he",
      q: "מנכ\"ל של לקוח אומר: \"יש לנו ISO 27001 ו-SOC 2, אז אנחנו מוגנים\". איך עונים?",
      points: [
        "**מכבדים את ההישג** – זה בסיס חשוב ותהליך ניהול אמיתי.",
        "**אבל עמידה ≠ אבטחה:** Target קיבלה אישור PCI DSS חודשיים לפני הפריצה.",
        "**הסמכה בודקת מערכת ומדגם בנקודת זמן או בתקופה** – היא לא מבטיחה שכל בקרה פועלת בכל רגע.",
        "**מה משלים:** PT ובדיקות טכניות, ניטור רציף, תרגילים, ומדדים שבודקים אפקטיביות.",
        "**הצעה מעשית:** לבחון את 3–4 התרחישים שהפילו ארגונים דומים (גישה מרחוק, ספקים, ענן) ולוודא שהבקרות עובדות בפועל."
      ],
      checking: "בגרות מקצועית ויכולת לאתגר הנהלה בנימוס – בלי לזלזל בעבודה שנעשתה.",
      mistakes: [
        "להגיד שהסמכות חסרות ערך.",
        "להסכים שהן מספיקות לבד.",
        "לא להציע צעד מעשי."
      ]
    },
    {
      id: "iv-case-en", cat: "english", module: "cases", lang: "en", timer: 120,
      q: "What can organizations learn from the Equifax 2017 breach?",
      points: [
        "**What happened:** attackers exploited a known Apache Struts vulnerability (CVE-2017-5638) that had not been patched; the intrusion lasted about 76 days.",
        "**It was a chain of failures:** the patch alert didn't reach the right people, the scan didn't detect the vulnerability, an expired certificate blinded a monitoring tool, and segmentation was weak.",
        "**Impact:** around 147 million people according to the FTC, and a settlement of at least $575 million — potentially up to $700 million.",
        "**Lessons:** asset inventory with clear owners, patch SLAs verified by re-scanning, certificate management, monitoring that actually works, and segmentation.",
        "**Close:** \"The House report called it entirely preventable — basic controls, consistently operated, would have made the difference.\""
      ],
      checking: "Structured storytelling in English that connects a real incident to concrete controls.",
      mistakes: [
        "Stating numbers you're not sure of with false precision.",
        "Reducing it to 'they didn't patch' without the other failures.",
        "No concrete recommendations."
      ]
    },

    /* ---------- General / HR ---------- */
    {
      id: "iv-gen-intro", cat: "general", module: null, lang: "he",
      q: "ספרו על עצמכם.",
      points: [
        "**דקה וחצי עד שתיים**, במבנה הווה ← עבר ← עתיד.",
        "**הווה:** מה אתם עושים היום ומה החוזקה המרכזית שלכם (למשל חיבור בין טכנולוגיה לניהול סיכונים).",
        "**עבר:** 2–3 נקודות רלוונטיות בלבד – פרויקט, הסמכה, תחום – שמובילות לתפקיד הזה.",
        "**עתיד:** למה התפקיד הזה הוא הצעד הבא הטבעי.",
        "**להתאים לתיאור המשרה:** סיכונים, נהלים, תקנים, עבודה מול לקוחות ותקשורת באנגלית."
      ],
      checking: "תקשורת, מיקוד, והאם הסיפור שלכם מתחבר לתפקיד.",
      mistakes: [
        "לספר את קורות החיים בסדר כרונולוגי מלא.",
        "לדבר חמש דקות.",
        "לא לחבר לתפקיד."
      ]
    },
    {
      id: "iv-gen-why-grc", cat: "general", module: null, lang: "he",
      q: "למה GRC?",
      points: [
        "**מה מושך אתכם:** החיבור בין טכנולוגיה, עסק ואנשים; היכולת להשפיע על החלטות ועל סדרי עדיפויות.",
        "**דוגמה אישית קצרה:** רגע שבו הבנתם שבעיה טכנית היא בעצם בעיית תהליך או ניהול סיכון.",
        "**הערך:** GRC טוב הופך אבטחה לשפה שההנהלה מבינה ומממנת.",
        "**לא \"כי זה פחות טכני\"** – בחברת PT רוצים יועץ שמבין את הטכנולוגיה."
      ],
      checking: "מוטיבציה אמיתית והבנה של מה התפקיד באמת.",
      mistakes: [
        "\"כי אני לא אוהב לכתוב קוד\".",
        "תשובה כללית בלי דוגמה.",
        "לתאר GRC כ\"מילוי טפסים\"."
      ]
    },
    {
      id: "iv-gen-why-us", cat: "general", module: null, lang: "he",
      q: "למה דווקא החברה שלנו?",
      points: [
        "**לעשות שיעורי בית לפני הראיון:** אתר החברה, שירותים, לקוחות או מגזרים שהם מציינים, פוסטים ותוכן מקצועי שפרסמו. לא להמציא.",
        "**החיבור המרכזי:** חברת בדיקות חדירות שמציעה גם GRC – הזדמנות לעבוד על הגשר בין ממצאים טכניים לסיכון עסקי, וללמוד מבודקים.",
        "**מגוון לקוחות ותקנים:** ISO 27001, SOC 2, GDPR, NIST והדין הישראלי – למידה מהירה.",
        "**לסיים במה שאתם מביאים להם**, לא רק במה שאתם מקבלים."
      ],
      checking: "האם התכוננתם והאם אתם מבינים את המודל העסקי של חברת ייעוץ ו-PT.",
      mistakes: [
        "תשובה שמתאימה לכל חברה.",
        "פרטים שגויים על החברה.",
        "לדבר רק על משכורת ונוחות."
      ]
    },
    {
      id: "iv-gen-salary", cat: "general", module: null, lang: "he",
      q: "מה ציפיות השכר שלכם?",
      points: [
        "**להתכונן מראש:** לבדוק טווחים מעודכנים לתפקיד ולוותק בישראל ממקורות אמינים – סקרי שכר, חברות השמה, עמיתים.",
        "**לתת טווח ריאלי** שהתחתית שלו מקובלת עליכם, ולא מספר בודד.",
        "**לשאול על החבילה כולה:** בונוסים, הסמכות ממומנות (למשל CISSP / ISO LA), היברידיות, רכב, קרן השתלמות.",
        "**אפשר לדחות בנימוס בשלב מוקדם:** \"אשמח להבין קודם את היקף התפקיד; באופן כללי אני מכוון לטווח של...\"."
      ],
      checking: "בגרות, היכרות עם השוק ויכולת משא ומתן.",
      mistakes: [
        "\"מה שתציעו\".",
        "מספר שלא בדקתם מול השוק.",
        "להתעלם מהטבות כמו מימון הסמכות."
      ]
    },
    {
      id: "iv-gen-strengths", cat: "general", module: null, lang: "he",
      q: "מה החוזקות והחולשות שלכם?",
      points: [
        "**חוזקה – רלוונטית ומוכחת:** למשל \"מתרגם נושאים טכניים לשפה עסקית\", ודוגמה קצרה.",
        "**חולשה – אמיתית אבל לא קריטית לתפקיד**, ומה אתם עושים כדי להשתפר. למשל: \"נוטה להעמיק יותר מדי בפרטים – אני עובד עם timebox ומתחיל בתקציר\".",
        "**חוסר ניסיון כחולשה:** אם חסר ניסיון מול גוף הסמכה, אפשר להגיד את זה בכנות, ולהראות איך התכוננתם (קורס LA, לימוד התקן, המבנה של Stage 1 ו-Stage 2)."
      ],
      checking: "מודעות עצמית וכנות.",
      mistakes: [
        "\"פרפקציוניסט\" בלי דוגמה.",
        "חולשה שהיא דרישת ליבה בתפקיד (למשל \"קשה לי להסביר דברים\").",
        "לא להראות שיפור."
      ]
    },

    /* ---------- Behavioral (STAR) ---------- */
    {
      id: "iv-beh-stakeholder", cat: "behavioral", module: null, lang: "he",
      q: "ספרו על עבודה עם בעל עניין קשה.",
      points: [
        "**S:** בעל עניין (למשל מנהל פיתוח) שראה באבטחה מעכבת ולא שיתף פעולה.",
        "**T:** להשיג ממנו מידע או שינוי בלוח זמנים מוגבל.",
        "**A:** פגישה אישית כדי להבין את הלחצים והיעדים שלו; התאמת הדרישה לשפה שלו (סיכון לשחרור, ללקוחות); הצעת פתרון שמקטין עבודה, כמו שימוש בכלים קיימים; ותיעוד הסיכום.",
        "**R:** שיתוף פעולה, עמידה ביעד, ולעיתים קשר מקצועי טוב לפרויקטים הבאים.",
        "**לקח:** רוב ה\"קושי\" הוא אינטרסים שלא הובנו."
      ],
      checking: "אינטליגנציה רגשית ויכולת להשפיע בלי סמכות – קריטי ליועץ.",
      mistakes: [
        "להאשים את האדם.",
        "סיפור בלי תוצאה.",
        "פתרון שהוא \"הסלמתי למנהל שלו\" כצעד ראשון."
      ]
    },
    {
      id: "iv-beh-multi", cat: "behavioral", module: null, lang: "he",
      q: "איך אתם מנהלים כמה לקוחות או פרויקטים במקביל?",
      points: [
        "**S/T:** תקופה עם כמה לקוחות ודדליינים חופפים (למשל שני מבדקים באותו חודש).",
        "**A:** רשימת משימות ולוח זמנים אחד לכל הלקוחות; תעדוף לפי דדליינים חיצוניים (מבדקים) וסיכון; תקשורת יזומה על לוחות זמנים; תבניות וכלים חוזרים שחוסכים זמן; והסלמה מוקדמת כשיש התנגשות.",
        "**R:** עמידה בדדליינים, ולקוחות שידעו כל הזמן איפה הם עומדים.",
        "**עקרון:** ללקוח לא אכפת שיש לכם עוד לקוחות – אכפת לו שהוא יודע מה קורה."
      ],
      checking: "ארגון אישי וניהול ציפיות – אחד מתנאי התפקיד.",
      mistakes: [
        "\"אני פשוט עובד יותר שעות\".",
        "בלי מנגנון תעדוף.",
        "לא לדבר על תקשורת עם הלקוחות."
      ]
    },

    /* ---------- Technical depth ---------- */
    {
      id: "iv-depth-vm", cat: "depth", module: "docs", lang: "he",
      q: "תארו את מחזור החיים של ניהול חולשות.",
      points: [
        "**מלאי נכסים** – הבסיס: אי אפשר להגן על מה שלא יודעים שקיים.",
        "**זיהוי** – סריקות תשתית ואפליקציה, PT, מודיעין, bug bounty.",
        "**ניתוח ותעדוף** – CVSS יחד עם ההקשר: חשיפה, קריטיות הנכס, KEV, EPSS.",
        "**טיפול** – תיקון, בקרה מפצה או קבלת סיכון מתועדת, לפי SLA.",
        "**אימות** – retest או סריקה חוזרת.",
        "**דיווח ושיפור** – מדדים (זמן תיקון, חולשות פתוחות לפי גיל), ומגמות שמובילות לתיקוני שורש.",
        "**מסגרות:** ISO `A.8.8`, NIST `ID.RA`, ובישראל PT ברמה גבוהה לפחות אחת ל-18 חודשים."
      ],
      checking: "שליטה בתהליך הליבה של חברת PT, מנקודת המבט של GRC.",
      mistakes: [
        "לשכוח את מלאי הנכסים ואת האימות.",
        "תעדוף לפי CVSS בלבד.",
        "לבלבל בין patching לניהול חולשות."
      ]
    },
    {
      id: "iv-depth-cloud", cat: "depth", module: "pentest-grc", lang: "he",
      q: "הסבירו את מודל האחריות המשותפת בענן, עם דוגמה.",
      points: [
        "**הספק** (למשל AWS) אחראי להגנה על התשתית שמריצה את השירותים – מרכזי נתונים, חומרה, רשת פיזית.",
        "**הלקוח** אחראי לתצורה: זהויות והרשאות (IAM), security groups, הצפנה, הגדרות אחסון, ומערכת ההפעלה במכונות שלו.",
        "**החלוקה משתנה לפי סוג השירות:** ב-IaaS נשאר הכי הרבה אצל הלקוח, ב-SaaS הכי מעט – אבל זהויות ומידע תמיד אצל הלקוח.",
        "**דוגמה:** ב-Capital One הבעיה הייתה תצורה בצד הלקוח, וה-OCC הצביע על היעדר הערכת סיכונים לפני המעבר לענן.",
        "**בקרות:** CSPM, `A.5.23` ו-`A.8.9` ב-ISO, ו-IAM עם הרשאה מינימלית."
      ],
      checking: "הבנת ענן ברמה שמאפשרת לייעץ ללקוחות SaaS – דרישה מפורשת בתיאור המשרה.",
      mistakes: [
        "\"הענן מאובטח, אז אנחנו מאובטחים\".",
        "לשכוח שזהויות ומידע תמיד באחריות הלקוח.",
        "בלי דוגמה מעשית."
      ]
    },

    /* ---------- Questions to ask ---------- */
    {
      id: "iv-ask-success", cat: "ask", module: null, lang: "he",
      q: "\"איך נראית הצלחה בתפקיד הזה אחרי 6 ו-12 חודשים?\"",
      points: [
        "**למה לשאול:** מראה שאתם חושבים על תוצאות, ועוזר לכם להבין את הציפיות האמיתיות.",
        "**מה להקשיב לו:** האם הציפיות ריאליות, האם יש תקופת חפיפה, והאם ההצלחה נמדדת בלקוחות מרוצים או רק בשעות.",
        "**המשך טבעי:** \"מה האתגר הכי גדול שמי שנכנס לתפקיד יפגוש?\""
      ],
      checking: "חשיבה ממוקדת תוצאות ורצינות.",
      mistakes: [
        "לא לשאול שום דבר.",
        "לשאול רק על הטבות.",
        "שאלה שהתשובה עליה מופיעה באתר החברה."
      ]
    },
    {
      id: "iv-ask-pt-grc", cat: "ask", module: null, lang: "he",
      q: "\"איך צוות ה-GRC עובד עם צוות בדיקות החדירות?\"",
      points: [
        "**למה לשאול:** זה בדיוק הערך הייחודי של חברת PT, ומראה שהבנתם את המודל.",
        "**מה להקשיב לו:** פרויקטים משותפים? כתיבת המלצות יחד? גישה לממצאים כדי לבנות הערכות סיכונים?",
        "**המשך:** \"האם יש הזדמנות להצטרף לפגישות סיכום עם לקוחות אחרי בדיקות?\""
      ],
      checking: "האם אתם רואים את התמונה הרחבה.",
      mistakes: ["לשאול בצורה שמשדרת חוסר עניין בצד הטכני."]
    },
    {
      id: "iv-ask-clients", cat: "ask", module: null, lang: "he",
      q: "\"מה הפרופיל הטיפוסי של הלקוחות, ובאילו מסגרות הם עובדים בעיקר?\"",
      points: [
        "**למה לשאול:** עוזר להבין על מה תעבדו – סטארט-אפים ב-SOC 2? אנטרפרייז ב-ISO? גופים מפוקחים?",
        "**מה להקשיב לו:** מגוון, גודל לקוחות, כמה לקוחות במקביל ליועץ.",
        "**המשך:** \"כמה לקוחות מנהל יועץ בממוצע?\""
      ],
      checking: "התעניינות אמיתית בעבודה היומיומית.",
      mistakes: ["לשאול אחרי שזה כבר נאמר בראיון."]
    },
    {
      id: "iv-ask-growth", cat: "ask", module: null, lang: "he",
      q: "\"איך החברה תומכת בפיתוח מקצועי והסמכות?\"",
      points: [
        "**למה לשאול:** התפקיד מציין יתרון ל-CISSP, CISM, CISA, ISO 27001 LI/LA ו-CCSP – זו שאלה טבעית.",
        "**מה להקשיב לו:** מימון, ימי לימוד, ליווי מיועצים בכירים, מסלול קידום.",
        "**ניסוח טוב:** להראות שאתם רוצים להתפתח בתפקיד, לא רק לצבור תעודות."
      ],
      checking: "שאיפה להתפתח ולהישאר לאורך זמן.",
      mistakes: ["להישמע כאילו ההסמכה היא המטרה היחידה."]
    },
    {
      id: "iv-ask-en", cat: "english", module: null, lang: "en", timer: 120,
      q: "Tell me about yourself — in English.",
      points: [
        "**Present:** \"I'm currently [role], where I focus on [risk / compliance / security work].\"",
        "**Past:** two or three relevant highlights — a project, a framework you worked with, a certification.",
        "**Future:** \"I'm looking to grow as a GRC consultant, working with multiple clients and bridging technical findings and business risk — which is exactly what this role offers.\"",
        "Keep it to about 90 seconds. Practise until it sounds natural, not memorised.",
        "End with energy, and let them pick what to ask next."
      ],
      checking: "Fluency and confidence in English — explicitly a MUST in the job description.",
      mistakes: [
        "Reading a memorised script word for word.",
        "Speaking for more than two minutes.",
        "Apologising for your English — just speak clearly and simply."
      ]
    }

  ]
};
