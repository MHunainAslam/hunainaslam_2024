"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  FolderKanban,
  Home,
  Mail,
  Menu,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { LimelightNav, type LimelightItem } from "@/components/ui/LimelightNav";

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full shadow-glow">
            <Image
              src="/hunain.png"
              alt={profile.name}
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden text-slate-100 transition-colors group-hover:text-accent-cyan sm:block">
            {profile.name}
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
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-accent-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-4 px-4">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-300 hover:text-accent-cyan"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-300 hover:text-accent-cyan"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
