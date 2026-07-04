"use client"

import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"


export default function Philosophy() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Our Philosophy
          </h1>
          <p className="text-gray-300 max-w-2xl">
            How we think about India, capital, and long-term value creation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* ENTREPRENEUR SECTION */}
          <FadeIn>
            <div className="mb-20">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#0F1E3F] mb-8">
                We Understand the Entrepreneurial Journey
              </h2>

              <div className="space-y-6 text-[#1A1A1A] leading-relaxed max-w-3xl">
                <p>
                  Building a business demands patience, resilience, and conviction.
                  It requires navigating uncertainty while staying committed to long-term vision.
                </p>

                <p>
                  We approach every partnership with deep respect for what founders
                  have built and a commitment to long-term sustainability.
                </p>
              </div>

              <div className="mt-10 space-y-6 max-w-3xl">
                {[
                  "We respect founder vision and prioritize durable outcomes.",
                  "We seek alignment on values, culture, and long-term ambition before capital is raised.",
                  "Our process is designed to be efficient and transparent so management remains focused on the business.",
                ].map((point, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="border-t border-[#E5E2DC] pt-6">
                      <p className="text-[#1A1A1A] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* INDIA OPPORTUNITY */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              <FadeIn>
                <div>
                  <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#0F1E3F] mb-8">
                    India as a Structural Opportunity
                  </h2>

                  <div className="space-y-6 text-[#1A1A1A] leading-relaxed">
                    <p>
                      India's growth trajectory is structural, not cyclical.
                      Demographics, digital adoption, and capital formation create
                      a compelling long-term backdrop for value creation.
                    </p>

                    <p>
                      Strong underlying growth combined with early-stage capital
                      formation provides a powerful environment for disciplined investors.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative h-[300px] md:h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src="/bse_img_uws2.jpg"
                    alt="India structural growth opportunity"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

            </div>
          </div>

          {/* CORE PHILOSOPHY */}
          <div>
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#0F1E3F] mb-12">
                Our Investment Principles
              </h2>
            </FadeIn>

            <div className="space-y-12 max-w-4xl">

              {[
                {
                  title: "Deploy Patient Capital",
                  text: "We think in years and decades, not quarters. Long-term orientation allows us to support transformational initiatives.",
                },
                {
                  title: "Combine Rigor with On-Ground Insight",
                  text: "Beyond financial diligence, we assess qualitative factors including founder quality, market structure, and cultural alignment.",
                },
                {
                  title: "Build Institution-Grade Enterprises",
                  text: "We work alongside founders to strengthen governance and scale operations while preserving entrepreneurial identity.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="border-t border-[#E5E2DC] pt-8">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#213A56] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#1A1A1A] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-[#E5E2DC]">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight text-[#0F1E3F] mb-6">
              Want to explore how we can partner?
            </h2>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#0F1E3F] text-white font-medium hover:bg-[#213A56] transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
