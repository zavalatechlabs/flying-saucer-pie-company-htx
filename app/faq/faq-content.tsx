'use client'

import { motion } from 'framer-motion'
import { faqItems } from '@/lib/data/about-content'
import { FAQSection } from '@/components/sections/FAQSection'

export function FAQContent() {
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-pacifico text-surface/90"
          >
            Everything you need to know before you visit
          </motion.p>
        </div>
      </section>

      {/* FAQ accordion */}
      <FAQSection items={faqItems} />
    </div>
  )
}
