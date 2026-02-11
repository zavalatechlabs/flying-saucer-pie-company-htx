'use client'

import { motion } from 'framer-motion'
import { Heart, Plus, ShoppingCart, Eye } from 'lucide-react'
import { Pie } from '@/lib/data/pies'
import { Button } from './Button'
import { cn } from '@/lib/utils/cn'
import { useState } from 'react'

interface PieCardProps {
  pie: Pie
  index?: number
  onClick?: () => void
}

export function PieCard({ pie, index = 0, onClick }: PieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

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
      <div className="relative h-64 overflow-hidden">
        {/* Placeholder for pie image */}
        <div className="w-full h-full bg-gradient-to-br from-pie-crust-light to-pie-crust flex items-center justify-center">
          <span className="text-8xl steam-container">🥧</span>
        </div>
        
        {/* Labels */}
        {pie.isSpecial && (
          <div className="absolute top-2 left-2 bg-berry-red text-white px-3 py-1 rounded-full text-sm font-medium">
            Special
          </div>
        )}
        {pie.isVegan && (
          <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            🌱 Vegan
          </div>
        )}
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorite(!isFavorite)
          }}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm",
            "transition-all duration-300 hover:scale-110",
            pie.isVegan && "right-20"
          )}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            size={20}
            className={cn(
              "transition-colors duration-300",
              isFavorite ? "fill-berry-red text-berry-red" : "text-dust-medium"
            )}
          />
        </button>
        
        {/* View Details Indicator */}
        <div className="absolute bottom-2 right-2 p-2 rounded-full bg-cosmic-purple text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Eye size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-space-night mb-2">{pie.name}</h3>
        <p className="text-dust-medium text-sm mb-4 line-clamp-2">{pie.description}</p>

        {/* Price */}
        <div className="flex items-end gap-2 mb-4">
          <span className="text-2xl font-bold text-cosmic-orange">
            ${pie.price.whole.toFixed(2)}
          </span>
          <span className="text-sm text-dust-medium mb-1">whole pie</span>
        </div>

        {/* Slice price */}
        <p className="text-sm text-dust-medium mb-4">
          Slice: ${pie.price.slice.toFixed(2)}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            className="flex-1 flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <ShoppingCart size={18} />
            <span>Add Whole</span>
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Plus size={18} />
          </Button>
        </div>

        {/* Additional Info */}
        {pie.canFreeze && (
          <p className="text-xs text-dust-medium mt-3">❄️ Can be frozen</p>
        )}
      </div>
    </div>
  )
}