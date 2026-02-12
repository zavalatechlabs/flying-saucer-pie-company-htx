'use client'

import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-navy to-cosmic-purple">
      {/* Hero Content */}
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-space">
          <span className="block">Houston&apos;s Pies That Are</span>
          <span className="text-sunset-orange">Out of This World!</span>
        </h1>

        <p className="text-xl md:text-2xl text-warm-cream/90 mb-8">
          Handmade fresh daily since 1967
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button size="lg" className="text-lg px-8 py-4">
              🚀 Launch Your Order
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Explore Our Story
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-warm-cream/70">
          <p className="text-sm mb-2">Open Tuesday - Saturday</p>
          <p className="font-mono text-lg">8:00 AM - 7:00 PM</p>
        </div>
      </div>
    </section>
  )
}
