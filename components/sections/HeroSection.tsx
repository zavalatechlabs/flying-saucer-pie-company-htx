'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-night">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        <div className="stars-background" />
        {/* Floating UFOs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{ x: -100, y: Math.random() * 400 }}
            animate={{ 
              x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1920,
              y: Math.random() * 400 
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 5
            }}
          >
            🛸
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* UFO with Pie Animation */}
          <motion.div 
            className="text-8xl mb-8 inline-block"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="relative">
              🛸
              <motion.span
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                🥧
              </motion.span>
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Flying Saucer</span>
            <span className="text-cosmic-orange">Pie Company</span>
          </h1>

          <motion.p 
            className="text-xl md:text-2xl text-cream-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Houston&apos;s Pies That Are Out of This World!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/menu">
              <Button size="lg" className="text-lg px-8 py-4">
                🚀 Launch Your Order
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Our Story Since 1967
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 text-cream-white/60"
          >
            <p className="text-sm mb-2">Open Tuesday - Saturday</p>
            <p className="font-mono text-lg">8:00 AM - 7:00 PM</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cream-white/40 rounded-full p-1">
          <div className="w-1 h-2 bg-cream-white/60 rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  )
}