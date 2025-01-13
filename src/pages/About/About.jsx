import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import abou1 from "../../../src/assets/about1.webp";
import manus from "../../../src/assets/manus.gif";
import "./About.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Btaap | About</title>
      </Helmet>
      <Link to="/about"></Link>
     
    </React.Fragment>
  );
};

export default About;
