"use client";

import Marquee from "./ui/Marquee";

const rowA = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Tailwind CSS",
  "SSR / SSG",
];
const rowB = [
  "REST APIs",
  "Pusher",
  "Stripe",
  "PayPal",
  "Ant Design",
  "Bootstrap",
  "Vercel",
  "Git / GitHub",
];

export default function TechMarquee() {
  return (
    <section className="relative -mt-4 border-y border-black/5 py-8 dark:border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <Marquee items={rowA} />
        <Marquee items={rowB} reverse />
      </div>
    </section>
  );
}
