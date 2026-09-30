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
      className="inline-flex h-7 items-center rounded-full border border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/70 p-0.5"
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={localizePath(locale, path)}
          hrefLang={locale}
          aria-current={locale === current ? 'true' : undefined}
          className={`flex h-full items-center rounded-full px-2 text-[11px] font-medium tracking-wide transition-colors ${
            locale === current
              ? 'bg-white text-stone-900 shadow-sm dark:bg-stone-700 dark:text-stone-100'
              : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
          }`}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  )
}
