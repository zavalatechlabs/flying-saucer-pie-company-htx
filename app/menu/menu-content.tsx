'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { pies, Pie } from '@/lib/data/pies'
import { PieCard } from '@/components/ui/PieCard'
import { PieModal } from '@/components/ui/PieModal'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'

const categories = [
  { id: 'all', name: 'All Pies', emoji: '🥧' },
  { id: 'fruit', name: 'Fruit', emoji: '🍎' },
  { id: 'cream', name: 'Cream & Cheesecake', emoji: '🥛' },
  { id: 'seasonal', name: 'Seasonal', emoji: '🍂' },
]

export function MenuContent() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPie, setSelectedPie] = useState<Pie | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter pies based on category and search
  let filteredPies = pies

  // Apply category filter
  if (selectedCategory !== 'all') {
    filteredPies = filteredPies.filter((pie) => {
      if (selectedCategory === 'cream') {
        // Include both cream and cheesecake in the cream category
        return pie.category === 'cream' || pie.category === 'cheesecake'
      }
      return pie.category === selectedCategory
    })
  }

  // Apply search filter
  if (searchQuery) {
    filteredPies = filteredPies.filter(
      (pie) =>
        pie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pie.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const handlePieClick = (pie: Pie) => {
    setSelectedPie(pie)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedPie(null), 300) // Delay clearing to allow exit animation
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <section className="bg-ink text-surface py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg font-display mb-4"
          >
            Our Cosmic Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-xl text-surface/80"
          >
            Fresh pies made daily with love and no preservatives
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted"
                size={20}
              />
              <input
                type="text"
                placeholder="Search pies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300
                    ${
                      selectedCategory === category.id
                        ? 'bg-accent text-surface shadow-lg shadow-accent/30'
                        : 'bg-surface text-ink hover:bg-accent/10 border-2 border-accent/20'
                    }`}
                >
                  <span className="mr-2 text-lg">{category.emoji}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-center text-ink-muted mb-8">
            Showing {filteredPies.length} delicious {filteredPies.length === 1 ? 'pie' : 'pies'}
          </p>

          {/* Pie Grid */}
          {filteredPies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPies.map((pie, index) => (
                <ScrollReveal key={pie.id} variants={slideUp} delay={index * 0.05}>
                  <PieCard pie={pie} index={index} onClick={() => handlePieClick(pie)} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-ink-muted mb-4">
                No pies found matching your criteria 😢
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Pie Details Modal */}
          <PieModal pie={selectedPie} isOpen={isModalOpen} onClose={handleCloseModal} />

          {/* Special Notes */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Slice Information */}
            <ScrollReveal variants={slideUp} delay={0.1}>
              <div className="bg-surface rounded-2xl p-8 shadow-retro">
                <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                  🍰 About Our Slices
                </h3>
                <p className="text-ink-muted mb-4">
                  All pies are available by the slice (1/6 of a whole pie). Perfect for trying
                  multiple flavors!
                </p>
                <p className="text-sm text-ink-muted">
                  <strong>Note:</strong> After 6pm, slice selection may be limited based on
                  availability.
                </p>
              </div>
            </ScrollReveal>

            {/* Freezing Information */}
            <ScrollReveal variants={slideUp} delay={0.2}>
              <div className="bg-surface rounded-2xl p-8 shadow-retro">
                <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                  ❄️ Freezing Instructions
                </h3>
                <p className="text-ink-muted mb-4">
                  Pies with the ❄️ symbol can be frozen for up to 3 months.
                </p>
                <p className="text-sm text-ink-muted">
                  Wrap tightly in foil and heat from frozen at 350°F for 30-45 minutes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
