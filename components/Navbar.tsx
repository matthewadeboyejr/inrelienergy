"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X, ChevronDown, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [servicesTab, setServicesTab] = useState<"metering" | "power">("metering");

  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // On homepage, hide top sticky navbar until scrolled down
  if (isHomepage && !scrolled) {
    return null;
  }

  return (
    <div className="sticky top-3 sm:top-4 z-50 w-full px-2 sm:px-4 lg:px-6 transition-all duration-300 pointer-events-none">
      {/* Floating Pill Navbar on Scroll & Subpages */}
      <header className="w-full max-w-[1400px] mx-auto rounded-full px-4 sm:px-6 py-2 sm:py-2.5 bg-[#0b0f17]/95 text-white backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/40 pointer-events-auto flex items-center justify-between gap-4">
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
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/" ? "bg-white/20 text-white font-semibold" : "hover:bg-white/15 text-white/90 hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* About Us Dropdown with Gapless Hover Bridge & Delay */}
          <div
            className="relative"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <Link
              href="/about"
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                pathname === "/about" || pathname.startsWith("/management-team") || pathname.startsWith("/our-expertise")
                  ? "bg-white/20 text-white font-semibold"
                  : "hover:bg-white/15 text-white/90 hover:text-white"
              }`}
            >
              <span>About Us</span>
              <ChevronDown className="w-3 h-3 opacity-75" />
            </Link>

            {aboutDropdown && (
              <div className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                {/* Gapless bridge */}
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
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                pathname.startsWith("/smart-energy") || pathname.startsWith("/installation") || pathname.startsWith("/estate") || pathname.startsWith("/mini-grid")
                  ? "bg-white/20 text-white font-semibold"
                  : "hover:bg-white/15 text-white/90 hover:text-white"
              }`}
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
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-left ${
                        servicesTab === "metering"
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
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-left ${
                        servicesTab === "power"
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

          <Link
            href="/products"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/products" ? "bg-white/20 text-white font-semibold" : "hover:bg-white/15 text-white/90 hover:text-white"
            }`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/contact" ? "bg-white/20 text-white font-semibold" : "hover:bg-white/15 text-white/90 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#901A1E] hover:bg-[#731317] shadow-lg shadow-[#901A1E]/30 transition-all cursor-pointer group"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/15 text-white hover:bg-white/25"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-[1400px] mx-auto p-6 rounded-3xl bg-[#11151f]/95 backdrop-blur-xl border border-white/15 text-white shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 pointer-events-auto max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3 font-semibold text-sm">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-white/10 text-white font-semibold"
            >
              About Inreli
            </Link>
            <Link
              href="/management-team"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-white/10"
            >
              Management Team
            </Link>
            <Link
              href="/our-expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-white/10"
            >
              Our Expertise
            </Link>

            {/* Mobile Solutions Sub-Categories */}
            <div className="px-4 py-2 rounded-xl bg-white/5 space-y-2">
              <span className="text-[11px] font-mono font-bold text-[#901A1E] uppercase tracking-wider block">
                Metering Solutions
              </span>
              <Link
                href="/smart-energy-meter-ami-systems"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-white py-1"
              >
                • Smart Energy Meter &amp; AMI Systems
              </Link>
              <Link
                href="/installation-capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-white py-1"
              >
                • Installation Capabilities
              </Link>
              <Link
                href="/estate-sub-metering-solution"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-white py-1"
              >
                • Estate Sub-Metering Solution
              </Link>

              <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider block pt-2 border-t border-white/10">
                Power Generation
              </span>
              <Link
                href="/mini-grid"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-white py-1"
              >
                • Mini-Grid (10kW - 10MW)
              </Link>
              <Link
                href="/solar-home-systems"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-white py-1"
              >
                • Solar Home Systems
              </Link>
            </div>

            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-white/10"
            >
              Products
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-white/10"
            >
              Contact
            </Link>
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#901A1E] text-white font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#901A1E]/30"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
