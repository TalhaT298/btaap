import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import aboutb from "../../../src/assets/aboutbanner.webp";
import slide1 from "../../../src/assets/slide1.png";
import slide2 from "../../../src/assets/slide2.png";
import slide3 from "../../../src/assets/slide3.png";
import slide4 from "../../../src/assets/slide4.png";
import slide5 from "../../../src/assets/slide5.png";
import slide6 from "../../../src/assets/slide6.png";
import slide7 from "../../../src/assets/slide7.png";
import gif1 from "../../../src/assets/gif1.png";
import gif2 from "../../../src/assets/gif2.png";
import gif3 from "../../../src/assets/mailvai.png";
import gif4 from "../../../src/assets/tect.png";
import gif5 from "../../../src/assets/themee.jpg";
import baa1 from "../../../src/assets/ai.jpg";
import baa2 from "../../../src/assets/future.jpg";
import ba3 from "../../../src/assets/ba3.png";
import { AiTwotoneSound } from "react-icons/ai";
import gif6 from "../../../src/assets/walet.jpg";
import gif7 from "../../../src/assets/lab.jpg";
import { MdArrowOutward } from "react-icons/md";
import log from "../../../src/assets/c.png";
import log1 from "../../../src/assets/emotion.png";
import { IoIosLink } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaArrowCircleUp } from "react-icons/fa";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { Carousel } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

