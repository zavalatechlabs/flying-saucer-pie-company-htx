'use client'

import { useEffect, useState } from 'react'

// ═══════════════════════════════════════════════════════════════
// ANIMATED HERO BACKGROUNDS
// Subtle, modern, moving effects for the Soft UI base
// ═══════════════════════════════════════════════════════════════

interface ShootingStar {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  angle: number
}

interface TwinklingStar {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

interface FloatingParticle {
  id: number
  x: number
  startY: number
  size: number
  delay: number
  duration: number
  opacity: number
}

/**
 * NEW 1: Shooting Stars - Occasional diagonal streaks
 */
export function ShootingStarsBackground() {
  const [stars, setStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    // Generate shooting stars
    const newStars: ShootingStar[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 50,
      delay: i * 3 + Math.random() * 2,
      duration: 1 + Math.random() * 0.5,
      angle: 35 + Math.random() * 20,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft UI base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />

      {/* Shooting stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            transform: `rotate(${star.angle}deg)`,
          }}
        />
      ))}

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 70% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
        }}
      />

      <style jsx>{`
        .shooting-star {
          position: absolute;
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, rgba(99, 102, 241, 0.6), transparent);
          animation: shoot 1.5s ease-out infinite;
          opacity: 0;
        }

        @keyframes shoot {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(0) rotate(35deg);
          }
          10% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateX(150px) translateY(100px) rotate(35deg);
          }
        }
      `}</style>
    </div>
  )
}

/**
 * NEW 2: Twinkling Stars - Stars that fade in and out
 */
export function TwinklingStarsBackground() {
  const [stars, setStars] = useState<TwinklingStar[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 95 + 2.5,
      y: Math.random() * 70 + 5,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft UI base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />

      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="twinkle-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Soft ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 30% 30%, rgba(99, 102, 241, 0.04) 0%, transparent 50%)',
        }}
      />

      <style jsx>{`
        .twinkle-star {
          position: absolute;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.7) 0%, transparent 70%);
          border-radius: 50%;
          animation: twinkle ease-in-out infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  )
}

/**
 * NEW 3: Rising Particles - Gentle upward floating dots
 */
export function RisingParticlesBackground() {
  const [particles, setParticles] = useState<FloatingParticle[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      startY: 100 + Math.random() * 20,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      opacity: 0.2 + Math.random() * 0.3,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft UI base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />

      {/* Rising particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="rising-particle"
          style={{
            left: `${p.x}%`,
            bottom: `-${p.size}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Warm accent glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 30% at 50% 80%, rgba(212, 133, 106, 0.06) 0%, transparent 60%)',
        }}
      />

      <style jsx>{`
        .rising-particle {
          position: absolute;
          background: radial-gradient(circle, rgba(2, 1, 105, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          animation: rise linear infinite;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

/**
 * NEW 4: Aurora Waves - Slow moving gradient bands
 */
export function AuroraWavesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft UI base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />

      {/* Aurora wave 1 */}
      <div className="aurora-wave aurora-1" />

      {/* Aurora wave 2 */}
      <div className="aurora-wave aurora-2" />

      {/* Aurora wave 3 */}
      <div className="aurora-wave aurora-3" />

      <style jsx>{`
        .aurora-wave {
          position: absolute;
          width: 200%;
          height: 40%;
          opacity: 0.06;
          animation: aurora-drift 15s ease-in-out infinite;
        }

        .aurora-1 {
          top: 5%;
          left: -50%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(99, 102, 241, 0.5) 25%,
            rgba(139, 92, 246, 0.5) 50%,
            rgba(99, 102, 241, 0.5) 75%,
            transparent 100%
          );
          animation-delay: 0s;
        }

        .aurora-2 {
          top: 20%;
          left: -30%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(6, 182, 212, 0.4) 30%,
            rgba(99, 102, 241, 0.4) 60%,
            transparent 100%
          );
          animation-delay: -5s;
          animation-duration: 18s;
        }

        .aurora-3 {
          top: 35%;
          left: -70%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(212, 133, 106, 0.3) 40%,
            rgba(139, 92, 246, 0.3) 70%,
            transparent 100%
          );
          animation-delay: -10s;
          animation-duration: 20s;
        }

        @keyframes aurora-drift {
          0%,
          100% {
            transform: translateX(0) skewX(-5deg);
          }
          50% {
            transform: translateX(25%) skewX(5deg);
          }
        }
      `}</style>
    </div>
  )
}

/**
 * NEW 5: Nebula Pulse - Subtle breathing/pulsing glows
 */
export function NebulaPulseBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft UI base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />

      {/* Pulsing nebula glows */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      {/* Tiny star accents */}
      <div className="star-accent" style={{ top: '15%', left: '20%' }} />
      <div className="star-accent" style={{ top: '25%', right: '30%', animationDelay: '1s' }} />
      <div className="star-accent" style={{ top: '40%', left: '60%', animationDelay: '2s' }} />

      <style jsx>{`
        .nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: pulse ease-in-out infinite;
        }

        .nebula-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          right: 10%;
          background: rgba(99, 102, 241, 0.12);
          animation-duration: 6s;
        }

        .nebula-2 {
          width: 250px;
          height: 250px;
          top: 30%;
          left: 15%;
          background: rgba(2, 1, 105, 0.08);
          animation-duration: 8s;
          animation-delay: -2s;
        }

        .nebula-3 {
          width: 200px;
          height: 200px;
          bottom: 20%;
          right: 25%;
          background: rgba(212, 133, 106, 0.1);
          animation-duration: 7s;
          animation-delay: -4s;
        }

        .star-accent {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(99, 102, 241, 0.5);
          border-radius: 50%;
          animation: star-pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes star-pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  )
}
