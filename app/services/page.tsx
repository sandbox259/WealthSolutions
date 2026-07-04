"use client"

import React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"

export default function Services() {

  const services = [
    {
      title: "Growth Capital",
      description:
        "Advising growth-stage companies on raising equity for expansion and new markets. We structure rounds aligned with founder goals and investor expectations.",
    },
    {
      title: "Equity-Linked Funding",
      description:
        "Structuring warrants, CCDs, and convertibles aligned with Indian regulatory frameworks while balancing dilution and investor return profiles.",
    },
    {
      title: "Pre-IPO Placements",
      description:
        "Supporting companies ahead of listing to strengthen governance and institutional readiness.",
    },
    {
      title: "Structured Finance",
      description:
        "Custom financing solutions for acquisitions, restructuring, and strategic investments.",
    },
    {
      title: "Debt Financing",
      description:
        "Raising working capital and long-term debt while maintaining financial discipline.",
    },
  ]

  const processSteps = [
    { step: "Preparation", desc: "Documentation, analysis, structuring" },
    { step: "Investor Engagement", desc: "Introductions & negotiations" },
    { step: "Term Sheet", desc: "Alignment & documentation" },
    { step: "Due Diligence", desc: "Verification & compliance" },
    { step: "Conditions Precedent", desc: "Regulatory approvals" },
    { step: "Closing", desc: "Execution & fund transfer" },
  ]

  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Advisory and financing solutions across every stage of growth —
            from structured capital raising to institutional readiness.
          </p>
        </div>
      </section>

      {/* SERVICE OFFERINGS */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <div className="mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#0F1E3F]">
                Service Offerings
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm">
              <Accordion type="single" collapsible>
                {services.map((service, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="px-8 py-6 text-left hover:bg-[#F8F6F2] transition-colors">
                      <span className="font-heading text-lg md:text-xl font-semibold text-[#0F1E3F]">
                        {service.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 text-[#1A1A1A] leading-relaxed border-t border-[#E5E2DC]">
                      {service.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#0F1E3F] mb-12">
              Our Process
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-12">

            {processSteps.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0F1E3F] to-[#213A56] text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>

                  <h3 className="font-heading text-sm font-semibold text-[#0F1E3F]">
                    {item.step}
                  </h3>

                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}

          </div>

          <FadeIn delay={0.2}>
            <div className="mt-16 max-w-3xl">
              <p className="text-[#1A1A1A] leading-relaxed">
                We prepare businesses for institutional capital, align expectations
                between stakeholders, and manage transactions from first discussion
                through execution — ensuring capital is deployed responsibly and effectively.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <FadeIn>
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#0F1E3F] mb-10">
                  Why Partner With Us
                </h2>

                <div className="space-y-8">
                  {[
                    "Deep understanding of Indian regulatory and capital markets.",
                    "Founder-aligned approach focused on long-term value.",
                    "Institutional network across private equity and family offices.",
                    "Disciplined structuring rooted in compliance and clarity.",
                  ].map((point, i) => (
                    <div key={i} className="border-t border-[#E5E2DC] pt-6">
                      <p className="text-[#1A1A1A] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-[320px] md:h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/handshakeuws.jpg"
                  alt="Partnership & Advisory"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1E3F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to raise capital or explore growth options?
            </h2>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium hover:bg-[#997953] transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
