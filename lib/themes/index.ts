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
  // Main theme - Soft UI (Neumorphism) with proper contrast
  // Hero text color: #020169 (incorporated into accent2)
  default: {
    id: 'default',
    name: 'Soft UI',
    description: 'Clean neumorphic design with excellent readability',
    emoji: '🫧',
    colors: {
      bg: '#E8E8E8',
      bgAlt: '#DEDEDE',
      surface: '#F0F0F0',
      ink: '#1A1A2E', // Dark for good contrast
      inkMuted: '#4A4A5A', // Darker muted for better readability
      accent: '#020169', // Hero blue color
      accent2: '#D4856A', // Warm coral
      border: '#C8C8C8',
      heroBg: '#E8E8E8',
      heroGradient: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // OLD THEMES (Previous iterations)
  // ═══════════════════════════════════════════════════════════════

  // Old: Retro Diner
  retroDiner: {
    id: 'retroDiner',
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

  // ═══════════════════════════════════════════════════════════════
  // V2 VARIATIONS (v5-v11) - Creative Explorations
  // ═══════════════════════════════════════════════════════════════

  // V5: Nifty Retro Typography
  niftyRetro: {
    id: 'niftyRetro',
    name: 'Nifty Retro',
    description: 'Retro typography with animated elements',
    emoji: '🎭',
    colors: {
      bg: '#F5E6D3',
      bgAlt: '#EBD9C4',
      surface: '#FDF8F3',
      ink: '#2C1810',
      inkMuted: '#6B5344',
      accent: '#D35400',
      accent2: '#8B4513',
      border: '#D4C4B0',
      heroBg: '#F5E6D3',
      heroGradient: 'radial-gradient(ellipse at 50% 30%, #FDF8F3 0%, #F5E6D3 50%, #EBD9C4 100%)',
    },
  },

  // V6: Neubrutalism Bold
  neubrutalism: {
    id: 'neubrutalism',
    name: 'Neubrutalism',
    description: 'Bold colors, hard shadows, playful chaos',
    emoji: '💥',
    colors: {
      bg: '#FEFCE8',
      bgAlt: '#FEF9C3',
      surface: '#FFFFFF',
      ink: '#000000',
      inkMuted: '#374151',
      accent: '#F472B6',
      accent2: '#3B82F6',
      border: '#000000',
      heroBg: '#FEFCE8',
      heroGradient: 'linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 50%, #FED7AA 100%)',
    },
  },

  // V7: Neumorphism Soft
  neumorphism: {
    id: 'neumorphism',
    name: 'Soft UI',
    description: 'Soft shadows, tactile pressed elements',
    emoji: '🫧',
    colors: {
      bg: '#E8E8E8',
      bgAlt: '#DEDEDE',
      surface: '#F0F0F0',
      ink: '#2D3436',
      inkMuted: '#636E72',
      accent: '#D4856A',
      accent2: '#6B8E9F',
      border: '#D0D0D0',
      heroBg: '#E8E8E8',
      heroGradient: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
    },
  },

  // V8: Gradient Mesh Flow
  gradientMesh: {
    id: 'gradientMesh',
    name: 'Gradient Mesh',
    description: 'Fluid gradients, organic shapes',
    emoji: '🌈',
    colors: {
      bg: '#FFF5F5',
      bgAlt: '#FFF0F5',
      surface: 'rgba(255, 255, 255, 0.8)',
      ink: '#1A1A2E',
      inkMuted: '#6B7280',
      accent: '#F472B6',
      accent2: '#A78BFA',
      border: 'rgba(255, 255, 255, 0.3)',
      heroBg: '#FFF5F5',
      heroGradient:
        'linear-gradient(135deg, #FED7AA 0%, #FECACA 25%, #DDD6FE 50%, #C7D2FE 75%, #FFF5F5 100%)',
    },
  },

  // V9: Dark Luxe Evening
  darkLuxe: {
    id: 'darkLuxe',
    name: 'Dark Luxe',
    description: 'Warm dark theme with gold accents',
    emoji: '🌙',
    colors: {
      bg: '#1A1714',
      bgAlt: '#252220',
      surface: '#2D2926',
      ink: '#F5F0EB',
      inkMuted: '#A39E99',
      accent: '#D4A574',
      accent2: '#B8860B',
      border: '#3D3835',
      heroBg: '#1A1714',
      heroGradient: 'radial-gradient(ellipse at 50% 30%, #2D2926 0%, #1A1714 60%, #0F0D0B 100%)',
    },
  },

  // V10: Bento Grid Layout
  bentoGrid: {
    id: 'bentoGrid',
    name: 'Bento Grid',
    description: 'Modular card layouts, organized chaos',
    emoji: '📦',
    colors: {
      bg: '#FAFAF9',
      bgAlt: '#F5F5F4',
      surface: '#FFFFFF',
      ink: '#1C1917',
      inkMuted: '#57534E',
      accent: '#EA580C',
      accent2: '#0891B2',
      border: '#E7E5E4',
      heroBg: '#FAFAF9',
      heroGradient: 'linear-gradient(180deg, #FAFAF9 0%, #F5F5F4 100%)',
    },
  },

  // V11: Playful Illustrated
  playfulIllustrated: {
    id: 'playfulIllustrated',
    name: 'Playful',
    description: 'Hand-drawn doodles, whimsical feel',
    emoji: '✏️',
    colors: {
      bg: '#FFFBF5',
      bgAlt: '#FEF7ED',
      surface: '#FFFFFF',
      ink: '#374151',
      inkMuted: '#6B7280',
      accent: '#FB923C',
      accent2: '#34D399',
      border: '#E5E7EB',
      heroBg: '#FFFBF5',
      heroGradient: 'linear-gradient(180deg, #FFFBF5 0%, #FEF7ED 50%, #FFF7ED 100%)',
    },
  },

  // V12: Nifty Portal Inspired (Dark + Gold)
  niftyPortal: {
    id: 'niftyPortal',
    name: 'Nifty Portal',
    description: 'Dark theme with gold accents, retro type',
    emoji: '🌟',
    colors: {
      bg: '#0A0A0A',
      bgAlt: '#141414',
      surface: '#1A1A1A',
      ink: '#FFFFFF',
      inkMuted: '#9CA3AF',
      accent: '#FFD700',
      accent2: '#FFC107',
      border: '#2A2A2A',
      heroBg: '#0A0A0A',
      heroGradient: 'radial-gradient(ellipse at 50% 30%, #1A1A1A 0%, #0A0A0A 60%, #000000 100%)',
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
