'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log critical errors
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error boundary caught:', error)
    }
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#FFF8F0',
          padding: '20px',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🛸</div>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1A1A2E',
              marginBottom: '16px',
            }}
          >
            Critical Error
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#4A5568',
              marginBottom: '24px',
              lineHeight: '1.6',
            }}
          >
            We encountered a critical error. Please try refreshing the page.
          </p>
          <button
            onClick={reset}
            style={{
              padding: '12px 24px',
              backgroundColor: '#D4856A',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
