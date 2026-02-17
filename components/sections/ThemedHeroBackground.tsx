'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  delay: number
}

type ThemeId =
  | 'default'
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

interface ThemedHeroBackgroundProps {
  theme: ThemeId
}

export function ThemedHeroBackground({ theme }: ThemedHeroBackgroundProps) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate stars for space themes
    if (theme === 'spaceCity' || theme === 'neonNights' || theme === 'houstonPride') {
      const starCount = theme === 'houstonPride' ? 20 : 50
      const newStars: Star[] = Array.from({ length: starCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60, // Keep stars in upper portion for houstonPride
        size: Math.random() * 2 + 1,
        opacity: theme === 'houstonPride' ? Math.random() * 0.2 + 0.1 : Math.random() * 0.5 + 0.3,
        delay: Math.random() * 3,
      }))
      setStars(newStars)
    }
  }, [theme])

  // ═══════════════════════════════════════════════════════════════
  // RETRO DINER VARIATIONS
  // ═══════════════════════════════════════════════════════════════

  // Variation 1: Vintage Paper & Ink
  if (theme === 'vintagePaper') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Base warm parchment gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 120% 100% at 50% 30%, #FFFEF8 0%, #FDF6E3 40%, #F5ECD7 100%)',
          }}
        />

        {/* Paper texture overlay - visible grain */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Ink bleed / watercolor edges */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 10% 20%, #C7522A 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 90% 80%, #5B7B65 0%, transparent 50%)
            `,
          }}
        />

        {/* Soft vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(45, 42, 36, 0.06) 100%)',
          }}
        />

        {/* Decorative ink splatter dots */}
        <div className="absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-[#C7522A] opacity-[0.08]" />
        <div className="absolute top-[25%] right-[12%] w-1.5 h-1.5 rounded-full bg-[#5B7B65] opacity-[0.06]" />
        <div className="absolute bottom-[20%] left-[15%] w-1 h-1 rounded-full bg-[#2D2A24] opacity-[0.05]" />
      </div>
    )
  }

  // Variation 2: Space City Houston
  if (theme === 'houstonPride') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Warm sunset gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #FFF5EB 0%, #FFE4CC 35%, #FFDAB9 60%, #FFF5EB 100%)',
          }}
        />

        {/* Subtle warm glow from center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 40%, rgba(255, 255, 255, 0.6) 0%, transparent 60%)',
          }}
        />

        {/* Faint star points (Houston = Space City) */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-[#E85D04]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}

        {/* Houston skyline silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[25%] flex items-end justify-center">
          <Image
            src="/brand/houston-skyline.svg"
            alt=""
            width={1200}
            height={200}
            className="w-full max-w-[1400px] h-auto opacity-[0.08] object-contain object-bottom"
            style={{ color: '#1F2937' }}
          />
        </div>

        {/* Soft coral accent at horizon */}
        <div
          className="absolute bottom-[20%] left-0 right-0 h-[15%]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(254, 202, 202, 0.3) 50%, transparent 100%)',
          }}
        />
      </div>
    )
  }

  // Variation 3: Atomic Age Deluxe
  if (theme === 'atomicAge') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Fresh mint-to-cream gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #F0FDF9 0%, #FEFCE8 50%, #FFF7ED 100%)',
          }}
        />

        {/* Chrome reflection effect at top */}
        <div
          className="absolute top-0 left-0 right-0 h-[30%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 30%, transparent 100%)',
          }}
        />

        {/* Atomic/starburst pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'url("/brand/atomic-pattern.svg")',
            backgroundSize: '120px 120px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Coral accent glow */}
        <div
          className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full opacity-[0.15] blur-3xl"
          style={{
            background: 'radial-gradient(circle, #F97316 0%, transparent 70%)',
          }}
        />

        {/* Teal accent glow */}
        <div
          className="absolute bottom-[15%] left-[10%] w-48 h-48 rounded-full opacity-[0.12] blur-3xl"
          style={{
            background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)',
          }}
        />

        {/* Decorative starburst elements */}
        <svg
          className="absolute top-[8%] left-[5%] w-12 h-12 text-[#F97316] opacity-[0.15]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="50,0 54,42 100,50 54,58 50,100 46,58 0,50 46,42" />
        </svg>
        <svg
          className="absolute bottom-[25%] right-[8%] w-8 h-8 text-[#14B8A6] opacity-[0.12]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="50,0 54,42 100,50 54,58 50,100 46,58 0,50 46,42" />
        </svg>
      </div>
    )
  }

  // Variation 4: Warm Mocha Evening
  if (theme === 'warmMocha') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Warm mocha gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 20%, #FFFCF7 0%, #FAF6F1 40%, #F0E6DB 100%)',
          }}
        />

        {/* Golden hour warm glow from center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255, 237, 213, 0.5) 0%, transparent 60%)',
          }}
        />

        {/* Subtle wood grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.02 0.4' numOctaves='2' result='noise'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: '400px 100px',
          }}
        />

        {/* Warm amber accent */}
        <div
          className="absolute top-[15%] left-[50%] -translate-x-1/2 w-96 h-96 rounded-full opacity-[0.08] blur-3xl"
          style={{
            background: 'radial-gradient(circle, #B45309 0%, transparent 60%)',
          }}
        />

        {/* Soft shadows for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 30% at 15% 85%, rgba(61, 44, 30, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 85% 85%, rgba(61, 44, 30, 0.05) 0%, transparent 50%)
            `,
          }}
        />

        {/* Cozy vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 85% 75% at 50% 45%, transparent 50%, rgba(61, 44, 30, 0.04) 100%)',
          }}
        />
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════════
  // ORIGINAL THEMES (preserved from before)
  // ═══════════════════════════════════════════════════════════════

  if (theme === 'spaceCity') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, #1A1F35 0%, #0B1426 40%, #050A15 100%)',
          }}
        />
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: '2s',
            }}
          />
        ))}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            top: '10%',
            right: '-10%',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)',
            bottom: '20%',
            left: '10%',
          }}
        />
      </div>
    )
  }

  if (theme === 'gulfCoast') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #FEF3C7 0%, #FED7AA 25%, #FECACA 50%, #F0FDFA 100%)',
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FBBF24 0%, #F97316 60%, transparent 70%)',
            top: '15%',
            right: '20%',
            filter: 'blur(2px)',
          }}
        />
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-24 opacity-30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            fill="#0D9488"
          />
        </svg>
      </div>
    )
  }

  if (theme === 'editorial') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FFFBF5 0%, #FEF2E8 100%)',
          }}
        />
        <div
          className="absolute w-1/3 h-full right-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, #000000 100%)',
            opacity: 0.03,
          }}
        />
      </div>
    )
  }

  if (theme === 'neonNights') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, #1A1A2E 0%, #0A0A0A 70%)',
          }}
        />
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity * 0.5,
              animationDelay: `${star.delay}s`,
              animationDuration: '3s',
            }}
          />
        ))}
        <div
          className="absolute w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)',
            top: '5%',
            left: '10%',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
            bottom: '15%',
            right: '15%',
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #EC4899 1px, transparent 1px),
              linear-gradient(to bottom, #06B6D4 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════════
  // V2 CREATIVE EXPLORATIONS (v5-v11)
  // ═══════════════════════════════════════════════════════════════

  // V5: Nifty Retro Typography
  if (theme === 'niftyRetro') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, #FDF8F3 0%, #F5E6D3 50%, #EBD9C4 100%)',
          }}
        />
        {/* Vintage texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px',
          }}
        />
        {/* Retro decorative circles */}
        <div className="absolute top-[10%] left-[8%] w-32 h-32 rounded-full opacity-[0.06] border-4 border-[#D35400]" />
        <div className="absolute bottom-[15%] right-[10%] w-24 h-24 rounded-full opacity-[0.05] border-4 border-[#8B4513]" />
      </div>
    )
  }

  // V6: Neubrutalism Bold
  if (theme === 'neubrutalism') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 50%, #FED7AA 100%)',
          }}
        />
        {/* Bold geometric shapes */}
        <div
          className="absolute top-[5%] right-[5%] w-40 h-40 bg-[#F472B6] opacity-[0.15]"
          style={{ transform: 'rotate(12deg)' }}
        />
        <div
          className="absolute bottom-[10%] left-[8%] w-32 h-32 bg-[#3B82F6] opacity-[0.12]"
          style={{ transform: 'rotate(-8deg)' }}
        />
        <div className="absolute top-[40%] left-[15%] w-20 h-20 rounded-full bg-[#FBBF24] opacity-[0.2]" />
      </div>
    )
  }

  // V7: Neumorphism Soft
  if (theme === 'neumorphism') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
          }}
        />
        {/* Soft inner shadows */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 20px 20px 60px #D0D0D0, inset -20px -20px 60px #FFFFFF',
            borderRadius: '0',
          }}
        />
      </div>
    )
  }

  // V8: Gradient Mesh Flow
  if (theme === 'gradientMesh') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #FED7AA 0%, #FECACA 25%, #DDD6FE 50%, #C7D2FE 75%, #FFF5F5 100%)',
          }}
        />
        {/* Organic blob shapes */}
        <div
          className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #F472B6 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[50%] left-[50%] w-40 h-40 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)' }}
        />
        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px',
          }}
        />
      </div>
    )
  }

  // V9: Dark Luxe Evening
  if (theme === 'darkLuxe') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, #2D2926 0%, #1A1714 60%, #0F0D0B 100%)',
          }}
        />
        {/* Gold accent glows */}
        <div
          className="absolute top-[15%] left-[50%] -translate-x-1/2 w-96 h-64 rounded-full opacity-[0.08] blur-3xl"
          style={{ background: 'radial-gradient(circle, #D4A574 0%, transparent 60%)' }}
        />
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}
        />
      </div>
    )
  }

  // V10: Bento Grid Layout
  if (theme === 'bentoGrid') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FAFAF9 0%, #F5F5F4 100%)',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #A8A29E 1px, transparent 1px),
              linear-gradient(to bottom, #A8A29E 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    )
  }

  // V11: Playful Illustrated
  if (theme === 'playfulIllustrated') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FFFBF5 0%, #FEF7ED 50%, #FFF7ED 100%)',
          }}
        />
        {/* Doodle-style dots */}
        <div className="absolute top-[8%] left-[12%] w-3 h-3 rounded-full bg-[#FB923C] opacity-[0.3]" />
        <div className="absolute top-[15%] right-[18%] w-2 h-2 rounded-full bg-[#34D399] opacity-[0.25]" />
        <div className="absolute bottom-[20%] left-[20%] w-2.5 h-2.5 rounded-full bg-[#60A5FA] opacity-[0.2]" />
        <div className="absolute bottom-[30%] right-[12%] w-2 h-2 rounded-full bg-[#F472B6] opacity-[0.25]" />
        <div className="absolute top-[45%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#FBBF24] opacity-[0.3]" />
        {/* Squiggly line decorations would go here (SVG) */}
      </div>
    )
  }

  // Default theme
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #FFF8F0 0%, #FFE4D6 100%)',
        }}
      />
    </div>
  )
}
