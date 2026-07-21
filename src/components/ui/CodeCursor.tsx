"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SNIPPETS = [
  "const",
  "=>",
  "{ }",
  "</>",
  "( )",
  "useState",
  "async",
  "await",
  "return",
  "<div>",
  "npm i",
  "git",
  "React",
  ".tsx",
  "export",
  "import",
  "null",
  "&&",
  "?.",
  "===",
  "props",
  "hook",
  "0x1F",
  ";",
];

const COLORS = ["text-accent-cyan", "text-accent-blue", "text-accent-indigo"];

type Token = {
  id: number;
  x: number;
  y: number;
  text: string;
  dx: number;
  color: string;
};

/**
 * Emits little code tokens that float up and fade as the cursor moves —
 * a developer-flavoured cursor trail. Renders only after mount (client-only)
 * and is skipped for touch / reduced-motion.
 */
export function CodeCursor() {
  const [mounted, setMounted] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([]);
  const lastRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onMove = (e: MouseEvent) => {
      if (reduce.matches) return;
      const now = performance.now();
      if (now - lastRef.current < 65) return; // throttle spawn rate
      lastRef.current = now;

      const id = idRef.current++;
      const token: Token = {
        id,
        x: e.clientX,
        y: e.clientY,
        text: SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)],
        dx: (Math.random() - 0.5) * 44,
        color: COLORS[id % COLORS.length],
      };
      setTokens((prev) => [...prev.slice(-22), token]);
      window.setTimeout(
        () => setTokens((prev) => prev.filter((t) => t.id !== id)),
        950,
      );
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
    >
      <AnimatePresence>
        {tokens.map((t) => (
          <motion.span
            key={t.id}
            initial={{ opacity: 0.95, y: 0, x: 0, scale: 1 }}
            animate={{ opacity: 0, y: -58, x: t.dx, scale: 0.82 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ left: t.x, top: t.y }}
            className={`absolute font-mono text-xs font-semibold ${t.color} drop-shadow-[0_0_8px_rgba(34,211,238,0.55)]`}
          >
            {t.text}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
