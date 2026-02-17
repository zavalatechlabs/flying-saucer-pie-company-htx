import { MeteorHeroWrapper } from '@/components/sections/MeteorHeroWrapper'
import { FeaturedPiesRow } from '@/components/sections/FeaturedPiesRow'

export default function Home() {
  return (
    <>
      {/* Hero with meteor animation — no CSS variable overrides, theme stays at default */}
      <MeteorHeroWrapper />
      <FeaturedPiesRow />
    </>
  )
}
