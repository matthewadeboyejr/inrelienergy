"use client";

import React from "react";
import Image from "next/image";
import { Trophy, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Achievements() {
  return (
    <section className="py-12 md:py-16 px-2 sm:px-4 lg:px-6 w-full">
      <div className="w-full max-w-[1600px] mx-auto rounded-[36px] sm:rounded-[44px] overflow-hidden relative p-8 sm:p-14 lg:p-16 shadow-2xl bg-[#11151c] text-white">
        {/* Background Image with Dark Cinematic Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/whatweoffer3.jpg"
            alt="Inreli Industrial Grid Infrastructure"
            fill
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="object-cover object-center brightness-[0.22] contrast-125"
          />
          {/* Vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#11151c] via-[#11151c]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11151c] via-transparent to-[#11151c]/70" />
        </div>

        {/* Content Container matching site typography */}
        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Top Inreli Badge (matching other sections) */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E] text-white text-xs font-bold shadow-sm">
              <Trophy className="w-3.5 h-3.5 fill-current" />
              <span>ACHIEVEMENTS</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-tight text-white leading-snug">
            One of Our Numerous Achievements
          </h2>

          {/* Body Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-light leading-relaxed max-w-3xl">
            INRELI has consistently supplied meters compliant with SON and NEMSA standards, driven continuous technological improvements in metering, and partnered with Integrated Resource Limited (IRL) to ensure prompt deployment and installation.
          </p>

          {/* Metric tags */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-white font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Allocation Deployment</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-white font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Shortage Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
