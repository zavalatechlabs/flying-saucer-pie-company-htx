import { TimelineMilestone } from '@/components/ui/Timeline'

export const timelineMilestones: TimelineMilestone[] = [
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
      'Through challenges and changes, we adapt while staying true to our roots. Our community rallies around us, and we continue serving fresh pies with pride.',
  },
  {
    year: 2024,
    title: 'Today & Tomorrow',
    description:
      'Still family-owned, still handmade, still Houston. We look forward to many more years of serving our community the freshest pies in Texas.',
  },
]

export interface FAQItem {
  question: string
  answer: string
  category?: string
}

export const faqItems: FAQItem[] = [
  // General Questions
  {
    category: 'General Questions',
    question: 'What are your hours?',
    answer:
      'Tuesday – Saturday: 8am – 7pm. Sunday & Mondays: Closed.\n\nNovember & December: Tuesday – Saturday: 7am – 7pm. Sunday & Mondays: Closed.',
  },
  {
    category: 'General Questions',
    question: 'Do I have to place an order?',
    answer:
      'Nope! We bake fresh pies every morning & have them on hand daily. Just come by — no need to place an order. All pies are FIRST COME, FIRST SERVE. We may run out of certain flavors on a busy day, but we have plenty of others to tempt you!',
  },
  {
    category: 'General Questions',
    question: 'Can I place a large order?',
    answer:
      'Before Thanksgiving Week — YES. We accept orders of 15 or more pies on a case-by-case basis. Please give us a call & ask for a manager! Orders require a 50% deposit.',
  },
  {
    category: 'General Questions',
    question: 'Do you deliver?',
    answer:
      'We currently do not have any delivery options. We do not associate with any food delivery apps. We are not responsible for any prices or pies if you use them.',
  },
  {
    category: 'General Questions',
    question: 'Do you ship pies outside of Houston?',
    answer:
      'We do not ship pies in or out of state. Our pies do not contain any preservatives, and the crust is flaky and delicate, so they would not survive shipping.',
  },
  {
    category: 'General Questions',
    question: 'Do you have Gift Certificates?',
    answer:
      'Yes! Currently, you can only purchase them in-store, but we hope to offer online purchase options soon.',
  },
  {
    category: 'General Questions',
    question: 'What forms of payment do you accept?',
    answer:
      'Cash, Credit/Debit, or Digital Wallet Payments. We do not take personal checks, but business checks are accepted with proper ID.',
  },

  // Pie Questions
  {
    category: 'Pie Questions',
    question: 'What size are whole pies? Can I buy just a slice?',
    answer:
      'Our pies are 10 inches across. Yes! You can buy a slice of any flavor (1/6 of a whole pie). After 6pm, slices may be limited based on the pies we have left in stock.',
  },
  {
    category: 'Pie Questions',
    question: 'Do you make meringue pies?',
    answer:
      'Nope. We top our pies with a non-dairy whipped cream! Meringue topping (made with egg whites) requires preservatives to stand up to volume production & our humid climate. We do not add any preservatives to our pies.',
  },
  {
    category: 'Pie Questions',
    question: 'Do you make sugar-free or gluten-free pies?',
    answer:
      'We unfortunately do not have sugar-free or gluten-free options. Real sugar is an essential ingredient in our pies & we prefer not to use any sugar substitutes. We do, however, use the lowest gluten content flour available on the market for all of our dough.',
  },
  {
    category: 'Pie Questions',
    question: 'Do you make vegan pies?',
    answer:
      'Yes! Our vegan options include: Strawberry, Apple, Peach, Cherry, Dutch Apple, Pineapple, Blueberry, & Blackberry. Feel free to check with our staff about any dietary restrictions!',
  },
  {
    category: 'Pie Questions',
    question: 'Can I freeze pies?',
    answer:
      'You can freeze Apple, Pecan, Peach, Cherry, Pineapple, Blackberry, & Blueberry. Unbox the pie and wrap it tightly in foil before placing in the freezer. Pies stay good in the freezer for 3 months. To unthaw and serve, heat the pie at 350°F in the oven until the center is warmed through: 30–45 mins.',
  },
  {
    category: 'Pie Questions',
    question: 'How long will a pie last? — Fresh Strawberry Cream',
    answer:
      'This pie will last 2–3 days in the fridge. We use fresh strawberries & they get mushy after a few days.',
  },
  {
    category: 'Pie Questions',
    question: 'How long will a pie last? — Fresh Banana Cream',
    answer:
      "As long as you don't cut it, the pie can stay fresh in the refrigerator for 1–2 days. Once cut, the fresh bananas in the pie will begin to turn brown — not as pretty, but they will still taste great.",
  },
  {
    category: 'Pie Questions',
    question: 'How long will a pie last? — Fruit Pies',
    answer:
      'Apple, Peach, Cherry, Dutch Apple, Pineapple, Pecan, Blackberry & Blueberry — all can be left at room temperature and will keep for 3 days. They will last longer if kept in the refrigerator: 4–5 days. Some fruit pies can also be FROZEN!',
  },
  {
    category: 'Pie Questions',
    question: 'How long will a pie last? — Cream Pies',
    answer:
      'Cream Pies must be refrigerated as soon as possible. Chocolate, Lemon & Coconut Pies last 2–3 days. The crust may get a bit soggy after this time, but the filling is still delicious!',
  },
  {
    category: 'Pie Questions',
    question: 'How long will a pie last? — Cheesecakes & Key Lime',
    answer: 'Must be refrigerated as soon as possible. They will last 3–4 days.',
  },
]
