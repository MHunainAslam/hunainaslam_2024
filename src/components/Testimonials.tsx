"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <span className="section-label">Social Proof</span>
          <h2 className="heading max-w-2xl">
            Trusted to <span className="text-gradient">deliver</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.08}>
              <figure className="glass glass-hover flex h-full flex-col p-7">
                <Quote className="h-8 w-8 text-accent/40" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-black/75 dark:text-white/75">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-black/5 pt-4 dark:border-white/5">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs muted">{t.title}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
