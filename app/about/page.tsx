"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, ShieldCheck, Award, Phone, Check, ChevronRight } from "lucide-react";

const aboutCards = [
  {
    id: "01",
    title: "Production Experience & Meter Assembly",
    description:
      "INRELI Ltd has rich production experience in manufacture of Prepaid and Postpaid meters for on-grid and Off-grid projects in the BS and DIN Rail configurations. Our products include Transformer, Maximum Demand Meters, Data Concentrator Units, and Solar products and components having secured Original Equipment Manufacturer (OEM) partnership with select Chinese Quality suppliers.",
    image: "/who2.jpg",
    alt: "Inreli Assembled Smart Meters Stack",
  },
  {
    id: "02",
    title: "DisCo Deployments Nationwide",
    description:
      "Our meters are employed at numerous Nigerian Electricity Distribution Companies including Ibadan Distribution (IBEDC), Abuja Electricity Distribution Company (AEDC) and commencing supply and installation at BEDC and PHEDC amongst others.",
    image: "/whatweoffer1.jpg",
    alt: "Inreli DisCo Meter Supply",
  },
  {
    id: "03",
    title: "Renewable Energy & Solar Home Systems",
    description:
      "In addition, INRELI is a major new entrant in the Renewables Energy business having introduced its brand of solar inverters and batteries to the Rural Electrification Agency in Nigeria for Mini-Grids and Solar Home Systems. Our range of solar equipment and batteries are also available for retail sales. We are available to partner with OEM companies to expand our product range especially Solar Panels, All-In-One systems etc.",
    image: "/whatweoffer3.jpg",
    alt: "Inreli Solar Inverters and Storage",
  },
  {
    id: "04",
    title: "450KW & 1MW Mini-Grid Infrastructure",
    description:
      "We have two Mini-Grid projects under development dimensioned at 450KW and 1MW serving 600 and 1200 dwellings respectively. The preliminary project preparation has been done and Turnkey Project arrangements are being designed and negotiated.",
    image: "/whatweoffer2.jpg",
    alt: "Inreli Clean Solar Mini-Grid",
  },
];

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

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
            <span className="text-[#901A1E]">About Us</span>
          </div>
        </div>
      </section>

      {/* Hero Bento Section matching Homepage Editorial Design */}
      <section className="pb-16 md:pb-24 px-2 sm:px-4 lg:px-6 bg-[#f8f9fa] text-slate-900 w-full">
        <div className="w-full max-w-[1600px] mx-auto">
          {/* Top Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
              <Award className="w-3.5 h-3.5" />
              <span>Licensed Local Meter Manufacturer &amp; Renewable Energy Pioneer</span>
            </div>
          </div>

          {/* Full-width Big Editorial Headline with Inline Image Capsule (Geist 400, 60px, 78px) */}
          <div className="mb-14 w-full">
            <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[60px] font-normal tracking-tight text-slate-950 leading-[1.25] lg:leading-[78px] w-full">
              We provide innovative{" "}
              <span className="inline-flex align-middle mx-1 sm:mx-2 relative w-16 sm:w-24 lg:w-28 h-8 sm:h-12 lg:h-13 rounded-full overflow-hidden shadow-sm">
                <Image
                  src="/who2.jpg"
                  alt="Inreli Smart Meters"
                  fill
                  sizes="(max-width: 768px) 100px, 120px"
                  className="object-cover object-center"
                />
              </span>{" "}
              technological solutions in the power sector. Dedicated to Indigenous Meter Manufacturing, Clean Solar Mini-Grids, and Eliminating Utility Losses across Nigeria.
            </h1>
          </div>

          {/* 3 Bento Cards Grid styled consistently with Homepage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 (Left): Inreli Crimson Signature Card */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#901A1E] via-[#85161a] to-[#6e1014] text-white flex flex-col justify-between shadow-xl shadow-[#901A1E]/15 hover:shadow-2xl hover:shadow-[#901A1E]/25 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg sm:text-xl font-bold text-white/95">
                    Years of Experience
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300 animate-pulse"></span>
                </div>

                <div className="inline-block px-4 py-1 rounded-full text-xs font-bold text-white mb-8 bg-white/15 backdrop-blur-sm">
                  Licensed LMMA
                </div>

                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-4">
                  10+ <span className="text-2xl font-semibold text-red-200">Years</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-red-100 leading-relaxed font-light pt-4 border-t border-white/20">
                <strong className="text-white font-semibold">INRELI Limited</strong> is a reputable Meter Manufacturing and Renewable Energy Company situated at{" "}
                <span className="text-white font-medium underline decoration-red-300/40">
                  6 Waheed Akanni Street, Ago Palace Way, Cele, Lagos state, Nigeria
                </span>
                .
              </p>
            </div>

            {/* Card 2 (Center): Clean Image Card */}
            <div className="relative rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[420px] shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 group bg-slate-100">
              <Image
                src="/who1.jpg"
                alt="Inreli Engineer Testing Meters"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Card 3 (Right): Regulatory Credentials & Tags */}
            <div className="p-8 sm:p-10 rounded-[32px] bg-white text-slate-900 flex flex-col justify-between shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                  What We Do Best
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  We are a Licensed Local Meter Manufacturer/Assembler (LMMA) by{" "}
                  <strong className="text-slate-900 font-semibold">Nigeria Electricity Regulatory Commission (NERC)</strong>,{" "}
                  <strong className="text-slate-900 font-semibold">Nigeria Electricity Management Services Agency (NEMSA)</strong> and
                  other Regulatory Agencies and we are <strong className="text-[#901A1E] font-bold">SON certified</strong>.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <button
                    onClick={handleOpenQuote}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#901A1E] hover:text-[#731317] transition-colors cursor-pointer group"
                  >
                    <span className="underline underline-offset-4">Get Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="tel:+2349162402271"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors pl-3 border-l border-slate-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#901A1E]" />
                    <span>+234 916 240 2271</span>
                  </a>
                </div>
              </div>

              {/* Overlapping Pill Hashtags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-slate-800 shadow-sm -rotate-1 hover:rotate-0 hover:bg-[#901A1E] hover:text-white transition-all">
                  #SmartMeters
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#901A1E]/10 text-xs font-semibold text-[#901A1E] shadow-sm rotate-2 hover:rotate-0 transition-all">
                  #NERCLicensed
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-slate-800 shadow-sm -rotate-2 hover:rotate-0 hover:bg-[#901A1E] hover:text-white transition-all">
                  #CleanEnergy
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-slate-800 shadow-sm rotate-1 hover:rotate-0 hover:bg-[#901A1E] hover:text-white transition-all">
                  #SolarMiniGrid
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section with the Complete Inreli Company Profile */}
      <section className="py-12 md:py-20 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto rounded-[36px] sm:rounded-[44px] bg-[#11151c] text-white p-6 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (Sticky with Company Profile) */}
            <div className="lg:col-span-6 lg:sticky lg:top-24 flex flex-col items-start justify-between">
              <div>
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E] text-white text-xs font-bold shadow-sm mb-6">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>COMPANY PROFILE</span>
                </div>

                {/* Headline (Geist 400, 60px, 78px line-height) */}
                <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal tracking-tight text-white leading-[1.3] lg:leading-[78px] mb-6">
                  About Inreli
                </h2>

                {/* Complete Paragraphs of Inreli Writeup */}
                <div className="space-y-5 text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal mb-8">
                  <p>
                    INRELI Limited is a reputable Meter Manufacturing and Renewable Energy Company situated at 6 Waheed Akanni Street, Ago Palace Way, Cele, Lagos state, Nigeria.
                  </p>

                  <p>
                    We are a Licensed Local Meter Manufacturer/Assembler (LMMA) by Nigeria Electricity Regulatory Commission (NERC), Nigeria Electricity Management Services Agency (NEMSA) and other Regulatory Agencies and we are SON certified.
                  </p>

                  <p>
                    INRELI Ltd has rich production experience in manufacture of Prepaid and Postpaid meters for on-grid and Off-grid projects in the BS and DIN Rail configurations. Our products include Transformer, Maximum Demand Meters, Data Concentrator Units, and Solar products and components having secured Original Equipment Manufacturer (OEM) partnership with select Chinese Quality suppliers.
                  </p>

                  <p>
                    Our meters are employed at numerous Nigerian Electricity Distribution Companies including Ibadan Distribution (IBEDC), Abuja Electricity Distribution Company (AEDC) and commencing supply and installation at BEDC and PHEDC amongst others.
                  </p>

                  <p>
                    In addition, INRELI is a major new entrant in the Renewables Energy business having introduced its brand of solar inverters and batteries to the Rural Electrification Agency in Nigeria for Mini-Grids and Solar Home Systems. Our range of solar equipment and batteries are also available for retail sales. We are available to partner with OEM companies to expand our product range especially Solar Panels, All-In-One systems etc.
                  </p>

                  <p className="text-slate-300">
                    We have two Mini-Grid projects under development dimensioned at 450KW and 1MW serving 600 and 1200 dwellings respectively. The preliminary project preparation has been done and Turnkey Project arrangements are being designed and negotiated.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleOpenQuote}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-xl transition-all cursor-pointer group"
              >
                <span>Contact Us</span>
                <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            </div>

            {/* Right Column (Scrolling Cards Stack with Photos) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {aboutCards.map((card) => (
                <div
                  key={card.id}
                  className="p-7 sm:p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Card Top Title & Number */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight max-w-xs">
                      {card.title}
                    </h3>
                    <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400">
                      {card.id}
                    </span>
                  </div>

                  {/* Card Body: Text & Button on Left + Clean Image on Right */}
                  <div className="pt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    {/* Text & Button */}
                    <div className="sm:col-span-6 flex flex-col justify-between space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {card.description}
                      </p>

                      <div>
                        <button
                          onClick={handleOpenQuote}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-[#901A1E] transition-colors cursor-pointer group"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>

                    {/* Clean Image Container */}
                    <div className="sm:col-span-6 relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 shadow-inner group">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 260px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee / Grid */}


      {/* Corporate Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </main>
  );
}
