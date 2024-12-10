import React from 'react';
import ban from "../../../assets/banner.png";
const Banner = () => {
    return (
        <div>
            <div class="flex w-full">
    
    <div class="w-4/5 bg-blue-500 p-4">
        Left Side (80%)
    </div>
    
    <div class="w-1/5 flex flex-col space-y-4 p-4">
        
        <div class="bg-gray-600 flex items-center justify-center h-1/3 rounded-lg shadow-md">
            <h2 class="text-white">First Box</h2>
        </div>
        
        <div class="bg-gray-100 flex items-center justify-center h-1/3 rounded-lg shadow-md">
            <h2 class="text-black">Second Box</h2>
        </div>
        
        <div class="bg-yellow-500 flex items-center justify-center h-1/3 rounded-lg shadow-md">
            <h2 class="text-black">Third Box</h2>
        </div>
    </div>
</div>

        </div>
    );
};

export default Banner;
