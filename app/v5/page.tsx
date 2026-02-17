import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Nifty Retro Theme | Flying Saucer Pie Company',
  description: 'Retro typography composition with animated elements.',
}

export default function V5Page() {
  return <ThemedHome themeId="niftyRetro" />
}
