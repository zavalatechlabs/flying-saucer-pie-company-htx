'use client'

/**
 * MeteorHeroWrapper
 *
 * Renders the hero with the Meteor Shower animation WITHOUT overriding any
 * CSS variables. The theme stays at whatever ThemeProvider defaults to
 * (Soft UI gray), giving consistent colors across all pages.
 *
 * The meteor animation is purely cosmetic — it lives only in the hero
 * background layer and has no impact on the site-wide color system.
 */
import { HeroSection } from '@/components/sections/HeroSection'
import { MeteorsBackground } from '@/components/sections/AnimatedHeroBackgrounds'

export function MeteorHeroWrapper() {
  return (
    <div className="relative">
      {/* Meteor shower animation — purely visual, no CSS var side effects */}
      <MeteorsBackground />
      {/* Hero with its own default background hidden so meteors show through */}
      <HeroSection hideDefaultBackground />
    </div>
  )
}
