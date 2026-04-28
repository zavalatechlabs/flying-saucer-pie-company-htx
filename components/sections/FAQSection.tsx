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
    <div className="border-b border-ink/10 last:border-0">
      <button
        className="w-full py-6 md:py-7 flex justify-between items-start gap-4 text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-lg md:text-xl text-ink leading-snug group-hover:text-accent transition-colors">
          {question}
        </span>
        <span
          className={cn(
            'flex-shrink-0 mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full border border-ink/15 text-ink/70 transition-all duration-200',
            'group-hover:border-accent group-hover:text-accent',
            isOpen && 'bg-ink text-surface border-ink rotate-180'
          )}
          aria-hidden="true"
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      {isOpen && (
        <div className="pb-7 md:pb-8 -mt-1 pr-12 font-body text-ink-muted leading-relaxed space-y-3 max-w-[60ch]">
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
  style?: React.CSSProperties
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

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function FAQSection({ title = 'Frequently Asked Questions', items, className, style }: FAQSectionProps) {
  const hasCategories = items.some((item) => item.category)
  const groups = hasCategories ? groupByCategory(items) : [{ category: null, items }]

  return (
    <section className={cn('py-section-lg bg-bg', className)} style={style}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-4 text-center">
              Common Questions
            </p>
            <h2
              className="font-display font-bold text-ink text-center mb-section leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 1.25rem + 3vw, 3rem)' }}
            >
              {title}
            </h2>
          </ScrollReveal>
        )}

        <div className="space-y-16 md:space-y-20">
          {groups.map((group, groupIndex) => {
            const headlineMap: Record<string, string> = {
              'General Questions': 'The basics, sorted.',
              'Pie Questions': 'About the pies themselves.',
            }
            const headline = group.category
              ? headlineMap[group.category] ?? group.category
              : null
            const slug = group.category ? slugify(group.category) : undefined

            return (
              <div key={groupIndex} id={slug} className="scroll-mt-28">
                {group.category && (
                  <ScrollReveal variants={slideUp}>
                    <div className="mb-8 md:mb-10">
                      <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.32em] text-accent mb-3">
                        {group.category}
                      </p>
                      <h3
                        className="font-display font-bold text-ink leading-[1.1]"
                        style={{ fontSize: 'clamp(1.5rem, 1rem + 2vw, 2.25rem)' }}
                      >
                        {headline}
                      </h3>
                    </div>
                  </ScrollReveal>
                )}
                <div className="border-t border-ink/10">
                  {group.items.map((faq, index) => (
                    <ScrollReveal key={index} variants={slideUp} delay={index * 0.04}>
                      <FAQItem question={faq.question} answer={faq.answer} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
