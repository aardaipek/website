import { localeTags, type Locale } from '@/i18n/config'

export function formatDate(
  date: string,
  locale: Locale,
  options: Intl.DateTimeFormatOptions
) {
  return new Date(date).toLocaleDateString(localeTags[locale], options)
}
