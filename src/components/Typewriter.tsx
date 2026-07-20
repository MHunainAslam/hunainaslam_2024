"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  phrases?: string[];
  typeSpeed?: number; // ms per char
  deleteSpeed?: number; // ms per char
  holdTime?: number; // ms to hold a full phrase
};

const DEFAULT_PHRASES = [
  "Frontend Developer",
  "React Developer",
  "Next.js Engineer",
  "TypeScript Developer",
  "UI Engineer",
];

/* Classic dev-portfolio typewriter. Renders the full first phrase on the
   server AND on the first client render (so hydration matches — never an
   empty string, which does not serialize to HTML and breaks hydration).
   The delete/retype cycle only starts after mount. */
const Typewriter: React.FC<Props> = ({
  phrases = DEFAULT_PHRASES,
  typeSpeed = 70,
  deleteSpeed = 38,
  holdTime = 1500,
}) => {
  const [text, setText] = useState(phrases[0]);
  const [animating, setAnimating] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return; // keep the static first phrase

    setAnimating(true);

    let phraseIdx = 0;
    let charIdx = phrases[0].length;
    let deleting = true; // hold the shown phrase, then delete it

    const tick = () => {
      if (deleting) {
        charIdx--;
        setText(phrases[phraseIdx].slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timer.current = window.setTimeout(tick, typeSpeed);
          return;
        }
        timer.current = window.setTimeout(tick, deleteSpeed);
      } else {
        charIdx++;
        setText(phrases[phraseIdx].slice(0, charIdx));
        if (charIdx === phrases[phraseIdx].length) {
          deleting = true;
          timer.current = window.setTimeout(tick, holdTime);
          return;
        }
        timer.current = window.setTimeout(tick, typeSpeed);
      }
    };

    timer.current = window.setTimeout(tick, holdTime);
    return () => window.clearTimeout(timer.current);
  }, [phrases, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className="hx-typewriter">
      <span className="hx-tw-text">{text}</span>
      <span
        className={`hx-tw-caret${animating ? "" : " is-idle"}`}
        aria-hidden="true"
      />
    </span>
  );
};

export default Typewriter;
