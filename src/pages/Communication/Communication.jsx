import React from "react";
import abb from "../../../src/assets/aboutbanner.webp";
import story from "../../../src/assets/story.webp";
import site from "../../../src/assets/site.jpg";
import look from "../../../src/assets/look.jpg";
import voice from "../../../src/assets/voice.jpg";
import appt from "../../../src/assets/app.jpg";
import clock from "../../../src/assets/clock.jpg";
import lan from "../../../src/assets/lan.png";
import { AiTwotoneSound } from "react-icons/ai";
import bulbc from "../../../src/assets/bulbc.png";
import { ArrowDownOutlined } from "@ant-design/icons";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BsFillLightbulbFill } from "react-icons/bs";
const Communication = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <Link to="/communication"></Link>

      <Helmet>
        <title>Btaap |Communication</title>
      </Helmet>
      {/* title add */}
      <div className="flex items-center justify-between py-6 pl-6">
        <div className="flex items-center space-x-2">
          <div
            className="w-16 h-16
                                   flex items-center justify-center rounded-lg "
          >
            <div className=" ">
              {" "}
              <img className="rounded-xl " src={bulbc} alt="" />{" "}
            </div>
          </div>
          <span
            className="text-5xl font-extrabold text-black px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            Service
          </span>
        </div>
      </div>
      {/* title end */}
      <div className="py-4 pl-4">
        <p
          className="text-3xl"
          style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
        >
          Btaap Creates a better world
        </p>
      </div>
      {/* hash use */}
      <div className="flex justify-start items-start space-x-4 my-12 pl-5">
        <div className="w-24 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          All
        </div>
        <div className="w-36 h-12 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-black">
          Education
        </div>
        <Link to="/medical">
          <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
            Medical
          </div>
        </Link>
        <Link to="/business">
          <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
            Business
          </div>
        </Link>
        <Link to="/transport">
          <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          OneRoute
          </div>
        </Link>
        <Link to="/entertainment">
          <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
            Entertainment
          </div>
        </Link>
        {/* <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          Regional
        </div> */}
      </div>
      {/* card start 1*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center p-4 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
          <div className="p-4 flex-grow flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <BsFillLightbulbFill
                  className="text-[#97ce9b]"
                  style={{ fontSize: "24px", height: "24px", width: "24px" }}
                />
                <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                elibrary
                </span>
              </div>
              <span className="text-2xl px-2">⫶</span>
            </div>
            <h2
              className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              E-Library Discover the Power of Reading
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
              <div className="navbar-end">
                <a className="w-60 h-12 rounded-full bg-[#97ce9b] text-white flex items-center justify-center cursor-pointer">
                  Btaap Download
                  <ArrowDownOutlined className="pl-2" />
                </a>
              </div>
            </div>
          </div>
          <img
            src={abb}
            alt="Btaap Business Best Awards"
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
          <div className="p-4 flex-grow flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <BsFillLightbulbFill
                  className="text-[#97ce9b]"
                  style={{ fontSize: "24px", height: "24px", width: "24px" }}
                />
                <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                mentorship
                </span>
              </div>
              <span className="text-2xl px-2">⫶</span>
            </div>
            <h2
              className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Mentorship-In learning,you will teach,and in teaching you will learn
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
              <span>#mentorship</span>
              <span>#contents</span>
              <span>#btaapstory...</span>
            </div>
          </div>
          <img
            src={story}
            alt="Kakao Together Value"
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
          <div className="p-4 flex-grow flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <BsFillLightbulbFill
                  className="text-[#97ce9b]"
                  style={{ fontSize: "24px", height: "24px", width: "24px" }}
                />
                <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                community
                </span>
              </div>
              <span className="text-2xl px-2">⫶</span>
            </div>
            <h2
              className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Community-Learn and grow as knowledge flows throughout Bangladesh
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
              <span>#community</span>
              <span>#voiceroom</span>
            </div>
          </div>
          <img
            src={voice}
            alt="Kakao Mutual Growth"
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
      {/* card end */}
      {/* ====================================================card start 2=========================================*/}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center p-4 max-w-7xl mx-auto">
        
        <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
          <div className="p-4 flex-grow flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <BsFillLightbulbFill
                  className="text-[#97ce9b]"
                  style={{ fontSize: "24px", height: "24px", width: "24px" }}
                />
                <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                  Communication
                </span>
              </div>
              <span className="text-2xl px-2">⫶</span>
            </div>
            <h2
              className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Smarter schedule <br />
              management with Talk <br />
              Calendar
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
              <span>#calendar</span>
              <span>#invite friends</span>
            </div>
          </div>
          <img
            src={clock}
            alt="Btaap Business Best Awards"
            className="w-full h-56 object-cover"
          />
        </div>

        
        <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
          <div className="p-4 flex-grow flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <BsFillLightbulbFill
                  className="text-[#97ce9b]"
                  style={{ fontSize: "24px", height: "24px", width: "24px" }}
                />
                <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                  Communication
                </span>
              </div>
              <span className="text-2xl px-2">⫶</span>
            </div>
            <h2
              className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Our new language,
              <br />
              emoticons!
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
              <span>#emoticonplus</span>
              <span>#emoticons</span>
            </div>
          </div>
          <img
            src={lan}
            alt="Btaap Together Value"
            className="w-full h-56 object-cover"
          />
        </div>

         
        <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
          <div className="p-4 flex-grow flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <BsFillLightbulbFill
                  className="text-[#97ce9b]"
                  style={{ fontSize: "24px", height: "24px", width: "24px" }}
                />
                <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                  Communication
                </span>
              </div>
              <span className="text-2xl px-2">⫶</span>
            </div>
            <h2
              className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Created for my needs,
              <br />
              the Daum app <br />
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
              <span>#contents</span>
              <span>#daumapp</span>
              <span>#portal</span>
            </div>
          </div>
          <img
            src={appt}
            alt="Btaap Mutual Growth"
            className="w-full h-56 object-cover"
          />
        </div>
      </div> */}
      {/* card end */}
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

export default Communication;
