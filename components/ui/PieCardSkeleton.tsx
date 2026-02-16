export function PieCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-surface rounded-2xl overflow-hidden shadow-retro">
        {/* Image skeleton */}
        <div className="aspect-square bg-ink/10" />

        {/* Content skeleton */}
        <div className="p-6 space-y-3">
          {/* Title */}
          <div className="h-6 bg-ink/10 rounded w-3/4" />

          {/* Description lines */}
          <div className="space-y-2">
            <div className="h-4 bg-ink/10 rounded w-full" />
            <div className="h-4 bg-ink/10 rounded w-5/6" />
          </div>

          {/* Price and button */}
          <div className="flex justify-between items-center pt-4">
            <div className="h-6 bg-ink/10 rounded w-20" />
            <div className="h-10 bg-ink/10 rounded-pill w-28" />
          </div>
        </div>
      </div>
    </div>
  )
}
