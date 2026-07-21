"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Braces,
  CreditCard,
  Palette,
  Server,
  Sparkles,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { skillGroups, type SkillGroup } from "@/data/portfolio";

const iconMap: Record<SkillGroup["icon"], LucideIcon> = {
  braces: Braces,
  palette: Palette,
  server: Server,
  creditCard: CreditCard,
  wrench: Wrench,
};

type Accent = {
  hex: string;
  text: string;
  border: string;
  bg: string;
  shadow: string;
};

const accents: Accent[] = [
  {
    hex: "#22d3ee",
    text: "text-accent-cyan",
    border: "border-accent-cyan/50",
    bg: "bg-accent-cyan/10",
    shadow: "shadow-[0_0_25px_-4px_rgba(34,211,238,0.6)]",
  },
  {
    hex: "#3b82f6",
    text: "text-accent-blue",
    border: "border-accent-blue/50",
    bg: "bg-accent-blue/10",
    shadow: "shadow-[0_0_25px_-4px_rgba(59,130,246,0.6)]",
  },
  {
    hex: "#6366f1",
    text: "text-accent-indigo",
    border: "border-accent-indigo/50",
    bg: "bg-accent-indigo/10",
    shadow: "shadow-[0_0_25px_-4px_rgba(99,102,241,0.6)]",
  },
];

const RADIUS = 175; // px — orbit radius at full scale
const NODE = 68; // px — node diameter

export function SkillOrbit() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const paused = active !== null || hovered;

  const total = skillGroups.length;
  const activeGroup = active !== null ? skillGroups[active] : null;
  const activeAccent = active !== null ? accents[active % accents.length] : null;

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ height: 460, width: 460, maxWidth: "100%" }}
      >
        {/* scale wrapper for small screens */}
        <div className="relative h-[460px] w-[460px] scale-[0.62] sm:scale-90 lg:scale-100">
          {/* static orbit rings */}
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05]" />
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

          {/* rotating orbit layer */}
          <div
            className={`absolute inset-0 animate-orbit ${
              paused ? "[animation-play-state:paused]" : ""
            }`}
          >
            {skillGroups.map((group, i) => {
              const a = (i / total) * Math.PI * 2 - Math.PI / 2;
              const x = Math.cos(a) * RADIUS;
              const y = Math.sin(a) * RADIUS;
              const Icon = iconMap[group.icon];
              const accent = accents[i % accents.length];
              const isActive = active === i;

              return (
                <div
                  key={group.title}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - ${NODE / 2}px)`,
                    top: `calc(50% + ${y}px - ${NODE / 2}px)`,
                    height: NODE,
                    width: NODE,
                  }}
                >
                  {/* counter-rotate so the node stays upright */}
                  <div
                    className={`h-full w-full animate-orbit-reverse ${
                      paused ? "[animation-play-state:paused]" : ""
                    }`}
                  >
                    <button
                      onClick={() => setActive(isActive ? null : i)}
                      aria-label={group.title}
                      className={`group relative grid h-full w-full place-items-center rounded-2xl border bg-ink-800/90 backdrop-blur transition-all duration-300 hover:scale-110 ${
                        isActive
                          ? `${accent.border} ${accent.bg} ${accent.shadow} scale-110`
                          : "border-white/10 hover:border-white/25"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 transition-colors ${
                          isActive ? accent.text : "text-slate-300"
                        }`}
                      />
                      <span className="pointer-events-none absolute -bottom-6 left-1/2 w-max max-w-[120px] -translate-x-1/2 text-center text-[11px] font-medium leading-tight text-slate-400">
                        {group.title.split(" ")[0]}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* center hub / detail card */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <AnimatePresence mode="wait">
              {activeGroup && activeAccent ? (
                <motion.div
                  key={activeGroup.title}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card w-[220px] bg-ink-900/95 p-5 text-center shadow-card backdrop-blur-xl"
                >
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-md text-slate-500 transition-colors hover:text-slate-200"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <span
                    className="mx-auto grid h-11 w-11 place-items-center rounded-xl border"
                    style={{
                      borderColor: `${activeAccent.hex}55`,
                      backgroundColor: `${activeAccent.hex}18`,
                      color: activeAccent.hex,
                    }}
                  >
                    {(() => {
                      const Icon = iconMap[activeGroup.icon];
                      return <Icon className="h-5 w-5" />;
                    })()}
                  </span>
                  <h3 className="mt-3 font-display text-sm font-semibold text-slate-100">
                    {activeGroup.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {activeGroup.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="hub"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  className="relative grid h-32 w-32 place-items-center"
                >
                  <span className="absolute inset-0 animate-pulse-slow rounded-full bg-accent-cyan/20 blur-2xl" />
                  <span className="absolute inset-3 rounded-full border border-white/10" />
                  <div className="relative grid h-20 w-20 place-items-center rounded-full bg-accent-gradient text-ink-950 shadow-glow">
                    <Sparkles className="h-7 w-7" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p className="-mt-4 text-center text-sm text-slate-500">
        {activeGroup ? (
          <>
            Showing{" "}
            <span className="text-slate-300">{activeGroup.title}</span> — click
            the hub to reset
          </>
        ) : (
          <>Tap any node to explore that part of the stack</>
        )}
      </p>
    </div>
  );
}
