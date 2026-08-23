"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, Cpu, Sun, ChevronRight, Check, ChevronLeft } from "lucide-react";

const galleryImages = [
  {
    src: "/whatweoffer3.jpg",
    alt: "Inreli Meter Testing and Assembly Bench",
    title: "NEMSA & NERC Certified Testing Bench",
  },
  {
    src: "/who1.jpg",
    alt: "Inreli Engineer Calibrating STS Meters",
    title: "Indigenous Meter Assembly & Calibration",
  },
  {
    src: "/who2.jpg",
    alt: "Inreli Transparent STS Smart Prepaid Meters Stack",
    title: "Prepaid Smart Meters Ready for Deployment",
  },
  {
    src: "/whatweoffer1.jpg",
    alt: "Inreli DisCo Meter Supply",
    title: "DisCo & Meter Asset Provider Distribution",
  },
  {
    src: "/whatweoffer2.jpg",
    alt: "Inreli Clean Solar Mini-Grid Infrastructure",
    title: "450KW & 1MW Clean Solar Mini-Grids",
  },
  {
    src: "/whatweoffer4.jpg",
    alt: "Inreli Circuit Protection & Heavy Duty Hardware",
    title: "Circuit Breakers & Protective Enclosures",
  },
];

export default function OurExpertisePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentImageIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIdx((prev) => (prev + 1) % galleryImages.length);
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
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#901A1E]">Our Expertise</span>
          </div>
        </div>
      </section>

      {/* Main Expertise Section */}
      <section className="pb-16 md:pb-24 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto">
          {/* Top Row: Multi-Image Gallery Showcase + Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            {/* Left Column: Interactive Multi-Image Gallery with Thumbnails */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Main Featured Image Display */}
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-[32px] overflow-hidden shadow-2xl bg-slate-950 group">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      currentImageIdx === idx ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                  </div>
                ))}

                {/* Top Controls Overlay */}
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white">
                    0{currentImageIdx + 1} / 0{galleryImages.length}
                  </span>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="text-sm font-semibold text-white tracking-tight drop-shadow-md">
                    {galleryImages[currentImageIdx].title}
                  </p>
                </div>
              </div>

              {/* Clickable Thumbnail Strip */}
              <div className="grid grid-cols-6 gap-2 sm:gap-3">
                {galleryImages.map((thumb, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => setCurrentImageIdx(tIdx)}
                    className={`relative w-full h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      currentImageIdx === tIdx
                        ? "border-[#901A1E] shadow-md scale-102"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      sizes="(max-width: 640px) 16vw, 100px"
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Inreli Expertise Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm mb-4">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>TECHNICAL CAPABILITIES</span>
              </div>

              {/* Heading (Geist 400, 60px, 78px line-height) */}
              <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal text-slate-950 tracking-tight leading-[1.3] lg:leading-[78px] mb-8">
                Inreli Expertise
              </h1>

              {/* Pillars: Metering Solutions & Renewable Energy */}
              <div className="space-y-8">
                {/* Pillar 1: Metering Solutions */}
                <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                      Metering Solutions
                    </h2>
                  </div>

                  <ul className="space-y-3 text-slate-600 text-xs sm:text-sm font-normal">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E] mt-2 shrink-0"></span>
                      <span>Manufacture STS Smart electric energy Inreli meters</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E] mt-2 shrink-0"></span>
                      <span>Supply of maximum demand meters, low voltage and high voltage meters (LVMD) (HVMD)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E] mt-2 shrink-0"></span>
                      <span>Meter Supplier to Meter Asset Providers in Nigeria</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E] mt-2 shrink-0"></span>
                      <span>Mini-Grid development</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E] mt-2 shrink-0"></span>
                      <span>Motorised assembly lines</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2: Renewable Energy */}
                <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                      <Sun className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                      Renewable Energy
                    </h2>
                  </div>

                  <ul className="space-y-3 text-slate-600 text-xs sm:text-sm font-normal">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E] mt-2 shrink-0"></span>
                      <span>Manufacture Solar home systems</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E] mt-2 shrink-0"></span>
                      <span>Micro small scale renewable energy requirements</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E] mt-2 shrink-0"></span>
                      <span>Building mini-grid systems, Power conversion system (PCS), battery energy storage systems (BESS); Solar Panel, Poles, Conductors Switchgears, Charge Control and other protection Systems.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Split Row: More About Inreli + Partner Statement & CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-8 sm:p-12 rounded-[36px] bg-white border border-slate-200/80 shadow-md">
            {/* Left: More About Inreli */}
            <div className="lg:col-span-7 pr-0 lg:pr-8 lg:border-r border-slate-200">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-6">
                More About Inreli
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 font-normal">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#901A1E] shrink-0 mt-0.5" />
                  <span>Meters are STS certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#901A1E] shrink-0 mt-0.5" />
                  <span>Meters are NEMSA/NMTS Certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#901A1E] shrink-0 mt-0.5" />
                  <span>Meters are SON certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#901A1E] shrink-0 mt-0.5" />
                  <span>INRELI has token generation software locally</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#901A1E] shrink-0 mt-0.5" />
                  <span>Factory is NEMSA certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#901A1E] shrink-0 mt-0.5" />
                  <span>Our Partners include: IRL, NHL, CWG, IBEDC, AEDC, PHEDC, BEDC</span>
                </li>
                <li className="flex items-start gap-2 col-span-1 sm:col-span-2">
                  <Check className="w-4 h-4 text-[#901A1E] shrink-0 mt-0.5" />
                  <span>Inreli supplies IRL, NHL, CWG</span>
                </li>
              </ul>
            </div>

            {/* Right: Partner Statement & Contact Button */}
            <div className="lg:col-span-5 flex flex-col justify-between pl-0 lg:pl-4 pt-6 lg:pt-0">
              <div>
                <span className="text-xs font-mono font-bold text-[#901A1E] uppercase tracking-wider block mb-2">
                  INDUSTRIAL &amp; UTILITY INTEGRATION
                </span>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed mb-8">
                  We partner with world class technical partners to develop solutions for captive and off-grid industrial customers.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-sm bg-[#901A1E] hover:bg-[#731317] text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl shadow-[#901A1E]/20 transition-all cursor-pointer inline-flex items-center gap-2 group"
                >
                  <span>CONTACT US</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
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
