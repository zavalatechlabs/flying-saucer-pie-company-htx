import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Warm Mocha Theme | Flying Saucer Pie Company',
  description: 'Cozy evening bakery with rich tones.',
}

export default function V4() {
  return <ThemedHome themeId="warmMocha" />
}
