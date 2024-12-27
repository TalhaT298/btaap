import React from "react";
import robot from "../../../../src/assets/robot.gif";
import mail12 from "../../../../src/assets/mail12.gif";
import cofe from "../../../../src/assets/cofee.png";
import map3 from "../../../../src/assets/map.webp";
import robot2 from "../../../../src/assets/robot2.webp";
import { FaArrowCircleRight } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
const Help = () => {
  return (
    <div className="pt-8">
      {/* title add */}
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center space-x-2">
          <div
            className="w-16 h-16
                                   flex items-center justify-center rounded-lg "
          >
            <div className=" ">
              {" "}
              <img className="rounded-xl " src={robot} alt="" />{" "}
            </div>
          </div>
          <span
            className="text-5xl font-extrabold text-black px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            How may I help you?
          </span>
        </div>
      </div>
      {/* title end */}

      {/* section add  */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
          {/* Card 1 */}
          <div>
            <div className="flex flex-col space-y-6 md:space-y-9">
              {/* Card 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between p-4 h-40 bg-gray-100 shadow-md rounded-2xl">
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-semibold text-black"
                    style={{
                      fontFamily: "Ubuntu, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Btaap Customer Cen
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 flex items-center pt-4">
                    Shortcut
                    <span className="text-black">
                      <FaArrowCircleRight className="w-6 h-6 ml-2 sm:ml-4" />
                    </span>
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-yellow-400 flex items-center justify-center mt-4 sm:mt-0">
                  <img src={mail12} alt="icon" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col md:flex-row items-center justify-between p-4 h-40 bg-gray-100 rounded-2xl shadow-md">
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-semibold text-black"
                    style={{
                      fontFamily: "Ubuntu, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Next Customer Cent
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 flex items-center pt-4">
                    Shortcut
                    <span className="text-black">
                      <FaArrowCircleRight className="w-6 h-6 ml-2 sm:ml-4" />
                    </span>
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mt-4 sm:mt-0">
                  <img src={cofe} alt="icon" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between p-4 h-40 bg-gray-100 rounded-2xl shadow-md">
                <div>
                  <h2
                    className="text-2xl sm:text-3xl font-semibold text-black"
                    style={{
                      fontFamily: "Ubuntu, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Commerce Customer Center
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 flex items-center pt-4">
                    Shortcut
                    <span className="text-black">
                      <FaArrowCircleRight className="w-6 h-6 ml-2 sm:ml-4" />
                    </span>
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-20 sm:h-16 rounded-full bg-yellow-400 flex items-center justify-center mt-4 sm:mt-0">
                  <div className="relative">
                    <div className="w-6 h-6 bg-white border border-black rounded"></div>
                    <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 text-red-500">
                      ❤️
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-full sm:max-w-md h-auto sm:h-[550px] mx-auto bg-[#97ce9b] rounded-2xl shadow-md overflow-hidden">
            <div className="p-4">
              <h2
                className="text-3xl sm:text-4xl text-white font-semibold mt-2 pt-6 sm:pt-10"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
              >
                Subscribe to various news from Btaap!
              </h2>
              <div className="mt-6 sm:mt-12 text-lg sm:text-xl text-white">
                <p>Go to official social media</p>
              </div>
              <div className="mt-6 sm:mt-12 flex flex-wrap gap-4 justify-center items-center">
                <IoLogoInstagram className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                <FaLinkedinIn className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                <FaDiscord className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                <FaYoutube className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <img
              src={robot2}
              alt="Kakao Together Value"
              className="w-full h-48 sm:h-56 object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="max-w-full sm:max-w-md h-auto sm:h-[550px] bg-[#5a461b] rounded-2xl shadow-md overflow-hidden">
            <div className="p-4 pb-0">
              <h2
                className="text-3xl sm:text-4xl text-white font-semibold mt-2 pt-6 sm:pt-10"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
              >
                If you are interested in everything in the world, you are
                already a member of the Btaap crew.
              </h2>
              <div className="mt-6 sm:mt-[56px] flex flex-wrap gap-2 text-lg sm:text-xl text-white">
                Recruitment news{" "}
                <AiOutlineCheckCircle className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
            </div>
            <img
              src={map3}
              alt=""
              className="w-full h-48 sm:h-56 object-cover"
            />
          </div>
        </div>
      </div>

      {/* last section */}
      <div className="flex justify-center items-center py-10">
        <button
          className="btn h-10 bg-gray-100 rounded-3xl text-2xl"
          style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
        >
          &nbsp;&nbsp;View all Btaap news
          <FaArrowCircleRight />
          &nbsp;&nbsp;
        </button>
      </div>
    </div>
  );
};

export default Help;
