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

// Saucer image heights (half-value used to stop line at saucer top edge)
const SAUCER_HALF_MOBILE = 16 // 32px saucer / 2
const SAUCER_HALF_DESKTOP = 20 // 40px saucer / 2

export function Timeline({ milestones, showSaucer = true }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  // milestoneRefs[i] points to each milestone row — used to detect when
  // the saucer passes each dot so we can fill it in
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([])

  const [saucerY, setSaucerY] = useState(0)
  const [containerHeight, setContainerHeight] = useState(1)
  // Set of milestone indices whose dot has been "passed" by the saucer
  const [filledDots, setFilledDots] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!showSaucer) return

    let rafId = 0

    const update = () => {
      const container = containerRef.current
      if (!container) {
        rafId = 0
        return
      }

      const rect = container.getBoundingClientRect()
      const h = rect.height
      const progress = Math.max(0, Math.min(1, (window.innerHeight / 2 - rect.top) / h))
      const y = progress * h

      setSaucerY(y)
      setContainerHeight(h)

      // Check which milestone dots have been passed by the saucer.
      // Each dot is at approximately the vertical center of its milestone row.
      // Only trigger a re-render when the set actually changes.
      setFilledDots((prev) => {
        let changed = false
        const next = new Set(prev)
        milestoneRefs.current.forEach((ref, i) => {
          if (!ref) return
          const dotY = ref.offsetTop + ref.offsetHeight / 2
          if (y >= dotY && !prev.has(i)) {
            next.add(i)
            changed = true
          } else if (y < dotY && prev.has(i)) {
            next.delete(i)
            changed = true
          }
        })
        return changed ? next : prev
      })

      rafId = 0
    }

    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [showSaucer])

  // Fill line scale: stop exactly at the saucer's top edge, not its center
  const mobileFillScale =
    containerHeight > 1 ? Math.max(0, (saucerY - SAUCER_HALF_MOBILE) / containerHeight) : 0
  const desktopFillScale =
    containerHeight > 1 ? Math.max(0, (saucerY - SAUCER_HALF_DESKTOP) / containerHeight) : 0

  return (
    <div className="relative" ref={containerRef}>
      {/* ─── Timeline vertical lines ─── */}
      {/*
        Two layers per breakpoint:
          1. Track  — faint full-height guide (the "empty" line)
          2. Fill   — accent-colored, scales up from top via scaleY()
                      stops at the saucer's top edge (not its center)
      */}

      {/* Mobile track */}
      <div className="absolute top-0 left-8 w-0.5 h-full bg-ink/12 md:hidden" aria-hidden="true" />
      {/* Mobile fill — stops at saucer top */}
      <div
        className="absolute top-0 left-8 w-0.5 h-full bg-accent md:hidden"
        aria-hidden="true"
        style={{
          transformOrigin: 'top',
          transform: `scaleY(${mobileFillScale})`,
          willChange: 'transform',
          transition: 'transform 0.12s ease-out',
        }}
      />

      {/* Desktop track */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-ink/12 hidden md:block"
        aria-hidden="true"
      />
      {/* Desktop fill — stops at saucer top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-accent hidden md:block"
        aria-hidden="true"
        style={{
          transformOrigin: 'top',
          transform: `scaleY(${desktopFillScale})`,
          willChange: 'transform',
          transition: 'transform 0.12s ease-out',
        }}
      />

      {/* ─── Flying saucer scroll indicator ─── */}
      {showSaucer && (
        <>
          {/* Mobile saucer */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute md:hidden z-20 w-8 h-8"
            style={{
              top: 0,
              left: 32,
              willChange: 'transform',
              transform: `translateX(-50%) translateY(${Math.max(0, saucerY - SAUCER_HALF_MOBILE)}px) rotate(${-8 + (saucerY / Math.max(1, containerHeight)) * 16}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Image
              src="/brand/saucer.svg"
              alt=""
              width={32}
              height={32}
              className="w-full h-auto opacity-70 drop-shadow-md"
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
              transform: `translateX(-50%) translateY(${Math.max(0, saucerY - SAUCER_HALF_DESKTOP)}px) rotate(${-8 + (saucerY / Math.max(1, containerHeight)) * 16}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Image
              src="/brand/saucer.svg"
              alt=""
              width={40}
              height={40}
              className="w-full h-auto opacity-70 drop-shadow-md"
            />
            {saucerY / Math.max(1, containerHeight) > 0.85 && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent/40 rounded-full blur-sm animate-pulse" />
            )}
          </div>
        </>
      )}

      {/* ─── Milestone items ─── */}
      <div className="space-y-12 md:space-y-24">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0
          const dotFilled = filledDots.has(index)

          // Dot styles: hollow ring until saucer passes, then fills with accent
          const dotStyleDesktop = dotFilled
            ? 'w-5 h-5 rounded-full border-4 border-accent bg-accent shadow-md transition-all duration-300'
            : 'w-5 h-5 rounded-full border-4 border-ink/30 bg-transparent shadow-sm transition-all duration-300'

          const dotStyleMobile = dotFilled
            ? 'w-4 h-4 rounded-full border-2 border-accent bg-accent shadow-md transition-all duration-300'
            : 'w-4 h-4 rounded-full border-2 border-ink/30 bg-transparent shadow-sm transition-all duration-300'

          return (
            <div
              key={index}
              className="relative"
              ref={(el) => {
                milestoneRefs.current[index] = el
              }}
            >
              {/* ── Desktop alternating layout ── */}
              <div className="hidden md:flex items-center">
                {isEven ? (
                  <>
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

                    {/* Center dot */}
                    <div className="w-2/12 relative z-10 flex items-center justify-center">
                      <ScrollReveal variants={fadeIn} delay={0.2}>
                        <div className={dotStyleDesktop} />
                      </ScrollReveal>
                    </div>

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

                    {/* Center dot */}
                    <div className="w-2/12 relative z-10 flex items-center justify-center">
                      <ScrollReveal variants={fadeIn} delay={0.2}>
                        <div className={dotStyleDesktop} />
                      </ScrollReveal>
                    </div>

                    <ScrollReveal variants={slideInRight} delay={0.1} className="w-5/12 pl-10">
                      <h3 className="text-4xl font-bold text-accent mb-2">{milestone.year}</h3>
                      <h4 className="text-2xl font-semibold text-ink mb-3">{milestone.title}</h4>
                      <p className="text-ink-muted leading-relaxed">{milestone.description}</p>
                    </ScrollReveal>
                  </>
                )}
              </div>

              {/* ── Mobile layout ── */}
              <div className="md:hidden relative pl-16 pb-8">
                <div className="absolute left-8 top-1.5 -translate-x-1/2 z-10">
                  <ScrollReveal variants={fadeIn} delay={0.1}>
                    <div className={dotStyleMobile} />
                  </ScrollReveal>
                </div>
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
