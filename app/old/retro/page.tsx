import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: 'Retro Diner (Old) | Flying Saucer Pie Company',
  description: 'Classic retro space-age diner aesthetic.',
}

export default function OldRetroPage() {
  return <ThemedHome themeId="retroDiner" />
}
