'use client'
import { CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link'
import FeatureCards from './components/cards/FeatureCards';
import Image from 'next/image'
import siteContent from './content/siteContent.json'
import { trackBookingClick } from './utils/analytics'

export default function Home() {
  const { home } = siteContent;
  
  return (
    <>
      <section className="relative bg-primary text-white py-20">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/Stock/2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">
              {home.hero.title}
            </h2>
            <p className="text-xl mb-8">
              {home.hero.description}
            </p>
            <div className="space-x-4">
              <Link 
                href="/services" 
                className="btn btn-ghost bg-white text-primary hover:bg-blue-100 transition-colors duration-200"
              >
                {home.hero.buttons.services}
              </Link>
              <Link 
                href="/booking"
                onClick={() => trackBookingClick('home_hero')}
                className="btn btn-outline text-white hover:bg-white hover:text-primary"
              >
                {home.hero.buttons.booking}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">{home.features.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {home.features.items.map((text, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <CheckCircle className="w-6 h-6 text-primary mb-4" />
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureCards />

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300 z-10"></div>
                <Image
                  src="/Images/Stock/4.jpg"
                  alt="Consultants reviewing documents"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  quality={100}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">{home.consultation.title}</h2>
              
              <p className="text-lg text-gray-700">
                {home.consultation.description}
              </p>

              <div className="grid gap-4">
                {home.consultation.benefits.map((text, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="font-medium">{text}</p>
                  </div>
                ))}
              </div>

              <Link 
                href="/booking"
                onClick={() => trackBookingClick('home_consultation_section')}
                className="btn btn-primary inline-flex items-center gap-2"
              >
                {home.consultation.ctaButton}
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-8">{home.callToAction.title}</h2>
          <Link 
            href="/booking"
            onClick={() => trackBookingClick('home_cta_section')}
            className="btn btn-primary btn-lg"
          >
            {home.callToAction.buttonText}
          </Link>
        </div>
      </section>
    </>
  )
}
