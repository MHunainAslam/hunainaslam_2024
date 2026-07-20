"use client";

import React, { useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) ||
      (localStorage.getItem("theme") as Theme) ||
      "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      data-theme-state={mounted ? theme : "dark"}
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to day mode" : "Switch to night mode"}
      title={theme === "dark" ? "Day mode" : "Night mode"}
    >
      <span className="tt-track">
        <span className="tt-stars">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="tt-clouds">
          <i></i>
          <i></i>
        </span>
        <span className="tt-thumb"></span>
      </span>
    </button>
  );
};

export default ThemeToggle;
