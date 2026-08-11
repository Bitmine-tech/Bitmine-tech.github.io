import {
  GitFork as Github,
  LucideMail as Mail,
  LucideRss as Rss,
  AtSign as Twitter,
} from 'lucide-react'

const links = [
  { label: 'GitHub', href: 'https://github.com/Bitmine-tech', icon: Github },
  { label: 'X / Twitter', href: 'https://x.com/Bitminetech_id', icon: Twitter },
  { label: 'RSS', href: '#', icon: Rss },
  { label: 'Email', href: 'mailto:hello@bitmine.tech', icon: Mail },
]

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="rounded border border-border bg-card p-8 sm:p-12">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="text-primary">//</span> contact
          </div>
          <h2 className="mt-2 text-balance font-sans text-2xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something
            <span className="text-primary"> open.</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Open to collaboration on Bitcoin tooling, static site infrastructure
            and free software in general. Pull requests welcome.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded border border-border px-4 py-2 text-xs transition-colors hover:border-primary hover:text-primary"
              >
                <link.icon className="size-3.5" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>
            <span className="text-primary">$</span> built static · deployed to
            the edge · © {new Date().getFullYear()} bitmine.tech
          </span>
          <span>no cookies · no trackers · just HTML</span>
        </div>
      </div>
    </footer>
  )
}
