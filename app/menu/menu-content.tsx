'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { pies, getPiesByCategory } from '@/lib/data/pies'
import { PieCard } from '@/components/ui/PieCard'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/lib/animations/scroll-reveal'
import { slideUp, fadeIn } from '@/lib/animations/variants'

const categories = [
  { id: 'all', name: 'All Pies', emoji: '🥧' },
  { id: 'fruit', name: 'Fruit', emoji: '🍎' },
  { id: 'cream', name: 'Cream', emoji: '🥛' },
  { id: 'cheesecake', name: 'Cheesecake', emoji: '🧀' },
  { id: 'seasonal', name: 'Seasonal', emoji: '🍂' },
]

const filters = [
  { id: 'vegan', name: '🌱 Vegan' },
  { id: 'freezable', name: '❄️ Can Freeze' },
]

export function MenuContent() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  // Filter pies based on category, search, and filters
  let filteredPies = selectedCategory === 'all' 
    ? pies 
    : getPiesByCategory(selectedCategory as any)

  // Apply search filter
  if (searchQuery) {
    filteredPies = filteredPies.filter(pie =>
      pie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pie.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // Apply additional filters
  if (activeFilters.includes('vegan')) {
    filteredPies = filteredPies.filter(pie => pie.isVegan)
  }
  if (activeFilters.includes('freezable')) {
    filteredPies = filteredPies.filter(pie => pie.canFreeze)
  }

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  return (
    <div className="min-h-screen bg-cream-white">
      {/* Header */}
      <section className="bg-space-night text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our Cosmic Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream-white/80"
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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dust-medium" size={20} />
              <input
                type="text"
                placeholder="Search pies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200
                    ${selectedCategory === category.id
                      ? 'bg-cosmic-orange text-white shadow-cosmic'
                      : 'bg-white text-dust-dark hover:bg-cosmic-orange/10'
                    }`}
                >
                  <span className="mr-2">{category.emoji}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Additional Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${activeFilters.includes(filter.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-dust-lightest text-dust-dark hover:bg-dust-light'
                    }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-center text-dust-medium mb-8">
            Showing {filteredPies.length} delicious {filteredPies.length === 1 ? 'pie' : 'pies'}
          </p>

          {/* Pie Grid */}
          {filteredPies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPies.map((pie, index) => (
                <ScrollReveal key={pie.id} variants={slideUp} delay={index * 0.05}>
                  <PieCard pie={pie} index={index} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-dust-medium mb-4">
                No pies found matching your criteria 😢
              </p>
              <Button onClick={() => {
                setSearchQuery('')
                setActiveFilters([])
                setSelectedCategory('all')
              }}>
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Special Notes */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Slice Information */}
            <ScrollReveal variants={slideUp} delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-space-night mb-4">🍰 About Our Slices</h3>
                <p className="text-dust-medium mb-4">
                  All pies are available by the slice (1/6 of a whole pie). Perfect for trying multiple flavors!
                </p>
                <p className="text-sm text-dust-medium">
                  <strong>Note:</strong> After 6pm, slice selection may be limited based on availability.
                </p>
              </div>
            </ScrollReveal>

            {/* Freezing Information */}
            <ScrollReveal variants={slideUp} delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-space-night mb-4">❄️ Freezing Instructions</h3>
                <p className="text-dust-medium mb-4">
                  Pies with the ❄️ symbol can be frozen for up to 3 months.
                </p>
                <p className="text-sm text-dust-medium">
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