'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { businessInfo } from '@/lib/data/business-info'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp, slideInLeft, slideInRight, fadeIn } from '@/lib/animations/variants'

export function ContactContent() {
  const address = businessInfo.address
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
  const appleMapsUrl = `http://maps.apple.com/?address=${encodeURIComponent(fullAddress)}`
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`

  return (
    <div className="min-h-screen bg-bg">
      {/* ── Hero — atmospheric retro panel ── */}
      <section className="relative bg-ink text-surface overflow-hidden">
        {/* Atomic pattern texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05] text-surface"
          style={{
            backgroundImage: `url('/brand/atomic-pattern.svg')`,
            backgroundSize: '140px 140px',
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Soft top→bottom radial glow for depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,255,255,0.06), transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-section-lg text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[0.7rem] sm:text-xs font-display font-semibold uppercase tracking-[0.32em] text-surface/55 mb-5"
          >
            Houston, TX &nbsp;·&nbsp; Since 1967
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-fredoka font-bold mb-5 leading-[1.02]"
            style={{ fontSize: 'clamp(2.75rem, 1.5rem + 5vw, 4.5rem)' }}
          >
            Find us on Crosstimbers.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xl md:text-2xl font-pacifico text-surface/85 max-w-2xl mx-auto"
          >
            Tuesday through Saturday, 8am to 7pm.
          </motion.p>

          {/* Auxiliary actions — phone + directions, restrained */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-display"
          >
            <a
              href={`tel:${businessInfo.phone}`}
              className="group inline-flex items-center gap-2 text-surface/80 hover:text-surface transition-colors"
            >
              <span className="font-display font-semibold uppercase tracking-[0.18em] text-[0.7rem] text-surface/55">
                Call
              </span>
              <span className="border-b border-surface/30 group-hover:border-surface pb-0.5 transition-colors text-base">
                {businessInfo.phone}
              </span>
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-surface/80 hover:text-surface transition-colors"
            >
              <span className="font-display font-semibold uppercase tracking-[0.18em] text-[0.7rem] text-surface/55">
                Visit
              </span>
              <span className="border-b border-surface/30 group-hover:border-surface pb-0.5 transition-colors text-base">
                {address.street}
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Find Us — editorial map + structured info ── */}
      <section className="py-section-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-4 text-center">
              Find Us in Space City
            </p>
            <h2
              className="font-display font-bold text-ink text-center mb-14 md:mb-16 leading-[1.05] max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(2rem, 1.25rem + 3vw, 3rem)' }}
            >
              Look for the saucer on Crosstimbers.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Map — 7 cols, framed like the about photo */}
            <ScrollReveal variants={slideInLeft} className="lg:col-span-7">
              <figure className="relative">
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-accent/15"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-ink">
                  <iframe
                    src={mapEmbedUrl}
                    title="Flying Saucer Pie Company location map"
                    className="w-full h-[420px] md:h-[480px] block"
                    style={{ border: 0, filter: 'grayscale(20%) contrast(0.95)' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <figcaption className="text-sm text-ink-muted text-center mt-4 italic">
                  {address.street} &mdash; {address.city}, {address.state} {address.zip}
                </figcaption>
              </figure>
            </ScrollReveal>

            {/* Info — 5 cols, editorial typography */}
            <ScrollReveal variants={slideInRight} className="lg:col-span-5">
              <div className="space-y-10">
                {/* Address */}
                <div>
                  <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                    The Bakery
                  </p>
                  <p className="font-display text-2xl text-ink leading-snug mb-2">
                    {address.street}
                  </p>
                  <p className="text-ink-muted leading-relaxed mb-5">
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-display">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-semibold uppercase tracking-[0.18em] text-ink hover:text-accent transition-colors"
                    >
                      <span className="border-b-2 border-ink/25 group-hover:border-accent pb-1 transition-colors">
                        Google Maps
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-ink/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
                      />
                    </a>
                    <a
                      href={appleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-semibold uppercase tracking-[0.18em] text-ink hover:text-accent transition-colors"
                    >
                      <span className="border-b-2 border-ink/25 group-hover:border-accent pb-1 transition-colors">
                        Apple Maps
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-ink/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
                      />
                    </a>
                  </div>
                </div>

                {/* Hours — table style, no card */}
                <div>
                  <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                    Hours
                  </p>
                  <p className="font-display text-2xl text-ink leading-snug mb-4">
                    Tuesday &ndash; Saturday.
                  </p>
                  <dl className="space-y-2 mb-4 max-w-sm">
                    {Object.entries(businessInfo.hours.regular).map(([day, hours]) => {
                      const isClosed = typeof hours === 'string'
                      return (
                        <div
                          key={day}
                          className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-2 last:border-b-0"
                        >
                          <dt className="capitalize font-display font-medium text-ink text-sm tracking-wide">
                            {day}
                          </dt>
                          <dd
                            className={`text-sm tabular-nums font-body ${
                              isClosed ? 'text-ink-muted/70 italic' : 'text-ink-muted'
                            }`}
                          >
                            {isClosed ? 'Closed' : `${hours.open} – ${hours.close}`}
                          </dd>
                        </div>
                      )
                    })}
                  </dl>
                  <p className="text-xs font-display uppercase tracking-[0.18em] text-accent">
                    Extended hours in November &amp; December
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Visiting tips — editorial pair, no card grid ── */}
      <section className="py-section-lg bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-4 text-center">
              Before You Come By
            </p>
            <h2
              className="font-display font-bold text-ink text-center mb-14 md:mb-16 leading-[1.05] max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(2rem, 1.25rem + 3vw, 3rem)' }}
            >
              A few friendly tips from the bakery.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 max-w-5xl mx-auto">
            <ScrollReveal variants={slideUp} delay={0.1}>
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                Parking &amp; Arrival
              </p>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4 leading-snug">
                Pull right in &mdash; the lot&rsquo;s ours.
              </h3>
              <p className="text-ink-muted mb-3 max-w-[60ch] leading-relaxed">
                Free parking in our lot. During Thanksgiving week and other holiday rushes,
                additional street parking is available along Crosstimbers.
              </p>
              <p className="text-sm text-ink-muted/80 leading-relaxed">
                Look for the iconic flying saucer sign on the corner &mdash; you really can&rsquo;t
                miss it.
              </p>
            </ScrollReveal>

            <ScrollReveal variants={slideUp} delay={0.2}>
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                Insider Tips
              </p>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4 leading-snug">
                Tuesday mornings, fewer crowds.
              </h3>
              <ul className="text-ink-muted leading-relaxed space-y-2.5 max-w-[60ch] font-body">
                <li className="flex gap-3">
                  <span className="text-accent font-display mt-0.5" aria-hidden="true">
                    &#x2735;
                  </span>
                  <span>Call ahead to check on a particular pie before you make the drive.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-display mt-0.5" aria-hidden="true">
                    &#x2735;
                  </span>
                  <span>Bring a cooler if you&rsquo;re grabbing cream pies on a hot Houston day.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-display mt-0.5" aria-hidden="true">
                    &#x2735;
                  </span>
                  <span>Follow us on Facebook or Instagram for daily fresh-out-of-the-oven updates.</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Get In Touch — form + companion info ── */}
      <section className="py-section-lg bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={fadeIn}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-4 text-center">
              Get In Touch
            </p>
            <h2
              className="font-display font-bold text-ink text-center mb-5 leading-[1.05] max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(2rem, 1.25rem + 3vw, 3rem)' }}
            >
              Drop us a line &mdash; we read every one.
            </h2>
            <p className="text-lg text-ink-muted text-center max-w-2xl mx-auto mb-14 md:mb-16 leading-relaxed">
              Questions about flavors, large orders, or holiday timing? A phone call is fastest, but
              the form below works just as well.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Companion info — 5 cols */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Form — 7 cols */}
            <ScrollReveal variants={slideInRight} delay={0.1} className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
