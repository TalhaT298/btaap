import React, { useState } from "react";
import { Link } from "react-router-dom";
import mathe from "../../../src/assets/math.webp";

const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample mentor data
  const mentors = [
    {
      id: 1,
      name: "Mary",
      subject: "Mathematics",
      position: "Professor, Dhaka University",
      rating: "★★★★★",
      image:
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg",
    },
    {
      id: 2,
      name: "Elizabeth",
      subject: "English",
      position: "Professor, Dhaka University",
      rating: "★★★★★",
      image:
        "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg",
    },
    {
      id: 3,
      name: "James",
      subject: "Science",
      position: "Professor, Dhaka University",
      rating: "★★★★★",
      image:
        "https://images.pexels.com/photos/8460398/pexels-photo-8460398.jpeg",
    },
    {
      id: 4,
      name: "Charles",
      subject: "IT, Technology",
      position: "Professor, Dhaka University",
      rating: "★★★★★",
      image:
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    },
    {
      id: 5,
      name: "Jessica",
      subject: "Accounting",
      position: "Professor, Dhaka University",
      rating: "★★★★★",
      image:
        "https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg",
    },
  ];

  // Filter mentors based on search term
  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Link to="/mentor"></Link>
      <div className="bg-gradient-to-r from-green-100 to-blue-200 min-h-screen">
        <div className="max-w-7xl mx-auto p-4">
          {/* Header */}
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-[#396b3c] pb-5">Mentorship</h1>
            {/* <div class="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-600 to-green-500 rounded-full"></div> */}
        <div class="flex items-center justify-center mb-4 mt-2">
          <button class="border border-[#355937] text-[#97ce9b] rounded-full px-6 py-2 bg-white shadow-sm hover:bg-blue-50">
            Problem-Solving Hub
          </button>

          <span class="text-[#3d6340] font-semibold text-xl px-20">Mentor</span>
        </div>

        <div class="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-600 to-green-500 rounded-full"></div>
          </div>

          {/* Mentor Filter & Search */}
          <div className="flex flex-col md:flex-row justify-end items-end gap-4 mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search mentors..."
                className="px-4 py-2 pr-8 rounded-full border border-gray-300 shadow-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    className="w-full h-56 object-cover"
                    src={mentor.image}
                    alt={mentor.name}
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{mentor.name}</h2>
                    <p className="text-sm text-gray-600">{mentor.subject}</p>
                    <p className="text-sm text-gray-600">{mentor.position}</p>
                    <div className="mt-2 text-yellow-400">{mentor.rating}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">
                  No mentors found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 2nd div */}
      <div
        class="bg-gradient-to-r from-green-100 via-blue-100 to-blue-300 p-4"
        style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
      >
        <div class="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-600 to-green-500 rounded-full"></div>
        <div class="flex items-center justify-center mb-2 mt-2">
          <button class="border border-[#355937] text-[#97ce9b] rounded-full px-4 py-1 bg-white shadow-sm hover:bg-blue-50">
            Problem-Solving Hub
          </button>

          <span class="text-[#3d6340] font-medium px-10">Mentor</span>
        </div>

        <div class="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-600 to-green-500 rounded-full"></div>
      </div>

      <div class="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
        <div class="flex items-center space-x-4">
          <img
            src="profile.jpg"
            alt="User"
            class="w-10 h-10 rounded-full"
          ></img>
          <div>
            <h2 class="text-sm font-semibold">শ্যামলা রহমান</h2>
            <p class="text-gray-500 text-xs">Problem-Solving Hub</p>
          </div>
        </div>

        <p class="text-lg font-semibold text-gray-800">
          লগারিদমিক পার্থকের একটি সাধারণ সূত্র কী হতে পারে?
        </p>
        <div>
          <img src={mathe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
