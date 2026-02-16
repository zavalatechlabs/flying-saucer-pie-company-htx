'use client'

import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/data/business-info'

export function AboutHero() {
  return (
    <section className="bg-ink text-surface py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display-lg font-display mb-4"
        >
          Houston Strong Since {businessInfo.established}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-body-xl text-surface/80 max-w-3xl mx-auto"
        >
          {businessInfo.about.short}
        </motion.p>
      </div>
    </section>
  )
}
