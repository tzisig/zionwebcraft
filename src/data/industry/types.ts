/**
 * Shape of a per-profession page. Grouped into files by sector so no single
 * module carries all forty-seven entries.
 */
export type Industry = {
  slug: string;
  /** The search term this page targets. */
  keyword: string;
  profession: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  /** Slug in templates.ts - supplies the live demo link and screenshot. */
  demo: string;
  /** How this customer actually decides. */
  decision: string[];
  /** What the site has to answer for this trade specifically. */
  must: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  /** Slug from services.ts. */
  service: string;
};
