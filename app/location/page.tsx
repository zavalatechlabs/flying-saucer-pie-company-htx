import { Metadata } from 'next'
import { LocationContent } from './location-content'

export const metadata: Metadata = {
  title: 'Location & Hours - Find Us in Houston',
  description:
    'Visit Flying Saucer Pie Company at 436 W Crosstimbers St, Houston, TX. Open Tuesday-Saturday 8am-7pm. Get directions and parking info.',
}

export default function LocationPage() {
  return (
    <div className="pt-16">
      <LocationContent />
    </div>
  )
}
