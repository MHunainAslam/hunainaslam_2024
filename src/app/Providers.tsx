"use client";
import React, { useEffect } from "react";

type Props = {};

const Providers: React.FC<any> = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#sticky-header");
      if (window.scrollY > 40) {
        header?.classList.add("is-scrolled");
      } else {
        header?.classList.remove("is-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NOTE: scroll-reveal choreography is now handled by <SiteMotion /> (GSAP +
  // ScrollTrigger). The old IntersectionObserver reveal was removed to avoid
  // two systems animating the same elements.

  return children;
};

export default Providers;
