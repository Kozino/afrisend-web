'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How long does it take to receive money?',
      answer: 'Most transfers arrive in under 5 minutes to mobile wallets and bank accounts.'
    },
    {
      question: 'What are the fees?',
      answer: 'We charge zero fees on transfers. You only pay for the transparent exchange rate.'
    },
    {
      question: 'Which countries do you support?',
      answer: 'We currently support 12 African countries including Nigeria, Kenya, Ghana, and more.'
    },
    {
      question: 'Is my money safe?',
      answer: 'Yes! We use bank-grade 256-bit SSL encryption and are regulated by Qatar Central Bank.'
    },
    {
      question: 'How do I create an account?',
      answer: 'Download the app, verify your identity, and you can start sending in minutes.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Bank transfer, debit/credit card, and digital wallets are all accepted.'
    },
    {
      question: 'Can I track my transfer?',
      answer: 'Yes! Get real-time notifications from send to arrival with our tracking system.'
    },
    {
      question: 'What is the maximum amount I can send?',
      answer: 'Limits depend on your verification level. Verified users can send up to QAR 100,000.'
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about AfriSend</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  className={`text-teal-700 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
