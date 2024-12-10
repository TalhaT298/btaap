import React from "react";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { LuMoon } from "react-icons/lu";
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between  px-4 py-2 text-white" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400}}>
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all  ">
          <h2 className="text-[#97ce9b] text-3xl font-bold" >Btaap</h2>
        </div>
        <ul className="flex items-center justify-between gap-6 text-slate-900">
          <li className="cursor-pointer  rounded-full  px-6 py-2 text-black hover:bg-[#97ce9b]">
            About
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            Tech & Service
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            Resposibility
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            News
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            IR↗
          </li>
        </ul>
        <div>
          <li className="cursor-pointer flex gap-5 list-none rounded-full px-6 py-2 text-black ">
            
          <CiSearch className="w-7 h-7"/>
          <TbWorld className="w-7 h-7"/>
          <LuMoon className="w-7 h-7"/>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
