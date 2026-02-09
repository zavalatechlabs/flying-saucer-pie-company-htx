import { Metadata } from 'next'
import { ContactContent } from './contact-content'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Flying Saucer Pie Company for questions about pies, large orders, or general inquiries. Call us at 713-694-1141.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactContent />
    </div>
  )
}