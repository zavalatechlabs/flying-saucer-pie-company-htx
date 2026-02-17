import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Soft UI Theme | Flying Saucer Pie Company',
  description: 'Neumorphism with soft shadows and tactile elements.',
}

export default function V7Page() {
  return <ThemedHome themeId="neumorphism" />
}
