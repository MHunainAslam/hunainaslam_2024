"use client";

import { CheckCircle2, GraduationCap, MessageCircle } from "lucide-react";
import { about, whatsapp } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <span className="section-label">About Me</span>
          <h2 className="heading max-w-2xl">
            Turning complex business logic into{" "}
            <span className="text-gradient">clean, fast products.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* bio + highlights */}
          <Reveal delay={0.05}>
            <div className="glass h-full p-7 sm:p-9">
              <div className="space-y-4 text-base leading-relaxed text-black/75 dark:text-white/75">
                {about.bio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-black/70 dark:text-white/70">{h}</span>
                  </li>
                ))}
              </ul>

              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                <MessageCircle className="h-4 w-4" />
                Let&apos;s work together
              </a>
            </div>
          </Reveal>

          {/* education */}
          <Reveal delay={0.1}>
            <div className="glass h-full p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {about.education.map((e) => (
                  <div
                    key={e.title}
                    className="relative border-l border-black/10 pl-5 dark:border-white/10"
                  >
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                    <div className="text-sm font-semibold">{e.title}</div>
                    <div className="text-sm text-accent-600 dark:text-accent">
                      {e.org}
                    </div>
                    <div className="mt-0.5 text-xs muted">{e.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
