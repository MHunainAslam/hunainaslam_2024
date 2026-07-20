import Link from "next/link";
import React from "react";

type Props = {};

const SKILLS = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript & TypeScript", level: 90 },
  { name: "React & Next.js", level: 92 },
  { name: "Vue & Redux", level: 82 },
];

const Aboutme = (props: Props) => {
  return (
    <section className="hx-section" id="aboutme">
      <div className="hx-container">
        <div className="hx-section-head">
          <span className="hx-eyebrow">About Me</span>
          <h2 className="hx-h2">
            Professional{" "}
            <span className="hx-gradient-text">Problem Solutions</span> for
            Digital Products
          </h2>
        </div>

        <div className="hx-about-grid">
          <div className="hx-about-photo hx-card">
            <div className="hx-skillpanel">
              <div className="hx-skillpanel-head">
                <span className="ic">
                  <i className="fa fa-bar-chart" aria-hidden="true"></i>
                </span>
                <div>
                  <h3>Skill Proficiency</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>

              {SKILLS.map((s) => (
                <div className="hx-skill-row" key={s.name}>
                  <div className="top">
                    <span>{s.name}</span>
                    <b>{s.level}%</b>
                  </div>
                  <div className="hx-bar">
                    <i style={{ ["--val" as any]: `${s.level}%` }}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hx-about-body">
            <p className="hx-lead">
              My name is Hunain Aslam — a meticulous front-end developer. I have
              developed strong skills in front-end development using modern
              technologies and frameworks. I am a quick learner and an excellent
              team player who enjoys collaborating with others to deliver
              outstanding results.
            </p>

            <ul className="hx-feature-list">
              <li>Web Development</li>
              <li>Product Design</li>
            </ul>

            <div className="hx-info-grid">
              <div className="hx-info-card hx-card">
                <span className="hx-info-ic">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <div>
                  <p className="l">Email</p>
                  <Link
                    href={"mailto:hunainaslam.ha@gmail.com"}
                    className="v"
                    style={{ textDecoration: "none" }}
                  >
                    hunainaslam.ha@gmail.com
                  </Link>
                </div>
              </div>
              <div className="hx-info-card hx-card">
                <span className="hx-info-ic">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </span>
                <div>
                  <p className="l">WhatsApp</p>
                  <Link
                    href={"https://wa.me/03352653956"}
                    target="_blank"
                    className="v"
                    style={{ textDecoration: "none" }}
                  >
                    +92 335 2653956
                  </Link>
                </div>
              </div>
            </div>

            <h3 className="hx-h3" style={{ marginTop: "6px" }}>
              Education
            </h3>
            <div className="hx-info-grid">
              <div className="hx-info-card hx-card">
                <span className="hx-info-ic">01</span>
                <div>
                  <p className="l">Bachelor&apos;s</p>
                  <p className="v">Computer Science</p>
                  <p className="l" style={{ marginTop: "4px" }}>
                    2020 — 2023
                  </p>
                </div>
              </div>
              <div className="hx-info-card hx-card">
                <span className="hx-info-ic">02</span>
                <div>
                  <p className="l">Certification</p>
                  <p className="v">Web Development</p>
                  <p className="l" style={{ marginTop: "4px" }}>
                    2021 — 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
