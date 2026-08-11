import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PostBody } from '@/components/post-body'
import { posts, getPost, formatDate } from '@/lib/posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Not found — bitmine.tech' }
  return {
    title: `${post.title} — bitmine.tech`,
    description: post.summary,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 sm:px-6">
        <article className="py-14 sm:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-primary">$</span> cd ../blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span className="text-border">/</span>
            <span className="rounded border border-border px-1.5 py-0.5 uppercase tracking-wide text-primary">
              {post.tag}
            </span>
            <span className="text-border">/</span>
            <span>{post.readingTime} read</span>
          </div>

          <h1 className="mt-4 text-balance font-sans text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {post.summary}
          </p>

          <hr className="my-10 border-border" />

          <PostBody blocks={post.content} />
        </article>

        <section className="border-t border-border py-12">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="text-primary">//</span> keep reading
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {more.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wide text-primary">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 flex items-start gap-1.5 font-sans text-base font-semibold tracking-tight text-balance group-hover:text-primary">
                    {p.title}
                    <ArrowUpRight
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
