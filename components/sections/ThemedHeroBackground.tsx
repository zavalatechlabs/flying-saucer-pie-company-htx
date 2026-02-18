'use client'

import {
  ShootingStarsBackground,
  TwinklingStarsBackground,
  RisingParticlesBackground,
  AuroraWavesBackground,
  NebulaPulseBackground,
  MeteorsBackground,
  RetroThemeBackground,
  SpaceThemeBackground,
  LightThemeBackground,
} from './hero-backgrounds'
import type { RetroThemeId, SpaceThemeId, LightThemeId } from './hero-backgrounds'

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

interface ThemedHeroBackgroundProps {
  theme: ThemeId
}

const RETRO_THEMES: RetroThemeId[] = [
  'vintagePaper',
  'houstonPride',
  'atomicAge',
  'warmMocha',
  'niftyRetro',
  'retroDiner',
]

const SPACE_THEMES: SpaceThemeId[] = ['spaceCity', 'neonNights', 'niftyPortal', 'darkLuxe']

const LIGHT_THEMES: LightThemeId[] = [
  'gulfCoast',
  'editorial',
  'neumorphism',
  'neubrutalism',
  'gradientMesh',
  'bentoGrid',
  'playfulIllustrated',
  'main',
]

function isRetroTheme(t: string): t is RetroThemeId {
  return (RETRO_THEMES as string[]).includes(t)
}

function isSpaceTheme(t: string): t is SpaceThemeId {
  return (SPACE_THEMES as string[]).includes(t)
}

function isLightTheme(t: string): t is LightThemeId {
  return (LIGHT_THEMES as string[]).includes(t)
}

export function ThemedHeroBackground({ theme }: ThemedHeroBackgroundProps) {
  // ═══════════════════════════════════════════════════════════════
  // ANIMATED HERO BACKGROUNDS
  // ═══════════════════════════════════════════════════════════════

  if (theme === 'auroraGlow') return <ShootingStarsBackground />
  if (theme === 'sunsetWarmth') return <TwinklingStarsBackground />
  if (theme === 'cosmicDust') return <RisingParticlesBackground />
  if (theme === 'oceanBreeze') return <AuroraWavesBackground />
  if (theme === 'softCloud') return <NebulaPulseBackground />
  if (theme === 'meteorShower') return <MeteorsBackground />

  // ═══════════════════════════════════════════════════════════════
  // STATIC THEME GROUPS
  // ═══════════════════════════════════════════════════════════════

  if (isRetroTheme(theme)) return <RetroThemeBackground theme={theme} />
  if (isSpaceTheme(theme)) return <SpaceThemeBackground theme={theme} />
  if (isLightTheme(theme)) return <LightThemeBackground theme={theme} />

  // Default theme (Soft UI)
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft UI gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />
      {/* Soft inner shadow effect */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow:
            'inset 0 2px 20px rgba(255, 255, 255, 0.8), inset 0 -2px 20px rgba(0, 0, 0, 0.03)',
        }}
      />
    </div>
  )
}
