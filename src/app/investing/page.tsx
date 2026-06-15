import Link from 'next/link'
import type { Metadata } from 'next'
import { getPostsByCategory } from '@/lib/writing'

export const metadata: Metadata = {
  title: 'Investing',
  description: 'Market notes, portfolio thoughts, and investment journal.',
}

export default async function InvestingPage() {
  const posts = await getPostsByCategory('investment')

  return (
    <div>
      <h1 className="font-serif text-3xl mb-2">Investing</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-12">
        Personal market notes and portfolio thinking. Not financial advice —
        just me trying to make sense of things.
      </p>

      {/* Principles */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          My Principles
        </h2>
        <ul className="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="text-stone-300 dark:text-stone-600 shrink-0">
              01
            </span>
            <span>Think in decades, not quarters.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-stone-300 dark:text-stone-600 shrink-0">
              02
            </span>
            <span>Understand what you own.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-stone-300 dark:text-stone-600 shrink-0">
              03
            </span>
            <span>Risk management over return chasing.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-stone-300 dark:text-stone-600 shrink-0">
              04
            </span>
            <span>Stay curious, stay patient.</span>
          </li>
        </ul>
      </section>

      {/* Journal from Notion */}
      <section>
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          Journal
        </h2>
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-stone-400 dark:text-stone-500 shrink-0 tabular-nums">
                    {formatDate(post.date)}
                  </span>
                </div>
                {post.summary && (
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    {post.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-stone-400 dark:text-stone-500 text-sm">
            First entry coming soon.
          </p>
        )}
      </section>
    </div>
  )
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
