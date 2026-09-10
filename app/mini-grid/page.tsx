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

      {/* Editorial Headline Hero */}
      <section className="pb-12 md:pb-16 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto space-y-5">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
            <Sun className="w-3.5 h-3.5" />
            <span>POWER GENERATION &amp; RENEWABLES</span>
          </div>

          {/* Clean Big Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal tracking-tight text-slate-950 leading-[1.2] lg:leading-[1.15] max-w-5xl">
            Decentralized clean power from <span className="text-[#901A1E] font-medium">10 kW to 10MW</span>, powering localized consumer networks and industrial mini-estates.
          </h1>
        </div>
      </section>

      {/* Standalone Intro Banner */}
      <section className="pb-12 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto rounded-[36px] sm:rounded-[44px] bg-[#11151c] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#901A1E]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E] text-white text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>TECHNICAL ARCHITECTURE &amp; CAPABILITIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Mini-Grid Infrastructure
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-3xl">
                INRELI delivers engineered decentralized mini-grid solutions ranging from <strong className="text-white font-semibold">10 kW to 10MW</strong>. Our power distribution networks integrate clean generation, intelligent STS metering telemetry, and energy storage to supply reliable electricity to localized communities, commercial facilities, and industrial clusters.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#901A1E] hover:text-white shadow-xl transition-all cursor-pointer group"
              >
                <span>CONTACT US</span>
                <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>

              <a
                href="tel:+2349162402271"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 border border-white/20 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#901A1E]" />
                <span>+234 916 240 2271</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Technical Architecture Cards */}
      <section className="pb-20 md:pb-28 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto space-y-8">
          
          {/* Card 01 (Standalone Full-Width Bento Block) */}
          <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] sm:rounded-[44px] bg-white text-slate-950 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-[#901A1E] uppercase tracking-wider block mb-1">
                  ARCHITECTURE &amp; CAPACITY
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
                  Decentralized Micro-Grid Network
                </h3>
              </div>
              <span className="font-mono text-3xl sm:text-4xl font-bold text-slate-300">
                01
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                <p>
                  A <strong className="text-slate-950 font-semibold">Mini Grid</strong>, also sometimes referred to as a &ldquo;micro grid or isolated grid&rdquo;, can be defined as a set of electricity generators and possibly energy storage systems interconnected to a distribution network that supplies electricity to a localized group of customers.
                </p>
                <p>
                  They involve small-scale electricity generation <strong className="text-slate-950 font-semibold">(10 kW to 10MW)</strong> which serves a limited number of consumers via a distribution grid that can operate in isolation from national electricity transmission networks.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-semibold">
                    • 10 kW – 10MW Scalable Generation
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-semibold">
                    • Localized Distribution Network
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-semibold">
                    • Hybrid Battery Energy Storage (BESS)
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-[28px] overflow-hidden bg-slate-100 shadow-inner group">
                <Image
                  src="/solar-home-systems.jpg"
                  alt="Inreli Mini-Grid Solar Array Facility"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  Decentralized Solar Array &amp; Substation
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 (Standalone Full-Width Bento Block - Inverted Layout) */}
          <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] sm:rounded-[44px] bg-white text-slate-950 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-[#901A1E] uppercase tracking-wider block mb-1">
                  DELIVERY COMPARISON
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
                  Power Delivery Architecture vs. SHS &amp; Central Grid
                </h3>
              </div>
              <span className="font-mono text-3xl sm:text-4xl font-bold text-slate-300">
                02
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-[28px] overflow-hidden bg-slate-100 shadow-inner group order-2 lg:order-1">
                <Image
                  src="/whatweoffer2.jpg"
                  alt="Inreli Mini-Grid Power Network Distribution"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  Localized Power Distribution Grid
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal order-1 lg:order-2">
                <p>
                  This power delivery architecture can be contrasted to a single customer system such as in the case of a solar home system (SHS).
                </p>
                <p>
                  Where there are no distribution networks interconnecting customers, it can be connected to a centralized grid system, where electrical energy is transmitted over large distances from large central generators where local generators are generally not capable of meeting local demand.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-semibold">
                    • Multi-Consumer Network Topology
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-semibold">
                    • Elimination of Long-Distance Transmission Losses
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 (Standalone Full-Width Bento Block) */}
          <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] sm:rounded-[44px] bg-white text-slate-950 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-[#901A1E] uppercase tracking-wider block mb-1">
                  OPERATION &amp; SYNCHRONIZATION
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
                  Autonomous Operation &amp; Grid Interconnection
                </h3>
              </div>
              <span className="font-mono text-3xl sm:text-4xl font-bold text-slate-300">
                03
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                <p>
                  Mini-grids have a unique feature as they can operate <strong className="text-slate-950 font-semibold">autonomously</strong> without being connected to a centralized grid.
                </p>
                <p>
                  However, the mini-grid may be designed to interconnect with the central grid which means it operates under normal conditions as part of the central grid with disconnection occurring only if power quality needs to be maintained.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono font-semibold">
                    ✓ Autonomous Islanded Mode
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-mono font-semibold">
                    ✓ Central Grid Synchronization
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-mono font-semibold">
                    ✓ Dynamic Power Quality Disconnection
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-[28px] overflow-hidden bg-slate-100 shadow-inner group">
                <Image
                  src="/whatweoffer3.jpg"
                  alt="Inreli Substation Synchronization and Protection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  Grid Synchronization &amp; Protection Gear
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
