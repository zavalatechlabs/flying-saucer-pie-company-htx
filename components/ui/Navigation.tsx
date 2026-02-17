'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Location & Contact', href: '/contact' },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-surface/80 backdrop-blur-md border-b border-ink/10 shadow-sm'
          : 'bg-surface/40 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-ink hover:text-accent focus:outline-none 
                       transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-ink/10 shadow-2xl"
            >
              {/* Nav links */}
              <nav aria-label="Mobile navigation" className="px-4 py-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.14, delay: i * 0.04, ease: 'easeOut' }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between
                               px-4 py-4 rounded-xl
                               text-xl font-fredoka text-ink
                               hover:text-accent hover:bg-bg-alt
                               transition-all duration-150"
                    >
                      {link.name}
                      <ArrowRight
                        size={16}
                        className="text-ink/20 group-hover:text-accent group-hover:translate-x-1
                                 transition-all duration-150"
                      />
                    </Link>
                    {i < navLinks.length - 1 && <div className="mx-4 border-b border-ink/5" />}
                  </motion.div>
                ))}
              </nav>

              {/* Branded footer */}
              <div className="px-8 py-4 border-t border-ink/5 flex items-center gap-2">
                <span className="text-lg">🥧</span>
                <p className="text-xs font-display text-ink-muted tracking-wide">
                  Our pies are out of this world!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
