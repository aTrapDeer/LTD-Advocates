'use client'
import { useState, useEffect } from 'react'
import CalendlyEmbed from './CalendlyEmbed'
import BookingAlert from './BookingAlert'
import BookingNotice from './BookingNotice'

const BookingForm = () => {
  const [calendlyEmail, setCalendlyEmail] = useState('')
  const [isBookingCompleted, setIsBookingCompleted] = useState(false)

  const handleCalendlyEvent = (e) => {
    if (e.data.event === 'calendly.event_scheduled') {
      const { email } = e.data.payload.invitee
      setCalendlyEmail(email)
      setIsBookingCompleted(true)
    }
  }

  useEffect(() => {
    window.addEventListener('message', handleCalendlyEvent)
    return () => window.removeEventListener('message', handleCalendlyEvent)
  }, [])

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <BookingNotice />
      
      <div className="bg-white rounded-lg shadow">
        <CalendlyEmbed />
      </div>
      
      {isBookingCompleted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Consultation Scheduled Successfully!
          </h3>
          <p className="text-green-700 mb-4">
            Your consultation has been scheduled. You can now upload any relevant documents using our dedicated document portal.
          </p>
          <div className="flex gap-4">
            <a 
              href="/docs-upload" 
              className="btn btn-primary"
            >
              Upload Documents
            </a>
            <a 
              href="/contact" 
              className="btn btn-outline"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}

      <BookingAlert 
        calendlyEmail={calendlyEmail}
        hasUploadedFiles={false}
      />
    </div>
  )
}

export default BookingForm

