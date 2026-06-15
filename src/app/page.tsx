import Link from 'next/link'
import { getAllPosts } from '@/lib/writing'

const socials = [
  { name: 'GitHub', href: 'https://github.com/aardaipek' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ardaipek' },
  { name: 'X', href: 'https://twitter.com/aardaipek' },
  { name: 'Spotify', href: 'https://open.spotify.com/user/aardaipek' },
  { name: 'Mail', href: 'mailto:ardaipek66@gmail.com' },
]

const interests = [
  {
    label: 'Building',
    description: 'Backend systems, APIs, side projects',
    link: '/projects',
  },
  {
    label: 'Investing',
    description: 'Long-term thinking, market research, portfolio management',
    link: '/investing',
  },
  {
    label: 'Writing',
    description: 'Software, finance, personal notes',
    link: '/writing',
  },
  {
    label: 'Reading',
    description: 'Finance, psychology, business, engineering',
    link: '/bookshelf',
  },
]

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3)

  return (
    <div>
      {/* Intro — personality first */}
      <section className="mb-20">
        <h1 className="font-serif text-4xl mb-6">
          Hey, I&apos;m Arda{' '}
          <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">
            &#x270B;
          </span>
        </h1>
        <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
          <p>
            I&apos;m a software developer based in Istanbul. I build backend
            systems during the day and research markets at night. Somewhere in
            between, I ride my bike, watch F1, and hang out with my cat Luna.
          </p>
          <p>
            This is my corner of the internet &mdash; a place where I share what
            I&apos;m building, what I&apos;m learning, and what I&apos;m
            thinking about. No algorithm, no feed. Just me.
          </p>
        </div>
      </section>

      {/* What I'm into */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          What I&apos;m into
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interests.map(({ label, description, link }) => (
            <Link
              key={label}
              href={link}
              className="group block p-4 -m-4 sm:m-0 sm:p-4 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
            >
              <h3 className="text-stone-900 dark:text-stone-100 font-medium group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                {label}
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent writing */}
      {posts.length > 0 && (
        <section className="mb-20">
          <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
            Recently written
          </h2>
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
          <Link
            href="/writing"
            className="inline-block mt-6 text-sm text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            All posts &rarr;
          </Link>
        </section>
      )}

      {/* Connect */}
      <section>
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          Elsewhere
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors text-sm"
            >
              {name}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('tr-TR', {
    month: 'short',
    day: 'numeric',
  })
}
