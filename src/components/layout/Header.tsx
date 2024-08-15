import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header: React.FC<Props> = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg " id="sticky-header">
        <div className="container-fluid">
          <a className="navbar-brand logo logo-t" href="#">
           H.A
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Contact
                  </Link>
                </li>

              </ul>
                <button className="btn primary-btn">LET'S TALK</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
