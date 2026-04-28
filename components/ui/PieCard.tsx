'use client'

import Image from 'next/image'
import { Pie } from '@/lib/data/pies'

interface PieCardProps {
  pie: Pie
  index?: number
  onClick?: () => void
}

const categoryLabelMap: Record<string, string> = {
  fruit: 'Fruit Pie',
  cream: 'Cream Pie',
  cheesecake: 'Cheesecake',
}

export function PieCard({ pie, onClick }: PieCardProps) {
  const categoryLabel = categoryLabelMap[pie.category] ?? 'Pie'

  return (
    <div
      className="group cursor-pointer bg-surface rounded-2xl border border-ink/[0.08] overflow-hidden shadow-retro hover:shadow-retro-hover hover:-translate-y-1 transition-all duration-300"
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
      {/* Image — full-bleed top */}
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-alt">
        {pie.image ? (
          <Image
            src={pie.image}
            alt={pie.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectPosition: pie.imagePosition ?? 'center' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center px-6">
            <span className="font-display font-bold text-2xl text-ink/15 uppercase tracking-widest text-center">
              {pie.name}
            </span>
          </div>
        )}

        {/* Tags — uppercase, no emojis */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[calc(100%-1.5rem)]">
          {pie.isSpecial && (
            <span className="px-2.5 py-1 bg-ink text-surface text-[0.65rem] font-display font-semibold uppercase tracking-[0.18em] rounded-sm">
              Special
            </span>
          )}
          {pie.isVegan && (
            <span className="px-2.5 py-1 bg-surface text-ink text-[0.65rem] font-display font-semibold uppercase tracking-[0.18em] rounded-sm shadow-sm">
              Vegan
            </span>
          )}
        </div>

        {/* Subtle hover vignette — replaces the Eye-icon overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink/0 group-hover:bg-ink/[0.06] transition-colors duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Category eyebrow */}
        <p className="text-[0.65rem] font-display font-semibold uppercase tracking-[0.22em] text-accent mb-2">
          {categoryLabel}
        </p>

        {/* Name */}
        <h3 className="text-xl font-display font-semibold text-ink leading-tight mb-3">
          {pie.name}
        </h3>

        {/* Description */}
        <p className="text-ink-muted text-sm leading-relaxed line-clamp-2 mb-5 min-h-[2.6em]">
          {pie.description}
        </p>

        {/* Pricing — hairline-separated */}
        <div className="flex items-baseline justify-between pt-4 border-t border-ink/[0.08]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-display font-bold text-ink leading-none">
              ${pie.price.whole.toFixed(2)}
            </span>
            <span className="text-[0.65rem] font-display font-semibold uppercase tracking-[0.18em] text-ink-muted">
              whole
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-display font-semibold text-ink-muted leading-none">
              ${pie.price.slice.toFixed(2)}
            </span>
            <span className="text-[0.65rem] font-display font-semibold uppercase tracking-[0.18em] text-ink-muted">
              slice
            </span>
          </div>
        </div>

        {/* Note */}
        {pie.note && <p className="mt-3 text-xs italic text-ink-muted">{pie.note}</p>}
      </div>
    </div>
  )
}
