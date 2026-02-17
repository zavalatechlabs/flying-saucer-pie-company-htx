import { MeteorHeroWrapper } from '@/components/sections/MeteorHeroWrapper'
import { FeaturedPiesRow } from '@/components/sections/FeaturedPiesRow'
import { Since1967Section } from '@/components/sections/Since1967Section'
import { HolidayOrderingSection } from '@/components/sections/HolidayOrderingSection'
import { LocationTeaser } from '@/components/sections/LocationTeaser'

export default function Home() {
  return (
    <>
      {/* Hero with meteor animation — no CSS variable overrides, theme stays at default */}
      <MeteorHeroWrapper />
      <FeaturedPiesRow />
      <Since1967Section />
      <HolidayOrderingSection />
      <LocationTeaser />
    </>
  )
}
