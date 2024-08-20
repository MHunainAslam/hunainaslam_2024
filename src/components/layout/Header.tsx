import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg " id="sticky-header">
        <div className="container-lg">
          <a className="navbar-brand logo logo-t" href="#">
          <Image src={"/assets/images/Logo.svg"} width={300} height={300} alt="logo" className="w-100 h-100"/>
          </a>
          <button
            className="navbar-toggler primary-btn-rounded p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-align-right" aria-hidden="true"></i>
          </button>
          <div
            className="offcanvas offcanvas-end primary-bg"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-between">
              <Image
                src={"/assets/images/logoimg.png"}
                width={100}
                height={100}
                alt="logo"
              ></Image>
              <h5 className="offcanvas-title logo-t" id="offcanvasNavbarLabel">
                H.A
              </h5>
              <i
                className="fa fa-times clr-white fs-2 pointer"
                data-bs-dismiss="offcanvas"
                aria-hidden="true"
              ></i>
            </div>
            <div className="offcanvas-body text-center">
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
              <button className="btn primary-btn ">LET&apos;S TALK</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
