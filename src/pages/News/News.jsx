import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <Link to="/news"></Link>
      <Helmet>
        <title>Btaap | News</title>
      </Helmet>
       {/* title add */}
            <div className="flex items-center justify-between py-6 pl-6">
              <div className="flex items-center space-x-2">
                <div
                  className="w-16 h-16
                                         flex items-center justify-center rounded-lg "
                >
                  <div className=" ">
                    {" "}
                    {/* <img className="rounded-xl " src={bulbc} alt="" />{" "} */}
                  </div>
                </div>
                <span
                  className="text-5xl font-extrabold text-black px-6"
                  style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
                >
                  Service
                </span>
              </div>
            </div>
    </div>
  );
};

export default News;
