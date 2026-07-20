"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  suffix?: string;
  duration?: number; // ms
  pad?: boolean; // zero-pad single digits (e.g. 03)
};

const CountUp: React.FC<Props> = ({ end, suffix = "", duration = 1400, pad }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (prefersReduced) {
        setValue(end);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(eased * end));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);

    // Failsafe: never leave the counter stuck at 0.
    const failsafe = window.setTimeout(run, 1800);

    return () => {
      obs.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [end, duration]);

  const display = pad && value < 10 ? `0${value}` : `${value}`;

  return <span ref={ref}>{`${display}${suffix}`}</span>;
};

export default CountUp;
