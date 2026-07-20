"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  Download,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  heroHeadlines,
  profile,
  stats,
  whatsapp,
} from "@/lib/data";
import CountUp from "./ui/CountUp";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % heroHeadlines.length),
      2600
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* grid + animated aurora glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] dark:bg-grid-dark" />
      <div className="glow-blob left-[-6rem] top-24 h-72 w-72 animate-aurora bg-accent/30" />
      <div
        className="glow-blob right-[-4rem] bottom-10 h-80 w-80 animate-aurora bg-cyan-500/25"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="glow-blob left-1/3 top-1/2 h-64 w-64 animate-aurora bg-emerald-500/15"
        style={{ animationDelay: "-9s" }}
      />

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT — copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient animate-gradient-x bg-[length:200%_auto]">
              Hunain Aslam
            </span>
          </motion.h1>

          {/* rotating headline */}
          <div className="mt-4 flex h-9 items-center text-lg font-medium sm:text-xl md:h-10 md:text-2xl">
            <Sparkles className="mr-2 h-5 w-5 shrink-0 text-accent" />
            <div className="relative flex-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center text-black/80 dark:text-white/85"
                >
                  {heroHeadlines[i]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed muted sm:text-lg"
          >
            I help businesses ship high-performance ERP systems and websites
            that <span className="font-semibold text-accent-600 dark:text-accent">convert</span> —
            fast, SEO-friendly, and built to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="h-4 w-4" />
              Hire Me
            </a>
            <a href="#projects" className="btn-ghost">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-black/70 transition-colors hover:text-accent dark:text-white/70"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <div className="mt-4 flex items-center gap-1.5 text-sm muted">
            <MapPin className="h-4 w-4 text-accent" />
            {profile.location}
          </div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass px-3 py-4 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl font-bold text-gradient sm:text-3xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-1 text-[11px] leading-tight muted sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden max-w-sm lg:block"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/40 via-transparent to-cyan-500/30 blur-2xl" />
          {/* rotating conic ring */}
          <div
            aria-hidden
            className="absolute -inset-6 animate-spin-slow rounded-full opacity-40 blur-md"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(45,212,191,0.6), transparent 40%)",
            }}
          />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-accent/10 to-transparent">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 0px, 400px"
                className="object-cover object-top"
              />
            </div>
          </div>
          {/* floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-5 -left-5 flex items-center gap-3 px-4 py-3"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
              ⚛
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">React & Next.js</div>
              <div className="text-[11px] muted">Specialist</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
