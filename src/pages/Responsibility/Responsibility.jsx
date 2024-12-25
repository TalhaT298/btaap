import React from "react";
import { Link } from "react-router-dom";

const Responsibility = () => {
  return (
    <div>
      <Link to="/responsibility"></Link>
      {/* 1st section start */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          
          <a className="  text-xl">ESG Reports</a>
        </div>
        
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      {/* 1st section finish */}
    </div>
  );
};

export default Responsibility;
