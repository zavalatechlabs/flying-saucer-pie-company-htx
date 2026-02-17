'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'
import { Button } from '@/components/ui/Button'

export function Since1967Section() {
  return (
    <section className="bg-bg-alt py-section-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal variants={slideUp}>
          <p className="text-sm font-fredoka uppercase tracking-widest text-accent mb-4">
            Since 1967
          </p>
          <h2 className="text-h1 md:text-display-md font-display text-ink mb-6">
            Houston Strong. Family-owned.
          </h2>
          <p className="text-body-lg text-ink-muted max-w-2xl mx-auto mb-8">
            The Flying Saucer Pie Shop has proudly served fresh pies to our customers since 1967.
            We&apos;re the oldest family-owned and operated bakery in Houston.
          </p>
          <Link href="/about">
            <Button variant="secondary">Read our story →</Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
