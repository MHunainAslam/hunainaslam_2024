import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0c12",
          800: "#0f1219",
          700: "#151925",
          600: "#1c2130",
        },
        accent: {
          DEFAULT: "#2dd4bf", // teal
          cyan: "#22d3ee",
          blue: "#3b82f6",
          indigo: "#6366f1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(45, 212, 191, 0.45)",
        "glow-blue": "0 0 45px -12px rgba(59, 130, 246, 0.5)",
        card: "0 20px 60px -25px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #05060a 90%), radial-gradient(circle at center, rgba(45,212,191,0.08), transparent 60%)",
        "accent-gradient":
          "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #6366f1 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "pulse-slow": "pulse-slow 5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        orbit: "orbit 44s linear infinite",
        "orbit-reverse": "orbit-reverse 44s linear infinite",
        grid: "grid 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
