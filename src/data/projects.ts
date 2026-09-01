export type ProjectCategory = 'business-website' | 'ecommerce' | 'landing-page';

export type Project = {
  slug: string;
  name: string;
  field: string;
  category: ProjectCategory;
  year: string;
  status: 'live' | 'in-progress';
  liveUrl?: string;
  featured: boolean;
  /** Path under /public. Falls back to a generated gradient cover when omitted. */
  cover?: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
};

export const categoryLabels: Record<ProjectCategory | 'all', string> = {
  all: 'הכל',
  'business-website': 'אתרי תדמית',
  ecommerce: 'חנויות אונליין',
  'landing-page': 'דפי נחיתה',
};

export const projects: Project[] = [
  {
    slug: 'niv-arad',
    name: 'ניב ארד',
    field: 'אסטרטגיית משכנתא ותכנון פיננסי',
    category: 'landing-page',
    year: '2026',
    status: 'live',
    // TODO: add the live URL once the domain is connected.
    featured: true,
    cover: '/images/projects/niv-arad.png',
    challenge:
      'משרד בוטיק לתכנון פיננסי שנתפס כמו כל יועץ משכנתאות אחר. האתגר היה למצב אותו כאסטרטגי ולא כמתווך מול הבנק, ולהוביל לתיאום שיחת אפיון בלי להישמע כמו עוד הבטחה על חיסכון.',
    solution:
      'עמוד נחיתה במראה עריכתי נקי עם מסר אחד חד, שלושה מספרי הוכחה מעל הקיפול, ושתי קריאות לפעולה מדורגות: תיאום שיחת אפיון למי שמוכן, ותחומי התמחות למי שעדיין בודק. מרכז ידע ושאלות נפוצות מטפלים בהתנגדויות עוד לפני השיחה.',
    // TODO: replace with real numbers after the page has been live for a month.
    result: 'הושק לאחרונה. נתוני המרה יתווספו אחרי חודש ראשון של תנועה.',
    tags: ['נחיתה', 'פיננסים', 'RTL'],
  },
  {
    slug: 'levi-law',
    name: 'לוי ושות עורכי דין',
    field: 'משרד עורכי דין',
    category: 'business-website',
    year: '2025',
    status: 'live',
    liveUrl: 'https://example.com',
    featured: true,
    challenge:
      'למשרד היה אתר ישן שלא נפתח נכון במובייל, ורוב הפניות הגיעו מטלפון בלבד בלי יכולת למדוד מקור.',
    solution:
      'בניתי אתר תדמית חדש עם היררכיית תחומי עיסוק ברורה, טופס פנייה קצר לכל תחום ומעקב המרות מלא.',
    result:
      'עלייה של פי שניים במספר הפניות הדיגיטליות תוך שלושה חודשים, וזמן טעינה שירד מ-6 שניות ל-1.2.',
    tags: ['תדמית', 'SEO', 'טפסים'],
  },
  {
    slug: 'urban-coffee',
    name: 'Urban Coffee',
    field: 'קליית קפה בוטיק',
    category: 'ecommerce',
    year: '2025',
    status: 'live',
    liveUrl: 'https://example.com',
    featured: true,
    challenge:
      'המכירות התבצעו דרך הודעות בוואטסאפ, כל הזמנה דרשה טיפול ידני ולא היה מעקב אחרי מלאי.',
    solution:
      'הקמתי חנות עם מנויי קפה חוזרים, סליקה ישראלית, חיבור למשלוחים וניהול מלאי אוטומטי.',
    result: '70% מההזמנות עברו לערוץ העצמאי, וזמן הטיפול בהזמנה ירד מ-10 דקות לאפס.',
    tags: ['איקומרס', 'סליקה', 'מנויים'],
  },
  {
    slug: 'fitpro-campaign',
    name: 'FitPro',
    field: 'אימוני כושר אישיים',
    category: 'landing-page',
    year: '2024',
    status: 'live',
    liveUrl: 'https://example.com',
    featured: false,
    challenge:
      'תקציב מדיה שנשרף על דף שלא המיר, בלי הוכחה חברתית ובלי קריאה לפעולה ברורה.',
    solution:
      'דף נחיתה ממוקד עם וידאו קצר, שלוש עדויות לקוח וטופס בן שני שדות שמחובר ישירות לוואטסאפ.',
    result: 'אחוז ההמרה עלה מ-1.8% ל-6.4%, ועלות הליד ירדה בכ-60%.',
    tags: ['נחיתה', 'המרות', 'קמפיין'],
  },
  {
    slug: 'studio-mor',
    name: 'סטודיו מור',
    field: 'עיצוב פנים',
    category: 'business-website',
    year: '2024',
    status: 'live',
    liveUrl: 'https://example.com',
    featured: false,
    challenge: 'תיק עבודות ויזואלי עשיר שנשמר בפייסבוק בלבד, בלי בית דיגיטלי משלו.',
    solution:
      'גלריית פרויקטים עם טעינה מדורגת, עמוד לכל פרויקט וטופס פנייה עם בחירת סוג הנכס.',
    result: 'הסטודיו קיבל לראשונה פניות אורגניות מגוגל, כ-15 בחודש.',
    tags: ['תדמית', 'גלריה'],
  },
  {
    slug: 'green-home',
    name: 'GreenHome',
    field: 'מוצרי בית אקולוגיים',
    category: 'ecommerce',
    year: '2026',
    status: 'in-progress',
    featured: false,
    challenge: 'מותג חדש שצריך להיכנס לשוק תחרותי עם קטלוג של מעל 200 מוצרים.',
    solution: 'חנות עם סינון מתקדם, השוואת מוצרים ותשתית תוכן לבלוג מקצועי.',
    result: 'בבנייה, השקה מתוכננת לרבעון הקרוב.',
    tags: ['איקומרס', 'קטלוג גדול'],
  },
  {
    slug: 'clinic-dental',
    name: 'מרפאת שיניים אלון',
    field: 'רפואת שיניים',
    category: 'landing-page',
    year: '2026',
    status: 'in-progress',
    featured: false,
    challenge: 'המרפאה מריצה קמפיין להשתלות ומקבלת פניות לא רלוונטיות.',
    solution: 'דף נחיתה עם שאלון סינון קצר שמסנן לידים לפני שהם מגיעים למזכירה.',
    result: 'בבנייה, בשלב בדיקות אחרונות.',
    tags: ['נחיתה', 'סינון לידים'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
