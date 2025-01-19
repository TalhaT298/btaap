import React from "react";
import chil from "../../../src/assets/children.jpg";
import teli from "../../../src/assets/television.jpg";
import reda from "../../../src/assets/reading.jpg";
import game1 from "../../../src/assets/game1.jpg";
import promotional from "../../../src/assets/promotional.jpg";
import game2 from "../../../src/assets/game2.jpg";
import women from "../../../src/assets/women.jpg";
import lan from "../../../src/assets/lan.png";
import { AiTwotoneSound } from "react-icons/ai";
import bulbc from "../../../src/assets/bulbc.png";
import { ArrowDownOutlined } from "@ant-design/icons";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BsFillLightbulbFill } from "react-icons/bs";

const Entertainment = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Link to="/entertainment"></Link>
      <Helmet>
        <title>Btaap | Entertainment</title>
      </Helmet>
      
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
              <Link to="/communication">
              <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              Education
              </div>
              </Link>
             
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
              <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                Transport
              </div>
              <div className="w-36 h-12 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-black">
              Entertainment
              </div>
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
                        Communication
                      </span>
                    </div>
                    <span className="text-2xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
                  >
                    Karoke, sign with <br />
                    your friends..
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
                  src={chil}
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
                        Communication
                      </span>
                    </div>
                    <span className="text-2xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
                  >
                    TV & Music, live News  <br />
                    and Entertainment
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
                    <span>#products</span>
                    <span>#trending</span>
                    <span>#btaapsproduc...</span>
                  </div>
                </div>
                <img
                  src={teli}
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
                        Communication
                      </span>
                    </div>
                    <span className="text-2xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
                  >
                   Comics & Novels, <br />
                   amazing creators
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
                    <span>#marketplace</span>
                    <span>#brand</span>
                  </div>
                </div>
                <img
                  src={reda}
                  alt="Kakao Mutual Growth"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
            {/* card end */}
            {/* ====================================================card start 2=========================================*/}
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
                        Communication
                      </span>
                    </div>
                    <span className="text-2xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
                  >
                    Games play with your  <br />
                    community 
                    
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
                    <span>#community</span>
                    <span>#groups</span>
                  </div>
                </div>
                <img
                  src={game1}
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
                        Communication
                      </span>
                    </div>
                    <span className="text-2xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
                  >
                    Upcoming games &,
                    <br />
                    musics
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
                    <span>#emoticonplus</span>
                    <span>#emoticons</span>
                  </div>
                </div>
                <img
                  src={game2}
                  alt="Btaap Together Value"
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
                        Communication
                      </span>
                    </div>
                    <span className="text-2xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-2xl font-semibold mt-4 flex-grow"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
                  >
                    Podcasts, voice  
                    <br />
                    of Bangladesh
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-xl text-gray-600">
                    <span>#promotional</span>
                    <span>#videos</span>
                    <span>#advertisement</span>
                  </div>
                </div>
                <img
                  src={women}
                  alt="Btaap Mutual Growth"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
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

export default Entertainment;
