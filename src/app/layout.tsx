import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/ui/BackgroundFX";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = "https://hunainaslam.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hunain Aslam — Frontend Engineer | React & Next.js",
    template: "%s | Hunain Aslam",
  },
  description:
    "Frontend engineer in Karachi. I build ERP systems and web apps in React and Next.js — currently leading the frontend on a dental ERP.",
  keywords: [
    "Hunain Aslam",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Karachi",
    "ERP",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hunain Aslam — Frontend Engineer",
    description:
      "React & Next.js engineer building ERP systems and web apps. Based in Karachi.",
    siteName: "Hunain Aslam",
    images: [
      { url: profile.photo, width: 1200, height: 630, alt: "Hunain Aslam — Frontend Engineer" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunain Aslam — Frontend Engineer",
    description:
      "React & Next.js engineer building ERP systems and web apps. Based in Karachi.",
    images: [profile.photo],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d0c0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="grain font-sans antialiased">
        <ThemeProvider>
          <BackgroundFX />
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
