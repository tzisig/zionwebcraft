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
];

export const featuredProjects = projects.filter((p) => p.featured);
