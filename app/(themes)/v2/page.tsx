import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Space City HTX Theme | Flying Saucer Pie Company',
  description: 'Houston skyline with warm sunset tones.',
}

export default function V2() {
  return <ThemedHome themeId="houstonPride" />
}
