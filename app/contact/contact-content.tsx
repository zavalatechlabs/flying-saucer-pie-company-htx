'use client'

import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/data/business-info'
import { MapPin, Phone, Clock, Car, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/sections/ContactForm'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp, fadeIn } from '@/lib/animations/variants'

export function ContactContent() {
  const address = businessInfo.address
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
  const appleMapsUrl = `http://maps.apple.com/?address=${encodeURIComponent(fullAddress)}`

  return (
    <>
      {/* ── Hero: Location ── */}
      <section className="bg-ink text-surface py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg font-fredoka font-bold mb-4"
          >
            Find Us in Space City
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-pacifico text-surface/90"
          >
            Easy to find, impossible to forget
          </motion.p>
        </div>
      </section>

      {/* ── Location Info: Map + Cards ── */}
      <section className="py-section-lg bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-retro"
            >
              <div className="min-h-[420px] bg-ink flex items-center justify-center">
                <div className="text-center text-surface px-8">
                  <MapPin size={56} className="mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-display font-semibold mb-2">
                    Flying Saucer Pie Company
                  </h3>
                  <p className="text-surface/80">{address.street}</p>
                  <p className="text-surface/80 mb-8">
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
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

            {/* Address / Hours cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Address */}
              <div className="bg-surface rounded-2xl p-6 shadow-retro">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-full flex-shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-h5 font-display font-semibold text-ink mb-1">Address</h2>
                    <p className="text-body text-ink-muted">{address.street}</p>
                    <p className="text-body text-ink-muted">
                      {address.city}, {address.state} {address.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-surface rounded-2xl p-6 shadow-retro">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-full flex-shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-h5 font-display font-semibold text-ink mb-3">Hours</h2>
                    <div className="space-y-1.5">
                      {Object.entries(businessInfo.hours.regular).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="capitalize font-medium text-ink">{day}</span>
                          <span className="text-ink-muted">
                            {typeof hours === 'string' ? hours : `${hours.open} – ${hours.close}`}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-accent font-medium mt-3">
                      Extended hours in November &amp; December!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Parking & Directions ── */}
      <section className="py-section-lg bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn} className="text-center mb-10">
            <h2 className="text-h1 font-display text-ink">Getting Here &amp; Parking</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <ScrollReveal variants={slideUp}>
              <div className="bg-surface rounded-2xl p-8 shadow-retro h-full">
                <Car size={28} className="text-accent mb-4" />
                <h3 className="text-xl font-display font-semibold text-ink mb-3">Parking</h3>
                <p className="text-ink-muted">
                  Free parking available in our lot. During busy times (especially Thanksgiving
                  week), additional street parking is available on Crosstimbers.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={slideUp} delay={0.1}>
              <div className="bg-surface rounded-2xl p-8 shadow-retro h-full">
                <Navigation size={28} className="text-accent mb-4" />
                <h3 className="text-xl font-display font-semibold text-ink mb-3">
                  Nearby Landmarks
                </h3>
                <p className="text-ink-muted">
                  Located on W Crosstimbers Street in the Heights area. Look for our iconic Flying
                  Saucer sign — you can&apos;t miss it!
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal variants={slideUp} delay={0.15}>
            <div className="bg-accent/8 border-2 border-accent/25 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-display font-semibold text-ink mb-4">💡 Pro Tips</h3>
              <ul className="text-ink-muted space-y-2 text-left max-w-2xl mx-auto">
                <li>• Tuesday mornings are typically the least busy</li>
                <li>• Call ahead to check if we have your favorite pie in stock</li>
                <li>• Bring a cooler if you&apos;re buying cream pies on a hot day</li>
                <li>• Follow us on social media for daily pie updates</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-section-lg bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact header */}
          <ScrollReveal variants={fadeIn} className="text-center mb-12">
            <h2 className="text-display-sm md:text-display-md font-fredoka font-bold text-ink mb-3">
              Let&apos;s Talk Pie!
            </h2>
            <p className="text-body-lg text-ink-muted max-w-xl mx-auto">
              Questions about our pies? Need help with a large order? We&apos;re here to help!
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info sidebar */}
            <ScrollReveal variants={slideUp} delay={0.05}>
              <div className="space-y-6">
                <div className="card hover:shadow-glow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-full flex-shrink-0">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-h5 font-display font-semibold text-ink mb-1">Call Us</h3>
                      <a
                        href={`tel:${businessInfo.phone}`}
                        className="text-lg text-accent hover:text-accent/80 transition-colors font-semibold"
                      >
                        {businessInfo.phone}
                      </a>
                      <p className="text-body-sm text-ink-muted mt-1">
                        Best times: Tuesday – Saturday, 8am – 7pm
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card hover:shadow-glow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-full flex-shrink-0">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-h5 font-display font-semibold text-ink mb-1">Visit Us</h3>
                      <p className="text-body text-ink">
                        {address.street}
                        <br />
                        {address.city}, {address.state} {address.zip}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/8 border border-accent/20 rounded-2xl p-5">
                  <p className="text-h5 font-display font-semibold text-ink mb-1">
                    📞 Phone is best!
                  </p>
                  <p className="text-body-sm text-ink-muted">
                    We&apos;re a small family bakery focused on making pies. For the quickest
                    response, give us a call during business hours.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact form */}
            <ScrollReveal variants={slideUp} delay={0.1}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
