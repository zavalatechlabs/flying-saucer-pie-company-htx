'use client'

import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'

export function HolidaysContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-surface py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variants={slideUp}>
            <h1 className="text-h1 font-fredoka text-surface mb-4">Holiday Ordering</h1>
            <p className="text-body-lg font-pacifico text-surface/80 max-w-2xl mx-auto">
              Everything you need to know for Thanksgiving and Christmas
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Placeholder Content Section */}
      <section className="py-section-lg bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variants={slideUp}>
            <p className="text-body-lg text-ink-muted">
              Holiday ordering information coming soon. For now, please call us at{' '}
              <a
                href="tel:+17136941141"
                className="text-ink font-semibold underline hover:text-ink-muted transition-colors"
              >
                (713) 694-1141
              </a>{' '}
              for holiday order questions.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
