'use client'

import Image from 'next/image'
import { businessInfo } from '@/lib/data/business-info'
import { timelineMilestones } from '@/lib/data/about-content'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp, slideInLeft, slideInRight } from '@/lib/animations/variants'
import { Timeline } from '@/components/timeline'
import { AboutHero } from '@/components/sections/AboutHero'

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* Our Story Section */}
      <section className="py-section-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <h2 className="text-h1 font-display text-ink text-center mb-section">Our Story</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <ScrollReveal variants={slideInLeft}>
              <div className="prose prose-lg max-w-none text-ink-muted">
                <p className="text-body-lg leading-relaxed mb-6">{businessInfo.about.full}</p>
                <p className="text-body-lg leading-relaxed">{businessInfo.about.mission}</p>
              </div>
            </ScrollReveal>

            {/* Photo */}
            <ScrollReveal variants={slideInRight}>
              <figure className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-accent/15 -z-10" />
                  <Image
                    src="/images/owners.jpg"
                    alt="The Flying Saucer Pie Co. team holding fresh pies in front of the store"
                    width={800}
                    height={900}
                    className="w-full h-auto object-cover grayscale-[15%]"
                  />
                </div>
                <figcaption className="text-sm text-ink-muted text-center mt-4 italic">
                  Flying Saucer Pie Co. — Houston, TX
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-section-lg bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <h2 className="text-h1 font-display text-ink text-center mb-section">Our Journey</h2>
            <p className="text-body-lg text-ink-muted text-center mb-section max-w-2xl mx-auto">
              From a small family bakery to a Houston institution - here&apos;s our story, one pie
              at a time.
            </p>
          </ScrollReveal>

          <Timeline milestones={timelineMilestones} />
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variants={slideUp}>
            <p className="text-ink-muted mb-4 text-body-lg">
              Questions about orders, freezing, hours, or payment?
            </p>
            <a
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-surface rounded-full font-semibold hover:bg-ink transition-colors duration-200"
            >
              View our FAQ →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
