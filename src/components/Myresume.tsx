import React from "react";

interface datas {
  title: string;
  year: string;
  company: string;
}

const Myresume: React.FC = () => {
  const data: datas[] = [
    {
      title: "frontend developer",
      year: "Jun 2024 — Present",
      company: "360i Agency",
    },
    {
      title: "frontend developer",
      year: "Nov 2023 — May 2024",
      company: "Chroma Solutions",
    },
    {
      title: "jr. frontend developer",
      year: "Jun 2022 — Oct 2023",
      company: "Eliteblue Technology",
    },
  ];

  return (
    <section className="hx-section" id="resume">
      <div className="hx-container">
        <div className="hx-section-head">
          <span className="hx-eyebrow">My Resume</span>
          <h2 className="hx-h2">
            Real <span className="hx-gradient-text">Problem Solutions</span>{" "}
            Experience
          </h2>
        </div>

        <div className="hx-timeline">
          {data.map((item, i) => (
            <div className="hx-tl-item hx-card" key={i}>
              <span className="yr">{item.year}</span>
              <div>
                <p className="hx-tl-role">{item.title}</p>
                <p className="hx-tl-co">{item.company}</p>
              </div>
              <span className="hx-tl-badge">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Myresume;
