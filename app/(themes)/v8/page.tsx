import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Gradient Mesh Theme | Flying Saucer Pie Company',
  description: 'Fluid gradients and organic shapes.',
}

export default function V8Page() {
  return <ThemedHome themeId="gradientMesh" />
}
