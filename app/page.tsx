import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedPiesRow } from '@/components/sections/FeaturedPiesRow'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ReviewsMarquee } from '@/components/sections/ReviewsMarquee'
import { CurvedDivider } from '@/components/ui/CurvedDivider'
import { Starburst } from '@/components/ui/Starburst'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Transition from hero to pies */}
      <CurvedDivider variant="wave" color="cream" />
      
      <div className="relative">
        {/* Decorative starburst - top left */}
        <Starburst 
          size={300} 
          color="purple" 
          opacity={0.04}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
        
        <FeaturedPiesRow />
      </div>
      
      {/* Transition to features */}
      <CurvedDivider variant="curve" color="white" flip />
      
      <div className="relative bg-white">
        {/* Decorative starburst - center right */}
        <Starburst 
          size={250} 
          color="lavender" 
          opacity={0.05}
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
        
        <FeaturesSection />
      </div>
      
      {/* Transition to reviews */}
      <CurvedDivider variant="swoop" color="cream" />
      
      <ReviewsMarquee />
    </>
  )
}
