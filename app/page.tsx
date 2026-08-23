"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import WhatWeOffer from "@/components/WhatWeOffer";
import Achievements from "@/components/Achievements";
import Products from "@/components/Products";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col selection:bg-[#901A1E] selection:text-white">
      {/* Floating Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Hero Section */}
      <Hero onOpenQuote={handleOpenQuote} />

      {/* Who We Are Section */}
      <WhoWeAre onOpenQuote={handleOpenQuote} />

      {/* Our Services Section (Immediately after Who We Are) */}
      <Services onOpenQuote={handleOpenQuote} />

      {/* What We Offer: DisCo Deployments & Renewables */}
      <WhatWeOffer onOpenQuote={handleOpenQuote} />



      {/* Our Products: Hardware Specs & Catalog */}
      <Products onOpenQuote={handleOpenQuote} />
      {/* Major Industry Achievement Showcase */}
      <Achievements />
      {/* Partners & Regulators Marquee */}
      <Partners />

      {/* Corporate Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Interactive Quote Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </main>
  );
}
