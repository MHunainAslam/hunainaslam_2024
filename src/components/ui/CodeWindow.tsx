"use client";

import { useEffect, useMemo, useState } from "react";

type Tok = { text: string; cls: keyof typeof COLORS };

const COLORS = {
  kw: "text-accent",
  op: "text-accent",
  str: "text-emerald-600 dark:text-emerald-400",
  bool: "text-amber-600 dark:text-amber-400",
  key: "text-sky-700 dark:text-sky-300",
  pl: "text-black/55 dark:text-white/45",
  com: "italic text-black/35 dark:text-white/30",
} as const;

const CODE: Tok[][] = [
  [{ text: "// developer.ts", cls: "com" }],
  [
    { text: "const", cls: "kw" },
    { text: " hunain ", cls: "pl" },
    { text: "=", cls: "op" },
    { text: " {", cls: "pl" },
  ],
  [
    { text: "  name", cls: "key" },
    { text: ": ", cls: "pl" },
    { text: "'Hunain Aslam'", cls: "str" },
    { text: ",", cls: "pl" },
  ],
  [
    { text: "  role", cls: "key" },
    { text: ": ", cls: "pl" },
    { text: "'Frontend Engineer'", cls: "str" },
    { text: ",", cls: "pl" },
  ],
  [
    { text: "  based", cls: "key" },
    { text: ": ", cls: "pl" },
    { text: "'Karachi, PK'", cls: "str" },
    { text: ",", cls: "pl" },
  ],
  [
    { text: "  stack", cls: "key" },
    { text: ": [", cls: "pl" },
    { text: "'React'", cls: "str" },
    { text: ", ", cls: "pl" },
    { text: "'Next.js'", cls: "str" },
    { text: ", ", cls: "pl" },
    { text: "'TS'", cls: "str" },
    { text: "],", cls: "pl" },
  ],
  [
    { text: "  building", cls: "key" },
    { text: ": ", cls: "pl" },
    { text: "'a dental ERP'", cls: "str" },
    { text: ",", cls: "pl" },
  ],
  [
    { text: "  openToWork", cls: "key" },
    { text: ": ", cls: "pl" },
    { text: "true", cls: "bool" },
    { text: ",", cls: "pl" },
  ],
  [{ text: "}", cls: "pl" }],
];

export default function CodeWindow() {
  const { flat, total, lineRanges } = useMemo(() => {
    const flat: (Tok & { line: number; start: number })[] = [];
    const lineRanges: { start: number; end: number }[] = [];
    let acc = 0;
    CODE.forEach((line, li) => {
      const lineStart = acc;
      line.forEach((tok) => {
        flat.push({ ...tok, line: li, start: acc });
        acc += tok.text.length;
      });
      lineRanges.push({ start: lineStart, end: acc });
    });
    return { flat, total: acc, lineRanges };
  }, []);

  const [n, setN] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setN(total);
      return;
    }
    let count = 0;
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      count += 1;
      setN(count);
      if (count < total) {
        timer = setTimeout(type, 28);
      } else {
        timer = setTimeout(() => {
          count = 0;
          setN(0);
          timer = setTimeout(type, 500);
        }, 3200);
      }
    };
    timer = setTimeout(type, 400);
    return () => clearTimeout(timer);
  }, [total]);

  const caretLine = useMemo(() => {
    let li = 0;
    lineRanges.forEach((r, i) => {
      if (n >= r.start) li = i;
    });
    return li;
  }, [n, lineRanges]);

  return (
    <div className="overflow-hidden rounded-xl border border-black/15 bg-white/80 dark:border-white/10 dark:bg-ink-900/90">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-black/10 px-4 py-3 dark:border-white/10">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 font-mono text-xs muted">developer.ts</span>
      </div>

      {/* code */}
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        {CODE.map((line, li) => {
          const tokens = flat.filter((f) => f.line === li);
          return (
            <div key={li} className="flex">
              <span className="w-7 shrink-0 select-none pr-4 text-right text-black/25 dark:text-white/20">
                {li + 1}
              </span>
              <span className="whitespace-pre">
                {tokens.map((tok, ti) => {
                  const vis = Math.min(
                    Math.max(n - tok.start, 0),
                    tok.text.length
                  );
                  if (vis <= 0) return null;
                  return (
                    <span key={ti} className={COLORS[tok.cls]}>
                      {tok.text.slice(0, vis)}
                    </span>
                  );
                })}
                {caretLine === li && (
                  <span className="ml-px inline-block w-[7px] animate-pulse bg-accent text-transparent">
                    .
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
