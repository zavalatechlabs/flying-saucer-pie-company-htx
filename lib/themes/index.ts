/**
 * Theme System for Flying Saucer Pie Company
 *
 * Each theme defines CSS variables that override the base design tokens.
 * Themes are applied via data-theme attribute on the html element.
 */

export interface Theme {
  id: string
  name: string
  description: string
  emoji: string
  colors: {
    bg: string
    bgAlt: string
    surface: string
    ink: string
    inkMuted: string
    accent: string
    accent2: string
    border: string
    // Hero-specific
    heroBg: string
    heroGradient: string
  }
}

export const themes: Record<string, Theme> = {
  // Current default theme (for reference)
  default: {
    id: 'default',
    name: 'Retro Diner',
    description: 'Classic retro space-age diner aesthetic',
    emoji: '🛸',
    colors: {
      bg: '#FFF8F0',
      bgAlt: '#FFF3E6',
      surface: '#FFFFFF',
      ink: '#1A1A2E',
      inkMuted: '#4A5568',
      accent: '#D4856A',
      accent2: '#6B8E9F',
      border: '#E8DDD0',
      heroBg: '#FFF8F0',
      heroGradient: 'radial-gradient(ellipse at center, #FFF8F0 0%, #FFE4D6 100%)',
    },
  },

  // Theme 1: Space City Houston
  spaceCity: {
    id: 'spaceCity',
    name: 'Space City',
    description: 'NASA-inspired cosmic Houston theme',
    emoji: '🚀',
    colors: {
      bg: '#0B1426',
      bgAlt: '#1A1F35',
      surface: '#1E2642',
      ink: '#F0F4FF',
      inkMuted: '#94A3B8',
      accent: '#FF6B35',
      accent2: '#8B5CF6',
      border: '#334155',
      heroBg: '#0B1426',
      heroGradient: 'radial-gradient(ellipse at center, #1A1F35 0%, #0B1426 50%, #050A15 100%)',
    },
  },

  // Theme 2: Gulf Coast Breezy
  gulfCoast: {
    id: 'gulfCoast',
    name: 'Gulf Coast',
    description: 'Relaxed coastal vibes from Galveston',
    emoji: '🌊',
    colors: {
      bg: '#F0FDFA',
      bgAlt: '#CCFBF1',
      surface: '#FFFFFF',
      ink: '#134E4A',
      inkMuted: '#5EEAD4',
      accent: '#F97316',
      accent2: '#0D9488',
      border: '#99F6E4',
      heroBg: '#F0FDFA',
      heroGradient: 'linear-gradient(180deg, #FEF3C7 0%, #FECACA 30%, #F0FDFA 100%)',
    },
  },

  // Theme 3: Modern Editorial
  editorial: {
    id: 'editorial',
    name: 'Editorial',
    description: 'Bold magazine-style typography',
    emoji: '📰',
    colors: {
      bg: '#FFFBF5',
      bgAlt: '#FAFAF9',
      surface: '#FFFFFF',
      ink: '#171717',
      inkMuted: '#525252',
      accent: '#C2410C',
      accent2: '#000000',
      border: '#E5E5E5',
      heroBg: '#FFFBF5',
      heroGradient: 'linear-gradient(180deg, #FFFBF5 0%, #FEF2E8 100%)',
    },
  },

  // Theme 4: HTX Neon Nights
  neonNights: {
    id: 'neonNights',
    name: 'Neon Nights',
    description: 'Houston nightlife dark mode',
    emoji: '🌃',
    colors: {
      bg: '#0A0A0A',
      bgAlt: '#1F1F1F',
      surface: '#171717',
      ink: '#FFFFFF',
      inkMuted: '#A1A1A1',
      accent: '#EC4899',
      accent2: '#06B6D4',
      border: '#333333',
      heroBg: '#0A0A0A',
      heroGradient: 'radial-gradient(ellipse at center, #1A1A2E 0%, #0A0A0A 70%)',
    },
  },

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
}

// Default theme constant for type safety
const defaultTheme: Theme = {
  id: 'default',
  name: 'Retro Diner',
  description: 'Classic retro space-age diner aesthetic',
  emoji: '🛸',
  colors: {
    bg: '#FFF8F0',
    bgAlt: '#FFF3E6',
    surface: '#FFFFFF',
    ink: '#1A1A2E',
    inkMuted: '#4A5568',
    accent: '#D4856A',
    accent2: '#6B8E9F',
    border: '#E8DDD0',
    heroBg: '#FFF8F0',
    heroGradient: 'radial-gradient(ellipse at center, #FFF8F0 0%, #FFE4D6 100%)',
  },
}

export const themeList = Object.values(themes)

export function getThemeById(id: string): Theme {
  return themes[id] ?? defaultTheme
}
