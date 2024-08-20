import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const DisplayProjects = (props: Props) => {
  return (
    <section className="my-5">
      <div className="container-lg">
        <p className="para clr-light  text-center">Latest Works</p>
        <p className="fw-normal primary-heading clr-white mb-5  text-center">
          Explore My Popular <span className="clr-secondary">Projects</span>
        </p>

        <div className="row justify-content-between">
          <div className="col-md-6 my-3">
            <Image
              src="/assets/images/projects mockp/etijwaal.png"
              alt="project"
              className="w-100 h-100"
              width={500}
              height={500}
              priority
              layout="responsive"
              quality={50}
            ></Image>
          </div>
          <div className="col-md-5 my-3 px-md-4 px-3 d-flex flex-column justify-content-center">
            <p className="para clr-secondary">Web Application</p>
            <h2 className="primary-heading fw-medium clr-white">
              International eSIM Etijwaal
            </h2>
            <p className="para clr-light">
              With eTijwaal’s eSIM, enjoy internet connection on every adventure
              and forget about expensive roaming bills upon your return.
            </p>
            <Link
              href="https://www.etijwaal.com/"
              target="_blank"
              className="primary-btn-rounded-black text-decoration-none mt-3"
            >
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayProjects;
