import { about, skillGroups } from "@/lib/data";

function MobileLabel({ children }: { children: string }) {
  return (
    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent lg:hidden">
      {children}
    </h2>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 pt-16 lg:pt-0">
      <MobileLabel>About</MobileLabel>

      <div className="space-y-4 text-[15px] leading-relaxed text-black/80 dark:text-white/70 sm:text-base">
        {about.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* tools — plain, grouped */}
      <div className="mt-10">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] muted">
          Tools I use
        </h3>
        <dl className="space-y-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="grid gap-1 sm:grid-cols-[160px_1fr]">
              <dt className="text-sm font-medium">{g.title}</dt>
              <dd className="text-sm muted">{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* education */}
      <div className="mt-10">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] muted">
          Education
        </h3>
        <div className="space-y-3">
          {about.education.map((e) => (
            <div key={e.title} className="grid gap-0.5 sm:grid-cols-[160px_1fr]">
              <span className="font-mono text-sm muted">{e.period}</span>
              <span className="text-sm">
                <span className="font-medium">{e.title}</span>
                <span className="muted"> · {e.org}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
