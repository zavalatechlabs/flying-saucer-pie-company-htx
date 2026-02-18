'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'
import type { FAQItem as FAQItemType } from '@/lib/data/about-content'
import { cn } from '@/lib/utils/cn'

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
        <div className="pb-6 text-body text-ink-muted leading-relaxed space-y-2">
          {answer.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  )
}

interface FAQSectionProps {
  title?: string | null
  items: FAQItemType[]
  className?: string
}

function groupByCategory(
  items: FAQItemType[]
): { category: string | null; items: FAQItemType[] }[] {
  const groups: { category: string | null; items: FAQItemType[] }[] = []
  const seen = new Map<string, FAQItemType[]>()

  for (const item of items) {
    const key = item.category ?? ''
    if (!seen.has(key)) {
      const group: FAQItemType[] = []
      seen.set(key, group)
      groups.push({ category: item.category ?? null, items: group })
    }
    seen.get(key)!.push(item)
  }

  return groups
}

export function FAQSection({ title = 'Frequently Asked Questions', items, className }: FAQSectionProps) {
  const hasCategories = items.some((item) => item.category)
  const groups = hasCategories ? groupByCategory(items) : [{ category: null, items }]

  return (
    <section className={cn('bg-bg-alt', className ?? 'py-section-lg')}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <ScrollReveal variants={slideUp}>
            <h2 className="text-h1 font-display text-ink text-center mb-section">{title}</h2>
          </ScrollReveal>
        )}

        <div className="space-y-8">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.category && (
                <ScrollReveal variants={slideUp}>
                  <h3 className="text-h3 font-display text-accent mb-4 pb-2 border-b-2 border-accent/30">
                    {group.category}
                  </h3>
                </ScrollReveal>
              )}
              <div className="bg-surface rounded-2xl shadow-retro p-6 md:p-8">
                {group.items.map((faq, index) => (
                  <ScrollReveal key={index} variants={slideUp} delay={index * 0.05}>
                    <FAQItem question={faq.question} answer={faq.answer} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
