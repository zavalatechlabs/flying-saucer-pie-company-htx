'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Heart, Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/lib/animations/scroll-reveal'
import { fadeIn, slideUp, scaleUp } from '@/lib/animations/variants'

const features = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Since 1967',
    description: 'Houston\'s oldest family-owned bakery, serving pies for over 5 decades'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Made Fresh Daily',
    description: 'Every pie is handmade fresh each morning - never frozen, no preservatives'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Quality Ingredients',
    description: 'Fresh produce, real eggs, and time-tested recipes passed down generations'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Out of This World',
    description: 'One bite and you\'ll agree - our pies are truly something special'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-section-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variants={fadeIn} className="text-center mb-16">
          <h2 className="text-h1 md:text-display-md text-ink mb-4 font-display">
            Why Houston Loves Us
          </h2>
          <p className="text-body-xl text-ink-muted font-body">
            Houston Strong Since 1967
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={feature.title} 
              variants={slideUp} 
              delay={index * 0.1}
              className="text-center group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full 
                         bg-accent/10 text-accent mb-4
                         group-hover:bg-accent group-hover:text-white
                         transition-all duration-300 shadow-retro"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-h4 text-ink mb-2 font-display">
                {feature.title}
              </h3>
              <p className="text-body text-ink-muted font-body">
                {feature.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Fun Fact */}
        <ScrollReveal 
          variants={scaleUp} 
          delay={0.2}
          className="mt-20 bg-ink text-surface rounded-3xl p-8 text-center 
                   relative overflow-hidden shadow-retro-hover"
        >
          <div className="relative z-10">
            <p className="text-6xl mb-4">🥧</p>
            <h3 className="text-h2 mb-2 font-display">Fun Fact</h3>
            <p className="text-body-lg text-surface/80 font-body">
              We&apos;ve made over 2 million pies since 1967 - that&apos;s enough pies to reach the moon and back!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
