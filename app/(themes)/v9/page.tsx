import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Dark Luxe Theme | Flying Saucer Pie Company',
  description: 'Warm dark theme with gold accents.',
}

export default function V9Page() {
  return <ThemedHome themeId="darkLuxe" />
}
