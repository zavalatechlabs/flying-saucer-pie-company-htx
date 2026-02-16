'use client'

import { businessInfo } from '@/lib/data/business-info'
import { Phone, MapPin, Clock } from 'lucide-react'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp, slideInLeft } from '@/lib/animations/variants'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <ScrollReveal variants={slideInLeft}>
        <h2 className="text-h2 text-ink mb-6">Get in Touch</h2>
        <p className="text-body text-ink-muted mb-8">
          For the fastest response, give us a call during business hours. We&apos;re always happy to
          answer questions about our pies!
        </p>
      </ScrollReveal>

      {/* Phone */}
      <ScrollReveal variants={slideUp} delay={0.1}>
        <div className="card flex items-start gap-4 hover:shadow-glow-sm">
          <div className="p-3 bg-accent/10 rounded-full">
            <Phone size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="text-h4 text-ink mb-1">Call Us</h3>
            <a
              href={`tel:${businessInfo.phone}`}
              className="text-lg text-accent hover:text-accent/80 transition-colors font-medium"
            >
              {businessInfo.phone}
            </a>
            <p className="text-body-sm text-ink-muted mt-1">
              Best times: Tuesday-Saturday, 8am-7pm
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Location */}
      <ScrollReveal variants={slideUp} delay={0.15}>
        <div className="card flex items-start gap-4 hover:shadow-glow-sm">
          <div className="p-3 bg-accent/10 rounded-full">
            <MapPin size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="text-h4 text-ink mb-1">Visit Us</h3>
            <p className="text-body text-ink">
              {businessInfo.address.street}
              <br />
              {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Hours Quick Reference */}
      <ScrollReveal variants={slideUp} delay={0.2}>
        <div className="card flex items-start gap-4 hover:shadow-glow-sm">
          <div className="p-3 bg-accent/10 rounded-full">
            <Clock size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="text-h4 text-ink mb-1">Hours</h3>
            <p className="text-body text-ink">
              Tuesday - Saturday: 8:00 AM - 7:00 PM
              <br />
              Sunday & Monday: Closed
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Special Note */}
      <ScrollReveal variants={slideUp} delay={0.25}>
        <div className="bg-accent/10 border-2 border-accent rounded-2xl p-6">
          <h3 className="text-h5 text-ink mb-2">📞 Phone is Best!</h3>
          <p className="text-body-sm text-ink-muted">
            We&apos;re a small family bakery focused on making pies. For the quickest response to
            your questions, please give us a call during business hours.
          </p>
        </div>
      </ScrollReveal>
    </div>
  )
}
