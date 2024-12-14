import React from 'react'
import bulb from "../../../../src/assets/bulb.png";
const World = () => {
  return (
    <div>
      {/* title add */}
        <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2">
                <div className="w-16 h-12
                 flex items-center justify-center rounded-lg ">
                  <div className=" "> <img className='rounded-xl ' src={bulb} alt="" /> </div>
                </div>
                <span
                  className="text-5xl font-extrabold text-black px-6"
                  style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
                >
                  Btaap creates a better world
                </span>
              </div>
            </div>
    </div>
  )
}

export default World
