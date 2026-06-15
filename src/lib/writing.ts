import {
  getAllNotionPosts,
  getNotionPostBySlug,
  getNotionPostsByCategory,
} from './notion'

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  category: string
  content: string
}

export async function getAllPosts(): Promise<Post[]> {
  return getAllNotionPosts()
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  return getNotionPostsByCategory(category)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return getNotionPostBySlug(slug)
}
