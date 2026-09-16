/// <reference types="astro/client" />

declare global {
  interface Window {
    /** Defined only when a Google Analytics measurement ID is configured. */
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

export {};
