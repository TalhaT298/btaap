import React, { useState, useEffect } from "react";
import img1 from "../../../assets/calender.png"; // Replace with your actual image paths
import img2 from "../../../assets/b.png"; // Replace with your actual image paths
import img3 from "../../../assets/banner.png"; // Replace with your actual image paths
import calender from "../../../assets/calender.png";  

const Banner = () => {
  const images = [img1, img2, img3]; // Array of images for the slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div>
      <div className="flex w-full">
        {/* Left Side (80%) */}
        <div className="w-4/5 bg-blue-500 p-4">
          <h2 className="text-white text-center text-xl font-semibold">
            Left Side Content
          </h2>
        </div>

        {/* Right Side (20%) */}
        <div className="w-1/5 flex flex-col space-y-4 p-4">
          {/* First Box */}
          <div className="bg-gray-600 flex items-center justify-center h-48 rounded-lg shadow-md">
            <img className="h-full w-full object-cover rounded-lg" src={calender} alt="" />
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
            <h2 className="text-black">Third Box</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
