import React from 'react'
import clip from "../../../../src/assets/cli.gif";
const World = () => {
  return (
    <div>
      {/* title add */}
        <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10
                 flex items-center justify-center rounded">
                  <div className=" "> <img src={clip} alt="" /> </div>
                </div>
                <span
                  className="text-5xl font-extrabold text-black"
                  style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
                >
                  Btaap creates a better world
                </span>
              </div>
      
              <button
                className="w-12 h-12 bg-black flex items-center justify-center rounded-full text-white"
                onClick={handleTogglePause}
              >
                {paused ? <GiPlayButton size={24} /> : <GiPauseButton size={24} />}
              </button>
            </div>
    </div>
  )
}

export default World
