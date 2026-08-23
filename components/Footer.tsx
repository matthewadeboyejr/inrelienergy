"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, ArrowRight, ShieldCheck, Clock, ArrowUp, MessageSquare, Award } from "lucide-react";

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#070a0f] text-slate-400 border-t border-white/10 pt-20 pb-10 px-2 sm:px-4 lg:px-6 w-full relative overflow-hidden selection:bg-[#901A1E] selection:text-white">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(144,26,30,0.18),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10 space-y-16">
        {/* Top Bento CTA Showcase Card */}
        <div className="p-8 sm:p-14 rounded-[36px] bg-[#11151f]/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#901A1E]/20 border border-[#901A1E]/30 text-red-300 text-xs font-mono font-bold">
              <span>TURNKEY POWER &amp; METERING INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight leading-[1.2]">
              Pioneering sustainable energy &amp; intelligent metering across Nigeria.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
              Connect with our licensed technical engineering team today for local meter assembly procurement, estate sub-metering, or turnkey mini-grid infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-7 py-4 rounded-full bg-[#901A1E] hover:bg-[#731317] text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#901A1E]/30 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349162402271"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* 5-Column Clean Navigation & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Licensing (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-white.png"
                alt="Inreli Energy Logo"
                width={130}
                height={38}
                className="object-contain h-8 w-auto"
                unoptimized
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              INRELI Limited is a premier Nigerian Meter Manufacturer and Renewable Energy Company situated in Lagos. Licensed Local Meter Manufacturer/Assembler (LMMA) by NERC and NEMSA, and certified by Standards Organisation of Nigeria (SON).
            </p>

            {/* Certifications Pills Grid */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NERC Licensed LMMA</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NEMSA Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>SON Approved</span>
              </div>
            </div>
          </div>

          {/* Column 2: Metering Solutions (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              METERING SOLUTIONS
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/smart-energy-meter-ami-systems" className="hover:text-white transition-colors">
                  Smart Energy Meter &amp; AMI
                </Link>
              </li>
              <li>
                <Link href="/installation-capabilities" className="hover:text-white transition-colors">
                  Installation Capabilities
                </Link>
              </li>
              <li>
                <Link href="/estate-sub-metering-solution" className="hover:text-white transition-colors">
                  Estate Sub-Metering
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Maximum Demand (MD) Meter
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Single &amp; Three Phase
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Power Generation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              POWER GENERATION
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/mini-grid" className="hover:text-white transition-colors">
                  Mini-Grid Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/solar-home-systems" className="hover:text-white transition-colors">
                  Solar Home Systems
                </Link>
              </li>
              <li>
                <Link href="/mini-grid" className="hover:text-white transition-colors">
                  Isolated Micro-Grids
                </Link>
              </li>
              <li>
                <Link href="/solar-home-systems" className="hover:text-white transition-colors">
                  Manufacturing &amp; BESS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Leadership (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              COMPANY
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/management-team" className="hover:text-white transition-colors">
                  Management Team
                </Link>
              </li>
              <li>
                <Link href="/our-expertise" className="hover:text-white transition-colors">
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Inreli
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Hardware Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Head Office (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              HEAD OFFICE
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#901A1E] shrink-0 mt-0.5" />
                <span className="leading-snug">6 Waheed Akanni Street, Ago Palace Way, Cele, Lagos, Nigeria.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#901A1E] shrink-0" />
                <a href="tel:+2349162402271" className="hover:text-white transition-colors font-bold">
                  +2349162402271
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#901A1E] shrink-0" />
                <a href="mailto:info@inrelienergy.com" className="hover:text-white transition-colors">
                  info@inrelienergy.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Mon-Fri: 8:00AM - 5:00PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Large Decorative Brand Typographic Watermark & Bottom Bar */}
        <div className="space-y-8">
          {/* Subtle Watermark */}
          <div className="w-full select-none pointer-events-none text-center overflow-hidden">
            <span className="text-[15vw] font-black tracking-widest text-white/[0.03] leading-none block font-sans">
              INRELI
            </span>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} INRELI Limited. All Rights Reserved.
            </div>

            <div className="flex items-center gap-6 text-xs">
              <Link href="/about" className="hover:text-slate-200 transition-colors">About Us</Link>
              <Link href="/products" className="hover:text-slate-200 transition-colors">Products</Link>
              <Link href="/contact" className="hover:text-slate-200 transition-colors">Contact</Link>
              <button
                onClick={scrollToTop}
                className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer pl-3 border-l border-white/10"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
