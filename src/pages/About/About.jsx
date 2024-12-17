import React from 'react';

const About = () => {
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="text-center space-y-4 p-4">
        {/* News Date */}
        <p className="text-gray-500 text-sm font-medium">
          News | August 08, 2024
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-black">
          Kakao Records <span className="line-through">₩</span>2.0049T
          <br />
          Consolidated Sales and <span className="line-through">₩</span>134B
          <br />
          Operating Profit in Q2
        </h1>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-4 mt-4">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
            💬
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
            🔗
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
            🐦
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
