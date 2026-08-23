"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { ArrowRight, Sparkles, Award, ChevronRight, UserCheck, ShieldCheck, GraduationCap, Briefcase } from "lucide-react";

const executives = [
  {
    name: "Durosola Omogbenigun",
    degrees: "B.Eng., M.Sc., MBA (Yale Univ.)",
    role: "Managing Director / Board Member",
    paragraphs: [
      "Duro was trained as an Electrical Engineer where he obtained a Master of Science Degree in Controls and Instrumentation from Obafemi Awolowo University and a Bachelor of Engineering in Electronics from University of Ilorin. Duro won various scholarship and merit awards while in school and the coveted Total Quality Management award at Mobil Oil Nigeria plc. Duro also sits on the Boards of Bluefone Ltd (Chairman; marine logistics solutions company), LYK Engineering Ltd (investors in Akwa refinery & Ibom Power Company that produces about 155MW). This interest exposed him to negotiation of PPA, GSA and its securitisation, Use of System Infrastructure and a Fund Raising Road Show in South Africa with Fieldstone Ltd. He is a shareholder in Tianjin Energy Resources Ltd that owns OPL240. Here he participated in negotiation of Farm-In Agreements, Joint Operating Agreements, development of Oil Field Development Work Program. Duro has also been active in the trading of refined Petroleum Products and deployment of marine assets for logistic solutions.",
    ],
    highlights: ["Yale University MBA", "Obafemi Awolowo Univ. M.Sc. Controls", "Ibom Power 155MW PPA & GSA", "Total Quality Management Award"],
  },
  {
    name: "Peter Butt",
    degrees: "BA (Hons) Economics, MSc Economics, PGD Computer Science, MBA (Henley Management College)",
    role: "Economic & Regulatory Advisor",
    paragraphs: [
      "Peter has over 25 years' experience in the power industry. He has substantial experience in project development, the development of rules and codes for the power industry, the development/modifications of licenses, assessment of bidding strategies and market behaviour, the development of risk management strategies and the designing and delivery of management training and regulatory training programmes.",
      "Peter has worked with the Confederation of British Industry as energy policy adviser and for Eastern Energy of the UK (now part of Eon) as regulatory adviser and as information and forecasting manager, where he was responsible for producing electricity price forecasts. He managed the commercial evaluation of a new generation unit loading and despatch scheduler of the UK electricity market. Internationally, he has had project management roles in major projects concerned with the restructuring of the electricity industry in South Korea, with capability development for the electricity regulatory agency in Pakistan, with advising on risk management strategies in the Netherlands, as a special adviser to the Saudi Electricity Regulatory Authority and with specifying and implementing management information system for a newly corporatized distribution companies in Bangladesh.",
      "Peter was the Team Leader and Resident Economic Regulatory Expert for the capacity building of the Nigerian Electricity Regulatory Commission. He was the energy economist responsible for advising a team of consultants working for Kaduna State in Nigeria on power generation of multi-purpose hydro dams. He was a member of team of economists engaged to review the Petroleum Industry Bill passing through the Nigeria National Assembly on behalf of the Nigerian National Petroleum Corporation (NNPC).",
      "Peter Butt was also selected to prepare and deliver management and regulatory training to senior NNPC staff. He supported the African Development Bank in assessing the Nigerian power sector. He also managed the development of an emergency power station in Sao Tome and Principe.",
    ],
    highlights: ["25+ Years Power Industry", "Resident Expert NERC Capacity Building", "Adviser to UK Eastern Energy (Eon)", "AfDB Assessment & NNPC Training"],
  },
  /* {
    name: "Joseph Akinyanmi",
    degrees: "Masters Measurement & Evaluation, HSE Certified",
    role: "Production / Factory Manager",
    paragraphs: [
      "Joseph Akinyanmi has over 9 years experience in the metering industry. He holds vast professional knowledge in meter production/assembly, configuration and testing, Advanced Meter Infrastructure and Head End Systems application, installation as well as project supervision.",
      "He supervised Mass Metering Programme of HUAWEI Technology Nigeria/ Ikeja Electric, Debt For Metering, CAPMI, MAP and NMMP Installations. He also has good knowledge in installation of Data Concentrator Unit (DCU), Maximum Demand (MD) meters, and supervised meter installations on Telecom sites.",
      "He currently holds a Masters degree in Measurement and Evaluation, Meter installation Work at Height, and HSE certificates, amidst others.",
    ],
    highlights: ["9+ Years Metering Experience", "MAP, CAPMI & NMMP Supervision", "HUAWEI / Ikeja Electric Mass Metering", "AMI & Head End Systems Expert"],
  }, */
];

export default function ManagementTeamPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

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
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#901A1E]">Management Team</span>
          </div>
        </div>
      </section>

      {/* Page Title Section */}
      <section className="pb-12 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto">
          {/* Top Badge */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#901A1E]/10 text-[#901A1E] text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>LEADERSHIP &amp; GOVERNANCE</span>
            </div>
          </div>

          {/* Heading (Geist 400, 60px, 78px line-height) */}
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal text-slate-950 tracking-tight leading-[1.3] lg:leading-[78px] mb-4">
            Management Team
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-3xl">
            Seasoned electrical engineers, energy economists, and factory production experts driving indigenous meter manufacturing, renewable innovation, and regulatory excellence across Nigeria.
          </p>
        </div>
      </section>

      {/* Executive Profiles Stack */}
      <section className="pb-20 md:pb-28 px-2 sm:px-4 lg:px-6 w-full">
        <div className="w-full max-w-[1600px] mx-auto space-y-10">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="p-8 sm:p-12 rounded-[32px] bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#901A1E]/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header: Name, Credentials & Role Badge */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#901A1E]"></span>
                    <span className="text-xs font-mono font-bold text-[#901A1E] uppercase tracking-wider">
                      {exec.role}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-950 tracking-tight">
                    {exec.name}
                  </h2>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1 block">
                    {exec.degrees}
                  </span>
                </div>

                {/* Badges / Highlights */}
                <div className="flex flex-wrap gap-2">
                  {exec.highlights.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio Paragraphs (Verbatim Writeup without bold styling) */}
              <div className="pt-6 space-y-4 text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal">
                {exec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
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
