'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DollarSign, Zap, Lock, Smartphone, Globe, TrendingUp } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    {
      icon: DollarSign,
      title: 'Lower Costs',
      description: 'Real-time transparent exchange rates and zero hidden fees. Your money reaches its destination intact.'
    },
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Most transfers arrive in under 5 minutes. Your love shouldn\'t have to wait.'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Security',
      description: 'Fully regulated by Qatar Central Bank. Advanced encryption protects your data.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Send money anytime, anywhere with our easy-to-use mobile app.'
    },
    {
      icon: Globe,
      title: '12+ Countries',
      description: 'Support your family across Africa with coverage in major countries.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Tracking',
      description: 'Track every transfer from send to arrival with live updates.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Features</h1>
          <p className="text-xl text-gray-600">Everything you need to send money with confidence</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition">
                  <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-teal-700" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
