'use client'
import { useState, useEffect } from 'react'

export default function BookingAlert({ calendlyEmail, hasUploadedFiles }) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div 
      className={`fixed bottom-6 right-6 max-w-md bg-white shadow-2xl rounded-xl pointer-events-auto ring-1 ring-black/5 transform transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {calendlyEmail ? (
              <div className="p-2 bg-green-50 rounded-full">
                <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="p-2 bg-blue-50 rounded-full">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {calendlyEmail ? 'Consultation Scheduled!' : 'Schedule Your Consultation'}
            </h3>
            
            {calendlyEmail ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  Your consultation has been scheduled successfully. You can now upload any relevant documents if you have them.
                </p>
                <div className="flex gap-2">
                  <a 
                    href="/docs-upload"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Upload Documents
                  </a>
                  <a 
                    href="/contact"
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-600">
                Select a time that works best for you to schedule your consultation.
              </p>
            )}
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => setIsVisible(false)}
              className="rounded-md p-1.5 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}