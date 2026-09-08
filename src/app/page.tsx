import Link from 'next/link'
import { getAllPosts } from '@/lib/writing'
import { featuredProject, otherProjects } from '@/lib/projects'

export const revalidate = 60

const socials = [
  { name: 'GitHub', href: 'https://github.com/aardaipek' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ardaipek' },
  { name: 'X', href: 'https://twitter.com/aardaipek' },
  { name: 'Spotify', href: 'https://open.spotify.com/user/aardaipek' },
  { name: 'Mail', href: 'mailto:ardaipek66@gmail.com' },
]

const interests = [
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
            systems during the day and research markets at night. Right now
            most of that energy goes into{' '}
            <a
              href="https://galatafinance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 dark:text-stone-100 font-medium underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-amber-700 dark:hover:decoration-amber-500 transition-colors"
            >
              Galata Finance
            </a>
            , the investing tool I&apos;m building on my own.
          </p>
          <p>
            This is my corner of the internet &mdash; a place where I share what
            I&apos;m building, what I&apos;m learning, and what I&apos;m
            thinking about. No algorithm, no feed. Just me.
          </p>
        </div>
      </section>

      {/* Building — featured project first */}
      {featuredProject && (
        <section className="mb-20">
          <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
            Building
          </h2>

          <a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/40 p-6 hover:border-amber-700/40 dark:hover:border-amber-500/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                  {featuredProject.name}
                </h3>
                {featuredProject.live && (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Live
                  </span>
                )}
              </div>
              <span className="text-stone-300 dark:text-stone-600 shrink-0 text-sm">
                &#8599;
              </span>
            </div>

            <p className="text-sm text-stone-600 dark:text-stone-400 mt-3 leading-relaxed">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-stone-400 dark:text-stone-500 border border-stone-200 dark:border-stone-800 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>

          {otherProjects.length > 0 && (
            <div className="mt-4">
              {otherProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-2.5 px-3 -mx-3 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
                >
                  <span className="text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors shrink-0">
                    {project.name}
                  </span>
                  <span className="text-sm text-stone-500 dark:text-stone-400 sm:text-right">
                    {project.tagline}
                  </span>
                </a>
              ))}
            </div>
          )}

          <Link
            href="/projects"
            className="inline-block mt-6 text-sm text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            All projects &rarr;
          </Link>
        </section>
      )}

      {/* What I'm into */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          What I&apos;m into
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
