'use client'
import ContactForm from '../components/contact/ContactForm'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16">
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We&#39;re here to help with your disability claims journey</p>
        </div>
      </section>

      {/* Contact Content Section */}
      {/* MUST FILL IN WITH REAL INFORMATION DOWN BELOW */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="avatar placeholder mr-4">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <Phone className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">(619) 786-7262</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="avatar placeholder mr-4">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <Mail className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">disabilityclaimadvocatesmailer@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="avatar placeholder mr-4">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <Clock className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="avatar placeholder mr-4">
                        <div className="bg-primary text-primary-content rounded-full w-12">
                          <MapPin className="w-6 h-6" />
                        </div>
                      </div>
        <!--
                      <div>
                        <h3 className="font-medium">Office Location</h3>
                        <p className="text-gray-600">
                          855 Sunset Ave<br />                    
                          Los Angeles, California 90291
                        </p>
                      </div>
        -->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="font-medium text-lg mb-2">How do I schedule a consultation?</h3>
                <p className="text-gray-600">
                  You can schedule a consultation by filling out the contact form above, calling us directly at (800) 567-1911, 
                  or sending an email to support@disabilityclaims.com. We&#39;ll respond within 24 hours to set up your free initial screening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
