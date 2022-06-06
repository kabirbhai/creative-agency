import React from "react";

const Service = ({ title, icon, shadow }) => {
  return (
    <section>
      <div className="card my-4 border-0 ">
        <div
          className={`card-body d-flex flex-column align-items-center ${shadow}`}
        >
          <span className="fs-1 text-primary "> {icon}</span>
          <h5 className="card-title mt-2">{title}</h5>
          <p className="text-center">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
