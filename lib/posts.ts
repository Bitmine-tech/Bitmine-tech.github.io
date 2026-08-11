export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'code'; lang?: string; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export type Post = {
  slug: string
  title: string
  summary: string
  date: string
  readingTime: string
  tag: 'mining' | 'static-web'
  content: Block[]
}

export const posts: Post[] = [
  {
    slug: 'why-i-run-my-own-node',
    title: 'Why I still run my own full node',
    summary:
      'Verification is the whole point. A short case for keeping a full node humming next to the miner, even when it costs you an SSD and a little patience.',
    date: '2026-07-28',
    readingTime: '5 min',
    tag: 'mining',
    content: [
      {
        type: 'p',
        text: 'There is a quiet temptation in Bitcoin to outsource trust. Point your wallet at someone else\u2019s server, mine into a pool that hands you a template, and never think about consensus again. It works, right up until it doesn\u2019t. Running my own full node is the one habit I refuse to drop, and it is cheaper than most people assume.',
      },
      { type: 'h2', text: 'Don\u2019t trust, verify' },
      {
        type: 'p',
        text: 'A full node downloads every block and checks every rule for itself: the 21 million cap, the subsidy schedule, signature validity, no double spends. When my node says a payment is final, it is not taking anyone\u2019s word for it. That single property \u2014 local verification \u2014 is what turns Bitcoin from an IOU into money you actually hold.',
      },
      {
        type: 'quote',
        text: 'A node you do not run is a promise someone else made on your behalf.',
      },
      { type: 'h2', text: 'The setup is boring, which is good' },
      {
        type: 'p',
        text: 'Boring infrastructure is the best kind. My node runs headless on a low-power box with a 2 TB SSD. Initial block download takes a day or two; after that it sips a few watts and syncs new blocks in seconds. I expose it only over Tor and my local network.',
      },
      {
        type: 'code',
        lang: 'bash',
        text: '# minimal bitcoin.conf for a verifying node\nserver=1\ntxindex=0\nprune=0\ndbcache=2048\nblocksonly=1\n# reach the network privately\nproxy=127.0.0.1:9050\nlisten=1',
      },
      {
        type: 'p',
        text: 'With blocksonly=1 the node skips the mempool relay firehose, which keeps bandwidth low on a home connection. If you want fee estimates and a live mempool, drop that line \u2014 it is a trade, not a rule.',
      },
      { type: 'h2', text: 'What it changes day to day' },
      {
        type: 'ul',
        items: [
          'My wallet queries my node, so no third party learns my addresses.',
          'Mining templates can be validated against my own chain tip.',
          'Software upgrades are a vote I get to cast, not one cast for me.',
        ],
      },
      {
        type: 'p',
        text: 'None of this is glamorous. But sovereignty rarely is \u2014 it looks like a small fanless computer blinking in a closet, doing exactly what it promised.',
      },
    ],
  },
  {
    slug: 'static-first-web',
    title: 'The static-first web is faster than your framework',
    summary:
      'Most sites do not need a server at render time. Here is how I ship pre-built HTML to the edge and why it beats a runtime for 90% of what I build.',
    date: '2026-07-10',
    readingTime: '6 min',
    tag: 'static-web',
    content: [
      {
        type: 'p',
        text: 'Every site I ship starts from a stubborn question: does this page actually need a computer thinking about it when a visitor arrives? For a blog, a docs site, a landing page, or a portfolio, the honest answer is almost always no. The HTML is knowable ahead of time, so I build it ahead of time.',
      },
      { type: 'h2', text: 'Pre-render, then get out of the way' },
      {
        type: 'p',
        text: 'Static-first means the HTML exists as a file before anyone requests it. No cold starts, no database round trips on the critical path, no server to keep warm. A CDN hands the visitor a finished document from the nearest edge, and the browser paints it immediately.',
      },
      {
        type: 'code',
        lang: 'ts',
        text: '// generate every page at build time\nexport function generateStaticParams() {\n  return posts.map((p) => ({ slug: p.slug }))\n}\n\n// no runtime data fetching \u2014 the HTML is the artifact',
      },
      { type: 'h2', text: 'The performance is not a coincidence' },
      {
        type: 'p',
        text: 'When there is nothing to compute at request time, Time to First Byte collapses to the network round trip. Largest Contentful Paint follows, because the content is in the first response instead of arriving after a hydration dance. You are not optimizing a slow thing \u2014 you removed the slow thing.',
      },
      {
        type: 'ul',
        items: [
          'TTFB is a CDN lookup, not a function invocation.',
          'No server bill that scales with traffic spikes.',
          'The whole site is cacheable, mirror-able, and archivable.',
        ],
      },
      { type: 'h2', text: 'Add dynamism at the edges, not the center' },
      {
        type: 'quote',
        text: 'Ship HTML by default. Reach for a server only where the page genuinely cannot be known in advance.',
      },
      {
        type: 'p',
        text: 'Search, comments, a cart \u2014 those are islands. Render them on the client or hit a small API just for that slice. The other 95% of the page stays static and instant. Static-first is not anti-JavaScript; it is JavaScript on a budget, spent only where it buys something.',
      },
    ],
  },
  {
    slug: 'reading-your-hashrate',
    title: 'What your hashrate is actually telling you',
    summary:
      'Terahashes per second is a vanity number until you tie it to watts, temperature, and shares. A field guide to reading a miner like an instrument.',
    date: '2026-06-22',
    readingTime: '7 min',
    tag: 'mining',
    content: [
      {
        type: 'p',
        text: 'A miner will happily show you a big TH/s figure and let you feel good about it. But hashrate in isolation is like reading a car\u2019s RPM with no idea of the speed, the fuel burn, or the engine temperature. The number only means something once you divide it by what it costs you.',
      },
      { type: 'h2', text: 'Efficiency is the real headline' },
      {
        type: 'p',
        text: 'The metric that actually pays your electricity bill is joules per terahash (J/TH). A machine doing 100 TH/s at 30 J/TH is worlds apart from one doing 100 TH/s at 45 J/TH. Same top-line hashrate, wildly different economics.',
      },
      {
        type: 'code',
        lang: 'text',
        text: 'efficiency (J/TH) = power_draw_watts / hashrate_TH\n\n3200 W / 100 TH  = 32 J/TH   \u2192 healthy\n3600 W / 100 TH  = 36 J/TH   \u2192 check cooling / firmware',
      },
      { type: 'h2', text: 'Accepted vs. rejected shares' },
      {
        type: 'p',
        text: 'Your pool counts the valid work you submit as shares. A small reject rate is normal; a climbing one is a symptom. It usually means stale work from network latency, an overclock that pushed silicon past its stable point, or a flaky connection to the pool.',
      },
      {
        type: 'ul',
        items: [
          'Reject rate under ~1% \u2014 generally fine, keep watching.',
          'Sudden spike \u2014 suspect network latency or a dropped pool connection.',
          'Slow creep with heat \u2014 back off the overclock before a chip fails.',
        ],
      },
      { type: 'h2', text: 'Temperature is the ceiling on everything' },
      {
        type: 'quote',
        text: 'Heat is the tax on every extra hash. Pay attention to it before the hardware forces you to.',
      },
      {
        type: 'p',
        text: 'ASIC chips throttle or degrade when they run hot. Good airflow and a sane ambient temperature buy you both efficiency and longevity. I log board temperatures next to hashrate on one dashboard, because the two lines tell a story neither tells alone \u2014 which is exactly why the rig panel on my home page plots them together.',
      },
    ],
  },
  {
    slug: 'tools-for-the-open-web',
    title: 'Small tools, sharp edges: building for the open web',
    summary:
      'Why I keep writing tiny, single-purpose programs you can read in an afternoon \u2014 and how that philosophy connects mining and web building.',
    date: '2026-06-05',
    readingTime: '5 min',
    tag: 'static-web',
    content: [
      {
        type: 'p',
        text: 'The through-line between running a miner and building static sites is the same instinct: prefer systems you can inspect, fork, and own. Bitcoin gave me a mental model \u2014 open protocol, verifiable rules, no gatekeeper \u2014 and I keep applying it to the tools I write for the web.',
      },
      { type: 'h2', text: 'One job, done well' },
      {
        type: 'p',
        text: 'A tool that does one thing is a tool you can actually understand. My generators, log parsers, and deploy scripts are each small enough to read start to finish. When something breaks, I am debugging a program, not archaeology.',
      },
      {
        type: 'code',
        lang: 'bash',
        text: '# a build pipeline that fits in your head\nbuild   -> render markdown to HTML\noptimize-> compress images, inline critical CSS\ndeploy  -> push static files to the edge',
      },
      { type: 'h2', text: 'Own the whole stack' },
      {
        type: 'ul',
        items: [
          'No black boxes: static output means no vendor can strand you.',
          'Forkable: every tool ships with its source, MIT-licensed.',
          'Portable: plain HTML outlives whatever framework is trendy this year.',
        ],
      },
      {
        type: 'quote',
        text: 'Decentralize by default. Self-hostable, forkable, and yours \u2014 whether it mines blocks or renders pages.',
      },
      { type: 'h2', text: 'Where it goes next' },
      {
        type: 'p',
        text: 'I am slowly turning the scripts behind this site into a proper open toolkit \u2014 a static generator tuned for people who also run infrastructure. If any of this resonates, the repos are public and pull requests are genuinely welcome. The open web only stays open if we keep building for it.',
      },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
