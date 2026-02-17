import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: '🆕 Cosmic Dust | Flying Saucer Pie Company',
  description: 'NEW: Soft background with subtle floating particles.',
}

export default function New3Page() {
  return <ThemedHome themeId="cosmicDust" />
}
