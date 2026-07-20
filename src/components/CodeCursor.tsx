"use client";

import React, { useEffect, useRef } from "react";

/* Emits little code tokens from the cursor as the mouse moves — a
   "code coming out of the pointer" trail. Pure DOM (no canvas), throttled
   by time + distance so it stays light. Skips touch devices and honours
   prefers-reduced-motion. */
const TOKENS = [
  "</>", "{", "}", "=>", "()", "[]", "const", "let", "fn", "0", "1",
  ";", "&&", "::", "#", "return", "async", "<div>", "null", "=>",
];

const CodeCursor: React.FC = () => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;
    // no cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const layer = layerRef.current;
    if (!layer) return;

    let last = 0;
    let lastX = 0;
    let lastY = 0;
    let idx = 0;

    const spawn = (x: number, y: number) => {
      const el = document.createElement("span");
      el.className = "hx-cc-token";
      el.textContent = TOKENS[idx++ % TOKENS.length];
      const driftX = (Math.random() * 2 - 1) * 26;
      const rot = (Math.random() * 2 - 1) * 24;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.setProperty("--tx", `${driftX}px`);
      el.style.setProperty("--rot", `${rot}deg`);
      layer.appendChild(el);
      window.setTimeout(() => el.remove(), 1150);
    };

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);
      // throttle: only every ~40ms AND after moving a bit
      if (now - last < 40 || dist < 14) return;
      last = now;
      lastX = e.clientX;
      lastY = e.clientY;
      spawn(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      layer.replaceChildren();
    };
  }, []);

  return <div ref={layerRef} className="hx-cursor-layer" aria-hidden="true" />;
};

export default CodeCursor;
