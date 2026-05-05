'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg text-gray-900">
            AfriSend
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition">
              Home
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-teal-600 transition">
              How it Works
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-teal-600 transition">
              Features
            </Link>
            <Link href="/security" className="text-gray-700 hover:text-teal-600 transition">
              Security
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 transition">
              About
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-teal-600 transition">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition font-medium">
            Download App
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/" className="text-gray-700 hover:text-teal-600">Home</Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-teal-600">How it Works</Link>
              <Link href="/features" className="text-gray-700 hover:text-teal-600">Features</Link>
              <Link href="/security" className="text-gray-700 hover:text-teal-600">Security</Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600">About</Link>
              <Link href="/faq" className="text-gray-700 hover:text-teal-600">FAQ</Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600">Contact</Link>
              <button className="w-full bg-teal-700 text-white py-2 rounded-full hover:bg-teal-800 transition font-medium">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
