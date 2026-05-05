'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Create Your Account',
      description: 'Sign up in seconds with your email or phone number.'
    },
    {
      number: 2,
      title: 'Add Recipient',
      description: 'Add your family member\'s bank account details.'
    },
    {
      number: 3,
      title: 'Enter Amount',
      description: 'Choose how much you want to send.'
    },
    {
      number: 4,
      title: 'Make Payment',
      description: 'Pay securely via bank transfer or card.'
    },
    {
      number: 5,
      title: 'Money Arrives',
      description: 'Your loved one receives it in under 5 minutes.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">How it Works</h1>
          <p className="text-xl text-gray-600">Send money in 5 simple steps</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white border-2 border-teal-200 rounded-2xl p-8 text-center hover:shadow-lg transition">
                  <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {step.number < 5 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="text-teal-700" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
