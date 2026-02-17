'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getThemeById, type Theme } from '@/lib/themes'

interface ThemeSwitcherProps {
  className?: string
}

// Organized theme groups for the switcher
const retroDinerVariations: { id: string; path: string }[] = [
  { id: 'default', path: '/' },
  { id: 'vintagePaper', path: '/v1' },
  { id: 'houstonPride', path: '/v2' },
  { id: 'atomicAge', path: '/v3' },
  { id: 'warmMocha', path: '/v4' },
]

const otherThemes: { id: string; path: string }[] = [
  { id: 'spaceCity', path: '/home1' },
  { id: 'gulfCoast', path: '/home2' },
  { id: 'editorial', path: '/home3' },
  { id: 'neonNights', path: '/home4' },
]

// Build path mappings
const pathToTheme: Record<string, string> = {}
const themeToPath: Record<string, string> = {}

;[...retroDinerVariations, ...otherThemes].forEach(({ id, path }) => {
  pathToTheme[path] = id
  themeToPath[id] = path
})

export function ThemeSwitcher({ className = '' }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const currentThemeId = pathToTheme[pathname] ?? 'default'
  const currentTheme = getThemeById(currentThemeId)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const renderThemeLink = (themeId: string, path: string) => {
    const theme: Theme = getThemeById(themeId)
    return (
      <Link
        key={themeId}
        href={path}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
          themeId === currentThemeId ? 'bg-accent/10 text-accent' : 'hover:bg-bg-alt text-ink'
        }`}
      >
        <span className="text-lg">{theme.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm truncate">{theme.name}</p>
          <p className="text-xs text-ink-muted truncate">{theme.description}</p>
        </div>
        {themeId === currentThemeId && (
          <svg
            className="w-4 h-4 flex-shrink-0 text-accent"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Link>
    )
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-pill bg-surface/80 backdrop-blur-md border border-border/50 hover:bg-surface hover:border-border transition-all shadow-sm"
        aria-label="Switch theme"
      >
        <span className="text-lg">{currentTheme.emoji}</span>
        <span className="hidden sm:inline font-medium text-ink text-sm">{currentTheme.name}</span>
        <svg
          className={`w-4 h-4 text-ink-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-xl bg-surface/95 backdrop-blur-lg border border-border/50 shadow-xl overflow-hidden z-50">
          <div className="p-2">
            {/* Retro Diner Variations */}
            <p className="px-3 py-2 text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-2">
              <span>🛸</span> Retro Diner Variations
            </p>
            {retroDinerVariations.map(({ id, path }) => renderThemeLink(id, path))}

            {/* Divider */}
            <div className="my-2 border-t border-border/50" />

            {/* Other Themes */}
            <p className="px-3 py-2 text-xs font-medium text-ink-muted uppercase tracking-wider">
              Other Themes
            </p>
            {otherThemes.map(({ id, path }) => renderThemeLink(id, path))}
          </div>
        </div>
      )}
    </div>
  )
}
