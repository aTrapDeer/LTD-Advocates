'use client'
import { useState } from 'react'
import { trackContactFormSubmission } from '../../utils/analytics'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear any previous status messages when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        // Track successful form submission
        trackContactFormSubmission(formData);
        
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Your message has been sent successfully!'
        })
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          reason: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      {/* Status Message */}
      {submitStatus.message && (
        <div className={`p-4 rounded-md ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md bg-gray-50 border-2 border-gray-300 
          shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:bg-white
          transition-colors px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Phone Number
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="314-640-8720"
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md bg-gray-50 border-2 border-gray-300 
          shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:bg-white
          transition-colors px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <div>
        <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Reason for Contact
        </label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md bg-gray-50 border-2 border-gray-300 
          shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:bg-white
          transition-colors px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select a reason</option>
          <option value="eligibility">Eligibility Questions</option>
          <option value="appeals">Appeals Assistance</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="How can we help you?"
          required
          disabled={isSubmitting}
          className="mt-1 block w-full rounded-md bg-gray-50 border-2 border-gray-300 
          shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:bg-white
          transition-colors px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-focus 
        transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
} 
