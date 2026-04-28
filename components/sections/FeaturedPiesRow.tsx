'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PieModal } from '@/components/ui/PieModal'
import { pies, Pie } from '@/lib/data/pies'

export function FeaturedPiesRow() {
  const [selectedPie, setSelectedPie] = useState<Pie | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const featuredPies = pies.slice(0, 8) // first 8 pies
  // Duplicate pies 3 times for seamless infinite scroll
  const infinitePies = [...featuredPies, ...featuredPies, ...featuredPies]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      // Pause animation when user scrolls
      setIsPaused(true)

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Resume animation 2 seconds after user stops scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsPaused(false)
      }, 2000)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <section className="relative py-section-lg bg-surface overflow-hidden">
        {/* Atmospheric atomic-pattern texture — slightly softer against the lighter surface */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03] text-accent"
          style={{
            backgroundImage: `url('/brand/atomic-pattern.svg')`,
            backgroundSize: '140px 140px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Soft warm-edge vignette so the section reads as a panel, not a flat sheet */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 55%, transparent 0%, transparent 60%, oklch(95% 0.011 88 / 0.55) 100%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 md:mb-20">
            <div
              className="flex items-center justify-center gap-4 mb-5"
              aria-hidden="true"
            >
              <span className="h-px w-10 sm:w-16 bg-accent/40" />
              <span className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.32em] text-accent whitespace-nowrap">
                Customer Favorites
              </span>
              <span className="h-px w-10 sm:w-16 bg-accent/40" />
            </div>
            <h2
              className="font-display font-bold text-ink leading-[1.02] mb-5"
              style={{ fontSize: 'clamp(2.5rem, 1.25rem + 5vw, 4rem)' }}
            >
              Cosmic Favorites
            </h2>
            <p className="text-lg md:text-xl text-ink-muted max-w-[44ch] mx-auto leading-relaxed italic">
              The pies Houstonians keep coming back for &mdash; baked fresh every morning.
            </p>
          </div>

          {/* Carousel wrapped in a subtle framed display */}
          <div className="relative">
            {/* Top frame line — fades in from edges */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent"
            />

            <div ref={containerRef} className="infinite-scroll-container">
              <div ref={trackRef} className={`infinite-scroll-track ${isPaused ? 'paused' : ''}`}>
                {infinitePies.map((pie, i) => (
                  <div
                    key={`${pie.id}-${i}`}
                    className="infinite-pie-item cursor-pointer"
                    onClick={() => setSelectedPie(pie)}
                  >
                    <div className="pie-spin-infinite">
                      <Image
                        src={pie.heroImage || pie.image || '/pie-placeholder.svg'}
                        alt={pie.name}
                        width={200}
                        height={200}
                        className="rounded-full object-cover"
                        priority={i < 8}
                      />
                    </div>
                    <p className="text-center mt-5 font-display font-semibold text-ink tracking-[0.02em]">
                      {pie.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom frame line */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent"
            />
          </div>

          {/* CTA — typographic link with personality, replaces generic button */}
          <div className="text-center mt-14 md:mt-16">
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
            >
              <span className="border-b-2 border-ink/25 group-hover:border-accent pb-1.5 transition-colors">
                Browse all {pies.length} pies
              </span>
              <ArrowRight
                size={16}
                className="text-ink/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
              />
            </Link>
          </div>
        </div>
      </section>

      <PieModal
        pie={selectedPie}
        isOpen={selectedPie !== null}
        onClose={() => setSelectedPie(null)}
      />
    </>
  )
}
