'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import { pies, Pie } from '@/lib/data/pies'
import { staggerContainer, staggerItem } from '@/lib/animations/variants'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

// Featured pies (handpicked selection)
const featuredPieIds = ['dutch-apple', 'cherry', 'chocolate-cream', 'key-lime', 'pecan', 'strawberry-cream']

interface PieCardProps {
  pie: Pie
  index: number
}

function PieCard({ pie, index }: PieCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Mouse position tracking for enhanced 3D effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      variants={staggerItem}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Desktop: 3D rotation effect */}
      <motion.div
        className="hidden md:block relative"
        style={{
          perspective: 1000,
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
        initial={{ scale: 1 }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <PieCardContent pie={pie} index={index} />
      </motion.div>

      {/* Mobile: Simple scale effect */}
      <motion.div
        className="block md:hidden"
        initial={{ scale: 1 }}
        whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.2 }
        }}
      >
        <PieCardContent pie={pie} index={index} />
      </motion.div>
    </motion.div>
  )
}

function PieCardContent({ pie, index }: PieCardProps) {
  return (
    <article
      className="relative bg-warm-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-cosmic-hover transition-shadow duration-300 cursor-pointer"
      tabIndex={0}
      role="button"
      aria-label={`View ${pie.name} - $${pie.price.slice} per slice`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          window.location.href = '/menu'
        }
      }}
    >
      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cosmic-purple/10 to-electric-blue/10">
        {/* Placeholder for pie image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-6xl"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            🥧
          </motion.div>
        </div>

        {/* Special badge */}
        {pie.isSpecial && (
          <div className="absolute top-4 right-4 bg-sunset-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ Special
          </div>
        )}

        {/* Vegan badge */}
        {pie.isVegan && (
          <div className="absolute top-4 left-4 bg-electric-blue text-deep-navy px-3 py-1 rounded-full text-sm font-semibold">
            🌱 Vegan
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-deep-navy mb-2 font-space">
          {pie.name}
        </h3>
        <p className="text-dust-dark mb-4 line-clamp-2">
          {pie.description}
        </p>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-dust-medium">Slice</span>
            <span className="text-xl font-bold text-sunset-orange">
              ${pie.price.slice.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-dust-medium">Whole</span>
            <span className="text-xl font-bold text-cosmic-purple">
              ${pie.price.whole.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/0 to-cosmic-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </article>
  )
}

export function PieShowcase() {
  const featuredPies = featuredPieIds
    .map(id => pies.find(pie => pie.id === id))
    .filter((pie): pie is Pie => pie !== undefined)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-deep-navy via-cosmic-purple-dark/20 to-deep-navy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-electric-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sunset-orange/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-warm-cream mb-4 font-space">
            Cosmic Favorites
          </h2>
          <p className="text-xl text-warm-cream/80 max-w-2xl mx-auto">
            Our most popular pies, handcrafted with love and launched fresh daily
          </p>
        </motion.div>

        {/* Pie grid with stagger animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredPies.map((pie, index) => (
            <PieCard key={pie.id} pie={pie} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/menu">
            <Button size="lg" className="text-lg px-10 py-6 shadow-cosmic hover:shadow-cosmic-hover">
              🚀 Explore Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
