import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
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
import gif6 from "../../../src/assets/walet.jpg";
import gif7 from "../../../src/assets/lab.jpg";
import { MdArrowOutward } from "react-icons/md";
import log from "../../../src/assets/c.png";
import log1 from "../../../src/assets/emotion.png";
import { IoIosLink } from "react-icons/io";

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
      <div className="flex">
        <div className="w-1/2 pt-16 pl-44">
          <h1
            className="text-4xl font-bold py-4 "
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            PC Version
          </h1>
          <p className="pt-2">
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
              className="btn h- bg-gray-100 rounded-3xl text-sm"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              &nbsp;&nbsp;For Windows 10 and later
              <MdArrowOutward />
              &nbsp;&nbsp;
            </button>
          </div>
          <div className="">
            <button
              className="btn h- bg-gray-100 rounded-3xl text-sm"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              &nbsp;&nbsp;For Windows 7,8,8.1
              <MdArrowOutward />
              &nbsp;&nbsp;
            </button>
          </div>
        </div>

        <div className="1/2">
          <img src={gif1} alt="" />
        </div>
      </div>
      {/* 6th section end */}
      {/* 7th section start */}
      <div className="flex py-24">
        <div className="w-1/2 pt-32 pl-44">
          <h1
            className="text-4xl font-bold py-4 "
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Emoticons
          </h1>
          <p className="pt-2">
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

          <div className="pt-10">
            <button
              className="btn h- bg-gray-100 rounded-3xl text-sm"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Go to the service
              <MdArrowOutward />
              &nbsp;&nbsp;
            </button>
          </div>
        </div>

        <div className="1/2">
          <img src={log1} alt="" />
        </div>
      </div>
      {/* 7th section end */}
      {/* 8th section start */}
      <div className="flex py-32">
        <div className="w-1/2 pt-40 pl-44">
          <h1
            className="text-4xl font-bold py-4 "
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap Shopping
          </h1>
          <p className="pt-2">
            Shop today through BtaapTalkQuickly and
            <br />
            easily look through products offered on
            <br />
            Btaap's fourth tab, Kakao Shopping.
            <br />
          </p>
        </div>

        <div className="1/2">
          <img src={gif2} alt="" />
        </div>
      </div>
      {/* 8th section end */}
      {/* 9th section start */}
      <div className="flex py-24">
        <div className="w-1/2 pt-32 pl-44">
          <h1
            className="text-4xl font-bold py-4 "
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap Channel
          </h1>
          <p className="pt-2">
            Business platform anyone can create for
            <br />
            free.
            <br />
            Showcase your products or services in the
            <br />
            Btaap Showcase your products or services in the
            <br />
            Btaap
            <br />
          </p>

          <div className="pt-10">
            <button
              className="btn h- bg-gray-100 rounded-3xl text-sm"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Go to the service
              <MdArrowOutward />
              &nbsp;&nbsp;
            </button>
          </div>
        </div>

        <div className="1/2">
          <img src={gif4} alt="" />
        </div>
      </div>
      {/* 9th section end */}
      {/* 10th section start */}
      <div className="flex py-24">
        <div className="w-1/2 pt-32 pl-44">
          <h1
            className="text-4xl font-bold py-4 "
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap Mail
          </h1>
          <p className="pt-2">
            Btaap's all you need!
            <br />
            You can also access email from
            <br />
            Btaap.Exchange emails more
            <br />
            conveniently with Btaap Mail, where you
            <br />
            can getemail notifications and have Jordy
            <br />
            help you with simple replies.
          </p>

          <div className="pt-10">
            <button
              className="btn h- bg-gray-100 rounded-3xl text-sm"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Go to the service
              <MdArrowOutward />
              &nbsp;&nbsp;
            </button>
          </div>
        </div>

        <div className="1/2">
          <img src={gif3} alt="" />
        </div>
      </div>
      {/* 10th section end */}
      {/* 11th section start */}
      <div className="flex py-32">
        <div className="w-1/2 pt-40 pl-44">
          <h1
            className="text-4xl font-bold py-4 "
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Theme
          </h1>
          <p className="pt-2">
            There are ways to spruce up your
            <br />
            Btaap, which you use daily.Include your
            <br />
            favorite photo and characters to create a
            <br />
            customized theme and share it with
            <br />
            friends.
          </p>
        </div>

        <div className="1/2">
          <img src={gif5} alt="" />
        </div>
      </div>
      {/* 11th section end */}
      {/* 12th section start */}
      <div className="flex py-20">
        <div className="w-1/2 pt-40 pl-44">
          <h1
            className="text-4xl font-bold py-4 "
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Wallet
          </h1>
          <p className="pt-2">
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

        <div className="1/2">
          <img src={gif6} alt="" />
        </div>
      </div>
      {/* 12th section end */}
      {/* 13th section start */}
      <div className="flex py-20">
        <div className="w-1/2 pt-40 pl-44">
          <h1
            className="text-4xl font-bold py-4 "
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            Btaap Lab
          </h1>
          <p className="pt-2">
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

        <div className="1/2">
          <img src={gif7} alt="" />
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
    </React.Fragment>
  );
};

export default Service;
