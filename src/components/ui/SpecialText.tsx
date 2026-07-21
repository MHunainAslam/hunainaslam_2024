"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Animated text with a scramble reveal — a faithful re-creation of
 * @tom_ui/special-text. Each character cycles through random glyphs before
 * locking into place, revealing left-to-right. Runs once when triggered.
 */
export function SpecialText({
  children,
  speed = 20,
  delay = 0,
  inView = false,
  className,
}: {
  children: string;
  /** frames each character scrambles before locking (higher = longer). */
  speed?: number;
  /** ms to wait before starting. */
  delay?: number;
  /** start only once the text scrolls into view. */
  inView?: boolean;
  className?: string;
}) {
  const text = children;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);

  const shouldStart = inView ? isInView : true;

  useEffect(() => {
    if (!shouldStart || started) return;
    setStarted(true);

    let raf = 0;
    let frame = 0;
    const cycles = Math.max(1, Math.round(speed / 6));
    const total = text.length * cycles;

    const tick = () => {
      const revealed = frame / cycles;
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealed) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      frame += 1;
      if (frame <= total) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [shouldStart, started, text, speed, delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}
