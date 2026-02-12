'use client'

import { useState, useEffect } from 'react'
import { FlyingSaucer } from './FlyingSaucer'
import { SwooshReveal } from './SwooshReveal'

type AnimationPhase = 'idle' | 'flyAcross' | 'swoosh' | 'landed'

interface SaucerIntroProps {
  onAnimationComplete?: () => void
  disabled?: boolean
}

export function SaucerIntro({ onAnimationComplete, disabled = false }: SaucerIntroProps) {
  const [phase, setPhase] = useState<AnimationPhase>('idle')
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [isSwooshVisible, setIsSwooshVisible] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (disabled || prefersReducedMotion) {
      // Skip animation, show final state
      setPhase('landed')
      setIsTextVisible(true)
      setIsSwooshVisible(true)
      onAnimationComplete?.()
      return
    }

    // Start animation sequence
    const timeline = async () => {
      // Small delay before starting
      await delay(300)
      
      // Phase A: Fly across (1.4s)
      setPhase('flyAcross')
      await delay(1400)
      
      // Phase B: Swoosh + text reveal (1.8s)
      setPhase('swoosh')
      setIsSwooshVisible(true)
      await delay(200) // Small delay before text
      setIsTextVisible(true)
      await delay(1600)
      
      // Phase C: Landed
      setPhase('landed')
      onAnimationComplete?.()
    }

    timeline()
  }, [disabled, onAnimationComplete])

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  return (
    <>
      {/* Flying Saucer */}
      {phase !== 'idle' && (
        <FlyingSaucer phase={phase} />
      )}

      {/* Text visibility state for HeroSection to consume */}
      <div 
        data-text-visible={isTextVisible} 
        data-animation-phase={phase}
        className="hidden"
      />
    </>
  )
}
