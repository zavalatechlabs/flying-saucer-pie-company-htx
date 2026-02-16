'use client'

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
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cosmic-purple via-cosmic-purple-light to-cosmic-purple h-full hidden md:block" />

      {/* Mobile vertical line */}
      <div className="absolute left-8 w-1 bg-gradient-to-b from-cosmic-purple via-cosmic-purple-light to-cosmic-purple h-full md:hidden" />

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
