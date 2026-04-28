'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { businessInfo } from '@/lib/data/business-info'
import { timelineMilestones } from '@/lib/data/about-content'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp, slideInLeft, slideInRight } from '@/lib/animations/variants'
import { Timeline } from '@/components/ui/Timeline'
import { AboutHero } from '@/components/sections/AboutHero'

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <AboutHero />

      {/* Our Story */}
      <section className="py-section-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header — eyebrow + characterful headline */}
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-4 text-center">
              Our Story
            </p>
            <h2
              className="font-display font-bold text-ink text-center mb-14 md:mb-16 leading-[1.05] max-w-4xl mx-auto"
              style={{ fontSize: 'clamp(2.25rem, 1.25rem + 4vw, 3.5rem)' }}
            >
              Sixty years of pies&nbsp;&mdash; and only&nbsp;pies.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Text — 7 cols */}
            <ScrollReveal variants={slideInLeft} className="lg:col-span-7">
              <p className="text-lg md:text-xl text-ink-muted leading-relaxed mb-6">
                {businessInfo.about.full}
              </p>
              <p className="text-lg md:text-xl text-ink-muted leading-relaxed">
                {businessInfo.about.mission}
              </p>

              {/* Pull quote — flanked by horizontal rules (no side-stripe) */}
              <blockquote className="mt-12 border-y border-accent/25 py-8">
                <p className="font-display text-2xl md:text-3xl text-ink leading-snug italic text-center max-w-[28ch] mx-auto">
                  &ldquo;Pies are our specialty &mdash; and the only thing we sell.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            {/* Photo — 5 cols */}
            <ScrollReveal variants={slideInRight} className="lg:col-span-5">
              <figure className="relative">
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-accent/15"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/owners.jpg"
                    alt="The Flying Saucer Pie Co. team holding fresh pies in front of the store"
                    width={800}
                    height={900}
                    className="w-full h-auto object-cover grayscale-[15%]"
                  />
                </div>
                <figcaption className="text-sm text-ink-muted text-center mt-4 italic">
                  Flying Saucer Pie Co. &mdash; Houston, TX
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-section-lg bg-bg-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-4 text-center">
              Our Journey
            </p>
            <h2
              className="font-display font-bold text-ink text-center mb-5 leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 1.25rem + 3vw, 3rem)' }}
            >
              From a small bakery to a Houston institution.
            </h2>
            <p className="text-lg text-ink-muted text-center mb-section italic">
              One pie at a time.
            </p>
          </ScrollReveal>

          <Timeline milestones={timelineMilestones} />
        </div>
      </section>

      {/* FAQ teaser — bg-bg gives visual separation from timeline above */}
      <section className="py-section bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.28em] text-accent mb-4">
              Got Questions?
            </p>
            <h3
              className="font-display font-bold text-ink mb-7 leading-[1.1]"
              style={{ fontSize: 'clamp(1.5rem, 1rem + 2vw, 2.25rem)' }}
            >
              Orders, freezing, hours, payment &mdash; we&rsquo;ve got answers.
            </h3>
            <a
              href="/faq"
              className="group inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
            >
              <span className="border-b-2 border-ink/25 group-hover:border-accent pb-1.5 transition-colors">
                View our FAQ
              </span>
              <ArrowRight
                size={16}
                className="text-ink/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
              />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
