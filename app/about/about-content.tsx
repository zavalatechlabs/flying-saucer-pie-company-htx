'use client'

import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/data/business-info'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Do I have to place an order?',
    answer: 'Nope! We bake fresh pies every morning & have them on hand daily. Just come by - no need to place an order. All pies are FIRST COME, FIRST SERVE. We may run out of certain flavors on a busy day, but we have plenty of others to tempt you!'
  },
  {
    question: 'Can I place a large order?',
    answer: 'Before Thanksgiving Week - YES! We accept orders of 15 or more pies on a case-by-case basis. Please give us a call & ask for a manager! Orders require a 50% deposit.'
  },
  {
    question: 'Do you deliver or ship pies?',
    answer: 'We currently do not have any delivery options and do not ship pies in or out of state. Our pies do not contain any preservatives, and the crust is flaky and delicate, so they would not survive shipping.'
  },
  {
    question: 'Do you have Gift Certificates?',
    answer: 'Yes! Currently, you can only purchase them in-store, but we hope to offer online purchase options soon.'
  },
  {
    question: 'What forms of payment do you accept?',
    answer: 'We accept Cash, Credit/Debit, or Digital Wallet Payments. We do not take personal checks, but business checks are accepted with proper ID.'
  },
  {
    question: 'Do you make meringue pies?',
    answer: 'Nope. We top our pies with a non-dairy whipped cream! Meringue topping (made with egg whites) requires preservatives to stand up to volume production & our humid climate. We do not add any preservatives to our pies.'
  },
  {
    question: 'Do you make sugar-free or gluten-free pies?',
    answer: 'We unfortunately do not have sugar-free or gluten-free options. Real sugar is an essential ingredient in our pies & we prefer not to use any sugar substitutes. We do, however, use the lowest gluten content flour available on the market for all of our dough.'
  },
  {
    question: 'Do you make vegan pies?',
    answer: 'Yes! Our vegan options include: Strawberry, Apple, Peach, Cherry, Dutch Apple, Pineapple, Blueberry, & Blackberry.'
  },
  {
    question: 'Can I freeze pies?',
    answer: 'You can freeze Apple, Pecan, Peach, Cherry, Pineapple, Blackberry, & Blueberry. Unbox the pie and wrap it tightly in foil before placing in the freezer. Pies stay good in the freezer for 3 months. To unthaw and serve, heat the pie at 350°F in the oven until the center is warmed through: 30-45 mins.'
  }
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
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
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

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            <h2 className="text-3xl font-bold text-space-night mb-6">Our Story</h2>
            <p className="text-dust-dark leading-relaxed mb-6">
              {businessInfo.about.full}
            </p>

            <h3 className="text-2xl font-bold text-space-night mb-4 mt-12">Thank You Houston!</h3>
            <p className="text-dust-dark leading-relaxed mb-6">
              We appreciate all of our customers in Houston and the surrounding communities that have 
              helped to make this bakery a success. With your support, we&apos;ve been able to celebrate 
              five decades of pies and counting!
            </p>
            <p className="text-dust-dark leading-relaxed mb-6">
              We thank y&apos;all from the bottoms of our hearts for making it possible. We will continue 
              making delicious handmade pies with fresh ingredients for years to come, and we look forward 
              to serving you soon!
            </p>
            <p className="text-dust-dark font-semibold">
              {businessInfo.about.owners}
              <br />
              The Crew at Flying Saucer
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-dust-lightest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-space-night text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thanksgiving Section */}
      <section id="thanksgiving" className="py-20 bg-cosmic-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">🦃 Thanksgiving Week Information</h2>
            
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

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Important Notes</h3>
              <ul className="text-left max-w-2xl mx-auto space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>We do NOT take orders during Thanksgiving week - all pies are first come, first served</span>
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
          </motion.div>
        </div>
      </section>
    </>
  )
}