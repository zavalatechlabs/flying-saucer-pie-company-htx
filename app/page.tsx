import { MeteorHeroWrapper } from '@/components/sections/MeteorHeroWrapper'
import { FeaturedPiesRow } from '@/components/sections/FeaturedPiesRow'
import { Since1967Section } from '@/components/sections/Since1967Section'
import { BakeryPromiseSection } from '@/components/sections/BakeryPromiseSection'

export default function Home() {
  return (
    <>
      {/* Hero with meteor animation — no CSS variable overrides, theme stays at default */}
      <MeteorHeroWrapper />
      <FeaturedPiesRow />
      <Since1967Section />
      <BakeryPromiseSection />
    </>
  )
}
