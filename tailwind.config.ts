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
        'cosmic-purple': '#6B2CBF',
        'cosmic-purple-light': '#8B4FD9',
        'cosmic-purple-dark': '#4F1E99',
        
        'electric-blue': '#00D4FF',
        'electric-blue-light': '#33E0FF',
        'electric-blue-dark': '#00A8CC',
        
        'warm-cream': '#FFF8F3',
        'warm-cream-light': '#FFFDFB',
        'warm-cream-dark': '#F5E8DD',
        
        'deep-navy': '#0B1929',
        'deep-navy-light': '#1A2B3E',
        'deep-navy-dark': '#050D1A',
        
        'sunset-orange': '#FF6B35',
        'sunset-orange-light': '#FF8F5C',
        'sunset-orange-dark': '#E55A2B',
        
        // Legacy colors for backwards compatibility (can be removed after full migration)
        'space-night': '#0B1929',
        'cosmic-orange': '#FF6B35',
        'cream-white': '#FFF8F3',
        
        // Utility colors
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
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'steam': 'steam 3s ease-out infinite',
        'ufo-deliver': 'ufo-deliver 4s ease-in-out',
        'constellation': 'constellation-pulse 2s ease-in-out infinite',
        'space-dust': 'space-dust 20s linear infinite',
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
      },
      boxShadow: {
        'cosmic': '0 10px 25px -5px rgba(255, 107, 53, 0.3)',
        'cosmic-hover': '0 20px 35px -5px rgba(255, 107, 53, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config