"use client"

import React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/FadeIn"

export default function Services() {

  const services = [
    {
      title: "Securities Market Education",
      description:
        "Educational programs designed to improve understanding of financial markets and market behavior. Learn about equity markets, trading mechanisms, and market dynamics.",
    },
    {
      title: "Commodity Market Learning",
      description:
        "Structured frameworks focused on commodity markets including Gold and Silver. Understand commodity trading, price movements, and market participation.",
    },
    {
      title: "Risk & Capital Management Education",
      description:
        "Programs focused on risk awareness, capital preservation concepts and disciplined market participation. Build a framework for managing financial risk.",
    },
    {
      title: "Financial Awareness Programs",
      description:
        "Learning modules designed to improve overall financial understanding and decision-making. Develop essential personal finance and investment skills.",
    },
    {
      title: "Mentorship & Learning Support",
      description:
        "Guided educational support to help learners understand concepts and frameworks effectively. Get personalized guidance throughout your learning journey.",
    },
  ]

  const processSteps = [
    { step: "Enroll", desc: "Choose your program" },
    { step: "Learn", desc: "Access educational content" },
    { step: "Practice", desc: "Apply concepts practically" },
    { step: "Mentor", desc: "Get personalized guidance" },
    { step: "Improve", desc: "Refine your understanding" },
    { step: "Grow", desc: "Build lasting knowledge" },
  ]

  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1B4965] to-[#3E7C8F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Educational Programs
          </h1>
          <p className="text-gray-100 max-w-3xl leading-relaxed">
            Structured financial education and market learning programs designed to build disciplined knowledge and practical market understanding across securities and commodities.
          </p>
        </div>
      </section>

      {/* SERVICE OFFERINGS */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <div className="mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#1B4965]">
                Our Educational Programs
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-[#F5F7FA] rounded-2xl shadow-sm">
              <Accordion type="single" collapsible>
                {services.map((service, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="px-8 py-6 text-left hover:bg-white transition-colors">
                      <span className="font-heading text-lg md:text-xl font-semibold text-[#1B4965]">
                        {service.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 text-[#1A1F2E] leading-relaxed border-t border-[#E8EBF0]">
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
      <section className="bg-[#F5F7FA] py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#1B4965] mb-12">
              Your Learning Journey
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-12">

            {processSteps.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1B4965] to-[#3E7C8F] text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>

                  <h3 className="font-heading text-sm font-semibold text-[#1B4965]">
                    {item.step}
                  </h3>

                  <p className="text-xs text-[#1A1F2E]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}

          </div>

          <FadeIn delay={0.2}>
            <div className="mt-16 max-w-3xl">
              <p className="text-[#1A1F2E] leading-relaxed">
                Our structured approach ensures learners progressively build knowledge, apply concepts practically, and develop the discipline needed for long-term financial success.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <FadeIn>
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-[#1B4965] mb-10">
                  Featured Programs
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      name: "Bullion Blueprint",
                      desc: "MCX Gold & Silver Educational Framework - A structured framework designed to help learners understand Gold & Silver market behavior, volatility concepts and disciplined market participation."
                    },
                    {
                      name: "Coming Soon",
                      items: [
                        "Stocks Investment Framework",
                        "Commodity Market Mastery",
                        "OptionChain Mastery",
                        "Market Psychology Framework",
                        "Wealth Builder Education Series"
                      ]
                    }
                  ].map((item, i) => (
                    <div key={i} className="border-t border-[#E8EBF0] pt-6">
                      <p className="text-[#1B4965] font-semibold mb-2">{item.name}</p>
                      {item.desc && <p className="text-[#1A1F2E] leading-relaxed">{item.desc}</p>}
                      {item.items && (
                        <ul className="text-[#1A1F2E] leading-relaxed space-y-1">
                          {item.items.map((prog, idx) => <li key={idx}>• {prog}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-[320px] md:h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/handshakeuws.jpg"
                  alt="Learning programs"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4965] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to develop disciplined market knowledge?
            </h2>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#16A39E] text-white font-medium hover:bg-[#0D8A83] transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
