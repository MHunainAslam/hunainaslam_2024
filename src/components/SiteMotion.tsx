"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/* Central motion controller: Lenis smooth-scroll + GSAP ScrollTrigger
   choreography. Renders nothing. Fully guards prefers-reduced-motion. */
const SiteMotion: React.FC = () => {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let cleanup: (() => void) | null = null;

    // Defer all setup + DOM mutation to after the first paint so it never
    // races React's hydration of the Suspense subtree.
    const rafId = requestAnimationFrame(() => {
      gsap.registerPlugin(ScrollTrigger);

    /* ---------- Lenis smooth scroll ---------- */
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // route in-page anchor links through Lenis for smooth jumps
    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -90, duration: 1.2 });
    };
    document.addEventListener("click", onAnchorClick);

    /* ---------- GSAP animations ---------- */
    const ctx = gsap.context(() => {
      const ease = "power3.out";

      // Hero intro: staggered entrance on load
      gsap.from(
        ".hx-hero-intro > *",
        {
          y: 34,
          opacity: 0,
          duration: 0.9,
          ease,
          stagger: 0.08,
          delay: 0.15,
        }
      );
      gsap.from(".hx-hero-visual", {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease,
        delay: 0.35,
      });

      // Code card "types" itself out, one line at a time, left to right.
      const codeLines = gsap.utils.toArray<HTMLElement>(".hx-codecard-body .ln");
      if (codeLines.length) {
        gsap.set(codeLines, { clipPath: "inset(0 100% 0 0)" });
        gsap.to(codeLines, {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.45,
          ease: "steps(24)",
          stagger: 0.22,
          delay: 0.9,
        });
      }

      // Hero parallax on scroll (code card + float badges drift up slower)
      gsap.to(".hx-hero-visual", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: ".hx-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hx-float-badge", {
        y: (i: number) => -30 - i * 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hx-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hero intro copy parallax + fade as you scroll past it
      gsap.to(".hx-hero-intro", {
        yPercent: -12,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: ".hx-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headings "rise" from behind a mask; eyebrow + lead fade up
      gsap.utils.toArray<HTMLElement>(".hx-section-head").forEach((el) => {
        const h2 = el.querySelector<HTMLElement>(".hx-h2");
        if (h2 && !h2.dataset.hxSplit) {
          h2.dataset.hxSplit = "1"; // idempotent: don't re-wrap on StrictMode re-run
          const inner = document.createElement("span");
          inner.style.display = "inline-block";
          inner.innerHTML = h2.innerHTML;
          h2.innerHTML = "";
          h2.appendChild(inner);
          h2.style.display = "block";
          h2.style.overflow = "hidden";
          gsap.from(inner, {
            yPercent: 120,
            opacity: 0,
            duration: 0.95,
            ease,
            scrollTrigger: { trigger: el, start: "top 84%" },
          });
        }
        const rest = el.querySelectorAll(":scope > :not(.hx-h2)");
        gsap.from(rest, {
          y: 34,
          opacity: 0,
          duration: 0.8,
          ease,
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 84%" },
        });
      });

      // Batch reveal for card grids (staggered as they enter)
      const batchTargets = [
        ".hx-stat",
        ".hx-info-card",
        ".hx-form-card",
        ".hx-contact-info",
        ".hx-about-photo",
        ".hx-about-body > *",
      ].join(",");

      gsap.set(batchTargets, { opacity: 0, y: 42 });
      ScrollTrigger.batch(batchTargets, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease,
            stagger: 0.09,
            overwrite: true,
          }),
      });

      // Project cards: alternate slide-in from left/right with tilt + zoom
      gsap.utils.toArray<HTMLElement>(".hx-project").forEach((card, i) => {
        const dir = i % 2 === 0 ? -1 : 1;
        gsap.from(card, {
          opacity: 0,
          y: 60,
          x: 46 * dir,
          rotateZ: 1.6 * dir,
          scale: 0.93,
          duration: 0.9,
          ease,
          scrollTrigger: { trigger: card, start: "top 86%" },
        });
      });

      // Timeline items slide in from the left, one after another
      gsap.utils.toArray<HTMLElement>(".hx-tl-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -55,
          duration: 0.8,
          ease,
          scrollTrigger: { trigger: item, start: "top 88%" },
        });
      });

      // Active nav link tracks the section in view
      ["home", "aboutme", "resume", "skills", "projects", "contact"].forEach(
        (id) => {
          const sec = document.getElementById(id);
          const link = document.querySelector<HTMLElement>(
            `.hx-nav-links a[href="#${id}"]`
          );
          if (!sec || !link) return;
          ScrollTrigger.create({
            trigger: sec,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => link.classList.toggle("is-active", self.isActive),
          });
        }
      );

      // Skill proficiency bars fill on enter
      gsap.utils.toArray<HTMLElement>(".hx-bar i").forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: bar, start: "top 92%" },
          }
        );
      });

      // Refresh once images/layout settle
      ScrollTrigger.refresh();
    });

    /* ---------- Magnetic primary buttons ---------- */
    const magnets = Array.from(
      document.querySelectorAll<HTMLElement>(".hx-btn-primary")
    );
    const magnetCleanups = magnets.map((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        gsap.to(el, {
          x: mx * 0.3,
          y: my * 0.4,
          duration: 0.4,
          ease: "power3.out",
        });
      };
      const onLeave = () =>
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    });

      /* ---------- Project cards: 3D tilt + cursor spotlight ---------- */
      const projectCards = Array.from(
        document.querySelectorAll<HTMLElement>(".hx-project")
      );
      const projectCleanups = projectCards.map((card) => {
        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width; // 0..1
          const py = (e.clientY - r.top) / r.height; // 0..1
          card.style.setProperty("--mx", `${px * 100}%`);
          card.style.setProperty("--my", `${py * 100}%`);
          gsap.to(card, {
            rotationY: (px - 0.5) * 9,
            rotationX: -(py - 0.5) * 9,
            duration: 0.4,
            ease: "power2.out",
          });
        };
        const onLeave = () =>
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        return () => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        };
      });

      cleanup = () => {
        document.removeEventListener("click", onAnchorClick);
        magnetCleanups.forEach((fn) => fn());
        projectCleanups.forEach((fn) => fn());
        gsap.ticker.remove(raf);
        lenis.destroy();
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (cleanup) cleanup();
    };
  }, []);

  return null;
};

export default SiteMotion;
