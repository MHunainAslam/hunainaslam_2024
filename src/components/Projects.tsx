import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 pt-24">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent lg:hidden">
        Projects
      </h2>

      <div>
        {projects.map((p) => {
          const Wrapper = p.link ? "a" : "div";
          return (
            <Wrapper
              key={p.name}
              {...(p.link
                ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group grid gap-4 border-t border-black/10 py-7 transition-colors dark:border-white/10 sm:grid-cols-[132px_1fr] sm:gap-6"
            >
              {/* thumbnail */}
              {p.image ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-black/10 dark:border-white/10">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="132px"
                    className="object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </div>
              ) : (
                <div className="hidden aspect-[16/10] items-center justify-center rounded-md border border-dashed border-black/15 font-mono text-xs muted dark:border-white/15 sm:flex">
                  {p.tags[0]}
                </div>
              )}

              {/* text */}
              <div>
                <h3 className="flex items-center gap-1.5 text-base font-semibold">
                  <span className="transition-colors group-hover:text-accent">
                    {p.name}
                  </span>
                  {p.link && (
                    <ArrowUpRight className="h-4 w-4 text-black/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:text-white/30" />
                  )}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-black/70 dark:text-white/60">
                  {p.description}
                </p>
                <p className="mt-2 font-mono text-xs muted">
                  {p.tags.join(" · ")}
                </p>
              </div>
            </Wrapper>
          );
        })}
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>
    </section>
  );
}
