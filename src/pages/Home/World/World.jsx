import React from "react";
import bulb from "../../../../src/assets/bulb.png";
const World = () => {
  return (
    <div>
      {/* title add */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-2">
          <div
            className="w-16 h-12
                 flex items-center justify-center rounded-lg "
          >
            <div className=" ">
              {" "}
              <img className="rounded-xl " src={bulb} alt="" />{" "}
            </div>
          </div>
          <span
            className="text-5xl font-extrabold text-black px-6"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 500 }}
          >
            Btaap creates a better world
          </span>
        </div>
      </div>
      {/* title end */}
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 pt-2">
        <div class="bg-gray-100 p-4 rounded-3xl shadow flex h-36">
          <h2 class="font-semibold text-lg mb-3">Communication</h2>
          <div class="flex space-x-3">
            <div class="bg-yellow-300 p-2 rounded-full"></div>
            <div class="bg-blue-300 p-2 rounded-full"></div>
            <div class="bg-green-300 p-2 rounded-full"></div>
            <div class="bg-gray-400 p-2 rounded-full flex items-center justify-center">
              +
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-3xl shadow flex h-36">
          <h2 class="font-semibold text-lg mb-3">Business</h2>
          <div class="flex space-x-3">
            <div class="bg-yellow-300 p-2 rounded-full"></div>
            <div class="bg-blue-700 p-2 rounded-full"></div>
            <div class="bg-blue-400 p-2 rounded-full"></div>
            <div class="bg-gray-400 p-2 rounded-full flex items-center justify-center">
              +
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-3xl shadow flex h-36">
          <h2 class="font-semibold text-lg mb-3">Life</h2>
          <div class="flex space-x-3">
            <div class="bg-yellow-300 p-2 rounded-full"></div>
            <div class="bg-blue-800 p-2 rounded-full"></div>
            <div class="bg-yellow-400 p-2 rounded-full"></div>
            <div class="bg-gray-400 p-2 rounded-full flex items-center justify-center">
              +
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-3xl shadow flex h-36">
          <h2 class="font-semibold text-lg mb-3">Shopping</h2>
          <div class="flex space-x-3">
            <div class="bg-red-400 p-2 rounded-full"></div>
            <div class="bg-yellow-400 p-2 rounded-full"></div>
            <div class="bg-pink-400 p-2 rounded-full"></div>
            <div class="bg-gray-400 p-2 rounded-full flex items-center justify-center">
              +
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-3xl shadow flex h-36">
          <h2 class="font-semibold text-lg mb-3">Entertainment</h2>
          <div class="flex space-x-3">
            <div class="bg-yellow-800 p-2 rounded-full"></div>
            <div class="bg-gray-100 p-2 rounded-full"></div>
            <div class="bg-green-400 p-2 rounded-full"></div>
            <div class="bg-gray-400 p-2 rounded-full flex items-center justify-center">
              +
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-3xl shadow flex h-36">
          <h2 class="font-semibold text-lg mb-3">Social Impact</h2>
          <div class="flex space-x-3">
            <div class="bg-red-500 p-2 rounded-full"></div>
            <div class="bg-gray-400 p-2 rounded-full flex items-center justify-center">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
