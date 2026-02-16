export default function MenuLoading() {
  return (
    <div className="min-h-screen bg-bg pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-12 animate-pulse">
          <div className="h-12 bg-ink/10 rounded-lg w-64 mx-auto mb-4" />
          <div className="h-6 bg-ink/10 rounded-lg w-96 mx-auto" />
        </div>

        {/* Filter Buttons Skeleton */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-pulse">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 bg-ink/10 rounded-pill w-24" />
          ))}
        </div>

        {/* Pie Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-surface rounded-2xl overflow-hidden shadow-retro">
                {/* Image skeleton */}
                <div className="aspect-square bg-ink/10" />
                {/* Content skeleton */}
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-ink/10 rounded w-3/4" />
                  <div className="h-4 bg-ink/10 rounded w-full" />
                  <div className="h-4 bg-ink/10 rounded w-2/3" />
                  <div className="flex justify-between items-center mt-4">
                    <div className="h-6 bg-ink/10 rounded w-20" />
                    <div className="h-10 bg-ink/10 rounded-pill w-24" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
