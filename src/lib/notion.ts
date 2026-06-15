import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })

const databaseId = process.env.NOTION_DATABASE_ID!
const resourcesDatabaseId = process.env.NOTION_RESOURCES_DATABASE_ID

export type NotionPost = {
  slug: string
  title: string
  date: string
  summary: string
  category: string
  content: string
}

function getProperty(page: PageObjectResponse, name: string) {
  const prop = page.properties[name]
  if (!prop) return ''

  switch (prop.type) {
    case 'title':
      return prop.title.map((t) => t.plain_text).join('')
    case 'rich_text':
      return prop.rich_text.map((t) => t.plain_text).join('')
    case 'date':
      return prop.date?.start || ''
    case 'select':
      return prop.select?.name || ''
    case 'checkbox':
      return prop.checkbox
    case 'number':
      return prop.number ?? 0
    case 'url':
      return prop.url || ''
    default:
      return ''
  }
}

export async function getAllNotionPosts(): Promise<NotionPost[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: { equals: true },
    },
    sorts: [{ property: 'Date', direction: 'descending' }],
  })

  const posts: NotionPost[] = []

  for (const page of response.results) {
    if (!('properties' in page)) continue
    const p = page as PageObjectResponse

    posts.push({
      slug: (getProperty(p, 'Slug') as string) || p.id,
      title: getProperty(p, 'Title') as string,
      date: getProperty(p, 'Date') as string,
      summary: getProperty(p, 'Summary') as string,
      category: getProperty(p, 'Category') as string,
      content: '', // loaded on demand
    })
  }

  return posts
}

export async function getNotionPostsByCategory(
  category: string
): Promise<NotionPost[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        { property: 'Published', checkbox: { equals: true } },
        { property: 'Category', select: { equals: category } },
      ],
    },
    sorts: [{ property: 'Date', direction: 'descending' }],
  })

  const posts: NotionPost[] = []

  for (const page of response.results) {
    if (!('properties' in page)) continue
    const p = page as PageObjectResponse

    posts.push({
      slug: (getProperty(p, 'Slug') as string) || p.id,
      title: getProperty(p, 'Title') as string,
      date: getProperty(p, 'Date') as string,
      summary: getProperty(p, 'Summary') as string,
      category: getProperty(p, 'Category') as string,
      content: '',
    })
  }

  return posts
}

// --- Resources ---

export type NotionResource = {
  name: string
  description: string
  link: string
  category: string
  order: number
}

export async function getAllNotionResources(): Promise<NotionResource[]> {
  if (!resourcesDatabaseId) return []

  const response = await notion.databases.query({
    database_id: resourcesDatabaseId,
    sorts: [
      { property: 'Category', direction: 'ascending' },
      { property: 'Order', direction: 'ascending' },
    ],
  })

  const resources: NotionResource[] = []

  for (const page of response.results) {
    if (!('properties' in page)) continue
    const p = page as PageObjectResponse

    resources.push({
      name: getProperty(p, 'Name') as string,
      description: getProperty(p, 'Description') as string,
      link: getProperty(p, 'URL') as string,
      category: getProperty(p, 'Category') as string,
      order: getProperty(p, 'Order') as number,
    })
  }

  return resources
}

export async function getNotionPostBySlug(
  slug: string
): Promise<NotionPost | null> {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        { property: 'Slug', rich_text: { equals: slug } },
        { property: 'Published', checkbox: { equals: true } },
      ],
    },
  })

  const page = response.results[0]
  if (!page || !('properties' in page)) return null

  const p = page as PageObjectResponse
  const mdBlocks = await n2m.pageToMarkdown(page.id)
  const mdString = n2m.toMarkdownString(mdBlocks)

  return {
    slug,
    title: getProperty(p, 'Title') as string,
    date: getProperty(p, 'Date') as string,
    summary: getProperty(p, 'Summary') as string,
    category: getProperty(p, 'Category') as string,
    content: mdString.parent,
  }
}
