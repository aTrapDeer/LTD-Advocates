'use client'
import { useState, useEffect } from 'react'
import CalendlyEmbed from './CalendlyEmbed'
import BookingAlert from './BookingAlert'
import BookingNotice from './BookingNotice'
import { trackCalendlyBooking } from '../../utils/analytics'

const BookingForm = () => {
  const [calendlyEmail, setCalendlyEmail] = useState('')

  const handleCalendlyEvent = (e) => {
    if (e.data.event === 'calendly.event_scheduled') {
      const { email } = e.data.payload.invitee
      setCalendlyEmail(email)
      
      // Track the booking completion
      trackCalendlyBooking({
        user_email: email.replace(/@.*$/, '@***'), // Privacy-safe email
        event_type: e.data.payload.event.name || 'consultation'
      })
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

      <BookingAlert 
        calendlyEmail={calendlyEmail}
        hasUploadedFiles={false}
      />
    </div>
  )
}

export default BookingForm

