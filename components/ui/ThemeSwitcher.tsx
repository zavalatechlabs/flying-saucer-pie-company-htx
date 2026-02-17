'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getThemeById, type Theme } from '@/lib/themes'

interface ThemeSwitcherProps {
  className?: string
}

// Current main theme
const currentThemeRoute: { id: string; path: string }[] = [{ id: 'default', path: '/' }]

// 🆕 NEW - 5 Experimental Hero Background Variations
const newExperimental: { id: string; path: string }[] = [
  { id: 'auroraGlow', path: '/new1' },
  { id: 'sunsetWarmth', path: '/new2' },
  { id: 'cosmicDust', path: '/new3' },
  { id: 'oceanBreeze', path: '/new4' },
  { id: 'softCloud', path: '/new5' },
]

// Old themes - all previous variations
const oldThemes: { id: string; path: string }[] = [
  { id: 'retroDiner', path: '/old/retro' },
  { id: 'vintagePaper', path: '/v1' },
  { id: 'houstonPride', path: '/v2' },
  { id: 'atomicAge', path: '/v3' },
  { id: 'warmMocha', path: '/v4' },
  { id: 'niftyRetro', path: '/v5' },
  { id: 'neubrutalism', path: '/v6' },
  { id: 'neumorphism', path: '/v7' },
  { id: 'gradientMesh', path: '/v8' },
  { id: 'darkLuxe', path: '/v9' },
  { id: 'bentoGrid', path: '/v10' },
  { id: 'playfulIllustrated', path: '/v11' },
  { id: 'niftyPortal', path: '/v12' },
  { id: 'main', path: '/main' },
  { id: 'spaceCity', path: '/home1' },
  { id: 'gulfCoast', path: '/home2' },
  { id: 'editorial', path: '/home3' },
  { id: 'neonNights', path: '/home4' },
]

// Build path mappings
const pathToTheme: Record<string, string> = {}
const themeToPath: Record<string, string> = {}

;[...currentThemeRoute, ...newExperimental, ...oldThemes].forEach(({ id, path }) => {
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

  const renderThemeLink = (themeId: string, path: string, isNew = false) => {
    const theme: Theme = getThemeById(themeId)
    return (
      <Link
        key={themeId}
        href={path}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
          themeId === currentThemeId
            ? 'bg-accent/10 text-accent'
            : isNew
              ? 'hover:bg-accent/5 text-ink border border-accent/20'
              : 'hover:bg-bg-alt text-ink'
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
        <div className="absolute right-0 mt-2 w-80 max-h-[70vh] rounded-xl bg-surface/95 backdrop-blur-lg border border-border/50 shadow-xl overflow-y-auto z-50">
          <div className="p-2">
            {/* Current Theme */}
            <p className="px-3 py-2 text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-2">
              <span>🫧</span> Current Theme
            </p>
            {currentThemeRoute.map(({ id, path }) => renderThemeLink(id, path))}

            {/* Divider */}
            <div className="my-3 border-t border-border/50" />

            {/* NEW Experimental - Very Obvious */}
            <div className="bg-accent/5 rounded-lg p-2 mb-2 border border-accent/20">
              <p className="px-2 py-1 text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-2">
                <span className="animate-pulse">🆕</span> NEW - Hero Background Experiments
              </p>
              <p className="px-2 text-xs text-ink-muted mb-2">
                5 new variations with gradient backgrounds
              </p>
              <div className="space-y-1">
                {newExperimental.map(({ id, path }) => renderThemeLink(id, path, true))}
              </div>
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-border/50" />

            {/* Old Themes */}
            <p className="px-3 py-2 text-xs font-medium text-ink-muted uppercase tracking-wider flex items-center gap-2">
              <span>📁</span> Old Themes
            </p>
            <div className="space-y-1">
              {oldThemes.map(({ id, path }) => renderThemeLink(id, path))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
