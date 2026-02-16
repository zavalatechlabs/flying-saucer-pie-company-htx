import { TimelineMilestone } from '@/components/timeline'

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
}

export const faqItems: FAQItem[] = [
  {
    question: 'Do you take orders?',
    answer:
      'No need to place an order! All pies are FIRST COME, FIRST SERVE. For orders of 15 or more pies, please call us and we can work with you on a case-by-case basis (50% deposit required). No orders during Thanksgiving week - first come, first served only.',
  },
  {
    question: 'Do you sell slices?',
    answer:
      'Yes! We sell slices that are 1/6 of a whole pie. After 6pm, slices may be limited based on availability. No slices are sold the week before and week of Thanksgiving.',
  },
  {
    question: 'Can I freeze your pies?',
    answer:
      'Yes! Fruit pies (Apple, Pecan, Peach, Cherry, Pineapple, Blackberry, Blueberry) freeze well. Unbox the pie and wrap tightly in foil. Put the foil-wrapped pie back in the box and into the freezer. Do NOT defrost - frozen pie goes straight to the oven at 350°F for 30-45 minutes. Pies keep in the freezer for 3 months.',
  },
  {
    question: 'How long do the pies last?',
    answer:
      'Cream pies (except banana): 2-3 days refrigerated. Banana cream: 1-2 days uncut, refrigerated. Fruit pies: 3 days at room temp, 4-5 days refrigerated. Cheesecakes: 3-4 days refrigerated.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Cash, Credit/Debit Cards, Digital Wallet Payments (Apple Pay, Google Pay), and Business Checks with proper ID. We do not accept personal checks.',
  },
  {
    question: 'Do you deliver?',
    answer:
      'We currently do not have any delivery options. Pies must be picked up at our location.',
  },
  {
    question: 'Do you ship pies?',
    answer: 'We do not ship pies in or out of state.',
  },
  {
    question: 'Do you sell gift certificates?',
    answer: 'Yes! Gift certificates are available for purchase in-store only.',
  },
  {
    question: 'Are your pies made fresh?',
    answer:
      'Yes! All pies are handmade fresh every morning. We use the highest quality ingredients, fresh produce, fresh eggs, and NEVER add any preservatives. Cream pies are made fresh daily, and we bake throughout the day. We will never serve you a pie that has been frozen.',
  },
  {
    question: 'What are your Thanksgiving week hours?',
    answer:
      'During Thanksgiving week, we have extended hours and are VERY busy. Please check our Hours page for specific dates and times. NO ORDERS - First come, first served only. NO SLICES sold Thanksgiving week.',
  },
]
