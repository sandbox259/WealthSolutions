"use client"

import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function Mentorship() {
const reasons = [
  {
    title: "Structured Learning Approach",
    description:
      "Framework-based education rather than random information.",
  },
  {
    title: "Practical Market Understanding",
    description:
      "Focused on real-world market behavior and concepts.",
  },
  {
    title: "Mentorship Support",
    description:
      "Guided learning experience with continued support.",
  },
  {
    title: "Long-Term Perspective",
    description:
      "Focused on knowledge, discipline and sustainable learning.",
  },
]

  const learningSteps = [
    { step: 1, title: "Foundation", description: "Learn core investment concepts and market fundamentals" },
    { step: 2, title: "Analysis", description: "Master fundamental and technical analysis techniques" },
    { step: 3, title: "Strategy", description: "Develop disciplined investment strategies and frameworks" },
    { step: 4, title: "Practice", description: "Apply concepts through case studies and simulations" },
    { step: 5, title: "Mentoring", description: "Receive personalized guidance and feedback" },
    { step: 6, title: "Mastery", description: "Achieve confidence and proficiency in investing" },
  ]

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1F3A5F] to-[#2D4A6F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Our Mentorship Approach
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Personalized guidance and expert mentoring for your investment education journey.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-6">
                Why Choose Our Mentorship
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="rounded-lg p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#1F3A5F] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-[#1F3A5F]/80 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING FLOWCHART */}
      <section className="bg-[#F9F7F4] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-12 text-center">
              Your Learning Journey
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-8">
            {/* Mobile: Vertical Flowchart */}
            <div className="md:hidden">
              {learningSteps.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#1F3A5F] flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      {index < learningSteps.length - 1 && (
                        <div className="w-1 h-12 bg-[#D4AF37]/30 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-heading text-lg font-semibold text-[#1F3A5F] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#1F3A5F]/80 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
              {/* Desktop: Horizontal Flowchart */}
              <div className="hidden md:block">
                <div
                  className="grid gap-0"
                  style={{
                    gridTemplateColumns: `repeat(${learningSteps.length}, minmax(0, 1fr))`,
                  }}
                >
                  {learningSteps.map((item, index) => (
                    <FadeIn
                      key={index}
                      delay={index * 0.1}
                      className="h-full"
                    >
                      <div className="flex flex-col items-center h-full px-3">
                        {/* Circle + connector lines */}
                        <div className="relative w-full flex justify-center mb-4">
                          

                          {/* Circle */}
                          <div className="relative z-10 w-14 h-14 rounded-full bg-[#D4AF37] text-[#1F3A5F] flex items-center justify-center font-bold text-xl flex-shrink-0">
                            {item.step}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-base font-semibold text-[#1F3A5F] mb-2 text-center">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#1F3A5F]/80 text-xs text-center leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3A5F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Start Your Mentored Learning Journey
            </h2>
            <p className="text-gray-200 mb-8 md:mb-10">
              Connect with expert mentors and join our community of disciplined investors.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#D4AF37] text-[#1F3A5F] font-medium hover:bg-[#E8CFA0] transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
