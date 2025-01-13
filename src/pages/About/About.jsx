import React from "react";
import ab7 from "../../../src/assets/ab7.png";
import manus from "../../../src/assets/manus.gif";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Btaap | About</title>
      </Helmet>
      <Link to="/about"></Link>
      <div className="text-center justify-center items-center">
        <h1 className="font-bold text-5xl text-[#97ce9b] py-2"  style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}>Btaap</h1>
        <p className="text-xl text-[#97ce9b] py-2"  style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>One app,infinite possibilities</p>
      </div>
      <div>
        <img src={ab7} alt="" />
      </div>
     
    </React.Fragment>
  );
};

export default About;
