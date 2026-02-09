'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Button } from './Button'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Location', href: '/location' },
  { name: 'Contact', href: '/contact' },
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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-cream-white/95 backdrop-blur-lg shadow-md" 
        : "bg-cream-white/80 backdrop-blur-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>Order Now</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-cosmic-orange p-2">
              <ShoppingCart size={24} />
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-dust-dark hover:text-cosmic-orange focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-dust-light mt-2">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-3 text-dust-dark hover:text-cosmic-orange 
                           hover:bg-cosmic-orange/5 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full">Order Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}