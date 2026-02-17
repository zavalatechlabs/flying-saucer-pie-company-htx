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

// Saucer image heights (half used to stop fill line at saucer top edge)
const SAUCER_HALF_MOBILE = 16 // 32px / 2
const SAUCER_HALF_DESKTOP = 20 // 40px / 2

export function Timeline({ milestones, showSaucer = true }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([])

  const [saucerY, setSaucerY] = useState(0)
  const [containerHeight, setContainerHeight] = useState(1)
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

      // Fill dot when the LINE TIP reaches it, not the saucer center.
      // Line tip = saucerY - saucerHalf (the line stops at saucer top edge).
      const isMobile = window.innerWidth < 768
      const saucerHalf = isMobile ? SAUCER_HALF_MOBILE : SAUCER_HALF_DESKTOP
      const lineTipY = y - saucerHalf

      setFilledDots((prev) => {
        let changed = false
        const next = new Set(prev)
        milestoneRefs.current.forEach((ref, i) => {
          if (!ref) return
          const dotY = ref.offsetTop + ref.offsetHeight / 2
          if (lineTipY >= dotY && !prev.has(i)) {
            next.add(i)
            changed = true
          } else if (lineTipY < dotY && prev.has(i)) {
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

  const mobileFillScale =
    containerHeight > 1 ? Math.max(0, (saucerY - SAUCER_HALF_MOBILE) / containerHeight) : 0
  const desktopFillScale =
    containerHeight > 1 ? Math.max(0, (saucerY - SAUCER_HALF_DESKTOP) / containerHeight) : 0

  const saucerRotation = -8 + (saucerY / Math.max(1, containerHeight)) * 16

  return (
    <div className="relative" ref={containerRef}>
      {/* ─── Timeline lines (track + fill) ─── */}

      {/* Mobile track */}
      <div className="absolute top-0 left-8 w-0.5 h-full bg-ink/12 md:hidden" aria-hidden="true" />
      {/* Mobile fill — scaleY stops at saucer top edge, tiny transition ok (it's a div not a SVG) */}
      <div
        className="absolute top-0 left-8 w-0.5 h-full bg-accent md:hidden"
        aria-hidden="true"
        style={{
          transformOrigin: 'top',
          transform: `scaleY(${mobileFillScale})`,
          willChange: 'transform',
          transition: 'transform 0.06s linear',
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
          transform: `scaleY(${desktopFillScale})`,
          willChange: 'transform',
          transition: 'transform 0.06s linear',
        }}
      />

      {/* ─── Flying saucer ───
           NO CSS transition — the 0.1s lag was causing ghost/blur during
           fast scroll as mid-transition and new-position composited together.
           rAF at 60fps is already smooth without any transition.           */}
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
              // No transition here — prevents ghost/blur on fast scroll
              transform: `translateX(-50%) translateY(${Math.max(0, saucerY - SAUCER_HALF_MOBILE)}px) rotate(${saucerRotation}deg)`,
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
              // No transition — same reason as above
              transform: `translateX(-50%) translateY(${Math.max(0, saucerY - SAUCER_HALF_DESKTOP)}px) rotate(${saucerRotation}deg)`,
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

          // Dots: hollow ring until line tip reaches them, then instant fill.
          // duration-75 (75ms) is near-instant but avoids a hard visual pop.
          const dotDesktop = `w-5 h-5 rounded-full border-4 shadow-md transition-colors duration-75 ${
            dotFilled ? 'border-accent bg-accent' : 'border-ink/30 bg-transparent'
          }`
          const dotMobile = `w-4 h-4 rounded-full border-2 shadow-md transition-colors duration-75 ${
            dotFilled ? 'border-accent bg-accent' : 'border-ink/30 bg-transparent'
          }`

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

                    <div className="w-2/12 relative z-10 flex items-center justify-center">
                      <ScrollReveal variants={fadeIn} delay={0.2}>
                        <div className={dotDesktop} />
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

                    <div className="w-2/12 relative z-10 flex items-center justify-center">
                      <ScrollReveal variants={fadeIn} delay={0.2}>
                        <div className={dotDesktop} />
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
                    <div className={dotMobile} />
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
