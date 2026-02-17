import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: '🆕 Ocean Breeze | Flying Saucer Pie Company',
  description: 'NEW: Cool teal gradients like gentle waves.',
}

export default function New4Page() {
  return <ThemedHome themeId="oceanBreeze" />
}
