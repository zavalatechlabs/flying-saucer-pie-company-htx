'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { PieCard } from '@/components/ui/PieCard'
import { pies } from '@/lib/data/pies'
import { ArrowRight } from 'lucide-react'

// Featured pies - select a variety
const featuredPies = [
  pies.find(p => p.id === 'apple'),
  pies.find(p => p.id === 'strawberry-cream'),
  pies.find(p => p.id === 'pecan'),
  pies.find(p => p.id === 'key-lime')
].filter(Boolean)

export function MenuPreviewSection() {
  return (
    <section className="py-20 bg-dust-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-space-night mb-4">
            🌟 Cosmic Favorites
          </h2>
          <p className="text-xl text-dust-medium mb-8">
            Our most popular pies that keep Houstonians coming back
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredPies.map((pie, index) => (
            pie && <PieCard key={pie.id} pie={pie} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/menu">
            <Button size="lg" className="group">
              <span>View All Pies</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <p className="mt-6 text-dust-medium">
            We have {pies.length} varieties of pies - something for everyone!
          </p>
        </motion.div>

        {/* Special Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-cosmic-orange/10 border-2 border-cosmic-orange rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-space-night mb-3">
            🎄 Holiday Orders
          </h3>
          <p className="text-dust-dark mb-4">
            Planning for Thanksgiving? Remember - we don&apos;t take orders during Thanksgiving week.
            All pies are first come, first served!
          </p>
          <Link href="/about#thanksgiving">
            <Button variant="secondary">Learn More About Holiday Hours</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}