import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
const Service = () => {
  return (
    <React.Fragment>
      <Link to="/service"></Link>
      {/* 1st section  start*/}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link<MdDownloadForOffline /></a>
            </li>
          </ul>
        </div>
      </div>
      {/* 1st section  end*/}
      {/* 2nd section  start*/}
      <div className="flex justify-center items-center min-h-96">
        {/* Main Container */}
        <div className="text-center space-y-4 p-4">
          {/* News Date */}
          <p
            className="text-gray-500 text-sm font-medium"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            Communication
          </p>

          {/* Main Heading */}
          <h1
            className="text-5xl font-bold leading-tight tracking-tight text-black"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            Btaap Records, where people and the
            <br />
            world come to get connected
            <br />
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
      {/* 2nd section  end*/}
    </React.Fragment>
  );
};

export default Service;
