import { NotificationOutlined } from "@ant-design/icons";
import React, { useRef, useState } from 'react';
import em1 from "../../../src/assets/em1.png";
import em2 from "../../../src/assets/em2.png";
import em3 from "../../../src/assets/em3.png";
import em4 from "../../../src/assets/em4.png";
import em5 from "../../../src/assets/em5.png";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
 
 

 

// import required modules
import { Pagination } from 'swiper/modules';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <Link to="/news"></Link>
      <Helmet>
        <title>Btaap | News</title>
      </Helmet>
      {/* title add */}
      <div className="flex items-center justify-between py-6 pl-6">
        <div className="flex items-center space-x-2">
          <div className="  " >
            <NotificationOutlined className="text-[#97ce9b]" style={{ fontSize: '50px' }} />
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
        className="text-4xl pl-6"
        style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
      >
        the latest news from{" "}
      </p>
      {/* swipper add */}
      <Swiper
        slidesPerView={3} // Set to 3 slides visible at a time
        centeredSlides={false} // Set to false if you don't want centered slides
        spaceBetween={30} // Adjust spacing between slides
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={em1} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={em2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={em3} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={em4} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={em5} alt="" /> </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default News;
