import type { Theme } from './types'

/**
 * Legacy themes — previous design iterations kept for compatibility.
 * These represent the historical evolution of the Flying Saucer Pie theme system.
 */
export const legacyThemes: Record<string, Theme> = {
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
  // V2 CREATIVE EXPLORATIONS (v5-v11)
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
}
