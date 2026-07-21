"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { heroIntro, profile, stats, whatsapp } from "@/lib/data";
import CountUp from "./ui/CountUp";
import Magnetic from "./ui/Magnetic";
import CodeWindow from "./ui/CodeWindow";

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-24"
    >
      <motion.div
        style={{ y, opacity }}
        className="container-x grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* LEFT */}
        <div>
          <motion.p custom={0} initial="hidden" animate="show" variants={rise} className="eyebrow">
            <span className="mr-1 inline-flex h-2 w-2 rounded-full bg-green-500" />
            Open to work · Frontend Engineer · Karachi
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={rise}
            className="display mt-4 text-6xl leading-[0.9] sm:text-7xl lg:text-8xl"
          >
            Hunain
            <br />
            Aslam<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-black/70 dark:text-white/70 sm:text-xl"
          >
            {heroIntro}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a href="#projects" className="btn-primary">
                See my work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Say hi on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-black/60 transition-colors hover:text-accent dark:text-white/60"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          {/* stats */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={rise}
            className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-black/10 pt-8 dark:border-white/10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="display text-4xl text-accent sm:text-5xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase leading-tight tracking-wide muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — animated code window + vector accents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="relative mt-6 lg:mt-0"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border-2 border-accent/70" />

          <svg
            aria-hidden
            className="absolute -right-8 -top-10 h-24 w-24 animate-float text-accent/30"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M50 5 C70 5 95 25 95 50 C95 75 75 95 50 95 C25 95 5 72 5 50 C5 28 30 5 50 5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          <CodeWindow />

          <span
            className="absolute -left-6 top-10 rounded-lg border border-black/10 bg-white/80 px-3 py-1.5 font-mono text-sm text-accent shadow-md backdrop-blur animate-float dark:border-white/10 dark:bg-ink-800/90"
            style={{ animationDelay: "-2s" }}
          >
            &lt;/&gt;
          </span>
          <span
            className="absolute -bottom-5 right-8 rounded-lg border border-black/10 bg-white/80 px-3 py-1.5 font-mono text-sm text-accent shadow-md backdrop-blur animate-float dark:border-white/10 dark:bg-ink-800/90"
            style={{ animationDelay: "-4s" }}
          >
            {"{ }"}
          </span>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest muted sm:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce-soft text-accent" />
      </motion.a>
    </section>
  );
}
