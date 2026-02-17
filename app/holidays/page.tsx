import { Metadata } from 'next'
import { HolidaysContent } from './holidays-content'

export const metadata: Metadata = {
  title: 'Holiday Ordering - Thanksgiving & Christmas',
  description:
    'Holiday ordering information for Flying Saucer Pie Company. Thanksgiving and Christmas pie ordering, pickup times, and availability.',
}

export default function HolidaysPage() {
  return (
    <div className="pt-16">
      <HolidaysContent />
    </div>
  )
}
