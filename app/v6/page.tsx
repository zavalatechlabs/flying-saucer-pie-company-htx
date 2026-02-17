import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Neubrutalism Theme | Flying Saucer Pie Company',
  description: 'Bold colors, hard shadows, playful chaos.',
}

export default function V6Page() {
  return <ThemedHome themeId="neubrutalism" />
}
