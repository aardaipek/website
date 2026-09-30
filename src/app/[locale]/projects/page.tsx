import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectCard } from '@/components/project-card'
import { DirectionalTransition } from '@/components/view-transition'
import { isLocale, localizePath } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { pageMetadata } from '@/i18n/metadata'
import { getProjects, type Project } from '@/lib/projects'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { title, description } = getDictionary(locale).projects
  return pageMetadata(locale, '/projects', { title, description })
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getDictionary(locale).projects
  const projects = getProjects(locale)

  const groups: { title: string; items: Project[] }[] = [
    { title: t.shipped, items: projects.filter((p) => p.status === 'live') },
    { title: t.inTheWorks, items: projects.filter((p) => p.status !== 'live') },
  ]

  return (
    <DirectionalTransition>
      <div>
        <h1 className="font-serif text-3xl mb-2">{t.title}</h1>
        <p className="text-stone-500 dark:text-stone-400 mb-12 leading-relaxed">
          {t.intro}
        </p>

        {groups.map(({ title, items }) => (
          <section key={title} className="mb-14 last:mb-0">
            <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-4">
              {title}
            </h2>
            <div className="space-y-2">
              {items.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  labels={t.status}
                  href={
                    project.detail
                      ? localizePath(locale, `/projects/${project.slug}`)
                      : undefined
                  }
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </DirectionalTransition>
  )
}
