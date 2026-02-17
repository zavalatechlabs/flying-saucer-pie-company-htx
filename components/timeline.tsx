'use client'

import { useRef, useEffect, useState } from 'react'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animations/variants'
import Image from 'next/image'

export interface TimelineMilestone {
  year: number
  title: string
  description: string
  image?: string
}

interface TimelineProps {
  milestones: TimelineMilestone[]
  showSaucer?: boolean
}

export function Timeline({ milestones, showSaucer = true }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  // Use pixel-based Y so we only animate `transform` (GPU) — never `top`
  const [saucerY, setSaucerY] = useState(0)
  const [saucerProgress, setSaucerProgress] = useState(0)

  useEffect(() => {
    if (!showSaucer) return

    // rAF gate: only one update per frame → eliminates mobile jank
    let rafId = 0

    const update = () => {
      const container = containerRef.current
      if (!container) {
        rafId = 0
        return
      }

      const rect = container.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, (window.innerHeight / 2 - rect.top) / rect.height))

      setSaucerProgress(progress)
      // Store absolute pixel offset from top of container
      setSaucerY(progress * rect.height)
      rafId = 0
    }

    const onScroll = () => {
      if (rafId) return // skip if a frame is already queued
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update() // seed on mount

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [showSaucer])

  // Saucer size (half-width for centering)
  const SAUCER_HALF = 16 // 32px / 2

  return (
    <div className="relative" ref={containerRef}>
      {/* ─── Timeline vertical lines ─── */}
      {/*
        Two layers per breakpoint:
          1. Track  — faint full-height guide (the "empty" line)
          2. Fill   — accent-colored, scales up from top via scaleY()
        scaleY is GPU-composited so fill is as smooth as the saucer.
      */}

      {/* Mobile track */}
      <div className="absolute top-0 left-8 w-0.5 h-full bg-ink/12 md:hidden" aria-hidden="true" />
      {/* Mobile fill */}
      <div
        className="absolute top-0 left-8 w-0.5 h-full bg-accent md:hidden"
        aria-hidden="true"
        style={{
          transformOrigin: 'top',
          transform: `scaleY(${saucerProgress})`,
          willChange: 'transform',
          transition: 'transform 0.12s ease-out',
        }}
      />

      {/* Desktop track */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-ink/12 hidden md:block"
        aria-hidden="true"
      />
      {/* Desktop fill */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-accent hidden md:block"
        aria-hidden="true"
        style={{
          transformOrigin: 'top',
          transform: `scaleY(${saucerProgress})`,
          willChange: 'transform',
          transition: 'transform 0.12s ease-out',
        }}
      />

      {/* ─── Flying saucer scroll indicator ───
           Mobile:  follows left-8 line  →  left: 32px, translateX(-50%)
           Desktop: follows center line  →  left: 50%,  translateX(-50%)
           Both use translateY(px) only — no `top` changes, zero reflow  */}
      {showSaucer && (
        <>
          {/* Mobile saucer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute md:hidden z-20 w-8 h-8"
            style={{
              top: 0,
              left: 32, // matches left-8 line
              willChange: 'transform',
              transform: `translateX(-50%) translateY(${Math.max(0, saucerY - SAUCER_HALF)}px) rotate(${-8 + saucerProgress * 16}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Image
              src="/brand/saucer.svg"
              alt=""
              width={32}
              height={32}
              className="w-full h-auto opacity-60 drop-shadow-md"
            />
          </div>

          {/* Desktop saucer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute hidden md:block z-20 w-10 h-10"
            style={{
              top: 0,
              left: '50%',
              willChange: 'transform',
              transform: `translateX(-50%) translateY(${Math.max(0, saucerY - 20)}px) rotate(${-8 + saucerProgress * 16}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Image
              src="/brand/saucer.svg"
              alt=""
              width={40}
              height={40}
              className="w-full h-auto opacity-60 drop-shadow-md"
            />
            {saucerProgress > 0.85 && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent/40 rounded-full blur-sm animate-pulse" />
            )}
          </div>
        </>
      )}

      {/* ─── Milestone items ─── */}
      <div className="space-y-12 md:space-y-24">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0

          return (
            <div key={index} className="relative">
              {/* ── Desktop alternating layout ─────────────────────
                   5/12 | 2/12 (dot) | 5/12  →  totals 12/12
                   The explicit w-2/12 center column prevents the absolute
                   line from overlapping either side's text               */}
              <div className="hidden md:flex items-center">
                {isEven ? (
                  <>
                    {/* Left content */}
                    <ScrollReveal
                      variants={slideInLeft}
                      delay={0.1}
                      className="w-5/12 pr-10 text-right"
                    >
                      <div className="inline-block text-left">
                        <h3 className="text-4xl font-bold text-accent mb-2">{milestone.year}</h3>
                        <h4 className="text-2xl font-semibold text-ink mb-3">{milestone.title}</h4>
                        <p className="text-ink-muted leading-relaxed">{milestone.description}</p>
                      </div>
                    </ScrollReveal>

                    {/* Center dot — w-2/12 ensures equal split */}
                    <div className="w-2/12 relative z-10 flex items-center justify-center">
                      <ScrollReveal variants={fadeIn} delay={0.2}>
                        <div className="relative w-5 h-5 bg-accent rounded-full border-4 border-bg-alt shadow-md">
                          <div className="absolute inset-0 bg-accent/50 rounded-full animate-ping" />
                        </div>
                      </ScrollReveal>
                    </div>

                    {/* Right image */}
                    <div className="w-5/12 pl-10">
                      {milestone.image && (
                        <ScrollReveal variants={slideInRight} delay={0.3}>
                          <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={milestone.image}
                              alt={milestone.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </ScrollReveal>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left image */}
                    <div className="w-5/12 pr-10">
                      {milestone.image && (
                        <ScrollReveal variants={slideInLeft} delay={0.3}>
                          <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={milestone.image}
                              alt={milestone.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </ScrollReveal>
                      )}
                    </div>

                    {/* Center dot — w-2/12 */}
                    <div className="w-2/12 relative z-10 flex items-center justify-center">
                      <ScrollReveal variants={fadeIn} delay={0.2}>
                        <div className="relative w-5 h-5 bg-accent rounded-full border-4 border-bg-alt shadow-md">
                          <div className="absolute inset-0 bg-accent/50 rounded-full animate-ping" />
                        </div>
                      </ScrollReveal>
                    </div>

                    {/* Right content */}
                    <ScrollReveal variants={slideInRight} delay={0.1} className="w-5/12 pl-10">
                      <h3 className="text-4xl font-bold text-accent mb-2">{milestone.year}</h3>
                      <h4 className="text-2xl font-semibold text-ink mb-3">{milestone.title}</h4>
                      <p className="text-ink-muted leading-relaxed">{milestone.description}</p>
                    </ScrollReveal>
                  </>
                )}
              </div>

              {/* ── Mobile layout ──────────────────────────────────
                   Content has pl-16 to clear the left-8 line + spacing.
                   Dot is absolutely positioned at left-8 (32px), centered
                   on the line with -translate-x-1/2.                    */}
              <div className="md:hidden relative pl-16 pb-8">
                {/* Dot sits on the line */}
                <div className="absolute left-8 top-1.5 -translate-x-1/2 z-10">
                  <ScrollReveal variants={fadeIn} delay={0.1}>
                    <div className="w-4 h-4 bg-accent rounded-full border-2 border-bg-alt shadow-md" />
                  </ScrollReveal>
                </div>

                {/* Content */}
                <ScrollReveal variants={slideInRight} delay={0.2}>
                  <h3 className="text-3xl font-bold text-accent mb-1">{milestone.year}</h3>
                  <h4 className="text-xl font-semibold text-ink mb-2">{milestone.title}</h4>
                  <p className="text-ink-muted leading-relaxed mb-4">{milestone.description}</p>
                  {milestone.image && (
                    <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </ScrollReveal>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
