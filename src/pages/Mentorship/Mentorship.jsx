import React from "react";
import { Link } from "react-router-dom";

const Mentorship = () => {
  return (
    <div>
      <Link to="/mentor"></Link>
      {/* rafce */}
      <div className="bg-gradient-to-r from-green-100 to-blue-200 min-h-screen">
        <div className="max-w-7xl mx-auto p-4">
          {/* Header */}
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-blue-700">Mentorship</h1>
            <p className="text-sm text-gray-700 mt-1">Problem-Solving Hub</p>
          </div>

          {/* Mentor Filter & Search */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            {/* <select className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none">
              <option>Mentor</option>
              <option>Teacher</option>
            </select> */}

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 pr-8 rounded-full border border-gray-300 shadow-sm focus:outline-none"
              />
              <svg
                className="w-4 h-4 absolute right-3 top-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z"
                />
              </svg>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg"
                alt="Mary"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Mary</h2>
                <p className="text-sm text-gray-600">Mathematics</p>
                <p className="text-sm text-gray-600">
                  Professor, Dhaka University
                </p>
                <div className="mt-2 text-yellow-400">★★★★★</div>
              </div>
            </div>

            {/* Card 2 (with hover buttons) */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg"
                alt="Mary"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Mary</h2>
                <p className="text-sm text-gray-600">Mathematics</p>
                <p className="text-sm text-gray-600">
                  Professor, Dhaka University
                </p>
                <div className="mt-2 text-yellow-400">★★★★★</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg"
                alt="Elizabeth"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Elizabeth</h2>
                <p className="text-sm text-gray-600">English</p>
                <p className="text-sm text-gray-600">
                  Professor, Dhaka University
                </p>
                <div className="mt-2 text-yellow-400">★★★★★</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://images.pexels.com/photos/8460398/pexels-photo-8460398.jpeg"
                alt="James"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">James</h2>
                <p className="text-sm text-gray-600">Science</p>
                <p className="text-sm text-gray-600">
                  Professor, Dhaka University
                </p>
                <div className="mt-2 text-yellow-400">★★★★★</div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
                alt="Charles"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Charles</h2>
                <p className="text-sm text-gray-600">IT, Technology</p>
                <p className="text-sm text-gray-600">
                  Professor, Dhaka University
                </p>
                <div className="mt-2 text-yellow-400">★★★★★</div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                className="w-full h-56 object-cover"
                src="https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg"
                alt="Jessica"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Jessica</h2>
                <p className="text-sm text-gray-600">Accounting</p>
                <p className="text-sm text-gray-600">
                  Professor, Dhaka University
                </p>
                <div className="mt-2 text-yellow-400">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
