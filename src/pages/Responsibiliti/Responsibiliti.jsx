import React from "react";
import { Link } from "react-router-dom";
import promise from "../../../src/assets/promise.gif";
import eco from "../../../src/assets/ecobanner.webp";
import { ArrowDownOutlined } from "@ant-design/icons";
const Responsibiliti = () => {
  return (
    <div>
      <Link to="/responsibility"></Link>
      {/* 1st section start */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="w-16 h-16 flex items-center justify-center rounded-lg">
            <img className="rounded-xl" src={promise} alt="" />
          </div>
          <span
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black px-4 sm:px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            ESG Reports
          </span>
        </div>

        <div className="navbar-end">
          <a className="w-44 h-12 rounded-full bg-[#97ce9b] text-white flex items-center justify-center cursor-pointer">
            2023 ESG Report
            <ArrowDownOutlined className="pl-2" />
          </a>
        </div>
      </div>
      {/* 1st section finish */}
      {/* 2nd section start */}
      <div className="flex justify-center items-center py-6">
        <img src={eco} alt="" />
      </div>
      {/* 2nd section finish */}
    </div>
  );
};

export default Responsibiliti;
