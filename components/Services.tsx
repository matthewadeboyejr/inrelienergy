"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Sun, Building2, Zap, Check, ChevronRight } from "lucide-react";

interface ServicesProps {
  onOpenQuote: () => void;
}

const servicesList = [
  {
    id: "01",
    name: "Meter Manufacture",
    subtitle: "Smart Energy Meters & AMI Systems",
    icon: Cpu,
    color: "#901A1E",
    bgLight: "bg-red-50 text-[#901A1E] border-red-100",
    description:
      "Design, local assembly, and supply of Smart STS GPRS Enabled Split Pre-Paid Meters, Maximum Demand (MD), Low Voltage & High Voltage MD Meters (LVMD & HVMD), DCU and DIN Rail Meters.",
    highlights: [
      "STS & DLMS/COSEM compliant standard",
      "Single Phase (IRL110) & Three Phase (IRL310)",
      "High accuracy class 1.0 / class 0.5S",
      "Anti-tamper detection with remote disconnection",
    ],
  },
  {
    id: "02",
    name: "Solar Home Systems",
    subtitle: "Clean Energy Storage & Inverters",
    icon: Sun,
    color: "#d97706",
    bgLight: "bg-amber-50 text-amber-600 border-amber-100",
    description:
      "Premium solar inverters, lithium energy storage batteries, and integrated photovoltaic systems introduced to the Rural Electrification Agency (REA) for reliable residential and commercial power.",
    highlights: [
      "High-efficiency hybrid solar inverters",
      "Long-cycle deep discharge lithium storage batteries",
      "Retail sales and turnkey installation packages",
      "OEM partnership readiness for All-in-One systems",
    ],
  },
  {
    id: "03",
    name: "Sub-Estate Metering",
    subtitle: "Private Utility & Multi-Tenant Management",
    icon: Building2,
    color: "#2563eb",
    bgLight: "bg-blue-50 text-blue-600 border-blue-100",
    description:
      "End-to-end sub-metering architecture for residential gated estates, shopping plazas, and commercial business parks to eliminate billing disputes and manage shared energy costs transparently.",
    highlights: [
      "Dedicated sub-metering prepayment & token generation",
      "Real-time consumption analytics and reporting",
      "Automated tariff calculation for estate generators & grid",
      "Zero revenue leakage and seamless tenant onboarding",
    ],
  },
  {
    id: "04",
    name: "Mini Grid",
    subtitle: "450KW & 1MW Community Power Infrastructure",
    icon: Zap,
    color: "#059669",
    bgLight: "bg-emerald-50 text-emerald-600 border-emerald-100",
    description:
      "Utility-grade off-grid and hybrid mini-grid development projects serving 600 to 1,200 dwellings respectively. Full lifecycle engineering from preliminary preparation to turnkey commissioning.",
    highlights: [
      "450KW and 1MW dimensioned solar hybrid generation",
      "Turnkey project arrangements, design, and financing",
      "Robust distribution lines and smart metering integration",
      "Rural Electrification Agency (REA) alignment",
    ],
  },
];

export default function Services({ onOpenQuote }: ServicesProps) {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-16 md:py-24 px-2 sm:px-4 lg:px-6 bg-[#f8f9fa] text-slate-900 w-full">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#901A1E]"></span>
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-slate-950 tracking-tight leading-snug">
              Our Services
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal text-justify [text-wrap:pretty]">
              We deliver a complete process from local meter assembly to turnkey community power generation with
              consistent results. Each solution is engineered for durability, regulatory compliance, and long-term
              reliability across Nigeria.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-[#901A1E] shadow-lg transition-all cursor-pointer group"
              >
                <span>Get in touch</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Interactive Service Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`p-7 rounded-[28px] bg-white flex flex-col justify-between cursor-pointer border transition-all duration-300 relative group shadow-sm ${
                  activeService === index
                    ? "ring-2 ring-[#901A1E] border-transparent shadow-md -translate-y-1"
                    : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${service.bgLight}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-[#901A1E] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-1">{service.name}</h3>
                  <span className="block text-xs font-semibold text-[#901A1E] mb-6">{service.subtitle}</span>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {service.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#901A1E] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                  
                  <div className="pt-3 flex items-center justify-between text-xs font-bold text-[#901A1E] group-hover:translate-x-1 transition-transform">
                    <span>Explore details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detail Bento Card */}
        <div className="mt-8 p-8 sm:p-10 rounded-[28px] bg-white text-slate-900 border border-slate-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold text-[#901A1E] uppercase tracking-wider block mb-2">
                SERVICE FOCUS • {servicesList[activeService].id}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-950 mb-2">
                {servicesList[activeService].name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal leading-relaxed">
                {servicesList[activeService].description}
              </p>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#901A1E] hover:bg-[#731317] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Request Service Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesList[activeService].highlights.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#901A1E]/10 text-[#901A1E] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{item}</span>
                    <span className="text-[11px] text-slate-500 font-normal">Strict compliance with NERC &amp; NEMSA standards.</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
