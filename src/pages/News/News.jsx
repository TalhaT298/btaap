import { NotificationOutlined } from "@ant-design/icons";
import React, { useRef, useState } from 'react';

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
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default News;
