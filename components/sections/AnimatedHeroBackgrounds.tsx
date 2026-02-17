'use client'

import { useEffect, useState } from 'react'

// ═══════════════════════════════════════════════════════════════
// ANIMATED HERO BACKGROUNDS
// Subtle, modern, moving effects for the Soft UI base
// ═══════════════════════════════════════════════════════════════

interface ShootingStar {
  id: number
  startX: number
  startY: number
  delay: number
  duration: number
  length: number
  brightness: number
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
 * NEW 1: Shooting Stars - Subtle professional space nod
 * Light soft-UI background with occasional elegant star streaks.
 * Stars have a proper shape (glowing head + fading tail) at a
 * classic diagonal angle — tasteful, not dramatic.
 */
export function ShootingStarsBackground() {
  const [stars, setStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    const newStars: ShootingStar[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      startX: 10 + i * 18 + Math.random() * 8, // Spread across top third
      startY: 3 + Math.random() * 28,
      delay: i * 4 + Math.random() * 4, // ~4s apart so only one visible at a time
      duration: 1.2 + Math.random() * 0.5,
      length: 80 + Math.random() * 60, // 80–140px — tasteful not theatrical
      brightness: 0.5 + Math.random() * 0.2,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Light soft-UI base — professional and clean */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F2F2F6 0%, #EAEAF0 40%, #E4E4EC 100%)',
        }}
      />

      {/* Very faint ambient blue tint in upper area (space hint) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 60% 10%, rgba(2,1,105,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Shooting stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star-wrap"
          style={
            {
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              '--len': `${star.length}px`,
              '--alpha': star.brightness,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Soft indigo glow in corner — adds depth without drama */}
      <div
        className="absolute"
        style={{
          width: '35%',
          height: '45%',
          top: 0,
          right: 0,
          background:
            'radial-gradient(circle at top right, rgba(99,102,241,0.06) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <style jsx>{`
        .shooting-star-wrap {
          position: absolute;
          /* Invisible container that flies across */
          animation: star-fly ease-out infinite;
          animation-fill-mode: both;
        }

        /* Fading tail — tapers from nothing at back to bright at head */
        .shooting-star-wrap::before {
          content: '';
          position: absolute;
          width: var(--len);
          height: 1.5px;
          /* Gradient: transparent tail → soft indigo body → bright head tip */
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(2, 1, 105, calc(var(--alpha) * 0.15)) 30%,
            rgba(2, 1, 105, calc(var(--alpha) * 0.5)) 75%,
            rgba(2, 1, 105, var(--alpha)) 95%,
            rgba(100, 120, 255, calc(var(--alpha) * 1.2)) 100%
          );
          transform: rotate(-32deg);
          transform-origin: right center;
          border-radius: 2px;
        }

        /* Glowing head dot */
        .shooting-star-wrap::after {
          content: '';
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(2, 1, 105, calc(var(--alpha) * 0.9));
          box-shadow:
            0 0 3px 1px rgba(2, 1, 105, calc(var(--alpha) * 0.5)),
            0 0 6px 2px rgba(99, 102, 241, calc(var(--alpha) * 0.25));
          top: -0.75px;
          left: -1.5px;
        }

        @keyframes star-fly {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          5% {
            opacity: 1;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            opacity: 0;
            transform: translate(250px, 165px);
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
 * NEW 5: Nebula Pulse - Dramatic breathing glows with visible color shifts
 */
export function NebulaPulseBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Slightly tinted base — gives glows something to contrast against */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #EEEEF8 0%, #E8E8F2 40%, #E2E2EE 100%)',
        }}
      />

      {/* PRIMARY nebula — large indigo, upper right */}
      <div className="nebula nebula-1" />

      {/* SECONDARY nebula — hero blue, center left */}
      <div className="nebula nebula-2" />

      {/* TERTIARY nebula — warm coral, lower right */}
      <div className="nebula nebula-3" />

      {/* ACCENT nebula — violet, upper left */}
      <div className="nebula nebula-4" />

      {/* Cross-fade overlay that shifts color as nebulas breathe */}
      <div className="nebula-overlay" />

      {/* Star accents — more of them, more visible */}
      <div className="star-accent star-lg" style={{ top: '12%', left: '22%' }} />
      <div
        className="star-accent star-lg"
        style={{ top: '8%', right: '28%', animationDelay: '0.7s' }}
      />
      <div
        className="star-accent star-md"
        style={{ top: '28%', right: '15%', animationDelay: '1.3s' }}
      />
      <div
        className="star-accent star-md"
        style={{ top: '42%', left: '55%', animationDelay: '2s' }}
      />
      <div
        className="star-accent star-sm"
        style={{ top: '18%', left: '45%', animationDelay: '0.3s' }}
      />
      <div
        className="star-accent star-sm"
        style={{ top: '35%', left: '10%', animationDelay: '1.8s' }}
      />
      <div
        className="star-accent star-sm"
        style={{ bottom: '30%', right: '40%', animationDelay: '1s' }}
      />

      <style jsx>{`
        .nebula {
          position: absolute;
          border-radius: 50%;
          animation: nebula-breathe ease-in-out infinite;
        }

        /* Large indigo glow — very visible */
        .nebula-1 {
          width: 520px;
          height: 420px;
          top: -5%;
          right: -5%;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.35) 0%,
            rgba(99, 102, 241, 0.12) 40%,
            transparent 70%
          );
          filter: blur(50px);
          animation-duration: 6s;
          animation-delay: 0s;
        }

        /* Hero-blue glow — strong presence center-left */
        .nebula-2 {
          width: 420px;
          height: 380px;
          top: 15%;
          left: -8%;
          background: radial-gradient(
            circle,
            rgba(2, 1, 105, 0.28) 0%,
            rgba(2, 1, 105, 0.1) 45%,
            transparent 70%
          );
          filter: blur(55px);
          animation-duration: 8s;
          animation-delay: -2s;
        }

        /* Warm coral glow — bottom right anchor */
        .nebula-3 {
          width: 380px;
          height: 300px;
          bottom: 5%;
          right: 10%;
          background: radial-gradient(
            circle,
            rgba(212, 133, 106, 0.3) 0%,
            rgba(212, 133, 106, 0.1) 45%,
            transparent 70%
          );
          filter: blur(45px);
          animation-duration: 7s;
          animation-delay: -4s;
        }

        /* Violet accent — upper left, smaller */
        .nebula-4 {
          width: 280px;
          height: 260px;
          top: 5%;
          left: 20%;
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.2) 0%,
            rgba(139, 92, 246, 0.07) 50%,
            transparent 70%
          );
          filter: blur(40px);
          animation-duration: 9s;
          animation-delay: -3s;
        }

        /* Subtle full-screen color wash that pulses */
        .nebula-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 90% 60% at 55% 35%,
            rgba(99, 102, 241, 0.06) 0%,
            transparent 60%
          );
          animation: overlay-pulse 10s ease-in-out infinite;
        }

        @keyframes nebula-breathe {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2) translate(8px, -8px);
            opacity: 1;
          }
        }

        @keyframes overlay-pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        /* Star accents */
        .star-accent {
          position: absolute;
          border-radius: 50%;
          animation: star-pulse ease-in-out infinite;
        }

        .star-lg {
          width: 5px;
          height: 5px;
          background: rgba(99, 102, 241, 0.7);
          box-shadow: 0 0 6px 2px rgba(99, 102, 241, 0.4);
          animation-duration: 2.5s;
        }

        .star-md {
          width: 3px;
          height: 3px;
          background: rgba(139, 92, 246, 0.6);
          box-shadow: 0 0 4px 1px rgba(139, 92, 246, 0.35);
          animation-duration: 3.2s;
        }

        .star-sm {
          width: 2px;
          height: 2px;
          background: rgba(2, 1, 105, 0.5);
          box-shadow: 0 0 3px 1px rgba(2, 1, 105, 0.25);
          animation-duration: 4s;
        }

        @keyframes star-pulse {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }
      `}</style>
    </div>
  )
}
