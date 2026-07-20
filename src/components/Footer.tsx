"use client";

import { Mail, MessageCircle } from "lucide-react";
import { mailto, profile, whatsapp } from "@/lib/data";
import { Github, Linkedin } from "./ui/BrandIcons";

export default function Footer() {
  const socials = [
    { href: whatsapp, icon: MessageCircle, label: "WhatsApp" },
    { href: profile.github, icon: Github, label: "GitHub" },
    { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: mailto, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/5">
      <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-bold text-ink-950">
            HA
          </span>
          <span className="text-sm muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-black/60 transition-colors hover:border-accent/50 hover:text-accent dark:border-white/10 dark:text-white/60"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="text-xs muted">Built with Next.js</div>
      </div>
    </footer>
  );
}
