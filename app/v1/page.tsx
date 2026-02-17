import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Vintage Paper Theme | Flying Saucer Pie Company',
  description: 'Layered paper textures with hand-drawn warmth.',
}

export default function V1() {
  return <ThemedHome themeId="vintagePaper" />
}
