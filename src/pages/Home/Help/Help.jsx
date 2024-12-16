import React from 'react'
import robot from "../../../../src/assets/robot.gif";
const Help = () => {
  return (
    <div className='py-8'>
        {/* title add */}
      <div className="flex items-center justify-between py-8">
              <div className="flex items-center space-x-2">
                <div
                  className="w-16 h-16
                                   flex items-center justify-center rounded-lg "
                >
                  <div className=" ">
                    {" "}
                    <img className="rounded-xl " src={promise} alt="" />{" "}
                  </div>
                </div>
                <span
                  className="text-5xl font-extrabold text-black px-6"
                  style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
                >
                  How may I help you?
                </span>
              </div>
            </div>
            {/* title end */}
    </div>
  )
}

export default Help
