"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, Sun, BatteryCharging, Factory, Zap, ChevronRight, Phone } from "lucide-react";

export default function SolarHomeSystemsPage() {
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
            <span className="text-[#901A1E]">Solar Home Systems</span>
          </div>
        </div>
      </section>

      {/* Editorial Headline Hero */}
      <section className="pb-12 md:pb-16 px-2 sm:px-4 lg:px-6 w-full">
        <div className="flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
            <Sun className="w-3.5 h-3.5" />
            <span>POWER GENERATION &amp; RENEWABLES</span>
          </div>

          {/* Clean Centered Editorial Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-tight text-slate-950 leading-snug lg:leading-[1.3]">
            Cutting-edge solar home systems and renewable power solutions designed for sustainable reliability.
          </h1>
        </div>
      </section>

      {/* Main Sticky-Scroll Bento Section */}
      <section className="pb-20 md:pb-28 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto rounded-[36px] sm:rounded-[44px] bg-[#11151c] text-white p-6 sm:p-12 lg:p-16 shadow-2xl space-y-12">
          {/* Top Split: Left Photo + Right Overview & Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Solar Equipment Inverter & Battery Rack Photo */}
            <div className="lg:col-span-6 relative w-full h-[340px] sm:h-[420px] lg:h-[460px] rounded-[32px] overflow-hidden shadow-xl bg-slate-900 group">
              <Image
                src="/solar-equipment.jpg"
                alt="Inreli Solar Home System Equipment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  EQUIPMENT INTEGRATION
                </span>
                <p className="text-sm sm:text-base font-semibold">
                  Modular Inverters, Lithium BESS &amp; Pre-wired Protection Panels
                </p>
              </div>
            </div>

            {/* Right: Title & Introductory Statement */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E] text-white text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>CLEAN ENERGY MANUFACTURING</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-tight text-white leading-snug">
                Solar Home Systems
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal">
                At Inrei, we are dedicated to providing cutting-edge solutions in renewable energy. Our expertise lies in the following areas:
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#901A1E] hover:text-white shadow-xl transition-all cursor-pointer group"
                >
                  <span>CONTACT US</span>
                  <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-transform">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs">
                  <span className="font-mono text-red-300 font-bold uppercase text-[10px]">SHS HELPDESK:</span>
                  <a href="tel:091194000025" className="text-white hover:text-red-300 font-semibold transition-colors">
                    091194000025
                  </a>
                  <span className="text-white/40">•</span>
                  <a href="tel:09042804796" className="text-white hover:text-red-300 font-semibold transition-colors">
                    09042804796
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Numbered Bento Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Pillar 1 */}
            <div className="p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center font-bold">
                    <Factory className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-400">01</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3">
                  1. Manufacturing Solar Home Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify">
                  Our commitment to sustainable energy extends to manufacturing high-quality solar home systems. These systems are designed to power homes efficiently, reducing reliance on traditional energy sources and contributing to a cleaner environment.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center font-bold">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-400">02</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3">
                  2. Micro Small Scale Renewable Energy Requirements
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify">
                  We understand the unique energy needs of micro and small-scale enterprises. Our solutions cater to these requirements, offering efficient and cost-effective renewable energy solutions tailored to the specific needs of each client.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-[32px] bg-white text-slate-950 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center font-bold">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-400">03</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3">
                  3. Building Mini-Grid Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify">
                  For communities and businesses looking to establish mini-grid systems, we offer comprehensive solutions. Our expertise encompasses the design, installation, and maintenance of mini-grid systems, including power conversion systems (PCS), battery energy storage systems (BESS), solar panels, poles, conductors, switchgears, charge control, and other protection systems.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Summary Callout Box from Screenshot */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed font-normal max-w-3xl">
              <strong className="text-white font-semibold">Inreli</strong> combines innovation with sustainability to deliver reliable and environmentally friendly solar systems solutions. Contact us today to learn more about how we can meet your renewable energy needs.
            </p>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-sm bg-[#901A1E] hover:bg-[#731317] text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl shadow-[#901A1E]/30 transition-all cursor-pointer shrink-0 inline-flex items-center gap-2 group"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
