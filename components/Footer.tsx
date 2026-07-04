"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1B4965] text-white py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-10 md:mb-12">

          <div>
            <h3 className="font-heading text-lg md:text-xl font-semibold tracking-wide mb-3 md:mb-4">
              My Wealth Solutions
            </h3>
            <p className="text-gray-200 text-sm max-w-xs">
              Financial education and market learning organization committed to building disciplined investors.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3 md:mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li><Link href="/" className="hover:text-[#16A39E] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#16A39E] transition-colors">Services</Link></li>
              <li><Link href="/philosophy" className="hover:text-[#16A39E] transition-colors">Philosophy</Link></li>
              <li><Link href="/team" className="hover:text-[#16A39E] transition-colors">Team</Link></li>
              <li><Link href="/contact" className="hover:text-[#16A39E] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 md:mb-4">Contact</h4>
            <p className="text-gray-200 text-sm">
              info@mywealthsolutions.com
            </p>
            <p className="text-gray-200 text-sm mt-2">
              +91 XXXXXXXXXX
            </p>
          </div>

        </div>

        <div className="border-t border-[#3E7C8F] pt-6 md:pt-8 text-center text-gray-300 text-sm">
          © 2026 My Wealth Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
