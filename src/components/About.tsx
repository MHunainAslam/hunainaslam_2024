"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, GraduationCap, MapPin, Zap } from "lucide-react";
import { education, profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionButton } from "@/components/ui/MotionButton";

const highlights = [
  "3+ years shipping production React & Next.js apps",
  "ERP systems & data-heavy business dashboards",
  "SSR / SSG for SEO-friendly, fast-loading pages",
  "Payment integrations with Stripe & PayPal",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title="Turning complex products into clean, fast interfaces"
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Photo / avatar card */}
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl bg-accent-gradient opacity-30 blur-lg transition-opacity duration-500 group-hover:opacity-60" />
              <div className="glass-card relative overflow-hidden rounded-3xl p-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-ink-800">
                  <Image
                    src="/hunain.png"
                    alt={`${profile.name} — ${profile.role}`}
                    width={1024}
                    height={1536}
                    priority
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/10" />
                </div>
              </div>
              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card absolute -bottom-5 -right-4 flex items-center gap-2 px-4 py-2.5 shadow-card"
              >
                <Zap className="h-4 w-4 text-accent-cyan" />
                <span className="text-sm font-semibold text-slate-100">
                  Open to work
                </span>
              </motion.div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate-300">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-gradient" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Education */}
            <Reveal delay={0.3}>
              <div className="mt-10">
                <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-slate-400">
                  <GraduationCap className="h-4 w-4 text-accent-cyan" />
                  Education
                </h3>
                <div className="mt-4 space-y-3">
                  {education.map((e) => (
                    <div
                      key={e.degree}
                      className="glass-card glass-card-hover flex flex-wrap items-center justify-between gap-2 px-5 py-4"
                    >
                      <div>
                        <p className="font-medium text-slate-100">{e.degree}</p>
                        <p className="text-sm text-slate-400">
                          {e.institution}
                        </p>
                      </div>
                      <span className="chip">{e.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MotionButton
                  href={profile.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  label="View Résumé"
                  icon={Download}
                />
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-accent-cyan" />
                  Based in {profile.location}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
