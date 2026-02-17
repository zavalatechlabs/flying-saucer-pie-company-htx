'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp, slideInLeft } from '@/lib/animations/variants'

export function Since1967Section() {
  return (
    <section className="bg-bg-alt py-section-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <ScrollReveal variants={slideInLeft} className="order-2 lg:order-1">
            <p className="text-sm font-fredoka uppercase tracking-widest text-accent mb-4">
              Since 1967
            </p>
            <h2 className="text-h1 md:text-display-md font-display text-ink mb-6 leading-tight">
              Houston Strong.
              <br />
              Family&#8209;owned.
            </h2>
            <p className="text-body-lg text-ink-muted mb-8 max-w-lg">
              The Flying Saucer Pie Shop has proudly served fresh pies to our customers since 1967.
              We&apos;re the oldest family&#8209;owned and operated bakery in Houston.
            </p>
            <Link href="/about">
              <Button variant="secondary">Read our story →</Button>
            </Link>
          </ScrollReveal>

          {/* Image column */}
          <ScrollReveal variants={slideUp} delay={0.15} className="order-1 lg:order-2">
            <figure className="relative">
              {/* Subtle accent frame behind the image */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-accent/15"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/bakery-1967.jpg"
                  alt="The Flying Saucer Pie bakery team at work in the original kitchen, circa 1967"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover grayscale-[20%]"
                  priority={false}
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-muted italic text-right pr-1">
                The original kitchen, circa 1967
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
