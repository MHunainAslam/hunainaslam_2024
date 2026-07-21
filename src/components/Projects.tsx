"use client";

import Image from "next/image";
import { ArrowUpRight, Folder } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Selected Work</span>
          <h2 className="heading max-w-2xl">Some things I&apos;ve built.</h2>
          <p className="mt-4 max-w-xl text-base muted">
            A mix of the ERP work I do daily and client projects along the way.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => {
            const Wrapper = p.link ? "a" : "div";
            return (
              <Reveal key={p.name} delay={(idx % 3) * 0.08} className="h-full">
                <Wrapper
                  {...(p.link
                    ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="card card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10 bg-ink-800 dark:border-white/10">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Folder className="h-10 w-10 text-accent/40" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-medium">{p.name}</h3>
                      {p.link && (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-black/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:text-white/30" />
                      )}
                    </div>
                    <p className="mt-2 flex-1 text-sm leading-relaxed muted">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
