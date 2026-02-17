'use client'

import { useEffect, useState } from 'react'

// ═══════════════════════════════════════════════════════════════
// ANIMATED HERO BACKGROUNDS
// ═══════════════════════════════════════════════════════════════

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

// Fixed star positions for the rotating sky — no JS randomness causing rain effect
const SKY_STARS = [
  { top: '5%', left: '8%', delay: 0, dur: 3.0 },
  { top: '10%', left: '25%', delay: 1.5, dur: 2.5 },
  { top: '2%', left: '45%', delay: 0.8, dur: 3.5 },
  { top: '14%', left: '62%', delay: 2.2, dur: 2.8 },
  { top: '6%', left: '80%', delay: 0.3, dur: 3.2 },
  { top: '20%', left: '12%', delay: 3.0, dur: 2.2 },
  { top: '22%', left: '50%', delay: 1.2, dur: 4.0 },
  { top: '1%', left: '37%', delay: 2.8, dur: 3.0 },
  { top: '17%', left: '88%', delay: 0.6, dur: 2.6 },
  { top: '28%', left: '70%', delay: 1.8, dur: 2.8 },
  { top: '8%', left: '57%', delay: 3.7, dur: 3.3 },
  { top: '30%', left: '33%', delay: 0.9, dur: 3.6 },
]

/**
 * NEW 1: Shooting Stars — codemyui rotating sky approach
 * A slowly rotating container holds stars that shoot horizontally.
 * The sky rotation is what makes them appear diagonal — pure CSS, no JS angle math.
 */
export function ShootingStarsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Light soft-UI base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F2F2F6 0%, #EAEAF0 40%, #E4E4EC 100%)',
        }}
      />

      {/* Faint ambient indigo hint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 65% 10%, rgba(2,1,105,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Rotating sky container — stars inside shoot horizontally,
          the rotation creates the diagonal falling star appearance */}
      <div className="star-sky">
        {SKY_STARS.map((s, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        /* Oversized container so corners don't clip when rotating */
        .star-sky {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          animation: sky-rotate 120s linear infinite;
        }

        /* Each star: a line that grows, shoots, then fades */
        .star {
          position: absolute;
          height: 2px;
          width: 0;
          border-radius: 999px;
          background: linear-gradient(to left, rgba(2, 1, 105, 0.8), transparent);
          animation:
            shooting var(--dur, 3s) ease-in-out infinite,
            shining var(--dur, 3s) ease-in-out infinite;
        }

        /* Bright head dot */
        .star::before {
          content: '';
          position: absolute;
          right: -1px;
          top: -3px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(2, 1, 105, 0.75);
          box-shadow:
            0 0 4px 1px rgba(2, 1, 105, 0.4),
            0 0 8px 2px rgba(99, 102, 241, 0.2);
        }

        @keyframes sky-rotate {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(405deg);
          }
        }

        @keyframes shooting {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(300px);
          }
        }

        @keyframes shining {
          0% {
            width: 0;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          50% {
            width: 30px;
          }
          80% {
            opacity: 1;
          }
          100% {
            width: 0;
            opacity: 0;
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
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />
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
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />
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
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #F0F0F0 0%, #E8E8E8 50%, #DEDEDE 100%)',
        }}
      />
      <div className="aurora-wave aurora-1" />
      <div className="aurora-wave aurora-2" />
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

      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      <div className="nebula nebula-4" />
      <div className="nebula-overlay" />

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
        }
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

/**
 * NEW 6: Meteors — Aceternity UI-style meteor shower, light theme
 * Meteors positioned at top, rotated 215°, fly via translateX(-500px).
 * Hero blue (#020169) color scheme on a pale tinted background.
 */
export function MeteorsBackground() {
  const [meteors, setMeteors] = useState<{ left: string; delay: string; dur: string }[]>([])

  useEffect(() => {
    const m = Array.from({ length: 18 }, () => ({
      left: Math.floor(Math.random() * 800 - 200) + 'px',
      delay: (Math.random() * 0.8 + 0.2).toFixed(2) + 's',
      dur: Math.floor(Math.random() * 8 + 3) + 's',
    }))
    setMeteors(m)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Pale indigo-tinted base so meteors are visible */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #F4F4FB 0%, #EEEEF8 40%, #E8E8F4 100%)',
        }}
      />

      {/* Subtle depth glow at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(2,1,105,0.05) 0%, transparent 60%)',
        }}
      />

      {meteors.map((m, i) => (
        <span
          key={i}
          className="meteor"
          style={{
            top: 0,
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.dur,
          }}
        />
      ))}

      <style jsx>{`
        .meteor {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(2, 1, 105, 0.7);
          box-shadow:
            0 0 0 1px rgba(2, 1, 105, 0.1),
            0 0 6px 2px rgba(99, 102, 241, 0.3);
          transform: rotate(215deg);
          animation: meteor-fly linear infinite;
          animation-fill-mode: both;
        }

        /* Trailing tail */
        .meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 1px;
          width: 60px;
          height: 1px;
          background: linear-gradient(to right, rgba(2, 1, 105, 0.6), transparent);
          border-radius: 100%;
        }

        /* Aceternity animation — 215° angle locked, translateX is travel */
        @keyframes meteor-fly {
          0% {
            transform: rotate(215deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(215deg) translateX(-500px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
