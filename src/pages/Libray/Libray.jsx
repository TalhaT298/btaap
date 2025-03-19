import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Libray = () => {
  return (
    <div>
      <Link to="/libray"></Link>
      <Helmet>
        <title>Btaap | Library</title>
      </Helmet>
      <div class="bg-gray-100 p-4">
        {/* <!-- Sidebar Menu --> */}

        {/* <!-- Main Container --> */}
        <div class="max-w-5xl mx-auto">
          {/* <!-- Header --> */}
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold">Library</h1>
            <input
              type="text"
              placeholder="Search..."
              class="border rounded-lg px-4 py-2 w-1/3"
            ></input>
          </div>

          {/* <!-- Book Grid --> */}
          <div class="grid grid-cols-4 gap-6">
            {/* <!-- Book Card --> */}
            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
              <div class="h-32 w-24 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-lg"></div>
              <p class="mt-2 font-semibold">Book Title</p>
              <p class="text-gray-500 text-sm">Author, Year</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
              <div class="h-32 w-24 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-lg"></div>
              <p class="mt-2 font-semibold">A Golden Age</p>
              <p class="text-gray-500 text-sm">Tahmima Anam, 2007</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
              <div class="h-32 w-24 bg-gradient-to-r from-green-500 to-red-500 mx-auto rounded-lg"></div>
              <p class="mt-2 font-semibold">The Good Muslim</p>
              <p class="text-gray-500 text-sm">Tahmima Anam, 2011</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
              <div class="h-32 w-24 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-lg"></div>
              <p class="mt-2 font-semibold">Book Title</p>
              <p class="text-gray-500 text-sm">Author, Year</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
              <div class="h-32 w-24 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-lg"></div>
              <p class="mt-2 font-semibold">Book Title</p>
              <p class="text-gray-500 text-sm">Author, Year</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
              <div class="h-32 w-24 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-lg"></div>
              <p class="mt-2 font-semibold">Book Title</p>
              <p class="text-gray-500 text-sm">Author, Year</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
              <div class="h-32 w-24 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-lg"></div>
              <p class="mt-2 font-semibold">Book Title</p>
              <p class="text-gray-500 text-sm">Author, Year</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
              <div class="h-32 w-24 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-lg"></div>
              <p class="mt-2 font-semibold">Book Title</p>
              <p class="text-gray-500 text-sm">Author, Year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Libray;
