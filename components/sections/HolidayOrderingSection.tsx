'use client'

import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { scaleUp } from '@/lib/animations/variants'
import { Button } from '@/components/ui/Button'

export function HolidayOrderingSection() {
  return (
    <section className="py-section-lg bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variants={scaleUp}>
          <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-retro border border-accent/20 text-center">
            <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-h2 font-display text-ink mb-4">Holiday Ordering</h2>
            <p className="text-body-lg text-ink-muted font-body mb-8 max-w-2xl mx-auto">
              Ordering for Thanksgiving or Christmas? Holiday weeks can work a little differently.
              Check the details for pickup timing, first-come availability, and which pies hold
              best.
            </p>
            <Link href="/holidays">
              <Button variant="secondary">See holiday details →</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
