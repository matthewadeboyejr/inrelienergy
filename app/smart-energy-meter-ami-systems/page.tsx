"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, Cpu, ChevronRight, Phone } from "lucide-react";

export default function SmartEnergyMeterAmiPage() {
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
            <Link href="/#services" className="hover:text-slate-900 transition-colors">
              Solutions &amp; Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#901A1E]">Smart Energy Meter &amp; AMI Systems</span>
          </div>
        </div>
      </section>

      {/* Editorial Headline Hero */}
      <section className="pb-12 md:pb-16 px-2 sm:px-4 lg:px-6 w-full">
        <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>METERING SOLUTIONS &amp; TELEMETRY</span>
          </div>

          {/* Clean Centered Editorial Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-tight text-slate-950 leading-snug lg:leading-[1.3]">
            Advanced metering infrastructure enabling two-way telemetry, automated loss analysis, and real-time utility control.
          </h1>
        </div>
      </section>

      {/* Main Sticky-Scroll Section matching Homepage Architecture */}
      <section className="pb-20 md:pb-28 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto rounded-[36px] sm:rounded-[44px] bg-[#11151c] text-white p-6 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (Sticky with Intro & Direct Actions) */}
            <div className="lg:col-span-6 lg:sticky lg:top-24 flex flex-col items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E] text-white text-xs font-bold shadow-sm mb-6">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>TECHNICAL ARCHITECTURE</span>
                </div>

                <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal tracking-tight text-white leading-[1.3] lg:leading-[78px] mb-6">
                  Smart Energy Meter &amp; AMI Systems
                </h2>

                {/* Complete Verbatim Top Section Writeup */}
                <div className="space-y-5 text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal mb-8">
                  <p>
                    A <strong className="text-white font-semibold">Smart Energy Meter</strong> is an electronic device that records consumption of electric energy and communicates the information to the electricity supplier for monitoring and billing. Smart meters typically record energy hourly or more frequently, and report at least daily. Smart meters enable two-way communication between the meter and the central system. Such an advanced metering infrastructure (AMI) it enables two-way communication between the meter and the supplier. Communications from the meter to the network may be wireless, cellular communications, or via fixed wired connections such as power line carrier (PLC).
                  </p>

                  <p>
                    <strong className="text-white font-semibold">INRELI Limited Smart AMI system</strong> is a system for collecting and managing power consumption data. It is an integrated platform for data collection, data monitoring, data analysis and management. Relying on the map, with the principle of &ldquo;station-feeder-transformer-user&rdquo;, complete the data collection for the power supply side, power distribution side and power use side of the plant station, public transformer, special transformer and low voltage users, etc to provide real-time data support for meter reading, load control, advance electricity purchase, and power off and on services. Based on this, it can carry out such comprehensive applications as power analysis, load analysis, power quality analysis, and line loss analysis.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#901A1E] hover:text-white shadow-xl transition-all cursor-pointer group"
                >
                  <span>CONTACT US</span>
                  <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-transform">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>

                <a
                  href="tel:+2349162402271"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 border border-white/20 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#901A1E]" />
                  <span>+234 916 240 2271</span>
                </a>
              </div>
            </div>

            {/* Right Column (Scrolling Bento Cards with Verbatim Writeup & Photos) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Card 01: MDMS & HES Integration */}
              <div className="p-7 sm:p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight max-w-xs">
                    MDMS &amp; HES System Integration
                  </h3>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400">
                    01
                  </span>
                </div>

                <div className="pt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-7 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      <strong className="text-slate-900 font-semibold">Smart AMI integrates</strong> the functions of MDMS and HES and can read and monitor data of different types and devices with different protocols. Also it provides a rich and standard data interface for the rest of the business systems (ERP, GIS, BI, Billing) to fulfill the needs of business expansion.
                    </p>
                  </div>
                  <div className="sm:col-span-5 relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 shadow-inner group">
                    <Image
                      src="/whatweoffer1.jpg"
                      alt="Inreli Smart Meter Testing Bench"
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Card 02: Distributed Deployment & Network Security */}
              <div className="p-7 sm:p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight max-w-xs">
                    Distributed Deployment &amp; Hardware Security
                  </h3>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400">
                    02
                  </span>
                </div>

                <div className="pt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-7 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      With the distributed deployment and the load balancing method, the SmartAMI system can greatly improve the data processing capability. In terms of security, services and data can be secured through a comprehensive range of hardware and network protection.
                    </p>
                  </div>
                  <div className="sm:col-span-5 relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 shadow-inner group">
                    <Image
                      src="/who2.jpg"
                      alt="Inreli Smart STS Prepaid Meters"
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Card 03: Mobile On-Site Field Applications */}
              <div className="p-7 sm:p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight max-w-xs">
                    Mobile On-Site Applications
                  </h3>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400">
                    03
                  </span>
                </div>

                <div className="pt-5 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    At the same time, Our Smart AMI also provides mobile on-site application, which can effectively improve the efficiency of on-site services, thereby improving user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee / Grid */}
      <Partners />

      {/* Corporate Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </main>
  );
}
