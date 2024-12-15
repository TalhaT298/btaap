import React from 'react'
import promise from "../../../../src/assets/promise.gif";
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
                  Promise and Responsibility
                </span>
              </div>
            </div>
            {/* title end */}
    </div>
  )
}

export default Help
