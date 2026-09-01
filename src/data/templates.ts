/**
 * Ready-made landing page demos, one per profession.
 *
 * These are the developer's own demonstration pages, not client work. They live
 * apart from `projects.ts` on purpose: the portfolio makes claims about real
 * engagements, this gallery only shows what a page for a given trade looks like.
 */
export type TemplateField =
  | 'health'
  | 'home'
  | 'professional'
  | 'beauty'
  | 'creative'
  | 'food'
  | 'education';

export type Template = {
  slug: string;
  /** Fictional business name used inside the demo. */
  name: string;
  profession: string;
  field: TemplateField;
};

/** Screenshot path, derived from the slug. */
export const templateCover = (slug: string) => `/images/templates/${slug}.webp`;

export const fieldLabels: Record<TemplateField | 'all', string> = {
  all: 'הכל',
  professional: 'שירותים מקצועיים',
  health: 'בריאות וטיפול',
  home: 'בית ושיפוצים',
  beauty: 'יופי וכושר',
  creative: 'יצירה ועיצוב',
  food: 'אוכל ואירועים',
  education: 'לימוד והדרכה',
};

const BASE = 'https://portfolio-heb.viralisting.workers.dev';

export const templateUrl = (slug: string) => `${BASE}/${slug}/`;

export const templates: Template[] = [
  { slug: 'piano-teacher', name: 'סטודיו הדר', profession: 'מורה לפסנתר', field: 'education' },
  { slug: 'architect', name: 'מונוליט', profession: 'אדריכל', field: 'creative' },
  { slug: 'optometrist', name: 'מבט צלול', profession: 'אופטומטריסט', field: 'health' },
  { slug: 'wedding-photographer', name: 'אור נצחי', profession: 'צלם חתונות', field: 'creative' },
  { slug: 'private-chef', name: 'גחלת ואפר', profession: 'שף פרטי', field: 'food' },
  { slug: 'graphic-designer', name: 'תומר רייס', profession: 'מעצב גרפי', field: 'creative' },
  { slug: 'attorney', name: 'וייס, כהן ושות׳', profession: 'משרד עורכי דין', field: 'professional' },
  { slug: 'lawyer', name: 'עו״ד שרה בן טוב', profession: 'עורכת דין', field: 'professional' },
  { slug: 'personal-injury-lawyer', name: 'הראל ושות׳', profession: 'עורך דין נזקי גוף', field: 'professional' },
  { slug: 'notary-public', name: 'נוטריון בדרך', profession: 'נוטריון', field: 'professional' },
  { slug: 'northpoint-accounting', name: 'מצפן', profession: 'רואה חשבון', field: 'professional' },
  { slug: 'CPA', name: 'לירון בן טוב', profession: 'רואת חשבון', field: 'professional' },
  { slug: 'financial-advisor', name: 'אופק', profession: 'יועץ פיננסי', field: 'professional' },
  { slug: 'mortgage-broker', name: 'גשר', profession: 'יועץ משכנתאות', field: 'professional' },
  { slug: 'insurance-agent', name: 'מגן', profession: 'סוכן ביטוח', field: 'professional' },
  { slug: 'marketing-consultant', name: 'ברייטבוקס', profession: 'יועצת שיווק', field: 'professional' },
  { slug: 'real-estate-agent', name: 'נגה בן-ארצי', profession: 'מתווכת נדל״ן', field: 'professional' },
  { slug: 'realestate', name: 'רן אשכנזי', profession: 'מתווך נדל״ן', field: 'professional' },

  { slug: 'dentist', name: 'חיוך בהיר', profession: 'רופא שיניים', field: 'health' },
  { slug: 'clinic', name: 'מרפאת תנועה', profession: 'מרפאת פיזיותרפיה', field: 'health' },
  { slug: 'chiropractor', name: 'גשר', profession: 'כירופרקט', field: 'health' },
  { slug: 'holistic-clinic', name: 'שורש', profession: 'רפואה משלימה', field: 'health' },
  { slug: 'massage-therapist', name: 'מגע', profession: 'מעסה מוסמך', field: 'health' },
  { slug: 'speech-therapist', name: 'דיבור וקשר', profession: 'קלינאית תקשורת', field: 'health' },
  { slug: 'vet', name: 'ערבה', profession: 'מרפאה וטרינרית', field: 'health' },
  { slug: 'life-coach', name: 'קרן מנדל', profession: 'מאמנת אישית ומטפלת', field: 'health' },

  { slug: 'electrician', name: 'וולט-סייף', profession: 'חשמלאי', field: 'home' },
  { slug: 'plumber', name: 'זרם מהיר', profession: 'אינסטלטור', field: 'home' },
  { slug: 'locksmith', name: 'מפתח זהב', profession: 'מנעולן', field: 'home' },
  { slug: 'handyman', name: 'תיקונים בבית', profession: 'הנדימן', field: 'home' },
  { slug: 'roofer', name: 'פסגה', profession: 'קבלן גגות', field: 'home' },
  { slug: 'hvac', name: 'פסגת הכרמל', profession: 'חברת מיזוג אוויר', field: 'home' },
  { slug: 'solar-installer', name: 'שמש כרמל', profession: 'מתקין מערכות סולאריות', field: 'home' },
  { slug: 'pest-control', name: 'מגן הבית', profession: 'הדברה', field: 'home' },
  { slug: 'home-cleaning', name: 'קן נקי', profession: 'ניקיון בתים', field: 'home' },
  { slug: 'moving-company', name: 'הובלות איתן', profession: 'חברת הובלות', field: 'home' },
  { slug: 'landscaper', name: 'נוף ירוק', profession: 'גנן ומעצב גינות', field: 'home' },
  { slug: 'auto-mechanic', name: 'מוסך הדר', profession: 'מוסך', field: 'home' },

  { slug: 'beauty-salon', name: 'לונה ומרווה', profession: 'סלון יופי', field: 'beauty' },
  { slug: 'barber-shop', name: 'בן ארי ברברשופ', profession: 'מספרת גברים', field: 'beauty' },
  { slug: 'gym', name: 'בית ברזל', profession: 'מכון כושר', field: 'beauty' },
  { slug: 'fitness-trainer', name: 'ליבה', profession: 'מאמן כושר', field: 'beauty' },
  { slug: 'trainer', name: 'כור', profession: 'מאמן אישי', field: 'beauty' },
  { slug: 'yoga-instructor', name: 'מים שקטים', profession: 'מורה ליוגה', field: 'beauty' },
  { slug: 'dog-groomer', name: 'זנב מכשכש', profession: 'מספרת כלבים', field: 'beauty' },

  { slug: 'interior-designer', name: 'אטלייה הלו', profession: 'מעצבת פנים', field: 'creative' },
  { slug: 'fashion-designer', name: 'עינב רוכל', profession: 'מעצבת אופנה', field: 'creative' },

  { slug: 'bakery', name: 'לחם ודבש', profession: 'מאפייה', field: 'food' },
  { slug: 'caterer', name: 'אלה ומרווה', profession: 'קייטרינג', field: 'food' },
  { slug: 'florist', name: 'כלנית ושרך', profession: 'חנות פרחים', field: 'food' },
  { slug: 'wedding-planner', name: 'פעמון', profession: 'מפיקת חתונות', field: 'food' },
];

/** The six that lead the gallery; the rest follow in the full grid. */
export const featuredSlugs = [
  'piano-teacher',
  'architect',
  'optometrist',
  'wedding-photographer',
  'private-chef',
  'graphic-designer',
];

export const featuredTemplates = featuredSlugs
  .map((slug) => templates.find((t) => t.slug === slug))
  .filter((t): t is Template => Boolean(t));
