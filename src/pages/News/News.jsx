import { NotificationOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import em1 from "../../../src/assets/em1.png";
import em2 from "../../../src/assets/em2.png";
import em3 from "../../../src/assets/em3.png";
import em4 from "../../../src/assets/em4.png";
import em5 from "../../../src/assets/em5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const swiperRef = useRef(null);

  return (
    <div>
      <Link to="/news"></Link>
      <Helmet>
        <title>Btaap | News</title>
      </Helmet>

      {/* Title Section */}
      <div className="flex items-center justify-between py-6 pt-12 pl-6">
        <div className="flex items-center space-x-2">
          <div>
            <NotificationOutlined
              className="text-[#97ce9b]"
              style={{ fontSize: "50px" }}
            />
          </div>
          <span
            className="text-5xl font-extrabold text-black px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Press Release
          </span>
        </div>
      </div>

      <p
        className="text-4xl pl-6 py-8"
        style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
      >
        The latest news from {" "}
      </p>

      {/* Swiper Section */}
      <div className="py-8 relative">
        <Swiper
          slidesPerView={3} // Show 3 slides at a time
          centeredSlides={false}
          spaceBetween={30} // Adjust spacing between slides
          
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Assign Swiper instance to ref
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={em1} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em2} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em3} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em4} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em5} className="rounded-3xl" alt="" />
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-start mt-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-gray-800 text-white px-4 py-2 rounded-l-lg"
          >
            &#8592; {/* Left Arrow */}
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-gray-800 text-white px-4 py-2 rounded-r-lg ml-2"
          >
            &#8594; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;