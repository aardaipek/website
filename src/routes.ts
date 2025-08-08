import { RouteObject } from "react-router-dom";
import { lazy, createElement } from "react";

// Lazy load components for better performance
const Index = lazy(() => import('./views'));
const BookmarkPage = lazy(() => import('./views/bookmark'));
const AboutPage = lazy(() => import('./views/about'));
const SettingsPage = lazy(() => import('./views/settings'));
const PortfolioPage = lazy(() => import('./views/portfolio'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: createElement(Index)
  },
  {
    path: '/about',
    element: createElement(AboutPage)
  },
  {
    path: '/settings',
    element: createElement(SettingsPage)
  },
  {
    path: '/portfolio',
    element: createElement(PortfolioPage)
  },
  {
    path: '/bookmark',
    element: createElement(BookmarkPage)
  }
];