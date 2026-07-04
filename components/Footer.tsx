"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0F1F35] text-white py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-10 md:mb-12">

          <div>
            <h3 className="font-heading text-lg md:text-xl font-semibold tracking-wide mb-3 md:mb-4">
              Nivesh Nirnay Solutions
            </h3>
            <p className="text-gray-200 text-sm max-w-xs">
              Premium investment education and market learning. Learn First. Invest Later.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link></li>
              <li><Link href="/programs" className="hover:text-[#D4AF37] transition-colors">Programs</Link></li>
              <li><Link href="/mentorship" className="hover:text-[#D4AF37] transition-colors">Mentorship</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3 md:mb-4">Contact</h4>
            <p className="text-gray-200 text-sm">
              info@niveshnirnay.com
            </p>
            <p className="text-gray-200 text-sm mt-2">
              +91 XXXXXXXXXX
            </p>
          </div>

        </div>

        <div className="border-t border-[#1F3A5F] pt-6 md:pt-8 text-center text-gray-300 text-sm">
          © 2026 Nivesh Nirnay Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
