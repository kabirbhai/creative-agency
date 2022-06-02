import React from "react";
import frame from "../../images/logos/Frame.png";
import "../../styles/Home.css";

const Banner = () => {
  return (
    <section>
      <div
        style={{ marginTop: "102px" }}
        className=" d-flex container align-items-center justify-content-center "
      >
        <div>
          <h1 className="my-4">Welcome to Our creative agency</h1>
          <p className="my-4">
            We are so happy to see you. You can find something new I challenge
            you can find something new. If you don't find anything please report
            our website we really appreciate it. Thank you{" "}
          </p>
          <button className="btn btn-secondary text-white fw-bold fs-5  ">
            Explore more
          </button>
        </div>
        <div>
          <img style={{ width: "500px" }} src={frame} alt="frame" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
