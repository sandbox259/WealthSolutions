"use client"

import { Nav } from "@/components/nav"
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"

export default function About() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1B4965] to-[#3E7C8F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            About My Wealth Solutions
          </h1>
          <p className="text-gray-100 max-w-2xl">
            Our commitment to structured financial education and market learning excellence.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

            <FadeIn>
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1B4965] tracking-tight mb-8">
                  About My Wealth Solutions
                </h2>

                <div className="space-y-6 text-[#1A1F2E] leading-relaxed max-w-xl">
                  <p>
                    My Wealth Solution is a financial education and market learning organization committed to helping individuals understand various segments of the securities market through structured educational frameworks.
                  </p>

                  <p>
                    Our focus is not on shortcuts or speculation, but on developing knowledge, discipline and practical market understanding that supports long-term financial growth. We believe that informed decisions come from education, structured thinking and continuous learning.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-[300px] sm:h-[380px] md:h-[420px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/Aboutus.jpeg"
                  alt="About My Wealth Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F5F7FA] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1B4965] tracking-tight mb-6">
                Why Choose My Wealth Solutions
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">

            {[
              {
                title: "Structured Learning Approach",
                description:
                  "Framework-based education rather than random information. We provide systematic, comprehensive frameworks for understanding financial markets.",
              },
              {
                title: "Practical Market Understanding",
                description:
                  "Focused on real-world market behavior and concepts. Our programs connect theory with practical application and discipline.",
              },
              {
                title: "Mentorship Support",
                description:
                  "Guided learning experience with continued support. Our instructors provide personalized guidance throughout your learning journey.",
              },
              {
                title: "Long-Term Perspective",
                description:
                  "Focused on knowledge, discipline and sustainable learning. We emphasize building lasting habits and understanding, not quick gains.",
              },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="space-y-4 p-6 bg-white rounded-lg border border-[#E8EBF0]">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#1B4965] tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[#1A1F2E] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>

      {/* LEARNING PROCESS */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1B4965] tracking-tight mb-12">
              Our Learning Process
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8 md:gap-10">

            {[
              {
                step: "Learn",
                text: "Understand market concepts and frameworks.",
              },
              {
                step: "Apply",
                text: "Practice structured thinking and implementation.",
              },
              {
                step: "Improve",
                text: "Refine understanding through mentorship and support.",
              },
              {
                step: "Grow",
                text: "Build confidence and market awareness over time.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1B4965] to-[#3E7C8F] text-white flex items-center justify-center font-semibold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#1B4965]">
                    {item.step}
                  </h3>
                  <p className="text-[#1A1F2E] leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4965] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to start your education journey?
            </h2>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#16A39E] text-white font-medium hover:bg-[#0D8A83] transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
