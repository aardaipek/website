import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/writing'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { Metadata } from 'next'

export const revalidate = 60

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article>
      <header className="mb-10">
        <h1 className="font-serif text-3xl mb-3">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-stone-400 dark:text-stone-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.category && (
            <>
              <span className="text-stone-300 dark:text-stone-600">/</span>
              <span>{post.category}</span>
            </>
          )}
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

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
