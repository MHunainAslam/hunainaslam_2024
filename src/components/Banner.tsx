import React from "react";
import Link from "next/link";
import CountUp from "./CountUp";
import Typewriter from "./Typewriter";

type Props = {};

const TECH = ["React", "Next.js", "TypeScript", "Vue", "Redux"];

const SOCIALS = [
  { icon: "fa-envelope", href: "mailto:hunainaslam.ha@gmail.com", label: "Email" },
  { icon: "fa-whatsapp", href: "https://wa.me/03352653956", label: "WhatsApp" },
  { icon: "fa-github", href: "https://github.com/mhunainaslam", label: "GitHub" },
  {
    icon: "fa-linkedin-square",
    href: "https://www.linkedin.com/in/hunain-aslam",
    label: "LinkedIn",
  },
];

const Banner = (props: Props) => {
  return (
    <section className="hx-hero" id="home">
      <div className="hx-container">
        <div className="hx-hero-grid">
          <div className="hx-hero-intro hx-card">
            <span className="hx-badge">
              <span className="hx-dot"></span> Available for work
            </span>
            <p className="hx-hello">Hello, I&apos;m</p>
            <h1 className="hx-display">
              <span className="hx-gradient-text">Hunain Aslam</span>
            </h1>
            <p className="hx-hero-role">
              <Typewriter />
            </p>
            <p className="hx-lead">
              I am committed to excellence as a developer, driven by a passion
              for innovation and a dedication to exceeding expectations.
            </p>
            <div className="hx-hero-cta">
              <Link
                href={"https://www.fiverr.com/hunainaslamm"}
                target="_blank"
                className="hx-btn hx-btn-primary"
              >
                Hire Me <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </Link>
              <Link href={"#projects"} className="hx-btn hx-btn-ghost">
                View Work
              </Link>
            </div>
            <div className="hx-chips">
              {TECH.map((t) => (
                <span className="hx-chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="hx-scroll-cue">
              <span></span> Scroll
            </div>
          </div>

          <div className="hx-hero-visual hx-card">
            <div className="hx-codecard" aria-hidden="true">
              <div className="hx-codecard-bar">
                <span></span>
                <span></span>
                <span></span>
                <em>developer.ts</em>
              </div>
              <div className="hx-codecard-body">
                <span className="ln">
                  <span className="tok-key">const</span> dev ={" "}
                  <span className="tok-punc">{"{"}</span>
                </span>
                <span className="ln">
                  {"  "}
                  <span className="tok-prop">name</span>
                  <span className="tok-punc">:</span>{" "}
                  <span className="tok-str">&quot;Hunain Aslam&quot;</span>
                  <span className="tok-punc">,</span>
                </span>
                <span className="ln">
                  {"  "}
                  <span className="tok-prop">role</span>
                  <span className="tok-punc">:</span>{" "}
                  <span className="tok-str">&quot;Frontend Dev&quot;</span>
                  <span className="tok-punc">,</span>
                </span>
                <span className="ln">
                  {"  "}
                  <span className="tok-prop">stack</span>
                  <span className="tok-punc">: [</span>
                  <span className="tok-str">&quot;React&quot;</span>
                  <span className="tok-punc">,</span>{" "}
                  <span className="tok-str">&quot;Next&quot;</span>
                  <span className="tok-punc">,</span>{" "}
                  <span className="tok-str">&quot;TS&quot;</span>
                  <span className="tok-punc">],</span>
                </span>
                <span className="ln">
                  {"  "}
                  <span className="tok-prop">years</span>
                  <span className="tok-punc">:</span>{" "}
                  <span className="tok-num">3</span>
                  <span className="tok-punc">,</span>
                </span>
                <span className="ln">
                  {"  "}
                  <span className="tok-prop">available</span>
                  <span className="tok-punc">:</span>{" "}
                  <span className="tok-bool">true</span>
                  <span className="tok-punc">,</span>
                </span>
                <span className="ln">
                  <span className="tok-punc">{"}"}</span>
                  <span className="tok-punc">;</span>
                  <span className="hx-cursor"></span>
                </span>
              </div>
            </div>
            <span className="hx-float-badge b1">
              <i className="fa fa-code" aria-hidden="true"></i> React
            </span>
            <span className="hx-float-badge b2">TypeScript</span>
            <span className="hx-float-badge b3">{"{ }"}</span>
          </div>

          <div className="hx-stats">
            <div className="hx-stat hx-card">
              <span className="hx-stat-num">
                <CountUp end={3} suffix="+" pad />
              </span>
              <span className="hx-stat-label">Years of Experience</span>
            </div>
            <div className="hx-stat hx-card">
              <span className="hx-stat-num">
                <CountUp end={20} suffix="+" />
              </span>
              <span className="hx-stat-label">Projects Completed</span>
            </div>
            <div className="hx-stat hx-card">
              <span className="hx-stat-label" style={{ marginBottom: "12px" }}>
                Connect with me
              </span>
              <div className="hx-stat-socials">
                {SOCIALS.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    aria-label={s.label}
                  >
                    <i className={`fa ${s.icon}`} aria-hidden="true"></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
