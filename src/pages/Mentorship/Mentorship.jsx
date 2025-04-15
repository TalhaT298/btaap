import React from 'react'
import { Link } from 'react-router-dom'

const Mentorship = () => {
  return (
    <div>
        <Link></Link>
      {/* rafce */}
      <div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <img class="w-full h-56 object-cover" src="mentor-image.jpg" alt="Mentor Photo"></img>
  <div class="p-4">
    <div class="flex items-center space-x-2 mb-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.982 1.97 4.623 5.165 7.937a.75.75 0 001.07 0C14.03 12.623 16 9.982 16 8a6 6 0 00-6-6zM8 8a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd" />
      </svg>
      <h2 class="text-lg font-semibold text-gray-800">Mary</h2>
    </div>
    <p class="text-sm text-gray-600">Mathematics</p>
    <p class="text-sm text-gray-600">Professor, Dhaka University</p>
    <div class="mt-2 flex items-center space-x-1 text-yellow-400">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
  </div>
</div>

    </div>
  )
}

export default Mentorship
