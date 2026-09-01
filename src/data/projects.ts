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
];

export const featuredProjects = projects.filter((p) => p.featured);
