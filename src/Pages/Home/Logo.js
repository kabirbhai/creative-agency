import React from "react";
import airbnb from "../../images/logos/airbnb.png";
import google from "../../images/logos/google.png";
import netflix from "../../images/logos/netflix.png";
import slack from "../../images/logos/slack.png";
import uber from "../../images/logos/uber.png";

const Logo = () => {
  return (
    <section className="container mx-auto  ">
      <div
        style={{ gap: "23px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <img width={100} src={airbnb} alt="" />
        <img width={100} src={google} alt="" />
        <img width={100} src={netflix} alt="" />
        <img width={100} src={slack} alt="" />
        <img width={100} src={uber} alt="" />
      </div>
    </section>
  );
};

export default Logo;
