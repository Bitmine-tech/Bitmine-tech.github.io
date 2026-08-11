import { ArrowUpRight, LucideStar as Star } from 'lucide-react'

const tools = [
  {
    name: 'staticforge',
    tag: 'static-site-generator',
    lang: 'Rust',
    desc: 'Zero-config static site builder. Markdown in, blazing HTML out — no runtime, no lock-in.',
    stars: '2.1k',
  },
  {
    name: 'blockwatch',
    tag: 'bitcoin-node-monitor',
    lang: 'Go',
    desc: 'Lightweight dashboard for your full node. Track mempool, hashrate and block propagation in real time.',
    stars: '870',
  },
  {
    name: 'htmx-kit',
    tag: 'web-components',
    lang: 'TypeScript',
    desc: 'A tiny set of dependency-free components for building interactive pages that ship as plain HTML.',
    stars: '1.4k',
    url: 'https://htmx.org/',
  },
  {
    name: 'satsplit',
    tag: 'lightning-payments',
    lang: 'TypeScript',
    desc: 'Split Lightning payments across contributors with a single invoice. Open protocol, self-hostable.',
    stars: '640',
  },
  {
    name: 'coldvault',
    tag: 'cold-storage-cli',
    lang: 'Rust',
    desc: 'Air-gapped key management for the paranoid. Deterministic, auditable, and fully offline.',
    stars: '1.9k',
  },
  {
    name: 'edgepress',
    tag: 'ssg-deploy',
    lang: 'Shell',
    desc: 'One command to publish any static folder to the edge. Works with any host, no vendor magic.',
    stars: '520',
  },
]

export function Tools() {
  return (
    <section id="tools" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="text-primary">//</span> open source — MIT licensed
        </div>
        <h2 className="mt-2 font-sans text-2xl font-bold tracking-tight sm:text-3xl">
          Tools for the open web
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Small, sharp programs that do one thing well. Every project is free
          software you can read, fork and run yourself.
        </p>

        <ul className="mt-8 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
          {tools.map((tool) => (
            <li key={tool.name} className="bg-card">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col p-5 transition-colors hover:bg-secondary"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-base font-semibold">
                      {tool.name}
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="size-3 text-primary" aria-hidden="true" />
                    {tool.stars}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {tool.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[11px]">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                    {tool.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="size-2 rounded-full bg-primary/60" />
                    {tool.lang}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
