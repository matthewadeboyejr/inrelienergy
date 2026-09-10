"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [servicesTab, setServicesTab] = useState<"metering" | "power">("metering");

  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdown(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdown(false);
    }, 200);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdown(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 200);
  };

  return (
    <section id="home" className="pt-3 pb-10 px-2 sm:px-4 lg:px-6 w-full">
      {/* Hero Container */}
      <div className="w-full max-w-[1600px] mx-auto relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[620px] sm:min-h-[700px] lg:min-h-[760px] flex flex-col justify-between p-4 sm:p-8 lg:p-10 shadow-xl bg-slate-900">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero1.jpg"
            alt="Inreli Energy Hero"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
        </div>

        {/* Floating Pill Navbar INSIDE the Hero */}
        <div className="relative z-20 w-full">
          <div className="w-full max-w-[1400px] mx-auto rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-4 shadow-lg shadow-black/20">
            {/* Logo with inverted white text & red emblem */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative flex items-center">
                <Image
                  src="/logo-white.png"
                  alt="Inreli Energy Logo"
                  width={110}
                  height={32}
                  className="object-contain h-7 sm:h-8 w-auto"
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Center Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-white/95">
              <Link
                href="/"
                className="px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition-all"
              >
                Home
              </Link>

              {/* About Us Dropdown with Gapless Bridge */}
              <div
                className="relative"
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
              >
                <Link
                  href="/about"
                  className="flex items-center gap-1 px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition-all cursor-pointer"
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3 h-3 opacity-75" />
                </Link>

                {aboutDropdown && (
                  <div className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="w-56 p-2 rounded-2xl bg-[#11151f] border border-white/15 shadow-2xl text-white">
                      <Link
                        href="/about"
                        onClick={() => setAboutDropdown(false)}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <span className="text-xs font-bold text-white">About Inreli</span>
                        <span className="text-[10px] text-slate-400 font-normal">Company Overview &amp; Profile</span>
                      </Link>
                      <Link
                        href="/management-team"
                        onClick={() => setAboutDropdown(false)}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <span className="text-xs font-bold text-white">Management Team</span>
                        <span className="text-[10px] text-slate-400 font-normal">Executive Leadership &amp; Board</span>
                      </Link>
                      <Link
                        href="/our-expertise"
                        onClick={() => setAboutDropdown(false)}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <span className="text-xs font-bold text-white">Our Expertise</span>
                        <span className="text-[10px] text-slate-400 font-normal">Technical Capabilities &amp; Standards</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions & Services 2-Column Flyout Dropdown with Gapless Bridge */}
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center gap-1 px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition-all cursor-pointer"
                >
                  <span>Solutions &amp; Services</span>
                  <ChevronDown className="w-3 h-3 opacity-75" />
                </button>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="w-[500px] rounded-2xl bg-[#11151f] border border-white/15 shadow-2xl text-white flex overflow-hidden">
                      {/* Left Category Column */}
                      <div className="w-[195px] p-2.5 bg-[#0c1017] border-r border-white/10 flex flex-col gap-1.5 shrink-0">
                        <button
                          onMouseEnter={() => setServicesTab("metering")}
                          onClick={() => setServicesTab("metering")}
                          className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-left ${servicesTab === "metering"
                              ? "bg-[#901A1E] text-white shadow-md"
                              : "text-slate-300 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                          <span>Metering Solution</span>
                          {servicesTab === "metering" ? (
                            <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          )}
                        </button>

                        <button
                          onMouseEnter={() => setServicesTab("power")}
                          onClick={() => setServicesTab("power")}
                          className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-left ${servicesTab === "power"
                              ? "bg-[#901A1E] text-white shadow-md"
                              : "text-slate-300 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                          <span>Power Generation</span>
                          {servicesTab === "power" ? (
                            <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          )}
                        </button>
                      </div>

                      {/* Right Sub-Items Column */}
                      <div className="flex-1 p-3 bg-[#11151f] flex flex-col justify-center gap-2">
                        {servicesTab === "metering" ? (
                          <>
                            <Link
                              href="/smart-energy-meter-ami-systems"
                              onClick={() => setServicesDropdown(false)}
                              className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex flex-col group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-red-200 transition-colors">
                                Smart Energy Meter &amp; AMI Systems
                              </span>
                              <span className="text-[10px] text-slate-400 font-normal mt-0.5">
                                Advanced Metering Infrastructure
                              </span>
                            </Link>

                            <Link
                              href="/installation-capabilities"
                              onClick={() => setServicesDropdown(false)}
                              className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex flex-col group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-red-200 transition-colors">
                                Installation Capabilities
                              </span>
                              <span className="text-[10px] text-slate-400 font-normal mt-0.5">
                                DisCo, MAP &amp; NMMP Deployments
                              </span>
                            </Link>

                            <Link
                              href="/estate-sub-metering-solution"
                              onClick={() => setServicesDropdown(false)}
                              className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex flex-col group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-red-200 transition-colors">
                                Estate Sub-Metering Solution
                              </span>
                              <span className="text-[10px] text-slate-400 font-normal mt-0.5">
                                Private Utility &amp; Gated Communities
                              </span>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              href="/mini-grid"
                              onClick={() => setServicesDropdown(false)}
                              className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex flex-col group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-red-200 transition-colors">
                                Mini-Grid
                              </span>
                              <span className="text-[10px] text-slate-400 font-normal mt-0.5">
                                Isolated &amp; Grid-Interconnected Power (10kW - 10MW)
                              </span>
                            </Link>

                            <Link
                              href="/solar-home-systems"
                              onClick={() => setServicesDropdown(false)}
                              className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex flex-col group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-red-200 transition-colors">
                                Solar Home Systems
                              </span>
                              <span className="text-[10px] text-slate-400 font-normal mt-0.5">
                                Manufacturing, Micro-Enterprise &amp; BESS
                              </span>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/products" className="px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition-all">
                Products
              </Link>
              <Link href="/contact" className="px-3.5 py-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition-all">
                Contact
              </Link>
            </nav>

            {/* Right CTA Button */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#901A1E] hover:bg-[#731317] shadow-lg shadow-[#901A1E]/30 transition-all cursor-pointer group"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Hero Layout: Headline and Subtitle */}
        <div className="relative z-10 flex flex-col items-start max-w-3xl text-white mt-auto pt-24">
          <p className="text-sm sm:text-base lg:text-lg text-white/95 max-w-xl mb-6 font-light leading-relaxed drop-shadow-md">
            Certified smart meters and grid protection hardware engineered for precise utility management.
          </p>

          <Link
            href="/contact"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-[#901A1E] hover:text-white shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <span>Get in touch</span>
            <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
