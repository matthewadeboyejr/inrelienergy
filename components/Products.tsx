"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Check, ChevronRight } from "lucide-react";

interface ProductsProps {
  onOpenQuote: () => void;
}

export const allProducts = [
  {
    id: "md-meter",
    name: "Maximum Demand (MD) Smart Meter",
    code: "MD-METER",
    category: "Maximum Demand & Grid Meters",
    image: "/Maximum-Demand-(MD)Meter.png",
    description: "High-precision commercial and industrial Maximum Demand smart meter for LV/HV distribution substations, large commercial facilities, and feeder metering.",
    specs: "3x230/400V • Class 0.5S / 0.2S • Maximum Demand Logging • TOU Multi-Tariff • DLMS / COSEM",
  },
  {
    id: "ciu-unit",
    name: "Customer Interface Unit",
    code: "CIU",
    category: "CIU & Keypads",
    image: "/customer-interface-Unit.png",
    description: "In-home tactile keypad for token entry, balance lookup, and tamper monitoring.",
    specs: "Keypad CIU • LCD Display • PLC / RF Wireless • Low Credit Audio Alarm",
  },
  {
    id: "irl-110",
    name: "INRELI BS-Smart Single Phase Prepaid Meter (IRL110)",
    code: "IRL110",
    category: "Prepaid Meters",
    image: "/INRELI BS-Smart-Single-Phase.png",
    description: "Single-phase STS split prepayment meter with optical port and remote GPRS/PLC communication.",
    specs: "220-240V • 5(60)A / 10(100)A • Class 1.0 • STS Standard",
  },
  {
    id: "irl-310",
    name: "INRELI BS-Smart Three Phase Prepaid Meter (IRL310)",
    code: "IRL310",
    category: "Prepaid Meters",
    image: "/INRELI-BS-Smart-Three-Phase(IRL310).png",
    description: "High-precision commercial and industrial 3-phase smart meter with Maximum Demand logging.",
    specs: "3x230/400V • 3x5(100)A • Class 1.0 Active • DLMS / COSEM",
  },
  {
    id: "mcb-2pole",
    name: "2 Pole Miniature Circuit Breaker",
    code: "WSB1-63 2P",
    category: "Circuit Breakers",
    image: "/2-Pole-Miniature-Circuit-Breaker.png",
    description: "Heavy-duty 2-pole circuit breaker for meter boards and single-phase short-circuit protection.",
    specs: "2 Pole • 63A Rated • 6kA/10kA Breaking • IEC 60898-1",
  },
  {
    id: "mcb-4pole",
    name: "4 Pole Miniature Circuit Breaker",
    code: "WSB1-63 4P",
    category: "Circuit Breakers",
    image: "/4-Pole-Miniature-Circuit-Breaker.png",
    description: "Industrial grade 4-pole circuit breaker for 3-phase distribution boards and line isolation.",
    specs: "4 Pole • 63A-100A • 10kA Breaking • Flame Retardant",
  },
  {
    id: "hxe-130",
    name: "Inreli Single Phase Meter (HXE 130)",
    code: "HXE 130",
    category: "Prepaid Meters",
    image: "/single-Phase-Meter-HXE 130.jpeg",
    description: "Reliable residential single-phase smart prepayment meter with tamper-proof terminal block.",
    specs: "230V • 5(60)A • STS Compliant • Anti-Tamper",
  },
  {
    id: "hxe-330",
    name: "Inreli Three Phase Meter (HXE 330)",
    code: "HXE 330",
    category: "Prepaid Meters",
    image: "/Inreli-Three-Phase Meter-HXE 330.jpeg",
    description: "Heavy-duty three-phase smart prepaid meter for commercial complexes and industrial loads.",
    specs: "3x230/400V • 3x10(100)A • Active/Reactive Class 1.0 • STS",
  },
];

export const productCategories = [
  "All",
  "Prepaid Meters",
  "Maximum Demand & Grid Meters",
  "Circuit Breakers",
  "CIU & Keypads",
];

export default function Products({ onOpenQuote }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 md:py-28 px-2 sm:px-4 lg:px-6 bg-[#f8f9fa] text-slate-900 w-full relative overflow-hidden">
      {/* Subtle atmospheric background grid / gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#901A1E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Header Row (Left-aligned matching other sections) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>HARDWARE CATALOG &amp; METERS</span>
            </div>

            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal text-slate-950 tracking-tight leading-[1.3] lg:leading-[78px]">
              Certified Smart Hardware
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-4">
              Explore our range of STS-compliant smart prepaid energy meters, maximum demand meters, circuit breakers, and customer interface units engineered to international standards.
            </p>
          </div>

          {/* Direct Link to Dedicated Product Page */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white text-xs font-bold hover:bg-[#901A1E] transition-all shadow-md shrink-0 self-start lg:self-end"
          >
            <span>View Full Product Catalog</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#901A1E] text-white shadow-md shadow-[#901A1E]/20"
                  : "bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-[28px] p-6 bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#901A1E]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with subtle light background */}
                <div className="relative w-full h-56 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 p-4 mb-5 overflow-hidden flex items-center justify-center border border-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Pill Tag on Top Right */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-mono font-bold text-slate-700 shadow-sm">
                    {product.code}
                  </div>
                </div>

                {/* Product Meta */}
                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#901A1E] uppercase tracking-wider block">
                    {product.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight leading-snug group-hover:text-[#901A1E] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Technical Specs Pill */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-mono text-slate-600 mb-6">
                  {product.specs}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenQuote}
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-[#901A1E] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
