"use client"

import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"


export default function Philosophy() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1B4965] to-[#3E7C8F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Our Philosophy
          </h1>
          <p className="text-gray-100 max-w-2xl">
            Our belief in education, discipline, and long-term financial knowledge.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* EDUCATION FIRST SECTION */}
          <FadeIn>
            <div className="mb-20">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#1B4965] mb-8">
                Education is the Foundation
              </h2>

              <div className="space-y-6 text-[#1A1F2E] leading-relaxed max-w-3xl">
                <p>
                  Financial markets can seem complex and intimidating. Yet, they are simply systems that connect capital with opportunity. Understanding these systems is not a privilege — it is a fundamental skill everyone should develop.
                </p>

                <p>
                  We believe that informed decisions come from education, structured thinking, and continuous learning. Without proper knowledge, individuals become prey to speculation, emotion, and costly mistakes.
                </p>
              </div>

              <div className="mt-10 space-y-6 max-w-3xl">
                {[
                  "Financial literacy should be accessible to everyone, not just institutional investors.",
                  "Framework-based thinking beats random information and speculation.",
                  "Discipline and patience are more valuable than shortcuts and quick gains.",
                ].map((point, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="border-t border-[#E8EBF0] pt-6">
                      <p className="text-[#1A1F2E] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* LONG-TERM PERSPECTIVE */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              <FadeIn>
                <div>
                  <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#1B4965] mb-8">
                    Think in Years and Decades
                  </h2>

                  <div className="space-y-6 text-[#1A1F2E] leading-relaxed">
                    <p>
                      Markets can be volatile in the short term. But over longer periods, disciplined learning and consistent practice compound into substantial wealth.
                    </p>

                    <p>
                      We teach for the long term. Our programs build habits, knowledge, and confidence that serve you for decades. We measure success not in days or months, but in sustained financial growth and peace of mind.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative h-[300px] md:h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src="/bse_img_uws2.jpg"
                    alt="Long-term financial learning"
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
              <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#1B4965] mb-12">
                Our Core Principles
              </h2>
            </FadeIn>

            <div className="space-y-12 max-w-4xl">

              {[
                {
                  title: "Knowledge Over Speculation",
                  text: "We teach frameworks and concepts, not tips or shortcuts. Building real understanding takes time, but leads to sustainable results.",
                },
                {
                  title: "Discipline Creates Wealth",
                  text: "Financial success comes from disciplined thinking and consistent practice, not luck or perfect timing. We emphasize the behavioral and psychological aspects of investing.",
                },
                {
                  title: "Structured Learning Compounds",
                  text: "Each lesson builds on the previous one. Our programs are designed so concepts connect and reinforce each other, accelerating your learning journey.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="border-t border-[#E8EBF0] pt-8">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#3E7C8F] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#1A1F2E] leading-relaxed">
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
      <section className="bg-[#1B4965] text-white py-16 border-t border-[#E8EBF0]">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to build your financial foundation?
            </h2>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#16A39E] text-white font-medium hover:bg-[#0D8A83] transition-colors"
            >
              Explore Our Programs
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
