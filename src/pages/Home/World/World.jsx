import React from "react";
import bulb from "../../../../src/assets/bulb.png";
import btap from "../../../../src/assets/B.svg";
import facebook from "../../../../src/assets/facebook.svg";
import insta from "../../../../src/assets/insta.svg";
import plus from "../../../../src/assets/plus.svg";
import ev from "../../../../src/assets/evaly.svg";
import dr from "../../../../src/assets/daraz.svg";
import am from "../../../../src/assets/amazone.svg";
import map from "../../../../src/assets/map.svg";
import qa from "../../../../src/assets/qatar.svg";
import car from "../../../../src/assets/car.svg";
import aro from "../../../../src/assets/arong.svg";
import yello from "../../../../src/assets/yellow.svg";
import tag from "../../../../src/assets/taga.svg";
import love from "../../../../src/assets/love.svg";
import spo from "../../../../src/assets/spotify.svg";
import net from "../../../../src/assets/netflix.svg";
import sport from "../../../../src/assets/sports.svg";
const World = () => {
  return (
    <div className="py-8">
      {/* title add */}
      <div className="flex items-center justify-between py-4">
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
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 pt-4 ">
        <div class="bg-gray-100 p-4 rounded-xl shadow flex h-36 pt-6">
          <h2 class="font-extrabold text-4xl pt-6" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}>Communication</h2>
          <div class="flex pt-2 px-4">
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={btap} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={facebook} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={insta} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={plus} alt="" /></div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-xl shadow flex h-36 pt-6">
          <h2 class="font-extrabold text-4xl pt-6" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}>Business&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
          <div class="flex justify-end pt-2">
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={ev} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={dr} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={am} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={plus} alt="" /></div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-xl shadow flex h-36 pt-6">
          <h2 class="font-extrabold text-4xl pt-6" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}>Life</h2>
          <div class="flex pt-2 px-4">
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={map} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={qa} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={car} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={plus} alt="" /></div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-xl shadow flex h-36 pt-6">
          <h2 class="font-extrabold text-4xl pt-6" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}>Shopping</h2>
          <div class="flex pt-2 px-4">
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={aro} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={yello} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={tag} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={plus} alt="" /></div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-xl shadow flex h-36 pt-6">
          <h2 class="font-extrabold text-4xl pt-6" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}>Entertainment</h2>
          <div class="flex pt-2 px-4">
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={spo} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={net} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={sport} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={plus} alt="" /></div>
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-xl shadow flex h-36 pt-6">
          <h2 class="font-extrabold text-4xl pt-6" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}>Social Impact</h2>
          <div class="flex pt-2 px-4">
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={love} alt="" /></div>
            <div class="p-1 rounded-full"><img className="rounded-2xl" src={plus} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
