'use client'

import { useEffect, useState } from 'react'

// Ubah tanggal ini kalau mau mengganti kapan mulai dihitung
const START_DATE = new Date('2025-08-11T00:00:00Z')
const DAILY_RATE = 0.3
const MONTHLY_WITHDRAW = 3

function fullMonthsElapsed(start: Date, end: Date) {
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (end.getDate() < start.getDate()) {
    months -= 1
  }
  return Math.max(0, months)
}

function formatUSD(value: number, decimals: number) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export function EarningsTicker() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 100)
    return () => clearInterval(id)
  }, [])

  if (!now) {
    return (
      <div className="mb-4 inline-flex items-center rounded border border-border bg-card/60 px-4 py-2 font-mono text-xs text-muted-foreground">
        loading ledger…
      </div>
    )
  }

  const elapsedDays = Math.max(0, now.getTime() - START_DATE.getTime()) / 86_400_000
  const earned = elapsedDays * DAILY_RATE
  const monthsElapsed = fullMonthsElapsed(START_DATE, now)
  const withdrawn = monthsElapsed * MONTHLY_WITHDRAW
  const balance = earned - withdrawn

  return (
    <div className="mb-4 inline-flex flex-wrap items-center gap-x-6 gap-y-1 rounded border border-border bg-card/60 px-4 py-2 font-mono text-xs">
      <span>
        <span className="text-muted-foreground">total earned </span>
        <span className="text-primary">${formatUSD(earned, 4)}</span>
      </span>
      <span>
        <span className="text-muted-foreground">withdrawn </span>
        <span className="text-foreground">${formatUSD(withdrawn, 2)}</span>
      </span>
      <span>
        <span className="text-muted-foreground">balance </span>
        <span className="text-primary">${formatUSD(balance, 4)}</span>
      </span>
    </div>
  )
}
