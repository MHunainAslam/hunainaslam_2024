"use client";

// Infinite, CSS-driven horizontal marquee. Duplicates children so the
// scroll loops seamlessly. Pauses on hover.
export default function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex shrink-0 items-center gap-4 pr-4 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-black/10 bg-white/60 px-5 py-2 text-sm font-medium text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
