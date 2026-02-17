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

// 🆕 NEW - 6 Experimental Hero Background Variations
const newExperimental: { id: string; path: string }[] = [
  { id: 'auroraGlow', path: '/new1' },
  { id: 'sunsetWarmth', path: '/new2' },
  { id: 'cosmicDust', path: '/new3' },
  { id: 'oceanBreeze', path: '/new4' },
  { id: 'softCloud', path: '/new5' },
  { id: 'meteorShower', path: '/new6' },
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
    const isActive = themeId === currentThemeId
    return (
      <Link
        key={themeId}
        href={path}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
          isActive
            ? 'bg-accent/10 text-accent ring-1 ring-accent/30'
            : isNew
              ? 'hover:bg-accent/5 text-ink border border-accent/20 hover:border-accent/40'
              : 'hover:bg-bg-alt text-ink'
        }`}
      >
        {/* Color swatch preview - 3 stacked circles showing theme palette */}
        <div className="relative flex-shrink-0 w-9 h-9">
          {/* Background color - largest circle */}
          <div
            className="absolute inset-0 rounded-md shadow-sm"
            style={{ backgroundColor: theme.colors.bg }}
          />
          {/* Accent color - medium circle, offset */}
          <div
            className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full border-2 shadow-sm"
            style={{
              backgroundColor: theme.colors.accent,
              borderColor: theme.colors.bg,
            }}
          />
          {/* Accent2 / surface - small dot */}
          <div
            className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full border border-white/50 shadow-sm"
            style={{ backgroundColor: theme.colors.accent2 }}
          />
          {/* Emoji badge */}
          <span className="absolute -bottom-1 -left-1 text-xs leading-none">{theme.emoji}</span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">{theme.name}</p>
          <p className="text-xs text-ink-muted truncate leading-tight mt-0.5">
            {theme.description}
          </p>
          {/* Color strip */}
          <div className="flex gap-0.5 mt-1.5">
            {[
              theme.colors.bg,
              theme.colors.surface,
              theme.colors.accent,
              theme.colors.accent2,
              theme.colors.border,
            ].map((color, i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {isActive && (
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
                6 variations with animated backgrounds
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
