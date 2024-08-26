import Link from "next/link";
import React from "react";

type Props = {
  footer?: boolean;
};

const Socialicon = ({ footer }: Props) => {
  return footer ? (
    <div className="d-flex justify-content-md-end justify-content-center">
      <Link href={"mailto:hunainaslam.ha@gmail.com"} className="para clr-light mx-3 text-decoration-none" target="_blank">
        Mail
      </Link>
      <Link href={"https://wa.me/03352653956"} className="para clr-light mx-3 text-decoration-none" target="_blank">
        Whatsapp
      </Link>
      <Link href={"https://github.com/mhunainaslam"} className="para clr-light mx-3 text-decoration-none" target="_blank">
        Github
      </Link>
      <Link href={"https://www.linkedin.com/in/hunain-aslam"} className="para clr-light mx-3 text-decoration-none" target="_blank">
        Linkedin
      </Link>
    </div>
  ) : (
    <div className="d-flex">
      <Link href={"mailto:hunainaslam.ha@gmail.com"} className="icon text-decoration-none" target="_blank">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </Link>
      <Link href={"https://wa.me/03352653956"} className="icon text-decoration-none" target="_blank">
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </Link>
      <Link href={"https://github.com/mhunainaslam"} className="icon text-decoration-none" target="_blank">
        <i className="fa fa-github" aria-hidden="true"></i>
      </Link>
      <Link href={"https://www.linkedin.com/in/hunain-aslam"} className="icon text-decoration-none" target="_blank">
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

export default Socialicon;
