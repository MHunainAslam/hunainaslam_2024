"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}=+*^?#";

export function DecryptedText({
  text,
  className,
  speed = 2,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    let raf = 0;
    const total = text.length;
    const run = () => {
      const revealed = Math.floor(frame / speed);
      setDisplay(
        text
          .split("")
          .map((ch, i) =>
            ch === " "
              ? " "
              : i < revealed
                ? text[i]
                : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join(""),
      );
      frame++;
      if (revealed <= total) {
        raf = requestAnimationFrame(run);
      } else {
        setDisplay(text);
      }
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [text, speed]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
