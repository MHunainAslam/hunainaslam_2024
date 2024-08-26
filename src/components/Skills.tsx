import Image from "next/image";
import Link from "next/link";
import React from "react";

interface skilldatas  {
  name: string;
  img: string;
};

const Skills: React.FC = () => {
  const data: skilldatas [] = [
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
      <section className=" py-5 ">
        <div className="container-lg  position-relative skills-content black-bg px-md-5 py-5 rounded-2">
          <div className="row justify-content-lg-between justify-content-center z-3 position-relative">
            <div className="col-lg-4 mt-4">
              <p className="para clr-light">My Skills</p>
              <p className=" primary-heading clr-white">
                Let’s Explore <span className="fw-bold clr-secondary">My Skills</span>
              </p>
              <Link href={"#projects"} className="btn primary-btn mt-4 px-4 py-2 mb-3">
                Projects{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="col-lg-8">
              <div className="row justify-content-center">
                {data?.map((item, i) => (
                  <div className="col-lg-3 col-md-4 mt-3 col-6" key={i}>
                    <div className="card main-card skills-card">
                      <div className="card-body text-center">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={80}
                          height={100}
                          className="object-fit-contain"
                        ></Image>
                      </div>
                      <div className="card-footer primary-bg m-2 mb-3 border-0 rounded-3 text-center">
                        <p className="para  text-capitalize mb-0">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
