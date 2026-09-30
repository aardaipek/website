/// <reference types="react/canary" />
import * as React from 'react'
import type { ReactNode, ViewTransitionProps } from 'react'

/**
 * Next 15 ships `<ViewTransition>` as `unstable_ViewTransition` in its bundled
 * React (enabled by `experimental.viewTransition`). Re-exporting it here keeps
 * the unstable name in one place — swap to `import { ViewTransition } from 'react'`
 * when upgrading to Next 16.
 */
const react = React as unknown as {
  unstable_ViewTransition: React.ExoticComponent<ViewTransitionProps>
  unstable_addTransitionType: (type: string) => void
}

export const ViewTransition = react.unstable_ViewTransition
export const addTransitionType = react.unstable_addTransitionType

export type NavDirection = 'nav-forward' | 'nav-back'

/**
 * Page-level wrapper: slides on hierarchical navigation (list ↔ detail) and
 * stays still on every other transition.
 */
export function DirectionalTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
      exit={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
      default="none"
    >
      {children}
    </ViewTransition>
  )
}

/** Shared name for a project title, used by both the list and the detail page. */
export function projectTitleName(slug: string) {
  return `project-title-${slug}`
}
