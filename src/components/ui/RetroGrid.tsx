import type { CSSProperties } from "react";

/**
 * Animated retro perspective grid — a re-creation of the @kinfe123
 * hero-section-dark background. Lines are tilted on the X axis so they recede
 * to a horizon, and scroll slowly toward the viewer.
 */
export function RetroGrid({
  angle = 65,
  cellSize = 50,
  opacity = 0.4,
  lineColor = "rgba(34, 211, 238, 0.35)",
  className = "",
}: {
  angle?: number;
  cellSize?: number;
  opacity?: number;
  lineColor?: string;
  className?: string;
}) {
  const style = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--line-color": lineColor,
  } as CSSProperties;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden [perspective:200px] ${className}`}
      style={{ ...style, opacity }}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--line-color)_1px,transparent_0),linear-gradient(to_bottom,var(--line-color)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      {/* fade the grid into the page toward the top */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-ink-950/40 to-ink-950" />
    </div>
  );
}
