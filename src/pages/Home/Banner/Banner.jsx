import React, { useState, useEffect } from "react";
import img1 from "../../../../src/assets/1.png"; // Replace with your actual image paths
import img2 from "../../../../src/assets/2.png"; // Replace with your actual image paths
import img3 from "../../../../src/assets/3.png"; // Replace with your actual image paths
import calender from "../../../../src/assets/calender.png";
import world from "../../../../src/assets/wo.gif";
import banner from "../../../assets/banner.gif";

const Banner = () => {
  const images = [img1, img2, img3]; // Array of images for the slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image eery 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <React.Fragment>
      <div className="flex w-full">
        {/* Left Side (80%) */}
        <div className="w-4/5 relative">
          <h2 className="text-white text-5xl font-extrabold absolute top-6 left-6 p-4" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400}}>
            Digital Literacy for Seniors <br />Closer with Btaap
          </h2>
          <img src={banner} alt="" />
        </div>

        {/* Right Side (20%) */}
        <div className="w-1/5 flex flex-col space-y-4 p-4">
          {/* First Box */}
          <div className="bg-gray-600 flex items-center justify-center h-48 rounded-lg shadow-md">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={calender}
              alt=""
            />
          </div>

          {/* Second Box (Image Slider) */}
          <div className="bg-gray-100 flex items-center justify-center h-48 rounded-lg shadow-md">
            <img
              src={images[currentImageIndex]}
              alt="Slider"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>

          {/* Third Box */}
          <div className="bg-yellow-500 flex items-center justify-center h-48 rounded-lg shadow-md">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={world}
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
// import React from 'react'

// const Banner = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Banner