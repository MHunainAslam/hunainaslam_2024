import Link from "next/link";
import React from "react";

type Props = {};

const LINKS = [
  { label: "Mail", href: "mailto:hunainaslam.ha@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/03352653956" },
  { label: "Github", href: "https://github.com/mhunainaslam" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/hunain-aslam" },
];

const Footer = (props: Props) => {
  return (
    <footer className="hx-footer">
      <div className="hx-container">
        <div className="hx-footer-inner">
          <p className="hx-muted" style={{ margin: 0 }}>
            © 2024 – 2025 Hunain Aslam. All rights reserved.
          </p>
          <div className="hx-footer-links">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} target="_blank">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
