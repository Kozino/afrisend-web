'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-afrisend-dark rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-lg text-gray-900">AfriSend</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#mission" className="text-gray-700 hover:text-afrisend-teal transition">
              Mission
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-afrisend-teal transition">
              How it Works
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-afrisend-teal transition">
              Features
            </Link>
            <Link href="#security" className="text-gray-700 hover:text-afrisend-teal transition">
              Security
            </Link>
          </nav>

          {/* Download Button */}
          <button className="bg-afrisend-dark text-white px-6 py-2 rounded-full hover:bg-afrisend-teal transition font-medium text-sm">
            Download App
          </button>
        </div>
      </div>
    </header>
  )
}