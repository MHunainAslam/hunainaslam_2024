import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Aboutme = (props: Props) => {
  return (
    <>
      <section className=" py-5" id="aboutme">
        <div className="container-lg black-bg px-md-5 py-5 rounded-2">
          <div className="row  justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-7">
              <div className="aboutme-content">
                <p className="para clr-light">About Me</p>
                <p className="primary-heading clr-white">
                  Professional{" "}
                  <span className="fw-bold clr-secondary">
                    Problem Solutions
                  </span>{" "}
                  For Digital Products
                </p>
                <p className="para clr-light">
                  My Name is Hunain Aslam Im a Meticulous Front-End Developer I
                  have developed strong skills in Front-End development using
                  modern technologies and frameworks. I am a quick learner and
                  an excellent team player who enjoys collaborating with others
                  to deliver outstanding results.
                </p>
                <ul className="ul">
                  <li className="para-lg px-3">Web Development</li>
                  {/* <li className="para-lg">App Development</li> */}
                  <li className="para-lg px-3">Product Design</li>
                  {/* <li className="para-lg">UI/UX Design</li> */}
                </ul>
                <div className="card main-card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-6 d-flex align-items-center my-2">
                        <span className="btn primary-btn-rounded">
                          <i
                            className="fa fa-envelope-o"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <div className="ms-3">
                          <p className="para-sm mb-0 clr-light">Email </p>
                          <Link
                            href={"mailto:hunainaslam.ha@gmail.com"}
                            className="para text-decoration-none mb-0 clr-white"
                          >
                            hunainaslam.ha@gmail.com
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex align-items-center my-2">
                        <span className="btn primary-btn-rounded">
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </span>
                        <div className="ms-3">
                          <p className="para-sm mb-0 clr-light">Whatsapp</p>
                          <Link
                            href={"mailto:+923352653956"}
                            className="para text-decoration-none mb-0 clr-white"
                          >
                            +92 335 2653956
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="ul">
                  <li className="para-lg px-3">Education</li>
                </ul>
                <div className="card main-card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-6 d-flex align-items-center my-2">
                        <span className="btn primary-btn-rounded px-0">01</span>
                        <div className="ms-3">
                          <p className="para-sm mb-2 clr-light">Bachelor&apos;s</p>
                          <span className="para text-decoration-none clr-white">
                            Computer Science
                          </span>
                          <p className="para-sm mb-0 mt-2 clr-light">
                            Years: 2020 to 2023
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex align-items-center my-2">
                        <span className="btn primary-btn-rounded px-0">02</span>
                        <div className="ms-3">
                          <p className="para-sm mb-2 clr-light">
                            Certification
                          </p>
                          <span className="para text-decoration-none clr-white">
                            Web Development
                          </span>
                          <p className="para-sm mb-0 mt-2 clr-light">
                            Years: 2021 to 2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-10 my-lg-0 my-4 position-relative ">
              <div className="aboutimg animate-up-down">
                <Image
                  src={"/assets/images/coding.svg"}
                  width={25}
                  height={25}
                  alt="icon"
                  className="object-fit-cover"
                ></Image>
                <span className="para mb-0 fw-bold ms-2">
                  Frontend Developer
                </span>
              </div>
              <Image
                // src={"/assets/images/me.JPG"}
                src={
                  "/assets/images/68747470733a2f2f647862636f64652e636f6d2f6173736574732f696d616765732f33393939382d7765622d646576656c6f706d656e742e676966.gif"
                }
                width={500}
                height={500}
                alt="Hunain"
                className="w-100 object-fit-cover  rounded-1"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
