"use client"

import React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function Services() {
  const services = [
    {
      title: "Equities & Securities Education",
      description: "Master the fundamentals of stock market investing. Learn about market mechanics, stock analysis, valuation techniques, and disciplined equity selection strategies.",
    },
    {
      title: "Commodity Market Mastery",
      description: "Understand commodity markets including Gold and Silver. Learn about commodity price drivers, hedging strategies, and how to participate responsibly in commodity trading.",
    },
    {
      title: "Risk & Portfolio Management",
      description: "Build expertise in identifying, quantifying, and managing investment risk. Learn portfolio construction, diversification principles, and capital preservation strategies.",
    },
    {
      title: "Technical & Fundamental Analysis",
      description: "Develop skills in both technical and fundamental analysis frameworks. Learn chart patterns, indicators, financial statement analysis, and informed decision-making.",
    },
    {
      title: "Investment Psychology & Behavior",
      description: "Understand the psychological aspects of investing. Learn how to manage emotions, avoid common biases, and develop disciplined decision-making habits.",
    },
  ]

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1F3A5F] to-[#2D4A6F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Comprehensive investment education covering all aspects of disciplined market participation.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-6">
                What We Do
              </h2>
              <p className="text-[#1F3A5F]/80 text-lg leading-relaxed">
                We provide structured educational frameworks that transform individuals into confident, knowledgeable investors. Our programs combine theory with practical application, focusing on timeless principles of disciplined investing.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section className="bg-[#F9F7F4] py-16 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-6">
                Our Programs
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm">
              <Accordion type="single" collapsible>
                {services.map((service, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="px-8 py-6 text-left hover:bg-[#F9F7F4] transition-colors">
                      <span className="font-heading text-lg md:text-xl font-semibold text-[#1F3A5F]">
                        {service.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 text-[#1F3A5F]/80 leading-relaxed border-t border-[#E8E4DF]">
                      {service.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3A5F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-200 mb-8 md:mb-10">
              Explore our complete program offerings and find the right learning path for you.
            </p>
            <Link
              href="/programs"
              className="inline-block px-8 py-3 bg-[#D4AF37] text-[#1F3A5F] font-medium hover:bg-[#E8CFA0] transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
