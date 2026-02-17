import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Space City Theme | Flying Saucer Pie Company',
  description: 'Experience our NASA-inspired cosmic Houston theme.',
}

export default function Home1() {
  return <ThemedHome themeId="spaceCity" />
}
