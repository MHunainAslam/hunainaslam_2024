import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row align-items-center min-vh-90 justify-content-between">
          <div className="col-xl-4 col-md-7">
            <p className="mb-0 secondary-heading">Hello i'm</p>
            <p className="mb-0 primary-heading">Hunain Aslam</p>
            <p className=" heading">Frontend Developer</p>
            <p className="para clr-light">
              I am committed to excellence as a developer, driven by a passion
              for innovation and a dedication to exceeding expectations.
            </p>
            <button className="btn primary-btn mt-4">Hire Me <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
          <div className="col-xl-3 col-md-5 d-xl-none my-md-0 my-4">
            <div className="card banner-card">
              <div className="catd-body">
                <div className="border-bottom">
                  <p className="primary-heading mb-1">02+</p>
                  <p className="para clr-light">Years Of Experience</p>
                </div>
                <div className="border-bottom mt-3">
                  <p className="primary-heading mb-1">05+</p>
                  <p className="para clr-light">Work with Companies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg my-xl-0 my-4">
            <div className="position-relative banner-img mx-auto">
              <Image
                src={"/assets/images/progress-shape.png"}
                width={200}
                height={200}
                alt="hunain"
              ></Image>
              <Image
                src={"/assets/images/hunain.png"}
                width={1000}
                height={1000}
                alt="hunain"
                className="user object-fit-contain"
              ></Image>
              {/* <Image
                src={"/assets/images/bannerimg.gif"}
                width={600}
                height={600}
                alt="banner"
              ></Image> */}
            </div>
          </div>
          <div className="col-xl-3 col-md-5 d-xl-block d-none">
            <div className="card banner-card">
              <div className="catd-body">
                <div className="border-bottom">
                  <p className="primary-heading mb-1">02+</p>
                  <p className="para clr-light">Years Of Experience</p>
                </div>
                <div className="border-bottom mt-3">
                  <p className="primary-heading mb-1">05+</p>
                  <p className="para clr-light">Work with Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
