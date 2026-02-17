'use client'

import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/data/business-info'
import { MapPin, Phone, Clock, Car, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function LocationContent() {
  const address = businessInfo.address
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
  const appleMapsUrl = `http://maps.apple.com/?address=${encodeURIComponent(fullAddress)}`

  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-surface py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg font-display mb-4"
          >
            Find Us in Space City
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-xl text-surface/80"
          >
            Easy to find, impossible to forget
          </motion.p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-section-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-alt rounded-2xl overflow-hidden shadow-retro"
            >
              {/* Map Placeholder */}
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-ink flex items-center justify-center">
                <div className="text-center text-surface">
                  <MapPin size={64} className="mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-display font-semibold mb-2">
                    Flying Saucer Pie Company
                  </h3>
                  <p className="text-surface/80">{address.street}</p>
                  <p className="text-surface/80">
                    {address.city}, {address.state} {address.zip}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">Open in Google Maps</Button>
                    </a>
                    <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="sm">
                        Open in Apple Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="bg-surface rounded-2xl p-8 shadow-retro">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-ink mb-2">Address</h3>
                    <p className="text-lg text-ink-muted">{address.street}</p>
                    <p className="text-lg text-ink-muted">
                      {address.city}, {address.state} {address.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-surface rounded-2xl p-8 shadow-retro">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-ink mb-2">Phone</h3>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-lg text-accent hover:text-accent/80 transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                    <p className="text-ink-muted mt-2">
                      For fastest response, call during business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-surface rounded-2xl p-8 shadow-retro">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                      Regular Hours
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(businessInfo.hours.regular).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="capitalize font-medium text-ink">{day}</span>
                          <span className="text-ink-muted">
                            {typeof hours === 'string' ? hours : `${hours.open} - ${hours.close}`}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-accent mt-4">
                      Extended hours in November & December!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parking & Directions */}
      <section className="py-section-lg bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-h1 font-display text-ink mb-4">Getting Here & Parking</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Parking */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl p-8 shadow-retro"
            >
              <Car size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-display font-semibold text-ink mb-3">Parking</h3>
              <p className="text-ink-muted">
                Free parking available in our lot. During busy times (especially Thanksgiving week),
                additional street parking is available on Crosstimbers.
              </p>
            </motion.div>

            {/* Landmarks */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl p-8 shadow-retro"
            >
              <Navigation size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-display font-semibold text-ink mb-3">Nearby Landmarks</h3>
              <p className="text-ink-muted">
                Located on W Crosstimbers Street in the Heights area. Look for our iconic Flying
                Saucer sign - you can&apos;t miss it!
              </p>
            </motion.div>
          </div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-accent/10 border-2 border-accent/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-display font-semibold text-ink mb-4">💡 Pro Tips</h3>
            <ul className="text-ink-muted space-y-2 text-left max-w-2xl mx-auto">
              <li>• Tuesday mornings are typically the least busy</li>
              <li>• Call ahead to check if we have your favorite pie in stock</li>
              <li>• Bring a cooler if you&apos;re buying cream pies on a hot day</li>
              <li>• Follow us on social media for daily pie updates</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  )
}
