import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import Providers from "./Providers";
import "../../public/assets/style.css";
import "../../public/assets/redesign.css";
import "../../public/assets/motion.css";
import "lenis/dist/lenis.css";
import "./lib/fontawesome";
import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import SiteMotion from "@/components/SiteMotion";
import CodeGlyphs from "@/components/CodeGlyphs";
import CodeCursor from "@/components/CodeCursor";
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* Apply the saved theme before paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var q=new URLSearchParams(location.search).get('theme');var t=(q==='light'||q==='dark')?q:localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}localStorage.setItem('theme',t);document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>

      <body className={inter.className}>
        <div className="hx-progress"></div>
        <div className="aurora">
          <span></span>
          <span></span>
          <span></span>
        </div>
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
        <CodeGlyphs />
        <CodeCursor />
        <Suspense fallback={"Loading"}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <SiteMotion />
          </Providers>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
