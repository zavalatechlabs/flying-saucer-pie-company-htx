/**
 * Application Configuration
 * 
 * Centralized configuration loaded from environment variables.
 * All config values are validated at build time.
 */

// Helper to get required env var
function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

// Helper to get optional env var
function getOptionalEnvVar(key: string, defaultValue?: string): string | undefined {
  return process.env[key] || defaultValue
}

// Helper to parse boolean env var
function getBooleanEnvVar(key: string, defaultValue: boolean = false): boolean {
  const value = process.env[key]
  if (value === undefined) return defaultValue
  return value !== 'false' && value !== '0' && value !== ''
}

/**
 * Application configuration object
 * All values are read from environment variables
 */
export const config = {
  // Site configuration
  site: {
    url: getEnvVar('NEXT_PUBLIC_SITE_URL', 'https://flyingsaucerpieshop.com'),
    name: getEnvVar('NEXT_PUBLIC_SITE_NAME', 'Flying Saucer Pie Company'),
  },

  // Business contact information
  contact: {
    phone: getEnvVar('NEXT_PUBLIC_PHONE', '713-694-1141'),
    email: getEnvVar('NEXT_PUBLIC_EMAIL', 'info@flyingsaucerpies.com'),
  },

  // Social media links
  social: {
    facebook: getEnvVar('NEXT_PUBLIC_FACEBOOK_URL', 'https://facebook.com/flyingsaucerpies'),
    instagram: getEnvVar('NEXT_PUBLIC_INSTAGRAM_URL', 'https://instagram.com/flyingsaucerpies'),
  },

  // Feature flags
  features: {
    heroAnimation: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_HERO_ANIMATION', true),
    reviewAnimation: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_REVIEW_ANIMATION', true),
    scrollAnimations: getBooleanEnvVar('NEXT_PUBLIC_ENABLE_SCROLL_ANIMATIONS', true),
  },

  // Analytics
  analytics: {
    gaId: getOptionalEnvVar('NEXT_PUBLIC_GA_ID'),
    vercelAnalytics: getBooleanEnvVar('NEXT_PUBLIC_VERCEL_ANALYTICS', true),
  },

  // Development settings
  dev: {
    debug: getBooleanEnvVar('NEXT_PUBLIC_DEBUG', false),
  },

  // API keys (example for future use)
  api: {
    stripePublicKey: getOptionalEnvVar('NEXT_PUBLIC_STRIPE_PUBLIC_KEY'),
  },
} as const

// Type for the config object
export type Config = typeof config

// Validate required config at build time
if (typeof window === 'undefined') {
  // Server-side only validation
  console.log('✓ Configuration loaded successfully')
  
  // Log warnings for missing optional values
  if (!config.analytics.gaId) {
    console.warn('⚠ Google Analytics ID not configured (NEXT_PUBLIC_GA_ID)')
  }
}

// Export individual config sections for convenience
export const { site, contact, social, features, analytics, dev, api } = config
