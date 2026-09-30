import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { StatusBadge } from '@/components/status-badge'
import { TagList } from '@/components/tag-list'
import { TransitionLink } from '@/components/transition-link'
import {
  DirectionalTransition,
  ViewTransition,
  projectTitleName,
} from '@/components/view-transition'
import { isLocale, localeTags, localizePath, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/i18n/metadata'
import { detailSlugs, getProject } from '@/lib/projects'

export const dynamicParams = false

export function generateStaticParams() {
  return detailSlugs.map((slug) => ({ slug }))
}

type Props = { params: Promise<{ locale: string; slug: string }> }

async function load(params: Props['params']) {
  const { locale, slug } = await params
  if (!isLocale(locale)) return null
  const project = getProject(locale, slug)
  if (!project?.detail) return null
  return { locale, project, detail: project.detail }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await load(params)
  if (!data) return {}
  const { locale, project } = data
  return pageMetadata(locale, `/projects/${project.slug}`, {
    title: project.name,
    description: project.tagline,
  })
}

function formatMonth(yearMonth: string, locale: Locale) {
  return new Date(`${yearMonth}-01T00:00:00Z`).toLocaleDateString(localeTags[locale], {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default async function ProjectPage({ params }: Props) {
  const data = await load(params)
  if (!data) notFound()
  const { locale, project, detail } = data
  const t = getDictionary(locale).projects

  const meta = [
    project.platforms.length > 0
      ? { label: t.platforms, value: project.platforms.join(', ') }
      : null,
    { label: t.since, value: formatMonth(project.startedAt, locale) },
    { label: t.role, value: t.solo },
  ].filter((item) => item !== null)

  return (
    <DirectionalTransition>
      <article>
        <TransitionLink
          href={localizePath(locale, '/projects')}
          direction="nav-back"
          className="inline-block text-sm text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-10"
        >
          &larr; {t.back}
        </TransitionLink>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
            <ViewTransition name={projectTitleName(project.slug)} share="text-morph">
              <h1 className="font-serif text-4xl">{project.name}</h1>
            </ViewTransition>
            <StatusBadge status={project.status} label={t.status[project.status]} />
          </div>
          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            {project.tagline}
          </p>

          {project.links ? (
            <div className="flex flex-wrap gap-2 mt-6">
              {project.links.map(({ kind, href }) => (
                <a
                  key={kind}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm rounded-full border border-stone-200 dark:border-stone-800 px-3.5 py-1.5 text-stone-700 dark:text-stone-300 hover:border-amber-700/50 hover:text-amber-700 dark:hover:border-amber-500/50 dark:hover:text-amber-500 transition-colors"
                >
                  {t.links[kind]}
                  <span aria-hidden className="text-stone-300 dark:text-stone-600">
                    &#8599;
                  </span>
                </a>
              ))}
            </div>
          ) : null}
        </header>

        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 mb-10 border-y border-stone-200 dark:border-stone-800 text-sm">
          {meta.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-stone-400 dark:text-stone-500">{label}</dt>
              <dd className="text-stone-900 dark:text-stone-100 mt-0.5">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed mb-12">
          {detail.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-5">
            {t.whatItDoes}
          </h2>
          <ul className="space-y-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {detail.highlights.map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="text-stone-300 dark:text-stone-600 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-5">
            {t.whereItStands}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {detail.now}
          </p>
        </section>

        {project.stack ? (
          <section>
            <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-5">
              {t.builtWith}
            </h2>
            <TagList tags={project.stack} />
          </section>
        ) : null}
      </article>
    </DirectionalTransition>
  )
}
