'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  localeLabels,
  localizePath,
  locales,
  splitLocale,
} from '@/i18n/config'

export function LanguageSwitch({ label }: { label: string }) {
  const { locale: current, path } = splitLocale(usePathname())

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-1 text-xs font-medium"
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 ? (
            <span aria-hidden className="text-stone-300 dark:text-stone-700">
              /
            </span>
          ) : null}
          <Link
            href={localizePath(locale, path)}
            hrefLang={locale}
            aria-current={locale === current ? 'true' : undefined}
            className={
              locale === current
                ? 'text-stone-900 dark:text-stone-100'
                : 'text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors'
            }
          >
            {localeLabels[locale]}
          </Link>
        </span>
      ))}
    </div>
  )
}
