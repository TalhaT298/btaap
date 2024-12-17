import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div
        className=" py-8 px-4 border-t border-black"
        style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
      >
        <div>
          <h3 className="font-bold text-3xl mb-4">Today's <span className=""style={{ color: '#97ce9b' }}>Btaap</span></h3>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Today's Btaap */}
          <div>
            <ul className="space-y-2 text-gray-500 ">
              <li>#Vaccination Certificate</li>
              <li>#Certificate issuance</li>
              <li>#Developer Tools</li>
              <li>#Btaap map</li>
              <li className="text-gray-500 cursor-pointer">
                Btaap Healthcare ↗
              </li>
            </ul>
          </div>

          {/* Btaap Service */}
          <div className="">
            <h3 className="font-bold text-lg mb-4">Btaap Service</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Communication</li>
              <li>Business</li>
              <li>Life</li>
              <li>Shopping</li>
              <li>Entertainment</li>
              <li>Impact</li>
            </ul>
          </div>
          {/* Btaap Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">&nbsp;&nbsp;&nbsp;</h3>
            <ul className="space-y-2 text-gray-500">
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
            <ul className="space-y-2 text-gray-500">
              <li className="  cursor-pointer">Btaap ↗</li>
              <li className=" cursor-pointer">Btaap Pay ↗</li>
              <li className="  cursor-pointer">Btaap Bank ↗</li>
              <li className="  cursor-pointer">Btaap Mobility ↗</li>
              <li className=" cursor-pointer">Btaap Style ↗</li>
              <li className="cursor-pointer">
                Btaap Entertainment ↗
              </li>
            </ul>
          </div>

          {/* IR */}
          <div>
            <h3 className="font-bold text-lg mb-4">IR</h3>
            <ul className="space-y-2 text-gray-500">
              <li className="  cursor-pointer">Governance ↗</li>
              <li className="  cursor-pointer">Stocks ↗</li>
              <li className="  cursor-pointer">Financial Info ↗</li>
              <li className="  cursor-pointer">
                Investor Events ↗
              </li>
              <li className="  cursor-pointer">
                Disclosure Info ↗
              </li>
              <li className="  cursor-pointer">IR News ↗</li>
            </ul>
          </div>

          {/* Account & Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Account & Support</h3>
            <ul className="space-y-2 text-gray-500">
              <li className=" cursor-pointer">Btaap Account ↗</li>
              <li className=" cursor-pointer">Btaap Privacy ↗</li>
              <li className=" cursor-pointer">
                Btaap Customer Center ↗
              </li>
              <li className=" cursor-pointer">
                Daum Customer Center ↗
              </li>
              <li className=" cursor-pointer">
                Commerce Customer Center ↗
              </li>
              <li className=" cursor-pointer">Btaap Careers ↗</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500">
          <p>© <span className=""style={{ color: '#97ce9b' }}>Btaap</span> Corp. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2 text-sm">
            <a href="#" className="hover:text-black">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black">
              Location Terms of Service
            </a>
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Operation Policy
            </a>
            <a href="#" className="hover:text-black">
              Accessibility Information
            </a>
            <a href="#" className="hover:text-black">
              Brand Protection Policy
            </a>
            <a href="#" className="hover:text-black">
              Notice
            </a>
            <a href="#" className="hover:text-black">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
