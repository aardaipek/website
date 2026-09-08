export type Project = {
  name: string
  /** Short one-liner used on the homepage list. */
  tagline: string
  /** Longer copy used on the /projects page. */
  description: string
  tags: string[]
  link?: string
  live?: boolean
  /** Featured projects get the big card on the homepage. */
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Galata Finance',
    tagline: 'Portfolio tracking and market research for Turkish investors.',
    description:
      'A finance and investment research tool built for Turkish investors — portfolio tracking across BIST, US equities and gold, cash flow, and LLM-assisted market analysis. Built solo: NestJS on the backend, React on the front.',
    tags: ['Finance', 'NestJS', 'React', 'LLM'],
    link: 'https://galatafinance.com',
    live: true,
    featured: true,
  },
  {
    name: 'ardaipek.net',
    tagline: 'This website — writing, projects, and notes.',
    description:
      'This website. A personal space for writing, projects, and sharing what I learn. Built with Next.js, Notion as the CMS, and Tailwind CSS.',
    tags: ['Personal', 'Next.js'],
    link: 'https://ardaipek.net',
    live: true,
  },
]

export const featuredProject = projects.find((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
