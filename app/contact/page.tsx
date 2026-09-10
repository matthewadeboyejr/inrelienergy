"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, MapPin, Phone, Mail, Clock, CheckCircle2, ChevronRight, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col selection:bg-[#901A1E] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Top Breadcrumb Header */}
      <section className="pt-8 pb-4 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#901A1E]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Editorial Headline Hero */}
      <section className="pb-12 md:pb-16 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto space-y-5">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>CUSTOMER CARE &amp; INQUIRIES</span>
          </div>

          {/* Clean Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal tracking-tight text-slate-950 leading-[1.2] lg:leading-[1.15] max-w-5xl">
            Connect with our <span className="text-[#901A1E] font-medium">engineering and utility consulting team</span> for turnkey energy and metering solutions.
          </h1>
        </div>
      </section>

      {/* Main Content & Interactive Bento Section */}
      <section className="pb-20 md:pb-28 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto space-y-12">
          {/* Top Bento Row: Transmission Image + Get In Touch Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Featured Transmission Substation Photo */}
            <div className="lg:col-span-6 relative rounded-[36px] overflow-hidden min-h-[360px] sm:min-h-[420px] shadow-xl bg-slate-900 group">
              <Image
                src="/whatweoffer3.jpg"
                alt="Inreli Power Grid Transmission Lines"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono font-bold text-red-300 uppercase tracking-widest block mb-1">
                  HEAD OFFICE &amp; OPERATIONS
                </span>
                <p className="text-sm sm:text-base font-semibold">
                  Inreli Energy Limited • Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Right: Get In Touch Card (Verbatim writeup and contact points) */}
            <div className="lg:col-span-6 p-8 sm:p-12 rounded-[36px] bg-white border border-slate-200/80 shadow-md flex flex-col justify-between space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-4">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal mb-8">
                  To make enquiries or to reach our customer care you can call us on the phone number below or fill the form and we will give you a call soon.
                </p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        HEAD OFFICE LOCATION
                      </span>
                      <p className="text-sm font-semibold text-slate-900 leading-snug">
                        6 Waheed Akanni Street, Off Bayo Oyewale Street, Ago Palace Way, Okota, Lagos.
                      </p>
                    </div>
                  </div>

                  {/* Phone Lines */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        DIRECT PHONE LINES
                      </span>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <a
                          href="tel:+2349162402271"
                          className="text-sm font-bold text-slate-900 hover:text-[#901A1E] transition-colors"
                        >
                          +2349162402271
                        </a>
                        <span className="text-slate-300">•</span>
                        <a
                          href="tel:091194000025"
                          className="text-sm font-bold text-slate-900 hover:text-[#901A1E] transition-colors"
                        >
                          091194000025
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* SHS Customer Service Phone Numbers */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-900 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#901A1E]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold text-[#901A1E] uppercase tracking-wider block">
                        SHS CUSTOMER SERVICE
                      </span>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-bold text-slate-900">
                        <a href="tel:091194000025" className="hover:text-[#901A1E] transition-colors">
                          091194000025
                        </a>
                        <span className="text-slate-400">•</span>
                        <a href="tel:09042804796" className="hover:text-[#901A1E] transition-colors">
                          09042804796
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        EMAIL CORRESPONDENCE
                      </span>
                      <a
                        href="mailto:info@inrelienergy.com"
                        className="text-sm font-bold text-slate-900 hover:text-[#901A1E] transition-colors"
                      >
                        info@inrelienergy.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Call Action */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+2349162402271"
                  className="px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#901A1E] hover:bg-[#731317] shadow-xl shadow-[#901A1E]/20 transition-all inline-flex items-center gap-2"
                >
                  <span>Call Customer Care</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/2349162402271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bento Row: Contact Form on Left + Embedded Interactive Map on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-6 p-8 sm:p-12 rounded-[36px] bg-white border border-slate-200/80 shadow-md">
              <h3 className="text-2xl font-bold text-slate-950 mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 mb-8">
                Fill out the form below and our team will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you for reaching out. An Inreli energy representative will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Fields (First, Last) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
                      <span>Name</span>
                      <span className="text-[#901A1E]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#901A1E]/30 focus:border-[#901A1E] transition-all"
                        />
                        <span className="text-[10px] text-slate-400 mt-1 block">First</span>
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#901A1E]/30 focus:border-[#901A1E] transition-all"
                        />
                        <span className="text-[10px] text-slate-400 mt-1 block">Last</span>
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        <span>Email</span>
                        <span className="text-[#901A1E]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#901A1E]/30 focus:border-[#901A1E] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#901A1E]/30 focus:border-[#901A1E] transition-all"
                      />
                    </div>
                  </div>

                  {/* Comment or Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800">
                      Comment or Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your metering, solar, or mini-grid project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#901A1E]/30 focus:border-[#901A1E] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#901A1E] hover:bg-[#731317] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#901A1E]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Embedded Interactive Google Map */}
            <div className="lg:col-span-6 rounded-[36px] overflow-hidden shadow-xl bg-white border border-slate-200/80 flex flex-col justify-between">
              <div className="p-6 sm:p-8 pb-4">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-slate-950">
                    Location &amp; Facility Map
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold">
                    LAGOS HEADQUARTERS
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Ago Palace Way, Cele, Lagos State, Nigeria
                </p>
              </div>

              {/* Google Map iframe */}
              <div className="relative w-full h-[380px] sm:h-[420px] bg-slate-100">
                <iframe
                  title="Inreli Energy Location Map"
                  src="https://maps.google.com/maps?q=6%20Waheed%20Akanni%20Street,%20Ago%20Palace%20Way,%20Lagos,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <Clock className="w-4 h-4 text-[#901A1E]" />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                </div>

                <a
                  href="https://maps.google.com/?q=6+Waheed+Akanni+Street,+Ago+Palace+Way,+Lagos,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#901A1E] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Corporate Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </main>
  );
}
