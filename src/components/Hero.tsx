"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { companies, profile, stats } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Typewriter } from "@/components/ui/Typewriter";
import { MotionButton } from "@/components/ui/MotionButton";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroStats = stats.slice(0, 3);

// front → 3/4 → side → 3/4-back → back
const heroFrames = [
  "/hero-frame-1.png",
  "/hero-frame-2.png",
  "/hero-frame-3.png",
  "/hero-frame-4.png",
  "/hero-frame-5.png",
];

function useDirectionalFrame() {
  const ref = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const dx = (e.clientX - cx) / (window.innerWidth / 2);
      const clamped = Math.max(-1, Math.min(1, dx));
      const abs = Math.abs(clamped);

      // capped at the side profile — never turns to 3/4-back or back
      let index = 0;
      if (abs > 0.5) index = 2;
      else if (abs > 0.1) index = 1;

      setFrame(index);
      setFlipped(clamped > 0);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return { ref, frame, flipped };
}

export function Hero() {
  const { ref: heroRef, frame, flipped } = useDirectionalFrame();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20">

        {/* moving color mesh */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(115deg, #22d3ee 0%, #3b82f6 30%, #6366f1 55%, #0ea5e9 80%, #22d3ee 100%)",
            backgroundSize: "220% 220%",
          }}
        />

        {/* vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent,#05060a_85%)]" />

      </div>

        <div className="container-px relative">
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex min-w-0 flex-1 flex-col items-center text-center lg:col-span-8 lg:items-start lg:text-left"
          >
            {/* <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/[0.06] px-4 py-1.5 text-sm text-accent-cyan backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              Available for new opportunities
            </motion.div> */}

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl md:text-7xl"
            >
              <Typewriter
                text={`Hi, I'm ${profile.name}`}
                speed={75}
                delay={500}
                className="text-gradient"
                cursorClassName="bg-accent-cyan"
              />
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-lg text-slate-300 sm:text-xl md:text-2xl"
            >
              <span className="font-semibold text-slate-100">{profile.role}</span>{" "}
              — {profile.tagline}
            </motion.p>

            <motion.p
              variants={item}
              className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0"
            >
              React, Next.js &amp; TypeScript specialist, focused on performance
              and scalable UI.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <MotionButton href="#projects" label="View My Work" />
              <MotionButton
                href="#contact"
                label="Get in Touch"
                variant="secondary"
                icon={Mail}
              />
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start"
            >
              {heroStats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-x-8">
                  {i > 0 && <span className="h-8 w-px bg-white/10" />}
                  <div>
                    <dd className="font-display text-2xl font-bold text-slate-100">
                      {s.value}
                      <span className="text-accent-cyan">{s.suffix}</span>
                    </dd>
                    <dt className="mt-0.5 text-xs text-slate-500">{s.label}</dt>
                  </div>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* 3D illustration — right side, large screens only */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:col-span-4 lg:flex lg:justify-end"
          >
            <div
              ref={heroRef}
              className="relative h-[360px] w-[360px] xl:h-[440px] xl:w-[440px]"
            >
              <div className="absolute inset-0 rounded-full bg-accent-cyan/10 blur-3xl" />
              <AnimatePresence>
                <motion.div
                  key={`${frame}-${flipped}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0"
                  style={{ transform: flipped ? "scaleX(-1)" : undefined }}
                >
                  <Image
                    src={heroFrames[frame]}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 440px, 360px"
                    className="object-contain drop-shadow-2xl"
                    priority={frame === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* company strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-14 border-t border-white/[0.06] pt-8"
        >
          <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-500">
            Experience across
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {companies.map((c) => (
              <span
                key={c}
                className="font-display text-base font-semibold text-slate-400 transition-colors hover:text-slate-200 sm:text-lg"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
