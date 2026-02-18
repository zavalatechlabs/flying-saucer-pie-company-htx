'use client'

import { useEffect, useState } from 'react'

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
      {/* Match the site's Soft UI gray so the hero blends with the rest of the page */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #F0F0F0 0%, #E8E8E8 40%, #DEDEDE 100%)',
        }}
      />

      {/* Very subtle depth glow — barely visible, just adds a hint of dimension */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(2,1,105,0.03) 0%, transparent 60%)',
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
