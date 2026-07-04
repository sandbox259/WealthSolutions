"use client"

import { useState } from "react"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", company: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1B4965] to-[#3E7C8F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-100 max-w-2xl">
            Let's discuss how our educational programs can help you build disciplined market knowledge.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-16">

            {/* LEFT COLUMN — CONTEXT */}
            <FadeIn>
              <div className="space-y-10">

                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#1B4965] mb-6">
                    Get in Touch With Us
                  </h2>

                  <div className="space-y-6 text-[#1A1F2E] leading-relaxed">
                    <p>
                      <span className="font-semibold text-[#3E7C8F]">
                        Interested in learning?
                      </span>{" "}
                      Tell us which programs interest you and your learning goals.
                    </p>

                    <p>
                      <span className="font-semibold text-[#3E7C8F]">
                        Corporate training?
                      </span>{" "}
                      We offer customized programs for teams and organizations.
                    </p>

                    <p>
                      <span className="font-semibold text-[#3E7C8F]">
                        General inquiry?
                      </span>{" "}
                      We welcome questions about financial education and market learning.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#E8EBF0] pt-8">
                  <p className="text-[#1A1F2E] leading-relaxed">
                    All inquiries are treated confidentially. We'll respond within 24-48 hours.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* RIGHT COLUMN — FORM */}
            <FadeIn delay={0.1}>
              <div className="bg-[#F5F7FA] rounded-2xl p-8 md:p-10 shadow-sm">

                <h2 className="font-heading text-2xl font-semibold text-[#1B4965] mb-8">
                  Send a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
                    <p className="text-green-800 text-sm">
                      Thank you for reaching out. We will respond shortly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <label className="block text-sm font-medium text-[#1B4965] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8EBF0] rounded focus:outline-none focus:border-[#16A39E]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B4965] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8EBF0] rounded focus:outline-none focus:border-[#16A39E]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B4965] mb-2">
                      Interested Programs
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g., Bullion Blueprint, Securities Education"
                      className="w-full px-4 py-3 border border-[#E8EBF0] rounded focus:outline-none focus:border-[#16A39E]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B4965] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8EBF0] rounded focus:outline-none focus:border-[#16A39E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1B4965] text-white font-medium hover:bg-[#3E7C8F] transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-center text-[#1A1F2E]/70">
                    Your information will remain confidential.
                  </p>

                </form>
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1B4965] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to transform your financial knowledge?
            </h2>

            <Link
              href="/services"
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
