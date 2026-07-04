"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-10 md:mb-12">

          <div>
            <h3 className="font-heading text-lg md:text-xl font-semibold tracking-wide mb-3 md:mb-4">
              Unity Wealth Solutions
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              India-focused investment banking and corporate advisory firm.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3 md:mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/philosophy" className="hover:text-white">Philosophy</Link></li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 md:mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              info@unitywealthsolutions.com
            </p>
            <p className="text-gray-400 text-sm mt-2">
              +91 79773 72974
            </p>
          </div>

        </div>

        <div className="border-t border-[#213A56] pt-6 md:pt-8 text-center text-gray-500 text-sm">
          © 2026 Unity Wealth Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
