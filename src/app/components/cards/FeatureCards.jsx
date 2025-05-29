'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeatureCards() {
    const features = [
      {
        title: "Compassionate Expertise",
        icon: "🤝",
        description: "With firsthand experience our team is uniquely positioned to understand your challenges. Our founder's background ensures that our services are informed by real-world experience and a genuine commitment to helping others."
      },
      {
        title: "Affordable and Transparent Services",
        icon: "💰",
        description: "Unlike other consultants who charge exorbitant fees, our services are designed to be accessible and budget-friendly. Securing the benefits you are entitled to should come with a manageable cost."
      },
      {
        title: "Specialized Focus on LTD Claims",
        icon: "🎯",
        description: "While many organizations offer generalized disability support, we focus exclusively on LTD claims. This specialization allows us to provide tailored advice and strategic solutions that maximize your chances of success."
      },
      {
        title: "Comprehensive Support",
        icon: "🛡️",
        description: "We provide step-by-step guidance from the initial consultation to claim approval and beyond. Whether you are filing a new claim or dealing with the complexities of an appeal, our team ensures that you are equipped with the tools, knowledge, and support needed to achieve your goals."
      }
    ];
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };
  
    const cardVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5
        }
      }
    };
  
    return (
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Us?
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{feature.icon}</span>
                    <h3 className="card-title text-xl">{feature.title}</h3>
                  </div>
                  <p className="text-base-content/80">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
  
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/booking">
              <button className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200">
                Schedule a Free Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }
