"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, Sun, Zap, ChevronRight, Phone } from "lucide-react";

export default function MiniGridPage() {
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
            <span className="text-[#901A1E]">Mini-Grid</span>
          </div>
        </div>
      </section>

      {/* Editorial Headline Hero with Inline Capsule Image */}
      <section className="pb-12 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
            <Sun className="w-3.5 h-3.5" />
            <span>POWER GENERATION &amp; RENEWABLES</span>
          </div>

          {/* Full-width Big Editorial Headline with Inline Image Capsule (Geist 400, 60px, 78px) */}
          <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[60px] font-normal tracking-tight text-slate-950 leading-[1.25] lg:leading-[78px] w-full">
            Decentralized clean power{" "}
            <span className="inline-flex align-middle mx-1 sm:mx-2 relative w-16 sm:w-24 lg:w-28 h-8 sm:h-12 lg:h-13 rounded-full overflow-hidden shadow-sm">
              <Image
                src="/solar-home-systems.jpg"
                alt="Inreli Mini-Grid Array"
                fill
                sizes="(max-width: 768px) 100px, 120px"
                className="object-cover object-center"
              />
            </span>{" "}
            from 10 kW to 10MW, powering localized consumer networks and industrial mini-estates.
          </h1>
        </div>
      </section>

      {/* Main Sticky-Scroll Section matching Homepage 'What We Offer' Architecture */}
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
                  Mini-Grid
                </h2>

                {/* Complete Verbatim Top Section Writeup */}
                <div className="space-y-5 text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal mb-8">
                  <p>
                    A <strong className="text-white font-semibold">Mini Grid</strong>, also sometimes referred to as a &ldquo;micro grid or isolated grid&rdquo;, can be defined as a set of electricity generators and possibly energy storage systems interconnected to a distribution network that supplies electricity to a localized group of customers.&rdquo; They involve small-scale electricity generation (10 kW to 10MW) which serves a limited number of consumers via a distribution grid that can operate in isolation from national electricity transmission networks.
                  </p>

                  <p>
                    This power delivery architecture can be contrasted to a single customer system such as in the case of a solar home system (SHS). Where there are no distribution network interconnecting customers it can be connected to a centralized grid system, where electrical energy is transmitted over large distances from large central generators where local generators are generally not capable of meeting local demand.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleOpenQuote}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#901A1E] hover:text-white shadow-xl transition-all cursor-pointer group"
                >
                  <span>CONTACT US</span>
                  <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-transform">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>

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
              {/* Card 01: Core Architecture & SHS Comparison */}
              <div className="p-7 sm:p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight max-w-xs">
                    Autonomous Operation &amp; Grid Disconnection
                  </h3>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400">
                    01
                  </span>
                </div>

                <div className="pt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-7 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Mini-grids have a unique feature as they can operate autonomously without being connected to a centralized grid. However, the mini-grid may be designed to interconnect with the central grid which means it operates under normal conditions as part of the central grid with disconnection occurring only if power quality needs to be maintained.A mini grid, also sometimes referred to as a &ldquo;micro grid or isolated grid&rdquo;, can be defined as a set of electricity generators and possibly energy storage systems interconnected to a distribution network that supplies electricity to a localized group of customers.&rdquo;They involve small-scale electricity generation (10 kW to 10MW) which serves a limited number of consumers via a distribution grid that can operate in isolation from national electricity transmission networks.
                    </p>
                  </div>
                  <div className="sm:col-span-5 relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 shadow-inner group">
                    <Image
                      src="/solar-home-systems.jpg"
                      alt="Inreli Mini-Grid Plant"
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Card 02: Power Delivery vs SHS & Transmission */}
              <div className="p-7 sm:p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight max-w-xs">
                    Power Delivery Architecture vs. SHS
                  </h3>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400">
                    02
                  </span>
                </div>

                <div className="pt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-7 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      This power delivery architecture can be contrasted to a single customer system such as in the case of a solar home system (SHS). Where there are no distribution network interconnecting customers it can be connected to a centralized grid system, where electrical energy is transmitted over large distances from large central generators where local generators are generally not capable of meeting local demand.
                    </p>
                  </div>
                  <div className="sm:col-span-5 relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 shadow-inner group">
                    <Image
                      src="/whatweoffer2.jpg"
                      alt="Inreli Mini-Grid Power Network"
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Card 03: Small-Scale Generation & Isolated Transmission */}
              <div className="p-7 sm:p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight max-w-xs">
                    Isolated Transmission &amp; Local Demand
                  </h3>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400">
                    03
                  </span>
                </div>

                <div className="pt-5 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Mini-grids have a unique feature as they can operate autonomously without being connected to a centralized grid. However, the mini-grid may be designed to interconnect with the central grid which means it operates under normal conditions as part of the central grid with disconnection occurring only if power quality needs to be maintained. A mini grid, also sometimes referred to as a &ldquo;micro grid or isolated grid&rdquo;, can be defined as a set of electricity generators and possibly energy storage systems interconnected to a distribution network that supplies electricity to a localized group of customers.&rdquo; They involve small-scale electricity generation (10 kW to 10MW) which serves a limited number of consumers via a distribution grid that can operate in isolation from national electricity transmission networks.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    This power delivery architecture can be contrasted to a single customer system such as in the case of a solar home system (SHS). Where there are no distribution network interconnecting customers it can be connected to a centralized grid system, where electrical energy is transmitted over large distances from large central generators where local generators are generally not capable of meeting local demand.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Mini-grids have a unique feature as they can operate autonomously without being connected to a centralized grid. However, the mini-grid may be designed to interconnect with the central grid which means it operates under normal conditions as part of the central grid with disconnection occurring only if power quality needs to be maintained.
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
