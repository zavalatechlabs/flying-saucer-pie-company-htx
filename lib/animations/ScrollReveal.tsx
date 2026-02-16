'use client'

import { motion, Variants, Transition } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  variants?: Variants
  threshold?: number
  triggerOnce?: boolean
  delay?: number
  className?: string
}

/**
 * ScrollReveal component - triggers Framer Motion animations when element scrolls into view
 *
 * @param children - React children to wrap
 * @param variants - Framer Motion variants object (should have 'hidden' and 'visible' states)
 * @param threshold - Intersection observer threshold (0-1), default 0.2 (20% visible)
 * @param triggerOnce - Whether animation should only trigger once, default true
 * @param delay - Delay before animation starts (in seconds)
 * @param className - Additional CSS classes
 */
export function ScrollReveal({
  children,
  variants,
  threshold = 0.2,
  triggerOnce = true,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  })

  // Default fade-in variants if none provided
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Alternative version with more control over motion props
 */
interface ScrollRevealAdvancedProps extends ScrollRevealProps {
  transition?: Transition
}

export function ScrollRevealAdvanced({
  children,
  variants,
  threshold = 0.2,
  triggerOnce = true,
  delay = 0,
  transition,
  className,
}: ScrollRevealAdvancedProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  })

  const defaultTransition: Transition = {
    duration: 0.6,
    ease: 'easeOut',
    delay,
  }

  const customVariants: Variants = variants || {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transition || defaultTransition,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
