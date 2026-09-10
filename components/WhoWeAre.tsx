"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Award, ShieldCheck, Cpu, Sun, CheckCircle2, Sparkles } from "lucide-react";

interface WhoWeAreProps {
  onOpenQuote: () => void;
}

export default function WhoWeAre({ onOpenQuote }: WhoWeAreProps) {
  return (
    <section id="who-we-are" className="py-16 md:py-24 px-2 sm:px-4 lg:px-6 bg-[#f8f9fa] text-slate-900 w-full">
      <div className="w-full max-w-[1600px] mx-auto space-y-12">
        {/* Top Inreli Crimson Badge */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Licensed Local Meter Manufacturer &amp; Renewable Energy Pioneer</span>
          </div>

          {/* Clean Big Editorial Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal tracking-tight text-slate-950 leading-[1.2] lg:leading-[1.15] max-w-5xl">
            We provide innovative <span className="text-[#901A1E] font-medium">technological solutions</span> in the power sector. Dedicated to indigenous meter manufacturing, clean solar mini-grids, and eliminating utility losses across Nigeria.
          </h2>
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
  );
}

