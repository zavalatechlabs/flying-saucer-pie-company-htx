'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { fadeIn, slideUp } from '@/lib/animations/variants'

export function LocationTeaser() {
  const pathname = usePathname()

  // Suppress on /contact — that page already shows the same address/hours/map in detail
  if (pathname === '/contact') return null

  return (
    <section className="relative bg-ink text-surface overflow-hidden">
      {/* Houston skyline sketch — decorative bottom band.
          The SVG has a white sky + dark buildings; invert flips that to dark sky + light buildings,
          then mix-blend-screen drops the (now black) sky so only the buildings show on the navy panel. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-56 mix-blend-screen opacity-90"
      >
        <Image
          src="/brand/houston-skyline-sketch-new.svg"
          alt=""
          fill
          className="object-contain object-bottom invert"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Mobile/tablet (single-column stack): use pb-44 (176px) so the bottom-most
          element clears the absolute h-40 (160px) skyline by ~16px.
          At lg+ (2-col grid with items-end), the layout no longer stacks so the
          original symmetric py-section-lg returns. */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-section-lg pb-44 lg:pb-section-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left — eyebrow + heading + address block */}
          <ScrollReveal variants={slideUp} className="lg:col-span-7">
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-surface/60 mb-4">
              Find Us · Houston, TX
            </p>
            <h2
              className="font-fredoka font-bold text-surface leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.25rem, 1.5rem + 3vw, 3.5rem)' }}
            >
              Stop in for a slice.
            </h2>
            <div className="flex items-start gap-3 text-surface/85">
              <MapPin
                size={20}
                className="mt-1.5 flex-shrink-0 text-surface/60"
                aria-hidden="true"
              />
              <div>
                <p className="text-lg leading-snug">
                  436 W Crosstimbers St
                  <br />
                  Houston, TX 77018
                </p>
                <p className="mt-3 text-sm text-surface/55 tracking-wide">
                  Tuesday–Saturday &nbsp;·&nbsp; 8:00am – 7:00pm
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — CTA */}
          <ScrollReveal variants={fadeIn} delay={0.15} className="lg:col-span-5 lg:text-right">
            <Link href="/contact" className="inline-block">
              <Button variant="primary">Get directions →</Button>
            </Link>
            <p className="mt-4 text-xs text-surface/50 font-body tracking-wide">
              Closed Sunday &amp; Monday
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
