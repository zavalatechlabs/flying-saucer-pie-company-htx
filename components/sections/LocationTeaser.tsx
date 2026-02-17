'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { fadeIn } from '@/lib/animations/variants'

export function LocationTeaser() {
  return (
    <section className="bg-ink text-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section-lg">
        <ScrollReveal variants={fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left column: info */}
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-h2 font-fredoka font-bold text-surface mb-6">Location</h2>
              <p className="text-body-lg text-surface/90 mb-2">
                436 W Crosstimbers St, Houston, TX 77018
              </p>
              <p className="text-body text-surface/70">Tuesday–Saturday · 8:00am–7:00pm</p>
            </div>

            {/* Right column: CTA */}
            <div className="md:col-span-1 text-center md:text-right">
              <Link href="/location">
                <Button variant="primary">Get details →</Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
