'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/data/business-info'
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/lib/animations/scroll-reveal'
import { slideInLeft, slideInRight, slideUp } from '@/lib/animations/variants'

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'general'
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-space-night text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Let&apos;s Talk Pie!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-cream-white/80"
          >
            Questions about our pies? Need help with a large order? We&apos;re here to help!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollReveal variants={slideInLeft}>
                <h2 className="text-3xl font-bold text-space-night mb-6">
                  Get in Touch
                </h2>
                <p className="text-dust-medium mb-8">
                  For the fastest response, give us a call during business hours. 
                  We&apos;re always happy to answer questions about our pies!
                </p>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal variants={slideUp} delay={0.1}>
                <div className="bg-dust-lightest rounded-2xl p-6 flex items-start gap-4">
                  <div className="p-3 bg-cosmic-orange/10 rounded-full">
                    <Phone size={24} className="text-cosmic-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-space-night mb-1">Call Us</h3>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-lg text-cosmic-orange hover:text-cosmic-orange-dark transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                    <p className="text-sm text-dust-medium mt-1">
                      Best times: Tuesday-Saturday, 8am-7pm
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal variants={slideUp} delay={0.15}>
                <div className="bg-dust-lightest rounded-2xl p-6 flex items-start gap-4">
                  <div className="p-3 bg-cosmic-orange/10 rounded-full">
                    <MapPin size={24} className="text-cosmic-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-space-night mb-1">Visit Us</h3>
                    <p className="text-dust-dark">
                      {businessInfo.address.street}<br />
                      {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hours Quick Reference */}
              <ScrollReveal variants={slideUp} delay={0.2}>
                <div className="bg-dust-lightest rounded-2xl p-6 flex items-start gap-4">
                  <div className="p-3 bg-cosmic-orange/10 rounded-full">
                    <Clock size={24} className="text-cosmic-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-space-night mb-1">Hours</h3>
                    <p className="text-dust-dark">
                      Tuesday - Saturday: 8:00 AM - 7:00 PM<br />
                      Sunday & Monday: Closed
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Special Note */}
              <ScrollReveal variants={slideUp} delay={0.25}>
                <div className="bg-cosmic-orange/10 border-2 border-cosmic-orange rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-space-night mb-2">
                    📞 Phone is Best!
                  </h3>
                  <p className="text-dust-dark text-sm">
                    We&apos;re a small family bakery focused on making pies. For the quickest 
                    response to your questions, please give us a call during business hours.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal variants={slideInRight} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-space-night mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-space-night mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-dust-medium">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dust-dark mb-2">
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
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dust-dark mb-2">
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
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dust-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dust-dark mb-2">
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
                    <label htmlFor="message" className="block text-sm font-medium text-dust-dark mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                  >
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