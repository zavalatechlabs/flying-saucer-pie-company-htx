'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { faqItems } from '@/lib/data/about-content'
import { businessInfo } from '@/lib/data/business-info'
import { FAQSection } from '@/components/sections/FAQSection'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'

export function FAQContent() {
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
            Frequently Asked &nbsp;·&nbsp; Since 1967
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-fredoka font-bold mb-5 leading-[1.02]"
            style={{ fontSize: 'clamp(2.75rem, 1.5rem + 5vw, 4.5rem)' }}
          >
            Pie questions, answered.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xl md:text-2xl font-pacifico text-surface/85 max-w-2xl mx-auto"
          >
            Hours, slices, shipping, freezer tips &mdash; all in one place.
          </motion.p>
        </div>
      </section>

      {/* Quick-jump strip — small, restrained metadata */}
      <div className="bg-bg-alt border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-display text-ink-muted">
          <span className="font-semibold uppercase tracking-[0.2em] text-ink/70">
            Jump to
          </span>
          <a
            href="#general-questions"
            className="text-ink hover:text-accent border-b border-ink/20 hover:border-accent pb-0.5 transition-colors"
          >
            General
          </a>
          <span className="text-ink/30">·</span>
          <a
            href="#pie-questions"
            className="text-ink hover:text-accent border-b border-ink/20 hover:border-accent pb-0.5 transition-colors"
          >
            About the pies
          </a>
        </div>
      </div>

      {/* FAQ accordion */}
      <FAQSection title={null} items={faqItems} />

      {/* Bottom CTA — typographic underline-link, not a generic pill */}
      <section className="py-section bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-4">
              Still Curious?
            </p>
            <h2
              className="font-display font-bold text-ink mb-6 leading-[1.08]"
              style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.4vw, 2.5rem)' }}
            >
              If we missed it, just&nbsp;ask &mdash; we love&nbsp;a good pie&nbsp;question.
            </h2>
            <p className="text-ink-muted leading-relaxed max-w-[58ch] mx-auto mb-9">
              Our team has been answering pie questions for half a century. Give us a call during
              shop hours, or send a note &mdash; we&rsquo;ll get back to you between batches.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
              <a
                href={`tel:${businessInfo.phone.replace(/[^\d+]/g, '')}`}
                className="group inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
              >
                <Phone
                  size={15}
                  className="text-ink/40 group-hover:text-accent transition-colors"
                />
                <span className="border-b-2 border-ink/25 group-hover:border-accent pb-1.5 transition-colors">
                  {businessInfo.phone}
                </span>
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
              >
                <span className="border-b-2 border-ink/25 group-hover:border-accent pb-1.5 transition-colors">
                  Send a message
                </span>
                <ArrowRight
                  size={16}
                  className="text-ink/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
                />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
