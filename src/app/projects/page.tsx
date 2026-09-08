import type { Metadata } from 'next'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I build and contribute to.',
}

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-2">Projects</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-12">
        Things I build — some for work, some for curiosity.
      </p>

      <div className="space-y-8">
        {projects.map((project) => {
          const Wrapper = project.link ? 'a' : 'div'
          const wrapperProps = project.link
            ? {
                href: project.link,
                target: '_blank' as const,
                rel: 'noopener noreferrer',
              }
            : {}

          return (
            <Wrapper
              key={project.name}
              {...wrapperProps}
              className="group block p-5 -mx-5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-stone-900 dark:text-stone-100 font-medium group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                    {project.name}
                  </h2>
                  {project.live && (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      Live
                    </span>
                  )}
                </div>
                {project.link && (
                  <span className="text-stone-300 dark:text-stone-600 shrink-0 text-sm">
                    &#8599;
                  </span>
                )}
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-stone-400 dark:text-stone-500 border border-stone-200 dark:border-stone-800 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}
