"use client"

import Link from "next/link"
import FadeIn from "@/components/FadeIn"
import { FaYoutube } from "react-icons/fa6"

export default function Testimonials() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1F3A5F] to-[#2D4A6F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Success Stories
          </h1>

          <p className="text-gray-200 max-w-2xl">
            Hear from our community of disciplined investors who transformed their financial future.
          </p>
        </div>
      </section>

      {/* YOUTUBE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT COLUMN */}
            <FadeIn>
              <div>

                <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight mb-6">
                  Real Stories.
                  <br />
                  Real Growth.
                  <br />
                  Real Results.
                </h2>

                <p className="text-[#1F3A5F]/80 text-lg leading-relaxed">
                  Nothing speaks louder than genuine client
                  experiences.
                </p>

                <p className="text-[#1F3A5F]/80 text-lg leading-relaxed mt-6">
                 Explore our collection of live video testimonials to hear directly from individuals who have experienced the educational support of Nivesh Nirnay Solutions. Discover how structured learning, disciplined decision-making, and a systematic approach have helped them to become more confident traders.
                </p>

                <p className="text-[#1F3A5F]/80 text-lg leading-relaxed mt-6">
                Real people. Real experiences. Honest feedback.
                </p>
                {/* <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                    <span className="text-[#1F3A5F]/80 leading-tight">
                      Educational Videos
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                    <span className="text-[#1F3A5F]/80">
                      Market Insights
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                    <span className="text-[#1F3A5F]/80">
                      Upcoming Testimonial Series
                    </span>
                  </div>

                </div> */}

              </div>
            </FadeIn>

            {/* RIGHT COLUMN */}
            <FadeIn delay={0.15}>
              <div className="rounded-3xl border border-[#E8E4DF] bg-[#F9F7F4] p-12 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

                <div className="flex flex-col items-center text-center">

                  {/* YouTube Icon */}
                  {/* <div className="w-24 h-24 rounded-full bg-[#D4AF37] flex items-center justify-center mb-8">

                    <svg
                      className="w-11 h-11 text-[#1F3A5F]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.6 32.6 0 0 0 0 12a32.6 32.6 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c2 .5 9.3.5 9.3.5s7.3 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.6 32.6 0 0 0 24 12a32.6 32.6 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z" />
                    </svg>

                  </div> */}

                  {/* YouTube Icon */}
                  <div className="w-24 h-24 rounded-full bg-[#D4AF37]/15 flex items-center justify-center mb-8">
                    <FaYoutube
                      className="w-11 h-11 text-[#1F3A5F]"
                    />
                  </div>

                  <h3 className="font-heading text-3xl font-semibold text-[#1F3A5F] mb-5">
                    Explore Our Testimonial Series on Youtube
                    {/* <br />
                    YouTube Channel */}
                  </h3>

                  <p className="text-[#1F3A5F]/75 leading-8 mb-10">
                      Explore our YouTube Testimonial Series to hear authentic feedback and discover real learning journeys with Nivesh Nirnay Solutions. Click the button below to watch the complete series.
                  </p>

                  <a
                    href="https://www.youtube.com/@niveshnirnaysolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto px-8 py-3 bg-[#D4AF37] text-[#1F3A5F] font-medium hover:bg-[#E8CFA0] transition-colors"
                  >
                    Watch Testimonial Series
                  </a>

                </div>

              </div>
            </FadeIn>

          </div>
        </div>
      </section>
      {/* IMPACT STATS */}
      <section className="py-24 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#1F3A5F] tracking-tight">
                Trusted by a Growing Community
              </h2>

              <p className="mt-6 text-lg text-[#1F3A5F]/75 max-w-2xl mx-auto leading-8">
                Our commitment to structured financial education has empowered
                learners across different backgrounds to develop confidence and
                discipline in their investment journey.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="bg-white rounded-2xl border border-[#E8E4DF] shadow-sm p-10 text-center hover:shadow-lg transition-all duration-300">

                <h3 className="font-heading text-5xl font-bold text-[#1F3A5F] mb-3">
                  1000+
                </h3>

                <p className="text-[#1F3A5F]/75 text-lg">
                  Students Empowered
                </p>

              </div>

              <div className="bg-white rounded-2xl border border-[#E8E4DF] shadow-sm p-10 text-center hover:shadow-lg transition-all duration-300">

                <h3 className="font-heading text-5xl font-bold text-[#1F3A5F] mb-3">
                  4.9/5
                </h3>

                <p className="text-[#1F3A5F]/75 text-lg">
                  Average Rating
                </p>

              </div>

              <div className="bg-white rounded-2xl border border-[#E8E4DF] shadow-sm p-10 text-center hover:shadow-lg transition-all duration-300">

                <h3 className="font-heading text-5xl font-bold text-[#1F3A5F] mb-3">
                  95%
                </h3>

                <p className="text-[#1F3A5F]/75 text-lg">
                  Completion Rate
                </p>

              </div>

            </div>
          </FadeIn>

        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#1F3A5F] text-white py-20 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">

            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              Join Our Community of Disciplined Investors
            </h2>

            <p className="text-gray-200 text-lg leading-8 mb-10">
              Begin your investment journey with structured education,
              practical insights, and expert mentorship designed to help you
              make informed financial decisions with confidence.
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