'use client'
import ContactForm from '../components/contact/ContactForm'
import { Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-12">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/contact.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl mb-8">We&apos;re here to help with your disability claims journey</p>
            
            {/* Compact Contact Info Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <p className="text-sm text-white/80">Call Us</p>
                    <p className="font-semibold text-white">(619) 786-7262</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <p className="text-sm text-white/80">Email</p>
                    <p className="font-semibold text-white">contact@ltdadvocates.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <p className="text-sm text-white/80">Hours</p>
                    <p className="font-semibold text-white">Mon-Fri: 9am-5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - Takes up more space (3/5) */}
            <div className="lg:col-span-3">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-3xl mb-2">Send us a Message</h2>
                  <p className="text-gray-600 mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Sidebar Content (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Quick Actions */}
              <div className="card bg-primary text-primary-content shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a href="/booking" className="btn btn-outline btn-sm w-full text-white border-white hover:bg-white hover:text-primary">
                      Schedule Consultation
                    </a>
                    <a href="tel:(619) 786-7262" className="btn btn-outline btn-sm w-full text-white border-white hover:bg-white hover:text-primary">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>No upfront costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Experienced advocates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Personalized support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Response Time */}
              <div className="card bg-green-50 border border-green-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl text-green-800 mb-2">Fast Response</h3>
                  <p className="text-green-700 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="font-medium text-lg mb-2">How do I schedule a consultation?</h3>
                <p className="text-gray-600 text-sm">
                  You can schedule a consultation by filling out our contact form, calling us at (619) 786-7262, 
                  or using our online booking system. We&apos;ll respond within 24 hours.
                </p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="font-medium text-lg mb-2">What documents should I prepare?</h3>
                <p className="text-gray-600 text-sm">
                  Bring your denial letter, medical records, employment history, and any previous correspondence 
                  with your insurance company. We&apos;ll guide you through the document submission process.
                </p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="font-medium text-lg mb-2">Do you charge upfront fees?</h3>
                <p className="text-gray-600 text-sm">
                  No, we work on a contingency basis. You don&apos;t pay unless we successfully recover your benefits. 
                  Initial consultations are always free.
                </p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="font-medium text-lg mb-2">How long does the process take?</h3>
                <p className="text-gray-600 text-sm">
                  The timeline varies by case, but most disability claims take 3-6 months to resolve. 
                  We&apos;ll keep you updated throughout the entire process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
