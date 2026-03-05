import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataRentable | Business Intelligence para PYMES",
  description: "Consultoría estratégica de BI y Analytics para empresas que buscan rentabilizar sus datos. Especialistas en Retail, Construcción y Flotas.",
  openGraph: {
    title: "DataRentable | Inteligencia de Datos",
    description: "Transformamos tus datos en activos rentables.",
    url: "https://datarentable.com",
    siteName: "DataRentable",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-background text-text-main font-sans selection:bg-primary/30 selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
