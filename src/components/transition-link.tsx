'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { startTransition, type ComponentProps } from 'react'
import { addTransitionType, type NavDirection } from './view-transition'

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string
  direction: NavDirection
}

/**
 * `<Link>` that tags the navigation with a transition type so page-level
 * `<ViewTransition>`s can slide in the right direction. Next 16.2 replaces this
 * with `<Link transitionTypes>`.
 */
export function TransitionLink({ href, direction, ...props }: Props) {
  const router = useRouter()

  return (
    <Link
      href={href}
      onNavigate={(event) => {
        event.preventDefault()
        startTransition(() => {
          addTransitionType(direction)
          router.push(href)
        })
      }}
      {...props}
    />
  )
}
