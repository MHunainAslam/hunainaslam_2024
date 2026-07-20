import React from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

type Props = {};

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

const Conatct: React.FC<Props> = () => {
  return (
    <section className="hx-section" id="contact">
      <div className="hx-container">
        <div className="hx-section-head">
          <span className="hx-eyebrow">Get In Touch</span>
          <h2 className="hx-h2">
            Let&apos;s <span className="hx-gradient-text">Talk</span>
          </h2>
        </div>

        <div className="hx-contact-grid">
          <div className="hx-contact-info hx-card">
            <p className="hx-lead">
              Feel free to reach out if you&apos;re looking to hire a developer.
              I&apos;m always open to discussing new projects and ideas.
            </p>

            <ul className="hx-feature-list">
              <li>Web Development</li>
              <li>Product Design</li>
            </ul>

            <div className="hx-contact-methods">
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

            <div className="hx-stat-socials" style={{ justifyContent: "flex-start" }}>
              {SOCIALS.map((s) => (
                <Link key={s.label} href={s.href} target="_blank" aria-label={s.label}>
                  <i className={`fa ${s.icon}`} aria-hidden="true"></i>
                </Link>
              ))}
            </div>
          </div>

          <div className="hx-form-card hx-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conatct;
