import React from "react";
import bulb from "../../../../src/assets/bulb.png";
const News = () => {
  return (
    <div>
      {/* title add */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <div
            className="w-16 h-12
                       flex items-center justify-center rounded-lg "
          >
            <div className=" ">
              {" "}
              <img className="rounded-xl " src={bulb} alt="" />{" "}
            </div>
          </div>
          <span
            className="text-5xl font-extrabold text-black px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            Btaap News
          </span>
        </div>
      </div>
      {/* title end */}
    </div>
  );
};

export default News;
