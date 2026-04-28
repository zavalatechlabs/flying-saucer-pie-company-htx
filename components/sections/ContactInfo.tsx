'use client'

import { businessInfo } from '@/lib/data/business-info'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideInLeft, slideUp } from '@/lib/animations/variants'

export function ContactInfo() {
  return (
    <div>
      <ScrollReveal variants={slideInLeft}>
        <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
          The Quickest Way
        </p>
        <h3 className="font-display text-2xl md:text-[1.75rem] text-ink leading-snug mb-4">
          Pick up the phone &mdash; we usually answer.
        </h3>
        <p className="text-ink-muted leading-relaxed mb-10 max-w-[42ch]">
          We&rsquo;re a small family bakery, and the kitchen sits a few feet from the counter. A
          quick call almost always beats an email.
        </p>
      </ScrollReveal>

      {/* Phone — oversized type, no icon-in-circle */}
      <ScrollReveal variants={slideUp} delay={0.1}>
        <div className="border-t border-border pt-7 mb-7">
          <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-ink-muted mb-2">
            Call
          </p>
          <a
            href={`tel:${businessInfo.phone}`}
            className="font-display font-semibold text-ink hover:text-accent transition-colors block leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem)' }}
          >
            {businessInfo.phone}
          </a>
          <p className="text-sm text-ink-muted mt-2 italic">
            Best times: Tuesday &ndash; Saturday, 8am &ndash; 7pm.
          </p>
        </div>
      </ScrollReveal>

      {/* Visit */}
      <ScrollReveal variants={slideUp} delay={0.15}>
        <div className="border-t border-border pt-7 mb-7">
          <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-ink-muted mb-2">
            Visit
          </p>
          <p className="font-display text-xl text-ink leading-snug">
            {businessInfo.address.street}
          </p>
          <p className="text-ink-muted">
            {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
          </p>
        </div>
      </ScrollReveal>

      {/* Email */}
      <ScrollReveal variants={slideUp} delay={0.2}>
        <div className="border-t border-border pt-7 mb-10">
          <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-ink-muted mb-2">
            Email
          </p>
          <a
            href={`mailto:${businessInfo.email}`}
            className="font-display text-lg text-ink hover:text-accent transition-colors break-all"
          >
            {businessInfo.email}
          </a>
          <p className="text-sm text-ink-muted mt-2 italic">
            We aim to reply within one business day.
          </p>
        </div>
      </ScrollReveal>

      {/* Inline pull-quote style aside — no banned card pattern */}
      <ScrollReveal variants={slideUp} delay={0.25}>
        <div className="border-y border-accent/25 py-6">
          <p className="font-display italic text-ink leading-snug text-lg max-w-[36ch]">
            &ldquo;Sundays and Mondays we&rsquo;re closed &mdash; resting up to bake the rest of the
            week.&rdquo;
          </p>
        </div>
      </ScrollReveal>
    </div>
  )
}
