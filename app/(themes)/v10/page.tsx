import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Bento Grid Theme | Flying Saucer Pie Company',
  description: 'Modular card layouts with organized chaos.',
}

export default function V10Page() {
  return <ThemedHome themeId="bentoGrid" />
}
