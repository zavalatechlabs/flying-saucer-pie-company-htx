import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: '🆕 Soft Cloud | Flying Saucer Pie Company',
  description: 'NEW: Dreamy light layers like floating clouds.',
}

export default function New5Page() {
  return <ThemedHome themeId="softCloud" />
}
