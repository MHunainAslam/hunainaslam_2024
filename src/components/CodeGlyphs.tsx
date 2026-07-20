import React from "react";

/* Floating code tokens that drift up the whole page for a "coding"
   atmosphere. Rendered as a fixed, site-wide background layer (behind
   content, above the aurora/grid). Deterministic values (no Math.random)
   so SSR and client markup match. Purely decorative. */
type Glyph = {
  t: string;
  left: number; // %
  delay: number; // s
  dur: number; // s
  size: number; // rem
  drift: number; // px horizontal sway
};

const GLYPHS: Glyph[] = [
  { t: "</>", left: 4, delay: 0, dur: 17, size: 1.35, drift: 20 },
  { t: "{ }", left: 11, delay: 6, dur: 21, size: 1.1, drift: -18 },
  { t: "=>", left: 18, delay: 11, dur: 15, size: 1.25, drift: 14 },
  { t: "const", left: 25, delay: 3, dur: 23, size: 0.95, drift: -22 },
  { t: "( )", left: 32, delay: 9, dur: 18, size: 1.2, drift: 16 },
  { t: "[ ]", left: 39, delay: 14, dur: 16, size: 1.15, drift: -14 },
  { t: "0", left: 46, delay: 1, dur: 13, size: 1.4, drift: 12 },
  { t: "1", left: 51, delay: 8, dur: 19, size: 1.4, drift: -10 },
  { t: "fn()", left: 58, delay: 4, dur: 22, size: 1.0, drift: 18 },
  { t: "::", left: 65, delay: 12, dur: 14, size: 1.3, drift: -16 },
  { t: "#", left: 72, delay: 7, dur: 24, size: 1.2, drift: 10 },
  { t: "&&", left: 78, delay: 16, dur: 17, size: 1.05, drift: -20 },
  { t: "=>", left: 84, delay: 2, dur: 20, size: 1.15, drift: 14 },
  { t: "</>", left: 90, delay: 10, dur: 18, size: 1.25, drift: -12 },
  { t: "{ }", left: 95, delay: 5, dur: 15, size: 1.0, drift: 16 },
  { t: "return", left: 8, delay: 13, dur: 25, size: 0.9, drift: -18 },
  { t: "async", left: 43, delay: 18, dur: 23, size: 0.9, drift: 22 },
  { t: "import", left: 69, delay: 15, dur: 26, size: 0.9, drift: -14 },
];

const CodeGlyphs: React.FC = () => {
  return (
    <div className="hx-glyphs" aria-hidden="true">
      {GLYPHS.map((g, i) => (
        <span
          key={i}
          style={
            {
              left: `${g.left}%`,
              fontSize: `${g.size}rem`,
              animationDelay: `${g.delay}s`,
              animationDuration: `${g.dur}s`,
              ["--drift" as string]: `${g.drift}px`,
            } as React.CSSProperties
          }
        >
          {g.t}
        </span>
      ))}
    </div>
  );
};

export default CodeGlyphs;
