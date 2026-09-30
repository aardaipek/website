import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { isLocale, localeTags, localizePath, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import '../globals.css'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
  display: 'swap',
})

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { description } = getDictionary(locale).meta

  return {
    metadataBase: new URL('https://ardaipek.net'),
    title: {
      default: 'Arda Ipek',
      template: '%s | Arda Ipek',
    },
    description,
    openGraph: {
      title: 'Arda Ipek',
      description,
      url: localizePath(locale, '/'),
      siteName: 'Arda Ipek',
      locale: localeTags[locale].replace('-', '_'),
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Arda Ipek',
      description,
      creator: '@aardaipek',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      types: {
        'application/rss+xml': '/rss.xml',
      },
    },
  }
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const { nav } = getDictionary(locale)

  const links = (
    ['writing', 'investing', 'projects', 'bookshelf', 'resources', 'about'] as const
  ).map((key) => ({ href: localizePath(locale, `/${key}`), label: nav[key] }))

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 antialiased font-sans min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <Nav
            homeHref={localizePath(locale, '/')}
            links={links}
            labels={{
              toggleMenu: nav.toggleMenu,
              toggleTheme: nav.toggleTheme,
              language: nav.language,
            }}
          />
          <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
