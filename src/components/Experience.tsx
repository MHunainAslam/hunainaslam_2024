"use client";

import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="heading max-w-2xl">Where I&apos;ve worked.</h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent/60 via-black/10 to-transparent dark:via-white/10 sm:left-5" />

          <div className="space-y-8">
            {experience.map((job, idx) => (
              <Reveal key={job.company} delay={idx * 0.08}>
                <div className="relative pl-12 sm:pl-16">
                  <span
                    className={`absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border sm:h-11 sm:w-11 ${
                      job.current
                        ? "border-accent bg-accent/15 text-accent"
                        : "border-black/10 bg-white/60 text-black/50 dark:border-white/10 dark:bg-white/5 dark:text-white/50"
                    }`}
                  >
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>

                  <div className="card card-hover p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-accent">{job.company}</div>
                    <div className="mt-1 font-mono text-xs muted">{job.period}</div>

                    <ul className="mt-4 space-y-2">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-sm text-black/70 dark:text-white/70">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
