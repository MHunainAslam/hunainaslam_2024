import Image from "next/image";
import Link from "next/link";
import React from "react";

interface skilldatas {
  name: string;
  img: string;
}

const Skills: React.FC = () => {
  const data: skilldatas[] = [
    { name: "html", img: "/assets/images/html.webp" },
    { name: "css", img: "/assets/images/css.webp" },
    { name: "Bootstrap", img: "/assets/images/bootstrap.webp" },
    { name: "javascript", img: "/assets/images/javascript.webp" },
    { name: "typescript", img: "/assets/images/typescript.webp" },
    { name: "React Js", img: "/assets/images/react.webp" },
    { name: "Next Js", img: "/assets/images/next.webp" },
    { name: "Vue js", img: "/assets/images/vue.webp" },
    { name: "Redux", img: "/assets/images/redux.webp" },
    { name: "Github", img: "/assets/images/github.webp" },
  ];

  const row1 = data.slice(0, 5);
  const row2 = data.slice(5);

  const Skill = ({ item }: { item: skilldatas }) => (
    <div className="hx-skill">
      <Image
        src={item.img}
        alt={item.name}
        width={40}
        height={40}
      />
      <span>{item.name}</span>
    </div>
  );

  return (
    <section className="hx-section" id="skills">
      <div className="hx-container">
        <div className="hx-section-head">
          <span className="hx-eyebrow">My Skills</span>
          <h2 className="hx-h2">
            Let&apos;s Explore <span className="hx-gradient-text">My Skills</span>
          </h2>
          <p className="hx-lead">
            The modern tools and frameworks I use to build fast, polished web
            experiences.
          </p>
        </div>
      </div>

      <div className="hx-marquee">
        <div className="hx-marquee-track">
          {[...row1, ...row1].map((item, i) => (
            <Skill item={item} key={`a-${i}`} />
          ))}
        </div>
      </div>
      <div className="hx-marquee hx-marquee-rev">
        <div className="hx-marquee-track">
          {[...row2, ...row2].map((item, i) => (
            <Skill item={item} key={`b-${i}`} />
          ))}
        </div>
      </div>

      <div className="hx-container" style={{ marginTop: "44px" }}>
        <Link href={"#projects"} className="hx-btn hx-btn-primary">
          Explore Projects{" "}
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </Link>
      </div>
    </section>
  );
};

export default Skills;
