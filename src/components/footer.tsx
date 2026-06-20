const footerLinks = [
  { name: 'GitHub', href: 'https://github.com/aardaipek' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ardaipek' },
  { name: 'X', href: 'https://twitter.com/aardaipek' },
]

export function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-6 py-8">
      <div className="border-t border-stone-200 dark:border-stone-800 pt-8">
        <div className="flex items-center justify-between text-sm text-stone-400 dark:text-stone-500">
          <p>Arda Ipek</p>
          <div className="flex items-center gap-4">
            {footerLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
          <p>🤍 Sumy</p>
        </div>
      </div>
    </footer>
  )
}
