// import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { TbWorld } from "react-icons/tb";
// import { LuMoon } from "react-icons/lu";
// import { FiMenu, FiX } from "react-icons/fi"; // For hamburger and close icons

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to toggle menu

//   return (
//     <React.Fragment>
//       <nav
//         className="flex items-center justify-between px-4 py-2 text-white bg-white"
//         style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
//       >
//         {/* Logo */}
//         <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all">
//           <h2 className="text-[#97ce9b] text-3xl font-bold">Btaap</h2>
//         </div>

//         {/* Hamburger Menu */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-black">
//             {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
//           </button>
//         </div>

//         {/* Nav Menu */}
//         <ul
//           className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex items-center justify-between gap-6 text-slate-900 bg-white md:bg-transparent md:space-x-4 transition-all duration-300 ${
//             isOpen ? "block" : "hidden"
//           } md:flex`}
//         >
//           <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
//             About
//           </li>
//           <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
//             Tech & Service
//           </li>
//           <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
//             Responsibility
//           </li>
//           <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
//             News
//           </li>
//           <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
//             IR↗
//           </li>
//         </ul>

//         {/* Icons */}
//         <div className="hidden md:flex gap-5 text-black">
//           <CiSearch className="w-7 h-7 cursor-pointer" />
//           <TbWorld className="w-7 h-7 cursor-pointer" />
//           <LuMoon className="w-7 h-7 cursor-pointer" />
//         </div>
//       </nav>
//     </React.Fragment>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { LuMoon } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <React.Fragment>
      <nav
        className="flex items-center justify-between px-4 py-2 text-white bg-white"
        style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
      >
        {/* Logo */}
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all">
          <h2 className="text-[#97ce9b] text-3xl font-bold">Btaap</h2>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
        </div>

        {/* Nav Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex items-center justify-between gap-6 text-slate-900 bg-white md:bg-transparent md:space-x-4 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            About
          </li>
          <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            Tech & Service
          </li>
          <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            Responsibility
          </li>
          <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            News
          </li>
          <li className="cursor-pointer rounded-full px-6 py-2 text-black hover:bg-[#97ce9b]">
            IR↗
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex gap-5 text-black">
          <CiSearch className="w-7 h-7 cursor-pointer" />
          <TbWorld className="w-7 h-7 cursor-pointer" />
          <LuMoon className="w-7 h-7 cursor-pointer" />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
