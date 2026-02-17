import { Metadata } from 'next'
import { ThemedHome } from '@/components/sections/ThemedHome'

export const metadata: Metadata = {
  title: '🆕 Meteor Shower | Flying Saucer Pie Company',
  description: 'NEW: Aceternity-style meteors shooting across a pale indigo sky.',
}

export default function New6Page() {
  return <ThemedHome themeId="meteorShower" />
}
