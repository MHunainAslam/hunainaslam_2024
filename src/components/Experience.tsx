"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Career"
          title="Experience Timeline"
          description="Four years of steady growth — from intern to senior engineer leading product-critical work."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* vertical line — left rail on mobile, centred on desktop */}
          <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-accent-cyan/60 via-accent-blue/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative pl-14 sm:w-1/2 sm:pl-0 ${
                    left ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  {/* node — centred on the line */}
                  <span
                    className={`absolute top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-accent-cyan/40 bg-ink-900 text-accent-cyan shadow-glow left-0 ${
                      left
                        ? "sm:left-auto sm:right-0 sm:translate-x-1/2"
                        : "sm:-translate-x-1/2"
                    }`}
                  >
                    <Briefcase className="h-4 w-4" />
                  </span>

                  <div className="glass-card glass-card-hover p-6">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        left ? "sm:justify-end" : ""
                      }`}
                    >
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-0.5 text-xs font-medium text-accent-cyan">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                          Current
                        </span>
                      )}
                      <span className="chip">{exp.period}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-slate-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-gradient">
                      {exp.company}
                    </p>
                    <ul
                      className={`mt-4 space-y-2 text-sm text-slate-400 ${
                        left ? "sm:text-right" : ""
                      }`}
                    >
                      {exp.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
