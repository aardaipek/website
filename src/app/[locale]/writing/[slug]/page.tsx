import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/writing'
import { formatDate } from '@/lib/format'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { Metadata } from 'next'
import { isLocale } from '@/i18n/config'
import { pageMetadata } from '@/i18n/metadata'

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const base = pageMetadata(locale, `/writing/${slug}`, {
    title: post.title,
    description: post.summary,
  })
  return {
    ...base,
    openGraph: { ...base.openGraph, type: 'article', publishedTime: post.date },
  }
}

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article>
      <header className="mb-10">
        <h1 className="font-serif text-3xl mb-3">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-stone-400 dark:text-stone-500">
          <time dateTime={post.date}>
            {formatDate(post.date, locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.category ? (
            <>
              <span className="text-stone-300 dark:text-stone-600">/</span>
              <span>{post.category}</span>
            </>
          ) : null}
        </div>
      </header>
      <div className="prose">
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </article>
  )
}
