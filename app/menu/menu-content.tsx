'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Gift } from 'lucide-react'
import { pies, Pie } from '@/lib/data/pies'
import { PieCard } from '@/components/ui/PieCard'
import { PieModal } from '@/components/ui/PieModal'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'

const categories = [
  { id: 'all', label: 'All Pies', emoji: '🥧' },
  { id: 'fruit', label: 'Fruit Pies', emoji: '🍎' },
  { id: 'cream', label: 'Cream Pies', emoji: '🥛' },
  { id: 'cheesecake', label: 'Cheesecakes', emoji: '🎂' },
]

export function MenuContent() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPie, setSelectedPie] = useState<Pie | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredPies =
    selectedCategory === 'all' ? pies : pies.filter((pie) => pie.category === selectedCategory)

  const handlePieClick = (pie: Pie) => {
    setSelectedPie(pie)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedPie(null), 300)
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="bg-ink text-surface py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg font-fredoka font-bold mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-pacifico text-surface/90 mb-8"
          >
            Fresh handmade pies baked daily — no preservatives, ever
          </motion.p>

          {/* Printer-friendly + Gift Cards */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://storage.googleapis.com/wzukusers/user-35097651/documents/4419e2b972c643f78c3f27d066976415/FSP%202025%20Holiday%20Menu.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface/30 text-surface/80 hover:text-surface hover:border-surface/60 text-sm font-medium transition-colors duration-200"
            >
              <FileText size={16} />
              Printer-Friendly Version
            </a>
            <a
              href="https://www.clover.com/online-ordering/flying-saucer-pie-co-houston"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface/30 text-surface/80 hover:text-surface hover:border-surface/60 text-sm font-medium transition-colors duration-200"
            >
              <Gift size={16} />
              Gift Cards
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Notice */}
      <div className="bg-bg-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center text-sm text-ink-muted">
          All slices $5.00 &nbsp;·&nbsp; Prices subject to change without notice. If you have
          questions, please{' '}
          <a
            href="/contact"
            className="underline underline-offset-2 hover:text-ink transition-colors"
          >
            give us a call
          </a>
          .
        </div>
      </div>

      {/* Menu Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300
                  ${
                    selectedCategory === cat.id
                      ? 'bg-accent text-surface shadow-lg shadow-accent/30'
                      : 'bg-surface text-ink hover:bg-accent/10 border-2 border-accent/20'
                  }`}
              >
                <span className="mr-2 text-lg">{cat.emoji}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Pie Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPies.map((pie, index) => (
              <ScrollReveal key={pie.id} variants={slideUp} delay={index * 0.05}>
                <PieCard pie={pie} index={index} onClick={() => handlePieClick(pie)} />
              </ScrollReveal>
            ))}
          </div>

          {/* Pie Modal */}
          <PieModal pie={selectedPie} isOpen={isModalOpen} onClose={handleCloseModal} />

          {/* Info Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal variants={slideUp} delay={0.1}>
              <div className="bg-surface rounded-2xl p-8 shadow-retro">
                <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                  🍰 About Our Slices
                </h3>
                <p className="text-ink-muted mb-4">
                  All pies are available by the slice — one-sixth of a whole pie. Perfect for
                  sampling a few flavors in one visit!
                </p>
                <p className="text-sm text-ink-muted">
                  <strong>Note:</strong> After 6 pm, slice selection may be limited depending on
                  what&apos;s been freshly baked that day.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={slideUp} delay={0.2}>
              <div className="bg-surface rounded-2xl p-8 shadow-retro">
                <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                  ❄️ Freezing Instructions
                </h3>
                <p className="text-ink-muted mb-4">
                  Our fruit pies freeze beautifully for up to 3 months. Wrap tightly in foil and
                  heat from frozen at 350 °F for 30–45 minutes.
                </p>
                <p className="text-sm text-ink-muted">
                  Cream pies and cheesecakes are best enjoyed fresh — refrigerate and consume within
                  2–4 days.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
