import React from "react";
import ba1 from "../../../src/assets/ba1.png";
import site from "../../../src/assets/site.jpg";
import look from "../../../src/assets/look.jpg";
import { AiTwotoneSound } from "react-icons/ai";
import setting from "../../../src/assets/setting.gif";
import { SettingOutlined } from "@ant-design/icons";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Communication = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <div className="pt-6">
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
                    <img className="rounded-xl " src={setting} alt="" />{" "}
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
            <div className="flex justify-start items-start space-x-4 my-8">
              <div className="w-24 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                All
              </div>
              <div className="w-36 h-12 rounded-full bg-black text-white flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-black">
                Btapp Tech
              </div>
              {/* <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                Tech Platform
              </div> */}
              <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                Tech Service
              </div>
              {/* <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                Tech Contents
              </div> */}
              <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                Tech Event
              </div>
              {/* <div className="w-36 h-12 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                if(Btaap)
              </div> */}
            </div>
            {/* card start */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center p-4">
              {/* Card 1 */}
              <div className="max-w-full mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-[#97ce9b]">
                      <SettingOutlined
                        className="text-[#1e40af] "
                        style={{ fontSize: "24px", height: "24px", width: "24px" }}
                      />
                    </div>
                    <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                      Btaap Tech
                    </span>
      
                    <span className="text-xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-semibold mt-2 py-10"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
                  >
                    Introducing Btaap's Al <br />
                    model, Kanana Model <br />
                    Family
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
                    <span>#AI</span>
                    <span>#ifBtaap</span>
                    <span>#kanan</span>
                    <span>#AllRecomend</span>
                  </div>
                </div>
                <img
                  src={ba1}
                  alt="Btaap Business Best Awards"
                  className="w-full h-56 object-cover"
                />
              </div>
      
              {/* Card 2 */}
              <div className="max-w-full mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-[#97ce9b]">
                      <SettingOutlined
                        className="text-[#1e40af] "
                        style={{ fontSize: "24px", height: "24px", width: "24px" }}
                      />
                    </div>
                    <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                      Btaap Tech
                    </span>
      
                    <span className="text-xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-semibold mt-2 pt-10"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
                  >
                    Accessibility of Btaap <br /> Corporate Sites
                  </h2>
                  <div className="mt-24 flex flex-wrap gap-2 text-sm text-gray-600">
                    <span>#WebAccessibility</span>
                  </div>
                </div>
                <img
                  src={site}
                  alt="Kakao Together Value"
                  className="w-full h-56 object-cover"
                />
              </div>
      
              {/* Card 3 */}
              <div className="max-w-full mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-[#97ce9b]">
                      <SettingOutlined
                        className="text-[#1e40af] "
                        style={{ fontSize: "24px", height: "24px", width: "24px" }}
                      />
                    </div>
                    <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                      Btaap Tech
                    </span>
      
                    <span className="text-xl px-2">⫶</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-semibold mt-2 pt-10"
                    style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
                  >
                    Lowering the barrier to <br />
                    the future
                  </h2>
                  <div className="mt-24 flex flex-wrap gap-2 text-sm text-gray-600">
                    <span>#developer</span>
                    <span>#engineering</span>
                    <span>#tech</span>
                  </div>
                </div>
                <img
                  src={look}
                  alt="Kakao Mutual Growth"
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
  )
}

export default Communication
