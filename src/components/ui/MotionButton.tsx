"use client";

import { ArrowRight, type LucideIcon } from "lucide-react";

/**
 * Re-creation of @Shatlyk1011/motion-button (emerald-ui):
 * a pill with a small circle badge + arrow on the left. On hover the circle
 * expands to fill the whole pill, the arrow nudges forward, and the label
 * flips to the contrast colour.
 */
type Variant = "primary" | "secondary";
type Size = "sm" | "md";

type BaseProps = {
  label: string;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
};

type AsAnchor = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
};

type AsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

type Props = AsAnchor | AsButton;

const VARIANTS: Record<Variant, { circle: string; arrow: string }> = {
  primary: { circle: "bg-accent-gradient", arrow: "text-ink-950" },
  secondary: { circle: "bg-slate-100", arrow: "text-ink-950" },
};

const SIZES: Record<
  Size,
  {
    wrap: string;
    circle: string;
    arrowPos: string;
    arrow: string;
    text: string;
  }
> = {
  // Horizontal padding must clear the circle (its right edge sits at
  // left-1 + diameter), otherwise the centred label butts right up against the
  // icon on narrow, content-width buttons.
  md: {
    wrap: "h-12 px-[3.25rem] sm:h-14 sm:px-14",
    circle: "left-1 top-1 h-10 w-10 sm:h-12 sm:w-12",
    arrowPos: "left-4 sm:left-[1.125rem]",
    arrow: "h-4 w-4 sm:h-5 sm:w-5",
    text: "text-sm sm:text-base",
  },
  sm: {
    wrap: "h-11 px-11",
    circle: "left-1 top-1 h-9 w-9",
    arrowPos: "left-[0.875rem]",
    arrow: "h-4 w-4",
    text: "text-sm",
  },
};

const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(" ");

export function MotionButton({
  label,
  variant = "primary",
  size = "md",
  icon: Icon = ArrowRight,
  className,
  ...rest
}: Props) {
  const v = VARIANTS[variant];
  const s = SIZES[size];

  const wrapper = cx(
    "group relative flex max-w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-ink-900/60 font-medium text-slate-100 outline-none transition-transform duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
    s.wrap,
    className,
  );

  const inner = (
    <>
      {/* expanding circle */}
      <span
        aria-hidden
        className={cx(
          "absolute z-0 rounded-full transition-[width] duration-500 ease-in-out group-hover:w-[calc(100%-0.5rem)]",
          s.circle,
          v.circle,
        )}
      />
      {/* arrow inside the circle */}
      <span
        aria-hidden
        className={cx(
          "absolute top-1/2 z-10 -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-1.5",
          s.arrowPos,
        )}
      >
        <Icon className={cx(s.arrow, v.arrow)} />
      </span>
      {/* label */}
      <span
        className={cx(
          "relative z-10 whitespace-nowrap transition-colors duration-500 group-hover:text-ink-950",
          s.text,
        )}
      >
        {label}
      </span>
    </>
  );

  const { onClick } = rest;

  if ("href" in rest && rest.href !== undefined) {
    const { href, target, rel, download } = rest;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        className={wrapper}
      >
        {inner}
      </a>
    );
  }

  const { type = "button", disabled } = rest as AsButton;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={wrapper}
    >
      {inner}
    </button>
  );
}
