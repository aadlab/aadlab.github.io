/**
 * Static localisation tokens used by the locale-aware nav and footer.
 * The bulk of the marketing copy lives inside each locale's page.tsx
 * (matching the soft-cypres pattern — one fully translated file per
 * locale, no abstraction). Only nav + footer labels live here because
 * they appear on every page and need the locale derived at runtime.
 */

export const LOCALES = ['en', 'de', 'es', 'fr', 'it', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export type NavLabels = {
  lessons: string;
  scenarios: string;
  playground: string;
  support: string;
  home: string;
  // Footer copyright fallback phrase (the year is interpolated).
  rights: string;
  affiliation: string;
  signOff: string;
};

export const NAV_LABELS: Record<Locale, NavLabels> = {
  en: {
    lessons: 'Lessons',
    scenarios: 'Scenarios',
    playground: 'Playground',
    support: 'Support',
    home: 'Home',
    rights: 'All rights reserved.',
    affiliation:
      'CYPRES and CYPRES 2 are trademarks of Airtec GmbH & Co. KG Safety Systems. AAD lab is not affiliated with, endorsed by, or developed by Airtec.',
    signOff: 'Blue skies.',
  },
  de: {
    lessons: 'Lektionen',
    scenarios: 'Szenarien',
    playground: 'Playground',
    support: 'Support',
    home: 'Start',
    rights: 'Alle Rechte vorbehalten.',
    affiliation:
      'CYPRES und CYPRES 2 sind Marken der Airtec GmbH & Co. KG Safety Systems. AAD lab ist nicht mit Airtec verbunden, wird nicht von Airtec unterstützt oder entwickelt.',
    signOff: 'Blue skies.',
  },
  es: {
    lessons: 'Lecciones',
    scenarios: 'Escenarios',
    playground: 'Playground',
    support: 'Soporte',
    home: 'Inicio',
    rights: 'Todos los derechos reservados.',
    affiliation:
      'CYPRES y CYPRES 2 son marcas de Airtec GmbH & Co. KG Safety Systems. AAD lab no está afiliada, respaldada ni desarrollada por Airtec.',
    signOff: 'Blue skies.',
  },
  fr: {
    lessons: 'Leçons',
    scenarios: 'Scénarios',
    playground: 'Playground',
    support: 'Support',
    home: 'Accueil',
    rights: 'Tous droits réservés.',
    affiliation:
      "CYPRES et CYPRES 2 sont des marques d'Airtec GmbH & Co. KG Safety Systems. AAD lab n'est pas affiliée, approuvée ou développée par Airtec.",
    signOff: 'Blue skies.',
  },
  it: {
    lessons: 'Lezioni',
    scenarios: 'Scenari',
    playground: 'Playground',
    support: 'Assistenza',
    home: 'Home',
    rights: 'Tutti i diritti riservati.',
    affiliation:
      "CYPRES e CYPRES 2 sono marchi di Airtec GmbH & Co. KG Safety Systems. AAD lab non è affiliata, approvata o sviluppata da Airtec.",
    signOff: 'Blue skies.',
  },
  ru: {
    lessons: 'Уроки',
    scenarios: 'Сценарии',
    playground: 'Playground',
    support: 'Поддержка',
    home: 'Главная',
    rights: 'Все права защищены.',
    affiliation:
      'CYPRES и CYPRES 2 — товарные знаки Airtec GmbH & Co. KG Safety Systems. AAD lab не связано, не одобрено и не разработано Airtec.',
    signOff: 'Blue skies.',
  },
};

export const LANGUAGE_PILLS: { locale: Locale; label: string }[] = [
  { locale: 'en', label: 'English' },
  { locale: 'de', label: 'Deutsch' },
  { locale: 'fr', label: 'Français' },
  { locale: 'es', label: 'Español' },
  { locale: 'it', label: 'Italiano' },
  { locale: 'ru', label: 'Русский' },
];

/** Map a pathname to its locale. /de/... → 'de'; everything else → 'en'. */
export function localeFromPath(pathname: string): Locale {
  const match = pathname.match(/^\/(de|es|fr|it|ru)(?:\/|$)/);
  return match ? (match[1] as Locale) : 'en';
}

/** Strip the leading /{locale} from a pathname, returning the canonical path. */
export function pathWithoutLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(de|es|fr|it|ru)(?=\/|$)/, '');
  return stripped || '/';
}

/** Build a route for a given locale and trailing path (e.g. '/' or '/support'). */
export function routeFor(locale: Locale, suffix: string = '/'): string {
  const clean = suffix.startsWith('/') ? suffix : `/${suffix}`;
  return locale === 'en' ? clean : `/${locale}${clean}`;
}
