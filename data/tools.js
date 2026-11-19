/* =========================================================
   TOOLS & ECOSYSTEM
   ---------------------------------------------------------
   categories: [{ id, title, intro, tools: [{ name, vendor, purpose, angle }] }]
   - purpose: what it is for
   - angle:   how it might come up in the interview
   Keep claims generic (category, main use). No pricing / market-share
   claims. Unverified details: add  // VERIFY
   ========================================================= */

window.GRC_TOOLS = [
  {
    id: "grc",
    title: "אוטומציית GRC ו-Compliance",
    intro: "פלטפורמות שמנהלות בקרות, ראיות, מדיניות וסיכונים מול כמה תקנים במקביל. בחברות SaaS הן כמעט סטנדרט בהכנה ל-SOC 2 ו-ISO 27001.",
    tools: [
      { name: "Vanta", vendor: "", purpose: "אוטומציית compliance לחברות SaaS: חיבור ל-API של ענן, IdP, MDM ו-HR לאיסוף ראיות רציף, תבניות מדיניות, מעקב בקרות מול SOC 2, ISO 27001 ועוד.", angle: "**בראיון:** \"הכלי לא מחליף יועץ\" – הוא אוסף ראיות, אבל מישהו צריך להגדיר היקף, לכתוב נהלים שמתאימים לחברה באמת, ולפרש פערים." },
      { name: "Drata", vendor: "", purpose: "פלטפורמה מתחרה באותה קטגוריה: ניטור בקרות רציף, איסוף ראיות אוטומטי וממשק למבקר.", angle: "**בראיון:** לדעת להסביר את ההבדל בין \"ירוק בדשבורד\" לבין בקרה שעובדת באמת – מבקר יבדוק גם דגימות." },
      { name: "Secureframe", vendor: "", purpose: "עוד פלטפורמת compliance automation לחברות צומחות, עם תבניות ואינטגרציות ענן.", angle: "**בראיון:** מספיק להכיר את הקטגוריה ולדעת מה היא חוסכת: צילומי מסך ידניים ומעקב ראיות באקסל." },
      { name: "OneTrust", vendor: "", purpose: "פלטפורמה רחבה שהתחילה בניהול פרטיות (מיפוי מידע, DPIA, ניהול הסכמות, בקשות נושאי מידע) והתרחבה ל-GRC וסיכוני ספקים.", angle: "**בראיון:** רלוונטי כשמדברים על GDPR – למשל ניהול `RoPA` ו-DPIA בכלי ייעודי." },
      { name: "ServiceNow GRC / IRM", vendor: "ServiceNow", purpose: "מודול ניהול סיכונים ו-compliance בתוך פלטפורמת ServiceNow – נפוץ בארגונים גדולים שכבר מנהלים בה IT ו-ITSM.", angle: "**בראיון:** בארגון אנטרפרייז תפגשו workflow של סיכונים, חריגות ובקרות שמחובר לניהול שינויים ואירועים." },
      { name: "Archer", vendor: "בעבר RSA Archer", purpose: "פלטפורמת Integrated Risk Management ותיקה לארגונים גדולים ומפוקחים (בנקים, ביטוח).", angle: "**בראיון:** מראה היכרות עם העולם הארגוני – לא רק סטארט-אפים." }
    ]
  },
  {
    id: "vm",
    title: "ניהול חולשות",
    intro: "סורקים ופלטפורמות שמזהים חולשות ידועות בתשתיות, ענן ואפליקציות, ומתעדפים אותן. זה מקור הראיות העיקרי לנוהל `Vulnerability Management`.",
    tools: [
      { name: "Tenable", vendor: "Nessus, Tenable.io / Vulnerability Management", purpose: "סריקת חולשות בתשתיות ושרתים; Nessus הוא אחד הסורקים המוכרים בתעשייה.", angle: "**בראיון:** ההבדל בין סריקה (אוטומטית, רחבה, חולשות ידועות) לבין PT (ידני, עמוק, משרשר חולשות ומוכיח ניצול)." },
      { name: "Qualys", vendor: "VMDR", purpose: "פלטפורמת ענן לניהול חולשות, מלאי נכסים ותעדוף תיקונים.", angle: "**בראיון:** נוהל VM טוב מגדיר תדירות סריקה, SLA לתיקון לפי חומרה, וטיפול בחריגות – הכלי הוא רק מקור הנתונים." },
      { name: "Rapid7", vendor: "InsightVM, Metasploit", purpose: "ניהול חולשות (InsightVM); Rapid7 גם עומדת מאחורי Metasploit – framework לניצול חולשות שבודקי חדירות מכירים.", angle: "**בראיון:** תעדוף לפי סיכון – לא רק לפי CVSS – כולל האם יש exploit ידוע והאם הנכס חשוף לאינטרנט." }
    ]
  },
  {
    id: "pt",
    title: "כלי בדיקות חדירות (ברמה מושגית)",
    intro: "יועץ GRC בחברת PT לא צריך להפעיל אותם, אבל כן להבין מה הבודקים עושים ואיך נראה ממצא – כדי לתרגם אותו לסיכון.",
    tools: [
      { name: "Burp Suite", vendor: "PortSwigger", purpose: "פרוקסי לבדיקת אבטחה של אפליקציות web ו-API: יירוט ושינוי בקשות, סריקה, ובדיקה ידנית של חולשות כמו Access Control ו-Injection.", angle: "**בראיון:** אם תשאלו \"איך נמצא IDOR?\" – הבודק יירט בקשה ב-Burp, שינה מזהה, וקיבל נתונים של משתמש אחר. אתם מתרגמים את זה לסיכון של דליפת מידע אישי." },
      { name: "Nmap", vendor: "קוד פתוח", purpose: "מיפוי רשת: אילו מכונות פעילות, אילו פורטים ושירותים חשופים.", angle: "**בראיון:** שלב ה-reconnaissance; ממצא כמו \"RDP חשוף לאינטרנט\" מתחבר ישר לנוהל ניהול גישה מרחוק." },
      { name: "Metasploit", vendor: "Rapid7", purpose: "Framework לניצול חולשות ידועות והוכחת השפעה.", angle: "**בראיון:** ההבדל בין \"יש חולשה\" ל\"הוכחנו ניצול\" – הוכחה מעלה את הסבירות בהערכת הסיכון." }
    ]
  },
  {
    id: "cspm",
    title: "אבטחת ענן ו-CSPM",
    intro: "`CSPM` (Cloud Security Posture Management) סורק את תצורת חשבונות הענן מול best practices ותקנים, ומתריע על הגדרות שגויות: bucket ציבורי, הרשאות IAM רחבות, היעדר הצפנה או לוגים.",
    tools: [
      { name: "CSPM / CNAPP", vendor: "למשל Wiz, Prisma Cloud, Microsoft Defender for Cloud", purpose: "זיהוי misconfigurations ונתיבי תקיפה בענן, בדיקת תאימות מול CIS Benchmarks ותקנים.", angle: "**בראיון:** חיבור לאירוע Capital One – תצורה שגויה בענן היא אחד הגורמים הנפוצים לדליפות. ובשאלת Shared Responsibility: תצורת החשבון היא באחריות הלקוח." },
      { name: "שירותי ענן מובנים", vendor: "AWS Security Hub, AWS Config, Azure Policy", purpose: "כלים של ספקי הענן עצמם לבדיקת תצורה מול כללים ותקנים.", angle: "**בראיון:** אצל לקוח קטן אפשר להתחיל בכלים המובנים לפני רכישת פלטפורמה." },
      { name: "Prowler / ScoutSuite", vendor: "קוד פתוח", purpose: "כלי audit לתצורת ענן מול CIS ותקנים נוספים.", angle: "**בראיון:** בגאפ אססמנט מהיר בענן – כלי כזה נותן תמונת מצב ראשונית לבקרות של ISO ו-SOC 2." }
    ]
  }
];
