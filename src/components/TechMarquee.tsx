"use client";

const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
  "Node REST APIs",
  "Pusher",
  "Stripe",
  "PayPal",
  "SSR / SSG",
];

export default function TechMarquee() {
  const row = [...items, ...items];
  return (
    <section
      aria-label="Technologies I work with"
      className="relative z-10 overflow-hidden border-y border-black/10 py-6 dark:border-white/10"
    >
      <div className="flex select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center">
          {row.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="display px-6 text-3xl text-black/25 transition-colors hover:text-accent dark:text-white/20 sm:text-4xl">
                {item}
              </span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
