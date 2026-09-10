"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, ShieldCheck, Award, Phone, Check, ChevronRight, Cpu, Sun } from "lucide-react";

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
        <div className="w-full max-w-[1600px] mx-auto space-y-12">
          {/* Top Badge */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
              <Award className="w-3.5 h-3.5" />
              <span>Licensed Local Meter Manufacturer &amp; Renewable Energy Pioneer</span>
            </div>

            {/* Clean Big Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal tracking-tight text-slate-950 leading-[1.2] lg:leading-[1.15] max-w-5xl">
              We provide innovative <span className="text-[#901A1E] font-medium">technological solutions</span> in the power sector. Dedicated to indigenous meter manufacturing, clean solar mini-grids, and eliminating utility losses across Nigeria.
            </h1>
          </div>

          {/* New Premium Bento Architecture */}
          <div className="space-y-6">
            {/* Top Bento Row: 7-col Main Profile Card + 5-col Facility Photo Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Main Profile Card (7 cols) */}
              <div className="lg:col-span-7 p-8 sm:p-12 rounded-[36px] bg-[#11151c] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                {/* Background ambient glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#901A1E]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-red-200">
                      <Sparkles className="w-3.5 h-3.5 text-[#901A1E]" />
                      <span>LICENSED LMMA &amp; ENERGY LEADER</span>
                    </div>

                    <span className="inline-flex items-center gap-2 text-xs text-emerald-400 font-mono font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Laboratory &amp; Production Lines
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        10+
                      </span>
                      <span className="text-xl sm:text-2xl font-light text-slate-300">
                        Years of Engineering &amp; Manufacturing Excellence
                      </span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal max-w-2xl">
                      <strong className="text-white font-semibold">INRELI Limited</strong> is a reputable Meter Manufacturing and Renewable Energy Company situated at{" "}
                      <span className="text-white font-medium underline decoration-[#901A1E]">
                        6 Waheed Akanni Street, Ago Palace Way, Okota, Lagos
                      </span>
                      . We are a Licensed Local Meter Manufacturer/Assembler (LMMA) by{" "}
                      <strong className="text-white font-semibold">NERC</strong> and{" "}
                      <strong className="text-white font-semibold">NEMSA</strong>, fully{" "}
                      <strong className="text-red-300 font-semibold">SON certified</strong>.
                    </p>
                  </div>

                  {/* Key Certified Pillars Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <span className="text-[11px] font-mono font-bold text-white block">NERC</span>
                      <span className="text-[10px] text-slate-400">Licensed LMMA</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <span className="text-[11px] font-mono font-bold text-white block">NEMSA</span>
                      <span className="text-[10px] text-slate-400">Type Certified</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <span className="text-[11px] font-mono font-bold text-white block">SON</span>
                      <span className="text-[10px] text-slate-400">Quality Assured</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <span className="text-[11px] font-mono font-bold text-white block">STS / DLMS</span>
                      <span className="text-[10px] text-slate-400">Standard Spec</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#901A1E] hover:text-white shadow-xl transition-all cursor-pointer group"
                  >
                    <span>Connect With Us</span>
                    <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-transform">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>

                  <a
                    href="tel:+2349162402271"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#901A1E]" />
                    <span>+234 916 240 2271</span>
                  </a>
                </div>
              </div>

              {/* Right Facility Photo Showcase (5 cols) */}
              <div className="lg:col-span-5 relative rounded-[36px] overflow-hidden min-h-[380px] lg:min-h-[460px] shadow-2xl bg-slate-900 group">
                <Image
                  src="/who1.jpg"
                  alt="Inreli Engineer Calibrating Smart Meters in Lagos Facility"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
                
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-white">
                    FACTORY &amp; ASSEMBLY LAB
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#901A1E] text-white text-[10px] font-bold">
                    LAGOS, NIGERIA
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[11px] font-mono font-bold text-red-300 uppercase tracking-wider block">
                    PRECISION CALIBRATION BENCH
                  </span>
                  <p className="text-base font-semibold leading-snug">
                    Type Testing, Assembly, and Optical Port Calibration
                  </p>
                  <p className="text-xs text-slate-300 font-light">
                    Strict compliance with NEMSA &amp; SON metrology regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bento Row: 3 Distinct Capability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 01: Smart Metering */}
              <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#901A1E]/30 transition-all duration-300 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 tracking-tight mb-2">
                      Smart Meters &amp; AMI Systems
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Prepaid STS split meters (IRL110, IRL310), Maximum Demand smart meters, and Data Concentrator Units with GPRS and PLC telemetry.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#901A1E]">
                  <span>Certified Hardware</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 02: Solar Mini-Grids */}
              <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#901A1E]/30 transition-all duration-300 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 tracking-tight mb-2">
                      Clean Solar Mini-Grids &amp; SHS
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      10 kW to 10MW decentralized generation, modular inverter stations, lithium energy storage, and off-grid community electrification.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#901A1E]">
                  <span>Renewable Infrastructure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 03: Loss Elimination & Utility Services */}
              <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#901A1E]/30 transition-all duration-300 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 tracking-tight mb-2">
                      Loss Reduction &amp; Revenue Protection
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Automated line-loss analysis, transformer metering, sub-metering token vending software, and nationwide installation capabilities.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#901A1E]">
                  <span>Utility Assurance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
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
                    INRELI Limited is a reputable Meter Manufacturing and Renewable Energy Company situated at 6 Waheed Akanni Street, Off Bayo Oyewale Street, Ago Palace Way, Okota, Lagos.
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#901A1E] hover:text-white shadow-xl transition-all cursor-pointer group"
              >
                <span>Contact Us</span>
                <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>

            {/* Right Column (Scrolling Cards Stack with Photos only) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {aboutCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-[32px] overflow-hidden shadow-2xl relative h-72 sm:h-96 w-full group"
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
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
