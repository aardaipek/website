import type { Project } from '@/lib/projects'
import type { Dictionary } from '@/i18n/dictionaries'
import { StatusBadge } from './status-badge'
import { TagList } from './tag-list'
import { TransitionLink } from './transition-link'
import { ViewTransition, projectTitleName } from './view-transition'

type Props = {
  project: Project
  href?: string
  labels: Dictionary['projects']['status']
}

/**
 * Card used on /projects. Projects with a detail page link to it and morph
 * their title into the detail heading; teasers render as a plain card.
 */
export function ProjectCard({ project, href, labels }: Props) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <ViewTransition
          name={projectTitleName(project.slug)}
          share="text-morph"
          default="none"
        >
          <h3 className="text-stone-900 dark:text-stone-100 font-medium group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
            {project.name}
          </h3>
        </ViewTransition>
        <StatusBadge status={project.status} label={labels[project.status]} />
      </div>
      <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">
        {project.tagline}
      </p>
      {project.platforms.length > 0 || project.stack ? (
        <div className="mt-3">
          <TagList tags={[...project.platforms, ...(project.stack ?? []).slice(0, 3)]} />
        </div>
      ) : null}
    </>
  )

  const className =
    'group block p-5 -mx-5 rounded-lg transition-colors'

  return href ? (
    <TransitionLink
      href={href}
      direction="nav-forward"
      className={`${className} hover:bg-stone-100 dark:hover:bg-stone-900`}
    >
      {body}
    </TransitionLink>
  ) : (
    <div className={className}>{body}</div>
  )
}
