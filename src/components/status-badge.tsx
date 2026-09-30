import type { ProjectStatus } from '@/lib/projects'

const dotColor: Record<ProjectStatus, string> = {
  live: 'bg-emerald-500',
  soon: 'bg-amber-500',
  building: 'bg-sky-500',
}

const textColor: Record<ProjectStatus, string> = {
  live: 'text-emerald-600 dark:text-emerald-400',
  soon: 'text-amber-700 dark:text-amber-500',
  building: 'text-sky-700 dark:text-sky-400',
}

export function StatusBadge({
  status,
  label,
}: {
  status: ProjectStatus
  label: string
}) {
  return (
    <span className={`flex items-center gap-1.5 text-xs shrink-0 ${textColor[status]}`}>
      <span className="relative flex h-2 w-2">
        {status === 'live' ? (
          <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        ) : null}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor[status]}`} />
      </span>
      {label}
    </span>
  )
}
