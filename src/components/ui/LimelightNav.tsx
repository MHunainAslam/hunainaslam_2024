"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type LimelightItem = {
  id: string;
  label: string;
  icon: ReactNode;
  href: string;
};

/**
 * A sleek pill navigation with a "limelight" — a glowing beam that slides to
 * sit above the active item, casting a soft spotlight cone downward.
 * Faithful re-creation of @easemize/limelight-nav, wired to section scroll-spy.
 */
export function LimelightNav({
  items,
  className = "",
}: {
  items: LimelightItem[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement>(null);

  // Move the limelight over the active item.
  const moveLight = useCallback(() => {
    const light = limelightRef.current;
    const active = itemRefs.current[activeIndex];
    if (!light || !active) return;
    light.style.left = `${
      active.offsetLeft + active.offsetWidth / 2 - light.offsetWidth / 2
    }px`;
  }, [activeIndex]);

  useLayoutEffect(() => {
    moveLight();
    // Skip the entrance slide on first paint, then enable transitions.
    const t = window.setTimeout(() => setReady(true), 50);
    return () => window.clearTimeout(t);
  }, [moveLight]);

  useEffect(() => {
    const onResize = () => moveLight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [moveLight]);

  // Scroll-spy: highlight whichever section is centered in the viewport.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const mid = window.scrollY + window.innerHeight / 2;
          let current = 0;
          items.forEach((item, i) => {
            const el = document.querySelector(item.href) as HTMLElement | null;
            if (el && el.offsetTop <= mid) current = i;
          });
          setActiveIndex(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav
      className={`relative flex items-center gap-1 rounded-full border border-white/10 bg-ink-900/50 px-1.5 py-1.5 backdrop-blur-xl ${className}`}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <a
            key={item.id}
            href={item.href}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onClick={() => setActiveIndex(index)}
            aria-current={isActive ? "page" : undefined}
            className={`relative z-10 flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 lg:px-4 ${
              isActive
                ? "text-accent-cyan"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            <span className="grid place-items-center [&>svg]:h-4 [&>svg]:w-4">
              {item.icon}
            </span>
            <span className="hidden lg:inline">{item.label}</span>
          </a>
        );
      })}

      {/* The limelight beam */}
      <div
        ref={limelightRef}
        className={`pointer-events-none absolute top-0 z-0 h-[3px] w-10 rounded-full bg-accent-cyan shadow-[0_0_18px_4px_rgba(34,211,238,0.7)] ${
          ready ? "transition-[left] duration-500 ease-in-out" : ""
        }`}
        style={{ left: "-999px" }}
      >
        {/* spotlight cone spilling downward */}
        <div className="absolute left-1/2 top-[3px] h-12 w-16 -translate-x-1/2 bg-gradient-to-b from-accent-cyan/25 to-transparent [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]" />
      </div>
    </nav>
  );
}
