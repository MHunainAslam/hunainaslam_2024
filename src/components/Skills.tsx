"use client";

import { skillGroups } from "@/lib/data";
import Reveal from "./ui/Reveal";
import {
  Boxes,
  CreditCard,
  Palette,
  Plug,
  Wrench,
} from "lucide-react";

const icons = [Boxes, Palette, Plug, CreditCard, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      {/* subtle glow */}
      <div className="glow-blob left-1/2 top-10 h-64 w-64 -translate-x-1/2 bg-accent/15" />

      <div className="container-x relative z-10">
        <Reveal>
          <span className="section-label">Skills</span>
          <h2 className="heading max-w-2xl">
            The tools I use to <span className="text-gradient">ship</span>.
          </h2>
          <p className="mt-4 max-w-xl text-base muted">
            A focused, battle-tested stack — from real-time data and payments to
            SEO and deployment.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Reveal key={group.title} delay={idx * 0.06}>
                <div className="glass glass-hover h-full p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/12 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-sm font-semibold">{group.title}</h3>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
