import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Ticker } from '@/components/ticker'
import { MiningRig } from '@/components/mining-rig'
import { Tools } from '@/components/tools'
import { Manifesto } from '@/components/manifesto'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <MiningRig />
        <Tools />
        <Manifesto />
        <SiteFooter />
      </main>
    </div>
  )
}
