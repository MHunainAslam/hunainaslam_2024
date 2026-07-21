"use client";

import { skillGroups } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="heading max-w-2xl">What I reach for.</h2>
          <p className="mt-4 max-w-xl text-base muted">
            I&apos;d rather go deep on React and Next.js than spread myself thin
            across a dozen frameworks. Here&apos;s the day-to-day toolkit.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.title} delay={idx * 0.05}>
              <div className="grid gap-4 py-6 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-medium">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
