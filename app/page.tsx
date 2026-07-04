'use client'
import { Nav } from "@/components/nav"
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="relative text-white min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/uwshome2.jpeg"
            alt="Financial district skyline"
            fill
            priority
            className="object-cover object-top md:object-[center_15%]"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3F] via-[#0F1E3F]/90 to-[#0F1E3F]/40" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6 md:mb-8">
              Connecting ambition to capital.
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-10 md:mb-12">
              We partner with founders, investors, and institutions to unlock enduring growth.
              Not transactions — structured capital partnerships designed to scale with discipline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium hover:bg-[#997953] transition-colors text-center"
              >
                Start a Conversation
              </Link>

              <Link
                href="/services"
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#0F1E3F] transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* TEXT */}
            <FadeIn>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F1E3F] tracking-tight mb-8 md:mb-10">
                Our Purpose
              </h2>

              <p className="text-[#0F1E3F] font-semibold mb-5 md:mb-6">
                Help strong businesses scale — without losing what made them strong.
              </p>

              <div className="space-y-5 md:space-y-6 text-[#1A1A1A] leading-relaxed max-w-xl">
                <p>
                  Significant value lies within underappreciated MSMEs, industrial clusters,
                  and founder-led enterprises with solid fundamentals but limited access to
                  institutional capital.
                </p>

                <p>
                  With disciplined structuring and aligned capital partners, these
                  businesses can transition into enduring, scalable enterprises.
                </p>
              </div>
            </div>
            </FadeIn>

            {/* IMAGE */}
            <FadeIn delay={0.2}>
            <div className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full">
              <Image
                src="/Philosophy.jpeg"
                alt="Advisory discussion"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F1E3F] tracking-tight mb-5 md:mb-6">
              What We Do
            </h2>
            <div className="h-[2px] w-16 bg-[#CDAA80]" />
          </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">

            {[
              {
                title: "Investment Banking",
                desc: "Advisory across mergers, acquisitions, capital structuring, and strategic transactions."
              },
              {
                title: "Capital Raising",
                desc: "Equity, debt, and alternative capital sourcing aligned to long-term enterprise value."
              },
              {
                title: "Corporate Advisory",
                desc: "Institutional governance, growth strategy, and transformation execution support."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i *0.15}>
              <div key={i} className="space-y-4 md:space-y-6">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#0F1E3F] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#1A1A1A] leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F1E3F] tracking-tight mb-8 md:mb-10">
            Built on Trust and Discipline
          </h2>
          </FadeIn>
           <FadeIn delay={0.1}>
          <p className="text-[#1A1A1A] leading-relaxed mb-10 md:mb-14">
            Trust is not assumed — it is earned and protected through ethical conduct,
            regulatory rigor, and long-term accountability.
          </p>
          </FadeIn>

          <div className="space-y-8 md:space-y-10">
            {[
              "Operating with rigor across applicable laws and regulatory frameworks.",
              "Balancing the interests of founders, investors, and institutions through long-term alignment.",
              "Delivering tangible, measurable, and attributable outcomes."
            ].map((item, index) => (
              <FadeIn key={index} delay={index *0.15}>
              <div key={index} className="border-t border-[#E5E2DC] pt-5 md:pt-6">
                <p className="text-[#1A1A1A] leading-relaxed">
                  {item}
                </p>
              </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1E3F] text-white py-16 md:py-24">
        <FadeIn>
        <div className="max-w-3xl mx-auto text-center px-6">

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-5 md:mb-6">
            Partner With Us
          </h2>

          <p className="text-gray-300 mb-8 md:mb-10">
            Let’s explore how disciplined capital and structured advisory
            can accelerate your next phase of growth.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium hover:bg-[#997953] transition-colors"
          >
            Initiate Discussion
          </Link>

        </div>
        </FadeIn>
      </section>
    </div>
  )
}
