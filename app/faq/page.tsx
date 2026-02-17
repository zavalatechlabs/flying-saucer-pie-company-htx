import type { Metadata } from 'next'
import { FAQContent } from './faq-content'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about ordering, slices, freezing, shelf life, payment, and holiday hours at Flying Saucer Pie Company.',
}

export default function FAQPage() {
  return (
    <div className="pt-16">
      <FAQContent />
    </div>
  )
}
