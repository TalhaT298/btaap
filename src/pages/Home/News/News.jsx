import React from "react";
import calender from "../../../../src/assets/calender.gif";
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
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div class="p-4">
            <div class="flex items-center space-x-2">
              <div class="flex items-center text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.16c.969 0 1.372 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.371-2.448a1 1 0 00-1.176 0l-3.371 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.363-1.118L2.025 9.384c-.784-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              </div>
              <span class="text-sm font-semibold bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                Press release
              </span>
              <span class="text-sm text-gray-500">2024.12.13</span>
            </div>

            <h2 class="text-lg font-bold mt-2">
              Kakao to hold '2024 Kakao Business Best Awards' ceremony
            </h2>

            <div class="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#Symbiosis</span>
              <span>#Kakao</span>
              <span>#KakaoBusiness</span>
            </div>
          </div>

          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Kakao Business Best Awards"
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
