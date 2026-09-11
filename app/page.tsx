'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'

// 2026-12-20 18:00 KST, represented in UTC to avoid preview timezone differences.
const debutDate = Date.UTC(2026, 11, 20, 9, 0, 0)

function getTimeLeft(now = Date.now()) {
  const distance = Math.max(0, debutDate - now)
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  }
}

const initialTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

export default function Page() {
  const [time, setTime] = useState(initialTime)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setTime(getTimeLeft())
    const interval = window.setInterval(() => setTime(getTimeLeft()), 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative flex min-h-screen flex-col px-6 py-6 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(44,105,255,0.18),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(17,45,101,0.2),transparent_32%)]" />
        <header className="relative z-10 flex items-start justify-between border-b border-border/70 pb-5">
          <a href="#top" className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-foreground">
            NOVAE
          </a>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:gap-10">
            <a href="#signal" className="transition-colors hover:text-foreground">Signal</a>
            <a href="#debut" className="transition-colors hover:text-foreground">Debut</a>
            <span className="hidden text-primary sm:inline">Seoul / 2026</span>
          </div>
        </header>

        <div id="top" className="relative z-10 flex flex-1 flex-col justify-center py-12 lg:grid lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-20 lg:py-0">
          <div className="max-w-3xl">
            <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.34em] text-primary">A new frequency is approaching</p>
            <h1 className="font-serif text-[clamp(5rem,16vw,13.5rem)] leading-[0.76] tracking-[-0.07em] text-balance">
              We are<br /><span className="ml-[12vw] text-primary">NOVAE.</span>
            </h1>
            <div className="mt-10 flex max-w-md items-start gap-5 border-l border-primary pl-5 text-sm leading-6 text-muted-foreground">
              <span className="font-mono text-[10px] text-primary">01</span>
              <p>A signal from somewhere between the known and the next. The first chapter begins now.</p>
            </div>
          </div>

          <div className="relative mt-14 flex justify-center lg:mt-0 lg:justify-end">
            <div className="relative aspect-[4/5] w-[min(72vw,390px)] overflow-hidden border border-border/80 bg-card shadow-2xl shadow-primary/10">
              <img src="/placeholder.jpg" alt="A chrome star prism floating in midnight blue space" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/70">
                <span>Concept film / 001</span>
                <button type="button" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? 'Pause concept film' : 'Play concept film'} className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/50 text-foreground transition-colors hover:bg-foreground hover:text-background">
                  {isPlaying ? <span className="text-[11px]">Ⅱ</span> : <Play size={13} fill="currentColor" />}
                </button>
              </div>
            </div>
            <span className="absolute -bottom-7 right-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">The first light / 01</span>
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-between border-t border-border/70 pt-5">
          <a href="#signal" className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"><ArrowDown size={14} /> Scroll to enter</a>
          <div className="flex gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"><a href="#instagram" aria-label="Instagram" className="transition-colors hover:text-foreground">IG</a><a href="#youtube" aria-label="YouTube" className="transition-colors hover:text-foreground">YT</a></div>
        </div>
      </section>

      <section id="signal" className="border-t border-border bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">The signal</p><p className="mt-6 max-w-xs font-serif text-3xl leading-tight text-foreground">Five points of light. One new orbit.</p></div>
          <div><p className="max-w-2xl text-2xl leading-relaxed tracking-tight text-foreground/90 sm:text-4xl">Before a star is seen, it is felt. NOVAE is the sound of that first arrival — bright, strange, and impossible to ignore.</p><div className="mt-14 flex items-center justify-between border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"><span>Transmission received</span><span className="text-primary">05 / 05 / 26</span></div></div>
        </div>
      </section>

      <section id="debut" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl border-y border-border py-8 sm:py-12">
          <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Debut countdown</p><p className="mt-5 font-serif text-5xl tracking-tight sm:text-7xl">The wait ends<br />in <span className="text-primary">December.</span></p></div>
            <div className="grid grid-cols-4 gap-4 sm:gap-8">
              {Object.entries(time).map(([label, value]) => <div key={label}><div suppressHydrationWarning className="font-mono text-3xl tabular-nums tracking-tight sm:text-5xl">{String(isMounted ? value : 0).padStart(2, '0')}</div><div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div></div>)}
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"><span>12.20.2026 / 18:00 KST</span><a href="mailto:hello@novae.world" className="group flex items-center gap-2 text-foreground">Stay close <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div>
        </div>
      </section>

      <footer className="flex flex-col gap-6 border-t border-border px-6 py-7 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"><span>© 2026 NOVAE ENTERTAINMENT</span><span>Made for the ones who look up</span><a href="#top" className="text-primary">Back to top ↑</a></footer>
    </main>
  )
}
