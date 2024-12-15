import React from "react";
import calender from "../../../../src/assets/calender.gif";
import { AiTwotoneSound } from "react-icons/ai";
const News = () => {
  return (
    <div>
      {/* title add */}
      <div className="flex items-center justify-between py-4">
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
            <h2 className="text-4xl font-semibold mt-2 py-10">
              Btaap to hold '2024 Kakao Business Best Awards' ceremony
            </h2>
            <div className="mt-24 flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#Symbiosis</span>
              <span>#Btaap</span>
              <span>#BtaapBusiness</span>
            </div>
          </div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
            <h2 className="text-4xl font-semibold mt-2 pt-10">
              Kakao Together Value, Various Sharing Activities to Meet the End
              of the Year
            </h2>
            <div className="mt-24 flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#ESG</span>
              <span>#TogetherValues</span>
              <span>#Btaap</span>
            </div>
          </div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
            <h2 className="text-4xl font-semibold mt-2 pt-10">
              Kakao Wins '2024 Korea Mutual Growth Award' Selected by the Mutual
              Growth Committee
            </h2>
            <div className="mt-[56px] flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#Joint Growth Target</span>
              <span>#Digital Transformation</span>
            </div>
          </div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Kakao Mutual Growth"
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
