'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface UFOLandingProps {
  onComplete?: () => void
  children?: React.ReactNode
}

export function UFOLanding({ onComplete, children }: UFOLandingProps) {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Detect mobile for faster animation (using useState initializer to avoid setState in useEffect)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation durations (mobile is faster)
  const duration = {
    stars: isMobile ? 0.25 : 0.5,
    ufoDescend: isMobile ? 1.25 : 2.5,
    tractorBeam: isMobile ? 0.25 : 0.5,
    heroText: isMobile ? 0.25 : 0.5,
    totalDuration: isMobile ? 2 : 4,
  }

  useEffect(() => {
    if (shouldReduceMotion || skipAnimation) {
      // Immediately complete animation when motion is reduced
      setAnimationComplete(true)
      onComplete?.()
      return
    }

    const timer = setTimeout(() => {
      setAnimationComplete(true)
      onComplete?.()
    }, duration.totalDuration * 1000)

    return () => clearTimeout(timer)
  }, [shouldReduceMotion, skipAnimation, duration.totalDuration, onComplete])

  const handleSkip = () => {
    setSkipAnimation(true)
    setAnimationComplete(true)
    onComplete?.()
  }

  // If reduced motion or skipped, show instant fade-in
  if (shouldReduceMotion || skipAnimation) {
    return (
      <div className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-navy to-cosmic-purple">
        <div className="relative z-10 text-center px-4">{children}</div>
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-navy to-cosmic-purple">
      {/* Skip Animation Button */}
      {!animationComplete && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={handleSkip}
          className="absolute top-4 right-4 z-50 px-4 py-2 text-sm text-white/70 hover:text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Skip animation"
        >
          Skip Animation
        </motion.button>
      )}

      {/* Stars Background - Step 1: Fade in (0-0.5s or 0-0.25s mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.stars, ease: 'easeIn' }}
        className="absolute inset-0 stars-background"
        aria-hidden="true"
      />

      {/* UFO - Step 2: Descends (0.5-3s or 0.25-1.5s mobile) */}
      <motion.div
        initial={{ y: '-150%', opacity: 0 }}
        animate={
          animationComplete
            ? {
                y: ['-10%', '0%', '-10%'],
                opacity: 1,
              }
            : { y: '-10%', opacity: 1 }
        }
        transition={
          animationComplete
            ? {
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                opacity: { duration: 0 },
              }
            : {
                y: {
                  duration: duration.ufoDescend,
                  delay: duration.stars,
                  ease: 'easeOut',
                },
                opacity: {
                  duration: 0.3,
                  delay: duration.stars,
                },
              }
        }
        className="absolute top-[20%] md:top-[25%] z-20"
      >
        <UFOIcon isMobile={isMobile} />
      </motion.div>

      {/* Tractor Beam - Step 3: Activates (3-3.5s or 1.5-1.75s mobile) */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: animationComplete ? 0.6 : [0, 0.6, 0.4], scaleY: 1 }}
        transition={{
          opacity: {
            duration: duration.tractorBeam,
            delay: duration.stars + duration.ufoDescend,
          },
          scaleY: {
            duration: duration.tractorBeam,
            delay: duration.stars + duration.ufoDescend,
            ease: 'easeOut',
          },
        }}
        className="absolute top-[35%] md:top-[40%] z-10"
        style={{ transformOrigin: 'top center' }}
      >
        <TractorBeam isMobile={isMobile} />
      </motion.div>

      {/* Hero Text - Step 4: Fades in (3.5-4s or 1.75-2s mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: duration.heroText,
          delay: duration.stars + duration.ufoDescend + duration.tractorBeam,
          ease: 'easeOut',
        }}
        className="relative z-30 text-center px-4 max-w-4xl"
      >
        {children}
      </motion.div>
    </div>
  )
}

// UFO SVG Component
function UFOIcon({ isMobile }: { isMobile: boolean }) {
  const size = isMobile ? 80 : 120

  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flying Saucer"
    >
      {/* Dome glow */}
      <ellipse cx="50" cy="20" rx="22" ry="17" fill="url(#domeGlow)" opacity="0.4" />

      {/* Main saucer body */}
      <ellipse cx="50" cy="40" rx="40" ry="10" fill="#6B2CBF" stroke="#00D4FF" strokeWidth="1" />

      {/* Saucer highlight */}
      <ellipse cx="50" cy="38" rx="35" ry="7" fill="url(#saucerGradient)" opacity="0.6" />

      {/* Dome */}
      <ellipse cx="50" cy="20" rx="20" ry="15" fill="url(#domeGradient)" />

      {/* Dome highlight */}
      <ellipse cx="45" cy="15" rx="8" ry="6" fill="white" opacity="0.3" />

      {/* Lights on bottom */}
      <circle cx="30" cy="43" r="2" fill="#00D4FF" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="45" r="2" fill="#00D4FF" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur="1.5s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="70" cy="43" r="2" fill="#00D4FF" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur="1.5s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>

      <defs>
        <linearGradient id="domeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="saucerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9D4EDD" />
          <stop offset="100%" stopColor="#6B2CBF" />
        </linearGradient>
        <radialGradient id="domeGlow">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

// Tractor Beam Component
function TractorBeam({ isMobile }: { isMobile: boolean }) {
  const width = isMobile ? 100 : 150
  const height = isMobile ? 150 : 250

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 250"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Animated beam rays */}
      <motion.path
        d="M 75 0 L 20 250 L 130 250 Z"
        fill="url(#beamGradient)"
        opacity="0.3"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Inner beam */}
      <motion.path
        d="M 75 0 L 45 250 L 105 250 Z"
        fill="url(#beamGradientInner)"
        opacity="0.5"
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      />

      <defs>
        <linearGradient id="beamGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="beamGradientInner" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
