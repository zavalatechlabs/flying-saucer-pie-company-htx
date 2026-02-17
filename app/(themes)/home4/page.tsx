import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Neon Nights Theme | Flying Saucer Pie Company',
  description: 'Experience our Houston nightlife dark mode theme.',
}

export default function Home4() {
  return <ThemedHome themeId="neonNights" />
}
