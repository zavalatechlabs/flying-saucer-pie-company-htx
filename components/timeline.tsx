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
  const [saucerProgress, setSaucerProgress] = useState(0)

  useEffect(() => {
    if (!showSaucer) return

    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const viewportCenter = windowHeight / 2

      // Calculate progress through the timeline
      const progress = Math.max(0, Math.min(1, (viewportCenter - rect.top) / rect.height))
      setSaucerProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [showSaucer])

  return (
    <div className="relative" ref={containerRef}>
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cosmic-purple via-cosmic-purple-light to-cosmic-purple h-full hidden md:block" />

      {/* Mobile vertical line */}
      <div className="absolute left-8 w-1 bg-gradient-to-b from-cosmic-purple via-cosmic-purple-light to-cosmic-purple h-full md:hidden" />

      {/* Flying Saucer Progress Indicator */}
      {showSaucer && (
        <div
          className="absolute right-4 md:right-8 w-8 h-8 md:w-10 md:h-10 transition-all duration-200 ease-out z-20"
          style={{
            top: `${Math.max(2, Math.min(95, saucerProgress * 96))}%`,
            transform: `translateY(-50%) rotate(${-10 + saucerProgress * 20}deg)`,
          }}
        >
          <Image
            src="/brand/saucer.svg"
            alt="Timeline progress"
            width={40}
            height={40}
            className="w-full h-auto opacity-50 hover:opacity-70 transition-opacity drop-shadow-lg"
          />
          {/* Landing glow effect when near bottom */}
          {saucerProgress > 0.85 && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-accent/30 rounded-full blur-sm animate-pulse" />
          )}
        </div>
      )}

      <div className="space-y-12 md:space-y-24">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0

          return (
            <div key={index} className="relative">
              {/* Desktop Layout - Alternating */}
              <div className="hidden md:flex items-center">
                {isEven ? (
                  <>
                    {/* Left Side Content */}
                    <ScrollReveal
                      variants={slideInLeft}
                      delay={0.1}
                      className="w-5/12 pr-12 text-right"
                    >
                      <div className="inline-block text-left">
                        <h3 className="text-4xl font-bold text-cosmic-purple mb-2">
                          {milestone.year}
                        </h3>
                        <h4 className="text-2xl font-semibold text-space-night mb-3">
                          {milestone.title}
                        </h4>
                        <p className="text-dust-dark leading-relaxed">{milestone.description}</p>
                      </div>
                    </ScrollReveal>

                    {/* Center Dot */}
                    <div className="relative z-10 flex items-center justify-center">
                      <ScrollReveal variants={fadeIn} delay={0.2}>
                        <div className="w-6 h-6 bg-cosmic-purple rounded-full border-4 border-warm-cream shadow-lg">
                          <div className="absolute inset-0 bg-cosmic-purple rounded-full animate-ping opacity-75" />
                        </div>
                      </ScrollReveal>
                    </div>

                    {/* Right Side Image/Space */}
                    <div className="w-5/12 pl-12">
                      {milestone.image && (
                        <ScrollReveal variants={slideInRight} delay={0.3}>
                          <div className="relative h-48 rounded-lg overflow-hidden shadow-xl">
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
                    {/* Left Side Image/Space */}
                    <div className="w-5/12 pr-12">
                      {milestone.image && (
                        <ScrollReveal variants={slideInLeft} delay={0.3}>
                          <div className="relative h-48 rounded-lg overflow-hidden shadow-xl">
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

                    {/* Center Dot */}
                    <div className="relative z-10 flex items-center justify-center">
                      <ScrollReveal variants={fadeIn} delay={0.2}>
                        <div className="w-6 h-6 bg-cosmic-purple rounded-full border-4 border-warm-cream shadow-lg">
                          <div className="absolute inset-0 bg-cosmic-purple rounded-full animate-ping opacity-75" />
                        </div>
                      </ScrollReveal>
                    </div>

                    {/* Right Side Content */}
                    <ScrollReveal variants={slideInRight} delay={0.1} className="w-5/12 pl-12">
                      <h3 className="text-4xl font-bold text-cosmic-purple mb-2">
                        {milestone.year}
                      </h3>
                      <h4 className="text-2xl font-semibold text-space-night mb-3">
                        {milestone.title}
                      </h4>
                      <p className="text-dust-dark leading-relaxed">{milestone.description}</p>
                    </ScrollReveal>
                  </>
                )}
              </div>

              {/* Mobile Layout - All Left Aligned */}
              <div className="flex md:hidden items-start">
                {/* Left Side - Dot */}
                <div className="relative z-10 flex items-start justify-center pt-2 mr-6">
                  <ScrollReveal variants={fadeIn} delay={0.1}>
                    <div className="w-4 h-4 bg-cosmic-purple rounded-full border-2 border-warm-cream shadow-lg" />
                  </ScrollReveal>
                </div>

                {/* Right Side - Content */}
                <ScrollReveal variants={slideInRight} delay={0.2} className="flex-1 pb-8">
                  <h3 className="text-3xl font-bold text-cosmic-purple mb-1">{milestone.year}</h3>
                  <h4 className="text-xl font-semibold text-space-night mb-2">{milestone.title}</h4>
                  <p className="text-dust-dark leading-relaxed mb-4">{milestone.description}</p>
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
