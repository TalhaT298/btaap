import { NotificationOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import em1 from "../../../src/assets/em1.png";
import em2 from "../../../src/assets/em2.png";
import em3 from "../../../src/assets/em3.png";
import em4 from "../../../src/assets/em4.png";
import em5 from "../../../src/assets/em5.png";
import em6 from "../../../src/assets/em6.png";
import em7 from "../../../src/assets/em7.png";
import em8 from "../../../src/assets/em8.png";
import em9 from "../../../src/assets/em9.png";
import em10 from "../../../src/assets/em10.png";
import em11 from "../../../src/assets/em11.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
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
          <SwiperSlide>
            <img src={em6} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em7} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em8} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em9} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em10} className="rounded-3xl" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={em11} className="rounded-3xl" alt="" />
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-start mt-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-gray-100 text-black px-5 py-4 rounded-full"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-gray-100 text-black px-5 py-5 rounded-full ml-2"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;