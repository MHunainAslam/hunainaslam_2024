import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-6">
      <div className="container-px">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a
              href="#top"
              className="font-display text-xl font-bold text-slate-100"
            >
              {profile.name}
            </a>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              {profile.role} crafting fast, accessible web experiences from{" "}
              {profile.location}.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-accent-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}.
        </div>
      </div>
    </footer>
  );
}
