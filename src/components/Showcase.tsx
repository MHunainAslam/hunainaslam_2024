"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ContainerScroll } from "@/components/ui/ContainerScroll";

const LIVE_URL = "https://erp.dentalzorg.com/";

export function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-accent-cyan/10 blur-[130px]" />
      <ContainerScroll
        titleComponent={
          <div className="pb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-cyan">
              Featured Build
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              Enterprise dashboards
              <br />
              <span className="text-gradient">that scale beautifully</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
              A live look at the Dentalzorg ERP — real-time data, clean
              information density, and a UI built for daily operators.
            </p>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan transition-colors hover:text-accent-blue"
            >
              View live site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        }
      >
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the live Dentalzorg ERP"
          className="group absolute inset-0"
        >
          <Image
            src="/projects/adalatdentalerp.png"
            alt="Dentalzorg ERP analytics dashboard"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top transition-[object-position] duration-[6000ms] ease-linear group-hover:object-bottom"
            priority
          />
          <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-ink-950/70 text-slate-200 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </ContainerScroll>
    </section>
  );
}
