'use client'

import { Eye } from 'lucide-react'
import { Pie } from '@/lib/data/pies'

interface PieCardProps {
  pie: Pie
  index?: number
  onClick?: () => void
}

export function PieCard({ pie, onClick }: PieCardProps) {
  return (
    <div
      className="pie-card group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
      aria-label={`View details for ${pie.name}`}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <div className="w-full h-full bg-gradient-to-br from-bg-alt to-border flex items-center justify-center">
          <span className="text-8xl">🥧</span>
        </div>

        {/* Labels */}
        {pie.isSpecial && (
          <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            Special
          </div>
        )}
        {pie.isVegan && (
          <div className="absolute top-3 right-3 bg-ink text-surface px-3 py-1 rounded-full text-xs font-semibold">
            🌱 Vegan
          </div>
        )}

        {/* View Details hover indicator */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-surface/90 backdrop-blur-sm rounded-full p-3 shadow-md">
            <Eye size={20} className="text-ink" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink mb-1.5">{pie.name}</h3>
        <p className="text-ink-muted text-sm mb-4 line-clamp-2 leading-relaxed">
          {pie.description}
        </p>

        {/* Pricing */}
        <div className="flex items-baseline gap-3">
          <div>
            <span className="text-2xl font-bold text-accent">${pie.price.whole.toFixed(2)}</span>
            <span className="text-xs text-ink-muted ml-1">whole</span>
          </div>
          <div className="text-ink-muted text-sm">·</div>
          <div>
            <span className="text-sm font-medium text-ink">${pie.price.slice.toFixed(2)}</span>
            <span className="text-xs text-ink-muted ml-1">slice</span>
          </div>
        </div>

        {pie.canFreeze && (
          <p className="text-xs text-ink-muted mt-3 flex items-center gap-1">
            <span>❄️</span> Can be frozen
          </p>
        )}
      </div>
    </div>
  )
}
