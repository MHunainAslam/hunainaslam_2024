"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, Folder } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="glow-blob right-[-4rem] top-24 h-72 w-72 bg-cyan-500/15" />

      <div className="container-x relative z-10">
        <Reveal>
          <span className="section-label">Projects</span>
          <h2 className="heading max-w-2xl">
            Work that <span className="text-gradient">ships & scales</span>.
          </h2>
          <p className="mt-4 max-w-xl text-base muted">
            Selected products — ERP platforms, real-time apps and
            conversion-focused sites.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.name} delay={(idx % 3) * 0.08} className="h-full">
              <SpotlightCard className="h-full">
              <article
                className="glass glass-hover group flex h-full flex-col overflow-hidden"
              >
                {/* image / placeholder */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/10 via-transparent to-cyan-500/10">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Folder className="h-12 w-12 text-accent/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold">{p.name}</h3>
                    {p.link && (
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-black/30 transition-colors group-hover:text-accent dark:text-white/30" />
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed muted">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="chip !text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:gap-2.5 dark:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Live Site
                    </a>
                  ) : (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium muted">
                      Internal / Private
                    </span>
                  )}
                </div>
              </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
