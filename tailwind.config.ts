import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // V1 Primary Palette - Cosmic Purple Theme
        'cosmic-purple': {
          DEFAULT: '#6B2CBF',
          50: '#F5EEFF',
          100: '#E8D9FF',
          200: '#D4B5FF',
          300: '#B88FFF',
          400: '#9B5FE6',
          500: '#6B2CBF',
          600: '#5722A1',
          700: '#4F1E99',
          800: '#3D1675',
          900: '#2B0F53',
        },
        
        'electric-blue': {
          DEFAULT: '#00D4FF',
          50: '#E5F9FF',
          100: '#CCF3FF',
          200: '#99E8FF',
          300: '#66DCFF',
          400: '#33E0FF',
          500: '#00D4FF',
          600: '#00A8CC',
          700: '#007D99',
          800: '#005266',
          900: '#002633',
        },
        
        'warm-cream': {
          DEFAULT: '#FFF8F3',
          50: '#FFFDFB',
          100: '#FFF8F3',
          200: '#FFF3E6',
          300: '#FFEEDA',
          400: '#F5E8DD',
          500: '#EDD9C7',
          600: '#D9C0A8',
          700: '#BFA88F',
          800: '#9A8873',
          900: '#756856',
        },
        
        'deep-navy': {
          DEFAULT: '#0B1929',
          50: '#E6E9EC',
          100: '#CCD4D9',
          200: '#99A9B3',
          300: '#667E8D',
          400: '#334D66',
          500: '#1A2B3E',
          600: '#0B1929',
          700: '#050D1A',
          800: '#030810',
          900: '#010408',
        },
        
        'sunset-orange': {
          DEFAULT: '#FF6B35',
          50: '#FFEDE8',
          100: '#FFDBD1',
          200: '#FFB8A3',
          300: '#FF9475',
          400: '#FF8F5C',
          500: '#FF6B35',
          600: '#E55A2B',
          700: '#CC4A21',
          800: '#B23B18',
          900: '#992C0E',
        },
        
        // Accent Colors
        'lavender': {
          DEFAULT: '#C9A9E0',
          50: '#F9F5FC',
          100: '#F0E5F7',
          200: '#E4D1F0',
          300: '#D5B8E7',
          400: '#C9A9E0',
          500: '#B68FD3',
          600: '#9A6FC0',
          700: '#7F4FA8',
          800: '#65398A',
          900: '#4B2766',
        },
        
        'mint': {
          DEFAULT: '#A8E6CF',
          50: '#F0FCF7',
          100: '#E0F9EE',
          200: '#C8F2DE',
          300: '#B0EBCE',
          400: '#A8E6CF',
          500: '#84D4B3',
          600: '#5FBC96',
          700: '#3DA47A',
          800: '#2E8660',
          900: '#206847',
        },
        
        // Semantic Colors
        'success': {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        
        'warning': {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        
        'error': {
          DEFAULT: '#EF4444',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        
        'info': {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        
        // Neutral Grays
        'neutral': {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        
        // Legacy colors for backwards compatibility
        'space-night': '#0B1929',
        'cosmic-orange': '#FF6B35',
        'cream-white': '#FFF8F3',
        'dust-darkest': '#1F2937',
        'dust-dark': '#374151',
        'dust-medium': '#6B7280',
        'dust-light': '#D1D5DB',
        'dust-lightest': '#F3F4F6',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // V1 Typography Scale
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // V1 Spacing System (section padding tokens)
        'section-xs': '2rem',
        'section-sm': '3rem',
        'section': '4rem',
        'section-lg': '6rem',
        'section-xl': '8rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'steam': 'steam 3s ease-out infinite',
        'ufo-deliver': 'ufo-deliver 4s ease-in-out',
        'constellation': 'constellation-pulse 2s ease-in-out infinite',
        'space-dust': 'space-dust 20s linear infinite',
        'starburst': 'starburst 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%': {
            transform: 'translateY(0) scaleX(1)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(-20px) scaleX(1.2)',
            opacity: '0.1',
          },
          '100%': {
            transform: 'translateY(-40px) scaleX(0.8)',
            opacity: '0',
          },
        },
        'ufo-deliver': {
          '0%': {
            transform: 'translateX(-100%) translateY(-50px) scale(0.5)',
            opacity: '0',
          },
          '20%': {
            opacity: '1',
          },
          '50%': {
            transform: 'translateX(50%) translateY(0) scale(1)',
          },
          '60%': {
            transform: 'translateX(50%) translateY(20px) scale(1)',
          },
          '100%': {
            transform: 'translateX(50%) translateY(0) scale(1)',
          },
        },
        'constellation-pulse': {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
        },
        'space-dust': {
          '0%': {
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100vh) rotate(360deg)',
            opacity: '0',
          },
        },
        'starburst': {
          '0%, 100%': {
            transform: 'rotate(0deg) scale(1)',
            opacity: '0.05',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.1)',
            opacity: '0.08',
          },
        },
      },
      boxShadow: {
        'cosmic': '0 10px 25px -5px rgba(107, 44, 191, 0.3)',
        'cosmic-hover': '0 20px 35px -5px rgba(107, 44, 191, 0.4)',
        'glow-sm': '0 0 10px rgba(107, 44, 191, 0.2)',
        'glow-md': '0 0 20px rgba(107, 44, 191, 0.3)',
        'glow-lg': '0 0 30px rgba(107, 44, 191, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
