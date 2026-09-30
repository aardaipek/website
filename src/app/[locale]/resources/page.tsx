import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllNotionResources } from '@/lib/notion'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/i18n/metadata'

export const revalidate = 60

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { title, description } = getDictionary(locale).resources
  return pageMetadata(locale, '/resources', { title, description })
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale).resources
  const resources = await getAllNotionResources()
  const categories = [...new Set(resources.map((r) => r.category))]

  return (
    <div>
      <h1 className="font-serif text-3xl mb-2">{t.title}</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-12">{t.intro}</p>

      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="text-sm font-medium text-stone-300 dark:text-stone-600 mb-4">
            {category}
          </h2>
          <div className="space-y-4">
            {resources
              .filter((r) => r.category === category)
              .map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-stone-900 dark:text-stone-100 font-medium group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-stone-300 dark:text-stone-600 shrink-0 text-sm">
                      &#8599;
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    {item.description}
                  </p>
                </a>
              ))}
          </div>
        </section>
      ))}

      {categories.length === 0 ? (
        <p className="text-stone-400 dark:text-stone-500 text-sm">{t.empty}</p>
      ) : null}
    </div>
  )
}
