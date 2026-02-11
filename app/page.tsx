import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { MenuPreviewSection } from '@/components/sections/MenuPreviewSection'
import { ReviewsMarquee } from '@/components/sections/ReviewsMarquee'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <MenuPreviewSection />
      <ReviewsMarquee />
    </>
  )
}