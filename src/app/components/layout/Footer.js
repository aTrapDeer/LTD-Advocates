'use client'
import Link from 'next/link'
import { Phone, Mail, Clock } from 'lucide-react'
import { PHONE_NUMBER, PHONE_NUMBER_TEL } from '../../constants'
import { trackPhoneClick } from '../../utils/analytics'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Disability Claims Consulting</h3>
            <p className="text-gray-400">Expert guidance for your disability claims journey.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href={`tel:${PHONE_NUMBER_TEL}`}
                   onClick={() => trackPhoneClick('footer')}
                   className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                contact@ltdadvocates.com
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Mon-Fri: 9am-5pm
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Disability Claims Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 