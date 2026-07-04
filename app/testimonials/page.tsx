"use client"

import Link from "next/link"
import FadeIn from "@/components/FadeIn"
import { useState } from "react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Patel",
      title: "Software Engineer",
      location: "Bangalore",
      rating: 5,
      text: "Nivesh Nirnay Solutions transformed my approach to investing. The structured framework and expert mentoring gave me the confidence to invest with discipline. Best decision for my financial future.",
    },
    {
      name: "Priya Sharma",
      title: "Business Owner",
      location: "Mumbai",
      rating: 5,
      text: "The programs are incredibly comprehensive. I went from complete beginner to understanding market fundamentals in just weeks. The 'Learn First. Invest Later.' philosophy is brilliant.",
    },
    {
      name: "Amit Kumar",
      title: "Finance Professional",
      location: "Delhi",
      rating: 5,
      text: "Even with finance experience, I learned so much from these programs. The focus on discipline and long-term thinking aligns perfectly with my investment philosophy.",
    },
    {
      name: "Neha Singh",
      title: "Entrepreneur",
      location: "Pune",
      rating: 5,
      text: "The mentorship support is exceptional. Having someone guide me through my learning journey made all the difference. Highly recommend to anyone serious about investing.",
    },
    {
      name: "Vikram Desai",
      title: "Corporate Professional",
      location: "Ahmedabad",
      rating: 5,
      text: "The practical case studies and real-world examples made complex concepts easy to understand. This is investment education done right.",
    },
    {
      name: "Anjali Kapoor",
      title: "Teacher",
      location: "Hyderabad",
      rating: 5,
      text: "A life-changing experience. The programs taught me not just about markets, but about financial discipline and long-term thinking. Thank you, Nivesh Nirnay!",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + 1) % testimonials.length
    )
  }

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1F3A5F] to-[#2D4A6F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Student Testimonials
          </h1>

          <p className="text-gray-200 max-w-2xl">
            Hear from our community of disciplined investors who transformed
            their financial future.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="bg-gradient-to-br from-[#1F3A5F] to-[#2D4A6F] text-white rounded-lg p-6 sm:p-8 md:p-12 mb-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map(
                    (_, i) => (
                      <span
                        key={i}
                        className="text-[#D4AF37] text-xl"
                      >
                        ★
                      </span>
                    )
                  )}
                </div>

                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].text}"
                </p>

                <div className="border-t border-white/20 pt-6">
                  <p className="font-heading text-lg font-semibold mb-1">
                    {testimonials[activeIndex].name}
                  </p>

                  <p className="text-gray-300 text-sm">
                    {testimonials[activeIndex].title} •{" "}
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="flex-shrink-0 bg-[#D4AF37] text-[#1F3A5F] p-2.5 sm:p-3 rounded-full hover:bg-[#E8CFA0] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 min-w-0">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-[#D4AF37] w-6 sm:w-8"
                          : "bg-[#E8E4DF] w-2"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="flex-shrink-0 bg-[#D4AF37] text-[#1F3A5F] p-2.5 sm:p-3 rounded-full hover:bg-[#E8CFA0] transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Testimonial Stats */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#E8E4DF]">
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-[#1F3A5F] mb-2">
                  1000+
                </p>
                <p className="text-[#1F3A5F]/80">
                  Students Empowered
                </p>
              </div>

              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-[#1F3A5F] mb-2">
                  4.9/5
                </p>
                <p className="text-[#1F3A5F]/80">
                  Average Rating
                </p>
              </div>

              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-[#1F3A5F] mb-2">
                  95%
                </p>
                <p className="text-[#1F3A5F]/80">
                  Completion Rate
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="bg-[#F9F7F4] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-12 text-center">
              What Our Students Say
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {testimonials.map((testimonial, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="h-full"
              >
                <div className="bg-white border border-[#E8E4DF] rounded-lg p-6 sm:p-8 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="text-[#D4AF37]"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[#1F3A5F]/80 text-sm leading-relaxed mb-6 flex-1">
                    "{testimonial.text}"
                  </p>

                  {/* Student Information */}
                  <div className="mt-auto">
                    <p className="font-semibold text-[#1F3A5F] text-sm">
                      {testimonial.name}
                    </p>

                    <p className="text-[#1F3A5F]/60 text-xs mt-1">
                      {testimonial.title} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F3A5F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Join Our Community of Disciplined Investors
            </h2>

            <p className="text-gray-200 mb-8 md:mb-10">
              Start your transformation journey with expert mentorship and
              structured education.
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#D4AF37] text-[#1F3A5F] font-medium hover:bg-[#E8CFA0] transition-colors"
            >
              Enroll Now
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}