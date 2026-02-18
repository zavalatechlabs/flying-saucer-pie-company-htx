'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  subject: string
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  // Basic validation
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: 'Missing required fields' }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: 'Invalid email address' }
  }

  // If no API key, log and return success (dev mode)
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set — contact form submission logged but not sent', data)
    return { success: true }
  }

  try {
    await resend.emails.send({
      from: 'Flying Saucer Pie Website <noreply@flyingsaucerpies.com>',
      to: process.env.CONTACT_EMAIL || 'info@flyingsaucerpies.com',
      replyTo: data.email,
      subject: `[Website Contact] ${data.subject}: ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}
      `.trim(),
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
