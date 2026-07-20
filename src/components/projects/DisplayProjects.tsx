import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  title: string;
  desc: string;
  img: string;
  url: string;
}

const DisplayProjects: React.FC = () => {
  const data: Props[] = [
    {
      name: "Web application",
      title: "Mythya",
      desc: "Enter the Realm of Legends – A Mythical Gaming Adventure!",
      img: "/assets/images/projects mockp/myhtya.png",
      url: "https://mythya.vercel.app/",
    },
    {
      name: "Web application",
      title: "DentalZorg Dental Clinic",
      desc: "Dutch dental clinic in the United Arab Emirates.",
      img: "/assets/images/projects mockp/dentalzorg.png",
      url: "https://www.dentalzorg.com/",
    },
    {
      name: "Web application",
      title: "International eSIM Etijwaal",
      desc: "With eTijwaal's eSIM, enjoy an internet connection on every adventure and forget about expensive roaming bills upon your return.",
      img: "/assets/images/projects mockp/etijwaal.png",
      url: "https://www.etijwaal.com/",
    },
    {
      name: "ERP",
      title: "Adalat Group",
      desc: "A comprehensive ERP system featuring order management, content management, and intuitive dashboards for streamlined business operations.",
      img: "/assets/images/projects mockp/dentalzorg dashboard.png",
      url: "https://dashboard.dentalzorg.com/",
    },
    {
      name: "Dashboard",
      title: "Justice For US",
      desc: "A platform with three key roles — Admin, Soldier, and Civil Servant. Admins create training programs, manage content, and monitor participant progress.",
      img: "/assets/images/projects mockp/justice.png",
      url: "https://justice-4-u.vercel.app/",
    },
    {
      name: "Dashboard",
      title: "Eobusiness Club",
      desc: "Admins can manage partners, users, and membership packages while monitoring sales.",
      img: "/assets/images/projects mockp/eoscl.png",
      url: "https://eobusinessclub.com/adminpanel",
    },
  ];

  return (
    <section className="hx-section" id="projects">
      <div className="hx-container">
        <div className="hx-section-head">
          <span className="hx-eyebrow">Latest Works</span>
          <h2 className="hx-h2">
            Explore My Popular{" "}
            <span className="hx-gradient-text">Projects</span>
          </h2>
        </div>

        <div className="hx-projects-grid">
          {data.map((item, i) => (
            <Link
              href={item.url}
              target="_blank"
              className="hx-project"
              key={i}
              aria-label={`Open ${item.title}`}
            >
              <span className="hx-project-glow" aria-hidden="true"></span>
              <div className="hx-project-media">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  quality={60}
                />
                <div className="hx-project-overlay">
                  <span className="hx-project-cta">
                    View Project
                    <i
                      className="fa fa-arrow-up"
                      style={{ transform: "rotate(45deg)" }}
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
              <div className="hx-project-body">
                <span className="hx-project-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hx-project-tag">{item.name}</span>
                <h3 className="hx-project-title">{item.title}</h3>
                <p className="hx-project-desc">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayProjects;
