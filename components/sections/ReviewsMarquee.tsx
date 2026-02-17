'use client'

import { motion } from 'framer-motion'

interface Review {
  name: string
  rating: number
  quote: string
}

const reviews: Review[] = [
  { name: 'Sarah M.', rating: 5, quote: "Best apple pie I've ever had!" },
  { name: 'Mike T.', rating: 5, quote: 'Out of this world pecan pie!' },
  { name: 'Jennifer L.', rating: 5, quote: 'The cosmic service matches the cosmic flavor!' },
  { name: 'David R.', rating: 5, quote: 'Fresh, delicious, and totally unique!' },
  { name: 'Maria G.', rating: 5, quote: "Houston's best kept secret! Love the key lime!" },
  { name: 'James K.', rating: 5, quote: 'These pies are truly extraterrestrial!' },
  { name: 'Amanda S.', rating: 5, quote: 'The chocolate cream pie changed my life!' },
  { name: 'Robert H.', rating: 5, quote: "Been coming here since '85. Never disappoints!" },
]

const moreReviews: Review[] = [
  { name: 'Lisa P.', rating: 5, quote: 'Perfect crust, perfect filling, perfect everything!' },
  { name: 'Carlos M.', rating: 5, quote: 'Family tradition for over 20 years!' },
  { name: 'Emily R.', rating: 5, quote: 'The strawberry cream is pure heaven!' },
  { name: 'Thomas W.', rating: 5, quote: 'Worth the drive from across town!' },
  { name: 'Rachel B.', rating: 5, quote: 'Brought these to Thanksgiving - instant legend status!' },
  { name: 'Kevin D.', rating: 5, quote: 'Dutch apple pie that dreams are made of!' },
  { name: 'Nicole F.', rating: 5, quote: 'Supporting local never tasted this good!' },
  { name: 'Brandon C.', rating: 5, quote: 'The tractor beam pulled me in and I never left!' },
]

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="inline-block mx-4">
      <article
        className="w-80 h-40 p-6 rounded-2xl backdrop-blur-md bg-warm-cream/10 border border-white/20 shadow-lg hover:shadow-cosmic-hover transition-all duration-300"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 248, 243, 0.1) 0%, rgba(107, 44, 191, 0.1) 100%)',
        }}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Stars */}
          <div className="flex gap-1 text-accent text-xl" aria-label={`${review.rating} stars`}>
            {Array.from({ length: review.rating }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-warm-cream text-base leading-relaxed line-clamp-2 my-2">
            &ldquo;{review.quote}&rdquo;
          </p>

          {/* Name */}
          <p className="text-electric-blue font-semibold text-sm">— {review.name}</p>
        </div>
      </article>
    </div>
  )
}

function MarqueeRow({
  reviews,
  direction = 'left',
}: {
  reviews: Review[]
  direction?: 'left' | 'right'
}) {
  // Duplicate reviews to create seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          willChange: 'transform',
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </motion.div>

      {/* Gradient fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-deep-navy to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-deep-navy to-transparent pointer-events-none z-10" />
    </div>
  )
}

export function ReviewsMarquee() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-deep-navy via-deep-navy-light to-deep-navy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-electric-blue/30 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-cream mb-3 font-space">
            What Houston Says
          </h2>
          <p className="text-lg text-warm-cream/70 max-w-2xl mx-auto">
            Over 50 years of making folks happy, one slice at a time
          </p>
        </motion.div>

        {/* Marquee rows with pause on hover */}
        <div className="space-y-4 [&:hover>div>div]:animation-play-state-paused">
          {/* Row 1: Scroll left */}
          <MarqueeRow reviews={reviews} direction="left" />

          {/* Row 2: Scroll right */}
          <MarqueeRow reviews={moreReviews} direction="right" />
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  )
}
