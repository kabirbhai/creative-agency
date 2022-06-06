import React from "react";
import frame from "../../images/logos/Frame.png";
import "../../styles/Home.css";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${banner})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" d-flex container align-items-center h-100 justify-content-between ">
        <div>
          <h1 className="my-4">Welcome to Our creative agency</h1>
          <p className="my-4">
            We are so happy to see you. You can find something new I challenge
            you can find something new. If you don't find anything please report
            our website we really appreciate it. Thank you{" "}
          </p>
          <button className="btn btn-info text-white fw-bold fs-5  ">
            Explore more
          </button>
        </div>
        <div>
          <img style={{ width: "400px" }} src={frame} alt="frame" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
