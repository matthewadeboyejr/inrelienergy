import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inreli Energy — Innovative Technological Solutions in Nigeria's Metering & Power Sector",
  description: "INRELI Limited is a licensed Local Meter Manufacturer/Assembler (LMMA) by NERC and NEMSA, certified by SON. Specializing in Smart STS GPRS Pre-Paid Meters, AMI Systems, Solar Home Systems, and Mini-Grids.",
  keywords: [
    "Inreli Energy",
    "Smart Meters Nigeria",
    "Prepaid Meter",
    "NERC Licensed LMMA",
    "NEMSA Certified",
    "STS GPRS Meter",
    "Estate Sub-metering",
    "Solar Mini-grid Nigeria",
    "IRL110",
    "IRL310"
  ],
  icons: {
    icon: "https://inrelienergy.com/wp-content/uploads/2023/06/inreli-60x60.png",
    apple: "https://inrelienergy.com/wp-content/uploads/2023/06/inreli.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#f8f9fa] text-slate-900 font-sans antialiased selection:bg-[#901A1E] selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
