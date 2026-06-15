'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '/writing', label: 'Writing' },
  { href: '/investing', label: 'Investing' },
  { href: '/projects', label: 'Projects' },
  { href: '/bookshelf', label: 'Bookshelf' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkClass = (href: string) =>
    `transition-colors ${
      pathname === href || pathname.startsWith(href + '/')
        ? 'text-stone-900 dark:text-stone-100'
        : 'text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
    }`

  return (
    <nav className="w-full max-w-2xl mx-auto px-6 pt-8">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-stone-900 dark:text-stone-100 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
        >
          arda ipek
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={`text-sm ${linkClass(href)}`}>
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 pb-2 border-t border-stone-200 dark:border-stone-800 pt-4">
          <div className="flex flex-col gap-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-sm ${linkClass(href)}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
