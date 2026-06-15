import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookshelf',
  description: 'Books that shaped my thinking.',
}

type Book = {
  title: string
  author: string
  category: string
  note?: string
}

const books: Book[] = [
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Finance',
    note: 'Where it all started. Changed how I think about money and assets.',
  },
  {
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    category: 'Finance',
    note: 'The bible of value investing. Dense but essential.',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Finance',
    note: 'Money is more about behavior than math.',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    category: 'Engineering',
    note: 'The best technical book I have read. Period.',
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
    note: 'Small changes, remarkable results. I keep coming back to this.',
  },
]

const categories = [...new Set(books.map((b) => b.category))]

export default function BookshelfPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-2">Bookshelf</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-12">
        Books that shaped my thinking. Not a complete list &mdash; just the ones
        that stuck.
      </p>

      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="text-sm font-medium text-stone-300 dark:text-stone-600 mb-4">
            {category}
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
                  {book.note && (
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                      {book.note}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}
