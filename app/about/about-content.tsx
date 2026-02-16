'use client'

import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/data/business-info'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { fadeIn, slideUp, slideInLeft, slideInRight } from '@/lib/animations/variants'
import { Timeline, TimelineMilestone } from '@/components/timeline'

const timelineMilestones: TimelineMilestone[] = [
  {
    year: 1967,
    title: 'The Journey Begins',
    description:
      'Flying Saucer Pie Company opens its doors in Houston, Texas. A family dream becomes reality as we start baking fresh pies daily for our community.',
  },
  {
    year: 1975,
    title: 'Building Our Reputation',
    description:
      'Word spreads across Houston about our handmade pies. We expand our daily production while maintaining our commitment to fresh, quality ingredients and no preservatives.',
  },
  {
    year: 1985,
    title: 'A Houston Institution',
    description:
      'Two decades of dedication pay off as Flying Saucer becomes a beloved Houston landmark. Families make us part of their holiday traditions.',
  },
  {
    year: 1995,
    title: 'Three Generations Strong',
    description:
      'The bakery celebrates passing to its third generation of family ownership. The original recipes and values remain unchanged, while techniques are refined.',
  },
  {
    year: 2005,
    title: 'Media Recognition',
    description:
      "Local and national media discover what Houstonians have known for decades. Flying Saucer earns recognition as one of Houston's iconic food destinations.",
  },
  {
    year: 2017,
    title: '50 Years of Pie',
    description:
      'Half a century of serving Houston! We celebrate 50 years with the community that made it all possible. Still family-owned, still handmade, still fresh daily.',
  },
  {
    year: 2020,
    title: 'Houston Strong',
    description:
      'Through challenges and change, we adapt while staying true to our roots. Our community rallies around us, and we continue serving pies made with love.',
  },
  {
    year: 2026,
    title: 'Today and Tomorrow',
    description:
      "Nearly six decades later, we're still Houston's oldest family-owned bakery. Same commitment, same quality, same love for what we do. Here's to many more years together.",
  },
]

