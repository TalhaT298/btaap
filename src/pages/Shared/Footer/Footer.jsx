import React from 'react';

const Footer = () => {
    return (
        <div>
           <div className="bg-gray-100 py-8 px-4" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}>
            <div>
            <h3 className="font-bold text-3xl mb-4">Today's Kakao</h3>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {/* Today's Kakao */}
                <div>
                     
                    <ul className="space-y-2">
                        <li>#Vaccination Certificate</li>
                        <li>#Certificate issuance</li>
                        <li>#Developer Tools</li>
                        <li>#Kakao map</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Healthcare ↗</li>
                    </ul>
                </div>

                {/* Kakao Service */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Kakao Service</h3>
                    <ul className="space-y-2">
                        <li>Communication</li>
                        <li>Business</li>
                        <li>Life</li>
                        <li>Shopping</li>
                        <li>Entertainment</li>
                        <li>Impact</li>
                    </ul>
                </div>
                {/* Kakao Service */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Kakao Service</h3>
                    <ul className="space-y-2">
                        <li>Communication</li>
                        <li>Business</li>
                        <li>Life</li>
                        <li>Shopping</li>
                        <li>Entertainment</li>
                        <li>Impact</li>
                    </ul>
                </div>
                {/* Group */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Group</h3>
                    <ul className="space-y-2">
                        <li className="text-blue-500 cursor-pointer">Kakao ↗</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Pay ↗</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Bank ↗</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Mobility ↗</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Style ↗</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Entertainment ↗</li>
                    </ul>
                </div>

                {/* IR */}
                <div>
                    <h3 className="font-bold text-lg mb-4">IR</h3>
                    <ul className="space-y-2">
                        <li className="text-blue-500 cursor-pointer">Governance ↗</li>
                        <li className="text-blue-500 cursor-pointer">Stocks ↗</li>
                        <li className="text-blue-500 cursor-pointer">Financial Info ↗</li>
                        <li className="text-blue-500 cursor-pointer">Investor Events ↗</li>
                        <li className="text-blue-500 cursor-pointer">Disclosure Info ↗</li>
                        <li className="text-blue-500 cursor-pointer">IR News ↗</li>
                    </ul>
                </div>

                {/* Account & Support */}
                <div>
                    <h3 className="font-bold text-lg mb-4">Account & Support</h3>
                    <ul className="space-y-2">
                        <li className="text-blue-500 cursor-pointer">Kakao Account ↗</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Privacy ↗</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Customer Center ↗</li>
                        <li className="text-blue-500 cursor-pointer">Daum Customer Center ↗</li>
                        <li className="text-blue-500 cursor-pointer">Commerce Customer Center ↗</li>
                        <li className="text-blue-500 cursor-pointer">Kakao Careers ↗</li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-8 text-gray-500">
                <p>© Kakao Corp. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2 text-sm">
                    <a href="#" className="hover:text-black">Terms of Service</a>
                    <a href="#" className="hover:text-black">Location Terms of Service</a>
                    <a href="#" className="hover:text-black">Privacy Policy</a>
                    <a href="#" className="hover:text-black">Operation Policy</a>
                    <a href="#" className="hover:text-black">Accessibility Information</a>
                    <a href="#" className="hover:text-black">Brand Protection Policy</a>
                    <a href="#" className="hover:text-black">Notice</a>
                    <a href="#" className="hover:text-black">Contact Us</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;