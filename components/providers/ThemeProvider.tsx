'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { themes, getThemeById, type Theme } from '@/lib/themes'

interface ThemeContextType {
  theme: Theme
  setTheme: (themeId: string) => void
  themeId: string
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: string
}

export function ThemeProvider({ children, defaultTheme = 'default' }: ThemeProviderProps) {
  const [themeId, setThemeId] = useState(defaultTheme)
  const theme = getThemeById(themeId)

  useEffect(() => {
    // Apply theme CSS variables to document
    const root = document.documentElement
    const colors = theme.colors

    root.style.setProperty('--bg', colors.bg)
    root.style.setProperty('--bg-alt', colors.bgAlt)
    root.style.setProperty('--surface', colors.surface)
    root.style.setProperty('--ink', colors.ink)
    root.style.setProperty('--ink-muted', colors.inkMuted)
    root.style.setProperty('--accent', colors.accent)
    root.style.setProperty('--accent-2', colors.accent2)
    root.style.setProperty('--border', colors.border)
    root.style.setProperty('--hero-bg', colors.heroBg)
    root.style.setProperty('--hero-gradient', colors.heroGradient)

    // Set data attribute for CSS targeting
    root.setAttribute('data-theme', themeId)
  }, [theme, themeId])

  const setTheme = (newThemeId: string) => {
    if (themes[newThemeId]) {
      setThemeId(newThemeId)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeId }}>{children}</ThemeContext.Provider>
  )
}
