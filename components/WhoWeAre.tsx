"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Award } from "lucide-react";

interface WhoWeAreProps {
  onOpenQuote: () => void;
}

export default function WhoWeAre({ onOpenQuote }: WhoWeAreProps) {
  return (
    <section id="who-we-are" className="py-16 md:py-24 px-2 sm:px-4 lg:px-6 bg-[#f8f9fa] text-slate-900 w-full">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Top Inreli Crimson Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Licensed Local Meter Manufacturer &amp; Renewable Energy Pioneer</span>
          </div>
        </div>

        {/* Full-width Big Editorial Headline with Inline Image Capsule (Geist 400, 60px, 78px) */}
        <div className="mb-14 w-full">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[60px] font-normal tracking-tight text-slate-950 leading-[1.25] lg:leading-[78px] w-full">
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
          </h2>
        </div>

        {/* 3 Bento Cards Grid without harsh borders */}
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

          {/* Card 2 (Center): Clean Image Card (No text overlay, no harsh borders) */}
          <div className="relative rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[420px] shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300 group bg-slate-100">
            <Image
              src="/who1.jpg"
              alt="Inreli Engineer Testing Meters"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Card 3 (Right): What We Do Best & Tags (Clean surface without harsh borders) */}
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
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#901A1E] hover:text-[#731317] transition-colors cursor-pointer group"
                >
                  <span className="underline underline-offset-4">Get Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

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
  );
}
