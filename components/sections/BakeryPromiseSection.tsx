'use client'

import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { fadeIn } from '@/lib/animations/variants'

export function BakeryPromiseSection() {
  return (
    <section
      className="relative bg-bg py-section-lg overflow-hidden"
      aria-labelledby="promise-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variants={fadeIn}>
          <div className="border-y border-accent/25 py-12 md:py-16 max-w-4xl mx-auto text-center">
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-6">
              The Bakery&rsquo;s Promise
            </p>
            <h2
              id="promise-heading"
              className="font-display font-bold text-ink leading-[1.1]"
              style={{ fontSize: 'clamp(1.875rem, 1.25rem + 3vw, 3.25rem)' }}
            >
              Made by hand. Baked that morning. Never frozen.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
