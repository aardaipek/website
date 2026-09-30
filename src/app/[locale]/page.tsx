import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts } from '@/lib/writing'
import { getProjects } from '@/lib/projects'
import { formatDate } from '@/lib/format'
import { StatusBadge } from '@/components/status-badge'
import { TagList } from '@/components/tag-list'
import { TransitionLink } from '@/components/transition-link'
import { isLocale, localizePath } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/i18n/metadata'

export const revalidate = 60

const socials = [
  { name: 'GitHub', href: 'https://github.com/aardaipek' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ardaipek' },
  { name: 'X', href: 'https://twitter.com/aardaipek' },
  { name: 'Spotify', href: 'https://open.spotify.com/user/aardaipek' },
  { name: 'Mail', href: 'mailto:ardaipek66@gmail.com' },
]

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata(locale, '/', {
    description: getDictionary(locale).meta.description,
  })
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const { home: t, projects: pt } = getDictionary(locale)

  const posts = (await getAllPosts()).slice(0, 3)
  const projects = getProjects(locale)
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured && p.slug !== 'ardaipek-net')
  const projectHref = (slug: string) => localizePath(locale, `/projects/${slug}`)

  const interests = [
    { ...t.interests.investing, link: localizePath(locale, '/investing') },
    { ...t.interests.writing, link: localizePath(locale, '/writing') },
    { ...t.interests.reading, link: localizePath(locale, '/bookshelf') },
  ]

  return (
    <div>
      {/* Intro — personality first */}
      <section className="mb-20">
        <h1 className="font-serif text-4xl mb-6">
          {t.greeting}{' '}
          <span className="inline-block animate-[wave_2s_ease-in-out_infinite] motion-reduce:animate-none origin-[70%_70%]">
            &#x270B;
          </span>
        </h1>
        <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
          <p>
            {t.introBeforeLink}
            <a
              href="https://galatafinance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 dark:text-stone-100 font-medium underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-amber-700 dark:hover:decoration-amber-500 transition-colors"
            >
              Galata Finance
            </a>
            {t.introAfterLink}
          </p>
          <p>{t.introSecond}</p>
        </div>
      </section>

      {/* Building — featured project first */}
      {featured ? (
        <section className="mb-20">
          <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
            {t.building}
          </h2>

          <TransitionLink
            href={projectHref(featured.slug)}
            direction="nav-forward"
            className="group block rounded-xl border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/40 p-6 hover:border-amber-700/40 dark:hover:border-amber-500/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                {featured.name}
              </h3>
              <StatusBadge status={featured.status} label={pt.status[featured.status]} />
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-3 leading-relaxed">
              {featured.tagline}
            </p>
            <div className="mt-4">
              <TagList tags={featured.platforms} />
            </div>
          </TransitionLink>

          <ul className="mt-4">
            {others.map((project) => {
              const row = (
                <>
                  <span className="flex items-center gap-3 shrink-0">
                    <span className="text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                      {project.name}
                    </span>
                    <StatusBadge status={project.status} label={pt.status[project.status]} />
                  </span>
                  <span className="text-sm text-stone-500 dark:text-stone-400 sm:text-right">
                    {project.tagline}
                  </span>
                </>
              )
              const rowClass =
                'group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-2.5 px-3 -mx-3 rounded-lg'

              return (
                <li key={project.slug}>
                  {project.detail ? (
                    <TransitionLink
                      href={projectHref(project.slug)}
                      direction="nav-forward"
                      className={`${rowClass} hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors`}
                    >
                      {row}
                    </TransitionLink>
                  ) : (
                    <div className={rowClass}>{row}</div>
                  )}
                </li>
              )
            })}
          </ul>

          <Link
            href={localizePath(locale, '/projects')}
            className="inline-block mt-6 text-sm text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            {t.allProjects} &rarr;
          </Link>
        </section>
      ) : null}

      {/* What I'm into */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          {t.into}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {interests.map(({ label, description, link }) => (
            <Link
              key={link}
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
      {posts.length > 0 ? (
        <section className="mb-20">
          <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
            {t.recentlyWritten}
          </h2>
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
                    {formatDate(post.date, locale, { month: 'short', day: 'numeric' })}
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
          <Link
            href={localizePath(locale, '/writing')}
            className="inline-block mt-6 text-sm text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            {t.allPosts} &rarr;
          </Link>
        </section>
      ) : null}

      {/* Connect */}
      <section>
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          {t.elsewhere}
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
