'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface SaucerScrollIndicatorProps {
  /** Container element to track scroll progress within */
  containerRef: React.RefObject<HTMLElement | null>
  /** Optional className for positioning */
  className?: string
}

/**
 * A tiny flying saucer that moves along the scroll position
 * Can be used on timelines, scrollable sections, etc.
 */
export function SaucerScrollIndicator({
  containerRef,
  className = '',
}: SaucerScrollIndicatorProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if container is in viewport
      if (rect.bottom < 0 || rect.top > windowHeight) {
        setIsVisible(false)
        return
      }

      setIsVisible(true)

      // Calculate progress through the section
      const containerTop = rect.top
      const containerHeight = rect.height
      const viewportCenter = windowHeight / 2

      // Progress from 0 (top of container at center) to 1 (bottom of container at center)
      const scrollProgress = Math.max(
        0,
        Math.min(1, (viewportCenter - containerTop) / containerHeight)
      )

      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [containerRef])

  if (!isVisible) return null

  return (
    <div
      ref={indicatorRef}
      className={`absolute right-4 w-8 h-8 transition-all duration-150 ease-out ${className}`}
      style={{
        top: `${progress * 85 + 5}%`, // 5% to 90% range
        transform: `translateY(-50%) rotate(${-15 + progress * 30}deg)`, // Slight rotation as it moves
      }}
    >
      <Image
        src="/brand/saucer.svg"
        alt="Progress indicator"
        width={32}
        height={32}
        className="w-full h-auto opacity-60 drop-shadow-md"
      />
      {/* Landing trail effect */}
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent/20 rounded-full blur-sm"
        style={{ opacity: progress > 0.9 ? 1 : 0 }}
      />
    </div>
  )
}

/**
 * Simplified version for timeline milestones
 * Shows saucer at the current active milestone
 */
interface TimelineSaucerProps {
  /** Index of current active milestone (0-based) */
  activeIndex: number
  /** Total number of milestones */
  totalMilestones: number
  /** Optional className */
  className?: string
}

export function TimelineSaucer({
  activeIndex,
  totalMilestones,
  className = '',
}: TimelineSaucerProps) {
  const progress = totalMilestones > 1 ? activeIndex / (totalMilestones - 1) : 0

  return (
    <div
      className={`absolute right-0 w-6 h-6 transition-all duration-500 ease-out ${className}`}
      style={{
        top: `${progress * 100}%`,
        transform: 'translateY(-50%)',
      }}
    >
      <Image
        src="/brand/saucer.svg"
        alt=""
        width={24}
        height={24}
        className="w-full h-auto opacity-50"
      />
    </div>
  )
}
