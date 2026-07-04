'use client'
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1F3A5F] to-[#2D4A6F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            About Nivesh Nirnay Solutions
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Our vision and mission for empowering disciplined investors.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <FadeIn>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#1F3A5F] tracking-tight mb-6">
                  Our Vision
                </h2>
                <p className="text-[#1F3A5F]/80 leading-relaxed mb-8">
                To become a trusted platform for financial education and market learning by empowering
                individuals with practical knowledge, disciplined thinking and framework-based
                understanding
                </p>
                <ul className="space-y-3 text-[#1F3A5F]/80">
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Democratize investment knowledge</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Build confident, informed investors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>Create long-term wealth for families</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#1F3A5F] tracking-tight mb-6">
                  Our Mission
                </h2>
                <p className="text-[#1F3A5F]/80 leading-relaxed mb-8">
                  Provide structured, comprehensive investment education that transforms individuals into confident market participants by teaching timeless principles of financial discipline and strategic thinking.
                </p>
                <ul className="space-y-3 text-[#1F3A5F]/80">
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Teach fundamental investment concepts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Build risk awareness and management skills</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Foster disciplined decision-making</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span>Support long-term wealth creation</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F9F7F4] py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold text-[#1F3A5F] tracking-tight mb-6">
              Join Us in Building Investor Confidence
            </h2>
            <p className="text-[#1F3A5F]/80 mb-8 md:mb-10">
              Explore our comprehensive programs and start your journey toward investment mastery.
            </p>
            <Link
              href="/programs"
              className="inline-block px-8 py-3 bg-[#1F3A5F] text-white font-medium hover:bg-[#2D4A6F] transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
