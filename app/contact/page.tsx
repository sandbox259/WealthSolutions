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
      <section className="bg-gradient-to-b from-[#0F1E3F] to-[#213A56] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Let’s explore how we can support your next phase of growth.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="bg-[#F8F6F2] py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-16">

            {/* LEFT COLUMN — CONTEXT */}
            <FadeIn>
              <div className="space-y-10">

                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#0F1E3F] mb-6">
                    Before You Reach Out
                  </h2>

                  <div className="space-y-6 text-[#1A1A1A] leading-relaxed">
                    <p>
                      <span className="font-semibold text-[#213A56]">
                        Founder or investor?
                      </span>{" "}
                      Share your business stage and capital objectives.
                    </p>

                    <p>
                      <span className="font-semibold text-[#213A56]">
                        Exploring an opportunity?
                      </span>{" "}
                      Provide a short overview of company profile and timeline.
                    </p>

                    <p>
                      <span className="font-semibold text-[#213A56]">
                        General inquiry?
                      </span>{" "}
                      We welcome thoughtful conversations around India’s investment landscape.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#E5E2DC] pt-8">
                  <p className="text-[#1A1A1A] leading-relaxed">
                    All discussions are treated with strict confidentiality.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* RIGHT COLUMN — FORM */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">

                <h2 className="font-heading text-2xl font-semibold text-[#0F1E3F] mb-8">
                  Send a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
                    <p className="text-green-800 text-sm">
                      Thank you. We will respond shortly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <label className="block text-sm font-medium text-[#0F1E3F] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E2DC] rounded focus:outline-none focus:border-[#CDAA80]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0F1E3F] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E2DC] rounded focus:outline-none focus:border-[#CDAA80]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0F1E3F] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E2DC] rounded focus:outline-none focus:border-[#CDAA80]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0F1E3F] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E2DC] rounded focus:outline-none focus:border-[#CDAA80]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0F1E3F] text-white font-medium hover:bg-[#213A56] transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-center text-[#1A1A1A]/70">
                    Your information will remain confidential.
                  </p>

                </form>
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F1E3F] text-white py-16 md:py-24">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-6">
              Let’s begin a conversation.
            </h2>

            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-[#CDAA80] text-[#0F1E3F] font-medium hover:bg-[#997953] transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
