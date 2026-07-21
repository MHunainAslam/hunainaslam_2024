import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pt-24">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent lg:hidden">
        Experience
      </h2>

      <div>
        {experience.map((job) => (
          <div
            key={job.company}
            className="grid gap-2 border-t border-black/10 py-7 dark:border-white/10 sm:grid-cols-[160px_1fr] sm:gap-6"
          >
            <span className="font-mono text-xs uppercase tracking-wide muted">
              {job.period}
            </span>
            <div>
              <h3 className="text-base font-semibold">
                {job.role}{" "}
                <span className="font-normal text-accent">· {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-sm leading-relaxed text-black/70 dark:text-white/60"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>
    </section>
  );
}
