import type { Theme } from './types'

/**
 * Fallback theme used when a requested theme ID is not found.
 * Used internally by getThemeById.
 */
export const defaultTheme: Theme = {
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
