import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import Providers from "./Providers";
import "../../public/assets/style.css";
import "./lib/fontawesome";
import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Hunain Aslam | Portfolio",
  description: "I am Hunain Aslam This is my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>

      <body className={inter.className}>
        <div className="bg-grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Suspense fallback={"Loading"}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
