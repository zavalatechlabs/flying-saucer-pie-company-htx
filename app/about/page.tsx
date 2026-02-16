import { Metadata } from 'next'
import { AboutContent } from './about-content'

export const metadata: Metadata = {
  title: 'About Us - Houston Strong Since 1967',
  description:
    "Learn about Flying Saucer Pie Company, Houston's oldest family-owned bakery. Serving handmade pies with love since 1967.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutContent />
    </div>
  )
}
