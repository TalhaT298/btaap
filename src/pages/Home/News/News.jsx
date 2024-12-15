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
      <div className="flex flex-wrap justify-center gap-4">
        <div class="max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
          <div class="p-4">
            <div class="flex items-center space-x-2">
              <div class="flex items-center text-[#97ce9b]">
              <AiTwotoneSound className="text-[#97ce9b] w-8 h-8"/>
              </div>
              <span class="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                Press release
              </span>
              <span class="text-sm text-gray-500">2024.12.13</span>
              <span className="text-xl px-2">⫶</span>
            </div>

            <h2 class="text-4xl font-semibold mt-2 py-10">
              Btaap to hold '2024 Kakao Business Best Awards' ceremony
            </h2>

            <div class="mt-12 flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#Symbiosis</span>
              <span>#Btaap</span>
              <span>#BtaapBusiness</span>
            </div>
          </div>

          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Btaap Business Best Awards"
            class="w-full h-56 object-cover"
          />
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default News;
