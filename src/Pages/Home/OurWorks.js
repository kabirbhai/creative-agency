import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import carousel1 from "../../images/carousel-1.png";
import carousel2 from "../../images/carousel-2.png";
import carousel4 from "../../images/carousel-4.png";
import carousel5 from "../../images/carousel-5.png";

const OurWorks = () => {
  return (
    <section
      style={{ padding: "30px 0px", margin: "40px 0px" }}
      className="container mx-auto bg-info rounded "
    >
      <h2 className="text-center my-4 fw-bolder text-uppercase text-light">
        Here some of our work
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div class="card mx-auto " style={{ width: "18rem" }}>
            <img src={carousel1} class="card-img-top" alt="..." />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div class="card mx-auto " style={{ width: "18rem" }}>
            <img src={carousel2} class="card-img-top" alt="..." />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="">
          <div class="card mx-auto " style={{ width: "18rem" }}>
            <img src={carousel3} class="card-img-top" alt="..." />
          </div>
        </SwiperSlide> */}
        <SwiperSlide className="">
          <div class="card mx-auto " style={{ width: "18rem" }}>
            <img src={carousel4} class="card-img-top" alt="..." />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div class="card mx-auto " style={{ width: "18rem" }}>
            <img src={carousel5} class="card-img-top" alt="..." />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OurWorks;
