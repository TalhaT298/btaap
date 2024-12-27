import React from "react";
import promise from "../../../../src/assets/promise.gif";
import sc from "../../../../src/assets/sc.gif";
import tree from "../../../../src/assets/tree.gif";
import coin from "../../../../src/assets/coin.gif";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Responsibility = () => {
  return (
    <div className="py-8">
      {/* title */}
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-16 flex items-center justify-center rounded-lg">
            <img className="rounded-xl" src={promise} alt="" />
          </div>
          <span
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black px-4 sm:px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            Promise and Responsibility
          </span>
        </div>
      </div>
      {/* title end */}

      {/* Images grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <img
            src={sc}
            alt="Image 1"
            className="w-full h-auto rounded-3xl"
          />
          <IoArrowForwardCircleSharp className="absolute top-[92%] right-4 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 text-[#0cc0df]" />
        </div>
        <div className="relative">
          <img
            src={tree}
            alt="Image 2"
            className="w-full h-auto rounded-3xl"
          />
          <IoArrowForwardCircleSharp className="absolute top-[92%] right-4 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 text-[#0f7544]" />
        </div>
        <div className="relative">
          <img
            src={coin}
            alt="Image 3"
            className="w-full h-auto rounded-3xl"
          />
          <IoArrowForwardCircleSharp className="absolute top-[92%] right-4 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 text-[#5a461b]" />
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
