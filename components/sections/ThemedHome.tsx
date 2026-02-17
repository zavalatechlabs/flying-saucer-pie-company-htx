'use client'

import { useEffect } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedPiesRow } from '@/components/sections/FeaturedPiesRow'
import { ThemedHeroBackground } from '@/components/sections/ThemedHeroBackground'
import { getThemeById } from '@/lib/themes'

type ThemeId =
  | 'default'
  | 'retroDiner'
  | 'spaceCity'
  | 'gulfCoast'
  | 'editorial'
  | 'neonNights'
  | 'vintagePaper'
  | 'houstonPride'
  | 'atomicAge'
  | 'warmMocha'
  | 'niftyRetro'
  | 'neubrutalism'
  | 'neumorphism'
  | 'gradientMesh'
  | 'darkLuxe'
  | 'bentoGrid'
  | 'playfulIllustrated'
  | 'niftyPortal'
  | 'main'
  | 'auroraGlow'
  | 'sunsetWarmth'
  | 'cosmicDust'
  | 'oceanBreeze'
  | 'softCloud'
  | 'meteorShower'

interface ThemedHomeProps {
  themeId: ThemeId
}

export function ThemedHome({ themeId }: ThemedHomeProps) {
  const { setTheme } = useTheme()
  const theme = getThemeById(themeId)

  useEffect(() => {
    setTheme(themeId)
  }, [themeId, setTheme])

  // Check if this is a retro diner variation
  const isRetroDinerVariation = ['vintagePaper', 'houstonPride', 'atomicAge', 'warmMocha'].includes(
    themeId
  )

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
              {theme.emoji} {theme.name}
            </span>{' '}
            theme
            {isRetroDinerVariation && (
              <span className="text-ink-muted"> (Retro Diner variation)</span>
            )}
            . Use the theme switcher in the navbar to compare.
          </p>
        </div>
      </section>
    </>
  )
}
