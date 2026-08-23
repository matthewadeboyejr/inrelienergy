"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, ChevronRight, ShieldCheck, CheckCircle2, Download, Zap } from "lucide-react";
import { allProducts, productCategories } from "@/components/Products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col selection:bg-[#901A1E] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Top Breadcrumb Header */}
      <section className="pt-8 pb-4 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#901A1E]">Products</span>
          </div>
        </div>
      </section>

      {/* Editorial Headline Hero with Inline Capsule Image */}
      <section className="pb-12 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>HARDWARE CATALOG &amp; METERS</span>
          </div>

          {/* Full-width Big Editorial Headline with Inline Image Capsule (Geist 400, 60px, 78px) */}
          <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[60px] font-normal tracking-tight text-slate-950 leading-[1.25] lg:leading-[78px] w-full">
            Certified smart meters{" "}
            <span className="inline-flex align-middle mx-1 sm:mx-2 relative w-16 sm:w-24 lg:w-28 h-8 sm:h-12 lg:h-13 rounded-full overflow-hidden shadow-sm bg-slate-100 p-1">
              <Image
                src="/Maximum-Demand-(MD)Meter.png"
                alt="Inreli Maximum Demand Meter"
                fill
                sizes="(max-width: 768px) 100px, 120px"
                className="object-contain"
              />
            </span>{" "}
            and grid protection hardware engineered for precision utility management.
          </h1>
        </div>
      </section>

      {/* Main Product Catalog Section */}
      <section className="pb-20 md:pb-28 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto space-y-10">
          {/* Filter Bar & Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#901A1E] text-white shadow-md shadow-[#901A1E]/20"
                      : "bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-slate-500 shrink-0">
              Showing {filteredProducts.length} certified products
            </span>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-[32px] p-7 bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#901A1E]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Showcase Box */}
                  <div className="relative w-full h-60 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/70 p-4 mb-6 overflow-hidden flex items-center justify-center border border-slate-100 group-hover:border-slate-200 transition-colors">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-mono font-bold text-slate-700 shadow-sm">
                      {product.code}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#901A1E] uppercase tracking-wider block">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-950 tracking-tight leading-snug group-hover:text-[#901A1E] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Technical Specifications */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-mono text-slate-600 mb-6">
                    {product.specs}
                  </div>
                </div>

                {/* Quotation Request Button */}
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-2xl bg-slate-950 text-white font-bold text-xs hover:bg-[#901A1E] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
                >
                  <span>Request Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Compliance & Standards Banner */}
          <div className="p-8 sm:p-12 rounded-[36px] bg-[#11151c] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-mono font-bold text-[#901A1E] uppercase tracking-wider block">
                QUALITY &amp; REGULATORY COMPLIANCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                100% Certified to STS &amp; NEMSA Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                All Inreli smart energy meters, maximum demand systems, and circuit breakers undergo stringent type testing and calibration at our factory laboratory in full compliance with Standards Organisation of Nigeria (SON) and Nigerian Electricity Management Services Agency (NEMSA).
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#901A1E] hover:bg-[#731317] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#901A1E]/30 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee / Grid */}
      <Partners />

      {/* Corporate Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </main>
  );
}
