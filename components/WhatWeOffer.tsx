"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface WhatWeOfferProps {
  onOpenQuote: () => void;
}

const offerCards = [
  {
    id: "01",
    title: "Smart Metering & DisCo Deployments",
    description: "STS GPRS Enabled Split Pre-Paid Meters, LVMD & HVMD Demand Meters for utility loss reduction.",
    image: "/whatweoffer1.jpg",
    alt: "Inreli Meter Assembly Line",
  },
  {
    id: "02",
    title: "450KW & 1MW Mini-Grid Projects",
    description: "Clean hybrid solar mini-grids engineered to power 600 and 1,200 dwellings respectively with REA.",
    image: "/whatweoffer2.jpg",
    alt: "Inreli Solar Mini-Grid Infrastructure",
  },
  {
    id: "03",
    title: "Solar Inverters & Storage Batteries",
    description: "High-performance hybrid solar inverters and lithium batteries for residential and retail sale.",
    image: "/whatweoffer3.jpg",
    alt: "Inreli Meter Testing Bench and Hardware",
  },
  {
    id: "04",
    title: "Turnkey Installation & OEM Capabilities",
    description: "Partnership readiness for Solar Panels, All-In-One systems, and NERC/NEMSA licensed installations.",
    image: "/whatweoffer4.jpg",
    alt: "Inreli Power Hardware & Protective Enclosures",
  },
];

export default function WhatWeOffer({ onOpenQuote }: WhatWeOfferProps) {
  return (
    <section id="what-we-offer" className="py-12 md:py-20 px-2 sm:px-4 lg:px-6 w-full">
      {/* Dark container matching the reference design */}
      <div className="w-full max-w-[1600px] mx-auto rounded-[36px] sm:rounded-[44px] bg-[#11151c] text-white p-6 sm:p-12 lg:p-16 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Sticky with the complete 3-paragraph writeup) */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 flex flex-col items-start justify-between">
            <div>
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E] text-white text-xs font-bold shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>ENGINEERED FOR PERFORMANCE</span>
              </div>

              {/* Headline (Geist - 400, 60px, Line Height 78px, Color rgb(255, 255, 255)) */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-tight text-white leading-snug mb-6">
                What We Offer
              </h2>

              {/* Complete 3 Full Paragraphs of Writeup without bold text */}
              <div className="space-y-5 text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal mb-8">
                <p>
                  Our meters are employed at numerous Nigerian Electricity Distribution Companies including Ibadan Electricity Distribution Company (IBEDC), Abuja Electricity Distribution Company (AEDC) and commencing supply and installation at Benin Electricity Distribution Company (BEDC) and Port Harcourt Electricity Distribution Company (PHED) amongst others.
                </p>

                <p>
                  In addition, INRELI is a major new entrant in the Renewables Energy business having introduced its brand of solar inverters and batteries to the Rural Electrification Agency in Nigeria for Mini-Grids and Solar Home Systems. Our range of solar equipment and batteries are also available for retail sales. We are available to partner with OEM companies to expand our product range especially Solar Panels, All-In-One systems etc.
                </p>

                <p className="text-slate-300">
                  We have two Mini-Grid projects under development dimensioned at 450KW and 1MW, serving 600 and 1,200 dwellings respectively. The preliminary project preparation has been done and Turnkey Project arrangements are being designed and negotiated.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-[#901A1E] hover:text-white shadow-xl transition-all cursor-pointer group"
            >
              <span>Contact Us</span>
              <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>

          {/* Right Column (Scrolling Cards Stack with whatweoffer1-4 images only) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {offerCards.map((card) => (
              <div
                key={card.id}
                className="rounded-[32px] overflow-hidden shadow-2xl relative h-72 sm:h-96 w-full group"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
