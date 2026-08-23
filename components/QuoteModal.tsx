"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    serviceType: "Meter Manufacture & Supply (LMMA)",
    quantityOrCapacity: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-[32px] bg-[#0f172a] border border-white/10 p-6 sm:p-10 text-white shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Quote Request Submitted</h3>
            <p className="text-sm text-slate-300 max-w-md mb-8">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Our engineering &amp; sales
              team will review your specifications and contact you shortly at{" "}
              <span className="text-[#ba242a]">{formData.phone || formData.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 rounded-full bg-[#901A1E] hover:bg-[#ba242a] text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#901A1E]/20 text-[#ba242a] text-xs font-bold uppercase tracking-wider mb-3 border border-[#901A1E]/30">
              <span>GET A QUOTE / CONTACT US</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Request Technical Specifications &amp; Pricing
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light mb-6">
              Connect with INRELI Limited for smart meter procurement, sub-estate deployments, or mini-grid turnkey project engineering.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Engr. Babatunde Alabi"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#ba242a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#ba242a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#ba242a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company / Estate / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Lekki Phase 1 Estate / DisCo"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#ba242a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service / Product Category *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1e293b] border border-white/10 text-white text-xs focus:outline-none focus:border-[#ba242a]"
                  >
                    <option>Smart STS Single Phase Meters (IRL110)</option>
                    <option>Smart STS Three Phase Meters (IRL310)</option>
                    <option>Customer Interface Units (CIU)</option>
                    <option>Circuit Breakers (2-Pole / 4-Pole)</option>
                    <option>Estate Sub-Metering Solution</option>
                    <option>Solar Home Systems &amp; Inverters</option>
                    <option>Mini Grid Development (450KW / 1MW)</option>
                    <option>OEM Partnership / Bulk Procurement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Estimated Quantity / Capacity
                  </label>
                  <input
                    type="text"
                    value={formData.quantityOrCapacity}
                    onChange={(e) => setFormData({ ...formData, quantityOrCapacity: e.target.value })}
                    placeholder="e.g. 500 units / 50KW"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#ba242a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Project Notes &amp; Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your location, grid connection status, and timeline..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#ba242a]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <a
                  href="tel:+2349162402271"
                  className="flex items-center gap-2 text-xs text-slate-300 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-[#ba242a]" />
                  <span>Call +234 916 240 2271</span>
                </a>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#901A1E] hover:bg-[#ba242a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#901A1E]/30 transition-all cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
