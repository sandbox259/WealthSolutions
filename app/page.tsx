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
            alt="Learning and growth"
            fill
            priority
            className="object-cover object-top md:object-[center_15%]"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4965] via-[#1B4965]/90 to-[#1B4965]/40" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm md:text-base text-teal-200 font-semibold uppercase tracking-widest mb-4 md:mb-6">My Wealth Solutions</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-4 md:mb-6">
              Educate • Empower • Elevate
            </h1>

            <p className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-2xl mb-10 md:mb-12">
              Structured Wealth Education & Market Learning Solutions. Helping individuals develop financial awareness, market understanding and disciplined decision-making through structured educational programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#16A39E] text-white font-medium hover:bg-[#0D8A83] transition-colors text-center"
              >
                Explore Programs
              </Link>

              <Link
                href="/services"
                className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#1B4965] transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* TEXT */}
            <FadeIn>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1B4965] tracking-tight mb-8 md:mb-10">
                Who We Are
              </h2>

              <p className="text-[#1B4965] font-semibold mb-5 md:mb-6">
                My Wealth Solution is a financial education and market learning organization committed to helping individuals understand various segments of the securities market through structured educational frameworks.
              </p>

              <div className="space-y-5 md:space-y-6 text-[#1A1F2E] leading-relaxed max-w-xl">
                <p>
                  Our focus is not on shortcuts or speculation, but on developing knowledge, discipline and practical market understanding that supports long-term financial growth.
                </p>

                <p>
                  We believe that informed decisions come from education, structured thinking and continuous learning.
                </p>
              </div>
            </div>
            </FadeIn>

            {/* IMAGE */}
            <FadeIn delay={0.2}>
            <div className="relative h-[280px] sm:h-[360px] md:h-[420px] w-full">
              <Image
                src="/Philosophy.jpeg"
                alt="Education and learning"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#F5F7FA] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1B4965] tracking-tight mb-5 md:mb-6">
              Our Services
            </h2>
            <div className="h-[2px] w-16 bg-[#16A39E]" />
          </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">

            {[
              {
                title: "Securities Market Education",
                desc: "Educational programs designed to improve understanding of financial markets and market behavior."
              },
              {
                title: "Commodity Market Learning",
                desc: "Structured frameworks focused on commodity markets including Gold and Silver."
              },
              {
                title: "Risk & Capital Management",
                desc: "Programs focused on risk awareness, capital preservation concepts and disciplined market participation."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i *0.15}>
              <div key={i} className="space-y-4 md:space-y-6">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#1B4965] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#1A1F2E] leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            
            <FadeIn>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B4965] tracking-tight mb-6">
                Our Vision
              </h3>
              <p className="text-[#1A1F2E] leading-relaxed">
                To become a trusted platform for financial education and market learning by empowering individuals with practical knowledge, disciplined thinking and framework-based understanding.
              </p>
            </div>
            </FadeIn>

            <FadeIn delay={0.1}>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B4965] tracking-tight mb-6">
                Our Mission
              </h3>
              <ul className="space-y-3 text-[#1A1F2E] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#16A39E] font-bold">•</span>
                  <span>Promote financial literacy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#16A39E] font-bold">•</span>
                  <span>Build market awareness</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#16A39E] font-bold">•</span>
                  <span>Encourage disciplined participation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#16A39E] font-bold">•</span>
                  <span>Provide structured educational frameworks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#16A39E] font-bold">•</span>
                  <span>Support long-term wealth education</span>
                </li>
              </ul>
            </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4965] text-white py-16 md:py-24">
        <FadeIn>
        <div className="max-w-3xl mx-auto text-center px-6">

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-5 md:mb-6">
            Begin Your Learning Journey
          </h2>

          <p className="text-gray-100 mb-8 md:mb-10">
            Join thousands of learners building disciplined market understanding and long-term wealth knowledge.
          </p>

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
