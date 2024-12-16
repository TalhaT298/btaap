import React from "react";
import calender from "../../../../src/assets/calender.gif";
import ba1 from "../../../../src/assets/ba1.png";
import ba2 from "../../../../src/assets/ba2.png";
import ba3 from "../../../../src/assets/ba3.png";
import { AiTwotoneSound } from "react-icons/ai";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
const News = () => {
  return (
    <div className="py-10">
      {/* title add */}
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center space-x-2">
          <div
            className="w-16 h-16
                       flex items-center justify-center rounded-lg "
          >
            <div className=" ">
              {" "}
              <img className="rounded-xl " src={calender} alt="" />{" "}
            </div>
          </div>
          <span
            className="text-5xl font-extrabold text-black px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            Today's News
          </span>
        </div>
      </div>
      {/* title end */}
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
            <h2
              className="text-4xl font-semibold mt-2 py-10"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
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
        <div className="max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-[#97ce9b]">
                <AiTwotoneSound className="text-[#97ce9b] w-8 h-8" />
              </div>
              <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                Press release
              </span>
              <span className="text-sm text-gray-500">2024.12.12</span>
              <span className="text-xl px-2">⫶</span>
            </div>
            <h2
              className="text-4xl font-semibold mt-2 pt-10"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Btaap Together Value, Various Sharing Activities to Meet the End
              of the Year
            </h2>
            <div className="mt-24 flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#ESG</span>
              <span>#TogetherValues</span>
              <span>#Btaap</span>
            </div>
          </div>
          <img
            src={ba2}
            alt="Kakao Together Value"
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-[#97ce9b]">
                <AiTwotoneSound className="text-[#97ce9b] w-8 h-8" />
              </div>
              <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                Press release
              </span>
              <span className="text-sm text-gray-500">2024.12.11</span>
              <span className="text-xl px-2">⫶</span>
            </div>
            <h2
              className="text-4xl font-semibold mt-2 pt-10"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Btaap Wins '2024 Korea Mutual Growth Award' Selected by the Mutual
              Growth Committee
            </h2>
            <div className="mt-[56px] flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#Joint Growth Target</span>
              <span>#Digital Transformation</span>
            </div>
          </div>
          <img
            src={ba3}
            alt="Kakao Mutual Growth"
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
      {/* last part start */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center p-4">
        {/* Card 1 */}
        <div className=" mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
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
            <h2
              className="text-3xl font-medium mt-2 py-7"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Btaap , Btaap Tech Campus 2nd Graduation Ceremony Held
            </h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-[#97ce9b]">
                <AiTwotoneSound className="text-[#97ce9b] w-8 h-8" />
              </div>
              <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                Press release
              </span>
              <span className="text-sm text-gray-500">2024.12.12</span>
              <span className="text-xl px-2">⫶</span>
            </div>
            <h2
              className="text-3xl font-medium mt-2 pt-7"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Btaap Shopping Tab Reorganization, Strengthening Customized
              Shopping...
            </h2>
          </div>
        </div>

        {/* Card 3 */}
        <div class="bg-gray-100 p-4 rounded-xl shadow-md flex h-36 pt-6">
          <h2
            class="font-medium text-3xl pt-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            Press
            release&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <div class="flex pt-6 px-4">
            <IoArrowForwardCircleSharp className="w-10 h-10" />
            {/* <div class="p-1 rounded-full"><img className="rounded-2xl" src={btap} alt="" /></div>
                    <div class="p-1 rounded-full"><img className="rounded-2xl" src={facebook} alt="" /></div>
                    <div class="p-1 rounded-full"><img className="rounded-2xl" src={insta} alt="" /></div>
                    <div class="p-1 rounded-full"><img className="rounded-2xl" src={plus} alt="" /></div> */}
          </div>
        </div>
        {/* card 4 add */}
        <div class="bg-gray-100 p-4 rounded-xl shadow-md flex h-36 pt-6">
          <h2
            class="font-medium text-3xl pt-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            Media
            Materials&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <div class="flex pt-6 px-4">
            <IoArrowForwardCircleSharp className="w-10 h-10" />
            {/* <div class="p-1 rounded-full"><img className="rounded-2xl" src={btap} alt="" /></div>
                            <div class="p-1 rounded-full"><img className="rounded-2xl" src={facebook} alt="" /></div>
                            <div class="p-1 rounded-full"><img className="rounded-2xl" src={insta} alt="" /></div>
                            <div class="p-1 rounded-full"><img className="rounded-2xl" src={plus} alt="" /></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
