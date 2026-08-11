const items = [
  'proof-of-work',
  'static-first',
  'self-hosted',
  'zero-dependency',
  'open-protocols',
  'edge-deployed',
  'MIT-licensed',
  'permissionless',
  'read-the-source',
  'sound-money',
]

export function Ticker() {
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden border-b border-border bg-card/40 py-3">
      <div className="flex w-max animate-ticker gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-xs text-muted-foreground"
          >
            {item}
            <span className="text-primary" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
