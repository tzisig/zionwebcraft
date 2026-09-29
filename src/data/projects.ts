export type ProjectCategory = 'business-website' | 'ecommerce' | 'landing-page' | 'content';

/**
 * `client` is work built for a paying client and live under their own name.
 * `demo` is a showcase site built here, with an invented business and invented
 * details, standing in for client work that cannot be published. The two are
 * never presented the same way: a demo carries a visible badge and states what
 * it demonstrates instead of claiming a result it never produced.
 */
export type ProjectKind = 'client' | 'demo';

export type Project = {
  slug: string;
  name: string;
  field: string;
  category: ProjectCategory;
  kind: ProjectKind;
  year: string;
  status: 'live' | 'in-progress';
  liveUrl?: string;
  featured: boolean;
  /** Path under /public. Falls back to a generated gradient cover when omitted. */
  cover?: string;
  challenge: string;
  solution: string;
  /** For a client project: what it produced. For a demo: what it demonstrates. */
  result: string;
  tags: string[];
};

export const categoryLabels: Record<ProjectCategory | 'all', string> = {
  all: 'הכל',
  'business-website': 'אתרי תדמית',
  ecommerce: 'חנויות אונליין',
  'landing-page': 'דפי נחיתה',
  content: 'אתרי תוכן',
};

