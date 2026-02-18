import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
}))

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => {
    return React.createElement('img', { src, alt, ...props })
  },
}))

// Mock next/link
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string
    children?: React.ReactNode
    [key: string]: unknown
  }) => React.createElement('a', { href, ...props }, children),
}))

// Mock react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  useInView: () => [vi.fn(), true],
}))

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) =>
      React.createElement('div', props, children),
    section: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) =>
      React.createElement('section', props, children),
    span: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) =>
      React.createElement('span', props, children),
    p: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) =>
      React.createElement('p', props, children),
    h1: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) =>
      React.createElement('h1', props, children),
    button: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) =>
      React.createElement('button', props, children),
  },
  AnimatePresence: ({ children }: { children?: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
  useInView: () => true,
  useAnimation: () => ({ start: vi.fn(), stop: vi.fn() }),
}))
