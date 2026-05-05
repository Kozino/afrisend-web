use client

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              THE QATAR-AFRICA BRIDGE
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Send Money to Africa with{' '}
              <span className="text-orange-600">Love</span>, Not Fees.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The fastest, most secure way for the Qatari diaspora to support family back home. Join thousands bridging the distance between Doha and the continent.
            </p>

            {/* Navigation Dots */}
            <div className="flex gap-3">
              <button className="w-3 h-3 bg-gray-900 rounded-full"></button>
              <button className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600 transition"></button>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-3 border border-gray-700">
                {/* Phone Screen */}
                <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl aspect-[9/18] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-4 opacity-80"></div>
                  <div className="h-2 bg-blue-500 w-3/4 mb-3 opacity-60 rounded"></div>
                  <div className="h-2 bg-blue-500 w-2/3 mb-8 opacity-60 rounded"></div>
                  <div className="space-y-2 w-full">
                    <div className="h-3 bg-gray-600 rounded opacity-40"></div>
                    <div className="h-3 bg-gray-600 rounded opacity-40"></div>
                    <div className="h-3 bg-gray-600 rounded opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}