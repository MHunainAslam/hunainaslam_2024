import { ArrowUpRight } from "lucide-react";
import { mailto, profile, whatsapp } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pt-24">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent lg:hidden">
        Contact
      </h2>

      <h3 className="font-display text-2xl font-semibold sm:text-3xl">
        Get in touch
      </h3>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed muted">
        I&apos;m open to frontend roles and freelance projects. The quickest way
        to reach me is WhatsApp; email works well too, and I typically respond
        the same day.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <a
          href={mailto}
          className="group inline-flex w-fit items-center gap-2 font-display text-xl font-medium transition-colors hover:text-accent sm:text-2xl"
        >
          {profile.email}
          <ArrowUpRight className="h-5 w-5 text-black/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:text-white/30" />
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm muted">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            WhatsApp
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            GitHub
          </a>
          <span>{profile.phoneDisplay}</span>
        </div>
      </div>
    </section>
  );
}
