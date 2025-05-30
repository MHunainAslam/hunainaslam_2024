import Image from "next/image";
import React, { useEffect } from "react";
import Socialicon from "./Socialicon";
import Link from "next/link";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="mt-lg-0 mt-4" id="home">
      <div className="container-lg">
        <div className="row align-items-center min-vh-90 justify-content-between">
          <div className="col-xl-4 col-md-7">
            <p className="mb-0 secondary-headin clr-light">Hello i&apos;m</p>
            <p className="mb-0 primary-heading clr-secondary">Hunain Aslam</p>
            <p className=" heading">Frontend Developer</p>
            <p className="para clr-light">
              I am committed to excellence as a developer, driven by a passion
              for innovation and a dedication to exceeding expectations.
            </p>
            <Link href={"https://www.fiverr.com/hunainaslamm"} target="_blank" className="btn primary-btn mt-4">
              Hire Me <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="col-xl-3 col-md-5 d-xl-none d-md-block d-none my-md-0 my-4">
            <div className="card banner-card">
              <div className="catd-body">
                <div className="border-bottom">
                  <p className="primary-heading mb-1 clr-secondary">03+</p>
                  <p className="para clr-light">Years Of Experience</p>
                </div>
                <div className="border-bottom my-3">
                  <p className="primary-heading mb-1 clr-secondary">20+</p>
                  <p className="para clr-light">Project Complete</p>
                </div>
                <Socialicon />
              </div>
            </div>
          </div>
          <div className="col-xl-5 my-xl-0 my-4">
            <div className="position-relative banner-img mx-auto w-xl-100">
              {/* <Image
                src={"/assets/images/progress-shape.png"}
                width={400}
                height={400}
                alt="hunain"
              ></Image> */}
              <Image
                // src={"/assets/images/hunain.png"}
                // src={"/assets/images/68747470733a2f2f647862636f64652e636f6d2f6173736574732f696d616765732f33393939382d7765622d646576656c6f706d656e742e676966.gif"}
                src={
                  "/assets/images/68747470733a2f2f7777772e736172646f6e79782e696e2f7468656d65732f696d616765732f736f6674776172652d646576656c6f706d656e742f736172646f6e79782d736f667477617265646576656c6f706d656e743030312e676966.gif"
                }
                // src={"/assets/images/Front-end_Developer.8e8fc63a21e6eaa925b4.gif"}
                width={500}
                height={600}
                alt="hunain"
                className="user object-fit-contain"
              ></Image>
            </div>
            {/* <div className="position-relative mx-auto w-xl-100">
              <Image
                // src={"/assets/images/hunain.png"}
                src={
                  "/assets/images/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif"
                }
                // src={"/assets/images/Front-end_Developer.8e8fc63a21e6eaa925b4.gif"}
                width={500}
                height={500}
                alt="hunain"
                className="rounded-4 w-100 h-100 object-fit-contain shadow"
              ></Image>
            </div> */}
          </div>
          <div className="col-xl-3 col-md-5 d-xl-block d-md-none d-block">
            <div className="card banner-card">
              <div className="catd-body">
                <div className="border-bottom">
                  <p className="primary-heading mb-1 clr-secondary">02+</p>
                  <p className="para clr-light">Years Of Experience</p>
                </div>
                <div className="border-bottom my-3">
                  <p className="primary-heading mb-1 clr-secondary">20+</p>
                  <p className="para clr-light">Project Complete</p>
                </div>
                <Socialicon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
