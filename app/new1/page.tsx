import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: '🆕 Aurora Glow | Flying Saucer Pie Company',
  description: 'NEW: Soft purple-blue gradient with subtle movement.',
}

export default function New1Page() {
  return <ThemedHome themeId="auroraGlow" />
}
