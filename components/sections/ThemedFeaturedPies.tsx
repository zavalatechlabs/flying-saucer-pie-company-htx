'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PieModal } from '@/components/ui/PieModal'
import { pies, Pie } from '@/lib/data/pies'

interface ThemedFeaturedPiesProps {
  theme: 'default' | 'spaceCity' | 'gulfCoast' | 'editorial' | 'neonNights'
}

const themeConfig = {
  default: {
    sectionBg: 'bg-surface',
    titleColor: 'text-ink',
    subtitleColor: 'text-ink-muted',
    cardBg: '',
    buttonBg: 'bg-accent',
    buttonText: 'text-surface',
    title: 'Cosmic Favorites',
    subtitle: 'Our most popular pies that keep Houstonians coming back',
  },
  spaceCity: {
    sectionBg: 'bg-[#0B1426]',
    titleColor: 'text-[#F0F4FF]',
    subtitleColor: 'text-[#94A3B8]',
    cardBg: 'bg-[#1E2642]/50 backdrop-blur border border-[#334155]',
    buttonBg: 'bg-[#FF6B35]',
    buttonText: 'text-white',
    title: 'Mission Control Favorites',
    subtitle: "The pies that fuel Houston's space explorers",
  },
  gulfCoast: {
    sectionBg: 'bg-[#F0FDFA]',
    titleColor: 'text-[#134E4A]',
    subtitleColor: 'text-[#0D9488]',
    cardBg: 'bg-white/80 backdrop-blur border border-[#99F6E4]',
    buttonBg: 'bg-[#F97316]',
    buttonText: 'text-white',
    title: 'Gulf Coast Treasures',
    subtitle: 'Fresh flavors from the Texas coast',
  },
  editorial: {
    sectionBg: 'bg-[#FAFAF9]',
    titleColor: 'text-[#171717]',
    subtitleColor: 'text-[#525252]',
    cardBg: 'bg-white border-2 border-[#171717]',
    buttonBg: 'bg-[#171717]',
    buttonText: 'text-white',
    title: "EDITOR'S PICKS",
    subtitle: 'Curated selections from our award-winning collection',
  },
  neonNights: {
    sectionBg: 'bg-[#0A0A0A]',
    titleColor: 'text-white',
    subtitleColor: 'text-[#A1A1A1]',
    cardBg: 'bg-[#171717] border border-[#333333]',
    buttonBg: 'bg-gradient-to-r from-[#EC4899] to-[#06B6D4]',
    buttonText: 'text-white',
    title: 'Night Shift Favorites',
    subtitle: 'The pies that light up Houston after dark',
  },
}

export function ThemedFeaturedPies({ theme }: ThemedFeaturedPiesProps) {
  const [selectedPie, setSelectedPie] = useState<Pie | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const featuredPies = pies.slice(0, 8)
  const infinitePies = [...featuredPies, ...featuredPies, ...featuredPies]
  const config = themeConfig[theme]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setIsPaused(true)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsPaused(false)
      }, 2000)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <section className={`py-20 overflow-hidden ${config.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold font-display mb-4 ${config.titleColor} ${
                theme === 'editorial' ? 'tracking-tight' : ''
              }`}
            >
              {config.title}
            </h2>
            <p className={`text-xl ${config.subtitleColor} mb-8`}>{config.subtitle}</p>
          </div>

          {/* Infinite Auto-Scroll Container */}
          <div
            ref={containerRef}
            className={`infinite-scroll-container ${theme === 'neonNights' ? 'neon-glow-track' : ''}`}
          >
            <div className={`infinite-scroll-track ${isPaused ? 'paused' : ''}`}>
              {infinitePies.map((pie, i) => (
                <div
                  key={`${pie.id}-${i}`}
                  className={`infinite-pie-item cursor-pointer ${config.cardBg ? 'p-4 rounded-xl' : ''} ${config.cardBg}`}
                  onClick={() => setSelectedPie(pie)}
                >
                  <div
                    className={`pie-spin-infinite ${theme === 'neonNights' ? 'neon-pie-glow' : ''}`}
                  >
                    <Image
                      src={pie.image || '/pie-placeholder.svg'}
                      alt={pie.name}
                      width={200}
                      height={200}
                      className="rounded-full object-cover"
                      priority={i < 8}
                    />
                  </div>
                  <p className={`text-center mt-4 font-medium text-base ${config.titleColor}`}>
                    {pie.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <button
                className={`px-8 py-4 rounded-pill font-medium text-lg transition-all hover:scale-105 ${config.buttonBg} ${config.buttonText}`}
              >
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
