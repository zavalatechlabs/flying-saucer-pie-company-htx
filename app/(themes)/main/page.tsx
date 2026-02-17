import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Main Theme | Flying Saucer Pie Company',
  description: 'The definitive theme combining our favorite elements.',
}

export default function MainPage() {
  return <ThemedHome themeId="main" />
}
