/**
 * Theme type definitions for Flying Saucer Pie Company
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
