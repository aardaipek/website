import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind the person.',
}

export default function AboutPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-8">About</h1>

      <div className="space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed">
        <p>
          I&apos;m Arda. I was born and raised in Istanbul. I got into software
          because I liked the idea of building things that people actually use.
          No factory, no inventory &mdash; just a laptop and an idea.
        </p>

        <p>
          I started by turning Figma designs into HTML and CSS. Then I moved to
          Angular, built a few web apps, and eventually realized the interesting
          problems were happening behind the screen &mdash; data, APIs, system
          design, scale. That&apos;s how I became a backend developer.
        </p>

        <p>
          I&apos;ve worked at companies of different sizes. Small teams where
          everyone does everything. Bigger teams where coordination is the actual
          product. Both taught me something. At{' '}
          <strong className="text-stone-900 dark:text-stone-100 font-medium">
            PrimeApps
          </strong>
          , I learned to ship fast. At{' '}
          <strong className="text-stone-900 dark:text-stone-100 font-medium">
            Marti
          </strong>
          , I saw what it takes to build for millions. At{' '}
          <strong className="text-stone-900 dark:text-stone-100 font-medium">
            Prisync
          </strong>
          , I&apos;m deep in the product &mdash; building the backend that
          powers competitive pricing intelligence.
        </p>

        <p>
          But I&apos;m not just a developer. I spend a serious amount of time
          researching markets, reading about finance, and managing my own
          investment portfolio. It started with{' '}
          <em>Rich Dad, Poor Dad</em> and turned into a rabbit hole I never
          want to leave. I believe understanding money is as important as
          understanding code &mdash; they&apos;re both systems, and both reward
          long-term thinking.
        </p>

        <p>
          When I&apos;m not at a screen, you&apos;ll find me on my bike
          somewhere around Istanbul, watching an F1 race, or on the couch with
          Luna (my cat, who runs the house).
        </p>

        <p>
          This website is where all of these things come together. I write about
          what I learn, share what I build, and keep a record of things I
          don&apos;t want to forget.
        </p>
      </div>

      {/* Now section */}
      <section className="mt-16">
        <h2 className="text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-6">
          Now
        </h2>
        <div className="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
          <p>
            Working at Prisync on backend systems with Node.js (NestJS,
            Express).
          </p>
          <p>
            Running{' '}
            <a
              href="https://galatafinance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 dark:text-stone-100 font-medium underline underline-offset-2 decoration-stone-300 dark:decoration-stone-600 hover:decoration-amber-700 dark:hover:decoration-amber-500 transition-colors"
            >
              Galata Finance
            </a>{' '}
            in beta.
          </p>
          <p>Researching long-term investment strategies.</p>
          <p>Trying to write more consistently.</p>
        </div>
        <p className="text-xs text-stone-300 dark:text-stone-600 mt-4">
          Last updated: June 2026
        </p>
      </section>
    </div>
  )
}
