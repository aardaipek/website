import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Instrument_Serif } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ardaipek.vercel.app'),
  title: {
    default: 'Arda Ipek',
    template: '%s | Arda Ipek',
  },
  description: 'Backend developer, investor, researcher, cyclist.',
  openGraph: {
    title: 'Arda Ipek',
    description: 'Backend developer, investor, researcher, cyclist.',
    url: 'https://ardaipek.vercel.app',
    siteName: 'Arda Ipek',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Arda Ipek',
    description: 'Backend developer, investor, researcher, cyclist.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="tr"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 antialiased font-sans min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <Nav />
          <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
