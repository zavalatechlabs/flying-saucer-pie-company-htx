'use client'

import Image from 'next/image'
import { pies } from '@/lib/data/pies'

export function FeaturedPiesRow() {
  // Select first 8 pies for featured display
  const featuredPies = pies.slice(0, 8)

  return (
    <section className="py-16 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-deep-navy">
          Featured Pies
        </h2>
        <div className="pie-scroll-container">
          {featuredPies.map((pie, i) => (
            <div 
              key={pie.id} 
              className="pie-item" 
              style={{ '--i': i } as React.CSSProperties & { '--i': number }}
            >
              <div className="pie-spin">
                <Image
                  src={pie.image || '/pie-placeholder.svg'}
                  alt={pie.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                  onError={(e) => {
                    // Fallback to SVG placeholder if image fails
                    const target = e.target as HTMLImageElement
                    target.src = '/pie-placeholder.svg'
                  }}
                />
              </div>
              <p className="text-center mt-3 font-medium text-deep-navy text-sm">
                {pie.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
