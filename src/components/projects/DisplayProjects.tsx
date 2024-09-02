import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  title: string;
  desc: string;
  img: string;
  url: URL;
}

const DisplayProjects: React.FC = () => {
  const data: Props[] = [
    {
      name: "Web application",
      title: "DentalZorg Dental Clinic",
      desc: "Dutch dental clinic in United Arab Emirates",
      img: "/assets/images/projects mockp/dentalzorg.png",
      url: new URL("https://www.dentalzorg.com/"),
    },

    {
      name: "Web application",
      title: "International eSIM Etijwaal",
      desc: "With eTijwaal’s eSIM, enjoy internet connection on every adventure and forget about expensive roaming bills upon your return.",
      img: "/assets/images/projects mockp/etijwaal.png",
      url: new URL("https://www.etijwaal.com/"),
    },
    {
      name: "ERP",
      title: "Adalat Group",
      desc: "Developed a comprehensive ERP system featuring order management, content management, and intuitive dashboards for streamlined business operations",
      img: "/assets/images/projects mockp/dentalzorg dashboard.png",
      url: new URL("https://dashboard.dentalzorg.com/"),
    },

    {
      name: "Dashboard",
      title: "Justice For US",
      desc: "This system features three key roles: Admin, Soldier, and Civil Servant. The Admin can create specific training programs, manage content, monitor participant progress. and etc",
      img: "/assets/images/projects mockp/justice.png",
      url: new URL("https://justice-4-u.vercel.app/"),
    },
    {
      name: "Dashboard",
      title: "Eobusiness Club",
      desc: "Admin can manage Partners, Users, Membership Packages and Monitoring sales",
      img: "/assets/images/projects mockp/eoscl.png",
      url: new URL("https://eobusinessclub.com/adminpanel"),
    },
  ];

  return (
    <section className="my-5" id="projects">
      <div className="container-lg">
        <p className="para clr-light  text-center">Latest Works</p>
        <p className="fw-normal primary-heading clr-white mb-5  text-center">
          Explore My Popular <span className="clr-secondary">Projects</span>
        </p>

        {data?.map((item, i) => (
          <div
            className={`row justify-content-between my-3 ${
              i % 2 == 1 && "flex-row-reverse"
            }`}
            key={i}
          >
            <div className="col-md-6 my-3">
              <Image
                src={item.img}
                alt="project"
                className="w-100 h-100"
                width={500}
                height={500}
                priority
                layout="responsive"
                quality={50}
              ></Image>
            </div>
            <div className="col-md-5 my-3  d-flex flex-column justify-content-center mx-auto">
              <div className="mx-auto">
                <p className="para clr-secondary">{item.name}</p>
                <h2 className="primary-heading fw-medium clr-white">
                  {item.title}
                </h2>
                <p className="para clr-light">{item.desc}</p>
                <Link
                  href={`${item.url}`}
                  target="_blank"
                  className="primary-btn-rounded-black text-decoration-none mt-3"
                >
                  <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="text-center mt-5">
          <button className="btn primary-btn py-3 px-4">
            View More Projects{" "}
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default DisplayProjects;
