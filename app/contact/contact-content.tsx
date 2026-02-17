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
      {/* ── Hero ── */}
      <section className="bg-ink text-surface py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg font-fredoka font-bold mb-4"
          >
            Find Us. Let&apos;s Talk Pie.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl font-pacifico text-surface/90 mb-2"
          >
            Easy to find, impossible to forget
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-body text-surface/70 max-w-xl mx-auto"
          >
            Questions about our pies? Need help with a large order? We&apos;re here to help!
          </motion.p>
        </div>
      </section>

      {/* ── Quick Info Strip ── */}
      <section className="py-section bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <ScrollReveal variants={slideUp} delay={0}>
              <div className="bg-surface rounded-2xl p-6 shadow-retro h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-full flex-shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <h2 className="text-h5 font-display font-semibold text-ink">Address</h2>
                </div>
                <p className="text-body text-ink-muted">{address.street}</p>
                <p className="text-body text-ink-muted mb-3">
                  {address.city}, {address.state} {address.zip}
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Get directions →
                </a>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal variants={slideUp} delay={0.1}>
              <div className="bg-surface rounded-2xl p-6 shadow-retro h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-full flex-shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <h2 className="text-h5 font-display font-semibold text-ink">Hours</h2>
                </div>
                <div className="space-y-1 mb-3">
                  {Object.entries(businessInfo.hours.regular).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="capitalize font-medium text-ink">{day}</span>
                      <span className="text-ink-muted">
                        {typeof hours === 'string' ? hours : `${hours.open} – ${hours.close}`}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-accent font-medium">Extended hours in Nov & Dec!</p>
              </div>
            </ScrollReveal>

            {/* Phone */}
            <ScrollReveal variants={slideUp} delay={0.2}>
              <div className="bg-surface rounded-2xl p-6 shadow-retro h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-full flex-shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <h2 className="text-h5 font-display font-semibold text-ink">Phone</h2>
                </div>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-lg font-semibold text-accent hover:text-accent/80 transition-colors block mb-2"
                >
                  {businessInfo.phone}
                </a>
                <p className="text-body-sm text-ink-muted mb-4">
                  Best times: Tuesday – Saturday, 8am – 7pm
                </p>
                <div className="bg-accent/8 border border-accent/20 rounded-xl p-3">
                  <p className="text-xs font-display font-semibold text-ink mb-1">
                    📞 Phone is best!
                  </p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    We&apos;re a small family bakery — calling during business hours gets you the
                    fastest answer.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Map + Contact Form ── */}
      <section className="py-section-lg bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn} className="text-center mb-12">
            <h2 className="text-h1 font-display text-ink mb-2">Find Us &amp; Get in Touch</h2>
            <p className="text-body text-ink-muted">
              Two ways to reach us — pick whichever works for you
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-retro bg-ink min-h-[420px] flex items-center justify-center"
            >
              <div className="text-center text-surface px-8 py-12">
                <MapPin size={56} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-display font-semibold mb-2">
                  Flying Saucer Pie Company
                </h3>
                <p className="text-surface/80 mb-1">{address.street}</p>
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Parking & Directions ── */}
      <section className="py-section-lg bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn} className="text-center mb-12">
            <h2 className="text-h1 font-display text-ink mb-2">Getting Here &amp; Parking</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Parking */}
            <ScrollReveal variants={slideUp} delay={0}>
              <div className="bg-surface rounded-2xl p-8 shadow-retro h-full">
                <Car size={28} className="text-accent mb-4" />
                <h3 className="text-xl font-display font-semibold text-ink mb-3">Parking</h3>
                <p className="text-ink-muted">
                  Free parking available in our lot. During busy times (especially Thanksgiving
                  week), additional street parking is available on Crosstimbers.
                </p>
              </div>
            </ScrollReveal>

            {/* Landmarks */}
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

          {/* Pro Tips */}
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
    </>
  )
}
