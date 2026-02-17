'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'
import type { FAQItem as FAQItemType } from '@/lib/data/about-content'

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border-color last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-accent transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-h5 text-ink pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform flex-shrink-0 text-accent group-hover:scale-110 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-body text-ink-muted leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

interface FAQSectionProps {
  title?: string | null
  items: FAQItemType[]
}

export function FAQSection({ title = 'Frequently Asked Questions', items }: FAQSectionProps) {
  return (
    <section className="py-section-lg bg-bg-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <ScrollReveal variants={slideUp}>
            <h2 className="text-h1 font-display text-ink text-center mb-section">{title}</h2>
          </ScrollReveal>
        )}

        <div className="bg-surface rounded-2xl shadow-retro p-6 md:p-8">
          {items.map((faq, index) => (
            <ScrollReveal key={index} variants={slideUp} delay={index * 0.05}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
