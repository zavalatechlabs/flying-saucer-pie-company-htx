/**
 * Centralized Type Definitions
 *
 * This file exports all type definitions used throughout the application.
 * Import types from this file rather than defining them inline.
 *
 * @example
 * import { Pie, PieCardProps, BusinessInfo } from '@/lib/types'
 */

// Re-export all data types
export type {
  Pie,
  PieCategory,
  PiePrice,
  BusinessInfo,
  Address,
  HoursOfOperation,
  DayHours,
  Hours,
  SocialLinks,
  AboutInfo,
  OrderingPolicy,
  SlicePolicy,
  Policies,
  FreezingInstructions,
  ShelfLife,
  FAQs,
} from './data'

// Re-export all component prop types
export type {
  ButtonProps,
  PieCardProps,
  PieModalProps,
  NavigationProps,
  FooterProps,
  LogoProps,
  ScrollIndicatorProps,
  StarburstProps,
  CurvedDividerProps,
  HeroSectionProps,
  PieShowcaseProps,
  FeaturedPiesRowProps,
  ReviewsMarqueeProps,
  AboutSectionProps,
  ContactSectionProps,
  LocationSectionProps,
  UFOLandingProps,
  AnimatedSwooshProps,
  ScrollRevealProps,
} from './components'
