import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: '🆕 Sunset Warmth | Flying Saucer Pie Company',
  description: 'NEW: Warm coral sunset with golden hour feel.',
}

export default function New2Page() {
  return <ThemedHome themeId="sunsetWarmth" />
}
