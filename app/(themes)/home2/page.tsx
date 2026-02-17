import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Gulf Coast Theme | Flying Saucer Pie Company',
  description: 'Experience our relaxed coastal Galveston-inspired theme.',
}

export default function Home2() {
  return <ThemedHome themeId="gulfCoast" />
}
