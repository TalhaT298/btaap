import React from "react";
import ab7 from "../../../src/assets/ab7.png";
import manus from "../../../src/assets/manus.gif";
import Revolutionizing from "../../../src/assets/Revolutionizing.png";

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
        <h1
          className="font-bold text-5xl text-[#97ce9b] py-2"
          style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
        >
          Btaap
        </h1>
        <p
          className="text-xl text-[#97ce9b] py-2"
          style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
        >
          One app,infinite possibilities
        </p>
      </div>
      <div className="py-8">
        <img src={ab7} alt="" />
      </div>
      {/* 3rd section */}
      <div className="flex">
        <div className="w-1/2 pt-24 px-4">
          <p
            className="text-2xl font-semibold"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            Revolutionizing Bangladesh, Rooted in Culture Bangladesh is a land
            of rich traditions, vibrant festivals, and unique cultural
            identities. Our super-app is designed to embrace and showcase this
            cultural essence while bringing it into the digital era. From
            providing access to Bengali literature, folk music, and traditional
            art to offering a platform for local artisans and storytellers, we
            are committed to preserving what makes our nation special.
            <br />
            Through our app, users can explore Bangladeshi heritage while
            staying connected to modern conveniences. This dual focus ensures
            that our traditions remain relevant and celebrated in a rapidly
            evolving world.
          </p>
        </div>
        <div className="w-1/2">
          <img src={Revolutionizing} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
