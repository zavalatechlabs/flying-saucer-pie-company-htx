'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Gift } from 'lucide-react'
import { pies, Pie } from '@/lib/data/pies'
import { PieCard } from '@/components/ui/PieCard'
import { PieModal } from '@/components/ui/PieModal'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'
import { cn } from '@/lib/utils/cn'

const categories = [
  { id: 'all', label: 'All Pies' },
  { id: 'fruit', label: 'Fruit' },
  { id: 'cream', label: 'Cream' },
  { id: 'cheesecake', label: 'Cheesecakes' },
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
      {/* Hero — atmospheric retro panel */}
      <section className="relative bg-ink text-surface overflow-hidden">
        {/* Atomic pattern texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05] text-surface"
          style={{
            backgroundImage: `url('/brand/atomic-pattern.svg')`,
            backgroundSize: '140px 140px',
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Soft top→bottom gradient overlay for depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,255,255,0.06), transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section-lg text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[0.7rem] sm:text-xs font-display font-semibold uppercase tracking-[0.32em] text-surface/55 mb-5"
          >
            Houston, TX &nbsp;·&nbsp; Since 1967
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-fredoka font-bold mb-5 leading-[1.02]"
            style={{ fontSize: 'clamp(2.75rem, 1.5rem + 5vw, 4.5rem)' }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xl md:text-2xl font-pacifico text-surface/85 mb-10"
          >
            Fresh handmade pies, baked daily &mdash; no preservatives, ever.
          </motion.p>

          {/* Auxiliary actions — smaller, restrained, non-competing with the heading */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-display"
          >
            <a
              href="https://storage.googleapis.com/wzukusers/user-35097651/documents/4419e2b972c643f78c3f27d066976415/FSP%202025%20Holiday%20Menu.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-surface/70 hover:text-surface transition-colors"
            >
              <FileText size={15} className="text-surface/50 group-hover:text-surface/80" />
              <span className="border-b border-surface/30 group-hover:border-surface pb-0.5 transition-colors">
                Printer-friendly menu
              </span>
            </a>
            <a
              href="https://www.clover.com/online-ordering/flying-saucer-pie-co-houston"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-surface/70 hover:text-surface transition-colors"
            >
              <Gift size={15} className="text-surface/50 group-hover:text-surface/80" />
              <span className="border-b border-surface/30 group-hover:border-surface pb-0.5 transition-colors">
                Gift cards
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing notice — subtle stamp */}
      <div className="bg-bg-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 text-center text-sm text-ink-muted font-body">
          <span className="font-display font-semibold tracking-wide text-ink">
            All slices&nbsp;
            <span className="text-accent">$5.00</span>
          </span>
          <span className="mx-3 text-ink/30">·</span>
          Prices subject to change.{' '}
          <a
            href="/contact"
            className="text-ink underline underline-offset-[3px] decoration-ink/30 hover:decoration-ink transition-all"
          >
            Give us a call
          </a>
          &nbsp;with questions.
        </div>
      </div>

      {/* Menu Content */}
      <section className="py-section-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter — refined pills, no emojis */}
          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 md:mb-16"
            role="tablist"
            aria-label="Filter pies by category"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    'px-5 sm:px-6 py-2.5 rounded-full text-sm font-display font-semibold uppercase tracking-[0.14em] transition-all duration-200',
                    isActive
                      ? 'bg-ink text-surface border-2 border-ink'
                      : 'bg-transparent text-ink border-2 border-ink/15 hover:border-ink/40 hover:bg-surface'
                  )}
                >
                  {cat.label}
                </motion.button>
              )
            })}
          </div>

          {/* Result count — small, whispered metadata */}
          <motion.p
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center text-xs uppercase tracking-[0.22em] text-ink-muted font-display mb-8"
          >
            Showing {filteredPies.length} {filteredPies.length === 1 ? 'pie' : 'pies'}
          </motion.p>

          {/* Pie Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-8">
            {filteredPies.map((pie, index) => (
              <ScrollReveal key={pie.id} variants={slideUp} delay={index * 0.05}>
                <PieCard pie={pie} index={index} onClick={() => handlePieClick(pie)} />
              </ScrollReveal>
            ))}
          </div>

          <PieModal pie={selectedPie} isOpen={isModalOpen} onClose={handleCloseModal} />

          {/* Info — editorial pair, no card wrappers */}
          <div className="mt-24 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 max-w-5xl mx-auto">
            <ScrollReveal variants={slideUp} delay={0.1}>
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                By the Slice
              </p>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4 leading-snug">
                One-sixth of a whole pie.
              </h3>
              <p className="text-ink-muted mb-3 max-w-[60ch] leading-relaxed">
                Every pie on the menu is also available by the slice &mdash; perfect for sampling a
                few flavors on a single visit.
              </p>
              <p className="text-sm text-ink-muted/80 leading-relaxed">
                After 6 pm, slice selection may be limited depending on what was freshly baked that
                day.
              </p>
            </ScrollReveal>

            <ScrollReveal variants={slideUp} delay={0.2}>
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                Take One Home
              </p>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4 leading-snug">
                Freezing &amp; reheating.
              </h3>
              <p className="text-ink-muted mb-3 max-w-[60ch] leading-relaxed">
                Fruit pies freeze beautifully for up to three months. Wrap tightly in foil and heat
                from frozen at 350&deg;F for 30&ndash;45 minutes.
              </p>
              <p className="text-sm text-ink-muted/80 leading-relaxed">
                Cream pies and cheesecakes are best enjoyed fresh &mdash; refrigerate and consume
                within 2&ndash;4 days.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
