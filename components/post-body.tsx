import type { Block } from '@/lib/posts'

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="mt-4 text-balance font-sans text-xl font-bold tracking-tight sm:text-2xl"
              >
                {block.text}
              </h2>
            )
          case 'p':
            return (
              <p
                key={i}
                className="text-pretty text-[15px] leading-relaxed text-foreground/90"
              >
                {block.text}
              </p>
            )
          case 'ul':
            return (
              <ul key={i} className="flex flex-col gap-2">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[15px] leading-relaxed text-foreground/90"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rotate-45 bg-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'code':
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded border border-border bg-card p-4 text-xs leading-relaxed"
              >
                {block.lang ? (
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    {block.lang}
                  </span>
                ) : null}
                <code className="font-mono text-foreground/90">
                  {block.text}
                </code>
              </pre>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-primary pl-4 font-sans text-lg font-medium leading-snug text-balance text-foreground"
              >
                {block.text}
              </blockquote>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
