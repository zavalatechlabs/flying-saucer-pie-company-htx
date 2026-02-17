'use client'

import { useEffect } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedPiesRow } from '@/components/sections/FeaturedPiesRow'
import { ThemedHeroBackground } from '@/components/sections/ThemedHeroBackground'

interface ThemedHomeProps {
  themeId: 'default' | 'spaceCity' | 'gulfCoast' | 'editorial' | 'neonNights'
}

export function ThemedHome({ themeId }: ThemedHomeProps) {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(themeId)
  }, [themeId, setTheme])

  return (
    <>
      {/* Hero with themed background */}
      <div className="relative">
        <ThemedHeroBackground theme={themeId} />
        <HeroSection hideDefaultBackground />
      </div>

      {/* Featured pies section */}
      <FeaturedPiesRow />

      {/* Theme info banner */}
      <section className="py-8 bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-ink-muted text-sm">
            You&apos;re viewing the{' '}
            <span className="font-semibold text-accent">
              {themeId === 'spaceCity' && '🚀 Space City'}
              {themeId === 'gulfCoast' && '🌊 Gulf Coast'}
              {themeId === 'editorial' && '📰 Editorial'}
              {themeId === 'neonNights' && '🌃 Neon Nights'}
            </span>{' '}
            theme. Use the theme switcher in the navbar to compare.
          </p>
        </div>
      </section>
    </>
  )
}
