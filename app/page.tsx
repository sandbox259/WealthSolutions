'use client'
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative text-white min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/forex.jpg"
            alt="Investment learning journey"
            fill
            priority
            className="object-cover object-top md:object-[center_15%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A5F] via-[#1F3A5F]/90 to-[#1F3A5F]/40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm md:text-base text-[#D4AF37] font-semibold uppercase tracking-widest mb-4 md:mb-6">Nivesh Nirnay Solutions</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-4 md:mb-6">
              Educate • Empower • Elevate
            </h1>
            <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-2xl mb-10 md:mb-12">
              Helping individuals develop financial awareness, market understanding and disciplined decisionmaking through structured educational programs across securities markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/programs"
                className="px-8 py-3 bg-[#D4AF37] text-[#1F3A5F] font-medium hover:bg-[#E8CFA0] transition-colors text-center"
              >
                Explore Programs
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#1F3A5F] transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-8 md:mb-10">
                  Who We Are
                </h2>
                <p className="text-[#1F3A5F] font-semibold mb-5 md:mb-6">
                  My Wealth Solution is a financial education and market learning organization committed to
                  helping individuals understand various segments of the securities market through structured
                  educational frameworks.
                </p>
                <div className="space-y-5 md:space-y-6 text-[#1F3A5F]/80 leading-relaxed max-w-xl">
                  <p>
                    Our focus is not on shortcuts or speculation, but on developing knowledge, discipline and
                    practical market understanding that supports long-term financial growth.
                  </p>
                  <p>
                    Our motto "Learn First. Invest Later." reflects our commitment to building informed investors who understand the markets before deploying capital.
                  </p>
                  <p>
                    We believe that informed decisions come from education, structured thinking and continuous
                    learning.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full">
                <Image
                  src="/Investing.jpg"
                  alt="Investment education"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3A5F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Start Your Investment Education Journey
            </h2>
            <p className="text-gray-200 mb-8 md:mb-10">
              Discover our comprehensive programs designed to build your investment knowledge and market expertise.
            </p>
            <Link
              href="/programs"
              className="inline-block px-8 py-3 bg-[#D4AF37] text-[#1F3A5F] font-medium hover:bg-[#E8CFA0] transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
