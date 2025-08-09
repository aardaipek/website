import { RouteObject } from 'react-router-dom'
import { lazy, createElement } from 'react'

const Index = lazy(() => import('./views'))
const BookmarkPage = lazy(() => import('./views/bookmark'))
const AboutPage = lazy(() => import('./views/about'))
const SettingsPage = lazy(() => import('./views/settings'))
const PortfolioPage = lazy(() => import('./views/portfolio'))

const PortfolioWrapper = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const isPortfolioVisible = searchParams.has('true')

  const navEvent = new CustomEvent('portfolioVisibilityChange', {
    detail: { visible: isPortfolioVisible },
  })
  window.dispatchEvent(navEvent)

  return createElement(PortfolioPage)
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: createElement(Index),
  },
  {
    path: '/about',
    element: createElement(AboutPage),
  },
  {
    path: '/settings',
    element: createElement(SettingsPage),
  },
  {
    path: '/portfolio',
    element: createElement(PortfolioWrapper),
  },
  {
    path: '/bookmark',
    element: createElement(BookmarkPage),
  },
]
