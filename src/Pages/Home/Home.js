import React from "react";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Logo from "./Logo";
import OurWorks from "./OurWorks";
import Services from "./Services";

const Home = () => {
  return (
    <section>
      <Banner />
      <Logo />
      <Services />
      <OurWorks />
      <Feedback />
    </section>
  );
};

export default Home;
