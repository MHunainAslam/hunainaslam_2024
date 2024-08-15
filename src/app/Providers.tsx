"use client";
import React, { useEffect } from "react";

type Props = {};

const Providers: React.FC<any> = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const headers = document.querySelector("#sticky-header");

      if (window.scrollY > 100) {
        headers?.classList.add("sticky-active");
        headers?.classList.remove("sticky-soon");
      } else if (window.scrollY > 10) {
        headers?.classList.add("sticky-soon");
        headers?.classList.remove("sticky-active");
      } else {
        headers?.classList.remove("sticky-active");
        headers?.classList.remove("sticky-soon");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return children;
};

export default Providers;
