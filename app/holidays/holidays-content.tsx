'use client'

import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp } from '@/lib/animations/variants'
import { FAQSection } from '@/components/sections/FAQSection'

const thanksgivingFAQs = [
  {
    question: 'What are your hours during Thanksgiving Week?',
    answer:
      'Saturday: 7am–7pm · Sunday: Closed · Monday: 7am–7pm · Tuesday: 7am–7pm · Wednesday: 7am–5pm · Thursday (Thanksgiving): Closed',
  },
  {
    question: 'Can I place an order or reserve a pie for Thanksgiving?',
    answer:
      'No. We do not take any orders for the week of Thanksgiving (Mon, Tue, Wed). Pies are sold on a First Come – First Served basis. Come on by. Stand in Line. Make New Friends!',
  },
  {
    question: 'How long is the wait in line during Thanksgiving Week?',
    answer:
      'There is no way to predict it, but wait time depends on the day & time you come by. Monday has the shortest lines. Tuesdays are very busy but the line is more "manageable." Wednesday has the longest lines & the line starts very early — it\'s also the day the news crews come by! Don\'t worry too much, we have plenty of cashiers checking out customers all day. Our line moves quickly!',
  },
  {
    question: 'How long will a pie last?',
    answer:
      'CREAM PIES bought on Monday will NOT last until Thanksgiving: Strawberry, Banana, Chocolate, Lemon, Coconut, Key Lime & Cheesecake.\n\nFRUIT PIES bought on Monday will last until Thanksgiving — BUT they MUST be refrigerated: Apple, Peach, Cherry, Pecan, Pineapple & Pumpkin.',
  },
  {
    question: 'Can you freeze a pie?',
    answer:
      'YES! But only Fruit Pies — come get them any day in November: Apple, Pecan, Peach, Cherry & Pineapple.\n\nDirections: Unbox the pie and wrap it tightly in foil. Put the foil-wrapped pie back in the box and put box in freezer. Do NOT defrost — frozen pie goes straight to the oven.',
  },
  {
    question: 'Can I buy a slice during Thanksgiving?',
    answer: 'NO — We stop selling slices the week before & the week of Thanksgiving.',
  },
]

const christmasFAQs = [
  {
    question: "What are your hours for Christmas & New Year's?",
    answer: 'Tuesday–Saturday, Dec 1–20: 7am–7pm. Call us for hours closer to the holidays.',
  },
  {
    question: 'Can I place an order for Christmas?',
    answer:
      'No order needed for just a few pies (1–15). We take large orders of 15+ — contact us to arrange.',
  },
  {
    question: 'How long will a pie last?',
    answer:
      'Cream pies bought on Saturday will NOT last until Christmas. Plan your purchase timing accordingly!',
  },
  {
    question: "How long is the line during Christmas & New Year's?",
    answer:
      'Christmas lines are short & fast — nothing like Thanksgiving! Just walk in and grab your pie.',
  },
  {
    question: 'Can you freeze a pie?',
    answer:
      'Yes! Baked Fruit Pies freeze great. Wrap tightly and freeze for up to a month for best results.',
  },
]

export function HolidaysContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-surface py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variants={slideUp}>
            <h1 className="text-h1 font-fredoka text-surface mb-4">Holiday Ordering</h1>
            <p className="text-body-lg font-pacifico text-surface/80 max-w-2xl mx-auto">
              Everything you need to know for Thanksgiving and Christmas
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Thanksgiving FAQ Section */}
      <FAQSection title="🦃 Thanksgiving" items={thanksgivingFAQs} />

      {/* Christmas & New Year's FAQ Section */}
      <FAQSection title="🎄 Christmas & New Year's" items={christmasFAQs} />
    </>
  )
}
