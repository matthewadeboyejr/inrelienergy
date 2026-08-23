"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface PartnerItem {
  id: string;
  name: string;
  category: string;
  image: string;
}

const partners: PartnerItem[] = [
  { id: "p1", name: "Ibadan Electricity Distribution Company (IBEDC)", category: "DisCo Utility Partner", image: "/p1.jpg" },
  { id: "p2", name: "Abuja Electricity Distribution Company (AEDC)", category: "DisCo Utility Partner", image: "/p2.png" },
  { id: "p4", name: "Benin Electricity Distribution Company (BEDC)", category: "DisCo Utility Partner", image: "/p4.jpeg" },
  { id: "p5", name: "Port Harcourt Electricity Distribution (PHED)", category: "DisCo Utility Partner", image: "/p5.png" },
  { id: "p6", name: "Eko Electricity Distribution Company (EKEDC)", category: "DisCo Utility Partner", image: "/p6.jpg" },
  { id: "p7", name: "Rural Electrification Agency (REA)", category: "Renewables & Mini-Grids", image: "/p7.png" },
  { id: "p8", name: "Nigerian Electricity Regulatory Commission (NERC)", category: "Regulatory Licensing", image: "/p8.jpeg" },
  { id: "p9", name: "Nigerian Electricity Management Services Agency (NEMSA)", category: "Technical Certification", image: "/p9.jpeg" },
  { id: "p10", name: "Standards Organisation of Nigeria (SON)", category: "Quality Assurance", image: "/p10.png" },
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

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="p-6 rounded-[24px] bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#901A1E]/30 transition-all duration-300 flex flex-col justify-between items-center text-center group cursor-pointer"
            >
              {/* Logo Area */}
              <div className="relative w-full h-24 sm:h-28 flex items-center justify-center p-3 mb-4 rounded-xl bg-slate-50/60 group-hover:bg-slate-50 transition-colors">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain object-center p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Partner Category & Name */}
              <div className="w-full pt-2 border-t border-slate-100">
                <span className="text-[10px] font-mono font-bold text-[#901A1E] uppercase tracking-wider block mb-1">
                  {partner.category}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#901A1E] transition-colors">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
