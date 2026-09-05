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
    name: 'ציון',
    role: 'מפתח אתרים עצמאי',
    /** Drop a photo at this path to replace the placeholder on /about. */
    photo: '/images/owner.jpg',
  },

  contact: {
    // International format, digits only - used to build the wa.me link
    whatsapp: '972584433181',
    phone: '058-443-3181',
    phoneHref: 'tel:+972584433181',
    email: 'mj9963@gmail.com',
    city: 'תל אביב והמרכז',
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
