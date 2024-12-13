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
import { GiPauseButton } from "react-icons/gi";
const Moving = () => {
  const [paused, setPaused] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev); // Toggle the paused state
  };
  return (
    <div>
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center space-x-2">
          <div class="w-6 h-6 bg-gray-300 flex items-center justify-center rounded">
            <div class="w-4 h-4 bg-gray-500"></div>
          </div>

          <span class="text-5xl font-extrabold text-black" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400}}>
            Btaap & Group Chronicles
          </span>
        </div>

        <div class="w-6 h-6 bg-black flex items-center justify-center rounded-full">
          <div class="w-1 h-4 bg-white"><GiPauseButton /></div>
          <div class="w-1 h-4 bg-white ml-1"></div>
        </div>
      </div>

      <div className="py-8">
        <Marquee
          className="pt-16"
          direction="right"
          pauseOnHover={true}
          speed={50}
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
