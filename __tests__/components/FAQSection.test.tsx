import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { FAQSection } from '@/components/sections/FAQSection'

const mockFAQs = [
  { question: 'Test Question 1', answer: 'Test Answer 1' },
  { question: 'Test Question 2', answer: 'Test Answer 2' },
]

describe('FAQSection', () => {
  it('renders all FAQ questions', () => {
    render(<FAQSection items={mockFAQs} />)

    expect(screen.getByText('Test Question 1')).toBeInTheDocument()
    expect(screen.getByText('Test Question 2')).toBeInTheDocument()
  })

  it('expands FAQ item on click', () => {
    render(<FAQSection items={mockFAQs} />)

    const question = screen.getByText('Test Question 1')
    fireEvent.click(question)

    expect(screen.getByText('Test Answer 1')).toBeVisible()
  })
})
