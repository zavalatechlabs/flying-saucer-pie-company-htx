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

  // Refs for elements whose styles update on every scroll frame.
  // Using direct DOM mutation here avoids React re-rendering the whole
  // Timeline (and its 17 child ScrollReveal wrappers) 60 times per second.
  const saucerMobileRef = useRef<HTMLDivElement>(null)
  const saucerDesktopRef = useRef<HTMLDivElement>(null)
  const fillMobileRef = useRef<HTMLDivElement>(null)
  const fillDesktopRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  // State only for the dot-fill set — this only changes when the line tip
  // actually crosses a milestone threshold, not on every frame.
  const [filledDots, setFilledDots] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!showSaucer) return

    const container = containerRef.current
    if (!container) return

    let rafId = 0

    // Cached layout — refreshed on resize / via ResizeObserver. Reading
    // getBoundingClientRect / offsetTop inside the scroll loop forces a
    // synchronous layout every frame; caching avoids that.
    const cache = {
      containerTop: 0,
      containerHeight: 1,
      offsets: [] as number[],
      heights: [] as number[],
    }

    const recalc = () => {
      const rect = container.getBoundingClientRect()
      cache.containerTop = rect.top + window.scrollY
      cache.containerHeight = rect.height
      cache.offsets = milestoneRefs.current.map((ref) => ref?.offsetTop ?? 0)
      cache.heights = milestoneRefs.current.map((ref) => ref?.offsetHeight ?? 0)
    }

    const update = () => {
      rafId = 0

      const isMobile = window.innerWidth < 768
      const saucerHalf = isMobile ? SAUCER_HALF_MOBILE : SAUCER_HALF_DESKTOP

      const scrollY = window.scrollY
      const viewportH = window.innerHeight
      const containerScrollTop = cache.containerTop - scrollY
      const progress = Math.max(
        0,
        Math.min(1, (viewportH / 2 - containerScrollTop) / cache.containerHeight)
      )
      const y = progress * cache.containerHeight
      const lineTipY = Math.max(0, y - saucerHalf)
      const fillScale = lineTipY / cache.containerHeight
      const rotation = -8 + progress * 16

      // Saucer position — direct DOM
      const saucerEl = isMobile ? saucerMobileRef.current : saucerDesktopRef.current
      if (saucerEl) {
        saucerEl.style.transform = `translateX(-50%) translateY(${lineTipY}px) rotate(${rotation}deg)`
      }

      // Fill bar — direct DOM
      const fillEl = isMobile ? fillMobileRef.current : fillDesktopRef.current
      if (fillEl) {
        fillEl.style.transform = `scaleY(${fillScale})`
      }

      // Glow visibility — opacity toggled, element always mounted
      if (glowRef.current) {
        glowRef.current.style.opacity = progress > 0.85 ? '1' : '0'
      }

      // Dot fills — React state, but the updater returns the SAME reference
      // when nothing crossed, so React bails out without re-rendering.
      setFilledDots((prev) => {
        let changed = false
        const next = new Set(prev)
        for (let i = 0; i < cache.offsets.length; i++) {
          const dotY = isMobile ? cache.offsets[i] + 6 : cache.offsets[i] + cache.heights[i] / 2
          const shouldFill = lineTipY >= dotY
          if (shouldFill && !prev.has(i)) {
            next.add(i)
            changed = true
          } else if (!shouldFill && prev.has(i)) {
            next.delete(i)
            changed = true
          }
        }
        return changed ? next : prev
      })
    }

    const scheduleUpdate = () => {
      if (!rafId) rafId = requestAnimationFrame(update)
    }

    const onResize = () => {
      recalc()
      scheduleUpdate()
    }

    recalc()
    update()

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    // Catch layout shifts after fonts/images settle
    const ro = new ResizeObserver(() => {
      recalc()
      scheduleUpdate()
    })
    ro.observe(container)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', onResize)
      ro.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [showSaucer])

  return (
    <div className="relative" ref={containerRef}>
      {/* ─── Timeline lines (track + fill) ─── */}

      {/* Mobile track */}
      <div className="absolute top-0 left-8 w-0.5 h-full bg-ink/12 md:hidden" aria-hidden="true" />
      {/* Mobile fill — transform set via ref every frame */}
      <div
        ref={fillMobileRef}
        className="absolute top-0 left-8 w-0.5 h-full bg-accent md:hidden origin-top will-change-transform"
        aria-hidden="true"
        style={{ transform: 'scaleY(0)' }}
      />

      {/* Desktop track */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-ink/12 hidden md:block"
        aria-hidden="true"
      />
      {/* Desktop fill */}
      <div
        ref={fillDesktopRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-accent hidden md:block origin-top will-change-transform"
        aria-hidden="true"
        style={{ transform: 'scaleY(0)' }}
      />

      {/* ─── Flying saucer — transforms applied via direct DOM mutation ─── */}
      {showSaucer && (
        <>
          {/* Mobile saucer */}
          <div
            ref={saucerMobileRef}
            aria-hidden="true"
            className="pointer-events-none absolute md:hidden z-20 w-8 h-8 will-change-transform"
            style={{ top: 0, left: 32, transform: 'translateX(-50%)' }}
          >
            <Image
              src="/brand/saucer.svg"
              alt=""
              width={32}
              height={32}
              className="w-full h-auto opacity-70"
              priority={false}
            />
          </div>

          {/* Desktop saucer */}
          <div
            ref={saucerDesktopRef}
            aria-hidden="true"
            className="pointer-events-none absolute hidden md:block z-20 w-10 h-10 will-change-transform"
            style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}
          >
            <Image
              src="/brand/saucer.svg"
              alt=""
              width={40}
              height={40}
              className="w-full h-auto opacity-70"
              priority={false}
            />
            {/* Glow — always rendered, opacity toggled via ref */}
            <div
              ref={glowRef}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent/40 rounded-full blur-sm transition-opacity duration-300"
              style={{ opacity: 0 }}
            />
          </div>
        </>
      )}

      {/* ─── Milestone items ─── */}
      <div className="space-y-12 md:space-y-24">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0
          const dotFilled = filledDots.has(index)

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
