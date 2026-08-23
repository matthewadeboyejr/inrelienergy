"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface PartnerItem {
  id: string;
  name: string;
  image: string;
}

const partners: PartnerItem[] = [
  { id: "p1", name: "Ibadan Electricity Distribution Company (IBEDC)", image: "/p1.jpg" },
  { id: "p2", name: "Abuja Electricity Distribution Company (AEDC)", image: "/p2.png" },
  { id: "p4", name: "Benin Electricity Distribution Company (BEDC)", image: "/p4.jpeg" },
  { id: "p5", name: "Port Harcourt Electricity Distribution (PHED)", image: "/p5.png" },
  { id: "p6", name: "Eko Electricity Distribution Company (EKEDC)", image: "/p6.jpg" },
  { id: "p7", name: "Rural Electrification Agency (REA)", image: "/p7.png" },
  { id: "p8", name: "Nigerian Electricity Regulatory Commission (NERC)", image: "/p8.jpeg" },
  { id: "p9", name: "Nigerian Electricity Management Services Agency (NEMSA)", image: "/p9.jpeg" },
  { id: "p10", name: "Standards Organisation of Nigeria (SON)", image: "/p10.png" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 md:py-28 px-2 sm:px-4 lg:px-6 bg-[#f8f9fa] text-slate-900 w-full relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Header Row (Left-aligned matching other sections) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>INDUSTRY TRUST &amp; ALLIANCES</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal text-slate-950 tracking-tight leading-[1.3] lg:leading-[78px] mb-3">
              Meet Our Partners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              We have ongoing partnerships with reputable institutions in the power sector, including major Electricity Distribution Companies (DisCos), the Rural Electrification Agency (REA), and regulatory authorities.
            </p>
          </div>

          <div className="hidden lg:block">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              NATIONWIDE UTILITY &amp; REGULATORY TRUST
            </span>
          </div>
        </div>

        {/* Partners Logo Grid - Clean Logo Display Without Writeup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="p-6 sm:p-8 rounded-[28px] bg-white transition-all duration-300 flex items-center justify-center h-36 sm:h-40 group cursor-pointer"
            >
              {/* Logo Area */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
