import React from "react";
import { Link } from "react-router-dom";
import promise from "../../../src/assets/promise.gif";
import turbine from "../../../src/assets/turbine.gif";
import measure from "../../../src/assets/measure.gif";
import a from "../../../src/assets/a.png";
import b from "../../../src/assets/b23.png";
import cc from "../../../src/assets/cc.png";
import le from "../../../src/assets/le.png";
import mobile from "../../../src/assets/mobile.png";
import eco from "../../../src/assets/ecobanner.webp";
import { ArrowDownOutlined, PlusCircleOutlined } from "@ant-design/icons";
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
        <div className="flex justify-center items-center">
          <h1
            className="text-5xl"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            2023 HIGHLIGHT
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* <!-- Card 1 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
            >
              Used 2X more renewable energy than 2022
            </h3>
            <p
              class="text-gray-700 text-sm lg:text-base mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Wind power in Jeju
              <br />
              Solar power in Pangyo
            </p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={turbine} alt="Renewable energy" className="w-full" />

              {/* Button */}
              <button
                className="absolute top-3/4 left-0 flex items-center justify-center bg-opacity-70 p-2 rounded-full "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <PlusCircleOutlined
                  className="text-black"
                  style={{ fontSize: "34px", height: "34px", width: "34px" }}
                />
              </button>
            </div>

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">
                  Increased renewable energy
                </h3>
                <p className="py-4">
                  In 2023, btaap joined RE100 to achieve carbon neutrality and
                  transition to renewable energy. Renewable energy is now being
                  used in btaap's Jeju and Pangyo office. <br />
                  The Jeju headquarters is now operating 100% on renewable
                  energy procured from wind power generated in Jeju and from
                  solar power produced from Gyeonggi-do Renewable Energy Coop's
                  solar power generator, which have now started to provide
                  renewable energy to btaap's Pangyo office.
                </p>
              </div>
            </dialog>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              A system for reform,
              <br /> to regain users' trust
            </h3>
            <p
              class="text-gray-700 text-sm lg:text-base mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
            >
              Wind power in Jeju
              <br />
              Solar power in Pangyo
            </p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={measure} alt="Renewable energy" className="w-full" />

              {/* Button */}
              <button
                className="absolute top-3/4 left-0 flex items-center justify-center bg-opacity-70 p-2 rounded-full "
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <PlusCircleOutlined
                  className="text-black"
                  style={{ fontSize: "34px", height: "34px", width: "34px" }}
                />
              </button>
            </div>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">
                  Established the Compliance and Trust Committee
                </h3>
                <p className="py-4">
                  Btaap established the Compliance and Trust Committee, an
                  independent body that monitors Btaap affiliates' compliance to
                  law and practice of ethical management. This committee will
                  implement a framework for compliance and trust management and
                  support the execution of corporate social responsibility{" "}
                  <br />
                  Kakao established the Compliance and Trust Committee, an
                  independent body that monitors Kakao affiliates' compliance to
                  law and practice of ethical management. This committee will
                  implement a framework for compliance and trust management and
                  support the execution of corporate social responsibility
                </p>
              </div>
            </dialog>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              Dangol Market <br /> receives the <br /> Presidential Award
            </h3>
            <p
              class="text-gray-700 text-sm lg:text-base mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
            >
              Used services to digitize traditional markets
              <br />
              traditional markets
            </p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={mobile} alt="Renewable energy" className="w-full" />

              {/* Button */}
              <button
                className="absolute top-3/4 left-0 flex items-center justify-center bg-opacity-70 p-2 rounded-full "
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <PlusCircleOutlined
                  className="text-black"
                  style={{ fontSize: "34px", height: "34px", width: "34px" }}
                />
              </button>
            </div>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">
                  Dangol Market receives the Presidential Award
                </h3>
                <p className="py-4">
                  Btaap operates multiple programs that support the
                  digitalization of small businesses. Dangol Market is a project
                  that supports the digitalization of vendors in traditional
                  markets, so that they can easily communicate and attract
                  regular customers. <br />
                  The Dangol Market project was recognized for closing the
                  digital gap by helping and training market vendors on how to
                  set up and use their own KakaoTalk Channel, and was awarded
                  the 2023 Presidential Award for the Promotion of Traditional
                  Markets.
                </p>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      {/* 3rd section finish */}
      {/* 4th section add */}
      <div className="py-1">
        <div className="flex justify-center items-center py-10">
          <button
            className="btn h-10 bg-gray-200 text-black hover:bg-black hover:text-gray-100 rounded-3xl text-lg"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            &nbsp;&nbsp;More &nbsp;&nbsp;
          </button>
        </div>
      </div>
      {/* 5th section add */}
      <div className="py-6">
        <div className="flex justify-center items-center py-7">
          <h1
            className="text-5xl"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            2023 ESG Evaluation Results
          </h1>
        </div>
        {/* card add */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-6">
          {/* <!-- Card 1 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              MSCI
            </h3>
            <p class=" text-sm lg:text-base font-bold mb-4">
              Received MSCI ESG
              <br />
              Rating of A
              <br />
              মান নিয়ন্ত্রণ সংস্থা
            </p>
            <p>(2023)</p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={a} alt="Renewable energy" className="w-full" />

              {/* Button */}
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              বাংলাদেশে ESG
            </h3>
            <p class=" text-sm lg:text-base font-bold mb-4">
              Received KCGS ESG
              <br />
              Rating of A for the third
              <br />
              consecutive year
            </p>
            <p>(2022~2023)</p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={b} alt="Renewable energy" className="w-full" />

              {/* Button */}
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              S&P Global
            </h3>
            <p class=" text-sm lg:text-base font-bold mb-4">
              Rated Top 1% in S&P
              <br />
              Global ESG Score for the
              <br />
              second consecutive year
            </p>
            <p>(2022~2023)</p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={cc} alt="Renewable energy" className="w-full" />
            </div>
          </div>
          {/* ?card 4 */}
          <div class="bg-gray-100 rounded-lg shadow-lg p-6">
            <h3
              class="text-xl lg:text-2xl font-bold mb-4"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
            >
              CDP
            </h3>
            <p class=" text-sm lg:text-base font-bold mb-4">
              Rated A in Leadership by
              <br />
              CDP Climate Change
              <br />
              Btaap update
            </p>
            <p>(2022~2023)</p>
            <div className="relative flex justify-center">
              {/* Image */}
              <img src={le} alt="Renewable energy" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* 6th section start */}
      <div>
        {/* title start */}
        <div className="flex justify-center items-center py-7">
          <h1
            className="text-5xl"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
          >
            2023 ESG Key Indicators
          </h1>
        </div>
      </div>
      {/* 6th section finish */}
    </div>
  );
};

export default Responsibiliti;
