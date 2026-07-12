"use client"

import { useState } from "react"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1F3A5F] to-[#2D4A6F] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Have questions? We'd love to hear from you. Reach out to learn more about our programs and mentorship.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* LEFT - INFO */}
            <FadeIn>
              <div className="space-y-10">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#1F3A5F] mb-6">
                    We're Here to Help
                  </h2>
                  <div className="space-y-6 text-[#1F3A5F]/80 leading-relaxed">
                    <p>
                      <span className="font-semibold text-[#1F3A5F]">Interested in our programs?</span> Tell us which investment education path interests you and we'll provide more details.
                    </p>
                    <p>
                      <span className="font-semibold text-[#1F3A5F]">Corporate training?</span> We offer customized investment education programs for organizations and teams.
                    </p>
                    <p>
                      <span className="font-semibold text-[#1F3A5F]">General inquiries?</span> We'd love to discuss how Nivesh Nirnay Solutions can help your financial learning journey.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#E8E4DF] pt-8">
                  <p className="text-[#1F3A5F]/80">
                    We typically respond to all inquiries within 24-48 hours. Thank you for your interest in disciplined investment education.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4 pt-4">
                  <div>
                    <p className="text-sm text-[#1F3A5F]/60">Email</p>
                    <p className="text-[#1F3A5F] font-semibold">niveshnirnaysolutions@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#1F3A5F]/60">Phone</p>
                    <p className="text-[#1F3A5F] font-semibold">+91 8169305380</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT - FORM */}
            <FadeIn delay={0.1}>
              <div className="bg-[#F9F7F4] rounded-2xl p-8 md:p-10">
                <h2 className="font-heading text-2xl font-semibold text-[#1F3A5F] mb-8">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
                    <p className="text-green-800 text-sm">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1F3A5F] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E4DF] rounded-lg focus:outline-none focus:border-[#D4AF37] bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1F3A5F] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E4DF] rounded-lg focus:outline-none focus:border-[#D4AF37] bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1F3A5F] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E4DF] rounded-lg focus:outline-none focus:border-[#D4AF37] bg-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1F3A5F] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E4DF] rounded-lg focus:outline-none focus:border-[#D4AF37] bg-white"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1F3A5F] text-white font-medium rounded-lg hover:bg-[#2D4A6F] transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-center text-[#1F3A5F]/60">
                    Your information will remain confidential.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
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
              Explore our programs and join thousands of disciplined investors.
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
