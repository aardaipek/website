import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isPortfolioNavVisible, setIsPortfolioNavVisible] = useState(false)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const isOnPortfolioPage = window.location.pathname === '/portfolio'
    const hasTrue = searchParams.has('true')
    setIsPortfolioNavVisible(isOnPortfolioPage && hasTrue)

    const handlePortfolioVisibility = (event: CustomEvent) => {
      setIsPortfolioNavVisible(event.detail.visible)
    }

    window.addEventListener(
      'portfolioVisibilityChange',
      handlePortfolioVisibility as EventListener,
    )

    const handleNavigation = () => {
      const searchParams = new URLSearchParams(window.location.search)
      const isOnPortfolioPage = window.location.pathname === '/portfolio'
      const hasTrue = searchParams.has('true')
      setIsPortfolioNavVisible(isOnPortfolioPage && hasTrue)
    }

    window.addEventListener('popstate', handleNavigation)

    return () => {
      window.removeEventListener(
        'portfolioVisibilityChange',
        handlePortfolioVisibility as EventListener,
      )
      window.removeEventListener('popstate', handleNavigation)
    }
  }, [])

  return (
    <header>
      <nav className="container mx-auto flex justify-center items-center py-2">
        <ul className="flex justify-center items-center space-x-8 font-medium w-auto mt-0">
          <li>
            <a
              href="/"
              className="block py-2 px-3 md:p-0 text-orange-800 hover:text-orange-500 hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block py-2 px-3 md:p-0 text-orange-800 hover:text-orange-500 hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@aardaipek"
              target="_blank"
              className="block py-2 px-3 md:p-0 text-orange-800 hover:text-orange-500 hover:underline"
            >
              Writings
            </a>
          </li>
          {isPortfolioNavVisible && (
            <li>
              <a
                href="/portfolio?true"
                className="block py-2 px-3 md:p-0 text-orange-800 hover:text-orange-500 hover:underline"
              >
                Portfolio
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
