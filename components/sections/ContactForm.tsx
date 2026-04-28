'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { submitContactForm } from '@/app/actions/contact'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const result = await submitContactForm(formData)

    setIsSubmitting(false)

    if (result.success) {
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: 'general',
        })
        setIsSubmitted(false)
      }, 3000)
    } else {
      setError(result.error || 'Something went wrong')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="relative bg-surface rounded-2xl border border-border shadow-xl p-6 md:p-10">
      <div className="mb-7">
        <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
          Send a Message
        </p>
        <h3 className="font-display font-semibold text-ink leading-snug text-2xl md:text-3xl">
          Tell us how we can help.
        </h3>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle size={56} className="text-accent mx-auto mb-5" strokeWidth={1.5} />
          <p className="text-[0.7rem] font-display font-semibold uppercase tracking-[0.28em] text-accent mb-3">
            Sent
          </p>
          <h4 className="font-display font-semibold text-ink text-2xl mb-3 leading-snug">
            Thanks &mdash; we&rsquo;ll be in touch.
          </h4>
          <p className="text-ink-muted max-w-sm mx-auto leading-relaxed">
            Your message just landed in our inbox. We&rsquo;ll get back to you as soon as the oven
            timer lets us.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div
              role="alert"
              className="p-3.5 bg-error/10 border border-error/25 rounded-lg text-error text-sm font-body"
            >
              {error}
            </div>
          )}

          {/* Name + Email row on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-[0.7rem] font-display font-semibold uppercase tracking-[0.18em] text-ink mb-2"
              >
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[0.7rem] font-display font-semibold uppercase tracking-[0.18em] text-ink mb-2"
              >
                Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          {/* Phone + Subject row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="phone"
                className="block text-[0.7rem] font-display font-semibold uppercase tracking-[0.18em] text-ink mb-2"
              >
                Phone{' '}
                <span className="text-ink-muted/70 normal-case tracking-normal font-body italic ml-1">
                  optional
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="(713) 555-0123"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-[0.7rem] font-display font-semibold uppercase tracking-[0.18em] text-ink mb-2"
              >
                Topic
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-field"
              >
                <option value="general">General Inquiry</option>
                <option value="large-order">Large Order (15+ pies)</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-[0.7rem] font-display font-semibold uppercase tracking-[0.18em] text-ink mb-2"
            >
              Your Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="textarea-field"
              placeholder="Tell us what you need &mdash; questions, orders, feedback, or just a hello."
            />
          </div>

          {/* Footnote + submit */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-xs text-ink-muted/80 font-body italic max-w-sm">
              By sending, you agree we may reply by phone or email. We never share your details.
            </p>
            <Button type="submit" disabled={isSubmitting} className="sm:min-w-[180px]">
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
