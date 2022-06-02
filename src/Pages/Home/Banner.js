import React from "react";
import frame from "../../images/logos/Frame.png";

const Banner = () => {
  return (
    <section className="d-flex ">
      <div>
        <h1>Welcome to Our creative agency</h1>
        <p>
          We are so happy to see you. You can find something new I challenge you
          can find something new. If you don't find anything please report our
          website we really appreciate it. Thank you{" "}
        </p>
        <button className="btn btn-outline-info">Explore more</button>
      </div>
      <div>
        <img style={{ width: "500px" }} src={frame} alt="frame" />
      </div>
    </section>
  );
};

export default Banner;
