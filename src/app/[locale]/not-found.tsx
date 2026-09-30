'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { localizePath, splitLocale } from '@/i18n/config'

// not-found.tsx receives no params, so the locale comes from the URL.
const copy = {
  en: { message: 'This page doesn’t exist.', back: 'Back home' },
  tr: { message: 'Bu sayfa mevcut değil.', back: 'Ana sayfaya dön' },
}

export default function NotFound() {
  const { locale } = splitLocale(usePathname())
  const { message, back } = copy[locale]

  return (
    <div className="text-center py-20">
      <h1 className="font-serif text-4xl mb-4">404</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-6">{message}</p>
      <Link
        href={localizePath(locale, '/')}
        className="text-sm text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
      >
        &larr; {back}
      </Link>
    </div>
  )
}
