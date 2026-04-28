'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideUp, slideInLeft, slideInRight } from '@/lib/animations/variants'

// ─── Holiday week schedule ────────────────────────────────────────────────
const thanksgivingHours: Array<{ day: string; date: string; hours: string }> = [
  { day: 'Saturday', date: 'Nov 22', hours: '7am – 7pm' },
  { day: 'Sunday', date: 'Nov 23', hours: 'Closed' },
  { day: 'Monday', date: 'Nov 24', hours: '7am – 7pm' },
  { day: 'Tuesday', date: 'Nov 25', hours: '7am – 7pm' },
  { day: 'Wednesday', date: 'Nov 26', hours: '7am – 5pm' },
  { day: 'Thursday', date: 'Nov 27', hours: 'Closed' },
]

const christmasHours: Array<{ day: string; date: string; hours: string }> = [
  { day: 'Tue – Sat', date: 'Dec 1 – 20', hours: '7am – 7pm' },
  { day: 'Wednesday', date: 'Dec 24', hours: '7am – 5pm' },
  { day: 'Thursday', date: 'Dec 25', hours: 'Closed' },
  { day: 'Fri – Sat', date: 'Dec 26 – 27', hours: '8am – 7pm' },
  { day: 'Tuesday', date: 'Dec 30', hours: '8am – 7pm' },
  { day: 'Wednesday', date: 'Dec 31', hours: '8am – 4pm' },
  { day: 'Jan 1 – 8', date: 'New Year break', hours: 'Closed' },
]

// ─── Pies that hold or freeze ─────────────────────────────────────────────
const fruitPies = ['Apple', 'Pecan', 'Peach', 'Cherry', 'Pineapple', 'Pumpkin', 'Blueberry']
const creamPies = [
  'Strawberry',
  'Banana',
  'Chocolate',
  'Lemon',
  'Coconut',
  'Key Lime',
  'Cheesecake',
]
const freezerPies = ['Apple', 'Pecan', 'Peach', 'Cherry', 'Pineapple', 'Blackberry', 'Blueberry']

