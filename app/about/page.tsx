"use client"

import { Nav } from "@/components/nav"
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"

export default function About() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Our story, mission, and commitment to disciplined capital advisory.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

            <FadeIn>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F1E3F] tracking-tight mb-8">
                  About UWS
                </h2>

                <div className="space-y-6 text-[#1A1A1A] leading-relaxed max-w-xl">
                  <p>
                    Unity Wealth Solutions is engaged in investment banking activities
                    including fundraising and corporate advisory.
                  </p>

                  <p>
                    We have built a nationwide sourcing network, engaging systematically
                    with businesses across India, including underserved and emerging
                    industrial regions. Through deep industrial cluster coverage, we
                    identify high-quality niche enterprises with strong growth potential.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-[300px] sm:h-[380px] md:h-[420px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/Aboutus.jpeg"
                  alt="About us"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F1E3F] tracking-tight mb-6">
                Core Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">

            {[
              {
                title: "Trust & Ethics",
                description:
                  "Integrity underpins every decision. We maintain the highest ethical standards with transparent communication and honest counsel.",
              },
              {
                title: "Regulatory Rigor",
                description:
                  "Deep expertise in compliance frameworks and regulatory landscapes ensures structured, compliant solutions.",
              },
              {
                title: "Long-term Value",
                description:
                  "We prioritize sustainable, compounding growth measured over years and decades.",
              },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="space-y-4">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#0F1E3F] tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[#1A1A1A] leading-relaxed max-w-sm">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F1E3F] tracking-tight mb-12">
              Our Mission
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">

            <div className="space-y-8">

              {[
                {
                  title: "Growth Through Partnership",
                  text: "We help strong businesses grow through meaningful, long-term partnerships.",
                },
                {
                  title: "From Potential to Scale",
                  text: "We work with founders and institutions to transform potential into scalable enterprise value.",
                },
                {
                  title: "Partnerships That Compound",
                  text: "We focus on enduring value creation built on trust and expertise.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="border-t border-[#E5E2DC] pt-6">
                    <h3 className="font-heading text-lg font-semibold text-[#213A56] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#1A1A1A] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}

            </div>

            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-[#0F1E3F] to-[#213A56] rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Our Approach
                </h3>

                <p className="text-gray-200 leading-relaxed mb-6">
                  We operate as a long-term partner to both founders and investors.
                </p>

                <p className="text-gray-200 leading-relaxed mb-6">
                  For founders, we bring structure and clarity before capital is raised.
                  For investors, we provide filtered opportunities supported by
                  disciplined underwriting.
                </p>

                <div className="pt-6 border-t border-[#CDAA80]/40">
                  <p className="text-[#CDAA80] font-medium">
                    Our role is to reduce information gaps, align expectations,
                    and ensure capital compounds responsibly.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1E3F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Let’s build something enduring.
            </h2>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium hover:bg-[#997953] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
