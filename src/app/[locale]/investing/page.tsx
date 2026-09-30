import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostsByCategory } from '@/lib/writing'
import { formatDate } from '@/lib/format'
import { isLocale, localizePath } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/i18n/metadata'

export const revalidate = 60

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { title, description } = getDictionary(locale).investing
  return pageMetadata(locale, '/investing', { title, description })
}

export default async function InvestingPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale).investing
  const posts = await getPostsByCategory('investment')

  return (
    <div>
      <h1 className="font-serif text-3xl mb-2">{t.title}</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-12">{t.intro}</p>

      {/* Principles */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          {t.principlesTitle}
        </h2>
        <ul className="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
          {t.principles.map((principle, i) => (
            <li key={principle} className="flex gap-3">
              <span className="text-stone-300 dark:text-stone-600 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Journal from Notion */}
      <section>
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          {t.journal}
        </h2>
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={localizePath(locale, `/writing/${post.slug}`)}
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-stone-400 dark:text-stone-500 shrink-0 tabular-nums">
                    {formatDate(post.date, locale, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                {post.summary ? (
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    {post.summary}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-stone-400 dark:text-stone-500 text-sm">{t.empty}</p>
        )}
      </section>
    </div>
  )
}