const Service = () => {
  // const contentStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '50vh', // Full viewport height
  //   backgroundColor: '#f0f0f0',
  //   textAlign: 'center',

  // };
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
  return (
    <React.Fragment>
      <Link to="/service"></Link>
      {/* 1st section  start*/}
      <div
        className="navbar bg-base-100"
        style={{
          borderBottom: "1px solid #a6a6a6",
          borderTop: "1px solid #a6a6a6",
          position: "sticky",
          top: 0,
          zIndex: 1000, // Ensures it stays above other content
        }}
      >
        <div className="flex-1">
          <a
            className="pl-5 text-xl"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap
          </a>
        </div>
        <div className="flex">
          <ul className=" px-1">
            <li>
              <a className="text-xl flex">
                Download <MdDownloadForOffline className="w-7 h-7" />
              </a>
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
            className="text-gray-500 text-base font-medium"
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
              <IoIosLink />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section  end*/}
      {/* 3rd section start */}
      <div>
        <img src={aboutb} alt="" />
      </div>
      {/* 3rd section end */}
      {/* 4th section start */}
      <div className="py-16">
        <div className="flex justify-center items-center">
          <img className="w-20 h-20 rounded-2xl" src={log} alt="" />
        </div>
        <div className="flex justify-center items-center min-h-96">
          {/* Main Container */}
          <div className="text-center space-y-4 p-4">
            {/* News Date */}

            {/* Main Heading */}
            <h1
              className="text-5xl font-bold leading-tight tracking-tight text-black"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
            >
              Connecting people,
              <br />
              the world and more with Btaap
              <br />
              Leading messenger service
              <br />
              with goals of becoming the world protocol
              <br />
              Enjoy Btaap, anytime, anywhere,
              <br />
              in real-time, for free
            </h1>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-4 mt-4"></div>
          </div>
        </div>
      </div>
      {/* 4th section end */}
      {/* 5th section start */}
      <div className="py-6">
        <div className="flex flex-col justify-center items-center text-center w-2/4 h-full mx-auto">
          <p
            className="mb-2 text-5xl font-bold"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            Free Chats
          </p>
          <p className="text-lg py-4">
            Btaap is free of charge with internet connection, wherever you are
            in the world. Engage in lively chat with friends with Btaap's 1:1
            and group chats. Send and receive chat and multimedia messages such
            as photos, videos, and more.
          </p>
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="w-4/6">
            <Carousel autoplay>
              <div>
                <h3>
                  <img src={slide1} alt="" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={slide2} alt="" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={slide3} alt="" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={slide4} alt="" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={slide5} alt="" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={slide6} alt="" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src={slide7} alt="" />
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      {/* 5th section end */}
      {/* 6th section start */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pt-8 md:pt-16 px-6 md:pl-44 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold py-4"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            PC Version
          </h1>
          <p className="pt-2 text-sm md:text-base">
            Use Btaap on your personal computer.
            <br />
            Btaap for PC offers chat and other
            <br />
            useful features.
            <br />
            Available on Windows and macOS.
          </p>
          <div className="py-4">
            <button
              className="btn h-auto bg-gray-100 rounded-3xl text-sm px-4 py-2 w-full md:w-auto flex items-center justify-center gap-2"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              For Windows 10 and later
              <MdArrowOutward />
            </button>
          </div>
          <div>
            <button
              className="btn h-auto bg-gray-100 rounded-3xl text-sm px-4 py-2 w-full md:w-auto flex items-center justify-center gap-2"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              For Windows 7, 8, 8.1
              <MdArrowOutward />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={gif1}
            alt="PC Version"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      {/* 6th section end */}
      {/* 7th section start */}
      <div className="flex flex-col md:flex-row py-12 md:py-24">
        <div className="w-full md:w-1/2 pt-8 md:pt-32 px-6 md:pl-44 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold py-4"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Emoticons
          </h1>
          <p className="pt-2 text-sm md:text-base">
            Sometimes it’s difficult to express your
            <br />
            feelings with words alone.
            <br />
            Emoticons (emojis) can help express
            <br />
            yourself to the fullest! Share your
            <br />
            thoughts and emotions more accurately
            <br />
            with emoticons.
          </p>
          <div className="pt-6 md:pt-10">
            <button
              className="btn h-auto bg-gray-100 rounded-3xl text-sm px-4 py-2 w-full md:w-auto flex items-center justify-center gap-2"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Go to the service
              <MdArrowOutward />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={log1}
            alt="Emoticons"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      {/* 7th section end */}
      {/* 8th section start */}
      <div className="flex flex-col md:flex-row py-12 md:py-32">
        <div className="w-full md:w-1/2 pt-8 md:pt-40 px-6 md:pl-44 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold py-4"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap Shopping
          </h1>
          <p className="pt-2 text-sm md:text-base">
            Shop today through BtaapTalk quickly and
            <br />
            easily look through products offered on
            <br />
            Btaap's fourth tab, Kakao Shopping.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={gif2}
            alt="Btaap Shopping"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      {/* 8th section end */}
      {/* 9th section start */}
      <div className="flex flex-col md:flex-row py-12 md:py-24">
        <div className="w-full md:w-1/2 pt-8 md:pt-32 px-6 md:pl-44 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold py-4"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap Channel
          </h1>
          <p className="pt-2 text-sm md:text-base">
            Business platform anyone can create for
            <br />
            free.
            <br />
            Showcase your products or services in the
            <br />
            Btaap Showcase your products or services in the
            <br />
            Btaap.
          </p>
          <div className="pt-6 md:pt-10">
            <button
              className="btn h-auto bg-gray-100 rounded-3xl text-sm px-4 py-2 w-full md:w-auto flex items-center justify-center gap-2"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Go to the service
              <MdArrowOutward />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={gif4}
            alt="Btaap Channel"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      {/* 9th section end */}
      {/* 10th section start */}
      <div className="flex flex-col md:flex-row py-12 md:py-24">
        <div className="w-full md:w-1/2 pt-8 md:pt-32 px-6 md:pl-44 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold py-4"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap Mail
          </h1>
          <p className="pt-2 text-sm md:text-base">
            Btaap's all you need!
            <br />
            You can also access email from
            <br />
            Btaap. Exchange emails more
            <br />
            conveniently with Btaap Mail, where you
            <br />
            can get email notifications and have Jordy
            <br />
            help you with simple replies.
          </p>
          <div className="pt-6 md:pt-10">
            <button
              className="btn h-auto bg-gray-100 rounded-3xl text-sm px-4 py-2 w-full md:w-auto flex items-center justify-center gap-2"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Go to the service
              <MdArrowOutward />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={gif3}
            alt="Btaap Mail"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      {/* 10th section end */}
      {/* 11th section start */}
      <div className="flex flex-col md:flex-row py-12 md:py-32">
        <div className="w-full md:w-1/2 pt-8 md:pt-40 px-6 md:pl-44 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold py-4"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Theme
          </h1>
          <p className="pt-2 text-sm md:text-base">
            There are ways to spruce up your
            <br />
            Btaap, which you use daily. Include your
            <br />
            favorite photo and characters to create a
            <br />
            customized theme and share it with
            <br />
            friends.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={gif5}
            alt="Theme"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      {/* 11th section end */}
      {/* 12th section start */}
      <div className="flex flex-col md:flex-row py-12 md:py-20">
        <div className="w-full md:w-1/2 pt-8 md:pt-40 px-6 md:pl-44 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold py-4"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Wallet
          </h1>
          <p className="pt-2 text-sm md:text-base">
            Btaap Wallet, Your Safe Haven for
            <br />
            Valuable Assets!
            <br />
            Experience seamless online and offline
            <br />
            authentication while managing your
            <br />
            financial assets, digital documents, and
            <br />
            bills effortlessly, all conveniently stored in
            <br />
            your wallet.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={gif6}
            alt="Wallet"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      {/* 12th section end */}
      {/* 13th section start */}
      <div className="flex flex-col md:flex-row py-12 md:py-20">
        <div className="w-full md:w-1/2 pt-8 md:pt-40 px-6 md:pl-44 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold py-4"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap Lab
          </h1>
          <p className="pt-2 text-sm md:text-base">
            New features are tested by users in the
            <br />
            Lab before it is officially added to
            <br />
            Btaap.
            <br />
            The Kakao Team continues to strive to
            <br />
            provide only the best services.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={gif7}
            alt="Btaap Lab"
            className="w-full max-w-md md:max-w-none"
          />
        </div>
      </div>

      {/* 13th section end */}
      {/* 14th section start */}
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
          <IoIosLink />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <div className="w-24 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          #btaaptalk
        </div>
        <div className="w-16 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          #life
        </div>
        <div className="w-28 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          #messenger
        </div>
        <div className="w-24 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          #platform
        </div>
      </div>
      {/* 14th section end */}
      {/* 15th section start */}
      <div className="pt-10 pb-6">
        <div className="py-16 bg-gray-100">
          <div className="flex justify-center items-center">
            <img className="w-20 h-20 rounded-2xl" src={log} alt="" />
          </div>
          <div className="flex justify-center items-center min-h-60">
            {/* Main Container */}
            <div className="text-center space-y-4 p-4">
              {/* News Date */}

              {/* Main Heading */}
              <h1
                className="text-5xl font-bold leading-tight tracking-tight text-black"
                style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
              >
                Btaap, where people and the world come
                <br />
                to get connected
                <br />
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center py-10">
            <button
              className="btn h-10 bg-black text-white hover:bg-white hover:text-black rounded-3xl text-lg"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
            >
              &nbsp;&nbsp;Service Download
              <MdDownloadForOffline />
              &nbsp;&nbsp;
            </button>
          </div>
        </div>
      </div>
      {/* 15th section end */}
      {/* 16th section start */}
      <div className="py-1">
        <div className="flex justify-center items-center py-10">
          <button
            className="btn h-10 bg-gray-100 text-black hover:bg-black hover:text-gray-100 rounded-3xl text-lg"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            &nbsp;&nbsp;list view &nbsp;&nbsp;
          </button>
        </div>
      </div>
      {/* 16th section end */}
      {/* 17th section start*/}
      <div
        className="navbar bg-base-100"
        style={{
          borderTop: "1px solid #a6a6a6",
          position: "sticky",
          top: 0,
          zIndex: 1000, // Ensures it stays above other content
        }}
      ></div>
      {/* title add */}
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center space-x-2">
          <span
            className="text-4xl font-extrabold text-black px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            Recommended Contents
          </span>
        </div>
      </div>
      {/* title end */}
      {/* card part */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center p-4">
        {/* Card 1 */}
        <div className="max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-[#1e40af]">
                <FaFlag className="text-[#1e40af] w-8 h-8" />
              </div>
              <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                Tech Ethics
              </span>
              <span className="text-sm text-gray-500">2024.12.13</span>
              <span className="text-xl px-2">⫶</span>
            </div>
            <h2
              className="text-4xl font-semibold mt-2 py-10"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Discover News Tastes With "AI Gift Explorer"
            </h2>
            <div className="mt-24 flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#Btaaptalka</span>
              <span>#GiftSErvice</span>
              <span>#AllRecomend</span>
            </div>
          </div>
          <img
            src={baa1}
            alt="Btaap Business Best Awards"
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-[#1e40af]">
                <IoSettingsSharp className="text-[#1e40af] w-8 h-8" />
              </div>
              <span className="text-sm font-extralight bg-white text-black px-5 py-2 rounded-lg">
                Btaap Tech
              </span>
              <span className="text-sm text-gray-500">2024.12.12</span>
              <span className="text-xl px-2">⫶</span>
            </div>
            <h2
              className="text-4xl font-semibold mt-2 pt-10"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Lowering the barrier to the future
            </h2>
            <div className="mt-[135px] flex flex-wrap gap-2 text-sm text-gray-600">
              <span>#developer</span>
              <span>#engineering</span>
              <span>#tech</span>
            </div>
          </div>
          <img
            src={baa2}
            alt="Kakao Together Value"
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Card 3 */}
        {/* <div className="max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden">
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
                    </div> */}
      </div>
      {/* 17th section end*/}
      {/* 18th section */}
      <div className="flex justify-end items-end py-10">
        <div
          onClick={scrollToTop}
          className="list-none "
        >
          <Link to="">
            <IoArrowUpCircleSharp className="w-16 h-16 " />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;
