import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";

type Props = {};

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#aboutme" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC<Props> = () => {
  return (
    <nav className="hx-nav" id="sticky-header">
      <div className="hx-nav-inner">
        <Link href="#home" className="hx-brand" aria-label="Hunain Aslam home">
          <Image
            src={"/assets/images/Logo.svg"}
            width={120}
            height={50}
            alt="Hunain Aslam logo"
            priority
          />
        </Link>

        <ul className="hx-nav-links">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hx-nav-actions">
          <ThemeToggle />
          <Link
            href={"https://wa.me/03352653956"}
            target="_blank"
            className="hx-btn hx-btn-primary hx-nav-cta"
          >
            Let&apos;s Talk
          </Link>
          <button
            className="hx-burger"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Open navigation"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu (Bootstrap offcanvas) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{ background: "var(--bg)", color: "var(--fg)" }}
      >
        <div className="offcanvas-header justify-content-between">
          <span className="hx-brand" id="offcanvasNavbarLabel">
            <Image
              src={"/assets/images/Logo.svg"}
              width={110}
              height={46}
              alt="logo"
            />
          </span>
          <button
            type="button"
            className="hx-burger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="hx-offcanvas-links">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} data-bs-dismiss="offcanvas">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={"https://wa.me/03352653956"}
            target="_blank"
            className="hx-btn hx-btn-primary mt-4"
            data-bs-dismiss="offcanvas"
          >
            Let&apos;s Talk <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
