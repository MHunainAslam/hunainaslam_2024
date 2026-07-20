import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://hunainaslam.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hunain Aslam — Senior Frontend Engineer | React & Next.js",
    template: "%s | Hunain Aslam",
  },
  description:
    "Senior Frontend Engineer specializing in React.js & Next.js. I build fast, SEO-friendly ERP systems and web apps that convert. Based in Karachi, Pakistan.",
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
    title: "Hunain Aslam — Senior Frontend Engineer",
    description:
      "React & Next.js specialist building fast, SEO-friendly web apps and ERP systems that convert.",
    siteName: "Hunain Aslam",
    images: [
      {
        url: profile.photo,
        width: 1200,
        height: 630,
        alt: "Hunain Aslam — Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunain Aslam — Senior Frontend Engineer",
    description:
      "React & Next.js specialist building fast, SEO-friendly web apps that convert.",
    images: [profile.photo],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
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
      className={`${inter.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
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
