'use client'

import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  delay: number
}

interface ThemedHeroBackgroundProps {
  theme: 'default' | 'spaceCity' | 'gulfCoast' | 'editorial' | 'neonNights'
}

export function ThemedHeroBackground({ theme }: ThemedHeroBackgroundProps) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate stars for space themes
    if (theme === 'spaceCity' || theme === 'neonNights') {
      const newStars: Star[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 3,
      }))
      setStars(newStars)
    }
  }, [theme])

  if (theme === 'spaceCity') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep space gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, #1A1F35 0%, #0B1426 40%, #050A15 100%)',
          }}
        />
        {/* Stars */}
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
        {/* Nebula glow */}
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
        {/* Sunset gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #FEF3C7 0%, #FED7AA 25%, #FECACA 50%, #F0FDFA 100%)',
          }}
        />
        {/* Sun */}
        <div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, #FBBF24 0%, #F97316 60%, transparent 70%)',
            top: '15%',
            right: '20%',
            filter: 'blur(2px)',
          }}
        />
        {/* Waves at bottom */}
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
        {/* Clean gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FFFBF5 0%, #FEF2E8 100%)',
          }}
        />
        {/* Bold geometric accent */}
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
        {/* Dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, #1A1A2E 0%, #0A0A0A 70%)',
          }}
        />
        {/* Stars */}
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
        {/* Neon glow - pink */}
        <div
          className="absolute w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)',
            top: '5%',
            left: '10%',
          }}
        />
        {/* Neon glow - cyan */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
            bottom: '15%',
            right: '15%',
          }}
        />
        {/* Grid lines */}
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