export function HolidaysContent() {
  return (
    <>
      {/* ═══ Hero — dark navy panel with atomic pattern ═══ */}
      <section className="relative bg-ink text-surface overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05] text-surface"
          style={{
            backgroundImage: `url('/brand/atomic-pattern.svg')`,
            backgroundSize: '140px 140px',
            backgroundRepeat: 'repeat',
          }}
        />
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
            Thanksgiving &nbsp;&middot;&nbsp; Christmas &nbsp;&middot;&nbsp; New Year&rsquo;s
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-fredoka font-bold mb-5 leading-[1.02]"
            style={{ fontSize: 'clamp(2.75rem, 1.5rem + 5vw, 4.5rem)' }}
          >
            The holiday pie playbook.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xl md:text-2xl font-pacifico text-surface/85 max-w-3xl mx-auto"
          >
            Hours, lines, and which pies hold &mdash; everything you need before you walk in.
          </motion.p>
        </div>
      </section>

      {/* ═══ Pull quote — the core policy, set as a typographic statement ═══ */}
      <section className="bg-bg py-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <blockquote className="border-y border-accent/25 py-10 md:py-14 text-center">
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.32em] text-accent mb-5">
                The one rule
              </p>
              <p
                className="font-display font-bold text-ink leading-[1.1] max-w-[22ch] mx-auto"
                style={{ fontSize: 'clamp(1.75rem, 1.1rem + 2.5vw, 2.75rem)' }}
              >
                Every pie is first come, first served.
              </p>
              <p className="mt-5 text-base md:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
                We do not take reservations during Thanksgiving week. Come on by, stand in line,
                make new friends. The line moves quickly &mdash; we promise.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ Thanksgiving — editorial section with stamp + content ═══ */}
      <section className="bg-bg-alt py-section-lg" id="thanksgiving">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <h2
              className="font-display font-bold text-ink leading-[1.05] mb-4 max-w-3xl"
              style={{ fontSize: 'clamp(2rem, 1.25rem + 3vw, 3rem)' }}
            >
              Thanksgiving week is the marathon.
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl leading-relaxed mb-12 md:mb-16">
              The bakery turns into something special the week of Thanksgiving. No orders, no
              reservations &mdash; just a line of neighbors waiting their turn. Here&rsquo;s how to
              navigate it.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Hours table — 7 cols */}
            <ScrollReveal variants={slideInLeft} className="lg:col-span-7">
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                Pickup Hours
              </p>
              <h3 className="text-2xl font-display font-semibold text-ink mb-6 leading-snug">
                Six days. One Thursday off.
              </h3>
              <dl className="divide-y divide-ink/10 border-y border-ink/10">
                {thanksgivingHours.map((row) => {
                  const closed = row.hours.toLowerCase() === 'closed'
                  return (
                    <div
                      key={row.day + row.date}
                      className="grid grid-cols-12 gap-4 py-4 items-baseline"
                    >
                      <dt className="col-span-5 sm:col-span-4 font-display font-semibold text-ink">
                        {row.day}
                      </dt>
                      <dd className="col-span-3 text-ink-muted text-sm">{row.date}</dd>
                      <dd
                        className={
                          'col-span-4 sm:col-span-5 text-right font-body ' +
                          (closed ? 'text-ink-muted/70 italic' : 'text-ink')
                        }
                      >
                        {row.hours}
                      </dd>
                    </div>
                  )
                })}
              </dl>
              <p className="mt-5 text-sm text-ink-muted leading-relaxed">
                We bake all day. If we run out, we make more. The shortest lines are typically
                Monday morning; Wednesday is the longest &mdash; that&rsquo;s also the day the news
                crews show up.
              </p>
            </ScrollReveal>

            {/* Stamp badge — 5 cols */}
            <ScrollReveal variants={slideInRight} className="lg:col-span-5">
              <div className="flex justify-center lg:justify-end">
                <div
                  className="relative w-56 h-56 md:w-64 md:h-64 rotate-[-5deg] select-none"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 rounded-full border-[3px] border-accent" />
                  <div className="absolute inset-[12px] rounded-full border border-accent/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="font-display font-semibold uppercase tracking-[0.32em] text-[0.65rem] text-accent">
                      No Orders
                    </span>
                    <span
                      className="font-display font-bold text-ink leading-none mt-2 mb-2"
                      style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)' }}
                    >
                      Walk
                      <br />
                      In
                    </span>
                    <span className="font-display font-semibold uppercase tracking-[0.32em] text-[0.65rem] text-accent">
                      First Come
                    </span>
                    <span className="absolute top-3 left-1/2 -translate-x-1/2 text-accent text-sm">
                      &#x2726;
                    </span>
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-accent text-sm">
                      &#x2726;
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-ink-muted text-center lg:text-right mt-6 italic max-w-xs lg:ml-auto">
                Slices stop the week before Thanksgiving. Whole pies only until we re-open
                December&nbsp;1.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Pies that hold — editorial pair ═══ */}
      <section className="bg-bg py-section-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.32em] text-accent mb-4 text-center">
              Buying ahead
            </p>
            <h2
              className="font-display font-bold text-ink text-center leading-[1.05] mb-4 max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(2rem, 1.25rem + 3vw, 3rem)' }}
            >
              Which pies hold &mdash; and which ones don&rsquo;t.
            </h2>
            <p className="text-lg text-ink-muted text-center max-w-2xl mx-auto leading-relaxed mb-14 md:mb-16">
              If you&rsquo;re buying Monday for a Thursday table, this is the part to read.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 max-w-5xl mx-auto">
            <ScrollReveal variants={slideUp} delay={0.1}>
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                Fruit Pies &mdash; Will Hold
              </p>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4 leading-snug">
                Buy Monday, eat Thursday.
              </h3>
              <p className="text-ink-muted mb-5 max-w-[60ch] leading-relaxed">
                Fruit pies bought early in the week will last until Thanksgiving &mdash; but they
                <strong className="text-ink font-semibold"> must be refrigerated</strong>.
              </p>
              <ul className="flex flex-wrap gap-2">
                {fruitPies.map((pie) => (
                  <li
                    key={pie}
                    className="text-xs font-display font-semibold uppercase tracking-[0.16em] text-ink bg-bg-alt border border-ink/10 px-3 py-1.5 rounded-full"
                  >
                    {pie}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal variants={slideUp} delay={0.2}>
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                Cream Pies &mdash; Buy Late
              </p>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4 leading-snug">
                Best within a day or two.
              </h3>
              <p className="text-ink-muted mb-5 max-w-[60ch] leading-relaxed">
                Cream pies bought Monday will <em className="text-ink not-italic font-semibold">not</em>{' '}
                last until Thanksgiving. Wait for Wednesday morning, or pick up something fruit-based.
              </p>
              <ul className="flex flex-wrap gap-2">
                {creamPies.map((pie) => (
                  <li
                    key={pie}
                    className="text-xs font-display font-semibold uppercase tracking-[0.16em] text-ink-muted bg-bg-alt border border-ink/10 px-3 py-1.5 rounded-full"
                  >
                    {pie}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Freezer how-to — long-form prose pair */}
          <div className="mt-20 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto items-start">
            <ScrollReveal variants={slideInLeft} className="lg:col-span-5">
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                Freezer Plan
              </p>
              <h3
                className="font-display font-bold text-ink leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(1.5rem, 1rem + 1.75vw, 2rem)' }}
              >
                Buy in November. Bake on the day.
              </h3>
              <p className="text-ink-muted leading-relaxed">
                Pick up fruit pies any day in November and freeze them whole. Up to three months in
                the freezer, no quality loss.
              </p>
            </ScrollReveal>

            <ScrollReveal variants={slideInRight} className="lg:col-span-7">
              <ol className="space-y-5">
                {[
                  'Unbox the pie and wrap it tightly in foil.',
                  'Put the foil-wrapped pie back in the box, then into the freezer.',
                  'Do not defrost. Frozen pie goes straight into the oven at 350°F for 30–45 minutes.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-5 items-baseline">
                    <span className="font-display font-bold text-accent text-2xl leading-none flex-shrink-0 w-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-ink-muted leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-7 text-sm text-ink-muted/80 leading-relaxed">
                <span className="font-display font-semibold uppercase tracking-[0.18em] text-ink/70 mr-2">
                  Freezes well
                </span>
                {freezerPies.join(' · ')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Christmas & New Year's — alternating editorial layout ═══ */}
      <section className="bg-bg-alt py-section-lg" id="christmas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variants={slideUp}>
            <h2
              className="font-display font-bold text-ink leading-[1.05] mb-4 max-w-3xl"
              style={{ fontSize: 'clamp(2rem, 1.25rem + 3vw, 3rem)' }}
            >
              Christmas &amp; New Year&rsquo;s &mdash; the easy holiday.
            </h2>
            <p className="text-lg text-ink-muted max-w-2xl leading-relaxed mb-12 md:mb-16">
              Lines are short. Most days you can walk in, grab a pie, and be home before the kettle
              boils. Larger gatherings? Read on.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Hours — 7 cols */}
            <ScrollReveal variants={slideInLeft} className="lg:col-span-7">
              <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                December &amp; January Hours
              </p>
              <h3 className="text-2xl font-display font-semibold text-ink mb-6 leading-snug">
                The whole holiday calendar.
              </h3>
              <dl className="divide-y divide-ink/10 border-y border-ink/10">
                {christmasHours.map((row) => {
                  const closed = row.hours.toLowerCase() === 'closed'
                  return (
                    <div
                      key={row.day + row.date}
                      className="grid grid-cols-12 gap-4 py-4 items-baseline"
                    >
                      <dt className="col-span-5 sm:col-span-4 font-display font-semibold text-ink">
                        {row.day}
                      </dt>
                      <dd className="col-span-3 text-ink-muted text-sm">{row.date}</dd>
                      <dd
                        className={
                          'col-span-4 sm:col-span-5 text-right font-body ' +
                          (closed ? 'text-ink-muted/70 italic' : 'text-ink')
                        }
                      >
                        {row.hours}
                      </dd>
                    </div>
                  )
                })}
              </dl>
              <p className="mt-5 text-sm text-ink-muted leading-relaxed">
                Hours can shift in the final week &mdash; give us a call before you make the drive
                if you&rsquo;re aiming for the tail end of December.
              </p>
            </ScrollReveal>

            {/* Big-order callout — 5 cols */}
            <ScrollReveal variants={slideInRight} className="lg:col-span-5">
              <div className="bg-bg p-8 md:p-10 rounded-2xl border border-ink/10">
                <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
                  Office &amp; Family Orders
                </p>
                <h3
                  className="font-display font-bold text-ink leading-[1.1] mb-4"
                  style={{ fontSize: 'clamp(1.5rem, 1rem + 1.5vw, 1.875rem)' }}
                >
                  Need 15 pies or more?
                </h3>
                <p className="text-ink-muted leading-relaxed mb-6">
                  For one to fourteen pies, just walk in &mdash; no order needed. For fifteen and
                  up, get in touch. Large orders are arranged case-by-case with a 50% deposit.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
                >
                  <span className="border-b-2 border-ink/25 group-hover:border-accent pb-1.5 transition-colors">
                    Arrange a large order
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-ink/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
                  />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA — back to menu ═══ */}
      <section className="py-section bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variants={slideUp}>
            <p className="text-xs font-display font-semibold uppercase tracking-[0.28em] text-accent mb-4">
              Ready to plan?
            </p>
            <h3
              className="font-display font-bold text-ink mb-7 leading-[1.1]"
              style={{ fontSize: 'clamp(1.5rem, 1rem + 2vw, 2.25rem)' }}
            >
              Browse the menu and pick your pies.
            </h3>
            <a
              href="/menu"
              className="group inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
            >
              <span className="border-b-2 border-ink/25 group-hover:border-accent pb-1.5 transition-colors">
                See the full menu
              </span>
              <ArrowRight
                size={16}
                className="text-ink/40 group-hover:text-accent group-hover:translate-x-1 transition-all"
              />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
