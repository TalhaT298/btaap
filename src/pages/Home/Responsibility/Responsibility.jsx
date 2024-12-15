import React from "react";
import promise from "../../../../src/assets/promise.gif";
const Responsibility = () => {
  return (
    <div>
      {/* title add */}
      <div className="flex items-center justify-between py-6">
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <img src="image1.jpg" alt="Image 1" class="w-full h-auto" />
        <img src="image2.jpg" alt="Image 2" class="w-full h-auto" />
        <img src="image3.jpg" alt="Image 3" class="w-full h-auto" />
        <img src="image4.jpg" alt="Image 4" class="w-full h-auto" />
        <img src="image5.jpg" alt="Image 5" class="w-full h-auto" />
      </div>
    </div>
  );
};

export default Responsibility;
