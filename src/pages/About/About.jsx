import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import abou1 from "../../../src/assets/about1.webp";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-96">
        {/* Main Container */}
        <div className="text-center space-y-4 p-4">
          {/* News Date */}
          <p
            className="text-gray-500 text-sm font-medium"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            News | August 08, 2024
          </p>

          {/* Main Heading */}
          <h1
            className="text-5xl font-bold leading-tight tracking-tight text-black"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            Btaap Records <span className="line-through">৳</span>2.0049C
            <br />
            Consolidated Sales and <span className="line-through">৳</span>134B
            <br />
            Operating Profit in Q2
          </h1>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <FaFacebook />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <IoLogoInstagram />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <FaLinkedinIn />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <FaDiscord />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      {/* another section */}
      <div>
        <div className="relative h-screen overflow-hidden">
          {/* Scrolling Image */}
          <div
            className="absolute inset-0 h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
            style={{
              msOverflowStyle: "auto", // Ensure scrollbars are visible in Internet Explorer
              scrollbarWidth: "thin", // Make the scrollbar thinner in Firefox
            }}
          >
            <img src={abou1} alt="Scrolling Image" className="w-full" />
          </div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-white text-7xl font-bold px-4 py-2" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}>Btaap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
