"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { mailto, profile, whatsapp } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, Whatsapp } from "./ui/BrandIcons";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const socials = [
    { href: profile.github, icon: Github, label: "GitHub" },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: whatsapp, icon: Whatsapp, label: "WhatsApp" },
    { href: mailto, icon: Mail, label: "Email" },
  ];

  return (
    <header className="pt-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-28">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={72}
            height={72}
            priority
            className="h-[72px] w-[72px] rounded-full object-cover object-top ring-1 ring-black/10 dark:ring-white/15"
          />
          <ThemeToggle />
        </div>

        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Hunain Aslam
        </h1>
        <p className="mt-3 text-lg font-medium">Frontend Engineer</p>
        <p className="mt-1 font-mono text-sm muted">Karachi, Pakistan</p>

        <p className="mt-6 max-w-sm text-[15px] leading-relaxed muted">
          I build ERP systems and web applications with React and Next.js. I
          currently lead frontend development on a dental ERP.
        </p>

        {/* nav with active-section indicator */}
        <nav className="mt-12 hidden lg:block">
          <ul className="space-y-1">
            {sections.map((s) => {
              const on = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center gap-4 py-2"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        on
                          ? "w-14 bg-accent"
                          : "w-7 bg-black/25 group-hover:w-10 group-hover:bg-black/60 dark:bg-white/25 dark:group-hover:bg-white/60"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                        on
                          ? "font-semibold text-accent"
                          : "muted group-hover:text-black dark:group-hover:text-white"
                      }`}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* socials + resume */}
      <div className="mt-10 flex items-center gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-black/50 transition-colors hover:text-accent dark:text-white/50"
          >
            <s.icon className="h-5 w-5" />
          </a>
        ))}
        <a
          href={profile.resume}
          download
          className="ml-auto link-underline font-mono text-xs uppercase tracking-[0.15em]"
        >
          Résumé
        </a>
      </div>
    </header>
  );
}
