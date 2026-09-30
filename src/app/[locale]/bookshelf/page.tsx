import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary, type Dictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/i18n/metadata'

type Category = keyof Dictionary['bookshelf']['categories']

type Book = {
  title: string
  author: string
  category: Category
  note?: Record<Locale, string>
}

const books: Book[] = [
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Finance',
    note: {
      en: 'Where it all started. Changed how I think about money and assets.',
      tr: 'Her şey burada başladı. Para ve varlıklar hakkındaki düşüncemi değiştirdi.',
    },
  },
  {
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    category: 'Finance',
    note: {
      en: 'The bible of value investing. Dense but essential.',
      tr: 'Değer yatırımının kutsal kitabı. Yoğun ama vazgeçilmez.',
    },
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Finance',
    note: {
      en: 'Money is more about behavior than math.',
      tr: 'Para, matematikten çok davranışla ilgili.',
    },
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    category: 'Engineering',
    note: {
      en: 'The best technical book I have read. Period.',
      tr: 'Okuduğum en iyi teknik kitap. Nokta.',
    },
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Engineering',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self',
    note: {
      en: 'Small changes, remarkable results. I keep coming back to this.',
      tr: 'Küçük değişiklikler, dikkat çekici sonuçlar. Tekrar tekrar dönüyorum.',
    },
  },
]

const categories = [...new Set(books.map((b) => b.category))]

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { title, description } = getDictionary(locale).bookshelf
  return pageMetadata(locale, '/bookshelf', { title, description })
}

export default async function BookshelfPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale).bookshelf

  return (
    <div>
      <h1 className="font-serif text-3xl mb-2">{t.title}</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-12">{t.intro}</p>

      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="text-sm font-medium text-stone-300 dark:text-stone-600 mb-4">
            {t.categories[category]}
          </h2>
          <div className="space-y-5">
            {books
              .filter((b) => b.category === category)
              .map((book) => (
                <div key={book.title}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-stone-900 dark:text-stone-100 font-medium">
                      {book.title}
                    </h3>
                    <span className="text-sm text-stone-400 dark:text-stone-500 shrink-0">
                      {book.author}
                    </span>
                  </div>
                  {book.note ? (
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                      {book.note[locale]}
                    </p>
                  ) : null}
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}
