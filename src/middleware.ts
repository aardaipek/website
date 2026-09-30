import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, locales } from '@/i18n/config'

/**
 * English is served without a prefix. Internally every request is rewritten to
 * `/[locale]/...` so the whole app lives under one dynamic segment.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const [, first] = pathname.split('/')

  // `/en/projects` → `/projects`: keep a single canonical URL for English.
  if (first === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/'
    return NextResponse.redirect(url, 308)
  }

  if ((locales as readonly string[]).includes(first)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals, the RSS route and any file with an extension.
  matcher: ['/((?!_next|rss\\.xml|.*\\..*).*)'],
}
