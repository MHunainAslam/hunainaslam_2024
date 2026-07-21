"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Types text out character-by-character with a blinking caret.
 * Runs once after an optional delay.
 *
 * NOTE: `className` is applied to the element that DIRECTLY holds the text, so
 * `background-clip: text` gradients (e.g. .text-gradient) work correctly.
 */
export function Typewriter({
  text,
  speed = 70,
  delay = 400,
  className = "",
  cursorClassName = "bg-accent-cyan",
}: {
  text: string;
  /** ms per character. */
  speed?: number;
  /** ms before typing starts. */
  delay?: number;
  className?: string;
  cursorClassName?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            window.clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [text, speed, delay]);

  const done = count >= text.length;

  return (
    <span aria-label={text} className="inline">
      {/* gradient/clip lives on THIS text-bearing span */}
      <span aria-hidden className={className}>
        {text.slice(0, count)}
      </span>
      <motion.span
        aria-hidden
        className={`ml-1 inline-block w-[0.06em] translate-y-[0.08em] align-baseline ${cursorClassName}`}
        style={{ height: "0.85em" }}
        animate={{ opacity: done ? [1, 0] : 1 }}
        transition={
          done
            ? { duration: 0.8, repeat: Infinity, ease: "linear" }
            : { duration: 0 }
        }
      />
    </span>
  );
}
