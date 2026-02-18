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

export type SpaceThemeId = 'spaceCity' | 'neonNights' | 'niftyPortal' | 'darkLuxe'

interface Props {
  theme: SpaceThemeId
}

export function SpaceThemeBackground({ theme }: Props) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    if (theme === 'spaceCity' || theme === 'neonNights') {
      const newStars: Star[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60,
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

  // V12: Nifty Portal (Dark + Gold)
  if (theme === 'niftyPortal') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep black gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, #1A1A1A 0%, #0A0A0A 60%, #000000 100%)',
          }}
        />
        {/* Gold accent glow */}
        <div
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-80 h-80 rounded-full opacity-[0.12] blur-3xl"
          style={{ background: 'radial-gradient(circle, #FFD700 0%, transparent 60%)' }}
        />
        {/* Secondary gold accent */}
        <div
          className="absolute bottom-[25%] right-[15%] w-48 h-48 rounded-full opacity-[0.08] blur-3xl"
          style={{ background: 'radial-gradient(circle, #FFC107 0%, transparent 60%)' }}
        />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px',
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

  return null
}
