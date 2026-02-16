'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error boundary caught:', error)
    }
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-6xl mb-4">🛸</div>
          <h1 className="text-h1 font-display text-ink mb-2">Houston, we have a problem!</h1>
          <p className="text-body text-ink-muted mb-6">
            Something went wrong while loading this page. Our team has been notified.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left bg-surface p-4 rounded-lg mb-4 text-sm">
              <summary className="cursor-pointer font-medium text-ink mb-2">
                Error Details (Dev Only)
              </summary>
              <pre className="text-xs overflow-auto text-error">
                {error.message || 'Unknown error'}
              </pre>
            </details>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-accent text-surface rounded-pill font-medium hover:bg-accent/90 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-surface text-ink border-2 border-border-color rounded-pill font-medium hover:bg-bg-alt transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