const faqs = [
  {
    question: 'Do I have to place an order?',
    answer:
      'Nope! We bake fresh pies every morning & have them on hand daily. Just come by - no need to place an order. All pies are FIRST COME, FIRST SERVE. We may run out of certain flavors on a busy day, but we have plenty of others to tempt you!',
  },
  {
    question: 'Can I place a large order?',
    answer:
      'Before Thanksgiving Week - YES! We accept orders of 15 or more pies on a case-by-case basis. Please give us a call & ask for a manager! Orders require a 50% deposit.',
  },
  {
    question: 'Do you deliver or ship pies?',
    answer:
      'We currently do not have any delivery options and do not ship pies in or out of state. Our pies do not contain any preservatives, and the crust is flaky and delicate, so they would not survive shipping.',
  },
  {
    question: 'Do you have Gift Certificates?',
    answer:
      'Yes! Currently, you can only purchase them in-store, but we hope to offer online purchase options soon.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer:
      'We accept Cash, Credit/Debit, or Digital Wallet Payments. We do not take personal checks, but business checks are accepted with proper ID.',
  },
  {
    question: 'Do you make meringue pies?',
    answer:
      'Nope. We top our pies with a non-dairy whipped cream! Meringue topping (made with egg whites) requires preservatives to stand up to volume production & our humid climate. We do not add any preservatives to our pies.',
  },
  {
    question: 'Do you make sugar-free or gluten-free pies?',
    answer:
      'We unfortunately do not have sugar-free or gluten-free options. Real sugar is an essential ingredient in our pies & we prefer not to use any sugar substitutes. We do, however, use the lowest gluten content flour available on the market for all of our dough.',
  },
  {
    question: 'Do you make vegan pies?',
    answer:
      'Yes! Our vegan options include: Strawberry, Apple, Peach, Cherry, Dutch Apple, Pineapple, Blueberry, & Blackberry.',
  },
  {
    question: 'Can I freeze pies?',
    answer:
      'You can freeze Apple, Pecan, Peach, Cherry, Pineapple, Blackberry, & Blueberry. Unbox the pie and wrap it tightly in foil before placing in the freezer. Pies stay good in the freezer for 3 months. To unthaw and serve, heat the pie at 350°F in the oven until the center is warmed through: 30-45 mins.',
  },
]

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-dust-light">
      <button
        className="w-full py-4 flex justify-between items-center text-left hover:text-cosmic-orange transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 text-dust-medium">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-space-night text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Houston Strong Since {businessInfo.established}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream-white/80"
          >
            The oldest family-owned bakery in Houston
          </motion.p>
        </div>
      </section>

      {/* Houston Strong Narrative */}
      <section className="py-20 bg-gradient-to-b from-warm-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-space-night mb-6">
              Houston Strong Since 1967
            </h2>
            <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8" />
          </ScrollReveal>

          <ScrollReveal variants={slideUp} delay={0.2}>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl text-dust-dark leading-relaxed mb-6">
                For nearly six decades, Flying Saucer Pie Company has been more than just a
                bakery—we&apos;re a piece of Houston&apos;s heart. Through hurricanes and heatwaves,
                economic ups and downs, we&apos;ve remained committed to one simple promise:
                handmade pies, baked fresh daily, with no preservatives and whole lot of love.
              </p>
              <p className="text-xl text-dust-dark leading-relaxed mb-6">
                We&apos;ve watched generations of families grow up with our pies on their tables.
                From Sunday dinners to Thanksgiving feasts, from birthday celebrations to &quot;just
                because&quot; moments—we&apos;re honored to be part of your memories.
              </p>
              <p className="text-xl text-dust-dark leading-relaxed font-semibold text-cosmic-purple">
                Houston built us. We bake for Houston. Always have. Always will.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-space-night mb-4">Our Journey</h2>
            <p className="text-xl text-dust-medium">Nearly 60 years of baking history</p>
          </ScrollReveal>

          <Timeline milestones={timelineMilestones} />
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 bg-gradient-to-b from-warm-cream-light to-warm-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal variants={slideInLeft}>
              <div>
                <h2 className="text-4xl font-bold text-space-night mb-6">A Family Legacy</h2>
                <div className="space-y-4 text-dust-dark leading-relaxed">
                  <p>
                    It all started with a simple dream: to create the best pies in Houston, made
                    fresh every day with real ingredients and genuine care. In 1967, that dream
                    became Flying Saucer Pie Company.
                  </p>
                  <p>
                    Decades later, we&apos;re still family-owned and operated. The recipes have been
                    passed down, perfected with each generation, but the core values remain
                    unchanged: quality, freshness, and a commitment to serving our community.
                  </p>
                  <p>
                    Today, under the leadership of{' '}
                    <span className="font-semibold text-space-night">Heather Leeson</span> and
                    General Manager{' '}
                    <span className="font-semibold text-space-night">Tania Imhof</span>, we continue
                    the tradition with the same passion and pride that started it all.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={slideInRight} delay={0.2}>
              <div className="relative">
                <div className="bg-cosmic-purple/10 rounded-2xl p-8 border-4 border-cosmic-purple/20">
                  <blockquote className="text-lg italic text-dust-dark">
                    &quot;We&apos;re not just baking pies—we&apos;re creating moments of joy, one
                    slice at a time. Every pie that leaves our bakery carries with it almost 60
                    years of tradition, care, and Houston pride.&quot;
                  </blockquote>
                  <p className="mt-4 font-semibold text-space-night">— The Flying Saucer Family</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Family Values Section */}
      <section className="py-20 bg-cosmic-purple text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-white/80">The principles that guide everything we do</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal variants={slideUp} delay={0.1}>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🥧</div>
                <h3 className="text-2xl font-bold mb-3">Quality First</h3>
                <p className="text-white/90">
                  We use only the finest ingredients—fresh eggs, real butter, quality produce. No
                  shortcuts, no preservatives, no compromises.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={slideUp} delay={0.2}>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold mb-3">Family Tradition</h3>
                <p className="text-white/90">
                  Family-owned means family values. We treat our customers like family and our
                  employees like part of ours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={slideUp} delay={0.3}>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-3">Made with Love</h3>
                <p className="text-white/90">
                  Every pie is handmade fresh daily. We pour our hearts into what we do because we
                  genuinely care about the joy our pies bring.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn} className="text-center">
            <h2 className="text-4xl font-bold text-space-night mb-6">Thank You, Houston!</h2>
          </ScrollReveal>

          <ScrollReveal variants={slideUp} delay={0.2} className="prose prose-lg mx-auto">
            <p className="text-dust-dark leading-relaxed mb-6 text-center">
              We appreciate all of our customers in Houston and the surrounding communities that
              have helped to make this bakery a success. With your support, we&apos;ve been able to
              celebrate nearly six decades of pies and counting!
            </p>
            <p className="text-dust-dark leading-relaxed mb-6 text-center">
              We thank y&apos;all from the bottoms of our hearts for making it possible. We will
              continue making delicious handmade pies with fresh ingredients for years to come, and
              we look forward to serving you soon!
            </p>
            <p className="text-dust-dark font-semibold text-center">
              {businessInfo.about.owners}
              <br />
              The Crew at Flying Saucer
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-dust-lightest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn}>
            <h2 className="text-3xl font-bold text-space-night text-center mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal variants={slideUp} delay={0.1}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Thanksgiving Section */}
      <section id="thanksgiving" className="py-20 bg-cosmic-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn} className="text-center">
            <h2 className="text-3xl font-bold mb-8">🦃 Thanksgiving Week Information</h2>
          </ScrollReveal>

          <ScrollReveal variants={slideInLeft} delay={0.1}>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Special Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-md mx-auto">
                {Object.entries(businessInfo.hours.thanksgivingWeek).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}:</span>
                    <span className="font-mono">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variants={slideInRight} delay={0.2}>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Important Notes</h3>
              <ul className="text-left max-w-2xl mx-auto space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>
                    We do NOT take orders during Thanksgiving week - all pies are first come, first
                    served
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⏰</span>
                  <span>Lines start early, especially on Wednesday (media day!)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🥧</span>
                  <span>No slices sold the week before & week of Thanksgiving</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💡</span>
                  <span>Monday typically has the shortest lines</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❄️</span>
                  <span>Fruit pies can be frozen - get them early in November!</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
