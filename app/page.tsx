import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedPiesRow } from '@/components/sections/FeaturedPiesRow'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ReviewsMarquee } from '@/components/sections/ReviewsMarquee'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPiesRow />
      <FeaturesSection />
      <ReviewsMarquee />
    </>
  )
}