// import React from 'react';

// const Moving = () => {
//   return (
//     <div>

//     </div>
//   );
// };
// export default Moving;
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import no1 from "../../../../src/assets/no1.png";
import no2 from "../../../../src/assets/no2.png";
import no3 from "../../../../src/assets/no4.png";
import no4 from "../../../../src/assets/no3.png";
import no5 from "../../../../src/assets/no5.png";
import no6 from "../../../../src/assets/no6.png";
import no7 from "../../../../src/assets/no7.png";
import clip from "../../../../src/assets/cli.gif";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";

const Moving = () => {
  const [paused, setPaused] = useState(false);

  const handleTogglePause = () => {
    setPaused((prev) => !prev); // Toggle the paused state
  };

  return (
    <div>
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
            Btaap & Group Chronicles
          </span>
        </div>

        <button
          className="w-12 h-12 bg-black flex items-center justify-center rounded-full text-white"
          onClick={handleTogglePause}
        >
          {paused ? <GiPlayButton size={24} /> : <GiPauseButton size={24} />}
        </button>
      </div>

      <div className="py-8">
        <Marquee
          className="pt-16"
          direction="right"
          pauseOnHover={true}
          speed={50}
          play={!paused} // Controls the pause/play state
        >
          <img src={no1} alt="" className="mx-3 h-[450px] rounded-3xl" />
          <img src={no2} alt="" className="mx-3 h-[450px] rounded-3xl" />
          <img src={no4} alt="" className="mx-3 h-[450px] rounded-3xl" />
          <img src={no3} alt="" className="mx-3 h-[450px] rounded-3xl" />
          <img src={no5} alt="" className="mx-3 h-[450px] rounded-3xl" />
          <img src={no6} alt="" className="mx-3 h-[450px] rounded-3xl" />
          <img src={no7} alt="" className="mx-3 h-[450px] rounded-3xl" />
        </Marquee>
      </div>
    </div>
  );
};

export default Moving;
