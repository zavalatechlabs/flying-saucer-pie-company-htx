import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/ui/Navigation'

describe('Navigation', () => {
  it('renders all navigation links', () => {
    render(<Navigation />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Holidays')).toBeInTheDocument()
    expect(screen.getByText('Location & Contact')).toBeInTheDocument()
  })

  it('renders logo link to home', () => {
    render(<Navigation />)
    const logo = screen.getByRole('link', { name: /flying saucer/i })
    expect(logo).toHaveAttribute('href', '/')
  })
})
