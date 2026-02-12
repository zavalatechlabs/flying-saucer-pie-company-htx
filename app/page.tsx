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
      <CurvedDivider variant="wave" color="white" />
      
      {/* Featured Pies - Alternate Background */}
      <div className="relative bg-surface">
        {/* Decorative starburst - top left */}
        <Starburst 
          size={300} 
          color="purple" 
          opacity={0.03}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
        
        <FeaturedPiesRow />
      </div>
      
      {/* Transition to features */}
      <CurvedDivider variant="curve" color="cream" flip />
      
      {/* Features - Main Background */}
      <div className="relative" style={{ background: 'var(--bg)' }}>
        <FeaturesSection />
      </div>
      
      {/* Transition to reviews */}
      <CurvedDivider variant="swoop" color="white" />
      
      {/* Reviews - Alternate Background */}
      <div className="relative bg-surface">
        {/* Decorative starburst - bottom right */}
        <Starburst 
          size={250} 
          color="lavender" 
          opacity={0.03}
          className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none"
        />
        
        <ReviewsMarquee />
      </div>
    </>
  )
}
