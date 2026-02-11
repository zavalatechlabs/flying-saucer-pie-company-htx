import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedPiesRow } from '@/components/sections/FeaturedPiesRow'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { MenuPreviewSection } from '@/components/sections/MenuPreviewSection'
import { ReviewsMarquee } from '@/components/sections/ReviewsMarquee'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPiesRow />
      <FeaturesSection />
      <MenuPreviewSection />
      <ReviewsMarquee />
    </>
  )
}