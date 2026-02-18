'use client'

import { useEffect, useState } from 'react'

interface TwinklingStar {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
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
