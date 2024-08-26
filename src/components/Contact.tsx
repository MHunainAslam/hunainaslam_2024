import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";
import Socialicon from "./Socialicon";

interface skilldatas {
  name: string;
  img: string;
}

const Conatct: React.FC = () => {
  const data: skilldatas[] = [
    {
      name: "html",
      img: "/assets/images/html.webp",
    },
    {
      name: "css",
      img: "/assets/images/css.webp",
    },
    {
      name: "Bootstrap",
      img: "/assets/images/bootstrap.webp",
    },
    {
      name: "javascrip",
      img: "/assets/images/javascript.webp",
    },
    {
      name: "typescript",
      img: "/assets/images/typescript.webp",
    },
    {
      name: "React Js",
      img: "/assets/images/react.webp",
    },
    {
      name: "Next Js",
      img: "/assets/images/next.webp",
    },
    {
      name: "Vue js",
      img: "/assets/images/vue.webp",
    },
    {
      name: "Redux",
      img: "/assets/images/redux.webp",
    },
    {
      name: "Github",
      img: "/assets/images/github.webp",
    },
  ];
  return (
    <>
      <section className="py-md-5" id="contact">
        <div className="container-lg  position-relative px-md-5 py-5 rounded-2">
          <div className="row justify-content-lg-between justify-content-center z-3 position-relative">
            <div className="col-lg-4 mt-4">
              <p className="para clr-light">Get In Touch</p>
              <p className="fw-normal primary-heading clr-white">
                Let&apos;s <span className=" clr-secondary">Talk</span>
              </p>
              <p className="para clr-light">
                Feel free to reach out if you&apos;re looking to hire a developer
              </p>
              <ul className="d-block my-5 ul">
                <li className="para-lg my-4 ps-3">Web Development</li>
                {/* <li className="para-lg">App Development</li> */}
                <li className="para-lg my-4 ps-3">Product Design</li>
                {/* <li className="para-lg">UI/UX Design</li> */}
              </ul>
              <Socialicon />
            </div>
            <div className="col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conatct;
