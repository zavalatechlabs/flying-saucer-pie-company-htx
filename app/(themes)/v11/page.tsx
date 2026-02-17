import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Playful Theme | Flying Saucer Pie Company',
  description: 'Hand-drawn doodles with a whimsical feel.',
}

export default function V11Page() {
  return <ThemedHome themeId="playfulIllustrated" />
}
