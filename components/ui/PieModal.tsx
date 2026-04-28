'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { Pie } from '@/lib/data/pies'

interface PieModalProps {
  pie: Pie | null
  isOpen: boolean
  onClose: () => void
}

const categoryLabelMap: Record<string, string> = {
  fruit: 'Fruit Pie',
  cream: 'Cream Pie',
  cheesecake: 'Cheesecake',
}

export function PieModal({ pie, isOpen, onClose }: PieModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // ESC to close + body scroll lock + initial focus
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return

    const modal = modalRef.current
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTab = (e: Event) => {
      const keyboardEvent = e as KeyboardEvent
      if (keyboardEvent.key !== 'Tab') return

      if (keyboardEvent.shiftKey) {
        if (document.activeElement === firstElement) {
          keyboardEvent.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          keyboardEvent.preventDefault()
          firstElement?.focus()
        }
      }
    }

    modal.addEventListener('keydown', handleTab)
    return () => modal.removeEventListener('keydown', handleTab)
  }, [isOpen])

  if (!pie) return null

  const categoryLabel = categoryLabelMap[pie.category] ?? 'Pie'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — navy-tinted instead of pure black */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 backdrop-blur-sm"
            style={{ backgroundColor: 'oklch(15% 0.045 275 / 0.65)' }}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative bg-surface rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close — quieter, integrated */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface/85 backdrop-blur-sm border border-ink/10 hover:bg-surface hover:border-ink/30 transition-all"
                aria-label="Close modal"
              >
                <X size={18} className="text-ink" />
              </button>

              {/* Editorial split: image bleeds on the left, content right */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative bg-bg-alt md:rounded-l-2xl overflow-hidden">
                  <div className="relative aspect-square md:aspect-auto md:h-full md:min-h-[520px]">
                    {pie.image ? (
                      <Image
                        src={pie.image}
                        alt={pie.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectPosition: pie.imagePosition ?? 'center' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center px-8">
                        <span className="font-display font-bold text-3xl text-ink/15 uppercase tracking-widest text-center">
                          {pie.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tags overlaid on image bottom-left */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[calc(100%-2rem)]">
                    {pie.isSpecial && (
                      <span className="px-3 py-1.5 bg-ink text-surface text-[0.65rem] font-display font-semibold uppercase tracking-[0.18em] rounded-sm">
                        Special
                      </span>
                    )}
                    {pie.isVegan && (
                      <span className="px-3 py-1.5 bg-surface text-ink text-[0.65rem] font-display font-semibold uppercase tracking-[0.18em] rounded-sm shadow-sm">
                        Vegan
                      </span>
                    )}
                    {pie.canFreeze && (
                      <span className="px-3 py-1.5 bg-surface text-ink text-[0.65rem] font-display font-semibold uppercase tracking-[0.18em] rounded-sm shadow-sm">
                        Freezable
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 md:p-8 lg:p-10">
                  <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.32em] text-accent mb-3">
                    {categoryLabel}
                  </p>

                  <h2
                    id="modal-title"
                    className="font-display font-bold text-ink leading-[1.05] mb-5"
                    style={{ fontSize: 'clamp(1.875rem, 1.25rem + 1.5vw, 2.5rem)' }}
                  >
                    {pie.name}
                  </h2>

                  <p className="text-lg text-ink-muted leading-relaxed mb-7">{pie.description}</p>

                  {pie.ingredients && pie.ingredients.length > 0 && (
                    <div className="mb-7">
                      <p className="text-[0.65rem] font-display font-semibold uppercase tracking-[0.22em] text-accent mb-2.5">
                        What&rsquo;s in it
                      </p>
                      <ul className="text-ink-muted space-y-1.5">
                        {pie.ingredients.map((ingredient, index) => (
                          <li key={index} className="leading-relaxed">
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Allergens — typographic, no yellow-card box, no emoji */}
                  <div className="mb-7 pb-7 border-b border-ink/10">
                    <p className="text-[0.65rem] font-display font-semibold uppercase tracking-[0.22em] text-accent mb-2.5">
                      Allergens
                    </p>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {pie.isVegan
                        ? 'Vegan — contains no animal products. May contain wheat and nuts.'
                        : 'Contains dairy, eggs, and wheat. May contain nuts. Made in a facility that processes tree nuts and peanuts.'}
                    </p>
                  </div>

                  {pie.shelfLife && (
                    <div className="mb-7">
                      <p className="text-[0.65rem] font-display font-semibold uppercase tracking-[0.22em] text-accent mb-2.5">
                        Keeps For
                      </p>
                      <p className="text-sm text-ink-muted leading-relaxed">{pie.shelfLife}</p>
                    </div>
                  )}

                  {/* Pricing — editorial, no gray boxes */}
                  <div className="mt-auto pt-6 border-t border-ink/15">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-[0.65rem] font-display font-semibold uppercase tracking-[0.22em] text-ink-muted mb-1.5">
                          Whole Pie
                        </p>
                        <p
                          className="font-display font-bold text-ink leading-none"
                          style={{ fontSize: 'clamp(2rem, 1.5rem + 1.5vw, 2.75rem)' }}
                        >
                          ${pie.price.whole.toFixed(2)}
                        </p>
                        <p className="text-xs text-ink-muted mt-1.5">9-inch &middot; serves 6&ndash;8</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[0.65rem] font-display font-semibold uppercase tracking-[0.22em] text-ink-muted mb-1.5">
                          By the Slice
                        </p>
                        <p
                          className="font-display font-bold text-ink-muted leading-none"
                          style={{ fontSize: 'clamp(1.5rem, 1.25rem + 0.75vw, 2rem)' }}
                        >
                          ${pie.price.slice.toFixed(2)}
                        </p>
                        <p className="text-xs text-ink-muted mt-1.5">1/6 of whole</p>
                      </div>
                    </div>
                    {pie.note && (
                      <p className="mt-5 text-sm italic text-ink-muted">{pie.note}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
