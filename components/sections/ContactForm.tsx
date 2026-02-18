'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideInRight } from '@/lib/animations/variants'
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
    <ScrollReveal variants={slideInRight} className="card shadow-retro">
      <h3 className="text-h3 text-ink mb-6">Send Us a Message</h3>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle size={64} className="text-success mx-auto mb-4" />
          <h4 className="text-h4 text-ink mb-2">Message Sent!</h4>
          <p className="text-body text-ink-muted">
            We&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg text-error text-sm">
              {error}
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-body-sm font-medium text-ink mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-body-sm font-medium text-ink mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-body-sm font-medium text-ink mb-2">
              Phone Number
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

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-body-sm font-medium text-ink mb-2">
              What&apos;s this about?
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

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-body-sm font-medium text-ink mb-2">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="textarea-field"
              placeholder="Tell us how we can help..."
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </form>
      )}
    </ScrollReveal>
  )
}
