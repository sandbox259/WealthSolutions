"use client"

import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function Programs() {
  const featuredPrograms = [
    {
      name: "Bullion Blueprint",
      subtitle: "MCX Gold & Silver Educational Framework",
      description:
        "A structured framework designed to help learners understand Gold and Silver market behavior, volatility concepts, and disciplined market participation strategies.",
      duration: "8 Weeks",
      level: "Beginner",
    },
  ]

  const comingPrograms = [
  "Stocks Investment Framework",
  "Commodity Market Mastery",
  "Option Chain Mastery",
  "Market Psychology Framework",
  "Wealth Builder Education Series",
]

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1F3A5F] to-[#2D4A6F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Our Programs
          </h1>

          <p className="text-gray-200 max-w-2xl">
            Comprehensive investment education programs designed for disciplined
            wealth building.
          </p>
        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-6">
                Featured Programs
              </h2>

              <div className="h-1 w-20 bg-[#D4AF37]" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8">
            {featuredPrograms.map((program, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="border border-[#E8E4DF] rounded-lg p-5 sm:p-6 md:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5 mb-4">
                    {/* Program title */}
                    <div className="min-w-0">
                      <h3 className="font-heading text-2xl font-semibold text-[#1F3A5F] mb-2">
                        {program.name}
                      </h3>

                      <p className="text-[#D4AF37] font-semibold text-sm">
                        {program.subtitle}
                      </p>
                    </div>

                    {/* Responsive badges */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 lg:flex-shrink-0">
                      <span className="whitespace-nowrap px-3 sm:px-4 py-2 bg-[#F9F7F4] text-[#1F3A5F] rounded-full text-xs sm:text-sm">
                        {program.duration}
                      </span>

                      <span className="whitespace-nowrap px-3 sm:px-4 py-2 bg-[#D4AF37] text-[#1F3A5F] rounded-full text-xs sm:text-sm font-medium">
                        {program.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#1F3A5F]/80 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 bg-[#1F3A5F] text-white font-medium hover:bg-[#2D4A6F] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON PROGRAMS */}
      <section className="bg-[#F9F7F4] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-12">
              Coming Soon
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingPrograms.map((program, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white border border-[#E8E4DF] rounded-lg p-6 sm:p-8 text-center relative overflow-hidden h-52">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A5F]/5 to-[#D4AF37]/5" />

                  <div className="relative h-full flex flex-col items-center justify-center">
                    <h3 className="font-heading text-lg font-semibold text-[#1F3A5F] mb-4 min-h-[56px] flex items-center justify-center">
                      {program}
                    </h3>

                    <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3A5F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Get Notified About New Programs
            </h2>

            <p className="text-gray-200 mb-8 md:mb-10">
              Be the first to know when new programs launch. Sign up for updates
              and exclusive early access.
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#D4AF37] text-[#1F3A5F] font-medium hover:bg-[#E8CFA0] transition-colors"
            >
              Get Updates
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}