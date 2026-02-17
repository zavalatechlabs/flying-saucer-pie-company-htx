import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Nifty Portal Theme | Flying Saucer Pie Company',
  description: 'Dark theme with gold accents, inspired by The Nifty Portal.',
}

export default function V12Page() {
  return <ThemedHome themeId="niftyPortal" />
}
