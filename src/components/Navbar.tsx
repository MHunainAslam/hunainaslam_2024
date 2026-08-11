"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  FolderKanban,
  Home,
  Mail,
  Sparkles,
  User,
} from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { LimelightNav, type LimelightItem } from "@/components/ui/LimelightNav";
import { useActiveSection } from "@/components/ui/useActiveSection";

const menuLinks = [{ label: "Home", href: "#top" }, ...navLinks];

const NAV_ICONS: Record<string, typeof User> = {
  "#top": Home,
  "#about": User,
  "#skills": Sparkles,
  "#experience": Briefcase,
  "#projects": FolderKanban,
  "#contact": Mail,
};

const limelightItems: LimelightItem[] = menuLinks.map((link) => {
  const Icon = NAV_ICONS[link.href] ?? User;
  return {
    id: link.href,
    label: link.label,
    href: link.href,
    icon: <Icon />,
  };
});

// Module-level so the array identity stays stable across renders.
const MENU_HREFS = menuLinks.map((l) => l.href);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useActiveSection(MENU_HREFS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the drawer.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      {/* Scrim lives OUTSIDE the header: as a header child it would sit inside
          the header's own z-50 stacking context, where a negative z-index put it
          behind the page content and it dimmed nothing. */}
      <AnimatePresence>
        {open && (
          <motion.button
            aria-label="Close menu"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-16 z-40 cursor-default bg-ink-950/75 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-px flex h-16 items-center justify-between gap-3 md:h-20">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            // min-w-0 lets the name truncate on tiny phones; from md up the logo
            // must not shrink or the full name gets clipped by the centre nav.
            className="group flex min-w-0 items-center gap-2.5 font-display font-bold tracking-tight md:flex-shrink-0"
          >
            <span className="relative grid h-9 w-9 flex-shrink-0 place-items-center overflow-hidden rounded-full shadow-glow">
              <Image
                src="/hunain.png"
                alt={profile.name}
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-[0.95rem] text-slate-100 transition-colors group-hover:text-accent-cyan sm:text-lg">
                {profile.name}
              </span>
              {/* role subtitle fills the dead space the bare avatar used to leave */}
              <span className="mt-0.5 truncate text-[0.6rem] font-medium uppercase tracking-[0.18em] text-slate-500 md:hidden">
                {profile.role}
              </span>
            </span>
          </a>

          <div className="hidden md:block">
            <LimelightNav items={limelightItems} />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-colors hover:text-accent-cyan"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-colors hover:text-accent-cyan"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`relative grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border transition-colors duration-300 md:hidden ${
              open
                ? "border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan"
                : "border-white/10 text-slate-200"
            }`}
          >
            {/* Two bars that cross into an X. The lower one is shorter and
                right-aligned when closed, so it reads as a hamburger rather
                than an equals sign, then grows to match on open. */}
            <span
              className={`absolute h-[1.5px] rounded-full bg-current transition-all duration-300 ease-out ${
                open ? "w-4 rotate-45" : "w-4 -translate-y-[3.5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] rounded-full bg-current transition-all duration-300 ease-out ${
                open
                  ? "w-4 -rotate-45"
                  : "w-2.5 translate-x-[3px] translate-y-[3.5px]"
              }`}
            />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl md:hidden"
            >
              <div className="container-px max-h-[calc(100svh-4rem)] overflow-y-auto py-4">
                <ul className="flex flex-col gap-2">
                  {menuLinks.map((link, i) => {
                    const Icon = NAV_ICONS[link.href] ?? User;
                    const isActive = i === activeIndex;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: 0.03 * i,
                          ease: "easeOut",
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={() => {
                            setActiveIndex(i);
                            setOpen(false);
                          }}
                          aria-current={isActive ? "page" : undefined}
                          className={`group flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-colors ${
                            isActive
                              ? "border-accent-cyan/30 bg-accent-cyan/[0.07]"
                              : "border-white/[0.06] bg-white/[0.02] active:border-white/15 active:bg-white/[0.05]"
                          }`}
                        >
                          <span
                            className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl border transition-colors ${
                              isActive
                                ? "border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan"
                                : "border-white/10 bg-white/[0.03] text-slate-400"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span
                            className={`flex-1 text-sm font-medium ${
                              isActive ? "text-slate-50" : "text-slate-300"
                            }`}
                          >
                            {link.label}
                          </span>
                          {isActive ? (
                            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan shadow-glow" />
                          ) : (
                            <ChevronRight className="h-4 w-4 flex-shrink-0 text-slate-600" />
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-4 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-11 flex-1 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-300 transition-colors active:border-accent-cyan/50 active:text-accent-cyan"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-11 flex-1 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-300 transition-colors active:border-accent-cyan/50 active:text-accent-cyan"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="grid h-11 flex-1 place-items-center rounded-xl bg-accent-gradient text-ink-950 shadow-glow-blue"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
