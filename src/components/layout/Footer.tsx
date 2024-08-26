import React from "react";
import Socialicon from "../Socialicon";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="black-bg">
      <div className="container-lg">
        <div className="row py-md-4 py-2 justify-content-md-between justify-content-center">
          <div className="col-md-6">
            <p className="para mb-md-0 text-md-start text-center">Copyright @2024 - 2025</p>
          </div>
          <div className="col-md-6">
            <Socialicon footer />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
