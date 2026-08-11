"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy shared by the desktop limelight nav and the mobile drawer:
 * reports which section is currently centred in the viewport.
 *
 * The setter is returned as well so click handlers can move the highlight
 * immediately rather than waiting for the smooth scroll to settle.
 *
 * NOTE: `hrefs` is a dependency, so callers must pass a stable array
 * (module-level constant or memoised) — not a fresh one each render.
 */
export function useActiveSection(hrefs: string[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const mid = window.scrollY + window.innerHeight / 2;
        let current = 0;
        hrefs.forEach((href, i) => {
          const el = document.querySelector(href) as HTMLElement | null;
          if (el && el.offsetTop <= mid) current = i;
        });
        setActiveIndex(current);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hrefs]);

  return [activeIndex, setActiveIndex] as const;
}
