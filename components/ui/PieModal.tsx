'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingCart } from 'lucide-react'
import { Pie } from '@/lib/data/pies'
import { Button } from './Button'

interface PieModalProps {
  pie: Pie | null
  isOpen: boolean
  onClose: () => void
}

export function PieModal({ pie, isOpen, onClose }: PieModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      
      // Focus trap - focus the close button when modal opens
      closeButtonRef.current?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Focus trap - keep focus within modal
  useEffect(() => {
    if (!isOpen || !modalRef.current) return

    const modal = modalRef.current
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    modal.addEventListener('keydown', handleTab as any)
    return () => modal.removeEventListener('keydown', handleTab as any)
  }, [isOpen])

  if (!pie) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} className="text-dust-dark" />
              </button>

              {/* Modal Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Left Column - Image */}
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-pie-crust-light to-pie-crust flex items-center justify-center">
                    <span className="text-[12rem] steam-container">🥧</span>
                  </div>

                  {/* Labels */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {pie.isSpecial && (
                      <span className="px-3 py-1 bg-berry-red text-white rounded-full text-sm font-medium">
                        ⭐ Special
                      </span>
                    )}
                    {pie.isVegan && (
                      <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">
                        🌱 Vegan
                      </span>
                    )}
                    {pie.canFreeze && (
                      <span className="px-3 py-1 bg-electric-blue text-white rounded-full text-sm font-medium">
                        ❄️ Freezable
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="flex flex-col">
                  <div className="flex-1">
                    {/* Title */}
                    <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-space-night mb-2">
                      {pie.name}
                    </h2>

                    {/* Category */}
                    <p className="text-cosmic-purple font-medium mb-4 capitalize">
                      {pie.category} Pie
                    </p>

                    {/* Description */}
                    <p className="text-dust-medium text-lg mb-6">
                      {pie.description}
                    </p>

                    {/* Ingredients */}
                    {pie.ingredients && pie.ingredients.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-space-night mb-2">
                          Ingredients
                        </h3>
                        <ul className="list-disc list-inside text-dust-medium space-y-1">
                          {pie.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Allergen Info */}
                    <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h3 className="text-sm font-semibold text-space-night mb-2">
                        ⚠️ Allergen Information
                      </h3>
                      <p className="text-sm text-dust-medium">
                        {pie.isVegan 
                          ? 'This pie is vegan and contains no animal products. May contain wheat and nuts.'
                          : 'Contains dairy, eggs, and wheat. May contain nuts. Made in a facility that processes tree nuts and peanuts.'}
                      </p>
                    </div>

                    {/* Shelf Life */}
                    {pie.shelfLife && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-space-night mb-1">
                          Shelf Life
                        </h3>
                        <p className="text-sm text-dust-medium">{pie.shelfLife}</p>
                      </div>
                    )}

                    {/* Pricing */}
                    <div className="border-t border-dust-light pt-6 mb-6">
                      <h3 className="text-lg font-semibold text-space-night mb-3">
                        Pricing
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-cosmic-purple/5 p-4 rounded-lg">
                          <p className="text-sm text-dust-medium mb-1">Whole Pie</p>
                          <p className="text-2xl font-bold text-cosmic-purple">
                            ${pie.price.whole.toFixed(2)}
                          </p>
                          <p className="text-xs text-dust-medium mt-1">9-inch, serves 6-8</p>
                        </div>
                        <div className="bg-cosmic-orange/5 p-4 rounded-lg">
                          <p className="text-sm text-dust-medium mb-1">Single Slice</p>
                          <p className="text-2xl font-bold text-cosmic-orange">
                            ${pie.price.slice.toFixed(2)}
                          </p>
                          <p className="text-xs text-dust-medium mt-1">1/6 of whole pie</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-dust-light">
                    <Button className="flex-1 flex items-center justify-center gap-2">
                      <ShoppingCart size={20} />
                      <span>Add Whole Pie</span>
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      Add Slice
                    </Button>
                  </div>

                  <p className="text-xs text-dust-medium text-center mt-3">
                    * Cart functionality coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
