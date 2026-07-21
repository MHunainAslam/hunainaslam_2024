"use client";

import { proficiencies } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillOrbit } from "@/components/ui/SkillOrbit";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* section glow */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-accent-blue/10 blur-[120px]" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Tech Stack"
          title="An orbit of tools I build with"
          description="A modern frontend toolkit built around React and Next.js. Explore each part of the stack — from state management and styling to APIs, payments, and deployment."
        />

        {/* Interactive radial orbit */}
        <Reveal className="mt-12">
          <SkillOrbit />
        </Reveal>

        {/* Proficiency bars */}
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
          <div className="glass-card p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-slate-100">
              Core Proficiency
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {proficiencies.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-accent-cyan/40 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Marquee-style tech ribbon */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] py-4">
            <div className="flex animate-marquee gap-8 whitespace-nowrap">
              {[...ribbon, ...ribbon].map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="font-display text-sm font-medium uppercase tracking-widest text-slate-500"
                >
                  {t} <span className="text-accent-cyan">/</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const ribbon = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Ant Design",
  "REST APIs",
  "Stripe",
  "PayPal",
  "Pusher",
  "Vercel",
];
