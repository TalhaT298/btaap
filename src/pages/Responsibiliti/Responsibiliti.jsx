import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import promise from "../../../src/assets/promise.gif";
import turbine from "../../../src/assets/turbine.gif";
import measure from "../../../src/assets/measure.gif";
import a from "../../../src/assets/a.png";
import b from "../../../src/assets/b23.png";
import cc from "../../../src/assets/cc.png";
import le from "../../../src/assets/le.png";
import mobile from "../../../src/assets/mobile.png";
import t1 from "../../../src/assets/t1.png";
import t2 from "../../../src/assets/t2.png";
import t3 from "../../../src/assets/t3.png";
import t4 from "../../../src/assets/t4.png";
import t5 from "../../../src/assets/t5.png";
import t6 from "../../../src/assets/t6.png";
import t7 from "../../../src/assets/t7.png";
import { MdArrowOutward } from "react-icons/md";
import "swiper/css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import eco from "../../../src/assets/ecobanner.webp";
import { ArrowDownOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
const Responsibiliti = () => {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const handleNextSlide = () => {
    swiperRef.current.swiper.slideNext(); // Move to the next slide
  };

  const handlePrevSlide = () => {
    swiperRef.current.swiper.slidePrev(); // Move to the previous slide
  };
  // scroll top er section
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
  return (
    <div>
      <Link to="/responsibility"></Link>
      {/* 1st section start */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="w-16 h-16 flex items-center justify-center rounded-lg">
            <img className="rounded-xl" src={promise} alt="" />
          </div>
          <span
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black px-4 sm:px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            ESG Reports
          </span>
        </div>

        <div className="navbar-end">
          <a className="w-44 h-12 rounded-full bg-[#97ce9b] text-white flex items-center justify-center cursor-pointer">
            2023 ESG Report
            <ArrowDownOutlined className="pl-2" />
          </a>
        </div>
      </div>
      {/* 1st section finish */}
      {/* 2nd section start */}
      <div className="flex justify-center items-center py-6">
        <img src={eco} alt="" />
      </div>
      {/* 2nd section finish */}
      {/* 3rd section start */}
      <div>
        <div className="flex justify-center items-center">
          <h1
            className="text-5xl"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            2023 HIGHLIGHT
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* <!-- Card 1 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
            >
              Used 2X more renewable energy than 2022
            </h3>
            <p
              class="text-gray-700 text-sm lg:text-base mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Wind power in Jeju
              <br />
              Solar power in Pangyo
            </p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={turbine} alt="Renewable energy" className="w-full" />

              {/* Button */}
              <button
                className="absolute top-3/4 left-0 flex items-center justify-center bg-opacity-70 p-2 rounded-full "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <PlusCircleOutlined
                  className="text-black"
                  style={{ fontSize: "34px", height: "34px", width: "34px" }}
                />
              </button>
            </div>

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">
                  Increased renewable energy
                </h3>
                <p className="py-4">
                  In 2023, btaap joined RE100 to achieve carbon neutrality and
                  transition to renewable energy. Renewable energy is now being
                  used in btaap's Jeju and Pangyo office. <br />
                  The Jeju headquarters is now operating 100% on renewable
                  energy procured from wind power generated in Jeju and from
                  solar power produced from Gyeonggi-do Renewable Energy Coop's
                  solar power generator, which have now started to provide
                  renewable energy to btaap's Pangyo office.
                </p>
              </div>
            </dialog>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              A system for reform,
              <br /> to regain users' trust
            </h3>
            <p
              class="text-gray-700 text-sm lg:text-base mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
            >
              Wind power in Jeju
              <br />
              Solar power in Pangyo
            </p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={measure} alt="Renewable energy" className="w-full" />

              {/* Button */}
              <button
                className="absolute top-3/4 left-0 flex items-center justify-center bg-opacity-70 p-2 rounded-full "
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <PlusCircleOutlined
                  className="text-black"
                  style={{ fontSize: "34px", height: "34px", width: "34px" }}
                />
              </button>
            </div>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">
                  Established the Compliance and Trust Committee
                </h3>
                <p className="py-4">
                  Btaap established the Compliance and Trust Committee, an
                  independent body that monitors Btaap affiliates' compliance to
                  law and practice of ethical management. This committee will
                  implement a framework for compliance and trust management and
                  support the execution of corporate social responsibility{" "}
                  <br />
                  Kakao established the Compliance and Trust Committee, an
                  independent body that monitors Kakao affiliates' compliance to
                  law and practice of ethical management. This committee will
                  implement a framework for compliance and trust management and
                  support the execution of corporate social responsibility
                </p>
              </div>
            </dialog>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Dangol Market <br /> receives the <br /> Presidential Award
            </h3>
            <p
              class="text-gray-700 text-sm lg:text-base mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
            >
              Used services to digitize traditional markets
              <br />
              traditional markets
            </p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={mobile} alt="Renewable energy" className="w-full" />

              {/* Button */}
              <button
                className="absolute top-3/4 left-0 flex items-center justify-center bg-opacity-70 p-2 rounded-full "
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <PlusCircleOutlined
                  className="text-black"
                  style={{ fontSize: "34px", height: "34px", width: "34px" }}
                />
              </button>
            </div>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">
                  Dangol Market receives the Presidential Award
                </h3>
                <p className="py-4">
                  Btaap operates multiple programs that support the
                  digitalization of small businesses. Dangol Market is a project
                  that supports the digitalization of vendors in traditional
                  markets, so that they can easily communicate and attract
                  regular customers. <br />
                  The Dangol Market project was recognized for closing the
                  digital gap by helping and training market vendors on how to
                  set up and use their own KakaoTalk Channel, and was awarded
                  the 2023 Presidential Award for the Promotion of Traditional
                  Markets.
                </p>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      {/* 3rd section finish */}
      {/* 4th section add */}
      <div className="py-1">
        <div className="flex justify-center items-center py-10">
          <button
            className="btn h-10 bg-gray-200 text-black hover:bg-black hover:text-gray-100 rounded-3xl text-lg"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            &nbsp;&nbsp;More &nbsp;&nbsp;
          </button>
        </div>
      </div>
      {/* 5th section add */}
      <div className="py-6">
        <div className="flex justify-center items-center py-7">
          <h1
            className="text-5xl"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            2023 ESG Evaluation Results
          </h1>
        </div>
        {/* card add */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-6">
          {/* <!-- Card 1 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              MSCI
            </h3>
            <p class=" text-sm lg:text-base font-bold mb-4">
              Received MSCI ESG
              <br />
              Rating of A
              <br />
              মান নিয়ন্ত্রণ সংস্থা
            </p>
            <p>(2023)</p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={a} alt="Renewable energy" className="w-full" />

              {/* Button */}
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              বাংলাদেশে ESG
            </h3>
            <p class=" text-sm lg:text-base font-bold mb-4">
              Received KCGS ESG
              <br />
              Rating of A for the third
              <br />
              consecutive year
            </p>
            <p>(2022~2023)</p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={b} alt="Renewable energy" className="w-full" />

              {/* Button */}
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              S&P Global
            </h3>
            <p class=" text-sm lg:text-base font-bold mb-4">
              Rated Top 1% in S&P
              <br />
              Global ESG Score for the
              <br />
              second consecutive year
            </p>
            <p>(2022~2023)</p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={cc} alt="Renewable energy" className="w-full" />
            </div>
          </div>
          {/* ?card 4 */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              CDP
            </h3>
            <p class=" text-sm lg:text-base font-bold mb-4">
              Rated A in Leadership by
              <br />
              CDP Climate Change
              <br />
              Btaap update
            </p>
            <p>(2022~2023)</p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={le} alt="Renewable energy" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* 6th section start */}
      <div className="py-8">
        {/* title start */}
        <div className="flex justify-center items-center py-14">
          <h1
            className="text-5xl"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            2023 ESG Key Indicators
          </h1>
        </div>
        {/* cursol add */}
        <div className="">
          <Swiper
            ref={swiperRef} // Attach the ref to the Swiper component
            watchSlidesProgress={true}
            slidesPerView={4}
            spaceBetween={40} // Add this line for gap
            className="mySwiper"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <SwiperSlide>
              <img className="rounded-2xl" src={t1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={t3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={t5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={t4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={t2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={t6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-2xl" src={t7} alt="" />
            </SwiperSlide>
          </Swiper>
          {/* Button to trigger slide change */}
          {/* <button onClick={handleNextSlide} className="mt-4 px-4 py-2 bg-gray-100 rounded-full text-black ">
      <FaCircleArrowRight />
      </button> */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={handlePrevSlide}
              className="px-4 py-2   text-black rounded"
            >
              <FaCircleArrowLeft className=" w-10 h-10" />
            </button>
            <button
              onClick={handleNextSlide}
              className="px-4 py-2  text-black rounded"
            >
              <FaCircleArrowRight className=" w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
      {/* 6th section finish */}
      {/* -----------------------------------------------7th section start--------------------------------- */}
      {/* title */}
      <div className="flex justify-center items-center py-14">
        <h1
          className="text-5xl"
          style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
        >
          Related Websites
        </h1>
      </div>
      <div className="pb-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
          {/* <!-- Card 1 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Btaap Impact
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">#ResolveSocialIssues #Tech4Good</p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Btaap Creative Foundation
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">#DigitalCreator #Support</p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Btaap Together
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">#Donations #CollectiveAction</p>
          </div>
          {/* sction2 */}
          {/* <!-- Card 1 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Btaap Makers
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">
              #ProductionWithoutInventory #SocialImpact
            </p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Btaap Creative for Credo
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">
              #SmallBizOwners #DigitalTransformation
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Dangol Market
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">
              #SmallBizOwners #DigitalTransformation
            </p>
          </div>

          {/* sction3 */}
          {/* <!-- Card 1 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Heroes on the road
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">
              #Mobile #CivilianHeroAward #WinWin
            </p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Btaap Tech Campus
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">
              #ITDeveloperProgram #LocalUndergraduates
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <h3
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Jeju with Btaap
              </h3>
              <p>
                <MdArrowOutward className="w-8 h-8" />
              </p>
            </div>

            <p class="text-lg text-gray-600">#Jeju #LocalSociety #WinWin</p>
          </div>
          {/* <!-- Add more cards as needed --> */}
        </div>
      </div>
      {/* -----------------------------------------------7th section finish -------------------------------------*/}
      {/* -----------------------------------------------8th section start -------------------------------------*/}
      <div className="flex py-12 pt-20">
        <div className="w-2/6 text-3xl font-semibold" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}>Data References</div>
        <div className="w-4/6">
           
          <p className="text-xl" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>1)Accessibility is about providing people with or without disability 
          the<br /> ability to use web and app services ↑</p>
          <p className="py-10 text-xl" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
          2)Reference : 2023
          Accessibility Survey<br /> - Survey was conducted only on top priority
          features in Btaap's main<br /> services ↑
          </p>
        </div>
      </div>
      {/* -----------------------------------------------8th section finish -------------------------------------*/}
      {/* -----------------------------------------------9th section start -------------------------------------*/}
      <div className="flex justify-end items-end py-10">
              <div
                onClick={scrollToTop}
                className="list-none "
              >
                <Link to="">
                  <IoArrowUpCircleSharp className="w-16 h-16 " />
                </Link>
              </div>
            </div>
      {/* -----------------------------------------------9th section finish -------------------------------------*/}
    </div>
  );
};

export default Responsibiliti;
