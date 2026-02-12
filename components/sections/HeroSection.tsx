'use client'

import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

// Toggle alignment guide
const SHOW_GUIDE = true

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-cream to-white overflow-hidden">
      {/* Alignment Guide (toggleable) */}
      {SHOW_GUIDE && (
        <div className="absolute inset-0 pointer-events-none z-50">
          <Image 
            src="/brand/logo-reference.jpg"
            alt="Logo Reference"
            fill
            className="object-contain opacity-20"
          />
        </div>
      )}

      {/* Graphics Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Swoosh - Behind text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full md:w-3/4 z-10">
          <Image 
            src="/brand/swoosh.svg"
            alt=""
            width={800}
            height={500}
            className="w-full h-auto opacity-90"
          />
        </div>

        {/* Saucer - Bottom right (final landing spot) */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-30 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
          <Image 
            src="/brand/saucer.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Text Layer */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Headline: FLYING SAUCER PIE COMPANY */}
        <h1 className="mb-8">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#020169] headline-font leading-tight">
            FLYING SAUCER
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#020169] headline-font leading-tight">
            PIE COMPANY
          </span>
        </h1>

        {/* Tagline: Our Pies Are Out Of This World! */}
        <div className="mb-12 space-y-2">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#020169] tagline-font">
            Our Pies Are
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#020169] tagline-font">
            Out Of This World!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button size="lg" className="text-lg px-8 py-4">
              View Our Menu
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Our Story
            </Button>
          </Link>
        </div>

        {/* Hours */}
        <div className="mt-12 text-[#020169]/70">
          <p className="text-sm mb-2">Open Tuesday - Saturday</p>
          <p className="font-mono text-lg">8:00 AM - 7:00 PM</p>
        </div>
      </div>
    </section>
  )
}
