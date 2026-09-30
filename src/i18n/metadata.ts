import type { Metadata } from 'next'
import { localeTags, localizePath, locales, type Locale } from './config'

/** Title, description, canonical URL and hreflang alternates for one page. */
export function pageMetadata(
  locale: Locale,
  path: string,
  { title, description }: { title?: string; description?: string }
): Metadata {
  const languages = Object.fromEntries(
    locales.map((l) => [localeTags[l], localizePath(l, path)])
  )

  return {
    title,
    description,
    alternates: {
      canonical: localizePath(locale, path),
      languages: { ...languages, 'x-default': path },
    },
    openGraph: {
      title,
      description,
      url: localizePath(locale, path),
      locale: localeTags[locale].replace('-', '_'),
    },
  }
}
