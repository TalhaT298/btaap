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
      {/* 3rd section start */}
      <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* <!-- Card 1 --> */}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
              Used 2X more renewable energy than 2022
            </h3>
            <p class="text-gray-700 text-sm lg:text-base mb-4" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
              Wind power in Jeju
              <br />
              Solar power in Pangyo
            </p>
            <div class="flex justify-center">
              <img
                src="path-to-wind-solar-icon.svg"
                alt="Renewable energy"
                class="h-12 w-12 lg:h-16 lg:w-16"
              />
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
              Established the Compliance and Trust Committee
            </h3>
            <p class="text-gray-700 text-sm lg:text-base mb-4" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
              A system for reform, to regain users' trust
            </p>
            <div class="flex justify-center">
              <img
                src="path-to-scale-icon.svg"
                alt="Compliance"
                class="h-12 w-12 lg:h-16 lg:w-16"
              />
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl lg:text-2xl font-bold mb-4" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
              Dangol Market receives the Presidential Award
            </h3>
            <p class="text-gray-700 text-sm lg:text-base mb-4" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
              Used services to digitize traditional markets
            </p>
            <div class="flex justify-center">
              <img
                src="path-to-market-icon.svg"
                alt="Dangol Market"
                class="h-12 w-12 lg:h-16 lg:w-16"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 3rd section finish */}
    </div>
  );
};

export default Responsibiliti;
