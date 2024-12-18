import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import abou1 from "../../../src/assets/about1.webp";
import "./About.css";
const About = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center min-h-96">
        {/* Main Container */}
        <div className="text-center space-y-4 p-4">
          {/* News Date */}
          <p
            className="text-gray-500 text-sm font-medium"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            News | August 08, 2024
          </p>

          {/* Main Heading */}
          <h1
            className="text-5xl font-bold leading-tight tracking-tight text-black"
            style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 400 }}
          >
            Btaap Records <span className="line-through">৳</span>2.0049C
            <br />
            Consolidated Sales and <span className="line-through">৳</span>134B
            <br />
            Operating Profit in Q2
          </h1>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <FaFacebook />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <IoLogoInstagram />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <FaLinkedinIn />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <FaDiscord />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd another section */}
      <div>
        <div className="relative h-screen overflow-hidden">
          {/* Scrolling Image */}
          <div
            className="absolute inset-0 h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 hover:scrollbar-thumb-[#97ce9b]"
            style={{
              msOverflowStyle: "auto", // Ensure scrollbars are visible in Internet Explorer
              scrollbarWidth: "thin", // Make the scrollbar thinner in Firefox
            }}
          >
            <img src={abou1} alt="Scrolling Image" className="w-full" />
          </div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p
              className="text-white text-7xl font-bold px-4 py-2"
              style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600 }}
            >
              Btaap
            </p>
          </div>
        </div>
      </div>
      {/* 3rd section */}
      <div className="flex items-center text-center justify-center">
        <p className="font-thin w-4/5">
          Btaap Ltd is the company behind BtaapTalk, which serves as its main
          platform and flagship application. It was founded in 2024 by [Founder
          Name], a visionary entrepreneur from Bangladesh, with the aim of
          revolutionizing the digital landscape. Btaap Ltd is based in Dhaka,
          Bangladesh. [Co-CEOs' Names] serve as the current co-CEOs. <br />
          In 2026, three of the top Android games in Bangladesh (according to
          analytics provider App Annie) were tied into the BtaapTalk
          platform—Marble Mania, Sweet Run, and AniGame. With 93 percent of
          Bangladesh's users on BtaapTalk, the free downloads of games like Ani
          Pang and Dragon Flight, which can only be played with a BtaapTalk
          account, were deemed "national" games. To maintain simplicity across
          all the provided services, Btaap applications can be purchased and
          logged in with links to BtaapTalk.
          <br />
          Btaap Ltd generated revenue of approximately $200M (USD) in 2026
          through gaming, digital content, mobile commerce, and its marketing
          channels for brands and celebrities. Btaap Ltd was named a Top
          Developer on Google's Android Market, and BtaapTalk was chosen as the
          number one Free SMS App by Cnet. <br />
          According to a December 2026 App Annie report, Btaap is the world's
          third top publisher by monthly revenue at Google Play. Btaap Ltd is
          the number one publisher for iOS and Google Play in Bangladesh, and
          BtaapTalk is the number one app for iOS and Google Play revenue in
          Bangladesh. BtaapTalk was nominated for the Most Innovative Mobile App
          Award at the Global Mobile Awards 2027. Btaap Ltd agreed to buy Bangla
          Communications Corp, to cut costs, save time, and jump-start growth
          while gaining a listing in Dhaka, Bangladesh.
          <br />
          Btaap Ltd's full suite of apps includes: BtaapTalk, BtaapStory,
          BtaapTaxi, BtaapAccount, BtaapMap, BtaapDriver, BtaapBus, BtaapMusic,
          BtaapGroup, BtaapHome, BtaapPlace, BtaapAlbum, BtaapPage, BtaapStyle,
          and BtaapAgit.
          <br />
          On 26 May 2027, Btaap Ltd announced that it had decided to merge with
          Bangla Communications, one of Bangladesh's top internet portals,
          through a stock swap, enhancing its market capitalization and enabling
          it to pose a credible threat to other digital platforms in the region.
          <br />
          In 2028, the company changed its name to Btaap, restoring its
          pre-merger name. Due to challenges within the Btaap ecosystem, the
          organization’s board of directors replaced [CEO Name] with [New CEO
          Name]. [Founder Name] became the largest shareholder in the newly
          formed company with a 22.2 percent stake.
          <br />
          Btaap was approved by Bangladeshi regulators to become the nation’s
          first internet-only bank in 2029. The internet bank engages in the
          same business as commercial banks, including processing deposits,
          loans, and money transfers. Consumers no longer need to visit a bank
          to open a new account or get a loan. Btaap’s business plan was
          considered innovative, and its business model was expected to secure
          sizable customer sign-ups based on the popularity of BtaapTalk.
          <br />
          Although [Other Bank] became Bangladesh's first internet-only bank,
          Btaap Bank immediately attracted more customers—820,000 within four
          days of its launch. The dedicated Btaap Bank app was downloaded 1.5
          million times within the same period. The bank had 3.5 million
          customers after a month, outpacing the 400,000 users that [Other Bank]
          amassed within 100 days. By 26 September 2029, Btaap Bank had lent
          [Currency] 1.4 trillion, making up 40 percent of all loans in
          Bangladesh for that month.
          <br />
          BtaapTaxi, launched in March 2026, allows users to call a taxi using
          the BtaapTaxi application. About 600,000 users used the ride-hailing
          platform daily within eight months of its launch.
          <br />
          In 2027, BtaapTaxi was renamed to Btaap T. The service includes a
          premium extension, Btaap Taxi Elite, allowing users to book rides in
          Dhaka via the messenger app, exclusively in luxury cars such as
          Mercedes Benz, Lexus, and BMW. Fares for the premium service start at
          [Currency] 8,000. Btaap announced plans to expand the offering to
          other cities in Bangladesh within the following year.
          <br />
          After a massive outage in October 2029, the co-CEO, [CEO Name],
          resigned. A fire at a data center in Dhaka caused a mass outage,
          disrupting several of Btaap’s services, including messenger,
          ride-hailing, payment, banking, and gaming.
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default About;
