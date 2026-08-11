'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Activity,
  Cpu,
  LucideThermometer as Thermometer,
  LucideZap as Zap,
} from 'lucide-react'

function useHashrate() {
  const [hashrate, setHashrate] = useState(94.2)
  useEffect(() => {
    const id = setInterval(() => {
      setHashrate((prev) => {
        const next = prev + (Math.random() - 0.5) * 2.4
        return Math.min(99.9, Math.max(88, next))
      })
    }, 1200)
    return () => clearInterval(id)
  }, [])
  return hashrate
}

function HashGraph() {
  const [bars, setBars] = useState<number[]>(() =>
    Array.from({ length: 40 }, () => 40 + Math.random() * 55),
  )
  const ref = useRef<number[]>(bars)
  ref.current = bars
  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => [...prev.slice(1), 40 + Math.random() * 55])
    }, 700)
    return () => clearInterval(id)
  }, [])
  return (
    <div
      className="flex h-24 items-end gap-1"
      role="img"
      aria-label="Live hashrate activity graph"
    >
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-primary/70 transition-[height] duration-500"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}

function Stat({
  icon: Icon,
  label,
  value,
  unit,
}: {
  icon: typeof Cpu
  label: string
  value: string
  unit: string
}) {
  return (
    <div className="rounded border border-border bg-background/50 p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="size-3.5 text-primary" aria-hidden="true" />
        {label}
      </div>
      <div className="mt-2 font-sans text-2xl font-semibold tabular-nums tracking-tight">
        {value}
        <span className="ml-1 text-sm font-normal text-muted-foreground">
          {unit}
        </span>
      </div>
    </div>
  )
}

export function MiningRig() {
  const hashrate = useHashrate()

  return (
    <section id="rig" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="text-primary">//</span> rig telemetry — node online
        </div>
        <h2 className="mt-2 font-sans text-2xl font-bold tracking-tight sm:text-3xl">
          The rig
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded border border-border bg-card p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                current hashrate
              </span>
              <span className="flex items-center gap-1.5 text-xs text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                hashing
              </span>
            </div>
            <div className="mt-1 font-sans text-4xl font-bold tabular-nums tracking-tight text-primary sm:text-5xl">
              {hashrate.toFixed(1)}
              <span className="ml-2 text-lg font-normal text-muted-foreground">
                TH/s
              </span>
            </div>
            <div className="mt-6">
              <HashGraph />
            </div>
          </div>

          <div className="grid gap-4">
            <Stat
              icon={Zap}
              label="power draw"
              value="3,250"
              unit="W"
            />
            <Stat
              icon={Thermometer}
              label="core temp"
              value="61"
              unit="°C"
            />
            <Stat icon={Activity} label="uptime" value="99.98" unit="%" />
          </div>
        </div>
      </div>
    </section>
  )
}
