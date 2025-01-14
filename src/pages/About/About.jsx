import React from "react";
import ab7 from "../../../src/assets/ab7.png";
import doc from "../../../src/assets/doct.png";
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
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full pt-12 px-4">
          <p
            className="text-lg md:text-2xl font-semibold"
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
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center">
          <img
            src={Revolutionizing}
            alt=""
            className="w-full max-w-xs md:max-w-full"
          />
        </div>
      </div>
      {/* 4thsection */}
      <div className="flex flex-col md:flex-row py-16">
      <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center">
          <img
            src={doc}
            alt=""
            className="w-full max-w-xs md:max-w-full"
          />
        </div>
        <div className="md:w-1/2 w-full pt-44 px-4">
          <p
            className="text-lg md:text-2xl font-semibold"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
           Empowering Education and Healthcare for All
Education is the backbone of progress, and our app bridges the gap between urban and rural education in Bangladesh. With features like an online library of Bengali and international books, live virtual classes, and interactive tools like whiteboards and tutorials, we empower students and educators alike.
<br />
Access to quality healthcare is a basic right, and our app makes it more accessible than ever. With telemedicine consultations, online appointment bookings, and tools for tracking health metrics, we simplify healthcare for everyone. We also connect users to nearby hospitals, pharmacies, and emergency services, ensuring that help is always just a tap away. <br />

These innovations supports both urban centers and rural areas where healthcare access can be limited.
          </p>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default About;
