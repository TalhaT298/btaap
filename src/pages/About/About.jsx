import React from 'react';

const About = () => {
  return (
    <div>
        <div className="flex justify-center items-center " >
      {/* Main Container */}
      <div className="text-center space-y-4 p-4">
        {/* News Date */}
        <p className="text-gray-500 text-sm font-medium" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
          News | August 08, 2024
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-black" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
          Btaap Records <span className="line-through">৳</span>2.0049C
          <br />
          Consolidated Sales and <span className="line-through">৳</span>134B
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
