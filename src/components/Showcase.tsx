"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/ContainerScroll";

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
          </div>
        }
      >
        <Image
          src="/projects/adalatdentalerp.png"
          alt="Dentalzorg ERP analytics dashboard"
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover object-top transition-[object-position] duration-[6000ms] ease-linear hover:object-bottom"
          priority
        />
      </ContainerScroll>
    </section>
  );
}
