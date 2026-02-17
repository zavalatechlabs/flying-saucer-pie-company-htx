'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { themeList, getThemeById } from '@/lib/themes'

interface ThemeSwitcherProps {
  className?: string
}

export function ThemeSwitcher({ className = '' }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Map paths to theme IDs
  const pathToTheme: Record<string, string> = {
    '/': 'default',
    '/home1': 'spaceCity',
    '/home2': 'gulfCoast',
    '/home3': 'editorial',
    '/home4': 'neonNights',
  }

  const themeToPath: Record<string, string> = {
    default: '/',
    spaceCity: '/home1',
    gulfCoast: '/home2',
    editorial: '/home3',
    neonNights: '/home4',
  }

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

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-pill bg-surface/80 backdrop-blur border border-border hover:bg-surface transition-colors"
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
        <div className="absolute right-0 mt-2 w-64 rounded-lg bg-surface border border-border shadow-lg overflow-hidden z-50">
          <div className="p-2">
            <p className="px-3 py-2 text-xs font-medium text-ink-muted uppercase tracking-wider">
              Choose Theme
            </p>
            {themeList.map((theme) => (
              <Link
                key={theme.id}
                href={themeToPath[theme.id] ?? '/'}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${
                  theme.id === currentThemeId
                    ? 'bg-accent/10 text-accent'
                    : 'hover:bg-bg-alt text-ink'
                }`}
              >
                <span className="text-xl">{theme.emoji}</span>
                <div>
                  <p className="font-medium text-sm">{theme.name}</p>
                  <p className="text-xs text-ink-muted">{theme.description}</p>
                </div>
                {theme.id === currentThemeId && (
                  <svg
                    className="w-4 h-4 ml-auto text-accent"
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
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
