import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { posts, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — bitmine.tech',
  description:
    'Notes on Bitcoin mining, running nodes, and building a faster, more open static web.',
}

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))

export default function BlogIndex() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <section className="grid-bg border-b border-border py-16 sm:py-24">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="text-primary">//</span> blog
          </div>
          <h1 className="mt-3 text-balance font-sans text-4xl font-bold tracking-tight sm:text-5xl">
            Notes from the rig
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Field notes on Bitcoin mining, running your own node, and shipping a
            faster, more open static web. Written between blocks.
          </p>
        </section>

        <section className="py-8 sm:py-12">
          <ul className="divide-y divide-border border-b border-border">
            {sorted.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-3 py-6 transition-colors sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <div className="flex shrink-0 items-center gap-3 sm:w-40">
                    <span className="font-mono text-xs text-muted-foreground">
                      {formatDate(post.date)}
                    </span>
                    <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary">
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="flex items-start gap-1.5 font-sans text-lg font-semibold tracking-tight text-balance group-hover:text-primary">
                      {post.title}
                      <ArrowUpRight
                        className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </h2>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {post.summary}
                    </p>
                    <span className="mt-2 inline-block font-mono text-xs text-muted-foreground">
                      {post.readingTime} read
                    </span>
                  </div>
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
