import { Metadata } from 'next'
import { ContactContent } from './contact-content'

export const metadata: Metadata = {
  title: 'Find Us & Contact - Flying Saucer Pie Company',
  description:
    'Find Flying Saucer Pie Company at 436 W Crosstimbers St, Houston, TX. Hours, directions, parking, and contact form. Call us at 713-694-1141.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactContent />
    </div>
  )
}
