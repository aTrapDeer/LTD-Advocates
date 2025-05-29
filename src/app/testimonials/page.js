'use client'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah T.",
      type: "SSDI Appeal Success",
      content: "After being denied by my insurance provider twice, LTD Advocates helped me appeal successfully. Their step-by-step guidance made all the difference. My monthly benifits help me cover my medical expenses and basic living expenses, which has been life-changing for me and my family.",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Michael R.",
      type: "Long Term Disability Claim",
      content: "When my employer's insurance company made my LTD claim difficult, this team was invaluable. They helped me understand my policy details and gathered the right medical documentation. Within 3 months, my claim was approved. I could not afford the high retainer fee of other consultants. The fact that they gave me the option to pay on approval made all the difference.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "Jennifer L.",
      type: "SSDI Consultation",
      content: "The regular updates and clear communication made a huge difference. They helped gather medical evidence that proved crucial for my case and managed the timelines with my claims specialist so I could focus on my health.",
      rating: 5,
      date: "January 2024"
    },
    {
      name: "David M.",
      type: "Appeals Support",
      content: "When my initial claim was denied, I was devastated. Their team reviewed my case, identified the missing elements, and helped prepare a compelling appeal. Their expertise in juggling administrative beuracracy was invaluable.",
      rating: 5,
      date: "December 2023"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/testimonials.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-xl max-w-3xl">
            Real experiences from people we&#39;ve helped navigate the disability claims process.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <span className="text-sm text-primary">{testimonial.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8">Join our successful clients and let us help you secure the benefits you deserve.</p>
          <button className="btn btn-primary btn-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </>
  )
}
