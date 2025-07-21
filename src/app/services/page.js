'use client'
import { CheckCircle, DollarSign, Clock, Shield, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import siteContent from '../content/siteContent.json'
import { trackBookingClick } from '../utils/analytics'

export default function Services() {
  const { services } = siteContent;
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We begin by thoroughly discussing your unique circumstances. During this session, we review your insurance policy, medical documentation, and goals to develop a clear understanding of your needs."
    },
    {
      title: "Customized Strategy Development",
      description: "Using insights from the consultation, we craft a tailored plan designed to maximize your chances of success. This includes a step-by-step roadmap for filing, responding to disputes, and, if necessary, appealing denials."
    },
    {
      title: "Ongoing Support",
      description: "Throughout the claims process, we remain by your side. From ensuring your submission is complete to addressing unexpected challenges, our team provides guidance and support at every turn."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/services.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Comprehensive Disability Claims Assistance</h1>
          <p className="text-xl max-w-3xl">
            Our services are tailored to help individuals at every stage of the disability claims process, from initial applications to appeals.
          </p>
        </div>
      </section>

      {/* Our Client-First Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Client-First Approach</h2>
          <p className="text-lg text-center text-gray-600 mb-12">Affordable, transparent, and personalized service designed around your needs</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="card bg-white shadow-2xl border-2 border-primary">
              <div className="card-body">
                <div className="text-center mb-8">

                  <h3 className="text-3xl font-bold mb-2">Fair & Transparent Pricing</h3>
                  <p className="text-gray-600 text-lg">We believe everyone deserves quality representation without financial barriers</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center bg-blue-50 p-6 rounded-lg">
                    <CheckCircle className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <span className="font-semibold block text-lg">Free Initial Screening</span>
                      <span className="text-gray-600">No obligation consultation to assess your case</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 p-6 rounded-lg">
                    <DollarSign className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <span className="font-semibold block text-lg">No Retainer Fee</span>
                      <span className="text-gray-600">Start your case without upfront costs</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 p-6 rounded-lg">
                    <Clock className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <span className="font-semibold block text-lg">24/7 Support</span>
                      <span className="text-gray-600">Flexible assistance when you need it</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 p-6 rounded-lg">
                    <Shield className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <span className="font-semibold block text-lg">Regular Updates</span>
                      <span className="text-gray-600">Clear communication throughout your case</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/booking"
                      onClick={() => trackBookingClick('services_get_started')}
                      className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200"
                    >
                      Get Started Today
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Want to see how we compare to traditional consultants? <Link href="/compare-price" className="text-primary hover:underline">View detailed pricing comparison</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Compelling Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Expert Guidance When You Need It Most</h2>
              <p className="text-lg text-gray-600">
                Navigating disability claims shouldn&apos;t be a journey you take alone. Our experienced team provides the support, knowledge, and advocacy you need to secure the benefits you deserve.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Personalized consultation and strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive documentation support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Expert claim navigation assistance</span>
                </div>
              </div>
              <Link 
                href="/booking"
                onClick={() => trackBookingClick('services_free_consultation')}
                className="btn btn-primary btn-lg inline-flex items-center gap-2 mt-4"
              >
                Schedule Your Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <div className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/Images/Stock/8.jpg"
                  alt="Professional disability claim consultation"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Detailed Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* LTD Claims Consulting */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">{services.ltdConsulting.title}</h3>
              <p className="text-gray-600">
                {services.ltdConsulting.description}
              </p>
              <div className="grid gap-4">
                {services.ltdConsulting.items.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SSDI Guidance */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">{services.ssdiGuidance.title}</h3>
              <p className="text-gray-600">
                {services.ssdiGuidance.description}
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  {services.ssdiGuidance.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Proven Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="absolute -top-4 left-8 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Educational Resources and Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Templates and Checklists",
                description: "Step-by-step guides to streamline the claims process."
              },
              {
                title: "Communication Strategies",
                description: "Tips for managing interactions with insurers to protect your rights."
              },
              {
                title: "Appeal Assistance",
                description: "Tools to build a compelling case if your claim is denied."
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Have Questions About Our Services?</h2>
          <p className="text-lg mb-8">Schedule your free initial screening today.</p>
          <Link 
            href="/booking" 
            className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
