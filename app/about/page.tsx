'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About AfriSend</h1>
          <p className="text-xl text-gray-600">Bridging the gap between Qatar and Africa</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              AfriSend was born from a simple observation: the journey of money back home should be as seamless as the journey of love. We are dedicated to empowering the African diaspora in Qatar by providing a bridge built on trust, transparency, and speed.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-909 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become the most trusted financial bridge connecting Qatar and Africa, enabling millions to support their families with dignity, security, and simplicity.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-teal-50 p-8 rounded-2xl text-center">
                <p className="text-4xl font-bold text-teal-700 mb-2">50k+</p>
                <p className="text-gray-600">Happy Users</p>
              </div>
              <div className="bg-teal-50 p-8 rounded-2xl text-center">
                <p className="text-4xl font-bold text-teal-700 mb-2">12</p>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="bg-teal-50 p-8 rounded-2xl text-center">
                <p className="text-4xl font-bold text-teal-700 mb-2">0%</p>
                <p className="text-gray-600">Fraud Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
