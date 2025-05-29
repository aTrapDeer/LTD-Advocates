'use client'
import { Award, Users, Clock, Briefcase, ChevronDown } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import siteContent from '../content/siteContent.json'

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold pr-8">{question}</h3>
        <ChevronDown 
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function About() {
  const { about } = siteContent;
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${about.hero.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: '0.4'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{about.hero.title}</h1>
          <p className="text-xl max-w-3xl">
            {about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative h-[600px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src={about.founder.image.src}
                  alt={about.founder.image.alt}
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">{about.founder.title}</h2>
              {about.founder.content.map((paragraph, index) => (
                <p key={index} className="text-lg mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values - Updated content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Mission, Vision, and Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                content: 'To simplify the disability claims process and empower individuals to access the benefits they rightfully deserve.',
                icon: Award
              },
              {
                title: 'Our Vision',
                content: 'To become the leading provider of LTD consulting services in the United States, known for our expertise, empathy, and commitment to client success.',
                icon: Briefcase
              },
              {
                title: 'Core Values',
                content: 'Our core values are Empathy, Integrity and Expertise. We approach every client with understanding and compassion. Transparency and honesty are the cornerstones of our practice. We bring deep knowledge and strategic insight to every case.',
                icon: Users
              }
            ].map((item, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{about.faqs.title}</h2>
            <p className="text-lg text-gray-600">
              {about.faqs.subtitle}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg">
            {about.faqs.items.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              {about.faqs.cta.text}
            </p>
            <Link 
              href="/contact" 
              className="btn btn-outline btn-primary hover:scale-105 transition-transform duration-200"
            >
              {about.faqs.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Claim?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your case with our experienced team.
          </p>
          <Link 
            href="/booking" 
            className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
