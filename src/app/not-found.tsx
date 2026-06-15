import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="font-serif text-4xl mb-4">404</h1>
      <p className="text-stone-500 dark:text-stone-400 mb-6">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
      >
        &larr; Back home
      </Link>
    </div>
  )
}
