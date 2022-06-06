import React from "react";
import Service from "./Service";
import { MdMobileFriendly } from "react-icons/md";
import { SiDgraph } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className="container">
      <h2 style={{ marginTop: "10rem" }} className="text-center">
        {" "}
        provide awesome <span className="text-success">Services</span>
      </h2>
      <div style={{ gap: "22px" }} className="d-flex justify-content-evenly">
        <Service title={"web & mobile design"} icon={<MdMobileFriendly />} />
        <Service
          title={"Graphic design"}
          shadow={"shadow-lg"}
          icon={<SiDgraph />}
        />
        <Service title={"web development"} icon={<RiComputerLine />} />
      </div>
    </section>
  );
};

export default Services;
