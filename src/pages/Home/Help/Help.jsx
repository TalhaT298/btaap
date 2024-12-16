import React from "react";
import robot from "../../../../src/assets/robot.gif";
import ba1 from "../../../../src/assets/ba1.png";
import ba2 from "../../../../src/assets/ba2.png";
import map3 from "../../../../src/assets/map.webp";
import robot2 from "../../../../src/assets/robot2.webp";
import { AiTwotoneSound } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Help = () => {
  return (
    <div className="py-8">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center p-4">
              {/* Card 1 */}
              <div className="max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-[#97ce9b]">
                      <AiTwotoneSound className="text-[#97ce9b] w-8 h-8" />
                    </div>
                    <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                      Press release
                    </span>
                    <span className="text-sm text-gray-500">2024.12.13</span>
                    <span className="text-xl px-2">⫶</span>
                  </div>
                  <h2 className="text-4xl font-semibold mt-2 py-10" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}>
                    Btaap to hold '2024 Kakao Business Best Awards' ceremony
                  </h2>
                  <div className="mt-24 flex flex-wrap gap-2 text-sm text-gray-600">
                    <span>#Symbiosis</span>
                    <span>#Btaap</span>
                    <span>#BtaapBusiness</span>
                  </div>
                </div>
                <img
                  src={ba1}
                  alt="Btaap Business Best Awards"
                  className="w-full h-56 object-cover"
                />
              </div>
      
              {/* Card 2 */}
              <div className="max-w-md mx-auto bg-[#97ce9b] rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  {/* <div className="flex items-center space-x-2">
                    <div className="flex items-center text-[#97ce9b]">
                      <AiTwotoneSound className="text-[#97ce9b] w-8 h-8" />
                    </div>
                    <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                      Press release
                    </span>
                    <span className="text-sm text-gray-500">2024.12.12</span>
                    <span className="text-xl px-2">⫶</span>
                  </div> */}
                  <h2 className="text-4xl text-white font-semibold mt-2 pt-10" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}>
                  Subscribe to various news from Btaap!
                  </h2>
                  <div className="mt-12 flex flex-wrap gap-2 text-xl text-white">
                    {/* <span>#ESG</span>
                    <span>#TogetherValues</span>
                    <span>#Btaap</span> */}
                    <p>Go to official social media</p>
                   
                  </div>
                  <div className="mt-12 flex flex-wrap gap-2 justify-center items-center">
                    {/* <span>#ESG</span>
                    <span>#TogetherValues</span>
                    <span>#Btaap</span> */}
                   
                    <IoLogoInstagram className=" w-10 h-10 text-sm text-white"/>
                    <FaFacebook className=" w-10 h-10 text-sm text-white"/>
                    <FaLinkedinIn className=" w-10 h-10 text-sm text-white"/>
                    <FaDiscord className=" w-10 h-10 text-sm text-white"/>
                    <FaYoutube className=" w-10 h-10 text-sm text-white"/>
                  </div>
                </div>
                <img
                  src={robot2}
                  alt="Kakao Together Value"
                  className="w-full h-56 object-cover"
                />
              </div>
      
              {/* Card 3 */}
              <div className="max-w-md mx-auto bg-[#5a461b] rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  {/* <div className="flex items-center space-x-2">
                    <div className="flex items-center text-[#97ce9b]">
                      <AiTwotoneSound className="text-[#97ce9b] w-8 h-8" />
                    </div>
                    <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                      Press release
                    </span>
                    <span className="text-sm text-gray-500">2024.12.11</span>
                    <span className="text-xl px-2">⫶</span>
                  </div> */}
                  <h2 className="text-4xl text-white font-semibold mt-2 pt-10" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}>
                  If you are interested in everything in the world,
                  you are already a member of the Btaap crew.
                  </h2>
                  <div className="mt-[56px] flex flex-wrap gap-2 text-xl text-white">
                  Recruitment news <AiOutlineCheckCircle className="w-7 h-7"/>
                  </div>
                </div>
                <img
                  src={map3}
                  alt=""
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
    </div>
  );
};

export default Help;
