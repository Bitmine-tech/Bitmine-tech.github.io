import Link from 'next/link'
import { GitFork as Github, LucideTerminal as Terminal } from 'lucide-react'

const nav = [
  { label: 'rig', href: '/#rig' },
  { label: 'tools', href: '/#tools' },
  { label: 'blog', href: '/blog' },
  { label: 'manifesto', href: '/#manifesto' },
  { label: 'contact', href: '/#contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-sm">
          <Terminal className="size-4 text-primary" aria-hidden="true" />
          <span className="font-semibold tracking-tight">bitmine.tech</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <span className="text-primary">/</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded border border-border px-3 py-1.5 text-xs transition-colors hover:border-primary hover:text-primary"
        >
          <Github className="size-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  )
}
