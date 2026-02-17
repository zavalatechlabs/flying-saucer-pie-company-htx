'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PieModal } from '@/components/ui/PieModal'
import { pies, Pie } from '@/lib/data/pies'

export function FeaturedPiesRow() {
  const [selectedPie, setSelectedPie] = useState<Pie | null>(null)
  const featuredPies = pies.slice(0, 8) // first 8 pies

  // Duplicate pies 3 times for seamless infinite scroll
  const infinitePies = [...featuredPies, ...featuredPies, ...featuredPies]

  return (
    <>
      <section className="py-20 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-ink mb-4">
              Cosmic Favorites
            </h2>
            <p className="text-xl text-ink-muted mb-8">
              Our most popular pies that keep Houstonians coming back
            </p>
          </div>

          {/* Infinite Auto-Scroll Container */}
          <div className="relative">
            <div className="infinite-scroll-container">
              <div className="infinite-scroll-track">
                {infinitePies.map((pie, i) => (
                  <div
                    key={`${pie.id}-${i}`}
                    className="infinite-pie-item cursor-pointer"
                    onClick={() => setSelectedPie(pie)}
                  >
                    <div className="pie-spin-infinite">
                      <Image
                        src={pie.image || '/pie-placeholder.svg'}
                        alt={pie.name}
                        width={200}
                        height={200}
                        className="rounded-full object-cover"
                        priority={i < 8}
                      />
                    </div>
                    <p className="text-center mt-4 font-medium text-ink text-base">{pie.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <button className="px-8 py-4 bg-accent text-surface rounded-pill font-medium text-lg hover:bg-accent/90 transition-colors">
                View All Pies
              </button>
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
