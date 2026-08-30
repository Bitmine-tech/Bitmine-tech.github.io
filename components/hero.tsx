import { ArrowUpRight, Bitcoin } from 'lucide-react'
import { EarningsTicker } from './earnings-ticker'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <EarningsTicker />

        <p className="mb-4 font-mono text-sm text-muted-foreground">
  Mis₿ah Elhamid | ₿itminetech |{' '}
  <a
    href="https://chain-of-thought.org/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:text-red-400 transition-colors"
  >
    We Like It >_ Chain of Thought
  </a>
</p>

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          available for open-source collaboration
        </div>

        <h1 className="mt-6 max-w-3xl text-pretty font-sans text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Bitcoin miner &amp; static web builder
          <span className="text-primary"> developer</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Crafting tools for the open web. I hash blocks by night and ship fast,
          dependency-light static sites by day — everything built to run
          anywhere, owned by no one.
        </p>

       <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
  <a
    href="#tools"
    className="inline-flex items-center justify-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
  >
    <Bitcoin className="size-4" aria-hidden="true" />
    View my tools
  </a>

  <a
    href="#contact"
    className="inline-flex items-center justify-center gap-2 rounded border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
  >
    Get in touch
    <ArrowUpRight className="size-4" aria-hidden="true" />
  </a>
</div>

{/* ===== Avatar Besar di Kanan ===== */}
<div className="bitmine-avatar-wrapper">
  <img
    src="/bitminetech-avatar.png"
    alt="bitminetech"
    className="bitmine-avatar"
  />
  <span className="coin coin-1">₿</span>
  <span className="coin coin-2">₿</span>
  <span className="coin coin-3">₿</span>
  <span className="coin coin-4">₿</span>
</div>

        <div className="mt-12 max-w-md rounded border border-border bg-card/60 p-4 text-xs text-muted-foreground">
          <span className="text-primary">$</span> whoami
          <br />
          <span className="text-foreground">
            {'>'} builder of miners, bundlers &amp; the small sharp tools between
          </span>
          <span className="cursor-blink ml-0.5 inline-block text-primary">_</span>
        </div>
      </div>
    </section>
  )
}
