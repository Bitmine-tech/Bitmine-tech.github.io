const principles = [
  {
    title: 'Own your stack',
    body: 'No black boxes. Static output and open protocols mean you never depend on someone else staying in business.',
  },
  {
    title: 'Decentralize by default',
    body: 'From Bitcoin to the web, systems should route around control. Self-hostable, forkable, and yours.',
  },
  {
    title: 'Small tools, sharp edges',
    body: 'Composable programs that do one job well beat monoliths. Read the source in an afternoon.',
  },
]

export function Manifesto() {
  return (
    <section id="manifesto" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="text-primary">//</span> manifesto
            </div>
            <h2 className="mt-2 text-balance font-sans text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              I build for a web that
              <span className="text-primary"> nobody owns.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I&apos;ve spent years at the intersection of proof-of-work and the
              open web — running mining hardware and shipping the static tooling
              that keeps the internet cheap, fast and permissionless. Sound
              money and sound software follow the same rules.
            </p>
          </div>

          <ul className="space-y-px overflow-hidden rounded border border-border bg-border">
            {principles.map((p) => (
              <li key={p.title} className="flex gap-4 bg-card p-5">
                <span
                  className="mt-1.5 size-2 shrink-0 rotate-45 bg-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-sans text-base font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
