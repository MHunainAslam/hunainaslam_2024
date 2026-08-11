"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, FolderGit2, Star } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accentRing: Record<Project["accent"], string> = {
  cyan: "from-accent-cyan/25",
  blue: "from-accent-blue/25",
  indigo: "from-accent-indigo/25",
};

const accentText: Record<Project["accent"], string> = {
  cyan: "text-accent-cyan",
  blue: "text-accent-blue",
  indigo: "text-accent-indigo",
};

function ShowcaseCard({ p, hero }: { p: Project; hero: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);

  // 3D tilt that follows the cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const isLink = p.link !== "#";

  return (
    <motion.a
      ref={ref}
      href={p.link}
      target={isLink ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative flex h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900 ${
        hero
          ? "min-h-[380px] sm:col-span-2 sm:min-h-[440px] lg:col-span-2 lg:row-span-2 lg:min-h-0"
          : "min-h-[260px]"
      }`}
    >
      {/* background image / fallback */}
      {p.image ? (
        <Image
          src={p.image}
          alt={`${p.title} preview`}
          fill
          sizes={hero ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
          className="object-cover object-top transition-[object-position] duration-[6000ms] ease-linear group-hover:object-bottom"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-700 to-ink-950">
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentRing[p.accent]} to-transparent opacity-70`}
          />
          <FolderGit2 className={`relative h-14 w-14 ${accentText[p.accent]}`} />
        </div>
      )}

      {/* darkening overlay for legible text */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-ink-950/5 transition-colors duration-300 group-hover:from-ink-950 group-hover:via-ink-950/60" />
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition group-hover:ring-white/25" />

      {/* top badges */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
        <span
          className={`rounded-full border border-white/10 bg-ink-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${accentText[p.accent]}`}
        >
          {p.category}
        </span>
        {p.featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-ink-950/70 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-200 backdrop-blur">
            <Star className="h-3 w-3 text-accent-cyan" />
            Featured
          </span>
        )}
      </div>

      {/* bottom content */}
      <div className="relative z-10 mt-auto w-full p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-display font-semibold leading-tight text-white ${
              hero ? "text-2xl sm:text-3xl" : "text-lg"
            }`}
          >
            {p.title}
          </h3>
          <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan" />
        </div>

        {/* description + tags: always shown on hero, revealed on hover for the rest */}
        <div
          // Touch devices have no hover, so the details stay visible there and
          // only collapse into the hover reveal from lg up.
          className={
            hero
              ? "mt-2"
              : "mt-2 lg:mt-0 lg:grid lg:grid-rows-[0fr] lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:mt-2 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100"
          }
        >
          <div className="overflow-hidden">
            <p
              className={`text-slate-300 ${
                hero ? "max-w-xl text-sm sm:text-base" : "text-xs"
              }`}
            >
              {p.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.slice(0, hero ? 6 : 3).map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 text-[11px] font-medium text-slate-200 backdrop-blur"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Projects"
          description="A mix of ERP platforms, SEO-driven marketing sites, dashboards, and landing pages — built for real users and real businesses."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
          {projects.map((p, i) => (
            <ShowcaseCard key={p.title} p={p} hero={i === 0} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Live links coming soon — reach out and I&apos;ll happily walk you
          through any of these.
        </p>
      </div>
    </section>
  );
}
