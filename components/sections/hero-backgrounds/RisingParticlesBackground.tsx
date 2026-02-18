'use client'

import { useEffect, useState } from 'react'

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
