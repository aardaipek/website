import Link from 'next/link'
import { getAllPosts } from '@/lib/writing'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Thoughts on software, investment, and life.',
}

export default async function WritingPage() {
  const posts = await getAllPosts()

  const postsByYear: Record<string, typeof posts> = {}
  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!postsByYear[year]) postsByYear[year] = []
    postsByYear[year].push(post)
  })

  return (
    <div>
      <h1 className="font-serif text-3xl mb-2">Writing</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-12">
        Thoughts on software, investment, and life.
      </p>

      {Object.entries(postsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, yearPosts]) => (
          <section key={year} className="mb-10">
            <h2 className="text-sm font-medium text-stone-300 dark:text-stone-600 mb-4">
              {year}
            </h2>
            <div className="space-y-4">
              {yearPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/writing/${post.slug}`}
                  className="group block"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      {post.category && (
                        <span className="text-xs text-stone-400 dark:text-stone-500">
                          {post.category}
                        </span>
                      )}
                      <span className="text-sm text-stone-400 dark:text-stone-500 tabular-nums">
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </div>
                  {post.summary && (
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                      {post.summary}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}

      {posts.length === 0 && (
        <p className="text-stone-400 dark:text-stone-500">Coming soon.</p>
      )}
    </div>
  )
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('tr-TR', {
    month: 'short',
    day: 'numeric',
  })
}
