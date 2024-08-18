import Image from "next/image";
import React from "react";

interface datas {
  title: string;
  year: string;
  company: string;
}
interface pushDatas {
  name: string;
}

const Myresume: React.FC = () => {
  const data: datas[] = [
    {
      title: "frontend developer",
      year: "june 24 - Present",
      company: "360i Agency",
    },
    {
      title: "frontend developer",
      year: "nov 23 - may 24",
      company: "Chroma Solutions",
    },
    {
      title: "jr. frontend developer",
      year: "June 22 - Oct 23",
      company: "Eliteblue Technology",
    },
  ];

  const pushArray: datas[] = [
    { title: "", year: "", company: "" },
    { title: "", year: "", company: "" },
  ];
  data.splice(1, 0, pushArray[0]); // Insert first "push" at index 1
  data.splice(4, 0, pushArray[0]); // Insert first "push" at index 1

  return (
    <section className="my-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-3 pt-md-5">
            <div className="card main-card mb-md-0 mb-4 resume-icon mt-md-5">
                {/* <Image src="/assets/images/laptop_icon_animation.gif" className="my-auto w-100 h-100" alt="coding" width={100} height={100}/> */}
              <i
                className="fa fa-laptop clr-secondary m-auto"
                aria-hidden="true"
                style={{ fontSize: "80px" }}
              ></i>
            </div>
          </div>
          <div className="col-md-9">
            <p className="para clr-light">My Resume</p>
            <p className="fw-normal primary-heading clr-white">
              Real <span className="clr-secondary">Problem Solutions</span>
              <br /> Experience
            </p>
            <div className="card main-card mt-md-0 mt-4">
              <div className="card-body">
                <div className="exp-grid">
                  {data.map((item, i) => {
                    return (
                      <div
                        className={
                          i == 1 ? "exp-vr" : i == 4 ? "exp-vr" : "my-3 d-flex"
                        }
                        key={i}
                      >
                        {i !== 1 && i !== 4 ? (
                          <span className="primary-btn-rounded-black me-4">
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>

                          </span>
                        ) : null}
                        <div>
                          <p className="para clr-light text-capitalize mb-1 fw-light">
                            {item.year}
                          </p>
                          <p className="para-lg clr-white text-uppercase fw-bold mb-1">
                            {item.title}
                          </p>
                          <p className="para clr-light text-capitalize fw-light">
                            {item.company}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myresume;
