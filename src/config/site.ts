/**
 * Single source of truth for business details.
 * Fill in the TODO values before going live.
 */
export const site = {
  name: 'ZionWebCraft',
  nameHe: 'ציון וובקרפט',
  tagline: 'בונה לעסקים קטנים אתרים שמביאים לקוחות',
  url: 'https://zionwebcraft.com',
  locale: 'he-IL',
  lang: 'he',
  dir: 'rtl',

  owner: {
    name: 'ציון סיגרון',
    role: 'מפתח אתרים עצמאי',
    /** Drop a photo at this path to replace the placeholder on /about. */
    photo: '/images/owner.webp',
  },

  contact: {
    // International format, digits only - used to build the wa.me link
    whatsapp: '972584433181',
    phone: '058-443-3181',
    phoneHref: 'tel:+972584433181',
    email: 'mj9963@gmail.com',
    hours: 'א׳-ה׳, 09:00-18:00',
  },

  // Formspree endpoint; submissions land in the inbox above.
  formEndpoint: 'https://formspree.io/f/xljejqee',

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  // TODO: paste real IDs to enable tracking. Empty string = script not rendered.
  analytics: {
    gaMeasurementId: '',
    metaPixelId: '',
  },

  /**
   * Who operates the site, and when the legal pages were last reviewed.
   * Update `legalUpdated` whenever /privacy, /terms or /accessibility change.
   */
  legal: {
    entity: 'ציון סיגרון',
    legalUpdated: '2026-09-16',
    /** Accessibility standard the site is built against. */
    a11yStandard: 'תקן ישראלי ת״י 5568 ברמת AA, המבוסס על WCAG 2.0',
  },

  stats: [
    { value: '2001', label: 'בונה אתרים מאז' },
    { value: 'מאות', label: 'אתרים שבניתי' },
    { value: '1', label: 'איש קשר, מהאפיון עד ההשקה' },
    { value: '2', label: 'מדינות: ישראל וארה״ב' },
  ],
} as const;

export const whatsappMessage = 'היי, הגעתי מהאתר של ציון וובקרפט ואשמח לשמוע פרטים על בניית אתר';

export function waLink(message: string = whatsappMessage): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type NavItem = {
  label: string;
  href: string;
  /** Rendered as a dropdown on desktop and a nested list on mobile. */
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: 'בית', href: '/' },
  {
    label: 'שירותים',
    href: '/services',
    children: [
      { label: 'אתר תדמית לעסקים', href: '/services/business-website' },
      { label: 'חנות אונליין', href: '/services/ecommerce' },
      { label: 'דף נחיתה', href: '/services/landing-page' },
      { label: 'תחזוקת אתרים', href: '/services/maintenance' },
      { label: 'אתרים לפי מקצוע', href: '/websites' },
    ],
  },
  { label: 'תיק עבודות', href: '/portfolio' },
  { label: 'גלריית תבניות', href: '/templates' },
  { label: 'תהליך העבודה', href: '/process' },
  { label: 'מחירים', href: '/pricing' },
  { label: 'אודות', href: '/about' },
  { label: 'שאלות נפוצות', href: '/faq' },
  { label: 'צור קשר', href: '/contact' },
];
