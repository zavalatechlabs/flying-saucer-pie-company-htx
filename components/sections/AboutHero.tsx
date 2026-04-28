'use client'

import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/data/business-info'

export function AboutHero() {
  return (
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
      {/* Soft top→bottom radial glow for depth */}
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
          Est. {businessInfo.established} &nbsp;·&nbsp; Houston, TX
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-fredoka font-bold mb-5 leading-[1.02]"
          style={{ fontSize: 'clamp(2.75rem, 1.5rem + 5vw, 4.5rem)' }}
        >
          Houston Strong.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-xl md:text-2xl font-pacifico text-surface/85 max-w-3xl mx-auto"
        >
          {businessInfo.about.short}
        </motion.p>
      </div>
    </section>
  )
}
