export const locales = ['en', 'tr'] as const

export type Locale = (typeof locales)[number]

/** English lives at the root (`/projects`), other locales get a prefix (`/tr/projects`). */
export const defaultLocale: Locale = 'en'

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  tr: 'TR',
}

/** BCP 47 tags used for `Intl` formatting and Open Graph. */
export const localeTags: Record<Locale, string> = {
  en: 'en-US',
  tr: 'tr-TR',
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

/** `localizePath('tr', '/projects')` → `/tr/projects`; English stays unprefixed. */
export function localizePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

/** Splits a visible URL pathname into its locale and the locale-less path. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split('/')
  if (isLocale(first) && first !== defaultLocale) {
    return { locale: first, path: `/${rest.join('/')}` }
  }
  return { locale: defaultLocale, path: pathname }
}
