'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Lock, CheckCircle, Eye } from 'lucide-react'

export default function Security() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Security & Compliance</h1>
          <p className="text-xl text-gray-600">Your trust is our priority</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex gap-4 mb-8">
              <Shield className="text-teal-700 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bank-Grade Encryption</h3>
                <p className="text-gray-600">256-bit SSL encryption protects all your transactions and personal data.</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Lock className="text-teal-700 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">QCB Regulated</h3>
                <p className="text-gray-600">Fully licensed and regulated by the Qatar Central Bank.</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <CheckCircle className="text-teal-700 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fraud Prevention</h3>
                <p className="text-gray-600">0% fraud rate with advanced ML-powered fraud detection systems.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Eye className="text-teal-700 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">Real-time tracking and instant notifications for every transfer.</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6\">Compliance Certifications</h3>
            <ul className="space-y-4\">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-teal-700\" />
                <span>ISO 27001 - Information Security Management</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-teal-700\" />
                <span>PCI DSS - Payment Card Industry Data Security</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-teal-700\" />
                <span>GDPR Compliant - Data Privacy</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-teal-700\" />
                <span>AML/KYC - Anti-Money Laundering</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
