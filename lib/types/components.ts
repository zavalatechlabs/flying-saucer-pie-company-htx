/**
 * Component Prop Types
 * Centralized prop interfaces for all components
 */

import { Pie } from './data'

// ============================================================================
// UI Component Props
// ============================================================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export interface PieCardProps {
  pie: Pie
  index?: number
  onClick?: () => void
}

export interface PieModalProps {
  pie: Pie | null
  isOpen: boolean
  onClose: () => void
}

export interface NavigationProps {
  className?: string
}

export interface FooterProps {
  className?: string
}

export interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export interface ScrollIndicatorProps {
  targetId?: string
  className?: string
}

export interface StarburstProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  opacity?: number
}

export interface CurvedDividerProps {
  className?: string
  flip?: boolean
  color?: string
}

// ============================================================================
// Section Component Props
// ============================================================================

export interface HeroSectionProps {
  className?: string
}

export interface PieShowcaseProps {
  className?: string
  limit?: number
}

export interface FeaturedPiesRowProps {
  className?: string
}

export interface ReviewsMarqueeProps {
  className?: string
}

export interface AboutSectionProps {
  className?: string
}

export interface ContactSectionProps {
  className?: string
}

export interface LocationSectionProps {
  className?: string
}

// ============================================================================
// Animation Component Props
// ============================================================================

export interface UFOLandingProps {
  onComplete?: () => void
  children?: React.ReactNode
}

export interface AnimatedSwooshProps {
  className?: string
  phase: number
}

export interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}
