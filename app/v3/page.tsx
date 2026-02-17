import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Atomic Age Theme | Flying Saucer Pie Company',
  description: 'Vibrant 1950s diner glamour.',
}

export default function V3() {
  return <ThemedHome themeId="atomicAge" />
}
