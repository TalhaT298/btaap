// import React from 'react';

// const Moving = () => {
//   return (
//     <div>

//     </div>
//   );
// };
// export default Moving;
import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import no1 from "../../../../src/assets/no1.png";
import no2 from "../../../../src/assets/no2.png";
import no3 from "../../../../src/assets/no4.png";
import no4 from "../../../../src/assets/no3.png";
import no5 from "../../../../src/assets/no5.png";
import no6 from "../../../../src/assets/no6.png";
import no7 from "../../../../src/assets/no7.png";
const Moving = () => {
  const [paused, setPaused] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev); // Toggle the paused state
  };
  return (
    <div>
      <div className="py-8">
        <Marquee className="pt-16" direction="right"  pauseOnHover={true} speed={50}>
          <img src={no1} alt="" className="mx-3" />
          <img src={no2} alt="" className="mx-3" />
          <img src={no4} alt="" className="mx-3" />
          <img src={no3} alt="" className="mx-3" />
          <img src={no5} alt="" className="mx-3" />
          <img src={no6} alt="" className="mx-3" />
          <img src={no7} alt="" className="mx-3" />
        </Marquee>
      </div>
    </div>
  );
};
export default Moving;
