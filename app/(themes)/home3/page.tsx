import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Editorial Theme | Flying Saucer Pie Company',
  description: 'Experience our bold magazine-style editorial theme.',
}

export default function Home3() {
  return <ThemedHome themeId="editorial" />
}
