'use client'

import { motion } from 'framer-motion'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { ContactForm } from '@/components/sections/ContactForm'

export function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-surface py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg font-display mb-4"
          >
            Let&apos;s Talk Pie!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-xl text-surface/80"
          >
            Questions about our pies? Need help with a large order? We&apos;re here to help!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
