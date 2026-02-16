'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/data/business-info'
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/lib/animations/ScrollReveal'
import { slideInLeft, slideInRight, slideUp } from '@/lib/animations/variants'

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
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
    <>
      {/* Hero Section */}
      <section className="bg-deep-navy text-warm-cream py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-md md:text-display-lg mb-4"
          >
            Let&apos;s Talk Pie!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-xl text-warm-cream/80"
          >
            Questions about our pies? Need help with a large order? We&apos;re here to help!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollReveal variants={slideInLeft}>
                <h2 className="text-h2 text-deep-navy mb-6">Get in Touch</h2>
                <p className="text-body text-neutral-600 mb-8">
                  For the fastest response, give us a call during business hours. We&apos;re always
                  happy to answer questions about our pies!
                </p>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal variants={slideUp} delay={0.1}>
                <div className="card flex items-start gap-4 hover:shadow-glow-sm">
                  <div className="p-3 bg-sunset-orange/10 rounded-full">
                    <Phone size={24} className="text-sunset-orange" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-deep-navy mb-1">Call Us</h3>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-lg text-sunset-orange hover:text-sunset-orange-dark 
                               transition-colors font-medium"
                    >
                      {businessInfo.phone}
                    </a>
                    <p className="text-body-sm text-neutral-500 mt-1">
                      Best times: Tuesday-Saturday, 8am-7pm
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal variants={slideUp} delay={0.15}>
                <div className="card flex items-start gap-4 hover:shadow-glow-sm">
                  <div className="p-3 bg-sunset-orange/10 rounded-full">
                    <MapPin size={24} className="text-sunset-orange" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-deep-navy mb-1">Visit Us</h3>
                    <p className="text-body text-neutral-700">
                      {businessInfo.address.street}
                      <br />
                      {businessInfo.address.city}, {businessInfo.address.state}{' '}
                      {businessInfo.address.zip}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hours Quick Reference */}
              <ScrollReveal variants={slideUp} delay={0.2}>
                <div className="card flex items-start gap-4 hover:shadow-glow-sm">
                  <div className="p-3 bg-sunset-orange/10 rounded-full">
                    <Clock size={24} className="text-sunset-orange" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-deep-navy mb-1">Hours</h3>
                    <p className="text-body text-neutral-700">
                      Tuesday - Saturday: 8:00 AM - 7:00 PM
                      <br />
                      Sunday & Monday: Closed
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Special Note */}
              <ScrollReveal variants={slideUp} delay={0.25}>
                <div className="bg-sunset-orange/10 border-2 border-sunset-orange rounded-2xl p-6">
                  <h3 className="text-h5 text-deep-navy mb-2">📞 Phone is Best!</h3>
                  <p className="text-body-sm text-neutral-700">
                    We&apos;re a small family bakery focused on making pies. For the quickest
                    response to your questions, please give us a call during business hours.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal variants={slideInRight} className="card shadow-cosmic">
              <h3 className="text-h3 text-deep-navy mb-6">Send Us a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-success mx-auto mb-4" />
                  <h4 className="text-h4 text-deep-navy mb-2">Message Sent!</h4>
                  <p className="text-body text-neutral-600">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-body-sm font-medium text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-body-sm font-medium text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-body-sm font-medium text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="subject"
                      className="block text-body-sm font-medium text-neutral-700 mb-2"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-body-sm font-medium text-neutral-700 mb-2"
                    >
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
          </div>
        </div>
      </section>
    </>
  )
}
