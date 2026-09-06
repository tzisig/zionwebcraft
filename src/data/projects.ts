export type ProjectCategory = 'business-website' | 'ecommerce' | 'landing-page' | 'content';

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
  content: 'אתרי תוכן',
};

export const projects: Project[] = [
  {
    slug: 'getglobalyields',
    name: 'GetGlobalYields',
    field: 'השקעות בשוק ההון האמריקאי למשקיעים זרים',
    category: 'content',
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
];

export const featuredProjects = projects.filter((p) => p.featured);
