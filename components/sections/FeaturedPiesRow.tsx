'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PieModal } from '@/components/ui/PieModal'
import { pies, Pie } from '@/lib/data/pies'

export function FeaturedPiesRow() {
  const [selectedPie, setSelectedPie] = useState<Pie | null>(null)
  const featuredPies = pies.slice(0, 8) // first 8 pies

  return (
    <>
      <section className="py-20 bg-dust-lightest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-space-night mb-4">
              Cosmic Favorites
            </h2>
            <p className="text-xl text-dust-medium mb-8">
              Our most popular pies that keep Houstonians coming back
            </p>
          </div>

          <div className="pie-scroll-container">
            {featuredPies.map((pie, i) => (
              <div
                key={pie.id}
                className="pie-item cursor-pointer"
                style={{ '--i': i } as React.CSSProperties}
                onClick={() => setSelectedPie(pie)}
              >
                <div className="pie-spin">
                  <Image
                    src={pie.image || '/pie-placeholder.svg'}
                    alt={pie.name}
                    width={180}
                    height={180}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-center mt-3 font-medium text-deep-navy text-sm">{pie.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <button className="btn-primary px-8 py-4 text-lg">View All Pies</button>
            </Link>
          </div>
        </div>
      </section>

      <PieModal
        pie={selectedPie}
        isOpen={selectedPie !== null}
        onClose={() => setSelectedPie(null)}
      />
    </>
  )
}
