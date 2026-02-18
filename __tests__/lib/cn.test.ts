import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils/cn'

describe('cn utility', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz')
  })

  it('merges Tailwind classes correctly', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6')
  })
})
