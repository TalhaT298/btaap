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
import ch1 from "../../../src/assets/fe1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { Pagination } from "swiper/modules";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  const swiperRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
        The latest news from{" "}
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
      {/* -----------------------------------------------2nd phase -------------------------------------------*/}
      <div class="flex ">
        {/* <!-- Left Section --> */}
        <div class="w-full lg:w-9/12 p-4">
          {/* <!-- News Items --> */}
          <div class="space-y-4">
            {/* <!-- News Item 1 --> */}
            <div className="flex py-2 px-2 border-b border-black">
              <div
                class=""
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                <p class="text-gray-500 text-sm mb-2 pt-2">2024.10.22</p>
                <h3 class="text-2xl font-bold mb-2">
                  Kakao Declares AI-Native Vision and Unveils AI Mate "Kanana"
                  at "if(kakaoAI)2024"
                </h3>
                <p class="text-sm text-gray-400 pt-6">
                  #Kakao #Kanana #if kakao #kakao AI
                </p>
              </div>
              <img src={ch1} className=" h-36 rounded-3xl" alt="" />
            </div>
            {/* <!-- News Item 2 --> */}
            <div class="bg-white p-6 shadow rounded-md">
              <p class="text-gray-500 text-sm mb-2">2024.09.30</p>
              <h3 class="text-xl font-bold mb-2">
                Kakao Unveils Group Slogan "Closer with Kakao" For Greater
                Inclusivity
              </h3>
              <p class="text-sm text-gray-400">
                #kakao #slogan #closer with kakao
              </p>
            </div>
            {/* <!-- News Item 3 --> */}
            <div class="bg-white p-6 shadow rounded-md">
              <p class="text-gray-500 text-sm mb-2">2024.09.27</p>
              <h3 class="text-xl font-bold mb-2">
                Kakao, The First Korean IT Company to Develop and Publicly
                Release Open Source Benchmarking Dataset
              </h3>
              <p class="text-sm text-gray-400">#kakao #AI</p>
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div class="w-full lg:w-3/12 p-4">
          {/* <!-- Recommended News --> */}
          <div class="bg-white p-6 shadow rounded-md">
            <h4 class="text-lg font-bold mb-4">Recommended News</h4>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="text-yellow-500 mr-2">🔔</div>
                <div>
                  <p class="text-gray-500 text-sm">2024.10.22</p>
                  <p class="text-sm font-medium">
                    Kakao Declares AI-Native Vision and Unveils AI Mate
                    "Kanana"...
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="text-yellow-500 mr-2">🔔</div>
                <div>
                  <p class="text-gray-500 text-sm">2024.09.30</p>
                  <p class="text-sm font-medium">
                    Kakao Unveils Group Slogan "Closer with Kakao" For
                    Greater...
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 shadow rounded-md mt-6">
            <h4 class="text-lg font-bold mb-4">Tags</h4>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-100 text-sm px-3 py-1 rounded-full">
                #LACP
              </span>
              <span class="bg-gray-100 text-sm px-3 py-1 rounded-full">
                #closer with kakao
              </span>
              <span class="bg-gray-100 text-sm px-3 py-1 rounded-full">
                #slogan
              </span>
              <span class="bg-gray-100 text-sm px-3 py-1 rounded-full">
                #groupwide
              </span>
              <span class="bg-gray-100 text-sm px-3 py-1 rounded-full">
                #compliance covenant
              </span>
              <span class="bg-gray-100 text-sm px-3 py-1 rounded-full">
                #Sustainable Companies of 202...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end py-10">
                    <div onClick={scrollToTop} className="list-none ">
                      <Link to="">
                        <IoArrowUpCircleSharp className="w-16 h-16 " />
                      </Link>
                    </div>
                  </div>
    </div>
  );
};

export default News;
