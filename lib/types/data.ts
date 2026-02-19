/**
 * Data Types
 * Core data structures for pies, business info, and content
 */

// ============================================================================
// Pie Types
// ============================================================================

export type PieCategory = 'fruit' | 'cream' | 'cheesecake' | 'seasonal'

export interface PiePrice {
  whole: number
  slice: number
}

export interface Pie {
  id: string
  name: string
  category: PieCategory
  description: string
  price: PiePrice
  image: string
  /** CSS object-position for the menu card image, e.g. 'center 20%'. Defaults to 'center'. */
  imagePosition?: string
  available: boolean
  isVegan?: boolean
  isSpecial?: boolean
  canFreeze?: boolean
  shelfLife?: string
  ingredients?: string[]
  note?: string
}

// ============================================================================
// Business Info Types
// ============================================================================

export interface Address {
  street: string
  city: string
  state: string
  zip: string
}

export interface HoursOfOperation {
  open: string
  close: string
}

export interface DayHours {
  [day: string]: HoursOfOperation | string
}

export interface Hours {
  regular: DayHours
  novemberDecember: DayHours
  specialHours: Record<string, string>
  thanksgivingWeek: Record<string, string>
}

export interface SocialLinks {
  facebook: string
  instagram: string
}

export interface AboutInfo {
  short: string
  full: string
  mission: string
  owners: string
}

export interface OrderingPolicy {
  regular: string
  largeOrders: string
  thanksgiving: string
}

export interface SlicePolicy {
  available: boolean
  size: string
  afterSixPm: string
  thanksgivingWeek: string
}

export interface Policies {
  ordering: OrderingPolicy
  slices: SlicePolicy
  payment: string[]
  delivery: string
  shipping: string
  giftCertificates: string
}

export interface FreezingInstructions {
  canFreeze: string[]
  instructions: string
  duration: string
}

export interface ShelfLife {
  creamPies: {
    strawberry: string
    banana: string
    other: string
  }
  fruitPies: string
  cheesecakes: string
}

export interface FAQs {
  freezing: FreezingInstructions
  shelfLife: ShelfLife
}

export interface BusinessInfo {
  name: string
  tagline: string
  established: number
  address: Address
  phone: string
  email: string
  hours: Hours
  social: SocialLinks
  about: AboutInfo
  features: string[]
  policies: Policies
  faqs: FAQs
}
