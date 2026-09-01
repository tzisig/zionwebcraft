/**
 * Single source of truth for business details.
 * Fill in the TODO values before going live.
 */
export const site = {
  name: 'ZionWebCraft',
  nameHe: 'ציון וובקרפט',
  tagline: 'בונה לעסקים קטנים אתרים שמביאים לקוחות',
  // TODO: replace with the production domain
  url: 'https://zionwebcraft.co.il',
  locale: 'he-IL',
  lang: 'he',
  dir: 'rtl',

  owner: {
    name: 'אלעד',
    role: 'מפתח אתרים עצמאי',
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
    { value: '+40', label: 'אתרים שבניתי' },
    { value: '7', label: 'שנות ניסיון' },
    { value: '100%', label: 'ציון מהירות ממוצע' },
    { value: '14', label: 'ימי עבודה בממוצע לאתר' },
  ],
} as const;

export const whatsappMessage = 'היי, הגעתי מהאתר של ציון וובקרפט ואשמח לשמוע פרטים על בניית אתר';

export function waLink(message: string = whatsappMessage): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: 'בית', href: '/' },
  { label: 'שירותים', href: '/services' },
  { label: 'תיק עבודות', href: '/portfolio' },
  { label: 'תהליך העבודה', href: '/process' },
  { label: 'מחירים', href: '/pricing' },
  { label: 'אודות', href: '/about' },
  { label: 'שאלות נפוצות', href: '/faq' },
  { label: 'צור קשר', href: '/contact' },
] as const;
