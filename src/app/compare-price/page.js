'use client'
import { CheckCircle, DollarSign, Clock, Shield, AlertCircle, XCircle, TrendingUp, Users, FileText, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ComparePricePage() {
  const comparisonData = [
    {
      category: "Initial Consultation",
      ltdAdvocates: {
        feature: "Free Initial Screening",
        description: "Complete case assessment at no cost",
        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        highlight: true
      },
      competitors: {
        feature: "$300-500 Consultation Fee",
        description: "Upfront cost just to discuss your case",
        icon: <DollarSign className="w-6 h-6 text-red-500" />,
        highlight: false
      }
    },
    {
      category: "Retainer Requirements",
      ltdAdvocates: {
        feature: "No Retainer Fee",
        description: "Start your case immediately without upfront costs",
        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        highlight: true
      },
      competitors: {
        feature: "$5,000 - $10,000 Retainer",
        description: "Large upfront payment required before any work begins",
        icon: <XCircle className="w-6 h-6 text-red-500" />,
        highlight: false
      }
    },
    {
      category: "Hourly Rates",
      ltdAdvocates: {
        feature: "Competitive Flat Rates",
        description: "Transparent pricing with no hourly surprises",
        icon: <Shield className="w-6 h-6 text-green-500" />,
        highlight: true
      },
      competitors: {
        feature: "$400-600 per Hour",
        description: "Expensive hourly billing that adds up quickly",
        icon: <TrendingUp className="w-6 h-6 text-red-500" />,
        highlight: false
      }
    },
    {
      category: "Communication",
      ltdAdvocates: {
        feature: "24/7 Support & Regular Updates",
        description: "Always available when you need us most",
        icon: <Phone className="w-6 h-6 text-green-500" />,
        highlight: true
      },
      competitors: {
        feature: "Limited Office Hours",
        description: "Minimal communication, charged per interaction",
        icon: <Clock className="w-6 h-6 text-red-500" />,
        highlight: false
      }
    },
    {
      category: "Document Preparation",
      ltdAdvocates: {
        feature: "Included in Service",
        description: "All necessary documentation support included",
        icon: <FileText className="w-6 h-6 text-green-500" />,
        highlight: true
      },
      competitors: {
        feature: "Additional Hourly Charges",
        description: "Every document review billed separately",
        icon: <DollarSign className="w-6 h-6 text-red-500" />,
        highlight: false
      }
    }
  ]

  const costBreakdown = {
    ltdAdvocates: {
      consultation: "$0",
      retainer: "$0",
      totalEstimate: "Contact for Quote",
      notes: "Transparent pricing with no hidden fees"
    },
    competitors: {
      consultation: "$300-500",
      retainer: "$5,000-10,000",
      hourlyWork: "$500/hour × 40-80+ hours",
      totalEstimate: "$20,000-40,000+",
      notes: "Plus additional costs for documents, calls, and filing fees"
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Pricing Comparison</h1>
            <p className="text-xl mb-8">See how LTD Advocates compares to traditional disability consultants</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg">
                <strong>Bottom Line:</strong> Our client-first approach can save you thousands while providing superior service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Feature by Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Headers */}
                <div className="lg:col-span-1"></div>
                <div className="text-center">
                  <div className="bg-primary text-white py-4 px-6 rounded-t-lg">
                    <h3 className="text-xl font-bold">LTD Advocates</h3>
                    <p className="text-sm opacity-90">Client-First Approach</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-600 text-white py-4 px-6 rounded-t-lg">
                    <h3 className="text-xl font-bold">Traditional Consultants</h3>
                    <p className="text-sm opacity-90">Standard Industry Model</p>
                  </div>
                </div>
                
                {/* Comparison Rows */}
                {comparisonData.map((item, index) => (
                  <div key={index} className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-1 flex items-center">
                      <h4 className="text-lg font-semibold text-gray-800">{item.category}</h4>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        {item.ltdAdvocates.icon}
                        <div>
                          <h5 className="font-semibold text-green-800 mb-1">{item.ltdAdvocates.feature}</h5>
                          <p className="text-sm text-green-700">{item.ltdAdvocates.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        {item.competitors.icon}
                        <div>
                          <h5 className="font-semibold text-red-800 mb-1">{item.competitors.feature}</h5>
                          <p className="text-sm text-red-700">{item.competitors.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Total Cost Breakdown</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* LTD Advocates Costs */}
            <div className="bg-white rounded-lg shadow-xl border-2 border-primary">
              <div className="bg-primary text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold text-center">LTD Advocates</h3>
                <p className="text-center opacity-90">Transparent & Affordable</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Initial Consultation:</span>
                    <span className="font-semibold text-green-600">{costBreakdown.ltdAdvocates.consultation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Retainer Fee:</span>
                    <span className="font-semibold text-green-600">{costBreakdown.ltdAdvocates.retainer}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Service Package:</span>
                    <span className="font-semibold text-primary">{costBreakdown.ltdAdvocates.totalEstimate}</span>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 italic">{costBreakdown.ltdAdvocates.notes}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitor Costs */}
            <div className="bg-white rounded-lg shadow-xl border-2 border-gray-400">
              <div className="bg-gray-600 text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold text-center">Traditional Consultants</h3>
                <p className="text-center opacity-90">Standard Industry Pricing</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Initial Consultation:</span>
                    <span className="font-semibold text-red-600">{costBreakdown.competitors.consultation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Retainer Fee:</span>
                    <span className="font-semibold text-red-600">{costBreakdown.competitors.retainer}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Hourly Work:</span>
                    <span className="font-semibold text-red-600 text-sm">{costBreakdown.competitors.hourlyWork}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold">Total Estimate:</span>
                      <span className="font-bold text-red-600 text-lg">{costBreakdown.competitors.totalEstimate}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic mt-2">{costBreakdown.competitors.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Approach Works Better</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Focused</h3>
              <p className="text-gray-600">
                We prioritize your success over maximizing billable hours. Our transparent pricing means no surprises.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Efficient Process</h3>
              <p className="text-gray-600">
                Our streamlined approach gets results faster, saving you time and money while reducing stress.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Our dedicated team has helped numerous clients secure the benefits they deserve at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
                         Don&apos;t let high costs prevent you from getting the help you need. Our free consultation is risk-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 
