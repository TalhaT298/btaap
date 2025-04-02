import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Classic = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = () => {
      navigate(`/room/${input}`);
    };
  return (
    <div>
      <Link to="/classic"></Link>
      <Helmet>
        <title>Btaap | Class</title>
      </Helmet>
      <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter your name"
        className="w-full p-2 border   rounded"
      />
      <button
        className="btn mt-2 w-full md:w-auto bg-sky-600 text-white hover:text-black rounded"
        onClick={submitHandler}
      >
        Join
      </button>
      </div>
      {/* 2nd section */}
      <div class="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  {/* <!-- Video Section --> */}
  <div class="relative">
    <img src="https://via.placeholder.com/600x300" alt="Video Thumbnail" class="w-full h-48 object-cover" />
    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <button class="bg-yellow-400 text-white px-4 py-2 rounded-full">▶</button>
    </div>
  </div>

  {/* <!-- Title --> */}
  <div class="p-4">
    <h2 class="text-lg font-semibold">বীজগণিত মান নির্ণয়</h2>
  </div>

  {/* <!-- Comments Section --> */}
  <div class="p-4 border-t">
    <h3 class="text-md font-semibold mb-2">Comments</h3>
    <div class="space-y-4">
      <div class="flex items-start space-x-3">
        <div class="w-10 h-10 rounded-full bg-gray-300"></div>
        <div>
          <p class="text-sm font-semibold">কামাল</p>
          <p class="text-sm text-gray-600">আমার গণিত কঠিন...আল্লাহর এই ভিডিওটা অনেক হেল্প করলো! ধন্যবাদ ভাই</p>
        </div>
      </div>
      <div class="flex items-start space-x-3">
        <div class="w-10 h-10 rounded-full bg-gray-300"></div>
        <div>
          <p class="text-sm font-semibold">সাইফ</p>
          <p class="text-sm text-gray-600">অনেক ব্যাখ্যাতান্ত্রিক, সহজে বুঝতে পারলাম</p>
        </div>
      </div>
      <div class="flex items-start space-x-3">
        <div class="w-10 h-10 rounded-full bg-gray-300"></div>
        <div>
          <p class="text-sm font-semibold">আশা</p>
          <p class="text-sm text-gray-600">এত সুন্দর বোঝানোর ধরণ আমি আগে দেখিনি</p>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Comment Input --> */}
  <div class="p-4 border-t flex items-center">
    <input type="text" placeholder="Comment here..." class="flex-1 p-2 border rounded-lg" />
    <button class="ml-2 px-4 py-2 bg-yellow-400 text-white rounded-lg">Send</button>
  </div>

  {/* <!-- Bottom Navigation --> */}
  <div class="flex justify-around p-4 border-t bg-gray-100">
    <button class="text-gray-600">Home</button>
    <button class="text-gray-600">Call</button>
    <button class="text-gray-600">Chats</button>
    <button class="text-gray-600">Community</button>
  </div>
</div>

    </div>
  );
};

export default Classic;
