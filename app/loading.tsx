export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center">
        {/* Flying Saucer Loading Animation */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Saucer */}
          <div className="absolute inset-0 flex items-center justify-center animate-bounce">
            <div className="text-6xl">🛸</div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
        </div>

        <p className="text-body text-ink-muted font-display">Loading...</p>
      </div>
    </div>
  )
}
