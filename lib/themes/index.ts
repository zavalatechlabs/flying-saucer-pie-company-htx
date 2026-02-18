/**
 * Theme System for Flying Saucer Pie Company
 *
 * Each theme defines CSS variables that override the base design tokens.
 * Themes are applied via data-theme attribute on the html element.
 *
 * Barrel entry point — imports from focused sub-modules and assembles the themes record.
 */

export type { Theme } from './types'
import type { Theme } from './types'
import { defaultTheme } from './default'
import { legacyThemes } from './legacy'

// ═══════════════════════════════════════════════════════════════
// ASSEMBLED THEMES RECORD (preserves original key order)
// ═══════════════════════════════════════════════════════════════

export const themes: Record<string, Theme> = {
  // Main theme - Warm Parchment & Space Navy
  default: {
    id: 'default',
    name: 'Space Parchment',
    description: 'Warm parchment canvas with deep space navy — refined and inviting',
    emoji: '🪐',
    colors: {
      bg: '#F5F2EB', // Warm parchment — main page canvas
      bgAlt: '#ECEBE4', // Warm beige — alternating sections
      surface: '#FFFFFF', // Clean white — cards, elevated surfaces
      ink: '#1A1A2E', // Deep space navy — primary text + dark section bg
      inkMuted: '#394867', // Slate blue — secondary text, captions
      accent: '#2B3A55', // Dark navy slate — primary CTAs, links
      accent2: '#2E2E38', // Deep charcoal — secondary CTAs, badges
      border: '#ECEBE4', // Warm beige — subtle borders
      heroBg: '#F5F2EB',
      heroGradient: 'linear-gradient(145deg, #FFFFFF 0%, #F5F2EB 50%, #ECEBE4 100%)',
    },
  },

  // Legacy themes (old iterations + V2 explorations) — see ./legacy.ts
  ...legacyThemes,

  // ═══════════════════════════════════════════════════════════════
  // RETRO DINER VARIATIONS (v1-v4)
  // All variations of the core retro diner theme
  // ═══════════════════════════════════════════════════════════════

  // Variation 1: Vintage Paper & Ink
  vintagePaper: {
    id: 'vintagePaper',
    name: 'Vintage Paper',
    description: 'Layered paper textures with hand-drawn warmth',
    emoji: '🎨',
    colors: {
      bg: '#FDF6E3',
      bgAlt: '#F5ECD7',
      surface: '#FFFEFA',
      ink: '#2D2A24',
      inkMuted: '#6B6459',
      accent: '#C7522A',
      accent2: '#5B7B65',
      border: '#D4C9B5',
      heroBg: '#FDF6E3',
      heroGradient:
        'radial-gradient(ellipse 120% 100% at 50% 30%, #FFFEF8 0%, #FDF6E3 40%, #F5ECD7 100%)',
    },
  },

  // Variation 2: Space City Houston
  houstonPride: {
    id: 'houstonPride',
    name: 'Space City HTX',
    description: 'Houston skyline with warm sunset tones',
    emoji: '🏙️',
    colors: {
      bg: '#FFF5EB',
      bgAlt: '#FFECD9',
      surface: '#FFFFFF',
      ink: '#1F2937',
      inkMuted: '#6B7280',
      accent: '#E85D04',
      accent2: '#003087',
      border: '#FED7AA',
      heroBg: '#FFF5EB',
      heroGradient: 'linear-gradient(180deg, #FFF5EB 0%, #FFE4CC 40%, #FECACA 80%, #FFF5EB 100%)',
    },
  },

  // Variation 3: Atomic Age Deluxe
  atomicAge: {
    id: 'atomicAge',
    name: 'Atomic Age',
    description: 'Vibrant 1950s diner glamour',
    emoji: '✨',
    colors: {
      bg: '#F0FDF9',
      bgAlt: '#FEFCE8',
      surface: '#FFFFFF',
      ink: '#1C1917',
      inkMuted: '#57534E',
      accent: '#F97316',
      accent2: '#14B8A6',
      border: '#D1FAE5',
      heroBg: '#F0FDF9',
      heroGradient: 'linear-gradient(135deg, #F0FDF9 0%, #FEFCE8 50%, #FFF7ED 100%)',
    },
  },

  // Variation 4: Warm Mocha Evening
  warmMocha: {
    id: 'warmMocha',
    name: 'Warm Mocha',
    description: 'Cozy evening bakery with rich tones',
    emoji: '☕',
    colors: {
      bg: '#FAF6F1',
      bgAlt: '#F0E6DB',
      surface: '#FFFCF7',
      ink: '#3D2C1E',
      inkMuted: '#7A6555',
      accent: '#B45309',
      accent2: '#78350F',
      border: '#E6D5C3',
      heroBg: '#FAF6F1',
      heroGradient:
        'radial-gradient(ellipse 100% 80% at 50% 20%, #FFFCF7 0%, #FAF6F1 40%, #F0E6DB 100%)',
    },
  },

  // Main: Combined best elements (Vintage Paper + Atomic footer + Houston skyline)
  main: {
    id: 'main',
    name: 'Main',
    description: 'Best elements combined - the definitive theme',
    emoji: '⭐',
    colors: {
      bg: '#FDF6E3',
      bgAlt: '#F0FDF9',
      surface: '#FFFEFA',
      ink: '#2D2A24',
      inkMuted: '#6B6459',
      accent: '#C7522A',
      accent2: '#14B8A6',
      border: '#D4C9B5',
      heroBg: '#FDF6E3',
      heroGradient:
        'radial-gradient(ellipse 120% 100% at 50% 30%, #FFFEF8 0%, #FDF6E3 40%, #F5ECD7 100%)',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 🆕 NEW EXPERIMENTAL THEMES - Hero Background Variations
  // Testing different gradients and subtle animations
  // ═══════════════════════════════════════════════════════════════

  // NEW 1: Shooting Stars - Occasional diagonal streaks
  auroraGlow: {
    id: 'auroraGlow',
    name: '🆕 Shooting Stars',
    description: 'Soft UI + occasional shooting star streaks',
    emoji: '💫',
    colors: {
      bg: '#F8F9FC',
      bgAlt: '#F0F2F8',
      surface: '#FFFFFF',
      ink: '#1E1B4B', // Deep indigo for contrast
      inkMuted: '#4C4789',
      accent: '#020169', // Hero blue
      accent2: '#7C3AED',
      border: '#E0E4ED',
      heroBg: '#F8F9FC',
      heroGradient:
        'linear-gradient(135deg, #F8F9FC 0%, #EDE9FE 30%, #DDD6FE 50%, #E0E7FF 70%, #F8F9FC 100%)',
    },
  },

  // NEW 2: Twinkling Stars - Stars that fade in and out
  sunsetWarmth: {
    id: 'sunsetWarmth',
    name: '🆕 Twinkling Stars',
    description: 'Soft UI + gentle twinkling star field',
    emoji: '✨',
    colors: {
      bg: '#FFFBF5',
      bgAlt: '#FEF3E2',
      surface: '#FFFFFF',
      ink: '#422006', // Dark brown for warmth
      inkMuted: '#78350F',
      accent: '#EA580C',
      accent2: '#020169', // Hero blue
      border: '#FED7AA',
      heroBg: '#FFFBF5',
      heroGradient:
        'linear-gradient(180deg, #FFFBF5 0%, #FEF3C7 25%, #FECACA 50%, #FED7AA 75%, #FFFBF5 100%)',
    },
  },

  // NEW 3: Rising Particles - Gentle upward floating dots
  cosmicDust: {
    id: 'cosmicDust',
    name: '🆕 Rising Particles',
    description: 'Soft UI + particles floating upward',
    emoji: '🫧',
    colors: {
      bg: '#F5F5F7',
      bgAlt: '#EBEBF0',
      surface: '#FFFFFF',
      ink: '#1A1A2E',
      inkMuted: '#52525B',
      accent: '#020169', // Hero blue
      accent2: '#6366F1',
      border: '#D4D4D8',
      heroBg: '#F5F5F7',
      heroGradient:
        'radial-gradient(ellipse 150% 100% at 50% 0%, #FFFFFF 0%, #F5F5F7 40%, #EBEBF0 100%)',
    },
  },

  // NEW 4: Aurora Waves - Slow moving gradient bands
  oceanBreeze: {
    id: 'oceanBreeze',
    name: '🆕 Aurora Waves',
    description: 'Soft UI + slow drifting color bands',
    emoji: '🌊',
    colors: {
      bg: '#F0FDFA',
      bgAlt: '#CCFBF1',
      surface: '#FFFFFF',
      ink: '#134E4A', // Dark teal for contrast
      inkMuted: '#0F766E',
      accent: '#0D9488',
      accent2: '#020169', // Hero blue
      border: '#99F6E4',
      heroBg: '#F0FDFA',
      heroGradient:
        'linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 20%, #CCFBF1 50%, #A5F3FC 80%, #F0FDFA 100%)',
    },
  },

  // NEW 5: Nebula Pulse - Subtle breathing glows
  softCloud: {
    id: 'softCloud',
    name: '🆕 Nebula Pulse',
    description: 'Soft UI + breathing/pulsing glow effects',
    emoji: '🌌',
    colors: {
      bg: '#FAFAFA',
      bgAlt: '#F4F4F5',
      surface: '#FFFFFF',
      ink: '#18181B',
      inkMuted: '#52525B',
      accent: '#020169', // Hero blue
      accent2: '#A1A1AA',
      border: '#E4E4E7',
      heroBg: '#FAFAFA',
      heroGradient:
        'radial-gradient(ellipse 100% 80% at 50% 20%, #FFFFFF 0%, #FAFAFA 30%, #F4F4F5 60%, #E4E4E7 100%)',
    },
  },

  // NEW 6: Meteors — Aceternity UI-style meteor shower (light theme)
  meteorShower: {
    id: 'meteorShower',
    name: '🆕 Meteor Shower',
    description: 'Aceternity-style meteors on a pale indigo sky',
    emoji: '☄️',
    colors: {
      bg: '#F4F4FB',
      bgAlt: '#EEEEF8',
      surface: '#FFFFFF',
      ink: '#1E1B4B',
      inkMuted: '#4C4789',
      accent: '#020169', // Hero blue
      accent2: '#7C3AED',
      border: '#C7C7E8',
      heroBg: '#F4F4FB',
      heroGradient: 'linear-gradient(160deg, #F4F4FB 0%, #EEEEF8 40%, #E8E8F4 100%)',
    },
  },
}

export const themeList = Object.values(themes)

export function getThemeById(id: string): Theme {
  return themes[id] ?? defaultTheme
}
