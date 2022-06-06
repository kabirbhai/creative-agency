import React from "react";
import customer1 from "../../images/customer-1.png";
import customer2 from "../../images/customer-2.png";
import customer3 from "../../images/customer-3.png";

const Feedback = () => {
  return (
    <section className="container">
      <h2 className="text-center fw-bolder my-5 text-uppercase text-primary">
        Clients feedback
      </h2>
      <div
        style={{ gap: "33px", margin: "20px 38px" }}
        className="feedback-content-container"
      >
        <div className="border rounded px-4 py-2">
          <div className="d-flex align-items-center mb-3 ">
            <img width={40} src={customer1} alt="" />
            <div className="ms-2">
              <span className="d-block fw-bold fs-5">Nash patik</span>{" "}
              <small>Bangladesh</small>
            </div>
          </div>
          <p>
            This is the review for this section. hello dear how are you. I am
            fine . what about you? I am also fine. where do you live. I live is
            Bangladesh. First of I world like to say that, This is the website I
            have made within 2 week. Thank you.
          </p>
        </div>
        <div className="border rounded px-4 py-2">
          <div className="d-flex align-items-center mb-3">
            <img width={40} src={customer2} alt="" />
            <div className="ms-2">
              <span className="d-block fw-bold fs-5">John smith</span>{" "}
              <small>Bangladesh</small>
            </div>
          </div>
          <p>
            This is the review for this section. hello dear how are you. I am
            fine . what about you? I am also fine. where do you live. I live is
            Bangladesh. First of I world like to say that, This is the website I
            have made within 2 week. Thank you.
          </p>
        </div>
        <div className="border rounded px-4 py-2">
          <div className="d-flex align-items-center mb-3">
            <img width={40} src={customer3} alt="" />
            <div className="ms-2">
              <span className="d-block fw-bold fs-5">Stiven jonson</span>{" "}
              <small>Bangladesh</small>
            </div>
          </div>
          <p>
            This is the review for this section. hello dear how are you. I am
            fine . what about you? I am also fine. where do you live. I live is
            Bangladesh. First of I world like to say that, This is the website I
            have made within 2 week. Thank you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
