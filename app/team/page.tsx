"use client"

import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function Team() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Our Team
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Experienced advisors committed to disciplined capital and long-term value creation.
          </p>
        </div>
      </section>

      {/* TEAM CONTENT */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#0F1E3F] mb-12">
              Raunak Mishra & Dixit Kumar
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-[#CDAA80] font-medium mb-10">
              Co-Founders
            </p>
          </FadeIn>

          <div className="space-y-8 text-[#1A1A1A] leading-relaxed">

            <FadeIn delay={0.2}>
              <p>
                We began our journey immersed in financial models, valuations,
                and transaction structuring. Over time, experience revealed that
                finance is ultimately about human decisions — the complex choices
                founders face when uncertainty is high and the stakes are significant.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p>
                We have worked alongside first-time founders raising institutional
                capital, MSME promoters managing constrained working capital cycles,
                and business families scaling professionally while preserving legacy.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p>
                What we bring is not theoretical advice but practical judgment built
                from real transactions and real situations. Our focus is on preparing
                businesses in ways that long-term investors understand and support.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p>
                We invest significant time in structuring transactions thoughtfully,
                aligning expectations, and ensuring founders, management, and investors
                are working toward shared long-term objectives.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p>
                We believe the transaction process should be efficient and respectful
                of management’s time — enabling teams to remain focused on execution
                while capital is raised responsibly.
              </p>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#0F1E3F] mb-16 text-center">
              Our Collaborative Approach
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                title: "Partnership Mindset",
                text: "Every engagement is approached as a long-term partnership rooted in trust and shared ambition.",
              },
              {
                title: "Strategic Perspective",
                text: "We think beyond transactions, helping businesses position capital within broader growth strategy.",
              },
              {
                title: "Execution Discipline",
                text: "Meticulous structuring and regulatory awareness underpin every mandate we undertake.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-[#213A56]">
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
      </section>

      {/* CTA */}
      <section className="bg-[#0F1E3F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Let’s build something enduring.
            </h2>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium hover:bg-[#997953] transition-colors"
            >
              Connect With Us
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