export const projects: Project[] = [
  {
    slug: 'getglobalyields',
    name: 'GetGlobalYields',
    field: 'השקעות בשוק ההון האמריקאי למשקיעים זרים',
    category: 'content',
    kind: 'client',
    year: '2026',
    status: 'live',
    liveUrl: 'https://getglobalyields.com',
    featured: true,
    cover: '/images/projects/getglobalyields.webp',
    challenge:
      'משקיע שאינו אמריקאי שרוצה להיכנס לשוק האמריקאי נתקל בשלושה חסמים: איזה ברוקר בכלל פותח לו חשבון, מה קורה עם המס במדינה שלו, ואיך מסתדרים כשכמעט כל התוכן בנושא נכתב עבור אמריקאים בלבד.',
    solution:
      'אתר תוכן באנגלית שבנוי סביב כוונת החיפוש של משקיע זר ולא סביב מבנה נושאים: השוואת ברוקרים, מדריכי מס לפי מדינה, אסטרטגיות הכנסה מאופציות וקייס סטאדי מלווה. הכל בארכיטקטורה סטטית, כדי שמאות עמודים ייטענו מיד ויסרקו היטב.',
    result:
      '130 עמודי מידע באוויר, ועוד 180 בתור שמתפרסמים עמוד ביום. ארכיטקטורה שמחזיקה מאות עמודים בלי לאבד מהירות טעינה, וממשיכה לגדול.',
    tags: ['אתר תוכן', 'SEO', 'אנגלית', 'מאות עמודים'],
  },
  {
    slug: 'niv-arad',
    name: 'ניב ארד',
    field: 'אסטרטגיית משכנתא ותכנון פיננסי',
    category: 'landing-page',
    kind: 'client',
    year: '2026',
    status: 'live',
    // TODO: add the live URL once the domain is connected.
    featured: true,
    cover: '/images/projects/niv-arad.webp',
    challenge:
      'משרד בוטיק לתכנון פיננסי שנתפס כמו כל יועץ משכנתאות אחר. האתגר היה למצב אותו כאסטרטגי ולא כמתווך מול הבנק, ולהוביל לתיאום שיחת אפיון בלי להישמע כמו עוד הבטחה על חיסכון.',
    solution:
      'עמוד נחיתה במראה עריכתי נקי עם מסר אחד חד, שלושה מספרי הוכחה מעל הקיפול, ושתי קריאות לפעולה מדורגות: תיאום שיחת אפיון למי שמוכן, ותחומי התמחות למי שעדיין בודק. מרכז ידע ושאלות נפוצות מטפלים בהתנגדויות עוד לפני השיחה.',
    // TODO: replace with real numbers after the page has been live for a month.
    result: 'הושק לאחרונה. נתוני המרה יתווספו אחרי חודש ראשון של תנועה.',
    tags: ['נחיתה', 'פיננסים', 'RTL'],
  },

  // Demo sites. Everything on them is invented, and each one says so on itself.
  {
    slug: 'roni-segev-plumber',
    name: 'רוני שגב אינסטלציה',
    field: 'אינסטלציה, חיפה והקריות',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://roni-segev-plumber.pages.dev/',
    featured: false,
    cover: '/images/projects/roni-segev-plumber.webp',
    challenge:
      'אינסטלטור נמדד בשעת חירום. מי שיש לו נזילה בשתיים בלילה לא קורא על ותק, הוא מחפש מספר שעונה. האתגר הוא אתר שעונה על זה בשנייה הראשונה, ובכל זאת מחזיק מספיק עומק כדי להופיע בחיפוש על כל עיר ועל כל סוג תקלה בנפרד.',
    solution:
      '25 עמודים: עמוד לכל אזור שירות ולכל סוג עבודה, פס חיוג ווואטסאפ שצמוד לתחתית המסך במובייל לאורך כל הגלילה, ומחירון גלוי. אתר סטטי, כך שהעמוד נטען לפני שהמבקר הספיק לחזור לתוצאות החיפוש.',
    result:
      'מדגים איך נראה אתר לבעל מקצוע שעובד בשטח: קריאה לפעולה שנמצאת תמיד ביד, ועומק תוכן שמכסה כל צירוף של עיר ותקלה.',
    tags: ['אתר תדמית', 'בעלי מקצוע', 'מובייל', '25 עמודים'],
  },
  {
    slug: 'asaf-levin-electric',
    name: 'אסף לוין חשמל',
    field: 'חשמלאי מוסמך, גוש דן',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://asaf-electric.pages.dev/',
    featured: false,
    cover: '/images/projects/asaf-levin-electric.webp',
    challenge:
      'חשמלאי מוסמך מתחרה בו זמנית מול "יש לי מישהו שמכיר" ומול חברות גדולות. האתר צריך להעביר שני דברים מיד: שיש רישיון אמיתי, ושאפשר להשיג אותו עכשיו.',
    solution:
      '23 עמודים עם מספרי רישיון גלויים בראש העמוד, עמוד נפרד לכל עיר בגוש דן ולכל סוג עבודה, כולל עמדות טעינה לרכב חשמלי. שפה ויזואלית שלקוחה מעולם החשמל בלי ליפול לגימיק.',
    result:
      'מדגים איך בונים אמון בתחום מפוקח, ואיך מפצלים אתר של בעל מקצוע לעמודי עיר ועמודי שירות בלי לשכפל את אותו תוכן שוב ושוב.',
    tags: ['אתר תדמית', 'בעלי מקצוע', 'עמודי אזור', '23 עמודים'],
  },
  {
    slug: 'david-cohen-lawyer',
    name: 'ד.כ דוד כהן, דיני עבודה',
    field: 'עריכת דין, תל אביב',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://david-cohen-lawyer.pages.dev/',
    featured: false,
    cover: '/images/projects/david-cohen-lawyer.webp',
    challenge:
      'עובד שפוטר לרוב לא יודע אם בכלל מגיע לו משהו, וזה בדיוק מה שעוצר אותו מלהרים טלפון. האתגר הוא להפוך שאלה משפטית מעורפלת לצעד ראשון קטן שאפשר לעשות לבד.',
    solution:
      'מחשבון פיצויי פיטורים בתוך האתר, עמוד נפרד לכל עילה (פיטורים שלא כדין, שכר שלא שולם, הטרדה, אפליה), ומאמרים שעונים על השאלות שחוזרות עוד לפני השיחה. 20 עמודים, עם ייעוץ ראשוני ללא תשלום כקריאה לפעולה.',
    result:
      'מדגים איך כלי אינטראקטיבי אחד מוריד את מחסום הפנייה בתחום שאנשים חוששים ממנו.',
    tags: ['אתר תדמית', 'משפטי', 'כלי אינטראקטיבי', '20 עמודים'],
  },
  {
    slug: 'cohen-accounting',
    name: 'כהן ושות׳, רואי חשבון',
    field: 'ראיית חשבון ויעוץ מס, תל אביב',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://accountant-8or.pages.dev/',
    featured: false,
    cover: '/images/projects/cohen-accounting.webp',
    challenge:
      'עצמאי קטן מחפש רואה חשבון שידבר איתו בעברית ולא בשפה של דוחות. מצד שני, משרד שרוצה להגיע גם למי שמחפש "רואה חשבון לעמותה" וגם למי שמחפש "פתיחת עוסק מורשה" צריך הרבה יותר מעמוד שירותים אחד.',
    solution:
      '34 עמודים, הגדול מבין אתרי ההדגמה: עמוד לכל שירות, עמוד לכל ענף, מדור עדכוני מס וכלים קטנים שמייצרים כניסות מחיפוש. המבנה מחזיק את הרוחב הזה בלי שהעמודים יתחילו להידמות זה לזה.',
    result:
      'מדגים איך אתר של משרד מקצועי מחזיק עומק SEO רחב במיוחד ועדיין נשאר קריא למי שנכנס בפעם הראשונה.',
    tags: ['אתר תדמית', 'פיננסים', 'SEO רחב', '34 עמודים'],
  },
  {
    slug: 'mortgage-advisor',
    name: 'י.מ יועץ משכנתאות',
    field: 'ייעוץ משכנתאות, ארצי',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://mortgage-heb.viralisting.workers.dev/',
    featured: false,
    cover: '/images/projects/mortgage-advisor.webp',
    challenge:
      'כל יועץ משכנתאות מבטיח חיסכון, ולכן ההבטחה הזו כבר לא אומרת כלום. האתגר הוא להסביר מה באמת ההבדל בלי להפוך את העמוד להרצאה שאף אחד לא יקרא עד הסוף.',
    solution:
      '21 עמודים שמפרקים את התחום לפי המצב של הלקוח (רכישה ראשונה, מיחזור, איחוד הלוואות, מימון השקעה) במקום לפי מונחים מקצועיים, ומדריכים שמלווים דווקא את השלב שלפני ההחלטה.',
    result:
      'מדגים איך לבנות אתר סביב המצב שבו הלקוח נמצא, ולא סביב רשימת השירותים של העסק.',
    tags: ['אתר תדמית', 'פיננסים', 'מבנה לפי כוונה', '21 עמודים'],
  },
  {
    slug: 'mimi-sasson-interiors',
    name: 'Mimi Sasson Interiors',
    field: 'עיצוב פנים, ניו יורק, אנגלית',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://interior-designer-9cx.pages.dev/',
    featured: false,
    cover: '/images/projects/mimi-sasson-interiors.webp',
    challenge:
      'עיצוב פנים נמכר בעין. אתר שמדבר הרבה ומראה מעט מפסיד עוד לפני שהתחיל. מצד שני, לקוח בטווח הזה רוצה לדעת גם איך העבודה מתנהלת בפועל לפני שהוא פונה.',
    solution:
      'אתר באנגלית במבנה עריכתי: פרויקטים בגדול, עמוד תהליך שמסביר שלב אחרי שלב, ובלוג. 19 עמודים ב-LTR מלא, מבנה שונה לחלוטין מזה של אתר שירות ישראלי.',
    result:
      'מדגים שהעבודה לא מוגבלת לעברית ולא לפורמט אחד, ושמעבר לשפה אחרת משנה את המבנה ולא רק את הטקסט.',
    tags: ['אתר תדמית', 'אנגלית', 'LTR', '19 עמודים'],
  },
  {
    slug: 'ai-tools-compare',
    name: 'AI Tools Compare',
    field: 'השוואת כלי בינה מלאכותית, אנגלית',
    category: 'content',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://ai-tools-compare-d3b.pages.dev/',
    featured: false,
    cover: '/images/projects/ai-tools-compare.webp',
    challenge:
      'אתר השוואות חי או מת על המבנה שלו. עשרות כלים, עשרות קטגוריות, והשוואה אפשרית בין כל צמד. בלי ארכיטקטורה מסודרת זה הופך לערימה שגוגל לא מצליח להבין ומבקר לא מצליח לנווט בה.',
    solution:
      '27 עמודים שנבנים מתוך נתונים ולא נכתבים ידנית: עמוד לכל כלי, עמוד לכל השוואה, וסינון לפי קטגוריה ולפי מקצוע. הוספת כלי חדש מייצרת לבד את כל העמודים הנגזרים ממנו.',
    result:
      'מדגים איך בונים אתר תוכן שגדל בלי שהתחזוקה גדלה איתו, אותה שיטה שמריצה את GetGlobalYields.',
    tags: ['אתר תוכן', 'אנגלית', 'עמודים מנתונים', '27 עמודים'],
  },
  {
    slug: 'airtrace-hvac',
    name: 'איירטרייס מיזוג אוויר',
    field: 'טכנאי מיזוג, השרון',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://airtrace-hvac.pages.dev/',
    featured: false,
    cover: '/images/projects/airtrace-hvac.webp',
    challenge:
      'מיזוג מתקלקל בגל החום, וכל האזור מחפש באותו יום. בעונה השקטה כמעט אף אחד לא מחפש. אתר בתחום כזה צריך לתפוס את הפניות הדחופות ובמקביל לייצר תנועה שממשיכה לזרום גם כשלא חם.',
    solution:
      '26 עמודים: מחשבון שמחשב איזה מזגן מתאים לחדר לפי גודל, חשיפה לשמש וקומה, מדריך תקלות מסודר לפי תסמין ולא לפי מונח מקצועי ("עובד אבל לא מקרר", "מטפטף מים"), ועמוד לכל עיר בשרון עם זמן הגעה.',
    result:
      'מדגים איך כלי עזר ומדריך תקלות מייצרים כניסות מחיפוש לאורך כל השנה, ולא רק בשבועיים של השיא.',
    tags: ['אתר תדמית', 'בעלי מקצוע', 'כלי אינטראקטיבי', '26 עמודים'],
  },
  {
    slug: 'barnea-locksmith',
    name: 'ברנע מנעולים',
    field: 'מנעולן, ירושלים והסביבה',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://barnea-locksmith.pages.dev/',
    featured: false,
    cover: '/images/projects/barnea-locksmith.webp',
    challenge:
      'מנעולנות היא התחום שהכי סובל מהונאות מחיר, וכל לקוח מגיע חשדן. מי שננעל בחוץ בלילה לא מתמקח, ולכן קל לנצל אותו, וכל מי שיודע את זה מהסס להרים טלפון.',
    solution:
      '25 עמודים שכולם בנויים סביב הסרת החשד: מחשבון מחיר לפי סוג שירות, שעה ואזור, מדריך שמסביר בדיוק איך נראית הונאת מנעולן ואיך מזהים אותה, ועמוד לכל אזור עם זמן הגעה מוצהר. תמונה ותעודות של בעל העסק בראש העמוד.',
    result:
      'מדגים איך אתר מוכר אמינות בתחום שבו האמינות היא כל המוצר.',
    tags: ['אתר תדמית', 'בעלי מקצוע', 'שקיפות מחיר', '25 עמודים'],
  },
  {
    slug: 'pirchei-hagefen',
    name: 'פרחי הגפן',
    field: 'משלוח פרחים ועיצוב אירועים, ירושלים',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://pirchei-hagefen-florist.pages.dev/',
    featured: false,
    cover: '/images/projects/pirchei-hagefen.webp',
    challenge:
      'פרחים משתנים כל שבוע. קטלוג מצולם קבוע הופך לשקר תוך חודש, כי מה שבתמונה כבר לא בחנות. בלי קטלוג בכלל אי אפשר להזמין.',
    solution:
      '26 עמודים עם קטלוג ממוספר במקום קטלוג מצולם: מזמינים מספר, והזר נבנה ממה שנקטף השבוע. הזמנה בוואטסאפ עם תמונת אישור לפני היציאה למשלוח, ועמודים נפרדים לפי אירוע ולפי שכונה.',
    result:
      'מדגים איך פותרים מוצר שמשתנה כל הזמן בלי לבנות מערכת ניהול מלאה מאחוריו.',
    tags: ['אתר תדמית', 'קמעונאות', 'הזמנה בוואטסאפ', '26 עמודים'],
  },
  {
    slug: 'vered-marketing',
    name: 'ורד, ייעוץ שיווקי',
    field: 'ייעוץ שיווק לעסקים קטנים, תל אביב והמרכז',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://vered-marketing.pages.dev/',
    featured: false,
    cover: '/images/projects/vered-marketing.webp',
    challenge:
      'יועצת שיווק נמדדת באתר שלה עוד לפני השיחה, כי האתר הוא הדוגמה. ומעבר לזה, היא מוכרת לעסקים שכבר נכוו פעם מיועץ שהבטיח ולא סיפק.',
    solution:
      '32 עמודים, הגדול מבין אתרי ההדגמה: מחשבון תקציב פרסום, בדיקת מצב שיווקי בשמונה שאלות, קייס סטאדי שמוצגים כמשפך המרה עם מספרים בכל שלב, ועמוד ייעודי לכל סוג עסק (מרפאות, משרדי עורכי דין, מסעדות, B2B).',
    result:
      'מדגים איך שני כלים אינטראקטיביים הופכים גולש מתעניין לליד מחומם עוד לפני השיחה הראשונה.',
    tags: ['אתר תדמית', 'שיווק', 'כלים אינטראקטיביים', '32 עמודים'],
  },
  {
    slug: 'arkada-realestate',
    name: 'ארקדה נדל״ן',
    field: 'תיווך נדל״ן, הרצליה ורמת השרון',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://arkada-realestate.pages.dev/',
    featured: false,
    cover: '/images/projects/arkada-realestate.webp',
    challenge:
      'מתווך נדל״ן נאבק בתפיסה שהוא מיותר. מי שמוכר רוצה לדעת על מה בדיוק הוא משלם עמלה, ומי שקונה חושש שהמתווך עובד בשביל הצד השני.',
    solution:
      '30 עמודים שמציגים עסקאות עם המספרים שבאמת מעניינים: כמה ימים עברו עד חוזה, ואיזה אחוז מהמחיר המבוקש התקבל. לצד זה מחשבון משכנתא, מדריך שכונה לכל אזור, ומאמרים שמסבירים את מה שמתווכים בדרך כלל לא מסבירים.',
    result:
      'מדגים איך שקיפות מספרית מחליפה סופרלטיבים בתחום שרווי בהם.',
    tags: ['אתר תדמית', 'נדל״ן', 'שקיפות נתונים', '30 עמודים'],
  },
  {
    slug: 'adama-massage',
    name: 'אדמה, עיסוי טיפולי',
    field: 'עיסוי טיפולי, בנימינה וזכרון יעקב',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://adama-massage.pages.dev/',
    featured: false,
    cover: '/images/projects/adama-massage.webp',
    challenge:
      'מי שכואב לו לא יודע איזה טיפול הוא צריך, ורשימה של סוגי עיסוי לא עוזרת לו להחליט. הוא גם מתלבט אם בכלל להזמין, ולכן כל שלב נוסף בדרך לפנייה מאבד אותו.',
    solution:
      '26 עמודים עם מפת גוף לחיצה: בוחרים את האזור שכואב ומקבלים המלצת טיפול. שאלון התאמה קצר, וכל קישור וואטסאפ נפתח כשההודעה כבר כתובה עם האזור שנבחר, כך שאין מה לנסח.',
    result:
      'מדגים איך ממירים תחושה גופנית מעורפלת לפנייה מוכנה לשליחה בלחיצה אחת.',
    tags: ['אתר תדמית', 'טיפול ובריאות', 'מפת גוף', '26 עמודים'],
  },
  {
    slug: 'flowline-plumbing',
    name: 'פלואוליין אינסטלציה',
    field: 'מוקד אינסטלציה, ראשון לציון והשפלה',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://flowline-plumbing-il.pages.dev/',
    featured: false,
    cover: '/images/projects/flowline-plumbing.webp',
    challenge:
      'עסק אינסטלציה עם צוות ומוקד מוכר משהו אחר לגמרי מבעל מקצוע יחיד: לא את הידיים של אדם מסוים, אלא את היכולת להגיע תמיד. האתר צריך למכור תשתית, ואי אפשר למכור תשתית באותה שפה שבה מוכרים אומנות.',
    solution:
      '26 עמודים שבנויים סביב ההבטחה התפעולית: זמן הגעה מוצהר, מוקד שעונה בכל שעה, מחיר סגור לפני תחילת העבודה ואחריות בכתב. עמוד לכל עיר בשפלה ולכל סוג תקלה.',
    result:
      'מדגים איך אותו תחום בדיוק נראה אחרת לגמרי כשמוכרים תשתית ולא אדם. אפשר להשוות אותו לרוני שגב באותו תיק עבודות.',
    tags: ['אתר תדמית', 'בעלי מקצוע', 'מודל מוקד', '26 עמודים'],
  },
  {
    slug: 'quiet-winter-roofing',
    name: 'חורף שקט, איטום גגות',
    field: 'איטום גגות, חיפה והקריות',
    category: 'business-website',
    kind: 'demo',
    year: '2026',
    status: 'live',
    liveUrl: 'https://quiet-winter-roofing.pages.dev/',
    featured: false,
    cover: '/images/projects/quiet-winter-roofing.webp',
    challenge:
      'איטום גגות הוא תחום עונתי קיצוני. כולם מחפשים בגשם הראשון, וזה בדיוק הרגע שבו אי אפשר לעבוד. הכסף האמיתי נמצא בלשכנע אנשים לטפל בגג בקיץ, כשהבעיה לא מציקה להם.',
    solution:
      '25 עמודים שממסגרים הכל סביב מוכנות לחורף: שאלון אבחון של 30 שניות, צ׳קליסט למילוי לפני הזמנת בדיקה, ועיקרון מוצהר של "קודם מאבחנים, אחר כך אוטמים" במקום מחיר בטלפון. אחריות בכתב היא המסר המרכזי.',
    result:
      'מדגים איך מייצרים ביקוש דווקא בעונה שבה אף אחד לא חושב על הבעיה.',
    tags: ['אתר תדמית', 'בנייה ושיפוצים', 'ביקוש עונתי', '25 עמודים'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
